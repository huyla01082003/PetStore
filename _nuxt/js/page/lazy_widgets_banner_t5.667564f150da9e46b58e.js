(window.webpackJsonp = window.webpackJsonp || []).push([[39], {
    1661: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(6)
          , d = n(2)
          , l = n.n(d)
          , o = n(0)
          , m = n(28)
          , c = r.componentFactory.create({
            props: {
                widget: l.a.ofType().required,
                widgetIndex: l.a.ofType().default(0),
                settings: l.a.ofType().required,
                isEnabledAnimation: l.a.ofType().default(!1),
                animateClassName: l.a.ofType().default("animate__fadeInUp")
            },
            render(t) {
                var e, n;
                return t(m.nb, {
                    class: "banner banner-t5 banner-t5-v1 kmb-widget-bg",
                    attrs: {
                        settings: this.settings
                    }
                }, [t("div", {
                    class: "kmb-widget-container-fluid"
                }, [t(m.o, {
                    attrs: {
                        settings: this.settings,
                        animateClassName: this.animateClassName,
                        isEnabledAnimation: this.isEnabledAnimation
                    },
                    class: "kmb-widget-content text-center"
                }, [t(m.bb, {
                    attrs: {
                        value: this.settings.subtitle
                    }
                }), t(m.ib, {
                    attrs: {
                        value: this.settings.title,
                        widgetIndex: this.widgetIndex,
                        isEnabledDivider: !1
                    },
                    class: "kmb-banner-title"
                }), t(m.i, {
                    attrs: {
                        isEnabled: null === (e = this.settings.primaryButton) || void 0 === e ? void 0 : e.isEnabled
                    },
                    class: "kmb-widget-btn-group-center"
                }, [t(m.h, {
                    attrs: {
                        value: this.settings.primaryButton,
                        isEnabled: null === (n = this.settings.primaryButton) || void 0 === n ? void 0 : n.isEnabled,
                        elementType: o.Qd.Primary
                    }
                })])])])])
            }
        });
        e.default = c
    }
}]);
