import CPF from "../lib/main";

const input = document.querySelector("#cpf") as HTMLInputElement | undefined;

input?.addEventListener("input", e => {
    const target = e.currentTarget as HTMLInputElement;

    const cleanValue = target.value.replace(/[^\d\.\-]/g, "").slice(0, 14)

    target.value = cleanValue

    if (cleanValue) toggleErrorMessageVisibility(CPF.validate(cleanValue))
});

function toggleErrorMessageVisibility(visible: boolean): void {
    const errorMessage = document.querySelector("#cpf ~ .error-message") as HTMLSpanElement | undefined

    if (!errorMessage) return

    errorMessage.style.display = visible ? 'none' : '';
}