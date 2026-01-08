import { cleanCpf } from "../_utils/clean-cpf"

export function format(value: string): string {
    const cleanValue = cleanCpf(value)

    return cleanValue
        .replace(/(\d{3})(?=\d)/, "$1.")
        .replace(/(\d{3}\.\d{3})(?=\d)/, "$1.")
        .replace(/(\d{3}\.\d{3}\.\d{3})(?=\d)/, "$1-")
}