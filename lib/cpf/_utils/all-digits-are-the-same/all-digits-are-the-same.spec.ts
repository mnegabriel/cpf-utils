import { describe, expect, it } from "vitest"
import { allDigitsAreTheSame } from "./all-digits-are-the-same"

describe("allDigitsAreTheSame function", () => {
    it('should check if the digits ar all the same', () => {
        expect(allDigitsAreTheSame("000000000")).toBe(true)
        expect(allDigitsAreTheSame("111111111")).toBe(true)
        expect(allDigitsAreTheSame("111111112")).toBe(false)
        expect(allDigitsAreTheSame("263982060")).toBe(false)
    })
})