import { describe, expect, it } from "vitest"
import { format } from "./format"

describe("format function", () => {
    it('should format digits to a cpf format', () => {
        expect(format("00000000000")).toBe("000.000.000-00")
        expect(format("111.111.111.11")).toBe("111.111.111-11")
        expect(format("222")).toBe("222")
        expect(format("33333")).toBe("333.33")
        expect(format("44444444")).toBe("444.444.44")
        expect(format("5555")).toBe("555.5")
        expect(format("6666666666666")).toBe("666.666.666-6666")
    })
})