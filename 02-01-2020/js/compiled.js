!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , S = C.document
      , i = Object.getPrototypeOf
      , a = t.slice
      , m = t.concat
      , l = t.push
      , r = t.indexOf
      , n = {}
      , s = n.toString
      , g = n.hasOwnProperty
      , o = g.toString
      , u = o.call(Object)
      , v = {}
      , y = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , b = function(e) {
        return null != e && e === e.window
    }
      , c = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function w(e, t, n) {
        var i, r = (t = t || S).createElement("script");
        if (r.text = e,
        n)
            for (i in c)
                n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[s.call(e)] || "object" : typeof e
    }
    var d = "3.3.1"
      , T = function(e, t) {
        return new T.fn.init(e,t)
    }
      , h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function f(e) {
        var t = !!e && "length"in e && e.length
          , n = x(e);
        return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    T.fn = T.prototype = {
        jquery: d,
        constructor: T,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = T.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return T.each(this, e)
        },
        map: function(n) {
            return this.pushStack(T.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    },
    T.extend = T.fn.extend = function() {
        var e, t, n, i, r, s, o = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o,
        o = arguments[a] || {},
        a++),
        "object" == typeof o || y(o) || (o = {}),
        a === l && (o = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = o[t],
                    o !== (i = e[t]) && (u && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (s = r ? (r = !1,
                    n && Array.isArray(n) ? n : []) : n && T.isPlainObject(n) ? n : {},
                    o[t] = T.extend(u, s, i)) : void 0 !== i && (o[t] = i));
        return o
    }
    ,
    T.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== s.call(e)) && (!(t = i(e)) || "function" == typeof (n = g.call(t, "constructor") && t.constructor) && o.call(n) === u)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            w(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (f(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(h, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (f(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, s = e.length, o = !n; r < s; r++)
                !t(e[r], r) !== o && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, s = 0, o = [];
            if (f(e))
                for (i = e.length; s < i; s++)
                    null != (r = t(e[s], s, n)) && o.push(r);
            else
                for (s in e)
                    null != (r = t(e[s], s, n)) && o.push(r);
            return m.apply([], o)
        },
        guid: 1,
        support: v
    }),
    "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]),
    T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        var e, f, w, s, r, p, d, m, x, l, u, E, C, o, S, g, a, c, v, T = "sizzle" + 1 * new Date, y = n.document, _ = 0, i = 0, h = oe(), b = oe(), k = oe(), A = function(e, t) {
            return e === t && (u = !0),
            0
        }, O = {}.hasOwnProperty, t = [], M = t.pop, D = t.push, L = t.push, N = t.slice, P = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", F = "[\\x20\\t\\r\\n\\f]", j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", B = "\\[" + F + "*(" + j + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + F + "*\\]", z = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)", H = new RegExp(F + "+","g"), q = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$","g"), R = new RegExp("^" + F + "*," + F + "*"), $ = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"), W = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]","g"), V = new RegExp(z), X = new RegExp("^" + j + "$"), Y = {
            ID: new RegExp("^#(" + j + ")"),
            CLASS: new RegExp("^\\.(" + j + ")"),
            TAG: new RegExp("^(" + j + "|[*])"),
            ATTR: new RegExp("^" + B),
            PSEUDO: new RegExp("^" + z),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)","i"),
            bool: new RegExp("^(?:" + I + ")$","i"),
            needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)","i")
        }, G = /^(?:input|select|textarea|button)$/i, U = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/, J = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)","ig"), ee = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ie = function() {
            E()
        }, re = ye(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(t = N.call(y.childNodes), y.childNodes),
            t[y.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: t.length ? function(e, t) {
                    D.apply(e, N.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(e, t, n, i) {
            var r, s, o, a, l, u, c, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!i && ((t ? t.ownerDocument || t : y) !== C && E(t),
            t = t || C,
            S)) {
                if (11 !== h && (l = K.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(o = t.getElementById(r)))
                                return n;
                            if (o.id === r)
                                return n.push(o),
                                n
                        } else if (d && (o = d.getElementById(r)) && v(t, o) && o.id === r)
                            return n.push(o),
                            n
                    } else {
                        if (l[2])
                            return L.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((r = l[3]) && f.getElementsByClassName && t.getElementsByClassName)
                            return L.apply(n, t.getElementsByClassName(r)),
                            n
                    }
                if (f.qsa && !k[e + " "] && (!g || !g.test(e))) {
                    if (1 !== h)
                        d = t,
                        c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(te, ne) : t.setAttribute("id", a = T),
                        s = (u = p(e)).length; s--; )
                            u[s] = "#" + a + " " + ve(u[s]);
                        c = u.join(","),
                        d = Z.test(e) && me(t.parentNode) || t
                    }
                    if (c)
                        try {
                            return L.apply(n, d.querySelectorAll(c)),
                            n
                        } catch (e) {} finally {
                            a === T && t.removeAttribute("id")
                        }
                }
            }
            return m(e.replace(q, "$1"), t, n, i)
        }
        function oe() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > w.cacheLength && delete e[i.shift()],
                e[t + " "] = n
            }
        }
        function ae(e) {
            return e[T] = !0,
            e
        }
        function le(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ue(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                w.attrHandle[n[i]] = t
        }
        function ce(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function fe(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function pe(o) {
            return ae(function(s) {
                return s = +s,
                ae(function(e, t) {
                    for (var n, i = o([], e.length, s), r = i.length; r--; )
                        e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in f = se.support = {},
        r = se.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        E = se.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : y;
            return i !== C && 9 === i.nodeType && i.documentElement && (o = (C = i).documentElement,
            S = !r(C),
            y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)),
            f.attributes = le(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            f.getElementsByTagName = le(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            f.getElementsByClassName = Q.test(C.getElementsByClassName),
            f.getById = le(function(e) {
                return o.appendChild(e).id = T,
                !C.getElementsByName || !C.getElementsByName(T).length
            }),
            f.getById ? (w.filter.ID = function(e) {
                var t = e.replace(J, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && S) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (w.filter.ID = function(e) {
                var n = e.replace(J, ee);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && S) {
                    var n, i, r, s = t.getElementById(e);
                    if (s) {
                        if ((n = s.getAttributeNode("id")) && n.value === e)
                            return [s];
                        for (r = t.getElementsByName(e),
                        i = 0; s = r[i++]; )
                            if ((n = s.getAttributeNode("id")) && n.value === e)
                                return [s]
                    }
                    return []
                }
            }
            ),
            w.find.TAG = f.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, s = t.getElementsByTagName(e);
                if ("*" !== e)
                    return s;
                for (; n = s[r++]; )
                    1 === n.nodeType && i.push(n);
                return i
            }
            ,
            w.find.CLASS = f.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && S)
                    return t.getElementsByClassName(e)
            }
            ,
            a = [],
            g = [],
            (f.qsa = Q.test(C.querySelectorAll)) && (le(function(e) {
                o.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + F + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || g.push("\\[" + F + "*(?:value|" + I + ")"),
                e.querySelectorAll("[id~=" + T + "-]").length || g.push("~="),
                e.querySelectorAll(":checked").length || g.push(":checked"),
                e.querySelectorAll("a#" + T + "+*").length || g.push(".#.+[+~]")
            }),
            le(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && g.push("name" + F + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                o.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (f.matchesSelector = Q.test(c = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && le(function(e) {
                f.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                a.push("!=", z)
            }),
            g = g.length && new RegExp(g.join("|")),
            a = a.length && new RegExp(a.join("|")),
            t = Q.test(o.compareDocumentPosition),
            v = t || Q.test(o.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            A = t ? function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && v(y, e) ? -1 : t === C || t.ownerDocument === y && v(y, t) ? 1 : l ? P(l, e) - P(l, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var n, i = 0, r = e.parentNode, s = t.parentNode, o = [e], a = [t];
                if (!r || !s)
                    return e === C ? -1 : t === C ? 1 : r ? -1 : s ? 1 : l ? P(l, e) - P(l, t) : 0;
                if (r === s)
                    return ce(e, t);
                for (n = e; n = n.parentNode; )
                    o.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; o[i] === a[i]; )
                    i++;
                return i ? ce(o[i], a[i]) : o[i] === y ? -1 : a[i] === y ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C && E(e),
            t = t.replace(W, "='$1']"),
            f.matchesSelector && S && !k[t + " "] && (!a || !a.test(t)) && (!g || !g.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {}
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && E(e),
            v(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) !== C && E(e);
            var n = w.attrHandle[t.toLowerCase()]
              , i = n && O.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
            return void 0 !== i ? i : f.attributes || !S ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(te, ne)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (u = !f.detectDuplicates,
            l = !f.sortStable && e.slice(0),
            e.sort(A),
            u) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return l = null,
            e
        }
        ,
        s = se.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += s(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += s(t);
            return n
        }
        ,
        (w = se.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: Y,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(J, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(J, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = h[e + " "];
                    return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && h(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, i, r) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "",
                        "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(H, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(p, e, t, m, g) {
                    var v = "nth" !== p.slice(0, 3)
                      , y = "last" !== p.slice(-4)
                      , b = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var i, r, s, o, a, l, u = v !== y ? "nextSibling" : "previousSibling", c = e.parentNode, d = b && e.nodeName.toLowerCase(), h = !n && !b, f = !1;
                        if (c) {
                            if (v) {
                                for (; u; ) {
                                    for (o = e; o = o[u]; )
                                        if (b ? o.nodeName.toLowerCase() === d : 1 === o.nodeType)
                                            return !1;
                                    l = u = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? c.firstChild : c.lastChild],
                            y && h) {
                                for (f = (a = (i = (r = (s = (o = c)[T] || (o[T] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] || [])[0] === _ && i[1]) && i[2],
                                o = a && c.childNodes[a]; o = ++a && o && o[u] || (f = a = 0) || l.pop(); )
                                    if (1 === o.nodeType && ++f && o === e) {
                                        r[p] = [_, a, f];
                                        break
                                    }
                            } else if (h && (f = a = (i = (r = (s = (o = e)[T] || (o[T] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] || [])[0] === _ && i[1]),
                            !1 === f)
                                for (; (o = ++a && o && o[u] || (f = a = 0) || l.pop()) && ((b ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++f || (h && ((r = (s = o[T] || (o[T] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[p] = [_, f]),
                                o !== e)); )
                                    ;
                            return (f -= g) === m || f % m == 0 && 0 <= f / m
                        }
                    }
                },
                PSEUDO: function(e, s) {
                    var t, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return o[T] ? o(s) : 1 < o.length ? (t = [e, e, "", s],
                    w.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                        for (var n, i = o(e, s), r = i.length; r--; )
                            e[n = P(e, i[r])] = !(t[n] = i[r])
                    }) : function(e) {
                        return o(e, 0, t)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: ae(function(e) {
                    var i = []
                      , r = []
                      , a = d(e.replace(q, "$1"));
                    return a[T] ? ae(function(e, t, n, i) {
                        for (var r, s = a(e, null, i, []), o = e.length; o--; )
                            (r = s[o]) && (e[o] = !(t[o] = r))
                    }) : function(e, t, n) {
                        return i[0] = e,
                        a(i, null, n, r),
                        i[0] = null,
                        !r.pop()
                    }
                }),
                has: ae(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: ae(function(t) {
                    return t = t.replace(J, ee),
                    function(e) {
                        return -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
                    }
                }),
                lang: ae(function(n) {
                    return X.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(J, ee).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === o
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: fe(!1),
                disabled: fe(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return U.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: pe(function() {
                    return [0]
                }),
                last: pe(function(e, t) {
                    return [t - 1]
                }),
                eq: pe(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: pe(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: pe(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: pe(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }),
                gt: pe(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            w.pseudos[e] = he(e);
        function ge() {}
        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function ye(a, e, t) {
            var l = e.dir
              , u = e.next
              , c = u || l
              , d = t && "parentNode" === c
              , h = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l]; )
                    if (1 === e.nodeType || d)
                        return a(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var i, r, s, o = [_, h];
                if (n) {
                    for (; e = e[l]; )
                        if ((1 === e.nodeType || d) && a(e, t, n))
                            return !0
                } else
                    for (; e = e[l]; )
                        if (1 === e.nodeType || d)
                            if (r = (s = e[T] || (e[T] = {}))[e.uniqueID] || (s[e.uniqueID] = {}),
                            u && u === e.nodeName.toLowerCase())
                                e = e[l] || e;
                            else {
                                if ((i = r[c]) && i[0] === _ && i[1] === h)
                                    return o[2] = i[2];
                                if ((r[c] = o)[2] = a(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function be(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--; )
                    if (!r[i](e, t, n))
                        return !1;
                return !0
            }
            : r[0]
        }
        function we(e, t, n, i, r) {
            for (var s, o = [], a = 0, l = e.length, u = null != t; a < l; a++)
                (s = e[a]) && (n && !n(s, i, r) || (o.push(s),
                u && t.push(a)));
            return o
        }
        function xe(f, p, m, g, v, e) {
            return g && !g[T] && (g = xe(g)),
            v && !v[T] && (v = xe(v, e)),
            ae(function(e, t, n, i) {
                var r, s, o, a = [], l = [], u = t.length, c = e || function(e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++)
                        se(e, t[i], n);
                    return n
                }(p || "*", n.nodeType ? [n] : n, []), d = !f || !e && p ? c : we(c, a, f, n, i), h = m ? v || (e ? f : u || g) ? [] : t : d;
                if (m && m(d, h, n, i),
                g)
                    for (r = we(h, l),
                    g(r, [], n, i),
                    s = r.length; s--; )
                        (o = r[s]) && (h[l[s]] = !(d[l[s]] = o));
                if (e) {
                    if (v || f) {
                        if (v) {
                            for (r = [],
                            s = h.length; s--; )
                                (o = h[s]) && r.push(d[s] = o);
                            v(null, h = [], r, i)
                        }
                        for (s = h.length; s--; )
                            (o = h[s]) && -1 < (r = v ? P(e, o) : a[s]) && (e[r] = !(t[r] = o))
                    }
                } else
                    h = we(h === t ? h.splice(u, h.length) : h),
                    v ? v(null, t, h, i) : L.apply(t, h)
            })
        }
        function Ee(e) {
            for (var r, t, n, i = e.length, s = w.relative[e[0].type], o = s || w.relative[" "], a = s ? 1 : 0, l = ye(function(e) {
                return e === r
            }, o, !0), u = ye(function(e) {
                return -1 < P(r, e)
            }, o, !0), c = [function(e, t, n) {
                var i = !s && (n || t !== x) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                return r = null,
                i
            }
            ]; a < i; a++)
                if (t = w.relative[e[a].type])
                    c = [ye(be(c), t)];
                else {
                    if ((t = w.filter[e[a].type].apply(null, e[a].matches))[T]) {
                        for (n = ++a; n < i && !w.relative[e[n].type]; n++)
                            ;
                        return xe(1 < a && be(c), 1 < a && ve(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(q, "$1"), t, a < n && Ee(e.slice(a, n)), n < i && Ee(e = e.slice(n)), n < i && ve(e))
                    }
                    c.push(t)
                }
            return be(c)
        }
        return ge.prototype = w.filters = w.pseudos,
        w.setFilters = new ge,
        p = se.tokenize = function(e, t) {
            var n, i, r, s, o, a, l, u = b[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (o = e,
            a = [],
            l = w.preFilter; o; ) {
                for (s in n && !(i = R.exec(o)) || (i && (o = o.slice(i[0].length) || o),
                a.push(r = [])),
                n = !1,
                (i = $.exec(o)) && (n = i.shift(),
                r.push({
                    value: n,
                    type: i[0].replace(q, " ")
                }),
                o = o.slice(n.length)),
                w.filter)
                    !(i = Y[s].exec(o)) || l[s] && !(i = l[s](i)) || (n = i.shift(),
                    r.push({
                        value: n,
                        type: s,
                        matches: i
                    }),
                    o = o.slice(n.length));
                if (!n)
                    break
            }
            return t ? o.length : o ? se.error(e) : b(e, a).slice(0)
        }
        ,
        d = se.compile = function(e, t) {
            var n, g, v, y, b, i, r = [], s = [], o = k[e + " "];
            if (!o) {
                for (t || (t = p(e)),
                n = t.length; n--; )
                    (o = Ee(t[n]))[T] ? r.push(o) : s.push(o);
                (o = k(e, (g = s,
                y = 0 < (v = r).length,
                b = 0 < g.length,
                i = function(e, t, n, i, r) {
                    var s, o, a, l = 0, u = "0", c = e && [], d = [], h = x, f = e || b && w.find.TAG("*", r), p = _ += null == h ? 1 : Math.random() || .1, m = f.length;
                    for (r && (x = t === C || t || r); u !== m && null != (s = f[u]); u++) {
                        if (b && s) {
                            for (o = 0,
                            t || s.ownerDocument === C || (E(s),
                            n = !S); a = g[o++]; )
                                if (a(s, t || C, n)) {
                                    i.push(s);
                                    break
                                }
                            r && (_ = p)
                        }
                        y && ((s = !a && s) && l--,
                        e && c.push(s))
                    }
                    if (l += u,
                    y && u !== l) {
                        for (o = 0; a = v[o++]; )
                            a(c, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; u--; )
                                    c[u] || d[u] || (d[u] = M.call(i));
                            d = we(d)
                        }
                        L.apply(i, d),
                        r && !e && 0 < d.length && 1 < l + v.length && se.uniqueSort(i)
                    }
                    return r && (_ = p,
                    x = h),
                    c
                }
                ,
                y ? ae(i) : i))).selector = e
            }
            return o
        }
        ,
        m = se.select = function(e, t, n, i) {
            var r, s, o, a, l, u = "function" == typeof e && e, c = !i && p(e = u.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (o = s[0]).type && 9 === t.nodeType && S && w.relative[s[1].type]) {
                    if (!(t = (w.find.ID(o.matches[0].replace(J, ee), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(s.shift().value.length)
                }
                for (r = Y.needsContext.test(e) ? 0 : s.length; r-- && (o = s[r],
                !w.relative[a = o.type]); )
                    if ((l = w.find[a]) && (i = l(o.matches[0].replace(J, ee), Z.test(s[0].type) && me(t.parentNode) || t))) {
                        if (s.splice(r, 1),
                        !(e = i.length && ve(s)))
                            return L.apply(n, i),
                            n;
                        break
                    }
            }
            return (u || d(e, c))(i, t, !S, n, !t || Z.test(e) && me(t.parentNode) || t),
            n
        }
        ,
        f.sortStable = T.split("").sort(A).join("") === T,
        f.detectDuplicates = !!u,
        E(),
        f.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        le(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        f.attributes && le(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(I, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        se
    }(C);
    T.find = p,
    T.expr = p.selectors,
    T.expr[":"] = T.expr.pseudos,
    T.uniqueSort = T.unique = p.uniqueSort,
    T.text = p.getText,
    T.isXMLDoc = p.isXML,
    T.contains = p.contains,
    T.escapeSelector = p.escape;
    var E = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && T(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , _ = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = T.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function M(e, n, i) {
        return y(n) ? T.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? T.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? T.grep(e, function(e) {
            return -1 < r.call(n, e) !== i
        }) : T.filter(n, e, i)
    }
    T.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    T.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(T(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (T.contains(r[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                T.find(e, r[t], n);
            return 1 < i ? T.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(M(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(M(this, e || [], !0))
        },
        is: function(e) {
            return !!M(this, "string" == typeof e && k.test(e) ? T(e) : e || [], !1).length
        }
    });
    var D, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function(e, t, n) {
        var i, r;
        if (!e)
            return this;
        if (n = n || D,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !i[1] && t)
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof T ? t[0] : t,
            T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : S, !0)),
            O.test(i[1]) && T.isPlainObject(t))
                for (i in t)
                    y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (r = S.getElementById(i[2])) && (this[0] = r,
        this.length = 1),
        this
    }
    ).prototype = T.fn,
    D = T(S);
    var N = /^(?:parents|prev(?:Until|All))/
      , P = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function I(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    T.fn.extend({
        has: function(e) {
            var t = T(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (T.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, s = [], o = "string" != typeof e && T(e);
            if (!k.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                            s.push(n);
                            break
                        }
            return this.pushStack(1 < s.length ? T.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(T(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    T.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return E(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return E(e, "parentNode", n)
        },
        next: function(e) {
            return I(e, "nextSibling")
        },
        prev: function(e) {
            return I(e, "previousSibling")
        },
        nextAll: function(e) {
            return E(e, "nextSibling")
        },
        prevAll: function(e) {
            return E(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return E(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return E(e, "previousSibling", n)
        },
        siblings: function(e) {
            return _((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _(e.firstChild)
        },
        contents: function(e) {
            return A(e, "iframe") ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            T.merge([], e.childNodes))
        }
    }, function(i, r) {
        T.fn[i] = function(e, t) {
            var n = T.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e),
            t && "string" == typeof t && (n = T.filter(t, n)),
            1 < this.length && (P[i] || T.uniqueSort(n),
            N.test(i) && n.reverse()),
            this.pushStack(n)
        }
    });
    var F = /[^\x20\t\r\n\f]+/g;
    function j(e) {
        return e
    }
    function B(e) {
        throw e
    }
    function z(e, t, n, i) {
        var r;
        try {
            e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    T.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i,
        n = {},
        T.each(e.match(F) || [], function(e, t) {
            n[t] = !0
        }),
        n) : T.extend({}, i);
        var r, t, s, o, a = [], l = [], u = -1, c = function() {
            for (o = o || i.once,
            s = r = !0; l.length; u = -1)
                for (t = l.shift(); ++u < a.length; )
                    !1 === a[u].apply(t[0], t[1]) && i.stopOnFalse && (u = a.length,
                    t = !1);
            i.memory || (t = !1),
            r = !1,
            o && (a = t ? [] : "")
        }, d = {
            add: function() {
                return a && (t && !r && (u = a.length - 1,
                l.push(t)),
                function n(e) {
                    T.each(e, function(e, t) {
                        y(t) ? i.unique && d.has(t) || a.push(t) : t && t.length && "string" !== x(t) && n(t)
                    })
                }(arguments),
                t && !r && c()),
                this
            },
            remove: function() {
                return T.each(arguments, function(e, t) {
                    for (var n; -1 < (n = T.inArray(t, a, n)); )
                        a.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < T.inArray(e, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return o = l = [],
                a = t = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return o = l = [],
                t || r || (a = t = ""),
                this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, t) {
                return o || (t = [e, (t = t || []).slice ? t.slice() : t],
                l.push(t),
                r || c()),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!s
            }
        };
        return d
    }
    ,
    T.extend({
        Deferred: function(e) {
            var s = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , o = {
                state: function() {
                    return r
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return o.then(null, e)
                },
                pipe: function() {
                    var r = arguments;
                    return T.Deferred(function(i) {
                        T.each(s, function(e, t) {
                            var n = y(r[t[4]]) && r[t[4]];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        r = null
                    }).promise()
                },
                then: function(t, n, i) {
                    var l = 0;
                    function u(r, s, o, a) {
                        return function() {
                            var n = this
                              , i = arguments
                              , e = function() {
                                var e, t;
                                if (!(r < l)) {
                                    if ((e = o.apply(n, i)) === s.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    y(t) ? a ? t.call(e, u(l, s, j, a), u(l, s, B, a)) : (l++,
                                    t.call(e, u(l, s, j, a), u(l, s, B, a), u(l, s, j, s.notifyWith))) : (o !== j && (n = void 0,
                                    i = [e]),
                                    (a || s.resolveWith)(n, i))
                                }
                            }
                              , t = a ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= r + 1 && (o !== B && (n = void 0,
                                    i = [e]),
                                    s.rejectWith(n, i))
                                }
                            }
                            ;
                            r ? t() : (T.Deferred.getStackHook && (t.stackTrace = T.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return T.Deferred(function(e) {
                        s[0][3].add(u(0, e, y(i) ? i : j, e.notifyWith)),
                        s[1][3].add(u(0, e, y(t) ? t : j)),
                        s[2][3].add(u(0, e, y(n) ? n : B))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? T.extend(e, o) : o
                }
            }
              , a = {};
            return T.each(s, function(e, t) {
                var n = t[2]
                  , i = t[5];
                o[t[1]] = n.add,
                i && n.add(function() {
                    r = i
                }, s[3 - e][2].disable, s[3 - e][3].disable, s[0][2].lock, s[0][3].lock),
                n.add(t[3].fire),
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                }
                ,
                a[t[0] + "With"] = n.fireWith
            }),
            o.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , i = Array(t)
              , r = a.call(arguments)
              , s = T.Deferred()
              , o = function(t) {
                return function(e) {
                    i[t] = this,
                    r[t] = 1 < arguments.length ? a.call(arguments) : e,
                    --n || s.resolveWith(i, r)
                }
            };
            if (n <= 1 && (z(e, s.done(o(t)).resolve, s.reject, !n),
            "pending" === s.state() || y(r[t] && r[t].then)))
                return s.then();
            for (; t--; )
                z(r[t], o(t), s.reject);
            return s.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && H.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    T.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var q = T.Deferred();
    function R() {
        S.removeEventListener("DOMContentLoaded", R),
        C.removeEventListener("load", R),
        T.ready()
    }
    T.fn.ready = function(e) {
        return q.then(e).catch(function(e) {
            T.readyException(e)
        }),
        this
    }
    ,
    T.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || q.resolveWith(S, [T])
        }
    }),
    T.ready.then = q.then,
    "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? C.setTimeout(T.ready) : (S.addEventListener("DOMContentLoaded", R),
    C.addEventListener("load", R));
    var $ = function(e, t, n, i, r, s, o) {
        var a = 0
          , l = e.length
          , u = null == n;
        if ("object" === x(n))
            for (a in r = !0,
            n)
                $(e, t, a, n[a], !0, s, o);
        else if (void 0 !== i && (r = !0,
        y(i) || (o = !0),
        u && (t = o ? (t.call(e, i),
        null) : (u = t,
        function(e, t, n) {
            return u.call(T(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : s
    }
      , W = /^-ms-/
      , V = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase()
    }
    function Y(e) {
        return e.replace(W, "ms-").replace(V, X)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function U() {
        this.expando = T.expando + U.uid++
    }
    U.uid = 1,
    U.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[Y(t)] = n;
            else
                for (i in t)
                    r[Y(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t))in i ? [t] : t.match(F) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                (void 0 === t || T.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t)
        }
    };
    var Q = new U
      , K = new U
      , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , J = /[A-Z]/g;
    function ee(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                K.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    T.extend({
        hasData: function(e) {
            return K.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }),
    T.fn.extend({
        data: function(n, e) {
            var t, i, r, s = this[0], o = s && s.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    K.set(this, n)
                }) : $(this, function(e) {
                    var t;
                    if (s && void 0 === e)
                        return void 0 !== (t = K.get(s, n)) ? t : void 0 !== (t = ee(s, n)) ? t : void 0;
                    this.each(function() {
                        K.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = K.get(s),
            1 === s.nodeType && !Q.get(s, "hasDataAttrs"))) {
                for (t = o.length; t--; )
                    o[t] && 0 === (i = o[t].name).indexOf("data-") && (i = Y(i.slice(5)),
                    ee(s, i, r[i]));
                Q.set(s, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }),
    T.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = Q.get(e, t),
                n && (!i || Array.isArray(n) ? i = Q.access(e, t, T.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = T.queue(e, t)
              , i = n.length
              , r = n.shift()
              , s = T._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete s.stop,
            r.call(e, function() {
                T.dequeue(e, t)
            }, s)),
            !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: T.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    T.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = T.queue(this, t, n);
                T._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                T.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = T.Deferred(), s = this, o = this.length, a = function() {
                --i || r.resolveWith(s, [s])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; o--; )
                (n = Q.get(s[o], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$","i")
      , ie = ["Top", "Right", "Bottom", "Left"]
      , re = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && T.contains(e.ownerDocument, e) && "none" === T.css(e, "display")
    }
      , se = function(e, t, n, i) {
        var r, s, o = {};
        for (s in t)
            o[s] = e.style[s],
            e.style[s] = t[s];
        for (s in r = n.apply(e, i || []),
        t)
            e.style[s] = o[s];
        return r
    };
    function oe(e, t, n, i) {
        var r, s, o = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return T.css(e, t, "")
        }
        , l = a(), u = n && n[3] || (T.cssNumber[t] ? "" : "px"), c = (T.cssNumber[t] || "px" !== u && +l) && ne.exec(T.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2,
            u = u || c[3],
            c = +l || 1; o--; )
                T.style(e, t, c + u),
                (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0),
                c /= s;
            c *= 2,
            T.style(e, t, c + u),
            n = n || []
        }
        return n && (c = +c || +l || 0,
        r = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = u,
        i.start = c,
        i.end = r)),
        r
    }
    var ae = {};
    function le(e, t) {
        for (var n, i, r, s, o, a, l, u = [], c = 0, d = e.length; c < d; c++)
            (i = e[c]).style && (n = i.style.display,
            t ? ("none" === n && (u[c] = Q.get(i, "display") || null,
            u[c] || (i.style.display = "")),
            "" === i.style.display && re(i) && (u[c] = (l = o = s = void 0,
            o = (r = i).ownerDocument,
            a = r.nodeName,
            (l = ae[a]) || (s = o.body.appendChild(o.createElement(a)),
            l = T.css(s, "display"),
            s.parentNode.removeChild(s),
            "none" === l && (l = "block"),
            ae[a] = l)))) : "none" !== n && (u[c] = "none",
            Q.set(i, "display", n)));
        for (c = 0; c < d; c++)
            null != u[c] && (e[c].style.display = u[c]);
        return e
    }
    T.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                re(this) ? T(this).show() : T(this).hide()
            })
        }
    });
    var ue = /^(?:checkbox|radio)$/i
      , ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , de = /^$|^module$|\/(?:java|ecma)script/i
      , he = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function fe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? T.merge([e], n) : n
    }
    function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    he.optgroup = he.option,
    he.tbody = he.tfoot = he.colgroup = he.caption = he.thead,
    he.th = he.td;
    var me, ge, ve = /<|&#?\w+;/;
    function ye(e, t, n, i, r) {
        for (var s, o, a, l, u, c, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++)
            if ((s = e[f]) || 0 === s)
                if ("object" === x(s))
                    T.merge(h, s.nodeType ? [s] : s);
                else if (ve.test(s)) {
                    for (o = o || d.appendChild(t.createElement("div")),
                    a = (ce.exec(s) || ["", ""])[1].toLowerCase(),
                    l = he[a] || he._default,
                    o.innerHTML = l[1] + T.htmlPrefilter(s) + l[2],
                    c = l[0]; c--; )
                        o = o.lastChild;
                    T.merge(h, o.childNodes),
                    (o = d.firstChild).textContent = ""
                } else
                    h.push(t.createTextNode(s));
        for (d.textContent = "",
        f = 0; s = h[f++]; )
            if (i && -1 < T.inArray(s, i))
                r && r.push(s);
            else if (u = T.contains(s.ownerDocument, s),
            o = fe(d.appendChild(s), "script"),
            u && pe(o),
            n)
                for (c = 0; s = o[c++]; )
                    de.test(s.type || "") && n.push(s);
        return d
    }
    me = S.createDocumentFragment().appendChild(S.createElement("div")),
    (ge = S.createElement("input")).setAttribute("type", "radio"),
    ge.setAttribute("checked", "checked"),
    ge.setAttribute("name", "t"),
    me.appendChild(ge),
    v.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked,
    me.innerHTML = "<textarea>x</textarea>",
    v.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var be = S.documentElement
      , we = /^key/
      , xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ee = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Se() {
        return !1
    }
    function Te() {
        try {
            return S.activeElement
        } catch (e) {}
    }
    function _e(e, t, n, i, r, s) {
        var o, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                _e(e, a, n, i, t[a], s);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = Se;
        else if (!r)
            return e;
        return 1 === s && (o = r,
        (r = function(e) {
            return T().off(e),
            o.apply(this, arguments)
        }
        ).guid = o.guid || (o.guid = T.guid++)),
        e.each(function() {
            T.event.add(this, t, r, i, n)
        })
    }
    T.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var s, o, a, l, u, c, d, h, f, p, m, g = Q.get(t);
            if (g)
                for (n.handler && (n = (s = n).handler,
                r = s.selector),
                r && T.find.matchesSelector(be, r),
                n.guid || (n.guid = T.guid++),
                (l = g.events) || (l = g.events = {}),
                (o = g.handle) || (o = g.handle = function(e) {
                    return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                u = (e = (e || "").match(F) || [""]).length; u--; )
                    f = m = (a = Ee.exec(e[u]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    f && (d = T.event.special[f] || {},
                    f = (r ? d.delegateType : d.bindType) || f,
                    d = T.event.special[f] || {},
                    c = T.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && T.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, s),
                    (h = l[f]) || ((h = l[f] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(t, i, p, o) || t.addEventListener && t.addEventListener(f, o)),
                    d.add && (d.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                    T.event.global[f] = !0)
        },
        remove: function(e, t, n, i, r) {
            var s, o, a, l, u, c, d, h, f, p, m, g = Q.hasData(e) && Q.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(F) || [""]).length; u--; )
                    if (f = m = (a = Ee.exec(t[u]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    f) {
                        for (d = T.event.special[f] || {},
                        h = l[f = (i ? d.delegateType : d.bindType) || f] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        o = s = h.length; s--; )
                            c = h[s],
                            !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(s, 1),
                            c.selector && h.delegateCount--,
                            d.remove && d.remove.call(e, c));
                        o && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || T.removeEvent(e, f, g.handle),
                        delete l[f])
                    } else
                        for (f in l)
                            T.event.remove(e, f + t[u], n, i, !0);
                T.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, s, o, a = T.event.fix(e), l = new Array(arguments.length), u = (Q.get(this, "events") || {})[a.type] || [], c = T.event.special[a.type] || {};
            for (l[0] = a,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (a.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (o = T.event.handlers.call(this, a, u),
                t = 0; (r = o[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = r.elem,
                    n = 0; (s = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s,
                        a.data = s.data,
                        void 0 !== (i = ((T.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                        a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, s, o, a = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (s = [],
                        o = {},
                        n = 0; n < l; n++)
                            void 0 === o[r = (i = t[n]).selector + " "] && (o[r] = i.needsContext ? -1 < T(r, this).index(u) : T.find(r, this, null, [u]).length),
                            o[r] && s.push(i);
                        s.length && a.push({
                            elem: u,
                            handlers: s
                        })
                    }
            return u = this,
            l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(T.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[T.expando] ? e : new T.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Te() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Te() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && A(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return A(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    T.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    T.Event = function(e, t) {
        if (!(this instanceof T.Event))
            return new T.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Se,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && T.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[T.expando] = !0
    }
    ,
    T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    T.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, T.event.addProp),
    T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        T.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || T.contains(this, n)) || (e.type = i.origType,
                t = i.handler.apply(this, arguments),
                e.type = r),
                t
            }
        }
    }),
    T.fn.extend({
        on: function(e, t, n, i) {
            return _e(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return _e(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = Se),
                this.each(function() {
                    T.event.remove(this, e, n, t)
                });
            for (r in e)
                this.off(r, t, e[r]);
            return this
        }
    });
    var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ae = /<script|<style|<link/i
      , Oe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function De(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
    }
    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Ne(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Pe(e, t) {
        var n, i, r, s, o, a, l, u;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (s = Q.access(e),
            o = Q.set(t, s),
            u = s.events))
                for (r in delete o.handle,
                o.events = {},
                u)
                    for (n = 0,
                    i = u[r].length; n < i; n++)
                        T.event.add(t, r, u[r][n]);
            K.hasData(e) && (a = K.access(e),
            l = T.extend({}, a),
            K.set(t, l))
        }
    }
    function Ie(n, i, r, s) {
        i = m.apply([], i);
        var e, t, o, a, l, u, c = 0, d = n.length, h = d - 1, f = i[0], p = y(f);
        if (p || 1 < d && "string" == typeof f && !v.checkClone && Oe.test(f))
            return n.each(function(e) {
                var t = n.eq(e);
                p && (i[0] = f.call(this, e, t.html())),
                Ie(t, i, r, s)
            });
        if (d && (t = (e = ye(i, n[0].ownerDocument, !1, n, s)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || s)) {
            for (a = (o = T.map(fe(e, "script"), Le)).length; c < d; c++)
                l = e,
                c !== h && (l = T.clone(l, !0, !0),
                a && T.merge(o, fe(l, "script"))),
                r.call(n[c], l, c);
            if (a)
                for (u = o[o.length - 1].ownerDocument,
                T.map(o, Ne),
                c = 0; c < a; c++)
                    l = o[c],
                    de.test(l.type || "") && !Q.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(l.src) : w(l.textContent.replace(Me, ""), u, l))
        }
        return n
    }
    function Fe(e, t, n) {
        for (var i, r = t ? T.filter(t, e) : e, s = 0; null != (i = r[s]); s++)
            n || 1 !== i.nodeType || T.cleanData(fe(i)),
            i.parentNode && (n && T.contains(i.ownerDocument, i) && pe(fe(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    T.extend({
        htmlPrefilter: function(e) {
            return e.replace(ke, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, s, o, a, l, u, c = e.cloneNode(!0), d = T.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                for (o = fe(c),
                i = 0,
                r = (s = fe(e)).length; i < r; i++)
                    a = s[i],
                    l = o[i],
                    void 0,
                    "input" === (u = l.nodeName.toLowerCase()) && ue.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (s = s || fe(e),
                    o = o || fe(c),
                    i = 0,
                    r = s.length; i < r; i++)
                        Pe(s[i], o[i]);
                else
                    Pe(e, c);
            return 0 < (o = fe(c, "script")).length && pe(o, !d && fe(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, i, r = T.event.special, s = 0; void 0 !== (n = e[s]); s++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }),
    T.fn.extend({
        detach: function(e) {
            return Fe(this, e, !0)
        },
        remove: function(e) {
            return Fe(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? T.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (T.cleanData(fe(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return T.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !he[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = T.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (T.cleanData(fe(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                T.inArray(this, n) < 0 && (T.cleanData(fe(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, o) {
        T.fn[e] = function(e) {
            for (var t, n = [], i = T(e), r = i.length - 1, s = 0; s <= r; s++)
                t = s === r ? this : this.clone(!0),
                T(i[s])[o](t),
                l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var je = new RegExp("^(" + te + ")(?!px)[a-z%]+$","i")
      , Be = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , ze = new RegExp(ie.join("|"),"i");
    function He(e, t, n) {
        var i, r, s, o, a = e.style;
        return (n = n || Be(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || T.contains(e.ownerDocument, e) || (o = T.style(e, t)),
        !v.pixelBoxStyles() && je.test(o) && ze.test(t) && (i = a.width,
        r = a.minWidth,
        s = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = o,
        o = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = s)),
        void 0 !== o ? o + "" : o
    }
    function qe(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                be.appendChild(a).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                o = 12 === t(e.marginLeft),
                l.style.right = "60%",
                s = 36 === t(e.right),
                i = 36 === t(e.width),
                l.style.position = "absolute",
                r = 36 === l.offsetWidth || "absolute",
                be.removeChild(a),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, i, r, s, o, a = S.createElement("div"), l = S.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        v.clearCloneStyle = "content-box" === l.style.backgroundClip,
        T.extend(v, {
            boxSizingReliable: function() {
                return e(),
                i
            },
            pixelBoxStyles: function() {
                return e(),
                s
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                o
            },
            scrollboxSize: function() {
                return e(),
                r
            }
        }))
    }();
    var Re = /^(none|table(?!-c[ea]).+)/
      , $e = /^--/
      , We = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Xe = ["Webkit", "Moz", "ms"]
      , Ye = S.createElement("div").style;
    function Ge(e) {
        var t = T.cssProps[e];
        return t || (t = T.cssProps[e] = function(e) {
            if (e in Ye)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--; )
                if ((e = Xe[n] + t)in Ye)
                    return e
        }(e) || e),
        t
    }
    function Ue(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function Qe(e, t, n, i, r, s) {
        var o = "width" === t ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; o < 4; o += 2)
            "margin" === n && (l += T.css(e, n + ie[o], !0, r)),
            i ? ("content" === n && (l -= T.css(e, "padding" + ie[o], !0, r)),
            "margin" !== n && (l -= T.css(e, "border" + ie[o] + "Width", !0, r))) : (l += T.css(e, "padding" + ie[o], !0, r),
            "padding" !== n ? l += T.css(e, "border" + ie[o] + "Width", !0, r) : a += T.css(e, "border" + ie[o] + "Width", !0, r));
        return !i && 0 <= s && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - .5))),
        l
    }
    function Ke(e, t, n) {
        var i = Be(e)
          , r = He(e, t, i)
          , s = "border-box" === T.css(e, "boxSizing", !1, i)
          , o = s;
        if (je.test(r)) {
            if (!n)
                return r;
            r = "auto"
        }
        return o = o && (v.boxSizingReliable() || r === e.style[t]),
        ("auto" === r || !parseFloat(r) && "inline" === T.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)],
        o = !0),
        (r = parseFloat(r) || 0) + Qe(e, t, n || (s ? "border" : "content"), o, i, r) + "px"
    }
    function Ze(e, t, n, i, r) {
        return new Ze.prototype.init(e,t,n,i,r)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = He(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
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
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, s, o, a = Y(t), l = $e.test(t), u = e.style;
                if (l || (t = Ge(a)),
                o = T.cssHooks[t] || T.cssHooks[a],
                void 0 === n)
                    return o && "get"in o && void 0 !== (r = o.get(e, !1, i)) ? r : u[t];
                "string" === (s = typeof n) && (r = ne.exec(n)) && r[1] && (n = oe(e, t, r),
                s = "number"),
                null != n && n == n && ("number" === s && (n += r && r[3] || (T.cssNumber[a] ? "" : "px")),
                v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                o && "set"in o && void 0 === (n = o.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, s, o, a = Y(t);
            return $e.test(t) || (t = Ge(a)),
            (o = T.cssHooks[t] || T.cssHooks[a]) && "get"in o && (r = o.get(e, !0, n)),
            void 0 === r && (r = He(e, t, i)),
            "normal" === r && t in Ve && (r = Ve[t]),
            "" === n || n ? (s = parseFloat(r),
            !0 === n || isFinite(s) ? s || 0 : r) : r
        }
    }),
    T.each(["height", "width"], function(e, a) {
        T.cssHooks[a] = {
            get: function(e, t, n) {
                if (t)
                    return !Re.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, a, n) : se(e, We, function() {
                        return Ke(e, a, n)
                    })
            },
            set: function(e, t, n) {
                var i, r = Be(e), s = "border-box" === T.css(e, "boxSizing", !1, r), o = n && Qe(e, a, n, s, r);
                return s && v.scrollboxSize() === r.position && (o -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - Qe(e, a, "border", !1, r) - .5)),
                o && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t,
                t = T.css(e, a)),
                Ue(0, t, o)
            }
        }
    }),
    T.cssHooks.marginLeft = qe(v.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, s) {
        T.cssHooks[r + s] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[r + ie[t] + s] = i[t] || i[t - 2] || i[0];
                return n
            }
        },
        "margin" !== r && (T.cssHooks[r + s].set = Ue)
    }),
    T.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var i, r, s = {}, o = 0;
                if (Array.isArray(t)) {
                    for (i = Be(e),
                    r = t.length; o < r; o++)
                        s[t[o]] = T.css(e, t[o], !1, i);
                    return s
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((T.Tween = Ze).prototype = {
        constructor: Ze,
        init: function(e, t, n, i, r, s) {
            this.elem = e,
            this.prop = n,
            this.easing = r || T.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = s || (T.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ze.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ze.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ze.propHooks[this.prop];
            return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ze.propHooks._default.set(this),
            this
        }
    }).init.prototype = Ze.prototype,
    (Ze.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ze.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    T.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    T.fx = Ze.prototype.init,
    T.fx.step = {};
    var Je, et, tt, nt, it = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;
    function st() {
        et && (!1 === S.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, T.fx.interval),
        T.fx.tick())
    }
    function ot() {
        return C.setTimeout(function() {
            Je = void 0
        }),
        Je = Date.now()
    }
    function at(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function lt(e, t, n) {
        for (var i, r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (i = r[s].call(n, t, e))
                return i
    }
    function ut(s, e, t) {
        var n, o, i = 0, r = ut.prefilters.length, a = T.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var e = Je || ot(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++)
                u.tweens[i].run(n);
            return a.notifyWith(s, [u, n, t]),
            n < 1 && r ? t : (r || a.notifyWith(s, [u, 1, 0]),
            a.resolveWith(s, [u]),
            !1)
        }, u = a.promise({
            elem: s,
            props: T.extend({}, e),
            opts: T.extend(!0, {
                specialEasing: {},
                easing: T.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Je || ot(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = T.Tween(s, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; t < n; t++)
                    u.tweens[t].run(1);
                return e ? (a.notifyWith(s, [u, 1, 0]),
                a.resolveWith(s, [u, e])) : a.rejectWith(s, [u, e]),
                this
            }
        }), c = u.props;
        for (!function(e, t) {
            var n, i, r, s, o;
            for (n in e)
                if (r = t[i = Y(n)],
                s = e[n],
                Array.isArray(s) && (r = s[1],
                s = e[n] = s[0]),
                n !== i && (e[i] = s,
                delete e[n]),
                (o = T.cssHooks[i]) && "expand"in o)
                    for (n in s = o.expand(s),
                    delete e[i],
                    s)
                        n in e || (e[n] = s[n],
                        t[n] = r);
                else
                    t[i] = r
        }(c, u.opts.specialEasing); i < r; i++)
            if (n = ut.prefilters[i].call(u, s, c, u.opts))
                return y(n.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
                n;
        return T.map(c, lt, u),
        y(u.opts.start) && u.opts.start.call(s, u),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
        T.fx.timer(T.extend(l, {
            elem: s,
            anim: u,
            queue: u.opts.queue
        })),
        u
    }
    T.Animation = T.extend(ut, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return oe(n.elem, e, ne.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, i = 0, r = (e = y(e) ? (t = e,
            ["*"]) : e.match(F)).length; i < r; i++)
                n = e[i],
                ut.tweeners[n] = ut.tweeners[n] || [],
                ut.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, s, o, a, l, u, c, d = "width"in t || "height"in t, h = this, f = {}, p = e.style, m = e.nodeType && re(e), g = Q.get(e, "fxshow");
            for (i in n.queue || (null == (o = T._queueHooks(e, "fx")).unqueued && (o.unqueued = 0,
            a = o.empty.fire,
            o.empty.fire = function() {
                o.unqueued || a()
            }
            ),
            o.unqueued++,
            h.always(function() {
                h.always(function() {
                    o.unqueued--,
                    T.queue(e, "fx").length || o.empty.fire()
                })
            })),
            t)
                if (r = t[i],
                it.test(r)) {
                    if (delete t[i],
                    s = s || "toggle" === r,
                    r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i])
                            continue;
                        m = !0
                    }
                    f[i] = g && g[i] || T.style(e, i)
                }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
                for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (u = g && g.display) && (u = Q.get(e, "display")),
                "none" === (c = T.css(e, "display")) && (u ? c = u : (le([e], !0),
                u = e.style.display || u,
                c = T.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(e, "float") && (l || (h.done(function() {
                    p.display = u
                }),
                null == u && (c = p.display,
                u = "none" === c ? "" : c)),
                p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                h.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })),
                l = !1,
                f)
                    l || (g ? "hidden"in g && (m = g.hidden) : g = Q.access(e, "fxshow", {
                        display: u
                    }),
                    s && (g.hidden = !m),
                    m && le([e], !0),
                    h.done(function() {
                        for (i in m || le([e]),
                        Q.remove(e, "fxshow"),
                        f)
                            T.style(e, i, f[i])
                    })),
                    l = lt(m ? g[i] : 0, i, h),
                    i in g || (g[i] = l.start,
                    m && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
        }
    }),
    T.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? T.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            y(i.old) && i.old.call(this),
            i.queue && T.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    T.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var r = T.isEmptyObject(t)
              , s = T.speed(e, n, i)
              , o = function() {
                var e = ut(this, T.extend({}, t), s);
                (r || Q.get(this, "finish")) && e.stop(!0)
            };
            return o.finish = o,
            r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(r, e, s) {
            var o = function(e) {
                var t = e.stop;
                delete e.stop,
                t(s)
            };
            return "string" != typeof r && (s = e,
            e = r,
            r = void 0),
            e && !1 !== r && this.queue(r || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != r && r + "queueHooks"
                  , n = T.timers
                  , i = Q.get(this);
                if (t)
                    i[t] && i[t].stop && o(i[t]);
                else
                    for (t in i)
                        i[t] && i[t].stop && rt.test(t) && o(i[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(s),
                    e = !1,
                    n.splice(t, 1));
                !e && s || T.dequeue(this, r)
            })
        },
        finish: function(o) {
            return !1 !== o && (o = o || "fx"),
            this.each(function() {
                var e, t = Q.get(this), n = t[o + "queue"], i = t[o + "queueHooks"], r = T.timers, s = n ? n.length : 0;
                for (t.finish = !0,
                T.queue(this, o, []),
                i && i.stop && i.stop.call(this, !0),
                e = r.length; e--; )
                    r[e].elem === this && r[e].queue === o && (r[e].anim.stop(!0),
                    r.splice(e, 1));
                for (e = 0; e < s; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    T.each(["toggle", "show", "hide"], function(e, i) {
        var r = T.fn[i];
        T.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(at(i, !0), e, t, n)
        }
    }),
    T.each({
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        T.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }),
    T.timers = [],
    T.fx.tick = function() {
        var e, t = 0, n = T.timers;
        for (Je = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || T.fx.stop(),
        Je = void 0
    }
    ,
    T.fx.timer = function(e) {
        T.timers.push(e),
        T.fx.start()
    }
    ,
    T.fx.interval = 13,
    T.fx.start = function() {
        et || (et = !0,
        st())
    }
    ,
    T.fx.stop = function() {
        et = null
    }
    ,
    T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    T.fn.delay = function(i, e) {
        return i = T.fx && T.fx.speeds[i] || i,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, i);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    tt = S.createElement("input"),
    nt = S.createElement("select").appendChild(S.createElement("option")),
    tt.type = "checkbox",
    v.checkOn = "" !== tt.value,
    v.optSelected = nt.selected,
    (tt = S.createElement("input")).value = "t",
    tt.type = "radio",
    v.radioValue = "t" === tt.value;
    var ct, dt = T.expr.attrHandle;
    T.fn.extend({
        attr: function(e, t) {
            return $(this, T.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                T.removeAttr(this, e)
            })
        }
    }),
    T.extend({
        attr: function(e, t, n) {
            var i, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
                return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === s && T.isXMLDoc(e) || (r = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n ? null === n ? void T.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = T.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(F);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    e.removeAttribute(n)
        }
    }),
    ct = {
        set: function(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = dt[t] || T.find.attr;
        dt[t] = function(e, t, n) {
            var i, r, s = t.toLowerCase();
            return n || (r = dt[s],
            dt[s] = i,
            i = null != o(e, t, n) ? s : null,
            dt[s] = r),
            i
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i
      , ft = /^(?:a|area)$/i;
    function pt(e) {
        return (e.match(F) || []).join(" ")
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function gt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(F) || []
    }
    T.fn.extend({
        prop: function(e, t) {
            return $(this, T.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[T.propFix[e] || e]
            })
        }
    }),
    T.extend({
        prop: function(e, t, n) {
            var i, r, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
                return 1 === s && T.isXMLDoc(e) || (t = T.propFix[t] || t,
                r = T.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = T.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    v.optSelected || (T.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }),
    T.fn.extend({
        addClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if (y(t))
                return this.each(function(e) {
                    T(this).addClass(t.call(this, e, mt(this)))
                });
            if ((e = gt(t)).length)
                for (; n = this[l++]; )
                    if (r = mt(n),
                    i = 1 === n.nodeType && " " + pt(r) + " ") {
                        for (o = 0; s = e[o++]; )
                            i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        r !== (a = pt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if (y(t))
                return this.each(function(e) {
                    T(this).removeClass(t.call(this, e, mt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = gt(t)).length)
                for (; n = this[l++]; )
                    if (r = mt(n),
                    i = 1 === n.nodeType && " " + pt(r) + " ") {
                        for (o = 0; s = e[o++]; )
                            for (; -1 < i.indexOf(" " + s + " "); )
                                i = i.replace(" " + s + " ", " ");
                        r !== (a = pt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var s = typeof r
              , o = "string" === s || Array.isArray(r);
            return "boolean" == typeof t && o ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function(e) {
                T(this).toggleClass(r.call(this, e, mt(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (o)
                    for (t = 0,
                    n = T(this),
                    i = gt(r); e = i[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== r && "boolean" !== s || ((e = mt(this)) && Q.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && -1 < (" " + pt(mt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var vt = /\r/g;
    T.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = y(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, T(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = T.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set"in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) && "get"in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(vt, "") : null == e ? "" : e : void 0
        }
    }),
    T.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : pt(T.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options, s = e.selectedIndex, o = "select-one" === e.type, a = o ? null : [], l = o ? s + 1 : r.length;
                    for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                        if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = T(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, s = T.makeArray(t), o = r.length; o--; )
                        ((i = r[o]).selected = -1 < T.inArray(T.valHooks.option.get(i), s)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    s
                }
            }
        }
    }),
    T.each(["radio", "checkbox"], function() {
        T.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < T.inArray(T(e).val(), t)
            }
        },
        v.checkOn || (T.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    v.focusin = "onfocusin"in C;
    var yt = /^(?:focusinfocus|focusoutblur)$/
      , bt = function(e) {
        e.stopPropagation()
    };
    T.extend(T.event, {
        trigger: function(e, t, n, i) {
            var r, s, o, a, l, u, c, d, h = [n || S], f = g.call(e, "type") ? e.type : e, p = g.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = d = o = n = n || S,
            3 !== n.nodeType && 8 !== n.nodeType && !yt.test(f + T.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(),
            p.sort()),
            l = f.indexOf(":") < 0 && "on" + f,
            (e = e[T.expando] ? e : new T.Event(f,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
            e.namespace = p.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : T.makeArray(t, [e]),
            c = T.event.special[f] || {},
            i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !b(n)) {
                    for (a = c.delegateType || f,
                    yt.test(a + f) || (s = s.parentNode); s; s = s.parentNode)
                        h.push(s),
                        o = s;
                    o === (n.ownerDocument || S) && h.push(o.defaultView || o.parentWindow || C)
                }
                for (r = 0; (s = h[r++]) && !e.isPropagationStopped(); )
                    d = s,
                    e.type = 1 < r ? a : c.bindType || f,
                    (u = (Q.get(s, "events") || {})[e.type] && Q.get(s, "handle")) && u.apply(s, t),
                    (u = l && s[l]) && u.apply && G(s) && (e.result = u.apply(s, t),
                    !1 === e.result && e.preventDefault());
                return e.type = f,
                i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), t) || !G(n) || l && y(n[f]) && !b(n) && ((o = n[l]) && (n[l] = null),
                T.event.triggered = f,
                e.isPropagationStopped() && d.addEventListener(f, bt),
                n[f](),
                e.isPropagationStopped() && d.removeEventListener(f, bt),
                T.event.triggered = void 0,
                o && (n[l] = o)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var i = T.extend(new T.Event, n, {
                type: e,
                isSimulated: !0
            });
            T.event.trigger(i, null, t)
        }
    }),
    T.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                T.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return T.event.trigger(e, t, n, !0)
        }
    }),
    v.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var r = function(e) {
            T.event.simulate(i, e.target, T.event.fix(e))
        };
        T.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, i);
                t || e.addEventListener(n, r, !0),
                Q.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, i) - 1;
                t ? Q.access(e, i, t) : (e.removeEventListener(n, r, !0),
                Q.remove(e, i))
            }
        }
    });
    var wt = C.location
      , xt = Date.now()
      , Et = /\?/;
    T.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e),
        t
    }
    ;
    var Ct = /\[\]$/
      , St = /\r?\n/g
      , Tt = /^(?:submit|button|image|reset|file)$/i
      , _t = /^(?:input|select|textarea|keygen)/i;
    function kt(n, e, i, r) {
        var t;
        if (Array.isArray(e))
            T.each(e, function(e, t) {
                i || Ct.test(n) ? r(n, t) : kt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
            });
        else if (i || "object" !== x(e))
            r(n, e);
        else
            for (t in e)
                kt(n + "[" + t + "]", e[t], i, r)
    }
    T.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = y(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !T.isPlainObject(e))
            T.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                kt(n, e[n], t, r);
        return i.join("&")
    }
    ,
    T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !T(this).is(":disabled") && _t.test(this.nodeName) && !Tt.test(e) && (this.checked || !ue.test(e))
            }).map(function(e, t) {
                var n = T(this).val();
                return null == n ? null : Array.isArray(n) ? T.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(St, "\r\n")
                }
            }).get()
        }
    });
    var At = /%20/g
      , Ot = /#.*$/
      , Mt = /([?&])_=[^&]*/
      , Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Lt = /^(?:GET|HEAD)$/
      , Nt = /^\/\//
      , Pt = {}
      , It = {}
      , Ft = "*/".concat("*")
      , jt = S.createElement("a");
    function Bt(s) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, i = 0, r = e.toLowerCase().match(F) || [];
            if (y(t))
                for (; n = r[i++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (s[n] = s[n] || []).unshift(t)) : (s[n] = s[n] || []).push(t)
        }
    }
    function zt(t, r, s, o) {
        var a = {}
          , l = t === It;
        function u(e) {
            var i;
            return a[e] = !0,
            T.each(t[e] || [], function(e, t) {
                var n = t(r, s, o);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n),
                u(n),
                !1)
            }),
            i
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }
    function Ht(e, t) {
        var n, i, r = T.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && T.extend(!0, e, i),
        e
    }
    jt.href = wt.href,
    T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ft,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ht(Ht(e, T.ajaxSettings), t) : Ht(T.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(Pt),
        ajaxTransport: Bt(It),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, d, h, n, f, i, p, m, r, s, g = T.ajaxSetup({}, t), v = g.context || g, y = g.context && (v.nodeType || v.jquery) ? T(v) : T.event, b = T.Deferred(), w = T.Callbacks("once memory"), x = g.statusCode || {}, o = {}, a = {}, l = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (p) {
                        if (!n)
                            for (n = {}; t = Dt.exec(h); )
                                n[t[1].toLowerCase()] = t[2];
                        t = n[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return p ? h : null
                },
                setRequestHeader: function(e, t) {
                    return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e,
                    o[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == p && (g.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (p)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || l;
                    return c && c.abort(t),
                    u(0, t),
                    this
                }
            };
            if (b.promise(E),
            g.url = ((e || g.url || wt.href) + "").replace(Nt, wt.protocol + "//"),
            g.type = t.method || t.type || g.method || g.type,
            g.dataTypes = (g.dataType || "*").toLowerCase().match(F) || [""],
            null == g.crossDomain) {
                i = S.createElement("a");
                try {
                    i.href = g.url,
                    i.href = i.href,
                    g.crossDomain = jt.protocol + "//" + jt.host != i.protocol + "//" + i.host
                } catch (e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = T.param(g.data, g.traditional)),
            zt(Pt, g, t, E),
            p)
                return E;
            for (r in (m = T.event && g.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
            g.type = g.type.toUpperCase(),
            g.hasContent = !Lt.test(g.type),
            d = g.url.replace(Ot, ""),
            g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(At, "+")) : (s = g.url.slice(d.length),
            g.data && (g.processData || "string" == typeof g.data) && (d += (Et.test(d) ? "&" : "?") + g.data,
            delete g.data),
            !1 === g.cache && (d = d.replace(Mt, "$1"),
            s = (Et.test(d) ? "&" : "?") + "_=" + xt++ + s),
            g.url = d + s),
            g.ifModified && (T.lastModified[d] && E.setRequestHeader("If-Modified-Since", T.lastModified[d]),
            T.etag[d] && E.setRequestHeader("If-None-Match", T.etag[d])),
            (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && E.setRequestHeader("Content-Type", g.contentType),
            E.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : g.accepts["*"]),
            g.headers)
                E.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, E, g) || p))
                return E.abort();
            if (l = "abort",
            w.add(g.complete),
            E.done(g.success),
            E.fail(g.error),
            c = zt(It, g, t, E)) {
                if (E.readyState = 1,
                m && y.trigger("ajaxSend", [E, g]),
                p)
                    return E;
                g.async && 0 < g.timeout && (f = C.setTimeout(function() {
                    E.abort("timeout")
                }, g.timeout));
                try {
                    p = !1,
                    c.send(o, u)
                } catch (e) {
                    if (p)
                        throw e;
                    u(-1, e)
                }
            } else
                u(-1, "No Transport");
            function u(e, t, n, i) {
                var r, s, o, a, l, u = t;
                p || (p = !0,
                f && C.clearTimeout(f),
                c = void 0,
                h = i || "",
                E.readyState = 0 < e ? 4 : 0,
                r = 200 <= e && e < 300 || 304 === e,
                n && (a = function(e, t, n) {
                    for (var i, r, s, o, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0]in n)
                        s = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            o || (o = r)
                        }
                        s = s || o
                    }
                    if (s)
                        return s !== l[0] && l.unshift(s),
                        n[s]
                }(g, E, n)),
                a = function(e, t, n, i) {
                    var r, s, o, a, l, u = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (o in e.converters)
                            u[o.toLowerCase()] = e.converters[o];
                    for (s = c.shift(); s; )
                        if (e.responseFields[s] && (n[e.responseFields[s]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = s,
                        s = c.shift())
                            if ("*" === s)
                                s = l;
                            else if ("*" !== l && l !== s) {
                                if (!(o = u[l + " " + s] || u["* " + s]))
                                    for (r in u)
                                        if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                            !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0],
                                            c.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== o)
                                    if (o && e.throws)
                                        t = o(t);
                                    else
                                        try {
                                            t = o(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: o ? e : "No conversion from " + l + " to " + s
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, a, E, r),
                r ? (g.ifModified && ((l = E.getResponseHeader("Last-Modified")) && (T.lastModified[d] = l),
                (l = E.getResponseHeader("etag")) && (T.etag[d] = l)),
                204 === e || "HEAD" === g.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state,
                s = a.data,
                r = !(o = a.error))) : (o = u,
                !e && u || (u = "error",
                e < 0 && (e = 0))),
                E.status = e,
                E.statusText = (t || u) + "",
                r ? b.resolveWith(v, [s, u, E]) : b.rejectWith(v, [E, u, o]),
                E.statusCode(x),
                x = void 0,
                m && y.trigger(r ? "ajaxSuccess" : "ajaxError", [E, g, r ? s : o]),
                w.fireWith(v, [E, u]),
                m && (y.trigger("ajaxComplete", [E, g]),
                --T.active || T.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return T.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return T.get(e, void 0, t, "script")
        }
    }),
    T.each(["get", "post"], function(e, r) {
        T[r] = function(e, t, n, i) {
            return y(t) && (i = i || n,
            n = t,
            t = void 0),
            T.ajax(T.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, T.isPlainObject(e) && e))
        }
    }),
    T._evalUrl = function(e) {
        return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    T.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])),
            t = T(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) {
                T(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = T(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = y(t);
            return this.each(function(e) {
                T(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                T(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    T.expr.pseudos.hidden = function(e) {
        return !T.expr.pseudos.visible(e)
    }
    ,
    T.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    T.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var qt = {
        0: 200,
        1223: 204
    }
      , Rt = T.ajaxSettings.xhr();
    v.cors = !!Rt && "withCredentials"in Rt,
    v.ajax = Rt = !!Rt,
    T.ajaxTransport(function(r) {
        var s, o;
        if (v.cors || Rt && !r.crossDomain)
            return {
                send: function(e, t) {
                    var n, i = r.xhr();
                    if (i.open(r.type, r.url, r.async, r.username, r.password),
                    r.xhrFields)
                        for (n in r.xhrFields)
                            i[n] = r.xhrFields[n];
                    for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType),
                    r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        i.setRequestHeader(n, e[n]);
                    s = function(e) {
                        return function() {
                            s && (s = o = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null,
                            "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(qt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }
                    ,
                    i.onload = s(),
                    o = i.onerror = i.ontimeout = s("error"),
                    void 0 !== i.onabort ? i.onabort = o : i.onreadystatechange = function() {
                        4 === i.readyState && C.setTimeout(function() {
                            s && o()
                        })
                    }
                    ,
                    s = s("abort");
                    try {
                        i.send(r.hasContent && r.data || null)
                    } catch (e) {
                        if (s)
                            throw e
                    }
                },
                abort: function() {
                    s && s()
                }
            }
    }),
    T.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return T.globalEval(e),
                e
            }
        }
    }),
    T.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    T.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain)
            return {
                send: function(e, t) {
                    i = T("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", r = function(e) {
                        i.remove(),
                        r = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    S.head.appendChild(i[0])
                },
                abort: function() {
                    r && r()
                }
            }
    });
    var $t, Wt = [], Vt = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Wt.pop() || T.expando + "_" + xt++;
            return this[e] = !0,
            e
        }
    }),
    T.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, s, o = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (o || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            o ? e[o] = e[o].replace(Vt, "$1" + i) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            e.converters["script json"] = function() {
                return s || T.error(i + " was not called"),
                s[0]
            }
            ,
            e.dataTypes[0] = "json",
            r = C[i],
            C[i] = function() {
                s = arguments
            }
            ,
            n.always(function() {
                void 0 === r ? T(C).removeProp(i) : C[i] = r,
                e[i] && (e.jsonpCallback = t.jsonpCallback,
                Wt.push(i)),
                s && y(r) && r(s[0]),
                s = r = void 0
            }),
            "script"
    }),
    v.createHTMLDocument = (($t = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === $t.childNodes.length),
    T.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (v.createHTMLDocument ? ((i = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href,
        t.head.appendChild(i)) : t = S),
        s = !n && [],
        (r = O.exec(e)) ? [t.createElement(r[1])] : (r = ye([e], t, s),
        s && s.length && T(s).remove(),
        T.merge([], r.childNodes)));
        var i, r, s
    }
    ,
    T.fn.load = function(e, t, n) {
        var i, r, s, o = this, a = e.indexOf(" ");
        return -1 < a && (i = pt(e.slice(a)),
        e = e.slice(0, a)),
        y(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        0 < o.length && T.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments,
            o.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            o.each(function() {
                n.apply(this, s || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        T.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    T.expr.pseudos.animated = function(t) {
        return T.grep(T.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    T.offset = {
        setOffset: function(e, t, n) {
            var i, r, s, o, a, l, u = T.css(e, "position"), c = T(e), d = {};
            "static" === u && (e.style.position = "relative"),
            a = c.offset(),
            s = T.css(e, "top"),
            l = T.css(e, "left"),
            r = ("absolute" === u || "fixed" === u) && -1 < (s + l).indexOf("auto") ? (o = (i = c.position()).top,
            i.left) : (o = parseFloat(s) || 0,
            parseFloat(l) || 0),
            y(t) && (t = t.call(e, n, T.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + o),
            null != t.left && (d.left = t.left - a.left + r),
            "using"in t ? t.using.call(e, d) : c.css(d)
        }
    },
    T.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    T.offset.setOffset(this, t, e)
                });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(),
            n = i.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === T.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0),
                    r.left += T.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - T.css(i, "marginTop", !0),
                    left: t.left - r.left - T.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === T.css(e, "position"); )
                    e = e.offsetParent;
                return e || be
            })
        }
    }),
    T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var s = "pageYOffset" === r;
        T.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var i;
                if (b(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n)
                    return i ? i[r] : e[t];
                i ? i.scrollTo(s ? i.pageXOffset : n, s ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    T.each(["top", "left"], function(e, n) {
        T.cssHooks[n] = qe(v.pixelPosition, function(e, t) {
            if (t)
                return t = He(e, n),
                je.test(t) ? T(e).position()[n] + "px" : t
        })
    }),
    T.each({
        Height: "height",
        Width: "width"
    }, function(o, a) {
        T.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function(i, s) {
            T.fn[s] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e)
                  , r = i || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var i;
                    return b(e) ? 0 === s.indexOf("outer") ? e["inner" + o] : e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? T.css(e, t, r) : T.style(e, t, n, r)
                }, a, n ? e : void 0, n)
            }
        })
    }),
    T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        T.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    T.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    T.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    T.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        y(e))
            return i = a.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, i.concat(a.call(arguments)))
            }
            ).guid = e.guid = e.guid || T.guid++,
            r
    }
    ,
    T.holdReady = function(e) {
        e ? T.readyWait++ : T.ready(!0)
    }
    ,
    T.isArray = Array.isArray,
    T.parseJSON = JSON.parse,
    T.nodeName = A,
    T.isFunction = y,
    T.isWindow = b,
    T.camelCase = Y,
    T.type = x,
    T.now = Date.now,
    T.isNumeric = function(e) {
        var t = T.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var Xt = C.jQuery
      , Yt = C.$;
    return T.noConflict = function(e) {
        return C.$ === T && (C.$ = Yt),
        e && C.jQuery === T && (C.jQuery = Xt),
        T
    }
    ,
    e || (C.jQuery = C.$ = T),
    T
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";
    for (var e = "undefined" != typeof window && "undefined" != typeof document, t = ["Edge", "Trident", "Firefox"], n = 0, i = 0; i < t.length; i += 1)
        if (e && 0 <= navigator.userAgent.indexOf(t[i])) {
            n = 1;
            break
        }
    var o = e && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, n))
        }
    }
    ;
    function a(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function w(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function f(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function p(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var t = w(e)
          , n = t.overflow
          , i = t.overflowX
          , r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : p(f(e))
    }
    var r = e && !(!window.MSInputMethodContext || !document.documentMode)
      , s = e && /MSIE 10/.test(navigator.userAgent);
    function m(e) {
        return 11 === e ? r : 10 === e ? s : r || s
    }
    function N(e) {
        if (!e)
            return document.documentElement;
        for (var t = m(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === w(n, "position") ? N(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function c(e) {
        return null !== e.parentNode ? c(e.parentNode) : e
    }
    function g(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? e : t
          , r = n ? t : e
          , s = document.createRange();
        s.setStart(i, 0),
        s.setEnd(r, 0);
        var o, a, l = s.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r))
            return "BODY" === (a = (o = l).nodeName) || "HTML" !== a && N(o.firstElementChild) !== o ? N(l) : l;
        var u = c(e);
        return u.host ? g(u.host, t) : g(e, c(t).host)
    }
    function v(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
          , n = e.nodeName;
        if ("BODY" !== n && "HTML" !== n)
            return e[t];
        var i = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || i)[t]
    }
    function d(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }
    function l(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], m(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }
    function y(e) {
        var t = e.body
          , n = e.documentElement
          , i = m(10) && getComputedStyle(n);
        return {
            height: l("Height", t, n, i),
            width: l("Width", t, n, i)
        }
    }
    var u = function() {
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && i(e.prototype, t),
            n && i(e, n),
            e
        }
    }()
      , x = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
      , P = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ;
    function E(e) {
        return P({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function I(e) {
        var t = {};
        try {
            if (m(10)) {
                t = e.getBoundingClientRect();
                var n = v(e, "top")
                  , i = v(e, "left");
                t.top += n,
                t.left += i,
                t.bottom += n,
                t.right += i
            } else
                t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }
          , s = "HTML" === e.nodeName ? y(e.ownerDocument) : {}
          , o = s.width || e.clientWidth || r.right - r.left
          , a = s.height || e.clientHeight || r.bottom - r.top
          , l = e.offsetWidth - o
          , u = e.offsetHeight - a;
        if (l || u) {
            var c = w(e);
            l -= d(c, "x"),
            u -= d(c, "y"),
            r.width -= l,
            r.height -= u
        }
        return E(r)
    }
    function b(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , i = m(10)
          , r = "HTML" === t.nodeName
          , s = I(e)
          , o = I(t)
          , a = p(e)
          , l = w(t)
          , u = parseFloat(l.borderTopWidth, 10)
          , c = parseFloat(l.borderLeftWidth, 10);
        n && r && (o.top = Math.max(o.top, 0),
        o.left = Math.max(o.left, 0));
        var d = E({
            top: s.top - o.top - u,
            left: s.left - o.left - c,
            width: s.width,
            height: s.height
        });
        if (d.marginTop = 0,
        d.marginLeft = 0,
        !i && r) {
            var h = parseFloat(l.marginTop, 10)
              , f = parseFloat(l.marginLeft, 10);
            d.top -= u - h,
            d.bottom -= u - h,
            d.left -= c - f,
            d.right -= c - f,
            d.marginTop = h,
            d.marginLeft = f
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (d = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
              , i = v(t, "top")
              , r = v(t, "left")
              , s = n ? -1 : 1;
            return e.top += i * s,
            e.bottom += i * s,
            e.left += r * s,
            e.right += r * s,
            e
        }(d, t)),
        d
    }
    function C(e) {
        if (!e || !e.parentElement || m())
            return document.documentElement;
        for (var t = e.parentElement; t && "none" === w(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function h(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , s = {
            top: 0,
            left: 0
        }
          , o = r ? C(e) : g(e, t);
        if ("viewport" === i)
            s = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                  , n = e.ownerDocument.documentElement
                  , i = b(e, n)
                  , r = Math.max(n.clientWidth, window.innerWidth || 0)
                  , s = Math.max(n.clientHeight, window.innerHeight || 0)
                  , o = t ? 0 : v(n)
                  , a = t ? 0 : v(n, "left");
                return E({
                    top: o - i.top + i.marginTop,
                    left: a - i.left + i.marginLeft,
                    width: r,
                    height: s
                })
            }(o, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = p(f(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
            var l = b(a, o, r);
            if ("HTML" !== a.nodeName || function e(t) {
                var n = t.nodeName;
                if ("BODY" === n || "HTML" === n)
                    return !1;
                if ("fixed" === w(t, "position"))
                    return !0;
                var i = f(t);
                return !!i && e(i)
            }(o))
                s = l;
            else {
                var u = y(e.ownerDocument)
                  , c = u.height
                  , d = u.width;
                s.top += l.top - l.marginTop,
                s.bottom = c + l.top,
                s.left += l.left - l.marginLeft,
                s.right = d + l.left
            }
        }
        var h = "number" == typeof (n = n || 0);
        return s.left += h ? n : n.left || 0,
        s.top += h ? n : n.top || 0,
        s.right -= h ? n : n.right || 0,
        s.bottom -= h ? n : n.bottom || 0,
        s
    }
    function S(e, t, i, n, r) {
        var s = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var o = h(i, n, s, r)
          , a = {
            top: {
                width: o.width,
                height: t.top - o.top
            },
            right: {
                width: o.right - t.right,
                height: o.height
            },
            bottom: {
                width: o.width,
                height: o.bottom - t.bottom
            },
            left: {
                width: t.left - o.left,
                height: o.height
            }
        }
          , l = Object.keys(a).map(function(e) {
            return P({
                key: e
            }, a[e], {
                area: (t = a[e],
                t.width * t.height)
            });
            var t
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , u = l.filter(function(e) {
            var t = e.width
              , n = e.height;
            return t >= i.clientWidth && n >= i.clientHeight
        })
          , c = 0 < u.length ? u[0].key : l[0].key
          , d = e.split("-")[1];
        return c + (d ? "-" + d : "")
    }
    function T(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return b(n, i ? C(t) : g(t, n), i)
    }
    function _(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e)
          , n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
          , i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    function k(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function A(e, t, n) {
        n = n.split("-")[0];
        var i = _(e)
          , r = {
            width: i.width,
            height: i.height
        }
          , s = -1 !== ["right", "left"].indexOf(n)
          , o = s ? "top" : "left"
          , a = s ? "left" : "top"
          , l = s ? "height" : "width"
          , u = s ? "width" : "height";
        return r[o] = t[o] + t[l] / 2 - i[l] / 2,
        r[a] = n === a ? t[a] - i[u] : t[k(a)],
        r
    }
    function F(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function O(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e[t] === n
                });
            var i = F(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && a(t) && (n.offsets.popper = E(n.offsets.popper),
            n.offsets.reference = E(n.offsets.reference),
            n = t(n, e))
        }),
        n
    }
    function M(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }
    function j(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i]
              , s = r ? "" + r + n : e;
            if (void 0 !== document.body.style[s])
                return s
        }
        return null
    }
    function D(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function L(e, t, n, i) {
        n.updateBound = i,
        D(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = p(e);
        return function e(t, n, i, r) {
            var s = "BODY" === t.nodeName
              , o = s ? t.ownerDocument.defaultView : t;
            o.addEventListener(n, i, {
                passive: !0
            }),
            s || e(p(o.parentNode), n, i, r),
            r.push(o)
        }(r, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = r,
        n.eventsEnabled = !0,
        n
    }
    function B() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (e = this.reference,
        t = this.state,
        D(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t))
    }
    function z(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function H(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && z(i[e]) && (t = "px"),
            n.style[e] = i[e] + t
        })
    }
    var q = e && /Firefox/i.test(navigator.userAgent);
    function R(e, t, n) {
        var i = F(e, function(e) {
            return e.name === t
        })
          , r = !!i && e.some(function(e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!r) {
            var s = "`" + t + "`"
              , o = "`" + n + "`";
            console.warn(o + " modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!")
        }
        return r
    }
    var $ = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , W = $.slice(3);
    function V(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = W.indexOf(e)
          , i = W.slice(n + 1).concat(W.slice(0, n));
        return t ? i.reverse() : i
    }
    var X = "flip"
      , Y = "clockwise"
      , G = "counterclockwise";
    function U(e, r, s, t) {
        var o = [0, 0]
          , a = -1 !== ["right", "left"].indexOf(t)
          , n = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , i = n.indexOf(F(n, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
          , u = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (u = u.map(function(e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width"
              , i = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                i = !0,
                e) : i ? (e[e.length - 1] += t,
                i = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                      , s = +r[1]
                      , o = r[2];
                    if (!s)
                        return e;
                    if (0 !== o.indexOf("%"))
                        return "vh" !== o && "vw" !== o ? s : ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * s;
                    var a = void 0;
                    switch (o) {
                    case "%p":
                        a = n;
                        break;
                    case "%":
                    case "%r":
                    default:
                        a = i
                    }
                    return E(a)[t] / 100 * s
                }(e, n, r, s)
            })
        })).forEach(function(n, i) {
            n.forEach(function(e, t) {
                z(e) && (o[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }),
        o
    }
    var Q = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets
                          , s = r.reference
                          , o = r.popper
                          , a = -1 !== ["bottom", "top"].indexOf(n)
                          , l = a ? "left" : "top"
                          , u = a ? "width" : "height"
                          , c = {
                            start: x({}, l, s[l]),
                            end: x({}, l, s[l] + s[u] - o[u])
                        };
                        e.offsets.popper = P({}, o, c[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.offset
                      , i = e.placement
                      , r = e.offsets
                      , s = r.popper
                      , o = r.reference
                      , a = i.split("-")[0]
                      , l = void 0;
                    return l = z(+n) ? [+n, 0] : U(n, s, o, a),
                    "left" === a ? (s.top += l[0],
                    s.left -= l[1]) : "right" === a ? (s.top += l[0],
                    s.left += l[1]) : "top" === a ? (s.left += l[0],
                    s.top -= l[1]) : "bottom" === a && (s.left += l[0],
                    s.top += l[1]),
                    e.popper = s,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, i) {
                    var t = i.boundariesElement || N(e.instance.popper);
                    e.instance.reference === t && (t = N(t));
                    var n = j("transform")
                      , r = e.instance.popper.style
                      , s = r.top
                      , o = r.left
                      , a = r[n];
                    r.top = "",
                    r.left = "",
                    r[n] = "";
                    var l = h(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                    r.top = s,
                    r.left = o,
                    r[n] = a,
                    i.boundaries = l;
                    var u = i.priority
                      , c = e.offsets.popper
                      , d = {
                        primary: function(e) {
                            var t = c[e];
                            return c[e] < l[e] && !i.escapeWithReference && (t = Math.max(c[e], l[e])),
                            x({}, e, t)
                        },
                        secondary: function(e) {
                            var t = "right" === e ? "left" : "top"
                              , n = c[t];
                            return c[e] > l[e] && !i.escapeWithReference && (n = Math.min(c[t], l[e] - ("right" === e ? c.width : c.height))),
                            x({}, t, n)
                        }
                    };
                    return u.forEach(function(e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        c = P({}, c, d[t](e))
                    }),
                    e.offsets.popper = c,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , i = t.reference
                      , r = e.placement.split("-")[0]
                      , s = Math.floor
                      , o = -1 !== ["top", "bottom"].indexOf(r)
                      , a = o ? "right" : "bottom"
                      , l = o ? "left" : "top"
                      , u = o ? "width" : "height";
                    return n[a] < s(i[l]) && (e.offsets.popper[l] = s(i[l]) - n[u]),
                    n[l] > s(i[a]) && (e.offsets.popper[l] = s(i[a])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var n;
                    if (!R(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i)))
                            return e
                    } else if (!e.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var r = e.placement.split("-")[0]
                      , s = e.offsets
                      , o = s.popper
                      , a = s.reference
                      , l = -1 !== ["left", "right"].indexOf(r)
                      , u = l ? "height" : "width"
                      , c = l ? "Top" : "Left"
                      , d = c.toLowerCase()
                      , h = l ? "left" : "top"
                      , f = l ? "bottom" : "right"
                      , p = _(i)[u];
                    a[f] - p < o[d] && (e.offsets.popper[d] -= o[d] - (a[f] - p)),
                    a[d] + p > o[f] && (e.offsets.popper[d] += a[d] + p - o[f]),
                    e.offsets.popper = E(e.offsets.popper);
                    var m = a[d] + a[u] / 2 - p / 2
                      , g = w(e.instance.popper)
                      , v = parseFloat(g["margin" + c], 10)
                      , y = parseFloat(g["border" + c + "Width"], 10)
                      , b = m - e.offsets.popper[d] - v - y;
                    return b = Math.max(Math.min(o[u] - p, b), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (x(n = {}, d, Math.round(b)),
                    x(n, h, ""),
                    n),
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(p, m) {
                    if (M(p.instance.modifiers, "inner"))
                        return p;
                    if (p.flipped && p.placement === p.originalPlacement)
                        return p;
                    var g = h(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed)
                      , v = p.placement.split("-")[0]
                      , y = k(v)
                      , b = p.placement.split("-")[1] || ""
                      , w = [];
                    switch (m.behavior) {
                    case X:
                        w = [v, y];
                        break;
                    case Y:
                        w = V(v);
                        break;
                    case G:
                        w = V(v, !0);
                        break;
                    default:
                        w = m.behavior
                    }
                    return w.forEach(function(e, t) {
                        if (v !== e || w.length === t + 1)
                            return p;
                        v = p.placement.split("-")[0],
                        y = k(v);
                        var n, i = p.offsets.popper, r = p.offsets.reference, s = Math.floor, o = "left" === v && s(i.right) > s(r.left) || "right" === v && s(i.left) < s(r.right) || "top" === v && s(i.bottom) > s(r.top) || "bottom" === v && s(i.top) < s(r.bottom), a = s(i.left) < s(g.left), l = s(i.right) > s(g.right), u = s(i.top) < s(g.top), c = s(i.bottom) > s(g.bottom), d = "left" === v && a || "right" === v && l || "top" === v && u || "bottom" === v && c, h = -1 !== ["top", "bottom"].indexOf(v), f = !!m.flipVariations && (h && "start" === b && a || h && "end" === b && l || !h && "start" === b && u || !h && "end" === b && c);
                        (o || d || f) && (p.flipped = !0,
                        (o || d) && (v = w[t + 1]),
                        f && (b = "end" === (n = b) ? "start" : "start" === n ? "end" : n),
                        p.placement = v + (b ? "-" + b : ""),
                        p.offsets.popper = P({}, p.offsets.popper, A(p.instance.popper, p.offsets.reference, p.placement)),
                        p = O(p.instance.modifiers, p, "flip"))
                    }),
                    p
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , r = i.popper
                      , s = i.reference
                      , o = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return r[o ? "left" : "top"] = s[n] - (a ? r[o ? "width" : "height"] : 0),
                    e.placement = k(t),
                    e.offsets.popper = E(r),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!R(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = F(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , r = e.offsets.popper
                      , s = F(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var o, a, l, u, c, d, h, f, p, m, g, v, y, b, w = void 0 !== s ? s : t.gpuAcceleration, x = N(e.instance.popper), E = I(x), C = {
                        position: r.position
                    }, S = (o = e,
                    a = window.devicePixelRatio < 2 || !q,
                    l = o.offsets,
                    u = l.popper,
                    c = l.reference,
                    d = Math.round,
                    h = Math.floor,
                    f = function(e) {
                        return e
                    }
                    ,
                    p = d(c.width),
                    m = d(u.width),
                    g = -1 !== ["left", "right"].indexOf(o.placement),
                    v = -1 !== o.placement.indexOf("-"),
                    b = a ? d : f,
                    {
                        left: (y = a ? g || v || p % 2 == m % 2 ? d : h : f)(p % 2 == 1 && m % 2 == 1 && !v && a ? u.left - 1 : u.left),
                        top: b(u.top),
                        bottom: b(u.bottom),
                        right: y(u.right)
                    }), T = "bottom" === n ? "top" : "bottom", _ = "right" === i ? "left" : "right", k = j("transform"), A = void 0, O = void 0;
                    if (O = "bottom" === T ? "HTML" === x.nodeName ? -x.clientHeight + S.bottom : -E.height + S.bottom : S.top,
                    A = "right" === _ ? "HTML" === x.nodeName ? -x.clientWidth + S.right : -E.width + S.right : S.left,
                    w && k)
                        C[k] = "translate3d(" + A + "px, " + O + "px, 0)",
                        C[T] = 0,
                        C[_] = 0,
                        C.willChange = "transform";
                    else {
                        var M = "bottom" === T ? -1 : 1
                          , D = "right" === _ ? -1 : 1;
                        C[T] = O * M,
                        C[_] = A * D,
                        C.willChange = T + ", " + _
                    }
                    var L = {
                        "x-placement": e.placement
                    };
                    return e.attributes = P({}, L, e.attributes),
                    e.styles = P({}, C, e.styles),
                    e.arrowStyles = P({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    var t, n;
                    return H(e.instance.popper, e.styles),
                    t = e.instance.popper,
                    n = e.attributes,
                    Object.keys(n).forEach(function(e) {
                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                    }),
                    e.arrowElement && Object.keys(e.arrowStyles).length && H(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, i, r) {
                    var s = T(r, t, e, n.positionFixed)
                      , o = S(n.placement, s, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", o),
                    H(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    }
      , K = function() {
        function s(e, t) {
            var n = this
              , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, s),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(n.update)
            }
            ,
            this.update = o(this.update.bind(this)),
            this.options = P({}, s.Defaults, i),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = e && e.jquery ? e[0] : e,
            this.popper = t && t.jquery ? t[0] : t,
            this.options.modifiers = {},
            Object.keys(P({}, s.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                n.options.modifiers[e] = P({}, s.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return P({
                    name: e
                }, n.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(e) {
                e.enabled && a(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
            }),
            this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(),
            this.state.eventsEnabled = r
        }
        return u(s, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = T(this.state, this.popper, this.reference, this.options.positionFixed),
                        e.placement = S(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                        e.originalPlacement = e.placement,
                        e.positionFixed = this.options.positionFixed,
                        e.offsets.popper = A(this.popper, e.offsets.reference, e.placement),
                        e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                        e = O(this.modifiers, e),
                        this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                        this.options.onCreate(e))
                    }
                }
                .call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0,
                    M(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                    this.popper.style.position = "",
                    this.popper.style.top = "",
                    this.popper.style.left = "",
                    this.popper.style.right = "",
                    this.popper.style.bottom = "",
                    this.popper.style.willChange = "",
                    this.popper.style[j("transform")] = ""),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                }
                .call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = L(this.reference, this.options, this.state, this.scheduleUpdate))
                }
                .call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return B.call(this)
            }
        }]),
        s
    }();
    return K.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    K.placements = $,
    K.Defaults = Q,
    K
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
}(this, function(e, p) {
    "use strict";
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function o(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
        e
    }
    function l(r) {
        for (var e = 1; e < arguments.length; e++) {
            var s = null != arguments[e] ? arguments[e] : {}
              , t = Object.keys(s);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable
            }))),
            t.forEach(function(e) {
                var t, n, i;
                t = r,
                i = s[n = e],
                n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            })
        }
        return r
    }
    p = p && p.hasOwnProperty("default") ? p.default : p;
    var t = "transitionend";
    function n(e) {
        var t = this
          , n = !1;
        return p(this).one(m.TRANSITION_END, function() {
            n = !0
        }),
        setTimeout(function() {
            n || m.triggerTransitionEnd(t)
        }, e),
        this
    }
    var m = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()),
            document.getElementById(e); )
                ;
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e)
                return 0;
            var t = p(e).css("transition-duration")
              , n = p(e).css("transition-delay")
              , i = parseFloat(t)
              , r = parseFloat(n);
            return i || r ? (t = t.split(",")[0],
            n = n.split(",")[0],
            1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            p(e).trigger(t)
        },
        supportsTransitionEnd: function() {
            return Boolean(t)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i]
                      , s = t[i]
                      , o = s && m.isElement(s) ? "element" : (a = s,
                    {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(o))
                        throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".')
                }
            var a
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof e.getRootNode)
                return e instanceof ShadowRoot ? e : e.parentNode ? m.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
    };
    p.fn.emulateTransitionEnd = n,
    p.event.special[m.TRANSITION_END] = {
        bindType: t,
        delegateType: t,
        handle: function(e) {
            if (p(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    };
    var r = "alert"
      , s = "bs.alert"
      , a = "." + s
      , u = p.fn[r]
      , c = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api"
    }
      , d = "alert"
      , h = "fade"
      , f = "show"
      , g = function() {
        function i(e) {
            this._element = e
        }
        var e = i.prototype;
        return e.close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }
        ,
        e.dispose = function() {
            p.removeData(this._element, s),
            this._element = null
        }
        ,
        e._getRootElement = function(e) {
            var t = m.getSelectorFromElement(e)
              , n = !1;
            return t && (n = document.querySelector(t)),
            n || (n = p(e).closest("." + d)[0]),
            n
        }
        ,
        e._triggerCloseEvent = function(e) {
            var t = p.Event(c.CLOSE);
            return p(e).trigger(t),
            t
        }
        ,
        e._removeElement = function(t) {
            var n = this;
            if (p(t).removeClass(f),
            p(t).hasClass(h)) {
                var e = m.getTransitionDurationFromElement(t);
                p(t).one(m.TRANSITION_END, function(e) {
                    return n._destroyElement(t, e)
                }).emulateTransitionEnd(e)
            } else
                this._destroyElement(t)
        }
        ,
        e._destroyElement = function(e) {
            p(e).detach().trigger(c.CLOSED).remove()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this)
                  , t = e.data(s);
                t || (t = new i(this),
                e.data(s, t)),
                "close" === n && t[n](this)
            })
        }
        ,
        i._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        o(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        i
    }();
    p(document).on(c.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)),
    p.fn[r] = g._jQueryInterface,
    p.fn[r].Constructor = g,
    p.fn[r].noConflict = function() {
        return p.fn[r] = u,
        g._jQueryInterface
    }
    ;
    var v = "button"
      , y = "bs.button"
      , b = "." + y
      , w = ".data-api"
      , x = p.fn[v]
      , E = "active"
      , C = "btn"
      , S = "focus"
      , T = '[data-toggle^="button"]'
      , _ = '[data-toggle="buttons"]'
      , k = 'input:not([type="hidden"])'
      , A = ".active"
      , O = ".btn"
      , M = {
        CLICK_DATA_API: "click" + b + w,
        FOCUS_BLUR_DATA_API: "focus" + b + w + " blur" + b + w
    }
      , D = function() {
        function n(e) {
            this._element = e
        }
        var e = n.prototype;
        return e.toggle = function() {
            var e = !0
              , t = !0
              , n = p(this._element).closest(_)[0];
            if (n) {
                var i = this._element.querySelector(k);
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(E))
                            e = !1;
                        else {
                            var r = n.querySelector(A);
                            r && p(r).removeClass(E)
                        }
                    if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        i.checked = !this._element.classList.contains(E),
                        p(i).trigger("change")
                    }
                    i.focus(),
                    t = !1
                }
            }
            t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(E)),
            e && p(this._element).toggleClass(E)
        }
        ,
        e.dispose = function() {
            p.removeData(this._element, y),
            this._element = null
        }
        ,
        n._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(y);
                e || (e = new n(this),
                p(this).data(y, e)),
                "toggle" === t && e[t]()
            })
        }
        ,
        o(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        n
    }();
    p(document).on(M.CLICK_DATA_API, T, function(e) {
        e.preventDefault();
        var t = e.target;
        p(t).hasClass(C) || (t = p(t).closest(O)),
        D._jQueryInterface.call(p(t), "toggle")
    }).on(M.FOCUS_BLUR_DATA_API, T, function(e) {
        var t = p(e.target).closest(O)[0];
        p(t).toggleClass(S, /^focus(in)?$/.test(e.type))
    }),
    p.fn[v] = D._jQueryInterface,
    p.fn[v].Constructor = D,
    p.fn[v].noConflict = function() {
        return p.fn[v] = x,
        D._jQueryInterface
    }
    ;
    var L = "carousel"
      , N = "bs.carousel"
      , P = "." + N
      , I = ".data-api"
      , F = p.fn[L]
      , j = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , B = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , z = "next"
      , H = "prev"
      , q = "left"
      , R = "right"
      , $ = {
        SLIDE: "slide" + P,
        SLID: "slid" + P,
        KEYDOWN: "keydown" + P,
        MOUSEENTER: "mouseenter" + P,
        MOUSELEAVE: "mouseleave" + P,
        TOUCHSTART: "touchstart" + P,
        TOUCHMOVE: "touchmove" + P,
        TOUCHEND: "touchend" + P,
        POINTERDOWN: "pointerdown" + P,
        POINTERUP: "pointerup" + P,
        DRAG_START: "dragstart" + P,
        LOAD_DATA_API: "load" + P + I,
        CLICK_DATA_API: "click" + P + I
    }
      , W = "carousel"
      , V = "active"
      , X = "slide"
      , Y = "carousel-item-right"
      , G = "carousel-item-left"
      , U = "carousel-item-next"
      , Q = "carousel-item-prev"
      , K = "pointer-event"
      , Z = ".active"
      , J = ".active.carousel-item"
      , ee = ".carousel-item"
      , te = ".carousel-item img"
      , ne = ".carousel-item-next, .carousel-item-prev"
      , ie = ".carousel-indicators"
      , re = "[data-slide], [data-slide-to]"
      , se = '[data-ride="carousel"]'
      , oe = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , ae = function() {
        function s(e, t) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(t),
            this._element = e,
            this._indicatorsElement = this._element.querySelector(ie),
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var e = s.prototype;
        return e.next = function() {
            this._isSliding || this._slide(z)
        }
        ,
        e.nextWhenVisible = function() {
            !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
        }
        ,
        e.prev = function() {
            this._isSliding || this._slide(H)
        }
        ,
        e.pause = function(e) {
            e || (this._isPaused = !0),
            this._element.querySelector(ne) && (m.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        e.cycle = function(e) {
            e || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        e.to = function(e) {
            var t = this;
            this._activeElement = this._element.querySelector(J);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                    p(this._element).one($.SLID, function() {
                        return t.to(e)
                    });
                else {
                    if (n === e)
                        return this.pause(),
                        void this.cycle();
                    var i = n < e ? z : H;
                    this._slide(i, this._items[e])
                }
        }
        ,
        e.dispose = function() {
            p(this._element).off(P),
            p.removeData(this._element, N),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        e._getConfig = function(e) {
            return e = l({}, j, e),
            m.typeCheckConfig(L, e, B),
            e
        }
        ,
        e._handleSwipe = function() {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                0 < t && this.prev(),
                t < 0 && this.next()
            }
        }
        ,
        e._addEventListeners = function() {
            var t = this;
            this._config.keyboard && p(this._element).on($.KEYDOWN, function(e) {
                return t._keydown(e)
            }),
            "hover" === this._config.pause && p(this._element).on($.MOUSEENTER, function(e) {
                return t.pause(e)
            }).on($.MOUSELEAVE, function(e) {
                return t.cycle(e)
            }),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        e._addTouchEventListeners = function() {
            var n = this;
            if (this._touchSupported) {
                var t = function(e) {
                    n._pointerEvent && oe[e.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = e.originalEvent.clientX : n._pointerEvent || (n.touchStartX = e.originalEvent.touches[0].clientX)
                }
                  , i = function(e) {
                    n._pointerEvent && oe[e.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX),
                    n._handleSwipe(),
                    "hover" === n._config.pause && (n.pause(),
                    n.touchTimeout && clearTimeout(n.touchTimeout),
                    n.touchTimeout = setTimeout(function(e) {
                        return n.cycle(e)
                    }, 500 + n._config.interval))
                };
                p(this._element.querySelectorAll(te)).on($.DRAG_START, function(e) {
                    return e.preventDefault()
                }),
                this._pointerEvent ? (p(this._element).on($.POINTERDOWN, function(e) {
                    return t(e)
                }),
                p(this._element).on($.POINTERUP, function(e) {
                    return i(e)
                }),
                this._element.classList.add(K)) : (p(this._element).on($.TOUCHSTART, function(e) {
                    return t(e)
                }),
                p(this._element).on($.TOUCHMOVE, function(e) {
                    var t;
                    (t = e).originalEvent.touches && 1 < t.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX
                }),
                p(this._element).on($.TOUCHEND, function(e) {
                    return i(e)
                }))
            }
        }
        ,
        e._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                case 37:
                    e.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    e.preventDefault(),
                    this.next()
                }
        }
        ,
        e._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(ee)) : [],
            this._items.indexOf(e)
        }
        ,
        e._getItemByDirection = function(e, t) {
            var n = e === z
              , i = e === H
              , r = this._getItemIndex(t)
              , s = this._items.length - 1;
            if ((i && 0 === r || n && r === s) && !this._config.wrap)
                return t;
            var o = (r + (e === H ? -1 : 1)) % this._items.length;
            return -1 === o ? this._items[this._items.length - 1] : this._items[o]
        }
        ,
        e._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e)
              , i = this._getItemIndex(this._element.querySelector(J))
              , r = p.Event($.SLIDE, {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n
            });
            return p(this._element).trigger(r),
            r
        }
        ,
        e._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                var t = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                p(t).removeClass(V);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && p(n).addClass(V)
            }
        }
        ,
        e._slide = function(e, t) {
            var n, i, r, s = this, o = this._element.querySelector(J), a = this._getItemIndex(o), l = t || o && this._getItemByDirection(e, o), u = this._getItemIndex(l), c = Boolean(this._interval);
            if (r = e === z ? (n = G,
            i = U,
            q) : (n = Y,
            i = Q,
            R),
            l && p(l).hasClass(V))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
                this._isSliding = !0,
                c && this.pause(),
                this._setActiveIndicatorElement(l);
                var d = p.Event($.SLID, {
                    relatedTarget: l,
                    direction: r,
                    from: a,
                    to: u
                });
                if (p(this._element).hasClass(X)) {
                    p(l).addClass(i),
                    m.reflow(l),
                    p(o).addClass(n),
                    p(l).addClass(n);
                    var h = parseInt(l.getAttribute("data-interval"), 10);
                    this._config.interval = h ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                    h) : this._config.defaultInterval || this._config.interval;
                    var f = m.getTransitionDurationFromElement(o);
                    p(o).one(m.TRANSITION_END, function() {
                        p(l).removeClass(n + " " + i).addClass(V),
                        p(o).removeClass(V + " " + i + " " + n),
                        s._isSliding = !1,
                        setTimeout(function() {
                            return p(s._element).trigger(d)
                        }, 0)
                    }).emulateTransitionEnd(f)
                } else
                    p(o).removeClass(V),
                    p(l).addClass(V),
                    this._isSliding = !1,
                    p(this._element).trigger(d);
                c && this.cycle()
            }
        }
        ,
        s._jQueryInterface = function(i) {
            return this.each(function() {
                var e = p(this).data(N)
                  , t = l({}, j, p(this).data());
                "object" == typeof i && (t = l({}, t, i));
                var n = "string" == typeof i ? i : t.slide;
                if (e || (e = new s(this,t),
                p(this).data(N, e)),
                "number" == typeof i)
                    e.to(i);
                else if ("string" == typeof n) {
                    if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                } else
                    t.interval && t.ride && (e.pause(),
                    e.cycle())
            })
        }
        ,
        s._dataApiClickHandler = function(e) {
            var t = m.getSelectorFromElement(this);
            if (t) {
                var n = p(t)[0];
                if (n && p(n).hasClass(W)) {
                    var i = l({}, p(n).data(), p(this).data())
                      , r = this.getAttribute("data-slide-to");
                    r && (i.interval = !1),
                    s._jQueryInterface.call(p(n), i),
                    r && p(n).data(N).to(r),
                    e.preventDefault()
                }
            }
        }
        ,
        o(s, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return j
            }
        }]),
        s
    }();
    p(document).on($.CLICK_DATA_API, re, ae._dataApiClickHandler),
    p(window).on($.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(se)), t = 0, n = e.length; t < n; t++) {
            var i = p(e[t]);
            ae._jQueryInterface.call(i, i.data())
        }
    }),
    p.fn[L] = ae._jQueryInterface,
    p.fn[L].Constructor = ae,
    p.fn[L].noConflict = function() {
        return p.fn[L] = F,
        ae._jQueryInterface
    }
    ;
    var le = "collapse"
      , ue = "bs.collapse"
      , ce = "." + ue
      , de = p.fn[le]
      , he = {
        toggle: !0,
        parent: ""
    }
      , fe = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , pe = {
        SHOW: "show" + ce,
        SHOWN: "shown" + ce,
        HIDE: "hide" + ce,
        HIDDEN: "hidden" + ce,
        CLICK_DATA_API: "click" + ce + ".data-api"
    }
      , me = "show"
      , ge = "collapse"
      , ve = "collapsing"
      , ye = "collapsed"
      , be = "width"
      , we = "height"
      , xe = ".show, .collapsing"
      , Ee = '[data-toggle="collapse"]'
      , Ce = function() {
        function a(t, e) {
            this._isTransitioning = !1,
            this._element = t,
            this._config = this._getConfig(e),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(Ee)), i = 0, r = n.length; i < r; i++) {
                var s = n[i]
                  , o = m.getSelectorFromElement(s)
                  , a = [].slice.call(document.querySelectorAll(o)).filter(function(e) {
                    return e === t
                });
                null !== o && 0 < a.length && (this._selector = o,
                this._triggerArray.push(s))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var e = a.prototype;
        return e.toggle = function() {
            p(this._element).hasClass(me) ? this.hide() : this.show()
        }
        ,
        e.show = function() {
            var e, t, n = this;
            if (!this._isTransitioning && !p(this._element).hasClass(me) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(xe)).filter(function(e) {
                return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(ge)
            })).length && (e = null),
            !(e && (t = p(e).not(this._selector).data(ue)) && t._isTransitioning))) {
                var i = p.Event(pe.SHOW);
                if (p(this._element).trigger(i),
                !i.isDefaultPrevented()) {
                    e && (a._jQueryInterface.call(p(e).not(this._selector), "hide"),
                    t || p(e).data(ue, null));
                    var r = this._getDimension();
                    p(this._element).removeClass(ge).addClass(ve),
                    this._element.style[r] = 0,
                    this._triggerArray.length && p(this._triggerArray).removeClass(ye).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var s = "scroll" + (r[0].toUpperCase() + r.slice(1))
                      , o = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, function() {
                        p(n._element).removeClass(ve).addClass(ge).addClass(me),
                        n._element.style[r] = "",
                        n.setTransitioning(!1),
                        p(n._element).trigger(pe.SHOWN)
                    }).emulateTransitionEnd(o),
                    this._element.style[r] = this._element[s] + "px"
                }
            }
        }
        ,
        e.hide = function() {
            var e = this;
            if (!this._isTransitioning && p(this._element).hasClass(me)) {
                var t = p.Event(pe.HIDE);
                if (p(this._element).trigger(t),
                !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    m.reflow(this._element),
                    p(this._element).addClass(ve).removeClass(ge).removeClass(me);
                    var i = this._triggerArray.length;
                    if (0 < i)
                        for (var r = 0; r < i; r++) {
                            var s = this._triggerArray[r]
                              , o = m.getSelectorFromElement(s);
                            if (null !== o)
                                p([].slice.call(document.querySelectorAll(o))).hasClass(me) || p(s).addClass(ye).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, function() {
                        e.setTransitioning(!1),
                        p(e._element).removeClass(ve).addClass(ge).trigger(pe.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }
        ,
        e.setTransitioning = function(e) {
            this._isTransitioning = e
        }
        ,
        e.dispose = function() {
            p.removeData(this._element, ue),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        e._getConfig = function(e) {
            return (e = l({}, he, e)).toggle = Boolean(e.toggle),
            m.typeCheckConfig(le, e, fe),
            e
        }
        ,
        e._getDimension = function() {
            return p(this._element).hasClass(be) ? be : we
        }
        ,
        e._getParent = function() {
            var e, n = this;
            m.isElement(this._config.parent) ? (e = this._config.parent,
            void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , i = [].slice.call(e.querySelectorAll(t));
            return p(i).each(function(e, t) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
            }),
            e
        }
        ,
        e._addAriaAndCollapsedClass = function(e, t) {
            var n = p(e).hasClass(me);
            t.length && p(t).toggleClass(ye, !n).attr("aria-expanded", n)
        }
        ,
        a._getTargetFromElement = function(e) {
            var t = m.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }
        ,
        a._jQueryInterface = function(i) {
            return this.each(function() {
                var e = p(this)
                  , t = e.data(ue)
                  , n = l({}, he, e.data(), "object" == typeof i && i ? i : {});
                if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                t || (t = new a(this,n),
                e.data(ue, t)),
                "string" == typeof i) {
                    if (void 0 === t[i])
                        throw new TypeError('No method named "' + i + '"');
                    t[i]()
                }
            })
        }
        ,
        o(a, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return he
            }
        }]),
        a
    }();
    p(document).on(pe.CLICK_DATA_API, Ee, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = p(this)
          , t = m.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(t));
        p(i).each(function() {
            var e = p(this)
              , t = e.data(ue) ? "toggle" : n.data();
            Ce._jQueryInterface.call(e, t)
        })
    }),
    p.fn[le] = Ce._jQueryInterface,
    p.fn[le].Constructor = Ce,
    p.fn[le].noConflict = function() {
        return p.fn[le] = de,
        Ce._jQueryInterface
    }
    ;
    for (var Se = "undefined" != typeof window && "undefined" != typeof document, Te = ["Edge", "Trident", "Firefox"], _e = 0, ke = 0; ke < Te.length; ke += 1)
        if (Se && 0 <= navigator.userAgent.indexOf(Te[ke])) {
            _e = 1;
            break
        }
    var Ae = Se && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, _e))
        }
    }
    ;
    function Oe(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function Me(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function De(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function Le(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var t = Me(e)
          , n = t.overflow
          , i = t.overflowX
          , r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : Le(De(e))
    }
    var Ne = Se && !(!window.MSInputMethodContext || !document.documentMode)
      , Pe = Se && /MSIE 10/.test(navigator.userAgent);
    function Ie(e) {
        return 11 === e ? Ne : 10 === e ? Pe : Ne || Pe
    }
    function Fe(e) {
        if (!e)
            return document.documentElement;
        for (var t = Ie(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === Me(n, "position") ? Fe(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function je(e) {
        return null !== e.parentNode ? je(e.parentNode) : e
    }
    function Be(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? e : t
          , r = n ? t : e
          , s = document.createRange();
        s.setStart(i, 0),
        s.setEnd(r, 0);
        var o, a, l = s.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r))
            return "BODY" === (a = (o = l).nodeName) || "HTML" !== a && Fe(o.firstElementChild) !== o ? Fe(l) : l;
        var u = je(e);
        return u.host ? Be(u.host, t) : Be(e, je(t).host)
    }
    function ze(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
          , n = e.nodeName;
        if ("BODY" !== n && "HTML" !== n)
            return e[t];
        var i = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || i)[t]
    }
    function He(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }
    function qe(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Ie(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }
    function Re(e) {
        var t = e.body
          , n = e.documentElement
          , i = Ie(10) && getComputedStyle(n);
        return {
            height: qe("Height", t, n, i),
            width: qe("Width", t, n, i)
        }
    }
    var $e = function() {
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && i(e.prototype, t),
            n && i(e, n),
            e
        }
    }()
      , We = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
      , Ve = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ;
    function Xe(e) {
        return Ve({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function Ye(e) {
        var t = {};
        try {
            if (Ie(10)) {
                t = e.getBoundingClientRect();
                var n = ze(e, "top")
                  , i = ze(e, "left");
                t.top += n,
                t.left += i,
                t.bottom += n,
                t.right += i
            } else
                t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }
          , s = "HTML" === e.nodeName ? Re(e.ownerDocument) : {}
          , o = s.width || e.clientWidth || r.right - r.left
          , a = s.height || e.clientHeight || r.bottom - r.top
          , l = e.offsetWidth - o
          , u = e.offsetHeight - a;
        if (l || u) {
            var c = Me(e);
            l -= He(c, "x"),
            u -= He(c, "y"),
            r.width -= l,
            r.height -= u
        }
        return Xe(r)
    }
    function Ge(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , i = Ie(10)
          , r = "HTML" === t.nodeName
          , s = Ye(e)
          , o = Ye(t)
          , a = Le(e)
          , l = Me(t)
          , u = parseFloat(l.borderTopWidth, 10)
          , c = parseFloat(l.borderLeftWidth, 10);
        n && r && (o.top = Math.max(o.top, 0),
        o.left = Math.max(o.left, 0));
        var d = Xe({
            top: s.top - o.top - u,
            left: s.left - o.left - c,
            width: s.width,
            height: s.height
        });
        if (d.marginTop = 0,
        d.marginLeft = 0,
        !i && r) {
            var h = parseFloat(l.marginTop, 10)
              , f = parseFloat(l.marginLeft, 10);
            d.top -= u - h,
            d.bottom -= u - h,
            d.left -= c - f,
            d.right -= c - f,
            d.marginTop = h,
            d.marginLeft = f
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (d = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
              , i = ze(t, "top")
              , r = ze(t, "left")
              , s = n ? -1 : 1;
            return e.top += i * s,
            e.bottom += i * s,
            e.left += r * s,
            e.right += r * s,
            e
        }(d, t)),
        d
    }
    function Ue(e) {
        if (!e || !e.parentElement || Ie())
            return document.documentElement;
        for (var t = e.parentElement; t && "none" === Me(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function Qe(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , s = {
            top: 0,
            left: 0
        }
          , o = r ? Ue(e) : Be(e, t);
        if ("viewport" === i)
            s = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                  , n = e.ownerDocument.documentElement
                  , i = Ge(e, n)
                  , r = Math.max(n.clientWidth, window.innerWidth || 0)
                  , s = Math.max(n.clientHeight, window.innerHeight || 0)
                  , o = t ? 0 : ze(n)
                  , a = t ? 0 : ze(n, "left");
                return Xe({
                    top: o - i.top + i.marginTop,
                    left: a - i.left + i.marginLeft,
                    width: r,
                    height: s
                })
            }(o, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = Le(De(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
            var l = Ge(a, o, r);
            if ("HTML" !== a.nodeName || function e(t) {
                var n = t.nodeName;
                if ("BODY" === n || "HTML" === n)
                    return !1;
                if ("fixed" === Me(t, "position"))
                    return !0;
                var i = De(t);
                return !!i && e(i)
            }(o))
                s = l;
            else {
                var u = Re(e.ownerDocument)
                  , c = u.height
                  , d = u.width;
                s.top += l.top - l.marginTop,
                s.bottom = c + l.top,
                s.left += l.left - l.marginLeft,
                s.right = d + l.left
            }
        }
        var h = "number" == typeof (n = n || 0);
        return s.left += h ? n : n.left || 0,
        s.top += h ? n : n.top || 0,
        s.right -= h ? n : n.right || 0,
        s.bottom -= h ? n : n.bottom || 0,
        s
    }
    function Ke(e, t, i, n, r) {
        var s = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var o = Qe(i, n, s, r)
          , a = {
            top: {
                width: o.width,
                height: t.top - o.top
            },
            right: {
                width: o.right - t.right,
                height: o.height
            },
            bottom: {
                width: o.width,
                height: o.bottom - t.bottom
            },
            left: {
                width: t.left - o.left,
                height: o.height
            }
        }
          , l = Object.keys(a).map(function(e) {
            return Ve({
                key: e
            }, a[e], {
                area: (t = a[e],
                t.width * t.height)
            });
            var t
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , u = l.filter(function(e) {
            var t = e.width
              , n = e.height;
            return t >= i.clientWidth && n >= i.clientHeight
        })
          , c = 0 < u.length ? u[0].key : l[0].key
          , d = e.split("-")[1];
        return c + (d ? "-" + d : "")
    }
    function Ze(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return Ge(n, i ? Ue(t) : Be(t, n), i)
    }
    function Je(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e)
          , n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
          , i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    function et(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function tt(e, t, n) {
        n = n.split("-")[0];
        var i = Je(e)
          , r = {
            width: i.width,
            height: i.height
        }
          , s = -1 !== ["right", "left"].indexOf(n)
          , o = s ? "top" : "left"
          , a = s ? "left" : "top"
          , l = s ? "height" : "width"
          , u = s ? "width" : "height";
        return r[o] = t[o] + t[l] / 2 - i[l] / 2,
        r[a] = n === a ? t[a] - i[u] : t[et(a)],
        r
    }
    function nt(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function it(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e[t] === n
                });
            var i = nt(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && Oe(t) && (n.offsets.popper = Xe(n.offsets.popper),
            n.offsets.reference = Xe(n.offsets.reference),
            n = t(n, e))
        }),
        n
    }
    function rt(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }
    function st(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i]
              , s = r ? "" + r + n : e;
            if (void 0 !== document.body.style[s])
                return s
        }
        return null
    }
    function ot(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function at(e, t, n, i) {
        n.updateBound = i,
        ot(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = Le(e);
        return function e(t, n, i, r) {
            var s = "BODY" === t.nodeName
              , o = s ? t.ownerDocument.defaultView : t;
            o.addEventListener(n, i, {
                passive: !0
            }),
            s || e(Le(o.parentNode), n, i, r),
            r.push(o)
        }(r, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = r,
        n.eventsEnabled = !0,
        n
    }
    function lt() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (e = this.reference,
        t = this.state,
        ot(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t))
    }
    function ut(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function ct(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ut(i[e]) && (t = "px"),
            n.style[e] = i[e] + t
        })
    }
    var dt = Se && /Firefox/i.test(navigator.userAgent);
    function ht(e, t, n) {
        var i = nt(e, function(e) {
            return e.name === t
        })
          , r = !!i && e.some(function(e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!r) {
            var s = "`" + t + "`"
              , o = "`" + n + "`";
            console.warn(o + " modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!")
        }
        return r
    }
    var ft = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , pt = ft.slice(3);
    function mt(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = pt.indexOf(e)
          , i = pt.slice(n + 1).concat(pt.slice(0, n));
        return t ? i.reverse() : i
    }
    var gt = "flip"
      , vt = "clockwise"
      , yt = "counterclockwise";
    function bt(e, r, s, t) {
        var o = [0, 0]
          , a = -1 !== ["right", "left"].indexOf(t)
          , n = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , i = n.indexOf(nt(n, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
          , u = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (u = u.map(function(e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width"
              , i = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                i = !0,
                e) : i ? (e[e.length - 1] += t,
                i = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                      , s = +r[1]
                      , o = r[2];
                    if (!s)
                        return e;
                    if (0 !== o.indexOf("%"))
                        return "vh" !== o && "vw" !== o ? s : ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * s;
                    var a = void 0;
                    switch (o) {
                    case "%p":
                        a = n;
                        break;
                    case "%":
                    case "%r":
                    default:
                        a = i
                    }
                    return Xe(a)[t] / 100 * s
                }(e, n, r, s)
            })
        })).forEach(function(n, i) {
            n.forEach(function(e, t) {
                ut(e) && (o[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }),
        o
    }
    var wt = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets
                          , s = r.reference
                          , o = r.popper
                          , a = -1 !== ["bottom", "top"].indexOf(n)
                          , l = a ? "left" : "top"
                          , u = a ? "width" : "height"
                          , c = {
                            start: We({}, l, s[l]),
                            end: We({}, l, s[l] + s[u] - o[u])
                        };
                        e.offsets.popper = Ve({}, o, c[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.offset
                      , i = e.placement
                      , r = e.offsets
                      , s = r.popper
                      , o = r.reference
                      , a = i.split("-")[0]
                      , l = void 0;
                    return l = ut(+n) ? [+n, 0] : bt(n, s, o, a),
                    "left" === a ? (s.top += l[0],
                    s.left -= l[1]) : "right" === a ? (s.top += l[0],
                    s.left += l[1]) : "top" === a ? (s.left += l[0],
                    s.top -= l[1]) : "bottom" === a && (s.left += l[0],
                    s.top += l[1]),
                    e.popper = s,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, i) {
                    var t = i.boundariesElement || Fe(e.instance.popper);
                    e.instance.reference === t && (t = Fe(t));
                    var n = st("transform")
                      , r = e.instance.popper.style
                      , s = r.top
                      , o = r.left
                      , a = r[n];
                    r.top = "",
                    r.left = "",
                    r[n] = "";
                    var l = Qe(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                    r.top = s,
                    r.left = o,
                    r[n] = a,
                    i.boundaries = l;
                    var u = i.priority
                      , c = e.offsets.popper
                      , d = {
                        primary: function(e) {
                            var t = c[e];
                            return c[e] < l[e] && !i.escapeWithReference && (t = Math.max(c[e], l[e])),
                            We({}, e, t)
                        },
                        secondary: function(e) {
                            var t = "right" === e ? "left" : "top"
                              , n = c[t];
                            return c[e] > l[e] && !i.escapeWithReference && (n = Math.min(c[t], l[e] - ("right" === e ? c.width : c.height))),
                            We({}, t, n)
                        }
                    };
                    return u.forEach(function(e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        c = Ve({}, c, d[t](e))
                    }),
                    e.offsets.popper = c,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , i = t.reference
                      , r = e.placement.split("-")[0]
                      , s = Math.floor
                      , o = -1 !== ["top", "bottom"].indexOf(r)
                      , a = o ? "right" : "bottom"
                      , l = o ? "left" : "top"
                      , u = o ? "width" : "height";
                    return n[a] < s(i[l]) && (e.offsets.popper[l] = s(i[l]) - n[u]),
                    n[l] > s(i[a]) && (e.offsets.popper[l] = s(i[a])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var n;
                    if (!ht(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i)))
                            return e
                    } else if (!e.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var r = e.placement.split("-")[0]
                      , s = e.offsets
                      , o = s.popper
                      , a = s.reference
                      , l = -1 !== ["left", "right"].indexOf(r)
                      , u = l ? "height" : "width"
                      , c = l ? "Top" : "Left"
                      , d = c.toLowerCase()
                      , h = l ? "left" : "top"
                      , f = l ? "bottom" : "right"
                      , p = Je(i)[u];
                    a[f] - p < o[d] && (e.offsets.popper[d] -= o[d] - (a[f] - p)),
                    a[d] + p > o[f] && (e.offsets.popper[d] += a[d] + p - o[f]),
                    e.offsets.popper = Xe(e.offsets.popper);
                    var m = a[d] + a[u] / 2 - p / 2
                      , g = Me(e.instance.popper)
                      , v = parseFloat(g["margin" + c], 10)
                      , y = parseFloat(g["border" + c + "Width"], 10)
                      , b = m - e.offsets.popper[d] - v - y;
                    return b = Math.max(Math.min(o[u] - p, b), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (We(n = {}, d, Math.round(b)),
                    We(n, h, ""),
                    n),
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(p, m) {
                    if (rt(p.instance.modifiers, "inner"))
                        return p;
                    if (p.flipped && p.placement === p.originalPlacement)
                        return p;
                    var g = Qe(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed)
                      , v = p.placement.split("-")[0]
                      , y = et(v)
                      , b = p.placement.split("-")[1] || ""
                      , w = [];
                    switch (m.behavior) {
                    case gt:
                        w = [v, y];
                        break;
                    case vt:
                        w = mt(v);
                        break;
                    case yt:
                        w = mt(v, !0);
                        break;
                    default:
                        w = m.behavior
                    }
                    return w.forEach(function(e, t) {
                        if (v !== e || w.length === t + 1)
                            return p;
                        v = p.placement.split("-")[0],
                        y = et(v);
                        var n, i = p.offsets.popper, r = p.offsets.reference, s = Math.floor, o = "left" === v && s(i.right) > s(r.left) || "right" === v && s(i.left) < s(r.right) || "top" === v && s(i.bottom) > s(r.top) || "bottom" === v && s(i.top) < s(r.bottom), a = s(i.left) < s(g.left), l = s(i.right) > s(g.right), u = s(i.top) < s(g.top), c = s(i.bottom) > s(g.bottom), d = "left" === v && a || "right" === v && l || "top" === v && u || "bottom" === v && c, h = -1 !== ["top", "bottom"].indexOf(v), f = !!m.flipVariations && (h && "start" === b && a || h && "end" === b && l || !h && "start" === b && u || !h && "end" === b && c);
                        (o || d || f) && (p.flipped = !0,
                        (o || d) && (v = w[t + 1]),
                        f && (b = "end" === (n = b) ? "start" : "start" === n ? "end" : n),
                        p.placement = v + (b ? "-" + b : ""),
                        p.offsets.popper = Ve({}, p.offsets.popper, tt(p.instance.popper, p.offsets.reference, p.placement)),
                        p = it(p.instance.modifiers, p, "flip"))
                    }),
                    p
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , r = i.popper
                      , s = i.reference
                      , o = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return r[o ? "left" : "top"] = s[n] - (a ? r[o ? "width" : "height"] : 0),
                    e.placement = et(t),
                    e.offsets.popper = Xe(r),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!ht(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = nt(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , r = e.offsets.popper
                      , s = nt(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var o, a, l, u, c, d, h, f, p, m, g, v, y, b, w = void 0 !== s ? s : t.gpuAcceleration, x = Fe(e.instance.popper), E = Ye(x), C = {
                        position: r.position
                    }, S = (o = e,
                    a = window.devicePixelRatio < 2 || !dt,
                    l = o.offsets,
                    u = l.popper,
                    c = l.reference,
                    d = Math.round,
                    h = Math.floor,
                    f = function(e) {
                        return e
                    }
                    ,
                    p = d(c.width),
                    m = d(u.width),
                    g = -1 !== ["left", "right"].indexOf(o.placement),
                    v = -1 !== o.placement.indexOf("-"),
                    b = a ? d : f,
                    {
                        left: (y = a ? g || v || p % 2 == m % 2 ? d : h : f)(p % 2 == 1 && m % 2 == 1 && !v && a ? u.left - 1 : u.left),
                        top: b(u.top),
                        bottom: b(u.bottom),
                        right: y(u.right)
                    }), T = "bottom" === n ? "top" : "bottom", _ = "right" === i ? "left" : "right", k = st("transform"), A = void 0, O = void 0;
                    if (O = "bottom" === T ? "HTML" === x.nodeName ? -x.clientHeight + S.bottom : -E.height + S.bottom : S.top,
                    A = "right" === _ ? "HTML" === x.nodeName ? -x.clientWidth + S.right : -E.width + S.right : S.left,
                    w && k)
                        C[k] = "translate3d(" + A + "px, " + O + "px, 0)",
                        C[T] = 0,
                        C[_] = 0,
                        C.willChange = "transform";
                    else {
                        var M = "bottom" === T ? -1 : 1
                          , D = "right" === _ ? -1 : 1;
                        C[T] = O * M,
                        C[_] = A * D,
                        C.willChange = T + ", " + _
                    }
                    var L = {
                        "x-placement": e.placement
                    };
                    return e.attributes = Ve({}, L, e.attributes),
                    e.styles = Ve({}, C, e.styles),
                    e.arrowStyles = Ve({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    var t, n;
                    return ct(e.instance.popper, e.styles),
                    t = e.instance.popper,
                    n = e.attributes,
                    Object.keys(n).forEach(function(e) {
                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                    }),
                    e.arrowElement && Object.keys(e.arrowStyles).length && ct(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, i, r) {
                    var s = Ze(r, t, e, n.positionFixed)
                      , o = Ke(n.placement, s, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", o),
                    ct(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    }
      , xt = function() {
        function s(e, t) {
            var n = this
              , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, s),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(n.update)
            }
            ,
            this.update = Ae(this.update.bind(this)),
            this.options = Ve({}, s.Defaults, i),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = e && e.jquery ? e[0] : e,
            this.popper = t && t.jquery ? t[0] : t,
            this.options.modifiers = {},
            Object.keys(Ve({}, s.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                n.options.modifiers[e] = Ve({}, s.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return Ve({
                    name: e
                }, n.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(e) {
                e.enabled && Oe(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
            }),
            this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(),
            this.state.eventsEnabled = r
        }
        return $e(s, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = Ze(this.state, this.popper, this.reference, this.options.positionFixed),
                        e.placement = Ke(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                        e.originalPlacement = e.placement,
                        e.positionFixed = this.options.positionFixed,
                        e.offsets.popper = tt(this.popper, e.offsets.reference, e.placement),
                        e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                        e = it(this.modifiers, e),
                        this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                        this.options.onCreate(e))
                    }
                }
                .call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0,
                    rt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                    this.popper.style.position = "",
                    this.popper.style.top = "",
                    this.popper.style.left = "",
                    this.popper.style.right = "",
                    this.popper.style.bottom = "",
                    this.popper.style.willChange = "",
                    this.popper.style[st("transform")] = ""),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                }
                .call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = at(this.reference, this.options, this.state, this.scheduleUpdate))
                }
                .call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return lt.call(this)
            }
        }]),
        s
    }();
    xt.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    xt.placements = ft,
    xt.Defaults = wt;
    var Et = "dropdown"
      , Ct = "bs.dropdown"
      , St = "." + Ct
      , Tt = ".data-api"
      , _t = p.fn[Et]
      , kt = new RegExp("38|40|27")
      , At = {
        HIDE: "hide" + St,
        HIDDEN: "hidden" + St,
        SHOW: "show" + St,
        SHOWN: "shown" + St,
        CLICK: "click" + St,
        CLICK_DATA_API: "click" + St + Tt,
        KEYDOWN_DATA_API: "keydown" + St + Tt,
        KEYUP_DATA_API: "keyup" + St + Tt
    }
      , Ot = "disabled"
      , Mt = "show"
      , Dt = "dropup"
      , Lt = "dropright"
      , Nt = "dropleft"
      , Pt = "dropdown-menu-right"
      , It = "position-static"
      , Ft = '[data-toggle="dropdown"]'
      , jt = ".dropdown form"
      , Bt = ".dropdown-menu"
      , zt = ".navbar-nav"
      , Ht = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
      , qt = "top-start"
      , Rt = "top-end"
      , $t = "bottom-start"
      , Wt = "bottom-end"
      , Vt = "right-start"
      , Xt = "left-start"
      , Yt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }
      , Gt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }
      , Ut = function() {
        function u(e, t) {
            this._element = e,
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var e = u.prototype;
        return e.toggle = function() {
            if (!this._element.disabled && !p(this._element).hasClass(Ot)) {
                var e = u._getParentFromElement(this._element)
                  , t = p(this._menu).hasClass(Mt);
                if (u._clearMenus(),
                !t) {
                    var n = {
                        relatedTarget: this._element
                    }
                      , i = p.Event(At.SHOW, n);
                    if (p(e).trigger(i),
                    !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if (void 0 === xt)
                                throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var r = this._element;
                            "parent" === this._config.reference ? r = e : m.isElement(this._config.reference) && (r = this._config.reference,
                            void 0 !== this._config.reference.jquery && (r = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary && p(e).addClass(It),
                            this._popper = new xt(r,this._menu,this._getPopperConfig())
                        }
                        "ontouchstart"in document.documentElement && 0 === p(e).closest(zt).length && p(document.body).children().on("mouseover", null, p.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        p(this._menu).toggleClass(Mt),
                        p(e).toggleClass(Mt).trigger(p.Event(At.SHOWN, n))
                    }
                }
            }
        }
        ,
        e.show = function() {
            if (!(this._element.disabled || p(this._element).hasClass(Ot) || p(this._menu).hasClass(Mt))) {
                var e = {
                    relatedTarget: this._element
                }
                  , t = p.Event(At.SHOW, e)
                  , n = u._getParentFromElement(this._element);
                p(n).trigger(t),
                t.isDefaultPrevented() || (p(this._menu).toggleClass(Mt),
                p(n).toggleClass(Mt).trigger(p.Event(At.SHOWN, e)))
            }
        }
        ,
        e.hide = function() {
            if (!this._element.disabled && !p(this._element).hasClass(Ot) && p(this._menu).hasClass(Mt)) {
                var e = {
                    relatedTarget: this._element
                }
                  , t = p.Event(At.HIDE, e)
                  , n = u._getParentFromElement(this._element);
                p(n).trigger(t),
                t.isDefaultPrevented() || (p(this._menu).toggleClass(Mt),
                p(n).toggleClass(Mt).trigger(p.Event(At.HIDDEN, e)))
            }
        }
        ,
        e.dispose = function() {
            p.removeData(this._element, Ct),
            p(this._element).off(St),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        e.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e._addEventListeners = function() {
            var t = this;
            p(this._element).on(At.CLICK, function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                t.toggle()
            })
        }
        ,
        e._getConfig = function(e) {
            return e = l({}, this.constructor.Default, p(this._element).data(), e),
            m.typeCheckConfig(Et, e, this.constructor.DefaultType),
            e
        }
        ,
        e._getMenuElement = function() {
            if (!this._menu) {
                var e = u._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(Bt))
            }
            return this._menu
        }
        ,
        e._getPlacement = function() {
            var e = p(this._element.parentNode)
              , t = $t;
            return e.hasClass(Dt) ? (t = qt,
            p(this._menu).hasClass(Pt) && (t = Rt)) : e.hasClass(Lt) ? t = Vt : e.hasClass(Nt) ? t = Xt : p(this._menu).hasClass(Pt) && (t = Wt),
            t
        }
        ,
        e._detectNavbar = function() {
            return 0 < p(this._element).closest(".navbar").length
        }
        ,
        e._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = l({}, e.offsets, t._config.offset(e.offsets, t._element) || {}),
                e
            }
            : e.offset = this._config.offset,
            e
        }
        ,
        e._getPopperConfig = function() {
            var e = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (e.modifiers.applyStyle = {
                enabled: !1
            }),
            e
        }
        ,
        u._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(Ct);
                if (e || (e = new u(this,"object" == typeof t ? t : null),
                p(this).data(Ct, e)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }
        ,
        u._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var t = [].slice.call(document.querySelectorAll(Ft)), n = 0, i = t.length; n < i; n++) {
                    var r = u._getParentFromElement(t[n])
                      , s = p(t[n]).data(Ct)
                      , o = {
                        relatedTarget: t[n]
                    };
                    if (e && "click" === e.type && (o.clickEvent = e),
                    s) {
                        var a = s._menu;
                        if (p(r).hasClass(Mt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(r, e.target))) {
                            var l = p.Event(At.HIDE, o);
                            p(r).trigger(l),
                            l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && p(document.body).children().off("mouseover", null, p.noop),
                            t[n].setAttribute("aria-expanded", "false"),
                            p(a).removeClass(Mt),
                            p(r).removeClass(Mt).trigger(p.Event(At.HIDDEN, o)))
                        }
                    }
                }
        }
        ,
        u._getParentFromElement = function(e) {
            var t, n = m.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)),
            t || e.parentNode
        }
        ,
        u._dataApiKeydownHandler = function(e) {
            if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(Bt).length)) : kt.test(e.which)) && (e.preventDefault(),
            e.stopPropagation(),
            !this.disabled && !p(this).hasClass(Ot))) {
                var t = u._getParentFromElement(this)
                  , n = p(t).hasClass(Mt);
                if (n && (!n || 27 !== e.which && 32 !== e.which)) {
                    var i = [].slice.call(t.querySelectorAll(Ht));
                    if (0 !== i.length) {
                        var r = i.indexOf(e.target);
                        38 === e.which && 0 < r && r--,
                        40 === e.which && r < i.length - 1 && r++,
                        r < 0 && (r = 0),
                        i[r].focus()
                    }
                } else {
                    if (27 === e.which) {
                        var s = t.querySelector(Ft);
                        p(s).trigger("focus")
                    }
                    p(this).trigger("click")
                }
            }
        }
        ,
        o(u, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Yt
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Gt
            }
        }]),
        u
    }();
    p(document).on(At.KEYDOWN_DATA_API, Ft, Ut._dataApiKeydownHandler).on(At.KEYDOWN_DATA_API, Bt, Ut._dataApiKeydownHandler).on(At.CLICK_DATA_API + " " + At.KEYUP_DATA_API, Ut._clearMenus).on(At.CLICK_DATA_API, Ft, function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        Ut._jQueryInterface.call(p(this), "toggle")
    }).on(At.CLICK_DATA_API, jt, function(e) {
        e.stopPropagation()
    }),
    p.fn[Et] = Ut._jQueryInterface,
    p.fn[Et].Constructor = Ut,
    p.fn[Et].noConflict = function() {
        return p.fn[Et] = _t,
        Ut._jQueryInterface
    }
    ;
    var Qt = "modal"
      , Kt = "bs.modal"
      , Zt = "." + Kt
      , Jt = p.fn[Qt]
      , en = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , tn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , nn = {
        HIDE: "hide" + Zt,
        HIDDEN: "hidden" + Zt,
        SHOW: "show" + Zt,
        SHOWN: "shown" + Zt,
        FOCUSIN: "focusin" + Zt,
        RESIZE: "resize" + Zt,
        CLICK_DISMISS: "click.dismiss" + Zt,
        KEYDOWN_DISMISS: "keydown.dismiss" + Zt,
        MOUSEUP_DISMISS: "mouseup.dismiss" + Zt,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + Zt,
        CLICK_DATA_API: "click" + Zt + ".data-api"
    }
      , rn = "modal-dialog-scrollable"
      , sn = "modal-scrollbar-measure"
      , on = "modal-backdrop"
      , an = "modal-open"
      , ln = "fade"
      , un = "show"
      , cn = ".modal-dialog"
      , dn = ".modal-body"
      , hn = '[data-toggle="modal"]'
      , fn = '[data-dismiss="modal"]'
      , pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , mn = ".sticky-top"
      , gn = function() {
        function r(e, t) {
            this._config = this._getConfig(t),
            this._element = e,
            this._dialog = e.querySelector(cn),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var e = r.prototype;
        return e.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        ,
        e.show = function(e) {
            var t = this;
            if (!this._isShown && !this._isTransitioning) {
                p(this._element).hasClass(ln) && (this._isTransitioning = !0);
                var n = p.Event(nn.SHOW, {
                    relatedTarget: e
                });
                p(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p(this._element).on(nn.CLICK_DISMISS, fn, function(e) {
                    return t.hide(e)
                }),
                p(this._dialog).on(nn.MOUSEDOWN_DISMISS, function() {
                    p(t._element).one(nn.MOUSEUP_DISMISS, function(e) {
                        p(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return t._showElement(e)
                }))
            }
        }
        ,
        e.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var n = p.Event(nn.HIDE);
                if (p(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = p(this._element).hasClass(ln);
                    if (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    p(document).off(nn.FOCUSIN),
                    p(this._element).removeClass(un),
                    p(this._element).off(nn.CLICK_DISMISS),
                    p(this._dialog).off(nn.MOUSEDOWN_DISMISS),
                    i) {
                        var r = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function(e) {
                            return t._hideModal(e)
                        }).emulateTransitionEnd(r)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        e.dispose = function() {
            [window, this._element, this._dialog].forEach(function(e) {
                return p(e).off(Zt)
            }),
            p(document).off(nn.FOCUSIN),
            p.removeData(this._element, Kt),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        e.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        e._getConfig = function(e) {
            return e = l({}, en, e),
            m.typeCheckConfig(Qt, e, tn),
            e
        }
        ,
        e._showElement = function(e) {
            var t = this
              , n = p(this._element).hasClass(ln);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            p(this._dialog).hasClass(rn) ? this._dialog.querySelector(dn).scrollTop = 0 : this._element.scrollTop = 0,
            n && m.reflow(this._element),
            p(this._element).addClass(un),
            this._config.focus && this._enforceFocus();
            var i = p.Event(nn.SHOWN, {
                relatedTarget: e
            })
              , r = function() {
                t._config.focus && t._element.focus(),
                t._isTransitioning = !1,
                p(t._element).trigger(i)
            };
            if (n) {
                var s = m.getTransitionDurationFromElement(this._dialog);
                p(this._dialog).one(m.TRANSITION_END, r).emulateTransitionEnd(s)
            } else
                r()
        }
        ,
        e._enforceFocus = function() {
            var t = this;
            p(document).off(nn.FOCUSIN).on(nn.FOCUSIN, function(e) {
                document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus()
            })
        }
        ,
        e._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? p(this._element).on(nn.KEYDOWN_DISMISS, function(e) {
                27 === e.which && (e.preventDefault(),
                t.hide())
            }) : this._isShown || p(this._element).off(nn.KEYDOWN_DISMISS)
        }
        ,
        e._setResizeEvent = function() {
            var t = this;
            this._isShown ? p(window).on(nn.RESIZE, function(e) {
                return t.handleUpdate(e)
            }) : p(window).off(nn.RESIZE)
        }
        ,
        e._hideModal = function() {
            var e = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                p(document.body).removeClass(an),
                e._resetAdjustments(),
                e._resetScrollbar(),
                p(e._element).trigger(nn.HIDDEN)
            })
        }
        ,
        e._removeBackdrop = function() {
            this._backdrop && (p(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        e._showBackdrop = function(e) {
            var t = this
              , n = p(this._element).hasClass(ln) ? ln : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = on,
                n && this._backdrop.classList.add(n),
                p(this._backdrop).appendTo(document.body),
                p(this._element).on(nn.CLICK_DISMISS, function(e) {
                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                }),
                n && m.reflow(this._backdrop),
                p(this._backdrop).addClass(un),
                !e)
                    return;
                if (!n)
                    return void e();
                var i = m.getTransitionDurationFromElement(this._backdrop);
                p(this._backdrop).one(m.TRANSITION_END, e).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                p(this._backdrop).removeClass(un);
                var r = function() {
                    t._removeBackdrop(),
                    e && e()
                };
                if (p(this._element).hasClass(ln)) {
                    var s = m.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(m.TRANSITION_END, r).emulateTransitionEnd(s)
                } else
                    r()
            } else
                e && e()
        }
        ,
        e._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        e._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        e._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        e._setScrollbar = function() {
            var r = this;
            if (this._isBodyOverflowing) {
                var e = [].slice.call(document.querySelectorAll(pn))
                  , t = [].slice.call(document.querySelectorAll(mn));
                p(e).each(function(e, t) {
                    var n = t.style.paddingRight
                      , i = p(t).css("padding-right");
                    p(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                }),
                p(t).each(function(e, t) {
                    var n = t.style.marginRight
                      , i = p(t).css("margin-right");
                    p(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight
                  , i = p(document.body).css("padding-right");
                p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
            p(document.body).addClass(an)
        }
        ,
        e._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(pn));
            p(e).each(function(e, t) {
                var n = p(t).data("padding-right");
                p(t).removeData("padding-right"),
                t.style.paddingRight = n || ""
            });
            var t = [].slice.call(document.querySelectorAll("" + mn));
            p(t).each(function(e, t) {
                var n = p(t).data("margin-right");
                void 0 !== n && p(t).css("margin-right", n).removeData("margin-right")
            });
            var n = p(document.body).data("padding-right");
            p(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        e._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = sn,
            document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        ,
        r._jQueryInterface = function(n, i) {
            return this.each(function() {
                var e = p(this).data(Kt)
                  , t = l({}, en, p(this).data(), "object" == typeof n && n ? n : {});
                if (e || (e = new r(this,t),
                p(this).data(Kt, e)),
                "string" == typeof n) {
                    if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n](i)
                } else
                    t.show && e.show(i)
            })
        }
        ,
        o(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return en
            }
        }]),
        r
    }();
    p(document).on(nn.CLICK_DATA_API, hn, function(e) {
        var t, n = this, i = m.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var r = p(t).data(Kt) ? "toggle" : l({}, p(t).data(), p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var s = p(t).one(nn.SHOW, function(e) {
            e.isDefaultPrevented() || s.one(nn.HIDDEN, function() {
                p(n).is(":visible") && n.focus()
            })
        });
        gn._jQueryInterface.call(p(t), r, this)
    }),
    p.fn[Qt] = gn._jQueryInterface,
    p.fn[Qt].Constructor = gn,
    p.fn[Qt].noConflict = function() {
        return p.fn[Qt] = Jt,
        gn._jQueryInterface
    }
    ;
    var vn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , yn = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , bn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , wn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function xn(e, o, t) {
        if (0 === e.length)
            return e;
        if (t && "function" == typeof t)
            return t(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), a = Object.keys(o), l = [].slice.call(n.body.querySelectorAll("*")), i = function(e, t) {
            var n = l[e]
              , i = n.nodeName.toLowerCase();
            if (-1 === a.indexOf(n.nodeName.toLowerCase()))
                return n.parentNode.removeChild(n),
                "continue";
            var r = [].slice.call(n.attributes)
              , s = [].concat(o["*"] || [], o[i] || []);
            r.forEach(function(e) {
                (function(e, t) {
                    var n = e.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(n))
                        return -1 === vn.indexOf(n) || Boolean(e.nodeValue.match(bn) || e.nodeValue.match(wn));
                    for (var i = t.filter(function(e) {
                        return e instanceof RegExp
                    }), r = 0, s = i.length; r < s; r++)
                        if (n.match(i[r]))
                            return !0;
                    return !1
                }
                )(e, s) || n.removeAttribute(e.nodeName)
            })
        }, r = 0, s = l.length; r < s; r++)
            i(r);
        return n.body.innerHTML
    }
    var En = "tooltip"
      , Cn = "bs.tooltip"
      , Sn = "." + Cn
      , Tn = p.fn[En]
      , _n = "bs-tooltip"
      , kn = new RegExp("(^|\\s)" + _n + "\\S+","g")
      , An = ["sanitize", "whiteList", "sanitizeFn"]
      , On = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object"
    }
      , Mn = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Dn = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: yn
    }
      , Ln = "show"
      , Nn = "out"
      , Pn = {
        HIDE: "hide" + Sn,
        HIDDEN: "hidden" + Sn,
        SHOW: "show" + Sn,
        SHOWN: "shown" + Sn,
        INSERTED: "inserted" + Sn,
        CLICK: "click" + Sn,
        FOCUSIN: "focusin" + Sn,
        FOCUSOUT: "focusout" + Sn,
        MOUSEENTER: "mouseenter" + Sn,
        MOUSELEAVE: "mouseleave" + Sn
    }
      , In = "fade"
      , Fn = "show"
      , jn = ".tooltip-inner"
      , Bn = ".arrow"
      , zn = "hover"
      , Hn = "focus"
      , qn = "click"
      , Rn = "manual"
      , $n = function() {
        function i(e, t) {
            if (void 0 === xt)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = e,
            this.config = this._getConfig(t),
            this.tip = null,
            this._setListeners()
        }
        var e = i.prototype;
        return e.enable = function() {
            this._isEnabled = !0
        }
        ,
        e.disable = function() {
            this._isEnabled = !1
        }
        ,
        e.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        e.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var t = this.constructor.DATA_KEY
                      , n = p(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                    p(e.currentTarget).data(t, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (p(this.getTipElement()).hasClass(Fn))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        e.dispose = function() {
            clearTimeout(this._timeout),
            p.removeData(this.element, this.constructor.DATA_KEY),
            p(this.element).off(this.constructor.EVENT_KEY),
            p(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && p(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        e.show = function() {
            var t = this;
            if ("none" === p(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var e = p.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                p(this.element).trigger(e);
                var n = m.findShadowRoot(this.element)
                  , i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !i)
                    return;
                var r = this.getTipElement()
                  , s = m.getUID(this.constructor.NAME);
                r.setAttribute("id", s),
                this.element.setAttribute("aria-describedby", s),
                this.setContent(),
                this.config.animation && p(r).addClass(In);
                var o = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                  , a = this._getAttachment(o);
                this.addAttachmentClass(a);
                var l = this._getContainer();
                p(r).data(this.constructor.DATA_KEY, this),
                p.contains(this.element.ownerDocument.documentElement, this.tip) || p(r).appendTo(l),
                p(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new xt(this.element,r,{
                    placement: a,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: Bn
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }),
                p(r).addClass(Fn),
                "ontouchstart"in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                var u = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null,
                    p(t.element).trigger(t.constructor.Event.SHOWN),
                    e === Nn && t._leave(null, t)
                };
                if (p(this.tip).hasClass(In)) {
                    var c = m.getTransitionDurationFromElement(this.tip);
                    p(this.tip).one(m.TRANSITION_END, u).emulateTransitionEnd(c)
                } else
                    u()
            }
        }
        ,
        e.hide = function(e) {
            var t = this
              , n = this.getTipElement()
              , i = p.Event(this.constructor.Event.HIDE)
              , r = function() {
                t._hoverState !== Ln && n.parentNode && n.parentNode.removeChild(n),
                t._cleanTipClass(),
                t.element.removeAttribute("aria-describedby"),
                p(t.element).trigger(t.constructor.Event.HIDDEN),
                null !== t._popper && t._popper.destroy(),
                e && e()
            };
            if (p(this.element).trigger(i),
            !i.isDefaultPrevented()) {
                if (p(n).removeClass(Fn),
                "ontouchstart"in document.documentElement && p(document.body).children().off("mouseover", null, p.noop),
                this._activeTrigger[qn] = !1,
                this._activeTrigger[Hn] = !1,
                this._activeTrigger[zn] = !1,
                p(this.tip).hasClass(In)) {
                    var s = m.getTransitionDurationFromElement(n);
                    p(n).one(m.TRANSITION_END, r).emulateTransitionEnd(s)
                } else
                    r();
                this._hoverState = ""
            }
        }
        ,
        e.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        e.addAttachmentClass = function(e) {
            p(this.getTipElement()).addClass(_n + "-" + e)
        }
        ,
        e.getTipElement = function() {
            return this.tip = this.tip || p(this.config.template)[0],
            this.tip
        }
        ,
        e.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(p(e.querySelectorAll(jn)), this.getTitle()),
            p(e).removeClass(In + " " + Fn)
        }
        ,
        e.setElementContent = function(e, t) {
            "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = xn(t, this.config.whiteList, this.config.sanitizeFn)),
            e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text())
        }
        ,
        e.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            e
        }
        ,
        e._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this.config.offset ? e.fn = function(e) {
                return e.offsets = l({}, e.offsets, t.config.offset(e.offsets, t.element) || {}),
                e
            }
            : e.offset = this.config.offset,
            e
        }
        ,
        e._getContainer = function() {
            return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container)
        }
        ,
        e._getAttachment = function(e) {
            return Mn[e.toUpperCase()]
        }
        ,
        e._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(e) {
                if ("click" === e)
                    p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                        return i.toggle(e)
                    });
                else if (e !== Rn) {
                    var t = e === zn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                      , n = e === zn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    p(i.element).on(t, i.config.selector, function(e) {
                        return i._enter(e)
                    }).on(n, i.config.selector, function(e) {
                        return i._leave(e)
                    })
                }
            }),
            p(this.element).closest(".modal").on("hide.bs.modal", function() {
                i.element && i.hide()
            }),
            this.config.selector ? this.config = l({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        e._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        e._enter = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            p(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusin" === e.type ? Hn : zn] = !0),
            p(t.getTipElement()).hasClass(Fn) || t._hoverState === Ln ? t._hoverState = Ln : (clearTimeout(t._timeout),
            t._hoverState = Ln,
            t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === Ln && t.show()
            }, t.config.delay.show) : t.show())
        }
        ,
        e._leave = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            p(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusout" === e.type ? Hn : zn] = !1),
            t._isWithActiveTrigger() || (clearTimeout(t._timeout),
            t._hoverState = Nn,
            t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                t._hoverState === Nn && t.hide()
            }, t.config.delay.hide) : t.hide())
        }
        ,
        e._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e])
                    return !0;
            return !1
        }
        ,
        e._getConfig = function(e) {
            var t = p(this.element).data();
            return Object.keys(t).forEach(function(e) {
                -1 !== An.indexOf(e) && delete t[e]
            }),
            "number" == typeof (e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            m.typeCheckConfig(En, e, this.constructor.DefaultType),
            e.sanitize && (e.template = xn(e.template, e.whiteList, e.sanitizeFn)),
            e
        }
        ,
        e._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }
        ,
        e._cleanTipClass = function() {
            var e = p(this.getTipElement())
              , t = e.attr("class").match(kn);
            null !== t && t.length && e.removeClass(t.join(""))
        }
        ,
        e._handlePopperPlacementChange = function(e) {
            var t = e.instance;
            this.tip = t.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement))
        }
        ,
        e._fixTransition = function() {
            var e = this.getTipElement()
              , t = this.config.animation;
            null === e.getAttribute("x-placement") && (p(e).removeClass(In),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = t)
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this).data(Cn)
                  , t = "object" == typeof n && n;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this,t),
                p(this).data(Cn, e)),
                "string" == typeof n)) {
                    if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        o(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Dn
            }
        }, {
            key: "NAME",
            get: function() {
                return En
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Cn
            }
        }, {
            key: "Event",
            get: function() {
                return Pn
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Sn
            }
        }, {
            key: "DefaultType",
            get: function() {
                return On
            }
        }]),
        i
    }();
    p.fn[En] = $n._jQueryInterface,
    p.fn[En].Constructor = $n,
    p.fn[En].noConflict = function() {
        return p.fn[En] = Tn,
        $n._jQueryInterface
    }
    ;
    var Wn = "popover"
      , Vn = "bs.popover"
      , Xn = "." + Vn
      , Yn = p.fn[Wn]
      , Gn = "bs-popover"
      , Un = new RegExp("(^|\\s)" + Gn + "\\S+","g")
      , Qn = l({}, $n.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Kn = l({}, $n.DefaultType, {
        content: "(string|element|function)"
    })
      , Zn = "fade"
      , Jn = "show"
      , ei = ".popover-header"
      , ti = ".popover-body"
      , ni = {
        HIDE: "hide" + Xn,
        HIDDEN: "hidden" + Xn,
        SHOW: "show" + Xn,
        SHOWN: "shown" + Xn,
        INSERTED: "inserted" + Xn,
        CLICK: "click" + Xn,
        FOCUSIN: "focusin" + Xn,
        FOCUSOUT: "focusout" + Xn,
        MOUSEENTER: "mouseenter" + Xn,
        MOUSELEAVE: "mouseleave" + Xn
    }
      , ii = function(e) {
        var t, n;
        function i() {
            return e.apply(this, arguments) || this
        }
        n = e,
        (t = i).prototype = Object.create(n.prototype),
        (t.prototype.constructor = t).__proto__ = n;
        var r = i.prototype;
        return r.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        r.addAttachmentClass = function(e) {
            p(this.getTipElement()).addClass(Gn + "-" + e)
        }
        ,
        r.getTipElement = function() {
            return this.tip = this.tip || p(this.config.template)[0],
            this.tip
        }
        ,
        r.setContent = function() {
            var e = p(this.getTipElement());
            this.setElementContent(e.find(ei), this.getTitle());
            var t = this._getContent();
            "function" == typeof t && (t = t.call(this.element)),
            this.setElementContent(e.find(ti), t),
            e.removeClass(Zn + " " + Jn)
        }
        ,
        r._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        r._cleanTipClass = function() {
            var e = p(this.getTipElement())
              , t = e.attr("class").match(Un);
            null !== t && 0 < t.length && e.removeClass(t.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this).data(Vn)
                  , t = "object" == typeof n ? n : null;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this,t),
                p(this).data(Vn, e)),
                "string" == typeof n)) {
                    if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        o(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Qn
            }
        }, {
            key: "NAME",
            get: function() {
                return Wn
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Vn
            }
        }, {
            key: "Event",
            get: function() {
                return ni
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Xn
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Kn
            }
        }]),
        i
    }($n);
    p.fn[Wn] = ii._jQueryInterface,
    p.fn[Wn].Constructor = ii,
    p.fn[Wn].noConflict = function() {
        return p.fn[Wn] = Yn,
        ii._jQueryInterface
    }
    ;
    var ri = "scrollspy"
      , si = "bs.scrollspy"
      , oi = "." + si
      , ai = p.fn[ri]
      , li = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , ui = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , ci = {
        ACTIVATE: "activate" + oi,
        SCROLL: "scroll" + oi,
        LOAD_DATA_API: "load" + oi + ".data-api"
    }
      , di = "dropdown-item"
      , hi = "active"
      , fi = '[data-spy="scroll"]'
      , pi = ".nav, .list-group"
      , mi = ".nav-link"
      , gi = ".nav-item"
      , vi = ".list-group-item"
      , yi = ".dropdown"
      , bi = ".dropdown-item"
      , wi = ".dropdown-toggle"
      , xi = "offset"
      , Ei = "position"
      , Ci = function() {
        function n(e, t) {
            var n = this;
            this._element = e,
            this._scrollElement = "BODY" === e.tagName ? window : e,
            this._config = this._getConfig(t),
            this._selector = this._config.target + " " + mi + "," + this._config.target + " " + vi + "," + this._config.target + " " + bi,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            p(this._scrollElement).on(ci.SCROLL, function(e) {
                return n._process(e)
            }),
            this.refresh(),
            this._process()
        }
        var e = n.prototype;
        return e.refresh = function() {
            var t = this
              , e = this._scrollElement === this._scrollElement.window ? xi : Ei
              , r = "auto" === this._config.method ? e : this._config.method
              , s = r === Ei ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                var t, n = m.getSelectorFromElement(e);
                if (n && (t = document.querySelector(n)),
                t) {
                    var i = t.getBoundingClientRect();
                    if (i.width || i.height)
                        return [p(t)[r]().top + s, n]
                }
                return null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(e) {
                t._offsets.push(e[0]),
                t._targets.push(e[1])
            })
        }
        ,
        e.dispose = function() {
            p.removeData(this._element, si),
            p(this._scrollElement).off(oi),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        e._getConfig = function(e) {
            if ("string" != typeof (e = l({}, li, "object" == typeof e && e ? e : {})).target) {
                var t = p(e.target).attr("id");
                t || (t = m.getUID(ri),
                p(e.target).attr("id", t)),
                e.target = "#" + t
            }
            return m.typeCheckConfig(ri, e, ui),
            e
        }
        ,
        e._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        e._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        e._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        e._process = function() {
            var e = this._getScrollTop() + this._config.offset
              , t = this._getScrollHeight()
              , n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(),
            n <= e) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var r = this._offsets.length; r--; ) {
                    this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }
        }
        ,
        e._activate = function(t) {
            this._activeTarget = t,
            this._clear();
            var e = this._selector.split(",").map(function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
            })
              , n = p([].slice.call(document.querySelectorAll(e.join(","))));
            n.hasClass(di) ? (n.closest(yi).find(wi).addClass(hi),
            n.addClass(hi)) : (n.addClass(hi),
            n.parents(pi).prev(mi + ", " + vi).addClass(hi),
            n.parents(pi).prev(gi).children(mi).addClass(hi)),
            p(this._scrollElement).trigger(ci.ACTIVATE, {
                relatedTarget: t
            })
        }
        ,
        e._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                return e.classList.contains(hi)
            }).forEach(function(e) {
                return e.classList.remove(hi)
            })
        }
        ,
        n._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(si);
                if (e || (e = new n(this,"object" == typeof t && t),
                p(this).data(si, e)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }
        ,
        o(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return li
            }
        }]),
        n
    }();
    p(window).on(ci.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(fi)), t = e.length; t--; ) {
            var n = p(e[t]);
            Ci._jQueryInterface.call(n, n.data())
        }
    }),
    p.fn[ri] = Ci._jQueryInterface,
    p.fn[ri].Constructor = Ci,
    p.fn[ri].noConflict = function() {
        return p.fn[ri] = ai,
        Ci._jQueryInterface
    }
    ;
    var Si = "bs.tab"
      , Ti = "." + Si
      , _i = p.fn.tab
      , ki = {
        HIDE: "hide" + Ti,
        HIDDEN: "hidden" + Ti,
        SHOW: "show" + Ti,
        SHOWN: "shown" + Ti,
        CLICK_DATA_API: "click" + Ti + ".data-api"
    }
      , Ai = "dropdown-menu"
      , Oi = "active"
      , Mi = "disabled"
      , Di = "fade"
      , Li = "show"
      , Ni = ".dropdown"
      , Pi = ".nav, .list-group"
      , Ii = ".active"
      , Fi = "> li > .active"
      , ji = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
      , Bi = ".dropdown-toggle"
      , zi = "> .dropdown-menu .active"
      , Hi = function() {
        function i(e) {
            this._element = e
        }
        var e = i.prototype;
        return e.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(Oi) || p(this._element).hasClass(Mi))) {
                var e, i, t = p(this._element).closest(Pi)[0], r = m.getSelectorFromElement(this._element);
                if (t) {
                    var s = "UL" === t.nodeName || "OL" === t.nodeName ? Fi : Ii;
                    i = (i = p.makeArray(p(t).find(s)))[i.length - 1]
                }
                var o = p.Event(ki.HIDE, {
                    relatedTarget: this._element
                })
                  , a = p.Event(ki.SHOW, {
                    relatedTarget: i
                });
                if (i && p(i).trigger(o),
                p(this._element).trigger(a),
                !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                    r && (e = document.querySelector(r)),
                    this._activate(this._element, t);
                    var l = function() {
                        var e = p.Event(ki.HIDDEN, {
                            relatedTarget: n._element
                        })
                          , t = p.Event(ki.SHOWN, {
                            relatedTarget: i
                        });
                        p(i).trigger(e),
                        p(n._element).trigger(t)
                    };
                    e ? this._activate(e, e.parentNode, l) : l()
                }
            }
        }
        ,
        e.dispose = function() {
            p.removeData(this._element, Si),
            this._element = null
        }
        ,
        e._activate = function(e, t, n) {
            var i = this
              , r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children(Ii) : p(t).find(Fi))[0]
              , s = n && r && p(r).hasClass(Di)
              , o = function() {
                return i._transitionComplete(e, r, n)
            };
            if (r && s) {
                var a = m.getTransitionDurationFromElement(r);
                p(r).removeClass(Li).one(m.TRANSITION_END, o).emulateTransitionEnd(a)
            } else
                o()
        }
        ,
        e._transitionComplete = function(e, t, n) {
            if (t) {
                p(t).removeClass(Oi);
                var i = p(t.parentNode).find(zi)[0];
                i && p(i).removeClass(Oi),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            if (p(e).addClass(Oi),
            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
            m.reflow(e),
            e.classList.contains(Di) && e.classList.add(Li),
            e.parentNode && p(e.parentNode).hasClass(Ai)) {
                var r = p(e).closest(Ni)[0];
                if (r) {
                    var s = [].slice.call(r.querySelectorAll(Bi));
                    p(s).addClass(Oi)
                }
                e.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this)
                  , t = e.data(Si);
                if (t || (t = new i(this),
                e.data(Si, t)),
                "string" == typeof n) {
                    if (void 0 === t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        o(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        i
    }();
    p(document).on(ki.CLICK_DATA_API, ji, function(e) {
        e.preventDefault(),
        Hi._jQueryInterface.call(p(this), "show")
    }),
    p.fn.tab = Hi._jQueryInterface,
    p.fn.tab.Constructor = Hi,
    p.fn.tab.noConflict = function() {
        return p.fn.tab = _i,
        Hi._jQueryInterface
    }
    ;
    var qi = "toast"
      , Ri = "bs.toast"
      , $i = "." + Ri
      , Wi = p.fn[qi]
      , Vi = {
        CLICK_DISMISS: "click.dismiss" + $i,
        HIDE: "hide" + $i,
        HIDDEN: "hidden" + $i,
        SHOW: "show" + $i,
        SHOWN: "shown" + $i
    }
      , Xi = "fade"
      , Yi = "hide"
      , Gi = "show"
      , Ui = "showing"
      , Qi = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Ki = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , Zi = '[data-dismiss="toast"]'
      , Ji = function() {
        function i(e, t) {
            this._element = e,
            this._config = this._getConfig(t),
            this._timeout = null,
            this._setListeners()
        }
        var e = i.prototype;
        return e.show = function() {
            var e = this;
            p(this._element).trigger(Vi.SHOW),
            this._config.animation && this._element.classList.add(Xi);
            var t = function() {
                e._element.classList.remove(Ui),
                e._element.classList.add(Gi),
                p(e._element).trigger(Vi.SHOWN),
                e._config.autohide && e.hide()
            };
            if (this._element.classList.remove(Yi),
            this._element.classList.add(Ui),
            this._config.animation) {
                var n = m.getTransitionDurationFromElement(this._element);
                p(this._element).one(m.TRANSITION_END, t).emulateTransitionEnd(n)
            } else
                t()
        }
        ,
        e.hide = function(e) {
            var t = this;
            this._element.classList.contains(Gi) && (p(this._element).trigger(Vi.HIDE),
            e ? this._close() : this._timeout = setTimeout(function() {
                t._close()
            }, this._config.delay))
        }
        ,
        e.dispose = function() {
            clearTimeout(this._timeout),
            this._timeout = null,
            this._element.classList.contains(Gi) && this._element.classList.remove(Gi),
            p(this._element).off(Vi.CLICK_DISMISS),
            p.removeData(this._element, Ri),
            this._element = null,
            this._config = null
        }
        ,
        e._getConfig = function(e) {
            return e = l({}, Ki, p(this._element).data(), "object" == typeof e && e ? e : {}),
            m.typeCheckConfig(qi, e, this.constructor.DefaultType),
            e
        }
        ,
        e._setListeners = function() {
            var e = this;
            p(this._element).on(Vi.CLICK_DISMISS, Zi, function() {
                return e.hide(!0)
            })
        }
        ,
        e._close = function() {
            var e = this
              , t = function() {
                e._element.classList.add(Yi),
                p(e._element).trigger(Vi.HIDDEN)
            };
            if (this._element.classList.remove(Gi),
            this._config.animation) {
                var n = m.getTransitionDurationFromElement(this._element);
                p(this._element).one(m.TRANSITION_END, t).emulateTransitionEnd(n)
            } else
                t()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this)
                  , t = e.data(Ri);
                if (t || (t = new i(this,"object" == typeof n && n),
                e.data(Ri, t)),
                "string" == typeof n) {
                    if (void 0 === t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n](this)
                }
            })
        }
        ,
        o(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Qi
            }
        }, {
            key: "Default",
            get: function() {
                return Ki
            }
        }]),
        i
    }();
    p.fn[qi] = Ji._jQueryInterface,
    p.fn[qi].Constructor = Ji,
    p.fn[qi].noConflict = function() {
        return p.fn[qi] = Wi,
        Ji._jQueryInterface
    }
    ,
    function() {
        if (void 0 === p)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = p.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0])
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(),
    e.Util = m,
    e.Alert = g,
    e.Button = D,
    e.Carousel = ae,
    e.Collapse = Ce,
    e.Dropdown = Ut,
    e.Modal = gn,
    e.Popover = ii,
    e.Scrollspy = Ci,
    e.Tab = Hi,
    e.Toast = Ji,
    e.Tooltip = $n,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof module && "object" == typeof module.exports ? exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    t.easing.jswing = t.easing.swing;
    var n = Math.pow
      , i = Math.sqrt
      , r = Math.sin
      , s = Math.cos
      , o = Math.PI
      , a = 1.70158
      , l = 2.5949095
      , u = 2 * o / 3
      , c = 2 * o / 4.5;
    function d(e) {
        var t = 7.5625;
        return e < 1 / 2.75 ? t * e * e : e < 2 / 2.75 ? t * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? t * (e -= 2.25 / 2.75) * e + .9375 : t * (e -= 2.625 / 2.75) * e + .984375
    }
    t.extend(t.easing, {
        def: "easeOutQuad",
        swing: function(e) {
            return t.easing[t.easing.def](e)
        },
        easeInQuad: function(e) {
            return e * e
        },
        easeOutQuad: function(e) {
            return 1 - (1 - e) * (1 - e)
        },
        easeInOutQuad: function(e) {
            return e < .5 ? 2 * e * e : 1 - n(-2 * e + 2, 2) / 2
        },
        easeInCubic: function(e) {
            return e * e * e
        },
        easeOutCubic: function(e) {
            return 1 - n(1 - e, 3)
        },
        easeInOutCubic: function(e) {
            return e < .5 ? 4 * e * e * e : 1 - n(-2 * e + 2, 3) / 2
        },
        easeInQuart: function(e) {
            return e * e * e * e
        },
        easeOutQuart: function(e) {
            return 1 - n(1 - e, 4)
        },
        easeInOutQuart: function(e) {
            return e < .5 ? 8 * e * e * e * e : 1 - n(-2 * e + 2, 4) / 2
        },
        easeInQuint: function(e) {
            return e * e * e * e * e
        },
        easeOutQuint: function(e) {
            return 1 - n(1 - e, 5)
        },
        easeInOutQuint: function(e) {
            return e < .5 ? 16 * e * e * e * e * e : 1 - n(-2 * e + 2, 5) / 2
        },
        easeInSine: function(e) {
            return 1 - s(e * o / 2)
        },
        easeOutSine: function(e) {
            return r(e * o / 2)
        },
        easeInOutSine: function(e) {
            return -(s(o * e) - 1) / 2
        },
        easeInExpo: function(e) {
            return 0 === e ? 0 : n(2, 10 * e - 10)
        },
        easeOutExpo: function(e) {
            return 1 === e ? 1 : 1 - n(2, -10 * e)
        },
        easeInOutExpo: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? n(2, 20 * e - 10) / 2 : (2 - n(2, -20 * e + 10)) / 2
        },
        easeInCirc: function(e) {
            return 1 - i(1 - n(e, 2))
        },
        easeOutCirc: function(e) {
            return i(1 - n(e - 1, 2))
        },
        easeInOutCirc: function(e) {
            return e < .5 ? (1 - i(1 - n(2 * e, 2))) / 2 : (i(1 - n(-2 * e + 2, 2)) + 1) / 2
        },
        easeInElastic: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : -n(2, 10 * e - 10) * r((10 * e - 10.75) * u)
        },
        easeOutElastic: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : n(2, -10 * e) * r((10 * e - .75) * u) + 1
        },
        easeInOutElastic: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -n(2, 20 * e - 10) * r((20 * e - 11.125) * c) / 2 : n(2, -20 * e + 10) * r((20 * e - 11.125) * c) / 2 + 1
        },
        easeInBack: function(e) {
            return 2.70158 * e * e * e - a * e * e
        },
        easeOutBack: function(e) {
            return 1 + 2.70158 * n(e - 1, 3) + a * n(e - 1, 2)
        },
        easeInOutBack: function(e) {
            return e < .5 ? n(2 * e, 2) * (7.189819 * e - l) / 2 : (n(2 * e - 2, 2) * ((l + 1) * (2 * e - 2) + l) + 2) / 2
        },
        easeInBounce: function(e) {
            return 1 - d(1 - e)
        },
        easeOutBounce: d,
        easeInOutBounce: function(e) {
            return e < .5 ? (1 - d(1 - 2 * e)) / 2 : (1 + d(2 * e - 1)) / 2
        }
    })
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    var n;
    c.extend(c.fn, {
        validate: function(e) {
            if (this.length) {
                var i = c.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"),
                i = new c.validator(e,this[0]),
                c.data(this[0], "validator", i),
                i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                    i.submitButton = e.currentTarget,
                    c(this).hasClass("cancel") && (i.cancelSubmit = !0),
                    void 0 !== c(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }),
                this.on("submit.validate", function(n) {
                    function e() {
                        var e, t;
                        return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (e = c("<input type='hidden'/>").attr("name", i.submitButton.name).val(c(i.submitButton).val()).appendTo(i.currentForm)),
                        !(i.settings.submitHandler && !i.settings.debug) || (t = i.settings.submitHandler.call(i, i.currentForm, n),
                        e && e.remove(),
                        void 0 !== t && t)
                    }
                    return i.settings.debug && n.preventDefault(),
                    i.cancelSubmit ? (i.cancelSubmit = !1,
                    e()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : e() : (i.focusInvalid(),
                    !1)
                })),
                i)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var e, t, n;
            return c(this[0]).is("form") ? e = this.validate().form() : (n = [],
            e = !0,
            t = c(this[0].form).validate(),
            this.each(function() {
                (e = t.element(this) && e) || (n = n.concat(t.errorList))
            }),
            t.errorList = n),
            e
        },
        rules: function(e, t) {
            var n, i, r, s, o, a, l = this[0], u = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != l && (!l.form && u && (l.form = this.closest("form")[0],
            l.name = this.attr("name")),
            null != l.form)) {
                if (e)
                    switch (i = (n = c.data(l.form, "validator").settings).rules,
                    r = c.validator.staticRules(l),
                    e) {
                    case "add":
                        c.extend(r, c.validator.normalizeRule(t)),
                        delete r.messages,
                        i[l.name] = r,
                        t.messages && (n.messages[l.name] = c.extend(n.messages[l.name], t.messages));
                        break;
                    case "remove":
                        return t ? (a = {},
                        c.each(t.split(/\s/), function(e, t) {
                            a[t] = r[t],
                            delete r[t]
                        }),
                        a) : (delete i[l.name],
                        r)
                    }
                return (s = c.validator.normalizeRules(c.extend({}, c.validator.classRules(l), c.validator.attributeRules(l), c.validator.dataRules(l), c.validator.staticRules(l)), l)).required && (o = s.required,
                delete s.required,
                s = c.extend({
                    required: o
                }, s)),
                s.remote && (o = s.remote,
                delete s.remote,
                s = c.extend(s, {
                    remote: o
                })),
                s
            }
        }
    }),
    c.extend(c.expr.pseudos || c.expr[":"], {
        blank: function(e) {
            return !c.trim("" + c(e).val())
        },
        filled: function(e) {
            var t = c(e).val();
            return null !== t && !!c.trim("" + t)
        },
        unchecked: function(e) {
            return !c(e).prop("checked")
        }
    }),
    c.validator = function(e, t) {
        this.settings = c.extend(!0, {}, c.validator.defaults, e),
        this.currentForm = t,
        this.init()
    }
    ,
    c.validator.format = function(n, e) {
        return 1 === arguments.length ? function() {
            var e = c.makeArray(arguments);
            return e.unshift(n),
            c.validator.format.apply(this, e)
        }
        : (void 0 === e || (2 < arguments.length && e.constructor !== Array && (e = c.makeArray(arguments).slice(1)),
        e.constructor !== Array && (e = [e]),
        c.each(e, function(e, t) {
            n = n.replace(new RegExp("\\{" + e + "\\}","g"), function() {
                return t
            })
        })),
        n)
    }
    ,
    c.extend(c.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: c([]),
            errorLabelContainer: c([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(e, t) {
                9 === t.which && "" === this.elementValue(e) || -1 !== c.inArray(t.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(e, t, n) {
                "radio" === e.type ? this.findByName(e.name).addClass(t).removeClass(n) : c(e).addClass(t).removeClass(n)
            },
            unhighlight: function(e, t, n) {
                "radio" === e.type ? this.findByName(e.name).removeClass(t).addClass(n) : c(e).removeClass(t).addClass(n)
            }
        },
        setDefaults: function(e) {
            c.extend(c.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: c.validator.format("Please enter no more than {0} characters."),
            minlength: c.validator.format("Please enter at least {0} characters."),
            rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
            range: c.validator.format("Please enter a value between {0} and {1}."),
            max: c.validator.format("Please enter a value less than or equal to {0}."),
            min: c.validator.format("Please enter a value greater than or equal to {0}."),
            step: c.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                this.labelContainer = c(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm),
                this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var n, s = this.currentForm, i = this.groups = {};
                function e(e) {
                    var t = void 0 !== c(this).attr("contenteditable") && "false" !== c(this).attr("contenteditable");
                    if (!this.form && t && (this.form = c(this).closest("form")[0],
                    this.name = c(this).attr("name")),
                    s === this.form) {
                        var n = c.data(this.form, "validator")
                          , i = "on" + e.type.replace(/^validate/, "")
                          , r = n.settings;
                        r[i] && !c(this).is(r.ignore) && r[i].call(n, this, e)
                    }
                }
                c.each(this.settings.groups, function(n, e) {
                    "string" == typeof e && (e = e.split(/\s/)),
                    c.each(e, function(e, t) {
                        i[t] = n
                    })
                }),
                n = this.settings.rules,
                c.each(n, function(e, t) {
                    n[e] = c.validator.normalizeRule(t)
                }),
                c(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e),
                this.settings.invalidHandler && c(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                c.extend(this.submitted, this.errorMap),
                this.invalid = c.extend({}, this.errorMap),
                this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)
                    this.check(t[e]);
                return this.valid()
            },
            element: function(e) {
                var t, n, i = this.clean(e), r = this.validationTargetFor(i), s = this, o = !0;
                return void 0 === r ? delete this.invalid[i.name] : (this.prepareElement(r),
                this.currentElements = c(r),
                (n = this.groups[r.name]) && c.each(this.groups, function(e, t) {
                    t === n && e !== r.name && (i = s.validationTargetFor(s.clean(s.findByName(e)))) && i.name in s.invalid && (s.currentElements.push(i),
                    o = s.check(i) && o)
                }),
                t = !1 !== this.check(r),
                o = o && t,
                this.invalid[r.name] = !t,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                c(e).attr("aria-invalid", !t)),
                o
            },
            showErrors: function(t) {
                if (t) {
                    var n = this;
                    c.extend(this.errorMap, t),
                    this.errorList = c.map(this.errorMap, function(e, t) {
                        return {
                            message: e,
                            element: n.findByName(t)[0]
                        }
                    }),
                    this.successList = c.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                c.fn.resetForm && c(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e)
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++)
                        this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""),
                        this.findByName(e[t].name).removeClass(this.settings.validClass);
                else
                    e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, n = 0;
                for (t in e)
                    void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""),
                this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === c.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var n = this
                  , i = {};
                return c(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var e = this.name || c(this).attr("name")
                      , t = void 0 !== c(this).attr("contenteditable") && "false" !== c(this).attr("contenteditable");
                    return !e && n.settings.debug && window.console && console.error("%o has no name assigned", this),
                    t && (this.form = c(this).closest("form")[0],
                    this.name = e),
                    this.form === n.currentForm && (!(e in i || !n.objectLength(c(this).rules())) && (i[e] = !0))
                })
            },
            clean: function(e) {
                return c(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return c(this.settings.errorElement + "." + e, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = c([]),
                this.toHide = c([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = c([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(),
                this.toHide = this.errorsFor(e)
            },
            elementValue: function(e) {
                var t, n, i = c(e), r = e.type, s = void 0 !== i.attr("contenteditable") && "false" !== i.attr("contenteditable");
                return "radio" === r || "checkbox" === r ? this.findByName(e.name).filter(":checked").val() : "number" === r && void 0 !== e.validity ? e.validity.badInput ? "NaN" : i.val() : (t = s ? i.text() : i.val(),
                "file" === r ? "C:\\fakepath\\" === t.substr(0, 12) ? t.substr(12) : 0 <= (n = t.lastIndexOf("/")) ? t.substr(n + 1) : 0 <= (n = t.lastIndexOf("\\")) ? t.substr(n + 1) : t : "string" == typeof t ? t.replace(/\r/g, "") : t)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var e, n, i, r, s = c(t).rules(), o = c.map(s, function(e, t) {
                    return t
                }).length, a = !1, l = this.elementValue(t);
                for (n in "function" == typeof s.normalizer ? r = s.normalizer : "function" == typeof this.settings.normalizer && (r = this.settings.normalizer),
                r && (l = r.call(t, l),
                delete s.normalizer),
                s) {
                    i = {
                        method: n,
                        parameters: s[n]
                    };
                    try {
                        if ("dependency-mismatch" === (e = c.validator.methods[n].call(this, l, t, i.parameters)) && 1 === o) {
                            a = !0;
                            continue
                        }
                        if (a = !1,
                        "pending" === e)
                            return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!e)
                            return this.formatAndAdd(t, i),
                            !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", e),
                        e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method."),
                        e
                    }
                }
                if (!a)
                    return this.objectLength(s) && this.successList.push(t),
                    !0
            },
            customDataMessage: function(e, t) {
                return c(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || c(e).data("msg")
            },
            customMessage: function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e])
                        return arguments[e]
            },
            defaultMessage: function(e, t) {
                "string" == typeof t && (t = {
                    method: t
                });
                var n = this.findDefined(this.customMessage(e.name, t.method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || void 0, c.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>")
                  , i = /\$?\{(\d+)\}/g;
                return "function" == typeof n ? n = n.call(this, t.parameters, e) : i.test(n) && (n = c.validator.format(n.replace(i, "{$1}"), t.parameters)),
                n
            },
            formatAndAdd: function(e, t) {
                var n = this.defaultMessage(e, t);
                this.errorList.push({
                    message: n,
                    element: e,
                    method: t.method
                }),
                this.errorMap[e.name] = n,
                this.submitted[e.name] = n
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))),
                e
            },
            defaultShowErrors: function() {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++)
                    n = this.errorList[e],
                    this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (e = 0; this.successList[e]; e++)
                        this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0,
                    t = this.validElements(); t[e]; e++)
                        this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return c(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, t) {
                var n, i, r, s, o = this.errorsFor(e), a = this.idOrName(e), l = c(e).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                o.html(t)) : (n = o = c("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(t || ""),
                this.settings.wrapper && (n = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, c(e)) : n.insertAfter(e),
                o.is("label") ? o.attr("for", a) : 0 === o.parents("label[for='" + this.escapeCssMeta(a) + "']").length && (r = o.attr("id"),
                l ? l.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (l += " " + r) : l = r,
                c(e).attr("aria-describedby", l),
                (i = this.groups[e.name]) && (s = this,
                c.each(s.groups, function(e, t) {
                    t === i && c("[name='" + s.escapeCssMeta(e) + "']", s.currentForm).attr("aria-describedby", o.attr("id"))
                })))),
                !t && this.settings.success && (o.text(""),
                "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)),
                this.toShow = this.toShow.add(o)
            },
            errorsFor: function(e) {
                var t = this.escapeCssMeta(this.idOrName(e))
                  , n = c(e).attr("aria-describedby")
                  , i = "label[for='" + t + "'], label[for='" + t + "'] *";
                return n && (i = i + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")),
                this.errors().filter(i)
            },
            escapeCssMeta: function(e) {
                return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name)),
                c(e).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(e) {
                return c(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
            },
            getLength: function(e, t) {
                switch (t.nodeName.toLowerCase()) {
                case "select":
                    return c("option:selected", t).length;
                case "input":
                    if (this.checkable(t))
                        return this.findByName(t.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                boolean: function(e) {
                    return e
                },
                string: function(e, t) {
                    return !!c(e, t.form).length
                },
                function: function(e, t) {
                    return e(t)
                }
            },
            optional: function(e) {
                var t = this.elementValue(e);
                return !c.validator.methods.required.call(this, t, e) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++,
                c(e).addClass(this.settings.pendingClass),
                this.pending[e.name] = !0)
            },
            stopRequest: function(e, t) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[e.name],
                c(e).removeClass(this.settings.pendingClass),
                t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (c(this.currentForm).submit(),
                this.submitButton && c("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(),
                this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (c(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(e, t) {
                return t = "string" == typeof t && t || "remote",
                c.data(e, "previousValue") || c.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, {
                        method: t
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                c(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, t) {
            e.constructor === String ? this.classRuleSettings[e] = t : c.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var t = {}
              , n = c(e).attr("class");
            return n && c.each(n.split(" "), function() {
                this in c.validator.classRuleSettings && c.extend(t, c.validator.classRuleSettings[this])
            }),
            t
        },
        normalizeAttributeRule: function(e, t, n, i) {
            /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i),
            isNaN(i) && (i = void 0)),
            i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
        },
        attributeRules: function(e) {
            var t, n, i = {}, r = c(e), s = e.getAttribute("type");
            for (t in c.validator.methods)
                n = "required" === t ? ("" === (n = e.getAttribute(t)) && (n = !0),
                !!n) : r.attr(t),
                this.normalizeAttributeRule(i, s, t, n);
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength,
            i
        },
        dataRules: function(e) {
            var t, n, i = {}, r = c(e), s = e.getAttribute("type");
            for (t in c.validator.methods)
                "" === (n = r.data("rule" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase())) && (n = !0),
                this.normalizeAttributeRule(i, s, t, n);
            return i
        },
        staticRules: function(e) {
            var t = {}
              , n = c.data(e.form, "validator");
            return n.settings.rules && (t = c.validator.normalizeRule(n.settings.rules[e.name]) || {}),
            t
        },
        normalizeRules: function(i, r) {
            return c.each(i, function(e, t) {
                if (!1 !== t) {
                    if (t.param || t.depends) {
                        var n = !0;
                        switch (typeof t.depends) {
                        case "string":
                            n = !!c(t.depends, r.form).length;
                            break;
                        case "function":
                            n = t.depends.call(r, r)
                        }
                        n ? i[e] = void 0 === t.param || t.param : (c.data(r.form, "validator").resetElements(c(r)),
                        delete i[e])
                    }
                } else
                    delete i[e]
            }),
            c.each(i, function(e, t) {
                i[e] = c.isFunction(t) && "normalizer" !== e ? t(r) : t
            }),
            c.each(["minlength", "maxlength"], function() {
                i[this] && (i[this] = Number(i[this]))
            }),
            c.each(["rangelength", "range"], function() {
                var e;
                i[this] && (c.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (e = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                i[this] = [Number(e[0]), Number(e[1])]))
            }),
            c.validator.autoCreateRanges && (null != i.min && null != i.max && (i.range = [i.min, i.max],
            delete i.min,
            delete i.max),
            null != i.minlength && null != i.maxlength && (i.rangelength = [i.minlength, i.maxlength],
            delete i.minlength,
            delete i.maxlength)),
            i
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var t = {};
                c.each(e.split(/\s/), function() {
                    t[this] = !0
                }),
                e = t
            }
            return e
        },
        addMethod: function(e, t, n) {
            c.validator.methods[e] = t,
            c.validator.messages[e] = void 0 !== n ? n : c.validator.messages[e],
            t.length < 3 && c.validator.addClassRules(e, c.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, t, n) {
                if (!this.depend(n, t))
                    return "dependency-mismatch";
                if ("select" !== t.nodeName.toLowerCase())
                    return this.checkable(t) ? 0 < this.getLength(e, t) : null != e && 0 < e.length;
                var i = c(t).val();
                return i && 0 < i.length
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
            },
            date: (n = !1,
            function(e, t) {
                return n || (n = !0,
                this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),
                this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            }
            ),
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            minlength: function(e, t, n) {
                var i = c.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || n <= i
            },
            maxlength: function(e, t, n) {
                var i = c.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i <= n
            },
            rangelength: function(e, t, n) {
                var i = c.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || i >= n[0] && i <= n[1]
            },
            min: function(e, t, n) {
                return this.optional(t) || n <= e
            },
            max: function(e, t, n) {
                return this.optional(t) || e <= n
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            step: function(e, t, n) {
                var i, r = c(t).attr("type"), s = "Step attribute on input type " + r + " is not supported.", o = new RegExp("\\b" + r + "\\b"), a = function(e) {
                    var t = ("" + e).match(/(?:\.(\d+))?$/);
                    return t && t[1] ? t[1].length : 0
                }, l = function(e) {
                    return Math.round(e * Math.pow(10, i))
                }, u = !0;
                if (r && !o.test(["text", "number", "range"].join()))
                    throw new Error(s);
                return i = a(n),
                (a(e) > i || l(e) % l(n) != 0) && (u = !1),
                this.optional(t) || u
            },
            equalTo: function(e, t, n) {
                var i = c(n);
                return this.settings.onfocusout && i.not(".validate-equalTo-blur").length && i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    c(t).valid()
                }),
                e === i.val()
            },
            remote: function(s, o, e, a) {
                if (this.optional(o))
                    return "dependency-mismatch";
                a = "string" == typeof a && a || "remote";
                var l, t, n, u = this.previousValue(o, a);
                return this.settings.messages[o.name] || (this.settings.messages[o.name] = {}),
                u.originalMessage = u.originalMessage || this.settings.messages[o.name][a],
                this.settings.messages[o.name][a] = u.message,
                e = "string" == typeof e && {
                    url: e
                } || e,
                n = c.param(c.extend({
                    data: s
                }, e.data)),
                u.old === n ? u.valid : (u.old = n,
                (l = this).startRequest(o),
                (t = {})[o.name] = s,
                c.ajax(c.extend(!0, {
                    mode: "abort",
                    port: "validate" + o.name,
                    dataType: "json",
                    data: t,
                    context: l.currentForm,
                    success: function(e) {
                        var t, n, i, r = !0 === e || "true" === e;
                        l.settings.messages[o.name][a] = u.originalMessage,
                        r ? (i = l.formSubmitted,
                        l.resetInternals(),
                        l.toHide = l.errorsFor(o),
                        l.formSubmitted = i,
                        l.successList.push(o),
                        l.invalid[o.name] = !1,
                        l.showErrors()) : (t = {},
                        n = e || l.defaultMessage(o, {
                            method: a,
                            parameters: s
                        }),
                        t[o.name] = u.message = n,
                        l.invalid[o.name] = !0,
                        l.showErrors(t)),
                        u.valid = r,
                        l.stopRequest(o, r)
                    }
                }, e)),
                "pending")
            }
        }
    });
    var i, r = {};
    return c.ajaxPrefilter ? c.ajaxPrefilter(function(e, t, n) {
        var i = e.port;
        "abort" === e.mode && (r[i] && r[i].abort(),
        r[i] = n)
    }) : (i = c.ajax,
    c.ajax = function(e) {
        var t = ("mode"in e ? e : c.ajaxSettings).mode
          , n = ("port"in e ? e : c.ajaxSettings).port;
        return "abort" === t ? (r[n] && r[n].abort(),
        r[n] = i.apply(this, arguments),
        r[n]) : i.apply(this, arguments)
    }
    ),
    c
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(n) {
        function i(e) {
            if (r[e])
                return r[e].exports;
            var t = r[e] = {
                exports: {},
                id: e,
                loaded: !1
            };
            return n[e].call(t.exports, t, t.exports, i),
            t.loaded = !0,
            t.exports
        }
        var r = {};
        return i.m = n,
        i.c = r,
        i.p = "dist/",
        i(0)
    }([function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
          , s = i((i(n(1)),
        n(6)))
          , o = i(n(7))
          , a = i(n(8))
          , l = i(n(9))
          , u = i(n(10))
          , c = i(n(11))
          , d = i(n(14))
          , h = []
          , f = !1
          , p = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1
        }
          , m = function() {
            if (0 < arguments.length && void 0 !== arguments[0] && arguments[0] && (f = !0),
            f)
                return h = (0,
                c.default)(h, p),
                (0,
                u.default)(h, p.once),
                h
        }
          , g = function() {
            h = (0,
            d.default)(),
            m()
        };
        e.exports = {
            init: function(e) {
                p = r(p, e),
                h = (0,
                d.default)();
                var t, n = document.all && !window.atob;
                return !0 === (t = p.disable) || "mobile" === t && l.default.mobile() || "phone" === t && l.default.phone() || "tablet" === t && l.default.tablet() || "function" == typeof t && !0 === t() || n ? void h.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"),
                    e.node.removeAttribute("data-aos-easing"),
                    e.node.removeAttribute("data-aos-duration"),
                    e.node.removeAttribute("data-aos-delay")
                }) : (p.disableMutationObserver || a.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),
                p.disableMutationObserver = !0),
                document.querySelector("body").setAttribute("data-aos-easing", p.easing),
                document.querySelector("body").setAttribute("data-aos-duration", p.duration),
                document.querySelector("body").setAttribute("data-aos-delay", p.delay),
                "DOMContentLoaded" === p.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? m(!0) : "load" === p.startEvent ? window.addEventListener(p.startEvent, function() {
                    m(!0)
                }) : document.addEventListener(p.startEvent, function() {
                    m(!0)
                }),
                window.addEventListener("resize", (0,
                o.default)(m, p.debounceDelay, !0)),
                window.addEventListener("orientationchange", (0,
                o.default)(m, p.debounceDelay, !0)),
                window.addEventListener("scroll", (0,
                s.default)(function() {
                    (0,
                    u.default)(h, p.once)
                }, p.throttleDelay)),
                p.disableMutationObserver || a.default.ready("[data-aos]", g),
                h)
            },
            refresh: m,
            refreshHard: g
        }
    }
    , function(e, t) {}
    , , , , , function(m, e) {
        (function(e) {
            "use strict";
            function s(i, r, e) {
                function s(e) {
                    var t = u
                      , n = c;
                    return u = c = void 0,
                    m = e,
                    h = i.apply(n, t)
                }
                function o(e) {
                    var t = e - p;
                    return void 0 === p || r <= t || t < 0 || v && d <= e - m
                }
                function a() {
                    var e, t, n = C();
                    return o(n) ? l(n) : void (f = setTimeout(a, (t = r - ((e = n) - p),
                    v ? E(t, d - (e - m)) : t)))
                }
                function l(e) {
                    return f = void 0,
                    n && u ? s(e) : (u = c = void 0,
                    h)
                }
                function t() {
                    var e, t = C(), n = o(t);
                    if (u = arguments,
                    c = this,
                    p = t,
                    n) {
                        if (void 0 === f)
                            return m = e = p,
                            f = setTimeout(a, r),
                            g ? s(e) : h;
                        if (v)
                            return f = setTimeout(a, r),
                            s(p)
                    }
                    return void 0 === f && (f = setTimeout(a, r)),
                    h
                }
                var u, c, d, h, f, p, m = 0, g = !1, v = !1, n = !0;
                if ("function" != typeof i)
                    throw new TypeError(w);
                return r = b(r) || 0,
                y(e) && (g = !!e.leading,
                d = (v = "maxWait"in e) ? x(b(e.maxWait) || 0, r) : d,
                n = "trailing"in e ? !!e.trailing : n),
                t.cancel = function() {
                    void 0 !== f && clearTimeout(f),
                    u = p = c = f = void (m = 0)
                }
                ,
                t.flush = function() {
                    return void 0 === f ? h : l(C())
                }
                ,
                t
            }
            function y(e) {
                var t = void 0 === e ? "undefined" : n(e);
                return !!e && ("object" == t || "function" == t)
            }
            function i(e) {
                return "symbol" == (void 0 === e ? "undefined" : n(e)) || !!(t = e) && "object" == (void 0 === t ? "undefined" : n(t)) && p.call(e) == o;
                var t
            }
            function b(e) {
                if ("number" == typeof e)
                    return e;
                if (i(e))
                    return r;
                if (y(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = y(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(a, "");
                var n = u.test(e);
                return n || c.test(e) ? d(e.slice(2), n ? 2 : 8) : l.test(e) ? r : +e
            }
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , w = "Expected a function"
              , r = NaN
              , o = "[object Symbol]"
              , a = /^\s+|\s+$/g
              , l = /^[-+]0x[0-9a-f]+$/i
              , u = /^0b[01]+$/i
              , c = /^0o[0-7]+$/i
              , d = parseInt
              , t = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e
              , h = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self
              , f = t || h || Function("return this")()
              , p = Object.prototype.toString
              , x = Math.max
              , E = Math.min
              , C = function() {
                return f.Date.now()
            };
            m.exports = function(e, t, n) {
                var i = !0
                  , r = !0;
                if ("function" != typeof e)
                    throw new TypeError(w);
                return y(n) && (i = "leading"in n ? !!n.leading : i,
                r = "trailing"in n ? !!n.trailing : r),
                s(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: r
                })
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(p, e) {
        (function(e) {
            "use strict";
            function y(e) {
                var t = void 0 === e ? "undefined" : n(e);
                return !!e && ("object" == t || "function" == t)
            }
            function i(e) {
                return "symbol" == (void 0 === e ? "undefined" : n(e)) || !!(t = e) && "object" == (void 0 === t ? "undefined" : n(t)) && f.call(e) == s;
                var t
            }
            function b(e) {
                if ("number" == typeof e)
                    return e;
                if (i(e))
                    return r;
                if (y(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = y(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(o, "");
                var n = l.test(e);
                return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : a.test(e) ? r : +e
            }
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , r = NaN
              , s = "[object Symbol]"
              , o = /^\s+|\s+$/g
              , a = /^[-+]0x[0-9a-f]+$/i
              , l = /^0b[01]+$/i
              , u = /^0o[0-7]+$/i
              , c = parseInt
              , t = "object" == (void 0 === e ? "undefined" : n(e)) && e && e.Object === Object && e
              , d = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self
              , h = t || d || Function("return this")()
              , f = Object.prototype.toString
              , w = Math.max
              , x = Math.min
              , E = function() {
                return h.Date.now()
            };
            p.exports = function(i, r, e) {
                function s(e) {
                    var t = u
                      , n = c;
                    return u = c = void 0,
                    m = e,
                    h = i.apply(n, t)
                }
                function o(e) {
                    var t = e - p;
                    return void 0 === p || r <= t || t < 0 || v && d <= e - m
                }
                function a() {
                    var e, t, n = E();
                    return o(n) ? l(n) : void (f = setTimeout(a, (t = r - ((e = n) - p),
                    v ? x(t, d - (e - m)) : t)))
                }
                function l(e) {
                    return f = void 0,
                    n && u ? s(e) : (u = c = void 0,
                    h)
                }
                function t() {
                    var e, t = E(), n = o(t);
                    if (u = arguments,
                    c = this,
                    p = t,
                    n) {
                        if (void 0 === f)
                            return m = e = p,
                            f = setTimeout(a, r),
                            g ? s(e) : h;
                        if (v)
                            return f = setTimeout(a, r),
                            s(p)
                    }
                    return void 0 === f && (f = setTimeout(a, r)),
                    h
                }
                var u, c, d, h, f, p, m = 0, g = !1, v = !1, n = !0;
                if ("function" != typeof i)
                    throw new TypeError("Expected a function");
                return r = b(r) || 0,
                y(e) && (g = !!e.leading,
                d = (v = "maxWait"in e) ? w(b(e.maxWait) || 0, r) : d,
                n = "trailing"in e ? !!e.trailing : n),
                t.cancel = function() {
                    void 0 !== f && clearTimeout(f),
                    u = p = c = f = void (m = 0)
                }
                ,
                t.flush = function() {
                    return void 0 === f ? h : l(E())
                }
                ,
                t
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(e, t) {
        "use strict";
        function r() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }
        function s(e) {
            e && e.forEach(function(e) {
                var t = Array.prototype.slice.call(e.addedNodes)
                  , n = Array.prototype.slice.call(e.removedNodes);
                if (function e(t) {
                    var n = void 0
                      , i = void 0;
                    for (n = 0; n < t.length; n += 1) {
                        if ((i = t[n]).dataset && i.dataset.aos)
                            return !0;
                        if (i.children && e(i.children))
                            return !0
                    }
                    return !1
                }(t.concat(n)))
                    return o()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {};
        t.default = {
            isSupported: function() {
                return !!r()
            },
            ready: function(e, t) {
                var n = window.document
                  , i = new (r())(s);
                o = t,
                i.observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }
        }
    }
    , function(e, t) {
        "use strict";
        function n() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                return t && i(e.prototype, t),
                n && i(e, n),
                e
            }
        }()
          , r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
          , s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
          , o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
          , a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
          , l = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, [{
                key: "phone",
                value: function() {
                    var e = n();
                    return !(!r.test(e) && !s.test(e.substr(0, 4)))
                }
            }, {
                key: "mobile",
                value: function() {
                    var e = n();
                    return !(!o.test(e) && !a.test(e.substr(0, 4)))
                }
            }, {
                key: "tablet",
                value: function() {
                    return this.mobile() && !this.phone()
                }
            }]),
            e
        }();
        t.default = new l
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e, o) {
            var a = window.pageYOffset
              , l = window.innerHeight;
            e.forEach(function(e, t) {
                var n, i, r, s;
                i = l + a,
                r = o,
                s = (n = e).node.getAttribute("data-aos-once"),
                i > n.position ? n.node.classList.add("aos-animate") : void 0 !== s && ("false" === s || !r && "true" !== s) && n.node.classList.remove("aos-animate")
            })
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, r = n(12), s = (i = r) && i.__esModule ? i : {
            default: i
        };
        t.default = function(e, n) {
            return e.forEach(function(e, t) {
                e.node.classList.add("aos-init"),
                e.position = (0,
                s.default)(e.node, n.offset)
            }),
            e
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, r = n(13), o = (i = r) && i.__esModule ? i : {
            default: i
        };
        t.default = function(e, t) {
            var n = 0
              , i = 0
              , r = window.innerHeight
              , s = {
                offset: e.getAttribute("data-aos-offset"),
                anchor: e.getAttribute("data-aos-anchor"),
                anchorPlacement: e.getAttribute("data-aos-anchor-placement")
            };
            switch (s.offset && !isNaN(s.offset) && (i = parseInt(s.offset)),
            s.anchor && document.querySelectorAll(s.anchor) && (e = document.querySelectorAll(s.anchor)[0]),
            n = (0,
            o.default)(e).top,
            s.anchorPlacement) {
            case "top-bottom":
                break;
            case "center-bottom":
                n += e.offsetHeight / 2;
                break;
            case "bottom-bottom":
                n += e.offsetHeight;
                break;
            case "top-center":
                n += r / 2;
                break;
            case "bottom-center":
                n += r / 2 + e.offsetHeight;
                break;
            case "center-center":
                n += r / 2 + e.offsetHeight / 2;
                break;
            case "top-top":
                n += r;
                break;
            case "bottom-top":
                n += e.offsetHeight + r;
                break;
            case "center-top":
                n += e.offsetHeight / 2 + r
            }
            return s.anchorPlacement || s.offset || isNaN(t) || (i = t),
            n + i
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0),
                n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0),
                e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            return e = e || document.querySelectorAll("[data-aos]"),
            Array.prototype.map.call(e, function(e) {
                return {
                    node: e
                }
            })
        }
    }
    ])
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.counterUp = t() : e.counterUp = t()
}(window, function() {
    return function(n) {
        var i = {};
        function r(e) {
            if (i[e])
                return i[e].exports;
            var t = i[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return n[e].call(t.exports, t, t.exports, r),
            t.l = !0,
            t.exports
        }
        return r.m = n,
        r.c = i,
        r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        r.t = function(t, e) {
            if (1 & e && (t = r(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (r.r(n),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var i in t)
                    r.d(n, i, function(e) {
                        return t[e]
                    }
                    .bind(null, i));
            return n
        }
        ,
        r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return r.d(t, "a", t),
            t
        }
        ,
        r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        r.p = "",
        r(r.s = 0)
    }([function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "divideNumbers", function() {
            return h
        }),
        n.d(t, "hasComma", function() {
            return i
        }),
        n.d(t, "isFloat", function() {
            return r
        }),
        n.d(t, "decimalPlaces", function() {
            return s
        }),
        t.default = function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
              , n = e.action
              , i = void 0 === n ? "start" : n
              , r = e.duration
              , s = void 0 === r ? 1e3 : r
              , o = e.delay
              , a = void 0 === o ? 16 : o
              , l = e.lang
              , u = void 0 === l ? void 0 : l;
            if ("stop" !== i) {
                if (d(t),
                /[0-9]/.test(t.innerHTML)) {
                    var c = h(t.innerHTML, {
                        duration: s || t.getAttribute("data-duration"),
                        lang: u || document.querySelector("html").getAttribute("lang") || void 0,
                        delay: a || t.getAttribute("data-delay")
                    });
                    t._countUpOrigInnerHTML = t.innerHTML,
                    t.innerHTML = c[0],
                    t.style.visibility = "visible",
                    t.countUpTimeout = setTimeout(function e() {
                        t.innerHTML = c.shift(),
                        c.length ? (clearTimeout(t.countUpTimeout),
                        t.countUpTimeout = setTimeout(e, a)) : t._countUpOrigInnerHTML = void 0
                    }, a)
                }
            } else
                d(t)
        }
        ;
        var d = function(e) {
            clearTimeout(e.countUpTimeout),
            e._countUpOrigInnerHTML && (e.innerHTML = e._countUpOrigInnerHTML,
            e._countUpOrigInnerHTML = void 0),
            e.style.visibility = ""
        }
          , h = function(e) {
            for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = t.duration, i = void 0 === n ? 1e3 : n, r = t.delay, s = void 0 === r ? 16 : r, o = t.lang, a = void 0 === o ? void 0 : o, l = i / s, u = e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/), c = [], d = 0; d < l; d++)
                c.push("");
            for (var h = 0; h < u.length; h++)
                if (/([0-9.][,.0-9]*[0-9]*)/.test(u[h]) && !/<[^>]+>/.test(u[h])) {
                    var f = u[h]
                      , p = /[0-9]+,[0-9]+/.test(f);
                    f = f.replace(/,/g, "");
                    for (var m = /^[0-9]+\.[0-9]+$/.test(f), g = m ? (f.split(".")[1] || []).length : 0, v = c.length - 1, y = l; 1 <= y; y--) {
                        var b = parseInt(f / l * y, 10);
                        m && (b = parseFloat(f / l * y).toFixed(g),
                        b = parseFloat(b).toLocaleString(a)),
                        p && (b = b.toLocaleString(a)),
                        c[v--] += b
                    }
                } else
                    for (var w = 0; w < l; w++)
                        c[w] += u[h];
            return c[c.length] = e.toString(),
            c
        }
          , i = function(e) {
            return /[0-9]+,[0-9]+/.test(e)
        }
          , r = function(e) {
            return /^[0-9]+\.[0-9]+$/.test(e)
        }
          , s = function(e) {
            return r(e) ? (e.split(".")[1] || []).length : 0
        }
    }
    ])
}),
function() {
    var l, e, o, u, A, r, c, h, i, f, n, t, p, O, s, a, d, m, g, v = [].slice;
    l = /^\(?([^)]*)\)?(?:(.)(d+))?$/,
    t = document.createElement("div").style,
    u = null != t.transition || null != t.webkitTransition || null != t.mozTransition || null != t.oTransition,
    f = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
    e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
    r = function(e) {
        var t;
        return (t = document.createElement("div")).innerHTML = e,
        t.children[0]
    }
    ,
    i = function(e, t) {
        return e.className = e.className.replace(new RegExp("(^| )" + t.split(" ").join("|") + "( |$)","gi"), " ")
    }
    ,
    A = function(e, t) {
        return i(e, t),
        e.className += " " + t
    }
    ,
    p = function(e, t) {
        var n;
        if (null != document.createEvent)
            return (n = document.createEvent("HTMLEvents")).initEvent(t, !0, !0),
            e.dispatchEvent(n)
    }
    ,
    h = function() {
        var e, t;
        return null != (e = null != (t = window.performance) && "function" == typeof t.now ? t.now() : void 0) ? e : +new Date
    }
    ,
    n = function(e, t) {
        return null == t && (t = 0),
        t ? (e *= Math.pow(10, t),
        e += .5,
        (e = Math.floor(e)) / Math.pow(10, t)) : Math.round(e)
    }
    ,
    O = function(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e)
    }
    ,
    a = !(c = function(e) {
        return e - n(e)
    }
    ),
    (s = function() {
        var e, t, n, i, r;
        if (!a && null != window.jQuery) {
            for (a = !0,
            r = [],
            t = 0,
            n = (i = ["html", "text"]).length; t < n; t++)
                e = i[t],
                r.push(function(e) {
                    var n;
                    return n = window.jQuery.fn[e],
                    window.jQuery.fn[e] = function(e) {
                        var t;
                        return null == e || null == (null != (t = this[0]) ? t.odometer : void 0) ? n.apply(this, arguments) : this[0].odometer.update(e)
                    }
                }(e));
            return r
        }
    }
    )(),
    setTimeout(s, 0),
    (o = function() {
        function d(e) {
            var t, n, i, r, s, o, a, l, u, c = this;
            if (this.options = e,
            this.el = this.options.el,
            null != this.el.odometer)
                return this.el.odometer;
            for (t in this.el.odometer = this,
            a = d.options)
                i = a[t],
                null == this.options[t] && (this.options[t] = i);
            null == (r = this.options).duration && (r.duration = 2e3),
            this.MAX_VALUES = this.options.duration / (1e3 / 30) / 2 | 0,
            this.resetFormat(),
            this.value = this.cleanValue(null != (l = this.options.value) ? l : ""),
            this.renderInside(),
            this.render();
            try {
                for (s = 0,
                o = (u = ["innerHTML", "innerText", "textContent"]).length; s < o; s++)
                    n = u[s],
                    null != this.el[n] && function(t) {
                        Object.defineProperty(c.el, t, {
                            get: function() {
                                var e;
                                return "innerHTML" === t ? c.inside.outerHTML : null != (e = c.inside.innerText) ? e : c.inside.textContent
                            },
                            set: function(e) {
                                return c.update(e)
                            }
                        })
                    }(n)
            } catch (e) {
                e,
                this.watchForMutations()
            }
        }
        return d.prototype.renderInside = function() {
            return this.inside = document.createElement("div"),
            this.inside.className = "odometer-inside",
            this.el.innerHTML = "",
            this.el.appendChild(this.inside)
        }
        ,
        d.prototype.watchForMutations = function() {
            var n = this;
            if (null != e)
                try {
                    return null == this.observer && (this.observer = new e(function(e) {
                        var t;
                        return t = n.el.innerText,
                        n.renderInside(),
                        n.render(n.value),
                        n.update(t)
                    }
                    )),
                    this.watchMutations = !0,
                    this.startWatchingMutations()
                } catch (e) {
                    e
                }
        }
        ,
        d.prototype.startWatchingMutations = function() {
            if (this.watchMutations)
                return this.observer.observe(this.el, {
                    childList: !0
                })
        }
        ,
        d.prototype.stopWatchingMutations = function() {
            var e;
            return null != (e = this.observer) ? e.disconnect() : void 0
        }
        ,
        d.prototype.cleanValue = function(e) {
            var t;
            return "string" == typeof e && (e = (e = (e = e.replace(null != (t = this.format.radix) ? t : ".", "<radix>")).replace(/[.,]/g, "")).replace("<radix>", "."),
            e = parseFloat(e, 10) || 0),
            n(e, this.format.precision)
        }
        ,
        d.prototype.bindTransitionEnd = function() {
            var e, t, n, i, r, s, o = this;
            if (!this.transitionEndBound) {
                for (this.transitionEndBound = !0,
                t = !1,
                s = [],
                n = 0,
                i = (r = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd".split(" ")).length; n < i; n++)
                    e = r[n],
                    s.push(this.el.addEventListener(e, function() {
                        return t || (t = !0,
                        setTimeout(function() {
                            return o.render(),
                            t = !1,
                            p(o.el, "odometerdone")
                        }, 0)),
                        !0
                    }, !1));
                return s
            }
        }
        ,
        d.prototype.resetFormat = function() {
            var e, t, n, i, r, s, o, a;
            if ((e = null != (o = this.options.format) ? o : "(,ddd).dd") || (e = "d"),
            !(n = l.exec(e)))
                throw new Error("Odometer: Unparsable digit format");
            return s = (a = n.slice(1, 4))[0],
            r = a[1],
            i = (null != (t = a[2]) ? t.length : void 0) || 0,
            this.format = {
                repeating: s,
                radix: r,
                precision: i
            }
        }
        ,
        d.prototype.render = function(e) {
            var t, n, i, r, s, o, a;
            for (null == e && (e = this.value),
            this.stopWatchingMutations(),
            this.resetFormat(),
            this.inside.innerHTML = "",
            s = this.options.theme,
            r = [],
            o = 0,
            a = (t = this.el.className.split(" ")).length; o < a; o++)
                (n = t[o]).length && ((i = /^odometer-theme-(.+)$/.exec(n)) ? s = i[1] : /^odometer(-|$)/.test(n) || r.push(n));
            return r.push("odometer"),
            u || r.push("odometer-no-transitions"),
            s ? r.push("odometer-theme-" + s) : r.push("odometer-auto-theme"),
            this.el.className = r.join(" "),
            this.ribbons = {},
            this.formatDigits(e),
            this.startWatchingMutations()
        }
        ,
        d.prototype.formatDigits = function(e) {
            var t, n, i, r, s, o, a, l, u;
            if (this.digits = [],
            this.options.formatFunction)
                for (r = 0,
                o = (l = this.options.formatFunction(e).split("").reverse()).length; r < o; r++)
                    (n = l[r]).match(/0-9/) ? ((t = this.renderDigit()).querySelector(".odometer-value").innerHTML = n,
                    this.digits.push(t),
                    this.insertDigit(t)) : this.addSpacer(n);
            else
                for (i = !this.format.precision || !c(e) || !1,
                s = 0,
                a = (u = e.toString().split("").reverse()).length; s < a; s++)
                    "." === (t = u[s]) && (i = !0),
                    this.addDigit(t, i)
        }
        ,
        d.prototype.update = function(e) {
            var t, n = this;
            if (t = (e = this.cleanValue(e)) - this.value)
                return i(this.el, "odometer-animating-up odometer-animating-down odometer-animating"),
                A(this.el, 0 < t ? "odometer-animating-up" : "odometer-animating-down"),
                this.stopWatchingMutations(),
                this.animate(e),
                this.startWatchingMutations(),
                setTimeout(function() {
                    return n.el.offsetHeight,
                    A(n.el, "odometer-animating")
                }, 0),
                this.value = e
        }
        ,
        d.prototype.renderDigit = function() {
            return r('<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value"></span></span></span></span></span>')
        }
        ,
        d.prototype.insertDigit = function(e, t) {
            return null != t ? this.inside.insertBefore(e, t) : this.inside.children.length ? this.inside.insertBefore(e, this.inside.children[0]) : this.inside.appendChild(e)
        }
        ,
        d.prototype.addSpacer = function(e, t, n) {
            var i;
            return (i = r('<span class="odometer-formatting-mark"></span>')).innerHTML = e,
            n && A(i, n),
            this.insertDigit(i, t)
        }
        ,
        d.prototype.addDigit = function(e, t) {
            var n, i, r, s;
            if (null == t && (t = !0),
            "-" === e)
                return this.addSpacer(e, null, "odometer-negation-mark");
            if ("." === e)
                return this.addSpacer(null != (s = this.format.radix) ? s : ".", null, "odometer-radix-mark");
            if (t)
                for (r = !1; ; ) {
                    if (!this.format.repeating.length) {
                        if (r)
                            throw new Error("Bad odometer format without digits");
                        this.resetFormat(),
                        r = !0
                    }
                    if (n = this.format.repeating[this.format.repeating.length - 1],
                    this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1),
                    "d" === n)
                        break;
                    this.addSpacer(n)
                }
            return (i = this.renderDigit()).querySelector(".odometer-value").innerHTML = e,
            this.digits.push(i),
            this.insertDigit(i)
        }
        ,
        d.prototype.animate = function(e) {
            return u && "count" !== this.options.animation ? this.animateSlide(e) : this.animateCount(e)
        }
        ,
        d.prototype.animateCount = function(n) {
            var i, r, s, o, a, l = this;
            if (r = +n - this.value)
                return o = s = h(),
                i = this.value,
                (a = function() {
                    var e, t;
                    return h() - o > l.options.duration ? (l.value = n,
                    l.render(),
                    void p(l.el, "odometerdone")) : (50 < (e = h() - s) && (s = h(),
                    t = e / l.options.duration,
                    i += r * t,
                    l.render(Math.round(i))),
                    null != f ? f(a) : setTimeout(a, 50))
                }
                )()
        }
        ,
        d.prototype.getDigitCount = function() {
            var e, t, n, i, r, s;
            for (e = r = 0,
            s = (i = 1 <= arguments.length ? v.call(arguments, 0) : []).length; r < s; e = ++r)
                n = i[e],
                i[e] = Math.abs(n);
            return t = Math.max.apply(Math, i),
            Math.ceil(Math.log(t + 1) / Math.log(10))
        }
        ,
        d.prototype.getFractionalDigitCount = function() {
            var e, t, n, i, r, s, o;
            for (t = /^\-?\d*\.(\d*?)0*$/,
            e = s = 0,
            o = (r = 1 <= arguments.length ? v.call(arguments, 0) : []).length; s < o; e = ++s)
                i = r[e],
                r[e] = i.toString(),
                n = t.exec(r[e]),
                r[e] = null == n ? 0 : n[1].length;
            return Math.max.apply(Math, r)
        }
        ,
        d.prototype.resetDigits = function() {
            return this.digits = [],
            this.ribbons = [],
            this.inside.innerHTML = "",
            this.resetFormat()
        }
        ,
        d.prototype.animateSlide = function(e) {
            var t, n, i, r, s, o, a, l, u, c, d, h, f, p, m, g, v, y, b, w, x, E, C, S, T, _, k;
            if (g = this.value,
            (l = this.getFractionalDigitCount(g, e)) && (e *= Math.pow(10, l),
            g *= Math.pow(10, l)),
            i = e - g) {
                for (this.bindTransitionEnd(),
                r = this.getDigitCount(g, e),
                s = [],
                d = b = t = 0; 0 <= r ? b < r : r < b; d = 0 <= r ? ++b : --b) {
                    if (v = O(g / Math.pow(10, r - d - 1)),
                    o = (a = O(e / Math.pow(10, r - d - 1))) - v,
                    Math.abs(o) > this.MAX_VALUES) {
                        for (c = [],
                        h = o / (this.MAX_VALUES + this.MAX_VALUES * t * .5),
                        n = v; 0 < o && n < a || o < 0 && a < n; )
                            c.push(Math.round(n)),
                            n += h;
                        c[c.length - 1] !== a && c.push(a),
                        t++
                    } else
                        c = function() {
                            k = [];
                            for (var e = v; v <= a ? e <= a : a <= e; v <= a ? e++ : e--)
                                k.push(e);
                            return k
                        }
                        .apply(this);
                    for (d = w = 0,
                    E = c.length; w < E; d = ++w)
                        u = c[d],
                        c[d] = Math.abs(u % 10);
                    s.push(c)
                }
                for (this.resetDigits(),
                d = x = 0,
                C = (_ = s.reverse()).length; x < C; d = ++x)
                    for (c = _[d],
                    this.digits[d] || this.addDigit(" ", l <= d),
                    null == (y = this.ribbons)[d] && (y[d] = this.digits[d].querySelector(".odometer-ribbon-inner")),
                    this.ribbons[d].innerHTML = "",
                    i < 0 && (c = c.reverse()),
                    f = T = 0,
                    S = c.length; T < S; f = ++T)
                        u = c[f],
                        (m = document.createElement("div")).className = "odometer-value",
                        m.innerHTML = u,
                        this.ribbons[d].appendChild(m),
                        f === c.length - 1 && A(m, "odometer-last-value"),
                        0 === f && A(m, "odometer-first-value");
                return v < 0 && this.addDigit("-"),
                null != (p = this.inside.querySelector(".odometer-radix-mark")) && p.parent.removeChild(p),
                l ? this.addSpacer(this.format.radix, this.digits[l - 1], "odometer-radix-mark") : void 0
            }
        }
        ,
        d
    }()).options = null != (m = window.odometerOptions) ? m : {},
    setTimeout(function() {
        var e, t, n, i, r;
        if (window.odometerOptions) {
            for (e in r = [],
            i = window.odometerOptions)
                t = i[e],
                r.push(null != (n = o.options)[e] ? (n = o.options)[e] : n[e] = t);
            return r
        }
    }, 0),
    o.init = function() {
        var e, t, n, i, r, s;
        if (null != document.querySelectorAll) {
            for (s = [],
            n = 0,
            i = (t = document.querySelectorAll(o.options.selector || ".odometer")).length; n < i; n++)
                e = t[n],
                s.push(e.odometer = new o({
                    el: e,
                    value: null != (r = e.innerText) ? r : e.textContent
                }));
            return s
        }
    }
    ,
    null != (null != (g = document.documentElement) ? g.doScroll : void 0) && null != document.createEventObject ? (d = document.onreadystatechange,
    document.onreadystatechange = function() {
        return "complete" === document.readyState && !1 !== o.options.auto && o.init(),
        null != d ? d.apply(this, arguments) : void 0
    }
    ) : document.addEventListener("DOMContentLoaded", function() {
        if (!1 !== o.options.auto)
            return o.init()
    }, !1),
    "function" == typeof define && define.amd ? define([], function() {
        return o
    }) : "undefined" != typeof exports && null !== exports ? module.exports = o : window.Odometer = o
}
.call(this),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";
    var m = "undefined" == typeof document ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document
      , J = "undefined" == typeof window ? {
        document: m,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
    } : window
      , l = function(e) {
        for (var t = 0; t < e.length; t += 1)
            this[t] = e[t];
        return this.length = e.length,
        this
    };
    function D(e, t) {
        var n = []
          , i = 0;
        if (e && !t && e instanceof l)
            return e;
        if (e)
            if ("string" == typeof e) {
                var r, s, o = e.trim();
                if (0 <= o.indexOf("<") && 0 <= o.indexOf(">")) {
                    var a = "div";
                    for (0 === o.indexOf("<li") && (a = "ul"),
                    0 === o.indexOf("<tr") && (a = "tbody"),
                    0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (a = "tr"),
                    0 === o.indexOf("<tbody") && (a = "table"),
                    0 === o.indexOf("<option") && (a = "select"),
                    (s = m.createElement(a)).innerHTML = o,
                    i = 0; i < s.childNodes.length; i += 1)
                        n.push(s.childNodes[i])
                } else
                    for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || m).querySelectorAll(e.trim()) : [m.getElementById(e.trim().split("#")[1])],
                    i = 0; i < r.length; i += 1)
                        r[i] && n.push(r[i])
            } else if (e.nodeType || e === J || e === m)
                n.push(e);
            else if (0 < e.length && e[0].nodeType)
                for (i = 0; i < e.length; i += 1)
                    n.push(e[i]);
        return new l(n)
    }
    function s(e) {
        for (var t = [], n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
        return t
    }
    D.fn = l.prototype,
    D.Class = l,
    D.Dom7 = l;
    var t = {
        addClass: function(e) {
            if (void 0 === e)
                return this;
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[n]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[n]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), n = 0; n < t.length; n += 1)
                for (var i = 0; i < this.length; i += 1)
                    void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[n]);
            return this
        },
        attr: function(e, t) {
            var n = arguments;
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === n.length)
                    this[i].setAttribute(e, t);
                else
                    for (var r in e)
                        this[i][r] = e[r],
                        this[i].setAttribute(r, e[r]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var n;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)
                    (n = this[i]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}),
                    n.dom7ElementDataStorage[e] = t;
                return this
            }
            if (n = this[0]) {
                if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage)
                    return n.dom7ElementDataStorage[e];
                var r = n.getAttribute("data-" + e);
                return r || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var n = this[t].style;
                n.webkitTransform = e,
                n.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var n = this[t].style;
                n.webkitTransitionDuration = e,
                n.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], n = arguments.length; n--; )
                t[n] = arguments[n];
            var i = t[0]
              , s = t[1]
              , o = t[2]
              , r = t[3];
            function a(e) {
                var t = e.target;
                if (t) {
                    var n = e.target.dom7EventData || [];
                    if (n.indexOf(e) < 0 && n.unshift(e),
                    D(t).is(s))
                        o.apply(t, n);
                    else
                        for (var i = D(t).parents(), r = 0; r < i.length; r += 1)
                            D(i[r]).is(s) && o.apply(i[r], n)
                }
            }
            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                o.apply(this, t)
            }
            "function" == typeof t[1] && (i = (e = t)[0],
            o = e[1],
            r = e[2],
            s = void 0),
            r || (r = !1);
            for (var u, c = i.split(" "), d = 0; d < this.length; d += 1) {
                var h = this[d];
                if (s)
                    for (u = 0; u < c.length; u += 1) {
                        var f = c[u];
                        h.dom7LiveListeners || (h.dom7LiveListeners = {}),
                        h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []),
                        h.dom7LiveListeners[f].push({
                            listener: o,
                            proxyListener: a
                        }),
                        h.addEventListener(f, a, r)
                    }
                else
                    for (u = 0; u < c.length; u += 1) {
                        var p = c[u];
                        h.dom7Listeners || (h.dom7Listeners = {}),
                        h.dom7Listeners[p] || (h.dom7Listeners[p] = []),
                        h.dom7Listeners[p].push({
                            listener: o,
                            proxyListener: l
                        }),
                        h.addEventListener(p, l, r)
                    }
            }
            return this
        },
        off: function() {
            for (var e, t = [], n = arguments.length; n--; )
                t[n] = arguments[n];
            var i = t[0]
              , r = t[1]
              , s = t[2]
              , o = t[3];
            "function" == typeof t[1] && (i = (e = t)[0],
            s = e[1],
            o = e[2],
            r = void 0),
            o || (o = !1);
            for (var a = i.split(" "), l = 0; l < a.length; l += 1)
                for (var u = a[l], c = 0; c < this.length; c += 1) {
                    var d = this[c]
                      , h = void 0;
                    if (!r && d.dom7Listeners ? h = d.dom7Listeners[u] : r && d.dom7LiveListeners && (h = d.dom7LiveListeners[u]),
                    h && h.length)
                        for (var f = h.length - 1; 0 <= f; f -= 1) {
                            var p = h[f];
                            s && p.listener === s ? (d.removeEventListener(u, p.proxyListener, o),
                            h.splice(f, 1)) : s || (d.removeEventListener(u, p.proxyListener, o),
                            h.splice(f, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var n = e[0].split(" "), i = e[1], r = 0; r < n.length; r += 1)
                for (var s = n[r], o = 0; o < this.length; o += 1) {
                    var a = this[o]
                      , l = void 0;
                    try {
                        l = new J.CustomEvent(s,{
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (l = m.createEvent("Event")).initEvent(s, !0, !0),
                        l.detail = i
                    }
                    a.dom7EventData = e.filter(function(e, t) {
                        return 0 < t
                    }),
                    a.dispatchEvent(l),
                    a.dom7EventData = [],
                    delete a.dom7EventData
                }
            return this
        },
        transitionEnd: function(t) {
            var n, i = ["webkitTransitionEnd", "transitionend"], r = this;
            function s(e) {
                if (e.target === this)
                    for (t.call(this, e),
                    n = 0; n < i.length; n += 1)
                        r.off(i[n], s)
            }
            if (t)
                for (n = 0; n < i.length; n += 1)
                    r.on(i[n], s);
            return this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0]
                  , t = e.getBoundingClientRect()
                  , n = m.body
                  , i = e.clientTop || n.clientTop || 0
                  , r = e.clientLeft || n.clientLeft || 0
                  , s = e === J ? J.scrollY : e.scrollTop
                  , o = e === J ? J.scrollX : e.scrollLeft;
                return {
                    top: t.top + s - i,
                    left: t.left + o - r
                }
            }
            return null
        },
        css: function(e, t) {
            var n;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (n = 0; n < this.length; n += 1)
                        for (var i in e)
                            this[n].style[i] = e[i];
                    return this
                }
                if (this[0])
                    return J.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e)
                return this;
            for (n = 0; n < this.length; n += 1)
                this[n].style[e] = t;
            return this
        },
        each: function(e) {
            if (!e)
                return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t]))
                    return this;
            return this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, n, i = this[0];
            if (!i || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (i.matches)
                    return i.matches(e);
                if (i.webkitMatchesSelector)
                    return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector)
                    return i.msMatchesSelector(e);
                for (t = D(e),
                n = 0; n < t.length; n += 1)
                    if (t[n] === i)
                        return !0;
                return !1
            }
            if (e === m)
                return i === m;
            if (e === J)
                return i === J;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e,
                n = 0; n < t.length; n += 1)
                    if (t[n] === i)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t, n = this.length;
            return new l(n - 1 < e ? [] : e < 0 ? (t = n + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], n = arguments.length; n--; )
                t[n] = arguments[n];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var r = 0; r < this.length; r += 1)
                    if ("string" == typeof e) {
                        var s = m.createElement("div");
                        for (s.innerHTML = e; s.firstChild; )
                            this[r].appendChild(s.firstChild)
                    } else if (e instanceof l)
                        for (var o = 0; o < e.length; o += 1)
                            this[r].appendChild(e[o]);
                    else
                        this[r].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, n;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var i = m.createElement("div");
                    for (i.innerHTML = e,
                    n = i.childNodes.length - 1; 0 <= n; n -= 1)
                        this[t].insertBefore(i.childNodes[n], this[t].childNodes[0])
                } else if (e instanceof l)
                    for (n = 0; n < e.length; n += 1)
                        this[t].insertBefore(e[n], this[t].childNodes[0]);
                else
                    this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && D(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function(e) {
            var t = []
              , n = this[0];
            if (!n)
                return new l([]);
            for (; n.nextElementSibling; ) {
                var i = n.nextElementSibling;
                e ? D(i).is(e) && t.push(i) : t.push(i),
                n = i
            }
            return new l(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && D(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function(e) {
            var t = []
              , n = this[0];
            if (!n)
                return new l([]);
            for (; n.previousElementSibling; ) {
                var i = n.previousElementSibling;
                e ? D(i).is(e) && t.push(i) : t.push(i),
                n = i
            }
            return new l(t)
        },
        parent: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                null !== this[n].parentNode && (e ? D(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
            return D(s(t))
        },
        parents: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].parentNode; i; )
                    e ? D(i).is(e) && t.push(i) : t.push(i),
                    i = i.parentNode;
            return D(s(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1)
                    t.push(i[r]);
            return new l(t)
        },
        children: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].childNodes, r = 0; r < i.length; r += 1)
                    e ? 1 === i[r].nodeType && D(i[r]).is(e) && t.push(i[r]) : 1 === i[r].nodeType && t.push(i[r]);
            return new l(s(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n, i;
            for (n = 0; n < e.length; n += 1) {
                var r = D(e[n]);
                for (i = 0; i < r.length; i += 1)
                    this[this.length] = r[i],
                    this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? J.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function(e) {
        D.fn[e] = t[e]
    });
    var e, n, i, ee = {
        deleteProps: function(e) {
            var t = e;
            Object.keys(t).forEach(function(e) {
                try {
                    t[e] = null
                } catch (e) {}
                try {
                    delete t[e]
                } catch (e) {}
            })
        },
        nextTick: function(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        },
        now: function() {
            return Date.now()
        },
        getTranslate: function(e, t) {
            var n, i, r;
            void 0 === t && (t = "x");
            var s = J.getComputedStyle(e, null);
            return J.WebKitCSSMatrix ? (6 < (i = s.transform || s.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
                return e.replace(",", ".")
            }).join(", ")),
            r = new J.WebKitCSSMatrix("none" === i ? "" : i)) : n = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === t && (i = J.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
            "y" === t && (i = J.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
            i || 0
        },
        parseUrlQuery: function(e) {
            var t, n, i, r, s = {}, o = e || J.location.href;
            if ("string" == typeof o && o.length)
                for (r = (n = (o = -1 < o.indexOf("?") ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                    return "" !== e
                })).length,
                t = 0; t < r; t += 1)
                    i = n[t].replace(/#\S+/g, "").split("="),
                    s[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
            return s
        },
        isObject: function(e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        },
        extend: function() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
                var r = e[i];
                if (null != r)
                    for (var s = Object.keys(Object(r)), o = 0, a = s.length; o < a; o += 1) {
                        var l = s[o]
                          , u = Object.getOwnPropertyDescriptor(r, l);
                        void 0 !== u && u.enumerable && (ee.isObject(n[l]) && ee.isObject(r[l]) ? ee.extend(n[l], r[l]) : !ee.isObject(n[l]) && ee.isObject(r[l]) ? (n[l] = {},
                        ee.extend(n[l], r[l])) : n[l] = r[l])
                    }
            }
            return n
        }
    }, te = (i = m.createElement("div"),
    {
        touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart"in J || J.DocumentTouch && m instanceof J.DocumentTouch),
        pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints"in J.navigator),
        prefixedPointerEvents: !!J.navigator.msPointerEnabled,
        transition: (n = i.style,
        "transition"in n || "webkitTransition"in n || "MozTransition"in n),
        transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style,
        "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e),
        flexbox: function() {
            for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n += 1)
                if (t[n]in e)
                    return !0;
            return !1
        }(),
        observer: "MutationObserver"in J || "WebkitMutationObserver"in J,
        passiveListener: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                J.addEventListener("testPassiveListener", null, t)
            } catch (e) {}
            return e
        }(),
        gestures: "ongesturestart"in J
    }), r = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e,
        t.eventsListeners = {},
        t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
            t.on(e, t.params.on[e])
        })
    }, o = {
        components: {
            configurable: !0
        }
    };
    r.prototype.on = function(e, t, n) {
        var i = this;
        if ("function" != typeof t)
            return i;
        var r = n ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][r](t)
        }),
        i
    }
    ,
    r.prototype.once = function(i, r, e) {
        var s = this;
        if ("function" != typeof r)
            return s;
        return s.on(i, function e() {
            for (var t = [], n = arguments.length; n--; )
                t[n] = arguments[n];
            r.apply(s, t),
            s.off(i, e)
        }, e)
    }
    ,
    r.prototype.off = function(e, i) {
        var r = this;
        return r.eventsListeners && e.split(" ").forEach(function(n) {
            void 0 === i ? r.eventsListeners[n] = [] : r.eventsListeners[n] && r.eventsListeners[n].length && r.eventsListeners[n].forEach(function(e, t) {
                e === i && r.eventsListeners[n].splice(t, 1)
            })
        }),
        r
    }
    ,
    r.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--; )
            e[t] = arguments[t];
        var n, i, r, s = this;
        return s.eventsListeners && (r = "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0],
        i = e.slice(1, e.length),
        s) : (n = e[0].events,
        i = e[0].data,
        e[0].context || s),
        (Array.isArray(n) ? n : n.split(" ")).forEach(function(e) {
            if (s.eventsListeners && s.eventsListeners[e]) {
                var t = [];
                s.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }),
                t.forEach(function(e) {
                    e.apply(r, i)
                })
            }
        })),
        s
    }
    ,
    r.prototype.useModulesParams = function(n) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function(e) {
            var t = i.modules[e];
            t.params && ee.extend(n, t.params)
        })
    }
    ,
    r.prototype.useModules = function(i) {
        void 0 === i && (i = {});
        var r = this;
        r.modules && Object.keys(r.modules).forEach(function(e) {
            var n = r.modules[e]
              , t = i[e] || {};
            n.instance && Object.keys(n.instance).forEach(function(e) {
                var t = n.instance[e];
                r[e] = "function" == typeof t ? t.bind(r) : t
            }),
            n.on && r.on && Object.keys(n.on).forEach(function(e) {
                r.on(e, n.on[e])
            }),
            n.create && n.create.bind(r)(t)
        })
    }
    ,
    o.components.set = function(e) {
        this.use && this.use(e)
    }
    ,
    r.installModule = function(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--; )
            e[n] = arguments[n + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var r = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
        return (i.prototype.modules[r] = t).proto && Object.keys(t.proto).forEach(function(e) {
            i.prototype[e] = t.proto[e]
        }),
        t.static && Object.keys(t.static).forEach(function(e) {
            i[e] = t.static[e]
        }),
        t.install && t.install.apply(i, e),
        i
    }
    ,
    r.use = function(e) {
        for (var t = [], n = arguments.length - 1; 0 < n--; )
            t[n] = arguments[n + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return i.installModule(e)
        }),
        i) : i.installModule.apply(i, [e].concat(t))
    }
    ,
    Object.defineProperties(r, o);
    var a = {
        updateSize: function() {
            var e, t, n = this.$el;
            e = void 0 !== this.params.width ? this.params.width : n[0].clientWidth,
            t = void 0 !== this.params.height ? this.params.height : n[0].clientHeight,
            0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10),
            t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10),
            ee.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this
              , t = e.params
              , n = e.$wrapperEl
              , i = e.size
              , r = e.rtlTranslate
              , s = e.wrongRTL
              , o = e.virtual && t.virtual.enabled
              , a = o ? e.virtual.slides.length : e.slides.length
              , l = n.children("." + e.params.slideClass)
              , u = o ? e.virtual.slides.length : l.length
              , c = []
              , d = []
              , h = []
              , f = t.slidesOffsetBefore;
            "function" == typeof f && (f = t.slidesOffsetBefore.call(e));
            var p = t.slidesOffsetAfter;
            "function" == typeof p && (p = t.slidesOffsetAfter.call(e));
            var m = e.snapGrid.length
              , g = e.snapGrid.length
              , v = t.spaceBetween
              , y = -f
              , b = 0
              , w = 0;
            if (void 0 !== i) {
                var x, E;
                "string" == typeof v && 0 <= v.indexOf("%") && (v = parseFloat(v.replace("%", "")) / 100 * i),
                e.virtualSize = -v,
                r ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }),
                1 < t.slidesPerColumn && (x = Math.floor(u / t.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / t.slidesPerColumn) * t.slidesPerColumn,
                "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var C, S = t.slidesPerColumn, T = x / S, _ = Math.floor(u / t.slidesPerColumn), k = 0; k < u; k += 1) {
                    E = 0;
                    var A = l.eq(k);
                    if (1 < t.slidesPerColumn) {
                        var O = void 0
                          , M = void 0
                          , D = void 0;
                        "column" === t.slidesPerColumnFill ? (D = k - (M = Math.floor(k / S)) * S,
                        (_ < M || M === _ && D === S - 1) && S <= (D += 1) && (D = 0,
                        M += 1),
                        O = M + D * x / S,
                        A.css({
                            "-webkit-box-ordinal-group": O,
                            "-moz-box-ordinal-group": O,
                            "-ms-flex-order": O,
                            "-webkit-order": O,
                            order: O
                        })) : M = k - (D = Math.floor(k / T)) * T,
                        A.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== D && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", M).attr("data-swiper-row", D)
                    }
                    if ("none" !== A.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var L = J.getComputedStyle(A[0], null)
                              , N = A[0].style.transform
                              , P = A[0].style.webkitTransform;
                            if (N && (A[0].style.transform = "none"),
                            P && (A[0].style.webkitTransform = "none"),
                            t.roundLengths)
                                E = e.isHorizontal() ? A.outerWidth(!0) : A.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                var I = parseFloat(L.getPropertyValue("width"))
                                  , F = parseFloat(L.getPropertyValue("padding-left"))
                                  , j = parseFloat(L.getPropertyValue("padding-right"))
                                  , B = parseFloat(L.getPropertyValue("margin-left"))
                                  , z = parseFloat(L.getPropertyValue("margin-right"))
                                  , H = L.getPropertyValue("box-sizing");
                                E = H && "border-box" === H ? I + B + z : I + F + j + B + z
                            } else {
                                var q = parseFloat(L.getPropertyValue("height"))
                                  , R = parseFloat(L.getPropertyValue("padding-top"))
                                  , $ = parseFloat(L.getPropertyValue("padding-bottom"))
                                  , W = parseFloat(L.getPropertyValue("margin-top"))
                                  , V = parseFloat(L.getPropertyValue("margin-bottom"))
                                  , X = L.getPropertyValue("box-sizing");
                                E = X && "border-box" === X ? q + W + V : q + R + $ + W + V
                            }
                            N && (A[0].style.transform = N),
                            P && (A[0].style.webkitTransform = P),
                            t.roundLengths && (E = Math.floor(E))
                        } else
                            E = (i - (t.slidesPerView - 1) * v) / t.slidesPerView,
                            t.roundLengths && (E = Math.floor(E)),
                            l[k] && (e.isHorizontal() ? l[k].style.width = E + "px" : l[k].style.height = E + "px");
                        l[k] && (l[k].swiperSlideSize = E),
                        h.push(E),
                        t.centeredSlides ? (y = y + E / 2 + b / 2 + v,
                        0 === b && 0 !== k && (y = y - i / 2 - v),
                        0 === k && (y = y - i / 2 - v),
                        Math.abs(y) < .001 && (y = 0),
                        t.roundLengths && (y = Math.floor(y)),
                        w % t.slidesPerGroup == 0 && c.push(y),
                        d.push(y)) : (t.roundLengths && (y = Math.floor(y)),
                        w % t.slidesPerGroup == 0 && c.push(y),
                        d.push(y),
                        y = y + E + v),
                        e.virtualSize += E + v,
                        b = E,
                        w += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + p,
                r && s && ("slide" === t.effect || "coverflow" === t.effect) && n.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }),
                te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? n.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : n.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                })),
                1 < t.slidesPerColumn && (e.virtualSize = (E + t.spaceBetween) * x,
                e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                e.isHorizontal() ? n.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : n.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                }),
                t.centeredSlides)) {
                    C = [];
                    for (var Y = 0; Y < c.length; Y += 1) {
                        var G = c[Y];
                        t.roundLengths && (G = Math.floor(G)),
                        c[Y] < e.virtualSize + c[0] && C.push(G)
                    }
                    c = C
                }
                if (!t.centeredSlides) {
                    C = [];
                    for (var U = 0; U < c.length; U += 1) {
                        var Q = c[U];
                        t.roundLengths && (Q = Math.floor(Q)),
                        c[U] <= e.virtualSize - i && C.push(Q)
                    }
                    c = C,
                    1 < Math.floor(e.virtualSize - i) - Math.floor(c[c.length - 1]) && c.push(e.virtualSize - i)
                }
                if (0 === c.length && (c = [0]),
                0 !== t.spaceBetween && (e.isHorizontal() ? r ? l.css({
                    marginLeft: v + "px"
                }) : l.css({
                    marginRight: v + "px"
                }) : l.css({
                    marginBottom: v + "px"
                })),
                t.centerInsufficientSlides) {
                    var K = 0;
                    if (h.forEach(function(e) {
                        K += e + (t.spaceBetween ? t.spaceBetween : 0)
                    }),
                    (K -= t.spaceBetween) < i) {
                        var Z = (i - K) / 2;
                        c.forEach(function(e, t) {
                            c[t] = e - Z
                        }),
                        d.forEach(function(e, t) {
                            d[t] = e + Z
                        })
                    }
                }
                ee.extend(e, {
                    slides: l,
                    snapGrid: c,
                    slidesGrid: d,
                    slidesSizesGrid: h
                }),
                u !== a && e.emit("slidesLengthChange"),
                c.length !== m && (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
                d.length !== g && e.emit("slidesGridLengthChange"),
                (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, n = this, i = [], r = 0;
            if ("number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed),
            "auto" !== n.params.slidesPerView && 1 < n.params.slidesPerView)
                for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                    var s = n.activeIndex + t;
                    if (s > n.slides.length)
                        break;
                    i.push(n.slides.eq(s)[0])
                }
            else
                i.push(n.slides.eq(n.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var o = i[t].offsetHeight;
                    r = r < o ? o : r
                }
            r && n.$wrapperEl.css("height", r + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this
              , n = t.params
              , i = t.slides
              , r = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var s = -e;
                r && (s = e),
                i.removeClass(n.slideVisibleClass),
                t.visibleSlidesIndexes = [],
                t.visibleSlides = [];
                for (var o = 0; o < i.length; o += 1) {
                    var a = i[o]
                      , l = (s + (n.centeredSlides ? t.minTranslate() : 0) - a.swiperSlideOffset) / (a.swiperSlideSize + n.spaceBetween);
                    if (n.watchSlidesVisibility) {
                        var u = -(s - a.swiperSlideOffset)
                          , c = u + t.slidesSizesGrid[o];
                        (0 <= u && u < t.size || 0 < c && c <= t.size || u <= 0 && c >= t.size) && (t.visibleSlides.push(a),
                        t.visibleSlidesIndexes.push(o),
                        i.eq(o).addClass(n.slideVisibleClass))
                    }
                    a.progress = r ? -l : l
                }
                t.visibleSlides = D(t.visibleSlides)
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this
              , n = t.params
              , i = t.maxTranslate() - t.minTranslate()
              , r = t.progress
              , s = t.isBeginning
              , o = t.isEnd
              , a = s
              , l = o;
            o = 0 === i ? s = !(r = 0) : (s = (r = (e - t.minTranslate()) / i) <= 0,
            1 <= r),
            ee.extend(t, {
                progress: r,
                isBeginning: s,
                isEnd: o
            }),
            (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e),
            s && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            (a && !s || l && !o) && t.emit("fromEdge"),
            t.emit("progress", r)
        },
        updateSlidesClasses: function() {
            var e, t = this.slides, n = this.params, i = this.$wrapperEl, r = this.activeIndex, s = this.realIndex, o = this.virtual && n.virtual.enabled;
            t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass),
            (e = o ? this.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)).addClass(n.slideActiveClass),
            n.loop && (e.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass));
            var a = e.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
            n.loop && 0 === a.length && (a = t.eq(0)).addClass(n.slideNextClass);
            var l = e.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
            n.loop && 0 === l.length && (l = t.eq(-1)).addClass(n.slidePrevClass),
            n.loop && (a.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass),
            l.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, n = this, i = n.rtlTranslate ? n.translate : -n.translate, r = n.slidesGrid, s = n.snapGrid, o = n.params, a = n.activeIndex, l = n.realIndex, u = n.snapIndex, c = e;
            if (void 0 === c) {
                for (var d = 0; d < r.length; d += 1)
                    void 0 !== r[d + 1] ? i >= r[d] && i < r[d + 1] - (r[d + 1] - r[d]) / 2 ? c = d : i >= r[d] && i < r[d + 1] && (c = d + 1) : i >= r[d] && (c = d);
                o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if ((t = 0 <= s.indexOf(i) ? s.indexOf(i) : Math.floor(c / o.slidesPerGroup)) >= s.length && (t = s.length - 1),
            c !== a) {
                var h = parseInt(n.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                ee.extend(n, {
                    snapIndex: t,
                    realIndex: h,
                    previousIndex: a,
                    activeIndex: c
                }),
                n.emit("activeIndexChange"),
                n.emit("snapIndexChange"),
                l !== h && n.emit("realIndexChange"),
                n.emit("slideChange")
            } else
                t !== u && (n.snapIndex = t,
                n.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this
              , n = t.params
              , i = D(e.target).closest("." + n.slideClass)[0]
              , r = !1;
            if (i)
                for (var s = 0; s < t.slides.length; s += 1)
                    t.slides[s] === i && (r = !0);
            if (!i || !r)
                return t.clickedSlide = void 0,
                void (t.clickedIndex = void 0);
            t.clickedSlide = i,
            t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(D(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = D(i).index(),
            n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var u = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params
              , n = this.rtlTranslate
              , i = this.translate
              , r = this.$wrapperEl;
            if (t.virtualTranslate)
                return n ? -i : i;
            var s = ee.getTranslate(r[0], e);
            return n && (s = -s),
            s || 0
        },
        setTranslate: function(e, t) {
            var n = this
              , i = n.rtlTranslate
              , r = n.params
              , s = n.$wrapperEl
              , o = n.progress
              , a = 0
              , l = 0;
            n.isHorizontal() ? a = i ? -e : e : l = e,
            r.roundLengths && (a = Math.floor(a),
            l = Math.floor(l)),
            r.virtualTranslate || (te.transforms3d ? s.transform("translate3d(" + a + "px, " + l + "px, 0px)") : s.transform("translate(" + a + "px, " + l + "px)")),
            n.previousTranslate = n.translate,
            n.translate = n.isHorizontal() ? a : l;
            var u = n.maxTranslate() - n.minTranslate();
            (0 === u ? 0 : (e - n.minTranslate()) / u) !== o && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var c = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var n = this.activeIndex
              , i = this.params
              , r = this.previousIndex;
            i.autoHeight && this.updateAutoHeight();
            var s = t;
            if (s || (s = r < n ? "next" : n < r ? "prev" : "reset"),
            this.emit("transitionStart"),
            e && n !== r) {
                if ("reset" === s)
                    return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"),
                "next" === s ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var n = this.activeIndex
              , i = this.previousIndex;
            this.animating = !1,
            this.setTransition(0);
            var r = t;
            if (r || (r = i < n ? "next" : n < i ? "prev" : "reset"),
            this.emit("transitionEnd"),
            e && n !== i) {
                if ("reset" === r)
                    return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"),
                "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
            }
        }
    };
    var d = {
        slideTo: function(e, t, n, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0);
            var r = this
              , s = e;
            s < 0 && (s = 0);
            var o = r.params
              , a = r.snapGrid
              , l = r.slidesGrid
              , u = r.previousIndex
              , c = r.activeIndex
              , d = r.rtlTranslate;
            if (r.animating && o.preventInteractionOnTransition)
                return !1;
            var h = Math.floor(s / o.slidesPerGroup);
            h >= a.length && (h = a.length - 1),
            (c || o.initialSlide || 0) === (u || 0) && n && r.emit("beforeSlideChangeStart");
            var f, p = -a[h];
            if (r.updateProgress(p),
            o.normalizeSlideIndex)
                for (var m = 0; m < l.length; m += 1)
                    -Math.floor(100 * p) >= Math.floor(100 * l[m]) && (s = m);
            if (r.initialized && s !== c) {
                if (!r.allowSlideNext && p < r.translate && p < r.minTranslate())
                    return !1;
                if (!r.allowSlidePrev && p > r.translate && p > r.maxTranslate() && (c || 0) !== s)
                    return !1
            }
            return f = c < s ? "next" : s < c ? "prev" : "reset",
            d && -p === r.translate || !d && p === r.translate ? (r.updateActiveIndex(s),
            o.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== o.effect && r.setTranslate(p),
            "reset" !== f && (r.transitionStart(n, f),
            r.transitionEnd(n, f)),
            !1) : (0 !== t && te.transition ? (r.setTransition(t),
            r.setTranslate(p),
            r.updateActiveIndex(s),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, i),
            r.transitionStart(n, f),
            r.animating || (r.animating = !0,
            r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                r.onSlideToWrapperTransitionEnd = null,
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(n, f))
            }
            ),
            r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
            r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))) : (r.setTransition(0),
            r.setTranslate(p),
            r.updateActiveIndex(s),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, i),
            r.transitionStart(n, f),
            r.transitionEnd(n, f)),
            !0)
        },
        slideToLoop: function(e, t, n, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0);
            var r = e;
            return this.params.loop && (r += this.loopedSlides),
            this.slideTo(r, t, n, i)
        },
        slideNext: function(e, t, n) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this.params
              , r = this.animating;
            return i.loop ? !r && (this.loopFix(),
            this._clientLeft = this.$wrapperEl[0].clientLeft,
            this.slideTo(this.activeIndex + i.slidesPerGroup, e, t, n)) : this.slideTo(this.activeIndex + i.slidesPerGroup, e, t, n)
        },
        slidePrev: function(e, t, n) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
              , r = i.params
              , s = i.animating
              , o = i.snapGrid
              , a = i.slidesGrid
              , l = i.rtlTranslate;
            if (r.loop) {
                if (s)
                    return !1;
                i.loopFix(),
                i._clientLeft = i.$wrapperEl[0].clientLeft
            }
            function u(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var c, d = u(l ? i.translate : -i.translate), h = o.map(function(e) {
                return u(e)
            }), f = (a.map(function(e) {
                return u(e)
            }),
            o[h.indexOf(d)],
            o[h.indexOf(d) - 1]);
            return void 0 !== f && (c = a.indexOf(f)) < 0 && (c = i.activeIndex - 1),
            i.slideTo(c, e, t, n)
        },
        slideReset: function(e, t, n) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
        },
        slideToClosest: function(e, t, n) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            var i = this
              , r = i.activeIndex
              , s = Math.floor(r / i.params.slidesPerGroup);
            if (s < i.snapGrid.length - 1) {
                var o = i.rtlTranslate ? i.translate : -i.translate
                  , a = i.snapGrid[s];
                (i.snapGrid[s + 1] - a) / 2 < o - a && (r = i.params.slidesPerGroup)
            }
            return i.slideTo(r, e, t, n)
        },
        slideToClickedSlide: function() {
            var e, t = this, n = t.params, i = t.$wrapperEl, r = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView, s = t.clickedIndex;
            if (n.loop) {
                if (t.animating)
                    return;
                e = parseInt(D(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                n.centeredSlides ? s < t.loopedSlides - r / 2 || s > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(),
                s = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(),
                ee.nextTick(function() {
                    t.slideTo(s)
                })) : t.slideTo(s) : s > t.slides.length - r ? (t.loopFix(),
                s = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(),
                ee.nextTick(function() {
                    t.slideTo(s)
                })) : t.slideTo(s)
            } else
                t.slideTo(s)
        }
    };
    var h = {
        loopCreate: function() {
            var i = this
              , e = i.params
              , t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var r = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var n = e.slidesPerGroup - r.length % e.slidesPerGroup;
                if (n !== e.slidesPerGroup) {
                    for (var s = 0; s < n; s += 1) {
                        var o = D(m.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(o)
                    }
                    r = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = r.length),
            i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10),
            i.loopedSlides += e.loopAdditionalSlides,
            i.loopedSlides > r.length && (i.loopedSlides = r.length);
            var a = []
              , l = [];
            r.each(function(e, t) {
                var n = D(t);
                e < i.loopedSlides && l.push(t),
                e < r.length && e >= r.length - i.loopedSlides && a.push(t),
                n.attr("data-swiper-slide-index", e)
            });
            for (var u = 0; u < l.length; u += 1)
                t.append(D(l[u].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var c = a.length - 1; 0 <= c; c -= 1)
                t.prepend(D(a[c].cloneNode(!0)).addClass(e.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this, n = t.params, i = t.activeIndex, r = t.slides, s = t.loopedSlides, o = t.allowSlidePrev, a = t.allowSlideNext, l = t.snapGrid, u = t.rtlTranslate;
            t.allowSlidePrev = !0,
            t.allowSlideNext = !0;
            var c = -l[i] - t.getTranslate();
            i < s ? (e = r.length - 3 * s + i,
            e += s,
            t.slideTo(e, 0, !1, !0) && 0 !== c && t.setTranslate((u ? -t.translate : t.translate) - c)) : ("auto" === n.slidesPerView && 2 * s <= i || i >= r.length - s) && (e = -r.length + i + s,
            e += s,
            t.slideTo(e, 0, !1, !0) && 0 !== c && t.setTranslate((u ? -t.translate : t.translate) - c));
            t.allowSlidePrev = o,
            t.allowSlideNext = a
        },
        loopDestroy: function() {
            var e = this.$wrapperEl
              , t = this.params
              , n = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(),
            n.removeAttr("data-swiper-slide-index")
        }
    };
    var f = {
        setGrabCursor: function(e) {
            if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var p = {
        appendSlide: function(e) {
            var t = this.$wrapperEl
              , n = this.params;
            if (n.loop && this.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (var i = 0; i < e.length; i += 1)
                    e[i] && t.append(e[i]);
            else
                t.append(e);
            n.loop && this.loopCreate(),
            n.observer && te.observer || this.update()
        },
        prependSlide: function(e) {
            var t = this.params
              , n = this.$wrapperEl
              , i = this.activeIndex;
            t.loop && this.loopDestroy();
            var r = i + 1;
            if ("object" == typeof e && "length"in e) {
                for (var s = 0; s < e.length; s += 1)
                    e[s] && n.prepend(e[s]);
                r = i + e.length
            } else
                n.prepend(e);
            t.loop && this.loopCreate(),
            t.observer && te.observer || this.update(),
            this.slideTo(r, 0, !1)
        },
        addSlide: function(e, t) {
            var n = this
              , i = n.$wrapperEl
              , r = n.params
              , s = n.activeIndex;
            r.loop && (s -= n.loopedSlides,
            n.loopDestroy(),
            n.slides = i.children("." + r.slideClass));
            var o = n.slides.length;
            if (e <= 0)
                n.prependSlide(t);
            else if (o <= e)
                n.appendSlide(t);
            else {
                for (var a = e < s ? s + 1 : s, l = [], u = o - 1; e <= u; u -= 1) {
                    var c = n.slides.eq(u);
                    c.remove(),
                    l.unshift(c)
                }
                if ("object" == typeof t && "length"in t) {
                    for (var d = 0; d < t.length; d += 1)
                        t[d] && i.append(t[d]);
                    a = e < s ? s + t.length : s
                } else
                    i.append(t);
                for (var h = 0; h < l.length; h += 1)
                    i.append(l[h]);
                r.loop && n.loopCreate(),
                r.observer && te.observer || n.update(),
                r.loop ? n.slideTo(a + n.loopedSlides, 0, !1) : n.slideTo(a, 0, !1)
            }
        },
        removeSlide: function(e) {
            var t = this
              , n = t.params
              , i = t.$wrapperEl
              , r = t.activeIndex;
            n.loop && (r -= t.loopedSlides,
            t.loopDestroy(),
            t.slides = i.children("." + n.slideClass));
            var s, o = r;
            if ("object" == typeof e && "length"in e) {
                for (var a = 0; a < e.length; a += 1)
                    s = e[a],
                    t.slides[s] && t.slides.eq(s).remove(),
                    s < o && (o -= 1);
                o = Math.max(o, 0)
            } else
                s = e,
                t.slides[s] && t.slides.eq(s).remove(),
                s < o && (o -= 1),
                o = Math.max(o, 0);
            n.loop && t.loopCreate(),
            n.observer && te.observer || t.update(),
            n.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
        },
        removeAllSlides: function() {
            for (var e = [], t = 0; t < this.slides.length; t += 1)
                e.push(t);
            this.removeSlide(e)
        }
    }
      , g = function() {
        var e = J.navigator.userAgent
          , t = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: J.cordova || J.phonegap,
            phonegap: J.cordova || J.phonegap
        }
          , n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
          , i = e.match(/(Android);?[\s\/]+([\d.]+)?/)
          , r = e.match(/(iPad).*OS\s([\d_]+)/)
          , s = e.match(/(iPod)(.*OS\s([\d_]+))?/)
          , o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (n && (t.os = "windows",
        t.osVersion = n[2],
        t.windows = !0),
        i && !n && (t.os = "android",
        t.osVersion = i[2],
        t.android = !0,
        t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")),
        (r || o || s) && (t.os = "ios",
        t.ios = !0),
        o && !s && (t.osVersion = o[2].replace(/_/g, "."),
        t.iphone = !0),
        r && (t.osVersion = r[2].replace(/_/g, "."),
        t.ipad = !0),
        s && (t.osVersion = s[3] ? s[3].replace(/_/g, ".") : null,
        t.iphone = !0),
        t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
        t.desktop = !(t.os || t.android || t.webView),
        t.webView = (o || r || s) && e.match(/.*AppleWebKit(?!.*Safari)/i),
        t.os && "ios" === t.os) {
            var a = t.osVersion.split(".")
              , l = m.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (s || o) && (1 * a[0] == 7 ? 1 <= 1 * a[1] : 7 < 1 * a[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
        }
        return t.pixelRatio = J.devicePixelRatio || 1,
        t
    }();
    function v() {
        var e = this
          , t = e.params
          , n = e.el;
        if (!n || 0 !== n.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext
              , r = e.allowSlidePrev
              , s = e.snapGrid;
            if (e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            t.freeMode) {
                var o = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(o),
                e.updateActiveIndex(),
                e.updateSlidesClasses(),
                t.autoHeight && e.updateAutoHeight()
            } else
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = r,
            e.allowSlideNext = i,
            e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
        }
    }
    var y = {
        attachEvents: function() {
            var e = this
              , t = e.params
              , n = e.touchEvents
              , i = e.el
              , r = e.wrapperEl;
            e.onTouchStart = function(e) {
                var t = this
                  , n = t.touchEventsData
                  , i = t.params
                  , r = t.touches;
                if (!t.animating || !i.preventInteractionOnTransition) {
                    var s = e;
                    if (s.originalEvent && (s = s.originalEvent),
                    n.isTouchEvent = "touchstart" === s.type,
                    (n.isTouchEvent || !("which"in s) || 3 !== s.which) && !(!n.isTouchEvent && "button"in s && 0 < s.button || n.isTouched && n.isMoved))
                        if (i.noSwiping && D(s.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0])
                            t.allowClick = !0;
                        else if (!i.swipeHandler || D(s).closest(i.swipeHandler)[0]) {
                            r.currentX = "touchstart" === s.type ? s.targetTouches[0].pageX : s.pageX,
                            r.currentY = "touchstart" === s.type ? s.targetTouches[0].pageY : s.pageY;
                            var o = r.currentX
                              , a = r.currentY
                              , l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection
                              , u = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                            if (!l || !(o <= u || o >= J.screen.width - u)) {
                                if (ee.extend(n, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }),
                                r.startX = o,
                                r.startY = a,
                                n.touchStartTime = ee.now(),
                                t.allowClick = !0,
                                t.updateSize(),
                                t.swipeDirection = void 0,
                                0 < i.threshold && (n.allowThresholdMove = !1),
                                "touchstart" !== s.type) {
                                    var c = !0;
                                    D(s.target).is(n.formElements) && (c = !1),
                                    m.activeElement && D(m.activeElement).is(n.formElements) && m.activeElement !== s.target && m.activeElement.blur();
                                    var d = c && t.allowTouchMove && i.touchStartPreventDefault;
                                    (i.touchStartForcePreventDefault || d) && s.preventDefault()
                                }
                                t.emit("touchStart", s)
                            }
                        }
                }
            }
            .bind(e),
            e.onTouchMove = function(e) {
                var t = this
                  , n = t.touchEventsData
                  , i = t.params
                  , r = t.touches
                  , s = t.rtlTranslate
                  , o = e;
                if (o.originalEvent && (o = o.originalEvent),
                n.isTouched) {
                    if (!n.isTouchEvent || "mousemove" !== o.type) {
                        var a = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX
                          , l = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        if (o.preventedByNestedSwiper)
                            return r.startX = a,
                            void (r.startY = l);
                        if (!t.allowTouchMove)
                            return t.allowClick = !1,
                            void (n.isTouched && (ee.extend(r, {
                                startX: a,
                                startY: l,
                                currentX: a,
                                currentY: l
                            }),
                            n.touchStartTime = ee.now()));
                        if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                            if (t.isVertical()) {
                                if (l < r.startY && t.translate <= t.maxTranslate() || l > r.startY && t.translate >= t.minTranslate())
                                    return n.isTouched = !1,
                                    void (n.isMoved = !1)
                            } else if (a < r.startX && t.translate <= t.maxTranslate() || a > r.startX && t.translate >= t.minTranslate())
                                return;
                        if (n.isTouchEvent && m.activeElement && o.target === m.activeElement && D(o.target).is(n.formElements))
                            return n.isMoved = !0,
                            void (t.allowClick = !1);
                        if (n.allowTouchCallbacks && t.emit("touchMove", o),
                        !(o.targetTouches && 1 < o.targetTouches.length)) {
                            r.currentX = a,
                            r.currentY = l;
                            var u, c = r.currentX - r.startX, d = r.currentY - r.startY;
                            if (!(t.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2)) < t.params.threshold))
                                if (void 0 === n.isScrolling && (t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : 25 <= c * c + d * d && (u = 180 * Math.atan2(Math.abs(d), Math.abs(c)) / Math.PI,
                                n.isScrolling = t.isHorizontal() ? u > i.touchAngle : 90 - u > i.touchAngle)),
                                n.isScrolling && t.emit("touchMoveOpposite", o),
                                void 0 === n.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (n.startMoving = !0)),
                                n.isScrolling)
                                    n.isTouched = !1;
                                else if (n.startMoving) {
                                    t.allowClick = !1,
                                    o.preventDefault(),
                                    i.touchMoveStopPropagation && !i.nested && o.stopPropagation(),
                                    n.isMoved || (i.loop && t.loopFix(),
                                    n.startTranslate = t.getTranslate(),
                                    t.setTransition(0),
                                    t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                    n.allowMomentumBounce = !1,
                                    !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0),
                                    t.emit("sliderFirstMove", o)),
                                    t.emit("sliderMove", o),
                                    n.isMoved = !0;
                                    var h = t.isHorizontal() ? c : d;
                                    r.diff = h,
                                    h *= i.touchRatio,
                                    s && (h = -h),
                                    t.swipeDirection = 0 < h ? "prev" : "next",
                                    n.currentTranslate = h + n.startTranslate;
                                    var f = !0
                                      , p = i.resistanceRatio;
                                    if (i.touchReleaseOnEdges && (p = 0),
                                    0 < h && n.currentTranslate > t.minTranslate() ? (f = !1,
                                    i.resistance && (n.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + n.startTranslate + h, p))) : h < 0 && n.currentTranslate < t.maxTranslate() && (f = !1,
                                    i.resistance && (n.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - n.startTranslate - h, p))),
                                    f && (o.preventedByNestedSwiper = !0),
                                    !t.allowSlideNext && "next" === t.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate),
                                    !t.allowSlidePrev && "prev" === t.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate),
                                    0 < i.threshold) {
                                        if (!(Math.abs(h) > i.threshold || n.allowThresholdMove))
                                            return void (n.currentTranslate = n.startTranslate);
                                        if (!n.allowThresholdMove)
                                            return n.allowThresholdMove = !0,
                                            r.startX = r.currentX,
                                            r.startY = r.currentY,
                                            n.currentTranslate = n.startTranslate,
                                            void (r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                    }
                                    i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(),
                                    t.updateSlidesClasses()),
                                    i.freeMode && (0 === n.velocities.length && n.velocities.push({
                                        position: r[t.isHorizontal() ? "startX" : "startY"],
                                        time: n.touchStartTime
                                    }),
                                    n.velocities.push({
                                        position: r[t.isHorizontal() ? "currentX" : "currentY"],
                                        time: ee.now()
                                    })),
                                    t.updateProgress(n.currentTranslate),
                                    t.setTranslate(n.currentTranslate))
                                }
                        }
                    }
                } else
                    n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", o)
            }
            .bind(e),
            e.onTouchEnd = function(e) {
                var t = this
                  , n = t.touchEventsData
                  , i = t.params
                  , r = t.touches
                  , s = t.rtlTranslate
                  , o = t.$wrapperEl
                  , a = t.slidesGrid
                  , l = t.snapGrid
                  , u = e;
                if (u.originalEvent && (u = u.originalEvent),
                n.allowTouchCallbacks && t.emit("touchEnd", u),
                n.allowTouchCallbacks = !1,
                !n.isTouched)
                    return n.isMoved && i.grabCursor && t.setGrabCursor(!1),
                    n.isMoved = !1,
                    void (n.startMoving = !1);
                i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var c, d = ee.now(), h = d - n.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(u),
                t.emit("tap", u),
                h < 300 && 300 < d - n.lastClickTime && (n.clickTimeout && clearTimeout(n.clickTimeout),
                n.clickTimeout = ee.nextTick(function() {
                    t && !t.destroyed && t.emit("click", u)
                }, 300)),
                h < 300 && d - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout),
                t.emit("doubleTap", u))),
                n.lastClickTime = ee.now(),
                ee.nextTick(function() {
                    t.destroyed || (t.allowClick = !0)
                }),
                !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate)
                    return n.isTouched = !1,
                    n.isMoved = !1,
                    void (n.startMoving = !1);
                if (n.isTouched = !1,
                n.isMoved = !1,
                n.startMoving = !1,
                c = i.followFinger ? s ? t.translate : -t.translate : -n.currentTranslate,
                i.freeMode) {
                    if (c < -t.minTranslate())
                        return void t.slideTo(t.activeIndex);
                    if (c > -t.maxTranslate())
                        return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (1 < n.velocities.length) {
                            var f = n.velocities.pop()
                              , p = n.velocities.pop()
                              , m = f.position - p.position
                              , g = f.time - p.time;
                            t.velocity = m / g,
                            t.velocity /= 2,
                            Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                            (150 < g || 300 < ee.now() - f.time) && (t.velocity = 0)
                        } else
                            t.velocity = 0;
                        t.velocity *= i.freeModeMomentumVelocityRatio,
                        n.velocities.length = 0;
                        var v = 1e3 * i.freeModeMomentumRatio
                          , y = t.velocity * v
                          , b = t.translate + y;
                        s && (b = -b);
                        var w, x, E = !1, C = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (b < t.maxTranslate())
                            i.freeModeMomentumBounce ? (b + t.maxTranslate() < -C && (b = t.maxTranslate() - C),
                            w = t.maxTranslate(),
                            E = !0,
                            n.allowMomentumBounce = !0) : b = t.maxTranslate(),
                            i.loop && i.centeredSlides && (x = !0);
                        else if (b > t.minTranslate())
                            i.freeModeMomentumBounce ? (b - t.minTranslate() > C && (b = t.minTranslate() + C),
                            w = t.minTranslate(),
                            E = !0,
                            n.allowMomentumBounce = !0) : b = t.minTranslate(),
                            i.loop && i.centeredSlides && (x = !0);
                        else if (i.freeModeSticky) {
                            for (var S, T = 0; T < l.length; T += 1)
                                if (l[T] > -b) {
                                    S = T;
                                    break
                                }
                            b = -(b = Math.abs(l[S] - b) < Math.abs(l[S - 1] - b) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                        }
                        if (x && t.once("transitionEnd", function() {
                            t.loopFix()
                        }),
                        0 !== t.velocity)
                            v = s ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
                        else if (i.freeModeSticky)
                            return void t.slideToClosest();
                        i.freeModeMomentumBounce && E ? (t.updateProgress(w),
                        t.setTransition(v),
                        t.setTranslate(b),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating = !0,
                        o.transitionEnd(function() {
                            t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"),
                            t.setTransition(i.speed),
                            t.setTranslate(w),
                            o.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(b),
                        t.setTransition(v),
                        t.setTranslate(b),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating || (t.animating = !0,
                        o.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(b),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses()
                    } else if (i.freeModeSticky)
                        return void t.slideToClosest();
                    (!i.freeModeMomentum || h >= i.longSwipesMs) && (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses())
                } else {
                    for (var _ = 0, k = t.slidesSizesGrid[0], A = 0; A < a.length; A += i.slidesPerGroup)
                        void 0 !== a[A + i.slidesPerGroup] ? c >= a[A] && c < a[A + i.slidesPerGroup] && (k = a[(_ = A) + i.slidesPerGroup] - a[A]) : c >= a[A] && (_ = A,
                        k = a[a.length - 1] - a[a.length - 2]);
                    var O = (c - a[_]) / k;
                    if (h > i.longSwipesMs) {
                        if (!i.longSwipes)
                            return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (O >= i.longSwipesRatio ? t.slideTo(_ + i.slidesPerGroup) : t.slideTo(_)),
                        "prev" === t.swipeDirection && (O > 1 - i.longSwipesRatio ? t.slideTo(_ + i.slidesPerGroup) : t.slideTo(_))
                    } else {
                        if (!i.shortSwipes)
                            return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(_ + i.slidesPerGroup),
                        "prev" === t.swipeDirection && t.slideTo(_)
                    }
                }
            }
            .bind(e),
            e.onClick = function(e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(),
                this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
                e.stopImmediatePropagation()))
            }
            .bind(e);
            var s = "container" === t.touchEventsTarget ? i : r
              , o = !!t.nested;
            if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                if (te.touch) {
                    var a = !("touchstart" !== n.start || !te.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    s.addEventListener(n.start, e.onTouchStart, a),
                    s.addEventListener(n.move, e.onTouchMove, te.passiveListener ? {
                        passive: !1,
                        capture: o
                    } : o),
                    s.addEventListener(n.end, e.onTouchEnd, a)
                }
                (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1),
                m.addEventListener("mousemove", e.onTouchMove, o),
                m.addEventListener("mouseup", e.onTouchEnd, !1))
            } else
                s.addEventListener(n.start, e.onTouchStart, !1),
                m.addEventListener(n.move, e.onTouchMove, o),
                m.addEventListener(n.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0),
            e.on(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", v, !0)
        },
        detachEvents: function() {
            var e = this
              , t = e.params
              , n = e.touchEvents
              , i = e.el
              , r = e.wrapperEl
              , s = "container" === t.touchEventsTarget ? i : r
              , o = !!t.nested;
            if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                if (te.touch) {
                    var a = !("onTouchStart" !== n.start || !te.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    s.removeEventListener(n.start, e.onTouchStart, a),
                    s.removeEventListener(n.move, e.onTouchMove, o),
                    s.removeEventListener(n.end, e.onTouchEnd, a)
                }
                (t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1),
                m.removeEventListener("mousemove", e.onTouchMove, o),
                m.removeEventListener("mouseup", e.onTouchEnd, !1))
            } else
                s.removeEventListener(n.start, e.onTouchStart, !1),
                m.removeEventListener(n.move, e.onTouchMove, o),
                m.removeEventListener(n.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0),
            e.off(g.ios || g.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", v)
        }
    };
    var b, w = {
        setBreakpoint: function() {
            var e = this
              , t = e.activeIndex
              , n = e.initialized
              , i = e.loopedSlides;
            void 0 === i && (i = 0);
            var r = e.params
              , s = r.breakpoints;
            if (s && (!s || 0 !== Object.keys(s).length)) {
                var o = e.getBreakpoint(s);
                if (o && e.currentBreakpoint !== o) {
                    var a = o in s ? s[o] : void 0;
                    a && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                        var t = a[e];
                        void 0 !== t && (a[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                    });
                    var l = a || e.originalParams
                      , u = r.loop && l.slidesPerView !== r.slidesPerView;
                    ee.extend(e.params, l),
                    ee.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    e.currentBreakpoint = o,
                    u && n && (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - i + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", l)
                }
            }
        },
        getBreakpoint: function(e) {
            if (e) {
                var t = !1
                  , n = [];
                Object.keys(e).forEach(function(e) {
                    n.push(e)
                }),
                n.sort(function(e, t) {
                    return parseInt(e, 10) - parseInt(t, 10)
                });
                for (var i = 0; i < n.length; i += 1) {
                    var r = n[i];
                    this.params.breakpointsInverse ? r <= J.innerWidth && (t = r) : r >= J.innerWidth && !t && (t = r)
                }
                return t || "max"
            }
        }
    }, L = {
        isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
        isEdge: !!J.navigator.userAgent.match(/Edge/g),
        isSafari: (b = J.navigator.userAgent.toLowerCase(),
        0 <= b.indexOf("safari") && b.indexOf("chrome") < 0 && b.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
    };
    var x = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }
      , E = {
        update: a,
        translate: u,
        transition: c,
        slide: d,
        loop: h,
        grabCursor: f,
        manipulation: p,
        events: y,
        breakpoints: w,
        checkOverflow: {
            checkOverflow: function() {
                var e = this
                  , t = e.isLocked;
                e.isLocked = 1 === e.snapGrid.length,
                e.allowSlideNext = !e.isLocked,
                e.allowSlidePrev = !e.isLocked,
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                t && t !== e.isLocked && (e.isEnd = !1,
                e.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var t = this.classNames
                  , n = this.params
                  , e = this.rtl
                  , i = this.$el
                  , r = [];
                r.push(n.direction),
                n.freeMode && r.push("free-mode"),
                te.flexbox || r.push("no-flexbox"),
                n.autoHeight && r.push("autoheight"),
                e && r.push("rtl"),
                1 < n.slidesPerColumn && r.push("multirow"),
                g.android && r.push("android"),
                g.ios && r.push("ios"),
                (L.isIE || L.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && r.push("wp8-" + n.direction),
                r.forEach(function(e) {
                    t.push(n.containerModifierClass + e)
                }),
                i.addClass(t.join(" "))
            },
            removeClasses: function() {
                var e = this.$el
                  , t = this.classNames;
                e.removeClass(t.join(" "))
            }
        },
        images: {
            loadImage: function(e, t, n, i, r, s) {
                var o;
                function a() {
                    s && s()
                }
                e.complete && r ? a() : t ? ((o = new J.Image).onload = a,
                o.onerror = a,
                i && (o.sizes = i),
                n && (o.srcset = n),
                t && (o.src = t)) : a()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                    var i = e.imagesToLoad[n];
                    e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , C = {}
      , S = function(h) {
        function f() {
            for (var e, t, r, n = [], i = arguments.length; i--; )
                n[i] = arguments[i];
            (r = 1 === n.length && n[0].constructor && n[0].constructor === Object ? n[0] : (t = (e = n)[0],
            e[1])) || (r = {}),
            r = ee.extend({}, r),
            t && !r.el && (r.el = t),
            h.call(this, r),
            Object.keys(E).forEach(function(t) {
                Object.keys(E[t]).forEach(function(e) {
                    f.prototype[e] || (f.prototype[e] = E[t][e])
                })
            });
            var s = this;
            void 0 === s.modules && (s.modules = {}),
            Object.keys(s.modules).forEach(function(e) {
                var t = s.modules[e];
                if (t.params) {
                    var n = Object.keys(t.params)[0]
                      , i = t.params[n];
                    if ("object" != typeof i || null === i)
                        return;
                    if (!(n in r && "enabled"in i))
                        return;
                    !0 === r[n] && (r[n] = {
                        enabled: !0
                    }),
                    "object" != typeof r[n] || "enabled"in r[n] || (r[n].enabled = !0),
                    r[n] || (r[n] = {
                        enabled: !1
                    })
                }
            });
            var o = ee.extend({}, x);
            s.useModulesParams(o),
            s.params = ee.extend({}, o, C, r),
            s.originalParams = ee.extend({}, s.params),
            s.passedParams = ee.extend({}, r);
            var a = (s.$ = D)(s.params.el);
            if (t = a[0]) {
                if (1 < a.length) {
                    var l = [];
                    return a.each(function(e, t) {
                        var n = ee.extend({}, r, {
                            el: t
                        });
                        l.push(new f(n))
                    }),
                    l
                }
                t.swiper = s,
                a.data("swiper", s);
                var u, c, d = a.children("." + s.params.wrapperClass);
                return ee.extend(s, {
                    $el: a,
                    el: t,
                    $wrapperEl: d,
                    wrapperEl: d[0],
                    classNames: [],
                    slides: D(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === s.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === s.params.direction
                    },
                    rtl: "rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction"),
                    rtlTranslate: "horizontal" === s.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction")),
                    wrongRTL: "-webkit-box" === d.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: s.params.allowSlideNext,
                    allowSlidePrev: s.params.allowSlidePrev,
                    touchEvents: (u = ["touchstart", "touchmove", "touchend"],
                    c = ["mousedown", "mousemove", "mouseup"],
                    te.pointerEvents ? c = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (c = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    s.touchEventsTouch = {
                        start: u[0],
                        move: u[1],
                        end: u[2]
                    },
                    s.touchEventsDesktop = {
                        start: c[0],
                        move: c[1],
                        end: c[2]
                    },
                    te.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: ee.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: s.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                s.useModules(),
                s.params.init && s.init(),
                s
            }
        }
        h && (f.__proto__ = h);
        var e = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return ((f.prototype = Object.create(h && h.prototype)).constructor = f).prototype.slidesPerViewDynamic = function() {
            var e = this.params
              , t = this.slides
              , n = this.slidesGrid
              , i = this.size
              , r = this.activeIndex
              , s = 1;
            if (e.centeredSlides) {
                for (var o, a = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1)
                    t[l] && !o && (s += 1,
                    i < (a += t[l].swiperSlideSize) && (o = !0));
                for (var u = r - 1; 0 <= u; u -= 1)
                    t[u] && !o && (s += 1,
                    i < (a += t[u].swiperSlideSize) && (o = !0))
            } else
                for (var c = r + 1; c < t.length; c += 1)
                    n[c] - n[r] < i && (s += 1);
            return s
        }
        ,
        f.prototype.update = function() {
            var n = this;
            if (n && !n.destroyed) {
                var e = n.snapGrid
                  , t = n.params;
                t.breakpoints && n.setBreakpoint(),
                n.updateSize(),
                n.updateSlides(),
                n.updateProgress(),
                n.updateSlidesClasses(),
                n.params.freeMode ? (i(),
                n.params.autoHeight && n.updateAutoHeight()) : (("auto" === n.params.slidesPerView || 1 < n.params.slidesPerView) && n.isEnd && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0)) || i(),
                t.watchOverflow && e !== n.snapGrid && n.checkOverflow(),
                n.emit("update")
            }
            function i() {
                var e = n.rtlTranslate ? -1 * n.translate : n.translate
                  , t = Math.min(Math.max(e, n.maxTranslate()), n.minTranslate());
                n.setTranslate(t),
                n.updateActiveIndex(),
                n.updateSlidesClasses()
            }
        }
        ,
        f.prototype.init = function() {
            var e = this;
            e.initialized || (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
            e.attachEvents(),
            e.initialized = !0,
            e.emit("init"))
        }
        ,
        f.prototype.destroy = function(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            var n = this
              , i = n.params
              , r = n.$el
              , s = n.$wrapperEl
              , o = n.slides;
            return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"),
            n.initialized = !1,
            n.detachEvents(),
            i.loop && n.loopDestroy(),
            t && (n.removeClasses(),
            r.removeAttr("style"),
            s.removeAttr("style"),
            o && o.length && o.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach(function(e) {
                n.off(e)
            }),
            !1 !== e && (n.$el[0].swiper = null,
            n.$el.data("swiper", null),
            ee.deleteProps(n)),
            n.destroyed = !0),
            null
        }
        ,
        f.extendDefaults = function(e) {
            ee.extend(C, e)
        }
        ,
        e.extendedDefaults.get = function() {
            return C
        }
        ,
        e.defaults.get = function() {
            return x
        }
        ,
        e.Class.get = function() {
            return h
        }
        ,
        e.$.get = function() {
            return D
        }
        ,
        Object.defineProperties(f, e),
        f
    }(r)
      , T = {
        name: "device",
        proto: {
            device: g
        },
        static: {
            device: g
        }
    }
      , _ = {
        name: "support",
        proto: {
            support: te
        },
        static: {
            support: te
        }
    }
      , k = {
        name: "browser",
        proto: {
            browser: L
        },
        static: {
            browser: L
        }
    }
      , A = {
        name: "resize",
        create: function() {
            var e = this;
            ee.extend(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function() {
                J.addEventListener("resize", this.resize.resizeHandler),
                J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function() {
                J.removeEventListener("resize", this.resize.resizeHandler),
                J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }
      , O = {
        func: J.MutationObserver || J.WebkitMutationObserver,
        attach: function(e, t) {
            void 0 === t && (t = {});
            var n = this
              , i = new O.func(function(e) {
                if (1 !== e.length) {
                    var t = function() {
                        n.emit("observerUpdate", e[0])
                    };
                    J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
                } else
                    n.emit("observerUpdate", e[0])
            }
            );
            i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            n.observer.observers.push(i)
        },
        init: function() {
            if (te.observer && this.params.observer) {
                if (this.params.observeParents)
                    for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                        this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {
                    childList: this.params.observeSlideChildren
                }),
                this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e) {
                e.disconnect()
            }),
            this.observer.observers = []
        }
    }
      , M = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            ee.extend(this, {
                observer: {
                    init: O.init.bind(this),
                    attach: O.attach.bind(this),
                    destroy: O.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function() {
                this.observer.init()
            },
            destroy: function() {
                this.observer.destroy()
            }
        }
    }
      , N = {
        update: function(e) {
            var t = this
              , n = t.params
              , i = n.slidesPerView
              , r = n.slidesPerGroup
              , s = n.centeredSlides
              , o = t.params.virtual
              , a = o.addSlidesBefore
              , l = o.addSlidesAfter
              , u = t.virtual
              , c = u.from
              , d = u.to
              , h = u.slides
              , f = u.slidesGrid
              , p = u.renderSlide
              , m = u.offset;
            t.updateActiveIndex();
            var g, v, y, b = t.activeIndex || 0;
            g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
            y = s ? (v = Math.floor(i / 2) + r + a,
            Math.floor(i / 2) + r + l) : (v = i + (r - 1) + a,
            r + l);
            var w = Math.max((b || 0) - y, 0)
              , x = Math.min((b || 0) + v, h.length - 1)
              , E = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);
            function C() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (ee.extend(t.virtual, {
                from: w,
                to: x,
                offset: E,
                slidesGrid: t.slidesGrid
            }),
            c === w && d === x && !e)
                return t.slidesGrid !== f && E !== m && t.slides.css(g, E + "px"),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: E,
                    from: w,
                    to: x,
                    slides: function() {
                        for (var e = [], t = w; t <= x; t += 1)
                            e.push(h[t]);
                        return e
                    }()
                }),
                void C();
            var S = []
              , T = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var _ = c; _ <= d; _ += 1)
                    (_ < w || x < _) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + _ + '"]').remove();
            for (var k = 0; k < h.length; k += 1)
                w <= k && k <= x && (void 0 === d || e ? T.push(k) : (d < k && T.push(k),
                k < c && S.push(k)));
            T.forEach(function(e) {
                t.$wrapperEl.append(p(h[e], e))
            }),
            S.sort(function(e, t) {
                return t - e
            }).forEach(function(e) {
                t.$wrapperEl.prepend(p(h[e], e))
            }),
            t.$wrapperEl.children(".swiper-slide").css(g, E + "px"),
            C()
        },
        renderSlide: function(e, t) {
            var n = this.params.virtual;
            if (n.cache && this.virtual.cache[t])
                return this.virtual.cache[t];
            var i = n.renderSlide ? D(n.renderSlide.call(this, e, t)) : D('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t),
            n.cache && (this.virtual.cache[t] = i),
            i
        },
        appendSlide: function(e) {
            this.virtual.slides.push(e),
            this.virtual.update(!0)
        },
        prependSlide: function(e) {
            if (this.virtual.slides.unshift(e),
            this.params.virtual.cache) {
                var t = this.virtual.cache
                  , n = {};
                Object.keys(t).forEach(function(e) {
                    n[e + 1] = t[e]
                }),
                this.virtual.cache = n
            }
            this.virtual.update(!0),
            this.slideNext(0)
        }
    }
      , P = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            ee.extend(this, {
                virtual: {
                    update: N.update.bind(this),
                    appendSlide: N.appendSlide.bind(this),
                    prependSlide: N.prependSlide.bind(this),
                    renderSlide: N.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function() {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var e = {
                        watchSlidesProgress: !0
                    };
                    ee.extend(this.params, e),
                    ee.extend(this.originalParams, e),
                    this.params.initialSlide || this.virtual.update()
                }
            },
            setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }
      , I = {
        handle: function(e) {
            var t = this
              , n = t.rtlTranslate
              , i = e;
            i.originalEvent && (i = i.originalEvent);
            var r = i.keyCode || i.charCode;
            if (!t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r))
                return !1;
            if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || m.activeElement && m.activeElement.nodeName && ("input" === m.activeElement.nodeName.toLowerCase() || "textarea" === m.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                    var s = !1;
                    if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length)
                        return;
                    var o = J.innerWidth
                      , a = J.innerHeight
                      , l = t.$el.offset();
                    n && (l.left -= t.$el[0].scrollLeft);
                    for (var u = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], c = 0; c < u.length; c += 1) {
                        var d = u[c];
                        0 <= d[0] && d[0] <= o && 0 <= d[1] && d[1] <= a && (s = !0)
                    }
                    if (!s)
                        return
                }
                t.isHorizontal() ? (37 !== r && 39 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1),
                (39 === r && !n || 37 === r && n) && t.slideNext(),
                (37 === r && !n || 39 === r && n) && t.slidePrev()) : (38 !== r && 40 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1),
                40 === r && t.slideNext(),
                38 === r && t.slidePrev()),
                t.emit("keyPress", r)
            }
        },
        enable: function() {
            this.keyboard.enabled || (D(m).on("keydown", this.keyboard.handle),
            this.keyboard.enabled = !0)
        },
        disable: function() {
            this.keyboard.enabled && (D(m).off("keydown", this.keyboard.handle),
            this.keyboard.enabled = !1)
        }
    }
      , F = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function() {
            ee.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: I.enable.bind(this),
                    disable: I.disable.bind(this),
                    handle: I.handle.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var j = {
        lastScrollTime: ee.now(),
        event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
            var e = "onwheel"
              , t = e in m;
            if (!t) {
                var n = m.createElement("div");
                n.setAttribute(e, "return;"),
                t = "function" == typeof n[e]
            }
            return !t && m.implementation && m.implementation.hasFeature && !0 !== m.implementation.hasFeature("", "") && (t = m.implementation.hasFeature("Events.wheel", "3.0")),
            t
        }() ? "wheel" : "mousewheel",
        normalize: function(e) {
            var t = 0
              , n = 0
              , i = 0
              , r = 0;
            return "detail"in e && (n = e.detail),
            "wheelDelta"in e && (n = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (n = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = n,
            n = 0),
            i = 10 * t,
            r = 10 * n,
            "deltaY"in e && (r = e.deltaY),
            "deltaX"in e && (i = e.deltaX),
            (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40,
            r *= 40) : (i *= 800,
            r *= 800)),
            i && !t && (t = i < 1 ? -1 : 1),
            r && !n && (n = r < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: n,
                pixelX: i,
                pixelY: r
            }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(e) {
            var t = e
              , n = this
              , i = n.params.mousewheel;
            if (!n.mouseEntered && !i.releaseOnEdges)
                return !0;
            t.originalEvent && (t = t.originalEvent);
            var r = 0
              , s = n.rtlTranslate ? -1 : 1
              , o = j.normalize(t);
            if (i.forceToAxis)
                if (n.isHorizontal()) {
                    if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY)))
                        return !0;
                    r = o.pixelX * s
                } else {
                    if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX)))
                        return !0;
                    r = o.pixelY
                }
            else
                r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * s : -o.pixelY;
            if (0 === r)
                return !0;
            if (i.invert && (r = -r),
            n.params.freeMode) {
                n.params.loop && n.loopFix();
                var a = n.getTranslate() + r * i.sensitivity
                  , l = n.isBeginning
                  , u = n.isEnd;
                if (a >= n.minTranslate() && (a = n.minTranslate()),
                a <= n.maxTranslate() && (a = n.maxTranslate()),
                n.setTransition(0),
                n.setTranslate(a),
                n.updateProgress(),
                n.updateActiveIndex(),
                n.updateSlidesClasses(),
                (!l && n.isBeginning || !u && n.isEnd) && n.updateSlidesClasses(),
                n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout),
                n.mousewheel.timeout = ee.nextTick(function() {
                    n.slideToClosest()
                }, 300)),
                n.emit("scroll", t),
                n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(),
                a === n.minTranslate() || a === n.maxTranslate())
                    return !0
            } else {
                if (60 < ee.now() - n.mousewheel.lastScrollTime)
                    if (r < 0)
                        if (n.isEnd && !n.params.loop || n.animating) {
                            if (i.releaseOnEdges)
                                return !0
                        } else
                            n.slideNext(),
                            n.emit("scroll", t);
                    else if (n.isBeginning && !n.params.loop || n.animating) {
                        if (i.releaseOnEdges)
                            return !0
                    } else
                        n.slidePrev(),
                        n.emit("scroll", t);
                n.mousewheel.lastScrollTime = (new J.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            !1
        },
        enable: function() {
            if (!j.event)
                return !1;
            if (this.mousewheel.enabled)
                return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = D(this.params.mousewheel.eventsTarged)),
            e.on("mouseenter", this.mousewheel.handleMouseEnter),
            e.on("mouseleave", this.mousewheel.handleMouseLeave),
            e.on(j.event, this.mousewheel.handle),
            this.mousewheel.enabled = !0
        },
        disable: function() {
            if (!j.event)
                return !1;
            if (!this.mousewheel.enabled)
                return !1;
            var e = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (e = D(this.params.mousewheel.eventsTarged)),
            e.off(j.event, this.mousewheel.handle),
            !(this.mousewheel.enabled = !1)
        }
    }
      , B = {
        update: function() {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation
                  , n = t.$nextEl
                  , i = t.$prevEl;
                i && 0 < i.length && (this.isBeginning ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass),
                i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                n && 0 < n.length && (this.isEnd ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass),
                n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        },
        onPrevClick: function(e) {
            e.preventDefault(),
            this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function(e) {
            e.preventDefault(),
            this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function() {
            var e, t, n = this, i = n.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = D(i.nextEl),
            n.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === n.$el.find(i.nextEl).length && (e = n.$el.find(i.nextEl))),
            i.prevEl && (t = D(i.prevEl),
            n.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === n.$el.find(i.prevEl).length && (t = n.$el.find(i.prevEl))),
            e && 0 < e.length && e.on("click", n.navigation.onNextClick),
            t && 0 < t.length && t.on("click", n.navigation.onPrevClick),
            ee.extend(n.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        },
        destroy: function() {
            var e = this.navigation
              , t = e.$nextEl
              , n = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick),
            t.removeClass(this.params.navigation.disabledClass)),
            n && n.length && (n.off("click", this.navigation.onPrevClick),
            n.removeClass(this.params.navigation.disabledClass))
        }
    }
      , z = {
        update: function() {
            var e = this
              , t = e.rtl
              , r = e.params.pagination;
            if (r.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var s, n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el, o = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((s = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > n - 1 - 2 * e.loopedSlides && (s -= n - 2 * e.loopedSlides),
                o - 1 < s && (s -= o),
                s < 0 && "bullets" !== e.params.paginationType && (s = o + s)) : s = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                "bullets" === r.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                    var a, l, u, c = e.pagination.bullets;
                    if (r.dynamicBullets && (e.pagination.bulletSize = c.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (r.dynamicMainBullets + 4) + "px"),
                    1 < r.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += s - e.previousIndex,
                    e.pagination.dynamicBulletIndex > r.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = r.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                    a = s - e.pagination.dynamicBulletIndex,
                    u = ((l = a + (Math.min(c.length, r.dynamicMainBullets) - 1)) + a) / 2),
                    c.removeClass(r.bulletActiveClass + " " + r.bulletActiveClass + "-next " + r.bulletActiveClass + "-next-next " + r.bulletActiveClass + "-prev " + r.bulletActiveClass + "-prev-prev " + r.bulletActiveClass + "-main"),
                    1 < i.length)
                        c.each(function(e, t) {
                            var n = D(t)
                              , i = n.index();
                            i === s && n.addClass(r.bulletActiveClass),
                            r.dynamicBullets && (a <= i && i <= l && n.addClass(r.bulletActiveClass + "-main"),
                            i === a && n.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"),
                            i === l && n.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next"))
                        });
                    else if (c.eq(s).addClass(r.bulletActiveClass),
                    r.dynamicBullets) {
                        for (var d = c.eq(a), h = c.eq(l), f = a; f <= l; f += 1)
                            c.eq(f).addClass(r.bulletActiveClass + "-main");
                        d.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"),
                        h.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next")
                    }
                    if (r.dynamicBullets) {
                        var p = Math.min(c.length, r.dynamicMainBullets + 4)
                          , m = (e.pagination.bulletSize * p - e.pagination.bulletSize) / 2 - u * e.pagination.bulletSize
                          , g = t ? "right" : "left";
                        c.css(e.isHorizontal() ? g : "top", m + "px")
                    }
                }
                if ("fraction" === r.type && (i.find("." + r.currentClass).text(r.formatFractionCurrent(s + 1)),
                i.find("." + r.totalClass).text(r.formatFractionTotal(o))),
                "progressbar" === r.type) {
                    var v;
                    v = r.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    var y = (s + 1) / o
                      , b = 1
                      , w = 1;
                    "horizontal" === v ? b = y : w = y,
                    i.find("." + r.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + w + ")").transition(e.params.speed)
                }
                "custom" === r.type && r.renderCustom ? (i.html(r.renderCustom(e, s + 1, o)),
                e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]),
                i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](r.lockClass)
            }
        },
        render: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                  , i = e.pagination.$el
                  , r = "";
                if ("bullets" === t.type) {
                    for (var s = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, o = 0; o < s; o += 1)
                        t.renderBullet ? r += t.renderBullet.call(e, o, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    i.html(r),
                    e.pagination.bullets = i.find("." + t.bulletClass)
                }
                "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>',
                i.html(r)),
                "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>',
                i.html(r)),
                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        },
        init: function() {
            var n = this
              , e = n.params.pagination;
            if (e.el) {
                var t = D(e.el);
                0 !== t.length && (n.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === n.$el.find(e.el).length && (t = n.$el.find(e.el)),
                "bullets" === e.type && e.clickable && t.addClass(e.clickableClass),
                t.addClass(e.modifierClass + e.type),
                "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"),
                n.pagination.dynamicBulletIndex = 0,
                e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass),
                e.clickable && t.on("click", "." + e.bulletClass, function(e) {
                    e.preventDefault();
                    var t = D(this).index() * n.params.slidesPerGroup;
                    n.params.loop && (t += n.loopedSlides),
                    n.slideTo(t)
                }),
                ee.extend(n.pagination, {
                    $el: t,
                    el: t[0]
                }))
            }
        },
        destroy: function() {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass),
                t.removeClass(e.modifierClass + e.type),
                this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }
      , H = {
        setTranslate: function() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.rtlTranslate
                  , n = this.progress
                  , i = e.dragSize
                  , r = e.trackSize
                  , s = e.$dragEl
                  , o = e.$el
                  , a = this.params.scrollbar
                  , l = i
                  , u = (r - i) * n;
                t ? 0 < (u = -u) ? (l = i - u,
                u = 0) : r < -u + i && (l = r + u) : u < 0 ? (l = i + u,
                u = 0) : r < u + i && (l = r - u),
                this.isHorizontal() ? (te.transforms3d ? s.transform("translate3d(" + u + "px, 0, 0)") : s.transform("translateX(" + u + "px)"),
                s[0].style.width = l + "px") : (te.transforms3d ? s.transform("translate3d(0px, " + u + "px, 0)") : s.transform("translateY(" + u + "px)"),
                s[0].style.height = l + "px"),
                a.hide && (clearTimeout(this.scrollbar.timeout),
                o[0].style.opacity = 1,
                this.scrollbar.timeout = setTimeout(function() {
                    o[0].style.opacity = 0,
                    o.transition(400)
                }, 1e3))
            }
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar
                  , n = t.$dragEl
                  , i = t.$el;
                n[0].style.width = "",
                n[0].style.height = "";
                var r, s = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, o = e.size / e.virtualSize, a = o * (s / e.size);
                r = "auto" === e.params.scrollbar.dragSize ? s * o : parseInt(e.params.scrollbar.dragSize, 10),
                e.isHorizontal() ? n[0].style.width = r + "px" : n[0].style.height = r + "px",
                i[0].style.display = 1 <= o ? "none" : "",
                e.params.scrollbarHide && (i[0].style.opacity = 0),
                ee.extend(t, {
                    trackSize: s,
                    divider: o,
                    moveDivider: a,
                    dragSize: r
                }),
                t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            }
        },
        setDragPosition: function(e) {
            var t, n = this, i = n.scrollbar, r = n.rtlTranslate, s = i.$el, o = i.dragSize, a = i.trackSize;
            t = ((n.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - s.offset()[n.isHorizontal() ? "left" : "top"] - o / 2) / (a - o),
            t = Math.max(Math.min(t, 1), 0),
            r && (t = 1 - t);
            var l = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
            n.updateProgress(l),
            n.setTranslate(l),
            n.updateActiveIndex(),
            n.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this.params.scrollbar
              , n = this.scrollbar
              , i = this.$wrapperEl
              , r = n.$el
              , s = n.$dragEl;
            this.scrollbar.isTouched = !0,
            e.preventDefault(),
            e.stopPropagation(),
            i.transition(100),
            s.transition(100),
            n.setDragPosition(e),
            clearTimeout(this.scrollbar.dragTimeout),
            r.transition(0),
            t.hide && r.css("opacity", 1),
            this.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
              , n = this.$wrapperEl
              , i = t.$el
              , r = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            t.setDragPosition(e),
            n.transition(0),
            i.transition(0),
            r.transition(0),
            this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this.params.scrollbar
              , n = this.scrollbar.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1,
            t.hide && (clearTimeout(this.scrollbar.dragTimeout),
            this.scrollbar.dragTimeout = ee.nextTick(function() {
                n.css("opacity", 0),
                n.transition(400)
            }, 1e3)),
            this.emit("scrollbarDragEnd", e),
            t.snapOnRelease && this.slideToClosest())
        },
        enableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar
                  , n = e.touchEventsTouch
                  , i = e.touchEventsDesktop
                  , r = e.params
                  , s = t.$el[0]
                  , o = !(!te.passiveListener || !r.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , a = !(!te.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.touch ? (s.addEventListener(n.start, e.scrollbar.onDragStart, o),
                s.addEventListener(n.move, e.scrollbar.onDragMove, o),
                s.addEventListener(n.end, e.scrollbar.onDragEnd, a)) : (s.addEventListener(i.start, e.scrollbar.onDragStart, o),
                m.addEventListener(i.move, e.scrollbar.onDragMove, o),
                m.addEventListener(i.end, e.scrollbar.onDragEnd, a))
            }
        },
        disableDraggable: function() {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar
                  , n = e.touchEventsTouch
                  , i = e.touchEventsDesktop
                  , r = e.params
                  , s = t.$el[0]
                  , o = !(!te.passiveListener || !r.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }
                  , a = !(!te.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.touch ? (s.removeEventListener(n.start, e.scrollbar.onDragStart, o),
                s.removeEventListener(n.move, e.scrollbar.onDragMove, o),
                s.removeEventListener(n.end, e.scrollbar.onDragEnd, a)) : (s.removeEventListener(i.start, e.scrollbar.onDragStart, o),
                m.removeEventListener(i.move, e.scrollbar.onDragMove, o),
                m.removeEventListener(i.end, e.scrollbar.onDragEnd, a))
            }
        },
        init: function() {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar
                  , t = this.$el
                  , n = this.params.scrollbar
                  , i = D(n.el);
                this.params.uniqueNavElements && "string" == typeof n.el && 1 < i.length && 1 === t.find(n.el).length && (i = t.find(n.el));
                var r = i.find("." + this.params.scrollbar.dragClass);
                0 === r.length && (r = D('<div class="' + this.params.scrollbar.dragClass + '"></div>'),
                i.append(r)),
                ee.extend(e, {
                    $el: i,
                    el: i[0],
                    $dragEl: r,
                    dragEl: r[0]
                }),
                n.draggable && e.enableDraggable()
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
      , q = {
        setTransform: function(e, t) {
            var n = this.rtl
              , i = D(e)
              , r = n ? -1 : 1
              , s = i.attr("data-swiper-parallax") || "0"
              , o = i.attr("data-swiper-parallax-x")
              , a = i.attr("data-swiper-parallax-y")
              , l = i.attr("data-swiper-parallax-scale")
              , u = i.attr("data-swiper-parallax-opacity");
            if (o || a ? (o = o || "0",
            a = a || "0") : this.isHorizontal() ? (o = s,
            a = "0") : (a = s,
            o = "0"),
            o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t * r + "%" : o * t * r + "px",
            a = 0 <= a.indexOf("%") ? parseInt(a, 10) * t + "%" : a * t + "px",
            null != u) {
                var c = u - (u - 1) * (1 - Math.abs(t));
                i[0].style.opacity = c
            }
            if (null == l)
                i.transform("translate3d(" + o + ", " + a + ", 0px)");
            else {
                var d = l - (l - 1) * (1 - Math.abs(t));
                i.transform("translate3d(" + o + ", " + a + ", 0px) scale(" + d + ")")
            }
        },
        setTranslate: function() {
            var i = this
              , e = i.$el
              , t = i.slides
              , r = i.progress
              , s = i.snapGrid;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                i.parallax.setTransform(t, r)
            }),
            t.each(function(e, t) {
                var n = t.progress;
                1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (n += Math.ceil(e / 2) - r * (s.length - 1)),
                n = Math.min(Math.max(n, -1), 1),
                D(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                    i.parallax.setTransform(t, n)
                })
            })
        },
        setTransition: function(r) {
            void 0 === r && (r = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                var n = D(t)
                  , i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || r;
                0 === r && (i = 0),
                n.transition(i)
            })
        }
    }
      , R = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , n = e.targetTouches[0].pageY
              , i = e.targetTouches[1].pageX
              , r = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2))
        },
        onGestureStart: function(e) {
            var t = this.params.zoom
              , n = this.zoom
              , i = n.gesture;
            if (n.fakeGestureTouched = !1,
            n.fakeGestureMoved = !1,
            !te.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                n.fakeGestureTouched = !0,
                i.scaleStart = R.getDistanceBetweenTouches(e)
            }
            i.$slideEl && i.$slideEl.length || (i.$slideEl = D(e.target).closest(".swiper-slide"),
            0 === i.$slideEl.length && (i.$slideEl = this.slides.eq(this.activeIndex)),
            i.$imageEl = i.$slideEl.find("img, svg, canvas"),
            i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass),
            i.maxRatio = i.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio,
            0 !== i.$imageWrapEl.length) ? (i.$imageEl.transition(0),
            this.zoom.isScaling = !0) : i.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.params.zoom
              , n = this.zoom
              , i = n.gesture;
            if (!te.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                n.fakeGestureMoved = !0,
                i.scaleMove = R.getDistanceBetweenTouches(e)
            }
            i.$imageEl && 0 !== i.$imageEl.length && (n.scale = te.gestures ? e.scale * n.currentScale : i.scaleMove / i.scaleStart * n.currentScale,
            n.scale > i.maxRatio && (n.scale = i.maxRatio - 1 + Math.pow(n.scale - i.maxRatio + 1, .5)),
            n.scale < t.minRatio && (n.scale = t.minRatio + 1 - Math.pow(t.minRatio - n.scale + 1, .5)),
            i.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"))
        },
        onGestureEnd: function(e) {
            var t = this.params.zoom
              , n = this.zoom
              , i = n.gesture;
            if (!te.gestures) {
                if (!n.fakeGestureTouched || !n.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !g.android)
                    return;
                n.fakeGestureTouched = !1,
                n.fakeGestureMoved = !1
            }
            i.$imageEl && 0 !== i.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, i.maxRatio), t.minRatio),
            i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + n.scale + ")"),
            n.currentScale = n.scale,
            n.isScaling = !1,
            1 === n.scale && (i.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.zoom
              , n = t.gesture
              , i = t.image;
            n.$imageEl && 0 !== n.$imageEl.length && (i.isTouched || (g.android && e.preventDefault(),
            i.isTouched = !0,
            i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
            i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove: function(e) {
            var t = this.zoom
              , n = t.gesture
              , i = t.image
              , r = t.velocity;
            if (n.$imageEl && 0 !== n.$imageEl.length && (this.allowClick = !1,
            i.isTouched && n.$slideEl)) {
                i.isMoved || (i.width = n.$imageEl[0].offsetWidth,
                i.height = n.$imageEl[0].offsetHeight,
                i.startX = ee.getTranslate(n.$imageWrapEl[0], "x") || 0,
                i.startY = ee.getTranslate(n.$imageWrapEl[0], "y") || 0,
                n.slideWidth = n.$slideEl[0].offsetWidth,
                n.slideHeight = n.$slideEl[0].offsetHeight,
                n.$imageWrapEl.transition(0),
                this.rtl && (i.startX = -i.startX,
                i.startY = -i.startY));
                var s = i.width * t.scale
                  , o = i.height * t.scale;
                if (!(s < n.slideWidth && o < n.slideHeight)) {
                    if (i.minX = Math.min(n.slideWidth / 2 - s / 2, 0),
                    i.maxX = -i.minX,
                    i.minY = Math.min(n.slideHeight / 2 - o / 2, 0),
                    i.maxY = -i.minY,
                    i.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    i.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                    !i.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(i.minX) === Math.floor(i.startX) && i.touchesCurrent.x < i.touchesStart.x || Math.floor(i.maxX) === Math.floor(i.startX) && i.touchesCurrent.x > i.touchesStart.x))
                            return void (i.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(i.minY) === Math.floor(i.startY) && i.touchesCurrent.y < i.touchesStart.y || Math.floor(i.maxY) === Math.floor(i.startY) && i.touchesCurrent.y > i.touchesStart.y))
                            return void (i.isTouched = !1)
                    }
                    e.preventDefault(),
                    e.stopPropagation(),
                    i.isMoved = !0,
                    i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX,
                    i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY,
                    i.currentX < i.minX && (i.currentX = i.minX + 1 - Math.pow(i.minX - i.currentX + 1, .8)),
                    i.currentX > i.maxX && (i.currentX = i.maxX - 1 + Math.pow(i.currentX - i.maxX + 1, .8)),
                    i.currentY < i.minY && (i.currentY = i.minY + 1 - Math.pow(i.minY - i.currentY + 1, .8)),
                    i.currentY > i.maxY && (i.currentY = i.maxY - 1 + Math.pow(i.currentY - i.maxY + 1, .8)),
                    r.prevPositionX || (r.prevPositionX = i.touchesCurrent.x),
                    r.prevPositionY || (r.prevPositionY = i.touchesCurrent.y),
                    r.prevTime || (r.prevTime = Date.now()),
                    r.x = (i.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
                    r.y = (i.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
                    Math.abs(i.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                    Math.abs(i.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                    r.prevPositionX = i.touchesCurrent.x,
                    r.prevPositionY = i.touchesCurrent.y,
                    r.prevTime = Date.now(),
                    n.$imageWrapEl.transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
              , t = e.gesture
              , n = e.image
              , i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!n.isTouched || !n.isMoved)
                    return n.isTouched = !1,
                    void (n.isMoved = !1);
                n.isTouched = !1,
                n.isMoved = !1;
                var r = 300
                  , s = 300
                  , o = i.x * r
                  , a = n.currentX + o
                  , l = i.y * s
                  , u = n.currentY + l;
                0 !== i.x && (r = Math.abs((a - n.currentX) / i.x)),
                0 !== i.y && (s = Math.abs((u - n.currentY) / i.y));
                var c = Math.max(r, s);
                n.currentX = a,
                n.currentY = u;
                var d = n.width * e.scale
                  , h = n.height * e.scale;
                n.minX = Math.min(t.slideWidth / 2 - d / 2, 0),
                n.maxX = -n.minX,
                n.minY = Math.min(t.slideHeight / 2 - h / 2, 0),
                n.maxY = -n.minY,
                n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX),
                n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY),
                t.$imageWrapEl.transition(c).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
              , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            e.currentScale = 1,
            t.$slideEl = void 0,
            t.$imageEl = void 0,
            t.$imageWrapEl = void 0)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, n, i, r, s, o, a, l, u, c, d, h, f, p, m, g, v = this.zoom, y = this.params.zoom, b = v.gesture, w = v.image;
            (b.$slideEl || (b.$slideEl = this.clickedSlide ? D(this.clickedSlide) : this.slides.eq(this.activeIndex),
            b.$imageEl = b.$slideEl.find("img, svg, canvas"),
            b.$imageWrapEl = b.$imageEl.parent("." + y.containerClass)),
            b.$imageEl && 0 !== b.$imageEl.length) && (b.$slideEl.addClass("" + y.zoomedSlideClass),
            n = void 0 === w.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = w.touchesStart.x,
            w.touchesStart.y),
            v.scale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio,
            v.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio,
            e ? (m = b.$slideEl[0].offsetWidth,
            g = b.$slideEl[0].offsetHeight,
            i = b.$slideEl.offset().left + m / 2 - t,
            r = b.$slideEl.offset().top + g / 2 - n,
            a = b.$imageEl[0].offsetWidth,
            l = b.$imageEl[0].offsetHeight,
            u = a * v.scale,
            c = l * v.scale,
            f = -(d = Math.min(m / 2 - u / 2, 0)),
            p = -(h = Math.min(g / 2 - c / 2, 0)),
            (s = i * v.scale) < d && (s = d),
            f < s && (s = f),
            (o = r * v.scale) < h && (o = h),
            p < o && (o = p)) : o = s = 0,
            b.$imageWrapEl.transition(300).transform("translate3d(" + s + "px, " + o + "px,0)"),
            b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + v.scale + ")"))
        },
        out: function() {
            var e = this.zoom
              , t = this.params.zoom
              , n = e.gesture;
            n.$slideEl || (n.$slideEl = this.clickedSlide ? D(this.clickedSlide) : this.slides.eq(this.activeIndex),
            n.$imageEl = n.$slideEl.find("img, svg, canvas"),
            n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass)),
            n.$imageEl && 0 !== n.$imageEl.length && (e.scale = 1,
            e.currentScale = 1,
            n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            n.$slideEl.removeClass("" + t.zoomedSlideClass),
            n.$slideEl = void 0)
        },
        enable: function() {
            var e = this
              , t = e.zoom;
            if (!t.enabled) {
                t.enabled = !0;
                var n = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, n),
                e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, n),
                e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n),
                e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n),
                e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)),
                e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        },
        disable: function() {
            var e = this
              , t = e.zoom;
            if (t.enabled) {
                e.zoom.enabled = !1;
                var n = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, n),
                e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, n),
                e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n),
                e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n),
                e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)),
                e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        }
    }
      , $ = {
        loadInSlide: function(e, l) {
            void 0 === l && (l = !0);
            var u = this
              , c = u.params.lazy;
            if (void 0 !== e && 0 !== u.slides.length) {
                var d = u.virtual && u.params.virtual.enabled ? u.$wrapperEl.children("." + u.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : u.slides.eq(e)
                  , t = d.find("." + c.elementClass + ":not(." + c.loadedClass + "):not(." + c.loadingClass + ")");
                !d.hasClass(c.elementClass) || d.hasClass(c.loadedClass) || d.hasClass(c.loadingClass) || (t = t.add(d[0])),
                0 !== t.length && t.each(function(e, t) {
                    var i = D(t);
                    i.addClass(c.loadingClass);
                    var r = i.attr("data-background")
                      , s = i.attr("data-src")
                      , o = i.attr("data-srcset")
                      , a = i.attr("data-sizes");
                    u.loadImage(i[0], s || r, o, a, !1, function() {
                        if (null != u && u && (!u || u.params) && !u.destroyed) {
                            if (r ? (i.css("background-image", 'url("' + r + '")'),
                            i.removeAttr("data-background")) : (o && (i.attr("srcset", o),
                            i.removeAttr("data-srcset")),
                            a && (i.attr("sizes", a),
                            i.removeAttr("data-sizes")),
                            s && (i.attr("src", s),
                            i.removeAttr("data-src"))),
                            i.addClass(c.loadedClass).removeClass(c.loadingClass),
                            d.find("." + c.preloaderClass).remove(),
                            u.params.loop && l) {
                                var e = d.attr("data-swiper-slide-index");
                                if (d.hasClass(u.params.slideDuplicateClass)) {
                                    var t = u.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + u.params.slideDuplicateClass + ")");
                                    u.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    var n = u.$wrapperEl.children("." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    u.lazy.loadInSlide(n.index(), !1)
                                }
                            }
                            u.emit("lazyImageReady", d[0], i[0])
                        }
                    }),
                    u.emit("lazyImageLoad", d[0], i[0])
                })
            }
        },
        load: function() {
            var i = this
              , t = i.$wrapperEl
              , n = i.params
              , r = i.slides
              , e = i.activeIndex
              , s = i.virtual && n.virtual.enabled
              , o = n.lazy
              , a = n.slidesPerView;
            function l(e) {
                if (s) {
                    if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (r[e])
                    return !0;
                return !1
            }
            function u(e) {
                return s ? D(e).attr("data-swiper-slide-index") : D(e).index()
            }
            if ("auto" === a && (a = 0),
            i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0),
            i.params.watchSlidesVisibility)
                t.children("." + n.slideVisibleClass).each(function(e, t) {
                    var n = s ? D(t).attr("data-swiper-slide-index") : D(t).index();
                    i.lazy.loadInSlide(n)
                });
            else if (1 < a)
                for (var c = e; c < e + a; c += 1)
                    l(c) && i.lazy.loadInSlide(c);
            else
                i.lazy.loadInSlide(e);
            if (o.loadPrevNext)
                if (1 < a || o.loadPrevNextAmount && 1 < o.loadPrevNextAmount) {
                    for (var d = o.loadPrevNextAmount, h = a, f = Math.min(e + h + Math.max(d, h), r.length), p = Math.max(e - Math.max(h, d), 0), m = e + a; m < f; m += 1)
                        l(m) && i.lazy.loadInSlide(m);
                    for (var g = p; g < e; g += 1)
                        l(g) && i.lazy.loadInSlide(g)
                } else {
                    var v = t.children("." + n.slideNextClass);
                    0 < v.length && i.lazy.loadInSlide(u(v));
                    var y = t.children("." + n.slidePrevClass);
                    0 < y.length && i.lazy.loadInSlide(u(y))
                }
        }
    }
      , W = {
        LinearSpline: function(e, t) {
            var n, i, r, s, o, a = function(e, t) {
                for (i = -1,
                n = e.length; 1 < n - i; )
                    e[r = n + i >> 1] <= t ? i = r : n = r;
                return n
            };
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (o = a(this.x, e),
                s = o - 1,
                (e - this.x[s]) * (this.y[o] - this.y[s]) / (this.x[o] - this.x[s]) + this.y[s]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function(e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new W.LinearSpline(this.slidesGrid,e.slidesGrid) : new W.LinearSpline(this.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var n, i, r = this, s = r.controller.control;
            function o(e) {
                var t = r.rtlTranslate ? -r.translate : r.translate;
                "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e),
                i = -r.controller.spline.interpolate(-t)),
                i && "container" !== r.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()),
                i = (t - r.minTranslate()) * n + e.minTranslate()),
                r.params.controller.inverse && (i = e.maxTranslate() - i),
                e.updateProgress(i),
                e.setTranslate(i, r),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(s))
                for (var a = 0; a < s.length; a += 1)
                    s[a] !== t && s[a]instanceof S && o(s[a]);
            else
                s instanceof S && t !== s && o(s)
        },
        setTransition: function(t, e) {
            var n, i = this, r = i.controller.control;
            function s(e) {
                e.setTransition(t, i),
                0 !== t && (e.transitionStart(),
                e.params.autoHeight && ee.nextTick(function() {
                    e.updateAutoHeight()
                }),
                e.$wrapperEl.transitionEnd(function() {
                    r && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(),
                    e.transitionEnd())
                }))
            }
            if (Array.isArray(r))
                for (n = 0; n < r.length; n += 1)
                    r[n] !== e && r[n]instanceof S && s(r[n]);
            else
                r instanceof S && e !== r && s(r)
        }
    }
      , V = {
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
            e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
            e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
            e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
            e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
            e
        },
        onEnterKey: function(e) {
            var t = this
              , n = t.params.a11y;
            if (13 === e.keyCode) {
                var i = D(e.target);
                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
                t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)),
                t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
                t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)),
                t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
            }
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation: function() {
            if (!this.params.loop) {
                var e = this.navigation
                  , t = e.$nextEl
                  , n = e.$prevEl;
                n && 0 < n.length && (this.isBeginning ? this.a11y.disableEl(n) : this.a11y.enableEl(n)),
                t && 0 < t.length && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
            }
        },
        updatePagination: function() {
            var i = this
              , r = i.params.a11y;
            i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function(e, t) {
                var n = D(t);
                i.a11y.makeElFocusable(n),
                i.a11y.addElRole(n, "button"),
                i.a11y.addElLabel(n, r.paginationBulletMessage.replace(/{{index}}/, n.index() + 1))
            })
        },
        init: function() {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t, n, i = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
            t && (e.a11y.makeElFocusable(t),
            e.a11y.addElRole(t, "button"),
            e.a11y.addElLabel(t, i.nextSlideMessage),
            t.on("keydown", e.a11y.onEnterKey)),
            n && (e.a11y.makeElFocusable(n),
            e.a11y.addElRole(n, "button"),
            e.a11y.addElLabel(n, i.prevSlideMessage),
            n.on("keydown", e.a11y.onEnterKey)),
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t, n = this;
            n.a11y.liveRegion && 0 < n.a11y.liveRegion.length && n.a11y.liveRegion.remove(),
            n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl),
            n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl),
            e && e.off("keydown", n.a11y.onEnterKey),
            t && t.off("keydown", n.a11y.onEnterKey),
            n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", "." + n.params.pagination.bulletClass, n.a11y.onEnterKey)
        }
    }
      , X = {
        init: function() {
            if (this.params.history) {
                if (!J.history || !J.history.pushState)
                    return this.params.history.enabled = !1,
                    void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0,
                e.paths = X.getPathValues(),
                (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit),
                this.params.history.replaceState || J.addEventListener("popstate", this.history.setHistoryPopState))
            }
        },
        destroy: function() {
            this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            this.history.paths = X.getPathValues(),
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues: function() {
            var e = J.location.pathname.slice(1).split("/").filter(function(e) {
                return "" !== e
            })
              , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory: function(e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var n = this.slides.eq(t)
                  , i = X.slugify(n.attr("data-history"));
                J.location.pathname.includes(e) || (i = e + "/" + i);
                var r = J.history.state;
                r && r.value === i || (this.params.history.replaceState ? J.history.replaceState({
                    value: i
                }, null, i) : J.history.pushState({
                    value: i
                }, null, i))
            }
        },
        slugify: function(e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, n) {
            if (t)
                for (var i = 0, r = this.slides.length; i < r; i += 1) {
                    var s = this.slides.eq(i);
                    if (X.slugify(s.attr("data-history")) === t && !s.hasClass(this.params.slideDuplicateClass)) {
                        var o = s.index();
                        this.slideTo(o, e, n)
                    }
                }
            else
                this.slideTo(0, e, n)
        }
    }
      , Y = {
        onHashCange: function() {
            var e = m.location.hash.replace("#", "");
            if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var t = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
                if (void 0 === t)
                    return;
                this.slideTo(t)
            }
        },
        setHash: function() {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                if (this.params.hashNavigation.replaceState && J.history && J.history.replaceState)
                    J.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                else {
                    var e = this.slides.eq(this.activeIndex)
                      , t = e.attr("data-hash") || e.attr("data-history");
                    m.location.hash = t || ""
                }
        },
        init: function() {
            var e = this;
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var t = m.location.hash.replace("#", "");
                if (t)
                    for (var n = 0, i = e.slides.length; n < i; n += 1) {
                        var r = e.slides.eq(n);
                        if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(e.params.slideDuplicateClass)) {
                            var s = r.index();
                            e.slideTo(s, 0, e.params.runCallbacksOnInit, !0)
                        }
                    }
                e.params.hashNavigation.watchState && D(J).on("hashchange", e.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            this.params.hashNavigation.watchState && D(J).off("hashchange", this.hashNavigation.onHashCange)
        }
    }
      , G = {
        run: function() {
            var e = this
              , t = e.slides.eq(e.activeIndex)
              , n = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            e.autoplay.timeout = ee.nextTick(function() {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.params.loop ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
            }, n)
        },
        start: function() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0,
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0))
        },
        stop: function() {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout),
            this.autoplay.timeout = void 0),
            this.autoplay.running = !1,
            this.emit("autoplayStop"),
            !0))
        },
        pause: function(e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            t.autoplay.paused = !0,
            0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd),
            t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1,
            t.autoplay.run())))
        }
    }
      , U = {
        setTranslate: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var n = this.slides.eq(t)
                  , i = -n[0].swiperSlideOffset;
                this.params.virtualTranslate || (i -= this.translate);
                var r = 0;
                this.isHorizontal() || (r = i,
                i = 0);
                var s = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                n.css({
                    opacity: s
                }).transform("translate3d(" + i + "px, " + r + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var n = this
              , t = n.slides
              , i = n.$wrapperEl;
            if (t.transition(e),
            n.params.virtualTranslate && 0 !== e) {
                var r = !1;
                t.transitionEnd(function() {
                    if (!r && n && !n.destroyed) {
                        r = !0,
                        n.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                            i.trigger(e[t])
                    }
                })
            }
        }
    }
      , Q = {
        setTranslate: function() {
            var e, t = this, n = t.$el, i = t.$wrapperEl, r = t.slides, s = t.width, o = t.height, a = t.rtlTranslate, l = t.size, u = t.params.cubeEffect, c = t.isHorizontal(), d = t.virtual && t.params.virtual.enabled, h = 0;
            u.shadow && (c ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = D('<div class="swiper-cube-shadow"></div>'),
            i.append(e)),
            e.css({
                height: s + "px"
            })) : 0 === (e = n.find(".swiper-cube-shadow")).length && (e = D('<div class="swiper-cube-shadow"></div>'),
            n.append(e)));
            for (var f = 0; f < r.length; f += 1) {
                var p = r.eq(f)
                  , m = f;
                d && (m = parseInt(p.attr("data-swiper-slide-index"), 10));
                var g = 90 * m
                  , v = Math.floor(g / 360);
                a && (g = -g,
                v = Math.floor(-g / 360));
                var y = Math.max(Math.min(p[0].progress, 1), -1)
                  , b = 0
                  , w = 0
                  , x = 0;
                m % 4 == 0 ? (b = 4 * -v * l,
                x = 0) : (m - 1) % 4 == 0 ? (b = 0,
                x = 4 * -v * l) : (m - 2) % 4 == 0 ? (b = l + 4 * v * l,
                x = l) : (m - 3) % 4 == 0 && (b = -l,
                x = 3 * l + 4 * l * v),
                a && (b = -b),
                c || (w = b,
                b = 0);
                var E = "rotateX(" + (c ? 0 : -g) + "deg) rotateY(" + (c ? g : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + x + "px)";
                if (y <= 1 && -1 < y && (h = 90 * m + 90 * y,
                a && (h = 90 * -m - 90 * y)),
                p.transform(E),
                u.slideShadows) {
                    var C = c ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top")
                      , S = c ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                    0 === C.length && (C = D('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'),
                    p.append(C)),
                    0 === S.length && (S = D('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'),
                    p.append(S)),
                    C.length && (C[0].style.opacity = Math.max(-y, 0)),
                    S.length && (S[0].style.opacity = Math.max(y, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }),
            u.shadow)
                if (c)
                    e.transform("translate3d(0px, " + (s / 2 + u.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
                else {
                    var T = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)
                      , _ = 1.5 - (Math.sin(2 * T * Math.PI / 360) / 2 + Math.cos(2 * T * Math.PI / 360) / 2)
                      , k = u.shadowScale
                      , A = u.shadowScale / _
                      , O = u.shadowOffset;
                    e.transform("scale3d(" + k + ", 1, " + A + ") translate3d(0px, " + (o / 2 + O) + "px, " + -o / 2 / A + "px) rotateX(-90deg)")
                }
            var M = L.isSafari || L.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + M + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }
      , K = {
        setTranslate: function() {
            for (var e = this.slides, t = this.rtlTranslate, n = 0; n < e.length; n += 1) {
                var i = e.eq(n)
                  , r = i[0].progress;
                this.params.flipEffect.limitRotation && (r = Math.max(Math.min(i[0].progress, 1), -1));
                var s = -180 * r
                  , o = 0
                  , a = -i[0].swiperSlideOffset
                  , l = 0;
                if (this.isHorizontal() ? t && (s = -s) : (l = a,
                o = -s,
                s = a = 0),
                i[0].style.zIndex = -Math.abs(Math.round(r)) + e.length,
                this.params.flipEffect.slideShadows) {
                    var u = this.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top")
                      , c = this.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                    0 === u.length && (u = D('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'),
                    i.append(u)),
                    0 === c.length && (c = D('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    i.append(c)),
                    u.length && (u[0].style.opacity = Math.max(-r, 0)),
                    c.length && (c[0].style.opacity = Math.max(r, 0))
                }
                i.transform("translate3d(" + a + "px, " + l + "px, 0px) rotateX(" + o + "deg) rotateY(" + s + "deg)")
            }
        },
        setTransition: function(e) {
            var n = this
              , t = n.slides
              , i = n.activeIndex
              , r = n.$wrapperEl;
            if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            n.params.virtualTranslate && 0 !== e) {
                var s = !1;
                t.eq(i).transitionEnd(function() {
                    if (!s && n && !n.destroyed) {
                        s = !0,
                        n.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                            r.trigger(e[t])
                    }
                })
            }
        }
    }
      , Z = {
        setTranslate: function() {
            for (var e = this.width, t = this.height, n = this.slides, i = this.$wrapperEl, r = this.slidesSizesGrid, s = this.params.coverflowEffect, o = this.isHorizontal(), a = this.translate, l = o ? e / 2 - a : t / 2 - a, u = o ? s.rotate : -s.rotate, c = s.depth, d = 0, h = n.length; d < h; d += 1) {
                var f = n.eq(d)
                  , p = r[d]
                  , m = (l - f[0].swiperSlideOffset - p / 2) / p * s.modifier
                  , g = o ? u * m : 0
                  , v = o ? 0 : u * m
                  , y = -c * Math.abs(m)
                  , b = o ? 0 : s.stretch * m
                  , w = o ? s.stretch * m : 0;
                Math.abs(w) < .001 && (w = 0),
                Math.abs(b) < .001 && (b = 0),
                Math.abs(y) < .001 && (y = 0),
                Math.abs(g) < .001 && (g = 0),
                Math.abs(v) < .001 && (v = 0);
                var x = "translate3d(" + w + "px," + b + "px," + y + "px)  rotateX(" + v + "deg) rotateY(" + g + "deg)";
                if (f.transform(x),
                f[0].style.zIndex = 1 - Math.abs(Math.round(m)),
                s.slideShadows) {
                    var E = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                      , C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = D('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'),
                    f.append(E)),
                    0 === C.length && (C = D('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'),
                    f.append(C)),
                    E.length && (E[0].style.opacity = 0 < m ? m : 0),
                    C.length && (C[0].style.opacity = 0 < -m ? -m : 0)
                }
            }
            (te.pointerEvents || te.prefixedPointerEvents) && (i[0].style.perspectiveOrigin = l + "px 50%")
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
      , ne = {
        init: function() {
            var e = this
              , t = e.params.thumbs
              , n = e.constructor;
            t.swiper instanceof n ? (e.thumbs.swiper = t.swiper,
            ee.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            ee.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new n(ee.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
            e.thumbs.swiperCreated = !0),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
        },
        onThumbClick: function() {
            var e = this
              , t = e.thumbs.swiper;
            if (t) {
                var n = t.clickedIndex
                  , i = t.clickedSlide;
                if (!(i && D(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == n)) {
                    var r;
                    if (r = t.params.loop ? parseInt(D(t.clickedSlide).attr("data-swiper-slide-index"), 10) : n,
                    e.params.loop) {
                        var s = e.activeIndex;
                        e.slides.eq(s).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                        e._clientLeft = e.$wrapperEl[0].clientLeft,
                        s = e.activeIndex);
                        var o = e.slides.eq(s).prevAll('[data-swiper-slide-index="' + r + '"]').eq(0).index()
                          , a = e.slides.eq(s).nextAll('[data-swiper-slide-index="' + r + '"]').eq(0).index();
                        r = void 0 === o ? a : void 0 === a ? o : a - s < s - o ? a : o
                    }
                    e.slideTo(r)
                }
            }
        },
        update: function(e) {
            var t = this
              , n = t.thumbs.swiper;
            if (n) {
                var i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView;
                if (t.realIndex !== n.realIndex) {
                    var r, s = n.activeIndex;
                    if (n.params.loop) {
                        n.slides.eq(s).hasClass(n.params.slideDuplicateClass) && (n.loopFix(),
                        n._clientLeft = n.$wrapperEl[0].clientLeft,
                        s = n.activeIndex);
                        var o = n.slides.eq(s).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index()
                          , a = n.slides.eq(s).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                        r = void 0 === o ? a : void 0 === a ? o : a - s == s - o ? s : a - s < s - o ? a : o
                    } else
                        r = t.realIndex;
                    n.visibleSlidesIndexes.indexOf(r) < 0 && (n.params.centeredSlides ? r = s < r ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : s < r && (r = r - i + 1),
                    n.slideTo(r, e ? 0 : void 0))
                }
                var l = 1
                  , u = t.params.thumbs.slideThumbActiveClass;
                if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView),
                n.slides.removeClass(u),
                n.params.loop)
                    for (var c = 0; c < l; c += 1)
                        n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + c) + '"]').addClass(u);
                else
                    for (var d = 0; d < l; d += 1)
                        n.slides.eq(t.realIndex + d).addClass(u)
            }
        }
    }
      , ie = [T, _, k, A, M, P, F, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function() {
            ee.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: j.enable.bind(this),
                    disable: j.disable.bind(this),
                    handle: j.handle.bind(this),
                    handleMouseEnter: j.handleMouseEnter.bind(this),
                    handleMouseLeave: j.handleMouseLeave.bind(this),
                    lastScrollTime: ee.now()
                }
            })
        },
        on: {
            init: function() {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function() {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            ee.extend(this, {
                navigation: {
                    init: B.init.bind(this),
                    update: B.update.bind(this),
                    destroy: B.destroy.bind(this),
                    onNextClick: B.onNextClick.bind(this),
                    onPrevClick: B.onPrevClick.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.navigation.init(),
                this.navigation.update()
            },
            toEdge: function() {
                this.navigation.update()
            },
            fromEdge: function() {
                this.navigation.update()
            },
            destroy: function() {
                this.navigation.destroy()
            },
            click: function(e) {
                var t = this.navigation
                  , n = t.$nextEl
                  , i = t.$prevEl;
                !this.params.navigation.hideOnClick || D(e.target).is(i) || D(e.target).is(n) || (n && n.toggleClass(this.params.navigation.hiddenClass),
                i && i.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            ee.extend(this, {
                pagination: {
                    init: z.init.bind(this),
                    render: z.render.bind(this),
                    update: z.update.bind(this),
                    destroy: z.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function() {
                this.pagination.init(),
                this.pagination.render(),
                this.pagination.update()
            },
            activeIndexChange: function() {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            },
            snapIndexChange: function() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function() {
                this.params.loop && (this.pagination.render(),
                this.pagination.update())
            },
            snapGridLengthChange: function() {
                this.params.loop || (this.pagination.render(),
                this.pagination.update())
            },
            destroy: function() {
                this.pagination.destroy()
            },
            click: function(e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && 0 < this.pagination.$el.length && !D(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            var e = this;
            ee.extend(e, {
                scrollbar: {
                    init: H.init.bind(e),
                    destroy: H.destroy.bind(e),
                    updateSize: H.updateSize.bind(e),
                    setTranslate: H.setTranslate.bind(e),
                    setTransition: H.setTransition.bind(e),
                    enableDraggable: H.enableDraggable.bind(e),
                    disableDraggable: H.disableDraggable.bind(e),
                    setDragPosition: H.setDragPosition.bind(e),
                    onDragStart: H.onDragStart.bind(e),
                    onDragMove: H.onDragMove.bind(e),
                    onDragEnd: H.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function() {
                this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate()
            },
            update: function() {
                this.scrollbar.updateSize()
            },
            resize: function() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function() {
                this.scrollbar.updateSize()
            },
            setTranslate: function() {
                this.scrollbar.setTranslate()
            },
            setTransition: function(e) {
                this.scrollbar.setTransition(e)
            },
            destroy: function() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            ee.extend(this, {
                parallax: {
                    setTransform: q.setTransform.bind(this),
                    setTranslate: q.setTranslate.bind(this),
                    setTransition: q.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            init: function() {
                this.params.parallax && this.parallax.setTranslate()
            },
            setTranslate: function() {
                this.params.parallax && this.parallax.setTranslate()
            },
            setTransition: function(e) {
                this.params.parallax && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var i = this
              , t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                t[e] = R[e].bind(i)
            }),
            ee.extend(i, {
                zoom: t
            });
            var r = 1;
            Object.defineProperty(i.zoom, "scale", {
                get: function() {
                    return r
                },
                set: function(e) {
                    if (r !== e) {
                        var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0
                          , n = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
                        i.emit("zoomChange", e, t, n)
                    }
                    r = e
                }
            })
        },
        on: {
            init: function() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function() {
                this.zoom.disable()
            },
            touchStart: function(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd: function(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap: function(e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            },
            transitionEnd: function() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            ee.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: $.load.bind(this),
                    loadInSlide: $.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function() {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            },
            transitionEnd: function() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            ee.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: W.getInterpolateFunction.bind(this),
                    setTranslate: W.setTranslate.bind(this),
                    setTransition: W.setTransition.bind(this)
                }
            })
        },
        on: {
            update: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            resize: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            observerUpdate: function() {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0,
                delete this.controller.spline)
            },
            setTranslate: function(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition: function(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function() {
            var t = this;
            ee.extend(t, {
                a11y: {
                    liveRegion: D('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
            Object.keys(V).forEach(function(e) {
                t.a11y[e] = V[e].bind(t)
            })
        },
        on: {
            init: function() {
                this.params.a11y.enabled && (this.a11y.init(),
                this.a11y.updateNavigation())
            },
            toEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            ee.extend(this, {
                history: {
                    init: X.init.bind(this),
                    setHistory: X.setHistory.bind(this),
                    setHistoryPopState: X.setHistoryPopState.bind(this),
                    scrollToSlide: X.scrollToSlide.bind(this),
                    destroy: X.destroy.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            ee.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: Y.init.bind(this),
                    destroy: Y.destroy.bind(this),
                    setHash: Y.setHash.bind(this),
                    onHashCange: Y.onHashCange.bind(this)
                }
            })
        },
        on: {
            init: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            var t = this;
            ee.extend(t, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: G.run.bind(t),
                    start: G.start.bind(t),
                    stop: G.stop.bind(t),
                    pause: G.pause.bind(t),
                    onTransitionEnd: function(e) {
                        t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd),
                        t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd),
                        t.autoplay.paused = !1,
                        t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function() {
                this.params.autoplay.enabled && this.autoplay.start()
            },
            beforeTransitionStart: function(e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            },
            sliderFirstMove: function() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            destroy: function() {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            ee.extend(this, {
                fadeEffect: {
                    setTranslate: U.setTranslate.bind(this),
                    setTransition: U.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    ee.extend(this.params, e),
                    ee.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            ee.extend(this, {
                cubeEffect: {
                    setTranslate: Q.setTranslate.bind(this),
                    setTransition: Q.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    ee.extend(this.params, e),
                    ee.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            ee.extend(this, {
                flipEffect: {
                    setTranslate: K.setTranslate.bind(this),
                    setTransition: K.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    ee.extend(this.params, e),
                    ee.extend(this.originalParams, e)
                }
            },
            setTranslate: function() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            ee.extend(this, {
                coverflowEffect: {
                    setTranslate: Z.setTranslate.bind(this),
                    setTransition: Z.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                this.params.watchSlidesProgress = !0,
                this.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            ee.extend(this, {
                thumbs: {
                    swiper: null,
                    init: ne.init.bind(this),
                    update: ne.update.bind(this),
                    onThumbClick: ne.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function() {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(),
                this.thumbs.update(!0))
            },
            slideChange: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate: function() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition: function(e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            },
            beforeDestroy: function() {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === S.use && (S.use = S.Class.use,
    S.installModule = S.Class.installModule),
    S.use(ie),
    S
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).SimpleBar = t()
}(this, function() {
    "use strict";
    var r = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
      , S = function(e) {
        if (!r(e))
            throw TypeError(e + " is not an object!");
        return e
    }
      , c = function(e) {
        if (null == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
      , f = function(e) {
        return Object(c(e))
    }
      , t = Math.ceil
      , n = Math.floor
      , T = function(e) {
        return isNaN(e = +e) ? 0 : (0 < e ? n : t)(e)
    }
      , i = Math.min
      , _ = function(e) {
        return 0 < e ? i(T(e), 9007199254740991) : 0
    }
      , e = function(a) {
        return function(e, t) {
            var n, i, r = String(c(e)), s = T(t), o = r.length;
            return s < 0 || o <= s ? a ? "" : void 0 : (n = r.charCodeAt(s)) < 55296 || 56319 < n || s + 1 === o || (i = r.charCodeAt(s + 1)) < 56320 || 57343 < i ? a ? r.charAt(s) : n : a ? r.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
        }
    }
      , s = e(!0)
      , k = function(e, t, n) {
        return t + (n ? s(e, t).length : 1)
    }
      , o = {}.toString
      , a = function(e) {
        return o.call(e).slice(8, -1)
    }
      , l = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function u(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }
    var d, h, m = u(function(e) {
        var t = e.exports = {
            version: "2.6.2"
        };
        "number" == typeof __e && (__e = t)
    }), g = (m.version,
    u(function(e) {
        var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t)
    })), p = u(function(e) {
        var t = "__core-js_shared__"
          , n = g[t] || (g[t] = {});
        (e.exports = function(e, t) {
            return n[e] || (n[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: m.version,
            mode: "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }), v = 0, y = Math.random(), b = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++v + y).toString(36))
    }, w = u(function(e) {
        var t = p("wks")
          , n = g.Symbol
          , i = "function" == typeof n;
        (e.exports = function(e) {
            return t[e] || (t[e] = i && n[e] || (i ? n : b)("Symbol." + e))
        }
        ).store = t
    }), x = w("toStringTag"), E = "Arguments" == a(function() {
        return arguments
    }()), C = function(e) {
        var t, n, i;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), x)) ? n : E ? a(t) : "Object" == (i = a(t)) && "function" == typeof t.callee ? "Arguments" : i
    }, A = RegExp.prototype.exec, O = function(e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var i = n.call(e, t);
            if ("object" != typeof i)
                throw new TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== C(e))
            throw new TypeError("RegExp#exec called on incompatible receiver");
        return A.call(e, t)
    }, M = RegExp.prototype.exec, D = String.prototype.replace, L = M, N = "lastIndex", P = (d = /a/,
    h = /b*/g,
    M.call(d, "a"),
    M.call(h, "a"),
    0 !== d[N] || 0 !== h[N]), I = void 0 !== /()??/.exec("")[1];
    (P || I) && (L = function(e) {
        var t, n, i, r;
        return I && (n = new RegExp("^" + this.source + "$(?!\\s)",function() {
            var e = S(this)
              , t = "";
            return e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.unicode && (t += "u"),
            e.sticky && (t += "y"),
            t
        }
        .call(this))),
        P && (t = this[N]),
        i = M.call(this, e),
        P && i && (this[N] = this.global ? i.index + i[0].length : t),
        I && i && 1 < i.length && D.call(i[0], n, function() {
            for (r = 1; r < arguments.length - 2; r++)
                void 0 === arguments[r] && (i[r] = void 0)
        }),
        i
    }
    );
    var F = L
      , j = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
      , B = !j(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
      , z = g.document
      , H = r(z) && r(z.createElement)
      , q = function(e) {
        return H ? z.createElement(e) : {}
    }
      , R = !B && !j(function() {
        return 7 != Object.defineProperty(q("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
      , $ = Object.defineProperty
      , W = {
        f: B ? Object.defineProperty : function(e, t, n) {
            if (S(e),
            t = function(e, t) {
                if (!r(e))
                    return e;
                var n, i;
                if (t && "function" == typeof (n = e.toString) && !r(i = n.call(e)))
                    return i;
                if ("function" == typeof (n = e.valueOf) && !r(i = n.call(e)))
                    return i;
                if (!t && "function" == typeof (n = e.toString) && !r(i = n.call(e)))
                    return i;
                throw TypeError("Can't convert object to primitive value")
            }(t, !0),
            S(n),
            R)
                try {
                    return $(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported!");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
      , V = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
      , X = B ? function(e, t, n) {
        return W.f(e, t, V(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
      , Y = {}.hasOwnProperty
      , G = function(e, t) {
        return Y.call(e, t)
    }
      , U = u(function(e) {
        var s = b("src")
          , t = "toString"
          , n = Function[t]
          , o = ("" + n).split(t);
        m.inspectSource = function(e) {
            return n.call(e)
        }
        ,
        (e.exports = function(e, t, n, i) {
            var r = "function" == typeof n;
            r && (G(n, "name") || X(n, "name", t)),
            e[t] !== n && (r && (G(n, s) || X(n, s, e[t] ? "" + e[t] : o.join(String(t)))),
            e === g ? e[t] = n : i ? e[t] ? e[t] = n : X(e, t, n) : (delete e[t],
            X(e, t, n)))
        }
        )(Function.prototype, t, function() {
            return "function" == typeof this && this[s] || n.call(this)
        })
    })
      , Q = function(i, r, e) {
        if (function(e) {
            if ("function" != typeof e)
                throw TypeError(e + " is not a function!")
        }(i),
        void 0 === r)
            return i;
        switch (e) {
        case 1:
            return function(e) {
                return i.call(r, e)
            }
            ;
        case 2:
            return function(e, t) {
                return i.call(r, e, t)
            }
            ;
        case 3:
            return function(e, t, n) {
                return i.call(r, e, t, n)
            }
        }
        return function() {
            return i.apply(r, arguments)
        }
    }
      , K = "prototype"
      , Z = function(e, t, n) {
        var i, r, s, o, a = e & Z.F, l = e & Z.G, u = e & Z.S, c = e & Z.P, d = e & Z.B, h = l ? g : u ? g[t] || (g[t] = {}) : (g[t] || {})[K], f = l ? m : m[t] || (m[t] = {}), p = f[K] || (f[K] = {});
        for (i in l && (n = t),
        n)
            s = ((r = !a && h && void 0 !== h[i]) ? h : n)[i],
            o = d && r ? Q(s, g) : c && "function" == typeof s ? Q(Function.call, s) : s,
            h && U(h, i, s, e & Z.U),
            f[i] != s && X(f, i, o),
            c && p[i] != s && (p[i] = s)
    };
    g.core = m,
    Z.F = 1,
    Z.G = 2,
    Z.S = 4,
    Z.P = 8,
    Z.B = 16,
    Z.W = 32,
    Z.U = 64,
    Z.R = 128;
    var J = Z;
    J({
        target: "RegExp",
        proto: !0,
        forced: F !== /./.exec
    }, {
        exec: F
    });
    var ee = w("species")
      , te = !j(function() {
        var e = /./;
        return e.exec = function() {
            var e = [];
            return e.groups = {
                a: "7"
            },
            e
        }
        ,
        "7" !== "".replace(e, "$<a>")
    })
      , ne = function() {
        var e = /(?:)/
          , t = e.exec;
        e.exec = function() {
            return t.apply(this, arguments)
        }
        ;
        var n = "ab".split(e);
        return 2 === n.length && "a" === n[0] && "b" === n[1]
    }()
      , ie = function(n, e, t) {
        var i = w(n)
          , s = !j(function() {
            var e = {};
            return e[i] = function() {
                return 7
            }
            ,
            7 != ""[n](e)
        })
          , r = s ? !j(function() {
            var e = !1
              , t = /a/;
            return t.exec = function() {
                return e = !0,
                null
            }
            ,
            "split" === n && (t.constructor = {},
            t.constructor[ee] = function() {
                return t
            }
            ),
            t[i](""),
            !e
        }) : void 0;
        if (!s || !r || "replace" === n && !te || "split" === n && !ne) {
            var o = /./[i]
              , a = t(c, i, ""[n], function(e, t, n, i, r) {
                return t.exec === F ? s && !r ? {
                    done: !0,
                    value: o.call(t, n, i)
                } : {
                    done: !0,
                    value: e.call(n, t, i)
                } : {
                    done: !1
                }
            })
              , l = a[0]
              , u = a[1];
            U(String.prototype, n, l),
            X(RegExp.prototype, i, 2 == e ? function(e, t) {
                return u.call(e, this, t)
            }
            : function(e) {
                return u.call(e, this)
            }
            )
        }
    }
      , re = Math.max
      , se = Math.min
      , oe = Math.floor
      , ae = /\$([$&`']|\d\d?|<[^>]*>)/g
      , le = /\$([$&`']|\d\d?)/g;
    ie("replace", 2, function(r, s, x, E) {
        return [function(e, t) {
            var n = r(this)
              , i = null == e ? void 0 : e[s];
            return void 0 !== i ? i.call(e, n, t) : x.call(String(n), e, t)
        }
        , function(e, t) {
            var n = E(x, e, this, t);
            if (n.done)
                return n.value;
            var i = S(e)
              , r = String(this)
              , s = "function" == typeof t;
            s || (t = String(t));
            var o = i.global;
            if (o) {
                var a = i.unicode;
                i.lastIndex = 0
            }
            for (var l = []; ; ) {
                var u = O(i, r);
                if (null === u)
                    break;
                if (l.push(u),
                !o)
                    break;
                "" === String(u[0]) && (i.lastIndex = k(r, _(i.lastIndex), a))
            }
            for (var c, d = "", h = 0, f = 0; f < l.length; f++) {
                u = l[f];
                for (var p = String(u[0]), m = re(se(T(u.index), r.length), 0), g = [], v = 1; v < u.length; v++)
                    g.push(void 0 === (c = u[v]) ? c : String(c));
                var y = u.groups;
                if (s) {
                    var b = [p].concat(g, m, r);
                    void 0 !== y && b.push(y);
                    var w = String(t.apply(void 0, b))
                } else
                    w = C(p, r, m, g, y, t);
                h <= m && (d += r.slice(h, m) + w,
                h = m + p.length)
            }
            return d + r.slice(h)
        }
        ];
        function C(s, o, a, l, u, e) {
            var c = a + s.length
              , d = l.length
              , t = le;
            return void 0 !== u && (u = f(u),
            t = ae),
            x.call(e, t, function(e, t) {
                var n;
                switch (t.charAt(0)) {
                case "$":
                    return "$";
                case "&":
                    return s;
                case "`":
                    return o.slice(0, a);
                case "'":
                    return o.slice(c);
                case "<":
                    n = u[t.slice(1, -1)];
                    break;
                default:
                    var i = +t;
                    if (0 === i)
                        return e;
                    if (d < i) {
                        var r = oe(i / 10);
                        return 0 === r ? e : r <= d ? void 0 === l[r - 1] ? t.charAt(1) : l[r - 1] + t.charAt(1) : e
                    }
                    n = l[i - 1]
                }
                return void 0 === n ? "" : n
            })
        }
    });
    var ue = W.f
      , ce = Function.prototype
      , de = /^\s*function ([^ (]*)/;
    "name"in ce || B && ue(ce, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(de)[1]
            } catch (e) {
                return ""
            }
        }
    }),
    ie("match", 1, function(i, r, u, c) {
        return [function(e) {
            var t = i(this)
              , n = null == e ? void 0 : e[r];
            return void 0 !== n ? n.call(e, t) : new RegExp(e)[r](String(t))
        }
        , function(e) {
            var t = c(u, e, this);
            if (t.done)
                return t.value;
            var n = S(e)
              , i = String(this);
            if (!n.global)
                return O(n, i);
            for (var r, s = n.unicode, o = [], a = n.lastIndex = 0; null !== (r = O(n, i)); ) {
                var l = String(r[0]);
                "" === (o[a] = l) && (n.lastIndex = k(i, _(n.lastIndex), s)),
                a++
            }
            return 0 === a ? null : o
        }
        ]
    });
    var he = w("unscopables")
      , fe = Array.prototype;
    null == fe[he] && X(fe, he, {});
    var pe, me = function(e) {
        fe[he][e] = !0
    }, ge = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }, ve = {}, ye = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == a(e) ? e.split("") : Object(e)
    }
    , be = function(e) {
        return ye(c(e))
    }, we = Math.max, xe = Math.min, Ee = p("keys"), Ce = function(e) {
        return Ee[e] || (Ee[e] = b(e))
    }, Se = (pe = !1,
    function(e, t, n) {
        var i, r, s, o = be(e), a = _(o.length), l = (r = a,
        (i = T(i = n)) < 0 ? we(i + r, 0) : xe(i, r));
        if (pe && t != t) {
            for (; l < a; )
                if ((s = o[l++]) != s)
                    return !0
        } else
            for (; l < a; l++)
                if ((pe || l in o) && o[l] === t)
                    return pe || l || 0;
        return !pe && -1
    }
    ), Te = Ce("IE_PROTO"), _e = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), ke = Object.keys || function(e) {
        return function(e, t) {
            var n, i = be(e), r = 0, s = [];
            for (n in i)
                n != Te && G(i, n) && s.push(n);
            for (; t.length > r; )
                G(i, n = t[r++]) && (~Se(s, n) || s.push(n));
            return s
        }(e, _e)
    }
    , Ae = B ? Object.defineProperties : function(e, t) {
        S(e);
        for (var n, i = ke(t), r = i.length, s = 0; s < r; )
            W.f(e, n = i[s++], t[n]);
        return e
    }
    , Oe = g.document, Me = Oe && Oe.documentElement, De = Ce("IE_PROTO"), Le = function() {}, Ne = "prototype", Pe = function() {
        var e, t = q("iframe"), n = _e.length;
        for (t.style.display = "none",
        Me.appendChild(t),
        t.src = "javascript:",
        (e = t.contentWindow.document).open(),
        e.write("<script>document.F=Object<\/script>"),
        e.close(),
        Pe = e.F; n--; )
            delete Pe[Ne][_e[n]];
        return Pe()
    }, Ie = Object.create || function(e, t) {
        var n;
        return null !== e ? (Le[Ne] = S(e),
        n = new Le,
        Le[Ne] = null,
        n[De] = e) : n = Pe(),
        void 0 === t ? n : Ae(n, t)
    }
    , Fe = W.f, je = w("toStringTag"), Be = function(e, t, n) {
        e && !G(e = n ? e : e.prototype, je) && Fe(e, je, {
            configurable: !0,
            value: t
        })
    }, ze = {};
    X(ze, w("iterator"), function() {
        return this
    });
    var He = Ce("IE_PROTO")
      , qe = Object.prototype
      , Re = Object.getPrototypeOf || function(e) {
        return e = f(e),
        G(e, He) ? e[He] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? qe : null
    }
      , $e = w("iterator")
      , We = !([].keys && "next"in [].keys())
      , Ve = "values"
      , Xe = function() {
        return this
    }
      , Ye = function(e, t, n, i, r, s, o) {
        var a, l, u;
        l = t,
        u = i,
        (a = n).prototype = Ie(ze, {
            next: V(1, u)
        }),
        Be(a, l + " Iterator");
        var c, d, h, f = function(e) {
            if (!We && e in v)
                return v[e];
            switch (e) {
            case "keys":
            case Ve:
                return function() {
                    return new n(this,e)
                }
            }
            return function() {
                return new n(this,e)
            }
        }, p = t + " Iterator", m = r == Ve, g = !1, v = e.prototype, y = v[$e] || v["@@iterator"] || r && v[r], b = y || f(r), w = r ? m ? f("entries") : b : void 0, x = "Array" == t && v.entries || y;
        if (x && (h = Re(x.call(new e))) !== Object.prototype && h.next && (Be(h, p, !0),
        "function" != typeof h[$e] && X(h, $e, Xe)),
        m && y && y.name !== Ve && (g = !0,
        b = function() {
            return y.call(this)
        }
        ),
        (We || g || !v[$e]) && X(v, $e, b),
        ve[t] = b,
        ve[p] = Xe,
        r)
            if (c = {
                values: m ? b : f(Ve),
                keys: s ? b : f("keys"),
                entries: w
            },
            o)
                for (d in c)
                    d in v || U(v, d, c[d]);
            else
                J(J.P + J.F * (We || g), t, c);
        return c
    }
      , Ge = Ye(Array, "Array", function(e, t) {
        this._t = be(e),
        this._i = 0,
        this._k = t
    }, function() {
        var e = this._t
          , t = this._k
          , n = this._i++;
        return !e || n >= e.length ? (this._t = void 0,
        ge(1)) : ge(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values");
    ve.Arguments = ve.Array,
    me("keys"),
    me("values"),
    me("entries");
    for (var Ue = w("iterator"), Qe = w("toStringTag"), Ke = ve.Array, Ze = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, Je = ke(Ze), et = 0; et < Je.length; et++) {
        var tt, nt = Je[et], it = Ze[nt], rt = g[nt], st = rt && rt.prototype;
        if (st && (st[Ue] || X(st, Ue, Ke),
        st[Qe] || X(st, Qe, nt),
        ve[nt] = Ke,
        it))
            for (tt in Ge)
                st[tt] || U(st, tt, Ge[tt], !0)
    }
    var ot = e(!0);
    Ye(String, "String", function(e) {
        this._t = String(e),
        this._i = 0
    }, function() {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = ot(t, n),
        this._i += e.length,
        {
            value: e,
            done: !1
        })
    });
    var at = function(t, e, n, i) {
        try {
            return i ? e(S(n)[0], n[1]) : e(n)
        } catch (e) {
            var r = t.return;
            throw void 0 !== r && S(r.call(t)),
            e
        }
    }
      , lt = w("iterator")
      , ut = Array.prototype
      , ct = function(e, t, n) {
        t in e ? W.f(e, t, V(0, n)) : e[t] = n
    }
      , dt = w("iterator")
      , ht = m.getIteratorMethod = function(e) {
        if (null != e)
            return e[dt] || e["@@iterator"] || ve[C(e)]
    }
      , ft = w("iterator")
      , pt = !1;
    try {
        [7][ft]().return = function() {
            pt = !0
        }
    } catch (e) {}
    function mt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function gt(r) {
        for (var e = 1; e < arguments.length; e++) {
            var s = null != arguments[e] ? arguments[e] : {}
              , t = Object.keys(s);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(s).filter(function(e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable
            }))),
            t.forEach(function(e) {
                var t, n, i;
                t = r,
                i = s[n = e],
                n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            })
        }
        return r
    }
    J(J.S + J.F * !function(e, t) {
        if (!t && !pt)
            return !1;
        var n = !1;
        try {
            var i = [7]
              , r = i[ft]();
            r.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            i[ft] = function() {
                return r
            }
            ,
            e(i)
        } catch (e) {}
        return n
    }(function(e) {}), "Array", {
        from: function(e) {
            var t, n, i, r, s, o = f(e), a = "function" == typeof this ? this : Array, l = arguments.length, u = 1 < l ? arguments[1] : void 0, c = void 0 !== u, d = 0, h = ht(o);
            if (c && (u = Q(u, 2 < l ? arguments[2] : void 0, 2)),
            null != h && (a != Array || (void 0 === (s = h) || ve.Array !== s && ut[lt] !== s)))
                for (r = h.call(o),
                n = new a; !(i = r.next()).done; d++)
                    ct(n, d, c ? at(r, u, [i.value, d], !0) : i.value);
            else
                for (n = new a(t = _(o.length)); d < t; d++)
                    ct(n, d, c ? u(o[d], d) : o[d]);
            return n.length = d,
            n
        }
    });
    var vt = u(function(e, t) {
        e.exports = function() {
            if ("undefined" == typeof document)
                return 0;
            var e, t = document.body, n = document.createElement("div"), i = n.style;
            return i.position = "absolute",
            i.top = i.left = "-9999px",
            i.width = i.height = "100px",
            i.overflow = "scroll",
            t.appendChild(n),
            e = n.offsetWidth - n.clientWidth,
            t.removeChild(n),
            e
        }
    })
      , yt = "Expected a function"
      , bt = NaN
      , wt = "[object Symbol]"
      , xt = /^\s+|\s+$/g
      , Et = /^[-+]0x[0-9a-f]+$/i
      , Ct = /^0b[01]+$/i
      , St = /^0o[0-7]+$/i
      , Tt = parseInt
      , _t = "object" == typeof l && l && l.Object === Object && l
      , kt = "object" == typeof self && self && self.Object === Object && self
      , At = _t || kt || Function("return this")()
      , Ot = Object.prototype.toString
      , Mt = Math.max
      , Dt = Math.min
      , Lt = function() {
        return At.Date.now()
    };
    function Nt(i, r, e) {
        var s, o, a, l, u, c, d = 0, h = !1, f = !1, t = !0;
        if ("function" != typeof i)
            throw new TypeError(yt);
        function p(e) {
            var t = s
              , n = o;
            return s = o = void 0,
            d = e,
            l = i.apply(n, t)
        }
        function m(e) {
            var t = e - c;
            return void 0 === c || r <= t || t < 0 || f && a <= e - d
        }
        function g() {
            var e, t, n = Lt();
            if (m(n))
                return v(n);
            u = setTimeout(g, (t = r - ((e = n) - c),
            f ? Dt(t, a - (e - d)) : t))
        }
        function v(e) {
            return u = void 0,
            t && s ? p(e) : (s = o = void 0,
            l)
        }
        function n() {
            var e, t = Lt(), n = m(t);
            if (s = arguments,
            o = this,
            c = t,
            n) {
                if (void 0 === u)
                    return d = e = c,
                    u = setTimeout(g, r),
                    h ? p(e) : l;
                if (f)
                    return u = setTimeout(g, r),
                    p(c)
            }
            return void 0 === u && (u = setTimeout(g, r)),
            l
        }
        return r = It(r) || 0,
        Pt(e) && (h = !!e.leading,
        a = (f = "maxWait"in e) ? Mt(It(e.maxWait) || 0, r) : a,
        t = "trailing"in e ? !!e.trailing : t),
        n.cancel = function() {
            void 0 !== u && clearTimeout(u),
            s = c = o = u = void (d = 0)
        }
        ,
        n.flush = function() {
            return void 0 === u ? l : v(Lt())
        }
        ,
        n
    }
    function Pt(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }
    function It(e) {
        if ("number" == typeof e)
            return e;
        if ("symbol" == typeof (t = e) || (n = t) && "object" == typeof n && Ot.call(t) == wt)
            return bt;
        var t, n;
        if (Pt(e)) {
            var i = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = Pt(i) ? i + "" : i
        }
        if ("string" != typeof e)
            return 0 === e ? e : +e;
        e = e.replace(xt, "");
        var r = Ct.test(e);
        return r || St.test(e) ? Tt(e.slice(2), r ? 2 : 8) : Et.test(e) ? bt : +e
    }
    var Ft = function(e, t, n) {
        var i = !0
          , r = !0;
        if ("function" != typeof e)
            throw new TypeError(yt);
        return Pt(n) && (i = "leading"in n ? !!n.leading : i,
        r = "trailing"in n ? !!n.trailing : r),
        Nt(e, t, {
            leading: i,
            maxWait: t,
            trailing: r
        })
    }
      , jt = NaN
      , Bt = "[object Symbol]"
      , zt = /^\s+|\s+$/g
      , Ht = /^[-+]0x[0-9a-f]+$/i
      , qt = /^0b[01]+$/i
      , Rt = /^0o[0-7]+$/i
      , $t = parseInt
      , Wt = "object" == typeof l && l && l.Object === Object && l
      , Vt = "object" == typeof self && self && self.Object === Object && self
      , Xt = Wt || Vt || Function("return this")()
      , Yt = Object.prototype.toString
      , Gt = Math.max
      , Ut = Math.min
      , Qt = function() {
        return Xt.Date.now()
    };
    function Kt(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }
    function Zt(e) {
        if ("number" == typeof e)
            return e;
        if ("symbol" == typeof (t = e) || (n = t) && "object" == typeof n && Yt.call(t) == Bt)
            return jt;
        var t, n;
        if (Kt(e)) {
            var i = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = Kt(i) ? i + "" : i
        }
        if ("string" != typeof e)
            return 0 === e ? e : +e;
        e = e.replace(zt, "");
        var r = qt.test(e);
        return r || Rt.test(e) ? $t(e.slice(2), r ? 2 : 8) : Ht.test(e) ? jt : +e
    }
    var Jt = function(i, r, e) {
        var s, o, a, l, u, c, d = 0, h = !1, f = !1, t = !0;
        if ("function" != typeof i)
            throw new TypeError("Expected a function");
        function p(e) {
            var t = s
              , n = o;
            return s = o = void 0,
            d = e,
            l = i.apply(n, t)
        }
        function m(e) {
            var t = e - c;
            return void 0 === c || r <= t || t < 0 || f && a <= e - d
        }
        function g() {
            var e, t, n = Qt();
            if (m(n))
                return v(n);
            u = setTimeout(g, (t = r - ((e = n) - c),
            f ? Ut(t, a - (e - d)) : t))
        }
        function v(e) {
            return u = void 0,
            t && s ? p(e) : (s = o = void 0,
            l)
        }
        function n() {
            var e, t = Qt(), n = m(t);
            if (s = arguments,
            o = this,
            c = t,
            n) {
                if (void 0 === u)
                    return d = e = c,
                    u = setTimeout(g, r),
                    h ? p(e) : l;
                if (f)
                    return u = setTimeout(g, r),
                    p(c)
            }
            return void 0 === u && (u = setTimeout(g, r)),
            l
        }
        return r = Zt(r) || 0,
        Kt(e) && (h = !!e.leading,
        a = (f = "maxWait"in e) ? Gt(Zt(e.maxWait) || 0, r) : a,
        t = "trailing"in e ? !!e.trailing : t),
        n.cancel = function() {
            void 0 !== u && clearTimeout(u),
            s = c = o = u = void (d = 0)
        }
        ,
        n.flush = function() {
            return void 0 === u ? l : v(Qt())
        }
        ,
        n
    }
      , en = "Expected a function"
      , tn = "__lodash_hash_undefined__"
      , nn = "[object Function]"
      , rn = "[object GeneratorFunction]"
      , sn = /^\[object .+?Constructor\]$/
      , on = "object" == typeof l && l && l.Object === Object && l
      , an = "object" == typeof self && self && self.Object === Object && self
      , ln = on || an || Function("return this")();
    var un, cn = Array.prototype, dn = Function.prototype, hn = Object.prototype, fn = ln["__core-js_shared__"], pn = (un = /[^.]+$/.exec(fn && fn.keys && fn.keys.IE_PROTO || "")) ? "Symbol(src)_1." + un : "", mn = dn.toString, gn = hn.hasOwnProperty, vn = hn.toString, yn = RegExp("^" + mn.call(gn).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), bn = cn.splice, wn = An(ln, "Map"), xn = An(Object, "create");
    function En(e) {
        var t = -1
          , n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }
    function Cn(e) {
        var t = -1
          , n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }
    function Sn(e) {
        var t = -1
          , n = e ? e.length : 0;
        for (this.clear(); ++t < n; ) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }
    function Tn(e, t) {
        for (var n, i, r = e.length; r--; )
            if ((n = e[r][0]) === (i = t) || n != n && i != i)
                return r;
        return -1
    }
    function _n(e) {
        return !(!Mn(e) || (t = e,
        pn && pn in t)) && ((i = Mn(n = e) ? vn.call(n) : "") == nn || i == rn || function(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)
                try {
                    t = !!(e + "")
                } catch (e) {}
            return t
        }(e) ? yn : sn).test(function(e) {
            if (null != e) {
                try {
                    return mn.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }(e));
        var t, n, i
    }
    function kn(e, t) {
        var n, i, r = e.__data__;
        return ("string" == (i = typeof (n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? r["string" == typeof t ? "string" : "hash"] : r.map
    }
    function An(e, t) {
        var n, i, r = (i = t,
        null == (n = e) ? void 0 : n[i]);
        return _n(r) ? r : void 0
    }
    function On(r, s) {
        if ("function" != typeof r || s && "function" != typeof s)
            throw new TypeError(en);
        var o = function() {
            var e = arguments
              , t = s ? s.apply(this, e) : e[0]
              , n = o.cache;
            if (n.has(t))
                return n.get(t);
            var i = r.apply(this, e);
            return o.cache = n.set(t, i),
            i
        };
        return o.cache = new (On.Cache || Sn),
        o
    }
    function Mn(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t)
    }
    En.prototype.clear = function() {
        this.__data__ = xn ? xn(null) : {}
    }
    ,
    En.prototype.delete = function(e) {
        return this.has(e) && delete this.__data__[e]
    }
    ,
    En.prototype.get = function(e) {
        var t = this.__data__;
        if (xn) {
            var n = t[e];
            return n === tn ? void 0 : n
        }
        return gn.call(t, e) ? t[e] : void 0
    }
    ,
    En.prototype.has = function(e) {
        var t = this.__data__;
        return xn ? void 0 !== t[e] : gn.call(t, e)
    }
    ,
    En.prototype.set = function(e, t) {
        return this.__data__[e] = xn && void 0 === t ? tn : t,
        this
    }
    ,
    Cn.prototype.clear = function() {
        this.__data__ = []
    }
    ,
    Cn.prototype.delete = function(e) {
        var t = this.__data__
          , n = Tn(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : bn.call(t, n, 1),
        0))
    }
    ,
    Cn.prototype.get = function(e) {
        var t = this.__data__
          , n = Tn(t, e);
        return n < 0 ? void 0 : t[n][1]
    }
    ,
    Cn.prototype.has = function(e) {
        return -1 < Tn(this.__data__, e)
    }
    ,
    Cn.prototype.set = function(e, t) {
        var n = this.__data__
          , i = Tn(n, e);
        return i < 0 ? n.push([e, t]) : n[i][1] = t,
        this
    }
    ,
    Sn.prototype.clear = function() {
        this.__data__ = {
            hash: new En,
            map: new (wn || Cn),
            string: new En
        }
    }
    ,
    Sn.prototype.delete = function(e) {
        return kn(this, e).delete(e)
    }
    ,
    Sn.prototype.get = function(e) {
        return kn(this, e).get(e)
    }
    ,
    Sn.prototype.has = function(e) {
        return kn(this, e).has(e)
    }
    ,
    Sn.prototype.set = function(e, t) {
        return kn(this, e).set(e, t),
        this
    }
    ,
    On.Cache = Sn;
    var Dn = On
      , Ln = function() {
        if ("undefined" != typeof Map)
            return Map;
        function i(e, n) {
            var i = -1;
            return e.some(function(e, t) {
                return e[0] === n && (i = t,
                !0)
            }),
            i
        }
        return function() {
            function e() {
                this.__entries__ = []
            }
            return Object.defineProperty(e.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.get = function(e) {
                var t = i(this.__entries__, e)
                  , n = this.__entries__[t];
                return n && n[1]
            }
            ,
            e.prototype.set = function(e, t) {
                var n = i(this.__entries__, e);
                ~n ? this.__entries__[n][1] = t : this.__entries__.push([e, t])
            }
            ,
            e.prototype.delete = function(e) {
                var t = this.__entries__
                  , n = i(t, e);
                ~n && t.splice(n, 1)
            }
            ,
            e.prototype.has = function(e) {
                return !!~i(this.__entries__, e)
            }
            ,
            e.prototype.clear = function() {
                this.__entries__.splice(0)
            }
            ,
            e.prototype.forEach = function(e, t) {
                void 0 === t && (t = null);
                for (var n = 0, i = this.__entries__; n < i.length; n++) {
                    var r = i[n];
                    e.call(t, r[1], r[0])
                }
            }
            ,
            e
        }()
    }()
      , Nn = "undefined" != typeof window && "undefined" != typeof document && window.document === document
      , Pn = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")()
      , In = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Pn) : function(e) {
        return setTimeout(function() {
            return e(Date.now())
        }, 1e3 / 60)
    }
      , Fn = 2;
    var jn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"]
      , Bn = "undefined" != typeof MutationObserver
      , zn = function() {
        function e() {
            this.connected_ = !1,
            this.mutationEventsAdded_ = !1,
            this.mutationsObserver_ = null,
            this.observers_ = [],
            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
            this.refresh = function(e, t) {
                var n = !1
                  , i = !1
                  , r = 0;
                function s() {
                    n && (n = !1,
                    e()),
                    i && a()
                }
                function o() {
                    In(s)
                }
                function a() {
                    var e = Date.now();
                    if (n) {
                        if (e - r < Fn)
                            return;
                        i = !0
                    } else
                        i = !(n = !0),
                        setTimeout(o, t);
                    r = e
                }
                return a
            }(this.refresh.bind(this), 20)
        }
        return e.prototype.addObserver = function(e) {
            ~this.observers_.indexOf(e) || this.observers_.push(e),
            this.connected_ || this.connect_()
        }
        ,
        e.prototype.removeObserver = function(e) {
            var t = this.observers_
              , n = t.indexOf(e);
            ~n && t.splice(n, 1),
            !t.length && this.connected_ && this.disconnect_()
        }
        ,
        e.prototype.refresh = function() {
            this.updateObservers_() && this.refresh()
        }
        ,
        e.prototype.updateObservers_ = function() {
            var e = this.observers_.filter(function(e) {
                return e.gatherActive(),
                e.hasActive()
            });
            return e.forEach(function(e) {
                return e.broadcastActive()
            }),
            0 < e.length
        }
        ,
        e.prototype.connect_ = function() {
            Nn && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_),
            window.addEventListener("resize", this.refresh),
            Bn ? (this.mutationsObserver_ = new MutationObserver(this.refresh),
            this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh),
            this.mutationEventsAdded_ = !0),
            this.connected_ = !0)
        }
        ,
        e.prototype.disconnect_ = function() {
            Nn && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
            window.removeEventListener("resize", this.refresh),
            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
            this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
            this.mutationsObserver_ = null,
            this.mutationEventsAdded_ = !1,
            this.connected_ = !1)
        }
        ,
        e.prototype.onTransitionEnd_ = function(e) {
            var t = e.propertyName
              , n = void 0 === t ? "" : t;
            jn.some(function(e) {
                return !!~n.indexOf(e)
            }) && this.refresh()
        }
        ,
        e.getInstance = function() {
            return this.instance_ || (this.instance_ = new e),
            this.instance_
        }
        ,
        e.instance_ = null,
        e
    }()
      , Hn = function(e, t) {
        for (var n = 0, i = Object.keys(t); n < i.length; n++) {
            var r = i[n];
            Object.defineProperty(e, r, {
                value: t[r],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return e
    }
      , qn = function(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || Pn
    }
      , Rn = Gn(0, 0, 0, 0);
    function $n(e) {
        return parseFloat(e) || 0
    }
    function Wn(n) {
        for (var e = [], t = 1; t < arguments.length; t++)
            e[t - 1] = arguments[t];
        return e.reduce(function(e, t) {
            return e + $n(n["border-" + t + "-width"])
        }, 0)
    }
    function Vn(e) {
        var t = e.clientWidth
          , n = e.clientHeight;
        if (!t && !n)
            return Rn;
        var i, r = qn(e).getComputedStyle(e), s = function(e) {
            for (var t = {}, n = 0, i = ["top", "right", "bottom", "left"]; n < i.length; n++) {
                var r = i[n]
                  , s = e["padding-" + r];
                t[r] = $n(s)
            }
            return t
        }(r), o = s.left + s.right, a = s.top + s.bottom, l = $n(r.width), u = $n(r.height);
        if ("border-box" === r.boxSizing && (Math.round(l + o) !== t && (l -= Wn(r, "left", "right") + o),
        Math.round(u + a) !== n && (u -= Wn(r, "top", "bottom") + a)),
        (i = e) !== qn(i).document.documentElement) {
            var c = Math.round(l + o) - t
              , d = Math.round(u + a) - n;
            1 !== Math.abs(c) && (l -= c),
            1 !== Math.abs(d) && (u -= d)
        }
        return Gn(s.left, s.top, l, u)
    }
    var Xn = "undefined" != typeof SVGGraphicsElement ? function(e) {
        return e instanceof qn(e).SVGGraphicsElement
    }
    : function(e) {
        return e instanceof qn(e).SVGElement && "function" == typeof e.getBBox
    }
    ;
    function Yn(e) {
        return Nn ? Xn(e) ? Gn(0, 0, (t = e.getBBox()).width, t.height) : Vn(e) : Rn;
        var t
    }
    function Gn(e, t, n, i) {
        return {
            x: e,
            y: t,
            width: n,
            height: i
        }
    }
    var Un = function() {
        function e(e) {
            this.broadcastWidth = 0,
            this.broadcastHeight = 0,
            this.contentRect_ = Gn(0, 0, 0, 0),
            this.target = e
        }
        return e.prototype.isActive = function() {
            var e = Yn(this.target);
            return (this.contentRect_ = e).width !== this.broadcastWidth || e.height !== this.broadcastHeight
        }
        ,
        e.prototype.broadcastRect = function() {
            var e = this.contentRect_;
            return this.broadcastWidth = e.width,
            this.broadcastHeight = e.height,
            e
        }
        ,
        e
    }()
      , Qn = function(e, t) {
        var n, i, r, s, o, a, l, u = (i = (n = t).x,
        r = n.y,
        s = n.width,
        o = n.height,
        a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
        l = Object.create(a.prototype),
        Hn(l, {
            x: i,
            y: r,
            width: s,
            height: o,
            top: r,
            right: i + s,
            bottom: o + r,
            left: i
        }),
        l);
        Hn(this, {
            target: e,
            contentRect: u
        })
    }
      , Kn = function() {
        function e(e, t, n) {
            if (this.activeObservations_ = [],
            this.observations_ = new Ln,
            "function" != typeof e)
                throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = e,
            this.controller_ = t,
            this.callbackCtx_ = n
        }
        return e.prototype.observe = function(e) {
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof qn(e).Element))
                    throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) || (t.set(e, new Un(e)),
                this.controller_.addObserver(this),
                this.controller_.refresh())
            }
        }
        ,
        e.prototype.unobserve = function(e) {
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof qn(e).Element))
                    throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) && (t.delete(e),
                t.size || this.controller_.removeObserver(this))
            }
        }
        ,
        e.prototype.disconnect = function() {
            this.clearActive(),
            this.observations_.clear(),
            this.controller_.removeObserver(this)
        }
        ,
        e.prototype.gatherActive = function() {
            var t = this;
            this.clearActive(),
            this.observations_.forEach(function(e) {
                e.isActive() && t.activeObservations_.push(e)
            })
        }
        ,
        e.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var e = this.callbackCtx_
                  , t = this.activeObservations_.map(function(e) {
                    return new Qn(e.target,e.broadcastRect())
                });
                this.callback_.call(e, t, e),
                this.clearActive()
            }
        }
        ,
        e.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }
        ,
        e.prototype.hasActive = function() {
            return 0 < this.activeObservations_.length
        }
        ,
        e
    }()
      , Zn = "undefined" != typeof WeakMap ? new WeakMap : new Ln
      , Jn = function e(t) {
        if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
        var n = zn.getInstance()
          , i = new Kn(t,n,this);
        Zn.set(this, i)
    };
    ["observe", "unobserve", "disconnect"].forEach(function(t) {
        Jn.prototype[t] = function() {
            var e;
            return (e = Zn.get(this))[t].apply(e, arguments)
        }
    });
    var ei = void 0 !== Pn.ResizeObserver ? Pn.ResizeObserver : Jn
      , ti = !("undefined" == typeof window || !window.document || !window.document.createElement)
      , ni = function() {
        function l(e, t) {
            var s = this;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, l),
            this.onScroll = function() {
                s.scrollXTicking || (window.requestAnimationFrame(s.scrollX),
                s.scrollXTicking = !0),
                s.scrollYTicking || (window.requestAnimationFrame(s.scrollY),
                s.scrollYTicking = !0)
            }
            ,
            this.scrollX = function() {
                s.axis.x.isOverflowing && (s.showScrollbar("x"),
                s.positionScrollbar("x")),
                s.scrollXTicking = !1
            }
            ,
            this.scrollY = function() {
                s.axis.y.isOverflowing && (s.showScrollbar("y"),
                s.positionScrollbar("y")),
                s.scrollYTicking = !1
            }
            ,
            this.onMouseEnter = function() {
                s.showScrollbar("x"),
                s.showScrollbar("y")
            }
            ,
            this.onMouseMove = function(e) {
                s.mouseX = e.clientX,
                s.mouseY = e.clientY,
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseMoveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseMoveForAxis("y")
            }
            ,
            this.onMouseLeave = function() {
                s.onMouseMove.cancel(),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) && s.onMouseLeaveForAxis("x"),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) && s.onMouseLeaveForAxis("y"),
                s.mouseX = -1,
                s.mouseY = -1
            }
            ,
            this.onWindowResize = function() {
                s.scrollbarWidth = vt(),
                s.hideNativeScrollbar()
            }
            ,
            this.hideScrollbars = function() {
                s.axis.x.track.rect = s.axis.x.track.el.getBoundingClientRect(),
                s.axis.y.track.rect = s.axis.y.track.el.getBoundingClientRect(),
                s.isWithinBounds(s.axis.y.track.rect) || (s.axis.y.scrollbar.el.classList.remove(s.classNames.visible),
                s.axis.y.isVisible = !1),
                s.isWithinBounds(s.axis.x.track.rect) || (s.axis.x.scrollbar.el.classList.remove(s.classNames.visible),
                s.axis.x.isVisible = !1)
            }
            ,
            this.onPointerEvent = function(e) {
                var t, n;
                s.axis.x.scrollbar.rect = s.axis.x.scrollbar.el.getBoundingClientRect(),
                s.axis.y.scrollbar.rect = s.axis.y.scrollbar.el.getBoundingClientRect(),
                (s.axis.x.isOverflowing || s.axis.x.forceVisible) && (n = s.isWithinBounds(s.axis.x.scrollbar.rect)),
                (s.axis.y.isOverflowing || s.axis.y.forceVisible) && (t = s.isWithinBounds(s.axis.y.scrollbar.rect)),
                (t || n) && (e.preventDefault(),
                e.stopPropagation(),
                "mousedown" === e.type && (t && s.onDragStart(e, "y"),
                n && s.onDragStart(e, "x")))
            }
            ,
            this.drag = function(e) {
                var t = s.axis[s.draggedAxis].track
                  , n = t.rect[s.axis[s.draggedAxis].sizeAttr]
                  , i = s.axis[s.draggedAxis].scrollbar;
                e.preventDefault(),
                e.stopPropagation();
                var r = (("y" === s.draggedAxis ? e.pageY : e.pageX) - t.rect[s.axis[s.draggedAxis].offsetAttr] - s.axis[s.draggedAxis].dragOffset) / t.rect[s.axis[s.draggedAxis].sizeAttr] * s.contentEl[s.axis[s.draggedAxis].scrollSizeAttr];
                "x" === s.draggedAxis && (r = s.isRtl && l.getRtlHelpers().isRtlScrollbarInverted ? r - (n + i.size) : r,
                r = s.isRtl && l.getRtlHelpers().isRtlScrollingInverted ? -r : r),
                s.contentEl[s.axis[s.draggedAxis].scrollOffsetAttr] = r
            }
            ,
            this.onEndDrag = function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                document.removeEventListener("mousemove", s.drag),
                document.removeEventListener("mouseup", s.onEndDrag)
            }
            ,
            this.el = e,
            this.flashTimeout,
            this.contentEl,
            this.offsetEl,
            this.maskEl,
            this.globalObserver,
            this.mutationObserver,
            this.resizeObserver,
            this.scrollbarWidth,
            this.minScrollbarWidth = 20,
            this.options = gt({}, l.defaultOptions, t),
            this.classNames = gt({}, l.defaultOptions.classNames, this.options.classNames),
            this.isRtl,
            this.axis = {
                x: {
                    scrollOffsetAttr: "scrollLeft",
                    sizeAttr: "width",
                    scrollSizeAttr: "scrollWidth",
                    offsetAttr: "left",
                    overflowAttr: "overflowX",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                },
                y: {
                    scrollOffsetAttr: "scrollTop",
                    sizeAttr: "height",
                    scrollSizeAttr: "scrollHeight",
                    offsetAttr: "top",
                    overflowAttr: "overflowY",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                }
            },
            this.recalculate = Ft(this.recalculate.bind(this), 64),
            this.onMouseMove = Ft(this.onMouseMove.bind(this), 64),
            this.hideScrollbars = Jt(this.hideScrollbars.bind(this), this.options.timeout),
            this.onWindowResize = Jt(this.onWindowResize.bind(this), 64, {
                leading: !0
            }),
            l.getRtlHelpers = Dn(l.getRtlHelpers),
            this.getContentElement = this.getScrollElement,
            this.init()
        }
        var e, t, n;
        return e = l,
        n = [{
            key: "getRtlHelpers",
            value: function() {
                var e = document.createElement("div");
                e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
                var t = e.firstElementChild;
                document.body.appendChild(t);
                var n = t.firstElementChild;
                t.scrollLeft = 0;
                var i = l.getOffset(t)
                  , r = l.getOffset(n);
                t.scrollLeft = 999;
                var s = l.getOffset(n);
                return {
                    isRtlScrollingInverted: i.left !== r.left && r.left - s.left != 0,
                    isRtlScrollbarInverted: i.left !== r.left
                }
            }
        }, {
            key: "initHtmlApi",
            value: function() {
                this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this),
                "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(function(e) {
                    e.forEach(function(e) {
                        Array.from(e.addedNodes).forEach(function(e) {
                            1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !e.SimpleBar && new l(e,l.getElOptions(e)) : Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                                !e.SimpleBar && new l(e,l.getElOptions(e))
                            }))
                        }),
                        Array.from(e.removedNodes).forEach(function(e) {
                            1 === e.nodeType && (e.hasAttribute("data-simplebar") ? e.SimpleBar && e.SimpleBar.unMount() : Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                                e.SimpleBar && e.SimpleBar.unMount()
                            }))
                        })
                    })
                }
                ),
                this.globalObserver.observe(document, {
                    childList: !0,
                    subtree: !0
                })),
                "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements),
                window.addEventListener("load", this.initDOMLoadedElements))
            }
        }, {
            key: "getElOptions",
            value: function(e) {
                return Array.from(e.attributes).reduce(function(e, t) {
                    var n = t.name.match(/data-simplebar-(.+)/);
                    if (n) {
                        var i = n[1].replace(/\W+(.)/g, function(e, t) {
                            return t.toUpperCase()
                        });
                        switch (t.value) {
                        case "true":
                            e[i] = !0;
                            break;
                        case "false":
                            e[i] = !1;
                            break;
                        case void 0:
                            e[i] = !0;
                            break;
                        default:
                            e[i] = t.value
                        }
                    }
                    return e
                }, {})
            }
        }, {
            key: "removeObserver",
            value: function() {
                this.globalObserver.disconnect()
            }
        }, {
            key: "initDOMLoadedElements",
            value: function() {
                document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements),
                window.removeEventListener("load", this.initDOMLoadedElements),
                Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                    e.SimpleBar || new l(e,l.getElOptions(e))
                })
            }
        }, {
            key: "getOffset",
            value: function(e) {
                var t = e.getBoundingClientRect();
                return {
                    top: t.top + (window.pageYOffset || document.documentElement.scrollTop),
                    left: t.left + (window.pageXOffset || document.documentElement.scrollLeft)
                }
            }
        }],
        (t = [{
            key: "init",
            value: function() {
                this.el.SimpleBar = this,
                ti && (this.initDOM(),
                this.scrollbarWidth = vt(),
                this.recalculate(),
                this.initListeners())
            }
        }, {
            key: "initDOM",
            value: function() {
                var t = this;
                if (Array.from(this.el.children).filter(function(e) {
                    return e.classList.contains(t.classNames.wrapper)
                }).length)
                    this.wrapperEl = this.el.querySelector(".".concat(this.classNames.wrapper)),
                    this.contentEl = this.el.querySelector(".".concat(this.classNames.content)),
                    this.offsetEl = this.el.querySelector(".".concat(this.classNames.offset)),
                    this.maskEl = this.el.querySelector(".".concat(this.classNames.mask)),
                    this.placeholderEl = this.el.querySelector(".".concat(this.classNames.placeholder)),
                    this.heightAutoObserverWrapperEl = this.el.querySelector(".".concat(this.classNames.heightAutoObserverWrapperEl)),
                    this.heightAutoObserverEl = this.el.querySelector(".".concat(this.classNames.heightAutoObserverEl)),
                    this.axis.x.track.el = this.el.querySelector(".".concat(this.classNames.track, ".").concat(this.classNames.horizontal)),
                    this.axis.y.track.el = this.el.querySelector(".".concat(this.classNames.track, ".").concat(this.classNames.vertical));
                else {
                    for (this.wrapperEl = document.createElement("div"),
                    this.contentEl = document.createElement("div"),
                    this.offsetEl = document.createElement("div"),
                    this.maskEl = document.createElement("div"),
                    this.placeholderEl = document.createElement("div"),
                    this.heightAutoObserverWrapperEl = document.createElement("div"),
                    this.heightAutoObserverEl = document.createElement("div"),
                    this.wrapperEl.classList.add(this.classNames.wrapper),
                    this.contentEl.classList.add(this.classNames.content),
                    this.offsetEl.classList.add(this.classNames.offset),
                    this.maskEl.classList.add(this.classNames.mask),
                    this.placeholderEl.classList.add(this.classNames.placeholder),
                    this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),
                    this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild; )
                        this.contentEl.appendChild(this.el.firstChild);
                    this.offsetEl.appendChild(this.contentEl),
                    this.maskEl.appendChild(this.offsetEl),
                    this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),
                    this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                    this.wrapperEl.appendChild(this.maskEl),
                    this.wrapperEl.appendChild(this.placeholderEl),
                    this.el.appendChild(this.wrapperEl)
                }
                if (!this.axis.x.track.el || !this.axis.y.track.el) {
                    var e = document.createElement("div")
                      , n = document.createElement("div");
                    e.classList.add(this.classNames.track),
                    n.classList.add(this.classNames.scrollbar),
                    this.options.autoHide || n.classList.add(this.classNames.visible),
                    e.appendChild(n),
                    this.axis.x.track.el = e.cloneNode(!0),
                    this.axis.x.track.el.classList.add(this.classNames.horizontal),
                    this.axis.y.track.el = e.cloneNode(!0),
                    this.axis.y.track.el.classList.add(this.classNames.vertical),
                    this.el.appendChild(this.axis.x.track.el),
                    this.el.appendChild(this.axis.y.track.el)
                }
                this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(".".concat(this.classNames.scrollbar)),
                this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(".".concat(this.classNames.scrollbar)),
                this.el.setAttribute("data-simplebar", "init")
            }
        }, {
            key: "initListeners",
            value: function() {
                var t = this;
                this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter),
                ["mousedown", "click", "dblclick", "touchstart", "touchend", "touchmove"].forEach(function(e) {
                    t.el.addEventListener(e, t.onPointerEvent, !0)
                }),
                this.el.addEventListener("mousemove", this.onMouseMove),
                this.el.addEventListener("mouseleave", this.onMouseLeave),
                this.contentEl.addEventListener("scroll", this.onScroll),
                window.addEventListener("resize", this.onWindowResize),
                "undefined" != typeof MutationObserver && (this.mutationObserver = new MutationObserver(function(e) {
                    e.forEach(function(e) {
                        (e.target === t.el || !t.isChildNode(e.target) || e.addedNodes.length || e.removedNodes.length) && t.recalculate()
                    })
                }
                ),
                this.mutationObserver.observe(this.el, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })),
                this.resizeObserver = new ei(this.recalculate),
                this.resizeObserver.observe(this.el)
            }
        }, {
            key: "recalculate",
            value: function() {
                var e = this.heightAutoObserverEl.offsetHeight <= 1;
                this.elStyles = window.getComputedStyle(this.el),
                this.isRtl = "rtl" === this.elStyles.direction,
                this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft),
                this.contentEl.style.height = e ? "auto" : "100%",
                this.placeholderEl.style.width = "".concat(this.contentEl.scrollWidth, "px"),
                this.placeholderEl.style.height = "".concat(this.contentEl.scrollHeight, "px"),
                this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft),
                this.axis.x.track.rect = this.axis.x.track.el.getBoundingClientRect(),
                this.axis.y.track.rect = this.axis.y.track.el.getBoundingClientRect(),
                this.axis.x.isOverflowing = (this.scrollbarWidth ? this.contentEl.scrollWidth : this.contentEl.scrollWidth - this.minScrollbarWidth) > Math.ceil(this.axis.x.track.rect.width),
                this.axis.y.isOverflowing = (this.scrollbarWidth ? this.contentEl.scrollHeight : this.contentEl.scrollHeight - this.minScrollbarWidth) > Math.ceil(this.axis.y.track.rect.height),
                this.axis.x.isOverflowing = "hidden" !== this.elStyles.overflowX && this.axis.x.isOverflowing,
                this.axis.y.isOverflowing = "hidden" !== this.elStyles.overflowY && this.axis.y.isOverflowing,
                this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible,
                this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible,
                this.axis.x.scrollbar.size = this.getScrollbarSize("x"),
                this.axis.y.scrollbar.size = this.getScrollbarSize("y"),
                this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px"),
                this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px"),
                this.positionScrollbar("x"),
                this.positionScrollbar("y"),
                this.toggleTrackVisibility("x"),
                this.toggleTrackVisibility("y"),
                this.hideNativeScrollbar()
            }
        }, {
            key: "getScrollbarSize",
            value: function() {
                var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y", n = this.scrollbarWidth ? this.contentEl[this.axis[t].scrollSizeAttr] : this.contentEl[this.axis[t].scrollSizeAttr] - this.minScrollbarWidth, i = this.axis[t].track.rect[this.axis[t].sizeAttr];
                if (this.axis[t].isOverflowing) {
                    var r = i / n;
                    return e = Math.max(~~(r * i), this.options.scrollbarMinSize),
                    this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)),
                    e
                }
            }
        }, {
            key: "positionScrollbar",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y"
                  , t = this.contentEl[this.axis[e].scrollSizeAttr]
                  , n = this.axis[e].track.rect[this.axis[e].sizeAttr]
                  , i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10)
                  , r = this.axis[e].scrollbar
                  , s = this.contentEl[this.axis[e].scrollOffsetAttr]
                  , o = (s = "x" === e && this.isRtl && l.getRtlHelpers().isRtlScrollingInverted ? -s : s) / (t - i)
                  , a = ~~((n - r.size) * o);
                a = "x" === e && this.isRtl && l.getRtlHelpers().isRtlScrollbarInverted ? a + (n - r.size) : a,
                r.el.style.transform = "x" === e ? "translate3d(".concat(a, "px, 0, 0)") : "translate3d(0, ".concat(a, "px, 0)")
            }
        }, {
            key: "toggleTrackVisibility",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y"
                  , t = this.axis[e].track.el
                  , n = this.axis[e].scrollbar.el;
                this.axis[e].isOverflowing || this.axis[e].forceVisible ? (t.style.visibility = "visible",
                this.contentEl.style[this.axis[e].overflowAttr] = "scroll") : (t.style.visibility = "hidden",
                this.contentEl.style[this.axis[e].overflowAttr] = "hidden"),
                this.axis[e].isOverflowing ? n.style.visibility = "visible" : n.style.visibility = "hidden"
            }
        }, {
            key: "hideNativeScrollbar",
            value: function() {
                if (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth || this.minScrollbarWidth, "px") : 0,
                this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth || this.minScrollbarWidth, "px") : 0,
                !this.scrollbarWidth) {
                    var e = [this.isRtl ? "paddingLeft" : "paddingRight"];
                    this.contentEl.style[e] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "calc(".concat(this.elStyles[e], " + ").concat(this.minScrollbarWidth, "px)") : this.elStyles[e],
                    this.contentEl.style.paddingBottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "calc(".concat(this.elStyles.paddingBottom, " + ").concat(this.minScrollbarWidth, "px)") : this.elStyles.paddingBottom
                }
            }
        }, {
            key: "onMouseMoveForAxis",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y";
                this.axis[e].track.rect = this.axis[e].track.el.getBoundingClientRect(),
                this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect(),
                this.isWithinBounds(this.axis[e].scrollbar.rect) ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover) : this.axis[e].scrollbar.el.classList.remove(this.classNames.hover),
                this.isWithinBounds(this.axis[e].track.rect) ? (this.showScrollbar(e),
                this.axis[e].track.el.classList.add(this.classNames.hover)) : this.axis[e].track.el.classList.remove(this.classNames.hover)
            }
        }, {
            key: "onMouseLeaveForAxis",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y";
                this.axis[e].track.el.classList.remove(this.classNames.hover),
                this.axis[e].scrollbar.el.classList.remove(this.classNames.hover)
            }
        }, {
            key: "showScrollbar",
            value: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "y"
                  , t = this.axis[e].scrollbar.el;
                this.axis[e].isVisible || (t.classList.add(this.classNames.visible),
                this.axis[e].isVisible = !0),
                this.options.autoHide && this.hideScrollbars()
            }
        }, {
            key: "onDragStart",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "y"
                  , n = this.axis[t].scrollbar.el
                  , i = "y" === t ? e.pageY : e.pageX;
                this.axis[t].dragOffset = i - n.getBoundingClientRect()[this.axis[t].offsetAttr],
                this.draggedAxis = t,
                document.addEventListener("mousemove", this.drag),
                document.addEventListener("mouseup", this.onEndDrag)
            }
        }, {
            key: "getScrollElement",
            value: function() {
                return this.contentEl
            }
        }, {
            key: "removeListeners",
            value: function() {
                var t = this;
                this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter),
                ["mousedown", "click", "dblclick", "touchstart", "touchend", "touchmove"].forEach(function(e) {
                    t.el.removeEventListener(e, t.onPointerEvent)
                }),
                this.el.removeEventListener("mousemove", this.onMouseMove),
                this.el.removeEventListener("mouseleave", this.onMouseLeave),
                this.contentEl.removeEventListener("scroll", this.onScroll),
                window.removeEventListener("resize", this.onWindowResize),
                this.mutationObserver && this.mutationObserver.disconnect(),
                this.resizeObserver.disconnect(),
                this.recalculate.cancel(),
                this.onMouseMove.cancel(),
                this.hideScrollbars.cancel(),
                this.onWindowResize.cancel()
            }
        }, {
            key: "unMount",
            value: function() {
                this.removeListeners(),
                this.el.SimpleBar = null
            }
        }, {
            key: "isChildNode",
            value: function(e) {
                return null !== e && (e === this.el || this.isChildNode(e.parentNode))
            }
        }, {
            key: "isWithinBounds",
            value: function(e) {
                return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height
            }
        }]) && mt(e.prototype, t),
        n && mt(e, n),
        l
    }();
    return ni.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        classNames: {
            content: "simplebar-content",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover"
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3
    },
    ti && ni.initHtmlApi(),
    ni
}),
function(e) {
    var f, p, m = "hasOwnProperty", g = /[\.\/]/, v = /\s*,\s*/, y = function(e, t) {
        return e - t
    }, b = {
        n: {}
    }, w = function() {
        for (var e = 0, t = this.length; e < t; e++)
            if (void 0 !== this[e])
                return this[e]
    }, x = function() {
        for (var e = this.length; --e; )
            if (void 0 !== this[e])
                return this[e]
    }, t = Object.prototype.toString, E = String, C = Array.isArray || function(e) {
        return e instanceof Array || "[object Array]" == t.call(e)
    }
    ;
    eve = function(e, t) {
        var n, i = p, r = Array.prototype.slice.call(arguments, 2), s = eve.listeners(e), o = 0, a = [], l = {}, u = [], c = f;
        u.firstDefined = w,
        u.lastDefined = x,
        f = e;
        for (var d = p = 0, h = s.length; d < h; d++)
            "zIndex"in s[d] && (a.push(s[d].zIndex),
            s[d].zIndex < 0 && (l[s[d].zIndex] = s[d]));
        for (a.sort(y); a[o] < 0; )
            if (n = l[a[o++]],
            u.push(n.apply(t, r)),
            p)
                return p = i,
                u;
        for (d = 0; d < h; d++)
            if ("zIndex"in (n = s[d]))
                if (n.zIndex == a[o]) {
                    if (u.push(n.apply(t, r)),
                    p)
                        break;
                    do {
                        if ((n = l[a[++o]]) && u.push(n.apply(t, r)),
                        p)
                            break
                    } while (n)
                } else
                    l[n.zIndex] = n;
            else if (u.push(n.apply(t, r)),
            p)
                break;
        return p = i,
        f = c,
        u
    }
    ,
    eve._events = b,
    eve.listeners = function(e) {
        var t, n, i, r, s, o, a, l, u = C(e) ? e : e.split(g), c = b, d = [c], h = [];
        for (r = 0,
        s = u.length; r < s; r++) {
            for (l = [],
            o = 0,
            a = d.length; o < a; o++)
                for (n = [(c = d[o].n)[u[r]], c["*"]],
                i = 2; i--; )
                    (t = n[i]) && (l.push(t),
                    h = h.concat(t.f || []));
            d = l
        }
        return h
    }
    ,
    eve.separator = function(e) {
        g = e ? (e = "[" + (e = E(e).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]",
        new RegExp(e)) : /[\.\/]/
    }
    ,
    eve.on = function(e, o) {
        if ("function" != typeof o)
            return function() {}
            ;
        for (var t = C(e) ? C(e[0]) ? e : [e] : E(e).split(v), n = 0, i = t.length; n < i; n++)
            !function(e) {
                for (var t, n = C(e) ? e : E(e).split(g), i = b, r = 0, s = n.length; r < s; r++)
                    i = (i = i.n).hasOwnProperty(n[r]) && i[n[r]] || (i[n[r]] = {
                        n: {}
                    });
                for (i.f = i.f || [],
                r = 0,
                s = i.f.length; r < s; r++)
                    if (i.f[r] == o) {
                        t = !0;
                        break
                    }
                !t && i.f.push(o)
            }(t[n]);
        return function(e) {
            +e == +e && (o.zIndex = +e)
        }
    }
    ,
    eve.f = function(e) {
        var t = [].slice.call(arguments, 1);
        return function() {
            eve.apply(null, [e, null].concat(t).concat([].slice.call(arguments, 0)))
        }
    }
    ,
    eve.stop = function() {
        p = 1
    }
    ,
    eve.nt = function(e) {
        var t = C(f) ? f.join(".") : f;
        return e ? new RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)").test(t) : t
    }
    ,
    eve.nts = function() {
        return C(f) ? f : f.split(g)
    }
    ,
    eve.off = eve.unbind = function(e, t) {
        if (e) {
            var n = C(e) ? C(e[0]) ? e : [e] : E(e).split(v);
            if (1 < n.length)
                for (var i = 0, r = n.length; i < r; i++)
                    eve.off(n[i], t);
            else {
                n = C(e) ? e : E(e).split(g);
                var s, o, a, l, u, c = [b], d = [];
                for (i = 0,
                r = n.length; i < r; i++)
                    for (l = 0; l < c.length; l += a.length - 2) {
                        if (a = [l, 1],
                        s = c[l].n,
                        "*" != n[i])
                            s[n[i]] && (a.push(s[n[i]]),
                            d.unshift({
                                n: s,
                                name: n[i]
                            }));
                        else
                            for (o in s)
                                s[m](o) && (a.push(s[o]),
                                d.unshift({
                                    n: s,
                                    name: o
                                }));
                        c.splice.apply(c, a)
                    }
                for (i = 0,
                r = c.length; i < r; i++)
                    for (s = c[i]; s.n; ) {
                        if (t) {
                            if (s.f) {
                                for (l = 0,
                                u = s.f.length; l < u; l++)
                                    if (s.f[l] == t) {
                                        s.f.splice(l, 1);
                                        break
                                    }
                                !s.f.length && delete s.f
                            }
                            for (o in s.n)
                                if (s.n[m](o) && s.n[o].f) {
                                    var h = s.n[o].f;
                                    for (l = 0,
                                    u = h.length; l < u; l++)
                                        if (h[l] == t) {
                                            h.splice(l, 1);
                                            break
                                        }
                                    !h.length && delete s.n[o].f
                                }
                        } else
                            for (o in delete s.f,
                            s.n)
                                s.n[m](o) && s.n[o].f && delete s.n[o].f;
                        s = s.n
                    }
                e: for (i = 0,
                r = d.length; i < r; i++) {
                    for (o in (s = d[i]).n[s.name].f)
                        continue e;
                    for (o in s.n[s.name].n)
                        continue e;
                    delete s.n[s.name]
                }
            }
        } else
            eve._events = b = {
                n: {}
            }
    }
    ,
    eve.once = function(e, t) {
        var n = function() {
            return eve.off(e, n),
            t.apply(this, arguments)
        };
        return eve.on(e, n)
    }
    ,
    eve.version = "0.5.0",
    eve.toString = function() {
        return "You are running Eve 0.5.0"
    }
    ,
    "undefined" != typeof module && module.exports ? module.exports = eve : "function" == typeof define && define.amd ? define("eve", [], function() {
        return eve
    }) : e.eve = eve
}(this),
function(t, n) {
    if ("function" == typeof define && define.amd)
        define(["eve"], function(e) {
            return n(t, e)
        });
    else if ("undefined" != typeof exports) {
        var e = require("eve");
        module.exports = n(t, e)
    } else
        n(t, t.eve)
}(window || this, function(v, Y) {
    var s, o, c, a, r, d, h, e, f, p, m, y, b, w, x, E, C, S = (s = void 0 === Y ? function() {}
    : Y,
    c = {},
    a = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame || function(e) {
        return setTimeout(e, 16, (new Date).getTime()),
        !0
    }
    ,
    r = Array.isArray || function(e) {
        return e instanceof Array || "[object Array]" == Object.prototype.toString.call(e)
    }
    ,
    d = 0,
    h = "M" + (+new Date).toString(36),
    e = Date.now || function() {
        return +new Date
    }
    ,
    f = function(e) {
        if (null == e)
            return this.s;
        var t = this.s - e;
        this.b += this.dur * t,
        this.B += this.dur * t,
        this.s = e
    }
    ,
    p = function(e) {
        if (null == e)
            return this.spd;
        this.spd = e
    }
    ,
    m = function(e) {
        if (null == e)
            return this.dur;
        this.s = this.s * e / this.dur,
        this.dur = e
    }
    ,
    y = function() {
        delete c[this.id],
        this.update(),
        s("mina.stop." + this.id, this)
    }
    ,
    b = function() {
        this.pdif || (delete c[this.id],
        this.update(),
        this.pdif = this.get() - this.b)
    }
    ,
    w = function() {
        this.pdif && (this.b = this.get() - this.pdif,
        delete this.pdif,
        c[this.id] = this,
        E())
    }
    ,
    x = function() {
        var e, t = this;
        if (r(t.start)) {
            e = [];
            for (var n = 0, i = t.start.length; n < i; n++)
                e[n] = +t.start[n] + (t.end[n] - t.start[n]) * t.easing(t.s)
        } else
            e = +t.start + (t.end - t.start) * t.easing(t.s);
        t.set(e)
    }
    ,
    E = function(e) {
        if (e) {
            var t = 0;
            for (var n in c)
                if (c.hasOwnProperty(n)) {
                    var i = c[n]
                      , r = i.get();
                    t++,
                    i.s = (r - i.b) / (i.dur / i.spd),
                    1 <= i.s && (delete c[n],
                    i.s = 1,
                    t--,
                    function(e) {
                        setTimeout(function() {
                            s("mina.finish." + e.id, e)
                        })
                    }(i)),
                    i.update()
                }
            o = !!t && a(E)
        } else
            o || (o = a(E))
    }
    ,
    (C = function(e, t, n, i, r, s, o) {
        var a = {
            id: h + (d++).toString(36),
            start: e,
            end: t,
            b: n,
            s: 0,
            dur: i - n,
            spd: 1,
            get: r,
            set: s,
            easing: o || C.linear,
            status: f,
            speed: p,
            duration: m,
            stop: y,
            pause: b,
            resume: w,
            update: x
        };
        c[a.id] = a;
        var l, u = 0;
        for (l in c)
            if (c.hasOwnProperty(l) && 2 == ++u)
                break;
        return 1 == u && E(),
        a
    }
    ).time = e,
    C.getById = function(e) {
        return c[e] || null
    }
    ,
    C.linear = function(e) {
        return e
    }
    ,
    C.easeout = function(e) {
        return Math.pow(e, 1.7)
    }
    ,
    C.easein = function(e) {
        return Math.pow(e, .48)
    }
    ,
    C.easeinout = function(e) {
        if (1 == e)
            return 1;
        if (0 == e)
            return 0;
        var t = .48 - e / 1.04
          , n = Math.sqrt(.1734 + t * t)
          , i = n - t
          , r = -n - t
          , s = Math.pow(Math.abs(i), 1 / 3) * (i < 0 ? -1 : 1) + Math.pow(Math.abs(r), 1 / 3) * (r < 0 ? -1 : 1) + .5;
        return 3 * (1 - s) * s * s + s * s * s
    }
    ,
    C.backin = function(e) {
        return 1 == e ? 1 : e * e * (2.70158 * e - 1.70158)
    }
    ,
    C.backout = function(e) {
        return 0 == e ? 0 : (e -= 1) * e * (2.70158 * e + 1.70158) + 1
    }
    ,
    C.elastic = function(e) {
        return e == !!e ? e : Math.pow(2, -10 * e) * Math.sin((e - .075) * (2 * Math.PI) / .3) + 1
    }
    ,
    C.bounce = function(e) {
        var t = 7.5625;
        return e < 1 / 2.75 ? t * e * e : e < 2 / 2.75 ? t * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? t * (e -= 2.25 / 2.75) * e + .9375 : t * (e -= 2.625 / 2.75) * e + .984375
    }
    ,
    v.mina = C), t = function(e) {
        function v(e, t) {
            if (e) {
                if (e.nodeType)
                    return V(e);
                if (O(e, "array") && v.set)
                    return v.set.apply(v, e);
                if (e instanceof q)
                    return e;
                if (null == t)
                    return V(e = f.doc.querySelector(String(e)))
            }
            return new W(e = null == e ? "100%" : e,t = null == t ? "100%" : t)
        }
        v.version = "0.5.1",
        v.toString = function() {
            return "Snap v" + this.version
        }
        ,
        v._ = {};
        var f = {
            win: e.window,
            doc: e.window.document
        };
        v._.glob = f;
        var t, o, u = "hasOwnProperty", y = String, l = parseFloat, c = parseInt, d = Math, h = d.max, p = d.min, m = d.abs, b = (d.pow,
        d.PI), n = (d.round,
        Object.prototype.toString), w = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i, x = (v._.separator = /[,\s]+/,
        /[\s]*,[\s]*/), E = {
            hs: 1,
            rg: 1
        }, i = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi, s = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi, a = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi, r = 0, C = "S" + (+new Date).toString(36), S = function(e) {
            return (e && e.type ? e.type : "") + C + (r++).toString(36)
        }, T = "http://www.w3.org/1999/xlink", _ = "http://www.w3.org/2000/svg", k = {};
        v.url = function(e) {
            return "url('#" + e + "')"
        }
        ;
        function A(e, t) {
            if (t) {
                if ("#text" == e && (e = f.doc.createTextNode(t.text || t["#text"] || "")),
                "#comment" == e && (e = f.doc.createComment(t.text || t["#text"] || "")),
                "string" == typeof e && (e = A(e)),
                "string" == typeof t)
                    return 1 == e.nodeType ? "xlink:" == t.substring(0, 6) ? e.getAttributeNS(T, t.substring(6)) : "xml:" == t.substring(0, 4) ? e.getAttributeNS(_, t.substring(4)) : e.getAttribute(t) : "text" == t ? e.nodeValue : null;
                if (1 == e.nodeType) {
                    for (var n in t)
                        if (t[u](n)) {
                            var i = y(t[n]);
                            i ? "xlink:" == n.substring(0, 6) ? e.setAttributeNS(T, n.substring(6), i) : "xml:" == n.substring(0, 4) ? e.setAttributeNS(_, n.substring(4), i) : e.setAttribute(n, i) : e.removeAttribute(n)
                        }
                } else
                    "text"in t && (e.nodeValue = t.text)
            } else
                e = f.doc.createElementNS(_, e);
            return e
        }
        function O(e, t) {
            return "finite" == (t = y.prototype.toLowerCase.call(t)) ? isFinite(e) : !("array" != t || !(e instanceof Array || Array.isArray && Array.isArray(e))) || ("null" == t && null === e || t == typeof e && null !== e || "object" == t && e === Object(e) || n.call(e).slice(8, -1).toLowerCase() == t)
        }
        function M(s, o, a) {
            return function e() {
                var t = Array.prototype.slice.call(arguments, 0)
                  , n = t.join("␀")
                  , i = e.cache = e.cache || {}
                  , r = e.count = e.count || [];
                return i[u](n) ? function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t)
                            return e.push(e.splice(n, 1)[0])
                }(r, n) : (1e3 <= r.length && delete i[r.shift()],
                r.push(n),
                i[n] = s.apply(o, t)),
                a ? a(i[n]) : i[n]
            }
        }
        function D(e) {
            return e % 360 * b / 180
        }
        v._.$ = A,
        v._.id = S,
        v.format = (t = /\{([^\}]+)\}/g,
        o = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
        function(e, r) {
            return y(e).replace(t, function(e, t) {
                return n = e,
                s = i = r,
                t.replace(o, function(e, t, n, i, r) {
                    t = t || i,
                    s && (t in s && (s = s[t]),
                    "function" == typeof s && r && (s = s()))
                }),
                s = (null == s || s == i ? n : s) + "";
                var n, i, s
            })
        }
        ),
        v._.clone = function e(t) {
            if ("function" == typeof t || Object(t) !== t)
                return t;
            var n = new t.constructor;
            for (var i in t)
                t[u](i) && (n[i] = e(t[i]));
            return n
        }
        ,
        v._.cacher = M,
        v.rad = D,
        v.deg = function(e) {
            return 180 * e / b % 360
        }
        ,
        v.sin = function(e) {
            return d.sin(v.rad(e))
        }
        ,
        v.tan = function(e) {
            return d.tan(v.rad(e))
        }
        ,
        v.cos = function(e) {
            return d.cos(v.rad(e))
        }
        ,
        v.asin = function(e) {
            return v.deg(d.asin(e))
        }
        ,
        v.acos = function(e) {
            return v.deg(d.acos(e))
        }
        ,
        v.atan = function(e) {
            return v.deg(d.atan(e))
        }
        ,
        v.atan2 = function(e) {
            return v.deg(d.atan2(e))
        }
        ,
        v.angle = function e(t, n, i, r, s, o) {
            if (null != s)
                return e(t, n, s, o) - e(i, r, s, o);
            var a = t - i
              , l = n - r;
            return a || l ? (180 + 180 * d.atan2(-l, -a) / b + 360) % 360 : 0
        }
        ,
        v.len = function(e, t, n, i) {
            return Math.sqrt(v.len2(e, t, n, i))
        }
        ,
        v.len2 = function(e, t, n, i) {
            return (e - n) * (e - n) + (t - i) * (t - i)
        }
        ,
        v.closestPoint = function(e, i, r) {
            function t(e) {
                var t = e.x - i
                  , n = e.y - r;
                return t * t + n * n
            }
            for (var n, s, o, a, l = e.node, u = l.getTotalLength(), c = u / l.pathSegList.numberOfItems * .125, d = 1 / 0, h = 0; h <= u; h += c)
                (a = t(o = l.getPointAtLength(h))) < d && (n = o,
                s = h,
                d = a);
            for (c *= .5; .5 < c; ) {
                var f, p, m, g, v, y;
                0 <= (m = s - c) && (v = t(f = l.getPointAtLength(m))) < d ? (n = f,
                s = m,
                d = v) : (g = s + c) <= u && (y = t(p = l.getPointAtLength(g))) < d ? (n = p,
                s = g,
                d = y) : c *= .5
            }
            return n = {
                x: n.x,
                y: n.y,
                length: s,
                distance: Math.sqrt(d)
            }
        }
        ,
        v.is = O,
        v.snapTo = function(e, t, n) {
            if (n = O(n, "finite") ? n : 10,
            O(e, "array")) {
                for (var i = e.length; i--; )
                    if (m(e[i] - t) <= n)
                        return e[i]
            } else {
                var r = t % (e = +e);
                if (r < n)
                    return t - r;
                if (e - n < r)
                    return t - r + e
            }
            return t
        }
        ,
        v.getRGB = M(function(e) {
            if (!e || (e = y(e)).indexOf("-") + 1)
                return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: I
                };
            if ("none" == e)
                return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: I
                };
            if (!E[u](e.toLowerCase().substring(0, 2)) && "#" != e.charAt() && (e = L(e)),
            !e)
                return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: I
                };
            var t, n, i, r, s, o, a = e.match(w);
            return a ? (a[2] && (i = c(a[2].substring(5), 16),
            n = c(a[2].substring(3, 5), 16),
            t = c(a[2].substring(1, 3), 16)),
            a[3] && (i = c((s = a[3].charAt(3)) + s, 16),
            n = c((s = a[3].charAt(2)) + s, 16),
            t = c((s = a[3].charAt(1)) + s, 16)),
            a[4] && (o = a[4].split(x),
            t = l(o[0]),
            "%" == o[0].slice(-1) && (t *= 2.55),
            n = l(o[1]),
            "%" == o[1].slice(-1) && (n *= 2.55),
            i = l(o[2]),
            "%" == o[2].slice(-1) && (i *= 2.55),
            "rgba" == a[1].toLowerCase().slice(0, 4) && (r = l(o[3])),
            o[3] && "%" == o[3].slice(-1) && (r /= 100)),
            a[5] ? (o = a[5].split(x),
            t = l(o[0]),
            "%" == o[0].slice(-1) && (t /= 100),
            n = l(o[1]),
            "%" == o[1].slice(-1) && (n /= 100),
            i = l(o[2]),
            "%" == o[2].slice(-1) && (i /= 100),
            ("deg" == o[0].slice(-3) || "°" == o[0].slice(-1)) && (t /= 360),
            "hsba" == a[1].toLowerCase().slice(0, 4) && (r = l(o[3])),
            o[3] && "%" == o[3].slice(-1) && (r /= 100),
            v.hsb2rgb(t, n, i, r)) : a[6] ? (o = a[6].split(x),
            t = l(o[0]),
            "%" == o[0].slice(-1) && (t /= 100),
            n = l(o[1]),
            "%" == o[1].slice(-1) && (n /= 100),
            i = l(o[2]),
            "%" == o[2].slice(-1) && (i /= 100),
            ("deg" == o[0].slice(-3) || "°" == o[0].slice(-1)) && (t /= 360),
            "hsla" == a[1].toLowerCase().slice(0, 4) && (r = l(o[3])),
            o[3] && "%" == o[3].slice(-1) && (r /= 100),
            v.hsl2rgb(t, n, i, r)) : (t = p(d.round(t), 255),
            n = p(d.round(n), 255),
            i = p(d.round(i), 255),
            r = p(h(r, 0), 1),
            (a = {
                r: t,
                g: n,
                b: i,
                toString: I
            }).hex = "#" + (16777216 | i | n << 8 | t << 16).toString(16).slice(1),
            a.opacity = O(r, "finite") ? r : 1,
            a)) : {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: I
            }
        }, v),
        v.hsb = M(function(e, t, n) {
            return v.hsb2rgb(e, t, n).hex
        }),
        v.hsl = M(function(e, t, n) {
            return v.hsl2rgb(e, t, n).hex
        }),
        v.rgb = M(function(e, t, n, i) {
            if (O(i, "finite")) {
                var r = d.round;
                return "rgba(" + [r(e), r(t), r(n), +i.toFixed(2)] + ")"
            }
            return "#" + (16777216 | n | t << 8 | e << 16).toString(16).slice(1)
        });
        var L = function(e) {
            var n = f.doc.getElementsByTagName("head")[0] || f.doc.getElementsByTagName("svg")[0]
              , i = "rgb(255, 0, 0)";
            return (L = M(function(e) {
                if ("red" == e.toLowerCase())
                    return i;
                n.style.color = i,
                n.style.color = e;
                var t = f.doc.defaultView.getComputedStyle(n, "").getPropertyValue("color");
                return t == i ? null : t
            }))(e)
        }
          , N = function() {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        }
          , P = function() {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        }
          , I = function() {
            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
        }
          , F = function(e, t, n) {
            if (null == t && O(e, "object") && "r"in e && "g"in e && "b"in e && (n = e.b,
            t = e.g,
            e = e.r),
            null == t && O(e, string)) {
                var i = v.getRGB(e);
                e = i.r,
                t = i.g,
                n = i.b
            }
            return (1 < e || 1 < t || 1 < n) && (e /= 255,
            t /= 255,
            n /= 255),
            [e, t, n]
        }
          , j = function(e, t, n, i) {
            var r = {
                r: e = d.round(255 * e),
                g: t = d.round(255 * t),
                b: n = d.round(255 * n),
                opacity: O(i, "finite") ? i : 1,
                hex: v.rgb(e, t, n),
                toString: I
            };
            return O(i, "finite") && (r.opacity = i),
            r
        };
        v.color = function(e) {
            var t;
            return O(e, "object") && "h"in e && "s"in e && "b"in e ? (t = v.hsb2rgb(e),
            e.r = t.r,
            e.g = t.g,
            e.b = t.b,
            e.opacity = 1,
            e.hex = t.hex) : O(e, "object") && "h"in e && "s"in e && "l"in e ? (t = v.hsl2rgb(e),
            e.r = t.r,
            e.g = t.g,
            e.b = t.b,
            e.opacity = 1,
            e.hex = t.hex) : (O(e, "string") && (e = v.getRGB(e)),
            O(e, "object") && "r"in e && "g"in e && "b"in e && !("error"in e) ? (t = v.rgb2hsl(e),
            e.h = t.h,
            e.s = t.s,
            e.l = t.l,
            t = v.rgb2hsb(e),
            e.v = t.b) : ((e = {
                hex: "none"
            }).r = e.g = e.b = e.h = e.s = e.v = e.l = -1,
            e.error = 1)),
            e.toString = I,
            e
        }
        ,
        v.hsb2rgb = function(e, t, n, i) {
            var r, s, o, a, l;
            return O(e, "object") && "h"in e && "s"in e && "b"in e && (n = e.b,
            t = e.s,
            i = e.o,
            e = e.h),
            a = (l = n * t) * (1 - m((e = (e *= 360) % 360 / 60) % 2 - 1)),
            r = s = o = n - l,
            j(r += [l, a, 0, 0, a, l][e = ~~e], s += [a, l, l, a, 0, 0][e], o += [0, 0, a, l, l, a][e], i)
        }
        ,
        v.hsl2rgb = function(e, t, n, i) {
            var r, s, o, a, l;
            return O(e, "object") && "h"in e && "s"in e && "l"in e && (n = e.l,
            t = e.s,
            e = e.h),
            (1 < e || 1 < t || 1 < n) && (e /= 360,
            t /= 100,
            n /= 100),
            a = (l = 2 * t * (n < .5 ? n : 1 - n)) * (1 - m((e = (e *= 360) % 360 / 60) % 2 - 1)),
            r = s = o = n - l / 2,
            j(r += [l, a, 0, 0, a, l][e = ~~e], s += [a, l, l, a, 0, 0][e], o += [0, 0, a, l, l, a][e], i)
        }
        ,
        v.rgb2hsb = function(e, t, n) {
            var i, r;
            return e = (n = F(e, t, n))[0],
            t = n[1],
            n = n[2],
            {
                h: ((0 == (r = (i = h(e, t, n)) - p(e, t, n)) ? null : i == e ? (t - n) / r : i == t ? (n - e) / r + 2 : (e - t) / r + 4) + 360) % 6 * 60 / 360,
                s: 0 == r ? 0 : r / i,
                b: i,
                toString: N
            }
        }
        ,
        v.rgb2hsl = function(e, t, n) {
            var i, r, s, o;
            return e = (n = F(e, t, n))[0],
            t = n[1],
            n = n[2],
            i = ((r = h(e, t, n)) + (s = p(e, t, n))) / 2,
            {
                h: ((0 == (o = r - s) ? null : r == e ? (t - n) / o : r == t ? (n - e) / o + 2 : (e - t) / o + 4) + 360) % 6 * 60 / 360,
                s: 0 == o ? 0 : i < .5 ? o / (2 * i) : o / (2 - 2 * i),
                l: i,
                toString: P
            }
        }
        ,
        v.parsePathString = function(e) {
            if (!e)
                return null;
            var t = v.path(e);
            if (t.arr)
                return v.path.clone(t.arr);
            var s = {
                a: 7,
                c: 6,
                o: 2,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                u: 3,
                z: 0
            }
              , o = [];
            return O(e, "array") && O(e[0], "array") && (o = v.path.clone(e)),
            o.length || y(e).replace(i, function(e, t, n) {
                var i = []
                  , r = t.toLowerCase();
                if (n.replace(a, function(e, t) {
                    t && i.push(+t)
                }),
                "m" == r && 2 < i.length && (o.push([t].concat(i.splice(0, 2))),
                r = "l",
                t = "m" == t ? "l" : "L"),
                "o" == r && 1 == i.length && o.push([t, i[0]]),
                "r" == r)
                    o.push([t].concat(i));
                else
                    for (; i.length >= s[r] && (o.push([t].concat(i.splice(0, s[r]))),
                    s[r]); )
                        ;
            }),
            o.toString = v.path.toString,
            t.arr = v.path.clone(o),
            o
        }
        ;
        var B = v.parseTransformString = function(e) {
            if (!e)
                return null;
            var r = [];
            return O(e, "array") && O(e[0], "array") && (r = v.path.clone(e)),
            r.length || y(e).replace(s, function(e, t, n) {
                var i = [];
                t.toLowerCase();
                n.replace(a, function(e, t) {
                    t && i.push(+t)
                }),
                r.push([t].concat(i))
            }),
            r.toString = v.path.toString,
            r
        }
        ;
        v._.svgTransform2string = function(e) {
            var i = [];
            return e = e.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(e, t, n) {
                return n = n.split(/\s*,\s*|\s+/),
                "rotate" == t && 1 == n.length && n.push(0, 0),
                "scale" == t && (2 < n.length ? n = n.slice(0, 2) : 2 == n.length && n.push(0, 0),
                1 == n.length && n.push(n[0], 0, 0)),
                "skewX" == t ? i.push(["m", 1, 0, d.tan(D(n[0])), 1, 0, 0]) : "skewY" == t ? i.push(["m", 1, d.tan(D(n[0])), 0, 1, 0, 0]) : i.push([t.charAt(0)].concat(n)),
                e
            }),
            i
        }
        ,
        v._.rgTransform = /^[a-z][\s]*-?\.?\d/i,
        v._.transform2matrix = function(e, t) {
            var n = B(e)
              , i = new v.Matrix;
            if (n)
                for (var r = 0, s = n.length; r < s; r++) {
                    var o, a, l, u, c, d = n[r], h = d.length, f = y(d[0]).toLowerCase(), p = d[0] != f, m = p ? i.invert() : 0;
                    "t" == f && 2 == h ? i.translate(d[1], 0) : "t" == f && 3 == h ? p ? (o = m.x(0, 0),
                    a = m.y(0, 0),
                    l = m.x(d[1], d[2]),
                    u = m.y(d[1], d[2]),
                    i.translate(l - o, u - a)) : i.translate(d[1], d[2]) : "r" == f ? 2 == h ? (c = c || t,
                    i.rotate(d[1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == h && (p ? (l = m.x(d[2], d[3]),
                    u = m.y(d[2], d[3]),
                    i.rotate(d[1], l, u)) : i.rotate(d[1], d[2], d[3])) : "s" == f ? 2 == h || 3 == h ? (c = c || t,
                    i.scale(d[1], d[h - 1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == h ? p ? (l = m.x(d[2], d[3]),
                    u = m.y(d[2], d[3]),
                    i.scale(d[1], d[1], l, u)) : i.scale(d[1], d[1], d[2], d[3]) : 5 == h && (p ? (l = m.x(d[3], d[4]),
                    u = m.y(d[3], d[4]),
                    i.scale(d[1], d[2], l, u)) : i.scale(d[1], d[2], d[3], d[4])) : "m" == f && 7 == h && i.add(d[1], d[2], d[3], d[4], d[5], d[6])
                }
            return i
        }
        ,
        v._unit2px = function(n, i, r) {
            var e = z(n).node
              , s = {}
              , t = e.querySelector(".svg---mgr");
            t || (A(t = A("rect"), {
                x: -9e9,
                y: -9e9,
                width: 10,
                height: 10,
                class: "svg---mgr",
                fill: "none"
            }),
            e.appendChild(t));
            function o(e) {
                if (null == e)
                    return "";
                if (e == +e)
                    return e;
                A(t, {
                    width: e
                });
                try {
                    return t.getBBox().width
                } catch (e) {
                    return 0
                }
            }
            function a(e) {
                if (null == e)
                    return "";
                if (e == +e)
                    return e;
                A(t, {
                    height: e
                });
                try {
                    return t.getBBox().height
                } catch (e) {
                    return 0
                }
            }
            function l(e, t) {
                null == i ? s[e] = t(n.attr(e) || 0) : e == i && (s = t(null == r ? n.attr(e) || 0 : r))
            }
            switch (n.type) {
            case "rect":
                l("rx", o),
                l("ry", a);
            case "image":
                l("width", o),
                l("height", a);
            case "text":
                l("x", o),
                l("y", a);
                break;
            case "circle":
                l("cx", o),
                l("cy", a),
                l("r", o);
                break;
            case "ellipse":
                l("cx", o),
                l("cy", a),
                l("rx", o),
                l("ry", a);
                break;
            case "line":
                l("x1", o),
                l("x2", o),
                l("y1", a),
                l("y2", a);
                break;
            case "marker":
                l("refX", o),
                l("markerWidth", o),
                l("refY", a),
                l("markerHeight", a);
                break;
            case "radialGradient":
                l("fx", o),
                l("fy", a);
                break;
            case "tspan":
                l("dx", o),
                l("dy", a);
                break;
            default:
                l(i, o)
            }
            return e.removeChild(t),
            s
        }
        ;
        f.doc.contains || f.doc.compareDocumentPosition;
        function z(e) {
            return e.node.ownerSVGElement && V(e.node.ownerSVGElement) || v.select("svg")
        }
        function H(e) {
            O(e, "array") || (e = Array.prototype.slice.call(arguments, 0));
            for (var t = 0, n = 0, i = this.node; this[t]; )
                delete this[t++];
            for (t = 0; t < e.length; t++)
                "set" == e[t].type ? e[t].forEach(function(e) {
                    i.appendChild(e.node)
                }) : i.appendChild(e[t].node);
            var r = i.childNodes;
            for (t = 0; t < r.length; t++)
                this[n++] = V(r[t]);
            return this
        }
        function q(e) {
            if (e.snap in k)
                return k[e.snap];
            var t;
            try {
                t = e.ownerSVGElement
            } catch (e) {}
            this.node = e,
            t && (this.paper = new W(t)),
            this.type = e.tagName || e.nodeName;
            var n = this.id = S(this);
            if (this.anims = {},
            this._ = {
                transform: []
            },
            e.snap = n,
            "g" == (k[n] = this).type && (this.add = H),
            this.type in {
                g: 1,
                mask: 1,
                pattern: 1,
                symbol: 1
            })
                for (var i in W.prototype)
                    W.prototype[u](i) && (this[i] = W.prototype[i])
        }
        function R(e) {
            this.node = e
        }
        function $(e, t) {
            var n = A(e);
            return t.appendChild(n),
            V(n)
        }
        function W(e, t) {
            var n, i, r, s = W.prototype;
            if (e && e.tagName && "svg" == e.tagName.toLowerCase()) {
                if (e.snap in k)
                    return k[e.snap];
                var o = e.ownerDocument;
                for (var a in n = new q(e),
                i = e.getElementsByTagName("desc")[0],
                r = e.getElementsByTagName("defs")[0],
                i || ((i = A("desc")).appendChild(o.createTextNode("Created with Snap")),
                n.node.appendChild(i)),
                r || (r = A("defs"),
                n.node.appendChild(r)),
                n.defs = r,
                s)
                    s[u](a) && (n[a] = s[a]);
                n.paper = n.root = n
            } else
                A((n = $("svg", f.doc.body)).node, {
                    height: t,
                    version: 1.1,
                    width: e,
                    xmlns: _
                });
            return n
        }
        function V(e) {
            return e ? e instanceof q || e instanceof R ? e : e.tagName && "svg" == e.tagName.toLowerCase() ? new W(e) : e.tagName && "object" == e.tagName.toLowerCase() && "image/svg+xml" == e.type ? new W(e.contentDocument.getElementsByTagName("svg")[0]) : new q(e) : e
        }
        v._.getSomeDefs = function(e) {
            var t = e.node.ownerSVGElement && V(e.node.ownerSVGElement) || e.node.parentNode && V(e.node.parentNode) || v.select("svg") || v(0, 0)
              , n = t.select("defs")
              , i = null != n && n.node;
            return i || (i = $("defs", t.node).node),
            i
        }
        ,
        v._.getSomeSVG = z,
        v.select = function(e) {
            return e = y(e).replace(/([^\\]):/g, "$1\\:"),
            V(f.doc.querySelector(e))
        }
        ,
        v.selectAll = function(e) {
            for (var t = f.doc.querySelectorAll(e), n = (v.set || Array)(), i = 0; i < t.length; i++)
                n.push(V(t[i]));
            return n
        }
        ,
        setInterval(function() {
            for (var e in k)
                if (k[u](e)) {
                    var t = k[e]
                      , n = t.node;
                    ("svg" != t.type && !n.ownerSVGElement || "svg" == t.type && (!n.parentNode || "ownerSVGElement"in n.parentNode && !n.ownerSVGElement)) && delete k[e]
                }
        }, 1e4),
        q.prototype.attr = function(e, t) {
            var n = this.node;
            if (!e) {
                if (1 != n.nodeType)
                    return {
                        text: n.nodeValue
                    };
                for (var i = n.attributes, r = {}, s = 0, o = i.length; s < o; s++)
                    r[i[s].nodeName] = i[s].nodeValue;
                return r
            }
            if (O(e, "string")) {
                if (!(1 < arguments.length))
                    return Y("snap.util.getattr." + e, this).firstDefined();
                var a = {};
                a[e] = t,
                e = a
            }
            for (var l in e)
                e[u](l) && Y("snap.util.attr." + l, this, e[l]);
            return this
        }
        ,
        v.parse = function(e) {
            var t = f.doc.createDocumentFragment()
              , n = !0
              , i = f.doc.createElement("div");
            if ((e = y(e)).match(/^\s*<\s*svg(?:\s|>)/) || (e = "<svg>" + e + "</svg>",
            n = !1),
            i.innerHTML = e,
            e = i.getElementsByTagName("svg")[0])
                if (n)
                    t = e;
                else
                    for (; e.firstChild; )
                        t.appendChild(e.firstChild);
            return new R(t)
        }
        ,
        v.fragment = function() {
            for (var e = Array.prototype.slice.call(arguments, 0), t = f.doc.createDocumentFragment(), n = 0, i = e.length; n < i; n++) {
                var r = e[n];
                r.node && r.node.nodeType && t.appendChild(r.node),
                r.nodeType && t.appendChild(r),
                "string" == typeof r && t.appendChild(v.parse(r).node)
            }
            return new R(t)
        }
        ,
        v._.make = $,
        v._.wrap = V,
        W.prototype.el = function(e, t) {
            var n = $(e, this.node);
            return t && n.attr(t),
            n
        }
        ,
        q.prototype.children = function() {
            for (var e = [], t = this.node.childNodes, n = 0, i = t.length; n < i; n++)
                e[n] = v(t[n]);
            return e
        }
        ,
        q.prototype.toJSON = function() {
            var e = [];
            return function e(t, n) {
                for (var i = 0, r = t.length; i < r; i++) {
                    var s = {
                        type: t[i].type,
                        attr: t[i].attr()
                    }
                      , o = t[i].children();
                    n.push(s),
                    o.length && e(o, s.childNodes = [])
                }
            }([this], e),
            e[0]
        }
        ,
        Y.on("snap.util.getattr", function() {
            var e = Y.nt()
              , t = (e = e.substring(e.lastIndexOf(".") + 1)).replace(/[A-Z]/g, function(e) {
                return "-" + e.toLowerCase()
            });
            return X[u](t) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(t) : A(this.node, e)
        });
        var X = {
            "alignment-baseline": 0,
            "baseline-shift": 0,
            clip: 0,
            "clip-path": 0,
            "clip-rule": 0,
            color: 0,
            "color-interpolation": 0,
            "color-interpolation-filters": 0,
            "color-profile": 0,
            "color-rendering": 0,
            cursor: 0,
            direction: 0,
            display: 0,
            "dominant-baseline": 0,
            "enable-background": 0,
            fill: 0,
            "fill-opacity": 0,
            "fill-rule": 0,
            filter: 0,
            "flood-color": 0,
            "flood-opacity": 0,
            font: 0,
            "font-family": 0,
            "font-size": 0,
            "font-size-adjust": 0,
            "font-stretch": 0,
            "font-style": 0,
            "font-variant": 0,
            "font-weight": 0,
            "glyph-orientation-horizontal": 0,
            "glyph-orientation-vertical": 0,
            "image-rendering": 0,
            kerning: 0,
            "letter-spacing": 0,
            "lighting-color": 0,
            marker: 0,
            "marker-end": 0,
            "marker-mid": 0,
            "marker-start": 0,
            mask: 0,
            opacity: 0,
            overflow: 0,
            "pointer-events": 0,
            "shape-rendering": 0,
            "stop-color": 0,
            "stop-opacity": 0,
            stroke: 0,
            "stroke-dasharray": 0,
            "stroke-dashoffset": 0,
            "stroke-linecap": 0,
            "stroke-linejoin": 0,
            "stroke-miterlimit": 0,
            "stroke-opacity": 0,
            "stroke-width": 0,
            "text-anchor": 0,
            "text-decoration": 0,
            "text-rendering": 0,
            "unicode-bidi": 0,
            visibility: 0,
            "word-spacing": 0,
            "writing-mode": 0
        };
        Y.on("snap.util.attr", function(e) {
            var t = Y.nt()
              , n = {};
            n[t = t.substring(t.lastIndexOf(".") + 1)] = e;
            var i = t.replace(/-(\w)/gi, function(e, t) {
                return t.toUpperCase()
            })
              , r = t.replace(/[A-Z]/g, function(e) {
                return "-" + e.toLowerCase()
            });
            X[u](r) ? this.node.style[i] = null == e ? "" : e : A(this.node, n)
        }),
        v.ajax = function(e, t, n, i) {
            var r = new XMLHttpRequest
              , s = S();
            if (r) {
                if (O(t, "function"))
                    i = n,
                    n = t,
                    t = null;
                else if (O(t, "object")) {
                    var o = [];
                    for (var a in t)
                        t.hasOwnProperty(a) && o.push(encodeURIComponent(a) + "=" + encodeURIComponent(t[a]));
                    t = o.join("&")
                }
                return r.open(t ? "POST" : "GET", e, !0),
                t && (r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                r.setRequestHeader("Content-type", "application/x-www-form-urlencoded")),
                n && (Y.once("snap.ajax." + s + ".0", n),
                Y.once("snap.ajax." + s + ".200", n),
                Y.once("snap.ajax." + s + ".304", n)),
                r.onreadystatechange = function() {
                    4 == r.readyState && Y("snap.ajax." + s + "." + r.status, i, r)
                }
                ,
                4 == r.readyState ? r : (r.send(t),
                r)
            }
        }
        ,
        v.load = function(e, n, i) {
            v.ajax(e, function(e) {
                var t = v.parse(e.responseText);
                i ? n.call(i, t) : n(t)
            })
        }
        ;
        return v.getElementByPoint = function(e, t) {
            this.canvas;
            var n, i, r, s, o, a, l, u = f.doc.elementFromPoint(e, t);
            if (f.win.opera && "svg" == u.tagName) {
                var c = (i = (n = u).getBoundingClientRect(),
                r = n.ownerDocument,
                s = r.body,
                o = r.documentElement,
                a = o.clientTop || s.clientTop || 0,
                l = o.clientLeft || s.clientLeft || 0,
                {
                    y: i.top + (g.win.pageYOffset || o.scrollTop || s.scrollTop) - a,
                    x: i.left + (g.win.pageXOffset || o.scrollLeft || s.scrollLeft) - l
                })
                  , d = u.createSVGRect();
                d.x = e - c.x,
                d.y = t - c.y,
                d.width = d.height = 1;
                var h = u.getIntersectionList(d, null);
                h.length && (u = h[h.length - 1])
            }
            return u ? V(u) : null
        }
        ,
        v.plugin = function(e) {
            e(v, q, W, f, R)
        }
        ,
        f.win.Snap = v
    }(v || this);
    return t.plugin(function(p, e, t, n, i) {
        var r = e.prototype
          , a = p.is
          , c = String
          , s = p._unit2px
          , m = p._.$
          , l = p._.make
          , u = p._.getSomeDefs
          , o = p._.wrap;
        r.getBBox = function(e) {
            if ("tspan" == this.type)
                return p._.box(this.node.getClientRects().item(0));
            if (!p.Matrix || !p.path)
                return this.node.getBBox();
            var t = this
              , n = new p.Matrix;
            if (t.removed)
                return p._.box();
            for (; "use" == t.type; )
                if (e || (n = n.add(t.transform().localMatrix.translate(t.attr("x") || 0, t.attr("y") || 0))),
                t.original)
                    t = t.original;
                else {
                    var i = t.attr("xlink:href");
                    t = t.original = t.node.ownerDocument.getElementById(i.substring(i.indexOf("#") + 1))
                }
            var r = t._
              , s = p.path.get[t.type] || p.path.get.deflt;
            try {
                return e ? (r.bboxwt = s ? p.path.getBBox(t.realPath = s(t)) : p._.box(t.node.getBBox()),
                p._.box(r.bboxwt)) : (t.realPath = s(t),
                t.matrix = t.transform().localMatrix,
                r.bbox = p.path.getBBox(p.path.map(t.realPath, n.add(t.matrix))),
                p._.box(r.bbox))
            } catch (e) {
                return p._.box()
            }
        }
        ;
        var d = function() {
            return this.string
        };
        function h(e, t) {
            if (null == t) {
                var n = !0;
                if (!(t = "linearGradient" == e.type || "radialGradient" == e.type ? e.node.getAttribute("gradientTransform") : "pattern" == e.type ? e.node.getAttribute("patternTransform") : e.node.getAttribute("transform")))
                    return new p.Matrix;
                t = p._.svgTransform2string(t)
            } else
                t = p._.rgTransform.test(t) ? c(t).replace(/\.{3}|\u2026/g, e._.transform || "") : p._.svgTransform2string(t),
                a(t, "array") && (t = p.path ? p.path.toString.call(t) : c(t)),
                e._.transform = t;
            var i = p._.transform2matrix(t, e.getBBox(1));
            if (n)
                return i;
            e.matrix = i
        }
        r.transform = function(e) {
            var t = this._;
            if (null != e)
                return e instanceof p.Matrix ? (this.matrix = e,
                this._.transform = e.toTransformString()) : h(this, e),
                this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? m(this.node, {
                    gradientTransform: this.matrix
                }) : "pattern" == this.type ? m(this.node, {
                    patternTransform: this.matrix
                }) : m(this.node, {
                    transform: this.matrix
                })),
                this;
            for (var n, i = this, r = new p.Matrix(this.node.getCTM()), s = h(this), o = [s], a = new p.Matrix, l = s.toTransformString(), u = c(s) == c(this.matrix) ? c(t.transform) : l; "svg" != i.type && (i = i.parent()); )
                o.push(h(i));
            for (n = o.length; n--; )
                a.add(o[n]);
            return {
                string: u,
                globalMatrix: r,
                totalMatrix: a,
                localMatrix: s,
                diffMatrix: r.clone().add(s.invert()),
                global: r.toTransformString(),
                total: a.toTransformString(),
                local: l,
                toString: d
            }
        }
        ,
        r.parent = function() {
            return o(this.node.parentNode)
        }
        ,
        r.append = r.add = function(e) {
            if (e) {
                if ("set" == e.type) {
                    var t = this;
                    return e.forEach(function(e) {
                        t.add(e)
                    }),
                    this
                }
                e = o(e),
                this.node.appendChild(e.node),
                e.paper = this.paper
            }
            return this
        }
        ,
        r.appendTo = function(e) {
            return e && (e = o(e)).append(this),
            this
        }
        ,
        r.prepend = function(e) {
            if (e) {
                if ("set" == e.type) {
                    var t, n = this;
                    return e.forEach(function(e) {
                        t ? t.after(e) : n.prepend(e),
                        t = e
                    }),
                    this
                }
                var i = (e = o(e)).parent();
                this.node.insertBefore(e.node, this.node.firstChild),
                this.add && this.add(),
                e.paper = this.paper,
                this.parent() && this.parent().add(),
                i && i.add()
            }
            return this
        }
        ,
        r.prependTo = function(e) {
            return (e = o(e)).prepend(this),
            this
        }
        ,
        r.before = function(e) {
            if ("set" == e.type) {
                var n = this;
                return e.forEach(function(e) {
                    var t = e.parent();
                    n.node.parentNode.insertBefore(e.node, n.node),
                    t && t.add()
                }),
                this.parent().add(),
                this
            }
            var t = (e = o(e)).parent();
            return this.node.parentNode.insertBefore(e.node, this.node),
            this.parent() && this.parent().add(),
            t && t.add(),
            e.paper = this.paper,
            this
        }
        ,
        r.after = function(e) {
            var t = (e = o(e)).parent();
            return this.node.nextSibling ? this.node.parentNode.insertBefore(e.node, this.node.nextSibling) : this.node.parentNode.appendChild(e.node),
            this.parent() && this.parent().add(),
            t && t.add(),
            e.paper = this.paper,
            this
        }
        ,
        r.insertBefore = function(e) {
            e = o(e);
            var t = this.parent();
            return e.node.parentNode.insertBefore(this.node, e.node),
            this.paper = e.paper,
            t && t.add(),
            e.parent() && e.parent().add(),
            this
        }
        ,
        r.insertAfter = function(e) {
            e = o(e);
            var t = this.parent();
            return e.node.parentNode.insertBefore(this.node, e.node.nextSibling),
            this.paper = e.paper,
            t && t.add(),
            e.parent() && e.parent().add(),
            this
        }
        ,
        r.remove = function() {
            var e = this.parent();
            return this.node.parentNode && this.node.parentNode.removeChild(this.node),
            delete this.paper,
            this.removed = !0,
            e && e.add(),
            this
        }
        ,
        r.select = function(e) {
            return o(this.node.querySelector(e))
        }
        ,
        r.selectAll = function(e) {
            for (var t = this.node.querySelectorAll(e), n = (p.set || Array)(), i = 0; i < t.length; i++)
                n.push(o(t[i]));
            return n
        }
        ,
        r.asPX = function(e, t) {
            return null == t && (t = this.attr(e)),
            +s(this, e, t)
        }
        ,
        r.use = function() {
            var e, t = this.node.id;
            return t || (t = this.id,
            m(this.node, {
                id: t
            })),
            e = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? l(this.type, this.node.parentNode) : l("use", this.node.parentNode),
            m(e.node, {
                "xlink:href": "#" + t
            }),
            e.original = this,
            e
        }
        ,
        r.clone = function() {
            var e = o(this.node.cloneNode(!0));
            return m(e.node, "id") && m(e.node, {
                id: e.id
            }),
            function(e) {
                var t, n = e.selectAll("*"), r = /^\s*url\(("|'|)(.*)\1\)\s*$/, i = [], s = {};
                function o(n, i) {
                    var e = m(n.node, i);
                    (e = (e = e && e.match(r)) && e[2]) && "#" == e.charAt() && (e = e.substring(1)) && (s[e] = (s[e] || []).concat(function(e) {
                        var t = {};
                        t[i] = p.url(e),
                        m(n.node, t)
                    }))
                }
                function a(t) {
                    var e = m(t.node, "xlink:href");
                    e && "#" == e.charAt() && (e = e.substring(1)) && (s[e] = (s[e] || []).concat(function(e) {
                        t.attr("xlink:href", "#" + e)
                    }))
                }
                for (var l = 0, u = n.length; l < u; l++) {
                    o(t = n[l], "fill"),
                    o(t, "stroke"),
                    o(t, "filter"),
                    o(t, "mask"),
                    o(t, "clip-path"),
                    a(t);
                    var c = m(t.node, "id");
                    c && (m(t.node, {
                        id: t.id
                    }),
                    i.push({
                        old: c,
                        id: t.id
                    }))
                }
                for (l = 0,
                u = i.length; l < u; l++) {
                    var d = s[i[l].old];
                    if (d)
                        for (var h = 0, f = d.length; h < f; h++)
                            d[h](i[l].id)
                }
            }(e),
            e.insertAfter(this),
            e
        }
        ,
        r.toDefs = function() {
            return u(this).appendChild(this.node),
            this
        }
        ,
        r.pattern = r.toPattern = function(e, t, n, i) {
            var r = l("pattern", u(this));
            return null == e && (e = this.getBBox()),
            a(e, "object") && "x"in e && (t = e.y,
            n = e.width,
            i = e.height,
            e = e.x),
            m(r.node, {
                x: e,
                y: t,
                width: n,
                height: i,
                patternUnits: "userSpaceOnUse",
                id: r.id,
                viewBox: [e, t, n, i].join(" ")
            }),
            r.node.appendChild(this.node),
            r
        }
        ,
        r.marker = function(e, t, n, i, r, s) {
            var o = l("marker", u(this));
            return null == e && (e = this.getBBox()),
            a(e, "object") && "x"in e && (t = e.y,
            n = e.width,
            i = e.height,
            r = e.refX || e.cx,
            s = e.refY || e.cy,
            e = e.x),
            m(o.node, {
                viewBox: [e, t, n, i].join(" "),
                markerWidth: n,
                markerHeight: i,
                orient: "auto",
                refX: r || 0,
                refY: s || 0,
                id: o.id
            }),
            o.node.appendChild(this.node),
            o
        }
        ;
        var f = {};
        function g(s) {
            return function() {
                var e = s ? "<" + this.type : ""
                  , t = this.node.attributes
                  , n = this.node.childNodes;
                if (s)
                    for (var i = 0, r = t.length; i < r; i++)
                        e += " " + t[i].name + '="' + t[i].value.replace(/"/g, '\\"') + '"';
                if (n.length) {
                    for (s && (e += ">"),
                    i = 0,
                    r = n.length; i < r; i++)
                        3 == n[i].nodeType ? e += n[i].nodeValue : 1 == n[i].nodeType && (e += o(n[i]).toString());
                    s && (e += "</" + this.type + ">")
                } else
                    s && (e += "/>");
                return e
            }
        }
        r.data = function(e, t) {
            var n = f[this.id] = f[this.id] || {};
            if (0 == arguments.length)
                return Y("snap.data.get." + this.id, this, n, null),
                n;
            if (1 != arguments.length)
                return n[e] = t,
                Y("snap.data.set." + this.id, this, t, e),
                this;
            if (p.is(e, "object")) {
                for (var i in e)
                    e.hasOwnProperty(i) && this.data(i, e[i]);
                return this
            }
            return Y("snap.data.get." + this.id, this, n[e], e),
            n[e]
        }
        ,
        r.removeData = function(e) {
            return null == e ? f[this.id] = {} : f[this.id] && delete f[this.id][e],
            this
        }
        ,
        r.outerSVG = r.toString = g(1),
        r.innerSVG = g(),
        r.toDataURL = function() {
            if (v && v.btoa) {
                var e = this.getBBox()
                  , t = p.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                    x: +e.x.toFixed(3),
                    y: +e.y.toFixed(3),
                    width: +e.width.toFixed(3),
                    height: +e.height.toFixed(3),
                    contents: this.outerSVG()
                });
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t)))
            }
        }
        ,
        i.prototype.select = r.select,
        i.prototype.selectAll = r.selectAll
    }),
    t.plugin(function(e, t, n, i, r) {
        var s = t.prototype
          , g = e.is
          , v = String
          , y = "hasOwnProperty";
        function b(n, i, r) {
            return function(e) {
                var t = e.slice(n, i);
                return 1 == t.length && (t = t[0]),
                r ? r(t) : t
            }
        }
        var w = function(e, t, n, i) {
            "function" != typeof n || n.length || (i = n,
            n = S.linear),
            this.attr = e,
            this.dur = t,
            n && (this.easing = n),
            i && (this.callback = i)
        };
        e._.Animation = w,
        e.animation = function(e, t, n, i) {
            return new w(e,t,n,i)
        }
        ,
        s.inAnim = function() {
            var e = [];
            for (var t in this.anims)
                this.anims[y](t) && function(t) {
                    e.push({
                        anim: new w(t._attrs,t.dur,t.easing,t._callback),
                        mina: t,
                        curStatus: t.status(),
                        status: function(e) {
                            return t.status(e)
                        },
                        stop: function() {
                            t.stop()
                        }
                    })
                }(this.anims[t]);
            return e
        }
        ,
        e.animate = function(e, t, n, i, r, s) {
            "function" != typeof r || r.length || (s = r,
            r = S.linear);
            var o = S.time()
              , a = S(e, t, o, o + i, S.time, n, r);
            return s && Y.once("mina.finish." + a.id, s),
            a
        }
        ,
        s.stop = function() {
            for (var e = this.inAnim(), t = 0, n = e.length; t < n; t++)
                e[t].stop();
            return this
        }
        ,
        s.animate = function(e, t, n, i) {
            "function" != typeof n || n.length || (i = n,
            n = S.linear),
            e instanceof w && (i = e.callback,
            n = e.easing,
            t = e.dur,
            e = e.attr);
            var r, s, o, a, l = [], u = [], c = {}, d = this;
            for (var h in e)
                if (e[y](h)) {
                    d.equal ? (r = (a = d.equal(h, v(e[h]))).from,
                    s = a.to,
                    o = a.f) : (r = +d.attr(h),
                    s = +e[h]);
                    var f = g(r, "array") ? r.length : 1;
                    c[h] = b(l.length, l.length + f, o),
                    l = l.concat(r),
                    u = u.concat(s)
                }
            var p = S.time()
              , m = S(l, u, p, p + t, S.time, function(e) {
                var t = {};
                for (var n in c)
                    c[y](n) && (t[n] = c[n](e));
                d.attr(t)
            }, n);
            return (d.anims[m.id] = m)._attrs = e,
            m._callback = i,
            Y("snap.animcreated." + d.id, m),
            Y.once("mina.finish." + m.id, function() {
                Y.off("mina.*." + m.id),
                delete d.anims[m.id],
                i && i.call(d)
            }),
            Y.once("mina.stop." + m.id, function() {
                Y.off("mina.*." + m.id),
                delete d.anims[m.id]
            }),
            d
        }
    }),
    t.plugin(function(o, e, t, n, i) {
        var a = Object.prototype.toString
          , l = String
          , u = Math;
        function c(e, t, n, i, r, s) {
            if (null == t && "[object SVGMatrix]" == a.call(e))
                return this.a = e.a,
                this.b = e.b,
                this.c = e.c,
                this.d = e.d,
                this.e = e.e,
                void (this.f = e.f);
            this.f = null != e ? (this.a = +e,
            this.b = +t,
            this.c = +n,
            this.d = +i,
            this.e = +r,
            +s) : (this.a = 1,
            this.b = 0,
            this.c = 0,
            this.d = 1,
            this.e = 0)
        }
        !function(e) {
            function r(e) {
                return e[0] * e[0] + e[1] * e[1]
            }
            function s(e) {
                var t = u.sqrt(r(e));
                e[0] && (e[0] /= t),
                e[1] && (e[1] /= t)
            }
            e.add = function(e, t, n, i, r, s) {
                if (e && e instanceof c)
                    return this.add(e.a, e.b, e.c, e.d, e.e, e.f);
                var o = e * this.a + t * this.c
                  , a = e * this.b + t * this.d;
                return this.e += r * this.a + s * this.c,
                this.f += r * this.b + s * this.d,
                this.c = n * this.a + i * this.c,
                this.d = n * this.b + i * this.d,
                this.a = o,
                this.b = a,
                this
            }
            ,
            c.prototype.multLeft = function(e, t, n, i, r, s) {
                if (e && e instanceof c)
                    return this.multLeft(e.a, e.b, e.c, e.d, e.e, e.f);
                var o = e * this.a + n * this.b
                  , a = e * this.c + n * this.d
                  , l = e * this.e + n * this.f + r;
                return this.b = t * this.a + i * this.b,
                this.d = t * this.c + i * this.d,
                this.f = t * this.e + i * this.f + s,
                this.a = o,
                this.c = a,
                this.e = l,
                this
            }
            ,
            e.invert = function() {
                var e = this
                  , t = e.a * e.d - e.b * e.c;
                return new c(e.d / t,-e.b / t,-e.c / t,e.a / t,(e.c * e.f - e.d * e.e) / t,(e.b * e.e - e.a * e.f) / t)
            }
            ,
            e.clone = function() {
                return new c(this.a,this.b,this.c,this.d,this.e,this.f)
            }
            ,
            e.translate = function(e, t) {
                return this.e += e * this.a + t * this.c,
                this.f += e * this.b + t * this.d,
                this
            }
            ,
            e.scale = function(e, t, n, i) {
                return null == t && (t = e),
                (n || i) && this.translate(n, i),
                this.a *= e,
                this.b *= e,
                this.c *= t,
                this.d *= t,
                (n || i) && this.translate(-n, -i),
                this
            }
            ,
            e.rotate = function(e, t, n) {
                e = o.rad(e),
                t = t || 0,
                n = n || 0;
                var i = +u.cos(e).toFixed(9)
                  , r = +u.sin(e).toFixed(9);
                return this.add(i, r, -r, i, t, n),
                this.add(1, 0, 0, 1, -t, -n)
            }
            ,
            e.skewX = function(e) {
                return this.skew(e, 0)
            }
            ,
            e.skewY = function(e) {
                return this.skew(0, e)
            }
            ,
            e.skew = function(e, t) {
                e = e || 0,
                t = t || 0,
                e = o.rad(e),
                t = o.rad(t);
                var n = u.tan(e).toFixed(9)
                  , i = u.tan(t).toFixed(9);
                return this.add(1, i, n, 1, 0, 0)
            }
            ,
            e.x = function(e, t) {
                return e * this.a + t * this.c + this.e
            }
            ,
            e.y = function(e, t) {
                return e * this.b + t * this.d + this.f
            }
            ,
            e.get = function(e) {
                return +this[l.fromCharCode(97 + e)].toFixed(4)
            }
            ,
            e.toString = function() {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }
            ,
            e.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }
            ,
            e.determinant = function() {
                return this.a * this.d - this.b * this.c
            }
            ,
            e.split = function() {
                var e = {};
                e.dx = this.e,
                e.dy = this.f;
                var t = [[this.a, this.b], [this.c, this.d]];
                e.scalex = u.sqrt(r(t[0])),
                s(t[0]),
                e.shear = t[0][0] * t[1][0] + t[0][1] * t[1][1],
                t[1] = [t[1][0] - t[0][0] * e.shear, t[1][1] - t[0][1] * e.shear],
                e.scaley = u.sqrt(r(t[1])),
                s(t[1]),
                e.shear /= e.scaley,
                this.determinant() < 0 && (e.scalex = -e.scalex);
                var n = t[0][1]
                  , i = t[1][1];
                return i < 0 ? (e.rotate = o.deg(u.acos(i)),
                n < 0 && (e.rotate = 360 - e.rotate)) : e.rotate = o.deg(u.asin(n)),
                e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate),
                e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate,
                e.noRotation = !+e.shear.toFixed(9) && !e.rotate,
                e
            }
            ,
            e.toTransformString = function(e) {
                var t = e || this.split();
                return +t.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (t.scalex = +t.scalex.toFixed(4),
                t.scaley = +t.scaley.toFixed(4),
                t.rotate = +t.rotate.toFixed(4),
                (t.dx || t.dy ? "t" + [+t.dx.toFixed(4), +t.dy.toFixed(4)] : "") + (t.rotate ? "r" + [+t.rotate.toFixed(4), 0, 0] : "") + (1 != t.scalex || 1 != t.scaley ? "s" + [t.scalex, t.scaley, 0, 0] : ""))
            }
        }(c.prototype),
        o.Matrix = c,
        o.matrix = function(e, t, n, i, r, s) {
            return new c(e,t,n,i,r,s)
        }
    }),
    t.plugin(function(s, o, e, r, a) {
        var t, i = s._.make, l = s._.wrap, u = s.is, c = s._.getSomeDefs, n = /^url\((['"]?)([^)]+)\1\)$/, d = s._.$, h = s.url, f = String, p = s._.separator;
        function m(r) {
            return function(e) {
                if (Y.stop(),
                e instanceof a && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild,
                c(this).appendChild(e),
                e = l(e)),
                e instanceof o)
                    if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
                        e.node.id || d(e.node, {
                            id: e.id
                        });
                        var t = h(e.node.id)
                    } else
                        t = e.attr(r);
                else if ((t = s.color(e)).error) {
                    var n = s(c(this).ownerSVGElement).gradient(e);
                    t = n ? (n.node.id || d(n.node, {
                        id: n.id
                    }),
                    h(n.node.id)) : e
                } else
                    t = f(t);
                var i = {};
                i[r] = t,
                d(this.node, i),
                this.node.style[r] = ""
            }
        }
        s.deurl = function(e) {
            var t = String(e).match(n);
            return t ? t[2] : e
        }
        ,
        Y.on("snap.util.attr.mask", function(e) {
            if (e instanceof o || e instanceof a) {
                if (Y.stop(),
                e instanceof a && 1 == e.node.childNodes.length && (e = e.node.firstChild,
                c(this).appendChild(e),
                e = l(e)),
                "mask" == e.type)
                    var t = e;
                else
                    (t = i("mask", c(this))).node.appendChild(e.node);
                !t.node.id && d(t.node, {
                    id: t.id
                }),
                d(this.node, {
                    mask: h(t.id)
                })
            }
        }),
        t = function(e) {
            if (e instanceof o || e instanceof a) {
                Y.stop();
                for (var t, n = e.node; n; ) {
                    if ("clipPath" === n.nodeName) {
                        t = new o(n);
                        break
                    }
                    if ("svg" === n.nodeName) {
                        t = void 0;
                        break
                    }
                    n = n.parentNode
                }
                t || ((t = i("clipPath", c(this))).node.appendChild(e.node),
                !t.node.id && d(t.node, {
                    id: t.id
                })),
                d(this.node, {
                    "clip-path": h(t.node.id || t.id)
                })
            }
        }
        ,
        Y.on("snap.util.attr.clip", t),
        Y.on("snap.util.attr.clip-path", t),
        Y.on("snap.util.attr.clipPath", t),
        Y.on("snap.util.attr.fill", m("fill")),
        Y.on("snap.util.attr.stroke", m("stroke"));
        var g = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        function v(e) {
            Y.stop(),
            e == +e && (e += "px"),
            this.node.style.fontSize = e
        }
        function y() {
            return Y.stop(),
            this.node.style.fontSize
        }
        Y.on("snap.util.grad.parse", function(e) {
            var t = (e = f(e)).match(g);
            if (!t)
                return null;
            var n = t[1]
              , i = t[2]
              , r = t[3];
            1 == (i = i.split(/\s*,\s*/).map(function(e) {
                return +e == e ? +e : e
            })).length && 0 == i[0] && (i = []);
            var s = (r = (r = r.split("-")).map(function(e) {
                var t = {
                    color: (e = e.split(":"))[0]
                };
                return e[1] && (t.offset = parseFloat(e[1])),
                t
            })).length
              , o = 0
              , a = 0;
            function l(e, t) {
                for (var n = (t - o) / (e - a), i = a; i < e; i++)
                    r[i].offset = +(+o + n * (i - a)).toFixed(2);
                a = e,
                o = t
            }
            s--;
            for (var u = 0; u < s; u++)
                "offset"in r[u] && l(u, r[u].offset);
            return r[s].offset = r[s].offset || 100,
            l(s, r[s].offset),
            {
                type: n,
                params: i,
                stops: r
            }
        }),
        Y.on("snap.util.attr.d", function(e) {
            Y.stop(),
            u(e, "array") && u(e[0], "array") && (e = s.path.toString.call(e)),
            (e = f(e)).match(/[ruo]/i) && (e = s.path.toAbsolute(e)),
            d(this.node, {
                d: e
            })
        })(-1),
        Y.on("snap.util.attr.#text", function(e) {
            Y.stop(),
            e = f(e);
            for (var t = r.doc.createTextNode(e); this.node.firstChild; )
                this.node.removeChild(this.node.firstChild);
            this.node.appendChild(t)
        })(-1),
        Y.on("snap.util.attr.path", function(e) {
            Y.stop(),
            this.attr({
                d: e
            })
        })(-1),
        Y.on("snap.util.attr.class", function(e) {
            Y.stop(),
            this.node.className.baseVal = e
        })(-1),
        Y.on("snap.util.attr.viewBox", function(e) {
            var t;
            t = u(e, "object") && "x"in e ? [e.x, e.y, e.width, e.height].join(" ") : u(e, "array") ? e.join(" ") : e,
            d(this.node, {
                viewBox: t
            }),
            Y.stop()
        })(-1),
        Y.on("snap.util.attr.transform", function(e) {
            this.transform(e),
            Y.stop()
        })(-1),
        Y.on("snap.util.attr.r", function(e) {
            "rect" == this.type && (Y.stop(),
            d(this.node, {
                rx: e,
                ry: e
            }))
        })(-1),
        Y.on("snap.util.attr.textpath", function(e) {
            if (Y.stop(),
            "text" == this.type) {
                var t, n, i;
                if (!e && this.textPath) {
                    for (n = this.textPath; n.node.firstChild; )
                        this.node.appendChild(n.node.firstChild);
                    return n.remove(),
                    void delete this.textPath
                }
                if (u(e, "string")) {
                    var r = c(this)
                      , s = l(r.parentNode).path(e);
                    r.appendChild(s.node),
                    t = s.id,
                    s.attr({
                        id: t
                    })
                } else
                    (e = l(e))instanceof o && ((t = e.attr("id")) || (t = e.id,
                    e.attr({
                        id: t
                    })));
                if (t)
                    if (n = this.textPath,
                    i = this.node,
                    n)
                        n.attr({
                            "xlink:href": "#" + t
                        });
                    else {
                        for (n = d("textPath", {
                            "xlink:href": "#" + t
                        }); i.firstChild; )
                            n.appendChild(i.firstChild);
                        i.appendChild(n),
                        this.textPath = l(n)
                    }
            }
        })(-1),
        Y.on("snap.util.attr.text", function(e) {
            if ("text" == this.type) {
                for (var t = this.node, i = function(e) {
                    var t = d("tspan");
                    if (u(e, "array"))
                        for (var n = 0; n < e.length; n++)
                            t.appendChild(i(e[n]));
                    else
                        t.appendChild(r.doc.createTextNode(e));
                    return t.normalize && t.normalize(),
                    t
                }; t.firstChild; )
                    t.removeChild(t.firstChild);
                for (var n = i(e); n.firstChild; )
                    t.appendChild(n.firstChild)
            }
            Y.stop()
        })(-1),
        Y.on("snap.util.attr.fontSize", v)(-1),
        Y.on("snap.util.attr.font-size", v)(-1),
        Y.on("snap.util.getattr.transform", function() {
            return Y.stop(),
            this.transform()
        })(-1),
        Y.on("snap.util.getattr.textpath", function() {
            return Y.stop(),
            this.textPath
        })(-1),
        function() {
            function e(t) {
                return function() {
                    Y.stop();
                    var e = r.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + t);
                    return "none" == e ? e : s(r.doc.getElementById(e.match(n)[1]))
                }
            }
            function t(i) {
                return function(e) {
                    Y.stop();
                    var t = "marker" + i.charAt(0).toUpperCase() + i.substring(1);
                    if ("" != e && e) {
                        if ("marker" == e.type) {
                            var n = e.node.id;
                            return n || d(e.node, {
                                id: e.id
                            }),
                            void (this.node.style[t] = h(n))
                        }
                    } else
                        this.node.style[t] = "none"
                }
            }
            Y.on("snap.util.getattr.marker-end", e("end"))(-1),
            Y.on("snap.util.getattr.markerEnd", e("end"))(-1),
            Y.on("snap.util.getattr.marker-start", e("start"))(-1),
            Y.on("snap.util.getattr.markerStart", e("start"))(-1),
            Y.on("snap.util.getattr.marker-mid", e("mid"))(-1),
            Y.on("snap.util.getattr.markerMid", e("mid"))(-1),
            Y.on("snap.util.attr.marker-end", t("end"))(-1),
            Y.on("snap.util.attr.markerEnd", t("end"))(-1),
            Y.on("snap.util.attr.marker-start", t("start"))(-1),
            Y.on("snap.util.attr.markerStart", t("start"))(-1),
            Y.on("snap.util.attr.marker-mid", t("mid"))(-1),
            Y.on("snap.util.attr.markerMid", t("mid"))(-1)
        }(),
        Y.on("snap.util.getattr.r", function() {
            if ("rect" == this.type && d(this.node, "rx") == d(this.node, "ry"))
                return Y.stop(),
                d(this.node, "rx")
        })(-1),
        Y.on("snap.util.getattr.text", function() {
            if ("text" == this.type || "tspan" == this.type) {
                Y.stop();
                var e = function e(t) {
                    for (var n = [], i = t.childNodes, r = 0, s = i.length; r < s; r++) {
                        var o = i[r];
                        3 == o.nodeType && n.push(o.nodeValue),
                        "tspan" == o.tagName && (1 == o.childNodes.length && 3 == o.firstChild.nodeType ? n.push(o.firstChild.nodeValue) : n.push(e(o)))
                    }
                    return n
                }(this.node);
                return 1 == e.length ? e[0] : e
            }
        })(-1),
        Y.on("snap.util.getattr.#text", function() {
            return this.node.textContent
        })(-1),
        Y.on("snap.util.getattr.fill", function(e) {
            if (!e) {
                Y.stop();
                var t = Y("snap.util.getattr.fill", this, !0).firstDefined();
                return s(s.deurl(t)) || t
            }
        })(-1),
        Y.on("snap.util.getattr.stroke", function(e) {
            if (!e) {
                Y.stop();
                var t = Y("snap.util.getattr.stroke", this, !0).firstDefined();
                return s(s.deurl(t)) || t
            }
        })(-1),
        Y.on("snap.util.getattr.viewBox", function() {
            Y.stop();
            var e = d(this.node, "viewBox");
            return e ? (e = e.split(p),
            s._.box(+e[0], +e[1], +e[2], +e[3])) : void 0
        })(-1),
        Y.on("snap.util.getattr.points", function() {
            var e = d(this.node, "points");
            return Y.stop(),
            e ? e.split(p) : void 0
        })(-1),
        Y.on("snap.util.getattr.path", function() {
            var e = d(this.node, "d");
            return Y.stop(),
            e
        })(-1),
        Y.on("snap.util.getattr.class", function() {
            return this.node.className.baseVal
        })(-1),
        Y.on("snap.util.getattr.fontSize", y)(-1),
        Y.on("snap.util.getattr.font-size", y)(-1)
    }),
    t.plugin(function(e, t, n, i, r) {
        var c = /\S+/g
          , u = String
          , s = t.prototype;
        s.addClass = function(e) {
            var t, n, i, r = u(e || "").match(c) || [], s = this.node, o = s.className.baseVal, a = o.match(c) || [];
            if (r.length) {
                for (t = 0; n = r[t++]; )
                    ~a.indexOf(n) || a.push(n);
                o != (i = a.join(" ")) && (s.className.baseVal = i)
            }
            return this
        }
        ,
        s.removeClass = function(e) {
            var t, n, i, r, s = u(e || "").match(c) || [], o = this.node, a = o.className.baseVal, l = a.match(c) || [];
            if (l.length) {
                for (t = 0; i = s[t++]; )
                    ~(n = l.indexOf(i)) && l.splice(n, 1);
                a != (r = l.join(" ")) && (o.className.baseVal = r)
            }
            return this
        }
        ,
        s.hasClass = function(e) {
            return !!~(this.node.className.baseVal.match(c) || []).indexOf(e)
        }
        ,
        s.toggleClass = function(e, t) {
            if (null != t)
                return t ? this.addClass(e) : this.removeClass(e);
            var n, i, r, s, o = (e || "").match(c) || [], a = this.node, l = a.className.baseVal, u = l.match(c) || [];
            for (n = 0; r = o[n++]; )
                ~(i = u.indexOf(r)) ? u.splice(i, 1) : u.push(r);
            return l != (s = u.join(" ")) && (a.className.baseVal = s),
            this
        }
    }),
    t.plugin(function(e, t, n, i, r) {
        var u = {
            "+": function(e, t) {
                return e + t
            },
            "-": function(e, t) {
                return e - t
            },
            "/": function(e, t) {
                return e / t
            },
            "*": function(e, t) {
                return e * t
            }
        }
          , c = String
          , d = /[a-z]+$/i
          , h = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        function l(e) {
            return e
        }
        Y.on("snap.util.attr", function(e) {
            var t = c(e).match(h);
            if (t) {
                var n = Y.nt()
                  , i = n.substring(n.lastIndexOf(".") + 1)
                  , r = this.attr(i)
                  , s = {};
                Y.stop();
                var o = t[3] || ""
                  , a = r.match(d)
                  , l = u[t[1]];
                if (e = a && a == o ? l(parseFloat(r), +t[2]) : (r = this.asPX(i),
                l(this.asPX(i), this.asPX(i, t[2] + o))),
                isNaN(r) || isNaN(e))
                    return;
                s[i] = e,
                this.attr(s)
            }
        })(-10),
        Y.on("snap.util.equal", function(e, t) {
            var n, i = c(this.attr(e) || ""), r = c(t).match(h);
            if (r) {
                Y.stop();
                var s = r[3] || ""
                  , o = i.match(d)
                  , a = u[r[1]];
                return o && o == s ? {
                    from: parseFloat(i),
                    to: a(parseFloat(i), +r[2]),
                    f: (n = o,
                    function(e) {
                        return +e.toFixed(3) + n
                    }
                    )
                } : {
                    from: i = this.asPX(e),
                    to: a(i, this.asPX(e, r[2] + s)),
                    f: l
                }
            }
        })(-10)
    }),
    t.plugin(function(f, t, e, s, n) {
        var i = e.prototype
          , u = f.is;
        i.rect = function(e, t, n, i, r, s) {
            var o;
            return null == s && (s = r),
            u(e, "object") && "[object Object]" == e ? o = e : null != e && (o = {
                x: e,
                y: t,
                width: n,
                height: i
            },
            null != r && (o.rx = r,
            o.ry = s)),
            this.el("rect", o)
        }
        ,
        i.circle = function(e, t, n) {
            var i;
            return u(e, "object") && "[object Object]" == e ? i = e : null != e && (i = {
                cx: e,
                cy: t,
                r: n
            }),
            this.el("circle", i)
        }
        ;
        var a = function() {
            function r() {
                this.parentNode.removeChild(this)
            }
            return function(e, t) {
                var n = s.doc.createElement("img")
                  , i = s.doc.body;
                n.style.cssText = "position:absolute;left:-9999em;top:-9999em",
                n.onload = function() {
                    t.call(n),
                    n.onload = n.onerror = null,
                    i.removeChild(n)
                }
                ,
                n.onerror = r,
                i.appendChild(n),
                n.src = e
            }
        }();
        i.image = function(e, t, n, i, r) {
            var s = this.el("image");
            if (u(e, "object") && "src"in e)
                s.attr(e);
            else if (null != e) {
                var o = {
                    "xlink:href": e,
                    preserveAspectRatio: "none"
                };
                null != t && null != n && (o.x = t,
                o.y = n),
                null != i && null != r ? (o.width = i,
                o.height = r) : a(e, function() {
                    f._.$(s.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    })
                }),
                f._.$(s.node, o)
            }
            return s
        }
        ,
        i.ellipse = function(e, t, n, i) {
            var r;
            return u(e, "object") && "[object Object]" == e ? r = e : null != e && (r = {
                cx: e,
                cy: t,
                rx: n,
                ry: i
            }),
            this.el("ellipse", r)
        }
        ,
        i.path = function(e) {
            var t;
            return u(e, "object") && !u(e, "array") ? t = e : e && (t = {
                d: e
            }),
            this.el("path", t)
        }
        ,
        i.group = i.g = function(e) {
            var t = this.el("g");
            return 1 == arguments.length && e && !e.type ? t.attr(e) : arguments.length && t.add(Array.prototype.slice.call(arguments, 0)),
            t
        }
        ,
        i.svg = function(e, t, n, i, r, s, o, a) {
            var l = {};
            return u(e, "object") && null == t ? l = e : (null != e && (l.x = e),
            null != t && (l.y = t),
            null != n && (l.width = n),
            null != i && (l.height = i),
            null != r && null != s && null != o && null != a && (l.viewBox = [r, s, o, a])),
            this.el("svg", l)
        }
        ,
        i.mask = function(e) {
            var t = this.el("mask");
            return 1 == arguments.length && e && !e.type ? t.attr(e) : arguments.length && t.add(Array.prototype.slice.call(arguments, 0)),
            t
        }
        ,
        i.ptrn = function(e, t, n, i, r, s, o, a) {
            if (u(e, "object"))
                var l = e;
            else
                l = {
                    patternUnits: "userSpaceOnUse"
                },
                e && (l.x = e),
                t && (l.y = t),
                null != n && (l.width = n),
                null != i && (l.height = i),
                l.viewBox = null != r && null != s && null != o && null != a ? [r, s, o, a] : [e || 0, t || 0, n || 0, i || 0];
            return this.el("pattern", l)
        }
        ,
        i.use = function(e) {
            return null != e ? (e instanceof t && (e.attr("id") || e.attr({
                id: f._.id(e)
            }),
            e = e.attr("id")),
            "#" == String(e).charAt() && (e = e.substring(1)),
            this.el("use", {
                "xlink:href": "#" + e
            })) : t.prototype.use.call(this)
        }
        ,
        i.symbol = function(e, t, n, i) {
            var r = {};
            return null != e && null != t && null != n && null != i && (r.viewBox = [e, t, n, i]),
            this.el("symbol", r)
        }
        ,
        i.text = function(e, t, n) {
            var i = {};
            return u(e, "object") ? i = e : null != e && (i = {
                x: e,
                y: t,
                text: n || ""
            }),
            this.el("text", i)
        }
        ,
        i.line = function(e, t, n, i) {
            var r = {};
            return u(e, "object") ? r = e : null != e && (r = {
                x1: e,
                x2: n,
                y1: t,
                y2: i
            }),
            this.el("line", r)
        }
        ,
        i.polyline = function(e) {
            1 < arguments.length && (e = Array.prototype.slice.call(arguments, 0));
            var t = {};
            return u(e, "object") && !u(e, "array") ? t = e : null != e && (t = {
                points: e
            }),
            this.el("polyline", t)
        }
        ,
        i.polygon = function(e) {
            1 < arguments.length && (e = Array.prototype.slice.call(arguments, 0));
            var t = {};
            return u(e, "object") && !u(e, "array") ? t = e : null != e && (t = {
                points: e
            }),
            this.el("polygon", t)
        }
        ,
        function() {
            var l = f._.$;
            function a() {
                return this.selectAll("stop")
            }
            function u(e, t) {
                var n = l("stop")
                  , i = {
                    offset: +t + "%"
                };
                e = f.color(e),
                i["stop-color"] = e.hex,
                e.opacity < 1 && (i["stop-opacity"] = e.opacity),
                l(n, i);
                for (var r, s = this.stops(), o = 0; o < s.length; o++) {
                    if (t < parseFloat(s[o].attr("offset"))) {
                        this.node.insertBefore(n, s[o].node),
                        r = !0;
                        break
                    }
                }
                return r || this.node.appendChild(n),
                this
            }
            function c() {
                if ("linearGradient" == this.type) {
                    var e = l(this.node, "x1") || 0
                      , t = l(this.node, "x2") || 1
                      , n = l(this.node, "y1") || 0
                      , i = l(this.node, "y2") || 0;
                    return f._.box(e, n, math.abs(t - e), math.abs(i - n))
                }
                var r = this.node.cx || .5
                  , s = this.node.cy || .5
                  , o = this.node.r || 0;
                return f._.box(r - o, s - o, 2 * o, 2 * o)
            }
            function o(e) {
                var t = e
                  , n = this.stops();
                if ("string" == typeof e && (t = Y("snap.util.grad.parse", null, "l(0,0,0,1)" + e).firstDefined().stops),
                f.is(t, "array")) {
                    for (var i = 0; i < n.length; i++)
                        if (t[i]) {
                            var r = f.color(t[i].color)
                              , s = {
                                offset: t[i].offset + "%"
                            };
                            s["stop-color"] = r.hex,
                            r.opacity < 1 && (s["stop-opacity"] = r.opacity),
                            n[i].attr(s)
                        } else
                            n[i].remove();
                    for (i = n.length; i < t.length; i++)
                        this.addStop(t[i].color, t[i].offset);
                    return this
                }
            }
            function d(e, t, n, i, r) {
                var s = f._.make("linearGradient", e);
                return s.stops = a,
                s.addStop = u,
                s.getBBox = c,
                s.setStops = o,
                null != t && l(s.node, {
                    x1: t,
                    y1: n,
                    x2: i,
                    y2: r
                }),
                s
            }
            function h(e, t, n, i, r, s) {
                var o = f._.make("radialGradient", e);
                return o.stops = a,
                o.addStop = u,
                o.getBBox = c,
                null != t && l(o.node, {
                    cx: t,
                    cy: n,
                    r: i
                }),
                null != r && null != s && l(o.node, {
                    fx: r,
                    fy: s
                }),
                o
            }
            i.gradient = function(e) {
                return function(e, t) {
                    var n, i = Y("snap.util.grad.parse", null, t).firstDefined();
                    if (!i)
                        return null;
                    i.params.unshift(e),
                    n = "l" == i.type.toLowerCase() ? d.apply(0, i.params) : h.apply(0, i.params),
                    i.type != i.type.toLowerCase() && l(n.node, {
                        gradientUnits: "userSpaceOnUse"
                    });
                    for (var r = i.stops, s = r.length, o = 0; o < s; o++) {
                        var a = r[o];
                        n.addStop(a.color, a.offset)
                    }
                    return n
                }(this.defs, e)
            }
            ,
            i.gradientLinear = function(e, t, n, i) {
                return d(this.defs, e, t, n, i)
            }
            ,
            i.gradientRadial = function(e, t, n, i, r) {
                return h(this.defs, e, t, n, i, r)
            }
            ,
            i.toString = function() {
                var e, t = this.node.ownerDocument, n = t.createDocumentFragment(), i = t.createElement("div"), r = this.node.cloneNode(!0);
                return n.appendChild(i),
                i.appendChild(r),
                f._.$(r, {
                    xmlns: "http://www.w3.org/2000/svg"
                }),
                e = i.innerHTML,
                n.removeChild(n.firstChild),
                e
            }
            ,
            i.toDataURL = function() {
                if (v && v.btoa)
                    return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)))
            }
            ,
            i.clear = function() {
                for (var e, t = this.node.firstChild; t; )
                    e = t.nextSibling,
                    "defs" != t.tagName ? t.parentNode.removeChild(t) : i.clear.call({
                        node: t
                    }),
                    t = e
            }
        }()
    }),
    t.plugin(function(W, g, e, t) {
        var n = g.prototype
          , b = W.is
          , f = W._.clone
          , i = "hasOwnProperty"
          , r = /,?([a-z]),?/gi
          , w = parseFloat
          , V = Math
          , X = V.PI
          , E = V.min
          , C = V.max
          , y = V.pow
          , Y = V.abs;
        function x(t) {
            var n = x.ps = x.ps || {};
            return n[t] ? n[t].sleep = 100 : n[t] = {
                sleep: 100
            },
            setTimeout(function() {
                for (var e in n)
                    n[i](e) && e != t && (n[e].sleep--,
                    !n[e].sleep && delete n[e])
            }),
            n[t]
        }
        function m(e, t, n, i) {
            return null == e && (e = t = n = i = 0),
            null == t && (t = e.y,
            n = e.width,
            i = e.height,
            e = e.x),
            {
                x: e,
                y: t,
                width: n,
                w: n,
                height: i,
                h: i,
                x2: e + n,
                y2: t + i,
                cx: e + n / 2,
                cy: t + i / 2,
                r1: V.min(n, i) / 2,
                r2: V.max(n, i) / 2,
                r0: V.sqrt(n * n + i * i) / 2,
                path: d(e, t, n, i),
                vb: [e, t, n, i].join(" ")
            }
        }
        function S() {
            return this.join(",").replace(r, "$1")
        }
        function T(e) {
            var t = f(e);
            return t.toString = S,
            t
        }
        function v(e, t, n, i, r, s, o, a, l) {
            return null == l ? D(e, t, n, i, r, s, o, a) : _(e, t, n, i, r, s, o, a, function(e, t, n, i, r, s, o, a, l) {
                if (l < 0 || D(e, t, n, i, r, s, o, a) < l)
                    return;
                var u, c = .5, d = 1 - c;
                u = D(e, t, n, i, r, s, o, a, d);
                for (; .01 < Y(u - l); )
                    u = D(e, t, n, i, r, s, o, a, d += (u < l ? 1 : -1) * (c /= 2));
                return d
            }(e, t, n, i, r, s, o, a, l))
        }
        function s(f, p) {
            function m(e) {
                return +(+e).toFixed(3)
            }
            return W._.cacher(function(e, t, n) {
                e instanceof g && (e = e.attr("d"));
                for (var i, r, s, o, a, l = "", u = {}, c = 0, d = 0, h = (e = z(e)).length; d < h; d++) {
                    if ("M" == (s = e[d])[0])
                        i = +s[1],
                        r = +s[2];
                    else {
                        if (t < c + (o = v(i, r, s[1], s[2], s[3], s[4], s[5], s[6]))) {
                            if (p && !u.start) {
                                if (l += ["C" + m((a = v(i, r, s[1], s[2], s[3], s[4], s[5], s[6], t - c)).start.x), m(a.start.y), m(a.m.x), m(a.m.y), m(a.x), m(a.y)],
                                n)
                                    return l;
                                u.start = l,
                                l = ["M" + m(a.x), m(a.y) + "C" + m(a.n.x), m(a.n.y), m(a.end.x), m(a.end.y), m(s[5]), m(s[6])].join(),
                                c += o,
                                i = +s[5],
                                r = +s[6];
                                continue
                            }
                            if (!f && !p)
                                return a = v(i, r, s[1], s[2], s[3], s[4], s[5], s[6], t - c)
                        }
                        c += o,
                        i = +s[5],
                        r = +s[6]
                    }
                    l += s.shift() + s
                }
                return u.end = l,
                a = f ? c : p ? u : _(i, r, s[0], s[1], s[2], s[3], s[4], s[5], 1)
            }, null, W._.clone)
        }
        var o = s(1)
          , a = s()
          , l = s(0, 1);
        function _(e, t, n, i, r, s, o, a, l) {
            var u = 1 - l
              , c = y(u, 3)
              , d = y(u, 2)
              , h = l * l
              , f = h * l
              , p = e + 2 * l * (n - e) + h * (r - 2 * n + e)
              , m = t + 2 * l * (i - t) + h * (s - 2 * i + t)
              , g = n + 2 * l * (r - n) + h * (o - 2 * r + n)
              , v = i + 2 * l * (s - i) + h * (a - 2 * s + i);
            return {
                x: c * e + 3 * d * l * n + 3 * u * l * l * r + f * o,
                y: c * t + 3 * d * l * i + 3 * u * l * l * s + f * a,
                m: {
                    x: p,
                    y: m
                },
                n: {
                    x: g,
                    y: v
                },
                start: {
                    x: u * e + l * n,
                    y: u * t + l * i
                },
                end: {
                    x: u * r + l * o,
                    y: u * s + l * a
                },
                alpha: 90 - 180 * V.atan2(p - g, m - v) / X
            }
        }
        function k(e, t, n, i, r, s, o, a) {
            W.is(e, "array") || (e = [e, t, n, i, r, s, o, a]);
            var l = B.apply(null, e);
            return m(l.min.x, l.min.y, l.max.x - l.min.x, l.max.y - l.min.y)
        }
        function A(e, t, n) {
            return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height
        }
        function O(e, t) {
            return e = m(e),
            A(t = m(t), e.x, e.y) || A(t, e.x2, e.y) || A(t, e.x, e.y2) || A(t, e.x2, e.y2) || A(e, t.x, t.y) || A(e, t.x2, t.y) || A(e, t.x, t.y2) || A(e, t.x2, t.y2) || (e.x < t.x2 && e.x > t.x || t.x < e.x2 && t.x > e.x) && (e.y < t.y2 && e.y > t.y || t.y < e.y2 && t.y > e.y)
        }
        function M(e, t, n, i, r) {
            return e * (e * (-3 * t + 9 * n - 9 * i + 3 * r) + 6 * t - 12 * n + 6 * i) - 3 * t + 3 * n
        }
        function D(e, t, n, i, r, s, o, a, l) {
            null == l && (l = 1);
            for (var u = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2, c = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], h = 0, f = 0; f < 12; f++) {
                var p = u * c[f] + u
                  , m = M(p, e, n, r, o)
                  , g = M(p, t, i, s, a)
                  , v = m * m + g * g;
                h += d[f] * V.sqrt(v)
            }
            return u * h
        }
        function L(e, t, n, i, r, s, o, a) {
            if (!(C(e, n) < E(r, o) || E(e, n) > C(r, o) || C(t, i) < E(s, a) || E(t, i) > C(s, a))) {
                var l = (e - n) * (s - a) - (t - i) * (r - o);
                if (l) {
                    var u = ((e * i - t * n) * (r - o) - (e - n) * (r * a - s * o)) / l
                      , c = ((e * i - t * n) * (s - a) - (t - i) * (r * a - s * o)) / l
                      , d = +u.toFixed(2)
                      , h = +c.toFixed(2);
                    if (!(d < +E(e, n).toFixed(2) || d > +C(e, n).toFixed(2) || d < +E(r, o).toFixed(2) || d > +C(r, o).toFixed(2) || h < +E(t, i).toFixed(2) || h > +C(t, i).toFixed(2) || h < +E(s, a).toFixed(2) || h > +C(s, a).toFixed(2)))
                        return {
                            x: u,
                            y: c
                        }
                }
            }
        }
        function N(e, t, n) {
            if (!O(k(e), k(t)))
                return n ? 0 : [];
            for (var i = ~~(D.apply(0, e) / 8), r = ~~(D.apply(0, t) / 8), s = [], o = [], a = {}, l = n ? 0 : [], u = 0; u < i + 1; u++) {
                var c = _.apply(0, e.concat(u / i));
                s.push({
                    x: c.x,
                    y: c.y,
                    t: u / i
                })
            }
            for (u = 0; u < r + 1; u++)
                c = _.apply(0, t.concat(u / r)),
                o.push({
                    x: c.x,
                    y: c.y,
                    t: u / r
                });
            for (u = 0; u < i; u++)
                for (var d = 0; d < r; d++) {
                    var h = s[u]
                      , f = s[u + 1]
                      , p = o[d]
                      , m = o[d + 1]
                      , g = Y(f.x - h.x) < .001 ? "y" : "x"
                      , v = Y(m.x - p.x) < .001 ? "y" : "x"
                      , y = L(h.x, h.y, f.x, f.y, p.x, p.y, m.x, m.y);
                    if (y) {
                        if (a[y.x.toFixed(4)] == y.y.toFixed(4))
                            continue;
                        a[y.x.toFixed(4)] = y.y.toFixed(4);
                        var b = h.t + Y((y[g] - h[g]) / (f[g] - h[g])) * (f.t - h.t)
                          , w = p.t + Y((y[v] - p[v]) / (m[v] - p[v])) * (m.t - p.t);
                        0 <= b && b <= 1 && 0 <= w && w <= 1 && (n ? l++ : l.push({
                            x: y.x,
                            y: y.y,
                            t1: b,
                            t2: w
                        }))
                    }
                }
            return l
        }
        function u(e, t, n) {
            e = z(e),
            t = z(t);
            for (var i, r, s, o, a, l, u, c, d, h, f = n ? 0 : [], p = 0, m = e.length; p < m; p++) {
                var g = e[p];
                if ("M" == g[0])
                    i = a = g[1],
                    r = l = g[2];
                else {
                    r = "C" == g[0] ? (i = (d = [i, r].concat(g.slice(1)))[6],
                    d[7]) : (d = [i, r, i, r, a, l, a, l],
                    i = a,
                    l);
                    for (var v = 0, y = t.length; v < y; v++) {
                        var b = t[v];
                        if ("M" == b[0])
                            s = u = b[1],
                            o = c = b[2];
                        else {
                            o = "C" == b[0] ? (s = (h = [s, o].concat(b.slice(1)))[6],
                            h[7]) : (h = [s, o, s, o, u, c, u, c],
                            s = u,
                            c);
                            var w = N(d, h, n);
                            if (n)
                                f += w;
                            else {
                                for (var x = 0, E = w.length; x < E; x++)
                                    w[x].segment1 = p,
                                    w[x].segment2 = v,
                                    w[x].bez1 = d,
                                    w[x].bez2 = h;
                                f = f.concat(w)
                            }
                        }
                    }
                }
            }
            return f
        }
        function c(e) {
            var t = x(e);
            if (t.bbox)
                return f(t.bbox);
            if (!e)
                return m();
            for (var n, i = 0, r = 0, s = [], o = [], a = 0, l = (e = z(e)).length; a < l; a++)
                if ("M" == (n = e[a])[0])
                    i = n[1],
                    r = n[2],
                    s.push(i),
                    o.push(r);
                else {
                    var u = B(i, r, n[1], n[2], n[3], n[4], n[5], n[6]);
                    s = s.concat(u.min.x, u.max.x),
                    o = o.concat(u.min.y, u.max.y),
                    i = n[5],
                    r = n[6]
                }
            var c = E.apply(0, s)
              , d = E.apply(0, o)
              , h = m(c, d, C.apply(0, s) - c, C.apply(0, o) - d);
            return t.bbox = f(h),
            h
        }
        function d(e, t, n, i, r) {
            if (r)
                return [["M", +e + +r, t], ["l", n - 2 * r, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, i - 2 * r], ["a", r, r, 0, 0, 1, -r, r], ["l", 2 * r - n, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, 2 * r - i], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
            var s = [["M", e, t], ["l", n, 0], ["l", 0, i], ["l", -n, 0], ["z"]];
            return s.toString = S,
            s
        }
        function P(e, t, n, i, r) {
            if (null == r && null == i && (i = n),
            e = +e,
            t = +t,
            n = +n,
            i = +i,
            null != r)
                var s = Math.PI / 180
                  , o = e + n * Math.cos(-i * s)
                  , a = e + n * Math.cos(-r * s)
                  , l = [["M", o, t + n * Math.sin(-i * s)], ["A", n, n, 0, +(180 < r - i), 0, a, t + n * Math.sin(-r * s)]];
            else
                l = [["M", e, t], ["m", 0, -i], ["a", n, i, 0, 1, 1, 0, 2 * i], ["a", n, i, 0, 1, 1, 0, -2 * i], ["z"]];
            return l.toString = S,
            l
        }
        var h = W._unit2px
          , p = {
            path: function(e) {
                return e.attr("path")
            },
            circle: function(e) {
                var t = h(e);
                return P(t.cx, t.cy, t.r)
            },
            ellipse: function(e) {
                var t = h(e);
                return P(t.cx || 0, t.cy || 0, t.rx, t.ry)
            },
            rect: function(e) {
                var t = h(e);
                return d(t.x || 0, t.y || 0, t.width, t.height, t.rx, t.ry)
            },
            image: function(e) {
                var t = h(e);
                return d(t.x || 0, t.y || 0, t.width, t.height)
            },
            line: function(e) {
                return "M" + [e.attr("x1") || 0, e.attr("y1") || 0, e.attr("x2"), e.attr("y2")]
            },
            polyline: function(e) {
                return "M" + e.attr("points")
            },
            polygon: function(e) {
                return "M" + e.attr("points") + "z"
            },
            deflt: function(e) {
                var t = e.node.getBBox();
                return d(t.x, t.y, t.width, t.height)
            }
        };
        function I(e) {
            var t = x(e);
            if (t.abs)
                return T(t.abs);
            if (b(e, "array") && b(e && e[0], "array") || (e = W.parsePathString(e)),
            !e || !e.length)
                return [["M", 0, 0]];
            var n, i = [], r = 0, s = 0, o = 0, a = 0, l = 0;
            "M" == e[0][0] && (o = r = +e[0][1],
            a = s = +e[0][2],
            l++,
            i[0] = ["M", r, s]);
            for (var u, c, d = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), h = l, f = e.length; h < f; h++) {
                if (i.push(u = []),
                (n = (c = e[h])[0]) != n.toUpperCase())
                    switch (u[0] = n.toUpperCase(),
                    u[0]) {
                    case "A":
                        u[1] = c[1],
                        u[2] = c[2],
                        u[3] = c[3],
                        u[4] = c[4],
                        u[5] = c[5],
                        u[6] = +c[6] + r,
                        u[7] = +c[7] + s;
                        break;
                    case "V":
                        u[1] = +c[1] + s;
                        break;
                    case "H":
                        u[1] = +c[1] + r;
                        break;
                    case "R":
                        for (var p = [r, s].concat(c.slice(1)), m = 2, g = p.length; m < g; m++)
                            p[m] = +p[m] + r,
                            p[++m] = +p[m] + s;
                        i.pop(),
                        i = i.concat(H(p, d));
                        break;
                    case "O":
                        i.pop(),
                        (p = P(r, s, c[1], c[2])).push(p[0]),
                        i = i.concat(p);
                        break;
                    case "U":
                        i.pop(),
                        i = i.concat(P(r, s, c[1], c[2], c[3])),
                        u = ["U"].concat(i[i.length - 1].slice(-2));
                        break;
                    case "M":
                        o = +c[1] + r,
                        a = +c[2] + s;
                    default:
                        for (m = 1,
                        g = c.length; m < g; m++)
                            u[m] = +c[m] + (m % 2 ? r : s)
                    }
                else if ("R" == n)
                    p = [r, s].concat(c.slice(1)),
                    i.pop(),
                    i = i.concat(H(p, d)),
                    u = ["R"].concat(c.slice(-2));
                else if ("O" == n)
                    i.pop(),
                    (p = P(r, s, c[1], c[2])).push(p[0]),
                    i = i.concat(p);
                else if ("U" == n)
                    i.pop(),
                    i = i.concat(P(r, s, c[1], c[2], c[3])),
                    u = ["U"].concat(i[i.length - 1].slice(-2));
                else
                    for (var v = 0, y = c.length; v < y; v++)
                        u[v] = c[v];
                if ("O" != (n = n.toUpperCase()))
                    switch (u[0]) {
                    case "Z":
                        r = +o,
                        s = +a;
                        break;
                    case "H":
                        r = u[1];
                        break;
                    case "V":
                        s = u[1];
                        break;
                    case "M":
                        o = u[u.length - 2],
                        a = u[u.length - 1];
                    default:
                        r = u[u.length - 2],
                        s = u[u.length - 1]
                    }
            }
            return i.toString = S,
            t.abs = T(i),
            i
        }
        function F(e, t, n, i) {
            return [e, t, n, i, n, i]
        }
        function j(e, t, n, i, r, s) {
            return [1 / 3 * e + 2 / 3 * n, 1 / 3 * t + 2 / 3 * i, 1 / 3 * r + 2 / 3 * n, 1 / 3 * s + 2 / 3 * i, r, s]
        }
        function B(e, t, n, i, r, s, o, a) {
            for (var l, u, c, d, h, f, p, m, g = [], v = [[], []], y = 0; y < 2; ++y)
                if (c = 0 == y ? (u = 6 * e - 12 * n + 6 * r,
                l = -3 * e + 9 * n - 9 * r + 3 * o,
                3 * n - 3 * e) : (u = 6 * t - 12 * i + 6 * s,
                l = -3 * t + 9 * i - 9 * s + 3 * a,
                3 * i - 3 * t),
                Y(l) < 1e-12) {
                    if (Y(u) < 1e-12)
                        continue;
                    0 < (d = -c / u) && d < 1 && g.push(d)
                } else
                    p = u * u - 4 * c * l,
                    m = V.sqrt(p),
                    p < 0 || (0 < (h = (-u + m) / (2 * l)) && h < 1 && g.push(h),
                    0 < (f = (-u - m) / (2 * l)) && f < 1 && g.push(f));
            for (var b, w = g.length, x = w; w--; )
                b = 1 - (d = g[w]),
                v[0][w] = b * b * b * e + 3 * b * b * d * n + 3 * b * d * d * r + d * d * d * o,
                v[1][w] = b * b * b * t + 3 * b * b * d * i + 3 * b * d * d * s + d * d * d * a;
            return v[0][x] = e,
            v[1][x] = t,
            v[0][x + 1] = o,
            v[1][x + 1] = a,
            v[0].length = v[1].length = x + 2,
            {
                min: {
                    x: E.apply(0, v[0]),
                    y: E.apply(0, v[1])
                },
                max: {
                    x: C.apply(0, v[0]),
                    y: C.apply(0, v[1])
                }
            }
        }
        function z(e, t) {
            var n = !t && x(e);
            if (!t && n.curve)
                return T(n.curve);
            for (var s = I(e), o = t && I(t), i = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, r = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, a = function(e, t, n) {
                var i, r;
                if (!e)
                    return ["C", t.x, t.y, t.x, t.y, t.x, t.y];
                switch (!(e[0]in {
                    T: 1,
                    Q: 1
                }) && (t.qx = t.qy = null),
                e[0]) {
                case "M":
                    t.X = e[1],
                    t.Y = e[2];
                    break;
                case "A":
                    e = ["C"].concat(function e(t, n, i, r, s, o, a, l, u, c) {
                        var d, h = 120 * X / 180, f = X / 180 * (+s || 0), p = [], m = W._.cacher(function(e, t, n) {
                            return {
                                x: e * V.cos(n) - t * V.sin(n),
                                y: e * V.sin(n) + t * V.cos(n)
                            }
                        });
                        if (!i || !r)
                            return [t, n, l, u, l, u];
                        if (c)
                            S = c[0],
                            T = c[1],
                            E = c[2],
                            C = c[3];
                        else {
                            t = (d = m(t, n, -f)).x,
                            n = d.y,
                            l = (d = m(l, u, -f)).x,
                            u = d.y,
                            V.cos(X / 180 * s),
                            V.sin(X / 180 * s);
                            var g = (t - l) / 2
                              , v = (n - u) / 2
                              , y = g * g / (i * i) + v * v / (r * r);
                            1 < y && (i *= y = V.sqrt(y),
                            r *= y);
                            var b = i * i
                              , w = r * r
                              , x = (o == a ? -1 : 1) * V.sqrt(Y((b * w - b * v * v - w * g * g) / (b * v * v + w * g * g)))
                              , E = x * i * v / r + (t + l) / 2
                              , C = x * -r * g / i + (n + u) / 2
                              , S = V.asin(((n - C) / r).toFixed(9))
                              , T = V.asin(((u - C) / r).toFixed(9));
                            (S = t < E ? X - S : S) < 0 && (S = 2 * X + S),
                            (T = l < E ? X - T : T) < 0 && (T = 2 * X + T),
                            a && T < S && (S -= 2 * X),
                            !a && S < T && (T -= 2 * X)
                        }
                        var _ = T - S;
                        if (Y(_) > h) {
                            var k = T
                              , A = l
                              , O = u;
                            T = S + h * (a && S < T ? 1 : -1),
                            p = e(l = E + i * V.cos(T), u = C + r * V.sin(T), i, r, s, 0, a, A, O, [T, k, E, C])
                        }
                        _ = T - S;
                        var M = V.cos(S)
                          , D = V.sin(S)
                          , L = V.cos(T)
                          , N = V.sin(T)
                          , P = V.tan(_ / 4)
                          , I = 4 / 3 * i * P
                          , F = 4 / 3 * r * P
                          , j = [t, n]
                          , B = [t + I * D, n - F * M]
                          , z = [l + I * N, u - F * L]
                          , H = [l, u];
                        if (B[0] = 2 * j[0] - B[0],
                        B[1] = 2 * j[1] - B[1],
                        c)
                            return [B, z, H].concat(p);
                        for (var q = [], R = 0, $ = (p = [B, z, H].concat(p).join().split(",")).length; R < $; R++)
                            q[R] = R % 2 ? m(p[R - 1], p[R], f).y : m(p[R], p[R + 1], f).x;
                        return q
                    }
                    .apply(0, [t.x, t.y].concat(e.slice(1))));
                    break;
                case "S":
                    r = "C" == n || "S" == n ? (i = 2 * t.x - t.bx,
                    2 * t.y - t.by) : (i = t.x,
                    t.y),
                    e = ["C", i, r].concat(e.slice(1));
                    break;
                case "T":
                    t.qy = "Q" == n || "T" == n ? (t.qx = 2 * t.x - t.qx,
                    2 * t.y - t.qy) : (t.qx = t.x,
                    t.y),
                    e = ["C"].concat(j(t.x, t.y, t.qx, t.qy, e[1], e[2]));
                    break;
                case "Q":
                    t.qx = e[1],
                    t.qy = e[2],
                    e = ["C"].concat(j(t.x, t.y, e[1], e[2], e[3], e[4]));
                    break;
                case "L":
                    e = ["C"].concat(F(t.x, t.y, e[1], e[2]));
                    break;
                case "H":
                    e = ["C"].concat(F(t.x, t.y, e[1], t.y));
                    break;
                case "V":
                    e = ["C"].concat(F(t.x, t.y, t.x, e[1]));
                    break;
                case "Z":
                    e = ["C"].concat(F(t.x, t.y, t.X, t.Y))
                }
                return e
            }, l = function(e, t) {
                if (7 < e[t].length) {
                    e[t].shift();
                    for (var n = e[t]; n.length; )
                        c[t] = "A",
                        o && (d[t] = "A"),
                        e.splice(t++, 0, ["C"].concat(n.splice(0, 6)));
                    e.splice(t, 1),
                    m = C(s.length, o && o.length || 0)
                }
            }, u = function(e, t, n, i, r) {
                e && t && "M" == e[r][0] && "M" != t[r][0] && (t.splice(r, 0, ["M", i.x, i.y]),
                n.bx = 0,
                n.by = 0,
                n.x = e[r][1],
                n.y = e[r][2],
                m = C(s.length, o && o.length || 0))
            }, c = [], d = [], h = "", f = "", p = 0, m = C(s.length, o && o.length || 0); p < m; p++) {
                s[p] && (h = s[p][0]),
                "C" != h && (c[p] = h,
                p && (f = c[p - 1])),
                s[p] = a(s[p], i, f),
                "A" != c[p] && "C" == h && (c[p] = "C"),
                l(s, p),
                o && (o[p] && (h = o[p][0]),
                "C" != h && (d[p] = h,
                p && (f = d[p - 1])),
                o[p] = a(o[p], r, f),
                "A" != d[p] && "C" == h && (d[p] = "C"),
                l(o, p)),
                u(s, o, i, r, p),
                u(o, s, r, i, p);
                var g = s[p]
                  , v = o && o[p]
                  , y = g.length
                  , b = o && v.length;
                i.x = g[y - 2],
                i.y = g[y - 1],
                i.bx = w(g[y - 4]) || i.x,
                i.by = w(g[y - 3]) || i.y,
                r.bx = o && (w(v[b - 4]) || r.x),
                r.by = o && (w(v[b - 3]) || r.y),
                r.x = o && v[b - 2],
                r.y = o && v[b - 1]
            }
            return o || (n.curve = T(s)),
            o ? [s, o] : s
        }
        function H(e, t) {
            for (var n = [], i = 0, r = e.length; i < r - 2 * !t; i += 2) {
                var s = [{
                    x: +e[i - 2],
                    y: +e[i - 1]
                }, {
                    x: +e[i],
                    y: +e[i + 1]
                }, {
                    x: +e[i + 2],
                    y: +e[i + 3]
                }, {
                    x: +e[i + 4],
                    y: +e[i + 5]
                }];
                t ? i ? r - 4 == i ? s[3] = {
                    x: +e[0],
                    y: +e[1]
                } : r - 2 == i && (s[2] = {
                    x: +e[0],
                    y: +e[1]
                },
                s[3] = {
                    x: +e[2],
                    y: +e[3]
                }) : s[0] = {
                    x: +e[r - 2],
                    y: +e[r - 1]
                } : r - 4 == i ? s[3] = s[2] : i || (s[0] = {
                    x: +e[i],
                    y: +e[i + 1]
                }),
                n.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
            }
            return n
        }
        W.path = x,
        W.path.getTotalLength = o,
        W.path.getPointAtLength = a,
        W.path.getSubpath = function(e, t, n) {
            if (this.getTotalLength(e) - n < 1e-6)
                return l(e, t).end;
            var i = l(e, n, 1);
            return t ? l(i, t).end : i
        }
        ,
        n.getTotalLength = function() {
            if (this.node.getTotalLength)
                return this.node.getTotalLength()
        }
        ,
        n.getPointAtLength = function(e) {
            return a(this.attr("d"), e)
        }
        ,
        n.getSubpath = function(e, t) {
            return W.path.getSubpath(this.attr("d"), e, t)
        }
        ,
        W._.box = m,
        W.path.findDotsAtSegment = _,
        W.path.bezierBBox = k,
        W.path.isPointInsideBBox = A,
        W.closest = function(e, t, n, i) {
            for (var r = 100, s = m(e - r / 2, t - r / 2, r, r), o = [], a = n[0].hasOwnProperty("x") ? function(e) {
                return {
                    x: n[e].x,
                    y: n[e].y
                }
            }
            : function(e) {
                return {
                    x: n[e],
                    y: i[e]
                }
            }
            , l = 0; r <= 1e6 && !l; ) {
                for (var u = 0, c = n.length; u < c; u++) {
                    var d = a(u);
                    if (A(s, d.x, d.y)) {
                        l++,
                        o.push(d);
                        break
                    }
                }
                l || (s = m(e - (r *= 2) / 2, t - r / 2, r, r))
            }
            if (1e6 != r) {
                var h, f = 1 / 0;
                for (u = 0,
                c = o.length; u < c; u++) {
                    var p = W.len(e, t, o[u].x, o[u].y);
                    p < f && (f = p,
                    o[u].len = p,
                    h = o[u])
                }
                return h
            }
        }
        ,
        W.path.isBBoxIntersect = O,
        W.path.intersection = function(e, t) {
            return u(e, t)
        }
        ,
        W.path.intersectionNumber = function(e, t) {
            return u(e, t, 1)
        }
        ,
        W.path.isPointInside = function(e, t, n) {
            var i = c(e);
            return A(i, t, n) && u(e, [["M", t, n], ["H", i.x2 + 10]], 1) % 2 == 1
        }
        ,
        W.path.getBBox = c,
        W.path.get = p,
        W.path.toRelative = function(e) {
            var t = x(e)
              , n = String.prototype.toLowerCase;
            if (t.rel)
                return T(t.rel);
            W.is(e, "array") && W.is(e && e[0], "array") || (e = W.parsePathString(e));
            var i = []
              , r = 0
              , s = 0
              , o = 0
              , a = 0
              , l = 0;
            "M" == e[0][0] && (o = r = e[0][1],
            a = s = e[0][2],
            l++,
            i.push(["M", r, s]));
            for (var u = l, c = e.length; u < c; u++) {
                var d = i[u] = []
                  , h = e[u];
                if (h[0] != n.call(h[0]))
                    switch (d[0] = n.call(h[0]),
                    d[0]) {
                    case "a":
                        d[1] = h[1],
                        d[2] = h[2],
                        d[3] = h[3],
                        d[4] = h[4],
                        d[5] = h[5],
                        d[6] = +(h[6] - r).toFixed(3),
                        d[7] = +(h[7] - s).toFixed(3);
                        break;
                    case "v":
                        d[1] = +(h[1] - s).toFixed(3);
                        break;
                    case "m":
                        o = h[1],
                        a = h[2];
                    default:
                        for (var f = 1, p = h.length; f < p; f++)
                            d[f] = +(h[f] - (f % 2 ? r : s)).toFixed(3)
                    }
                else {
                    d = i[u] = [],
                    "m" == h[0] && (o = h[1] + r,
                    a = h[2] + s);
                    for (var m = 0, g = h.length; m < g; m++)
                        i[u][m] = h[m]
                }
                var v = i[u].length;
                switch (i[u][0]) {
                case "z":
                    r = o,
                    s = a;
                    break;
                case "h":
                    r += +i[u][v - 1];
                    break;
                case "v":
                    s += +i[u][v - 1];
                    break;
                default:
                    r += +i[u][v - 2],
                    s += +i[u][v - 1]
                }
            }
            return i.toString = S,
            t.rel = T(i),
            i
        }
        ,
        W.path.toAbsolute = I,
        W.path.toCubic = z,
        W.path.map = function(e, t) {
            if (!t)
                return e;
            var n, i, r, s, o, a, l;
            for (r = 0,
            o = (e = z(e)).length; r < o; r++)
                for (s = 1,
                a = (l = e[r]).length; s < a; s += 2)
                    n = t.x(l[s], l[s + 1]),
                    i = t.y(l[s], l[s + 1]),
                    l[s] = n,
                    l[s + 1] = i;
            return e
        }
        ,
        W.path.toString = S,
        W.path.clone = T
    }),
    t.plugin(function(d, e, t, n) {
        var l = Math.max
          , u = Math.min
          , c = function(e) {
            if (this.items = [],
            this.bindings = {},
            this.length = 0,
            this.type = "set",
            e)
                for (var t = 0, n = e.length; t < n; t++)
                    e[t] && (this[this.items.length] = this.items[this.items.length] = e[t],
                    this.length++)
        }
          , i = c.prototype;
        i.push = function() {
            for (var e, t, n = 0, i = arguments.length; n < i; n++)
                (e = arguments[n]) && (this[t = this.items.length] = this.items[t] = e,
                this.length++);
            return this
        }
        ,
        i.pop = function() {
            return this.length && delete this[this.length--],
            this.items.pop()
        }
        ,
        i.forEach = function(e, t) {
            for (var n = 0, i = this.items.length; n < i; n++)
                if (!1 === e.call(t, this.items[n], n))
                    return this;
            return this
        }
        ,
        i.animate = function(n, i, r, e) {
            "function" != typeof r || r.length || (e = r,
            r = S.linear),
            n instanceof d._.Animation && (e = n.callback,
            r = n.easing,
            i = r.dur,
            n = n.attr);
            var s = arguments;
            if (d.is(n, "array") && d.is(s[s.length - 1], "array"))
                var o = !0;
            var t, a = function() {
                t ? this.b = t : t = this.b
            }, l = 0, u = this, c = e && function() {
                ++l == u.length && e.call(this)
            }
            ;
            return this.forEach(function(e, t) {
                Y.once("snap.animcreated." + e.id, a),
                o ? s[t] && e.animate.apply(e, s[t]) : e.animate(n, i, r, c)
            })
        }
        ,
        i.remove = function() {
            for (; this.length; )
                this.pop().remove();
            return this
        }
        ,
        i.bind = function(e, t, n) {
            var i = {};
            if ("function" == typeof t)
                this.bindings[e] = t;
            else {
                var r = n || e;
                this.bindings[e] = function(e) {
                    i[r] = e,
                    t.attr(i)
                }
            }
            return this
        }
        ,
        i.attr = function(e) {
            var t = {};
            for (var n in e)
                this.bindings[n] ? this.bindings[n](e[n]) : t[n] = e[n];
            for (var i = 0, r = this.items.length; i < r; i++)
                this.items[i].attr(t);
            return this
        }
        ,
        i.clear = function() {
            for (; this.length; )
                this.pop()
        }
        ,
        i.splice = function(e, t, n) {
            e = e < 0 ? l(this.length + e, 0) : e,
            t = l(0, u(this.length - e, t));
            var i, r = [], s = [], o = [];
            for (i = 2; i < arguments.length; i++)
                o.push(arguments[i]);
            for (i = 0; i < t; i++)
                s.push(this[e + i]);
            for (; i < this.length - e; i++)
                r.push(this[e + i]);
            var a = o.length;
            for (i = 0; i < a + r.length; i++)
                this.items[e + i] = this[e + i] = i < a ? o[i] : r[i - a];
            for (i = this.items.length = this.length -= t - a; this[i]; )
                delete this[i++];
            return new c(s)
        }
        ,
        i.exclude = function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] == e)
                    return this.splice(t, 1),
                    !0;
            return !1
        }
        ,
        i.insertAfter = function(e) {
            for (var t = this.items.length; t--; )
                this.items[t].insertAfter(e);
            return this
        }
        ,
        i.getBBox = function() {
            for (var e = [], t = [], n = [], i = [], r = this.items.length; r--; )
                if (!this.items[r].removed) {
                    var s = this.items[r].getBBox();
                    e.push(s.x),
                    t.push(s.y),
                    n.push(s.x + s.width),
                    i.push(s.y + s.height)
                }
            return {
                x: e = u.apply(0, e),
                y: t = u.apply(0, t),
                x2: n = l.apply(0, n),
                y2: i = l.apply(0, i),
                width: n - e,
                height: i - t,
                cx: e + (n - e) / 2,
                cy: t + (i - t) / 2
            }
        }
        ,
        i.clone = function(e) {
            e = new c;
            for (var t = 0, n = this.items.length; t < n; t++)
                e.push(this.items[t].clone());
            return e
        }
        ,
        i.toString = function() {
            return "Snap‘s set"
        }
        ,
        i.type = "set",
        d.Set = c,
        d.set = function() {
            var e = new c;
            return arguments.length && e.push.apply(e, Array.prototype.slice.call(arguments, 0)),
            e
        }
    }),
    t.plugin(function(d, e, t, n) {
        var h = {}
          , f = /[%a-z]+$/i
          , p = String;
        function m(e) {
            var t = e[0];
            switch (t.toLowerCase()) {
            case "t":
                return [t, 0, 0];
            case "m":
                return [t, 1, 0, 0, 1, 0, 0];
            case "r":
                return 4 == e.length ? [t, 0, e[2], e[3]] : [t, 0];
            case "s":
                return 5 == e.length ? [t, 1, 1, e[3], e[4]] : 3 == e.length ? [t, 1, 1] : [t, 1]
            }
        }
        function g(e) {
            return e
        }
        function v(e) {
            return e.join(" ")
        }
        function y(e) {
            return d.rgb(e[0], e[1], e[2], e[3])
        }
        function b(e) {
            var t, n, i, r, s, o, a = 0, l = [];
            for (t = 0,
            n = e.length; t < n; t++) {
                for (s = "[",
                o = ['"' + e[t][0] + '"'],
                i = 1,
                r = e[t].length; i < r; i++)
                    o[i] = "val[" + a++ + "]";
                s += o + "]",
                l[t] = s
            }
            return Function("val", "return Snap.path.toString.call([" + l + "])")
        }
        function w(e) {
            for (var t = [], n = 0, i = e.length; n < i; n++)
                for (var r = 1, s = e[n].length; r < s; r++)
                    t.push(e[n][r]);
            return t
        }
        function x(e) {
            return isFinite(e)
        }
        h.stroke = h.fill = "colour",
        e.prototype.equal = function(e, t) {
            return Y("snap.util.equal", this, e, t).firstDefined()
        }
        ,
        Y.on("snap.util.equal", function(e, t) {
            var n, i, r = p(this.attr(e) || ""), s = this;
            if ("colour" == h[e])
                return n = d.color(r),
                i = d.color(t),
                {
                    from: [n.r, n.g, n.b, n.opacity],
                    to: [i.r, i.g, i.b, i.opacity],
                    f: y
                };
            if ("viewBox" == e)
                return {
                    from: n = this.attr(e).vb.split(" ").map(Number),
                    to: i = t.split(" ").map(Number),
                    f: v
                };
            if ("transform" == e || "gradientTransform" == e || "patternTransform" == e)
                return "string" == typeof t && (t = p(t).replace(/\.{3}|\u2026/g, r)),
                function(e, t, n) {
                    e = e || new d.Matrix,
                    t = t || new d.Matrix,
                    e = d.parseTransformString(e.toTransformString()) || [],
                    t = d.parseTransformString(t.toTransformString()) || [];
                    for (var i, r, s, o, a = Math.max(e.length, t.length), l = [], u = [], c = 0; c < a; c++) {
                        if (s = e[c] || m(t[c]),
                        o = t[c] || m(s),
                        s[0] != o[0] || "r" == s[0].toLowerCase() && (s[2] != o[2] || s[3] != o[3]) || "s" == s[0].toLowerCase() && (s[3] != o[3] || s[4] != o[4])) {
                            e = d._.transform2matrix(e, n()),
                            t = d._.transform2matrix(t, n()),
                            l = [["m", e.a, e.b, e.c, e.d, e.e, e.f]],
                            u = [["m", t.a, t.b, t.c, t.d, t.e, t.f]];
                            break
                        }
                        for (l[c] = [],
                        u[c] = [],
                        i = 0,
                        r = Math.max(s.length, o.length); i < r; i++)
                            i in s && (l[c][i] = s[i]),
                            i in o && (u[c][i] = o[i])
                    }
                    return {
                        from: w(l),
                        to: w(u),
                        f: b(l)
                    }
                }(r = this.matrix, t = d._.rgTransform.test(t) ? d._.transform2matrix(t, this.getBBox()) : d._.transform2matrix(d._.svgTransform2string(t), this.getBBox()), function() {
                    return s.getBBox(1)
                });
            if ("d" == e || "path" == e)
                return {
                    from: w((n = d.path.toCubic(r, t))[0]),
                    to: w(n[1]),
                    f: b(n[0])
                };
            if ("points" == e)
                return {
                    from: n = p(r).split(d._.separator),
                    to: i = p(t).split(d._.separator),
                    f: function(e) {
                        return e
                    }
                };
            if (x(r) && x(t))
                return {
                    from: parseFloat(r),
                    to: parseFloat(t),
                    f: g
                };
            var o, a, l, u = r.match(f), c = p(t).match(f);
            return u && (a = u,
            l = c,
            d.is(a, "array") && d.is(l, "array") && a.toString() == l.toString()) ? {
                from: parseFloat(r),
                to: parseFloat(t),
                f: (o = u,
                function(e) {
                    return +e.toFixed(3) + o
                }
                )
            } : {
                from: this.asPX(e),
                to: this.asPX(e, t),
                f: g
            }
        })
    }),
    t.plugin(function(h, e, t, r) {
        for (var n = e.prototype, f = ("createTouch"in r.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], p = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, m = function(e, t) {
            var n = "y" == e ? "scrollTop" : "scrollLeft"
              , i = t && t.node ? t.node.ownerDocument : r.doc;
            return i[n in i.documentElement ? "documentElement" : "body"][n]
        }, g = function() {
            return this.originalEvent.preventDefault()
        }, v = function() {
            return this.originalEvent.stopPropagation()
        }, c = [], d = function(e) {
            for (var t, n = e.clientX, i = e.clientY, r = m("y"), s = m("x"), o = c.length; o--; ) {
                if (t = c[o],
                f) {
                    for (var a, l = e.touches && e.touches.length; l--; )
                        if ((a = e.touches[l]).identifier == t.el._drag.id || t.el.node.contains(a.target)) {
                            n = a.clientX,
                            i = a.clientY,
                            (e.originalEvent ? e.originalEvent : e).preventDefault();
                            break
                        }
                } else
                    e.preventDefault();
                var u = t.el.node;
                u.nextSibling,
                u.parentNode,
                u.style.display;
                n += s,
                i += r,
                Y("snap.drag.move." + t.el.id, t.move_scope || t.el, n - t.el._drag.x, i - t.el._drag.y, n, i, e)
            }
        }, y = function(e) {
            h.unmousemove(d).unmouseup(y);
            for (var t, n = c.length; n--; )
                (t = c[n]).el._drag = {},
                Y("snap.drag.end." + t.el.id, t.end_scope || t.start_scope || t.move_scope || t.el, e),
                Y.off("snap.drag.*." + t.el.id);
            c = []
        }, s = i.length; s--; )
            !function(o) {
                h[o] = n[o] = function(e, t) {
                    if (h.is(e, "function"))
                        this.events = this.events || [],
                        this.events.push({
                            name: o,
                            f: e,
                            unbind: (l = this.node || document,
                            u = o,
                            c = e,
                            d = t || this,
                            r = f && p[u] ? p[u] : u,
                            s = function(e) {
                                var t = m("y", d)
                                  , n = m("x", d);
                                if (f && p.hasOwnProperty(u))
                                    for (var i = 0, r = e.targetTouches && e.targetTouches.length; i < r; i++)
                                        if (e.targetTouches[i].target == l || l.contains(e.targetTouches[i].target)) {
                                            var s = e;
                                            (e = e.targetTouches[i]).originalEvent = s,
                                            e.preventDefault = g,
                                            e.stopPropagation = v;
                                            break
                                        }
                                var o = e.clientX + n
                                  , a = e.clientY + t;
                                return c.call(d, e, o, a)
                            }
                            ,
                            u !== r && l.addEventListener(u, s, !1),
                            l.addEventListener(r, s, !1),
                            function() {
                                return u !== r && l.removeEventListener(u, s, !1),
                                l.removeEventListener(r, s, !1),
                                !0
                            }
                            )
                        });
                    else
                        for (var n = 0, i = this.events.length; n < i; n++)
                            if (this.events[n].name == o)
                                try {
                                    this.events[n].f.call(this)
                                } catch (e) {}
                    var l, u, c, d, r, s;
                    return this
                }
                ,
                h["un" + o] = n["un" + o] = function(e) {
                    for (var t = this.events || [], n = t.length; n--; )
                        if (t[n].name == o && (t[n].f == e || !e))
                            return t[n].unbind(),
                            t.splice(n, 1),
                            !t.length && delete this.events,
                            this;
                    return this
                }
            }(i[s]);
        n.hover = function(e, t, n, i) {
            return this.mouseover(e, n).mouseout(t, i || n)
        }
        ,
        n.unhover = function(e, t) {
            return this.unmouseover(e).unmouseout(t)
        }
        ;
        var b = [];
        n.drag = function(i, r, s, o, a, l) {
            var n, u = this;
            if (!arguments.length)
                return u.drag(function(e, t) {
                    this.attr({
                        transform: n + (n ? "T" : "t") + [e, t]
                    })
                }, function() {
                    n = this.transform().local
                });
            function e(e, t, n) {
                (e.originalEvent || e).preventDefault(),
                u._drag.x = t,
                u._drag.y = n,
                u._drag.id = e.identifier,
                !c.length && h.mousemove(d).mouseup(y),
                c.push({
                    el: u,
                    move_scope: o,
                    start_scope: a,
                    end_scope: l
                }),
                r && Y.on("snap.drag.start." + u.id, r),
                i && Y.on("snap.drag.move." + u.id, i),
                s && Y.on("snap.drag.end." + u.id, s),
                Y("snap.drag.start." + u.id, a || o || u, t, n, e)
            }
            function t(e, t, n) {
                Y("snap.draginit." + u.id, u, e, t, n)
            }
            return Y.on("snap.draginit." + u.id, e),
            u._drag = {},
            b.push({
                el: u,
                start: e,
                init: t
            }),
            u.mousedown(t),
            u
        }
        ,
        n.undrag = function() {
            for (var e = b.length; e--; )
                b[e].el == this && (this.unmousedown(b[e].init),
                b.splice(e, 1),
                Y.unbind("snap.drag.*." + this.id),
                Y.unbind("snap.draginit." + this.id));
            return !b.length && h.unmousemove(d).unmouseup(y),
            this
        }
    }),
    t.plugin(function(s, o, e, t) {
        o.prototype;
        var n = e.prototype
          , i = /^\s*url\((.+)\)/
          , a = String
          , l = s._.$;
        s.filter = {},
        n.filter = function(e) {
            var t = this;
            "svg" != t.type && (t = t.paper);
            var n = s.parse(a(e))
              , i = s._.id()
              , r = (t.node.offsetWidth,
            t.node.offsetHeight,
            l("filter"));
            return l(r, {
                id: i,
                filterUnits: "userSpaceOnUse"
            }),
            r.appendChild(n.node),
            t.defs.appendChild(r),
            new o(r)
        }
        ,
        Y.on("snap.util.getattr.filter", function() {
            Y.stop();
            var e = l(this.node, "filter");
            if (e) {
                var t = a(e).match(i);
                return t && s.select(t[1])
            }
        }),
        Y.on("snap.util.attr.filter", function(e) {
            if (e instanceof o && "filter" == e.type) {
                Y.stop();
                var t = e.node.id;
                t || (l(e.node, {
                    id: e.id
                }),
                t = e.id),
                l(this.node, {
                    filter: s.url(t)
                })
            }
            e && "none" != e || (Y.stop(),
            this.node.removeAttribute("filter"))
        }),
        s.filter.blur = function(e, t) {
            null == e && (e = 2);
            var n = null == t ? e : [e, t];
            return s.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: n
            })
        }
        ,
        s.filter.blur.toString = function() {
            return this()
        }
        ,
        s.filter.shadow = function(e, t, n, i, r) {
            return null == r && (null == i ? (r = n,
            n = 4,
            i = "#000") : (r = i,
            i = n,
            n = 4)),
            null == n && (n = 4),
            null == r && (r = 1),
            null == e && (e = 0,
            t = 2),
            null == t && (t = e),
            i = s.color(i),
            s.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: i,
                dx: e,
                dy: t,
                blur: n,
                opacity: r
            })
        }
        ,
        s.filter.shadow.toString = function() {
            return this()
        }
        ,
        s.filter.grayscale = function(e) {
            return null == e && (e = 1),
            s.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - e),
                b: .7152 - .7152 * (1 - e),
                c: .0722 - .0722 * (1 - e),
                d: .2126 - .2126 * (1 - e),
                e: .7152 + .2848 * (1 - e),
                f: .0722 - .0722 * (1 - e),
                g: .2126 - .2126 * (1 - e),
                h: .0722 + .9278 * (1 - e)
            })
        }
        ,
        s.filter.grayscale.toString = function() {
            return this()
        }
        ,
        s.filter.sepia = function(e) {
            return null == e && (e = 1),
            s.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - e),
                b: .769 - .769 * (1 - e),
                c: .189 - .189 * (1 - e),
                d: .349 - .349 * (1 - e),
                e: .686 + .314 * (1 - e),
                f: .168 - .168 * (1 - e),
                g: .272 - .272 * (1 - e),
                h: .534 - .534 * (1 - e),
                i: .131 + .869 * (1 - e)
            })
        }
        ,
        s.filter.sepia.toString = function() {
            return this()
        }
        ,
        s.filter.saturate = function(e) {
            return null == e && (e = 1),
            s.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - e
            })
        }
        ,
        s.filter.saturate.toString = function() {
            return this()
        }
        ,
        s.filter.hueRotate = function(e) {
            return e = e || 0,
            s.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: e
            })
        }
        ,
        s.filter.hueRotate.toString = function() {
            return this()
        }
        ,
        s.filter.invert = function(e) {
            return null == e && (e = 1),
            s.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: 1 - e
            })
        }
        ,
        s.filter.invert.toString = function() {
            return this()
        }
        ,
        s.filter.brightness = function(e) {
            return null == e && (e = 1),
            s.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: e
            })
        }
        ,
        s.filter.brightness.toString = function() {
            return this()
        }
        ,
        s.filter.contrast = function(e) {
            return null == e && (e = 1),
            s.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: .5 - e / 2
            })
        }
        ,
        s.filter.contrast.toString = function() {
            return this()
        }
    }),
    t.plugin(function(e, t, n, i, r) {
        var s = e._.box
          , o = e.is
          , a = /^[^a-z]*([tbmlrc])/i
          , l = function() {
            return "T" + this.dx + "," + this.dy
        };
        t.prototype.getAlign = function(e, t) {
            null == t && o(e, "string") && (t = e,
            e = null);
            var n = (e = e || this.paper).getBBox ? e.getBBox() : s(e)
              , i = this.getBBox()
              , r = {};
            switch (t = (t = t && t.match(a)) ? t[1].toLowerCase() : "c") {
            case "t":
                r.dx = 0,
                r.dy = n.y - i.y;
                break;
            case "b":
                r.dx = 0,
                r.dy = n.y2 - i.y2;
                break;
            case "m":
                r.dx = 0,
                r.dy = n.cy - i.cy;
                break;
            case "l":
                r.dx = n.x - i.x,
                r.dy = 0;
                break;
            case "r":
                r.dx = n.x2 - i.x2,
                r.dy = 0;
                break;
            default:
                r.dx = n.cx - i.cx,
                r.dy = 0
            }
            return r.toString = l,
            r
        }
        ,
        t.prototype.align = function(e, t) {
            return this.transform("..." + this.getAlign(e, t))
        }
    }),
    t.plugin(function(t, e, n, i) {
        function r(e) {
            e = e.split(/(?=#)/);
            var t = new String(e[5]);
            return t[50] = e[0],
            t[100] = e[1],
            t[200] = e[2],
            t[300] = e[3],
            t[400] = e[4],
            t[500] = e[5],
            t[600] = e[6],
            t[700] = e[7],
            t[800] = e[8],
            t[900] = e[9],
            e[10] && (t.A100 = e[10],
            t.A200 = e[11],
            t.A400 = e[12],
            t.A700 = e[13]),
            t
        }
        t.mui = {},
        t.flat = {},
        t.mui.red = r("#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000"),
        t.mui.pink = r("#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162"),
        t.mui.purple = r("#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF"),
        t.mui.deeppurple = r("#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA"),
        t.mui.indigo = r("#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE"),
        t.mui.blue = r("#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF"),
        t.mui.lightblue = r("#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA"),
        t.mui.cyan = r("#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4"),
        t.mui.teal = r("#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5"),
        t.mui.green = r("#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853"),
        t.mui.lightgreen = r("#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17"),
        t.mui.lime = r("#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00"),
        t.mui.yellow = r("#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600"),
        t.mui.amber = r("#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00"),
        t.mui.orange = r("#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00"),
        t.mui.deeporange = r("#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00"),
        t.mui.brown = r("#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723"),
        t.mui.grey = r("#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121"),
        t.mui.bluegrey = r("#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238"),
        t.flat.turquoise = "#1abc9c",
        t.flat.greensea = "#16a085",
        t.flat.sunflower = "#f1c40f",
        t.flat.orange = "#f39c12",
        t.flat.emerland = "#2ecc71",
        t.flat.nephritis = "#27ae60",
        t.flat.carrot = "#e67e22",
        t.flat.pumpkin = "#d35400",
        t.flat.peterriver = "#3498db",
        t.flat.belizehole = "#2980b9",
        t.flat.alizarin = "#e74c3c",
        t.flat.pomegranate = "#c0392b",
        t.flat.amethyst = "#9b59b6",
        t.flat.wisteria = "#8e44ad",
        t.flat.clouds = "#ecf0f1",
        t.flat.silver = "#bdc3c7",
        t.flat.wetasphalt = "#34495e",
        t.flat.midnightblue = "#2c3e50",
        t.flat.concrete = "#95a5a6",
        t.flat.asbestos = "#7f8c8d",
        t.importMUIColors = function() {
            for (var e in t.mui)
                t.mui.hasOwnProperty(e) && (v[e] = t.mui[e])
        }
    }),
    t
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
}
: function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}
;
function ScrollingSpy(e) {
    this.options = e;
    var i = this
      , t = $(this.options.navbar);
    this.navbarSticky = function(e) {
        e >= this.options.offset ? t.addClass("navbar-sticky") : t.removeClass("navbar-sticky")
    }
    ,
    this.pricingSticky = function(e, t) {
        t <= e && e < t + $(i.options.pricingStickyElement).height() ? setTimeout(function() {
            $(i.options.pricingBasis).addClass("keep-sticky")
        }, 500) : setTimeout(function() {
            $(i.options.pricingBasis).removeClass("keep-sticky")
        }, 500)
    }
    ,
    this.initialize = function() {
        var n = $(window);
        n.on("scroll", function() {
            var e = n.scrollTop();
            if (i.navbarSticky(e),
            n.width() <= 768) {
                var t = $(i.options.pricingBasis).length ? $(i.options.pricingStickyElement).offset().top - i.options.offset : null;
                t && i.pricingSticky(e, t)
            }
        }),
        this.navbarSticky(n.scrollTop()),
        n.width() <= 768 && this.pricingSticky(n.scrollTop())
    }
}
!function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = function(e, t) {
        return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)),
        n(t),
        t
    }
    : n(jQuery)
}(function(c) {
    return c.fn.tilt = function(t) {
        var n = function() {
            this.ticking || (requestAnimationFrame(e.bind(this)),
            this.ticking = !0)
        }
          , i = function() {
            var e = this;
            void 0 !== this.timeout && clearTimeout(this.timeout),
            c(this).css({
                transition: this.settings.speed + "ms " + this.settings.easing
            }),
            this.settings.glare && this.glareElement.css({
                transition: "opacity " + this.settings.speed + "ms " + this.settings.easing
            }),
            this.timeout = setTimeout(function() {
                c(e).css({
                    transition: ""
                }),
                e.settings.glare && e.glareElement.css({
                    transition: ""
                })
            }, this.settings.speed)
        }
          , r = function(e) {
            this.ticking = !1,
            c(this).css({
                "will-change": "transform"
            }),
            i.call(this),
            c(this).trigger("tilt.mouseEnter")
        }
          , s = function(e) {
            return void 0 === e && (e = {
                pageX: c(this).offset().left + c(this).outerWidth() / 2,
                pageY: c(this).offset().top + c(this).outerHeight() / 2
            }),
            {
                x: e.pageX,
                y: e.pageY
            }
        }
          , o = function(e) {
            this.mousePositions = s(e),
            n.call(this)
        }
          , a = function() {
            i.call(this),
            this.reset = !0,
            n.call(this),
            c(this).trigger("tilt.mouseLeave")
        }
          , l = function() {
            var e = c(this).outerWidth()
              , t = c(this).outerHeight()
              , n = c(this).offset().left
              , i = c(this).offset().top
              , r = (this.mousePositions.x - n) / e
              , s = (this.mousePositions.y - i) / t;
            return {
                tiltX: (this.settings.maxTilt / 2 - r * this.settings.maxTilt).toFixed(2),
                tiltY: (s * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
                percentageX: 100 * r,
                percentageY: 100 * s,
                angle: Math.atan2(this.mousePositions.x - (n + e / 2), -(this.mousePositions.y - (i + t / 2))) * (180 / Math.PI)
            }
        }
          , e = function() {
            if (this.transforms = l.call(this),
            this.reset)
                return this.reset = !1,
                c(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"),
                void (this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"),
                this.glareElement.css("opacity", "0")));
            c(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) + "deg) rotateY(" + ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) + "deg) scale3d(" + this.settings.scale + "," + this.settings.scale + "," + this.settings.scale + ")"),
            this.settings.glare && (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"),
            this.glareElement.css("opacity", "" + this.transforms.percentageY * this.settings.maxGlare / 100)),
            c(this).trigger("change", [this.transforms]),
            this.ticking = !1
        }
          , u = function() {
            this.glareElement.css({
                width: "" + 2 * c(this).outerWidth(),
                height: "" + 2 * c(this).outerWidth()
            })
        };
        return c.fn.tilt.destroy = function() {
            c(this).each(function() {
                c(this).find(".js-tilt-glare").remove(),
                c(this).css({
                    "will-change": "",
                    transform: ""
                }),
                c(this).off("mousemove mouseenter mouseleave")
            })
        }
        ,
        c.fn.tilt.getValues = function() {
            var e = [];
            return c(this).each(function() {
                this.mousePositions = s.call(this),
                e.push(l.call(this))
            }),
            e
        }
        ,
        c.fn.tilt.reset = function() {
            c(this).each(function() {
                var e = this;
                this.mousePositions = s.call(this),
                this.settings = c(this).data("settings"),
                a.call(this),
                setTimeout(function() {
                    e.reset = !1
                }, this.settings.transition)
            })
        }
        ,
        this.each(function() {
            var e = this;
            this.settings = c.extend({
                maxTilt: c(this).is("[data-tilt-max]") ? c(this).data("tilt-max") : 20,
                perspective: c(this).is("[data-tilt-perspective]") ? c(this).data("tilt-perspective") : 300,
                easing: c(this).is("[data-tilt-easing]") ? c(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
                scale: c(this).is("[data-tilt-scale]") ? c(this).data("tilt-scale") : "1",
                speed: c(this).is("[data-tilt-speed]") ? c(this).data("tilt-speed") : "400",
                transition: !c(this).is("[data-tilt-transition]") || c(this).data("tilt-transition"),
                disableAxis: c(this).is("[data-tilt-disable-axis]") ? c(this).data("tilt-disable-axis") : null,
                axis: c(this).is("[data-tilt-axis]") ? c(this).data("tilt-axis") : null,
                reset: !c(this).is("[data-tilt-reset]") || c(this).data("tilt-reset"),
                glare: !!c(this).is("[data-tilt-glare]") && c(this).data("tilt-glare"),
                maxGlare: c(this).is("[data-tilt-maxglare]") ? c(this).data("tilt-maxglare") : 1
            }, t),
            null !== this.settings.axis && (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),
            this.settings.disableAxis = this.settings.axis),
            this.init = function() {
                c(e).data("settings", e.settings),
                e.settings.glare && function() {
                    var e = this.settings.glarePrerender;
                    e || c(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),
                    this.glareElementWrapper = c(this).find(".js-tilt-glare"),
                    this.glareElement = c(this).find(".js-tilt-glare-inner"),
                    e || (this.glareElementWrapper.css({
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%"
                    }).css({
                        overflow: "hidden",
                        "pointer-events": "none"
                    }),
                    this.glareElement.css({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                        width: "" + 2 * c(this).outerWidth(),
                        height: "" + 2 * c(this).outerWidth(),
                        transform: "rotate(180deg) translate(-50%, -50%)",
                        "transform-origin": "0% 0%",
                        opacity: "0"
                    }))
                }
                .call(e),
                function() {
                    c(this).on("mousemove", o),
                    c(this).on("mouseenter", r),
                    this.settings.reset && c(this).on("mouseleave", a),
                    this.settings.glare && c(window).on("resize", u.bind(this))
                }
                .call(e)
            }
            ,
            this.init()
        })
    }
    ,
    c("[data-tilt]").tilt(),
    !0
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Typed = t() : e.Typed = t()
}(this, function() {
    return function(n) {
        var i = {};
        function r(e) {
            if (i[e])
                return i[e].exports;
            var t = i[e] = {
                exports: {},
                id: e,
                loaded: !1
            };
            return n[e].call(t.exports, t, t.exports, r),
            t.loaded = !0,
            t.exports
        }
        return r.m = n,
        r.c = i,
        r.p = "",
        r(0)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                return t && i(e.prototype, t),
                n && i(e, n),
                e
            }
        }();
        var r = n(1)
          , l = n(3)
          , s = function() {
            function n(e, t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                r.initializer.load(this, t, e),
                this.begin()
            }
            return i(n, [{
                key: "toggle",
                value: function() {
                    this.pause.status ? this.start() : this.stop()
                }
            }, {
                key: "stop",
                value: function() {
                    this.typingComplete || this.pause.status || (this.toggleBlinking(!0),
                    this.pause.status = !0,
                    this.options.onStop(this.arrayPos, this))
                }
            }, {
                key: "start",
                value: function() {
                    this.typingComplete || this.pause.status && (this.pause.status = !1,
                    this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos),
                    this.options.onStart(this.arrayPos, this))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.reset(!1),
                    this.options.onDestroy(this)
                }
            }, {
                key: "reset",
                value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    clearInterval(this.timeout),
                    this.replaceText(""),
                    this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor),
                    this.cursor = null),
                    this.strPos = 0,
                    this.arrayPos = 0,
                    this.curLoop = 0,
                    e && (this.insertCursor(),
                    this.options.onReset(this),
                    this.begin())
                }
            }, {
                key: "begin",
                value: function() {
                    var e = this;
                    this.typingComplete = !1,
                    this.shuffleStringsIfNeeded(this),
                    this.insertCursor(),
                    this.bindInputFocusEvents && this.bindFocusEvents(),
                    this.timeout = setTimeout(function() {
                        e.currentElContent && 0 !== e.currentElContent.length ? e.backspace(e.currentElContent, e.currentElContent.length) : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                    }, this.startDelay)
                }
            }, {
                key: "typewrite",
                value: function(r, s) {
                    var o = this;
                    this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass),
                    this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                    var e = this.humanizer(this.typeSpeed)
                      , a = 1;
                    !0 !== this.pause.status ? this.timeout = setTimeout(function() {
                        s = l.htmlParser.typeHtmlChars(r, s, o);
                        var e = 0
                          , t = r.substr(s);
                        if ("^" === t.charAt(0) && /^\^\d+/.test(t)) {
                            var n = 1;
                            n += (t = /\d+/.exec(t)[0]).length,
                            e = parseInt(t),
                            o.temporaryPause = !0,
                            o.options.onTypingPaused(o.arrayPos, o),
                            r = r.substring(0, s) + r.substring(s + n),
                            o.toggleBlinking(!0)
                        }
                        if ("`" === t.charAt(0)) {
                            for (; "`" !== r.substr(s + a).charAt(0) && !(s + ++a > r.length); )
                                ;
                            var i = r.substring(0, s);
                            r = i + r.substring(i.length + 1, s + a) + r.substring(s + a + 1),
                            a--
                        }
                        o.timeout = setTimeout(function() {
                            o.toggleBlinking(!1),
                            s >= r.length ? o.doneTyping(r, s) : o.keepTyping(r, s, a),
                            o.temporaryPause && (o.temporaryPause = !1,
                            o.options.onTypingResumed(o.arrayPos, o))
                        }, e)
                    }, e) : this.setPauseStatus(r, s, !0)
                }
            }, {
                key: "keepTyping",
                value: function(e, t, n) {
                    0 === t && (this.toggleBlinking(!1),
                    this.options.preStringTyped(this.arrayPos, this)),
                    t += n;
                    var i = e.substr(0, t);
                    this.replaceText(i),
                    this.typewrite(e, t)
                }
            }, {
                key: "doneTyping",
                value: function(e, t) {
                    var n = this;
                    this.options.onStringTyped(this.arrayPos, this),
                    this.toggleBlinking(!0),
                    this.arrayPos === this.strings.length - 1 && (this.complete(),
                    !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                        n.backspace(e, t)
                    }, this.backDelay))
                }
            }, {
                key: "backspace",
                value: function(n, i) {
                    var r = this;
                    if (!0 !== this.pause.status) {
                        if (this.fadeOut)
                            return this.initFadeOut();
                        this.toggleBlinking(!1);
                        var e = this.humanizer(this.backSpeed);
                        this.timeout = setTimeout(function() {
                            i = l.htmlParser.backSpaceHtmlChars(n, i, r);
                            var e = n.substr(0, i);
                            if (r.replaceText(e),
                            r.smartBackspace) {
                                var t = r.strings[r.arrayPos + 1];
                                t && e === t.substr(0, i) ? r.stopNum = i : r.stopNum = 0
                            }
                            i > r.stopNum ? (i--,
                            r.backspace(n, i)) : i <= r.stopNum && (r.arrayPos++,
                            r.arrayPos === r.strings.length ? (r.arrayPos = 0,
                            r.options.onLastStringBackspaced(),
                            r.shuffleStringsIfNeeded(),
                            r.begin()) : r.typewrite(r.strings[r.sequence[r.arrayPos]], i))
                        }, e)
                    } else
                        this.setPauseStatus(n, i, !0)
                }
            }, {
                key: "complete",
                value: function() {
                    this.options.onComplete(this),
                    this.loop ? this.curLoop++ : this.typingComplete = !0
                }
            }, {
                key: "setPauseStatus",
                value: function(e, t, n) {
                    this.pause.typewrite = n,
                    this.pause.curString = e,
                    this.pause.curStrPos = t
                }
            }, {
                key: "toggleBlinking",
                value: function(e) {
                    this.cursor && (this.pause.status || this.cursorBlinking !== e && ((this.cursorBlinking = e) ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                }
            }, {
                key: "humanizer",
                value: function(e) {
                    return Math.round(Math.random() * e / 2) + e
                }
            }, {
                key: "shuffleStringsIfNeeded",
                value: function() {
                    this.shuffle && (this.sequence = this.sequence.sort(function() {
                        return Math.random() - .5
                    }))
                }
            }, {
                key: "initFadeOut",
                value: function() {
                    var e = this;
                    return this.el.className += " " + this.fadeOutClass,
                    this.cursor && (this.cursor.className += " " + this.fadeOutClass),
                    setTimeout(function() {
                        e.arrayPos++,
                        e.replaceText(""),
                        e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0),
                        e.arrayPos = 0)
                    }, this.fadeOutDelay)
                }
            }, {
                key: "replaceText",
                value: function(e) {
                    this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
                }
            }, {
                key: "bindFocusEvents",
                value: function() {
                    var t = this;
                    this.isInput && (this.el.addEventListener("focus", function(e) {
                        t.stop()
                    }),
                    this.el.addEventListener("blur", function(e) {
                        t.el.value && 0 !== t.el.value.length || t.start()
                    }))
                }
            }, {
                key: "insertCursor",
                value: function() {
                    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"),
                    this.cursor.className = "typed-cursor",
                    this.cursor.innerHTML = this.cursorChar,
                    this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                }
            }]),
            n
        }();
        t.default = s,
        e.exports = t.default
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
          , i = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                return t && i(e.prototype, t),
                n && i(e, n),
                e
            }
        }();
        var r, s = n(2), l = (r = s) && r.__esModule ? r : {
            default: r
        }, o = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, [{
                key: "load",
                value: function(e, t, n) {
                    if (e.el = "string" == typeof n ? document.querySelector(n) : n,
                    e.options = a({}, l.default, t),
                    e.isInput = "input" === e.el.tagName.toLowerCase(),
                    e.attr = e.options.attr,
                    e.bindInputFocusEvents = e.options.bindInputFocusEvents,
                    e.showCursor = !e.isInput && e.options.showCursor,
                    e.cursorChar = e.options.cursorChar,
                    e.cursorBlinking = !0,
                    e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent,
                    e.contentType = e.options.contentType,
                    e.typeSpeed = e.options.typeSpeed,
                    e.startDelay = e.options.startDelay,
                    e.backSpeed = e.options.backSpeed,
                    e.smartBackspace = e.options.smartBackspace,
                    e.backDelay = e.options.backDelay,
                    e.fadeOut = e.options.fadeOut,
                    e.fadeOutClass = e.options.fadeOutClass,
                    e.fadeOutDelay = e.options.fadeOutDelay,
                    e.isPaused = !1,
                    e.strings = e.options.strings.map(function(e) {
                        return e.trim()
                    }),
                    "string" == typeof e.options.stringsElement ? e.stringsElement = document.querySelector(e.options.stringsElement) : e.stringsElement = e.options.stringsElement,
                    e.stringsElement) {
                        e.strings = [],
                        e.stringsElement.style.display = "none";
                        var i = Array.prototype.slice.apply(e.stringsElement.children)
                          , r = i.length;
                        if (r)
                            for (var s = 0; s < r; s += 1) {
                                var o = i[s];
                                e.strings.push(o.innerHTML.trim())
                            }
                    }
                    for (var s in e.strPos = 0,
                    e.arrayPos = 0,
                    e.stopNum = 0,
                    e.loop = e.options.loop,
                    e.loopCount = e.options.loopCount,
                    e.curLoop = 0,
                    e.shuffle = e.options.shuffle,
                    e.sequence = [],
                    e.pause = {
                        status: !1,
                        typewrite: !0,
                        curString: "",
                        curStrPos: 0
                    },
                    e.typingComplete = !1,
                    e.strings)
                        e.sequence[s] = s;
                    e.currentElContent = this.getCurrentElContent(e),
                    e.autoInsertCss = e.options.autoInsertCss,
                    this.appendAnimationCss(e)
                }
            }, {
                key: "getCurrentElContent",
                value: function(e) {
                    return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
                }
            }, {
                key: "appendAnimationCss",
                value: function(e) {
                    var t = "data-typed-js-css";
                    if (e.autoInsertCss && (e.showCursor || e.fadeOut) && !document.querySelector("[" + t + "]")) {
                        var n = document.createElement("style");
                        n.type = "text/css",
                        n.setAttribute(t, !0);
                        var i = "";
                        e.showCursor && (i += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                        e.fadeOut && (i += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                        0 !== n.length && (n.innerHTML = i,
                        document.body.appendChild(n))
                    }
                }
            }]),
            e
        }(), u = new (t.default = o);
        t.initializer = u
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onComplete: function(e) {},
            preStringTyped: function(e, t) {},
            onStringTyped: function(e, t) {},
            onLastStringBackspaced: function(e) {},
            onTypingPaused: function(e, t) {},
            onTypingResumed: function(e, t) {},
            onReset: function(e) {},
            onStop: function(e, t) {},
            onStart: function(e, t) {},
            onDestroy: function(e) {}
        };
        t.default = n,
        e.exports = t.default
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                return t && i(e.prototype, t),
                n && i(e, n),
                e
            }
        }();
        var i = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return n(e, [{
                key: "typeHtmlChars",
                value: function(e, t, n) {
                    if ("html" !== n.contentType)
                        return t;
                    var i = e.substr(t).charAt(0);
                    if ("<" === i || "&" === i) {
                        var r = "";
                        for (r = "<" === i ? ">" : ";"; e.substr(t + 1).charAt(0) !== r && !(++t + 1 > e.length); )
                            ;
                        t++
                    }
                    return t
                }
            }, {
                key: "backSpaceHtmlChars",
                value: function(e, t, n) {
                    if ("html" !== n.contentType)
                        return t;
                    var i = e.substr(t).charAt(0);
                    if (">" === i || ";" === i) {
                        var r = "";
                        for (r = ">" === i ? "<" : "&"; e.substr(t - 1).charAt(0) !== r && !(--t < 0); )
                            ;
                        t--
                    }
                    return t
                }
            }]),
            e
        }()
          , r = new (t.default = i);
        t.htmlParser = r
    }
    ])
}),
function() {
    "use strict";
    var t = 0
      , s = {};
    function n(e) {
        if (!e)
            throw new Error("No options passed to Waypoint constructor");
        if (!e.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!e.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t,
        this.options = n.Adapter.extend({}, n.defaults, e),
        this.element = this.options.element,
        this.adapter = new n.Adapter(this.element),
        this.callback = e.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = n.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = n.Context.findOrCreateByElement(this.options.context),
        n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        s[this.key] = this,
        t += 1
    }
    n.prototype.queueTrigger = function(e) {
        this.group.queueTrigger(this, e)
    }
    ,
    n.prototype.trigger = function(e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }
    ,
    n.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete s[this.key]
    }
    ,
    n.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    n.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    n.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    n.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    n.invokeAll = function(e) {
        var t = [];
        for (var n in s)
            t.push(s[n]);
        for (var i = 0, r = t.length; i < r; i++)
            t[i][e]()
    }
    ,
    n.destroyAll = function() {
        n.invokeAll("destroy")
    }
    ,
    n.disableAll = function() {
        n.invokeAll("disable")
    }
    ,
    n.enableAll = function() {
        for (var e in n.Context.refreshAll(),
        s)
            s[e].enabled = !0;
        return this
    }
    ,
    n.refreshAll = function() {
        n.Context.refreshAll()
    }
    ,
    n.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    n.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    n.adapters = [],
    n.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    n.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = n
}(),
function() {
    "use strict";
    function t(e) {
        window.setTimeout(e, 1e3 / 60)
    }
    var n = 0
      , i = {}
      , g = window.Waypoint
      , e = window.onload;
    function r(e) {
        this.element = e,
        this.Adapter = g.Adapter,
        this.adapter = new this.Adapter(e),
        this.key = "waypoint-context-" + n,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        e.waypointContextKey = this.key,
        i[e.waypointContextKey] = this,
        n += 1,
        g.windowContext || (g.windowContext = !0,
        g.windowContext = new r(window)),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    r.prototype.add = function(e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e,
        this.refresh()
    }
    ,
    r.prototype.checkEmpty = function() {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , t = this.Adapter.isEmptyObject(this.waypoints.vertical)
          , n = this.element == this.element.window;
        e && t && !n && (this.adapter.off(".waypoints"),
        delete i[this.key])
    }
    ,
    r.prototype.createThrottledResizeHandler = function() {
        var e = this;
        function t() {
            e.handleResize(),
            e.didResize = !1
        }
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0,
            g.requestAnimationFrame(t))
        })
    }
    ,
    r.prototype.createThrottledScrollHandler = function() {
        var e = this;
        function t() {
            e.handleScroll(),
            e.didScroll = !1
        }
        this.adapter.on("scroll.waypoints", function() {
            e.didScroll && !g.isTouch || (e.didScroll = !0,
            g.requestAnimationFrame(t))
        })
    }
    ,
    r.prototype.handleResize = function() {
        g.Context.refreshAll()
    }
    ,
    r.prototype.handleScroll = function() {
        var e = {}
          , t = {
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
        };
        for (var n in t) {
            var i = t[n]
              , r = i.newScroll > i.oldScroll ? i.forward : i.backward;
            for (var s in this.waypoints[n]) {
                var o = this.waypoints[n][s];
                if (null !== o.triggerPoint) {
                    var a = i.oldScroll < o.triggerPoint
                      , l = i.newScroll >= o.triggerPoint;
                    (a && l || !a && !l) && (o.queueTrigger(r),
                    e[o.group.id] = o.group)
                }
            }
        }
        for (var u in e)
            e[u].flushTriggers();
        this.oldScroll = {
            x: t.horizontal.newScroll,
            y: t.vertical.newScroll
        }
    }
    ,
    r.prototype.innerHeight = function() {
        return this.element == this.element.window ? g.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    r.prototype.remove = function(e) {
        delete this.waypoints[e.axis][e.key],
        this.checkEmpty()
    }
    ,
    r.prototype.innerWidth = function() {
        return this.element == this.element.window ? g.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    r.prototype.destroy = function() {
        var e = [];
        for (var t in this.waypoints)
            for (var n in this.waypoints[t])
                e.push(this.waypoints[t][n]);
        for (var i = 0, r = e.length; i < r; i++)
            e[i].destroy()
    }
    ,
    r.prototype.refresh = function() {
        var e, t = this.element == this.element.window, n = t ? void 0 : this.adapter.offset(), i = {};
        for (var r in this.handleScroll(),
        e = {
            horizontal: {
                contextOffset: t ? 0 : n.left,
                contextScroll: t ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: t ? 0 : n.top,
                contextScroll: t ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        }) {
            var s = e[r];
            for (var o in this.waypoints[r]) {
                var a, l, u, c, d = this.waypoints[r][o], h = d.options.offset, f = d.triggerPoint, p = 0, m = null == f;
                d.element !== d.element.window && (p = d.adapter.offset()[s.offsetProp]),
                "function" == typeof h ? h = h.apply(d) : "string" == typeof h && (h = parseFloat(h),
                -1 < d.options.offset.indexOf("%") && (h = Math.ceil(s.contextDimension * h / 100))),
                a = s.contextScroll - s.contextOffset,
                d.triggerPoint = Math.floor(p + a - h),
                l = f < s.oldScroll,
                u = d.triggerPoint >= s.oldScroll,
                c = !l && !u,
                !m && (l && u) ? (d.queueTrigger(s.backward),
                i[d.group.id] = d.group) : !m && c ? (d.queueTrigger(s.forward),
                i[d.group.id] = d.group) : m && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward),
                i[d.group.id] = d.group)
            }
        }
        return g.requestAnimationFrame(function() {
            for (var e in i)
                i[e].flushTriggers()
        }),
        this
    }
    ,
    r.findOrCreateByElement = function(e) {
        return r.findByElement(e) || new r(e)
    }
    ,
    r.refreshAll = function() {
        for (var e in i)
            i[e].refresh()
    }
    ,
    r.findByElement = function(e) {
        return i[e.waypointContextKey]
    }
    ,
    window.onload = function() {
        e && e(),
        r.refreshAll()
    }
    ,
    g.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }
    ,
    g.Context = r
}(),
function() {
    "use strict";
    function o(e, t) {
        return e.triggerPoint - t.triggerPoint
    }
    function a(e, t) {
        return t.triggerPoint - e.triggerPoint
    }
    var t = {
        vertical: {},
        horizontal: {}
    }
      , n = window.Waypoint;
    function i(e) {
        this.name = e.name,
        this.axis = e.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        t[this.axis][this.name] = this
    }
    i.prototype.add = function(e) {
        this.waypoints.push(e)
    }
    ,
    i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    i.prototype.flushTriggers = function() {
        for (var e in this.triggerQueues) {
            var t = this.triggerQueues[e]
              , n = "up" === e || "left" === e;
            t.sort(n ? a : o);
            for (var i = 0, r = t.length; i < r; i += 1) {
                var s = t[i];
                (s.options.continuous || i === t.length - 1) && s.trigger([e])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    i.prototype.next = function(e) {
        this.waypoints.sort(o);
        var t = n.Adapter.inArray(e, this.waypoints);
        return t === this.waypoints.length - 1 ? null : this.waypoints[t + 1]
    }
    ,
    i.prototype.previous = function(e) {
        this.waypoints.sort(o);
        var t = n.Adapter.inArray(e, this.waypoints);
        return t ? this.waypoints[t - 1] : null
    }
    ,
    i.prototype.queueTrigger = function(e, t) {
        this.triggerQueues[t].push(e)
    }
    ,
    i.prototype.remove = function(e) {
        var t = n.Adapter.inArray(e, this.waypoints);
        -1 < t && this.waypoints.splice(t, 1)
    }
    ,
    i.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    i.findOrCreate = function(e) {
        return t[e.axis][e.name] || new i(e)
    }
    ,
    n.Group = i
}(),
function() {
    "use strict";
    var e = window.Waypoint;
    function i(e) {
        return e === e.window
    }
    function r(e) {
        return i(e) ? e : e.defaultView
    }
    function t(e) {
        this.element = e,
        this.handlers = {}
    }
    t.prototype.innerHeight = function() {
        return i(this.element) ? this.element.innerHeight : this.element.clientHeight
    }
    ,
    t.prototype.innerWidth = function() {
        return i(this.element) ? this.element.innerWidth : this.element.clientWidth
    }
    ,
    t.prototype.off = function(e, t) {
        function n(e, t, n) {
            for (var i = 0, r = t.length - 1; i < r; i++) {
                var s = t[i];
                n && n !== s || e.removeEventListener(s)
            }
        }
        var i = e.split(".")
          , r = i[0]
          , s = i[1]
          , o = this.element;
        if (s && this.handlers[s] && r)
            n(o, this.handlers[s][r], t),
            this.handlers[s][r] = [];
        else if (r)
            for (var a in this.handlers)
                n(o, this.handlers[a][r] || [], t),
                this.handlers[a][r] = [];
        else if (s && this.handlers[s]) {
            for (var l in this.handlers[s])
                n(o, this.handlers[s][l], t);
            this.handlers[s] = {}
        }
    }
    ,
    t.prototype.offset = function() {
        if (!this.element.ownerDocument)
            return null;
        var e = this.element.ownerDocument.documentElement
          , t = r(this.element.ownerDocument)
          , n = {
            top: 0,
            left: 0
        };
        return this.element.getBoundingClientRect && (n = this.element.getBoundingClientRect()),
        {
            top: n.top + t.pageYOffset - e.clientTop,
            left: n.left + t.pageXOffset - e.clientLeft
        }
    }
    ,
    t.prototype.on = function(e, t) {
        var n = e.split(".")
          , i = n[0]
          , r = n[1] || "__default"
          , s = this.handlers[r] = this.handlers[r] || {};
        (s[i] = s[i] || []).push(t),
        this.element.addEventListener(i, t)
    }
    ,
    t.prototype.outerHeight = function(e) {
        var t, n = this.innerHeight();
        return e && !i(this.element) && (t = window.getComputedStyle(this.element),
        n += parseInt(t.marginTop, 10),
        n += parseInt(t.marginBottom, 10)),
        n
    }
    ,
    t.prototype.outerWidth = function(e) {
        var t, n = this.innerWidth();
        return e && !i(this.element) && (t = window.getComputedStyle(this.element),
        n += parseInt(t.marginLeft, 10),
        n += parseInt(t.marginRight, 10)),
        n
    }
    ,
    t.prototype.scrollLeft = function() {
        var e = r(this.element);
        return e ? e.pageXOffset : this.element.scrollLeft
    }
    ,
    t.prototype.scrollTop = function() {
        var e = r(this.element);
        return e ? e.pageYOffset : this.element.scrollTop
    }
    ,
    t.extend = function() {
        var e = Array.prototype.slice.call(arguments);
        function t(e, t) {
            if ("object" == typeof e && "object" == typeof t)
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }
        for (var n = 1, i = e.length; n < i; n++)
            t(e[0], e[n]);
        return e[0]
    }
    ,
    t.inArray = function(e, t, n) {
        return null == t ? -1 : t.indexOf(e, n)
    }
    ,
    t.isEmptyObject = function(e) {
        for (var t in e)
            return !1;
        return !0
    }
    ,
    e.adapters.push({
        name: "noframework",
        Adapter: t
    }),
    e.Adapter = t
}(),
$(function(d) {
    d("form").each(function() {
        var e = d(this)
          , t = {
            errorPlacement: function(e, t) {
                var n = t.parent();
                n.hasClass("input-group") ? e.insertAfter(n) : n.hasClass("has-icon") ? e.insertBefore(n) : n.hasClass("control") ? e.insertAfter(t.next(".control-label")) : e.insertAfter(t)
            }
        };
        "submit" == e.data("validate-on") && d.extend(t, {
            onfocusout: !1,
            onkeyup: !1
        }),
        e.validate(t)
    }),
    d("form").submit(function(e) {
        e.preventDefault();
        var n = d(this);
        if (!n.valid())
            return !1;
        var t = d("button[type=submit]", this);
        t.addClass("loading");
        var i, r, s, o, a, l = t.parent(".ajax-button"), u = l.length, c = n.next(".response-message");
        return r = (i = n).attr("action"),
        s = i.serializeArray(),
        a = d.extend(!0, {}, o, {
            url: r,
            type: "POST",
            data: s,
            dataType: "json"
        }),
        d.ajax(a).done(function(e) {
            e.result ? (n.trigger("form.submitted", [e]),
            d("input, textarea", n).removeClass("error"),
            d(".response", c).html(e.message),
            u && d(".success", l).addClass("done"),
            n.addClass("submitted"),
            n[0].reset()) : (u && d(".failed", l).addClass("done"),
            e.errors && d.each(e.errors, function(e, t) {
                d("[name$='[" + e + "]']", n).addClass("error").tooltip({
                    title: t,
                    placement: "bottom",
                    trigger: "manual"
                }).tooltip("show").on("focus", function() {
                    d(this).tooltip("destroy")
                })
            }))
        }).fail(function() {
            d(".response", c).html(d("<span class='block'>Something went wrong.</span>")),
            u && d(".failed", l).addClass("done")
        }).always(function() {
            t.addClass("loading-end"),
            u && setTimeout(function() {
                console.log("clearing status"),
                t.removeClass("loading").removeClass("loading-end"),
                d(".success,.failed", l).removeClass("done")
            }, 500)
        }),
        !1
    })
}),
function() {
    "use strict";
    for (var e, t = function() {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = n.length, r = window.console = window.console || {}; i--; )
        r[e = n[i]] || (r[e] = t)
}(),
$(function() {
    "use strict";
    var e = $(".main-nav");
    if (new ScrollingSpy({
        offset: 90,
        navbar: ".main-nav",
        pricingBasis: "#pricing-basis-options",
        pricingStickyElement: ".pricing-plans-options"
    }).initialize(),
    $("a.scrollto").on("click", function(e) {
        e.preventDefault();
        var t = this.hash;
        $("html, body").stop().animate({
            scrollTop: $(t).offset().top - 45
        }, 1200, "easeInOutExpo", function() {
            window.location.hash = t
        })
    }),
    $(".navbar-toggler", e).on("click", function() {
        e.toggleClass("navbar-expanded")
    }),
    $(".swiper-container").each(function() {
        var e = $(this)
          , t = {
            breakpoints: e.data("sw-breakpoints"),
            active_selector: e.data("sw-active-selector"),
            cover_flow: e.data("sw-coverflow"),
            auto_play: e.data("sw-autoplay"),
            loop: e.data("sw-loop"),
            centered: e.data("sw-centered-slides"),
            pagination: e.data("sw-pagination"),
            nav_arrows: e.data("sw-nav-arrows")
        }
          , n = t.breakpoints || !1
          , i = void 0 !== t.auto_play && t.auto_play
          , r = e.data("sw-speed") || 1100
          , s = e.data("sw-effect") || "slide"
          , o = e.data("sw-show-items") || 1
          , a = void 0 === t.loop || t.loop
          , l = void 0 === t.centered || t.centered
          , u = e.data("sw-space-between") || (1 < o ? 20 : 0)
          , c = e.data("sw-scroll-items") || 1
          , d = e.data("sw-navigation")
          , h = e.data("sw-navigation-active") || "active"
          , f = void 0 !== t.active_selector && t.active_selector
          , p = void 0 !== t.pagination ? t.pagination : ".swiper-pagination"
          , m = void 0 !== t.nav_arrows ? t.nav_arrows : ".swiper-button"
          , g = t.cover_flow ? {
            coverflowEffect: $.extend({
                stretch: 0,
                depth: 0,
                modifier: 1,
                rotate: 0,
                slideShadows: !1
            }, t.cover_flow)
        } : {}
          , v = i ? {
            autoplay: {
                delay: i,
                disableOnIteration: !1
            },
            speed: r
        } : {}
          , y = {};
        p && (y.pagination = {
            el: p,
            clickable: !0,
            dynamicBullets: !0
        }),
        m && (y.navigation = {
            nextEl: m + "-next",
            prevEl: m + "-prev"
        });
        var b = {};
        d && (b = {
            transitionEnd: function() {
                if (d) {
                    var e = $(d);
                    f ? ($(f + "." + h, e).removeClass(h),
                    $(".nav-item:eq(" + x.realIndex + ") " + f, e).addClass(h)) : ($("." + h, e).removeClass(h),
                    $(".nav-item:eq(" + x.realIndex + ")", e).addClass(h))
                }
            }
        });
        var w = $.extend({
            loop: a,
            slidesPerGroup: c,
            spaceBetween: u,
            centeredSlides: l,
            breakpoints: n,
            slidesPerView: o,
            parallax: !0,
            effect: s
        }, y, v, g)
          , x = new Swiper(this,w);
        for (var E in b)
            x.on(E, b[E]);
        d && $(d).on("click", ".nav-item", function(e) {
            e.preventDefault();
            var t = $(this)
              , n = t;
            if (f && (n = $(f, t)),
            n.hasClass(h))
                return !1;
            var i = t.data("step") || t.index() + 1;
            return x.slideTo(i - 1),
            f ? (t.siblings().each(function() {
                $(f, this).removeClass(h)
            }),
            n.addClass(h)) : (t.siblings("." + h).removeClass(h),
            t.addClass(h)),
            !1
        })
    }),
    $("[data-aos]").length && AOS.init({
        offset: 100,
        duration: 1500,
        disable: "mobile"
    }),
    $(".tilt").length && $(".tilt").tilt({
        glare: !0,
        maxGlare: .4
    }),
    $(".typed").length)
        new Typed(".typed",{
            strings: ["Invoicing", "Subscriptions", "Mailing", "Reporting"],
            typeSpeed: 150,
            backDelay: 500,
            backSpeed: 50,
            loop: !0
        });
    $(".pricing-plans").on("change", 'input[name="pricing-basis"]', function() {
        var e = this.value;
        $(".price", $(".pricing-plans")).each(function() {
            this.innerHTML = $(this).data(e)
        })
    })
});

$(document).ready(function(){
    $('.progress-bar').waypoint(function(){
        $('.progress-bar.mean-stack').css({
            animation:"animate-positive 2s",
            opacity: '1'
        });
    }, {offset:'40%'} );
    $('.progress-bar').waypoint(function(){
        $('.progress-bar.mean-stack').css({
            animation:"animate-positve 4s",
            opacity: '1'
        });
    }, {offset:'-50%'} );

    $('.progress-bar').waypoint(function(){
        $('.progress-bar.android').css({
            animation:"animate-positive 2.4s",
            opacity: '1'
        });
    }, {offset:'40%'} );
    $('.progress-bar').waypoint(function(){
        $('.progress-bar.android').css({
            animation:"animate-positve 3.6s",
            opacity: '1'
        });
    }, {offset:'-50%'} );

    $('.progress-bar').waypoint(function(){
        $('.progress-bar.wordpress').css({
            animation:"animate-positive 2.4s",
            opacity: '1'
        });
    }, {offset:'40%'} );
    $('.progress-bar').waypoint(function(){
        $('.progress-bar.wordpress').css({
            animation:"animate-positve 3.6s",
            opacity: '1'
        });
    }, {offset:'-50%'} );
 
    $('.progress-bar').waypoint(function(){
        $('.progress-bar.codeignitor').css({
            animation:"animate-positive 3.2s",
            opacity: '1'
        });
    }, {offset:'40%'} );
    $('.progress-bar').waypoint(function(){
        $('.progress-bar.codeignitor').css({
            animation:"animate-positve 2.8s",
            opacity: '1'
        });
    }, {offset:'-50%'} );

    $('.progress-bar').waypoint(function(){
        $('.progress-bar.laravel').css({
            animation:"animate-positive 3.6s",
            opacity: '1'
        });
    }, {offset:'40%'} );
    $('.progress-bar').waypoint(function(){
        $('.progress-bar.laravel').css({
            animation:"animate-positve 2.4s",
            opacity: '1'
        });
    }, {offset:'-50%'} );

    $('.progress-bar').waypoint(function(){
        $('.progress-bar.magento').css({
            animation:"animate-positive 4s",
            opacity: '1'
        });
    }, {offset:'40%'} );
    $('.progress-bar').waypoint(function(){
        $('.progress-bar.magento').css({
            animation:"animate-positve 2s",
            opacity: '1'
        });
    }, {offset:'-50%'} );
});
