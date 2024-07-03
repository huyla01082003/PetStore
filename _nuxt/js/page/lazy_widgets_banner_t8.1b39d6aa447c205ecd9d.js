(window.webpackJsonp = window.webpackJsonp || []).push([[42], {
    1079: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(6)
          , l = n(2)
          , c = n.n(l)
          , d = n(5)
          , o = n.n(d)
          , m = n(12)
          , f = n(0)
          , w = n(3)
          , h = n(28)
          , k = r.componentFactory.create({
            props: {
                widget: c.a.ofType().required,
                settings: c.a.ofType().required,
                isEnabledAnimation: c.a.ofType().default(!1),
                animateClassName: c.a.ofType().default("animate__fadeInUp")
            },
            render(t) {
                var e;
                return t(h.nb, {
                    class: "banner banner-t8 banner-t8-v1 kmb-widget-bg kmb-widget-no-radius",
                    attrs: {
                        settings: this.settings
                    }
                }, [t(h.mb, {
                    attrs: {
                        settings: this.settings,
                        isFullContainerByDefault: !1,
                        fullContainerClassName: "kmb-widget-container-fluid-frame"
                    }
                }, [t("div", {
                    directives: [{
                        name: "animate-onscroll",
                        value: {
                            className: "animate__animated ".concat(this.animateClassName),
                            isEnabled: this.isEnabledAnimation
                        }
                    }],
                    class: "kmb-widget-content text-center py-10"
                }, [t("div", {
                    class: "kmb-widget-row items-center md-justify-between justify-center"
                }, [t("div", {
                    class: "md-w-1-2 w-full kmb-widget-col md-text-left text-center kmb-md-widget-col-group"
                }, [t(h.cb, {
                    attrs: {
                        value: this.settings.title
                    }
                })]), t("div", {
                    class: "md-w-1-2 w-full kmb-widget-col text-right"
                }, [t("ul", {
                    class: "kmb-blog-post-share-actions-list kmb-md-widget-row justify-center md-justify-end"
                }, [!Object(w.U)(this.settings.shareActions) && (null === (e = this.settings.shareActions) || void 0 === e ? void 0 : e.map((e=>t("li", {
                    class: o()("kmb-md-widget-col kmb-widget-el-group")
                }, [t("a", {
                    attrs: {
                        href: e.url || "#",
                        target: "_blank",
                        title: Object(w.I)(f.Yc[e.type])
                    },
                    class: "kmb-share-icon-wrap",
                    ref: "noreferrer"
                }, [t("i", {
                    class: o()(Object(m.n)(e.type))
                })])]))))])])])])])])
            }
        });
        e.default = k
    },
    1080: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(6)
          , l = n(2)
          , c = n.n(l)
          , d = n(5)
          , o = n.n(d)
          , m = n(12)
          , f = n(3)
          , w = n(0)
          , h = n(28)
          , k = r.componentFactory.create({
            props: {
                widget: c.a.ofType().required,
                settings: c.a.ofType().required,
                isEnabledAnimation: c.a.ofType().default(!1),
                animateClassName: c.a.ofType().default("animate__fadeInUp")
            },
            render(t) {
                var e;
                return t(h.nb, {
                    class: "banner banner-t8 banner-t8-v2",
                    attrs: {
                        settings: this.settings
                    }
                }, [t("div", {
                    class: "kmb-widget-container"
                }, [t("div", {
                    directives: [{
                        name: "animate-onscroll",
                        value: {
                            className: "animate__animated ".concat(this.animateClassName),
                            isEnabled: this.isEnabledAnimation
                        }
                    }],
                    class: "kmb-widget-content"
                }, [t("div", {
                    class: "text-center kmb-widget-col-group"
                }, [t(h.cb, {
                    attrs: {
                        value: this.settings.title
                    }
                })]), t("div", {
                    class: "text-center"
                }, [t("ul", {
                    class: "kmb-blog-post-share-actions-list kmb-md-widget-row justify-center"
                }, [!Object(f.U)(this.settings.shareActions) && (null === (e = this.settings.shareActions) || void 0 === e ? void 0 : e.map((e=>t("li", {
                    class: o()("kmb-md-widget-col kmb-widget-el-group")
                }, [t("a", {
                    attrs: {
                        href: e.url || "#",
                        target: "_blank",
                        title: Object(f.I)(w.Yc[e.type])
                    },
                    class: "kmb-share-icon-wrap",
                    ref: "noreferrer"
                }, [t("i", {
                    class: o()(Object(m.n)(e.type))
                })])]))))])])])])])
            }
        });
        e.default = k
    }
}]);
