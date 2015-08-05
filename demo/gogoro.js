angular.module("gogoro.partial.GaContentTracking", []).service("GATrackingService", function() {
  var i = !1,
    r, n, t, u = [],
    f = document.title;
  this.init = function(f) {
    t = f;
    n = t.id;
    r = $("#" + t.id);
    r.length > 0 ? (i === !1 ? ga("send", "event", n, " PageLoaded") : console.log(n + " page loaded"), jQuery.inArray(n, u) != -1 || (this._switcher(n), u.push(n))) : console.log("The ID of " + n + " was not exist!!!")
  };
  this._switcher = function(n) {
    switch (n) {
      case "faster":
        this._trackingFaster(n);
        break;
      case "smarter":
        this._trackingSmarter(n);
        break;
      case "easier":
        this._trackingEasier(n);
        break;
      case "customize":
        this._trackingCustomize(n)
    }
  };
  this._trackingFaster = function(n) {
    var t = n,
      i = {
        scrolling: "scrolling",
        play: "play"
      }, r = [{
        "class": ".module-faster-0-site-intro",
        category: t,
        action: i.scrolling,
        label: "site-intro"
      }, {
        "class": ".module-faster-1-page-intro",
        category: t,
        action: i.scrolling,
        label: "page-intro"
      }, {
        "class": ".module-faster-2-clean-video",
        category: t,
        action: i.scrolling,
        label: "clean-video"
      }, {
        "class": ".module-faster-3-summary-info",
        category: t,
        action: i.scrolling,
        label: "summary-info"
      }, {
        "class": ".module-faster-4-performance-hero",
        category: t,
        action: i.scrolling,
        label: "performance-hero"
      }, {
        "class": ".module-faster-5-powertrain",
        category: t,
        action: i.scrolling,
        label: "powertrain"
      }, {
        "class": ".module-faster-7-comparison-infographic",
        category: t,
        action: i.scrolling,
        label: "comparison-infographic"
      }, {
        "class": ".module-faster-8-control-hero",
        category: t,
        action: i.scrolling,
        label: "control-hero"
      }, {
        "class": ".module-faster-9-chassis",
        category: t,
        action: i.scrolling,
        label: "chassis"
      }, {
        "class": ".module-faster-10-suspension",
        category: t,
        action: i.scrolling,
        label: "suspension"
      }, {
        "class": ".module-faster-11-compound-tire",
        category: t,
        action: i.scrolling,
        label: "compound-tire"
      }, {
        "class": ".module-faster-12-13-balance-lean-angle",
        category: t,
        action: i.scrolling,
        label: "balance-lean-angle"
      }, {
        "class": ".module-faster-14-aerodynamic-design",
        category: t,
        action: i.scrolling,
        label: "aerodynamic-design"
      }, {
        "class": ".module-faster-15-waterproof",
        category: t,
        action: i.scrolling,
        label: "waterproof"
      }, {
        "class": ".module-faster-16-design-ethos",
        category: t,
        action: i.scrolling,
        label: "design-ethos"
      }];
    this._buildScrollingContentTracking(r)
  };
  this._trackingSmarter = function(n) {
    var t = n,
      i = {
        scrolling: "scrolling",
        play: "play"
      }, r = [{
        "class": ".module-smarter-1-page-intro",
        category: t,
        action: i.scrolling,
        label: "page-intro"
      }, {
        "class": ".module-smarter-2-clean-video",
        category: t,
        action: i.scrolling,
        label: "clean-video"
      }, {
        "class": ".module-smarter-3-summary-info",
        category: t,
        action: i.scrolling,
        label: "summary-info"
      }, {
        "class": ".module-smarter-4-ride-smart",
        category: t,
        action: i.scrolling,
        label: "ride-smart"
      }, {
        "class": ".module-smarter-4a-ride-smart",
        category: t,
        action: i.scrolling,
        label: "4a-ride-smart"
      }, {
        "class": ".module-smarter-4b-smart-mode-chart",
        category: t,
        action: i.scrolling,
        label: "smart-mode-chart"
      }, {
        "class": ".module-smarter-5-gogoro-app",
        category: t,
        action: i.scrolling,
        label: "gogoro-app"
      }, {
        "class": ".module-smarter-6-smart-battery",
        category: t,
        action: i.scrolling,
        label: "smart-battery"
      }, {
        "class": ".module-smarter-7-vm",
        category: t,
        action: i.scrolling,
        label: "vm"
      }, {
        "class": ".module-smarter-8-smart-vision",
        category: t,
        action: i.scrolling,
        label: "smart-vision"
      }, {
        "class": ".module-smarter-auto-blinker-off",
        category: t,
        action: i.scrolling,
        label: "auto-blinker-off"
      }, {
        "class": ".module-smarter-9-12-iq-system",
        category: t,
        action: i.scrolling,
        label: "iq-system"
      }, {
        "class": ".module-smarter-13-design-ethos",
        category: t,
        action: i.scrolling,
        label: "design-ethos"
      }];
    this._buildScrollingContentTracking(r)
  };
  this._trackingEasier = function(n) {
    var t = n,
      i = {
        scrolling: "scrolling",
        play: "play"
      }, r = [{
        "class": ".module-easier-1-page-intro",
        category: t,
        action: i.scrolling,
        label: "page-intro"
      }, {
        "class": ".module-easier-2-clean-video",
        category: t,
        action: i.scrolling,
        label: "clean-video"
      }, {
        "class": ".module-easier-3-summary-info",
        category: t,
        action: i.scrolling,
        label: "summary-info"
      }, {
        "class": ".module-easier-4-all-you-can-ride",
        category: t,
        action: i.scrolling,
        label: "all-you-can-ride"
      }, {
        "class": ".module-easier-6-map",
        category: t,
        action: i.scrolling,
        label: "map"
      }, {
        "class": ".module-easier-7-service-hero",
        category: t,
        action: i.scrolling,
        label: "service-hero"
      }, {
        "class": ".module-easier-8-radical-simplicity",
        category: t,
        action: i.scrolling,
        label: "radical-simplicity"
      }, {
        "class": ".module-easier-8-center-lock",
        category: t,
        action: i.scrolling,
        label: "center-lock"
      }, {
        "class": ".module-easier-8-quick-fix",
        category: t,
        action: i.scrolling,
        label: "quick-fix"
      }, {
        "class": ".module-easier-10-12-network-sos-service-staff",
        category: t,
        action: i.scrolling,
        label: "network-sos-service-staff"
      }, {
        "class": ".module-easier-13-design-ethos",
        category: t,
        action: i.scrolling,
        label: "design-ethos"
      }];
    this._buildScrollingContentTracking(r)
  };
  this._trackingCustomize = function(n) {
    var t = n,
      i = {
        scrolling: "scrolling",
        play: "play"
      }, r = [{
        "class": ".module-customize-1-page-intro",
        category: t,
        action: i.scrolling,
        label: "page-intro"
      }, {
        "class": ".module-customize-2-clean-video",
        category: t,
        action: i.scrolling,
        label: "clean-video"
      }, {
        "class": ".module-customize-3-summary-info",
        category: t,
        action: i.scrolling,
        label: "summary-info"
      }, {
        "class": ".module-customize-4-dashboard",
        category: t,
        action: i.scrolling,
        label: "dashboard"
      }, {
        "class": ".module-customize-5-lighting-themes",
        category: t,
        action: i.scrolling,
        label: "lighting-themes"
      }, {
        "class": ".module-customize-6-sounds-themes",
        category: t,
        action: i.scrolling,
        label: "sounds-themes"
      }, {
        "class": ".module-customize-9-design-ethos",
        category: t,
        action: i.scrolling,
        label: "design-ethos"
      }];
    this._buildScrollingContentTracking(r)
  };
  this._buildScrollingContentTracking = function(n) {
    angular.forEach(n, function(n) {
      new ScrollScene({
        triggerElement: $(n["class"]),
        duration: 0
      }).on("enter", function() {
        i === !1 ? ga("send", "event", n.category, n.action, n.label, 1) : (console.log("****************************"), console.log("Category:" + n.category), console.log("Class:" + n["class"]), console.log("Action:" + n.action), console.log("Label:" + n.label))
      }).addTo(new ScrollMagic)
    })
  }
});
angular.module("gogoro.partial.fallbackManager", []).factory("FallbackManagerFactory", ["$window",
  function(n) {
    return {
      init: function(t, i, r, u) {
        var f = this;
        f.useBreakPointMdForStardandMode = angular.isUndefined(u) ? !1 : u;
        r === undefined && (r = !1);
        f.setState(t, i, r);
        $(n).on("resize", function() {
          gogoro.App.currentState !== t.currentState ? f.setState(t, i, r) : f.useStandardOnFallbackForMd(r) === !0 && f.setState(t, i, r)
        })
      },
      isIE10OrLess: function() {
        return document.body.style.msTouchAction !== undefined || $("html.lt-ie10").length > 0
      },
      isFF: function() {
        return typeof InstallTrigger != "undefined"
      },
      useStandardOnFallbackForMd: function(n) {
        var t = this;
        return n === undefined && (n = !1), gogoro.App.currentState !== "fallback" || gogoro.App.getBreakpoint() !== "md" && gogoro.App.getBreakpoint() !== "sm" || t.useBreakPointMdForStardandMode !== !0 || n && t.isIE10OrLess() ? !1 : !0
      },
      setState: function(n, t, i) {
        var r = this;
        i === undefined && (i = !1);
        gogoro.App.currentState !== "standard" || i && r.isIE10OrLess() ? r.useStandardOnFallbackForMd(i) === !0 ? ($(t).removeClass("fallback").addClass("standard"), r.fallback.destroy(), r.standard.init()) : ($(t).addClass("fallback").removeClass("standard"), r.standard.destroy(), r.fallback.init()) : ($(t).removeClass("fallback").addClass("standard"), r.fallback.destroy(), r.standard.init());
        n.currentState = gogoro.App.currentState
      }
    }
  }
]);
angular.module("gogoro.partial.moduleImageSequence", []).controller("moduleImageSequenceController", ["$scope", "$element", "frameCount", "framePrefix",
  function(n, t, i, r) {
    for (var f, o = $(t), l = o.find("img.frame"), u = [], s = String(i).length, e = 2; e <= i; e++)
      f = "00" + String(e), f = f.substr(f.length - s, s), u.push(r + f + ".jpg");
    $.preloadimages(u);
    var h = {
      currImg: 0
    }, a = TweenMax.to(h, u.length / 15, {
        currImg: u.length - 1,
        roundProps: "currImg",
        repeat: 0,
        immediateRender: !0,
        ease: Linear.easeNone,
        onUpdate: function() {
          l.attr("src", u[h.currImg])
        },
        onComplete: function() {
          c.removeScene(v)
        }
      }),
      c = new ScrollMagic,
      v = new ScrollScene({
        triggerElement: o.find(".trigger"),
        duration: 0
      }).setTween(a).addTo(c)
  }
]);
angular.module("gogoro.partial.modulePageIntro", []).service("ModulePageIntroService", function() {
  this.createElementFadeInTween = function(n, t, i, r) {
    var u = {
      opacity: 1,
      delay: i,
      repeat: 0,
      immediateRender: !0,
      ease: Linear.easeNone
    };
    return TweenMax.fromTo(n, t, {
      opacity: 0
    }, $.extend(u, r))
  };
  this.createElementFadeOutTween = function(n, t, i, r) {
    var u = {
      opacity: 0,
      delay: i,
      repeat: 0,
      immediateRender: !1,
      ease: Linear.easeNone
    };
    return TweenMax.to(n, t, $.extend(u, r))
  };
  this.createTitleFadeInTween = function(n, t) {
    var i = $(n);
    return this.createElementFadeInTween(i, .75, .5, {
      onComplete: t
    })
  };
  this.createTitleStaggeredFadeTween = function(n, t) {
    var u = this,
      i = $(n).find(".title-wrapper tspan"),
      f = .5,
      e = .5,
      r = new TimelineMax,
      o = {
        onComplete: t
      };
    return i.each(function(n, t) {
      r.add(u.createElementFadeInTween(t, f, e, n === i.length - 1 ? o : null))
    }), r
  };
  this.createBodyFadeInTween = function(n, t, i) {
    i === undefined && (i = 2);
    var f = $(n),
      r = f.find(".body"),
      e = .225 + i,
      o = .15 + i,
      s = TweenMax.fromTo(r, .45 * 2, {
        opacity: 0
      }, {
        opacity: 1,
        delay: e,
        repeat: 0,
        immediateRender: !0,
        ease: Cubic.easeIn
      }),
      h = TweenMax.fromTo(r, .3 * 2, {
        bottom: 0
      }, {
        bottom: "74px",
        delay: o,
        repeat: 0,
        immediateRender: !0,
        ease: Linear.easeOut,
        onComplete: function() {
          t && t()
        }
      }),
      u = new TimelineMax;
    return u.insert(s).insert(h), u
  }
});
angular.module("gogoro.partial.moduleSummaryInfo", []).controller("ModuleSummaryInfoController", ["$scope", "$element",
  function(n, t) {
    var i = .3,
      r = TweenMax.staggerFromTo($(t).find(".title"), i, {
        opacity: 0,
        "margin-left": "-10%"
      }, {
        opacity: 1,
        "margin-left": 0,
        repeat: 0,
        immediateRender: !0,
        ease: Linear.easeNone
      }, i),
      u;
    this.controller = new ScrollMagic;
    u = new ScrollScene({
      triggerElement: t,
      duration: 0
    }).setTween(r).addTo(this.controller)
  }
]);
angular.module("gogoro.partial.moduleVideo", []).controller("ModuleVideoController", ["$scope", "$element", "$window",
  function(n, t, i) {
    n.playVideo = function() {
      r[0].play()
    };
    var o = function() {
      var t = u.width(),
        i = u.height();
      f.width(t);
      f.height(i);
      var o = t / e,
        h = i / s,
        n = o > h ? o : h;
      r.width(n * e);
      r.height(n * s);
      r.css({
        marginLeft: -(n * e) / 2
      })
    }, u = $(t),
      f = u.children(".video-viewport"),
      r = f.children("video"),
      e = r.attr("width"),
      s = r.attr("height");
    $(i).resize(o);
    o()
  }
]).controller("ModuleVideoFixedHeightController", ["$scope", "$element", "$window",
  function(n, t, i) {
    n.playVideo = function() {
      r[0].play()
    };
    var f = function() {
      var i = o,
        t = e.height(),
        n;
      u.width(i);
      u.height(t);
      n = t / s;
      r.width(n * o);
      r.height(n * s)
    }, e = $(t),
      u = e.children(".video-viewport"),
      r = u.children("video"),
      o = r.attr("width"),
      s = r.attr("height");
    $(i).resize(f);
    f()
  }
]);
angular.module("gogoro.partial.moduleVideoSlider", []).controller("ModuleVideoSliderController", ["$scope", "$element", "$window", "$timeout", "videoFrameTimes", "shouldCrossFade", "$timeout",
  function(n, t, i, r, u, f, r) {
    var y = $(t),
      s = y.children(".module-video-slider-content"),
      p = function() {
        s.find(".video-viewport-wrapper").width(y.width())
      }, c, v, k;
    n.playFrame = 0;
    n.playNext = !1;
    var w = function(n) {
      var i, t, s, v;
      if (e !== n)
        if (i = e, e = n, c.children(".page").removeClass("active").eq(e).addClass("active"), t = l.eq(e), l.not(":eq(" + e + ")").stop().fadeTo(f ? "fast" : 0, 0).data("fading", !1), o.off("timeupdate", h), o.off("ended", h), i >= e || e - i > 1)
          s = u[e], o[0].pause(), o[0].readyState > 0 && (o[0].currentTime = s), t.data("fading") || t.data("fading", !0).stop().delay(200).fadeTo("fast", 1), v = e, r(function() {
            v === e && o[0].readyState > 0 && (o[0].currentTime = s)
          }, 250);
        else {
          f && (t.data("fading") || t.data("fading", !0).stop().fadeTo("fast", 1));
          o[0].readyState > 0 && (o[0].currentTime = u[e - 1]);
          o.on("timeupdate", h);
          if (e === a - 1)
            o.on("ended", h);
          o[0].play()
        }
    }, h = function(n) {
        if (o[0].currentTime >= u[e] || n.type === "ended") {
          o[0].pause();
          o[0].readyState > 0 && (o[0].currentTime = u[e]);
          var t = l.eq(e);
          f || t.data("fading") || t.data("fading", !0).stop().fadeTo("fast", 1);
          o.off("timeupdate", h);
          o.off("ended", h)
        }
      }, l = s.children(".frame"),
      e = 0,
      a = u.length,
      b = s.find(".video-viewport"),
      o = b.children("video");
    for (b.width(o.attr("width")), c = s.find(".frame-pagination"), v = 0; v < a; v++)
      c.append('<div class="page">');
    c.children(".page").on("click", function(n) {
      var t = c.children(".page").index(this);
      w(t);
      n.stopPropagation()
    }).eq(e).addClass("active");
    s.on("click", function() {
      w(e === a - 1 ? 0 : e + 1)
    });
    $(i).resize(function() {
      clearTimeout(k);
      k = setTimeout(p, 100)
    });
    p()
  }
]);
angular.module("gogoro.partial.tabbarView", []).directive("tabbar", ["$window",
  function(n) {
    return {
      scope: {},
      link: function(t, i) {
        var s = 0,
          u = 0,
          f = $(i).offset().top,
          r = $(i).find(".tabbar-wrapper"),
          v = r.find(".tabbar"),
          h = $(i).data("current-action"),
          c = $(i).find("a");
        c.each(function() {
          var n = $(this).data("action-name");
          n == h && $(this).addClass("active")
        });
        $(n).scrollTop() >= f && r.addClass("fixed");
        var l = function() {
          f = $(i).offset().top
        }, a = function(n) {
            var t = n.attr("class").split(" ")[0];
            $(".tabbar-container").clone().addClass("cloned").addClass(t).appendTo("body");
            $("<i>", {
              "class": "icon icon-close"
            }).appendTo(".tabbar-container.cloned .tabbar-wrapper");
            $(".tabbar-container.cloned .icon-close").on("click", function() {
              e()
            });
            $(".tabbar-container.cloned").velocity("fadeIn", {
              duration: 150,
              ease: "easeOut"
            });
            $(".tabbar-container.cloned .tabbar").velocity("transition.expandIn", {
              delay: 100,
              duration: 150,
              ease: "easeOut",
              display: "table-cell"
            });
            $(".tabbar-container.cloned a, .tabbar-overlay").on("click", function() {
              $(i).removeClass("active");
              e()
            })
          }, e = function() {
            $(".tabbar-container.cloned").velocity("fadeOut", {
              duration: 250,
              complete: function() {
                $(".tabbar-container.cloned").remove()
              }
            })
          }, o = function() {
            $("a", r).unbind().on("click", function(n) {
              n.preventDefault();
              var t = $(this);
              a(t)
            })
          };
        gogoro.App.getBreakpoint() === "xs" && o();
        l();
        $(n).on("scroll", function() {
          u = $(n).scrollTop();
          u >= f ? r.addClass("fixed") : r.removeClass("fixed");
          s = u
        });
        $(n).on("resize", function() {
          gogoro.App.getBreakpoint() === "xs" ? o() : $("a", r).unbind()
        })
      }
    }
  }
])




gogoroApp.controller("FasterController", ["$scope", "$window", "$rootScope", "GATrackingService", function(n, t, i, r) {
        function e() {
            gogoro.App.getState() !== "standard" || u || ($("video").each(function(n) {
                $(this).append('<source src="' + videoSetting[n].sources[0].url + '" type="' + videoSetting[n].sources[0].type + '"><\/source>');
                $(this).append('<source src="' + videoSetting[n].sources[1].url + '" type="' + videoSetting[n].sources[1].type + '"><\/source>')
            }), u = !0)
        }
        var f, o, u;
        $(window).scrollTo(0, 0);
        f = {id: "faster"};
        r.init(f);
        ga("send", "pageview", "/#/faster");
        $("body").hasClass("navigation-active") && $(".navbar-toggle").click();
        o = new gogoro.common.ResponsiveImages;
        Modernizr.svg || $('img[src*="svg"]').each(function() {
            var n = $(this);
            n.attr("src", function() {
                return n.attr("src").replace(".svg", ".png")
            })
        });
        videoSetting = [{sources: [{url: "//movies.gogoroapp.com/module-faster-5-powertrain.webm",type: "video/webm"}, {url: "//movies.gogoroapp.com/module-faster-5-powertrain-20150117.mp4",type: "video/mp4"}]}, {sources: [{url: "//movies.gogoroapp.com/module-faster-9-chassis.webm",type: "video/webm"}, {url: "//movies.gogoroapp.com/module-faster-9-chassis_2015-01-19.mp4",type: "video/mp4"}]}, {sources: [{url: "//movies.gogoroapp.com/faster-10-scooter-xray.webm",type: "video/webm"}, {url: "//movies.gogoroapp.com/faster-10-scooter-xray.mp4",type: "video/mp4"}]}, {sources: [{url: "//movies.gogoroapp.com/waterProof_revised.webm",type: "video/webm"}, {url: "//movies.gogoroapp.com/waterProof_revised.mp4",type: "video/mp4"}]}];
        u = !1;
        e();
        $(window).on("resize", function() {
            e()
        })
    }]);
gogoroApp.controller("moduleFaster0SiteIntroController", ["$scope", "$element", "FallbackManagerFactory", "$rootScope", function(n, t, i) {
        angular.extend(n, i);
        n.playHeroVideo = function() {
            gogoro.AppIntro.ytplayer.playVideo();
            $(".nav-bar-stop").show();
            $(".navbar").hide();
            $(".video_hero .container").addClass("transparent")
        };
        n.goVideo = function() {
            gogoro.AppIntro.enableMove && gogoro.AppIntro.LoadMovieClip()
        };
        n.skipVideo = function() {
            gogoro.AppIntro.removeTakeover()
        };
        n.standard = {init: function() {
                function c() {
                    var t, i;
                    console.log("videoProgress");
                    n.buffered.length > 0 && (t = Math.ceil(100 * n.buffered.end(0) / n.duration), u.text(t + "%"), parseInt(n.buffered.end(0) / n.duration * 100) == 100 && (n.pause(), n.currentTime = 0, $(n).removeAttr("autoplay"), $(n).off("progress", c), gogoro.AppIntro.enableMove = !0, i = new TimelineMax, i.to(s, .2, {opacity: 0}).to(u, .2, {opacity: 0}).to(o, .2, {opacity: 1}).to(h, .2, {opacity: 1,onComplete: function() {
                            s.hide();
                            u.hide()
                        }}), TweenMax.ticker.removeEventListener("tick", w)))
                }
                function w() {
                    l = f * v;
                    p.style.backgroundPosition = "0 -" + l + "px";
                    f >= y ? f = 0 : f++
                }
                function a() {
                    if (r = i.height(), r > 800) {
                        var n = (r - 790) / 10;
                        e.stop().velocity({bottom: -n + "px"}, 0)
                    } else
                        r > 670 ? e.stop().velocity({bottom: "20px"}, 500) : e.stop().velocity({bottom: "40px"}, 500)
                }
                var i = $(t), e = $(".intro-open-wrap"), o = $("#intro-open"), h = $(".icon-arrow-txt"), s = $("#loading-cycle"), b = $(".vertical-center-flex"), r = i.height(), u = i.find(".sprite-loading-num"), n;
                if ($(".navbar-header").removeClass("white"), n = $("#powertrainVideo").get(0), gogoro.AppIntro.enableMove = !0, gogoro.AppIntro.enableMove && (s.css("display", "none").css("opacity", 0), u.css("display", "none").css("opacity", 0), o.css("opacity", 1), h.css("display", "none").css("opacity", 0)), !gogoro.AppIntro.enableMove)
                    $(n).on("progress", c);
                o.on("click", function() {
                    gogoro.AppIntro.removeTakeover()
                });
                i.on("click", function() {
                    gogoro.AppIntro.removeTakeover()
                });
                var f = 0, v = 30, y = 40, p = document.getElementById("loading-cycle"), l = 0;
                a();
                $(window).resize(function() {
                    a()
                })
            },destroy: function() {
                $(".module-faster-0-site-intro").unbind("mousewheel DOMMouseScroll MozMousePixelScroll");
                $(".module-faster-0-site-intro").css({display: "none"})
            }};
        n.fallback = {init: function() {
                var u = $(t), f = $(".intro-open-wrap"), n = $("#intro-open"), e = $(".icon-arrow-txt"), r = $("#loading-cycle"), i = $(".sprite-loading-num");
                !isMobile.any;
                gogoro.App.enableMove = !0;
                r.hide();
                i.hide();
                n.css("opacity", 1);
                i.css("opacity", 1);
                n.on("click", function() {
                    gogoro.App.removeTakeover()
                })
            },destroy: function() {
            }};
        n.init(n, t, !0)
    }]);
gogoroApp.controller("moduleFaster1PageIntroController", ["$scope", "$element", "$interval", "FallbackManagerFactory", "ModulePageIntroService", "$rootScope", function(n, t, i, r, u, f) {
        angular.extend(n, r);
        var e = $(t);
        n.isIE10OrLess() || e.find(".title-wrapper").append(e.find("script.svg").html());
        n.standard = {init: function() {
                f.finishPlay = !1;
                $(".navbar-header").removeClass("white");
                var r, o = !1, s = 2, e = 4.2 * 1e3 / s;
                imgix.fluid({fluidClass: "background-image-standard"});
                var h = function() {
                    if (!o && !r) {
                        var h = new Date(Date.now()), n = new Date(Date.now() + e), u = $(t).find("svg.kmh text tspan").eq(2), c = $(t).find("svg.kmh text tspan").eq(3);
                        r = i(function() {
                            var v = new Date, w = (e - Math.max(0, n - v)) * s, b = Math.floor(w / 1e3), a = b.toString(), k, l, d, y, p;
                            (a.length === 1 && (a = "0" + a), k = Math.floor((w - b * 1e3) / 10), l = k.toString(), l.length === 1 && (l = "0" + l), d = a + "." + l, $(t).find("svg.title text tspan").each(function(n) {
                                this.textContent = d[n]
                            }), y = Math.min(50, Math.round(50 * (v - h) / e)), p = Math.floor(y / 10), u[0]) && (u[0].textContent = p, c[0].textContent = y - p * 10, v > n && (i.cancel(r), r = null, o = !0, f.finishPlay = !0))
                        }, 1e3 / 30)
                    }
                }, c = n.isFF() ? ".title-wrapper text" : ".title-wrapper tspan", l = u.createElementFadeInTween($(t).find(c), 2.5, .5, {ease: Quad.easeIn,onStart: h}), a = u.createBodyFadeInTween(t, null, .5);
                this.timeline = new TimelineMax({delay: .25});
                this.timeline.insert(a).insert(l).play()
            },destroy: function() {
                delete f.finishPlay;
                this.timeline && (this.timeline.pause(0, !0).remove(), this.timeline = null);
                $(".body", t).attr("style", "")
            }};
        n.fallback = {init: function() {
                $(".navbar-header").removeClass("white");
                imgix.onready(function() {
                    imgix.fluid({fluidClass: "background-image-fallback"})
                })
            },destroy: function() {
            }};
        n.init(n, t, !0)
    }]);
gogoroApp.controller("moduleFaster2CleanVideoController", ["$scope", "$element", "$window", "$controller", "FallbackManagerFactory", function(n, t, i, r, u) {
        angular.extend(n, u);
        n.standard = {init: function() {
                $(".video", t).css({display: "block"});
                $.extend(this, r("ModuleVideoController", {$scope: n,$element: t,$window: i}));
                var u = new gogoro.common.VideoModal
            },destroy: function() {
                $(".video", t).css({display: "none"})
            }};
        n.fallback = {init: function() {
                var n = new gogoro.common.VideoModal
            },destroy: function() {
            }};
        n.init(n, t)
    }]);
gogoroApp.controller("moduleFaster3SummaryInfoController", ["$scope", "$element", "$controller", "FallbackManagerFactory", function(n, t, i, r) {
        angular.extend(n, r);
        n.standard = {init: function() {
                $.extend(this, i("ModuleSummaryInfoController", {$scope: n,$element: t}))
            },destroy: function() {
                this.controller && (this.controller.destroy(!0), this.contoller = null)
            }};
        n.fallback = {init: function() {
                if (gogoro.App.getBreakpoint() !== "lg") {
                    $(".row", t).slick({slide: ".slide",dots: !0,arrows: !1,accessibility: !0,infinite: !0,speed: 650,cssEase: "ease",slidesToShow: 1,draggable: !1});
                    $(".row .slide", t).on("click", function() {
                        $(".row", t).slickNext()
                    })
                }
            },destroy: function() {
                $(".row", t).unslick()
            }};
        n.init(n, t)
    }]);
gogoroApp.controller("moduleFaster4PerformanceHeroController", ["$scope", "$element", "$controller", "FallbackManagerFactory", function(n, t, i, r) {
        angular.extend(n, r);
        n.standard = {init: function() {
                var n = .3, i = function() {
                }, r = TweenMax.staggerFromTo($(t).find("h3"), n, {opacity: 0,"margin-left": "-10%"}, {opacity: 1,"margin-left": 0,repeat: 0,immediateRender: !0,ease: Linear.easeNone}, n), u;
                this.controller = new ScrollMagic;
                u = new ScrollScene({triggerElement: t,duration: 400}).setTween(r).on("enter leave", function() {
                    i()
                }).addTo(this.controller)
            },destroy: function() {
            }};
        n.fallback = {init: function() {
            },destroy: function() {
            }};
        n.init(n, t)
    }]);
gogoroApp.controller("moduleFaster5PowertrainController", ["$rootScope", "$scope", "$element", "$window", "$document", "$timeout", "FallbackManagerFactory", "$state", function(n, t, i, r, u, f, e) {
        angular.extend(t, e);
        var s = !1, o = function(n, t) {
            s && console.log(n, t)
        };
        t.standard = {init: function() {
                function st() {
                    var n = Math.min(l, e + 1);
                    n === 6 && (n = 0);
                    t.playing && u.off("timeupdate", c);
                    t.playing = !1;
                    k(n);
                    h.eq(e).addClass("active")
                }
                var h, d, yt, pt, g, rt, ut;
                $(".powertrain-blocker").css({display: "block"});
                var nt = this, ft = !1, v = [0, 2, 5, 12, 16, 24], ht = [0, -.5, -.5, -2.33, -1.5, -5.5];
                t.playing = !1;
                t.currentPlayFrame = 0;
                var y = $(i), bt = y.height(), ct = $(i).siblings().eq(3), lt = $(i).prev(), s = y.find(".module-video-scroller-content"), tt = y.find(".module-video-scroller-backgrounds"), b, et = 0, it = function() {
                    var n, t;
                    ft || (b = s.height(), n = y.innerWidth(), et < 2 && (n = n - 17, et++), s.width(n), w.width(n), t = (b - a.height()) / 2 + 100, o("moduleHeight", b), o("$videoViewportEl.height()", a.height()), w.css({"margin-top": "-330px"}), ot())
                }, k = function(n) {
                    var r, i, o, a;
                    if (!t.playing && (n < 0 && (n = 0), n > 8 && (n = 7), !t.playing) && e !== n && g && !(u[0].readyState < 4))
                        if (r = e, e = n, i = Math.min(e, l - 1), h.children(".page-wrapper").removeClass("active").eq(i).addClass("active"), s.focus(), o = p.eq(i), p.each(function(n, t) {
                            n !== i && $(t).stop().fadeTo(0, 0).data("fading", !1)
                        }), u.off("timeupdate", c), u.off("ended", c), t.playing = !0, r >= i || i - r > 1)
                            a = v[i], u[0].pause(), u[0].currentTime = a, f(function() {
                                i === Math.min(e, l - 1) && (u[0].currentTime = a, o.data("fading") || o.data("fading", !0).stop().fadeTo("fast", 1));
                                setTimeout(function() {
                                    t.playing = !1;
                                    t.currentPlayFrame = n
                                }, 500)
                            }, 500);
                        else {
                            u[0].currentTime = v[i - 1];
                            u[0].play();
                            u.on("timeupdate", c);
                            if (i === l - 1)
                                u.on("ended", c)
                        }
                }, c = function(n) {
                    var i;
                    u[0].currentTime >= v[e] || n.type === "ended" ? (u[0].pause(), u[0].currentTime = v[e], i = p.eq(e), i.data("fading") || i.data("fading", !0).stop().fadeTo("fast", 1), u.off("timeupdate", c), u.off("ended", c), t.currentPlayFrame += 1, setTimeout(function() {
                        t.playing = !1
                    }, 200)) : u[0].currentTime >= v[e] + ht[e] && (i = p.eq(e), i.data("fading") || i.data("fading", !0).stop().fadeTo("fast", 1))
                }, ot = function() {
                    if ($("#faster").is(":visible") && n.finishPlay && undefined != n.finishPlay && s.hasClass("pinned")) {
                        var t = l;
                        tt.children(".frame").each(function(n, i) {
                            var r = $(i);
                            n > 0 && n <= l && backgroundTop >= 0 && (t = Math.min(n - 1, t))
                        });
                        k(t)
                    }
                }, p = s.children(".frame"), e = 0, l = v.length, w = s.find(".video-viewport-wrapper"), a = w.children(".video-viewport"), u = a.children("video"), at = u.attr("width"), vt = u.attr("height");
                for (a.width(at).height(vt), this.controller = new ScrollMagic, h = s.find(".frame-pagination"), h.css("opacity", 1), d = 0; d < l; d++)
                    yt = p.eq(d).find(".title").html(), h.append('<div class="page-wrapper"><div class="page"><\/div><\/div>');
                h.children(".page-wrapper").on("click", function() {
                    var n = h.children(".page-wrapper").index(this);
                    return t.playing && (u.off("timeupdate", c), u.off("ended", c)), t.playing = !1, k(n), !1
                }).eq(e).addClass("active");
                u.on("playing", function() {
                    s.off("click");
                    h.velocity({display: "none",opacity: 0}, {duration: 200});
                    $(".module-video-scroller-content").css("cursor", "default")
                });
                u.on("pause", function() {
                    s.on("click", st);
                    h.velocity({display: "block",opacity: 1}, {duration: 500});
                    $(".module-video-scroller-content").css("cursor", "pointer")
                });
                s.on("click", st);
                if (pt = function() {
                    var t = $(window).height(), n = t - 770;
                    n = n > 300 ? 300 : n;
                    $(".frame-pagination-wrapper").css("bottom", "-" + n + "px")
                }, g = u[0].readyState === 4, !g) {
                    u[0].load();
                    u.on("canplaythrough", function() {
                        g = !0;
                        it()
                    })
                }
                ut = function() {
                    f.cancel(rt);
                    rt = f(it, 100)
                };
                $(r).on("resize", ut);
                it();
                var kt = (b - a.height()) / 2 + 100, wt = 1120, wt = 1160;
                w.css({clip: "rect(330px, " + a.width() + "px, " + wt + "px, 0)"});
                this.destroyVideoScroller = function() {
                    ft = !0;
                    f.cancel(rt);
                    nt.controller && (nt.controller.destroy(!0), nt.controller = null);
                    $(r).off("resize", ut);
                    $(r).off("scroll", ot);
                    h.children().remove();
                    s.off("click");
                    u.off("canplaythrough");
                    u.off("timeupdate");
                    u.off("ended");
                    k(0);
                    ct.velocity("stop").css({"margin-top": 0});
                    lt.velocity("stop").css({"margin-bottom": 0});
                    y.velocity("stop").css({height: "auto","margin-bottom": 0});
                    h.height({height: "auto"});
                    s.css({width: "auto"});
                    w.velocity("stop").css({clip: "auto","margin-top": "0",width: "auto",height: "auto"});
                    a.css({width: "auto",height: "auto"});
                    tt.find(".frame-pin .trigger").css({"margin-top": "0"});
                    tt.children(".frame").each(function(n, t) {
                        $(t).css({height: "auto"})
                    });
                    $(".powertrain-blocker").css({display: "none"})
                }
            },destroy: function() {
                this.destroyVideoScroller && this.destroyVideoScroller()
            }};
        t.fallback = {init: function() {
                $(".module-faster-5-content", i).css({display: "none"});
                $(".powertrain-blocker").css({display: "none"});
                $(".module-faster-5-fallback", i).css({display: "block"}).slick({slide: ".slide",dots: !0,arrows: !1,infinite: !0,speed: 650,cssEase: "ease",slidesToShow: 1,draggable: !1,onInit: function() {
                        imgix.onready(function() {
                            imgix.fluid()
                        })
                    }});
                $(".module-faster-5-fallback .slide", i).on("click", function() {
                    $(".module-faster-5-fallback", i).slickNext()
                })
            },destroy: function() {
                $(".module-faster-5-fallback", i).unslick().css({display: "none"});
                $(".module-faster-5-content", i).css({display: "block"})
            }};
        t.init(t, i, !0)
    }]);
gogoroApp.controller("moduleFaster7ComparisonInfographicController", ["$scope", "$element", "FallbackManagerFactory", function(n, t, i) {
        angular.extend(n, i);
        n.standard = {init: function() {
                function wt() {
                    tt.to(b, 3, {strokeDashoffset: 0}).to(k, 3, {strokeDashoffset: 0}, "-=3").to(d, 1, {opacity: 1}, "-=1.3").to(g, 1, {opacity: 1}, "-=0.3").to(nt, 1, {opacity: 1}, "-=0.3").to(o, .5, {opacity: 1,delay: w})
                }
                Modernizr.svg || console.log("svg not support");
                var c = function(n, t) {
                    var r = Math.floor(n), i = Math.floor((n * 1e3 - r * 1e3) / 10);
                    t.find(".time .second").text(r);
                    t.find(".time .millis").text("." + (i < 10 ? "0" + i : i))
                }, n = $(t), ft = n.find(".infographic .bars"), r = 2, l = n.find(".us"), u = l.find(".bar"), et = 4.2 / r, ot = TweenMax.fromTo(u, et, {width: 0}, {width: u.css("max-width"),roundProps: "width",repeat: 0,immediateRender: !0,ease: Linear.easeNone,onUpdateParams: ["{self}"],onUpdate: function(n) {
                        var t = n._time * r;
                        c(t, l)
                    }}), a = n.find(".them"), f = a.find(".bar"), v = ft.find(".them .bar-remainder"), st = 5.03 / r, ht = .5 * 1e3, ct = TweenMax.fromTo(f, st, {width: 0}, {width: f.css("max-width"),roundProps: "width",repeat: 0,immediateRender: !0,ease: Linear.easeNone,onUpdateParams: ["{self}"],onUpdate: function(n) {
                        var t = n._time * r;
                        c(t, a);
                        v.hide()
                    },onComplete: function() {
                        v.fadeIn(ht)
                    }}), lt = u.children(".title"), at = f.children(".title"), y = 1, vt = TweenMax.fromTo(lt, y, {opacity: 0}, {opacity: 1,delay: .66,repeat: 0,immediateRender: !0,ease: Linear.easeNone}), yt = TweenMax.fromTo(at, y, {opacity: 0}, {opacity: 1,repeat: 0,immediateRender: !0,ease: Linear.easeNone}), p = n.find(".image .punch-line"), w = .33, pt = TweenMax.fromTo(p, .5, {opacity: 0}, {opacity: 1,delay: w,repeat: 0,immediateRender: !0,ease: Linear.easeNone}), e = new TimelineMax;
                e.insert(ot).insert(ct).add(vt).add(yt).add(pt);
                this.controller = new ScrollMagic;
                var bt = new ScrollScene({triggerElement: t,duration: 0}).setTween(e).addTo(this.controller), b = $("#svg-gogoro-torque"), k = $("#svg-normal-torque"), d = $("#svg-redlines"), g = $("#svg-gogoro-text"), nt = $("#svg-normal-text"), o = $(".svg-stronger-center-box"), it = !1, tt = new TimelineMax, rt = n.find(".charts.acceleration"), ut = n.find(".charts.torque"), i = n.find(".theme-toggle a"), s = n.find(".acceleration-txt-wrap"), h = n.find(".torque-txt-wrap");
                i.eq(0).css("opacity", 1);
                i.eq(2).css("opacity", 1);
                h.velocity("stop").velocity("fadeOut", {duration: 0});
                s.velocity("stop").velocity("fadeIn", {duration: 0});
                i.on("click", function() {
                    i.css("opacity", .3);
                    $(this).data("chart") == "acceleration" ? (ut.velocity("stop").velocity("fadeOut", {duration: 0,complete: function() {
                            rt.velocity("stop").velocity("fadeIn", {duration: 0})
                        }}), h.velocity("stop").velocity("fadeOut", {duration: 0,complete: function() {
                            s.velocity("stop").velocity("fadeIn", {duration: 0})
                        }}), e.restart(), i.eq(0).css("opacity", 1), i.eq(2).css("opacity", 1), b.css("stroke-dasharray", 600).css("stroke-dashoffset", 600), k.css("stroke-dasharray", 600).css("stroke-dashoffset", 600), TweenMax.to(d, 0, {opacity: "0"}), TweenMax.to(g, 0, {opacity: 0}), TweenMax.to(nt, 0, {opacity: 0}), TweenMax.to(o, 0, {opacity: 0}), o.css("opacity", 0)) : (rt.velocity("stop").velocity("fadeOut", {duration: 50,complete: function() {
                            ut.velocity("stop").velocity("fadeIn", {duration: 450,complete: function() {
                                    it == !1 ? (setTimeout(function() {
                                        wt()
                                    }, 500), it = !0) : tt.restart()
                                }})
                        }}), s.velocity("stop").velocity("fadeOut", {duration: 0,complete: function() {
                            h.velocity("stop").velocity("fadeIn", {duration: 0})
                        }}), i.eq(1).css("opacity", 1), i.eq(3).css("opacity", 1), p.css("opacity", 0))
                })
            },destroy: function() {
                this.controller && (this.controller.destroy(!0), this.contoller = null)
            }};
        n.fallback = {init: function() {
                function a() {
                    gogoro.App.getBreakpoint() === "sm" && (e.prop("src", r + h[0]), u.text(o[0]), f.text(s[0]), l.show())
                }
                var i = $(t), c = i.find(".acceleration-txt-wrap"), l = i.find(".torque-txt-wrap"), u = c.find("h2"), f = c.find("p"), n = i.find(".theme-toggle a"), e = i.find(".firstlineimage"), r;
                if (l.css("opacity", 1), r = "//images.gogoroapp.com/", gogoro.Locale.lang == "zh-tw")
                    var o = ["鋒芒畢露", "一路領先"], s = ["性能模式下，0到50公里加速只要4.2秒，瞬間輸出100%的扭力。你總是保持領先，不被埋沒於車陣之中。", '<span class="graphik-light">Gogoro®<\/span>獨家研發的<span class="graphik-light">G1<\/span>馬達，從靜止狀態就瞬間釋放全部馬力。一起步就將對手遠遠拋開。'], h = ["faster-7-infographic.fallback_20150415_tw.png", "faster-7-torque.fallback_20150415_tw.png"];
                else
                    var o = ["First off the line", "Born to Lead"], s = ["Instant access to 100% power torque on demand. Our digital throttle in sport mode takes riders from 0-50 km/h in 4.2 seconds. You’ll lead the pack, every time.", "Gogoro’s G1 motor serves up full torque from 0 RPM. So while gas guzzling scooters are still busy revving up their engines, you’re probably already gone."], h = ["faster-7-infographic.fallback_20150415_en.png", "faster-7-torque.fallback_20150415_en.png"];
                $(".background-image.fallback.firstlineimage").show();
                $(".charts.acceleration").hide();
                n.eq(0).css("opacity", 1);
                n.on("click", function(t) {
                    t.preventDefault();
                    n.css("opacity", .3);
                    $(this).data("chart") == "acceleration" ? (n.eq(0).css("opacity", 1), n.eq(2).css("opacity", 1), e.prop("src", r + h[0]), u.text(o[0]), f.text(s[0])) : (n.eq(1).css("opacity", 1), n.eq(3).css("opacity", 1), e.prop("src", r + h[1]), u.text(o[1]), f.html(s[1]))
                });
                a();
                $(window).resize(function() {
                    a()
                })
            },destroy: function() {
                $(".background-image.fallback.firstlineimage").hide();
                $(".charts.acceleration").show()
            }};
        n.init(n, t, !0)
    }]);
gogoroApp.controller("moduleFasterControlHeroController", ["$scope", "$element", "$controller", "FallbackManagerFactory", function(n, t, i, r) {
        angular.extend(n, r);
        n.standard = {init: function() {
                var n = .3, i = function() {
                }, r = TweenMax.staggerFromTo($(t).find("h3"), n, {opacity: 0,"margin-left": "-10%"}, {opacity: 1,"margin-left": 0,repeat: 0,immediateRender: !0,ease: Linear.easeNone}, n), u;
                this.controller = new ScrollMagic;
                u = new ScrollScene({triggerElement: t,duration: 400}).setTween(r).on("enter leave", function() {
                    i()
                }).addTo(this.controller)
            },destroy: function() {
            }};
        n.fallback = {init: function() {
            },destroy: function() {
            }};
        n.init(n, t)
    }]);
gogoroApp.controller("moduleFaster9ChassisController", ["$scope", "$element", "$window", "$timeout", "$controller", "FallbackManagerFactory", function(n, t, i, r, u, f) {
        angular.extend(n, f);
        imgix.fluid({fluidClass: "faster-9-background-image"});
        n.standard = {init: function() {
                $(".module-video-slider-content", t).css({display: "block"});
                $.extend(this, u("ModuleVideoSliderController", {$scope: n,$element: t,$window: i,$timeout: r,videoFrameTimes: [1, 5, 14.5, 23, 30],shouldCrossFade: !0}))
            },destroy: function() {
                $(".module-video-slider-content", t).unbind();
                $(".frame-pagination div", t).remove();
                $(".frame", t).attr("style", "")
            }};
        n.fallback = {init: function() {
                $(".module-video-slider-content", t).slick({slide: ".frame",dots: !0,arrows: !1,infinite: !0,speed: 650,cssEase: "ease",slidesToShow: 1,draggable: !1,onInit: function() {
                        imgix.onready(function() {
                            imgix.fluid()
                        })
                    }});
                $(".module-video-slider-content .frame", t).on("click", function() {
                    $(".module-video-slider-content", t).slickNext()
                })
            },destroy: function() {
                $(".module-video-slider-content", t).unslick().css({display: "none"})
            }};
        n.init(n, t)
    }]);
gogoroApp.controller("moduleFaster10SuspensionController", ["$scope", "$window", "$element", "$timeout", function(n, t, i, r) {
        var u = {configure: {currentState: gogoro.App.getBreakpoint()},init: function() {
                var n = this;
                n.getState();
                $(window).on("resize", function() {
                    n.configure.currentState !== gogoro.App.getBreakpoint() && (n.configure.currentState = gogoro.App.getBreakpoint(), n.getState())
                })
            },getState: function() {
                var n = this;
                n.configure.currentState === "lg" || n.configure.currentState === "md" ? (n.fallback.destroy(), n.standard.init()) : (n.configure.currentState === "sm" || n.configure.currentState === "xs") && (n.standard.destroy(), n.fallback.init())
            },standard: {init: function() {
                    function f(i) {
                        var f, r, o;
                        if (u.isAnimating)
                            return !1;
                        u.isAnimating = !0;
                        f = u.currentItem;
                        n.currentItem = f;
                        r = function() {
                            return i ? i * 1 + 1 : f + 1
                        };
                        o = $(".module-faster-10-suspension .timeline");
                        setTimeout(function() {
                            o.removeClass("current-item-1 current-item-2 current-item-3 current-item-4");
                            o.addClass("current-item-" + r())
                        }, 350);
                        $(".content-wrapper.content-" + f).velocity("fadeOut", {duration: 350});
                        $(".content-wrapper.content-" + r()).velocity("fadeIn", {delay: 250,duration: 350});
                        r() === 4 && $(".content-wrapper.content-1").velocity("fadeIn", {duration: 0});
                        $(".timeline-control").velocity({left: $(t).outerWidth() / 2 - u.centerPoint["item_" + r()]}, {duration: 700,easing: "ease",complete: function() {
                                u.currentItem === u.totalItems && ($(this).css({left: $(t).outerWidth() / 2 - u.centerPoint.item_1}), u.currentItem = 1);
                                u.isAnimating = !1
                            }});
                        u.currentIndicator = r();
                        u.currentIndicator === u.totalItems && (u.currentIndicator = 1);
                        $(".timeline-indicator li i.icon-bullet-active").removeClass("icon-bullet-active").addClass("icon-bullet-inactive");
                        $(".timeline-indicator li i:eq(" + (u.currentIndicator - 1) + ")").removeClass("icon-bullet-inactive").addClass("icon-bullet-active");
                        r() <= u.totalItems && (u.currentItem = r());
                        e()
                    }
                    function e() {
                        return
                    }
                    imgix.fluid({fluidClass: "faster-10-standard"});
                    $(".timeline").css({display: "block"});
                    var u = {totalItems: 4,currentItem: 1,centerPoint: {item_1: gogoro.App.getBreakpoint() === "xs" ? 640 : 1280,item_2: gogoro.App.getBreakpoint() === "xs" ? 120 : 40,item_3: gogoro.App.getBreakpoint() === "xs" ? -420 : -1250,item_4: gogoro.App.getBreakpoint() === "xs" ? -992 : -2500},isAnimating: !1,currentIndicator: 1};
                    $(".timeline-indicator").on("click", function(n) {
                        n.stopPropagation()
                    });
                    $(".timeline-indicator i").on("click", function(t) {
                        t.preventDefault();
                        t.stopPropagation();
                        var i = $(this), u = i.attr("data-index");
                        r.cancel(n.promise);
                        f(u)
                    });
                    $(".timeline").unbind().on("click", function() {
                        r.cancel(n.promise);
                        f()
                    });
                    $(".timeline-control").css({left: $(t).outerWidth() / 2 - u.centerPoint.item_1});
                    $(t).on("resize", function() {
                        var n = $(t).outerWidth(), i = n / 2;
                        $(".timeline-control").css({left: i - u.centerPoint["item_" + u.currentItem]})
                    });
                    n.promise = null;
                    n.currentItem = 0
                },destroy: function() {
                    $(".timeline").css({display: "none"})
                }},fallback: {init: function() {
                    imgix.fluid({fluidClass: "faster-10-fallback"})
                },destroy: function() {
                }}};
        u.init()
    }]);
gogoroApp.controller("moduleFaster11aCenterLockController", ["$scope", "$element", function(n, t) {
        var i = $(t), r = 800;
        if (gogoro.App.getBreakpoint() !== "xs") {
            i.on("mouseenter", function() {
                $("img.active", i).velocity("stop").velocity("fadeIn", {duration: r,easing: "easeIn"})
            });
            i.on("mouseleave", function() {
                $("img.active", i).velocity("stop").velocity("fadeOut", {duration: r,easing: "easeIn"})
            })
        }
    }]);
gogoroApp.controller("moduleFaster11CompoundTireController", ["$scope", "$element", function(n, t) {
        var i = $(t), r = 800;
        i.on("mouseenter", function() {
            gogoro.App.getBreakpoint() !== "xs" && gogoro.App.getBreakpoint() !== "sm" && ($("img.active", i).velocity("stop").velocity("fadeIn", {duration: r,easing: "easeIn"}), $(".descriptions .center, .descriptions .edge", i).velocity("stop").velocity("transition.slideRightIn", {duration: r / 2,easing: "easeIn",stagger: 150}), $(".descriptions .center .line, .descriptions .edge .line", i).velocity("stop").velocity("fadeIn", {duration: r / 2,easing: "easeIn",delay: r / 2}))
        });
        i.on("mouseleave", function() {
            gogoro.App.getBreakpoint() !== "xs" && gogoro.App.getBreakpoint() !== "sm" && ($("img.active", i).velocity("stop").velocity("fadeOut", {duration: r,easing: "easeIn"}), $(".descriptions .center, .descriptions .edge", i).velocity("stop").velocity("transition.slideRightOut", {duration: r / 2,easing: "easeOut",stagger: 150}), $(".descriptions .center .line, .descriptions .edge .line", i).velocity("stop").velocity("fadeOut", {duration: r / 2,easing: "easeOut"}))
        })
    }]);
gogoroApp.controller("moduleFaster14AerodynamicDesignController", ["$scope", "$element", function() {
    }]);
gogoroApp.controller("moduleFaster15WaterproofController", ["$scope", "$element", "$window", "$controller", "FallbackManagerFactory", function(n, t, i, r, u) {
        angular.extend(n, u);
        n.standard = {init: function() {
                $(".water-level").velocity("stop").velocity("transition.slideUpBigIn").velocity({top: 25}, {loop: !0,duration: 1500,ease: "easeOut"})
            },destroy: function() {
            }};
        n.fallback = {init: function() {
                imgix.fluid({fluidClass: "faster-15-fallback"})
            },destroy: function() {
            }};
        n.init(n, t, !0)
    }]);
gogoroApp.controller("moduleFaster16DesignEthosController", ["$scope", "$element", function() {
    }]);
gogoroApp.controller("moduleCustomizeIntroTakeoverController", ["$scope", "$element", "FallbackManagerFactory", "ModulePageIntroService", function(n, t, i) {
        angular.extend(n, i);
        var r = $(t);
        n.standard = {init: function() {
                function i(n) {
                    for (var i, u = window.location.search.substring(1), r = u.split("&"), t = 0; t < r.length; t++)
                        if (i = r[t].split("="), i[0] == n)
                            return i[1]
                }
                var n = $(".module-customize-intro1"), t = $(".module-customize-intro2"), r = $(".module-faster-0-site-intro");
                n.on("mousewheel", function(i) {
                    i.originalEvent.wheelDelta / 120 < 0 && ($(".title-wrapper").hide(), n.off("mousewheel").velocity({top: "-100%"}, 1e3, function() {
                        n.remove();
                        t.on("mousewheel", function(n) {
                            n.originalEvent.wheelDelta / 120 < 0 && t.off("mousewheel").velocity({top: "-100%"}, 1e3, function() {
                                $(".title-wrapper").fadeIn();
                                r.trigger("click");
                                t.remove();
                                $("body").removeClass("intro-takeover")
                            })
                        })
                    }))
                });
                angular.isUndefined(i("n")) === !0 || i("n") == "" || $(document).ready(function() {
                    n.remove();
                    t.remove();
                    $("body").removeClass("intro-takeover")
                })
            },destroy: function() {
            }};
        n.fallback = {init: function() {
            },destroy: function() {
            }};
        n.init(n, t, !0)
    }])
