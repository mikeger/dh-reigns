import { fridayRelease } from './fridayRelease';
import { junior } from './junior';
import { navigationFeature } from './navigationFeature';
import { productionIncident } from './productionIncident';
import { layoff } from './layoff';
import { flutterMigration } from './flutterMigration';
import { Suite } from '../types';

export const suites: { [key: string]: Suite } = {
    fridayRelease,
    // junior,
    navigationFeature,
    productionIncident,
    flutterMigration,
    layoff,
};
