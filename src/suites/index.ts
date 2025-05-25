import { fridayRelease } from './fridayRelease';
import { junior } from './junior';
import { navigationFeature } from './navigationFeature';
import { productionIncident } from './productionIncident';
import { layoff } from './layoff';
import { flutterMigration } from './flutterMigration';
import { appLogic } from './appLogic';
import { brandManagement } from './brand';
import { designSystem } from './designSystem';
import { featureFlags } from './featureFlags';
import { cake } from './cake';
import { vacation } from './vacation';
import { animations } from './animations';
import { holyMonth } from './holyMonth';
import { clonedApps } from './clonedApps';
import { recognition } from './recognition';
import { offsite } from './offsite';
import { Suite } from '../types';
import { budgetBoost } from './budgetBoost';

export const suites: { [key: string]: Suite } = {
    fridayRelease,
    // junior,
    navigationFeature,
    productionIncident,
    // flutterMigration,
    // layoff,
    appLogic,
    brandManagement,
    designSystem,
    featureFlags,
    cake,
    vacation,
    animations,
    holyMonth,
    clonedApps,
    recognition,
    offsite,
    budgetBoost
};
