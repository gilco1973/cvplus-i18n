# Generate Translation Types Command

**Purpose**: Generate TypeScript type definitions for translation keys and locales

**Command**: `npm run generate:types`

**Usage**:
```bash
# Generate all translation types
npm run generate:types

# Generate types for specific namespace
npm run generate:types -- --namespace=cv

# Generate with validation
npm run generate:types -- --validate

# Watch mode for development
npm run generate:types -- --watch
```

**What it does**:
1. Analyzes all translation files in `locales/`
2. Generates TypeScript interfaces for translation keys
3. Creates type-safe translation key constants
4. Generates locale-specific type definitions
5. Updates type exports in main index files

**Generated Types**:
- `TranslationKeys` - Union type of all translation keys
- `LocaleNamespaces` - Available translation namespaces
- `SupportedLocales` - Supported locale codes
- `TranslationInterpolation` - Interpolation variable types

**Type Safety Benefits**:
- Compile-time validation of translation keys
- IntelliSense support for translation keys
- Type checking for interpolation variables
- Locale code validation

**Output Files**:
- `src/types/generated.ts` - Generated type definitions
- Updated exports in `src/types/index.ts`
- Type declaration files in `dist/`

**Related Commands**:
- `extract:keys` - Extract keys before type generation
- `type-check` - Validate generated types