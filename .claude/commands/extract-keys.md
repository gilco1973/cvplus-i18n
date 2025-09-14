# Extract Translation Keys Command

**Purpose**: Extract translatable strings from the codebase and update translation files

**Command**: `npm run extract:keys`

**Usage**:
```bash
# Extract all translation keys from source code
npm run extract:keys

# Extract keys for specific namespace
npm run extract:keys -- --namespace=cv

# Extract and validate against existing translations
npm run extract:keys -- --validate
```

**What it does**:
1. Scans React components and TypeScript files for translation keys
2. Identifies missing translation keys in locale files
3. Generates updated translation templates
4. Validates existing translation completeness

**Output**:
- Updated translation files in `locales/*/`
- Translation key report with missing/unused keys
- TypeScript type definitions for translation keys

**Related Commands**:
- `validate:translations` - Validate translation completeness
- `generate:types` - Generate TypeScript types for keys