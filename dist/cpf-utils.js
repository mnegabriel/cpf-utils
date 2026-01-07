function o(t) {
  const i = t.length;
  if (i < 9 || i > 10) throw new Error("sumCpfDigits - invalid amount of digits");
  return t.split("").reduce(
    (n, e, r) => n + Number(e) * (i + 1 - r),
    0
  );
}
function s(t) {
  const i = t * 10 % 11;
  return i > 9 ? 0 : i;
}
function c(t) {
  return new Set(t.split("")).size < 2;
}
function l(t) {
  const i = t.replace(/\D/g, "");
  return i.length !== 11 || c(i) ? !1 : a(i, 9) && a(i, 10);
}
function a(t, i) {
  const n = t[i], e = o(t.slice(0, i));
  return Number(n) === s(e);
}
function u() {
  const t = String(Math.random()).slice(2, 11);
  if (c(t)) return u();
  const i = o(t), n = s(i), e = o(`${t}${n}`), r = s(e), g = `${t}${n}${r}`;
  return l(t) ? u() : g;
}
const f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generate: u,
  validate: l
}, Symbol.toStringTag, { value: "Module" }));
export {
  f as default
};
