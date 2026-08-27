import { defineComponent as m, computed as b, openBlock as i, createElementBlock as d, normalizeClass as p, renderSlot as c, createBlock as E, resolveDynamicComponent as z, withCtx as L, createCommentVNode as $, createTextVNode as F, toDisplayString as x, createElementVNode as u, provide as K, inject as O, ref as V, withDirectives as ee, vShow as te, useSlots as ae, watch as P, unref as N, useModel as se, mergeModels as le, withKeys as j, withModifiers as X, Fragment as M, renderList as G, normalizeStyle as W, onMounted as J, onBeforeUnmount as R, Teleport as U, nextTick as Y } from "vue";
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
    return (n, r) => (i(), d("button", {
      class: p(["btn", o.value]),
      disabled: t.disabled || t.loading,
      onClick: r[0] || (r[0] = (f) => s("activate"))
    }, [
      c(n.$slots, "default")
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
    return (s, l) => (i(), E(z(e.as), {
      class: p(t.value)
    }, {
      default: L(() => [
        c(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), H = (a, e) => {
  const t = a.__vccOpts || a;
  for (const [s, l] of e)
    t[s] = l;
  return t;
}, ne = {}, ie = { class: "tag" };
function re(a, e) {
  return i(), d("span", ie, [
    c(a.$slots, "default")
  ]);
}
const qt = /* @__PURE__ */ H(ne, [["render", re]]), At = /* @__PURE__ */ m({
  __name: "Badge",
  props: {
    variant: { default: "default" }
  },
  setup(a) {
    const e = a, t = b(() => ({
      badge: !0,
      [`badge-${e.variant}`]: !0
    }));
    return (s, l) => (i(), d("span", {
      class: p(t.value)
    }, [
      c(s.$slots, "default")
    ], 2));
  }
}), de = {}, ce = { class: "section" };
function ue(a, e) {
  return i(), d("section", ce, [
    c(a.$slots, "default")
  ]);
}
const Mt = /* @__PURE__ */ H(de, [["render", ue]]), zt = /* @__PURE__ */ m({
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
    return (s, l) => (i(), d("div", {
      class: p(t.value)
    }, [
      c(s.$slots, "default")
    ], 2));
  }
}), Kt = /* @__PURE__ */ m({
  __name: "Container",
  props: {
    size: { default: "default" }
  },
  setup(a) {
    const e = a, t = b(() => ({
      container: e.size === "default",
      "container-narrow": e.size === "narrow"
    }));
    return (s, l) => (i(), d("div", {
      class: p(t.value)
    }, [
      c(s.$slots, "default")
    ], 2));
  }
}), Ot = /* @__PURE__ */ m({
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
    return (s, l) => (i(), d("div", {
      class: p(t.value)
    }, [
      c(s.$slots, "default")
    ], 2));
  }
}), pe = {}, fe = {
  class: "divider",
  "aria-hidden": "true"
};
function me(a, e) {
  return i(), d("div", fe);
}
const Pt = /* @__PURE__ */ H(pe, [["render", me]]), Rt = /* @__PURE__ */ m({
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
    return (s, l) => (i(), E(z(e.level), {
      class: p(t.value)
    }, {
      default: L(() => [
        c(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Q = /* @__PURE__ */ m({
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
    return (s, l) => (i(), E(z(e.as), {
      class: p(t.value)
    }, {
      default: L(() => [
        c(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), be = {}, ve = { class: "eyebrow" };
function _e(a, e) {
  return i(), d("span", ve, [
    c(a.$slots, "default")
  ]);
}
const Ft = /* @__PURE__ */ H(be, [["render", _e]]), he = ["for"], ye = {
  key: 0,
  "aria-hidden": "true"
}, ge = { key: 1 }, $e = /* @__PURE__ */ m({
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
    return (s, l) => (i(), d("label", {
      for: e.for,
      class: p(["label", t.value])
    }, [
      c(s.$slots, "default"),
      e.required ? (i(), d("span", ye, " * ")) : e.optional ? (i(), d("span", ge, " (optional) ")) : $("", !0)
    ], 10, he));
  }
}), ke = ["type", "placeholder", "value", "required", "disabled", "readonly"], Gt = /* @__PURE__ */ m({
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
    function o(n) {
      s(
        "update:modelValue",
        n.target.value
      );
    }
    return (n, r) => (i(), d("input", {
      class: p(["input", l.value]),
      type: t.type,
      placeholder: t.placeholder,
      value: t.modelValue,
      required: t.required,
      disabled: t.disabled,
      readonly: t.readonly,
      onInput: o
    }, null, 42, ke));
  }
}), we = { class: "form-field" }, jt = /* @__PURE__ */ m({
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
    return (t, s) => (i(), d("div", we, [
      e.label ? (i(), E($e, {
        key: 0,
        for: e.id,
        required: e.required,
        optional: e.optional,
        disabled: e.disabled
      }, {
        default: L(() => [
          F(x(e.label), 1)
        ]),
        _: 1
      }, 8, ["for", "required", "optional", "disabled"])) : $("", !0),
      c(t.$slots, "default"),
      e.description && !e.error ? (i(), E(Q, {
        key: 1,
        tone: "muted"
      }, {
        default: L(() => [
          F(x(e.description), 1)
        ]),
        _: 1
      })) : $("", !0),
      e.error ? (i(), E(Q, {
        key: 2,
        tone: "accent"
      }, {
        default: L(() => [
          F(x(e.error), 1)
        ]),
        _: 1
      })) : $("", !0)
    ]));
  }
}), Ce = ["value", "disabled", "readonly", "maxlength"], Ht = /* @__PURE__ */ m({
  __name: "Textarea",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    success: { type: Boolean, default: !1 },
    maxlength: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = b(() => ({
      "input-error": t.error,
      "input-success": t.success
    }));
    function o(n) {
      const r = n.target;
      s(
        "update:modelValue",
        r.value
      );
    }
    return (n, r) => (i(), d("textarea", {
      class: p(["textarea", l.value]),
      value: t.modelValue,
      disabled: t.disabled,
      readonly: t.readonly,
      maxlength: t.maxlength,
      onInput: o
    }, null, 42, Ce));
  }
}), Be = ["value", "disabled"], Nt = /* @__PURE__ */ m({
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
    function l(n) {
      const r = n.target;
      s(
        "update:modelValue",
        r.value
      );
    }
    const o = b(() => ({
      "input-error": t.error,
      "input-success": t.success
    }));
    return (n, r) => (i(), d("select", {
      class: p(["select", o.value]),
      value: t.modelValue,
      disabled: t.disabled,
      onChange: l
    }, [
      c(n.$slots, "default")
    ], 42, Be));
  }
}), Ve = ["name", "checked", "disabled", "required"], xe = { class: "checkbox-label" }, Wt = /* @__PURE__ */ m({
  __name: "Checkbox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = b(() => ({
      checkbox: !0,
      "checkbox--checked": t.modelValue,
      "checkbox--disabled": t.disabled
    }));
    function o(n) {
      const r = n.target;
      s(
        "update:modelValue",
        r.checked
      );
    }
    return (n, r) => (i(), d("label", {
      class: p(l.value)
    }, [
      u("input", {
        class: "checkbox-input",
        type: "checkbox",
        name: t.name,
        checked: t.modelValue,
        disabled: t.disabled,
        required: t.required,
        onChange: o
      }, null, 40, Ve),
      r[0] || (r[0] = u("span", {
        class: "checkbox-control",
        "aria-hidden": "true"
      }, null, -1)),
      u("span", xe, [
        c(n.$slots, "default")
      ])
    ], 2));
  }
}), Se = ["name", "value", "checked", "disabled"], Jt = /* @__PURE__ */ m({
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
    function n() {
      s(
        "update:modelValue",
        t.value
      );
    }
    return (r, f) => (i(), d("label", {
      class: p(o.value)
    }, [
      u("input", {
        type: "radio",
        name: a.name,
        value: a.value,
        checked: l.value,
        disabled: a.disabled,
        class: "sr-only",
        onChange: n
      }, null, 40, Se),
      f[0] || (f[0] = u("span", {
        class: "radio-control",
        "aria-hidden": "true"
      }, null, -1)),
      u("span", null, [
        c(r.$slots, "default")
      ])
    ], 2));
  }
}), Ee = ["checked", "disabled"], Ut = /* @__PURE__ */ m({
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
    function o(n) {
      const r = n.target;
      s(
        "update:modelValue",
        r.checked
      );
    }
    return (n, r) => (i(), d("label", {
      class: p(l.value)
    }, [
      u("input", {
        type: "checkbox",
        role: "switch",
        checked: a.modelValue,
        disabled: a.disabled,
        class: "sr-only",
        onChange: o
      }, null, 40, Ee),
      r[0] || (r[0] = u("span", {
        class: "switch-control",
        "aria-hidden": "true"
      }, null, -1)),
      u("span", null, [
        c(n.$slots, "default")
      ])
    ], 2));
  }
}), Qt = /* @__PURE__ */ m({
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
    function n(f) {
      return o.value.includes(
        f
      );
    }
    function r(f) {
      if (!t.disabled) {
        if (t.multiple) {
          const y = new Set(
            o.value
          );
          y.has(f) ? y.delete(f) : y.add(f), s(
            "update:modelValue",
            [...y]
          );
          return;
        }
        s(
          "update:modelValue",
          f
        );
      }
    }
    return K(
      "loba-choice-group",
      {
        multiple: t.multiple,
        disabled: t.disabled,
        isSelected: n,
        toggleChoice: r
      }
    ), (f, y) => (i(), d("div", {
      class: p(l.value),
      role: "group"
    }, [
      c(f.$slots, "default")
    ], 2));
  }
}), Te = ["disabled", "aria-pressed"], Xt = /* @__PURE__ */ m({
  __name: "Choice",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = O(
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
    ), n = b(() => ({
      choice: !0,
      "choice--selected": l.value,
      "choice--disabled": o.value
    }));
    function r() {
      o.value || s.toggleChoice(e.value);
    }
    return (f, y) => (i(), d("button", {
      type: "button",
      class: p(n.value),
      disabled: o.value,
      "aria-pressed": l.value,
      onClick: r
    }, [
      c(f.$slots, "default")
    ], 10, Te));
  }
}), Yt = /* @__PURE__ */ m({
  __name: "SectionHeader",
  props: {
    width: { default: "default" },
    align: { default: "left" }
  },
  setup(a) {
    const e = a;
    return (t, s) => (i(), d("header", {
      class: p(["section-header", {
        "section-header--wide": e.width === "wide",
        "section-header--center": e.align === "center"
      }])
    }, [
      c(t.$slots, "default")
    ], 2));
  }
}), Zt = /* @__PURE__ */ m({
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
    return (s, l) => (i(), d("div", {
      class: p(["button-group", t.value])
    }, [
      c(s.$slots, "default")
    ], 2));
  }
}), De = { class: "accordion" }, ea = /* @__PURE__ */ m({
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
        t.value = t.value.filter((r) => r !== o);
        return;
      }
      if (e.multiple) {
        t.value = [...t.value, o];
        return;
      }
      t.value = [o];
    }
    return K("loba-accordion", {
      openItems: t,
      isOpen: s,
      toggleItem: l
    }), (o, n) => (i(), d("div", De, [
      c(o.$slots, "default")
    ]));
  }
}), Ie = ["disabled", "aria-expanded", "aria-controls"], Le = ["id"], ta = /* @__PURE__ */ m({
  __name: "AccordionItem",
  props: {
    id: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = O("loba-accordion");
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
    return (n, r) => (i(), d("div", {
      class: p(["accordion-item", { "accordion-item--open": l.value }])
    }, [
      u("button", {
        type: "button",
        class: "accordion-trigger",
        disabled: e.disabled,
        "aria-expanded": l.value,
        "aria-controls": `accordion-${e.id}`,
        onClick: o
      }, [
        c(n.$slots, "trigger")
      ], 8, Ie),
      ee(u("div", {
        id: `accordion-${e.id}`,
        class: "accordion-content"
      }, [
        c(n.$slots, "default")
      ], 8, Le), [
        [te, l.value]
      ])
    ], 2));
  }
}), qe = { class: "sidebar-header" }, Ae = { class: "sidebar-navigation" }, Me = { class: "sidebar-footer" }, aa = /* @__PURE__ */ m({
  __name: "Sidebar",
  props: {
    collapsed: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = b(() => ({
      sidebar: !0,
      "sidebar--collapsed": e.collapsed
    }));
    return (s, l) => (i(), d("aside", {
      class: p(t.value)
    }, [
      u("div", qe, [
        c(s.$slots, "header")
      ]),
      u("nav", Ae, [
        c(s.$slots, "default")
      ]),
      u("div", Me, [
        c(s.$slots, "footer")
      ])
    ], 2));
  }
}), ze = {
  key: 0,
  class: "sidebar-group-label"
}, Ke = { class: "sidebar-group-items" }, sa = /* @__PURE__ */ m({
  __name: "SidebarGroup",
  props: {
    label: { default: "" }
  },
  setup(a) {
    const e = a, t = b(() => ({
      "sidebar-group": !0,
      "sidebar-group--labeled": !!e.label
    }));
    return (s, l) => (i(), d("div", {
      class: p(t.value)
    }, [
      e.label ? (i(), d("div", ze, x(e.label), 1)) : $("", !0),
      u("div", Ke, [
        c(s.$slots, "default")
      ])
    ], 2));
  }
}), Oe = { class: "sidebar-item-wrapper" }, Pe = {
  key: 0,
  class: "sidebar-item-icon",
  "aria-hidden": "true"
}, Re = { class: "sidebar-item-label" }, Fe = {
  key: 1,
  class: "sidebar-item-chevron",
  "aria-hidden": "true"
}, Ge = {
  key: 0,
  class: "sidebar-item-children"
}, la = /* @__PURE__ */ m({
  __name: "SidebarItem",
  props: {
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    href: { default: void 0 },
    expanded: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = ae(), s = V(
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
    function n(r) {
      if (e.disabled) {
        r.preventDefault();
        return;
      }
      l.value && (r.preventDefault(), s.value = !s.value);
    }
    return (r, f) => (i(), d("div", Oe, [
      (i(), E(z(l.value ? "button" : "a"), {
        href: l.value || !e.href ? void 0 : e.href,
        type: l.value ? "button" : void 0,
        class: p(o.value),
        disabled: l.value ? e.disabled : void 0,
        "aria-current": e.active ? "page" : void 0,
        "aria-expanded": l.value ? s.value : void 0,
        "aria-disabled": e.disabled ? "true" : void 0,
        onClick: n
      }, {
        default: L(() => [
          r.$slots.icon ? (i(), d("span", Pe, [
            c(r.$slots, "icon")
          ])) : $("", !0),
          u("span", Re, [
            c(r.$slots, "default")
          ]),
          l.value ? (i(), d("span", Fe, [
            u("span", {
              class: p({
                "sidebar-item-chevron--expanded": s.value
              })
            }, " › ", 2)
          ])) : $("", !0)
        ]),
        _: 3
      }, 8, ["href", "type", "class", "disabled", "aria-current", "aria-expanded", "aria-disabled"])),
      l.value && s.value ? (i(), d("div", Ge, [
        c(r.$slots, "children")
      ])) : $("", !0)
    ]));
  }
}), je = { class: "tabs" }, He = {
  class: "tabs-list",
  role: "tablist"
}, oa = /* @__PURE__ */ m({
  __name: "Tabs",
  props: {
    modelValue: { default: null }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = V(t.modelValue);
    P(
      () => t.modelValue,
      (n) => {
        l.value = n;
      }
    );
    function o(n) {
      l.value = n, s(
        "update:modelValue",
        n
      );
    }
    return K(
      "loba-tabs",
      {
        activeValue: () => l.value,
        selectTab: o
      }
    ), (n, r) => (i(), d("div", je, [
      u("div", He, [
        c(n.$slots, "default")
      ])
    ]));
  }
}), Ne = ["aria-selected", "aria-disabled", "tabindex"], na = /* @__PURE__ */ m({
  __name: "Tab",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = O("loba-tabs");
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
    function n() {
      e.disabled || s.selectTab(e.value);
    }
    return (r, f) => (i(), d("button", {
      type: "button",
      class: p(o.value),
      role: "tab",
      "aria-selected": l.value,
      "aria-disabled": e.disabled || void 0,
      tabindex: l.value ? 0 : -1,
      onClick: n
    }, [
      c(r.$slots, "default")
    ], 10, Ne));
  }
}), We = ["href"], Je = ["aria-current"], Ue = {
  class: "breadcrumbs-separator",
  "aria-hidden": "true"
}, ia = /* @__PURE__ */ m({
  __name: "Breadcrumb",
  props: {
    href: { default: void 0 },
    current: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = O(
      "loba-breadcrumbs-separator",
      "/"
    ), s = b(() => ({
      "breadcrumbs-item": !0
    }));
    return (l, o) => (i(), d("li", {
      class: p(s.value)
    }, [
      e.href && !e.current ? (i(), d("a", {
        key: 0,
        class: "breadcrumbs-link",
        href: e.href
      }, [
        c(l.$slots, "default")
      ], 8, We)) : (i(), d("span", {
        key: 1,
        class: "breadcrumbs-current",
        "aria-current": e.current ? "page" : void 0
      }, [
        c(l.$slots, "default")
      ], 8, Je)),
      u("span", Ue, x(N(t)), 1)
    ], 2));
  }
}), Qe = {
  class: "breadcrumbs",
  "aria-label": "Breadcrumb"
}, Xe = { class: "breadcrumbs-list" }, ra = /* @__PURE__ */ m({
  __name: "Breadcrumbs",
  props: {
    separator: { default: "/" }
  },
  setup(a) {
    return K(
      "loba-breadcrumbs-separator",
      a.separator
    ), (t, s) => (i(), d("nav", Qe, [
      u("ol", Xe, [
        c(t.$slots, "default")
      ])
    ]));
  }
}), Ye = ["src", "alt"], da = /* @__PURE__ */ m({
  __name: "Image",
  props: {
    src: {},
    alt: {},
    fit: { default: "cover" },
    aspectRatio: { default: "auto" }
  },
  setup(a) {
    const e = a;
    return (t, s) => (i(), d("div", {
      class: p(["media", {
        "media-square": e.aspectRatio === "square",
        "media-video": e.aspectRatio === "video",
        "media-portrait": e.aspectRatio === "portrait",
        "media-wide": e.aspectRatio === "wide",
        "media-contain": e.fit === "contain"
      }])
    }, [
      u("img", {
        src: e.src,
        alt: e.alt
      }, null, 8, Ye)
    ], 2));
  }
}), Ze = {
  key: 0,
  class: "empty-state-icon"
}, et = { class: "empty-state-content" }, tt = {
  key: 1,
  class: "empty-state-actions"
}, ca = /* @__PURE__ */ m({
  __name: "EmptyState",
  props: {
    as: { default: "div" }
  },
  setup(a) {
    const e = a, t = b(() => [
      "empty-state"
    ]);
    return (s, l) => (i(), E(z(e.as), {
      class: p(t.value)
    }, {
      default: L(() => [
        s.$slots.icon ? (i(), d("div", Ze, [
          c(s.$slots, "icon")
        ])) : $("", !0),
        u("div", et, [
          c(s.$slots, "default")
        ]),
        s.$slots.actions ? (i(), d("div", tt, [
          c(s.$slots, "actions")
        ])) : $("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), at = { class: "list" }, ua = /* @__PURE__ */ m({
  __name: "List",
  props: /* @__PURE__ */ le({
    selectable: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !1 }
  }, {
    modelValue: {
      default: null
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(a) {
    const e = a, t = V(
      /* @__PURE__ */ new Set()
    ), s = se(a, "modelValue");
    P(
      s,
      (n) => {
        if (n == null) {
          t.value = /* @__PURE__ */ new Set();
          return;
        }
        t.value = new Set(
          Array.isArray(n) ? n : [n]
        );
      },
      { immediate: !0 }
    );
    function l(n) {
      return t.value.has(n);
    }
    function o(n) {
      if (!e.selectable)
        return;
      const r = new Set(
        t.value
      );
      e.multiple ? r.has(n) ? r.delete(n) : r.add(n) : r.has(n) ? r.clear() : (r.clear(), r.add(n)), t.value = r;
      const f = [...r];
      s.value = e.multiple ? f : f[0] ?? null;
    }
    return K("loba-list", {
      selectable: e.selectable,
      multiple: e.multiple,
      isSelected: l,
      toggleSelection: o
    }), (n, r) => (i(), d("div", at, [
      c(n.$slots, "default")
    ]));
  }
}), st = ["tabindex", "aria-selected", "aria-disabled", "onKeydown"], pa = /* @__PURE__ */ m({
  __name: "ListItem",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(a) {
    const e = a, t = O("loba-list");
    if (!t)
      throw new Error(
        "ListItem must be used inside a List."
      );
    const s = t, l = b(
      () => s.isSelected(e.value)
    ), o = b(() => ({
      "list-item": !0,
      "list-item--selectable": s.selectable && !e.disabled,
      "list-item--selected": l.value,
      "list-item--disabled": e.disabled
    }));
    function n() {
      e.disabled || !s.selectable || s.toggleSelection(e.value);
    }
    return (r, f) => (i(), d("div", {
      class: p(o.value),
      tabindex: N(s).selectable && !e.disabled ? 0 : void 0,
      "aria-selected": N(s).selectable ? l.value : void 0,
      "aria-disabled": e.disabled || void 0,
      role: "listitem",
      onClick: n,
      onKeydown: [
        j(n, ["enter"]),
        j(X(n, ["prevent"]), ["space"])
      ]
    }, [
      c(r.$slots, "default")
    ], 42, st));
  }
}), lt = { class: "pagination-controls" }, ot = ["disabled"], nt = ["disabled"], it = { class: "pagination-pages" }, rt = {
  key: 0,
  class: "pagination-ellipsis"
}, dt = ["aria-current", "onClick"], ct = { class: "pagination-controls" }, ut = ["disabled"], pt = ["disabled"], fa = /* @__PURE__ */ m({
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
    ), n = b(() => {
      const g = l.value, B = o.value, w = Math.max(
        0,
        t.siblingCount
      );
      if (g <= 7)
        return Array.from(
          { length: g },
          (A, Z) => Z + 1
        );
      const q = Math.max(
        B - w,
        1
      ), v = Math.min(
        B + w,
        g
      ), C = q > 2, _ = v < g - 1, k = [1];
      C && k.push("...");
      const D = C ? q : 2, I = _ ? v : g - 1;
      for (let A = D; A <= I; A++)
        k.push(A);
      return _ && k.push("..."), k.push(g), k;
    }), r = b(() => ({
      pagination: !0,
      "pagination-compact": t.compact
    }));
    function f(g) {
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
      f(o.value - 1);
    }
    function T() {
      f(o.value + 1);
    }
    function S() {
      f(1);
    }
    function h() {
      f(l.value);
    }
    return (g, B) => (i(), d("nav", {
      class: p(r.value),
      "aria-label": "Pagination"
    }, [
      u("div", lt, [
        u("button", {
          class: p(["pagination-item", {
            "pagination-item--disabled": o.value === 1
          }]),
          type: "button",
          disabled: o.value === 1,
          "aria-label": "First page",
          onClick: S
        }, " « ", 10, ot),
        u("button", {
          class: p(["pagination-item", {
            "pagination-item--disabled": o.value === 1
          }]),
          type: "button",
          disabled: o.value === 1,
          "aria-label": "Previous page",
          onClick: y
        }, " ‹ ", 10, nt)
      ]),
      u("div", it, [
        (i(!0), d(M, null, G(n.value, (w, q) => (i(), d(M, {
          key: `${w}-${q}`
        }, [
          w === "..." ? (i(), d("span", rt, " … ")) : (i(), d("button", {
            key: 1,
            class: p(["pagination-item", {
              "pagination-item--current": w === o.value
            }]),
            type: "button",
            "aria-current": w === o.value ? "page" : void 0,
            onClick: (v) => f(w)
          }, x(w), 11, dt))
        ], 64))), 128))
      ]),
      u("div", ct, [
        u("button", {
          class: p(["pagination-item", {
            "pagination-item--disabled": o.value === l.value
          }]),
          type: "button",
          disabled: o.value === l.value,
          "aria-label": "Next page",
          onClick: T
        }, " › ", 10, ut),
        u("button", {
          class: p(["pagination-item", {
            "pagination-item--disabled": o.value === l.value
          }]),
          type: "button",
          disabled: o.value === l.value,
          "aria-label": "Last page",
          onClick: h
        }, " » ", 10, pt)
      ])
    ], 2));
  }
}), ft = { class: "table" }, mt = ["tabindex", "aria-sort", "onClick", "onKeydown"], bt = {
  key: 0,
  "aria-hidden": "true"
}, vt = ["onClick"], _t = {
  key: 0,
  class: "table-loading",
  "aria-hidden": "true"
}, ma = /* @__PURE__ */ m({
  __name: "Table",
  props: {
    columns: {},
    rows: {},
    rowKey: { default: "id" },
    sortable: { type: Boolean, default: !1 },
    selectable: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    empty: { type: Boolean }
  },
  emits: ["update:selectedRows", "sort", "row-click"],
  setup(a, { emit: e }) {
    const t = a, s = e, l = V(null), o = V("asc"), n = V(/* @__PURE__ */ new Set());
    function r(v, C) {
      if (!(typeof v != "object" || v === null))
        return v[C];
    }
    function f(v) {
      const C = r(
        v,
        t.rowKey
      );
      return typeof C == "string" || typeof C == "number" ? C : t.rows.indexOf(v);
    }
    function y(v) {
      return n.value.has(
        f(v)
      );
    }
    const T = b(() => {
      if (!t.sortable || !l.value)
        return t.rows;
      const v = l.value, C = o.value;
      return [...t.rows].sort(
        (_, k) => {
          const D = r(_, v), I = r(k, v);
          if (D === I)
            return 0;
          if (D == null)
            return 1;
          if (I == null)
            return -1;
          if (typeof D == "number" && typeof I == "number")
            return C === "asc" ? D - I : I - D;
          const A = String(D).localeCompare(
            String(I),
            void 0,
            {
              numeric: !0,
              sensitivity: "base"
            }
          );
          return C === "asc" ? A : -A;
        }
      );
    });
    function S(v) {
      !t.sortable || !v.sortable || (l.value !== v.key ? (l.value = v.key, o.value = "asc") : o.value = o.value === "asc" ? "desc" : "asc", s("sort", {
        key: v.key,
        direction: o.value
      }));
    }
    function h(v) {
      if (!t.selectable)
        return;
      const C = f(v), _ = new Set(
        n.value
      );
      t.multiple ? _.has(C) ? _.delete(C) : _.add(C) : (_.clear(), _.add(C)), n.value = _, s(
        "update:selectedRows",
        t.rows.filter(
          (k) => _.has(f(k))
        )
      );
    }
    function g(v) {
      t.selectable && h(v), s("row-click", v);
    }
    function B(v) {
      return l.value !== v.key ? "" : o.value === "asc" ? "↑" : "↓";
    }
    function w(v) {
      return {
        [`table-cell--${v.align ?? "start"}`]: !0
      };
    }
    function q(v) {
      return l.value === v.key;
    }
    return (v, C) => (i(), d("div", ft, [
      u("table", null, [
        u("thead", null, [
          u("tr", null, [
            (i(!0), d(M, null, G(a.columns, (_) => (i(), d("th", {
              key: _.key,
              style: W({
                width: _.width
              }),
              class: p([
                w(_),
                {
                  "table-header--sortable": a.sortable && _.sortable,
                  "table-header--sorted": q(_)
                }
              ]),
              tabindex: a.sortable && _.sortable ? 0 : void 0,
              "aria-sort": q(_) ? o.value === "asc" ? "ascending" : "descending" : void 0,
              onClick: (k) => S(_),
              onKeydown: [
                j((k) => S(_), ["enter"]),
                j(X((k) => S(_), ["prevent"]), ["space"])
              ]
            }, [
              u("span", null, x(_.label), 1),
              a.sortable && _.sortable ? (i(), d("span", bt, x(B(_)), 1)) : $("", !0)
            ], 46, mt))), 128))
          ])
        ]),
        u("tbody", null, [
          (i(!0), d(M, null, G(T.value, (_) => (i(), d("tr", {
            key: f(_),
            class: p({
              "table-row--selected": y(_),
              "table-row--clickable": !0
            }),
            onClick: (k) => g(_)
          }, [
            (i(!0), d(M, null, G(a.columns, (k) => (i(), d("td", {
              key: k.key,
              class: p(
                w(k)
              )
            }, [
              c(
                v.$slots,
                `cell-${k.key}`,
                {
                  row: _,
                  value: r(
                    _,
                    k.key
                  )
                },
                () => [
                  F(x(r(
                    _,
                    k.key
                  )), 1)
                ]
              )
            ], 2))), 128))
          ], 10, vt))), 128))
        ])
      ]),
      a.loading ? (i(), d("div", _t)) : $("", !0)
    ]));
  }
}), ht = {
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
    const n = [
      "button:not([disabled])",
      "[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "[tabindex]:not([tabindex='-1'])"
    ].join(", ");
    function r() {
      s(
        "update:modelValue",
        !1
      );
    }
    function f() {
      t.closeOnBackdrop && r();
    }
    function y(h) {
      if (!t.modelValue || !l.value)
        return;
      if (h.key === "Escape" && t.closeOnEscape) {
        h.preventDefault(), r();
        return;
      }
      if (h.key !== "Tab")
        return;
      const g = Array.from(
        l.value.querySelectorAll(
          n
        )
      );
      if (g.length === 0) {
        h.preventDefault();
        return;
      }
      const B = g[0], w = g[g.length - 1];
      if (h.shiftKey && document.activeElement === B) {
        h.preventDefault(), w.focus();
        return;
      }
      !h.shiftKey && document.activeElement === w && (h.preventDefault(), B.focus());
    }
    async function T() {
      o = document.activeElement instanceof HTMLElement ? document.activeElement : null, await Y(), l.value?.querySelector(
        n
      )?.focus();
    }
    function S() {
      o?.focus(), o = null;
    }
    return P(
      () => t.modelValue,
      async (h) => {
        h ? await T() : S();
      }
    ), J(() => {
      t.modelValue && T(), document.addEventListener(
        "keydown",
        y
      );
    }), R(() => {
      document.removeEventListener(
        "keydown",
        y
      ), S();
    }), (h, g) => (i(), E(U, { to: "body" }, [
      a.modelValue ? (i(), d("div", ht, [
        u("button", {
          class: "dialog-backdrop",
          type: "button",
          "aria-label": "Close dialog",
          tabindex: "-1",
          onClick: f
        }),
        u("div", {
          ref_key: "dialogElement",
          ref: l,
          class: "dialog-content",
          role: "dialog",
          "aria-modal": "true"
        }, [
          c(h.$slots, "default")
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
    const n = [
      "button:not([disabled])",
      "[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "[tabindex]:not([tabindex='-1'])"
    ].join(", ");
    function r() {
      s(
        "update:modelValue",
        !1
      );
    }
    function f() {
      t.closeOnBackdrop && r();
    }
    function y(h) {
      if (!t.modelValue || !l.value)
        return;
      if (h.key === "Escape" && t.closeOnEscape) {
        h.preventDefault(), r();
        return;
      }
      if (h.key !== "Tab")
        return;
      const g = Array.from(
        l.value.querySelectorAll(
          n
        )
      );
      if (g.length === 0) {
        h.preventDefault();
        return;
      }
      const B = g[0], w = g[g.length - 1];
      if (h.shiftKey && document.activeElement === B) {
        h.preventDefault(), w.focus();
        return;
      }
      !h.shiftKey && document.activeElement === w && (h.preventDefault(), B.focus());
    }
    async function T() {
      o = document.activeElement instanceof HTMLElement ? document.activeElement : null, await Y(), l.value?.querySelector(
        n
      )?.focus();
    }
    function S() {
      o?.focus(), o = null;
    }
    return P(
      () => t.modelValue,
      async (h) => {
        h ? await T() : S();
      }
    ), J(() => {
      document.addEventListener(
        "keydown",
        y
      ), t.modelValue && T();
    }), R(() => {
      document.removeEventListener(
        "keydown",
        y
      ), S();
    }), (h, g) => (i(), E(U, { to: "body" }, [
      t.modelValue ? (i(), d("div", {
        key: 0,
        class: p(["drawer", {
          "drawer--open": t.modelValue,
          "drawer--left": t.side === "left",
          "drawer--right": t.side === "right"
        }]),
        role: "presentation"
      }, [
        u("button", {
          class: "drawer-backdrop",
          type: "button",
          "aria-label": "Close drawer",
          tabindex: "-1",
          onClick: f
        }),
        u("aside", {
          ref_key: "panel",
          ref: l,
          class: "drawer-panel",
          role: "dialog",
          "aria-modal": "true"
        }, [
          u("div", yt, [
            c(h.$slots, "default")
          ])
        ], 512)
      ], 2)) : $("", !0)
    ]));
  }
}), gt = {
  key: 0,
  class: "popover-content",
  role: "dialog"
}, _a = /* @__PURE__ */ m({
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
    function n(f) {
      if (!s.value)
        return;
      const y = f.target;
      y instanceof Node && !s.value.contains(y) && o();
    }
    function r(f) {
      f.key === "Escape" && o();
    }
    return J(() => {
      document.addEventListener(
        "click",
        n
      ), document.addEventListener(
        "keydown",
        r
      );
    }), R(() => {
      document.removeEventListener(
        "click",
        n
      ), document.removeEventListener(
        "keydown",
        r
      );
    }), (f, y) => (i(), d("div", {
      ref_key: "popover",
      ref: s,
      class: p(["popover", {
        "popover--open": t.value,
        [`popover--${e.placement}`]: !0
      }])
    }, [
      u("div", {
        class: "popover-trigger",
        onClick: l
      }, [
        c(f.$slots, "trigger")
      ]),
      t.value ? (i(), d("div", gt, [
        c(f.$slots, "default")
      ])) : $("", !0)
    ], 2));
  }
}), $t = { class: "tooltip-trigger" }, kt = {
  class: "tooltip-content",
  role: "tooltip"
}, ha = /* @__PURE__ */ m({
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
    return R(() => {
      clearTimeout(s);
    }), (n, r) => (i(), d("span", {
      class: p(["tooltip", {
        "tooltip--visible": t.value,
        [`tooltip--${e.placement}`]: !0
      }]),
      onMouseenter: l,
      onMouseleave: o,
      onFocusin: l,
      onFocusout: o
    }, [
      u("span", $t, [
        c(n.$slots, "default")
      ]),
      u("span", kt, x(e.text), 1)
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
    return (n, r) => (i(), d("div", {
      class: p(l.value),
      role: "alert"
    }, [
      u("div", wt, [
        c(n.$slots, "default"),
        n.$slots.actions ? (i(), d("div", Ct, [
          c(n.$slots, "actions")
        ])) : $("", !0)
      ]),
      a.dismissible ? (i(), d("button", {
        key: 0,
        class: "alert-close",
        type: "button",
        "aria-label": "Dismiss alert",
        onClick: o
      }, " × ")) : $("", !0)
    ], 2));
  }
}), Bt = ["aria-valuemin", "aria-valuemax", "aria-valuenow"], Vt = { class: "progress-track" }, xt = {
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
    return (l, o) => (i(), d("div", {
      class: p(s.value),
      role: "progressbar",
      "aria-valuemin": a.indeterminate ? void 0 : 0,
      "aria-valuemax": a.indeterminate ? void 0 : a.max,
      "aria-valuenow": a.indeterminate ? void 0 : a.value
    }, [
      u("div", Vt, [
        u("div", {
          class: "progress-value",
          style: W(
            a.indeterminate ? void 0 : {
              width: `${t.value}%`
            }
          )
        }, null, 4)
      ]),
      a.showValue ? (i(), d("div", xt, [
        u("span", null, [
          c(l.$slots, "default")
        ]),
        u("span", null, x(Math.round(t.value)) + "% ", 1)
      ])) : c(l.$slots, "label", {}, void 0, void 0, 1)
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
    return (s, l) => (i(), d("div", {
      class: p(t.value),
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
    function n() {
      o && (clearTimeout(o), o = void 0);
    }
    function r() {
      n(), l.value = !1, s(
        "update:modelValue",
        !1
      ), s("close");
    }
    function f() {
      n(), !(t.duration <= 0 || !t.modelValue) && (o = setTimeout(() => {
        r();
      }, t.duration));
    }
    return P(
      () => t.modelValue,
      (y) => {
        l.value = y, y ? f() : n();
      },
      {
        immediate: !0
      }
    ), R(() => {
      n();
    }), (y, T) => (i(), E(U, { to: "body" }, [
      l.value ? (i(), d("div", {
        key: 0,
        class: p(["toast", {
          "toast--visible": l.value,
          [`toast-${a.variant}`]: !0
        }]),
        role: "status",
        "aria-live": "polite"
      }, [
        u("div", St, [
          a.title ? (i(), d("div", Et, x(a.title), 1)) : $("", !0),
          u("div", Tt, [
            c(y.$slots, "default")
          ])
        ]),
        a.dismissible ? (i(), d("button", {
          key: 0,
          class: "toast-close",
          type: "button",
          "aria-label": "Dismiss notification",
          onClick: r
        }, " × ")) : $("", !0)
      ], 2)) : $("", !0)
    ]));
  }
});
export {
  ea as Accordion,
  ta as AccordionItem,
  ya as Alert,
  At as Badge,
  ia as Breadcrumb,
  ra as Breadcrumbs,
  It as Button,
  Zt as ButtonGroup,
  Lt as Card,
  Wt as Checkbox,
  Xt as Choice,
  Qt as ChoiceGroup,
  Kt as Container,
  ba as Dialog,
  Pt as Divider,
  va as Drawer,
  ca as EmptyState,
  Ft as Eyebrow,
  jt as FormField,
  Ot as Grid,
  Rt as Heading,
  da as Image,
  Gt as Input,
  $e as Label,
  ua as List,
  pa as ListItem,
  fa as Pagination,
  _a as Popover,
  ga as Progress,
  Jt as Radio,
  Mt as Section,
  Yt as SectionHeader,
  Nt as Select,
  aa as Sidebar,
  sa as SidebarGroup,
  la as SidebarItem,
  $a as Skeleton,
  zt as Stack,
  Ut as Switch,
  na as Tab,
  ma as Table,
  oa as Tabs,
  qt as Tag,
  Q as Text,
  Ht as Textarea,
  ka as Toast,
  ha as Tooltip
};
