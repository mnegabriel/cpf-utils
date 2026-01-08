import { describe, expect, it } from "vitest"
import { cleanCpf } from "./clean-cpf"

describe("cleanCpf function", () => {
    it('should sum the digits correctly', () => {
        expect(cleanCpf("728565.280-66")).toBe("72856528066")
        expect(cleanCpf("552.916.840-03")).toBe("55291684003")
        expect(cleanCpf("26398206053")).toBe("26398206053")
        expect(cleanCpf("510.976.720-34")).toBe("51097672034")
    })
})