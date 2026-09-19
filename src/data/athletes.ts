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
];

export const ATHLETE_SPORT_CATEGORIES = [
  { id: 'all', name: 'Semua Cabor' },
  { id: 'renang', name: 'Renang' },
  { id: 'bulutangkis', name: 'Bulu Tangkis' },
  { id: 'sepakbola', name: 'Sepak Bola & SSB' },
  { id: 'basket', name: 'Bola Basket' },
  { id: 'panahan', name: 'Panahan' },
  { id: 'beladiri', name: 'Bela Diri & Combat' },
  { id: 'futsal', name: 'Futsal' },
  { id: 'voli', name: 'Bola Voli' },
  { id: 'tenis-padel', name: 'Tenis & Tenis Meja' },
  { id: 'sepatu-roda', name: 'Sepatu Roda' },
  { id: 'catur-menembak', name: 'Catur & Menembak' },
  { id: 'komunitas-lain', name: 'Woodball & Otomotif' },
  { id: 'lari-atletik', name: 'Lari & Sepeda' },
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
    links.push({ kind: 'website', label: 'Situs', href });
  }
  return links;
}
