> **Yasal Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı hazırlanmıştır. Orijinal dokümantasyon kaynakları (MDN Web Docs vb.) kendi orijinal lisanslarına (CC BY-SA) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Soru-Cevap: 08 - Extension Modules 3 (Server-side, Performance, Testing)

**Takım:** Bilişimciler  
**Ders:** Web Programlama I  
**Modül:** 08 - Extension Modules 3  
**Kapsam:** Server-side Website Programming • Web Performance • Testing  
**Soru Dağılımı:** 7 Teorik / Senaryo Sorusu + 3 Kod Sorusu • Cevap anahtarı ve detaylı çözümler dokümanın sonundadır.

---

## Bölüm 1: Server-side Website Programming (Sunucu Tarafı Programlama)

### Soru 1 (Senaryo)
Bir e-ticaret sitesinde kullanıcı giriş yaptıktan sonra kendisine özel sipariş geçmişini görüntüleyebilmektedir. Bu işlemin server-side programlama ile gerçekleştirilmesinin temel nedeni nedir?

- **A)** HTML'nin kullanıcıya özel içerikleri görüntüleyememesi.
- **B)** Kullanıcı doğrulaması ve veritabanı sorgularının güvenilir sunucu ortamında gerçekleştirilmesi.
- **C)** Client-side JavaScript'in HTTP request gönderememesi.
- **D)** Server-side işlemlerin her zaman client-side işlemlerden daha hızlı olması.

---

### Soru 2 (Kod İnceleme - Django)
Aşağıdaki Django URL configuration incelendiğinde `/urun/15/` adresine gönderilen request için hangisi doğrudur?

```python
urlpatterns = [
    path('urun/<int:id>/', views.detay),
    path('urun/', views.liste),
]
```

- **A)** `views.liste` çalışır ve `id` parametresini alır.
- **B)** Her iki view aynı anda çalışır.
- **C)** `views.detay` çalışır ve `id` parametresine integer olarak `15` aktarılır.
- **D)** Django dinamik URL parametrelerini desteklemediğinden 404 döner.

---

### Soru 3 (Mimari Karşılaştırma)
Server-side rendering (SSR) ile client-side rendering (CSR) yaklaşımları karşılaştırıldığında aşağıdaki ifadelerden hangisi en doğrudur?

- **A)** SSR'de HTML içeriği sunucuda oluşturulabilir; CSR'de içerik oluşturma işleminin önemli kısmı tarayıcıda JavaScript ile yapılabilir.
- **B)** CSR kullanıldığında sunucuya HTTP request gönderilmez.
- **C)** SSR kullanılan sayfalarda JavaScript çalıştırılamaz.
- **D)** SSR her koşulda CSR'den daha iyi performans sağlar.

---

### Soru 4 (Kod İnceleme - Express.js)
Aşağıdaki Express.js kodu incelendiğinde `/urun/8?indirim=20` adresine gönderilen GET request sonucunda hangi response döner?

```javascript
app.get('/urun/:id', (req, res) => {
    const id = req.params.id;
    const indirim = req.query.indirim;
    res.send(`${id}-${indirim}`);
});
```

- **A)** `undefined-20`
- **B)** `8-undefined`
- **C)** `20-8`
- **D)** `8-20`

---

## Bölüm 2: Web Performance (Web Performansı)

### Soru 5 (Metrik Analizi - Core Web Vitals)
Bir web sitesinin performans ölçümlerinde LCP yüksek, CLS düşük ve INP normal seviyededir. Hangi optimizasyon öncelikli olarak değerlendirilmelidir?

- **A)** Sayfa elemanlarının beklenmedik konum değişimlerini azaltmak.
- **B)** En büyük görünür içerik öğesinin yüklenme ve render süresini iyileştirmek.
- **C)** Kullanıcı etkileşimlerine verilen yanıt süresini azaltmak.
- **D)** Sayfadaki tüm animasyonları kaldırmak.

---

### Soru 6 (Görsel Optimizasyonu)
Bir web sitesinin ilk ekranında büyük bir kapak görseli, alt bölümlerinde ise çok sayıda ürün görseli bulunmaktadır. Aşağıdaki uygulamalardan hangisi genellikle daha doğru bir performans optimizasyonudur?

```html
<!-- Kapak görseli -->
<img src="kapak.webp" loading="lazy">

<!-- Alt bölüm görseli -->
<img src="urun.webp" loading="eager">
```

- **A)** Her iki görselde de `loading="lazy"` kullanmak.
- **B)** Kapak görselini `lazy`, alt bölüm görselini `eager` bırakmak.
- **C)** Kapak görselini `eager`, alt bölüm görselini `lazy` yapmak.
- **D)** Her iki görselde de `loading` attribute'unu kaldırmak, çünkü hiçbir etkisi yoktur.

---

### Soru 7 (Script Optimizasyonu)
Bir web sitesinde HTML hızlı yüklenmesine rağmen büyük JavaScript dosyalarının işlenmesi kullanıcı etkileşimlerini geciktirmektedir. Hangi yaklaşım daha uygun olur?

- **A)** JavaScript dosyalarını daha fazla dosyaya bölmek, ancak hepsini başlangıçta çalıştırmak.
- **B)** Tüm JavaScript kodlarını HTML'nin en üstüne taşımak.
- **C)** Görselleri daha yüksek çözünürlükte yüklemek.
- **D)** Gereksiz JavaScript'i azaltmak ve kritik olmayan kodları ihtiyaç duyulana kadar ertelemek (code splitting & defer/async).

---

## Bölüm 3: Testing (Web Testi ve Çapraz Tarayıcı Uyumluluğu)

### Soru 8 (CSS Özellik Tespiti)
Aşağıdaki CSS kodu farklı tarayıcılarda test edilmektedir. Bu kodun cross-browser compatibility açısından sağladığı avantaj hangisidir?

```css
.container {
    display: flex;
}

@supports (display: grid) {
    .container {
        display: grid;
    }
}
```

- **A)** Grid destekleyen tarayıcılarda Grid kullanılır; desteklemeyenlerde Flexbox fallback olarak kalır.
- **B)** Tarayıcı Grid desteklemiyorsa sayfa otomatik olarak hata verir.
- **C)** `@supports`, kullanılan tarayıcının adını belirleyerek CSS dosyasını değiştirir.
- **D)** Flexbox ve Grid her tarayıcıda aynı anda zorunlu olarak uygulanır.

---

### Soru 9 (Hata Ayıklama Stratejisi)
Bir web uygulaması Chrome'da sorunsuz çalışırken Safari'de bazı özellikler beklenen şekilde çalışmamaktadır. Test sürecinde en doğru yaklaşım hangisidir?

- **A)** Chrome'da çalıştığı için sorunu görmezden gelmek.
- **B)** Safari kullanıcıları için tüm JavaScript özelliklerini kaldırmak.
- **C)** Hatanın nedenini belirleyip feature detection veya uygun fallback çözümleri uygulamak ve yeniden test etmek.
- **D)** Sorunu çözmek için yalnızca CSS dosyasının adını değiştirmek.

---

### Soru 10 (Otomasyon Araçları)
Bir ekip, her yeni kod değişikliğinden sonra web sitesinin farklı tarayıcılarda aynı temel işlevleri yerine getirip getirmediğini otomatik olarak kontrol etmek istemektedir. Bu gereksinim için hangi yaklaşım en uygundur?

- **A)** Yalnızca geliştirme tamamlandıktan sonra manuel test yapmak.
- **B)** Selenium/WebDriver veya Playwright gibi araçlarla automated cross-browser testing uygulamak.
- **C)** Yalnızca HTML validator kullanarak bütün işlevleri doğrulamak.
- **D)** Her yeni sürümde yalnızca CSS dosyalarını karşılaştırmak.

---

## Cevap Anahtarı ve Açıklamalar

| Soru | Doğru Cevap | Konu Başlığı | Açıklama Özeti |
|:---:|:---:|:---|:---|
| **1** | **B** | Server-side Programming | Kullanıcı kimlik doğrulama, oturum yönetimi ve veritabanı sorguları istemciye açık olamayacağından güvenli sunucuda işlenmelidir. |
| **2** | **C** | Django URL Dispatcher | Django `<int:id>` dönüştürücüsü, URL'deki değeri integer tipinde yakalar ve ilgili view fonksiyonuna argüman olarak aktarır. |
| **3** | **A** | SSR vs CSR | SSR'de tam HTML sunucuda render edilir; CSR'de boş bir HTML iskeletine JS tarafından dinamik içerik inşa edilir. |
| **4** | **D** | Express Routing & Query | `req.params.id` URL yolundan `8` değerini, `req.query.indirim` ise sorgu dizesinden `20` değerini alır; sonuç `8-20` olur. |
| **5** | **B** | Web Performance (CWV) | LCP (Largest Contentful Paint), ekrandaki en büyük görsel veya metin bloğunun çizilme süresini ölçer. Yüksek olması render süresinin geciktiğini gösterir. |
| **6** | **C** | Lazy Loading | Kullanıcının ilk gördüğü (above-the-fold) ana görsel gecikmesiz (`eager`) yüklenmeli; ekran dışındaki görseller bant genişliği tasarrufu için ertelenmelidir (`lazy`). |
| **7** | **D** | JavaScript Optimization | Ana iş parçacığını (main thread) bloke eden büyük JS yüklerini azaltmak için kod bölme (code splitting) ve erteleme uygulanmalıdır. |
| **8** | **A** | CSS Feature Queries | `@supports` kuralı, tarayıcının ilgili CSS özelliğini destekleyip desteklemediğini kontrol eder; desteklenmiyorsa önceki fallback kuralı geçerli kalır. |
| **9** | **C** | Cross-Browser Testing | Tarayıcı farklılıklarında kullanıcı engellenmez; özellik tespiti (feature detection) ve polyfill/fallback mekanizmalarıyla çözüm üretilir. |
| **10** | **B** | Automated Testing | CI/CD süreçlerinde tarayıcılar arası regresyon testlerini sürekli ve otomatik koşturmak için Selenium, Playwright veya Cypress kullanılır. |

---

### MDN Referans Kaynakları
- [MDN Web Docs - Server-side website programming](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side)
- [MDN Web Docs - Web performance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance)
- [MDN Web Docs - Testing](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing)
