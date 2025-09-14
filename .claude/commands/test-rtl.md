# Test RTL Support Command

**Purpose**: Test right-to-left language support and layout adaptation

**Command**: `npm run test -- --grep="RTL"`

**Usage**:
```bash
# Run all RTL tests
npm run test -- --grep="RTL"

# Run RTL tests with coverage
npm run test:coverage -- --grep="RTL"

# Test specific RTL language
npm run test -- --grep="RTL.*Arabic"

# Visual RTL testing (requires browser)
npm run test -- --grep="RTL" --ui
```

**What it does**:
1. Tests RTL layout component adaptation
2. Validates text direction switching
3. Tests RTL-specific styling and positioning
4. Verifies RTL form input behavior
5. Tests navigation and interaction patterns

**RTL Test Categories**:
- **Layout Tests**: Component mirroring and positioning
- **Text Direction**: Proper text flow and alignment
- **Navigation**: Menu and link direction adaptation
- **Forms**: Input field and label positioning
- **Interactive Elements**: Button and control placement

**Supported RTL Languages**:
- Arabic (ar)
- Hebrew (he)  
- Persian/Farsi (fa)
- Urdu (ur)

**Related Commands**:
- `validate:translations` - Validate RTL translations
- `test` - Run full test suite