function o(t) {
  const e = t.length;
  if (e < 9 || e > 10) throw new Error("sumCpfDigits - invalid amount of digits");
  return t.split("").reduce(
    (n, i, r) => n + Number(i) * (e + 1 - r),
    0
  );
}
function a(t) {
  const e = t * 10 % 11;
  return e > 9 ? 0 : e;
}
function l(t) {
  return new Set(t.split("")).size < 2;
}
function s(t) {
  return t.replace(/\D/g, "");
}
function d(t) {
  const e = s(t);
  return e.length !== 11 || l(e) ? !1 : u(e, 9) && u(e, 10);
}
function u(t, e) {
  const n = t[e], i = o(t.slice(0, e));
  return Number(n) === a(i);
}
function c() {
  const t = String(Math.random()).slice(2, 11);
  if (l(t)) return c();
  const e = o(t), n = a(e), i = o(`${t}${n}`), r = a(i), f = `${t}${n}${r}`;
  return d(t) ? c() : f;
}
function g(t) {
  return s(t).replace(/(\d{3})(?=\d)/, "$1.").replace(/(\d{3}\.\d{3})(?=\d)/, "$1.").replace(/(\d{3}\.\d{3}\.\d{3})(?=\d)/, "$1-");
}
const m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  format: g,
  generate: c,
  validate: d
}, Symbol.toStringTag, { value: "Module" }));
export {
  m as default
};
