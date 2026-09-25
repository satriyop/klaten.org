export const SPORTS = [
  { id: 'renang', name: 'Renang', tag: 'Akuatik' },
  { id: 'bulutangkis', name: 'Bulu Tangkis', tag: 'PB / Raket' },
  { id: 'sepakbola', name: 'Sepak Bola & SSB', tag: 'Sepak Bola' },
  { id: 'basket', name: 'Bola Basket', tag: 'Bola Besar' },
  { id: 'panahan', name: 'Panahan', tag: 'Akurasi & Fokus' },
  { id: 'beladiri', name: 'Bela Diri & Combat', tag: 'Taekwondo & Silat' },
  { id: 'futsal', name: 'Futsal', tag: 'Indoor Sport' },
  { id: 'voli', name: 'Bola Voli', tag: 'Voli Lapangan' },
  { id: 'tenis-padel', name: 'Tenis & Tenis Meja', tag: 'Raket Lapangan' },
  { id: 'sepatu-roda', name: 'Sepatu Roda', tag: 'Sepatu Roda' },
  { id: 'catur-menembak', name: 'Catur & Menembak', tag: 'Presisi' },
  { id: 'komunitas-lain', name: 'Woodball & Otomotif', tag: 'Komunitas' },
  { id: 'lari-atletik', name: 'Lari & Sepeda', tag: 'Komunitas & Prestasi' },
] as const;

export type SportId = (typeof SPORTS)[number]['id'];

export const ALL_CABOR_FILTER = { id: 'all' as const, name: 'Semua Cabor' };

export function sportById(id: string) {
  return SPORTS.find((sport) => sport.id === id);
}

export function directoryFilters() {
  return [ALL_CABOR_FILTER, ...SPORTS.map((sport) => ({ id: sport.id, name: sport.name }))];
}

export function filtersForSportIds(ids: Iterable<string>) {
  const present = new Set(ids);
  return [ALL_CABOR_FILTER, ...SPORTS.filter((sport) => present.has(sport.id)).map((sport) => ({ id: sport.id, name: sport.name }))];
}
