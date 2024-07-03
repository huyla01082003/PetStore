/*! For license information please see ../../../../../../../../../../../../../../../../../../../LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    314: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r.default
        }
        ));
        var r = n(14);
        function c(e) {
            return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            c(e)
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function l(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var i = 0, t = new Array(e.length); i < e.length; i++)
                        t[i] = e[i];
                    return t
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function d() {
            return "undefined" != typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys
        }
        function h(e, t) {
            w(e, t),
            Object.getOwnPropertyNames(t.prototype).forEach((function(n) {
                w(e.prototype, t.prototype, n)
            }
            )),
            Object.getOwnPropertyNames(t).forEach((function(n) {
                w(e, t, n)
            }
            ))
        }
        function w(e, t, n) {
            (n ? Reflect.getOwnMetadataKeys(t, n) : Reflect.getOwnMetadataKeys(t)).forEach((function(r) {
                var c = n ? Reflect.getOwnMetadata(r, t, n) : Reflect.getOwnMetadata(r, t);
                n ? Reflect.defineMetadata(r, c, e, n) : Reflect.defineMetadata(r, c, e)
            }
            ))
        }
        var f = {
            __proto__: []
        }instanceof Array;
        function y(e, t) {
            var n = t.prototype._init;
            t.prototype._init = function() {
                var t = this
                  , n = Object.getOwnPropertyNames(e);
                if (e.$options.props)
                    for (var r in e.$options.props)
                        e.hasOwnProperty(r) || n.push(r);
                n.forEach((function(n) {
                    Object.defineProperty(t, n, {
                        get: function() {
                            return e[n]
                        },
                        set: function(t) {
                            e[n] = t
                        },
                        configurable: !0
                    })
                }
                ))
            }
            ;
            var data = new t;
            t.prototype._init = n;
            var r = {};
            return Object.keys(data).forEach((function(e) {
                void 0 !== data[e] && (r[e] = data[e])
            }
            )),
            r
        }
        var m = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];
        function O(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            t.name = t.name || e._componentTag || e.name;
            var n = e.prototype;
            Object.getOwnPropertyNames(n).forEach((function(e) {
                if ("constructor" !== e)
                    if (m.indexOf(e) > -1)
                        t[e] = n[e];
                    else {
                        var r = Object.getOwnPropertyDescriptor(n, e);
                        void 0 !== r.value ? "function" == typeof r.value ? (t.methods || (t.methods = {}))[e] = r.value : (t.mixins || (t.mixins = [])).push({
                            data: function() {
                                return o({}, e, r.value)
                            }
                        }) : (r.get || r.set) && ((t.computed || (t.computed = {}))[e] = {
                            get: r.get,
                            set: r.set
                        })
                    }
            }
            )),
            (t.mixins || (t.mixins = [])).push({
                data: function() {
                    return y(this, e)
                }
            });
            var c = e.__decorators__;
            c && (c.forEach((function(e) {
                return e(t)
            }
            )),
            delete e.__decorators__);
            var l = Object.getPrototypeOf(e.prototype)
              , w = l instanceof r.default ? l.constructor : r.default
              , f = w.extend(t);
            return z(f, e, w),
            d() && h(f, e),
            f
        }
        var V = {
            prototype: !0,
            arguments: !0,
            callee: !0,
            caller: !0
        };
        function z(e, t, n) {
            Object.getOwnPropertyNames(t).forEach((function(r) {
                if (!V[r]) {
                    var o = Object.getOwnPropertyDescriptor(e, r);
                    if (!o || o.configurable) {
                        var l, d, h = Object.getOwnPropertyDescriptor(t, r);
                        if (!f) {
                            if ("cid" === r)
                                return;
                            var w = Object.getOwnPropertyDescriptor(n, r);
                            if (l = h.value,
                            d = c(l),
                            null != l && ("object" === d || "function" === d) && w && w.value === h.value)
                                return
                        }
                        0,
                        Object.defineProperty(e, r, h)
                    }
                }
            }
            ))
        }
        function v(e) {
            return "function" == typeof e ? O(e) : function(t) {
                return O(t, e)
            }
        }
        v.registerHooks = function(e) {
            m.push.apply(m, l(e))
        }
        ;
        "undefined" != typeof Reflect && Reflect.getMetadata
    },
    331: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return w
        }
        )),
        n.d(t, "e", (function() {
            return f
        }
        )),
        n.d(t, "j", (function() {
            return m
        }
        )),
        n.d(t, "h", (function() {
            return V
        }
        )),
        n.d(t, "k", (function() {
            return j
        }
        )),
        n.d(t, "f", (function() {
            return S
        }
        )),
        n.d(t, "i", (function() {
            return T
        }
        )),
        n.d(t, "g", (function() {
            return k
        }
        )),
        n.d(t, "a", (function() {
            return x
        }
        )),
        n.d(t, "b", (function() {
            return P
        }
        )),
        n.d(t, "c", (function() {
            return R
        }
        ));
        var r = n(4)
          , c = n(7)
          , o = n(3)
          , l = n(0)
          , d = {};
        Object(o.D)(l.tc).forEach((e=>{
            d[e] = new l.L({
                isEnabled: !0
            })
        }
        ));
        var h = {};
        Object(o.D)(l.Mc).forEach((e=>{
            h[e] = new l.L({
                isEnabled: !0
            })
        }
        ));
        class w extends l.sc {
            constructor(e) {
                super(e),
                this.widgetCategory = "ProductSettings",
                this.widgetType = r.J.ProductSettingsT1,
                this.imageGallery = new l.nc({
                    type: l.tc.ImageGallery,
                    groupType: l.oc.Slider,
                    layoutType: l.pc.Vertical,
                    variationType: l.rc.V1,
                    settings: new l.qc({
                        isEnabledImageZoom: !1
                    })
                }),
                this.widgetBackgroundColor = null,
                this.widgetTextColor = null,
                this.enabledSettings = d,
                this.widgets = [new l.mc({
                    key: Object(o.yb)(),
                    name: "Product/Widget/General",
                    type: l.tc.General,
                    settings: new m,
                    isEnabled: !0,
                    isHiddenOnMobile: !1
                }), new l.mc({
                    key: Object(o.yb)(),
                    name: "Product/Widget/Actions/v1",
                    type: l.tc.Actions,
                    settings: new V,
                    isEnabled: !0,
                    isHiddenOnMobile: !1
                })],
                this.sliderSettings = new c.lb({
                    controlType: l.Uc.Arrow
                }),
                Object.assign(this, e)
            }
        }
        class f extends w {
            constructor(e) {
                super(e),
                this.widgetVariation = this.constructor.name,
                Object.assign(this, e)
            }
        }
        var y = {};
        Object(o.D)(r.o).forEach((e=>{
            y[e] = new l.L({
                isEnabled: !0
            })
        }
        ));
        class m {
            constructor(e) {
                this.elementShowSettings = y,
                Object.assign(this, e)
            }
        }
        var O = {};
        Object(o.D)(r.j).forEach((e=>{
            O[e] = new l.L({
                isEnabled: !0
            })
        }
        ));
        class V {
            constructor(e) {
                this.variationType = r.k.V1,
                this.elementShowSettings = O,
                this.buyNowButton = new c.n({
                    lczText: new c.O({
                        lczValue: "Buy now"
                    }),
                    urlType: l.Ud.ExternalLink,
                    externalLink: "/store/checkout",
                    elementType: l.Qd.StorePrimary
                }),
                this.addToCartButton = new c.n({
                    lczText: new c.O({
                        lczValue: "Add to cart"
                    }),
                    elementType: l.Qd.StoreSecondary
                }),
                this.askFormSettings = new k,
                this.shareActions = h,
                Object.assign(this, e)
            }
        }
        class z extends c.e {
            constructor(e) {
                super(e),
                this.icon = r.u.Shipping,
                this.uploadedIcon = new c.K,
                this.description = new c.z,
                Object.assign(this, e)
            }
        }
        var v = {};
        Object(o.D)(r.q).forEach((e=>{
            v[e] = new l.L({
                isEnabled: !0
            })
        }
        ));
        class j {
            constructor(e) {
                this.icon = r.r.Flame,
                this.uploadedIcon = new c.K,
                this.timerType = l.Jd.AllUsers,
                this.description = new c.z({
                    lczText: new c.O({
                        lczValue: "Sale title"
                    })
                }),
                this.iconResize = {
                    width: 20,
                    height: 24
                },
                this.finishDate = new c.y,
                this.variationType = r.s.V1,
                this.elementShowSettings = v,
                Object.assign(this, e)
            }
        }
        class S {
            constructor(e) {
                this.variationType = r.v.V1,
                this.subtitle = new c.rb({
                    lczText: new c.O({
                        lczValue: "Shipping & Return"
                    })
                }),
                this.iconResize = {
                    width: 32,
                    height: 32
                },
                this.elementShowSettings = {
                    [r.t.Subtitle]: new l.L({
                        isEnabled: !0
                    })
                },
                this.shippingAndReturnItems = [new z({
                    icon: r.u.Shipping,
                    uploadedIcon: new c.K,
                    description: new c.z({
                        lczText: new c.O({
                            lczValue: "<b>Estimated Delivery</b>: Apr 26 - Apr 30"
                        })
                    })
                }), new z({
                    icon: r.u.Free,
                    uploadedIcon: new c.K,
                    description: new c.z({
                        lczText: new c.O({
                            lczValue: "<b>Free Shipping & Returns</b>: On all orders over $75"
                        })
                    })
                }), new z({
                    icon: r.u.Eye,
                    uploadedIcon: new c.K,
                    description: new c.z({
                        lczText: new c.O({
                            lczValue: "<b>Other want this</b>: 87 people have this in the cards right now"
                        })
                    })
                })],
                Object.assign(this, e)
            }
        }
        class T {
            constructor(e) {
                this.variationType = r.n.V1,
                this.subtitle = new c.rb({
                    lczText: new c.O({
                        lczValue: "Guaranteed safe checkout"
                    })
                }),
                this.elementShowSettings = {
                    [r.m.Subtitle]: new l.L({
                        isEnabled: !0
                    })
                },
                this.garantedSafeCheckout = [new c.K({
                    imageUrl: "product-img-pack/checkout/Visa.png"
                }), new c.K({
                    imageUrl: "product-img-pack/checkout/Mastercard.png"
                }), new c.K({
                    imageUrl: "product-img-pack/checkout/PayPal.png"
                })],
                Object.assign(this, e)
            }
        }
        class E {
            constructor(e) {
                this.tabs = new c.j,
                this.variationType = r.l.V1,
                Object.assign(this, e)
            }
        }
        class k {
            constructor(e) {
                this.fields = [new c.D({
                    lczText: new c.O({
                        lczValue: "First name"
                    }),
                    type: l.R.Input,
                    isEnabled: !0
                }), new c.D({
                    lczText: new c.O({
                        lczValue: "Last name"
                    }),
                    type: l.R.Input,
                    isEnabled: !0
                }), new c.D({
                    lczText: new c.O({
                        lczValue: "Email address"
                    }),
                    type: l.R.Input,
                    isEnabled: !0,
                    isMandatory: !0,
                    validationRule: l.S.Email
                }), new c.D({
                    lczText: new c.O({
                        lczValue: "Phone"
                    }),
                    type: l.R.Input,
                    isEnabled: !0,
                    validationRule: l.S.NumbersOnly
                }), new c.D({
                    lczText: new c.O({
                        lczValue: "Notes"
                    }),
                    type: l.R.TextArea,
                    isEnabled: !0
                })],
                this.button = new c.n({
                    lczText: new c.O({
                        lczValue: "submit"
                    }),
                    elementType: l.Qd.StorePrimary
                }),
                Object.assign(this, e)
            }
        }
        l.tc.Promotion,
        r.s.V1,
        new j({
            variationType: r.s.V1
        }),
        l.tc.Variations,
        r.w.V1,
        new class {
            constructor(e) {
                this.variationType = r.w.V1,
                Object.assign(this, e)
            }
        }
        ({
            variationType: r.w.V1
        }),
        l.tc.ShippingAndReturn,
        r.v.V1,
        new S({
            variationType: r.v.V1
        }),
        l.tc.GarantedSafeCheckout,
        r.n.V1,
        new T({
            variationType: r.n.V1
        }),
        l.tc.AdditionalInformation,
        r.l.V1,
        new E({
            variationType: r.l.V1
        }),
        l.tc.AdditionalInformation,
        r.l.V2,
        new E({
            variationType: r.l.V2
        }),
        l.tc.AdditionalInformation,
        r.l.V3,
        new E({
            variationType: r.l.V3
        });
        var x = {
            [l.pc.Vertical]: "kmb-product-gallery-vertical-variation",
            [l.pc.Square]: "kmb-product-gallery-square-variation",
            [l.pc.Horizontal]: "kmb-product-gallery-horizontal-variation",
            [l.pc.Combo]: "kmb-product-gallery-combo-variation"
        }
          , P = {
            [l.pc.Vertical]: {
                [l.rc.V1]: 1,
                [l.rc.V2]: 4,
                [l.rc.V3]: 2
            },
            [l.pc.Square]: {
                [l.rc.V1]: 1,
                [l.rc.V2]: 4
            },
            [l.pc.Horizontal]: {
                [l.rc.V1]: 1,
                [l.rc.V2]: 2
            },
            [l.pc.Combo]: {
                [l.rc.V1]: 3,
                [l.rc.V2]: 3,
                [l.rc.V3]: 3
            }
        }
          , R = {
            [l.oc.Slider]: {
                [l.pc.Vertical]: {
                    [l.rc.V1]: {
                        size: {
                            width: 730,
                            height: 695
                        }
                    },
                    [l.rc.V2]: {
                        size: {
                            width: 730,
                            height: 762
                        }
                    },
                    [l.rc.V3]: {
                        size: {
                            width: 616,
                            height: 608
                        }
                    },
                    [l.rc.V4]: {
                        size: {
                            width: 730,
                            height: 762
                        }
                    }
                },
                [l.pc.Square]: {
                    [l.rc.V1]: {
                        size: {
                            width: 730,
                            height: 540
                        }
                    },
                    [l.rc.V2]: {
                        size: {
                            width: 730,
                            height: 540
                        }
                    },
                    [l.rc.V3]: {
                        size: {
                            width: 616,
                            height: 436
                        }
                    },
                    [l.rc.V4]: {
                        size: {
                            width: 730,
                            height: 540
                        }
                    }
                },
                [l.pc.Horizontal]: {
                    [l.rc.V1]: {
                        size: {
                            width: 730,
                            height: 380
                        }
                    },
                    [l.rc.V2]: {
                        size: {
                            width: 730,
                            height: 380
                        }
                    },
                    [l.rc.V3]: {
                        size: {
                            width: 616,
                            height: 305
                        }
                    },
                    [l.rc.V4]: {
                        size: {
                            width: 730,
                            height: 423
                        }
                    }
                }
            },
            [l.oc.FixedImages]: {
                [l.pc.Vertical]: {
                    [l.rc.V1]: {
                        classNames: "w-full",
                        size: {
                            width: 730,
                            height: 754
                        }
                    },
                    [l.rc.V2]: {
                        classNames: "md-w-1-2 w-full",
                        size: {
                            width: 358,
                            height: 340
                        }
                    },
                    [l.rc.V3]: {
                        classNames: "md-w-1-2 w-full",
                        size: {
                            width: 358,
                            height: 520
                        }
                    }
                },
                [l.pc.Square]: {
                    [l.rc.V1]: {
                        classNames: "w-full",
                        size: {
                            width: 730,
                            height: 540
                        }
                    },
                    [l.rc.V2]: {
                        classNames: "md-w-1-2 w-full",
                        size: {
                            width: 358,
                            height: 262
                        }
                    }
                },
                [l.pc.Horizontal]: {
                    [l.rc.V1]: {
                        classNames: "w-full",
                        size: {
                            width: 730,
                            height: 400
                        }
                    },
                    [l.rc.V2]: {
                        classNames: "w-full",
                        size: {
                            width: 730,
                            height: 340
                        }
                    }
                },
                [l.pc.Combo]: {
                    [l.rc.V1]: {
                        classNames: ["w-full", "md-w-1-2 w-full", "md-w-1-2 w-full"],
                        sizes: [{
                            width: 730,
                            height: 340
                        }, {
                            width: 358,
                            height: 262
                        }, {
                            width: 358,
                            height: 262
                        }]
                    },
                    [l.rc.V2]: {
                        classNames: ["md-w-1-2 w-full", "md-w-1-2 w-full", "w-full"],
                        sizes: [{
                            width: 358,
                            height: 400
                        }, {
                            width: 358,
                            height: 400
                        }, {
                            width: 730,
                            height: 340
                        }]
                    },
                    [l.rc.V3]: {
                        classNames: ["md-w-1-2 w-full", "md-w-1-2 w-full", "md-w-1-2 w-full"],
                        sizes: [{
                            width: 358,
                            height: 540
                        }, {
                            width: 358,
                            height: 262
                        }, {
                            width: 358,
                            height: 262
                        }]
                    }
                }
            },
            [l.oc.GalleryOnScroll]: {
                [l.pc.Vertical]: {
                    [l.rc.V1]: {
                        classNames: ["w-full", "md-w-1-2 w-full", "md-w-1-2 w-full"],
                        sizes: [{
                            width: 730,
                            height: 764
                        }, {
                            width: 358,
                            height: 340
                        }, {
                            width: 358,
                            height: 340
                        }]
                    }
                },
                [l.pc.Square]: {
                    [l.rc.V1]: {
                        classNames: ["w-full", "md-w-1-2 w-full", "md-w-1-2 w-full"],
                        sizes: [{
                            width: 730,
                            height: 540
                        }, {
                            width: 358,
                            height: 262
                        }, {
                            width: 358,
                            height: 262
                        }]
                    }
                },
                [l.pc.Combo]: {
                    [l.rc.V1]: {
                        classNames: ["md-w-1-3 w-full", "md-w-2-3 w-full", "md-w-2-3 w-full", "md-w-1-3 w-full"],
                        sizes: [{
                            width: 234,
                            height: 340
                        }, {
                            width: 482,
                            height: 340
                        }, {
                            width: 482,
                            height: 340
                        }, {
                            width: 234,
                            height: 340
                        }]
                    }
                }
            }
        }
    },
    365: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return h
        }
        )),
        n.d(t, "a", (function() {
            return y
        }
        ));
        var r = n(4)
          , c = n(3)
          , o = n(7)
          , l = n(0);
        class d extends l.F {
            constructor(e) {
                super(e),
                this.widgetCategory = "CollectionWidgetSettings",
                this.widgetType = r.J.CollectionWidgetSettingsT1,
                this.widgetTopPadding = 0,
                this.widgetBottomPadding = 0,
                Object.assign(this, e)
            }
        }
        class h extends d {
            constructor(e) {
                super(e),
                this.widgetVariation = this.constructor.name,
                Object.assign(this, e)
            }
        }
        var w = {}
          , f = {};
        Object(c.D)(l.E).forEach((e=>{
            w[e] = new l.L({
                isEnabled: !0
            })
        }
        )),
        Object(c.D)(l.A).forEach((e=>{
            f[e] = new l.L({
                isEnabled: !0
            })
        }
        ));
        class y extends l.F {
            constructor(e) {
                super(e),
                this.structureType = l.D.Simple,
                this.topFilterEnabledSettings = w,
                this.productElementShowSettings = f,
                this.sidebarWidgets = [new l.B({
                    key: Object(c.yb)(),
                    type: l.C.Collections,
                    isEnabled: !0,
                    labelOverride: new o.O({
                        lczValue: "Collections"
                    }),
                    contentListItems: []
                }), new l.B({
                    key: Object(c.yb)(),
                    type: l.C.Tags,
                    isEnabled: !0,
                    labelOverride: new o.O({
                        lczValue: "Tags"
                    }),
                    contentListItems: []
                }), new l.B({
                    key: Object(c.yb)(),
                    type: l.C.Price,
                    isEnabled: !0,
                    labelOverride: new o.O({
                        lczValue: "Price range"
                    }),
                    contentListItems: []
                }), new l.B({
                    key: Object(c.yb)(),
                    type: l.C.Filters,
                    isEnabled: !0,
                    labelOverride: new o.O({
                        lczValue: "Filters"
                    }),
                    contentListItems: []
                }), new l.B({
                    key: Object(c.yb)(),
                    type: l.C.Rating,
                    isEnabled: !0,
                    labelOverride: new o.O({
                        lczValue: "Rating"
                    }),
                    contentListItems: []
                }), new l.B({
                    key: Object(c.yb)(),
                    type: l.C.Subscribe,
                    isEnabled: !0,
                    labelOverride: new o.O({
                        lczValue: "Subscribe to our newsletter"
                    }),
                    subscribe: new l.Oc({
                        description: new o.z({
                            lczText: new o.O({
                                lczValue: "Do you want to know all the news? Subscribe our newsletter to get weekly updates."
                            })
                        }),
                        formSettings: new o.sb
                    })
                })],
                this.filterWidgets = [new l.y({
                    key: Object(c.yb)(),
                    type: l.z.Tags,
                    isEnabled: !1,
                    labelOverride: new o.O({
                        lczValue: "Tags"
                    }),
                    contentListItems: []
                }), new l.y({
                    key: Object(c.yb)(),
                    type: l.z.Price,
                    isEnabled: !1,
                    labelOverride: new o.O({
                        lczValue: "Price"
                    }),
                    contentListItems: []
                }), new l.y({
                    key: Object(c.yb)(),
                    type: l.z.Rating,
                    isEnabled: !1,
                    labelOverride: new o.O({
                        lczValue: "Rating"
                    }),
                    contentListItems: []
                }), new l.y({
                    key: Object(c.yb)(),
                    type: l.z.Filters,
                    isEnabled: !0,
                    labelOverride: new o.O({
                        lczValue: "Filters"
                    }),
                    contentListItems: []
                })],
                this.productItemButtonLabel = "Add to cart",
                this.styleSettings = new l.dc,
                Object.assign(this, e)
            }
        }
    },
    391: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }
        )),
        n.d(t, "b", (function() {
            return h
        }
        )),
        n.d(t, "c", (function() {
            return w
        }
        ));
        var r = n(4)
          , c = n(7);
        class o extends c.a {
            constructor(e) {
                super(e),
                this.widgetCategory = "ProductBundleSettings",
                Object.assign(this, e)
            }
        }
        class l extends o {
            constructor(e) {
                super(e),
                this.widgetType = r.J.ProductBundleSettingsT1,
                this.title = new c.Vb({
                    lczText: new c.O({
                        lczValue: "Related products"
                    })
                }),
                this.bundleId = null,
                this.isEnabledProductVariations = new c.d,
                this.button = new c.q,
                this.imageResize = {
                    width: 217,
                    height: 309
                },
                this.itemsCount = 4,
                Object.assign(this, e)
            }
        }
        class d extends l {
            constructor(e) {
                super(e),
                this.widgetVariation = this.constructor.name,
                this.itemsCount = 4,
                Object.assign(this, e)
            }
        }
        class h extends l {
            constructor(e) {
                super(e),
                this.widgetVariation = this.constructor.name,
                this.itemsCount = 3,
                Object.assign(this, e)
            }
        }
        class w extends l {
            constructor(e) {
                super(e),
                this.widgetVariation = this.constructor.name,
                this.itemsCount = 2,
                this.imageResize = {
                    width: 317,
                    height: 309
                },
                Object.assign(this, e)
            }
        }
    }
}]);
