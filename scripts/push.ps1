#requires -Version 5
<#
.SYNOPSIS
  Push the current branch to GitHub using the token stored in %USERPROFILE%\.github-token.
.DESCRIPTION
  The token lives OUTSIDE the repo (never committable). The authenticated URL is
  built per-invocation and never written to .git/config. Credential helpers are
  disabled for the push to avoid any secret storage side effects.
#>
[CmdletBinding()]
param(
    [string]$Remote = 'origin',
    [string]$Branch
)
$ErrorActionPreference = 'Stop'
$tokenFile = Join-Path $env:USERPROFILE '.github-token'
if (-not (Test-Path $tokenFile)) {
    Write-Host "[x] 未找到 token 文件：$tokenFile" -ForegroundColor Red
    Write-Host '    把 GitHub PAT 写进该文件（一行即可），然后重试。'
    exit 1
}
$token = (Get-Content $tokenFile -Raw).Trim()
if (-not $token) {
    Write-Host '[x] token 文件为空' -ForegroundColor Red
    exit 1
}
if (-not $Branch) { $Branch = (git rev-parse --abbrev-ref HEAD).Trim() }
$url = (git remote get-url $Remote).Trim()
if ($url -notmatch '^https://') {
    Write-Host "[x] 仅支持 https remote，当前：$url" -ForegroundColor Red
    exit 1
}
$authed = $url.Replace('https://', "https://x-access-token:$token@")
Write-Host "→ push $Branch -> $url"
& git -c credential.helper= push $authed "${Branch}:${Branch}"
exit $LASTEXITCODE
