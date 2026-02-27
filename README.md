# Mukhammad Rizki Romadlon — Situs Portfolio

Situs portfolio yang modern dan responsif menampilkan karya saya sebagai Junior Software Engineer. Situs ini menampilkan animasi halus, elemen interaktif, dan tema gelap yang elegan.

## 🎨 Fitur

- **Desain Responsif** — Layout yang fully responsive dan mobile-friendly
- **Animasi Halus** — Animasi berdasarkan scroll dengan AOS (Animate On Scroll)
- **Efek Typing** — Animasi teks dinamis menggunakan Typed.js
- **Latar Belakang Partikel** — Latar belakang partikel animasi menggunakan Particles.js
- **Navigasi Mulus** — Menu hamburger mobile dengan scroll yang halus
- **Efek Kursor Kustom** — Interaksi kursor yang bersinar
- **UI Modern** — Tema gelap dengan warna aksen dan tipografi yang elegan

## 📋 Bagian-Bagian

- **Hero** — Pengenalan yang menarik dengan animasi typing dan tombol call-to-action
- **Tentang Saya** — Informasi tentang latar belakang dan pengalaman profesional
- **Keahlian** — Keterampilan teknis dan keberhasilan
- **Proyek** — Pameran proyek-proyek yang telah diselesaikan
- **Pengalaman** — Riwayat kerja dan detail pekerjaan
- **Kontak** — Formulir hubungi dan informasi kontak

## 🛠️ Teknologi yang Digunakan

### Frontend

- **HTML5** — Markup semantik
- **CSS3** — Styling kustom dengan CSS variables, flexbox, dan grid
- **JavaScript** — Vanilla JS untuk interaktivitas

### Library & Framework

- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) — Library animasi scroll
- [Typed.js](https://mattboldt.com/typed.js/) — Animasi typing teks
- [Particles.js](https://vincentgarreau.com/particles.js/) — Efek animasi partikel

### Font

- [Syne](https://fonts.google.com/specimen/Syne) — Font display
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) — Font body

## 📁 Struktur Proyek

```
yooerizkilab.github.io/
├── index.html          # File HTML utama
├── assets/
│   ├── script.js       # Fungsi JavaScript
│   └── style.css       # Styling CSS
└── README.md           # File ini
```

## 🚀 Memulai

### Persyaratan

- Browser web modern (Chrome, Firefox, Safari, Edge)
- Tidak ada build tools atau dependencies — menggunakan vanilla HTML/CSS/JS

### Instalasi

1. Clone repository:

```bash
git clone https://github.com/yooerizkilab/yooerizkilab.github.io.git
```

2. Navigasi ke direktori proyek:

```bash
cd yooerizkilab.github.io
```

3. Buka `index.html` di browser Anda:

```bash
# Di Windows
start index.html

# Di macOS
open index.html

# Di Linux
xdg-open index.html
```

Atau cukup drag and drop file `index.html` ke browser Anda.

## 🎯 Detail Fitur

### Navigasi Responsif

- Navbar sticky dengan smooth scroll ke bagian-bagian
- Menu hamburger mobile yang toggle di layar kecil
- Overlay navigasi untuk UX mobile yang lebih baik

### Bagian Hero

- Animasi typing dinamis yang berputar melalui berbagai judul pekerjaan
- Indikator visual menunjukkan "Tersedia untuk peluang kerja"
- Tombol call-to-action untuk melihat karya dan kontak

### Animasi

- Animasi fade-in berdasarkan scroll untuk konten
- Transisi halus dan efek hover
- Efek kursor bersinar yang mengikuti gerakan mouse

### Performa

- Jumlah partikel yang optimal untuk perangkat mobile
- Pertimbangan performa CSS dan JS
- Animasi 60fps yang halus

## 💻 Kustomisasi

### Warna

Edit variabel CSS di `assets/style.css`:

```css
:root {
  --bg: #0a0a0f; /* Warna latar belakang */
  --accent: #6ee7b7; /* Aksen utama */
  --accent2: #818cf8; /* Aksen sekunder */
  --text: #e8e8f0; /* Warna teks */
  /* ... lebih banyak variabel ... */
}
```

### Animasi Typing

Modifikasi animasi typing di `assets/script.js`:

```javascript
new Typed("#typed-text", {
  strings: [
    "Junior Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Problem Solver",
    "Code Enthusiast",
  ],
  typeSpeed: 60, // Kecepatan typing
  backSpeed: 38, // Kecepatan backspace
  backDelay: 1800, // Delay sebelum backspace
});
```

### Pengaturan Partikel

Sesuaikan kepadatan dan jumlah partikel di `assets/script.js` untuk efek latar belakang.

## 📱 Dukungan Browser

- Chrome/Edge (terbaru)
- Firefox (terbaru)
- Safari (terbaru)
- Browser mobile (iOS Safari, Chrome Mobile)

## 📄 Lisensi

Proyek ini bersifat open source dan tersedia untuk penggunaan pribadi dan profesional.

## 🔗 Tautan

- **Situs Portfolio**: [https://yooerizkilab.github.io](https://yooerizkilab.github.io)
- **GitHub**: [https://github.com/yooerizkilab](https://github.com/yooerizkilab)

## 📧 Kontak

Untuk pertanyaan atau peluang kolaborasi, silakan hubungi melalui bagian kontak di portfolio atau terhubung di GitHub.

---

**Dibuat dengan ❤️ oleh Mukhammad Rizki Romadlon**
