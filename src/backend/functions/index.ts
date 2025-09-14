/**
 * @fileoverview i18n Firebase Functions exports
 * Server-side internationalization functions for CVPlus
 */

// Core translation functions
export { translateCV } from './translateCV';
export { translateDynamic, translateBatch } from './translateDynamic';
export { getUserLanguage, updateUserLanguage } from './getUserLanguage';

// Professional terminology functions
export { translateProfessional } from './translateProfessional';

// Translation management functions
export { getTranslationStatus, getTranslationProgress } from './getTranslationStatus';
export { updateTranslations, deleteTranslationKeys } from './updateTranslations';

// Bulk operations
export { bulkTranslation, getBulkTranslationStatus } from './bulkTranslation';