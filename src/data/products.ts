import { Product } from './types';

export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  images?: string[];
  description: string;
  category: string;
  features: string[];
  specifications: Record<string, string>;
  overview?: string;
  symptoms?: string[];
  testProcedure?: string[];
  resultInterpretation?: Record<string, string>;
  technicalSpecs?: Record<string, string>;
  companyInfo?: string;
  systemFeatures?: string[];
  modelInfo?: Record<string, any>;
  workflow?: string[];
  certifications?: string[];
  performance?: Record<string, string>;
  manufacturer?: Record<string, string>;
  clinicalInfo?: {
    globalImpact?: string;
    consequences?: string[];
    challenges?: string[];
    diseaseProfiles?: {
      [key: string]: {
        name: string;
        symptoms: {
          men?: string[];
          women?: string[];
          general?: string[];
        };
      };
    };
  };
  testAdvantages?: Record<string, string>;
  packageContents?: string[];
  storage?: string;
  shelfLife?: string;
}

export const products = [
  {
    id: 'celis-ubt',
    name: 'Celis UBT System (SUBT-D1 / SUBT-D3)',
    slug: 'celis-ubt',
    image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKie354aoNcsUj9WbgdSoX3RaBGfyeJHkIY6tV',
    images: [
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKie354aoNcsUj9WbgdSoX3RaBGfyeJHkIY6tV',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKsiW3rNqJoMbzK06F8yX5AVqRwj4D1G9gHWpI',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKqrDH9JdoFG4DTcYmfVvX3ClS8JLZbMhBknrI',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK9cbwczFUWvC25Do7Ru4JlLrqy9b1N8XwhSjt',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKTvsvGi7jgDEF50yRB6wWNtc2LG3kVzlmPfTJ'
    ],
    description: 'Gold standard, reliable, and smart Urea Breath Test (UBT) system for Helicobacter pylori diagnosis.',
    category: 'Diagnostic',
    overview: 'Celis UBT is a reliable diagnostic system designed to detect Helicobacter pylori, a bacterium infecting the stomach lining. H. pylori causes a high percentage of stomach and duodenal ulcers and is associated with stomach cancer and MALT lymphoma. According to World Gastroenterology Organization guidelines, about 50% of the world\'s population is infected. It is commonly spread via person-to-person contact, often among family members. Celis SUBT-D1/SUBT-D3 offers quick, simple, and reliable on-site testing for gastroenterologists and pathology labs.',
    symptoms: [
      'Bad breath',
      'Dull or burning stomach pain',
      'Unplanned weight loss',
      'Bloating',
      'Nausea and vomiting',
      'Indigestion (dyspepsia)',
      'Burping',
      'Loss of appetite',
      'Dark stools'
    ],
    testProcedure: [
      'Take a capsule on an empty stomach or 4 hours after eating.',
      'Sit still for 15 minutes.',
      'Connect the mouthpiece to the collection card and blow into it with appropriate force. You can exchange breaths during blowing. Stop when the indicator changes from blue to white, or after 3 minutes.',
      'Hand the collection card to medical staff and await the results.'
    ],
    resultInterpretation: {
      'DPM ≤ 99': 'Negative',
      '99 < DPM ≤ 149': 'Retest automatically; if still >99, Positive',
      '149 < DPM ≤ 499': 'Positive +',
      '499 < DPM ≤ 1499': 'Positive ++',
      '1499 < DPM ≤ 2499': 'Positive +++',
      'DPM > 2499': 'Positive ++++'
    },
    technicalSpecs: {
      'Power supply': 'AC 220V, 50Hz',
      'Power consumption': '25 VA',
      'Fuse': '250V 2.5A φ5×20, 2 pcs',
      'Maximum size': '345mm × 280mm × 245mm (L×W×H)',
      'Maximum weight': 'Less than 17.5 kg',
      'Classification': 'Class II, Class 2 pollution level equipment',
      'Housing material': 'ABS plastic',
      'Operating temperature': '5°C–40°C',
      'Operating humidity': '≤75%',
      'Working atmospheric pressure': '86kPa–106kPa',
      'Warm-up time': 'About 1 hour',
      'Storage temperature': '-10°C–50°C',
      'Storage humidity': '≤75%'
    },
    features: [
      'Simple installation and maintenance',
      'Automatic background calibration at first installation',
      'One-button maintenance once a month',
      'User-friendly software',
      'High reliability and intelligence',
      'Sensitivity: 95%+',
      'Specificity: 95%+',
      'Plug-and-play intelligent system',
      'Intelligent self-cleaning measurement slot',
      'Revolutionary false-result elimination technology',
      'Anti-static device for stability and repeatability',
      'Visible indicator lights for user guidance'
    ],
    specifications: {
      'Test Time': '20 minutes',
      'Sample Type': 'Breath',
      'Display': 'LCD Touch Screen',
      'Power Supply': 'AC 220V, 50Hz'
    }
  },
  {
    id: 'foracare-a1c100',
    name: 'ForaCare A1C100 Pro Analyzer',
    slug: 'foracare-a1c100',
    image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKqJS9undoFG4DTcYmfVvX3ClS8JLZbMhBknrI',
    images: [
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKqJS9undoFG4DTcYmfVvX3ClS8JLZbMhBknrI',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKLTGHRWaucVSMgbuQjveIRqtYK6X27NJhOEm4',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKsEbhzeJoMbzK06F8yX5AVqRwj4D1G9gHWpIh',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKhMlhhaCiTJeCG3kLUHwPx8oj4vtR1uWOSAZ0',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKVif5gTSWdCeHAhQbGXFPJMgu30Em1wnxRUtI',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKj0OYD6mPPUxFAl'
    ],
    description: 'All-in-One HbA1c Analyzer with Embedded Thermal Printer',
    category: 'Diabetes Care',
    overview: 'The FORA A1c Pro Analyzer utilizes cutting-edge technology to provide lab-quality measurements with the smallest blood sample (0.2 µL) available in the market. Its highly sensitive immunoturbidimetry detection method and fully automated processing ensure accurate results in less than 6 minutes for physiological conditions ranging from 4.0% to 16.0%.',
    features: [
      'Fully automatic operation – Reduces human error',
      'Three-step operation – Simple and efficient',
      'Graphical interface – User-friendly display',
      'No pretreatment or pipetting required – Streamlined workflow',
      'Reliable and precise data – Comparable to Tosoh G7 Instrument',
      'Tiny blood sample – Minimizes patient discomfort',
      'Built-in tutorial – Guides users through operation',
      'Compact and portable design',
      'Anti-slip rubber base',
      'Large color display',
      'Embedded thermal printer',
      'USB connectivity for accessories',
      'No liquid waste – Sealed cartridge'
    ],
    technicalSpecs: {
      'Measuring Method': 'Photometry',
      'Sample Type': 'Whole blood (fingertip capillary or EDTA venous blood)',
      'Sample Size': '< 0.2 µL',
      'Reaction Time': '< 6 minutes',
      'Measuring Range': '4% – 16%',
      'Precision': 'CV < 5%',
      'Display Units': 'Percentage (%), mmol/mol, or mg/dL',
      'Memory Capacity': '10,000 results',
      'Dimensions': '13.4 cm (H) × 19.2 cm (W) × 23.5 cm (D)',
      'Weight': '3.8 kg (8.38 lbs)',
      'Operating Conditions': '15–32°C (59–89.6°F), 10–90% R.H.',
      'Storage Conditions': '10–35°C (50–95°F), 10–90% R.H.'
    },
    workflow: [
      'Collect blood sample (whole blood or plasma)',
      'Insert capillary holder into cartridge',
      'Insert cartridge & pull tab'
    ],
    certifications: [
      'Certified by NGSP',
      'Standardized by IFCC (International Federation of Clinical Chemistry and Laboratory Medicine)',
      'ISO 15197:2013 Compliance',
      'CE Marked',
      'FDA Cleared'
    ],
    performance: {
      'Regression Equation': 'y = 1.0029x + 0.0336',
      'R² Value': '0.9857',
      'CV Value': '< 2.2%',
      'Interference': 'No interference from common Hb variants (HbF, HbS, HbC, HbJ)'
    },
    manufacturer: {
      'Name': 'ForaCare Suisse AG',
      'Address': 'Neugasse 55, 9000 St. Gallen, Switzerland',
      'Phone': '+41-71-220-1001',
      'Fax': '+41-71-220-1075',
      'Website': 'www.foracare.ch',
      'Email': 'chservice@foracare.com'
    },
    modelInfo: {
      analyzer: {
        'Model': 'TD-4611A',
        'System Description': 'Point-of-care immunoassay analyzer',
        'Dimensions': '13.4 cm (H) × 19.2 cm (W) × 23.5 cm (D)',
        'Weight': '3.8 kg'
      },
      cartridge: {
        'Model': 'TD-4601',
        'Dimensions': '73.3 mm (L) × 58.2 mm (W) × 12.6 mm (H)',
        'Storage Conditions': {
          'Refrigerator': '2–8°C (35.6–46.4°F), 12-month shelf life',
          'Room temperature': '8–25°C (46.4–77°F), 3-month shelf life'
        },
        'Units per Carton': '160 units (20 units/box, 8 boxes/carton)',
        'Carton Size': '450 mm (L) × 280 mm (W) × 280 mm (H)',
        'Gross Weight per Carton': '8 kg'
      }
    }
  },
  {
    id: 'foracare-gd40a',
    name: 'FORA Blood Glucose Monitoring System (GD40)',
    slug: 'foracare-gd40a',
    image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKBbs6xDG0RprZaE2csh7WNi9UelLJkbYy3XHt',
     images: [
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKBbs6xDG0RprZaE2csh7WNi9UelLJkbYy3XHt',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKhDBGhWiTJeCG3kLUHwPx8oj4vtR1uWOSAZ0l',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKIqgxCf2VbGqNHlFTCxfjUaYBgsemoSJ80Prn'
    ],
    description: 'Advanced blood glucose monitoring system with superior accuracy and connectivity features',
    category: 'Diabetes Care',
    overview: 'The FORA GD40 Blood Glucose Monitoring System represents the latest in near-patient testing technology, validated for use across all patient groups including neonates, children, and adults. Featuring Advanced Superior Sip-In (ASSI) Technology and innovative 5-Electrode Technology, it delivers precise results while overcoming traditional hematocrit limitations.',
    features: [
      'True near-patient testing – Validated for neonates, children, and adults',
      'Advanced Superior Sip-In (ASSI) Technology – Ensures precise blood detection',
      '5-Electrode Technology – Overcomes hematocrit limitations (0–70% range)',
      'Fast results – 5-second measurement',
      'Ketone warning – Alerts at 240 mg/dL (13.3 mmol/L)',
      'Hygienic strip ejection – Reduces contamination risk',
      'Bluetooth & USB connectivity (GD40b & GD40a models)',
      'Large memory capacity - 1,000 test results',
      'Pre-/Post-Meal Recording capability',
      'Multiple daily alarms (4 sets)',
      'Comprehensive averaging (7/14/21/28/60/90 days)',
      'LCD Backlight for clear reading',
      'Strip indication light for ease of use'
    ],
    technicalSpecs: {
      'Detection Method': 'Electrochemical amperometric',
      'Enzyme': 'GDH-FAD',
      'Sample Size': '1.1 µL',
      'Result Time': '5 seconds',
      'Hematocrit Range': '0–70%',
      'Result Range': '10–600 mg/dL (0.5–33.3 mmol/L)',
      'Sample Type': 'Capillary, venous, arterial blood',
      'Strip Coding': 'Code card',
      'Memory Capacity': '1,000 results',
      'Operating Temperature': '+10°C (50°F) to +40°C (104°F)',
      'Storage Temperature (Meter)': '-20°C (-4°F) to +60°C (140°F)',
      'Storage Temperature (Strips)': '2°C (35.6°F) to 32°C (89.6°F) (vial pack)',
      'Power Supply': 'Two AAA batteries',
      'Dimensions': '110 × 57 × 25 mm',
      'Weight': '71 g'
    },
    performance: {
      'ISO 15197:2013 Compliance': 'Meets standards',
      'Accuracy <100 mg/dL': '100% within ±15 mg/dL',
      'Accuracy ≥100 mg/dL': '98% within ±15%',
      'Error Grid Analysis - Region A': '99.5% (Clinically accurate)',
      'Error Grid Analysis - Region B': '0.5% (Benign/no treatment deviation)',
      'Error Grid Analysis - Regions C-E': '0% (No erroneous/dangerous results)'
    },
    systemFeatures: [
      '5-Electrode System for hematocrit correction',
      'GDH-FAD Enzyme technology',
      'ASSI Technology for sample volume detection',
      'FORA TeleHealth System compatibility',
      'Trend analysis with multiple averaging periods',
      'Face-to-face counseling support',
      'Efficient for clinics and nursing homes'
    ],
    manufacturer: {
      'Name': 'FORA Care Suisse AG',
      'Address': 'Neugasse 55, 9000 St. Gallen, Switzerland',
      'Phone': '+41-71-220-1001',
      'Fax': '+41-71-220-1075',
      'Website': 'www.foracare.ch'
    },
    certifications: [
      'Clinically Validated by IDT (Institute for Diabetes Technology GmbH, Germany)',
      'ISO 15197:2013 Compliance',
      'CE Marked',
      'FDA Cleared'
    ]
  },
  {
    id: 'foracare-glucometer-6-connect',
    name: 'FORA 6 Connect Multi-Functional Monitoring System',
    slug: 'foracare-glucometer-6-connect',
    image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKmLondT4178RQTiNL9jlScdKExVr2IwyuUgDP',
     images: [
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKmLondT4178RQTiNL9jlScdKExVr2IwyuUgDP',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK8Rrf4UeMcnFpsBUfVPE5b7aOS96CuXkwKZez',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK2OK9he2zOKEmAGgquJTfLUawhvDzeWIsp7d5',
    ],
    description: 'Comprehensive 6-in-1 health monitoring system with Bluetooth connectivity and clinical-grade accuracy',
    category: 'Diabetes Care',
    overview: 'The FORA 6 Connect is a revolutionary multi-functional monitoring system that measures six key health parameters with lab-grade accuracy: Blood Glucose (BG), Hematocrit (HCT), Hemoglobin (HB), β-Ketone (KB), Uric Acid (UA), and Total Cholesterol (TCH). This advanced device combines precision with connectivity to deliver a complete health monitoring solution.',
    features: [
      'Six-parameter health monitoring in one device',
      'Gold-standard test strips with 5-electrode technology',
      'Advanced Superior Sip-In (ASSI) Technology',
      'Bluetooth connectivity with FORA TeleHealth Cloud',
      'Complete tests in under 5 minutes',
      'Hygienic strip ejection system',
      'LCD backlight & strip indicator light',
      'Compact and portable design',
      'Real-time data syncing and sharing',
      'Meal tagging capability (AC/PC/AutoQC)',
      'Historical data analysis',
      'Environmental impact reduction'
    ],
    technicalSpecs: {
      'Dimensions': '89.8 × 54.9 × 18 mm',
      'Weight': '46g',
      'Power Source': '1 AAA battery (1,000-test lifespan)',
      'Memory Capacity': '1,000 results with timestamps',
      'Connectivity': 'Bluetooth',
      'Display': 'LCD with backlight',
      'Blood Glucose Sample': '0.5 μL / 5 sec',
      'Hematocrit Sample': '0.8 μL / 10 sec',
      'Hemoglobin Sample': '3.0 μL / 60 sec',
      'β-Ketone Sample': '1.0 μL / 15 sec',
      'Glucose Range': '10–600 mg/dL (0.55–33.3 mmol/L)'
    },
    systemFeatures: [
      'FORA TeleHealth Cloud integration',
      'Mobile app synchronization',
      'Comprehensive trend analysis',
      'Healthcare provider data sharing',
      'Multiple parameter tracking',
      'Real-time result viewing',
      'Historical data analysis'
    ],
    manufacturer: {
      'Name': 'ForaCare Europe',
      'Address': 'Markircher Straße 9A, 68229 Mannheim, Germany',
      'Phone': '+49 (0)621 76021410',
      'Fax': '+49 (0)621 76021444',
      'Customer Service': '+49 (0)7531 8186955',
      'Website': 'www.foracare.de'
    },
    certifications: [
      'Clinically validated for accuracy',
      'International standards compliance',
      'Professional healthcare certification',
      'Quality management system certification'
    ],
    performance: {
      'Test Accuracy': 'Meets international standards',
      'Battery Life': '1,000 tests per battery',
      'Data Storage': '1,000 timestamped results',
      'Connectivity Range': 'Standard Bluetooth range'
    }
  },
  {
    id: 'goldsite-diagnostic-poct-hba1c-go',
    name: 'Goldsite Diagnostic POCT -HbA1c GO',
    slug: 'goldsite-diagnostic-poct-hba1c-go',
    image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKOVDUTCyDE1sjZwuH7FWUJN2q6Qekry4PhB3i',
     images: [
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKOVDUTCyDE1sjZwuH7FWUJN2q6Qekry4PhB3i',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK12xTC2N3OT7tRfGCHIYsMoj8SUiVwJhvxgLq',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK0oe0Os1uUg1ND5yoiOmCrdwaQKTYkGhsFb68'
    ],
    description: 'Advanced HbA1c analyzer utilizing boronate affinity chromatography technology for accurate and fast results',
    category: 'Diagnostic',
    overview: 'The Goldsite Diagnostic POCT -HbA1c GO is an advanced point-of-care testing system that utilizes boronate affinity chromatography technology. This innovative analyzer delivers fast, accurate results with minimal interference from HbA1c variants, making it ideal for primary care settings and physician offices.',
    features: [
      'Advanced boronate affinity chromatography technology',
      'Fully automatic one-step operation',
      'Fast results in under 5 minutes',
      'Minimal interference from HbA1c variants',
      'Maintenance-free design with no liquid path',
      'Point-of-care ready for primary care settings',
      'Color touch screen interface',
      'RFID card swipe functionality',
      'Compact, space-saving design',
      'Multiple connectivity options (LAN, USB, WiFi)'
    ],
    workflow: [
      'Collect 5μL blood sample',
      'Pipette sample into R1 position',
      'Insert cartridge into machine',
      'Automatic testing process begins',
      'Results displayed in 5 minutes'
    ],
    technicalSpecs: {
      'Methodology': 'Boronate Affinity Chromatography',
      'Assay': 'HbA1c, Glycated Hemoglobin',
      'Sample Volume': '5μL',
      'Testing Interval': '<5 minutes',
      'CV': '<3%',
      'Linear Range': '3.5-15.0% (NGSP)',
      'Communications': 'LAN port, USB, Serial Port, WiFi',
      'Dimensions': '224mm (L) × 160mm (W) × 236mm (H)',
      'Weight': '<5 Kg',
      'Pack Size': '25 kits/box'
    },
    systemFeatures: [
      'Cartridge-based system',
      'RFID card reader',
      'Disposable pipette',
      'Optional HbA1c Control',
      'Color touch screen interface',
      'Compact footprint'
    ],
    certifications: [
      'Standardized by International Federation of Clinical Chemistry and Laboratory Medicine',
      'Suitable for point-of-care testing'
    ],
    manufacturer: {
      'Name': 'Goldsite Diagnostics Inc.',
      'Address': 'No. 1001, Building No.1, GOLDSITE Mansion, Pingshan District, Shenzhen, China, 518122',
      'Phone': '0086 755 2689 0807',
      'Email': 'export@goldsite.com.cn',
      'Website': 'en.goldsite.com.cn'
    }
  },
  {
    id: 'goldsite-gpp-100-analyzer',
    name: 'GOLDSITE GPP-100',
    slug: 'goldsite-gpp-100-analyzer',
    image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKclBryZ5J4XAFx0m6YQiWLHrg3z5GZfKBswbM',
     images: [
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKclBryZ5J4XAFx0m6YQiWLHrg3z5GZfKBswbM',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK7tQ8VcVBSNsqOeLk5coblmpRAZg4t8K6yrT1',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKD5tzDzHU2mG6d4ZlxkejT3nVXptzrg5H89YA',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKHo6yWv9K17E9sMxUtcbXNFwf3gL6QR58WJhT',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKDNm1rTHU2mG6d4ZlxkejT3nVXptzrg5H89YA'
    ],
    description: 'Advanced Nephelometry Technology for Comprehensive Protein Testing',
    category: 'Laboratory',
    overview: 'The GOLDSITE GPP-100 is an advanced nephelometry analyzer providing comprehensive protein testing solutions. With its all-in-one system design and efficient operation, it delivers reliable results for a wide range of clinical applications including diabetes monitoring, immune protein analysis, cardiovascular markers, and kidney function assessment.',
    features: [
      'Complete test solution in single cartridge',
      'Maintenance-free operation',
      'One-step testing process',
      'Fast results in 3-8 minutes',
      'Classical nephelometry immunoassay method',
      'Auto ID via QR code on reagent cartridges',
      'Small sample volume (3-300 μL)',
      'Comprehensive test menu with 30+ parameters',
      'Built-in thermal printer',
      'Large memory capacity for 100,000 test results'
    ],
    technicalSpecs: {
      'Methodology': 'Nephelometry immunoassay',
      'Measuring Time': '3-8 minutes',
      'Sample Volume': '3-300 μL',
      'Display': 'Color touch screen',
      'Printer': 'Built-in thermal',
      'Memory': '100,000 test results',
      'Dimensions': '404 × 161 × 397 mm',
      'Weight': '7.1 kg',
      'Cartridge Pack': '20 tests/kit'
    },
    performance: {
      'HbA1c vs Biorad D10': {
        'Regression': 'y = 0.991x - 0.1778',
        'Correlation': 'r = 0.993'
      },
      'CRP vs Beckman IMMAGE': {
        'Regression': 'y = 1.0853x - 2.7919',
        'Correlation': 'r = 0.997'
      }
    },
    systemFeatures: [
      'Diabetes markers (HbA1c)',
      'Immune proteins (IgA/IgG/IgM)',
      'Cardiovascular markers (CRP, D-Dimer)',
      'Kidney function markers (mALB, CysC)',
      'Rheumatoid markers (RF, Anti-CCP)'
    ],
    modelInfo: {
      testMenu: {
        'Diabetes': 'HbA1c (2.8-15.5%)',
        'Immune': 'IgA/IgG/IgM (0.23-26.0 g/L)',
        'Rheumatoid': 'RF/Anti-CCP (15-306 IU/mL)',
        'Cardiovascular': 'CRP/D-Dimer (0.22-380 mg/L)',
        'Kidney': 'mALB/CysC (0.4-230 mg/L)'
      },
      applications: {
        'Diabetes clinics': 'HbA1c monitoring',
        'Rheumatology centers': 'RF, Anti-CCP testing',
        'Cardiology departments': 'CRP, LP(a) analysis',
        'Nephrology practices': 'mALB, CysC assessment',
        'General laboratories': 'Comprehensive protein testing'
      }
    },
    manufacturer: {
      'Name': 'Goldsite Diagnostics Inc.',
      'Address': 'No. 103C, 503C & 504D, Technology Building, Nanshan District, Shenzhen, China 518067',
      'Phone': '+86 755 2689 0807',
      'Email': 'export@goldsite.com.cn',
      'Website': 'en.goldsite.com.cn'
    }
  },
  {
    id: 'headway-hubt-20p',
    name: 'HEADWAY HUBT Series Urea Breath Test Systems',
    slug: 'headway-hubt-20p',
    image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKBqlMb1G0RprZaE2csh7WNi9UelLJkbYy3XHt',
     images: [
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKBqlMb1G0RprZaE2csh7WNi9UelLJkbYy3XHt',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK8qkT6ogeMcnFpsBUfVPE5b7aOS96CuXkwKZe',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKqHHTCHadoFG4DTcYmfVvX3ClS8JLZbMhBknr'
    ],
    description: 'Gold-Standard Non-Invasive H. Pylori Detection Since 1996',
    category: 'Diagnostic',
    overview: 'The HEADWAY HUBT Series represents the gold standard in non-invasive H. Pylori detection, offering reliable and efficient diagnostic solutions since 1996. The series includes multiple models to suit different clinical needs, from portable analyzers to advanced hospital-integrated systems.',
    features: [
      'Lightweight & compact design',
      'One-touch operation',
      '5-minute results',
      'Automatic printing',
      'Smart portable analyzer (HUBT-20A1)',
      'HIS/LIS compatible (HUBT-20A1/A2)',
      'User-friendly interface',
      'Hospital system integration'
    ],
    technicalSpecs: {
      '¹⁴C-Urea Capsule': '40 grains/package',
      'Collection Card': '40 pieces/package',
      'Technology': 'Radioisotope breath testing',
      'Certification': 'ISO 13485',
      'Test Time': '5 minutes',
      'Wait Time': '15 minutes',
      'Breath Collection': '3-5 minutes'
    },
    workflow: [
      'Ingest ¹⁴C-urea capsule with water',
      'Wait 15 minutes',
      'Breathe into collection card for 3-5 minutes',
      'Analyze for immediate results'
    ],
    performance: {
      'Sensitivity': '95%',
      'Specificity': '95-100%',
      'Test Coverage': 'Entire gastric mucosa',
      'Result Time': 'Minutes'
    },
    manufacturer: {
      'Name': 'HEADWAY',
      'Established': '1996',
      'Parent Company': 'China Isotope & Radiation Corporation',
      'Market Coverage': '8,000+ Chinese hospitals, 70+ countries worldwide',
      'Unique Position': 'Only Chinese manufacturer of both ¹³C and ¹⁴C UBT systems'
    },
    systemFeatures: [
      'Initial dyspepsia diagnosis',
      'Post-treatment monitoring',
      'Gastric ulcer/duodenal ulcer cases',
      'Chronic gastritis management',
      'Gastric cancer prevention',
      'NSAID users monitoring',
      'Iron-deficiency anemia workup',
      'ITP evaluation',
      'Routine physical exams'
    ],
    certifications: [
      'ISO 13485 Certified',
      'CE Mark',
      'NMPA Approved',
      'International Quality Standards Compliance'
    ],
    specifications: {
      'Distributor': 'TWINJ3 SALES AND MARKETING CORP.',
      'Address': 'Ground Floor,  KAVI Building, 193 E. Rodriguez Jr. Ave., Quezon City',
      'Phone': '(02) 906 0520',
      'Email': 'inquiries@tsmc.ph',
      'Website': 'www.tsmc.ph',
      'Contact Person': 'Stephen Joubert Bulseco (0928 957 4166 / 0917 143 2544)'
    }
  },
  {
    id: 'hoyotek-gonorhoeae-chlamydia-test',
    name: 'Hoyotek STI Antigen Rapid Test',
    slug: 'hoyotek-gonorhoeae-chlamydia-test',
    image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKt9FUGtKS9GUMC3KB5IlJoirhTYROxj4EQL7W',
     images: [
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKt9FUGtKS9GUMC3KB5IlJoirhTYROxj4EQL7W'
    ],
    description: 'Dual Detection of Gonorrhoea & Chlamydia - Results in 10-20 Minutes',
    category: 'Diagnostic',
    overview: 'The Hoyotek STI Antigen Rapid Test provides comprehensive STI screening through dual detection capabilities. This innovative test allows for single sample collection while delivering accurate results for multiple gynecological infections including Neisseria Gonorrhoeae, Chlamydia Trachomatis, Candida Albicans, Trichomonas Vaginitis, and Gardnerella Vaginalis.',
    features: [
      'Dual Combo Test - Single sample collection for two results',
      'Rapid Diagnosis - Results in 10-20 minutes',
      'Easy Operation - All accessories included in test kit',
      'Room Temperature Storage - No special handling required',
      'Comprehensive STI Screening - Detects multiple common infections'
    ],
    clinicalInfo: {
      globalImpact: '374 million new curable STIs annually (WHO)',
      consequences: [
        'Infertility (both male & female)',
        'Pelvic inflammatory disease',
        'Pregnancy complications',
        'Increased HIV risk'
      ],
      challenges: [
        'Often asymptomatic',
        'Non-specific symptoms when present',
        'Multiple potential infection sites'
      ],
      diseaseProfiles: {
        gonorrhoea: {
          name: 'Gonorrhoea (Neisseria Gonorrhoeae)',
          symptoms: {
            men: [
              'Urethral discharge (urethritis)',
              'Epididymitis/Orchitis',
              'Infertility'
            ],
            women: [
              'Cervicitis/Endometritis',
              'Pelvic inflammatory disease',
              'Often asymptomatic'
            ]
          }
        },
        chlamydia: {
          name: 'Chlamydia (Chlamydia Trachomatis)',
          symptoms: {
            general: [
              'Ocular and urogenital infections',
              'Dysuria and urinary frequency',
              'Mucosal edema and erosion'
            ]
          }
        }
      }
    },
    testAdvantages: {
      'Speed': '10-20 minutes vs Days for results',
      'Sample Collection': 'Single swab vs Multiple samples often needed',
      'Equipment Needed': 'None vs Laboratory infrastructure',
      'Asymptomatic Detection': 'Yes vs Often missed'
    },
    packageContents: [
      'Test cassettes',
      'Sample collection swabs',
      'Buffer solution',
      'Instructions for use'
    ],
    storage: 'Room temperature',
    shelfLife: 'See packaging',
    specifications: {
      'Test Time': '10-20 minutes',
      'Sample Type': 'Swab',
      'Storage': 'Room temperature',
      'Shelf Life': '24 months'
    }
  },
  {
    id: 'lituo-helicobacter-pylori-test',
    name: 'LITUO Helicobacter Pylori (HP) Test Kit (Urease)',
    slug: 'lituo-helicobacter-pylori-test',
    image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK9cnuyZWUWvC25Do7Ru4JlLrqy9b1N8XwhSjt',
     images: [
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK9cnuyZWUWvC25Do7Ru4JlLrqy9b1N8XwhSjt'
    ],
    description: 'Rapid Gastric Mucosa Detection - Results in 1-3 Minutes',
    category: 'Diagnostic',
    overview: 'For quick detection of Helicobacter pylori in gastric mucosa specimens collected via gastroscopy. The test utilizes H. pylori\'s unique urease activity for rapid and accurate detection through a clear colorimetric reaction.',
    features: [
      'Ultra-Fast Results - Visual readout in 1-3 minutes',
      'Clear Colorimetric Reaction - Yellow → Cherry red = Positive',
      'High Accuracy - Specific detection of HP urease activity',
      'Simple Procedure - No complex equipment required'
    ],
    specifications: {
      'Test Time': '1-3 minutes',
      'Sample Type': 'Gastric mucosa',
      'Result Type': 'Colorimetric',
      'Storage': 'See package insert'
    },
    testProcedure: [
      'Obtain gastric mucosa sample via endoscopy',
      'Place tissue on test card',
      'Observe color change',
      'Interpret results based on color change timing'
    ],
    resultInterpretation: {
      'Strong Positive': '≤1 min - Immediate cherry red',
      'Weak Positive': '≤3 min - Delayed cherry red',
      'Negative': '>3 min - No change (stays yellow)'
    },
    clinicalInfo: {
      globalImpact: 'H. pylori is a significant global pathogen affecting gastric health worldwide.',
      consequences: [
        'Acute/chronic gastritis',
        'Peptic ulcers',
        'Gastric cancer (WHO-recognized carcinogen)',
        'Intestinal metaplasia'
      ],
      challenges: [
        'Variable colonization patterns',
        'Antimicrobial resistance',
        'Asymptomatic carriers',
        'Reinfection risks'
      ]
    },
    manufacturer: {
      'Name': 'Lituo Biotech',
      'Contact - Guangdong': '0756-8639521',
      'Contact - Hunan': '0731-82788178',
      'Category': 'Microorganism Series → H. Pylori Detection'
    },
    testAdvantages: {
      'Speed': 'Results in 1-3 minutes',
      'Accuracy': 'High specificity for HP urease',
      'Ease of Use': 'Simple visual interpretation',
      'Cost-Effective': 'No specialized equipment needed'
    }
  },
  {
    id: 'medomics-ctg-combo',
    name: 'Candida Albicans / Trichomonas Vaginalis / Gardnerella Vaginalis Antigen Combo Test Kit (LFIA)',
    slug: 'medomics-ctg-combo',
    image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKr0kI3bxl5TSwWQq6gtOBpfDoCGhc4KLPb1vM',
     images: [
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKr0kI3bxl5TSwWQq6gtOBpfDoCGhc4KLPb1vM',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKsi4oTaSJoMbzK06F8yX5AVqRwj4D1G9gHWpI',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKnkbZUqsG28NqbDvmhy1f0ZBSOenWVAgJcLKs',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKMD6iNfXp96Eu3lD1bFUhPcd8SAj2VMKf7osJ',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKezyIASfEC0PsgDow6SGFyrWMi4nYkmbaAhju',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKezyIASfEC0PsgDow6SGFyrWMi4nYkmbaAhju',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKduJoEjDTftwOsxMkjvX5DeByK36lnI2GLEqh',
       
    ],
    description: 'Rapid qualitative detection of multiple vaginal pathogens using latex microsphere immunochromatographic assay',
    category: 'Diagnostic',
    overview: 'The Candida albicans / Trichomonas vaginalis / Gardnerella vaginalis Antigen Combo Test Kit is a latex microsphere immunochromatographic assay designed for the rapid qualitative detection of Candida albicans, Trichomonas vaginalis, and Gardnerella vaginalis in female vaginal swab samples (in vitro diagnostic use only).',
    features: [
      'Rapid results in 15 minutes',
      'High specificity through pathogen antigen detection',
      'Suitable for on-site screening',
      'Low professional and training requirements',
      'Not affected by medication',
      'Multiple pathogen detection in one test',
      'Clear visual results interpretation',
      'Room temperature storage'
    ],
    specifications: {
      'Sample Type': 'Female vaginal swab',
      'Package Size': '1 pc/box, 20 pcs/box',
      'Storage': '2℃-30℃, keep dry, away from direct sunlight',
      'Shelf Life': '24 months',
      'Testing Time': '15 minutes',
      'Usage Window': 'Use within 1 hour after opening',
      'Usage Type': 'Single use only'
    },
    packageContents: [
      'Test cassette',
      'Sampling swab',
      'Dilution buffer and dropper',
      'Instructions for use'
    ],
    testProcedure: [
      'Collect vaginal discharge using the sampling swab',
      'Insert swab into dilution buffer, rotate against inner tube wall 10 times',
      'Squeeze the swab 5 times against the tube wall to release the sample',
      'Remove swab, attach dropper cap',
      'Add 4 drops of the processed sample into each of the 2 sample wells',
      'Read results within 15-20 minutes'
    ],
    resultInterpretation: {
      'Positive': 'Control line and at least one test line visible',
      'Negative': 'Only control line visible',
      'Invalid': 'Control line not visible'
    },
    clinicalInfo: {
      globalImpact: 'Vaginal infections are among the most common gynecological conditions worldwide, with varying prevalence rates across different regions.',
      consequences: [
        'Bacterial Vaginosis (B.V.): Caused by decrease in lactobacilli',
        'Vulvovaginal Candidiasis (V.V.C.): Affects 75% of women at least once',
        'Mixed Vaginitis: Inflammation caused by multiple pathogens'
      ],
      challenges: [
        'High recurrence rates (40-45% for V.V.C.)',
        'Variable regional morbidity rates',
        'Complex mixed infections'
      ]
    },
    performance: {
      'Gardnerella vaginalis Kappa': '0.9328',
      'Candida albicans Kappa': '0.9325',
      'Trichomonas vaginalis Kappa': '0.9975'
    },
    manufacturer: {
      'Name': 'Jiangsu Medomics Medical Technology Co., Ltd.',
      'Address': 'F3, Building C, No. 3-1 Xinjinhu Road, Jiangbei New Area, Nanjing, China',
      'Phone': '(+86) 25-58601060',
      'Website': 'www.medomics-dx.net'
    },
    modelInfo: {
      productCodes: {
        'Single Pack': 'REF: 012113-01-01 (1 pc/box)',
        'Bulk Pack': 'REF: 012113-20-01 (20 pcs/box)'
      },
      regionalMorbidity: {
        'China': '11.6% (gynecological clinics), 0.58% (recurrent V.V.C.)',
        'Europe/USA': '29-49%, R.V.V.C. ~9%',
        'North America': '7.1%-29.2%',
        'Middle East': '16.2%-50%',
        'South/Southeast Asia': '10.3%-32.5%',
        'Africa': '7%-23.2%',
        'B.V. Rate': '29.9%-52.4%',
        'Internal V.V.C. + B.V.': '20.95%-74.89%',
        'External V.V.C. + B.V.': '14.9%'
      }
    }
  },
  {
    id: 'mnchip-pointcare-m3',
    name: 'MNCHIP Pointcare M3 Blood Chemistry Analyzer',
    slug: 'mnchip-pointcare-m3',
    image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK63IIHML05IZKCRbymF8SGLovT9r1zYcut47P',
     images: [
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK63IIHML05IZKCRbymF8SGLovT9r1zYcut47P',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKD1WnbfHU2mG6d4ZlxkejT3nVXptzrg5H89YA',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKoA1rvhcMYbCqy8PWAm4dn10VT2XMBzrw6vLZ'
    ],
    description: 'Compact On-Site Testing with Lab-Quality Results',
    category: 'Laboratory',
    overview: 'The Pointcare M3 is an ultra-compact blood chemistry analyzer delivering lab-quality results in a portable format. With its innovative microfluidic disc system and automated operation, it provides rapid and reliable testing for various clinical parameters.',
    features: [
      'Ultra-Compact - Smallest analyzer in class (only 2.2kg)',
      'Fully Automated - No specialized training required',
      'Rapid Results - Complete analysis in ~13 minutes',
      'Versatile Sampling - Works with whole blood, serum, or plasma (0.1mL volume)',
      'Smart Connectivity - LIS compatible with barcode scanning',
      'Portable Power - Optional power bank for mobile use'
    ],
    workflow: [
      'Add Sample - Pipette 0.1mL blood + diluent',
      'Insert Disc - Load barcoded reagent disc',
      'Get Results - Read on touchscreen or print'
    ],
    systemFeatures: [
      'Microfluidic Disc System with pre-loaded reagent beads',
      'Optical Measurement System with Xenon strobe lamp',
      'Real-Time QC Monitoring',
      'Multi-wavelength detection',
      'Continuous process verification'
    ],
    specifications: {
      'Dimensions': '20cm × 15cm',
      'Weight': '2.2kg',
      'Display': '3.5" Color Touchscreen',
      'Sample Volume': '0.1mL',
      'Analysis Time': '~13 minutes'
    },
    modelInfo: {
      testMenu: {
        'Liver Function': ['TP', 'ALB', 'GGT', 'AST'],
        'Cardiac Markers': ['CK', 'CK-MB', 'α-HBDH'],
        'Renal Function': ['CRE', 'UREA', 'UA'],
        'Electrolytes': ['K⁺', 'Na⁺', 'Mg²⁺', 'Cl⁻'],
        'Lipid Panel': ['TG', 'CHOL', 'HDL-C', 'LDL-C'],
        'Diabetes': ['GLU', 'GSP'],
        'Inflammation': ['CRP*', 'SAA†'],
        'Special Tests': ['AMY', 'HCY*', 'PHOS']
      },
      connectivity: {
        'Output Options': [
          'Direct thermal printing',
          'Electronic data transfer (LIS/HIS)',
          'MNCHIP platform for custom branded reports'
        ]
      }
    },
    certifications: [
      'ISO 13485 Certified',
      'CE Marked'
    ],
    manufacturer: {
      'Name': 'MNCHIP',
      'Address': 'No.19 Xinhuan Road West, TEDA, Tianjin 300457, China',
      'WhatsApp': '+86 131 6318 8628',
      'Email': 'Service@mnchip.com',
      'Website': 'www.mnchip.com'
    }
  },
  {
    id: 'seamaty-poct-analyzer',
    name: 'Seamaty SD1 Fully Automated Dry Biochemistry Analyzer',
    slug: 'seamaty-poct-analyzer',
    image: 'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKfB9pAOq6FS9AfjrX8vo4Ws3On1Ndh7PlxVuT',
     images: [
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKfB9pAOq6FS9AfjrX8vo4Ws3On1Ndh7PlxVuT',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzK7CkMNjBSNsqOeLk5coblmpRAZg4t8K6yrT1X',
      'https://udqsfwzjjd.ufs.sh/f/sRbSE3JoMbzKrXzA6oxl5TSwWQq6gtOBpfDoCGhc4KLPb1vM'
    ],
    description: 'Point-of-Care Testing Solution for Comprehensive Blood Analysis',
    category: 'Laboratory',
    overview: 'The Seamaty SD1 is a state-of-the-art fully automated dry biochemistry analyzer designed for point-of-care testing. With its innovative technology and compact design, it delivers comprehensive blood analysis with minimal sample volume and maintenance requirements.',
    features: [
      'Fully Automated Operation - Centrifugation, dilution, and analysis in one system',
      'Ultra-Low Sample Volume - Only 100μL required (1/10-1/20 of conventional analyzers)',
      'Rapid Results - 34 parameters in 12 minutes',
      'Maintenance-Free - No tubes, pumps, or valves to replace',
      'Portable Design - 4.2kg weight for field use'
    ],
    technicalSpecs: {
      'Testing Method': 'Photoelectric colorimetry, transmission turbidimetry',
      'Sample Type': 'Whole blood, serum, plasma',
      'Throughput': '12 minutes/sample',
      'Light Source': 'Halogen tungsten lamp (2500+ hours)',
      'QC System': 'Intelligent Quality Control (IQC)',
      'Connectivity': '4 USB ports, LAN, built-in printer',
      'Dimensions': '315 × 375 × 475 mm',
      'Power': '100-240V AC, 105W max'
    },
    workflow: [
      'Add Sample - 100μL whole blood/serum/plasma',
      'Insert Reagent Disc - Pre-loaded with lyophilized beads',
      'Get Results - Printed or transferred digitally'
    ],
    systemFeatures: [
      'Space-Tech Derived - Self-contained microfluidic design',
      '12-Month Shelf Life - Stable at 2-8°C',
      'Integrated QC - Continuous performance monitoring',
      'Multiple Panels Available'
    ],
    modelInfo: {
      testMenu: {
        'Liver': ['ALB', 'ALT', 'AST', 'GGT'],
        'Renal': ['CREA', 'UREA', 'UA'],
        'Cardiac': ['CK', 'CK-MB', 'HBDH', 'LDH'],
        'Lipid': ['TG', 'CHOL', 'HDL', 'LDL'],
        'Diabetes': ['GLU', 'GSP'],
        'Electrolytes': ['Na⁺', 'K⁺', 'Cl⁻', 'Mg²⁺'],
        'Special Tests': ['CRP', 'AMY']
      }
    },
    performance: {
      'Lab Correlation': 'Proven accuracy vs. central lab systems',
      'Field Applications': [
        'Emergency medicine',
        'Primary care clinics',
        'Mobile health units'
      ],
      'Error Prevention': 'Automated process minimizes human factors'
    },
    manufacturer: {
      'Name': 'Seamaty Technology Co., Ltd',
      'Location': 'Shenzhen, China 518107',
      'Phone': '+86-755-26235695',
      'Email': 'sdt@seamaty.com',
      'Website': 'www.seamaty.com'
    },
    certifications: ['ISO Certified'],
    specifications: {
      'Model': 'SD1',
      'Version': 'Rev: A3 20220120',
      'Display': '7" Android Touchscreen',
      'Memory': '500,000 Result Storage',
      'Interface': 'Multilingual'
    }
  }
];

export const productCategories = Array.from(
  new Set(products.map((p) => p.category))
).sort();