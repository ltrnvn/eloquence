import { defineConfig, globalIgnores } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig([
    globalIgnores(['.next/**', 'node_modules/**', 'public/**']),
    ...nextCoreWebVitals,
    prettier,
]);
