import { describe, expect, it } from "vitest"
import { sumCpfDigits } from "./sum-cpf-digits"

describe("sumCpfDigits function", () => {
    it('should sum the digits correctly', () => {
        expect(sumCpfDigits("728565280")).toBe(280)
        expect(sumCpfDigits("552916840")).toBe(254)
        expect(sumCpfDigits("263982060")).toBe(237)
        expect(() => sumCpfDigits("2")).toThrowError("sumCpfDigits - invalid amount of digits")
        expect(() => sumCpfDigits("26398206011")).toThrowError("sumCpfDigits - invalid amount of digits")
    })
})