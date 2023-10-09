(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
function Cn(e, t) {
  const n = Object.create(null),
    s = e.split(",");
  for (let r = 0; r < s.length; r++) n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const K = {},
  Je = [],
  fe = () => {},
  br = () => !1,
  xr = /^on[^a-z]/,
  Ut = (e) => xr.test(e),
  En = (e) => e.startsWith("onUpdate:"),
  Y = Object.assign,
  wn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  yr = Object.prototype.hasOwnProperty,
  S = (e, t) => yr.call(e, t),
  P = Array.isArray,
  Xe = (e) => Kt(e) === "[object Map]",
  Os = (e) => Kt(e) === "[object Set]",
  R = (e) => typeof e == "function",
  X = (e) => typeof e == "string",
  On = (e) => typeof e == "symbol",
  W = (e) => e !== null && typeof e == "object",
  Ts = (e) => W(e) && R(e.then) && R(e.catch),
  Ps = Object.prototype.toString,
  Kt = (e) => Ps.call(e),
  vr = (e) => Kt(e).slice(8, -1),
  Is = (e) => Kt(e) === "[object Object]",
  Tn = (e) => X(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Mt = Cn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Dt = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Cr = /-(\w)/g,
  Ze = Dt((e) => e.replace(Cr, (t, n) => (n ? n.toUpperCase() : ""))),
  Er = /\B([A-Z])/g,
  et = Dt((e) => e.replace(Er, "-$1").toLowerCase()),
  As = Dt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  tn = Dt((e) => (e ? `on${As(e)}` : "")),
  at = (e, t) => !Object.is(e, t),
  nn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  St = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  wr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let kn;
const un = () =>
  kn ||
  (kn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Wt(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = X(s) ? Ir(s) : Wt(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else {
    if (X(e)) return e;
    if (W(e)) return e;
  }
}
const Or = /;(?![^(]*\))/g,
  Tr = /:([^]+)/,
  Pr = /\/\*[^]*?\*\//g;
function Ir(e) {
  const t = {};
  return (
    e
      .replace(Pr, "")
      .split(Or)
      .forEach((n) => {
        if (n) {
          const s = n.split(Tr);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Pn(e) {
  let t = "";
  if (X(e)) t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const s = Pn(e[n]);
      s && (t += s + " ");
    }
  else if (W(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Ar =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Mr = Cn(Ar);
function Ms(e) {
  return !!e || e === "";
}
const Re = (e) =>
    X(e)
      ? e
      : e == null
      ? ""
      : P(e) || (W(e) && (e.toString === Ps || !R(e.toString)))
      ? JSON.stringify(e, Fs, 2)
      : String(e),
  Fs = (e, t) =>
    t && t.__v_isRef
      ? Fs(e, t.value)
      : Xe(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {}
          ),
        }
      : Os(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : W(t) && !P(t) && !Is(t)
      ? String(t)
      : t;
let oe;
class Fr {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = oe),
      !t && oe && (this.index = (oe.scopes || (oe.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = oe;
      try {
        return (oe = this), t();
      } finally {
        oe = n;
      }
    }
  }
  on() {
    oe = this;
  }
  off() {
    oe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Rr(e, t = oe) {
  t && t.active && t.effects.push(e);
}
function Nr() {
  return oe;
}
const In = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Rs = (e) => (e.w & Pe) > 0,
  Ns = (e) => (e.n & Pe) > 0,
  jr = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Pe;
  },
  Sr = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        Rs(r) && !Ns(r) ? r.delete(e) : (t[n++] = r),
          (r.w &= ~Pe),
          (r.n &= ~Pe);
      }
      t.length = n;
    }
  },
  an = new WeakMap();
let lt = 0,
  Pe = 1;
const dn = 30;
let le;
const Le = Symbol(""),
  hn = Symbol("");
class An {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Rr(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = le,
      n = Oe;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = le),
        (le = this),
        (Oe = !0),
        (Pe = 1 << ++lt),
        lt <= dn ? jr(this) : Zn(this),
        this.fn()
      );
    } finally {
      lt <= dn && Sr(this),
        (Pe = 1 << --lt),
        (le = this.parent),
        (Oe = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    le === this
      ? (this.deferStop = !0)
      : this.active &&
        (Zn(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Zn(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Oe = !0;
const js = [];
function tt() {
  js.push(Oe), (Oe = !1);
}
function nt() {
  const e = js.pop();
  Oe = e === void 0 ? !0 : e;
}
function ne(e, t, n) {
  if (Oe && le) {
    let s = an.get(e);
    s || an.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = In())), Ss(r);
  }
}
function Ss(e, t) {
  let n = !1;
  lt <= dn ? Ns(e) || ((e.n |= Pe), (n = !Rs(e))) : (n = !e.has(le)),
    n && (e.add(le), le.deps.push(e));
}
function ye(e, t, n, s, r, o) {
  const i = an.get(e);
  if (!i) return;
  let c = [];
  if (t === "clear") c = [...i.values()];
  else if (n === "length" && P(e)) {
    const u = Number(s);
    i.forEach((a, m) => {
      (m === "length" || m >= u) && c.push(a);
    });
  } else
    switch ((n !== void 0 && c.push(i.get(n)), t)) {
      case "add":
        P(e)
          ? Tn(n) && c.push(i.get("length"))
          : (c.push(i.get(Le)), Xe(e) && c.push(i.get(hn)));
        break;
      case "delete":
        P(e) || (c.push(i.get(Le)), Xe(e) && c.push(i.get(hn)));
        break;
      case "set":
        Xe(e) && c.push(i.get(Le));
        break;
    }
  if (c.length === 1) c[0] && pn(c[0]);
  else {
    const u = [];
    for (const a of c) a && u.push(...a);
    pn(In(u));
  }
}
function pn(e, t) {
  const n = P(e) ? e : [...e];
  for (const s of n) s.computed && Qn(s);
  for (const s of n) s.computed || Qn(s);
}
function Qn(e, t) {
  (e !== le || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Hr = Cn("__proto__,__v_isRef,__isVue"),
  Hs = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(On)
  ),
  Lr = Mn(),
  $r = Mn(!1, !0),
  Br = Mn(!0),
  Vn = Ur();
function Ur() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = L(this);
        for (let o = 0, i = this.length; o < i; o++) ne(s, "get", o + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(L)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        tt();
        const s = L(this)[t].apply(this, n);
        return nt(), s;
      };
    }),
    e
  );
}
function Kr(e) {
  const t = L(this);
  return ne(t, "has", e), t.hasOwnProperty(e);
}
function Mn(e = !1, t = !1) {
  return function (s, r, o) {
    if (r === "__v_isReactive") return !e;
    if (r === "__v_isReadonly") return e;
    if (r === "__v_isShallow") return t;
    if (r === "__v_raw" && o === (e ? (t ? so : Ks) : t ? Us : Bs).get(s))
      return s;
    const i = P(s);
    if (!e) {
      if (i && S(Vn, r)) return Reflect.get(Vn, r, o);
      if (r === "hasOwnProperty") return Kr;
    }
    const c = Reflect.get(s, r, o);
    return (On(r) ? Hs.has(r) : Hr(r)) || (e || ne(s, "get", r), t)
      ? c
      : V(c)
      ? i && Tn(r)
        ? c
        : c.value
      : W(c)
      ? e
        ? Ds(c)
        : Nn(c)
      : c;
  };
}
const Dr = Ls(),
  Wr = Ls(!0);
function Ls(e = !1) {
  return function (n, s, r, o) {
    let i = n[s];
    if (Qe(i) && V(i) && !V(r)) return !1;
    if (
      !e &&
      (!Ht(r) && !Qe(r) && ((i = L(i)), (r = L(r))), !P(n) && V(i) && !V(r))
    )
      return (i.value = r), !0;
    const c = P(n) && Tn(s) ? Number(s) < n.length : S(n, s),
      u = Reflect.set(n, s, r, o);
    return (
      n === L(o) && (c ? at(r, i) && ye(n, "set", s, r) : ye(n, "add", s, r)), u
    );
  };
}
function zr(e, t) {
  const n = S(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && ye(e, "delete", t, void 0), s;
}
function qr(e, t) {
  const n = Reflect.has(e, t);
  return (!On(t) || !Hs.has(t)) && ne(e, "has", t), n;
}
function Jr(e) {
  return ne(e, "iterate", P(e) ? "length" : Le), Reflect.ownKeys(e);
}
const $s = { get: Lr, set: Dr, deleteProperty: zr, has: qr, ownKeys: Jr },
  Xr = {
    get: Br,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Yr = Y({}, $s, { get: $r, set: Wr }),
  Fn = (e) => e,
  zt = (e) => Reflect.getPrototypeOf(e);
function Et(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = L(e),
    o = L(t);
  n || (t !== o && ne(r, "get", t), ne(r, "get", o));
  const { has: i } = zt(r),
    c = s ? Fn : n ? Sn : dt;
  if (i.call(r, t)) return c(e.get(t));
  if (i.call(r, o)) return c(e.get(o));
  e !== r && e.get(t);
}
function wt(e, t = !1) {
  const n = this.__v_raw,
    s = L(n),
    r = L(e);
  return (
    t || (e !== r && ne(s, "has", e), ne(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function Ot(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ne(L(e), "iterate", Le), Reflect.get(e, "size", e)
  );
}
function Gn(e) {
  e = L(e);
  const t = L(this);
  return zt(t).has.call(t, e) || (t.add(e), ye(t, "add", e, e)), this;
}
function es(e, t) {
  t = L(t);
  const n = L(this),
    { has: s, get: r } = zt(n);
  let o = s.call(n, e);
  o || ((e = L(e)), (o = s.call(n, e)));
  const i = r.call(n, e);
  return (
    n.set(e, t), o ? at(t, i) && ye(n, "set", e, t) : ye(n, "add", e, t), this
  );
}
function ts(e) {
  const t = L(this),
    { has: n, get: s } = zt(t);
  let r = n.call(t, e);
  r || ((e = L(e)), (r = n.call(t, e))), s && s.call(t, e);
  const o = t.delete(e);
  return r && ye(t, "delete", e, void 0), o;
}
function ns() {
  const e = L(this),
    t = e.size !== 0,
    n = e.clear();
  return t && ye(e, "clear", void 0, void 0), n;
}
function Tt(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      c = L(i),
      u = t ? Fn : e ? Sn : dt;
    return (
      !e && ne(c, "iterate", Le), i.forEach((a, m) => s.call(r, u(a), u(m), o))
    );
  };
}
function Pt(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = L(r),
      i = Xe(o),
      c = e === "entries" || (e === Symbol.iterator && i),
      u = e === "keys" && i,
      a = r[e](...s),
      m = n ? Fn : t ? Sn : dt;
    return (
      !t && ne(o, "iterate", u ? hn : Le),
      {
        next() {
          const { value: y, done: E } = a.next();
          return E
            ? { value: y, done: E }
            : { value: c ? [m(y[0]), m(y[1])] : m(y), done: E };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ee(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function kr() {
  const e = {
      get(o) {
        return Et(this, o);
      },
      get size() {
        return Ot(this);
      },
      has: wt,
      add: Gn,
      set: es,
      delete: ts,
      clear: ns,
      forEach: Tt(!1, !1),
    },
    t = {
      get(o) {
        return Et(this, o, !1, !0);
      },
      get size() {
        return Ot(this);
      },
      has: wt,
      add: Gn,
      set: es,
      delete: ts,
      clear: ns,
      forEach: Tt(!1, !0),
    },
    n = {
      get(o) {
        return Et(this, o, !0);
      },
      get size() {
        return Ot(this, !0);
      },
      has(o) {
        return wt.call(this, o, !0);
      },
      add: Ee("add"),
      set: Ee("set"),
      delete: Ee("delete"),
      clear: Ee("clear"),
      forEach: Tt(!0, !1),
    },
    s = {
      get(o) {
        return Et(this, o, !0, !0);
      },
      get size() {
        return Ot(this, !0);
      },
      has(o) {
        return wt.call(this, o, !0);
      },
      add: Ee("add"),
      set: Ee("set"),
      delete: Ee("delete"),
      clear: Ee("clear"),
      forEach: Tt(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Pt(o, !1, !1)),
        (n[o] = Pt(o, !0, !1)),
        (t[o] = Pt(o, !1, !0)),
        (s[o] = Pt(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [Zr, Qr, Vr, Gr] = kr();
function Rn(e, t) {
  const n = t ? (e ? Gr : Vr) : e ? Qr : Zr;
  return (s, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(S(n, r) && r in s ? n : s, r, o);
}
const eo = { get: Rn(!1, !1) },
  to = { get: Rn(!1, !0) },
  no = { get: Rn(!0, !1) },
  Bs = new WeakMap(),
  Us = new WeakMap(),
  Ks = new WeakMap(),
  so = new WeakMap();
function ro(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function oo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ro(vr(e));
}
function Nn(e) {
  return Qe(e) ? e : jn(e, !1, $s, eo, Bs);
}
function io(e) {
  return jn(e, !1, Yr, to, Us);
}
function Ds(e) {
  return jn(e, !0, Xr, no, Ks);
}
function jn(e, t, n, s, r) {
  if (!W(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = oo(e);
  if (i === 0) return e;
  const c = new Proxy(e, i === 2 ? s : n);
  return r.set(e, c), c;
}
function Ye(e) {
  return Qe(e) ? Ye(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Qe(e) {
  return !!(e && e.__v_isReadonly);
}
function Ht(e) {
  return !!(e && e.__v_isShallow);
}
function Ws(e) {
  return Ye(e) || Qe(e);
}
function L(e) {
  const t = e && e.__v_raw;
  return t ? L(t) : e;
}
function zs(e) {
  return St(e, "__v_skip", !0), e;
}
const dt = (e) => (W(e) ? Nn(e) : e),
  Sn = (e) => (W(e) ? Ds(e) : e);
function qs(e) {
  Oe && le && ((e = L(e)), Ss(e.dep || (e.dep = In())));
}
function Js(e, t) {
  e = L(e);
  const n = e.dep;
  n && pn(n);
}
function V(e) {
  return !!(e && e.__v_isRef === !0);
}
function It(e) {
  return lo(e, !1);
}
function lo(e, t) {
  return V(e) ? e : new co(e, t);
}
class co {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : L(t)),
      (this._value = n ? t : dt(t));
  }
  get value() {
    return qs(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ht(t) || Qe(t);
    (t = n ? t : L(t)),
      at(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : dt(t)), Js(this));
  }
}
function Xs(e) {
  return V(e) ? e.value : e;
}
const fo = {
  get: (e, t, n) => Xs(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return V(r) && !V(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Ys(e) {
  return Ye(e) ? e : new Proxy(e, fo);
}
class uo {
  constructor(t, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new An(t, () => {
        this._dirty || ((this._dirty = !0), Js(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = L(this);
    return (
      qs(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function ao(e, t, n = !1) {
  let s, r;
  const o = R(e);
  return (
    o ? ((s = e), (r = fe)) : ((s = e.get), (r = e.set)),
    new uo(s, r, o || !r, n)
  );
}
function Te(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    qt(o, t, n);
  }
  return r;
}
function ue(e, t, n, s) {
  if (R(e)) {
    const o = Te(e, t, n, s);
    return (
      o &&
        Ts(o) &&
        o.catch((i) => {
          qt(i, t, n);
        }),
      o
    );
  }
  const r = [];
  for (let o = 0; o < e.length; o++) r.push(ue(e[o], t, n, s));
  return r;
}
function qt(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      c = n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let m = 0; m < a.length; m++) if (a[m](e, i, c) === !1) return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Te(u, null, 10, [e, i, c]);
      return;
    }
  }
  ho(e, n, r, s);
}
function ho(e, t, n, s = !0) {
  console.error(e);
}
let ht = !1,
  gn = !1;
const Z = [];
let ge = 0;
const ke = [];
let xe = null,
  Se = 0;
const ks = Promise.resolve();
let Hn = null;
function po(e) {
  const t = Hn || ks;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function go(e) {
  let t = ge + 1,
    n = Z.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1;
    pt(Z[s]) < e ? (t = s + 1) : (n = s);
  }
  return t;
}
function Ln(e) {
  (!Z.length || !Z.includes(e, ht && e.allowRecurse ? ge + 1 : ge)) &&
    (e.id == null ? Z.push(e) : Z.splice(go(e.id), 0, e), Zs());
}
function Zs() {
  !ht && !gn && ((gn = !0), (Hn = ks.then(Vs)));
}
function mo(e) {
  const t = Z.indexOf(e);
  t > ge && Z.splice(t, 1);
}
function _o(e) {
  P(e)
    ? ke.push(...e)
    : (!xe || !xe.includes(e, e.allowRecurse ? Se + 1 : Se)) && ke.push(e),
    Zs();
}
function ss(e, t = ht ? ge + 1 : 0) {
  for (; t < Z.length; t++) {
    const n = Z[t];
    n && n.pre && (Z.splice(t, 1), t--, n());
  }
}
function Qs(e) {
  if (ke.length) {
    const t = [...new Set(ke)];
    if (((ke.length = 0), xe)) {
      xe.push(...t);
      return;
    }
    for (xe = t, xe.sort((n, s) => pt(n) - pt(s)), Se = 0; Se < xe.length; Se++)
      xe[Se]();
    (xe = null), (Se = 0);
  }
}
const pt = (e) => (e.id == null ? 1 / 0 : e.id),
  bo = (e, t) => {
    const n = pt(e) - pt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Vs(e) {
  (gn = !1), (ht = !0), Z.sort(bo);
  const t = fe;
  try {
    for (ge = 0; ge < Z.length; ge++) {
      const n = Z[ge];
      n && n.active !== !1 && Te(n, null, 14);
    }
  } finally {
    (ge = 0),
      (Z.length = 0),
      Qs(),
      (ht = !1),
      (Hn = null),
      (Z.length || ke.length) && Vs();
  }
}
function xo(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || K;
  let r = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in s) {
    const m = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: y, trim: E } = s[m] || K;
    E && (r = n.map((A) => (X(A) ? A.trim() : A))), y && (r = n.map(wr));
  }
  let c,
    u = s[(c = tn(t))] || s[(c = tn(Ze(t)))];
  !u && o && (u = s[(c = tn(et(t)))]), u && ue(u, e, 6, r);
  const a = s[c + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    (e.emitted[c] = !0), ue(a, e, 6, r);
  }
}
function Gs(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    c = !1;
  if (!R(e)) {
    const u = (a) => {
      const m = Gs(a, t, !0);
      m && ((c = !0), Y(i, m));
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  return !o && !c
    ? (W(e) && s.set(e, null), null)
    : (P(o) ? o.forEach((u) => (i[u] = null)) : Y(i, o),
      W(e) && s.set(e, i),
      i);
}
function Jt(e, t) {
  return !e || !Ut(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      S(e, t[0].toLowerCase() + t.slice(1)) || S(e, et(t)) || S(e, t));
}
let me = null,
  Xt = null;
function Lt(e) {
  const t = me;
  return (me = e), (Xt = (e && e.type.__scopeId) || null), t;
}
function yo(e) {
  Xt = e;
}
function vo() {
  Xt = null;
}
function Co(e, t = me, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && ps(-1);
    const o = Lt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Lt(o), s._d && ps(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function sn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: c,
    attrs: u,
    emit: a,
    render: m,
    renderCache: y,
    data: E,
    setupState: A,
    ctx: F,
    inheritAttrs: M,
  } = e;
  let H, D;
  const q = Lt(e);
  try {
    if (n.shapeFlag & 4) {
      const N = r || s;
      (H = pe(m.call(N, N, y, o, A, E, F))), (D = u);
    } else {
      const N = t;
      (H = pe(
        N.length > 1 ? N(o, { attrs: u, slots: c, emit: a }) : N(o, null)
      )),
        (D = t.props ? u : Eo(u));
    }
  } catch (N) {
    (ut.length = 0), qt(N, e, 1), (H = $e(gt));
  }
  let k = H;
  if (D && M !== !1) {
    const N = Object.keys(D),
      { shapeFlag: Ce } = k;
    N.length && Ce & 7 && (i && N.some(En) && (D = wo(D, i)), (k = Ve(k, D)));
  }
  return (
    n.dirs && ((k = Ve(k)), (k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (k.transition = n.transition),
    (H = k),
    Lt(q),
    H
  );
}
const Eo = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Ut(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  wo = (e, t) => {
    const n = {};
    for (const s in e) (!En(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Oo(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: c, patchFlag: u } = t,
    a = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return s ? rs(s, i, a) : !!i;
    if (u & 8) {
      const m = t.dynamicProps;
      for (let y = 0; y < m.length; y++) {
        const E = m[y];
        if (i[E] !== s[E] && !Jt(a, E)) return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? rs(s, i, a)
        : !0
      : !!i;
  return !1;
}
function rs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Jt(n, o)) return !0;
  }
  return !1;
}
function To({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Po = (e) => e.__isSuspense;
function Io(e, t) {
  t && t.pendingBranch
    ? P(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : _o(e);
}
const At = {};
function rn(e, t, n) {
  return er(e, t, n);
}
function er(
  e,
  t,
  { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = K
) {
  var c;
  const u = Nr() === ((c = Q) == null ? void 0 : c.scope) ? Q : null;
  let a,
    m = !1,
    y = !1;
  if (
    (V(e)
      ? ((a = () => e.value), (m = Ht(e)))
      : Ye(e)
      ? ((a = () => e), (s = !0))
      : P(e)
      ? ((y = !0),
        (m = e.some((N) => Ye(N) || Ht(N))),
        (a = () =>
          e.map((N) => {
            if (V(N)) return N.value;
            if (Ye(N)) return qe(N);
            if (R(N)) return Te(N, u, 2);
          })))
      : R(e)
      ? t
        ? (a = () => Te(e, u, 2))
        : (a = () => {
            if (!(u && u.isUnmounted)) return E && E(), ue(e, u, 3, [A]);
          })
      : (a = fe),
    t && s)
  ) {
    const N = a;
    a = () => qe(N());
  }
  let E,
    A = (N) => {
      E = q.onStop = () => {
        Te(N, u, 4);
      };
    },
    F;
  if (_t)
    if (
      ((A = fe),
      t ? n && ue(t, u, 3, [a(), y ? [] : void 0, A]) : a(),
      r === "sync")
    ) {
      const N = Ei();
      F = N.__watcherHandles || (N.__watcherHandles = []);
    } else return fe;
  let M = y ? new Array(e.length).fill(At) : At;
  const H = () => {
    if (q.active)
      if (t) {
        const N = q.run();
        (s || m || (y ? N.some((Ce, st) => at(Ce, M[st])) : at(N, M))) &&
          (E && E(),
          ue(t, u, 3, [N, M === At ? void 0 : y && M[0] === At ? [] : M, A]),
          (M = N));
      } else q.run();
  };
  H.allowRecurse = !!t;
  let D;
  r === "sync"
    ? (D = H)
    : r === "post"
    ? (D = () => te(H, u && u.suspense))
    : ((H.pre = !0), u && (H.id = u.uid), (D = () => Ln(H)));
  const q = new An(a, D);
  t
    ? n
      ? H()
      : (M = q.run())
    : r === "post"
    ? te(q.run.bind(q), u && u.suspense)
    : q.run();
  const k = () => {
    q.stop(), u && u.scope && wn(u.scope.effects, q);
  };
  return F && F.push(k), k;
}
function Ao(e, t, n) {
  const s = this.proxy,
    r = X(e) ? (e.includes(".") ? tr(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  R(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = Q;
  Ge(this);
  const c = er(r, o.bind(s), n);
  return i ? Ge(i) : Be(), c;
}
function tr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function qe(e, t) {
  if (!W(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), V(e))) qe(e.value, t);
  else if (P(e)) for (let n = 0; n < e.length; n++) qe(e[n], t);
  else if (Os(e) || Xe(e))
    e.forEach((n) => {
      qe(n, t);
    });
  else if (Is(e)) for (const n in e) qe(e[n], t);
  return e;
}
function Ne(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let u = c.dir[s];
    u && (tt(), ue(u, n, 8, [e.el, c, e, t]), nt());
  }
}
const Ft = (e) => !!e.type.__asyncLoader,
  nr = (e) => e.type.__isKeepAlive;
function Mo(e, t) {
  sr(e, "a", t);
}
function Fo(e, t) {
  sr(e, "da", t);
}
function sr(e, t, n = Q) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Yt(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      nr(r.parent.vnode) && Ro(s, t, n, r), (r = r.parent);
  }
}
function Ro(e, t, n, s) {
  const r = Yt(t, e, s, !0);
  rr(() => {
    wn(s[t], r);
  }, n);
}
function Yt(e, t, n = Q, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          tt(), Ge(n);
          const c = ue(t, n, e, i);
          return Be(), nt(), c;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const ve =
    (e) =>
    (t, n = Q) =>
      (!_t || e === "sp") && Yt(e, (...s) => t(...s), n),
  No = ve("bm"),
  jo = ve("m"),
  So = ve("bu"),
  Ho = ve("u"),
  Lo = ve("bum"),
  rr = ve("um"),
  $o = ve("sp"),
  Bo = ve("rtg"),
  Uo = ve("rtc");
function Ko(e, t = Q) {
  Yt("ec", e, t);
}
const Do = Symbol.for("v-ndc");
function os(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (P(e) || X(e)) {
    r = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      r[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (W(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, c) => t(i, c, void 0, o && o[c]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let c = 0, u = i.length; c < u; c++) {
        const a = i[c];
        r[c] = t(e[a], a, c, o && o[c]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
const mn = (e) => (e ? (pr(e) ? Dn(e) || e.proxy : mn(e.parent)) : null),
  ft = Y(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => mn(e.parent),
    $root: (e) => mn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => $n(e),
    $forceUpdate: (e) => e.f || (e.f = () => Ln(e.update)),
    $nextTick: (e) => e.n || (e.n = po.bind(e.proxy)),
    $watch: (e) => Ao.bind(e),
  }),
  on = (e, t) => e !== K && !e.__isScriptSetup && S(e, t),
  Wo = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: c,
        appContext: u,
      } = e;
      let a;
      if (t[0] !== "$") {
        const A = i[t];
        if (A !== void 0)
          switch (A) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (on(s, t)) return (i[t] = 1), s[t];
          if (r !== K && S(r, t)) return (i[t] = 2), r[t];
          if ((a = e.propsOptions[0]) && S(a, t)) return (i[t] = 3), o[t];
          if (n !== K && S(n, t)) return (i[t] = 4), n[t];
          _n && (i[t] = 0);
        }
      }
      const m = ft[t];
      let y, E;
      if (m) return t === "$attrs" && ne(e, "get", t), m(e);
      if ((y = c.__cssModules) && (y = y[t])) return y;
      if (n !== K && S(n, t)) return (i[t] = 4), n[t];
      if (((E = u.config.globalProperties), S(E, t))) return E[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return on(r, t)
        ? ((r[t] = n), !0)
        : s !== K && S(s, t)
        ? ((s[t] = n), !0)
        : S(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i
    ) {
      let c;
      return (
        !!n[i] ||
        (e !== K && S(e, i)) ||
        on(t, i) ||
        ((c = o[0]) && S(c, i)) ||
        S(s, i) ||
        S(ft, i) ||
        S(r.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : S(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function is(e) {
  return P(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let _n = !0;
function zo(e) {
  const t = $n(e),
    n = e.proxy,
    s = e.ctx;
  (_n = !1), t.beforeCreate && ls(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: u,
    inject: a,
    created: m,
    beforeMount: y,
    mounted: E,
    beforeUpdate: A,
    updated: F,
    activated: M,
    deactivated: H,
    beforeDestroy: D,
    beforeUnmount: q,
    destroyed: k,
    unmounted: N,
    render: Ce,
    renderTracked: st,
    renderTriggered: bt,
    errorCaptured: Ie,
    serverPrefetch: Qt,
    expose: Ae,
    inheritAttrs: rt,
    components: xt,
    directives: yt,
    filters: Vt,
  } = t;
  if ((a && qo(a, s, null), i))
    for (const z in i) {
      const B = i[z];
      R(B) && (s[z] = B.bind(n));
    }
  if (r) {
    const z = r.call(n, n);
    W(z) && (e.data = Nn(z));
  }
  if (((_n = !0), o))
    for (const z in o) {
      const B = o[z],
        Me = R(B) ? B.bind(n, n) : R(B.get) ? B.get.bind(n, n) : fe,
        vt = !R(B) && R(B.set) ? B.set.bind(n) : fe,
        Fe = vi({ get: Me, set: vt });
      Object.defineProperty(s, z, {
        enumerable: !0,
        configurable: !0,
        get: () => Fe.value,
        set: (ae) => (Fe.value = ae),
      });
    }
  if (c) for (const z in c) or(c[z], s, n, z);
  if (u) {
    const z = R(u) ? u.call(n) : u;
    Reflect.ownKeys(z).forEach((B) => {
      Qo(B, z[B]);
    });
  }
  m && ls(m, e, "c");
  function G(z, B) {
    P(B) ? B.forEach((Me) => z(Me.bind(n))) : B && z(B.bind(n));
  }
  if (
    (G(No, y),
    G(jo, E),
    G(So, A),
    G(Ho, F),
    G(Mo, M),
    G(Fo, H),
    G(Ko, Ie),
    G(Uo, st),
    G(Bo, bt),
    G(Lo, q),
    G(rr, N),
    G($o, Qt),
    P(Ae))
  )
    if (Ae.length) {
      const z = e.exposed || (e.exposed = {});
      Ae.forEach((B) => {
        Object.defineProperty(z, B, {
          get: () => n[B],
          set: (Me) => (n[B] = Me),
        });
      });
    } else e.exposed || (e.exposed = {});
  Ce && e.render === fe && (e.render = Ce),
    rt != null && (e.inheritAttrs = rt),
    xt && (e.components = xt),
    yt && (e.directives = yt);
}
function qo(e, t, n = fe) {
  P(e) && (e = bn(e));
  for (const s in e) {
    const r = e[s];
    let o;
    W(r)
      ? "default" in r
        ? (o = Rt(r.from || s, r.default, !0))
        : (o = Rt(r.from || s))
      : (o = Rt(r)),
      V(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[s] = o);
  }
}
function ls(e, t, n) {
  ue(P(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function or(e, t, n, s) {
  const r = s.includes(".") ? tr(n, s) : () => n[s];
  if (X(e)) {
    const o = t[e];
    R(o) && rn(r, o);
  } else if (R(e)) rn(r, e.bind(n));
  else if (W(e))
    if (P(e)) e.forEach((o) => or(o, t, n, s));
    else {
      const o = R(e.handler) ? e.handler.bind(n) : t[e.handler];
      R(o) && rn(r, o, e);
    }
}
function $n(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    c = o.get(t);
  let u;
  return (
    c
      ? (u = c)
      : !r.length && !n && !s
      ? (u = t)
      : ((u = {}), r.length && r.forEach((a) => $t(u, a, i, !0)), $t(u, t, i)),
    W(t) && o.set(t, u),
    u
  );
}
function $t(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && $t(e, o, n, !0), r && r.forEach((i) => $t(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const c = Jo[i] || (n && n[i]);
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Jo = {
  data: cs,
  props: fs,
  emits: fs,
  methods: ct,
  computed: ct,
  beforeCreate: ee,
  created: ee,
  beforeMount: ee,
  mounted: ee,
  beforeUpdate: ee,
  updated: ee,
  beforeDestroy: ee,
  beforeUnmount: ee,
  destroyed: ee,
  unmounted: ee,
  activated: ee,
  deactivated: ee,
  errorCaptured: ee,
  serverPrefetch: ee,
  components: ct,
  directives: ct,
  watch: Yo,
  provide: cs,
  inject: Xo,
};
function cs(e, t) {
  return t
    ? e
      ? function () {
          return Y(
            R(e) ? e.call(this, this) : e,
            R(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Xo(e, t) {
  return ct(bn(e), bn(t));
}
function bn(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ee(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ct(e, t) {
  return e ? Y(Object.create(null), e, t) : t;
}
function fs(e, t) {
  return e
    ? P(e) && P(t)
      ? [...new Set([...e, ...t])]
      : Y(Object.create(null), is(e), is(t ?? {}))
    : t;
}
function Yo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Y(Object.create(null), e);
  for (const s in t) n[s] = ee(e[s], t[s]);
  return n;
}
function ir() {
  return {
    app: null,
    config: {
      isNativeTag: br,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let ko = 0;
function Zo(e, t) {
  return function (s, r = null) {
    R(s) || (s = Y({}, s)), r != null && !W(r) && (r = null);
    const o = ir(),
      i = new Set();
    let c = !1;
    const u = (o.app = {
      _uid: ko++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: wi,
      get config() {
        return o.config;
      },
      set config(a) {},
      use(a, ...m) {
        return (
          i.has(a) ||
            (a && R(a.install)
              ? (i.add(a), a.install(u, ...m))
              : R(a) && (i.add(a), a(u, ...m))),
          u
        );
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), u;
      },
      component(a, m) {
        return m ? ((o.components[a] = m), u) : o.components[a];
      },
      directive(a, m) {
        return m ? ((o.directives[a] = m), u) : o.directives[a];
      },
      mount(a, m, y) {
        if (!c) {
          const E = $e(s, r);
          return (
            (E.appContext = o),
            m && t ? t(E, a) : e(E, a, y),
            (c = !0),
            (u._container = a),
            (a.__vue_app__ = u),
            Dn(E.component) || E.component.proxy
          );
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, m) {
        return (o.provides[a] = m), u;
      },
      runWithContext(a) {
        Bt = u;
        try {
          return a();
        } finally {
          Bt = null;
        }
      },
    });
    return u;
  };
}
let Bt = null;
function Qo(e, t) {
  if (Q) {
    let n = Q.provides;
    const s = Q.parent && Q.parent.provides;
    s === n && (n = Q.provides = Object.create(s)), (n[e] = t);
  }
}
function Rt(e, t, n = !1) {
  const s = Q || me;
  if (s || Bt) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Bt._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && R(t) ? t.call(s && s.proxy) : t;
  }
}
function Vo(e, t, n, s = !1) {
  const r = {},
    o = {};
  St(o, Zt, 1), (e.propsDefaults = Object.create(null)), lr(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  n ? (e.props = s ? r : io(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o);
}
function Go(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    c = L(r),
    [u] = e.propsOptions;
  let a = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const m = e.vnode.dynamicProps;
      for (let y = 0; y < m.length; y++) {
        let E = m[y];
        if (Jt(e.emitsOptions, E)) continue;
        const A = t[E];
        if (u)
          if (S(o, E)) A !== o[E] && ((o[E] = A), (a = !0));
          else {
            const F = Ze(E);
            r[F] = xn(u, c, F, A, e, !1);
          }
        else A !== o[E] && ((o[E] = A), (a = !0));
      }
    }
  } else {
    lr(e, t, r, o) && (a = !0);
    let m;
    for (const y in c)
      (!t || (!S(t, y) && ((m = et(y)) === y || !S(t, m)))) &&
        (u
          ? n &&
            (n[y] !== void 0 || n[m] !== void 0) &&
            (r[y] = xn(u, c, y, void 0, e, !0))
          : delete r[y]);
    if (o !== c) for (const y in o) (!t || !S(t, y)) && (delete o[y], (a = !0));
  }
  a && ye(e, "set", "$attrs");
}
function lr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    c;
  if (t)
    for (let u in t) {
      if (Mt(u)) continue;
      const a = t[u];
      let m;
      r && S(r, (m = Ze(u)))
        ? !o || !o.includes(m)
          ? (n[m] = a)
          : ((c || (c = {}))[m] = a)
        : Jt(e.emitsOptions, u) ||
          ((!(u in s) || a !== s[u]) && ((s[u] = a), (i = !0)));
    }
  if (o) {
    const u = L(n),
      a = c || K;
    for (let m = 0; m < o.length; m++) {
      const y = o[m];
      n[y] = xn(r, u, y, a[y], e, !S(a, y));
    }
  }
  return i;
}
function xn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const c = S(i, "default");
    if (c && s === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && R(u)) {
        const { propsDefaults: a } = r;
        n in a ? (s = a[n]) : (Ge(r), (s = a[n] = u.call(null, t)), Be());
      } else s = u;
    }
    i[0] &&
      (o && !c ? (s = !1) : i[1] && (s === "" || s === et(n)) && (s = !0));
  }
  return s;
}
function cr(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    c = [];
  let u = !1;
  if (!R(e)) {
    const m = (y) => {
      u = !0;
      const [E, A] = cr(y, t, !0);
      Y(i, E), A && c.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(m),
      e.extends && m(e.extends),
      e.mixins && e.mixins.forEach(m);
  }
  if (!o && !u) return W(e) && s.set(e, Je), Je;
  if (P(o))
    for (let m = 0; m < o.length; m++) {
      const y = Ze(o[m]);
      us(y) && (i[y] = K);
    }
  else if (o)
    for (const m in o) {
      const y = Ze(m);
      if (us(y)) {
        const E = o[m],
          A = (i[y] = P(E) || R(E) ? { type: E } : Y({}, E));
        if (A) {
          const F = hs(Boolean, A.type),
            M = hs(String, A.type);
          (A[0] = F > -1),
            (A[1] = M < 0 || F < M),
            (F > -1 || S(A, "default")) && c.push(y);
        }
      }
    }
  const a = [i, c];
  return W(e) && s.set(e, a), a;
}
function us(e) {
  return e[0] !== "$";
}
function as(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function ds(e, t) {
  return as(e) === as(t);
}
function hs(e, t) {
  return P(t) ? t.findIndex((n) => ds(n, e)) : R(t) && ds(t, e) ? 0 : -1;
}
const fr = (e) => e[0] === "_" || e === "$stable",
  Bn = (e) => (P(e) ? e.map(pe) : [pe(e)]),
  ei = (e, t, n) => {
    if (t._n) return t;
    const s = Co((...r) => Bn(t(...r)), n);
    return (s._c = !1), s;
  },
  ur = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (fr(r)) continue;
      const o = e[r];
      if (R(o)) t[r] = ei(r, o, s);
      else if (o != null) {
        const i = Bn(o);
        t[r] = () => i;
      }
    }
  },
  ar = (e, t) => {
    const n = Bn(t);
    e.slots.default = () => n;
  },
  ti = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = L(t)), St(t, "_", n)) : ur(t, (e.slots = {}));
    } else (e.slots = {}), t && ar(e, t);
    St(e.slots, Zt, 1);
  },
  ni = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = K;
    if (s.shapeFlag & 32) {
      const c = t._;
      c
        ? n && c === 1
          ? (o = !1)
          : (Y(r, t), !n && c === 1 && delete r._)
        : ((o = !t.$stable), ur(t, r)),
        (i = t);
    } else t && (ar(e, t), (i = { default: 1 }));
    if (o) for (const c in r) !fr(c) && !(c in i) && delete r[c];
  };
function yn(e, t, n, s, r = !1) {
  if (P(e)) {
    e.forEach((E, A) => yn(E, t && (P(t) ? t[A] : t), n, s, r));
    return;
  }
  if (Ft(s) && !r) return;
  const o = s.shapeFlag & 4 ? Dn(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: c, r: u } = e,
    a = t && t.r,
    m = c.refs === K ? (c.refs = {}) : c.refs,
    y = c.setupState;
  if (
    (a != null &&
      a !== u &&
      (X(a)
        ? ((m[a] = null), S(y, a) && (y[a] = null))
        : V(a) && (a.value = null)),
    R(u))
  )
    Te(u, c, 12, [i, m]);
  else {
    const E = X(u),
      A = V(u);
    if (E || A) {
      const F = () => {
        if (e.f) {
          const M = E ? (S(y, u) ? y[u] : m[u]) : u.value;
          r
            ? P(M) && wn(M, o)
            : P(M)
            ? M.includes(o) || M.push(o)
            : E
            ? ((m[u] = [o]), S(y, u) && (y[u] = m[u]))
            : ((u.value = [o]), e.k && (m[e.k] = u.value));
        } else
          E
            ? ((m[u] = i), S(y, u) && (y[u] = i))
            : A && ((u.value = i), e.k && (m[e.k] = i));
      };
      i ? ((F.id = -1), te(F, n)) : F();
    }
  }
}
const te = Io;
function si(e) {
  return ri(e);
}
function ri(e, t) {
  const n = un();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: c,
      createComment: u,
      setText: a,
      setElementText: m,
      parentNode: y,
      nextSibling: E,
      setScopeId: A = fe,
      insertStaticContent: F,
    } = e,
    M = (
      l,
      f,
      d,
      p = null,
      h = null,
      b = null,
      v = !1,
      _ = null,
      x = !!f.dynamicChildren
    ) => {
      if (l === f) return;
      l && !it(l, f) && ((p = Ct(l)), ae(l, h, b, !0), (l = null)),
        f.patchFlag === -2 && ((x = !1), (f.dynamicChildren = null));
      const { type: g, ref: w, shapeFlag: C } = f;
      switch (g) {
        case kt:
          H(l, f, d, p);
          break;
        case gt:
          D(l, f, d, p);
          break;
        case ln:
          l == null && q(f, d, p, v);
          break;
        case ie:
          xt(l, f, d, p, h, b, v, _, x);
          break;
        default:
          C & 1
            ? Ce(l, f, d, p, h, b, v, _, x)
            : C & 6
            ? yt(l, f, d, p, h, b, v, _, x)
            : (C & 64 || C & 128) && g.process(l, f, d, p, h, b, v, _, x, Ue);
      }
      w != null && h && yn(w, l && l.ref, b, f || l, !f);
    },
    H = (l, f, d, p) => {
      if (l == null) s((f.el = c(f.children)), d, p);
      else {
        const h = (f.el = l.el);
        f.children !== l.children && a(h, f.children);
      }
    },
    D = (l, f, d, p) => {
      l == null ? s((f.el = u(f.children || "")), d, p) : (f.el = l.el);
    },
    q = (l, f, d, p) => {
      [l.el, l.anchor] = F(l.children, f, d, p, l.el, l.anchor);
    },
    k = ({ el: l, anchor: f }, d, p) => {
      let h;
      for (; l && l !== f; ) (h = E(l)), s(l, d, p), (l = h);
      s(f, d, p);
    },
    N = ({ el: l, anchor: f }) => {
      let d;
      for (; l && l !== f; ) (d = E(l)), r(l), (l = d);
      r(f);
    },
    Ce = (l, f, d, p, h, b, v, _, x) => {
      (v = v || f.type === "svg"),
        l == null ? st(f, d, p, h, b, v, _, x) : Qt(l, f, h, b, v, _, x);
    },
    st = (l, f, d, p, h, b, v, _) => {
      let x, g;
      const { type: w, props: C, shapeFlag: O, transition: T, dirs: j } = l;
      if (
        ((x = l.el = i(l.type, b, C && C.is, C)),
        O & 8
          ? m(x, l.children)
          : O & 16 &&
            Ie(l.children, x, null, p, h, b && w !== "foreignObject", v, _),
        j && Ne(l, null, p, "created"),
        bt(x, l, l.scopeId, v, p),
        C)
      ) {
        for (const $ in C)
          $ !== "value" &&
            !Mt($) &&
            o(x, $, null, C[$], b, l.children, p, h, be);
        "value" in C && o(x, "value", null, C.value),
          (g = C.onVnodeBeforeMount) && he(g, p, l);
      }
      j && Ne(l, null, p, "beforeMount");
      const U = (!h || (h && !h.pendingBranch)) && T && !T.persisted;
      U && T.beforeEnter(x),
        s(x, f, d),
        ((g = C && C.onVnodeMounted) || U || j) &&
          te(() => {
            g && he(g, p, l), U && T.enter(x), j && Ne(l, null, p, "mounted");
          }, h);
    },
    bt = (l, f, d, p, h) => {
      if ((d && A(l, d), p)) for (let b = 0; b < p.length; b++) A(l, p[b]);
      if (h) {
        let b = h.subTree;
        if (f === b) {
          const v = h.vnode;
          bt(l, v, v.scopeId, v.slotScopeIds, h.parent);
        }
      }
    },
    Ie = (l, f, d, p, h, b, v, _, x = 0) => {
      for (let g = x; g < l.length; g++) {
        const w = (l[g] = _ ? we(l[g]) : pe(l[g]));
        M(null, w, f, d, p, h, b, v, _);
      }
    },
    Qt = (l, f, d, p, h, b, v) => {
      const _ = (f.el = l.el);
      let { patchFlag: x, dynamicChildren: g, dirs: w } = f;
      x |= l.patchFlag & 16;
      const C = l.props || K,
        O = f.props || K;
      let T;
      d && je(d, !1),
        (T = O.onVnodeBeforeUpdate) && he(T, d, f, l),
        w && Ne(f, l, d, "beforeUpdate"),
        d && je(d, !0);
      const j = h && f.type !== "foreignObject";
      if (
        (g
          ? Ae(l.dynamicChildren, g, _, d, p, j, b)
          : v || B(l, f, _, null, d, p, j, b, !1),
        x > 0)
      ) {
        if (x & 16) rt(_, f, C, O, d, p, h);
        else if (
          (x & 2 && C.class !== O.class && o(_, "class", null, O.class, h),
          x & 4 && o(_, "style", C.style, O.style, h),
          x & 8)
        ) {
          const U = f.dynamicProps;
          for (let $ = 0; $ < U.length; $++) {
            const J = U[$],
              re = C[J],
              Ke = O[J];
            (Ke !== re || J === "value") &&
              o(_, J, re, Ke, h, l.children, d, p, be);
          }
        }
        x & 1 && l.children !== f.children && m(_, f.children);
      } else !v && g == null && rt(_, f, C, O, d, p, h);
      ((T = O.onVnodeUpdated) || w) &&
        te(() => {
          T && he(T, d, f, l), w && Ne(f, l, d, "updated");
        }, p);
    },
    Ae = (l, f, d, p, h, b, v) => {
      for (let _ = 0; _ < f.length; _++) {
        const x = l[_],
          g = f[_],
          w =
            x.el && (x.type === ie || !it(x, g) || x.shapeFlag & 70)
              ? y(x.el)
              : d;
        M(x, g, w, null, p, h, b, v, !0);
      }
    },
    rt = (l, f, d, p, h, b, v) => {
      if (d !== p) {
        if (d !== K)
          for (const _ in d)
            !Mt(_) && !(_ in p) && o(l, _, d[_], null, v, f.children, h, b, be);
        for (const _ in p) {
          if (Mt(_)) continue;
          const x = p[_],
            g = d[_];
          x !== g && _ !== "value" && o(l, _, g, x, v, f.children, h, b, be);
        }
        "value" in p && o(l, "value", d.value, p.value);
      }
    },
    xt = (l, f, d, p, h, b, v, _, x) => {
      const g = (f.el = l ? l.el : c("")),
        w = (f.anchor = l ? l.anchor : c(""));
      let { patchFlag: C, dynamicChildren: O, slotScopeIds: T } = f;
      T && (_ = _ ? _.concat(T) : T),
        l == null
          ? (s(g, d, p), s(w, d, p), Ie(f.children, d, w, h, b, v, _, x))
          : C > 0 && C & 64 && O && l.dynamicChildren
          ? (Ae(l.dynamicChildren, O, d, h, b, v, _),
            (f.key != null || (h && f === h.subTree)) && dr(l, f, !0))
          : B(l, f, d, w, h, b, v, _, x);
    },
    yt = (l, f, d, p, h, b, v, _, x) => {
      (f.slotScopeIds = _),
        l == null
          ? f.shapeFlag & 512
            ? h.ctx.activate(f, d, p, v, x)
            : Vt(f, d, p, h, b, v, x)
          : Wn(l, f, x);
    },
    Vt = (l, f, d, p, h, b, v) => {
      const _ = (l.component = gi(l, p, h));
      if ((nr(l) && (_.ctx.renderer = Ue), mi(_), _.asyncDep)) {
        if ((h && h.registerDep(_, G), !l.el)) {
          const x = (_.subTree = $e(gt));
          D(null, x, f, d);
        }
        return;
      }
      G(_, l, f, d, h, b, v);
    },
    Wn = (l, f, d) => {
      const p = (f.component = l.component);
      if (Oo(l, f, d))
        if (p.asyncDep && !p.asyncResolved) {
          z(p, f, d);
          return;
        } else (p.next = f), mo(p.update), p.update();
      else (f.el = l.el), (p.vnode = f);
    },
    G = (l, f, d, p, h, b, v) => {
      const _ = () => {
          if (l.isMounted) {
            let { next: w, bu: C, u: O, parent: T, vnode: j } = l,
              U = w,
              $;
            je(l, !1),
              w ? ((w.el = j.el), z(l, w, v)) : (w = j),
              C && nn(C),
              ($ = w.props && w.props.onVnodeBeforeUpdate) && he($, T, w, j),
              je(l, !0);
            const J = sn(l),
              re = l.subTree;
            (l.subTree = J),
              M(re, J, y(re.el), Ct(re), l, h, b),
              (w.el = J.el),
              U === null && To(l, J.el),
              O && te(O, h),
              ($ = w.props && w.props.onVnodeUpdated) &&
                te(() => he($, T, w, j), h);
          } else {
            let w;
            const { el: C, props: O } = f,
              { bm: T, m: j, parent: U } = l,
              $ = Ft(f);
            if (
              (je(l, !1),
              T && nn(T),
              !$ && (w = O && O.onVnodeBeforeMount) && he(w, U, f),
              je(l, !0),
              C && en)
            ) {
              const J = () => {
                (l.subTree = sn(l)), en(C, l.subTree, l, h, null);
              };
              $
                ? f.type.__asyncLoader().then(() => !l.isUnmounted && J())
                : J();
            } else {
              const J = (l.subTree = sn(l));
              M(null, J, d, p, l, h, b), (f.el = J.el);
            }
            if ((j && te(j, h), !$ && (w = O && O.onVnodeMounted))) {
              const J = f;
              te(() => he(w, U, J), h);
            }
            (f.shapeFlag & 256 ||
              (U && Ft(U.vnode) && U.vnode.shapeFlag & 256)) &&
              l.a &&
              te(l.a, h),
              (l.isMounted = !0),
              (f = d = p = null);
          }
        },
        x = (l.effect = new An(_, () => Ln(g), l.scope)),
        g = (l.update = () => x.run());
      (g.id = l.uid), je(l, !0), g();
    },
    z = (l, f, d) => {
      f.component = l;
      const p = l.vnode.props;
      (l.vnode = f),
        (l.next = null),
        Go(l, f.props, p, d),
        ni(l, f.children, d),
        tt(),
        ss(),
        nt();
    },
    B = (l, f, d, p, h, b, v, _, x = !1) => {
      const g = l && l.children,
        w = l ? l.shapeFlag : 0,
        C = f.children,
        { patchFlag: O, shapeFlag: T } = f;
      if (O > 0) {
        if (O & 128) {
          vt(g, C, d, p, h, b, v, _, x);
          return;
        } else if (O & 256) {
          Me(g, C, d, p, h, b, v, _, x);
          return;
        }
      }
      T & 8
        ? (w & 16 && be(g, h, b), C !== g && m(d, C))
        : w & 16
        ? T & 16
          ? vt(g, C, d, p, h, b, v, _, x)
          : be(g, h, b, !0)
        : (w & 8 && m(d, ""), T & 16 && Ie(C, d, p, h, b, v, _, x));
    },
    Me = (l, f, d, p, h, b, v, _, x) => {
      (l = l || Je), (f = f || Je);
      const g = l.length,
        w = f.length,
        C = Math.min(g, w);
      let O;
      for (O = 0; O < C; O++) {
        const T = (f[O] = x ? we(f[O]) : pe(f[O]));
        M(l[O], T, d, null, h, b, v, _, x);
      }
      g > w ? be(l, h, b, !0, !1, C) : Ie(f, d, p, h, b, v, _, x, C);
    },
    vt = (l, f, d, p, h, b, v, _, x) => {
      let g = 0;
      const w = f.length;
      let C = l.length - 1,
        O = w - 1;
      for (; g <= C && g <= O; ) {
        const T = l[g],
          j = (f[g] = x ? we(f[g]) : pe(f[g]));
        if (it(T, j)) M(T, j, d, null, h, b, v, _, x);
        else break;
        g++;
      }
      for (; g <= C && g <= O; ) {
        const T = l[C],
          j = (f[O] = x ? we(f[O]) : pe(f[O]));
        if (it(T, j)) M(T, j, d, null, h, b, v, _, x);
        else break;
        C--, O--;
      }
      if (g > C) {
        if (g <= O) {
          const T = O + 1,
            j = T < w ? f[T].el : p;
          for (; g <= O; )
            M(null, (f[g] = x ? we(f[g]) : pe(f[g])), d, j, h, b, v, _, x), g++;
        }
      } else if (g > O) for (; g <= C; ) ae(l[g], h, b, !0), g++;
      else {
        const T = g,
          j = g,
          U = new Map();
        for (g = j; g <= O; g++) {
          const se = (f[g] = x ? we(f[g]) : pe(f[g]));
          se.key != null && U.set(se.key, g);
        }
        let $,
          J = 0;
        const re = O - j + 1;
        let Ke = !1,
          Jn = 0;
        const ot = new Array(re);
        for (g = 0; g < re; g++) ot[g] = 0;
        for (g = T; g <= C; g++) {
          const se = l[g];
          if (J >= re) {
            ae(se, h, b, !0);
            continue;
          }
          let de;
          if (se.key != null) de = U.get(se.key);
          else
            for ($ = j; $ <= O; $++)
              if (ot[$ - j] === 0 && it(se, f[$])) {
                de = $;
                break;
              }
          de === void 0
            ? ae(se, h, b, !0)
            : ((ot[de - j] = g + 1),
              de >= Jn ? (Jn = de) : (Ke = !0),
              M(se, f[de], d, null, h, b, v, _, x),
              J++);
        }
        const Xn = Ke ? oi(ot) : Je;
        for ($ = Xn.length - 1, g = re - 1; g >= 0; g--) {
          const se = j + g,
            de = f[se],
            Yn = se + 1 < w ? f[se + 1].el : p;
          ot[g] === 0
            ? M(null, de, d, Yn, h, b, v, _, x)
            : Ke && ($ < 0 || g !== Xn[$] ? Fe(de, d, Yn, 2) : $--);
        }
      }
    },
    Fe = (l, f, d, p, h = null) => {
      const { el: b, type: v, transition: _, children: x, shapeFlag: g } = l;
      if (g & 6) {
        Fe(l.component.subTree, f, d, p);
        return;
      }
      if (g & 128) {
        l.suspense.move(f, d, p);
        return;
      }
      if (g & 64) {
        v.move(l, f, d, Ue);
        return;
      }
      if (v === ie) {
        s(b, f, d);
        for (let C = 0; C < x.length; C++) Fe(x[C], f, d, p);
        s(l.anchor, f, d);
        return;
      }
      if (v === ln) {
        k(l, f, d);
        return;
      }
      if (p !== 2 && g & 1 && _)
        if (p === 0) _.beforeEnter(b), s(b, f, d), te(() => _.enter(b), h);
        else {
          const { leave: C, delayLeave: O, afterLeave: T } = _,
            j = () => s(b, f, d),
            U = () => {
              C(b, () => {
                j(), T && T();
              });
            };
          O ? O(b, j, U) : U();
        }
      else s(b, f, d);
    },
    ae = (l, f, d, p = !1, h = !1) => {
      const {
        type: b,
        props: v,
        ref: _,
        children: x,
        dynamicChildren: g,
        shapeFlag: w,
        patchFlag: C,
        dirs: O,
      } = l;
      if ((_ != null && yn(_, null, d, l, !0), w & 256)) {
        f.ctx.deactivate(l);
        return;
      }
      const T = w & 1 && O,
        j = !Ft(l);
      let U;
      if ((j && (U = v && v.onVnodeBeforeUnmount) && he(U, f, l), w & 6))
        _r(l.component, d, p);
      else {
        if (w & 128) {
          l.suspense.unmount(d, p);
          return;
        }
        T && Ne(l, null, f, "beforeUnmount"),
          w & 64
            ? l.type.remove(l, f, d, h, Ue, p)
            : g && (b !== ie || (C > 0 && C & 64))
            ? be(g, f, d, !1, !0)
            : ((b === ie && C & 384) || (!h && w & 16)) && be(x, f, d),
          p && zn(l);
      }
      ((j && (U = v && v.onVnodeUnmounted)) || T) &&
        te(() => {
          U && he(U, f, l), T && Ne(l, null, f, "unmounted");
        }, d);
    },
    zn = (l) => {
      const { type: f, el: d, anchor: p, transition: h } = l;
      if (f === ie) {
        mr(d, p);
        return;
      }
      if (f === ln) {
        N(l);
        return;
      }
      const b = () => {
        r(d), h && !h.persisted && h.afterLeave && h.afterLeave();
      };
      if (l.shapeFlag & 1 && h && !h.persisted) {
        const { leave: v, delayLeave: _ } = h,
          x = () => v(d, b);
        _ ? _(l.el, b, x) : x();
      } else b();
    },
    mr = (l, f) => {
      let d;
      for (; l !== f; ) (d = E(l)), r(l), (l = d);
      r(f);
    },
    _r = (l, f, d) => {
      const { bum: p, scope: h, update: b, subTree: v, um: _ } = l;
      p && nn(p),
        h.stop(),
        b && ((b.active = !1), ae(v, l, f, d)),
        _ && te(_, f),
        te(() => {
          l.isUnmounted = !0;
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          l.asyncDep &&
          !l.asyncResolved &&
          l.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve());
    },
    be = (l, f, d, p = !1, h = !1, b = 0) => {
      for (let v = b; v < l.length; v++) ae(l[v], f, d, p, h);
    },
    Ct = (l) =>
      l.shapeFlag & 6
        ? Ct(l.component.subTree)
        : l.shapeFlag & 128
        ? l.suspense.next()
        : E(l.anchor || l.el),
    qn = (l, f, d) => {
      l == null
        ? f._vnode && ae(f._vnode, null, null, !0)
        : M(f._vnode || null, l, f, null, null, null, d),
        ss(),
        Qs(),
        (f._vnode = l);
    },
    Ue = {
      p: M,
      um: ae,
      m: Fe,
      r: zn,
      mt: Vt,
      mc: Ie,
      pc: B,
      pbc: Ae,
      n: Ct,
      o: e,
    };
  let Gt, en;
  return (
    t && ([Gt, en] = t(Ue)), { render: qn, hydrate: Gt, createApp: Zo(qn, Gt) }
  );
}
function je({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function dr(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (P(s) && P(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let c = r[o];
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) &&
          ((c = r[o] = we(r[o])), (c.el = i.el)),
        n || dr(i, c)),
        c.type === kt && (c.el = i.el);
    }
}
function oi(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, c;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (c = (o + i) >> 1), e[n[c]] < a ? (o = c + 1) : (i = c);
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
const ii = (e) => e.__isTeleport,
  ie = Symbol.for("v-fgt"),
  kt = Symbol.for("v-txt"),
  gt = Symbol.for("v-cmt"),
  ln = Symbol.for("v-stc"),
  ut = [];
let ce = null;
function De(e = !1) {
  ut.push((ce = e ? null : []));
}
function li() {
  ut.pop(), (ce = ut[ut.length - 1] || null);
}
let mt = 1;
function ps(e) {
  mt += e;
}
function ci(e) {
  return (
    (e.dynamicChildren = mt > 0 ? ce || Je : null),
    li(),
    mt > 0 && ce && ce.push(e),
    e
  );
}
function We(e, t, n, s, r, o) {
  return ci(I(e, t, n, s, r, o, !0));
}
function fi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function it(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zt = "__vInternal",
  hr = ({ key: e }) => e ?? null,
  Nt = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? X(e) || V(e) || R(e)
        ? { i: me, r: e, k: t, f: !!n }
        : e
      : null
  );
function I(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === ie ? 0 : 1,
  i = !1,
  c = !1
) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hr(t),
    ref: t && Nt(t),
    scopeId: Xt,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: me,
  };
  return (
    c
      ? (Un(u, n), o & 128 && e.normalize(u))
      : n && (u.shapeFlag |= X(n) ? 8 : 16),
    mt > 0 &&
      !i &&
      ce &&
      (u.patchFlag > 0 || o & 6) &&
      u.patchFlag !== 32 &&
      ce.push(u),
    u
  );
}
const $e = ui;
function ui(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === Do) && (e = gt), fi(e))) {
    const c = Ve(e, t, !0);
    return (
      n && Un(c, n),
      mt > 0 &&
        !o &&
        ce &&
        (c.shapeFlag & 6 ? (ce[ce.indexOf(e)] = c) : ce.push(c)),
      (c.patchFlag |= -2),
      c
    );
  }
  if ((yi(e) && (e = e.__vccOpts), t)) {
    t = ai(t);
    let { class: c, style: u } = t;
    c && !X(c) && (t.class = Pn(c)),
      W(u) && (Ws(u) && !P(u) && (u = Y({}, u)), (t.style = Wt(u)));
  }
  const i = X(e) ? 1 : Po(e) ? 128 : ii(e) ? 64 : W(e) ? 4 : R(e) ? 2 : 0;
  return I(e, t, n, s, r, i, o, !0);
}
function ai(e) {
  return e ? (Ws(e) || Zt in e ? Y({}, e) : e) : null;
}
function Ve(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    c = t ? di(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && hr(c),
    ref:
      t && t.ref ? (n && r ? (P(r) ? r.concat(Nt(t)) : [r, Nt(t)]) : Nt(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ie ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ve(e.ssContent),
    ssFallback: e.ssFallback && Ve(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function jt(e = " ", t = 0) {
  return $e(kt, null, e, t);
}
function pe(e) {
  return e == null || typeof e == "boolean"
    ? $e(gt)
    : P(e)
    ? $e(ie, null, e.slice())
    : typeof e == "object"
    ? we(e)
    : $e(kt, null, String(e));
}
function we(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ve(e);
}
function Un(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (P(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Un(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Zt in t)
        ? (t._ctx = me)
        : r === 3 &&
          me &&
          (me.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    R(t)
      ? ((t = { default: t, _ctx: me }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [jt(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function di(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Pn([t.class, s.class]));
      else if (r === "style") t.style = Wt([t.style, s.style]);
      else if (Ut(r)) {
        const o = t[r],
          i = s[r];
        i &&
          o !== i &&
          !(P(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function he(e, t, n, s = null) {
  ue(e, t, 7, [n, s]);
}
const hi = ir();
let pi = 0;
function gi(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || hi,
    o = {
      uid: pi++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Fr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: cr(s, r),
      emitsOptions: Gs(s, r),
      emit: null,
      emitted: null,
      propsDefaults: K,
      inheritAttrs: s.inheritAttrs,
      ctx: K,
      data: K,
      props: K,
      attrs: K,
      slots: K,
      refs: K,
      setupState: K,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = xo.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let Q = null,
  Kn,
  ze,
  gs = "__VUE_INSTANCE_SETTERS__";
(ze = un()[gs]) || (ze = un()[gs] = []),
  ze.push((e) => (Q = e)),
  (Kn = (e) => {
    ze.length > 1 ? ze.forEach((t) => t(e)) : ze[0](e);
  });
const Ge = (e) => {
    Kn(e), e.scope.on();
  },
  Be = () => {
    Q && Q.scope.off(), Kn(null);
  };
function pr(e) {
  return e.vnode.shapeFlag & 4;
}
let _t = !1;
function mi(e, t = !1) {
  _t = t;
  const { props: n, children: s } = e.vnode,
    r = pr(e);
  Vo(e, n, r, t), ti(e, s);
  const o = r ? _i(e, t) : void 0;
  return (_t = !1), o;
}
function _i(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = zs(new Proxy(e.ctx, Wo)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? xi(e) : null);
    Ge(e), tt();
    const o = Te(s, e, 0, [e.props, r]);
    if ((nt(), Be(), Ts(o))) {
      if ((o.then(Be, Be), t))
        return o
          .then((i) => {
            ms(e, i, t);
          })
          .catch((i) => {
            qt(i, e, 0);
          });
      e.asyncDep = o;
    } else ms(e, o, t);
  } else gr(e, t);
}
function ms(e, t, n) {
  R(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : W(t) && (e.setupState = Ys(t)),
    gr(e, n);
}
let _s;
function gr(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && _s && !s.render) {
      const r = s.template || $n(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: u } = s,
          a = Y(Y({ isCustomElement: o, delimiters: c }, i), u);
        s.render = _s(r, a);
      }
    }
    e.render = s.render || fe;
  }
  Ge(e), tt(), zo(e), nt(), Be();
}
function bi(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return ne(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function xi(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return bi(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Dn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Ys(zs(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in ft) return ft[n](e);
        },
        has(t, n) {
          return n in t || n in ft;
        },
      }))
    );
}
function yi(e) {
  return R(e) && "__vccOpts" in e;
}
const vi = (e, t) => ao(e, t, _t),
  Ci = Symbol.for("v-scx"),
  Ei = () => Rt(Ci),
  wi = "3.3.4",
  Oi = "http://www.w3.org/2000/svg",
  He = typeof document < "u" ? document : null,
  bs = He && He.createElement("template"),
  Ti = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t
        ? He.createElementNS(Oi, e)
        : He.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => He.createTextNode(e),
    createComment: (e) => He.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => He.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        bs.innerHTML = s ? `<svg>${e}</svg>` : e;
        const c = bs.content;
        if (s) {
          const u = c.firstChild;
          for (; u.firstChild; ) c.appendChild(u.firstChild);
          c.removeChild(u);
        }
        t.insertBefore(c, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Pi(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Ii(e, t, n) {
  const s = e.style,
    r = X(n);
  if (n && !r) {
    if (t && !X(t)) for (const o in t) n[o] == null && vn(s, o, "");
    for (const o in n) vn(s, o, n[o]);
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (s.display = o);
  }
}
const xs = /\s*!important$/;
function vn(e, t, n) {
  if (P(n)) n.forEach((s) => vn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Ai(e, t);
    xs.test(n)
      ? e.setProperty(et(s), n.replace(xs, ""), "important")
      : (e[s] = n);
  }
}
const ys = ["Webkit", "Moz", "ms"],
  cn = {};
function Ai(e, t) {
  const n = cn[t];
  if (n) return n;
  let s = Ze(t);
  if (s !== "filter" && s in e) return (cn[t] = s);
  s = As(s);
  for (let r = 0; r < ys.length; r++) {
    const o = ys[r] + s;
    if (o in e) return (cn[t] = o);
  }
  return t;
}
const vs = "http://www.w3.org/1999/xlink";
function Mi(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(vs, t.slice(6, t.length))
      : e.setAttributeNS(vs, t, n);
  else {
    const o = Mr(t);
    n == null || (o && !Ms(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function Fi(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), (e[t] = n ?? "");
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
    e._value = n;
    const a = c === "OPTION" ? e.getAttribute("value") : e.value,
      m = n ?? "";
    a !== m && (e.value = m), n == null && e.removeAttribute(t);
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = Ms(n))
      : n == null && a === "string"
      ? ((n = ""), (u = !0))
      : a === "number" && ((n = 0), (u = !0));
  }
  try {
    e[t] = n;
  } catch {}
  u && e.removeAttribute(t);
}
function Ri(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ni(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function ji(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [c, u] = Si(t);
    if (s) {
      const a = (o[t] = $i(s, r));
      Ri(e, c, a, u);
    } else i && (Ni(e, c, i, u), (o[t] = void 0));
  }
}
const Cs = /(?:Once|Passive|Capture)$/;
function Si(e) {
  let t;
  if (Cs.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Cs)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : et(e.slice(2)), t];
}
let fn = 0;
const Hi = Promise.resolve(),
  Li = () => fn || (Hi.then(() => (fn = 0)), (fn = Date.now()));
function $i(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    ue(Bi(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Li()), n;
}
function Bi(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Es = /^on[a-z]/,
  Ui = (e, t, n, s, r = !1, o, i, c, u) => {
    t === "class"
      ? Pi(e, s, r)
      : t === "style"
      ? Ii(e, n, s)
      : Ut(t)
      ? En(t) || ji(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Ki(e, t, s, r)
        )
      ? Fi(e, t, s, o, i, c, u)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Mi(e, t, s, r));
  };
function Ki(e, t, n, s) {
  return s
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && Es.test(t) && R(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (Es.test(t) && X(n))
    ? !1
    : t in e;
}
const Di = Y({ patchProp: Ui }, Ti);
let ws;
function Wi() {
  return ws || (ws = si(Di));
}
const zi = (...e) => {
  const t = Wi().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = qi(s);
      if (!r) return;
      const o = t._component;
      !R(o) && !o.render && !o.template && (o.template = r.innerHTML),
        (r.innerHTML = "");
      const i = n(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function qi(e) {
  return X(e) ? document.querySelector(e) : e;
}
const Ji = "./assets/control_xbox_360-83f4916c.png",
  Xi = "./assets/consola 360-a513da1f.png",
  Yi = "./assets/xboxOne-cd6743eb.webp",
  ki = "./assets/playstation2-9a895e98.png",
  Zi = "./assets/playstation5-ca1b5031.jpg",
  Qi = "./assets/pcgamer-3a76b825.png",
  Vi = "./assets/xboxseriess-517857a3.png",
  Gi = "./assets/xboxseriesx-8fff2c02.png",
  el = "./assets/play2-a1b7ad8f.png",
  tl = "./assets/play3-1489dca5.png",
  nl = "./assets/controlone-462141ec.png",
  sl = "./assets/control play 5-1a055f10.png";
const rl = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  _e = (e) => (yo("data-v-63fafc69"), (e = e()), vo(), e),
  ol = { id: "contBody" },
  il = _e(() => I("h1", null, "Mundo Gamer🎮", -1)),
  ll = _e(() =>
    I(
      "tr",
      null,
      [
        I("td", null, "Imagen"),
        I("td", null, "Nombre"),
        I("td", null, "Precio"),
        I("td", null, "Cantidad"),
        I("td"),
      ],
      -1
    )
  ),
  cl = ["src"],
  fl = ["onClick"],
  ul = ["onClick"],
  al = ["onClick"],
  dl = { key: 1 },
  hl = _e(() =>
    I(
      "td",
      { style: { "text-align": "center", "column-span": "4" } },
      "No hay item en el carrito.",
      -1
    )
  ),
  pl = [hl],
  gl = { id: "trBottom" },
  ml = _e(() => I("td", null, null, -1)),
  _l = _e(() => I("td", null, "Total: ", -1)),
  bl = _e(() =>
    I(
      "div",
      { class: "fondo" },
      [I("div", { class: "tituloinicio" }, "WELCOME")],
      -1
    )
  ),
  xl = { id: "body" },
  yl = _e(() => I("h1", null, "Nuestros artículos", -1)),
  vl = { id: "cont" },
  Cl = ["src"],
  El = _e(() => I("b", null, "Tienda: ", -1)),
  wl = _e(() => I("b", null, "Precio: ", -1)),
  Ol = ["onClick"],
  Tl = _e(() => I("span", null, "Comprar🛒", -1)),
  Pl = [Tl],
  Il = {
    __name: "App",
    setup(e) {
      const t = (F) =>
          F.toLocaleString("es-CO", { style: "currency", currency: "COP" }),
        n = (F) => parseInt(F.replace(/[^0-9-]/g, "")) / 100,
        s = It([
          {
            img: Ji,
            nombre: "Control xbox 360",
            tienda: "Random",
            precio: t(9e4),
          },
          { img: Xi, nombre: "Xbox 360", tienda: "Random", precio: t(5e5) },
          {
            img: ki,
            nombre: "Playstation 1",
            tienda: "Random",
            precio: t(2e5),
          },
          {
            img: Zi,
            nombre: "Playstation 5",
            tienda: "Random",
            precio: t(2e6),
          },
          { img: Yi, nombre: "Xbox One", tienda: "Random", precio: t(2e6) },
          {
            img: Qi,
            nombre: "Portatil Gamer",
            tienda: "Random",
            precio: t(3e6),
          },
          {
            img: Vi,
            nombre: "Xbox series s",
            tienda: "Random",
            precio: t(15e5),
          },
          {
            img: Gi,
            nombre: "Xbox series x",
            tienda: "Random",
            precio: t(25e5),
          },
          { img: el, nombre: "Play 2", tienda: "Random", precio: t(3e5) },
          { img: tl, nombre: "Play 3", tienda: "Random", precio: t(5e5) },
          {
            img: nl,
            nombre: "Control Xbox one",
            tienda: "Random",
            precio: t(1e5),
          },
          {
            img: sl,
            nombre: "Control Play 5",
            tienda: "Random",
            precio: t(1e5),
          },
        ]);
      let r = It({ display: "none" });
      const o = It([]),
        i = () => {
          r.value.display = r.value.display === "none" ? "block" : "none";
        };
      let c = It(!1);
      const u = (F) => {
          const M = o.value.find((H) => H.nombre == F.nombre);
          if (M) {
            (M.cantidad += 1), (c.value = !1);
            return;
          }
          o.value.push({
            img: F.img,
            nombre: F.nombre,
            precio: n(F.precio),
            cantidad: 1,
          });
        },
        a = () =>
          o.value.length == 0
            ? 0
            : o.value.reduce((F, M) => F + M.precio * M.cantidad, 0),
        m = (F) => {
          o.value.splice(F, 1);
        },
        y = (F) => {
          (c.value = !1), (o.value[F].cantidad += 1);
        },
        E = (F) => {
          if (o.value[F].cantidad == 1) {
            c.value = !0;
            return;
          }
          o.value[F].cantidad -= 1;
        },
        A = () => {
          o.value = [];
        };
      return (F, M) => (
        De(),
        We("div", ol, [
          I("div", { id: "barraTop" }, [
            il,
            I("button", { class: "iconocarro", onClick: i }, "🛒"),
          ]),
          I("div", null, [
            I(
              "table",
              { style: Wt(Xs(r)) },
              [
                ll,
                o.value.length > 0
                  ? (De(!0),
                    We(
                      ie,
                      { key: 0 },
                      os(
                        o.value,
                        (H, D) => (
                          De(),
                          We("tr", { key: D }, [
                            I("td", null, [
                              I(
                                "img",
                                { class: "imgCar", src: H.img, alt: "" },
                                null,
                                8,
                                cl
                              ),
                            ]),
                            I("td", null, Re(H.nombre), 1),
                            I("td", null, Re(H.precio), 1),
                            I("td", null, [
                              I(
                                "button",
                                {
                                  class: "botonescarrito",
                                  onClick: (q) => E(D),
                                },
                                "➖",
                                8,
                                fl
                              ),
                              jt(" " + Re(H.cantidad) + " ", 1),
                              I(
                                "button",
                                {
                                  class: "botonescarrito",
                                  onClick: (q) => y(D),
                                },
                                "➕",
                                8,
                                ul
                              ),
                            ]),
                            I("td", null, [
                              I(
                                "button",
                                {
                                  class: "botonescarrito",
                                  onClick: (q) => m(D),
                                },
                                "❌",
                                8,
                                al
                              ),
                            ]),
                          ])
                        )
                      ),
                      128
                    ))
                  : (De(), We("tr", dl, pl)),
                I("tr", gl, [
                  I("td", null, [
                    I(
                      "button",
                      { class: "vaciarcarrito", onClick: A },
                      "Vaciar 🗑️"
                    ),
                  ]),
                  ml,
                  _l,
                  I("td", null, Re(a()), 1),
                ]),
              ],
              4
            ),
          ]),
          bl,
          I("div", xl, [
            yl,
            I("div", vl, [
              (De(!0),
              We(
                ie,
                null,
                os(
                  s.value,
                  (H, D) => (
                    De(),
                    We("div", { class: "card", key: D }, [
                      I(
                        "img",
                        { class: "imgArt", src: H.img, alt: "" },
                        null,
                        8,
                        Cl
                      ),
                      I("div", null, [
                        I("h4", null, Re(H.nombre), 1),
                        I("p", null, [El, jt(" " + Re(H.tienda), 1)]),
                        I("p", null, [wl, jt(" " + Re(H.precio), 1)]),
                        I(
                          "button",
                          { class: "agregar", onClick: (q) => u(H) },
                          Pl,
                          8,
                          Ol
                        ),
                      ]),
                    ])
                  )
                ),
                128
              )),
            ]),
          ]),
        ])
      );
    },
  },
  Al = rl(Il, [["__scopeId", "data-v-63fafc69"]]);
zi(Al).mount("#app");
