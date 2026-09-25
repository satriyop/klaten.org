import { ATHLETES } from './athletes';
import { CLUBS_DATA } from './clubs';

export const listingCount = CLUBS_DATA.length;
export const integratedCount = CLUBS_DATA.filter((club) => club.status === 'integrated').length;
export const athleteCount = ATHLETES.length;
export const listingSportIds = [...new Set(CLUBS_DATA.map((club) => club.sportId))];
export const athleteSportIds = [...new Set(ATHLETES.map((athlete) => athlete.sportId))];
export const listingSportCount = listingSportIds.length;
