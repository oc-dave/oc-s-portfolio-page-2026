import { t as site } from "./site-BiU-lw3O.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resume-C242Sj59.js
var import_jsx_runtime = require_jsx_runtime();
function ResumePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-dvh bg-fg px-4 py-12 text-primary-fg print:px-0 print:py-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl bg-fg print:max-w-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "border-b border-primary-fg/15 pb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-section uppercase",
							children: site.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 font-display text-4xl font-bold tracking-tight",
							children: site.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-primary-fg/70",
							children: [
								site.location,
								" · ",
								site.phone,
								" · ",
								site.email
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-primary-fg/70",
							children: [site.emailAlt, " · github.com/oc-dave"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: "Summary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed",
						children: site.intro
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: "Skills"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: site.skills.join(" · ")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: "Selected work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-4",
						children: site.projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-semibold",
								children: [
									p.title,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-normal text-primary-fg/60",
										children: ["— ", p.stack.join(", ")]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed",
								children: p.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-primary-fg/60",
								children: p.href
							})
						] }, p.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: "Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: site.services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold",
									children: [s.title, "."]
								}),
								" ",
								s.body
							]
						}, s.title))
					})]
				})
			]
		})
	});
}
//#endregion
export { ResumePage as component };
