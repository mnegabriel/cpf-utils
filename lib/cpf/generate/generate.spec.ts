import { describe, expect, it } from "vitest"
import { generate } from "../generate"
import { validate } from "../validate"

describe("generate function", () => {
    it('should generate valid cpf values', () => {
        let iterations = 5

        do {
            const cpfGenerated = generate()
            const isCpfValid = validate(cpfGenerated)

            if (!isCpfValid) console.error(`Generated the following invalid cpf: ${cpfGenerated}`)

            expect(isCpfValid).toBe(true)
            iterations--
        } while (iterations > 0)
    })
})