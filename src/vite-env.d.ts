/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
  readonly AUTH_DOMAIN: string
  readonly PROJECT_ID: string
  readonly STORAGE_BUCKET: string
  readonly MESSAGING_SENDER_ID: string
  readonly APP_ID: string
  readonly VITE_DB_LINK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
