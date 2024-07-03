(window.webpackJsonp = window.webpackJsonp || []).push([[144], {
    1704: function(e, t, n) {
        "use strict";
        n.r(t);
        var m = n(6)
          , l = n(2)
          , c = n.n(l)
          , d = n(28)
          , r = m.componentFactory.create({
            props: {
                widget: c.a.ofType().required,
                settings: c.a.ofType().required,
                isEnabledAnimation: c.a.ofType().default(!1),
                animateClassName: c.a.ofType().default("animate__fadeInUp")
            },
            render(e) {
                var t;
                return e(d.nb, {
                    class: "services services-t9 services-t9-v1 kmb-widget-bg",
                    attrs: {
                        settings: this.settings
                    }
                }, [e(d.mb, {
                    attrs: {
                        settings: this.settings,
                        fullContainerClassName: "kmb-widget-container-fluid-frame"
                    }
                }, [e("div", {
                    class: "kmb-widget-content services-content"
                }, [e("div", {
                    class: "kmb-widget-row justify-center"
                }, [null === (t = this.settings.items) || void 0 === t ? void 0 : t.map(((t,n)=>e("div", {
                    key: t.key || n,
                    directives: [{
                        name: "animate-onscroll",
                        value: {
                            className: "animate__animated ".concat(this.animateClassName),
                            isEnabled: this.isEnabledAnimation
                        }
                    }],
                    class: "xl-w-1-4 md-w-1-2 w-full kmb-widget-col my-6"
                }, [e("div", {
                    class: "flex -mx-4 md-flex-row flex-col items-center justify-center"
                }, [e("div", {
                    class: "w-24 kmb-widget-col kmb-md-widget-col-group"
                }, [e(d.B, {
                    attrs: {
                        index: n,
                        value: t.image,
                        type: "icon",
                        widget: this.widget
                    },
                    class: "kmb-widget-service-image kmb-widget-full-image kmb-md-image-center"
                })]), e("div", {
                    class: "w-5-6 kmb-widget-col"
                }, [e(d.cb, {
                    attrs: {
                        value: t.serviceName
                    },
                    class: "kmb-widget-item-title kmb-service-name md-text-left text-center"
                })])])])))])])])])
            }
        });
        t.default = r
    }
}]);
