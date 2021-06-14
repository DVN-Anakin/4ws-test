"use strict";  console.log('WWWWWWWWWWWWW');
function _typeof(t) {
    "@babel/helpers - typeof";
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    )(t)
}
!function() {
    console.log("CTR_IMG_LAZY_LOADER");
    new Blazy({
        loadInvisible: !0,
        src: "data-ctr-lazy-src",
        selector: ".ctr-lazy-image",
        breakpoints: [{
            width: "767px",
            src: "data-ctr-lazy-mobile-src"
        }, {
            width: "1023px",
            src: "data-ctr-lazy-tablet-src"
        }],
        success: function(t) {},
        error: function(t) {
            console.log("load image error", t.getAttribute("data-ctr-lazy-src")),
            t.setAttribute("src", t.getAttribute("data-ctr-lazy-src"))
        }
    })
}();
for (var i = 0, len = (items = document.querySelectorAll("#igb4")).length; i < len; i++)
    (function() {
        try {
            var t = "".toString()
              , e = "".toString()
              , i = "".toString();
            window.__ctrPageConfiguration = e && e.length ? (n = (o = e.split("=||||="))[0].split("-=-"),
            r = o[1].split("-=-"),
            n.reduce(function(t, e, i) {
                return t[e] = r[i],
                t
            }, {})) : null,
            i && i.length && (window.__ctrwowPackageVersion = i),
            function(i) {
                if (i) {
                    var o = window.ctrwowUtils;
                    o.getDependencies(["https://cdnjs.cloudflare.com/ajax/libs/pubsub-js/1.7.0/pubsub.min.js"]).then(function() {
                        var e = document.querySelector(".ctr_wow_body");
                        e.addEventListener("keyup", function t() {
                            o.tracking.pushGtmTrackingEvent(i),
                            e.removeEventListener("keyup", t),
                            window.PubSub && window.PubSub.unsubscribe("show-exit-popup")
                        })
                    })
                }
            }(t)
        } catch (t) {
            console.log(t)
        }
        var o, n, r
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#iofq1g")).length; i < len; i++)
    (function() {
        var t, e = this, i = [], o = e.getAttribute("url"), n = e.getAttribute("box-title");
        function r(t) {
            return new RegExp(/({\[(\s|\S)*?\]})/g).test(t)
        }
        if (n && n.length)
            document.querySelectorAll('[title="' + n + '"]').forEach(function(t) {
                return i.push(t)
            });
        else if (r(o) || o && (t = o,
        new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi).test(t))) {
            var s = document.querySelectorAll("a");
            if (!s.length)
                return;
            var l = void 0;
            for (l = 0; l < s.length; l++) {
                var a = new RegExp(o,"gi")
                  , d = decodeURI(s[l].href);
                r(o) && (a = new RegExp(o.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),"gi")),
                d.match(a) && !s[l].closest(".sticky-bar") && s[l].hasAttribute("call-to-action") && i.push(s[l])
            }
        }
        function c() {
            i.some(function(t) {
                return i = (e = t.getBoundingClientRect()).top,
                o = e.bottom,
                n = e.width,
                r = e.height,
                s = window.innerHeight || document.documentElement.clientHeight,
                (0 < i || 0 < o) && i < s && 0 < n && 0 < r;
                var e, i, o, n, r, s
            }) ? !e.classList.contains("hidden") && e.classList.add("hidden") : e.classList.contains("hidden") && e.classList.remove("hidden")
        }
        setTimeout(function() {
            c();
            var t = window["__ctrStickyBarScrollEvent__" + e.id] = c;
            window.addEventListener("scroll", t)
        }, 500)
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#ihwmwg")).length; i < len; i++)
    (function() {
        window.ctrwowUtils.isBuilderMode() || $(this).click(function(t) {
            var e = $("#wrapper")
              , i = $(this).attr("href")
              , o = $(this).attr("target")
              , n = $(this).attr("anchor");
            if (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(),
            !e.length) {
                window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
                try {
                    new Function("")()
                } catch (t) {
                    console.warn("handleOnClick error: " + t)
                }
                if ("popup" == o && !window.ctrwowUtils.isPreviewMode()) {
                    t.preventDefault(),
                    console.log("link popup click");
                    var r = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal')
                      , s = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' + i + '"></iframe>';
                    if (r) {
                        var l = $(r[0]).find(".ctr_modal_iframe");
                        l.length && $(l[0]).html(s),
                        $(r[0]).addClass("show")
                    }
                    return
                }
                if (n && "#" === n[0]) {
                    var a = $(n);
                    if (a.length) {
                        var d = a.offset().top;
                        $("body, html").animate({
                            scrollTop: d + "px"
                        }, 800)
                    } else
                        window.location.replace("" + i + n);
                    t.preventDefault()
                }
            }
        })
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#i4c7")).length; i < len; i++)
    (function() {
        if (console.log("run - onInitPage - onInitPage"),
        window.ctrwowUtils) {
            var t = window.ctrwowUtils;
            if (t.isPreviewMode() || t.isBuilderMode())
                return t.addCommonLinkHandler(),
                t.addCommonImageHandler(),
                void t.addCommonTextHandler();
            $(document).ready(function() {
                t.addCommonLinkHandler(),
                t.addCommonImageHandler(),
                t.addCommonTextHandler()
            })
        }
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#ilfcr")).length; i < len; i++)
    (function() {
        window.ctrwowUtils.isBuilderMode() || $(this).click(function(t) {
            var e = $("#wrapper")
              , i = $(this).attr("href")
              , o = $(this).attr("target")
              , n = $(this).attr("anchor");
            if (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(),
            !e.length) {
                window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
                try {
                    new Function("")()
                } catch (t) {
                    console.warn("handleOnClick error: " + t)
                }
                if ("popup" == o && !window.ctrwowUtils.isPreviewMode()) {
                    t.preventDefault(),
                    console.log("link popup click");
                    var r = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal')
                      , s = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' + i + '"></iframe>';
                    if (r) {
                        var l = $(r[0]).find(".ctr_modal_iframe");
                        l.length && $(l[0]).html(s),
                        $(r[0]).addClass("show")
                    }
                    return
                }
                if (n && "#" === n[0]) {
                    var a = $(n);
                    if (a.length) {
                        var d = a.offset().top;
                        $("body, html").animate({
                            scrollTop: d + "px"
                        }, 800)
                    } else
                        window.location.replace("" + i + n);
                    t.preventDefault()
                }
            }
        })
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#ii5gp")).length; i < len; i++)
    (function() {
        window.ctrwowUtils.isBuilderMode() || $(this).click(function(t) {
            var e = $("#wrapper")
              , i = $(this).attr("href")
              , o = $(this).attr("target")
              , n = $(this).attr("anchor");
            if (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(),
            !e.length) {
                window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
                try {
                    new Function("")()
                } catch (t) {
                    console.warn("handleOnClick error: " + t)
                }
                if ("popup" == o && !window.ctrwowUtils.isPreviewMode()) {
                    t.preventDefault(),
                    console.log("link popup click");
                    var r = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal')
                      , s = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' + i + '"></iframe>';
                    if (r) {
                        var l = $(r[0]).find(".ctr_modal_iframe");
                        l.length && $(l[0]).html(s),
                        $(r[0]).addClass("show")
                    }
                    return
                }
                if (n && "#" === n[0]) {
                    var a = $(n);
                    if (a.length) {
                        var d = a.offset().top;
                        $("body, html").animate({
                            scrollTop: d + "px"
                        }, 800)
                    } else
                        window.location.replace("" + i + n);
                    t.preventDefault()
                }
            }
        })
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#ixm39")).length; i < len; i++)
    (function() {
        try {
            var t;
            try {
                t = {
                    dkItems: "1",
                    tbItems: "1",
                    mbItems: "1",
                    dkScrollItems: "1",
                    tbScrollItems: "1",
                    mbScrollItems: "1",
                    sliderMode: "default",
                    slideType: "normal",
                    dkItemsPerRow: "0",
                    tbItemsPerRow: "0",
                    mbItemsPerRow: "0",
                    arrows: "true",
                    thumbArrows: "true",
                    infinite: "",
                    bullets: "",
                    fade: "true",
                    autoplay: "",
                    adaptiveHeight: "true",
                    makeArrowCenter: "",
                    initUnder: "99999",
                    initialSlide: "",
                    centerPadding: "0",
                    slideSpeed: "1000",
                    bulletsColor: "gray",
                    bulletActiveColor: "black",
                    bulletsSize: "10px",
                    dkRows: "1",
                    tbRows: "1",
                    mbRows: "1"
                }
            } catch (t) {
                console.log(t)
            }
            if (window.ctrDebug && window.ctrDebug.run(this, "widget-slider", t))
                return !0;
            (function(i) {
                var o = {};
                function n(t) {
                    if (o[t])
                        return o[t].exports;
                    var e = o[t] = {
                        i: t,
                        l: !1,
                        exports: {}
                    };
                    return i[t].call(e.exports, e, e.exports, n),
                    e.l = !0,
                    e.exports
                }
                return n.m = i,
                n.c = o,
                n.d = function(t, e, i) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: i
                    })
                }
                ,
                n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }
                ,
                n.t = function(e, t) {
                    if (1 & t && (e = n(e)),
                    8 & t)
                        return e;
                    if (4 & t && "object" == _typeof(e) && e && e.__esModule)
                        return e;
                    var i = Object.create(null);
                    if (n.r(i),
                    Object.defineProperty(i, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && "string" != typeof e)
                        for (var o in e)
                            n.d(i, o, function(t) {
                                return e[t]
                            }
                            .bind(null, o));
                    return i
                }
                ,
                n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    }
                    : function() {
                        return t
                    }
                    ;
                    return n.d(e, "a", e),
                    e
                }
                ,
                n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                ,
                n.p = "",
                n(n.s = 0)
            }
            )([function(t, e, i) {
                function o(t, e) {
                    if (void 0 === window.definedWidgetCSlider && (window.definedWidgetCSlider = function() {
                        var i, o = $(window), n = "onorientationchange"in window ? "orientationchange.resizecslider" : "resize.resizecslider";
                        function r(t) {
                            this.element = $(t),
                            this.initWidget()
                        }
                        r.prototype = {
                            initWidget: function() {
                                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                                  , e = this;
                                this.options = $.extend({}, $.fn.cslider.defaults, JSON.parse(this.element.attr("data-".concat("cslider"))), t),
                                this.handle = this.element.find(this.options.handle),
                                this.handle.is(":visible") && (this.options.initUnder ? o.width() < this.options.initUnder ? (this.element.removeClass("wrap-no-slide"),
                                this.handle.removeClass("no-slide"),
                                this.initialize()) : (this.element.addClass("wrap-no-slide"),
                                this.handle.addClass("no-slide")) : this.initialize(),
                                o.off(n).on(n, function() {
                                    i && clearTimeout(i),
                                    i = setTimeout(e.reRenderSlide, 600)
                                }),
                                this.listener())
                            },
                            listener: function() {
                                this.zoomInEvent()
                            },
                            zoomInEvent: function() {
                                var e = this.element.find(".zoomin");
                                if (0 !== e.length && this.element.closest(".widget-slider").attr("popup-class")) {
                                    var i = "." + this.element.closest(".widget-slider").attr("popup-class");
                                    e.off("click.zoomIn").on("click.zoomIn", function() {
                                        var t = $(e).index($(this));
                                        $(i).find(".ctrwow-modal").addClass("show"),
                                        $(i).find(".widget-slider").show(),
                                        $(i).find(".ctrwow-modal").css("pointer-events", "none"),
                                        $(i).find(".ctrwow-modal-content").css("pointer-events", "auto"),
                                        $(i).find("[data-cslider]").cslider("initWidget", {
                                            initialSlide: t
                                        }),
                                        $(i).addClass("show-popup-slide")
                                    }),
                                    $(i).find(".zoomout").off("click.zoomOut").on("click.zoomOut", function() {
                                        $(i).find("[data-cslider]").cslider("destroy"),
                                        $(i).find(".widget-slider").hide(),
                                        $(i).find(".ctrwow-modal").removeClass("show"),
                                        $(i).removeClass("show-popup-slide")
                                    }),
                                    $(i).off("click.zoomOutPopup").on("click.zoomOutPopup", function(t) {
                                        $(t.target).hasClass("popup-slide") && ($(i).find("[data-cslider]").cslider("destroy"),
                                        $(i).find(".widget-slider").hide(),
                                        $(i).find(".ctrwow-modal").removeClass("show"),
                                        $(i).removeClass("show-popup-slide"))
                                    })
                                }
                            },
                            reRenderSlide: function() {
                                $("[data-cslider]").each(function() {
                                    $(".slick", this).is(":visible") && ($(this).find(".slick-track > .slick-list").remove(),
                                    $(this).data().cslider.options.initUnder ? o.width() < $(this).data().cslider.options.initUnder ? ($(".slick", this).removeClass("no-slide"),
                                    $(this).removeClass("wrap-no-slide"),
                                    $(".slick", this).hasClass("slick-initialized") ? $(this).cslider("setPositionArrows") : $(this).cslider("initWidget")) : $(".slick", this).hasClass("slick-initialized") && ($(".slick", this).addClass("no-slide"),
                                    $(this).addClass("wrap-no-slide"),
                                    $(this).cslider("destroy")) : window.ctrwowUtils.isBuilderMode() ? ($(this).cslider("destroy"),
                                    $(this).cslider("initWidget")) : ($(this).cslider("setPositionArrows"),
                                    $(this).cslider("slickNoSlide"),
                                    $(".slick", this).hasClass("no-slide") && ($(this).cslider("destroy"),
                                    $(this).cslider("initWidget"))))
                                })
                            },
                            initialize: function() {
                                console.log('INITTTTTTTTT');
                                this.element.find("img").length ? this.checkImgLoad() : this.initSlider()
                            },
                            checkImgLoad: function() {
                                var t = this
                                  , e = this.element.find("img").first().attr("src");
                                $("<img />").attr("src", e).css("display", "none").on("load.cslider", function() {
                                    t.initSlider()
                                }).on("error.cslider", function() {
                                    t.initSlider()
                                })
                            },
                            updateSetting: function() {
                                var t = {}
                                  , e = [];
                                if (void 0 !== this.options.desktopItems && (t = $.extend(t, {
                                    slidesToShow: this.options.desktopItems,
                                    rows: this.options.dkRows || 1,
                                    slidesToScroll: this.options.dkScrollItems || 1
                                })),
                                void 0 !== this.options.tabletItems || void 0 !== this.options.mobileItems) {
                                    if (void 0 !== this.options.tabletItems) {
                                        var i = {
                                            breakpoint: 992,
                                            settings: {
                                                slidesToShow: this.options.tabletItems,
                                                rows: this.options.tbRows || 1,
                                                slidesToScroll: this.options.tbScrollItems || 1
                                            }
                                        };
                                        e.push(i)
                                    }
                                    if (void 0 !== this.options.mobileItems) {
                                        var o = {
                                            breakpoint: 576,
                                            settings: {
                                                slidesToShow: this.options.mobileItems,
                                                rows: this.options.mbRows || 1,
                                                slidesToScroll: this.options.mbScrollItems || 1
                                            }
                                        };
                                        e.push(o)
                                    }
                                    t = $.extend(t, {
                                        responsive: e
                                    })
                                }
                                return t
                            },
                            initSlider: function() {
                                var t, e = this, i = {};
                                switch (this.options.type) {
                                case "normal":
                                    t = $.extend({}, this.options.normal, this.updateSetting());
                                    break;
                                case "syncing":
                                    i.asNavFor = this.options.navFor,
                                    t = this.options.view ? $.extend({}, this.options.normal, i) : $.extend({}, this.options.normal, {
                                        focusOnSelect: !0
                                    }, i, this.updateSetting());
                                    break;
                                default:
                                    t = this.options.normal
                                }
                                if (t = $.extend(t, {
                                    dots: this.options.dots,
                                    arrows: this.options.arrows,
                                    fade: this.options.fade,
                                    infinite: this.options.infinite,
                                    adaptiveHeight: this.options.adaptiveHeight,
                                    prevArrow: this.options.prevArrow,
                                    nextArrow: this.options.nextArrow,
                                    arrowWrapper: this.options.arrowWrapper,
                                    appendDots: this.options.dotWrapper,
                                    initialSlide: this.options.initialSlide,
                                    speed: this.options.slideSpeed
                                }),
                                this.options.autoplay && (t = $.extend(t, {
                                    autoplay: !0,
                                    pauseOnHover: !0,
                                    autoplaySpeed: 3e3
                                })),
                                "verticalmode" === this.options.sliderMode && (t = $.extend(t, {
                                    vertical: !0,
                                    verticalSwiping: !0
                                })),
                                "centermode" === this.options.sliderMode) {
                                    var o = {
                                        centerMode: !0,
                                        centerPadding: this.options.centerPadding ? this.options.centerPadding : 0
                                    };
                                    t = $.extend(t, o)
                                }
                                console.log("Slick Options", t),
                                window._wq = window._wq || [],
                                this.handle.on("init", function() {
                                    e.handle.find(".slick-track > .slick-list").remove(),
                                    $(".slick-current", e.element).find(".w_wistia").length ? window._wq.push({
                                        id: $(".slick-current", e.element).find(".w_wistia").data("videoid"),
                                        onReady: function(t) {
                                            $(window).resize(),
                                            e.setPositionArrows()
                                        }
                                    }) : e.setPositionArrows()
                                }),
                                this.handle.slick(t),
                                this.handle.on("beforeChange.cslider", function() {
                                    try {
                                        var t = $(".slick-current", e.element).find(".wistia_embed").attr("id");
                                        t && window.Wistia.api(t).pause()
                                    } catch (t) {
                                        console.log(t)
                                    }
                                }),
                                this.handle.on("afterChange.cslider", function() {
                                    e.setPositionArrows()
                                }),
                                this.slickNoSlide()
                            },
                            setPositionArrows: function() {
                                var t = this.element.find(".slick-arrow")
                                  , e = this.handle.find('[aria-hidden="false"] .img-view').length ? this.handle.find('[aria-hidden="false"] .img-view') : this.handle.find('[aria-hidden="true"] .img-view')
                                  , i = 0
                                  , o = 0;
                                t.length && this.options.setPositionArrows && ($(e).each(function() {
                                    i = Math.max($(this).outerHeight(), i)
                                }),
                                o = i / 2,
                                t.animate({
                                    top: o
                                }, 300))
                            },
                            slickNoSlide: function() {
                                var t = this.handle.slick("getSlick");
                                t.slideCount && t.slideCount <= t.options.slidesToShow ? (this.element.addClass("wrap-no-slide"),
                                this.handle.addClass("no-slide")) : (this.element.removeClass("wrap-no-slide"),
                                this.handle.removeClass("no-slide"))
                            },
                            destroy: function() {
                                this.handle.hasClass("slick-initialized") && (console.log("destroyed"),
                                this.element.find(".slick-arrow").length && this.element.find(".slick-arrow").removeAttr("style"),
                                this.handle.slick("unslick").off("afterChange.cslider"),
                                this.element.find(".slick-dots").remove())
                            }
                        },
                        $.fn.cslider = function(e, i) {
                            return this.each(function() {
                                var t = $.data(this, "cslider");
                                t ? t[e] && t[e](i) : $.data(this, "cslider", new r(this,e))
                            })
                        }
                        ,
                        $.fn.cslider.defaults = {
                            handle: ".slick",
                            normal: {
                                infinite: !1,
                                speed: 600,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                zIndex: 5,
                                rtl: "rtl" === $("html").attr("dir"),
                                accessibility: !1
                            }
                        }
                    }
                    ),
                    void 0 === window.$.fn.slick) {
                        var i = document.createElement("script");
                        i.src = "https://ctrwow-commonstorage.azureedge.net/common/js/libs/slick-v1.8.0.js",
                        document.body.appendChild(i),
                        i.onload = function() {
                            window.definedWidgetCSlider(),
                            $("[data-cslider]").cslider()
                        }
                    } else
                        window.ctrwowUtils.isBuilderMode() && $(t).find("[data-cslider]").each(function() {
                            console.log(123, $.data(this, "cslider")),
                            $.data(this, "cslider") && $(this).cslider("destroy"),
                            $(this).cslider("initWidget")
                        })
                }
                i.r(e),
                i.d(e, "default", function() {
                    return o
                })
            }
            ]).default(this, t);
            console.log("run controller")
        } catch (t) {
            console.log(t)
        }
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#in23ew")).length; i < len; i++)
    (function() {
        window.ctrwowUtils.isBuilderMode() || $(this).click(function(t) {
            var e = $("#wrapper")
              , i = $(this).attr("href")
              , o = $(this).attr("target")
              , n = $(this).attr("anchor");
            if (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(),
            !e.length) {
                window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
                try {
                    new Function("")()
                } catch (t) {
                    console.warn("handleOnClick error: " + t)
                }
                if ("popup" == o && !window.ctrwowUtils.isPreviewMode()) {
                    t.preventDefault(),
                    console.log("link popup click");
                    var r = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal')
                      , s = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' + i + '"></iframe>';
                    if (r) {
                        var l = $(r[0]).find(".ctr_modal_iframe");
                        l.length && $(l[0]).html(s),
                        $(r[0]).addClass("show")
                    }
                    return
                }
                if (n && "#" === n[0]) {
                    var a = $(n);
                    if (a.length) {
                        var d = a.offset().top;
                        $("body, html").animate({
                            scrollTop: d + "px"
                        }, 800)
                    } else
                        window.location.replace("" + i + n);
                    t.preventDefault()
                }
            }
        })
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#i0dbn9")).length; i < len; i++)
    (function() {
        try {
            var t = {
                provider: "Wista",
                layerType: "normal",
                videoId: "epbuwz3hsk",
                muted: ""
            }
        } catch (t) {
            console.log(t)
        }
        if (window.ctrDebug && window.ctrDebug.run(this, "widget-video", t))
            return !0;
        (function(i) {
            var o = {};
            function n(t) {
                if (o[t])
                    return o[t].exports;
                var e = o[t] = {
                    i: t,
                    l: !1,
                    exports: {}
                };
                return i[t].call(e.exports, e, e.exports, n),
                e.l = !0,
                e.exports
            }
            return n.m = i,
            n.c = o,
            n.d = function(t, e, i) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: i
                })
            }
            ,
            n.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }
            ,
            n.t = function(e, t) {
                if (1 & t && (e = n(e)),
                8 & t)
                    return e;
                if (4 & t && "object" == _typeof(e) && e && e.__esModule)
                    return e;
                var i = Object.create(null);
                if (n.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                    for (var o in e)
                        n.d(i, o, function(t) {
                            return e[t]
                        }
                        .bind(null, o));
                return i
            }
            ,
            n.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
                ;
                return n.d(e, "a", e),
                e
            }
            ,
            n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            n.p = "",
            n(n.s = 1)
        }
        )([function(t, e, i) {}
        , function(t, e, i) {
            function o(t) {
                var e = t
                  , i = "Wista"
                  , o = "epbuwz3hsk"
                  , n = ""
                  , r = e.hasAttribute("autoPlay") ? 1 : 0
                  , s = e.hasAttribute("loop") ? 1 : 0
                  , l = e.hasAttribute("hidecontrol") ? 1 : 0
                  , a = 0
                  , d = "true"
                  , c = "true"
                  , h = 1
                  , f = 1
                  , u = e.hasAttribute("loop") ? "loop" : "defaul"
                  , w = 1
                  , p = "false"
                  , m = "true"
                  , v = "true";
                t = "true",
                n = "YES" === n ? 0 : 1;
                "background" !== "normal".toLowerCase() && !l || (u = "loop",
                w = f = h = 0,
                p = "true",
                t = v = m = c = d = "false",
                l ? f = "false" : (e.querySelector(".video-group").classList.add("background"),
                a = 1)),
                "wista" === i.toLowerCase() ? ((g = document.createElement("script")).src = "https://fast.wistia.com/assets/external/E-v1.js",
                document.head.appendChild(g)) : e.querySelector(".video").classList.add("vimeo");
                var g = "";
                "wista" === i.toLowerCase() ? g = '<div class="myVideo w_wistia" data-videoid="'.concat(o, "\">\n                <div style='height:100%;width:100%' class='wistia_embed videoFoam=true wistia_async_").concat(o, "  autoPlay=").concat(r, " endVideoBehavior=").concat(u, " playbar=").concat(d, " playButton=").concat(c, " controlsVisibleOnLoad=").concat(h, " settingsControl=").concat(f, " playbackRateControl=").concat(w, " volumeControl=").concat(m, " smallPlayButton=").concat(v, " fullscreenButton=").concat(t, " muted=").concat(p, " volume=").concat(n, "' ></div>\n            </div>") : "vimeo" === i.toLowerCase() ? g = '<div class="vimeo-wrapper" data-videoid="'.concat(o, '">\n              <iframe src="https://player.vimeo.com/video/').concat(o, "?background=").concat(a, "&autoplay=").concat(r, "&loop=").concat(s, '&title=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>\n          </div>') : "youtube" === i.toLowerCase() && (g = '<div class="youtube-wrapper" data-videoid="'.concat(o, '">\n      <iframe width="420" height="315" src="https://www.youtube.com/embed/').concat(o, "?autoplay=").concat(r, "&mute=1&loop=").concat(s, "&playlist=").concat(o, "&controls=").concat(f, '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    </div>')),
                e.querySelector(".video").innerHTML = g
            }
            i.r(e),
            i.d(e, "default", function() {
                return o
            }),
            i(0)
        }
        ]).default(this, t)
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#i13ve1")).length; i < len; i++)
    (function() {
        window.ctrwowUtils.isBuilderMode() || $(this).click(function(t) {
            var e = $("#wrapper")
              , i = $(this).attr("href")
              , o = $(this).attr("target")
              , n = $(this).attr("anchor");
            if (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(),
            !e.length) {
                window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
                try {
                    new Function("")()
                } catch (t) {
                    console.warn("handleOnClick error: " + t)
                }
                if ("popup" == o && !window.ctrwowUtils.isPreviewMode()) {
                    t.preventDefault(),
                    console.log("link popup click");
                    var r = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal')
                      , s = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' + i + '"></iframe>';
                    if (r) {
                        var l = $(r[0]).find(".ctr_modal_iframe");
                        l.length && $(l[0]).html(s),
                        $(r[0]).addClass("show")
                    }
                    return
                }
                if (n && "#" === n[0]) {
                    var a = $(n);
                    if (a.length) {
                        var d = a.offset().top;
                        $("body, html").animate({
                            scrollTop: d + "px"
                        }, 800)
                    } else
                        window.location.replace("" + i + n);
                    t.preventDefault()
                }
            }
        })
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#iek135")).length; i < len; i++)
    (function() {
        try {
            var t;
            try {
                t = {
                    dkItems: "1",
                    tbItems: "1",
                    mbItems: "1",
                    dkScrollItems: "1",
                    tbScrollItems: "1",
                    mbScrollItems: "1",
                    sliderMode: "default",
                    slideType: "normal",
                    dkItemsPerRow: "0",
                    tbItemsPerRow: "0",
                    mbItemsPerRow: "0",
                    arrows: "",
                    thumbArrows: "",
                    infinite: "",
                    bullets: "true",
                    fade: "true",
                    autoplay: "",
                    adaptiveHeight: "true",
                    makeArrowCenter: "",
                    initUnder: "99999",
                    initialSlide: "",
                    centerPadding: "0",
                    slideSpeed: "1000",
                    bulletsColor: "#D8D8D8",
                    bulletActiveColor: "#BFE4D9",
                    bulletsSize: "16px",
                    dkRows: "1",
                    tbRows: "1",
                    mbRows: "1"
                }
            } catch (t) {
                console.log(t)
            }
            if (window.ctrDebug && window.ctrDebug.run(this, "widget-slider", t))
                return !0;
            (function(i) {
                var o = {};
                function n(t) {
                    if (o[t])
                        return o[t].exports;
                    var e = o[t] = {
                        i: t,
                        l: !1,
                        exports: {}
                    };
                    return i[t].call(e.exports, e, e.exports, n),
                    e.l = !0,
                    e.exports
                }
                return n.m = i,
                n.c = o,
                n.d = function(t, e, i) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: i
                    })
                }
                ,
                n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }
                ,
                n.t = function(e, t) {
                    if (1 & t && (e = n(e)),
                    8 & t)
                        return e;
                    if (4 & t && "object" == _typeof(e) && e && e.__esModule)
                        return e;
                    var i = Object.create(null);
                    if (n.r(i),
                    Object.defineProperty(i, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && "string" != typeof e)
                        for (var o in e)
                            n.d(i, o, function(t) {
                                return e[t]
                            }
                            .bind(null, o));
                    return i
                }
                ,
                n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    }
                    : function() {
                        return t
                    }
                    ;
                    return n.d(e, "a", e),
                    e
                }
                ,
                n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                ,
                n.p = "",
                n(n.s = 0)
            }
            )([function(t, e, i) {
                function o(t, e) {
                    if (void 0 === window.definedWidgetCSlider && (window.definedWidgetCSlider = function() {
                        var i, o = $(window), n = "onorientationchange"in window ? "orientationchange.resizecslider" : "resize.resizecslider";
                        function r(t) {
                            this.element = $(t),
                            this.initWidget()
                        }
                        r.prototype = {
                            initWidget: function() {
                                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                                  , e = this;
                                this.options = $.extend({}, $.fn.cslider.defaults, JSON.parse(this.element.attr("data-".concat("cslider"))), t),
                                this.handle = this.element.find(this.options.handle),
                                this.handle.is(":visible") && (this.options.initUnder ? o.width() < this.options.initUnder ? (this.element.removeClass("wrap-no-slide"),
                                this.handle.removeClass("no-slide"),
                                this.initialize()) : (this.element.addClass("wrap-no-slide"),
                                this.handle.addClass("no-slide")) : this.initialize(),
                                o.off(n).on(n, function() {
                                    i && clearTimeout(i),
                                    i = setTimeout(e.reRenderSlide, 600)
                                }),
                                this.listener())
                            },
                            listener: function() {
                                this.zoomInEvent()
                            },
                            zoomInEvent: function() {
                                var e = this.element.find(".zoomin");
                                if (0 !== e.length && this.element.closest(".widget-slider").attr("popup-class")) {
                                    var i = "." + this.element.closest(".widget-slider").attr("popup-class");
                                    e.off("click.zoomIn").on("click.zoomIn", function() {
                                        var t = $(e).index($(this));
                                        $(i).find(".ctrwow-modal").addClass("show"),
                                        $(i).find(".widget-slider").show(),
                                        $(i).find(".ctrwow-modal").css("pointer-events", "none"),
                                        $(i).find(".ctrwow-modal-content").css("pointer-events", "auto"),
                                        $(i).find("[data-cslider]").cslider("initWidget", {
                                            initialSlide: t
                                        }),
                                        $(i).addClass("show-popup-slide")
                                    }),
                                    $(i).find(".zoomout").off("click.zoomOut").on("click.zoomOut", function() {
                                        $(i).find("[data-cslider]").cslider("destroy"),
                                        $(i).find(".widget-slider").hide(),
                                        $(i).find(".ctrwow-modal").removeClass("show"),
                                        $(i).removeClass("show-popup-slide")
                                    }),
                                    $(i).off("click.zoomOutPopup").on("click.zoomOutPopup", function(t) {
                                        $(t.target).hasClass("popup-slide") && ($(i).find("[data-cslider]").cslider("destroy"),
                                        $(i).find(".widget-slider").hide(),
                                        $(i).find(".ctrwow-modal").removeClass("show"),
                                        $(i).removeClass("show-popup-slide"))
                                    })
                                }
                            },
                            reRenderSlide: function() {
                                $("[data-cslider]").each(function() {
                                    $(".slick", this).is(":visible") && ($(this).find(".slick-track > .slick-list").remove(),
                                    $(this).data().cslider.options.initUnder ? o.width() < $(this).data().cslider.options.initUnder ? ($(".slick", this).removeClass("no-slide"),
                                    $(this).removeClass("wrap-no-slide"),
                                    $(".slick", this).hasClass("slick-initialized") ? $(this).cslider("setPositionArrows") : $(this).cslider("initWidget")) : $(".slick", this).hasClass("slick-initialized") && ($(".slick", this).addClass("no-slide"),
                                    $(this).addClass("wrap-no-slide"),
                                    $(this).cslider("destroy")) : window.ctrwowUtils.isBuilderMode() ? ($(this).cslider("destroy"),
                                    $(this).cslider("initWidget")) : ($(this).cslider("setPositionArrows"),
                                    $(this).cslider("slickNoSlide"),
                                    $(".slick", this).hasClass("no-slide") && ($(this).cslider("destroy"),
                                    $(this).cslider("initWidget"))))
                                })
                            },
                            initialize: function() {
                                this.element.find("img").length ? this.checkImgLoad() : this.initSlider()
                            },
                            checkImgLoad: function() {
                                var t = this
                                  , e = this.element.find("img").first().attr("src");
                                $("<img />").attr("src", e).css("display", "none").on("load.cslider", function() {
                                    t.initSlider()
                                }).on("error.cslider", function() {
                                    t.initSlider()
                                })
                            },
                            updateSetting: function() {
                                var t = {}
                                  , e = [];
                                if (void 0 !== this.options.desktopItems && (t = $.extend(t, {
                                    slidesToShow: this.options.desktopItems,
                                    rows: this.options.dkRows || 1,
                                    slidesToScroll: this.options.dkScrollItems || 1
                                })),
                                void 0 !== this.options.tabletItems || void 0 !== this.options.mobileItems) {
                                    if (void 0 !== this.options.tabletItems) {
                                        var i = {
                                            breakpoint: 992,
                                            settings: {
                                                slidesToShow: this.options.tabletItems,
                                                rows: this.options.tbRows || 1,
                                                slidesToScroll: this.options.tbScrollItems || 1
                                            }
                                        };
                                        e.push(i)
                                    }
                                    if (void 0 !== this.options.mobileItems) {
                                        var o = {
                                            breakpoint: 576,
                                            settings: {
                                                slidesToShow: this.options.mobileItems,
                                                rows: this.options.mbRows || 1,
                                                slidesToScroll: this.options.mbScrollItems || 1
                                            }
                                        };
                                        e.push(o)
                                    }
                                    t = $.extend(t, {
                                        responsive: e
                                    })
                                }
                                return t
                            },
                            initSlider: function() {
                                var t, e = this, i = {};
                                switch (this.options.type) {
                                case "normal":
                                    t = $.extend({}, this.options.normal, this.updateSetting());
                                    break;
                                case "syncing":
                                    i.asNavFor = this.options.navFor,
                                    t = this.options.view ? $.extend({}, this.options.normal, i) : $.extend({}, this.options.normal, {
                                        focusOnSelect: !0
                                    }, i, this.updateSetting());
                                    break;
                                default:
                                    t = this.options.normal
                                }
                                if (t = $.extend(t, {
                                    dots: this.options.dots,
                                    arrows: this.options.arrows,
                                    fade: this.options.fade,
                                    infinite: this.options.infinite,
                                    adaptiveHeight: this.options.adaptiveHeight,
                                    prevArrow: this.options.prevArrow,
                                    nextArrow: this.options.nextArrow,
                                    arrowWrapper: this.options.arrowWrapper,
                                    appendDots: this.options.dotWrapper,
                                    initialSlide: this.options.initialSlide,
                                    speed: this.options.slideSpeed
                                }),
                                this.options.autoplay && (t = $.extend(t, {
                                    autoplay: !0,
                                    pauseOnHover: !0,
                                    autoplaySpeed: 3e3
                                })),
                                "verticalmode" === this.options.sliderMode && (t = $.extend(t, {
                                    vertical: !0,
                                    verticalSwiping: !0
                                })),
                                "centermode" === this.options.sliderMode) {
                                    var o = {
                                        centerMode: !0,
                                        centerPadding: this.options.centerPadding ? this.options.centerPadding : 0
                                    };
                                    t = $.extend(t, o)
                                }
                                console.log("Slick Options", t),
                                window._wq = window._wq || [],
                                this.handle.on("init", function() {
                                    e.handle.find(".slick-track > .slick-list").remove(),
                                    $(".slick-current", e.element).find(".w_wistia").length ? window._wq.push({
                                        id: $(".slick-current", e.element).find(".w_wistia").data("videoid"),
                                        onReady: function(t) {
                                            $(window).resize(),
                                            e.setPositionArrows()
                                        }
                                    }) : e.setPositionArrows()
                                }),
                                this.handle.slick(t),
                                this.handle.on("beforeChange.cslider", function() {
                                    try {
                                        var t = $(".slick-current", e.element).find(".wistia_embed").attr("id");
                                        t && window.Wistia.api(t).pause()
                                    } catch (t) {
                                        console.log(t)
                                    }
                                }),
                                this.handle.on("afterChange.cslider", function() {
                                    e.setPositionArrows()
                                }),
                                this.slickNoSlide()
                            },
                            setPositionArrows: function() {
                                var t = this.element.find(".slick-arrow")
                                  , e = this.handle.find('[aria-hidden="false"] .img-view').length ? this.handle.find('[aria-hidden="false"] .img-view') : this.handle.find('[aria-hidden="true"] .img-view')
                                  , i = 0
                                  , o = 0;
                                t.length && this.options.setPositionArrows && ($(e).each(function() {
                                    i = Math.max($(this).outerHeight(), i)
                                }),
                                o = i / 2,
                                t.animate({
                                    top: o
                                }, 300))
                            },
                            slickNoSlide: function() {
                                var t = this.handle.slick("getSlick");
                                t.slideCount && t.slideCount <= t.options.slidesToShow ? (this.element.addClass("wrap-no-slide"),
                                this.handle.addClass("no-slide")) : (this.element.removeClass("wrap-no-slide"),
                                this.handle.removeClass("no-slide"))
                            },
                            destroy: function() {
                                this.handle.hasClass("slick-initialized") && (console.log("destroyed"),
                                this.element.find(".slick-arrow").length && this.element.find(".slick-arrow").removeAttr("style"),
                                this.handle.slick("unslick").off("afterChange.cslider"),
                                this.element.find(".slick-dots").remove())
                            }
                        },
                        $.fn.cslider = function(e, i) {
                            return this.each(function() {
                                var t = $.data(this, "cslider");
                                t ? t[e] && t[e](i) : $.data(this, "cslider", new r(this,e))
                            })
                        }
                        ,
                        $.fn.cslider.defaults = {
                            handle: ".slick",
                            normal: {
                                infinite: !1,
                                speed: 600,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                zIndex: 5,
                                rtl: "rtl" === $("html").attr("dir"),
                                accessibility: !1
                            }
                        }
                    }
                    ),
                    void 0 === window.$.fn.slick) {
                        var i = document.createElement("script");
                        i.src = "https://ctrwow-commonstorage.azureedge.net/common/js/libs/slick-v1.8.0.js",
                        document.body.appendChild(i),
                        i.onload = function() {
                            window.definedWidgetCSlider(),
                            $("[data-cslider]").cslider()
                        }
                    } else
                        window.ctrwowUtils.isBuilderMode() && $(t).find("[data-cslider]").each(function() {
                            console.log(123, $.data(this, "cslider")),
                            $.data(this, "cslider") && $(this).cslider("destroy"),
                            $(this).cslider("initWidget")
                        })
                }
                i.r(e),
                i.d(e, "default", function() {
                    return o
                })
            }
            ]).default(this, t);
            console.log("run controller")
        } catch (t) {
            console.log(t)
        }
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#ipyxnr")).length; i < len; i++)
    (function() {
        window.ctrwowUtils.isBuilderMode() || $(this).click(function(t) {
            var e = $("#wrapper")
              , i = $(this).attr("href")
              , o = $(this).attr("target")
              , n = $(this).attr("anchor");
            if (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(),
            !e.length) {
                window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
                try {
                    new Function("")()
                } catch (t) {
                    console.warn("handleOnClick error: " + t)
                }
                if ("popup" == o && !window.ctrwowUtils.isPreviewMode()) {
                    t.preventDefault(),
                    console.log("link popup click");
                    var r = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal')
                      , s = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' + i + '"></iframe>';
                    if (r) {
                        var l = $(r[0]).find(".ctr_modal_iframe");
                        l.length && $(l[0]).html(s),
                        $(r[0]).addClass("show")
                    }
                    return
                }
                if (n && "#" === n[0]) {
                    var a = $(n);
                    if (a.length) {
                        var d = a.offset().top;
                        $("body, html").animate({
                            scrollTop: d + "px"
                        }, 800)
                    } else
                        window.location.replace("" + i + n);
                    t.preventDefault()
                }
            }
        })
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#ixrmg2")).length; i < len; i++)
    (function() {
        window.ctrwowUtils.isBuilderMode() || $(this).click(function(t) {
            var e = $("#wrapper")
              , i = $(this).attr("href")
              , o = $(this).attr("target")
              , n = $(this).attr("anchor");
            if (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(),
            !e.length) {
                window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
                try {
                    new Function("")()
                } catch (t) {
                    console.warn("handleOnClick error: " + t)
                }
                if ("popup" == o && !window.ctrwowUtils.isPreviewMode()) {
                    t.preventDefault(),
                    console.log("link popup click");
                    var r = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal')
                      , s = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' + i + '"></iframe>';
                    if (r) {
                        var l = $(r[0]).find(".ctr_modal_iframe");
                        l.length && $(l[0]).html(s),
                        $(r[0]).addClass("show")
                    }
                    return
                }
                if (n && "#" === n[0]) {
                    var a = $(n);
                    if (a.length) {
                        var d = a.offset().top;
                        $("body, html").animate({
                            scrollTop: d + "px"
                        }, 800)
                    } else
                        window.location.replace("" + i + n);
                    t.preventDefault()
                }
            }
        })
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#is5qqx")).length; i < len; i++)
    (function() {
        window.ctrwowUtils.isBuilderMode() || $(this).click(function(t) {
            var e = $("#wrapper")
              , i = $(this).attr("href")
              , o = $(this).attr("target")
              , n = $(this).attr("anchor");
            if (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(),
            !e.length) {
                window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
                try {
                    new Function("")()
                } catch (t) {
                    console.warn("handleOnClick error: " + t)
                }
                if ("popup" == o && !window.ctrwowUtils.isPreviewMode()) {
                    t.preventDefault(),
                    console.log("link popup click");
                    var r = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal')
                      , s = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' + i + '"></iframe>';
                    if (r) {
                        var l = $(r[0]).find(".ctr_modal_iframe");
                        l.length && $(l[0]).html(s),
                        $(r[0]).addClass("show")
                    }
                    return
                }
                if (n && "#" === n[0]) {
                    var a = $(n);
                    if (a.length) {
                        var d = a.offset().top;
                        $("body, html").animate({
                            scrollTop: d + "px"
                        }, 800)
                    } else
                        window.location.replace("" + i + n);
                    t.preventDefault()
                }
            }
        })
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#i9a5ze")).length; i < len; i++)
    (function() {
        window.ctrwowUtils.isBuilderMode() || $(this).click(function(t) {
            var e = $("#wrapper")
              , i = $(this).attr("href")
              , o = $(this).attr("target")
              , n = $(this).attr("anchor");
            if (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(),
            !e.length) {
                window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
                try {
                    new Function("")()
                } catch (t) {
                    console.warn("handleOnClick error: " + t)
                }
                if ("popup" == o && !window.ctrwowUtils.isPreviewMode()) {
                    t.preventDefault(),
                    console.log("link popup click");
                    var r = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal')
                      , s = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' + i + '"></iframe>';
                    if (r) {
                        var l = $(r[0]).find(".ctr_modal_iframe");
                        l.length && $(l[0]).html(s),
                        $(r[0]).addClass("show")
                    }
                    return
                }
                if (n && "#" === n[0]) {
                    var a = $(n);
                    if (a.length) {
                        var d = a.offset().top;
                        $("body, html").animate({
                            scrollTop: d + "px"
                        }, 800)
                    } else
                        window.location.replace("" + i + n);
                    t.preventDefault()
                }
            }
        })
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#ivxpxe")).length; i < len; i++)
    (function() {
        window.ctrwowUtils.isBuilderMode() || $(this).click(function(t) {
            var e = $("#wrapper")
              , i = $(this).attr("href")
              , o = $(this).attr("target")
              , n = $(this).attr("anchor");
            if (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(),
            !e.length) {
                window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
                try {
                    new Function("")()
                } catch (t) {
                    console.warn("handleOnClick error: " + t)
                }
                if ("popup" == o && !window.ctrwowUtils.isPreviewMode()) {
                    t.preventDefault(),
                    console.log("link popup click");
                    var r = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal')
                      , s = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' + i + '"></iframe>';
                    if (r) {
                        var l = $(r[0]).find(".ctr_modal_iframe");
                        l.length && $(l[0]).html(s),
                        $(r[0]).addClass("show")
                    }
                    return
                }
                if (n && "#" === n[0]) {
                    var a = $(n);
                    if (a.length) {
                        var d = a.offset().top;
                        $("body, html").animate({
                            scrollTop: d + "px"
                        }, 800)
                    } else
                        window.location.replace("" + i + n);
                    t.preventDefault()
                }
            }
        })
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#ibmv27")).length; i < len; i++)
    (function() {
        window.ctrwowUtils.isBuilderMode() || $(this).click(function(t) {
            var e = $("#wrapper")
              , i = $(this).attr("href")
              , o = $(this).attr("target")
              , n = $(this).attr("anchor");
            if (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(),
            !e.length) {
                window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
                try {
                    new Function("")()
                } catch (t) {
                    console.warn("handleOnClick error: " + t)
                }
                if ("popup" == o && !window.ctrwowUtils.isPreviewMode()) {
                    t.preventDefault(),
                    console.log("link popup click");
                    var r = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal')
                      , s = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' + i + '"></iframe>';
                    if (r) {
                        var l = $(r[0]).find(".ctr_modal_iframe");
                        l.length && $(l[0]).html(s),
                        $(r[0]).addClass("show")
                    }
                    return
                }
                if (n && "#" === n[0]) {
                    var a = $(n);
                    if (a.length) {
                        var d = a.offset().top;
                        $("body, html").animate({
                            scrollTop: d + "px"
                        }, 800)
                    } else
                        window.location.replace("" + i + n);
                    t.preventDefault()
                }
            }
        })
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#i1l1fa")).length; i < len; i++)
    (function() {
        window.ctrwowUtils.isBuilderMode() || $(this).click(function(t) {
            var e = $("#wrapper")
              , i = $(this).attr("href")
              , o = $(this).attr("target")
              , n = $(this).attr("anchor");
            if (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(),
            !e.length) {
                window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
                try {
                    new Function("")()
                } catch (t) {
                    console.warn("handleOnClick error: " + t)
                }
                if ("popup" == o && !window.ctrwowUtils.isPreviewMode()) {
                    t.preventDefault(),
                    console.log("link popup click");
                    var r = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal')
                      , s = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' + i + '"></iframe>';
                    if (r) {
                        var l = $(r[0]).find(".ctr_modal_iframe");
                        l.length && $(l[0]).html(s),
                        $(r[0]).addClass("show")
                    }
                    return
                }
                if (n && "#" === n[0]) {
                    var a = $(n);
                    if (a.length) {
                        var d = a.offset().top;
                        $("body, html").animate({
                            scrollTop: d + "px"
                        }, 800)
                    } else
                        window.location.replace("" + i + n);
                    t.preventDefault()
                }
            }
        })
    }
    ).bind(items[i])();
for (i = 0,
len = (items = document.querySelectorAll("#ivia59")).length; i < len; i++)
    (function() {
        var t;
        (t = document.querySelector(".DMCA_Logo a")) && (t.href += t.href.includes("refurl") ? "" : "&refurl=" + location.href)
    }
    ).bind(items[i])();
var items;
for (i = 0,
len = (items = document.querySelectorAll("#iniy9b")).length; i < len; i++)
    (function() {
        window.ctrwowUtils.isBuilderMode() || $(this).click(function(t) {
            var e = $("#wrapper")
              , i = $(this).attr("href")
              , o = $(this).attr("target")
              , n = $(this).attr("anchor");
            if (i && i.match(/({\[(\s|\S)*?\]})/g) && t.preventDefault(),
            !e.length) {
                window.ctrwowUtils.tracking.pushGtmTrackingEvent("");
                try {
                    new Function("")()
                } catch (t) {
                    console.warn("handleOnClick error: " + t)
                }
                if ("popup" == o && !window.ctrwowUtils.isPreviewMode()) {
                    t.preventDefault(),
                    console.log("link popup click");
                    var r = $('div[ctrLinkContentId="' + this.id + '"] .ctrwow-modal')
                      , s = '<iframe id="iframe" frameBorder="0" width="100%" height="100%" src="' + i + '"></iframe>';
                    if (r) {
                        var l = $(r[0]).find(".ctr_modal_iframe");
                        l.length && $(l[0]).html(s),
                        $(r[0]).addClass("show")
                    }
                    return
                }
                if (n && "#" === n[0]) {
                    var a = $(n);
                    if (a.length) {
                        var d = a.offset().top;
                        $("body, html").animate({
                            scrollTop: d + "px"
                        }, 800)
                    } else
                        window.location.replace("" + i + n);
                    t.preventDefault()
                }
            }
        })
    }
    ).bind(items[i])();
