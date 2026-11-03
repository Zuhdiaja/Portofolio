# Portofolio Muhammad Zuhdi Yudadharma

Website portofolio statis dengan satu halaman untuk setiap fitur. Tidak perlu build tool atau server - cukup buka `index.html` di browser.

## Struktur

```text
PortoWeb/
├── index.html            Beranda: profil + perkenalan
├── tentang.html          Tentang saya
├── pendidikan.html       Pendidikan
├── keahlian.html         Personal skill + software skill
├── pengalaman.html       Pengalaman
├── proyek.html           Proyek
├── organisasi.html       Organisasi
├── sosial.html           Media sosial
├── kontak.html           Kontak + form
│
├── css/
│   ├── base.css          Warna, font, reset, container
│   ├── layout.css        Header, navigasi, page hero, footer
│   ├── components.css    Tombol, tag, judul section, icon box
│   ├── home.css          Khusus beranda
│   ├── tentang.css       Khusus halaman tentang
│   ├── pendidikan.css    Khusus halaman pendidikan
│   ├── keahlian.css      Khusus halaman keahlian
│   ├── pengalaman.css    Khusus halaman pengalaman
│   ├── proyek.css        Khusus halaman proyek
│   ├── organisasi.css    Khusus halaman organisasi
│   ├── sosial.css        Khusus halaman sosial
│   └── kontak.css        Khusus halaman kontak
│
├── js/
│   ├── navigation.js     Menu mobile, header, tahun footer
│   └── contact.js        Form kontak via aplikasi email
│
├── assets/
│   ├── foto-zuhdi.jpg          Foto utama beranda
│   ├── foto-zuhdi-avatar.jpg   Foto kecil di halaman tentang
│   ├── lab-ai-home.jpg         Screenshot portal Lab (thumbnail proyek)
│   ├── lab-ai-admin.jpg        Screenshot admin panel Lab (tampil saat hover)
│   ├── jti-spot-map.jpg        Screenshot peta ruang JTI-Spot (thumbnail proyek)
│   ├── jti-spot-admin.jpg      Screenshot admin JTI-Spot (tampil saat hover)
│   ├── linkguard-home.png      Screenshot beranda LinkGuard (frame ponsel)
│   └── linkguard-scan.png      Screenshot pindai URL LinkGuard (frame ponsel)
│
└── preview-desain.html   Demo 5 pilihan desain (arsip)
```

## Mengubah data

| Yang ingin diubah | File |
| --- | --- |
| Nama, perkenalan, foto profil | `index.html` |
| Cerita dan info profil | `tentang.html` |
| Sekolah dan kampus | `pendidikan.html` |
| Personal/software skill | `keahlian.html` |
| Pengalaman | `pengalaman.html` |
| Proyek dan link demo | `proyek.html` (thumbnail ada di `assets/lab-ai-*`, `assets/jti-spot-*`, `assets/linkguard-*`) |
| Organisasi | `organisasi.html` |
| Link media sosial | `sosial.html` dan footer setiap halaman |
| Email, WhatsApp, lokasi, form | `kontak.html` dan `js/contact.js` |

## Mengubah tampilan

- **Warna utama** ada di `css/base.css` pada bagian `:root`.
- **Header, navigasi, dan footer** ada di `css/layout.css`.
- **Tombol, tag, dan judul section** ada di `css/components.css`.
- Tampilan khusus tiap halaman berada di file CSS dengan nama yang sama.

## Catatan

- Foto profil utama ada di `assets/foto-zuhdi.jpg` dan dipakai di beranda. Foto kecil untuk halaman tentang ada di `assets/foto-zuhdi-avatar.jpg`.
- Bagian pengalaman dan organisasi sudah memakai data nyata: Wamen Mendagri BEM Polinema, proyek perkuliahan (LAB-AI, JTI-Spot, LinkGuard), magang Prakerin di PT Aksamedia Mulia Digital, serta peran PKKMB Prastudi 2025 dan 2026.
- Tombol "Lihat CV" di hero beranda membuka `assets/cv-zuhdi.pdf` di tab baru.
- JTI-Spot dan LinkGuard tidak punya link demo; kartunya memakai tombol "Lihat kode" dan, untuk LinkGuard, pill status "Dalam pengembangan".
- Repo LinkGuard (`Zuhdiaja/PBL-MOBILE`) masih private/404 saat portofolio ini disusun - jadikan public sebelum dipublikasikan.
- Data akademik mengikuti profil Muhammad Zuhdi Yudadharma: D-IV Teknik Informatika, Politeknik Negeri Malang, angkatan 2024.
- Email: `yudazuhdi21@gmail.com`.
- Tautan LinkedIn, GitHub, Instagram, dan WhatsApp sudah memakai akun/nomor asli.
- File CV berada di `assets/cv-zuhdi.pdf` - ganti file tersebut jika ada versi CV baru.
- Jika header atau footer diubah, lakukan perubahan yang sama di setiap file HTML.
