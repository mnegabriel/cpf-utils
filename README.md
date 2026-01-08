# cpf-utils

Utility functions for working with Brazilian CPF numbers: validate, format and generate CPFs.


## Features ✅

- **validate**: check if a CPF is valid
- **format**: format a CPF as `xxx.xxx.xxx-xx`
- **generate**: generate a random valid CPF


## Installation 💡

- Install directly from GitHub:
```bash
# Using the GitHub short name
npm install github:mnegabriel/cpf-utils

# or the full Git URL
npm install git+https://github.com/mnegabriel/cpf-utils.git
```


## Usage 🔧

```js
import CPF from 'cpf-utils'

console.log(CPF.validate('143.287.040-87')) // true
console.log(CPF.format('14328704087')) // 143.287.040-87

const cpf = CPF.generate()
console.log(cpf) // raw 11-digit string
console.log(CPF.format(cpf)) // formatted
console.log(CPF.validate(cpf)) // true
```


## API

- `validate(value: string): boolean` — returns `true` when `value` is a valid CPF
- `format(value: string): string` — returns the CPF in `xxx.xxx.xxx-xx` format
- `generate(): string` — returns a random valid CPF as an 11-digit string


## Scripts

- Run tests: `npm test`
- Build: `npm run build`


## License

This project is licensed under the MIT License — see the `LICENSE` file for details.
