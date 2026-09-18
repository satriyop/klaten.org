# klaten.org — Hub Komunitas & Platform Olahraga Regional

Portal resmi ekosistem dan platform manajemen klub olahraga di Kabupaten Klaten, Jawa Tengah.

Situs ini berfungsi sebagai gerbang utama bagi:
- **Pengurus & Pemilik Klub**: Mengakses infrastruktur digital dan mendapatkan subdomain eksklusif `[klub].klaten.org`.
- **Pelatih (Coaches)**: Memanfaatkan sistem presensi digital saat sesi latihan dan jadwal terpadu.
- **Orang Tua Atlet (Parents/Guardians)**: Menemukan klub olahraga terstandar dan memantau kehadiran serta progres anak secara transparan.

Saat ini telah aktif berjalan bersama klub renang perintis **Black Marlins Swimming Club (BMSC)** di [bmsc.klaten.org](https://bmsc.klaten.org).

---

## 🚀 Menjalankan Secara Lokal

Pastikan Node.js (v18+ / v20+) telah terpasang di komputer Anda.

```bash
# 1. Install dependensi
npm install

# 2. Jalankan development server
npm run dev

# 3. Akses di browser
# http://localhost:4321
```

---

## 🛠️ Build & Uji Output Statis

```bash
# Kompilasi situs ke file HTML/CSS/JS statis
npm run build

# Preview hasil build lokal
npm run preview
```
Output build akan berada di folder `dist/`.

---

## ☁️ Panduan Deploy ke Cloudflare Pages (Gratis & Otomatis)

Situs ini dibangun dengan **Astro** dalam mode output statis murni (`output: 'static'`), sehingga kompatibel 100% dengan paket gratis Cloudflare Pages.

### Metode 1: Otomatis via GitHub (Sangat Disarankan)

1. Buat repositori baru di GitHub (misal: `github.com/username/klaten.org`) dan push kode ini:
   ```bash
   git init
   git add .
   git commit -m "Initial commit klaten.org landing page"
   git remote add origin git@github.com:username/klaten.org.git
   git push -u origin main
   ```
2. Buka dashboard [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Compute (Workers & Pages)** > **Create application** > **Pages** > **Connect to Git**.
3. Pilih repositori `klaten.org`.
4. Pada **Build settings**, pilih preset framework:
   * **Framework preset**: `Astro`
   * **Build command**: `npm run build`
   * **Build output directory**: `dist`
5. Klik **Save and Deploy**. Cloudflare akan mem-build dan menyajikan situs dalam waktu < 1 menit.
6. Setiap kali Anda melakukan `git push` ke branch `main`, situs akan otomatis ter-deploy.

### Setup Custom Domain `klaten.org` di Cloudflare

1. Di halaman project Pages Anda pada Cloudflare, buka tab **Custom domains**.
2. Klik **Set up a custom domain** dan masukkan `klaten.org` (serta `www.klaten.org` jika diinginkan).
3. Cloudflare akan mengonfigurasi DNS CNAME dan SSL secara otomatis.

---

## ⚙️ Mengubah Data & Kontak WhatsApp

Semua data konfigurasi, nomor WhatsApp, kontak, daftar cabang olahraga, dan pertanyaan umum (FAQ) berada di satu file terpusat:
📂 `src/data/config.ts`

Untuk mengganti nomor WhatsApp penerima pesan pendaftaran klub:
```typescript
export const SITE_CONFIG = {
  // Ganti dengan nomor WhatsApp aktif berformat internasional (tanpa tanda +)
  contact: {
    whatsappNumber: '6281234567890', // Contoh: 6281234567890
    ...
  }
}
```

---

## 📂 Struktur Proyek

```text
klaten.org/
├── public/
│   ├── _headers            # Header caching & keamanan Cloudflare
│   ├── favicon.svg         # Favicon brand
│   └── robots.txt          # SEO crawler rules
├── src/
│   ├── components/
│   │   ├── AudiencePillars.astro   # Pilar untuk Pelatih, Pengurus, Orang Tua
│   │   ├── CtaBanner.astro         # Banner ajakan WhatsApp
│   │   ├── FaqSection.astro        # Tanya Jawab Interaktif
│   │   ├── Footer.astro            # Footer & Hak Cipta
│   │   ├── Header.astro            # Navigasi & Aksi WhatsApp
│   │   ├── Hero.astro              # Hero Section & Live Stats
│   │   ├── PlatformFeatures.astro  # Fitur Presensi, Portal Wali, Subdomain
│   │   └── SportsExplorer.astro    # Tab Cabor & Showcase BMSC
│   ├── data/
│   │   └── config.ts               # Data terpusat & Template WhatsApp
│   ├── layouts/
│   │   └── Layout.astro            # Shell HTML & Meta Tags
│   ├── styles/
│   │   └── global.css              # Tailwind v4 & Glassmorphism
│   └── pages/
│       └── index.astro             # Halaman utama
├── astro.config.mjs
├── package.json
└── tsconfig.json
```
