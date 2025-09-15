/**
 * CVPlus Internationalization (i18n) Module - Main Exports
 *
 * This module provides comprehensive internationalization support for CVPlus,
 * including translation services, regional localization, and cultural adaptation.
 */

// Main translation service and constants
export * from './services/translation.service';
export * from './constants';
export * from './types';

// Regional optimization framework (legacy - will be deprecated)
export * from './services/regional-localization.service';
export * from './regional-localization/ComplianceChecker';
export * from './regional-localization/CulturalOptimizer';
export * from './regional-localization/RegionalScoreCalculator';
export * from './regional-localization/types';

// Initialize function for React apps
export async function initializeI18n(): Promise<void> {
  const { translationService } = await import('./services/translation.service');
  return translationService.initialize();
}