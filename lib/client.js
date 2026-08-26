window.__ModuleLoader__.load({
	id: "dsh-quick-phrases",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		//#region dsh-css:client/quick-phrases.css
		const css = ".qp-bar.qp-bar-collapsed{justify-content:flex-end;background:transparent;box-shadow:none;padding:0 2px}.qp-bar.qp-bar-collapsed .qp-ghost-entry{opacity:.35;background:transparent;border-style:dashed;box-shadow:none}.qp-ghost-entry:hover{opacity:1}.qp-bar{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:2px 2px 6px;position:relative;box-sizing:border-box;width:100%}.qp-send{color:var(--dsw-alias-state-business-primary);font-size:10px;flex:none}.qp-chip{display:inline-flex;align-items:center;gap:4px;max-width:280px;height:24px;padding:0 10px;font-size:12px;line-height:22px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-module-platform);border:1px solid var(--dsw-alias-border-l2);border-radius:999px;cursor:pointer;transition:color .12s,border-color .12s,background .12s;white-space:nowrap;font-family:inherit}.qp-chip:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-state-business-primary);background:var(--dsw-alias-interactive-bg-hover)}.qp-chip .qp-chip-text{overflow:hidden;text-overflow:ellipsis}.qp-chip .qp-star{color:var(--dsw-alias-state-business-primary);font-size:10px;flex:none}.qp-chip-manage{color:var(--dsw-alias-label-tertiary);border-style:dashed}.qp-panel{position:fixed;z-index:2147483000;width:560px;max-width:calc(100vw - 32px);display:flex;flex-direction:column;background:var(--dsw-alias-bg-module-platform);border:1px solid var(--dsw-alias-border-l2);border-radius:12px;box-shadow:0 12px 32px rgb(0 0 0 / 18%);overflow:hidden}.qp-panel-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid var(--dsw-alias-border-l2);font-size:13px;font-weight:600;color:var(--dsw-alias-label-primary);flex:none}.qp-panel-body{flex:1;min-height:0;overflow-y:auto;padding:8px 14px;display:flex;flex-direction:column;gap:6px}.qp-row{display:flex;align-items:center;gap:6px}.qp-row input{height:26px;font-size:12px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l2);border-radius:6px;padding:0 8px;font-family:inherit;outline:none}.qp-row input:focus{border-color:var(--dsw-alias-state-business-primary)}.qp-name{width:110px;flex:none}.qp-text{flex:1;min-width:0}.qp-icon-btn{width:26px;height:26px;flex:none;display:inline-flex;align-items:center;justify-content:center;font-size:12px;color:var(--dsw-alias-label-tertiary);background:transparent;border:1px solid transparent;border-radius:6px;cursor:pointer;font-family:inherit;transition:color .12s,background .12s,border-color .12s}.qp-icon-btn:hover{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover)}.qp-icon-active{color:var(--dsw-alias-state-business-primary)}.qp-icon-danger:hover{color:var(--dsw-alias-state-error-primary)}.qp-panel-foot{display:flex;align-items:center;gap:12px;padding:8px 14px;border-top:1px solid var(--dsw-alias-border-l2);font-size:12px;color:var(--dsw-alias-label-secondary);flex-wrap:wrap;flex:none}.qp-link{color:var(--dsw-alias-state-business-primary);cursor:pointer;background:none;border:none;font-size:12px;padding:0;font-family:inherit}.qp-link:hover{text-decoration:underline}.qp-link-danger{color:var(--dsw-alias-state-error-primary)}.qp-check{display:inline-flex;align-items:center;gap:5px;cursor:pointer}.qp-hint{margin-left:auto;color:var(--dsw-alias-label-tertiary);font-size:11px}.qp-empty{color:var(--dsw-alias-label-tertiary);font-size:12px;padding:14px 0;text-align:center}.qp-json-wrap{padding:4px 14px 10px;display:flex;flex-direction:column;gap:6px;flex:none;border-bottom:1px solid var(--dsw-alias-border-l2)}.qp-json{width:100%;height:130px;box-sizing:border-box;resize:vertical;font-family:var(--ds-font-family-code,\"Consolas\",monospace);font-size:11px;line-height:1.5;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-base);border:1px solid var(--dsw-alias-border-l2);border-radius:8px;padding:8px;outline:none}.qp-json:focus{border-color:var(--dsw-alias-state-business-primary)}.qp-json-error{color:var(--dsw-alias-state-error-primary);font-size:11px}";
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
			{ id: "d-continue", name: "继续", text: "继续上面的工作，从上次中断的地方接着做。", pinned: true, autoSubmit: true, slash: true },
			{ id: "d-explain", name: "解释", text: "请用通俗的语言解释一下刚才的改动和结论。", pinned: false, autoSubmit: false, slash: true },
			{ id: "d-review", name: "复查", text: "复查一下你刚才的方案/改动，指出潜在问题并给出改进建议。", pinned: false, autoSubmit: false, slash: false },
			{ id: "d-test", name: "测试", text: "为刚才的改动补充必要的测试并运行验证，把结果汇总给我。", pinned: false, autoSubmit: false, slash: false },
			{ id: "d-commit", name: "提交", text: "把当前改动整理成一次 git 提交，先给我看拟好的 commit message 再执行。", pinned: false, autoSubmit: false, slash: false },
			{ id: "d-daily", name: "日报", text: "根据今天的会话记录，帮我整理一份今日工作日报（做了什么、结果如何、待办）。", pinned: false, autoSubmit: false, slash: true }
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
				slash: raw.slash === true
			};
		}
		const defaultState = () => ({
			version: 1,
			barVisible: true,
			phrases: DEFAULT_PHRASES.map((phrase) => ({ ...phrase }))
		});
		function loadState() {
			try {
				const raw = localStorage.getItem(STORAGE_KEY);
				if (raw === null) return defaultState();
				const parsed = JSON.parse(raw);
				const phrases = Array.isArray(parsed?.phrases) ? parsed.phrases.map(sanitizePhrase).filter((phrase) => phrase !== null) : [];
				return { version: 1, barVisible: parsed?.barVisible !== false, phrases };
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
					version: 2,
					barVisible: seed.barVisible !== false,
					phrases: seed.phrases.map(sanitizePhrase).filter((phrase) => phrase !== null)
				};
				store.replace(validated);
				return;
			}
			if (Array.isArray(body?.phrases)) store.replace({
				version: 2,
				barVisible: body.barVisible !== false,
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
		/** The manage popover: edit / pin / reorder / delete, JSON import & export. */
		function ManagePanel({ pos, onClose }) {
			const state = usePhrases();
			const [showJson, setShowJson] = react.useState(false);
			const [jsonDraft, setJsonDraft] = react.useState("");
			const [jsonError, setJsonError] = react.useState("");
			react.useEffect(() => {
				const onPointerDown = (event) => {
					const target = event.target;
					if (target?.closest?.(".qp-panel") === null && target?.closest?.(".qp-chip-manage") === null) onClose();
				};
				const onKeyDown = (event) => {
					if (event.key === "Escape") onClose();
				};
				document.addEventListener("pointerdown", onPointerDown, true);
				document.addEventListener("keydown", onKeyDown, true);
				return () => {
					document.removeEventListener("pointerdown", onPointerDown, true);
					document.removeEventListener("keydown", onKeyDown, true);
				};
			}, [onClose]);
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
			return react_jsx_runtime.jsx("div", {
				className: "qp-panel",
				style: { left: pos.left, bottom: pos.bottom, top: "auto" },
				onClick: (event) => event.stopPropagation(),
				onKeyDown: (event) => event.stopPropagation(),
				children: [
					react_jsx_runtime.jsx("div", { className: "qp-panel-head", children: [
						react_jsx_runtime.jsx("span", { children: "管理快捷短语" }),
						react_jsx_runtime.jsx("button", { className: "qp-icon-btn", title: "关闭", onClick: onClose, children: "✕" })
					] }),
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
						react_jsx_runtime.jsx("span", { className: "qp-hint", children: "输入 / 唤出菜单（仅带 / 标记的短语）· ★置顶排最前 · ➤点击即发送 · /名称+回车 对全部短语生效" })
					] })
				]
			});
		}
		/**
		 * 瑕疵1修复(尝试1): 运行时镜像对齐。此前两次静态方案(GoalBar 宽度公式、
		 * width:100%)都失败, 根因假设是 dock 槽的包裹层与输入卡不同源、存在额外
		 * 缩进。改为不猜结构: 从快捷条向上爬祖先, 找到第一个同时包含 composer
		 * textarea 的公共容器, 再从 textarea 上溯到该容器的顶层子节点(即输入卡),
		 * 实测其 getBoundingClientRect() 把条子的 marginLeft/width 掰成完全一致。
		 * 结构再怎么包, 量出来的总是真实几何。
		 */
		function alignBar(bar) {
			let host = bar.parentElement;
			let textarea = null;
			while (host !== null && host !== document.body) {
				textarea = host.querySelector("textarea");
				if (textarea !== null) break;
				host = host.parentElement;
			}
			if (textarea === null || host === null) return false;
			let card = textarea;
			while (card.parentElement !== null && card.parentElement !== host) card = card.parentElement;
			if (card === textarea || card.parentElement !== host) return false;
			const wrapRect = bar.parentElement.getBoundingClientRect();
			const cardRect = card.getBoundingClientRect();
			if (cardRect.width < 40) return false;
			bar.style.marginLeft = `${Math.round(cardRect.left - wrapRect.left)}px`;
			bar.style.width = `${Math.round(cardRect.width)}px`;
			return true;
		}
		/**
		 * The composer dock entry: a chip row stacked above the input card. Owner
		 * share gives `input` (InputState snapshot); the session standard kit gives
		 * `inputActions` (setDraft write path). Both are read defensively so a
		 * future prop rename degrades to a no-op bar instead of crashing.
		 */
		function QuickPhrasesBar(props) {
			const state = usePhrases();
			const [managing, setManaging] = react.useState(false);
			const [panelPos, setPanelPos] = react.useState(null);
			const barRef = react.useRef(null);
			/**
			 * 对齐不是一次性的: 字体加载、侧栏开合、窗口缩放都会改变输入卡几何。
			 * 挂载后立刻量一次 + 两笔延迟补量(布局沉淀), 再用 ResizeObserver 盯住
			 * 包裹层和 textarea 的尺寸变化、window resize 兜底。
			 */
			react.useEffect(() => {
				const bar = barRef.current;
				if (bar === null) return;
				let stopped = false;
				let observer = null;
				const run = () => {
					if (!stopped) alignBar(bar);
				};
				run();
				const t1 = setTimeout(run, 120);
				const t2 = setTimeout(run, 500);
				try {
					observer = new ResizeObserver(run);
					if (bar.parentElement !== null) observer.observe(bar.parentElement);
					const textarea = document.querySelector("textarea");
					if (textarea !== null) observer.observe(textarea);
				} catch {}
				window.addEventListener("resize", run);
				return () => {
					stopped = true;
					clearTimeout(t1);
					clearTimeout(t2);
					if (observer !== null) observer.disconnect();
					window.removeEventListener("resize", run);
				};
			}, []);
			const openManage = (event) => {
				const rect = event.currentTarget.getBoundingClientRect();
				setPanelPos({
					left: Math.max(8, Math.min(rect.left, window.innerWidth - 576)),
					bottom: window.innerHeight - rect.top + 6
				});
				setManaging(true);
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
			 * 低透明度小齿轮贴输入卡右缘, 点开同一块管理面板, 从里面勾选
			 * 「显示快捷条」即可恢复(思路同 Token 面板的常驻入口)。
			 */
			if (state.barVisible !== true) {
				return react_jsx_runtime.jsxs("div", { className: "qp-bar qp-bar-collapsed", ref: barRef, children: [
					react_jsx_runtime.jsx("button", {
						className: "qp-chip qp-chip-manage qp-ghost-entry",
						title: "快捷条已隐藏 · 点此打开短语设置（勾选「显示快捷条」恢复）",
						onClick: openManage,
						children: "⚙"
					}),
					managing && panelPos !== null && react_jsx_runtime.jsx(ManagePanel, { pos: panelPos, onClose: () => setManaging(false) })
				] });
			}
			const chips = state.phrases.filter((phrase) => phrase.text.trim() !== "");
			return react_jsx_runtime.jsxs("div", { className: "qp-bar", ref: barRef, children: [
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
				}),
				managing && panelPos !== null && react_jsx_runtime.jsx(ManagePanel, { pos: panelPos, onClose: () => setManaging(false) })
			] });
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
			hydrateFromHost();
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		/** Test/debug hook: the phrase store (not consumed by the framework). */
		exports.__store = store;
		return module.exports;
	}
});
