# Validate Translations Command

**Purpose**: Validate translation completeness and consistency across all supported locales

**Command**: `npm run validate:translations`

**Usage**:
```bash
# Validate all translations
npm run validate:translations

# Validate specific locale
npm run validate:translations -- --locale=es

# Validate with strict checking (fail on warnings)
npm run validate:translations -- --strict

# Generate validation report
npm run validate:translations -- --report
```

**What it does**:
1. Checks translation completeness across all locales
2. Validates translation key consistency
3. Detects unused translation keys
4. Verifies interpolation variables match
5. Checks for potential RTL layout issues

**Validation Rules**:
- All translation keys must exist in all locales
- Interpolation variables must match across locales  
- No unused translation keys in codebase
- RTL-specific translations properly formatted
- Professional terminology consistency

**Output**:
- Validation status report
- List of missing translations per locale
- Unused key recommendations
- Translation quality metrics

**Related Commands**:
- `extract:keys` - Extract translation keys from codebase
- `test:rtl` - Test RTL language support