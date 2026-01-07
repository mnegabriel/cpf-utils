import { allDigitsAreTheSame, calculateCpfDigit, sumCpfDigits } from "../_utils"

export function validate(value: string): boolean {
    const cleanValue = value.replace(/\D/g, "")

    if (cleanValue.length !== 11 || allDigitsAreTheSame(cleanValue)) return false

    return validateDigit(cleanValue, 9) && validateDigit(cleanValue, 10)
}

function validateDigit(cleanValue: string, digitIndex: 9 | 10): boolean {
    const validatorDigit = cleanValue[digitIndex]

    const validationSum = sumCpfDigits(cleanValue.slice(0, digitIndex))

    return Number(validatorDigit) === calculateCpfDigit(validationSum)
}