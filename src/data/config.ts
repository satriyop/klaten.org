export interface ClubInfo {
  id: string;
  name: string;
  shortName: string;
  sport: string;
  status: 'active' | 'registration_open' | 'coming_soon';
  subdomain?: string;
  url?: string;
  logoText?: string;
  tagline: string;
  description: string;
  venues: string[];
  ageGroups?: string[];
  coachesCount?: string;
  badge?: string;
}

export interface SportCategory {
  id: string;
  name: string;
  tag: string;
  iconName: string;
  status: 'active' | 'open' | 'roadmap';
  statusText: string;
  clubCountText: string;
  description: string;
  featuredClub?: ClubInfo;
  roadmapSlug?: string;
}

export const SITE_CONFIG = {
  title: 'klaten.org — Hub Komunitas & Platform Klub Olahraga Klaten',
  description: 'Satu platform terpadu untuk pengurus klub, pelatih, dan orang tua di Klaten. Digitalisasi klub renang, bulu tangkis, sepak bola, tenis, futsal dengan subdomain eksklusif.',
  url: 'https://klaten.org',
  city: 'Klaten, Jawa Tengah',
  contact: {
    // Ganti dengan nomor WhatsApp admin / PIC klaten.org yang aktif
    whatsappNumber: '6281234567890',
    whatsappFormatted: '+62 812-3456-7890',
    email: 'kontak@klaten.org',
  },
};

export const WA_TEMPLATES = {
  clubRegistration: (sportName?: string) => {
    const topic = sportName ? `cabang olahraga ${sportName}` : 'klub olahraga';
    return `Halo Tim klaten.org, saya ingin mendaftarkan ${topic} kami ke jaringan klaten.org dan berkonsultasi mengenai pembuatan subdomain serta sistem manajemen klub.`;
  },
  parentInquiry: (clubName?: string) => {
    const target = clubName ? `klub ${clubName}` : 'klub olahraga';
    return `Halo Tim klaten.org, saya orang tua yang tertarik mencari informasi pembinaan dan jadwal latihan untuk anak di ${target}.`;
  },
};

export function getWhatsAppLink(message: string, phoneNumber = SITE_CONFIG.contact.whatsappNumber): string {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export const ACTIVE_CLUBS: ClubInfo[] = [
  {
    id: 'bmsc',
    name: 'Black Marlins Swimming Club',
    shortName: 'BMSC Klaten',
    sport: 'Renang (Akuatik)',
    status: 'active',
    subdomain: 'bmsc.klaten.org',
    url: 'https://bmsc.klaten.org',
    logoText: 'BMSC',
    badge: 'Klub Pendiri • Aktif',
    tagline: 'Klub Renang Prestasi & Pembinaan Karakter Atlet di Klaten',
    description: 'Klub renang perintis di klaten.org dengan sistem absensi latihan digital, manajemen kelompok umur (KU), dan kesiapan kompetisi resmi akuatik regional.',
    venues: ['Kolam Renang Dodok (Klaten Kota)', 'Umbul Tirwin / Sekitar Klaten'],
    ageGroups: ['KU 5 & 4 (Pemula)', 'KU 3 & 2 (Prestasi)', 'KU 1 & Senior'],
    coachesCount: 'Pelatih Berlisensi',
  },
];

export const SPORTS_CATEGORIES: SportCategory[] = [
  {
    id: 'renang',
    name: 'Renang',
    tag: 'Akuatik',
    iconName: 'waves',
    status: 'active',
    statusText: '1 Klub Resmi Aktif',
    clubCountText: 'BMSC Klaten (bmsc.klaten.org)',
    description: 'Pembinaan atlet renang prestasi dari kelompok umur dini hingga tingkat kompetisi daerah dan nasional.',
    featuredClub: ACTIVE_CLUBS[0],
  },
  {
    id: 'bulutangkis',
    name: 'Bulu Tangkis',
    tag: 'PB / Raket',
    iconName: 'activity',
    status: 'open',
    statusText: 'Buka Pendaftaran Klub',
    clubCountText: 'Slot Subdomain PB Tersedia',
    description: 'Peluang untuk Persatuan Bulu Tangkis (PB) di Klaten mendapatkan subdomain pb-[nama].klaten.org dan sistem presensi sesi.',
    roadmapSlug: 'pb',
  },
  {
    id: 'sepakbola',
    name: 'Sepak Bola & SSB',
    tag: 'Sepak Bola',
    iconName: 'trophy',
    status: 'open',
    statusText: 'Buka Pendaftaran SSB',
    clubCountText: 'Slot Subdomain SSB Tersedia',
    description: 'Sekolah Sepak Bola (SSB) di Klaten kini dapat memodernisasi absensi lapangan, data orang tua atlet, dan registrasi turnamen.',
    roadmapSlug: 'ssb',
  },
  {
    id: 'tenis-padel',
    name: 'Tenis & Padel',
    tag: 'Raket Lapangan',
    iconName: 'circle-dot',
    status: 'open',
    statusText: 'Buka Pendaftaran Klub',
    clubCountText: 'Slot Subdomain Tersedia',
    description: 'Komunitas dan klub tenis serta padel di Klaten untuk jadwal sparring, klinik kepelatihan, dan member roster.',
    roadmapSlug: 'tenis',
  },
  {
    id: 'futsal',
    name: 'Futsal',
    tag: 'Indoor Sport',
    iconName: 'shield',
    status: 'open',
    statusText: 'Buka Pendaftaran Klub',
    clubCountText: 'Slot Subdomain Tersedia',
    description: 'Akademi futsal usia dini dan tim kompetisi Klaten dengan jadwal latihan dan rekap kehadiran terpusat.',
    roadmapSlug: 'futsal',
  },
  {
    id: 'lari-atletik',
    name: 'Lari & Atletik',
    tag: 'Komunitas & Prestasi',
    iconName: 'flame',
    status: 'roadmap',
    statusText: 'Komunitas Terhubung',
    clubCountText: 'Grup Lari & Komunitas Klaten',
    description: 'Wadah bagi komunitas pelari dan pegiat kebugaran di Klaten untuk jadwal latihan bersama dan event lokal.',
  },
];

export const PLATFORM_FEATURES = [
  {
    title: 'Presensi Digital Sekali Tap',
    subtitle: 'Fokus Melatih di Lapangan',
    description: 'Pelatih cukup membuka ponsel untuk mencatat kehadiran perenang atau pemain. Tanpa kertas basah atau rekap manual di akhir bulan.',
    audience: 'Pelatih & Asisten',
    icon: 'check-circle',
    badge: 'Sudah Berjalan di BMSC',
  },
  {
    title: 'Portal Orang Tua (Guardian Home)',
    subtitle: 'Ketenangan & Transparansi Nyata',
    description: 'Orang tua dapat memantau jadwal latihan mingguan, mengecek kehadiran anak secara real-time, dan menerima pengumuman resmi klub.',
    audience: 'Orang Tua',
    icon: 'users',
    badge: 'Terbukti Efektif',
  },
  {
    title: 'Subdomain Eksklusif Tanpa Biaya Server',
    subtitle: 'Identitas Resmi namaklub.klaten.org',
    description: 'Klub mendapatkan alamat web mandiri dan berwibawa di bawah domain klaten.org tanpa perlu membeli domain sendiri atau mengelola server.',
    audience: 'Pengurus & Pemilik Klub',
    icon: 'globe',
    badge: 'Gratis Ekosistem',
  },
  {
    title: 'Rekam Prestasi & Riwayat Atlet',
    subtitle: 'Arsip Data Pembinaan Berjenjang',
    description: 'Data kelompok umur, catatan waktu renang atau riwayat kompetisi tersimpan rapi untuk memonitor progres jangka panjang.',
    audience: 'Atlet & Tim Pelatih',
    icon: 'award',
    badge: 'Data Aman',
  },
];

export const AUDIENCE_PILLARS = [
  {
    category: 'Untuk Pengurus & Pemilik Klub',
    tagline: 'Elevasi Reputasi Klub Anda ke Tingkat Profesional',
    points: [
      'Miliki alamat eksklusif seperti [namaklub].klaten.org yang mudah diingat calon member.',
      'Sistem administrasi roster atlet yang rapi dan terpusat.',
      'Tidak memerlukan tim IT sendiri — infrastruktur ditopang bersama ekosistem klaten.org.',
      'Meningkatkan kepercayaan orang tua saat mendaftarkan putra-putrinya.',
    ],
    ctaText: 'Daftarkan Klub Anda',
    ctaType: 'club',
  },
  {
    category: 'Untuk Pelatih (Coaches)',
    tagline: 'Waktu Lebih Banyak untuk Melatih, Bukan Mengurus Kertas',
    points: [
      'Input kehadiran atlet di tepi kolam renang atau lapangan dalam hitungan detik.',
      'Jadwal sesi dan kelompok latihan (pre-comp, prestasi, kelompok umur) tertata jelas.',
      'Akses instan ke data kontak darurat orang tua saat di lapangan.',
      'Rekap absensi otomatis untuk evaluasi kepelatihan berkala.',
    ],
    ctaText: 'Konsultasi Fitur Pelatih',
    ctaType: 'coach',
  },
  {
    category: 'Untuk Orang Tua Atlet',
    tagline: 'Transparansi Penuh untuk Perkembangan Olahraga Buah Hati',
    points: [
      'Kepastian bergabung dengan klub olahraga yang terkelola dan berstandar di Klaten.',
      'Jadwal latihan yang selalu update dan jelas lokasinya.',
      'Notifikasi dan konfirmasi kehadiran yang transparan.',
      'Dukungan komunitas pembinaan karakter dan disiplin anak sejak dini.',
    ],
    ctaText: 'Cari Klub untuk Anak',
    ctaType: 'parent',
  },
];

export const FAQS = [
  {
    q: 'Apa itu klaten.org?',
    a: 'klaten.org adalah platform terpadu dan hub digital untuk komunitas klub olahraga di Kabupaten Klaten, Jawa Tengah. Kami menyediakan direktori klub terverifikasi serta infrastruktur teknologi modern untuk membantu klub olahraga berkembang.',
  },
  {
    q: 'Klub apa saja yang saat ini sudah aktif di klaten.org?',
    a: 'Saat ini Black Marlins Swimming Club (BMSC) telah aktif beroperasi dengan portal resmi di bmsc.klaten.org. Kami sedang membuka pendaftaran untuk klub bulu tangkis, sekolah sepak bola (SSB), klub tenis/padel, futsal, dan cabang olahraga lainnya di Klaten.',
  },
  {
    q: 'Apakah klub kami akan mendapatkan website / subdomain sendiri?',
    a: 'Ya! Setiap klub mitra resmi berhak mendapatkan subdomain eksklusif, misalnya pb-garuda.klaten.org atau ssb-klaten.klaten.org, lengkap dengan sistem manajemen klub.',
  },
  {
    q: 'Apakah ada biaya untuk bergabung dan menggunakan sistem di klaten.org?',
    a: 'Layanan hosting dan penyediaan subdomain di bawah klaten.org didukung secara swadaya oleh komunitas penggiat olahraga dan teknologi Klaten. Hubungi kami via WhatsApp untuk mendiskusikan kebutuhan klub Anda.',
  },
  {
    q: 'Bagaimana cara mendaftarkan klub olahraga kami?',
    a: 'Cukup klik tombol "Daftarkan Klub via WhatsApp" di halaman ini. Tim kami akan membantu proses orientasi, penyiapan nama subdomain, dan panduan penggunaan sistem.',
  },
];
