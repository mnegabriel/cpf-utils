import { allDigitsAreTheSame, calculateCpfDigit, sumCpfDigits } from "../_utils"
import { validate } from "../validate"

export function generate(): string {
    const randomInitialDigits = String(Math.random()).slice(2, 11)

    if (allDigitsAreTheSame(randomInitialDigits)) return generate()

    const firstDigitsSum = sumCpfDigits(randomInitialDigits)

    const firstFinalDigit = calculateCpfDigit(firstDigitsSum)

    const secondDigitsSum = sumCpfDigits(`${randomInitialDigits}${firstFinalDigit}`)
    const secondFinalDigit = calculateCpfDigit(secondDigitsSum)

    const generatedCpf = `${randomInitialDigits}${firstFinalDigit}${secondFinalDigit}`

    if (validate(randomInitialDigits)) return generate()

    return generatedCpf
}