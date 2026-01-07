export function calculateCpfDigit(digitsSum: number) {
    const calculatedDigit = digitsSum * 10 % 11

    return calculatedDigit > 9 ? 0 : calculatedDigit
}