/* @ds-bundle: {"namespace":"RealtyHub","components":[{"name":"Badge","sourcePath":"components/data/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/actions/Button/Button.jsx"},{"name":"Card","sourcePath":"components/layout/Card/Card.jsx"},{"name":"Input","sourcePath":"components/forms/Input/Input.jsx"},{"name":"SidebarTab","sourcePath":"components/navigation/SidebarTab/SidebarTab.jsx"}],"sourceHashes":{"components/data/Badge/Badge.jsx":"cefa9d3bbe03","components/data/Badge/Badge.d.ts":"ca2deabc0717","components/data/Badge/Badge.prompt.md":"fe98abc3e77a","components/actions/Button/Button.jsx":"bab2ed9e1b02","components/actions/Button/Button.d.ts":"59022dababdb","components/actions/Button/Button.prompt.md":"a6899d789ed9","components/layout/Card/Card.jsx":"c46a9bf121a1","components/layout/Card/Card.d.ts":"774ff4ebef62","components/layout/Card/Card.prompt.md":"ae902c724297","components/forms/Input/Input.jsx":"c074fbf052b0","components/forms/Input/Input.d.ts":"93b9e0d0cc36","components/forms/Input/Input.prompt.md":"43d7a6b6fab1","components/navigation/SidebarTab/SidebarTab.jsx":"d4b3922a92e4","components/navigation/SidebarTab/SidebarTab.d.ts":"895c73558359","components/navigation/SidebarTab/SidebarTab.prompt.md":"5364dcfa2ea7"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
"use strict";
var RealtyHub = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx;
      module.exports.jsxs = jsxs;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs : jsx)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // dist/index.es.js
  var index_es_exports = {};
  __export(index_es_exports, {
    Badge: () => Badge,
    Button: () => Button,
    Card: () => Card,
    Input: () => Input,
    SidebarTab: () => SidebarTab
  });
  init_define_import_meta_env();
  var import_react = __toESM(require_react_shim());
  var import_react2 = __toESM(require_react_shim());
  var import_react3 = __toESM(require_react_shim());
  var import_react4 = __toESM(require_react_shim());
  var import_react5 = __toESM(require_react_shim());
  var __defProp2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp2.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var base = {
    fontFamily: "var(--rh-font)",
    fontWeight: 600,
    letterSpacing: "0.01em",
    border: "1px solid transparent",
    borderRadius: "var(--rh-radius-btn)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    transition: "background 0.15s, border-color 0.15s, color 0.15s",
    lineHeight: 1,
    whiteSpace: "nowrap"
  };
  var sizes = {
    sm: { fontSize: "12px", padding: "6px 12px" },
    md: { fontSize: "14px", padding: "9px 18px" }
  };
  var variants = {
    primary: {
      background: "var(--rh-accent)",
      color: "#ffffff",
      borderColor: "var(--rh-accent)"
    },
    secondary: {
      background: "#ffffff",
      color: "var(--rh-accent)",
      borderColor: "var(--rh-border)"
    },
    ghost: {
      background: "transparent",
      color: "var(--rh-text-secondary)",
      borderColor: "transparent"
    }
  };
  var Button = ({
    variant = "primary",
    children,
    disabled = false,
    onClick,
    fullWidth = false,
    type = "button",
    size = "md"
  }) => /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type,
      disabled,
      onClick,
      style: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, base), sizes[size]), variants[variant]), {
        width: fullWidth ? "100%" : void 0,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer"
      })
    },
    children
  );
  var paddings = {
    none: "0",
    sm: "12px",
    md: "20px",
    lg: "28px"
  };
  var Card = ({
    children,
    title,
    subtitle,
    padding = "md",
    onClick
  }) => /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      onClick,
      style: {
        background: "var(--rh-bg)",
        border: "1px solid var(--rh-border)",
        borderRadius: "var(--rh-radius-card)",
        fontFamily: "var(--rh-font)",
        cursor: onClick ? "pointer" : void 0,
        overflow: "hidden"
      }
    },
    (title || subtitle) && /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        style: {
          padding: "16px 20px",
          borderBottom: "1px solid var(--rh-border)"
        }
      },
      title && /* @__PURE__ */ import_react2.default.createElement(
        "div",
        {
          style: {
            fontWeight: 600,
            fontSize: "15px",
            color: "var(--rh-text-primary)",
            lineHeight: 1.3
          }
        },
        title
      ),
      subtitle && /* @__PURE__ */ import_react2.default.createElement(
        "div",
        {
          style: {
            fontSize: "13px",
            color: "var(--rh-text-secondary)",
            marginTop: "2px"
          }
        },
        subtitle
      )
    ),
    /* @__PURE__ */ import_react2.default.createElement("div", { style: { padding: paddings[padding] } }, children)
  );
  var Input = ({
    label,
    placeholder,
    value,
    onChange,
    disabled = false,
    error,
    helperText,
    type = "text",
    required = false,
    fullWidth = true
  }) => /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      style: {
        fontFamily: "var(--rh-font)",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        width: fullWidth ? "100%" : void 0
      }
    },
    label && /* @__PURE__ */ import_react3.default.createElement(
      "label",
      {
        style: {
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: error ? "var(--rh-priority-high)" : "var(--rh-text-secondary)"
        }
      },
      label,
      required && /* @__PURE__ */ import_react3.default.createElement("span", { style: { color: "var(--rh-priority-high)", marginLeft: "3px" } }, "*")
    ),
    /* @__PURE__ */ import_react3.default.createElement(
      "input",
      {
        type,
        value,
        placeholder,
        disabled,
        onChange: (e) => onChange == null ? void 0 : onChange(e.target.value),
        style: {
          fontFamily: "var(--rh-font)",
          fontSize: "14px",
          fontWeight: 400,
          color: "var(--rh-text-primary)",
          background: disabled ? "var(--rh-surface)" : "var(--rh-bg)",
          border: `1px solid ${error ? "var(--rh-priority-high)" : "var(--rh-border)"}`,
          borderRadius: "var(--rh-radius-input)",
          padding: "9px 12px",
          width: "100%",
          outline: "none",
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? "not-allowed" : "text",
          transition: "border-color 0.15s"
        }
      }
    ),
    (error || helperText) && /* @__PURE__ */ import_react3.default.createElement(
      "div",
      {
        style: {
          fontSize: "12px",
          color: error ? "var(--rh-priority-high)" : "var(--rh-text-muted)"
        }
      },
      error || helperText
    )
  );
  var configs = {
    high: {
      color: "#ffffff",
      background: "var(--rh-priority-high)",
      border: "transparent",
      defaultLabel: "High",
      dotColor: "var(--rh-priority-high)"
    },
    medium: {
      color: "#ffffff",
      background: "var(--rh-priority-medium)",
      border: "transparent",
      defaultLabel: "Medium",
      dotColor: "var(--rh-priority-medium)"
    },
    low: {
      color: "var(--rh-accent)",
      background: "var(--rh-accent-light)",
      border: "transparent",
      defaultLabel: "Low",
      dotColor: "var(--rh-priority-low)"
    }
  };
  var Badge = ({ priority, label, dot = false }) => {
    const cfg = configs[priority];
    return /* @__PURE__ */ import_react4.default.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          fontFamily: "var(--rh-font)",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: cfg.color,
          background: cfg.background,
          border: `1px solid ${cfg.border}`,
          borderRadius: "3px",
          padding: "2px 8px",
          lineHeight: 1.6,
          whiteSpace: "nowrap"
        }
      },
      dot && /* @__PURE__ */ import_react4.default.createElement(
        "span",
        {
          style: {
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: cfg.color,
            flexShrink: 0
          }
        }
      ),
      label != null ? label : cfg.defaultLabel
    );
  };
  var SidebarTab = ({
    label,
    icon,
    active = false,
    onClick,
    badge,
    indent = false
  }) => /* @__PURE__ */ import_react5.default.createElement(
    "div",
    {
      onClick,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "9px",
        padding: indent ? "7px 12px 7px 32px" : "7px 12px",
        borderLeft: active ? "3px solid var(--rh-accent)" : "3px solid transparent",
        background: active ? "var(--rh-accent-light)" : "transparent",
        cursor: "pointer",
        fontFamily: "var(--rh-font)",
        fontSize: "14px",
        fontWeight: active ? 600 : 400,
        color: active ? "var(--rh-accent)" : "var(--rh-text-secondary)",
        borderRadius: "0 4px 4px 0",
        transition: "background 0.12s, color 0.12s",
        userSelect: "none"
      }
    },
    icon && /* @__PURE__ */ import_react5.default.createElement(
      "span",
      {
        style: {
          display: "flex",
          alignItems: "center",
          opacity: active ? 1 : 0.7,
          flexShrink: 0,
          fontSize: "16px"
        }
      },
      icon
    ),
    /* @__PURE__ */ import_react5.default.createElement("span", { style: { flex: 1, lineHeight: 1.4 } }, label),
    badge !== void 0 && /* @__PURE__ */ import_react5.default.createElement(
      "span",
      {
        style: {
          fontSize: "11px",
          fontWeight: 600,
          color: active ? "var(--rh-accent)" : "var(--rh-text-muted)",
          background: active ? "rgba(6,148,124,0.15)" : "var(--rh-surface)",
          borderRadius: "10px",
          padding: "1px 7px",
          lineHeight: 1.6
        }
      },
      badge
    )
  );
  return __toCommonJS(index_es_exports);
})();
window.RealtyHub=RealtyHub.__dsMainNs?Object.assign({},RealtyHub,RealtyHub.__dsMainNs,{__dsMainNs:undefined}):RealtyHub;
