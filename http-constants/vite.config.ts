import { join, resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const base = join(__dirname, 'src')

export default defineConfig({
  plugins: [
    dts({ entryRoot: './src/', tsConfigFilePath: './tsconfig.build.json' }),
  ],
  build: {
    sourcemap: true,
    minify: 'terser',
    lib: {
      formats: ['es', 'cjs'],
      entry: {
        index: resolve(base, 'index.ts'),
        codes: resolve(base, 'codes.ts'),
        functions: resolve(base, 'functions.ts'),
        texts: resolve(base, 'texts.ts'),
        tules: resolve(base, 'tuples.ts'),
        methods: resolve(base, 'methods.ts'),
        headers: resolve(base, 'headers', 'index.ts'),
      },
      name: '@poppanator/http-constants',
      fileName: (format, entryName) => {
        return `${entryName}.${format === 'cjs' ? 'cjs' : 'js'}`
      },
    },
  },
})
