(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
  [0],
  {
    112: function (e, n, t) {
      "use strict";
      t.r(n);
      var c,
        i = t(0),
        r = t(42),
        s = t.n(r),
        a = t(3),
        j = t(4),
        o = t(67),
        b = t.n(o),
        l = t(152),
        d = t(45),
        x = t.n(d);
      const p = (e) =>
        Object(j.a)(
          c ||
            (c = Object(a.a)([
              "\n        @media only screen and (max-width: 380px){\n            ",
              "\n        }\n    ",
            ])),
          e,
        );
      var O = t(15),
        h = t(16),
        g = t(34);
      const u = Object(g.b)({
          name: "user",
          initialState: { currentUser: null, isFetching: !1, error: !1 },
          reducers: {
            loginStart: (e) => {
              e.isFetching = !0;
            },
            loginSuccess: (e, n) => {
              (e.isFetching = !1), (e.currentUser = n.payload);
            },
            loginFailure: (e) => {
              (e.isFetching = !1), (e.error = !0);
            },
            logOut: (e) => {
              e.currentUser = null;
            },
          },
        }),
        {
          loginStart: f,
          loginSuccess: m,
          loginFailure: v,
          logOut: y,
        } = u.actions;
      var w,
        S,
        k,
        C,
        E,
        A,
        R,
        N,
        T,
        z,
        I = u.reducer,
        L = t(1);
      const D = j.b.div(
          w || (w = Object(a.a)(["\nheight: 60px;\n", "\n"])),
          p({ height: "50px" }),
        ),
        U = j.b.div(
          S ||
            (S = Object(a.a)([
              "\npadding: 10px 20px;\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\n",
              "\n",
            ])),
          p({ padding: "10px 0px" }),
        ),
        F = j.b.div(
          k ||
            (k = Object(a.a)([
              "\n    flex: 1;\n    display: flex;\n    align-items: center;\n",
            ])),
        ),
        P = j.b.span(
          C ||
            (C = Object(a.a)([
              "\n    font-size: 14px;\n    cursor: pointer;\n    ",
              "\n",
            ])),
          p({ display: "none" }),
        ),
        q = j.b.div(
          E ||
            (E = Object(a.a)([
              "\n    border: 0.5px solid lightgray;\n    display: flex;\n    align-items: center;\n    margin-left: 25px;\n    padding: 5px;\n",
            ])),
        ),
        W = j.b.input(
          A || (A = Object(a.a)(["\n    border: none;\n    ", "\n"])),
          p({ width: "50px" }),
        ),
        B = j.b.div(R || (R = Object(a.a)(["\n    flex: 1;\n"]))),
        G = j.b.h1(
          N ||
            (N = Object(a.a)([
              "\n    font-weight: bolt;\n    text-align: center;\n    ",
              ";\n",
            ])),
          p({ fontSize: "24px" }),
        ),
        M = j.b.div(
          T ||
            (T = Object(a.a)([
              "\n    flex: 1;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    ",
              ";\n",
            ])),
          p({ flex: 2, justifyContent: "center" }),
        ),
        Y = j.b.div(
          z ||
            (z = Object(a.a)([
              "\n    font-sixe: 14px;\n    cursor: pointer;\n    margin-left: 25px;\n    ",
              ";\n",
            ])),
          p({ fontSize: "12px", marginLeft: "10px" }),
        );
      var H,
        V = () => {
          const e = Object(O.c)((e) => {
              var n;
              return null === (n = e.cart) || void 0 === n
                ? void 0
                : n.quantity;
            }),
            n = Object(O.b)();
          return Object(L.jsx)(D, {
            children: Object(L.jsxs)(U, {
              children: [
                Object(L.jsxs)(F, {
                  children: [
                    Object(L.jsx)(P, { children: "EN" }),
                    Object(L.jsxs)(q, {
                      children: [
                        Object(L.jsx)(W, { placeholder: "Search" }),
                        Object(L.jsx)(b.a, {
                          style: { color: "gray", fontSize: 16 },
                        }),
                      ],
                    }),
                  ],
                }),
                Object(L.jsx)(B, {
                  children: Object(L.jsx)(G, { children: "rira." }),
                }),
                Object(L.jsxs)(M, {
                  children: [
                    "/" === window.location.pathname &&
                      Object(L.jsx)(Y, {
                        onClick: (e) => {
                          e.preventDefault(), n(y());
                        },
                        children: "SIGN OUT",
                      }),
                    "/" !== window.location.pathname &&
                      Object(L.jsx)(h.b, {
                        to: "/",
                        children: Object(L.jsx)(Y, { children: "Home" }),
                      }),
                    Object(L.jsx)(h.b, {
                      to: "/cart",
                      children: Object(L.jsx)(Y, {
                        children: Object(L.jsx)(l.a, {
                          badgeContent: e,
                          color: "primery",
                          children: Object(L.jsx)(x.a, {}),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      const _ = j.b.div(
        H ||
          (H = Object(a.a)([
            "\n    height: 30px;\n    background-color: teal;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 14px;\n",
          ])),
      );
      var $ = () =>
          Object(L.jsx)(_, {
            children: "YO! free shipping on orders over $50, sooo.. shop more",
          }),
        J = t(69),
        K = t.n(J),
        X = t(70),
        Q = t.n(X);
      const Z = [
          {
            id: 1,
            img: "https://user-images.githubusercontent.com/75200810/235105280-90f8739c-6e13-4c46-97ec-0f552f3b225a.png",
            title: "SUMMER SALE",
            desc: "DON'T COMPROMISE IN STYLE BABE! GET FLAT 30% OFF FOR ALL NEW ARRIVALS.",
            bg: "f5fafd",
          },
          {
            id: 2,
            img: "https://user-images.githubusercontent.com/75200810/236617382-592ea9a2-83fc-475d-ae8a-00171185e7f7.png",
            title: "AUTUMN COLLECTION",
            desc: "DON'T COMPROMISE IN STYLE BABE! GET FLAT 30% OFF FOR ALL NEW ARRIVALS.",
            bg: "fcfled",
          },
          {
            id: 3,
            img: "https://user-images.githubusercontent.com/75200810/236617449-02964c70-c8eb-44ee-acb4-0adfae05f770.png",
            title: "LOUNGEWEAR LOVE",
            desc: "DON'T COMPROMISE IN STYLE BABE! GET FLAT 30% OFF FOR ALL NEW ARRIVALS.",
            bg: "fbf0f4",
          },
        ],
        ee = [
          {
            id: 1,
            img: "https://user-images.githubusercontent.com/75200810/236661178-25096536-37b0-45c9-8c5e-a0b552117c70.png",
            title: "SHIRT STYLE!",
            cat: "women",
          },
          {
            id: 2,
            img: "https://user-images.githubusercontent.com/75200810/236661206-abad8969-8630-4a36-bf13-70d8f83ef64f.png",
            title: "LOUNGEWEAR LOVE",
            cat: "man",
          },
          {
            id: 3,
            img: "https://user-images.githubusercontent.com/75200810/236661242-1108a421-6a14-48df-93c4-80708322cf70.png",
            title: "COOL CASUAL",
            cat: "kids",
          },
        ];
      var ne, te, ce, ie, re, se, ae, je, oe, be;
      const le = j.b.div(
          ne ||
            (ne = Object(a.a)([
              "\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  position: reletive;\n  overflow: hidden;\n  ",
              ";\n",
            ])),
          p({ display: "none" }),
        ),
        de = j.b.div(
          te ||
            (te = Object(a.a)([
              "\n  width: 50px;\n  height: 50px;\n  background-color: #fff7f7f;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: ",
              ";\n  right: ",
              ";\n  margin: auto;\n  cursor: pointer;\n  opacity: 0.5;\n  z-index: 2;\n",
            ])),
          (e) => "left" === e.direction && "10px",
          (e) => "right" === e.direction && "10px",
        ),
        xe = j.b.div(
          ce ||
            (ce = Object(a.a)([
              "\n  height: 100px;\n  display: flex;\n  transition: all 1s ease;\n  transform: translateX(",
              "vw);\n",
            ])),
          (e) => -100 * e.slideIndex,
        ),
        pe = j.b.div(
          ie ||
            (ie = Object(a.a)([
              "\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  background-color: #",
              ";\n",
            ])),
          (e) => e.bg,
        ),
        Oe = j.b.img(
          re || (re = Object(a.a)(["\n  height: 80%;\n  wight: 100%;\n"])),
        ),
        he = j.b.div(
          se ||
            (se = Object(a.a)([
              "\n  height: 100%;\n  flex: 1;\n  padding: 50px;\n",
            ])),
        ),
        ge = j.b.h1(ae || (ae = Object(a.a)(["\n  font-size: 70px;\n"]))),
        ue = j.b.p(
          je ||
            (je = Object(a.a)([
              "\n  margin: 50px 0px;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 3px;\n",
            ])),
        ),
        fe = j.b.button(
          oe ||
            (oe = Object(a.a)([
              "\n  padding: 10px;\n  font-size: 20px;\n  backbround-color: transparent;\n  cursor: pointer;\n",
            ])),
        ),
        me = j.b.div(be || (be = Object(a.a)(["\n  flex: 1;\n"])));
      var ve,
        ye,
        we,
        Se,
        ke,
        Ce = () => {
          const [e, n] = Object(i.useState)(0),
            t = (t) => {
              n("left" === t ? (e > 0 ? e - 1 : 2) : e < 2 ? e + 1 : 0);
            };
          return Object(L.jsxs)(le, {
            children: [
              Object(L.jsx)(de, {
                direction: "left",
                onClick: () => t("left"),
                children: Object(L.jsx)(K.a, {}),
              }),
              Object(L.jsx)(xe, {
                slideIndex: e,
                children: Z.map((e) =>
                  Object(L.jsxs)(
                    pe,
                    {
                      bg: e.bg,
                      children: [
                        Object(L.jsx)(he, {
                          children: Object(L.jsx)(Oe, { src: e.img }),
                        }),
                        Object(L.jsxs)(me, {
                          children: [
                            Object(L.jsx)(ge, { children: e.title }),
                            Object(L.jsx)(ue, { children: e.desc }),
                            Object(L.jsx)(fe, { children: "SHOP NOW" }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
              Object(L.jsx)(de, {
                direction: "right",
                onClick: () => t("right"),
                children: Object(L.jsx)(Q.a, {}),
              }),
            ],
          });
        };
      const Ee = j.b.div(
          ve ||
            (ve = Object(a.a)([
              "\n    flex: 1;\n    height: 70vh;\n    margin: 3px;\n    position: relative;\n    ",
            ])),
        ),
        Ae = j.b.img(
          ye ||
            (ye = Object(a.a)([
              "\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    ",
              ";\n    ",
            ])),
          p({ height: "30vh" }),
        ),
        Re = j.b.div(
          we ||
            (we = Object(a.a)([
              "\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n",
            ])),
        ),
        Ne = j.b.h1(
          Se ||
            (Se = Object(a.a)([
              "\n    color: pink;\n    margin-bottom: 20px;\n",
            ])),
        ),
        Te = j.b.button(
          ke ||
            (ke = Object(a.a)([
              "\n    boder: none;\n    padding: 10px;\n    background-color: white;\n    color: gray;\n    cursor: pointer;\n    font-weight: 600;\n",
            ])),
        );
      var ze,
        Ie = (e) => {
          let { item: n } = e;
          return Object(L.jsx)(Ee, {
            children: Object(L.jsxs)(h.b, {
              to: "/products/".concat(n.cat),
              children: [
                Object(L.jsx)(Ae, { src: n.img }),
                Object(L.jsxs)(Re, {
                  children: [
                    Object(L.jsx)(Ne, { children: n.title }),
                    Object(L.jsx)(Te, { children: " SHOP NOW" }),
                  ],
                }),
              ],
            }),
          });
        };
      const Le = j.b.div(
        ze ||
          (ze = Object(a.a)([
            "\n    display: flex;\n    padding: 20px;\n    justify-content: space-between;\n    ",
            ";\n\n",
          ])),
        p({ padding: "0px", flexDirection: "column" }),
      );
      var De,
        Ue,
        Fe,
        Pe,
        qe,
        We = () =>
          Object(L.jsx)(Le, {
            children: ee.map((e) => Object(L.jsx)(Ie, { item: e }, e.id)),
          }),
        Be = t(71),
        Ge = t.n(Be),
        Me = t(72),
        Ye = t.n(Me);
      const He = j.b.div(
          De ||
            (De = Object(a.a)([
              "\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rbga(0,0,0, 0.2);\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.5s easy;\n  cursor: pointer;\n",
            ])),
        ),
        Ve = j.b.div(
          Ue ||
            (Ue = Object(a.a)([
              "\n  flex: 1;\n  margin: 5px;\n  min-width: 380px;\n  height: 350px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5fbfb;\n  position: relative;\n\n  &: hover ",
              "{\n    opacity: 1;\n  }\n",
            ])),
          He,
        ),
        _e = j.b.div(
          Fe ||
            (Fe = Object(a.a)([
              "\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background-color: white;\n  position: absolute;\n",
            ])),
        ),
        $e = j.b.img(
          Pe || (Pe = Object(a.a)(["\n  height: 75%;\n  z-index: 2;\n"])),
        ),
        Je = j.b.div(
          qe ||
            (qe = Object(a.a)([
              "\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 10px;\n  transition: all 0.5s ease;\n\n  &:hover{\n    background-color: #e9f5f5;\n    transform: scale(1.1);\n  }\n",
            ])),
        );
      var Ke,
        Xe = (e) => {
          let { item: n } = e;
          return Object(L.jsxs)(Ve, {
            children: [
              Object(L.jsx)(_e, {}),
              Object(L.jsx)($e, { src: n.img }),
              Object(L.jsxs)(He, {
                children: [
                  Object(L.jsx)(Je, { children: Object(L.jsx)(x.a, {}) }),
                  Object(L.jsx)(Je, {
                    children: Object(L.jsx)(h.b, {
                      to: "/product/".concat(n._id),
                      children: Object(L.jsx)(Ge.a, {}),
                    }),
                  }),
                  Object(L.jsx)(Je, { children: Object(L.jsx)(Ye.a, {}) }),
                ],
              }),
            ],
          });
        },
        Qe = t(155);
      const Ze = j.b.div(
        Ke ||
          (Ke = Object(a.a)([
            "\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n",
          ])),
      );
      var en,
        nn,
        tn,
        cn,
        rn,
        sn,
        an = (e) => {
          let { cat: n, filters: t, sort: c } = e;
          const [r, s] = Object(i.useState)([]),
            [a, j] = Object(i.useState)([]);
          return (
            Object(i.useEffect)(() => {
              (async () => {
                try {
                  const e = await Qe.a.get(
                    n
                      ? "https://rira-ecommerce-api.vercel.app/api/products?category=".concat(
                          n,
                        )
                      : "https://rira-ecommerce-api.vercel.app/api/products",
                  );
                  s(e.data);
                } catch (e) {
                  console.log(e);
                }
              })();
            }, [n]),
            Object(i.useEffect)(() => {
              j(
                n
                  ? r.filter((e) =>
                      Object.entries(t).every((n) => {
                        let [t, c] = n;
                        return e[t].includes(c);
                      }),
                    )
                  : r,
              );
            }, [r, n, t]),
            Object(i.useEffect)(() => {
              j(
                "newest" === c
                  ? (e) => [...e].sort((e, n) => e.createdAt - n.createdAt)
                  : "asc" === c
                    ? (e) => [...e].sort((e, n) => e.price - n.price)
                    : (e) => [...e].sort((e, n) => n.price - e.price),
              );
            }, [c]),
            Object(L.jsx)(Ze, {
              children: n
                ? a.map((e) => Object(L.jsx)(Xe, { item: e }, e.id))
                : r
                    .slice(0, 8)
                    .map((e) => Object(L.jsx)(Xe, { item: e }, e.id)),
            })
          );
        },
        jn = t(73),
        on = t.n(jn);
      const bn = j.b.div(
          en ||
            (en = Object(a.a)([
              "\n  height: 60vh;\n  background-color: #fcf5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n",
            ])),
        ),
        ln = j.b.h1(
          nn ||
            (nn = Object(a.a)([
              "\n  font-size: 70px;\n  margin-bottom: 20px; \n",
            ])),
        ),
        dn = j.b.div(
          tn ||
            (tn = Object(a.a)([
              "\n  font-size: 24px;\n  font-weight: 300;\n  margin-bottom: 20px;\n  ",
              ";\n  ",
            ])),
          p({ textAlign: "center" }),
        ),
        xn = j.b.div(
          cn ||
            (cn = Object(a.a)([
              "\n  width: 50%;\n  height: 40px;\n  background-color: white;\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid lightgray;\n  ",
              ";\n",
            ])),
          p({ width: "80%" }),
        ),
        pn = j.b.input(
          rn ||
            (rn = Object(a.a)([
              "\n  border: none;\n  flex: 8;\n  padding-left: 20px;\n",
            ])),
        ),
        On = j.b.button(
          sn ||
            (sn = Object(a.a)([
              "\n  flex: 1;\n  border: none;\n  background-color: teal;\n  color: white;\n",
            ])),
        );
      var hn,
        gn,
        un,
        fn,
        mn,
        vn,
        yn,
        wn,
        Sn,
        kn,
        Cn,
        En,
        An,
        Rn = () =>
          Object(L.jsxs)(bn, {
            children: [
              Object(L.jsx)(ln, { children: "Newsletter" }),
              Object(L.jsx)(dn, {
                children: "Get timely updates from your faviorite brands.",
              }),
              Object(L.jsxs)(xn, {
                children: [
                  Object(L.jsx)(pn, { placeholder: "your email" }),
                  Object(L.jsx)(On, { children: Object(L.jsx)(on.a, {}) }),
                ],
              }),
            ],
          }),
        Nn = t(74),
        Tn = t.n(Nn),
        zn = t(75),
        In = t.n(zn),
        Ln = t(76),
        Dn = t.n(Ln),
        Un = t(77),
        Fn = t.n(Un),
        Pn = t(78),
        qn = t.n(Pn),
        Wn = t(79),
        Bn = t.n(Wn),
        Gn = t(80),
        Mn = t.n(Gn);
      const Yn = j.b.div(
          hn ||
            (hn = Object(a.a)([
              "\n    display: flex;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    ",
              ";\n\n",
            ])),
          p({ flexDirection: "column" }),
        ),
        Hn = j.b.div(gn || (gn = Object(a.a)(["\n    flex: 1;\n "]))),
        Vn = j.b.div(
          un ||
            (un = Object(a.a)([
              "\n    flex: 1;\n    paddind: 20px;\n    ",
              ";\n",
            ])),
          p({ display: "none" }),
        ),
        _n = j.b.h3(
          fn || (fn = Object(a.a)(["\n    margin-bottom: 30px;\n\n"])),
        ),
        $n = j.b.ul(
          mn ||
            (mn = Object(a.a)([
              "\n    margin: 0;\n    padding:0;\n    list-style: none;\n    display: flex;\n    flex-wrap: wrap;\n",
            ])),
        ),
        Jn = j.b.li(
          vn ||
            (vn = Object(a.a)([
              "\n    width: 50%;\n    margin-bottom: 20px;\n",
            ])),
        ),
        Kn = j.b.div(
          yn ||
            (yn = Object(a.a)([
              "\n    flex: 1;\n    paddind: 20px;\n    ",
              ";\n",
            ])),
          p({ backgroundColor: "#eee", padding: "15px" }),
        ),
        Xn = j.b.div(
          wn ||
            (wn = Object(a.a)([
              "\n    margin-botton: 20px;\n    display: flex;\n    align-items: center;\n\n",
            ])),
        ),
        Qn = j.b.div(Sn || (Sn = Object(a.a)([""]))),
        Zn = j.b.h1(kn || (kn = Object(a.a)([""]))),
        et = j.b.p(Cn || (Cn = Object(a.a)(["\n    margin: 20px 0px;\n"]))),
        nt = j.b.div(En || (En = Object(a.a)(["\n    display: flex;\n"]))),
        tt = j.b.div(
          An ||
            (An = Object(a.a)([
              "\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    color: white;\n    background-color: #",
              ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 20px;\n",
            ])),
          (e) => e.color,
        );
      var ct = () =>
        Object(L.jsxs)(Yn, {
          children: [
            Object(L.jsxs)(Hn, {
              children: [
                Object(L.jsx)(Zn, { children: "RIRA" }),
                Object(L.jsx)(et, {
                  children:
                    "There are many variation of passages of Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit deleniti cum sit magni iure maxime, culpa excepturi impedit quae temporibus quaerat itaque eaque repellat. Doloremque iusto molestiae provident voluptatum! Quibusdam.",
                }),
                Object(L.jsxs)(nt, {
                  children: [
                    Object(L.jsx)(tt, {
                      color: "3B5999",
                      children: Object(L.jsx)(Tn.a, {}),
                    }),
                    Object(L.jsx)(tt, {
                      color: "E4405F",
                      children: Object(L.jsx)(In.a, {}),
                    }),
                    Object(L.jsx)(tt, {
                      color: "E60023",
                      children: Object(L.jsx)(Dn.a, {}),
                    }),
                  ],
                }),
              ],
            }),
            Object(L.jsxs)(Vn, {
              children: [
                Object(L.jsx)(_n, { children: "Useful links" }),
                Object(L.jsxs)($n, {
                  children: [
                    Object(L.jsx)(Jn, { children: "Home" }),
                    Object(L.jsx)(Jn, { children: "Cart" }),
                    Object(L.jsx)(Jn, { children: "Man Fashion" }),
                    Object(L.jsx)(Jn, { children: "Women Fashion" }),
                    Object(L.jsx)(Jn, { children: "Accessories" }),
                    Object(L.jsx)(Jn, { children: "My Account" }),
                    Object(L.jsx)(Jn, { children: "Order Tracking" }),
                    Object(L.jsx)(Jn, { children: "Wishlist" }),
                    Object(L.jsx)(Jn, { children: "Wishlist" }),
                    Object(L.jsx)(Jn, { children: "Terms" }),
                  ],
                }),
              ],
            }),
            Object(L.jsxs)(Kn, {
              children: [
                Object(L.jsx)(_n, { children: "Contect" }),
                Object(L.jsxs)(Xn, {
                  children: [
                    Object(L.jsx)(Fn.a, { style: { marginRight: "10px" } }),
                    "shiv complex",
                  ],
                }),
                Object(L.jsxs)(Xn, {
                  children: [
                    Object(L.jsx)(qn.a, { style: { marginRight: "10px" } }),
                    "+1 1234567890",
                  ],
                }),
                Object(L.jsxs)(Xn, {
                  children: [
                    Object(L.jsx)(Bn.a, { style: { marginRight: "10px" } }),
                    "cantreply@gamil.com",
                  ],
                }),
                Object(L.jsxs)(Qn, {
                  children: [
                    "pay with visa card only ",
                    Object(L.jsx)(Mn.a, {}),
                  ],
                }),
              ],
            }),
          ],
        });
      var it,
        rt,
        st,
        at,
        jt,
        ot,
        bt,
        lt = () =>
          Object(L.jsxs)("div", {
            children: [
              Object(L.jsx)($, {}),
              Object(L.jsx)(V, {}),
              Object(L.jsx)(Ce, {}),
              Object(L.jsx)(We, {}),
              Object(L.jsx)(an, {}),
              Object(L.jsx)(Rn, {}),
              Object(L.jsx)(ct, {}),
            ],
          }),
        dt = t(7);
      const xt = j.b.div(it || (it = Object(a.a)([""]))),
        pt = j.b.h1(rt || (rt = Object(a.a)([""]))),
        Ot = j.b.div(
          st ||
            (st = Object(a.a)([
              "\n  display: flex;\n  justify-content: space-between;\n\n",
            ])),
        ),
        ht = j.b.div(
          at || (at = Object(a.a)(["\n  margin: 20px;\n  ", ";\n"])),
          p({ width: "0px 20px", display: "flex", flexDirection: "column" }),
        ),
        gt = j.b.span(
          jt ||
            (jt = Object(a.a)([
              "\n  font-size: 20px;\n  font-weight: 600;\n  margin-right: 20px;\n  ",
              ";\n",
            ])),
          p({ marginRight: "0px" }),
        ),
        ut = j.b.select(
          ot ||
            (ot = Object(a.a)([
              "\n  padding: 10px;\n  margin-right: 20px;\n  ",
              ";\n",
            ])),
          p({ margin: "10px 0px" }),
        ),
        ft = j.b.option(bt || (bt = Object(a.a)([""])));
      var mt,
        vt = () => {
          const e = Object(dt.m)().pathname.split("/")[2];
          console.log(e);
          const [n, t] = Object(i.useState)({}),
            [c, r] = Object(i.useState)("newest"),
            s = (e) => {
              const c = e.target.value;
              t({ ...n, [e.target.name]: c });
            };
          return Object(L.jsxs)(xt, {
            children: [
              Object(L.jsx)(V, {}),
              Object(L.jsx)($, {}),
              Object(L.jsx)(pt, { children: e }),
              Object(L.jsxs)(Ot, {
                children: [
                  Object(L.jsxs)(ht, {
                    children: [
                      Object(L.jsx)(gt, { children: "Filter Products:" }),
                      Object(L.jsxs)(ut, {
                        name: "color",
                        onChange: s,
                        children: [
                          Object(L.jsx)(ft, {
                            disabled: !0,
                            children: "color",
                          }),
                          Object(L.jsx)(ft, { children: "White" }),
                          Object(L.jsx)(ft, { children: "Black" }),
                          Object(L.jsx)(ft, { children: "Red" }),
                          Object(L.jsx)(ft, { children: "Blue" }),
                          Object(L.jsx)(ft, { children: "Yellow" }),
                          Object(L.jsx)(ft, { children: "Green" }),
                        ],
                      }),
                      Object(L.jsxs)(ut, {
                        name: "size",
                        onChange: s,
                        children: [
                          Object(L.jsx)(ft, { disabled: !0, children: "Size" }),
                          Object(L.jsx)(ft, { children: "XS" }),
                          Object(L.jsx)(ft, { children: "S" }),
                          Object(L.jsx)(ft, { children: "M" }),
                          Object(L.jsx)(ft, { children: "L" }),
                          Object(L.jsx)(ft, { children: "XL" }),
                        ],
                      }),
                    ],
                  }),
                  Object(L.jsxs)(ht, {
                    children: [
                      Object(L.jsx)(gt, { children: "sort Products:" }),
                      Object(L.jsxs)(ut, {
                        onChange: (e) => r(e.target.value),
                        children: [
                          Object(L.jsx)(ft, {
                            value: "newest",
                            children: "Newest",
                          }),
                          Object(L.jsx)(ft, {
                            value: "asc",
                            children: "Price (asc)",
                          }),
                          Object(L.jsx)(ft, {
                            value: "desc",
                            children: "Price (desc)",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(L.jsx)(an, { cat: e, filters: n, sort: c }),
              Object(L.jsx)(Rn, {}),
              Object(L.jsx)(ct, {}),
            ],
          });
        },
        yt = t(153),
        wt = t(154);
      const St = "https://rira-ecommerce-api.vercel.app/api/",
        kt =
          null === (mt = JSON.parse(localStorage.getItem("persist:root"))) ||
          void 0 === mt
            ? void 0
            : mt.user,
        Ct = kt && JSON.parse(kt).currentUser,
        Et = null === Ct || void 0 === Ct ? void 0 : Ct.accessToken,
        At = Qe.a.create({ baseURL: St }),
        Rt = Qe.a.create({
          baseURL: St,
          headers: { token: "Bearer ".concat(Et) },
        }),
        Nt = Object(g.b)({
          name: "cart",
          initialState: { products: [], quantity: 0, total: 0 },
          reducers: {
            addProduct: (e, n) => {
              (e.quantity += 1),
                e.products.push(n.payload),
                (e.total += n.payload.price * n.payload.quantity);
            },
            emptyCart: (e) => {
              (e.products = []), (e.quantity = 0), (e.total = 0);
            },
          },
        }),
        { addProduct: Tt, emptyCart: zt } = Nt.actions;
      var It,
        Lt,
        Dt,
        Ut,
        Ft,
        Pt,
        qt,
        Wt,
        Bt,
        Gt,
        Mt,
        Yt,
        Ht,
        Vt,
        _t,
        $t,
        Jt,
        Kt,
        Xt = Nt.reducer;
      const Qt = j.b.div(It || (It = Object(a.a)([""]))),
        Zt = j.b.div(
          Lt ||
            (Lt = Object(a.a)([
              "\n    paddding: 50px;\n    display: flex;\n    ",
              ";\n",
            ])),
          p({ padding: "10px", flexDirection: "column" }),
        ),
        ec = j.b.div(Dt || (Dt = Object(a.a)(["\nflex:1;\n"]))),
        nc = j.b.img(
          Ut ||
            (Ut = Object(a.a)([
              "\nwidth: 100%;\nheight: 90vh;\nobject-fit: cover;\n",
              ";\n",
            ])),
          p({ height: "40vh" }),
        ),
        tc = j.b.div(
          Ft || (Ft = Object(a.a)(["\nflex:1;\npadding: 0px 50px;\n", ";\n"])),
          p({ padding: "10px" }),
        ),
        cc = j.b.h1(Pt || (Pt = Object(a.a)(["\n"]))),
        ic = j.b.p(qt || (qt = Object(a.a)(["\n    margin: 20px opx;\n"]))),
        rc = j.b.span(
          Wt ||
            (Wt = Object(a.a)([
              "\n    font-weight: 100;\n    font-size: 40px;\n",
            ])),
        ),
        sc = j.b.div(
          Bt ||
            (Bt = Object(a.a)([
              "\n    width: 50%;\n    margin: 20px 0px;\n    display: flex;\n    justify-content: space-between;\n    ",
              ";\n",
            ])),
          p({ width: "100%" }),
        ),
        ac = j.b.div(
          Gt ||
            (Gt = Object(a.a)([
              "\n    display: flex;\n    align-items: center;\n\n",
            ])),
        ),
        jc = j.b.span(
          Mt ||
            (Mt = Object(a.a)([
              "\n    font-size: 20px;\n    font-weight: 200;\n",
            ])),
        ),
        oc = j.b.div(
          Yt ||
            (Yt = Object(a.a)([
              "\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: ",
              ";\n    margin: 0px 5px;\n    cursor: pointer;\n",
            ])),
          (e) => e.color,
        ),
        bc = j.b.select(
          Ht ||
            (Ht = Object(a.a)([
              "\n    margin-left: 10px;\n    padding: 5px;\n",
            ])),
        ),
        lc = j.b.option(Vt || (Vt = Object(a.a)([""]))),
        dc = j.b.div(
          _t ||
            (_t = Object(a.a)([
              "\n    width: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    ",
              ";\n",
            ])),
          p({ width: "100%" }),
        ),
        xc = j.b.div(
          $t ||
            ($t = Object(a.a)([
              "\n    display: flex;\n    align-items: center;\n    font-weight: 700;\n",
            ])),
        ),
        pc = j.b.span(
          Jt ||
            (Jt = Object(a.a)([
              "\n    width: 30px;\n    height: 30px;\n    border-radius: 10px;\n    border: 1px solid teal;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0px 5px;\n",
            ])),
        ),
        Oc = j.b.button(
          Kt ||
            (Kt = Object(a.a)([
              "\n    padding: 15px;\n    border: 2px solid teal\n    backgrouund-color: white;\n    cursor: pointer;\n    font-weight: 500;\n    \n    &:hover{\n        background-color: #f8f4f4;\n    }\n",
            ])),
        );
      var hc,
        gc,
        uc,
        fc,
        mc,
        vc,
        yc,
        wc,
        Sc,
        kc = () => {
          var e, n;
          const t = Object(dt.m)().pathname.split("/")[2],
            [c, r] = Object(i.useState)({}),
            [s, a] = Object(i.useState)(1),
            [j, o] = Object(i.useState)(),
            [b, l] = Object(i.useState)(),
            d = Object(O.b)();
          Object(i.useEffect)(() => {
            (async () => {
              try {
                const e = await At.get("/products/find/" + t);
                r(e.data);
              } catch {}
            })();
          }, [t]);
          return Object(L.jsxs)(Qt, {
            children: [
              Object(L.jsx)(V, {}),
              Object(L.jsx)($, {}),
              Object(L.jsxs)(Zt, {
                children: [
                  Object(L.jsx)(ec, {
                    children: Object(L.jsx)(nc, { src: c.img }),
                  }),
                  Object(L.jsxs)(tc, {
                    children: [
                      Object(L.jsx)(cc, { children: c.title }),
                      Object(L.jsx)(ic, { children: c.decs }),
                      Object(L.jsxs)(rc, { children: [c.price, "$"] }),
                      Object(L.jsxs)(sc, {
                        children: [
                          Object(L.jsxs)(ac, {
                            children: [
                              Object(L.jsx)(jc, { children: "Color" }),
                              null === (e = c.color) || void 0 === e
                                ? void 0
                                : e.map((e) =>
                                    Object(L.jsx)(
                                      oc,
                                      { color: e, onClick: () => o(e) },
                                      e,
                                    ),
                                  ),
                            ],
                          }),
                          Object(L.jsxs)(ac, {
                            children: [
                              Object(L.jsx)(jc, { children: "Size" }),
                              Object(L.jsx)(bc, {
                                onChange: (e) => l(e.target.value),
                                children:
                                  null === (n = c.size) || void 0 === n
                                    ? void 0
                                    : n.map((e) =>
                                        Object(L.jsx)(lc, { children: e }, e),
                                      ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(L.jsxs)(dc, {
                        children: [
                          Object(L.jsxs)(xc, {
                            children: [
                              Object(L.jsx)(yt.a, {
                                onClick: () => a((e) => (e > 1 ? e - 1 : 1)),
                              }),
                              Object(L.jsx)(pc, { children: s }),
                              Object(L.jsx)(wt.a, { onClick: () => a(s + 1) }),
                            ],
                          }),
                          Object(L.jsx)(Oc, {
                            onClick: () => {
                              d(Tt({ ...c, quantity: s, color: j, size: b }));
                            },
                            children: "ADD TO CART",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(L.jsx)(Rn, {}),
              Object(L.jsx)(ct, {}),
            ],
          });
        };
      const Cc = j.b.div(
          hc ||
            (hc = Object(a.a)([
              "\n  width: 100vw;\n  height: 100vh;\n  background-color: gray;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n",
            ])),
        ),
        Ec = j.b.div(
          gc ||
            (gc = Object(a.a)([
              "\n  width: 40%;\n  padding: 20px;\n  flex-direction: column;\n  background-color: white;\n  ",
              ";\n",
            ])),
          p({ width: "75%" }),
        ),
        Ac = j.b.h1(
          uc ||
            (uc = Object(a.a)(["\n  font-size: 24px;\n  font-weight: 300;\n"])),
        ),
        Rc = j.b.form(
          fc ||
            (fc = Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"])),
        ),
        Nc = j.b.input(
          mc ||
            (mc = Object(a.a)([
              "\n  flex: 1;\n  min-width: 40%;\n  margin: 20px 10px 0px 0px;\n",
            ])),
        ),
        Tc = j.b.span(
          vc ||
            (vc = Object(a.a)(["\n  font-size: 15px;\n  margin: 50px 0px;\n"])),
        ),
        zc = j.b.div(
          yc ||
            (yc = Object(a.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 45px\n",
            ])),
        ),
        Ic = j.b.span(
          wc ||
            (wc = Object(a.a)([
              "\n  font-size: 15px;\n  margin: 50px 0px;\n  cursor: pointer;\n",
            ])),
        ),
        Lc = j.b.button(
          Sc ||
            (Sc = Object(a.a)([
              "\n  width: 40%;\n  border: none;\n  padding: 15px 20px;\n  background-color: teal;\n  color: white;\n  cursor: pointer;\n  margin: 15px;\n",
            ])),
        );
      var Dc = () => {
        const [e, n] = Object(i.useState)(""),
          [t, c] = Object(i.useState)(""),
          [r, s] = Object(i.useState)(""),
          [a, j] = Object(i.useState)("");
        return Object(L.jsx)(Cc, {
          children: Object(L.jsxs)(Ec, {
            children: [
              Object(L.jsx)(Ac, { children: "CREAT AN ACCOUNT" }),
              Object(L.jsxs)(Rc, {
                onSubmit: async (n) => {
                  n.preventDefault(),
                    r !== a &&
                      (console.log("passwords don't match"),
                      alert("passwords don't match!"));
                  try {
                    const n = { username: e, email: t, password: r },
                      c = await Qe.a.post(
                        "https://rira-ecommerce-api.vercel.app/api/auth/register",
                        n,
                      );
                    console.log(c.data);
                  } catch (c) {
                    console.log(c);
                  }
                },
                children: [
                  Object(L.jsx)(Nc, {
                    placeholder: "user name",
                    onChange: (e) => n(e.target.value),
                  }),
                  Object(L.jsx)(Nc, {
                    placeholder: "email",
                    onChange: (e) => c(e.target.value),
                  }),
                  Object(L.jsx)(Nc, {
                    placeholder: "password",
                    onChange: (e) => s(e.target.value),
                  }),
                  Object(L.jsx)(Nc, {
                    placeholder: "conform password",
                    onChange: (e) => j(e.target.value),
                  }),
                  Object(L.jsxs)(Tc, {
                    children: [
                      "By creating an account, I consent to the processing of my personal data in accordance with it ",
                      Object(L.jsx)("b", { children: "PRIVACY POLICY" }),
                    ],
                  }),
                  Object(L.jsxs)(zc, {
                    children: [
                      Object(L.jsx)(Lc, { type: "submit", children: "Create" }),
                      Object(L.jsx)(h.b, {
                        to: "/login",
                        children: Object(L.jsx)(Ic, { children: "Sign in" }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var Uc, Fc, Pc, qc, Wc, Bc, Gc, Mc;
      const Yc = j.b.div(
          Uc ||
            (Uc = Object(a.a)([
              "\n  width: 100vw;\n  height: 100vh;\n  background-color: gray;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n",
            ])),
        ),
        Hc = j.b.div(
          Fc ||
            (Fc = Object(a.a)([
              "\n  width: 25%;\n  padding: 20px;\n  flex-direction: column;\n  background-color: white;\n  ",
              ";\n",
            ])),
          p({ width: "75%" }),
        ),
        Vc = j.b.h1(
          Pc ||
            (Pc = Object(a.a)(["\n  font-size: 24px;\n  font-weight: 300;\n"])),
        ),
        _c = j.b.form(
          qc ||
            (qc = Object(a.a)([
              "\n  display: flex;\n  flex-direction: column;   \n",
            ])),
        ),
        $c = j.b.input(
          Wc ||
            (Wc = Object(a.a)([
              "\n  flex: 1;\n  min-width: 40%;\n  margin: 10px 0px;\n  padding: 10px\n",
            ])),
        ),
        Jc = j.b.button(
          Bc ||
            (Bc = Object(a.a)([
              "\n  width: 40%;\n  border: none;\n  padding: 15px 20px;\n  background-color: teal;\n  color: white;\n  cursor: pointer;\n  margin-bottom: 10px;\n  &:disabled{\n    color: green;\n    curson: not-allowed;\n  }\n",
            ])),
        ),
        Kc = j.b.a(
          Gc ||
            (Gc = Object(a.a)([
              "\n    margin: 5px 0px;\n    font-size: 12px;\n    text-decoration: underline;\n    cursor: pointer;\n",
            ])),
        ),
        Xc = j.b.span(Mc || (Mc = Object(a.a)(["\n  color: red;\n"])));
      var Qc,
        Zc,
        ei,
        ni,
        ti,
        ci,
        ii,
        ri,
        si,
        ai,
        ji,
        oi,
        bi,
        li,
        di,
        xi,
        pi,
        Oi,
        hi,
        gi,
        ui,
        fi,
        mi,
        vi,
        yi,
        wi,
        Si,
        ki,
        Ci = () => {
          const e = Object(O.b)(),
            [n, t] = Object(i.useState)(""),
            [c, r] = Object(i.useState)(""),
            { isFetching: s, error: a } = Object(O.c)((e) => e.user);
          return Object(L.jsx)(Yc, {
            children: Object(L.jsxs)(Hc, {
              children: [
                Object(L.jsx)(Vc, { children: "SIGN IN" }),
                Object(L.jsxs)(_c, {
                  children: [
                    Object(L.jsx)($c, {
                      placeholder: "username",
                      onChange: (e) => t(e.target.value),
                    }),
                    Object(L.jsx)($c, {
                      placeholder: "password",
                      type: "password",
                      onChange: (e) => r(e.target.value),
                    }),
                    Object(L.jsx)(Jc, {
                      onClick: (t) => {
                        t.preventDefault(),
                          (async (e, n) => {
                            e(f());
                            try {
                              const t = await At.post("/auth/login", n);
                              e(m(t.data));
                            } catch (t) {
                              e(v());
                            }
                          })(e, { username: n, password: c });
                      },
                      disabled: s,
                      children: "LOGIN",
                    }),
                    a &&
                      Object(L.jsx)(Xc, {
                        children: "Something went wrong...",
                      }),
                    Object(L.jsx)(Kc, {
                      children: "DO NOT REMEMBER YOUR PASSWORD",
                    }),
                    Object(L.jsx)(h.b, {
                      to: "/register",
                      children: Object(L.jsx)(Kc, {
                        children: "CREATE A NEW ACCOUNT",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Ei = t(81),
        Ai = t.n(Ei);
      const Ri = j.b.div(Qc || (Qc = Object(a.a)([""]))),
        Ni = j.b.div(
          Zc || (Zc = Object(a.a)(["\n  padding: 20px;\n  ", "\n"])),
          p({ padding: "10px" }),
        ),
        Ti = j.b.h1(
          ei ||
            (ei = Object(a.a)([
              "\n  font-weight: 300;\n  text-align: center;\n",
            ])),
        ),
        zi = j.b.div(
          ni ||
            (ni = Object(a.a)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n",
            ])),
        ),
        Ii = j.b.button(
          ti ||
            (ti = Object(a.a)([
              "\n  padding: 10px;\n  font-weight: 600;\n  cursor: pointer;\n  border: ",
              ";\n  background-color: ",
              ";\n  color: ",
              ";\n",
            ])),
          (e) => "filled" === e.type && "none",
          (e) => ("filled" === e.type ? "black" : "transparent"),
          (e) => "filled" === e.type && "white",
        ),
        Li = j.b.div(
          ci || (ci = Object(a.a)(["\n  ", "\n"])),
          p({ display: "none" }),
        ),
        Di = j.b.span(
          ii ||
            (ii = Object(a.a)([
              "\n  text-decoration: underline;\n  cursor: pointer;\n  margin: 0px 10px;\n",
            ])),
        ),
        Ui = j.b.div(
          ri ||
            (ri = Object(a.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  ",
              "\n",
            ])),
          p({ flexDirection: "column" }),
        ),
        Fi = j.b.div(si || (si = Object(a.a)(["\n  flex: 3;\n"]))),
        Pi = j.b.div(
          ai ||
            (ai = Object(a.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  ",
              "\n",
            ])),
          p({ flexDirection: "column" }),
        ),
        qi = j.b.div(
          ji || (ji = Object(a.a)(["\n  flex: 2;\n  display: flex;\n"])),
        ),
        Wi = j.b.img(oi || (oi = Object(a.a)(["\n  width: 200px;\n"]))),
        Bi = j.b.div(
          bi ||
            (bi = Object(a.a)([
              "\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n",
            ])),
        ),
        Gi = j.b.span(li || (li = Object(a.a)([""]))),
        Mi = j.b.span(di || (di = Object(a.a)([""]))),
        Yi = j.b.div(
          xi ||
            (xi = Object(a.a)([
              "\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: ",
              ";\n",
            ])),
          (e) => e.color,
        ),
        Hi = j.b.span(pi || (pi = Object(a.a)([""]))),
        Vi = j.b.div(
          Oi ||
            (Oi = Object(a.a)([
              "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n",
            ])),
        ),
        _i = j.b.div(
          hi ||
            (hi = Object(a.a)([
              "\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n",
            ])),
        ),
        $i = j.b.div(
          gi ||
            (gi = Object(a.a)([
              "\n  font-size: 24px;\n  margin: 5px;\n  ",
              "\n",
            ])),
          p({ margin: "5px 15px" }),
        ),
        Ji = j.b.div(
          ui ||
            (ui = Object(a.a)([
              "\n  font-size: 30px;\n  font-weight: 200;\n  ",
              "\n",
            ])),
          p({ marginBottom: "20px" }),
        ),
        Ki = j.b.hr(
          fi ||
            (fi = Object(a.a)([
              "\n  background-color: #eee;\n  border: none;\n  height: 1px;\n",
            ])),
        ),
        Xi = j.b.div(
          mi ||
            (mi = Object(a.a)([
              "\n  flex: 1;\n  border: 0.5px solid lightgray;\n  border-radius: 10px;\n  padding: 20px;\n  height: 50vh;\n",
            ])),
        ),
        Qi = j.b.h1(vi || (vi = Object(a.a)(["\n  font-weight: 200;\n"]))),
        Zi = j.b.div(
          yi ||
            (yi = Object(a.a)([
              "\n  margin: 30px 0px;\n  display: flex;\n  justify-content: space-between;\n  font-weight: ",
              ";\n  font-size: ",
              ";\n",
            ])),
          (e) => "total" === e.type && "500",
          (e) => "total" === e.type && "24px",
        ),
        er = j.b.span(wi || (wi = Object(a.a)([""]))),
        nr = j.b.span(Si || (Si = Object(a.a)([""]))),
        tr = j.b.button(
          ki ||
            (ki = Object(a.a)([
              "\n  width: 100%;\n  padding: 10px;\n  background-color: black;\n  color: white;\n  font-weight: 600;\n",
            ])),
        );
      var cr = () => {
        const e = Object(O.c)((e) => e.cart),
          [n, t] = Object(i.useState)(null),
          c = Object(dt.o)(),
          r = Object(O.b)();
        return (
          Object(i.useEffect)(() => {
            n &&
              (async () => {
                try {
                  const t = await Rt.post("/checkout/payment", {
                    tokenId: n.id,
                    amount: 100 * e.total,
                  });
                  c("/success", { state: { stripeData: t.data, cart: e } }),
                    r(zt());
                } catch (t) {
                  console.error("Payment failed:", t);
                }
              })();
          }, [n, e.total, c, e]),
          Object(L.jsxs)(Ri, {
            children: [
              Object(L.jsx)(V, {}),
              Object(L.jsx)($, {}),
              Object(L.jsxs)(Ni, {
                children: [
                  Object(L.jsx)(Ti, { children: "YOUR BAG" }),
                  Object(L.jsxs)(zi, {
                    children: [
                      Object(L.jsx)(Ii, { children: "CONTINUE SHOPPING" }),
                      Object(L.jsxs)(Li, {
                        children: [
                          Object(L.jsxs)(Di, {
                            children: ["Shopping Bag(", e.products.length, ")"],
                          }),
                          Object(L.jsx)(Di, { children: "Your Wishlist (0)" }),
                        ],
                      }),
                      Object(L.jsx)(Ii, {
                        type: "filled",
                        children: "CHECKOUT NOW",
                      }),
                    ],
                  }),
                  Object(L.jsxs)(Ui, {
                    children: [
                      Object(L.jsxs)(Fi, {
                        children: [
                          e.products.map((e) =>
                            Object(L.jsxs)(
                              Pi,
                              {
                                children: [
                                  Object(L.jsxs)(qi, {
                                    children: [
                                      Object(L.jsx)(Wi, { src: e.img }),
                                      Object(L.jsxs)(Bi, {
                                        children: [
                                          Object(L.jsxs)(Gi, {
                                            children: [
                                              Object(L.jsx)("b", {
                                                children: "Product:",
                                              }),
                                              " ",
                                              e.title,
                                            ],
                                          }),
                                          Object(L.jsxs)(Mi, {
                                            children: [
                                              Object(L.jsx)("b", {
                                                children: "ID:",
                                              }),
                                              " ",
                                              e._id,
                                            ],
                                          }),
                                          Object(L.jsx)(Yi, { color: e.color }),
                                          Object(L.jsxs)(Hi, {
                                            children: [
                                              Object(L.jsx)("b", {
                                                children: "Size:",
                                              }),
                                              " ",
                                              e.size,
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  Object(L.jsxs)(Vi, {
                                    children: [
                                      Object(L.jsx)(_i, {
                                        children: Object(L.jsx)($i, {
                                          children: e.quantity,
                                        }),
                                      }),
                                      Object(L.jsxs)(Ji, {
                                        children: ["$ ", e.price * e.quantity],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e._id,
                            ),
                          ),
                          Object(L.jsx)(Ki, {}),
                        ],
                      }),
                      Object(L.jsxs)(Xi, {
                        children: [
                          Object(L.jsx)(Qi, { children: "ORDER SUMMARY" }),
                          Object(L.jsxs)(Zi, {
                            children: [
                              Object(L.jsx)(er, { children: "Subtotal" }),
                              Object(L.jsxs)(nr, { children: ["$ ", e.total] }),
                            ],
                          }),
                          Object(L.jsxs)(Zi, {
                            children: [
                              Object(L.jsx)(er, {
                                children: "Estimated Shipping",
                              }),
                              Object(L.jsx)(nr, { children: "$ 5.90" }),
                            ],
                          }),
                          Object(L.jsxs)(Zi, {
                            children: [
                              Object(L.jsx)(er, {
                                children: "Shipping Discount",
                              }),
                              Object(L.jsx)(nr, { children: "$ -5.90" }),
                            ],
                          }),
                          Object(L.jsxs)(Zi, {
                            type: "total",
                            children: [
                              Object(L.jsx)(er, { children: "Total" }),
                              Object(L.jsxs)(nr, { children: ["$ ", e.total] }),
                            ],
                          }),
                          Object(L.jsx)(Ai.a, {
                            name: "RIRA Shop",
                            image: "",
                            billingAddress: !0,
                            shippingAddress: !0,
                            description: "Your total is $".concat(e.total),
                            amount: 100 * e.total,
                            token: (e) => {
                              t(e);
                            },
                            stripeKey:
                              "pk_test_51Oqnpp053ZU4Tjq4DRtSjiW9WT4Nj6I9GpD3gsCTQVzOaykYKV0rjgyPvybpwcwkGsgB9o9qxlZT9CXwg9d4V5Cf00S1CmNN0N",
                            children: Object(L.jsx)(tr, {
                              children: "CHECKOUT NOW",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(L.jsx)(ct, {}),
            ],
          })
        );
      };
      var ir = () => {
        var e, n;
        const t = Object(dt.m)(),
          c = null === (e = t.state) || void 0 === e ? void 0 : e.stripeData,
          r = null === (n = t.state) || void 0 === n ? void 0 : n.cart,
          s = Object(O.c)((e) => e.user.currentUser),
          [a, j] = Object(i.useState)(null);
        return (
          Object(i.useEffect)(() => {
            c &&
              r &&
              s &&
              (async () => {
                try {
                  var e;
                  const n = await Rt.post("/orders", {
                    userId: s._id,
                    products: r.products.map((e) => ({
                      productId: e._id,
                      quantity: e.quantity,
                    })),
                    amount: r.total,
                    address:
                      null === (e = c.billing_details) || void 0 === e
                        ? void 0
                        : e.address,
                  });
                  j(n.data._id);
                } catch (n) {
                  console.error("Failed to create order:", n);
                }
              })();
          }, [r, c, s]),
          c && r
            ? Object(L.jsxs)("div", {
                style: {
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: [
                  a
                    ? "Order has been created successfully. Your order number is ".concat(
                        a,
                      )
                    : "Successfull. Your order is being prepared...",
                  Object(L.jsx)(h.b, {
                    to: "/",
                    children: Object(L.jsx)("button", {
                      style: { padding: 10, marginTop: 20 },
                      children: "Go to Homepage",
                    }),
                  }),
                ],
              })
            : Object(L.jsxs)("div", {
                style: {
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: [
                  Object(L.jsx)("h1", { children: "Error" }),
                  Object(L.jsx)("p", {
                    children: "Unable to process your order. Please try again.",
                  }),
                  Object(L.jsx)("button", {
                    style: { padding: 10, marginTop: 20 },
                    children: "Go to Homepage",
                  }),
                ],
              })
        );
      };
      var rr = () => {
          const e = Object(O.c)((e) => e.user.currentUser);
          return Object(L.jsx)(h.a, {
            children: Object(L.jsxs)(dt.c, {
              children: [
                Object(L.jsx)(dt.a, {
                  path: "/",
                  element: e ? Object(L.jsx)(lt, {}) : Object(L.jsx)(Ci, {}),
                }),
                Object(L.jsx)(dt.a, {
                  path: "/register",
                  element: e ? Object(L.jsx)(lt, {}) : Object(L.jsx)(Dc, {}),
                }),
                Object(L.jsx)(dt.a, {
                  path: "/login",
                  element: e ? Object(L.jsx)(lt, {}) : Object(L.jsx)(Ci, {}),
                }),
                Object(L.jsx)(dt.a, {
                  path: "/products/:category",
                  element: Object(L.jsx)(vt, {}),
                }),
                Object(L.jsx)(dt.a, {
                  path: "/product/:id",
                  element: Object(L.jsx)(kc, {}),
                }),
                Object(L.jsx)(dt.a, {
                  path: "/cart",
                  element: Object(L.jsx)(cr, {}),
                }),
                Object(L.jsx)(dt.a, {
                  path: "/success",
                  element: Object(L.jsx)(ir, {}),
                }),
              ],
            }),
          });
        },
        sr = t(11),
        ar = t(24),
        jr = t(82);
      const or = { key: "root", version: 1, storage: t.n(jr).a },
        br = Object(sr.b)({ user: I, cart: Xt }),
        lr = Object(ar.g)(or, br),
        dr = Object(g.a)({
          reducer: lr,
          middleware: (e) =>
            e({
              serializableCheck: {
                ignoredActions: [ar.a, ar.f, ar.b, ar.c, ar.d, ar.e],
              },
            }),
        });
      let xr = Object(ar.h)(dr);
      var pr = t(83);
      s.a.render(
        Object(L.jsx)(O.a, {
          store: dr,
          children: Object(L.jsx)(pr.a, {
            loading: null,
            persistor: xr,
            children: Object(L.jsx)(rr, {}),
          }),
        }),
        document.getElementById("root"),
      );
    },
  },
  [[112, 1, 2]],
]);
//# sourceMappingURL=main.f776664d.chunk.js.map
