function u(e) {
  const t = e.length;
  if (t < 9 || t > 10) throw new Error("sumCpfDigits - invalid amount of digits");
  return e.split("").reduce(
    (i, n, o) => i + Number(n) * (t + 1 - o),
    0
  );
}
function l(e) {
  const t = e * 10 % 11;
  return t > 9 ? 0 : t;
}
function a(e) {
  return new Set(e.split("")).size < 2;
}
function s(e) {
  const t = e.replace(/\D/g, "");
  return t.length !== 11 || a(t) ? !1 : r(t, 9) && r(t, 10);
}
function r(e, t) {
  const i = e[t], n = u(e.slice(0, t));
  return Number(i) === l(n);
}
const c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  validate: s
}, Symbol.toStringTag, { value: "Module" }));
export {
  c as default
};
