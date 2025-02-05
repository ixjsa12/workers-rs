// .wrangler/tmp/bundle-IcA4MJ/checked-fetch.js
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
import I from "./2ffabfbe88c97f3b36e8d75f13a1f7e19c269cd9-index.wasm";
import Xt from "./2ffabfbe88c97f3b36e8d75f13a1f7e19c269cd9-index.wasm";
var R = Object.defineProperty;
var z = (e, t) => {
  for (var r in t)
    R(e, r, { get: t[r], enumerable: true });
};
var d = {};
z(d, { IntoUnderlyingByteSource: () => M, IntoUnderlyingSink: () => T, IntoUnderlyingSource: () => q, MinifyConfig: () => L, PipeOptions: () => C, PolishConfig: () => Y, QueuingStrategy: () => S, R2Range: () => $, ReadableStreamGetReaderOptions: () => F, RequestRedirect: () => Z, __wbg_buffer_610b70c8fd30da2d: () => St, __wbg_buffer_cf65c07de34b9a08: () => wt, __wbg_byobRequest_a3c74c3694777d1b: () => Ot, __wbg_byteLength_1fef7842ca4200fa: () => qt, __wbg_byteOffset_ede786cfcf88d3dd: () => $t, __wbg_bytesliteral_efe7d360639bf32b: () => Mt, __wbg_call_9495de66fdbe016b: () => at, __wbg_cf_23036f27554431ca: () => et, __wbg_close_045ed342139beb7d: () => Lt, __wbg_close_a41954830b65c455: () => Ft, __wbg_enqueue_3a8a8e67e44d2567: () => Wt, __wbg_headers_ab5251d2727ac41e: () => tt, __wbg_instanceof_Error_749a7378f4439ee0: () => _t, __wbg_length_27a2afe8ab42b09f: () => gt, __wbg_log_7bb108d119bafbc1: () => Dt, __wbg_method_d1ee174c753ca2be: () => G, __wbg_new_15d3966e9981a196: () => Ct, __wbg_new_9d3a9ce4282a18a8: () => bt, __wbg_new_f1c3a9c2533a55b8: () => rt, __wbg_new_f9876326328f45ed: () => Rt, __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5: () => ht, __wbg_newwithlength_b56c882b57805732: () => ut, __wbg_newwithoptbuffersourceandinit_4d2fa6d435ff2a63: () => ft, __wbg_newwithoptreadablestreamandinit_a0b4dc209bd176be: () => pt, __wbg_newwithoptstrandinit_1a4621d99c54e7c3: () => ct, __wbg_resolve_fd40f858d9db1a04: () => jt, __wbg_respond_f4778bef04e912a6: () => At, __wbg_set_17499e8aa4003ebd: () => yt, __wbg_set_6aa458a4ebdb65cb: () => It, __wbg_set_a5d34c36a1a4ebd1: () => nt, __wbg_then_ec5db6d509eb475f: () => Et, __wbg_toString_cec163b212643722: () => st, __wbg_url_bd2775644ef804ec: () => Q, __wbg_view_d1a31268af734e5d: () => Tt, __wbindgen_cb_drop: () => kt, __wbindgen_closure_wrapper710: () => Nt, __wbindgen_debug_string: () => xt, __wbindgen_memory: () => lt, __wbindgen_number_new: () => zt, __wbindgen_object_clone_ref: () => vt, __wbindgen_object_drop_ref: () => it, __wbindgen_string_get: () => ot, __wbindgen_string_new: () => dt, __wbindgen_throw: () => mt, fetch: () => W, getMemory: () => H });
function v() {
  return "bytes";
}
var N = new WebAssembly.Instance(I, { "./index_bg.js": d });
var n = N.exports;
function H() {
  return n.memory;
}
var g = new Array(128).fill(void 0);
g.push(void 0, null, true, false);
function _(e) {
  return g[e];
}
var w = 0;
var m = null;
function k() {
  return (m === null || m.byteLength === 0) && (m = new Uint8Array(n.memory.buffer)), m;
}
var P = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var E = new P("utf-8");
var U = typeof E.encodeInto == "function" ? function(e, t) {
  return E.encodeInto(e, t);
} : function(e, t) {
  let r = E.encode(e);
  return t.set(r), { read: e.length, written: r.length };
};
function O(e, t, r) {
  if (r === void 0) {
    let u = E.encode(e), y = t(u.length);
    return k().subarray(y, y + u.length).set(u), w = u.length, y;
  }
  let o = e.length, s = t(o), p = k(), c = 0;
  for (; c < o; c++) {
    let u = e.charCodeAt(c);
    if (u > 127)
      break;
    p[s + c] = u;
  }
  if (c !== o) {
    c !== 0 && (e = e.slice(c)), s = r(s, o, o = c + e.length * 3);
    let u = k().subarray(s + c, s + o), y = U(e, u);
    c += y.written;
  }
  return w = c, s;
}
function b(e) {
  return e == null;
}
var j = null;
function f() {
  return (j === null || j.byteLength === 0) && (j = new Int32Array(n.memory.buffer)), j;
}
var x = g.length;
function J(e) {
  e < 132 || (g[e] = x, x = e);
}
function a(e) {
  let t = _(e);
  return J(e), t;
}
var V = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var D = new V("utf-8", { ignoreBOM: true, fatal: true });
D.decode();
function h(e, t) {
  return D.decode(k().subarray(e, e + t));
}
function i(e) {
  x === g.length && g.push(g.length + 1);
  let t = x;
  return x = g[t], g[t] = e, t;
}
function A(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null)
    return `${e}`;
  if (t == "string")
    return `"${e}"`;
  if (t == "symbol") {
    let s = e.description;
    return s == null ? "Symbol" : `Symbol(${s})`;
  }
  if (t == "function") {
    let s = e.name;
    return typeof s == "string" && s.length > 0 ? `Function(${s})` : "Function";
  }
  if (Array.isArray(e)) {
    let s = e.length, p = "[";
    s > 0 && (p += A(e[0]));
    for (let c = 1; c < s; c++)
      p += ", " + A(e[c]);
    return p += "]", p;
  }
  let r = /\[object ([^\]]+)\]/.exec(toString.call(e)), o;
  if (r.length > 1)
    o = r[1];
  else
    return toString.call(e);
  if (o == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : o;
}
function B(e, t, r, o) {
  let s = { a: e, b: t, cnt: 1, dtor: r }, p = (...c) => {
    s.cnt++;
    let u = s.a;
    s.a = 0;
    try {
      return o(u, s.b, ...c);
    } finally {
      --s.cnt === 0 ? n.__wbindgen_export_2.get(s.dtor)(u, s.b) : s.a = u;
    }
  };
  return p.original = s, p;
}
function K(e, t, r) {
  n.__wbindgen_export_3(e, t, i(r));
}
function W(e, t, r) {
  let o = n.fetch(i(e), i(t), i(r));
  return a(o);
}
function l(e, t) {
  try {
    return e.apply(this, t);
  } catch (r) {
    n.__wbindgen_export_4(i(r));
  }
}
function X(e, t, r, o) {
  n.__wbindgen_export_5(e, t, i(r), i(o));
}
var Y = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var Z = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var M = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_intounderlyingbytesource_free(t);
  }
  get type() {
    let t = n.intounderlyingbytesource_type(this.ptr);
    return a(t);
  }
  get autoAllocateChunkSize() {
    return n.intounderlyingbytesource_autoAllocateChunkSize(this.ptr) >>> 0;
  }
  start(t) {
    n.intounderlyingbytesource_start(this.ptr, i(t));
  }
  pull(t) {
    let r = n.intounderlyingbytesource_pull(this.ptr, i(t));
    return a(r);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    n.intounderlyingbytesource_cancel(t);
  }
};
var T = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_intounderlyingsink_free(t);
  }
  write(t) {
    let r = n.intounderlyingsink_write(this.ptr, i(t));
    return a(r);
  }
  close() {
    let t = this.__destroy_into_raw(), r = n.intounderlyingsink_close(t);
    return a(r);
  }
  abort(t) {
    let r = this.__destroy_into_raw(), o = n.intounderlyingsink_abort(r, i(t));
    return a(o);
  }
};
var q = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_intounderlyingsource_free(t);
  }
  pull(t) {
    let r = n.intounderlyingsource_pull(this.ptr, i(t));
    return a(r);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    n.intounderlyingsource_cancel(t);
  }
};
var L = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_minifyconfig_free(t);
  }
  get js() {
    return n.__wbg_get_minifyconfig_js(this.ptr) !== 0;
  }
  set js(t) {
    n.__wbg_set_minifyconfig_js(this.ptr, t);
  }
  get html() {
    return n.__wbg_get_minifyconfig_html(this.ptr) !== 0;
  }
  set html(t) {
    n.__wbg_set_minifyconfig_html(this.ptr, t);
  }
  get css() {
    return n.__wbg_get_minifyconfig_css(this.ptr) !== 0;
  }
  set css(t) {
    n.__wbg_set_minifyconfig_css(this.ptr, t);
  }
};
var C = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_pipeoptions_free(t);
  }
  get preventClose() {
    return n.pipeoptions_preventClose(this.ptr) !== 0;
  }
  get preventCancel() {
    return n.pipeoptions_preventCancel(this.ptr) !== 0;
  }
  get preventAbort() {
    return n.pipeoptions_preventAbort(this.ptr) !== 0;
  }
  get signal() {
    let t = n.pipeoptions_signal(this.ptr);
    return a(t);
  }
};
var S = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_queuingstrategy_free(t);
  }
  get highWaterMark() {
    return n.queuingstrategy_highWaterMark(this.ptr);
  }
};
var $ = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_r2range_free(t);
  }
  get offset() {
    try {
      let o = n.__wbindgen_add_to_stack_pointer(-16);
      n.__wbg_get_r2range_offset(o, this.ptr);
      var t = f()[o / 4 + 0], r = f()[o / 4 + 1];
      return t === 0 ? void 0 : r >>> 0;
    } finally {
      n.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set offset(t) {
    n.__wbg_set_r2range_offset(this.ptr, !b(t), b(t) ? 0 : t);
  }
  get length() {
    try {
      let o = n.__wbindgen_add_to_stack_pointer(-16);
      n.__wbg_get_r2range_length(o, this.ptr);
      var t = f()[o / 4 + 0], r = f()[o / 4 + 1];
      return t === 0 ? void 0 : r >>> 0;
    } finally {
      n.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set length(t) {
    n.__wbg_set_r2range_length(this.ptr, !b(t), b(t) ? 0 : t);
  }
  get suffix() {
    try {
      let o = n.__wbindgen_add_to_stack_pointer(-16);
      n.__wbg_get_r2range_suffix(o, this.ptr);
      var t = f()[o / 4 + 0], r = f()[o / 4 + 1];
      return t === 0 ? void 0 : r >>> 0;
    } finally {
      n.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set suffix(t) {
    n.__wbg_set_r2range_suffix(this.ptr, !b(t), b(t) ? 0 : t);
  }
};
var F = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    n.__wbg_readablestreamgetreaderoptions_free(t);
  }
  get mode() {
    let t = n.readablestreamgetreaderoptions_mode(this.ptr);
    return a(t);
  }
};
function G(e, t) {
  let r = _(t).method, o = O(r, n.__wbindgen_export_0, n.__wbindgen_export_1), s = w;
  f()[e / 4 + 1] = s, f()[e / 4 + 0] = o;
}
function Q(e, t) {
  let r = _(t).url, o = O(r, n.__wbindgen_export_0, n.__wbindgen_export_1), s = w;
  f()[e / 4 + 1] = s, f()[e / 4 + 0] = o;
}
function tt(e) {
  let t = _(e).headers;
  return i(t);
}
function et(e) {
  let t = _(e).cf;
  return b(t) ? 0 : i(t);
}
function rt() {
  return l(function() {
    let e = new Headers();
    return i(e);
  }, arguments);
}
function nt() {
  return l(function(e, t, r, o, s) {
    _(e).set(h(t, r), h(o, s));
  }, arguments);
}
function ot(e, t) {
  let r = _(t), o = typeof r == "string" ? r : void 0;
  var s = b(o) ? 0 : O(o, n.__wbindgen_export_0, n.__wbindgen_export_1), p = w;
  f()[e / 4 + 1] = p, f()[e / 4 + 0] = s;
}
function _t(e) {
  let t;
  try {
    t = _(e) instanceof Error;
  } catch {
    t = false;
  }
  return t;
}
function st(e) {
  let t = _(e).toString();
  return i(t);
}
function it(e) {
  a(e);
}
function ct() {
  return l(function(e, t, r) {
    let o = new Response(e === 0 ? void 0 : h(e, t), _(r));
    return i(o);
  }, arguments);
}
function ut(e) {
  let t = new Uint8Array(e >>> 0);
  return i(t);
}
function ft() {
  return l(function(e, t) {
    let r = new Response(_(e), _(t));
    return i(r);
  }, arguments);
}
function pt() {
  return l(function(e, t) {
    let r = new Response(_(e), _(t));
    return i(r);
  }, arguments);
}
function at() {
  return l(function(e, t, r) {
    let o = _(e).call(_(t), _(r));
    return i(o);
  }, arguments);
}
function dt(e, t) {
  let r = h(e, t);
  return i(r);
}
function bt(e, t) {
  try {
    var r = { a: e, b: t }, o = (p, c) => {
      let u = r.a;
      r.a = 0;
      try {
        return X(u, r.b, p, c);
      } finally {
        r.a = u;
      }
    };
    let s = new Promise(o);
    return i(s);
  } finally {
    r.a = r.b = 0;
  }
}
function gt(e) {
  return _(e).length;
}
function lt() {
  let e = n.memory;
  return i(e);
}
function wt(e) {
  let t = _(e).buffer;
  return i(t);
}
function ht(e, t, r) {
  let o = new Uint8Array(_(e), t >>> 0, r >>> 0);
  return i(o);
}
function yt(e, t, r) {
  _(e).set(_(t), r >>> 0);
}
function xt(e, t) {
  let r = A(_(t)), o = O(r, n.__wbindgen_export_0, n.__wbindgen_export_1), s = w;
  f()[e / 4 + 1] = s, f()[e / 4 + 0] = o;
}
function mt(e, t) {
  throw new Error(h(e, t));
}
function jt(e) {
  let t = Promise.resolve(_(e));
  return i(t);
}
function kt(e) {
  let t = a(e).original;
  return t.cnt-- == 1 ? (t.a = 0, true) : false;
}
function Et(e, t) {
  let r = _(e).then(_(t));
  return i(r);
}
function Ot(e) {
  let t = _(e).byobRequest;
  return b(t) ? 0 : i(t);
}
function At(e, t) {
  _(e).respond(t >>> 0);
}
function Mt() {
  let e = v();
  return i(e);
}
function Tt(e) {
  let t = _(e).view;
  return b(t) ? 0 : i(t);
}
function qt(e) {
  return _(e).byteLength;
}
function Lt(e) {
  _(e).close();
}
function Ct(e, t) {
  let r = new Error(h(e, t));
  return i(r);
}
function St(e) {
  let t = _(e).buffer;
  return i(t);
}
function $t(e) {
  return _(e).byteOffset;
}
function Ft(e) {
  _(e).close();
}
function Wt(e, t) {
  _(e).enqueue(_(t));
}
function vt(e) {
  let t = _(e);
  return i(t);
}
function Dt(e) {
  console.log(_(e));
}
function Rt() {
  let e = new Object();
  return i(e);
}
function zt(e) {
  return i(e);
}
function It() {
  return l(function(e, t, r) {
    return Reflect.set(_(e), _(t), _(r));
  }, arguments);
}
function Nt(e, t, r) {
  let o = B(e, t, 36, K);
  return i(o);
}
var Yt = { fetch: W, scheduled: void 0, queue: void 0 };

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

// .wrangler/tmp/bundle-IcA4MJ/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...Yt,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...Yt.middleware ? Yt.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// .wrangler/tmp/bundle-IcA4MJ/middleware-loader.entry.ts
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
  M as IntoUnderlyingByteSource,
  T as IntoUnderlyingSink,
  q as IntoUnderlyingSource,
  L as MinifyConfig,
  C as PipeOptions,
  Y as PolishConfig,
  S as QueuingStrategy,
  $ as R2Range,
  F as ReadableStreamGetReaderOptions,
  Z as RequestRedirect,
  St as __wbg_buffer_610b70c8fd30da2d,
  wt as __wbg_buffer_cf65c07de34b9a08,
  Ot as __wbg_byobRequest_a3c74c3694777d1b,
  qt as __wbg_byteLength_1fef7842ca4200fa,
  $t as __wbg_byteOffset_ede786cfcf88d3dd,
  Mt as __wbg_bytesliteral_efe7d360639bf32b,
  at as __wbg_call_9495de66fdbe016b,
  et as __wbg_cf_23036f27554431ca,
  Lt as __wbg_close_045ed342139beb7d,
  Ft as __wbg_close_a41954830b65c455,
  Wt as __wbg_enqueue_3a8a8e67e44d2567,
  tt as __wbg_headers_ab5251d2727ac41e,
  _t as __wbg_instanceof_Error_749a7378f4439ee0,
  gt as __wbg_length_27a2afe8ab42b09f,
  Dt as __wbg_log_7bb108d119bafbc1,
  G as __wbg_method_d1ee174c753ca2be,
  Ct as __wbg_new_15d3966e9981a196,
  bt as __wbg_new_9d3a9ce4282a18a8,
  rt as __wbg_new_f1c3a9c2533a55b8,
  Rt as __wbg_new_f9876326328f45ed,
  ht as __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5,
  ut as __wbg_newwithlength_b56c882b57805732,
  ft as __wbg_newwithoptbuffersourceandinit_4d2fa6d435ff2a63,
  pt as __wbg_newwithoptreadablestreamandinit_a0b4dc209bd176be,
  ct as __wbg_newwithoptstrandinit_1a4621d99c54e7c3,
  jt as __wbg_resolve_fd40f858d9db1a04,
  At as __wbg_respond_f4778bef04e912a6,
  yt as __wbg_set_17499e8aa4003ebd,
  It as __wbg_set_6aa458a4ebdb65cb,
  nt as __wbg_set_a5d34c36a1a4ebd1,
  Et as __wbg_then_ec5db6d509eb475f,
  st as __wbg_toString_cec163b212643722,
  Q as __wbg_url_bd2775644ef804ec,
  Tt as __wbg_view_d1a31268af734e5d,
  kt as __wbindgen_cb_drop,
  Nt as __wbindgen_closure_wrapper710,
  xt as __wbindgen_debug_string,
  lt as __wbindgen_memory,
  zt as __wbindgen_number_new,
  vt as __wbindgen_object_clone_ref,
  it as __wbindgen_object_drop_ref,
  ot as __wbindgen_string_get,
  dt as __wbindgen_string_new,
  mt as __wbindgen_throw,
  middleware_loader_entry_default as default,
  W as fetch,
  H as getMemory,
  Xt as wasmModule
};
//# sourceMappingURL=shim.js.map
