export function sumCpfDigits(cpfDigits: string): number {
    const digitsAmount = cpfDigits.length

    if (digitsAmount < 9 || digitsAmount > 10) throw new Error("sumCpfDigits - invalid amount of digits")

    return cpfDigits
        .split("")
        .reduce(
            (acc, curr, index) => acc + Number(curr) * (digitsAmount + 1 - index),
            0
        )
}