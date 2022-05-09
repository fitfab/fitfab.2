import path from "path";
import react from "@vitejs/plugin-react";
import { UserConfigExport } from "vite";

export function getBaseViteConfig(
  dirname: string,
  override?: UserConfigExport
): UserConfigExport {
  const isExternal = (id: string) =>
    !id.startsWith(".") && !path.isAbsolute(id);

  return {
    esbuild: {
      jsxInject: "import React from 'react'",
    },
    build: {
      lib: {
        entry: path.resolve(dirname, "src/index.ts"),
        formats: ["es"],
      },
      rollupOptions: {
        external: isExternal,
      },
    },
    plugins: [react()],
  };
}
