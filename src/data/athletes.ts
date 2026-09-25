export type AthleteSocialKind = 'instagram' | 'tiktok' | 'x' | 'website';

export type AthleteSocial = {
  kind: AthleteSocialKind;
  label: string;
  href: string;
};

export interface Athlete {
  slug: string;
  name: string;
  sport: string;
  sportId: string;
  city: string;
  clubId?: string;
  clubName?: string;
  clubUrl?: string;
  bio?: string;
  /** Local path under /public, e.g. /athletes/luigi.jpg. Preferred over social tiles. */
  photo?: string;
  instagram?: string;
  tiktok?: string;
  x?: string;
  website?: string;
}

export const ATHLETES: Athlete[] = [
  {
    slug: 'luigi-banyu-pamungkas',
    name: 'Luigi Banyu Pamungkas',
    sport: 'Renang (Akuatik)',
    sportId: 'renang',
    city: 'Klaten',
    clubId: 'bmsc',
    clubName: 'Black Marlins Swimming Club',
    clubUrl: 'https://bmsc.klaten.org',
    bio: 'Perenang Black Marlins Swimming Club Klaten.',
    instagram: 'luigi.banyu',
  },
  {
    slug: 'kun-bumi-pamungkas',
    name: 'Kun Bumi Pamungkas',
    sport: 'Renang (Akuatik)',
    sportId: 'renang',
    city: 'Klaten',
    clubId: 'bmsc',
    clubName: 'Black Marlins Swimming Club',
    clubUrl: 'https://bmsc.klaten.org',
    bio: 'Perenang Black Marlins Swimming Club Klaten.',
    website: 'https://bumi.pamungkas.org',
  },
];

export function athleteInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return `${parts[0]![0]!}${parts[parts.length - 1]![0]!}`.toUpperCase();
}

export function athleteSocials(athlete: Athlete): AthleteSocial[] {
  const links: AthleteSocial[] = [];
  if (athlete.instagram) {
    links.push({
      kind: 'instagram',
      label: `@${athlete.instagram}`,
      href: `https://www.instagram.com/${athlete.instagram}/`,
    });
  }
  if (athlete.tiktok) {
    links.push({
      kind: 'tiktok',
      label: `@${athlete.tiktok}`,
      href: `https://www.tiktok.com/@${athlete.tiktok}`,
    });
  }
  if (athlete.x) {
    links.push({
      kind: 'x',
      label: `@${athlete.x}`,
      href: `https://x.com/${athlete.x}`,
    });
  }
  if (athlete.website) {
    const href = athlete.website.startsWith('http') ? athlete.website : `https://${athlete.website}`;
    let label = 'Situs';
    try {
      label = new URL(href).hostname.replace(/^www\./, '');
    } catch {
      /* keep Situs */
    }
    links.push({ kind: 'website', label, href });
  }
  return links;
}

export function athletePrimarySocial(athlete: Athlete): AthleteSocial | undefined {
  return athleteSocials(athlete)[0];
}
