import { describe, expect, it } from "vitest"
import { calculateCpfDigit } from "./calculate-cpf-digit"

describe("calculateCpfDigit function", () => {
    it('should calculate the cpf digit', () => {
        expect(calculateCpfDigit(280)).toBe(6)
        expect(calculateCpfDigit(254)).toBe(0)
        expect(calculateCpfDigit(237)).toBe(5)
    })
})