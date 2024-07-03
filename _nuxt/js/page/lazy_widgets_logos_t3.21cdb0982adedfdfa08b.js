(window.webpackJsonp = window.webpackJsonp || []).push([[106], {
    1678: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(6)
          , l = n(2)
          , d = n.n(l)
          , m = n(28)
          , r = n(336)
          , c = o.componentFactory.create({
            props: {
                widget: d.a.ofType().required,
                widgetIndex: d.a.ofType().default(0),
                settings: d.a.ofType().required,
                isEnabledAnimation: d.a.ofType().default(!1),
                animateClassName: d.a.ofType().default("animate__fadeInUp")
            },
            render(t) {
                var e;
                return t(m.nb, {
                    class: "logos logos-t3 logos-t3-v1",
                    attrs: {
                        settings: this.settings
                    }
                }, [t(m.mb, {
                    attrs: {
                        settings: this.settings,
                        fullContainerClassName: "kmb-widget-container-fluid-frame"
                    }
                }, [t("div", {
                    class: "kmb-widget-content logos-content kmb-widget-bg"
                }, [t("div", {
                    class: "kmb-widget-container py-10"
                }, [t(m.o, {
                    attrs: {
                        settings: this.settings,
                        animateClassName: this.animateClassName,
                        isEnabledAnimation: this.isEnabledAnimation
                    }
                }, [t(m.l, {
                    attrs: {
                        settings: this.settings,
                        widgetIndex: this.widgetIndex,
                        isEnabledDivider: !1,
                        isEnabledAnimation: !1
                    },
                    class: "text-center kmb-widget-col-group"
                }), t("div", {
                    class: "kmb-widget-logos-author kmb-widget-xl-col-group"
                }, [t(m.W, {
                    attrs: {
                        value: this.settings.author,
                        isCaption: !0
                    },
                    class: "text-center"
                })])]), t(m.X, {
                    attrs: {
                        nav: !1,
                        indicators: !0,
                        items: this.settings.items,
                        animateClassName: this.animateClassName,
                        isEnabledAnimation: this.isEnabledAnimation,
                        uiSettings: this.settings.sliderSettings,
                        settings: {
                            itemsToShow: 6,
                            breakpoints: {
                                0: {
                                    itemsToShow: 2
                                },
                                420: {
                                    itemsToShow: 3
                                },
                                560: {
                                    itemsToShow: 4
                                },
                                780: {
                                    itemsToShow: 5
                                },
                                992: {
                                    itemsToShow: 6
                                }
                            }
                        }
                    },
                    class: "kmb-site-slider-pagination-lg-group kmb-slider-aligin-center-navigation kmb-widget-slider-outside-row kmb-widget-slider-row"
                }, [null === (e = this.settings.items) || void 0 === e ? void 0 : e.map(((e,n)=>t(m.Y, {
                    attrs: {
                        index: n
                    },
                    key: e.key || n,
                    class: "kmb-widget-col text-center logos-item kmb-site-slider-full-height"
                }, [t(r.a, {
                    attrs: {
                        item: e,
                        index: n,
                        widget: this.widget,
                        isEnabledAnimation: !1
                    },
                    class: "kmb-cards-background-v2 h-full p-8"
                })])))])])])])])
            }
        });
        e.default = c
    },
    336: function(t, e, n) {
        "use strict";
        var o = n(6)
          , l = n(2)
          , d = n.n(l)
          , m = n(28)
          , r = o.componentFactory.create({
            name: "LogosItem",
            props: {
                widget: d.a.ofType().required,
                item: d.a.ofType().required,
                index: d.a.ofType().default(0),
                isEnabledAnimation: d.a.ofType().default(!1),
                animateClassName: d.a.ofType().default("animate__fadeInUp")
            },
            render(t) {
                return t("div", {
                    directives: [{
                        name: "animate-onscroll",
                        value: {
                            className: "animate__animated ".concat(this.animateClassName),
                            isEnabled: this.isEnabledAnimation
                        }
                    }],
                    class: "kmb-widget-logo-item"
                }, [t(m.B, {
                    attrs: {
                        value: this.item.image,
                        index: this.index,
                        widget: this.widget
                    },
                    class: "kmb-logos-img kmb-image-center"
                }), t(m.h, {
                    attrs: {
                        value: this.item.button,
                        classNames: "kmb-site-logo-btn"
                    },
                    class: "text-center w-full"
                })])
            }
        });
        e.a = r
    }
}]);
