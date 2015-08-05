function swipedetect(n, t) {
    console.log(n);
    var f = n, i, e, o, r, u, s = 150, h = 100, a = 300, c, l, v = t || function() {
    };
    f.addEventListener("touchstart", function(n) {
        var t = n.changedTouches[0];
        i = "none";
        dist = 0;
        e = t.pageX;
        o = t.pageY;
        l = (new Date).getTime();
        n.preventDefault();
        console.log("touch start ~")
    }, !1);
    f.addEventListener("touchmove", function(n) {
        n.preventDefault();
        console.log("touch move ~")
    }, !1);
    f.addEventListener("touchend", function(n) {
        var t = n.changedTouches[0];
        r = t.pageX - e;
        u = t.pageY - o;
        c = (new Date).getTime() - l;
        c <= a && (Math.abs(r) >= s && Math.abs(u) <= h ? i = r < 0 ? "left" : "right" : Math.abs(u) >= s && Math.abs(r) <= h && (i = u < 0 ? "up" : "down"));
        v(i);
        n.preventDefault();
        console.log("touch end ~")
    }, !1)
}
var SmartScooter = function(n, t) {
    "use strict";
    function i() {
        var n = this
    }
    return t.gogoro = t.gogoro || {}, t.gogoro.AppIntro = i, i.bootstrapTakeover = function() {
        i.isTakeoverActive = !1;
        i.takeoverDetect = !0;
        i.enableMove = !1;
        i.LoadTakeover = function() {
            if (!n("body").hasClass("intro-takeover-loaded")) {
                n(".navbar-header").removeClass("white");
                n(window).scrollTop(0);
                n("body").addClass("intro-takeover");
                n("#landingPage").css({top: 0});
                n(".module-faster-0-site-intro").css({height: n(window).outerHeight(),top: 0,display: "block"});
                n(window).on("resize", function() {
                    n("body").hasClass("intro-takeover") && n(".module-faster-0-site-intro").css({height: n(window).outerHeight()})
                });
                gogoro.scene = 0;
                i.setupMovie();
                n(".module-faster-0-site-intro .intro-container").css({top: 0});
                n(".module-faster-0-site-intro").unbind("mousewheel DOMMouseScroll MozMousePixelScroll").on("mousewheel DOMMouseScroll MozMousePixelScroll", function(n) {
                    gogoro.AppIntro.enableMove && gogoro.AppIntro.takeoverDetect && (n.originalEvent.detail > 0 || n.originalEvent.wheelDelta < 0 ? gogoro.AppIntro.removeTakeover() : gogoro.scene === 1 && i.rollBackTakeover())
                })
            }
            n(".module-faster-0-site-intro")[0] && gogoro.App.getState === "fallback" && swipedetect(n(".module-faster-0-site-intro")[0], function(n) {
                n == "up" ? gogoro.scene === 0 ? gogoro.AppIntro.LoadMovieClip() : gogoro.AppIntro.removeTakeover() : n == "down" && gogoro.scene === 1 && i.rollBackTakeover()
            })
        };
        i.setupMovie = function() {
            function u() {
                gogoro.AppIntro.ytplayer = new YT.Player("bgPlayer", {videoId: n,playerVars: {controls: 1,autoplay: 0},events: {onReady: function() {
                            gogoro.AppIntro.ytplayer.loadVideoById(n, 0, "hd1080");
                            gogoro.AppIntro.ytplayer.pauseVideo()
                        },onStateChange: f}})
            }
            function f(n) {
                n.data === 0 && gogoro.AppIntro.removeTakeover()
            }
            var n = "zIwkHeG1hAE", i, r;
            if (gogoro.AppIntro.loadedApi || (i = document.createElement("script"), i.src = "https://www.youtube.com/iframe_api", r = document.getElementsByTagName("script")[0], r.parentNode.insertBefore(i, r)), t.onYouTubeIframeAPIReady = function() {
                gogoro.AppIntro.loadedApi = !0;
                u()
            }, undefined !== gogoro.AppIntro.ytplayer)
                try {
                    gogoro.AppIntro.ytplayer.loadVideoById(n, 0, "hd1080");
                    gogoro.AppIntro.ytplayer.pauseVideo()
                } catch (e) {
                    u()
                }
        };
        i.LoadMovieClip = function() {
            gogoro.AppIntro.takeoverDetect = !1;
            n("#landingPage").animate({top: "-100%"}, "slow", "linear", function() {
                n(".navbar-header").addClass("white");
                gogoro.AppIntro.enableTakeoverDetect();
                gogoro.scene = 1
            })
        };
        i.rollBackTakeover = function() {
            gogoro.scene = 0;
            gogoro.AppIntro.takeoverDetect = !1;
            undefined !== gogoro.AppIntro.ytplayer && gogoro.AppIntro.ytplayer.pauseVideo();
            n("#landingPage").animate({top: "0"}, "slow", "linear", function() {
                gogoro.scene = 0;
                n(".navbar-header").removeClass("white");
                gogoro.AppIntro.enableTakeoverDetect()
            })
        };
        i.enableTakeoverDetect = function() {
            setTimeout(function() {
                gogoro.AppIntro.takeoverDetect = !0
            }, 1e3)
        };
        i.removing = !1;
        i.removeTakeover = function() {
            if (!gogoro.AppIntro.removing) {
                gogoro.App.getState() === "standard" && (angular.element(document.getElementById("module-faster-1-page-intro")).scope().standard.destroy(), angular.element(document.getElementById("module-faster-1-page-intro")).scope().standard.init());
                gogoro.AppIntro.removing = !0;
                n(".nav-bar-stop").hide();
                n(".navbar").show();
                n(".navbar-header").removeClass("white");
                n(".video_hero .container").removeClass("transparent");
                var t = n(window).outerHeight();
                n("body").scrollTop(0);
                n(".module-faster-0-site-intro").velocity({top: -2 * t}, {duration: t,ease: "easeOut",complete: function() {
                        n(".module-faster-0-site-intro").unbind("mousewheel").css({display: "none"});
                        n(".inavbar-header").removeClass("white");
                        try {
                            gogoro.AppIntro.ytplayer.stopVideo();
                            gogoro.AppIntro.removing = !1
                        } catch (t) {
                        }
                        setTimeout(function() {
                            n("body").removeClass("intro-takeover").addClass("intro-takeover-loaded")
                        }, 300)
                    }})
            }
        }
    }, {initTakeover: function() {
            gogoro.AppIntro.bootstrapTakeover();
            n(".navbar-brand").on("click", function() {
                gogoro.App.getState() === "standard" && (gogoro.AppIntro.isTakeoverActive = !0, n("body").removeClass("intro-takeover-loaded").addClass("intro-takeover"), i.removing = !1, i.LoadTakeover())
            })
        }}
}(window.jQuery, window), gogoroApp = angular.module("gogoro", ["ui.bootstrap", "ui.router", "angular-inview", "gogoro.partial.tabbarView", "gogoro.partial.fallbackManager", "gogoro.partial.modulePageIntro", "gogoro.partial.moduleSummaryInfo", "gogoro.partial.moduleVideo", "gogoro.partial.moduleVideoSlider", "gogoro.partial.GaContentTracking", "ngTouch", "LocalStorageModule", "ipCookie"]).controller("AppController", ["$scope", "$rootScope", "$state", "localStorageService", "GogoroUrlService", "GogoroUserService", function(n, t, i, r, u, f) {
        t.$on("$stateChangeSuccess", function() {
            t.stateName = i.current.name
        });
        t.gogoro = u.gogoroUrlGenerate();
        f.init()
    }]).run(["$rootScope", function() {
    }]), dist;
SmartScooter.initTakeover();
$(document).ready(function() {
    preloadImg = ["//gogoro.imgix.net/site-intro-gogoro.png?w=550", "//images.gogoroapp.com/icons/loading/loading_circle_v2.png"];
    $.each(preloadImg, function(n, t) {
        var i = new Image;
        i.src = t
    });
    $("img.svg").each(function() {
        var n = jQuery(this), t = n.attr("id"), i = n.attr("class"), r = n.attr("src");
        jQuery.get(r, function(r) {
            var u = jQuery(r).find("svg");
            typeof t != "undefined" && (u = u.attr("id", t));
            typeof i != "undefined" && (u = u.attr("class", i + " replaced-svg"));
            u = u.removeAttr("xmlns:a");
            n.replaceWith(u)
        }, "xml");
        setTimeout(function() {
            window.scrollTo(0, 1)
        }, 100)
    })
});
gogoroApp.factory("GogoroUrlService", ["$http", function() {
        var t = !0, n;
        return log = function(n, i) {
            t && (angular.isDefined(i) ? console.log(n, i) : console.log(n))
        }, n = {}, n.hostnameSplited = window.location.hostname.split("-"), n.gogoro = {}, gogoroUrlGenerate = function() {
            var t = "";
            switch (gogoro.Locale.lang) {
                case "en-tw":
                    t = "/tw/en/";
                    break;
                case "zh-tw":
                    t = "/tw/";
                    break;
                default:
                    t = "/"
            }
            switch (n.hostnameSplited[0]) {
                case "local":
                    n.gogoro.status = "local";
                    n.gogoro.myGogoroUrl = "//local-my.gogoro.com" + t;
                    n.gogoro.storeGogoroUrl = "//local-store.gogoro.com" + t;
                    n.gogoro.wwwGogoroUrl = "//local-www.gogoro.com" + t;
                    break;
                case "dev":
                    n.gogoro.status = "dev";
                    n.gogoro.myGogoroUrl = "//dev-my.gogoro.com" + t;
                    n.gogoro.storeGogoroUrl = "//dev-store.gogoro.com" + t;
                    n.gogoro.wwwGogoroUrl = "//dev-www.gogoro.com" + t;
                    break;
                default:
                    n.gogoro.status = "production";
                    n.gogoro.myGogoroUrl = "//my.gogoro.com" + t;
                    n.gogoro.storeGogoroUrl = "//store.gogoro.com" + t;
                    n.gogoro.wwwGogoroUrl = "//www.gogoro.com" + t
            }
            return n.gogoro
        }, sayHello = function() {
            console.log("Hello, World!")
        }, {init: function() {
            },sayHello: sayHello,gogoroUrlGenerate: gogoroUrlGenerate}
    }]);
gogoroApp.factory("GogoroUserService", ["$http", "$rootScope", "localStorageService", "ipCookie", "$timeout", "$location", "ShoppingCartService", function(n, t, i, r, u, f, e) {
        var o = !0, s;
        return log = function(n, t) {
            o && (angular.isDefined(t) ? console.log(n, t) : console.log(n))
        }, s = {}, init = function() {
            getLoginUser();
            isCookieSupported() || (alertCookieDisableMessage(), t.loginUser.isCookieEnabled = !1)
        }, getReferrerUrl = function() {
        }, setCurrentUrlAsReferrerUrl = function() {
            r("ReferrerUrl", f.$$absUrl, {path: "/",domain: "gogoro.com"})
        }, setReferrerUrl = function(n) {
            angular.isUndefined(n) && (n = t.gogoro.storeGogoroUrl);
            r("ReferrerUrl", n, {path: "/",domain: "gogoro.com"})
        }, getLoginUser = function() {
            t.loginUser = {};
            t.loginUser.name = typeof r("Name") == "undefined" ? "" : r("Name").replace(/\+/g, " ");
            t.loginUser.isCookieEnabled = !0;
            t.loginUser.picture = typeof r("Picture") == "undefined" || r("Picture") == "" ? "//images.gogoroapp.com/my-gogoro/profile_pic_default.jpg" : r("Picture");
            t.loginUser.isUserLogin = angular.isUndefined(r("Login")) ? !1 : parseInt(r("Login")) === 0 ? !1 : !0;
            t.loginUser.isUserLogin && e.getShoppingCartAmount().then(function(n) {
                n.Result === 1 && (t.loginUser.cartAmount = n.Data, log("$rootScope.loginUser.cartAmount", t.loginUser.cartAmount))
            });
            log("");
            log("login user information", t.loginUser)
        }, t.$watch(function() {
            return t.loginUser.cartAmount
        }, function(n, t) {
            n != t
        }), isCookieSupported = function() {
            return i.cookie.isSupported ? !0 : !1
        }, alertCookieDisableMessage = function(n) {
            n = typeof n != "undefined" ? n : 1e3;
            u(function() {
                swal({title: "提醒",text: '你的<span class="graphik-light" >Cookie<\/span>已關閉，你需要打開才可以用<span class="graphik-light" >Gogoro<\/span>需要登入的相關功能，謝謝您!'})
            }, n)
        }, {init: function() {
                init()
            },alertCookieDisableMessage: alertCookieDisableMessage,setCurrentUrlAsReferrerUrl: setCurrentUrlAsReferrerUrl,setReferrerUrl: setReferrerUrl}
    }]);
gogoroApp.factory("ShoppingCartService", ["$http", "$rootScope", "GogoroUrlService", function(n, t, i) {
        var f = !0, r, u;
        return log = function(n, t) {
            f && (angular.isDefined(t) ? console.log(n, t) : console.log(n))
        }, r = {}, u = i.gogoroUrlGenerate(), r.apiUrl = {}, r.apiUrl.add = u.storeGogoroUrl + "api/shopping-cart/add", r.apiUrl.list = u.storeGogoroUrl + "api/shopping-cart/list", r.apiUrl.modify = u.storeGogoroUrl + "api/shopping-cart/modify", r.apiUrl.remove = u.storeGogoroUrl + "api/shopping-cart/remove", r.apiUrl.amount = u.storeGogoroUrl + "api/shopping-cart/amount", addProduct = function(t) {
            var i = r.apiUrl.add;
            return n({method: "POST",data: JSON.stringify(t),dataType: "json",url: i}).then(function(n) {
                return n.data
            })
        }, getShoppingCartProducts = function() {
            var t = r.apiUrl.list;
            return n({method: "POST",dataType: "json",url: t}).then(function(n) {
                return n.data
            })
        }, modifyShoppingCartProductAmount = function(t) {
            var i = r.apiUrl.modify + "/" + t.id + "/" + t.quantity, u;
            return log("modifyShoppingCartProductAmount", i), u = "get", n({method: u,dataType: "json",url: i}).then(function(n) {
                return n.data
            })
        }, removeProduct = function(t) {
            var i = r.apiUrl.remove + "/" + t.id, u;
            return log("removeProduct", i), u = "get", n({method: u,dataType: "json",url: i}).then(function(n) {
                return n.data
            })
        }, getShoppingCartAmount = function() {
            var t = r.apiUrl.amount;
            return n({method: "POST",dataType: "json",url: t}).then(function(n) {
                return n.data
            })
        }, addScooter = function() {
        }, {init: function() {
            },addProduct: addProduct,getShoppingCartAmount: getShoppingCartAmount,getShoppingCartProducts: getShoppingCartProducts,modifyShoppingCartProductAmount: modifyShoppingCartProductAmount,removeProduct: removeProduct}
    }]), function(n) {
    "use strict";
    function tt() {
        y(!0)
    }
    var t = {};
    n.respond = t;
    t.update = function() {
    };
    var f = [], it = function() {
        var t = !1;
        try {
            t = new n.XMLHttpRequest
        } catch (i) {
            t = new n.ActiveXObject("Microsoft.XMLHTTP")
        }
        return function() {
            return t
        }
    }(), p = function(n, t) {
        var i = it();
        i && (i.open("GET", n, !0), i.onreadystatechange = function() {
            i.readyState === 4 && (i.status === 200 || i.status === 304) && t(i.responseText)
        }, i.readyState !== 4) && i.send(null)
    }, w = function(n) {
        return n.replace(t.regex.minmaxwh, "").match(t.regex.other)
    };
    if (t.ajax = p, t.queue = f, t.unsupportedmq = w, t.regex = {media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,only: /(only\s+)?([a-zA-Z]+)\s?/,minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other: /\([^\)]*\)/g}, t.mediaQueriesSupported = n.matchMedia && n.matchMedia("only all") !== null && n.matchMedia("only all").matches, !t.mediaQueriesSupported) {
        var i = n.document, r = i.documentElement, e = [], o = [], u = [], c = {}, b = 30, s = i.getElementsByTagName("head")[0] || r, rt = i.getElementsByTagName("base")[0], h = s.getElementsByTagName("link"), l, k, a, v = function() {
            var f, t = i.createElement("div"), n = i.body, o = r.style.fontSize, e = n && n.style.fontSize, u = !1;
            return t.style.cssText = "position:absolute;font-size:1em;width:1em", n || (n = u = i.createElement("body"), n.style.background = "none"), r.style.fontSize = "100%", n.style.fontSize = "100%", n.appendChild(t), u && r.insertBefore(n, r.firstChild), f = t.offsetWidth, u ? r.removeChild(n) : n.removeChild(t), r.style.fontSize = o, e && (n.style.fontSize = e), a = parseFloat(f)
        }, y = function(t) {
            var rt = "clientWidth", ut = r[rt], ft = i.compatMode === "CSS1Compat" && ut || i.body[rt] || ut, p = {}, ct = h[h.length - 1], et = (new Date).getTime(), tt, g, nt, f, it;
            if (t && l && et - l < b) {
                n.clearTimeout(k);
                k = n.setTimeout(y, b);
                return
            }
            l = et;
            for (tt in e)
                if (e.hasOwnProperty(tt)) {
                    var c = e[tt], w = c.minw, d = c.maxw, ot = w === null, st = d === null, ht = "em";
                    !w || (w = parseFloat(w) * (w.indexOf(ht) > -1 ? a || v() : 1));
                    !d || (d = parseFloat(d) * (d.indexOf(ht) > -1 ? a || v() : 1));
                    c.hasquery && (ot && st || !(ot || ft >= w) || !(st || ft <= d)) || (p[c.media] || (p[c.media] = []), p[c.media].push(o[c.rules]))
                }
            for (g in u)
                u.hasOwnProperty(g) && u[g] && u[g].parentNode === s && s.removeChild(u[g]);
            u.length = 0;
            for (nt in p)
                p.hasOwnProperty(nt) && (f = i.createElement("style"), it = p[nt].join("\n"), f.type = "text/css", f.media = nt, s.insertBefore(f, ct.nextSibling), f.styleSheet ? f.styleSheet.cssText = it : f.appendChild(i.createTextNode(it)), u.push(f))
        }, d = function(n, i, r) {
            var h = n.replace(t.regex.comments, "").replace(t.regex.keyframes, "").match(t.regex.media), c = h && h.length || 0, l, a, f, v, u, p, b, s;
            for (i = i.substring(0, i.lastIndexOf("/")), l = function(n) {
                return n.replace(t.regex.urls, "$1" + i + "$2$3")
            }, a = !c && r, i.length && (i += "/"), a && (c = 1), f = 0; f < c; f++)
                for (a ? (v = r, o.push(l(n))) : (v = h[f].match(t.regex.findStyles) && RegExp.$1, o.push(RegExp.$2 && l(RegExp.$2))), p = v.split(","), b = p.length, s = 0; s < b; s++)
                    (u = p[s], w(u)) || e.push({media: u.split("(")[0].match(t.regex.only) && RegExp.$2 || "all",rules: o.length - 1,hasquery: u.indexOf("(") > -1,minw: u.match(t.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),maxw: u.match(t.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")});
            y()
        }, g = function() {
            if (f.length) {
                var t = f.shift();
                p(t.href, function(i) {
                    d(i, t.href, t.media);
                    c[t.href] = !0;
                    n.setTimeout(function() {
                        g()
                    }, 0)
                })
            }
        }, nt = function() {
            for (var r = 0; r < h.length; r++) {
                var i = h[r], t = i.href, u = i.media, e = i.rel && i.rel.toLowerCase() === "stylesheet";
                !t || !e || c[t] || (i.styleSheet && i.styleSheet.rawCssText ? (d(i.styleSheet.rawCssText, t, u), c[t] = !0) : (/^([a-zA-Z:]*\/\/)/.test(t) || rt) && t.replace(RegExp.$1, "").split("/")[0] !== n.location.host || (t.substring(0, 2) === "//" && (t = n.location.protocol + t), f.push({href: t,media: u})))
            }
            g()
        };
        nt();
        t.update = nt;
        t.getEmValue = v;
        n.addEventListener ? n.addEventListener("resize", tt, !1) : n.attachEvent && n.attachEvent("onresize", tt)
    }
}(this)
