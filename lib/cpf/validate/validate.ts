export function validate(value: string): boolean {
    const cleanValue = value.replace(/\D/g, "")

    if (cleanValue.length !== 11 || allDigitsAreTheSame(cleanValue)) return false

    return validateDigit(cleanValue, 9) && validateDigit(cleanValue, 10)
}

function allDigitsAreTheSame(cleanValue: string) {
    const digitsSet = new Set(cleanValue.split(""))

    return digitsSet.size < 2
}

function validateDigit(cleanValue: string, digitIndex: 9 | 10): boolean {
    const validatorDigit = cleanValue[digitIndex]

    const validationSum = cleanValue.slice(0, digitIndex).split("").reduce(
        (acc, curr, index) => acc + Number(curr) * (digitIndex + 1 - index),
        0
    )

    let calculatedDigit = validationSum * 10 % 11

    if (calculatedDigit > 9) calculatedDigit = 0

    return Number(validatorDigit) === calculatedDigit
}