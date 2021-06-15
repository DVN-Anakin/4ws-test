(function() {

setTimeout(function() {
console.log("SLICK SLIDER INIT");
for (i = 0, len = (items = document.querySelectorAll("#iek135")).length; i < len; i++)
    (function () {
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
                    mbRows: "1",
                };
            } catch (t) {
                console.log(t);
            }
            if (window.ctrDebug && window.ctrDebug.run(this, "widget-slider", t)) return !0;
            (function (i) {
                var o = {};
                function n(t) {
                    if (o[t]) return o[t].exports;
                    var e = (o[t] = { i: t, l: !1, exports: {} });
                    return i[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
                }
                return (
                    (n.m = i),
                    (n.c = o),
                    (n.d = function (t, e, i) {
                        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
                    }),
                    (n.r = function (t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
                    }),
                    (n.t = function (e, t) {
                        if ((1 & t && (e = n(e)), 8 & t)) return e;
                        if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
                        var i = Object.create(null);
                        if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                            for (var o in e)
                                n.d(
                                    i,
                                    o,
                                    function (t) {
                                        return e[t];
                                    }.bind(null, o)
                                );
                        return i;
                    }),
                    (n.n = function (t) {
                        var e =
                            t && t.__esModule
                                ? function () {
                                      return t.default;
                                  }
                                : function () {
                                      return t;
                                  };
                        return n.d(e, "a", e), e;
                    }),
                    (n.o = function (t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e);
                    }),
                    (n.p = ""),
                    n((n.s = 0))
                );
            })([
                function (t, e, i) {
                    function o(t, e) {
                        if (
                            (void 0 === window.definedWidgetCSlider &&
                                (window.definedWidgetCSlider = function () {
                                    var i,
                                        o = $(window),
                                        n = "onorientationchange" in window ? "orientationchange.resizecslider" : "resize.resizecslider";
                                    function r(t) {
                                        (this.element = $(t)), this.initWidget();
                                    }
                                    (r.prototype = {
                                        initWidget: function () {
                                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                                e = this;
                                            (this.options = $.extend({}, $.fn.cslider.defaults, JSON.parse(this.element.attr("data-".concat("cslider"))), t)),
                                                (this.handle = this.element.find(this.options.handle)),
                                                this.handle.is(":visible") &&
                                                    (this.options.initUnder
                                                        ? o.width() < this.options.initUnder
                                                            ? (this.element.removeClass("wrap-no-slide"), this.handle.removeClass("no-slide"), this.initialize())
                                                            : (this.element.addClass("wrap-no-slide"), this.handle.addClass("no-slide"))
                                                        : this.initialize(),
                                                    o.off(n).on(n, function () {
                                                        i && clearTimeout(i), (i = setTimeout(e.reRenderSlide, 600));
                                                    }),
                                                    this.listener());
                                        },
                                        listener: function () {
                                            this.zoomInEvent();
                                        },
                                        zoomInEvent: function () {
                                            var e = this.element.find(".zoomin");
                                            if (0 !== e.length && this.element.closest(".widget-slider").attr("popup-class")) {
                                                var i = "." + this.element.closest(".widget-slider").attr("popup-class");
                                                e.off("click.zoomIn").on("click.zoomIn", function () {
                                                    var t = $(e).index($(this));
                                                    $(i).find(".ctrwow-modal").addClass("show"),
                                                        $(i).find(".widget-slider").show(),
                                                        $(i).find(".ctrwow-modal").css("pointer-events", "none"),
                                                        $(i).find(".ctrwow-modal-content").css("pointer-events", "auto"),
                                                        $(i).find("[data-cslider]").cslider("initWidget", { initialSlide: t }),
                                                        $(i).addClass("show-popup-slide");
                                                }),
                                                    $(i)
                                                        .find(".zoomout")
                                                        .off("click.zoomOut")
                                                        .on("click.zoomOut", function () {
                                                            $(i).find("[data-cslider]").cslider("destroy"), $(i).find(".widget-slider").hide(), $(i).find(".ctrwow-modal").removeClass("show"), $(i).removeClass("show-popup-slide");
                                                        }),
                                                    $(i)
                                                        .off("click.zoomOutPopup")
                                                        .on("click.zoomOutPopup", function (t) {
                                                            $(t.target).hasClass("popup-slide") &&
                                                                ($(i).find("[data-cslider]").cslider("destroy"), $(i).find(".widget-slider").hide(), $(i).find(".ctrwow-modal").removeClass("show"), $(i).removeClass("show-popup-slide"));
                                                        });
                                            }
                                        },
                                        reRenderSlide: function () {
                                            $("[data-cslider]").each(function () {
                                                $(".slick", this).is(":visible") &&
                                                    ($(this).find(".slick-track > .slick-list").remove(),
                                                    $(this).data().cslider.options.initUnder
                                                        ? o.width() < $(this).data().cslider.options.initUnder
                                                            ? ($(".slick", this).removeClass("no-slide"),
                                                              $(this).removeClass("wrap-no-slide"),
                                                              $(".slick", this).hasClass("slick-initialized") ? $(this).cslider("setPositionArrows") : $(this).cslider("initWidget"))
                                                            : $(".slick", this).hasClass("slick-initialized") && ($(".slick", this).addClass("no-slide"), $(this).addClass("wrap-no-slide"), $(this).cslider("destroy"))
                                                        : window.ctrwowUtils.isBuilderMode()
                                                        ? ($(this).cslider("destroy"), $(this).cslider("initWidget"))
                                                        : ($(this).cslider("setPositionArrows"), $(this).cslider("slickNoSlide"), $(".slick", this).hasClass("no-slide") && ($(this).cslider("destroy"), $(this).cslider("initWidget"))));
                                            });
                                        },
                                        initialize: function () {
                                            this.element.find("img").length ? this.checkImgLoad() : this.initSlider();
                                        },
                                        checkImgLoad: function () {
                                            var t = this,
                                                e = this.element.find("img").first().attr("src");
                                            $("<img />")
                                                .attr("src", e)
                                                .css("display", "none")
                                                .on("load.cslider", function () {
                                                    t.initSlider();
                                                })
                                                .on("error.cslider", function () {
                                                    t.initSlider();
                                                });
                                        },
                                        updateSetting: function () {
                                            var t = {},
                                                e = [];
                                            if (
                                                (void 0 !== this.options.desktopItems && (t = $.extend(t, { slidesToShow: this.options.desktopItems, rows: this.options.dkRows || 1, slidesToScroll: this.options.dkScrollItems || 1 })),
                                                void 0 !== this.options.tabletItems || void 0 !== this.options.mobileItems)
                                            ) {
                                                if (void 0 !== this.options.tabletItems) {
                                                    var i = { breakpoint: 992, settings: { slidesToShow: this.options.tabletItems, rows: this.options.tbRows || 1, slidesToScroll: this.options.tbScrollItems || 1 } };
                                                    e.push(i);
                                                }
                                                if (void 0 !== this.options.mobileItems) {
                                                    var o = { breakpoint: 576, settings: { slidesToShow: this.options.mobileItems, rows: this.options.mbRows || 1, slidesToScroll: this.options.mbScrollItems || 1 } };
                                                    e.push(o);
                                                }
                                                t = $.extend(t, { responsive: e });
                                            }
                                            return t;
                                        },
                                        initSlider: function () {
                                            var t,
                                                e = this,
                                                i = {};
                                            switch (this.options.type) {
                                                case "normal":
                                                    t = $.extend({}, this.options.normal, this.updateSetting());
                                                    break;
                                                case "syncing":
                                                    (i.asNavFor = this.options.navFor), (t = this.options.view ? $.extend({}, this.options.normal, i) : $.extend({}, this.options.normal, { focusOnSelect: !0 }, i, this.updateSetting()));
                                                    break;
                                                default:
                                                    t = this.options.normal;
                                            }
                                            if (
                                                ((t = $.extend(t, {
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
                                                    speed: this.options.slideSpeed,
                                                })),
                                                this.options.autoplay && (t = $.extend(t, { autoplay: !0, pauseOnHover: !0, autoplaySpeed: 3e3 })),
                                                "verticalmode" === this.options.sliderMode && (t = $.extend(t, { vertical: !0, verticalSwiping: !0 })),
                                                "centermode" === this.options.sliderMode)
                                            ) {
                                                var o = { centerMode: !0, centerPadding: this.options.centerPadding ? this.options.centerPadding : 0 };
                                                t = $.extend(t, o);
                                            }
                                            console.log("Slick Options", t),
                                                (window._wq = window._wq || []),
                                                this.handle.on("init", function () {
                                                    e.handle.find(".slick-track > .slick-list").remove(),
                                                        $(".slick-current", e.element).find(".w_wistia").length
                                                            ? window._wq.push({
                                                                  id: $(".slick-current", e.element).find(".w_wistia").data("videoid"),
                                                                  onReady: function (t) {
                                                                      $(window).resize(), e.setPositionArrows();
                                                                  },
                                                              })
                                                            : e.setPositionArrows();
                                                }),
                                                this.handle.slick(t),
                                                this.handle.on("beforeChange.cslider", function () {
                                                    try {
                                                        var t = $(".slick-current", e.element).find(".wistia_embed").attr("id");
                                                        t && window.Wistia.api(t).pause();
                                                    } catch (t) {
                                                        console.log(t);
                                                    }
                                                }),
                                                this.handle.on("afterChange.cslider", function () {
                                                    e.setPositionArrows();
                                                }),
                                                this.slickNoSlide();
                                        },
                                        setPositionArrows: function () {
                                            var t = this.element.find(".slick-arrow"),
                                                e = this.handle.find('[aria-hidden="false"] .img-view').length ? this.handle.find('[aria-hidden="false"] .img-view') : this.handle.find('[aria-hidden="true"] .img-view'),
                                                i = 0,
                                                o = 0;
                                            t.length &&
                                                this.options.setPositionArrows &&
                                                ($(e).each(function () {
                                                    i = Math.max($(this).outerHeight(), i);
                                                }),
                                                (o = i / 2),
                                                t.animate({ top: o }, 300));
                                        },
                                        slickNoSlide: function () {
                                            var t = this.handle.slick("getSlick");
                                            t.slideCount && t.slideCount <= t.options.slidesToShow
                                                ? (this.element.addClass("wrap-no-slide"), this.handle.addClass("no-slide"))
                                                : (this.element.removeClass("wrap-no-slide"), this.handle.removeClass("no-slide"));
                                        },
                                        destroy: function () {
                                            this.handle.hasClass("slick-initialized") &&
                                                (console.log("destroyed"),
                                                this.element.find(".slick-arrow").length && this.element.find(".slick-arrow").removeAttr("style"),
                                                this.handle.slick("unslick").off("afterChange.cslider"),
                                                this.element.find(".slick-dots").remove());
                                        },
                                    }),
                                        ($.fn.cslider = function (e, i) {
                                            return this.each(function () {
                                                var t = $.data(this, "cslider");
                                                t ? t[e] && t[e](i) : $.data(this, "cslider", new r(this, e));
                                            });
                                        }),
                                        ($.fn.cslider.defaults = { handle: ".slick", normal: { infinite: !1, speed: 600, slidesToShow: 1, slidesToScroll: 1, zIndex: 5, rtl: "rtl" === $("html").attr("dir"), accessibility: !1 } });
                                }),
                            void 0 === window.$.fn.slick)
                        ) {
                            var i = document.createElement("script");
                            (i.src = "https://ctrwow-commonstorage.azureedge.net/common/js/libs/slick-v1.8.0.js"),
                                document.body.appendChild(i),
                                (i.onload = function () {
                                    window.definedWidgetCSlider(), $("[data-cslider]").cslider();
                                });
                        } else
                            window.ctrwowUtils.isBuilderMode() &&
                                $(t)
                                    .find("[data-cslider]")
                                    .each(function () {
                                        console.log(123, $.data(this, "cslider")), $.data(this, "cslider") && $(this).cslider("destroy"), $(this).cslider("initWidget");
                                    });
                    }
                    i.r(e),
                        i.d(e, "default", function () {
                            return o;
                        });
                },
            ]).default(this, t);
            console.log("run controller");
        } catch (t) {
            console.log(t);
        }
    }.bind(items[i])());

}, 3000);

   
})();
