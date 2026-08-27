window.__ModuleLoader__.load({
	id: "dsh-quick-phrases",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		//#region dsh-css:client/quick-phrases.css
		const css = ".qp-settings-section{display:flex;flex-direction:column;gap:8px;padding:12px 16px;max-width:760px}.qp-settings-note{font-size:12px;color:var(--dsw-alias-label-tertiary)}.qp-bar-container{position:fixed;z-index:2147483000}.qp-bar-container .qp-panel{position:absolute;bottom:100%;left:0;margin-bottom:8px}.qp-bar.qp-bar-collapsed{justify-content:flex-end;background:transparent;box-shadow:none;padding:0 2px}.qp-bar.qp-bar-collapsed .qp-ghost-entry{opacity:.35;background:transparent;border-style:dashed;box-shadow:none}.qp-ghost-entry:hover{opacity:1}.qp-bar{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:8px 12px;box-sizing:border-box;max-width:calc(100vw - 32px);background:var(--dsw-alias-bg-module-platform);border:1px solid var(--dsw-alias-border-l2);border-radius:8px;box-shadow:0 4px 12px rgb(0 0 0 / 12%);cursor:grab;user-select:none;touch-action:none}.qp-bar:active{cursor:grabbing}.qp-send{color:var(--dsw-alias-state-business-primary);font-size:10px;flex:none}.qp-chip{display:inline-flex;align-items:center;gap:4px;max-width:280px;height:24px;padding:0 10px;font-size:12px;line-height:22px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-module-platform);border:1px solid var(--dsw-alias-border-l2);border-radius:999px;cursor:pointer;transition:color .12s,border-color .12s,background .12s;white-space:nowrap;font-family:inherit}.qp-chip:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-state-business-primary);background:var(--dsw-alias-interactive-bg-hover)}.qp-chip .qp-chip-text{overflow:hidden;text-overflow:ellipsis}.qp-chip .qp-star{color:var(--dsw-alias-state-business-primary);font-size:10px;flex:none}.qp-chip-manage{color:var(--dsw-alias-label-tertiary);border-style:dashed}.qp-panel{width:560px;max-width:calc(100vw - 32px);display:flex;flex-direction:column;background:var(--dsw-alias-bg-module-platform);border:1px solid var(--dsw-alias-border-l2);border-radius:12px;box-shadow:0 12px 32px rgb(0 0 0 / 18%);overflow:hidden}.qp-panel-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid var(--dsw-alias-border-l2);font-size:13px;font-weight:600;color:var(--dsw-alias-label-primary);flex:none;background:var(--dsw-alias-bg-module-platform)}.qp-panel-body{flex:1;min-height:0;max-height:420px;overflow-y:auto;padding:8px 14px;display:flex;flex-direction:column;gap:6px}.qp-row{display:flex;align-items:center;gap:6px}.qp-row input{height:26px;font-size:12px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l2);border-radius:6px;padding:0 8px;font-family:inherit;outline:none}.qp-row input:focus{border-color:var(--dsw-alias-state-business-primary)}.qp-name{width:110px;flex:none}.qp-text{flex:1;min-width:0}.qp-icon-btn{width:26px;height:26px;flex:none;display:inline-flex;align-items:center;justify-content:center;font-size:12px;color:var(--dsw-alias-label-tertiary);background:transparent;border:1px solid transparent;border-radius:6px;cursor:pointer;font-family:inherit;transition:color .12s,background .12s,border-color .12s}.qp-icon-btn:hover{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover)}.qp-icon-active{color:var(--dsw-alias-state-business-primary)}.qp-icon-danger:hover{color:var(--dsw-alias-state-error-primary)}.qp-panel-foot{display:flex;align-items:center;gap:12px;padding:8px 14px;border-top:1px solid var(--dsw-alias-border-l2);font-size:12px;color:var(--dsw-alias-label-secondary);flex-wrap:wrap;flex:none}.qp-link{color:var(--dsw-alias-state-business-primary);cursor:pointer;background:none;border:none;font-size:12px;padding:0;font-family:inherit}.qp-link:hover{text-decoration:underline}.qp-link-danger{color:var(--dsw-alias-state-error-primary)}.qp-check{display:inline-flex;align-items:center;gap:5px;cursor:pointer}.qp-hint{margin-left:auto;color:var(--dsw-alias-label-tertiary);font-size:11px}.qp-empty{color:var(--dsw-alias-label-tertiary);font-size:12px;padding:14px 0;text-align:center}.qp-json-wrap{padding:4px 14px 10px;display:flex;flex-direction:column;gap:6px;flex:none;border-bottom:1px solid var(--dsw-alias-border-l2)}.qp-json{width:100%;height:130px;box-sizing:border-box;resize:vertical;font-family:var(--ds-font-family-code,\"Consolas\",monospace);font-size:11px;line-height:1.5;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l2);border-radius:8px;padding:8px;outline:none}.qp-json:focus{border-color:var(--dsw-alias-state-business-primary)}.qp-json-error{color:var(--dsw-alias-state-error-primary);font-size:11px}.qp-panel-standalone{position:fixed;z-index:2147483000}.qp-panel-standalone .qp-panel-head{cursor:grab;user-select:none;touch-action:none}.qp-panel-standalone .qp-panel-head:active{cursor:grabbing}";
		const tagId = "dsh-quick-phrases/quick-phrases.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-quick-phrases";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		//#endregion
		//#region lib/store.js
		/** localStorage key for the phrase table (browser-owned, never synced). */
		const STORAGE_KEY = "dsh-quick-phrases:v2";
		let idSeq = 0;
		const freshId = () => `qp-${Date.now().toString(36)}-${(idSeq++).toString(36)}`;
		/**
		 * Seeded on first run; 恢复默认 restores exactly this table.
		 * `slash`（v0.3.0）= 是否出现在 `/` 菜单。默认只放一头(继续)一尾(日报)
		 * 加第二个(解释)，其余短语只走 chips 条，让 `/` 菜单保持清爽。
		 */
		const DEFAULT_PHRASES = [
			{ id: "d-continue", name: "继续", text: "继续上面的工作，从上次中断的地方接着做。", pinned: true, autoSubmit: true, slash: true, bar: true },
			{ id: "d-explain", name: "解释", text: "请用通俗的语言解释一下刚才的改动和结论。", pinned: false, autoSubmit: false, slash: true, bar: true },
			{ id: "d-review", name: "复查", text: "复查一下你刚才的方案/改动，指出潜在问题并给出改进建议。", pinned: false, autoSubmit: false, slash: false, bar: true },
			{ id: "d-test", name: "测试", text: "为刚才的改动补充必要的测试并运行验证，把结果汇总给我。", pinned: false, autoSubmit: false, slash: false, bar: true },
			{ id: "d-commit", name: "提交", text: "把当前改动整理成一次 git 提交，先给我看拟好的 commit message 再执行。", pinned: false, autoSubmit: false, slash: false, bar: true },
			{ id: "d-daily", name: "日报", text: "根据今天的会话记录，帮我整理一份今日工作日报（做了什么、结果如何、待办）。", pinned: false, autoSubmit: false, slash: true, bar: true }
		];
		/** Narrow one unknown row to a valid phrase, or null when unusable. */
		function sanitizePhrase(raw) {
			if (raw === null || typeof raw !== "object") return null;
			const name = typeof raw.name === "string" ? raw.name.trim() : "";
			const text = typeof raw.text === "string" ? raw.text : "";
			if (name === "") return null;
			return {
				id: typeof raw.id === "string" && raw.id !== "" ? raw.id : freshId(),
				name,
				text,
				pinned: raw.pinned === true,
				autoSubmit: raw.autoSubmit === true,
				// 旧表(无 slash 字段)迁移默认否 —— 不突然涌进 / 菜单。
				slash: raw.slash === true,
				// 旧表(无 bar 字段)迁移默认显示 —— 历史行为就是全部上条。
				bar: raw.bar !== false
			};
		}
		/** Narrow an unknown persisted bar position to {offsetX, offsetY}, or null. */
		function sanitizeBarPos(raw) {
			if (raw === null || typeof raw !== "object") return null;
			if (Number.isFinite(raw.offsetX) && Number.isFinite(raw.offsetY)) {
				return { offsetX: raw.offsetX, offsetY: raw.offsetY };
			}
			if (Number.isFinite(raw.x) && Number.isFinite(raw.y)) {
				return null;
			}
			return null;
		}
		const defaultState = () => ({
			version: 3,
			barVisible: true,
			barPos: null,
			phrases: DEFAULT_PHRASES.map((phrase) => ({ ...phrase }))
		});
		function loadState() {
			try {
				const raw = localStorage.getItem(STORAGE_KEY);
				if (raw === null) return defaultState();
				const parsed = JSON.parse(raw);
				const phrases = Array.isArray(parsed?.phrases) ? parsed.phrases.map(sanitizePhrase).filter((phrase) => phrase !== null) : [];
				return { version: 3, barVisible: parsed?.barVisible !== false, barPos: sanitizeBarPos(parsed?.barPos), phrases };
			} catch {
				return defaultState();
			}
		}
		const listeners = /* @__PURE__ */ new Set();
		let state = loadState();
		function emit() {
			for (const listener of [...listeners]) try {
				listener();
			} catch {}
		}
		//#region durable persistence (host file + localStorage fallback)
		/** Host route mounted by the host entry (same origin, fenced). */
		const HOST_URL = "/plugins/dsh-quick-phrases/phrases";
		/** Legacy keys kept for one-time migration when the host file is absent. */
		const LEGACY_KEYS = ["dsh-quick-phrases:v2", "dsh-quick-phrases:v1"];
		let saveTimer = 0;
		let hostAvailable = true;
		/** Debounced durable write; localStorage stays the instant cache. */
		function persistToHost(next) {
			if (hostAvailable === false) return;
			if (saveTimer !== 0) clearTimeout(saveTimer);
			saveTimer = setTimeout(() => {
				saveTimer = 0;
				try {
					fetch(HOST_URL, {
						method: "POST",
						headers: { "content-type": "application/json" },
						body: JSON.stringify(next)
					}).catch(() => {
						hostAvailable = false;
					});
				} catch {
					hostAvailable = false;
				}
			}, 400);
		}
		/**
		 * Boot-time hydration: the host file is the source of truth. When the
		 * host has no file yet (first run), seed it from the newest legacy
		 * localStorage key (v2 → v1) or defaults, and write the file. When the
		 * host is unreachable, keep whatever localStorage had.
		 */
		async function hydrateFromHost() {
			let body;
			try {
				const response = await fetch(HOST_URL, { cache: "no-store" });
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				body = await response.json();
			} catch {
				hostAvailable = false;
				return;
			}
			if (body?.missing === true) {
				let seed = null;
				for (const key of [STORAGE_KEY, ...LEGACY_KEYS]) {
					try {
						const raw = localStorage.getItem(key);
						if (raw === null) continue;
						const parsed = JSON.parse(raw);
						if (parsed !== null && typeof parsed === "object" && Array.isArray(parsed.phrases)) {
							seed = parsed;
							break;
						}
					} catch {}
				}
				const validated = seed === null ? defaultState() : {
					version: 3,
					barVisible: seed.barVisible !== false,
					barPos: sanitizeBarPos(seed.barPos),
					phrases: seed.phrases.map(sanitizePhrase).filter((phrase) => phrase !== null)
				};
				store.replace(validated);
				return;
			}
			if (Array.isArray(body?.phrases)) store.replace({
				version: 3,
				barVisible: body.barVisible !== false,
				barPos: sanitizeBarPos(body.barPos),
				phrases: body.phrases.map(sanitizePhrase).filter((phrase) => phrase !== null)
			});
		}
		//#endregion
		const store = {
			get: () => state,
			subscribe(listener) {
				listeners.add(listener);
				return () => {
					listeners.delete(listener);
				};
			},
			replace(next) {
				state = next;
				try {
					localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
				} catch {}
				persistToHost(next);
				emit();
			},
			update(mutate) {
				const draft = structuredClone(state);
				mutate(draft);
				store.replace(draft);
			}
		};
		/** Phrase table mutations shared by the manage panel. */
		const ops = {
			add() {
				store.update((draft) => {
					draft.phrases.push({ id: freshId(), name: "新短语", text: "", pinned: false });
				});
			},
			update(id, patch) {
				store.update((draft) => {
					const phrase = draft.phrases.find((candidate) => candidate.id === id);
					if (phrase !== void 0) Object.assign(phrase, patch);
				});
			},
			remove(id) {
				store.update((draft) => {
					draft.phrases = draft.phrases.filter((candidate) => candidate.id !== id);
				});
			},
			togglePin(id) {
				store.update((draft) => {
					const phrase = draft.phrases.find((candidate) => candidate.id === id);
					if (phrase !== void 0) phrase.pinned = !phrase.pinned;
				});
			},
			toggleAutoSubmit(id) {
				store.update((draft) => {
					const phrase = draft.phrases.find((candidate) => candidate.id === id);
					if (phrase !== void 0) phrase.autoSubmit = !phrase.autoSubmit;
				});
			},
			toggleSlash(id) {
				store.update((draft) => {
					const phrase = draft.phrases.find((candidate) => candidate.id === id);
					if (phrase !== void 0) phrase.slash = phrase.slash !== true;
				});
			},
			toggleBar(id) {
				store.update((draft) => {
					const phrase = draft.phrases.find((candidate) => candidate.id === id);
					if (phrase !== void 0) phrase.bar = phrase.bar !== true;
				});
			},
			setBarPos(pos) {
				store.update((draft) => {
					draft.barPos = { offsetX: pos.offsetX, offsetY: pos.offsetY };
				});
			},
			move(id, delta) {
				store.update((draft) => {
					const from = draft.phrases.findIndex((candidate) => candidate.id === id);
					const to = from + delta;
					if (from < 0 || to < 0 || to >= draft.phrases.length) return;
					const [row] = draft.phrases.splice(from, 1);
					draft.phrases.splice(to, 0, row);
				});
			},
			setBarVisible(visible) {
				store.update((draft) => {
					draft.barVisible = visible === true;
				});
			},
			replaceAll(phrases) {
				store.update((draft) => {
					draft.phrases = phrases;
				});
			},
			reset() {
				store.replace(defaultState());
			}
		};
		//#endregion
		//#region lib/source.js
		/**
		 * The `/` trigger source: typing `/` lists slash-enabled phrases (置顶优先),
		 * picking one replaces the token span with the phrase text via the plain-text
		 * path. Membership is gated by the per-phrase `slash` flag (v0.3.0, default
		 * off); `matchEnter` additionally expands `/名称` + Enter inside the submit
		 * attempt for ALL non-empty phrases (explicit typed command, not menu
		 * discovery) — the input machine applies the returned {text} outcome.
		 */
		const source = {
			trigger: "/",
			name: "短语",
			// 瑕疵2修复(尝试1): 原值 3 排在技能组(order:2)之后, 菜单里短语沉底。
			// 改为 -1 让短语组排到命令/技能等全部内置组之前 —— 短语是本插件的核心入口。
			order: -1,
			async candidates(_session, { query, signal }) {
				const q = query.trim().toLowerCase();
				const usable = store.get().phrases.filter((phrase) => phrase.text.trim() !== "" && phrase.slash === true);
				const hits = usable.filter((phrase) => q === "" || phrase.name.toLowerCase().includes(q) || phrase.text.toLowerCase().includes(q));
				if (signal.aborted) return [];
				hits.sort((a, b) => a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1);
				return hits.map((phrase) => ({
					name: phrase.name,
					description: phrase.text,
					value: phrase.id,
					...phrase.pinned ? { icon: "★" } : {}
				}));
			},
			onPick({ candidate }) {
				const phrase = store.get().phrases.find((entry) => entry.id === candidate.value);
				return phrase === void 0 ? void 0 : { text: phrase.text };
			},
			matchEnter(_session, line) {
				const wanted = line.startsWith("/") ? line.slice(1).trim() : "";
				if (wanted === "") return void 0;
				const phrase = store.get().phrases.find((entry) => entry.name === wanted && entry.text.trim() !== "");
				return phrase === void 0 ? void 0 : { text: phrase.text };
			}
		};
		//#endregion
		//#region lib/components.js
		const usePhrases = () => react.useSyncExternalStore(store.subscribe, store.get, store.get);
		/**
		 * Append a phrase to the composer draft: replaces an empty draft, joins
		 * with a single space otherwise (keeps trailing newlines intact).
		 */
		function appendToDraft(actions, input, text) {
			if (actions?.setDraft === void 0) return;
			const current = typeof input?.draft === "string" ? input.draft : "";
			let next;
			if (current === "") next = text;
			else if (/[\n ]$/.test(current)) next = current + text;
			else next = current + " " + text;
			actions.setDraft(next);
		}
		/**
		 * The phrase editor core (rows + JSON import/export + foot switches),
		 * shared by the floating ⚙ popover and the DSH settings section (v0.4.0)
		 * — two entrances, one store, identical controls.
		 */
		function PhraseEditor() {
			const state = usePhrases();
			const [showJson, setShowJson] = react.useState(false);
			const [jsonDraft, setJsonDraft] = react.useState("");
			const [jsonError, setJsonError] = react.useState("");
			const applyImport = () => {
				try {
					const parsed = JSON.parse(jsonDraft);
					if (!Array.isArray(parsed)) throw new Error("需要 JSON 数组");
					const phrases = parsed.map(sanitizePhrase).filter((phrase) => phrase !== null);
					if (phrases.length === 0) throw new Error("没有有效短语（需要 name 字段）");
					ops.replaceAll(phrases);
					setShowJson(false);
					setJsonDraft("");
					setJsonError("");
				} catch (error) {
					setJsonError("导入失败：" + (error instanceof Error ? error.message : String(error)));
				}
			};
			return react_jsx_runtime.jsxs(react_jsx_runtime.Fragment, { children: [
				react_jsx_runtime.jsx("div", { className: "qp-panel-body", children: state.phrases.length === 0 ? react_jsx_runtime.jsx("div", { className: "qp-empty", children: "还没有短语，点下方「＋ 添加」。" }) : state.phrases.map((phrase) => react_jsx_runtime.jsx("div", { className: "qp-row", children: [
						react_jsx_runtime.jsx("button", {
							className: "qp-icon-btn" + (phrase.pinned ? " qp-icon-active" : ""),
							title: phrase.pinned ? "取消置顶" : "置顶（在 / 菜单和快捷条里排最前）",
							onClick: () => ops.togglePin(phrase.id),
							children: "★"
						}),
						react_jsx_runtime.jsx("input", {
							className: "qp-name",
							value: phrase.name,
							placeholder: "名称",
							onChange: (event) => ops.update(phrase.id, { name: event.target.value })
						}),
						react_jsx_runtime.jsx("input", {
							className: "qp-text",
							value: phrase.text,
							placeholder: "展开的内容",
							onChange: (event) => ops.update(phrase.id, { text: event.target.value })
						}),
						react_jsx_runtime.jsx("button", {
							className: "qp-icon-btn" + (phrase.autoSubmit ? " qp-icon-active" : ""),
							title: phrase.autoSubmit ? "点击 chip 后立即发送（已开启）" : "点击 chip 后立即发送",
							onClick: () => ops.toggleAutoSubmit(phrase.id),
							children: "➤"
						}),
						react_jsx_runtime.jsx("button", {
							className: "qp-icon-btn" + (phrase.slash ? " qp-icon-active" : ""),
							title: phrase.slash ? "已出现在 / 菜单（点击移出）" : "不在 / 菜单（点击加入）",
							onClick: () => ops.toggleSlash(phrase.id),
							children: "/"
						}),
						react_jsx_runtime.jsx("button", {
							className: "qp-icon-btn" + (phrase.bar === true ? " qp-icon-active" : ""),
							title: phrase.bar === true ? "显示在快捷条（点击移出）" : "不在快捷条（点击加入）",
							onClick: () => ops.toggleBar(phrase.id),
							children: "▬"
						}),
						react_jsx_runtime.jsx("button", { className: "qp-icon-btn", title: "上移", onClick: () => ops.move(phrase.id, -1), children: "↑" }),
						react_jsx_runtime.jsx("button", { className: "qp-icon-btn", title: "下移", onClick: () => ops.move(phrase.id, 1), children: "↓" }),
						react_jsx_runtime.jsx("button", { className: "qp-icon-btn qp-icon-danger", title: "删除", onClick: () => ops.remove(phrase.id), children: "✕" })
					] }, phrase.id)) }),
					showJson && react_jsx_runtime.jsxs("div", { className: "qp-json-wrap", children: [
						react_jsx_runtime.jsx("textarea", {
							className: "qp-json",
							value: jsonDraft,
							placeholder: "[{\"name\":\"短语名\",\"text\":\"展开内容\",\"pinned\":false}]",
							onChange: (event) => {
								setJsonDraft(event.target.value);
								setJsonError("");
							}
						}),
						jsonError !== "" && react_jsx_runtime.jsx("div", { className: "qp-json-error", children: jsonError }),
						react_jsx_runtime.jsx("div", { children: react_jsx_runtime.jsx("button", { className: "qp-link", onClick: applyImport, children: "应用导入" }) })
					] }),
					react_jsx_runtime.jsx("div", { className: "qp-panel-foot", children: [
						react_jsx_runtime.jsx("button", { className: "qp-link", onClick: () => ops.add(), children: "＋ 添加" }),
						react_jsx_runtime.jsx("label", { className: "qp-check", children: [
							react_jsx_runtime.jsx("input", {
								type: "checkbox",
								checked: state.barVisible === true,
								onChange: (event) => ops.setBarVisible(event.target.checked)
							}),
							react_jsx_runtime.jsx("span", { children: "显示快捷条" })
						] }),
						react_jsx_runtime.jsx("button", {
							className: "qp-link",
							title: "导出当前短语为 JSON，也可编辑后应用导入",
							onClick: () => {
								setJsonDraft(JSON.stringify(state.phrases.map(({ id, ...rest }) => rest), null, 2));
								setJsonError("");
								setShowJson(true);
							},
							children: "导出/导入"
						}),
						react_jsx_runtime.jsx("button", {
							className: "qp-link qp-link-danger",
							onClick: () => {
								if (window.confirm("恢复默认短语？当前配置会被覆盖。")) ops.reset();
							},
							children: "恢复默认"
						}),
						react_jsx_runtime.jsx("span", { className: "qp-hint", children: "输入 / 唤出菜单（仅带 / 标记的短语）· ★置顶排最前 · ▬是否上快捷条 · ➤点击即发送 · /名称+回车 对全部短语生效" })
					] })
			] });
		}
		/**
		 * The floating manage window (attached to chips bar): no longer an
		 * independent draggable — it's part of the bar unit. Escape still closes.
		 */
		function ManageWindow({ onClose }) {
			react.useEffect(() => {
				const onKeyDown = (event) => {
					if (event.key === "Escape") onClose();
				};
				document.addEventListener("keydown", onKeyDown, true);
				return () => document.removeEventListener("keydown", onKeyDown, true);
			}, [onClose]);
			return react_jsx_runtime.jsxs("div", {
				className: "qp-panel",
				children: [
					react_jsx_runtime.jsxs("div", {
						className: "qp-panel-head",
						children: [
							react_jsx_runtime.jsx("span", { children: "管理快捷短语" }),
							react_jsx_runtime.jsx("button", { className: "qp-icon-btn", title: "关闭", onClick: onClose, children: "✕" })
						]
					}),
					react_jsx_runtime.jsx(PhraseEditor, {})
				]
			});
		}
		/**
		 * For standalone ManageWindow (settings section): draggable by its
		 * title bar, position remembered in localStorage (but not in store).
		 */
		const clampPos = (value, min, max) => Math.max(min, Math.min(value, max));
		const keepInViewport = (pos) => ({
			x: clampPos(pos.x, 8, Math.max(8, window.innerWidth - 80)),
			y: clampPos(pos.y, 8, Math.max(8, window.innerHeight - 60))
		});
		/** 锚点矩形 + 偏移量 → 屏幕坐标（布局跟随用）。*/
		const screenFromAnchorOffset = (anchorRect, barPos) => ({
			x: anchorRect.left + barPos.offsetX,
			y: anchorRect.top + barPos.offsetY
		});
		/** 屏幕坐标 − 锚点矩形 → 偏移量（拖拽落盘用）。*/
		const offsetFromScreen = (screenPos, anchorRect) => ({
			offsetX: screenPos.x - anchorRect.left,
			offsetY: screenPos.y - anchorRect.top
		});
		const defaultStandalonePanelPos = () => keepInViewport({
			x: Math.round((window.innerWidth - 560) / 2),
			y: 96
		});
		const STANDALONE_PANEL_KEY = "dsh-quick-phrases:standalone-panel-pos";
		function StandaloneManageWindow({ onClose }) {
			const loadStandalonePos = () => {
				try {
					const raw = localStorage.getItem(STANDALONE_PANEL_KEY);
					if (raw === null) return defaultStandalonePanelPos();
					const parsed = JSON.parse(raw);
					if (parsed !== null && typeof parsed === "object" && Number.isFinite(parsed.x) && Number.isFinite(parsed.y)) {
						return keepInViewport(parsed);
					}
				} catch {}
				return defaultStandalonePanelPos();
			};
			const [pos, setPos] = react.useState(loadStandalonePos);
			const dragRef = react.useRef(null);
			react.useEffect(() => {
				const onKeyDown = (event) => {
					if (event.key === "Escape") onClose();
				};
				document.addEventListener("keydown", onKeyDown, true);
				return () => document.removeEventListener("keydown", onKeyDown, true);
			}, [onClose]);
			const onHeadPointerDown = (event) => {
				if (event.button !== 0 || event.target.closest("button") !== null) return;
				dragRef.current = { startX: event.clientX, startY: event.clientY, baseX: pos.x, baseY: pos.y };
				try {
					event.currentTarget.setPointerCapture(event.pointerId);
				} catch {}
			};
			const onHeadPointerMove = (event) => {
				const drag = dragRef.current;
				if (drag === null) return;
				setPos(keepInViewport({
					x: drag.baseX + event.clientX - drag.startX,
					y: drag.baseY + event.clientY - drag.startY
				}));
			};
			const onHeadPointerUp = (event) => {
				if (dragRef.current === null) return;
				dragRef.current = null;
				try {
					event.currentTarget.releasePointerCapture(event.pointerId);
				} catch {}
				try {
					localStorage.setItem(STANDALONE_PANEL_KEY, JSON.stringify(pos));
				} catch {}
			};
			return react_jsx_runtime.jsxs("div", {
				className: "qp-panel qp-panel-standalone",
				style: { left: pos.x, top: pos.y },
				children: [
					react_jsx_runtime.jsxs("div", {
						className: "qp-panel-head",
						title: "拖动标题栏移动窗口 · 位置会被记住",
						onPointerDown: onHeadPointerDown,
						onPointerMove: onHeadPointerMove,
						onPointerUp: onHeadPointerUp,
						onPointerCancel: onHeadPointerUp,
						children: [
							react_jsx_runtime.jsx("span", { children: "管理快捷短语" }),
							react_jsx_runtime.jsx("button", { className: "qp-icon-btn", title: "关闭", onClick: onClose, children: "✕" })
						]
					}),
					react_jsx_runtime.jsx(PhraseEditor, {})
				]
			});
		}
		/**
		 * DSH 设置页常驻 section（settings.section slot）：点导航项即弹出浮动
		 * 管理窗（可拖到任意位置），关掉后可在此重开；快捷条隐藏时设置页永远
		 * 能管理短语（用户实测需求，机制同 Token 面板）。
		 */
		function QuickPhrasesSettingsSection() {
			const [open, setOpen] = react.useState(true);
			return react_jsx_runtime.jsxs("div", { className: "qp-settings-section", children: [
				react_jsx_runtime.jsx("div", { className: "qp-settings-note", children: "浮动管理窗已自动打开：拖标题栏可放到任意位置（位置会被记住）。关掉后点下方按钮重开；输入框旁的「⚙ 管理」也随时可用。" }),
				open ? null : react_jsx_runtime.jsx("div", {
					children: react_jsx_runtime.jsx("button", { className: "qp-link", onClick: () => setOpen(true), children: "打开管理窗" })
				}),
				open && react_jsx_runtime.jsx(StandaloneManageWindow, { onClose: () => setOpen(false) })
			] });
		}
		/**
		 * v0.7.0: chips bar 默认位置计算 —— 浮动窗口首次加载时的起始位置（底部居中）。
		 */
		const defaultBarPos = () => keepInViewport({
			x: Math.max(16, Math.round((window.innerWidth - 600) / 2)),
			y: Math.max(60, window.innerHeight - 120)
		});
		/**
		 * v0.7.4: 相对锚点定位 + 拖拽修复 —— 拖拽期间暂停跟随循环，落盘后再恢复。
		 * 监听锚点变化（ResizeObserver + MutationObserver + 定时器后备），自动调整 bar 位置。
		 */
		function QuickPhrasesBar(props) {
			const state = usePhrases();
			const [managing, setManaging] = react.useState(false);
			const containerRef = react.useRef(null);
			const [pos, setPos] = react.useState({ x: 0, y: 0 });
			const posRef = react.useRef({ x: 0, y: 0 });
			const dragRef = react.useRef(null);
			const anchorRef = react.useRef(null);
			const lastAnchorRectRef = react.useRef(null);
			const openManage = () => setManaging(true);
			const setScreenPos = (next) => {
				const clamped = keepInViewport(next);
				posRef.current = clamped;
				setPos(clamped);
			};
			/**
			 * 查找锚点元素：composer textarea 或其父容器。
			 * 从当前组件向上爬 DOM，找到同时包含 textarea 的公共容器。
			 */
			const findAnchor = () => {
				if (containerRef.current === null) return null;
				let parent = containerRef.current.parentElement;
				while (parent !== null) {
					const textarea = parent.querySelector('textarea[placeholder]');
					if (textarea !== null) return textarea;
					parent = parent.parentElement;
					if (parent === document.body) break;
				}
				return null;
			};
			/**
			 * 计算 bar 应该在的屏幕位置 = 锚点位置 + 偏移量。
			 * 偏移量从 store.barPos 读取；首次加载时计算默认偏移（底部居中）。
			 */
			const computeBarPosition = () => {
				const anchor = anchorRef.current ?? findAnchor();
				if (anchor === null) {
					return keepInViewport(defaultBarPos());
				}
				anchorRef.current = anchor;
				const anchorRect = anchor.getBoundingClientRect();
				lastAnchorRectRef.current = { x: anchorRect.left, y: anchorRect.top, w: anchorRect.width, h: anchorRect.height };
				if (state.barPos !== null) {
					return keepInViewport(screenFromAnchorOffset(anchorRect, state.barPos));
				}
				return keepInViewport(defaultBarPos());
			};
			/**
			 * 挂载时计算初始位置，并设置监听器。
			 */
			react.useEffect(() => {
				setScreenPos(computeBarPosition());
				const anchor = anchorRef.current ?? findAnchor();
				if (anchor === null) return;
				anchorRef.current = anchor;
				let resizeObserver = null;
				let mutationObserver = null;
				let intervalId = 0;
				const updatePosition = () => {
					if (dragRef.current !== null) return;
					setScreenPos(computeBarPosition());
				};
				try {
					resizeObserver = new ResizeObserver(() => updatePosition());
					resizeObserver.observe(anchor);
					mutationObserver = new MutationObserver(() => updatePosition());
					mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] });
				} catch {}
				intervalId = setInterval(() => {
					if (dragRef.current !== null || anchorRef.current === null) return;
					const rect = anchorRef.current.getBoundingClientRect();
					const last = lastAnchorRectRef.current;
					if (last === null || rect.left !== last.x || rect.top !== last.y || rect.width !== last.w || rect.height !== last.h) {
						updatePosition();
					}
				}, 300);
				return () => {
					if (resizeObserver !== null) resizeObserver.disconnect();
					if (mutationObserver !== null) mutationObserver.disconnect();
					if (intervalId !== 0) clearInterval(intervalId);
				};
			}, [state.barPos]);
			/** 拖拽处理器：拖拽时暂停跟随，落盘时写入新偏移量。*/
			const onContainerPointerDown = (event) => {
				if (event.button !== 0) return;
				const target = event.target;
				if (target.closest("button") !== null || target.closest(".qp-panel-body") !== null || target.closest("input") !== null || target.closest("textarea") !== null) return;
				const current = posRef.current;
				dragRef.current = { startX: event.clientX, startY: event.clientY, baseX: current.x, baseY: current.y };
				try {
					event.currentTarget.setPointerCapture(event.pointerId);
				} catch {}
			};
			const onContainerPointerMove = (event) => {
				const drag = dragRef.current;
				if (drag === null) return;
				setScreenPos({
					x: drag.baseX + event.clientX - drag.startX,
					y: drag.baseY + event.clientY - drag.startY
				});
			};
			const onContainerPointerUp = (event) => {
				if (dragRef.current === null) return;
				dragRef.current = null;
				try {
					event.currentTarget.releasePointerCapture(event.pointerId);
				} catch {}
				const anchor = anchorRef.current ?? findAnchor();
				const screen = posRef.current;
				if (anchor === null) {
					ops.setBarPos({ offsetX: screen.x, offsetY: screen.y });
					return;
				}
				anchorRef.current = anchor;
				const anchorRect = anchor.getBoundingClientRect();
				ops.setBarPos(offsetFromScreen(screen, anchorRect));
			};
			/** Live refs: the deferred submit must read the LATEST snapshots, not the click render's. */
			const latest = react.useRef({ input: props.input, actions: props.inputActions });
			latest.current = { input: props.input, actions: props.inputActions };
			/**
			 * Chip click: fill the draft; ➤ phrases submit once the fill has landed.
			 * Submit is deferred + verified: poll the live snapshot until the phrase
			 * is actually in the draft (phase back to plain), then submit — bounded
			 * at ~1s, after which the text stays in the box for a manual send
			 * instead of racing out an empty/old draft.
			 */
			const usePhrase = (phrase) => {
				const actions = props.inputActions;
				if (actions?.setDraft === void 0) return;
				appendToDraft(actions, props.input, phrase.text);
				if (phrase.autoSubmit !== true) return;
				let tries = 0;
				const trySubmit = () => {
					tries += 1;
					const snapshot = latest.current.input;
					const ready = snapshot?.phase === "plain"
						&& typeof snapshot?.draft === "string"
						&& snapshot.draft.includes(phrase.text);
					if (ready) {
						latest.current.actions?.submit?.();
						return;
					}
					if (tries < 10) setTimeout(trySubmit, 100);
				};
				setTimeout(trySubmit, 120);
			};
			/**
			 * v0.3.1: 隐藏态不再返回 null —— 那会把长在条子上的唯一入口(⚙管理)
			 * 一起埋掉, 用户隐藏后就没有任何恢复入口了。改为渲染"塌缩态": 一枚
			 * 低透明度小齿轮（v0.7.0 浮动）, 点开同一块管理面板, 从里面勾选
			 * 「显示快捷条」即可恢复(思路同 Token 面板的常驻入口)。
			 */
			if (state.barVisible !== true) {
				return react_jsx_runtime.jsxs("div", {
					ref: containerRef,
					className: "qp-bar-container",
					style: { left: pos.x, top: pos.y },
					onPointerDown: onContainerPointerDown,
					onPointerMove: onContainerPointerMove,
					onPointerUp: onContainerPointerUp,
					onPointerCancel: onContainerPointerUp,
					children: [
						managing && react_jsx_runtime.jsx(ManageWindow, { onClose: () => setManaging(false) }),
						react_jsx_runtime.jsx("div", {
							className: "qp-bar qp-bar-collapsed",
							children: react_jsx_runtime.jsx("button", {
								className: "qp-chip qp-chip-manage qp-ghost-entry",
								title: "快捷条已隐藏 · 点此打开短语设置（勾选「显示快捷条」恢复）· 拖动可移位",
								onClick: openManage,
								children: "⚙"
							})
						})
					]
				});
			}
			const chips = state.phrases.filter((phrase) => phrase.text.trim() !== "" && phrase.bar === true);
			return react_jsx_runtime.jsxs("div", {
				ref: containerRef,
				className: "qp-bar-container",
				style: { left: pos.x, top: pos.y },
				onPointerDown: onContainerPointerDown,
				onPointerMove: onContainerPointerMove,
				onPointerUp: onContainerPointerUp,
				onPointerCancel: onContainerPointerUp,
				children: [
					managing && react_jsx_runtime.jsx(ManageWindow, { onClose: () => setManaging(false) }),
					react_jsx_runtime.jsxs("div", {
						className: "qp-bar",
						title: "拖动快捷条可移到任意位置 · 位置会被记住",
						children: [
							chips.map((phrase) => react_jsx_runtime.jsx("button", {
								className: "qp-chip" + (phrase.pinned ? " qp-chip-pinned" : ""),
								title: phrase.autoSubmit === true ? `${phrase.text}\n（➤ 点击后立即发送）` : phrase.text,
								onClick: () => usePhrase(phrase),
								children: [
									phrase.pinned ? react_jsx_runtime.jsx("span", { className: "qp-star", children: "★" }) : null,
									react_jsx_runtime.jsx("span", { className: "qp-chip-text", children: phrase.name }),
									phrase.autoSubmit === true ? react_jsx_runtime.jsx("span", { className: "qp-send", children: "➤" }) : null
								]
							}, phrase.id)),
							react_jsx_runtime.jsx("button", {
								className: "qp-chip qp-chip-manage",
								title: "管理快捷短语",
								onClick: openManage,
								children: react_jsx_runtime.jsx("span", { className: "qp-chip-text", children: "⚙ 管理" })
							})
						]
					})
				]
			});
		}
		//#endregion
		//#region lib/client/index.js
		/** Required client services: the slot registry and the input-trigger roster. */
		const inject = [
			"slots",
			"inputTriggers"
		];
		/**
		 * Client plugin body: register the `/` phrase source and the composer dock
		 * chip row. Zero model-visible effect — picks splice literal text into the
		 * composer draft, which the user still submits themselves.
		 * @param ctx - client root context.
		 */
		function apply(ctx) {
			const inputTriggers = ctx.get("inputTriggers");
			ctx.effect(() => inputTriggers.registerSource(source), "quick-phrases: / source");
			ctx.effect(() => ctx.slots.inject("conversation.input.dock", () => ctx.slots.register({
				name: "conversation.input.dock",
				id: "quick-phrases",
				order: 30
			}, QuickPhrasesBar)), "quick-phrases: composer dock");
			ctx.effect(() => ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "quick-phrases",
				order: 100,
				label: () => "快捷短语",
				inject: () => ({})
			}, QuickPhrasesSettingsSection)), "quick-phrases: settings section");
			hydrateFromHost();
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		/** Test/debug hook: the phrase store (not consumed by the framework). */
		exports.__store = store;
		/** Test/debug hook: bar offset math (not consumed by the framework). */
		exports.__barPos = { screenFromAnchorOffset, offsetFromScreen };
		return module.exports;
	}
});
