# THE MUSE | Moda ve Web Teknolojileri Uygulaması (v1)

> **Takım:** Bilişimciler  
> **Modül:** 08 - Extension Modules 3  
> **Ders:** Web Programlama I (SCÜ Şarkışla UBYO)  
> **Sürüm:** `v1-2026-guz-bilisimciler`

---

## 📌 Proje Genel Bakışı

**THE MUSE**, modern bir dijital moda dergisi teması üzerinden MDN *Extension Modules 3* kapsamındaki üç temel web teknolojisi konusunu (Server-side Website Programming, Web Performance ve Testing) hem editoryal hem de etkileşimli kod simülasyonları ile gösteren bir web uygulamasıdır.

Bu uygulama tek bir arayüz üzerinde üç farklı ders konusunun pratik yansımalarını sunar:
1. **Server-side Website Programming (Sunucu Tarafı Programlama):** İstemci-sunucu mimarisi, dinamik içerik istekleri ve Python/Flask API rota simülasyonu.
2. **Web Performance (Web Performansı):** Büyük editoryal görsellerin sayfa yüküne etkisi, modern dosya formatları (WebP), `loading="lazy"` optimizasyonu ve Core Web Vitals ölçümleri.
3. **Testing (Web Testi ve Doğrulama):** Kullanıcı giriş doğrulaması (form validation), cross-browser (çapraz tarayıcı) uyumluluğu ve otomatik test stratejileri.

---

## 📂 Dosya ve Dizin Yapısı

```text
v1-2026-guz-bilisimciler/
├── index.html          # Ana HTML yapısı ve semantik içerik
├── styles/
│   └── style.css       # Tasarım, tipografi, grid/flexbox ve responsive stiller
├── scripts/
│   └── app.js          # Sekme yönetimi, kod satırı etkileşimi ve form doğrulama mantığı
└── README.md           # Uygulama teknik dokümantasyonu (bu dosya)
```

---

## 🚀 Özellikler ve Modüller

### 1. Dinamik Sekme Yönlendirmesi (SPA Deneyimi)
* Sayfa yenilenmeden üst menüden **Ana Sayfa**, **Server-side**, **Web Performance** ve **Testing** bölümleri arasında akıcı geçiş sağlanır.
* `dataset.page` nitelikleri ve `classList` manipülasyonu ile aktif bölüm render edilir.

### 2. Tıklanabilir Kod Açıklama Sistemi
* Server-side ve Performance sekmelerinde yer alan kod bloklarının satırlarına tıklandığında, altındaki bilgi panelinde ilgili satırın ne işe yaradığı dinamik olarak görüntülenir.
* Öğrenci ve değerlendiriciler için interaktif bir eğitim deneyimi sunar.

### 3. İstemci Tarafı Form Doğrulama Simülasyonu (Testing Sekmesi)
* Kullanıcı boş yorum göndermeye çalıştığında hata uyarısı, geçerli bir giriş yaptığında ise başarı mesajı üretilir.
* DOM tabanlı anlık geri bildirim mekanizması canlı olarak test edilebilir.

---

## 💻 Çalıştırma Talimatları

1. Proje dosyalarını yerel bilgisayarınıza indirin.
2. Herhangi bir ek sunucu veya bağımlılık (npm, node, python) kurulumu gerektirmez.
3. `index.html` dosyasına çift tıklayarak modern bir tarayıcıda (Google Chrome, Firefox, Safari veya Edge) doğrudan açabilirsiniz.
4. Geliştirme ortamında VS Code `Live Server` eklentisi ile çalıştırmak da önerilir.
