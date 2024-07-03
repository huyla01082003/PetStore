(window.webpackJsonp = window.webpackJsonp || []).push([[218], {
    1613: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(9)
          , o = r(314)
          , l = r(3)
          , c = r(0)
          , d = r(10)
          , m = r(63)
          , h = r(322)
          , y = c.ec.Page
          , T = function() {
            var e = Object(n.a)((function*(e, t, r, n) {
                try {
                    var o = new c.nb({
                        id: r,
                        siteId: t
                    });
                    return r || (o.slug = null,
                    o.pageType = c.fc.Home),
                    yield e.get(o)
                } catch (e) {
                    throw e
                }
            }
            ));
            return function(t, r, n, o) {
                return e.apply(this, arguments)
            }
        }()
          , f = function() {
            var e = Object(n.a)((function*(e, t, r) {
                try {
                    var {pageId: n} = (null == t ? void 0 : t.homePageSettings) || {}
                      , o = function() {
                        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new c.T, {homePageSettings: r, enabledApps: n={}} = t, o = (null == r ? void 0 : r.pageTemplateType) || y;
                        return o !== c.ec.BlogPageList || null !== (e = n[c.a.Blog]) && void 0 !== e && e.isEnabled ? o : y
                    }(t) || y;
                    return {
                        page: yield T(e, r, n, o),
                        pageTemplateType: o
                    }
                } catch (e) {
                    throw e
                }
            }
            ));
            return function(t, r, n) {
                return e.apply(this, arguments)
            }
        }();
        class v {
            constructor() {
                this.site = new c.T,
                this.pageTemplateType = c.ec.Page
            }
        }
        t.default = o.a.extend({
            name: "Home",
            data: ()=>new v,
            head() {
                return {
                    bodyAttrs: {
                        class: (e = this.pageTemplateType,
                        e === c.ec.BlogPageList ? ["kmb-blog-template-default"] : ["kmb-general-template-default"])
                    }
                };
                var e
            },
            asyncData: e=>Object(n.a)((function*() {
                var {$api: t, $site: r, $cookies: n, $lcz: o, store: l, error: c} = e;
                try {
                    var h = l.getters.getSite(n, r) || {}
                      , y = Object(m.a)({
                        store: l,
                        $cookies: n
                    }, null == r ? void 0 : r.id)
                      , {page: T, pageTemplateType: v} = yield f(t, h, y);
                    return l.dispatch("setPage", T),
                    {
                        site: h,
                        page: T,
                        pageTemplateType: v
                    }
                } catch (e) {
                    return null === d.a || void 0 === d.a || d.a.errorLog({
                        error_name: e.name,
                        message: e.message,
                        stack: e.stack,
                        source_dir: "pages/",
                        source_file: "index.tsx"
                    }),
                    c({
                        statusCode: 404,
                        message: null == o ? void 0 : o.t("messages.pageNotFound")
                    })
                }
            }
            ))(),
            beforeDestroy() {
                this.page = null
            },
            render(e) {
                if (!Object(l.W)(this.page))
                    return e(h.a, {
                        attrs: {
                            site: this.site,
                            page: this.page
                        }
                    })
            }
        })
    },
    322: function(e, t, r) {
        "use strict";
        var n = r(6)
          , o = r(2)
          , l = r.n(o)
          , c = r(5)
          , d = r.n(c)
          , m = r(75)
          , h = r(16)
          , y = r(12)
          , T = r(10)
          , f = r(348)
          , v = n.componentFactory.mixin(h.D).create({
            name: "WebSitePageTemplate",
            props: {
                site: l.a.ofType().optional,
                page: l.a.ofType().required
            },
            head() {
                var {title: title, meta: meta} = Object(y.I)(this.page);
                return {
                    title: title,
                    meta: meta
                }
            },
            render(e) {
                if (this.page)
                    return e("div", {
                        class: d()(Object(y.i)(this.page)),
                        attrs: {
                            "data-page-template-type": this.page.pageTemplateType
                        }
                    }, [Object(y.J)(e, f.a, this.page, this.currentSite, m.a)]);
                null === T.a || void 0 === T.a || T.a.warnLog({
                    message: "Page is unavailable!",
                    source_dir: "components/Builder/Templates/WebSitePageCategoryTemplate/",
                    source_file: "index.tsx"
                })
            }
        });
        t.a = v
    }
}]);
