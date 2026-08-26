#requires -Version 5
<#
.SYNOPSIS
  Push the current branch to GitHub using the token stored in %USERPROFILE%\.github-token.
.DESCRIPTION
  The token lives OUTSIDE the repo (never committable). The authenticated URL is
  built per-invocation and never written to .git/config. Credential helpers are
  disabled for the push to avoid any secret storage side effects.
  Works from any CWD: always operates on this script's repo.
#>
[CmdletBinding()]
param(
    [string]$Remote = 'origin',
    [string]$Branch
)
$ErrorActionPreference = 'Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)
$tokenFile = Join-Path $env:USERPROFILE '.github-token'
if (-not (Test-Path $tokenFile)) {
    Write-Host "[x] token file not found: $tokenFile" -ForegroundColor Red
    Write-Host '    Write your GitHub PAT into that file (one line), then retry.'
    exit 1
}
$token = (Get-Content $tokenFile -Raw).Trim()
if (-not $token) {
    Write-Host '[x] token file is empty' -ForegroundColor Red
    exit 1
}
if (-not $Branch) { $Branch = (git rev-parse --abbrev-ref HEAD).Trim() }
$url = (git remote get-url $Remote).Trim()
if ($url -notmatch '^https://') {
    Write-Host "[x] only https remotes are supported, got: $url" -ForegroundColor Red
    exit 1
}
$authed = $url.Replace('https://', "https://x-access-token:$token@")
Write-Host "-> push $Branch -> $url"
& git -c credential.helper= push $authed "${Branch}:${Branch}"
exit $LASTEXITCODE
