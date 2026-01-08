export function cleanCpf(value: string): string {
    return value.replace(/\D/g, "")
}