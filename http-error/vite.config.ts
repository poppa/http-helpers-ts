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
        functions: resolve(base, 'functions.ts')
      },
      name: '@poppanator/http-error',
      fileName: (format, entryName) => {
        return `${entryName}.${format === 'cjs' ? 'cjs' : 'js'}`
      },
    },
  },
})
