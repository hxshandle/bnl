function FastClick(n, t) {
  "use strict";

  function o(n, t) {
    return function() {
      return n.apply(t, arguments)
    }
  }
  var f, r, u, i, e;
  if (t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = n, this.tapDelay = t.tapDelay || 200, !FastClick.notNeeded(n)) {
    for (r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], u = this, i = 0, e = r.length; i < e; i++)
      u[r[i]] = o(u[r[i]], u);
    deviceIsAndroid && (n.addEventListener("mouseover", this.onMouse, !0), n.addEventListener("mousedown", this.onMouse, !0), n.addEventListener("mouseup", this.onMouse, !0));
    n.addEventListener("click", this.onClick, !0);
    n.addEventListener("touchstart", this.onTouchStart, !1);
    n.addEventListener("touchmove", this.onTouchMove, !1);
    n.addEventListener("touchend", this.onTouchEnd, !1);
    n.addEventListener("touchcancel", this.onTouchCancel, !1);
    Event.prototype.stopImmediatePropagation || (n.removeEventListener = function(t, i, r) {
      var u = Node.prototype.removeEventListener;
      t === "click" ? u.call(n, t, i.hijacked || i, r) : u.call(n, t, i, r)
    }, n.addEventListener = function(t, i, r) {
      var u = Node.prototype.addEventListener;
      t === "click" ? u.call(n, t, i.hijacked || (i.hijacked = function(n) {
        n.propagationStopped || i(n)
      }), r) : u.call(n, t, i, r)
    });
    typeof n.onclick == "function" && (f = n.onclick, n.addEventListener("click", function(n) {
      f(n)
    }, !1), n.onclick = null)
  }
}

function DropDown(n) {
  this.dd = n;
  this.initEvents()
}
var RedirectAngularUrl, Application, GlobalForm;
(function(n, t) {
  typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function(n) {
    if (!n.document)
      throw new Error("jQuery requires a window with a document");
    return t(n)
  } : t(n)
})(typeof window != "undefined" ? window : this, function(n, t) {
  function ri(n) {
    var t = n.length,
      r = i.type(n);
    return r === "function" || i.isWindow(n) ? !1 : n.nodeType === 1 && t ? !0 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
  }

  function ui(n, t, r) {
    if (i.isFunction(t))
      return i.grep(n, function(n, i) {
        return !!t.call(n, i, n) !== r
      });
    if (t.nodeType)
      return i.grep(n, function(n) {
        return n === t !== r
      });
    if (typeof t == "string") {
      if (re.test(t))
        return i.filter(t, n, r);
      t = i.filter(t, n)
    }
    return i.grep(n, function(n) {
      return i.inArray(n, t) >= 0 !== r
    })
  }

  function hr(n, t) {
    do
      n = n[t];
    while (n && n.nodeType !== 1);
    return n
  }

  function ee(n) {
    var t = fi[n] = {};
    return i.each(n.match(h) || [], function(n, i) {
      t[i] = !0
    }), t
  }

  function cr() {
    u.addEventListener ? (u.removeEventListener("DOMContentLoaded", a, !1), n.removeEventListener("load", a, !1)) : (u.detachEvent("onreadystatechange", a), n.detachEvent("onload", a))
  }

  function a() {
    (u.addEventListener || event.type === "load" || u.readyState === "complete") && (cr(), i.ready())
  }

  function yr(n, t, r) {
    if (r === undefined && n.nodeType === 1) {
      var u = "data-" + t.replace(vr, "-$1").toLowerCase();
      if (r = n.getAttribute(u), typeof r == "string") {
        try {
          r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : ar.test(r) ? i.parseJSON(r) : r
        } catch (f) {}
        i.data(n, t, r)
      } else
        r = undefined
    }
    return r
  }

  function ei(n) {
    for (var t in n)
      if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON")
        return !1;
    return !0
  }

  function pr(n, t, r, u) {
    if (i.acceptData(n)) {
      var s, e, h = i.expando,
        l = n.nodeType,
        o = l ? i.cache : n,
        f = l ? n[h] : n[h] && h;
      if (f && o[f] && (u || o[f].data) || r !== undefined || typeof t != "string")
        return f || (f = l ? n[h] = c.pop() || i.guid++ : h), o[f] || (o[f] = l ? {} : {
          toJSON: i.noop
        }), (typeof t == "object" || typeof t == "function") && (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)), e = o[f], u || (e.data || (e.data = {}), e = e.data), r !== undefined && (e[i.camelCase(t)] = r), typeof t == "string" ? (s = e[t], s == null && (s = e[i.camelCase(t)])) : s = e, s
    }
  }

  function wr(n, t, u) {
    if (i.acceptData(n)) {
      var e, s, h = n.nodeType,
        f = h ? i.cache : n,
        o = h ? n[i.expando] : i.expando;
      if (f[o]) {
        if (t && (e = u ? f[o] : f[o].data, e)) {
          for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" ")), s = t.length; s--;)
            delete e[t[s]];
          if (u ? !ei(e) : !i.isEmptyObject(e))
            return
        }
        (u || (delete f[o].data, ei(f[o]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[o] : f[o] = null)
      }
    }
  }

  function vt() {
    return !0
  }

  function it() {
    return !1
  }

  function dr() {
    try {
      return u.activeElement
    } catch (n) {}
  }

  function gr(n) {
    var i = nu.split("|"),
      t = n.createDocumentFragment();
    if (t.createElement)
      while (i.length)
        t.createElement(i.pop());
    return t
  }

  function f(n, t) {
    var e, u, s = 0,
      r = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(t || "*") : undefined;
    if (!r)
      for (r = [], e = n.childNodes || n;
        (u = e[s]) != null; s++)
        !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
    return t === undefined || t && i.nodeName(n, t) ? i.merge([n], r) : r
  }

  function we(n) {
    oi.test(n.type) && (n.defaultChecked = n.checked)
  }

  function eu(n, t) {
    return i.nodeName(n, "table") && i.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
  }

  function ou(n) {
    return n.type = (i.find.attr(n, "type") !== null) + "/" + n.type, n
  }

  function su(n) {
    var t = ve.exec(n.type);
    return t ? n.type = t[1] : n.removeAttribute("type"), n
  }

  function li(n, t) {
    for (var u, r = 0;
      (u = n[r]) != null; r++)
      i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
  }

  function hu(n, t) {
    if (t.nodeType === 1 && i.hasData(n)) {
      var u, f, o, s = i._data(n),
        r = i._data(t, s),
        e = s.events;
      if (e) {
        delete r.handle;
        r.events = {};
        for (u in e)
          for (f = 0, o = e[u].length; f < o; f++)
            i.event.add(t, u, e[u][f])
      }
      r.data && (r.data = i.extend({}, r.data))
    }
  }

  function be(n, t) {
    var u, e, f;
    if (t.nodeType === 1) {
      if (u = t.nodeName.toLowerCase(), !r.noCloneEvent && t[i.expando]) {
        f = i._data(t);
        for (e in f.events)
          i.removeEvent(t, e, f.handle);
        t.removeAttribute(i.expando)
      }
      u === "script" && t.text !== n.text ? (ou(t).text = n.text, su(t)) : u === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML), r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : u === "input" && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : u === "option" ? t.defaultSelected = t.selected = n.defaultSelected : (u === "input" || u === "textarea") && (t.defaultValue = n.defaultValue)
    }
  }

  function cu(t, r) {
    var f, u = i(r.createElement(t)).appendTo(r.body),
      e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display");
    return u.detach(), e
  }

  function yt(n) {
    var r = u,
      t = ai[n];
    return t || (t = cu(n, r), t !== "none" && t || (ot = (ot || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = (ot[0].contentWindow || ot[0].contentDocument).document, r.write(), r.close(), t = cu(n, r), ot.detach()), ai[n] = t), t
  }

  function au(n, t) {
    return {
      get: function() {
        var i = n();
        if (i != null) {
          if (i) {
            delete this.get;
            return
          }
          return (this.get = t).apply(this, arguments)
        }
      }
    }
  }

  function pu(n, t) {
    if (t in n)
      return t;
    for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = yu.length; i--;)
      if (t = yu[i] + r, t in n)
        return t;
    return u
  }

  function wu(n, t) {
    for (var f, r, o, e = [], u = 0, s = n.length; u < s; u++)
      (r = n[u], r.style) && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || f !== "none" || (r.style.display = ""), r.style.display === "" && et(r) && (e[u] = i._data(r, "olddisplay", yt(r.nodeName)))) : (o = et(r), (f && f !== "none" || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
    for (u = 0; u < s; u++)
      (r = n[u], r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[u] || "" : "none"));
    return n
  }

  function bu(n, t, i) {
    var r = no.exec(t);
    return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
  }

  function ku(n, t, r, u, f) {
    for (var e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2)
      r === "margin" && (o += i.css(n, r + w[e], !0, f)), u ? (r === "content" && (o -= i.css(n, "padding" + w[e], !0, f)), r !== "margin" && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), r !== "padding" && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
    return o
  }

  function du(n, t, u) {
    var o = !0,
      f = t === "width" ? n.offsetWidth : n.offsetHeight,
      e = k(n),
      s = r.boxSizing && i.css(n, "boxSizing", !1, e) === "border-box";
    if (f <= 0 || f == null) {
      if (f = d(n, t, e), (f < 0 || f == null) && (f = n.style[t]), pt.test(f))
        return f;
      o = s && (r.boxSizingReliable() || f === n.style[t]);
      f = parseFloat(f) || 0
    }
    return f + ku(n, t, u || (s ? "border" : "content"), o, e) + "px"
  }

  function e(n, t, i, r, u) {
    return new e.prototype.init(n, t, i, r, u)
  }

  function nf() {
    return setTimeout(function() {
      rt = undefined
    }), rt = i.now()
  }

  function kt(n, t) {
    var r, i = {
        height: n
      },
      u = 0;
    for (t = t ? 1 : 0; u < 4; u += 2 - t)
      r = w[u], i["margin" + r] = i["padding" + r] = n;
    return t && (i.opacity = i.width = n), i
  }

  function tf(n, t, i) {
    for (var u, f = (st[t] || []).concat(st["*"]), r = 0, e = f.length; r < e; r++)
      if (u = f[r].call(i, t, n))
        return u
  }

  function fo(n, t, u) {
    var f, a, p, v, s, w, h, b, l = this,
      y = {},
      o = n.style,
      c = n.nodeType && et(n),
      e = i._data(n, "fxshow");
    u.queue || (s = i._queueHooks(n, "fx"), s.unqueued == null && (s.unqueued = 0, w = s.empty.fire, s.empty.fire = function() {
      s.unqueued || w()
    }), s.unqueued++, l.always(function() {
      l.always(function() {
        s.unqueued--;
        i.queue(n, "fx").length || s.empty.fire()
      })
    }));
    n.nodeType === 1 && ("height" in t || "width" in t) && (u.overflow = [o.overflow, o.overflowX, o.overflowY], h = i.css(n, "display"), b = h === "none" ? i._data(n, "olddisplay") || yt(n.nodeName) : h, b === "inline" && i.css(n, "float") === "none" && (r.inlineBlockNeedsLayout && yt(n.nodeName) !== "inline" ? o.zoom = 1 : o.display = "inline-block"));
    u.overflow && (o.overflow = "hidden", r.shrinkWrapBlocks() || l.always(function() {
      o.overflow = u.overflow[0];
      o.overflowX = u.overflow[1];
      o.overflowY = u.overflow[2]
    }));
    for (f in t)
      if (a = t[f], ro.exec(a)) {
        if (delete t[f], p = p || a === "toggle", a === (c ? "hide" : "show"))
          if (a === "show" && e && e[f] !== undefined)
            c = !0;
          else
            continue;
        y[f] = e && e[f] || i.style(n, f)
      } else
        h = undefined;
    if (i.isEmptyObject(y))
      (h === "none" ? yt(n.nodeName) : h) === "inline" && (o.display = h);
    else {
      e ? "hidden" in e && (c = e.hidden) : e = i._data(n, "fxshow", {});
      p && (e.hidden = !c);
      c ? i(n).show() : l.done(function() {
        i(n).hide()
      });
      l.done(function() {
        var t;
        i._removeData(n, "fxshow");
        for (t in y)
          i.style(n, t, y[t])
      });
      for (f in y)
        v = tf(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = f === "width" || f === "height" ? 1 : 0))
    }
  }

  function eo(n, t) {
    var r, f, e, u, o;
    for (r in n)
      if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
        u = o.expand(u);
        delete n[f];
        for (r in u)
          r in n || (n[r] = u[r], t[r] = e)
      } else
        t[f] = e
  }

  function rf(n, t, r) {
    var e, o, s = 0,
      l = bt.length,
      f = i.Deferred().always(function() {
        delete c.elem
      }),
      c = function() {
        if (o)
          return !1;
        for (var s = rt || nf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++)
          u.tweens[r].run(i);
        return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1)
      },
      u = f.promise({
        elem: n,
        props: i.extend({}, t),
        opts: i.extend(!0, {
          specialEasing: {}
        }, r),
        originalProperties: t,
        originalOptions: r,
        startTime: rt || nf(),
        duration: r.duration,
        tweens: [],
        createTween: function(t, r) {
          var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
          return u.tweens.push(f), f
        },
        stop: function(t) {
          var i = 0,
            r = t ? u.tweens.length : 0;
          if (o)
            return this;
          for (o = !0; i < r; i++)
            u.tweens[i].run(1);
          return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
        }
      }),
      h = u.props;
    for (eo(h, u.opts.specialEasing); s < l; s++)
      if (e = bt[s].call(u, n, h, u.opts), e)
        return e;
    return i.map(h, tf, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
      elem: n,
      anim: u,
      queue: u.opts.queue
    })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
  }

  function af(n) {
    return function(t, r) {
      typeof t != "string" && (r = t, t = "*");
      var u, f = 0,
        e = t.toLowerCase().match(h) || [];
      if (i.isFunction(r))
        while (u = e[f++])
          u.charAt(0) === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
    }
  }

  function vf(n, t, r, u) {
    function e(s) {
      var h;
      return f[s] = !0, i.each(n[s] || [], function(n, i) {
        var s = i(t, r, u);
        if (typeof s != "string" || o || f[s]) {
          if (o)
            return !(h = s)
        } else
          return t.dataTypes.unshift(s), e(s), !1
      }), h
    }
    var f = {},
      o = n === bi;
    return e(t.dataTypes[0]) || !f["*"] && e("*")
  }

  function ki(n, t) {
    var u, r, f = i.ajaxSettings.flatOptions || {};
    for (r in t)
      t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
    return u && i.extend(!0, n, u), n
  }

  function ao(n, t, i) {
    for (var o, e, u, f, s = n.contents, r = n.dataTypes; r[0] === "*";)
      r.shift(), e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
    if (e)
      for (f in s)
        if (s[f] && s[f].test(e)) {
          r.unshift(f);
          break
        }
    if (r[0] in i)
      u = r[0];
    else {
      for (f in i) {
        if (!r[0] || n.converters[f + " " + r[0]]) {
          u = f;
          break
        }
        o || (o = f)
      }
      u = u || o
    }
    if (u)
      return u !== r[0] && r.unshift(u), i[u]
  }

  function vo(n, t, i, r) {
    var h, u, f, s, e, o = {},
      c = n.dataTypes.slice();
    if (c[1])
      for (f in n.converters)
        o[f.toLowerCase()] = n.converters[f];
    for (u = c.shift(); u;)
      if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift(), u)
        if (u === "*")
          u = e;
        else if (e !== "*" && e !== u) {
      if (f = o[e + " " + u] || o["* " + u], !f)
        for (h in o)
          if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]], f)) {
            f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
            break
          }
      if (f !== !0)
        if (f && n.throws)
          t = f(t);
        else
          try {
            t = f(t)
          } catch (l) {
            return {
              state: "parsererror",
              error: f ? l : "No conversion from " + e + " to " + u
            }
          }
    }
    return {
      state: "success",
      data: t
    }
  }

  function di(n, t, r, u) {
    var f;
    if (i.isArray(t))
      i.each(t, function(t, i) {
        r || po.test(n) ? u(n, i) : di(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
      });
    else if (r || i.type(t) !== "object")
      u(n, t);
    else
      for (f in t)
        di(n + "[" + f + "]", t[f], r, u)
  }

  function pf() {
    try {
      return new n.XMLHttpRequest
    } catch (t) {}
  }

  function go() {
    try {
      return new n.ActiveXObject("Microsoft.XMLHTTP")
    } catch (t) {}
  }

  function wf(n) {
    return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
  }
  var c = [],
    l = c.slice,
    ir = c.concat,
    ii = c.push,
    rr = c.indexOf,
    ct = {},
    df = ct.toString,
    tt = ct.hasOwnProperty,
    r = {},
    ur = "1.11.1",
    i = function(n, t) {
      return new i.fn.init(n, t)
    },
    gf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ne = /^-ms-/,
    te = /-([\da-z])/gi,
    ie = function(n, t) {
      return t.toUpperCase()
    },
    p, or, sr, h, fi, lt, o, lr, ar, vr, ot, ai, uf, ef, of, gt, gi, ti, nr, tr, bf, kf;
  i.fn = i.prototype = {
    jquery: ur,
    constructor: i,
    selector: "",
    length: 0,
    toArray: function() {
      return l.call(this)
    },
    get: function(n) {
      return n != null ? n < 0 ? this[n + this.length] : this[n] : l.call(this)
    },
    pushStack: function(n) {
      var t = i.merge(this.constructor(), n);
      return t.prevObject = this, t.context = this.context, t
    },
    each: function(n, t) {
      return i.each(this, n, t)
    },
    map: function(n) {
      return this.pushStack(i.map(this, function(t, i) {
        return n.call(t, i, t)
      }))
    },
    slice: function() {
      return this.pushStack(l.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(n) {
      var i = this.length,
        t = +n + (n < 0 ? i : 0);
      return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: ii,
    sort: c.sort,
    splice: c.splice
  };
  i.extend = i.fn.extend = function() {
    var r, e, t, f, o, s, n = arguments[0] || {},
      u = 1,
      c = arguments.length,
      h = !1;
    for (typeof n == "boolean" && (h = n, n = arguments[u] || {}, u++), typeof n == "object" || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++)
      if ((o = arguments[u]) != null)
        for (f in o)
          (r = n[f], t = o[f], n !== t) && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : t !== undefined && (n[f] = t));
    return n
  };
  i.extend({
    expando: "jQuery" + (ur + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(n) {
      throw new Error(n);
    },
    noop: function() {},
    isFunction: function(n) {
      return i.type(n) === "function"
    },
    isArray: Array.isArray || function(n) {
      return i.type(n) === "array"
    },
    isWindow: function(n) {
      return n != null && n == n.window
    },
    isNumeric: function(n) {
      return !i.isArray(n) && n - parseFloat(n) >= 0
    },
    isEmptyObject: function(n) {
      for (var t in n)
        return !1;
      return !0
    },
    isPlainObject: function(n) {
      var t;
      if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n))
        return !1;
      try {
        if (n.constructor && !tt.call(n, "constructor") && !tt.call(n.constructor.prototype, "isPrototypeOf"))
          return !1
      } catch (u) {
        return !1
      }
      if (r.ownLast)
        for (t in n)
          return tt.call(n, t);
      for (t in n)
      ;
      return t === undefined || tt.call(n, t)
    },
    type: function(n) {
      return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? ct[df.call(n)] || "object" : typeof n
    },
    globalEval: function(t) {
      t && i.trim(t) && (n.execScript || function(t) {
        n.eval.call(n, t)
      })(t)
    },
    camelCase: function(n) {
      return n.replace(ne, "ms-").replace(te, ie)
    },
    nodeName: function(n, t) {
      return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(n, t, i) {
      var u, r = 0,
        f = n.length,
        e = ri(n);
      if (i) {
        if (e) {
          for (; r < f; r++)
            if (u = t.apply(n[r], i), u === !1)
              break
        } else
          for (r in n)
            if (u = t.apply(n[r], i), u === !1)
              break
      } else if (e) {
        for (; r < f; r++)
          if (u = t.call(n[r], r, n[r]), u === !1)
            break
      } else
        for (r in n)
          if (u = t.call(n[r], r, n[r]), u === !1)
            break;
      return n
    },
    trim: function(n) {
      return n == null ? "" : (n + "").replace(gf, "")
    },
    makeArray: function(n, t) {
      var r = t || [];
      return n != null && (ri(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : ii.call(r, n)), r
    },
    inArray: function(n, t, i) {
      var r;
      if (t) {
        if (rr)
          return rr.call(t, n, i);
        for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
          if (i in t && t[i] === n)
            return i
      }
      return -1
    },
    merge: function(n, t) {
      for (var r = +t.length, i = 0, u = n.length; i < r;)
        n[u++] = t[i++];
      if (r !== r)
        while (t[i] !== undefined)
          n[u++] = t[i++];
      return n.length = u, n
    },
    grep: function(n, t, i) {
      for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++)
        u = !t(n[r], r), u !== o && f.push(n[r]);
      return f
    },
    map: function(n, t, i) {
      var u, r = 0,
        e = n.length,
        o = ri(n),
        f = [];
      if (o)
        for (; r < e; r++)
          u = t(n[r], r, i), u != null && f.push(u);
      else
        for (r in n)
          u = t(n[r], r, i), u != null && f.push(u);
      return ir.apply([], f)
    },
    guid: 1,
    proxy: function(n, t) {
      var u, r, f;
      return (typeof t == "string" && (f = n[t], t = n, n = f), !i.isFunction(n)) ? undefined : (u = l.call(arguments, 2), r = function() {
        return n.apply(t || this, u.concat(l.call(arguments)))
      }, r.guid = n.guid = n.guid || i.guid++, r)
    },
    now: function() {
      return +new Date
    },
    support: r
  });
  i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
    ct["[object " + t + "]"] = t.toLowerCase()
  });
  p = function(n) {
    function r(n, t, i, r) {
      var w, h, c, v, k, y, d, l, nt, g;
      if ((t ? t.ownerDocument || t : s) !== e && p(t), t = t || e, i = i || [], !n || typeof n != "string")
        return i;
      if ((v = t.nodeType) !== 1 && v !== 9)
        return [];
      if (a && !r) {
        if (w = sr.exec(n))
          if (c = w[1]) {
            if (v === 9)
              if (h = t.getElementById(c), h && h.parentNode) {
                if (h.id === c)
                  return i.push(h), i
              } else
                return i;
            else if (t.ownerDocument && (h = t.ownerDocument.getElementById(c)) && ot(t, h) && h.id === c)
              return i.push(h), i
          } else {
            if (w[2])
              return b.apply(i, t.getElementsByTagName(n)), i;
            if ((c = w[3]) && u.getElementsByClassName && t.getElementsByClassName)
              return b.apply(i, t.getElementsByClassName(c)), i
          }
        if (u.qsa && (!o || !o.test(n))) {
          if (l = d = f, nt = t, g = v === 9 && n, v === 1 && t.nodeName.toLowerCase() !== "object") {
            for (y = et(n), (d = t.getAttribute("id")) ? l = d.replace(hr, "\\$&") : t.setAttribute("id", l), l = "[id='" + l + "'] ", k = y.length; k--;)
              y[k] = l + yt(y[k]);
            nt = gt.test(n) && ii(t.parentNode) || t;
            g = y.join(",")
          }
          if (g)
            try {
              return b.apply(i, nt.querySelectorAll(g)), i
            } catch (tt) {} finally {
              d || t.removeAttribute("id")
            }
        }
      }
      return si(n.replace(at, "$1"), t, i, r)
    }

    function ni() {
      function n(r, u) {
        return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
      }
      var i = [];
      return n
    }

    function h(n) {
      return n[f] = !0, n
    }

    function c(n) {
      var t = e.createElement("div");
      try {
        return !!n(t)
      } catch (i) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t);
        t = null
      }
    }

    function ti(n, i) {
      for (var u = n.split("|"), r = n.length; r--;)
        t.attrHandle[u[r]] = i
    }

    function wi(n, t) {
      var i = t && n,
        r = i && n.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || ai) - (~n.sourceIndex || ai);
      if (r)
        return r;
      if (i)
        while (i = i.nextSibling)
          if (i === t)
            return -1;
      return n ? 1 : -1
    }

    function cr(n) {
      return function(t) {
        var i = t.nodeName.toLowerCase();
        return i === "input" && t.type === n
      }
    }

    function lr(n) {
      return function(t) {
        var i = t.nodeName.toLowerCase();
        return (i === "input" || i === "button") && t.type === n
      }
    }

    function tt(n) {
      return h(function(t) {
        return t = +t, h(function(i, r) {
          for (var u, f = n([], i.length, t), e = f.length; e--;)
            i[u = f[e]] && (i[u] = !(r[u] = i[u]))
        })
      })
    }

    function ii(n) {
      return n && typeof n.getElementsByTagName !== ut && n
    }

    function bi() {}

    function yt(n) {
      for (var t = 0, r = n.length, i = ""; t < r; t++)
        i += n[t].value;
      return i
    }

    function ri(n, t, i) {
      var r = t.dir,
        u = i && r === "parentNode",
        e = ki++;
      return t.first ? function(t, i, f) {
        while (t = t[r])
          if (t.nodeType === 1 || u)
            return n(t, i, f)
      } : function(t, i, o) {
        var s, h, c = [v, e];
        if (o) {
          while (t = t[r])
            if ((t.nodeType === 1 || u) && n(t, i, o))
              return !0
        } else
          while (t = t[r])
            if (t.nodeType === 1 || u) {
              if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === v && s[1] === e)
                return c[2] = s[2];
              if (h[r] = c, c[2] = n(t, i, o))
                return !0
            }
      }
    }

    function ui(n) {
      return n.length > 1 ? function(t, i, r) {
        for (var u = n.length; u--;)
          if (!n[u](t, i, r))
            return !1;
        return !0
      } : n[0]
    }

    function ar(n, t, i) {
      for (var u = 0, f = t.length; u < f; u++)
        r(n, t[u], i);
      return i
    }

    function pt(n, t, i, r, u) {
      for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)
        (e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
      return o
    }

    function fi(n, t, i, r, u, e) {
      return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), h(function(f, e, o, s) {
        var l, c, a, p = [],
          y = [],
          w = e.length,
          k = f || ar(t || "*", o.nodeType ? [o] : o, []),
          v = n && (f || !t) ? pt(k, p, n, o, s) : k,
          h = i ? u || (f ? n : w || r) ? [] : e : v;
        if (i && i(v, h, o, s), r)
          for (l = pt(h, y), r(l, [], o, s), c = l.length; c--;)
            (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
        if (f) {
          if (u || n) {
            if (u) {
              for (l = [], c = h.length; c--;)
                (a = h[c]) && l.push(v[c] = a);
              u(null, h = [], l, s)
            }
            for (c = h.length; c--;)
              (a = h[c]) && (l = u ? nt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
          }
        } else
          h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
      })
    }

    function ei(n) {
      for (var s, u, r, o = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function(n) {
          return n === s
        }, c, !0), a = ri(function(n) {
          return nt.call(s, n) > -1
        }, c, !0), e = [function(n, t, i) {
          return !h && (i || t !== ct) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
        }]; i < o; i++)
        if (u = t.relative[n[i].type])
          e = [ri(ui(e), u)];
        else {
          if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
            for (r = ++i; r < o; r++)
              if (t.relative[n[r].type])
                break;
            return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
              value: n[i - 2].type === " " ? "*" : ""
            })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < o && ei(n = n.slice(r)), r < o && yt(n))
          }
          e.push(u)
        }
      return ui(e)
    }

    function vr(n, i) {
      var u = i.length > 0,
        f = n.length > 0,
        o = function(o, s, h, c, l) {
          var y, d, w, k = 0,
            a = "0",
            g = o && [],
            p = [],
            nt = ct,
            tt = o || f && t.find.TAG("*", l),
            it = v += nt == null ? 1 : Math.random() || .1,
            rt = tt.length;
          for (l && (ct = s !== e && s); a !== rt && (y = tt[a]) != null; a++) {
            if (f && y) {
              for (d = 0; w = n[d++];)
                if (w(y, s, h)) {
                  c.push(y);
                  break
                }
              l && (v = it)
            }
            u && ((y = !w && y) && k--, o && g.push(y))
          }
          if (k += a, u && a !== k) {
            for (d = 0; w = i[d++];)
              w(g, p, s, h);
            if (o) {
              if (k > 0)
                while (a--)
                  g[a] || p[a] || (p[a] = gi.call(c));
              p = pt(p)
            }
            b.apply(c, p);
            l && !o && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
          }
          return l && (v = it, ct = nt), g
        };
      return u ? h(o) : o
    }
    var it, u, t, ht, oi, et, wt, si, ct, y, rt, p, e, l, a, o, g, lt, ot, f = "sizzle" + -new Date,
      s = n.document,
      v = 0,
      ki = 0,
      hi = ni(),
      ci = ni(),
      li = ni(),
      bt = function(n, t) {
        return n === t && (rt = !0), 0
      },
      ut = typeof undefined,
      ai = -2147483648,
      di = {}.hasOwnProperty,
      w = [],
      gi = w.pop,
      nr = w.push,
      b = w.push,
      vi = w.slice,
      nt = w.indexOf || function(n) {
        for (var t = 0, i = this.length; t < i; t++)
          if (this[t] === n)
            return t;
        return -1
      },
      kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      i = "[\\x20\\t\\r\\n\\f]",
      ft = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      yi = ft.replace("w", "w#"),
      pi = "\\[" + i + "*(" + ft + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + yi + "))|)" + i + "*\\]",
      dt = ":(" + ft + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + pi + ")*)|.*)\\)|)",
      at = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
      tr = new RegExp("^" + i + "*," + i + "*"),
      ir = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
      rr = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
      ur = new RegExp(dt),
      fr = new RegExp("^" + yi + "$"),
      vt = {
        ID: new RegExp("^#(" + ft + ")"),
        CLASS: new RegExp("^\\.(" + ft + ")"),
        TAG: new RegExp("^(" + ft.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + pi),
        PSEUDO: new RegExp("^" + dt),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + kt + ")$", "i"),
        needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
      },
      er = /^(?:input|select|textarea|button)$/i,
      or = /^h\d$/i,
      st = /^[^{]+\{\s*\[native \w/,
      sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      gt = /[+~]/,
      hr = /'|\\/g,
      k = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
      d = function(n, t, i) {
        var r = "0x" + t - 65536;
        return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
      };
    try {
      b.apply(w = vi.call(s.childNodes), s.childNodes);
      w[s.childNodes.length].nodeType
    } catch (yr) {
      b = {
        apply: w.length ? function(n, t) {
          nr.apply(n, vi.call(t))
        } : function(n, t) {
          for (var i = n.length, r = 0; n[i++] = t[r++];)
          ;
          n.length = i - 1
        }
      }
    }
    u = r.support = {};
    oi = r.isXML = function(n) {
      var t = n && (n.ownerDocument || n).documentElement;
      return t ? t.nodeName !== "HTML" : !1
    };
    p = r.setDocument = function(n) {
      var v, r = n ? n.ownerDocument || n : s,
        h = r.defaultView;
      return r === e || r.nodeType !== 9 || !r.documentElement ? e : (e = r, l = r.documentElement, a = !oi(r), h && h !== h.top && (h.addEventListener ? h.addEventListener("unload", function() {
        p()
      }, !1) : h.attachEvent && h.attachEvent("onunload", function() {
        p()
      })), u.attributes = c(function(n) {
        return n.className = "i", !n.getAttribute("className")
      }), u.getElementsByTagName = c(function(n) {
        return n.appendChild(r.createComment("")), !n.getElementsByTagName("*").length
      }), u.getElementsByClassName = st.test(r.getElementsByClassName) && c(function(n) {
        return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>", n.firstChild.className = "i", n.getElementsByClassName("i").length === 2
      }), u.getById = c(function(n) {
        return l.appendChild(n).id = f, !r.getElementsByName || !r.getElementsByName(f).length
      }), u.getById ? (t.find.ID = function(n, t) {
        if (typeof t.getElementById !== ut && a) {
          var i = t.getElementById(n);
          return i && i.parentNode ? [i] : []
        }
      }, t.filter.ID = function(n) {
        var t = n.replace(k, d);
        return function(n) {
          return n.getAttribute("id") === t
        }
      }) : (delete t.find.ID, t.filter.ID = function(n) {
        var t = n.replace(k, d);
        return function(n) {
          var i = typeof n.getAttributeNode !== ut && n.getAttributeNode("id");
          return i && i.value === t
        }
      }), t.find.TAG = u.getElementsByTagName ? function(n, t) {
        if (typeof t.getElementsByTagName !== ut)
          return t.getElementsByTagName(n)
      } : function(n, t) {
        var i, r = [],
          f = 0,
          u = t.getElementsByTagName(n);
        if (n === "*") {
          while (i = u[f++])
            i.nodeType === 1 && r.push(i);
          return r
        }
        return u
      }, t.find.CLASS = u.getElementsByClassName && function(n, t) {
        if (typeof t.getElementsByClassName !== ut && a)
          return t.getElementsByClassName(n)
      }, g = [], o = [], (u.qsa = st.test(r.querySelectorAll)) && (c(function(n) {
        n.innerHTML = "<select msallowclip=''><option selected=''><\/option><\/select>";
        n.querySelectorAll("[msallowclip^='']").length && o.push("[*^$]=" + i + "*(?:''|\"\")");
        n.querySelectorAll("[selected]").length || o.push("\\[" + i + "*(?:value|" + kt + ")");
        n.querySelectorAll(":checked").length || o.push(":checked")
      }), c(function(n) {
        var t = r.createElement("input");
        t.setAttribute("type", "hidden");
        n.appendChild(t).setAttribute("name", "D");
        n.querySelectorAll("[name=d]").length && o.push("name" + i + "*[*^$|!~]?=");
        n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
        n.querySelectorAll("*,:x");
        o.push(",.*:")
      })), (u.matchesSelector = st.test(lt = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.oMatchesSelector || l.msMatchesSelector)) && c(function(n) {
        u.disconnectedMatch = lt.call(n, "div");
        lt.call(n, "[s!='']:x");
        g.push("!=", dt)
      }), o = o.length && new RegExp(o.join("|")), g = g.length && new RegExp(g.join("|")), v = st.test(l.compareDocumentPosition), ot = v || st.test(l.contains) ? function(n, t) {
        var r = n.nodeType === 9 ? n.documentElement : n,
          i = t && t.parentNode;
        return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
      } : function(n, t) {
        if (t)
          while (t = t.parentNode)
            if (t === n)
              return !0;
        return !1
      }, bt = v ? function(n, t) {
        if (n === t)
          return rt = !0, 0;
        var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
        return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, i & 1 || !u.sortDetached && t.compareDocumentPosition(n) === i) ? n === r || n.ownerDocument === s && ot(s, n) ? -1 : t === r || t.ownerDocument === s && ot(s, t) ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0 : i & 4 ? -1 : 1
      } : function(n, t) {
        if (n === t)
          return rt = !0, 0;
        var i, u = 0,
          o = n.parentNode,
          h = t.parentNode,
          f = [n],
          e = [t];
        if (o && h) {
          if (o === h)
            return wi(n, t)
        } else
          return n === r ? -1 : t === r ? 1 : o ? -1 : h ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0;
        for (i = n; i = i.parentNode;)
          f.unshift(i);
        for (i = t; i = i.parentNode;)
          e.unshift(i);
        while (f[u] === e[u])
          u++;
        return u ? wi(f[u], e[u]) : f[u] === s ? -1 : e[u] === s ? 1 : 0
      }, r)
    };
    r.matches = function(n, t) {
      return r(n, null, null, t)
    };
    r.matchesSelector = function(n, t) {
      if ((n.ownerDocument || n) !== e && p(n), t = t.replace(rr, "='$1']"), u.matchesSelector && a && (!g || !g.test(t)) && (!o || !o.test(t)))
        try {
          var i = lt.call(n, t);
          if (i || u.disconnectedMatch || n.document && n.document.nodeType !== 11)
            return i
        } catch (f) {}
      return r(t, e, null, [n]).length > 0
    };
    r.contains = function(n, t) {
      return (n.ownerDocument || n) !== e && p(n), ot(n, t)
    };
    r.attr = function(n, i) {
      (n.ownerDocument || n) !== e && p(n);
      var f = t.attrHandle[i.toLowerCase()],
        r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !a) : undefined;
      return r !== undefined ? r : u.attributes || !a ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null
    };
    r.error = function(n) {
      throw new Error("Syntax error, unrecognized expression: " + n);
    };
    r.uniqueSort = function(n) {
      var r, f = [],
        t = 0,
        i = 0;
      if (rt = !u.detectDuplicates, y = !u.sortStable && n.slice(0), n.sort(bt), rt) {
        while (r = n[i++])
          r === n[i] && (t = f.push(i));
        while (t--)
          n.splice(f[t], 1)
      }
      return y = null, n
    };
    ht = r.getText = function(n) {
      var r, i = "",
        u = 0,
        t = n.nodeType;
      if (t) {
        if (t === 1 || t === 9 || t === 11) {
          if (typeof n.textContent == "string")
            return n.textContent;
          for (n = n.firstChild; n; n = n.nextSibling)
            i += ht(n)
        } else if (t === 3 || t === 4)
          return n.nodeValue
      } else
        while (r = n[u++])
          i += ht(r);
      return i
    };
    t = r.selectors = {
      cacheLength: 50,
      createPseudo: h,
      match: vt,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(n) {
          return n[1] = n[1].replace(k, d), n[3] = (n[3] || n[4] || n[5] || "").replace(k, d), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
        },
        CHILD: function(n) {
          return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && r.error(n[0]), n
        },
        PSEUDO: function(n) {
          var i, t = !n[6] && n[2];
          return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && ur.test(t) && (i = et(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
        }
      },
      filter: {
        TAG: function(n) {
          var t = n.replace(k, d).toLowerCase();
          return n === "*" ? function() {
            return !0
          } : function(n) {
            return n.nodeName && n.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(n) {
          var t = hi[n + " "];
          return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && hi(n, function(n) {
            return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute !== ut && n.getAttribute("class") || "")
          })
        },
        ATTR: function(n, t, i) {
          return function(u) {
            var f = r.attr(u, n);
            return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
          }
        },
        CHILD: function(n, t, i, r, u) {
          var s = n.slice(0, 3) !== "nth",
            o = n.slice(-4) !== "last",
            e = t === "of-type";
          return r === 1 && u === 0 ? function(n) {
            return !!n.parentNode
          } : function(t, i, h) {
            var a, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
              p = t.parentNode,
              g = e && t.nodeName.toLowerCase(),
              d = !h && !e;
            if (p) {
              if (s) {
                while (b) {
                  for (c = t; c = c[b];)
                    if (e ? c.nodeName.toLowerCase() === g : c.nodeType === 1)
                      return !1;
                  w = b = n === "only" && !w && "nextSibling"
                }
                return !0
              }
              if (w = [o ? p.firstChild : p.lastChild], o && d) {
                for (k = p[f] || (p[f] = {}), a = k[n] || [], y = a[0] === v && a[1], l = a[0] === v && a[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                  if (c.nodeType === 1 && ++l && c === t) {
                    k[n] = [v, y, l];
                    break
                  }
              } else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v)
                l = a[1];
              else
                while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                  if ((e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [v, l]), c === t))
                    break;
              return l -= u, l === r || l % r == 0 && l / r >= 0
            }
          }
        },
        PSEUDO: function(n, i) {
          var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
          return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? h(function(n, t) {
            for (var r, f = u(n, i), e = f.length; e--;)
              r = nt.call(n, f[e]), n[r] = !(t[r] = f[e])
          }) : function(n) {
            return u(n, 0, e)
          }) : u
        }
      },
      pseudos: {
        not: h(function(n) {
          var i = [],
            r = [],
            t = wt(n.replace(at, "$1"));
          return t[f] ? h(function(n, i, r, u) {
            for (var e, o = t(n, null, u, []), f = n.length; f--;)
              (e = o[f]) && (n[f] = !(i[f] = e))
          }) : function(n, u, f) {
            return i[0] = n, t(i, null, f, r), !r.pop()
          }
        }),
        has: h(function(n) {
          return function(t) {
            return r(n, t).length > 0
          }
        }),
        contains: h(function(n) {
          return function(t) {
            return (t.textContent || t.innerText || ht(t)).indexOf(n) > -1
          }
        }),
        lang: h(function(n) {
          return fr.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(k, d).toLowerCase(),
            function(t) {
              var i;
              do
                if (i = a ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0;
              while ((t = t.parentNode) && t.nodeType === 1);
              return !1
            }
        }),
        target: function(t) {
          var i = n.location && n.location.hash;
          return i && i.slice(1) === t.id
        },
        root: function(n) {
          return n === l
        },
        focus: function(n) {
          return n === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
        },
        enabled: function(n) {
          return n.disabled === !1
        },
        disabled: function(n) {
          return n.disabled === !0
        },
        checked: function(n) {
          var t = n.nodeName.toLowerCase();
          return t === "input" && !!n.checked || t === "option" && !!n.selected
        },
        selected: function(n) {
          return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
        },
        empty: function(n) {
          for (n = n.firstChild; n; n = n.nextSibling)
            if (n.nodeType < 6)
              return !1;
          return !0
        },
        parent: function(n) {
          return !t.pseudos.empty(n)
        },
        header: function(n) {
          return or.test(n.nodeName)
        },
        input: function(n) {
          return er.test(n.nodeName)
        },
        button: function(n) {
          var t = n.nodeName.toLowerCase();
          return t === "input" && n.type === "button" || t === "button"
        },
        text: function(n) {
          var t;
          return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
        },
        first: tt(function() {
          return [0]
        }),
        last: tt(function(n, t) {
          return [t - 1]
        }),
        eq: tt(function(n, t, i) {
          return [i < 0 ? i + t : i]
        }),
        even: tt(function(n, t) {
          for (var i = 0; i < t; i += 2)
            n.push(i);
          return n
        }),
        odd: tt(function(n, t) {
          for (var i = 1; i < t; i += 2)
            n.push(i);
          return n
        }),
        lt: tt(function(n, t, i) {
          for (var r = i < 0 ? i + t : i; --r >= 0;)
            n.push(r);
          return n
        }),
        gt: tt(function(n, t, i) {
          for (var r = i < 0 ? i + t : i; ++r < t;)
            n.push(r);
          return n
        })
      }
    };
    t.pseudos.nth = t.pseudos.eq;
    for (it in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      })
      t.pseudos[it] = cr(it);
    for (it in {
        submit: !0,
        reset: !0
      })
      t.pseudos[it] = lr(it);
    return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, et = r.tokenize = function(n, i) {
      var e, f, s, o, u, h, c, l = ci[n + " "];
      if (l)
        return i ? 0 : l.slice(0);
      for (u = n, h = [], c = t.preFilter; u;) {
        (!e || (f = tr.exec(u))) && (f && (u = u.slice(f[0].length) || u), h.push(s = []));
        e = !1;
        (f = ir.exec(u)) && (e = f.shift(), s.push({
          value: e,
          type: f[0].replace(at, " ")
        }), u = u.slice(e.length));
        for (o in t.filter)
          (f = vt[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
            value: e,
            type: o,
            matches: f
          }), u = u.slice(e.length));
        if (!e)
          break
      }
      return i ? u.length : u ? r.error(n) : ci(n, h).slice(0)
    }, wt = r.compile = function(n, t) {
      var r, u = [],
        e = [],
        i = li[n + " "];
      if (!i) {
        for (t || (t = et(n)), r = t.length; r--;)
          i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
        i = li(n, vr(e, u));
        i.selector = n
      }
      return i
    }, si = r.select = function(n, i, r, f) {
      var s, e, o, l, v, c = typeof n == "function" && n,
        h = !f && et(n = c.selector || n);
      if (r = r || [], h.length === 1) {
        if (e = h[0] = h[0].slice(0), e.length > 2 && (o = e[0]).type === "ID" && u.getById && i.nodeType === 9 && a && t.relative[e[1].type]) {
          if (i = (t.find.ID(o.matches[0].replace(k, d), i) || [])[0], i)
            c && (i = i.parentNode);
          else
            return r;
          n = n.slice(e.shift().value.length)
        }
        for (s = vt.needsContext.test(n) ? 0 : e.length; s--;) {
          if (o = e[s], t.relative[l = o.type])
            break;
          if ((v = t.find[l]) && (f = v(o.matches[0].replace(k, d), gt.test(e[0].type) && ii(i.parentNode) || i))) {
            if (e.splice(s, 1), n = f.length && yt(e), !n)
              return b.apply(r, f), r;
            break
          }
        }
      }
      return (c || wt(n, h))(f, i, !a, r, gt.test(n) && ii(i.parentNode) || i), r
    }, u.sortStable = f.split("").sort(bt).join("") === f, u.detectDuplicates = !!rt, p(), u.sortDetached = c(function(n) {
      return n.compareDocumentPosition(e.createElement("div")) & 1
    }), c(function(n) {
      return n.innerHTML = "<a href='#'><\/a>", n.firstChild.getAttribute("href") === "#"
    }) || ti("type|href|height|width", function(n, t, i) {
      if (!i)
        return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
    }), u.attributes && c(function(n) {
      return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), n.firstChild.getAttribute("value") === ""
    }) || ti("value", function(n, t, i) {
      if (!i && n.nodeName.toLowerCase() === "input")
        return n.defaultValue
    }), c(function(n) {
      return n.getAttribute("disabled") == null
    }) || ti(kt, function(n, t, i) {
      var r;
      if (!i)
        return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
    }), r
  }(n);
  i.find = p;
  i.expr = p.selectors;
  i.expr[":"] = i.expr.pseudos;
  i.unique = p.uniqueSort;
  i.text = p.getText;
  i.isXMLDoc = p.isXML;
  i.contains = p.contains;
  var fr = i.expr.match.needsContext,
    er = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    re = /^.[^:#\[\.,]*$/;
  i.filter = function(n, t, r) {
    var u = t[0];
    return r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1 ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
      return n.nodeType === 1
    }))
  };
  i.fn.extend({
    find: function(n) {
      var t, r = [],
        u = this,
        f = u.length;
      if (typeof n != "string")
        return this.pushStack(i(n).filter(function() {
          for (t = 0; t < f; t++)
            if (i.contains(u[t], this))
              return !0
        }));
      for (t = 0; t < f; t++)
        i.find(n, u[t], r);
      return r = this.pushStack(f > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
    },
    filter: function(n) {
      return this.pushStack(ui(this, n || [], !1))
    },
    not: function(n) {
      return this.pushStack(ui(this, n || [], !0))
    },
    is: function(n) {
      return !!ui(this, typeof n == "string" && fr.test(n) ? i(n) : n || [], !1).length
    }
  });
  var ft, u = n.document,
    ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    fe = i.fn.init = function(n, t) {
      var r, f;
      if (!n)
        return this;
      if (typeof n == "string") {
        if (r = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : ue.exec(n), r && (r[1] || !t)) {
          if (r[1]) {
            if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), er.test(r[1]) && i.isPlainObject(t))
              for (r in t)
                i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
          }
          if (f = u.getElementById(r[2]), f && f.parentNode) {
            if (f.id !== r[2])
              return ft.find(n);
            this.length = 1;
            this[0] = f
          }
          return this.context = u, this.selector = n, this
        }
        return !t || t.jquery ? (t || ft).find(n) : this.constructor(t).find(n)
      }
      return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? typeof ft.ready != "undefined" ? ft.ready(n) : n(i) : (n.selector !== undefined && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
    };
  fe.prototype = i.fn;
  ft = i(u);
  or = /^(?:parents|prev(?:Until|All))/;
  sr = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  i.extend({
    dir: function(n, t, r) {
      for (var f = [], u = n[t]; u && u.nodeType !== 9 && (r === undefined || u.nodeType !== 1 || !i(u).is(r));)
        u.nodeType === 1 && f.push(u), u = u[t];
      return f
    },
    sibling: function(n, t) {
      for (var i = []; n; n = n.nextSibling)
        n.nodeType === 1 && n !== t && i.push(n);
      return i
    }
  });
  i.fn.extend({
    has: function(n) {
      var t, r = i(n, this),
        u = r.length;
      return this.filter(function() {
        for (t = 0; t < u; t++)
          if (i.contains(this, r[t]))
            return !0
      })
    },
    closest: function(n, t) {
      for (var r, f = 0, o = this.length, u = [], e = fr.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
        for (r = this[f]; r && r !== t; r = r.parentNode)
          if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
            u.push(r);
            break
          }
      return this.pushStack(u.length > 1 ? i.unique(u) : u)
    },
    index: function(n) {
      return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(n, t) {
      return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
    },
    addBack: function(n) {
      return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
    }
  });
  i.each({
    parent: function(n) {
      var t = n.parentNode;
      return t && t.nodeType !== 11 ? t : null
    },
    parents: function(n) {
      return i.dir(n, "parentNode")
    },
    parentsUntil: function(n, t, r) {
      return i.dir(n, "parentNode", r)
    },
    next: function(n) {
      return hr(n, "nextSibling")
    },
    prev: function(n) {
      return hr(n, "previousSibling")
    },
    nextAll: function(n) {
      return i.dir(n, "nextSibling")
    },
    prevAll: function(n) {
      return i.dir(n, "previousSibling")
    },
    nextUntil: function(n, t, r) {
      return i.dir(n, "nextSibling", r)
    },
    prevUntil: function(n, t, r) {
      return i.dir(n, "previousSibling", r)
    },
    siblings: function(n) {
      return i.sibling((n.parentNode || {}).firstChild, n)
    },
    children: function(n) {
      return i.sibling(n.firstChild)
    },
    contents: function(n) {
      return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
    }
  }, function(n, t) {
    i.fn[n] = function(r, u) {
      var f = i.map(this, t, r);
      return n.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (f = i.filter(u, f)), this.length > 1 && (sr[n] || (f = i.unique(f)), or.test(n) && (f = f.reverse())), this.pushStack(f)
    }
  });
  h = /\S+/g;
  fi = {};
  i.Callbacks = function(n) {
    n = typeof n == "string" ? fi[n] || ee(n) : i.extend({}, n);
    var o, u, h, f, e, c, t = [],
      r = !n.once && [],
      l = function(i) {
        for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && e < f; e++)
          if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
            u = !1;
            break
          }
        o = !1;
        t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
      },
      s = {
        add: function() {
          if (t) {
            var r = t.length;
            (function e(r) {
              i.each(r, function(r, u) {
                var f = i.type(u);
                f === "function" ? n.unique && s.has(u) || t.push(u) : u && u.length && f !== "string" && e(u)
              })
            })(arguments);
            o ? f = t.length : u && (c = r, l(u))
          }
          return this
        },
        remove: function() {
          return t && i.each(arguments, function(n, r) {
            for (var u;
              (u = i.inArray(r, t, u)) > -1;)
              t.splice(u, 1), o && (u <= f && f--, u <= e && e--)
          }), this
        },
        has: function(n) {
          return n ? i.inArray(n, t) > -1 : !!(t && t.length)
        },
        empty: function() {
          return t = [], f = 0, this
        },
        disable: function() {
          return t = r = u = undefined, this
        },
        disabled: function() {
          return !t
        },
        lock: function() {
          return r = undefined, u || s.disable(), this
        },
        locked: function() {
          return !r
        },
        fireWith: function(n, i) {
          return t && (!h || r) && (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this
        },
        fire: function() {
          return s.fireWith(this, arguments), this
        },
        fired: function() {
          return !!h
        }
      };
    return s
  };
  i.extend({
    Deferred: function(n) {
      var u = [
          ["resolve", "done", i.Callbacks("once memory"), "resolved"],
          ["reject", "fail", i.Callbacks("once memory"), "rejected"],
          ["notify", "progress", i.Callbacks("memory")]
        ],
        f = "pending",
        r = {
          state: function() {
            return f
          },
          always: function() {
            return t.done(arguments).fail(arguments), this
          },
          then: function() {
            var n = arguments;
            return i.Deferred(function(f) {
              i.each(u, function(u, e) {
                var o = i.isFunction(n[u]) && n[u];
                t[e[1]](function() {
                  var n = o && o.apply(this, arguments);
                  n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                })
              });
              n = null
            }).promise()
          },
          promise: function(n) {
            return n != null ? i.extend(n, r) : r
          }
        },
        t = {};
      return r.pipe = r.then, i.each(u, function(n, i) {
        var e = i[2],
          o = i[3];
        r[i[1]] = e.add;
        o && e.add(function() {
          f = o
        }, u[n ^ 1][2].disable, u[2][2].lock);
        t[i[0]] = function() {
          return t[i[0] + "With"](this === t ? r : this, arguments), this
        };
        t[i[0] + "With"] = e.fireWith
      }), r.promise(t), n && n.call(t, t), t
    },
    when: function(n) {
      var t = 0,
        u = l.call(arguments),
        r = u.length,
        e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
        f = e === 1 ? n : i.Deferred(),
        h = function(n, t, i) {
          return function(r) {
            t[n] = this;
            i[n] = arguments.length > 1 ? l.call(arguments) : r;
            i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
          }
        },
        o, c, s;
      if (r > 1)
        for (o = new Array(r), c = new Array(r), s = new Array(r); t < r; t++)
          u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
      return e || f.resolveWith(s, u), f.promise()
    }
  });
  i.fn.ready = function(n) {
    return i.ready.promise().done(n), this
  };
  i.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(n) {
      n ? i.readyWait++ : i.ready(!0)
    },
    ready: function(n) {
      if (n === !0 ? !--i.readyWait : !i.isReady) {
        if (!u.body)
          return setTimeout(i.ready);
        (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (lt.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready")))
      }
    }
  });
  i.ready.promise = function(t) {
    if (!lt)
      if (lt = i.Deferred(), u.readyState === "complete")
        setTimeout(i.ready);
      else if (u.addEventListener)
      u.addEventListener("DOMContentLoaded", a, !1), n.addEventListener("load", a, !1);
    else {
      u.attachEvent("onreadystatechange", a);
      n.attachEvent("onload", a);
      var r = !1;
      try {
        r = n.frameElement == null && u.documentElement
      } catch (e) {}
      r && r.doScroll && function f() {
        if (!i.isReady) {
          try {
            r.doScroll("left")
          } catch (n) {
            return setTimeout(f, 50)
          }
          cr();
          i.ready()
        }
      }()
    }
    return lt.promise(t)
  };
  o = typeof undefined;
  for (lr in i(r))
    break;
  r.ownLast = lr !== "0";
  r.inlineBlockNeedsLayout = !1;
  i(function() {
      var f, t, n, i;
      (n = u.getElementsByTagName("body")[0], n && n.style) && (t = u.createElement("div"), i = u.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== o && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", r.inlineBlockNeedsLayout = f = t.offsetWidth === 3, f && (n.style.zoom = 1)), n.removeChild(i))
    }),
    function() {
      var n = u.createElement("div");
      if (r.deleteExpando == null) {
        r.deleteExpando = !0;
        try {
          delete n.test
        } catch (t) {
          r.deleteExpando = !1
        }
      }
      n = null
    }();
  i.acceptData = function(n) {
    var t = i.noData[(n.nodeName + " ").toLowerCase()],
      r = +n.nodeType || 1;
    return r !== 1 && r !== 9 ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
  };
  ar = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
  vr = /([A-Z])/g;
  i.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(n) {
      return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ei(n)
    },
    data: function(n, t, i) {
      return pr(n, t, i)
    },
    removeData: function(n, t) {
      return wr(n, t)
    },
    _data: function(n, t, i) {
      return pr(n, t, i, !0)
    },
    _removeData: function(n, t) {
      return wr(n, t, !0)
    }
  });
  i.fn.extend({
    data: function(n, t) {
      var f, u, e, r = this[0],
        o = r && r.attributes;
      if (n === undefined) {
        if (this.length && (e = i.data(r), r.nodeType === 1 && !i._data(r, "parsedAttrs"))) {
          for (f = o.length; f--;)
            o[f] && (u = o[f].name, u.indexOf("data-") === 0 && (u = i.camelCase(u.slice(5)), yr(r, u, e[u])));
          i._data(r, "parsedAttrs", !0)
        }
        return e
      }
      return typeof n == "object" ? this.each(function() {
        i.data(this, n)
      }) : arguments.length > 1 ? this.each(function() {
        i.data(this, n, t)
      }) : r ? yr(r, n, i.data(r, n)) : undefined
    },
    removeData: function(n) {
      return this.each(function() {
        i.removeData(this, n)
      })
    }
  });
  i.extend({
    queue: function(n, t, r) {
      var u;
      if (n)
        return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
    },
    dequeue: function(n, t) {
      t = t || "fx";
      var r = i.queue(n, t),
        e = r.length,
        u = r.shift(),
        f = i._queueHooks(n, t),
        o = function() {
          i.dequeue(n, t)
        };
      u === "inprogress" && (u = r.shift(), e--);
      u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
      !e && f && f.empty.fire()
    },
    _queueHooks: function(n, t) {
      var r = t + "queueHooks";
      return i._data(n, r) || i._data(n, r, {
        empty: i.Callbacks("once memory").add(function() {
          i._removeData(n, t + "queue");
          i._removeData(n, r)
        })
      })
    }
  });
  i.fn.extend({
    queue: function(n, t) {
      var r = 2;
      return (typeof n != "string" && (t = n, n = "fx", r--), arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function() {
        var r = i.queue(this, n, t);
        i._queueHooks(this, n);
        n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
      })
    },
    dequeue: function(n) {
      return this.each(function() {
        i.dequeue(this, n)
      })
    },
    clearQueue: function(n) {
      return this.queue(n || "fx", [])
    },
    promise: function(n, t) {
      var r, f = 1,
        e = i.Deferred(),
        u = this,
        o = this.length,
        s = function() {
          --f || e.resolveWith(u, [u])
        };
      for (typeof n != "string" && (t = n, n = undefined), n = n || "fx"; o--;)
        r = i._data(u[o], n + "queueHooks"), r && r.empty && (f++, r.empty.add(s));
      return s(), e.promise(t)
    }
  });
  var at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    w = ["Top", "Right", "Bottom", "Left"],
    et = function(n, t) {
      return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
    },
    b = i.access = function(n, t, r, u, f, e, o) {
      var s = 0,
        c = n.length,
        h = r == null;
      if (i.type(r) === "object") {
        f = !0;
        for (s in r)
          i.access(n, t, s, r[s], !0, e, o)
      } else if (u !== undefined && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
          return h.call(i(n), r)
        })), t))
        for (; s < c; s++)
          t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
      return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    },
    oi = /^(?:checkbox|radio)$/i;
  (function() {
    var t = u.createElement("input"),
      n = u.createElement("div"),
      i = u.createDocumentFragment();
    if (n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", r.leadingWhitespace = n.firstChild.nodeType === 3, r.tbody = !n.getElementsByTagName("tbody").length, r.htmlSerialize = !!n.getElementsByTagName("link").length, r.html5Clone = u.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>", t.type = "checkbox", t.checked = !0, i.appendChild(t), r.appendChecked = t.checked, n.innerHTML = "<textarea>x<\/textarea>", r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, i.appendChild(n), n.innerHTML = "<input type='radio' checked='checked' name='t'/>", r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, r.noCloneEvent = !0, n.attachEvent && (n.attachEvent("onclick", function() {
        r.noCloneEvent = !1
      }), n.cloneNode(!0).click()), r.deleteExpando == null) {
      r.deleteExpando = !0;
      try {
        delete n.test
      } catch (f) {
        r.deleteExpando = !1
      }
    }
  })(),
  function() {
    var t, i, f = u.createElement("div");
    for (t in {
        submit: !0,
        change: !0,
        focusin: !0
      })
      i = "on" + t, (r[t + "Bubbles"] = i in n) || (f.setAttribute(i, "t"), r[t + "Bubbles"] = f.attributes[i].expando === !1);
    f = null
  }();
  var si = /^(?:input|select|textarea)$/i,
    oe = /^key/,
    se = /^(?:mouse|pointer|contextmenu)|click/,
    br = /^(?:focusinfocus|focusoutblur)$/,
    kr = /^([^.]*)(?:\.(.+)|)$/;
  i.event = {
    global: {},
    add: function(n, t, r, u, f) {
      var w, y, b, p, s, c, l, a, e, k, d, v = i._data(n);
      if (v) {
        for (r.handler && (p = r, r = p.handler, f = p.selector), r.guid || (r.guid = i.guid++), (y = v.events) || (y = v.events = {}), (c = v.handle) || (c = v.handle = function(n) {
            return typeof i !== o && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(c.elem, arguments) : undefined
          }, c.elem = n), t = (t || "").match(h) || [""], b = t.length; b--;)
          (w = kr.exec(t[b]) || [], e = d = w[1], k = (w[2] || "").split(".").sort(), e) && (s = i.event.special[e] || {}, e = (f ? s.delegateType : s.bindType) || e, s = i.event.special[e] || {}, l = i.extend({
            type: e,
            origType: d,
            data: u,
            handler: r,
            guid: r.guid,
            selector: f,
            needsContext: f && i.expr.match.needsContext.test(f),
            namespace: k.join(".")
          }, p), (a = y[e]) || (a = y[e] = [], a.delegateCount = 0, s.setup && s.setup.call(n, u, k, c) !== !1 || (n.addEventListener ? n.addEventListener(e, c, !1) : n.attachEvent && n.attachEvent("on" + e, c))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = r.guid)), f ? a.splice(a.delegateCount++, 0, l) : a.push(l), i.event.global[e] = !0);
        n = null
      }
    },
    remove: function(n, t, r, u, f) {
      var y, o, s, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
      if (v && (a = v.events)) {
        for (t = (t || "").match(h) || [""], p = t.length; p--;) {
          if (s = kr.exec(t[p]) || [], e = k = s[1], w = (s[2] || "").split(".").sort(), !e) {
            for (e in a)
              i.event.remove(n, e + t[p], r, u, !0);
            continue
          }
          for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], s = s[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;)
            o = l[y], (f || k === o.origType) && (!r || r.guid === o.guid) && (!s || s.test(o.namespace)) && (!u || u === o.selector || u === "**" && o.selector) && (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
          b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
        }
        i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
      }
    },
    trigger: function(t, r, f, e) {
      var l, a, o, p, c, h, w, y = [f || u],
        s = tt.call(t, "type") ? t.type : t,
        v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
      if ((o = h = f = f || u, f.nodeType !== 3 && f.nodeType !== 8) && !br.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (v = s.split("."), s = v.shift(), v.sort()), a = s.indexOf(":") < 0 && "on" + s, t = t[i.expando] ? t : new i.Event(s, typeof t == "object" && t), t.isTrigger = e ? 2 : 3, t.namespace = v.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = f), r = r == null ? [t] : i.makeArray(r, [t]), c = i.event.special[s] || {}, e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
        if (!e && !c.noBubble && !i.isWindow(f)) {
          for (p = c.delegateType || s, br.test(p + s) || (o = o.parentNode); o; o = o.parentNode)
            y.push(o), h = o;
          h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
        }
        for (w = 0;
          (o = y[w++]) && !t.isPropagationStopped();)
          t.type = w > 1 ? p : c.bindType || s, l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"), l && l.apply(o, r), l = a && o[a], l && l.apply && i.acceptData(o) && (t.result = l.apply(o, r), t.result === !1 && t.preventDefault());
        if (t.type = s, !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && i.acceptData(f) && a && f[s] && !i.isWindow(f)) {
          h = f[a];
          h && (f[a] = null);
          i.event.triggered = s;
          try {
            f[s]()
          } catch (b) {}
          i.event.triggered = undefined;
          h && (f[a] = h)
        }
        return t.result
      }
    },
    dispatch: function(n) {
      n = i.event.fix(n);
      var e, f, t, r, o, s = [],
        h = l.call(arguments),
        c = (i._data(this, "events") || {})[n.type] || [],
        u = i.event.special[n.type] || {};
      if (h[0] = n, n.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
        for (s = i.event.handlers.call(this, n, c), e = 0;
          (r = s[e++]) && !n.isPropagationStopped();)
          for (n.currentTarget = r.elem, o = 0;
            (t = r.handlers[o++]) && !n.isImmediatePropagationStopped();)
            (!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h), f !== undefined && (n.result = f) === !1 && (n.preventDefault(), n.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, n), n.result
      }
    },
    handlers: function(n, t) {
      var f, e, u, o, h = [],
        s = t.delegateCount,
        r = n.target;
      if (s && r.nodeType && (!n.button || n.type !== "click"))
        for (; r != this; r = r.parentNode || this)
          if (r.nodeType === 1 && (r.disabled !== !0 || n.type !== "click")) {
            for (u = [], o = 0; o < s; o++)
              e = t[o], f = e.selector + " ", u[f] === undefined && (u[f] = e.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(e);
            u.length && h.push({
              elem: r,
              handlers: u
            })
          }
      return s < t.length && h.push({
        elem: this,
        handlers: t.slice(s)
      }), h
    },
    fix: function(n) {
      if (n[i.expando])
        return n;
      var e, o, s, r = n.type,
        f = n,
        t = this.fixHooks[r];
      for (t || (this.fixHooks[r] = t = se.test(r) ? this.mouseHooks : oe.test(r) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;)
        o = s[e], n[o] = f[o];
      return n.target || (n.target = f.srcElement || u), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(n, t) {
        return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(n, t) {
        var i, e, r, f = t.button,
          o = t.fromElement;
        return n.pageX == null && t.clientX != null && (e = n.target.ownerDocument || u, r = e.documentElement, i = e.body, n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o), n.which || f === undefined || (n.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0), n
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== dr() && this.focus)
            try {
              return this.focus(), !1
            } catch (n) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === dr() && this.blur)
            return this.blur(), !1
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (i.nodeName(this, "input") && this.type === "checkbox" && this.click)
            return this.click(), !1
        },
        _default: function(n) {
          return i.nodeName(n.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(n) {
          n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
        }
      }
    },
    simulate: function(n, t, r, u) {
      var f = i.extend(new i.Event, r, {
        type: n,
        isSimulated: !0,
        originalEvent: {}
      });
      u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
      f.isDefaultPrevented() && r.preventDefault()
    }
  };
  i.removeEvent = u.removeEventListener ? function(n, t, i) {
    n.removeEventListener && n.removeEventListener(t, i, !1)
  } : function(n, t, i) {
    var r = "on" + t;
    n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
  };
  i.Event = function(n, t) {
    if (!(this instanceof i.Event))
      return new i.Event(n, t);
    n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? vt : it) : this.type = n;
    t && i.extend(this, t);
    this.timeStamp = n && n.timeStamp || i.now();
    this[i.expando] = !0
  };
  i.Event.prototype = {
    isDefaultPrevented: it,
    isPropagationStopped: it,
    isImmediatePropagationStopped: it,
    preventDefault: function() {
      var n = this.originalEvent;
      (this.isDefaultPrevented = vt, n) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
    },
    stopPropagation: function() {
      var n = this.originalEvent;
      (this.isPropagationStopped = vt, n) && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      var n = this.originalEvent;
      this.isImmediatePropagationStopped = vt;
      n && n.stopImmediatePropagation && n.stopImmediatePropagation();
      this.stopPropagation()
    }
  };
  i.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(n, t) {
    i.event.special[n] = {
      delegateType: t,
      bindType: t,
      handle: function(n) {
        var u, f = this,
          r = n.relatedTarget,
          e = n.handleObj;
        return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
      }
    }
  });
  r.submitBubbles || (i.event.special.submit = {
    setup: function() {
      if (i.nodeName(this, "form"))
        return !1;
      i.event.add(this, "click._submit keypress._submit", function(n) {
        var r = n.target,
          t = i.nodeName(r, "input") || i.nodeName(r, "button") ? r.form : undefined;
        t && !i._data(t, "submitBubbles") && (i.event.add(t, "submit._submit", function(n) {
          n._submit_bubble = !0
        }), i._data(t, "submitBubbles", !0))
      })
    },
    postDispatch: function(n) {
      n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
    },
    teardown: function() {
      if (i.nodeName(this, "form"))
        return !1;
      i.event.remove(this, "._submit")
    }
  });
  r.changeBubbles || (i.event.special.change = {
    setup: function() {
      if (si.test(this.nodeName))
        return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) {
          n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
        }), i.event.add(this, "click._change", function(n) {
          this._just_changed && !n.isTrigger && (this._just_changed = !1);
          i.event.simulate("change", this, n, !0)
        })), !1;
      i.event.add(this, "beforeactivate._change", function(n) {
        var t = n.target;
        si.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
          !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
        }), i._data(t, "changeBubbles", !0))
      })
    },
    handle: function(n) {
      var t = n.target;
      if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox")
        return n.handleObj.handler.apply(this, arguments)
    },
    teardown: function() {
      return i.event.remove(this, "._change"), !si.test(this.nodeName)
    }
  });
  r.focusinBubbles || i.each({
    focus: "focusin",
    blur: "focusout"
  }, function(n, t) {
    var r = function(n) {
      i.event.simulate(t, n.target, i.event.fix(n), !0)
    };
    i.event.special[t] = {
      setup: function() {
        var u = this.ownerDocument || this,
          f = i._data(u, t);
        f || u.addEventListener(n, r, !0);
        i._data(u, t, (f || 0) + 1)
      },
      teardown: function() {
        var u = this.ownerDocument || this,
          f = i._data(u, t) - 1;
        f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0), i._removeData(u, t))
      }
    }
  });
  i.fn.extend({
    on: function(n, t, r, u, f) {
      var o, e;
      if (typeof n == "object") {
        typeof t != "string" && (r = r || t, t = undefined);
        for (o in n)
          this.on(o, t, r, n[o], f);
        return this
      }
      if (r == null && u == null ? (u = t, r = t = undefined) : u == null && (typeof t == "string" ? (u = r, r = undefined) : (u = r, r = t, t = undefined)), u === !1)
        u = it;
      else if (!u)
        return this;
      return f === 1 && (e = u, u = function(n) {
        return i().off(n), e.apply(this, arguments)
      }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function() {
        i.event.add(this, n, u, r, t)
      })
    },
    one: function(n, t, i, r) {
      return this.on(n, t, i, r, 1)
    },
    off: function(n, t, r) {
      var u, f;
      if (n && n.preventDefault && n.handleObj)
        return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
      if (typeof n == "object") {
        for (f in n)
          this.off(f, t, n[f]);
        return this
      }
      return (t === !1 || typeof t == "function") && (r = t, t = undefined), r === !1 && (r = it), this.each(function() {
        i.event.remove(this, n, r, t)
      })
    },
    trigger: function(n, t) {
      return this.each(function() {
        i.event.trigger(n, t, this)
      })
    },
    triggerHandler: function(n, t) {
      var r = this[0];
      if (r)
        return i.event.trigger(n, t, r, !0)
    }
  });
  var nu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    he = / jQuery\d+="(?:null|\d+)"/g,
    tu = new RegExp("<(?:" + nu + ")[\\s/>]", "i"),
    hi = /^\s+/,
    iu = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ru = /<([\w:]+)/,
    uu = /<tbody/i,
    ce = /<|&#?\w+;/,
    le = /<(?:script|style|link)/i,
    ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    fu = /^$|\/(?:java|ecma)script/i,
    ve = /^true\/(.*)/,
    ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    s = {
      option: [1, "<select multiple='multiple'>", "<\/select>"],
      legend: [1, "<fieldset>", "<\/fieldset>"],
      area: [1, "<map>", "<\/map>"],
      param: [1, "<object>", "<\/object>"],
      thead: [1, "<table>", "<\/table>"],
      tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
      col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
      td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
      _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
    },
    pe = gr(u),
    ci = pe.appendChild(u.createElement("div"));
  s.optgroup = s.option;
  s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
  s.th = s.td;
  i.extend({
    clone: function(n, t, u) {
      var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
      if (r.html5Clone || i.isXMLDoc(n) || !tu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (ci.innerHTML = n.outerHTML, ci.removeChild(s = ci.firstChild)), (!r.noCloneEvent || !r.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
        for (e = f(s), h = f(n), o = 0;
          (c = h[o]) != null; ++o)
          e[o] && be(c, e[o]);
      if (t)
        if (u)
          for (h = h || f(n), e = e || f(s), o = 0;
            (c = h[o]) != null; o++)
            hu(c, e[o]);
        else
          hu(n, s);
      return e = f(s, "script"), e.length > 0 && li(e, !l && f(n, "script")), e = h = c = null, s
    },
    buildFragment: function(n, t, u, e) {
      for (var c, o, b, h, p, w, a, k = n.length, v = gr(t), l = [], y = 0; y < k; y++)
        if (o = n[y], o || o === 0)
          if (i.type(o) === "object")
            i.merge(l, o.nodeType ? [o] : o);
          else if (ce.test(o)) {
        for (h = h || v.appendChild(t.createElement("div")), p = (ru.exec(o) || ["", ""])[1].toLowerCase(), a = s[p] || s._default, h.innerHTML = a[1] + o.replace(iu, "<$1><\/$2>") + a[2], c = a[0]; c--;)
          h = h.lastChild;
        if (!r.leadingWhitespace && hi.test(o) && l.push(t.createTextNode(hi.exec(o)[0])), !r.tbody)
          for (o = p === "table" && !uu.test(o) ? h.firstChild : a[1] === "<table>" && !uu.test(o) ? h : 0, c = o && o.childNodes.length; c--;)
            i.nodeName(w = o.childNodes[c], "tbody") && !w.childNodes.length && o.removeChild(w);
        for (i.merge(l, h.childNodes), h.textContent = ""; h.firstChild;)
          h.removeChild(h.firstChild);
        h = v.lastChild
      } else
        l.push(t.createTextNode(o));
      for (h && v.removeChild(h), r.appendChecked || i.grep(f(l, "input"), we), y = 0; o = l[y++];)
        if ((!e || i.inArray(o, e) === -1) && (b = i.contains(o.ownerDocument, o), h = f(v.appendChild(o), "script"), b && li(h), u))
          for (c = 0; o = h[c++];)
            fu.test(o.type || "") && u.push(o);
      return h = null, v
    },
    cleanData: function(n, t) {
      for (var u, s, f, e, a = 0, h = i.expando, l = i.cache, v = r.deleteExpando, y = i.event.special;
        (u = n[a]) != null; a++)
        if ((t || i.acceptData(u)) && (f = u[h], e = f && l[f], e)) {
          if (e.events)
            for (s in e.events)
              y[s] ? i.event.remove(u, s) : i.removeEvent(u, s, e.handle);
          l[f] && (delete l[f], v ? delete u[h] : typeof u.removeAttribute !== o ? u.removeAttribute(h) : u[h] = null, c.push(f))
        }
    }
  });
  i.fn.extend({
    text: function(n) {
      return b(this, function(n) {
        return n === undefined ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
      }, null, n, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(n) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var t = eu(this, n);
          t.appendChild(n)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(n) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var t = eu(this, n);
          t.insertBefore(n, t.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(n) {
        this.parentNode && this.parentNode.insertBefore(n, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(n) {
        this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
      })
    },
    remove: function(n, t) {
      for (var r, e = n ? i.filter(n, this) : this, u = 0;
        (r = e[u]) != null; u++)
        t || r.nodeType !== 1 || i.cleanData(f(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && li(f(r, "script")), r.parentNode.removeChild(r));
      return this
    },
    empty: function() {
      for (var n, t = 0;
        (n = this[t]) != null; t++) {
        for (n.nodeType === 1 && i.cleanData(f(n, !1)); n.firstChild;)
          n.removeChild(n.firstChild);
        n.options && i.nodeName(n, "select") && (n.options.length = 0)
      }
      return this
    },
    clone: function(n, t) {
      return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
        return i.clone(this, n, t)
      })
    },
    html: function(n) {
      return b(this, function(n) {
        var t = this[0] || {},
          u = 0,
          e = this.length;
        if (n === undefined)
          return t.nodeType === 1 ? t.innerHTML.replace(he, "") : undefined;
        if (typeof n == "string" && !le.test(n) && (r.htmlSerialize || !tu.test(n)) && (r.leadingWhitespace || !hi.test(n)) && !s[(ru.exec(n) || ["", ""])[1].toLowerCase()]) {
          n = n.replace(iu, "<$1><\/$2>");
          try {
            for (; u < e; u++)
              t = this[u] || {}, t.nodeType === 1 && (i.cleanData(f(t, !1)), t.innerHTML = n);
            t = 0
          } catch (o) {}
        }
        t && this.empty().append(n)
      }, null, n, arguments.length)
    },
    replaceWith: function() {
      var n = arguments[0];
      return this.domManip(arguments, function(t) {
        n = this.parentNode;
        i.cleanData(f(this));
        n && n.replaceChild(t, this)
      }), n && (n.length || n.nodeType) ? this : this.remove()
    },
    detach: function(n) {
      return this.remove(n, !0)
    },
    domManip: function(n, t) {
      n = ir.apply([], n);
      var h, u, c, o, v, s, e = 0,
        l = this.length,
        p = this,
        w = l - 1,
        a = n[0],
        y = i.isFunction(a);
      if (y || l > 1 && typeof a == "string" && !r.checkClone && ae.test(a))
        return this.each(function(i) {
          var r = p.eq(i);
          y && (n[0] = a.call(this, i, r.html()));
          r.domManip(n, t)
        });
      if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, this), h = s.firstChild, s.childNodes.length === 1 && (s = h), h)) {
        for (o = i.map(f(s, "script"), ou), c = o.length; e < l; e++)
          u = s, e !== w && (u = i.clone(u, !0, !0), c && i.merge(o, f(u, "script"))), t.call(this[e], u, e);
        if (c)
          for (v = o[o.length - 1].ownerDocument, i.map(o, su), e = 0; e < c; e++)
            u = o[e], fu.test(u.type || "") && !i._data(u, "globalEval") && i.contains(v, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval((u.text || u.textContent || u.innerHTML || "").replace(ye, "")));
        s = h = null
      }
      return this
    }
  });
  i.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(n, t) {
    i.fn[n] = function(n) {
      for (var u, r = 0, f = [], e = i(n), o = e.length - 1; r <= o; r++)
        u = r === o ? this : this.clone(!0), i(e[r])[t](u), ii.apply(f, u.get());
      return this.pushStack(f)
    }
  });
  ai = {},
    function() {
      var n;
      r.shrinkWrapBlocks = function() {
        if (n != null)
          return n;
        n = !1;
        var t, i, r;
        if (i = u.getElementsByTagName("body")[0], i && i.style)
          return t = u.createElement("div"), r = u.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(r).appendChild(t), typeof t.style.zoom !== o && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(u.createElement("div")).style.width = "5px", n = t.offsetWidth !== 3), i.removeChild(r), n
      }
    }();
  var lu = /^margin/,
    pt = new RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"),
    k, d, ke = /^(top|right|bottom|left)$/;
  n.getComputedStyle ? (k = function(n) {
      return n.ownerDocument.defaultView.getComputedStyle(n, null)
    }, d = function(n, t, r) {
      var e, o, s, u, f = n.style;
      return r = r || k(n), u = r ? r.getPropertyValue(t) || r[t] : undefined, r && (u !== "" || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), pt.test(u) && lu.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), u === undefined ? u : u + ""
    }) : u.documentElement.currentStyle && (k = function(n) {
      return n.currentStyle
    }, d = function(n, t, i) {
      var o, f, e, r, u = n.style;
      return i = i || k(n), r = i ? i[t] : undefined, r == null && u && u[t] && (r = u[t]), pt.test(r) && !ke.test(t) && (o = u.left, f = n.runtimeStyle, e = f && f.left, e && (f.left = n.currentStyle.left), u.left = t === "fontSize" ? "1em" : r, r = u.pixelLeft + "px", u.left = o, e && (f.left = e)), r === undefined ? r : r + "" || "auto"
    }),
    function() {
      function c() {
        var i, r, f, t;
        (r = u.getElementsByTagName("body")[0], r && r.style) && (i = u.createElement("div"), f = u.createElement("div"), f.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", r.appendChild(f).appendChild(i), i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, h = !0, n.getComputedStyle && (o = (n.getComputedStyle(i, null) || {}).top !== "1%", s = (n.getComputedStyle(i, null) || {
          width: "4px"
        }).width === "4px", t = i.appendChild(u.createElement("div")), t.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", i.style.width = "1px", h = !parseFloat((n.getComputedStyle(t, null) || {}).marginRight)), i.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", e = t[0].offsetHeight === 0, e && (t[0].style.display = "", t[1].style.display = "none", e = t[0].offsetHeight === 0), r.removeChild(f))
      }
      var f, t, l, o, s, e, h;
      (f = u.createElement("div"), f.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", l = f.getElementsByTagName("a")[0], t = l && l.style, t) && (t.cssText = "float:left;opacity:.5", r.opacity = t.opacity === "0.5", r.cssFloat = !!t.cssFloat, f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", r.clearCloneStyle = f.style.backgroundClip === "content-box", r.boxSizing = t.boxSizing === "" || t.MozBoxSizing === "" || t.WebkitBoxSizing === "", i.extend(r, {
        reliableHiddenOffsets: function() {
          return e == null && c(), e
        },
        boxSizingReliable: function() {
          return s == null && c(), s
        },
        pixelPosition: function() {
          return o == null && c(), o
        },
        reliableMarginRight: function() {
          return h == null && c(), h
        }
      }))
    }();
  i.swap = function(n, t, i, r) {
    var f, u, e = {};
    for (u in t)
      e[u] = n.style[u], n.style[u] = t[u];
    f = i.apply(n, r || []);
    for (u in t)
      n.style[u] = e[u];
    return f
  };
  var vi = /alpha\([^)]*\)/i,
    de = /opacity\s*=\s*([^)]*)/,
    ge = /^(none|table(?!-c[ea]).+)/,
    no = new RegExp("^(" + at + ")(.*)$", "i"),
    to = new RegExp("^([+-])=(" + at + ")", "i"),
    io = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    vu = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    yu = ["Webkit", "O", "Moz", "ms"];
  i.extend({
    cssHooks: {
      opacity: {
        get: function(n, t) {
          if (t) {
            var i = d(n, "opacity");
            return i === "" ? "1" : i
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: r.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(n, t, u, f) {
      if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
        var o, h, e, s = i.camelCase(t),
          c = n.style;
        if (t = i.cssProps[s] || (i.cssProps[s] = pu(c, s)), e = i.cssHooks[t] || i.cssHooks[s], u !== undefined) {
          if (h = typeof u, h === "string" && (o = to.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), h = "number"), u == null || u !== u)
            return;
          if (h !== "number" || i.cssNumber[s] || (u += "px"), r.clearCloneStyle || u !== "" || t.indexOf("background") !== 0 || (c[t] = "inherit"), !e || !("set" in e) || (u = e.set(n, u, f)) !== undefined)
            try {
              c[t] = u
            } catch (l) {}
        } else
          return e && "get" in e && (o = e.get(n, !1, f)) !== undefined ? o : c[t]
      }
    },
    css: function(n, t, r, u) {
      var s, f, e, o = i.camelCase(t);
      return (t = i.cssProps[o] || (i.cssProps[o] = pu(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), f === undefined && (f = d(n, t, u)), f === "normal" && t in vu && (f = vu[t]), r === "" || r) ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
    }
  });
  i.each(["height", "width"], function(n, t) {
    i.cssHooks[t] = {
      get: function(n, r, u) {
        if (r)
          return ge.test(i.css(n, "display")) && n.offsetWidth === 0 ? i.swap(n, io, function() {
            return du(n, t, u)
          }) : du(n, t, u)
      },
      set: function(n, u, f) {
        var e = f && k(n);
        return bu(n, u, f ? ku(n, t, f, r.boxSizing && i.css(n, "boxSizing", !1, e) === "border-box", e) : 0)
      }
    }
  });
  r.opacity || (i.cssHooks.opacity = {
    get: function(n, t) {
      return de.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },
    set: function(n, t) {
      var r = n.style,
        u = n.currentStyle,
        e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
        f = u && u.filter || r.filter || "";
      (r.zoom = 1, (t >= 1 || t === "") && i.trim(f.replace(vi, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"), t === "" || u && !u.filter)) || (r.filter = vi.test(f) ? f.replace(vi, e) : f + " " + e)
    }
  });
  i.cssHooks.marginRight = au(r.reliableMarginRight, function(n, t) {
    if (t)
      return i.swap(n, {
        display: "inline-block"
      }, d, [n, "marginRight"])
  });
  i.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(n, t) {
    i.cssHooks[n + t] = {
      expand: function(i) {
        for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++)
          f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
        return f
      }
    };
    lu.test(n) || (i.cssHooks[n + t].set = bu)
  });
  i.fn.extend({
    css: function(n, t) {
      return b(this, function(n, t, r) {
        var f, e, o = {},
          u = 0;
        if (i.isArray(t)) {
          for (f = k(n), e = t.length; u < e; u++)
            o[t[u]] = i.css(n, t[u], !1, f);
          return o
        }
        return r !== undefined ? i.style(n, t, r) : i.css(n, t)
      }, n, t, arguments.length > 1)
    },
    show: function() {
      return wu(this, !0)
    },
    hide: function() {
      return wu(this)
    },
    toggle: function(n) {
      return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() {
        et(this) ? i(this).show() : i(this).hide()
      })
    }
  });
  i.Tween = e;
  e.prototype = {
    constructor: e,
    init: function(n, t, r, u, f, e) {
      this.elem = n;
      this.prop = r;
      this.easing = f || "swing";
      this.options = t;
      this.start = this.now = this.cur();
      this.end = u;
      this.unit = e || (i.cssNumber[r] ? "" : "px")
    },
    cur: function() {
      var n = e.propHooks[this.prop];
      return n && n.get ? n.get(this) : e.propHooks._default.get(this)
    },
    run: function(n) {
      var t, r = e.propHooks[this.prop];
      return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : e.propHooks._default.set(this), this
    }
  };
  e.prototype.init.prototype = e.prototype;
  e.propHooks = {
    _default: {
      get: function(n) {
        var t;
        return n.elem[n.prop] != null && (!n.elem.style || n.elem.style[n.prop] == null) ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t)
      },
      set: function(n) {
        i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
      }
    }
  };
  e.propHooks.scrollTop = e.propHooks.scrollLeft = {
    set: function(n) {
      n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
    }
  };
  i.easing = {
    linear: function(n) {
      return n
    },
    swing: function(n) {
      return .5 - Math.cos(n * Math.PI) / 2
    }
  };
  i.fx = e.prototype.init;
  i.fx.step = {};
  var rt, wt, ro = /^(?:toggle|show|hide)$/,
    gu = new RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
    uo = /queueHooks$/,
    bt = [fo],
    st = {
      "*": [function(n, t) {
        var f = this.createTween(n, t),
          s = f.cur(),
          u = gu.exec(t),
          e = u && u[3] || (i.cssNumber[n] ? "" : "px"),
          r = (i.cssNumber[n] || e !== "px" && +s) && gu.exec(i.css(f.elem, n)),
          o = 1,
          h = 20;
        if (r && r[3] !== e) {
          e = e || r[3];
          u = u || [];
          r = +s || 1;
          do
            o = o || ".5", r = r / o, i.style(f.elem, n, r + e);
          while (o !== (o = f.cur() / s) && o !== 1 && --h)
        }
        return u && (r = f.start = +r || +s || 0, f.unit = e, f.end = u[1] ? r + (u[1] + 1) * u[2] : +u[2]), f
      }]
    };
  i.Animation = i.extend(rf, {
    tweener: function(n, t) {
      i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
      for (var r, u = 0, f = n.length; u < f; u++)
        r = n[u], st[r] = st[r] || [], st[r].unshift(t)
    },
    prefilter: function(n, t) {
      t ? bt.unshift(n) : bt.push(n)
    }
  });
  i.speed = function(n, t, r) {
    var u = n && typeof n == "object" ? i.extend({}, n) : {
      complete: r || !r && t || i.isFunction(n) && n,
      duration: n,
      easing: r && t || t && !i.isFunction(t) && t
    };
    return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
      i.isFunction(u.old) && u.old.call(this);
      u.queue && i.dequeue(this, u.queue)
    }, u
  };
  i.fn.extend({
    fadeTo: function(n, t, i, r) {
      return this.filter(et).css("opacity", 0).show().end().animate({
        opacity: t
      }, n, i, r)
    },
    animate: function(n, t, r, u) {
      var o = i.isEmptyObject(n),
        e = i.speed(t, r, u),
        f = function() {
          var t = rf(this, i.extend({}, n), e);
          (o || i._data(this, "finish")) && t.stop(!0)
        };
      return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
    },
    stop: function(n, t, r) {
      var u = function(n) {
        var t = n.stop;
        delete n.stop;
        t(r)
      };
      return typeof n != "string" && (r = t, t = n, n = undefined), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
        var o = !0,
          t = n != null && n + "queueHooks",
          e = i.timers,
          f = i._data(this);
        if (t)
          f[t] && f[t].stop && u(f[t]);
        else
          for (t in f)
            f[t] && f[t].stop && uo.test(t) && u(f[t]);
        for (t = e.length; t--;)
          e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(r), o = !1, e.splice(t, 1));
        (o || !r) && i.dequeue(this, n)
      })
    },
    finish: function(n) {
      return n !== !1 && (n = n || "fx"), this.each(function() {
        var t, f = i._data(this),
          r = f[n + "queue"],
          e = f[n + "queueHooks"],
          u = i.timers,
          o = r ? r.length : 0;
        for (f.finish = !0, i.queue(this, n, []), e && e.stop && e.stop.call(this, !0), t = u.length; t--;)
          u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
        for (t = 0; t < o; t++)
          r[t] && r[t].finish && r[t].finish.call(this);
        delete f.finish
      })
    }
  });
  i.each(["toggle", "show", "hide"], function(n, t) {
    var r = i.fn[t];
    i.fn[t] = function(n, i, u) {
      return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(kt(t, !0), n, i, u)
    }
  });
  i.each({
    slideDown: kt("show"),
    slideUp: kt("hide"),
    slideToggle: kt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(n, t) {
    i.fn[n] = function(n, i, r) {
      return this.animate(t, n, i, r)
    }
  });
  i.timers = [];
  i.fx.tick = function() {
    var r, n = i.timers,
      t = 0;
    for (rt = i.now(); t < n.length; t++)
      r = n[t], r() || n[t] !== r || n.splice(t--, 1);
    n.length || i.fx.stop();
    rt = undefined
  };
  i.fx.timer = function(n) {
    i.timers.push(n);
    n() ? i.fx.start() : i.timers.pop()
  };
  i.fx.interval = 13;
  i.fx.start = function() {
    wt || (wt = setInterval(i.fx.tick, i.fx.interval))
  };
  i.fx.stop = function() {
    clearInterval(wt);
    wt = null
  };
  i.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  i.fn.delay = function(n, t) {
      return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
        var r = setTimeout(t, n);
        i.stop = function() {
          clearTimeout(r)
        }
      })
    },
    function() {
      var n, t, f, i, e;
      t = u.createElement("div");
      t.setAttribute("className", "t");
      t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
      i = t.getElementsByTagName("a")[0];
      f = u.createElement("select");
      e = f.appendChild(u.createElement("option"));
      n = t.getElementsByTagName("input")[0];
      i.style.cssText = "top:1px";
      r.getSetAttribute = t.className !== "t";
      r.style = /top/.test(i.getAttribute("style"));
      r.hrefNormalized = i.getAttribute("href") === "/a";
      r.checkOn = !!n.value;
      r.optSelected = e.selected;
      r.enctype = !!u.createElement("form").enctype;
      f.disabled = !0;
      r.optDisabled = !e.disabled;
      n = u.createElement("input");
      n.setAttribute("value", "");
      r.input = n.getAttribute("value") === "";
      n.value = "t";
      n.setAttribute("type", "radio");
      r.radioValue = n.value === "t"
    }();
  uf = /\r/g;
  i.fn.extend({
    val: function(n) {
      var t, r, f, u = this[0];
      return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
        var u;
        this.nodeType === 1 && (u = f ? n.call(this, r, i(this).val()) : n, u == null ? u = "" : typeof u == "number" ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
          return n == null ? "" : n + ""
        })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, u, "value") !== undefined || (this.value = u))
      })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && (r = t.get(u, "value")) !== undefined) ? r : (r = u.value, typeof r == "string" ? r.replace(uf, "") : r == null ? "" : r) : void 0
    }
  });
  i.extend({
    valHooks: {
      option: {
        get: function(n) {
          var t = i.find.attr(n, "value");
          return t != null ? t : i.trim(i.text(n))
        }
      },
      select: {
        get: function(n) {
          for (var o, t, s = n.options, u = n.selectedIndex, f = n.type === "select-one" || u < 0, h = f ? null : [], c = f ? u + 1 : s.length, e = u < 0 ? c : f ? u : 0; e < c; e++)
            if (t = s[e], (t.selected || e === u) && (r.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
              if (o = i(t).val(), f)
                return o;
              h.push(o)
            }
          return h
        },
        set: function(n, t) {
          for (var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--;)
            if (r = u[e], i.inArray(i.valHooks.option.get(r), o) >= 0)
              try {
                r.selected = f = !0
              } catch (s) {
                r.scrollHeight
              } else
              r.selected = !1;
          return f || (n.selectedIndex = -1), u
        }
      }
    }
  });
  i.each(["radio", "checkbox"], function() {
    i.valHooks[this] = {
      set: function(n, t) {
        if (i.isArray(t))
          return n.checked = i.inArray(i(n).val(), t) >= 0
      }
    };
    r.checkOn || (i.valHooks[this].get = function(n) {
      return n.getAttribute("value") === null ? "on" : n.value
    })
  });
  var ut, ff, v = i.expr.attrHandle,
    yi = /^(?:checked|selected)$/i,
    g = r.getSetAttribute,
    dt = r.input;
  i.fn.extend({
    attr: function(n, t) {
      return b(this, i.attr, n, t, arguments.length > 1)
    },
    removeAttr: function(n) {
      return this.each(function() {
        i.removeAttr(this, n)
      })
    }
  });
  i.extend({
    attr: function(n, t, r) {
      var u, f, e = n.nodeType;
      if (n && e !== 3 && e !== 8 && e !== 2) {
        if (typeof n.getAttribute === o)
          return i.prop(n, t, r);
        if (e === 1 && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? ff : ut)), r !== undefined)
          if (r === null)
            i.removeAttr(n, t);
          else
            return u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : (n.setAttribute(t, r + ""), r);
        else
          return u && "get" in u && (f = u.get(n, t)) !== null ? f : (f = i.find.attr(n, t), f == null ? undefined : f)
      }
    },
    removeAttr: function(n, t) {
      var r, u, e = 0,
        f = t && t.match(h);
      if (f && n.nodeType === 1)
        while (r = f[e++])
          u = i.propFix[r] || r, i.expr.match.bool.test(r) ? dt && g || !yi.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(g ? r : u)
    },
    attrHooks: {
      type: {
        set: function(n, t) {
          if (!r.radioValue && t === "radio" && i.nodeName(n, "input")) {
            var u = n.value;
            return n.setAttribute("type", t), u && (n.value = u), t
          }
        }
      }
    }
  });
  ff = {
    set: function(n, t, r) {
      return t === !1 ? i.removeAttr(n, r) : dt && g || !yi.test(r) ? n.setAttribute(!g && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
    }
  };
  i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
    var r = v[t] || i.find.attr;
    v[t] = dt && g || !yi.test(t) ? function(n, t, i) {
      var u, f;
      return i || (f = v[t], v[t] = u, u = r(n, t, i) != null ? t.toLowerCase() : null, v[t] = f), u
    } : function(n, t, r) {
      if (!r)
        return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
    }
  });
  dt && g || (i.attrHooks.value = {
    set: function(n, t, r) {
      if (i.nodeName(n, "input"))
        n.defaultValue = t;
      else
        return ut && ut.set(n, t, r)
    }
  });
  g || (ut = {
    set: function(n, t, i) {
      var r = n.getAttributeNode(i);
      return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)), r.value = t += "", i === "value" || t === n.getAttribute(i) ? t : void 0
    }
  }, v.id = v.name = v.coords = function(n, t, i) {
    var r;
    if (!i)
      return (r = n.getAttributeNode(t)) && r.value !== "" ? r.value : null
  }, i.valHooks.button = {
    get: function(n, t) {
      var i = n.getAttributeNode(t);
      if (i && i.specified)
        return i.value
    },
    set: ut.set
  }, i.attrHooks.contenteditable = {
    set: function(n, t, i) {
      ut.set(n, t === "" ? !1 : t, i)
    }
  }, i.each(["width", "height"], function(n, t) {
    i.attrHooks[t] = {
      set: function(n, i) {
        if (i === "")
          return n.setAttribute(t, "auto"), i
      }
    }
  }));
  r.style || (i.attrHooks.style = {
    get: function(n) {
      return n.style.cssText || undefined
    },
    set: function(n, t) {
      return n.style.cssText = t + ""
    }
  });
  ef = /^(?:input|select|textarea|button|object)$/i;
  of = /^(?:a|area)$/i;
  i.fn.extend({
    prop: function(n, t) {
      return b(this, i.prop, n, t, arguments.length > 1)
    },
    removeProp: function(n) {
      return n = i.propFix[n] || n, this.each(function() {
        try {
          this[n] = undefined;
          delete this[n]
        } catch (t) {}
      })
    }
  });
  i.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(n, t, r) {
      var f, u, o, e = n.nodeType;
      if (n && e !== 3 && e !== 8 && e !== 2)
        return o = e !== 1 || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), r !== undefined ? u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get" in u && (f = u.get(n, t)) !== null ? f : n[t]
    },
    propHooks: {
      tabIndex: {
        get: function(n) {
          var t = i.find.attr(n, "tabindex");
          return t ? parseInt(t, 10) : ef.test(n.nodeName) || of.test(n.nodeName) && n.href ? 0 : -1
        }
      }
    }
  });
  r.hrefNormalized || i.each(["href", "src"], function(n, t) {
    i.propHooks[t] = {
      get: function(n) {
        return n.getAttribute(t, 4)
      }
    }
  });
  r.optSelected || (i.propHooks.selected = {
    get: function(n) {
      var t = n.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }
  });
  i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    i.propFix[this.toLowerCase()] = this
  });
  r.enctype || (i.propFix.enctype = "encoding");
  gt = /[\t\r\n\f]/g;
  i.fn.extend({
    addClass: function(n) {
      var o, t, r, u, s, f, e = 0,
        c = this.length,
        l = typeof n == "string" && n;
      if (i.isFunction(n))
        return this.each(function(t) {
          i(this).addClass(n.call(this, t, this.className))
        });
      if (l)
        for (o = (n || "").match(h) || []; e < c; e++)
          if (t = this[e], r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(gt, " ") : " "), r) {
            for (s = 0; u = o[s++];)
              r.indexOf(" " + u + " ") < 0 && (r += u + " ");
            f = i.trim(r);
            t.className !== f && (t.className = f)
          }
      return this
    },
    removeClass: function(n) {
      var o, t, r, u, s, f, e = 0,
        c = this.length,
        l = arguments.length === 0 || typeof n == "string" && n;
      if (i.isFunction(n))
        return this.each(function(t) {
          i(this).removeClass(n.call(this, t, this.className))
        });
      if (l)
        for (o = (n || "").match(h) || []; e < c; e++)
          if (t = this[e], r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(gt, " ") : ""), r) {
            for (s = 0; u = o[s++];)
              while (r.indexOf(" " + u + " ") >= 0)
                r = r.replace(" " + u + " ", " ");
            f = n ? i.trim(r) : "";
            t.className !== f && (t.className = f)
          }
      return this
    },
    toggleClass: function(n, t) {
      var r = typeof n;
      return typeof t == "boolean" && r === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
        i(this).toggleClass(n.call(this, r, this.className, t), t)
      }) : this.each(function() {
        if (r === "string")
          for (var t, f = 0, u = i(this), e = n.match(h) || []; t = e[f++];)
            u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
        else
          (r === o || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
      })
    },
    hasClass: function(n) {
      for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
        if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(gt, " ").indexOf(i) >= 0)
          return !0;
      return !1
    }
  });
  i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
    i.fn[t] = function(n, i) {
      return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
    }
  });
  i.fn.extend({
    hover: function(n, t) {
      return this.mouseenter(n).mouseleave(t || n)
    },
    bind: function(n, t, i) {
      return this.on(n, null, t, i)
    },
    unbind: function(n, t) {
      return this.off(n, null, t)
    },
    delegate: function(n, t, i, r) {
      return this.on(t, n, i, r)
    },
    undelegate: function(n, t, i) {
      return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
    }
  });
  var pi = i.now(),
    wi = /\?/,
    oo = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  i.parseJSON = function(t) {
    if (n.JSON && n.JSON.parse)
      return n.JSON.parse(t + "");
    var f, r = null,
      u = i.trim(t + "");
    return u && !i.trim(u.replace(oo, function(n, t, i, u) {
      return (f && t && (r = 0), r === 0) ? n : (f = i || t, r += !u - !i, "")
    })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
  };
  i.parseXML = function(t) {
    var r, u;
    if (!t || typeof t != "string")
      return null;
    try {
      n.DOMParser ? (u = new DOMParser, r = u.parseFromString(t, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(t))
    } catch (f) {
      r = undefined
    }
    return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
  };
  var nt, y, so = /#.*$/,
    sf = /([?&])_=[^&]*/,
    ho = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    co = /^(?:GET|HEAD)$/,
    lo = /^\/\//,
    hf = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    cf = {},
    bi = {},
    lf = "*/".concat("*");
  try {
    y = location.href
  } catch (ns) {
    y = u.createElement("a");
    y.href = "";
    y = y.href
  }
  nt = hf.exec(y.toLowerCase()) || [];
  i.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: y,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": lf,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": i.parseJSON,
        "text xml": i.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(n, t) {
      return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
    },
    ajaxPrefilter: af(cf),
    ajaxTransport: af(bi),
    ajax: function(n, t) {
      function w(n, t, s, h) {
        var v, it, nt, y, w, c = t;
        e !== 2 && (e = 2, k && clearTimeout(k), l = undefined, b = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && n < 300 || n === 304, s && (y = ao(r, u, s)), y = vo(r, y, u, v), v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"), w && (i.lastModified[f] = w), w = u.getResponseHeader("etag"), w && (i.etag[f] = w)), n === 204 || r.type === "HEAD" ? c = "nocontent" : n === 304 ? c = "notmodified" : (c = y.state, it = y.data, nt = y.error, v = !nt)) : (nt = c, (n || !c) && (c = "error", n < 0 && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? g.resolveWith(o, [it, c, u]) : g.rejectWith(o, [u, c, nt]), u.statusCode(p), p = undefined, a && d.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : nt]), tt.fireWith(o, [u, c]), a && (d.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
      }
      typeof n == "object" && (t = n, n = undefined);
      t = t || {};
      var s, c, f, b, k, a, l, v, r = i.ajaxSetup({}, t),
        o = r.context || r,
        d = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
        g = i.Deferred(),
        tt = i.Callbacks("once memory"),
        p = r.statusCode || {},
        it = {},
        rt = {},
        e = 0,
        ut = "canceled",
        u = {
          readyState: 0,
          getResponseHeader: function(n) {
            var t;
            if (e === 2) {
              if (!v)
                for (v = {}; t = ho.exec(b);)
                  v[t[1].toLowerCase()] = t[2];
              t = v[n.toLowerCase()]
            }
            return t == null ? null : t
          },
          getAllResponseHeaders: function() {
            return e === 2 ? b : null
          },
          setRequestHeader: function(n, t) {
            var i = n.toLowerCase();
            return e || (n = rt[i] = rt[i] || n, it[n] = t), this
          },
          overrideMimeType: function(n) {
            return e || (r.mimeType = n), this
          },
          statusCode: function(n) {
            var t;
            if (n)
              if (e < 2)
                for (t in n)
                  p[t] = [p[t], n[t]];
              else
                u.always(n[u.status]);
            return this
          },
          abort: function(n) {
            var t = n || ut;
            return l && l.abort(t), w(0, t), this
          }
        };
      if (g.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || y) + "").replace(so, "").replace(lo, nt[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(h) || [""], r.crossDomain == null && (s = hf.exec(r.url.toLowerCase()), r.crossDomain = !!(s && (s[1] !== nt[1] || s[2] !== nt[2] || (s[3] || (s[1] === "http:" ? "80" : "443")) !== (nt[3] || (nt[1] === "http:" ? "80" : "443"))))), r.data && r.processData && typeof r.data != "string" && (r.data = i.param(r.data, r.traditional)), vf(cf, r, t, u), e === 2)
        return u;
      a = r.global;
      a && i.active++ == 0 && i.event.trigger("ajaxStart");
      r.type = r.type.toUpperCase();
      r.hasContent = !co.test(r.type);
      f = r.url;
      r.hasContent || (r.data && (f = r.url += (wi.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = sf.test(f) ? f.replace(sf, "$1_=" + pi++) : f + (wi.test(f) ? "&" : "?") + "_=" + pi++));
      r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
      (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
      u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", " + lf + "; q=0.01" : "") : r.accepts["*"]);
      for (c in r.headers)
        u.setRequestHeader(c, r.headers[c]);
      if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || e === 2))
        return u.abort();
      ut = "abort";
      for (c in {
          success: 1,
          error: 1,
          complete: 1
        })
        u[c](r[c]);
      if (l = vf(bi, r, t, u), l) {
        u.readyState = 1;
        a && d.trigger("ajaxSend", [u, r]);
        r.async && r.timeout > 0 && (k = setTimeout(function() {
          u.abort("timeout")
        }, r.timeout));
        try {
          e = 1;
          l.send(it, w)
        } catch (ft) {
          if (e < 2)
            w(-1, ft);
          else
            throw ft;
        }
      } else
        w(-1, "No Transport");
      return u
    },
    getJSON: function(n, t, r) {
      return i.get(n, t, r, "json")
    },
    getScript: function(n, t) {
      return i.get(n, undefined, t, "script")
    }
  });
  i.each(["get", "post"], function(n, t) {
    i[t] = function(n, r, u, f) {
      return i.isFunction(r) && (f = f || u, u = r, r = undefined), i.ajax({
        url: n,
        type: t,
        dataType: f,
        data: r,
        success: u
      })
    }
  });
  i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
    i.fn[t] = function(n) {
      return this.on(t, n)
    }
  });
  i._evalUrl = function(n) {
    return i.ajax({
      url: n,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      throws: !0
    })
  };
  i.fn.extend({
    wrapAll: function(n) {
      if (i.isFunction(n))
        return this.each(function(t) {
          i(this).wrapAll(n.call(this, t))
        });
      if (this[0]) {
        var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]);
        t.map(function() {
          for (var n = this; n.firstChild && n.firstChild.nodeType === 1;)
            n = n.firstChild;
          return n
        }).append(this)
      }
      return this
    },
    wrapInner: function(n) {
      return i.isFunction(n) ? this.each(function(t) {
        i(this).wrapInner(n.call(this, t))
      }) : this.each(function() {
        var t = i(this),
          r = t.contents();
        r.length ? r.wrapAll(n) : t.append(n)
      })
    },
    wrap: function(n) {
      var t = i.isFunction(n);
      return this.each(function(r) {
        i(this).wrapAll(t ? n.call(this, r) : n)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
      }).end()
    }
  });
  i.expr.filters.hidden = function(n) {
    return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !r.reliableHiddenOffsets() && (n.style && n.style.display || i.css(n, "display")) === "none"
  };
  i.expr.filters.visible = function(n) {
    return !i.expr.filters.hidden(n)
  };
  var yo = /%20/g,
    po = /\[\]$/,
    yf = /\r?\n/g,
    wo = /^(?:submit|button|image|reset|file)$/i,
    bo = /^(?:input|select|textarea|keygen)/i;
  i.param = function(n, t) {
    var r, u = [],
      f = function(n, t) {
        t = i.isFunction(t) ? t() : t == null ? "" : t;
        u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
      };
    if (t === undefined && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n))
      i.each(n, function() {
        f(this.name, this.value)
      });
    else
      for (r in n)
        di(r, n[r], t, f);
    return u.join("&").replace(yo, "+")
  };
  i.fn.extend({
    serialize: function() {
      return i.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var n = i.prop(this, "elements");
        return n ? i.makeArray(n) : this
      }).filter(function() {
        var n = this.type;
        return this.name && !i(this).is(":disabled") && bo.test(this.nodeName) && !wo.test(n) && (this.checked || !oi.test(n))
      }).map(function(n, t) {
        var r = i(this).val();
        return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
          return {
            name: t.name,
            value: n.replace(yf, "\r\n")
          }
        }) : {
          name: t.name,
          value: r.replace(yf, "\r\n")
        }
      }).get()
    }
  });
  i.ajaxSettings.xhr = n.ActiveXObject !== undefined ? function() {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && pf() || go()
  } : pf;
  var ko = 0,
    ni = {},
    ht = i.ajaxSettings.xhr();
  if (n.ActiveXObject)
    i(n).on("unload", function() {
      for (var n in ni)
        ni[n](undefined, !0)
    });
  return r.cors = !!ht && "withCredentials" in ht, ht = r.ajax = !!ht, ht && i.ajaxTransport(function(n) {
    if (!n.crossDomain || r.cors) {
      var t;
      return {
        send: function(r, u) {
          var e, f = n.xhr(),
            o = ++ko;
          if (f.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
            for (e in n.xhrFields)
              f[e] = n.xhrFields[e];
          n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType);
          n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
          for (e in r)
            r[e] !== undefined && f.setRequestHeader(e, r[e] + "");
          f.send(n.hasContent && n.data || null);
          t = function(r, e) {
            var s, c, h;
            if (t && (e || f.readyState === 4))
              if (delete ni[o], t = undefined, f.onreadystatechange = i.noop, e)
                f.readyState !== 4 && f.abort();
              else {
                h = {};
                s = f.status;
                typeof f.responseText == "string" && (h.text = f.responseText);
                try {
                  c = f.statusText
                } catch (l) {
                  c = ""
                }
                s || !n.isLocal || n.crossDomain ? s === 1223 && (s = 204) : s = h.text ? 200 : 404
              }
            h && u(s, c, h, f.getAllResponseHeaders())
          };
          n.async ? f.readyState === 4 ? setTimeout(t) : f.onreadystatechange = ni[o] = t : t()
        },
        abort: function() {
          t && t(undefined, !0)
        }
      }
    }
  }), i.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(n) {
        return i.globalEval(n), n
      }
    }
  }), i.ajaxPrefilter("script", function(n) {
    n.cache === undefined && (n.cache = !1);
    n.crossDomain && (n.type = "GET", n.global = !1)
  }), i.ajaxTransport("script", function(n) {
    if (n.crossDomain) {
      var t, r = u.head || i("head")[0] || u.documentElement;
      return {
        send: function(i, f) {
          t = u.createElement("script");
          t.async = !0;
          n.scriptCharset && (t.charset = n.scriptCharset);
          t.src = n.url;
          t.onload = t.onreadystatechange = function(n, i) {
            (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || f(200, "success"))
          };
          r.insertBefore(t, r.firstChild)
        },
        abort: function() {
          if (t)
            t.onload(undefined, !0)
        }
      }
    }
  }), gi = [], ti = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var n = gi.pop() || i.expando + "_" + pi++;
      return this[n] = !0, n
    }
  }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
    var f, o, e, s = t.jsonp !== !1 && (ti.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
    if (s || t.dataTypes[0] === "jsonp")
      return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ti, "$1" + f) : t.jsonp !== !1 && (t.url += (wi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
        return e || i.error(f + " was not called"), e[0]
      }, t.dataTypes[0] = "json", o = n[f], n[f] = function() {
        e = arguments
      }, u.always(function() {
        n[f] = o;
        t[f] && (t.jsonpCallback = r.jsonpCallback, gi.push(f));
        e && i.isFunction(o) && o(e[0]);
        e = o = undefined
      }), "script"
  }), i.parseHTML = function(n, t, r) {
    if (!n || typeof n != "string")
      return null;
    typeof t == "boolean" && (r = t, t = !1);
    t = t || u;
    var f = er.exec(n),
      e = !r && [];
    return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
  }, nr = i.fn.load, i.fn.load = function(n, t, r) {
    if (typeof n != "string" && nr)
      return nr.apply(this, arguments);
    var u, o, s, f = this,
      e = n.indexOf(" ");
    return e >= 0 && (u = i.trim(n.slice(e, n.length)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = undefined) : t && typeof t == "object" && (s = "POST"), f.length > 0 && i.ajax({
      url: n,
      type: s,
      dataType: "html",
      data: t
    }).done(function(n) {
      o = arguments;
      f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
    }).complete(r && function(n, t) {
      f.each(r, o || [n.responseText, t, n])
    }), this
  }, i.expr.filters.animated = function(n) {
    return i.grep(i.timers, function(t) {
      return n === t.elem
    }).length
  }, tr = n.document.documentElement, i.offset = {
    setOffset: function(n, t, r) {
      var e, o, s, h, u, c, v, l = i.css(n, "position"),
        a = i(n),
        f = {};
      l === "static" && (n.style.position = "relative");
      u = a.offset();
      s = i.css(n, "top");
      c = i.css(n, "left");
      v = (l === "absolute" || l === "fixed") && i.inArray("auto", [s, c]) > -1;
      v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
      i.isFunction(t) && (t = t.call(n, r, u));
      t.top != null && (f.top = t.top - u.top + h);
      t.left != null && (f.left = t.left - u.left + o);
      "using" in t ? t.using.call(n, f) : a.css(f)
    }
  }, i.fn.extend({
    offset: function(n) {
      if (arguments.length)
        return n === undefined ? this : this.each(function(t) {
          i.offset.setOffset(this, n, t)
        });
      var t, f, u = {
          top: 0,
          left: 0
        },
        r = this[0],
        e = r && r.ownerDocument;
      if (e)
        return (t = e.documentElement, !i.contains(t, r)) ? u : (typeof r.getBoundingClientRect !== o && (u = r.getBoundingClientRect()), f = wf(e), {
          top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
          left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
        })
    },
    position: function() {
      if (this[0]) {
        var n, r, t = {
            top: 0,
            left: 0
          },
          u = this[0];
        return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
          top: r.top - t.top - i.css(u, "marginTop", !0),
          left: r.left - t.left - i.css(u, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var n = this.offsetParent || tr; n && !i.nodeName(n, "html") && i.css(n, "position") === "static";)
          n = n.offsetParent;
        return n || tr
      })
    }
  }), i.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(n, t) {
    var r = /Y/.test(t);
    i.fn[n] = function(u) {
      return b(this, function(n, u, f) {
        var e = wf(n);
        if (f === undefined)
          return e ? t in e ? e[t] : e.document.documentElement[u] : n[u];
        e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f
      }, n, u, arguments.length, null)
    }
  }), i.each(["top", "left"], function(n, t) {
    i.cssHooks[t] = au(r.pixelPosition, function(n, r) {
      if (r)
        return r = d(n, t), pt.test(r) ? i(n).position()[t] + "px" : r
    })
  }), i.each({
    Height: "height",
    Width: "width"
  }, function(n, t) {
    i.each({
      padding: "inner" + n,
      content: t,
      "": "outer" + n
    }, function(r, u) {
      i.fn[u] = function(u, f) {
        var e = arguments.length && (r || typeof u != "boolean"),
          o = r || (u === !0 || f === !0 ? "margin" : "border");
        return b(this, function(t, r, u) {
          var f;
          return i.isWindow(t) ? t.document.documentElement["client" + n] : t.nodeType === 9 ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : u === undefined ? i.css(t, r, o) : i.style(t, r, u, o)
        }, t, e ? u : undefined, e, null)
      }
    })
  }), i.fn.size = function() {
    return this.length
  }, i.fn.andSelf = i.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function() {
    return i
  }), bf = n.jQuery, kf = n.$, i.noConflict = function(t) {
    return n.$ === i && (n.$ = kf), t && n.jQuery === i && (n.jQuery = bf), i
  }, typeof t === o && (n.jQuery = n.$ = i), i
}),
function(n) {
  function t(n, t) {
    var i, r;
    n ? "offset" in n ? (i = n.data("jquery-collision-coordinates"), i ? (this.x1 = i.x1, this.y1 = i.y1, this.x2 = i.x2, this.y2 = i.y2) : t && t.length && t.length >= 4 ? (this.x1 = t[0], this.y1 = t[1], this.x2 = t[2] + n.outerWidth(!0), this.y2 = t[3] + n.outerHeight(!0)) : n.parent().length <= 0 ? (this.x1 = parseInt(n.css("left")) || 0, this.y1 = parseInt(n.css("top")) || 0, this.x2 = parseInt(n.css("width")) || 0, this.y2 = parseInt(n.css("height")) || 0, this.x2 += this.x1, this.x2 += (parseInt(n.css("margin-left")) || 0) + (parseInt(n.css("border-left")) || 0) + (parseInt(n.css("padding-left")) || 0) + (parseInt(n.css("padding-right")) || 0) + (parseInt(n.css("border-right")) || 0) + (parseInt(n.css("margin-right")) || 0), this.y2 += this.y1, this.y2 += (parseInt(n.css("margin-top")) || 0) + (parseInt(n.css("border-top")) || 0) + (parseInt(n.css("padding-top")) || 0) + (parseInt(n.css("padding-bottom")) || 0) + (parseInt(n.css("border-bottom")) || 0) + (parseInt(n.css("margin-bottom")) || 0)) : (r = n.offset(), this.x1 = r.left - (parseInt(n.css("margin-left")) || 0), this.y1 = r.top - (parseInt(n.css("margin-top")) || 0), this.x2 = this.x1 + n.outerWidth(!0), this.y2 = this.y1 + n.outerHeight(!0)), this.proto = n) : "x1" in n && (this.x1 = n.x1, this.y1 = n.y1, this.x2 = n.x2, this.y2 = n.y2, this.proto = n) : (this.x1 = this.y1 = this.x2 = this.y2 = 0, this.proto = null);
    "dir" in n && (this.dir = n.dir)
  }

  function i(n, t, i, r) {
    this.target = n;
    this.obstacle = t;
    this.overlap = i;
    this.overlapType = r
  }

  function r(n, t, i) {
    this.targets = n;
    this.obstacles = t;
    this.collisions = null;
    this.cache = null;
    this.containment = i ? i : null
  }

  function u(i) {
    return n(i).get().map(function(i) {
      return new t(n(i))
    })
  }

  function f(t) {
    for (var i = n(), r = 0; r < t.length; r++)
      i = i.add(t[r]);
    return i
  }
  t.prototype.innerContainer = function() {
    var n = new t(this);
    return this.proto.css && (n.x1 += parseInt(this.proto.css("margin-left")) || 0, n.x1 += parseInt(this.proto.css("border-left")) || 0, n.x1 += parseInt(this.proto.css("padding-left")) || 0, n.x2 -= parseInt(this.proto.css("padding-right")) || 0, n.x2 -= parseInt(this.proto.css("border-right")) || 0, n.x2 -= parseInt(this.proto.css("margin-right")) || 0, n.y1 += parseInt(this.proto.css("margin-top")) || 0, n.y1 += parseInt(this.proto.css("border-top")) || 0, n.y1 += parseInt(this.proto.css("padding-top")) || 0, n.y2 -= parseInt(this.proto.css("padding-bottom")) || 0, n.y2 -= parseInt(this.proto.css("border-bottom")) || 0, n.y2 -= parseInt(this.proto.css("margin-bottom")) || 0), n
  };
  t.prototype.move = function(n, t) {
    return this.x1 += n, this.x2 += n, this.y1 += t, this.y2 += t, this
  };
  t.prototype.update = function(n) {
    var t, i, r;
    return "x1" in n && (this.x1 = n.x1), "x2" in n && (this.x1 = n.x2), "y1" in n && (this.x1 = n.y1), "y2" in n && (this.x1 = n.y2), "left" in n && (t = this.x2 - this.x1, this.x1 = n.left, this.x2 = this.x1 + t), "top" in n && (i = this.y2 - this.y1, this.y1 = n.top, this.y2 = this.y1 + i), "offset" in n && (r = n.offset(), this.update(r), this.x2 = this.x1 + n.width(), this.y2 = this.y1 + n.height()), "dir" in n && (this.x1 = n.dir), this
  };
  t.prototype.width = function() {
    return this.x2 - this.x1
  };
  t.prototype.height = function() {
    return this.y2 - this.y1
  };
  t.prototype.centerx = function() {
    return (this.x1 + this.x2) / 2
  };
  t.prototype.centery = function() {
    return (this.y1 + this.y2) / 2
  };
  t.prototype.toString = function() {
    return (this.proto.get ? "#" + this.proto.get(0).id : "") + "[" + [this.x1, this.y1, this.x2, this.y2].join(",") + "]"
  };
  t.EPSILON = .001;
  t.prototype.containsPoint = function(n, i, r) {
    r || (r = !1);
    var u = (r ? -1 : 1) * t.EPSILON;
    return n > this.x1 + u && n < this.x2 - u && i > this.y1 + u && i < this.y2 - u ? !0 : !1
  };
  t.prototype.overlaps = function(n, t) {
    var i = this._overlaps(n, t);
    return i.length > 0 ? i : (i = n._overlaps(this, t), i.length > 0 && (i[0].dir = i[0].dir == "Inside" ? "Outside" : i[0].dir == "Outside" ? "Inside" : i[0].dir == "N" ? "S" : i[0].dir == "S" ? "N" : i[0].dir == "W" ? "E" : i[0].dir == "E" ? "W" : i[0].dir == "NE" ? "SW" : i[0].dir == "SW" ? "NE" : i[0].dir == "SE" ? "NW" : i[0].dir == "NW" ? "SE" : undefined), i || [])
  };
  t.prototype._overlaps = function(n, i) {
    var u = n,
      s = this,
      e;
    i || (i = !1);
    var h = u.centerx(),
      c = u.centery(),
      o = [
        [u.x1, u.y1, "SE"],
        [u.x2, u.y1, "SW"],
        [u.x2, u.y2, "NW"],
        [u.x1, u.y2, "NE"],
        [h, u.y1, "S"],
        [u.x2, c, "W"],
        [h, u.y2, "N"],
        [u.x1, c, "E"],
        [h, c, undefined]
      ],
      f = null,
      r = {
        NW: !1,
        N: !1,
        NE: !1,
        E: !1,
        SE: !1,
        S: !1,
        SW: !1,
        W: !1
      };
    for (e = 0; e < o.length; e++)
      if (this.containsPoint(o[e][0], o[e][1], i)) {
        if (o[e][2] && (r[o[e][2]] = !0), f)
          continue;
        f = [new t({
          x1: Math.max(u.x1, s.x1),
          y1: Math.max(u.y1, s.y1),
          x2: Math.min(u.x2, s.x2),
          y2: Math.min(u.y2, s.y2),
          dir: o[e][2]
        })]
      }
    return f && (r.NW && r.NE && (f[0].dir = "N"), r.NE && r.SE && (f[0].dir = "E"), r.SE && r.SW && (f[0].dir = "S"), r.SW && r.NW && (f[0].dir = "W"), r.NW && r.NE && r.SE && r.SW && (f[0].dir = "Outside"), r.NW || r.NE || r.SE || r.SW || r.N || r.E || r.S || r.W || (f[0].dir = "Inside")), f || []
  };
  t.prototype._protrusion = function(n, i, r) {
    var u = this.overlaps(new t(n), !1);
    return u.length <= 0 ? r : (u[0].dir = i, r.push(u[0]), r)
  };
  t.prototype.protrusions = function(n) {
    var t = [],
      i = Number.NEGATIVE_INFINITY,
      r = Number.POSITIVE_INFINITY,
      u = n.x1,
      f = n.x2,
      e = n.y1,
      o = n.y2;
    return t = this._protrusion({
      x1: u,
      y1: i,
      x2: f,
      y2: e
    }, "N", t), t = this._protrusion({
      x1: f,
      y1: i,
      x2: r,
      y2: e
    }, "NE", t), t = this._protrusion({
      x1: f,
      y1: e,
      x2: r,
      y2: o
    }, "E", t), t = this._protrusion({
      x1: f,
      y1: o,
      x2: r,
      y2: r
    }, "SE", t), t = this._protrusion({
      x1: u,
      y1: o,
      x2: f,
      y2: r
    }, "S", t), t = this._protrusion({
      x1: i,
      y1: o,
      x2: u,
      y2: r
    }, "SW", t), t = this._protrusion({
      x1: i,
      y1: e,
      x2: u,
      y2: o
    }, "W", t), this._protrusion({
      x1: i,
      y1: i,
      x2: u,
      y2: e
    }, "NW", t)
  };
  i.prototype.distance = function() {
    var n = c.target,
      t = c.overlap;
    return Math.sqrt((n.centerx() - t.centerx()) * (n.centerx() - t.centerx()) + (n.centery() - t.centery()) * (n.centery() - t.centery()))
  };
  r.prototype.getCollisions = function(n) {
    var t, s, r, h, c, u;
    if (this.collisions !== null)
      return this.collisions;
    if (this.cache = {}, this.collisions = [], n || (n = "collision"), n != "collision" && n != "protrusion")
      return [];
    var f = [],
      e = this.targets,
      o = this.obstacles;
    for (t = 0; t < e.length; t++)
      for (s = e[t], r = 0; r < o.length; r++)
        for (h = o[r], c = n == "collision" ? s.overlaps(h) : s.protrusions(h.innerContainer()), u = 0; u < c.length; u++)
          f.push(new i(e[t], o[r], c[u], n));
    return this.collisions = f, f
  };
  n.fn.collision = function(t, i) {
    var v, l, y;
    i || (i = {});
    var a = "collision",
      o = null,
      s = null,
      h = null,
      c = null,
      e = "body";
    return i.mode == "protrusion" && (a = i.mode), i.as && (o = i.as), i.colliderData && (s = i.colliderData), i.obstacleData && (h = i.obstacleData), i.directionData && (c = i.directionData), i.relative && (e = i.relative), v = new r(u(this), u(t)), l = v.getCollisions(a), y = o ? n.map(l, function(t) {
      var f = t.overlap.x1,
        l = t.overlap.y1,
        r, u, i;
      return e && e != "body" && (r = e == "collider" ? n(t.target.proto) : e == "obstacle" ? n(t.obstacle.proto) : n(e), r.length > 0 && (u = r.offset(), f -= u.left, l -= u.top)), i = n(o).offset({
        left: f,
        top: l
      }).width(t.overlap.width()).height(t.overlap.height()), s && i.data(s, n(t.target.proto)), h && i.data(h, n(t.obstacle.proto)), c && t.overlap.dir && i.data(c, t.overlap.dir), i
    }) : n.map(l, function(n) {
      return n.obstacle.proto
    }), f(y)
  }
}(jQuery);
(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(n, t, i) {
      var c = [].slice,
        r = function(n, t, u) {
          i.call(this, n, t, u);
          this._cycle = 0;
          this._yoyo = this.vars.yoyo === !0;
          this._repeat = this.vars.repeat || 0;
          this._repeatDelay = this.vars.repeatDelay || 0;
          this._dirty = !0;
          this.render = r.prototype.render
        },
        f = 1e-10,
        l = i._internals.isSelector,
        a = i._internals.isArray,
        u = r.prototype = i.to({}, .1, {}),
        e = [],
        o, s, h;
      return r.version = "1.11.8", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.ticker = i.ticker, u.invalidate = function() {
        return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
      }, u.updateTo = function(n, t) {
        var s = this.ratio,
          u, f, e, r, o;
        t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
        for (u in n)
          this.vars[u] = n[u];
        if (this._initted)
          if (t)
            this._initted = !1;
          else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998)
          f = this._time, this.render(0, !0, !1), this._initted = !1, this.render(f, !0, !1);
        else if (this._time > 0)
          for (this._initted = !1, this._init(), e = 1 / (1 - s), r = this._firstPT; r;)
            o = r.s + r.c, r.c *= e, r.s = o - r.c, r = r._next;
        return this
      }, u.render = function(n, t, i) {
        this._initted || this._duration === 0 && this.vars.repeat && this.invalidate();
        var p = this._dirty ? this.totalDuration() : this._totalDuration,
          w = this._time,
          v = this._totalTime,
          b = this._cycle,
          u = this._duration,
          c, s, o, y, r, l, a, h;
        if (n >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && (this._cycle & 1) != 0 ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = u, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (c = !0, s = "onComplete"), u === 0 && (h = this._rawPrevTime, this._startTime === this._timeline._duration && (n = 0), (n === 0 || h < 0 || h === f) && h !== n && (i = !0, h > f && (s = "onReverseComplete")), this._rawPrevTime = h = !t || n || this._rawPrevTime === n ? n : f)) : n < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (v !== 0 || u === 0 && this._rawPrevTime > 0 && this._rawPrevTime !== f) && (s = "onReverseComplete", c = this._reversed), n < 0 ? (this._active = !1, u === 0 && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = h = !t || n || this._rawPrevTime === n ? n : f)) : this._initted || (i = !0)) : (this._totalTime = this._time = n, this._repeat !== 0 && (y = u + this._repeatDelay, this._cycle = this._totalTime / y >> 0, this._cycle !== 0 && this._cycle === this._totalTime / y && this._cycle--, this._time = this._totalTime - this._cycle * y, this._yoyo && (this._cycle & 1) != 0 && (this._time = u - this._time), this._time > u ? this._time = u : this._time < 0 && (this._time = 0)), this._easeType ? (r = this._time / u, l = this._easeType, a = this._easePower, (l === 1 || l === 3 && r >= .5) && (r = 1 - r), l === 3 && (r *= 2), a === 1 ? r *= r : a === 2 ? r *= r * r : a === 3 ? r *= r * r * r : a === 4 && (r *= r * r * r * r), this.ratio = l === 1 ? 1 - r : l === 2 ? r : this._time / u < .5 ? r / 2 : 1 - r / 2) : this.ratio = this._ease.getRatio(this._time / u)), w !== this._time || i || b !== this._cycle) {
          if (!this._initted) {
            if (this._init(), !this._initted || this._gc)
              return;
            this._time && !c ? this.ratio = this._ease.getRatio(this._time / u) : c && this._ease._calcEnd && (this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1))
          }
        } else {
          v !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e));
          return
        }
        for (this._active || !this._paused && this._time !== w && n >= 0 && (this._active = !0), v === 0 && (this._startAt && (n >= 0 ? this._startAt.render(n, t, i) : s || (s = "_dummyGS")), this.vars.onStart && (this._totalTime !== 0 || u === 0) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || e))), o = this._firstPT; o;)
          o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
        this._onUpdate && (n < 0 && this._startAt && this._startTime && this._startAt.render(n, t, i), t || (this._totalTime !== v || c) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e));
        this._cycle !== b && (t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || e));
        s && (this._gc || (n < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(n, t, i), c && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || e), u === 0 && this._rawPrevTime === f && h !== f && (this._rawPrevTime = 0)))
      }, r.to = function(n, t, i) {
        return new r(n, t, i)
      }, r.from = function(n, t, i) {
        return i.runBackwards = !0, i.immediateRender = i.immediateRender != !1, new r(n, t, i)
      }, r.fromTo = function(n, t, i, u) {
        return u.startAt = i, u.immediateRender = u.immediateRender != !1 && i.immediateRender != !1, new r(n, t, u)
      }, r.staggerTo = r.allTo = function(n, t, u, f, o, s, h) {
        f = f || 0;
        var b = u.delay || 0,
          k = [],
          d = function() {
            u.onComplete && u.onComplete.apply(u.onCompleteScope || this, arguments);
            o.apply(h || this, s || e)
          },
          p, y, v, w;
        for (a(n) || (typeof n == "string" && (n = i.selector(n) || n), l(n) && (n = c.call(n, 0))), p = n.length, v = 0; v < p; v++) {
          y = {};
          for (w in u)
            y[w] = u[w];
          y.delay = b;
          v === p - 1 && o && (y.onComplete = d);
          k[v] = new r(n[v], t, y);
          b += f
        }
        return k
      }, r.staggerFrom = r.allFrom = function(n, t, i, u, f, e, o) {
        return i.runBackwards = !0, i.immediateRender = i.immediateRender != !1, r.staggerTo(n, t, i, u, f, e, o)
      }, r.staggerFromTo = r.allFromTo = function(n, t, i, u, f, e, o, s) {
        return u.startAt = i, u.immediateRender = u.immediateRender != !1 && i.immediateRender != !1, r.staggerTo(n, t, u, f, e, o, s)
      }, r.delayedCall = function(n, t, i, u, f) {
        return new r(t, 0, {
          delay: n,
          onComplete: t,
          onCompleteParams: i,
          onCompleteScope: u,
          onReverseComplete: t,
          onReverseCompleteParams: i,
          onReverseCompleteScope: u,
          immediateRender: !1,
          useFrames: f,
          overwrite: 0
        })
      }, r.set = function(n, t) {
        return new r(n, 0, t)
      }, r.isTweening = function(n) {
        return i.getTweensOf(n, !0).length > 0
      }, o = function(n, t) {
        for (var u = [], f = 0, r = n._first; r;)
          r instanceof i ? u[f++] = r : (t && (u[f++] = r), u = u.concat(o(r, t)), f = u.length), r = r._next;
        return u
      }, s = r.getAllTweens = function(t) {
        return o(n._rootTimeline, t).concat(o(n._rootFramesTimeline, t))
      }, r.killAll = function(n, i, r, u) {
        i == null && (i = !0);
        r == null && (r = !0);
        for (var o = s(u != !1), c = o.length, l = i && r && u, h, f, e = 0; e < c; e++)
          f = o[e], (l || f instanceof t || (h = f.target === f.vars.onComplete) && r || i && !h) && (n ? f.totalTime(f.totalDuration()) : f._enabled(!1, !1))
      }, r.killChildTweensOf = function(n, t) {
        if (n != null) {
          var o = i._tweenLookup,
            f, e, s, u, h;
          if (typeof n == "string" && (n = i.selector(n) || n), l(n) && (n = c.call(n, 0)), a(n)) {
            for (u = n.length; --u > -1;)
              r.killChildTweensOf(n[u], t);
            return
          }
          f = [];
          for (s in o)
            for (e = o[s].target.parentNode; e;)
              e === n && (f = f.concat(o[s].tweens)), e = e.parentNode;
          for (h = f.length, u = 0; u < h; u++)
            t && f[u].totalTime(f[u].totalDuration()), f[u]._enabled(!1, !1)
        }
      }, h = function(n, i, r, u) {
        i = i !== !1;
        r = r !== !1;
        u = u !== !1;
        for (var e = s(u), c = i && r && u, o = e.length, h, f; --o > -1;)
          f = e[o], (c || f instanceof t || (h = f.target === f.vars.onComplete) && r || i && !h) && f.paused(n)
      }, r.pauseAll = function(n, t, i) {
        h(!0, n, t, i)
      }, r.resumeAll = function(n, t, i) {
        h(!1, n, t, i)
      }, r.globalTimeScale = function(t) {
        var r = n._rootTimeline,
          u = i.ticker.time;
        return arguments.length ? (t = t || f, r._startTime = u - (u - r._startTime) * r._timeScale / t, r = n._rootFramesTimeline, u = i.ticker.frame, r._startTime = u - (u - r._startTime) * r._timeScale / t, r._timeScale = n._rootTimeline._timeScale = t, t) : r._timeScale
      }, u.progress = function(n) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) != 0 ? 1 - n : n) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
      }, u.totalProgress = function(n) {
        return arguments.length ? this.totalTime(this.totalDuration() * n, !1) : this._totalTime / this.totalDuration()
      }, u.time = function(n, t) {
        return arguments.length ? (this._dirty && this.totalDuration(), n > this._duration && (n = this._duration), this._yoyo && (this._cycle & 1) != 0 ? n = this._duration - n + this._cycle * (this._duration + this._repeatDelay) : this._repeat !== 0 && (n += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(n, t)) : this._time
      }, u.duration = function(t) {
        return arguments.length ? n.prototype.duration.call(this, t) : this._duration
      }, u.totalDuration = function(n) {
        return arguments.length ? this._repeat === -1 ? this : this.duration((n - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
      }, u.repeat = function(n) {
        return arguments.length ? (this._repeat = n, this._uncache(!0)) : this._repeat
      }, u.repeatDelay = function(n) {
        return arguments.length ? (this._repeatDelay = n, this._uncache(!0)) : this._repeatDelay
      }, u.yoyo = function(n) {
        return arguments.length ? (this._yoyo = n, this) : this._yoyo
      }, r
    }, !0);
    window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(n, t, i) {
      var u = function(n) {
          t.call(this, n);
          this._labels = {};
          this.autoRemoveChildren = this.vars.autoRemoveChildren === !0;
          this.smoothChildTiming = this.vars.smoothChildTiming === !0;
          this._sortChildren = !0;
          this._onUpdate = this.vars.onUpdate;
          var i = this.vars,
            r;
          for (var u in i)
            r = i[u], f(r) && r.join("").indexOf("{self}") !== -1 && (i[u] = this._swapSelfInParams(r));
          f(i.tweens) && this.add(i.tweens, 0, i.align, i.stagger)
        },
        e = 1e-10,
        c = i._internals.isSelector,
        f = i._internals.isArray,
        o = [],
        s = window._gsDefine.globals,
        h = function(n) {
          var t = {};
          for (var i in n)
            t[i] = n[i];
          return t
        },
        l = function(n, t, i, r) {
          n._timeline.pause(n._startTime);
          t && t.apply(r || n._timeline, i || o)
        },
        a = o.slice,
        r = u.prototype = new t;
      return u.version = "1.11.8", r.constructor = u, r.kill()._gc = !1, r.to = function(n, t, r, u) {
        var f = r.repeat && s.TweenMax || i;
        return t ? this.add(new f(n, t, r), u) : this.set(n, r, u)
      }, r.from = function(n, t, r, u) {
        return this.add((r.repeat && s.TweenMax || i).from(n, t, r), u)
      }, r.fromTo = function(n, t, r, u, f) {
        var e = u.repeat && s.TweenMax || i;
        return t ? this.add(e.fromTo(n, t, r, u), f) : this.set(n, u, f)
      }, r.staggerTo = function(n, t, r, f, e, o, s, l) {
        var y = new u({
            onComplete: o,
            onCompleteParams: s,
            onCompleteScope: l,
            smoothChildTiming: this.smoothChildTiming
          }),
          v;
        for (typeof n == "string" && (n = i.selector(n) || n), c(n) && (n = a.call(n, 0)), f = f || 0, v = 0; v < n.length; v++)
          r.startAt && (r.startAt = h(r.startAt)), y.to(n[v], t, h(r), v * f);
        return this.add(y, e)
      }, r.staggerFrom = function(n, t, i, r, u, f, e, o) {
        return i.immediateRender = i.immediateRender != !1, i.runBackwards = !0, this.staggerTo(n, t, i, r, u, f, e, o)
      }, r.staggerFromTo = function(n, t, i, r, u, f, e, o, s) {
        return r.startAt = i, r.immediateRender = r.immediateRender != !1 && i.immediateRender != !1, this.staggerTo(n, t, r, u, f, e, o, s)
      }, r.call = function(n, t, r, u) {
        return this.add(i.delayedCall(0, n, t, r), u)
      }, r.set = function(n, t, r) {
        return r = this._parseTimeOrLabel(r, 0, !0), t.immediateRender == null && (t.immediateRender = r === this._time && !this._paused), this.add(new i(n, 0, t), r)
      }, u.exportRoot = function(n, t) {
        n = n || {};
        n.smoothChildTiming == null && (n.smoothChildTiming = !0);
        var f = new u(n),
          e = f._timeline,
          r, o;
        for (t == null && (t = !0), e._remove(f, !0), f._startTime = 0, f._rawPrevTime = f._time = f._totalTime = e._time, r = e._first; r;)
          o = r._next, t && r instanceof i && r.target === r.vars.onComplete || f.add(r, r._startTime - r._delay), r = o;
        return e.add(f, 0), f
      }, r.add = function(r, e, o, s) {
        var l, v, a, h, c, y;
        if (typeof e != "number" && (e = this._parseTimeOrLabel(e, 0, !0, r)), !(r instanceof n)) {
          if (r instanceof Array || r && r.push && f(r)) {
            for (o = o || "normal", s = s || 0, l = e, v = r.length, a = 0; a < v; a++)
              f(h = r[a]) && (h = new u({
                tweens: h
              })), this.add(h, l), typeof h != "string" && typeof h != "function" && (o === "sequence" ? l = h._startTime + h.totalDuration() / h._timeScale : o === "start" && (h._startTime -= h.delay())), l += s;
            return this._uncache(!0)
          }
          if (typeof r == "string")
            return this.addLabel(r, e);
          if (typeof r == "function")
            r = i.delayedCall(0, r);
          else
            throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
        }
        if (t.prototype.add.call(this, r, e), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
          for (c = this, y = c.rawTime() > r._startTime; c._timeline;)
            y && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
        return this
      }, r.remove = function(t) {
        if (t instanceof n)
          return this._remove(t, !1);
        if (t instanceof Array || t && t.push && f(t)) {
          for (var i = t.length; --i > -1;)
            this.remove(t[i]);
          return this
        }
        return typeof t == "string" ? this.removeLabel(t) : this.kill(null, t)
      }, r._remove = function(n, i) {
        t.prototype._remove.call(this, n, i);
        var r = this._last;
        return r ? this._time > r._startTime + r._totalDuration / r._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
      }, r.append = function(n, t) {
        return this.add(n, this._parseTimeOrLabel(null, t, !0, n))
      }, r.insert = r.insertMultiple = function(n, t, i, r) {
        return this.add(n, t || 0, i, r)
      }, r.appendMultiple = function(n, t, i, r) {
        return this.add(n, this._parseTimeOrLabel(null, t, !0, n), i, r)
      }, r.addLabel = function(n, t) {
        return this._labels[n] = this._parseTimeOrLabel(t), this
      }, r.addPause = function(n, t, i, r) {
        return this.call(l, ["{self}", t, i, r], this, n)
      }, r.removeLabel = function(n) {
        return delete this._labels[n], this
      }, r.getLabelTime = function(n) {
        return this._labels[n] != null ? this._labels[n] : -1
      }, r._parseTimeOrLabel = function(t, i, r, u) {
        var e;
        if (u instanceof n && u.timeline === this)
          this.remove(u);
        else if (u && (u instanceof Array || u.push && f(u)))
          for (e = u.length; --e > -1;)
            u[e] instanceof n && u[e].timeline === this && this.remove(u[e]);
        if (typeof i == "string")
          return this._parseTimeOrLabel(i, r && typeof t == "number" && this._labels[i] == null ? t - this.duration() : 0, r);
        if (i = i || 0, typeof t == "string" && (isNaN(t) || this._labels[t] != null)) {
          if (e = t.indexOf("="), e === -1)
            return this._labels[t] == null ? r ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
          i = parseInt(t.charAt(e - 1) + "1", 10) * Number(t.substr(e + 1));
          t = e > 1 ? this._parseTimeOrLabel(t.substr(0, e - 1), 0, r) : this.duration()
        } else
          t == null && (t = this.duration());
        return Number(t) + i
      }, r.seek = function(n, t) {
        return this.totalTime(typeof n == "number" ? n : this._parseTimeOrLabel(n), t !== !1)
      }, r.stop = function() {
        return this.paused(!0)
      }, r.gotoAndPlay = function(n, t) {
        return this.play(n, t)
      }, r.gotoAndStop = function(n, t) {
        return this.pause(n, t)
      }, r.render = function(n, t, i) {
        this._gc && this._enabled(!0, !1);
        var s = this._dirty ? this.totalDuration() : this._totalDuration,
          f = this._time,
          v = this._startTime,
          y = this._timeScale,
          a = this._paused,
          r, l, h, u, c;
        if (n >= s ? (this._totalTime = this._time = s, this._reversed || this._hasPausedChild() || (l = !0, u = "onComplete", this._duration === 0 && (n === 0 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== n && this._first && (c = !0, this._rawPrevTime > e && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || n || this._rawPrevTime === n ? n : e, n = s + .0001) : n < 1e-7 ? (this._totalTime = this._time = 0, (f !== 0 || this._duration === 0 && this._rawPrevTime !== e && (this._rawPrevTime > 0 || n < 0 && this._rawPrevTime >= 0)) && (u = "onReverseComplete", l = this._reversed), n < 0 ? (this._active = !1, this._duration === 0 && this._rawPrevTime >= 0 && this._first && (c = !0), this._rawPrevTime = n) : (this._rawPrevTime = this._duration || !t || n || this._rawPrevTime === n ? n : e, n = 0, this._initted || (c = !0))) : this._totalTime = this._time = this._rawPrevTime = n, this._time !== f && this._first || i || c)
          this._initted || (this._initted = !0);
        else
          return;
        if (this._active || !this._paused && this._time !== f && n > 0 && (this._active = !0), f === 0 && this.vars.onStart && this._time !== 0 && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o)), this._time >= f)
          for (r = this._first; r;) {
            if (h = r._next, this._paused && !a)
              break;
            else
              (r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i));
            r = h
          } else
          for (r = this._last; r;) {
            if (h = r._prev, this._paused && !a)
              break;
            else
              (r._active || r._startTime <= f && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i));
            r = h
          }
        this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o));
        u && (this._gc || (v === this._startTime || y !== this._timeScale) && (this._time === 0 || s >= this.totalDuration()) && (l && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[u] && this.vars[u].apply(this.vars[u + "Scope"] || this, this.vars[u + "Params"] || o)))
      }, r._hasPausedChild = function() {
        for (var n = this._first; n;) {
          if (n._paused || n instanceof u && n._hasPausedChild())
            return !0;
          n = n._next
        }
        return !1
      }, r.getChildren = function(n, t, r, u) {
        u = u || -9999999999;
        for (var e = [], f = this._first, o = 0; f;)
          f._startTime < u || (f instanceof i ? t !== !1 && (e[o++] = f) : (r !== !1 && (e[o++] = f), n !== !1 && (e = e.concat(f.getChildren(!0, t, r)), o = e.length))), f = f._next;
        return e
      }, r.getTweensOf = function(n, t) {
        for (var r = i.getTweensOf(n), u = r.length, f = [], e = 0; --u > -1;)
          (r[u].timeline === this || t && this._contains(r[u])) && (f[e++] = r[u]);
        return f
      }, r._contains = function(n) {
        for (var t = n.timeline; t;) {
          if (t === this)
            return !0;
          t = t.timeline
        }
        return !1
      }, r.shiftChildren = function(n, t, i) {
        i = i || 0;
        for (var r = this._first, u = this._labels, f; r;)
          r._startTime >= i && (r._startTime += n), r = r._next;
        if (t)
          for (f in u)
            u[f] >= i && (u[f] += n);
        return this._uncache(!0)
      }, r._kill = function(n, t) {
        if (!n && !t)
          return this._enabled(!1, !1);
        for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), r = i.length, u = !1; --r > -1;)
          i[r]._kill(n, t) && (u = !0);
        return u
      }, r.clear = function(n) {
        var t = this.getChildren(!1, !0, !0),
          i = t.length;
        for (this._time = this._totalTime = 0; --i > -1;)
          t[i]._enabled(!1, !1);
        return n !== !1 && (this._labels = {}), this._uncache(!0)
      }, r.invalidate = function() {
        for (var n = this._first; n;)
          n.invalidate(), n = n._next;
        return this
      }, r._enabled = function(n, i) {
        if (n === this._gc)
          for (var r = this._first; r;)
            r._enabled(n, !0), r = r._next;
        return t.prototype._enabled.call(this, n, i)
      }, r.duration = function(n) {
        return arguments.length ? (this.duration() !== 0 && n !== 0 && this.timeScale(this._duration / n), this) : (this._dirty && this.totalDuration(), this._duration)
      }, r.totalDuration = function(n) {
        if (!arguments.length) {
          if (this._dirty) {
            for (var i = 0, t = this._last, r = 999999999999, f, u; t;)
              f = t._prev, t._dirty && t.totalDuration(), t._startTime > r && this._sortChildren && !t._paused ? this.add(t, t._startTime - t._delay) : r = t._startTime, t._startTime < 0 && !t._paused && (i -= t._startTime, this._timeline.smoothChildTiming && (this._startTime += t._startTime / this._timeScale), this.shiftChildren(-t._startTime, !1, -9999999999), r = 0), u = t._startTime + t._totalDuration / t._timeScale, u > i && (i = u), t = f;
            this._duration = this._totalDuration = i;
            this._dirty = !1
          }
          return this._totalDuration
        }
        return this.totalDuration() !== 0 && n !== 0 && this.timeScale(this._totalDuration / n), this
      }, r.usesFrames = function() {
        for (var t = this._timeline; t._timeline;)
          t = t._timeline;
        return t === n._rootFramesTimeline
      }, r.rawTime = function() {
        return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
      }, u
    }, !0);
    window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(n, t, i) {
        var e = function(t) {
            n.call(this, t);
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._cycle = 0;
            this._yoyo = this.vars.yoyo === !0;
            this._dirty = !0
          },
          f = 1e-10,
          u = [],
          o = new i(null, null, 1, 0),
          r = e.prototype = new n;
        return r.constructor = e, r.kill()._gc = !1, e.version = "1.11.8", r.invalidate = function() {
          return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
        }, r.addCallback = function(n, i, r, u) {
          return this.add(t.delayedCall(0, n, r, u), i)
        }, r.removeCallback = function(n, t) {
          if (n)
            if (t == null)
              this._kill(null, n);
            else
              for (var i = this.getTweensOf(n, !1), r = i.length, u = this._parseTimeOrLabel(t); --r > -1;)
                i[r]._startTime === u && i[r]._enabled(!1, !1);
          return this
        }, r.tweenTo = function(n, i) {
          i = i || {};
          var f = {
              ease: o,
              overwrite: i.delay ? 2 : 1,
              useFrames: this.usesFrames(),
              immediateRender: !1
            },
            e, s, r;
          for (s in i)
            f[s] = i[s];
          return f.time = this._parseTimeOrLabel(n), e = Math.abs(Number(f.time) - this._time) / this._timeScale || .001, r = new t(this, e, f), f.onStart = function() {
            r.target.paused(!0);
            r.vars.time !== r.target.time() && e === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale);
            i.onStart && i.onStart.apply(i.onStartScope || r, i.onStartParams || u)
          }, r
        }, r.tweenFromTo = function(n, t, i) {
          i = i || {};
          n = this._parseTimeOrLabel(n);
          i.startAt = {
            onComplete: this.seek,
            onCompleteParams: [n],
            onCompleteScope: this
          };
          i.immediateRender = i.immediateRender !== !1;
          var r = this.tweenTo(t, i);
          return r.duration(Math.abs(r.vars.time - n) / this._timeScale || .001)
        }, r.render = function(n, t, i) {
          this._gc && this._enabled(!0, !1);
          var p = this._dirty ? this.totalDuration() : this._totalDuration,
            e = this._duration,
            s = this._time,
            w = this._totalTime,
            d = this._startTime,
            g = this._timeScale,
            o = this._rawPrevTime,
            b = this._paused,
            c = this._cycle,
            r, k, v, h, l, y;
          if (n >= p ? (this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (k = !0, h = "onComplete", this._duration === 0 && (n === 0 || o < 0 || o === f) && o !== n && this._first && (l = !0, o > f && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || n || this._rawPrevTime === n ? n : f, this._yoyo && (this._cycle & 1) != 0 ? this._time = n = 0 : (this._time = e, n = e + .0001)) : n < 1e-7 ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (s !== 0 || e === 0 && o !== f && (o > 0 || n < 0 && o >= 0) && !this._locked) && (h = "onReverseComplete", k = this._reversed), n < 0 ? (this._active = !1, e === 0 && o >= 0 && this._first && (l = !0), this._rawPrevTime = n) : (this._rawPrevTime = e || !t || n || this._rawPrevTime === n ? n : f, n = 0, this._initted || (l = !0))) : (e === 0 && o < 0 && (l = !0), this._time = this._rawPrevTime = n, this._locked || (this._totalTime = n, this._repeat !== 0 && (y = e + this._repeatDelay, this._cycle = this._totalTime / y >> 0, this._cycle !== 0 && this._cycle === this._totalTime / y && this._cycle--, this._time = this._totalTime - this._cycle * y, this._yoyo && (this._cycle & 1) != 0 && (this._time = e - this._time), this._time > e ? (this._time = e, n = e + .0001) : this._time < 0 ? this._time = n = 0 : n = this._time))), this._cycle !== c && !this._locked) {
            var a = this._yoyo && (c & 1) != 0,
              nt = a === (this._yoyo && (this._cycle & 1) != 0),
              tt = this._totalTime,
              it = this._cycle,
              rt = this._rawPrevTime,
              ut = this._time;
            if (this._totalTime = c * e, this._cycle < c ? a = !a : this._totalTime += e, this._time = s, this._rawPrevTime = e === 0 ? o - .0001 : o, this._cycle = c, this._locked = !0, s = a ? 0 : e, this.render(s, t, e === 0), t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u), nt && (s = a ? e + .0001 : -.0001, this.render(s, !0, !1)), this._locked = !1, this._paused && !b)
              return;
            this._time = ut;
            this._totalTime = tt;
            this._cycle = it;
            this._rawPrevTime = rt
          }
          if (this._time !== s && this._first || i || l)
            this._initted || (this._initted = !0);
          else {
            w !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u));
            return
          }
          if (this._active || !this._paused && this._totalTime !== w && n > 0 && (this._active = !0), w === 0 && this.vars.onStart && this._totalTime !== 0 && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= s)
            for (r = this._first; r;) {
              if (v = r._next, this._paused && !b)
                break;
              else
                (r._active || r._startTime <= this._time && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i));
              r = v
            } else
            for (r = this._last; r;) {
              if (v = r._prev, this._paused && !b)
                break;
              else
                (r._active || r._startTime <= s && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i));
              r = v
            }
          this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u));
          h && (this._locked || this._gc || (d === this._startTime || g !== this._timeScale) && (this._time === 0 || p >= this.totalDuration()) && (k && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || u)))
        }, r.getActive = function(n, t, i) {
          n == null && (n = !0);
          t == null && (t = !0);
          i == null && (i = !1);
          for (var f = [], e = this.getChildren(n, t, i), o = 0, s = e.length, u, r = 0; r < s; r++)
            u = e[r], u.isActive() && (f[o++] = u);
          return f
        }, r.getLabelAfter = function(n) {
          n || n !== 0 && (n = this._time);
          for (var i = this.getLabelsArray(), r = i.length, t = 0; t < r; t++)
            if (i[t].time > n)
              return i[t].name;
          return null
        }, r.getLabelBefore = function(n) {
          n == null && (n = this._time);
          for (var t = this.getLabelsArray(), i = t.length; --i > -1;)
            if (t[i].time < n)
              return t[i].name;
          return null
        }, r.getLabelsArray = function() {
          var n = [],
            i = 0;
          for (var t in this._labels)
            n[i++] = {
              time: this._labels[t],
              name: t
            };
          return n.sort(function(n, t) {
            return n.time - t.time
          }), n
        }, r.progress = function(n) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) != 0 ? 1 - n : n) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, r.totalProgress = function(n) {
          return arguments.length ? this.totalTime(this.totalDuration() * n, !1) : this._totalTime / this.totalDuration()
        }, r.totalDuration = function(t) {
          return arguments.length ? this._repeat === -1 ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (n.prototype.totalDuration.call(this), this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, r.time = function(n, t) {
          return arguments.length ? (this._dirty && this.totalDuration(), n > this._duration && (n = this._duration), this._yoyo && (this._cycle & 1) != 0 ? n = this._duration - n + this._cycle * (this._duration + this._repeatDelay) : this._repeat !== 0 && (n += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(n, t)) : this._time
        }, r.repeat = function(n) {
          return arguments.length ? (this._repeat = n, this._uncache(!0)) : this._repeat
        }, r.repeatDelay = function(n) {
          return arguments.length ? (this._repeatDelay = n, this._uncache(!0)) : this._repeatDelay
        }, r.yoyo = function(n) {
          return arguments.length ? (this._yoyo = n, this) : this._yoyo
        }, r.currentLabel = function(n) {
          return arguments.length ? this.seek(n, !0) : this.getLabelBefore(this._time + 1e-8)
        }, e
      }, !0),
      function() {
        var h = 180 / Math.PI,
          n = [],
          t = [],
          i = [],
          f = {},
          u = function(n, t, i, r) {
            this.a = n;
            this.b = t;
            this.c = i;
            this.d = r;
            this.da = r - n;
            this.ca = i - n;
            this.ba = t - n
          },
          c = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
          e = function(n, t, i, r) {
            var e = {
                a: n
              },
              u = {},
              f = {},
              o = {
                c: r
              },
              s = (n + t) / 2,
              a = (t + i) / 2,
              h = (i + r) / 2,
              c = (s + a) / 2,
              l = (a + h) / 2,
              v = (l - c) / 8;
            return e.b = s + (n - s) / 4, u.b = c + v, e.c = u.a = (e.b + u.b) / 2, u.c = f.a = (c + l) / 2, f.b = l - v, o.b = h + (r - h) / 4, f.c = o.a = (f.b + o.b) / 2, [e, u, f, o]
          },
          l = function(r, u, f, o, s) {
            for (var rt = r.length - 1, v = 0, l = r[0].a, p, c, nt, h, w, b, g, tt, a, k, d, it, y = 0; y < rt; y++)
              h = r[v], p = h.a, c = h.d, nt = r[v + 1].d, s ? (k = n[y], d = t[y], it = (d + k) * u * .25 / (o ? .5 : i[y] || .5), w = c - (c - p) * (o ? u * .5 : k !== 0 ? it / k : 0), b = c + (nt - c) * (o ? u * .5 : d !== 0 ? it / d : 0), g = c - (w + ((b - w) * (k * 3 / (k + d) + .5) / 4 || 0))) : (w = c - (c - p) * u * .5, b = c + (nt - c) * u * .5, g = c - (w + b) / 2), w += g, b += g, h.c = tt = w, h.b = y !== 0 ? l : l = h.a + (h.c - h.a) * .6, h.da = c - p, h.ca = tt - p, h.ba = l - p, f ? (a = e(p, l, tt, c), r.splice(v, 1, a[0], a[1], a[2], a[3]), v += 4) : v++, l = b;
            h = r[v];
            h.b = l;
            h.c = l + (h.d - l) * .4;
            h.da = h.d - h.a;
            h.ca = h.c - h.a;
            h.ba = l - h.a;
            f && (a = e(h.a, l, h.c, h.d), r.splice(v, 1, a[0], a[1], a[2], a[3]))
          },
          a = function(i, r, f, e) {
            var h = [],
              c, o, l, s, v, a;
            if (e)
              for (i = [e].concat(i), o = i.length; --o > -1;)
                typeof(a = i[o][r]) == "string" && a.charAt(1) === "=" && (i[o][r] = e[r] + Number(a.charAt(0) + a.substr(2)));
            if (c = i.length - 2, c < 0)
              return h[0] = new u(i[0][r], 0, 0, i[c < -1 ? 0 : 1][r]), h;
            for (o = 0; o < c; o++)
              l = i[o][r], s = i[o + 1][r], h[o] = new u(l, 0, 0, s), f && (v = i[o + 2][r], n[o] = (n[o] || 0) + (s - l) * (s - l), t[o] = (t[o] || 0) + (v - s) * (v - s));
            return h[o] = new u(i[o][r], 0, 0, i[o + 1][r]), h
          },
          o = function(r, u, e, o, s, h) {
            var k = {},
              w = [],
              it = h || r[0],
              v, y, b, p, g, nt, d, tt;
            s = typeof s == "string" ? "," + s + "," : c;
            u == null && (u = 1);
            for (y in r[0])
              w.push(y);
            if (r.length > 1) {
              for (tt = r[r.length - 1], d = !0, v = w.length; --v > -1;)
                if (y = w[v], Math.abs(it[y] - tt[y]) > .05) {
                  d = !1;
                  break
                }
              d && (r = r.concat(), h && r.unshift(h), r.push(r[1]), h = r[r.length - 3])
            }
            for (n.length = t.length = i.length = 0, v = w.length; --v > -1;)
              y = w[v], f[y] = s.indexOf("," + y + ",") !== -1, k[y] = a(r, y, f[y], h);
            for (v = n.length; --v > -1;)
              n[v] = Math.sqrt(n[v]), t[v] = Math.sqrt(t[v]);
            if (!o) {
              for (v = w.length; --v > -1;)
                if (f[y])
                  for (b = k[w[v]], nt = b.length - 1, p = 0; p < nt; p++)
                    g = b[p + 1].da / t[p] + b[p].da / n[p], i[p] = (i[p] || 0) + g * g;
              for (v = i.length; --v > -1;)
                i[v] = Math.sqrt(i[v])
            }
            for (v = w.length, p = e ? 4 : 1; --v > -1;)
              y = w[v], b = k[y], l(b, u, e, o, f[y]), d && (b.splice(0, p), b.splice(b.length - p, p));
            return k
          },
          v = function(n, t, i) {
            t = t || "soft";
            var w = {},
              c = t === "cubic" ? 3 : 2,
              b = t === "soft",
              y = [],
              o, a, v, k, f, p, r, l, s, e, h;
            if (b && i && (n = [i].concat(n)), n == null || n.length < c + 1)
              throw "invalid Bezier data";
            for (s in n[0])
              y.push(s);
            for (p = y.length; --p > -1;) {
              for (s = y[p], w[s] = f = [], e = 0, l = n.length, r = 0; r < l; r++)
                o = i == null ? n[r][s] : typeof(h = n[r][s]) == "string" && h.charAt(1) === "=" ? i[s] + Number(h.charAt(0) + h.substr(2)) : Number(h), b && r > 1 && r < l - 1 && (f[e++] = (o + f[e - 2]) / 2), f[e++] = o;
              for (l = e - c + 1, e = 0, r = 0; r < l; r += c)
                o = f[r], a = f[r + 1], v = f[r + 2], k = c === 2 ? 0 : f[r + 3], f[e++] = h = c === 3 ? new u(o, a, v, k) : new u(o, (2 * a + o) / 3, (2 * a + v) / 3, v);
              f.length = e
            }
            return w
          },
          y = function(n, t, i) {
            for (var p = 1 / i, s = n.length, e, h, o, a, v, y, r, u, c, f, l; --s > -1;)
              for (f = n[s], o = f.a, a = f.d - o, v = f.c - o, y = f.b - o, e = h = 0, u = 1; u <= i; u++)
                r = p * u, c = 1 - r, e = h - (h = (r * r * a + 3 * c * (r * v + c * y)) * r), l = s * i + u - 1, t[l] = (t[l] || 0) + e * e
          },
          p = function(n, t) {
            t = t >> 0 || 6;
            var f = [],
              s = [],
              u = 0,
              e = 0,
              a = t - 1,
              h = [],
              o = [],
              c, i, l, r;
            for (c in n)
              y(n[c], f, t);
            for (l = f.length, i = 0; i < l; i++)
              u += Math.sqrt(f[i]), r = i % t, o[r] = u, r === a && (e += u, r = i / t >> 0, h[r] = o, s[r] = e, u = 0, o = []);
            return {
              length: e,
              lengths: s,
              segments: h
            }
          },
          r = window._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.2",
            API: 2,
            global: !0,
            init: function(n, t, i) {
              var c;
              this._target = n;
              t instanceof Array && (t = {
                values: t
              });
              this._func = {};
              this._round = {};
              this._props = [];
              this._timeRes = t.timeResolution == null ? 6 : parseInt(t.timeResolution, 10);
              var e = t.values || [],
                s = {},
                y = e[0],
                u = t.autoRotate || i.vars.orientToBezier,
                r, a, f, h, l;
              this._autoRotate = u ? u instanceof Array ? u : [
                ["x", "y", "rotation", u === !0 ? 0 : Number(u) || 0]
              ] : null;
              for (r in y)
                this._props.push(r);
              for (f = this._props.length; --f > -1;)
                r = this._props[f], this._overwriteProps.push(r), a = this._func[r] = typeof n[r] == "function", s[r] = a ? n[r.indexOf("set") || typeof n["get" + r.substr(3)] != "function" ? r : "get" + r.substr(3)]() : parseFloat(n[r]), l || s[r] !== e[0][r] && (l = s);
              if (this._beziers = t.type !== "cubic" && t.type !== "quadratic" && t.type !== "soft" ? o(e, isNaN(t.curviness) ? 1 : t.curviness, !1, t.type === "thruBasic", t.correlate, l) : v(e, t.type, s), this._segCount = this._beziers[r].length, this._timeRes && (c = p(this._beziers, this._timeRes), this._length = c.length, this._lengths = c.lengths, this._segments = c.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length), u = this._autoRotate)
                for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), f = u.length; --f > -1;) {
                  for (h = 0; h < 3; h++)
                    r = u[f][h], this._func[r] = typeof n[r] == "function" ? n[r.indexOf("set") || typeof n["get" + r.substr(3)] != "function" ? r : "get" + r.substr(3)] : !1;
                  r = u[f][2];
                  this._initialRotations[f] = this._func[r] ? this._func[r].call(this._target) : this._target[r]
                }
              return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(n) {
              var c = this._segCount,
                g = this._func,
                p = this._target,
                it = n !== this._startRatio,
                l, d, t, e, i, r, o, w, a, u, s, f, b, k, v, y, nt, tt;
              if (this._timeRes) {
                if (a = this._lengths, u = this._curSeg, n *= this._length, t = this._li, n > this._l2 && t < c - 1) {
                  for (w = c - 1; t < w && (this._l2 = a[++t]) <= n;)
                  ;
                  this._l1 = a[t - 1];
                  this._li = t;
                  this._curSeg = u = this._segments[t];
                  this._s2 = u[this._s1 = this._si = 0]
                } else if (n < this._l1 && t > 0) {
                  while (t > 0 && (this._l1 = a[--t]) >= n)
                  ;
                  t === 0 && n < this._l1 ? this._l1 = 0 : t++;
                  this._l2 = a[t];
                  this._li = t;
                  this._curSeg = u = this._segments[t];
                  this._s1 = u[(this._si = u.length - 1) - 1] || 0;
                  this._s2 = u[this._si]
                }
                if (l = t, n -= this._l1, t = this._si, n > this._s2 && t < u.length - 1) {
                  for (w = u.length - 1; t < w && (this._s2 = u[++t]) <= n;)
                  ;
                  this._s1 = u[t - 1];
                  this._si = t
                } else if (n < this._s1 && t > 0) {
                  while (t > 0 && (this._s1 = u[--t]) >= n)
                  ;
                  t === 0 && n < this._s1 ? this._s1 = 0 : t++;
                  this._s2 = u[t];
                  this._si = t
                }
                r = (t + (n - this._s1) / (this._s2 - this._s1)) * this._prec
              } else
                l = n < 0 ? 0 : n >= 1 ? c - 1 : c * n >> 0, r = (n - l * (1 / c)) * c;
              for (d = 1 - r, t = this._props.length; --t > -1;)
                e = this._props[t], i = this._beziers[e][l], o = (r * r * i.da + 3 * d * (r * i.ca + d * i.ba)) * r + i.a, this._round[e] && (o = Math.round(o)), g[e] ? p[e](o) : p[e] = o;
              if (this._autoRotate)
                for (s = this._autoRotate, t = s.length; --t > -1;)
                  e = s[t][2], nt = s[t][3] || 0, tt = s[t][4] === !0 ? 1 : h, i = this._beziers[s[t][0]], f = this._beziers[s[t][1]], i && f && (i = i[l], f = f[l], b = i.a + (i.b - i.a) * r, v = i.b + (i.c - i.b) * r, b += (v - b) * r, v += (i.c + (i.d - i.c) * r - v) * r, k = f.a + (f.b - f.a) * r, y = f.b + (f.c - f.b) * r, k += (y - k) * r, y += (f.c + (f.d - f.c) * r - y) * r, o = it ? Math.atan2(y - k, v - b) * tt + nt : this._initialRotations[t], g[e] ? p[e](o) : p[e] = o)
            }
          }),
          s = r.prototype;
        r.bezierThrough = o;
        r.cubicToQuadratic = e;
        r._autoCSS = !0;
        r.quadraticToCubic = function(n, t, i) {
          return new u(n, (2 * t + n) / 3, (2 * t + i) / 3, i)
        };
        r._cssRegister = function() {
          var t = window._gsDefine.globals.CSSPlugin;
          if (t) {
            var n = t._internals,
              i = n._parseToProxy,
              u = n._setPluginRatio,
              f = n.CSSPropTween;
            n._registerComplexSpecialProp("bezier", {
              parser: function(n, t, e, o, s, h) {
                t instanceof Array && (t = {
                  values: t
                });
                h = new r;
                var p = t.values,
                  v = p.length - 1,
                  w = [],
                  c = {},
                  l, y, a;
                if (v < 0)
                  return s;
                for (l = 0; l <= v; l++)
                  a = i(n, p[l], o, s, h, v !== l), w[l] = a.end;
                for (y in t)
                  c[y] = t[y];
                return c.values = w, s = new f(n, "bezier", 0, 0, a.pt, 2), s.data = a, s.plugin = h, s.setRatio = u, c.autoRotate === 0 && (c.autoRotate = !0), !c.autoRotate || c.autoRotate instanceof Array || (l = c.autoRotate === !0 ? 0 : Number(c.autoRotate), c.autoRotate = a.end.left != null ? [
                  ["left", "top", "rotation", l, !1]
                ] : a.end.x != null ? [
                  ["x", "y", "rotation", l, !1]
                ] : !1), c.autoRotate && (o._transform || o._enableTransforms(!1), a.autoRotate = o._target._gsTransform), h._onInitTween(a.proxy, c, o._tween), s
              }
            })
          }
        };
        s._roundProps = function(n, t) {
          for (var i = this._overwriteProps, r = i.length; --r > -1;)
            (n[i[r]] || n.bezier || n.bezierThrough) && (this._round[i[r]] = t)
        };
        s._kill = function(n) {
          var r = this._props,
            t, i;
          for (t in this._beziers)
            if (t in n)
              for (delete this._beziers[t], delete this._func[t], i = r.length; --i > -1;)
                r[i] === t && r.splice(i, 1);
          return this._super._kill.call(this, n)
        }
      }();
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(n, t) {
        var e = function() {
            n.call(this, "css");
            this._overwriteProps.length = 0;
            this.setRatio = e.prototype.setRatio
          },
          it, lt, f, bt, c = {},
          i = e.prototype = new n("css"),
          sr, wt, hr, cr, ct;
        i.constructor = e;
        e.version = "1.11.8";
        e.API = 2;
        e.defaultTransformPerspective = 0;
        e.defaultSkewType = "compensated";
        i = "px";
        e.suffixMap = {
          top: i,
          right: i,
          bottom: i,
          left: i,
          width: i,
          height: i,
          fontSize: i,
          padding: i,
          margin: i,
          perspective: i,
          lineHeight: ""
        };
        var at = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
          ai = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          kt = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          vt = /[^\d\-\.]/g,
          dt = /(?:\d|\-|\+|=|#|\.)*/g,
          gt = /opacity *= *([^)]*)/,
          lr = /opacity:([^;]*)/,
          ar = /alpha\(opacity *=.+?\)/i,
          vi = /^(rgb|hsl)/,
          yi = /([A-Z])/g,
          pi = /-([a-z])/gi,
          vr = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          wi = function(n, t) {
            return t.toUpperCase()
          },
          yr = /(?:Left|Right|Width)/i,
          pr = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          wr = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          l = /,(?=[^\)]*(?:\(|$))/gi,
          a = Math.PI / 180,
          k = 180 / Math.PI,
          yt = {},
          d = document,
          rt = d.createElement("div"),
          ni = d.createElement("img"),
          v = e._internals = {
            _specialProps: c
          },
          w = navigator.userAgent,
          ti, bi, ii, ki, di, ut, g = function() {
            var t = w.indexOf("Android"),
              i = d.createElement("div"),
              n;
            return ii = w.indexOf("Safari") !== -1 && w.indexOf("Chrome") === -1 && (t === -1 || Number(w.substr(t + 8, 1)) > 3), di = ii && Number(w.substr(w.indexOf("Version/") + 8, 1)) < 6, ki = w.indexOf("Firefox") !== -1, /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(w) && (ut = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a<\/a>", n = i.getElementsByTagName("a")[0], n ? /^0.55/.test(n.style.opacity) : !1
          }(),
          gi = function(n) {
            return gt.test(typeof n == "string" ? n : (n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
          },
          nr = function(n) {
            window.console && console.log(n)
          },
          tr = "",
          ri = "",
          ft = function(n, t) {
            t = t || rt;
            var u = t.style,
              r, i;
            if (u[n] !== undefined)
              return n;
            for (n = n.charAt(0).toUpperCase() + n.substr(1), r = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && u[r[i] + n] === undefined;)
            ;
            return i >= 0 ? (ri = i === 3 ? "ms" : r[i], tr = "-" + ri.toLowerCase() + "-", ri + n) : null
          },
          et = d.defaultView ? d.defaultView.getComputedStyle : function() {},
          r = e.getStyle = function(n, t, i, r, u) {
            var f;
            return !g && t === "opacity" ? gi(n) : (!r && n.style[t] ? f = n.style[t] : (i = i || et(n, null)) ? f = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(yi, "-$1").toLowerCase()) : n.currentStyle && (f = n.currentStyle[t]), u != null && (!f || f === "none" || f === "auto" || f === "auto auto") ? u : f)
          },
          y = v.convertToPixels = function(n, i, u, f, o) {
            if (f === "px" || !f)
              return u;
            if (f === "auto" || !u)
              return 0;
            var l = yr.test(i),
              s = n,
              a = rt.style,
              p = u < 0,
              h, c, v;
            if (p && (u = -u), f === "%" && i.indexOf("border") !== -1)
              h = u / 100 * (l ? n.clientWidth : n.clientHeight);
            else {
              if (a.cssText = "border:0 solid red;position:" + r(n, "position") + ";line-height:0;", f !== "%" && s.appendChild)
                a[l ? "borderLeftWidth" : "borderTopWidth"] = u + f;
              else {
                if (s = n.parentNode || d.body, c = s._gsCache, v = t.ticker.frame, c && l && c.time === v)
                  return c.width * u / 100;
                a[l ? "width" : "height"] = u + f
              }
              s.appendChild(rt);
              h = parseFloat(rt[l ? "offsetWidth" : "offsetHeight"]);
              s.removeChild(rt);
              l && f === "%" && e.cacheWidths !== !1 && (c = s._gsCache = s._gsCache || {}, c.time = v, c.width = h / u * 100);
              h !== 0 || o || (h = y(n, i, u, f, !0))
            }
            return p ? -h : h
          },
          ir = v.calculateOffset = function(n, t, i) {
            if (r(n, "position", i) !== "absolute")
              return 0;
            var u = t === "left" ? "Left" : "Top",
              f = r(n, "margin" + u, i);
            return n["offset" + u] - (y(n, t, parseFloat(f), f.replace(dt, "")) || 0)
          },
          ot = function(n, t) {
            var i = {},
              r, u;
            if (t = t || et(n, null))
              if (r = t.length)
                while (--r > -1)
                  i[t[r].replace(pi, wi)] = t.getPropertyValue(t[r]);
              else
                for (r in t)
                  i[r] = t[r];
            else if (t = n.currentStyle || n.style)
              for (r in t)
                typeof r == "string" && i[r] === undefined && (i[r.replace(pi, wi)] = t[r]);
            return g || (i.opacity = gi(n)), u = ht(n, t, !1), i.rotation = u.rotation, i.skewX = u.skewX, i.scaleX = u.scaleX, i.scaleY = u.scaleY, i.x = u.x, i.y = u.y, p && (i.z = u.z, i.rotationX = u.rotationX, i.rotationY = u.rotationY, i.scaleZ = u.scaleZ), i.filters && delete i.filters, i
          },
          ui = function(n, t, i, r, u) {
            var o = {},
              s = n.style,
              e, f, h;
            for (f in i)
              f !== "cssText" && f !== "length" && isNaN(f) && (t[f] !== (e = i[f]) || u && u[f]) && f.indexOf("Origin") === -1 && (typeof e == "number" || typeof e == "string") && (o[f] = e === "auto" && (f === "left" || f === "top") ? ir(n, f) : (e === "" || e === "auto" || e === "none") && typeof t[f] == "string" && t[f].replace(vt, "") !== "" ? 0 : e, s[f] !== undefined && (h = new hi(s, f, s[f], h)));
            if (r)
              for (f in r)
                f !== "className" && (o[f] = r[f]);
            return {
              difs: o,
              firstMPT: h
            }
          },
          br = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
          },
          kr = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          dr = function(n, t, i) {
            var u = parseFloat(t === "width" ? n.offsetWidth : n.offsetHeight),
              f = br[t],
              e = f.length;
            for (i = i || et(n, null); --e > -1;)
              u -= parseFloat(r(n, "padding" + f[e], i, !0)) || 0, u -= parseFloat(r(n, "border" + f[e] + "Width", i, !0)) || 0;
            return u
          },
          fi = function(n, t) {
            (n == null || n === "" || n === "auto" || n === "auto auto") && (n = "0 0");
            var u = n.split(" "),
              i = n.indexOf("left") !== -1 ? "0%" : n.indexOf("right") !== -1 ? "100%" : u[0],
              r = n.indexOf("top") !== -1 ? "0%" : n.indexOf("bottom") !== -1 ? "100%" : u[1];
            return r == null ? r = "0" : r === "center" && (r = "50%"), (i === "center" || isNaN(parseFloat(i)) && (i + "").indexOf("=") === -1) && (i = "50%"), t && (t.oxp = i.indexOf("%") !== -1, t.oyp = r.indexOf("%") !== -1, t.oxr = i.charAt(1) === "=", t.oyr = r.charAt(1) === "=", t.ox = parseFloat(i.replace(vt, "")), t.oy = parseFloat(r.replace(vt, ""))), i + " " + r + (u.length > 2 ? " " + u[2] : "")
          },
          rr = function(n, t) {
            return typeof n == "string" && n.charAt(1) === "=" ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - parseFloat(t)
          },
          b = function(n, t) {
            return n == null ? t : typeof n == "string" && n.charAt(1) === "=" ? parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) + t : parseFloat(n)
          },
          st = function(n, t, i, r) {
            var s = 1e-6,
              f, o, u, e;
            return n == null ? e = t : typeof n == "number" ? e = n : (f = 360, o = n.split("_"), u = Number(o[0].replace(vt, "")) * (n.indexOf("rad") === -1 ? 1 : k) - (n.charAt(1) === "=" ? 0 : t), o.length && (r && (r[i] = t + u), n.indexOf("short") !== -1 && (u = u % f, u !== u % (f / 2) && (u = u < 0 ? u + f : u - f)), n.indexOf("_cw") !== -1 && u < 0 ? u = (u + f * 9999999999) % f - (u / f | 0) * f : n.indexOf("ccw") !== -1 && u > 0 && (u = (u - f * 9999999999) % f - (u / f | 0) * f)), e = t + u), e < s && e > -s && (e = 0), e
          },
          nt = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
          },
          ei = function(n, t, i) {
            return n = n < 0 ? n + 1 : n > 1 ? n - 1 : n, (n * 6 < 1 ? t + (i - t) * n * 6 : n < .5 ? i : n * 3 < 2 ? t + (i - t) * (2 / 3 - n) * 6 : t) * 255 + .5 | 0
          },
          oi = function(n) {
            var i, t, e, u, f, r;
            return !n || n === "" ? nt.black : typeof n == "number" ? [n >> 16, n >> 8 & 255, n & 255] : (n.charAt(n.length - 1) === "," && (n = n.substr(0, n.length - 1)), nt[n]) ? nt[n] : n.charAt(0) === "#" ? (n.length === 4 && (i = n.charAt(1), t = n.charAt(2), e = n.charAt(3), n = "#" + i + i + t + t + e + e), n = parseInt(n.substr(1), 16), [n >> 16, n >> 8 & 255, n & 255]) : n.substr(0, 3) === "hsl" ? (n = n.match(at), u = Number(n[0]) % 360 / 360, f = Number(n[1]) / 100, r = Number(n[2]) / 100, t = r <= .5 ? r * (f + 1) : r + f - r * f, i = r * 2 - t, n.length > 3 && (n[3] = Number(n[3])), n[0] = ei(u + 1 / 3, i, t), n[1] = ei(u, i, t), n[2] = ei(u - 1 / 3, i, t), n) : (n = n.match(at) || nt.transparent, n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3])), n)
          },
          tt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (i in nt)
          tt += "|" + i + "\\b";
        tt = new RegExp(tt + ")", "gi");
        var ur = function(n, t, i, r) {
            if (n == null)
              return function(n) {
                return n
              };
            var s = t ? (n.match(tt) || [""])[0] : "",
              f = n.split(s).join("").match(kt) || [],
              h = n.substr(0, n.indexOf(f[0])),
              c = n.charAt(n.length - 1) === ")" ? ")" : "",
              e = n.indexOf(" ") !== -1 ? " " : ",",
              u = f.length,
              a = u > 0 ? f[0].replace(at, "") : "",
              o;
            return u ? o = t ? function(n) {
              var p, v, t, y;
              if (typeof n == "number")
                n += a;
              else if (r && l.test(n)) {
                for (y = n.replace(l, "|").split("|"), t = 0; t < y.length; t++)
                  y[t] = o(y[t]);
                return y.join(",")
              }
              if (p = (n.match(tt) || [s])[0], v = n.split(p).join("").match(kt) || [], t = v.length, u > t--)
                while (++t < u)
                  v[t] = i ? v[(t - 1) / 2 | 0] : f[t];
              return h + v.join(e) + e + p + c + (n.indexOf("inset") !== -1 ? " inset" : "")
            } : function(n) {
              var s, v, t;
              if (typeof n == "number")
                n += a;
              else if (r && l.test(n)) {
                for (v = n.replace(l, "|").split("|"), t = 0; t < v.length; t++)
                  v[t] = o(v[t]);
                return v.join(",")
              }
              if (s = n.match(kt) || [], t = s.length, u > t--)
                while (++t < u)
                  s[t] = i ? s[(t - 1) / 2 | 0] : f[t];
              return h + s.join(e) + c
            } : function(n) {
              return n
            }
          },
          si = function(n) {
            return n = n.split(","),
              function(t, i, r, u, f, e, o) {
                var h = (i + "").split(" "),
                  s;
                for (o = {}, s = 0; s < 4; s++)
                  o[n[s]] = h[s] = h[s] || h[(s - 1) / 2 >> 0];
                return u.parse(t, o, f, e)
              }
          },
          ru = v._setPluginRatio = function(n) {
            this.plugin.setRatio(n);
            for (var u = this.data, o = u.proxy, i = u.firstMPT, s = 1e-6, r, t, f, e; i;)
              r = o[i.v], i.r ? r = Math.round(r) : r < s && r > -s && (r = 0), i.t[i.p] = r, i = i._next;
            if (u.autoRotate && (u.autoRotate.rotation = o.rotation), n === 1)
              for (i = u.firstMPT; i;) {
                if (t = i.t, t.type) {
                  if (t.type === 1) {
                    for (e = t.xs0 + t.s + t.xs1, f = 1; f < t.l; f++)
                      e += t["xn" + f] + t["xs" + (f + 1)];
                    t.e = e
                  }
                } else
                  t.e = t.s + t.xs0;
                i = i._next
              }
          },
          hi = function(n, t, i, r, u) {
            this.t = n;
            this.p = t;
            this.v = i;
            this.r = u;
            r && (r._prev = this, this._next = r)
          },
          uu = v._parseToProxy = function(n, t, i, r, u, f) {
            var s = r,
              c = {},
              l = {},
              y = i._transform,
              p = yt,
              a, e, o, h, v;
            for (i._transform = null, yt = t, r = v = i.parse(n, t, r, u), yt = p, f && (i._transform = y, s && (s._prev = null, s._prev && (s._prev._next = null))); r && r !== s;) {
              if (r.type <= 1 && (e = r.p, l[e] = r.s + r.c, c[e] = r.s, f || (h = new hi(r, "s", e, h, r.r), r.c = 0), r.type === 1))
                for (a = r.l; --a > 0;)
                  o = "xn" + a, e = r.p + "_" + o, l[e] = r.data[o], c[e] = r[o], f || (h = new hi(r, o, e, h, r.rxp[o]));
              r = r._next
            }
            return {
              proxy: c,
              end: l,
              firstMPT: h,
              pt: v
            }
          },
          o = v.CSSPropTween = function(n, t, i, r, u, f, e, s, h, c, l) {
            this.t = n;
            this.p = t;
            this.s = i;
            this.c = r;
            this.n = e || t;
            n instanceof o || bt.push(this.n);
            this.r = s;
            this.type = f || 0;
            h && (this.pr = h, it = !0);
            this.b = c === undefined ? i : c;
            this.e = l === undefined ? i + r : l;
            u && (this._next = u, u._prev = this)
          },
          pt = e.parseComplex = function(n, t, i, r, u, f, e, s, h, c) {
            i = i || f || "";
            e = new o(n, t, 0, 0, e, c ? 2 : 1, null, !1, s, i, r);
            r += "";
            var p = i.split(", ").join(",").split(" "),
              it = r.split(", ").join(",").split(" "),
              ft = p.length,
              st = ti !== !1,
              y, w, b, a, v, rt, et, ut, k, ot, d, tt;
            for ((r.indexOf(",") !== -1 || i.indexOf(",") !== -1) && (p = p.join(" ").replace(l, ", ").split(" "), it = it.join(" ").replace(l, ", ").split(" "), ft = p.length), ft !== it.length && (p = (f || "").split(" "), ft = p.length), e.plugin = h, e.setRatio = c, y = 0; y < ft; y++)
              if (a = p[y], v = it[y], ut = parseFloat(a), ut || ut === 0)
                e.appendXtra("", ut, rr(v, ut), v.replace(ai, ""), st && v.indexOf("px") !== -1, !0);
              else if (u && (a.charAt(0) === "#" || nt[a] || vi.test(a)))
              tt = v.charAt(v.length - 1) === "," ? ")," : ")", a = oi(a), v = oi(v), k = a.length + v.length > 6, k && !g && v[3] === 0 ? (e["xs" + e.l] += e.l ? " transparent" : "transparent", e.e = e.e.split(it[y]).join("transparent")) : (g || (k = !1), e.appendXtra(k ? "rgba(" : "rgb(", a[0], v[0] - a[0], ",", !0, !0).appendXtra("", a[1], v[1] - a[1], ",", !0).appendXtra("", a[2], v[2] - a[2], k ? "," : tt, !0), k && (a = a.length < 4 ? 1 : a[3], e.appendXtra("", a, (v.length < 4 ? 1 : v[3]) - a, tt, !1)));
            else if (rt = a.match(at), rt) {
              if (et = v.match(ai), !et || et.length !== rt.length)
                return e;
              for (b = 0, w = 0; w < rt.length; w++)
                d = rt[w], ot = a.indexOf(d, b), e.appendXtra(a.substr(b, ot - b), Number(d), rr(et[w], d), "", st && a.substr(ot + d.length, 2) === "px", w === 0), b = ot + d.length;
              e["xs" + e.l] += a.substr(b)
            } else
              e["xs" + e.l] += e.l ? " " + a : a;
            if (r.indexOf("=") !== -1 && e.data) {
              for (tt = e.xs0 + e.data.s, y = 1; y < e.l; y++)
                tt += e["xs" + y] + e.data["xn" + y];
              e.e = tt + e["xs" + y]
            }
            return e.l || (e.type = -1, e.xs0 = e.e), e.xfirst || e
          },
          s = 9;
        for (i = o.prototype, i.l = i.pr = 0; --s > 0;)
          i["xn" + s] = 0, i["xs" + s] = "";
        i.xs0 = "";
        i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null;
        i.appendXtra = function(n, t, i, r, u, f) {
          var e = this,
            s = e.l;
          return (e["xs" + s] += f && s ? " " + n : n || "", !i && s !== 0 && !e.plugin) ? (e["xs" + s] += t + (r || ""), e) : (e.l++, e.type = e.setRatio ? 2 : 1, e["xs" + e.l] = r || "", s > 0) ? (e.data["xn" + s] = t + i, e.rxp["xn" + s] = u, e["xn" + s] = t, e.plugin || (e.xfirst = new o(e, "xn" + s, t, i, e.xfirst || e, 0, e.n, u, e.pr), e.xfirst.xs0 = 0), e) : (e.data = {
            s: t + i
          }, e.rxp = {}, e.s = t, e.c = i, e.r = u, e)
        };
        var fr = function(n, t) {
            t = t || {};
            this.p = t.prefix ? ft(n) || n : n;
            c[n] = c[this.p] = this;
            this.format = t.formatter || ur(t.defaultValue, t.color, t.collapsible, t.multi);
            t.parser && (this.parse = t.parser);
            this.clrs = t.color;
            this.multi = t.multi;
            this.keyword = t.keyword;
            this.dflt = t.defaultValue;
            this.pr = t.priority || 0
          },
          u = v._registerComplexSpecialProp = function(n, t, i) {
            typeof t != "object" && (t = {
              parser: i
            });
            var u = n.split(","),
              f = t.defaultValue,
              r, e;
            for (i = i || [f], r = 0; r < u.length; r++)
              t.prefix = r === 0 && t.prefix, t.defaultValue = i[r] || f, e = new fr(u[r], t)
          },
          gr = function(n) {
            if (!c[n]) {
              var t = n.charAt(0).toUpperCase() + n.substr(1) + "Plugin";
              u(n, {
                parser: function(n, i, r, u, f, e, o) {
                  var s = (window.GreenSockGlobals || window).com.greensock.plugins[t];
                  return s ? (s._cssRegister(), c[r].parse(n, i, r, u, f, e, o)) : (nr("Error: " + t + " js file not loaded."), f)
                }
              })
            }
          };
        i = fr.prototype;
        i.parseComplex = function(n, t, i, r, u, f) {
          var h = this.keyword,
            o, s, e, a, v, c;
          if (this.multi && (l.test(i) || l.test(t) ? (s = t.replace(l, "|").split("|"), e = i.replace(l, "|").split("|")) : h && (s = [t], e = [i])), e) {
            for (a = e.length > s.length ? e.length : s.length, o = 0; o < a; o++)
              t = s[o] = s[o] || this.dflt, i = e[o] = e[o] || this.dflt, h && (v = t.indexOf(h), c = i.indexOf(h), v !== c && (i = c === -1 ? e : s, i[o] += " " + h));
            t = s.join(", ");
            i = e.join(", ")
          }
          return pt(n, this.p, t, i, this.clrs, this.dflt, r, this.pr, u, f)
        };
        i.parse = function(n, t, i, u, e, o) {
          return this.parseComplex(n.style, this.format(r(n, this.p, f, !1, this.dflt)), this.format(t), e, o)
        };
        e.registerSpecialProp = function(n, t, i) {
          u(n, {
            parser: function(n, r, u, f, e, s) {
              var h = new o(n, u, 0, 0, e, 2, u, !1, i);
              return h.plugin = s, h.setRatio = t(n, r, f._tween, u), h
            },
            priority: i
          })
        };
        var er = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective".split(","),
          h = ft("transform"),
          nu = tr + "transform",
          ci = ft("transformOrigin"),
          p = ft("perspective") !== null,
          or = v.Transform = function() {
            this.skewY = 0
          },
          ht = v.getTransform = function(n, t, i, u) {
            if (n._gsTransform && i && !u)
              return n._gsTransform;
            var f = i ? n._gsTransform || new or : new or,
              yi = f.scaleX < 0,
              et = 2e-5,
              v = 1e5,
              lt = 179.99,
              ot = lt * a,
              pi = p ? parseFloat(r(n, ci, t, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
              y, o, nt, at, ui, vt, yt, ut, tt, fi, ei, pt, wt;
            for (h ? y = r(n, nu, t, !0) : n.currentStyle && (y = n.currentStyle.filter.match(pr), y = y && y.length === 4 ? [y[0].substr(4), Number(y[2].substr(4)), Number(y[1].substr(4)), y[3].substr(4), f.x || 0, f.y || 0].join(",") : ""), o = (y || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], nt = o.length; --nt > -1;)
              at = Number(o[nt]), o[nt] = (ui = at - (at |= 0)) ? (ui * v + (ui < 0 ? -.5 : .5) | 0) / v + at : at;
            if (o.length === 16) {
              var st = o[8],
                b = o[9],
                w = o[10],
                hi = o[12],
                li = o[13],
                ht = o[14];
              if (f.zOrigin && (ht = -f.zOrigin, hi = st * ht - o[12], li = b * ht - o[13], ht = w * ht + f.zOrigin - o[14]), !i || u || f.rotationX == null) {
                var ft = o[0],
                  d = o[1],
                  bt = o[2],
                  wi = o[3],
                  kt = o[4],
                  g = o[5],
                  it = o[6],
                  bi = o[7],
                  rt = o[11],
                  s = Math.atan2(it, w),
                  ai = s < -ot || s > ot,
                  dt, ct, gt, c, l, oi, si;
                f.rotationX = s * k;
                s && (c = Math.cos(-s), l = Math.sin(-s), dt = kt * c + st * l, ct = g * c + b * l, gt = it * c + w * l, st = kt * -l + st * c, b = g * -l + b * c, w = it * -l + w * c, rt = bi * -l + rt * c, kt = dt, g = ct, it = gt);
                s = Math.atan2(st, ft);
                f.rotationY = s * k;
                s && (oi = s < -ot || s > ot, c = Math.cos(-s), l = Math.sin(-s), dt = ft * c - st * l, ct = d * c - b * l, gt = bt * c - w * l, b = d * l + b * c, w = bt * l + w * c, rt = wi * l + rt * c, ft = dt, d = ct, bt = gt);
                s = Math.atan2(d, g);
                f.rotation = s * k;
                s && (si = s < -ot || s > ot, c = Math.cos(-s), l = Math.sin(-s), ft = ft * c + kt * l, ct = d * c + g * l, g = d * -l + g * c, it = bt * -l + it * c, d = ct);
                si && ai ? f.rotation = f.rotationX = 0 : si && oi ? f.rotation = f.rotationY = 0 : oi && ai && (f.rotationY = f.rotationX = 0);
                f.scaleX = (Math.sqrt(ft * ft + d * d) * v + .5 | 0) / v;
                f.scaleY = (Math.sqrt(g * g + b * b) * v + .5 | 0) / v;
                f.scaleZ = (Math.sqrt(it * it + w * w) * v + .5 | 0) / v;
                f.skewX = 0;
                f.perspective = rt ? 1 / (rt < 0 ? -rt : rt) : 0;
                f.x = hi;
                f.y = li;
                f.z = ht
              }
            } else if ((!p || u || !o.length || f.x !== o[4] || f.y !== o[5] || !f.rotationX && !f.rotationY) && !(f.x !== undefined && r(n, "display", t) === "none")) {
              var vi = o.length >= 6,
                ni = vi ? o[0] : 1,
                ti = o[1] || 0,
                ii = o[2] || 0,
                ri = vi ? o[3] : 1;
              f.x = o[4] || 0;
              f.y = o[5] || 0;
              vt = Math.sqrt(ni * ni + ti * ti);
              yt = Math.sqrt(ri * ri + ii * ii);
              ut = ni || ti ? Math.atan2(ti, ni) * k : f.rotation || 0;
              tt = ii || ri ? Math.atan2(ii, ri) * k + ut : f.skewX || 0;
              fi = vt - Math.abs(f.scaleX || 0);
              ei = yt - Math.abs(f.scaleY || 0);
              Math.abs(tt) > 90 && Math.abs(tt) < 270 && (yi ? (vt *= -1, tt += ut <= 0 ? 180 : -180, ut += ut <= 0 ? 180 : -180) : (yt *= -1, tt += tt <= 0 ? 180 : -180));
              pt = (ut - f.rotation) % 180;
              wt = (tt - f.skewX) % 180;
              (f.skewX === undefined || fi > et || fi < -et || ei > et || ei < -et || pt > -lt && pt < lt && pt * v | !1 || wt > -lt && wt < lt && wt * v | !1) && (f.scaleX = vt, f.scaleY = yt, f.rotation = ut, f.skewX = tt);
              p && (f.rotationX = f.rotationY = f.z = 0, f.perspective = parseFloat(e.defaultTransformPerspective) || 0, f.scaleZ = 1)
            }
            f.zOrigin = pi;
            for (nt in f)
              f[nt] < et && f[nt] > -et && (f[nt] = 0);
            return i && (n._gsTransform = f), f
          },
          tu = function(n) {
            var t = this.data,
              nt = -t.rotation * a,
              ft = nt + t.skewX * a,
              e = 1e5,
              o = (Math.cos(nt) * t.scaleX * e | 0) / e,
              u = (Math.sin(nt) * t.scaleX * e | 0) / e,
              f = (Math.sin(ft) * -t.scaleY * e | 0) / e,
              h = (Math.cos(ft) * t.scaleY * e | 0) / e,
              d = this.t.style,
              g = this.t.currentStyle,
              c, w, et, k, p, ot;
            if (g) {
              w = u;
              u = -f;
              f = -w;
              c = g.filter;
              d.filter = "";
              var l = this.t.offsetWidth,
                v = this.t.offsetHeight,
                tt = g.position !== "absolute",
                b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + u + ", M21=" + f + ", M22=" + h,
                it = t.x,
                rt = t.y,
                i, r;
              if (t.ox != null && (i = (t.oxp ? l * t.ox * .01 : t.ox) - l / 2, r = (t.oyp ? v * t.oy * .01 : t.oy) - v / 2, it += i - (i * o + r * u), rt += r - (i * f + r * h)), tt ? (i = l / 2, r = v / 2, b += ", Dx=" + (i - (i * o + r * u) + it) + ", Dy=" + (r - (i * f + r * h) + rt) + ")") : b += ", sizingMethod='auto expand')", d.filter = c.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? c.replace(wr, b) : b + " " + c, (n === 0 || n === 1) && o === 1 && u === 0 && f === 0 && h === 1 && (tt && b.indexOf("Dx=0, Dy=0") === -1 || gt.test(c) && parseFloat(RegExp.$1) !== 100 || c.indexOf("gradient(" && c.indexOf("Alpha")) === -1 && d.removeAttribute("filter")), !tt)
                for (et = ut < 8 ? 1 : -1, i = t.ieOffsetX || 0, r = t.ieOffsetY || 0, t.ieOffsetX = Math.round((l - ((o < 0 ? -o : o) * l + (u < 0 ? -u : u) * v)) / 2 + it), t.ieOffsetY = Math.round((v - ((h < 0 ? -h : h) * v + (f < 0 ? -f : f) * l)) / 2 + rt), s = 0; s < 4; s++)
                  p = kr[s], k = g[p], w = k.indexOf("px") !== -1 ? parseFloat(k) : y(this.t, p, parseFloat(k), k.replace(dt, "")) || 0, ot = w !== t[p] ? s < 2 ? -t.ieOffsetX : -t.ieOffsetY : s < 2 ? i - t.ieOffsetX : r - t.ieOffsetY, d[p] = (t[p] = Math.round(w - ot * (s === 0 || s === 2 ? 1 : et))) + "px"
            }
          },
          li = v.set3DTransformRatio = function() {
            var t = this.data,
              st = this.t.style,
              f = t.rotation * a,
              o = t.scaleX,
              s = t.scaleY,
              l = t.scaleZ,
              k = t.perspective,
              nt, d, v, y, tt, g, p, w, ft, it, c, e, et, rt, b, ot, n, i, r, u, ht, ct, lt, ut;
            if (ki && (ut = .0001, o < ut && o > -ut && (o = l = 2e-5), s < ut && s > -ut && (s = l = 2e-5), !k || t.z || t.rotationX || t.rotationY || (k = 0)), f || t.skewX)
              i = Math.cos(f), r = Math.sin(f), nt = i, tt = r, t.skewX && (f -= t.skewX * a, i = Math.cos(f), r = Math.sin(f), t.skewType === "simple" && (u = Math.tan(t.skewX * a), u = Math.sqrt(1 + u * u), i *= u, r *= u)), d = -r, g = i;
            else if (t.rotationY || t.rotationX || l !== 1 || k)
              nt = g = 1, d = tt = 0;
            else {
              st[h] = "translate3d(" + t.x + "px," + t.y + "px," + t.z + "px)" + (o !== 1 || s !== 1 ? " scale(" + o + "," + s + ")" : "");
              return
            }
            c = 1;
            v = y = p = w = ft = it = e = et = rt = 0;
            b = k ? -1 / k : 0;
            ot = t.zOrigin;
            n = 1e5;
            f = t.rotationY * a;
            f && (i = Math.cos(f), r = Math.sin(f), ft = c * -r, et = b * -r, v = nt * r, p = tt * r, c *= i, b *= i, nt *= i, tt *= i);
            f = t.rotationX * a;
            f && (i = Math.cos(f), r = Math.sin(f), u = d * i + v * r, ht = g * i + p * r, ct = it * i + c * r, lt = rt * i + b * r, v = d * -r + v * i, p = g * -r + p * i, c = it * -r + c * i, b = rt * -r + b * i, d = u, g = ht, it = ct, rt = lt);
            l !== 1 && (v *= l, p *= l, c *= l, b *= l);
            s !== 1 && (d *= s, g *= s, it *= s, rt *= s);
            o !== 1 && (nt *= o, tt *= o, ft *= o, et *= o);
            ot && (e -= ot, y = v * e, w = p * e, e = c * e + ot);
            y = (u = (y += t.x) - (y |= 0)) ? (u * n + (u < 0 ? -.5 : .5) | 0) / n + y : y;
            w = (u = (w += t.y) - (w |= 0)) ? (u * n + (u < 0 ? -.5 : .5) | 0) / n + w : w;
            e = (u = (e += t.z) - (e |= 0)) ? (u * n + (u < 0 ? -.5 : .5) | 0) / n + e : e;
            st[h] = "matrix3d(" + [(nt * n | 0) / n, (tt * n | 0) / n, (ft * n | 0) / n, (et * n | 0) / n, (d * n | 0) / n, (g * n | 0) / n, (it * n | 0) / n, (rt * n | 0) / n, (v * n | 0) / n, (p * n | 0) / n, (c * n | 0) / n, (b * n | 0) / n, y, w, e, k ? 1 + -e / k : 1].join(",") + ")"
          },
          iu = v.set2DTransformRatio = function(n) {
            var t = this.data,
              s = this.t,
              o = s.style,
              r, u, i, f, e;
            if (t.rotationX || t.rotationY || t.z || t.force3D) {
              this.setRatio = li;
              li.call(this, n);
              return
            }
            t.rotation || t.skewX ? (r = t.rotation * a, u = r - t.skewX * a, i = 1e5, f = t.scaleX * i, e = t.scaleY * i, o[h] = "matrix(" + (Math.cos(r) * f | 0) / i + "," + (Math.sin(r) * f | 0) / i + "," + (Math.sin(u) * -e | 0) / i + "," + (Math.cos(u) * e | 0) / i + "," + t.x + "," + t.y + ")") : o[h] = "matrix(" + t.scaleX + ",0,0," + t.scaleY + "," + t.x + "," + t.y + ")"
          };
        for (u("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType", {
            parser: function(n, t, i, u, s, c, l) {
              if (u._transform)
                return s;
              var v = u._transform = ht(n, f, !0, l.parseTransform),
                d = n.style,
                ut = 1e-6,
                ft = er.length,
                a = l,
                nt = {},
                w, rt, k, y, tt, it, g;
              if (typeof a.transform == "string" && h)
                k = d.cssText, d[h] = a.transform, d.display = "block", w = ht(n, null, !1), d.cssText = k;
              else if (typeof a == "object") {
                if (w = {
                    scaleX: b(a.scaleX != null ? a.scaleX : a.scale, v.scaleX),
                    scaleY: b(a.scaleY != null ? a.scaleY : a.scale, v.scaleY),
                    scaleZ: b(a.scaleZ, v.scaleZ),
                    x: b(a.x, v.x),
                    y: b(a.y, v.y),
                    z: b(a.z, v.z),
                    perspective: b(a.transformPerspective, v.perspective)
                  }, g = a.directionalRotation, g != null)
                  if (typeof g == "object")
                    for (k in g)
                      a[k] = g[k];
                  else
                    a.rotation = g;
                w.rotation = st("rotation" in a ? a.rotation : "shortRotation" in a ? a.shortRotation + "_short" : "rotationZ" in a ? a.rotationZ : v.rotation, v.rotation, "rotation", nt);
                p && (w.rotationX = st("rotationX" in a ? a.rotationX : "shortRotationX" in a ? a.shortRotationX + "_short" : v.rotationX || 0, v.rotationX, "rotationX", nt), w.rotationY = st("rotationY" in a ? a.rotationY : "shortRotationY" in a ? a.shortRotationY + "_short" : v.rotationY || 0, v.rotationY, "rotationY", nt));
                w.skewX = a.skewX == null ? v.skewX : st(a.skewX, v.skewX);
                w.skewY = a.skewY == null ? v.skewY : st(a.skewY, v.skewY);
                (rt = w.skewY - v.skewY) && (w.skewX += rt, w.rotation += rt)
              }
              for (p && a.force3D != null && (v.force3D = a.force3D, it = !0), v.skewType = a.skewType || v.skewType || e.defaultSkewType, tt = v.force3D || v.z || v.rotationX || v.rotationY || w.z || w.rotationX || w.rotationY || w.perspective, tt || a.scale == null || (w.scaleZ = 1); --ft > -1;)
                i = er[ft], y = w[i] - v[i], (y > ut || y < -ut || yt[i] != null) && (it = !0, s = new o(v, i, v[i], y, s), i in nt && (s.e = nt[i]), s.xs0 = 0, s.plugin = c, u._overwriteProps.push(s.n));
              return y = a.transformOrigin, (y || p && tt && v.zOrigin) && (h ? (it = !0, i = ci, y = (y || r(n, i, f, !1, "50% 50%")) + "", s = new o(d, i, 0, 0, s, -1, "transformOrigin"), s.b = d[i], s.plugin = c, p ? (k = v.zOrigin, y = y.split(" "), v.zOrigin = (y.length > 2 && !(k !== 0 && y[2] === "0px") ? parseFloat(y[2]) : k) || 0, s.xs0 = s.e = d[i] = y[0] + " " + (y[1] || "50%") + " 0px", s = new o(v, "zOrigin", 0, 0, s, -1, s.n), s.b = k, s.xs0 = s.e = v.zOrigin) : s.xs0 = s.e = d[i] = y) : fi(y + "", v)), it && (u._transformType = tt || this._transformType === 3 ? 3 : 2), s
            },
            prefix: !0
          }), u("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
          }), u("borderRadius", {
            defaultValue: "0px",
            parser: function(n, t, i, u, e) {
              t = this.format(t);
              var v = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                ut = n.style,
                tt, l, d, h, o, s, w, a, it, rt, c, p, g, b, k, nt;
              for (it = parseFloat(n.offsetWidth), rt = parseFloat(n.offsetHeight), tt = t.split(" "), l = 0; l < v.length; l++)
                this.p.indexOf("border") && (v[l] = ft(v[l])), o = h = r(n, v[l], f, !1, "0px"), o.indexOf(" ") !== -1 && (h = o.split(" "), o = h[0], h = h[1]), s = d = tt[l], w = parseFloat(o), p = o.substr((w + "").length), g = s.charAt(1) === "=", g ? (a = parseInt(s.charAt(0) + "1", 10), s = s.substr(2), a *= parseFloat(s), c = s.substr((a + "").length - (a < 0 ? 1 : 0)) || "") : (a = parseFloat(s), c = s.substr((a + "").length)), c === "" && (c = lt[i] || p), c !== p && (b = y(n, "borderLeft", w, p), k = y(n, "borderTop", w, p), c === "%" ? (o = b / it * 100 + "%", h = k / rt * 100 + "%") : c === "em" ? (nt = y(n, "borderLeft", 1, "em"), o = b / nt + "em", h = k / nt + "em") : (o = b + "px", h = k + "px"), g && (s = parseFloat(o) + a + c, d = parseFloat(h) + a + c)), e = pt(ut, v[l], o + " " + h, s + " " + d, !1, "0px", e);
              return e
            },
            prefix: !0,
            formatter: ur("0px 0px 0px 0px", !1, !0)
          }), u("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(n, t, i, u, e, o) {
              var v = "background-position",
                c = f || et(n, null),
                s = this.format((c ? ut ? c.getPropertyValue(v + "-x") + " " + c.getPropertyValue(v + "-y") : c.getPropertyValue(v) : n.currentStyle.backgroundPositionX + " " + n.currentStyle.backgroundPositionY) || "0 0"),
                y = this.format(t),
                l, b, h, p, w, a;
              if (s.indexOf("%") !== -1 != (y.indexOf("%") !== -1) && (a = r(n, "backgroundImage").replace(vr, ""), a && a !== "none")) {
                for (l = s.split(" "), b = y.split(" "), ni.setAttribute("src", a), h = 2; --h > -1;)
                  s = l[h], p = s.indexOf("%") !== -1, p !== (b[h].indexOf("%") !== -1) && (w = h === 0 ? n.offsetWidth - ni.width : n.offsetHeight - ni.height, l[h] = p ? parseFloat(s) / 100 * w + "px" : parseFloat(s) / w * 100 + "%");
                s = l.join(" ")
              }
              return this.parseComplex(n.style, s, y, e, o)
            },
            formatter: fi
          }), u("backgroundSize", {
            defaultValue: "0 0",
            formatter: fi
          }), u("perspective", {
            defaultValue: "0px",
            prefix: !0
          }), u("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
          }), u("transformStyle", {
            prefix: !0
          }), u("backfaceVisibility", {
            prefix: !0
          }), u("userSelect", {
            prefix: !0
          }), u("margin", {
            parser: si("marginTop,marginRight,marginBottom,marginLeft")
          }), u("padding", {
            parser: si("paddingTop,paddingRight,paddingBottom,paddingLeft")
          }), u("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(n, t, i, u, e, o) {
              var c, s, h;
              return ut < 9 ? (s = n.currentStyle, h = ut < 8 ? " " : ",", c = "rect(" + s.clipTop + h + s.clipRight + h + s.clipBottom + h + s.clipLeft + ")", t = this.format(t).split(",").join(h)) : (c = this.format(r(n, this.p, f, !1, this.dflt)), t = this.format(t)), this.parseComplex(n.style, c, t, e, o)
            }
          }), u("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
          }), u("autoRound,strictUnits", {
            parser: function(n, t, i, r, u) {
              return u
            }
          }), u("border", {
            defaultValue: "0px solid #000",
            parser: function(n, t, i, u, e, o) {
              return this.parseComplex(n.style, this.format(r(n, "borderTopWidth", f, !1, "0px") + " " + r(n, "borderTopStyle", f, !1, "solid") + " " + r(n, "borderTopColor", f, !1, "#000")), this.format(t), e, o)
            },
            color: !0,
            formatter: function(n) {
              var t = n.split(" ");
              return t[0] + " " + (t[1] || "solid") + " " + (n.match(tt) || ["#000"])[0]
            }
          }), u("borderWidth", {
            parser: si("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
          }), u("float,cssFloat,styleFloat", {
            parser: function(n, t, i, r, u) {
              var f = n.style,
                e = "cssFloat" in f ? "cssFloat" : "styleFloat";
              return new o(f, e, 0, 0, u, -1, i, !1, 0, f[e], t)
            }
          }), sr = function(n) {
            var i = this.t,
              t = i.filter || r(this.data, "filter"),
              u = this.s + this.c * n | 0,
              f;
            u === 100 && (t.indexOf("atrix(") === -1 && t.indexOf("radient(") === -1 && t.indexOf("oader(") === -1 ? (i.removeAttribute("filter"), f = !r(this.data, "filter")) : (i.filter = t.replace(ar, ""), f = !0));
            f || (this.xn1 && (i.filter = t = t || "alpha(opacity=" + u + ")"), t.indexOf("opacity") === -1 ? u === 0 && this.xn1 || (i.filter = t + " alpha(opacity=" + u + ")") : i.filter = t.replace(gt, "opacity=" + u))
          }, u("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(n, t, i, u, e, s) {
              var h = parseFloat(r(n, "opacity", f, !1, "1")),
                c = n.style,
                l = i === "autoAlpha";
              return typeof t == "string" && t.charAt(1) === "=" && (t = (t.charAt(0) === "-" ? -1 : 1) * parseFloat(t.substr(2)) + h), l && h === 1 && r(n, "visibility", f) === "hidden" && t !== 0 && (h = 0), g ? e = new o(c, "opacity", h, t - h, e) : (e = new o(c, "opacity", h * 100, (t - h) * 100, e), e.xn1 = l ? 1 : 0, c.zoom = 1, e.type = 2, e.b = "alpha(opacity=" + e.s + ")", e.e = "alpha(opacity=" + (e.s + e.c) + ")", e.data = n, e.plugin = s, e.setRatio = sr), l && (e = new o(c, "visibility", 0, 0, e, -1, null, !1, 0, h !== 0 ? "inherit" : "hidden", t === 0 ? "hidden" : "inherit"), e.xs0 = "inherit", u._overwriteProps.push(e.n), u._overwriteProps.push(i)), e
            }
          }), wt = function(n, t) {
            t && (n.removeProperty ? (t.substr(0, 2) === "ms" && (t = "M" + t.substr(1)), n.removeProperty(t.replace(yi, "-$1").toLowerCase())) : n.removeAttribute(t))
          }, hr = function(n) {
            if (this.t._gsClassPT = this, n === 1 || n === 0) {
              this.t.className = n === 0 ? this.b : this.e;
              for (var t = this.data, i = this.t.style; t;)
                t.v ? i[t.p] = t.v : wt(i, t.p), t = t._next;
              n === 1 && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
              this.t.className !== this.e && (this.t.className = this.e)
          }, u("className", {
            parser: function(n, t, i, r, u, e, s) {
              var l = n.className,
                p = n.style.cssText,
                a, y, c, v, h;
              if (u = r._classNamePT = new o(n, i, 0, 0, u, 2), u.setRatio = hr, u.pr = -11, it = !0, u.b = l, y = ot(n, f), c = n._gsClassPT, c) {
                for (v = {}, h = c.data; h;)
                  v[h.p] = 1, h = h._next;
                c.setRatio(1)
              }
              return n._gsClassPT = u, u.e = t.charAt(1) !== "=" ? t : l.replace(new RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + (t.charAt(0) === "+" ? " " + t.substr(2) : ""), r._tween._duration && (n.className = u.e, a = ui(n, y, ot(n), s, v), n.className = l, u.data = a.firstMPT, n.style.cssText = p, u = u.xfirst = r.parse(n, a.difs, u, e)), u
            }
          }), cr = function(n) {
            if ((n === 1 || n === 0) && this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") {
              var i = this.t.style,
                e = c.transform.parse,
                r, t, u, f;
              if (this.e === "all")
                i.cssText = "", f = !0;
              else
                for (r = this.e.split(","), u = r.length; --u > -1;)
                  t = r[u], c[t] && (c[t].parse === e ? f = !0 : t = t === "transformOrigin" ? ci : c[t].p), wt(i, t);
              f && (wt(i, h), this.t._gsTransform && delete this.t._gsTransform)
            }
          }, u("clearProps", {
            parser: function(n, t, i, r, u) {
              return u = new o(n, i, 0, 0, u, 2), u.setRatio = cr, u.e = t, u.pr = -10, u.data = r._tween, it = !0, u
            }
          }), i = "bezier,throwProps,physicsProps,physics2D".split(","), s = i.length; s--;)
          gr(i[s]);
        return i = e.prototype, i._firstPT = null, i._onInitTween = function(n, t, i) {
          if (!n.nodeType)
            return !1;
          this._target = n;
          this._tween = i;
          this._vars = t;
          ti = t.autoRound;
          it = !1;
          lt = t.suffixMap || e.suffixMap;
          f = et(n, "");
          bt = this._overwriteProps;
          var c = n.style,
            l, s, u, a, b, k, y, v, w;
          if (bi && c.zIndex === "" && (l = r(n, "zIndex", f), (l === "auto" || l === "") && (c.zIndex = 0)), typeof t == "string" && (a = c.cssText, l = ot(n, f), c.cssText = a + ";" + t, l = ui(n, l, ot(n)).difs, !g && lr.test(t) && (l.opacity = parseFloat(RegExp.$1)), t = l, c.cssText = a), this._firstPT = s = this.parse(n, t, null), this._transformType) {
            for (w = this._transformType === 3, h ? ii && (bi = !0, c.zIndex === "" && (y = r(n, "zIndex", f), (y === "auto" || y === "") && (c.zIndex = 0)), di && (c.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : c.zoom = 1, u = s; u && u._next;)
              u = u._next;
            v = new o(n, "transform", 0, 0, null, 2);
            this._linkCSSP(v, null, u);
            v.setRatio = w && p ? li : h ? iu : tu;
            v.data = this._transform || ht(n, f, !0);
            bt.pop()
          }
          if (it) {
            while (s) {
              for (k = s._next, u = a; u && u.pr > s.pr;)
                u = u._next;
              (s._prev = u ? u._prev : b) ? s._prev._next = s: a = s;
              (s._next = u) ? u._prev = s: b = s;
              s = k
            }
            this._firstPT = a
          }
          return !0
        }, i.parse = function(n, t, i, u) {
          var b = n.style,
            e, d, h, l, v, s, p, a, w, k;
          for (e in t)
            s = t[e], d = c[e], d ? i = d.parse(n, s, e, this, i, u, t) : (v = r(n, e, f) + "", w = typeof s == "string", e === "color" || e === "fill" || e === "stroke" || e.indexOf("Color") !== -1 || w && vi.test(s) ? (w || (s = oi(s), s = (s.length > 3 ? "rgba(" : "rgb(") + s.join(",") + ")"), i = pt(b, e, v, s, !0, "transparent", i, 0, u)) : w && (s.indexOf(" ") !== -1 || s.indexOf(",") !== -1) ? i = pt(b, e, v, s, !0, null, i, 0, u) : (h = parseFloat(v), p = h || h === 0 ? v.substr((h + "").length) : "", (v === "" || v === "auto") && (e === "width" || e === "height" ? (h = dr(n, e, f), p = "px") : e === "left" || e === "top" ? (h = ir(n, e, f), p = "px") : (h = e !== "opacity" ? 0 : 1, p = "")), k = w && s.charAt(1) === "=", k ? (l = parseInt(s.charAt(0) + "1", 10), s = s.substr(2), l *= parseFloat(s), a = s.replace(dt, "")) : (l = parseFloat(s), a = w ? s.substr((l + "").length) || "" : ""), a === "" && (a = e in lt ? lt[e] : p), s = l || l === 0 ? (k ? l + h : l) + a : t[e], p !== a && a !== "" && (l || l === 0) && h && (h = y(n, e, h, p), a === "%" ? (h /= y(n, e, 100, "%") / 100, t.strictUnits !== !0 && (v = h + "%")) : a === "em" ? h /= y(n, e, 1, "em") : a !== "px" && (l = y(n, e, l, a), a = "px"), k && (l || l === 0) && (s = l + h + a)), k && (l += h), (h || h === 0) && (l || l === 0) ? (i = new o(b, e, h, l - h, i, 0, e, ti !== !1 && (a === "px" || e === "zIndex"), 0, v, s), i.xs0 = a) : b[e] !== undefined && (s || s + "" != "NaN" && s != null) ? (i = new o(b, e, l || h || 0, 0, i, -1, e, !1, 0, v, s), i.xs0 = s === "none" && (e === "display" || e.indexOf("Style") !== -1) ? v : s) : nr("invalid " + e + " tween value: " + t[e]))), u && i && !i.plugin && (i.plugin = u);
          return i
        }, i.setRatio = function(n) {
          var t = this._firstPT,
            f = 1e-6,
            i, u, r;
          if (n === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0))
            while (t)
              t.type !== 2 ? t.t[t.p] = t.e : t.setRatio(n), t = t._next;
          else if (!n && (this._tween._time === this._tween._duration || this._tween._time === 0) && this._tween._rawPrevTime !== -1e-6)
            while (t)
              t.type !== 2 ? t.t[t.p] = t.b : t.setRatio(n), t = t._next;
          else
            while (t) {
              if (i = t.c * n + t.s, t.r ? i = Math.round(i) : i < f && i > -f && (i = 0), t.type)
                if (t.type === 1)
                  if (r = t.l, r === 2)
                    t.t[t.p] = t.xs0 + i + t.xs1 + t.xn1 + t.xs2;
                  else if (r === 3)
                t.t[t.p] = t.xs0 + i + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3;
              else if (r === 4)
                t.t[t.p] = t.xs0 + i + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4;
              else if (r === 5)
                t.t[t.p] = t.xs0 + i + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5;
              else {
                for (u = t.xs0 + i + t.xs1, r = 1; r < t.l; r++)
                  u += t["xn" + r] + t["xs" + (r + 1)];
                t.t[t.p] = u
              } else
                t.type === -1 ? t.t[t.p] = t.xs0 : t.setRatio && t.setRatio(n);
              else
                t.t[t.p] = i + t.xs0;
              t = t._next
            }
        }, i._enableTransforms = function(n) {
          this._transformType = n || this._transformType === 3 ? 3 : 2;
          this._transform = this._transform || ht(this._target, f, !0)
        }, i._linkCSSP = function(n, t, i, r) {
          return n && (t && (t._prev = n), n._next && (n._next._prev = n._prev), n._prev ? n._prev._next = n._next : this._firstPT === n && (this._firstPT = n._next, r = !0), i ? i._next = n : r || this._firstPT !== null || (this._firstPT = n), n._next = t, n._prev = i), n
        }, i._kill = function(t) {
          var u = t,
            i, f, r;
          if (t.autoAlpha || t.alpha) {
            u = {};
            for (f in t)
              u[f] = t[f];
            u.opacity = 1;
            u.autoAlpha && (u.visibility = 1)
          }
          return t.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), n.prototype._kill.call(this, u)
        }, ct = function(n, t, i) {
          var e, u, r, f;
          if (n.slice) {
            for (u = n.length; --u > -1;)
              ct(n[u], t, i);
            return
          }
          for (e = n.childNodes, u = e.length; --u > -1;)
            r = e[u], f = r.type, r.style && (t.push(ot(r)), i && i.push(r)), (f === 1 || f === 9 || f === 11) && r.childNodes.length && ct(r, t, i)
        }, e.cascadeTo = function(n, i, r) {
          var u = t.to(n, i, r),
            h = [u],
            c = [],
            l = [],
            o = [],
            a = t._internals.reservedProps,
            f, e, s;
          for (n = u._targets || u.target, ct(n, c, o), u.render(i, !0), ct(n, l), u.render(0, !0), u._enabled(!0), f = o.length; --f > -1;)
            if (e = ui(o[f], c[f], l[f]), e.firstMPT) {
              e = e.difs;
              for (s in r)
                a[s] && (e[s] = r[s]);
              h.push(t.to(o[f], i, e))
            }
          return h
        }, n.activate([e]), e
      }, !0),
      function() {
        var t = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(n, t, i) {
              return this._tween = i, !0
            }
          }),
          n = t.prototype;
        n._onInitAllProps = function() {
          for (var t = this._tween, u = t.vars.roundProps instanceof Array ? t.vars.roundProps : t.vars.roundProps.split(","), r = u.length, e = {}, o = t._propLookup.roundProps, f, n, i; --r > -1;)
            e[u[r]] = 1;
          for (r = u.length; --r > -1;)
            for (f = u[r], n = t._firstPT; n;)
              i = n._next, n.pg ? n.t._roundProps(e, !0) : n.n === f && (this._add(n.t, f, n.s, n.c), i && (i._prev = n._prev), n._prev ? n._prev._next = i : t._firstPT === n && (t._firstPT = i), n._next = n._prev = null, t._propLookup[f] = o), n = i;
          return !1
        };
        n._add = function(n, t, i, r) {
          this._addTween(n, t, i, i + r, t, !0);
          this._overwriteProps.push(t)
        }
      }();
    window._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.3.0",
      init: function(n, t, i) {
        var r, u, f;
        if (typeof n.setAttribute != "function")
          return !1;
        this._target = n;
        this._proxy = {};
        this._start = {};
        this._end = {};
        this._endRatio = i.vars.runBackwards ? 0 : 1;
        for (r in t)
          this._start[r] = this._proxy[r] = u = n.getAttribute(r), this._end[r] = f = t[r], this._addTween(this._proxy, r, parseFloat(u), f, r), this._overwriteProps.push(r);
        return !0
      },
      set: function(n) {
        this._super.setRatio.call(this, n);
        for (var i = this._overwriteProps, r = i.length, u = n !== 0 && n !== 1 ? this._proxy : n === this._endRatio ? this._end : this._start, t; --r > -1;)
          t = i[r], this._target.setAttribute(t, u[t] + "")
      }
    });
    window._gsDefine.plugin({
      propName: "directionalRotation",
      API: 2,
      version: "0.2.0",
      init: function(n, t) {
        typeof t != "object" && (t = {
          rotation: t
        });
        this.finals = {};
        var u = t.useRadians === !0 ? Math.PI * 2 : 360,
          s = 1e-6,
          r, f, e, h, i, o;
        for (r in t)
          r !== "useRadians" && (o = (t[r] + "").split("_"), f = o[0], e = parseFloat(typeof n[r] != "function" ? n[r] : n[r.indexOf("set") || typeof n["get" + r.substr(3)] != "function" ? r : "get" + r.substr(3)]()), h = this.finals[r] = typeof f == "string" && f.charAt(1) === "=" ? e + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0, i = h - e, o.length && (f = o.join("_"), f.indexOf("short") !== -1 && (i = i % u, i !== i % (u / 2) && (i = i < 0 ? i + u : i - u)), f.indexOf("_cw") !== -1 && i < 0 ? i = (i + u * 9999999999) % u - (i / u | 0) * u : f.indexOf("ccw") !== -1 && i > 0 && (i = (i - u * 9999999999) % u - (i / u | 0) * u)), (i > s || i < -s) && (this._addTween(n, r, e, e + i, r), this._overwriteProps.push(r)));
        return !0
      },
      set: function(n) {
        var t;
        if (n !== 1)
          this._super.setRatio.call(this, n);
        else
          for (t = this._firstPT; t;)
            t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
      }
    })._autoCSS = !0;
    window._gsDefine("easing.Back", ["easing.Ease"], function(n) {
      var v = window.GreenSockGlobals || window,
        p = v.com.greensock,
        s = Math.PI * 2,
        y = Math.PI / 2,
        r = p._class,
        t = function(t, i) {
          var u = r("easing." + t, function() {}, !0),
            f = u.prototype = new n;
          return f.constructor = u, f.getRatio = i, u
        },
        h = n.register || function() {},
        f = function(n, t, i, u) {
          var f = r("easing." + n, {
            easeOut: new t,
            easeIn: new i,
            easeInOut: new u
          }, !0);
          return h(f, n), f
        },
        l = function(n, t, i) {
          this.t = n;
          this.v = t;
          i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - n)
        },
        a = function(t, i) {
          var u = r("easing." + t, function(n) {
              this._p1 = n || n === 0 ? n : 1.70158;
              this._p2 = this._p1 * 1.525
            }, !0),
            f = u.prototype = new n;
          return f.constructor = u, f.getRatio = i, f.config = function(n) {
            return new u(n)
          }, u
        },
        w = f("Back", a("BackOut", function(n) {
          return (n = n - 1) * n * ((this._p1 + 1) * n + this._p1) + 1
        }), a("BackIn", function(n) {
          return n * n * ((this._p1 + 1) * n - this._p1)
        }), a("BackInOut", function(n) {
          return (n *= 2) < 1 ? .5 * n * n * ((this._p2 + 1) * n - this._p2) : .5 * ((n -= 2) * n * ((this._p2 + 1) * n + this._p2) + 2)
        })),
        e = r("easing.SlowMo", function(n, t, i) {
          t = t || t === 0 ? t : .7;
          n == null ? n = .7 : n > 1 && (n = 1);
          this._p = n !== 1 ? t : 0;
          this._p1 = (1 - n) / 2;
          this._p2 = n;
          this._p3 = this._p1 + this._p2;
          this._calcEnd = i === !0
        }, !0),
        i = e.prototype = new n,
        o, u, c;
      return i.constructor = e, i.getRatio = function(n) {
        var t = n + (.5 - n) * this._p;
        return n < this._p1 ? this._calcEnd ? 1 - (n = 1 - n / this._p1) * n : t - (n = 1 - n / this._p1) * n * n * n * t : n > this._p3 ? this._calcEnd ? 1 - (n = (n - this._p3) / this._p1) * n : t + (n - t) * (n = (n - this._p3) / this._p1) * n * n * n : this._calcEnd ? 1 : t
      }, e.ease = new e(.7, .7), i.config = e.config = function(n, t, i) {
        return new e(n, t, i)
      }, o = r("easing.SteppedEase", function(n) {
        n = n || 1;
        this._p1 = 1 / n;
        this._p2 = n + 1
      }, !0), i = o.prototype = new n, i.constructor = o, i.getRatio = function(n) {
        return n < 0 ? n = 0 : n >= 1 && (n = .999999999), (this._p2 * n >> 0) * this._p1
      }, i.config = o.config = function(n) {
        return new o(n)
      }, u = r("easing.RoughEase", function(t) {
        t = t || {};
        for (var h = t.taper || "none", c = [], w = 0, a = (t.points || 20) | 0, e = a, y = t.randomize !== !1, b = t.clamp === !0, p = t.template instanceof n ? t.template : null, s = typeof t.strength == "number" ? t.strength * .4 : .4, i, r, u, f, v, o; --e > -1;)
          i = y ? Math.random() : 1 / a * e, r = p ? p.getRatio(i) : i, h === "none" ? u = s : h === "out" ? (f = 1 - i, u = f * f * s) : h === "in" ? u = i * i * s : i < .5 ? (f = i * 2, u = f * f * .5 * s) : (f = (1 - i) * 2, u = f * f * .5 * s), y ? r += Math.random() * u - u * .5 : e % 2 ? r += u * .5 : r -= u * .5, b && (r > 1 ? r = 1 : r < 0 && (r = 0)), c[w++] = {
            x: i,
            y: r
          };
        for (c.sort(function(n, t) {
            return n.x - t.x
          }), o = new l(1, 1, null), e = a; --e > -1;)
          v = c[e], o = new l(v.x, v.y, o);
        this._prev = new l(0, 0, o.t !== 0 ? o : o.next)
      }, !0), i = u.prototype = new n, i.constructor = u, i.getRatio = function(n) {
        var t = this._prev;
        if (n > t.t) {
          while (t.next && n >= t.t)
            t = t.next;
          t = t.prev
        } else
          while (t.prev && n <= t.t)
            t = t.prev;
        return this._prev = t, t.v + (n - t.t) / t.gap * t.c
      }, i.config = function(n) {
        return new u(n)
      }, u.ease = new u, f("Bounce", t("BounceOut", function(n) {
        return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
      }), t("BounceIn", function(n) {
        return (n = 1 - n) < 1 / 2.75 ? 1 - 7.5625 * n * n : n < 2 / 2.75 ? 1 - (7.5625 * (n -= 1.5 / 2.75) * n + .75) : n < 2.5 / 2.75 ? 1 - (7.5625 * (n -= 2.25 / 2.75) * n + .9375) : 1 - (7.5625 * (n -= 2.625 / 2.75) * n + .984375)
      }), t("BounceInOut", function(n) {
        var t = n < .5;
        return n = t ? 1 - n * 2 : n * 2 - 1, n = n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375, t ? (1 - n) * .5 : n * .5 + .5
      })), f("Circ", t("CircOut", function(n) {
        return Math.sqrt(1 - (n = n - 1) * n)
      }), t("CircIn", function(n) {
        return -(Math.sqrt(1 - n * n) - 1)
      }), t("CircInOut", function(n) {
        return (n *= 2) < 1 ? -.5 * (Math.sqrt(1 - n * n) - 1) : .5 * (Math.sqrt(1 - (n -= 2) * n) + 1)
      })), c = function(t, i, u) {
        var f = r("easing." + t, function(n, t) {
            this._p1 = n || 1;
            this._p2 = t || u;
            this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0)
          }, !0),
          e = f.prototype = new n;
        return e.constructor = f, e.getRatio = i, e.config = function(n, t) {
          return new f(n, t)
        }, f
      }, f("Elastic", c("ElasticOut", function(n) {
        return this._p1 * Math.pow(2, -10 * n) * Math.sin((n - this._p3) * s / this._p2) + 1
      }, .3), c("ElasticIn", function(n) {
        return -(this._p1 * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - this._p3) * s / this._p2))
      }, .3), c("ElasticInOut", function(n) {
        return (n *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - this._p3) * s / this._p2) : this._p1 * Math.pow(2, -10 * (n -= 1)) * Math.sin((n - this._p3) * s / this._p2) * .5 + 1
      }, .45)), f("Expo", t("ExpoOut", function(n) {
        return 1 - Math.pow(2, -10 * n)
      }), t("ExpoIn", function(n) {
        return Math.pow(2, 10 * (n - 1)) - .001
      }), t("ExpoInOut", function(n) {
        return (n *= 2) < 1 ? .5 * Math.pow(2, 10 * (n - 1)) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
      })), f("Sine", t("SineOut", function(n) {
        return Math.sin(n * y)
      }), t("SineIn", function(n) {
        return -Math.cos(n * y) + 1
      }), t("SineInOut", function(n) {
        return -.5 * (Math.cos(Math.PI * n) - 1)
      })), r("easing.EaseLookup", {
        find: function(t) {
          return n.map[t]
        }
      }, !0), h(v.SlowMo, "SlowMo", "ease,"), h(u, "RoughEase", "ease,"), h(o, "SteppedEase", "ease,"), w
    }, !0)
  }),
  function(n) {
    "use strict";
    var it = n.GreenSockGlobals || n,
      ot, o, ct, nt, h;
    if (!it.TweenLite) {
      var yt = function(n) {
          for (var r = n.split("."), i = it, t = 0; t < r.length; t++)
            i[r[t]] = i = i[r[t]] || {};
          return i
        },
        a = yt("com.greensock"),
        f = 1e-10,
        pt = [].slice,
        wt = function() {},
        b = function() {
          var n = Object.prototype.toString,
            t = n.call([]);
          return function(i) {
            return i != null && (i instanceof Array || typeof i == "object" && !!i.push && n.call(i) === t)
          }
        }(),
        e, u, t, r, s, k = {},
        bt = function(t, i, r, u) {
          this.sc = k[t] ? k[t].sc : [];
          k[t] = this;
          this.gsClass = null;
          this.func = r;
          var f = [];
          this.check = function(e) {
            for (var o = i.length, a = o, h, c, l, s; --o > -1;)
              (h = k[i[o]] || new bt(i[o], [])).gsClass ? (f[o] = h.gsClass, a--) : e && h.sc.push(this);
            if (a === 0 && r)
              for (c = ("com.greensock." + t).split("."), l = c.pop(), s = yt(c.join("."))[l] = this.gsClass = r.apply(r, f), u && (it[l] = s, typeof define == "function" && define.amd ? define((n.GreenSockAMDPath ? n.GreenSockAMDPath + "/" : "") + t.split(".").join("/"), [], function() {
                  return s
                }) : typeof module != "undefined" && module.exports && (module.exports = s)), o = 0; o < this.sc.length; o++)
                this.sc[o].check()
          };
          this.check(!0)
        },
        ut = n._gsDefine = function(n, t, i, r) {
          return new bt(n, t, i, r)
        },
        c = a._class = function(n, t, i) {
          return t = t || function() {}, ut(n, [], function() {
            return t
          }, i), t
        };
      ut.globals = it;
      var kt = [0, 0, 1, 1],
        ft = [],
        l = c("easing.Ease", function(n, t, i, r) {
          this._func = n;
          this._type = i || 0;
          this._power = r || 0;
          this._params = t ? kt.concat(t) : kt
        }, !0),
        d = l.map = {},
        et = l.register = function(n, t, i, r) {
          for (var o = t.split(","), s = o.length, h = (i || "easeIn,easeOut,easeInOut").split(","), l, u, e, f; --s > -1;)
            for (u = o[s], l = r ? c("easing." + u, null, !0) : a.easing[u] || {}, e = h.length; --e > -1;)
              f = h[e], d[u + "." + f] = d[f + u] = l[f] = n.getRatio ? n : n[f] || new n
        };
      for (t = l.prototype, t._calcEnd = !1, t.getRatio = function(n) {
          if (this._func)
            return this._params[0] = n, this._func.apply(null, this._params);
          var i = this._type,
            r = this._power,
            t = i === 1 ? 1 - n : i === 2 ? n : n < .5 ? n * 2 : (1 - n) * 2;
          return r === 1 ? t *= t : r === 2 ? t *= t * t : r === 3 ? t *= t * t * t : r === 4 && (t *= t * t * t * t), i === 1 ? 1 - t : i === 2 ? t : n < .5 ? t / 2 : 1 - t / 2
        }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], u = e.length; --u > -1;)
        t = e[u] + ",Power" + u, et(new l(null, null, 1, u), t, "easeOut", !0), et(new l(null, null, 2, u), t, "easeIn" + (u === 0 ? ",easeNone" : "")), et(new l(null, null, 3, u), t, "easeInOut");
      d.linear = a.easing.Linear.easeIn;
      d.swing = a.easing.Quad.easeInOut;
      ot = c("events.EventDispatcher", function(n) {
        this._listeners = {};
        this._eventTarget = n || this
      });
      t = ot.prototype;
      t.addEventListener = function(n, t, i, u, f) {
        f = f || 0;
        var e = this._listeners[n],
          c = 0,
          h, o;
        for (e == null && (this._listeners[n] = e = []), o = e.length; --o > -1;)
          h = e[o], h.c === t && h.s === i ? e.splice(o, 1) : c === 0 && h.pr < f && (c = o + 1);
        e.splice(c, 0, {
          c: t,
          s: i,
          up: u,
          pr: f
        });
        this !== r || s || r.wake()
      };
      t.removeEventListener = function(n, t) {
        var i = this._listeners[n],
          r;
        if (i)
          for (r = i.length; --r > -1;)
            if (i[r].c === t) {
              i.splice(r, 1);
              return
            }
      };
      t.dispatchEvent = function(n) {
        var r = this._listeners[n],
          u, i, t;
        if (r)
          for (u = r.length, i = this._eventTarget; --u > -1;)
            t = r[u], t.up ? t.c.call(t.s || i, {
              type: n,
              target: i
            }) : t.c.call(t.s || i)
      };
      var g = n.requestAnimationFrame,
        st = n.cancelAnimationFrame,
        rt = Date.now || function() {
          return (new Date).getTime()
        },
        ht = rt();
      for (e = ["ms", "moz", "webkit", "o"], u = e.length; --u > -1 && !g;)
        g = n[e[u] + "RequestAnimationFrame"], st = n[e[u] + "CancelAnimationFrame"] || n[e[u] + "CancelRequestAnimationFrame"];
      c("Ticker", function(n, t) {
        var i = this,
          a = rt(),
          e = t !== !1 && g,
          f, c, u, o, h, l = function(n) {
            ht = rt();
            i.time = (ht - a) / 1e3;
            var t = i.time - h,
              r;
            (!f || t > 0 || n === !0) && (i.frame++, h += t + (t >= o ? .004 : o - t), r = !0);
            n !== !0 && (u = c(l));
            r && i.dispatchEvent("tick")
          };
        ot.call(i);
        i.time = i.frame = 0;
        i.tick = function() {
          l(!0)
        };
        i.sleep = function() {
          u != null && (e && st ? st(u) : clearTimeout(u), c = wt, u = null, i === r && (s = !1))
        };
        i.wake = function() {
          u !== null && i.sleep();
          c = f === 0 ? wt : !e || !g ? function(n) {
            return setTimeout(n, (h - i.time) * 1e3 + 1 | 0)
          } : g;
          i === r && (s = !0);
          l(2)
        };
        i.fps = function(n) {
          if (!arguments.length)
            return f;
          f = n;
          o = 1 / (f || 60);
          h = this.time + o;
          i.wake()
        };
        i.useRAF = function(n) {
          if (!arguments.length)
            return e;
          i.sleep();
          e = n;
          i.fps(f)
        };
        i.fps(n);
        setTimeout(function() {
          e && (!u || i.frame < 5) && i.useRAF(!1)
        }, 1500)
      });
      t = a.Ticker.prototype = new a.events.EventDispatcher;
      t.constructor = a.Ticker;
      o = c("core.Animation", function(n, t) {
        if (this.vars = t = t || {}, this._duration = this._totalDuration = n || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, v) {
          s || r.wake();
          var i = this.vars.useFrames ? w : v;
          i.add(this, i._time);
          this.vars.paused && this.paused(!0)
        }
      });
      r = o.ticker = new a.Ticker;
      t = o.prototype;
      t._dirty = t._gc = t._initted = t._paused = !1;
      t._totalTime = t._time = 0;
      t._rawPrevTime = -1;
      t._next = t._last = t._onUpdate = t._timeline = t.timeline = null;
      t._paused = !1;
      ct = function() {
        s && rt() - ht > 2e3 && r.wake();
        setTimeout(ct, 2e3)
      };
      ct();
      t.play = function(n, t) {
        return n != null && this.seek(n, t), this.reversed(!1).paused(!1)
      };
      t.pause = function(n, t) {
        return n != null && this.seek(n, t), this.paused(!0)
      };
      t.resume = function(n, t) {
        return n != null && this.seek(n, t), this.paused(!1)
      };
      t.seek = function(n, t) {
        return this.totalTime(Number(n), t !== !1)
      };
      t.restart = function(n, t) {
        return this.reversed(!1).paused(!1).totalTime(n ? -this._delay : 0, t !== !1, !0)
      };
      t.reverse = function(n, t) {
        return n != null && this.seek(n || this.totalDuration(), t), this.reversed(!0).paused(!1)
      };
      t.render = function() {};
      t.invalidate = function() {
        return this
      };
      t.isActive = function() {
        var n = this._timeline,
          t = this._startTime,
          i;
        return !n || !this._gc && !this._paused && n.isActive() && (i = n.rawTime()) >= t && i < t + this.totalDuration() / this._timeScale
      };
      t._enabled = function(n, t) {
        return s || r.wake(), this._gc = !n, this._active = this.isActive(), t !== !0 && (n && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !n && this.timeline && this._timeline._remove(this, !0)), !1
      };
      t._kill = function() {
        return this._enabled(!1, !1)
      };
      t.kill = function(n, t) {
        return this._kill(n, t), this
      };
      t._uncache = function(n) {
        for (var t = n ? this : this.timeline; t;)
          t._dirty = !0, t = t.timeline;
        return this
      };
      t._swapSelfInParams = function(n) {
        for (var t = n.length, i = n.concat(); --t > -1;)
          n[t] === "{self}" && (i[t] = this);
        return i
      };
      t.eventCallback = function(n, t, i, r) {
        if ((n || "").substr(0, 2) === "on") {
          var u = this.vars;
          if (arguments.length === 1)
            return u[n];
          t == null ? delete u[n] : (u[n] = t, u[n + "Params"] = b(i) && i.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(i) : i, u[n + "Scope"] = r);
          n === "onUpdate" && (this._onUpdate = t)
        }
        return this
      };
      t.delay = function(n) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + n - this._delay), this._delay = n, this) : this._delay
      };
      t.duration = function(n) {
        return arguments.length ? (this._duration = this._totalDuration = n, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && n !== 0 && this.totalTime(this._totalTime * (n / this._duration), !0), this) : (this._dirty = !1, this._duration)
      };
      t.totalDuration = function(n) {
        return this._dirty = !1, arguments.length ? this.duration(n) : this._totalDuration
      };
      t.time = function(n, t) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(n > this._duration ? this._duration : n, t)) : this._time
      };
      t.totalTime = function(n, t, i) {
        if (s || r.wake(), !arguments.length)
          return this._totalTime;
        if (this._timeline) {
          if (n < 0 && !i && (n += this.totalDuration()), this._timeline.smoothChildTiming) {
            this._dirty && this.totalDuration();
            var f = this._totalDuration,
              u = this._timeline;
            if (n > f && !i && (n = f), this._startTime = (this._paused ? this._pauseTime : u._time) - (this._reversed ? f - n : n) / this._timeScale, u._dirty || this._uncache(!1), u._timeline)
              while (u._timeline)
                u._timeline._time !== (u._startTime + u._totalTime) / u._timeScale && u.totalTime(u._totalTime, !0), u = u._timeline
          }
          this._gc && this._enabled(!0, !1);
          (this._totalTime !== n || this._duration === 0) && this.render(n, t, !1)
        }
        return this
      };
      t.progress = t.totalProgress = function(n, t) {
        return arguments.length ? this.totalTime(this.duration() * n, t) : this._time / this.duration()
      };
      t.startTime = function(n) {
        return arguments.length ? (n !== this._startTime && (this._startTime = n, this.timeline && this.timeline._sortChildren && this.timeline.add(this, n - this._delay)), this) : this._startTime
      };
      t.timeScale = function(n) {
        if (!arguments.length)
          return this._timeScale;
        if (n = n || f, this._timeline && this._timeline.smoothChildTiming) {
          var t = this._pauseTime,
            i = t || t === 0 ? t : this._timeline.totalTime();
          this._startTime = i - (i - this._startTime) * this._timeScale / n
        }
        return this._timeScale = n, this._uncache(!1)
      };
      t.reversed = function(n) {
        return arguments.length ? (n != this._reversed && (this._reversed = n, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
      };
      t.paused = function(n) {
        if (!arguments.length)
          return this._paused;
        if (n != this._paused && this._timeline) {
          s || n || r.wake();
          var t = this._timeline,
            i = t.rawTime(),
            u = i - this._pauseTime;
          !n && t.smoothChildTiming && (this._startTime += u, this._uncache(!1));
          this._pauseTime = n ? i : null;
          this._paused = n;
          this._active = this.isActive();
          !n && u !== 0 && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
        }
        return this._gc && !n && this._enabled(!0, !1), this
      };
      nt = c("core.SimpleTimeline", function(n) {
        o.call(this, 0, n);
        this.autoRemoveChildren = this.smoothChildTiming = !0
      });
      t = nt.prototype = new o;
      t.constructor = nt;
      t.kill()._gc = !1;
      t._first = t._last = null;
      t._sortChildren = !1;
      t.add = t.insert = function(n, t) {
        var i, r;
        if (n._startTime = Number(t || 0) + n._delay, n._paused && this !== n._timeline && (n._pauseTime = n._startTime + (this.rawTime() - n._startTime) / n._timeScale), n.timeline && n.timeline._remove(n, !0), n.timeline = n._timeline = this, n._gc && n._enabled(!0, !0), i = this._last, this._sortChildren)
          for (r = n._startTime; i && i._startTime > r;)
            i = i._prev;
        return i ? (n._next = i._next, i._next = n) : (n._next = this._first, this._first = n), n._next ? n._next._prev = n : this._last = n, n._prev = i, this._timeline && this._uncache(!0), this
      };
      t._remove = function(n, t) {
        return n.timeline === this && (t || n._enabled(!1, !0), n.timeline = null, n._prev ? n._prev._next = n._next : this._first === n && (this._first = n._next), n._next ? n._next._prev = n._prev : this._last === n && (this._last = n._prev), this._timeline && this._uncache(!0)), this
      };
      t.render = function(n, t, i) {
        var r = this._first,
          u;
        for (this._totalTime = this._time = this._rawPrevTime = n; r;)
          u = r._next, (r._active || n >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (n - r._startTime) * r._timeScale, t, i) : r.render((n - r._startTime) * r._timeScale, t, i)), r = u
      };
      t.rawTime = function() {
        return s || r.wake(), this._totalTime
      };
      var i = c("TweenLite", function(t, r, u) {
          if (o.call(this, r, u), this.render = i.prototype.render, t == null)
            throw "Cannot tween a null target.";
          this.target = t = typeof t != "string" ? t : i.selector(t) || t;
          var c = t.jquery || t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType),
            h = this.vars.overwrite,
            e, f, s;
          if (this._overwrite = h = h == null ? dt[i.defaultOverwrite] : typeof h == "number" ? h >> 0 : dt[h], (c || t instanceof Array || t.push && b(t)) && typeof t[0] != "number")
            for (this._targets = s = pt.call(t, 0), this._propLookup = [], this._siblings = [], e = 0; e < s.length; e++) {
              if (f = s[e], f) {
                if (typeof f == "string") {
                  f = s[e--] = i.selector(f);
                  typeof f == "string" && s.splice(e + 1, 1);
                  continue
                } else if (f.length && f !== n && f[0] && (f[0] === n || f[0].nodeType && f[0].style && !f.nodeType)) {
                  s.splice(e--, 1);
                  this._targets = s = s.concat(pt.call(f, 0));
                  continue
                }
              } else {
                s.splice(e--, 1);
                continue
              }
              this._siblings[e] = tt(f, this, !1);
              h === 1 && this._siblings[e].length > 1 && vt(f, this, null, 1, this._siblings[e])
            } else
            this._propLookup = {}, this._siblings = tt(t, this, !1), h === 1 && this._siblings.length > 1 && vt(t, this, null, 1, this._siblings);
          (this.vars.immediateRender || r === 0 && this._delay === 0 && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
        }, !0),
        lt = function(t) {
          return t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType)
        },
        ni = function(n, t) {
          var r = {};
          for (var i in n)
            at[i] || i in t && i !== "x" && i !== "y" && i !== "width" && i !== "height" && i !== "className" && i !== "border" || y[i] && (!y[i] || !y[i]._autoCSS) || (r[i] = n[i], delete n[i]);
          n.css = r
        };
      t = i.prototype = new o;
      t.constructor = i;
      t.kill()._gc = !1;
      t.ratio = 0;
      t._firstPT = t._targets = t._overwrittenProps = t._startAt = null;
      t._notifyPluginsOfEnabled = !1;
      i.version = "1.11.8";
      i.defaultEase = t._ease = new l(null, null, 1, 1);
      i.defaultOverwrite = "auto";
      i.ticker = r;
      i.autoSleep = !0;
      i.selector = n.$ || n.jQuery || function(t) {
        return n.$ ? (i.selector = n.$, n.$(t)) : n.document ? n.document.getElementById(t.charAt(0) === "#" ? t.substr(1) : t) : t
      };
      var ti = i._internals = {
          isArray: b,
          isSelector: lt
        },
        y = i._plugins = {},
        p = i._tweenLookup = {},
        ii = 0,
        at = ti.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1
        },
        dt = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          "true": 1,
          "false": 0
        },
        w = o._rootFramesTimeline = new nt,
        v = o._rootTimeline = new nt;
      v._startTime = r.time;
      w._startTime = r.frame;
      v._active = w._active = !0;
      o._updateRoot = function() {
        if (v.render((r.time - v._startTime) * v._timeScale, !1, !1), w.render((r.frame - w._startTime) * w._timeScale, !1, !1), !(r.frame % 120)) {
          var u, t;
          for (var n in p) {
            for (t = p[n].tweens, u = t.length; --u > -1;)
              t[u]._gc && t.splice(u, 1);
            t.length === 0 && delete p[n]
          }
          if (n = v._first, (!n || n._paused) && i.autoSleep && !w._first && r._listeners.tick.length === 1) {
            while (n && n._paused)
              n = n._next;
            n || r.sleep()
          }
        }
      };
      r.addEventListener("tick", o._updateRoot);
      var tt = function(n, t, i) {
          var r = n._gsTweenID,
            u, f;
          if (p[r || (n._gsTweenID = r = "t" + ii++)] || (p[r] = {
              target: n,
              tweens: []
            }), t && (u = p[r].tweens, u[f = u.length] = t, i))
            while (--f > -1)
              u[f] === t && u.splice(f, 1);
          return p[r].tweens
        },
        vt = function(n, t, i, r, u) {
          var o, s, e, y;
          if (r === 1 || r >= 4) {
            for (y = u.length, o = 0; o < y; o++)
              if ((e = u[o]) !== t)
                e._gc || e._enabled(!1, !1) && (s = !0);
              else if (r === 5)
              break;
            return s
          }
          var h = t._startTime + f,
            c = [],
            l = 0,
            a = t._duration === 0,
            v;
          for (o = u.length; --o > -1;)
            (e = u[o]) === t || e._gc || e._paused || (e._timeline !== t._timeline ? (v = v || gt(t, 0, a), gt(e, v, a) === 0 && (c[l++] = e)) : e._startTime <= h && e._startTime + e.totalDuration() / e._timeScale > h && ((a || !e._initted) && h - e._startTime <= 2e-10 || (c[l++] = e)));
          for (o = l; --o > -1;)
            e = c[o], r === 2 && e._kill(i, n) && (s = !0), (r !== 2 || !e._firstPT && e._initted) && e._enabled(!1, !1) && (s = !0);
          return s
        },
        gt = function(n, t, i) {
          for (var u = n._timeline, e = u._timeScale, r = n._startTime; u._timeline;) {
            if (r += u._startTime, e *= u._timeScale, u._paused)
              return -100;
            u = u._timeline
          }
          return r /= e, r > t ? r - t : i && r === t || !n._initted && r - t < 2 * f ? f : (r += n.totalDuration() / n._timeScale / e) > t + f ? 0 : r - t - f
        };
      if (t._init = function() {
          var n = this.vars,
            e = this._overwrittenProps,
            s = this._duration,
            h = n.immediateRender,
            r = n.ease,
            u, o, t, f;
          if (n.startAt) {
            if (this._startAt && this._startAt.render(-1, !0), n.startAt.overwrite = 0, n.startAt.immediateRender = !0, this._startAt = i.to(this.target, 0, n.startAt), h)
              if (this._time > 0)
                this._startAt = null;
              else if (s !== 0)
              return
          } else if (n.runBackwards && s !== 0)
            if (this._startAt)
              this._startAt.render(-1, !0), this._startAt = null;
            else {
              t = {};
              for (f in n)
                at[f] && f !== "autoCSS" || (t[f] = n[f]);
              if (t.overwrite = 0, t.data = "isFromStart", this._startAt = i.to(this.target, 0, t), n.immediateRender) {
                if (this._time === 0)
                  return
              } else
                this._startAt.render(-1, !0)
            }
          if (this._ease = r ? r instanceof l ? n.easeParams instanceof Array ? r.config.apply(r, n.easeParams) : r : typeof r == "function" ? new l(r, n.easeParams) : d[r] || i.defaultEase : i.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
            for (u = this._targets.length; --u > -1;)
              this._initProps(this._targets[u], this._propLookup[u] = {}, this._siblings[u], e ? e[u] : null) && (o = !0);
          else
            o = this._initProps(this.target, this._propLookup, this._siblings, e);
          if (o && i._onPluginEvent("_onInitAllProps", this), e && (this._firstPT || typeof this.target != "function" && this._enabled(!1, !1)), n.runBackwards)
            for (t = this._firstPT; t;)
              t.s += t.c, t.c = -t.c, t = t._next;
          this._onUpdate = n.onUpdate;
          this._initted = !0
        }, t._initProps = function(t, i, r, u) {
          var f, h, c, s, o, e;
          if (t == null)
            return !1;
          this.vars.css || t.style && t !== n && t.nodeType && y.css && this.vars.autoCSS !== !1 && ni(this.vars, t);
          for (f in this.vars) {
            if (e = this.vars[f], at[f])
              e && (e instanceof Array || e.push && b(e)) && e.join("").indexOf("{self}") !== -1 && (this.vars[f] = e = this._swapSelfInParams(e, this));
            else if (y[f] && (s = new y[f])._onInitTween(t, this.vars[f], this)) {
              for (this._firstPT = o = {
                  _next: this._firstPT,
                  t: s,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: !0,
                  n: f,
                  pg: !0,
                  pr: s._priority
                }, h = s._overwriteProps.length; --h > -1;)
                i[s._overwriteProps[h]] = this._firstPT;
              (s._priority || s._onInitAllProps) && (c = !0);
              (s._onDisable || s._onEnable) && (this._notifyPluginsOfEnabled = !0)
            } else
              this._firstPT = i[f] = o = {
                _next: this._firstPT,
                t: t,
                p: f,
                f: typeof t[f] == "function",
                n: f,
                pg: !1,
                pr: 0
              }, o.s = o.f ? t[f.indexOf("set") || typeof t["get" + f.substr(3)] != "function" ? f : "get" + f.substr(3)]() : parseFloat(t[f]), o.c = typeof e == "string" && e.charAt(1) === "=" ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) : Number(e) - o.s || 0;
            o && o._next && (o._next._prev = o)
          }
          return u && this._kill(u, t) ? this._initProps(t, i, r, u) : this._overwrite > 1 && this._firstPT && r.length > 1 && vt(t, this, i, this._overwrite, r) ? (this._kill(i, t), this._initProps(t, i, r, u)) : c
        }, t.render = function(n, t, i) {
          var c = this._time,
            e = this._duration,
            h, o, u, s;
          if (n >= e)
            this._totalTime = this._time = e, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (h = !0, o = "onComplete"), e === 0 && (s = this._rawPrevTime, this._startTime === this._timeline._duration && (n = 0), (n === 0 || s < 0 || s === f) && s !== n && (i = !0, s > f && (o = "onReverseComplete")), this._rawPrevTime = s = !t || n || this._rawPrevTime === n ? n : f);
          else if (n < 1e-7)
            this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (c !== 0 || e === 0 && this._rawPrevTime > 0 && this._rawPrevTime !== f) && (o = "onReverseComplete", h = this._reversed), n < 0 ? (this._active = !1, e === 0 && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = s = !t || n || this._rawPrevTime === n ? n : f)) : this._initted || (i = !0);
          else if (this._totalTime = this._time = n, this._easeType) {
            var r = n / e,
              l = this._easeType,
              a = this._easePower;
            (l === 1 || l === 3 && r >= .5) && (r = 1 - r);
            l === 3 && (r *= 2);
            a === 1 ? r *= r : a === 2 ? r *= r * r : a === 3 ? r *= r * r * r : a === 4 && (r *= r * r * r * r);
            this.ratio = l === 1 ? 1 - r : l === 2 ? r : n / e < .5 ? r / 2 : 1 - r / 2
          } else
            this.ratio = this._ease.getRatio(n / e);
          if (this._time !== c || i) {
            if (!this._initted) {
              if (this._init(), !this._initted || this._gc)
                return;
              this._time && !h ? this.ratio = this._ease.getRatio(this._time / e) : h && this._ease._calcEnd && (this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1))
            }
          } else
            return;
          for (this._active || !this._paused && this._time !== c && n >= 0 && (this._active = !0), c === 0 && (this._startAt && (n >= 0 ? this._startAt.render(n, t, i) : o || (o = "_dummyGS")), this.vars.onStart && (this._time !== 0 || e === 0) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || ft))), u = this._firstPT; u;)
            u.f ? u.t[u.p](u.c * this.ratio + u.s) : u.t[u.p] = u.c * this.ratio + u.s, u = u._next;
          this._onUpdate && (n < 0 && this._startAt && this._startTime && this._startAt.render(n, t, i), t || (this._time !== c || h) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || ft));
          o && (this._gc || (n < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(n, t, i), h && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || ft), e === 0 && this._rawPrevTime === f && s !== f && (this._rawPrevTime = 0)))
        }, t._kill = function(n, t) {
          if (n === "all" && (n = null), n == null && (t == null || t === this.target))
            return this._enabled(!1, !1);
          t = typeof t != "string" ? t || this._targets || this.target : i.selector(t) || t;
          var u, e, o, r, f, s, h, c;
          if ((b(t) || lt(t)) && typeof t[0] != "number")
            for (u = t.length; --u > -1;)
              this._kill(n, t[u]) && (s = !0);
          else {
            if (this._targets) {
              for (u = this._targets.length; --u > -1;)
                if (t === this._targets[u]) {
                  f = this._propLookup[u] || {};
                  this._overwrittenProps = this._overwrittenProps || [];
                  e = this._overwrittenProps[u] = n ? this._overwrittenProps[u] || {} : "all";
                  break
                }
            } else {
              if (t !== this.target)
                return !1;
              f = this._propLookup;
              e = this._overwrittenProps = n ? this._overwrittenProps || {} : "all"
            }
            if (f) {
              h = n || f;
              c = n !== e && e !== "all" && n !== f && (typeof n != "object" || !n._tempKill);
              for (o in h)
                (r = f[o]) && (r.pg && r.t._kill(h) && (s = !0), r.pg && r.t._overwriteProps.length !== 0 || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete f[o]), c && (e[o] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1)
            }
          }
          return s
        }, t.invalidate = function() {
          return this._notifyPluginsOfEnabled && i._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        }, t._enabled = function(n, t) {
          if (s || r.wake(), n && this._gc) {
            var f = this._targets,
              u;
            if (f)
              for (u = f.length; --u > -1;)
                this._siblings[u] = tt(f[u], this, !0);
            else
              this._siblings = tt(this.target, this, !0)
          }
          return (o.prototype._enabled.call(this, n, t), this._notifyPluginsOfEnabled && this._firstPT) ? i._onPluginEvent(n ? "_onEnable" : "_onDisable", this) : !1
        }, i.to = function(n, t, r) {
          return new i(n, t, r)
        }, i.from = function(n, t, r) {
          return r.runBackwards = !0, r.immediateRender = r.immediateRender != !1, new i(n, t, r)
        }, i.fromTo = function(n, t, r, u) {
          return u.startAt = r, u.immediateRender = u.immediateRender != !1 && r.immediateRender != !1, new i(n, t, u)
        }, i.delayedCall = function(n, t, r, u, f) {
          return new i(t, 0, {
            delay: n,
            onComplete: t,
            onCompleteParams: r,
            onCompleteScope: u,
            onReverseComplete: t,
            onReverseCompleteParams: r,
            onReverseCompleteScope: u,
            immediateRender: !1,
            useFrames: f,
            overwrite: 0
          })
        }, i.set = function(n, t) {
          return new i(n, 0, t)
        }, i.getTweensOf = function(n, t) {
          if (n == null)
            return [];
          n = typeof n != "string" ? n : i.selector(n) || n;
          var r, u, f, e;
          if ((b(n) || lt(n)) && typeof n[0] != "number") {
            for (r = n.length, u = []; --r > -1;)
              u = u.concat(i.getTweensOf(n[r], t));
            for (r = u.length; --r > -1;)
              for (e = u[r], f = r; --f > -1;)
                e === u[f] && u.splice(r, 1)
          } else
            for (u = tt(n).concat(), r = u.length; --r > -1;)
              (u[r]._gc || t && !u[r].isActive()) && u.splice(r, 1);
          return u
        }, i.killTweensOf = i.killDelayedCallsTo = function(n, t, r) {
          typeof t == "object" && (r = t, t = !1);
          for (var u = i.getTweensOf(n, t), f = u.length; --f > -1;)
            u[f]._kill(r, n)
        }, h = c("plugins.TweenPlugin", function(n, t) {
          this._overwriteProps = (n || "").split(",");
          this._propName = this._overwriteProps[0];
          this._priority = t || 0;
          this._super = h.prototype
        }, !0), t = h.prototype, h.version = "1.10.1", h.API = 2, t._firstPT = null, t._addTween = function(n, t, i, r, u, f) {
          var o, e;
          if (r != null && (o = typeof r == "number" || r.charAt(1) !== "=" ? Number(r) - i : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))))
            return this._firstPT = e = {
              _next: this._firstPT,
              t: n,
              p: t,
              s: i,
              c: o,
              f: typeof n[t] == "function",
              n: u || t,
              r: f
            }, e._next && (e._next._prev = e), e
        }, t.setRatio = function(n) {
          for (var t = this._firstPT, r = 1e-6, i; t;)
            i = t.c * n + t.s, t.r ? i = Math.round(i) : i < r && i > -r && (i = 0), t.f ? t.t[t.p](i) : t.t[t.p] = i, t = t._next
        }, t._kill = function(n) {
          var r = this._overwriteProps,
            t = this._firstPT,
            i;
          if (n[this._propName] != null)
            this._overwriteProps = [];
          else
            for (i = r.length; --i > -1;)
              n[r[i]] != null && r.splice(i, 1);
          while (t)
            n[t.n] != null && (t._next && (t._next._prev = t._prev), t._prev ? (t._prev._next = t._next, t._prev = null) : this._firstPT === t && (this._firstPT = t._next)), t = t._next;
          return !1
        }, t._roundProps = function(n, t) {
          for (var i = this._firstPT; i;)
            (n[this._propName] || i.n != null && n[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
        }, i._onPluginEvent = function(n, t) {
          var i = t._firstPT,
            f, r, u, e, o;
          if (n === "_onInitAllProps") {
            while (i) {
              for (o = i._next, r = u; r && r.pr > i.pr;)
                r = r._next;
              (i._prev = r ? r._prev : e) ? i._prev._next = i: u = i;
              (i._next = r) ? r._prev = i: e = i;
              i = o
            }
            i = t._firstPT = u
          }
          while (i)
            i.pg && typeof i.t[n] == "function" && i.t[n]() && (f = !0), i = i._next;
          return f
        }, h.activate = function(n) {
          for (var t = n.length; --t > -1;)
            n[t].API === h.API && (y[(new n[t])._propName] = n[t]);
          return !0
        }, ut.plugin = function(n) {
          if (!n || !n.propName || !n.init || !n.API)
            throw "illegal plugin definition.";
          var i = n.propName,
            e = n.priority || 0,
            o = n.overwriteProps,
            u = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_roundProps",
              initAll: "_onInitAllProps"
            },
            t = c("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
              h.call(this, i, e);
              this._overwriteProps = o || []
            }, n.global === !0),
            f = t.prototype = new h(i),
            r;
          f.constructor = t;
          t.API = n.API;
          for (r in u)
            typeof n[r] == "function" && (f[u[r]] = n[r]);
          return t.version = n.version, h.activate([t]), t
        }, e = n._gsQueue, e) {
        for (u = 0; u < e.length; u++)
          e[u]();
        for (t in k)
          k[t].func || n.console.log("GSAP encountered missing dependency: com.greensock." + t)
      }
      s = !1
    }
  }(window);
RedirectAngularUrl = function() {
  "use strict";

  function n() {
    var n = this
  }
  return n.controller_name = {
    0: "smartscooter"
  }, n.getWindowLocationHash = function() {
    return window.location.hash ? window.location.hash : !1
  }, n.UrlRedirect = function() {
    var t = this,
      i = "//" + window.location.host,
      r;
    if (t.getWindowLocationHash() !== !1) {
      r = n.getWindowLocationHash();
      r = r.toLowerCase();
      switch (r) {
        case "#/faster":
          window.location.replace(i + "/" + t.controller_name[0]);
          break;
        case "#/smarter":
          window.location.replace(i + "/" + t.controller_name[0] + "/smarter");
          break;
        case "#/easier":
          window.location.replace(i + "/" + t.controller_name[0] + "/easier");
          break;
        case "#/customize":
          window.location.replace(i + "/" + t.controller_name[0] + "/customize");
          break;
        default:
          window.location.replace(i + "/")
      }
    }
  }, {
    init: function() {
      n.UrlRedirect()
    }
  }
}(window.jQuery, window);
RedirectAngularUrl.init(),
  function() {
    "use strict";

    function n(r) {
      if (!r)
        throw new Error("No options passed to Waypoint constructor");
      if (!r.element)
        throw new Error("No element option passed to Waypoint constructor");
      if (!r.handler)
        throw new Error("No handler option passed to Waypoint constructor");
      this.key = "waypoint-" + i;
      this.options = n.Adapter.extend({}, n.defaults, r);
      this.element = this.options.element;
      this.adapter = new n.Adapter(this.element);
      this.callback = r.handler;
      this.axis = this.options.horizontal ? "horizontal" : "vertical";
      this.enabled = this.options.enabled;
      this.triggerPoint = null;
      this.group = n.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis
      });
      this.context = n.Context.findOrCreateByElement(this.options.context);
      n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]);
      this.group.add(this);
      this.context.add(this);
      t[this.key] = this;
      i += 1
    }
    var i = 0,
      t = {};
    n.prototype.queueTrigger = function(n) {
      this.group.queueTrigger(this, n)
    };
    n.prototype.trigger = function(n) {
      this.enabled && this.callback && this.callback.apply(this, n)
    };
    n.prototype.destroy = function() {
      this.context.remove(this);
      this.group.remove(this);
      delete t[this.key]
    };
    n.prototype.disable = function() {
      return this.enabled = !1, this
    };
    n.prototype.enable = function() {
      return this.context.refresh(), this.enabled = !0, this
    };
    n.prototype.next = function() {
      return this.group.next(this)
    };
    n.prototype.previous = function() {
      return this.group.previous(this)
    };
    n.invokeAll = function(n) {
      var r = [],
        u, i, f;
      for (u in t)
        r.push(t[u]);
      for (i = 0, f = r.length; i < f; i++)
        r[i][n]()
    };
    n.destroyAll = function() {
      n.invokeAll("destroy")
    };
    n.disableAll = function() {
      n.invokeAll("disable")
    };
    n.enableAll = function() {
      n.invokeAll("enable")
    };
    n.refreshAll = function() {
      n.Context.refreshAll()
    };
    n.viewportHeight = function() {
      return window.innerHeight || document.documentElement.clientHeight
    };
    n.viewportWidth = function() {
      return document.documentElement.clientWidth
    };
    n.adapters = [];
    n.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0
    };
    n.offsetAliases = {
      "bottom-in-view": function() {
        return this.context.innerHeight() - this.adapter.outerHeight()
      },
      "right-in-view": function() {
        return this.context.innerWidth() - this.adapter.outerWidth()
      }
    };
    window.Waypoint = n
  }(),
  function() {
    "use strict";

    function f(n) {
      window.setTimeout(n, 1e3 / 60)
    }

    function n(n) {
      this.element = n;
      this.Adapter = t.Adapter;
      this.adapter = new this.Adapter(n);
      this.key = "waypoint-context-" + r;
      this.didScroll = !1;
      this.didResize = !1;
      this.oldScroll = {
        x: this.adapter.scrollLeft(),
        y: this.adapter.scrollTop()
      };
      this.waypoints = {
        vertical: {},
        horizontal: {}
      };
      n.waypointContextKey = this.key;
      i[n.waypointContextKey] = this;
      r += 1;
      this.createThrottledScrollHandler();
      this.createThrottledResizeHandler()
    }
    var r = 0,
      i = {},
      t = window.Waypoint,
      u = window.onload;
    n.prototype.add = function(n) {
      var t = n.options.horizontal ? "horizontal" : "vertical";
      this.waypoints[t][n.key] = n;
      this.refresh()
    };
    n.prototype.checkEmpty = function() {
      var n = this.Adapter.isEmptyObject(this.waypoints.horizontal),
        t = this.Adapter.isEmptyObject(this.waypoints.vertical);
      n && t && (this.adapter.off(".waypoints"), delete i[this.key])
    };
    n.prototype.createThrottledResizeHandler = function() {
      function i() {
        n.handleResize();
        n.didResize = !1
      }
      var n = this;
      this.adapter.on("resize.waypoints", function() {
        n.didResize || (n.didResize = !0, t.requestAnimationFrame(i))
      })
    };
    n.prototype.createThrottledScrollHandler = function() {
      function i() {
        n.handleScroll();
        n.didScroll = !1
      }
      var n = this;
      this.adapter.on("scroll.waypoints", function() {
        (!n.didScroll || t.isTouch) && (n.didScroll = !0, t.requestAnimationFrame(i))
      })
    };
    n.prototype.handleResize = function() {
      t.Context.refreshAll()
    };
    n.prototype.handleScroll = function() {
      var u = {},
        i = {
          horizontal: {
            newScroll: this.adapter.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left"
          },
          vertical: {
            newScroll: this.adapter.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up"
          }
        },
        r, f, s;
      for (r in i) {
        var n = i[r],
          h = n.newScroll > n.oldScroll,
          c = h ? n.forward : n.backward;
        for (f in this.waypoints[r]) {
          var t = this.waypoints[r][f],
            e = n.oldScroll < t.triggerPoint,
            o = n.newScroll >= t.triggerPoint,
            l = e && o,
            a = !e && !o;
          (l || a) && (t.queueTrigger(c), u[t.group.id] = t.group)
        }
      }
      for (s in u)
        u[s].flushTriggers();
      this.oldScroll = {
        x: i.horizontal.newScroll,
        y: i.vertical.newScroll
      }
    };
    n.prototype.innerHeight = function() {
      return this.element == this.element.window ? t.viewportHeight() : this.adapter.innerHeight()
    };
    n.prototype.remove = function(n) {
      delete this.waypoints[n.axis][n.key];
      this.checkEmpty()
    };
    n.prototype.innerWidth = function() {
      return this.element == this.element.window ? t.viewportWidth() : this.adapter.innerWidth()
    };
    n.prototype.destroy = function() {
      var t = [],
        i, r, n, u;
      for (i in this.waypoints)
        for (r in this.waypoints[i])
          t.push(this.waypoints[i][r]);
      for (n = 0, u = t.length; n < u; n++)
        t[n].destroy()
    };
    n.prototype.refresh = function() {
      var u = this.element == this.element.window,
        c = this.adapter.offset(),
        r = {},
        e, f, t, l, b;
      this.handleScroll();
      e = {
        horizontal: {
          contextOffset: u ? 0 : c.left,
          contextScroll: u ? 0 : this.oldScroll.x,
          contextDimension: this.innerWidth(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left",
          offsetProp: "left"
        },
        vertical: {
          contextOffset: u ? 0 : c.top,
          contextScroll: u ? 0 : this.oldScroll.y,
          contextDimension: this.innerHeight(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up",
          offsetProp: "top"
        }
      };
      for (f in e) {
        t = e[f];
        for (l in this.waypoints[f]) {
          var n = this.waypoints[f][l],
            i = n.options.offset,
            a = n.triggerPoint,
            v = 0,
            o = a == null,
            y, s, h, p, w;
          n.element !== n.element.window && (v = n.adapter.offset()[t.offsetProp]);
          typeof i == "function" ? i = i.apply(n) : typeof i == "string" && (i = parseFloat(i), n.options.offset.indexOf("%") > -1 && (i = Math.ceil(t.contextDimension * i / 100)));
          y = t.contextScroll - t.contextOffset;
          n.triggerPoint = v + y - i;
          s = a < t.oldScroll;
          h = n.triggerPoint >= t.oldScroll;
          p = s && h;
          w = !s && !h;
          !o && p ? (n.queueTrigger(t.backward), r[n.group.id] = n.group) : !o && w ? (n.queueTrigger(t.forward), r[n.group.id] = n.group) : o && t.oldScroll >= n.triggerPoint && (n.queueTrigger(t.forward), r[n.group.id] = n.group)
        }
      }
      for (b in r)
        r[b].flushTriggers();
      return this
    };
    n.findOrCreateByElement = function(t) {
      return n.findByElement(t) || new n(t)
    };
    n.refreshAll = function() {
      for (var n in i)
        i[n].refresh()
    };
    n.findByElement = function(n) {
      return i[n.waypointContextKey]
    };
    window.onload = function() {
      u && u();
      n.refreshAll()
    };
    t.requestAnimationFrame = function(n) {
      var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || f;
      t.call(window, n)
    };
    t.Context = n
  }(),
  function() {
    "use strict";

    function i(n, t) {
      return n.triggerPoint - t.triggerPoint
    }

    function u(n, t) {
      return t.triggerPoint - n.triggerPoint
    }

    function n(n) {
      this.name = n.name;
      this.axis = n.axis;
      this.id = this.name + "-" + this.axis;
      this.waypoints = [];
      this.clearTriggerQueues();
      r[this.axis][this.name] = this
    }
    var r = {
        vertical: {},
        horizontal: {}
      },
      t = window.Waypoint;
    n.prototype.add = function(n) {
      this.waypoints.push(n)
    };
    n.prototype.clearTriggerQueues = function() {
      this.triggerQueues = {
        up: [],
        down: [],
        left: [],
        right: []
      }
    };
    n.prototype.flushTriggers = function() {
      var n, t, e, r, o, f;
      for (n in this.triggerQueues)
        for (t = this.triggerQueues[n], e = n === "up" || n === "left", t.sort(e ? u : i), r = 0, o = t.length; r < o; r += 1)
          f = t[r], (f.options.continuous || r === t.length - 1) && f.trigger([n]);
      this.clearTriggerQueues()
    };
    n.prototype.next = function(n) {
      this.waypoints.sort(i);
      var r = t.Adapter.inArray(n, this.waypoints),
        u = r === this.waypoints.length - 1;
      return u ? null : this.waypoints[r + 1]
    };
    n.prototype.previous = function(n) {
      this.waypoints.sort(i);
      var r = t.Adapter.inArray(n, this.waypoints);
      return r ? this.waypoints[r - 1] : null
    };
    n.prototype.queueTrigger = function(n, t) {
      this.triggerQueues[t].push(n)
    };
    n.prototype.remove = function(n) {
      var i = t.Adapter.inArray(n, this.waypoints);
      i > -1 && this.waypoints.splice(i, 1)
    };
    n.prototype.first = function() {
      return this.waypoints[0]
    };
    n.prototype.last = function() {
      return this.waypoints[this.waypoints.length - 1]
    };
    n.findOrCreate = function(t) {
      return r[t.axis][t.name] || new n(t)
    };
    t.Group = n
  }(),
  function() {
    "use strict";

    function t(n) {
      return n === n.window
    }

    function i(n) {
      return t(n) ? n : n.defaultView
    }

    function n(n) {
      this.element = n;
      this.handlers = {}
    }
    var r = window.Waypoint;
    n.prototype.innerHeight = function() {
      var n = t(this.element);
      return n ? this.element.innerHeight : this.element.clientHeight
    };
    n.prototype.innerWidth = function() {
      var n = t(this.element);
      return n ? this.element.innerWidth : this.element.clientWidth
    };
    n.prototype.off = function(n, t) {
      function u(n, t, i) {
        for (var u, r = 0, f = t.length - 1; r < f; r++)
          u = t[r], i && i !== u || n.removeEventListener(u)
      }
      var o = n.split("."),
        r = o[0],
        i = o[1],
        f = this.element,
        e, s;
      if (i && this.handlers[i] && r)
        u(f, this.handlers[i][r], t), this.handlers[i][r] = [];
      else if (r)
        for (e in this.handlers)
          u(f, this.handlers[e][r] || [], t), this.handlers[e][r] = [];
      else if (i && this.handlers[i]) {
        for (s in this.handlers[i])
          u(f, this.handlers[i][s], t);
        this.handlers[i] = {}
      }
    };
    n.prototype.offset = function() {
      if (!this.element.ownerDocument)
        return null;
      var t = this.element.ownerDocument.documentElement,
        r = i(this.element.ownerDocument),
        n = {
          top: 0,
          left: 0
        };
      return this.element.getBoundingClientRect && (n = this.element.getBoundingClientRect()), {
        top: n.top + r.pageYOffset - t.clientTop,
        left: n.left + r.pageXOffset - t.clientLeft
      }
    };
    n.prototype.on = function(n, t) {
      var r = n.split("."),
        i = r[0],
        u = r[1] || "__default",
        f = this.handlers[u] = this.handlers[u] || {},
        e = f[i] = f[i] || [];
      e.push(t);
      this.element.addEventListener(i, t)
    };
    n.prototype.outerHeight = function(n) {
      var i = this.innerHeight(),
        r;
      return n && !t(this.element) && (r = window.getComputedStyle(this.element), i += parseInt(r.marginTop, 10), i += parseInt(r.marginBottom, 10)), i
    };
    n.prototype.outerWidth = function(n) {
      var i = this.innerWidth(),
        r;
      return n && !t(this.element) && (r = window.getComputedStyle(this.element), i += parseInt(r.marginLeft, 10), i += parseInt(r.marginRight, 10)), i
    };
    n.prototype.scrollLeft = function() {
      var n = i(this.element);
      return n ? n.pageXOffset : this.element.scrollLeft
    };
    n.prototype.scrollTop = function() {
      var n = i(this.element);
      return n ? n.pageYOffset : this.element.scrollTop
    };
    n.extend = function() {
      function i(n, t) {
        if (typeof n == "object" && typeof t == "object")
          for (var i in t)
            t.hasOwnProperty(i) && (n[i] = t[i]);
        return n
      }
      for (var n = Array.prototype.slice.call(arguments), t = 1, r = n.length; t < r; t++)
        i(n[0], n[t]);
      return n[0]
    };
    n.inArray = function(n, t, i) {
      return t == null ? -1 : t.indexOf(n, i)
    };
    n.isEmptyObject = function(n) {
      for (var t in n)
        return !1;
      return !0
    };
    r.adapters.push({
      name: "noframework",
      Adapter: n
    });
    r.Adapter = n
  }(),
  function(n) {
    function o(n) {
      var i = n.length,
        r = t.type(n);
      return r === "function" || t.isWindow(n) ? !1 : n.nodeType === 1 && i ? !0 : r === "array" || i === 0 || typeof i == "number" && i > 0 && i - 1 in n
    }
    var t, i, r;
    if (!n.jQuery) {
      t = function(n, i) {
        return new t.fn.init(n, i)
      };
      t.isWindow = function(n) {
        return n != null && n == n.window
      };
      t.type = function(n) {
        return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? u[s.call(n)] || "object" : typeof n
      };
      t.isArray = Array.isArray || function(n) {
        return t.type(n) === "array"
      };
      t.isPlainObject = function(n) {
        var i;
        if (!n || t.type(n) !== "object" || n.nodeType || t.isWindow(n))
          return !1;
        try {
          if (n.constructor && !f.call(n, "constructor") && !f.call(n.constructor.prototype, "isPrototypeOf"))
            return !1
        } catch (r) {
          return !1
        }
        for (i in n)
        ;
        return i === undefined || f.call(n, i)
      };
      t.each = function(n, t, i) {
        var u, r = 0,
          f = n.length,
          e = o(n);
        if (i) {
          if (e) {
            for (; r < f; r++)
              if (u = t.apply(n[r], i), u === !1)
                break
          } else
            for (r in n)
              if (u = t.apply(n[r], i), u === !1)
                break
        } else if (e) {
          for (; r < f; r++)
            if (u = t.call(n[r], r, n[r]), u === !1)
              break
        } else
          for (r in n)
            if (u = t.call(n[r], r, n[r]), u === !1)
              break;
        return n
      };
      t.data = function(n, r, u) {
        var e, f;
        if (u === undefined) {
          if (f = n[t.expando], e = f && i[f], r === undefined)
            return e;
          if (e && r in e)
            return e[r]
        } else if (r !== undefined)
          return f = n[t.expando] || (n[t.expando] = ++t.uuid), i[f] = i[f] || {}, i[f][r] = u, u
      };
      t.removeData = function(n, r) {
        var u = n[t.expando],
          f = u && i[u];
        f && t.each(r, function(n, t) {
          delete f[t]
        })
      };
      t.extend = function() {
        var r, e, i, f, o, s, n = arguments[0] || {},
          u = 1,
          c = arguments.length,
          h = !1;
        for (typeof n == "boolean" && (h = n, n = arguments[u] || {}, u++), typeof n != "object" && t.type(n) !== "function" && (n = {}), u === c && (n = this, u--); u < c; u++)
          if ((o = arguments[u]) != null)
            for (f in o)
              (r = n[f], i = o[f], n !== i) && (h && i && (t.isPlainObject(i) || (e = t.isArray(i))) ? (e ? (e = !1, s = r && t.isArray(r) ? r : []) : s = r && t.isPlainObject(r) ? r : {}, n[f] = t.extend(h, s, i)) : i !== undefined && (n[f] = i));
        return n
      };
      t.queue = function(n, i, r) {
        function f(n, t) {
          var i = t || [];
          return n != null && (o(Object(n)) ? function(n, t) {
            for (var r = +t.length, i = 0, u = n.length; i < r;)
              n[u++] = t[i++];
            if (r !== r)
              while (t[i] !== undefined)
                n[u++] = t[i++];
            return n.length = u, n
          }(i, typeof n == "string" ? [n] : n) : [].push.call(i, n)), i
        }
        if (n) {
          i = (i || "fx") + "queue";
          var u = t.data(n, i);
          return r ? (!u || t.isArray(r) ? u = t.data(n, i, f(r)) : u.push(r), u) : u || []
        }
      };
      t.dequeue = function(n, i) {
        t.each(n.nodeType ? [n] : n, function(n, r) {
          i = i || "fx";
          var f = t.queue(r, i),
            u = f.shift();
          u === "inprogress" && (u = f.shift());
          u && (i === "fx" && f.unshift("inprogress"), u.call(r, function() {
            t.dequeue(r, i)
          }))
        })
      };
      t.fn = t.prototype = {
        init: function(n) {
          if (n.nodeType)
            return this[0] = n, this;
          throw new Error("Not a DOM node.");
        },
        offset: function() {
          var t = this[0].getBoundingClientRect();
          return {
            top: t.top + (n.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
            left: t.left + (n.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
          }
        },
        position: function() {
          function n() {
            for (var n = this.offsetParent || document; n && !1 && n.style.position === "static";)
              n = n.offsetParent;
            return n || document
          }
          var u = this[0],
            n = n.apply(u),
            i = this.offset(),
            r = /^(?:body|html)$/i.test(n.nodeName) ? {
              top: 0,
              left: 0
            } : t(n).offset();
          return i.top -= parseFloat(u.style.marginTop) || 0, i.left -= parseFloat(u.style.marginLeft) || 0, n.style && (r.top += parseFloat(n.style.borderTopWidth) || 0, r.left += parseFloat(n.style.borderLeftWidth) || 0), {
            top: i.top - r.top,
            left: i.left - r.left
          }
        }
      };
      i = {};
      t.expando = "velocity" + (new Date).getTime();
      t.uuid = 0;
      var u = {},
        f = u.hasOwnProperty,
        s = u.toString,
        e = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
      for (r = 0; r < e.length; r++)
        u["[object " + e[r] + "]"] = e[r].toLowerCase();
      t.fn.init.prototype = t.fn;
      n.Velocity = {
        Utilities: t
      }
    }
  }(window),
  function(n) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n() : typeof define == "function" && define.amd ? define(n) : n()
  }(function() {
    return function(n, t, i, r) {
      function tt(n) {
        for (var i = -1, u = n ? n.length : 0, r = [], t; ++i < u;)
          t = n[i], t && r.push(t);
        return r
      }

      function p(n) {
        return s.isWrapped(n) ? n = [].slice.call(n) : s.isNode(n) && (n = [n]), n
      }

      function e(n) {
        var t = o.data(n, "velocity");
        return t === null ? r : t
      }

      function it(n) {
        return function(t) {
          return Math.round(t * n) * (1 / n)
        }
      }

      function k(n, i, r, u) {
        function a(n, t) {
          return 1 - 3 * t + 3 * n
        }

        function v(n, t) {
          return 3 * t - 6 * n
        }

        function y(n) {
          return 3 * n
        }

        function h(n, t, i) {
          return ((a(t, i) * n + v(t, i)) * n + y(t)) * n
        }

        function p(n, t, i) {
          return 3 * a(t, i) * n * n + 2 * v(t, i) * n + y(t)
        }

        function tt(t, i) {
          for (var f, e, u = 0; u < b; ++u) {
            if (f = p(i, n, r), f === 0)
              return i;
            e = h(i, n, r) - t;
            i -= e / f
          }
          return i
        }

        function it() {
          for (var t = 0; t < o; ++t)
            e[t] = h(t * s, n, r)
        }

        function rt(t, i, u) {
          var e, f, o = 0;
          do
            f = i + (u - i) / 2, e = h(f, n, r) - t, e > 0 ? u = f : i = f;
          while (Math.abs(e) > d && ++o < g);
          return f
        }

        function ut(t) {
          for (var u = 0, i = 1, c = o - 1; i != c && e[i] <= t; ++i)
            u += s;
          --i;
          var l = (t - e[i]) / (e[i + 1] - e[i]),
            f = u + l * s,
            h = p(f, n, r);
          return h >= k ? tt(t, f) : h == 0 ? f : rt(t, u, u + s)
        }

        function ft() {
          l = !0;
          (n != i || r != u) && it()
        }
        var b = 4,
          k = .001,
          d = 1e-7,
          g = 10,
          o = 11,
          s = 1 / (o - 1),
          nt = "Float32Array" in t,
          f, e, l, c, w;
        if (arguments.length !== 4)
          return !1;
        for (f = 0; f < 4; ++f)
          if (typeof arguments[f] != "number" || isNaN(arguments[f]) || !isFinite(arguments[f]))
            return !1;
        return n = Math.min(n, 1), r = Math.min(r, 1), n = Math.max(n, 0), r = Math.max(r, 0), e = nt ? new Float32Array(o) : new Array(o), l = !1, c = function(t) {
          return (l || ft(), n === i && r === u) ? t : t === 0 ? 0 : t === 1 ? 1 : h(ut(t), i, u)
        }, c.getControlPoints = function() {
          return [{
            x: n,
            y: i
          }, {
            x: r,
            y: u
          }]
        }, w = "generateBezier(" + [n, i, r, u] + ")", c.toString = function() {
          return w
        }, c
      }

      function g(n, t) {
        var i = n;
        return s.isString(n) ? f.Easings[n] || (i = !1) : i = s.isArray(n) && n.length === 1 ? it.apply(null, n) : s.isArray(n) && n.length === 2 ? d.apply(null, n.concat([t])) : s.isArray(n) && n.length === 4 ? k.apply(null, n) : !1, i === !1 && (i = f.Easings[f.defaults.easing] ? f.defaults.easing : b), i
      }

      function v(n) {
        var k, c, ft, w, d, ot, g, h, tt, st, a, i, rt, ht, b, ut, it;
        if (n)
          for (k = (new Date).getTime(), c = 0, ft = f.State.calls.length; c < ft; c++)
            if (f.State.calls[c]) {
              var y = f.State.calls[c],
                et = y[0],
                t = y[2],
                p = y[3];
              for (p || (p = f.State.calls[c][3] = k - 16), w = Math.min((k - p) / t.duration, 1), d = 0, ot = et.length; d < ot; d++)
                if (g = et[d], h = g.element, e(h)) {
                  tt = !1;
                  t.display !== r && t.display !== null && t.display !== "none" && (t.display === "flex" && (st = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], o.each(st, function(n, t) {
                    u.setPropertyValue(h, "display", t)
                  })), u.setPropertyValue(h, "display", t.display));
                  t.visibility && t.visibility !== "hidden" && u.setPropertyValue(h, "visibility", t.visibility);
                  for (a in g)
                    a !== "element" && (i = g[a], ht = s.isString(i.easing) ? f.Easings[i.easing] : i.easing, rt = w === 1 ? i.endValue : i.startValue + (i.endValue - i.startValue) * ht(w), i.currentValue = rt, u.Hooks.registered[a] && (b = u.Hooks.getRoot(a), ut = e(h).rootPropertyValueCache[b], ut && (i.rootPropertyValue = ut)), it = u.setPropertyValue(h, a, i.currentValue + (parseFloat(rt) === 0 ? "" : i.unitType), i.rootPropertyValue, i.scrollData), u.Hooks.registered[a] && (e(h).rootPropertyValueCache[b] = u.Normalizations.registered[b] ? u.Normalizations.registered[b]("extract", null, it[1]) : it[1]), it[0] === "transform" && (tt = !0));
                  t.mobileHA && e(h).transformCache.translate3d === r && (e(h).transformCache.translate3d = "(0px, 0px, 0px)", tt = !0);
                  tt && u.flushTransformCache(h)
                }
              t.display !== r && t.display !== "none" && (f.State.calls[c][2].display = !1);
              t.visibility && t.visibility !== "hidden" && (f.State.calls[c][2].visibility = !1);
              t.progress && t.progress.call(y[1], y[1], w, Math.max(0, p + t.duration - k), p);
              w === 1 && nt(c)
            }
        f.State.isTicking && l(v)
      }

      function nt(n, t) {
        var h, v, i, c, l, b;
        if (!f.State.calls[n])
          return !1;
        var y = f.State.calls[n][0],
          a = f.State.calls[n][1],
          s = f.State.calls[n][2],
          p = f.State.calls[n][4],
          w = !1;
        for (h = 0, v = y.length; h < v; h++) {
          if (i = y[h].element, t || s.loop || (s.display === "none" && u.setPropertyValue(i, "display", s.display), s.visibility === "hidden" && u.setPropertyValue(i, "visibility", s.visibility)), o.queue(i)[1] !== r && /\.velocityQueueEntryFlag/i.test(o.queue(i)[1]) || e(i) && (e(i).isAnimating = !1, e(i).rootPropertyValueCache = {}, c = !1, o.each(u.Lists.transforms3D, function(n, t) {
              var u = /^scale/.test(t) ? 1 : 0,
                f = e(i).transformCache[t];
              e(i).transformCache[t] !== r && new RegExp("^\\(" + u + "[^.]").test(f) && (c = !0, delete e(i).transformCache[t])
            }), s.mobileHA && (c = !0, delete e(i).transformCache.translate3d), c && u.flushTransformCache(i), u.Values.removeClass(i, "velocity-animating")), !t && s.complete && !s.loop && h === v - 1)
            try {
              s.complete.call(a, a)
            } catch (k) {
              setTimeout(function() {
                throw k;
              }, 1)
            }
          p && s.loop !== !0 && p(a);
          s.loop !== !0 || t || (o.each(e(i).tweensContainer, function(n, t) {
            /^rotate/.test(n) && parseFloat(t.endValue) === 360 && (t.endValue = 0, t.startValue = 360)
          }), f(i, "reverse", {
            loop: !0,
            delay: s.delay
          }));
          s.queue !== !1 && o.dequeue(i, s.queue)
        }
        for (f.State.calls[n] = !1, l = 0, b = f.State.calls.length; l < b; l++)
          if (f.State.calls[l] !== !1) {
            w = !0;
            break
          }
        w === !1 && (f.State.isTicking = !1, delete f.State.calls, f.State.calls = [])
      }
      var h = function() {
          var n, t;
          if (i.documentMode)
            return i.documentMode;
          for (n = 7; n > 4; n--)
            if (t = i.createElement("div"), t.innerHTML = "<!--[if IE " + n + "]><span><\/span><![endif]-->", t.getElementsByTagName("span").length)
              return t = null, n;
          return r
        }(),
        y = function() {
          var n = 0;
          return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
            var r = (new Date).getTime(),
              i;
            return i = Math.max(0, 16 - (r - n)), n = r + i, setTimeout(function() {
              t(r + i)
            }, i)
          }
        }(),
        s = {
          isString: function(n) {
            return typeof n == "string"
          },
          isArray: Array.isArray || function(n) {
            return Object.prototype.toString.call(n) === "[object Array]"
          },
          isFunction: function(n) {
            return Object.prototype.toString.call(n) === "[object Function]"
          },
          isNode: function(n) {
            return n && n.nodeType
          },
          isNodeList: function(n) {
            return typeof n == "object" && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(n)) && n.length !== r && (n.length === 0 || typeof n[0] == "object" && n[0].nodeType > 0)
          },
          isWrapped: function(n) {
            return n && (n.jquery || t.Zepto && t.Zepto.zepto.isZ(n))
          },
          isSVG: function(n) {
            return t.SVGElement && n instanceof SVGElement
          },
          isEmptyObject: function(n) {
            for (var t in n)
              return !1;
            return !0
          }
        },
        o, w = !1,
        d, u, c, l;
      if (n.fn && n.fn.jquery ? (o = n, w = !0) : o = t.Velocity.Utilities, h <= 8 && !w)
        throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
      else if (h <= 7) {
        jQuery.fn.velocity = jQuery.fn.animate;
        return
      }
      var a = 400,
        b = "swing",
        f = {
          State: {
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isAndroid: /Android/i.test(navigator.userAgent),
            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
            isChrome: t.chrome,
            isFirefox: /Firefox/i.test(navigator.userAgent),
            prefixElement: i.createElement("div"),
            prefixMatches: {},
            scrollAnchor: null,
            scrollPropertyLeft: null,
            scrollPropertyTop: null,
            isTicking: !1,
            calls: []
          },
          CSS: {},
          Utilities: o,
          Sequences: {},
          Easings: {},
          Promise: t.Promise,
          defaults: {
            queue: "",
            duration: a,
            easing: b,
            begin: null,
            complete: null,
            progress: null,
            display: r,
            loop: !1,
            delay: !1,
            mobileHA: !0,
            _cacheValues: !0
          },
          init: function(n) {
            o.data(n, "velocity", {
              isSVG: s.isSVG(n),
              isAnimating: !1,
              computedStyle: null,
              tweensContainer: null,
              rootPropertyValueCache: {},
              transformCache: {}
            })
          },
          animate: null,
          hook: null,
          mock: !1,
          version: {
            major: 1,
            minor: 0,
            patch: 0
          },
          debug: !1
        };
      return t.pageYOffset !== r ? (f.State.scrollAnchor = t, f.State.scrollPropertyLeft = "pageXOffset", f.State.scrollPropertyTop = "pageYOffset") : (f.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, f.State.scrollPropertyLeft = "scrollLeft", f.State.scrollPropertyTop = "scrollTop"), d = function() {
        function t(n) {
          return -n.tension * n.x - n.friction * n.v
        }

        function n(n, i, r) {
          var u = {
            x: n.x + r.dx * i,
            v: n.v + r.dv * i,
            tension: n.tension,
            friction: n.friction
          };
          return {
            dx: u.v,
            dv: t(u)
          }
        }

        function i(i, r) {
          var u = {
              dx: i.v,
              dv: t(i)
            },
            f = n(i, r * .5, u),
            e = n(i, r * .5, f),
            o = n(i, r, e),
            s = 1 / 6 * (u.dx + 2 * (f.dx + e.dx) + o.dx),
            h = 1 / 6 * (u.dv + 2 * (f.dv + e.dv) + o.dv);
          return i.x = i.x + s * r, i.v = i.v + h * r, i
        }
        return function r(n, t, u) {
          var o = {
              x: -1,
              v: 0,
              tension: null,
              friction: null
            },
            s = [0],
            e = 0,
            l = 1 / 1e4,
            a = 16 / 1e3,
            h, c, f;
          for (n = parseFloat(n) || 500, t = parseFloat(t) || 20, u = u || null, o.tension = n, o.friction = t, h = u !== null, h ? (e = r(n, t), c = e / u * a) : c = a;;)
            if (f = i(f || o, c), s.push(1 + f.x), e += 16, !(Math.abs(f.x) > l && Math.abs(f.v) > l))
              break;
          return h ? function(n) {
            return s[n * (s.length - 1) | 0]
          } : e
        }
      }(), f.Easings = {
        linear: function(n) {
          return n
        },
        swing: function(n) {
          return .5 - Math.cos(n * Math.PI) / 2
        },
        spring: function(n) {
          return 1 - Math.cos(n * 4.5 * Math.PI) * Math.exp(-n * 6)
        }
      }, o.each([
        ["ease", [.25, .1, .25, 1]],
        ["ease-in", [.42, 0, 1, 1]],
        ["ease-out", [0, 0, .58, 1]],
        ["ease-in-out", [.42, 0, .58, 1]],
        ["easeInSine", [.47, 0, .745, .715]],
        ["easeOutSine", [.39, .575, .565, 1]],
        ["easeInOutSine", [.445, .05, .55, .95]],
        ["easeInQuad", [.55, .085, .68, .53]],
        ["easeOutQuad", [.25, .46, .45, .94]],
        ["easeInOutQuad", [.455, .03, .515, .955]],
        ["easeInCubic", [.55, .055, .675, .19]],
        ["easeOutCubic", [.215, .61, .355, 1]],
        ["easeInOutCubic", [.645, .045, .355, 1]],
        ["easeInQuart", [.895, .03, .685, .22]],
        ["easeOutQuart", [.165, .84, .44, 1]],
        ["easeInOutQuart", [.77, 0, .175, 1]],
        ["easeInQuint", [.755, .05, .855, .06]],
        ["easeOutQuint", [.23, 1, .32, 1]],
        ["easeInOutQuint", [.86, 0, .07, 1]],
        ["easeInExpo", [.95, .05, .795, .035]],
        ["easeOutExpo", [.19, 1, .22, 1]],
        ["easeInOutExpo", [1, 0, 0, 1]],
        ["easeInCirc", [.6, .04, .98, .335]],
        ["easeOutCirc", [.075, .82, .165, 1]],
        ["easeInOutCirc", [.785, .135, .15, .86]]
      ], function(n, t) {
        f.Easings[t[0]] = k.apply(null, t[1])
      }), u = f.CSS = {
        RegEx: {
          isHex: /^#([A-f\d]{3}){1,2}$/i,
          valueUnwrap: /^[A-z]+\((.*)\)$/i,
          wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
          valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
        },
        Lists: {
          colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
          transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
          transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
        },
        Hooks: {
          templates: {
            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
            backgroundPosition: ["X Y", "0% 0%"],
            transformOrigin: ["X Y Z", "50% 50% 0px"],
            perspectiveOrigin: ["X Y", "50% 50%"]
          },
          registered: {},
          register: function() {
            for (var i, r, n, f, e, o, t = 0; t < u.Lists.colors.length; t++)
              u.Hooks.templates[u.Lists.colors[t]] = ["Red Green Blue Alpha", "255 255 255 1"];
            if (h)
              for (i in u.Hooks.templates)
                r = u.Hooks.templates[i], n = r[0].split(" "), f = r[1].match(u.RegEx.valueSplit), n[0] === "Color" && (n.push(n.shift()), f.push(f.shift()), u.Hooks.templates[i] = [n.join(" "), f.join(" ")]);
            for (i in u.Hooks.templates) {
              r = u.Hooks.templates[i];
              n = r[0].split(" ");
              for (t in n)
                e = i + n[t], o = t, u.Hooks.registered[e] = [i, o]
            }
          },
          getRoot: function(n) {
            var t = u.Hooks.registered[n];
            return t ? t[0] : n
          },
          cleanRootPropertyValue: function(n, t) {
            return u.RegEx.valueUnwrap.test(t) && (t = t.match(u.Hooks.RegEx.valueUnwrap)[1]), u.Values.isCSSNullValue(t) && (t = u.Hooks.templates[n][1]), t
          },
          extractValue: function(n, t) {
            var i = u.Hooks.registered[n],
              r, f;
            return i ? (r = i[0], f = i[1], t = u.Hooks.cleanRootPropertyValue(r, t), t.toString().match(u.RegEx.valueSplit)[f]) : t
          },
          injectValue: function(n, t, i) {
            var r = u.Hooks.registered[n],
              e, o, f;
            return r ? (e = r[0], o = r[1], i = u.Hooks.cleanRootPropertyValue(e, i), f = i.toString().match(u.RegEx.valueSplit), f[o] = t, f.join(" ")) : i
          }
        },
        Normalizations: {
          registered: {
            clip: function(n, t, i) {
              switch (n) {
                case "name":
                  return "clip";
                case "extract":
                  var r;
                  return u.RegEx.wrappedValueAlreadyExtracted.test(i) ? r = i : (r = i.toString().match(u.RegEx.valueUnwrap), r = r ? r[1].replace(/,(\s+)?/g, " ") : i), r;
                case "inject":
                  return "rect(" + i + ")"
              }
            },
            opacity: function(n, t, i) {
              if (h <= 8)
                switch (n) {
                  case "name":
                    return "filter";
                  case "extract":
                    var r = i.toString().match(/alpha\(opacity=(.*)\)/i);
                    return r ? r[1] / 100 : 1;
                  case "inject":
                    return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(parseFloat(i) * 100, 10) + ")"
                } else
                switch (n) {
                  case "name":
                    return "opacity";
                  case "extract":
                    return i;
                  case "inject":
                    return i
                }
            }
          },
          register: function() {
            var n;
            for (h <= 9 || f.State.isGingerbread || (u.Lists.transformsBase = u.Lists.transformsBase.concat(u.Lists.transforms3D)), n = 0; n < u.Lists.transformsBase.length; n++)
              (function() {
                var t = u.Lists.transformsBase[n];
                u.Normalizations.registered[t] = function(n, i, u) {
                  switch (n) {
                    case "name":
                      return "transform";
                    case "extract":
                      return e(i) === r || e(i).transformCache[t] === r ? /^scale/i.test(t) ? 1 : 0 : e(i).transformCache[t].replace(/[()]/g, "");
                    case "inject":
                      var o = !1;
                      switch (t.substr(0, t.length - 1)) {
                        case "translate":
                          o = !/(%|px|em|rem|vw|vh|\d)$/i.test(u);
                          break;
                        case "scal":
                        case "scale":
                          f.State.isAndroid && e(i).transformCache[t] === r && u < 1 && (u = 1);
                          o = !/(\d)$/i.test(u);
                          break;
                        case "skew":
                          o = !/(deg|\d)$/i.test(u);
                          break;
                        case "rotate":
                          o = !/(deg|\d)$/i.test(u)
                      }
                      return o || (e(i).transformCache[t] = "(" + u + ")"), e(i).transformCache[t]
                  }
                }
              })();
            for (n = 0; n < u.Lists.colors.length; n++)
              (function() {
                var t = u.Lists.colors[n];
                u.Normalizations.registered[t] = function(n, i, f) {
                  var e, s, o;
                  switch (n) {
                    case "name":
                      return t;
                    case "extract":
                      return u.RegEx.wrappedValueAlreadyExtracted.test(f) ? e = f : (o = {
                        black: "rgb(0, 0, 0)",
                        blue: "rgb(0, 0, 255)",
                        gray: "rgb(128, 128, 128)",
                        green: "rgb(0, 128, 0)",
                        red: "rgb(255, 0, 0)",
                        white: "rgb(255, 255, 255)"
                      }, /^[A-z]+$/i.test(f) ? s = o[f] !== r ? o[f] : o.black : u.RegEx.isHex.test(f) ? s = "rgb(" + u.Values.hexToRgb(f).join(" ") + ")" : /^rgba?\(/i.test(f) || (s = o.black), e = (s || f).toString().match(u.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")), h <= 8 || e.split(" ").length !== 3 || (e += " 1"), e;
                    case "inject":
                      return h <= 8 ? f.split(" ").length === 4 && (f = f.split(/\s+/).slice(0, 3).join(" ")) : f.split(" ").length === 3 && (f += " 1"), (h <= 8 ? "rgb" : "rgba") + "(" + f.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                  }
                }
              })()
          }
        },
        Names: {
          camelCase: function(n) {
            return n.replace(/-(\w)/g, function(n, t) {
              return t.toUpperCase()
            })
          },
          SVGAttribute: function(n) {
            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
            return (h || f.State.isAndroid && !f.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(n)
          },
          prefixCheck: function(n) {
            var r, t, u, i;
            if (f.State.prefixMatches[n])
              return [f.State.prefixMatches[n], !0];
            for (r = ["", "Webkit", "Moz", "ms", "O"], t = 0, u = r.length; t < u; t++)
              if (i = t === 0 ? n : r[t] + n.replace(/^\w/, function(n) {
                  return n.toUpperCase()
                }), s.isString(f.State.prefixElement.style[i]))
                return f.State.prefixMatches[n] = i, [i, !0];
            return [n, !1]
          }
        },
        Values: {
          hexToRgb: function(n) {
            var t;
            return n = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(n, t, i, r) {
              return t + t + i + i + r + r
            }), t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
          },
          isCSSNullValue: function(n) {
            return n == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(n)
          },
          getUnitType: function(n) {
            return /^(rotate|skew)/i.test(n) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(n) ? "" : "px"
          },
          getDisplayType: function(n) {
            var t = n.tagName.toString().toLowerCase();
            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : "block"
          },
          addClass: function(n, t) {
            n.classList ? n.classList.add(t) : n.className += (n.className.length ? " " : "") + t
          },
          removeClass: function(n, t) {
            n.classList ? n.classList.remove(t) : n.className = n.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
          }
        },
        getPropertyValue: function(n, i, s, c) {
          function y(n, i) {
            var s = 0,
              a, w, b, l, p;
            if (h <= 8)
              s = o.css(n, i);
            else {
              a = !1;
              /^(width|height)$/.test(i) && u.getPropertyValue(n, "display") === 0 && (a = !0, u.setPropertyValue(n, "display", u.Values.getDisplayType(n)));

              function v() {
                a && u.setPropertyValue(n, "display", "none")
              }
              if (!c) {
                if (i === "height" && u.getPropertyValue(n, "boxSizing").toString().toLowerCase() !== "border-box")
                  return w = n.offsetHeight - (parseFloat(u.getPropertyValue(n, "borderTopWidth")) || 0) - (parseFloat(u.getPropertyValue(n, "borderBottomWidth")) || 0) - (parseFloat(u.getPropertyValue(n, "paddingTop")) || 0) - (parseFloat(u.getPropertyValue(n, "paddingBottom")) || 0), v(), w;
                if (i === "width" && u.getPropertyValue(n, "boxSizing").toString().toLowerCase() !== "border-box")
                  return b = n.offsetWidth - (parseFloat(u.getPropertyValue(n, "borderLeftWidth")) || 0) - (parseFloat(u.getPropertyValue(n, "borderRightWidth")) || 0) - (parseFloat(u.getPropertyValue(n, "paddingLeft")) || 0) - (parseFloat(u.getPropertyValue(n, "paddingRight")) || 0), v(), b
              }
              l = e(n) === r ? t.getComputedStyle(n, null) : e(n).computedStyle ? e(n).computedStyle : e(n).computedStyle = t.getComputedStyle(n, null);
              (h || f.State.isFirefox) && i === "borderColor" && (i = "borderTopColor");
              s = h === 9 && i === "filter" ? l.getPropertyValue(i) : l[i];
              (s === "" || s === null) && (s = n.style[i]);
              v()
            }
            return s === "auto" && /^(top|right|bottom|left)$/i.test(i) && (p = y(n, "position"), (p === "fixed" || p === "absolute" && /top|left/i.test(i)) && (s = o(n).position()[i] + "px")), s
          }
          var l, p, a, w, v;
          return u.Hooks.registered[i] ? (p = i, a = u.Hooks.getRoot(p), s === r && (s = u.getPropertyValue(n, u.Names.prefixCheck(a)[0])), u.Normalizations.registered[a] && (s = u.Normalizations.registered[a]("extract", n, s)), l = u.Hooks.extractValue(p, s)) : u.Normalizations.registered[i] && (w = u.Normalizations.registered[i]("name", n), w !== "transform" && (v = y(n, u.Names.prefixCheck(w)[0]), u.Values.isCSSNullValue(v) && u.Hooks.templates[i] && (v = u.Hooks.templates[i][1])), l = u.Normalizations.registered[i]("extract", n, v)), /^[\d-]/.test(l) || (l = e(n) && e(n).isSVG && u.Names.SVGAttribute(i) ? /^(height|width)$/i.test(i) ? n.getBBox()[i] : n.getAttribute(i) : y(n, u.Names.prefixCheck(i)[0])), u.Values.isCSSNullValue(l) && (l = 0), f.debug >= 2 && console.log("Get " + i + ": " + l), l
        },
        setPropertyValue: function(n, i, r, o, s) {
          var c = i,
            a, l;
          if (i === "scroll")
            s.container ? s.container["scroll" + s.direction] = r : s.direction === "Left" ? t.scrollTo(r, s.alternateValue) : t.scrollTo(s.alternateValue, r);
          else if (u.Normalizations.registered[i] && u.Normalizations.registered[i]("name", n) === "transform")
            u.Normalizations.registered[i]("inject", n, r), c = "transform", r = e(n).transformCache[i];
          else {
            if (u.Hooks.registered[i] && (a = i, l = u.Hooks.getRoot(i), o = o || u.getPropertyValue(n, l), r = u.Hooks.injectValue(a, r, o), i = l), u.Normalizations.registered[i] && (r = u.Normalizations.registered[i]("inject", n, r), i = u.Normalizations.registered[i]("name", n)), c = u.Names.prefixCheck(i)[0], h <= 8)
              try {
                n.style[c] = r
              } catch (v) {
                f.debug && console.log("Browser does not support [" + r + "] for [" + c + "]")
              } else
              e(n) && e(n).isSVG && u.Names.SVGAttribute(i) ? n.setAttribute(i, r) : n.style[c] = r;
            f.debug >= 2 && console.log("Set " + i + " (" + c + "): " + r)
          }
          return [c, r]
        },
        flushTransformCache: function(n) {
          var i = "",
            r, s, c;
          if ((h || f.State.isAndroid && !f.State.isChrome) && e(n).isSVG) {
            function t(t) {
              return parseFloat(u.getPropertyValue(n, t))
            }
            r = {
              translate: [t("translateX"), t("translateY")],
              skewX: [t("skewX")],
              skewY: [t("skewY")],
              scale: t("scale") !== 1 ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
              rotate: [t("rotateZ"), 0, 0]
            };
            o.each(e(n).transformCache, function(n) {
              /^translate/i.test(n) ? n = "translate" : /^scale/i.test(n) ? n = "scale" : /^rotate/i.test(n) && (n = "rotate");
              r[n] && (i += n + "(" + r[n].join(" ") + ") ", delete r[n])
            })
          } else
            o.each(e(n).transformCache, function(t) {
              if (s = e(n).transformCache[t], t === "transformPerspective")
                return c = s, !0;
              h === 9 && t === "rotateZ" && (t = "rotate");
              i += t + s + " "
            }), c && (i = "perspective" + c + " " + i);
          u.setPropertyValue(n, "transform", i)
        }
      }, u.Hooks.register(), u.Normalizations.register(), f.hook = function(n, t, i) {
        var u = r;
        return n = p(n), o.each(n, function(n, o) {
          if (e(o) === r && f.init(o), i === r)
            u === r && (u = f.CSS.getPropertyValue(o, t));
          else {
            var s = f.CSS.setPropertyValue(o, t, i);
            s[0] === "transform" && f.CSS.flushTransformCache(o);
            u = s
          }
        }), u
      }, c = function() {
        function et() {
          return ot ? b.promise || null : yt
        }

        function kt() {
          function nt() {
            var st, wt, yt, gt, bt, ot, ni, ft, a, ht, ct, at, et, vt, pt, dt;
            if (n.begin && it === 0)
              try {
                n.begin.call(l, l)
              } catch (ri) {
                setTimeout(function() {
                  throw ri;
                }, 1)
              }
            if (rt === "scroll")
              st = /^x$/i.test(n.axis) ? "Left" : "Top", wt = parseFloat(n.offset) || 0, n.container ? s.isWrapped(n.container) || s.isNode(n.container) ? (n.container = n.container[0] || n.container, yt = n.container["scroll" + st], bt = yt + o(c).position()[st.toLowerCase()] + wt) : n.container = null : (yt = f.State.scrollAnchor[f.State["scrollProperty" + st]], gt = f.State.scrollAnchor[f.State["scrollProperty" + (st === "Left" ? "Top" : "Left")]], bt = o(c).offset()[st.toLowerCase()] + wt), p = {
                scroll: {
                  rootPropertyValue: !1,
                  startValue: yt,
                  currentValue: yt,
                  endValue: bt,
                  unitType: "",
                  easing: n.easing,
                  scrollData: {
                    container: n.container,
                    direction: st,
                    alternateValue: gt
                  }
                },
                element: c
              }, f.debug && console.log("tweensContainer (scroll): ", p.scroll, c);
            else if (rt === "reverse")
              if (e(c).tweensContainer) {
                e(c).opts.display === "none" && (e(c).opts.display = "auto");
                e(c).opts.visibility === "hidden" && (e(c).opts.visibility = "visible");
                e(c).opts.loop = !1;
                e(c).opts.begin = null;
                e(c).opts.complete = null;
                y.easing || delete n.easing;
                y.duration || delete n.duration;
                n = o.extend({}, e(c).opts, n);
                ft = o.extend(!0, {}, e(c).tweensContainer);
                for (ot in ft)
                  ot !== "element" && (ni = ft[ot].startValue, ft[ot].startValue = ft[ot].currentValue = ft[ot].endValue, ft[ot].endValue = ni, s.isEmptyObject(y) || (ft[ot].easing = n.easing), f.debug && console.log("reverse tweensContainer (" + ot + "): " + JSON.stringify(ft[ot]), c));
                p = ft
              } else {
                o.dequeue(c, n.queue);
                return
              } else if (rt === "start") {
              e(c).tweensContainer && e(c).isAnimating === !0 && (ft = e(c).tweensContainer);

              function ti(t, i) {
                var f = r,
                  o = r,
                  e = r;
                return s.isArray(t) ? (f = t[0], !s.isArray(t[1]) && /^[\d-]/.test(t[1]) || s.isFunction(t[1]) || u.RegEx.isHex.test(t[1]) ? e = t[1] : (s.isString(t[1]) && !u.RegEx.isHex.test(t[1]) || s.isArray(t[1])) && (o = i ? t[1] : g(t[1], n.duration), t[2] !== r && (e = t[2]))) : f = t, i || (o = o || n.easing), s.isFunction(f) && (f = f.call(c, it, d)), s.isFunction(e) && (e = e.call(c, it, d)), [f || 0, o, e]
              }
              o.each(w, function(n, t) {
                var i;
                if (RegExp("^" + u.Lists.colors.join("$|^") + "$").test(n)) {
                  var f = ti(t, !0),
                    o = f[0],
                    c = f[1],
                    s = f[2];
                  if (u.RegEx.isHex.test(o)) {
                    var h = ["Red", "Green", "Blue"],
                      l = u.Values.hexToRgb(o),
                      e = s ? u.Values.hexToRgb(s) : r;
                    for (i = 0; i < h.length; i++)
                      w[n + h[i]] = [l[i], c, e ? e[i] : e];
                    delete w[n]
                  }
                }
              });
              for (a in w) {
                var kt = ti(w[a]),
                  ut = kt[0],
                  ui = kt[1],
                  nt = kt[2];
                if (a = u.Names.camelCase(a), ht = u.Hooks.getRoot(a), ct = !1, !e(c).isSVG && u.Names.prefixCheck(ht)[1] === !1 && u.Normalizations.registered[ht] === r) {
                  f.debug && console.log("Skipping [" + ht + "] due to a lack of browser support.");
                  continue
                }
                (n.display !== r && n.display !== null && n.display !== "none" || n.visibility && n.visibility !== "hidden") && /opacity|filter/.test(a) && !nt && ut !== 0 && (nt = 0);
                n._cacheValues && ft && ft[a] ? (nt === r && (nt = ft[a].endValue + ft[a].unitType), ct = e(c).rootPropertyValueCache[ht]) : u.Hooks.registered[a] ? nt === r ? (ct = u.getPropertyValue(c, ht), nt = u.getPropertyValue(c, a, ct)) : ct = u.Hooks.templates[ht][1] : nt === r && (nt = u.getPropertyValue(c, a));
                pt = !1;

                function ii(n, t) {
                  var i, r;
                  return r = (t || 0).toString().toLowerCase().replace(/[%A-z]+$/, function(n) {
                    return i = n, ""
                  }), i || (i = u.Values.getUnitType(n)), [r, i]
                }
                at = ii(a, nt);
                nt = at[0];
                vt = at[1];
                at = ii(a, ut);
                ut = at[0].replace(/^([+-\/*])=/, function(n, t) {
                  return pt = t, ""
                });
                et = at[1];
                nt = parseFloat(nt) || 0;
                ut = parseFloat(ut) || 0;
                et === "%" && (/^(fontSize|lineHeight)$/.test(a) ? (ut = ut / 100, et = "em") : /^scale/.test(a) ? (ut = ut / 100, et = "") : /(Red|Green|Blue)$/i.test(a) && (ut = ut / 100 * 255, et = ""));

                function fi() {
                  var s = {
                      myParent: c.parentNode || i.body,
                      position: u.getPropertyValue(c, "position"),
                      fontSize: u.getPropertyValue(c, "fontSize")
                    },
                    a = s.position === h.lastPosition && s.myParent === h.lastParent,
                    v = s.fontSize === h.lastFontSize,
                    l, r, n;
                  return h.lastParent = s.myParent, h.lastPosition = s.position, h.lastFontSize = s.fontSize, l = 100, r = {}, v && a ? (r.emToPx = h.lastEmToPx, r.percentToPxWidth = h.lastPercentToPxWidth, r.percentToPxHeight = h.lastPercentToPxHeight) : (n = e(c).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div"), f.init(n), s.myParent.appendChild(n), o.each(["overflow", "overflowX", "overflowY"], function(t, i) {
                    f.CSS.setPropertyValue(n, i, "hidden")
                  }), f.CSS.setPropertyValue(n, "position", s.position), f.CSS.setPropertyValue(n, "fontSize", s.fontSize), f.CSS.setPropertyValue(n, "boxSizing", "content-box"), o.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, i) {
                    f.CSS.setPropertyValue(n, i, l + "%")
                  }), f.CSS.setPropertyValue(n, "paddingLeft", l + "em"), r.percentToPxWidth = h.lastPercentToPxWidth = (parseFloat(u.getPropertyValue(n, "width", null, !0)) || 1) / l, r.percentToPxHeight = h.lastPercentToPxHeight = (parseFloat(u.getPropertyValue(n, "height", null, !0)) || 1) / l, r.emToPx = h.lastEmToPx = (parseFloat(u.getPropertyValue(n, "paddingLeft")) || 1) / l, s.myParent.removeChild(n)), h.remToPx === null && (h.remToPx = parseFloat(u.getPropertyValue(i.body, "fontSize")) || 16), h.vwToPx === null && (h.vwToPx = parseFloat(t.innerWidth) / 100, h.vhToPx = parseFloat(t.innerHeight) / 100), r.remToPx = h.remToPx, r.vwToPx = h.vwToPx, r.vhToPx = h.vhToPx, f.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(r), c), r
                }
                if (/[\/*]/.test(pt))
                  et = vt;
                else if (vt !== et && nt !== 0)
                  if (ut === 0)
                    et = vt;
                  else {
                    k = k || fi();
                    dt = /margin|padding|left|right|width|text|word|letter/i.test(a) || /X$/.test(a) || a === "x" ? "x" : "y";
                    switch (vt) {
                      case "%":
                        nt *= dt === "x" ? k.percentToPxWidth : k.percentToPxHeight;
                        break;
                      case "px":
                        break;
                      default:
                        nt *= k[vt + "ToPx"]
                    }
                    switch (et) {
                      case "%":
                        nt *= 1 / (dt === "x" ? k.percentToPxWidth : k.percentToPxHeight);
                        break;
                      case "px":
                        break;
                      default:
                        nt *= 1 / k[et + "ToPx"]
                    }
                  }
                switch (pt) {
                  case "+":
                    ut = nt + ut;
                    break;
                  case "-":
                    ut = nt - ut;
                    break;
                  case "*":
                    ut = nt * ut;
                    break;
                  case "/":
                    ut = nt / ut
                }
                p[a] = {
                  rootPropertyValue: ct,
                  startValue: nt,
                  currentValue: nt,
                  endValue: ut,
                  unitType: et,
                  easing: ui
                };
                f.debug && console.log("tweensContainer (" + a + "): " + JSON.stringify(p[a]), c)
              }
              p.element = c
            }
            p.element && (u.Values.addClass(c, "velocity-animating"), lt.push(p), n.queue === "" && (e(c).tweensContainer = p, e(c).opts = n), e(c).isAnimating = !0, it === d - 1 ? (f.State.calls.length > 1e4 && (f.State.calls = tt(f.State.calls)), f.State.calls.push([lt, l, n, null, b.resolver]), f.State.isTicking === !1 && (f.State.isTicking = !0, v())) : it++)
          }
          var c = this,
            n = o.extend({}, f.defaults, y),
            p = {},
            k;
          if (e(c) === r && f.init(c), parseFloat(n.delay) && n.queue !== !1 && o.queue(c, n.queue, function(t) {
              f.velocityQueueEntryFlag = !0;
              e(c).delayTimer = {
                setTimeout: setTimeout(t, parseFloat(n.delay)),
                next: t
              }
            }), f.mock === !0)
            n.duration = 1;
          else
            switch (n.duration.toString().toLowerCase()) {
              case "fast":
                n.duration = 200;
                break;
              case "normal":
                n.duration = a;
                break;
              case "slow":
                n.duration = 600;
                break;
              default:
                n.duration = parseFloat(n.duration) || 1
            }
          n.easing = g(n.easing, n.duration);
          n.begin && !s.isFunction(n.begin) && (n.begin = null);
          n.progress && !s.isFunction(n.progress) && (n.progress = null);
          n.complete && !s.isFunction(n.complete) && (n.complete = null);
          n.display !== r && n.display !== null && (n.display = n.display.toString().toLowerCase(), n.display === "auto" && (n.display = f.CSS.Values.getDisplayType(c)));
          n.visibility && (n.visibility = n.visibility.toString().toLowerCase());
          n.mobileHA = n.mobileHA && f.State.isMobile && !f.State.isGingerbread;
          n.queue === !1 ? n.delay ? setTimeout(nt, n.delay) : nt() : o.queue(c, n.queue, function(n, t) {
            if (t === !0)
              return b.promise && b.resolver(l), !0;
            f.velocityQueueEntryFlag = !0;
            nt(n)
          });
          (n.queue === "" || n.queue === "fx") && o.queue(c)[0] !== "inprogress" && o.dequeue(c)
        }
        var vt = arguments[0] && (o.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || s.isString(arguments[0].properties)),
          ot, yt, ut, l, w, y, d, it, pt, k, b, rt, ht, ct, h, lt, n, at, st, ft;
        if (s.isWrapped(this) ? (ot = !1, ut = 0, l = this, yt = this) : (ot = !0, ut = 1, l = vt ? arguments[0].elements : arguments[0]), l = p(l), l) {
          if (vt ? (w = arguments[0].properties, y = arguments[0].options) : (w = arguments[ut], y = arguments[ut + 1]), d = l.length, it = 0, w !== "stop" && !o.isPlainObject(y))
            for (pt = ut + 1, y = {}, k = pt; k < arguments.length; k++)
              !s.isArray(arguments[k]) && (/fast|normal|slow/i.test(arguments[k].toString()) || /^\d/.test(arguments[k])) ? y.duration = arguments[k] : s.isString(arguments[k]) || s.isArray(arguments[k]) ? y.easing = arguments[k] : s.isFunction(arguments[k]) && (y.complete = arguments[k]);
          b = {
            promise: null,
            resolver: null,
            rejecter: null
          };
          ot && f.Promise && (b.promise = new f.Promise(function(n, t) {
            b.resolver = n;
            b.rejecter = t
          }));
          switch (w) {
            case "scroll":
              rt = "scroll";
              break;
            case "reverse":
              rt = "reverse";
              break;
            case "stop":
              return o.each(l, function(n, t) {
                e(t) && e(t).delayTimer && (clearTimeout(e(t).delayTimer.setTimeout), e(t).delayTimer.next && e(t).delayTimer.next(), delete e(t).delayTimer)
              }), ht = [], o.each(f.State.calls, function(n, t) {
                t && o.each(t[1], function(i, u) {
                  var f = s.isString(y) ? y : "";
                  if (y !== r && t[2].queue !== f)
                    return !0;
                  o.each(l, function(t, i) {
                    i === u && (y !== r && (o.each(o.queue(i, f), function(n, t) {
                      s.isFunction(t) && t(null, !0)
                    }), o.queue(i, f, [])), e(i) && f === "" && o.each(e(i).tweensContainer, function(n, t) {
                      t.endValue = t.currentValue
                    }), ht.push(n))
                  })
                })
              }), o.each(ht, function(n, t) {
                nt(t, !0)
              }), b.promise && b.resolver(l), et();
            default:
              if (o.isPlainObject(w) && !s.isEmptyObject(w))
                rt = "start";
              else {
                if (s.isString(w) && f.Sequences[w]) {
                  var n = o.extend({}, y),
                    bt = n.duration,
                    wt = n.delay || 0;
                  return n.backwards === !0 && (l = l.reverse()), o.each(l, function(t, i) {
                    parseFloat(n.stagger) ? n.delay = wt + parseFloat(n.stagger) * t : s.isFunction(n.stagger) && (n.delay = wt + n.stagger.call(i, t, d));
                    n.drag && (n.duration = parseFloat(bt) || (/^(callout|transition)/.test(w) ? 1e3 : a), n.duration = Math.max(n.duration * (n.backwards ? 1 - t / d : (t + 1) / d), n.duration * .75, 200));
                    f.Sequences[w].call(i, i, n || {}, t, d, l, b.promise ? b : r)
                  }), et()
                }
                return ct = "Velocity: First argument (" + w + ") was not a property map, a known action, or a registered sequence. Aborting.", b.promise ? b.rejecter(new Error(ct)) : console.log(ct), et()
              }
          }
          if (h = {
              lastParent: null,
              lastPosition: null,
              lastFontSize: null,
              lastPercentToPxWidth: null,
              lastPercentToPxHeight: null,
              lastEmToPx: null,
              remToPx: null,
              vwToPx: null,
              vhToPx: null
            }, lt = [], o.each(l, function(n, t) {
              s.isNode(t) && kt.call(t)
            }), n = o.extend({}, f.defaults, y), n.loop = parseInt(n.loop), at = n.loop * 2 - 1, n.loop)
            for (st = 0; st < at; st++)
              ft = {
                delay: n.delay
              }, st === at - 1 && (ft.display = n.display, ft.visibility = n.visibility, ft.complete = n.complete), c(l, "reverse", ft);
          return et()
        }
      }, f = o.extend(c, f), f.animate = c, l = t.requestAnimationFrame || y, f.State.isMobile || i.hidden === r || i.addEventListener("visibilitychange", function() {
        i.hidden ? (l = function(n) {
          return setTimeout(function() {
            n(!0)
          }, 16)
        }, v()) : l = t.requestAnimationFrame || y
      }), n.Velocity = f, n !== t && (n.fn.velocity = c, n.fn.velocity.defaults = f.defaults), o.each(["Down", "Up"], function(n, t) {
        f.Sequences["slide" + t] = function(n, i, u, e, s, h) {
          var c = o.extend({}, i),
            v = c.begin,
            y = c.complete,
            a = {
              height: "",
              marginTop: "",
              marginBottom: "",
              paddingTop: "",
              paddingBottom: ""
            },
            l = {};
          c.display === r && (c.display = t === "Down" ? f.CSS.Values.getDisplayType(n) === "inline" ? "inline-block" : "block" : "none");
          c.begin = function() {
            var i, r;
            v && v.call(s, s);
            l.overflow = n.style.overflow;
            n.style.overflow = "hidden";
            for (i in a)
              l[i] = n.style[i], r = f.CSS.getPropertyValue(n, i), a[i] = t === "Down" ? [r, 0] : [0, r]
          };
          c.complete = function() {
            for (var t in l)
              n.style[t] = l[t];
            y && y.call(s, s);
            h && h.resolver(s)
          };
          f(n, a, c)
        }
      }), o.each(["In", "Out"], function(n, t) {
        f.Sequences["fade" + t] = function(n, i, u, e, s, h) {
          var c = o.extend({}, i),
            a = {
              opacity: t === "In" ? 1 : 0
            },
            l = c.complete;
          c.complete = u !== e - 1 ? c.begin = null : function() {
            l && l.call(s, s);
            h && h.resolver(s)
          };
          c.display === r && (c.display = t === "In" ? "auto" : "none");
          f(this, a, c)
        }
      }), f
    }(window.jQuery || window.Zepto || window, window, document)
  }),
  function(n) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n() : typeof define == "function" && define.amd ? define(["velocity"], n) : n()
  }(function() {
    return function(n, t, i, r) {
      var u, f;
      if (n.Velocity && n.Velocity.Utilities) {
        if (!n.Velocity.version || n.Velocity.version.major <= 0 && n.Velocity.version.minor <= 11 && n.Velocity.version.patch < 8) {
          u = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
          alert(u);
          throw new Error(u);
        }
      } else {
        t.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");
        return
      }
      n.Velocity.RegisterUI = function(t, i) {
        function u(t, i, r, u) {
          var f = 0,
            e;
          n.Velocity.Utilities.each(t.nodeType ? [t] : t, function(t, i) {
            u && (r += t * u);
            e = i.parentNode;
            n.Velocity.Utilities.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(t, r) {
              f += parseFloat(n.Velocity.CSS.getPropertyValue(i, r))
            })
          });
          n.Velocity.animate(e, {
            height: (i === "In" ? "+" : "-") + "=" + f
          }, {
            queue: !1,
            easing: "ease-in-out",
            duration: r * (i === "In" ? .6 : 1)
          })
        }
        return n.Velocity.Sequences[t] = function(f, e, o, s, h, c) {
          for (var p, w = o === s - 1, a = 0; a < i.calls.length; a++) {
            var v = i.calls[a],
              d = v[0],
              b = e.duration || i.defaultDuration || 1e3,
              g = v[1],
              y = v[2] || {},
              l = {};
            if (l.duration = b * (g || 1), l.queue = e.queue || "", l.easing = y.easing || "ease", l.delay = y.delay || 0, l._cacheValues = y._cacheValues || !0, a === 0 && (l.delay += e.delay || 0, o === 0 && (l.begin = function() {
                e.begin && e.begin.call(h, h);
                var n = t.match(/(In|Out)$/);
                e.animateParentHeight && n && u(h, n[0], b + l.delay, e.stagger)
              }), e.display !== null && (e.display !== r && e.display !== "none" ? l.display = e.display : /In$/.test(t) && (p = n.Velocity.CSS.Values.getDisplayType(f), l.display = p === "inline" ? "inline-block" : p)), e.visibility && e.visibility !== "hidden" && (l.visibility = e.visibility)), a === i.calls.length - 1) {
              function k() {
                (e.display === r || e.display === "none") && /Out$/.test(t) && n.Velocity.Utilities.each(h.nodeType ? [h] : h, function(t, i) {
                  n.Velocity.CSS.setPropertyValue(i, "display", "none")
                });
                e.complete && e.complete.call(h, h);
                c && c.resolver(h || f)
              }
              l.complete = function() {
                var t, r, u;
                if (i.reset) {
                  for (t in i.reset)
                    r = i.reset[t], (typeof r == "string" || typeof r == "number") && (i.reset[t] = [i.reset[t], i.reset[t]]);
                  u = {
                    duration: 0,
                    queue: !1
                  };
                  w && (u.complete = k);
                  n.Velocity.animate(f, i.reset, u)
                } else
                  w && k()
              };
              e.visibility === "hidden" && (l.visibility = e.visibility)
            }
            n.Velocity.animate(f, d, l)
          }
        }, n.Velocity
      };
      n.Velocity.RegisterUI.packagedEffects = {
        "callout.bounce": {
          defaultDuration: 550,
          calls: [
            [{
              translateY: -30
            }, .25],
            [{
              translateY: 0
            }, .125],
            [{
              translateY: -15
            }, .125],
            [{
              translateY: 0
            }, .25]
          ]
        },
        "callout.shake": {
          defaultDuration: 800,
          calls: [
            [{
              translateX: -11
            }, .125],
            [{
              translateX: 11
            }, .125],
            [{
              translateX: -11
            }, .125],
            [{
              translateX: 11
            }, .125],
            [{
              translateX: -11
            }, .125],
            [{
              translateX: 11
            }, .125],
            [{
              translateX: -11
            }, .125],
            [{
              translateX: 0
            }, .125]
          ]
        },
        "callout.flash": {
          defaultDuration: 1100,
          calls: [
            [{
              opacity: [0, "easeInOutQuad", 1]
            }, .25],
            [{
              opacity: [1, "easeInOutQuad"]
            }, .25],
            [{
              opacity: [0, "easeInOutQuad"]
            }, .25],
            [{
              opacity: [1, "easeInOutQuad"]
            }, .25]
          ]
        },
        "callout.pulse": {
          defaultDuration: 825,
          calls: [
            [{
              scaleX: 1.1,
              scaleY: 1.1
            }, .5],
            [{
              scaleX: 1,
              scaleY: 1
            }, .5]
          ]
        },
        "callout.swing": {
          defaultDuration: 950,
          calls: [
            [{
              rotateZ: 15
            }, .2],
            [{
              rotateZ: -10
            }, .2],
            [{
              rotateZ: 5
            }, .2],
            [{
              rotateZ: -5
            }, .2],
            [{
              rotateZ: 0
            }, .2]
          ]
        },
        "callout.tada": {
          defaultDuration: 1e3,
          calls: [
            [{
              scaleX: .9,
              scaleY: .9,
              rotateZ: -3
            }, .1],
            [{
              scaleX: 1.1,
              scaleY: 1.1,
              rotateZ: 3
            }, .1],
            [{
              scaleX: 1.1,
              scaleY: 1.1,
              rotateZ: -3
            }, .1],
            ["reverse", .125],
            ["reverse", .125],
            ["reverse", .125],
            ["reverse", .125],
            ["reverse", .125],
            [{
              scaleX: 1,
              scaleY: 1,
              rotateZ: 0
            }, .2]
          ]
        },
        "transition.fadeIn": {
          defaultDuration: 500,
          calls: [
            [{
              opacity: [1, 0]
            }]
          ]
        },
        "transition.fadeOut": {
          defaultDuration: 500,
          calls: [
            [{
              opacity: [0, 1]
            }]
          ]
        },
        "transition.flipXIn": {
          defaultDuration: 700,
          calls: [
            [{
              opacity: [1, 0],
              transformPerspective: [800, 800],
              rotateY: [0, -55]
            }]
          ],
          reset: {
            transformPerspective: 0
          }
        },
        "transition.flipXOut": {
          defaultDuration: 700,
          calls: [
            [{
              opacity: [0, 1],
              transformPerspective: [800, 800],
              rotateY: 55
            }]
          ],
          reset: {
            transformPerspective: 0,
            rotateY: 0
          }
        },
        "transition.flipYIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              transformPerspective: [800, 800],
              rotateX: [0, -45]
            }]
          ],
          reset: {
            transformPerspective: 0
          }
        },
        "transition.flipYOut": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [0, 1],
              transformPerspective: [800, 800],
              rotateX: 25
            }]
          ],
          reset: {
            transformPerspective: 0,
            rotateX: 0
          }
        },
        "transition.flipBounceXIn": {
          defaultDuration: 900,
          calls: [
            [{
              opacity: [.725, 0],
              transformPerspective: [400, 400],
              rotateY: [-10, 90]
            }, .5],
            [{
              opacity: .8,
              rotateY: 10
            }, .25],
            [{
              opacity: 1,
              rotateY: 0
            }, .25]
          ],
          reset: {
            transformPerspective: 0
          }
        },
        "transition.flipBounceXOut": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [.9, 1],
              transformPerspective: [400, 400],
              rotateY: -10
            }, .5],
            [{
              opacity: 0,
              rotateY: 90
            }, .5]
          ],
          reset: {
            transformPerspective: 0,
            rotateY: 0
          }
        },
        "transition.flipBounceYIn": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [.725, 0],
              transformPerspective: [400, 400],
              rotateX: [-10, 90]
            }, .5],
            [{
              opacity: .8,
              rotateX: 10
            }, .25],
            [{
              opacity: 1,
              rotateX: 0
            }, .25]
          ],
          reset: {
            transformPerspective: 0
          }
        },
        "transition.flipBounceYOut": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [.9, 1],
              transformPerspective: [400, 400],
              rotateX: -15
            }, .5],
            [{
              opacity: 0,
              rotateX: 90
            }, .5]
          ],
          reset: {
            transformPerspective: 0,
            rotateX: 0
          }
        },
        "transition.swoopIn": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [1, 0],
              transformOriginX: ["100%", "50%"],
              transformOriginY: ["100%", "100%"],
              scaleX: [1, 0],
              scaleY: [1, 0],
              translateX: [0, -700],
              translateZ: 0
            }]
          ],
          reset: {
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.swoopOut": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [0, 1],
              transformOriginX: ["50%", "100%"],
              transformOriginY: ["100%", "100%"],
              scaleX: 0,
              scaleY: 0,
              translateX: -700,
              translateZ: 0
            }]
          ],
          reset: {
            transformOriginX: "50%",
            transformOriginY: "50%",
            scaleX: 1,
            scaleY: 1,
            translateX: 0
          }
        },
        "transition.whirlIn": {
          defaultDuration: 900,
          calls: [
            [{
              opacity: [1, 0],
              transformOriginX: ["50%", "50%"],
              transformOriginY: ["50%", "50%"],
              scaleX: [1, 0],
              scaleY: [1, 0],
              rotateY: [0, 160]
            }]
          ]
        },
        "transition.whirlOut": {
          defaultDuration: 900,
          calls: [
            [{
              opacity: [0, 1],
              transformOriginX: ["50%", "50%"],
              transformOriginY: ["50%", "50%"],
              scaleX: 0,
              scaleY: 0,
              rotateY: 160
            }]
          ],
          reset: {
            scaleX: 1,
            scaleY: 1,
            rotateY: 0
          }
        },
        "transition.shrinkIn": {
          defaultDuration: 700,
          calls: [
            [{
              opacity: [1, 0],
              transformOriginX: ["50%", "50%"],
              transformOriginY: ["50%", "50%"],
              scaleX: [1, 1.5],
              scaleY: [1, 1.5],
              translateZ: 0
            }]
          ]
        },
        "transition.shrinkOut": {
          defaultDuration: 650,
          calls: [
            [{
              opacity: [0, 1],
              transformOriginX: ["50%", "50%"],
              transformOriginY: ["50%", "50%"],
              scaleX: 1.3,
              scaleY: 1.3,
              translateZ: 0
            }]
          ],
          reset: {
            scaleX: 1,
            scaleY: 1
          }
        },
        "transition.expandIn": {
          defaultDuration: 700,
          calls: [
            [{
              opacity: [1, 0],
              transformOriginX: ["50%", "50%"],
              transformOriginY: ["50%", "50%"],
              scaleX: [1, .625],
              scaleY: [1, .625],
              translateZ: 0
            }]
          ]
        },
        "transition.expandOut": {
          defaultDuration: 700,
          calls: [
            [{
              opacity: [0, 1],
              transformOriginX: ["50%", "50%"],
              transformOriginY: ["50%", "50%"],
              scaleX: .5,
              scaleY: .5,
              translateZ: 0
            }]
          ],
          reset: {
            scaleX: 1,
            scaleY: 1
          }
        },
        "transition.bounceIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              scaleX: [1.05, .3],
              scaleY: [1.05, .3]
            }, .4],
            [{
              scaleX: .9,
              scaleY: .9,
              translateZ: 0
            }, .2],
            [{
              scaleX: 1,
              scaleY: 1
            }, .5]
          ]
        },
        "transition.bounceOut": {
          defaultDuration: 800,
          calls: [
            [{
              scaleX: .95,
              scaleY: .95
            }, .4],
            [{
              scaleX: 1.1,
              scaleY: 1.1,
              translateZ: 0
            }, .4],
            [{
              opacity: [0, 1],
              scaleX: .3,
              scaleY: .3
            }, .2]
          ],
          reset: {
            scaleX: 1,
            scaleY: 1
          }
        },
        "transition.bounceUpIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              translateY: [-30, 1e3]
            }, .6, {
              easing: "easeOutCirc"
            }],
            [{
              translateY: 10
            }, .2],
            [{
              translateY: 0
            }, .2]
          ]
        },
        "transition.bounceUpOut": {
          defaultDuration: 1e3,
          calls: [
            [{
              translateY: 20
            }, .2],
            [{
              opacity: [0, "easeInCirc", 1],
              translateY: -1e3
            }, .8]
          ],
          reset: {
            translateY: 0
          }
        },
        "transition.bounceDownIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              translateY: [30, -1e3]
            }, .6, {
              easing: "easeOutCirc"
            }],
            [{
              translateY: -10
            }, .2],
            [{
              translateY: 0
            }, .2]
          ]
        },
        "transition.bounceDownOut": {
          defaultDuration: 1e3,
          calls: [
            [{
              translateY: -20
            }, .2],
            [{
              opacity: [0, "easeInCirc", 1],
              translateY: 1e3
            }, .8]
          ],
          reset: {
            translateY: 0
          }
        },
        "transition.bounceLeftIn": {
          defaultDuration: 750,
          calls: [
            [{
              opacity: [1, 0],
              translateX: [30, -1250]
            }, .6, {
              easing: "easeOutCirc"
            }],
            [{
              translateX: -10
            }, .2],
            [{
              translateX: 0
            }, .2]
          ]
        },
        "transition.bounceLeftOut": {
          defaultDuration: 750,
          calls: [
            [{
              translateX: 30
            }, .2],
            [{
              opacity: [0, "easeInCirc", 1],
              translateX: -1250
            }, .8]
          ],
          reset: {
            translateX: 0
          }
        },
        "transition.bounceRightIn": {
          defaultDuration: 750,
          calls: [
            [{
              opacity: [1, 0],
              translateX: [-30, 1250]
            }, .6, {
              easing: "easeOutCirc"
            }],
            [{
              translateX: 10
            }, .2],
            [{
              translateX: 0
            }, .2]
          ]
        },
        "transition.bounceRightOut": {
          defaultDuration: 750,
          calls: [
            [{
              translateX: -30
            }, .2],
            [{
              opacity: [0, "easeInCirc", 1],
              translateX: 1250
            }, .8]
          ],
          reset: {
            translateX: 0
          }
        },
        "transition.slideUpIn": {
          defaultDuration: 900,
          calls: [
            [{
              opacity: [1, 0],
              translateY: [0, 20],
              translateZ: 0
            }]
          ]
        },
        "transition.slideUpOut": {
          defaultDuration: 900,
          calls: [
            [{
              opacity: [0, 1],
              translateY: -20,
              translateZ: 0
            }]
          ],
          reset: {
            translateY: 0
          }
        },
        "transition.slideDownIn": {
          defaultDuration: 900,
          calls: [
            [{
              opacity: [1, 0],
              translateY: [0, -20],
              translateZ: 0
            }]
          ]
        },
        "transition.slideDownOut": {
          defaultDuration: 900,
          calls: [
            [{
              opacity: [0, 1],
              translateY: 20,
              translateZ: 0
            }]
          ],
          reset: {
            translateY: 0
          }
        },
        "transition.slideLeftIn": {
          defaultDuration: 1e3,
          calls: [
            [{
              opacity: [1, 0],
              translateX: [0, -20],
              translateZ: 0
            }]
          ]
        },
        "transition.slideLeftOut": {
          defaultDuration: 1050,
          calls: [
            [{
              opacity: [0, 1],
              translateX: -20,
              translateZ: 0
            }]
          ],
          reset: {
            translateX: 0
          }
        },
        "transition.slideRightIn": {
          defaultDuration: 1e3,
          calls: [
            [{
              opacity: [1, 0],
              translateX: [0, 20],
              translateZ: 0
            }]
          ]
        },
        "transition.slideRightOut": {
          defaultDuration: 1050,
          calls: [
            [{
              opacity: [0, 1],
              translateX: 20,
              translateZ: 0
            }]
          ],
          reset: {
            translateX: 0
          }
        },
        "transition.slideUpBigIn": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [1, 0],
              translateY: [0, 75],
              translateZ: 0
            }]
          ]
        },
        "transition.slideUpBigOut": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [0, 1],
              translateY: -75,
              translateZ: 0
            }]
          ],
          reset: {
            translateY: 0
          }
        },
        "transition.slideDownBigIn": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [1, 0],
              translateY: [0, -75],
              translateZ: 0
            }]
          ]
        },
        "transition.slideDownBigOut": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [0, 1],
              translateY: 75,
              translateZ: 0
            }]
          ],
          reset: {
            translateY: 0
          }
        },
        "transition.slideLeftBigIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              translateX: [0, -75],
              translateZ: 0
            }]
          ]
        },
        "transition.slideLeftBigOut": {
          defaultDuration: 750,
          calls: [
            [{
              opacity: [0, 1],
              translateX: -75,
              translateZ: 0
            }]
          ],
          reset: {
            translateX: 0
          }
        },
        "transition.slideRightBigIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              translateX: [0, 75],
              translateZ: 0
            }]
          ]
        },
        "transition.slideRightBigOut": {
          defaultDuration: 750,
          calls: [
            [{
              opacity: [0, 1],
              translateX: 75,
              translateZ: 0
            }]
          ],
          reset: {
            translateX: 0
          }
        },
        "transition.perspectiveUpIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              transformPerspective: [800, 800],
              transformOriginX: [0, 0],
              transformOriginY: ["100%", "100%"],
              rotateX: [0, -180]
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.perspectiveUpOut": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [0, 1],
              transformPerspective: [800, 800],
              transformOriginX: [0, 0],
              transformOriginY: ["100%", "100%"],
              rotateX: -180
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%",
            rotateX: 0
          }
        },
        "transition.perspectiveDownIn": {
          defaultDuration: 800,
          calls: [
            [{
              opacity: [1, 0],
              transformPerspective: [800, 800],
              transformOriginX: [0, 0],
              transformOriginY: [0, 0],
              rotateX: [0, 180]
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.perspectiveDownOut": {
          defaultDuration: 850,
          calls: [
            [{
              opacity: [0, 1],
              transformPerspective: [800, 800],
              transformOriginX: [0, 0],
              transformOriginY: [0, 0],
              rotateX: 180
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%",
            rotateX: 0
          }
        },
        "transition.perspectiveLeftIn": {
          defaultDuration: 950,
          calls: [
            [{
              opacity: [1, 0],
              transformPerspective: [2e3, 2e3],
              transformOriginX: [0, 0],
              transformOriginY: [0, 0],
              rotateY: [0, -180]
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.perspectiveLeftOut": {
          defaultDuration: 950,
          calls: [
            [{
              opacity: [0, 1],
              transformPerspective: [2e3, 2e3],
              transformOriginX: [0, 0],
              transformOriginY: [0, 0],
              rotateY: -180
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%",
            rotateY: 0
          }
        },
        "transition.perspectiveRightIn": {
          defaultDuration: 950,
          calls: [
            [{
              opacity: [1, 0],
              transformPerspective: [2e3, 2e3],
              transformOriginX: ["100%", "100%"],
              transformOriginY: [0, 0],
              rotateY: [0, 180]
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%"
          }
        },
        "transition.perspectiveRightOut": {
          defaultDuration: 950,
          calls: [
            [{
              opacity: [0, 1],
              transformPerspective: [2e3, 2e3],
              transformOriginX: ["100%", "100%"],
              transformOriginY: [0, 0],
              rotateY: 180
            }]
          ],
          reset: {
            transformPerspective: 0,
            transformOriginX: "50%",
            transformOriginY: "50%",
            rotateY: 0
          }
        }
      };
      for (f in n.Velocity.RegisterUI.packagedEffects)
        n.Velocity.RegisterUI(f, n.Velocity.RegisterUI.packagedEffects[f])
    }(window.jQuery || window.Zepto || window, window, document)
  });
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
  deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
  deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
  deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
  deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;
FastClick.prototype.needsClick = function(n) {
  "use strict";
  switch (n.nodeName.toLowerCase()) {
    case "button":
    case "select":
    case "textarea":
      if (n.disabled)
        return !0;
      break;
    case "input":
      if (deviceIsIOS && n.type === "file" || n.disabled)
        return !0;
      break;
    case "label":
    case "video":
      return !0
  }
  return /\bneedsclick\b/.test(n.className)
};
FastClick.prototype.needsFocus = function(n) {
  "use strict";
  switch (n.nodeName.toLowerCase()) {
    case "textarea":
      return !0;
    case "select":
      return !deviceIsAndroid;
    case "input":
      switch (n.type) {
        case "button":
        case "checkbox":
        case "file":
        case "image":
        case "radio":
        case "submit":
          return !1
      }
      return !n.disabled && !n.readOnly;
    default:
      return /\bneedsfocus\b/.test(n.className)
  }
};
FastClick.prototype.sendClick = function(n, t) {
  "use strict";
  var r, i;
  document.activeElement && document.activeElement !== n && document.activeElement.blur();
  i = t.changedTouches[0];
  r = document.createEvent("MouseEvents");
  r.initMouseEvent(this.determineEventType(n), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null);
  r.forwardedTouchEvent = !0;
  n.dispatchEvent(r)
};
FastClick.prototype.determineEventType = function(n) {
  "use strict";
  return deviceIsAndroid && n.tagName.toLowerCase() === "select" ? "mousedown" : "click"
};
FastClick.prototype.focus = function(n) {
  "use strict";
  var t;
  deviceIsIOS && n.setSelectionRange && n.type.indexOf("date") !== 0 && n.type !== "time" ? (t = n.value.length, n.setSelectionRange(t, t)) : n.focus()
};
FastClick.prototype.updateScrollParent = function(n) {
  "use strict";
  var i, t;
  if (i = n.fastClickScrollParent, !i || !i.contains(n)) {
    t = n;
    do {
      if (t.scrollHeight > t.offsetHeight) {
        i = t;
        n.fastClickScrollParent = t;
        break
      }
      t = t.parentElement
    } while (t)
  }
  i && (i.fastClickLastScrollTop = i.scrollTop)
};
FastClick.prototype.getTargetElementFromEventTarget = function(n) {
  "use strict";
  return n.nodeType === Node.TEXT_NODE ? n.parentNode : n
};
FastClick.prototype.onTouchStart = function(n) {
  "use strict";
  var i, t, r;
  if (n.targetTouches.length > 1)
    return !0;
  if (i = this.getTargetElementFromEventTarget(n.target), t = n.targetTouches[0], deviceIsIOS) {
    if (r = window.getSelection(), r.rangeCount && !r.isCollapsed)
      return !0;
    if (!deviceIsIOS4) {
      if (t.identifier && t.identifier === this.lastTouchIdentifier)
        return n.preventDefault(), !1;
      this.lastTouchIdentifier = t.identifier;
      this.updateScrollParent(i)
    }
  }
  return this.trackingClick = !0, this.trackingClickStart = n.timeStamp, this.targetElement = i, this.touchStartX = t.pageX, this.touchStartY = t.pageY, n.timeStamp - this.lastClickTime < this.tapDelay && n.preventDefault(), !0
};
FastClick.prototype.touchHasMoved = function(n) {
  "use strict";
  var t = n.changedTouches[0],
    i = this.touchBoundary;
  return Math.abs(t.pageX - this.touchStartX) > i || Math.abs(t.pageY - this.touchStartY) > i ? !0 : !1
};
FastClick.prototype.onTouchMove = function(n) {
  "use strict";
  return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(n.target) || this.touchHasMoved(n)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
};
FastClick.prototype.findControl = function(n) {
  "use strict";
  return n.control !== undefined ? n.control : n.htmlFor ? document.getElementById(n.htmlFor) : n.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
};
FastClick.prototype.onTouchEnd = function(n) {
  "use strict";
  var u, e, i, r, f, t = this.targetElement;
  if (!this.trackingClick)
    return !0;
  if (n.timeStamp - this.lastClickTime < this.tapDelay)
    return this.cancelNextClick = !0, !0;
  if (this.cancelNextClick = !1, this.lastClickTime = n.timeStamp, e = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (f = n.changedTouches[0], t = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || t, t.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = t.tagName.toLowerCase(), i === "label") {
    if (u = this.findControl(t), u) {
      if (this.focus(t), deviceIsAndroid)
        return !1;
      t = u
    }
  } else if (this.needsFocus(t))
    return n.timeStamp - e > 100 || deviceIsIOS && window.top !== window && i === "input" ? (this.targetElement = null, !1) : (this.focus(t), this.sendClick(t, n), deviceIsIOS && i === "select" || (this.targetElement = null, n.preventDefault()), !1);
  return deviceIsIOS && !deviceIsIOS4 && (r = t.fastClickScrollParent, r && r.fastClickLastScrollTop !== r.scrollTop) ? !0 : (this.needsClick(t) || (n.preventDefault(), this.sendClick(t, n)), !1)
};
FastClick.prototype.onTouchCancel = function() {
  "use strict";
  this.trackingClick = !1;
  this.targetElement = null
};
FastClick.prototype.onMouse = function(n) {
  "use strict";
  return this.targetElement ? n.forwardedTouchEvent ? !0 : n.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (n.stopImmediatePropagation ? n.stopImmediatePropagation() : n.propagationStopped = !0, n.stopPropagation(), n.preventDefault(), !1) : !0 : !0 : !0
};
FastClick.prototype.onClick = function(n) {
  "use strict";
  var t;
  return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : n.target.type === "submit" && n.detail === 0 ? !0 : (t = this.onMouse(n), t || (this.targetElement = null), t)
};
FastClick.prototype.destroy = function() {
  "use strict";
  var n = this.layer;
  deviceIsAndroid && (n.removeEventListener("mouseover", this.onMouse, !0), n.removeEventListener("mousedown", this.onMouse, !0), n.removeEventListener("mouseup", this.onMouse, !0));
  n.removeEventListener("click", this.onClick, !0);
  n.removeEventListener("touchstart", this.onTouchStart, !1);
  n.removeEventListener("touchmove", this.onTouchMove, !1);
  n.removeEventListener("touchend", this.onTouchEnd, !1);
  n.removeEventListener("touchcancel", this.onTouchCancel, !1)
};
FastClick.notNeeded = function(n) {
  "use strict";
  var t, i, r;
  if (typeof ontouchstart == "undefined")
    return !0;
  if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], i)
    if (deviceIsAndroid) {
      if (t = document.querySelector("meta[name=viewport]"), t && (t.content.indexOf("user-scalable=no") !== -1 || i > 31 && document.documentElement.scrollWidth <= window.outerWidth))
        return !0
    } else
      return !0;
  return deviceIsBlackBerry10 && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (t = document.querySelector("meta[name=viewport]"), t && (t.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) ? !0 : n.style.msTouchAction === "none" ? !0 : !1
};
FastClick.attach = function(n, t) {
  "use strict";
  return new FastClick(n, t)
};
typeof define == "function" && typeof define.amd == "object" && define.amd ? define(function() {
    "use strict";
    return FastClick
  }) : typeof module != "undefined" && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick,
  function(n) {
    var f = /iPhone/i,
      e = /iPod/i,
      o = /iPad/i,
      i = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
      s = /Android/i,
      h = /IEMobile/i,
      c = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
      l = /BlackBerry/i,
      a = /BB10/i,
      v = /Opera Mini/i,
      y = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
      p = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
      t = function(n, t) {
        return n.test(t)
      },
      r = function(n) {
        var r = n || navigator.userAgent;
        return this.apple = {
          phone: t(f, r),
          ipod: t(e, r),
          tablet: t(o, r),
          device: t(f, r) || t(e, r) || t(o, r)
        }, this.android = {
          phone: t(i, r),
          tablet: !t(i, r) && t(s, r),
          device: t(i, r) || t(s, r)
        }, this.windows = {
          phone: t(h, r),
          tablet: t(c, r),
          device: t(h, r) || t(c, r)
        }, this.other = {
          blackberry: t(l, r),
          blackberry10: t(a, r),
          opera: t(v, r),
          firefox: t(y, r),
          device: t(l, r) || t(a, r) || t(v, r) || t(y, r)
        }, this.seven_inch = t(p, r), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, typeof window == "undefined" ? this : void 0
      },
      u = function() {
        var n = new r;
        return n.Class = r, n
      };
    typeof module != "undefined" && module.exports && typeof window == "undefined" ? module.exports = r : typeof module != "undefined" && module.exports && typeof window != "undefined" ? module.exports = u() : typeof define == "function" && define.amd ? define(n.isMobile = u()) : n.isMobile = u()
  }(this),
  function(n, t) {
    "use strict";

    function r() {
      var i = this;
      i.$mainHeader = n("header#main-header");
      t.Modernizr.svg || n(".gogoro-logo").attr("src", "//images.gogoroapp.com/gogoro.png");
      n(".navbar-default-gogoro .navbar-toggle").on("click", function(n) {
        n.stopImmediatePropagation();
        n.preventDefault();
        i.toggleNav()
      });
      var u = n(".navbar-primary").data("current-action"),
        f = n(".navbar-primary a"),
        r = n(".navbar-primary span");
      r.css("display", "none");
      f.each(function(t) {
        var i = n(this).data("action-name");
        i == u && (n(this).css("display", "none"), r.eq(t).css("display", "block"))
      });
      this.$body = n("body");
      this.$siteContainer = n("#site-container");
      this.$navBrand = n(".navbar-default-gogoro .navbar-brand")
    }
    t.gogoro = t.gogoro || {};
    t.gogoro.partials = t.gogoro.partials || {};
    t.gogoro.partials.SlidePushMenu = r;
    var i = t.gogoro;
    r.prototype.setPg = function(t) {
      var i = n(".navbar-primary a").removeClass("active");
      i.filter('[data-state="' + t + '"]').addClass("active")
    };
    r.prototype.toggleNav = function() {
      this.$body.hasClass("navigation-active") && !this.$siteContainer.hasClass("velocity-animating") ? this.closeNav() : this.$siteContainer.hasClass("velocity-animating") || this.openNav()
    };
    r.prototype.openNav = function() {
      var r = this,
        u = i.App.getBreakpoint() === "xs" ? 268 : 400,
        t = 220;
      i.App.getBreakpoint() === "md" || i.App.getBreakpoint() === "lg" ? r.$mainHeader.css("position", "absolute") : r.$mainHeader.css("position", "static");
      n(window).on("orientationchange", function() {
        r.closeNavImmediately()
      });
      if (this.$body.addClass("navigation-active").css({
          height: n(window).outerHeight()
        }), this.$siteContainer.css({
          height: n(window).outerHeight(),
          overflow: "hidden",
          zIndex: 100
        }), !n("#site-overlay").length) {
        n("<div>", {
          id: "site-overlay",
          css: {
            right: u
          }
        }).appendTo("body");
        n("#site-overlay").on("touchmove", function(n) {
          n.preventDefault()
        })
      }
      n(".navbar-toggle .icon-bar:eq(0)").velocity({
        translateY: i.App.getBreakpoint() === "xs" || i.App.getBreakpoint() === "sm" ? 7 : 8
      }, {
        duration: t / 2,
        easing: "easeOut",
        complete: function() {
          n(".navbar-toggle .icon-bar:eq(1)").velocity("fadeOut", {
            duration: t / 4
          });
          n(this).velocity({
            rotateZ: "45deg"
          }, {
            duration: t / 2,
            easing: "easeOut"
          })
        }
      });
      n(".navbar-toggle .icon-bar:eq(2)").velocity({
        translateY: i.App.getBreakpoint() === "xs" || i.App.getBreakpoint() === "sm" ? -7 : -8
      }, {
        duration: t / 2,
        easing: "easeOut",
        complete: function() {
          n(this).velocity({
            rotateZ: "-45deg"
          }, {
            duration: t / 2,
            easing: "easeOut"
          })
        }
      });
      n(".navbar-main").css({
        display: "block",
        top: 0
      });
      n(".navbar-main .navbar-container").scrollTop(0);
      n("#hero-header .gradient-one").length && n("#hero-header .gradient-one, #hero-header  .gradient-two").velocity("stop");
      this.$siteContainer.velocity({
        translateX: -u
      }, {
        duration: t,
        easing: "easeOut"
      });
      (i.App.getBreakpoint() === "md" || i.App.getBreakpoint() === "lg") && n(".navbar-default-gogoro .navbar-brand").velocity({
        translateX: u
      }, {
        duration: t,
        easing: "easeOut"
      });
      n(".navbar-items").velocity({
        translateX: 30
      }, {
        delay: 50,
        duration: t,
        easing: "easeOut"
      });
      n(".navbar-default-gogoro.fixed").velocity({
        translateX: -u
      }, {
        duration: t,
        easing: "easeOut"
      });
      n("#site-overlay").on("click", function(n) {
        n.stopImmediatePropagation();
        r.toggleNav()
      });
      setTimeout(function() {
        n(".close-navbar-primary").on("click", function(n) {
          n.stopImmediatePropagation();
          n.preventDefault();
          r.closeNav()
        })
      }, t)
    };
    r.prototype.closeNav = function() {
      var r = this,
        t = 180;
      n(window).unbind("orientationchange");
      this.$siteContainer.velocity({
        translateX: 0
      }, {
        delay: 50,
        duration: t,
        easing: "easeOut",
        complete: function() {
          n(".navbar-main").attr("style", "");
          r.$siteContainer.attr("style", "");
          i.App.getBreakpoint() === "md" || i.App.getBreakpoint() === "lg" ? r.$mainHeader.css("position", "fixed") : r.$mainHeader.css("position", "static")
        }
      });
      n(".navbar-toggle .icon-bar:eq(0)").velocity({
        rotateZ: "0deg"
      }, {
        duration: t / 2,
        easing: "easeOut",
        complete: function() {
          n(".navbar-toggle .icon-bar:eq(1)").velocity("fadeIn", {
            duration: t / 4
          });
          n(this).velocity({
            translateY: 0
          }, {
            duration: t / 2,
            easing: "easeOut"
          })
        }
      });
      n(".navbar-toggle .icon-bar:eq(2)").velocity({
        rotateZ: "0deg"
      }, {
        duration: t / 2,
        easing: "easeOut",
        complete: function() {
          n(this).velocity({
            translateY: 0
          }, {
            duration: t / 2,
            easing: "easeOut"
          })
        }
      });
      n(".navbar-default-gogoro.fixed").velocity({
        translateX: 0
      }, {
        delay: 50,
        duration: t,
        easing: "easeOut"
      });
      (i.App.getBreakpoint() === "md" || i.App.getBreakpoint() === "lg") && n(".navbar-default-gogoro .navbar-brand").velocity({
        translateX: 0
      }, {
        delay: 50,
        duration: t,
        easing: "easeOut"
      });
      n(".navbar-items").velocity({
        translateX: -30
      }, {
        duration: t,
        easing: "easeOut"
      });
      this.$body.removeClass("navigation-active").css({
        height: "auto"
      });
      n("#site-overlay").remove();
      n(".close-navbar-primary").unbind()
    };
    r.prototype.closeNavImmediately = function() {
      var t = this;
      n(window).unbind("orientationchange");
      this.$siteContainer.velocity({
        translateX: 0
      }, {
        duration: 0,
        complete: function() {
          n(".navbar-main").attr("style", "");
          t.$siteContainer.attr("style", "")
        }
      });
      n(".navbar-default-gogoro.fixed").attr("style", "");
      n(".navbar-primary").attr("style", "");
      (i.App.getBreakpoint() === "md" || i.App.getBreakpoint() === "lg") && n(".navbar-default-gogoro .navbar-brand").attr("style", "");
      this.$body.removeClass("navigation-active").css({
        height: "auto"
      });
      n("#site-overlay").remove();
      n(".close-navbar-primary").unbind()
    }
  }(window.jQuery, window),
  function(n, t) {
    "use strict";

    function i() {
      var t = this;
      t.showConsoleLog = !0;
      t.$SiteContainer = n("#site-container");
      t.$mainHeader = n("header#main-header");
      t.init()
    }
    t.gogoro = t.gogoro || {};
    t.gogoro.partials = t.gogoro.partials || {};
    t.gogoro.partials.Header = i;
    var r = t.gogoro;
    i.prototype.windowResize = function() {
      var t = this;
      n(window).on("resize", function() {
        r.App.currentState == "fallback" && (typeof t.$collisionRepositioneElement != "undefined" && t.$collisionRepositioneElement.css("top", 0), n(window).off("scroll.headerscrolling"), n(window).off("scroll.tabbar"));
        r.App.currentState == "standard" && t.detectCollisionElement()
      })
    };
    i.prototype.consoleLog = function() {
      var n = this;
      n.showConsoleLog == !1 && (console.log = function() {})
    };
    i.prototype.init = function() {
      var n = this;
      r.App.currentState == "standard" && n.detectCollisionElement();
      n.windowResize()
    };
    i.prototype.detectCollisionElement = function() {
      var n = this;
      n.hasCollisionElement = !1;
      n.$collisionElement = n.$SiteContainer.find(".collision");
      n.collisionElementLength = n.$collisionElement.length;
      n.$collisionElement.length > 0 && (n.hasCollisionElement = !0, n.$collisionRepositioneElement = n.$collisionElement.find(".collision-reposition"), n.collisionTop = n.$collisionRepositioneElement.data("position-top"));
      n.hasCollisionElement ? n.$SiteContainer.find(".tabbar-container").length > 0 ? n.mouseScrollingWithCollisiontTabbar() : n.mouseScrollingWithCollisionElement() : n.mouseScrollingWithoutCollisionElement()
    };
    i.prototype.mouseScrollingWithCollisiontTabbar = function() {
      var t = this,
        c = n(".tabbar-container").offset().top,
        a = c + 600,
        i = 0,
        l = 0,
        u = !1,
        f = !1,
        e = !1,
        o = !1,
        s = n("#main-header").height(),
        r = n(".module-page-intro").height(),
        h = r - s;
      n(window).on("scroll.tabbar", function() {
        if (i = n(window).scrollTop(), t.$mainHeader.css("backgroundColor", "rgba(255,255,255," + i / (r - 200) + ")").css("borderBottom", "rgba(241,243,243," + i / r + ")"), i >= h && i < r ? t.$mainHeader.stop().css({
            top: "-" + (i - h) + "px"
          }) : i < h && t.$mainHeader.stop().css({
            top: "0px"
          }), i >= c) {
          if (f = !1, u == !1 && (t.$mainHeader.stop().velocity({
              top: "-" + s + "px"
            }, {
              duration: 0
            }), u = !0), i > a)
            if (i > l) {
              o = !1;
              var v = parseInt(t.$mainHeader.css("top"));
              e == !1 && (t.$mainHeader.stop().velocity({
                top: "-" + s + "px"
              }, {
                duration: 400
              }), t.$collisionRepositioneElement.stop().velocity({
                top: "0"
              }, {
                duration: 400
              }), e = !0)
            } else
              e = !1, o == !1 && (t.$mainHeader.stop().velocity({
                top: "0px"
              }, {
                duration: 400
              }), t.$collisionRepositioneElement.stop().velocity({
                top: t.collisionTop + "px"
              }, {
                duration: 400
              }), o = !0)
        } else
          u = !1, f == !1 && (t.$mainHeader.stop(), f = !0), t.$collisionRepositioneElement.css("top", 0);
        l = i
      })
    };
    i.prototype.mouseScrollingWithCollisionElement = function() {
      var t = this,
        r = 0,
        e = t.$collisionElement.offset().top,
        u = !1,
        f = !1,
        i = n("#main-header").height();
      n(window).on("scroll.headerscrolling", function() {
        var o = n(window).scrollTop();
        o >= e ? (t.$collisionRepositioneElement.addClass("fixed"), o > r ? (console.log(111), f = !1, o > 50 && u == !1 && (t.$mainHeader.stop().velocity({
          top: "-80px"
        }, {
          duration: 400
        }), t.$collisionRepositioneElement.stop().velocity({
          top: "0px"
        }, {
          duration: 400
        }), u = !0)) : (u = !1, f == !1 && (t.$mainHeader.css("backgroundColor", "#FFFFFF"), t.$mainHeader.stop().velocity({
          top: "0px"
        }, {
          duration: 400
        }), t.$collisionRepositioneElement.velocity({
          top: "80px"
        }, {
          duration: 400
        }), f = !0))) : o > r && (t.$collisionRepositioneElement.removeClass("fixed").css("top", 0), o < i && t.$mainHeader.stop().css({
          top: "-" + o + "px",
          backgroundColor: "rgba(255,255,255," + (o - i) / i + ")"
        }), o > i && r > i && t.$mainHeader.stop().css({
          top: -i,
          backgroundColor: "rgba(255,255,255,1)"
        }));
        r = o
      })
    };
    i.prototype.mouseScrollingWithoutCollisionElement = function() {
      var i = this,
        r = 0,
        u = !1,
        f = !1,
        t = n("#main-header").height();
      n(window).on("scroll.headerscrolling", function() {
        var e = n(window).scrollTop(),
          o;
        n(".GoStaion_AllYou").length > 0 && e > 1350 && e < 1800 && (o = (e - 1446) / 200, n(".GoStaion_AllYou").css("opacity", 1 - o), n(".GoStaion_AllYou2").css("opacity", o));
        e > r ? (e < t && i.$mainHeader.stop().css({
          top: "-" + e + "px",
          backgroundColor: "rgba(255,255,255," + (e - t) / t + ")"
        }), e > t && r > t && i.$mainHeader.stop().css({
          top: -t,
          backgroundColor: "rgba(255,255,255,1)"
        }), f = !1, e > 200 && u == !1 && (i.$mainHeader.stop().velocity({
          top: -t
        }, {
          duration: 400
        }), u = !0)) : (u = !1, e == 0 && i.$mainHeader.stop().css({
          backgroundColor: "rgba(255,255,255," + e / t + ")"
        }), f == !1 && (i.$mainHeader.stop().velocity({
          top: "0px"
        }, {
          duration: 400
        }), f = !0));
        r = e
      })
    }
  }(window.jQuery, window),
  function(n, t) {
    "use strict";

    function i() {
      setTimeout(function() {
        n("#main-footer").css("display", "block")
      }, 0)
    }
    t.gogoro = t.gogoro || {};
    t.gogoro.partials = t.gogoro.partials || {};
    t.gogoro.partials.Footer = i
  }(window.jQuery, window);
DropDown.prototype = {
    initEvents: function() {
      var n = this;
      n.dd.on("click", function(n) {
        $(this).toggleClass("active");
        n.stopPropagation()
      })
    }
  },
  function() {
    for (var n, u = function() {}, t = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], i = t.length, r = window.console = window.console || {}; i--;)
      n = t[i], r[n] || (r[n] = u)
  }(),
  function(n) {
    function e() {
      r && (i(e), n.fx.tick())
    }
    for (var r, t = 0, u = ["webkit", "moz"], i = window.requestAnimationFrame, f = window.cancelAnimationFrame; t < u.length && !i; t++)
      i = window[u[t] + "RequestAnimationFrame"], f = f || window[u[t] + "CancelAnimationFrame"] || window[u[t] + "CancelRequestAnimationFrame"];
    i ? (window.requestAnimationFrame = i, window.cancelAnimationFrame = f, n.fx.timer = function(t) {
      t() && n.timers.push(t) && !r && (r = !0, e())
    }, n.fx.stop = function() {
      r = !1
    }) : (window.requestAnimationFrame = function(n) {
      var i = (new Date).getTime(),
        r = Math.max(0, 16 - (i - t)),
        u = window.setTimeout(function() {
          n(i + r)
        }, r);
      return t = i + r, u
    }, window.cancelAnimationFrame = function(n) {
      clearTimeout(n)
    })
  }(jQuery);
Application = function(n, t) {
  "use strict";

  function i() {
    var n = this;
    FastClick.attach(document.body);
    i.swalConfig()
  }
  return t.gogoro = t.gogoro || {}, t.gogoro.App = i, i.swalConfig = function() {
    switch (gogoro.Locale.lang) {
      case "zh-tw":
        i.swalTitle = "Gogoro 提醒"
    }
  }, i.mediaQueries = {
    xs: {
      min: 0,
      max: 767
    },
    sm: {
      min: 768,
      max: 991
    },
    md: {
      min: 992,
      max: 1199
    },
    lg: {
      min: 1200
    }
  }, i.getBreakpoint = function() {
    var t = n(window).outerWidth();
    return t >= i.mediaQueries.xs.min && t <= i.mediaQueries.xs.max ? "xs" : t >= i.mediaQueries.sm.min && t <= i.mediaQueries.sm.max ? "sm" : t >= i.mediaQueries.md.min && t <= i.mediaQueries.md.max ? "md" : t >= i.mediaQueries.lg.min ? "lg" : void 0
  }, i.currentState = null, i.getState = function() {
    return n("html").hasClass("lt-ie10") || isMobile.any || gogoro.App.getBreakpoint() === "xs" || gogoro.App.getBreakpoint() === "sm" ? "fallback" : "standard"
  }, i.setState = function() {
    function t() {
      gogoro.App.currentState === "standard" ? n("body").removeClass("state-fallback").addClass("state-standard") : n("body").removeClass("state-standard").addClass("state-fallback")
    }
    gogoro.App.currentState = gogoro.App.getState();
    t();
    n(window).on("resize", function() {
      gogoro.App.currentState = gogoro.App.getState();
      t()
    })
  }, {
    init: function() {
      t.gogoro.app = new t.gogoro.App;
      gogoro.App.setState();
      this.header = new t.gogoro.partials.SlidePushMenu;
      this.slidePushMenu = new t.gogoro.partials.Header;
      this.footer = new t.gogoro.partials.Footer;
      (isMobile.phone || isMobile.tablet) && n("body").addClass("mobile")
    }
  }
}(window.jQuery, window);
Application.init();
GlobalForm = function() {
  "use strict";
  var n = [],
    t = function() {},
    i = function() {
      for (var t = 0; t < 50; t++) {
        var i = new Date(1950 + t, 1, 1),
          r = i.getFullYear(),
          u = {
            name: r
          };
        n.push(u)
      }
      return n
    },
    r = function(n) {
      console.log(n)
    };
  return {
    init: t,
    generateDOBYears: i,
    FACEBOOK_APP_ID: 0xe37fd17ed79c,
    FACEBOOK_SCOPE_PERMISSIONS: "public_profile,email,user_photos,user_education_history,user_hometown,user_birthday,user_photos,user_location"
  }
}(window.jQuery, window);
gogoro.form = GlobalForm || {};
gogoro.form.init();
$("#btn-close-ie-alert-box").on("click", function(n) {
  n.preventDefault();
  $("#ie-upgrade-box").animate({
    opacity: 0
  }, 500, function() {
    $(this).hide()
  })
});
$(function() {
    new DropDown($("#dropdown--i18n"))
  }),
  function(n, t) {
    "use strict";

    function i() {
      var n = this
    }
    t.gogoro = t.gogoro || {};
    t.gogoro.Loader = i;
    var r = n("#sprite-loading-wrap"),
      e = 30,
      u = 0,
      o = 30,
      s = 40,
      h = document.getElementById("sprite-image"),
      f = 0;
    i.setTitle = function(t) {
      if (t = typeof t != "undefined" ? t : "", t != "") {
        var i = n("#sprite-loading-wrap").find("#sprite-title");
        i.text(t);
        i.addClass("active")
      }
    };
    i.updateLoaderPosition = function() {
      var s = n("#sprite-loading-wrap").find(".sprite-image"),
        t = n("#sprite-loading-wrap").find(".sprite-assets-container"),
        i = n("#site-content"),
        u = i.height(),
        f = n(window).height(),
        e = n(window).scrollTop(),
        o = e + f / 2;
      r.css("height", u);
      t.css("top", o - 200)
    };
    i.fullscreenStart = function() {
      i.updateLoaderPosition();
      r.show();
      setTimeout(function() {
        r.velocity({
          opacity: 1
        }, 200)
      }, 20);
      TweenMax.ticker.fps(e);
      TweenMax.ticker.addEventListener("tick", i.loadingCycleAnimate)
    };
    i.fullscreenStop = function() {
      var t = n("#sprite-loading-wrap").find("#sprite-title");
      t.text("");
      t.removeClass("active");
      TweenLite.ticker.removeEventListener("tick", i.loadingCycleAnimate);
      r.velocity({
        opacity: 0
      }, {
        duration: 500,
        complete: function() {
          r.hide()
        }
      })
    };
    i.loadingCycleAnimate = function() {
      f = u * o;
      h.style.backgroundPosition = "-" + f + "px 0";
      u >= s ? u = 0 : u++
    }
  }(window.jQuery, window)