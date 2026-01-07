export function allDigitsAreTheSame(digits: string) {
    const digitsSet = new Set(digits.split(""))

    return digitsSet.size < 2
}