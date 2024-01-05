// .wrangler/tmp/bundle-yU3INt/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// build/worker/shim.mjs
import I from "./45bea7c452c496d0a81fdf28aba0b79913f0e7ed-index.wasm";
import pe from "./45bea7c452c496d0a81fdf28aba0b79913f0e7ed-index.wasm";
var D = Object.defineProperty;
var z = (e, t) => {
  for (var n in t)
    D(e, n, { get: t[n], enumerable: true });
};
var g = {};
z(g, { IntoUnderlyingByteSource: () => A, IntoUnderlyingSink: () => M, IntoUnderlyingSource: () => q, MinifyConfig: () => L, PipeOptions: () => C, PolishConfig: () => Y, QueuingStrategy: () => S, R2Range: () => R, ReadableStreamGetReaderOptions: () => F, RequestRedirect: () => Z, __wbg_body_aeb10a3b63770556: () => yt, __wbg_buffer_610b70c8fd30da2d: () => Xt, __wbg_buffer_cf65c07de34b9a08: () => Ft, __wbg_byobRequest_a3c74c3694777d1b: () => Ht, __wbg_byteLength_1fef7842ca4200fa: () => Vt, __wbg_byteOffset_ede786cfcf88d3dd: () => Yt, __wbg_bytesliteral_efe7d360639bf32b: () => Ut, __wbg_call_9495de66fdbe016b: () => ot, __wbg_call_95d1ea488d03e4e8: () => Lt, __wbg_cf_23036f27554431ca: () => re, __wbg_clone_30c5866bbd00c3e5: () => jt, __wbg_close_045ed342139beb7d: () => Bt, __wbg_close_a41954830b65c455: () => Zt, __wbg_enqueue_3a8a8e67e44d2567: () => Gt, __wbg_fetch_9515ba424b6b4f02: () => dt, __wbg_fetch_e1b536877762e79a: () => xt, __wbg_globalThis_87cbb8506fecf3a9: () => Tt, __wbg_global_c85a9259e621f3db: () => At, __wbg_headers_6093927dc359903e: () => lt, __wbg_headers_ab5251d2727ac41e: () => ne, __wbg_instanceof_Error_749a7378f4439ee0: () => ut, __wbg_instanceof_Response_fb3a4df648c1859b: () => gt, __wbg_length_27a2afe8ab42b09f: () => St, __wbg_log_7bb108d119bafbc1: () => Qt, __wbg_method_d1ee174c753ca2be: () => te, __wbg_new_15d3966e9981a196: () => Kt, __wbg_new_9d3a9ce4282a18a8: () => kt, __wbg_new_f1c3a9c2533a55b8: () => G, __wbg_new_f9876326328f45ed: () => at, __wbg_newnoargs_2b8b6bd7753c76ba: () => qt, __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5: () => $t, __wbg_newwithheaders_1663eaa35210e3fd: () => mt, __wbg_newwithlength_b56c882b57805732: () => et, __wbg_newwithoptbuffersourceandinit_4d2fa6d435ff2a63: () => nt, __wbg_newwithoptreadablestreamandinit_a0b4dc209bd176be: () => rt, __wbg_newwithoptstrandinit_1a4621d99c54e7c3: () => tt, __wbg_newwithstrandinit_c45f0dc6da26fd03: () => pt, __wbg_resolve_fd40f858d9db1a04: () => It, __wbg_respond_f4778bef04e912a6: () => Pt, __wbg_self_e7c1f827057f6584: () => Et, __wbg_set_17499e8aa4003ebd: () => Wt, __wbg_set_6aa458a4ebdb65cb: () => bt, __wbg_set_a5d34c36a1a4ebd1: () => ct, __wbg_status_d483a4ac847f380a: () => wt, __wbg_then_ec5db6d509eb475f: () => Nt, __wbg_then_f753623316e2873a: () => zt, __wbg_toString_cec163b212643722: () => ft, __wbg_url_bd2775644ef804ec: () => ee, __wbg_view_d1a31268af734e5d: () => Jt, __wbg_websocket_1386775a214bacc3: () => ht, __wbg_window_a09ec664e14b1b81: () => Ot, __wbindgen_cb_drop: () => _t, __wbindgen_closure_wrapper786: () => _e, __wbindgen_debug_string: () => vt, __wbindgen_is_undefined: () => Mt, __wbindgen_memory: () => Rt, __wbindgen_number_new: () => oe, __wbindgen_object_clone_ref: () => Ct, __wbindgen_object_drop_ref: () => Q, __wbindgen_string_get: () => it, __wbindgen_string_new: () => st, __wbindgen_throw: () => Dt, fetch: () => $, getMemory: () => H });
function W() {
  return "bytes";
}
var N = new WebAssembly.Instance(I, { "./index_bg.js": g });
var o = N.exports;
function H() {
  return o.memory;
}
var l = new Array(128).fill(void 0);
l.push(void 0, null, true, false);
function _(e) {
  return l[e];
}
var x = l.length;
function P(e) {
  e < 132 || (l[e] = x, x = e);
}
function d(e) {
  let t = _(e);
  return P(e), t;
}
var U = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var v = new U("utf-8", { ignoreBOM: true, fatal: true });
v.decode();
var m = null;
function k() {
  return (m === null || m.byteLength === 0) && (m = new Uint8Array(o.memory.buffer)), m;
}
function w(e, t) {
  return v.decode(k().subarray(e, e + t));
}
function s(e) {
  x === l.length && l.push(l.length + 1);
  let t = x;
  return x = l[t], l[t] = e, t;
}
var h = 0;
var J = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var E = new J("utf-8");
var V = typeof E.encodeInto == "function" ? function(e, t) {
  return E.encodeInto(e, t);
} : function(e, t) {
  let n = E.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function O(e, t, n) {
  if (n === void 0) {
    let u = E.encode(e), y = t(u.length);
    return k().subarray(y, y + u.length).set(u), h = u.length, y;
  }
  let r = e.length, c = t(r), b = k(), i = 0;
  for (; i < r; i++) {
    let u = e.charCodeAt(i);
    if (u > 127)
      break;
    b[c + i] = u;
  }
  if (i !== r) {
    i !== 0 && (e = e.slice(i)), c = n(c, r, r = i + e.length * 3);
    let u = k().subarray(c + i, c + r), y = V(e, u);
    i += y.written;
  }
  return h = i, c;
}
function p(e) {
  return e == null;
}
var j = null;
function a() {
  return (j === null || j.byteLength === 0) && (j = new Int32Array(o.memory.buffer)), j;
}
function T(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null)
    return `${e}`;
  if (t == "string")
    return `"${e}"`;
  if (t == "symbol") {
    let c = e.description;
    return c == null ? "Symbol" : `Symbol(${c})`;
  }
  if (t == "function") {
    let c = e.name;
    return typeof c == "string" && c.length > 0 ? `Function(${c})` : "Function";
  }
  if (Array.isArray(e)) {
    let c = e.length, b = "[";
    c > 0 && (b += T(e[0]));
    for (let i = 1; i < c; i++)
      b += ", " + T(e[i]);
    return b += "]", b;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), r;
  if (n.length > 1)
    r = n[1];
  else
    return toString.call(e);
  if (r == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
}
function B(e, t, n, r) {
  let c = { a: e, b: t, cnt: 1, dtor: n }, b = (...i) => {
    c.cnt++;
    let u = c.a;
    c.a = 0;
    try {
      return r(u, c.b, ...i);
    } finally {
      --c.cnt === 0 ? o.__wbindgen_export_2.get(c.dtor)(u, c.b) : c.a = u;
    }
  };
  return b.original = c, b;
}
function K(e, t, n) {
  o.__wbindgen_export_3(e, t, s(n));
}
function $(e, t, n) {
  let r = o.fetch(s(e), s(t), s(n));
  return d(r);
}
function f(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    o.__wbindgen_export_4(s(n));
  }
}
function X(e, t, n, r) {
  o.__wbindgen_export_5(e, t, s(n), s(r));
}
var Y = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var Z = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var A = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_intounderlyingbytesource_free(t);
  }
  get type() {
    let t = o.intounderlyingbytesource_type(this.ptr);
    return d(t);
  }
  get autoAllocateChunkSize() {
    return o.intounderlyingbytesource_autoAllocateChunkSize(this.ptr) >>> 0;
  }
  start(t) {
    o.intounderlyingbytesource_start(this.ptr, s(t));
  }
  pull(t) {
    let n = o.intounderlyingbytesource_pull(this.ptr, s(t));
    return d(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    o.intounderlyingbytesource_cancel(t);
  }
};
var M = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_intounderlyingsink_free(t);
  }
  write(t) {
    let n = o.intounderlyingsink_write(this.ptr, s(t));
    return d(n);
  }
  close() {
    let t = this.__destroy_into_raw(), n = o.intounderlyingsink_close(t);
    return d(n);
  }
  abort(t) {
    let n = this.__destroy_into_raw(), r = o.intounderlyingsink_abort(n, s(t));
    return d(r);
  }
};
var q = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_intounderlyingsource_free(t);
  }
  pull(t) {
    let n = o.intounderlyingsource_pull(this.ptr, s(t));
    return d(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    o.intounderlyingsource_cancel(t);
  }
};
var L = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_minifyconfig_free(t);
  }
  get js() {
    return o.__wbg_get_minifyconfig_js(this.ptr) !== 0;
  }
  set js(t) {
    o.__wbg_set_minifyconfig_js(this.ptr, t);
  }
  get html() {
    return o.__wbg_get_minifyconfig_html(this.ptr) !== 0;
  }
  set html(t) {
    o.__wbg_set_minifyconfig_html(this.ptr, t);
  }
  get css() {
    return o.__wbg_get_minifyconfig_css(this.ptr) !== 0;
  }
  set css(t) {
    o.__wbg_set_minifyconfig_css(this.ptr, t);
  }
};
var C = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_pipeoptions_free(t);
  }
  get preventClose() {
    return o.pipeoptions_preventClose(this.ptr) !== 0;
  }
  get preventCancel() {
    return o.pipeoptions_preventCancel(this.ptr) !== 0;
  }
  get preventAbort() {
    return o.pipeoptions_preventAbort(this.ptr) !== 0;
  }
  get signal() {
    let t = o.pipeoptions_signal(this.ptr);
    return d(t);
  }
};
var S = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_queuingstrategy_free(t);
  }
  get highWaterMark() {
    return o.queuingstrategy_highWaterMark(this.ptr);
  }
};
var R = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_r2range_free(t);
  }
  get offset() {
    try {
      let r = o.__wbindgen_add_to_stack_pointer(-16);
      o.__wbg_get_r2range_offset(r, this.ptr);
      var t = a()[r / 4 + 0], n = a()[r / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      o.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set offset(t) {
    o.__wbg_set_r2range_offset(this.ptr, !p(t), p(t) ? 0 : t);
  }
  get length() {
    try {
      let r = o.__wbindgen_add_to_stack_pointer(-16);
      o.__wbg_get_r2range_length(r, this.ptr);
      var t = a()[r / 4 + 0], n = a()[r / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      o.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set length(t) {
    o.__wbg_set_r2range_length(this.ptr, !p(t), p(t) ? 0 : t);
  }
  get suffix() {
    try {
      let r = o.__wbindgen_add_to_stack_pointer(-16);
      o.__wbg_get_r2range_suffix(r, this.ptr);
      var t = a()[r / 4 + 0], n = a()[r / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      o.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set suffix(t) {
    o.__wbg_set_r2range_suffix(this.ptr, !p(t), p(t) ? 0 : t);
  }
};
var F = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    o.__wbg_readablestreamgetreaderoptions_free(t);
  }
  get mode() {
    let t = o.readablestreamgetreaderoptions_mode(this.ptr);
    return d(t);
  }
};
function G() {
  return f(function() {
    let e = new Headers();
    return s(e);
  }, arguments);
}
function Q(e) {
  d(e);
}
function tt() {
  return f(function(e, t, n) {
    let r = new Response(e === 0 ? void 0 : w(e, t), _(n));
    return s(r);
  }, arguments);
}
function et(e) {
  let t = new Uint8Array(e >>> 0);
  return s(t);
}
function nt() {
  return f(function(e, t) {
    let n = new Response(_(e), _(t));
    return s(n);
  }, arguments);
}
function rt() {
  return f(function(e, t) {
    let n = new Response(_(e), _(t));
    return s(n);
  }, arguments);
}
function ot() {
  return f(function(e, t, n) {
    let r = _(e).call(_(t), _(n));
    return s(r);
  }, arguments);
}
function _t(e) {
  let t = d(e).original;
  return t.cnt-- == 1 ? (t.a = 0, true) : false;
}
function st(e, t) {
  let n = w(e, t);
  return s(n);
}
function ct() {
  return f(function(e, t, n, r, c) {
    _(e).set(w(t, n), w(r, c));
  }, arguments);
}
function it(e, t) {
  let n = _(t), r = typeof n == "string" ? n : void 0;
  var c = p(r) ? 0 : O(r, o.__wbindgen_export_0, o.__wbindgen_export_1), b = h;
  a()[e / 4 + 1] = b, a()[e / 4 + 0] = c;
}
function ut(e) {
  let t;
  try {
    t = _(e) instanceof Error;
  } catch {
    t = false;
  }
  return t;
}
function ft(e) {
  let t = _(e).toString();
  return s(t);
}
function at() {
  let e = new Object();
  return s(e);
}
function bt() {
  return f(function(e, t, n) {
    return Reflect.set(_(e), _(t), _(n));
  }, arguments);
}
function pt() {
  return f(function(e, t, n) {
    let r = new Request(w(e, t), _(n));
    return s(r);
  }, arguments);
}
function dt(e, t, n, r) {
  let c = _(e).fetch(w(t, n), _(r));
  return s(c);
}
function gt(e) {
  let t;
  try {
    t = _(e) instanceof Response;
  } catch {
    t = false;
  }
  return t;
}
function lt(e) {
  let t = _(e).headers;
  return s(t);
}
function wt(e) {
  return _(e).status;
}
function ht(e) {
  let t = _(e).websocket;
  return p(t) ? 0 : s(t);
}
function yt(e) {
  let t = _(e).body;
  return p(t) ? 0 : s(t);
}
function xt(e, t, n) {
  let r = _(e).fetch(_(t), _(n));
  return s(r);
}
function mt() {
  return f(function(e) {
    let t = new Headers(_(e));
    return s(t);
  }, arguments);
}
function jt() {
  return f(function(e) {
    let t = _(e).clone();
    return s(t);
  }, arguments);
}
function kt(e, t) {
  try {
    var n = { a: e, b: t }, r = (b, i) => {
      let u = n.a;
      n.a = 0;
      try {
        return X(u, n.b, b, i);
      } finally {
        n.a = u;
      }
    };
    let c = new Promise(r);
    return s(c);
  } finally {
    n.a = n.b = 0;
  }
}
function Et() {
  return f(function() {
    let e = self.self;
    return s(e);
  }, arguments);
}
function Ot() {
  return f(function() {
    let e = window.window;
    return s(e);
  }, arguments);
}
function Tt() {
  return f(function() {
    let e = globalThis.globalThis;
    return s(e);
  }, arguments);
}
function At() {
  return f(function() {
    let e = global.global;
    return s(e);
  }, arguments);
}
function Mt(e) {
  return _(e) === void 0;
}
function qt(e, t) {
  let n = new Function(w(e, t));
  return s(n);
}
function Lt() {
  return f(function(e, t) {
    let n = _(e).call(_(t));
    return s(n);
  }, arguments);
}
function Ct(e) {
  let t = _(e);
  return s(t);
}
function St(e) {
  return _(e).length;
}
function Rt() {
  let e = o.memory;
  return s(e);
}
function Ft(e) {
  let t = _(e).buffer;
  return s(t);
}
function $t(e, t, n) {
  let r = new Uint8Array(_(e), t >>> 0, n >>> 0);
  return s(r);
}
function Wt(e, t, n) {
  _(e).set(_(t), n >>> 0);
}
function vt(e, t) {
  let n = T(_(t)), r = O(n, o.__wbindgen_export_0, o.__wbindgen_export_1), c = h;
  a()[e / 4 + 1] = c, a()[e / 4 + 0] = r;
}
function Dt(e, t) {
  throw new Error(w(e, t));
}
function zt(e, t, n) {
  let r = _(e).then(_(t), _(n));
  return s(r);
}
function It(e) {
  let t = Promise.resolve(_(e));
  return s(t);
}
function Nt(e, t) {
  let n = _(e).then(_(t));
  return s(n);
}
function Ht(e) {
  let t = _(e).byobRequest;
  return p(t) ? 0 : s(t);
}
function Pt(e, t) {
  _(e).respond(t >>> 0);
}
function Ut() {
  let e = W();
  return s(e);
}
function Jt(e) {
  let t = _(e).view;
  return p(t) ? 0 : s(t);
}
function Vt(e) {
  return _(e).byteLength;
}
function Bt(e) {
  _(e).close();
}
function Kt(e, t) {
  let n = new Error(w(e, t));
  return s(n);
}
function Xt(e) {
  let t = _(e).buffer;
  return s(t);
}
function Yt(e) {
  return _(e).byteOffset;
}
function Zt(e) {
  _(e).close();
}
function Gt(e, t) {
  _(e).enqueue(_(t));
}
function Qt(e) {
  console.log(_(e));
}
function te(e, t) {
  let n = _(t).method, r = O(n, o.__wbindgen_export_0, o.__wbindgen_export_1), c = h;
  a()[e / 4 + 1] = c, a()[e / 4 + 0] = r;
}
function ee(e, t) {
  let n = _(t).url, r = O(n, o.__wbindgen_export_0, o.__wbindgen_export_1), c = h;
  a()[e / 4 + 1] = c, a()[e / 4 + 0] = r;
}
function ne(e) {
  let t = _(e).headers;
  return s(t);
}
function re(e) {
  let t = _(e).cf;
  return p(t) ? 0 : s(t);
}
function oe(e) {
  return s(e);
}
function _e(e, t, n) {
  let r = B(e, t, 46, K);
  return s(r);
}
var de = { fetch: $, scheduled: void 0, queue: void 0 };

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;

// .wrangler/tmp/bundle-yU3INt/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...de,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...de.middleware ? de.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// .wrangler/tmp/bundle-yU3INt/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  A as IntoUnderlyingByteSource,
  M as IntoUnderlyingSink,
  q as IntoUnderlyingSource,
  L as MinifyConfig,
  C as PipeOptions,
  Y as PolishConfig,
  S as QueuingStrategy,
  R as R2Range,
  F as ReadableStreamGetReaderOptions,
  Z as RequestRedirect,
  yt as __wbg_body_aeb10a3b63770556,
  Xt as __wbg_buffer_610b70c8fd30da2d,
  Ft as __wbg_buffer_cf65c07de34b9a08,
  Ht as __wbg_byobRequest_a3c74c3694777d1b,
  Vt as __wbg_byteLength_1fef7842ca4200fa,
  Yt as __wbg_byteOffset_ede786cfcf88d3dd,
  Ut as __wbg_bytesliteral_efe7d360639bf32b,
  ot as __wbg_call_9495de66fdbe016b,
  Lt as __wbg_call_95d1ea488d03e4e8,
  re as __wbg_cf_23036f27554431ca,
  jt as __wbg_clone_30c5866bbd00c3e5,
  Bt as __wbg_close_045ed342139beb7d,
  Zt as __wbg_close_a41954830b65c455,
  Gt as __wbg_enqueue_3a8a8e67e44d2567,
  dt as __wbg_fetch_9515ba424b6b4f02,
  xt as __wbg_fetch_e1b536877762e79a,
  Tt as __wbg_globalThis_87cbb8506fecf3a9,
  At as __wbg_global_c85a9259e621f3db,
  lt as __wbg_headers_6093927dc359903e,
  ne as __wbg_headers_ab5251d2727ac41e,
  ut as __wbg_instanceof_Error_749a7378f4439ee0,
  gt as __wbg_instanceof_Response_fb3a4df648c1859b,
  St as __wbg_length_27a2afe8ab42b09f,
  Qt as __wbg_log_7bb108d119bafbc1,
  te as __wbg_method_d1ee174c753ca2be,
  Kt as __wbg_new_15d3966e9981a196,
  kt as __wbg_new_9d3a9ce4282a18a8,
  G as __wbg_new_f1c3a9c2533a55b8,
  at as __wbg_new_f9876326328f45ed,
  qt as __wbg_newnoargs_2b8b6bd7753c76ba,
  $t as __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5,
  mt as __wbg_newwithheaders_1663eaa35210e3fd,
  et as __wbg_newwithlength_b56c882b57805732,
  nt as __wbg_newwithoptbuffersourceandinit_4d2fa6d435ff2a63,
  rt as __wbg_newwithoptreadablestreamandinit_a0b4dc209bd176be,
  tt as __wbg_newwithoptstrandinit_1a4621d99c54e7c3,
  pt as __wbg_newwithstrandinit_c45f0dc6da26fd03,
  It as __wbg_resolve_fd40f858d9db1a04,
  Pt as __wbg_respond_f4778bef04e912a6,
  Et as __wbg_self_e7c1f827057f6584,
  Wt as __wbg_set_17499e8aa4003ebd,
  bt as __wbg_set_6aa458a4ebdb65cb,
  ct as __wbg_set_a5d34c36a1a4ebd1,
  wt as __wbg_status_d483a4ac847f380a,
  Nt as __wbg_then_ec5db6d509eb475f,
  zt as __wbg_then_f753623316e2873a,
  ft as __wbg_toString_cec163b212643722,
  ee as __wbg_url_bd2775644ef804ec,
  Jt as __wbg_view_d1a31268af734e5d,
  ht as __wbg_websocket_1386775a214bacc3,
  Ot as __wbg_window_a09ec664e14b1b81,
  _t as __wbindgen_cb_drop,
  _e as __wbindgen_closure_wrapper786,
  vt as __wbindgen_debug_string,
  Mt as __wbindgen_is_undefined,
  Rt as __wbindgen_memory,
  oe as __wbindgen_number_new,
  Ct as __wbindgen_object_clone_ref,
  Q as __wbindgen_object_drop_ref,
  it as __wbindgen_string_get,
  st as __wbindgen_string_new,
  Dt as __wbindgen_throw,
  middleware_loader_entry_default as default,
  $ as fetch,
  H as getMemory,
  pe as wasmModule
};
//# sourceMappingURL=shim.js.map
