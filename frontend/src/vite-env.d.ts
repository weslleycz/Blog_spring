/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly API_Url: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }