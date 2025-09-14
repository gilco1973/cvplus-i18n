# I18n - CVPlus Internationalization Submodule
**Author**: Gil Klainert  
**Domain**: Internationalization, Localization & Cultural Adaptation  
**Type**: CVPlus Git Submodule  
**Independence**: Fully autonomous build and run capability

## Critical Requirements

⚠️ **MANDATORY**: You are a submodule of the CVPlus project. You MUST ensure you can run autonomously in every aspect.

🚫 **ABSOLUTE PROHIBITION**: Never create mock data or use placeholders - EVER!

🚨 **CRITICAL**: Never delete ANY files without explicit user approval - this is a security violation.

## Dependency Resolution Strategy

### Layer Position: Layer 1 (Base Services)
**I18n depends ONLY on Core module.**

### Allowed Dependencies
```typescript
// ✅ ALLOWED: Core module only
import { User, ApiResponse, Language } from '@cvplus/core';
import { validateLocale, formatDate } from '@cvplus/core/utils';
import { I18nConfig } from '@cvplus/core/config';

// ✅ ALLOWED: External libraries
import * as i18next from 'i18next';
import { DateTime } from 'luxon';
```

### Forbidden Dependencies  
```typescript
// ❌ FORBIDDEN: Same layer modules
import { AuthService } from '@cvplus/auth'; // NEVER

// ❌ FORBIDDEN: Higher layer modules  
import { CVProcessor } from '@cvplus/cv-processing'; // NEVER
import { PremiumService } from '@cvplus/premium'; // NEVER
import { AdminService } from '@cvplus/admin'; // NEVER
```

### Dependency Rules for I18n
1. **Core Only**: I18n only depends on @cvplus/core
2. **No Peer Dependencies**: No dependencies on other Layer 1 modules (auth)
3. **Provider Role**: Provides translation services to higher layers
4. **Cultural Isolation**: Language/cultural logic contained within this module
5. **Interface Implementation**: Implements interfaces defined in Core

### Import/Export Patterns
```typescript
// Correct imports from Core
import { Language, Locale } from '@cvplus/core';

// Correct exports for higher layers
export interface TranslationService {
  translate(key: string, locale: string): Promise<string>;
  formatCurrency(amount: number, locale: string): string;
}
export class I18nextTranslationService implements TranslationService { /* */ }

// Higher layers import from I18n
// @cvplus/cv-processing: import { TranslationService } from '@cvplus/i18n';
// @cvplus/premium: import { TranslationService } from '@cvplus/i18n';
```

### Build Dependencies
- **Builds After**: Core must be built first
- **Builds Before**: All Layer 2+ modules depend on I18n build output
- **Locale Validation**: Translation files validated during build process

## Submodule Overview

The I18n submodule provides comprehensive internationalization and localization capabilities for the CVPlus platform, enabling seamless multi-language support, cultural adaptation, and global accessibility. This module serves as the foundation for delivering CVPlus services to users worldwide with culturally-aware, professionally localized experiences.

### Core Mission
Transform CVPlus from a single-language platform to a globally accessible, culturally-adapted service that serves professional users in their native languages with appropriate regional conventions.

## Domain Expertise

### Primary Responsibilities
- **Translation Management**: Automated and manual translation workflows with quality assurance
- **Multi-Language Support**: Dynamic translation loading for 20+ supported languages  
- **Cultural Adaptation**: Professional CV formatting adapted to regional business cultures
- **RTL Language Support**: Complete right-to-left layout and text direction management
- **Regional Formatting**: Date, currency, phone number, and address formatting per locale
- **Professional Localization**: Industry-specific terminology and career advice localization
- **SEO Internationalization**: Hreflang, locale-specific URLs, and international search optimization

### Key Features
- **Dynamic Translation Loading**: On-demand translation loading with intelligent caching
- **Professional Translation Services**: Integration with DeepL, Google Translate, and human translators
- **Cultural CV Adaptation**: Region-specific CV formatting and content organization
- **RTL Layout Engine**: Automatic layout mirroring for Arabic, Hebrew, and other RTL languages
- **Locale-Aware Formatting**: Context-sensitive number, date, currency, and text formatting
- **Translation Memory**: Efficient reuse of previously translated professional content
- **Quality Assurance Pipeline**: Multi-tier translation validation with native speaker review
- **Translation Analytics**: Usage tracking and quality metrics for continuous improvement

### Integration Points
- **Core Module**: Shared utilities, constants, and type definitions for consistent localization
- **Auth Module**: Locale-specific authentication flows and messaging
- **CV Processing**: Multi-language CV analysis and generation with cultural adaptation
- **Premium Module**: Subscription and billing localization for global markets
- **Public Profiles**: International profile sharing with proper locale routing
- **Admin Module**: Multi-language administration interface with regional analytics
- **Frontend Components**: React components with built-in translation and RTL support
- **Firebase Functions**: Backend translation services and locale management

## Specialized Subagents

### Primary Specialist
- **i18n-specialist**: Domain expert for internationalization, localization, translation management, cultural adaptation, RTL support, and professional terminology localization

### Supporting Specialists
- **frontend-expert**: React component internationalization, RTL layout implementation
- **backend-expert**: Firebase Functions localization, translation API integration
- **premium-specialist**: Subscription and billing localization strategies
- **cv-processing-specialist**: Multi-language CV processing and cultural adaptation

### Universal Specialists
- **code-reviewer**: Quality assurance, security review, and cultural sensitivity validation
- **debugger**: Complex internationalization troubleshooting and RTL layout issues
- **git-expert**: All git operations and repository management with proper submodule handling
- **test-writer-fixer**: Comprehensive testing including multi-language and RTL test suites

## Technology Stack

### Core Technologies
- **React i18next**: Primary internationalization framework with React integration
- **i18next**: Core translation management and interpolation engine
- **Intl API**: Native browser internationalization APIs for formatting
- **TypeScript**: Full type safety for translation keys and locale configurations
- **Formatjs**: Advanced number, date, and message formatting with ICU support
- **libphonenumber-js**: International phone number validation and formatting

### Translation Services
- **DeepL API**: Professional-grade translation service integration
- **Google Translate API**: Fallback translation service with broad language support
- **Human Translation Workflow**: Professional translator assignment and review system
- **Translation Memory**: Efficient storage and reuse of translated content

### Dependencies
- `i18next` & `react-i18next`: Core translation framework
- `@formatjs/intl-*`: International formatting utilities
- `libphonenumber-js`: Phone number internationalization
- `js-cookie`: Locale preference persistence
- `@cvplus/core`: Shared types and utilities

### Build System
- **Build Command**: `npm run build` - Compiles TypeScript and bundles translation assets
- **Test Command**: `npm run test` - Runs comprehensive test suite including RTL tests
- **Type Check**: `npm run type-check` - Validates TypeScript and translation key types
- **Translation Scripts**: Custom scripts for key extraction and validation
- **Development**: `npm run dev` - Watch mode with hot reload for translation changes

## Development Workflow

### Setup Instructions
1. Clone submodule repository: `git clone <i18n-repo-url>`
2. Install dependencies: `npm install`
3. Run type checks: `npm run type-check`
4. Validate translations: `npm run validate:translations`
5. Run tests: `npm test`
6. Build: `npm run build`

### Translation Development Workflow
1. **Extract Translation Keys**: `npm run extract:keys` - Scans code for translatable strings
2. **Validate Translations**: `npm run validate:translations` - Ensures all locales have complete translations
3. **Test RTL Support**: `npm test rtl` - Validates right-to-left layout functionality
4. **Generate Types**: `npm run generate:types` - Creates TypeScript types for translation keys
5. **Cultural Testing**: Manual testing with native speakers for cultural appropriateness

### Testing Requirements
- **Coverage Requirement**: Minimum 90% code coverage for i18n critical functionality
- **Test Framework**: Vitest with jsdom for React component testing
- **Test Types**: 
  - Unit tests for translation services and formatters
  - Integration tests for React component localization
  - RTL layout tests for Arabic and Hebrew languages
  - Cultural adaptation tests for different professional contexts
- **Translation Quality Tests**: Automated detection of missing translations and formatting issues

### Deployment Process
1. Validate all translation completeness across supported locales
2. Run comprehensive test suite including RTL and cultural tests
3. Build optimized bundles with tree-shaking for unused locales
4. Deploy to CDN for fast global translation asset delivery
5. Update Firebase Functions with new translation service endpoints

## Integration Patterns

### CVPlus Ecosystem Integration
- **Import Pattern**: `import { useTranslation, TranslatedText } from '@cvplus/i18n/react'`
- **Functions Import**: `import { translateCV, translateDynamic } from '@cvplus/i18n/functions'`
- **Types Import**: `import { Locale, TranslationKey } from '@cvplus/i18n'`
- **Export Pattern**: Comprehensive exports covering React components, hooks, services, and utilities
- **Dependency Chain**: 
  - Depends on: `@cvplus/core` for shared utilities
  - Depended by: All other CVPlus modules for internationalization

### Firebase Functions Integration
- **Translation Service Functions**: `translateCV`, `translateDynamic`, `translateProfessional`
- **Bulk Translation**: `bulkTranslation` for efficient large-scale translation jobs
- **Translation Status**: `getTranslationStatus` for tracking translation progress
- **User Locale Management**: `getUserLanguage`, `updateTranslations` for user preferences
- **Premium Integration**: Middleware for translation quota management and premium features

### Frontend Component Integration
```typescript
// Translation Hook Usage
import { useTranslation } from '@cvplus/i18n/react';

const MyComponent = () => {
  const { t, locale, changeLanguage } = useTranslation();
  return <div>{t('common.welcome', { name: user.name })}</div>;
};

// RTL Layout Integration  
import { RTLWrapper } from '@cvplus/i18n/react';

const App = () => (
  <RTLWrapper>
    <MyLocalizedComponent />
  </RTLWrapper>
);
```

## Scripts and Automation

### Available Scripts
- **extract:keys**: `node scripts/extract-translation-keys.js` - Extract translatable strings from codebase
- **validate:translations**: `node scripts/validate-translations.js` - Ensure translation completeness
- **generate:types**: `node scripts/generate-types.js` - Generate TypeScript types for translation keys
- **test:rtl**: `vitest rtl` - Run RTL-specific tests for Arabic/Hebrew support
- **build:locales**: Custom script to optimize locale bundles for production
- **sync:translations**: Synchronize translations with external translation services

### Build Automation
- **Translation Key Extraction**: Automated scanning of React components for translation keys
- **Type Generation**: Automatic TypeScript type generation for type-safe translation keys
- **Locale Bundle Optimization**: Tree-shaking unused translations for smaller bundle sizes
- **Translation Validation**: CI/CD integration to prevent deployments with missing translations
- **RTL CSS Generation**: Automated generation of RTL-specific stylesheets

## Quality Standards

### Code Quality
- TypeScript strict mode with comprehensive type coverage for all translation keys
- ESLint and Prettier configuration optimized for i18n code patterns
- All files must be under 200 lines with clear separation of concerns
- Comprehensive error handling for translation failures and missing keys
- Performance monitoring for translation loading and RTL layout performance

### Translation Quality
- **Professional Translation Standards**: Human review for business-critical translations
- **Cultural Appropriateness**: Native speaker validation for cultural adaptation
- **Consistency Enforcement**: Translation memory to ensure consistent terminology
- **Context Preservation**: Proper context information for accurate translations
- **Quality Metrics**: Tracking translation accuracy, user satisfaction, and cultural appropriateness

### Security Requirements
- No hardcoded API keys for translation services (use Firebase Secrets)
- Proper input sanitization for user-generated translation content
- Secure transmission of translation data with proper encryption
- Access control for professional translation management features
- Privacy compliance for user locale preferences and translation history

### Performance Requirements
- **Translation Loading**: Sub-200ms loading time for translation assets
- **RTL Layout Performance**: No layout shift during RTL/LTR switching
- **Memory Optimization**: Efficient translation caching with automatic cleanup
- **Bundle Size**: Optimized locale bundles under 50KB per language
- **CDN Integration**: Global CDN distribution for translation assets

## Troubleshooting

### Common Issues
- **Missing Translation Keys**: Run `npm run extract:keys` to identify untranslated strings
- **RTL Layout Issues**: Use `npm test rtl` to validate RTL component behavior
- **Translation Service Failures**: Check Firebase Functions logs and API quotas
- **Cultural Adaptation Problems**: Consult with native speakers and cultural consultants
- **Performance Issues**: Monitor translation loading times and optimize bundle sizes

### Debug Commands
- **Translation Key Analysis**: `grep -r "t('" src/` - Find all translation key usage
- **Locale Coverage Check**: `npm run validate:translations` - Identify incomplete translations  
- **RTL Testing**: `npm test -- --grep="RTL"` - Run RTL-specific tests
- **Bundle Analysis**: `npm run build && ls -la dist/` - Check translation bundle sizes
- **Function Debugging**: `firebase functions:log --only functions:translateCV` - Debug translation services

### Support Resources
- **I18n Documentation**: `/docs/i18n/` folder with comprehensive internationalization guides
- **Translation Guidelines**: Professional translation standards and cultural adaptation rules
- **RTL Implementation Guide**: Step-by-step RTL support implementation
- **Cultural Adaptation Handbook**: Region-specific business culture and CV formatting guidelines
- **API Integration Docs**: Translation service integration patterns and best practices

## CVPlus-Specific Considerations

### Professional CV Localization
- **Industry Terminology**: Localized professional terms for different career fields
- **Regional CV Formats**: Adaptation to local business customs and expectations  
- **Cultural Sensitivity**: Appropriate professional presentation for different cultures
- **Legal Compliance**: Adherence to local privacy and employment laws in translated content

### Premium Feature Localization
- **Subscription Messaging**: Culturally appropriate premium feature marketing
- **Pricing Localization**: Regional pricing strategy support with proper currency formatting
- **Payment Method Integration**: Local payment method names and descriptions
- **Feature Availability**: Region-specific feature availability messaging

### Performance and Scale
- **Global CDN**: Translation asset distribution for worldwide performance
- **Lazy Loading**: On-demand translation loading to optimize initial page load
- **Caching Strategy**: Intelligent caching with automatic translation updates
- **Scalability**: Support for adding new languages and regions efficiently