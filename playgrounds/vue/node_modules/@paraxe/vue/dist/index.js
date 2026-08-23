import { defineComponent as m, computed as b, openBlock as n, createElementBlock as d, normalizeClass as f, renderSlot as u, createBlock as T, resolveDynamicComponent as A, withCtx as L, createCommentVNode as $, createElementVNode as p, createTextVNode as R, toDisplayString as S, ref as V, provide as M, inject as z, withDirectives as te, vShow as ae, useModel as se, watch as K, mergeModels as Q, withKeys as j, withModifiers as Y, unref as N, Fragment as q, renderList as G, normalizeStyle as W, useSlots as le, onMounted as J, onBeforeUnmount as O, Teleport as U, nextTick as Z } from "vue";
const oe = ["disabled"], It = /* @__PURE__ */ m({
  __name: "Button",
  props: {
    variant: { default: "primary" },
    size: { default: "medium" },
    width: { default: "auto" },
    iconPosition: { default: "leading" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["activate"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = {
      small: "btn-sm",
      medium: "btn-md",
      large: "btn-lg"
    }, o = b(() => [
      `btn-${t.variant}`,
      l[t.size],
      t.width === "full" ? "btn-full" : ""
    ]);
    return (r, i) => (n(), d("button", {
      class: f(["btn", o.value]),
      disabled: t.disabled || t.loading,
      onClick: i[0] || (i[0] = (c) => s("activate"))
    }, [
      u(r.$slots, "default")
    ], 10, oe));
  }
}), Lt = /* @__PURE__ */ m({
  __name: "Card",
  props: {
    variant: { default: "default" },
    as: { default: "div" }
  },
  setup(a) {
    const e = a, t = b(() => [
      "card",
      `card-${e.variant}`
    ]);
    return (s, l) => (n(), T(A(e.as), {
      class: f(t.value)
    }, {
      default: L(() => [
        u(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ne = ["type", "placeholder", "value", "required", "disabled", "readonly"], qt = /* @__PURE__ */ m({
  __name: "Input",
  props: {
    type: { default: "text" },
    placeholder: { default: "" },
    modelValue: { default: "" },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    success: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = b(() => ({
      "input-error": t.error,
      "input-success": t.success
    }));
    function o(r) {
      s(
        "update:modelValue",
        r.target.value
      );
    }
    return (r, i) => (n(), d("input", {
      class: f(["input", l.value]),
      type: t.type,
      placeholder: t.placeholder,
      value: t.modelValue,
      required: t.required,
      disabled: t.disabled,
      readonly: t.readonly,
      onInput: o
    }, null, 42, ne));
  }
}), H = (a, e) => {
  const t = a.__vccOpts || a;
  for (const [s, l] of e)
    t[s] = l;
  return t;
}, ie = {}, re = { class: "section" };
function de(a, e) {
  return n(), d("section", re, [
    u(a.$slots, "default")
  ]);
}
const At = /* @__PURE__ */ H(ie, [["render", de]]), Mt = /* @__PURE__ */ m({
  __name: "Stack",
  props: {
    size: { default: "medium" },
    fullWidth: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = b(() => ({
      stack: e.size === "medium",
      "stack-sm": e.size === "small",
      "stack-lg": e.size === "large",
      "stack-full": e.fullWidth
    }));
    return (s, l) => (n(), d("div", {
      class: f(t.value)
    }, [
      u(s.$slots, "default")
    ], 2));
  }
}), zt = /* @__PURE__ */ m({
  __name: "Container",
  props: {
    size: { default: "default" }
  },
  setup(a) {
    const e = a, t = b(() => ({
      container: e.size === "default",
      "container-narrow": e.size === "narrow"
    }));
    return (s, l) => (n(), d("div", {
      class: f(t.value)
    }, [
      u(s.$slots, "default")
    ], 2));
  }
}), Kt = /* @__PURE__ */ m({
  __name: "Grid",
  props: {
    columns: { default: 1 },
    rows: { default: 1 },
    size: { default: "medium" }
  },
  setup(a) {
    const e = a, t = b(() => [
      e.size === "small" ? "grid-sm" : e.size === "large" ? "grid-lg" : "grid",
      `grid-cols-${e.columns}`,
      `grid-rows-${e.rows}`
    ]);
    return (s, l) => (n(), d("div", {
      class: f(t.value)
    }, [
      u(s.$slots, "default")
    ], 2));
  }
}), Ot = /* @__PURE__ */ m({
  __name: "Heading",
  props: {
    level: { default: "h2" }
  },
  setup(a) {
    const e = a, t = b(() => ({
      "heading-xl": e.level === "h1",
      "heading-lg": e.level === "h2",
      "heading-md": e.level === "h3",
      "heading-sm": e.level === "h4",
      "heading-xs": e.level === "h5" || e.level === "h6"
    }));
    return (s, l) => (n(), T(A(a.level), {
      class: f(t.value)
    }, {
      default: L(() => [
        u(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), X = /* @__PURE__ */ m({
  __name: "Text",
  props: {
    as: { default: "p" },
    tone: { default: "primary" }
  },
  setup(a) {
    const e = a, t = b(() => ({
      "text-primary": e.tone === "primary",
      "text-secondary": e.tone === "secondary",
      "text-muted": e.tone === "muted",
      "text-accent": e.tone === "accent",
      "text-inverse": e.tone === "inverse",
      "text-brand": e.tone === "brand"
    }));
    return (s, l) => (n(), T(A(e.as), {
      class: f(t.value)
    }, {
      default: L(() => [
        u(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ce = {}, ue = { class: "eyebrow" };
function pe(a, e) {
  return n(), d("span", ue, [
    u(a.$slots, "default")
  ]);
}
const Pt = /* @__PURE__ */ H(ce, [["render", pe]]), Ft = /* @__PURE__ */ m({
  __name: "SectionHeader",
  props: {
    width: { default: "default" },
    align: { default: "left" }
  },
  setup(a) {
    const e = a;
    return (t, s) => (n(), d("header", {
      class: f(["section-header", {
        "section-header--wide": e.width === "wide",
        "section-header--center": e.align === "center"
      }])
    }, [
      u(t.$slots, "default")
    ], 2));
  }
}), Rt = /* @__PURE__ */ m({
  __name: "ButtonGroup",
  props: {
    align: { default: "start" },
    stack: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = b(() => ({
      "button-group--center": e.align === "center",
      "button-group--end": e.align === "end",
      "button-group--stack": e.stack
    }));
    return (s, l) => (n(), d("div", {
      class: f(["button-group", t.value])
    }, [
      u(s.$slots, "default")
    ], 2));
  }
}), fe = {}, me = {
  class: "divider",
  "aria-hidden": "true"
};
function be(a, e) {
  return n(), d("div", me);
}
const Gt = /* @__PURE__ */ H(fe, [["render", be]]), ve = ["for"], he = {
  key: 0,
  "aria-hidden": "true"
}, _e = { key: 1 }, ye = /* @__PURE__ */ m({
  __name: "Label",
  props: {
    for: { default: void 0 },
    required: { type: Boolean, default: !1 },
    optional: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = b(() => ({
      "label-disabled": e.disabled
    }));
    return (s, l) => (n(), d("label", {
      for: e.for,
      class: f(["label", t.value])
    }, [
      u(s.$slots, "default"),
      e.required ? (n(), d("span", he, "*")) : e.optional ? (n(), d("span", _e, "(optional)")) : $("", !0)
    ], 10, ve));
  }
}), ge = ["src", "alt"], jt = /* @__PURE__ */ m({
  __name: "Image",
  props: {
    src: {},
    alt: {},
    fit: { default: "cover" },
    aspectRatio: { default: "auto" }
  },
  setup(a) {
    const e = a;
    return (t, s) => (n(), d("div", {
      class: f(["media", {
        "media-square": e.aspectRatio === "square",
        "media-video": e.aspectRatio === "video",
        "media-portrait": e.aspectRatio === "portrait",
        "media-wide": e.aspectRatio === "wide",
        "media-contain": e.fit === "contain"
      }])
    }, [
      p("img", {
        src: e.src,
        alt: e.alt
      }, null, 8, ge)
    ], 2));
  }
}), $e = { class: "form-field" }, Ht = /* @__PURE__ */ m({
  __name: "FormField",
  props: {
    id: {},
    label: { default: void 0 },
    description: { default: void 0 },
    error: { default: void 0 },
    required: { type: Boolean, default: !1 },
    optional: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a;
    return (t, s) => (n(), d("div", $e, [
      e.label ? (n(), T(ye, {
        key: 0,
        for: e.id,
        required: e.required,
        optional: e.optional,
        disabled: e.disabled
      }, {
        default: L(() => [
          R(S(e.label), 1)
        ]),
        _: 1
      }, 8, ["for", "required", "optional", "disabled"])) : $("", !0),
      u(t.$slots, "default"),
      e.description && !e.error ? (n(), T(X, {
        key: 1,
        tone: "muted"
      }, {
        default: L(() => [
          R(S(e.description), 1)
        ]),
        _: 1
      })) : $("", !0),
      e.error ? (n(), T(X, {
        key: 2,
        tone: "accent"
      }, {
        default: L(() => [
          R(S(e.error), 1)
        ]),
        _: 1
      })) : $("", !0)
    ]));
  }
}), ke = ["value", "disabled", "readonly", "maxlength"], Nt = /* @__PURE__ */ m({
  __name: "Textarea",
  props: {
    value: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    success: { type: Boolean, default: !1 },
    maxlength: { default: void 0 }
  },
  emits: ["input", "change"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = b(() => ({
      "input-error": t.error,
      "input-success": t.success
    }));
    function o(i) {
      const c = i.target;
      s("input", c.value);
    }
    function r(i) {
      const c = i.target;
      s("change", c.value);
    }
    return (i, c) => (n(), d("textarea", {
      class: f(["textarea", l.value]),
      value: t.value,
      disabled: t.disabled,
      readonly: t.readonly,
      maxlength: t.maxlength,
      onInput: o,
      onChange: r
    }, null, 42, ke));
  }
}), we = ["value", "disabled"], Wt = /* @__PURE__ */ m({
  __name: "Select",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    success: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: e }) {
    const t = a, s = e;
    function l(r) {
      const i = r.target;
      s("update:modelValue", i.value);
    }
    const o = b(() => ({
      "input-error": t.error,
      "input-success": t.success
    }));
    return (r, i) => (n(), d("select", {
      class: f(["select", o.value]),
      value: t.modelValue,
      disabled: t.disabled,
      onChange: l
    }, [
      u(r.$slots, "default")
    ], 42, we));
  }
}), Ce = { class: "accordion" }, Jt = /* @__PURE__ */ m({
  __name: "Accordion",
  props: {
    multiple: { type: Boolean, default: !1 },
    collapsible: { type: Boolean, default: !0 },
    defaultOpen: { default: () => [] }
  },
  setup(a) {
    const e = a, t = V([...e.defaultOpen]);
    function s(o) {
      return t.value.includes(o);
    }
    function l(o) {
      if (s(o)) {
        if (!e.collapsible)
          return;
        t.value = t.value.filter((i) => i !== o);
        return;
      }
      if (e.multiple) {
        t.value = [...t.value, o];
        return;
      }
      t.value = [o];
    }
    return M("loba-accordion", {
      openItems: t,
      isOpen: s,
      toggleItem: l
    }), (o, r) => (n(), d("div", Ce, [
      u(o.$slots, "default")
    ]));
  }
}), Be = ["disabled", "aria-expanded", "aria-controls"], xe = ["id"], Ut = /* @__PURE__ */ m({
  __name: "AccordionItem",
  props: {
    id: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = z("loba-accordion");
    if (!t)
      throw new Error(
        "AccordionItem must be used inside an Accordion."
      );
    const s = t;
    if (!s)
      throw new Error(
        "AccordionItem must be used inside an Accordion."
      );
    const l = b(() => s.isOpen(e.id));
    function o() {
      e.disabled || s.toggleItem(e.id);
    }
    return (r, i) => (n(), d("div", {
      class: f(["accordion-item", { "accordion-item--open": l.value }])
    }, [
      p("button", {
        type: "button",
        class: "accordion-trigger",
        disabled: e.disabled,
        "aria-expanded": l.value,
        "aria-controls": `accordion-${e.id}`,
        onClick: o
      }, [
        u(r.$slots, "trigger")
      ], 8, Be),
      te(p("div", {
        id: `accordion-${e.id}`,
        class: "accordion-content"
      }, [
        u(r.$slots, "default")
      ], 8, xe), [
        [ae, l.value]
      ])
    ], 2));
  }
}), Ve = {}, Se = { class: "tag" };
function Ee(a, e) {
  return n(), d("span", Se, [
    u(a.$slots, "default")
  ]);
}
const Qt = /* @__PURE__ */ H(Ve, [["render", Ee]]), Xt = /* @__PURE__ */ m({
  __name: "Badge",
  props: {
    variant: { default: "default" }
  },
  setup(a) {
    const e = a, t = b(() => ({
      badge: !0,
      [`badge-${e.variant}`]: !0
    }));
    return (s, l) => (n(), d("span", {
      class: f(t.value)
    }, [
      u(s.$slots, "default")
    ], 2));
  }
}), Te = {
  key: 0,
  class: "empty-state-icon"
}, De = { class: "empty-state-content" }, Ie = {
  key: 1,
  class: "empty-state-actions"
}, Yt = /* @__PURE__ */ m({
  __name: "EmptyState",
  props: {
    as: { default: "div" }
  },
  setup(a) {
    const e = a, t = b(() => [
      "empty-state"
    ]);
    return (s, l) => (n(), T(A(e.as), {
      class: f(t.value)
    }, {
      default: L(() => [
        s.$slots.icon ? (n(), d("div", Te, [
          u(s.$slots, "icon")
        ])) : $("", !0),
        p("div", De, [
          u(s.$slots, "default")
        ]),
        s.$slots.actions ? (n(), d("div", Ie, [
          u(s.$slots, "actions")
        ])) : $("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Le = { class: "list" }, Zt = /* @__PURE__ */ m({
  __name: "List",
  props: /* @__PURE__ */ Q({
    selectable: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !1 }
  }, {
    modelValue: {
      default: null
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Q(["update:modelValue"], ["update:modelValue"]),
  setup(a, { emit: e }) {
    const t = a, s = V(/* @__PURE__ */ new Set()), l = se(a, "modelValue");
    K(
      l,
      (i) => {
        if (i == null) {
          s.value = /* @__PURE__ */ new Set();
          return;
        }
        s.value = new Set(
          Array.isArray(i) ? i : [i]
        );
      },
      { immediate: !0 }
    );
    function o(i) {
      return s.value.has(i);
    }
    function r(i) {
      if (!t.selectable)
        return;
      const c = new Set(
        s.value
      );
      t.multiple ? c.has(i) ? c.delete(i) : c.add(i) : c.has(i) ? c.clear() : (c.clear(), c.add(i)), s.value = c;
      const y = [...c];
      l.value = t.multiple ? y : y[0] ?? null;
    }
    return M("loba-list", {
      selectable: t.selectable,
      multiple: t.multiple,
      isSelected: o,
      toggleSelection: r
    }), (i, c) => (n(), d("div", Le, [
      u(i.$slots, "default")
    ]));
  }
}), qe = ["tabindex", "aria-selected", "aria-disabled", "onKeydown"], ea = /* @__PURE__ */ m({
  __name: "ListItem",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = z("loba-list");
    if (!t)
      throw new Error(
        "ListItem must be used inside a List."
      );
    const s = t;
    if (!s)
      throw new Error(
        "ListItem must be used inside a List."
      );
    const l = b(
      () => s.isSelected(e.value)
    ), o = b(() => ({
      "list-item": !0,
      "list-item--selectable": s.selectable && !e.disabled,
      "list-item--selected": l.value,
      "list-item--disabled": e.disabled
    }));
    function r() {
      e.disabled || !s.selectable || s.toggleSelection(e.value);
    }
    return (i, c) => (n(), d("div", {
      class: f(o.value),
      tabindex: N(s).selectable && !e.disabled ? 0 : void 0,
      "aria-selected": N(s).selectable ? l.value : void 0,
      "aria-disabled": e.disabled || void 0,
      role: "listitem",
      onClick: r,
      onKeydown: [
        j(r, ["enter"]),
        j(Y(r, ["prevent"]), ["space"])
      ]
    }, [
      u(i.$slots, "default")
    ], 42, qe));
  }
}), Ae = { class: "pagination-controls" }, Me = ["disabled"], ze = ["disabled"], Ke = { class: "pagination-pages" }, Oe = {
  key: 0,
  class: "pagination-ellipsis"
}, Pe = ["aria-current", "onClick"], Fe = { class: "pagination-controls" }, Re = ["disabled"], Ge = ["disabled"], ta = /* @__PURE__ */ m({
  __name: "Pagination",
  props: {
    currentPage: {},
    totalItems: {},
    pageSize: {},
    siblingCount: { default: 1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["update:currentPage"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = b(
      () => Math.max(
        1,
        Math.ceil(
          t.totalItems / t.pageSize
        )
      )
    ), o = b(
      () => Math.min(
        Math.max(t.currentPage, 1),
        l.value
      )
    ), r = b(() => {
      const g = l.value, B = o.value, k = Math.max(
        0,
        t.siblingCount
      );
      if (g <= 7)
        return Array.from(
          { length: g },
          (F, ee) => ee + 1
        );
      const _ = Math.max(
        B - k,
        1
      ), w = Math.min(
        B + k,
        g
      ), v = _ > 2, C = w < g - 1, x = [1];
      v && x.push("...");
      const I = v ? _ : 2, P = C ? w : g - 1;
      for (let F = I; F <= P; F++)
        x.push(F);
      return C && x.push("..."), x.push(g), x;
    }), i = b(() => ({
      pagination: !0,
      "pagination-compact": t.compact
    }));
    function c(g) {
      const B = Math.min(
        Math.max(g, 1),
        l.value
      );
      B !== o.value && s(
        "update:currentPage",
        B
      );
    }
    function y() {
      c(o.value - 1);
    }
    function D() {
      c(o.value + 1);
    }
    function E() {
      c(1);
    }
    function h() {
      c(l.value);
    }
    return (g, B) => (n(), d("nav", {
      class: f(i.value),
      "aria-label": "Pagination"
    }, [
      p("div", Ae, [
        p("button", {
          class: f(["pagination-item", {
            "pagination-item--disabled": o.value === 1
          }]),
          type: "button",
          disabled: o.value === 1,
          "aria-label": "First page",
          onClick: E
        }, " « ", 10, Me),
        p("button", {
          class: f(["pagination-item", {
            "pagination-item--disabled": o.value === 1
          }]),
          type: "button",
          disabled: o.value === 1,
          "aria-label": "Previous page",
          onClick: y
        }, " ‹ ", 10, ze)
      ]),
      p("div", Ke, [
        (n(!0), d(q, null, G(r.value, (k, _) => (n(), d(q, {
          key: `${k}-${_}`
        }, [
          k === "..." ? (n(), d("span", Oe, " … ")) : (n(), d("button", {
            key: 1,
            class: f(["pagination-item", {
              "pagination-item--current": k === o.value
            }]),
            type: "button",
            "aria-current": k === o.value ? "page" : void 0,
            onClick: (w) => c(k)
          }, S(k), 11, Pe))
        ], 64))), 128))
      ]),
      p("div", Fe, [
        p("button", {
          class: f(["pagination-item", {
            "pagination-item--disabled": o.value === l.value
          }]),
          type: "button",
          disabled: o.value === l.value,
          "aria-label": "Next page",
          onClick: D
        }, " › ", 10, Re),
        p("button", {
          class: f(["pagination-item", {
            "pagination-item--disabled": o.value === l.value
          }]),
          type: "button",
          disabled: o.value === l.value,
          "aria-label": "Last page",
          onClick: h
        }, " » ", 10, Ge)
      ])
    ], 2));
  }
}), je = { class: "table" }, He = ["tabindex", "aria-sort", "onClick", "onKeydown"], Ne = {
  key: 0,
  "aria-hidden": "true"
}, We = ["onClick"], Je = {
  key: 0,
  class: "table-loading",
  "aria-hidden": "true"
}, aa = /* @__PURE__ */ m({
  __name: "Table",
  props: {
    columns: {},
    rows: {},
    rowKey: { default: "id" },
    sortable: { type: Boolean, default: !1 },
    selectable: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:selectedRows", "sort"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = V(
      null
    ), o = V("asc"), r = V(/* @__PURE__ */ new Set());
    function i(_, w) {
      if (!(typeof _ != "object" || _ === null))
        return _[w];
    }
    function c(_) {
      const w = i(
        _,
        t.rowKey
      );
      return typeof w == "string" || typeof w == "number" ? w : t.rows.indexOf(_);
    }
    function y(_) {
      return r.value.has(
        c(_)
      );
    }
    const D = b(() => {
      if (!t.sortable || !l.value)
        return t.rows;
      const _ = l.value, w = o.value;
      return [...t.rows].sort(
        (v, C) => {
          const x = i(v, _), I = i(C, _);
          if (x === I)
            return 0;
          if (x == null)
            return 1;
          if (I == null)
            return -1;
          if (typeof x == "number" && typeof I == "number")
            return w === "asc" ? x - I : I - x;
          const P = String(x).localeCompare(
            String(I),
            void 0,
            {
              numeric: !0,
              sensitivity: "base"
            }
          );
          return w === "asc" ? P : -P;
        }
      );
    });
    function E(_) {
      !t.sortable || !_.sortable || (l.value !== _.key ? (l.value = _.key, o.value = "asc") : o.value = o.value === "asc" ? "desc" : "asc", s("sort", {
        key: _.key,
        direction: o.value
      }));
    }
    function h(_) {
      if (!t.selectable)
        return;
      const w = c(_), v = new Set(
        r.value
      );
      t.multiple ? v.has(w) ? v.delete(w) : v.add(w) : (v.clear(), v.add(w)), r.value = v, s(
        "update:selectedRows",
        t.rows.filter(
          (C) => v.has(c(C))
        )
      );
    }
    function g(_) {
      return l.value !== _.key ? "" : o.value === "asc" ? "↑" : "↓";
    }
    function B(_) {
      return {
        [`table-cell--${_.align ?? "start"}`]: !0
      };
    }
    function k(_) {
      return l.value === _.key;
    }
    return (_, w) => (n(), d("div", je, [
      p("table", null, [
        p("thead", null, [
          p("tr", null, [
            (n(!0), d(q, null, G(a.columns, (v) => (n(), d("th", {
              key: v.key,
              style: W({
                width: v.width
              }),
              class: f([
                B(v),
                {
                  "table-header--sortable": a.sortable && v.sortable,
                  "table-header--sorted": k(v)
                }
              ]),
              tabindex: a.sortable && v.sortable ? 0 : void 0,
              "aria-sort": k(v) ? o.value === "asc" ? "ascending" : "descending" : void 0,
              onClick: (C) => E(v),
              onKeydown: [
                j((C) => E(v), ["enter"]),
                j(Y((C) => E(v), ["prevent"]), ["space"])
              ]
            }, [
              p("span", null, S(v.label), 1),
              a.sortable && v.sortable ? (n(), d("span", Ne, S(g(v)), 1)) : $("", !0)
            ], 46, He))), 128))
          ])
        ]),
        p("tbody", null, [
          (n(!0), d(q, null, G(D.value, (v) => (n(), d("tr", {
            key: c(v),
            class: f({
              "table-row--selected": y(v)
            }),
            onClick: (C) => a.selectable && h(v)
          }, [
            (n(!0), d(q, null, G(a.columns, (C) => (n(), d("td", {
              key: C.key,
              class: f(
                B(C)
              )
            }, [
              u(_.$slots, `cell-${C.key}`, {
                row: v,
                value: i(
                  v,
                  C.key
                )
              }, () => [
                R(S(i(
                  v,
                  C.key
                )), 1)
              ])
            ], 2))), 128))
          ], 10, We))), 128))
        ])
      ]),
      a.loading ? (n(), d("div", Je)) : $("", !0)
    ]));
  }
}), Ue = ["name", "checked", "disabled", "required"], Qe = { class: "checkbox-label" }, sa = /* @__PURE__ */ m({
  __name: "Checkbox",
  props: {
    value: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    name: {},
    required: { type: Boolean, default: !1 }
  },
  emits: ["change"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = b(() => ({
      checkbox: !0,
      "checkbox--checked": t.value,
      "checkbox--disabled": t.disabled
    }));
    return (o, r) => (n(), d("label", {
      class: f(l.value)
    }, [
      p("input", {
        class: "checkbox-input",
        type: "checkbox",
        name: t.name,
        checked: t.value,
        disabled: t.disabled,
        required: t.required,
        onChange: r[0] || (r[0] = (i) => s(
          "change",
          i.target.checked
        ))
      }, null, 40, Ue),
      r[1] || (r[1] = p("span", {
        class: "checkbox-control",
        "aria-hidden": "true"
      }, null, -1)),
      p("span", Qe, [
        u(o.$slots, "default")
      ])
    ], 2));
  }
}), Xe = ["name", "value", "checked", "disabled"], la = /* @__PURE__ */ m({
  __name: "Radio",
  props: {
    modelValue: { default: null },
    value: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = b(
      () => t.modelValue === t.value
    ), o = b(() => ({
      radio: !0,
      "radio--checked": l.value,
      "radio--disabled": t.disabled
    }));
    function r() {
      s(
        "update:modelValue",
        t.value
      );
    }
    return (i, c) => (n(), d("label", {
      class: f(o.value)
    }, [
      p("input", {
        type: "radio",
        name: a.name,
        value: a.value,
        checked: l.value,
        disabled: a.disabled,
        class: "sr-only",
        onChange: r
      }, null, 40, Xe),
      c[0] || (c[0] = p("span", {
        class: "radio-control",
        "aria-hidden": "true"
      }, null, -1)),
      p("span", null, [
        u(i.$slots, "default")
      ])
    ], 2));
  }
}), Ye = ["checked", "disabled"], oa = /* @__PURE__ */ m({
  __name: "Switch",
  props: {
    modelValue: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = b(() => ({
      switch: !0,
      "switch--checked": t.modelValue,
      "switch--disabled": t.disabled
    }));
    function o(r) {
      const i = r.target;
      s(
        "update:modelValue",
        i.checked
      );
    }
    return (r, i) => (n(), d("label", {
      class: f(l.value)
    }, [
      p("input", {
        type: "checkbox",
        role: "switch",
        checked: a.modelValue,
        disabled: a.disabled,
        class: "sr-only",
        onChange: o
      }, null, 40, Ye),
      i[0] || (i[0] = p("span", {
        class: "switch-control",
        "aria-hidden": "true"
      }, null, -1)),
      p("span", null, [
        u(r.$slots, "default")
      ])
    ], 2));
  }
}), na = /* @__PURE__ */ m({
  __name: "ChoiceGroup",
  props: {
    modelValue: { default: null },
    multiple: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = b(() => ({
      "choice-group": !0,
      "choice-group--multiple": t.multiple
    })), o = b(() => Array.isArray(t.modelValue) ? t.modelValue : t.modelValue === null || t.modelValue === void 0 ? [] : [t.modelValue]);
    function r(c) {
      return o.value.includes(
        c
      );
    }
    function i(c) {
      if (!t.disabled) {
        if (t.multiple) {
          const y = new Set(
            o.value
          );
          y.has(c) ? y.delete(c) : y.add(c), s(
            "update:modelValue",
            [...y]
          );
          return;
        }
        s(
          "update:modelValue",
          c
        );
      }
    }
    return M(
      "loba-choice-group",
      {
        multiple: t.multiple,
        disabled: t.disabled,
        isSelected: r,
        toggleChoice: i
      }
    ), (c, y) => (n(), d("div", {
      class: f(l.value),
      role: "group"
    }, [
      u(c.$slots, "default")
    ], 2));
  }
}), Ze = ["disabled", "aria-pressed"], ia = /* @__PURE__ */ m({
  __name: "Choice",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = z(
      "loba-choice-group"
    );
    if (!t)
      throw new Error(
        "Choice must be used inside a ChoiceGroup."
      );
    const s = t, l = b(
      () => s.isSelected(e.value)
    ), o = b(
      () => e.disabled || s.disabled
    ), r = b(() => ({
      choice: !0,
      "choice--selected": l.value,
      "choice--disabled": o.value
    }));
    function i() {
      o.value || s.toggleChoice(e.value);
    }
    return (c, y) => (n(), d("button", {
      type: "button",
      class: f(r.value),
      disabled: o.value,
      "aria-pressed": l.value,
      onClick: i
    }, [
      u(c.$slots, "default")
    ], 10, Ze));
  }
}), et = { class: "sidebar-header" }, tt = { class: "sidebar-navigation" }, at = { class: "sidebar-footer" }, ra = /* @__PURE__ */ m({
  __name: "Sidebar",
  props: {
    collapsed: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = b(() => ({
      sidebar: !0,
      "sidebar--collapsed": e.collapsed
    }));
    return (s, l) => (n(), d("aside", {
      class: f(t.value)
    }, [
      p("div", et, [
        u(s.$slots, "header")
      ]),
      p("nav", tt, [
        u(s.$slots, "default")
      ]),
      p("div", at, [
        u(s.$slots, "footer")
      ])
    ], 2));
  }
}), st = {
  key: 0,
  class: "sidebar-group-label"
}, lt = { class: "sidebar-group-items" }, da = /* @__PURE__ */ m({
  __name: "SidebarGroup",
  props: {
    label: { default: "" }
  },
  setup(a) {
    const e = a, t = b(() => ({
      "sidebar-group": !0,
      "sidebar-group--labeled": !!e.label
    }));
    return (s, l) => (n(), d("div", {
      class: f(t.value)
    }, [
      e.label ? (n(), d("div", st, S(e.label), 1)) : $("", !0),
      p("div", lt, [
        u(s.$slots, "default")
      ])
    ], 2));
  }
}), ot = { class: "sidebar-item-wrapper" }, nt = {
  key: 0,
  class: "sidebar-item-icon",
  "aria-hidden": "true"
}, it = { class: "sidebar-item-label" }, rt = {
  key: 1,
  class: "sidebar-item-chevron",
  "aria-hidden": "true"
}, dt = {
  key: 0,
  class: "sidebar-item-children"
}, ca = /* @__PURE__ */ m({
  __name: "SidebarItem",
  props: {
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    href: { default: void 0 },
    expanded: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = le(), s = V(
      e.expanded
    ), l = b(
      () => !!t.children
    ), o = b(() => ({
      "sidebar-item": !0,
      "sidebar-item--active": e.active,
      "sidebar-item--disabled": e.disabled,
      "sidebar-item--expandable": l.value,
      "sidebar-item--expanded": l.value && s.value
    }));
    function r(i) {
      if (e.disabled) {
        i.preventDefault();
        return;
      }
      l.value && (i.preventDefault(), s.value = !s.value);
    }
    return (i, c) => (n(), d("div", ot, [
      (n(), T(A(l.value ? "button" : "a"), {
        href: l.value || !e.href ? void 0 : e.href,
        type: l.value ? "button" : void 0,
        class: f(o.value),
        disabled: l.value ? e.disabled : void 0,
        "aria-current": e.active ? "page" : void 0,
        "aria-expanded": l.value ? s.value : void 0,
        "aria-disabled": e.disabled ? "true" : void 0,
        onClick: r
      }, {
        default: L(() => [
          i.$slots.icon ? (n(), d("span", nt, [
            u(i.$slots, "icon")
          ])) : $("", !0),
          p("span", it, [
            u(i.$slots, "default")
          ]),
          l.value ? (n(), d("span", rt, [
            p("span", {
              class: f({
                "sidebar-item-chevron--expanded": s.value
              })
            }, " › ", 2)
          ])) : $("", !0)
        ]),
        _: 3
      }, 8, ["href", "type", "class", "disabled", "aria-current", "aria-expanded", "aria-disabled"])),
      l.value && s.value ? (n(), d("div", dt, [
        u(i.$slots, "children")
      ])) : $("", !0)
    ]));
  }
}), ct = { class: "tabs" }, ut = {
  class: "tabs-list",
  role: "tablist"
}, ua = /* @__PURE__ */ m({
  __name: "Tabs",
  props: {
    modelValue: { default: null }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = V(t.modelValue);
    K(
      () => t.modelValue,
      (r) => {
        l.value = r;
      }
    );
    function o(r) {
      l.value = r, s(
        "update:modelValue",
        r
      );
    }
    return M(
      "loba-tabs",
      {
        activeValue: () => l.value,
        selectTab: o
      }
    ), (r, i) => (n(), d("div", ct, [
      p("div", ut, [
        u(r.$slots, "default")
      ])
    ]));
  }
}), pt = ["aria-selected", "aria-disabled", "tabindex"], pa = /* @__PURE__ */ m({
  __name: "Tab",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = z("loba-tabs");
    if (!t)
      throw new Error(
        "Tab must be used inside Tabs."
      );
    const s = t, l = b(
      () => s.activeValue() === e.value
    ), o = b(() => ({
      tab: !0,
      "tab--active": l.value,
      "tab--disabled": e.disabled
    }));
    function r() {
      e.disabled || s.selectTab(e.value);
    }
    return (i, c) => (n(), d("button", {
      type: "button",
      class: f(o.value),
      role: "tab",
      "aria-selected": l.value,
      "aria-disabled": e.disabled || void 0,
      tabindex: l.value ? 0 : -1,
      onClick: r
    }, [
      u(i.$slots, "default")
    ], 10, pt));
  }
}), ft = ["href"], mt = ["aria-current"], bt = {
  class: "breadcrumbs-separator",
  "aria-hidden": "true"
}, fa = /* @__PURE__ */ m({
  __name: "Breadcrumb",
  props: {
    href: { default: void 0 },
    current: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = z(
      "loba-breadcrumbs-separator",
      "/"
    ), s = b(() => ({
      "breadcrumbs-item": !0
    }));
    return (l, o) => (n(), d("li", {
      class: f(s.value)
    }, [
      e.href && !e.current ? (n(), d("a", {
        key: 0,
        class: "breadcrumbs-link",
        href: e.href
      }, [
        u(l.$slots, "default")
      ], 8, ft)) : (n(), d("span", {
        key: 1,
        class: "breadcrumbs-current",
        "aria-current": e.current ? "page" : void 0
      }, [
        u(l.$slots, "default")
      ], 8, mt)),
      p("span", bt, S(N(t)), 1)
    ], 2));
  }
}), vt = {
  class: "breadcrumbs",
  "aria-label": "Breadcrumb"
}, ht = { class: "breadcrumbs-list" }, ma = /* @__PURE__ */ m({
  __name: "Breadcrumbs",
  props: {
    separator: { default: "/" }
  },
  setup(a) {
    return M(
      "loba-breadcrumbs-separator",
      a.separator
    ), (t, s) => (n(), d("nav", vt, [
      p("ol", ht, [
        u(t.$slots, "default")
      ])
    ]));
  }
}), _t = {
  key: 0,
  class: "dialog dialog--open",
  role: "presentation"
}, ba = /* @__PURE__ */ m({
  __name: "Dialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    closeOnBackdrop: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = V(null);
    let o = null;
    const r = [
      "button:not([disabled])",
      "[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "[tabindex]:not([tabindex='-1'])"
    ].join(", ");
    function i() {
      s("update:modelValue", !1);
    }
    function c() {
      t.closeOnBackdrop && i();
    }
    function y(h) {
      if (!t.modelValue || !l.value)
        return;
      if (h.key === "Escape" && t.closeOnEscape) {
        h.preventDefault(), i();
        return;
      }
      if (h.key !== "Tab")
        return;
      const g = Array.from(
        l.value.querySelectorAll(
          r
        )
      );
      if (g.length === 0) {
        h.preventDefault();
        return;
      }
      const B = g[0], k = g[g.length - 1];
      if (h.shiftKey && document.activeElement === B) {
        h.preventDefault(), k.focus();
        return;
      }
      !h.shiftKey && document.activeElement === k && (h.preventDefault(), B.focus());
    }
    async function D() {
      o = document.activeElement instanceof HTMLElement ? document.activeElement : null, await Z(), l.value?.querySelector(
        r
      )?.focus();
    }
    function E() {
      o?.focus(), o = null;
    }
    return K(
      () => t.modelValue,
      async (h) => {
        h ? await D() : E();
      }
    ), J(() => {
      t.modelValue && D(), document.addEventListener(
        "keydown",
        y
      );
    }), O(() => {
      document.removeEventListener(
        "keydown",
        y
      ), E();
    }), (h, g) => (n(), T(U, { to: "body" }, [
      a.modelValue ? (n(), d("div", _t, [
        p("button", {
          class: "dialog-backdrop",
          type: "button",
          "aria-label": "Close dialog",
          tabindex: "-1",
          onClick: c
        }),
        p("div", {
          ref_key: "dialogElement",
          ref: l,
          class: "dialog-content",
          role: "dialog",
          "aria-modal": "true"
        }, [
          u(h.$slots, "default")
        ], 512)
      ])) : $("", !0)
    ]));
  }
}), yt = { class: "drawer-content" }, va = /* @__PURE__ */ m({
  __name: "Drawer",
  props: {
    modelValue: { type: Boolean, default: !1 },
    side: { default: "right" },
    closeOnBackdrop: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = V(null);
    let o = null;
    const r = [
      "button:not([disabled])",
      "[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "[tabindex]:not([tabindex='-1'])"
    ].join(", ");
    function i() {
      s("update:modelValue", !1);
    }
    function c() {
      t.closeOnBackdrop && i();
    }
    function y(h) {
      if (!t.modelValue || !l.value)
        return;
      if (h.key === "Escape" && t.closeOnEscape) {
        h.preventDefault(), i();
        return;
      }
      if (h.key !== "Tab")
        return;
      const g = Array.from(
        l.value.querySelectorAll(
          r
        )
      );
      if (g.length === 0) {
        h.preventDefault();
        return;
      }
      const B = g[0], k = g[g.length - 1];
      if (h.shiftKey && document.activeElement === B) {
        h.preventDefault(), k.focus();
        return;
      }
      !h.shiftKey && document.activeElement === k && (h.preventDefault(), B.focus());
    }
    async function D() {
      o = document.activeElement instanceof HTMLElement ? document.activeElement : null, await Z(), l.value?.querySelector(
        r
      )?.focus();
    }
    function E() {
      o?.focus(), o = null;
    }
    return K(
      () => t.modelValue,
      async (h) => {
        h ? await D() : E();
      }
    ), J(() => {
      document.addEventListener(
        "keydown",
        y
      ), t.modelValue && D();
    }), O(() => {
      document.removeEventListener(
        "keydown",
        y
      ), E();
    }), (h, g) => (n(), T(U, { to: "body" }, [
      a.modelValue ? (n(), d("div", {
        key: 0,
        class: f(["drawer", {
          "drawer--open": a.modelValue,
          "drawer--left": a.side === "left",
          "drawer--right": a.side === "right"
        }]),
        role: "presentation"
      }, [
        p("button", {
          class: "drawer-backdrop",
          type: "button",
          "aria-label": "Close drawer",
          tabindex: "-1",
          onClick: c
        }),
        p("aside", {
          ref_key: "panel",
          ref: l,
          class: "drawer-panel",
          role: "dialog",
          "aria-modal": "true"
        }, [
          p("div", yt, [
            u(h.$slots, "default")
          ])
        ], 512)
      ], 2)) : $("", !0)
    ]));
  }
}), gt = {
  key: 0,
  class: "popover-content",
  role: "dialog"
}, ha = /* @__PURE__ */ m({
  __name: "Popover",
  props: {
    placement: { default: "bottom" }
  },
  setup(a) {
    const e = a, t = V(!1), s = V(null);
    function l() {
      t.value = !t.value;
    }
    function o() {
      t.value = !1;
    }
    function r(c) {
      if (!s.value)
        return;
      const y = c.target;
      y instanceof Node && !s.value.contains(y) && o();
    }
    function i(c) {
      c.key === "Escape" && o();
    }
    return J(() => {
      document.addEventListener(
        "click",
        r
      ), document.addEventListener(
        "keydown",
        i
      );
    }), O(() => {
      document.removeEventListener(
        "click",
        r
      ), document.removeEventListener(
        "keydown",
        i
      );
    }), (c, y) => (n(), d("div", {
      ref_key: "popover",
      ref: s,
      class: f(["popover", {
        "popover--open": t.value,
        [`popover--${e.placement}`]: !0
      }])
    }, [
      p("div", {
        class: "popover-trigger",
        onClick: l
      }, [
        u(c.$slots, "trigger")
      ]),
      t.value ? (n(), d("div", gt, [
        u(c.$slots, "default")
      ])) : $("", !0)
    ], 2));
  }
}), $t = { class: "tooltip-trigger" }, kt = {
  class: "tooltip-content",
  role: "tooltip"
}, _a = /* @__PURE__ */ m({
  __name: "Tooltip",
  props: {
    placement: { default: "top" },
    text: {},
    delay: { default: 300 }
  },
  setup(a) {
    const e = a, t = V(!1);
    let s;
    function l() {
      clearTimeout(s), s = setTimeout(() => {
        t.value = !0;
      }, e.delay);
    }
    function o() {
      clearTimeout(s), t.value = !1;
    }
    return O(() => {
      clearTimeout(s);
    }), (r, i) => (n(), d("span", {
      class: f(["tooltip", {
        "tooltip--visible": t.value,
        [`tooltip--${e.placement}`]: !0
      }]),
      onMouseenter: l,
      onMouseleave: o,
      onFocusin: l,
      onFocusout: o
    }, [
      p("span", $t, [
        u(r.$slots, "default")
      ]),
      p("span", kt, S(e.text), 1)
    ], 34));
  }
}), wt = { class: "alert-content" }, Ct = {
  key: 0,
  class: "alert-actions"
}, ya = /* @__PURE__ */ m({
  __name: "Alert",
  props: {
    variant: { default: "info" },
    dismissible: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = b(() => ({
      alert: !0,
      [`alert-${t.variant}`]: !0
    }));
    function o() {
      s("close");
    }
    return (r, i) => (n(), d("div", {
      class: f(l.value),
      role: "alert"
    }, [
      p("div", wt, [
        u(r.$slots, "default"),
        r.$slots.actions ? (n(), d("div", Ct, [
          u(r.$slots, "actions")
        ])) : $("", !0)
      ]),
      a.dismissible ? (n(), d("button", {
        key: 0,
        class: "alert-close",
        type: "button",
        "aria-label": "Dismiss alert",
        onClick: o
      }, " × ")) : $("", !0)
    ], 2));
  }
}), Bt = ["aria-valuemin", "aria-valuemax", "aria-valuenow"], xt = { class: "progress-track" }, Vt = {
  key: 0,
  class: "progress-label"
}, ga = /* @__PURE__ */ m({
  __name: "Progress",
  props: {
    value: { default: 0 },
    max: { default: 100 },
    indeterminate: { type: Boolean, default: !1 },
    variant: { default: "default" },
    showValue: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = b(() => e.max <= 0 ? 0 : Math.min(
      100,
      Math.max(
        0,
        e.value / e.max * 100
      )
    )), s = b(() => ({
      progress: !0,
      [`progress--${e.variant}`]: !0,
      "progress--indeterminate": e.indeterminate
    }));
    return (l, o) => (n(), d("div", {
      class: f(s.value),
      role: "progressbar",
      "aria-valuemin": a.indeterminate ? void 0 : 0,
      "aria-valuemax": a.indeterminate ? void 0 : a.max,
      "aria-valuenow": a.indeterminate ? void 0 : a.value
    }, [
      p("div", xt, [
        p("div", {
          class: "progress-value",
          style: W(
            a.indeterminate ? void 0 : {
              width: `${t.value}%`
            }
          )
        }, null, 4)
      ]),
      a.showValue ? (n(), d("div", Vt, [
        p("span", null, [
          u(l.$slots, "default")
        ]),
        p("span", null, S(Math.round(t.value)) + "% ", 1)
      ])) : u(l.$slots, "label", {}, void 0, void 0, 1)
    ], 10, Bt));
  }
}), $a = /* @__PURE__ */ m({
  __name: "Skeleton",
  props: {
    variant: { default: "default" },
    width: { default: void 0 },
    height: { default: void 0 }
  },
  setup(a) {
    const e = a, t = b(() => ({
      skeleton: !0,
      [`skeleton--${e.variant}`]: e.variant !== "default"
    }));
    return (s, l) => (n(), d("div", {
      class: f(t.value),
      style: W({
        width: e.width,
        height: e.height
      }),
      "aria-hidden": "true"
    }, null, 6));
  }
}), St = { class: "toast-content" }, Et = {
  key: 0,
  class: "toast-title"
}, Tt = { class: "toast-message" }, ka = /* @__PURE__ */ m({
  __name: "Toast",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: void 0 },
    variant: { default: "info" },
    duration: { default: 4e3 },
    dismissible: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "close"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = V(
      t.modelValue
    );
    let o;
    function r() {
      o && (clearTimeout(o), o = void 0);
    }
    function i() {
      r(), l.value = !1, s(
        "update:modelValue",
        !1
      ), s("close");
    }
    function c() {
      r(), !(t.duration <= 0 || !t.modelValue) && (o = setTimeout(() => {
        i();
      }, t.duration));
    }
    return K(
      () => t.modelValue,
      (y) => {
        l.value = y, y ? c() : r();
      },
      {
        immediate: !0
      }
    ), O(() => {
      r();
    }), (y, D) => (n(), T(U, { to: "body" }, [
      l.value ? (n(), d("div", {
        key: 0,
        class: f(["toast", {
          "toast--visible": l.value,
          [`toast-${a.variant}`]: !0
        }]),
        role: "status",
        "aria-live": "polite"
      }, [
        p("div", St, [
          a.title ? (n(), d("div", Et, S(a.title), 1)) : $("", !0),
          p("div", Tt, [
            u(y.$slots, "default")
          ])
        ]),
        a.dismissible ? (n(), d("button", {
          key: 0,
          class: "toast-close",
          type: "button",
          "aria-label": "Dismiss notification",
          onClick: i
        }, " × ")) : $("", !0)
      ], 2)) : $("", !0)
    ]));
  }
});
export {
  Jt as Accordion,
  Ut as AccordionItem,
  ya as Alert,
  Xt as Badge,
  fa as Breadcrumb,
  ma as Breadcrumbs,
  It as Button,
  Rt as ButtonGroup,
  Lt as Card,
  sa as Checkbox,
  ia as Choice,
  na as ChoiceGroup,
  zt as Container,
  ba as Dialog,
  Gt as Divider,
  va as Drawer,
  Yt as EmptyState,
  Pt as Eyebrow,
  Ht as FormField,
  Kt as Grid,
  Ot as Heading,
  jt as Image,
  qt as Input,
  ye as Label,
  Zt as List,
  ea as ListItem,
  ta as Pagination,
  ha as Popover,
  ga as Progress,
  la as Radio,
  At as Section,
  Ft as SectionHeader,
  Wt as Select,
  ra as Sidebar,
  da as SidebarGroup,
  ca as SidebarItem,
  $a as Skeleton,
  Mt as Stack,
  oa as Switch,
  pa as Tab,
  aa as Table,
  ua as Tabs,
  Qt as Tag,
  X as Text,
  Nt as Textarea,
  ka as Toast,
  _a as Tooltip
};
