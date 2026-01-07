function u(e) {
  const t = e.replace(/\D/g, "");
  return t.length !== 11 || c(t) ? !1 : l(t, 9) && l(t, 10);
}
function c(e) {
  return new Set(e.split("")).size < 2;
}
function l(e, t) {
  const a = e[t];
  let i = e.slice(0, t).split("").reduce(
    (n, r, o) => n + Number(r) * (t + 1 - o),
    0
  ) * 10 % 11;
  return i > 9 && (i = 0), Number(a) === i;
}
const f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  validate: u
}, Symbol.toStringTag, { value: "Module" }));
export {
  f as default
};
