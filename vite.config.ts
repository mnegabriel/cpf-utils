import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'CpfUtils',
      fileName: 'cpf-utils',
    },
  },
})
