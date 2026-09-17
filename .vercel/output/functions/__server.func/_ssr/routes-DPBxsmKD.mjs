import { i as __toESM } from "../_runtime.mjs";
import { t as site } from "./site-BiU-lw3O.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as PenTool, c as Linkedin, d as CodeXml, f as ArrowUpRight, i as Phone, l as Github, o as Menu, p as ArrowDownRight, r as Smartphone, s as Mail, t as X, u as Download } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, l as Slot, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DPBxsmKD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SiteBackground() {
	const spot = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = spot.current;
		if (!el) return;
		if (!window.matchMedia("(pointer: fine)").matches) return;
		let raf = 0;
		const onMove = (e) => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				el.style.setProperty("--spot-x", `${e.clientX}px`);
				el.style.setProperty("--spot-y", `${e.clientY}px`);
			});
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("pointermove", onMove);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "site-grid",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: spot,
			className: "site-spot",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "site-noise",
			"aria-hidden": "true"
		})
	] });
}
function SiteCursor() {
	const dot = (0, import_react.useRef)(null);
	const ring = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const fine = window.matchMedia("(pointer: fine)").matches;
		const hover = window.matchMedia("(hover: hover)").matches;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (!fine || !hover || reduce) return;
		const d = dot.current;
		const r = ring.current;
		if (!d || !r) return;
		document.documentElement.classList.add("has-cursor");
		let x = window.innerWidth / 2;
		let y = window.innerHeight / 2;
		let rx = x;
		let ry = y;
		let raf = 0;
		const loop = () => {
			rx += (x - rx) * .18;
			ry += (y - ry) * .18;
			d.style.transform = `translate3d(${x}px, ${y}px, 0)`;
			r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
			raf = requestAnimationFrame(loop);
		};
		const onMove = (e) => {
			x = e.clientX;
			y = e.clientY;
		};
		const hotSel = "a, button, [role='button'], input, textarea, label, summary";
		const onOver = (e) => {
			const t = e.target;
			if (t instanceof Element && t.closest(hotSel)) r.classList.add("is-hot");
		};
		const onOut = (e) => {
			const t = e.target;
			if (t instanceof Element && t.closest(hotSel)) r.classList.remove("is-hot");
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		document.addEventListener("pointerover", onOver);
		document.addEventListener("pointerout", onOut);
		raf = requestAnimationFrame(loop);
		return () => {
			document.documentElement.classList.remove("has-cursor");
			cancelAnimationFrame(raf);
			window.removeEventListener("pointermove", onMove);
			document.removeEventListener("pointerover", onOver);
			document.removeEventListener("pointerout", onOut);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dot,
		className: "cursor-dot hidden md:block",
		"aria-hidden": "true"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: ring,
		className: "cursor-ring hidden md:block",
		"aria-hidden": "true"
	})] });
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-[transform,background-color,color,box-shadow,border-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-void disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-glow hover:bg-fg",
			outline: "border border-line bg-transparent text-fg hover:border-primary hover:text-primary",
			ghost: "text-fg hover:bg-surface-2 hover:text-primary",
			link: "rounded-none text-fg underline-offset-4 hover:text-primary hover:underline"
		},
		size: {
			default: "h-12 px-6",
			sm: "h-10 px-4 text-xs",
			lg: "h-14 px-8 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("#home");
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 12);
			const ids = site.nav.map((n) => n.href.slice(1));
			let current = "#home";
			for (const id of ids) {
				const el = document.getElementById(id);
				if (!el) continue;
				if (el.getBoundingClientRect().top <= window.innerHeight * .32) current = `#${id}`;
			}
			setActive(current);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.classList.toggle("overflow-hidden", open);
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.classList.remove("overflow-hidden");
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200", scrolled && !open ? "bg-void/85 shadow-border" : "bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "font-display text-lg font-bold tracking-tight text-fg",
					children: [site.short, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "Dave"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: site.nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: cn("rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150", active === item.href ? "text-primary" : "text-muted hover:text-fg"),
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							children: "Let’s talk"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "relative z-50 inline-flex size-11 items-center justify-center rounded-full border border-line text-fg lg:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		})
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "mobile-nav",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Mobile navigation",
		className: "fixed inset-0 z-40 flex flex-col bg-void px-6 pt-24 pb-8 lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex flex-1 flex-col justify-center gap-2",
			children: site.nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: item.href,
				onClick: () => setOpen(false),
				className: cn("font-display text-4xl font-semibold tracking-tight sm:text-5xl", active === item.href ? "text-primary" : "text-fg"),
				children: item.label
			}, item.href))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-auto w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contact",
				onClick: () => setOpen(false),
				children: "Let’s talk"
			})
		})]
	}) : null] });
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className: cn("size-4 fill-current", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.25-8.23 8.25zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.10-.23-.16-.48-.29z" })
	});
}
function SocialGlyph({ kind, className }) {
	if (kind === "github") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className });
	if (kind === "linkedin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className });
	if (kind === "mail") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className });
}
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			el.classList.add("is-in");
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				el.classList.add("is-in");
				io.disconnect();
			}
		}, {
			threshold: .14,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return ref;
}
function RoleCycle() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)(site.roles[0]);
	const [phase, setPhase] = (0, import_react.useState)("hold");
	const [reduce, setReduce] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	}, []);
	(0, import_react.useEffect)(() => {
		if (reduce) {
			setText(site.roles[0]);
			return;
		}
		const word = site.roles[index];
		let t;
		if (phase === "type") {
			if (text.length < word.length) t = window.setTimeout(() => setText(word.slice(0, text.length + 1)), 55);
			else t = window.setTimeout(() => setPhase("hold"), 80);
		} else if (phase === "hold") t = window.setTimeout(() => setPhase("delete"), 2e3);
		else if (text.length > 0) t = window.setTimeout(() => setText(word.slice(0, text.length - 1)), 28);
		else {
			setIndex((i) => (i + 1) % site.roles.length);
			setPhase("type");
		}
		return () => window.clearTimeout(t);
	}, [
		text,
		phase,
		index,
		reduce
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "text-primary",
		children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "role-caret",
			"aria-hidden": "true"
		})]
	});
}
function Hero() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		ref,
		className: "reveal relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col justify-center gap-12 overflow-x-clip px-4 pt-24 pb-16 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:pt-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs font-medium tracking-section text-muted uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot size-1.5 rounded-full bg-primary" }), site.availability]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-5xl leading-[0.92] font-extrabold tracking-display text-fg sm:text-6xl md:text-7xl lg:text-8xl",
					children: [
						"David",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Okechukwu"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 min-h-10 text-xl font-medium text-fg sm:text-2xl",
					"aria-live": "polite",
					children: ["I’m a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleCycle, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
					children: site.intro
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-4 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.cv,
							download: "David_Okechukwu_CV.pdf",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Download CV"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#work",
							children: ["View work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap items-center gap-3",
					children: site.socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: s.href,
						target: s.href.startsWith("http") ? "_blank" : void 0,
						rel: s.href.startsWith("http") ? "noopener noreferrer" : void 0,
						"aria-label": s.label,
						className: "inline-flex size-11 items-center justify-center rounded-full border border-line text-primary transition-[background-color,color,box-shadow] duration-150 hover:bg-primary hover:text-primary-fg hover:shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialGlyph, {
							kind: s.kind,
							className: "size-4"
						})
					}, s.label))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-w-0 flex-1 items-center justify-center lg:justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "orbital",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "orbital-spin",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "orbital-spin-alt",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "orbital-core",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: site.portrait,
							alt: "Editorial portrait of a developer in a dark studio, backlit in lime",
							width: 420,
							height: 630
						})
					})
				]
			})
		})]
	});
}
function StackMarquee() {
	const items = [...site.stackMarquee, ...site.stackMarquee];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative z-10 max-w-full overflow-hidden border-y border-line bg-surface/60 py-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track",
				children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-display text-sm font-semibold tracking-section text-faint uppercase",
					children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-10 text-primary",
						children: "/"
					})]
				}, `${item}-${i}`))
			})
		})
	});
}
function About() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		ref,
		className: "reveal relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-section text-muted uppercase",
				children: "01 / About"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl",
				children: "Interfaces with a pulse."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl bg-surface shadow-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: site.aboutImage,
						alt: "Night studio desk with a laptop and lime light",
						className: "aspect-photo w-full object-cover",
						width: 800,
						height: 600,
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-muted sm:text-lg",
						children: site.about
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-base leading-relaxed text-muted sm:text-lg",
						children: [
							"Based in ",
							site.location,
							". Currently ",
							site.availability.toLowerCase(),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-10 font-display text-xl font-semibold",
						children: "Skills"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-2",
						children: site.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full bg-primary px-3.5 py-2 text-sm font-medium text-primary-fg transition-transform duration-150 hover:-translate-y-0.5",
							children: skill
						}, skill))
					})
				] })]
			})
		]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-void/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 grid w-[min(100%-1.5rem,44rem)] max-h-[min(90dvh,52rem)] -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-2xl bg-surface p-5 shadow-border duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:p-6", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-2 pr-10", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-2xl font-semibold tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm leading-relaxed text-muted", className),
		...props
	});
}
function onTilt(e) {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
	if (!window.matchMedia("(pointer: fine)").matches) return;
	const el = e.currentTarget;
	const r = el.getBoundingClientRect();
	const px = (e.clientX - r.left) / r.width;
	const py = (e.clientY - r.top) / r.height;
	el.style.setProperty("--tilt-y", `${(px - .5) * 8}deg`);
	el.style.setProperty("--tilt-x", `${(.5 - py) * 8}deg`);
}
function resetTilt(e) {
	e.currentTarget.style.setProperty("--tilt-x", "0deg");
	e.currentTarget.style.setProperty("--tilt-y", "0deg");
}
function ProjectCard({ project, featured, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onOpen(project),
		onMouseMove: onTilt,
		onMouseLeave: resetTilt,
		className: cn("work-card group relative block overflow-hidden rounded-2xl bg-surface text-left shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover", featured ? "md:col-span-2" : ""),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: featured ? "aspect-video sm:aspect-wide" : "aspect-video",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: "",
					className: "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110",
					loading: "lazy"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-void/50 to-transparent opacity-0 transition-opacity duration-200 sm:block sm:group-hover:opacity-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-section text-primary uppercase",
						children: [
							project.tag,
							" · ",
							project.year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-lg font-semibold sm:text-xl",
						children: project.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: project.summary
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-1 size-4 shrink-0 text-primary" })]
			})
		]
	});
}
function Work() {
	const ref = useReveal();
	const [active, setActive] = (0, import_react.useState)(null);
	const [aho, etta, ...rest] = site.projects;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		ref,
		className: "reveal relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-section text-muted uppercase",
				children: "02 / Work"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl",
				children: "Selected work"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Live products — tap a frame for the full case, stack, and the link out."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2",
				children: [
					aho ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						project: aho,
						featured: true,
						onOpen: setActive
					}) : null,
					etta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						project: etta,
						onOpen: setActive
					}) : null,
					rest.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						project,
						onOpen: setActive
					}, project.id))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!active,
				onOpenChange: (o) => !o && setActive(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: active.image,
							alt: "",
							className: "aspect-video w-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tracking-section text-primary uppercase",
							children: [
								active.tag,
								" · ",
								active.year
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: active.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: active.description })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-wrap gap-2",
						children: active.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full border border-line px-3 py-1 text-xs text-muted",
							children: s
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: active.href,
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["View project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					})
				] }) : null })
			})
		]
	});
}
var icons = {
	code: CodeXml,
	pen: PenTool,
	device: Smartphone
};
function Services() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		ref,
		className: "reveal relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-section text-muted uppercase",
				children: "03 / Services"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl",
				children: "How I can help"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 divide-y divide-line border-y border-line",
				children: site.services.map((svc) => {
					const Icon = icons[svc.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "group grid gap-4 py-8 transition-colors duration-200 hover:bg-surface/60 sm:grid-cols-[5rem_3rem_1fr_1.2fr] sm:items-center sm:gap-6 sm:px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm tracking-section text-faint",
								children: svc.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-8 text-primary transition-transform duration-200 group-hover:-translate-y-1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-semibold sm:text-3xl",
								children: svc.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: svc.body
							})
						]
					}, svc.title);
				})
			})
		]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-12 w-full rounded-md border border-line bg-void px-4 text-base text-fg shadow-none transition-[border-color,box-shadow] duration-150 placeholder:text-faint focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-36 w-full rounded-lg border border-line bg-void px-4 py-3 text-base text-fg transition-[border-color,box-shadow] duration-150 placeholder:text-faint focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-fg", className),
	...props
}));
Label.displayName = Root.displayName;
function Contact() {
	const ref = useReveal();
	const [status, setStatus] = (0, import_react.useState)("");
	const [sending, setSending] = (0, import_react.useState)(false);
	const [ok, setOk] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		setSending(true);
		setStatus("Sending message…");
		try {
			const body = new FormData(form);
			if (!(await fetch(site.formEndpoint, {
				method: "POST",
				body,
				headers: { Accept: "application/json" }
			})).ok) throw new Error("Form submission failed");
			form.reset();
			setStatus("Message sent successfully.");
			setOk(true);
			toast.success("Message sent.");
		} catch {
			setStatus("Failed to send. Please try again, or email me directly.");
			toast.error("Couldn’t send — try email instead.");
		} finally {
			setSending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		ref,
		className: "reveal relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-section text-muted uppercase",
				children: "04 / Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl",
				children: "Let’s build something"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					id: "contact-form",
					action: site.formEndpoint,
					method: "POST",
					onSubmit,
					className: "rounded-2xl bg-surface p-5 shadow-border sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								name: "name",
								placeholder: "Your name",
								required: true,
								autoComplete: "name"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								placeholder: "you@studio.com",
								required: true,
								autoComplete: "email"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "message",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "message",
								name: "message",
								rows: 5,
								placeholder: "What are we making?",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							disabled: sending,
							children: sending ? "Sending…" : "Send message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "form-response",
							className: "mt-3 min-h-6 text-sm text-muted",
							role: "status",
							children: status
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-surface p-5 shadow-border sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold",
							children: "Get in touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "Roles, freelance, or a product that needs a sharper front. I usually reply within a day."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-1 size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium",
											children: "Email"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "break-all text-muted transition-colors hover:text-primary",
											href: `mailto:${site.email}`,
											children: site.email
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "break-all text-muted transition-colors hover:text-primary",
											href: `mailto:${site.emailAlt}`,
											children: site.emailAlt
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-1 size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "text-muted transition-colors hover:text-primary",
										href: site.phoneHref,
										children: site.phone
									})]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: site.socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.href,
								target: s.href.startsWith("http") ? "_blank" : void 0,
								rel: s.href.startsWith("http") ? "noopener noreferrer" : void 0,
								"aria-label": s.label,
								className: "inline-flex size-11 items-center justify-center rounded-full border border-line text-primary transition-colors duration-150 hover:bg-primary hover:text-primary-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialGlyph, {
									kind: s.kind,
									className: "size-4"
								})
							}, s.label))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: ok,
				onOpenChange: setOk,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Message received" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
					"Thanks — I’ll get back to you from ",
					site.email,
					". If it’s urgent, WhatsApp or a call works too."
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setOk(false),
					children: "Close"
				})] })
			})
		]
	});
}
function LagosClock() {
	const [time, setTime] = (0, import_react.useState)("—");
	(0, import_react.useEffect)(() => {
		const tick = () => {
			setTime(new Intl.DateTimeFormat("en-GB", {
				timeZone: "Africa/Lagos",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false
			}).format(/* @__PURE__ */ new Date()));
		};
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "tabular-nums text-muted",
		children: [
			time,
			" WAT · ",
			site.location
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative z-10 border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						site.name,
						". Built with intent."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LagosClock, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					className: "text-sm text-muted transition-colors hover:text-primary",
					children: "Back to top"
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#home",
			className: "skip-link",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteBackground, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteCursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackMarquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { Home as component };
