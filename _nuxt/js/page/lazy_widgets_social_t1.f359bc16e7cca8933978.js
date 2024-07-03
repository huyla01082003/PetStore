(window.webpackJsonp = window.webpackJsonp || []).push([[171], {
    1304: function(e, t, n) {
        "use strict";
        n.r(t);
        var d = n(6)
          , o = n(2)
          , l = n.n(o)
          , m = n(28)
          , r = d.componentFactory.create({
            props: {
                widget: l.a.ofType().required,
                widgetIndex: l.a.ofType().default(0),
                settings: l.a.ofType().required,
                isEnabledAnimation: l.a.ofType().default(!1),
                animateClassName: l.a.ofType().default("animate__fadeInUp")
            },
            render(e) {
                var t;
                return e(m.nb, {
                    class: "kmb-widget-embedded kmb-widget-instagram-embedded social-t1 social-t1-v1",
                    attrs: {
                        settings: this.settings
                    }
                }, [e(m.mb, {
                    attrs: {
                        settings: this.settings,
                        fullContainerClassName: "kmb-widget-container-fluid-frame"
                    }
                }, [e("div", {
                    class: "kmb-widget-content kmb-widget-slider-content"
                }, [e(m.X, {
                    attrs: {
                        nav: !1,
                        indicators: !0,
                        settings: {
                            itemsToShow: 4,
                            breakpoints: {
                                1200: {
                                    itemsToShow: 4
                                },
                                991: {
                                    itemsToShow: 3
                                },
                                768: {
                                    itemsToShow: 2
                                },
                                0: {
                                    itemsToShow: 1
                                }
                            }
                        },
                        items: this.settings.items,
                        uiSettings: this.settings.sliderSettings,
                        animateClassName: this.animateClassName,
                        isEnabledAnimation: this.isEnabledAnimation
                    },
                    class: "kmb-widget-slider-row kmb-widget-slider-fluid-row h-full"
                }, [null === (t = this.settings.items) || void 0 === t ? void 0 : t.map(((t,n)=>e(m.Y, {
                    attrs: {
                        index: n
                    },
                    key: t.key || n,
                    class: "kmb-widget-col"
                }, [e(m.C, {
                    attrs: {
                        settings: t,
                        isFull: !0
                    }
                })])))])])])])
            }
        });
        t.default = r
    },
    1305: function(e, t, n) {
        "use strict";
        n.r(t);
        var d = n(6)
          , o = n(2)
          , l = n.n(o)
          , m = n(3)
          , r = n(28)
          , c = d.componentFactory.create({
            props: {
                widget: l.a.ofType().required,
                widgetIndex: l.a.ofType().default(0),
                settings: l.a.ofType().required,
                isEnabledAnimation: l.a.ofType().default(!1),
                animateClassName: l.a.ofType().default("animate__fadeInUp")
            },
            render(e) {
                var t;
                return e(r.nb, {
                    class: "kmb-widget-embedded kmb-widget-instagram-embedded social-t1 social-t1-v2",
                    attrs: {
                        settings: this.settings
                    }
                }, [e(r.mb, {
                    attrs: {
                        settings: this.settings,
                        fullContainerClassName: "kmb-widget-container-fluid-frame"
                    }
                }, [e("div", {
                    class: "kmb-widget-content kmb-gallery-content text-center"
                }, [!Object(m.U)(this.settings.items) && e("div", {
                    directives: [{
                        name: "animate-onscroll",
                        value: {
                            className: "animate__animated ".concat(this.animateClassName),
                            isEnabled: this.isEnabledAnimation
                        }
                    }],
                    class: "kmb-xs-widget-row gallery-row justify-center py-1"
                }, [null === (t = this.settings.items) || void 0 === t ? void 0 : t.map(((t,n)=>e("div", {
                    key: t.key || n,
                    class: "kmb-xs-widget-col"
                }, [e(r.C, {
                    attrs: {
                        settings: t
                    },
                    class: "overflow-hidden"
                })])))])])])])
            }
        });
        t.default = c
    }
}]);
