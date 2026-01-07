import { describe, expect, it } from "vitest"
import { validate } from "./validate"

describe("Validate function", () => {
    it('should return true for valid cpf values', () => {
        expect(validate("728565.280-66")).toBe(true)
        expect(validate("552.916.840-03")).toBe(true)
        expect(validate("26398206053")).toBe(true)
        expect(validate("510.976.720-34")).toBe(true)
    })

    it('should return false for invalid cpf values', () => {
        expect(validate("")).toBe(false)
        expect(validate("728565")).toBe(false)
        expect(validate("123457912")).toBe(false)
        expect(validate("00000000000")).toBe(false)
        expect(validate("000.000.000-00")).toBe(false)
        expect(validate("111.111.111-11")).toBe(false)
    })
})