/// <reference types="vite/client" />

/**
 * This file is used to declare types for Vite's environment variables prefixed with `VITE_`. Based of FSD principle, such variables should be declared in .env.[mode] files stored in the same folder.
 *
 * See https://vite.dev/guide/env-and-mode#intellisense-for-typescript for details.
 */

interface ImportMetaEnv {
  readonly VITE_BASE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
