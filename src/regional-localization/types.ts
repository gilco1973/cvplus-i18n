/**
 * Regional Localization Types
 */

// Minimal ParsedCV interface for regional localization
export interface ParsedCV {
  personalInfo?: {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    photo?: string;
    age?: number;
    nationality?: string;
    maritalStatus?: string;
    gender?: string;
  };
  experience?: Array<{
    title: string;
    company: string;
    startDate: string;
    endDate?: string;
    description?: string;
  }>;
  education?: Array<{
    degree: string;
    institution: string;
    year: string;
    grade?: string;
  }>;
  skills?: string[];
  languages?: Array<{
    language: string;
    level: string;
  }>;
  certifications?: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
  [key: string]: any;
}

// Regional configuration interface (minimal version for compliance checking)
export interface RegionalConfiguration {
  regionId: string;
  regionName?: string;
  legalRestrictions?: {
    prohibitedInfo?: string[];
    photoRequired?: boolean;
  };
  culturalFactors?: {
    networkingImportance?: number;
  };
  [key: string]: any;
}

export interface RegionalOptimizationRequest {
  userId: string;
  cvData: ParsedCV;
  targetRegion: string;
  targetCountry?: string;
  industry?: string;
  jobRole?: string;
}

export interface RegionalOptimizationResult {
  regionScore: number;
  culturalFit: 'excellent' | 'good' | 'fair' | 'needs_improvement';
  legalCompliance: {
    compliant: boolean;
    issues: ComplianceIssue[];
    recommendations: string[];
  };
  culturalOptimization: {
    formatAdjustments: FormatAdjustment[];
    contentAdjustments: ContentAdjustment[];
    languageOptimization: LanguageOptimization[];
  };
  marketInsights: {
    popularIndustries: string[];
    averageJobSearchDuration: number;
    networkingImportance: 'low' | 'medium' | 'high';
    remoteWorkAdoption: number;
    salaryExpectations: SalaryExpectations;
  };
  localizedRecommendations: LocalizedRecommendation[];
}

export interface ComplianceIssue {
  type: 'photo' | 'age' | 'gender' | 'marital_status' | 'personal_info';
  severity: 'error' | 'warning' | 'info';
  description: string;
  solution: string;
  countries: string[];
}

export interface FormatAdjustment {
  aspect: 'photo' | 'length' | 'color' | 'font' | 'date_format' | 'address_format';
  current: string;
  recommended: string;
  reason: string;
  importance: 'high' | 'medium' | 'low';
}

export interface ContentAdjustment {
  section: string;
  type: 'add' | 'remove' | 'modify' | 'reorder';
  description: string;
  culturalReason: string;
  impact: number; // 0-1
}

export interface LanguageOptimization {
  aspect: 'formality' | 'tone' | 'terminology' | 'structure';
  suggestion: string;
  examples: {
    before: string;
    after: string;
  }[];
}

export interface SalaryExpectations {
  expectationLevel: 'conservative' | 'market_rate' | 'aggressive';
  currencyPreference: string;
  negotiationCulture: 'avoid' | 'subtle' | 'direct';
  benefitsImportance: number; // 0-1
}

export interface LocalizedRecommendation {
  category: 'cultural' | 'legal' | 'market' | 'networking' | 'format';
  priority: 1 | 2 | 3 | 4 | 5;
  title: string;
  description: string;
  actionItems: string[];
  culturalContext: string;
  impact: number; // 0-1
}