> **Yasal Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiş ve derlenmiştir. Orijinal dokümantasyon kaynakları (MDN Web Docs, Vue.js, Three.js vb.) kendi orijinal lisanslarına (CC-BY-SA, MIT) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Extension Modules 3 - Kapsamlı Türkçe Çeviri ve Dokümantasyon

**Modül:** 08 - Extension Modules 3  
**Takım:** Bilişimciler  
**Ders:** Web Programlama I (SCÜ Şarkışla UBYO)  
**Orijinal Kaynak:** MDN Web Docs (Learn web development > Extensions)  
**Kapsam:** 
- [1. Sunucu Tarafı Web Programlama (Server-Side Website Programming)](#bölüm-1-sunucu-tarafı-web-programlama-server-side-website-programming)
- [2. Web Performansı (Web Performance)](#bölüm-2-web-performansı-web-performance)
- [3. Web Testi ve Uyumluluk (Testing)](#bölüm-3-web-testi-testing--cross-browser-compatibility)

---

## Genel İçindekiler
1. **Bölüm 1: Sunucu Tarafı Web Siteleri (Server-Side Website Programming)**
   - Sunucu Tarafına Giriş & İstemci-Sunucu Mimarisi
   - Sunucu Tarafı Web Çerçeveleri & Güvenlik
   - Django (Python) Kütüphane Eğitimi ve Modeller
   - Express (Node.js) Rotalar, Denetleyiciler ve Veritabanı
   - Sunucu Yapılandırması ve Dağıtım (Deployment)
2. **Bölüm 2: Web Performansı (Web Performance)**
   - Web Performansının Önemi ve İş Dünyasına Etkisi
   - Algılanan Performans ve Performans Ölçümü (Core Web Vitals)
   - Multimedya Optimizasyonu (Görseller, WebP, Lazy Loading)
   - Performanslı HTML, CSS ve Yüksek Performanslı JavaScript
3. **Bölüm 3: Web Testi (Testing)**
   - Çapraz Tarayıcı Testlerine Giriş ve Test Stratejileri
   - Sık Karşılaşılan HTML ve CSS Sorunları & Çözümleri
   - Özellik Tespiti (Feature Detection) ve Fallback Mekanizmaları
   - Otomatik Test Araçları (Selenium/WebDriver vb.) ve CI Entegrasyonu


---

## Bölüm 1: Sunucu Tarafı Web Programlama (Server-Side Website Programming)

# Çeviri: MDN — Sunucu Tarafı Web Siteleri (Server-Side Website Programming)
**Kaynak:** [MDN Web Docs — Server-side website programming ](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side)


## İçindekiler
 ## İlk adımlar
 - 1\.Sunucu tarafına giriş
 - 2\.İstemci-sunucuya genel bakış
 - 3\.Sunucu tarafı web çerçeveleri
 - 4\.Web sitesi güvenliği

 ## Django(Python)
 - 1\.Django'ya giriş
 - 2\.Django geliştirme ortamının kurulumu
 - 3\.Django Eğitimi: Yerel Kütüphane web sitesi
 - 4\.Django Eğitimi Bölüm 2: İskelet bir web sitesi oluşturma
 - 5\.Django Eğitimi Bölüm 3: Modelleri Kullanma
 - 6\.Django Eğitimi Bölüm 4: Django Yönetici Sitesi
 - 7\.Django Eğitimi Bölüm 5: Ana Sayfamızı Oluşturma
 - 8\.Django Eğitimi Bölüm 6: Genel liste ve detay görünümleri
 - 9\.Django Eğitimi Bölüm 7: Oturumlar Çerçevesi
 - 10\.Django Eğitimi Bölüm 8: Kullanıcı Kimlik Doğrulaması ve İzinleri
 - 11\.Django Eğitimi Bölüm 9: Formlarla Çalışma
 - 12\.Django Eğitimi Bölüm 10: Bir Django Web Uygulamasını Test Etme
 - 13\.Django Eğitimi Bölüm 11: Django'yu Üretim Ortamına Dağıtma
 - 14\.Django web uygulaması güvenliği
 - 15\.Meydan Okuma: Kendin Yap Django mini blogu

 ## Express(Node.js)
 - 1\.Express/Node tanıtımı
 - 2\.Node geliştirme ortamının kurulumu
 - 3\.Hızlı Eğitim: Yerel Kütüphane web sitesi
 - 4\.Hızlı Eğitim Rehberi Bölüm 2: İskelet bir web sitesi oluşturma
 - 5\.Express Eğitimi Bölüm 3: Veritabanı Kullanımı (Mongoose ile)
 - 6\.Express Eğitimi Bölüm 4: Rotalar ve denetleyiciler
 - 7\.Express Eğitimi Bölüm 5: Kütüphane verilerinin görüntülenmesi
 - 8\.Express Eğitimi Bölüm 6: Formlarla Çalışma
 - 9\.Express Eğitimi Bölüm 7: Üretim Ortamına Dağıtım
 
 ## Ek eğitimler
 - 1\.Apache Yapılandırması: .htaccess
 - 2\.Sunucu MIME türlerinin doğru şekilde yapılandırılması
 - 3\.Çerçeve kullanmadan Node.js sunucusu

 ---

 # Sunucu tarafı web sitesi programlama

**Kaynak:** [Server-side website programming](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side)

Dinamik Web Siteleri – Sunucu Tarafı Programlama konusu, HTTP isteklerine yanıt olarak özelleştirilmiş bilgiler sunan dinamik web sitelerinin nasıl oluşturulacağını gösteren bir dizi modüldür. Modüller, sunucu tarafı programlamaya genel bir girişin yanı sıra, temel uygulamalar oluşturmak için Django (Python) ve Express (Node.js/JavaScript) web çerçevelerinin nasıl kullanılacağına dair başlangıç ​​seviyesinde özel eğitimler sunmaktadır.

Çoğu büyük web sitesi, gerektiğinde verileri dinamik olarak görüntülemek için bir tür sunucu tarafı teknolojisi kullanır. Örneğin, Amazon'da kaç ürün olduğunu ve Facebook'ta kaç gönderi yazıldığını düşünün. Bunların hepsini farklı statik sayfalar kullanarak görüntülemek son derece verimsiz olurdu, bu nedenle bu tür siteler bunun yerine statik şablonlar ( HTML , CSS ve JavaScript kullanılarak oluşturulmuş ) görüntüler ve daha sonra gerektiğinde, örneğin Amazon'da farklı bir ürünü görüntülemek istediğinizde, bu şablonların içinde görüntülenen verileri dinamik olarak günceller.

Günümüz web geliştirme dünyasında, sunucu tarafı geliştirme hakkında bilgi edinmek son derece önemlidir.

## Ön koşullar
Sunucu tarafı programlamaya başlamak genellikle istemci tarafı geliştirmeye göre daha kolaydır, çünkü dinamik web siteleri çok benzer işlemler gerçekleştirme eğilimindedir (veritabanından veri alma ve sayfada görüntüleme, kullanıcı tarafından girilen verileri doğrulama ve veritabanına kaydetme, kullanıcı izinlerini kontrol etme ve kullanıcıları oturum açtırma vb.) ve bu ve diğer yaygın web sunucu işlemlerini kolaylaştıran web çerçeveleri kullanılarak oluşturulurlar.

Programlama kavramlarına (veya belirli bir programlama diline) dair temel bilgi faydalıdır, ancak şart değildir. Benzer şekilde, istemci tarafı kodlama konusunda uzmanlık gerekli değildir, ancak temel bilgi, istemci tarafı web "ön yüzünüzü" oluşturan geliştiricilerle daha iyi çalışmanıza yardımcı olacaktır.

## Modüller
## Sunucu tarafı web sitesi programlamanın ilk adımları
Bu modül, "nedir?", "istemci tarafı programlamadan farkı nedir?" ve "neden faydalıdır?" gibi sunucu tarafı web sitesi programlaması hakkında teknolojiden bağımsız bilgiler sunmaktadır. Ayrıca, en popüler sunucu tarafı web çerçevelerinden bazılarını özetlemekte ve siteniz için en uygun olanı nasıl seçeceğiniz konusunda rehberlik sağlamaktadır. Son olarak, web sunucusu güvenliğine bir giriş sunulmaktadır.

## Django Web Çerçevesi (Python)
Django, Python ile yazılmış, son derece popüler ve tam özellikli bir sunucu tarafı web çerçevesidir. Bu modül, Django'nun neden bu kadar iyi bir web sunucu çerçevesi olduğunu, bir geliştirme ortamının nasıl kurulacağını ve onunla yaygın görevlerin nasıl gerçekleştirileceğini açıklamaktadır.

## Express Web Çerçevesi (Node.js/JavaScript)
Express, JavaScript ile yazılmış ve Node.js çalışma ortamında barındırılan popüler bir web çerçevesidir. Bu modül, bu çerçevenin temel avantajlarından bazılarını, geliştirme ortamınızı nasıl kuracağınızı ve yaygın web geliştirme ve dağıtım görevlerini nasıl gerçekleştireceğinizi açıklamaktadır.


# İlk adımlar

**Kaynak:** [Server-side website programming first steps](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps)

Bu modülde, "Sunucu tarafı programlama nedir?", "İstemci tarafı programlamadan farkı nedir?" ve "Neden bu kadar kullanışlıdır?" gibi sunucu tarafı programlamayla ilgili birkaç temel soruyu yanıtlıyoruz.

## Eğitimler

## Sunucu tarafına giriş
Bu ilk makalede, sunucu tarafı programlamaya genel bir bakış atarak "nedir?", "istemci tarafı programlamadan farkı nedir?" ve "neden bu kadar kullanışlıdır?" gibi soruları yanıtlayacağız.

Çoğu büyük ölçekli web sitesi, gerektiğinde farklı verileri dinamik olarak görüntülemek için sunucu tarafı kod kullanır; bu veriler genellikle sunucuda depolanan bir veritabanından çekilir ve bazı kodlar (örneğin, HTML ve JavaScript) aracılığıyla görüntülenmek üzere istemciye gönderilir.

Sunucu tarafı kodunun belki de en önemli avantajı, web sitesi içeriğini bireysel kullanıcılara göre uyarlamanıza olanak sağlamasıdır. Dinamik siteler, kullanıcı tercihlerine ve alışkanlıklarına göre daha alakalı içeriği öne çıkarabilir. Ayrıca, kişisel tercihleri ​​ve bilgileri depolayarak (örneğin, sonraki ödemeleri kolaylaştırmak için saklanan kredi kartı bilgilerini yeniden kullanarak) sitelerin kullanımını kolaylaştırabilir.

Hatta site kullanıcılarıyla etkileşime geçmeyi, e-posta veya diğer kanallar aracılığıyla bildirimler ve güncellemeler göndermeyi bile mümkün kılıyor. Tüm bu özellikler, kullanıcılarla çok daha derin bir etkileşim sağlıyor.

Günümüz web geliştirme dünyasında, sunucu tarafı geliştirme hakkında bilgi edinmek son derece önemlidir.

**Sunucu tarafı web sitesi programlaması nedir?**
Web tarayıcıları, Hiper Metin Aktarım Protokolü ( HTTP ) **[kullanarak](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)** web sunucularıyla **[iletişim](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)** kurar . Bir web sayfasındaki bir bağlantıya tıkladığınızda, bir form gönderdiğinizde veya bir arama yaptığınızda, tarayıcınızdan hedef sunucuya bir HTTP isteği gönderilir .

İstek, etkilenen kaynağı tanımlayan bir URL, gerekli eylemi tanımlayan bir yöntem (örneğin kaynağı almak, silmek veya göndermek) içerir ve URL parametrelerinde **[( sorgu dizesi](https://en.wikipedia.org/wiki/Query_string)** aracılığıyla gönderilen alan-değer çiftleri ), POST verilerinde ( **[HTTP POST yöntemiyle](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST)** gönderilen veriler ) veya ilgili **[çerezlerde](https://developer.mozilla.org/en-US/docs/Glossary/Cookie)** kodlanmış ek bilgiler içerebilir .

Web sunucuları istemci istek mesajlarını bekler, geldiklerinde bunları işler ve web tarayıcısına bir HTTP yanıt mesajı gönderir. Yanıt, isteğin başarılı olup olmadığını gösteren bir durum satırı içerir (örneğin, başarı için "HTTP/1.1 200 OK").

Başarılı bir istek yanıtının gövdesi, istenen kaynağı (örneğin, yeni bir HTML sayfası veya bir resim) içerecektir ve bu kaynak daha sonra web tarayıcısı tarafından görüntülenebilir.

**Statik siteler**
Aşağıdaki diyagram, statik bir site için temel bir web sunucusu mimarisini göstermektedir (statik site, belirli bir kaynak istendiğinde sunucudan aynı önceden tanımlanmış içeriği döndüren sitedir). Kullanıcı bir sayfaya gitmek istediğinde, tarayıcı URL'sini belirten bir HTTP "GET" isteği gönderir.

Sunucu, istenen belgeyi dosya sisteminden alır ve belgeyi ve **[başarı durumunu](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status#successful_responses)** (genellikle 200 OK) içeren bir HTTP yanıtı döndürür. Dosya herhangi bir nedenle alınamazsa, bir hata durumu döndürülür.

![Test](./assets/p1.png)

**Dinamik siteler**
Dinamik bir web sitesi, yanıt içeriğinin bir kısmının yalnızca ihtiyaç duyulduğunda dinamik olarak oluşturulduğu bir web sitesidir . Dinamik bir web sitesinde, HTML sayfaları genellikle bir veritabanından alınan verilerin HTML şablonlarındaki yer tutuculara eklenmesiyle oluşturulur (bu, statik web sitelerine kıyasla büyük miktarda içeriği depolamanın çok daha verimli bir yoludur).

Dinamik bir site, kullanıcının sağladığı bilgilere veya saklanan tercihlere bağlı olarak bir URL için farklı veriler döndürebilir ve yanıt döndürmenin bir parçası olarak başka işlemler de gerçekleştirebilir (örneğin, bildirim gönderme).

Dinamik bir web sitesini destekleyen kodun büyük bir kısmı sunucuda çalışmalıdır. Bu kodun oluşturulmasına " sunucu tarafı programlama " (veya bazen " arka uç betikleme ") denir.

Aşağıdaki diyagram, dinamik bir web sitesinin mimarisini göstermektedir . Önceki diyagramda olduğu gibi, tarayıcılar sunucuya HTTP istekleri gönderir, ardından sunucu istekleri işler ve uygun HTTP yanıtlarını döndürür.

Statik kaynaklara yönelik istekler, statik siteler için yapılan isteklerle aynı şekilde işlenir (statik kaynaklar, değişmeyen dosyalardır; tipik olarak: CSS, JavaScript, resimler, önceden oluşturulmuş PDF dosyaları vb.).

![Test](./assets/p2.png)

Dinamik kaynaklara yönelik istekler bunun yerine sunucu tarafı koduna (diyagramda Web Uygulaması olarak gösterilmiştir ) iletilir (2). "Dinamik istekler" için sunucu isteği yorumlar, veritabanından gerekli bilgileri okur (3), alınan verileri HTML şablonlarıyla birleştirir (4) ve oluşturulan HTML'yi içeren bir yanıt gönderir (5,6).

**Sunucu tarafı ve istemci tarafı programlama aynı şey midir?**
Şimdi de sunucu tarafı ve istemci tarafı programlamada kullanılan kodlara bakalım. Her iki durumda da kod önemli ölçüde farklıdır:

- Onların farklı amaçları ve kaygıları var.
- Genellikle aynı programlama dillerini kullanmazlar (istisna olarak JavaScript, hem sunucu hem de istemci tarafında kullanılabilir).
- Bunlar farklı işletim sistemi ortamlarında çalışırlar.

Tarayıcıda çalışan kod, istemci tarafı kod olarak bilinir ve öncelikle oluşturulan web sayfasının görünümünü ve davranışını iyileştirmekle ilgilenir. Bu, kullanıcı arayüzü bileşenlerini seçmeyi ve biçimlendirmeyi, düzenler oluşturmayı, navigasyonu, form doğrulamasını vb. içerir. Buna karşılık, sunucu tarafı web sitesi programlaması çoğunlukla isteklere yanıt olarak tarayıcıya hangi içeriğin döndürüleceğini seçmeyi içerir. Sunucu tarafı kod, gönderilen verileri ve istekleri doğrulama, veritabanlarını kullanarak verileri depolama ve alma ve gerektiğinde doğru verileri istemciye gönderme gibi görevleri üstlenir.

**[İstemci tarafı kod, html](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)** , **[CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)** ve **[JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting)** kullanılarak yazılır ; bir web tarayıcısı içinde çalışır ve altta yatan işletim sistemine (dosya sistemine sınırlı erişim de dahil olmak üzere) çok az veya hiç erişimi yoktur.

Web geliştiricileri, her kullanıcının bir web sitesini görüntülemek için hangi tarayıcıyı kullandığını kontrol edemez; tarayıcılar, istemci tarafı kod özellikleriyle tutarsız düzeyde uyumluluk sağlar ve istemci tarafı programlamanın zorluklarından biri de tarayıcı desteğindeki farklılıkları sorunsuz bir şekilde ele almaktır.

Sunucu tarafı kod, birçok programlama dilinde yazılabilir; popüler sunucu tarafı web dillerine örnek olarak PHP, Python, Ruby, C# ve JavaScript (Node.js) verilebilir. Sunucu tarafı kod, sunucu işletim sistemine tam erişime sahiptir ve geliştirici, kullanmak istediği programlama dilini (ve belirli sürümünü) seçebilir.

Yazılım geliştiriciler genellikle kodlarını web çerçeveleri kullanarak yazarlar . Web çerçeveleri, yaygın sorunları çözmek, geliştirmeyi hızlandırmak ve belirli bir alanda karşılaşılan farklı görev türlerini basitleştirmek için tasarlanmış fonksiyonlar, nesneler, kurallar ve diğer kod yapıları koleksiyonlarıdır.

Tekrar belirtmek gerekirse, hem istemci hem de sunucu tarafı kodlar çerçeveler kullanırken, alanlar çok farklıdır ve dolayısıyla çerçeveler de farklıdır. İstemci tarafı web çerçeveleri düzen ve sunum görevlerini basitleştirirken, sunucu tarafı web çerçeveleri, aksi takdirde kendiniz uygulamanız gerekebilecek birçok "ortak" web sunucu işlevselliği sağlar (örneğin, oturum desteği, kullanıcı ve kimlik doğrulama desteği, kolay veritabanı erişimi, şablonlama kütüphaneleri vb.).

**Not:** İstemci tarafı çerçeveleri genellikle istemci tarafı kodunun geliştirilmesini hızlandırmak için kullanılır, ancak tüm kodu elle yazmayı da seçebilirsiniz; aslında, yalnızca küçük ve basit bir web sitesi kullanıcı arayüzüne ihtiyacınız varsa, kodunuzu elle yazmak daha hızlı ve verimli olabilir.
Buna karşılık, bir web uygulamasının sunucu tarafı bileşenini bir çerçeve olmadan yazmayı neredeyse hiç düşünmezsiniz; HTTP sunucusu gibi hayati bir özelliği sıfırdan, örneğin Python'da uygulamak gerçekten zordur, ancak Django gibi Python web çerçeveleri, diğer çok kullanışlı araçlarla birlikte bunu hazır olarak sunar.

**Sunucu tarafında neler yapabilirsiniz?**
Sunucu tarafı programlama çok kullanışlıdır çünkü bireysel kullanıcılara özel bilgileri verimli bir şekilde sunmamızı ve böylece çok daha iyi bir kullanıcı deneyimi yaratmamızı sağlar .

Amazon gibi şirketler, ürünler için arama sonuçları oluşturmak, müşteri tercihlerine ve önceki satın alma alışkanlıklarına göre hedefli ürün önerileri sunmak, satın alma işlemlerini basitleştirmek vb. amaçlarla sunucu tarafı programlama kullanır.

Bankalar, hesap bilgilerini depolamak ve yalnızca yetkili kullanıcıların görüntülemesine ve işlem yapmasına izin vermek için sunucu tarafı programlama kullanır. Facebook, Twitter, Instagram ve Wikipedia gibi diğer hizmetler ise ilgi çekici içerikleri öne çıkarmak, paylaşmak ve erişimi kontrol etmek için sunucu tarafı programlama kullanır.

Sunucu tarafı programlamanın yaygın kullanım alanlarından ve faydalarından bazıları aşağıda listelenmiştir. Bazı alanlarda örtüşme olduğunu fark edeceksiniz!

*Bilgilerin verimli bir şekilde depolanması ve iletilmesi*
Amazon'da kaç ürün olduğunu ve Facebook'ta kaç gönderi yazıldığını bir düşünün? Her ürün veya gönderi için ayrı bir statik sayfa oluşturmak tamamen pratik olmazdı.

Sunucu tarafı programlama, bilgileri bir veritabanında saklamamıza ve dinamik olarak HTML ve diğer dosya türlerini (örneğin, PDF'ler, resimler vb.) oluşturup döndürmemize olanak tanır. Ayrıca, uygun istemci tarafı web çerçeveleri tarafından işlenmek üzere veri ( JSON , XML vb.) döndürmek de mümkündür (bu, sunucudaki işlem yükünü ve gönderilmesi gereken veri miktarını azaltır).

Sunucu, yalnızca veritabanlarından bilgi göndermekle sınırlı değildir; alternatif olarak yazılım araçlarının sonuçlarını veya iletişim hizmetlerinden gelen verileri de döndürebilir. İçerik, onu alan istemci cihazının türüne göre bile hedeflenebilir.

Bilgiler bir veritabanında olduğundan, diğer işletme sistemleriyle daha kolay paylaşılabilir ve güncellenebilir (örneğin, ürünler çevrimiçi veya bir mağazada satıldığında, mağaza envanter veritabanını güncelleyebilir).

**Not:** Bilgilerin verimli bir şekilde depolanması ve iletilmesi için sunucu tarafı kodunun faydasını görmek için hayal gücünüzü zorlamanıza gerek yok:

1\.Amazon'a veya başka bir e-ticaret sitesine gidin .
2\.Birkaç anahtar kelime arayın ve sonuçlar değişse bile sayfa yapısının nasıl değişmediğini gözlemleyin.
3\.İki veya üç farklı ürünü açın. Yine, ortak bir yapıya ve düzene sahip olduklarını, ancak farklı ürünlere ait içeriklerin veritabanından çekildiğini fark edin.

Sık kullanılan bir arama terimi ("balık" diyelim) için kelimenin tam anlamıyla milyonlarca sonuç görebilirsiniz. Veritabanı kullanmak, bu sonuçların verimli bir şekilde saklanmasını ve paylaşılmasını sağlar ve bilgilerin sunumunun tek bir yerde kontrol edilmesine olanak tanır.

**Özelleştirilmiş kullanıcı deneyimi**
Sunucular, kullanıcılara uygun ve kişiselleştirilmiş bir deneyim sunmak için istemciler hakkında bilgi depolayabilir ve kullanabilir. Örneğin, birçok site kredi kartı bilgilerini saklar, böylece bilgilerin tekrar girilmesine gerek kalmaz. Google Haritalar gibi siteler, rota bilgileri sağlamak için kaydedilmiş veya mevcut konumları kullanabilir ve arama sonuçlarında yerel işletmeleri vurgulamak için arama veya seyahat geçmişini kullanabilir.

Kullanıcı alışkanlıklarının daha derinlemesine analizi, ilgi alanlarını tahmin etmek ve yanıtları ve bildirimleri daha da özelleştirmek için kullanılabilir; örneğin, harita üzerinde daha önce ziyaret edilen veya popüler yerlerin bir listesini sunmak gibi.

**Not:** Google Haritalar arama ve ziyaret geçmişinizi kaydeder. Sık ziyaret edilen veya sık aranan konumlar diğerlerine göre daha fazla vurgulanır.

Google arama sonuçları, önceki aramalara göre optimize edilir.

1\.Google'da arama yapın .
2\."Futbol" kelimesini arayın.
3\.Şimdi arama kutusuna "favori" yazmayı deneyin ve otomatik tamamlama arama tahminlerini gözlemleyin.
Tesadüf mü? Kesinlikle hayır!

**İçeriğe kontrollü erişim**
Sunucu tarafı programlama, sitelerin erişimi yetkili kullanıcılarla sınırlandırmasına ve kullanıcının yalnızca görmesine izin verilen bilgileri sunmasına olanak tanır.

Gerçek dünya örnekleri arasında, kullanıcıların siteye yükledikleri içeriği kimlerin görebileceğini ve akışlarında kimin içeriğinin görüneceğini belirlemelerine olanak tanıyan sosyal ağ siteleri yer almaktadır.

**Not:** İçeriğe erişimin kontrol edildiği diğer gerçek örnekleri de göz önünde bulundurun. Örneğin, bankanızın çevrimiçi sitesine gittiğinizde neler görebilirsiniz? Hesabınıza giriş yapın; hangi ek bilgileri görebilir ve değiştirebilirsiniz? Sadece bankanın değiştirebileceği hangi bilgileri görebilirsiniz?

**Oturum/durum bilgilerini saklayın**
Sunucu tarafı programlama, geliştiricilerin oturumlardan yararlanmasına olanak tanır ; bu, temelde bir sunucunun bir sitenin mevcut kullanıcısıyla ilişkili bilgileri saklamasına ve bu bilgilere dayanarak farklı yanıtlar göndermesine olanak tanıyan bir mekanizmadır.

Bu, örneğin, bir sitenin kullanıcının daha önce giriş yaptığını bilmesini ve e-postalarına veya sipariş geçmişine bağlantılar göstermesini veya basit bir oyunun durumunu kaydederek kullanıcının siteye tekrar gittiğinde kaldığı yerden devam etmesini sağlar.

**Not:** Abonelik modeli olan bir gazete sitesini ziyaret edin ve birkaç sekme açın **[(örneğin, The Age ).](https://www.theage.com.au/)** Siteyi birkaç saat/gün boyunca ziyaret etmeye devam edin. Sonunda, abonelik yöntemini açıklayan sayfalara yönlendirilmeye başlayacaksınız ve makalelere erişemeyeceksiniz. Bu bilgi, çerezlerde saklanan oturum bilgilerine bir örnektir.

**Bildirimler ve iletişim**
Sunucular, genel veya kullanıcıya özel bildirimleri doğrudan web sitesi üzerinden veya e-posta, SMS, anlık mesajlaşma, görüntülü görüşme veya diğer iletişim hizmetleri aracılığıyla gönderebilir.

İşte birkaç örnek:

- Facebook ve Twitter, yeni duyurular hakkında sizi bilgilendirmek için e-posta ve SMS mesajları gönderir.
- Amazon düzenli olarak, daha önce satın aldığınız veya görüntülediğiniz ürünlere benzer ve ilginizi çekebilecek ürünler öneren ürün e-postaları gönderir.
- Bir web sunucusu, site yöneticilerine sunucudaki düşük bellek kullanımı veya şüpheli kullanıcı etkinliği konusunda uyarı mesajları gönderebilir.

**Not:** En yaygın bildirim türü *"kayıt onayı"*dır. İlginizi çeken hemen hemen her büyük siteyi (Google, Amazon, Instagram vb.) seçin ve e-posta adresinizi kullanarak yeni bir hesap oluşturun. Kısa süre sonra kaydınızı onaylayan veya hesabınızı etkinleştirmek için bir onay gerektiren bir e-posta alacaksınız.

**Veri analizi**
Bir web sitesi kullanıcılar hakkında birçok veri toplayabilir: ne aradıkları, ne satın aldıkları, ne önerdikleri, her sayfada ne kadar kaldıkları gibi. Sunucu tarafı programlama, bu verilerin analizine dayalı olarak yanıtları iyileştirmek için kullanılabilir.

Örneğin, Amazon ve Google, ürünlerin reklamını önceki aramalara (ve satın alımlara) göre yapıyor.

## İstemci-Sunucuya genel bakış
Bir sunucunun tarayıcıdan "dinamik bir istek" aldığında neler olduğunu inceleyeceğiz. Çoğu web sitesinin sunucu tarafı kodu istekleri ve yanıtları benzer şekilde ele aldığından, bu, kendi kodunuzu yazarken ne yapmanız gerektiğini anlamanıza yardımcı olacaktır.

**Web sunucuları ve HTTP (temel bilgiler)**
Web tarayıcıları, Hiper Metin Aktarım Protokolü ( HTTP ) **[kullanarak](https://developer.mozilla.org/en-US/docs/Web/HTTP)** web **[sunucularıyla](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)** iletişim kurar . Bir web sayfasındaki bir bağlantıya tıkladığınızda, bir form gönderdiğinizde veya bir arama yaptığınızda, tarayıcı sunucuya bir HTTP İsteği gönderir .

Bu talep şunları içermektedir:

- Hedef sunucuyu ve kaynağı (örneğin, bir HTML dosyası, sunucudaki belirli bir veri noktası veya çalıştırılacak bir araç) tanımlayan bir URL.

- Gerekli eylemi tanımlayan bir yöntem (örneğin, bir dosya almak veya bazı verileri kaydetmek veya güncellemek). Farklı yöntemler/fiiller ve bunlarla ilişkili eylemler aşağıda listelenmiştir:

- *GET:* Belirli bir kaynağı alın (örneğin, bir ürün hakkında bilgi içeren bir HTML dosyası veya ürün listesi).
- *POST:* Yeni bir kaynak oluşturun (örneğin, bir wiki'ye yeni bir makale ekleyin, bir veritabanına yeni bir kişi ekleyin).
- *HEAD:* Belirli bir kaynak hakkında meta veri bilgilerini, normalde olduğu gibi gövdeyi almadan elde edin . Örneğin , bir kaynağın en son ne zaman güncellendiğini öğrenmek için *GET* bir istek kullanabilir ve yalnızca kaynak değişmişse (daha "pahalı") kaynağı indirmek için istek kullanabilirsiniz.*HEAD GET*
- *PUT* Mevcut bir kaynağı güncelleyin (veya yoksa yeni bir tane oluşturun).
- *DELETE* Belirtilen kaynağı silin.
- *TRACE* Bu fiiller daha OPTIONSaz yaygın/ileri düzey görevler içindir, bu nedenle burada bunlara değinmeyeceğiz.*CONNECT PATCH*


- İsteğe ek bilgiler de kodlanabilir (örneğin, HTML form verileri). Bilgiler şu şekilde kodlanabilir:

- *URL parametreleri:* *GET* İstekler, sunucuya gönderilen URL'ye sonuna ad/değer çiftleri ekleyerek verileri kodlar; örneğin, `<name>` . URL'nin geri kalanını URL parametrelerinden ayıran her zaman bir soru işareti (`)`, her adı ilişkili değerinden ayıran bir eşittir işareti (`)` ve her çifti ayıran bir ampersand (`& `) *http://example.com?name=Fred&age=11* bulunur . URL parametreleri, kullanıcılar tarafından değiştirilip yeniden gönderilebildikleri için doğası gereği "güvenli değildir". Sonuç olarak, URL parametreleri/ istekleri sunucudaki verileri güncelleyen istekler için kullanılmaz. *?=&GET*
- *POST* Veri *POST* istekleri, verileri istek gövdesinde kodlanmış yeni kaynaklar ekler.
- İstemci tarafı çerezleri. Çerezler, sunucunun istemcinin oturum açma durumunu ve kaynaklara erişim izinlerini/yetkilerini belirlemek için kullanabileceği anahtarlar da dahil olmak üzere, istemci hakkında oturum verileri içerir.

Web sunucuları istemci istek mesajlarını bekler, geldiklerinde bunları işler ve web tarayıcısına bir HTTP yanıt mesajı gönderir. Yanıt, isteğin başarılı olup olmadığını gösteren bir **[HTTP Yanıt durum kodu](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)** **[200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200)** içerir (örneğin, başarı durumunda; **[404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404)** kaynak bulunamadığında; **[403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403)** kullanıcının kaynağı görme yetkisi olmadığında vb.). Başarılı bir isteğe verilen yanıtın gövdesi, GETistenen kaynağı içerir.

Bir HTML sayfası döndürüldüğünde, web tarayıcısı tarafından işlenir. İşleme sürecinin bir parçası olarak, tarayıcı diğer kaynaklara (örneğin, bir HTML sayfası genellikle JavaScript ve CSS dosyalarına referans verir) bağlantılar keşfedebilir ve bu dosyaları indirmek için ayrı HTTP istekleri gönderir.

Hem statik hem de dinamik web siteleri (sonraki bölümlerde ele alınacaktır) tamamen aynı iletişim protokolünü/kalıplarını kullanır.

**GET isteği/yanıtı örneği**
Bir bağlantıya tıklayarak veya bir sitede (örneğin bir arama motorunun ana sayfasında) arama yaparak basit bir istekte bulunabilirsiniz GET. Örneğin, MDN'de "istemci-sunucu genel bakışı" terimini aradığınızda gönderilen HTTP isteği, aşağıda gösterilen metne çok benzeyecektir (mesajın bazı bölümleri tarayıcınıza/kurulumunuza bağlı olduğundan tamamen aynı olmayacaktır).

**Not:** HTTP mesajlarının formatı bir "web standardı"nda **[( RFC9110 )](https://httpwg.org/specs/rfc9110.html#messages)** tanımlanmıştır. Bu kadar ayrıntılı bilgiye sahip olmanıza gerek yok, ancak en azından artık bunun nereden geldiğini biliyorsunuz!

**Talep**
İstek metninin her satırı, istekle ilgili bilgiler içerir. İlk kısım başlık (header) olarak adlandırılır ve bir **[HTML başlığının](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)** bir HTML belgesi hakkında yararlı bilgiler içermesine benzer şekilde, istekle ilgili yararlı bilgiler içerir (ancak asıl içerik gövdede bulunur)

```HTTP

GET /en-US/search?q=client+server+overview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/
Accept-Encoding: gzip, deflate, sdch, br
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _gat=1; _ga=GA1.2.1688886003.1471911953; ffo=true
```

Birinci ve ikinci satırlar, yukarıda bahsettiğimiz bilgilerin çoğunu içeriyor:

- İstek türü *( GET).*
- Hedef kaynak URL'si *( /en-US/search).*
- URL parametreleri *( q=client%2Bserver%2Boverview&topic=apps&topic=html&topic=css&topic=js&topic=api&topic=webdev).*
- Hedef/ev sahibi web sitesi *(developer.mozilla.org).*
-Nİlk satırın sonunda ayrıca belirli protokol sürümünü tanımlayan kısa bir dize de yer almaktadır *( HTTP/1.1).*

Son satırda istemci tarafı çerezleri hakkında bilgi yer almaktadır — bu örnekte çerezin oturumları yönetmek için bir kimlik içerdiğini görebilirsiniz *( Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; …).*

Geri kalan satırlar, kullanılan tarayıcı ve işleyebileceği yanıt türleri hakkında bilgi içerir. Örneğin, burada şunları görebilirsiniz:

- Tarayıcım *( User-Agent)* Mozilla Firefox'tur *( Mozilla/5.0).*
- Gzip sıkıştırılmış bilgileri kabul edebilir *( Accept-Encoding: gzip).**
- Belirtilen dilleri kabul edebilir *( Accept-Language: en-US,en;q=0.8,es;q=0.6).*
- Bu Referer satır, bu kaynağa bağlantı içeren web sayfasının adresini (yani isteğin kaynağını *https://developer.mozilla.org/en-US/)* gösterir.

HTTP isteklerinin de bir gövdesi olabilir, ancak bu durumda gövde boştur.

**Yanıt**
Bu isteğe verilen yanıtın ilk kısmı aşağıda gösterilmiştir. Başlıkta aşağıdaki gibi bilgiler yer almaktadır:

- *200 OK* İlk satırda , isteğin başarılı olduğunu gösteren yanıt kodu yer almaktadır .
- Yanıtın biçimlendirilmiş olduğunu görebiliyoruz *text/html( Content-Type).*
- Ayrıca UTF-8 karakter setini kullandığını da görebiliriz *( Content-Type: text/html; charset=utf-8).*
Kafa aynı zamanda bize ne kadar büyük olduğunu da söyler *( Content-Length: 41823).* 

Mesajın sonunda, isteğin döndürdüğü gerçek HTML'yi içeren gövde içeriğini görüyoruz.

```HTTP

HTTP/1.1 200 OK
Server: Apache
X-Backend-Server: developer1.webapp.scl3.mozilla.com
Vary: Accept, Cookie, Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:11:31 GMT
Keep-Alive: timeout=5, max=999
Connection: Keep-Alive
X-Frame-Options: DENY
Allow: GET
X-Cache-Info: caching
Content-Length: 41823

<!doctype html>
<html lang="en-US" dir="ltr" class="redesign no-js" data-ffo-opensanslight=false data-ffo-opensans=false >
<head prefix="og: http://ogp.me/ns#">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <script>(function(d) { d.className = d.className.replace(/\bno-js/, ''); })(document.documentElement);</script>
  …
  ```

**POST isteği/yanıtı örneği**
*POST* Bir form gönderdiğinizde, sunucuya kaydedilecek bilgiler içeren bir HTTP bağlantısı oluşturulur.

**Talep**
Aşağıdaki metin, bir kullanıcının bu sitede yeni profil bilgilerini gönderdiğinde yapılan HTTP isteğini göstermektedir. İsteğin biçimi, daha önce gösterilen istek örneğiyle neredeyse aynıdır *GET*, ancak ilk satır bu isteği bir . olarak tanımlar *POST*.

```HTTP
POST /en-US/profiles/hamishwillee/edit HTTP/1.1
Host: developer.mozilla.org
Connection: keep-alive
Content-Length: 432
Pragma: no-cache
Cache-Control: no-cache
Origin: https://developer.mozilla.org
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36
Content-Type: application/x-www-form-urlencoded
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: https://developer.mozilla.org/en-US/profiles/hamishwillee/edit
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.8,es;q=0.6
Cookie: sessionid=6ynxs23n521lu21b1t136rhbv7ezngie; _gat=1; csrftoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT; dwf_section_edit=False; dwf_sg_task_completion=False; _ga=GA1.2.1688886003.1471911953; ffo=true

csrfmiddlewaretoken=zIPUJsAZv6pcgCBJSCj1zU6pQZbfMUAT&user-username=hamishwillee&user-fullname=Hamish+Willee&user-title=&user-organization=&user-location=Australia&user-locale=en-US&user-timezone=Australia%2FMelbourne&user-irc_nickname=&user-interests=&user-expertise=&user-twitter_url=&user-stackoverflow_url=&user-linkedin_url=&user-mozillians_url=&user-facebook_url=
```

Temel fark, URL'nin herhangi bir parametre içermemesidir. Gördüğünüz gibi, formdaki bilgiler isteğin gövdesine kodlanmıştır.

**Yanıt**
İsteğe verilen yanıt aşağıda gösterilmiştir. Durum kodu, *302 Found* tarayıcıya *POST* işleminin başarılı olduğunu ve belirtilen alanda yer alan sayfayı yüklemek için ikinci bir HTTP isteği göndermesi gerektiğini bildirir *Location.* Bunun dışında bilgiler, bir isteğe verilen yanıta benzerdir *GET.*

```HTTP
HTTP/1.1 302 FOUND
Server: Apache
X-Backend-Server: developer3.webapp.scl3.mozilla.com
Vary: Cookie
Vary: Accept-Encoding
Content-Type: text/html; charset=utf-8
Date: Wed, 07 Sep 2016 00:38:13 GMT
Location: https://developer.mozilla.org/en-US/profiles/hamishwillee
Keep-Alive: timeout=5, max=1000
Connection: Keep-Alive
X-Frame-Options: DENY
X-Cache-Info: not cacheable; request wasn't a GET or HEAD
Content-Length: 0
```

**Statik siteler**
Statik bir site , belirli bir kaynak istendiğinde sunucudan aynı önceden tanımlanmış içeriği döndüren bir sitedir. Örneğin, bir ürün hakkında bir sayfanız varsa */static/my-product1.html*, bu aynı sayfa her kullanıcıya gösterilecektir. Sitenize benzer başka bir ürün eklerseniz, başka bir sayfa (örneğin, *my-product2.html*) eklemeniz gerekecektir ve bu böyle devam eder. Bu durum gerçekten verimsiz hale gelebilir - binlerce ürün sayfasına ulaştığınızda ne olur? Her sayfada birçok kodu tekrarlarsınız (temel sayfa şablonu, yapısı vb.) ve sayfa yapısında herhangi bir şeyi değiştirmek isterseniz - örneğin yeni bir "ilgili ürünler" bölümü eklemek gibi - her sayfayı ayrı ayrı değiştirmeniz gerekir.

**Not:** Statik siteler, az sayıda sayfanız olduğunda ve her kullanıcıya aynı içeriği göndermek istediğinizde mükemmeldir. Ancak sayfa sayısı arttıkça bakım maliyetleri önemli ölçüde artabilir.

Son yazımızda incelediğimiz statik site mimarisi diyagramına tekrar bakarak bunun nasıl çalıştığını özetleyelim.

![Test](./assets/06-print.png)

Kullanıcı bir sayfaya gitmek istediğinde, tarayıcı *GET* HTML sayfasının URL'sini belirten bir HTTP isteği gönderir. Sunucu, istenen belgeyi dosya sisteminden alır ve belgeyi ve bir **[HTTP Yanıt durum kodunu](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)** ( *200 OK* başarıyı gösterir) içeren bir HTTP yanıtı döndürür. Sunucu farklı bir durum kodu döndürebilir; örneğin, *404 Not Found* dosya sunucuda mevcut değilse veya *301 Moved Permanently* dosya mevcut ancak farklı bir konuma yönlendirilmişse.

Statik bir sitenin sunucusu yalnızca GET isteklerini işlemek zorundadır, çünkü sunucu değiştirilebilir herhangi bir veri depolamaz. Ayrıca, HTTP İstek verilerine (örneğin, URL parametreleri veya çerezler) göre yanıtlarını değiştirmez.

Statik sitelerin nasıl çalıştığını anlamak, sunucu tarafı programlamayı öğrenirken yine de faydalıdır, çünkü dinamik siteler statik dosyalara (CSS, JavaScript, statik resimler vb.) yönelik istekleri tamamen aynı şekilde işler.

**Dinamik siteler**
Dinamik bir site , belirli bir URL isteğine ve verilere göre içerik üretebilen ve döndürebilen (her zaman belirli bir URL için aynı önceden tanımlanmış dosyayı döndürmek yerine) bir sitedir. Bir ürün sitesi örneğini ele alırsak, sunucu ürün "verilerini" ayrı HTML dosyaları yerine bir veritabanında saklar. *GET* Bir ürün için HTTP isteği aldığında, sunucu ürün kimliğini belirler, verileri veritabanından alır ve ardından verileri bir HTML şablonuna ekleyerek yanıt için HTML sayfasını oluşturur. Bu, statik bir siteye göre önemli avantajlara sahiptir:

Veritabanı kullanımı, ürün bilgilerinin verimli bir şekilde, kolayca genişletilebilir, değiştirilebilir ve aranabilir bir biçimde saklanmasını sağlar.

HTML şablonlarını kullanmak, HTML yapısını değiştirmeyi çok kolaylaştırır çünkü bu işlem yalnızca tek bir yerde, tek bir şablonda yapılmalıdır, potansiyel olarak binlerce statik sayfada değil.

**Dinamik bir isteğin anatomisi**
Bu bölüm, önceki yazımızda ele aldığımız konuları çok daha detaylı bir şekilde ele alarak, "dinamik" HTTP istek ve yanıt döngüsünün adım adım bir özetini sunmaktadır. "Gerçekçi kalmak" için, bir antrenörün HTML formunda takım adını ve takım boyutunu seçip bir sonraki maç için önerilen "en iyi kadroyu" alabileceği bir spor takımı menajerlik web sitesi örneğini kullanacağız.

Aşağıdaki diyagram, "takım koçu" web sitesinin ana unsurlarını ve koçun "en iyi takım" listesine eriştiğinde izlenecek işlem sırasını gösteren numaralı etiketleri göstermektedir. Siteyi dinamik kılan unsurlar Web Uygulaması (HTTP isteklerini işleyen ve HTTP yanıtlarını döndüren sunucu tarafı koduna bu şekilde atıfta bulunacağız), oyuncular, takımlar, koçlar ve aralarındaki ilişkiler hakkında bilgi içeren Veritabanı ve HTML Şablonlarıdır .

![Test](./assets/07-print.png)

Antrenör, takım adı ve oyuncu sayısını içeren formu gönderdikten sonra, işlem sırası şu şekildedir:

1\.Web tarayıcısı, kaynak için temel URL'yi ( ) kullanarak ve takım ve oyuncu numarasını URL parametreleri (örneğin, ) veya URL kalıbının bir parçası (örneğin, ) olarak kodlayarak *GET* sunucuya bir HTTP isteği oluşturur. İstek yalnızca veri getirdiği (veriyi değiştirmediği) için bir istek kullanılır.*/best/best?team=my_team_name&show=11/best/my_team_name/11/GET*
2\.Web sunucusu isteğin "dinamik" olduğunu algılar ve işlenmesi için web uygulamasına iletir (web sunucusu, yapılandırmasında tanımlanan kalıp eşleştirme kurallarına göre farklı URL'leri nasıl ele alacağına karar verir).
3\.Web uygulaması, isteğin amacının URL'ye ( ) göre "en iyi takım listesini" almak olduğunu belirler */best/* ve URL'den gerekli takım adını ve oyuncu sayısını bulur. Ardından web uygulaması, veritabanından gerekli bilgileri alır (hangi oyuncuların "en iyi" olduğunu tanımlamak için ek "dahili" parametreler kullanarak ve muhtemelen istemci tarafındaki bir çerezden oturum açmış koçun kimliğini de alarak).
4\.Web uygulaması, veritabanından aldığı verileri bir HTML şablonunun içindeki yer tutuculara yerleştirerek dinamik olarak bir HTML sayfası oluşturur.
5\.Web uygulaması, oluşturulan HTML'yi ( web sunucusu aracılığıyla ) 200 ("başarılı") HTTP durum koduyla birlikte web tarayıcısına döndürür. HTML'nin döndürülmesini engelleyen bir şey olursa, web uygulaması başka bir kod döndürür; örneğin, ekibin mevcut olmadığını belirtmek için "404" kodu.
6\.Ardından web tarayıcısı, döndürülen HTML'yi işlemeye başlayacak ve referans verdiği diğer CSS veya JavaScript dosyalarını almak için ayrı istekler gönderecektir (7. adıma bakın).
7\.Web sunucusu, statik dosyaları dosya sisteminden yükler ve doğrudan tarayıcıya geri gönderir (doğru dosya işleme, yapılandırma kurallarına ve URL kalıbı eşleştirmesine dayanır).

Veritabanındaki bir kaydı güncelleme işlemi de benzer şekilde ele alınır; ancak herhangi bir veritabanı güncellemesinde olduğu gibi, tarayıcıdan gelen HTTP isteği bir *POST* istek olarak kodlanmalıdır.

**Başka işler yapmak**
Bir web uygulamasının görevi HTTP isteklerini almak ve HTTP yanıtları döndürmektir. Veritabanıyla etkileşim kurarak bilgi almak veya güncellemek çok yaygın görevler olsa da, kod aynı anda başka şeyler de yapabilir veya veritabanıyla hiç etkileşim kurmayabilir.

Bir web uygulamasının gerçekleştirebileceği ek görevlere iyi bir örnek, kullanıcılara siteye kayıtlarını onaylamak için e-posta göndermektir. Site ayrıca günlük kaydı tutma veya diğer işlemleri de gerçekleştirebilir.

**HTML dışında bir şey döndürmek**
Sunucu tarafındaki web sitesi kodu, yanıtta HTML parçacıkları/dosyaları döndürmek zorunda değildir. Bunun yerine, dinamik olarak başka dosya türleri (metin, PDF, CSV vb.) veya hatta veri (JSON, XML vb.) oluşturabilir ve döndürebilir.

**Web çerçeveleri, sunucu tarafı web programlamayı basitleştirir.**
Sunucu tarafı web çerçeveleri, yukarıda açıklanan işlemleri gerçekleştirmek için kod yazmayı çok daha kolay hale getirir.

Yaptıkları en önemli işlemlerden biri, farklı kaynaklar/sayfalar için URL'leri belirli işleyici fonksiyonlara eşlemek için basit mekanizmalar sağlamaktır. Bu, her kaynak türüyle ilişkili kodu ayrı tutmayı kolaylaştırır. Ayrıca bakım açısından da faydaları vardır, çünkü belirli bir özelliği sunmak için kullanılan URL'yi işleyici fonksiyonu değiştirmek zorunda kalmadan tek bir yerden değiştirebilirsiniz.

Örneğin, iki URL kalıbını iki görünüm fonksiyonuna eşleyen aşağıdaki Django (Python) kodunu ele alalım. İlk kalıp, kaynak URL'si olan bir HTTP isteğinin modüldeki adlı bir fonksiyona iletilmesini sağlar . */best* Bunun yerine, kalıbı olan bir istek görünüm fonksiyonuna iletilir .*index()views/best/juniorjunior()*

```PYTHON
# file: best/urls.py
#

from django.conf.urls import url

from . import views

urlpatterns = [
    # example: /best/
    url(r'^$', views.index),
    # example: /best/junior/
    url(r'^junior/$', views.junior),
]
```

**Not:** Fonksiyonlardaki ilk parametreler *url()* biraz garip görünebilir (örneğin, *r'^junior/$'*), çünkü "düzenli ifadeler" (RegEx veya RE) adı verilen bir kalıp eşleştirme tekniği kullanırlar. Bu noktada düzenli ifadelerin nasıl çalıştığını bilmenize gerek yok; sadece URL'deki kalıpları (yukarıdaki sabit kodlanmış değerler yerine) eşleştirmemize ve bunları görünüm fonksiyonlarımızda parametre olarak kullanmamıza olanak sağladıklarını bilmeniz yeterlidir. Örneğin, çok basit bir RegEx, "tek bir büyük harf ve ardından 4 ila 7 küçük harf arasında eşleşme" diyebilir.

Web çerçevesi, bir görünüm fonksiyonunun veritabanından bilgi çekmesini de kolaylaştırır. Verilerimizin yapısı, temel veritabanında saklanacak alanları tanımlayan Python sınıfları olan modellerde tanımlanır. " Team_type " alanına sahip "Team " adlı bir modelimiz varsa , belirli bir türe sahip tüm takımları geri almak için basit bir sorgu sözdizimi kullanabiliriz.

Aşağıdaki örnek, tam olarak (büyük/küçük harf duyarlı) "junior" olan tüm takımların listesini alır *team_type—* biçime dikkat edin: saha adı ( *team_type*) ardından çift alt çizgi ve daha sonra kullanılacak maç türü (bu durumda *exact*). Birçok başka maç türü de vardır ve bunları birbirine bağlayabiliriz. Ayrıca döndürülen sonuçların sırasını ve sayısını da kontrol edebiliriz.

```PYTHON
#best/views.py

from django.shortcuts import render

from .models import Team

def junior(request):
    list_teams = Team.objects.filter(team_type__exact="junior")
    context = {'list': list_teams}
    return render(request, 'best/index.html', context)
```
*junior()* Fonksiyon, genç takımların listesini aldıktan sonra , *render()* orijinal listeyi *HttpRequest*, bir HTML şablonunu ve şablona dahil edilecek bilgileri tanımlayan bir "bağlam" nesnesini geçirerek fonksiyonu çağırır. Bu *render()* fonksiyon, bir bağlam ve bir HTML şablonu kullanarak HTML üreten ve bunu bir nesne olarak döndüren kolaylık sağlayan bir fonksiyondur *HttpResponse.*


## Sunucu tarafı web çerçeveleri
Önceki makalede, sunucu tarafı web uygulamasının web tarayıcı isteklerine yanıt vermek için neler yapması gerektiği açıklanmıştı. Bu makalede ise web çerçevelerinin bu görevleri nasıl basitleştirebileceği ve ilk sunucu tarafı web uygulamanız için doğru çerçeveyi seçmenize nasıl yardımcı olabileceği açıklanmaktadır.

**Genel Bakış**
Sunucu tarafı web çerçeveleri (diğer adıyla "web uygulama çerçeveleri"), web uygulamalarının yazılmasını, bakımını ve ölçeklendirilmesini kolaylaştıran yazılım çerçeveleridir. URL'leri uygun işleyicilere yönlendirme, veritabanlarıyla etkileşim kurma, oturumları ve kullanıcı yetkilendirmesini destekleme, çıktıyı biçimlendirme (örneğin HTML, JSON, XML) ve web saldırılarına karşı güvenliği artırma gibi yaygın web geliştirme görevlerini basitleştiren araçlar ve kütüphaneler sağlarlar.

**Bir web çerçevesi sizin için neler yapabilir?**
Web çerçeveleri, yaygın web geliştirme işlemlerini basitleştirmek için araçlar ve kütüphaneler sağlar. Sunucu tarafı bir web çerçevesi kullanmak zorunda değilsiniz , ancak şiddetle tavsiye edilir; hayatınızı çok daha kolaylaştıracaktır.

**HTTP istekleri ve yanıtlarıyla doğrudan çalışın.**
Son yazımızda da gördüğümüz gibi, web sunucuları ve tarayıcılar HTTP protokolü aracılığıyla iletişim kurar; sunucular tarayıcıdan gelen HTTP isteklerini bekler ve ardından HTTP yanıtlarında bilgi döndürür. Web çerçeveleri, bu istek ve yanıtlarla çalışacak sunucu tarafı kodunu üretecek basitleştirilmiş bir sözdizimi yazmanıza olanak tanır. Bu, daha düşük seviyeli ağ temel öğeleri yerine daha kolay, daha üst düzey kodla etkileşim kurarak daha kolay bir işe sahip olacağınız anlamına gelir.

Aşağıdaki örnek, bunun Django (Python) web çerçevesinde nasıl çalıştığını göstermektedir. Her "görünüm" fonksiyonu (bir istek işleyici), istek bilgilerini içeren bir nesne alır ve biçimlendirilmiş çıktıyı (bu durumda bir dize) içeren **HttpRequest** bir nesne döndürmesi gerekir .**HttpResponse**

```PYTHON
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```
**İstekleri uygun işleyiciye yönlendirin.**
Çoğu site, farklı URL'ler aracılığıyla erişilebilen çeşitli kaynaklar sunar. Bunların hepsini tek bir fonksiyonda yönetmek zor olacağından, web çerçeveleri URL kalıplarını belirli işleyici fonksiyonlara eşlemek için basit mekanizmalar sağlar. Bu yaklaşımın bakım açısından da avantajları vardır, çünkü altta yatan kodu değiştirmek zorunda kalmadan belirli bir özelliği sunmak için kullanılan URL'yi değiştirebilirsiniz.

Farklı çerçeveler, eşleme için farklı mekanizmalar kullanır. Örneğin, Flask (Python) web çerçevesi, bir dekoratör kullanarak görünüm fonksiyonlarına rotalar ekler.

```PYTHON
@app.route("/")
def hello():
    return "Hello World!"
```
Django, geliştiricilerden bir URL kalıbı ile bir görünüm fonksiyonu arasında URL eşlemelerinin bir listesini tanımlamalarını bekler.

```PYTHON
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```
**İstek içindeki verilere erişimi kolaylaştırın.**
HTTP isteklerinde veriler çeşitli şekillerde kodlanabilir. *GET* Sunucudan dosya veya veri almak için yapılan bir HTTP isteği, gerekli verileri URL parametrelerinde veya URL yapısında kodlayabilir. *POST* Sunucudaki bir kaynağı güncellemek için yapılan bir HTTP isteği ise güncelleme bilgilerini isteğin gövdesinde "POST verisi" olarak içerecektir. HTTP isteği ayrıca, istemci tarafındaki bir çerezde mevcut oturum veya kullanıcı hakkında bilgi de içerebilir.

Web çerçeveleri, bu bilgilere erişmek için programlama diline uygun mekanizmalar sağlar. Örneğin, *HttpRequest* Django'nun her görünüm fonksiyonuna ilettiği nesne, hedef URL'ye, istek türüne (örneğin, HTTP GET) *GET* veya *POST* parametrelere, çerez ve oturum verilerine vb. erişmek için yöntemler ve özellikler içerir. Django ayrıca, URL eşleyicisinde "yakalama kalıpları" tanımlayarak URL yapısında kodlanmış bilgileri de iletebilir (yukarıdaki bölümdeki son kod parçasına bakın).

**Veritabanı erişimini soyutlayın ve basitleştirin.**
Web siteleri, hem kullanıcılarla paylaşılacak bilgileri hem de kullanıcılar hakkında bilgileri depolamak için veritabanları kullanır. Web çerçeveleri genellikle veritabanı okuma, yazma, sorgulama ve silme işlemlerini soyutlayan bir veritabanı katmanı sağlar. Bu soyutlama katmanına Nesne-İlişkisel Eşleyici (ORM) denir.

Bir ORM kullanmanın iki avantajı vardır:

- Veritabanını kullanan kodu değiştirmeye gerek kalmadan, temel veritabanını değiştirebilirsiniz. Bu, geliştiricilerin kullanım amaçlarına bağlı olarak farklı veritabanlarının özelliklerine göre optimizasyon yapmalarını sağlar.
- Verilerin temel doğrulaması, çerçeve içerisinde uygulanabilir. Bu, verilerin doğru veritabanı alanında saklandığını, doğru formatta (örneğin, e-posta adresi) olduğunu ve herhangi bir şekilde kötü amaçlı olmadığını (hacker'lar veritabanı kayıtlarını silmek gibi kötü şeyler yapmak için belirli kod kalıplarını kullanabilir) kontrol etmeyi daha kolay ve güvenli hale getirir.

Örneğin, Django web çerçevesi bir ORM sağlar ve bir kaydın yapısını tanımlamak için kullanılan nesneye model olarak atıfta bulunur . Model, saklanacak alan türlerini belirtir ; bu da hangi bilgilerin saklanabileceği konusunda alan düzeyinde doğrulama sağlayabilir (örneğin, bir e-posta alanı yalnızca geçerli e-posta adreslerine izin verir). Alan tanımları ayrıca maksimum boyutlarını, varsayılan değerlerini, seçim listesi seçeneklerini, dokümantasyon için yardım metnini, formlar için etiket metnini vb. de belirtebilir. Model, altta yatan veritabanı hakkında herhangi bir bilgi vermez, çünkü bu, kodumuzdan ayrı olarak değiştirilebilen bir yapılandırma ayarıdır.

Aşağıdaki ilk kod parçası, bir *Team* nesne için çok basit bir Django modelini göstermektedir. Bu model, takım adını ve takım seviyesini karakter alanları olarak saklar ve her kayıt için saklanacak maksimum karakter sayısını belirtir. Bu *team_level* bir seçim alanı olduğundan, görüntülenecek seçimler ile saklanacak veriler arasında bir eşleme ve varsayılan bir değer de sağlıyoruz.

```PYTHON
#best/models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        # List our other teams
    )
    team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')
```

Django modeli, veritabanında arama yapmak için basit bir sorgu API'si sunar. Bu API, farklı kriterler (örneğin, tam eşleşme, büyük/küçük harf duyarsız, büyüktür vb.) kullanarak aynı anda birden fazla alanı eşleştirebilir ve karmaşık ifadeleri destekleyebilir (örneğin, takım adı "Fr" ile başlayan veya "al" ile biten U11 takımlarını arayabilirsiniz).

İkinci kod parçası, tüm U09 takımlarımızı görüntülemek için bir görünüm fonksiyonu (kaynak işleyici) göstermektedir. Bu durumda, alanın tam olarak 'U09' metnine sahip olduğu tüm kayıtları filtrelemek istediğimizi belirtiyoruz (aşağıda bu kriterin , alan adı ve eşleşme türü çift alt çizgiyle ayrılmış şekilde fonksiyona nasıl argüman olarak *team_level* iletildiğine dikkat edin : *team_level__exact ).filter()*

```PYTHON
#best/views.py

from django.shortcuts import render
from .models import Team

def youngest(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, 'best/index.html', context)
```

**Verilerin işlenmesi**
Web çerçeveleri genellikle şablon sistemleri sağlar. Bunlar, bir sayfa oluşturulduğunda eklenecek veriler için yer tutucular kullanarak bir çıktı belgesinin yapısını belirlemenize olanak tanır. Şablonlar genellikle HTML oluşturmak için kullanılır, ancak diğer belge türlerini de oluşturabilirler.

**[Web çerçeveleri genellikle, depolanan verilerden JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON)** ve **[XML](https://developer.mozilla.org/en-US/docs/Glossary/XML)** de dahil olmak üzere diğer formatları oluşturmayı kolaylaştıran bir mekanizma sağlar .

Örneğin, Django şablon sistemi, "çift tutamaçlı" bir sözdizimi (örneğin, ) kullanarak değişkenler belirtmenize olanak tanır; *{{ variable_name }}* bu değişkenler, bir sayfa oluşturulduğunda görünüm fonksiyonundan geçirilen değerlerle değiştirilir. Şablon sistemi ayrıca *{% expression %}*, şablonlara geçirilen liste değerlerini yinelemek gibi basit işlemler gerçekleştirmeye olanak tanıyan ifadeler (sözdizimi: ) için de destek sağlar.

**Not:** Birçok başka şablonlama sistemi de benzer bir sözdizimi kullanır, örneğin: Jinja2 (Python), Handlebars (JavaScript), Mustache (JavaScript), vb.

Aşağıdaki kod parçası bunun nasıl çalıştığını gösteriyor. Önceki bölümdeki "en genç takım" örneğine devam edersek, HTML şablonuna *youngest_teams* görünüm tarafından çağrılan bir liste değişkeni aktarılıyor. HTML iskeletinin içinde, önce *youngest_teams* değişkenin var olup olmadığını kontrol eden ve ardından bir döngü içinde yineleyen bir ifade bulunuyor *for*. Her yinelemede şablon, takımın *team_name* değerini bir liste öğesinde görüntülüyor.

```DJANGO
#best/templates/best/index.html

<!doctype html>
<html lang="en">
  <body>
    {% if youngest_teams %}
      <ul>
        {% for team in youngest_teams %}
          <li>{{ team.team_name }}</li>
        {% endfor %}
      </ul>
    {% else %}
      <p>No teams are available.</p>
    {% endif %}
  </body>
</html>
```

**Bir web çerçevesi nasıl seçilir?**
Kullanmak isteyebileceğiniz hemen her programlama dili için çok sayıda web çerçevesi mevcuttur. Bu kadar çok seçenek varken, yeni web uygulamanız için en iyi başlangıç ​​noktasını hangi çerçevenin sağladığını belirlemek zorlaşabilir.

Kararınızı etkileyebilecek faktörlerden bazıları şunlardır:

- *Öğrenme çabası:* Bir web çerçevesini öğrenme çabası, temel programlama diline ne kadar aşina olduğunuza, API'sinin tutarlılığına, dokümantasyonunun kalitesine ve topluluğunun büyüklüğüne ve etkinliğine bağlıdır. Eğer hiç programlama deneyiminiz yoksa Django'yu düşünün (yukarıdaki kriterlere göre öğrenmesi en kolay olanlardan biridir). Eğer belirli bir web çerçevesi veya programlama diliyle önemli deneyime sahip bir geliştirme ekibinin parçasıysanız, o çerçeveye bağlı kalmak mantıklıdır.

- *Verimlilik:* Verimlilik, çerçeveye aşina olduktan sonra ne kadar hızlı yeni özellikler oluşturabileceğinizin bir ölçüsüdür ve hem kod yazma hem de kodu sürdürme çabasını içerir (çünkü eski özellikler bozukken yeni özellikler yazamazsınız). Verimliliği etkileyen faktörlerin çoğu, "Öğrenme Çabası" için olanlara benzerdir (örneğin, dokümantasyon, topluluk, programlama deneyimi vb.). Diğer faktörler şunlardır:

    *Çerçevelerin amacı/kökeni :* Bazı web çerçeveleri başlangıçta belirli türdeki sorunları çözmek için oluşturulmuştur ve benzer kısıtlamalara sahip web uygulamaları oluşturmada daha iyidirler . Örneğin, Django bir gazete web sitesinin geliştirilmesini desteklemek için oluşturulmuştur, bu nedenle bloglar ve yayın içeren diğer siteler için uygundur. Buna karşılık, Flask çok daha hafif bir çerçevedir ve gömülü cihazlarda çalışan web uygulamaları oluşturmak için mükemmeldir.

    *Önyargılı ve önyargısız yaklaşımlar :* Önyargılı bir çerçeve, belirli bir sorunu çözmenin önerilen "en iyi" yollarının olduğu bir çerçevedir. Önyargılı çerçeveler, yaygın sorunları çözmeye çalışırken daha verimli olma eğilimindedir, çünkü sizi doğru yöne yönlendirirler; ancak bazen daha az esnektirler.
     
    *Her şeyi içeren paketler mi yoksa kendiniz mi edinmeniz gerekiyor :* Bazı web çerçeveleri, geliştiricilerinin aklına gelebilecek her sorunu "varsayılan olarak" çözen araçlar/kütüphaneler içerirken, daha hafif çerçeveler web geliştiricilerinin sorunlara çözüm bulmak için ayrı kütüphanelerden seçim yapmasını bekler (Django birincisine örnektir, Flask ise çok hafif bir çerçeveye örnektir). Her şeyi içeren çerçevelerle başlamak genellikle daha kolaydır çünkü zaten ihtiyacınız olan her şeye sahipsiniz ve büyük olasılıkla iyi entegre edilmiş ve iyi belgelenmiştir. Bununla birlikte, daha küçük bir çerçeve ihtiyacınız olan (veya olabilecek) her şeye sahipse, daha kısıtlı ortamlarda çalışabilir ve öğrenilmesi daha kolay ve daha küçük bir alt kümeye sahip olacaktır.

    *Çerçeve tasarımının iyi geliştirme uygulamalarını teşvik edip etmemesi : Örneğin, kodu mantıksal işlevlere ayırmak için **[Model-View-Controller (MVC)](https://developer.mozilla.org/en-US/docs/Glossary/MVC)** mimarisini teşvik eden bir çerçeve, geliştiricilerden hiçbir beklentisi olmayan bir çerçeveye göre daha sürdürülebilir kodla sonuçlanacaktır. Benzer şekilde, çerçeve tasarımı, kodun test edilmesinin ve yeniden kullanılmasının ne kadar kolay olduğu üzerinde büyük bir etkiye sahip olabilir.

- *Çerçeve/programlama dilinin performansı:* Genellikle "hız", seçimde en büyük faktör değildir çünkü Python gibi nispeten yavaş çalışma sürelerine sahip diller bile orta ölçekli, orta düzey donanımlarda çalışan siteler için fazlasıyla "yeterince iyi"dir. Başka bir dilin (örneğin C++ veya JavaScript) algılanan hız avantajları, öğrenme ve bakım maliyetleriyle dengelenebilir.

- *Önbellekleme desteği:* Web siteniz daha başarılı hale geldikçe, kullanıcıların erişimiyle gelen istek sayısıyla başa çıkamadığını fark edebilirsiniz. Bu noktada önbellekleme desteği eklemeyi düşünebilirsiniz. Önbellekleme, bir web yanıtının tamamını veya bir kısmını depolayarak sonraki isteklerde yeniden hesaplanmasına gerek kalmamasını sağlayan bir optimizasyondur. Önbelleğe alınmış bir yanıt döndürmek, baştan hesaplamaktan çok daha hızlıdır. Önbellekleme, kodunuzda veya sunucuda uygulanabilir ( **[ters proxy'ye bakın](https://en.wikipedia.org/wiki/Reverse_proxy)** ). Web çerçeveleri, hangi içeriğin önbelleğe alınabileceğini tanımlamak için farklı destek seviyelerine sahip olacaktır.

- *Ölçeklenebilirlik:* Web siteniz son derece başarılı olduğunda, önbelleklemenin faydalarını tüketecek ve hatta dikey ölçeklemenin (web uygulamanızı daha güçlü donanımlarda çalıştırmanın) sınırlarına ulaşacaksınız. Bu noktada, yatay ölçekleme (sitenizi bir dizi web sunucusu ve veritabanına dağıtarak yükü paylaşma) veya bazı müşterilerinizin sunucunuzdan çok uzakta bulunması nedeniyle "coğrafi" ölçekleme yapmanız gerekebilir. Seçtiğiniz web çerçevesi, sitenizi ölçeklendirmenin ne kadar kolay olacağı konusunda büyük bir fark yaratabilir.

- *Web güvenliği:* Bazı web çerçeveleri, yaygın web saldırılarını ele almak için daha iyi destek sağlar. Örneğin Django, kullanıcı tarafından girilen JavaScript'in çalıştırılamaması için HTML şablonlarındaki tüm kullanıcı girdilerini temizler. Diğer çerçeveler de benzer koruma sağlar, ancak bu her zaman varsayılan olarak etkinleştirilmez.

Lisanslama, çerçeve yazılımının aktif olarak geliştirilmekte olup olmaması gibi birçok başka olası faktör de söz konusudur.


**İyi birkaç web framework'ü?**
Şimdi de birkaç özel sunucu tarafı web çerçevesini ele alalım.

Aşağıda listelenen sunucu tarafı çerçeveleri, bu yazının yazıldığı sırada mevcut olan en popüler çerçevelerden birkaçını temsil etmektedir . Hepsinin üretken olmanız için gereken her şeye sahip olduğunu söyleyebiliriz: açık kaynaklıdırlar, aktif olarak geliştirilmektedirler, dokümantasyon oluşturan ve tartışma forumlarında kullanıcılara yardımcı olan hevesli topluluklara sahiptirler ve çok sayıda yüksek profilli web sitesinde kullanılmaktadırlar. Basit bir internet aramasıyla keşfedebileceğiniz daha birçok harika sunucu tarafı çerçevesi de bulunmaktadır.

*Not:* Açıklamalar (kısmen) çerçeve web sitelerinden alınmıştır!

*Django (Python)*
**[Django](https://www.djangoproject.com/)** , hızlı geliştirmeyi ve temiz, pragmatik tasarımı teşvik eden yüksek seviyeli bir Python web çerçevesidir. Deneyimli geliştiriciler tarafından oluşturulan bu çerçeve, web geliştirmenin zorluklarının çoğunu üstlenerek, tekerleği yeniden icat etmenize gerek kalmadan uygulamanızı yazmaya odaklanmanızı sağlar. Ücretsiz ve açık kaynaklıdır.

Django, "Her şey dahil" felsefesini benimser ve çoğu geliştiricinin yapmak isteyebileceği hemen her şeyi "kutudan çıktığı gibi" sunar. Her şey dahil olduğu için, her şey birlikte çalışır, tutarlı tasarım prensiplerini takip eder ve kapsamlı ve güncel dokümantasyona sahiptir. Ayrıca hızlı, güvenli ve çok ölçeklenebilirdir. Python tabanlı olduğu için Django kodu okunması ve bakımı kolaydır.

Django kullanan popüler siteler (Django ana sayfasından): Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

*Şişe (Python)*
**[Flask](https://flask.palletsprojects.com/en/stable/)**, Python için bir mikro çerçevedir.

Minimalist bir yapıya sahip olmasına rağmen, Flask kutudan çıktığı gibi ciddi web siteleri oluşturabilir. Geliştirme sunucusu ve hata ayıklayıcı içerir ve **[Jinja2](https://github.com/pallets/jinja)** şablonlama, güvenli çerezler, **[birim testleri](https://en.wikipedia.org/wiki/Unit_testing)** ve **[RESTful](https://restapitutorial.com/)** istek yönlendirme desteği sunar. İyi bir dokümantasyona ve aktif bir topluluğa sahiptir.

Flask, özellikle küçük ve kaynak kısıtlı sistemlerde (örneğin, **[Raspberry Pi](https://www.raspberrypi.org/)** üzerinde web sunucusu çalıştırmak , drone kontrol cihazları vb.) web hizmetleri sağlaması gereken geliştiriciler arasında son derece popüler hale geldi.

*Express (Node.js/JavaScript)*
**[Express](https://expressjs.com/)** , **[Node.js](https://nodejs.org/en/)** (Node, JavaScript çalıştırmak için tarayıcı gerektirmeyen bir ortamdır) için hızlı, tarafsız, esnek ve minimalist bir web çerçevesidir . Web ve mobil uygulamalar için sağlam bir özellik seti sunar ve kullanışlı HTTP yardımcı yöntemleri ve **[ara yazılımlar](https://developer.mozilla.org/en-US/docs/Glossary/Middleware)** sağlar .

Express son derece popülerdir; bunun nedenlerinden biri, istemci tarafı JavaScript web programcılarının sunucu tarafı geliştirmeye geçişini kolaylaştırması, diğeri ise kaynak verimliliğidir (temel Node ortamı, her yeni web isteği için ayrı işlemler başlatmak yerine, bir iş parçacığı içinde hafif çoklu görevlendirme kullanır).

Express minimalist bir web çerçevesi olduğu için, kullanmak isteyebileceğiniz her bileşeni içermez (örneğin, veritabanı erişimi ve kullanıcılar ile oturumlar için destek bağımsız kütüphaneler aracılığıyla sağlanır). Birçok mükemmel bağımsız bileşen vardır, ancak bazen belirli bir amaç için hangisinin en iyi olduğunu belirlemek zor olabilir!

**[Feathers](https://feathersjs.com/guides/)** , **[ItemsAPI](https://itemsapi.com/)** , **[KeystoneJS](https://keystonejs.com/)** , **[Kraken](https://krakenjs.com/)** , **[LoopBack](https://loopback.io/)** , **[MEAN](https://github.com/linnovate/mean)** ve **[Sails](https://sailsjs.com/)** dahil olmak üzere birçok popüler sunucu tarafı ve tam yığın çerçevesi (hem sunucu hem de istemci tarafı çerçevelerini içeren) Express tabanlıdır .

Uber, Accenture, IBM gibi birçok tanınmış şirket Express'i kullanıyor.

**Deno (JavaScript)**
**[Deno , Chrome V8](https://deno.com/)** ve **[Rust](https://rust-lang.org/)** üzerine kurulu, basit, modern ve güvenli bir **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** /TypeScript çalışma ortamı ve çerçevesidir .

**[Deno, Rust tabanlı asenkron bir çalışma ortamı olan Tokio](https://tokio.rs/)** tarafından desteklenmektedir ve bu sayede web sayfalarını daha hızlı sunabilmektedir. Ayrıca, istemci tarafında kullanılmak üzere ikili kodun derlenmesini sağlayan **[WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly)** için dahili desteğe sahiptir. Deno, doğal olarak daha iyi güvenlik sağlayan bir mekanizma sunarak **[Node.js'](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework)**deki bazı açıkları kapatmayı amaçlamaktadır .

Deno'nun özellikleri şunlardır:

- Varsayılan olarak güvenlik. **[Deno modülleri](https://docs.deno.com/runtime/fundamentals/security/)**, açıkça izin verilmediği sürece dosya , ağ veya ortam erişimine ilişkin izinleri kısıtlar.
- TypeScript desteği kutudan çıktığı gibi mevcuttur .
- Birinci sınıf bekleme mekanizması.
- Dahili test özelliği ve kod biçimlendirici ( deno fmt)
(JavaScript) Tarayıcı uyumluluğu: Ad alanı (veya bunun için özellik testi) hariç, tamamen JavaScript ile yazılmış Deno programları Deno, herhangi bir modern tarayıcıda doğrudan çalışmalıdır.
- Komut dosyalarının tek bir JavaScript dosyasına paketlenmesi.

Deno, hem istemci hem de sunucu tarafı programlama için JavaScript kullanmanın kolay ancak güçlü bir yolunu sunar.

**Ruby on Rails (Ruby)**
**[Rails](https://rubyonrails.org/)** (genellikle "Ruby on Rails" olarak anılır), Ruby programlama dili için yazılmış bir web çerçevesidir.

Rails, Django'ya çok benzer bir tasarım felsefesini izler. Django gibi, URL yönlendirme, veritabanından veri alma, şablonlardan HTML oluşturma ve verileri **[JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON)** veya **[XML](https://developer.mozilla.org/en-US/docs/Glossary/XML)** olarak biçimlendirme için standart mekanizmalar sağlar . Benzer şekilde, DRY ("kendinizi tekrarlamayın" - mümkünse kodu yalnızca bir kez yazın), MVC (model-view-controller) ve diğer birçok tasarım deseninin kullanımını teşvik eder.

Elbette, belirli tasarım kararları ve dillerin doğası gereği birçok farklılık mevcuttur.

Rails, **[Basecamp](https://basecamp.com/)** , **[GitHub](https://github.com/)** , **[Shopify](https://www.shopify.com/tr)** , **[Airbnb](https://www.airbnb.com.tr/)** , **[Twitch](https://www.twitch.tv/)** , **[SoundCloud](https://soundcloud.com/)** , **[Hulu](https://www.disneyplus.com/tr-tr)** , **[Zendesk](https://www.zendesk.com/)** , **[Square](https://squareup.com/us/en)** gibi yüksek profilli sitelerde kullanılmıştır .

**Laravel (PHP)**
**[Laravel](https://laravel.com/)** , etkileyici ve zarif bir sözdizimine sahip bir web uygulama çerçevesidir. Laravel, çoğu web projesinde kullanılan yaygın görevleri kolaylaştırarak geliştirme sürecindeki zorlukları ortadan kaldırmayı amaçlar. Bu görevler arasında şunlar yer alır:

- **[Basit, hızlı rota belirleme motoru .](https://laravel.com/framework/docs/routing)**
- **[Güçlü bağımlılık enjeksiyonu konteyneri .](https://laravel.com/framework/docs/container)**
- **[Oturum](https://laravel.com/framework/docs/session)** ve **[önbellek](https://laravel.com/framework/docs/cache)** depolaması için birden fazla arka uç .
- Etkileyici, sezgisel **[veritabanı ORM'si .](https://laravel.com/framework/docs/eloquent)**
- Veritabanından bağımsız **[şema geçişleri .](https://laravel.com/framework/docs/migrations)**
- **[Sağlam arka plan işleme .](https://laravel.com/framework/docs/queues)**
- **[Gerçek zamanlı etkinlik yayını .](https://laravel.com/framework/docs/broadcasting)**

Laravel erişilebilir olmasına rağmen güçlüdür ve büyük, sağlam uygulamalar için gerekli araçları sunar.

**ASP.NET**
**[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet)**, Microsoft tarafından modern web uygulamaları ve hizmetleri oluşturmak için geliştirilen açık kaynaklı bir web çerçevesidir. ASP.NET ile HTML, CSS ve JavaScript tabanlı web sitelerini hızla oluşturabilir, milyonlarca kullanıcı tarafından kullanılmak üzere ölçeklendirebilir ve Web API'leri, veri üzerinde formlar veya gerçek zamanlı iletişim gibi daha karmaşık yetenekleri kolayca ekleyebilirsiniz.

**[ASP.NET'i diğerlerinden ayıran özelliklerden biri, programcıların desteklenen herhangi bir .NET dili (C#, Visual Basic, vb.) kullanarak ASP.NET kodu yazmasına olanak tanıyan Ortak Dil Çalışma Ortamı (CLR) üzerine kurulu olmasıdır .](https://en.wikipedia.org/wiki/Common_Language_Runtime)** Birçok Microsoft ürünü gibi, mükemmel araçlardan (çoğu zaman ücretsiz), aktif bir geliştirici topluluğundan ve iyi yazılmış dokümantasyondan faydalanmaktadır.

ASP.NET, Microsoft, Xbox.com, Stack Overflow ve daha birçok şirket tarafından kullanılmaktadır.

**Mojolicious (Perl)**
**[Mojolicious](https://mojolicious.org/)**, Perl programlama dili için yeni nesil bir web çerçevesidir.

İnternetin ilk dönemlerinde birçok kişi, **[CGI](https://metacpan.org/pod/CGI)** adlı harika bir Perl kütüphanesi sayesinde Perl öğrendi . Dil hakkında fazla bilgi sahibi olmadan başlamak için yeterince basit ve sizi uzun süre devam ettirecek kadar güçlüydü. Mojolicious, bu fikri en son teknolojileri kullanarak hayata geçiriyor.

Mojolicious'un sunduğu özelliklerden bazıları şunlardır:

- Tek dosya halindeki prototipleri kolayca iyi yapılandırılmış MVC web uygulamalarına dönüştürmeyi sağlayan gerçek zamanlı bir web çerçevesi.
- RESTful rotalar, eklentiler, komutlar, Perl benzeri şablonlar, içerik anlaşması, oturum yönetimi, form doğrulama, test çerçevesi, statik dosya sunucusu, CGI/ **[PSGI](https://plackperl.org/)** tespiti ve birinci sınıf Unicode desteği.
- IPv6, TLS, SNI, IDNA, HTTP/SOCKS5 proxy, UNIX alan soketi, Comet (uzun yoklama), bağlantıyı canlı tutma, bağlantı havuzlama, zaman aşımı, çerez, çok parçalı ve gzip sıkıştırma desteği içeren tam kapsamlı bir HTTP ve WebSocket istemci/sunucu uygulaması.
- CSS seçici desteğine sahip JSON ve HTML/XML ayrıştırıcıları ve oluşturucuları.
- Son derece temiz, taşınabilir ve nesne yönelimli, gizli sihirbazlık içermeyen saf Perl API'si.
- Yılların deneyimine dayanan, yepyeni, ücretsiz ve açık kaynaklı kod.

**Spring Boot (Java)**
**[Spring Boot](https://spring.io/projects/spring-boot)**, **[Spring](https://spring.io/)** tarafından sağlanan birçok projeden biridir . **[Java](https://www.java.com/tr/)** kullanarak sunucu tarafı web geliştirme için iyi bir başlangıç ​​noktasıdır .

Java tabanlı tek çerçeve olmasa da, bağımsız, üretim kalitesinde Spring tabanlı uygulamalar oluşturmak ve bunları "sadece çalıştırmak" kolaydır. Spring platformuna ve üçüncü taraf kütüphanelerine ilişkin belirli bir bakış açısı sunar, ancak minimum zahmet ve yapılandırmayla başlamanıza olanak tanır.

Küçük sorunlar için kullanılabilir ancak asıl gücü bulut yaklaşımını kullanan daha büyük ölçekli uygulamalar geliştirmekte yatmaktadır. Genellikle birden fazla uygulama paralel olarak çalışır ve birbirleriyle iletişim kurar; bazıları kullanıcı etkileşimini sağlarken diğerleri arka uç işlerini (örneğin, veritabanlarına veya diğer hizmetlere erişim) yapar. Yük dengeleyiciler, yedeklilik ve güvenilirlik sağlamaya veya yanıt verme hızını sağlamak için kullanıcı isteklerinin coğrafi konumlandırılmasına olanak tanır.


## Web sitesi güvenliği
Web sitesi güvenliği, bir sitenin oluşturulması ve işletilmesinin tüm yönlerinde dikkatli olmayı gerektirir. Bu giriş niteliğindeki makale, web uygulamanızı en yaygın tehditlere karşı korumak için atabileceğiniz ilk önemli adımları anlamanıza yardımcı olur.

**Web sitesi güvenliği nedir?**
İnternet tehlikeli bir yer! Sıklıkla, hizmet reddi saldırıları nedeniyle web sitelerinin erişilemez hale geldiğini veya ana sayfalarında değiştirilmiş (ve genellikle zararlı) bilgiler gösterdiğini duyuyoruz. Diğer yüksek profilli vakalarda ise milyonlarca şifre, e-posta adresi ve kredi kartı bilgisi kamuoyuna sızdırılarak web sitesi kullanıcıları hem kişisel utanç hem de mali riskle karşı karşıya kaldı.

Web sitesi güvenliğinin amacı, bu (veya herhangi) türdeki saldırıları önlemektir. Web sitesi güvenliğinin daha resmi tanımı ise, web sitelerini yetkisiz erişim, kullanım, değiştirme, tahrip etme veya kesintiye uğratmadan koruma eylemi/uygulamasıdır .

Etkili web sitesi güvenliği, web sitesinin tamamında tasarım çabası gerektirir: web uygulamanızda, web sunucusunun yapılandırmasında, parola oluşturma ve yenileme politikalarınızda ve istemci tarafı kodunda. Tüm bunlar çok ürkütücü görünse de, iyi haber şu ki, sunucu tarafı bir web çerçevesi kullanıyorsanız, bu çerçeve neredeyse kesinlikle daha yaygın saldırılara karşı sağlam ve iyi düşünülmüş savunma mekanizmalarını "varsayılan olarak" etkinleştirecektir. Diğer saldırılar, örneğin HTTPS'yi etkinleştirerek web sunucusu yapılandırmanız aracılığıyla azaltılabilir. Son olarak, yaptığınız bariz hataları bulmanıza yardımcı olabilecek herkese açık güvenlik açığı tarama araçları mevcuttur.

Bu makalenin geri kalanında, yaygın tehditlerden bazıları ve sitenizi korumak için atabileceğiniz basit adımlar hakkında daha fazla ayrıntı bulacaksınız.

**Not:** Bu, web sitesi güvenliği hakkında düşünmeye başlamanıza yardımcı olmak için tasarlanmış giriş niteliğinde bir konudur, ancak kapsamlı değildir.

**Web sitesi güvenliği tehditleri**
Bu bölümde, en yaygın web sitesi tehditlerinden sadece birkaçı ve bunların nasıl önlendiği listelenmiştir. Okurken, tehditlerin en başarılı olduğu durumların, web uygulamasının tarayıcıdan gelen verilere ya güvendiği ya da bu konuda yeterince paranoyak olmadığı durumlar olduğunu unutmayın.

**Siteler Arası Komut Dosyası Çalıştırma (XSS)**
XSS, saldırganın istemci tarafı komut dosyalarını web sitesi üzerinden diğer kullanıcıların tarayıcılarına enjekte etmesine olanak tanıyan bir saldırı sınıfını tanımlamak için kullanılan bir terimdir. Enjekte edilen kod siteden tarayıcıya geldiği için güvenilir kabul edilir ve kullanıcının site yetkilendirme çerezini saldırgana göndermek gibi işlemler yapabilir. Saldırgan çerezi ele geçirdiğinde, kullanıcının kendisiymiş gibi siteye giriş yapabilir ve kullanıcının yapabileceği her şeyi yapabilir; örneğin kredi kartı bilgilerine erişebilir, iletişim bilgilerini görebilir veya şifrelerini değiştirebilir.

**Not:** XSS güvenlik açıkları, tarihsel olarak diğer tüm güvenlik tehditlerinden daha yaygın olmuştur.

XSS güvenlik açıkları, sitenin enjekte edilen komut dosyalarını tarayıcıya nasıl geri döndürdüğüne bağlı olarak yansıtmalı ve kalıcı olmak üzere ikiye ayrılır.

- Yansıtılmış XSS güvenlik açığı, sunucuya iletilen kullanıcı içeriğinin tarayıcıda görüntülenmek üzere anında ve değiştirilmeden geri döndürülmesi durumunda ortaya çıkar . Orijinal kullanıcı içeriğindeki tüm komut dosyaları, yeni sayfa yüklendiğinde çalıştırılır. Örneğin, arama terimlerinin URL parametreleri olarak kodlandığı ve bu terimlerin sonuçlarla birlikte görüntülendiği bir site arama işlevini düşünün. Bir saldırgan, parametre olarak kötü amaçlı bir komut dosyası içeren bir arama bağlantısı (örneğin, *https://developer.mozilla.org?q=beer<script%20src="http://example.com/tricky.js">&lt;/script&gt;*) oluşturabilir ve bunu başka bir kullanıcıya e-posta ile gönderebilir. Hedef kullanıcı bu "ilginç bağlantıya" tıklarsa, arama sonuçları görüntülendiğinde komut dosyası çalıştırılır. Daha önce de belirtildiği gibi, bu, saldırgana hedef kullanıcı olarak siteye girmek, potansiyel olarak kullanıcı adına satın alma işlemleri yapmak veya iletişim bilgilerini paylaşmak için ihtiyaç duyduğu tüm bilgileri verir.
- Kalıcı bir XSS güvenlik açığı, kötü amaçlı bir komut dosyasının web sitesinde saklanması ve daha sonra diğer kullanıcıların farkında olmadan çalıştırması için değiştirilmeden yeniden görüntülenmesi durumunda ortaya çıkar. Örneğin, değiştirilmemiş HTML içeren yorumları kabul eden bir tartışma forumu, bir saldırganın kötü amaçlı komut dosyasını saklayabilir. Yorumlar görüntülendiğinde, komut dosyası yürütülür ve saldırgana kullanıcının hesabına erişmek için gereken bilgileri gönderebilir. Bu tür saldırılar son derece yaygın ve güçlüdür, çünkü saldırganın kurbanlarla doğrudan bir etkileşimi bile olmayabilir.

*POST*XSS güvenlik açıklarının en yaygın kaynağı veri veya isteklerden gelen veriler olsa da GET, tarayıcıdan gelen herhangi bir veri potansiyel olarak savunmasızdır; örneğin tarayıcı tarafından işlenen çerez verileri veya yüklenen ve görüntülenen kullanıcı dosyaları.

XSS güvenlik açıklarına karşı en iyi savunma, kodu çalıştırma talimatları içerebilecek her türlü işaretlemeyi kaldırmak veya devre dışı bırakmaktır. HTML için bu, &lt;p&gt;, &lt;h1&gt;, &lt;h2&gt; ve &lt;script&gt;&lt;h3&gt; gibi öğeleri içerir .&lt;object&gt;&lt;embed&gt;&lt;link&gt;

Kullanıcı verilerinin, komut dosyaları çalıştırmak veya sunucu kodunun yürütülmesini başka şekilde etkilemek için kullanılamayacak şekilde değiştirilmesi işlemine girdi temizleme denir. Birçok web çerçevesi, varsayılan olarak HTML formlarından gelen kullanıcı girdilerini otomatik olarak temizler.

*SQL enjeksiyonu*
SQL enjeksiyon güvenlik açıkları, kötü niyetli kullanıcıların bir veritabanında rastgele SQL kodu çalıştırmasına olanak tanıyarak, kullanıcının izinlerinden bağımsız olarak verilere erişilmesine, değiştirilmesine veya silinmesine izin verir. Başarılı bir enjeksiyon saldırısı, kimlikleri taklit edebilir, yönetici haklarına sahip yeni kimlikler oluşturabilir, sunucudaki tüm verilere erişebilir veya verileri kullanılamaz hale getirmek için yok edebilir/değiştirebilir.

SQL enjeksiyon türleri arasında hata tabanlı SQL enjeksiyonu, mantıksal hatalara dayalı SQL enjeksiyonu ve zamana dayalı SQL enjeksiyonu bulunur.

Bu güvenlik açığı, temel SQL sorgusuna iletilen kullanıcı girdisinin sorgunun anlamını değiştirebilmesi durumunda ortaya çıkar. Örneğin, aşağıdaki kod, *userName* bir HTML formundan sağlanan belirli bir ada ( ) sahip tüm kullanıcıları listelemeyi amaçlamaktadır:

```PYTHON
statement = "SELECT * FROM users WHERE name = '" + userName + "';"
```

*a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't* Kullanıcı gerçek bir isim belirtirse, ifade beklendiği gibi çalışacaktır. Ancak, kötü niyetli bir kullanıcı, . için belirterek bu SQL ifadesinin davranışını aşağıdaki örnekteki yeni ifadeye tamamen değiştirebilir *userName.*

```SQL
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

Değiştirilen ifade, *users* tabloyu silen ve tablodaki tüm verileri seçen *userinfo* (bu da her kullanıcının bilgilerini ortaya çıkarır) geçerli bir SQL ifadesi oluşturur. Bu, eklenen metnin ilk kısmı *(a';)* orijinal ifadeyi tamamladığı için çalışır.

Bu tür saldırılardan kaçınmak için en iyi uygulama, parametreli sorgular (hazırlanmış ifadeler) kullanmaktır. Bu yaklaşım, kullanıcı girdisinin yürütülebilir SQL yerine bir veri dizisi olarak ele alınmasını sağlar, böylece kullanıcı özel SQL sözdizimi karakterlerini kötüye kullanarak istenmeyen SQL ifadeleri oluşturamaz. Aşağıda bir örnek verilmiştir:

```SQL
SELECT * FROM users WHERE name = ? AND password = ?;
```

Örneğin, yukarıdaki sorguyu Python'da çalıştırırken, aşağıdaki gibi *name* ve değerlerini parametre olarak iletiyoruz.*password*

```PYTHON
cursor.execute("SELECT * FROM users WHERE name = ? AND password = ?", (name, password))
```

Kütüphaneler genellikle geliştirici için SQL enjeksiyonuna karşı koruma sağlayan, iyi soyutlanmış API'ler sunar; örneğin Django'nun modelleri gibi. Doğrudan ham SQL yazmak yerine kapsüllenmiş API'ler kullanarak SQL enjeksiyonundan kaçınabilirsiniz.

**Çapraz Site İstek Sahteciliği (CSRF)**
CSRF saldırıları, kötü niyetli bir kullanıcının, başka bir kullanıcının bilgisi veya izni olmadan, o kullanıcının kimlik bilgilerini kullanarak eylemler gerçekleştirmesine olanak tanır.

Bu tür bir saldırı en iyi bir örnekle açıklanabilir. Josh, belirli bir sitenin, oturum açmış kullanıcıların *POST* hesap adını ve para miktarını içeren bir HTTP isteği kullanarak belirtilen bir hesaba para göndermesine izin verdiğini bilen kötü niyetli bir kullanıcıdır. Josh, banka bilgilerini ve para miktarını gizli alanlar olarak içeren bir form oluşturur ve bunu diğer site kullanıcılarına e-posta ile gönderir ( Gönder düğmesi, "hızlı zengin olma" sitesine bağlantı olarak gizlenmiştir).

Kullanıcı gönder düğmesine tıkladığında, *POST* işlem ayrıntılarını ve tarayıcının siteyle ilişkilendirdiği istemci tarafı çerezlerini içeren bir HTTP isteği sunucuya gönderilir (isteklere ilişkili site çerezlerinin eklenmesi normal bir tarayıcı davranışıdır). Sunucu çerezleri kontrol eder ve kullanıcının oturum açmış olup olmadığını ve işlemi gerçekleştirme iznine sahip olup olmadığını belirlemek için bunları kullanır.

Sonuç olarak, işlem sitesine giriş yapmış olan herhangi bir kullanıcı Gönder düğmesine tıkladığında işlem gerçekleşir. Josh zengin olur.

*Not:* Buradaki püf nokta, Josh'un kullanıcının çerezlerine (veya erişim kimlik bilgilerine) erişmesine gerek olmamasıdır. Kullanıcının tarayıcısı bu bilgiyi saklar ve ilgili sunucuya yapılan tüm isteklere otomatik olarak dahil eder.

Bu tür saldırıları önlemenin bir yolu, sunucunun POSTisteklerin kullanıcıya özel, site tarafından oluşturulmuş bir gizli anahtar içermesini şart koşmasıdır. Gizli anahtar, transferleri gerçekleştirmek için kullanılan web formu gönderilirken sunucu tarafından sağlanır. Bu yaklaşım, Josh'un kendi formunu oluşturmasını engeller, çünkü sunucunun kullanıcı için sağladığı gizli anahtarı bilmesi gerekir. Gizli anahtarı öğrenip belirli bir kullanıcı için bir form oluştursa bile, aynı formu her kullanıcıya saldırmak için kullanamaz.

Web çerçeveleri genellikle bu tür CSRF önleme mekanizmalarını içerir.

**Diğer tehditler**
Diğer yaygın saldırılar/güvenlik açıkları şunlardır:

- **[Tıklama hırsızlığı (Clickjacking ).](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Clickjacking)** Bu saldırıda, kötü niyetli bir kullanıcı, görünür üst düzey bir siteye yönelik tıklamaları ele geçirir ve bunları alttaki gizli bir sayfaya yönlendirir. Bu teknik, örneğin, meşru bir banka sitesini görüntülemek ancak giriş bilgilerini &lt;iframe&gt;saldırgan tarafından kontrol edilen görünmez bir siteye ele geçirmek için kullanılabilir. Tıklama hırsızlığı ayrıca, kullanıcının görünür bir sitedeki bir düğmeye tıklamasını sağlamak için de kullanılabilir, ancak bunu yaparken farkında olmadan tamamen farklı bir düğmeye tıklar. Savunma olarak, siteniz uygun HTTP başlıklarını ayarlayarak başka bir sitedeki bir iframe'e yerleştirilmesini engelleyebilir.

- **[Hizmet Reddi (DoS).](https://developer.mozilla.org/en-US/docs/Glossary/Distributed_Denial_of_Service)** DoS genellikle, meşru kullanıcıların siteye erişimini kesintiye uğratmak için hedef siteye sahte istekler göndererek gerçekleştirilir. İstekler çok sayıda olabilir veya her biri ayrı ayrı büyük miktarda kaynak tüketebilir (örneğin, yavaş okuma veya büyük dosyaların yüklenmesi). DoS savunmaları genellikle "kötü" trafiği tanımlayıp engellerken meşru mesajların geçmesine izin vererek çalışır. Bu savunmalar tipik olarak web sunucusundan önce veya web sunucusunda bulunur (web uygulamasının kendisinin bir parçası değildirler).

- **[Dizin Geçişi (Dosya ve ifşa).](https://en.wikipedia.org/wiki/Path_traversal_attack)** Bu saldırıda, kötü niyetli bir kullanıcı, erişmemesi gereken web sunucusu dosya sistemi bölümlerine erişmeye çalışır. Bu güvenlik açığı, kullanıcının dosya sistemi gezinme karakterleri içeren dosya adları (örneğin, *../../*) geçirebilmesi durumunda ortaya çıkar. Çözüm, girdiyi kullanmadan önce temizlemektir.

- **[Dosya Dahil Etme Saldırısı .](https://en.wikipedia.org/wiki/File_inclusion_vulnerability)** Bu saldırıda, kullanıcı sunucuya iletilen verilerde görüntülenmek veya çalıştırılmak üzere "istenmeyen" bir dosya belirtebilir. Yüklendiğinde, bu dosya web sunucusunda veya istemci tarafında çalıştırılabilir (bu da XSS saldırısına yol açar). Çözüm, girdiyi kullanmadan önce temizlemektir.

- [Komut Enjeksiyonu .](https://community.owasp.org/attacks/Command_Injection)** Komut enjeksiyon saldırıları, kötü niyetli bir kullanıcının ana işletim sisteminde rastgele sistem komutları yürütmesine olanak tanır. Çözüm, sistem çağrılarında kullanılmadan önce kullanıcı girdisini temizlemektir.

**Birkaç önemli mesaj**
Önceki bölümlerde ele alınan güvenlik açıklarının neredeyse tamamı, web uygulaması tarayıcıdan gelen verilere güvendiğinde başarılı olmaktadır. Web sitenizin güvenliğini artırmak için ne yaparsanız yapın, tarayıcıda görüntülenmeden, SQL sorgularında kullanılmadan veya işletim sistemi veya dosya sistemi çağrısına iletilmeden önce kullanıcı kaynaklı tüm verileri temizlemelisiniz.

**Uyarı:** Web sitesi güvenliği hakkında öğrenebileceğiniz en önemli ders, tarayıcıdan gelen verilere asla güvenmemektir . Bu, isteklerin URL parametrelerindeki *GET* veriler, *POST* istekler, HTTP başlıkları ve çerezler ile kullanıcı tarafından yüklenen dosyalar dahil ancak bunlarla sınırlı olmamak üzere tüm verileri kapsar. Gelen tüm verileri her zaman kontrol edin ve temizleyin. Her zaman en kötü senaryoyu varsayın.

Alabileceğiniz diğer somut adımlar şunlardır:

- Daha etkili parola yönetimi kullanın. Güçlü parolaları teşvik edin. Siteniz için iki faktörlü kimlik doğrulamayı düşünün; böylece kullanıcı parolaya ek olarak başka bir kimlik doğrulama kodu da girmelidir (genellikle yalnızca kullanıcının sahip olacağı fiziksel bir donanım aracılığıyla iletilen bir kod, örneğin telefonuna gönderilen bir SMS kodu).
- UWeb sunucunuzu HTTPS ve HTTP Sıkı Taşıma Güvenliği (HSTS) kullanacak şekilde yapılandırın. HTTPS, istemci ve sunucu arasında gönderilen verileri şifreler. Bu, oturum açma kimlik bilgilerinin, çerezlerin, POSTistek verilerinin ve başlık bilgilerinin saldırganlar tarafından kolayca elde edilememesini sağlar.
- En yaygın tehditleri takip edin ve öncelikle en sık karşılaşılan güvenlik açıklarına odaklanın.
- Sitenizde otomatik güvenlik testleri yapmak için güvenlik açığı tarama araçlarını kullanın . Daha sonra, çok başarılı web siteniz , Mozilla'nın burada yaptığı gibi bir hata ödül programı sunarak da hataları bulabilir .
- Yalnızca ihtiyaç duyduğunuz verileri saklayın ve görüntüleyin. Örneğin, kullanıcılarınızın kredi kartı bilgileri gibi hassas bilgileri saklaması gerekiyorsa, kart numarasının yalnızca kullanıcı tarafından tanımlanabilecek kadarını görüntüleyin, ancak bir saldırgan tarafından kopyalanıp başka bir sitede kullanılamayacak kadarını görüntülemeyin. Şu anda en yaygın yöntem, kredi kartı numarasının yalnızca son 4 hanesini görüntülemektir.
- Yazılımı güncel tutun. Çoğu sunucu, bilinen güvenlik açıklarını düzelten veya azaltan düzenli güvenlik güncellemelerine sahiptir. Mümkünse, düzenli otomatik güncellemeler planlayın ve ideal olarak, web sitenizin trafiğinin en düşük olduğu zamanlarda güncellemeleri planlayın. Güncellemeden önce verilerinizi yedeklemek ve sunucunuzda uyumluluk sorunları olmadığından emin olmak için yeni yazılım sürümlerini test etmek en iyisidir.

Web çerçeveleri, en yaygın güvenlik açıklarının çoğunu azaltmaya yardımcı olabilir.


# Django(Python)

**Kaynak:** [Django Web Çerçevesi (Python)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Django)

Django, Python ile yazılmış, son derece popüler ve tam özellikli bir sunucu tarafı web çerçevesidir. Bu modül, Django'nun neden en popüler web sunucu çerçevelerinden biri olduğunu, bir geliştirme ortamının nasıl kurulacağını ve kendi web uygulamalarınızı oluşturmak için nasıl kullanmaya başlayacağınızı gösterir.

## Eğitimler

## Django'ya giriş
Bu ilk Django makalesinde, "Django nedir?" sorusunu yanıtlıyor ve bu web çerçevesini özel kılan özelliklere genel bir bakış sunuyoruz. Bu modülde detaylı olarak ele alamayacağımız bazı gelişmiş işlevler de dahil olmak üzere, temel özellikleri özetleyeceğiz. Ayrıca, Django uygulamasının temel yapı taşlarından bazılarını göstererek, kurulumunu yapıp kullanmaya başlamadan önce neler yapabileceği hakkında bir fikir edinmenizi sağlayacağız.

**Django nedir?**
Django, güvenli ve bakımı kolay web sitelerinin hızlı geliştirilmesini sağlayan yüksek seviyeli bir Python web çerçevesidir. Deneyimli geliştiriciler tarafından oluşturulan Django, web geliştirmenin zorluklarının çoğunu üstlenir, böylece tekerleği yeniden icat etmenize gerek kalmadan uygulamanızı yazmaya odaklanabilirsiniz. Ücretsiz ve açık kaynaklıdır, gelişen ve aktif bir topluluğa, harika bir dokümantasyona ve ücretsiz ve ücretli destek için birçok seçeneğe sahiptir.

Django, aşağıdaki özelliklere sahip yazılımlar yazmanıza yardımcı olur:

*Tamamlamak*
Django, "Her şey dahil" felsefesini benimser ve geliştiricilerin yapmak isteyebileceği hemen her şeyi "kutudan çıkar çıkmaz" sunar. İhtiyaç duyduğunuz her şey tek bir "ürünün" parçası olduğundan, her şey sorunsuz bir şekilde birlikte çalışır, tutarlı tasarım prensiplerini takip eder ve kapsamlı ve **[güncel belgelere](https://docs.djangoproject.com/en/6.1/)** sahiptir .

*Çok yönlü*
Django, içerik yönetim sistemlerinden ve wikilerden sosyal ağlara ve haber sitelerine kadar neredeyse her tür web sitesi oluşturmak için kullanılabilir (ve kullanılmıştır). Herhangi bir istemci tarafı çerçevesiyle çalışabilir ve içeriği neredeyse her biçimde (HTML, RSS beslemeleri, JSON ve XML dahil) sunabilir.

İç yapısı itibariyle, isteyebileceğiniz hemen her işlev için seçenekler sunarken (örneğin, çeşitli popüler veritabanları, şablon motorları vb.), gerektiğinde diğer bileşenleri kullanacak şekilde de genişletilebilir.

*Güvenli*
Django, web sitesini otomatik olarak korumak için "doğru şeyleri yapacak" şekilde tasarlanmış bir çerçeve sağlayarak geliştiricilerin birçok yaygın güvenlik hatasından kaçınmasına yardımcı olur. Örneğin, Django, kullanıcı hesaplarını ve şifrelerini yönetmenin güvenli bir yolunu sunarak, oturum bilgilerinin savunmasız olduğu çerezlere konulması (bunun yerine çerezler yalnızca bir anahtar içerir ve gerçek veriler veritabanında saklanır) veya şifrelerin doğrudan şifre karması yerine saklanması gibi yaygın hatalardan kaçınmayı sağlar.

**[Parola özeti, parolanın kriptografik](https://en.wikipedia.org/wiki/Cryptographic_hash_function)** bir özetleme fonksiyonundan geçirilmesiyle oluşturulan sabit uzunlukta bir değerdir . Django, girilen bir parolanın doğru olup olmadığını, parolayı özetleme fonksiyonundan geçirerek ve çıktıyı saklanan özetleme değeriyle karşılaştırarak kontrol edebilir. Ancak fonksiyonun "tek yönlü" yapısı nedeniyle, saklanan özetleme değeri ele geçirilse bile, saldırganın orijinal parolayı bulması zordur.

Django, SQL enjeksiyonu, siteler arası komut dosyası çalıştırma (XSS), siteler arası istek sahteciliği (CSRF) ve **[clickjacking](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Clickjacking)** gibi birçok güvenlik açığına karşı varsayılan olarak koruma sağlar .

*Ölçeklenebilir*
Django, bileşen tabanlı " paylaşımsız " bir mimari kullanır (mimarinin her parçası diğerlerinden bağımsızdır ve bu nedenle gerektiğinde değiştirilebilir veya güncellenebilir). Farklı parçalar arasında net bir ayrım olması, herhangi bir seviyede donanım ekleyerek artan trafiğe göre ölçeklenebilmesini sağlar: önbellekleme sunucuları, veritabanı sunucuları veya uygulama sunucuları. En yoğun sitelerden bazıları, taleplerini karşılamak için Django'yu başarıyla ölçeklendirmiştir (örneğin, Instagram ve Disqus, bunlardan sadece ikisi).

*Bakımı kolay*
Django kodu, sürdürülebilir ve yeniden kullanılabilir kod oluşturmayı teşvik eden tasarım prensipleri ve kalıpları kullanılarak yazılır. Özellikle, gereksiz tekrarlamayı önlemek ve kod miktarını azaltmak için Kendini Tekrarlama (DRY) prensibini kullanır. Django ayrıca, ilgili işlevselliği yeniden kullanılabilir "uygulamalar" halinde gruplandırmayı ve daha alt düzeyde, ilgili kodu modüller halinde gruplandırmayı (Model Görünüm Denetleyici (MVC) kalıbına benzer şekilde) teşvik eder.

*Taşınabilir*
Django, birçok platformda çalışan Python dilinde yazılmıştır. Bu, belirli bir sunucu platformuna bağlı kalmamanız ve uygulamalarınızı Linux, Windows ve macOS'un birçok farklı sürümünde çalıştırabileceğiniz anlamına gelir. Dahası, Django birçok web barındırma sağlayıcısı tarafından iyi bir şekilde desteklenmektedir ve bu sağlayıcılar genellikle Django sitelerinin barındırılması için özel altyapı ve dokümantasyon sunmaktadır.

**Nereden geldi?**
Django, ilk olarak 2003 ve 2005 yılları arasında gazete web siteleri oluşturmak ve bakımını yapmakla görevli bir web ekibi tarafından geliştirildi. Birçok site oluşturduktan sonra, ekip birçok ortak kod ve tasarım kalıbını ayıklamaya ve yeniden kullanmaya başladı. Bu ortak kod, Temmuz 2005'te "Django" projesi olarak açık kaynaklı hale getirilen genel bir web geliştirme çerçevesine dönüştü.

Django, Eylül 2008'deki ilk kilometre taşı sürümü (1.0) ile 2023 sonlarındaki 5.0 sürümüne kadar sürekli olarak büyümeye ve gelişmeye devam etti. Her sürüm, yeni veritabanı türleri, şablon motorları ve önbellekleme desteğinden, "genel" görünüm fonksiyonları ve sınıflarının eklenmesine (bu da geliştiricilerin bir dizi programlama görevi için yazması gereken kod miktarını azaltır) kadar yeni işlevler ve hata düzeltmeleri ekledi.

Django, günümüzde binlerce kullanıcısı ve katkıda bulunanı olan, gelişen ve iş birliğine dayalı bir açık kaynak projesidir. Kökenini yansıtan bazı özelliklere sahip olsa da, Django her türden web sitesi geliştirebilen çok yönlü bir çerçeveye dönüşmüştür.

**Django ne kadar popüler?**
Sunucu tarafı framework'lerinin popülaritesini ölçmek için kolayca bulunabilen ve kesin bir yöntem yok (ancak her platform için GitHub projelerinin ve Stack Overflow sorularının sayısını saymak gibi mekanizmalar kullanarak popülariteyi tahmin edebilirsiniz). Daha iyi bir soru, Django'nun popüler olmayan platformların sorunlarından kaçınmak için "yeterince popüler" olup olmadığıdır. Gelişmeye devam ediyor mu? İhtiyaç duyduğunuzda yardım alabiliyor musunuz? Django öğrenirseniz ücretli iş bulma fırsatınız var mı?

Django kullanan yüksek profilli sitelerin sayısına, kod tabanına katkıda bulunan kişi sayısına ve hem ücretsiz hem de ücretli destek sağlayan kişi sayısına bakıldığında, evet, Django popüler bir framework!

Django kullanan önde gelen siteler arasında şunlar yer almaktadır: Disqus, Instagram, Knight Vakfı, MacArthur Vakfı, Mozilla, National Geographic, Açık Bilgi Vakfı, Pinterest ve Open Stack.

**Django'nun belirli bir görüşü var mı?**
Web çerçeveleri genellikle kendilerini "fikir sahibi" veya "fikir sahibi olmayan" olarak tanımlarlar.

Önyargılı çerçeveler, belirli bir görevi ele almanın "doğru yolu" hakkında görüşlere sahip olanlardır. Genellikle belirli bir alanda (belirli bir türdeki sorunları çözmede) hızlı gelişmeyi desteklerler çünkü herhangi bir şeyi yapmanın doğru yolu genellikle iyi anlaşılmış ve iyi belgelenmiştir. Bununla birlikte, ana alanlarının dışındaki sorunları çözmede daha az esnek olabilirler ve kullanabilecekleri bileşenler ve yaklaşımlar için daha az seçenek sunma eğilimindedirler.

Buna karşılık, tarafsız çerçeveler, bir amaca ulaşmak için bileşenleri bir araya getirmenin en iyi yolu veya hangi bileşenlerin kullanılacağı konusunda çok daha az kısıtlama getirir. Geliştiricilerin belirli bir görevi tamamlamak için en uygun araçları kullanmasını kolaylaştırırlar, ancak bunun bedeli, bu bileşenleri kendinizin bulması gerektiğidir.

Django "biraz iddialı"dır ve bu nedenle "iki dünyanın da en iyisini" sunar. Çoğu web geliştirme görevini yerine getirmek için bir dizi bileşen ve bunları kullanmanın bir (veya iki) tercih edilen yolunu sağlar. Bununla birlikte, Django'nun ayrıştırılmış mimarisi, genellikle bir dizi farklı seçenek arasından seçim yapabileceğiniz veya istenirse tamamen yeni seçenekler için destek ekleyebileceğiniz anlamına gelir.

**Django kodu nasıl görünür?**
Geleneksel veri odaklı bir web sitesinde, bir web uygulaması web tarayıcısından (veya diğer istemciden) gelen HTTP isteklerini bekler. Bir istek alındığında, uygulama URL'ye ve muhtemelen verideki bilgilere dayanarak neyin gerekli olduğunu belirler POST. GETGereksinime bağlı olarak, bir veritabanından bilgi okuyabilir veya yazabilir ya da isteği karşılamak için gereken diğer görevleri gerçekleştirebilir. Uygulama daha sonra web tarayıcısına bir yanıt döndürür; genellikle alınan verileri bir HTML şablonundaki yer tutuculara ekleyerek tarayıcının görüntülemesi için dinamik olarak bir HTML sayfası oluşturur.

Django web uygulamaları genellikle bu adımların her birini ele alan kodları ayrı dosyalarda gruplandırır:

![Test](./assets/08-print.png)

- *URL'ler:* Her bir URL'den gelen istekleri tek bir fonksiyon aracılığıyla işlemek mümkün olsa da, her kaynağı ayrı bir görünüm fonksiyonuyla ele almak çok daha sürdürülebilirdir. Bir URL eşleyici, HTTP isteklerini istek URL'sine göre uygun görünüme yönlendirmek için kullanılır. URL eşleyici ayrıca bir URL'de görünen belirli dize veya rakam kalıplarını eşleştirebilir ve bunları veri olarak bir görünüm fonksiyonuna iletebilir.
- *Görünüm:* Görünüm, HTTP isteklerini alan ve HTTP yanıtları döndüren bir istek işleyici fonksiyondur. Görünümler, istekleri karşılamak için gereken verilere modeller aracılığıyla erişir ve yanıtın biçimlendirilmesini şablonlara devreder .
- *Modeller:* Modeller, bir uygulamanın veri yapısını tanımlayan ve veritabanındaki kayıtları yönetmek (eklemek, değiştirmek, silmek) ve sorgulamak için mekanizmalar sağlayan Python nesneleridir.
- *Şablonlar:* Şablon, gerçek içeriği temsil etmek için kullanılan yer tutucularla birlikte bir dosyanın (örneğin bir HTML sayfasının) yapısını veya düzenini tanımlayan bir metin dosyasıdır. Bir görünüm , bir modelden gelen verilerle doldurarak, bir HTML şablonu kullanarak dinamik olarak bir HTML sayfası oluşturabilir . Şablon, herhangi bir dosya türünün yapısını tanımlamak için kullanılabilir; HTML olmak zorunda değildir!

*Not:* Django bu organizasyona "Model Görünüm Şablonu (MVT)" mimarisi adını vermektedir. Daha tanıdık olan Model Görünüm Denetleyicisi (MVC ) mimarisine birçok benzerliği vardır.

Aşağıdaki bölümler, bir Django uygulamasının bu ana kısımlarının nasıl göründüğüne dair bir fikir verecektir (geliştirme ortamını kurduktan sonra kursun ilerleyen bölümlerinde daha ayrıntılı bilgi vereceğiz).

**İsteği doğru görünüme (urls.py) gönderiliyor.**
Bir URL eşleyici genellikle urls.py adlı bir dosyada saklanır . Aşağıdaki örnekte, eşleyici ( ) rotalar (belirli URL kalıpları)urlpatterns ve karşılık gelen görünüm fonksiyonları arasında bir eşleme listesi tanımlar . Belirtilen bir kalıpla eşleşen bir URL'ye sahip bir HTTP isteği alındığında, ilgili görünüm fonksiyonu çağrılır ve istek ona iletilir.

```PYTHON
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

Nesne , fonksiyonlardan *urlpatternS* oluşan bir listedir (Python listeleri köşeli parantezler kullanılarak tanımlanır; öğeler virgülle ayrılır ve isteğe bağlı olarak sonda bir virgül bulunabilir . Örneğin: ).*path() re_path() [item1, item2, item3,]*

Her iki yöntemin ilk argümanı, eşleştirilecek bir rota (kalıp)tır. *path()* Yöntem, yakalanacak ve adlandırılmış argümanlar olarak görünüm fonksiyonuna iletilecek bir URL'nin bölümlerini tanımlamak için açılı parantezler kullanır. Fonksiyon, *re_path()* düzenli ifade olarak bilinen esnek bir kalıp eşleştirme yaklaşımı kullanır.

İkinci argüman, desen eşleştiğinde çağrılacak başka bir fonksiyondur. Gösterim, *views.book_detail* fonksiyonun çağrıldığını ve adlı bir modülde (yani adlı bir dosyanın içinde ) *book_detail()* bulunabileceğini belirtir.*views views.py*

**İsteği işleme (views.py)**
Görünümler (Views), web uygulamasının kalbidir; web istemcilerinden HTTP isteklerini alır ve HTTP yanıtları döndürür. Bu süreçte, veritabanlarına erişmek, şablonları oluşturmak vb. için çerçevenin diğer kaynaklarını bir araya getirirler.

Aşağıdaki örnek, *index()* önceki bölümde URL eşleyicimiz tarafından çağrılabilecek minimal bir görünüm fonksiyonunu göstermektedir. Tüm görünüm fonksiyonları gibi, *HttpRequest* parametre olarak bir nesne alır *( request)* ve bir *HttpResponse* nesne döndürür. Bu durumda istekle ilgili hiçbir şey yapmıyoruz ve yanıtımız sabit kodlanmış bir dize döndürüyor. Daha sonraki bir bölümde daha ilginç bir şey yapan bir isteği göstereceğiz.

```PYTHON
# filename: views.py (Django view functions)

from django.http import HttpResponse

def index(request):
    # Get an HttpRequest - the request parameter
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Hello from Django!')
```

**Not:** Biraz Python bilgisi içeriyor:

- Python modülleri, kodumuzda kullanmak isteyebileceğimiz, ayrı dosyalarda saklanan fonksiyon "kütüphaneleridir". Burada, görünümümüzde kullanabilmek için *HttpResponse* modülden yalnızca nesneyi içe aktarıyoruz: . Bir modülden bazı veya tüm nesneleri içe aktarmanın başka yolları da vardır.*django.httpfrom django.http import HttpResponse*
- Fonksiyonlar, yukarıda gösterildiği gibi `function` anahtar kelimesi kullanılarak tanımlanır *def*; fonksiyon adından sonra parantez içinde adlandırılmış parametreler listelenir; tüm satır iki nokta üst üste ile biter. Sonraki satırların nasıl girintili olduğuna dikkat edin . Girinti önemlidir, çünkü kod satırlarının o belirli blok içinde olduğunu belirtir (zorunlu girinti, Python'ın önemli bir özelliğidir ve Python kodunun okunmasının bu kadar kolay olmasının nedenlerinden biridir).

Görünümler genellikle views.py adlı bir dosyada saklanır .

**Veri modellerini tanımlama (models.py)**
Django web uygulamaları, modeller olarak adlandırılan Python nesneleri aracılığıyla verileri yönetir ve sorgular. Modeller, alan türleri ve muhtemelen maksimum boyutları, varsayılan değerleri, seçim listesi seçenekleri, dokümantasyon için yardım metni, formlar için etiket metni vb. dahil olmak üzere depolanan verilerin yapısını tanımlar. Modelin tanımı, temel alınan veritabanından bağımsızdır; proje ayarlarınızın bir parçası olarak birkaçından birini seçebilirsiniz. Kullanmak istediğiniz veritabanını seçtikten sonra, onunla doğrudan iletişim kurmanıza hiç gerek yoktur; sadece model yapınızı ve diğer kodlarınızı yazarsınız ve Django, veritabanıyla iletişim kurmanın tüm "zor işlerini" sizin için halleder.

Aşağıdaki kod parçası, bir *Team* nesne için çok basit bir Django modelini göstermektedir. *Team* Sınıf, Django sınıfından türetilmiştir *models.Model.* Takım adını ve takım seviyesini karakter alanları olarak tanımlar ve her kayıt için saklanacak maksimum karakter sayısını belirtir. değeri *team_level* birden fazla değerden biri olabilir, bu nedenle onu bir seçim alanı olarak tanımlıyoruz ve görüntülenecek seçimler ile saklanacak veriler arasında bir eşleme ve varsayılan bir değer sağlıyoruz.

```PYTHON
# filename: models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        # …
        # list other team levels
    )
    team_level = models.CharField(max_length=3, choices=TEAM_LEVELS, default='U11')
```

**Not:** Biraz Python bilgisi içeriyor:

Python, kodumuzu nesneler halinde düzenlediğimiz, bu nesneler arasında ilgili veriler ve bu veriler üzerinde işlem yapan fonksiyonların bulunduğu "nesne yönelimli programlama"yı destekler. Nesneler ayrıca diğer nesnelerden miras alabilir/genişletebilir/türetilebilir, bu da ilgili nesneler arasında ortak davranışların paylaşılmasına olanak tanır. Python'da, bir nesnenin "şablonunu" tanımlamak için `class` anahtar kelimesini kullanırız . Sınıftaki modele dayanarak, nesne türünün birden fazla özel örneğini *class* oluşturabiliriz .

Örneğin, burada *Team* bir sınıftan türetilen bir sınıfımız var *Model*. Bu, bir model olduğu ve bir modelin tüm metotlarını içereceği anlamına gelir, ancak ona kendine özgü özellikler de verebiliriz. Modelimizde, verilerimizi depolamak için veritabanımızın ihtiyaç duyacağı alanları belirli adlarla tanımlıyoruz. Django, alan adları da dahil olmak üzere bu tanımları kullanarak temel veritabanını oluşturur.

**Veri sorgulama (views.py)**
Django modeli, ilişkili veritabanında arama yapmak için basit bir sorgu API'si sağlar. Bu API, farklı kriterler (örneğin, tam eşleşme, büyük/küçük harf duyarsız, büyüktür vb.) kullanarak aynı anda birden fazla alanı eşleştirebilir ve karmaşık ifadeleri destekleyebilir (örneğin, takım adı "Fr" ile başlayan veya "al" ile biten U11 takımlarını arayabilirsiniz).

Kod parçacığı, tüm U09 takımlarımızı görüntülemek için bir görünüm fonksiyonu (kaynak işleyici) göstermektedir. Satır, model sorgu API'sini kullanarak alanın tam olarak şu metne sahip olduğu *list_teams = Team.objects.filter(team_level__exact="U09")* tüm kayıtları nasıl filtreleyebileceğimizi göstermektedir (bu kriterin , alan adı ve eşleşme türü çift alt çizgiyle ayrılmış şekilde fonksiyona nasıl argüman olarak iletildiğine dikkat edin : ).*team_levelU09filter()team_level__exact*

```PYTHON
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Bu fonksiyon, tarayıcıya geri gönderilen HTML dosyasını *render()* oluşturmak için kullanılan fonksiyonu kullanır. Bu fonksiyon bir kısayoldur ; belirtilen bir HTML şablonunu ve şablona eklenecek bazı verileri (adı verilen değişkende sağlanan ) birleştirerek bir HTML dosyası oluşturur. Sonraki bölümde, HTML dosyasını oluşturmak için şablona verilerin nasıl eklendiğini göstereceğiz.*HttpResponsecontext*

**Veri oluşturma (HTML şablonları)**
Şablon sistemleri, bir sayfa oluşturulduğunda doldurulacak veriler için yer tutucular kullanarak çıktı belgesinin yapısını belirlemenize olanak tanır. Şablonlar genellikle HTML oluşturmak için kullanılır, ancak diğer belge türlerini de oluşturabilirler. Django, hem kendi yerel şablonlama sistemini hem de Jinja2 adlı popüler bir Python kütüphanesini doğrudan destekler (gerekirse diğer sistemleri de destekleyecek şekilde yapılandırılabilir).

Kod parçacığı, önceki bölümdeki fonksiyon tarafından çağrılan HTML şablonunun nasıl görünebileceğini göstermektedir . Bu şablon, oluşturulduğunda çağrılan render()bir liste değişkenine erişebileceği varsayımıyla yazılmıştır (bu, yukarıdaki fonksiyonun içindeki değişkende yer almaktadır). HTML iskeletinin içinde, önce değişkenin var olup olmadığını kontrol eden ve ardından bir döngü içinde yineleyen bir ifade bulunmaktadır . Her yinelemede, şablon her takımın değerini bir öğede görüntüler. *youngest_teamscontextrender()youngest_teamsforteam_name&lt;li&gt;*


```DJANGO
## filename: best/templates/best/index.html

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Home page</title>
</head>
<body>
  {% if youngest_teams %}
    <ul>
      {% for team in youngest_teams %}
        <li>{{ team.team_name }}</li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No teams are available.</p>
  {% endif %}
</body>
</html>
```

**Başka ne yapabilirsiniz?**
Önceki bölümlerde, neredeyse her web uygulamasında kullanacağınız temel özellikler gösterilmiştir: URL eşleme, görünümler, modeller ve şablonlar. Django'nun sağladığı diğer özelliklerden bazıları şunlardır:

- *Formlar :* HTML formları, sunucuda işlenmek üzere kullanıcı verilerini toplamak için kullanılır. Django, form oluşturmayı, doğrulamayı ve işlemeyi basitleştirir.
- *Kullanıcı kimlik doğrulaması ve izinleri :* Django, güvenlik göz önünde bulundurularak geliştirilmiş sağlam bir kullanıcı kimlik doğrulama ve izin sistemi içerir.
- *Önbellekleme :* Dinamik olarak içerik oluşturmak, statik içerik sunmaktan çok daha fazla işlem gücü gerektirir (ve yavaştır). Django, oluşturulan sayfanın tamamını veya bir kısmını, yalnızca gerektiğinde yeniden oluşturulmasını sağlayacak şekilde saklamanıza olanak tanıyan esnek bir önbellekleme mekanizması sunar.
- *Yönetim sitesi :* Django yönetim sitesi, temel iskeleti kullanarak bir uygulama oluşturduğunuzda varsayılan olarak dahil edilir. Bu, site yöneticilerinin sitenizdeki herhangi bir veri modelini oluşturmasını, düzenlemesini ve görüntülemesini kolaylaştıran bir yönetim sayfası sağlamayı son derece kolaylaştırır.
- *Veri serileştirme :* Django, verilerinizi XML veya JSON olarak serileştirmeyi ve sunmayı kolaylaştırır. Bu, bir web servisi (sadece diğer uygulamalar veya siteler tarafından tüketilecek veriler sunan ve kendisi hiçbir şey görüntülemeyen bir web sitesi) oluştururken veya istemci tarafı kodunun tüm veri işleme işlemlerini ele aldığı bir web sitesi oluştururken yararlı olabilir.



## Django geliştirme ortamının kurulumu
Django'nun ne işe yaradığını artık bildiğinize göre, Windows, Linux (Ubuntu) ve macOS'ta (hangi yaygın işletim sistemini kullanıyorsanız kullanın) bir Django geliştirme ortamını nasıl kurup test edeceğinizi göstereceğiz; bu makale, Django uygulamaları geliştirmeye başlamanız için gerekenleri size sağlayacaktır.

**Django geliştirme ortamına genel bakış**
Django, web uygulamaları geliştirmeye başlamanız için kendi bilgisayarınızı kurmayı çok kolaylaştırır. Bu bölüm, geliştirme ortamıyla birlikte neler elde edeceğinizi açıklar ve kurulum ve yapılandırma seçeneklerinizin bazılarına genel bir bakış sunar. Makalenin geri kalanı, Django geliştirme ortamını Ubuntu, macOS ve Windows'a kurmanın önerilen yöntemini ve nasıl test edebileceğinizi açıklar.

**Django geliştirme ortamı nedir?**
Geliştirme ortamı, Django uygulamalarını üretim ortamına dağıtmadan önce geliştirme ve test etme amacıyla kullanabileceğiniz, yerel bilgisayarınıza kurulmuş bir Django sürümüdür.

Django'nun kendisinin sağladığı başlıca araçlar, Django projeleri oluşturmak ve bunlarla çalışmak için kullanılan bir dizi Python betiği ve yerel (yani, harici bir web sunucusunda değil, bilgisayarınızda) Django web uygulamalarını bilgisayarınızın web tarayıcısında test etmek için kullanabileceğiniz basit bir geliştirme web sunucusudur .

Geliştirme ortamının bir parçası olan ve burada ele almayacağımız başka çevre araçları da vardır. Bunlar arasında kod düzenlemek için bir metin editörü veya IDE, otomatik biçimlendirme için linter'lar vb. bulunur. Zaten bir metin editörünün kurulu olduğunu varsayıyoruz.

**Django kurulum seçenekleri nelerdir?**
Django, kurulum ve yapılandırma şekilleri ve yerleri açısından son derece esnektir. Django şu şekillerde kullanılabilir:

- Farklı işletim sistemlerine yüklenmiştir.
- Kaynak koddan, Python Paket Dizini'nden (PyPi) ve çoğu durumda ana bilgisayarın paket yöneticisi uygulamasından yüklenir.
- Birden fazla veritabanından birini kullanacak şekilde yapılandırılmıştır; bu veritabanlarının ayrıca kurulması ve yapılandırılması da gerekebilir.
- Ana sistem Python ortamında veya ayrı Python sanal ortamlarında çalıştırın.

Bu seçeneklerin her biri biraz farklı bir yapılandırma ve kurulum gerektirir. Aşağıdaki alt bölümler, seçeneklerinizden bazılarını açıklamaktadır. Makalenin geri kalanında, Django'yu az sayıda işletim sisteminde nasıl kuracağınızı göstereceğiz ve bu kurulum, bu modülün geri kalanında da geçerli olacaktır.

**Hangi işletim sistemleri destekleniyor?**
Django web uygulamaları, Python 3 programlama dilini çalıştırabilen hemen hemen her makinede çalıştırılabilir: Windows, macOS, Linux/Unix, Solaris bunlardan sadece birkaçıdır. Geliştirme sırasında Django'yu çalıştırmak için gerekli performansa neredeyse her bilgisayar sahip olmalıdır.

Bu yazıda Windows, macOS ve Linux/Unix işletim sistemleri için talimatlar vereceğiz.

**Hangi Python sürümü kullanılmalıdır?**
Hedeflediğiniz Django sürümünün desteklediği herhangi bir Python sürümünü kullanabilirsiniz. Django 5.0 için izin verilen sürümler Python 3.10 ile 3.12 arasındadır.

Django projesi, desteklenen Python sürümünün en yeni versiyonunun kullanılmasını tavsiye eder (ve "resmi olarak destekler").

**Django'yu nereden indirebiliriz?**
Django'yu indirebileceğiniz üç yer var:

- Django'nun en son kararlı sürümünü edinmenin en iyi yolu, pip aracını kullanarak Python Paket Deposu'nu (PyPi) kullanmaktır .
- Bilgisayarınızın paket yöneticisinden bir sürüm kullanın. İşletim sistemleriyle birlikte gelen Django dağıtımları, tanıdık bir kurulum mekanizması sunar. Ancak, paketlenmiş sürümün oldukça eski olabileceğini ve yalnızca sistem Python ortamına kurulabileceğini unutmayın (bu da istediğiniz şey olmayabilir).
- Kaynak koddan kurulum. Django'nun en son, en güncel sürümünü kaynak koddan indirip kurabilirsiniz. Bu, yeni başlayanlar için önerilmez, ancak Django'ya katkıda bulunmaya hazır olduğunuzda gereklidir.

Bu makale, en son kararlı sürümü edinmek için PyPi'den Django'nun nasıl kurulacağını göstermektedir.

**Hangi veritabanı?**
Django resmi olarak PostgreSQL, MariaDB, MySQL, Oracle ve SQLite veritabanlarını desteklemektedir ve diğer popüler SQL ve NoSQL veritabanları için çeşitli seviyelerde destek sağlayan topluluk kütüphaneleri de mevcuttur. Hem üretim hem de geliştirme için aynı veritabanını seçmenizi öneririz (Django, Nesne-İlişki Eşleyici (ORM) kullanarak veritabanı farklılıklarının çoğunu soyutlasa da, yine de kaçınılması gereken potansiyel sorunlar vardır).

Bu makalede (ve bu modülün büyük bir bölümünde) verilerini bir dosyada saklayan SQLite veritabanını kullanacağız . SQLite, hafif bir veritabanı olarak kullanılmak üzere tasarlanmıştır ve yüksek düzeyde eşzamanlılığı destekleyemez. Bununla birlikte, öncelikle salt okunur uygulamalar için mükemmel bir seçimdir.

**Not:** Django, standart araçları ( django-admin ) kullanarak web sitesi projenize başladığınızda varsayılan olarak SQLite kullanacak şekilde yapılandırılmıştır . Başlangıç ​​aşamasında ek yapılandırma veya kurulum gerektirmediği için harika bir seçimdir.

**Sistem genelinde mi yoksa Python sanal ortamında mı kuracaksınız?**
Python3'ü kurduğunuzda, tüm Python3 kodları tarafından paylaşılan tek bir global ortam elde edersiniz. Bu ortama istediğiniz Python paketlerini kurabilirsiniz, ancak her paketin yalnızca belirli bir sürümünü aynı anda kurabilirsiniz.

**Not:** Genel ortama yüklenen Python uygulamaları birbirleriyle çakışabilir (örneğin, aynı paketin farklı sürümlerine bağımlılarsa).

Django'yu varsayılan/küresel ortama kurarsanız, bilgisayarda yalnızca bir Django sürümünü hedefleyebilirsiniz. Bu, eski sürümlere dayanan web sitelerini korurken (en son Django sürümünü kullanarak) yeni web siteleri oluşturmak istediğinizde sorun olabilir.

Sonuç olarak, deneyimli Python/Django geliştiricileri genellikle Python uygulamalarını bağımsız Python sanal ortamlarında çalıştırırlar . Bu, tek bir bilgisayarda birden fazla farklı Django ortamının kullanılmasını sağlar. Django geliştirici ekibi de Python sanal ortamlarını kullanmanızı önermektedir!

Bu modül, Django'yu sanal bir ortama kurmuş olduğunuzu varsayar ve bunu aşağıda nasıl yapacağınızı göstereceğiz.

**Python 3 Kurulumu**
Django'yu kullanabilmek için işletim sisteminizde Python 3 kurulu olmalıdır. Ayrıca, Django ve diğer Python uygulamalarınız tarafından kullanılan Python paketlerini/kütüphanelerini yönetmek (kurmak, güncellemek ve kaldırmak) için kullanılan Python Paket Dizini aracı olan pip3'e de ihtiyacınız olacaktır.

Bu bölümde, Ubuntu Linux 20.04, macOS ve Windows 10 için hangi Python sürümlerinin yüklü olduğunu nasıl kontrol edebileceğiniz ve gerektiğinde yeni sürümleri nasıl yükleyebileceğiniz kısaca açıklanmaktadır.


**Ubuntu 22.04**
Ubuntu Linux 22.04 LTS, varsayılan olarak Python 3.10.12'yi içerir. Bunu, bash terminalinde aşağıdaki komutu çalıştırarak doğrulayabilirsiniz:

```BASH
python3 -V
# Output: Python 3.10.12
```

Ancak, Python 3 (Django dahil) için paketleri yüklemek üzere ihtiyaç duyacağınız Python Paket Dizini aracı ( pip3 ) varsayılan olarak mevcut değildir . Pip3'ü bash terminalinde şu komutla yükleyebilirsiniz :

```BASH
sudo apt install python3-pip
```

**macOS**
macOS varsayılan olarak Python 3'ü içermez (eski sürümlerde Python 2 bulunur). Bunu terminalde aşağıdaki komutu çalıştırarak doğrulayabilirsiniz:

```BASH
python3 -V
```
Bu, Python sürüm numarasını gösterecektir; bu, Python 3'ün yüklü olduğunu gösterir veya *python3: command not found* Python 3 bulunamadığını gösterir.


**Python 3 ve pip3'ü çağırma**
Önceki bölümlerde farklı işletim sistemlerinde Python 3 ve pip'i çağırmak için farklı komutlar kullandığımızı fark edeceksiniz.

Eğer yalnızca Python 3 yüklüyse (Python 2 değil), temel komutlar *python* genellikle herhangi bir işletim sisteminde Python ve pip çalıştırmak için kullanılabilir. Sisteminizde buna izin veriliyorsa , aşağıdaki gibi temel komutlarla *pip* çalıştırdığınızda "3" sürüm dizesi alırsınız *:-V*

```BASH
python -V
pip -V
```

Eğer Python 2 yüklüyse, sürüm 3'ü kullanmak için Linux/macOS'ta komutların başına `<python> python3` ve ` <python>`, Windows'ta ise `<python>` ve `<python>` eklemeniz gerekir:*pip3py -3py -3 -m pip*

```BASH
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

**Django Kurulumu**
Sanal bir ortam oluşturup içine girmek için gerekli komutu verdikten sonra , Django'yu yüklemek için pip3'ü *workon* kullanabilirsiniz .

```BASH
# Linux/macOS
python3 -m pip install django~=4.2

# Windows
py -3 -m pip install django~=4.2
```

Django'nun kurulu olup olmadığını aşağıdaki komutu çalıştırarak test edebilirsiniz (bu sadece Python'ın Django modülünü bulup bulamadığını test eder):

```BASH
# Linux/macOS
python3 -m django --version

# Windows
py -3 -m django --version
```

## Django Eğitimi: Yerel Kütüphane web sitesi
**Genel Bakış**
MDN'nin "Yerel Kütüphane" Django eğitimine hoş geldiniz. Bu eğitimde, yerel bir kütüphanenin kataloğunu yönetmek için kullanılabilecek bir web sitesi geliştireceğiz.

Bu eğitim makaleleri serisinde şunları öğreneceksiniz:

- Django'nun araçlarını kullanarak iskelet bir web sitesi ve uygulama oluşturun.
- Geliştirme sunucusunu başlatın ve durdurun.
- Uygulamanızın verilerini temsil edecek modeller oluşturun.
- Sitenizin verilerini doldurmak için Django yönetim sitesini kullanın.
- Farklı isteklere yanıt olarak belirli verileri almak için görünümler oluşturun ve verileri tarayıcıda görüntülenecek HTML olarak işlemek için şablonlar oluşturun.
- Farklı URL kalıplarını belirli görünümlerle ilişkilendirmek için eşleyiciler oluşturun.
- Site davranışını ve erişimini kontrol etmek için kullanıcı yetkilendirmesi ve oturumları ekleyin.
- Formlarla çalışmak.
- Uygulamanız için test kodu yazın.
- Django'nun güvenlik özelliklerini etkin bir şekilde kullanın.
- Uygulamanızı üretim ortamına dağıtın.

Bu konuların bazılarını zaten öğrendiniz ve diğerlerine kısaca değindiniz. Bu eğitim serisinin sonunda, kendi başınıza basit Django uygulamaları geliştirebilecek kadar bilgiye sahip olmalısınız.

**LocalLibrary web sitesi**
LocalLibrary, bu eğitim serisi boyunca oluşturacağımız ve geliştireceğimiz web sitesinin adıdır. Tahmin edebileceğiniz gibi, web sitesinin amacı, kullanıcıların mevcut kitaplara göz atabileceği ve hesaplarını yönetebileceği küçük bir yerel kütüphane için çevrimiçi bir katalog sağlamaktır.

Bu örnek, ihtiyaç duyduğumuz kadar ayrıntıyı gösterebilmek ve neredeyse tüm Django özelliklerini sergilemek için kullanılabilecek şekilde özenle seçilmiştir. Daha da önemlisi, Django web çerçevesindeki en önemli işlevsellik konusunda bize yol gösterici bir rehber sunmamızı sağlar:

- İlk birkaç öğretici makalede, kütüphane üyelerinin hangi kitapların mevcut olduğunu öğrenmek için kullanabileceği basit , yalnızca göz atma özelliğine sahip bir kütüphane tanımlayacağız . Bu, neredeyse her web sitesinde ortak olan işlemleri keşfetmemizi sağlar: veritabanından içerik okuma ve görüntüleme.
- İlerledikçe, kütüphane örneği doğal olarak daha gelişmiş Django özelliklerini göstermek üzere genişler. Örneğin, kullanıcıların kitap rezervasyonu yapmasına olanak sağlamak için kütüphaneyi genişletebilir ve bunu formların nasıl kullanılacağını ve kullanıcı kimlik doğrulamasının nasıl destekleneceğini göstermek için kullanabiliriz.

Bu oldukça genişletilebilir bir örnek olsa da, "Yerel Kütüphane" olarak adlandırılmasının bir nedeni var: Django ile hızlı bir şekilde çalışmaya başlamanıza yardımcı olacak minimum bilgiyi göstermeyi umuyoruz. Sonuç olarak, kitaplar, kitap kopyaları, yazarlar ve diğer önemli bilgiler hakkında bilgi depolayacağız. Ancak, bir kütüphanenin depolayabileceği diğer öğeler hakkında bilgi depolamayacağız veya birden fazla kütüphane sitesini veya diğer "büyük kütüphane" özelliklerini desteklemek için gereken altyapıyı sağlamayacağız.


## Django Eğitimi Bölüm 2: İskelet bir web sitesi oluşturma
Bu makale, daha sonra siteye özgü ayarlar, URL'ler, modeller, görünümler ve şablonlarla doldurabileceğiniz bir "iskelet" web sitesi projesi oluşturmayı göstermektedir.

Başlamak için:

1\.Bu aracı kullanarak bir proje klasörü, temel dosya şablonları ve proje yönetim betiği görevi gören manage.py dosyasını *django-admin* oluşturabilirsiniz .

2\.manage.py dosyasını kullanarak bir veya daha fazla uygulama oluşturabilirsiniz .

**Not:** Bir web sitesi bir veya daha fazla bölümden oluşabilir. Örneğin, ana site, blog, wiki, indirme alanı vb. Django, bu bileşenleri ayrı uygulamalar olarak geliştirmenizi teşvik eder ; böylece istenirse farklı projelerde yeniden kullanılabilirler.

3\.Yeni başvuruları projeye dahil etmek için kayıt altına alın.

4\.Her uygulama için URL/yol eşleyiciyi bağlayın .

Yerel Kütüphane web sitesi için , web sitesi ve proje klasörleri locallibrary olarak adlandırılır ve catalog adlı bir uygulama içerir . Bu nedenle, en üst düzey klasör yapısı aşağıdaki gibi olacaktır:

```BASH
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

Aşağıdaki bölümlerde işlem adımları ayrıntılı olarak ele alınmakta ve değişikliklerinizi nasıl test edebileceğiniz gösterilmektedir. Bu makalenin sonunda, bu aşamada yapabileceğiniz diğer site genelindeki yapılandırmaları da ele alacağız.

**Projenin oluşturulması**
Projeyi oluşturmak için:

1\.Komut istemini (veya terminal penceresini) açın ve sanal ortamınızda olduğunuzdan emin olun .

2\.Yerel kütüphane uygulamanızı oluşturmak istediğiniz klasöre gidin.

3\.Aşağıda gösterildiği gibi komutu kullanarak yeni projeyi oluşturun *django-admin startproject* ve ardından proje klasörüne gidin:

```BASH
django-admin startproject locallibrary
cd locallibrary
```
Bu `*django-admin* araç aşağıdaki gibi bir klasör/dosya yapısı oluşturur:

```BASH
locallibrary/
    manage.py
    locallibrary/
        __init__.py
        settings.py
        urls.py
        wsgi.py
        asgi.py
```

Yerel kütüphane projesi alt klasörü, web sitesine giriş noktasıdır:

- *__init__.py,* Python'a bu dizini bir Python paketi olarak ele almasını söyleyen boş bir dosyadır.
- *settings.py* dosyası , oluşturduğumuz uygulamaların kaydı, statik dosyalarımızın konumu, veritabanı yapılandırma ayrıntıları vb. dahil olmak üzere web sitesinin tüm ayarlarını içerir.
- *urls.py* dosyası, site URL'si ile görünüm sayfaları arasındaki eşleştirmeleri tanımlar. Bu dosya tüm URL eşleştirme kodunu içerebilirken , daha sonra göreceğiniz gibi, eşleştirmelerin bir kısmını belirli uygulamalara devretmek daha yaygındır.
- *wsgi.py*, Django uygulamanızın web sunucusuyla iletişim kurmasına yardımcı olmak için kullanılır. Bunu standart bir şablon olarak düşünebilirsiniz.
- *asgi.py*, Python asenkron web uygulamaları ve sunucularının birbirleriyle iletişim kurması için bir standarttır. Asenkron Sunucu Ağ Geçidi Arayüzü (ASGI), Web Sunucu Ağ Geçidi Arayüzü'nün (WSGI) asenkron halefidir. ASGI, hem asenkron hem de senkron Python uygulamaları için bir standart sağlarken, WSGI yalnızca senkron uygulamalar için bir standart sağlıyordu. ASGI, WSGI ile geriye dönük uyumludur ve birden fazla sunucu ve uygulama çerçevesini destekler.

*manage.py* betiği , uygulamalar oluşturmak, veritabanlarıyla çalışmak ve geliştirme web sunucusunu başlatmak için kullanılır.

**Katalog uygulamasının oluşturulması**
Ardından, yerel kütüphane projemizin içinde yer alacak katalog uygulamasını oluşturmak için aşağıdaki komutu çalıştırın . Bu komutu, projenizin manage.py dosyasının bulunduğu klasörden çalıştırdığınızdan emin olun :

```BASH
# Linux/macOS
python3 manage.py startapp catalog

# Windows
py manage.py startapp catalog
```

Bu araç yeni bir klasör oluşturur ve içine uygulamanın farklı bölümlerine ait dosyaları yerleştirir (aşağıdaki örnekte gösterildiği gibi). Dosyaların çoğu amaçlarına göre adlandırılır (örneğin, görünümler views.py'de , modeller models.py'de , testler tests.py'de , yönetim sitesi yapılandırması admin.py'de , uygulama kaydı apps.py'de saklanmalıdır ) ve ilgili nesnelerle çalışmak için minimum düzeyde şablon kod içerir.

Güncellenen proje dizini artık şöyle görünmelidir:

```BASH
locallibrary/
    manage.py
    locallibrary/
    catalog/
        admin.py
        apps.py
        models.py
        tests.py
        views.py
        __init__.py
        migrations/
```
Bunlara ek olarak, artık şunlara da sahibiz:

- " Geçişler " klasörü , modellerinizi değiştirdikçe veritabanınızı otomatik olarak güncellemenizi sağlayan "geçiş dosyalarını" depolamak için kullanılır.
- *__init__.py — Django/Python'ın klasörü* bir Python Paketi olarak tanımasını ve projenin diğer bölümlerinde içindeki nesneleri kullanmanıza olanak sağlamasını sağlamak için burada oluşturulan boş bir dosya.

**Katalog başvurusunun kaydı**
Uygulama oluşturulduktan sonra, herhangi bir araç çalıştırıldığında (örneğin veritabanına model eklemek gibi) dahil edilebilmesi için onu projeye kaydetmemiz gerekiyor. Uygulamalar, *INSTALLED_APPS* proje ayarlarındaki listeye eklenerek kaydedilir.

Proje ayarları dosyasını *( django-locallibrary-tutorial/locallibrary/settings.py)* açın ve listenin tanımını bulun *INSTALLED_APPS*. Ardından, aşağıda gösterildiği gibi listenin sonuna yeni bir satır ekleyin:

```BASH
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Add our new application
    'catalog.apps.CatalogConfig', # This object was created for us in /catalog/apps.py
]
```
Yeni satır, uygulamayı oluşturduğunuzda */django-locallibrary-tutorial/catalog/apps.pyCatalogConfig* dosyasında sizin için oluşturulan uygulama yapılandırma nesnesini ( ) belirtir.

**Veritabanının belirtilmesi**
Bu aynı zamanda, proje için kullanılacak veritabanını belirleyeceğiniz noktadır. Davranışta küçük farklılıkları önlemek için, mümkün olduğunca geliştirme ve üretim için aynı veritabanını kullanmak mantıklıdır. 

Bu örnekte çoğunlukla varsayılan SQLite veritabanını kullanacağız, çünkü bir demo veritabanında çok fazla eşzamanlı erişime ihtiyaç duymayı beklemiyoruz ve kurulumu için ek bir çalışma gerektirmiyor! Bu veritabanının nasıl yapılandırıldığını *settings.py* dosyasında görebilirsiniz :

```PYTHON
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

**Diğer proje ayarları**

```PYTHON
TIME_ZONE = 'Europe/London'
```

Şu an değiştirmeyeceğiniz, ancak bilmeniz gereken iki ayar daha var:

- *SECRET_KEY* Bu, Django'nun web sitesi güvenlik stratejisinin bir parçası olarak kullanılan gizli bir anahtardır. Geliştirme aşamasında bu kodu korumuyorsanız, üretim ortamına geçirirken farklı bir kod (belki de bir ortam değişkeninden veya dosyadan okunan) kullanmanız gerekecektir.
- *DEBUG* Bu, HTTP durum kodu yanıtları yerine hata durumunda hata ayıklama günlüklerinin görüntülenmesini sağlar. Hata ayıklama bilgileri saldırganlar için yararlı olduğundan, bu ayar üretim ortamında etkinleştirilmelidir *False*, ancak şimdilik etkinleştirilmiş olarak bırakabiliriz *True*.

**URL eşleyiciyi bağlama**
Web sitesi, proje klasöründeki bir URL eşleme dosyası ( urls.py ) ile oluşturulmuştur . Bu dosyayı tüm URL eşlemelerinizi yönetmek için kullanabilirsiniz, ancak eşlemeleri ilgili uygulamaya bırakmak daha yaygındır.

*django-locallibrary-tutorial/locallibrary/urls.py* dosyasını açın ve URL eşleyiciyi kullanmanın bazı yollarını açıklayan talimat metnini inceleyin.

```PYTHON
"""
URL configuration for locallibrary project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLConf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
```
*urlpatterns* URL eşlemeleri, Python fonksiyon listesi olan bir değişken aracılığıyla yönetilir . *path()* Her *path()* fonksiyon, bir URL kalıbını , kalıp eşleştiğinde görüntülenecek belirli bir görünüme veya başka bir URL kalıbı test kodu listesine bağlar (bu ikinci durumda, kalıp hedef modülde tanımlanan kalıplar için "temel URL" haline gelir). Liste başlangıçta, admin/ kalıbına sahip tüm URL'leri , Yönetim uygulamasının kendi URL eşleme tanımlarını içeren modüle *urlpatterns* eşleyen tek bir fonksiyon tanımlar .*admin.site.urls*

Listeye yeni bir öğe eklemek için *urlpatterns*, dosyanın sonuna aşağıdaki satırları ekleyin. Bu yeni öğe, *path()* belirtilen kalıba sahip istekleri catalog/modüle *catalog.urls* (göreceli URL'ye sahip dosya: *catalog/urls.py* ) ileten bir kod içerir.

```PYTHON
# Use include() to add paths from the catalog application
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

Dosyanın sonuna aşağıdaki satırları ekleyin:

```PYTHON
# Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='catalog/', permanent=True)),
]
```
Yol fonksiyonunun ilk parametresini boş bırakarak '/' karakterini belirtin. İlk parametreyi '/' olarak yazarsanız, Django geliştirme sunucusunu başlattığınızda aşağıdaki uyarıyı verecektir:

```PYTHON
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django, varsayılan olarak CSS, JavaScript ve resimler gibi statik dosyaları sunmaz, ancak sitenizi oluştururken geliştirme web sunucusunun bunu yapması faydalı olabilir. Bu URL eşleyiciye son bir ekleme olarak, aşağıdaki satırları ekleyerek geliştirme sırasında statik dosyaların sunulmasını etkinleştirebilirsiniz.

Şimdi dosyanın sonuna aşağıdaki son bloğu ekleyin:

```PYTHON
# Use static() to add URL mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

Son adım olarak, katalog klasörünüzün içine urls.py adında bir dosya oluşturun ve (boş) içe aktarılanları tanımlamak için aşağıdaki metni ekleyin urlpatterns. Uygulamayı oluştururken kalıplarımızı buraya ekleyeceğiz.

```PYTHON
from django.urls import path
from . import views

urlpatterns = [

]
```

**Web sitesi çerçevesinin test edilmesi**
Şu an itibariyle tamamlanmış bir proje iskeletine sahibiz. Web sitesi henüz hiçbir şey yapmıyor , ancak yaptığımız değişikliklerin herhangi bir şeye zarar vermediğinden emin olmak için çalıştırmaya değer.

Bunu yapmadan önce, öncelikle veritabanı geçişini çalıştırmalıyız . Bu işlem, veritabanımızı (kurulu uygulamalarımızdaki tüm modelleri içerecek şekilde) günceller ve bazı derleme uyarılarını ortadan kaldırır.

**Veritabanı geçişlerini çalıştırma**
Django, Django kodundaki model tanımlarını temel veritabanının kullandığı veri yapısına eşlemek için bir Nesne-İlişkisel Eşleyici (ORM) kullanır. Model tanımlarımızı değiştirdikçe, Django değişiklikleri izler ve veritabanındaki temel veri yapısını modele uyacak şekilde otomatik olarak geçirmek için veritabanı geçiş komut dosyaları ( /django-locallibrary-tutorial/catalog/migrations/ ) oluşturabilir.

Web sitesini oluşturduğumuzda, Django otomatik olarak sitenin yönetici bölümü tarafından kullanılmak üzere bir dizi model ekledi (bunlara daha sonra bakacağız). Bu modeller için veritabanında tablolar tanımlamak üzere aşağıdaki komutları çalıştırın ( manage.py dosyasının bulunduğu dizinde olduğunuzdan emin olun ):

```BASH
python3 manage.py makemigrations
python3 manage.py migrate
```

Bu *makemigrations* komut , projenizde kurulu tüm uygulamalar için geçişleri oluşturur (ancak uygulamaz). Yalnızca tek bir uygulama için geçiş çalıştırmak üzere uygulama adını da belirtebilirsiniz. Bu, geçişler uygulanmadan önce kodlarını inceleme şansı verir. Eğer bir Django uzmanıysanız, bunları biraz değiştirmeyi tercih edebilirsiniz!

Bu *migratE* komut, veritabanınıza geçişleri uygulayan komuttur. Django, mevcut veritabanına hangi geçişlerin eklendiğini takip eder.

**Web sitesini yönetmek**
Geliştirme aşamasında, web sitesini önce geliştirme web sunucusu kullanarak çalıştırabilir , ardından yerel web tarayıcınızda görüntüleyebilirsiniz.

Geliştirme web sunucusunu çalıştırmak için ( manage.pyrunserver ile aynı dizinde ) şu komutu çalıştırın :

```BASH
python3 manage.py runserver
```

Sunucu çalışmaya başladıktan sonra, yerel web tarayıcınızda adresine giderek siteyi görüntüleyebilirsiniz *http://127.0.0.1:8000/*. Şuna benzer bir site hata sayfası görmelisiniz:

![Test](./assets/09-print.png)

Merak etmeyin! Bu hata sayfası beklenen bir durum çünkü modülde tanımlanmış herhangi bir sayfa/URL yok *catalog.urls* (site kök dizinine bir URL aldığımızda bu sayfaya yönlendiriliyoruz).


## Django Eğitimi Bölüm 3: Modelleri Kullanma
**Genel Bakış**
Django web uygulamaları, model olarak adlandırılan Python nesneleri aracılığıyla verilere erişir ve bunları yönetir. Modeller , alan türleri ve muhtemelen maksimum boyutları, varsayılan değerleri, seçim listesi seçenekleri, dokümantasyon için yardım metni, formlar için etiket metni vb. dahil olmak üzere depolanan verilerin yapısını tanımlar . Modelin tanımı, temel alınan veritabanından bağımsızdır; proje ayarlarınızın bir parçası olarak birkaç veritabanından birini seçebilirsiniz. Kullanmak istediğiniz veritabanını seçtikten sonra, onunla doğrudan iletişim kurmanıza gerek kalmaz; sadece model yapınızı ve diğer kodlarınızı yazarsınız ve Django, veritabanıyla iletişim kurmanın tüm zor işlerini sizin için halleder.

**LocalLibrary modellerinin tasarlanması**
Modelleri kodlamaya başlamadan önce, hangi verileri saklamamız gerektiği ve farklı nesneler arasındaki ilişkiler hakkında birkaç dakika düşünmekte fayda var.

Kitaplar hakkında bilgi (başlık, özet, yazar, yazım dili, kategori, ISBN) saklamamız gerektiğini ve birden fazla kopyanın (küresel olarak benzersiz kimlik, bulunabilirlik durumu vb. ile) mevcut olabileceğini biliyoruz. Yazar hakkında sadece adından daha fazla bilgi saklamamız gerekebilir ve aynı veya benzer isimlere sahip birden fazla yazar olabilir. Bilgileri kitap başlığına, yazara, yazım diline ve kategoriye göre sıralayabilmek istiyoruz.

Modellerinizi tasarlarken, her "nesne" (birbiriyle ilişkili bilgi grubu) için ayrı modeller oluşturmak mantıklıdır. Bu durumda, akla ilk gelen nesneler kitaplar, kitap örnekleri ve yazarlardır.

Seçenekleri doğrudan web sitesine kodlamak yerine, seçim listesi seçeneklerini (örneğin, açılır liste gibi) temsil etmek için modeller kullanmak da isteyebilirsiniz; bu, tüm seçenekler önceden bilinmediğinde veya değişebileceğinde önerilir. Bu durumda, modeller için uygun adaylar arasında kitap türü (örneğin, Bilim Kurgu, Fransız Şiiri vb.) ve dil (İngilizce, Fransızca, Japonca) yer alır.

Modellerimize ve alanımıza karar verdikten sonra, ilişkileri düşünmemiz gerekiyor. Django, bire bir ( *OneToOneField*), bire çok ( *ForeignKey*) ve çoktan çoğa ( *ManyToManyField*) ilişkiler tanımlamanıza olanak tanır.

Bu doğrultuda, aşağıdaki UML ilişki diyagramı, bu durumda tanımlayacağımız modelleri (kutular halinde) göstermektedir.

![Test](./assets/10-print.png)

Kitap (kitabın genel detayları), kitap örneği (sistemde bulunan kitabın belirli fiziksel kopyalarının durumu) ve yazar için modeller oluşturduk. Ayrıca, yönetici arayüzü üzerinden değerler oluşturulabilmesi/seçilebilmesi için tür için de bir model oluşturmaya karar verdik. Değerlerin değişmesini beklemediğimiz için *BookInstance:status*, bu değerlere sabit kod ( ) yazdık *LOAN_STATUS*. Her bir kutunun içinde model adını, alan adlarını ve türlerini, ayrıca yöntemleri ve dönüş türlerini görebilirsiniz.

Şema ayrıca modeller arasındaki ilişkileri ve çokluklarını da göstermektedir . Çokluklar, şemada her bir modelin ilişkide bulunabilecek sayısını (maksimum ve minimum) gösteren sayılardır. Örneğin, kutular arasındaki bağlantı çizgisi, Kitap ve Tür'ün ilişkili olduğunu göstermektedir. Tür modeline yakın sayılar, bir kitabın bir veya daha fazla Türe (istediğiniz kadar) sahip olması gerektiğini gösterirken, çizginin diğer ucundaki Kitap modelinin yanındaki sayılar, bir Türün sıfır veya çok sayıda ilişkili kitaba sahip olabileceğini göstermektedir.

**Model kılavuzu**
Bu bölümde, bir modelin nasıl tanımlandığına ve bazı önemli alanlara ve alan argümanlarına ilişkin kısa bir genel bakış sunulmaktadır.

**Model tanımı**
Modeller genellikle bir uygulamanın models.py dosyasında tanımlanır . Bunlar, sınıfının alt sınıfları olarak uygulanır *django.db.models.Model* ve alanlar, metotlar ve meta veriler içerebilir. Aşağıdaki kod parçası, "tipik" bir modeli göstermektedir *MyModelName*:

```PYTHON
from django.db import models
from django.urls import reverse

class MyModelName(models.Model):
    """A typical class defining a model, derived from the Model class."""

    # Fields
    my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
    # …

    # Metadata
    class Meta:
        ordering = ['-my_field_name']

    # Methods
    def get_absolute_url(self):
        """Returns the URL to access a particular instance of MyModelName."""
        return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.my_field_name
```

Aşağıdaki bölümlerde modelin içindeki özelliklerin her birini ayrıntılı olarak inceleyeceğiz:

**Tarlalar**
Bir model, herhangi bir türde, keyfi sayıda alana sahip olabilir; her biri, veritabanı tablolarımızdan birinde saklamak istediğimiz bir veri sütununu temsil eder. Her veritabanı kaydı (satır), her alan değerinden bir tane içerecektir. Aşağıdaki örneğe bakalım:

```PYTHON
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Yukarıdaki örneğimizde *my_field_name*, türü olan tek bir alan bulunmaktadır *models.CharField*; bu da bu alanın alfanümerik karakter dizileri içereceği anlamına gelir. Alan türleri, veritabanında verilerin depolanmasında kullanılan kayıt türünü ve HTML formundan değerler alındığında kullanılacak doğrulama kriterlerini (yani, geçerli bir değerin ne olduğunu) belirleyen belirli sınıflar kullanılarak atanır. Alan türleri ayrıca, alanın nasıl depolanacağını veya kullanılabileceğini daha ayrıntılı olarak belirten argümanlar da alabilir. Bu durumda, alanımıza iki argüman veriyoruz:

- *max_length=20*— Bu alandaki bir değerin maksimum uzunluğunun 20 karakter olduğunu belirtir.
- *help_text='Enter field documentation'*— Kullanıcıların alanın nasıl kullanıldığını anlamalarına yardımcı olmak için formda görüntülenebilecek yardımcı metin.

Alan adı, sorgularda ve şablonlarda ona atıfta bulunmak için kullanılır. Alanların ayrıca, bağımsız değişkeni kullanılarak belirtilen bir etiketi de vardır *verbose_name*(varsayılan değeri ile None). Eğer *verbose_name* ayarlanmamışsa, etiket, alan adındaki alt çizgiler boşlukla değiştirilerek ve ilk harf büyük harfle yazılarak oluşturulur (örneğin, formlarda kullanıldığında alanın *my_field_name* varsayılan etiketi "Alan adım" olur ).

Alanların tanımlanma sırası, bir model bir formda (örneğin, Yönetici sitesinde) oluşturulduğunda varsayılan sıralarını etkileyecektir, ancak bu durum geçersiz kılınabilir.

**Ortak alan argümanları**
Çeşitli alan türlerinin çoğunu/birçoğunu tanımlarken aşağıdaki yaygın argümanlar kullanılabilir:

- **[help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text)** : Yukarıda açıklandığı gibi, HTML formları için (örneğin, yönetici sitesinde) bir metin etiketi sağlar.

- **[verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name)** : Alan etiketlerinde kullanılan, insan tarafından okunabilir bir alan adı. Belirtilmezse, Django varsayılan ayrıntılı adı alan adından çıkarır.

- **[default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default)** : Alan için varsayılan değer. Bu bir değer veya çağrılabilir bir nesne olabilir; çağrılabilir bir nesne ise, yeni bir kayıt oluşturulduğunda her seferinde bu nesne çağrılır.

- **[null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null)** : Eğer boş değer verilirse, Django uygun olan alanlar için veritabanında *True* boş değerler saklayacaktır ( boş bir dize saklanacaktır). Varsayılan değer null'dur .*NULL CharField False*

- **[boş](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank)** : Bu *True*, formlarınızdaki alanın boş bırakılmasına izin verildiği anlamına gelir. Varsayılan değer boştur *False*; bu, Django'nun form doğrulamasının bir değer girmenizi zorlayacağı anlamına gelir. Bu genellikle *null=True* boş değerlere izin verecekseniz, veritabanının bunları uygun şekilde temsil edebilmesini de istediğiniz için boş değerle birlikte kullanılır.

- **[Seçenekler](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices)** : Bu alan için bir seçenek grubu. Bu belirtilirse, varsayılan ilgili form bileşeni, standart metin alanı yerine bu seçenekleri içeren bir seçim kutusu olacaktır.

- **[unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique)** : Bu değer *True*, alan değerinin veritabanı genelinde benzersiz olmasını sağlar. Aynı değere sahip olamayacak alanların tekrarlanmasını önlemek için kullanılabilir. Varsayılan değer *False*.

- **[primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key)** : Eğer bu seçenek işaretlenirse, geçerli alanı model için birincil anahtar olarak ayarlar (birincil anahtar, farklı tablo kayıtlarını benzersiz şekilde tanımlamak için belirlenmiş özel bir veritabanı sütunudur). Birincil anahtar olarak hiçbir alan belirtilmezse, Django bu amaçla otomatik olarak bir alan ekler. Otomatik olarak oluşturulan birincil anahtar alanlarının türü, her uygulama için ayrı ayrı veya global olarak ayarlarında Truebelirtilebilir .*AppConfig.default_auto_field* *DEFAULT_AUTO_FIELD*

**Yaygın alan türleri**
Aşağıdaki liste, en sık kullanılan alan türlerinden bazılarını açıklamaktadır.

- **[CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField)**, kısa ve orta boyutlu, sabit uzunlukta dizeler tanımlamak için kullanılır. *max_length* Saklanacak verilerin türünü belirtmeniz gerekir.
- **[TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField)**, uzun ve keyfi uzunluktaki metin dizeleri için kullanılır. Alan için bir özellik belirtebilirsiniz *max_length*, ancak bu yalnızca alan formlarda görüntülendiğinde kullanılır (veritabanı düzeyinde zorunlu değildir).
- **[IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField)**, tam sayı (bütün sayı) değerlerini saklamak ve formlarda girilen değerleri tam sayı olarak doğrulamak için kullanılan bir alandır.
- **[DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield)** ve **[DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield)** *datetime.date* , tarihleri ​​ve tarih/saat bilgilerini (sırasıyla Python ve nesneler olarak) saklamak/temsil etmek için kullanılır *datetime.datetime*. Bu alanlar ayrıca (birbirini dışlayan) şu parametreleri de tanımlayabilir *auto_now=True:* (model her kaydedildiğinde alanı geçerli tarihe ayarlamak için), *auto_now_add*(tarihi yalnızca model ilk oluşturulduğunda ayarlamak için) ve *default*(kullanıcı tarafından geçersiz kılınabilen varsayılan bir tarih ayarlamak için).
- **[EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield)**, e-posta adreslerini saklamak ve doğrulamak için kullanılır.
- **[FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield)** ve **[ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield)** sırasıyla dosya ve resim yüklemek için kullanılır ( *ImageField* ImageField, yüklenen dosyanın resim olduğunu doğrulayan ek bir kontrol sağlar). Bunların, yüklenen dosyaların nasıl ve nerede saklanacağını tanımlayan parametreleri vardır.
- **[AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield)** , otomatik olarak artan özel bir türdür *IntegerField*. Açıkça belirtmediğiniz takdirde, modelinize otomatik olarak bu türden birincil anahtar eklenir.
- **[ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey)**, başka bir veritabanı modeliyle bire çok ilişkiyi belirtmek için kullanılır (örneğin, bir arabanın bir üreticisi vardır, ancak bir üretici birçok araba üretebilir). İlişkinin "bir" tarafı, "anahtarı" içeren modeldir (bu "anahtara" atıfta bulunan bir "yabancı anahtar" içeren modeller, bu tür bir ilişkinin "çok" tarafındadır).
- **[ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield)**, çoktan çoğa ilişkiyi belirtmek için kullanılır (örneğin, bir kitabın birden fazla türü olabilir ve her tür birden fazla kitap içerebilir). Kütüphane uygulamamızda bunları çok benzer şekilde kullanacağız *ForeignKeys*, ancak gruplar arasındaki ilişkileri tanımlamak için daha karmaşık şekillerde de kullanılabilirler. Bunların, *on_delete* ilişkili kayıt silindiğinde ne olacağını tanımlayan bir parametresi vardır (örneğin, değeri *models.SET_NULL* olarak ayarlanır *NULL*).

**Meta Veriler**
*class Meta* Modeliniz için model düzeyinde meta verileri , gösterildiği gibi tanımlayarak belirtebilirsiniz .

```PYTHON
class Meta:
    ordering = ['-my_field_name']
```

Bu meta verilerin en kullanışlı özelliklerinden biri, model türünü sorguladığınızda döndürülen kayıtların varsayılan sıralamasınıordering kontrol etmektir. Bunu , yukarıda gösterildiği gibi, özniteliğe ait alan adları listesinde eşleşme sırasını belirterek yaparsınız. Sıralama, alan türüne bağlı olacaktır (karakter alanları alfabetik olarak, tarih alanları ise kronolojik olarak sıralanır). Yukarıda gösterildiği gibi, sıralama düzenini tersine çevirmek için alan adının başına eksi sembolü (-) ekleyebilirsiniz.

Örneğin, kitapları varsayılan olarak şu şekilde sıralamayı seçersek:

```PYTHON
ordering = ['title', '-publish_date']
```

Kitaplar, başlıklarına göre alfabetik olarak (AZ'den başlayarak) ve ardından her başlık içinde yayın tarihine göre (en yeniden en eskiye doğru) sıralanacaktır.

Bir diğer yaygın özellik ise verbose_name, sınıfın tekil ve çoğul hali için kullanılan uzun bir isim olmasıdır:

```PYTHON
verbose_name = 'BetterName'
```

Sınıf meta verileri, model için yeni "erişim izinleri" oluşturmak ve uygulamak (varsayılan izinler otomatik olarak uygulanır), başka bir alana göre sıralamaya izin vermek, saklanabilecek verilerin olası değerleri üzerinde kısıtlamalar tanımlamak veya sınıfın "soyut" olduğunu (kayıt oluşturamayacağınız ve bunun yerine diğer modelleri oluşturmak için türetilecek bir temel sınıf) bildirmek için kullanılabilir.

Diğer meta veri seçeneklerinin çoğu, model için hangi veritabanının kullanılacağını ve verilerin nasıl saklanacağını kontrol eder (bunlar yalnızca bir modeli mevcut bir veritabanına eşlemeniz gerektiğinde gerçekten faydalıdır).


**Yöntemler**
Bir modelin yöntemleri de olabilir.

*__str__()* En azından, her modelde her nesne için insan tarafından okunabilir bir dize döndüren standart Python sınıf yöntemini tanımlamalısınız . Bu dize, yönetim sitesinde (ve bir model örneğine başvurmanız gereken her yerde) ayrı kayıtları temsil etmek için kullanılır. Genellikle bu, modelden bir başlık veya ad alanı döndürür.

```PYTHON
def __str__(self):
    return self.my_field_name
```

Django modellerine dahil edilebilecek bir diğer yaygın yöntem ise `<model>` yöntemidir *get_absolute_url()*; bu yöntem, web sitesinde tek tek model kayıtlarını görüntülemek için bir URL döndürür (bu yöntemi tanımlarsanız, Django otomatik olarak Yönetici sitesindeki modelin kayıt düzenleme ekranlarına "Sitede Görüntüle" düğmesini ekler). `<model>` için tipik bir örnek *get_absolute_url()* aşağıda gösterilmiştir.

```PYTHON
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

Ayrıca dilediğiniz diğer yöntemleri de tanımlayabilir ve bunları kodunuzdan veya şablonlarınızdan çağırabilirsiniz (parametre almamaları şartıyla).

**Model yönetimi**
Model sınıflarınızı tanımladıktan sonra, bunları kullanarak kayıt oluşturabilir, güncelleyebilir veya silebilir ve tüm kayıtları veya kayıtların belirli alt kümelerini almak için sorgular çalıştırabilirsiniz. Görünümlerimizi tanımladığımız eğitimde bunu nasıl yapacağınızı göstereceğiz, ancak işte kısa bir özet.

*Kayıt oluşturma ve değiştirme*
Kayıt oluşturmak için modelin bir örneğini tanımlayabilir ve ardından . yöntemini çağırabilirsiniz *save().*

```PYTHON
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```
Bu yeni kayıttaki alanlara nokta sözdizimini kullanarak erişebilir ve değerleri değiştirebilirsiniz. *save()* Değiştirilen değerleri veritabanına kaydetmek için ilgili fonksiyonu çağırmanız gerekmektedir.

```PYTHON
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

**Kayıtları aramak**
*objects* Modelin özniteliğini (temel sınıf tarafından sağlanan) kullanarak belirli kriterlere uyan kayıtları arayabilirsiniz .

*QuerySet* Bir modelin tüm kayıtlarını , kullanarak bir nesne olarak elde edebiliriz *objects.all()*. Bu *QuerySet* nesne yinelenebilir bir nesnedir; yani, üzerinde yineleme/döngü yapabileceğimiz bir dizi nesne içerir.

```PYTHON
all_books = Book.objects.all()
```

Django'nun bu yöntemi, döndürülen verileri belirli kriterlere göre belirtilen metin veya sayısal alanlarla eşleşecek şekilde *filter()* filtrelememizi sağlar . Örneğin, başlığında "wild" kelimesi geçen kitapları filtrelemek ve ardından bunları saymak için aşağıdaki gibi bir işlem yapabiliriz:*QuerySet*

```PYTHON
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Eşleştirilecek alanlar ve eşleştirme türü, filtre parametre adında şu format kullanılarak tanımlanır: *field_name__match_type*( ve üstündeki çift alt çizgiye dikkat edin ). Yukarıda büyük/küçük harf duyarlı eşleştirme ile filtreleme yapıyoruz . Yapabileceğiniz birçok başka eşleştirme türü de vardır: (büyük/küçük harf duyarsız), (büyük/küçük harf duyarsız tam eşleştirme), (büyük/küçük harf duyarlı tam eşleştirme) ve , (büyüktür) .

Bazı durumlarda, başka bir modelle bire çok ilişki tanımlayan bir alana göre filtreleme yapmanız gerekebilir (örneğin, bir ). Bu durumda, ilgili model içindeki alanlara ek çift alt çizgi kullanarak "indeks" yapabilirsiniz. Örneğin, belirli bir tür kalıbına sahip kitapları filtrelemek için, aşağıdaki gibi alan aracılığıyla *ForeignKey* modeline indeksleme yapmanız gerekecektir :*name genre*

```PYTHON
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

**Yerel Kütüphane Modellerinin Tanımlanması**
Bu bölümde kütüphane için modelleri tanımlamaya başlayacağız. *models.py*(/django-locallibrary-tutorial/catalog/) dosyasını açın. Sayfanın üst kısmındaki şablon, modellerimizin miras alacağı model temel sınıfını içeren models modülünü içe aktarır.*models.Model*

```PYTHON
from django.db import models

# Create your models here.
```

**Tür modeli**
Aşağıda gösterilen model kodunu kopyalayın *Genre* ve dosyanızın sonuna yapıştırın *models.py*. Bu model, kitap kategorisi hakkında bilgi depolamak için kullanılır; örneğin, kurgu mu kurgu dışı mı, aşk romanı mı askeri tarih mi vb. Yukarıda belirtildiği gibi, olası değerlerin sabit kodlanmak yerine veritabanı üzerinden yönetilebilmesi için türü serbest metin veya seçim listesi yerine model olarak oluşturduk.

```PYTHON
from django.urls import reverse # Used in get_absolute_url() to get URL for specified ID

from django.db.models import UniqueConstraint # Constrains fields to unique values
from django.db.models.functions import Lower # Returns lower cased value of field

class Genre(models.Model):
    """Model representing a book genre."""
    name = models.CharField(
        max_length=200,
        unique=True,
        help_text="Enter a book genre (e.g. Science Fiction, French Poetry etc.)"
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.name

    def get_absolute_url(self):
        """Returns the url to access a particular genre instance."""
        return reverse('genre-detail', args=[str(self.id)])

    class Meta:
        constraints = [
            UniqueConstraint(
                Lower('name'),
                name='genre_name_case_insensitive_unique',
                violation_error_message = "Genre already exists (case-insensitive match)"
            ),
        ]
```

Modelde , türü tanımlamak için kullanılan tek bir *CharField* alan ( ) bulunmaktadır (bu alan 200 karakterle sınırlıdır ve bazı sınırlamaları vardır). Her tür için yalnızca bir kayıt olması gerektiğinden, bu alanı benzersiz ( ) olarak ayarladık .*name help_text unique=True*

*__str__()*Alanın ardından, belirli bir kayıt tarafından tanımlanan türün adını döndüren bir yöntem tanımlıyoruz . Ayrıntılı bir ad tanımlanmadığı için,* Name* formlarda kullanıldığında alan etiketi kullanılacaktır. Daha sonra, bu model için ayrıntılı bir kayda erişmek için kullanılabilecek bir URL döndüren yöntemi tanımlıyoruz (bunun çalışması için, adı olan bir URL eşlemesi tanımlamamız ve ilgili bir görünüm ve şablon tanımlamamız *get_absolute_url()*gerekecektir ).*genre-detail*

*unique=True* Yukarıdaki alanda yapılan ayar, tam olarak aynı ada sahip türlerin oluşturulmasını engeller, ancak "fantasy", "Fantasy" veya hatta "FaNtAsY" gibi varyasyonları engellemez. Model tanımının son kısmı, *constraints* modelin meta verilerindeki bir seçeneği kullanarak , alandaki değerin küçük harfle yazılmış halinin *name* veritabanında benzersiz olması gerektiğini belirtir ve *violation_error_message* benzersiz değilse dizeyi görüntüler. Burada başka bir şey yapmamıza gerek yok, ancak bir alana veya alanlara karşı birden fazla kısıtlama tanımlayabilirsiniz. Daha fazla bilgi için Kısıtlamalar referansına bakın *UniqueConstraint()*(ve *Lower()*).

**Kitap modeli**
Aşağıdaki modeli kopyalayın *Book* ve dosyanızın en altına tekrar yapıştırın. *Book* Model, genel anlamda ödünç alınabilecek bir kitap hakkındaki tüm bilgileri temsil eder, ancak belirli bir fiziksel "örneği" veya "kopyayı" temsil etmez.

Model, *CharField* kitabın adını *title* ve türünü temsil etmek için bir değişken kullanır *isbn*. Örneğin *isbn*, ilk isimsiz parametrenin etiketi açıkça "ISBN" olarak ayarladığını (aksi takdirde varsayılan olarak "Isbn" olurdu) fark edin. Ayrıca, tüm kitapların benzersiz bir ISBN'ye sahip olmasını sağlamak *unique* için parametreyi de benzersiz olarak ayarladık *True*(benzersiz parametre, alan değerini tabloda küresel olarak benzersiz kılar). *isbn*(ve tür adı) için olduğu gibi, *title* farklı kitapların aynı isme sahip olması mümkün olduğundan, benzersiz olarak ayarlanmamıştır. Model, bu metnin oldukça uzun olması gerekebileceğinden, *TextField* için kullanır.*summary*

```PYTHON
class Book(models.Model):
    """Model representing a book (but not a specific copy of a book)."""
    title = models.CharField(max_length=200)
    author = models.ForeignKey('Author', on_delete=models.RESTRICT, null=True)
    # Foreign Key used because book can only have one author, but authors can have multiple books.
    # Author as a string rather than object because it hasn't been declared yet in file.

    summary = models.TextField(
        max_length=1000, help_text="Enter a brief description of the book")
    isbn = models.CharField('ISBN', max_length=13,
                            unique=True,
                            help_text='13 Character <a href="https://www.isbn-international.org/content/what-isbn'
                                      '">ISBN number</a>')

    # ManyToManyField used because genre can contain many books. Books can cover many genres.
    # Genre class has already been defined so we can specify the object above.
    genre = models.ManyToManyField(
        Genre, help_text="Select a genre for this book")

    def __str__(self):
        """String for representing the Model object."""
        return self.title

    def get_absolute_url(self):
        """Returns the URL to access a detail record for this book."""
        return reverse('book-detail', args=[str(self.id)])
```

Tür *ManyToManyField*, bir kitap birden fazla türe sahip olabilir ve bir tür de birçok kitaba sahip olabilir. Yazar, yazar olarak tanımlanmıştır *ForeignKey*, bu nedenle her kitabın yalnızca bir yazarı olacaktır, ancak bir yazarın birçok kitabı olabilir (pratikte bir kitabın birden fazla yazarı olabilir, ancak bu uygulamada böyle değildir!).

Her iki alan türünde de ilgili model sınıfı, model sınıfı veya ilgili modelin adını içeren bir dize kullanılarak ilk isimsiz parametre olarak belirtilir. İlişkili sınıf bu dosyada henüz tanımlanmamışsa, referans verilmeden önce modelin adını bir dize olarak kullanmalısınız! Alandaki diğer önemli parametreler *author* şunlardır: yazar seçilmediyse *null=True* veritabanının bir değer saklamasına olanak tanıyan ve herhangi bir kitap tarafından referans verilmesi durumunda kitabın ilişkili yazarının silinmesini önleyecek olan parametreler.*Null on_delete=models.RESTRICT*

Model ayrıca *__str__()*, bir kaydı temsil etmek için kitabın *title* alanını kullanarak tanımlar Book. Son yöntem, *get_absolute_url()* bu model için bir detay kaydına erişmek için kullanılabilecek bir URL döndürür (adı olan bir URL eşlemesi tanımlamamız *book-detail* ve ilgili bir görünüm ve şablon tanımlamamız gerekecek).

**BookInstance modeli**
Ardından, *BookInstance* modeli (aşağıda gösterilmiştir) diğer modellerin altına kopyalayın. Bu model, *BookInstance* birinin ödünç alabileceği bir kitabın belirli bir kopyasını temsil eder ve kopyanın mevcut olup olmadığı veya ne zaman iade edilmesinin beklendiği, "baskı" veya sürüm ayrıntıları ve kütüphanedeki kitap için benzersiz bir kimlik numarası hakkında bilgi içerir.

Bazı alanlar ve yöntemler artık size tanıdık gelecektir. Model şunları kullanır:

- *ForeignKey* İlgili nesneyi tanımlamak için *Book*(her kitabın birçok kopyası olabilir, ancak bir kopyanın yalnızca bir kopyası olabilir *Book*). Anahtar, nesnenin bir nesne tarafından referans edildiği sürece silinememesini *on_delete=models.RESTRICT* sağlamak için belirtilir .*Book BookInstance*
- *CharField* Kitabın basılı versiyonunu (belirli yayınını) temsil etmek için.

```PYTHON
import uuid # Required for unique book instances

class BookInstance(models.Model):

    """Model representing a specific copy of a book (i.e. that can be borrowed from the library)."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,
                          help_text="Unique ID for this particular book across whole library")
    book = models.ForeignKey('Book', on_delete=models.RESTRICT, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    LOAN_STATUS = (
        ('m', 'Maintenance'),
        ('o', 'On loan'),
        ('a', 'Available'),
        ('r', 'Reserved'),
    )

    status = models.CharField(
        max_length=1,
        choices=LOAN_STATUS,
        blank=True,
        default='m',
        help_text='Book availability',
    )

    class Meta:
        ordering = ['due_back']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.book.title})'
```

Ayrıca birkaç yeni alan türü daha ilan ediyoruz:

- *UUIDFieldid* Bu alan, bu model için benzersiz bir değer olarak ayarlanması amacıyla kullanılır *primary_key*. Bu alan türü, her örnek için (kütüphanede bulabileceğiniz her kitap için bir tane) küresel olarak benzersiz bir değer atar.
- *DateFielddue_back* Bu alan, kitabın ödünç alındıktan veya bakıma alındıktan sonra ne zaman kullanıma hazır hale geleceğinin beklendiği tarihi belirtmek için kullanılır . Bu değer *blank* veya olabilir *null*(kitabın ne zaman kullanıma hazır olacağı için gereklidir). Model meta verileri ( *Class Meta*) bu alanı, sorguda döndürüldüklerinde kayıtları sıralamak için kullanır.
- *status* Bu, bir seçim/seçim listesi tanımlayan bir *CharField* yapıdır. Gördüğünüz gibi, anahtar-değer çiftlerinden oluşan demetler içeren bir demet tanımlıyoruz ve bunu `choices` argümanına iletiyoruz. Anahtar/değer çiftindeki değer, kullanıcının seçebileceği bir görüntüleme değeridir, anahtarlar ise seçenek seçildiğinde gerçekten kaydedilen değerlerdir. Ayrıca, kitaplar raflara yerleştirilmeden önce başlangıçta kullanılamaz olarak oluşturulacağı için varsayılan değer olarak 'm' (bakım) belirledik.

Bu yöntem, nesneyi benzersiz kimliği ve ilişkili başlığının bir kombinasyonunu kullanarak* __str__()* temsil eder .*BookInstanceBook*

**Yazar modeli**
Aşağıda gösterilen modeli models.py *Author* dosyasındaki mevcut kodun altına kopyalayın .

```PYTHON
class Author(models.Model):
    """Model representing an author."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    class Meta:
        ordering = ['last_name', 'first_name']

    def get_absolute_url(self):
        """Returns the URL to access a particular author instance."""
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.last_name}, {self.first_name}'
```

Artık tüm alanlar/metotlar tanıdık gelmeli. Model, bir yazarın adını, soyadını ve doğum ve ölüm tarihlerini (her ikisi de isteğe bağlı) içerdiğini tanımlar. Varsayılan olarak* __str__()* adı soyadı , adı sırasına göre döndürdüğünü belirtir. Metot, bireysel bir yazarı görüntülemek için URL'yi almak üzere URL eşlemesini *get_absolute_url()* tersine çevirir .*author-detail*

**Veritabanı geçişlerini yeniden çalıştırın.**
Tüm modelleriniz artık oluşturuldu. Şimdi bunları veritabanınıza eklemek için veritabanı geçişlerini yeniden çalıştırın.

```BASH
python3 manage.py makemigrations
python3 manage.py migrate
```

**Dil modeli — zorluk**
Yerel bir hayırseverin başka bir dilde (örneğin Farsça) yazılmış bir dizi yeni kitap bağışladığını hayal edin. Buradaki zorluk, bunların kütüphane web sitemizde en iyi nasıl temsil edileceğini bulmak ve ardından bunları modellere eklemektir.

Dikkate alınması gereken bazı noktalar:

- *Book* "Dil" bir , *BookInstance*, veya başka bir nesneyle mi ilişkilendirilmelidir ?
- Farklı diller model, serbest metin alanı veya önceden tanımlanmış bir seçim listesi kullanılarak mı temsil edilmelidir?
  
Modelinizde bir değişiklik yaptıktan sonra, değişikliklerin eklenmesi için veritabanı geçişlerini yeniden çalıştırmanız gerektiğini unutmayın.

```BASH
python3 manage.py makemigrations
python3 manage.py migrate
```

## Django Eğitimi Bölüm 4: Django Yönetici Sitesi
LocalLibrary web sitesi için modeller oluşturduktan sonra , Django Admin sitesini kullanarak bazı "gerçek" kitap verileri ekleyeceğiz. Öncelikle, modelleri admin sitesine nasıl kaydedeceğinizi, ardından nasıl giriş yapacağınızı ve bazı veriler oluşturacağınızı göstereceğiz. Son olarak, admin sitesinin sunumunu daha da iyileştirebileceğiniz bazı yolları göstereceğiz.

**Modelleri kaydetme**
Öncelikle, katalog uygulamasındaki admin.py dosyasını açın ( /django-locallibrary-tutorial/catalog/admin.py ). Şu anki hali şöyle görünüyor — zaten şu modülleri içe aktardığına dikkat edin *django.contrib.admin*:

```PYTHON
from django.contrib import admin

# Register your models here.
```

Aşağıdaki metni dosyanın sonuna kopyalayarak modelleri kaydedin. Bu kod modelleri içe aktarır ve ardından *admin.site.register* her birini kaydetmek için gerekli işlemleri yapar.

```PYTHON
from .models import Author, Genre, Book, BookInstance, Language

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
admin.site.register(Language)
```

Bu, siteye bir veya daha fazla model kaydetmenin en basit yoludur. Yönetici sitesi oldukça özelleştirilebilir ve modellerinizi kaydetmenin diğer yollarından daha sonra bahsedeceğiz.

**Süper kullanıcı oluşturma**
Yönetici sitesine giriş yapmak için, Personel statüsü etkinleştirilmiş bir kullanıcı hesabına ihtiyacımız var. Kayıtları görüntülemek ve oluşturmak için de bu kullanıcının tüm nesnelerimizi yönetme iznine sahip olması gerekiyor. manage.py dosyasını kullanarak siteye tam erişime ve gerekli tüm izinlere sahip bir "süper kullanıcı" hesabı oluşturabilirsiniz .

manage.py dosyasının bulunduğu aynı dizinde aşağıdaki komutu çalıştırarak süper kullanıcı oluşturun. Kullanıcı adı, e-posta adresi ve güçlü bir parola girmeniz istenecektir .

```BASH
python3 manage.py createsuperuser
```

Bu komut tamamlandığında veritabanına yeni bir süper kullanıcı eklenmiş olacaktır. Şimdi oturum açma işlemini test edebilmek için geliştirme sunucusunu yeniden başlatalım:

```BASH
python3 manage.py runserver
```

**Siteye giriş yapma ve siteyi kullanma**
Siteye giriş yapmak için /admin URL'sini (örneğin, ) açın ve yeni süper kullanıcı kullanıcı kimliğinizi ve parola bilgilerinizi girin ( giriş *http://127.0.0.1:8000/admin* sayfasına yönlendirileceksiniz ve bilgilerinizi girdikten sonra tekrar /admin URL'sine geri döneceksiniz).

Sitenin bu bölümü, kurulu uygulamaya göre gruplandırılmış tüm modellerimizi gösterir. Bir model adına tıklayarak, o modelle ilişkili tüm kayıtların listelendiği bir ekrana gidebilir ve bu kayıtlara tıklayarak düzenleme yapabilirsiniz. Ayrıca, her modelin yanındaki Ekle bağlantısına doğrudan tıklayarak o türde bir kayıt oluşturmaya başlayabilirsiniz.

![Test](./assets/11-print.png)

Yeni bir kitap oluşturmak için Kitaplar'ın sağındaki Ekle bağlantısına tıklayın (bu, aşağıdaki gibi bir iletişim kutusu görüntüleyecektir). Her alanın başlıklarının, kullanılan widget türünün ve (varsa) modelde belirttiğiniz değerlerle nasıl eşleştiğine dikkat edin.*help_text*

Alanlar için değerler girin. İlgili alanların yanındaki + düğmesine basarak yeni yazarlar veya türler oluşturabilirsiniz (veya daha önce oluşturduysanız listelerden mevcut değerleri seçebilirsiniz). İşiniz bittiğinde, kaydı kaydetmek için KAYDET , Kaydet ve başka bir tane ekle veya Kaydet ve düzenlemeye devam et seçeneklerinden birini kullanabilirsiniz.

![Test](./assets/12-print.png)

Kitap eklemeyi bitirdiğinizde, ana yönetici sayfasına geri dönmek için üstteki yer imindeki Ana Sayfa bağlantısına tıklayın. Ardından, mevcut kitap listesini görüntülemek için Kitaplar *__str__()* bağlantısına (veya diğer model listelerini görmek için diğer bağlantılardan birine) tıklayın. Birkaç kitap ekledikten sonra, liste aşağıdaki ekran görüntüsüne benzer görünebilir. Her kitabın başlığı görüntülenir; bu , önceki yazıda belirttiğimiz Kitap modelinin yönteminde döndürülen değerdir .

![Test](./assets/13-print.png)

Bu listeden, silmek istediğiniz kitabın yanındaki onay kutusunu işaretleyerek, İşlem açılır listesinden sil seçeneğini belirleyerek ve ardından Git düğmesine basarak kitapları silebilirsiniz. Ayrıca KİTAP EKLE düğmesine basarak yeni kitaplar da ekleyebilirsiniz .

Bağlantıdaki adını seçerek bir kitabı düzenleyebilirsiniz. Aşağıda gösterilen kitap düzenleme sayfası, "Ekle" sayfasına neredeyse tamamen benzemektedir. Ana farklılıklar sayfa başlığı ( Kitabı Değiştir ) ve Sil , GEÇMİŞ ve SİTEDE GÖRÜNTÜLE düğmelerinin eklenmesidir (bu son düğme *get_absolute_url()*, modelimizde yöntemi tanımladığımız için görünmektedir ).

![Test](./assets/14-print.png)

Şimdi ( yol izleme çubuğundaki Ana Sayfa bağlantısını kullanarak ) Ana Sayfaya geri dönün ve ardından Yazar ve Tür listelerini görüntüleyin; yeni kitapları eklediğinizde zaten oldukça fazla liste oluşturulmuş olmalı, ancak dilediğiniz kadar daha ekleyebilirsiniz.

Kitaplardan oluşturulmadıkları için Kitap Örneklerine sahip olmayacaksınız (ancak *Book* bir kitaptan bir örnek oluşturabilirsiniz *BookInstance-* bu alanın doğası gereğidir ). Ana *ForeignKey* sayfaya geri dönün ve aşağıdaki Kitap örneği ekleme ekranını görüntülemek için ilgili Ekle düğmesine basın . Kütüphanedeki bir kitabın tek bir kopyasını ayrı ayrı tanımlamak için kullanılabilen büyük, küresel olarak benzersiz Kimliği not edin.

![Test](./assets/15-print.png)

Kitaplarınızın her biri için bu kayıtlardan birkaç tane oluşturun. En azından bazı kayıtlar için durumu "Mevcut" , diğerleri için ise "Ödünç Verildi" olarak ayarlayın . Durum " Mevcut" değilse , ayrıca gelecekteki bir iade tarihini de belirleyin.

İşte bu kadar! Yönetim sitesini nasıl kuracağınızı ve kullanacağınızı öğrendiniz. Ayrıca, kendi görünümlerimizi ve şablonlarımızı oluşturduğumuzda kullanabileceğimiz *Book*, *BookInstance*, *Genre*, *Language* ve için kayıtlar da oluşturdunuz.*Author*

**Gelişmiş yapılandırma**
Django, kayıtlı modellerden gelen bilgileri kullanarak temel bir yönetim sitesi oluşturma konusunda oldukça iyi bir iş çıkarıyor:

- Her model, modelin yöntemiyle oluşturulan dizeyle tanımlanan *__str__()* ve düzenleme için detay görünümlerine/formlarına bağlı olan ayrı ayrı kayıtların bir listesine sahiptir. Varsayılan olarak, bu görünümün üst kısmında, kayıtlarda toplu silme işlemleri gerçekleştirmek için kullanabileceğiniz bir işlem menüsü bulunur.
- Kayıtları düzenlemek ve eklemek için kullanılan model detay kayıt formları, modeldeki tüm alanları, beyan sırasına göre dikey olarak düzenlenmiş şekilde içerir.
Arayüzü daha da özelleştirerek kullanımını daha da kolaylaştırabilirsiniz. Yapabileceğiniz şeylerden bazıları şunlardır:

- *Liste görünümleri:*

1\.Her kayıt için görüntülenen ek alanlar/bilgiler ekleyin.
2\.Listelenecek kayıtları tarih veya başka bir seçim değerine (örneğin, kitap ödünç alma durumu) göre belirlemek için filtreler ekleyin.
3\.Liste görünümlerindeki işlem menüsüne ek seçenekler ekleyin ve bu menünün formda nerede görüntüleneceğini seçin.

- *Detaylı görünümler*

1\.Görüntülenecek (veya hariç tutulacak) alanları, sıralarını, gruplandırmalarını, düzenlenebilir olup olmadıklarını, kullanılan widget'ı, yönlendirmeyi vb. seçin.
2\.Kayda ilgili alanlar ekleyerek satır içi düzenlemeye olanak tanıyın (örneğin, yazar kaydını oluştururken kitap kayıtlarını ekleme ve düzenleme özelliği ekleyin).

Bu bölümde, LocalLibrary arayüzümüzü iyileştirecek birkaç değişikliğe bakacağız ; bunlar arasında *Book* model listelerine daha fazla bilgi eklemek ve düzenleme görünümlerinin düzenini iyileştirmek yer alıyor. ve modellerinin sunumunu *Author* değiştirmeyeceğiz çünkü her birinde yalnızca bir alan var, bu nedenle bunu yapmanın gerçek bir faydası yok!*Language Genre*

**ModelAdmin sınıfını kaydedin**
Bir modelin yönetim arayüzünde nasıl görüntüleneceğini değiştirmek için, düzeni tanımlayan bir ModelAdmin sınıfı tanımlar ve bunu modelle birlikte kaydedersiniz.

Öncelikle modelle başlayalım *Author*. Katalog uygulamasındaki *admin.py* dosyasını açın ( /django-locallibrary-tutorial/catalog/admin.py ). Model için orijinal kaydınızı yorum satırı haline getirin (başına # işareti koyun) *Author*:

```PYTHON
# admin.site.register(Author)
```

Şimdi *AuthorAdmin* aşağıda gösterildiği gibi yeni bir kayıt ekleyin.

```PYTHON
# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
```

Şimdi , ve *ModelAdmin* için sınıflar ekleyeceğiz . Orijinal kayıtları tekrar yorum satırı haline getirmemiz gerekiyor:*Book* *BookInstance*

```PYTHON
# admin.site.register(Book)
# admin.site.register(BookInstance)
```

Şimdi yeni modelleri oluşturup kaydetmeye geçelim; bu gösterim amacıyla, *@register* modelleri kaydetmek için dekoratörü kullanacağız (bu, sözdizimiyle tamamen aynı şeyi yapar *admin.site.register())*:

```PYTHON
# Register the Admin classes for Book using the decorator
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    pass

# Register the Admin classes for BookInstance using the decorator
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    pass
```

Şu anda tüm yönetici sınıflarımız boş, bu nedenle yönetici davranışı değişmeyecek! Artık bunları genişleterek modele özgü yönetici davranışımızı tanımlayabiliriz.

**Liste görünümlerini yapılandırın**
LocalLibrary şu anda model yönteminden oluşturulan nesne adını kullanarak tüm yazarları listeliyor . Bu ,*__str__()* yalnızca birkaç yazarınız olduğunda sorun değil, ancak çok sayıda yazarınız olduğunda mükerrer kayıtlar oluşabilir.

Sınıfınızı aşağıdaki kodla değiştirin *AuthorAdmin*. Listede görüntülenecek alan adları, gösterildiği gibi gerekli sırada bir demet içinde tanımlanmıştır (bunlar orijinal modelinizde belirtilen adlarla aynıdır).

```PYTHON
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Şimdi web sitenizdeki yazar listesine gidin. Yukarıdaki alanlar artık şu şekilde görüntülenmelidir:

![Test](./assets/16-print.png)


Modelimiz için ayrıca ve *Book* değerlerini de göstereceğiz . bir alan (bire çok) ilişkisidir ve bu nedenle ilgili kaydın değeriyle temsil edilecektir. Sınıfı aşağıdaki sürümle değiştirin.*author genre author ForeignKey__str__() BookAdmin*

```PYTHON
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

*genre* Maalesef, bu alan *list_display* bir tür olduğu için doğrudan belirtemiyoruz *ManyToManyField* (Django bunu engelliyor çünkü bunu yapmak büyük bir veritabanı erişim "maliyetine" yol açacaktır). Bunun yerine, bilgiyi bir dize olarak almak için bir fonksiyon tanımlayacağız *display_genre*(yukarıda çağırdığımız fonksiyon bu; aşağıda tanımlayacağız).


Aşağıdaki kodu modelinize *Book*( models.py ) ekleyin. Bu, alanın ilk üç değerinden *genre*(varsa) bir dize oluşturur ve *short_description* bu yöntem için yönetici sitesinde kullanılabilecek bir nesne oluşturur.

```PYTHON
def display_genre(self):
    """Create a string for the Genre. This is required to display genre in Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Genre'
```

Modeli kaydettikten ve admin panelini güncelledikten sonra, web sitenizi açın ve Kitaplar listesi sayfasına gidin; aşağıdaki gibi bir kitap listesi görmelisiniz:

![Test](./assets/17-print.png)


Modelin *Genre*(ve *Language* eğer tanımladıysanız diğer modelin) her ikisi de tek bir alana sahip olduğundan, ek alanları görüntülemek için ek bir model oluşturmanın bir anlamı yoktur.

**Liste filtreleri ekle**
Listenizde çok sayıda öğe olduğunda, hangi öğelerin görüntüleneceğini filtreleyebilmek faydalı olabilir. Bu, öznitelikte alanları listeleyerek yapılır *list_filter*. Mevcut *BookInstanceAdmin* sınıfınızı aşağıdaki kod parçasıyla değiştirin.

```PYTHON
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

Liste görünümünde artık sağda bir filtre kutusu yer alacak. Tarihleri ​​ve durumları seçerek değerleri nasıl filtreleyebileceğinize dikkat edin:

![Test](./assets/18-print.png)

**Detay görünüm düzenini organize et**  

Varsayılan olarak, detay görünümleri tüm alanları modeldeki tanımlanma sırasına göre dikey olarak düzenler. Tanımlanma sırasını, hangi alanların görüntüleneceğini (veya hariç tutulacağını), bilgileri düzenlemek için bölümlerin kullanılıp kullanılmadığını, alanların yatay mı yoksa dikey mi görüntüleneceğini ve hatta yönetim formlarında hangi düzenleme araçlarının kullanılacağını değiştirebilirsiniz.


**Hangi alanların görüntüleneceğini ve düzenleneceğini kontrol etme**
Sınıfınıza aşağıdaki gibi bir satır *AuthorAdmin* ekleyerek güncelleyin :*fields*

```PYTHON
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

Bu *fields* özellik, formda görüntülenecek alanları sırayla listeler. Alanlar varsayılan olarak dikey olarak görüntülenir, ancak bunları bir demet halinde gruplandırırsanız (yukarıdaki "tarih" alanlarında gösterildiği gibi) yatay olarak görüntülenirler.

Web sitenizde yazar detay görünümüne gidin; artık aşağıdaki gibi görünmelidir:

![Test](./assets/19-print.png)

**Detaylı görünümün kesitlendirilmesi**
Modelde, *BookInstance* kitabın ne olduğuna (yani, *name*, *imprint*, ve *id*) ve ne zaman satışa sunulacağına ( *status*, ) ilişkin bilgiler bulunmaktadır. Bu bilgileri , aşağıdaki gibi, özelliğini kullanarak sınıfımıza *due_back* ekleyebiliriz .*BookInstanceAdmin fieldsets*

```PYTHON
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book', 'imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back')
        }),
    )
 ```

Her bölümün kendi başlığı (veya *None* başlık istemiyorsanız boş bir başlık) ve bir sözlükte yer alan ilgili alanlar demeti vardır; formatı açıklamak karmaşık olsa da, hemen yukarıdaki kod parçasına bakarsanız anlaması oldukça kolaydır.

Şimdi web sitenizdeki bir kitap örneği görünümüne gidin; form aşağıdaki gibi görünmelidir:

![Test](./assets/20-print.png)


**İlişkili kayıtların satır içi düzenlenmesi**
Bazen, ilişkili kayıtları aynı anda ekleyebilmek mantıklı olabilir. Örneğin, hem kitap bilgilerini hem de sahip olduğunuz belirli kopyalar hakkındaki bilgileri aynı detay sayfasında bulundurmak mantıklı olabilir.

Bunu, TabularInline (yatay düzen) veya StackedInline (dikey düzen, varsayılan model düzeni gibi) türünde satır içi öğeler tanımlayarak yapabilirsiniz . Ayrıntılara satır içi bilgi eklemek için şunu belirtebilirsiniz :*BookInstance* Book inlines BookAdmin*

```PYTHON
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

    inlines = [BooksInstanceInline]
```

Şimdi web sitenizdeki bir görünüme gidin *Book*; sayfanın en altında, bu kitapla ilgili kitap örneklerini (kitabın tür alanlarının hemen altında) görmelisiniz.

![Test](./assets/21-print.png)


Bu durumda yaptığımız tek şey, satır içi modeldeki tüm alanları ekleyen tablo şeklinde satır içi sınıfımızı tanımlamak oldu. Düzen için, görüntülenecek alanlar, sıraları, salt okunur olup olmadıkları vb. dahil olmak üzere her türlü ek bilgiyi belirtebilirsiniz.


## Django Eğitimi Bölüm 5: Ana Sayfamızı Oluşturma
Şimdi ilk tam sayfamızı, yani LocalLibrary web sitesinin ana sayfasını görüntüleyen kodu eklemeye hazırız . Ana sayfa, her model türü için sahip olduğumuz kayıt sayısını gösterecek ve diğer sayfalarımıza yönlendiren yan menü bağlantıları sağlayacaktır. Bu süreçte, temel URL eşlemeleri ve görünümleri yazma, veritabanından kayıt alma ve şablon kullanma konusunda pratik deneyim kazanacağız.

**Genel Bakış**
Modellerimizi tanımladıktan ve üzerinde çalışacağımız bazı başlangıç ​​kütüphane kayıtlarını oluşturduktan sonra, bu bilgileri kullanıcılara sunacak kodu yazmanın zamanı geldi. İlk yapmamız gereken şey, sayfalarımızda hangi bilgileri görüntülemek istediğimizi belirlemek ve bu kaynakları döndürmek için kullanılacak URL'leri tanımlamaktır. Ardından, sayfaları görüntülemek için bir URL eşleyici, görünümler ve şablonlar oluşturacağız.

Aşağıdaki diyagram, ana veri akışını ve HTTP istekleri ve yanıtlarını işlerken gereken bileşenleri açıklamaktadır. Modeli zaten uyguladığımız için, oluşturacağımız ana bileşenler şunlardır:

- URL eşleyiciler, desteklenen URL'leri (ve URL'lerde kodlanmış herhangi bir bilgiyi) uygun görüntüleme işlevlerine iletmek için kullanılır.
- Modellerden istenen verileri almak, verileri görüntüleyen HTML sayfaları oluşturmak ve bu sayfaları kullanıcının tarayıcıda görüntülemesi için geri göndermek üzere işlevleri inceleyin.
- Görünümlerde veri işlenirken kullanılacak şablonlar.

![Test](./assets/22-print.png)

**Kaynak URL'lerinin tanımlanması**
LocalLibrary'nin bu sürümü son kullanıcılar için esasen salt okunur olduğundan , site için yalnızca bir giriş sayfası (ana sayfa) ve kitaplar ile yazarlar için liste ve detay görünümlerini gösteren sayfalar sağlamamız gerekiyor .

Sayfalarımız için ihtiyacımız olacak URL'ler şunlardır:

- *catalog/*— Ana sayfa (indeks sayfası).
- *catalog/books/*— Tüm kitapların listesi.
- *catalog/authors/*— Tüm yazarların listesi.
- *catalog/book/&lt;id&gt;*— Belirli bir kitabın detay görünümü, birincil anahtar alanı &lt;id&gt;(varsayılan) ile. Örneğin, listeye eklenen üçüncü kitabın URL'si şu olacaktır */  catalog/book/3:* .
- *catalog/author/&lt;id&gt;*— Birincil anahtar alanı olan belirli yazarın detay görünümü *&lt;id&gt;*. Örneğin, listeye eklenen 11. yazarın URL'si şu olacaktır */catalog/author/11:* .

İlk üç URL, dizin sayfasını, kitap listesini ve yazar listesini döndürecektir. Bu URL'ler ek bilgi içermez ve veritabanından veri çeken sorgular her zaman aynı olacaktır. Ancak, sorguların döndürdüğü sonuçlar veritabanının içeriğine bağlı olacaktır.

Buna karşılık, son iki URL belirli bir kitap veya yazar hakkında ayrıntılı bilgi gösterecektir. Bu URL'ler, görüntülenecek öğenin kimliğini kodlar ( *&lt;id&gt;* yukarıda gösterilmiştir). URL eşleyici, kodlanmış bilgiyi çıkaracak ve görünüme iletecektir; görünüm ise veritabanından hangi bilgiyi alacağını dinamik olarak belirleyecektir. Bilgiyi URL'ye kodlayarak, tüm kitapları (veya yazarları) işlemek için tek bir URL eşleme, görünüm ve şablon seti kullanacağız.

Giriş bölümünde de belirtildiği gibi, bu makalenin geri kalanında dizin sayfasının nasıl oluşturulacağı açıklanmaktadır.

**Dizin sayfasını oluşturma**
Oluşturacağımız ilk sayfa, indeks sayfasıdır ( *catalog/*). İndeks sayfası, veritabanındaki farklı kayıtların oluşturulmuş "sayımlarını" içeren bazı statik HTML içerecektir. Bunu gerçekleştirmek için bir URL eşlemesi, bir görünüm ve bir şablon oluşturacağız.

**URL eşlemesi**
Web sitesinin iskeletini oluşturduğumuzda , URLConf modülünün ile başlayan bir URL alındığında kalan alt dizeyi işlemesini sağlamak için locallibrary/urls.py dosyasını güncelledik .*catalog/catalog.urls*

locallibrary/urls.py dosyasından alınan aşağıdaki kod parçası modülü içermektedir *catalog.urls:*

```PYTHON
urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

Ayrıca URLConf modülü için /catalog/urls.py adında bir yer tutucu dosya oluşturduk . Bu dosyaya aşağıdaki satırları ekleyin:

```PYTHON
urlpatterns = [
    path('', views.index, name='index'),
]
```

Bu *path()* fonksiyon aşağıdaki tanımları içerir:

- Boş bir dize olan URL kalıbı:*''*. Diğer görünümler üzerinde çalışırken URL kalıplarını ayrıntılı olarak ele alacağız.
- URL kalıbı tespit edildiğinde çağrılacak olan görünüm fonksiyonu: views.py dosyasında *views.index*adı geçen fonksiyon .*index()*

Bu fonksiyon ayrıca, bu belirli URL eşlemesi için benzersiz bir tanımlayıcı olan *path()* bir parametre de belirtir . Bu adı kullanarak eşleyiciyi "tersine çevirebilir", yani eşleyicinin işlemek üzere tasarlandığı kaynağa işaret eden dinamik olarak bir URL oluşturabilirsiniz. Örneğin, bir şablona aşağıdaki bağlantıyı ekleyerek herhangi bir sayfadan ana sayfamıza bağlantı vermek için ad parametresini kullanabiliriz:*name*

```DJANGO
<a href="{% url 'index' %}">Home</a>.
```

**Görünüm (fonksiyon tabanlı)**
Görünüm (view), bir HTTP isteğini işleyen, veritabanından gerekli verileri çeken, verileri bir HTML şablonu kullanarak bir HTML sayfasında işleyen ve ardından oluşturulan HTML'yi kullanıcıya göstermek için bir HTTP yanıtı olarak döndüren bir fonksiyondur. Index görünümü bu modeli izler; veritabanımızda bulunan mevcut ve kayıt sayısıyla ilgili bilgileri alır ve bu bilgileri görüntülenmek üzere bir şablona *Book* iletir *BookInstance*.*BookInstance Author*

```PYTHON
from django.shortcuts import render

# Create your views here.
```

Aşağıdaki satırları dosyanın en altına yapıştırın:

```PYTHON
from .models import Book, Author, BookInstance, Genre

def index(request):
    """View function for home page of site."""

    # Generate counts of some of the main objects
    num_books = Book.objects.all().count()
    num_instances = BookInstance.objects.all().count()

    # Available books (status = 'a')
    num_instances_available = BookInstance.objects.filter(status__exact='a').count()

    # The 'all()' is implied by default.
    num_authors = Author.objects.count()

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
    }

    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)
    ```

İlk satır, tüm görünümlerimizde verilere erişmek için kullanacağımız model sınıflarını içe aktarır.

*objects.all()*Görünüm fonksiyonunun ilk kısmı , model sınıflarındaki özniteliği kullanarak kayıt sayısını getirir . Ayrıca, durum alanında 'a' (Kullanılabilir) değerine sahip nesnelerin bir listesini de alır.

Görüntüleme fonksiyonunun sonunda, *render()*bir HTML sayfası oluşturmak ve sayfayı yanıt olarak döndürmek için fonksiyonu çağırıyoruz. Bu kısayol fonksiyonu, çok yaygın bir kullanım durumunu basitleştirmek için bir dizi başka fonksiyonu sarmalar. Fonksiyon *render()*aşağıdaki parametreleri kabul eder:

- Orijinal *request* nesne, bir *HttpRequest*.
- Veriler için yer tutucular içeren bir HTML şablonu.
- *context* Yer tutuculara eklenecek verileri içeren, Python sözlüğü türünde bir değişken.

Şablonlar ve değişken hakkında daha fazla bilgiyi bir sonraki bölümde ele alacağız context. Şimdi, kullanıcıya bir şeyler gösterebilmek için şablonumuzu oluşturmaya başlayalım!

**Şablon**
Şablon, bir dosyanın (örneğin bir HTML sayfasının) yapısını veya düzenini tanımlayan bir metin dosyasıdır; gerçek içeriği temsil etmek için yer tutucular kullanır.

`startapp` kullanılarak oluşturulan bir Django uygulaması (bu örneğin iskeleti gibi), şablonları uygulamanızın ' templates ' adlı alt dizininde arayacaktır . Örneğin, az önce eklediğimiz index görünümünde, fonksiyon `/django-locallibrary-tutorial/catalog/templates/` dizininde `index.html` *render()* dosyasını bulmayı bekleyecek ve dosya mevcut değilse hata verecektir.

Önceki değişiklikleri kaydedip *127.0.0.1:8000* tarayıcınızdan erişerek bunu kontrol edebilirsiniz; oldukça sezgisel bir hata mesajı görüntülenecektir: "/catalog/ adresinde şablon mevcut değil" ve diğer ayrıntılar.

**Şablonları genişletme**
Dizin şablonu, başlık ve gövde için standart HTML işaretlemesinin yanı sıra, sitenin diğer sayfalarına (henüz oluşturmadığımız) bağlantı veren gezinme bölümlerine ve giriş metni ile kitap bilgilerini görüntüleyen bölümlere ihtiyaç duyacaktır.

Sitemizin her sayfasında HTML ve gezinme yapısının büyük bir kısmı aynı olacaktır. Her sayfada tekrarlanan şablon kod yerine, Django şablonlama dilini kullanarak temel bir şablon tanımlayabilir ve ardından her sayfaya özgü farklı kısımları değiştirmek için bu şablonu genişletebilirsiniz.

Aşağıdaki kod parçası, base_generic.html dosyasından alınmış örnek bir temel şablondur. LocalLibrary için şablonu kısa süre içinde oluşturacağız. Aşağıdaki örnek, başlık, kenar çubuğu ve ana içerik için adlandırılmış *block* ve *endblock* şablon etiketleriyle işaretlenmiş bölümler içeren yaygın HTML içerir. Blokları boş bırakabilir veya şablondan türetilen sayfaları oluştururken kullanılacak varsayılan içeriği ekleyebilirsiniz.

```DJANGO
<!doctype html>
<html lang="en">
  <head>
    {% block title %}
      <title>Local Library</title>
    {% endblock %}
  </head>
  <body>
    {% block sidebar %}
      <!-- insert default navigation text for every page -->
    {% endblock %}
    {% block content %}
      <!-- default content text (typically empty) -->
    {% endblock %}
  </body>
</html>
```

Belirli bir görünüm için şablon tanımlarken, öncelikle şablon etiketini kullanarak temel şablonu belirtiriz — aşağıdaki kod örneğine bakın. Ardından, temel şablonda olduğu gibi / bölümlerini *extends* kullanarak şablondan hangi bölümleri değiştirmek istediğimizi (varsa) belirtiriz .*blockendblock*

Örneğin, aşağıdaki kod parçacığı, şablon etiketini nasıl kullanacağınızı *extends* ve *content* bloğu nasıl geçersiz kılacağınızı gösterir. Oluşturulan HTML, temel şablonda tanımlanan kodu ve yapıyı, blokta tanımladığınız varsayılan içeriği de içerecek *title*, ancak *content* varsayılan bloğun yerine yeni bir blok yerleştirilecektir.

```DJANGO
{% extends "base_generic.html" %}

{% block content %}
  <h1>Local Library Home</h1>
  <p>
    Welcome to LocalLibrary, a website developed by
    <em>Mozilla Developer Network</em>!
  </p>
{% endblock %}
```

**LocalLibrary temel şablonu**
LocalLibrary web sitesi için temel şablon olarak aşağıdaki kod parçasını kullanacağız . Gördüğünüz gibi, bazı HTML kodları içeriyor ve *title*, *sidebar*, ve için bloklar tanımlıyor *content*. Varsayılan bir başlığımız ve tüm kitapların ve yazarların listelerine bağlantılar içeren varsayılan bir kenar çubuğumuz var; her ikisi de gelecekte kolayca değiştirilebilmesi için bloklar içine alınmıştır.

/django-locallibrary-tutorial/catalog/templates/ dizininde base_generic.html adında yeni bir dosya oluşturun ve aşağıdaki kodu dosyaya yapıştırın:

```DJANGO
<!doctype html>
<html lang="en">
  <head>
    {% block title %}
      <title>Local Library</title>
    {% endblock %}
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous">
    <!-- Add additional CSS in static file -->
    {% load static %}
    <link rel="stylesheet" href="{% static 'css/styles.css' %}" />
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2">
          {% block sidebar %}
            <ul class="sidebar-nav">
              <li><a href="{% url 'index' %}">Home</a></li>
              <li><a href="">All books</a></li>
              <li><a href="">All authors</a></li>
            </ul>
          {% endblock %}
        </div>
        <div class="col-sm-10 ">{% block content %}{% endblock %}</div>
      </div>
    </div>
  </body>
</html>
```


Temel şablon ayrıca ek stil sağlayan yerel bir CSS dosyasına ( styles.css ) da referans verir. /django-locallibrary-tutorial/catalog/static/css/ dizininde bir styles.css dosyası oluşturun ve aşağıdaki kodu dosyaya yapıştırın:

```CSS
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

**Dizin şablonu**
/django-locallibrary-tutorial/catalog/templates/ dizininde index.html adında yeni bir HTML dosyası oluşturun ve aşağıdaki kodu dosyaya yapıştırın. Bu kod, ilk satırda temel şablonumuzu genişletir ve ardından şablonun varsayılan bloğunu değiştirir.*content*

```DJANGO
{% extends "base_generic.html" %}

{% block content %}
  <h1>Local Library Home</h1>
  <p>
    Welcome to LocalLibrary, a website developed by
    <em>Mozilla Developer Network</em>!
  </p>
  <h2>Dynamic content</h2>
  <p>The library has the following record counts:</p>
  <ul>
    <li><strong>Books:</strong> {{ num_books }}</li>
    <li><strong>Copies:</strong> {{ num_instances }}</li>
    <li><strong>Copies available:</strong> {{ num_instances_available }}</li>
    <li><strong>Authors:</strong> {{ num_authors }}</li>
  </ul>
{% endblock %}
```

Dinamik içerik bölümünde, görünümden dahil etmek istediğimiz bilgiler için yer tutucular ( şablon değişkenleri ) tanımlıyoruz . Değişkenler çift parantez (çubuk parantez) içine alınır.

Burada dikkat edilmesi gereken önemli nokta, değişkenlerin, görünümümüzün fonksiyonunda sözlüğe geçirdiğimiz anahtarlarla adlandırılmasıdır (aşağıdaki örneğe bakın). Şablon oluşturulduğunda değişkenler, ilişkili değerleriyle değiştirilecektir .*context render()*

```PYTHON
context = {
    'num_books': num_books,
    'num_instances': num_instances,
    'num_instances_available': num_instances_available,
    'num_authors': num_authors,
}

return render(request, 'index.html', context=context)
```

**Şablonlarda statik dosyalara referans verme**
Projeniz büyük olasılıkla JavaScript, CSS ve resimler de dahil olmak üzere statik kaynaklar kullanacaktır. Bu dosyaların konumu bilinmeyebileceğinden (veya değişebileceğinden), Django, şablonlarınızda bu dosyaların konumunu *STATIC_URL* genel ayara göre belirtmenize olanak tanır. Varsayılan iskelet web sitesi, değerini olarak ayarlar *STATIC_URL*, *"/static/"* ancak bunları bir içerik dağıtım ağında veya başka bir yerde barındırmayı tercih edebilirsiniz.

*load* Şablon içinde öncelikle , aşağıdaki kod örneğinde gösterildiği gibi, şablon kütüphanesini eklemek için "static" belirterek şablon etiketini çağırırsınız . Ardından static, şablon etiketini kullanarak gerekli dosyanın göreceli URL'sini belirtebilirsiniz.

```DJANGO
<!-- Add additional CSS in static file -->
{% load static %}
<link rel="stylesheet" href="{% static 'css/styles.css' %}" />
```

Sayfaya benzer şekilde bir resim ekleyebilirsiniz, örneğin:

```DJANGO
{% load static %}
<img
  src="{% static 'images/local_library_model_uml.png' %}"
  alt="UML diagram"
  style="width:555px;height:540px;" />
```

**URL'lere bağlantı verme**
Yukarıdaki temel şablon, *url* şablon etiketini tanıtmıştır.

```DJANGO
<li><a href="{% url 'index' %}">Home</a></li>
```

Bu etiket, urls.py *path()* dosyanızda çağrılan bir fonksiyonun adını ve ilgili görünümün bu fonksiyondan alacağı argümanların değerlerini kabul eder ve kaynağa bağlantı vermek için kullanabileceğiniz bir URL döndürür.

**Şablonların nerede bulunacağını yapılandırma**
Django'nun şablonları aradığı konum, settings.py *TEMPLATES*  dosyasındaki nesnede belirtilir . Varsayılan settings.py dosyası (bu eğitim için oluşturulduğu gibi) yaklaşık olarak şöyle görünür:

```PYTHON
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

Bu ayar *'APP_DIRS': True* en önemlisidir, çünkü Django'ya şablonları projedeki her uygulamanın alt dizininde, "templates" adında bir klasörde aramasını söyler (bu, şablonları ilgili uygulamalarıyla gruplandırarak kolayca yeniden kullanmayı sağlar).

Django'nun dizinleri arayacağı belirli konumları da belirtebiliriz *'DIRS': []*(ancak buna henüz gerek yok).

**Nasıl görünüyor?**
Bu aşamada, ana sayfayı görüntülemek için gerekli tüm kaynakları oluşturduk. Sunucuyu çalıştırın ( *python3 manage.py runserver*) ve *http://127.0.0.1:8000*/tarayıcınızda açın. Her şey doğru yapılandırılmışsa, siteniz aşağıdaki ekran görüntüsündeki gibi görünmelidir.

![Test](./assets/23-print.png)


## Django Eğitimi Bölüm 6: Genel liste ve detay görünümleri
Bu eğitim, LocalLibrary web sitemizi genişleterek kitaplar ve yazarlar için liste ve detay sayfaları ekleyecektir. Burada genel sınıf tabanlı görünümler hakkında bilgi edinecek ve bunların yaygın kullanım durumları için yazmanız gereken kod miktarını nasıl azaltabileceğini göstereceğiz. Ayrıca URL işleme konusuna daha detaylı olarak değinecek ve temel desen eşleştirmeyi nasıl gerçekleştireceğinizi göstereceğiz.

**Kitap listesi sayfası**
Kitap listesi sayfası, URL kullanılarak erişilebilen, sayfada bulunan tüm kitap kayıtlarının bir listesini gösterecektir . Sayfa, her kayıt için bir başlık ve yazar gösterecek olup, başlık ilgili kitap detay sayfasına bir köprü görevi görecektir. Sayfa, sitedeki diğer tüm sayfalarla aynı yapıya ve navigasyona sahip olacak ve bu nedenle önceki eğitimde oluşturduğumuz catalog/books/temel şablonu (base_generic.html ) genişletebiliriz.

**URL eşlemesi**
/catalog/urls.py dosyasını açın ve aşağıdaki gibi yolunu belirten satırı kopyalayın 'books/'. Tıpkı index sayfası için olduğu gibi, bu path()fonksiyon URL ile eşleşecek bir desen ( 'books/' ), URL eşleşirse çağrılacak bir görünüm fonksiyonu ( views.BookListView.as_view()) ve bu özel eşleme için bir ad tanımlar.

```PYTHON
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
]
```

Önceki eğitimde de belirtildiği gibi, URL'nin zaten eşleşmiş olması gerekiyor /*catalog*, bu nedenle görünüm aslında şu URL için çağrılacaktır: */catalog/books/*.

Görünüm fonksiyonu öncekiyle farklı bir formatta olacak; bunun nedeni, bu görünümün aslında bir sınıf olarak uygulanacak olmasıdır. Sıfırdan kendi görünüm fonksiyonumuzu yazmak yerine, istediğimiz işlerin çoğunu zaten yapan mevcut bir genel görünüm fonksiyonundan miras alacağız.

Django'da sınıf tabanlı görünümler için, sınıf yöntemini çağırarak uygun görünüm fonksiyonuna erişiriz *as_view()*. Bu, sınıfın bir örneğini oluşturma ve gelen HTTP istekleri için doğru işleyici yöntemlerinin çağrılmasını sağlama işinin tamamını yapar.

**(Sınıf bazlı) görüntüle**
Kitap listesi görünümünü, veritabanından tüm kitapları sorgulayacak ve ardından *render()* listeyi belirtilen bir şablona iletecek normal bir fonksiyon olarak (tıpkı önceki index görünümümüz gibi) kolayca yazabilirdik. Ancak bunun yerine, mevcut bir görünümden miras alan bir sınıf tabanlı genel liste görünümü ( ) kullanacağız *ListView*. Genel görünüm zaten ihtiyaç duyduğumuz işlevlerin çoğunu uyguladığı ve Django en iyi uygulamalarına uyduğu için, daha az kod, daha az tekrar ve sonuç olarak daha az bakım gerektiren daha sağlam bir liste görünümü oluşturabileceğiz.

catalog/views.py dosyasını açın ve aşağıdaki kodu dosyanın en altına kopyalayın:

```PYTHON
from django.views import generic

class BookListView(generic.ListView):
    model = Book
```

İşte bu kadar! Genel görünüm, belirtilen model için tüm kayıtları almak üzere veritabanını sorgulayacak ( *Book*) ve ardından /django-locallibrary-tutorial/catalog/templates/catalog/book_list.html adresinde bulunan bir şablonu (aşağıda oluşturacağız) işleyecektir. Şablon içinde, *object_list* OR *book_list*(yani genel olarak *&lt;the model name&gt;_list*) adlı şablon değişkeniyle kitap listesine erişebilirsiniz.

Yukarıdaki varsayılan davranışı değiştirmek için öznitelikler ekleyebilirsiniz. Örneğin, aynı modeli kullanan birden fazla görünümünüz olması gerekiyorsa başka bir şablon dosyası belirtebilirsiniz veya *book_list* belirli şablon kullanım durumunuz için sezgisel değilse farklı bir şablon değişken adı kullanmak isteyebilirsiniz. Muhtemelen en kullanışlı varyasyon, döndürülen sonuçların alt kümesini değiştirmek/filtrelemektir; yani tüm kitapları listelemek yerine diğer kullanıcılar tarafından okunan en iyi 5 kitabı listeleyebilirsiniz.

```PYTHON
class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'   # your own name for the list as a template variable
    queryset = Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
    template_name = 'books/my_arbitrary_template_name_list.html'  # Specify your own template name/location
```

**Sınıf tabanlı görünümlerde yöntemleri geçersiz kılma**
Burada gerek olmasa da, sınıf yöntemlerinden bazılarını geçersiz kılabilirsiniz.

```PYTHON
class BookListView(generic.ListView):
    model = Book

    def get_queryset(self):
        return Book.objects.filter(title__icontains='war')[:5] # Get 5 books containing the title war
 ```

*get_context_data()* Şablona ek bağlam değişkenleri geçirmek için de geçersiz kılma işlemi yapabiliriz (örneğin, kitap listesi varsayılan olarak geçirilir). Aşağıdaki kod parçası some_data, bağlama adlı bir değişkenin nasıl ekleneceğini göstermektedir (bu durumda şablon değişkeni olarak kullanılabilir).

```PYTHON
class BookListView(generic.ListView):
    model = Book

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get the context
        context = super(BookListView, self).get_context_data(**kwargs)
        # Create any data and add it to the context
        context['some_data'] = 'This is just some data'
        return context
```

Bunu yaparken yukarıda kullanılan kalıbı takip etmek önemlidir:

- Öncelikle üst sınıfımızdan mevcut bağlamı alalım.
- Ardından yeni bağlam bilgilerinizi ekleyin.
 -Ardından yeni (güncellenmiş) bağlamı döndürün.

**Liste Görünümü şablonunu oluşturma**
/django-locallibrary-tutorial/catalog/templates/catalog/book_list.html adlı HTML dosyasını oluşturun ve aşağıdaki metni içine kopyalayın. Yukarıda belirtildiği gibi, bu, genel sınıf tabanlı liste görünümü (adı belirtilen *Book* bir uygulamadaki adı belirtilen bir model için) tarafından beklenen varsayılan şablon dosyasıdır *catalog*.

Genel görünümler için şablonlar, diğer şablonlarla aynıdır (elbette şablona aktarılan bağlam/bilgiler farklılık gösterebilir). İndeks şablonumuzda olduğu gibi, ilk satırda temel şablonumuzu genişletiriz ve ardından adlı bloğu değiştiririz *content*.

```DJANGO
{% extends "base_generic.html" %}

{% block content %}
  <h1>Book List</h1>
  {% if book_list %}
    <ul>
      {% for book in book_list %}
      <li>
        <a href="{{ book.get_absolute_url }}">{{ book.title }}</a>
        ({{book.author}})
      </li>
      {% endfor %}
    </ul>
  {% else %}
    <p>There are no books in the library.</p>
  {% endif %}
{% endblock %}
```

Görünüm, varsayılan olarak bağlamı (kitap listesi) takma adlarla iletir *object_list*; *book_list* her ikisi de çalışır.

**Koşullu yürütme**
*if*`<book>` , *else*`<book>` ve `<book>` şablon etiketlerini kullanarak , `<book>`'un tanımlanıp tanımlanmadığını ve boş olup olmadığını endifkontrol ederiz. `<book>` boşsa, `<book>` maddesi listelenecek kitap olmadığını açıklayan bir metin görüntüler. `<book>` boş değilse, kitap listesinde döngü oluştururuz.*book_list* *book_list* *else book_list*

```DJANGO
{% if book_list %}
  <!-- code here to list the books -->
{% else %}
  <p>There are no books in the library.</p>
{% endif %}
```

Yukarıdaki koşul yalnızca tek bir durumu kontrol eder, ancak şablon etiketini kullanarak ek koşullar üzerinde de test yapabilirsiniz elif(örneğin, ).

**For döngüleri**
Şablon, aşağıda gösterildiği gibi kitap listesinde döngü oluşturmak için `for` ve `template` etiketlerini kullanır. Her yineleme, şablon değişkenini geçerli liste öğesine ait bilgilerle doldurur.*endfor book*

```DJANGO
{% for book in book_list %}
  <li><!-- code here get information from each book item --></li>
{% endfor %}
```

*{% empty %}* Ayrıca , kitap listesi boşsa ne olacağını tanımlamak için şablon etiketini de kullanabilirsiniz (ancak şablonumuz bunun yerine koşullu bir ifade kullanmayı tercih ediyor):

```DJANGO
<ul>
  {% for book in book_list %}
    <li><!-- code here get information from each book item --></li>
  {% empty %}
    <p>There are no books in the library.</p>
  {% endfor %}
</ul>
```

Burada kullanılmasa da, Django döngü içinde yinelemeyi izlemek için kullanabileceğiniz başka değişkenler de oluşturacaktır. Örneğin, *forloop.last* döngünün son çalıştırılmasında koşullu işlem yapmak için değişkeni test edebilirsiniz.

**Değişkenlere erişim**
Döngünün içindeki kod, her kitap için hem başlığı (henüz oluşturulmamış detay görünümüne bağlantı olarak) hem de yazarı gösteren bir liste öğesi oluşturur.

```DJANGO
<a href="{{ book.get_absolute_url }}">{{ book.title }}</a> ({{book.author}})
```

İlgili kitap kaydının alanlarına *book.title*  "nokta gösterimi" (örneğin, ve ) kullanarak erişiyoruz *book.author*; burada öğeyi takip eden metin, *book* modelde tanımlandığı gibi alan adıdır.

Şablonumuzun içinden modeldeki fonksiyonları da çağırabiliriz ; bu durumda *Book.get_absolute_url()* , ilgili detay kaydını görüntülemek için kullanabileceğiniz bir URL almak üzere bir fonksiyon çağırıyoruz. Bu, fonksiyonun herhangi bir argümanı olmadığı sürece çalışır (argüman geçirmenin bir yolu yok!).

**Temel şablonu güncelleyin**
Temel şablonu ( /django-locallibrary-tutorial/catalog/templates/base_generic.html ) açın ve aşağıdaki gibi Tüm kitaplar için URL bağlantısına {% url 'books' %} ekleyin . Bu, bağlantıyı tüm sayfalarda etkinleştirecektir (artık "kitaplar" URL eşleyicisini oluşturduğumuza göre bunu başarıyla uygulayabiliriz).

```DJANGO
<li><a href="{% url 'index' %}">Home</a></li>
<li><a href="{% url 'books' %}">All books</a></li>
<li><a href="">All authors</a></li>
```

**Nasıl görünüyor?**
Henüz kitap listesini oluşturamayacaksınız çünkü hâlâ bir bağımlılığımız eksik: bireysel kitaplara köprü oluşturmak için gereken kitap detay sayfalarının URL haritası. Bir sonraki bölümde hem liste hem de detay görünümlerini göstereceğiz.

**Kitap detay sayfası**
*catalog/book/&lt;id&gt;*Kitap detay sayfası, URL (*&lt;id&gt;*kitabın birincil anahtarı) kullanılarak erişilen belirli bir kitap hakkında bilgi gösterecektir . Modeldeki alanlara *Book*(yazar, özet, ISBN, dil ve tür) ek olarak, mevcut kopyaların ( ) durumunu, beklenen iade tarihini, yayınevini ve kimliğini de içeren ayrıntıları listeleyeceğiz *BookInstances*. Bu, okuyucularımızın yalnızca kitap hakkında bilgi edinmelerini değil, aynı zamanda kitabın ne zaman ve nasıl mevcut olduğunu da doğrulamalarını sağlayacaktır.

**URL eşlemesi**
/catalog/urls.py dosyasını açın ve aşağıda gösterilen ' book-detail ' adlı yolu ekleyin . Bu *path()* fonksiyon, bir kalıbı, ilişkili genel sınıf tabanlı detay görünümünü ve bir adı tanımlar.

```PYTHON
urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
]
```

Kitap detay yolu için URL kalıbı, görmek istediğimiz kitabın belirli kimliğini yakalamak için özel bir sözdizimi kullanır. Sözdizimi çok basittir: açılı parantezler, yakalanacak URL bölümünü tanımlar ve görünümün yakalanan verilere erişmek için kullanabileceği değişkenin adını içerir. Örneğin, &lt;something&gt; , işaretli kalıbı yakalayacak ve değeri "something" değişkeni olarak görünüme iletecektir.

Bu durumda *'<int:pk>'*, özel olarak biçimlendirilmiş bir dize olması gereken kitap kimliğini yakalayıp, birincil anahtar (primary key) olarak adlandırılan bir parametre olarak görünüme iletiyoruz *pk*. Bu kimlik, Kitap Modeli'nde tanımlandığı gibi, kitabı veritabanında benzersiz bir şekilde saklamak için kullanılır.

**Uyarı:** Genel sınıf tabanlı detay görünümü, `pk` adlı bir parametrenin geçirilmesini bekler . Kendi fonksiyon görünümünüzü yazıyorsanız, istediğiniz parametre adını kullanabilir veya bilgiyi isimsiz bir argüman olarak geçirebilirsiniz.

**Gelişmiş yol eşleştirme/düzenli ifade primeri**
Sağlanan kalıp eşleştirme, herhangi bir path() dizeyi veya tamsayıyı yakalamak istediğiniz (çok yaygın) durumlar için basit ve kullanışlıdır .

Bu yöntem, bir kalıbı normal ifade *path()* kullanarak belirtmenize olanak tanıması dışında, tıpkı önceki yöntem gibi kullanılır . Örneğin, önceki yol aşağıdaki gibi yazılabilirdi:

```PYTHON
re_path(r'^book/(?P<pk>\d+)$', views.BookDetailView.as_view(), name='book-detail'),
```

**URL eşlemelerinize ek seçenekler eklemek**
Burada kullanmadığımız ancak sizin için değerli olabilecek bir özellik de, fonksiyona üçüncü isimsiz argümanı kullanarak görünüme **[ek seçenekler içeren bir sözlük](https://docs.djangoproject.com/en/5.0/topics/http/urls/#views-extra-options)** *path()* aktarabilmenizdir . Bu yaklaşım, aynı görünümü birden fazla kaynak için kullanmak ve her durumda davranışını yapılandırmak için veri aktarmak istediğinizde faydalı olabilir.

Örneğin, aşağıda gösterilen yolu ele alırsak, */my-url/halibut/* Django'ya yapılacak bir istek şu şekilde çağrılacaktır *views.my_view(request, fish='halibut', my_template_name='some_path'):* .

```PYTHON
path('my-url/<fish>', views.my_view, {'my_template_name': 'some_path'}, name='aurl'),
```

**(Sınıf bazlı) görüntüle**
catalog/views.py dosyasını açın ve aşağıdaki kodu dosyanın en altına kopyalayın:

```PYTHON
class BookDetailView(generic.DetailView):
    model = Book

 ```
İşte bu kadar! Şimdi yapmanız gereken tek şey, /django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html adında bir şablon oluşturmak ve görünüm, URL eşleyici tarafından çıkarılan belirli kayıt için veritabanı bilgilerini bu şablona iletecektir . Şablon içinde, OR (yani genel olarak ) *Book* adlı şablon değişkeniyle kitabın ayrıntılarına erişebilirsiniz .*objectbookthe_model_name*

Gerekiyorsa, kullanılan şablonu ve şablonda kitaba referans vermek için kullanılan bağlam nesnesinin adını değiştirebilirsiniz. Ayrıca, örneğin bağlama ek bilgiler eklemek için yöntemleri geçersiz kılabilirsiniz.

**Kayıt mevcut değilse ne olur?**
İstenen kayıt mevcut değilse, genel sınıf tabanlı detay görünümü *Http404* sizin için otomatik olarak bir istisna oluşturacaktır; üretim ortamında bu, otomatik olarak uygun bir "kaynak bulunamadı" sayfası görüntüleyecektir ve bunu isterseniz özelleştirebilirsiniz.

Bu işlemin nasıl işlediğine dair bir fikir vermek gerekirse, aşağıdaki kod parçası , genel sınıf tabanlı detay görünümünü kullanmıyorsanız , sınıf tabanlı görünümü bir fonksiyon olarak nasıl uygulayacağınızı göstermektedir .

```PYTHON
def book_detail_view(request, primary_key):
    try:
        book = Book.objects.get(pk=primary_key)
    except Book.DoesNotExist:
        raise Http404('Book does not exist')

    return render(request, 'catalog/book_detail.html', context={'book': book})
```

Öncelikle görünüm, modelden belirli kitap kaydını almaya çalışır. Bu işlem başarısız olursa, görünüm *Http404* kitabın "bulunamadığını" belirten bir istisna oluşturmalıdır. Son adım ise, her zamanki gibi, *render()* şablon adı ve kitap verilerini *context* parametre olarak (sözlük şeklinde) kullanarak çağırmaktır.

Genel bir görünüm kullanmıyorsanız, bunu yapmanın başka bir yolu da fonksiyonu çağırmaktır . Bu , kayıt bulunamadığı takdirde *get_object_or_404()* bir istisna fırlatmanın kısayoludur .*Http404*

```PYTHON
from django.shortcuts import get_object_or_404

def book_detail_view(request, primary_key):
    book = get_object_or_404(Book, pk=primary_key)
    return render(request, 'catalog/book_detail.html', context={'book': book})
 ```

**Detay Görünümü şablonunun oluşturulması**
/django-locallibrary-tutorial/catalog/templates/catalog/book_detail.html adlı HTML dosyasını oluşturun ve içine aşağıdaki içeriği ekleyin. Yukarıda belirtildiği gibi, bu, genel sınıf tabanlı detay görünümü tarafından beklenen varsayılan şablon dosya adıdır ( *Book* adı verilen bir uygulamada adı verilen bir model için *catalog*).

```DJANGO
{% extends "base_generic.html" %}

{% block content %}
  <h1>Title: {{ book.title }}</h1>

  <p><strong>Author:</strong> <a href="">{{ book.author }}</a></p>
  <!-- author detail link not yet defined -->
  <p><strong>Summary:</strong> {{ book.summary }}</p>
  <p><strong>ISBN:</strong> {{ book.isbn }}</p>
  <p><strong>Language:</strong> {{ book.language }}</p>
  <p><strong>Genre:</strong> {{ book.genre.all|join:", " }}</p>

  <div style="margin-left:20px;margin-top:20px">
    <h4>Copies</h4>

    {% for copy in book.bookinstance_set.all %}
      <hr />
      <p
        class="{% if copy.status == 'a' %}text-success{% elif copy.status == 'm' %}text-danger{% else %}text-warning{% endif %}">
        {{ copy.get_status_display }}
      </p>
      {% if copy.status != 'a' %}
        <p><strong>Due to be returned:</strong> {{ copy.due_back }}</p>
      {% endif %}
      <p><strong>Imprint:</strong> {{ copy.imprint }}</p>
      <p class="text-muted"><strong>Id:</strong> {{ copy.id }}</p>
    {% endfor %}
  </div>
{% endblock %}
```

Şablon biraz daha büyük olsa da, içerdiği hemen hemen her şey daha önce açıklanmıştı:

- Temel şablonumuzu genişletiyoruz ve "içerik" bloğunu geçersiz kılıyoruz.
- Belirli içeriklerin gösterilip gösterilmeyeceğine karar vermek için koşullu işlemeyi kullanıyoruz.
- *for* Nesne listelerinde gezinmek için döngüler kullanıyoruz .
- Bağlam alanlarına nokta gösterimi kullanarak erişiyoruz (ayrıntılı genel görünümü kullandığımız için bağlam şu şekilde adlandırılmıştır *book*: ; ayrıca şunu da kullanabilirdik *object*):
Daha önce görmediğimiz ilk ilginç şey, fonksiyonudur . Bu yöntem , belirli bir ile ilişkili kayıt *book.bookinstance_set.all()* kümesini döndürmek için Django tarafından "otomatik olarak" oluşturulur .*BookInstanceBook*

```DJANGO
{% for copy in book.bookinstance_set.all %}
  <!-- code to iterate across each copy/instance of a book -->
{% endfor %}
```

*ForeignKey* Bu yöntem gereklidir çünkü bire çok ilişkiyi yalnızca ilişkinin "çok" tarafında (yani ) tanımlarsınız *BookInstance*. Diğer ("bir") modelde ilişkiyi tanımlamak için hiçbir şey yapmadığınızdan, (yani *Book*) ilişkili kayıt kümesini almak için herhangi bir alana sahip değildir. Bu sorunun üstesinden gelmek için Django, kullanabileceğiniz uygun isimli bir "ters arama" fonksiyonu oluşturur. Fonksiyonun adı, 'nin tanımlandığı model adının küçük harfe çevrilmesi ve *ForeignKey*ardından *_set*(yani, 'de oluşturulan fonksiyon ' *Book*dir *bookinstance_set())* ile oluşturulur.

**Nasıl görünüyor?**
Bu noktada, hem kitap listesi hem de kitap detay sayfalarını görüntülemek için gereken her şeyi oluşturmuş olmalıyız. Sunucuyu çalıştırın ( *python3 manage.py runserver*) ve tarayıcınızı adresine açın *http://127.0.0.1:8000/*.

Tüm kitaplar bağlantısına tıklayarak kitap listesini görüntüleyebilirsiniz.

![Test](./assets/24-print.png)

Ardından kitaplarınızdan birinin bağlantısına tıklayın. Her şey doğru ayarlanmışsa, aşağıdaki ekran görüntüsüne benzer bir şey görmelisiniz.

![Test](./assets/25-print.png)

**Sayfalama**
Eğer sadece birkaç kaydınız varsa, kitap listesi sayfamız sorunsuz görünecektir. Ancak, kayıt sayısı onlarca veya yüzlerceye çıktıkça, sayfanın yüklenmesi giderek daha uzun sürecektir (ve mantıklı bir şekilde göz atılamayacak kadar çok içeriğe sahip olacaktır). Bu sorunun çözümü, liste görünümlerinize sayfalama ekleyerek her sayfada görüntülenen öğe sayısını azaltmaktır.

Django, sayfalama için mükemmel bir yerleşik desteğe sahiptir. Daha da iyisi, bu özellik genel sınıf tabanlı liste görünümlerine entegre edilmiştir, bu nedenle etkinleştirmek için çok fazla şey yapmanıza gerek yoktur!

**Görüşler**
catalog/views.py dosyasını açın ve paginate_byaşağıdaki satırı ekleyin.

```PYTHON
class BookListView(generic.ListView):
    model = Book
    paginate_by = 10
 ```

Bu eklemeyle birlikte, 10'dan fazla kaydınız olduğunda görünüm, şablona gönderdiği verileri sayfalamaya başlayacaktır. Farklı sayfalara GET parametreleri kullanılarak erişilir; 2. sayfaya erişmek için URL'yi kullanmanız gerekir /*catalog/books/?page=2*.

**Şablonlar**
Veriler artık sayfalara ayrıldığına göre, sonuç kümesinde kaydırma yapabilmek için şablona destek eklememiz gerekiyor. Tüm liste görünümlerini sayfalara ayırmak isteyebileceğimiz için bunu temel şablona ekleyeceğiz.

/django-locallibrary-tutorial/catalog/templates/base_generic.html dosyasını açın ve "içerik bloğunu" bulun (aşağıda gösterildiği gibi).

```DJANGO
{% block content %}{% endblock %}
```

Aşağıdaki sayfalama bloğunu hemen etiketinin ardından kopyalayın *{% endblock %}*. Kod öncelikle geçerli sayfada sayfalama özelliğinin etkin olup olmadığını kontrol eder. Etkinse, uygun şekilde sonraki ve önceki bağlantıları (ve geçerli sayfa numarasını) ekler.

```DJANGO
{% block pagination %}
    {% if is_paginated %}
        <div class="pagination">
            <span class="page-links">
                {% if page_obj.has_previous %}
                    <a href="{{ request.path }}?page={{ page_obj.previous_page_number }}">previous</a>
                {% endif %}
                <span class="page-current">
                    Page {{ page_obj.number }} of {{ page_obj.paginator.num_pages }}.
                </span>
                {% if page_obj.has_next %}
                    <a href="{{ request.path }}?page={{ page_obj.next_page_number }}">next</a>
                {% endif %}
            </span>
        </div>
    {% endif %}
  {% endblock %}
```

Sayfalama bağlantılarını oluşturmak için geçerli sayfa URL'sini kullanıyoruz *{{ request.path }}*. Bu, sayfalama yaptığımız nesneden bağımsız olduğu için kullanışlıdır.

## Django Eğitimi Bölüm 7: Oturumlar Çerçevesi
**Genel Bakış**
Önceki eğitimlerde oluşturduğumuz LocalLibrary web sitesi , kullanıcıların katalogdaki kitaplara ve yazarlara göz atmalarına olanak tanır. İçerik veritabanından dinamik olarak oluşturulsa da, her kullanıcı siteyi kullandığında esasen aynı sayfalara ve bilgi türlerine erişebilecektir.

"Gerçek" bir kütüphanede, kullanıcılara sitenin önceki kullanım alışkanlıklarına, tercihlerine vb. göre özelleştirilmiş bir deneyim sunmak isteyebilirsiniz. Örneğin, kullanıcının daha önce onayladığı uyarı mesajlarını siteyi bir sonraki ziyaretinde gizleyebilir veya tercihlerini (örneğin, her sayfada görüntülenmesini istedikleri arama sonuçlarının sayısı gibi) saklayıp bunlara saygı gösterebilirsiniz.

Oturum çerçevesi, bu tür davranışları uygulamanıza olanak tanıyarak, site ziyaretçisi bazında rastgele verileri depolamanıza ve almanıza imkan sağlar.

**Oturumlar nedir?**
Web tarayıcıları ve sunucular arasındaki tüm iletişim, durumsuz (stateless) olan HTTP protokolü üzerinden gerçekleşir . Protokolün durumsuz olması, istemci ve sunucu arasındaki mesajların birbirinden tamamen bağımsız olduğu anlamına gelir; "sıralama" veya önceki mesajlara dayalı davranış kavramı yoktur. Sonuç olarak, bir istemciyle devam eden ilişkileri takip eden bir siteye sahip olmak istiyorsanız, bunu kendiniz uygulamanız gerekir.

Oturumlar, Django (ve internetin büyük bir kısmı) tarafından site ile belirli bir tarayıcı arasındaki "durumu" takip etmek için kullanılan mekanizmadır. Oturumlar, tarayıcı başına rastgele verileri depolamanıza ve tarayıcı her bağlandığında bu verilerin site tarafından kullanılabilir olmasına olanak tanır. Oturumla ilişkili bireysel veri öğeleri daha sonra hem veriyi depolamak hem de almak için kullanılan bir "anahtar" ile referans alınır.

Django, her tarayıcıyı ve siteyle olan ilişkili oturumunu tanımlamak için özel bir oturum kimliği içeren bir çerez kullanır . Gerçek oturum verileri varsayılan olarak site veritabanında saklanır (bu, verilerin kötü niyetli kullanıcılara karşı daha savunmasız olduğu bir çerezde saklanmasından daha güvenlidir). Django'yu oturum verilerini başka yerlerde (önbellek, dosyalar, "güvenli" çerezler) saklayacak şekilde yapılandırabilirsiniz, ancak varsayılan konum iyi ve nispeten güvenli bir seçenektir.

**Etkinleştirme oturumları**
Web sitesinin iskeletini oluşturduğumuzda (2. eğitimde) oturumlar otomatik olarak etkinleştirildi .

Yapılandırma , proje dosyasının ( django-locallibrary-tutorial/locallibrary/settings.py*INSTALLED_APPS* ) ve bölümlerinde aşağıdaki gibi ayarlanır :*MIDDLEWARE*

```PYTHON
INSTALLED_APPS = [
    # …
    'django.contrib.sessions',
    # …

MIDDLEWARE = [
    # …
    'django.contrib.sessions.middleware.SessionMiddleware',
    # …
```

**Oturumları kullanarak**
Bu oturum özniteliğine, görünüme ilk argüman olarak geçirilen parametre *session* üzerinden erişebilirsiniz . Bu oturum özniteliği, geçerli kullanıcıya (veya daha doğrusu, bu site için tarayıcının çerezindeki oturum kimliğiyle tanımlanan geçerli tarayıcıya ) olan özel bağlantıyı temsil eder.*request HttpRequest*

Bu *session* özellik, görünümünüzde istediğiniz kadar okuyup yazabileceğiniz ve dilediğiniz gibi değiştirebileceğiniz sözlük benzeri bir nesnedir. Tüm verileri temizleme, bir anahtarın mevcut olup olmadığını test etme, veriler arasında döngü oluşturma vb. dahil olmak üzere tüm normal sözlük işlemlerini yapabilirsiniz. Ancak çoğu zaman, değerleri almak ve ayarlamak için standart "sözlük" API'sini kullanacaksınız.

*my_car* Aşağıdaki kod parçaları , geçerli oturum (tarayıcı) ile ilişkili anahtar kullanılarak bazı verilerin nasıl alınabileceğini, ayarlanabileceğini ve silinebileceğini göstermektedir .

```PYTHON
# Get a session value by its key (e.g. 'my_car'), raising a KeyError if the key is not present
my_car = request.session['my_car']

# Get a session value, setting a default if it is not present ('mini')
my_car = request.session.get('my_car', 'mini')

# Set a session value
request.session['my_car'] = 'mini'

# Delete a session value
del request.session['my_car']
```

API ayrıca, çoğunlukla ilgili oturum çerezini yönetmek için kullanılan bir dizi başka yöntem de sunmaktadır. Örneğin, istemci tarayıcısında çerezlerin desteklenip desteklenmediğini test etmek, çerez son kullanma tarihlerini ayarlamak ve kontrol etmek ve süresi dolmuş oturumları veri deposundan temizlemek için yöntemler mevcuttur. 

**Oturum verilerini kaydetme**
Varsayılan olarak, Django yalnızca oturum veritabanına kaydeder ve oturum değiştirildiğinde (atandığında) veya silindiğinde oturum çerezini istemciye gönderir . Önceki bölümde gösterildiği gibi oturum anahtarını kullanarak bazı verileri güncelliyorsanız, bunun için endişelenmenize gerek yok! Örneğin:

```PYTHON
# This is detected as an update to the session, so session data is saved.
request.session['my_car'] = 'mini'
```

Oturum verileri içindeki bazı bilgileri güncelliyorsanız , Django oturumda bir değişiklik yaptığınızı algılamayacak ve verileri kaydetmeyecektir (örneğin, aşağıda gösterildiği gibi *wheels* verilerinizin içindeki verileri değiştirirseniz *my_car*). Bu durumda, oturumun değiştirilmiş olduğunu açıkça işaretlemeniz gerekecektir.

```PYTHON
# Session object not directly modified, only data within the session. Session changes not saved!
request.session['my_car']['wheels'] = 'alloy'

# Set session as modified to force data updates/cookie to be saved.
request.session.modified = True
````

**Basit bir örnek — ziyaret sayılarını almak**
Basit bir gerçek dünya örneği olarak, kütüphanemizi güncelleyerek mevcut kullanıcının LocalLibrary ana sayfasını kaç kez ziyaret ettiğini bildireceğiz .

/django-locallibrary-tutorial/catalog/views.py dosyasını açın ve *num_visit* saşağıdaki satırları ekleyin *index()* (aşağıda gösterildiği gibi).

```PYTHON
def index(request):
    # …

    num_authors = Author.objects.count()  # The 'all()' is implied by default.

    # Number of visits to this view, as counted in the session variable.
    num_visits = request.session.get('num_visits', 0)
    num_visits += 1
    request.session['num_visits'] = num_visits

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
        'num_visits': num_visits,
    }

    # Render the HTML template index.html with the data in the context variable.
    return render(request, 'index.html', context=context)
```

Burada öncelikle oturum anahtarının değerini alıyoruz 'num_visits've daha önce ayarlanmamışsa değeri 0 olarak belirliyoruz. Her istek alındığında, değeri artırıp oturuma geri kaydediyoruz (kullanıcı sayfayı bir sonraki ziyaretinde kullanılmak üzere). num_visitsArdından bu değişken, bağlam değişkenimiz aracılığıyla şablona aktarılıyor.


Aşağıdaki bloğun en altında gösterilen satırı, ana HTML şablonunuzun ( /django-locallibrary-tutorial/catalog/templates/index.html ) "Dinamik içerik" bölümünün en altına ekleyerek *num_visits* bağlam değişkenini görüntüleyebilirsiniz.

```DJANGO
<h2>Dynamic content</h2>

<p>The library has the following record counts:</p>
<ul>
  <li><strong>Books:</strong> {{ num_books }}</li>
  <li><strong>Copies:</strong> {{ num_instances }}</li>
  <li><strong>Copies available:</strong> {{ num_instances_available }}</li>
  <li><strong>Authors:</strong> {{ num_authors }}</li>
</ul>

<p>
  You have visited this page {{ num_visits }} time{{ num_visits|pluralize }}.
</p>
```

Sayfanın birden fazla kez ziyaret edildiğini belirtmek için Django'nun yerleşik şablon etiketi olan `pluralize`'ı kullanarak sonuna "s " eklediğimizi unutmayın .

Değişikliklerinizi kaydedin ve test sunucusunu yeniden başlatın. Sayfayı her yenilediğinizde sayı güncellenmelidir.


## Django Eğitimi Bölüm 8: Kullanıcı Kimlik Doğrulaması ve İzinleri
Bu eğitimde, kullanıcıların kendi hesaplarıyla sitenize nasıl giriş yapmalarına izin vereceğinizi ve giriş yapıp yapmadıklarına ve izinlerine bağlı olarak neler yapabileceklerini ve görebileceklerini nasıl kontrol edeceğinizi göstereceğiz . Bu gösterimin bir parçası olarak, LocalLibrary web sitesini genişleterek giriş ve çıkış sayfaları ile ödünç alınan kitapları görüntülemek için kullanıcı ve personele özel sayfalar ekleyeceğiz.

**Genel Bakış**
Django, önceki eğitimde ele alınan oturum çerçevesi üzerine kurulu bir kimlik doğrulama ve yetkilendirme ("izin") sistemi sağlar ; bu sistem, kullanıcı kimlik bilgilerini doğrulamanıza ve her kullanıcının hangi eylemleri gerçekleştirmesine izin verildiğini tanımlamanıza olanak tanır. Çerçeve, yerleşik modeller *Users*( *Groups* birden fazla kullanıcıya aynı anda izin uygulama için genel bir yol), bir kullanıcının bir görevi gerçekleştirip gerçekleştiremeyeceğini belirten izinler/bayraklar, kullanıcıların oturum açması için formlar ve görünümler ve içeriği kısıtlamak için görünüm araçları içerir.

Bu eğitimde, LocalLibrary web sitesinde kullanıcı kimlik doğrulamasını nasıl etkinleştireceğinizi, kendi giriş ve çıkış sayfalarınızı nasıl oluşturacağınızı, modellerinize izinler eklemeyi ve sayfalara erişimi nasıl kontrol edeceğinizi göstereceğiz . Kimlik doğrulama/izinleri kullanarak hem kullanıcılar hem de kütüphaneciler için ödünç alınmış kitapların listelerini görüntüleyeceğiz.

Kimlik doğrulama sistemi oldukça esnek ve isterseniz URL'lerinizi, formlarınızı, görünümlerinizi ve şablonlarınızı sıfırdan oluşturabilir, kullanıcıyı oturum açmak için sağlanan API'yi çağırabilirsiniz. Ancak bu makalede, giriş ve çıkış sayfalarımız için Django'nun "varsayılan" kimlik doğrulama görünümlerini ve formlarını kullanacağız. Yine de bazı şablonlar oluşturmamız gerekecek, ancak bu oldukça kolay.

Ayrıca, hem görünümlerde hem de şablonlarda izinlerin nasıl oluşturulacağını ve oturum açma durumunun ve izinlerin nasıl kontrol edileceğini de göstereceğiz.

**Kimlik doğrulamasını etkinleştirme**
Web sitesinin iskeletini oluşturduğumuzda (2. eğitimde) kimlik doğrulama otomatik olarak etkinleştirildi, bu nedenle şu anda başka bir şey yapmanıza gerek yok.

Yapılandırma , proje dosyasının ( django-locallibrary-tutorial/locallibrary/settings.py*INSTALLED_APPS* ) ve bölümlerinde aşağıdaki gibi ayarlanır :*MIDDLEWARE*

```PYTHON
INSTALLED_APPS = [
    # …
    'django.contrib.auth',  # Core authentication framework and its default models.
    'django.contrib.contenttypes',  # Django content type system (allows permissions to be associated with models).
    # …

MIDDLEWARE = [
    # …
    'django.contrib.sessions.middleware.SessionMiddleware',  # Manages sessions across requests
    # …
    'django.contrib.auth.middleware.AuthenticationMiddleware',  # Associates users with requests using sessions.
    # …
```

**Kullanıcı ve grup oluşturma**
4. eğitimde Django admin sitesine baktığımızda ilk kullanıcınızı zaten oluşturmuştunuz (bu, komutuyla oluşturulan bir süper kullanıcıydı ). Süper kullanıcımız zaten kimlik doğrulamasından geçti ve tüm izinlere sahip, bu nedenle normal bir site kullanıcısını temsil edecek bir test kullanıcısı oluşturmamız gerekecek. Yerel kütüphane *python manage.py createsuperuser* gruplarımızı ve web sitesi girişlerimizi oluşturmak için admin sitesini kullanacağız , çünkü bu bunu yapmanın en hızlı yollarından biridir.

Aşağıda önce bir grup, ardından da bir kullanıcı oluşturacağız. Kütüphane üyelerimiz için henüz herhangi bir izin ekleme imkanımız olmasa da, daha sonra gerekirse, her üyeye ayrı ayrı eklemek yerine gruba bir kerede eklemek çok daha kolay olacaktır.

Geliştirme sunucusunu başlatın ve yerel web tarayıcınızda yönetici sitesine gidin ( *http://127.0.0.1:8000/admin/*). Süper kullanıcı hesabınızın kimlik bilgilerini kullanarak siteye giriş yapın. Yönetici sitesinin en üst düzeyinde, "Django uygulaması"na göre sıralanmış tüm modelleriniz görüntülenir. Kimlik Doğrulama ve Yetkilendirme bölümünden, mevcut kayıtlarını görmek için Kullanıcılar veya Gruplar bağlantılarına tıklayabilirsiniz .

![Test](./assets/26-print.png)

Öncelikle kütüphane üyelerimiz için yeni bir grup oluşturalım.

1\. Yeni bir grup oluşturmak için (Grup'un yanındaki) Ekle düğmesine tıklayın ; grup için "Kütüphane Üyeleri" adını girin .

![Test](./assets/27-print.png)

2\.Gruba erişim için herhangi bir izne ihtiyacımız yok, sadece KAYDET'e basın (grupların listesine yönlendirileceksiniz).

Şimdi bir kullanıcı oluşturalım:

1\.Yönetici sitesinin ana sayfasına geri dönün.

2\.Kullanıcılar'ın yanındaki Ekle düğmesine tıklayarak Kullanıcı ekle iletişim kutusunu açın .

![Test](./assets/28-print.png)

3\.Test kullanıcınız için uygun bir Kullanıcı Adı ve Parola / Parola onayı girin.

4\.Kullanıcıyı oluşturmak için KAYDET'e basın .

Yönetici sitesi yeni kullanıcıyı oluşturacak ve sizi hemen Kullanıcı Değiştirme ekranına yönlendirecektir; burada kullanıcı adınızı değiştirebilir ve Kullanıcı modelinin isteğe bağlı alanları için bilgi ekleyebilirsiniz. Bu alanlar arasında ad, soyad, e-posta adresi ve kullanıcının durumu ve izinleri bulunur (yalnızca Aktif bayrağı ayarlanmalıdır). Daha aşağıda kullanıcının gruplarını ve izinlerini belirtebilir ve kullanıcıyla ilgili önemli tarihleri ​​(örneğin, katılım tarihi ve son giriş tarihi) görebilirsiniz.

![Test](./assets/29-print.png)

5\.Gruplar bölümünde , Kullanılabilir gruplar listesinden Kütüphane Üyesi grubunu seçin ve ardından kutular arasındaki sağ oka basarak onu Seçilen gruplar kutusuna taşıyın.

![Test](./assets/30-print.png)

6\.Başka bir şey yapmamıza gerek yok, bu yüzden kullanıcı listesine gitmek için tekrar KAYDET'i seçin.

İşte bu kadar! Artık test amaçlı kullanabileceğiniz bir "normal kütüphane üyesi" hesabınız var (giriş yapmalarını sağlayacak sayfaları uyguladıktan sonra).

**Kimlik doğrulama görünümlerinizi ayarlama**
Django, giriş, çıkış ve parola yönetimi gibi kimlik doğrulama sayfaları oluşturmak için ihtiyacınız olan hemen hemen her şeyi "hazır olarak" sunar. Buna URL eşleyici, görünümler ve formlar dahildir, ancak şablonlar dahil değildir; kendi şablonlarımızı oluşturmamız gerekir!

Bu bölümde, varsayılan sistemi LocalLibrary web sitesine nasıl entegre edeceğimizi ve şablonları nasıl oluşturacağımızı gösteriyoruz .

**Proje URL'leri**
Projenin urls.py dosyasının ( django-locallibrary-tutorial/locallibrary/urls.py ) sonuna aşağıdakileri ekleyin :

```PYTHON
# Add Django site authentication urls (for login, logout, password management)

urlpatterns += [
    path('accounts/', include('django.contrib.auth.urls')),
]
```

(Sondaki eğik çizgiye dikkat edin!) URL'ye gidin *http://127.0.0.1:8000/accounts/*. Django, bu URL için bir eşleme bulamadığına dair bir hata gösterecek ve denediği tüm URL'leri listeleyecektir. Buradan, şablonları oluşturduktan sonra çalışacak URL'leri görebilirsiniz.

Şimdi giriş URL'sine ( ) gitmeyi deneyin . Bu yine başarısız olacak, ancak şablon arama yolunda gerekli şablonun ( registration/login.htmlhttp://127.0.0.1:8000/accounts/login/ ) eksik olduğunu belirten bir hata mesajı alacaksınız . Üstteki sarı bölümde aşağıdaki satırları göreceksiniz:

```PYTHON
Exception Type:    TemplateDoesNotExist
Exception Value:    registration/login.html
```

Sonraki adım, şablonlar için "registration" adında bir dizin oluşturmak ve ardından login.html dosyasını eklemektir.

**Şablon dizini**
Az önce eklediğimiz URL'ler (ve dolayısıyla görünümler), ilgili şablonlarını şablon arama yolundaki /registration/ dizininde bulmayı bekliyor.

Bu site için HTML sayfalarımızı templates/registration/ dizinine yerleştireceğiz . Bu dizin, projenizin kök dizininde, yani catalog ve locallibrary klasörleriyle aynı dizinde olmalıdır. Lütfen bu klasörleri şimdi oluşturun.

Şablon yükleyicinin şablon dizinini görebilmesi için, onu şablon arama yoluna eklememiz gerekiyor. Proje ayarlarını açın ( /django-locallibrary-tutorial/locallibrary/settings.py ).

Ardından *os* modülü içe aktarın (dosyanın en üstüne yakın bir yere aşağıdaki satırı ekleyin, eğer zaten yoksa).

```PYTHON
import os # needed by code below
```
*TEMPLATES* Bölümdeki *'DIRS* satırı aşağıdaki gibi güncelleyin :

```PYTHON
    # …
    TEMPLATES = [
      {
       # …
       'DIRS': [os.path.join(BASE_DIR, 'templates')],
       'APP_DIRS': True,
       # …
```

**Giriş şablonu**
/django-locallibrary-tutorial/templates/registration/login.html adında yeni bir HTML dosyası oluşturun ve içine aşağıdaki içeriği ekleyin:

```DJANGO
{% extends "base_generic.html" %}

{% block content %}

  {% if form.errors %}
    <p>Your username and password didn't match. Please try again.</p>
  {% endif %}

  {% if next %}
    {% if user.is_authenticated %}
      <p>Your account doesn't have access to this page. To proceed,
      please log in with an account that has access.</p>
    {% else %}
      <p>Please log in to see this page.</p>
    {% endif %}
  {% endif %}

  <form method="post" action="{% url 'login' %}">
    {% csrf_token %}
    <table>
      <tr>
        <td>{{ form.username.label_tag }}</td>
        <td>{{ form.username }}</td>
      </tr>
      <tr>
        <td>{{ form.password.label_tag }}</td>
        <td>{{ form.password }}</td>
      </tr>
    </table>
    <input type="submit" value="login">
    <input type="hidden" name="next" value="{{ next }}">
  </form>

  {# Assumes you set up the password_reset view in your URLConf #}
  <p><a href="{% url 'password_reset' %}">Lost password?</a></p>

{% endblock %}
```

Bu şablon, daha önce gördüklerimizle bazı benzerlikler taşıyor; temel şablonumuzu genişletiyor ve *content* bloğu geçersiz kılıyor. Kodun geri kalanı oldukça standart form işleme kodudur ve bunu daha sonraki bir eğitimde ele alacağız. Şimdilik bilmeniz gereken tek şey, bu kodun kullanıcı adınızı ve şifrenizi girebileceğiniz bir form görüntüleyeceği ve geçersiz değerler girerseniz sayfa yenilendiğinde doğru değerleri girmeniz isteneceğidir.

Şablonunuzu kaydettikten sonra giriş sayfasına ( *http://127.0.0.1:8000/accounts/login/*) geri dönün ve şöyle bir şey görmelisiniz:

![Test](./assets/31-print.png)


Geçerli kimlik bilgileriyle giriş yaparsanız, başka bir sayfaya yönlendirileceksiniz (varsayılan olarak bu sayfa olacaktır *http://127.0.0.1:8000/accounts/profile/*). Sorun şu ki, Django varsayılan olarak giriş yaptığınızda bir profil sayfasına yönlendirilmek isteyeceğinizi varsayıyor, bu da her zaman böyle olmayabilir. Bu sayfayı henüz tanımlamadığınız için başka bir hata alacaksınız!

Proje ayarlarını açın ( /django-locallibrary-tutorial/locallibrary/settings.py ) ve aşağıdaki metni en alta ekleyin. Artık giriş yaptığınızda varsayılan olarak site ana sayfasına yönlendirileceksiniz.

**Çıkış şablonu**
Çıkış URL'sine ( *http://127.0.0.1:8000/accounts/logout/*) giderseniz bir hata alırsınız çünkü Django 5, *GET* yalnızca kullanarak çıkış yapılmasına izin verir, ile değil *POST*. Birazdan çıkış yapmak için kullanabileceğiniz bir form ekleyeceğiz, ancak önce kullanıcıların çıkış yaptıktan sonra yönlendirileceği sayfayı oluşturacağız.

/django-locallibrary-tutorial/templates/registration/logged_out.html dosyasını oluşturun ve açın . Aşağıdaki metni içine kopyalayın:

```DJANGO
{% extends "base_generic.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to log in again.</a>
{% endblock %}
```

Bu şablon çok basit. Sadece oturumunuzun kapatıldığını bildiren bir mesaj gösteriyor ve giriş ekranına geri dönmek için tıklayabileceğiniz bir bağlantı sağlıyor. Ekran (oturum kapatıldıktan sonra) şu şekilde görünüyor:

![Test](./assets/32-print.png)

**Parola sıfırlama şablonları**
Varsayılan parola sıfırlama sistemi, kullanıcıya sıfırlama bağlantısı göndermek için e-posta kullanır. Kullanıcının e-posta adresini almak, e-postayı göndermek, yeni bir parola girmelerine izin vermek ve tüm sürecin tamamlandığını kaydetmek için formlar oluşturmanız gerekir.

Aşağıdaki şablonlar başlangıç ​​noktası olarak kullanılabilir.

**Şifre sıfırlama formu**
Bu, kullanıcının e-posta adresini almak için kullanılan formdur (şifre sıfırlama e-postası göndermek için). /django-locallibrary-tutorial/templates/registration/password_reset_form.html dosyasını oluşturun ve içine aşağıdaki içeriği ekleyin:

```DJANGO
{% extends "base_generic.html" %}

{% block content %}
  <form action="" method="post">
  {% csrf_token %}
  {% if form.email.errors %}
    {{ form.email.errors }}
  {% endif %}
      <p>{{ form.email }}</p>
    <input type="submit" class="btn btn-default btn-lg" value="Reset password">
  </form>
{% endblock %}
```

**Şifre sıfırlama işlemi tamamlandı.**
Bu form, e-posta adresiniz toplandıktan sonra görüntülenir. /django-locallibrary-tutorial/templates/registration/password_reset_done.html dosyasını oluşturun ve içine aşağıdaki içeriği ekleyin:

```DJANGO
{% extends "base_generic.html" %}

{% block content %}
  <p>We've emailed you instructions for setting your password. If they haven't arrived in a few minutes, check your spam folder.</p>
{% endblock %}
```

**Şifre sıfırlama e-postası**
Bu şablon, kullanıcılara göndereceğimiz şifre sıfırlama bağlantısını içeren HTML e-postanın metnini sağlar. /django-locallibrary-tutorial/templates/registration/password_reset_email.html dosyasını oluşturun ve içine aşağıdaki içeriği ekleyin:

```DJANGO
Someone asked for password reset for email {{ email }}. Follow the link below:
{{ protocol }}://{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
```

**Şifre sıfırlama onayı**
Bu sayfa, parola sıfırlama e-postasındaki bağlantıya tıkladıktan sonra yeni parolanızı gireceğiniz yerdir. /django-locallibrary-tutorial/templates/registration/password_reset_confirm.html dosyasını oluşturun ve içine aşağıdaki içeriği ekleyin:

```DJANGO
{% extends "base_generic.html" %}

{% block content %}
    {% if validlink %}
        <p>Please enter (and confirm) your new password.</p>
        <form action="" method="post">
        {% csrf_token %}
            <table>
                <tr>
                    <td>{{ form.new_password1.errors }}
                        <label for="id_new_password1">New password:</label></td>
                    <td>{{ form.new_password1 }}</td>
                </tr>
                <tr>
                    <td>{{ form.new_password2.errors }}
                        <label for="id_new_password2">Confirm password:</label></td>
                    <td>{{ form.new_password2 }}</td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="Change my password"></td>
                </tr>
            </table>
        </form>
    {% else %}
        <h1>Password reset failed</h1>
        <p>The password reset link was invalid, possibly because it has already been used. Please request a new password reset.</p>
    {% endif %}
{% endblock %}
```

**Şifre sıfırlama işlemi tamamlandı.**
Bu, parola sıfırlama işleminin başarılı olduğunu bildirmek için görüntülenen son parola sıfırlama şablonudur. /django-locallibrary-tutorial/templates/registration/password_reset_complete.html dosyasını oluşturun ve içine aşağıdaki içeriği ekleyin:

```DJANGO
{% extends "base_generic.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
```

**Yeni kimlik doğrulama sayfalarının test edilmesi**
URL yapılandırmasını ekleyip tüm bu şablonları oluşturduğunuza göre, artık (çıkış sayfası hariç) kimlik doğrulama sayfaları sorunsuz çalışmalıdır!

Yeni kimlik doğrulama sayfalarını test etmek için öncelikle süper kullanıcı hesabınıza URL üzerinden giriş yapmayı deneyebilirsiniz *http://127.0.0.1:8000/accounts/login/*. Giriş sayfasındaki bağlantıdan parola sıfırlama işlevini test edebilirsiniz. Django'nun yalnızca veritabanında zaten kayıtlı olan adreslere (kullanıcılara) sıfırlama e-postası göndereceğini unutmayın!

Hesaptan çıkış işlemini henüz test edemeyeceğinizi unutmayın, çünkü çıkış istekleri bir istek *POST* olarak değil, bir istek olarak gönderilmelidir *GET*.

**Kimliği doğrulanmış kullanıcılara karşı test etme**
Bu bölümde, kullanıcının oturum açmış olup olmamasına bağlı olarak gördüğü içeriği seçici olarak nasıl kontrol edebileceğimize bakacağız.

**Şablonlarda test etme**
Şablon değişkeni sayesinde, şu anda oturum açmış olan kullanıcı hakkında bilgi edinebilirsiniz **{{ user }}**(bu, projeyi kurduğunuzda (iskelet örneğimizde yaptığımız gibi) varsayılan olarak şablon bağlamına eklenir).

Genellikle, kullanıcının belirli içeriği görme hakkına sahip olup olmadığını belirlemek için öncelikle şablon değişkenine karşı test yaparsınız **{{ user.is_authenticated }}**. Bunu göstermek için, bir sonraki adımda, kullanıcının oturumu kapalıysa "Giriş" bağlantısını, oturumu açıksa "Çıkış" bağlantısını gösterecek şekilde kenar çubuğumuzu güncelleyeceğiz.

Temel şablonu ( /django-locallibrary-tutorial/catalog/templates/base_generic.html ) açın ve aşağıdaki metni şablon etiketinden *sidebar* hemen önce bloğun içine kopyalayın *endblock*.

```DJANGO
  <ul class="sidebar-nav">
    …
   {% if user.is_authenticated %}
     <li>User: {{ user.get_username }}</li>
     <li>
       <form id="logout-form" method="post" action="{% url 'logout' %}">
         {% csrf_token %}
         <button type="submit" class="btn btn-link">Logout</button>
       </form>
     </li>
   {% else %}
     <li><a href="{% url 'login' %}?next={{ request.path }}">Login</a></li>
   {% endif %}
    …
  </ul>
 ```

Gördüğünüz gibi, doğru olup olmadığına bağlı olarak metni koşullu olarak görüntülemek için if/ else/ şablon etiketlerini kullanıyoruz . Kullanıcı kimliği doğrulanmışsa, geçerli bir kullanıcımız olduğunu biliyoruz, bu nedenle adını görüntülemek için çağrı yapıyoruz.endif{{ user.is_authenticated }}{{ user.get_username }}

*url* Giriş bağlantısı URL'sini şablon etiketi ve URL yapılandırmasının adını kullanarak oluşturuyoruz . Ayrıca URL'nin sonuna *login* nasıl eklediğimize de dikkat edin . Bu , bağlantılı URL'nin sonuna geçerli sayfanın adresini (URL) içeren bir URL parametresi ekler. Kullanıcı başarılı bir şekilde giriş yaptıktan sonra, görünüm bu değeri kullanarak kullanıcıyı ilk giriş bağlantısına tıkladığı sayfaya geri yönlendirecektir.*?next={{ request.path }} next next*

Çıkış şablonu kodu farklıdır, çünkü Django 5'ten itibaren çıkış yapmak için bir düğme içeren bir form kullanarak *POST* URL'ye gitmeniz gerekir. Varsayılan olarak bu bir düğme olarak görüntülenir, ancak düğmeyi bir bağlantı olarak görüntüleyecek şekilde biçimlendirebilirsiniz. Bu örnekte Bootstrap *admin:logout* kullanıyoruz , bu nedenle düğmeyi bir bağlantı gibi göstermek için `<style>` etiketini uyguluyoruz . Ayrıca , çıkış bağlantısını diğer tüm kenar çubuğu bağlantılarının yanına doğru şekilde konumlandırmak için `/django-locallibrary-tutorial/catalog/ static/css/styles.css` dosyasına aşağıdaki stilleri eklemeniz gerekir :*class="btn btn-link*"

```CSS
#logout-form {
  display: inline;
}
#logout-form button {
  padding: 0;
  margin: 0;
}
```
Kenar çubuğundaki Giriş/Çıkış bağlantılarına tıklayarak deneyin. Yukarıdaki Şablon dizininde tanımladığınız çıkış/giriş sayfalarına yönlendirilmelisiniz .

**Görünümlerde test etme**
Fonksiyon tabanlı görünümler kullanıyorsanız, fonksiyonlarınıza erişimi kısıtlamanın en kolay yolu, *login_required* aşağıda gösterildiği gibi, görünüm fonksiyonunuza dekoratör uygulamaktır. Kullanıcı giriş yapmışsa, görünüm kodunuz normal şekilde çalışır. Kullanıcı giriş yapmamışsa, bu, proje ayarlarında tanımlanan giriş URL'sine ( settings.LOGIN_URL) yönlendirme yapar ve geçerli mutlak yolu *next* URL parametresi olarak iletir. Kullanıcı başarılı bir şekilde giriş yaparsa, bu sayfaya geri döner, ancak bu sefer kimliği doğrulanmış olur.

```PYTHON
from django.contrib.auth.decorators import login_required

@login_required
def my_view(request):
    # …
```

Benzer şekilde, sınıf tabanlı görünümlerinizde erişimi yalnızca oturum açmış kullanıcılara kısıtlamanın en kolay yolu, sınıfından türetmektir *LoginRequiredMixin*. Bu mixin'i öncelikle üst sınıf listesinde, ana görünüm sınıfından önce bildirmeniz gerekir.

```PYTHON
from django.contrib.auth.mixins import LoginRequiredMixin

class MyView(LoginRequiredMixin, View):
    # …
```

Bu, dekoratörle tamamen aynı yönlendirme davranışına sahiptir *login_required*. Ayrıca, kullanıcı kimliği doğrulanmamışsa yönlendirileceği alternatif bir konum ( login_url) ve nextgeçerli mutlak yolu eklemek için URL parametre adı ( redirect_field_name) belirtebilirsiniz.

```PYTHON
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```

**Örnek — mevcut kullanıcının kitaplarını listeleme**
Artık bir sayfayı belirli bir kullanıcıyla sınırlandırmayı bildiğimize göre, mevcut kullanıcının ödünç aldığı kitapların bir görünümünü oluşturalım.

Maalesef, kullanıcıların kitap ödünç alabilmeleri için henüz bir yöntemimiz yok! Bu nedenle, kitap listesini oluşturmadan önce, ödünç alma kavramını destekleyecek şekilde modeli genişleteceğiz *BookInstance* ve Django Admin uygulamasını kullanarak test kullanıcımıza belirli sayıda kitap ödünç vereceğiz.

**Modeller**
*BookInstance* Öncelikle, kullanıcıların ödünç aldıkları bir kitaba sahip olmalarını mümkün kılmamız gerekecek (zaten bir tarih *status* ve bir değişkenimiz var *due_back*, ancak bu model ile belirli bir kullanıcı arasında henüz bir ilişki yok). Bunu (bire çok) bir alan kullanarak oluşturacağız *ForeignKey*. Ayrıca, ödünç alınan bir kitabın vadesinin geçip geçmediğini test etmek için kolay bir mekanizmaya ihtiyacımız var.

catalog/models.py *settings* dosyasını açın ve *django.conf* (ayarların daha sonra bunları kullanan kodlar tarafından da kullanılabilmesi için) aşağıdaki kodu dosyanın en üstündeki önceki import satırının hemen altına ekleyin:

```PYTHON
from django.conf import settings
```

Ardından, *borrower* alanı modele ekleyin *BookInstance* ve ayarın değeri olarak anahtar için kullanıcı modelini belirleyin . Ayarı özel bir kullanıcı modeliyle *AUTH_USER_MODEL*  geçersiz kılmadığımız için bu, varsayılan modele eşlenir .*User django.contrib.auth.models*

```PYTHON
borrower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
```

Dosyanın en üst kısımlarına yakın bir yere şunu ekleyin:

```PYTHON
from datetime import date
```

Şimdi sınıfa aşağıdaki özellik tanımını ekleyin *BookInstance*:

```PYTHON
@property
def is_overdue(self):
    """Determines if the book is overdue based on due date and current date."""
    return bool(self.due_back and date.today() > self.due_back)
```

Modellerimizi güncellediğimize göre, projede yeni geçişler oluşturmamız ve ardından bu geçişleri uygulamamız gerekecek:

```BASH
python3 manage.py makemigrations
python3 manage.py migrate
```

**Yönetici**
Şimdi catalog/admin.py dosyasını açın ve aşağıdaki gibi hem `<head>` hem de ` <head>` içindeki sınıfa *borrower* alanı ekleyin . Bu, alanın Yönetici bölümünde görünür olmasını sağlayacak ve gerektiğinde bir alanı bir alana atamamıza olanak tanıyacaktır.*BookInstance Adminlist_display fieldsets User BookInstance*

```PYTHON
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_display = ('book', 'status', 'borrower', 'due_back', 'id')
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book', 'imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back', 'borrower')
        }),
    )
```

**Birkaç kitap ödünç al**
Artık belirli bir kullanıcıya kitap ödünç vermek mümkün olduğuna göre, birkaç kaydı ödünç verin *BookInstance*. Ödünç verilenler *borrowed* alanını test kullanıcınıza ayarlayın, *status* "Ödünç verildi" seçeneğini belirleyin ve hem gelecek hem de geçmiş için son teslim tarihlerini ayarlayın.

**Kiralık olarak sergileniyor.**
Şimdi, mevcut kullanıcıya ödünç verilmiş tüm kitapların listesini almak için bir görünüm ekleyeceğiz. Alışık olduğumuz aynı genel sınıf tabanlı liste görünümünü kullanacağız, ancak bu sefer yalnızca oturum açmış bir kullanıcının bu görünümü çağırabilmesi için sınıfından içe aktarıp türeteceğiz . Ayrıca , farklı görünümler ve şablonlarla birkaç farklı BookInstance kayıt listesine sahip olabileceğimiz için varsayılanı kullanmak yerine *LoginRequiredMixin* bir sınıfı bildirmeyi tercih edeceğiz .*template_name*

Aşağıdakileri catalog/views.py dosyasına ekleyin :

```PYTHON
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin,generic.ListView):
    """Generic class-based view listing books on loan to current user."""
    model = BookInstance
    template_name = 'catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return (
            BookInstance.objects.filter(borrower=self.request.user)
            .filter(status__exact='o')
            .order_by('due_back')
        )
 ```

Sorgumuzu yalnızca mevcut kullanıcıya ait nesnelerle sınırlandırmak için *BookInstance*, yukarıda gösterildiği gibi yeniden uyguluyoruz *get_queryset()*. "o"nun "ödünç verilmiş" anlamına gelen saklanmış kod olduğunu ve *due_back* en eski öğelerin önce görüntülenmesi için tarihe göre sıraladığımızı unutmayın.

**Ödünç kitaplar için URL yapılandırması**
Şimdi /catalog/urls.py dosyasını açın ve path()yukarıdaki görünüme işaret eden bir URL ekleyin (aşağıdaki metni dosyanın sonuna kopyalayabilirsiniz).

```PYTHON
urlpatterns += [
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
```

**Ödünç verilen kitaplar için şablon**
Şimdi, bu sayfa için yapmamız gereken tek şey bir şablon eklemek. Öncelikle, /catalog/templates/catalog/bookinstance_list_borrowed_user.html şablon dosyasını oluşturun ve içine aşağıdaki içeriği ekleyin:

```DJANGO
{% extends "base_generic.html" %}

{% block content %}
    <h1>Borrowed books</h1>

    {% if bookinstance_list %}
    <ul>

      {% for bookinst in bookinstance_list %}
      <li class="{% if bookinst.is_overdue %}text-danger{% endif %}">
        <a href="{% url 'book-detail' bookinst.book.pk %}">{{ bookinst.book.title }}</a> ({{ bookinst.due_back }})
      </li>
      {% endfor %}
    </ul>

    {% else %}
      <p>There are no books borrowed.</p>
    {% endif %}
{% endblock %}
```

*Book* Bu şablon, daha önce ve nesneleri için oluşturduğumuz şablonlara çok benzer *Author*. Buradaki tek "yeni" şey, modele eklediğimiz yöntemi ( bookinst.is_overdue) kontrol etmemiz ve bunu vadesi geçmiş öğelerin rengini değiştirmek için kullanmamızdır.

Geliştirme sunucusu çalışırken, artık tarayıcınızda oturum açmış bir kullanıcının listesini şu adreste görüntüleyebilmelisiniz *http://127.0.0.1:8000/catalog/mybooks/*: . Bunu, kullanıcınız oturum açmışken ve oturum açmamışken deneyin (ikinci durumda, giriş sayfasına yönlendirilmelisiniz).

**Listeyi kenar çubuğuna ekleyin**
Son adım, bu yeni sayfaya ait bağlantıyı kenar çubuğuna eklemektir. Bunu, oturum açmış kullanıcı için diğer bilgileri gösterdiğimiz aynı bölüme yerleştireceğiz.

Temel şablonu ( /django-locallibrary-tutorial/catalog/templates/base_generic.html ) açın ve "Ödünç Aldıklarım" satırını aşağıdaki konumda kenar çubuğuna ekleyin.

```DJANGO
 <ul class="sidebar-nav">
   {% if user.is_authenticated %}
   <li>User: {{ user.get_username }}</li>

   <li><a href="{% url 'my-borrowed' %}">My Borrowed</a></li>

   <li>
     <form id="logout-form" method="post" action="{% url 'admin:logout' %}">
       {% csrf_token %}
       <button type="submit" class="btn btn-link">Logout</button>
     </form>
   </li>
   {% else %}
   <li><a href="{% url 'login' %}?next={{ request.path }}">Login</a></li>
   {% endif %}
 </ul>
 ```

**İzinler**
İzinler, modellerle ilişkilendirilir ve izne sahip bir kullanıcı tarafından bir model örneği üzerinde gerçekleştirilebilecek işlemleri tanımlar. Varsayılan olarak, Django tüm modellere otomatik olarak ekleme , değiştirme ve silme izinleri verir; bu da izinlere sahip kullanıcıların yönetici sitesi aracılığıyla ilgili işlemleri gerçekleştirmesine olanak tanır. Modellere kendi izinlerinizi tanımlayabilir ve bunları belirli kullanıcılara verebilirsiniz. Ayrıca, aynı modelin farklı örnekleriyle ilişkili izinleri de değiştirebilirsiniz.

Görünüm ve şablonlardaki izinlerin test edilmesi, kimlik doğrulama durumunun test edilmesine çok benzer (ve aslında, bir izni test etmek aynı zamanda kimlik doğrulamasını da test eder).

**Modeller**
class Meta İzinlerin tanımlanması , model bölümünde alan kullanılarak yapılır permissions. Bir demet içinde ihtiyacınız kadar izin belirtebilirsiniz; her izin, izin adını ve izin görüntüleme değerini içeren iç içe bir demet içinde tanımlanır. Örneğin, bir kullanıcının bir kitabın gösterildiği gibi iade edildiğini işaretlemesine izin veren bir izin tanımlayabiliriz:

```PYTHON
class BookInstance(models.Model):
    # …
    class Meta:
        # …
        permissions = (("can_mark_returned", "Set book as returned"),)
 ```

Ardından, bu izni Yönetici sitesindeki "Kütüphaneci" grubuna atayabiliriz.

catalog/models.py dosyasını açın ve yukarıda gösterildiği gibi izinleri ekleyin. Veritabanını uygun şekilde güncellemek için migration'larınızı yeniden çalıştırmanız ( python3 manage.py makemigrations ve komutlarını çağırmanız) gerekecektir .python3 manage.py migrate

**Şablonlar**
Geçerli kullanıcının izinleri, adlı bir şablon değişkeninde saklanır {{ perms }}. Geçerli kullanıcının belirli bir izne sahip olup olmadığını, ilgili Django "uygulaması" içindeki belirli değişken adını kullanarak kontrol edebilirsiniz — örneğin, kullanıcının bu izne sahip olması durumunda {{ perms.catalog.can_mark_returned }}olur , aksi takdirde olur. Genellikle, aşağıdaki gibi şablon etiketini kullanarak izni test ederiz :True False{% if %}

```DJANGO
{% if perms.catalog.can_mark_returned %}
    <!-- We can mark a BookInstance as returned. -->
    <!-- Perhaps add code to link to a "book return" view here. -->
{% endif %}
```

**Görüşler**
permission_required İzinler , dekoratör kullanılarak fonksiyon görünümünde veya sınıf tabanlı bir görünümde test edilebilir *PermissionRequiredMixin*. Desen, oturum açma kimlik doğrulamasıyla aynıdır, ancak elbette birden fazla izin eklemeniz gerekebilir.

Fonksiyon görünümü dekoratörü:

```PYTHON
from django.contrib.auth.decorators import permission_required

@permission_required('catalog.can_mark_returned')
@permission_required('catalog.can_edit')
def my_view(request):
    # …
```

Sınıf tabanlı görünümler için izin gerektiren bir mixin.

```PYTHON
from django.contrib.auth.mixins import PermissionRequiredMixin

class MyView(PermissionRequiredMixin, View):
    permission_required = 'catalog.can_mark_returned'
    # Or multiple permissions
    permission_required = ('catalog.can_mark_returned', 'catalog.change_book')
    # Note that 'catalog.change_book' is permission
    # Is created automatically for the book model, along with add_book, and delete_book
```

## Django Eğitimi Bölüm 9: Formlarla Çalışma
**[Bu eğitimde, Django'da HTML Formları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms)** ile nasıl çalışılacağını ve özellikle model örneklerini oluşturmak, güncellemek ve silmek için form yazmanın en kolay yolunu göstereceğiz . Bu gösterimin bir parçası olarak, kütüphanecilerin kitapları yenileyebilmeleri ve kendi formlarımızı kullanarak (yönetici uygulamasını kullanmak yerine) yazarları oluşturabilmeleri, güncelleyebilmeleri ve silebilmeleri için LocalLibrary web sitesini genişleteceğiz.

**Genel Bakış**
HTML formu, bir web sayfasında bulunan ve kullanıcılardan sunucuya gönderilmek üzere bilgi toplamak için kullanılabilen bir veya daha fazla alan/bileşen grubudur. Formlar, metin kutuları, onay kutuları, radyo düğmeleri, tarih seçiciler vb. dahil olmak üzere birçok farklı veri türü için uygun bileşenler bulunduğundan, kullanıcı girdisi toplamak için esnek bir mekanizmadır. Formlar ayrıca, *POST* çapraz site istek sahteciliği korumasıyla veri göndermemize olanak tanıdığı için sunucuyla veri paylaşmanın nispeten güvenli bir yoludur.

![Test](./assets/33-print.png)

Formlarla çalışmak karmaşık olabilir! Geliştiricilerin form için HTML yazması, sunucuda (ve muhtemelen tarayıcıda da) girilen verileri doğrulayıp düzgün bir şekilde temizlemesi, geçersiz alanlar hakkında kullanıcıları bilgilendirmek için hata mesajlarıyla formu yeniden göndermesi, veriler başarıyla gönderildiğinde bunları işlemesi ve son olarak kullanıcıya başarıyı belirtmek için bir şekilde yanıt vermesi gerekir. Django Forms, formları ve alanlarını programatik olarak tanımlamanıza ve ardından bu nesneleri hem form HTML kodunu oluşturmak hem de doğrulama ve kullanıcı etkileşiminin büyük bir kısmını ele almak için kullanmanıza olanak tanıyan bir çerçeve sağlayarak tüm bu adımların iş yükünü büyük ölçüde azaltır.

Bu eğitimde, form oluşturmanın ve bunlarla çalışmanın birkaç yolunu ve özellikle de genel düzenleme görünümlerinin, modellerinizi manipüle etmek için form oluşturmak için yapmanız gereken iş miktarını nasıl önemli ölçüde azaltabileceğini göstereceğiz. Bu süreçte, kütüphanecilerin kütüphane kitaplarını yenilemelerine olanak tanıyan bir form ekleyerek LocalLibrary uygulamamızı genişleteceğiz ve kitap ve yazar oluşturma, düzenleme ve silme sayfaları oluşturacağız (kitap düzenleme için yukarıda gösterilen formun temel bir sürümünü yeniden üreteceğiz).

**HTML Formları**
Öncelikle, HTML Formlarına kısa bir genel bakış yapalım . Bir "takım" adını ve ilgili etiketi girmek için tek bir metin alanı içeren basit bir HTML formunu ele alalım:

![Test](./assets/34-print.png)

*&lt;form&gt;…&lt;/form&gt;* HTML'de form, en az bir *input* adet `<form>` öğesi içeren, `<form>` etiketleri içindeki öğelerin bir koleksiyonu olarak tanımlanır *type="submit"*.

```HTML
<form action="/team_name_url/" method="post">
  <label for="team_name">Enter name: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="Default name for team." />
  <input type="submit" value="OK" />
</form>
```

Burada sadece takım adını girmek için bir metin alanımız varken, bir formda çok sayıda başka giriş öğesi ve bunlarla ilişkili etiketler bulunabilir . Alanın *type* özniteliği, hangi tür widget'ın görüntüleneceğini tanımlar. Alanın *name* ve *id* özellikleri, JavaScript/CSS/HTML'de alanı tanımlamak için kullanılırken, *value* ilk görüntülendiğinde alanın başlangıç ​​değerini tanımlar. Eşleşen takım etiketi, etiketi kullanılarak belirtilir *label*(yukarıdaki "Ad girin" bölümüne bakın), ilişkili etiketinin değerini *for* içeren bir alanla birlikte .*id input*

Giriş *submit* alanı varsayılan olarak bir düğme olarak görüntülenecektir. Bu düğmeye basılarak formdaki diğer tüm giriş öğelerindeki veriler sunucuya yüklenebilir (bu durumda sadece ilgili *team_name* alan). Form öznitelikleri, *method* verilerin gönderilmesi için kullanılan HTTP protokolünü ve verilerin sunucudaki hedef konumunu tanımlar ( *action* ):

- *action* Form gönderildiğinde verilerin işlenmek üzere gönderileceği kaynak/URL. Bu ayarlanmamışsa (veya boş bir dize olarak ayarlanmışsa), form mevcut sayfa URL'sine geri gönderilecektir.
- *method* Verileri göndermek için kullanılan HTTP yöntemi: post veya get .
- *POST* Verilerin sunucunun veritabanında değişikliğe yol açacağı durumlarda bu yöntem her zaman kullanılmalıdır, çünkü bu yöntemle veritabanı, siteler arası sahte istek saldırılarına karşı daha dirençli hale getirilebilir.
- Bu *GET* yöntem yalnızca kullanıcı verilerini değiştirmeyen formlar için kullanılmalıdır (örneğin, arama formu). URL'yi yer imlerine eklemek veya paylaşmak istediğiniz durumlarda kullanılması önerilir.
Sunucunun rolü öncelikle formun başlangıç ​​durumunu oluşturmaktır; bu durum ya boş alanlar içerir ya da başlangıç ​​değerleriyle önceden doldurulmuştur. Kullanıcı gönder düğmesine bastıktan sonra, sunucu web tarayıcısından form verilerini ve değerlerini alır ve bilgileri doğrulamalıdır. Form geçersiz veriler içeriyorsa, sunucu formu tekrar görüntülemeli, bu sefer "geçerli" alanlarda kullanıcı tarafından girilen verilerle ve geçersiz alanlar için sorunu açıklayan mesajlarla birlikte göstermelidir. Sunucu tüm geçerli form verilerini içeren bir istek aldığında, uygun bir işlem gerçekleştirebilir (örneğin: verileri kaydetme, arama sonucunu döndürme, dosya yükleme vb.) ve ardından kullanıcıyı bilgilendirebilir.

Tahmin edebileceğiniz gibi, HTML oluşturmak, döndürülen verileri doğrulamak, gerekirse hata raporlarıyla girilen verileri yeniden görüntülemek ve geçerli veriler üzerinde istenen işlemi gerçekleştirmek, "doğru bir şekilde" yapılabilmesi için oldukça fazla çaba gerektirebilir. Django, bu ağır iş yükünün ve tekrarlayan kodların bir kısmını ortadan kaldırarak bunu çok daha kolay hale getiriyor!

**Django form işleme süreci**
Django'nun form işleme mekanizması, önceki eğitimlerde öğrendiğimiz (modellerimiz hakkında bilgi görüntülemek için) tüm teknikleri kullanır: görünüm bir istek alır, modellerden veri okuma da dahil olmak üzere gerekli tüm işlemleri gerçekleştirir, ardından bir HTML sayfası oluşturur ve döndürür (görüntülenecek verileri içeren bir bağlamı geçirdiğimiz bir şablondan ). İşleri daha karmaşık hale getiren şey, sunucunun ayrıca kullanıcı tarafından sağlanan verileri işleyebilmesi ve herhangi bir hata varsa sayfayı yeniden görüntüleyebilmesi gerektiğidir.

Aşağıda, Django'nun form isteklerini nasıl işlediğine dair bir işlem akış şeması gösterilmektedir; bu şema, form içeren bir sayfaya yapılan istekle (yeşil renkte gösterilmiştir) başlar.

![Test](./assets/35-print.png)

Yukarıdaki şemaya göre, Django'nun form işleme mekanizmasının yaptığı başlıca şeyler şunlardır:

1\.Kullanıcı tarafından ilk kez talep edildiğinde varsayılan formu görüntüleyin.

- Yeni bir kayıt oluşturuyorsanız form boş alanlar içerebilir veya (örneğin, bir kaydı değiştiriyorsanız veya kullanışlı varsayılan başlangıç ​​değerleriniz varsa) önceden başlangıç ​​değerleriyle doldurulmuş olabilir.
- Bu aşamada form, herhangi bir kullanıcı tarafından girilen veriyle ilişkilendirilmediği için (başlangıç ​​değerleri olsa da) " bağlantısız" olarak adlandırılır .

2\.Gönderim isteğinden gelen verileri alın ve forma bağlayın.

- Verileri forma bağlamak, formu yeniden görüntülememiz gerektiğinde kullanıcının girdiği verilerin ve olası hataların kullanılabilir olması anlamına gelir.

3\.Verileri temizleyin ve doğrulayın.

- Veri temizleme işlemi, sunucuya kötü amaçlı içerik göndermek için kullanılabilecek geçersiz karakterleri kaldırmak gibi giriş alanlarının temizlenmesini gerçekleştirir ve bunları tutarlı Python türlerine dönüştürür.
- Doğrulama, değerlerin alan için uygun olup olmadığını kontrol eder (örneğin, doğru tarih aralığında olup olmadıklarını, çok kısa veya çok uzun olmadıklarını vb.).

4\.Eğer herhangi bir veri geçersizse, formu yeniden görüntüleyin; bu sefer kullanıcı tarafından girilen değerler ve sorunlu alanlar için hata mesajları da gösterilecektir.

5\.Tüm veriler geçerliyse, gerekli işlemleri gerçekleştirin (örneğin verileri kaydedin, e-posta gönderin, arama sonucunu döndürün, dosya yükleyin vb.).

6\.Tüm işlemler tamamlandıktan sonra, kullanıcıyı başka bir sayfaya yönlendirin.

Django, yukarıda detaylandırılan görevlerde size yardımcı olacak bir dizi araç ve yaklaşım sunar. En temel olanı *Form*, hem form HTML'sinin oluşturulmasını hem de veri temizleme/doğrulama işlemlerini basitleştiren sınıftır. Bir sonraki bölümde, kütüphanecilerin kitapları yenilemesine olanak tanıyan bir sayfanın pratik örneğini kullanarak formların nasıl çalıştığını açıklayacağız.

**Form ve fonksiyon görünümünü kullanarak yenileme rezervasyon formu**
Ardından, kütüphanecilerin ödünç alınan kitapları yenilemelerine olanak tanıyan bir sayfa ekleyeceğiz. Bunu yapmak için, kullanıcıların bir tarih değeri girmesine olanak tanıyan bir form oluşturacağız. Alanı, geçerli tarihten 3 hafta sonrasını (normal ödünç alma süresi) başlangıç ​​değeri olarak belirleyeceğiz ve kütüphanecinin geçmişe veya çok uzak bir geleceğe ait bir tarih girememesini sağlamak için bazı doğrulamalar ekleyeceğiz. Geçerli bir tarih girildiğinde, bunu geçerli kaydın alanına yazacağız *BookInstance.due_back.*

Bu örnekte fonksiyon tabanlı bir görünüm ve bir sınıf kullanılacaktır . Aşağıdaki bölümlerde formların nasıl çalıştığı ve devam eden LocalLibraryForm projemizde yapmanız gereken değişiklikler açıklanmaktadır .

**Biçim**
Bu *Form* sınıf, Django'nun form işleme sisteminin kalbidir. Formdaki alanları, düzenlerini, görüntüleme bileşenlerini, etiketlerini, başlangıç ​​değerlerini, geçerli değerlerini ve (doğrulandıktan sonra) geçersiz alanlarla ilişkili hata mesajlarını belirtir. Sınıf ayrıca, önceden tanımlanmış formatlar (tablolar, listeler vb.) kullanarak şablonlarda kendisini oluşturmak veya herhangi bir öğenin değerini almak (ince taneli manuel oluşturmayı sağlamak) için yöntemler de sağlar.

**Bir Form Beyan Etme**
Bir alanın bildirim sözdizimi, *Form* bir alanın bildirim sözdizimine çok benzer *Model* ve aynı alan türlerini (ve bazı benzer parametreleri) paylaşır. Bu mantıklıdır çünkü her iki durumda da her alanın doğru veri türlerini işlediğinden, geçerli verilerle sınırlandırıldığından ve görüntüleme/belgeleme için bir açıklamaya sahip olduğundan emin olmamız gerekir.

Formlar, uygulama dizini içindeki forms.py dosyasında tanımlanır . /catalog/forms.py dosyasını oluşturun ve açın . Bir form oluşturmak için Form, kütüphaneyi içe aktarırız *forms*, sınıftan türetiriz *Form* ve formun alanlarını tanımlarız. Kütüphane kitap yenileme formumuz için çok temel bir form sınıfı aşağıda gösterilmiştir — bunu yeni dosyanıza ekleyin:

```PYTHON
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

**Form alanları**
Bu durumda, *DateField* yenileme tarihini girmek için tek bir alanımız var; bu alan HTML'de boş bir değerle, varsayılan " Yenileme tarihi: " etiketiyle ve bazı yararlı kullanım metinleriyle (" Şimdi ile 4 hafta arası bir tarih girin (varsayılan 3). ") görüntülenecektir.

Form alanlarının birçok başka türü de vardır ve bunları büyük ölçüde eşdeğer model alan sınıflarına olan benzerliklerinden tanıyacaksınız:

- **[BooleanField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#booleanfield)**
- **[CharField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#charfield)**
- **[ChoiceField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#choicefield)**
- **[TypedChoiceField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#typedchoicefield)**
- **[DateField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#datefield)**
- **[DateTimeField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#datetimefield)**
- **[DecimalField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#decimalfield)**
- **[DurationField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#durationfield)**
- **[EmailField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#emailfield)**
- **[FileField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#filefield)**
- **[FilePathField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#filepathfield)**
- **[FloatField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#floatfield)**
- **[ImageField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#imagefield)**
- **[IntegerField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#integerfield)**
- **[GenericIPAddressField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#genericipaddressfield)**
- **[MultipleChoiceField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#multiplechoicefield)**
- **[TypedMultipleChoiceField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#typedmultiplechoicefield)**
- **[NullBooleanField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#nullbooleanfield)**
- **[RegexField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#regexfield)**
- **[SlugField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#slugfield)**
- **[TimeField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#timefield)**
- **[URLField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#urlfield)**
- **[UUIDField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#uuidfield)**
- **[ComboField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#combofield)***
- **[MultiValueField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#multivaluefield)**
- **[SplitDateTimeField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#splitdatetimefield)**
- **[ModelMultipleChoiceField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#modelmultiplechoicefield)**
- **[ModelChoiceField](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#modelchoicefield)**

Çoğu alanda ortak olan argümanlar aşağıda listelenmiştir (bunların mantıklı varsayılan değerleri vardır):

- **[required](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#required)** Bu ayar etkinleştirilirse *True*, alan boş bırakılamaz veya bir *None* değer girilemez. Alanlar varsayılan olarak zorunludur, bu nedenle *required=False* formda boş değerlere izin vermek için bu ayarı etkinleştirmeniz gerekir.
- **[label](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#label)**: Alanın HTML'de oluşturulması sırasında kullanılacak etiket. Etiket belirtilmezse, Django alan adının ilk harfini büyük harfle yazıp alt çizgileri boşluklarla değiştirerek bir etiket oluşturur (örneğin, Yenileme tarihi ).
- **[label_suffix](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#label-suffix)** Varsayılan olarak, etiketin ardından iki nokta üst üste işareti görüntülenir (örneğin, Yenileme tarihi : ). Bu argüman, farklı karakterler içeren farklı bir sonek belirtmenize olanak tanır.
- **[initial](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#initial)** Form görüntülendiğinde alanın başlangıç ​​değeri.
- **[widget](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#widget)** Kullanılacak görüntüleme bileşeni.
- **[help_text](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#help-text)**(Yukarıdaki örnekte görüldüğü gibi): Alanın nasıl kullanılacağını açıklamak için formlarda görüntülenebilecek ek metin.
- **[error_messages](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#error-messages)**: Alan için hata mesajlarının listesi. Gerekirse bunları kendi mesajlarınızla geçersiz kılabilirsiniz.
- **[validators](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#validators)**Alan doğrulandığında çağrılacak fonksiyonların listesi.
- **[localize](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#localize)**Form veri girişinin yerelleştirilmesini sağlar (daha fazla bilgi için bağlantıya bakın).
- **[disabled](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#disabled)**Bu alan görüntülenir ancak değeri düzenlenemez True. Varsayılan değer şudur *False:* .

**Doğrulama**
Django, verilerinizi doğrulayabileceğiniz birçok yer sunar. Tek bir alanı doğrulamak için en kolay yol, kontrol etmek istediğiniz alanın yöntemini geçersiz kılmaktır . Örneğin, girilen değerlerin şu an ile 4 hafta arasında olup olmadığını aşağıdaki gibi uygulayarak *clean_<field_name>()* doğrulayabiliriz .*renewal_dateclean_renewal_date()*

forms.py dosyanızı aşağıdaki gibi güncelleyin:

```PYTHON
import datetime

from django import forms

from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        # Check if a date is not in the past.
        if data < datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        # Check if a date is in the allowed range (+4 weeks from today).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Remember to always return the cleaned data.
        return data
```

Dikkat edilmesi gereken iki önemli nokta var. Birincisi, verilerimizi kullanarak elde etmemiz *self.cleaned_data['renewal_date'*]ve fonksiyonun sonunda değiştirip değiştirmememizden bağımsız olarak bu verileri döndürmemizdir. Bu adım, varsayılan doğrulayıcılar kullanılarak potansiyel olarak güvenli olmayan girdilerden arındırılmış ve verilerin doğru standart türüne (bu durumda bir Python nesnesi) dönüştürülmüş verileri elde etmemizi sağlar *datetime.date*.

İkinci nokta ise, bir değer aralığımızın dışında kalırsa, *ValidationError* geçersiz bir değer girildiğinde formda görüntülenmesini istediğimiz hata metnini belirten bir hata mesajı (error) fırlatırız. Yukarıdaki örnek ayrıca bu metni Django'nun **[çeviri fonksiyonlarından](https://docs.djangoproject.com/en/6.1/topics/i18n/translation/)** birine (*gettext_lazy()*``` olarak içe aktarılır`` *_()*) sarar; bu, sitenizi daha sonra çevirmek istiyorsanız iyi bir uygulamadır.

**URL yapılandırması**
Görünümümüzü oluşturmadan önce, yenileme kitapları sayfası için bir URL yapılandırması ekleyelim . Aşağıdaki yapılandırmayı /catalog/urls.py dosyasının en altına kopyalayın :

```PYTHON
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

URL yapılandırması , /catalog/book/ <bookinstance_id> /renew/ biçimindeki URL'leri views.py *renew_book_librarian()* dosyasındaki belirtilen fonksiyona yönlendirecek ve kimliği parametre olarak gönderecektir . Desen yalnızca doğru biçimlendirilmişse eşleşir .*BookInstance pk pk uuid*

**Not**: Yakalanan URL verilerine istediğimiz herhangi bir adı verebiliriz, çünkü görünüm fonksiyonu üzerinde tam kontrolümüz var (belirli bir ada sahip parametreler bekleyen genel bir detay görünüm sınıfı kullanmıyoruz). Ancak, pk"birincil anahtar"ın kısaltması olan "" kullanmak makul bir yaklaşımdır!

**Görüş**
Yukarıda Django form işleme sürecinde tartışıldığı gibi , görünüm ilk çağrıldığında varsayılan formu oluşturmalı ve ardından veriler geçersizse hata mesajlarıyla yeniden oluşturmalı veya veriler geçerliyse verileri işleyip yeni bir sayfaya yönlendirmelidir. Bu farklı işlemleri gerçekleştirmek için, görünümün varsayılan formu oluşturmak için ilk kez mi yoksa verileri doğrulamak için sonraki bir zamanda mı çağrıldığını bilmesi gerekir.

*POST* Sunucuya bilgi göndermek için istek kullanan formlar için en yaygın yöntem, görünümün form doğrulama isteklerini belirlemek için *POST* istek türüne ( ) karşı test yapması ve (bir koşul kullanarak) ilk form oluşturma isteğini belirlemesidir. Verilerinizi bir istek kullanarak göndermek istiyorsanız , bunun ilk mi yoksa sonraki görünüm çağrısı mı olduğunu belirlemenin tipik bir yolu, form verilerini okumaktır (örneğin, formdaki gizli bir değeri okumak).*if request.method == 'POST':GET else GET*

Kitap yenileme işlemi veritabanımıza veri yazacağı için, gelenek gereği *POST* istek yaklaşımını kullanıyoruz. Aşağıdaki kod parçası, bu tür fonksiyon görünümü için (çok standart) bir kalıbı göstermektedir.

```PYTHON
import datetime

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from catalog.forms import RenewBookForm

def renew_book_librarian(request, pk):
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed'))

    # If this is a GET (or any other method) create the default form.
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

Öncelikle, formumuzu ( *RenewBookForm*) ve görünüm fonksiyonunun gövdesinde kullanılan diğer bazı yararlı nesneleri/yöntemleri içe aktarıyoruz:

- **[get_object_or_404()](https://docs.djangoproject.com/en/6.1/topics/http/shortcuts/#get-object-or-404)**Belirtilen modelden birincil anahtar değerine göre bir nesne döndürür ve *Http404* kayıt mevcut değilse bir istisna (bulunamadı) hatası verir.
- **[HttpResponseRedirec](https://docs.djangoproject.com/en/6.1/ref/request-response/#django.http.HttpResponseRedirect)** Bu, belirtilen bir URL'ye yönlendirme oluşturur (HTTP durum kodu 302).
- **[reverse()](https://docs.djangoproject.com/en/6.1/ref/urlresolvers/#django.urls.reverse)** *url* Bu, bir URL yapılandırma adından ve bir dizi argümandan bir URL oluşturur. Şablonlarımızda kullandığımız etiketin Python karşılığıdır .
- **[datetime](https://docs.python.org/3/library/datetime.html)**: Tarih ve saatlerle işlem yapmak için kullanılan bir Python kütüphanesi.

Görünümde, öncelikle mevcut tarihi almak için *pk* argümanı kullanıyoruz (eğer bu tarih mevcut değilse, görünüm hemen kapanacak ve sayfada "bulunamadı" hatası görüntülenecektir). Eğer bu bir istek değilse (yan tümce tarafından ele alınır ), o zaman mevcut tarihten itibaren 3 hafta sonrasını alan için bir değer geçirerek varsayılan formu oluşturuyoruz .*get_object_or_404() Book Instance POST else initial renewal_date*

```PYTHON
book_instance = get_object_or_404(BookInstance, pk=pk)

# If this is a GET (or any other method) create the default form
else:
    proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
    form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

context = {
    'form': form,
    'book_instance': book_instance,
}

return render(request, 'catalog/book_renew_librarian.html', context)
```

Formu oluşturduktan sonra, *render()* şablonu ve formumuzu içeren bir bağlamı belirterek HTML sayfasını oluşturmak için çağrı yapıyoruz. Bu durumda, bağlam ayrıca, *BookInstanc* eyenilediğimiz kitap hakkında bilgi sağlamak için şablonda kullanacağımız &lt;form&gt; etiketimizi de içeriyor.

Ancak, eğer bu bir *POST* istek ise, nesnemizi oluşturur *form* ve istekten gelen verilerle doldururuz. Bu işleme "bağlama" denir ve formu doğrulamamızı sağlar.

Ardından formun geçerli olup olmadığını kontrol ederiz; bu işlem, tüm alanlardaki doğrulama kodlarını çalıştırır; buna, tarih alanımızın gerçekten geçerli bir tarih olup olmadığını kontrol eden genel kod ve *clean_renewal_date()* tarihin doğru aralıkta olup olmadığını kontrol eden forma özgü işlev de dahildir.

```PYTHON
book_instance = get_object_or_404(BookInstance, pk=pk)

# If this is a POST request then process the Form data
if request.method == 'POST':

    # Create a form instance and populate it with data from the request (binding):
    form = RenewBookForm(request.POST)

    # Check if the form is valid:
    if form.is_valid():
        # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
        book_instance.due_back = form.cleaned_data['renewal_date']
        book_instance.save()

        # redirect to a new URL:
        return HttpResponseRedirect(reverse('all-borrowed'))

context = {
    'form': form,
    'book_instance': book_instance,
}

return render(request, 'catalog/book_renew_librarian.html', context)
```

Form geçerli değilse *render()* tekrar çağırırız, ancak bu sefer bağlamda iletilen form değeri hata mesajlarını da içerecektir.

Form geçerliyse, öznitelik aracılığıyla verilere erişerek verileri kullanmaya başlayabiliriz *form.cleaned_data*(örneğin, ). Burada, verileri ilgili nesnenin değerine *data = form.cleaned_data['renewal_date']*kaydediyoruz .*due_back BookInstance*

**Uyarı**: Form verilerine doğrudan istek üzerinden de erişebilirsiniz (örneğin, *request.POST['renewal_date']GET request.GET['renewal_date'*]isteği kullanıyorsanız), ancak bu TAVSİYE EDİLMEZ. Temizlenen veriler temizlenir, doğrulanır ve Python dostu türlere dönüştürülür.

Görünümün form işleme kısmındaki son adım, genellikle bir "başarı" sayfasına yönlendirmektir. Bu durumda, ( Django Eğitimi Bölüm 8: Kullanıcı kimlik doğrulaması ve izinleri bölümünde "meydan okuma" olarak oluşturulan ) adlı görünüme yönlendirmek için *HttpResponseRedirect* ve kullanıyoruz . Eğer bu sayfayı siz oluşturmadıysanız, URL adresindeki ana sayfaya yönlendirmeyi düşünebilirsiniz .*reverse()'all-borrowed'/*

Form işleme için gereken her şey bu kadar, ancak yine de görünüme erişimi yalnızca kitap yenileme iznine sahip oturum açmış kütüphanecilerle sınırlandırmamız gerekiyor. *@login_required* Kullanıcının oturum açmış olmasını şart koşmak için, erişime izin vermek üzere *@permission_required* mevcut iznimizle birlikte fonksiyon dekoratörünü kullanıyoruz (dekoratörler sırayla işlenir). Muhtemelen ( ) *can_mark_returned* içinde yeni bir izin ayarı oluşturmamız gerekirdi , ancak örneği basit tutmak için mevcut olanı yeniden kullanacağız.*BookInstance can_renew*

Son görünüm aşağıda gösterildiği gibidir. Lütfen bunu /catalog/views.py dosyasının en altına kopyalayın .

```PYTHON
import datetime

from django.contrib.auth.decorators import login_required, permission_required
from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from catalog.forms import RenewBookForm

@login_required
@permission_required('catalog.can_mark_returned', raise_exception=True)
def renew_book_librarian(request, pk):
    """View function for renewing a specific BookInstance by librarian."""
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed'))

    # If this is a GET (or any other method) create the default form.
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

**Şablon**
Görünümde belirtilen şablonu ( /catalog/templates/catalog/book_renew_librarian.html ) oluşturun ve aşağıdaki kodu içine kopyalayın:

```DJANGO
{% extends "base_generic.html" %}

{% block content %}
  <h1>Renew: {{ book_instance.book.title }}</h1>
  <p>Borrower: {{ book_instance.borrower }}</p>
  <p {% if book_instance.is_overdue %} class="text-danger"{% endif %} >Due date: {{ book_instance.due_back }}</p>

  <form action="" method="post">
    {% csrf_token %}
    {{ form }}
    <input type="submit" value="Submit">
  </form>
{% endblock %}
```

Bu konuların çoğu önceki eğitimlerden tamamen tanıdık gelecektir.

*{{ book_instance }}* Temel şablonu genişletiyoruz ve ardından içerik bloğunu yeniden tanımlıyoruz. Fonksiyonda bağlam nesnesine aktarıldığı için (ve değişkenlerine) referans verebiliyoruz *render()* ve bunları kitap başlığını, ödünç alan kişiyi ve orijinal teslim tarihini listelemek için kullanıyoruz.

Form kodu nispeten basittir. İlk olarak, *form* formun nereye gönderileceğini belirten etiketleri (* action*) ve *method* verilerin gönderilmesi için kullanılan yöntemi (bu durumda bir ) tanımlıyoruz — sayfanın üst kısmındaki HTML Formları *POST* genel bakışını hatırlarsanız , gösterildiği gibi boş bir , form verilerinin sayfanın geçerli URL'sine geri gönderileceği anlamına gelir (ki bu da istediğimiz şeydir). Etiketlerin içinde, kullanıcının verileri göndermek için basabileceği girişi tanımlıyoruz . Form etiketlerinin hemen içine eklenen , Django'nun siteler arası sahteciliğe karşı korumasının bir parçasıdır.*action submit{% csrf_token %}*

**Not:** *{% csrf_token %}* Veri göndermek için kullanan oluşturduğunuz her Django şablonuna bu kodu ekleyin *POST*. Bu, formların kötü niyetli kullanıcılar tarafından ele geçirilme olasılığını azaltacaktır.

Geriye kalan tek şey *{{ form }}*, bağlam sözlüğünde şablona ilettiğimiz şablon değişkeni. Tahmin edilebileceği gibi, gösterildiği gibi kullanıldığında, etiketleri, widget'ları ve yardım metni de dahil olmak üzere tüm form alanlarının varsayılan görüntülenmesini sağlar; görüntülenme aşağıdaki gibidir:

```HTML
<div>
  <label for="id_renewal_date">Renewal date:</label>
  <div class="helptext" id="id_renewal_date_helptext">
    Enter a date between now and 4 weeks (default 3).
  </div>
  <input
    type="text"
    name="renewal_date"
    value="2023-11-08"
    required
    aria-describedby="id_renewal_date_helptext"
    id="id_renewal_date" />
</div>
```

**Not**: Sadece bir alanımız olduğu için belki de açıkça belli olmuyor, ancak varsayılan olarak her alan kendi öğesinde tanımlanır *&lt;div&gt;*. Şablon değişkenine referans verdiğinizde de aynı görüntüleme sağlanır *{{ form.as_div }}*.

Geçersiz bir tarih girerseniz, sayfada ayrıca hataların bir listesi de görüntülenir ( *errorlist* aşağıya bakınız). *aria-describedby* Özelliğin, giriş alanını hem yardım metnine hem de hata mesajına nasıl bağladığına dikkat edin; böylece ekran okuyucular tarafından duyurulurlar.

```HTML
<div>
  <label for="id_renewal_date">Renewal date:</label>
  <div class="helptext" id="id_renewal_date_helptext">
    Enter a date between now and 4 weeks (default 3).
  </div>
  <ul class="errorlist" id="id_renewal_date_error">
    <li>Invalid date - renewal in past</li>
  </ul>
  <input
    type="text"
    name="renewal_date"
    value="2023-11-08"
    required
    aria-invalid="true"
    aria-describedby="id_renewal_date_helptext id_renewal_date_error"
    id="id_renewal_date" />
</div>
```

**Form şablonu değişkenini kullanmanın diğer yolları**
` <field>` etiketini kullandığınızda *{{ form }}*, Django her alanı bir `<field>` öğesi içinde oluşturur *&lt;div&gt;*. Ayrıca her alanı bir tablo satırı ( *{{ form.as_table }}*kendi ` *<table>* <field>` öğeniz içinde `<field>` etiketini kullanarak), bir liste öğesi (`<list>` etiketini kullanarak *{{ form.as_ul }}*) veya bir paragraf (`<paragraf>` etiketini kullanarak *{{ form.as_p }}*) olarak da oluşturabilirsiniz.

Tek bir alanı görüntülemek için, o alanın *as_field_group* yöntemini kullanın. Örneğin, **[{{ form.renewal_date.as_field_group }}](https://docs.djangoproject.com/en/6.1/ref/forms/api/#django.forms.BoundField.as_field_group)** yalnızca o alan için etiketi, yardım metnini, hataları ve widget'ı *renewal_date*, ile aynı düzeni kullanarak görüntüler *{{ form }}*.

Formun her bir bölümünün oluşturulması üzerinde tam kontrol sahibi olmak da mümkündür; bunun için özelliklerine nokta gösterimi kullanarak indeksleme yapılabilir. Örneğin, alanımız için bir dizi ayrı öğeye erişebiliriz *renewal_date*:

- **{{ form.renewal_date }}**:Tüm alan.
- **{{ form.renewal_date.errors }}**Hata listesi.
- **{{ form.renewal_date.id_for_label }}**Etiketin kimliği.
- **{{ form.renewal_date.help_text }}**Alan yardım metni.

**Sayfayı test etme**
Django Eğitimi Bölüm 8: Kullanıcı kimlik doğrulaması ve izinleri bölümündeki "meydan okumayı" kabul ettiyseniz, kütüphanede ödünç verilen tüm kitapları gösteren ve yalnızca kütüphane personeli tarafından görülebilen bir görünümünüz olacak. Görünüm şuna benzer olabilir:

```DJANGO
{% extends "base_generic.html" %}

{% block content %}
    <h1>All Borrowed Books</h1>

    {% if bookinstance_list %}
    <ul>

      {% for bookinst in bookinstance_list %}
      <li class="{% if bookinst.is_overdue %}text-danger{% endif %}">
        <a href="{% url 'book-detail' bookinst.book.pk %}">{{ bookinst.book.title }}</a> ({{ bookinst.due_back }}) {% if user.is_staff %}- {{ bookinst.borrower }}{% endif %}
      </li>
      {% endfor %}
    </ul>

    {% else %}
      <p>There are no books borrowed.</p>
    {% endif %}
{% endblock %}
```

Yukarıdaki liste öğesi metnine aşağıdaki şablon kodunu ekleyerek her öğenin yanına kitap yenileme sayfasına bir bağlantı ekleyebiliriz. Bu şablon kodunun yalnızca döngü içinde çalışabileceğini unutmayın *{% for %}*, çünkü değer orada *bookinst* tanımlanır.

```DJANGO
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

**Not**:*catalog.can_mark_returned* Yukarıda eklenen yeni "Yenile" bağlantısını görebilmek ve bağlantılı sayfaya erişebilmek için test oturumunuzun gerekli izinlere sahip olması gerektiğini unutmayın (belki de süper kullanıcı hesabınızı kullanabilirsiniz).

Alternatif olarak, test URL'sini şu şekilde manuel olarak oluşturabilirsiniz *http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/*(geçerli bir URL *bookinstance_id*, kütüphanenizdeki bir kitap detay sayfasına giderek ve *id* alanı kopyalayarak elde edilebilir).

**Nasıl görünüyor?**
Başarılı olmanız durumunda, varsayılan form şu şekilde görünecektir:

![Test](./assets/36-print.png)

Geçersiz değer girilen form şu şekilde görünecektir:

![Test](./assets/37-print.png)

Yenileme bağlantısı içeren tüm kitapların listesi şu şekilde görünecektir:

![Test](./assets/38-print.png)

**ModelFormları**
Yukarıda açıklanan yaklaşımı kullanarak bir *Form* sınıf oluşturmak oldukça esnektir ve istediğiniz türde bir form sayfası oluşturmanıza ve bunu herhangi bir model veya modellerle ilişkilendirmenize olanak tanır.

Ancak, yalnızca tek bir modelin alanlarını eşleştirmek için bir forma ihtiyacınız varsa , modeliniz zaten formunuzda ihtiyaç duyduğunuz bilgilerin çoğunu tanımlamış olacaktır: alanlar, etiketler, yardım metni vb. Formunuzda model tanımlarını yeniden oluşturmak yerine, formu modelinizden oluşturmak için **[ModelForm[(https://docs.djangoproject.com/en/6.1/topics/forms/modelforms/)** *ModelForm* yardımcı sınıfını kullanmak daha kolaydır. Bu daha sonra görünümlerinizde tıpkı sıradan bir form gibi kullanılabilir *Form*.

*ModelForm* Aşağıda orijinaliyle aynı alanı içeren temel bir örnek *RenewBookForm* gösterilmiştir. Formu oluşturmak için yapmanız gereken tek şey, *class Meta* ilişkili *model*( ) ile birlikte forma dahil edilecek *BookInstance* modellerin listesini eklemektir.*fields*

```PYTHON
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
Not: Formdaki tüm alanları dahil etmek için `<pre>` etiketini kullanabilir veya modelden dahil edilmeyecek alanları belirtmek için `<pre>` etiketini (<pre>` yerine ) fields = '__all__'kullanabilirsiniz .excludefields
```

**Not**: Formdaki tüm alanları dahil etmek için `<pre>` etiketini kullanabilir veya modelden dahil edilmeyecek alanları belirtmek için `<pre>` etiketini (&lt;pre&gt;` yerine ) *fields = '__all__'* kullanabilirsiniz .*exclude fields*

Her iki yaklaşım da önerilmez çünkü modele eklenen yeni alanlar, geliştiricinin olası güvenlik etkilerini dikkate almasına gerek kalmadan, otomatik olarak forma dahil edilir.

**Not:** Bu, (bu durumda sadece bir alanımız olduğu için gerçekten de öyle) sadece bir alan kullanmaktan çok daha basit görünmeyebilir *Form.* Ancak, çok sayıda alanınız varsa, gereken kod miktarını önemli ölçüde azaltabilir!

Geri kalan bilgiler model alan tanımlarından gelir (örneğin, etiketler, widget'lar, yardım metni, hata mesajları). Bunlar tam olarak doğru değilse, *class Meta* değiştirilecek alanı ve yeni değerini içeren bir sözlük belirterek bunları geçersiz kılabiliriz. Örneğin, bu formda, alanımız için " Yenileme tarihi " etiketini (alan adına dayalı varsayılan " Son Teslim Tarihi " yerine ) ve ayrıca yardım metnimizin bu kullanım durumuna özgü olmasını isteyebiliriz. Aşağıda bu alanları nasıl geçersiz kılacağınız gösterilmektedir ve varsayılanlar yeterli değilse benzer şekilde *Meta* ayarlayabilirsiniz .*widget serror_messages*

```PYTHON
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Doğrulama eklemek için normal bir formda olduğu gibi aynı yaklaşımı kullanabilirsiniz *Form:* adlı bir fonksiyon tanımlarsınız *clean_<field_name>()* ve *ValidationError* geçersiz değerler için istisnalar oluşturursunuz. Orijinal formumuza göre tek fark, model alanının adı olması *due_back* ve olmamasıdır *renewal_date*. Bu değişiklik gereklidir çünkü içindeki karşılık gelen alan olarak *BookInstance* adlandırılır *due_back*.

```PYTHON
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    def clean_due_back(self):
       data = self.cleaned_data['due_back']

       # Check if a date is not in the past.
       if data < datetime.date.today():
           raise ValidationError(_('Invalid date - renewal in past'))

       # Check if a date is in the allowed range (+4 weeks from today).
       if data > datetime.date.today() + datetime.timedelta(weeks=4):
           raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

       # Remember to always return the cleaned data.
       return data

    class Meta:
        model = BookInstance
        fields = ['due_back']
        labels = {'due_back': _('Renewal date')}
        help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Yukarıdaki sınıf *RenewBookModelForm* artık işlevsel olarak orijinal sınıfımızla eşdeğerdir . İkinci form bildiriminde olduğu gibi ilgili form değişken adını 'den 'ye güncellediğiniz sürece, *RenewBookForm* şu anda kullandığınız her yerde onu içe aktarabilir ve kullanabilirsiniz : *.RenewBookForm renewal_date due_back RenewBookModelForm(initial={'due_back': proposed_renewal_date}*

**Genel düzenleme görünümleri**
Yukarıdaki fonksiyon görünümü örneğimizde kullandığımız form işleme algoritması, form düzenleme görünümlerinde son derece yaygın bir kalıbı temsil eder. Django, modeller temelinde görünümler oluşturmak, düzenlemek ve silmek için genel düzenleme görünümleri *ModelForm* oluşturarak bu "kalıp kodun" büyük bir kısmını sizin için soyutlar. Bunlar yalnızca "görünüm" davranışını ele almakla kalmaz, aynı zamanda modelden sizin için otomatik olarak form sınıfını (bir ) oluşturur .

**Not**: Burada açıklanan düzenleme görünümlerine ek olarak, "esneklik" ve "kodlama çabası" açısından işlevsel görünümümüz ile diğer genel görünümler arasında bir yerde bulunan bir FormView *FormView* sınıfı da vardır. Bunu kullanırken , yine de kendi FormView'inizi oluşturmanız gerekir *Form*, ancak tüm standart form işleme kalıplarını uygulamanız gerekmez. Bunun yerine, gönderimin geçerli olduğu bilindiğinde çağrılacak olan işlevin bir uygulamasını sağlamanız yeterlidir.

Bu bölümde, *Author* kütüphanemizden kayıt oluşturma, düzenleme ve silme işlevleri eklemek için sayfalar oluşturmak üzere genel düzenleme görünümlerini kullanacağız; bu da Yönetici sitesinin bazı bölümlerinin temel bir yeniden uygulamasını sağlayacaktır (bu, Yönetici sitesinin sağlayabileceğinden daha esnek bir şekilde yönetici işlevselliği sunmanız gerekiyorsa faydalı olabilir).

**Görüşler**
Views dosyasını ( /catalog/views.py ) açın ve aşağıdaki kod bloğunu dosyanın sonuna ekleyin:

```PYTHON
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db.models import RestrictedError
from django.contrib.auth.mixins import PermissionRequiredMixin
from .models import Author

class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': datetime.date(2023, 11, 11)}
    permission_required = 'catalog.add_author'

class AuthorUpdate(PermissionRequiredMixin, UpdateView):
    model = Author
    # Not recommended (potential security issue if more fields added)
    fields = '__all__'
    permission_required = 'catalog.change_author'

class AuthorDelete(PermissionRequiredMixin, DeleteView):
    model = Author
    success_url = reverse_lazy('authors')
    permission_required = 'catalog.delete_author'

    def form_valid(self, form):
        try:
            self.object.delete()
            return HttpResponseRedirect(self.success_url)
        except RestrictedError:
            return HttpResponseRedirect(
                reverse("author-delete", kwargs={"pk": self.object.pk})
            )
```

Gördüğünüz gibi, görünümleri oluşturmak, güncellemek veya silmek için sırasıyla *CreateView*, *UpdateView*, ve sınıflarından türetmeniz ve ardından ilgili modeli tanımlamanız gerekir. Ayrıca, bu görünümlerin çağrılmasını yalnızca sırasıyla , , ve izinlerine *DeleteView* sahip oturum açmış kullanıcılarla sınırlandırıyoruz .a*dd_author change_author delete_author*

"Oluşturma" ve "güncelleme" durumları için, formda görüntülenecek alanları da belirtmeniz gerekir (aynı sözdizimini kullanarak ). Bu durumda, bunları tek tek nasıl listeleyeceğimizi ve "tüm" alanları listelemek için sözdizimini gösteriyoruz. Ayrıca , alan_adı / değer *ModelForm* çiftlerinden oluşan bir sözlük kullanarak her alan için başlangıç ​​değerleri de belirtebilirsiniz (burada gösterim amacıyla keyfi olarak ölüm tarihini belirledik - bunu kaldırmak isteyebilirsiniz). Varsayılan olarak, bu görünümler başarılı olduğunda, yeni oluşturulan/düzenlenen model öğesini görüntüleyen bir sayfaya yönlendirecektir; bu durumda, önceki bir eğitimde oluşturduğumuz yazar detay görünümü olacaktır. Parametreyi açıkça belirterek alternatif bir yönlendirme konumu belirtebilirsiniz .*success_url*

Sınıfın *AuthorDelete* bu alanlardan herhangi birini görüntülemesine gerek yok, bu nedenle bunların belirtilmesine gerek yok. Ayrıca *success_url* (yukarıda gösterildiği gibi) bir değer belirledik, çünkü Django'nun yazar silindikten sonra gideceği belirgin bir varsayılan URL yok . Yukarıda , bir yazar silindikten sonra yazar listemize yönlendirmek için işlevini *Author* kullanıyoruz — bu, burada kullanılan tembelce yürütülen bir sürümüdür çünkü sınıf tabanlı bir görünüm özniteliğine bir URL sağlıyoruz.reverse_lazy() *reverse_lazy()* *reverse()*

Yazar silme işleminin her zaman başarılı olması durumunda sorun çözülmüş olurdu. Ancak maalesef, yazarın ilişkili bir kitabı varsa silme işlemi *Author* bir istisna oluşturur , çünkü modelimiz yazar alanı için bir sınırlama getiriyor . Bu durumu ele almak için görünüm, silme işlemi başarılı olursa ilgili sayfaya yönlendiren , aksi takdirde aynı forma geri yönlendiren bir yöntem geçersiz kılıyor. Aşağıdaki şablonu, herhangi bir kitapta kullanılan bir örneği silemeyeceğinizi açıkça belirtecek şekilde güncelleyeceğiz *.RestrictedError* *Book on_delete=models.RESTRICT ForeignKey form_valid() Author success_url Author Book*

**URL yapılandırmaları**
URL yapılandırma dosyanızı ( /catalog/urls.py ) açın ve dosyanın sonuna aşağıdaki yapılandırmayı ekleyin:

```PYTHON
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Burada özellikle yeni bir şey yok! Görünümlerin sınıflar olduğunu ve bu nedenle aracılığıyla çağrılmaları gerektiğini görebilirsiniz *.as_view()* ve her durumda URL kalıplarını tanıyabilmelisiniz. *pk* Yakalanan birincil anahtar değerimiz için ad olarak kullanmalıyız, çünkü bu, görünüm sınıfları tarafından beklenen parametre adıdır.

**Şablonlar**
"Oluştur" ve "güncelle" görünümleri varsayılan olarak aynı şablonu kullanır ve bu şablon modelinizin adıyla adlandırılır: ( örneğin, görünümünüzdeki alanı kullanarak soneki _form *model_name_form.html* dışında bir şeyle değiştirebilirsiniz .)*template_name_suffix template_name_suffix = '_other_suffix'*

Şablon dosyasını oluşturun */catalog/templates/catalog/author_form.html* ve aşağıdaki metni kopyalayın.

```DJANGO
{% extends "base_generic.html" %}

{% block content %}
<form action="" method="post">
  {% csrf_token %}
  {{ form }}
  <input type="submit" value="Submit" />
</form>
{% endblock %}
```

Bu, önceki formlarımıza benzer ve alanları kullanarak oluşturur . Ayrıca, formlarımızın CSRF saldırılarına karşı dayanıklı olmasını sağlamak için *{{ form }}* nasıl tekrar tanımladığımıza dikkat edin .*{% csrf_token %}*

"Sil" görünümü, şu formatta adlandırılmış bir şablon bulmayı bekler (son eki görünümünüzde *[model_name]_confirm_delete.html* değiştirebilirsiniz ). Şablon dosyasını oluşturun ve aşağıdaki metni kopyalayın.*template_name_suffix/catalog/templates/catalog/author_confirm_delete.html*

```DJANGO
{% extends "base_generic.html" %}

{% block content %}

<h1>Delete Author: {{ author }}</h1>

{% if author.book_set.all %}

<p>You can't delete this author until all their books have been deleted:</p>
<ul>
  {% for book in author.book_set.all %}
    <li><a href="{% url 'book-detail' book.pk %}">{{book}}</a> ({{ book.bookinstance_set.count }})</li>
  {% endfor %}
</ul>

{% else %}
<p>Are you sure you want to delete the author?</p>

<form action="" method="POST">
  {% csrf_token %}
  <input type="submit" action="" value="Yes, delete.">
</form>
{% endif %}

{% endblock %}
```

Şablon tanıdık gelmeli. Öncelikle yazarın herhangi bir kitapta kullanılıp kullanılmadığını kontrol eder ve eğer kullanılmışsa, yazar kaydı silinmeden önce silinmesi gereken kitapların listesini gösterir. Kullanılmamışsa, kullanıcının yazar kaydını silmek istediğini onaylamasını isteyen bir form görüntüler.

Son adım, sayfaları kenar çubuğuna bağlamaktır. Öncelikle, yazar oluşturma bağlantısını temel şablona ekleyeceğiz , böylece "personel" olarak kabul edilen ve yazar oluşturma iznine sahip oturum açmış kullanıcılar için tüm sayfalarda görünür olacaktır *( catalog.add_author)*. /catalog/templates/base_generic.html dosyasını açın ve yazar oluşturma iznine sahip kullanıcılara izin veren satırları ekleyin ("Tüm Ödünç Alınan" kitapları gösteren bağlantının bulunduğu aynı blokta). Aşağıda gösterildiği gibi URL'yi adıyla referans göstermeyi unutmayın *'author-create'*.

```DJANGO
{% if user.is_staff %}
<hr>
<ul class="sidebar-nav">
<li>Staff</li>
   <li><a href="{% url 'all-borrowed' %}">All borrowed</a></li>
{% if perms.catalog.add_author %}
   <li><a href="{% url 'author-create' %}">Create author</a></li>
{% endif %}
</ul>
{% endif %}
```

Yazarları güncelleme ve silme bağlantılarını yazar detay sayfasına ekleyeceğiz. catalog/templates/catalog/author_detail.html dosyasını açın ve aşağıdaki kodu ekleyin:

```DJANGO
{% block sidebar %}
  {{ block.super }}

  {% if perms.catalog.change_author or perms.catalog.delete_author %}
  <hr>
  <ul class="sidebar-nav">
    {% if perms.catalog.change_author %}
      <li><a href="{% url 'author-update' author.id %}">Update author</a></li>
    {% endif %}
    {% if not author.book_set.all and perms.catalog.delete_author %}
      <li><a href="{% url 'author-delete' author.id %}">Delete author</a></li>
    {% endif %}
    </ul>
  {% endif %}

{% endblock %}
```

Bu blok, *sidebar* temel şablondaki bloğu geçersiz kılar ve ardından orijinal içeriği kullanarak içeri çeker *{{ block.super }}*. Daha sonra, kullanıcının doğru izinlere sahip olması ve yazar kaydının herhangi bir kitapla ilişkilendirilmemiş olması koşuluyla, yazarı güncellemek veya silmek için bağlantılar ekler.

Sayfalar artık test edilmeye hazır!

**Sayfayı test etme**
Öncelikle, siteye yazar olarak ekleme, değiştirme ve silme yetkilerine sahip bir hesapla giriş yapın.

Herhangi bir sayfaya gidin ve kenar çubuğundan (URL ile *http://127.0.0.1:8000/catalog/author/create/*) "Yazar oluştur" seçeneğini seçin. Sayfa aşağıdaki ekran görüntüsüne benzemelidir.

![Test](./assets/39-print.png)

Alanlara değerleri girin ve ardından yazar kaydını kaydetmek için Gönder düğmesine basın . Şimdi, yeni yazarınızın ayrıntı görünümüne yönlendirileceksiniz; URL'si yaklaşık olarak şu şekilde olacaktır: *http://127.0.0.1:8000/catalog/author/10.*

![Test](./assets/40-print.png)

"Yazarı güncelle" bağlantısını (URL'si şuna benzer: ) seçerek kaydı düzenlemeyi test edebilirsiniz *http://127.0.0.1:8000/catalog/author/10/update/—* ekran görüntüsü göstermiyoruz çünkü "oluştur" sayfasına çok benziyor!

Son olarak, detay sayfasındaki kenar çubuğundan "Yazarı sil" seçeneğini belirleyerek sayfayı silebiliriz. Yazar kaydı hiçbir kitapta kullanılmıyorsa, Django aşağıda gösterilen silme sayfasını görüntülemelidir. Kaydı kaldırmak ve tüm yazarların listesine gitmek için " Evet, sil. " seçeneğine basın.

![Test](./assets/41-print.png)

## Django Eğitimi Bölüm 10: Bir Django Web Uygulamasını Test Etme
Web siteleri büyüdükçe, manuel olarak test etmek zorlaşır; test edilecek daha fazla şey olmasının yanı sıra, bileşenler arasındaki etkileşimler daha karmaşık hale geldikçe, bir alandaki küçük bir değişiklik, diğer alanlar üzerindeki etkisini doğrulamak için birçok ek test gerektirebilir. Bu sorunları hafifletmenin bir yolu, her değişiklik yaptığınızda kolayca ve güvenilir bir şekilde çalıştırılabilen otomatik testler yazmaktır. Bu eğitim, Django'nun test çerçevesini kullanarak web sitenizin birim testlerini nasıl otomatikleştireceğinizi göstermektedir.

**Genel Bakış**
Yerel Kütüphane şu anda tüm kitap ve yazarların listelerini görüntüleyen sayfalara, öğeler için detaylı görünümlere, öğeleri yenileme sayfasına ve öğeleri (ve formlar eğitimindeki görevi tamamladıysanız kayıtları da) oluşturma, güncelleme ve silme sayfalarına sahip *Book*. *Author* Bu nispeten küçük sitede bile *BookInstance*, her sayfaya manuel olarak gidip her şeyin beklendiği gibi çalıştığını yüzeysel olarak kontrol etmek birkaç dakika sürebiliyor. Değişiklikler yaptıkça ve siteyi büyüttükçe, her şeyin "doğru" çalıştığını manuel olarak kontrol etmek için gereken süre de artacaktır. Mevcut durumumuzu sürdürürsek, sonunda zamanımızın çoğunu test etmeye ve çok azını kodumuzu geliştirmeye harcayacağız.*AuthorBook*

Otomatik testler bu soruna gerçekten yardımcı olabilir! Bariz avantajları, manuel testlerden çok daha hızlı çalıştırılabilmeleri, çok daha düşük bir detay seviyesinde test yapabilmeleri ve her seferinde tam olarak aynı işlevselliği test etmeleridir (insan test uzmanları bu kadar güvenilir değil!). Hızlı oldukları için otomatik testler daha düzenli olarak çalıştırılabilir ve bir test başarısız olursa, kodun beklendiği gibi çalışmadığı yeri tam olarak gösterirler.

Ayrıca, otomatik testler kodunuzun ilk gerçek dünya "kullanıcısı" olarak hareket ederek, web sitenizin nasıl davranması gerektiği konusunda titiz davranmanızı ve belgelemenizi zorunlu kılar. Genellikle kod örneklerinizin ve belgelerinizin temelini oluştururlar. Bu nedenlerle, bazı yazılım geliştirme süreçleri test tanımlama ve uygulama ile başlar, ardından kod gerekli davranışa uyacak şekilde yazılır (örneğin, test odaklı ve davranış odaklı geliştirme).

Bu eğitimde, LocalLibrary web sitesine bir dizi test ekleyerek Django için otomatik testlerin nasıl yazılacağı gösterilmektedir .

**Test türleri**
Testlerin ve test yaklaşımlarının çok sayıda türü, seviyesi ve sınıflandırması vardır. En önemli otomatik testler şunlardır:

*Birim testleri*
Tek tek bileşenlerin işlevsel davranışlarını, genellikle sınıf ve işlev düzeyinde doğrulayın.

*Regresyon testleri*
Geçmişteki hataları yeniden üreten testler. Her test, hatanın giderildiğini doğrulamak için önce çalıştırılır, ardından kodda yapılan sonraki değişikliklerden sonra hatanın yeniden ortaya çıkmadığından emin olmak için tekrar çalıştırılır.

*Entegrasyon testleri*
Bileşen gruplarının birlikte kullanıldığında nasıl çalıştığını doğrulayın. Entegrasyon testleri, bileşenler arasındaki gerekli etkileşimlerin farkındadır, ancak her bir bileşenin iç işleyişinin farkında olmayabilir. Basit bileşen gruplarından tüm web sitesine kadar çeşitli yapıları kapsayabilirler.

**Not**: Diğer yaygın test türleri arasında kara kutu, beyaz kutu, manuel, otomatik, kanarya, duman, uygunluk, kabul, fonksiyonel, sistem, performans, yük ve stres testleri yer almaktadır. Daha fazla bilgi için bunları araştırabilirsiniz.

**Django test için neler sunuyor?**
Bir web sitesini test etmek karmaşık bir iştir, çünkü HTTP düzeyindeki istek işleme, model sorguları, form doğrulama ve işleme ve şablon oluşturma gibi çeşitli mantık katmanlarından oluşur.

Django, Python standart kütüphanesini temel alan küçük bir sınıf hiyerarşisine sahip bir test çerçevesi sunar **[unittest](https://docs.python.org/3/library/unittest.html#module-unittest)**. İsmine rağmen, bu test çerçevesi hem birim hem de entegrasyon testleri için uygundur. Django çerçevesi, web ve Django'ya özgü davranışları test etmeye yardımcı olmak için API yöntemleri ve araçlar ekler. Bunlar, istekleri simüle etmenize, test verileri eklemenize ve uygulamanızın çıktısını incelemenize olanak tanır. Django ayrıca **[farklı test çerçevelerini kullanmak için bir API ( LiveServerTestCase ) ve araçlar sağlar](https://docs.djangoproject.com/en/6.1/topics/testing/advanced/#other-testing-frameworks)** ; örneğin, canlı bir tarayıcıyla etkileşim kuran bir kullanıcıyı simüle etmek için popüler Selenium çerçevesiyle entegre olabilirsiniz.

Bir test yazmak için, Django (veya unittest ) test temel sınıflarından ( **[SimpleTestCase](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#simpletestcase)** , **[TransactionTestCase](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#transactiontestcase)** , **[TestCase](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#testcase)** , **[LiveServerTestCase](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#liveservertestcase)** ) herhangi birinden türetirsiniz ve ardından belirli işlevselliğin beklendiği gibi çalıştığını kontrol etmek için ayrı yöntemler yazarsınız (testler, ifadelerin sonuç olarak doğru *True* veya *False* yanlış değerler verdiğini veya iki değerin eşit olduğunu vb. test etmek için "assert" yöntemlerini kullanır). Bir test çalıştırması başlattığınızda, çerçeve türetilmiş sınıflarınızdaki seçilen test yöntemlerini yürütür. Test yöntemleri, aşağıda gösterildiği gibi, sınıfta tanımlanan ortak kurulum ve/veya sonlandırma davranışı ile bağımsız olarak çalıştırılır.

```PYTHON
class YourTestClass(TestCase):
    def setUp(self):
        # Setup run before every test method.
        pass

    def tearDown(self):
        # Clean up run after every test method.
        pass

    def test_something_that_will_pass(self):
        self.assertFalse(False)

    def test_something_that_will_fail(self):
        self.assertTrue(False)
 ```

Çoğu test için en iyi temel sınıf **[` django.test.TestCase`](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#testcase)**'dir . Bu test sınıfı, testleri çalıştırılmadan önce temiz bir veritabanı oluşturur ve her test fonksiyonunu kendi işleminde çalıştırır. Sınıf ayrıca, görünüm düzeyinde kodla etkileşim kuran bir kullanıcıyı simüle etmek için kullanabileceğiniz bir test istemcisine de sahiptir. Aşağıdaki bölümlerde, bu TestCase temel sınıfı kullanılarak oluşturulan birim testlerine odaklanacağız .

**Not**: **[`django.test.TestCase`](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#testcase)** sınıfı oldukça kullanışlıdır, ancak bazı testlerin gerekenden daha yavaş çalışmasına neden olabilir (her testin kendi veritabanını kurması veya görünüm etkileşimini simüle etmesi gerekmez). Bu sınıfla neler yapabileceğinizi öğrendikten sonra, bazı testlerinizi mevcut daha basit test sınıflarıyla değiştirmek isteyebilirsiniz.

**Neleri test etmelisiniz?**
Kendi kodunuzun tüm yönlerini test etmelisiniz, ancak Python veya Django'nun bir parçası olarak sağlanan kütüphaneleri veya işlevleri test etmemelisiniz.

Örneğin, aşağıda tanımlanan modeli ele alalım . Django tarafından tanımlandığı için, `value`'nun veritabanında doğru şekilde saklandığını açıkça *Author* test etmenize gerek yoktur (elbette pratikte geliştirme sırasında bu işlevselliği test etmeniz kaçınılmazdır). Ayrıca, `value`'nun bir tarih alanı olarak doğrulandığını da test etmenize gerek yoktur, çünkü bu da yine Django'da uygulanan bir özelliktir.*first_namelast_nameCharFielddate_of_birth*

Ancak etiketler için kullanılan metni ( Ad, Soyad, Doğum tarihi, Ölüm tarihi ) ve metin için ayrılan alanın boyutunu ( 100 karakter ) kontrol etmelisiniz, çünkü bunlar tasarımınızın bir parçasıdır ve gelecekte bozulabilir/değiştirilebilir.

```PYTHON
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return f'{self.last_name}, {self.first_name}'
```

*get_absolute_url()* Benzer şekilde, özel yöntemlerin ve işlevlerin gerektiği gibi davrandığını kontrol etmelisiniz *__str__()* çünkü bunlar sizin kodunuz/iş mantığınızdır. Bu durumda, *get_absolute_url()* Django yönteminin doğru şekilde uygulandığına güvenebilirsiniz *reverse()* , dolayısıyla test ettiğiniz şey, ilgili görünümün gerçekten tanımlanmış olmasıdır.

**Not**: Dikkatli okuyucular, doğum ve ölüm tarihlerini mantıklı değerlerle sınırlandırmak ve ölümün doğumdan sonra gerçekleştiğini kontrol etmek isteyebileceğimizi fark edebilirler. Django'da bu kısıtlama form sınıflarınıza eklenir (model alanları ve model doğrulayıcıları için doğrulayıcılar tanımlayabilirsiniz, ancak bunlar yalnızca modelin *clean()* yöntemi tarafından çağrıldıklarında form düzeyinde kullanılır. Bu *ModelForm*, bir `<form>` etiketi gerektirir veya modelin *clean()*yönteminin özel olarak çağrılması gerekir.)

Bu doğrultuda, testleri nasıl tanımlayacağımıza ve çalıştıracağımıza bakalım.

**Test yapısına genel bakış**
"Neyi test edeceğiz" konusunun detaylarına girmeden önce, testlerin nerede ve nasıl tanımlandığına kısaca bir göz atalım.

Django, unittest modülünün yerleşik test keşif özelliğini kullanır; bu özellik, geçerli çalışma dizini altındaki test*.py kalıbıyla adlandırılmış herhangi bir dosyada testleri bulur . Dosyaları uygun şekilde adlandırdığınız sürece, istediğiniz herhangi bir yapıyı kullanabilirsiniz. Test kodunuz için bir modül oluşturmanızı ve modeller, görünümler, formlar ve test etmeniz gereken diğer kod türleri için ayrı dosyalar oluşturmanızı öneririz. Örneğin:

```
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
 ```

LocalLibrary projenizde yukarıda gösterildiği gibi bir dosya yapısı oluşturun . __init__.py dosyası boş olmalıdır (bu, Python'a dizinin bir paket olduğunu söyler). Üç test dosyasını, iskelet test dosyası olan /catalog/tests.py dosyasını kopyalayıp yeniden adlandırarak oluşturabilirsiniz .

**Not:** /catalog/tests.py iskelet test dosyası, Django iskelet web sitesini oluşturduğumuzda otomatik olarak oluşturulmuştur . Tüm testlerinizi bunun içine koymanız tamamen "yasal"dır, ancak düzgün test yaparsanız, çok büyük ve yönetilemez bir test dosyasıyla karşılaşabilirsiniz.

İskelet dosyasını silin, ona ihtiyacımız olmayacak.

/catalog/tests/test_models.py dosyasını açın . Dosya *django.test.TestCase* aşağıdaki gibi içe aktarılmalıdır:

```PYTHON
from django.test import TestCase

# Create your tests here.
```

Genellikle, test etmek istediğiniz her model/görünüm/form için, belirli işlevleri test etmek üzere ayrı yöntemler içeren bir test sınıfı eklersiniz. Diğer durumlarda, belirli bir kullanım durumunu test etmek için ayrı bir sınıf ve bu kullanım durumunun yönlerini test eden ayrı test fonksiyonlarına sahip olmak isteyebilirsiniz (örneğin, bir model alanının doğru şekilde doğrulandığını test eden bir sınıf ve olası her hata durumunu test eden fonksiyonlar). Yine, yapı tamamen size kalmış, ancak tutarlı olmanız en iyisidir.

Aşağıdaki test sınıfını dosyanın sonuna ekleyin. Bu sınıf, sınıfından türeterek bir test durumu sınıfının nasıl oluşturulacağını göstermektedir *TestCase.*

```PYTHON
class YourTestClass(TestCase):
    @classmethod
    def setUpTestData(cls):
        print("setUpTestData: Run once to set up non-modified data for all class methods.")
        pass

    def setUp(self):
        print("setUp: Run once for every test method to set up clean data.")
        pass

    def test_false_is_false(self):
        print("Method: test_false_is_false.")
        self.assertFalse(False)

    def test_false_is_true(self):
        print("Method: test_false_is_true.")
        self.assertTrue(False)

    def test_one_plus_one_equals_two(self):
        print("Method: test_one_plus_one_equals_two.")
        self.assertEqual(1 + 1, 2)
```

Yeni sınıf, test öncesi yapılandırma için kullanabileceğiniz iki yöntem tanımlar (örneğin, test için ihtiyaç duyacağınız modelleri veya diğer nesneleri oluşturmak için):

- *setUpTestData()* Bu yöntem, sınıf düzeyinde kurulum için test çalışmasının başında bir kez çağrılır. Bunu, test yöntemlerinin hiçbirinde değiştirilmeyecek veya üzerinde değişiklik yapılmayacak nesneler oluşturmak için kullanırsınız.
- *setUp()* Bu fonksiyon, test tarafından değiştirilebilecek tüm nesneleri ayarlamak için her test fonksiyonundan önce çağrılır (her test fonksiyonu bu nesnelerin "yeni" bir sürümünü alacaktır).

**Not:** Test sınıflarında *tearDown()* kullanmadığımız bir yöntem de bulunmaktadır. Bu yöntem, *TestCase* temel sınıf veritabanının kapatılmasını sizin için hallettiği için veritabanı testleri için pek kullanışlı değildir.

*assert* Aşağıda , koşulların doğru, yanlış veya eşit olup olmadığını test etmek için fonksiyonlar kullanan bir dizi test yöntemi bulunmaktadır ( *assertTrue, assertFalse, assertEqual*). Koşul beklendiği gibi değerlendirilmezse, test başarısız olur ve hatayı konsolunuza bildirir.

, *assertTrue*, *assertFalse*, unittest*assertEqual* tarafından sağlanan standart doğrulama ifadeleridir .

**Not:** Normalde yukarıda gösterildiği gibi testlerinize print() fonksiyonları eklememelisiniz . Bunu burada sadece kurulum fonksiyonlarının konsolda (sonraki bölümde) hangi sırayla çağrıldığını görebilmeniz için yapıyoruz.

**Testler nasıl çalıştırılır?**
Tüm testleri çalıştırmanın en kolay yolu şu komutu kullanmaktır:

```BASH
python3 manage.py test
```

Bu komut , geçerli dizin altında test*.py kalıbıyla adlandırılmış tüm dosyaları bulacak ve uygun temel sınıflar kullanılarak tanımlanmış tüm testleri çalıştıracaktır (burada bir dizi test dosyamız var, ancak şu anda yalnızca /catalog/tests/test_models.py dosyası test içeriyor). Varsayılan olarak, testler yalnızca test başarısızlıklarını ve ardından test özetini ayrı ayrı raporlayacaktır.


Testleri LocalLibrary'nin kök dizininde çalıştırın . Aşağıdakine benzer bir çıktı görmelisiniz.

```BASH
> python3 manage.py test

Found 3 test(s).
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
setUpTestData: Run once to set up non-modified data for all class methods.
setUp: Run once for every test method to set up clean data.
Method: test_false_is_false.
.setUp: Run once for every test method to set up clean data.
Method: test_false_is_true.
FsetUp: Run once for every test method to set up clean data.
Method: test_one_plus_one_equals_two.
.
======================================================================
FAIL: test_false_is_true (catalog.tests.test_models.YourTestClass.test_false_is_true)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/home/user/django-locallibrary-tutorial/catalog/tests/test_models.py", line 21, in test_false_is_true
    self.assertTrue(False)
AssertionError: False is not true

----------------------------------------------------------------------
Ran 3 tests in 0.001s

FAILED (failures=1)
Destroying test database for alias 'default'...
```

Burada bir test hatası olduğunu görüyoruz ve hangi fonksiyonun neden başarısız olduğunu tam olarak görebiliyoruz (bu hata bekleniyordu, çünkü *False* bu doğru değil *True*!).

**Not**: Yukarıdaki test çıktısından çıkarılacak en önemli ders, nesneleriniz ve yöntemleriniz için açıklayıcı/bilgilendirici isimler kullanmanızın çok daha değerli olduğudur.

Fonksiyonların çıktısı, metodun sınıf için bir kez ve her metottan önce *print()* nasıl çağrıldığını gösterir . A , testin geçtiğini, . ise testin başarısız olduğunu gösterir; her biri çıktının bir sonraki satırının başında görünür . Tekrar hatırlatalım ki, normalde bu tür bir kodu testlerinize eklemezsiniz .*setUpTestData()* *setUp()* *.Fprint() print()*

Sonraki bölümlerde belirli testleri nasıl çalıştırabileceğinizi ve testlerin ne kadar bilgi göstereceğini nasıl kontrol edebileceğinizi öğreneceksiniz.

**Daha fazla test bilgisi gösteriliyor**
Test çalışması hakkında daha fazla bilgi edinmek istiyorsanız, ayrıntı düzeyini değiştirebilirsiniz . Örneğin, test başarılarını ve başarısızlıklarını (ve test veritabanının nasıl kurulduğuna dair bir sürü bilgiyi) listelemek için, ayrıntı düzeyini aşağıdaki gibi "2" olarak ayarlayabilirsiniz:

```BASH
python3 manage.py test --verbosity 2
```

İzin verilen ayrıntı düzeyleri 0, 1, 2 ve 3'tür ve varsayılan değer "1"dir.

**İşleri hızlandırmak**
Testleriniz bağımsız ise, çok işlemcili bir makinede bunları paralel çalıştırarak önemli ölçüde hızlandırabilirsiniz. *--parallel auto* Aşağıdaki komut, mevcut her çekirdek için bir test işlemi çalıştırır. Bu *auto* isteğe bağlıdır ve kullanılacak belirli bir çekirdek sayısını da belirtebilirsiniz.

```BASH
python3 manage.py test --parallel auto
```

Testlerinizin bağımsız olmaması durumunda ne yapmanız gerektiği de dahil olmak üzere daha fazla bilgi için **[DJANGO_TEST_PROCESSES'e bakın ](https://docs.djangoproject.com/en/6.1/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES)**.

**Belirli testlerin çalıştırılması**
Testlerinizin bir alt kümesini çalıştırmak istiyorsanız, paket(ler), modül, *TestCase* alt sınıf veya metoda giden tam nokta yolunu belirterek bunu yapabilirsiniz:

```BASH
# Run the specified module
python3 manage.py test catalog.tests

# Run the specified module
python3 manage.py test catalog.tests.test_models

# Run the specified class
python3 manage.py test catalog.tests.test_models.YourTestClass

# Run the specified method
python3 manage.py test catalog.tests.test_models.YourTestClass.test_one_plus_one_equals_two
```

**Diğer test çalıştırıcı seçenekleri**
Test çalıştırıcısı, testleri karıştırma ( *--shuffle*), hata ayıklama modunda çalıştırma ( *--debug-mode*) ve sonuçları yakalamak için Python günlükleyicisini kullanma gibi birçok başka seçenek sunar. 

**Yerel Kütüphane testleri**
Artık testlerimizi nasıl çalıştıracağımızı ve ne tür şeyleri test etmemiz gerektiğini biliyoruz, şimdi bazı pratik örneklere bakalım.

**Not:** Olası tüm testleri yazmayacağız, ancak bu size testlerin nasıl çalıştığı ve daha neler yapabileceğiniz konusunda bir fikir verecektir.

**Modeller**
Yukarıda da belirtildiği gibi, tasarımımızın bir parçası olan veya yazdığımız kodla tanımlanan her şeyi test etmeliyiz; ancak Django veya Python geliştirme ekibi tarafından zaten test edilmiş kütüphaneleri/kodları test etmemeliyiz.

Örneğin, *Author* aşağıdaki modeli ele alalım. Burada tüm alanların etiketlerini test etmeliyiz, çünkü çoğunu açıkça belirtmemiş olsak bile, bu değerlerin ne olması gerektiğini söyleyen bir tasarımımız var. Değerleri test etmezsek, alan etiketlerinin amaçlanan değerlere sahip olup olmadığını bilemeyiz. Benzer şekilde, Django'nun belirtilen uzunlukta bir alan oluşturacağına güvensek de, planlandığı gibi uygulandığından emin olmak için bu uzunluğu test etmek faydalı olacaktır.

```PYTHON
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return f'{self.last_name}, {self.first_name}'
```

/catalog/tests/test_models.py dosyasını açın ve mevcut kodu aşağıdaki model test koduyla değiştirin *Author.*

*TestCase* Burada öncelikle test sınıfımızı ( *AuthorModelTest*) içe aktarıp ondan türettiğimizi ve test çıktısında başarısız olan testleri kolayca tanımlayabilmemiz için açıklayıcı bir ad kullandığımızı göreceksiniz . Ardından *setUpTestData()*, testlerde kullanacağımız ancak değiştirmeyeceğimiz bir yazar nesnesi oluşturmak için çağrı yapıyoruz.

```PYTHON
from django.test import TestCase

from catalog.models import Author

class AuthorModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Author.objects.create(first_name='Big', last_name='Bob')

    def test_first_name_label(self):
        author = Author.objects.get(id=1)
        field_label = author._meta.get_field('first_name').verbose_name
        self.assertEqual(field_label, 'first name')

    def test_date_of_death_label(self):
        author = Author.objects.get(id=1)
        field_label = author._meta.get_field('date_of_death').verbose_name
        self.assertEqual(field_label, 'died')

    def test_first_name_max_length(self):
        author = Author.objects.get(id=1)
        max_length = author._meta.get_field('first_name').max_length
        self.assertEqual(max_length, 100)

    def test_object_name_is_last_name_comma_first_name(self):
        author = Author.objects.get(id=1)
        expected_object_name = f'{author.last_name}, {author.first_name}'
        self.assertEqual(str(author), expected_object_name)

    def test_get_absolute_url(self):
        author = Author.objects.get(id=1)
        # This will also fail if the URLConf is not defined.
        self.assertEqual(author.get_absolute_url(), '/catalog/author/1')
```

Alan testleri, alan etiketlerinin ( ) değerlerinin *verbose_name* ve karakter alanlarının boyutunun beklendiği gibi olduğunu kontrol eder. Bu yöntemlerin tümü açıklayıcı adlara sahiptir ve aynı kalıbı izler:

```PYTHON
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first name')
```

Dikkat çekici noktalar şunlardır:

- *verbose_name* Doğrudan kullanarak elde edemeyiz *author.first_name.verbose_name*, çünkü *author.first_name* bir dizedir *first_name*  ( özelliklerine erişmek için kullanabileceğimiz bir nesne tanıtıcısı değil ). Bunun yerine, yazarın *_meta* özniteliğini kullanarak alanın bir örneğini almalı ve bunu ek bilgileri sorgulamak için kullanmalıyız.
- *assertEqual(field_label,'first name')* yerine kullanmayı tercih ettik *assertTrue(field_label == 'first name')*. Bunun nedeni, test başarısız olursa ilk yöntemin çıktısının etiketin gerçekte ne olduğunu göstermesi ve bu da sorunun giderilmesini biraz daha kolaylaştırmasıdır.

**Not**:*last_name* `<title> ` ve ` <title>` etiketleri için yapılan testler *date_of_birth* ve alanın uzunluğu için yapılan test *last_name* atlanmıştır. Yukarıda gösterilen adlandırma kurallarına ve yaklaşımlara uyarak kendi sürümlerinizi şimdi ekleyin.

Ayrıca özel yöntemlerimizi de test etmemiz gerekiyor. Bunlar temelde, nesne adının "Soyadı", "Adı" formatını kullanarak beklediğimiz gibi oluşturulduğunu ve bir *Author* öğe için aldığımız URL'nin beklediğimiz gibi olduğunu kontrol eder.

```PYTHON
def test_object_name_is_last_name_comma_first_name(self):
    author = Author.objects.get(id=1)
    expected_object_name = f'{author.last_name}, {author.first_name}'
    self.assertEqual(str(author), expected_object_name)

def test_get_absolute_url(self):
    author = Author.objects.get(id=1)
    # This will also fail if the URLConf is not defined.
    self.assertEqual(author.get_absolute_url(), '/catalog/author/1')
```

Şimdi testleri çalıştırın. Eğer Author modelini modeller eğitiminde anlattığımız gibi oluşturduysanız, büyük olasılıkla aşağıdaki gibi bir etiket hatası alacaksınız *date_of_death*. Test başarısız oluyor çünkü etiket tanımının Django'nun etiket adının ilk harfini büyük harfle yazmama kuralına uymasını bekleyerek yazılmıştı (Django bunu sizin için yapıyor).

```BASH
======================================================================
FAIL: test_date_of_death_label (catalog.tests.test_models.AuthorModelTest.test_date_of_death_label)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/home/user/django-locallibrary-tutorial/catalog/tests/test_models.py", line 19, in test_date_of_death_label
    self.assertEqual(field_label, 'died')
AssertionError: 'Died' != 'died'
- Died
? ^
+ died
? ^
```

Bu çok küçük bir hata, ancak test yazmanın yaptığınız varsayımları daha kapsamlı bir şekilde nasıl kontrol edebileceğinizi gösteriyor.

**Not:** Alanın etiketini *date_of_death*( /catalog/models.py ) "died" olarak değiştirin ve testleri yeniden çalıştırın.

Diğer modelleri test etme yöntemleri benzer olduğundan, bunları daha fazla ele almayacağız. Diğer modellerimiz için kendi testlerinizi oluşturmaktan çekinmeyin.

**Formlar**
Formlarınızı test etme felsefesi, modellerinizi test etme felsefesiyle aynıdır; kodladığınız veya tasarımınızın belirttiği her şeyi test etmeniz gerekir, ancak altta yatan çerçeve ve diğer üçüncü taraf kütüphanelerin davranışını test etmenize gerek yoktur.

Genel olarak bu, formların istediğiniz alanlara sahip olduğunu ve bunların uygun etiketler ve yardım metinleriyle görüntülendiğini test etmeniz gerektiği anlamına gelir. Django'nun alan türünü doğru şekilde doğruladığını doğrulamanıza gerek yoktur (kendi özel alanınızı ve doğrulamanızı oluşturmadığınız sürece) — yani, bir e-posta alanının yalnızca e-postaları kabul ettiğini test etmenize gerek yoktur. Ancak, alanlarda gerçekleştirilmesini beklediğiniz ek doğrulamaları ve kodunuzun hatalar için oluşturacağı mesajları test etmeniz gerekir.

Kitap yenileme formumuzu ele alalım. Bu formda yalnızca yenileme tarihi için bir alan bulunmaktadır ve bu alanın altında doğrulamamız gereken bir etiket ve açıklama metni yer alacaktır.

```PYTHON
class RenewBookForm(forms.Form):
    """Form for a librarian to renew books."""
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        # Check if a date is not in the past.
        if data < datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        # Check if date is in the allowed range (+4 weeks from today).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Remember to always return the cleaned data.
        return data
```

/catalog/tests/test_forms.py dosyasını açın ve mevcut kodu aşağıdaki *RenewBookForm* form test koduyla değiştirin. Öncelikle formumuzu ve *datetime* zamanla ilgili işlevselliği test etmeye yardımcı olacak Python kütüphanesini içe aktarıyoruz. Ardından, modeller için yaptığımız gibi, türetilmiş test sınıfımız için açıklayıcı bir ad kullanarak form test sınıfımızı tanımlıyoruz *TestCase*.

```PYTHON
import datetime

from django.test import TestCase

from catalog.forms import RenewBookForm

class RenewBookFormTest(TestCase):
    def test_renew_form_date_field_label(self):
        form = RenewBookForm()
        self.assertTrue(form.fields['renewal_date'].label is None or form.fields['renewal_date'].label == 'renewal date')

    def test_renew_form_date_field_help_text(self):
        form = RenewBookForm()
        self.assertEqual(form.fields['renewal_date'].help_text, 'Enter a date between now and 4 weeks (default 3).')

    def test_renew_form_date_in_past(self):
        date = datetime.date.today() - datetime.timedelta(days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_date_too_far_in_future(self):
        date = datetime.date.today() + datetime.timedelta(weeks=4) + datetime.timedelta(days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_date_today(self):
        date = datetime.date.today()
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())

    def test_renew_form_date_max(self):
        date = datetime.date.today() + datetime.timedelta(weeks=4)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())
```

İlk iki fonksiyon, alanın *label* ve *help_text* değerlerinin beklendiği gibi olup olmadığını test eder. Alana, alanlar sözlüğünü kullanarak erişmemiz gerekiyor (örneğin, *form.fields['renewal_date'])*. Burada, etiket değerinin olup olmadığını da test etmemiz gerektiğini unutmayın , çünkü Django doğru etiketi oluşturacak olsa bile , değer açıkça *None* ayarlanmamışsa boş değer döndürür .*None*

Geri kalan fonksiyonlar, formun kabul edilebilir aralığın hemen içindeki yenileme tarihleri ​​için geçerli, aralığın dışındaki değerler için ise geçersiz olduğunu test eder. Geçerli tarihimizin ( *datetime.date.today()*) etrafında test tarihi değerlerini nasıl oluşturduğumuza dikkat edin *datetime.timedelta()*(bu durumda gün veya hafta sayısı belirterek). Daha sonra formu oluşturup verilerimizi iletiyoruz ve geçerli olup olmadığını test ediyoruz.

Formlarla ilgili anlatacaklarımız bu kadar; başka formlarımız da var, ancak bunlar genel sınıf tabanlı düzenleme görünümlerimiz tarafından otomatik olarak oluşturuluyor ve orada test edilmeleri gerekiyor! Testleri çalıştırın ve kodumuzun hala başarılı olduğunu doğrulayın!

**Görüşler**
Görünüm davranışımızı doğrulamak için Django test istemcisini kullanıyoruz . Bu sınıf, bir URL'ye istek gönderip yanıtı gözlemlemek için kullanabileceğimiz sahte bir web tarayıcısı gibi davranır . Düşük seviyeli HTTP'den (sonuç başlıkları ve durum kodları) HTML'i oluşturmak için kullandığımız şablona ve ona ilettiğimiz bağlam verilerine kadar yanıt hakkında neredeyse her şeyi görebiliriz. Ayrıca yönlendirme zincirini (varsa) görebilir *GET* ve *POST* her adımda URL'yi ve durum kodunu kontrol edebiliriz. Bu, her görünümün beklendiği gibi davrandığını doğrulamamızı sağlar.

En basit görünümlerimizden biriyle başlayalım; bu görünüm tüm yazarların listesini sağlar. Bu liste /catalog/authors/ adresinde (URL yapılandırmasında 'authors' olarak adlandırılan bir URL) görüntülenir.

```PYTHON
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Bu genel bir liste görünümü olduğundan, Django neredeyse her şeyi bizim için yapıyor. Django'ya güveniyorsanız, test etmeniz gereken tek şey görünümün doğru URL'den erişilebilir olması ve adıyla erişilebilmesidir. Ancak, test odaklı bir geliştirme süreci kullanıyorsanız, görünümün tüm Yazarları 10'ar kişilik gruplar halinde sayfalandırarak görüntülediğini doğrulayan testler yazarak başlamanız gerekir.

/catalog/tests/test_views.py dosyasını açın ve mevcut metni aşağıdaki test koduyla değiştirin *AuthorListView*. Daha önce olduğu gibi modelimizi ve bazı kullanışlı sınıfları içe aktarıyoruz. Metotta, sayfalama işlemini test edebilmemiz için *setUpTestData()* bir dizi nesne oluşturuyoruz .*Author*

```PYTHON
from django.test import TestCase
from django.urls import reverse

from catalog.models import Author

class AuthorListViewTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Create 13 authors for pagination tests
        number_of_authors = 13

        for author_id in range(number_of_authors):
            Author.objects.create(
                first_name=f'Dominique {author_id}',
                last_name=f'Surname {author_id}',
            )

    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/catalog/authors/')
        self.assertEqual(response.status_code, 200)

    def test_view_url_accessible_by_name(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)

    def test_view_uses_correct_template(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'catalog/author_list.html')

    def test_pagination_is_ten(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)
        self.assertTrue('is_paginated' in response.context)
        self.assertTrue(response.context['is_paginated'] == True)
        self.assertEqual(len(response.context['author_list']), 10)

    def test_lists_all_authors(self):
        # Get second page and confirm it has (exactly) remaining 3 items
        response = self.client.get(reverse('authors'), query_params={'page': 2})
        self.assertEqual(response.status_code, 200)
        self.assertTrue('is_paginated' in response.context)
        self.assertTrue(response.context['is_paginated'] == True)
        self.assertEqual(len(response.context['author_list']), 3)
```

Tüm testler, *TestCase* bir isteği simüle etmek ve bir yanıt almak için (türetilmiş sınıfımıza ait) istemciyi kullanır *GET*. İlk sürüm belirli bir URL'yi (alan adı olmadan yalnızca belirli yolu) kontrol ederken, ikinci sürüm URL yapılandırmasındaki adından URL'yi oluşturur.

```PYTHON
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Yanıtı aldıktan sonra, durum kodunu, kullanılan şablonu, yanıtın sayfalandırılmış olup olmadığını, döndürülen öğe sayısını ve toplam öğe sayısını sorguluyoruz.

Yukarıda gösterdiğimiz en ilginç değişken *response.context*, görünüm tarafından şablona iletilen bağlam değişkeni olan 'dir. Bu, test için inanılmaz derecede kullanışlıdır çünkü şablonumuzun ihtiyaç duyduğu tüm verileri aldığını doğrulamamızı sağlar. Başka bir deyişle, amaçlanan şablonu kullandığımızı ve şablonun hangi verileri aldığını kontrol edebiliriz; bu da herhangi bir oluşturma sorununun yalnızca şablondan kaynaklandığını doğrulamada büyük bir rol oynar.

**Sadece giriş yapmış kullanıcılara açık olan görünümler**
Bazı durumlarda, yalnızca oturum açmış kullanıcılara özel bir görünümü test etmek isteyebilirsiniz. Örneğin, *LoanedBooksByUserListView* önceki görünümümüze çok benzeyen ancak yalnızca oturum açmış kullanıcılara açık olan ve yalnızca *BookInstance* mevcut kullanıcı tarafından ödünç alınan, 'ödünç verilmiş' durumunda olan ve "en eskiden en yeniye" sıralanmış kayıtları görüntüleyen bir görünümümüz var.

```PYTHON
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin, generic.ListView):
    """Generic class-based view listing books on loan to current user."""
    model = BookInstance
    template_name ='catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact=BookInstance.LoanStatus.ON_LOAN).order_by('due_back')
```

Aşağıdaki test kodunu /catalog/tests/test_views.py *setUp()* dosyasına ekleyin. Burada öncelikle, daha sonra testlerde kullanacağımız bazı kullanıcı giriş hesapları ve nesneleri (bunlarla ilişkili kitaplar ve diğer kayıtlarla birlikte) oluşturmak için kullanıyoruz . Kitapların yarısı her test kullanıcısı tarafından ödünç alınmıştır, ancak başlangıçta tüm kitapların durumunu "bakım" olarak ayarladık. yerine *BookInstance* kullandık çünkü bu nesnelerin bazılarını daha sonra değiştireceğiz.*setUp()* *setUpTestData()*

**Not**: Aşağıdaki kod *setUp(*), belirtilen bir modele sahip bir kitap oluşturur Language, ancak bu bir meydan okuma olarak oluşturulduğu için kodunuzda bu model yer almayabilir . Eğer durum böyleyse, Language nesnelerini oluşturan veya içe aktaran kod bölümlerini yorum satırı haline getirin. Bunu, takip eden bölümde de yapmalısınız .*Language* *RenewBookInstancesViewTest*

```PYTHON
import datetime

# Get user model from settings
from django.contrib.auth import get_user_model
User = get_user_model()

from catalog.models import BookInstance, Book, Genre, Language

class LoanedBookInstancesByUserListViewTest(TestCase):
    def setUp(self):
        # Create two users
        test_user1 = User.objects.create_user(username='testuser1', password='1X<ISRUkw+tuK')
        test_user2 = User.objects.create_user(username='testuser2', password='2HJ1vRV0Z&3iD')

        test_user1.save()
        test_user2.save()

        # Create a book
        test_author = Author.objects.create(first_name='Dominique', last_name='Rousseau')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(
            title='Book Title',
            summary='My book summary',
            isbn='ABCDEFG',
            author=test_author,
            language=test_language,
        )

        # Create genre as a post-step
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) # Direct assignment of many-to-many types not allowed.
        test_book.save()

        # Create 30 BookInstance objects
        number_of_book_copies = 30
        for book_copy in range(number_of_book_copies):
            return_date = datetime.date.today() + datetime.timedelta(days=book_copy%5)
            the_borrower = test_user1 if book_copy % 2 else test_user2
            status = BookInstance.LoanStatus.MAINTENANCE
            BookInstance.objects.create(
                book=test_book,
                imprint='Unlikely Imprint, 2016',
                due_back=return_date,
                borrower=the_borrower,
                status=status,
            )

    def test_redirect_if_not_logged_in(self):
        response = self.client.get(reverse('my-borrowed'))
        self.assertRedirects(response, '/accounts/login/?next=/catalog/mybooks/')

    def test_logged_in_uses_correct_template(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Check we used correct template
        self.assertTemplateUsed(response, 'catalog/bookinstance_list_borrowed_user.html')
```

Kullanıcı giriş yapmamışsa sayfanın giriş sayfasına yönlendirileceğini doğrulamak için *assertRedirects*, şekilde gösterildiği gibi kullanıyoruz *test_redirect_if_not_logged_in()*. Sayfanın giriş yapmış bir kullanıcı için görüntülendiğini doğrulamak için önce test kullanıcımızı giriş yaptırıyoruz, ardından sayfaya tekrar erişiyoruz ve *status_code*200 (başarı) değeri aldığımızı kontrol ediyoruz.

Geri kalan testler, görünümümüzün yalnızca mevcut ödünç alan kişiye ödünç verilmiş kitapları döndürdüğünü doğrular. Aşağıdaki kodu kopyalayın ve yukarıdaki test sınıfının sonuna yapıştırın.

```PYTHON
    def test_only_borrowed_books_in_list(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Check that initially we don't have any books in list (none on loan)
        self.assertTrue('bookinstance_list' in response.context)
        self.assertEqual(len(response.context['bookinstance_list']), 0)

        # Now change all books to be on loan
        books = BookInstance.objects.all()[:10]

        for book in books:
            book.status = BookInstance.LoanStatus.ON_LOAN
            book.save()

        # Check that now we have borrowed books in the list
        response = self.client.get(reverse('my-borrowed'))
        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        self.assertTrue('bookinstance_list' in response.context)

        # Confirm all books belong to testuser1 and are on loan
        for book_item in response.context['bookinstance_list']:
            self.assertEqual(response.context['user'], book_item.borrower)
            self.assertEqual(book_item.status, BookInstance.LoanStatus.ON_LOAN)

    def test_pages_ordered_by_due_date(self):
        # Change all books to be on loan
        for book in BookInstance.objects.all():
            book.status = BookInstance.LoanStatus.ON_LOAN
            book.save()

        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Confirm that of the items, only 10 are displayed due to pagination.
        self.assertEqual(len(response.context['bookinstance_list']), 10)

        last_date = 0
        for copy in response.context['bookinstance_list']:
            if last_date == 0:
                last_date = copy.due_back
            else:
                self.assertTrue(last_date <= copy.due_back)
                last_date = copy.due_back
```

Dilerseniz sayfalama testleri de ekleyebilirsiniz!

**Formlarla görünümleri test etme**
Form içeren görünümleri test etmek, yukarıdaki durumlara göre biraz daha karmaşıktır çünkü daha fazla kod yolunu test etmeniz gerekir: ilk görüntüleme, veri doğrulama başarısız olduktan sonraki görüntüleme ve doğrulama başarılı olduktan sonraki görüntüleme. İyi haber şu ki, istemciyi test için neredeyse yalnızca görüntüleme amaçlı görünümlerde yaptığımızla aynı şekilde kullanıyoruz.

Örnek vermek gerekirse, kitapları yenilemek için kullanılan görünüm için bazı testler yazalım ( ). Hatırlatma olarak, bu /catalog/views.py *renew_book_librarian()* dosyasındaki görünüm kodudur (testlerinize kopyalamanıza gerek yok):

```PYTHON
from catalog.forms import RenewBookForm

@login_required
@permission_required('catalog.can_mark_returned', raise_exception=True)
def renew_book_librarian(request, pk):
    """View function for renewing a specific BookInstance by librarian."""
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed'))

    # If this is a GET (or any other method) create the default form
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

Görünümün yalnızca izne sahip kullanıcılara açık olduğunu *can_mark_returned* ve mevcut olmayan bir kaydı yenilemeye çalışan kullanıcıların HTTP 404 hata sayfasına yönlendirildiğini test etmemiz gerekecek *BookInstance*. Formun başlangıç ​​değerinin üç hafta sonrasına ait bir tarihle doldurulduğunu ve doğrulama başarılı olursa "tüm ödünç alınan kitaplar" görünümüne yönlendirildiğimizi kontrol etmeliyiz. Doğrulama başarısızlığı testlerinin bir parçası olarak, formumuzun uygun hata mesajlarını gönderdiğini de kontrol edeceğiz.

Test sınıfının ilk bölümünü (aşağıda gösterilmiştir) /catalog/tests/test_views.py dosyasının sonuna ekleyin . Bu, iki kullanıcı ve iki kitap örneği oluşturur, ancak yalnızca bir kullanıcıya görünüme erişmek için gereken izni verir.

```PYTHON
import uuid

from django.contrib.auth.models import Permission # Required to grant the permission needed to set a book as returned.

class RenewBookInstancesViewTest(TestCase):
    def setUp(self):
        # Create a user
        test_user1 = User.objects.create_user(username='testuser1', password='1X<ISRUkw+tuK')
        test_user2 = User.objects.create_user(username='testuser2', password='2HJ1vRV0Z&3iD')

        test_user1.save()
        test_user2.save()

        # Give test_user2 permission to renew books.
        permission = Permission.objects.get(name='Set book as returned')
        test_user2.user_permissions.add(permission)
        test_user2.save()

        # Create a book
        test_author = Author.objects.create(first_name='Dominique', last_name='Rousseau')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(
            title='Book Title',
            summary='My book summary',
            isbn='ABCDEFG',
            author=test_author,
            language=test_language,
        )

        # Create genre as a post-step
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) # Direct assignment of many-to-many types not allowed.
        test_book.save()

        # Create a BookInstance object for test_user1
        return_date = datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance1 = BookInstance.objects.create(
            book=test_book,
            imprint='Unlikely Imprint, 2016',
            due_back=return_date,
            borrower=test_user1,
            status=BookInstance.LoanStatus.ON_LOAN,
        )

        # Create a BookInstance object for test_user2
        return_date = datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance2 = BookInstance.objects.create(
            book=test_book,
            imprint='Unlikely Imprint, 2016',
            due_back=return_date,
            borrower=test_user2,
            status=BookInstance.LoanStatus.ON_LOAN,
        )
```

Test sınıfının sonuna aşağıdaki testleri ekleyin. Bu testler, yalnızca doğru izinlere sahip kullanıcıların ( testuser2 ) görünüme erişebildiğini kontrol eder. Tüm durumları kontrol ediyoruz: kullanıcının oturum açmadığı durum, kullanıcının oturum açtığı ancak doğru izinlere sahip olmadığı durum, kullanıcının izinlere sahip olduğu ancak ödünç alan kişi olmadığı durum (başarılı olmalı) ve var olmayan bir görünüme erişmeye çalıştıklarında ne olacağı *BookInstance*. Ayrıca doğru şablonun kullanıldığını da kontrol ediyoruz.

```PYTHON
   def test_redirect_if_not_logged_in(self):
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        # Manually check redirect (Can't use assertRedirect, because the redirect URL is unpredictable)
        self.assertEqual(response.status_code, 302)
        self.assertTrue(response.url.startswith('/accounts/login/'))

    def test_forbidden_if_logged_in_but_not_correct_permission(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 403)

    def test_logged_in_with_permission_borrowed_book(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance2.pk}))

        # Check that it lets us login - this is our book and we have the right permissions.
        self.assertEqual(response.status_code, 200)

    def test_logged_in_with_permission_another_users_borrowed_book(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))

        # Check that it lets us login. We're a librarian, so we can view any users book
        self.assertEqual(response.status_code, 200)

    def test_HTTP404_for_invalid_book_if_logged_in(self):
        # unlikely UID to match our bookinstance!
        test_uid = uuid.uuid4()
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk':test_uid}))
        self.assertEqual(response.status_code, 404)

    def test_uses_correct_template(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        # Check we used correct template
        self.assertTemplateUsed(response, 'catalog/book_renew_librarian.html')
```

Aşağıda gösterildiği gibi bir sonraki test yöntemini ekleyin. Bu, formun başlangıç ​​tarihinin üç hafta sonra olduğunu kontrol eder. Form alanının başlangıç ​​değerine nasıl erişebildiğimize dikkat edin ( *response.context['form'].initial['renewal_date']*).

```PYTHON
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Sonraki test (bunu da sınıfa ekleyin), yenileme başarılı olursa görünümün ödünç alınan tüm kitapların listesine yönlendirildiğini kontrol eder. Burada farklı olan şey, ilk kez *POST* istemciyi kullanarak nasıl veri gönderebileceğinizi göstermemizdir. Gönderilen veri , post fonksiyonunun ikinci argümanıdır ve anahtar/değer sözlüğü olarak belirtilir.

```PYTHON
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

Aşağıda görüldüğü gibi, son iki fonksiyonu sınıfa kopyalayın. Bunlar yine POSTistekleri test eder, ancak bu durumda geçersiz yenileme tarihleriyle. *assertFormError()*Hata mesajlarının beklendiği gibi olup olmadığını doğrulamak için kullanıyoruz.

```PYTHON
    def test_form_invalid_renewal_date_past(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        date_in_past = datetime.date.today() - datetime.timedelta(weeks=1)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}), {'renewal_date': date_in_past})
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response.context['form'], 'renewal_date', 'Invalid date - renewal in past')

    def test_form_invalid_renewal_date_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        invalid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=5)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}), {'renewal_date': invalid_date_in_future})
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response.context['form'], 'renewal_date', 'Invalid date - renewal more than 4 weeks ahead')
```

Aynı teknikler diğer görüşü test etmek için de kullanılabilir.

**Şablonlar**
Django, görünümleriniz tarafından doğru şablonun çağrıldığını kontrol etmek ve doğru bilgilerin gönderildiğini doğrulamak için test API'leri sağlar. Bununla birlikte, Django'da HTML çıktınızın beklendiği gibi oluşturulduğunu test etmek için özel bir API desteği bulunmamaktadır.

**Önerilen diğer test araçları**
Django'nun test çerçevesi, etkili birim ve entegrasyon testleri yazmanıza yardımcı olabilir; temel unittest çerçevesinin yapabileceklerinin sadece yüzeyine dokunduk , Django'nun eklemelerinden bahsetmiyorum bile (örneğin, kendi kodunuzu daha kapsamlı bir şekilde test edebilmek için üçüncü taraf kütüphaneleri yamalamak üzere unittest.mock'u **[nasıl kullanabileceğinize bakın](https://docs.python.org/3/library/unittest.mock-examples.html)**).

Kullanabileceğiniz çok sayıda başka test aracı olsa da, biz sadece ikisini öne çıkaracağız:

- Kapsama Alanı : Bu Python aracı, kodunuzun ne kadarının testleriniz tarafından gerçekten yürütüldüğünü rapor eder. Özellikle yeni başlayanlar ve tam olarak neyi test etmeniz gerektiğini anlamaya çalışanlar için kullanışlıdır.
- Selenium, gerçek bir tarayıcıda test otomasyonu için kullanılan bir çerçevedir. Gerçek bir kullanıcının siteyle etkileşimini simüle etmenizi sağlar ve sitenizin sistem testini (entegrasyon testinden sonraki adım) yapmak için harika bir çerçeve sunar.

## Django Eğitimi Bölüm 11: Django'yu Üretim Ortamına Dağıtma
Django kullanarak örnek bir web sitesi oluşturup test ettiniz, şimdi onu bir web sunucusuna kurup herkesin internet üzerinden erişebilmesini sağlamanın zamanı geldi. Bu sayfa, bir Django projesini nasıl barındıracağınızı ve sitenizi üretim ortamına hazırlamak için nelere ihtiyacınız olduğunu açıklamaktadır.

**Genel Bakış**
Siteniz tamamlandığında (veya halka açık testlere başlamak için "yeterince" tamamlandığında), onu kişisel geliştirme bilgisayarınızdan daha herkese açık ve erişilebilir bir yerde barındırmanız gerekecek.

Şu ana kadar, sitenizi yerel tarayıcı/ağ ile paylaşmak için Django geliştirme web sunucusunu kullanarak ve hata ayıklama ve diğer özel bilgileri açığa çıkaran (güvenli olmayan) geliştirme ayarlarıyla web sitenizi çalıştırarak bir geliştirme ortamında çalıştınız. Bir web sitesini harici olarak barındırmadan önce öncelikle şunları yapmanız gerekecek:

- Proje ayarlarınızda birkaç değişiklik yapın.
- Django uygulamasını barındırmak için bir ortam seçin.
- Statik dosyaları barındırmak için bir ortam seçin.
- Web sitenize hizmet verecek üretim seviyesinde bir altyapı kurun.

Bu eğitim, barındırma sitesi seçme seçenekleriniz hakkında bazı bilgiler, Django uygulamanızı üretime hazır hale getirmek için yapmanız gerekenlerin kısa bir özeti ve LocalLibrary web sitesini Railway bulut barındırma hizmetine nasıl kuracağınıza dair çalışan bir örnek sunmaktadır.

**Üretim ortamı nedir?**
Üretim ortamı, web sitenizi harici kullanıma sunacağınız sunucu bilgisayarının sağladığı ortamdır. Bu ortam şunları içerir:

- Web sitesinin çalıştığı bilgisayar donanımı.
- İşletim sistemi (örneğin, Linux, Windows).
- Web sitenizin yazıldığı programlama dili çalışma ortamı ve çerçeve kütüphaneleri.
- Sayfaları ve diğer içerikleri sunmak için kullanılan web sunucusu (örneğin, Nginx, Apache).
- Django web siteniz ile web sunucusu arasında "dinamik" istekleri ileten uygulama sunucusu.
- Web sitenizin bağlı olduğu veritabanları.

**Not**: Üretim ortamınızın yapılandırmasına bağlı olarak, ters proxy, yük dengeleyici vb. de bulunabilir.

Sunucu bilgisayar, kendi tesislerinizde bulunabilir ve hızlı bir bağlantı ile internete bağlanabilir, ancak "bulutta" barındırılan bir bilgisayar kullanmak çok daha yaygındır. Bunun anlamı, kodunuzun barındırma şirketinizin veri merkezlerindeki uzak bir bilgisayarda (veya muhtemelen bir "sanal" bilgisayarda) çalıştırılmasıdır. Uzak sunucu genellikle belirli bir fiyat karşılığında belirli bir düzeyde işlem gücü kaynağı (CPU, RAM, depolama belleği vb.) ve internet bağlantısı sunar.

Bu tür uzaktan erişilebilir bilgi işlem/ağ donanımına Hizmet Olarak Altyapı (IaaS) denir . Birçok IaaS sağlayıcısı, üretim ortamınızın diğer bileşenlerini kurmanız gereken belirli bir işletim sistemini önceden yükleme seçeneği sunar. Diğer sağlayıcılar ise, belki de eksiksiz bir Django ve web sunucusu kurulumu da dahil olmak üzere daha kapsamlı özelliklere sahip ortamlar seçmenize olanak tanır.

**Not**: Önceden oluşturulmuş ortamlar, yapılandırmayı azalttıkları için web sitenizi kurmayı çok kolaylaştırabilir, ancak mevcut seçenekler sizi alışılmadık bir sunucuya (veya diğer bileşenlere) sınırlayabilir ve işletim sisteminin eski bir sürümüne dayanabilir. Genellikle bileşenleri kendiniz kurmak daha iyidir, böylece istediğiniz bileşenleri elde edersiniz ve sistemin bazı bölümlerini yükseltmeniz gerektiğinde nereden başlayacağınız konusunda bir fikriniz olur!

Diğer hosting sağlayıcıları, Platform as a Service (PaaS) teklifinin bir parçası olarak Django'yu desteklemektedir . Bu tür bir hostingde, üretim ortamınızın (web sunucusu, uygulama sunucusu, yük dengeleyiciler) büyük bir kısmıyla ilgilenmenize gerek kalmaz, çünkü hosting platformu bunları sizin için halleder; ayrıca uygulamanızı ölçeklendirmek için yapmanız gerekenlerin çoğunu da üstlenir. Bu da dağıtımı oldukça kolaylaştırır, çünkü sadece web uygulamanıza odaklanmanız gerekir, diğer sunucu altyapısına değil.

Bazı geliştiriciler, PaaS yerine IaaS'ın sağladığı artan esnekliği tercih ederken, diğerleri PaaS'ın daha düşük bakım maliyetini ve daha kolay ölçeklenebilirliğini takdir edecektir. Başlangıç ​​aşamasında, web sitenizi bir PaaS sistemine kurmak çok daha kolaydır ve bu nedenle bu eğitimde de bunu yapacağız.

**Not**: Python/Django dostu bir hosting sağlayıcısı seçerseniz, web sunucusu, uygulama sunucusu, ters proxy vb. farklı yapılandırmaları kullanarak bir Django web sitesini nasıl kuracağınıza dair talimatlar sağlamaları gerekir (PaaS seçerseniz bu geçerli olmayacaktır). Örneğin, DigitalOcean **[Django topluluk belgelerinde](https://www.digitalocean.com/community/tutorials?q=django)** çeşitli yapılandırmalar için birçok adım adım kılavuz bulunmaktadır .

**Bir hosting sağlayıcısı seçmek**
Django'yu aktif olarak destekleyen veya Django ile iyi çalışan birçok hosting sağlayıcısı bulunmaktadır; bunlardan bazıları **[Heroku](https://www.heroku.com/)** , **[DigitalOcean](https://www.digitalocean.com/)** , **[Railway](https://railway.com/)** , **[Python Anywhere](https://www.pythonanywhere.com/)** , **[Amazon Web Services](https://aws.amazon.com/tr/)** , **[Azure](https://azure.microsoft.com/en-us)** , **[Google Cloud](https://cloud.google.com/)** , **[Hetzner](https://www.hetzner.com/)** ve **[Vultr Cloud Compute'tur](https://blogs.vultr.com/new-free-tier-plan)** . Bu sağlayıcılar farklı türde ortamlar (IaaS, PaaS) ve farklı seviyelerde bilgi işlem ve ağ kaynakları sunmaktadır.

Ev sahibi seçerken göz önünde bulundurulması gereken bazı noktalar şunlardır:

- Sitenizin ne kadar yoğun olacağı ve bu talebi karşılamak için gereken veri ve işlem kaynaklarının maliyeti.
- Yatay ölçeklendirme (daha fazla makine ekleme) ve dikey ölçeklendirme (daha güçlü makinelere yükseltme) için destek düzeyi ve bunun maliyetleri.
- Tedarikçinin veri merkezlerinin bulunduğu ve dolayısıyla erişimin en hızlı olma olasılığının yüksek olduğu yer.
- Sunucunun geçmişteki çalışma ve kesinti süreleri performansı.
- Siteyi yönetmek için sağlanan araçlar kolay kullanımlı mı ve güvenli mi (örneğin, SFTP mi yoksa FTP mi)?
- Sunucunuzu izlemek için yerleşik çerçeveler.
- Bilinen sınırlamalar. Bazı hosting sağlayıcıları belirli hizmetleri (örneğin, e-posta) kasıtlı olarak engeller. Diğerleri ise bazı fiyat kademelerinde yalnızca belirli sayıda saatlik "aktif kullanım süresi" veya sınırlı miktarda depolama alanı sunar.
- Ek avantajlar. Bazı sağlayıcılar, normalde ücret ödemeniz gereken ücretsiz alan adları ve TLS sertifikaları desteği sunar.
- Kullandığınız "ücretsiz" katmanın zamanla sona erip ermeyeceği ve daha pahalı bir katmana geçmenin maliyetinin, en başından başka bir hizmeti kullanmanızın daha avantajlı olacağı anlamına gelip gelmeyeceği konularını değerlendirmelisiniz!

Yeni başlayanlar için iyi haber şu ki, değerlendirme ve test amaçlı "ücretsiz" bilgi işlem ortamları sağlayan birçok site mevcut. Bunlar genellikle oldukça kaynak kısıtlı/sınırlı ortamlardır ve belirli bir tanıtım döneminden sonra sona erebileceklerini veya başka kısıtlamalara sahip olabileceklerini bilmeniz gerekir. Bununla birlikte, barındırılan bir ortamda düşük trafikli siteleri test etmek için harikadırlar ve siteniz daha yoğun hale geldiğinde daha fazla kaynak için ödeme yapmaya kolay bir geçiş sağlayabilirler. Bu kategorideki popüler seçenekler arasında **[Vultr Cloud Compute](https://blogs.vultr.com/new-free-tier-plan)** , **[Python Anywhere](https://www.pythonanywhere.com/)** , **[Amazon Web Services](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier.html)** , **[Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/app-service/linux/)** vb. yer almaktadır.

Çoğu sağlayıcı, küçük üretim siteleri için tasarlanmış ve daha kullanışlı işlem gücü seviyeleri ve daha az sınırlama sağlayan "temel" bir katman da sunmaktadır. **[Railway](https://railway.com/)** , **[Heroku](https://www.heroku.com/)** ve **[DigitalOcean](https://www.digitalocean.com/)** , nispeten ucuz bir temel işlem gücü katmanına (aylık 5 ila 10 ABD doları aralığında) sahip popüler hosting sağlayıcılarına örneklerdir.

**Not**: Fiyatın tek seçim kriteri olmadığını unutmayın. Web siteniz başarılı olursa, ölçeklenebilirlik en önemli husus olabilir.

**Web sitenizi yayınlamaya hazır hale getirmek**
django-admin ve manage.py araçları kullanılarak oluşturulan Django iskelet web sitesi, geliştirme sürecini kolaylaştırmak için yapılandırılmıştır. Django proje ayarlarının ( settings.py dosyasında belirtilen ) birçoğu, güvenlik veya performans nedenleriyle üretim ortamı için farklı olmalıdır.

**Not**: Üretim ortamı için ayrı bir settings.py dosyasına sahip olmak ve/veya hassas ayarları ayrı bir dosyadan veya ortam değişkeninden koşullu olarak içe aktarmak yaygındır . Bu nedenle, kaynak kodunun geri kalanı herkese açık bir depoda bulunsa bile, bu dosya korunmalıdır.

Kontrol etmeniz gereken kritik ayarlar şunlardır:

- *DEBUG* *False* Bu, üretim ortamındaki gibi ayarlanmalıdır ( *DEBUG = False*). Bu, hassas/gizli hata ayıklama izleme verilerinin ve değişken bilgilerinin görüntülenmesini engeller.
- *SECRET_KEY* Bu, *CSRF* koruması vb. için kullanılan büyük bir rastgele değerdir. Üretim ortamında kullanılan anahtarın kaynak kontrolünde bulunmaması veya üretim sunucusunun dışından erişilememesi önemlidir.
Django belgeleri, gizli bilgilerin en iyi şekilde ortam değişkenlerinden yüklenmesini veya yalnızca sunucuda bulunan bir dosyadan okunmasını önermektedir. LocalLibrary uygulamasını , tanımlanmışsa ortam değişkenlerinden okuyacak , gerekirse kök dizindeki .env *SECRET_KEY* dosyasında tanımlanan değerleri kullanacak ve son olarak da yapılandırma dosyasındaki varsayılan değerleri kullanacak şekilde değiştirelim. Bu, barındırma sunucusu tarafından desteklenen herhangi bir yapılandırmaya izin verdiği için oldukça esnektir.*DEBUG*

**[Bir dosyadan ortam değişkeni değerlerini okumak için `python-dotenv` kütüphanesini kullanacağız](https://pypi.org/project/python-dotenv/)** . Bu kütüphane, bir dosyadan anahtar-değer çiftlerini okuyup bunları ortam değişkeni olarak kullanmak için kullanılır, ancak yalnızca ilgili ortam değişkeni tanımlanmamışsa.

Gösterildiği gibi kütüphaneyi sanal ortamınıza kurun (ve *requirements.txt* dosyanızı da güncelleyin):

```BASH
pip3 install python-dotenv
```

Ardından /locallibrary/settings.py dosyasını açın ve aşağıdaki kodu *BASE_DIR*, tanımlandığı satırdan sonra ancak güvenlik uyarısından önce ekleyin:*# SECURITY WARNING: keep the secret key used in production secret!*

```PYTHON
# Support env variables from .env file if defined
import os
from dotenv import load_dotenv

load_dotenv(BASE_DIR / ".env")
```

*.env* Bu , dosya mevcutsa, dosyayı web uygulamasının kök dizininden yükler . *KEY=VALUE* Dosyada tanımlanan değişkenler *os.environ.get('&lt;KEY&gt;'', '&lt;DEFAULT VALUE&gt;')*, tanımlanmışsa, anahtar kullanıldığında içe aktarılır.

**Not**: .env dosyasına eklediğiniz tüm değerler büyük olasılıkla gizli bilgilerdir ! Bunları GitHub'a kaydetmemelisiniz ve yanlışlıkla eklenmemeleri için .*env* dosyanıza eklemelisiniz.*.gitignore*

Ardından orijinal *SECRET_KEY* yapılandırmayı devre dışı bırakın ve aşağıda gösterildiği gibi yeni satırları ekleyin. Geliştirme sırasında anahtar için herhangi bir ortam değişkeni belirtilmeyecektir, bu nedenle varsayılan değer kullanılacaktır (burada hangi anahtarı kullandığınızın veya anahtarın "sızmasının" bir önemi olmamalıdır, çünkü bunu üretimde kullanmayacaksınız).

```PYTHON
# SECURITY WARNING: keep the secret key used in production secret!
# SECRET_KEY = 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87'
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'django-insecure-&psk#na5l=p3q8_a+-$4w1f^lt3lx1c@d*p4x$ymm_rn7pwb87')
```

Ardından mevcut ayarı yorum satırı haline getirin *DEBUG* ve aşağıda gösterilen yeni satırı ekleyin.

```PYTHON
# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = os.environ.get('DJANGO_DEBUG', '') != 'False'
```

Varsayılan değer boş *DEBUG* olacaktır , ancak yalnızca ortam değişkeninin değeri boş olarak ayarlanmışsa veya .env dosyasında belirtilmişse boş *True* olacaktır . Ortam değişkenlerinin Python türleri değil, dizeler olduğunu lütfen unutmayın. Bu nedenle dizeleri karşılaştırmamız gerekiyor. Değişkeni boş olarak ayarlamanın tek yolu , onu gerçekten boş dizeye ayarlamaktır *.False DJANGO_DEBUG False DJANGO_DEBUG=False DEBUG False False*

Linux'ta ortam değişkenini "False" olarak ayarlamak için aşağıdaki komutu kullanabilirsiniz:

```BASH
export DJANGO_DEBUG=False
```

Değiştirmek isteyebileceğiniz ayarların tam bir kontrol listesi, Dağıtım kontrol listesinde (Django belgeleri) verilmiştir. Ayrıca, aşağıdaki terminal komutunu kullanarak bunlardan birkaçını listeleyebilirsiniz:

```BASH
python3 manage.py check --deploy
```

**Gunicorn**
Gunicorn, genellikle Django WSGI uygulamalarına hizmet vermek için kullanılan, tamamen Python ile yazılmış bir HTTP sunucusudur.

Geliştirme aşamasında LocalLibrary uygulamamızı çalıştırmak için Gunicorn'a ihtiyacımız olmasa da , uygulama dağıtıldığında gereksinimlerimizin bir parçası olması için onu yerel olarak kuracağız .

Öncelikle , geliştirme ortamını kurarken oluşturulan Python sanal ortamında olduğunuzdan emin olun ( *source my_django_environment/bin/activate* Linux/macOS'ta veya *my_django_environment\Scripts\activate.bat* Windows'ta ile etkinleştirin ). Ardından, pip kullanarak Gunicorn'u komut satırından yerel olarak kurun :

```BASH
pip3 install gunicorn
```

**Veritabanı yapılandırması**
Geliştirme için kullandığınız varsayılan Django veritabanı olan SQLite, küçük ve orta ölçekli web siteleri için makul bir seçimdir. Ne yazık ki, Heroku gibi bazı popüler hosting hizmetlerinde kullanılamaz çünkü bu hizmetler uygulama ortamında kalıcı veri depolama (SQLite'ın bir gereksinimi) sağlamaz. Bu durum örnek dağıtımlar için bizi etkilemeyebilir, ancak Railway, Heroku ve diğer bazı hizmetlerde çalışacak başka bir yaklaşım göstereceğiz.

Yaklaşım, internet üzerinde bir yerde kendi işleminde çalışan ve Django kütüphane uygulaması tarafından ortam değişkeni olarak iletilen bir adres kullanılarak erişilen bir veritabanı kullanmaktır. Bu örnekte, Railway üzerinde barındırılan bir Postgres veritabanı kullanacağız, ancak istediğiniz herhangi bir veritabanı barındırma hizmetini kullanabilirsiniz.

Veritabanı bağlantı bilgileri, adlı bir ortam değişkeni kullanılarak Django'ya sağlanacaktır . Bu bilgiyi Django'ya doğrudan kodlamak yerine, ortam değişkenini ayrıştırmak ve otomatik olarak Django'nun istediği yapılandırma biçimine dönüştürmek için dj-database-url *DATABASE_URL* paketini kullanacağız . dj-database-url paketini kurmanın yanı sıra , Django'nun Postgres veritabanlarıyla etkileşim kurması için ihtiyaç duyduğu psycopg3'ü de kurmamız gerekecek .*DATABASE_URL*

**dj-veritabanı-url**
`dj-database-url` , Django veritabanı yapılandırmasını bir ortam değişkeninden çıkarmak için kullanılır.

Bunu yerel olarak kurun, böylece dağıtım sunucusunda kurulum gereksinimlerimizin bir parçası haline gelsin:

```BASH
pip3 install dj-database-url
```

**ayarlar.py**
/locallibrary/settings.py dosyasını açın ve aşağıdaki yapılandırma kodunu dosyanın en altına kopyalayın:

```PYTHON
# Update database configuration from $DATABASE_URL environment variable (if defined)
import dj_database_url

if 'DATABASE_URL' in os.environ:
    DATABASES['default'] = dj_database_url.config(
        conn_max_age=500,
        conn_health_checks=True,
    )
```

Django artık ortam değişkeni ayarlanmışsa veritabanı yapılandırmasını kullanacak *DATABASE_URL*; aksi takdirde varsayılan SQLite veritabanını kullanacak. Bu değer *conn_max_age=500*, bağlantıyı kalıcı hale getirir; bu da her istek döngüsünde bağlantıyı yeniden oluşturmaktan çok daha verimlidir (bu isteğe bağlıdır ve gerekirse kaldırılabilir).

**psikopg**
Django'nun Postgres veritabanlarıyla çalışması için psycopg'ye (sürüm 3) ihtiyacı vardır. Bunu yerel olarak kurun, böylece Railway'in uzak sunucuda kurulumu için gereken şartların bir parçası haline gelsin:

```BASH
pip3 install "psycopg[binary]"
```

Bu seçenek, Postgres istemci kütüphanelerini içeren bir psycopg *[binary]* sürümünü yükler , böylece bunları ayrıca yüklemenize gerek kalmaz.

**Not:** Django, eski psycopg2 kütüphanesini de destekler ancak psycopg'nin (sürüm 3) kullanılmasını önerir ve psycopg2 desteğinin gelecekte kaldırılma olasılığının yüksek olduğunu belirtir.

Django'nun, aksi belirtilmedikçe, geliştirme sırasında varsayılan olarak SQLite veritabanını kullanacağını unutmayın . Geliştirme ortamınızda aynı ortam değişkenini ayarlayarak tamamen Postgres'e geçebilir ve geliştirme ve üretim için aynı barındırılan veritabanını kullanabilirsiniz (Railway, üretim ve geliştirme için aynı ortamı kullanmayı kolaylaştırır). Alternatif olarak, yerel bilgisayarınıza kendi kendine barındırılan *DATABASE_URL* bir Postgres veritabanı da kurabilir ve kullanabilirsiniz .

**Üretim ortamında statik dosyaların sunulması**
Geliştirme sürecinde hem dinamik HTML dosyalarımızı hem de statik dosyalarımızı (CSS, JavaScript vb.) sunmak için Django ve Django geliştirme web sunucusunu kullanıyoruz. Bu, statik dosyalar için verimsizdir çünkü Django onlarla hiçbir şey yapmasa bile isteklerin Django üzerinden geçmesi gerekir. Bu durum geliştirme aşamasında önemli olmasa da, aynı yaklaşımı üretimde kullanırsak önemli bir performans düşüşüne neden olur.

Üretim ortamında, statik dosyaları genellikle Django web uygulamasından ayırarak, bunları doğrudan web sunucusundan veya içerik dağıtım ağından (CDN) sunmayı kolaylaştırıyoruz.

Önemli ayar değişkenleri şunlardır:

- *STATIC_URL* Bu, statik dosyaların sunulacağı temel URL konumudur, örneğin bir CDN'de.
- *STATIC_ROOT* Bu, Django'nun ` collectstatic` aracının şablonlarımızda referans verilen tüm statik dosyaları toplayacağı dizinin mutlak yoludur . Toplandıktan sonra, bu dosyalar bir grup halinde barındırılacakları yere yüklenebilir.
- *STATICFILES_DIRS* Bu, Django'nun collectstatic aracının statik dosyaları araması gereken ek dizinleri listeler.

Django şablonları, statik dosya konumlarını bir etikete göre belirtir (bunu Django Eğitimi Bölüm 5: Ana sayfamızı oluşturma *static* bölümünde tanımlanan temel şablonda görebilirsiniz ), bu da ayarıyla eşleşir . Bu nedenle statik dosyalar herhangi bir sunucuya yüklenebilir ve uygulamanızı bu ayarı kullanarak dosyaları bulacak şekilde güncelleyebilirsiniz.*STATIC_URL*

`collectstatic` aracı, statik dosyaları proje ayarlarında tanımlanan klasöre toplamak için kullanılır *STATIC_ROOT*. Aşağıdaki komutla çağrılır:

```BASH
python3 manage.py collectstatic
```

Bu eğitimde, `collectstatic` uygulaması yüklenmeden önce çalıştırılabilir; bu işlem, uygulamadaki tüm statik dosyaları `.` parametresinde belirtilen konuma kopyalar *STATIC_ROOT*. *Whitenoise* Ardından, `.` parametresiyle tanımlanan konumdan dosyaları bulur *STATIC_ROOT* ve `.` parametresiyle tanımlanan temel URL'de sunar *STATIC_URL*.

**ayarlar.py**
/locallibrary/settings.py dosyasını açın ve aşağıdaki yapılandırmayı dosyanın en altına kopyalayın. Bu, *BASE_DIR* dosyanızda zaten tanımlanmış olmalıdır (*STATIC_URL* dosya oluşturulduğunda zaten tanımlanmış olabilir. Zarar vermese de, önceki yinelenen referansı silmeniz daha iyi olur).

```PYTHON
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/6.1/howto/static-files/

# The absolute path to the directory where collectstatic will collect static files for deployment.
STATIC_ROOT = BASE_DIR / 'staticfiles'

# The URL to use when referring to static files (where they will be served from)
STATIC_URL = '/static/'
```

Dosya sunma işlemini , bir sonraki bölümde kurup yapılandıracağımız WhiteNoise adlı bir kütüphane kullanarak gerçekleştireceğiz .

**Beyaz gürültü**
Üretim ortamında statik dosyaları sunmanın birçok yolu vardır (önceki bölümlerde ilgili Django ayarlarını gördük). WhiteNoise projesi, üretim ortamında statik varlıkları doğrudan Gunicorn'dan sunmanın en kolay yöntemlerinden birini sağlar.


**Whitenoise'u yükleyin.**
Aşağıdaki komutu kullanarak whitenoise'u yerel olarak kurun:

```BASH
pip3 install whitenoise
```

**ayarlar.py**
WhiteNoise'ı Django uygulamanıza yüklemek için , /locallibrary/settings.py dosyasını açın , ayarı bulun ve listenin en üstüne, : işaretinin hemen altına *MIDDLEWARE* ekleyin .*WhiteNoiseMiddleware* *SecurityMiddleware*

```PYTHON
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

İsteğe bağlı olarak, statik dosyaların sunulduğu sırada boyutlarını küçültebilirsiniz (bu daha verimlidir). Bunun için /locallibrary/settings.py dosyasının sonuna aşağıdakileri eklemeniz yeterlidir :

```PYTHON
# Static file serving.
# https://whitenoise.readthedocs.io/en/stable/django.html#add-compression-and-caching-support
STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}
```

Bu ayar, Django'nun varsayılan depolama yapılandırmasının yerini alır; bu nedenle , (kullanıcıların yüklediği dosyalar için kullanılan) depolama alanının yanı sıra değiştirmek istediğimiz depolama alanını da *STORAGES* eklememiz gerekir .*"default""staticfiles"*

WhiteNoise'u yapılandırmak için başka bir şey yapmanıza gerek yok çünkü varsayılan *STATIC_ROOT* olarak proje ayarlarınızı kullanıyor *STATIC_URL*.

**Gereksinimler**
Web uygulamanızın Python gereksinimleri , deponuzun kök dizininde bulunan requirements.txt adlı bir dosyada saklanmalıdır . Birçok hosting hizmeti, bağımlılıkları bu dosyaya otomatik olarak yükler (bazılarında bunu kendiniz yapmanız gerekir). Bu dosyayı komut satırında pip kullanarak oluşturabilirsiniz (deponun kök dizininde aşağıdaki komutu çalıştırın):

```BASH
pip3 freeze > requirements.txt
```

Yukarıda belirtilen tüm farklı bağımlılıkları yükledikten sonra, requirements.txt dosyanızda en az bu öğeler listelenmiş olmalıdır (sürüm numaraları farklı olabilir). Bu uygulama için açıkça eklemediğiniz sürece, aşağıda listelenmeyen diğer bağımlılıkları lütfen silin.

```
Django==6.1.1
dj-database-url==3.1.2
gunicorn==26.2.0
psycopg==3.3.6
psycopg-binary==3.3.6
whitenoise==6.12.0
python-dotenv==1.2.3
```

**GitHub'daki uygulama deponuzu güncelleyin.**
Birçok hosting hizmeti, projeleri yerel bir depodan veya bulut tabanlı kaynak sürüm kontrol platformlarından içe aktarmanıza ve/veya senkronize etmenize olanak tanır. Bu, dağıtımı ve yinelemeli geliştirmeyi çok daha kolay hale getirebilir.

Yerel kütüphane kaynak kodunu depolamak için zaten GitHub'ı kullanıyor olmalısınız (bu , geliştirme ortamınızı kurarken Git ve GitHub ile kaynak kod yönetimi bölümünde ayarlanmıştı) .

Bu, "temel" projenizin yedeğini almak için iyi bir noktadır; sonraki bölümlerde yapacağımız bazı değişiklikler herhangi bir barındırma hizmetine dağıtım (veya geliştirme) için yararlı olabilirken, diğerleri olmayabilir. mainGitHub'daki dalda şimdiye kadar yapılan tüm değişikliklerin yedeğini zaten aldığınızı varsayarak, aşağıdaki gibi değişikliklerinizi yedeklemek için yeni bir dal oluşturabilirsiniz:

```BASH
# Fetch the latest main branch
git checkout main
git pull origin main

# Create branch vanilla_deployment from the current branch (main)
git checkout -b vanilla_deployment

# Push the new branch to GitHub
git push origin vanilla_deployment

# Switch back to main
git checkout main

# Make any further changes in a new branch
git checkout -b my_changes_for_deployment # Create a new branch
```

**Örnek: PythonAnywhere'de barındırma**
Bu bölümde, LocalLibrary'nin PythonAnywhere üzerinde nasıl barındırılacağına dair pratik bir gösterim sunulmaktadır .

**PythonAnywhere neden tercih edilmeli?**
PythonAnywhere'ı çeşitli nedenlerle tercih ediyoruz:

- PythonAnywhere'ın gerçekten ücretsiz olan , ancak bazı sınırlamaları bulunan bir başlangıç ​​planı var . Tüm geliştiriciler için uygun fiyatlı olması MDN için gerçekten önemli!

**Not**: Bu eğitim, daha önce ücretsiz olan planların kaldırılmasıyla birlikte Heroku, Railway ve şimdi de PythonAnywhere'da barındırılmıştır. PythonAnywhere'ı seçmemizin nedeni, bu planın büyük olasılıkla ücretsiz kalacağını düşünmemizdir. Karşılaştırma amacıyla ve farklı bir serviste çalışan Postgres veritabanlarıyla entegrasyon gibi özellikleri daha kolay göstermemizi sağladığı için ücretli olan Railway örneğini de koruduk.

- PythonAnywhere altyapı işlerini sizin yerinize hallediyor. Sunucular, yük dengeleyiciler, ters proxy'ler vb. ile uğraşmak zorunda kalmamak, işe başlamayı çok daha kolay hale getiriyor.

- PythonAnywhere kullanırken öğreneceğiniz beceriler ve kavramlar başka alanlara da aktarılabilir.

- Hizmet ve plan sınırlamaları, PythonAnywhere'i bu eğitimde kullanmamızı özellikle etkilemiyor. Örneğin:

- Başlangıç ​​planı, tek bir web uygulamasına izin verir *&lt;your-username&gt;.pythonanywhere.com*, uygulamalarınızdan kısıtlı internet erişimi, düşük CPU/bant genişliği, IPython/Jupyter notebook desteği yok, ücretsiz Postgres veritabanı yok. Ancak temel sitemizin çalışması için yeterli alan var!
- Özel alan adları (bu metnin yazıldığı sırada) desteklenmemektedir.
- Ortam kullanılmadığında kapanır, bu nedenle yeniden başlatılması yavaş olabilir. Sonsuza kadar çalıştırabilirsiniz, ancak her üç ayda bir siteyi ziyaret etmeniz ve web uygulamasını yenilemeniz gerekecektir.
- Ayrı bir MySQL veritabanı için ücretsiz destek mevcut, ancak Postgres için yok. Bu gösterimde, varsayılan Django SQLite veritabanını kullanacağız.

PythonAnywhere bu demo için uygun bir platformdur ve gerekirse daha büyük projeler için de ölçeklendirilebilir. Kendi web siteniz için uygun olup olmadığını belirlemek için zaman ayırmanız gerekir .

**PythonAnywhere nasıl çalışır?**
PythonAnywhere, uygulamanızı yüklemek, düzenlemek ve onunla çalışmak için tamamen web tabanlı bir arayüz sağlar.

Bu arayüz üzerinden, uygulamanızı oluşturabileceğiniz bir Ubuntu Linux ortamına bash konsolu açabilirsiniz. Bu gösterimde, konsolu kullanarak yerel kütüphane GitHub deposunu klonlayacağız ve web uygulamasını çalıştırabileceğimiz bir Python ortamı oluşturacağız.

Ücretsiz plan ayrı bir Postgres desteği sağlamaz. Veritabanımız için başka bir barındırma hizmeti kullanabilirdik, ancak barındırılan Ubuntu ortamında Django tarafından oluşturulan varsayılan SQLite veritabanını kullanacağız (kütüphane işlevselliğini göstermek için fazlasıyla yeterli alan var).

Uygulama çalışmaya başladıktan sonra, bash konsolu üzerinden ortam değişkenleri ayarlanarak üretim ortamı için yapılandırılabilir.

Başlamak için ihtiyacınız olan genel bilgi bu kadar.

**PythonAnywhere hesabı edinin.**
PythonAnywhere'ı kullanmaya başlamak için öncelikle bir hesap oluşturmanız gerekecektir.

**GitHub'dan kütüphaneyi yükleyin.**
Şimdi bir Bash komut istemi açacağız, sanal bir ortam kuracağız ve yerel kütüphane kaynak kodunu GitHub'dan indireceğiz. Ayrıca varsayılan veritabanını yapılandıracağız ve PythonAnywhere tarafından sunulabilmeleri için statik dosyaları toplayacağız.

1\.Öncelikle üstteki uygulama çubuğunda Konsollar'ı seçerek Konsol yönetim ekranını açın .

2\.Ardından yeni bir konsol oluşturmak ve başlatmak için Bash bağlantısını seçin :


![Test](./assets/42-print.png)



Oluşturduğunuz her konsolun, tüm geçmişiyle birlikte daha sonra tekrar kullanmanız için kaydedildiğini unutmayın. Ekran görüntüsündeki yeşil ok, bu hesabın açabileceğimiz mevcut bir konsola sahip olduğunu gösteriyor.

3\.PythonAnywhere konsolları, virtualenvwrapper önceden yüklenmiş olarak gelir . PythonAnywhere Web sekmesindeki "Virtualenv" alanı ( Web uygulamasını kurma bölümünde yapılandırdığımız ) komutuyla oluşturulmuş bir ortam bekler , bu nedenle Django geliştirme ortamı kurma bölümünde ele alınan modül mkvirtualenvyerine bunu kullanacağız .venv

Yerel kütüphane bağımlılıklarını yüklemek için "env_local_library" adında bir Python 3.13 sanal ortamı oluşturmak üzere aşağıdaki komutu girin.

```BASH
mkvirtualenv --python=python3.13 env_local_library
```

Ortama dilediğimiz ismi verebilirdik ve aşağıdaki komutları kullanarak devre dışı bırakıp yeniden etkinleştirebilirdik:

```BASH
deactivate
workon env_local_library
```

4\.Ardından GitHub'dan kütüphane kaynaklarını indirin. PythonAnywhere, uygulamaları sitenizin URL'siyle aynı adı taşıyan bir klasöre yüklemenizi bekler.


Kütüphane kaynaklarınızı uygun isimli bir klasöre kopyalamak için aşağıdaki komutu girin (kullanıcı adı değerlerini kendi adınızla değiştirmeniz gerekecektir):

```BASH
git clone https://github.com/<github_username>/django_local_library.git <your_pythonanywhere_username>.pythonanywhere.com

# Navigate into the new folder
cd <your_pythonanywhere_username>.pythonanywhere.com
```

5\.Kütüphane bağımlılıklarını aşağıdaki requirements.txtdosyayı kullanarak yükleyin:

```BASH
pip3 install -r requirements.txt
```

6\.Sunucu bilgisayarda bir SQLite veritabanı oluşturun ve yapılandırın (tıpkı geliştirme aşamasında yaptığımız gibi).

```BASH
python manage.py migrate
```

7\.Tüm statik dosyaları, üretim ortamında sunulabilecekleri bir konuma toplayın :

```BASH
python manage.py collectstatic --no-input
```

8\.Siteye erişim için bir süper kullanıcı oluşturun ( Django yönetim sitesi bölümünde açıklandığı gibi):

```BASH
python manage.py createsuperuser
```

Sitenizi test etmek için bu bilgilere ihtiyacınız olacağından, ayrıntıları not edin.

**Web uygulamasını kurun**
Yerel kütüphane kaynaklarını aldıktan ve bağımlılıkları sanal bir ortamda kurduktan sonra, PythonAnywhere'e bunları nasıl bulacağını ve bir web uygulaması olarak nasıl kullanacağını söylememiz gerekiyor.

1\.Sitenin Web bölümüne gidin ve "Yeni bir web uygulaması ekle" bağlantısını seçin:

![Test](./assets/43-print.png)

Ardından, web uygulamasının temel özelliklerini yapılandırmanız için size yol gösterecek olan " Yeni web uygulaması oluştur" sihirbazı açılacaktır.

2\.Web uygulaması alan adı yapılandırmasını atlamak için İleri'yi seçin . Ücretsiz hesap, alan adını kullanıcı adınıza göre oluşturacaktır: <user_name>.pythonanywhere.com.

![Test](./assets/44-print.png)

3\.Python Web çerçevesi seçme ekranında Manuel yapılandırma seçeneğini belirleyin .

![Test](./assets/45-print.png)

Manuel yapılandırma, ortamın nasıl yapılandırılacağı konusunda bize tam kontrol sağlıyor. Bu şu anda çok önemli değil, ancak farklı Python ve/veya Django sürümlerine sahip birden fazla site barındırıyor olsaydık önemli olurdu.

4\."Python sürümü seçin" ekranında 3.13'ü seçin.

![Test](./assets/46-print.png)

Daha genel olarak, kullandığınız Django sürümünün izin verdiği en son Python sürümünü seçmelisiniz.

5\.Manuel yapılandırma ekranında İleri'yi seçin (ekran yalnızca yapılandırma seçeneklerinden bazılarını açıklar).

![Test](./assets/47-print.png)

Web uygulaması oluşturuldu ve gösterildiği gibi Web bölümünde görüntülendi. Ekranda, daha fazla değişiklik yaptıktan sonra web uygulamasını yeniden yüklemek için kullanabileceğiniz bir Yeniden Yükle düğmesi bulunmaktadır. Ekranda belirtildiği gibi, sitenin üç ay daha (ve sürekli olarak) aktif kalması için " Bugünden itibaren 3 ay boyunca çalıştır" düğmesine tıklamanız gerekecektir .

![Test](./assets/48-print.png)


6\.Web sekmesinin "Kod" bölümüne aşağı kaydırın ve WSGI yapılandırma dosyasına giden bağlantıyı seçin. Bu dosyanın adı şu biçimde olacaktır */var/www/<user_name>_pythonanywhere_com_wsgi.py:* .

![Test](./assets/49-print.png)

Dosyadaki içeriği aşağıdaki metinle değiştirin (önce "hamishwillee" ifadesini kendi kullanıcı adınızla güncelleyin) ve ardından Kaydet düğmesini seçin.

```PYTHON
import os
import sys

path = '/home/hamishwillee/hamishwillee.pythonanywhere.com'
if path not in sys.path:
    sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'locallibrary.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

WSGI dosyasının rolünün Gunicorn sunucusunun yerel kütüphane uygulamasını bulmasına yardımcı olmak olduğunu unutmayın. PythonAnywhere bu dosyanın bu konumda olmasını bekler, bu nedenle projede zaten bulunan WSGI dosyası kullanılamaz.

7\.Web sekmesinin "Virtualenv" bölümüne kadar aşağı kaydırın . "İstenirse sanal ortamın yolunu girin" bağlantısını seçin ve önceki bölümde oluşturulan sanal ortamın yolunu girin. Önerildiği gibi "env_local_library" olarak adlandırdıysanız, yol şu şekilde olacaktır:*/home/<user_name>/.virtualenvs/env_local_library*

![Test](./assets/50-print.png)

8\.Web sekmesinin "Statik dosyalar" bölümüne kadar aşağı kaydırın .

![Test](./assets/51-print.png)

"URL Gir" bağlantısını seçin ve girin . Bu, uygulama ayarlarındaki adrestir */static/*. Ardından " Yol Gir" bağlantısını seçin ve girin . Bu, önceki bölümde çalıştırdığımızda dosyaların kopyalandığı klasördür .*STATIC_URL/home/<your_pythonanywhere_username>/<your_pythonanywhere_username>.pythonanywhere.com/staticfiles STATIC_ROOT collectstatic*

9\.Web sekmesinin üst kısmına yakın bir yerde bulunan Yeniden Yükle düğmesini seçerek siteyi yeniden başlatın. Ardından canlı siteyi başlatmak için site URL bağlantısını seçin:

![Test](./assets/52-print.png)

**ALLOWED_HOSTS ve CSRF_TRUSTED_ORIGINS ayarlarını yapın.**
Site açıldığında, aşağıdaki gibi bir hata ayıklama ekranı göreceksiniz. Bu, kaynak kodumuzun "izin verilen bir sunucuda" çalışmaması nedeniyle ortaya çıkan bir Django güvenlik hatasıdır.

![Test](./assets/53-print.png)


**Not**: Bu tür hata ayıklama bilgileri kurulum aşamasında çok faydalıdır, ancak yayına alınmış bir sitede güvenlik riski oluşturur. Sonraki bölümde, ortam değişkenlerini kullanarak canlı sitede bu düzeydeki günlük kaydını nasıl devre dışı bırakacağınızı göstereceğiz .

GitHub projenizdeki /locallibrary/settings.py dosyasını açın ve ALLOWED_HOSTS ayarını PythonAnywhere sitenizin URL'sini içerecek şekilde değiştirin:

```PYTHON
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['hamishwillee.pythonanywhere.com', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.pythonanywhere.com','127.0.0.1']
```

Uygulama CSRF koruması kullandığı için, CSRF_TRUSTED_ORIGINS anahtarını da ayarlamanız gerekecektir . /locallibrary/settings.py dosyasını açın ve aşağıdaki gibi bir satır ekleyin:

```PYTHON
## For example, for a site URL at 'hamishwillee.pythonanywhere.com'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://hamishwillee.pythonanywhere.com']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.pythonanywhere.com']
```

Bu ayarları kaydedin ve GitHub deponuza işleyin.

Ardından PythonAnywhere'deki projenizin sürümünü güncellemeniz gerekecek. Bash komut istemini klasörde kullanıyorsanız *<user_name>.pythonanywhere.com* ve değişiklikleri ana dala gönderdiyseniz, Bash komut isteminde şu komutu kullanarak bunları içe aktarabilirsiniz:

```BASH
git pull origin main
```

Uygulamayı yeniden başlatmak için sekmedeki Yeniden Başlat düğmesini kullanın *Web*. Barındırılan sitenizi yenilerseniz, site artık açılmalı ve ana sayfası görüntülenmelidir.

Yukarıda oluşturduğunuz süper kullanıcı hesabıyla giriş yapabilmeli ve tıpkı yerel bilgisayarınızda yaptığınız gibi yazarlar, türler, kitaplar vb. oluşturabilmelisiniz.

**PythonAnywhere'de ortam değişkenlerini kullanma**
"Web sitenizi yayınlamaya hazır hale getirme" bölümünde, uygulamayı üretim ortamında ortam değişkenleri veya .env dosyasındaki değişkenler kullanılarak yapılandırılabilecek şekilde değiştirdik .

Özellikle, aşağıdaki ayarları yapabilmeniz için kütüphaneyi kurduk:

- *DJANGO_DEBUG=False* Hata oluştuğunda kullanıcıya gösterilen hata ayıklama izleme bilgilerini azaltmak için.
- *DJANGO_SECRET_KEY* Üretimde gizli bir değere sahip olmak.
- *DATABASE_URL* Eğer uygulamanız barındırılan bir veritabanı kullanıyorsa (bu örnekte kullanmıyoruz).

Ortam değişkenlerinin ayarlanma şekli, barındırma hizmetine bağlıdır. PythonAnywhere için bunları bir ortam dosyasından okumanız gerekir. Biz zaten bunun için gerekli ayarları yapmış durumdayız, bu nedenle yapmamız gereken tek şey dosyayı oluşturmak.

Adımlar şunlardır:

1\.PythonAnywhere Bash komut istemini açın.

2\.Uygulama dizininize gidin (lütfen &lt;user-name&gt; kendi hesabınızla değiştirin):

```BASH
cd ~/<user-name>.pythonanywhere.com
```

3\.Ortam değişkenlerini, anahtar-değer çiftleri olarak bir dosyaya yazarak ayarlayın *.env*. Örneğin, Bash konsolunda şunu ayarlamak için aşağıdaki komutu girin *DJANGO_DEBUG:False*

```BASH
echo "DJANGO_DEBUG=False" >> .env
```

4\.Uygulamayı yeniden başlatın.

İşlemin başarılı olup olmadığını, mevcut olmayan bir kaydı açmayı deneyerek test edebilirsiniz (örneğin, bir tür oluşturun, ardından URL çubuğundaki sayıyı artırarak henüz oluşturulmamış bir kaydı açın). Ortam değişkeni yüklendiyse, ayrıntılı bir hata ayıklama izi yerine "Bulunamadı" mesajı alırsınız.

**Örnek: Railway üzerinde barındırma**
Bu bölümde , LocalLibrary'nin Railway'e nasıl kurulacağına dair pratik bir gösterim sunulmaktadır .

**Neden Demiryolu?**
**Uyarı**: Railway'in artık tamamen ücretsiz bir başlangıç ​​paketi bulunmamaktadır. Railway'in harika özelliklere sahip olması ve bazı kullanıcılar için daha iyi bir seçenek olabileceği için bu talimatları koruduk.

Demiryolu, çeşitli nedenlerden dolayı cazip bir ev sahipliği seçeneğidir:

- Railway, altyapının büyük bir kısmını hallediyor, böylece sizin hiçbir şeyle uğraşmanıza gerek kalmıyor. Sunucular, yük dengeleyiciler, ters proxy'ler vb. ile uğraşmak zorunda kalmamak, işe başlamayı çok daha kolay hale getiriyor.
- Railway, geliştirme ve dağıtım süreçlerinde geliştirici deneyimine odaklanmaktadır ; bu da birçok diğer alternatife kıyasla daha hızlı ve daha kolay bir öğrenme eğrisi sağlar.
- Railway'i kullanırken öğreneceğiniz beceriler ve kavramlar aktarılabilir niteliktedir. Railway'in bazı mükemmel yeni özellikleri olsa da, diğer popüler hosting hizmetleri de aynı fikir ve yaklaşımların çoğunu kullanmaktadır.
- Demiryolu belgeleri açık ve eksiksizdir.
- Hizmet oldukça güvenilir görünüyor ve eğer beğenirseniz, fiyatlandırması tahmin edilebilir ve uygulamanızı ölçeklendirmek çok kolay.

Railway'in kendi web siteniz için uygun olup olmadığını belirlemek için zaman ayırmalısınız .

**Demiryolu nasıl çalışır?**
Web uygulamalarının her biri kendi izole ve bağımsız sanallaştırılmış konteynerinde çalıştırılır. Uygulamanızı çalıştırmak için Railway'in uygun ortamı ve bağımlılıkları kurabilmesi ve ayrıca nasıl başlatıldığını anlayabilmesi gerekir. Django uygulamaları için bu bilgileri bir dizi metin dosyasında sağlıyoruz:

- *runtime.txt* : Kullanılacak programlama dilini ve sürümünü belirtir.
- *requirements.txt* : Django dahil olmak üzere siteniz için gerekli olan Python bağımlılıklarını listeler.
- *Procfile* : Web uygulamasını başlatmak için yürütülecek işlemlerin listesi. Django için bu genellikle Gunicorn web uygulama sunucusu (bir *.wsgi* betik ile birlikte) olacaktır.
- *wsgi.py*: Railway ortamında Django uygulamamızı çağırmak için kullanılan WSGI yapılandırma dosyası.

Uygulama çalışmaya başladıktan sonra, ortam değişkenlerinde sağlanan bilgileri kullanarak kendini yapılandırabilir . Örneğin, veritabanı kullanan bir uygulama, değişkeni kullanarak adresi alabilir *DATABASE_URL.* Veritabanı hizmetinin kendisi Railway veya başka bir sağlayıcı tarafından barındırılıyor olabilir.

Geliştiriciler, Railway ile Railway sitesi üzerinden ve özel bir Komut Satırı Arayüzü (CLI) aracı kullanarak etkileşim kurarlar. CLI, yerel bir GitHub deposunu bir Railway projesiyle ilişkilendirmenize, depoyu yerel daldan canlı siteye yüklemenize, çalışan işlemin günlüklerini incelemenize, yapılandırma değişkenlerini ayarlamanıza ve almanıza ve daha birçok şeye olanak tanır. En kullanışlı özelliklerden biri, CLI'yı kullanarak yerel projenizi canlı projeyle aynı ortam değişkenleriyle çalıştırabilmenizdir.

Uygulamamızın Railway üzerinde çalışması için, Django web uygulamamızı bir git deposuna koymamız, yukarıdaki dosyaları eklememiz, bir veritabanı eklentisiyle entegre etmemiz ve statik dosyaları düzgün bir şekilde işlemek için değişiklikler yapmamız gerekecek. Tüm bunları yaptıktan sonra, bir Railway hesabı oluşturabilir, Railway istemcisini edinebilir ve web sitemizi kurabiliriz.

Başlamak için ihtiyacınız olan genel bakış bu kadar.

**Demiryolu için uygulamayı güncelleyin.**
Bu bölümde, LocalLibrary uygulamamızın Railway üzerinde çalışması için yapmanız gereken değişiklikler açıklanmaktadır . Aslında sadece bir Procfiledosya oluşturmamız gerekiyor *runtime.txt*, çünkü neredeyse her şey zaten mevcut.

Bu değişikliklerin, daha önce öğrendiğimiz yerel test ve iş akışlarını kullanmanızı engellemeyeceğini unutmayın.

**Procfile**
Procfile , web uygulamasının "giriş noktasıdır". Sitenizi başlatmak için Railway tarafından yürütülecek komutları listeler.

*Procfile* GitHub deponuzun kök dizininde (dosya uzantısı olmadan) bir dosya oluşturun ve aşağıdaki metni kopyalayıp yapıştırın:

web: python manage.py migrate && python manage.py collectstatic --no-input && gunicorn locallibrary.wsgi

Önek *web*:, Railway'e bunun bir web işlemi olduğunu ve HTTP trafiği gönderilebileceğini söyler. Ardından *python manage.py* *migrate*, veritabanı tablolarını kurmak için Django migration komutunu çağırıyoruz. Daha sonra, *python manage.py collectstaticstatik* dosyaları proje ayarında tanımlanan klasöre toplamak için Django komutunu çağırıyoruz (aşağıdaki " üretimde statik dosyaları sunma *STATIC_ROOT* " bölümüne bakın ). Son olarak, popüler bir web uygulama sunucusu olan gunicorn işlemini başlatıyoruz ve ona modüldeki yapılandırma bilgilerini iletiyoruz (uygulama iskeletimizle oluşturulmuştur: /locallibrary/wsgi.py ).*locallibrary.wsgi*

Gördüğünüz gibi, projeyi gunicorn'u içerecek ve statik dosyaları sunmayı destekleyecek şekilde zaten yapılandırdık !

Procfile dosyasını, sürüm dağıtılmadan önce çalışan süreçleri başlatmak veya etkileşimli olmayan diğer görevleri çalıştırmak için de kullanabilirsiniz.

**Çalışma zamanı**
Eğer tanımlanmışsa, runtime.txt dosyası Railway'e hangi Python sürümünü kullanacağını söyler. Dosyayı deponun kök dizininde oluşturun ve aşağıdaki metni ekleyin:

python-3.14.7
**Not**: Hosting sağlayıcıları her Python çalışma zamanı alt sürümünü desteklemeyebilir. Genellikle belirttiğiniz değere en yakın desteklenen sürümü kullanırlar.

**Tekrar test edin ve değişiklikleri GitHub'a kaydedin.**
Devam etmeden önce, siteyi yerel olarak tekrar test edin ve yukarıdaki değişikliklerden herhangi birinin siteyi bozmadığından emin olun. Geliştirme web sunucusunu her zamanki gibi çalıştırın ve ardından sitenin tarayıcınızda hala beklediğiniz gibi çalıştığını kontrol edin.

```BASH
python3 manage.py runserver
```

Şimdi de GitHub'daki değişikliklere geçelim *push*. Terminalde (yerel depomuza gittikten sonra) aşağıdaki komutları girin:

```BASH
git checkout -b railway_changes
git add -A
git commit -m "Added files and changes required for deployment"
git push origin railway_changes
```

Ardından GitHub'da çekme isteğini oluşturun ve birleştirin.

Artık LocalLibrary'yi Railway üzerinde kullanıma sunmaya hazır olmalıyız.

**Demiryolu hesabı edinin**
Railway'i kullanmaya başlamak için öncelikle bir hesap oluşturmanız gerekecektir:

- railway.com adresine gidin ve üst araç çubuğundaki Giriş bağlantısına tıklayın .
- Açılan pencereden GitHub'ı seçerek GitHub kimlik bilgilerinizle giriş yapabilirsiniz.
- Ardından e-postanıza gidip hesabınızı doğrulamanız gerekebilir.
- Ardından Railway.com kontrol paneline giriş yapacaksınız: https://railway.com/dashboard .

**GitHub'dan Railway'e dağıtım yapın.**
Şimdi GitHub'dan kütüphanemizi dağıtmak için Railway'i kuracağız. Öncelikle sitenin üst menüsünden Kontrol Paneli seçeneğini, ardından Yeni Proje düğmesini seçin:

![Test](./assets/54-print.png)

Railway, yeni proje için bir dizi seçenek sunacaktır; bunlar arasında GitHub hesabınızda önceden oluşturulmuş bir şablondan proje dağıtma seçeneği ve çeşitli veritabanları yer almaktadır. " GitHub deposundan dağıt" seçeneğini seçin .

![Test](./assets/55-print.png)

Kurulum sırasında Railway ile paylaştığınız GitHub depolarındaki tüm projeler görüntülenir. Yerel kütüphane için GitHub deponuzu seçin: &lt;user-name&gt;/django_local_library.

![Test](./assets/56-print.png)

Dağıtımı onaylamak için "Şimdi Dağıt" seçeneğini belirleyin .

![Test](./assets/57-print.png)


Ardından Railway, projenizi yükleyip dağıtacak ve dağıtımlar sekmesinde ilerleme durumunu gösterecektir. Dağıtım başarıyla tamamlandığında, aşağıdaki gibi bir ekran göreceksiniz.

![Test](./assets/58-print.png)

Siteyi bir tarayıcıda açmak için (yukarıda vurgulanan) site URL'sine tıklayabilirsiniz (kurulum henüz tamamlanmadığı için yine de çalışmayacaktır).

**ALLOWED_HOSTS ve CSRF_TRUSTED_ORIGINS ayarlarını yapın.**
Site açıldığında, aşağıdaki gibi bir hata ayıklama ekranı göreceksiniz. Bu, kaynak kodumuzun "izin verilen bir sunucuda" çalışmaması nedeniyle ortaya çıkan bir Django güvenlik hatasıdır.

![Test](./assets/59-print.png)

**Not**: Bu tür hata ayıklama bilgileri kurulum aşamasında çok faydalıdır, ancak yayına alınmış bir sitede güvenlik riski oluşturur. Site çalışmaya başladıktan sonra bunu nasıl devre dışı bırakacağınızı göstereceğiz.

GitHub projenizdeki /locallibrary/settings.py dosyasını açın ve ALLOWED_HOSTS ayarını Railway sitenizin URL'sini içerecek şekilde değiştirin:

```PYTHON
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
ALLOWED_HOSTS = ['web-production-3640.up.railway.app', '127.0.0.1']

# During development, you can instead set just the base URL
# (you might decide to change the site a few times).
# ALLOWED_HOSTS = ['.railway.app','127.0.0.1']
```

Uygulama CSRF koruması kullandığı için, CSRF_TRUSTED_ORIGINS anahtarını da ayarlamanız gerekecektir . /locallibrary/settings.py dosyasını açın ve aşağıdaki gibi bir satır ekleyin:

```PYTHON
## For example, for a site URL at 'web-production-3640.up.railway.app'
## (replace the string below with your own site URL):
CSRF_TRUSTED_ORIGINS = ['https://web-production-3640.up.railway.app']

# During development/for this tutorial you can instead set just the base URL
# CSRF_TRUSTED_ORIGINS = ['https://*.railway.app']
```

Ardından ayarlarınızı kaydedin ve GitHub deponuza işleyin (Railway uygulamanızı otomatik olarak güncelleyecek ve yeniden dağıtacaktır).

**Postgres SQL veritabanını hazırlayın ve bağlayın.**
Şimdi bir Postgres veritabanı oluşturup, az önce dağıttığımız Django uygulamasına bağlamamız gerekiyor. (Şimdi siteyi açarsanız, veritabanına erişilemediği için yeni bir hata alacaksınız.) Veritabanını uygulama projesinin bir parçası olarak oluşturacağız, ancak veritabanını ayrı bir projede de oluşturabilirsiniz.

Railway'de, sitenin üst menüsünden Kontrol Paneli seçeneğini seçin ve ardından uygulama projenizi seçin. Bu aşamada, uygulamanız için yalnızca tek bir hizmet içerir (bu, hizmetin değişkenlerini ve diğer ayrıntılarını ayarlamak için seçilebilir). Proje genelindeki ayarları değiştirmek için Ayarlar düğmesini seçebilirsiniz. Projeye hizmet eklemek için Yeni düğmesini seçin .

![Test](./assets/60-print.png)

Eklenecek hizmet türü sorulduğunda Veritabanı'nı seçin :

![Test](./assets/61-print.png)

Ardından veritabanını eklemeye başlamak için "PostgreSQL Ekle"yi seçin.

![Test](./assets/62-print.png)

Ardından Railway, aynı proje içinde boş bir veritabanı içeren bir hizmet sağlayacaktır. Tamamlandığında, proje görünümünde hem uygulama hem de veritabanı hizmetlerini göreceksiniz.

![Test](./assets/63-print.png)

Web servisini ve ardından Değişkenler sekmesini seçin. Yeni Değişken'i seçin ve ardından Değişken adı kutusunda Referans ekle'yi seçin . Aşağı kaydırın ve DATABASE_URL(bu, yerel kütüphanenin ortam değişkeni olarak okumasını ayarladığımız değişkenin adıdır) seçin.

![Test](./assets/64-print.png)

Ardından değişken referansını eklemek için Ekle'yi ve son olarak Dağıt'ı seçin (bu bir açılır pencerede görünecektir). Ayrıca Postgres veritabanını açıp, değişkenler sekmesini izleyerek de değişkeni kopyalayabileceğinizi unutmayın.

Projeyi şimdi açarsanız, yerel olarak göründüğü gibi görüntülenmelidir. Ancak, henüz bir süper kullanıcı hesabı oluşturmadığımız için kütüphaneyi veriyle doldurmanın bir yolu olmadığını unutmayın. Bunu yerel bilgisayarımızdaki CLI aracını kullanarak yapacağız.

**İstemciyi yükleyin**
**[Buradaki talimatları izleyerek](https://docs.railway.com/cli)** yerel işletim sisteminiz için Railway istemcisini indirin ve kurun .

İstemci yüklendikten sonra komutları çalıştırabileceksiniz. Daha önemli işlemlerden bazıları, bilgisayarınızdaki mevcut dizini ilgili bir Railway projesine dağıtmak (GitHub'a yüklemeye gerek kalmadan) ve Django projenizi üretim sunucusundakiyle aynı ayarlarla yerel olarak çalıştırmaktır. Bunları sonraki bölümlerde göstereceğiz.

Terminale aşağıdaki komutu girerek tüm olası komutların listesini alabilirsiniz.

```BASH
railway help
```

**Not:** Aşağıdaki bölümde, mevcut projeyi bir dizine bağlamak için railway loginve komutlarını kullanacağız *railway link*. Sistem tarafından oturumunuz kapatılırsa, projeyi yeniden bağlamak için her iki komutu da tekrar çalıştırmanız gerekecektir.

Süper kullanıcıyı yapılandırın
Süper kullanıcı oluşturmak için, üretim veritabanına karşı Django komutunu çalıştırmamız gerekiyor (bu , Django Eğitimi Bölüm 4: Django yönetim sitesi > Süper kullanıcı oluşturma *createsuperuser* bölümünde yerel olarak çalıştırdığımız işlemle aynıdır ). Railway, sunucuya doğrudan terminal erişimi sağlamaz ve bu komutu Procfile'a ekleyemeyiz çünkü etkileşimli bir komuttur.

Yapabileceğimiz şey, üretim veritabanına bağlıyken Django projemizde bu komutu yerel olarak çalıştırmaktır . Railway istemcisi, veritabanı bağlantı dizesi de dahil olmak üzere üretim sunucusuyla aynı ortam değişkenlerini kullanarak komutları yerel olarak çalıştırmak için bir mekanizma sağlayarak bunu kolaylaştırır.

Öncelikle, yerel kütüphane projenizin git klonunda bir terminal veya komut istemi açın. Ardından, *login* veya *login --browserles* skomutunu kullanarak tarayıcı hesabınıza giriş yapın (giriş işlemini tamamlamak için istemciden veya web sitesinden gelen tüm istemleri ve talimatları izleyin):

```BASH
railway login
```

Giriş yaptıktan sonra, aşağıdaki komutu kullanarak mevcut yerel kütüphane dizininizi ilgili Railway projesine bağlayın. İstendiğinde belirli bir projeyi seçmeniz/girmeniz gerekeceğini unutmayın:

```BASH
railway link
```

Yerel dizin ve proje artık birbirine bağlandığına göre , yerel Django projesini üretim ortamındaki ayarlarla çalıştırabilirsiniz. Öncelikle normal Django geliştirme ortamınızın hazır olduğundan emin olun. Ardından, gerekli ad, e-posta ve şifreyi girerek aşağıdaki komutu çalıştırın:

```BASH
railway run python manage.py createsuperuser
```

Artık web sitenizin yönetim alanını ( ) açabilir ve Django Eğitimi Bölüm 4: Django yönetim sitesi *https://[your-url].railway.app/admin/* bölümünde gösterildiği gibi veritabanını doldurabilirsiniz .

**Yapılandırma değişkenlerinin ayarlanması**
Son adım, siteyi güvenli hale getirmektir. Özellikle, hata ayıklama günlük kaydını devre dışı bırakmamız ve gizli bir CSRF anahtarı belirlememiz gerekiyor. Gerekli değerleri ortam değişkenlerinden okuma işlemi, web sitenizi yayınlamaya hazır hale getirirken yapıldı (bkz. *DJANGO_DEBUG* ve *DJANGO_SECRET_KEY*).

Projenin bilgi ekranını açın ve Değişkenler *DATABASE_URL* sekmesini seçin. Aşağıda gösterildiği gibi, bu sekmede zaten mevcut olmalıdır .

![Test](./assets/65-print.png)

Kriptografik olarak gizli bir anahtar oluşturmanın birçok yolu vardır. Basit bir yol, geliştirme bilgisayarınızda aşağıdaki Python komutunu çalıştırmaktır:

```BASH
python -c "import secrets; print(secrets.token_urlsafe())"
```

Yeni Değişken düğmesini seçin ve *DJANGO_SECRET_KEY* gizli değerinizle birlikte anahtarı girin (ardından Ekle'yi *DJANGO_DEBUG* seçin). Daha sonra değeriyle birlikte anahtarı girin *False*. Son değişken kümesi şöyle görünmelidir:

![Test](./assets/66-print.png)

**Hata ayıklama**
Railway istemcisi, günlüklerin son kısmını göstermek için logs komutunu sağlar (her proje için sitede daha kapsamlı bir günlük mevcuttur):

```BASH
railway logs
```

## Django web uygulaması güvenliği
**[Kullanıcı verilerinin korunması, herhangi bir web sitesi tasarımının olmazsa olmaz bir parçasıdır. Daha önce Web güvenliği](https://developer.mozilla.org/en-US/docs/Web/Security)** başlıklı makalede en yaygın güvenlik tehditlerinden bazılarını açıklamıştık ; bu makale ise Django'nun yerleşik koruma mekanizmalarının bu tür tehditlerle nasıl başa çıktığına dair pratik bir gösterim sunmaktadır.

**Genel Bakış**
Web sitesi güvenliği konusu, sunucu tarafı tasarımı için web sitesi güvenliğinin ne anlama geldiğine ve korunmanız gereken en yaygın tehditlerden bazılarına genel bir bakış sunar. Bu makaledeki temel mesajlardan biri, web uygulamasının tarayıcıdan gelen verilere güvendiği durumlarda neredeyse tüm saldırıların başarılı olduğudur.

**Uyarı**: Web sitesi güvenliği hakkında öğrenebileceğiniz en önemli ders, tarayıcıdan gelen verilere asla güvenmemektir . Bu *GET*, URL parametrelerindeki istek verilerini, *POST* verileri, HTTP başlıklarını ve çerezleri, kullanıcı tarafından yüklenen dosyaları vb. içerir. Gelen tüm verileri her zaman kontrol edin ve temizleyin. Her zaman en kötü senaryoyu varsayın.

Django kullanıcıları için iyi haber şu ki, en yaygın tehditlerin çoğu çerçeve tarafından ele alınıyor! Django'da Güvenlik (Django belgeleri) makalesi, Django'nun güvenlik özelliklerini ve Django destekli bir web sitesinin nasıl güvenli hale getirileceğini açıklıyor.

**Yaygın tehditler/koruma önlemleri**
Django dokümantasyonunu burada tekrarlamak yerine, bu makalede Django LocalLibrary eğitimimiz bağlamında güvenlik özelliklerinden sadece birkaçını göstereceğiz .

**Çapraz site komut dosyası çalıştırma (XSS)**
XSS, saldırganın istemci tarafı komut dosyalarını web sitesi üzerinden diğer kullanıcıların tarayıcılarına enjekte etmesine olanak tanıyan bir saldırı sınıfını tanımlamak için kullanılan bir terimdir. Bu genellikle, kötü amaçlı komut dosyalarının veritabanında saklanması ve buradan alınarak diğer kullanıcılara gösterilmesi veya kullanıcıların, saldırganın JavaScript kodunun kullanıcının tarayıcısı tarafından yürütülmesine neden olacak bir bağlantıya tıklaması yoluyla gerçekleştirilir.

Django'nun şablon sistemi , HTML'de "tehlikeli" olan belirli karakterleri kaçırarak sizi XSS saldırılarının çoğuna karşı korur . Bunu , Django Eğitimi Bölüm 9: Formlarla Çalışma'da kurduğumuz Yazar Oluşturma formunu kullanarak LocalLibrary web sitemize biraz JavaScript enjekte etmeye çalışarak gösterebiliriz .

1\.Web sitesini geliştirme sunucusunu kullanarak başlatın (* python3 manage.py runserver*).

2\.Siteyi yerel tarayıcınızda açın ve süper kullanıcı hesabınıza giriş yapın.

3\.Yazar oluşturma sayfasına gidin (URL adresi şu olmalıdır: *http://127.0.0.1:8000/catalog/author/create/*).

4\.Yeni bir kullanıcı için ad ve tarih bilgilerini girin ve ardından Soyadı alanına aşağıdaki metni ekleyin: *&lt;script&gt;alert('Test alert');&lt;/script&gt;.*

![Test](./assets/67-print.png)

**Not**: Bu, çalıştırıldığında tarayıcınızda bir uyarı kutusu görüntüleyecek zararsız bir komut dosyasıdır. Kaydı gönderdiğinizde uyarı görüntülenirse, site XSS tehditlerine karşı savunmasızdır.

5\.Kaydı kaydetmek için Gönder düğmesine basın .

6\.Yazarı kaydettiğinizde aşağıdaki gibi görüntülenecektir. XSS korumaları nedeniyle *alert()* çalıştırılmamalıdır. Bunun yerine komut dosyası düz metin olarak görüntülenir.

![Test](./assets/68-print.png)

Sayfanın HTML kaynak kodunu incelerseniz, script etiketleri için tehlikeli karakterlerin zararsız kaçış kodu karşılıklarına dönüştürüldüğünü görebilirsiniz (örneğin, >artık &gt;).

```HTML
<h1>
  Author: Boon&lt;script&gt;alert(&#x27;Test alert&#x27;);&lt;/script&gt;, David
  (Boonie)
</h1>
```

Django şablonlarını kullanmak sizi XSS saldırılarının çoğuna karşı korur. Ancak bu korumayı kapatmak mümkündür ve koruma, normalde kullanıcı girdisiyle doldurulmayacak tüm etiketlere otomatik olarak uygulanmaz (örneğin, *help_text* bir form alanındaki değer genellikle kullanıcı tarafından sağlanmaz, bu nedenle Django bu değerleri kaçırmaz).

XSS saldırılarının, çerezler, web servisleri veya yüklenen dosyalar gibi güvenilmeyen diğer veri kaynaklarından da kaynaklanması mümkündür (veriler bir sayfaya dahil edilmeden önce yeterince temizlenmediğinde). Bu kaynaklardan veri görüntülüyorsanız, kendi temizleme kodunuzu eklemeniz gerekebilir.

**İçerik Güvenlik Politikası (CSP)**
İçerik Güvenlik Politikası (CSP), XSS ve diğer enjeksiyon saldırılarına karşı ek bir koruma katmanı sağlar. CSP, tarayıcıya bir sayfanın hangi içerik kaynaklarını (komut dosyaları, stil sayfaları ve resimler gibi) yüklemesine izin verildiğini söyleyen bir HTTP başlığıdır. Bir saldırgan bir sayfaya komut dosyası enjekte etmeyi başarırsa, tarayıcı izin verilen bir kaynaktan gelmediği sürece onu çalıştırmayı reddeder.

Django 6.0'dan itibaren, Django'nun yerleşik özelliğini kullanarak bir CSP ayarlayabilirsiniz *ContentSecurityPolicyMiddleware*. Bunu LocalLibrary için etkinleştirmek için, /locallibrary/settings.py dosyasını açın ve listenin sonuna middleware'i ekleyin *MIDDLEWARE*:

```PYTHON
MIDDLEWARE = [
    # …
    'django.middleware.csp.ContentSecurityPolicyMiddleware',
]
```

Ardından, ayarı kullanarak politikayı tanımlayın *SECURE_CSP*:

```PYTHON
# Content Security Policy: only allow resources from this site,
# plus the Bootstrap stylesheet from the jsDelivr CDN.
from django.utils.csp import CSP

SECURE_CSP = {
    "default-src": [CSP.SELF],
    "style-src": [CSP.SELF, "https://cdn.jsdelivr.net"],
}
```

Bu *default-src* yönerge, tarayıcının kaynakları yalnızca kendi sitemizden (kaynak) yüklemesine izin verir *CSP.SELF*. *'self'* Yönerge *style-src* ayrıca, temel şablonumuz tarafından kullanılan Bootstrap CSS'ini sunan CDN'den stil sayfalarına da izin verir.

Bu politika satır içi komut dosyalarına veya stillere izin vermediği için, tarayıcı ayrıca sayfaya gömülü satır içi &lt;script&gt; öğeleri, öznitelikleri ve benzeri kodları da engeller. Bu, tam olarak bir XSS saldırısının enjekte ettiği kod türüdür. Bu nedenle, LocalLibrary şablonları öznitelikler yerine CSS sınıflarını kullanır. Eğer satır içi bir komut dosyasına ihtiyacınız varsa, Django bunun için bir nonce oluşturabilir. Django'nun İçerik Güvenlik Politikası Nasıl Kullanılır bölümünde açıklandığı gibi, komut dosyasının çalışmasına izin vermek için nonce'u komut dosyasının özniteliğine ekleyin .*style style nonce*

Geliştirme sunucusunu çalıştırın ve herhangi bir sayfada tarayıcınızın geliştirici araçlarını açın. Yanıtta başlığı görmelisiniz *Content-Security-Policy* ve konsolda CSP hatası olmamalıdır.

**Not**: Bu ayarı, bir politikayı uygulamaya koymadan önce denemek için kullanabilirsiniz *SECURE_CSP_REPORT_ONLY*. Tarayıcı daha sonra konsolda ihlalleri bildirir, ancak hiçbir şeyi engellemez.

**Çapraz site istek sahteciliği (CSRF) koruması**
CSRF saldırıları, kötü niyetli bir kullanıcının, başka bir kullanıcının bilgisi veya izni olmadan o kullanıcının kimlik bilgilerini kullanarak eylemler gerçekleştirmesine olanak tanır. Örneğin, LocalLibrary'mize ek yazarlar eklemek isteyen bir bilgisayar korsanını ele alalım.

**Not**: Açıkçası, bilgisayar korsanımız bunu para için yapmıyor! Daha hırslı bir bilgisayar korsanı, aynı yaklaşımı diğer sitelerde kullanarak çok daha zararlı işler yapabilir (örneğin, parayı kendi hesaplarına aktarmak vb.).

Bunu yapmak için, aşağıda gösterilene benzer bir HTML dosyası oluşturabilirler; bu dosya, yüklendiği anda gönderilen bir yazar oluşturma formu (önceki bölümde kullandığımız gibi) içerir. Daha sonra dosyayı tüm kütüphanecilere gönderir ve dosyayı açmalarını önerirler (içinde zararsız bazı bilgiler var, gerçekten!). Dosya, oturum açmış herhangi bir kütüphaneci tarafından açılırsa, form kimlik bilgileriyle gönderilir ve yeni bir yazar oluşturulur.

```HTML
<html lang="en">
  <body onload="document.EvilForm.submit()">
    <form
      action="http://127.0.0.1:8000/catalog/author/create/"
      method="post"
      name="EvilForm">
      <label for="id_first_name">First name:</label>
      <input
        id="id_first_name"
        maxlength="100"
        name="first_name"
        type="text"
        value="Mad"
        required />
      <label for="id_last_name">Last name:</label>
      <input
        id="id_last_name"
        maxlength="100"
        name="last_name"
        type="text"
        value="Man"
        required />
      <label for="id_date_of_birth">Date of birth:</label>
      <input id="id_date_of_birth" name="date_of_birth" type="text" />
      <label for="id_date_of_death">Died:</label>
      <input
        id="id_date_of_death"
        name="date_of_death"
        type="text"
        value="12/10/2016" />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

Geliştirme web sunucusunu çalıştırın ve süper kullanıcı hesabınızla giriş yapın. Yukarıdaki metni bir dosyaya kopyalayın ve ardından tarayıcıda açın. Django bu tür şeylere karşı koruma sağladığı için bir CSRF hatası almalısınız!

Korumanın etkinleştirilme şekli, form tanımınıza şablon etiketini eklemenizdir *{% csrf_token %}*. Bu belirteç daha sonra aşağıdaki gibi HTML'nizde, mevcut tarayıcıdaki kullanıcıya özgü bir değerle oluşturulur.

```HTML
<input
  type="hidden"
  name="csrfmiddlewaretoken"
  value="0QRWHnYVg776y2l66mcvZqp8alrv4lb8S8lZ4ZJUWGZFA5VHrVfL2mpH29YZ39PW" />
  ```

Django, kullanıcı/tarayıcıya özel bir anahtar oluşturur ve bu alanı içermeyen veya kullanıcı/tarayıcı için yanlış alan değeri içeren formları reddeder.

Bu tür bir saldırıyı kullanmak için, bilgisayar korsanının artık belirli hedef kullanıcıya ait CSRF anahtarını bulup eklemesi gerekiyor. Ayrıca, CSRF anahtarı tarayıcıya özgü olduğundan, kötü amaçlı bir dosyayı tüm kütüphanecilere gönderip birinin açmasını umma gibi "rastgele" bir yaklaşım da kullanamazlar.

Django'nun CSRF koruması varsayılan olarak açıktır. *{% csrf_token %}* Formlarınızda her zaman `<script>` şablonunu kullanmalı ve *POST* veritabanına veri ekleyebilecek veya değiştirebilecek istekler için `<script>` etiketini kullanmalısınız.

**Diğer korumalar**
Django ayrıca başka koruma biçimleri de sunar (bunların çoğunu göstermek zor veya pek de faydalı olmaz):

*SQL enjeksiyonuna karşı koruma*
SQL enjeksiyonu güvenlik açıkları, kötü niyetli kullanıcıların veritabanında rastgele SQL kodu çalıştırmasına olanak tanıyarak, kullanıcının izinlerinden bağımsız olarak verilere erişim, değiştirme veya silme imkanı sağlar. Hemen hemen her durumda, veritabanına Django'nun sorgu kümeleri/modelleri kullanılarak erişilir, bu nedenle ortaya çıkan SQL, altta yatan veritabanı sürücüsü tarafından düzgün bir şekilde kaçış karakterleriyle işlenir. Ham sorgular veya özel SQL yazmanız gerekiyorsa, SQL enjeksiyonunu önlemeyi açıkça düşünmeniz gerekir.

*Clickjacking koruması*
Bu saldırıda, kötü niyetli bir kullanıcı, görünür üst düzey bir siteye yönelik tıklamaları ele geçirir ve bunları alttaki gizli bir sayfaya yönlendirir. Bu teknik, örneğin, meşru bir banka sitesini görüntülemek ancak giriş bilgilerini *&lt;iframe&gt;* saldırgan tarafından kontrol edilen görünmez bir sayfada ele geçirmek için kullanılabilir. Django , destekleyici bir tarayıcıda bir sitenin bir çerçeve içinde görüntülenmesini engelleyebilen ara yazılım biçiminde tıklama ele geçirme koruması içerir.*X-Frame-Options*

*TLS/HTTPS'nin zorunlu kılınması*
Web sunucusunda TLS/HTTPS etkinleştirilerek, site ile tarayıcı arasındaki tüm trafik şifrelenebilir; bu, normalde düz metin olarak gönderilecek olan kimlik doğrulama bilgilerini de içerir (HTTPS'nin etkinleştirilmesi şiddetle tavsiye edilir). HTTPS etkinleştirilirse, Django kullanabileceğiniz bir dizi başka koruma sağlar:

- *SECURE_PROXY_SSL_HEADER* Bu özellik, HTTP proxy'si olmayan bir kaynaktan gelen içeriğin bile güvenli olup olmadığını kontrol etmek için kullanılabilir.
- *SECURE_SSL_REDIRECTHTTPS*, tüm HTTP isteklerini HTTPS'ye yönlendirmek için kullanılır.
- HTTP Sıkı Taşıma Güvenliği (HSTS) kullanın . Bu, bir tarayıcıya belirli bir siteye yapılacak tüm gelecekteki bağlantıların her zaman HTTPS kullanması gerektiğini bildiren bir HTTP başlığıdır. HTTP isteklerinin HTTPS'ye yönlendirilmesiyle birlikte, bu ayar, başarılı bir bağlantı kurulduktan sonra her zaman HTTPS'nin kullanılmasını sağlar. HSTS, web sunucusunda *SECURE_HSTS_SECONDS* veya ile yapılandırılabilir .*SECURE_HSTS_INCLUDE_SUBDOMAINS*
- Çerezlerin yalnızca HTTPS üzerinden gönderilmesini sağlamak için ' *SESSION_COOKIE_SECURE* güvenli ' çerezler kullanın .*CSRF_COOKIE_SECURE* True

**Ana bilgisayar başlığı doğrulaması**
*ALLOWED_HOSTS* Yalnızca güvenilir sunuculardan gelen istekleri kabul etmek için kullanılır .

Yukarıdaki mekanizmaların kullanımına ilişkin birçok başka koruma ve uyarı da bulunmaktadır. Django'nun sunduklarına dair genel bir bakış açısı sağladığımızı umuyoruz, ancak yine de Django güvenlik belgelerini okumanızı öneririz.

## DIY Django mini blog
Bu değerlendirmede, bu modülde öğrendiğiniz bilgilerin bir kısmını kullanarak kendi blogunuzu oluşturacaksınız.


# Express(Node.js)

**Kaynak:** [Express web çerçevesi (Node.js/JavaScript)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)

Express, JavaScript ile yazılmış ve Node.js çalışma ortamında barındırılan, popüler ve tarafsız bir web çerçevesidir. Bu modül, çerçevenin temel avantajlarından bazılarını, geliştirme ortamınızı nasıl kuracağınızı ve yaygın web geliştirme ve dağıtım görevlerini nasıl gerçekleştireceğinizi açıklamaktadır.

## Eğitimler

## Express/Node tanıtımı
Bu ilk Express makalesinde, "Node nedir?" ve "Express nedir?" sorularını yanıtlıyor ve Express web çerçevesini özel kılan unsurlara genel bir bakış sunuyoruz. Başlıca özellikleri özetleyecek ve bir Express uygulamasının temel yapı taşlarından bazılarını göstereceğiz (ancak bu aşamada henüz test edebileceğiniz bir geliştirme ortamınız olmayacak).

**Node'u Tanıtıyoruz**
Node (veya daha resmi adıyla Node.js ), geliştiricilerin JavaScript kullanarak her türlü sunucu tarafı aracı ve uygulamasını oluşturmasına olanak tanıyan açık kaynaklı, platformlar arası bir çalışma ortamıdır . Çalışma ortamı, tarayıcı bağlamının dışında (yani doğrudan bir bilgisayar veya sunucu işletim sisteminde çalışacak şekilde) kullanılmak üzere tasarlanmıştır. Bu nedenle, ortam tarayıcıya özgü JavaScript API'lerini atlar ve HTTP ve dosya sistemi kütüphaneleri de dahil olmak üzere daha geleneksel işletim sistemi API'lerine destek ekler.

Web sunucu geliştirme açısından Node'un birçok avantajı vardır:

- Mükemmel performans! Node, web uygulamalarında verimliliği ve ölçeklenebilirliği optimize etmek için tasarlanmıştır ve birçok yaygın web geliştirme sorununa (örneğin, gerçek zamanlı web uygulamaları) iyi bir çözümdür.
- Kod "basit eski JavaScript" ile yazılıyor, bu da hem istemci tarafı hem de sunucu tarafı kod yazarken diller arasında "bağlam kayması" ile uğraşmak için daha az zaman harcanması anlamına geliyor.
- JavaScript nispeten yeni bir programlama dilidir ve diğer geleneksel web sunucu dillerine (örneğin Python, PHP vb.) kıyasla dil tasarımındaki gelişmelerden faydalanmaktadır. Birçok yeni ve popüler dil JavaScript'e derlenir/dönüştürülebilir, bu nedenle TypeScript, CoffeeScript, ClojureScript, Scala, LiveScript vb. dilleri de kullanabilirsiniz.
- Node paket yöneticisi (npm), yüz binlerce yeniden kullanılabilir pakete erişim sağlar. Ayrıca sınıfının en iyisi bağımlılık çözümleme özelliğine sahiptir ve derleme araç zincirinin büyük bir bölümünü otomatikleştirmek için de kullanılabilir.
- Node.js taşınabilir bir platformdur. Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS ve NonStop OS işletim sistemlerinde kullanılabilir. Ayrıca, birçok web barındırma sağlayıcısı tarafından iyi bir şekilde desteklenir ve bu sağlayıcılar genellikle Node sitelerinin barındırılması için özel altyapı ve dokümantasyon sunarlar.
- Çok aktif bir üçüncü taraf ekosistemine ve geliştirici topluluğuna sahip; yardım etmeye istekli birçok insan var.

Node.js kullanarak, Node HTTP paketiyle basit bir web sunucusu oluşturabilirsiniz.

**Merhaba Node.js**
Aşağıdaki örnek, URL'de her türlü HTTP isteğini dinleyen bir web sunucusu oluşturur *http://127.0.0.1:8000/*; bir istek alındığında, komut dosyası "Merhaba Dünya" dizesiyle yanıt verir. Node'u zaten kurduysanız, örneği denemek için şu adımları izleyebilirsiniz:

1\.Terminali açın (Windows'ta komut satırı yardımcı programını açın).

2\.Örneğin, programı kaydetmek istediğiniz klasörü oluşturun test-nodeve ardından terminalinize aşağıdaki komutu girerek klasöre erişin:

```BASH
cd test-node
```

3\.En sevdiğiniz metin düzenleyiciyi kullanarak, adlı bir dosya oluşturun hello.jsve içine aşağıdaki kodu yapıştırın:

```JS
// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body "Hello World"
  res.end("Hello World\n");
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

4\.Dosyayı yukarıda oluşturduğunuz klasöre kaydedin.

5\.Terminale geri dönün ve aşağıdaki komutu yazın:

```BASH
node hello.js
```

Son olarak, web tarayıcınızda adresine gidin ; aksi halde boş olan web sayfasının sol üst köşesinde " Merhaba Dünya *http://localhost:8000* " metnini görmelisiniz .

**Not**: Eğer yerel kurulum yapmanıza gerek kalmadan Node.js koduyla denemeler yapmak istiyorsanız, Scrimba'nın "Aside: The HTTP module" adlı MDN öğrenme ortağı, Node HTTP paketiyle temel bir sunucu kurulumuna dair etkileşimli bir rehber sunmaktadır.

**Web Çerçeveleri**
Diğer yaygın web geliştirme görevleri Node tarafından doğrudan desteklenmemektedir. Farklı HTTP fiilleri (örneğin, *GET*, *POST*, *DELETE* vb.) için özel işlem eklemek, farklı URL yollarındaki ("rotalar") istekleri ayrı ayrı işlemek, statik dosyaları sunmak veya yanıtı dinamik olarak oluşturmak için şablonlar kullanmak istiyorsanız, Node tek başına pek işe yaramayacaktır. Ya kodu kendiniz yazmanız gerekecek ya da tekerleği yeniden icat etmekten kaçınmak için bir web çerçevesi kullanabilirsiniz!

**Express'i Tanıtıyoruz**
Express , en popüler Node.js web çerçevesidir ve diğer birçok popüler Node.js çerçevesinin temel kütüphanesidir. Şu mekanizmaları sağlar:

- Farklı URL yollarında (rotalarda) farklı HTTP fiilleriyle gelen istekler için işleyiciler yazın.
- Verileri şablonlara ekleyerek yanıtlar oluşturmak için "görünüm" oluşturma motorlarıyla entegre olun.
- Bağlantı için kullanılacak port ve yanıtın oluşturulmasında kullanılan şablonların konumu gibi yaygın web uygulaması ayarlarını yapın.
- İstek işleme hattının herhangi bir noktasına ek istek işleme "ara yazılımı" ekleyin.

Express'in kendisi oldukça minimalist olsa da , geliştiriciler neredeyse her web geliştirme sorununu çözmek için uyumlu ara yazılım paketleri oluşturmuştur. Çerezler, oturumlar, kullanıcı girişleri, URL parametreleri, *POST* veriler, güvenlik başlıkları ve daha birçok şeyle çalışmak için kütüphaneler mevcuttur. Express ekibi tarafından sürdürülen ara yazılım paketlerinin listesini (bazı popüler üçüncü taraf paketlerinin listesiyle birlikte) Express Middleware adresinde bulabilirsiniz .

**Not**: Bu esneklik iki ucu keskin bir kılıç gibidir. Neredeyse her sorunu veya gereksinimi karşılayacak ara yazılım paketleri mevcuttur, ancak kullanılacak doğru paketleri belirlemek bazen zor olabilir. Ayrıca bir uygulamayı yapılandırmanın "doğru yolu" da yoktur ve internette bulabileceğiniz birçok örnek optimal değildir veya bir web uygulaması geliştirmek için yapmanız gerekenlerin yalnızca küçük bir bölümünü gösterir.

**Node ve Express nereden çıktı?**
Node, ilk olarak 2009 yılında sadece Linux için piyasaya sürüldü. npm paket yöneticisi 2010 yılında, yerel Windows desteği ise 2012 yılında eklendi. 

Express ilk olarak Kasım 2010'da piyasaya sürüldü ve şu anda API'nin 5. ana sürümünde bulunuyor. 

**Node ve Express ne kadar popüler?**
Bir web çerçevesinin popülerliği önemlidir çünkü bu, çerçevenin bakımının devam edip etmeyeceğinin ve dokümantasyon, eklenti kütüphaneleri ve teknik destek açısından hangi kaynakların mevcut olacağının bir göstergesidir.

Sunucu tarafı framework'lerinin popülaritesini ölçmek için kolayca bulunabilen ve kesin bir yöntem yok (ancak her platform için GitHub projelerinin ve Stack Overflow sorularının sayısını saymak gibi mekanizmalar kullanarak popülariteyi tahmin edebilirsiniz). Daha iyi bir soru, Node ve Express'in popüler olmayan platformların sorunlarından kaçınmak için "yeterince popüler" olup olmadığıdır. Gelişmeye devam ediyorlar mı? İhtiyaç duyduğunuzda yardım alabiliyor musunuz? Express öğrenirseniz ücretli iş bulma fırsatınız var mı?

Express'i kullanan yüksek profilli şirketlerin sayısına, kod tabanına katkıda bulunan kişilerin sayısına ve hem ücretsiz hem de ücretli destek sağlayan kişilerin sayısına bakıldığında, evet, Express popüler bir framework!

**Express'in kendi görüşlerini mi benimsediğini soruyorsunuz?**
Web çerçeveleri genellikle kendilerini "fikir sahibi" veya "fikir sahibi olmayan" olarak tanımlarlar.

Önyargılı çerçeveler, belirli bir görevi ele almanın "doğru yolu" hakkında görüşlere sahip olanlardır. Genellikle belirli bir alanda (belirli bir türdeki sorunları çözmede) hızlı gelişmeyi desteklerler çünkü herhangi bir şeyi yapmanın doğru yolu genellikle iyi anlaşılmış ve iyi belgelenmiştir. Bununla birlikte, ana alanlarının dışındaki sorunları çözmede daha az esnek olabilirler ve kullanabilecekleri bileşenler ve yaklaşımlar için daha az seçenek sunma eğilimindedirler.

Buna karşılık, tarafsız çerçeveler, bir amaca ulaşmak için bileşenleri bir araya getirmenin en iyi yolu veya hangi bileşenlerin kullanılacağı konusunda çok daha az kısıtlama getirir. Geliştiricilerin belirli bir görevi tamamlamak için en uygun araçları kullanmasını kolaylaştırırlar, ancak bunun bedeli, bu bileşenleri kendinizin bulması gerektiğidir.

Express tarafsızdır. İstediğiniz hemen hemen her uyumlu ara yazılımı, istediğiniz hemen hemen her sırayla istek işleme zincirine ekleyebilirsiniz. Uygulamayı tek bir dosyada veya birden fazla dosyada ve herhangi bir dizin yapısını kullanarak yapılandırabilirsiniz. Bazen çok fazla seçeneğiniz olduğunu hissedebilirsiniz!

**Express kodunun görünümü nasıldır?**
Geleneksel veri odaklı bir web sitesinde, bir web uygulaması web tarayıcısından (veya diğer istemciden) gelen HTTP isteklerini bekler. Bir istek alındığında, uygulama URL kalıbına ve muhtemelen *POST* verilerde veya *GET* bilgilerde bulunan ilgili bilgilere dayanarak hangi eylemin gerekli olduğunu belirler. Gereksinime bağlı olarak, bir veritabanından bilgi okuyabilir veya yazabilir ya da isteği karşılamak için gereken diğer görevleri gerçekleştirebilir. Uygulama daha sonra web tarayıcısına bir yanıt döndürür; genellikle alınan verileri bir HTML şablonundaki yer tutuculara ekleyerek tarayıcının görüntülemesi için dinamik olarak bir HTML sayfası oluşturur.

Express, belirli bir HTTP fiili ( *GET*, *POST*, *PUT*, vb.) ve URL kalıbı ("Route") için hangi fonksiyonun çağrılacağını belirtmek için yöntemler ve hangi şablon ("view") motorunun kullanılacağını, şablon dosyalarının nerede bulunduğunu ve bir yanıtı oluşturmak için hangi şablonun kullanılacağını belirtmek için yöntemler sağlar. Çerezler, oturumlar ve kullanıcılar için destek eklemek, parametreleri almak vb. için Express ara yazılımını kullanabilirsiniz. *POST* Node *GET* tarafından desteklenen herhangi bir veritabanı mekanizmasını kullanabilirsiniz (Express, veritabanıyla ilgili herhangi bir davranış tanımlamaz).

Aşağıdaki bölümlerde, Express ve Node kodlarıyla çalışırken sıkça karşılaşacağınız bazı durumlar açıklanmaktadır .

**Helloworld Express**
Öncelikle standart Express Hello World örneğini ele alalım (bu örneğin her bir bölümünü aşağıda ve sonraki bölümlerde ayrıntılı olarak ele alacağız).

```JS
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
```

İlk iki satır *require()* (import) express modülünü içe aktarır ve bir Express uygulaması oluşturur . Geleneksel olarak adlandırılan bu nesne, *app* HTTP isteklerini yönlendirmek, ara yazılımı yapılandırmak, HTML görünümlerini oluşturmak, bir şablon motoru kaydetmek ve uygulamanın nasıl davrandığını kontrol eden uygulama ayarlarını (örneğin, ortam modu, rota tanımlarının büyük/küçük harf duyarlı olup olmadığı vb.) değiştirmek için yöntemlere sahiptir.

Kodun orta kısmı (ile başlayan üç satır ) bir rota tanımınıapp.get gösterir . Bu yöntem , site kök dizinine göre bir yola ( ) sahip bir HTTP isteği olduğunda çağrılacak bir geri çağırma fonksiyonu belirtir . Geri çağırma fonksiyonu, argüman olarak bir istek ve bir yanıt nesnesi alır ve yanıta "Merhaba Dünya!" dizesini döndürmek için çağrı yapar.*app.get()* *GET'/'send()*

Son kod bloğu, belirtilen portta ('3000') sunucuyu başlatır ve konsola bir günlük yorumu yazdırır. Sunucu çalışırken, *localhost:3000* tarayıcınızda adresine giderek döndürülen örnek yanıtı görebilirsiniz.

**Modüllerin içe aktarılması ve oluşturulması**
Modül, Node.js'nin fonksiyonları kullanılarak diğer kodlara aktarılabilecek bir JavaScript kütüphanesi/dosyasıdır *require()*. Express'in kendisi bir modüldür, aynı şekilde Express uygulamalarımızda kullandığımız ara katman yazılımları ve veritabanı kütüphaneleri de birer modüldür .

Aşağıdaki kod, Express çerçevesini örnek alarak bir modülü adıyla nasıl içe aktardığımızı göstermektedir. Öncelikle *require()*, modülün adını bir dize olarak belirterek fonksiyonu çağırıyoruz ( *'express'*) ve döndürülen nesneyi çağırarak bir Express uygulaması oluşturuyoruz . Daha sonra uygulama nesnesinin özelliklerine ve fonksiyonlarına erişebiliriz.

```JS
const express = require("express");

const app = express();
```

Aynı şekilde içe aktarılabilecek kendi modüllerinizi de oluşturabilirsiniz.

**Not**: Kendi modüllerinizi oluşturmak isteyeceksiniz , çünkü bu, kodunuzu yönetilebilir parçalara ayırmanıza olanak tanır; tek dosya halindeki monolitik bir uygulamayı anlamak ve sürdürmek zordur. Modülleri kullanmak ayrıca ad alanınızı yönetmenize de yardımcı olur, çünkü bir modül kullandığınızda yalnızca açıkça dışa aktardığınız değişkenler içe aktarılır.

Nesneleri bir modülün dışında kullanılabilir hale getirmek için, onları nesne üzerinde ek özellikler olarak göstermeniz yeterlidir *exports*. Örneğin, aşağıdaki square.js *area()* modülü , yöntemleri dışa aktaran bir dosyadır *perimeter():*

```JS
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Bu modülü kullanarak içe aktarabilir *require()* ve ardından gösterildiği gibi dışa aktarılan yöntem(ler)i çağırabiliriz:

```JS
const square = require("./square"); // Here we require() the name of the file without the (optional) .js file extension

console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
```

**Not:** İsterseniz modüle giden mutlak bir yol da belirtebilirsiniz (ya da başlangıçta yaptığımız gibi bir isim).

Nesneyi tek tek özellikler oluşturarak değil, tek bir atama ile komple dışa aktarmak istiyorsanız, *module.exports* aşağıdaki gibi atama yapın (bunu, dışa aktarma nesnesinin kökünü bir kurucu veya başka bir fonksiyon yapmak için de yapabilirsiniz):

```JS
module.exports = {
  area(width) {
    return width * width;
  },

  perimeter(width) {
    return 4 * width;
  },
};
```

**Not**: Bunu, belirli bir modül içindeki *exports* bir kısayol olarak düşünebilirsiniz *module.exports*. Aslında, modül değerlendirilmeden önce *exports* değerine başlatılan bir değişkendir . Bu değer, bir nesneye (bu durumda boş bir nesneye) referanstır. Bu , tarafından referans edilen aynı nesneye bir referans tuttuğu anlamına gelir . Ayrıca, başka bir değer atandığında artık ile bağlantılı olmadığı anlamına gelir .*module.exports exportsmodule.exports exports module.exports*

**Asenkron API'lerin kullanımı**
JavaScript kodu, tamamlanması zaman alabilecek işlemler için sıklıkla senkron yerine asenkron API'ler kullanır. Senkron API, her işlemin bir sonraki işlem başlamadan önce tamamlanması gereken bir API'dir. Örneğin, aşağıdaki log fonksiyonları senkroniktir ve metni konsola sırayla (Birinci, İkinci) yazdırır.

```JS
console.log("First");
console.log("Second");
```

Buna karşılık, eşzamansız bir API, bir işlemi başlatıp hemen (işlem tamamlanmadan önce) geri dönen bir API'dir. İşlem bittiğinde, API ek işlemler gerçekleştirmek için bir mekanizma kullanır. Örneğin, aşağıdaki kod "İkinci, Birinci" yazdıracaktır çünkü *setTimeout()* yöntem önce çağrılsa ve hemen geri dönse bile, işlem birkaç saniye boyunca tamamlanmaz.

```JS
setTimeout(() => {
  console.log("First");
}, 3000);
console.log("Second");
```

Node.js'de engellemeyen asenkron API'lerin kullanımı, tarayıcıya kıyasla Node.js'de daha da önemlidir çünkü Node.js uygulamaları genellikle tek iş parçacıklı, olay odaklı bir yürütme ortamı olarak yazılır. "Tek iş parçacıklı" demek, sunucuya yapılan tüm isteklerin aynı iş parçacığında çalıştırılması (ayrı süreçlere ayrılmak yerine) anlamına gelir. Bu model, hız ve sunucu kaynakları açısından son derece verimlidir. Bununla birlikte, fonksiyonlarınızdan herhangi biri uzun süren senkron yöntemleri çağırırsa, yalnızca mevcut isteği değil, web uygulamanız tarafından işlenen diğer tüm istekleri de bloke edeceği anlamına gelir.

Asenkron bir API'nin, işlemin tamamlandığını uygulamanıza bildirmesinin birden fazla yolu vardır. Geçmişte kullanılan yaklaşım, asenkron API çağrılırken bir geri çağırma fonksiyonu kaydetmek ve bu fonksiyonun işlem tamamlandığında çağrılmasıydı (yukarıda kullanılan yaklaşım budur).

**Not**: Birbirine bağlı ve sırayla gerçekleştirilmesi gereken bir dizi eşzamansız işleminiz varsa, geri çağırma fonksiyonlarının kullanımı oldukça "karmaşık" olabilir, çünkü bu durum iç içe geçmiş birden fazla seviyede geri çağırma fonksiyonuna yol açar. Bu sorun genellikle "geri çağırma cehennemi" olarak bilinir.

**Not**: Node ve Express için yaygın bir kural, önce hata içeren geri çağırma fonksiyonları kullanmaktır. Bu kuralda, geri çağırma fonksiyonlarınızdaki ilk değer bir hata değeridir, sonraki argümanlar ise başarı verilerini içerir. Bu yaklaşımın neden yararlı olduğuna dair iyi bir açıklama şu blogda yer almaktadır: The Node.js Way - Understanding Error-First Callbacks (fredkschott.com).

Modern JavaScript kodlarında, eşzamansız program akışını yönetmek için daha yaygın olarak Promise'ler ve async/awaitutils.promisify kullanılır. Mümkün olduğunca Promise'leri kullanmalısınız. Geri çağrı (callback) kullanan kodlarla çalışıyorsanız, geri çağrı → Promise dönüşümünü ergonomik bir şekilde ele almak için Node.js fonksiyonunu kullanabilirsiniz .

**Rota işleyicileri oluşturma**
Yukarıdaki Hello World Express örneğimizde , GETsite kök dizinine ( ) yapılan HTTP istekleri için bir (geri çağrı) yönlendirme işleyici fonksiyonu tanımladık '/'.

```JS
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

Geri çağrı fonksiyonu, argüman olarak bir istek ve bir yanıt nesnesi alır. Bu durumda, yöntem *send()* "Merhaba Dünya!" dizesini döndürmek için yanıta çağrı yapar. İstek/yanıt döngüsünü sonlandırmak için bir dizi başka yanıt yöntemi *res.json()* de vardır; örneğin, bir JSON yanıtı göndermek veya *res.sendFile()* bir dosya göndermek için çağrı yapabilirsiniz .

**Not:** Geri çağrı fonksiyonlarında istediğiniz argüman adlarını kullanabilirsiniz; geri çağrı çağrıldığında ilk argüman her zaman istek, ikinci argüman ise her zaman yanıt olacaktır. Geri çağrının gövdesinde üzerinde çalıştığınız nesneyi tanımlayabileceğiniz şekilde adlandırmak mantıklıdır.

Express uygulama nesnesi, diğer tüm HTTP fiilleri için rota işleyicileri tanımlama yöntemleri de sağlar ve bunlar çoğunlukla aynı şekilde kullanılır:

*checkout()*, *copy()*, *delete()*, *get()*, *head()*, *lock()*, *merge()*, *mkactivity()*, *mkcol()*, *move()*, *m-search()*, *notify()*, *options()*, *patch()*, *post()*, *purge()*, *put()*, *report()*, *search()*, *subscribe()*, *trace()*, *unlock()*, *unsubscribe()*.

*app.all()* Herhangi bir HTTP yöntemine yanıt olarak çağrılacak özel bir yönlendirme yöntemi vardır . Bu yöntem, tüm istek yöntemleri için belirli bir yolda ara katman işlevlerini yüklemek için kullanılır. Aşağıdaki örnek (Express dokümanından), kullanılan HTTP fiilinden bağımsız olarak ( http modülü/*secret* tarafından destekleniyorsa ) istekleri için yürütülecek bir işleyiciyi göstermektedir.

```JS
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section…");
  next(); // pass control to the next handler
});
```

Rotalar, bir URL'deki belirli karakter kalıplarını eşleştirmenize ve URL'den bazı değerleri çıkarıp bunları rota işleyiciye parametre olarak (parametre olarak geçirilen istek nesnesinin öznitelikleri olarak) iletmenize olanak tanır.

Genellikle, bir sitenin belirli bir bölümüne ait rota işleyicilerini bir araya gruplandırmak ve bunlara ortak bir rota öneki kullanarak erişmek faydalıdır (örneğin, bir Wiki'ye sahip bir site, wiki ile ilgili tüm rotaları tek bir dosyada toplayabilir ve bunlara /wiki/ rota önekiyle erişebilir ). Express'te bu , nesnesi kullanılarak gerçekleştirilir . Örneğin, wiki rotamızı wiki.js *express.Router* adlı bir modülde oluşturabilir ve ardından aşağıdaki gibi nesneyi dışa aktarabiliriz:*Router*

```JS
// wiki.js - Wiki route module

const express = require("express");

const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.send("Wiki home page");
});

// About page route
router.get("/about", (req, res) => {
  res.send("About this wiki");
});

module.exports = router;
```

**Not**: Nesneye rota eklemek, daha önce gösterildiği gibi Routernesneye rota eklemekle aynıdır *app*.

Ana uygulama dosyamızda yönlendiriciyi kullanmak için, önce *require()*rota modülünü ( wiki.js ) kullanmalı, ardından Express *use()* uygulamasından yönlendiriciyi ara katman işleme yoluna eklemeliyiz. Bu sayede iki rota da ve adreslerinden erişilebilir olacaktır .*/wiki//wiki/about/*

```JS
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

**Ara yazılım kullanımı**
Ara katman yazılımları (middleware), statik dosyaların sunulmasından hata yönetimine, HTTP yanıtlarının sıkıştırılmasına kadar birçok görev için Express uygulamalarında yaygın olarak kullanılır. Yönlendirme fonksiyonları, HTTP istemcisine bir yanıt döndürerek HTTP istek-yanıt döngüsünü sonlandırırken, ara katman yazılım fonksiyonları genellikle istek veya yanıt üzerinde bir işlem gerçekleştirir ve ardından "yığın"daki bir sonraki fonksiyonu çağırır; bu da daha fazla ara katman yazılımı veya bir yönlendirme işleyici olabilir. Ara katman yazılımlarının çağrılma sırası uygulama geliştiricisine kalmıştır.

**Not:** Ara katman, herhangi bir işlemi gerçekleştirebilir, herhangi bir kodu çalıştırabilir, istek ve yanıt nesnesinde değişiklikler yapabilir ve ayrıca istek-yanıt döngüsünü sonlandırabilir . Döngüyü sonlandırmazsa, *next()* kontrolü bir sonraki ara katman fonksiyonuna devretmek için çağrı yapmalıdır (aksi takdirde istek askıda kalır).

Çoğu uygulama , çerezlerle, oturumlarla, kullanıcı kimlik doğrulamasıyla, istek ve JSON verilerine erişimle, günlük kaydıyla vb. gibi yaygın web geliştirme görevlerini basitleştirmek için üçüncü taraf ara yazılımlar kullanır. Express ekibi tarafından sürdürülen ara yazılım paketlerinin *POST* bir listesini (diğer popüler üçüncü taraf paketleri de içerir) bulabilirsiniz . Diğer Express paketleri npm paket yöneticisinde mevcuttur.

Üçüncü taraf ara yazılımları kullanmak için öncelikle bunları npm kullanarak uygulamanıza yüklemeniz gerekir. Örneğin, morgan HTTP istek kaydedici ara yazılımını yüklemek için şunu yaparsınız:

```BASH
npm install morgan
```

Ardından , ara yazılımı yığına eklemek için *use()* Express uygulama nesnesini çağırabilirsiniz :

```JS
const express = require("express");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));
// …
```

**Not:** Ara katman yazılımları ve yönlendirme fonksiyonları, tanımlandıkları sırayla çağrılır. Bazı ara katman yazılımları için sıra önemlidir (örneğin, oturum ara katman yazılımı çerez ara katman yazılımına bağlıysa, çerez işleyici önce eklenmelidir). Ara katman yazılımlarının rota ayarlanmadan önce çağrılması neredeyse her zaman geçerlidir, aksi takdirde rota işleyicileriniz ara katman yazılımlarınız tarafından eklenen işlevlere erişemez.

Kendi ara katman fonksiyonlarınızı yazabilirsiniz ve büyük olasılıkla bunu yapmanız gerekecektir (en azından hata işleme kodu oluşturmak için). Bir ara katman fonksiyonu ile bir rota işleyici geri çağırma fonksiyonu arasındaki tek *next* fark, ara katman fonksiyonlarının üçüncü bir argümana sahip olmasıdır ; bu argüman, ara katman fonksiyonlarının istek döngüsünü tamamlayan fonksiyon olmadığı durumlarda çağrılması beklenir (ara katman fonksiyonu çağrıldığında, bu, çağrılması gereken bir sonraki fonksiyonu içerir).

Tüm yanıtlar için *app.use()* veya ilgili yöntemi kullanarak belirli bir HTTP fiili için işleme zincirine bir ara katman işlevi ekleyebilirsiniz : *app.get(), app.post()*, vb. Her iki durumda da rotalar aynı şekilde belirtilir, ancak çağrılırken rota isteğe bağlıdır *app.use()*.

Aşağıdaki örnek, ara katman işlevini her iki yaklaşımla ve rota ile/rota olmadan nasıl ekleyebileceğinizi göstermektedir.

```JS
const express = require("express");

const app = express();

// An example middleware function
function middlewareFunction(req, res, next) {
  // Perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(middlewareFunction);

// Function added with use() for a specific route
app.use("/some-route", middlewareFunction);

// A middleware function added for a specific HTTP verb and route
app.get("/", middlewareFunction);

app.listen(3000);
```

**Not:** Yukarıda ara katman fonksiyonunu ayrı olarak tanımladık ve ardından geri çağrı fonksiyonu olarak ayarladık. Önceki rota işleyici fonksiyonumuzda ise geri çağrı fonksiyonunu kullanıldığı anda tanımlamıştık. JavaScript'te her iki yaklaşım da geçerlidir.

**Statik dosyaların sunulması**
Resimleriniz, CSS ve JavaScript dosyalarınız da dahil olmak üzere statik dosyaları sunmak için `express.static` ara yazılımını kullanabilirsiniz (bu, Express'in bir parçası *static()* olan tek ara yazılım işlevidir ). Örneğin, ` node` komutunu çağırdığınız seviyeyle aynı seviyede bulunan ' public' adlı bir dizinden resimleri, CSS dosyalarını ve JavaScript dosyalarını sunmak için aşağıdaki satırı kullanabilirsiniz :

```JS
app.use(express.static("public"));
```

Public dizinindeki tüm dosyalar, dosya adları ( temel "public" dizinine göre ) temel URL'ye eklenerek sunulur. Örneğin:

```
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Birden fazla dizine hizmet vermek için birden fazla kez çağrı yapabilirsiniz *static()*. Bir dosya bir ara yazılım fonksiyonu tarafından bulunamazsa, sonraki ara yazılıma iletilir (ara yazılımların çağrılma sırası, bildirim sıranıza bağlıdır).

```JS
app.use(express.static("public"));
app.use(express.static("media"));
```

Dosyaların temel URL'ye eklenmesi yerine, statik URL'leriniz için sanal bir önek de oluşturabilirsiniz.

```JS
app.use("/media", express.static("public"));
```

*public* Artık, belirtilen yol önekini kullanarak dizindeki dosyaları yükleyebilirsiniz */media*.

```
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

**Hata yönetimi**
Hatalar, normalde üç yerine dört argüman alan bir veya daha fazla özel ara katman işlevi tarafından ele alınır (*err*, *req*, *res*, *next*): Örneğin:

```JS
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

*app.use()* Bu fonksiyonlar istenen herhangi bir içeriği döndürebilir, ancak istek işleme sürecindeki son ara yazılım olmaları için diğer tüm yönlendirme çağrılarından sonra çağrılmalıdırlar !

Express, uygulamada karşılaşılabilecek kalan hataları ele alan yerleşik bir hata işleyiciyle birlikte gelir. Bu varsayılan hata işleme ara yazılım fonksiyonu, ara yazılım fonksiyon yığınının sonuna eklenir. Bir hatayı iletirseniz *next()* ve bunu bir hata işleyicisinde ele almazsanız, hata yerleşik hata işleyici tarafından ele alınır; hata, yığın iziyle birlikte istemciye yazılır.

**Not:** Hata izleme kaydı üretim ortamında yer almamaktadır. Üretim modunda çalıştırmak için ortam değişkenini *NODE_ENV* olarak ayarlamanız gerekmektedir *"production"*.

**Veritabanlarını kullanmak**
Express uygulamaları, Node tarafından desteklenen herhangi bir veritabanı mekanizmasını kullanabilir ( Express'in kendisi veritabanı yönetimi için herhangi bir özel ek davranış/gereksinim tanımlamaz). PostgreSQL, MySQL, Redis, SQLite, MongoDB vb. dahil olmak üzere birçok seçenek mevcuttur.

Bunları kullanabilmek için öncelikle npm kullanarak veritabanı sürücüsünü yüklemeniz gerekir. Örneğin, popüler NoSQL MongoDB için sürücüyü yüklemek için şu komutu kullanabilirsiniz:

```BASH
npm install mongodb
```

Veritabanı yerel olarak veya bir bulut sunucusuna kurulabilir. Express kodunuzda sürücüyü içe aktarır, veritabanına bağlanır ve ardından oluşturma, okuma, güncelleme ve silme (CRUD) işlemlerini gerçekleştirirsiniz. Aşağıdaki örnek, MongoDB kullanarak "memeli" kayıtlarını nasıl bulabileceğinizi göstermektedir:

```JS
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("animals");
    const mammals = await db.collection("mammals").find().toArray();
    console.log(mammals);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
```

Bir diğer popüler yaklaşım ise, Nesne İlişkisel Eşleyici ("ORM") aracılığıyla veritabanınıza dolaylı olarak erişmektir. Bu yaklaşımda, verilerinizi "nesneler" veya "modeller" olarak tanımlarsınız ve ORM bunları temel veritabanı formatına eşler. Bu yaklaşımın avantajı, geliştirici olarak veritabanı semantiği yerine JavaScript nesneleri açısından düşünmeye devam edebilmeniz ve gelen verilerin doğrulanması ve kontrol edilmesi için açık bir yerin olmasıdır. Veritabanları hakkında daha sonraki bir makalede daha detaylı konuşacağız.

**Verilerin (görünümlerin) işlenmesi**
Şablon motorları ( Express'te "görünüm motorları" olarak da adlandırılır ) , bir sayfa oluşturulduğunda doldurulacak veriler için yer tutucular kullanarak bir şablonda çıktı belgesinin yapısını belirtmenize olanak tanır . Şablonlar genellikle HTML oluşturmak için kullanılır, ancak diğer belge türlerini de oluşturabilirler.

Express, özellikle Pug (eski adıyla "Jade"), Mustache ve EJS olmak üzere bir dizi şablon motorunu desteklemektedir. Her birinin belirli kullanım durumlarına yönelik kendi güçlü yönleri vardır (göreceli karşılaştırmalar internet aramasıyla kolayca bulunabilir). Express uygulama oluşturucu varsayılan olarak Jade'i kullanır, ancak diğer birkaçını da destekler.

Uygulama ayarları kodunuzda, aşağıdaki gibi 'görünümler' ve 'görünüm motoru' ayarlarını kullanarak kullanılacak şablon motorunu ve Express'in şablonları arayacağı konumu ayarlarsınız (ayrıca şablon kitaplığınızı içeren paketi de yüklemeniz gerekecektir!).

```JS
const express = require("express");
const path = require("path");

const app = express();

// Set directory to contain the templates ('views')
app.set("views", path.join(__dirname, "views"));

// Set view engine to use, in this case 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

Şablonun görünümü, kullandığınız oyun motoruna bağlı olacaktır. "index.<template_extension>" adında, "title" ve "message" adlı veri değişkenleri için yer tutucular içeren bir şablon dosyanız olduğunu varsayarsak, *Response.render()* HTML yanıtını oluşturmak ve göndermek için bir rota işleyici fonksiyonunu çağırırsınız:

```JS
app.get("/", (req, res) => {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

**Dosya yapısı**
Express, yapı veya kullandığınız bileşenler açısından herhangi bir varsayımda bulunmaz. Rotalar, görünümler, statik dosyalar ve diğer uygulamaya özgü mantık, herhangi bir dizin yapısına sahip herhangi bir sayıda dosyada yer alabilir. Tüm Express uygulamasını tek bir dosyada bulundurmak tamamen mümkün olsa da, genellikle uygulamanızı işlevine (örneğin, hesap yönetimi, bloglar, tartışma forumları) ve mimari problem alanına (örneğin, MVC mimarisi kullanıyorsanız model, görünüm veya denetleyici ) göre dosyalara bölmek mantıklıdır.

Daha sonraki bir konuda , web uygulamaları oluşturmak için kolayca genişletebileceğimiz modüler bir uygulama iskeleti oluşturan Express Uygulama Oluşturucu'yu kullanacağız .


## Node (Express) geliştirme ortamının kurulumu
Express'in ne işe yaradığını artık bildiğinize göre, Windows, Linux (Ubuntu) ve macOS'ta bir Node/Express geliştirme ortamını nasıl kurup test edeceğinizi göstereceğiz. Hangi yaygın işletim sistemini kullanıyor olursanız olun, bu makale Express uygulamaları geliştirmeye başlamanız için gerekenleri size sağlayacaktır.

**Express geliştirme ortamına genel bakış**
Node ve Express, web uygulamaları geliştirmeye başlamak için bilgisayarınızı kurmayı çok kolaylaştırır. Bu bölüm, gerekli araçlara genel bir bakış sunar, Ubuntu, macOS ve Windows'ta Node (ve Express) kurulumu için en basit yöntemlerden bazılarını açıklar ve kurulumunuzu nasıl test edebileceğinizi gösterir.

**Express geliştirme ortamı nedir?**
Express geliştirme ortamı , yerel bilgisayarınıza Node.js , npm paket yöneticisi ve (isteğe bağlı olarak) Express Uygulama Oluşturucu'nun kurulumunu içerir .

Node ve npm paket yöneticisi, hazırlanmış ikili paketlerden, yükleyicilerden, işletim sistemi paket yöneticilerinden veya kaynak koddan birlikte yüklenir (aşağıdaki bölümlerde gösterildiği gibi). Ardından Express, bireysel Express web uygulamalarınızın bir bağımlılığı olarak npm tarafından yüklenir (şablon motorları, veritabanı sürücüleri, kimlik doğrulama ara yazılımları, statik dosyaları sunmak için ara yazılımlar vb. gibi diğer kütüphanelerle birlikte).

npm ayrıca, MVC modelini izleyen iskelet Express web uygulamaları oluşturmak için kullanışlı bir araç olan Express Uygulama Oluşturucu'yu (küresel olarak) yüklemek için de kullanılabilir . Uygulama oluşturucu isteğe bağlıdır çünkü Express kullanan uygulamalar oluşturmak veya aynı mimari düzene veya bağımlılıklara sahip Express uygulamaları oluşturmak için bu aracı kullanmanız gerekmez . Ancak, başlamayı çok daha kolaylaştırdığı ve modüler bir uygulama yapısını desteklediği için onu kullanacağız.

**Not:** Diğer bazı web çerçevelerinin aksine, geliştirme ortamı ayrı bir geliştirme web sunucusu içermez. Node / Express'te bir web uygulaması kendi web sunucusunu oluşturur ve çalıştırır!

**Hangi işletim sistemleri destekleniyor?**
Node, Windows, macOS, birçok Linux dağıtımı, Docker vb. üzerinde çalıştırılabilir. Tam liste Node.js **[İndirmeler](https://nodejs.org/en/download)** sayfasında mevcuttur. Hemen hemen her kişisel bilgisayar, geliştirme sırasında Node'u çalıştırmak için gerekli performansa sahip olmalıdır. Express , Node ortamında çalışır ve bu nedenle Node çalıştıran herhangi bir platformda çalışabilir .

Bu yazımızda Windows, macOS ve Ubuntu Linux için kurulum talimatlarını sunuyoruz.

**Hangi Node/Express sürümünü kullanmalısınız?**
Node'un birçok sürümü bulunmaktadır ; daha yeni sürümler hata düzeltmeleri, ECMAScript (JavaScript) standartlarının daha güncel sürümlerine destek ve Node API'lerinde iyileştirmeler içermektedir.

Genellikle en son LTS (uzun vadeli desteklenen) sürümünü kullanmalısınız, çünkü bu sürüm "mevcut" sürüme göre daha kararlı olurken nispeten yeni özelliklere de sahip olacaktır (ve aktif olarak bakımı yapılmaktadır). LTS sürümünde bulunmayan bir özelliğe ihtiyacınız varsa, mevcut sürümü kullanmalısınız .

Express için Node'un en son LTS sürümünü kullanmalısınız.

**Veritabanları ve diğer bağımlılıklar ne olacak peki?**
Veritabanı sürücüleri, şablon motorları, kimlik doğrulama motorları vb. gibi diğer bağımlılıklar uygulamanın bir parçasıdır ve npm paket yöneticisi kullanılarak uygulama ortamına aktarılır. Bunları daha sonraki uygulamaya özel makalelerde ele alacağız.

**Node Kurulumu**
Express'i kullanabilmek için işletim sisteminize Node.js ve Node Paket Yöneticisi (npm) kurmanız gerekecektir . Bunu kolaylaştırmak için öncelikle bir Node sürüm yöneticisi kuracağız ve ardından bunu kullanarak Node ve npm'nin en son Uzun Süreli Desteklenen (LTS) sürümlerini kuracağız.

**Windows**
Windows için birçok Node.js sürüm yöneticisi bulunmaktadır. Burada, Node.js geliştiricileri arasında oldukça saygın olan **[nvm-windows'u kullanıyoruz](https://github.com/nvm-windows/nvm)**.

**[nvm-windows/releases](https://github.com/nvm-windows/nvm/releases)** sayfasından dilediğiniz yükleyiciyi kullanarak en son sürümü yükleyin . *nvm-windows* Yükleme tamamlandıktan sonra, bir komut istemi (veya PowerShell) açın ve nodejs ve npm'nin en son LTS sürümünü indirmek için aşağıdaki komutu girin:

```BASH
nvm install lts
```

Bu yazının yazıldığı sırada Node.js'nin LTS sürümü 22.17.0'dır. Aşağıdaki komutla bunu geçerli sürüm olarak ayarlayabilirsiniz:

```BASH
nvm use 22.17.0
```

**Not:** "Erişim Engellendi" uyarısı alırsanız, bu komutu yönetici yetkilerine sahip bir komut isteminde çalıştırmanız gerekecektir.

Bu komutu kullanarak, *nvm --help* mevcut tüm Node sürümlerini ve indirilen tüm NVM sürümlerini listelemek gibi diğer komut satırı seçeneklerini öğrenebilirsiniz.

**Ubuntu ve macOS**
Ubuntu ve macOS için birçok Node.js sürüm yöneticisi bulunmaktadır. nvm bunlardan en popüler olanlarından biridir ve temel aldığı orijinal sürümdür *nvm-windows*. 

Kurulum tamamlandıktan sonra *nvm*, bir terminal açın ve nodejs ile npm'nin en son LTS sürümlerini indirmek için aşağıdaki komutu girin:

```BASH
nvm install --lts
```

Bu yazının yazıldığı sırada, Node.js'nin LTS sürümü 22.17.0'dır. Komut, indirilen sürüm kümesini ve mevcut sürümü gösterir. Aşağıdaki komutla (aynı şekilde ) belirli bir sürümü mevcut sürüm *nvm list* olarak ayarlayabilirsiniz.*nvm-windows*

```BASH
nvm use 22.17.0
```

Diğer komut satırı seçeneklerini öğrenmek için bu komutu kullanın *nvm --help*. Bunlar genellikle `.` komutuyla sunulanlara benzer veya aynıdır *nvm-windows*.

**Node.js ve npm kurulumunuzu test etme**
Belirli bir Node.js sürümünü kullanmayı ayarladıktan sonra *nvm*, kurulumu test edebilirsiniz. Bunu yapmanın iyi bir yolu, terminalinizde/komut isteminizde "version" komutunu kullanmak ve beklenen sürüm dizesinin döndürüldüğünü kontrol etmektir:

```BASH
> node -v
v22.17.0
```

Node.js paket yöneticisi npm'nin de kurulmuş olması gerekir ve aynı şekilde test edilebilir:

```BASH
> npm -v
10.9.2
```

Biraz daha heyecan verici bir test olarak, tarayıcınızda doğru URL'yi ziyaret ettiğinizde tarayıcıya "Merhaba Dünya" yazdıran çok basit bir "saf Node." sunucu oluşturalım:

1\.Aşağıdaki metni hellonode.js adlı bir dosyaya kopyalayın . Bu, tamamen Node.js özelliklerini kullanır (Express'ten hiçbir şey içermez):

```JS
// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

// Listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Kod, "http" modülünü içe aktarır ve bunu kullanarak *createServer()3000* numaralı portta HTTP isteklerini dinleyen bir sunucu ( ) oluşturur. Ardından komut dosyası, sunucuyu test etmek için hangi tarayıcı URL'sini kullanabileceğiniz hakkında konsola bir mesaj yazdırır. Fonksiyon, *createServer()* bir HTTP isteği alındığında çağrılacak bir geri çağırma fonksiyonu argümanı alır; bu, 200 ("OK") HTTP durum kodu ve düz metin "Merhaba Dünya" içeren bir yanıt döndürür.

**Not:** Bu kodun tam olarak ne yaptığını henüz anlamadıysanız endişelenmeyin! Express kullanmaya başladığımızda kodumuzu daha ayrıntılı olarak açıklayacağız!

2\.*hellonode.js* Komut isteminde dosyanızla aynı dizine giderek ve nodekomut dosyasının adıyla birlikte şu şekilde çağırarak sunucuyu başlatın :

```BASH
node hellonode.js
```

Sunucu başlatıldıktan sonra, sunucunun çalıştığı IP adresini gösteren konsol çıktısını göreceksiniz:

```
Server running at http://127.0.0.1:3000/
```

3\.Belirtilen URL'ye gidin *http://127.0.0.1:3000*. Her şey yolunda giderse, tarayıcıda "Merhaba Dünya" yazısı görünmelidir.

**npm kullanarak**
Node'un kendisinden sonra , npm, Node uygulamalarıyla çalışmak için en önemli araçtır . *npm* Uygulamanın geliştirme, test ve/veya üretim için ihtiyaç duyduğu tüm paketleri (JavaScript kütüphaneleri) indirmek için kullanılır ve ayrıca geliştirme sürecinde kullanılan testleri ve araçları çalıştırmak için de kullanılabilir.

**Not:** Node açısından bakıldığında, Express , npm kullanarak yüklemeniz ve ardından kendi kodunuzda çağırmanız gereken sıradan bir pakettir.

İhtiyaç duyulan her paketi ayrı ayrı indirmek için npm'i manuel olarak kullanabilirsiniz. Genellikle bunun yerine bağımlılıkları package.json adlı düz metin tanımlama dosyası kullanarak yönetiriz . Bu dosya, paketin adı, sürümü, açıklaması, çalıştırılacak ilk dosya, üretim bağımlılıkları, geliştirme bağımlılıkları, çalışabileceği Node sürümleri vb. dahil olmak üzere belirli bir JavaScript "paketi" için tüm bağımlılıkları listeler. package.json dosyası, npm'in uygulamanızı indirmek ve çalıştırmak için ihtiyaç duyduğu her şeyi içermelidir (yeniden kullanılabilir bir kütüphane yazıyorsanız, bu tanımı kullanarak paketinizi npm deposuna yükleyebilir ve diğer kullanıcılar için kullanılabilir hale getirebilirsiniz).

**Bağımlılıklar ekleniyor**
Aşağıdaki adımlar, npm kullanarak bir paketi nasıl indirebileceğinizi, proje bağımlılıklarına nasıl kaydedebileceğinizi ve ardından bir Node uygulamasında nasıl kullanabileceğinizi göstermektedir.

**Not:** Burada Express paketini indirme ve yükleme talimatlarını gösteriyoruz . Daha sonra, bu paketin ve diğerlerinin Express Uygulama Oluşturucu kullanılarak bizim için nasıl önceden tanımlandığını göstereceğiz . Bu bölüm, npm'nin nasıl çalıştığını ve uygulama oluşturucu tarafından nelerin oluşturulduğunu anlamak için yararlı olduğu için sağlanmıştır.

1\.Öncelikle yeni uygulamanız için bir dizin oluşturun ve bu dizine girin:

```BASH
mkdir myapp
cd myapp
```

2\.Uygulamanız için bir package.json *init* dosyası oluşturmak üzere `npm` komutunu kullanın . Bu komut, uygulamanızın adı ve sürümü ile ilk giriş noktası dosyasının adı (varsayılan olarak index.js ) dahil olmak üzere bir dizi bilgi isteyecektir. Şimdilik varsayılan değerleri kabul edin:

```BASH
npm init
```

package.json dosyasını ( ) görüntülerseniz *cat package.json*, lisans da dahil olmak üzere kabul ettiğiniz varsayılan ayarları göreceksiniz.

```JSON
{
  "name": "myapp",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
```

3\.Şimdi Express'i ilgili dizine kurun ve package.json *myapp* dosyanızdaki bağımlılıklar listesine kaydedin :

```BASH
npm install express
```

package.json dosyanızın bağımlılıklar bölümü artık dosyanın sonunda yer alacak ve Express'i içerecektir .

```JSON
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^5.1.0"
  }
}
```

4\.Express kütüphanesini kullanmak için, uygulamanıza dahil etmek üzere index.js *require()* dosyanızda ilgili fonksiyonu çağırmanız gerekir . Şimdi bu dosyayı "myapp" uygulama dizininin kök dizininde oluşturun ve içine aşağıdaki içeriği ekleyin:

```JS
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
```

Bu kod, minimal bir "Merhaba Dünya" Express web uygulamasını göstermektedir. Bu kod, "express" modülünü içe aktarır ve 3000 numaralı portta HTTP isteklerini dinleyen ve sunucuyu test etmek için hangi tarayıcı URL'sini kullanabileceğinizi açıklayan bir mesajı konsola yazdıran *require()* bir sunucu ( ) oluşturmak için kullanır. Fonksiyon yalnızca belirtilen URL yoluna ('/') sahip HTTP isteklerine yanıt verir ; bu durumda , "Merhaba Dünya! " mesajımızı göndermek için bir fonksiyon çağırır .*app app.get()GET*

**Not**: Ters tırnak işaretleri, *`Example app listening on port ${port}!`değerini $port* dizeye eklememizi sağlar.

5\.Komut isteminde aşağıdaki komut dosyasını kullanarak `node` komutunu çalıştırıp sunucuyu başlatabilirsiniz:

```BASH
node index.js
```

Konsol çıktısında aşağıdaki ifadeyi göreceksiniz:

```
Example app listening on port 3000
```

6\.Belirtilen URL'ye gidin *http://localhost:3000/*. Her şey yolunda giderse, tarayıcıda "Merhaba Dünya!" yazısı görünmelidir.

**Gelişim bağımlılıkları**
Eğer bir bağımlılık yalnızca geliştirme aşamasında kullanılıyorsa, onu "geliştirme bağımlılığı" olarak kaydetmelisiniz (böylece paket kullanıcılarınızın üretim ortamında onu yüklemesi gerekmez). Örneğin, popüler JavaScript kod denetleme aracı ESLint'i kullanmak için npm'i aşağıdaki gibi çağırabilirsiniz:

```BASH
npm install eslint --save-dev
```

Aşağıdaki girdi, uygulamanızın package.json dosyasına eklenecektir :

```JSON
{
  "devDependencies": {
    "eslint": "^9.30.1"
  }
}
```

**Not:** " Linter'lar ", yazılımlar üzerinde statik analiz yaparak belirli kodlama en iyi uygulamalarına uyulup uyulmadığını tespit eden ve raporlayan araçlardır.

**Görevleri çalıştırma**
Bağımlılıkları tanımlamanın ve indirmenin yanı sıra, package.json dosyalarınızda adlandırılmış komut dosyaları da tanımlayabilir ve npm'i run-script komutuyla bunları çalıştırmaya çağırabilirsiniz. Bu yaklaşım, testlerin ve geliştirme veya derleme araç zincirinin bazı bölümlerinin (örneğin, JavaScript'i küçültmek, görüntüleri küçültmek, kodunuzu LINT/analiz etmek vb.) çalıştırılmasını otomatikleştirmek için yaygın olarak kullanılır.

Not: Gulp ve Grunt gibi görev çalıştırıcıları, testleri ve diğer harici araçları çalıştırmak için de kullanılabilir.

Örneğin, önceki bölümde belirttiğimiz eslint geliştirme bağımlılığını çalıştırmak için bir komut dosyası tanımlamak üzere , uygulamamızın kaynak kodunun bir klasörde olduğunu varsayarak, package.json dosyamıza aşağıdaki komut bloğunu ekleyebiliriz */src/js:*

```JSON
{
  "scripts": {
    // …
    "lint": "eslint src/js"
    // …
  }
}
```

Biraz daha açıklamak gerekirse, bu komut, uygulama dizinimizin içindeki klasörde bulunan JavaScript dosyaları üzerinde *eslint src/js* çalıştırabileceğimiz bir komuttur . Yukarıdakini uygulamamızın package.json dosyasına eklemek, bu komut için bir kısayol sağlar .*eslint src/js lint

Ardından , npm kullanarak eslint'i şu şekilde çalıştırabiliriz :

```BASH
npm run-script lint
# OR (using the alias)
npm run lint
```

Bu örnek orijinal komuttan daha kısa görünmeyebilir, ancak npm komut dosyalarınızın içine çok daha büyük komutlar, hatta birden fazla komuttan oluşan zincirler bile ekleyebilirsiniz. Tüm testlerinizi aynı anda çalıştıran tek bir npm komut dosyası belirleyebilirsiniz.

**Express Uygulama Oluşturucu'nun Kurulumu**
Express Uygulama Oluşturucu aracı, bir Express uygulaması "iskeleti" oluşturur. Oluşturucuyu aşağıdaki gibi npm kullanarak yükleyin:

```BASH
npm install express-generator -g
```

**Not**:*sudo* Ubuntu veya macOS'ta bu satırın başına bir önek eklemeniz gerekebilir . Bu *-g* bayrak, aracı global olarak kurar, böylece onu her yerden çağırabilirsiniz.

Varsayılan ayarlarla "helloworld" adında bir Express uygulaması oluşturmak için , uygulamayı oluşturmak istediğiniz yere gidin ve aşağıdaki gibi uygulamayı çalıştırın:

```BASH
express helloworld
```

Kullanılacak şablon kütüphanesini ve diğer bazı ayarları da belirtebilirsiniz. helpTüm seçenekleri görmek için şu komutu kullanın:

```BASH
express --help
```

Oluşturucu, mevcut konumunuzun bir alt klasöründe yeni Express uygulamasını oluşturacak ve konsolda derleme ilerlemesini gösterecektir. Tamamlandığında, araç Node bağımlılıklarını yüklemek ve uygulamayı başlatmak için girmeniz gereken komutları gösterecektir.

Yeni uygulamanın kök dizininde package.json adlı bir dosya bulunacaktır . Bu dosyayı açarak Express ve Jade şablon kütüphanesi de dahil olmak üzere hangi bağımlılıkların yüklü olduğunu görebilirsiniz:

```JSON
{
  "name": "helloworld",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "morgan": "~1.9.1"
  }
}
```

Aşağıda gösterildiği gibi npm kullanarak helloworld uygulaması için gerekli tüm bağımlılıkları yükleyin:

```BASH
cd helloworld
npm install
```

Ardından uygulamayı aşağıdaki gibi çalıştırın (komutlar Windows ve Linux/macOS için biraz farklıdır):

```BASH
# Run helloworld on Windows with Command Prompt
SET DEBUG=helloworld:* & npm start

# Run helloworld on Windows with PowerShell
SET DEBUG=helloworld:* | npm start

# Run helloworld on Linux/macOS
DEBUG=helloworld:* npm start
```

DEBUG komutu, aşağıdaki gibi bir çıktı üreten yararlı günlük kayıtları oluşturur:

```BASH
>SET DEBUG=helloworld:* & npm start

> helloworld@0.0.0 start D:\GitHub\express-tests\helloworld
> node ./bin/www

  helloworld:server Listening on port 3000 +0ms
  ```

Tarayıcınızı açın ve *http://localhost:3000/varsayılan* Express karşılama sayfasını görmek için ilgili adrese gidin.

![Test](./assets/69-print.png)

## Hızlı Eğitim: Yerel Kütüphane web sitesi
Bu makale, MDN Express eğitimine genel bir bakış sunmakta ve sonraki birkaç sayfada kullanacağımız "yerel kütüphane" örnek web sitesini tanıtmaktadır. Eğitimin neleri kapsadığını, nasıl başlayacağınızı, nasıl yardım isteyeceğinizi ve ilk sunucu tarafı JavaScript uygulamanızı oluşturmak ve dağıtmak için ihtiyacınız olan her şeyi öğreneceksiniz.

**Genel Bakış**
MDN'nin "Yerel Kütüphane" Express (Node) eğitimine hoş geldiniz. Bu eğitimde, yerel bir kütüphanenin kataloğunu yönetmek için kullanılabilecek bir web sitesi geliştireceğiz.

Bu eğitim makaleleri serisinde şunları öğreneceksiniz:

- Express Uygulama Oluşturucu aracını kullanarak bir web sitesi ve uygulama taslağı oluşturun.
- Node web sunucusunu başlatın ve durdurun.
- Uygulamanızın verilerini depolamak için bir veritabanı kullanın.
- Farklı bilgiler istemek için rotalar ve verileri tarayıcıda görüntülenecek HTML olarak işlemek için şablonlar ("görünümler") oluşturun.
- Formlarla çalışmak.
- Uygulamanızı üretim ortamına dağıtın.

Bu konuların bazılarını zaten öğrendiniz ve diğerlerine kısaca değindiniz. Bu eğitim serisinin sonunda, kendi başınıza basit Express uygulamaları geliştirebilecek kadar bilgiye sahip olmalısınız.

**LocalLibrary web sitesi**
LocalLibrary, bu eğitim serisi boyunca oluşturacağımız ve geliştireceğimiz web sitesinin adıdır. Tahmin edebileceğiniz gibi, web sitesinin amacı, kullanıcıların mevcut kitaplara göz atabileceği ve hesaplarını yönetebileceği küçük bir yerel kütüphane için çevrimiçi bir katalog sağlamaktır.

Bu örnek, ihtiyaç duyduğumuz kadar ayrıntıyı gösterebilmek ve neredeyse tüm Express özelliklerini sergilemek için kullanılabilecek şekilde özenle seçilmiştir. Daha da önemlisi, herhangi bir web sitesinde ihtiyaç duyacağınız işlevsellik konusunda size yol gösterici bir rehber sunmamızı sağlar:

- İlk birkaç öğretici makalede, kütüphane üyelerinin hangi kitapların mevcut olduğunu öğrenmek için kullanabileceği basit , yalnızca göz atma özelliğine sahip bir kütüphane tanımlayacağız . Bu, neredeyse her web sitesinde ortak olan işlemleri keşfetmemizi sağlar: veritabanından içerik okuma ve görüntüleme.
- İlerledikçe, kütüphane örneği doğal olarak daha gelişmiş web sitesi özelliklerini göstermek üzere genişler. Örneğin, yeni kitapların oluşturulmasına izin vermek için kütüphaneyi genişletebilir ve bunu formların nasıl kullanılacağını ve kullanıcı kimlik doğrulamasının nasıl destekleneceğini göstermek için kullanabiliriz.

Bu oldukça genişletilebilir bir örnek olsa da, "Yerel Kütüphane" olarak adlandırılmasının bir nedeni var: Express'i hızlı bir şekilde kullanmaya başlamanıza yardımcı olacak minimum bilgiyi göstermeyi umuyoruz. Sonuç olarak, kitaplar, kitap kopyaları, yazarlar ve diğer önemli bilgiler hakkında bilgi depolayacağız. Ancak, bir kütüphanenin ödünç verebileceği diğer öğeler hakkında bilgi depolamayacağız veya birden fazla kütüphane sitesini veya diğer "büyük kütüphane" özelliklerini desteklemek için gereken altyapıyı sağlamayacağız.

**Çıkmazdayım, kaynağı nereden bulabilirim?**
Bu eğitim boyunca, her aşamada kopyalayıp yapıştırabileceğiniz uygun kod parçacıklarını sağlayacağız ve (biraz rehberlik eşliğinde) kendinizin geliştireceğini umduğumuz başka kodlar da olacak.

Kod parçacıklarının hepsini kopyalayıp yapıştırmak yerine, onları kendiniz yazmayı deneyin. Bu, uzun vadede size fayda sağlayacaktır çünkü bir dahaki sefere benzer bir şey yazarken koda daha aşina olacaksınız.

Eğer takılırsanız, web sitesinin tamamen geliştirilmiş sürümünü GitHub'da burada bulabilirsiniz .

**Not**: Bu dokümantasyonun test edildiği Node, Express ve diğer modüllerin belirli sürümleri proje **[package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/main/package.json)** dosyasında listelenmiştir .

## Hızlı Eğitim Rehberi Bölüm 2: İskelet bir web sitesi oluşturma
Express Eğitimimiz serisinin bu ikinci makalesinde, daha sonra siteye özgü rotalar, şablonlar/görünümler ve veritabanı çağrılarıyla doldurabileceğiniz bir "iskelet" web sitesi projesi nasıl oluşturabileceğinizi gösteriyoruz.

**Genel Bakış**
Bu makale, Express Uygulama Oluşturucu aracını kullanarak nasıl bir "iskelet" web sitesi oluşturabileceğinizi ve daha sonra bu iskeleti siteye özgü rotalar, görünümler/şablonlar ve veritabanı çağrılarıyla nasıl doldurabileceğinizi göstermektedir. Bu örnekte, aracı Yerel Kütüphane web sitemizin çerçevesini oluşturmak için kullanacağız ve daha sonra sitenin ihtiyaç duyduğu diğer tüm kodları ekleyeceğiz. İşlem son derece basittir; yalnızca komut satırında yeni bir proje adıyla oluşturucuyu çağırmanız ve isteğe bağlı olarak sitenin şablon motorunu ve CSS oluşturucusunu da belirtmeniz yeterlidir.

Aşağıdaki bölümlerde uygulama oluşturucuyu nasıl çağıracağınızı ve farklı görünüm/CSS seçenekleri hakkında kısa bir açıklama bulacaksınız. Ayrıca iskelet web sitesinin nasıl yapılandırıldığını da açıklayacağız. Son olarak, web sitesinin çalışıp çalışmadığını doğrulamak için nasıl çalıştırabileceğinizi göstereceğiz.

**Uygulama oluşturucuyu kullanma**
Node geliştirme ortamınızı kurarken jeneratörü zaten yüklemiş olmalısınız . Kısaca hatırlatmak gerekirse, jeneratör aracını site genelinde npm paket yöneticisini kullanarak şu şekilde yüklersiniz:

```BASH
npm install express-generator -g
```

*--help* Jeneratörün, komut satırında (veya ) komutunu kullanarak görüntüleyebileceğiniz bir dizi seçeneği vardır *-h*:

```BASH
> express --help

    Usage: express [options] [dir]

  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain CSS)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information
```

Express komutunu kullanarak, geçerli dizin içinde Jade görünüm motorunu ve düz CSS'i kullanarak bir proje oluşturabilirsiniz (eğer bir dizin adı belirtirseniz, proje o adla bir alt klasörde oluşturulacaktır).

```BASH
express
```

*--view* Ayrıca, ve/veya kullanarak bir görünüm (şablon) motoru ve/veya bir CSS oluşturma motoru seçebilirsiniz *--css*.

**Not**: Şablon motoru seçmek için diğer seçenekler (örneğin, *--hogan, --ejs, --hbsvb*.) kullanımdan kaldırılmıştır. Bunun yerine --view(veya -v) kullanın.

**Hangi görüntüleme motorunu kullanmalıyım?**
Express Uygulama Oluşturucu , *EJS* , *Hbs*, *Pug (Jade)*, *Twig* ve *Vash* dahil olmak üzere bir dizi popüler görünüm/şablon motorunu yapılandırmanıza olanak tanır; ancak bir görünüm seçeneği belirtmezseniz varsayılan olarak Jade'i seçer. Express'in kendisi de kutudan çıktığı gibi çok sayıda başka şablon dilini destekleyebilir .


Genel olarak, ihtiyacınız olan tüm işlevleri sunan ve daha hızlı verimli olmanızı sağlayan bir şablon motoru seçmelisiniz; başka bir deyişle, diğer herhangi bir bileşeni seçtiğiniz gibi! Şablon motorlarını karşılaştırırken dikkate alınması gereken bazı noktalar şunlardır:

- Verimliliğe ulaşma süresi — Eğer ekibiniz zaten bir şablonlama diliyle deneyime sahipse, o dili kullanarak daha hızlı verimliliğe ulaşmaları muhtemeldir. Değilse, aday şablonlama motorlarının göreceli öğrenme eğrisini göz önünde bulundurmalısınız.
- Popülerlik ve aktivite — Arama motorunun popülerliğini ve aktif bir topluluğa sahip olup olmadığını inceleyin. Web sitesinin ömrü boyunca sorunlar ortaya çıktığında destek alabilmek önemlidir.
- Stil — Bazı şablon motorları, "sıradan" HTML içindeki eklenmiş içeriği belirtmek için özel işaretleme kullanırken, diğerleri HTML'yi farklı bir sözdizimi kullanarak oluşturur (örneğin, girinti ve blok adları kullanarak).
- Performans/işleme süresi.
- Özellikler — incelediğiniz motorların aşağıdaki özelliklere sahip olup olmadığını değerlendirmelisiniz:
- Düzen kalıtımı: Temel bir şablon tanımlamanıza ve ardından belirli bir sayfa için farklı olmasını istediğiniz kısımları "miras almanıza" olanak tanır. Bu, genellikle bir dizi gerekli bileşeni dahil ederek şablon oluşturmaktan veya her seferinde sıfırdan bir şablon oluşturmaktan daha iyi bir yaklaşımdır.
- "Dahil Et" desteği: Diğer şablonları dahil ederek şablonlar oluşturmanıza olanak tanır.
- Kısa ve öz değişken ve döngü kontrol sözdizimi.
- Şablon düzeyinde değişken değerlerini filtreleme özelliği; örneğin, değişkenleri büyük harfe dönüştürme veya tarih değerini biçimlendirme.
 -HTML dışında JSON veya XML gibi farklı çıktı formatları oluşturabilme özelliği.
- Asenkron işlemler ve akış desteği.
- İstemci tarafı özellikleri. Eğer istemci tarafında bir şablon motoru kullanılabiliyorsa, bu, tüm veya büyük ölçüdeki render işleminin istemci tarafında yapılmasını mümkün kılar.

**Not:** İnternette farklı seçenekleri karşılaştırmanıza yardımcı olacak birçok kaynak bulunmaktadır!

Bu proje için, en popüler Express/JavaScript şablonlama dillerinden biri olan ve oluşturucu tarafından doğrudan desteklenen *Pug* şablonlama motorunu (önceden "Jade" olarak adlandırılıyordu) kullanacağız .

**Hangi CSS stil sayfası motorunu kullanmalıyım?**
Express Uygulama Oluşturucu, en yaygın CSS stil sayfası motorlarını ( *LESS , SASS , Stylus* ) kullanacak şekilde yapılandırılmış bir proje oluşturmanıza olanak tanır .

**Not:** CSS'nin bazı görevleri zorlaştıran sınırlamaları vardır. CSS stil sayfası motorları, CSS'nizi tanımlamak için daha güçlü bir sözdizimi kullanmanıza ve ardından bu tanımı tarayıcıların kullanabileceği düz CSS'ye derlemenize olanak tanır.

Şablon motorlarında olduğu gibi, ekibinizin en verimli olmasını sağlayacak stil sayfası motorunu kullanmalısınız. Bu proje için, CSS gereksinimlerimiz başka bir şey kullanmayı haklı çıkaracak kadar karmaşık olmadığı için, varsayılan (vanilla CSS) CSS'i kullanacağız.

**Hangi veritabanını kullanmalıyım?**
Oluşturulan kod herhangi bir veritabanı kullanmaz/içermez. Express uygulamaları, Node tarafından desteklenen herhangi bir *veritabanı mekanizmasını* kullanabilir ( Express'in kendisi veritabanı yönetimi için herhangi bir özel ek davranış/gereksinim tanımlamaz).

Veritabanıyla entegrasyonun nasıl yapılacağını daha sonraki bir yazıda ele alacağız.

**Projenin oluşturulması**
Oluşturacağımız örnek Yerel Kütüphane uygulaması için, Pug şablon kütüphanesini kullanarak ve CSS motoru kullanmadan express-locallibrary-tutorial adında bir proje oluşturacağız.

Öncelikle, projeyi oluşturmak istediğiniz yere gidin ve ardından aşağıdaki gibi komut isteminde Express Uygulama Oluşturucu'yu çalıştırın:

```BASH
express express-locallibrary-tutorial --view=pug
```

Bu program, projenin dosyalarını oluşturacak (ve listeleyecektir).

```
   create : express-locallibrary-tutorial\
   create : express-locallibrary-tutorial\public\
   create : express-locallibrary-tutorial\public\javascripts\
   create : express-locallibrary-tutorial\public\images\
   create : express-locallibrary-tutorial\public\stylesheets\
   create : express-locallibrary-tutorial\public\stylesheets\style.css
   create : express-locallibrary-tutorial\routes\
   create : express-locallibrary-tutorial\routes\index.js
   create : express-locallibrary-tutorial\routes\users.js
   create : express-locallibrary-tutorial\views\
   create : express-locallibrary-tutorial\views\error.pug
   create : express-locallibrary-tutorial\views\index.pug
   create : express-locallibrary-tutorial\views\layout.pug
   create : express-locallibrary-tutorial\app.js
   create : express-locallibrary-tutorial\package.json
   create : express-locallibrary-tutorial\bin\
   create : express-locallibrary-tutorial\bin\www

   change directory:
     > cd express-locallibrary-tutorial

   install dependencies:
     > npm install

   run the app (Bash (Linux or macOS))
     > DEBUG=express-locallibrary-tutorial:* npm start

   run the app (PowerShell (Windows))
     > $env:DEBUG = "express-locallibrary-tutorial:*"; npm start

   run the app (Command Prompt (Windows)):
     > SET DEBUG=express-locallibrary-tutorial:* & npm start
```

Oluşturucu, çıktının sonunda ( package.json dosyasında listelenen) bağımlılıkların nasıl kurulacağına ve uygulamanın farklı işletim sistemlerinde nasıl çalıştırılacağına dair talimatlar sunar.

**Not**: Oluşturucu tarafından oluşturulan dosyalar tüm değişkenleri `.` olarak tanımlar var. Devam etmeden önce oluşturulan tüm dosyaları açın ve varbildirimleri `.` olarak değiştirin const(eğitimin geri kalanı bunu yaptığınızı varsaymaktadır).

**İskelet web sitesini çalıştırmak**
Şu an itibariyle, tamamlanmış bir proje iskeletine sahibiz. Web sitesi henüz pek bir şey yapmıyor , ancak çalıştığını göstermek için çalıştırmaya değer.

1\.Öncelikle, bağımlılıkları yükleyin (bu installkomut, projenin package.json dosyasında listelenen tüm bağımlılık paketlerini indirecektir).

```BASH
cd express-locallibrary-tutorial
npm install
```

2\.Ardından uygulamayı çalıştırın.

- Windows CMD komut isteminde şu komutu kullanın:

```BATCH
SET DEBUG=express-locallibrary-tutorial:* & npm start
```

- Windows PowerShell'de şu komutu kullanın:

```POWERSHELL
$env:DEBUG = "express-locallibrary-tutorial:*"; npm start
```

**Not:** Bu eğitimde PowerShell komutları ele alınmamıştır (Verilen "Windows" komutları, Windows CMD komut istemini kullandığınızı varsaymaktadır.)

- macOS veya Linux'ta şu komutu kullanın:

```BASH
DEBUG=express-locallibrary-tutorial:* npm start
```

3\.Ardından *http://localhost:3000/*uygulamaya erişmek için tarayıcınızda açın.

Tarayıcınızda şöyle bir sayfa görmelisiniz:

![Test](./assets/70-print.png)

Tebrikler! Artık 3000 numaralı port üzerinden erişilebilen çalışan bir Express uygulamanız var.

**Dosya değişikliklerinde sunucu yeniden başlatmayı etkinleştirin.**
Express web sitenizde yaptığınız değişiklikler, sunucuyu yeniden başlatana kadar şu anda görünmez. Her değişiklik yaptığınızda sunucuyu durdurup yeniden başlatmak oldukça can sıkıcı hale geliyor, bu nedenle gerektiğinde sunucuyu yeniden başlatmayı otomatikleştirmek için zaman ayırmaya değer.

Bu amaç için kullanışlı bir araç *nodemon'dur* . Bu genellikle global olarak yüklenir (çünkü bir "araçtır"), ancak burada onu yerel olarak bir geliştirici bağımlılığı olarak kurup kullanacağız , böylece projeyle çalışan tüm geliştiriciler uygulamayı yüklediklerinde otomatik olarak ona sahip olacaklar. İskelet projesinin kök dizininde aşağıdaki komutu kullanın:

```BASH
npm install --save-dev nodemon
```

Eğer yine de nodemon'u yalnızca projenizin package.json dosyasına değil, makinenize global olarak kurmayı tercih ederseniz :

```BASH
npm install -g nodemon
```

Projenizin package.json dosyasını açtığınızda artık bu bağımlılığı içeren yeni bir bölüm göreceksiniz:

```JSON
{
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

Araç global olarak yüklenmediği için komut satırından çalıştıramıyoruz (yola eklemediğimiz sürece). Ancak, npm hangi paketlerin yüklü olduğunu bildiği için bir npm betiğinden çağırabiliriz. package.json *scripts* dosyanızın ilgili bölümünü bulun . Başlangıçta, ile başlayan tek bir satır içerecektir . Bu satırın sonuna virgül koyarak ve ve satırlarını ekleyerek güncelleyin:*"start""devstart""serverstart"*

- Linux ve macOS'ta komut dosyaları bölümü şu şekilde görünecektir:

```JSON
{
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  }
}
```

- Windows'ta, komut istemini kullanıyorsanız, "serverstart" değeri bunun yerine şöyle görünür:

```BASH
"serverstart": "SET DEBUG=express-locallibrary-tutorial:* & npm run devstart"
```

Sunucuyu artık neredeyse öncekiyle tamamen aynı şekilde, ancak komut kullanarak başlatabiliriz *devstart.*

**Not:** Artık projedeki herhangi bir dosyayı düzenlerseniz sunucu yeniden başlatılacaktır (veya istediğiniz zaman komut istemine yazarak yeniden başlatabilirsiniz rs). Sayfayı yenilemek için yine de tarayıcıyı yeniden yüklemeniz gerekecektir.

*npm run &lt;script-name&gt;* Artık sadece `start` yerine ` start` komutunu çağırmamız gerekiyor , çünkü `start` aslında adı geçen betiğe eşlenen bir npm komutudur. `start`npm start betiğindeki komutu değiştirebilirdik, ancak `nodemon`'u yalnızca geliştirme sırasında kullanmak istediğimiz için yeni bir betik komutu oluşturmak mantıklı geliyor.

Yukarıdaki package.json *serverstart* dosyasındaki komut dosyalarına eklenen komut çok iyi bir örnektir. Bu yaklaşımı kullanarak artık sunucuyu başlatmak için uzun bir komut yazmanıza gerek kalmaz. Komut dosyasına eklenen bu komutun yalnızca macOS veya Linux işletim sistemlerinde çalıştığını unutmayın.

**Oluşturulan proje**
Şimdi de az önce oluşturduğumuz projeye bir göz atalım. İlerledikçe bu projede bazı küçük değişiklikler yapacağız.

**Dizin yapısı**
Bağımlılıkları yükledikten sonra oluşturulan proje, aşağıdaki dosya yapısına sahiptir (dosyalar, "/" ile başlamayan öğelerdir). package.json dosyası , uygulama bağımlılıklarını ve diğer bilgileri tanımlar. Ayrıca, uygulama giriş noktası olan /bin/www JavaScript dosyasını çağıracak bir başlangıç ​​betiği de tanımlar . Bu, uygulamanın hata işleme mekanizmasının bir kısmını kurar ve ardından işin geri kalanını yapmak için app.js dosyasını yükler. Uygulama rotaları, routes/ dizini altındaki ayrı modüllerde saklanır . Şablonlar ise / views dizini altında saklanır.

```
express-locallibrary-tutorial
    app.js
    /bin
        www
    package.json
    package-lock.json
    /node_modules
        [about 6700 subdirectories and files]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
    /views
        error.pug
        index.pug
        layout.pug
```

Aşağıdaki bölümlerde dosyalar biraz daha ayrıntılı olarak açıklanmaktadır.

**paket.json**
package.json dosyası , uygulamanın bağımlılıklarını ve diğer bilgileri tanımlar:

```JSON
{
  "name": "express-locallibrary-tutorial",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "pug": "2.0.0-beta11"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

Komut dosyaları bölümü ilk olarak bir " başlat *npm start* " komut dosyası tanımlar; bu, sunucuyu başlatmak için çağırdığımız komut dosyasıdır (bu komut dosyası Express Uygulama Oluşturucu tarafından eklenmiştir ). Komut dosyası tanımından da görebileceğiniz gibi, bu aslında ./bin/www JavaScript dosyasını node ile başlatır .

Dosya değişikliklerinde sunucu yeniden başlatmayı etkinleştirme bölümünde, devstart ve serverstart komut dosyalarını ekleyerek bu bölümü zaten değiştirdik . Bunlar, aynı ./bin/www dosyasını node yerine nodemon ile başlatmak için kullanılabilir (bu komut dosyalarının sürümü, yukarıda belirtildiği gibi Linux ve macOS içindir).

```JSON
{
  "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=express-locallibrary-tutorial:* npm run devstart"
  }
}
```

Bağımlılıklar arasında express paketi ve seçtiğimiz görüntüleme motoru ( pug ) için gerekli paket yer almaktadır. Ayrıca, birçok web uygulamasında faydalı olan aşağıdaki paketlere de sahibiz:

- *Çerez ayrıştırıcısı* : Çerez başlığını ayrıştırmak ve doldurmak için kullanılır req.cookies(esas olarak çerez bilgilerine erişmek için kullanışlı bir yöntem sağlar).
- *debug* : Node.js çekirdeğinin hata ayıklama tekniğinden esinlenerek tasarlanmış küçük bir Node.js hata ayıklama aracı.
- *morgan *: Node için bir HTTP istek kaydedici ara yazılımı.
- *http-errors* : Gerektiğinde HTTP hataları oluşturur (hızlı hata yönetimi için).

Oluşturulan projedeki varsayılan sürümler biraz eski. Dosyanızdaki bağımlılıklar bölümünü *package.json*, bu kütüphanelerin yazıldığı tarihteki en son sürümlerini belirten aşağıdaki metinle değiştirin:

```JSON
{
  "dependencies": {
    "cookie-parser": "^1.4.7",
    "debug": "^4.4.1",
    "express": "^5.1.0",
    "http-errors": "~2.0.0",
    "morgan": "^1.10.0",
    "pug": "3.0.3"
  }
}
```

Ardından şu komutu kullanarak yüklü bağımlılıklarınızı güncelleyin:

```BASH
npm install
```

**www dosyası**
/bin/www dosyası uygulamanın giriş noktasıdır! Bunun yaptığı ilk şey, uygulama nesnesini kuran ve döndüren *require()* "gerçek" uygulama giriş noktasıdır ( proje kök dizinindeki app.js ). Bu, JavaScript kodunu, JSON'u ve diğer dosyaları geçerli dosyaya aktarmanın CommonJS yoludur . Burada, göreceli bir yol kullanarak app.js modülünü belirtiyoruz ve isteğe bağlı ( .js ) dosya uzantısını atlıyoruz.express() *require()*

```JS
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("../app");
```

Bu dosyadaki kodun geri kalanı, *app* belirli bir porta (ortam değişkeninde tanımlanmış veya değişken tanımlanmamışsa 3000) ayarlanmış bir Node.js HTTP sunucusu kurar ve sunucu hatalarını ve bağlantılarını dinlemeye ve raporlamaya başlar. Şimdilik kod hakkında başka bir şey bilmenize gerek yok (bu dosyadaki her şey "şablon" koddur), ancak ilgileniyorsanız inceleyebilirsiniz.

**uygulama.js**
Bu dosya, bir *express* uygulama nesnesi ( *app* geleneksel olarak `app` olarak adlandırılır) oluşturur, uygulamayı çeşitli ayarlar ve ara yazılımlarla kurar ve ardından uygulamayı modülden dışa aktarır. Aşağıdaki kod, dosyanın yalnızca uygulama nesnesini oluşturan ve dışa aktaran kısımlarını göstermektedir:

```JS
const express = require("express");

const app = express();
// …
module.exports = app;
```

Yukarıdaki www giriş noktası dosyasında , *module.exports* bu dosya içe aktarıldığında çağırana sağlanan nesne budur .

Şimdi app.js dosyasını detaylı olarak inceleyelim . İlk olarak, npm kullanarak uygulamamız için önceden indirdiğimiz http-errors , express , morgan ve cookie-parser *require()* gibi bazı kullanışlı Node kütüphanelerini ve dosya ve dizin yollarını ayrıştırmak için kullanılan temel bir Node kütüphanesi olan path'i kullanarak dosyaya dahil ediyoruz .

```JS
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
```

Ardından, *require()*routes dizinimizden modüller oluşturuyoruz. Bu modüller/dosyalar, belirli "rota" kümelerini (URL yolları) işlemek için kod içerir. Örneğin, kütüphanedeki tüm kitapları listelemek için iskelet uygulamayı genişlettiğimizde, kitapla ilgili rotaları ele almak için yeni bir dosya ekleyeceğiz.

```JS
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
```

**Not**: Bu aşamada modülü yalnızca içe aktardık ; henüz rotalarını kullanmadık (bu işlem dosyanın biraz daha aşağısında gerçekleşiyor).

*app* Ardından, içe aktardığımız express modülünü kullanarak nesneyi oluşturuyoruz ve daha sonra bunu görünüm (şablon) motorunu kurmak için kullanıyoruz. Motoru kurmanın iki aşaması var. İlk olarak, *"views"* şablonların saklanacağı klasörü belirtmek için değeri ayarlıyoruz (bu durumda /views alt klasörü ). Daha sonra şablon kütüphanesini belirtmek için değeri ayarlıyoruz "*view engine*"(bu durumda "pug").

```JS
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

Sonraki fonksiyon grubu, yukarıda içe aktardığımız ara katman *app.use()* kütüphanelerini istek işleme zincirine eklemek için çağrı yapar. Örneğin, form alanlarını doldurmak için ve gereklidir . Bu kütüphanelerden sonra, Express'in proje kökündeki /public dizinindeki tüm statik dosyaları sunmasını sağlayan ara katmanı da kullanıyoruz .*express.json() express.urlencoded() req.body express.static*

```JS
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
```

Diğer tüm ara yazılımlar kurulduktan sonra, (daha önce içe aktardığımız) rota işleme kodumuzu istek işleme zincirine ekliyoruz. İçe aktarılan kod, sitenin farklı bölümleri için belirli rotaları tanımlayacaktır:

```JS
app.use("/", indexRouter);
app.use("/users", usersRouter);
```

**Not:** Yukarıda belirtilen yollar ( *"/*"ve *"/users"*) içe aktarılan dosyalarda tanımlanan rotalara önek olarak kabul edilir. Örneğin, içe aktarılan kullanıcılar modülü için bir rota tanımlıyorsa */profile*, bu rotaya adresinden erişirsiniz */users/profile*. Rotalar hakkında daha sonraki bir makalede daha detaylı bilgi vereceğiz.

Dosyadaki son ara yazılım, hatalar ve HTTP 404 yanıtları için işleyici yöntemler ekler.

```JS
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
```

Express uygulama nesnesi (app) artık tamamen yapılandırıldı. Son adım, onu modül dışa aktarımlarına eklemektir (bu , /bin/www tarafından içe aktarılmasını sağlar ).

```JS
module.exports = app;
```

**Rotalar**
Aşağıda /routes/users.js yönlendirme dosyası gösterilmektedir (yönlendirme dosyaları benzer bir yapıya sahip olduğundan index.js dosyasını ayrıca göstermemize gerek yoktur ). İlk olarak, express modülünü yükler ve bu modülü kullanarak bir nesne elde eder . Ardından, bu nesne üzerinde bir yönlendirme belirtir ve son olarak modülden yönlendiriciyi dışa aktarır (bu, dosyanın app.js'ye *express.Router* aktarılmasını sağlar ).

```JS
const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
```

Bu rota, doğru desene sahip bir HTTP isteği algılandığında çağrılacak bir geri çağırma işlevi tanımlar *GET*. Eşleşen desen, modül içe aktarıldığında belirtilen rota ( *"/users"*) artı bu dosyada tanımlanan her şeydir ( ). Başka bir deyişle, bu rota, URL'si alındığında *"/"* kullanılacaktır .*/users/*

**Not:** Bunu denemek için sunucuyu node ile çalıştırın ve tarayıcınızda şu URL'yi ziyaret edin: *http://localhost:3000/users/.* 'Bir kaynakla yanıt ver' şeklinde bir mesaj görmelisiniz.

Yukarıda dikkat çekici bir nokta, geri çağırma fonksiyonunun üçüncü bir argümanı olması *next* ve bu nedenle basit bir rota geri çağırma fonksiyonu yerine bir ara katman fonksiyonu olmasıdır. Kod şu anda bu argümanı kullanmasa da *next*, rota yoluna birden fazla rota işleyici eklemek isterseniz gelecekte faydalı olabilir *'/'*.

**Görünümler (şablonlar)**
Görünümler (şablonlar) /views dizininde ( app.js dosyasında belirtildiği gibi ) saklanır ve .pug dosya uzantısına sahiptir . Bu yöntem , bir nesne içinde geçirilen adlandırılmış değişkenlerin değerleriyle birlikte belirtilen bir şablonu oluşturmak ve ardından sonucu bir yanıt olarak göndermek için kullanılır. Aşağıdaki /routes/index.js *Response.render()* kodunda, bu rotanın "index" şablonunu kullanarak ve "title" şablon değişkenini geçirerek nasıl bir yanıt oluşturduğunu görebilirsiniz.

```JS
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});
```

Yukarıdaki rota için karşılık gelen şablon aşağıda verilmiştir ( index.pug ). Sözdizimi hakkında daha sonra daha detaylı konuşacağız. Şimdilik bilmeniz gereken tek şey, değişkenin *title*(değeriyle birlikte *'Express'*) şablonda belirtilen yere eklendiğidir.

```PUG
extends layout

block content
  h1= title
  p Welcome to #{title}
  ```

## Express Eğitimi Bölüm 3: Veritabanı Kullanımı (Mongoose ile)
Bu makale, Node/Express için veritabanlarına kısaca giriş yapmaktadır. Ardından, LocalLibrary web sitesi için veritabanı erişimi sağlamak üzere **[Mongoose'u](https://mongoosejs.com/)** nasıl kullanabileceğimizi göstermektedir . Nesne şemalarının ve modellerin nasıl tanımlandığını, temel alan türlerini ve temel doğrulamayı açıklamaktadır. Ayrıca, model verilerine erişmenin birkaç temel yolunu da kısaca göstermektedir.

**Genel Bakış**
Kütüphane personeli, kitaplar ve ödünç alanlar hakkındaki bilgileri saklamak için Yerel Kütüphane web sitesini kullanacak; kütüphane üyeleri ise kitaplara göz atmak, arama yapmak, müsait kitap olup olmadığını öğrenmek ve ardından kitapları rezerve etmek veya ödünç almak için bu siteyi kullanacak. Bilgileri verimli bir şekilde saklamak ve geri almak için, bunları bir veritabanında saklayacağız .

Express uygulamaları birçok farklı veritabanı kullanabilir ve Oluşturma , Okuma , Güncelleme ve Silme (CRUD) işlemlerini gerçekleştirmek için kullanabileceğiniz çeşitli yaklaşımlar vardır . Bu eğitim, mevcut seçeneklerden bazılarına kısa bir genel bakış sunar ve ardından seçilen belirli mekanizmaları ayrıntılı olarak gösterir.

**Hangi veritabanlarını kullanabilirim?**
Express uygulamaları, Node tarafından desteklenen herhangi bir veritabanını kullanabilir ( Express'in kendisi veritabanı yönetimi için herhangi bir özel ek davranış/gereksinim tanımlamaz). PostgreSQL, MySQL, Redis, SQLite ve MongoDB dahil olmak üzere birçok popüler seçenek mevcuttur.

Veritabanı seçerken, verimliliğe ulaşma süresi/öğrenme eğrisi, performans, çoğaltma/yedekleme kolaylığı, maliyet, topluluk desteği vb. hususları göz önünde bulundurmalısınız. Tek bir "en iyi" veritabanı olmasa da, popüler çözümlerin neredeyse tamamı, Yerel Kütüphanemiz gibi küçük ve orta ölçekli bir site için fazlasıyla kabul edilebilir olacaktır.

**Veritabanıyla etkileşim kurmanın en iyi yolu nedir?**
Veritabanıyla etkileşim kurmanın iki yaygın yaklaşımı vardır:

- SQL gibi veritabanlarının yerleşik sorgu dilini kullanarak.
- Nesne İlişkisel Eşleyici ("ORM") veya Nesne Belge Eşleyici ("ODM") kullanmak. Bunlar, web sitesinin verilerini JavaScript nesneleri olarak temsil eder ve daha sonra bu nesneler temel veritabanına eşlenir. Bazı ORM'ler ve ODM'ler belirli bir veritabanına bağlıdır, diğerleri ise veritabanından bağımsız bir arka uç sağlar.

En iyi performans , SQL veya veritabanının desteklediği herhangi bir sorgu dili kullanılarak elde edilebilir. Nesne eşleyiciler genellikle daha yavaştır çünkü nesneler ve veritabanı formatı arasında eşleme yapmak için çeviri kodu kullanırlar ve bu da en verimli veritabanı sorgularını kullanmayabilir (bu durum özellikle eşleyici farklı veritabanı arka uçlarını destekliyorsa ve desteklenen veritabanı özellikleri açısından daha büyük ödünler vermek zorunda kalıyorsa geçerlidir).

ORM/ODM kullanmanın avantajı, programcıların veritabanı semantiği yerine JavaScript nesneleri açısından düşünmeye devam edebilmeleridir; bu, özellikle farklı veritabanlarıyla (aynı veya farklı web sitelerinde) çalışmanız gerektiğinde geçerlidir. Ayrıca veri doğrulaması yapmak için de açık bir yer sağlarlar.

**Not:** ODM/ORM kullanmak genellikle geliştirme ve bakım maliyetlerini düşürür! Yerel sorgu diline çok aşina değilseniz veya performans çok önemli değilse, bir ODM kullanmayı ciddi olarak düşünmelisiniz.

**Hangi ORM/ODM yazılımını kullanmalıyım?**
npm paket yöneticisi sitesinde birçok ODM/ORM çözümü mevcuttur.

Bu yazının yazıldığı sırada popüler olan bazı çözümler şunlardır:

- **[Mongoose](https://www.npmjs.com/package/mongoose)** : Mongoose, eşzamansız bir ortamda çalışmak üzere tasarlanmış bir MongoDB nesne modelleme aracıdır.
- **[Waterline](https://www.npmjs.com/package/waterline)** : Express tabanlı Sails web çerçevesinden türetilmiş bir ORM'dir. Redis, MySQL, LDAP, MongoDB ve Postgres dahil olmak üzere çok sayıda farklı veritabanına erişim için tek tip bir API sağlar.
- **[Bookshelf](https://www.npmjs.com/package/bookshelf)** : Hem promise tabanlı hem de geleneksel geri çağırma arayüzlerini içerir; işlem desteği, eager/nested-eager ilişki yükleme, polimorfik ilişkiler ve bire bir, bire çok ve çoktan çoğa ilişkiler için destek sağlar. PostgreSQL, MySQL ve SQLite3 ile çalışır.
- **[İtiraz](https://www.npmjs.com/package/objection)** : SQL'in ve temel veritabanı motorunun (SQLite3, Postgres ve MySQL'i destekler) tüm gücünü kullanmayı mümkün olduğunca kolaylaştırır.
- **[Sequelize](https://www.npmjs.com/package/sequelize)** , Node.js ve io.js için promise tabanlı bir ORM'dir. PostgreSQL, MySQL, MariaDB, SQLite ve MSSQL lehçelerini destekler ve sağlam işlem desteği, ilişkiler, okuma replikasyonu ve daha fazlasını sunar.
- **[Node ORM2](https://node-orm.readthedocs.io/en/latest/)**, Node.js için bir Nesne İlişki Yöneticisidir. MySQL, SQLite ve Postgres'i destekleyerek, nesne yönelimli bir yaklaşımla veritabanlarıyla çalışmaya yardımcı olur.
- **[GraphQL](https://graphql.org/) : Esasen RESTful API'lar için bir sorgu dili olan GraphQL, oldukça popülerdir ve veritabanlarından veri okumak için kullanılabilen özelliklere sahiptir.

Genel bir kural olarak, bir çözüm seçerken hem sunulan özellikleri hem de "topluluk etkinliğini" (indirmeler, katkılar, hata raporları, dokümantasyon kalitesi vb.) göz önünde bulundurmalısınız. Bu yazının yazıldığı sırada Mongoose, açık ara en popüler ODM'dir ve veritabanınız için MongoDB kullanıyorsanız mantıklı bir seçimdir.

**LocalLibrary için Mongoose ve MongoDB Kullanımı**
Yerel Kütüphane örneği (ve bu konunun geri kalanı) için , kütüphane verilerimize erişmek üzere Mongoose ODM'yi kullanacağız . Mongoose , belge odaklı bir veri modeli kullanan açık kaynaklı bir NoSQL veritabanı olan MongoDB'nin ön yüzü olarak işlev görür .

Bu ODM ve veritabanı kombinasyonu, Node topluluğunda son derece popülerdir; bunun nedenlerinden biri, belge depolama ve sorgulama sisteminin JSON'a çok benzemesi ve bu nedenle JavaScript geliştiricilerine tanıdık gelmesidir.

**Not:** Mongoose'u kullanmak için MongoDB bilmenize gerek yoktur, ancak MongoDB'ye zaten aşina iseniz Mongoose dokümantasyonunun bazı bölümlerini kullanmak ve anlamak daha kolay olacaktır .

Bu eğitimin geri kalanında, LocalLibrary web sitesi örneği için Mongoose şemalarının ve modellerinin nasıl tanımlanacağı ve bunlara nasıl erişileceği gösterilmektedir .

**LocalLibrary modellerinin tasarlanması**
Modelleri kodlamaya başlamadan önce, hangi verileri saklamamız gerektiği ve farklı nesneler arasındaki ilişkiler hakkında birkaç dakika düşünmekte fayda var.

Kitaplar hakkında bilgi (başlık, özet, yazar, tür, ISBN) saklamamız gerektiğini ve birden fazla kopyanın (küresel olarak benzersiz kimlikler, bulunabilirlik durumları vb. ile) mevcut olabileceğini biliyoruz. Yazar hakkında sadece adından daha fazla bilgi saklamamız gerekebilir ve aynı veya benzer isimlere sahip birden fazla yazar olabilir. Bilgileri kitap başlığına, yazara, türe ve kategoriye göre sıralayabilmek istiyoruz.

Modellerinizi tasarlarken, her "nesne" (birbiriyle ilişkili bilgi grubu) için ayrı modeller oluşturmak mantıklıdır. Bu durumda, bu modeller için bariz adaylar kitaplar, kitap örnekleri ve yazarlardır.

Seçenekleri doğrudan web sitesine kodlamak yerine, seçim listesi seçeneklerini (örneğin, açılır liste gibi) temsil etmek için modeller kullanmak da isteyebilirsiniz; bu, tüm seçenekler önceden bilinmediğinde veya değişebileceğinde önerilir. İyi bir örnek, bir türdür (örneğin, fantastik, bilim kurgu vb.).

Modellerimize ve alanlarımıza karar verdikten sonra, bunlar arasındaki ilişkileri düşünmemiz gerekiyor.

Bunu göz önünde bulundurarak, aşağıdaki UML ilişki diyagramı, bu durumda tanımlayacağımız modelleri (kutular olarak) göstermektedir. Yukarıda tartışıldığı gibi, kitap (kitabın genel ayrıntıları), kitap örneği (sistemde bulunan kitabın belirli fiziksel kopyalarının durumu) ve yazar için modeller oluşturduk. Ayrıca, değerlerin dinamik olarak oluşturulabilmesi için tür için de bir model oluşturmaya karar verdik. *BookInstance:status* Değerlerin değişmesini beklemediğimiz için kabul edilebilir değerleri sabit kodla belirleyeceğiz. Her bir kutunun içinde, model adını, alan adlarını ve türlerini, ayrıca yöntemleri ve dönüş türlerini görebilirsiniz.

Şema ayrıca modeller arasındaki ilişkileri, çoklukları da dahil olmak üzere göstermektedir . Çokluklar, şemada her modelin ilişkide bulunabilecek sayılarını (maksimum ve minimum) gösteren sayılardır. Örneğin, kutular arasındaki bağlantı çizgisi, *Book* ve a'nın *Genre* ilişkili olduğunu gösterir. Modele yakın sayılar, *Book* a'nın *Genre* sıfır veya daha fazla s'ye sahip olması gerektiğini *Book*(istediğiniz kadar) gösterirken, çizginin diğer ucundaki sayılar, *Genre* bir kitabın sıfır veya daha fazla ilişkili s'ye sahip olabileceğini gösterir *Genre*.

![Test](./assets/71-print.png)

**Not:** Bir sonraki bölümde modellerin nasıl tanımlandığı ve kullanıldığına dair temel bir giriş sunulmaktadır. Bunu okurken, yukarıdaki diyagramda yer alan modellerin her birini nasıl oluşturacağımızı göz önünde bulundurun.

**Veritabanı API'leri eşzamansızdır.**
Veritabanında kayıt oluşturma, bulma, güncelleme veya silme işlemleri eşzamansızdır. Bu, yöntemlerin hemen geri döndüğü ve işlemin başarılı veya başarısız olmasını ele alan kodun, işlem tamamlandığında daha sonra çalıştırıldığı anlamına gelir. Sunucu veritabanı işleminin tamamlanmasını beklerken diğer kodlar çalıştırılabilir, böylece sunucu diğer isteklere yanıt vermeye devam edebilir.

JavaScript, eşzamansız davranışı desteklemek için bir dizi mekanizmaya sahiptir. Tarihsel olarak JavaScript, başarı ve hata durumlarını ele almak için eşzamansız yöntemlere geri çağırma fonksiyonları geçirmeye büyük ölçüde güvenmiştir. Modern JavaScript'te geri çağırma fonksiyonlarının yerini büyük ölçüde Promise'ler almıştır . Promise'ler, eşzamansız bir yöntem tarafından (hemen) döndürülen ve gelecekteki durumunu temsil eden nesnelerdir. İşlem tamamlandığında, Promise nesnesi "yerleşir" ve işlemin sonucunu veya bir hatayı temsil eden bir nesneyi çözümler.

Promise'lerin tamamlanmasının ardından kod çalıştırmak için iki ana yöntem vardır ve her iki yaklaşımın da genel bir özetini içeren "Promise'ler nasıl kullanılır" başlıklıawait yazımızı okumanızı şiddetle tavsiye ederiz. Bu eğitimde, öncelikle promise tamamlanmasını beklemek için `promise` yöntemini kullanacağız *async function*, çünkü bu daha okunabilir ve anlaşılabilir asenkron kod sağlar.

*async function* Bu yaklaşımın çalışma şekli şöyledir: Bir fonksiyonu asenkron olarak işaretlemek için `asenkron` anahtar kelimesini kullanırsınız ve ardından bu fonksiyonun içinde *await*, bir promise döndüren herhangi bir metoda `asenkron` anahtar kelimesini uygularsınız. Asenkron fonksiyon çalıştırıldığında, *await* promise sonuçlanana kadar ilk metotta duraklatılır. Çevreleyen kod açısından bakıldığında, asenkron fonksiyon daha sonra geri döner ve ondan sonraki kod çalışabilir. Daha sonra promise sonuçlandığında, *await* asenkron fonksiyonun içindeki metot sonuçla birlikte geri döner veya promise reddedilirse bir hata fırlatılır. Asenkron fonksiyondaki kod, ya başka bir promise *await* ile karşılaşana kadar (bu noktada tekrar duraklatılır) ya da fonksiyondaki tüm kod çalıştırılana kadar çalışır.

Aşağıdaki örnekte bunun nasıl çalıştığını görebilirsiniz. ifadelerin etrafında bir blok *myFunction()* içeren asenkron bir fonksiyondur . Çalıştırıldığında, kod yürütmesi , vaat çözülene kadar duraklatılır ; bu noktada kod devam eder ve tekrar bekler. Bloktaki kod , asenkron fonksiyonda bir hata oluşursa çalışır ve bu, yöntemlerden herhangi biri tarafından döndürülen vaat reddedilirse gerçekleşir.*try...catch* *await myFunction() methodThatReturnsPromise()*functionThatReturnsPromise()catch*

```js
async function myFunction() {
  try {
    // …
    await someObject.methodThatReturnsPromise();
    // …
    await functionThatReturnsPromise();
    // …
  } catch (e) {
    // error handling code
  }
}

myFunction();
```

Asenkron bir fonksiyon, fonksiyon içinde bir hata yakalanmadığı takdirde reddedilen bir promise döndürür. Bu hatayı çağıran kodda yakalamak için, döndürülen promise'in *catch()* metodunu veya *await* fonksiyon çağrısını bir *try...catch* blok içinde kullanın. Fonksiyonu bir *try...catch* blok içinde çağırmak , reddedilen promise'i fırlatılan bir hataya dönüştürdüğü *await* için reddedilme durumunu yakalamaz *.await*

Yukarıdaki eşzamansız yöntemler sırayla çalıştırılır. Yöntemler birbirine bağlı değilse, bunları paralel olarak çalıştırabilir ve tüm işlemi daha hızlı tamamlayabilirsiniz. Bu, *Promise.all()*girdi olarak vaatlerden oluşan bir yineleyici alan ve tek bir vaat döndüren yöntem kullanılarak yapılır *Promise*. Döndürülen bu vaat, girdinin tüm vaatleri yerine getirildiğinde, yerine getirme değerlerinin bir dizisiyle birlikte yerine getirilir. Girdinin vaatlerinden herhangi biri reddedildiğinde, ilk ret nedeni ile birlikte reddedilir.

Aşağıdaki kod bunun nasıl çalıştığını gösteriyor. İlk olarak, *promise* döndüren iki fonksiyonumuz var. *await* Her ikisinin de, tarafından döndürülen promise'ı kullanarak tamamlanmasını bekliyoruz *Promise.all()*. Her ikisi de tamamlandığında *await* ve sonuç dizisi doldurulduğunda, fonksiyon bir sonrakine geçer *await* ve tarafından döndürülen promise'ın çözümlenmesini bekler . Herhangi bir hatayı yakalamak için tarafından döndürülen promise'a *anotherFunctionThatReturnsPromise()* bir hata işleyici ekleyebilirsiniz .*catch() myFunction()*

```js
async function myFunction() {
  // …
  const [resultFunction1, resultFunction2] = await Promise.all([
    functionThatReturnsPromise1(),
    functionThatReturnsPromise2(),
  ]);
  // …
  await anotherFunctionThatReturnsPromise(resultFunction1);
}
```

*await/* ile birlikte kullanılan vaatler *async*, eşzamansız yürütme üzerinde hem esnek hem de "anlaşılabilir" bir kontrol sağlar!

**Mongoose başlangıç ​​kılavuzu**
Bu bölümde, Mongoose'u bir MongoDB veritabanına nasıl bağlayacağınız, şema ve model tanımlamayı ve temel sorguları nasıl yapacağınız hakkında genel bir bilgi verilmektedir.

**Mongoose ve MongoDB Kurulumu**
Mongoose, diğer bağımlılıklar gibi projenize ( package.json ) npm kullanılarak yüklenir. Yüklemek için proje klasörünüzde aşağıdaki komutu kullanın:

```bash
npm install mongoose
```

Mongoose'u kurmak, MongoDB veritabanı sürücüsü de dahil olmak üzere tüm bağımlılıklarını ekler, ancak MongoDB'nin kendisini kurmaz. Bir MongoDB sunucusu kurmak istiyorsanız, çeşitli işletim sistemleri için kurulum dosyalarını buradan indirebilir ve yerel olarak kurabilirsiniz. Ayrıca bulut tabanlı MongoDB örneklerini de kullanabilirsiniz.

**Not:** Bu eğitimde, veritabanı sağlamak için MongoDB Atlas bulut tabanlı veritabanı hizmetinin ücretsiz katmanını kullanacağız . Bu, geliştirme için uygundur ve "kurulumu" işletim sisteminden bağımsız hale getirdiği için eğitim için mantıklıdır (veritabanı hizmeti, üretim veritabanınız için de kullanabileceğiniz bir yaklaşımdır).

**MongoDB'ye bağlanılıyor**
Mongoose, bir MongoDB veritabanına bağlantı gerektirir. Aşağıda gösterildiği *require()* gibi yerel olarak barındırılan bir veritabanına bağlanabilirsiniz *mongoose.connect()* (bu eğitimde bunun yerine internette barındırılan bir veritabanına bağlanacağız).

```js
// Import the mongoose module
const mongoose = require("mongoose");

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/my_database";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
```

**Not:** Veritabanı API'lerinin eşzamansız olduğu bölümünde tartışıldığı gibi , burada bir fonksiyon içindeki metot awaittarafından döndürülen promise'ı kullanıyoruz . Bağlantı kurmaya çalışırken oluşabilecek hataları ele almak için promise işleyiciyi kullanıyoruz , ancak bunu başka bir fonksiyondaki bir blok içinde de kullanabilirdik .*connect() asynccatch() await main() try...catchasync*

*Connection* Varsayılan nesneyi ile alabilirsiniz *mongoose.connection*. Ek bağlantılar oluşturmanız gerekiyorsa, kullanabilirsiniz *mongoose.createConnection()*. Bu, ile aynı veritabanı URI biçimini (ana bilgisayar, veritabanı, port, seçenekler vb. ile) alır *connect()* ve bir *Connection* nesne döndürür. 'nin hemen döndürdüğünü unutmayın ; bağlantının kurulmasını beklemeniz gerekiyorsa, bir promise ( ) döndürmek için *createConnection()* ile çağırabilirsiniz .*asPromise() mongoose.createConnection(mongoDB).asPromise()*

**Modelleri tanımlama ve oluşturma**
Modeller arayüz kullanılarak tanımlanır *Schema* . Şema, her belgede saklanan alanları, doğrulama gereksinimlerini ve varsayılan değerlerini tanımlamanıza olanak tanır. Ayrıca, veri türlerinizle çalışmayı kolaylaştırmak için statik ve örnek yardımcı yöntemler tanımlayabilir ve diğer alanlar gibi kullanabileceğiniz, ancak veritabanında saklanmayan sanal özellikler de tanımlayabilirsiniz (bunu biraz daha aşağıda ele alacağız).

Şemalar daha sonra bu yöntem kullanılarak modellere "derlenir" *mongoose.model()*. Bir modeliniz olduğunda, bu modeli kullanarak belirli türdeki nesneleri bulabilir, oluşturabilir, güncelleyebilir ve silebilirsiniz.

**Not:** Her model, MongoDB veritabanındaki bir belge koleksiyonuna karşılık gelir . Belgeler, modelde tanımlanan alanları/şema türlerini içerecektir .*Schema*

Şemaların tanımlanması
Aşağıdaki kod parçası, basit bir şemayı nasıl tanımlayabileceğinizi göstermektedir. Öncelikle require()Mongoose'u çalıştırın, ardından Schema yapıcı metodunu kullanarak yeni bir şema örneği oluşturun ve yapıcı metodun object parametresinde içindeki çeşitli alanları tanımlayın.

```js
// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});
```

Yukarıdaki örnekte yalnızca iki alanımız var: bir metin dizesi ve bir tarih. Sonraki bölümlerde, diğer alan türlerini, doğrulama yöntemlerini ve diğer metotları göstereceğiz.

**Bir model oluşturmak**
Modeller, şemalar kullanılarak şu yöntemle oluşturulur *mongoose.model():*

```js
// Define schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Compile model from schema
const SomeModel = mongoose.model("SomeModel", SomeModelSchema);
```

İlk argüman, modeliniz için oluşturulacak koleksiyonun tekil adıdır (Mongoose yukarıdaki SomeModel modeli için veritabanı koleksiyonunu oluşturacaktır ) ve ikinci argüman ise modeli oluştururken kullanmak istediğiniz şemadır.

**Not:** Model sınıflarınızı tanımladıktan sonra, bunları kullanarak kayıt oluşturabilir, güncelleyebilir veya silebilir ve tüm kayıtları veya belirli kayıt alt kümelerini almak için sorgular çalıştırabilirsiniz. Bunu, Modelleri Kullanma bölümünde ve görünümlerimizi oluşturduğumuzda nasıl yapacağınızı göstereceğiz .

**Şema türleri (alanlar)**
Bir şema, keyfi sayıda alana sahip olabilir; her alan, MongoDB'de depolanan belgelerdeki bir alanı temsil eder . Yaygın alan türlerinin çoğunu ve bunların nasıl tanımlandığını gösteren örnek bir şema aşağıda verilmiştir.

```js
const schema = new Schema({
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now() },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // You can also have an array of each of the other types too.
  nested: { stuff: { type: String, lowercase: true, trim: true } },
});
```

Şema türlerinin çoğu ("type:" ifadesinden veya alan adlarından sonra gelen tanımlayıcılar) kendiliğinden açıklayıcıdır. İstisnalar şunlardır:

- *ObjectId*: Veritabanındaki bir modelin belirli örneklerini temsil eder. Örneğin, bir kitap yazar nesnesini temsil etmek için bunu kullanabilir. Bu, belirtilen nesne için benzersiz kimliği ( ) içerecektir . Gerektiğinde ilgili bilgileri çekmek için *_id* bu yöntemi kullanabiliriz .*populate()*
- *Mixed:* Rastgele bir şema türü.
- *[]*: Öğelerden oluşan bir dizi. Bu modeller üzerinde JavaScript dizi işlemleri (push, pop, unshift, vb.) gerçekleştirebilirsiniz. Yukarıdaki örnekler, türü belirtilmemiş bir nesne dizisi ve bir *String* nesne dizisi göstermektedir, ancak herhangi bir türde nesneden oluşan bir diziye sahip olabilirsiniz.

Kod ayrıca bir alanın tanımlanmasının iki yolunu da göstermektedir:

- Alan adı ve türü *name* , anahtar-değer çifti olarak (yani, , *binary* ve alanlarında yapıldığı gibi *living*).
- Alan adı, ardından alanı tanımlayan bir nesne ve alan için *type* diğer seçenekler gelir. Seçenekler şunları içerebilir:
- varsayılan değerler.
- Dahili doğrulayıcılar (örneğin, maksimum/minimum değerler) ve özel doğrulama fonksiyonları.
- Alanın zorunlu olup olmadığı
- Alanların otomatik olarak küçük harfe, büyük harfe dönüştürülüp dönüştürülmeyeceği *String* veya kısaltılıp kısaltılmayacağı (örneğin, *{ type: String, lowercase: true, trim: true }*)

Seçenekler hakkında daha fazla bilgi için SchemaTypes (Mongoose belgeleri) bölümüne bakın.

**Doğrulama**
Mongoose, yerleşik ve özel doğrulayıcılar ile senkron ve asenkron doğrulayıcılar sunar. Tüm durumlarda doğrulama hatası için hem kabul edilebilir değer aralığını hem de hata mesajını belirtmenize olanak tanır.

Dahili doğrulayıcılar şunlardır:

- Tüm *SchemaType*'larda yerleşik bir *" zorunlu "* doğrulayıcı bulunur. Bu, bir belgenin kaydedilebilmesi için alanın mutlaka girilmesi gerekip gerekmediğini belirtmek için kullanılır.
- Sayıların minimum ve maksimum doğrulayıcıları vardır .
- Dizelerin içeriği şöyledir:
  - enum : alan için izin verilen değerler kümesini belirtir.
  - `match` : Dizinin eşleşmesi gereken normal ifadeyi belirtir.
  - Dizenin maxLength ve minLength değerleri.
Aşağıdaki örnek (Mongoose belgelerinden biraz değiştirilmiş haliyle), bazı doğrulayıcı türlerini ve hata mesajlarını nasıl belirtebileceğinizi göstermektedir:

```js
const breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, "Too few eggs"],
    max: 12,
    required: [true, "Why no eggs?"],
  },
  drink: {
    type: String,
    enum: ["Coffee", "Tea", "Water"],
  },
});
```

**Sanal mülkler**
Sanal özellikler, alabileceğiniz ve ayarlayabileceğiniz ancak MongoDB'ye kaydedilmeyen belge özellikleridir. Getirici metotlar alanları biçimlendirmek veya birleştirmek için kullanışlıdır, ayarlayıcı metotlar ise tek bir değeri depolama için birden fazla değere ayırmak için kullanışlıdır. Belgelerdeki örnek, bir ad ve soyad alanından tam ad sanal özelliğini oluşturur (ve kaldırır), bu da bir şablonda her kullanıldığında tam adı oluşturmaktan daha kolay ve daha temizdir.

**Not**: Kütüphanede, yol ve kaydın *_id* değerini kullanarak her model kaydı için benzersiz bir URL tanımlamak üzere sanal bir özellik kullanacağız.

**Metotlar ve sorgu yardımcıları**
Bir şema ayrıca örnek metotlara , statik metotlara ve sorgu yardımcılarına da sahip olabilir . Örnek ve statik metotlar benzerdir, ancak aralarındaki bariz fark, örnek metotların belirli bir kayıtla ilişkilendirilmesi ve geçerli nesneye erişebilmesidir. Sorgu yardımcıları, Mongoose'un zincirleme sorgu oluşturucu API'sini *find()* genişletmenize olanak tanır (örneğin, , *findOne()* ve metotlarına ek olarak "byName" sorgusu eklemenize olanak tanır *findById())*.

**Modelleri kullanarak**
Bir şema oluşturduktan sonra, onu modeller oluşturmak için kullanabilirsiniz. Model, veritabanında arama yapabileceğiniz bir belge koleksiyonunu temsil ederken, modelin örnekleri ise kaydedebileceğiniz ve geri alabileceğiniz ayrı ayrı belgeleri temsil eder.

**Not**: Kayıt oluşturma, güncelleme, silme ve sorgulama işlemleri, bir promise döndüren eşzamansız işlemlerdir . Aşağıdaki örnekler yalnızca ilgili yöntemlerin kullanımını *await*(yani, yöntemleri kullanmak için gerekli temel kodu) göstermektedir. Hataları yakalamak için kullanılan çevreleyen *async functionve try...catch* blokları, açıklık sağlamak amacıyla atlanmıştır. Daha fazla bilgi için yukarıdaki Veritabanı API'lerinin eşzamansız olduğuna *await/async* bakın .

**Belgelerin oluşturulması ve değiştirilmesi**
Bir kayıt oluşturmak için modelin bir örneğini tanımlayabilir ve ardından *save()* onu çağırabilirsiniz. Aşağıdaki örnekler, şemamızdan oluşturduğumuz *SomeModel*(tek bir alana sahip) bir model olduğunu varsaymaktadır.*name*

```js
// Create an instance of model SomeModel
const awesome_instance = new SomeModel({ name: "awesome" });

// Save the new model instance asynchronously
await awesome_instance.save();
```

Modeli kaydederken aynı anda model örneğini tanımlamak için de kullanabilirsiniz *create().* Aşağıda yalnızca bir tane oluşturuyoruz, ancak nesne dizisi geçirerek birden fazla örnek oluşturabilirsiniz.

```js
await SomeModel.create({ name: "also_awesome" });
```

Her modelin ilişkili bir bağlantısı vardır (bu, kullandığınızda varsayılan bağlantı olacaktır *mongoose.model())*. Yeni bir bağlantı oluşturursunuz ve *.model()* bu bağlantıyı çağırarak belgeleri farklı bir veritabanında oluşturursunuz.

Bu yeni kayıttaki alanlara nokta sözdizimini kullanarak erişebilir ve değerleri değiştirebilirsiniz. Değiştirilen değerleri veritabanına geri kaydetmek için ilgili fonksiyonu çağırmanız *save()* veya kaydetmeniz gerekir.*update()*

```js
// Access model field values using dot notation
console.log(awesome_instance.name); // should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

**Kayıtları aramak**
Sorgu yöntemlerini kullanarak, sorgu koşullarını bir JSON belgesi olarak belirterek kayıtları arayabilirsiniz. Aşağıdaki kod parçası, bir veritabanında tenis oynayan tüm sporcuları nasıl bulabileceğinizi ve yalnızca sporcu adı ve yaş alanlarını nasıl döndürebileceğinizi göstermektedir . Burada yalnızca bir eşleşen alan (spor) belirtiyoruz, ancak daha fazla kriter ekleyebilir, normal ifade kriterleri belirtebilir veya tüm sporcuları döndürmek için koşulları tamamen kaldırabilirsiniz.

```js
const Athlete = mongoose.model("Athlete", yourSchema);

// find all athletes who play tennis, returning the 'name' and 'age' fields
const tennisPlayers = await Athlete.find(
  { sport: "Tennis" },
  "name age",
).exec();
```

**Not:** Arama sonucunda herhangi bir sonuç bulunamaması bir hata değildir , ancak uygulamanız bağlamında bir başarısızlık durumu olabilir. Uygulamanız bir aramanın bir değer bulmasını bekliyorsa, sonuçta döndürülen giriş sayısını kontrol edebilirsiniz.

Sorgu API'leri, örneğin , *Queryfind()* türünde bir değişken döndürür . Bir sorgu nesnesini kullanarak, sorguyu `org` yöntemiyle çalıştırmadan önce parçalar halinde oluşturabilirsiniz . `org` yöntemi sorguyu çalıştırır ve sonucu bekleyebileceğiniz bir promise döndürür.*exec() exec() await*

```js
// find all athletes that play tennis
const query = Athlete.find({ sport: "Tennis" });

// selecting the 'name' and 'age' fields
query.select("name age");

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec();
```

Yukarıda, sorgu koşullarını metot içinde tanımladık *find()*. Bunu bir fonksiyon kullanarak da yapabiliriz *where()* ve sorgumuzun tüm bölümlerini ayrı ayrı eklemek yerine nokta operatörünü (.) kullanarak birbirine zincirleyebiliriz. Aşağıdaki kod parçası, yaş için ek bir koşul dışında, yukarıdaki sorgumuzla aynıdır.

```js
Athlete.find()
  .where("sport")
  .equals("Tennis")
  .where("age")
  .gt(17)
  .lt(50) // Additional where query
  .limit(5)
  .sort({ age: -1 })
  .select("name age")
  .exec();
 ```

Bu *find()* yöntem tüm eşleşen kayıtları alır, ancak genellikle yalnızca bir eşleşme almak istersiniz. Aşağıdaki yöntemler tek bir kayıt için sorgulama yapar:

- *findById()* Belirtilen kimlik numarasına sahip belgeyi bulur id(her belgenin benzersiz bir kimlik numarası vardır id).
- *findOne()* Belirtilen kriterlere uyan tek bir belge bulur.
- *findByIdAndDelete(),* *findByIdAndUpdate(), findOneAndRemove(), findOneAndUpdate():* Belirli kriterlere göre tek bir belgeyi bulur idve günceller veya siler. Bunlar, kayıtları güncellemek ve silmek için kullanışlı kolaylık fonksiyonlarıdır.

**Not**:*countDocuments()* Koşullara uyan öğelerin sayısını elde etmek için kullanabileceğiniz bir yöntem de vardır . Bu, kayıtları gerçekten getirmeden sayım yapmak istediğinizde kullanışlıdır.

**İlgili belgelerle çalışma — nüfus**
*ObjectId* Şema alanını kullanarak bir belge/model örneğinden diğerine veya bir belgeden birden fazla belgeye bir dizi kullanarak referans oluşturabilirsiniz *ObjectIds*. Alan, ilgili modelin kimliğini saklar. İlişkili belgenin gerçek içeriğine ihtiyacınız varsa, *populate()* sorguda yöntemi kullanarak kimliği gerçek verilerle değiştirebilirsiniz.

Örneğin, aşağıdaki şema yazarları ve hikayeleri tanımlar. Her yazarın birden fazla hikayesi olabilir ve bunları bir dizi olarak temsil ederiz *ObjectId*. Her hikayenin tek bir yazarı olabilir. *ref* Özellik, şemaya bu alana hangi modelin atanabileceğini söyler.

```JS
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  title: String,
});

const Story = mongoose.model("Story", storySchema);
const Author = mongoose.model("Author", authorSchema);
```

İlgili belgeye olan referanslarımızı, değer atayarak kaydedebiliriz *_id.* Aşağıda bir yazar, ardından bir öykü oluşturuyoruz ve yazar kimliğini öykümüzün yazar alanına atıyoruz.

```JS
const bob = new Author({ name: "Bob Smith" });

await bob.save();

// Bob now exists, so let's create a story
const story = new Story({
  title: "Bob goes sledding",
  author: bob._id, // assign the _id from our author Bob. This ID is created by default!
});

await story.save();
```

**Not:** Bu programlama stilinin en büyük avantajlarından biri, ana kod yolunu hata kontrolüyle karmaşıklaştırmamıza gerek kalmamasıdır. İşlemlerden herhangi biri *save()* başarısız olursa, promise reddedilir ve bir hata fırlatılır. Hata işleme kodumuz bunu ayrı olarak (genellikle bir *catch()* blok içinde) ele alır, bu nedenle kodumuzun amacı çok açıktır.

Hikaye belgemizde artık yazar belgesinin kimliğiyle belirtilen bir yazar bulunmaktadır. Hikaye sonuçlarında yazar bilgilerini almak için *populate()* aşağıda gösterildiği gibi kullanıyoruz.

```JS
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

Bu eğitimde ilgili öğelerle çalışma hakkında bilmeniz gereken hemen hemen her şey bu kadar . Daha ayrıntılı bilgi için *Popülasyon* (Mongoose belgeleri) bölümüne bakın.

**Dosya başına bir şema/model**
Şemaları ve modelleri dilediğiniz dosya yapısını kullanarak oluşturabilirsiniz, ancak her model şemasını kendi modülünde (dosyasında) tanımlamanızı ve ardından modeli oluşturmak için yöntemi dışa aktarmanızı şiddetle tavsiye ederiz. Bu, aşağıda gösterilmiştir:

```JS
// File: ./models/some-model.js

// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Export function to create "SomeModel" model class
module.exports = mongoose.model("SomeModel", SomeModelSchema);
```

Ardından modeli diğer dosyalarda hemen kullanabilir ve çağırabilirsiniz. Aşağıda, modelin tüm örneklerini nasıl elde edebileceğinizi gösteriyoruz.

```JS
// Create a SomeModel model just by requiring the module
const SomeModel = require("../models/some-model");

// Use the SomeModel object (model) to find all SomeModel records
const modelInstances = await SomeModel.find().exec();
```

**MongoDB veritabanının kurulumu**
Mongoose'un neler yapabileceğini ve modellerimizi nasıl tasarlamak istediğimizi anladığımıza göre, LocalLibrary web sitesi üzerinde çalışmaya başlamanın zamanı geldi. Yapmak istediğimiz ilk şey, kütüphane verilerimizi depolamak için kullanabileceğimiz bir MongoDB veritabanı kurmak.

Bu eğitimde, MongoDB Atlas bulut tabanlı test veritabanını kullanacağız . Bu veritabanı katmanı, yedekliliği olmadığı için üretim web siteleri için uygun görülmemektedir, ancak geliştirme ve prototipleme için mükemmeldir. Burada kullanmamızın nedeni, ücretsiz ve kurulumunun kolay olması ve MongoDB Atlas'ın üretim veritabanınız için makul bir şekilde seçebileceğiniz popüler bir veritabanı hizmeti sağlayıcısı olmasıdır (yazım sırasında diğer popüler seçenekler arasında ScaleGrid ve Rackspace bulunmaktadır ).


Öncelikle MongoDB Atlas'ta bir hesap oluşturmanız gerekecek (bu ücretsizdir ve sadece temel iletişim bilgilerini girmenizi ve hizmet şartlarını kabul etmenizi gerektirir).

Giriş yaptıktan sonra ana ekrana yönlendirileceksiniz :

1\.Genel Bakış bölümündeki + Oluştur düğmesine tıklayın .

![Test](./assets/72-print.png)

2\.Bu işlem, Kümenizi Dağıtın ekranını açacaktır . M0 FREE seçeneği şablonuna tıklayın .

![Test](./assets/73-print.png)

3\.Sayfayı aşağı kaydırarak seçebileceğiniz farklı seçenekleri görebilirsiniz.

![Test](./assets/74-print.png)

- Kümenizin adını Küme Adı *Cluster0* bölümünden değiştirebilirsiniz. Bu eğitimde şimdilik bu şekilde bırakıyoruz .
- Önceden örnek veri setini yükle onay kutusunun işaretini kaldırın , çünkü daha sonra kendi örnek verilerimizi içe aktaracağız.
- Sağlayıcı ve Bölge bölümlerinden herhangi bir sağlayıcıyı ve bölgeyi seçin . Farklı bölgeler farklı sağlayıcılar sunmaktadır.
- Etiketler isteğe bağlıdır. Burada etiket kullanmayacağız.
- "Dağıtım oluştur" düğmesine tıklayın (kümenin oluşturulması birkaç dakika sürecektir).

4\.Bu işlem Güvenlik Hızlı Başlangıç ​​bölümünü açacaktır .

![Test](./assets/75-print.png)

- Veritabanına erişmek için uygulamanızın kullanacağı bir kullanıcı adı ve şifre girin (yukarıda "cooluser" adında yeni bir giriş oluşturduk). Kimlik bilgilerini kopyalayıp güvenli bir yere kaydedin, çünkü bunlara daha sonra ihtiyacımız olacak. " Kullanıcı Oluştur" düğmesine tıklayın.

**Not**: MongoDB kullanıcı şifrenizde özel karakterler kullanmaktan kaçının, çünkü mongoose bağlantı dizesini doğru şekilde ayrıştırmayabilir.

- Geçerli bilgisayarınızdan erişime izin vermek için "Geçerli IP adresiyle ekle" seçeneğini belirleyin.

- *0.0.0.0/0IP* Adresi alanına adresi girin ve ardından Giriş Ekle düğmesine tıklayın. Bu, MongoDB'ye her yerden erişime izin vermek istediğimizi bildirir.

**Not:** Veritabanınıza ve diğer kaynaklarınıza bağlanabilecek IP adreslerini sınırlamak en iyi uygulamadır. Burada, dağıtım sonrasında isteğin nereden geleceğini bilmediğimiz için her yerden bağlantıya izin veriyoruz.

- Bitir ve Kapat düğmesine tıklayın .

5\.Bu işlem aşağıdaki ekranı açacaktır. " Genel Bakışa Git " düğmesine tıklayın.

![Test](./assets/76-print.png)

6\.Genel Bakış ekranına geri döneceksiniz . Soldaki Dağıtım menüsünün altındaki Veritabanı bölümüne tıklayın . Koleksiyonlara Gözat düğmesine tıklayın.

![Test](./assets/77-print.png)

7\.Bu işlem Koleksiyonlar bölümünü açacaktır . Kendi Verilerimi Ekle düğmesine tıklayın.

![Test](./assets/79-print.png)


8\.Bu işlem Veritabanı Oluştur ekranını açacaktır .

![Test](./assets/80-print.png)

- Yeni veritabanı için adı şu şekilde girin *local_library*: .
- Koleksiyonun adını şu şekilde girin *Collection0*: .
- Veritabanını oluşturmak için Oluştur düğmesine tıklayın .

9\.Oluşturulan veritabanınızla Koleksiyonlar ekranına geri döneceksiniz .

![Test](./assets/81-print.png)

-Küme genel görünümüne geri dönmek için Genel Bakış sekmesine tıklayın .

10\.Cluster0 Genel Bakış ekranından Bağlan düğmesine tıklayın .

![Test](./assets/82-print.png)

11\.Bu işlem , "Cluster0'a Bağlan" ekranını açacaktır .

![Test](./assets/83-print.png)

- Veritabanı kullanıcınızı seçin.
- Gösterildiği gibi Sürücüler kategorisini, ardından Node.js sürücüsünü ve Sürümünü seçin .
- Sürücüyü önerildiği gibi KURMAYIN .
- Bağlantı dizesini kopyalamak için Kopyala simgesine tıklayın .
- Bunu yerel metin düzenleyicinize yapıştırın.
- *&lt;password&gt;* Bağlantı dizesindeki yer tutucuyu kullanıcı şifrenizle değiştirin .
- *...mongodb.net/local_library?retryWrites...* Seçeneklerden ( ) önce yola "local_library" veritabanı adını ekleyin.
- Bu metin dizisini içeren dosyayı güvenli bir yere kaydedin.

Veritabanını oluşturdunuz ve ona erişmek için kullanılabilecek bir URL'niz (kullanıcı adı ve şifre ile birlikte) var. Bu, aşağıdakine benzer bir şey olacaktır:*mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0*

**Mongoose'u yükleyin.**
Komut istemini açın ve iskelet Yerel Kütüphane web sitenizi oluşturduğunuz dizine gidin . Mongoose'u (ve bağımlılıklarını) yüklemek ve package.json dosyanıza eklemek için aşağıdaki komutu girin ( yukarıdaki Mongoose Temel Kılavuzu'nu okurken zaten yapmadıysanız) .

```BASH
npm install mongoose
```

**MongoDB'ye bağlanın**
Projenizin kök dizininden bin/www klasörünü açın ve port numarasını ayarladığınız satırın altına aşağıdaki metni kopyalayın *app.set("port", port);*. Veritabanı URL dizesini (' buraya_veritabanınızın_url_adresini_ekleyin ') kendi veritabanınızı temsil eden konum URL'siyle değiştirin (yani, MongoDB Atlas'tan aldığınız bilgileri kullanarak ).

```js
// Set up mongoose connection
const mongoose = require("mongoose");

const mongoDB = "insert_your_database_url_here";

connectMongoose()
  .then(startServer)
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

async function connectMongoose() {
  await mongoose.connect(mongoDB);

  // Add connection error handlers
  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
  });
}
```

Yukarıda Mongoose kılavuzunda da belirtildiği gibi , bu kod veritabanına varsayılan bağlantıyı oluşturur ve oluşan hataları konsola bildirir. Ayrıca *startServer()*bağlantı başarılı olduğunda bir fonksiyonu da çağırır; bu fonksiyonu bir sonraki adımda oluşturacağız.

Oluşturulan bin/www dosyası, veritabanı bağlantısının başarılı olup olmamasına bakılmaksızın HTTP sunucusunu oluşturur ve hemen dinlemeye başlar. Bu kodu, aynı dosyanın daha aşağısında bulabilirsiniz:

```js
/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
```

Aşağıdaki kodla değiştirin; bu kod, sunucu oluşturma ve dinleme işlemlerini bir fonksiyona taşıyarak, sorun çözüldükten sonra *startServer()* yalnızca bir kez çalışmasını sağlar :*connectMongoose()*

```js
/**
 * Create HTTP server and listen on provided port, on all network
 * interfaces, once the MongoDB connection is established.
 */

var server;

function startServer() {
  server = http.createServer(app);

  server.listen(port);
  server.on("error", onError);
  server.on("listening", onListening);
}
```

**Not**: Veritabanı bağlantı kodunu app.js kodumuza da koyabilirdik . Ancak bunu uygulamanın giriş noktasına koymak, uygulama ve veritabanını birbirinden ayırır ve test kodunu çalıştırmak için farklı bir veritabanı kullanmayı kolaylaştırır.

Yukarıda gösterildiği gibi veritabanı kimlik bilgilerini kaynak koduna doğrudan yazmanın önerilmediğini unutmayın. Bunu burada yapmamızın nedeni, temel bağlantı kodunu göstermesi ve geliştirme sırasında bu ayrıntıların sızdırılmasının hassas bilgileri açığa çıkaracağı veya bozacağı konusunda önemli bir risk olmamasıdır. Üretime dağıtım yaparken bunu daha güvenli bir şekilde nasıl yapacağınızı göstereceğiz !

**Yerel Kütüphane Şemasının Tanımlanması**
Yukarıda belirtildiği gibi, her model için ayrı bir modül tanımlayacağız . Öncelikle proje kök dizininde ( /models ) modellerimiz için bir klasör oluşturun ve ardından her model için ayrı dosyalar oluşturun:

```
/express-locallibrary-tutorial  # the project root
  /models
    author.js
    book.js
    bookinstance.js
    genre.js
```

**Yazar modeli**
Aşağıda gösterilen şema kodunu kopyalayın ve ./models/author.js *Author* dosyanıza yapıştırın . Şema, bir yazarın ad ve soyadları için SchemaType'lara (zorunlu, en fazla 100 karakter) ve doğum ve ölüm tarihleri ​​için alanlara sahip olduğunu tanımlar.*StringDate*

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }

  return fullname;
});

// Virtual for author's URL
AuthorSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/author/${this._id}`;
});

// Export model
module.exports = mongoose.model("Author", AuthorSchema);
```

Ayrıca AuthorSchema için "url" adında sanal bir değişken tanımladık; bu değişken, modelin belirli bir örneğine ulaşmak için gereken mutlak URL'yi döndürür. Şablonlarımızda belirli bir yazara bağlantı almamız gerektiğinde bu özelliği kullanacağız.

Not: URL'lerimizi şemada sanal olarak tanımlamak iyi bir fikirdir çünkü bu sayede bir öğenin URL'sinin yalnızca tek bir yerde değiştirilmesi gerekir. Şu anda, bu URL'yi kullanan bir bağlantı çalışmaz çünkü bireysel model örnekleri için kod işleyen herhangi bir rotamız yok. Bunları daha sonraki bir makalede kuracağız!

Modülün sonunda modeli dışa aktarıyoruz.

**Kitap modeli**
Aşağıda gösterilen şema kodunu kopyalayın ve ./models/book.jsBook dosyanıza yapıştırın . Bunun çoğu yazar modeline benzer; bir dizi dize alanı ve belirli kitap kayıtlarının URL'sini almak için sanal bir alan içeren bir şema tanımladık ve modeli dışa aktardık.

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

// Virtual for book's URL
BookSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/book/${this._id}`;
});

// Export model
module.exports = mongoose.model("Book", BookSchema);
```

Buradaki temel fark, diğer modellere iki referans oluşturmuş olmamızdır:

- Yazar, tek bir model nesnesine yapılan bir referanstır *Author* ve zorunludur.
- "Genere" ifadesi, model nesnelerinden oluşan bir diziye referans verir *Genre*. Bu nesneyi henüz tanımlamadık!

**BookInstance modeli**
Son olarak, aşağıda gösterilen şema kodunu kopyalayın ve ./models/bookinstance.jsBookInstance dosyanıza yapıştırın . Bu, birinin ödünç alabileceği bir kitabın belirli bir kopyasını temsil eder ve kopyanın mevcut olup olmadığı, ne zaman iade edilmesinin beklendiği ve "baskı" (veya sürüm) ayrıntıları hakkında bilgi içerir.*BookInstance*

```js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true }, // reference to the associated book
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});

// Virtual for bookinstance's URL
BookInstanceSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/bookinstance/${this._id}`;
});

// Export model
module.exports = mongoose.model("BookInstance", BookInstanceSchema);
```

Burada gösterdiğimiz yeni özellikler saha seçenekleridir:

*enum* Bu, bir dizenin izin verilen değerlerini belirlememizi sağlar. Bu örnekte, kitaplarımızın kullanılabilirlik durumunu belirtmek için kullanıyoruz (enum kullanmak, yazım hatalarını ve durumumuz için keyfi değerleri önleyebileceğimiz anlamına gelir).
*default due_back*: Yeni oluşturulan kitap örnekleri için varsayılan durumu "Bakım" ve varsayılan tarihi *now*(tarihi ayarlarken Date fonksiyonunu nasıl çağırabileceğinize dikkat edin!) olarak ayarlamak için default kullanıyoruz .
Geri kalan her şey önceki şemamızdan tanıdık gelmeli.

**Tür modeli - meydan okuma**
./models/genre.js dosyasını açın ve türleri (örneğin, kitabın türü, kurgu mu kurgu dışı mı, aşk romanı mı askeri tarih mi vb.) saklamak için bir şema oluşturun.

Tanım, diğer modellere çok benzer olacaktır:

- Modelin, türü tanımlamak için *String* kullanılan bir SchemaType'ı olmalıdır.*name*
- Bu isim zorunlu olmalı ve 3 ile 100 karakter arasında olmalıdır.
- Türün URL'si için . adında sanal bir değişken tanımlayın *url*.
- Modeli dışa aktarın.

**Test Etme — Bazı Öğeler Oluşturma**
İşte bu kadar. Site için tüm modelleri ayarladık!

Modelleri test etmek (ve sonraki makalelerimizde kullanabileceğimiz bazı örnek kitaplar ve diğer öğeler oluşturmak) için şimdi her türden öğe oluşturmak üzere bağımsız bir komut dosyası çalıştıracağız:

1\.express-locallibrary-tutorial dizininin içine (aynı seviyede ) populatedb.js dosyasını indirin (veya oluşturun) .*package.json*

**Not**: Bu kod *populatedb.jsJavaScript* öğrenmede faydalı olabilir, ancak bu eğitim için JavaScript'i anlamak gerekli değildir.

2\.Komut isteminde `node` komutunu kullanarak betiği çalıştırın ve MongoDB veritabanınızın URL'sini (daha önce `insert_your_database_url_here` yer tutucusunun yerine koyduğunuz URL'nin aynısı *app.js*) parametre olarak geçirin:

```bash
node populatedb <your MongoDB url>
```

**Not:** Windows'ta veritabanı URL'sini çift tırnak ("") içine almanız gerekir. Diğer işletim sistemlerinde tek tırnak (') kullanmanız gerekebilir.

3\.Komut dosyası, oluşturulan öğeleri terminalde görüntüleyerek, tüm işlem tamamlanana kadar çalışmalıdır.

**Not:** MongoDB Atlas'taki veritabanınıza gidin ( Koleksiyonlar sekmesinde). Artık Kitaplar, Yazarlar, Türler ve Kitap Örnekleri'nin ayrı ayrı koleksiyonlarına inebilir ve tek tek belgeleri inceleyebilirsiniz.


## Express Eğitimi Bölüm 4: Rotalar ve denetleyiciler
Bu eğitimde, LocalLibrary web sitesinde ihtiyaç duyacağımız tüm kaynak uç noktaları için "sahte" işleyici fonksiyonlarla rotalar (URL işleme kodu) oluşturacağız . Tamamlandığında, sonraki makalelerde gerçek işleyici fonksiyonlarla genişletebileceğimiz modüler bir rota işleme kodu yapısına sahip olacağız. Ayrıca Express kullanarak modüler rotalar oluşturmanın nasıl yapılacağını da çok iyi anlayacağız.

**Genel Bakış**
Son eğitim makalesinde , veritabanıyla etkileşim kurmak için Mongoose modellerini tanımladık ve bazı başlangıç ​​kütüphane kayıtlarını oluşturmak için (bağımsız) bir komut dosyası kullandık. Şimdi bu bilgileri kullanıcılara sunmak için kodu yazabiliriz. Yapmamız gereken ilk şey, sayfalarımızda hangi bilgileri görüntülemek istediğimizi belirlemek ve ardından bu kaynakları döndürmek için uygun URL'leri tanımlamaktır. Daha sonra, bu sayfaları görüntülemek için rotaları (URL işleyicileri) ve görünümleri (şablonlar) oluşturmamız gerekecek.

Aşağıdaki diyagram, HTTP isteği/yanıtı işlenirken uygulanması gereken temel veri akışını ve unsurları hatırlatmak amacıyla verilmiştir. Diyagramda, görünümler ve yönlendirmelere ek olarak, istekleri yönlendiren kodu, istekleri gerçekten işleyen koddan ayıran "denetleyiciler" (controllers) fonksiyonları da gösterilmektedir.

Modelleri zaten oluşturduğumuza göre, oluşturmamız gereken başlıca şeyler şunlardır:

- Desteklenen istekleri (ve istek URL'lerinde kodlanmış herhangi bir bilgiyi) uygun denetleyici işlevlerine iletmek için kullanılan "yönlendirme yolları".
- Denetleyici fonksiyonları, modellerden istenen verileri alır, verileri görüntüleyen bir HTML sayfası oluşturur ve kullanıcının tarayıcıda görüntülemesi için sayfayı geri gönderir.
- Denetleyiciler tarafından verileri görüntülemek için kullanılan görünümler (şablonlar).

![Test](./assets/84-print.png)

Sonuç olarak, kitaplar, türler, yazarlar ve kitap örnekleri için listeler ve ayrıntılı bilgiler gösteren sayfalarımız olabilir; ayrıca kayıt oluşturma, güncelleme ve silme işlemleri için de sayfalarımız olabilir. Bunların hepsini tek bir makalede belgelemek zor. Bu nedenle, bu makalenin büyük bir kısmı "örnek" içerik döndürecek şekilde rotalarımızı ve denetleyicilerimizi kurmaya odaklanacaktır. Sonraki makalelerimizde denetleyici yöntemlerini model verileriyle çalışacak şekilde genişleteceğiz.

Aşağıdaki ilk bölüm, Express Router ara yazılımının nasıl kullanılacağına dair kısa bir "giriş" sunmaktadır . Daha sonraki bölümlerde LocalLibrary rotalarını kurarken bu bilgiyi kullanacağız.

**Rota rehberi**
Rota, bir HTTP fiilini ( *GET, POST, PUT, DELETE,* vb.), bir URL yolunu/desenini ve bu deseni işlemek için çağrılan bir fonksiyonu ilişkilendiren Express kodunun bir bölümüdür .

Rota oluşturmanın çeşitli yolları vardır. Bu eğitimde, sitenin belirli bir bölümüne ait rota işleyicilerini bir araya getirmemize ve bunlara ortak bir rota öneki kullanarak erişmemize olanak sağladığı için ara yazılımı kullanacağız *express.Router*. Kütüphane ile ilgili tüm rotalarımızı bir "katalog" modülünde tutacağız ve kullanıcı hesaplarını veya diğer işlevleri yönetmek için rotalar eklersek, bunları ayrı olarak gruplandırabiliriz.


Bu bölümün geri kalanı, *Router* bu özelliklerin rotaları tanımlamak için nasıl kullanılabileceğine dair bir genel bakış sunmaktadır.

**Ayrı rota modüllerinin tanımlanması ve kullanılması**
Aşağıdaki kod, bir rota modülü oluşturmanın ve ardından bunu bir Express uygulamasında kullanmanın somut bir örneğini sunmaktadır.

Öncelikle wiki.js adlı bir modülde wiki için rotalar oluşturuyoruz . Kod önce Express uygulama nesnesini içe aktarıyor, bu *Router* nesneyi kullanarak bir nesne alıyor ve ardından bir yöntem kullanarak ona birkaç rota ekliyor *get()*. Son olarak modül *Router* nesneyi dışa aktarıyor.

```js
// wiki.js - Wiki route module.

const express = require("express");

const router = express.Router();

// Home page route.
router.get("/", (req, res) => {
  res.send("Wiki home page");
});

// About page route.
router.get("/about", (req, res) => {
  res.send("About this wiki");
});

module.exports = router;
```

**Not:** Yukarıda, rota işleyici geri çağırma fonksiyonlarımızı doğrudan yönlendirici fonksiyonlarında tanımlıyoruz. LocalLibrary'de bu geri çağırma fonksiyonlarını ayrı bir denetleyici modülünde tanımlayacağız.

Ana uygulama dosyamızda router modülünü kullanmak için öncelikle *require()* route modülünü ( wiki.js ) oluşturuyoruz. Ardından, Express *use()* uygulamasını çağırarak Router'ı ara katman işleme yoluna ekliyoruz ve URL yolu olarak 'wiki' belirtiyoruz.

```js
const wiki = require("./wiki.js");

// …
app.use("/wiki", wiki);
```

Wiki yönlendirme modülümüzde tanımlanan iki rota daha sonra */wiki/* ve adreslerinden erişilebilir hale gelir */wiki/about/.*

**Rota fonksiyonları**
Yukarıdaki modülümüz, birkaç tipik rota fonksiyonu tanımlar. "Hakkımızda" rotası (aşağıda yeniden üretilmiştir), *Router.get()* yalnızca HTTP GET isteklerine yanıt veren bir yöntem kullanılarak tanımlanmıştır. Bu yöntemin ilk argümanı URL yoludur, ikincisi ise bu yola sahip bir HTTP GET isteği alındığında çağrılacak bir geri çağırma fonksiyonudur.

```js
router.get("/about", (req, res) => {
  res.send("About this wiki");
});
```

Geri çağrı fonksiyonu, HTTP İstek nesnesini, HTTP yanıtını ve ara katman zincirindeki bir sonraki fonksiyonu içerecek üç argüman alır (genellikle şu şekilde adlandırılır: *req, res, ).next*

**Not:** Yönlendirici fonksiyonları Express ara yazılımlarıdır ; bu da ya isteği tamamlamaları (yanıtlamaları) ya da *next* zincirdeki fonksiyonu çağırmaları gerektiği anlamına gelir. Yukarıdaki örnekte isteği kullanarak tamamlıyoruz *send()*, bu nedenle *next* argümanı kullanılmıyor (ve belirtmemeyi tercih ediyoruz).

Yukarıdaki yönlendirme fonksiyonu tek bir geri çağırma fonksiyonu alır, ancak istediğiniz kadar geri çağırma fonksiyonu argümanı veya bir geri çağırma fonksiyonu dizisi belirtebilirsiniz. Her fonksiyon ara katman zincirinin bir parçasıdır ve zincire eklendiği sırayla çağrılır (önceki bir fonksiyon isteği tamamlamadığı sürece).

Buradaki geri çağırma fonksiyonu, *send()* ( ) yoluna sahip bir GET isteği aldığımızda "Bu wiki hakkında" dizesini döndürmek için yanıtı çağırır. İstek/yanıt döngüsünü sonlandırmak için bir dizi başka yanıt yöntemi de/*about* vardır . Örneğin, bir JSON yanıtı göndermek veya bir dosya göndermek için çağırabilirsiniz . Kütüphaneyi oluştururken en sık kullanacağımız yanıt yöntemi , şablonlar ve veriler kullanarak HTML dosyaları oluşturan ve döndüren yöntemidir—bunun hakkında daha sonraki bir makalede daha ayrıntılı konuşacağız!res.*json()res.sendFile()render()*

**HTTP fiilleri**
Yukarıdaki örnek rotalar, belirli bir yola sahip *Router.get()* HTTP isteklerine yanıt vermek için bu yöntemi kullanmaktadır.*GET*

Ayrıca , çoğunlukla aynı şekilde kullanılan Routerdiğer tüm HTTP fiilleri için de yönlendirme yöntemleri sağlar : *post(), put(), delete(), options(), trace(), copy(), lock(), mkcol(), move(), purge(), propfind(), proppatch(), unlock(), report(), mkactivity(), checkout(), merge(), m-search(), notify(), subscribe(), unsubscribe(), patch(), search(), ve connect().*

Örneğin, aşağıdaki kod önceki /*about* rotayla tamamen aynı şekilde davranır, ancak yalnızca HTTP POST isteklerine yanıt verir.

```js
router.post("/about", (req, res) => {
  res.send("About this wiki");
});
```

Web siteleri ideal olarak gerçekleştirilen işleme en uygun rota yöntemini (ve HTTP yöntemini) kullanmalıdır. Örneğin, istemci tarafında oluşturulan bir uygulama, *Router.get()* veritabanından okuma, *Router.post()* yeni kayıt oluşturma, *Router.put()* kayıtları *Router.patch()* güncelleme ve *Router.delete()* veri silme işlemleri için aynı yöntemi kullanmalıdır.

Ancak, bu eğitimde gösterilen gibi sunucu tarafında işlenen uygulamaların, *Router.post()* veri değiştiren tüm rotalar için genellikle `<request>` kullandığını unutmayın. Bunun nedeni, varsayılan olarak HTML öğelerinin yalnızca `<request>` ve `<request>` istekleri *&lt;form&gt;* gönderebilmesidir .*GETPOST*

Bu sınırlama için çeşitli geçici çözümler mevcuttur; örneğin, "istenilen" HTTP fiilini bir POSTistekte kodlamak ve isteği yönlendiriciye iletmeden önce uygun HTTP fiiline dönüştürmek için Express'in yöntem geçersiz kılma ara yazılımını kullanmak gibi. Temel uygulamalar için, doğru HTTP fiillerini kullanmak için kodu yeniden yazmak genellikle gereksizdir. Sunucu günlük kaydını iyileştirmek veya sunucunun aynı uç nokta üzerinden hem sunucu hem de istemci tarafında oluşturulan içeriği işlemesi gerekiyorsa bu daha faydalı olabilir.

**Rota yolları**
Rota yolları, isteklerin yapılabileceği uç noktaları tanımlar. Şimdiye kadar gördüğümüz örnekler sadece metin dizeleriydi ve aynen yazıldığı gibi kullanıldı: '/', '/about', '/book', '/any-random.path'.

Rota yolları aynı zamanda dize kalıpları da olabilir. Dize kalıpları, eşleştirilecek uç noktaların kalıplarını tanımlamak için bir tür düzenli ifade sözdizimi kullanır. LocalLibrary için rotalarımızın çoğu düzenli ifadeler yerine dizeler kullanacaktır. Ayrıca, bir sonraki bölümde ele alınacağı gibi rota parametrelerini de kullanacağız.

**Rota parametreleri**
Rota parametreleri, URL'deki belirli konumlardaki değerleri yakalamak için kullanılan adlandırılmış URL bölümleridir */:your_parameter_name/* . Adlandırılmış bölümlerin başına iki nokta üst üste ve ardından ad gelir (Örn., ). Yakalanan değerler, *req.params* parametre adları anahtar olarak kullanılarak nesneye kaydedilir (Örn., *req.params.your_parameter_name*).

Örneğin, kullanıcılar ve kitaplar hakkında bilgi içerecek şekilde kodlanmış bir URL'yi ele alalım: . Bu bilgiyi aşağıdaki gibi ve yol parametreleriyle *http://localhost:3000/users/34/books/8989* çıkarabiliriz :*userIdbookId*

```js
app.get("/users/:userId/books/:bookId", (req, res) => {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params);
});
```

**Not:** /book/create URL'si , */book/:bookId* (çünkü herhangi bir:*bookId* dize için yer tutucudur , bu nedenle eşleşir) gibi bir rota ile eşleştirilecektir . Gelen bir URL ile eşleşen ilk rota kullanılacaktır, bu nedenle URL'leri özel olarak işlemek istiyorsanız , rota işleyicisini rotanızdan önce tanımlamanız gerekir .*create/book/create/book/:bookId*

Rota parametre adları (örneğin, yukarıdaki `<route>`) bir harf, `<label>` veya `<label>* bookId*` ile başlayan geçerli herhangi bir JavaScript tanımlayıcısı olabilir . İlk karakterden sonra rakamlar ekleyebilirsiniz, ancak tire ve boşluk ekleyemezsiniz. Boşluk, tire, ifade veya başka herhangi bir karakter de dahil olmak üzere geçerli JavaScript tanımlayıcıları olmayan adlar da kullanabilirsiniz, ancak bunları tırnak içinde bir dizeyle tanımlamanız ve köşeli parantez gösterimi kullanarak erişmeniz gerekir. Örneğin:*_$*

```js
app.get('/users/:"user id"/books/:"book-id"', (req, res) => {
  // Access quoted param using bracket notation
  const user = req.params["user id"];
  const book = req.params["book-id"];
  res.send({ user, book });
});
```

**Jokerler**
Joker karakter parametreleri, birden fazla segmentteki bir veya daha fazla karakterle eşleşir ve her segmenti bir dizideki değer olarak döndürür. Normal parametrelerle aynı şekilde tanımlanırlar, ancak önlerine bir yıldız işareti (*) eklenir.

Örneğin, şu URL'yi ele alalım ; joker karakter kullanarak *http://localhost:3000/users/34/books/8989* sonrasındaki tüm bilgileri çıkarabiliriz :*users/example*

```js
app.get("/users/*example", (req, res) => {
  // req.params would contain { "example": ["34", "books", "8989"]}
  res.send(req.params);
});
```

**İsteğe bağlı parçalar**
Süslü parantezler, yolun isteğe bağlı kısımlarını tanımlamak için kullanılabilir. Örneğin, aşağıda herhangi bir uzantıya sahip (veya uzantısı olmayan) bir dosya adıyla eşleştirme yapıyoruz.

```js
app.get("/file/:filename{.:ext}", (req, res) => {
  // Given URL: http://localhost:3000/file/somefile.md`
  // req.params would contain { "filename": "somefile", "ext": "md"}
  res.send(req.params);
});
```

**Ayrılmış karakterler**
Aşağıdaki karakterler ayrılmıştır: *(()[]?+!)*. Bunları kullanmak istiyorsanız, ters eğik çizgi *( \)* ile kaçmanız gerekir.

*|* Normal ifadelerde dikey çizgi (/) karakterini de kullanamazsınız .

Rota oluşturmaya başlamak için ihtiyacınız olan her şey bu kadar. Gerekirse, Express belgelerinde daha fazla bilgi bulabilirsiniz: Temel yönlendirme ve Yönlendirme kılavuzu . Aşağıdaki bölümler, LocalLibrary için rotalarımızı ve denetleyicilerimizi nasıl kuracağımızı göstermektedir.

**Rota fonksiyonlarında hataların ve istisnaların ele alınması**
Daha önce gösterilen rota fonksiyonlarının tümü , sırasıyla isteği ve yanıtı temsil eden *req* ve argümanlarına sahiptir. Rota fonksiyonlarına ayrıca , hataları veya istisnaları Express ara katman zincirine iletmek için çağrılabilecek bir geri çağırma fonksiyonu içeren üçüncü bir argüman olan da iletilir; bu hatalar veya istisnalar nihayetinde genel hata işleme kodunuza iletilir.*res next*

Express 5'ten itibaren, bir rota işleyicisi daha sonra reddedilen bir Promise *next* döndürürse, `reject` otomatik olarak reddedilme değeriyle çağrılır ; bu nedenle, Promise'ler kullanılırken rota fonksiyonlarında hata işleme kodu gerekmez. Bu, özellikle `asenkron` ve ` asenkron` kullanılırken, Promise tabanlı API'lerle çalışırken çok daha kompakt bir kod elde edilmesini sağlar .*async await*

Örneğin, aşağıdaki kod, *find()* veritabanını sorgulamak ve ardından sonucu görüntülemek için bu yöntemi kullanır.

```js
exports.get("/about", async (req, res, next) => {
  const successfulResult = await About.find({}).exec();
  res.render("about_view", { title: "About", list: successfulResult });
});
```

Aşağıdaki kod, aynı örneği bir promise zinciri kullanarak göstermektedir. İsterseniz *catch()* hatayı yakalayabilir ve kendi özel işleme mekanizmanızı uygulayabilirsiniz.

```js
exports.get(
  "/about",
  // Removed 'async'
  (req, res, next) =>
    About.find({})
      .exec()
      .then((successfulResult) => {
        res.render("about_view", { title: "About", list: successfulResult });
      })
      .catch((err) => {
        next(err);
      }),
);
```

**Not:** Çoğu modern API asenkron ve promise tabanlıdır, bu nedenle hata yönetimi genellikle oldukça basittir. Bu eğitim için hata yönetimi hakkında bilmeniz gerekenler gerçekten bu kadar!

Express 5, senkron kodda fırlatılan istisnaları otomatik olarak yakalar ve iletir:

```js
app.get("/", (req, res) => {
  // Express will catch this
  throw new Error("SynchronousException");
});
```

Ancak, rota işleyicileri veya ara yazılımlar tarafından çağrılan eşzamansız kodda oluşan istisnaları yakalamalısınız *catch()*. Bunlar varsayılan kod tarafından yakalanmayacaktır:

```js
app.get("/", (req, res, next) => {
  setTimeout(() => {
    try {
      // You must catch and propagate this error yourself
      throw new Error("AsynchronousException");
    } catch (err) {
      next(err);
    }
  }, 100);
});
```

Son olarak, hata döndüren veya geri çağırma fonksiyonuyla sonuçlanan eski tip eşzamansız yöntemler kullanıyorsanız, hatayı kendiniz yaymanız gerekir. Aşağıdaki örnek bunu nasıl yapacağınızı göstermektedir.

```js
router.get("/about", (req, res, next) => {
  About.find({}).exec((err, queryResults) => {
    if (err) {
      // Propagate the error
      return next(err);
    }
    // Successful, so render
    res.render("about_view", { title: "About", list: queryResults });
  });
});
```

**Yerel Kütüphane için gerekli rotalar**
Sayfalarımız için nihayetinde ihtiyaç duyacağımız URL'ler aşağıda listelenmiştir; burada "object" yerine modellerimizin her birinin adı (book, bookinstance, genre, author), " objects" ise "object" kelimesinin çoğulu ve "id" _id ise varsayılan olarak her Mongoose model örneğine verilen benzersiz örnek alanıdır ( ).

- *catalog/*— Ana sayfa/dizin sayfası.
- *catalog/&lt;objects&gt;/*— Tüm kitapların, kitap örneklerinin, türlerin veya yazarların listesi (örneğin, /catalog/books/, /catalog/genres/, vb.)
- *catalog/&lt;object&gt;/&lt;id&gt;*— Belirtilen alan değerine sahip belirli bir kitap, kitap örneği, tür veya yazar için detay sayfası _id(örneğin, /catalog/book/584493c1f4887f06c0e67d37).
- *catalog/&lt;object&gt;/create*— Yeni bir kitap, kitap örneği, tür veya yazar oluşturmak için kullanılan form (örneğin, /catalog/book/create).
- *catalog/&lt;object&gt;/&lt;id&gt;/update*— Belirli bir kitabı, kitap örneğini, türü veya yazarı verilen alan değeriyle güncellemek için kullanılan form _id(örneğin, /catalog/book/584493c1f4887f06c0e67d37/update).
- *catalog/&lt;object&gt;/&lt;id&gt;/delete_id*— Belirtilen alan değerine sahip (*örneğin, /catalog/book/584493c1f4887f06c0e67d37/delete*) belirli bir kitabı, kitap örneğini, türü veya yazarı silmek için kullanılan form .

İlk ana sayfa ve liste sayfaları herhangi bir ek bilgi içermez. Döndürülen sonuçlar model türüne ve veritabanındaki içeriğe bağlı olsa da, bilgileri almak için çalıştırılan sorgular her zaman aynı olacaktır (benzer şekilde nesne oluşturma için çalıştırılan kod da her zaman benzer olacaktır).

Bunun aksine, diğer URL'ler belirli bir belge/model örneği üzerinde işlem yapmak için kullanılır; bunlar, URL'de öğenin kimliğini kodlar ( *&lt;id&gt;* yukarıda gösterildiği gibi). Kodlanmış bilgileri çıkarmak ve rota işleyicisine iletmek için yol parametrelerini kullanacağız (ve daha sonraki bir makalede, veritabanından hangi bilgileri alacağımızı dinamik olarak belirlemek için bunu kullanacağız). Bilgileri URL'mizde kodlayarak, belirli bir türdeki her kaynak için yalnızca bir rotaya ihtiyacımız olur (örneğin, her bir kitap öğesinin görüntülenmesini işlemek için bir rota).

Sonraki adımda, yukarıdaki tüm URL'ler için rota işleyici geri çağırma fonksiyonlarımızı ve rota kodumuzu oluşturuyoruz.

**Rota işleyici geri çağırma fonksiyonlarını oluşturun.**
Rota tanımlarımızı yapmadan önce, öncelikle bu rotaların çağıracağı tüm örnek/iskelet geri çağırma fonksiyonlarını oluşturacağız. Geri çağırma fonksiyonları *Book, BookInstance, Genre,* ve için ayrı "denetleyici" modüllerinde saklanacaktır *Author* (herhangi bir dosya/modül yapısı kullanabilirsiniz, ancak bu proje için uygun bir ayrıntı düzeyi gibi görünüyor).

Öncelikle proje kök dizininde denetleyicilerimiz için bir klasör oluşturun ( /controllers ) ve ardından her bir modeli işlemek için ayrı denetleyici dosyaları/modülleri oluşturun:

```
/express-locallibrary-tutorial  # the project root
  /controllers
    authorController.js
    bookController.js
    bookinstanceController.js
    genreController.js
```

**Yazar denetleyicisi**
/controllers/authorController.js dosyasını açın ve aşağıdaki kodu yazın:

```js
const Author = require("../models/author");

// Display list of all Authors.
exports.author_list = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author list");
};

// Display detail page for a specific Author.
exports.author_detail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};

// Display Author create form on GET.
exports.author_create_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create GET");
};

// Handle Author create on POST.
exports.author_create_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author create POST");
};

// Display Author delete form on GET.
exports.author_delete_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete GET");
};

// Handle Author delete on POST.
exports.author_delete_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

// Display Author update form on GET.
exports.author_update_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle Author update on POST.
exports.author_update_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update POST");
};
```

Bu modül öncelikle, *Author* daha sonra verilerimize erişmek ve güncellemek için kullanacağımız modeli gerektirir. Ardından, işlemek istediğimiz her URL için işlevler dışa aktarır. Oluşturma, güncelleme ve silme işlemlerinin formlar kullandığını ve bu nedenle form gönderim isteklerini işlemek için ek yöntemlere sahip olduğunu unutmayın — bu yöntemleri daha sonra "formlar makalesinde" ele alacağız.

İşlevler, ilgili sayfanın henüz oluşturulmadığını belirten bir dizeyle yanıt verir. Bir denetleyici işlevinin yol parametreleri alması bekleniyorsa, bunlar mesaj dizesinde ( *req.params.id* yukarıya bakınız) çıktı olarak verilir.

**BookInstance denetleyicisi**
/controllers/bookinstanceController.js dosyasını açın ve aşağıdaki kodu kopyalayın (bu kod, *Author* denetleyici modülüyle aynı kalıbı izler):

```js
const BookInstance = require("../models/bookinstance");

// Display list of all BookInstances.
exports.bookinstance_list = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance list");
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance create GET");
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance create POST");
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance delete GET");
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance update GET");
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: BookInstance update POST");
};
```

**Tür kontrolcüsü**
/controllers/genreController.js dosyasını açın ve aşağıdaki metni kopyalayın (bu, *Author* ve *BookInstance* dosyalarıyla aynı kalıbı izler):

```js
const Genre = require("../models/genre");

// Display list of all Genre.
exports.genre_list = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre list");
};

// Display detail page for a specific Genre.
exports.genre_detail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`);
};

// Display Genre create form on GET.
exports.genre_create_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create GET");
};

// Handle Genre create on POST.
exports.genre_create_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre create POST");
};

// Display Genre delete form on GET.
exports.genre_delete_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

// Handle Genre delete on POST.
exports.genre_delete_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

// Display Genre update form on GET.
exports.genre_update_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

// Handle Genre update on POST.
exports.genre_update_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
```

**Kitap kontrolörü**
/controllers/bookController.js dosyasını açın ve aşağıdaki kodu kopyalayın. Bu kod, diğer kontrol modülleriyle aynı kalıbı izler, ancak ek olarak *index()* site karşılama sayfasını görüntülemek için bir fonksiyona sahiptir:

```js
const Book = require("../models/book");

exports.index = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all books.
exports.book_list = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book list");
};

// Display detail page for a specific book.
exports.book_detail = async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
};

// Display book create form on GET.
exports.book_create_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// Handle book create on POST.
exports.book_create_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create POST");
};

// Display book delete form on GET.
exports.book_delete_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// Handle book delete on POST.
exports.book_delete_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// Display book update form on GET.
exports.book_update_get = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// Handle book update on POST.
exports.book_update_post = async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update POST");
};
```

**Katalog rota modülünü oluşturun.**
Sonraki adımda , LocalLibrary web sitesinin ihtiyaç duyduğu tüm URL'ler için rotalar oluşturacağız ; bu rotalar, önceki bölümlerde tanımladığımız denetleyici fonksiyonlarını çağıracaktır.

İskelet zaten index ve users için rotaları içeren bir ./routes klasörüne sahip. Gösterildiği gibi bu klasörün içine catalog.js adında başka bir rota dosyası oluşturun .

```
/express-locallibrary-tutorial # the project root
  /routes
    index.js
    users.js
    catalog.js
```

/routes/catalog.js dosyasını açın ve aşağıdaki kodu kopyalayın:

```js
const express = require("express");

// Require controller modules.
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

const router = express.Router();

/// BOOK ROUTES ///

// GET catalog home page.
router.get("/", book_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/book/create", book_controller.book_create_get);

// POST request for creating Book.
router.post("/book/create", book_controller.book_create_post);

// GET request to delete Book.
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST request to delete Book.
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET request to update Book.
router.get("/book/:id/update", book_controller.book_update_get);

// POST request to update Book.
router.post("/book/:id/update", book_controller.book_update_post);

// GET request for one Book.
router.get("/book/:id", book_controller.book_detail);

// GET request for list of all Book items.
router.get("/books", book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/author/create", author_controller.author_create_get);

// POST request for creating Author.
router.post("/author/create", author_controller.author_create_post);

// GET request to delete Author.
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST request to delete Author.
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET request to update Author.
router.get("/author/:id/update", author_controller.author_update_get);

// POST request to update Author.
router.post("/author/:id/update", author_controller.author_update_post);

// GET request for one Author.
router.get("/author/:id", author_controller.author_detail);

// GET request for list of all Authors.
router.get("/authors", author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);

// GET request to delete Genre.
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request to update Genre.
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST request to update Genre.
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one Genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all Genre.
router.get("/genres", genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_get,
);

// POST request for creating BookInstance.
router.post(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_post,
);

// GET request to delete BookInstance.
router.get(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_get,
);

// POST request to delete BookInstance.
router.post(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_post,
);

// GET request to update BookInstance.
router.get(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_get,
);

// POST request to update BookInstance.
router.post(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_post,
);

// GET request for one BookInstance.
router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get("/bookinstances", book_instance_controller.bookinstance_list);

module.exports = router;
```

Bu modül Express gerektirir ve ardından onu kullanarak bir nesne oluşturur *Router*. Rotaların tümü yönlendirici üzerinde ayarlanır ve daha sonra dışa aktarılır.

Rota tanımları, yönlendirici nesnesindeki *.get()* veya *.post()* yöntemleri kullanılarak yapılır. Tüm yollar dizeler kullanılarak tanımlanır (dize kalıpları veya normal ifadeler kullanmıyoruz). Belirli bir kaynağa (örneğin, kitap) etki eden rotalar, URL'den nesne kimliğini almak için yol parametrelerini kullanır.

İşleyici fonksiyonların tamamı, önceki bölümde oluşturduğumuz denetleyici modüllerinden içe aktarılıyor.

**Dizin rota modülünü güncelleyin**
Yeni rotalarımızın hepsini oluşturduk, ancak orijinal sayfaya giden bir rotamız hala mevcut. Bunun yerine, bu rotayı oluşturduğumuz yeni index sayfasına yönlendirelim /*catalog.*

/routes/index.js dosyasını açın ve mevcut rotayı aşağıdaki fonksiyonla değiştirin.

```js
// GET home page.
router.get("/", (req, res) => {
  res.redirect("/catalog");
});
```

**app.js dosyasını güncelleyin**
Son adım, rotaları ara katman yazılım zincirine eklemektir. Bunu . dosyasında yapıyoruz **app.js.**

app.js dosyasını açın ve diğer rotaların altına katalog rotasını ekleyin (dosyada zaten mevcut olması gereken diğer iki satırın altına aşağıda gösterilen üçüncü satırı ekleyin):

```js
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); // Import routes for "catalog" area of site
```

Ardından, katalog rotasını diğer rotaların altına ara katman yazılım yığınına ekleyin (dosyada zaten mevcut olması gereken diğer iki satırın altına, aşağıda gösterilen üçüncü satırı ekleyin):

```js
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.
```

**Not:** Katalog modülümüzü bir yola ekledik */catalog*. Bu, katalog modülünde tanımlanan tüm yolların başına eklenir. Örneğin, kitap listesine erişmek için URL şu şekilde olacaktır: */catalog/books/*.

İşte bu kadar. Artık LocalLibrary web sitesinde destekleyeceğimiz tüm URL'ler için yönlendirme ve iskelet fonksiyonları etkinleştirilmiş olmalı.

**Rotaları test etme**
Rotaları test etmek için öncelikle her zamanki yönteminizi kullanarak web sitesini başlatın.

- varsayılan yöntem

```BASH
# Windows
SET DEBUG=express-locallibrary-tutorial:* & npm start

# macOS or Linux
DEBUG=express-locallibrary-tutorial:* npm start
```

- Eğer daha önce nodemon'u kurduysanız , bunun yerine şunu kullanabilirsiniz:

```BASH
npm run serverstart
```

Ardından, LocalLibrary'nin çeşitli URL'lerine gidin ve hata sayfası (HTTP 404) almadığınızdan emin olun. Kolaylık sağlamak amacıyla aşağıda birkaç URL listelenmiştir:

- *http://localhost:3000/*
- *http://localhost:3000/catalog*
- *http://localhost:3000/catalog/books*
- *http://localhost:3000/catalog/bookinstances/*
- *http://localhost:3000/catalog/authors/*
- *http://localhost:3000/catalog/genres/*
- *http://localhost:3000/catalog/book/5846437593935e2f8c2aa226*
- *http://localhost:3000/catalog/book/create*

## Express Eğitimi Bölüm 5: Kütüphane verilerinin görüntülenmesi
Artık LocalLibrary web sitesindeki kitapları ve diğer verileri görüntüleyen sayfaları eklemeye hazırız . Bu sayfalar, her model türünden kaç kaydımız olduğunu gösteren bir ana sayfa ve tüm modellerimiz için liste ve detay sayfaları içerecektir. Bu süreçte, veritabanından kayıt alma ve şablon kullanma konusunda pratik deneyim kazanacağız.

**Genel Bakış**
Önceki eğitim yazılarımızda, veritabanıyla etkileşim kurmak için kullanabileceğimiz Mongoose modellerini tanımladık ve bazı başlangıç ​​kütüphane kayıtları oluşturduk. Ardından, LocalLibrary web sitesi için gerekli tüm rotaları "kukla denetleyici" fonksiyonlarıyla (yani bir sayfaya erişildiğinde "uygulanmadı" mesajı döndüren iskelet denetleyici fonksiyonlarıyla) oluşturduk.

Bir sonraki adım, kütüphane bilgilerimizi görüntüleyen sayfalar için uygun uygulamalar sağlamaktır (bilgi oluşturma, güncelleme veya silme formlarını içeren sayfaların uygulanmasına daha sonraki makalelerde değineceğiz). Bu, modellerimizi kullanarak kayıtları getirmek için denetleyici işlevlerini güncellemeyi ve bu bilgileri kullanıcılara göstermek için şablonlar tanımlamayı içerir.

Öncelikle, denetleyici fonksiyonlarında eşzamansız işlemleri nasıl yöneteceğinizi ve Pug kullanarak şablonları nasıl yazacağınızı açıklayan genel/temel konuları ele alacağız. Ardından, ana "salt okunur" sayfalarımızın her biri için, kullandıkları özel veya yeni özelliklerin kısa bir açıklamasıyla birlikte uygulamalar sunacağız.

Bu makalenin sonunda, rotaların, eşzamansız fonksiyonların, görünümlerin ve modellerin pratikte nasıl çalıştığına dair kapsamlı bir anlayışa sahip olmalısınız.

**Kütüphane verilerini görüntüleme eğitim alt makaleleri**
Aşağıdaki alt makaleler, gerekli web sitesi sayfalarını görüntüleyebilmemiz için gereken farklı özellikleri ekleme sürecini ele almaktadır. Bir sonrakine geçmeden önce bunların her birini sırayla okuyup uygulamanız gerekmektedir.

1\.**[Şablon kılavuzu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer)**
2\.**[LocalLibrary temel şablonu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)**
3\.**[Ana sayfa](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page)**
4\.**[Kitap listesi sayfası](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page)**
5\.**[BookInstance liste sayfası](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)**
6\.**[Luxon kullanarak tarih biçimlendirme](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)**
7\.**[Yazar listesi sayfası ve Tür listesi sayfası yarışması](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page)**
8\.**[Tür detay sayfası](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)**
9\.**[Kitap detay sayfası](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)**
10\.**[Yazar detay sayfası](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)**
11\.**[BookInstance detay sayfası ve meydan okuma](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)**


## Express Eğitimi Bölüm 6: Formlarla Çalışma
**[Bu eğitimde, Pug kullanarak Express'te HTML Formlarla](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms)** nasıl çalışılacağını ve özellikle veritabanından belge oluşturmak, güncellemek ve silmek için formların nasıl yazılacağını göstereceğiz .

**Genel Bakış**
HTML formu, bir web sayfasında kullanıcılardan bilgi toplamak ve bu bilgileri bir sunucuya göndermek için kullanılabilen bir veya daha fazla alan/bileşen grubudur. Formlar, kullanıcı girdisi toplamak için esnek bir mekanizmadır çünkü birçok farklı veri türü için uygun form girişleri mevcuttur—metin kutuları, onay kutuları, radyo düğmeleri, tarih seçiciler vb. Formlar ayrıca, POSTçapraz site istek sahteciliği korumasıyla veri göndermemize olanak tanıdığı için sunucuyla veri paylaşmanın nispeten güvenli bir yoludur.

Formlarla çalışmak karmaşık olabilir! Geliştiricilerin form için HTML yazması, sunucuda (ve muhtemelen tarayıcıda da) girilen verileri doğrulayıp düzgün bir şekilde temizlemesi, geçersiz alanlar hakkında kullanıcıları bilgilendirmek için hata mesajlarıyla formu yeniden göndermesi, veriler başarıyla gönderildiğinde bunları işlemesi ve son olarak kullanıcıya başarıyı belirtmek için bir şekilde yanıt vermesi gerekir.

Bu eğitimde, yukarıdaki işlemlerin Express'te nasıl gerçekleştirilebileceğini göstereceğiz . Bu süreçte, kullanıcıların kütüphaneden öğeler oluşturmasına, düzenlemesine ve silmesine olanak sağlamak için LocalLibrary web sitesini genişleteceğiz .

**Not:** Belirli rotaları yalnızca kimliği doğrulanmış veya yetkilendirilmiş kullanıcılara nasıl kısıtlayacağımızı henüz incelemedik, bu nedenle şu anda herhangi bir kullanıcı veritabanında değişiklik yapabilecektir.

**HTML Formları**
Öncelikle HTML Formlarına kısaca bir genel bakış yapalım . Bir "takım" adını ve ilgili etiketi girmek için tek bir metin alanı içeren basit bir HTML formunu ele alalım:

![Test](./assets/85-print.png)


*&lt;form&gt;…&lt;/form&gt;* HTML'de form, en az bir *input* adet `<form>` öğesi içeren, `<form>` etiketleri içindeki öğelerin bir koleksiyonu olarak tanımlanır *type="submit"*.

```HTML
<form action="/team_name_url/" method="post">
  <label for="team_name">Enter name: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="Default name for team." />
  <input type="submit" value="OK" />
</form>
```

Burada takım adını girmek için yalnızca bir (metin) alan ekledik, ancak bir form herhangi bir sayıda başka giriş öğesi ve bunlarla ilişkili etiketler içerebilir. Alanın özniteliği *type* , hangi tür widget'ın görüntüleneceğini tanımlar. Alanın *name* ve *id* özellikleri, alanı JavaScript/CSS/HTML'de tanımlamak için kullanılırken, *value* ilk görüntülendiğinde alan için başlangıç ​​değerini tanımlar. Eşleşen takım etiketi, *label* etiketi kullanılarak belirtilir (yukarıdaki "Ad girin" bölümüne bakın), ilişkili değerini *for* içeren bir alan ile birlikte .*id input*

Giriş *submit* alanı (varsayılan olarak) bir düğme olarak görüntülenecektir; kullanıcı bu düğmeye basarak diğer giriş öğelerinde bulunan verileri sunucuya yükleyebilir (bu durumda sadece *team_name*). Form öznitelikleri, *method* verileri göndermek için kullanılan HTTP protokolünü ve verilerin sunucudaki hedef konumunu tanımlar ( *action*):

- *action* Form gönderildiğinde verilerin işlenmek üzere gönderileceği kaynak/URL. Bu ayarlanmamışsa (veya boş bir dize olarak ayarlanmışsa), form mevcut sayfa URL'sine geri gönderilecektir.
- *method* Verileri göndermek için kullanılan HTTP yöntemi: *POST* veya *GET*.
- Verilerin sunucunun veritabanında değişikliğe yol açacağı durumlarda bu *POST* yöntem her zaman kullanılmalıdır, çünkü bu sayede çapraz site sahtekarlığı istek saldırılarına karşı direnç artırılabilir.
- Bu *GET* yöntem yalnızca kullanıcı verilerini değiştirmeyen formlar için kullanılmalıdır (örneğin, arama formu). URL'yi yer imlerine eklemek veya paylaşmak istediğiniz durumlarda kullanılması önerilir.

**Form işleme süreci**
Form işleme, modellerimiz hakkında bilgi görüntülemek için öğrendiğimiz tüm teknikleri kullanır: rota, isteğimizi, modellerden veri okuma da dahil olmak üzere gerekli tüm veritabanı işlemlerini gerçekleştiren ve ardından bir HTML sayfası oluşturup döndüren bir denetleyici işlevine gönderir. İşleri daha karmaşık hale getiren şey, sunucunun ayrıca kullanıcı tarafından sağlanan verileri işleyebilmesi ve herhangi bir sorun varsa formu hata bilgileriyle yeniden görüntüleyebilmesidir.

Aşağıda, form içeren bir sayfa isteğiyle (yeşil renkte gösterilmiştir) başlayan, form isteklerinin işlenmesine ilişkin bir süreç akış şeması gösterilmektedir:

![Test](./assets/86-print.png)

Yukarıdaki diyagramda gösterildiği gibi, form işleme kodunun yapması gereken temel şeyler şunlardır:

1\.Kullanıcı tarafından ilk kez talep edildiğinde varsayılan formu görüntüleyin.

- Formda boş alanlar bulunabilir (örneğin, yeni bir kayıt oluşturuyorsanız) veya başlangıç ​​değerleriyle önceden doldurulmuş olabilir (örneğin, bir kaydı değiştiriyorsanız veya kullanışlı varsayılan başlangıç ​​değerleriniz varsa).

2\.Kullanıcı tarafından gönderilen verileri, genellikle bir HTTP POSTisteği yoluyla alın.

3\.Verileri doğrulayın ve temizleyin.

4\.Eğer herhangi bir veri geçersizse, formu yeniden görüntüleyin; bu sefer kullanıcı tarafından girilen değerler ve sorunlu alanlar için hata mesajları da gösterilecektir.

5\.Tüm veriler geçerliyse, gerekli işlemleri gerçekleştirin (örneğin, verileri veritabanına kaydedin, bildirim e-postası gönderin, arama sonucunu döndürün, dosya yükleyin vb.).

6\.Tüm işlemler tamamlandıktan sonra, kullanıcıyı başka bir sayfaya yönlendirin.

*GET* Genellikle form işleme kodu , formun ilk görüntülenmesi için bir rota ve form verilerinin doğrulanması ve işlenmesi için aynı yola giden bir rota kullanılarak uygulanır *POST.* Bu eğitimde de bu yaklaşım kullanılacaktır.

Express'in kendisi form işleme işlemleri için özel bir destek sağlamaz, ancak formdan gelen parametreleri işlemek *POST* ve değerlerini doğrulamak/temizlemek için ara yazılım kullanabilir .*GET*

**Doğrulama ve dezenfeksiyon**
Formdaki veriler saklanmadan önce doğrulanmalı ve temizlenmelidir:

- Doğrulama, girilen değerlerin her alan için uygun olup olmadığını (doğru aralıkta, biçimde vb. olup olmadığını) ve gerekli tüm alanlar için değerlerin sağlanmış olup olmadığını kontrol eder.
- Veri temizleme işlemi, sunucuya kötü amaçlı içerik göndermek için kullanılabilecek potansiyel karakterleri verilerden kaldırır/değiştirir.
Bu eğitimde, form verilerimizin hem doğrulanması hem de temizlenmesi işlemlerini gerçekleştirmek için popüler *express-validator* modülünü kullanacağız .

**Kurulum**
Projenin kök dizininde aşağıdaki komutu çalıştırarak modülü yükleyin.

```BASH
npm install express-validator
```

**express-validator kullanımı**
Denetleyicilerimizde doğrulayıcıyı kullanmak için, aşağıdaki örnekte gösterildiği gibi express-validator modülünden içe aktarmak istediğimiz belirli işlevleri belirtiyoruz:

```js
const { body, validationResult } = require("express-validator");
```

*body* İstek parametrelerinden, gövdesinden, başlıklarından, çerezlerden vb. verileri kontrol etmenize ve temizlemenize veya bunların hepsini birden yapmanıza olanak tanıyan birçok işlev mevcuttur. Bu eğitimde, öncelikle ve işlevlerini *validationResult*(yukarıda "gerekli" olduğu gibi) kullanacağız .

Fonksiyonlar aşağıdaki gibi tanımlanmıştır:

- *body(fields, message)* İstek gövdesindeki (bir *POST* parametre) bir dizi alanı doğrulamak ve/veya temizlemek için belirtir; ayrıca testler başarısız olursa görüntülenebilecek isteğe bağlı bir hata mesajı da içerir. Doğrulama ve temizleme kriterleri, metoda zincirleme olarak bağlanır *body()*.

Örneğin, aşağıdaki satır öncelikle "ad" alanını kontrol ettiğimizi ve doğrulama hatası durumunda "Boş ad" hata mesajı vereceğimizi tanımlar. Ardından, *trim()* dizenin başından ve sonundan boşlukları kaldırmak için temizleme yöntemini çağırırız ve daha sonra elde edilen dizenin boş olmadığını kontrol ederiz. Son olarak, JavaScript çapraz site komut dosyası çalıştırma saldırılarında kullanılabilecek HTML karakterlerini değişkenden kaldırmak için *isLength()* çağrı yaparız .*escape()*

```js
[
  // …
  body("name", "Empty name").trim().isLength({ min: 1 }).escape(),
  // …
];
```

Bu test, yaş alanının geçerli bir tarih olup olmadığını kontrol eder ve *optional()* boş veya geçersiz dizelerin doğrulama hatası vermeyeceğini belirtir.

```js
[
  // …
  body("age", "Invalid age")
    .optional({ values: "falsy" })
    .isISO8601()
    .toDate(),
  // …
];
```

Ayrıca farklı doğrulayıcıları birbirine zincirleyebilir ve önceki doğrulayıcılar yanlışsa görüntülenecek mesajlar ekleyebilirsiniz.

```js
[
  // …
  body("name")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Name empty.")
    .isAlpha()
    .withMessage("Name must be alphabet letters."),
  // …
];
```

- *validationResult(req)* Doğrulama işlemini gerçekleştirir ve hataları bir sonuç nesnesi şeklinde sunar *validation*. Bu işlem, aşağıda gösterildiği gibi ayrı bir geri çağırma fonksiyonunda çağrılır:

```js
async (req, res, next) => {
  // Extract the validation errors from a request.
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // There are errors. Render form again with sanitized values/errors messages.
    // Error messages can be returned in an array using `errors.array()`.
  } else {
    // Data from form is valid.
  }
};
```

*isEmpty()* Doğrulama sonucunun yöntemini, hata olup olmadığını kontrol etmek için ve *array()*hata mesajlarını almak için kullanıyoruz .

Doğrulama ve temizleme zincirleri, Express rota işleyicisine iletilmesi gereken ara yazılımlardır (bunu dolaylı olarak, denetleyici aracılığıyla yapıyoruz). Ara yazılım çalıştırıldığında, her doğrulayıcı/temizleyici belirtilen sırayla çalıştırılır.

Aşağıda LocalLibrary formlarını uygularken bazı gerçek örnekleri ele alacağız .

**Form tasarımı**
Kütüphanedeki modellerin çoğu birbiriyle ilişkili/bağımlıdır; örneğin, bir model bir başka modele *Book* ihtiyaç duyar *Author* ve ayrıca bir veya daha fazla başka modele de sahip olabilir *Genres* . Bu durum, kullanıcının aşağıdaki durumlarda nasıl hareket etmesi gerektiği sorusunu gündeme getiriyor:

- İlgili nesneler henüz mevcut olmadığında bir nesne oluşturun (örneğin, yazar nesnesi henüz tanımlanmamış bir kitap).
- Başka bir nesne tarafından hala kullanılmakta olan bir nesneyi silin (örneğin, başka *Genre* bir nesne tarafından hala kullanılmakta olan bir nesneyi silmek *Book*).

Bu proje için, bir formun yalnızca şu özelliklere sahip olabileceğini belirterek uygulamayı basitleştireceğiz:

- Mevcut nesneleri kullanarak bir nesne oluşturun (bu nedenle kullanıcıların herhangi bir nesne oluşturmaya çalışmadan önce gerekli tüm örnekleri *Author* oluşturmaları gerekecektir ).*Genre Book*
- *Book* Başka nesneler tarafından referans alınmayan bir nesneyi silebilirsiniz (örneğin, ilişkili tüm *BookInstance* nesneler silinene kadar bir nesneyi silemezsiniz ).

**Not:** Daha esnek bir uygulama, yeni bir nesne oluştururken bağımlı nesneleri oluşturmanıza ve istediğiniz zaman herhangi bir nesneyi silmenize (örneğin, bağımlı nesneleri silerek veya silinen nesneye ait referansları veritabanından kaldırarak) olanak tanıyabilir.

**Rotalar**
Form işleme kodumuzu uygulamak için aynı URL kalıbına sahip iki rotaya ihtiyacımız olacak. Birinci *GET* rota ( ) nesne oluşturmak için yeni bir boş form görüntülemek için kullanılır. İkinci rota ( *POST*) ise kullanıcının girdiği verileri doğrulamak, ardından bilgileri kaydetmek ve (veriler geçerliyse) detay sayfasına yönlendirmek veya (veriler geçersizse) formu hatalarla yeniden görüntülemek için kullanılır.

```js
// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating Genre.
router.post("/genre/create", genre_controller.genre_create_post);
```

**Express formları alt makaleler**
Aşağıdaki alt makaleler, örnek başvurumuza gerekli formları ekleme sürecini adım adım açıklayacaktır. Bir sonrakine geçmeden önce her birini sırayla okuyup uygulamanız gerekmektedir.

1\.**[Tür oluşturma formu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_genre_form)** — Nesneler oluşturmak için bir sayfa tanımlama *Genre*.
2\.**[Yazar Formu Oluşturma](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_author_form)** — Nesneler oluşturmak için bir sayfa tanımlama *Author.*
3\.**[Kitap oluşturma formu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_book_form)** *Book* — Nesneler oluşturmak için bir sayfa/form tanımlama .
4\.**[BookInstance oluşturma formu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Create_BookInstance_form)** *BookInstance* — Nesneler oluşturmak için bir sayfa/form tanımlama .
5\.**[Yazar Silme Formu ](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Delete_author_form)**— Nesneleri silmek için bir sayfa tanımlama *Author*.
6\.**[Kitabı Güncelleme Formu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms/Update_Book_form)** *Book* — Nesneleri güncellemek için tanımlanacak sayfa .

## Express Eğitimi Bölüm 7: Üretim Ortamına Dağıtım
Express kullanarak örnek bir web sitesi oluşturup test ettikten sonra, insanların internet üzerinden erişebilmesi için onu bir web sunucusuna dağıtmanın zamanı geldi. Bu sayfa, bir Express projesini nasıl barındıracağınızı ve üretim için hazır hale getirmek için nelere ihtiyacınız olduğunu açıklamaktadır.

**Genel Bakış**
Siteniz tamamlandığında (veya halka açık testlere başlamak için "yeterince" tamamlandığında), onu kişisel geliştirme bilgisayarınızdan daha herkese açık ve erişilebilir bir yerde barındırmanız gerekecek.

Şu ana kadar, sitenizi yerel tarayıcı/ağ ile paylaşmak için Express/Node'u web sunucusu olarak kullanarak ve hata ayıklama ve diğer özel bilgileri açığa çıkaran (güvenli olmayan) geliştirme ayarlarıyla web sitenizi çalıştırarak bir geliştirme ortamında çalıştınız . Bir web sitesini harici olarak barındırmadan önce öncelikle şunları yapmanız gerekecek:

- Express uygulamasını barındırmak için bir ortam seçin.
- Proje ayarlarınızda birkaç değişiklik yapın.
- Web sitenize hizmet verecek üretim seviyesinde bir altyapı kurun.

Bu eğitim, barındırma sitesi seçme seçenekleriniz hakkında bazı bilgiler, Express uygulamanızı üretime hazır hale getirmek için yapmanız gerekenlerin kısa bir özeti ve LocalLibrary web sitesini *Railway* bulut barındırma hizmetine nasıl kuracağınıza dair çalışan bir örnek sunmaktadır.

**Üretim ortamı nedir?**
Üretim ortamı, web sitenizi harici kullanıma sunacağınız sunucu bilgisayarının sağladığı ortamdır. Bu ortam şunları içerir:

- Web sitesinin çalıştığı bilgisayar donanımı.
- İşletim sistemi (örneğin, Linux veya Windows).
- Web sitenizin yazıldığı programlama dili çalışma ortamı ve çerçeve kütüphaneleri.
- Web sunucu altyapısı; muhtemelen bir web sunucusu, ters proxy, yük dengeleyici vb. içerebilir.
- Web sitenizin bağlı olduğu veritabanları.

Sunucu bilgisayar, kendi tesislerinizde bulunabilir ve hızlı bir bağlantı ile internete bağlanabilir, ancak "bulutta" barındırılan bir bilgisayar kullanmak çok daha yaygındır. Bunun anlamı, kodunuzun barındırma şirketinizin veri merkezlerindeki uzak bir bilgisayarda (veya muhtemelen bir "sanal" bilgisayarda) çalıştırılmasıdır. Uzak sunucu genellikle belirli bir fiyat karşılığında belirli bir düzeyde işlem gücü kaynağı (örneğin, CPU, RAM, depolama belleği vb.) ve internet bağlantısı sunar.

Bu tür uzaktan erişilebilir bilgi işlem/ağ donanımına Hizmet Olarak Altyapı (IaaS) denir . Birçok IaaS sağlayıcısı, üretim ortamınızın diğer bileşenlerini kurmanız gereken belirli bir işletim sistemini önceden yükleme seçeneği sunar. Diğer sağlayıcılar ise, belki de eksiksiz bir Node kurulumu da dahil olmak üzere, daha kapsamlı özelliklere sahip ortamlar seçmenize olanak tanır.

**Not:** Önceden oluşturulmuş ortamlar, gerekli yapılandırmayı azalttıkları için web sitenizi kurmayı kolaylaştırabilir, ancak mevcut seçenekler sizi alışılmadık bir sunucuya (veya diğer bileşenlere) sınırlayabilir ve işletim sisteminin eski bir sürümüne dayanabilir. Genellikle, istediğiniz bileşenleri elde etmek ve sistemin bazı bölümlerini yükseltmeniz gerektiğinde nereden başlayacağınız konusunda bir fikriniz olması için bileşenleri kendiniz kurmanız daha iyidir!

Diğer hosting sağlayıcıları, Platform as a Service ( PaaS ) teklifinin bir parçası olarak Express'i desteklemektedir . Bu tür bir hosting kullanırken, üretim ortamınızın (sunucular, yük dengeleyiciler vb.) büyük bir kısmıyla ilgili endişelenmenize gerek kalmaz, çünkü hosting platformu bunları sizin için halleder. Bu da dağıtımı oldukça kolaylaştırır, çünkü yalnızca web uygulamanıza odaklanmanız gerekir, diğer sunucu altyapısıyla uğraşmanıza gerek kalmaz.

Bazı geliştiriciler, PaaS yerine IaaS'ın sağladığı artan esnekliği tercih ederken, diğerleri PaaS'ın daha düşük bakım maliyetini ve ölçeklendirme çabasını takdir edecektir. Başlangıç ​​aşamasında, web sitenizi bir PaaS sistemine kurmak çok daha kolaydır, bu nedenle bu eğitimde bunu yapacağız.

**Bir hosting sağlayıcısı seçmek**
Node (ve Express ) ile aktif olarak desteklenen veya iyi çalışan çok sayıda hosting sağlayıcısı bulunmaktadır . Bu sağlayıcılar farklı türde ortamlar (IaaS, PaaS) ve farklı seviyelerde bilgi işlem ve ağ kaynakları sunmaktadır ve bunların fiyatları da farklıdır.

**Not:** Çok sayıda hosting çözümü mevcuttur ve hizmetleri ile fiyatlandırmaları zaman içinde değişebilir. Aşağıda birkaç seçenek sunsak da, bir hosting sağlayıcısı seçmeden önce hem bunları hem de diğer seçenekleri kontrol etmeniz faydalı olacaktır.

Ev sahibi seçerken göz önünde bulundurulması gereken bazı noktalar şunlardır:

- Sitenizin ne kadar yoğun olacağı ve bu talebi karşılamak için gereken veri ve işlem kaynaklarının maliyeti.
- Yatay ölçeklendirme (daha fazla makine ekleme) ve dikey ölçeklendirme (daha güçlü makinelere yükseltme) için destek düzeyi ve bunun maliyetleri.
- Tedarikçinin veri merkezlerinin bulunduğu ve dolayısıyla erişimin en hızlı olma olasılığının yüksek olduğu yerler.
- Sunucunun geçmişteki çalışma ve kesinti süreleri performansı.
- Siteyi yönetmek için sağlanan araçlar kolay kullanımlı mı ve güvenli mi (örneğin, SFTP mi yoksa FTP mi)?
- Sunucunuzu izlemek için yerleşik çerçeveler.
- Bilinen sınırlamalar. Bazı hosting sağlayıcıları belirli hizmetleri (örneğin, e-posta) kasıtlı olarak engeller. Diğerleri ise bazı fiyat kademelerinde yalnızca belirli sayıda saatlik "aktif kullanım süresi" veya sınırlı miktarda depolama alanı sunar.
- Ek avantajlar. Bazı sağlayıcılar, normalde ücret ödemeniz gereken ücretsiz alan adları ve TLS sertifikaları desteği sunar.
- Kullandığınız "ücretsiz" katmanın zamanla sona erip ermeyeceği ve daha pahalı bir katmana geçmenin maliyetinin, en başından başka bir hizmeti kullanmanızın daha avantajlı olacağı anlamına gelip gelmeyeceği konularını değerlendirmelisiniz!

Yeni başlayanlar için iyi haber şu ki, değerlendirme ve test amaçlı "ücretsiz" bilgi işlem ortamları sağlayan birçok site mevcut. Bunlar genellikle oldukça kaynak kısıtlı/sınırlı ortamlardır ve belirli bir tanıtım döneminden sonra sona erebileceklerini veya başka kısıtlamalara sahip olabileceklerini bilmeniz gerekir. Bununla birlikte, barındırılan bir ortamda düşük trafikli siteleri test etmek için harikadırlar ve siteniz daha yoğun hale geldiğinde daha fazla kaynak için ödeme yapmaya kolay bir geçiş sağlayabilirler. Bu kategorideki popüler seçenekler arasında Amazon Web Services ve Microsoft Azure yer almaktadır .

Çoğu sağlayıcı, küçük üretim siteleri için tasarlanmış ve daha kullanışlı işlem gücü seviyeleri ve daha az sınırlama sağlayan "temel" veya "hobi" bir kademe de sunmaktadır. Railway , Heroku ve DigitalOcean , nispeten ucuz bir temel işlem gücü kademesine (aylık 5 ila 10 ABD doları aralığında) sahip popüler hosting sağlayıcılarına örneklerdir.

**Not**: Fiyatın tek seçim kriteri olmadığını unutmayın. Web siteniz başarılı olursa, ölçeklenebilirlik en önemli husus olabilir.

**Web sitenizi yayınlamaya hazır hale getirmek**
Web sitenizi yayınlarken dikkate almanız gereken en önemli şeyler web güvenliği ve performanstır. En azından, üretim için farklı bir veritabanı kullanabilmek ve kimlik bilgilerini güvence altına almak için veritabanı yapılandırmasını değiştirmeniz, geliştirme sırasında hata sayfalarında yer alan yığın izlerini kaldırmanız, günlük kaydınızı düzenlemeniz ve birçok yaygın güvenlik tehdidinden kaçınmak için uygun başlıkları ayarlamanız gerekecektir.

Aşağıdaki alt bölümlerde, uygulamanızda yapmanız gereken en önemli değişiklikleri özetliyoruz.

**Veritabanı yapılandırması**
Bu eğitimde şimdiye kadar, adres ve kimlik bilgilerinin bin/www klasörüne sabit kodlandığı tek bir geliştirme veritabanı kullandık . Geliştirme veritabanı, ifşa edilmesinden veya bozulmasından rahatsız olacağımız herhangi bir bilgi içermediğinden, bu ayrıntıların sızdırılmasında özel bir risk yoktur. Ancak gerçek verilerle, özellikle kişisel kullanıcı bilgileriyle çalışıyorsanız, veritabanı kimlik bilgilerinizi korumak çok önemlidir.

Bu nedenle, geliştirme ortamında kullandığımızdan farklı bir veritabanını üretim ortamında kullanmak ve ayrıca üretim veritabanı kimlik bilgilerini kaynak kodundan ayrı tutarak uygun şekilde korumak istiyoruz.

Eğer hosting sağlayıcınız web arayüzü üzerinden ortam değişkenleri ayarlamayı destekliyorsa (çoğu destekliyor), bunu yapmanın bir yolu sunucunun veritabanı URL'sini bir ortam değişkeninden almasını sağlamaktır. Aşağıda, LocalLibrary web sitesini, tanımlanmışsa işletim sistemi ortam değişkeninden veritabanı URI'sini alacak şekilde, aksi takdirde geliştirme veritabanı URL'sini kullanacak şekilde değiştiriyoruz.

bin.www dosyasını açın ve MongoDB bağlantı değişkenini ayarlayan satırı bulun. Şuna benzer bir şey olacaktır:

```js
const mongoDB =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
```

Aşağıdaki kodla satırı değiştirin; bu kod, bağlantı dizesini, ayarlanmışsa *process.env.MONGODB_URI* adlı bir ortam değişkeninden alır (aşağıdaki yer tutucu yerine kendi veritabanı URL'nizi kullanın).*MONGODB_URI*

```js
const dev_db_url =
  "mongodb+srv://your_user_name:your_password@cluster0.cojoign.mongodb.net/local_library?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
```

**Not:** Üretim veritabanı kimlik bilgilerini kaynak koddan ayrı tutmanın bir diğer yaygın yolu, bunları dosya sistemine ayrı olarak dağıtılan bir dosyadan okumaktır (örneğin, npm'den dotenv *.env* modülü kullanılarak okunabilirler ).

**NODE_ENV'yi 'production' olarak ayarlayın.**
*NODE_ENV* Hata sayfalarındaki yığın izlerini, ortam değişkenini ' production ' olarak ayarlayarak kaldırabiliriz (varsayılan olarak ' development ' olarak ayarlanmıştır ). Daha az ayrıntılı hata mesajları oluşturmanın yanı sıra, değişkeni ' production' olarak ayarlamak , görünüm şablonlarını ve CSS uzantılarından oluşturulan CSS dosyalarını önbelleğe alır. Testler, 'production' *NODE_ENV* olarak ayarlamanın uygulama performansını üç katına kadar artırabileceğini göstermektedir!

*export* Bu değişiklik , bir ortam dosyası veya işletim sistemi başlatma sistemi kullanılarak yapılabilir .

**Not:** Bu aslında uygulamanızda değil, ortam kurulumunuzda yaptığınız bir değişikliktir, ancak burada belirtmekte fayda var! Aşağıda barındırma örneğimizde bunun nasıl ayarlandığını göstereceğiz.

**Uygun şekilde kayıt tutun.**
Çağrı kayıtları, yüksek trafikli bir web sitesinde önemli bir etkiye sahip olabilir. Üretim ortamında, web sitesi etkinliğini (örneğin, trafiği izlemek veya API çağrılarını kaydetmek) kaydetmeniz gerekebilir, ancak hata ayıklama amacıyla eklenen kayıt miktarını en aza indirmeye çalışmalısınız.

Üretim ortamında "hata ayıklama" günlük kaydını en aza indirmenin bir yolu, ortam değişkeni ayarlayarak hangi günlük kaydının yapılacağını kontrol etmenizi sağlayan debug gibi bir modül kullanmaktır . Örneğin, aşağıdaki kod parçası "yazar" günlük kaydını nasıl ayarlayabileceğinizi göstermektedir. debug değişkeni 'author' adıyla tanımlanır ve bu nesneden gelen tüm günlükler için "author" öneki otomatik olarak görüntülenir.

```js
const debug = require("debug")("author");

// Display Author update form on GET.
exports.author_update_get = async (req, res, next) => {
  const author = await Author.findById(req.params.id).exec();
  if (author === null) {
    // No results.
    debug(`id not found on update: ${req.params.id}`);
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("author_form", { title: "Update Author", author });
};
```

Ardından, ortam değişkeninde virgülle ayrılmış bir liste olarak belirterek belirli bir günlük kümesini etkinleştirebilirsiniz *DEBUG*. Yazar ve kitap günlüklerini görüntülemek için değişkenleri gösterildiği gibi ayarlayabilirsiniz (joker karakterler de desteklenmektedir).

```bash
#Windows
set DEBUG=author,book

#Linux
export DEBUG="author,book"
```

**Not:** Bu çağrılar, daha önce veya *debug* kullanarak yaptığınız günlük kaydının yerini alabilir . Kodunuzdaki tüm çağrılarını hata ayıklama modülü aracılığıyla günlük kaydıyla değiştirin. Geliştirme ortamınızda DEBUG değişkenini ayarlayarak günlük kaydını açıp kapatın ve bunun günlük kaydı üzerindeki etkisini gözlemleyin.*console.log() console.error() console.log()*

Web sitesi etkinliğini kaydetmeniz gerekiyorsa, Winston veya Bunyan gibi bir kayıt kütüphanesi kullanabilirsiniz . Bu konu hakkında daha fazla bilgi için bkz: Üretimde en iyi uygulamalar: performans ve güvenilirlik .

**Yanıtlar için gzip/deflat sıkıştırma yöntemini kullanın.**
Web sunucuları, istemciye geri gönderilen HTTP yanıtını genellikle sıkıştırabilir ve bu da istemcinin sayfayı alıp yüklemesi için gereken süreyi önemli ölçüde azaltır. Kullanılan sıkıştırma yöntemi, istemcinin istekte desteklediğini belirttiği açma yöntemlerine bağlıdır (eğer hiçbir sıkıştırma yöntemi desteklenmiyorsa yanıt sıkıştırılmamış olarak gönderilir).

Sıkıştırma ara yazılımını kullanarak bunu sitenize ekleyin . Aşağıdaki komutu çalıştırarak bunu projenizin kök dizinine yükleyin:

```BASH
npm install compression
```

./app.js dosyasını açın ve gösterildiği gibi sıkıştırma kütüphanesini dahil edin. Sıkıştırma kütüphanesini *use()*, sıkıştırmak istediğiniz tüm rotalardan önce (bu durumda hepsinden önce!) şu yöntemle ara katman zincirine ekleyin:

```JS
const catalogRouter = require("./routes/catalog"); // Import routes for "catalog" area of site
const compression = require("compression");

// Create the Express application object
const app = express();

// …

app.use(compression()); // Compress all routes

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.

// …
```

**Not:** Üretim ortamında yüksek trafikli bir web sitesi için bu ara yazılımı kullanmamalısınız. Bunun yerine, Nginx gibi bir ters proxy kullanmalısınız .

**Bilinen güvenlik açıklarına karşı korunmak için kask kullanın.**
Helmet bir ara katman yazılım paketidir. Uygulamanızı bilinen web güvenlik açıklarından korumaya yardımcı olan uygun HTTP başlıklarını ayarlayabilir.

Aşağıdaki komutu çalıştırarak bunu projenizin kök dizinine yükleyin:

```BASH
npm install helmet
```

./app.js dosyasını açın ve gösterildiği gibi helmet kütüphanesini dahil edin. Ardından modülü, yöntemle ara katman zincirine ekleyin *use()*.

```JS
const compression = require("compression");
const helmet = require("helmet");

// Create the Express application object
const app = express();

// Add helmet to the middleware chain.
// Set CSP headers to allow our Bootstrap and jQuery to be served
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "cdn.jsdelivr.net"],
    },
  }),
);

// …
```

Normalde , çoğu site için anlamlı olan güvenlik ile ilgili başlıkların bir alt kümesini *app.use(helmet());* eklemek yeterli olurdu . Ancak LocalLibrary temel şablonunda bazı bootstrap komut dosyaları bulunuyor. Bunlar, siteler arası komut dosyalarının yüklenmesine izin vermeyen helmet'in varsayılan İçerik Güvenlik Politikası'nı (CSP) ihlal ediyor. Bu komut dosyalarının yüklenmesine izin vermek için, helmet yapılandırmasını, belirtilen alan adlarından komut dosyası yüklenmesine izin verecek şekilde CSP yönergelerini ayarlayacak şekilde değiştiriyoruz. Kendi sunucunuz için , burada helmet kullanımına ilişkin talimatları izleyerek gerektiği gibi belirli başlıkları ekleyebilir/devre dışı bırakabilirsiniz .

**API rotalarına hız sınırlaması ekleyin.**
*Express-rate-limit* , API'lere ve uç noktalara yapılan tekrarlanan istekleri sınırlamak için kullanılabilen bir ara yazılım paketidir. Sitenize aşırı istek gönderilmesinin birçok nedeni olabilir; örneğin, hizmet reddi saldırıları, kaba kuvvet saldırıları veya beklendiği gibi davranmayan bir istemci veya komut dosyası. Çok fazla isteğin sunucunuzun yavaşlamasına neden olabileceği performans sorunlarının yanı sıra, ek trafik için de ücretlendirilebilirsiniz. Bu paket, belirli bir rotaya veya rota kümesine yapılabilecek istek sayısını sınırlamak için kullanılabilir.

Aşağıdaki komutu çalıştırarak bunu projenizin kök dizinine yükleyin:

```BASH
npm install express-rate-limit
```

./app.js dosyasını açın ve gösterildiği gibi express-rate-limit kütüphanesini dahil edin. Ardından modülü, aşağıdaki yöntemle ara katman zincirine ekleyin *use().*

```JS
const compression = require("compression");
const helmet = require("helmet");
const RateLimit = require("express-rate-limit");

const app = express();

// Set up rate limiter: maximum of twenty requests per minute
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
// Apply rate limiter to all requests
app.use(limiter);

// …
```

Yukarıdaki komut, tüm istekleri dakikada 20 ile sınırlandırır (bunu gerektiği gibi değiştirebilirsiniz).

**Not:** Hizmet reddi veya diğer saldırı türlerine karşı daha gelişmiş korumaya ihtiyacınız varsa, *Cloudflare* gibi üçüncü taraf hizmetlerini de kullanabilirsiniz.

**Düğüm sürümünü ayarla**
Express dahil olmak üzere Node uygulamaları için, package.json dosyası, bir barındırma sağlayıcısının uygulama bağımlılıklarını ve giriş noktası dosyasını belirlemek için ihtiyaç duyacağı her şeyi içerir.

Mevcut package.json dosyamızda eksik olan tek önemli bilgi, kütüphanenin gerektirdiği Node sürümüdür. Geliştirme için kullanılan Node sürümünü şu komutu girerek bulabilirsiniz:

```BASH
>node --version
v16.17.1
```

package.json dosyasını açın ve bu bilgiyi, gösterildiği gibi engines > node bölümüne ekleyin (sisteminizin sürüm numarasını kullanarak).

```JSON
{
  "engines": {
    "node": ">=22.0.0"
  }
}
```

Barındırma hizmeti belirtilen Node sürümünü desteklemeyebilir, ancak bu değişiklik, aynı ana sürüm numarasına sahip veya daha yeni bir sürümü kullanmayı denemesini sağlayacaktır.

Farklı hosting hizmetlerinde Node sürümünü belirtmenin başka yolları da olabileceğini, ancak package.json yaklaşımının yaygın olarak desteklendiğini unutmayın.

**Gerekli bağımlılıkları edinin ve yeniden test edin.**
Devam etmeden önce, sitenin herhangi bir değişiklikten etkilenmediğinden emin olmak için tekrar test edelim.

Öncelikle, bağımlılıklarımızı indirmemiz gerekecek. Bunu, projenin kök dizininde terminalinizde aşağıdaki komutu çalıştırarak yapabilirsiniz:

```BASH
npm install
```

Şimdi siteyi çalıştırın ( ilgili komutlar için *"Rotaları test etme "* bölümüne bakın ) ve sitenin hala beklediğiniz gibi davrandığını kontrol edin.

**GitHub'da bir uygulama deposu oluşturma**
Birçok hosting hizmeti, projeleri yerel bir depodan veya bulut tabanlı kaynak sürüm kontrol platformlarından içe aktarmanıza ve/veya senkronize etmenize olanak tanır. Bu, dağıtımı ve yinelemeli geliştirmeyi çok daha kolay hale getirebilir.

Bu eğitimde , kütüphane için bir GitHub hesabı ve deposu oluşturacağız ve kaynak kodumuzu yüklemek için git aracını kullanacağız.

**Not:** Kaynak kodunuzu yönetmek için zaten GitHub kullanıyorsanız bu adımı atlayabilirsiniz!

Unutmayın ki, kaynak kod yönetim araçlarını kullanmak iyi bir yazılım geliştirme uygulamasıdır; çünkü bu araçlar değişiklikleri denemenize ve gerektiğinde denemeleriniz ile "bilinen iyi kod" arasında geçiş yapmanıza olanak tanır!

Adımlar şunlardır:

1\.https://github.com/ adresini ziyaret edin ve bir hesap oluşturun.

2\.Giriş yaptıktan sonra, üst araç çubuğundaki + bağlantısına tıklayın ve Yeni depo'yu seçin .

3\.Lütfen bu formdaki tüm alanları doldurun. Bunlar zorunlu olmamakla birlikte, doldurulması şiddetle tavsiye edilir.

- Yeni bir depo adı (örneğin, express-locallibrary-tutorial ) ve açıklama (örneğin, "Express ile yazılmış Yerel Kütüphane web sitesi") girin.
.gitignore ekleme seçim listesinden Düğüm'ü seçin .
- Lisans seçimi ekle listesinden tercih ettiğiniz lisansı seçin .
- Bu depoyu bir README dosyasıyla başlatın .

**Uyarı:** Varsayılan "Herkese Açık" erişim, veritabanı kullanıcı adınız ve şifreniz de dahil olmak üzere tüm kaynak kodunu internetteki herkesin görebileceği hale getirecektir! Kaynak kodunun kimlik bilgilerini yalnızca ortam değişkenlerinden okuduğundan ve hiçbir kimlik bilgisinin sabit kodlanmadığından emin olun.

Aksi takdirde, kaynak kodunu yalnızca seçili kişilerin görmesine izin vermek için "Özel" seçeneğini seçin.

4\.Depo oluştur düğmesine basın .

5\.Yeni depo sayfanızdaki yeşil "Klonla veya indir" düğmesine tıklayın.

6\.Açılan iletişim kutusundaki metin alanından URL değerini kopyalayın. Eğer "express-locallibrary-tutorial" depo adını kullandıysanız, URL şu şekilde olmalıdır: *https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git.*

GitHub'da depo ("repo") oluşturulduktan sonra, onu yerel bilgisayarımıza kopyalamak (klonlamak) isteyeceğiz:

1\.Yerel bilgisayarınıza Git'i yükleyin ( resmi Git indirme kılavuzu ).

2\.Bir komut istemi/terminal açın ve yukarıda kopyaladığınız URL'yi kullanarak deponuzu klonlayın:

```BASH
git clone https://github.com/<your_git_user_id>/express-locallibrary-tutorial.git
```

Bu işlem, mevcut dizin içinde depoyu oluşturacaktır.

3\.Depo klasörüne gidin.

```BASH
cd express-locallibrary-tutorial
```

Ardından uygulama kaynak dosyalarınızı depo klasörüne kopyalayın, git kullanarak bunları deponun bir parçası haline getirin ve GitHub'a yükleyin:

1\.Express uygulamanızı bu klasöre kopyalayın ( /node_modules klasörü hariç , çünkü bu klasörde gerektiğinde npm'den indirmeniz gereken bağımlılık dosyaları bulunur).

2\.Komut istemini/terminali açın ve addtüm dosyaları git'e eklemek için komutu kullanın.

```BASH
git add -A
```

3\.Kullanacağınız *status* komut, ekleyeceğiniz tüm dosyaların *commit* doğru olduğundan emin olmanızı sağlar (kaynak dosyaları dahil etmelisiniz, ikili dosyaları, geçici dosyaları vb. değil). Komutun çıktısı aşağıdaki gibi olmalıdır.

```BASH
git status
On branch main
Your branch is up-to-date with 'origin/main'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   ...
```

4\.İşlemlerden memnun kaldığınızda, *commit* dosyaları yerel deponuza kaydedin. Bu, değişiklikleri onaylamak ve onları yerel deponun resmi bir parçası haline getirmekle eşdeğerdir.

```BASH
git commit -m "First version of application moved into GitHub"
```

5\.Bu aşamada, uzak depoda herhangi bir değişiklik yapılmamıştır. Son adım, pushaşağıdaki komutu kullanarak yerel deponuzu uzak GitHub deposuna senkronize etmektir ( ):

```BASH
git push origin main
```

Bu işlem tamamlandığında, GitHub'da deponuzu oluşturduğunuz sayfaya geri dönebilir, sayfayı yenileyebilir ve tüm uygulamanızın yüklendiğini görebilirsiniz. Dosyalar değiştikçe bu ekleme/kaydetme/gönderme döngüsünü kullanarak deponuzu güncellemeye devam edebilirsiniz.

Bu, "temel" projenizin yedeğini almak için iyi bir noktadır; sonraki bölümlerde yapacağımız bazı değişiklikler herhangi bir barındırma hizmetine dağıtım (veya geliştirme) için yararlı olabilirken, diğerleri olmayabilir. Bunu gitkomut satırında şu şekilde yapabilirsiniz:

```BASH
# Create branch vanilla_deployment from the current branch (main)
git checkout -b vanilla_deployment

# Push the new branch to GitHub
git push origin vanilla_deployment

# Switch back to main
git checkout main

# Make any further changes in a new branch
git pull upstream main # Merge the latest changes from GitHub
git checkout -b my_changes # Create a new branch
```

**Örnek: Railway üzerinde barındırma**
Bu bölümde , LocalLibrary'nin Railway'e nasıl kurulacağına dair pratik bir gösterim sunulmaktadır .

**Not:** MDN bu projeyi artık ücretsiz katman sunmayan bir dizi barındırma hizmetinden taşımıştır. Mevcut barındırma seçeneği olarak, uygun fiyatlı bir hobi katmanı sunan Railway'i kullanmaya karar verdik. Çoğu hizmetin benzer dağıtım yöntemleri vardır, bu nedenle aşağıdaki talimatlar projenizi seçtiğiniz platformda yayınlamanıza yardımcı olacaktır.

**Neden Demiryolu?**
Demiryolu, çeşitli nedenlerden dolayı cazip bir ev sahipliği seçeneğidir:

- Railway, altyapının büyük bir kısmını hallediyor, böylece sizin hiçbir şeyle uğraşmanıza gerek kalmıyor. Sunucular, yük dengeleyiciler, ters proxy'ler vb. ile uğraşmak zorunda kalmamak, işe başlamayı çok daha kolay hale getiriyor.
- Railway, geliştirme ve dağıtım süreçlerinde geliştirici deneyimine odaklanmaktadır ; bu da birçok diğer alternatife kıyasla daha hızlı ve daha kolay bir öğrenme eğrisi sağlar.
- Railway'i kullanırken öğreneceğiniz beceriler ve kavramlar aktarılabilir niteliktedir. Railway'in bazı mükemmel yeni özellikleri olsa da, diğer popüler hosting hizmetleri de aynı fikir ve yaklaşımların çoğunu kullanmaktadır.
- Demiryolu belgeleri açık ve eksiksizdir.
- Nispeten uygun fiyatlı bir hobi kategorisine sahip .
- Hizmet oldukça güvenilir görünüyor ve eğer beğenirseniz, fiyatlandırması tahmin edilebilir ve uygulamanızı ölçeklendirmek çok kolay.

Railway'in kendi web siteniz için uygun olup olmadığını belirlemek için zaman ayırmalısınız .

**Demiryolu nasıl çalışır?**
Web uygulamalarının her biri kendi izole ve bağımsız sanallaştırılmış konteynerinde çalıştırılır. Uygulamanızı çalıştırmak için Railway'in uygun ortamı ve bağımlılıkları kurabilmesi ve ayrıca uygulamanın nasıl başlatıldığını anlayabilmesi gerekir.

Railway, birçok farklı web uygulama çerçevesini ve ortamını "ortak kurallar" kullanmalarına göre otomatik olarak tanıyıp kurabildiği için bu işlemi kolaylaştırır. Örneğin, Railway, package.json dosyasına sahip oldukları için Node uygulamalarını tanır ve "lock" dosyasından derleme için kullanılan paket yöneticisini belirleyebilir. Örneğin, uygulama package -lock.json dosyasını içeriyorsa, Railway paketleri yüklemek için npm'yi kullanacağını bilir ; yarn.lock dosyasını bulursa yarn'ı kullanacağını bilir . Tüm bağımlılıkları yükledikten sonra, Railway paket dosyasında "build" ve "start" adlı komut dosyalarını arayacak ve bunları kullanarak kodu derleyip çalıştıracaktır.

**Not:** Railway, farklı programlama dillerinde yazılmış çeşitli web uygulama çerçevelerini tanımak için Nixpacks kullanır . Bu eğitim için başka bir şey bilmenize gerek yok, ancak Node uygulamalarını dağıtma seçenekleri hakkında daha fazla bilgiyi Nixpacks Node'da bulabilirsiniz .

Uygulama çalışmaya başladıktan sonra, ortam değişkenlerinde sağlanan bilgileri kullanarak kendini yapılandırabilir . Örneğin, veritabanı kullanan bir uygulama, adresi bir değişken kullanarak almalıdır. Veritabanı hizmeti Railway veya başka bir sağlayıcı tarafından barındırılıyor olabilir.

Geliştiriciler, Railway ile Railway sitesi üzerinden ve özel bir Komut Satırı Arayüzü (CLI) aracı kullanarak etkileşim kurarlar. CLI, yerel bir GitHub deposunu bir Railway projesiyle ilişkilendirmenize, depoyu yerel daldan canlı siteye yüklemenize, çalışan işlemin günlüklerini incelemenize, yapılandırma değişkenlerini ayarlamanıza ve almanıza ve daha birçok şeye olanak tanır. En kullanışlı özelliklerden biri, CLI'yı kullanarak yerel projenizi canlı projeyle aynı ortam değişkenleriyle çalıştırabilmenizdir.

Uygulamayı Railway'e dağıtmak için ihtiyacınız olan genel bilgiler bu kadar. Şimdi bir Railway hesabı oluşturacağız, web sitemizi ve veritabanımızı kuracağız ve Railway istemcisini deneyeceğiz.

**Demiryolu hesabı edinin**
Railway'i kullanmaya başlamak için öncelikle bir hesap oluşturmanız gerekecektir:

- railway.com adresine gidin ve üst araç çubuğundaki Giriş bağlantısına tıklayın .
- Açılan pencereden GitHub'ı seçerek GitHub kimlik bilgilerinizle giriş yapabilirsiniz.
- Ardından e-postanıza gidip hesabınızı doğrulamanız gerekebilir.
- Ardından Railway.com kontrol paneline giriş yapacaksınız: https://railway.com/dashboard .

**GitHub'dan Railway'e dağıtım yapın.**
Şimdi Railway'i GitHub'dan kütüphanemizi dağıtacak şekilde yapılandıracağız. Öncelikle sitenin üst menüsünden Kontrol Paneli seçeneğini, ardından Yeni Proje düğmesini seçin:

![Test](./assets/87-print.png)

Railway, yeni proje için bir dizi seçenek sunacaktır; bunlar arasında GitHub hesabınızda önceden oluşturulmuş bir şablondan proje dağıtma seçeneği ve çeşitli veritabanları yer almaktadır. " GitHub deposundan dağıt" seçeneğini seçin .

![Test](./assets/88-print.png)

Kurulum sırasında Railway ile paylaştığınız GitHub depolarındaki tüm projeler görüntülenir. Yerel kütüphane için GitHub deponuzu seçin: *&lt;user-name&gt;/express-locallibrary-tutorial.*

![Test](./assets/89-print.png)

Dağıtımı onaylamak için "Şimdi Dağıt" seçeneğini belirleyin .

![Test](./assets/90-print.png)

Ardından Railway, projenizi yükleyip dağıtacak ve dağıtımlar sekmesinde ilerleme durumunu gösterecektir. Dağıtım başarıyla tamamlandığında, aşağıdaki gibi bir ekran göreceksiniz.

![Test](./assets/91-print.png)

Şimdi Ayarlar sekmesini seçin , ardından Alan Adları bölümüne kadar aşağı kaydırın ve Alan Adı Oluştur düğmesine basın.

![Test](./assets/92-print.png)

Bu işlem siteyi yayınlayacak ve aşağıda gösterildiği gibi düğmenin yerine alan adını yerleştirecektir.

![Test](./assets/93-print.png)

Kütüphane uygulamanızı açmak için alan adı URL'sini seçin. Üretim veritabanı belirtmediğimiz için yerel kütüphanenin geliştirme verilerinizi kullanarak açılacağını unutmayın.

**MongoDB veritabanını hazırlayın ve bağlayın.**
Geliştirme verilerimizi kullanmak yerine, bir sonraki adımda üretim için bir MongoDB veritabanı oluşturalım. Veritabanını Demiryolu uygulaması projesinin bir parçası olarak oluşturacağız, ancak ayrı bir projede oluşturmanızda veya geliştirme veritabanında olduğu gibi üretim verileri için bir MongoDB Atlas veritabanı kullanmanızda hiçbir sakınca yok.

Railway'de, sitenin üst menüsünden Kontrol Paneli seçeneğini seçin ve ardından uygulama projenizi seçin. Bu aşamada, uygulamanız için yalnızca tek bir servis içerir (bu, servisin değişkenlerini ve diğer ayrıntılarını ayarlamak için seçilebilir). Mevcut projeye servis eklemek için kullanılan Yeni düğmesini seçin.

![Test](./assets/94-print.png)

Eklenecek hizmet türü sorulduğunda Veritabanı'nı seçin :

![Test](./assets/95-print.png)

Ardından veritabanını eklemeye başlamak için "MongoDB Ekle"yi seçin.

![Test](./assets/96-print.png)

Ardından Railway, aynı proje içinde boş bir veritabanı içeren bir hizmet sağlayacaktır. Tamamlandığında, proje görünümünde hem uygulama hem de veritabanı hizmetlerini göreceksiniz.

![Test](./assets/97-print.png)

Veritabanı hakkında bilgi görüntülemek için MongoDB hizmetini seçin. Değişkenler sekmesini açın ve "Mongo_URL" değerini kopyalayın (bu, veritabanının adresidir).

![Test](./assets/98-print.png)


Bunu kütüphane uygulamasına erişilebilir kılmak için, ortam değişkeni kullanarak uygulama sürecine eklememiz gerekiyor. Öncelikle uygulama hizmetini açın. Ardından Değişkenler sekmesini seçin ve Yeni Değişken düğmesine basın.

*MONGODB_URI* Veritabanı için kopyaladığınız değişken adını ve bağlantı URL'sini girin (burada , uygulamayı veritabanı adresini okuyacak şekilde yapılandırdığımız *MONGODB_URI* ortam değişkeninin adı yer almaktadır ). Bu, aşağıdaki ekranda gösterilene benzer bir şey olacaktır.

![Test](./assets/99-print.png)

Değişkeni eklemek için Ekle'yi seçin .

Railway, değişkenleri güncellediğinde uygulamanızı yeniden başlatır. Şimdi ana sayfayı kontrol ederseniz, nesne sayımlarınız için sıfır değerler göstermelidir, çünkü yukarıdaki değişiklikler artık yeni (boş) bir veritabanı kullandığımız anlamına gelir.

**Diğer yapılandırma değişkenleri**
Önceki bölümde de belirttiğimiz gibi, performansımızı artırmak ve daha az ayrıntılı hata mesajları oluşturmak için NODE_ENV'yi 'production' olarak ayarlamamız gerekiyor . Bunu, değişkeni ayarladığımız aynı ekranda yapabiliriz *MONGODB_URI*.

Uygulama hizmetini açın. Ardından , zaten tanımlanmış olduğunu göreceğiniz Değişkenler *MONGODB_URI* sekmesini seçin ve Yeni Değişken düğmesine basın.

![Test](./assets/100-print.png)

*NODE_ENV* Yeni değişkenin adı olarak ve *production* ortamın adı olarak girin . Ardından Ekle düğmesine basın.

![Test](./assets/101-print.png)

Yerel kütüphane uygulaması artık üretim kullanımı için kuruldu ve yapılandırıldı. Verileri web sitesi arayüzü üzerinden ekleyebilirsiniz ve geliştirme aşamasında olduğu gibi aynı şekilde çalışması gerekir (ancak geçersiz sayfalar için daha az hata ayıklama bilgisi gösterilecektir).

**Not**: Eğer sadece test amaçlı veri eklemek istiyorsanız, Express Eğitimi Bölüm 3: Veritabanı Kullanımı (Mongoose ile) Test Etme — bazı öğeler oluşturma *populatedb* bölümünde anlatıldığı gibi (MongoDB üretim veritabanınızın URL'siyle birlikte) betiği kullanabilirsiniz .

**İstemciyi yükleyin**
İstemci yüklendikten sonra komutları çalıştırabileceksiniz. Daha önemli işlemlerden bazıları, bilgisayarınızdaki mevcut dizini ilgili bir Railway projesine dağıtmak (GitHub'a yüklemeye gerek kalmadan) ve projenizi üretim sunucusundakiyle aynı ayarlarla yerel olarak çalıştırmaktır.

Terminale aşağıdaki komutu girerek tüm olası komutların listesini alabilirsiniz.

```BASH
railway help
```

**Hata ayıklama**
Railway istemcisi, günlüklerin son kısmını göstermek için logs komutunu sağlar (her proje için sitede daha kapsamlı bir günlük mevcuttur):

```BASH
railway logs
```

# Ek eğitimler

**Kaynak:** [Ek eğitimler](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess)

## Apache Yapılandırması: .htaccess
Apache .htaccess Kendinizidosyaları, kullanıcıların ana yapılandırma dosyasını değiştirmeden kontrol ettikleri web sunucusunun dizinlerini yapılandırmalarına olanak tanır.

Bu kullanışlı olsa da, dosyaları kullanmanın Apache'yi yavaşlattığını belirtmek önemlidir *.htaccess*; bu nedenle, ana sunucu yapılandırma dosyasına (genellikle `<configuration>` olarak adlandırılır) erişiminiz varsa *httpd.conf*, bu mantığı bir `<configuration>` bloğunun altına eklemelisiniz *Directory*.

Bu belgenin geri kalanında, ekleyebileceğiniz farklı yapılandırma seçenekleri .htaccessve bunların ne işe yaradıkları ele alınacaktır.

Aşağıdaki kod bloklarının çoğu, yalnızca ilgili modül düzgün yapılandırılmışsa ve sunucu tarafından yüklenmişse blok içindeki talimatları yürütmek için IfModule yönergesini kullanır. Bu sayede, modül yüklenmemişse sunucumuzun çökmesini önleriz.

**Yönlendirmeler**
Bazen kullanıcılara bir kaynağın geçici veya kalıcı olarak taşındığını bildirmemiz gerekir. İşte bu yüzden *Redirect* ve *RedirectMatch* fonksiyonlarını kullanıyoruz.

```APACHECONF
<IfModule mod_alias.c>
  # Redirect to a URL on a different host
  Redirect "/service" "http://foo2.example.com/service"

  # Redirect to a URL on the same host
  Redirect "/one" "/two"

  # Equivalent redirect to URL on the same host
  Redirect temp "/one" "/two"

  # Permanent redirect to a URL on the same host
  Redirect permanent "/three" "/four"

  # Redirect to an external URL
  # Using regular expressions and RedirectMatch
  RedirectMatch "^/oldfile\.html/?$" "http://example.com/newfile.php"
</IfModule>
```

İlk parametre için olası değerler aşağıda listelenmiştir. İlk parametre belirtilmezse, varsayılan değer boş bırakılır *temp.*

*kalıcı*
Kaynağın kalıcı olarak taşındığını belirten kalıcı yönlendirme durumu (301) döndürür.

*geçici*
Geçici bir yönlendirme durumu (302) döndürür. Bu varsayılan değerdir .

*diğer*
Kaynağın değiştirildiğini belirten "Diğerine Bak" (303) durumunu döndürür.

*gitmiş*
Kaynağın kalıcı olarak kaldırıldığını gösteren "Gone" (410) durumunu döndürür. Bu durum kullanıldığında URL argümanı atlanmalıdır.

**Farklı kaynaklardan gelen kaynaklar**
İlk yönergeler kümesi, sunucudan kaynaklara CORS (Çapraz Kaynak Paylaşımı) erişimini kontrol eder. CORS, bir sunucunun, bir tarayıcının kaynakların yüklenmesine izin vermesi gereken harici kaynakları (alan adı, protokol veya bağlantı noktası) belirtmesine olanak tanıyan, HTTP başlığına dayalı bir mekanizmadır.

Güvenlik nedenleriyle, tarayıcılar komut dosyalarından başlatılan farklı kaynaklardan gelen HTTP isteklerini kısıtlar. Örneğin, XMLHttpRequest ve Fetch API aynı kaynak politikasını izler. Bu API'leri kullanan bir web uygulaması, diğer kaynaklardan gelen yanıtlar uygun CORS başlıklarını içermediği sürece, yalnızca uygulamanın yüklendiği aynı kaynaktan kaynak isteyebilir.

**Genel CORS erişimi**
Bu yönerge, dizindeki tüm kaynaklara herhangi bir web sitesinden CORS başlığını ekleyecektir.

```APACHECONF
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

Bu yönergeyi daha sonraki yapılandırmada veya bu yönergeyi belirlediğiniz dizinin altındaki bir dizinin yapılandırmasında geçersiz kılmadığınız sürece, harici sunuculardan gelen her istek yerine getirilecektir; bu da muhtemelen istediğiniz şey değildir.

Bir diğer alternatif ise, sitenizin içeriğine hangi alan adlarının erişebileceğini açıkça belirtmektir. Aşağıdaki örnekte, ana sitemizin bir alt alan adıyla (example.com) erişimi kısıtlıyoruz. Bu daha güvenlidir ve muhtemelen yapmak istediğiniz de budur.

```APACHECONF
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "subdomain.example.com"
</IfModule>
```

**Çapraz kökenli görüntüler**
Chromium Blog'da bildirildiği ve "Görüntülerin ve canvas'ın farklı kaynaklardan kullanımına izin vermek, parmak izi alma saldırılarına yol açabilir" başlıklı belgede belirtildiği gibi .

*crossorigin* Bu saldırı olasılığını azaltmak için, talep ettiğiniz resimlerdeki özniteliği ve *.htaccess* sunucudan CORS başlığını ayarlamak için aşağıdaki kod parçasını kullanmalısınız .

```APACHECONF
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(bmp|cur|gif|ico|jpe?g|a?png|svgz?|webp|heic|heif|avif)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=*IS_CORS*
    </FilesMatch>
  </IfModule>
</IfModule>
```

Google Chrome'un Google Fonts sorun giderme kılavuzunda , Google Fonts'un her yanıtta CORS başlığını gönderebileceği ancak bazı proxy sunucularının tarayıcının yazı tipini oluşturmak için kullanmadan önce bu başlığı kaldırabileceği belirtiliyor.

```APACHECONF
<IfModule mod_headers.c>
  <FilesMatch "\.(eot|otf|tt[cf]|woff2?)$">
    Header set Access-Control-Allow-Origin "*"
  </FilesMatch>
</IfModule>
```

**Kaynaklar arası zamanlama**
Kaynak Zamanlaması spesifikasyonu, web uygulamalarının bir belgedeki kaynaklara ait tüm zamanlama bilgilerine erişebilmesi için bir arayüz tanımlar.

Yanıt *Timing-Allow-Origin* başlığı, Kaynak Zamanlama API'sinin özellikleri aracılığıyla alınan özniteliklerin değerlerini görmesine izin verilen kaynakları belirtir; aksi takdirde bu değerler, kaynaklar arası kısıtlamalar nedeniyle sıfır olarak raporlanırdı.

*Timing-Allow-Origin* Bir kaynak , istek yapıldıktan sonra kaynak belirtilmeden sunulursa veya başlıkta kaynak bilgisi yer almazsa, *PerformanceResourceTiming* nesnenin bazı öznitelikleri sıfıra ayarlanır.

```APACHECONF
<IfModule mod_headers.c>
  Header set Timing-Allow-Origin: "*"
</IfModule>
```

**Özel hata sayfaları/mesajları**
Apache, kullanıcılara aldıkları hata türüne bağlı olarak özel hata sayfaları sunmanıza olanak tanır.

Hata sayfaları URL olarak sunulur. Bu URL'ler, yerel web yolları için (DocumentRoot'a göre) eğik çizgi (/) ile başlayabilir veya istemcinin çözümleyebileceği tam bir URL olabilir.

Daha fazla bilgi için HTTPD dokümantasyon sitesindeki ErrorDocument Directive dokümantasyonuna bakın .

```APACHECONF
ErrorDocument 500 /errors/500.html
ErrorDocument 404 /errors/400.html
ErrorDocument 401 https://example.com/subscription_info.html
ErrorDocument 403 "Sorry, can't allow you access today."
```

**Hata önleme**
Bu ayar, yapılandırmanın uygulandığı dizin için MultiViews'ın çalışma şeklini etkiler.

Etkisi *MultiViews* şu şekildedir: Sunucu /some/dir/foo için bir istek alırsa, /some/dir etkinleştirilmişse *MultiViews* ve /some/dir/foo mevcut değilse, sunucu dizini okuyarak foo.* adlı dosyaları arar ve etkili bir şekilde, istemcinin bunlardan birini adıyla istemiş olması durumunda sahip olacağı aynı medya türlerini ve içerik kodlamalarını atayan, tüm bu dosyaları adlandıran sahte bir tür eşlemesi oluşturur. Ardından, istemcinin gereksinimlerine en uygun olanı seçer.

Bu ayar, *MultiViews* söz konusu yapılandırmanın uygulandığı dizin için devre dışı bırakır ve aynı ada sahip dizin mevcut olmadığında Apache'nin yeniden yazma işlemi sonucunda 404 hatası döndürmesini önler.

```APACHECONF
Options -MultiViews
```

**Medya türleri ve karakter kodlamaları**
Apache, URI veya dosya adlarındaki kalıpları meta veri değerleriyle eşleştirerek, HTTP yanıtı için seçilen içeriğe içerik meta verileri atamak için mod_mime'ı kullanır.

Örneğin, içerik dosyalarının dosya uzantıları genellikle içeriğin internet medya türünü, dilini, karakter setini ve içerik kodlamasını tanımlar. Bu bilgiler, söz konusu içeriği içeren HTTP mesajlarında gönderilir ve alternatifler seçilirken içerik müzakeresinde kullanılır; böylece kullanıcının tercihleri, sunulacak çeşitli içerikler arasından seçim yapılırken dikkate alınır.

Bir dosyanın meta verilerini değiştirmek, Son Değiştirme (Last-Modified) başlığının değerini değiştirmez. Bu nedenle, daha önce önbelleğe alınmış kopyalar, önceki başlıklarla birlikte bir istemci veya proxy tarafından kullanılmaya devam edebilir. Meta verileri (dil, içerik türü, karakter seti veya kodlama) değiştirirseniz, tüm ziyaretçilerin düzeltilmiş içerik başlıklarını almasını sağlamak için etkilenen dosyaları 'güncellemeniz' (son değiştirme tarihlerini güncellemeniz) gerekebilir.

**Kaynakları doğru medya türleriyle (diğer adıyla MIME türleri) sunun.**
Kaynakların uygun şekilde sunulmasını sağlamak için medya türlerini bir veya daha fazla uzantıyla ilişkilendirir.

Sunucular, HTML spesifikasyonunda *text/javascript* belirtildiği gibi JavaScript kaynakları için kullanılmalıdır.

```APACHECONF
<IfModule mod_mime.c>
  # Data interchange
    AddType application/atom+xml      atom
    AddType application/json          json map topojson
    AddType application/ld+json       jsonld
    AddType application/rss+xml       rss
    AddType application/geo+json      geojson
    AddType application/rdf+xml       rdf
    AddType application/xml           xml
  # JavaScript
    AddType text/javascript           js mjs
  # Manifest files
    AddType application/manifest+json     webmanifest
    AddType application/x-web-app-manifest+json         webapp
  # Media files
    AddType audio/mp4                     f4a f4b m4a
    AddType audio/ogg                     oga ogg opus
    AddType image/bmp                     bmp
    AddType image/svg+xml                 svg svgz
    AddType image/webp                    webp
    AddType video/mp4                     f4v f4p m4v mp4
    AddType video/ogg                     ogv
    AddType video/webm                    webm
    AddType image/x-icon    cur ico
  # HEIF Images
    AddType image/heic                    heic
    AddType image/heif                    heif
  # HEIF Image Sequence
    AddType image/heics                   heics
    AddType image/heifs                   heifs
  # AVIF Images
    AddType image/avif                    avif
  # AVIF Image Sequence
    AddType image/avis                    avis
  # WebAssembly
    AddType application/wasm              wasm
  # Web fonts
    AddType font/woff                         woff
    AddType font/woff2                        woff2
    AddType application/vnd.ms-fontobject                eot
    AddType font/ttf                          ttf
    AddType font/collection                   ttc
    AddType font/otf                          otf
  # Other
    AddType application/octet-stream          safariextz
    AddType application/x-bb-appworld         bbaw
    AddType application/x-chrome-extension    crx
    AddType application/x-opera-extension     oex
    AddType application/x-xpinstall           xpi
    AddType text/calendar                     ics
    AddType text/markdown                     markdown md
    AddType text/vcard                        vcard vcf
    AddType text/vnd.rim.location.xloc        xloc
    AddType text/vtt                          vtt
    AddType text/x-component                  htc
</IfModule>
```

**Varsayılan karakter seti özelliğini ayarlayın.**
Web üzerindeki her içerik bir karakter kümesine sahiptir. İçeriğin çoğu, hatta neredeyse tamamı, UTF-8 Unicode'dur.

Belirtilen karakter setiyle etiketlenmiş veya bu karakter setini içeren tüm kaynakları sunmak için AddDefaultCharset işlevini kullanın .*text/html text/plainUTF-8*

```APACHECONF
<IfModule mod_mime.c>
  AddDefaultCharset utf-8
</IfModule>
```

**Belirli medya türleri için karakter setini ayarlayın.**
Aşağıdaki dosya türlerini, . dosyasında bulunan *AddCharset* yönergesini kullanarak *charset* parametre ayarıyla sunun .*UTF-8mod_mime*

```APACHECONF
<IfModule mod_mime.c>
  AddCharset utf-8 \
    .bbaw \
    .css \
    .htc \
    .ics \
    .js \
    .json \
    .manifest \
    .map \
    .markdown \
    .md \
    .mjs \
    .topojson \
    .vtt \
    .vcard \
    .vcf \
    .webmanifest \
    .xloc
</IfModule>
```

** *Mod_rewrite* ve *RewriteEngine* yönergeler**
mod_rewrite, gelen URL isteklerini düzenli ifade kurallarına göre dinamik olarak değiştirmenin bir yolunu sunar. Bu, istediğiniz URL'leri dahili URL yapınıza istediğiniz şekilde eşlemenizi sağlar.

Sınırsız sayıda kuralı ve her kurala bağlı sınırsız sayıda kural koşulunu destekleyerek gerçekten esnek ve güçlü bir URL manipülasyon mekanizması sağlar. URL manipülasyonları çeşitli testlere bağlı olabilir: sunucu değişkenleri, ortam değişkenleri, HTTP başlıkları, zaman damgaları, harici veritabanı aramaları ve çeşitli diğer harici programlar veya işleyiciler, ayrıntılı URL eşleştirmesi elde etmek için kullanılabilir.

**Olanak vermek mod_rewrite**
Etkinleştirilecek temel kalıp, *mod_rewrite* onu kullanan diğer tüm görevler için bir ön koşuldur.

Gerekli adımlar şunlardır:

1\.*RewriteRule* Yeniden yazma motorunu etkinleştirin (bu , yönergelerin çalışması için gereklidir ), RewriteEngine dokümanında belirtildiği gibi.
2\.*FollowSymLinks* Seçeneği henüz etkinleştirmediyseniz etkinleştirin . Temel Seçenekler dokümanına bakın.
3*.Eğer web barındırıcınız bu seçeneğe izin vermiyorsa *FollowSymlinks*, satırı yorum satırı haline getirmeniz veya silmeniz ve ardından tekrar etkinleştirmeniz gerekir; ancak bunun performans üzerindeki etkisini *Options  +SymLinksIfOwnerMatch* göz önünde bulundurun.
 - Bazı bulut barındırma hizmetleri sizden bazı ayarlar yapmanızı isteyecektir.RewriteBase
 - Rackspace SSS bölümüne ve HTTPD dokümanına bakın.
 - Sunucunuzun yapılandırmasına bağlı olarak, RewriteOptionsyeniden yazma motoru için bazı seçenekleri etkinleştirmek üzere bu yönergeyi kullanmanız da gerekebilir.
 
```APACHECONF
<IfModule mod_rewrite.c>
  RewriteEngine On
  Options +FollowSymlinks
  # Options +SymLinksIfOwnerMatch
  # RewriteBase /
  # RewriteOptions <options>
</IfModule>
```

**HTTPS'yi zorlamak**
Bu Yeniden Yazma kuralları, Apache HTTPD wiki'sinde açıklandığı gibi, URL'nin *http://*güvensiz sürümünden güvenli sürümüne yönlendirme yapacaktır .*https://*

```APACHECONF
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</IfModule>
```

TLS sertifikalarınızı oluşturmak için cPanel AutoSSL veya Let's Encrypt webroot yöntemini kullanıyorsanız, doğrulama istekleri HTTPS'ye yönlendirilirse sertifika doğrulaması başarısız olur. İhtiyaç duyduğunuz koşulları etkinleştirin.

```APACHECONF
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteCond %{REQUEST_URI} !^/\.well-known/acme-challenge/
  RewriteCond %{REQUEST_URI} !^/\.well-known/cpanel-dcv/[\w-]+$
  RewriteCond %{REQUEST_URI} !^/\.well-known/pki-validation/[A-F0-9]{32}\.txt(?:\ Comodo\ DCV)?$
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
</IfModule>
```

**www.URL'lerden yönlendirme**
*www.example.com* Bu yönergeler şu şekilde yeniden yazılacaktır *example.com:* .

Birden fazla kaynaktan (www'lu ve www'suz) içerik kopyalamamalısınız. Bu, SEO sorunlarına (yinelenen içerik) neden olabilir; bu nedenle, alternatiflerden birini seçmeli ve diğerini yönlendirmelisiniz. Ayrıca, arama motorlarının hangi URL'yi taraması gerektiğini belirtmek için (eğer bu özelliği destekliyorlarsa) Canonical URL'ler kullanmalısınız.

*%{ENV:PROTO}* Yeniden yazma işlemlerinin uygun şema ile otomatik olarak yönlendirilmesini sağlamak için değişkeni ayarlayın ( *http* veya *https*).

Bu kural, varsayılan olarak hem HTTP hem de HTTPS ortamlarının yönlendirme için kullanılabilir olduğunu varsayar.

```APACHECONF
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} =on
  RewriteRule ^ - [E=PROTO:https]
  RewriteCond %{HTTPS} !=on
  RewriteRule ^ - [E=PROTO:http]

  RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
  RewriteRule ^ %{ENV:PROTO}://%1%{REQUEST_URI} [R=301,L]
</IfModule>
```

**www.URL'lerin başına eklemek**
Bu kurallar URL'nin başına eklenecektir *www.*. Aynı içeriği asla iki farklı URL altında sunmamanız gerektiğini belirtmek önemlidir.

Bu durum SEO sorunlarına (yinelenen içerik) yol açabilir; bu nedenle alternatiflerden birini seçip diğerini yönlendirmelisiniz. Destekleyen arama motorları için, arama motorlarının hangi URL'yi taraması gerektiğini belirtmek üzere Canonical URL'ler kullanmalısınız .

*%{ENV:PROTO}* Yeniden yazma işlemlerinin uygun şema ile otomatik olarak yönlendirilmesini sağlamak için değişkeni ayarlayın ( *http* veya *https*).

Bu kural, varsayılan olarak hem HTTP hem de HTTPS ortamlarının yönlendirme için kullanılabilir olduğunu varsayar. TLS sertifikanız yönlendirme sırasında kullanılan alan adlarından birini işleyemiyorsa, bu koşulu etkinleştirmeniz gerekir.

Web sitenizin belirli bölümleri için "gerçek" alt alan adları kullanıyorsanız, aşağıdakiler iyi bir fikir olmayabilir.

```APACHECONF
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} =on
  RewriteRule ^ - [E=PROTO:https]
  RewriteCond %{HTTPS} !=on
  RewriteRule ^ - [E=PROTO:http]

  RewriteCond %{HTTPS} !=on

  RewriteCond %{HTTP_HOST} !^www\. [NC]
  RewriteCond %{SERVER_ADDR} !=127.0.0.1
  RewriteCond %{SERVER_ADDR} !=::1
  RewriteRule ^ %{ENV:PROTO}://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
</IfModule>
```

**Çerçeve seçenekleri**
Aşağıdaki örnek, *X-Frame-Options* yanıt başlığına DENY değerini göndererek, tarayıcılara web sayfasının içeriğini herhangi bir çerçeve içinde göstermemelerini ve böylece web sitesini clickjacking'e karşı korumalarını bildirir .

Bu ayar herkes için en uygun olmayabilir. Başlık için diğer iki olası değerX-Frame-Options olan *SAMEORIGIN* ve değerlerini okumalısınız .*ALLOW-FROM**

Web sitenizin tüm sayfaları için başlık gönderebilirsiniz *X-Frame-Options*, ancak bunun potansiyel dezavantajı, içeriğinizin çerçevelenmesini bile engellemesidir (örneğin: kullanıcılar web sitenizi Google Görsel Arama sonuç sayfası kullanarak ziyaret ettiğinde).

*X-Frame-Options* Bununla birlikte, kullanıcının durum değiştirme işlemi yapmasına olanak tanıyan tüm sayfalar için (örneğin, tek tıklamayla satın alma bağlantıları içeren sayfalar, ödeme veya banka havalesi onay sayfaları, kalıcı yapılandırma değişiklikleri yapan sayfalar vb.) başlığı gönderdiğinizden emin olmalısınız .

```APACHECONF
<IfModule mod_headers.c>
  Header always set X-Frame-Options "DENY" "expr=%{CONTENT_TYPE} =~ m#text/html#i"
</IfModule>
```

**İçerik Güvenlik Politikası (CSP)**
CSP (İçerik Güvenlik Politikası),*Content Security Policy* web siteniz için güvenilir içerik kaynaklarına izin veren bir politika belirleyerek siteler arası komut dosyası çalıştırma ve diğer içerik enjeksiyon saldırılarının riskini azaltır .

Tüm web siteleri için geçerli tek bir politika yoktur; aşağıdaki örnek, sitenize uyarlamanız için bir kılavuz niteliğindedir.

CSP uygulamanızı kolaylaştırmak için çevrimiçi bir CSP başlık oluşturucu kullanabilirsiniz . Ayrıca , başlığınızın istediğiniz gibi çalıştığından emin olmak için bir doğrulayıcı da kullanmalısınız .

```APACHECONF
<IfModule mod_headers.c>
  Content-Security-Policy "default-src 'self'; base-uri 'none'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" "expr=%{CONTENT_TYPE} =~ m#text\/(html|javascript)|application\/pdf|xml#i"
</IfModule>
```

Bu CSP:

1\.*default-src* Bu yönerge, varsayılan olarak tüm veri çekme işlemlerini geçerli web sitesinin kaynağıyla sınırlandırır ve *'self'* bu da tüm Fetch yönergeleri için bir yedek görevi görür .

- Bu, sitenize uygulanan tüm Fetch yönergelerini belirtmenize gerek kalmadığı için kullanışlıdır; örneğin: *connect-src 'self'; font-src 'self'; script-src 'self'; style-src 'self', vb.*
- Bu kısıtlama aynı zamanda, web sitenizin hangi site(ler)den kaynak yüklemesine izin verildiğini açıkça tanımlamanız gerektiği anlamına gelir. Aksi takdirde, istekte bulunan sayfayla aynı kaynağa kısıtlanacaktır.

2\.Bu öğenin web sitesinde kullanılmasını engeller *&lt;base&gt;.* Bu, saldırganların göreceli URL'lerden yüklenen kaynakların konumlarını değiştirmesini önlemek içindir.

- Eğer bu öğeyi kullanmak istiyorsanız *&lt;base&gt;* , bunun *base-uri 'self'* yerine şunu kullanın.

3\.Yalnızca geçerli kaynaktan gelen form gönderimlerine izin verilir:*form-action 'self'*

4\.*&lt;iframe&gt;* Bu ayar, web sayfalarınızın örneğin `<p>` veya `<p> *<object>*` öğesi içine yerleştirilmesini tüm web sitelerine (kendi siteniz dahil) engeller *frame-ancestors 'none'.*

- Bu yönerge, clickjacking *frame-ancestors* saldırılarından korunmaya yardımcı olur ve başlık bölümüne benzer.*X-Frame-Options*
- CSP başlığını destekleyen tarayıcılar, ayrıca belirtilmişse *X-Frame-Options* bunu yok sayacaktır.*frame-ancestors*

5\.*upgrade-insecure-requests* Bu yönergeyi ayarlayarak, tarayıcının HTTP üzerinden sunulan tüm kaynakları, sanki HTTPS üzerinden güvenli bir şekilde yüklenmiş gibi işlemesini sağlar.

- *upgrade-insecure-requests* Bu, üst düzey gezinme için HTTPS'yi garanti etmez. Web sitesinin kendisinin HTTPS üzerinden yüklenmesini zorlamak istiyorsanız, başlığı eklemeniz gerekir Strict-Transport-Security.

6\.*Content-Security-Policy* Komut dosyası çalıştırabilen tüm yanıtlara başlık eklenir . Bu, yaygın olarak kullanılan dosya türlerini içerir: HTML, XML ve PDF belgeleri. JavaScript dosyaları "tarama bağlamında" komut dosyası çalıştıramasa da, web çalışanlarını hedeflemek için dahil edilirler.

**Dizin erişimi**
*index.html* Bu yönerge, sunucunun kullanmak üzere yapılandırıldığı biçimde (örneğin ` <div>` veya `<div>` ) bir dizin dosyası bulunmayan dizinlere erişimi engelleyecektir *index.php.*

```APACHECONF
<IfModule mod_autoindex.c>
    Options -Indexes
</IfModule>
```

**Gizli dosyalara ve dizinlere erişimi engelleyin**
Macintosh ve Linux sistemlerinde, nokta ile başlayan dosyalar görünümden gizlenir ancak adlarını ve konumlarını biliyorsanız erişime kapalı değildir. Bu tür dosyalar genellikle kullanıcı tercihlerini veya bir yardımcı programın korunmuş durumunu içerir ve örneğin *.git* veya *.svn* dizinleri gibi oldukça özel yerleri içerebilir.

Bu dizin , "iyi bilinen konumlar" için standart (RFC 5785) *.well-known/* yol önekini temsil eder (örneğin: , ) ve bu nedenle, görünür içeriğine erişim engellenmemelidir./ *.well-known/manifest.json/.well-known/keybase.txt*

```APACHECONF
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_URI} "!(^|/)\.well-known/([^./]+./?)+$" [NC]
    RewriteCond %{SCRIPT_FILENAME} -d [OR]
    RewriteCond %{SCRIPT_FILENAME} -f
    RewriteRule "(^|/)\." - [F]
</IfModule>
```

**Hassas bilgiler içeren dosyalara erişimi engelleyin.**
Bazı metin düzenleyicilerin geride bırakabileceği ve herkesin erişimine açık olduğunda güvenlik riski oluşturabilecek yedekleme ve kaynak dosyalarına erişimi engelleyin.

*&lt;FilesMatch&gt;* Aşağıdaki örnekteki normal ifadeyi, üretim sunucunuzda bulunabilecek ve web sitenizle ilgili hassas bilgileri açığa çıkarabilecek tüm dosyaları içerecek şekilde güncelleyin . Bu dosyalar arasında yapılandırma dosyaları veya proje hakkında meta veriler içeren dosyalar yer alabilir.

```APACHECONF
<IfModule mod_authz_core.c>
  <FilesMatch "(^#.*#|\.(bak|conf|dist|fla|in[ci]|log|orig|psd|sh|sql|sw[op])|~)$">
    Require all denied
  </FilesMatch>
</IfModule>
```

**HTTP Sıkı Taşıma Güvenliği (HSTS)**
Kullanıcı tarayıcısına bir şey yazarsa *example.com*, sunucu onları web sitesinin güvenli sürümüne yönlendirse bile, bu durum saldırganın isteği düşürmesi veya yeniden yönlendirmesi için bir fırsat penceresi (ilk HTTP bağlantısı) bırakır.

Aşağıdaki başlık, kullanıcıların tarayıcının adres çubuğuna ne yazdıklarından bağımsız olarak, tarayıcının sunucunuza yalnızca HTTPS üzerinden bağlanmasını sağlar.

Unutmayın ki, Sıkı Taşıma Güvenliği (Strict Transport Security) ayarı geri alınamaz ve yönergede belirttiğiniz süre boyunca siteyi HTTPS üzerinden sunabilmeniz gerekir *max-age*. Artık geçerli bir TLS bağlantınız yoksa (örneğin, süresi dolmuş bir TLS sertifikası nedeniyle), ziyaretçileriniz HTTP üzerinden bağlanmaya çalışırken bile bir hata mesajı görecektir.

```APACHECONF
<IfModule mod_headers.c>
  # Header always set
  Strict-Transport-Security "max-age=16070400; includeSubDomains" "expr=%{HTTPS} == 'on'"
  # (1) Enable your site for HSTS preload inclusion.
  # Header always set
  Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" "expr=%{HTTPS} == 'on'"
</IfModule>
```

**Bazı tarayıcıların yanıtı MIME koduyla algılamasını engelleyin.**
Bazı eski tarayıcılar, sunucu yapılandırmasında düzgün şekilde ayarlanmamış olsa bile, bir kaynağın içerik türünü tahmin etmeye çalışır. Bu, otomatik indirme saldırılarına ve farklı kaynaklardan gelen veri sızıntılarına karşı savunmasızlığı azaltır.

```APACHECONF
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
</IfModule>
```

**Yönlendirme politikası**
*Referrer-Policy* Diğer kaynaklara istek gönderebilen (veya bu kaynaklara yönlendirme yapabilen) kaynaklar için yanıtlarımıza başlık ekliyoruz .

Bu, yaygın olarak kullanılan kaynak türlerini içerir: HTML, CSS, XML/SVG, PDF belgeleri, komut dosyaları ve çalışanlar.

Yönlendirme sızıntısını tamamen önlemek için bunun *no-referrer* yerine değeri belirtin. Bunun analiz araçlarını olumsuz etkileyebileceğini unutmayın.

Aşağıdakiler gibi hizmetleri kullanarak şunları kontrol edebilirsiniz *Referrer-Policy*:

- HTTP Gözlemevi
- güvenlik başlıkları.com

```APACHECONF
<IfModule mod_headers.c>
  Header always set Referrer-Policy "strict-origin-when-cross-origin" "expr=%{CONTENT_TYPE} =~ m#text\/(css|html|javascript)|application\/pdf|xml#i"
</IfModule>
```

**TRACE HTTP Yöntemini Devre Dışı Bırak**
Görünüşte zararsız olan TRACE yöntemi , bazı senaryolarda meşru kullanıcıların kimlik bilgilerini çalmak için başarıyla kullanılabilir. Bkz. Çapraz Site İzleme (XST) saldırısı ve OWASP Web Güvenliği Test Kılavuzu

Modern tarayıcılar artık JavaScript aracılığıyla yapılan TRACE isteklerini engelliyor, ancak Java gibi yöntemler kullanılarak tarayıcılarla TRACE istekleri göndermenin başka yolları da keşfedildi.

Ana sunucu yapılandırma dosyasına erişiminiz varsa, *TraceEnable* bunun yerine yönergeyi kullanın.

```APACHECONF
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_METHOD} ^TRACE [NC]
  RewriteRule .* - [R=405,L]
</IfModule>
```

**X-Powered-By Yanıt başlığını kaldırın**
PHP ve ASP.NET gibi bazı framework'ler, *X-Powered-By* kendileri hakkında bilgi içeren bir başlık (header) belirler (örneğin, adları, sürüm numaraları).

Bu başlık herhangi bir değer sağlamaz ve bazı durumlarda sağladığı bilgiler güvenlik açıklarını ortaya çıkarabilir.

```APACHECONF
<IfModule mod_headers.c>
  Header unset X-Powered-By
  Header always unset X-Powered-By
</IfModule>
````

Mümkünse, *X-Powered-By* başlığı dil/çerçeve düzeyinde devre dışı bırakmalısınız. Örneğin, PHP'de bunu aşağıdaki ayarı yaparak yapabilirsiniz *php.ini*:

```İNİ
expose_php = off;
```

**Apache tarafından oluşturulan sunucu bilgisi altbilgisini kaldır**
Apache'nin sunucu tarafından oluşturulan belgelere (örneğin, hata mesajları, dizin listeleri vb.) sunucu hakkında bilgi içeren bir alt bilgi satırı eklemesini engelleyin. Sunucu imzasının ne sağladığı hakkında daha fazla bilgi için *ServerSignature yönerge* belgelerine ve imzada sağlanan bilgilerin yapılandırılması hakkında bilgi için* ServerTokens yönergeye bakın.*

```APACHECONF
ServerSignature Off
```

**AcceptEncoding Bozuk başlıkları düzeltin**
Bazı proxy'ler ve güvenlik yazılımları *Accept-Encoding* HTTP başlığını bozar veya kaldırır. 

```APACHECONF
<IfModule mod_deflate.c>
  <IfModule mod_setenvif.c>
    <IfModule mod_headers.c>
      SetEnvIfNoCase ^(Accept-EncodXng|X-cept-Encoding|X{15}|~{15}|-{15})$ ^((gzip|deflate)\s*,?\s*)+|[X~-]{4,13}$ HAVE_Accept-Encoding
      RequestHeader append Accept-Encoding "gzip,deflate" env=HAVE_Accept-Encoding
    </IfModule>
  </IfModule>
</IfModule>
````

**Medya türlerini sıkıştırın**
AddOutputFilterByType yönergesini kullanarak aşağıdaki medya türlerinden biriyle etiketlenmiş tüm çıktıları sıkıştırın .

```APACHECONF
<IfModule mod_deflate.c>
  <IfModule mod_filter.c>
    AddOutputFilterByType DEFLATE "application/atom+xml" \
      "application/javascript" \
      "application/json" \
      "application/ld+json" \
      "application/manifest+json" \
      "application/rdf+xml" \
      "application/rss+xml" \
      "application/schema+json" \
      "application/geo+json" \
      "application/vnd.ms-fontobject" \
      "application/wasm" \
      "application/x-font-ttf" \
      "application/x-javascript" \
      "application/x-web-app-manifest+json" \
      "application/xhtml+xml" \
      "application/xml" \
      "font/eot" \
      "font/opentype" \
      "font/otf" \
      "font/ttf" \
      "image/bmp" \
      "image/svg+xml" \
      "image/vnd.microsoft.icon" \
      "text/cache-manifest" \
      "text/calendar" \
      "text/css" \
      "text/html" \
      "text/javascript" \
      "text/plain" \
      "text/markdown" \
      "text/vcard" \
      "text/vnd.rim.location.xloc" \
      "text/vtt" \
      "text/x-component" \
      "text/x-cross-domain-policy" \
      "text/xml"
  </IfModule>
</IfModule>
```

**Uzantıları medya türlerine eşle.**
Aşağıdaki dosya uzantılarını, AddEncoding kullanarak belirtilen kodlama türüne eşleştirin, böylece Apache bu dosya türlerini uygun *Content-Encoding* yanıt başlığıyla sunabilir (bu, Apache'nin bunları sıkıştırmasına neden OLMAZ!). Bu dosya türleri uygun bir yanıt başlığı olmadan sunulursa *Content-Encoding,* istemci uygulamaları (örneğin, tarayıcılar) önce yanıtı açmaları gerektiğini bilemez ve bu nedenle içeriği anlayamazlar.


```APACHECONF
<IfModule mod_deflate.c>
  <IfModule mod_mime.c>
    AddEncoding gzip svgz
  </IfModule>
</IfModule>
```

**Önbellek süresinin dolması**
Son kullanma tarihi çok ileride olan kaynakları , mod_expires modülü ve Cache-Control ile Expires başlıklarını kullanarak sunun.

```APACHECONF
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresDefault                                      "access plus 1 month"

  # CSS
    ExpiresByType text/css                              "access plus 1 year"
  # Data interchange
    ExpiresByType application/atom+xml                  "access plus 1 hour"
    ExpiresByType application/rdf+xml                   "access plus 1 hour"
    ExpiresByType application/rss+xml                   "access plus 1 hour"
    ExpiresByType application/json                      "access plus 0 seconds"
    ExpiresByType application/ld+json                   "access plus 0 seconds"
    ExpiresByType application/schema+json               "access plus 0 seconds"
    ExpiresByType application/geo+json                  "access plus 0 seconds"
    ExpiresByType application/xml                       "access plus 0 seconds"
    ExpiresByType text/calendar                         "access plus 0 seconds"
    ExpiresByType text/xml                              "access plus 0 seconds"
  # Favicon (cannot be renamed!) and cursor images
    ExpiresByType image/vnd.microsoft.icon              "access plus 1 week"
    ExpiresByType image/x-icon                          "access plus 1 week"
  # HTML
    ExpiresByType text/html                             "access plus 0 seconds"
  # JavaScript
    ExpiresByType text/javascript                       "access plus 1 year"
  # Manifest files
    ExpiresByType application/manifest+json             "access plus 1 week"
    ExpiresByType application/x-web-app-manifest+json   "access plus 0 seconds"
    ExpiresByType text/cache-manifest                   "access plus 0 seconds"
  # Markdown
    ExpiresByType text/markdown                         "access plus 0 seconds"
  # Media files
    ExpiresByType audio/ogg                             "access plus 1 month"
    ExpiresByType image/bmp                             "access plus 1 month"
    ExpiresByType image/gif                             "access plus 1 month"
    ExpiresByType image/jpeg                            "access plus 1 month"
    ExpiresByType image/svg+xml                         "access plus 1 month"
    ExpiresByType image/webp                            "access plus 1 month"
    # PNG and animated PNG
    ExpiresByType image/apng                            "access plus 1 month"
    ExpiresByType image/png                             "access plus 1 month"
    # HEIF Images
    ExpiresByType image/heic                            "access plus 1 month"
    ExpiresByType image/heif                            "access plus 1 month"
    # HEIF Image Sequence
    ExpiresByType image/heics                           "access plus 1 month"
    ExpiresByType image/heifs                           "access plus 1 month"
    # AVIF Images
    ExpiresByType image/avif                            "access plus 1 month"
    # AVIF Image Sequence
    ExpiresByType image/avis                            "access plus 1 month"
    ExpiresByType video/mp4                             "access plus 1 month"
    ExpiresByType video/ogg                             "access plus 1 month"
    ExpiresByType video/webm                            "access plus 1 month"
  # WebAssembly
    ExpiresByType application/wasm                      "access plus 1 year"
  # Web fonts
    # Collection
    ExpiresByType font/collection                       "access plus 1 month"
    # Embedded OpenType (EOT)
    ExpiresByType application/vnd.ms-fontobject         "access plus 1 month"
    ExpiresByType font/eot                              "access plus 1 month"
    # OpenType
    ExpiresByType font/opentype                         "access plus 1 month"
    ExpiresByType font/otf                              "access plus 1 month"
    # TrueType
    ExpiresByType application/x-font-ttf                "access plus 1 month"
    ExpiresByType font/ttf                              "access plus 1 month"
    # Web Open Font Format (WOFF) 1.0
    ExpiresByType application/font-woff                 "access plus 1 month"
    ExpiresByType application/x-font-woff               "access plus 1 month"
    ExpiresByType font/woff                             "access plus 1 month"
    # Web Open Font Format (WOFF) 2.0
    ExpiresByType application/font-woff2                "access plus 1 month"
    ExpiresByType font/woff2                            "access plus 1 month"
  # Other
    ExpiresByType text/x-cross-domain-policy            "access plus 1 week"
</IfModule>
```

## Sunucu MIME türlerinin doğru şekilde yapılandırılması
MIME türleri, e-postada veya web sunucuları ya da web uygulamaları tarafından sunulan içeriğin medya türünü tanımlar. İçeriğin nasıl işlenmesi ve görüntülenmesi gerektiği konusunda ipucu vermeyi amaçlarlar.

MIME türlerine örnekler:

- *text/html* HTML belgeleri için.
- *text/plain* düz metin için.
- *text/css* Basamaklı Stil Sayfaları (CSS) için.
- *text/javascript* JavaScript dosyaları için.
- *text/markdown* Markdown dosyaları için.
- *application/octet-stream* Kullanıcı eyleminin beklendiği ikili dosyalar için.

Sunucu varsayılan yapılandırmaları oldukça farklılık gösterir ve tanımlı içerik türü olmayan dosyalar için farklı varsayılan MIME türü değerleri belirler.

Apache Web Sunucusunun 2.2.7 öncesi sürümleri, bilinmeyen içerik türleri için MIME türünü "" *text/plain* veya " " olarak bildirecek şekilde yapılandırılmıştı *application/octet-stream*. Apache'nin modern sürümleri, nonebilinmeyen içerik türüne sahip dosyalar için farklı bir MIME türü bildirmektedir.

*text/plain* Varsayılan içerik türünü tanımlamazsanız Nginx hata raporu verecektir .

Yeni içerik türleri icat edildikçe veya web sunucularına eklendikçe, web yöneticileri yeni MIME türlerini web sunucularının yapılandırmasına eklemeyi ihmal edebilirler. Bu, web sunucuları ve uygulamalar tarafından bildirilen MIME türlerine saygı duyan tarayıcı kullanıcıları için önemli bir sorun kaynağıdır.

**Doğru MIME türleri neden önemlidir?**
Bir web sunucusu veya uygulaması, içerik için yanlış bir MIME türü bildirirse (bilinmeyen içerik için "varsayılan tür" de dahil olmak üzere), web tarayıcısı yazarın niyetini bilemez. Bu durum beklenmedik davranışlara neden olabilir.

Bazı web tarayıcıları doğru MIME türünü tahmin etmeye çalışabilir . Bu, yanlış yapılandırılmış web sunucularının ve uygulamalarının bu tarayıcılar için çalışmaya devam etmesine (ancak standardı doğru şekilde uygulayan diğer tarayıcılar için çalışmamasına) olanak tanır. HTTP spesifikasyonunu ihlal etmenin yanı sıra, bu birkaç önemli nedenden dolayı da kötü bir fikirdir:

*Kontrol kaybı*
Tarayıcı bildirilen MIME türünü göz ardı ederse, web yöneticileri ve yazarlar içeriklerinin nasıl işleneceği konusunda artık kontrol sahibi olmazlar.

Örneğin, web geliştiricilerine yönelik bir web sitesi, belirli örnek HTML belgelerini , belgelerin HTML olarak işlenip görüntülenmesi veya kaynak kod olarak görüntülenmesi için ya da MIME türü olarak göndermek isteyebilir. Tarayıcı MIME türünü tahmin ederse, bu seçenek yazar için artık mevcut text/htmlolmaz .text/plain

*Güvenlik*
Çalıştırılabilir programlar gibi bazı içerik türleri doğası gereği güvensizdir. Bu nedenle, bu MIME türleri genellikle bir web tarayıcısının bu tür içerik verildiğinde gerçekleştireceği eylemler açısından kısıtlanır. Çalıştırılabilir bir program kullanıcının bilgisayarında çalıştırılmamalı ve en azından kullanıcıya dosyayı indirmek isteyip istemediğini soran bir iletişim kutusu göstermelidir.

**JavaScript eski MIME türleri**
JavaScript MIME türleri hakkında bilgi ararken, JavaScript'e atıfta bulunan çeşitli MIME türleriyle karşılaşabilirsiniz. Bu MIME türlerinden bazıları şunlardır:

- *application/javascript*
- *application/ecmascript*
- *application/x-ecmascript*
- *application/x-javascript*
- *text/ecmascript*
- *text/javascript1.0*
- *text/javascript1.1*
- *text/javascript1.2*
- *text/javascript1.3*
- *text/javascript1.4*
- *text/javascript1.5*
- *text/x-ecmascript*
- *text/x-javascript*

Tarayıcılar bu alternatif MIME türlerinin herhangi birini, bazılarını veya tamamını destekleyebilirken, yalnızcatext/javascript JavaScript dosyalarının MIME türünü belirtmek için kullanmalısınız .

**Ayarlanacak MIME türünü nasıl belirleyebilirim?**
İçeriğinizi sunmak için kullanılacak doğru MIME türü değerini belirlemenin birkaç yolu vardır.

- İçeriğiniz ticari bir yazılım kullanılarak oluşturulduysa, uygulamanın hangi MIME türlerini bildirmesi gerektiğini görmek için satıcının belgelerini okuyun.
- IANA'nın MIME Medya Türleri kayıt defterine bakın ; bu defterde kayıtlı tüm MIME türleri hakkında bilgi bulunmaktadır.
- Dosya uzantısını FILExt veya Dosya uzantıları referansında arayarak , bu uzantıyla ilişkili MIME türlerini görebilirsiniz. Uygulamanın yalnızca bir harfle farklılık gösteren birden fazla MIME türüne sahip olabileceği için dikkatli olun.

**Gelen içeriğin MIME türünü nasıl kontrol edebilirim?**
- Firefox'ta

  - Dosyayı yükleyin ve Araçlar > Sayfa Bilgileri bölümüne giderek eriştiğiniz sayfanın içerik türünü öğrenin.
  - Ayrıca Araçlar > Web Geliştirici > Ağ bölümüne gidip sayfayı yeniden yükleyebilirsiniz. İstek sekmesi, sayfanın yüklediği tüm kaynakların bir listesini verir. Herhangi bir kaynağa tıkladığınızda, sayfanın *Content-Type* başlığı da dahil olmak üzere mevcut tüm bilgiler listelenir.

- Chrome'da

  - Dosyayı yükleyin ve Görünüm > Geliştirici > Geliştirici Araçları'na gidin ve Ağ sekmesini seçin . Sayfayı yeniden yükleyin ve incelemek istediğiniz kaynağı seçin. Başlıklar altında arama yapın *Content-Type* ve kaynağın içerik türünü raporlayacaktır.
- Sayfa kaynak kodunda MIME türünü belirten bir öğe arayın &lt;meta&gt;, örneğin `<MIME type>` &lt;meta http-equiv="Content-Type" content="text/html"&gt;.

  - Standartlara göre, &lt;meta&gt;Content-Type başlığı mevcutsa MIME türünü belirten öğe göz ardı edilmelidir.

IANA, kayıtlı MIME Medya Türlerinin bir listesini tutar . HTTP spesifikasyonu, web'de kullanılan medya türlerini tanımlamak için kullanılan bir MIME türleri üst kümesini tanımlar.

**Sunucunuzu doğru MIME türlerini gönderecek şekilde nasıl yapılandırabilirsiniz?**
*Content-Type* Amaç, sunucunuzu her belge için doğru başlığı gönderecek şekilde yapılandırmaktır .

- Apache web sunucusunu kullanıyorsanız, farklı belge türleri ve bunlara karşılık gelen MIME türleri örnekleri için Apache Configuration: .htaccess dosyasının Medya - - Türleri ve Karakter Kodlamaları bölümüne bakın.
- Eğer Nginx kullanıyorsanız, Nginx'in .htaccessbuna eşdeğer bir aracı olmadığını ve tüm değişikliklerin ana yapılandırma dosyasına dahil edileceğini unutmayın.
- Eğer içerik oluşturmak için sunucu tarafı bir betik veya çerçeve kullanıyorsanız, içerik türünü belirtme şekli kullandığınız araca bağlıdır. Çerçeve veya kütüphanenin belgelerini kontrol edin.

Hangi sunucu sistemini kullanırsanız kullanın, elde etmeniz gereken etki, `<pdf>` adından *Content-Type* sonra iki nokta üst üste ve boşluk, ardından da MIME türü içeren bir yanıt başlığı ayarlamaktır. Üst düzey ortamlar genellikle sayfa oluşturulurken bu tür başlıkların ayarlanmasına izin verir. Örneğin, bir PHP ortamında, PDF kaynakları için yanıt başlığını şu şekilde ayarlayabilirsiniz:

```PHP
header('Content-Type: application/pdf')
```

Bunun yerine sadece şunu kullanarak ayarlamaya çalışmak header('application/pdf')işe yaramayacaktır.

## Çerçeve kullanmadan Node.js sunucusu
**[Bu makale, herhangi bir framework kullanılmadan Node.js](https://nodejs.org/en/)** ile oluşturulmuş statik bir dosya sunucusunu göstermektedir . Node.js'nin mevcut durumu, statik dosya sunucusu için ihtiyaç duyduğumuz hemen hemen her şeyin yerleşik API'ler ve birkaç satır kodla sağlanmasını mümkün kılmaktadır.

**Örnek**
Node.js ile oluşturulmuş statik dosya sunucusu:

```JS
import * as fs from "node:fs";
import * as http from "node:http";
import * as path from "node:path";

const PORT = 8000;

const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  js: "text/javascript",
  css: "text/css",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  ico: "image/x-icon",
  svg: "image/svg+xml",
};

const STATIC_PATH = path.join(process.cwd(), "./static");

const toBool = [() => true, () => false];

const prepareFile = async (url) => {
  const urlAsPath = decodeURI(url);
  const paths = [STATIC_PATH, urlAsPath];
  if (url.endsWith("/")) paths.push("index.html");
  const filePath = path.join(...paths);
  const pathTraversal = !filePath.startsWith(STATIC_PATH);
  const exists = await fs.promises.access(filePath).then(...toBool);
  const found = !pathTraversal && exists;
  const streamPath = found ? filePath : `${STATIC_PATH}/404.html`;
  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);
  return { found, ext, stream };
};

http
  .createServer(async (req, res) => {
    const file = await prepareFile(req.url);
    const statusCode = file.found ? 200 : 404;
    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
    res.writeHead(statusCode, { "Content-Type": mimeType });
    file.stream.pipe(res);
    console.log(`${req.method} ${req.url} ${statusCode}`);
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
```

**Bozulma**
Aşağıdaki satırlar dahili Node.js modüllerini içe aktarır.

```JS
import * as fs from "node:fs";
import * as http from "node:http";
import * as path from "node:path";
```

Sonraki adımda sunucuyu oluşturmak için bir fonksiyonumuz var. Bu fonksiyon, üzerinde dinleme yaparak başlatabileceğimiz *https.createServer* bir nesne döndürüyor .*ServerPORT*

```JS
http
  .createServer((req, res) => {
    /* handle http requests */
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
```

Asenkron fonksiyon *prepareFile* şu yapıyı döndürür: *{ found: boolean, ext: string, stream: ReadableStream }*. Dosya sunulabiliyorsa (sunucu işlemine erişim varsa ve yol geçişi güvenlik açığı bulunmuyorsa), başarıyı gösteren HTTP durumunu döndürürüz *200( statusCode* aksi takdirde döndürürüz *HTTP 404*). Diğer durum kodlarının içinde bulunabileceğini unutmayın *http.STATUS_CODES*. 404durumuyla dosyanın içeriğini döndürürüz '*/404.html*'.

İstenen dosyanın uzantısı ayrıştırılacak ve küçük harfe dönüştürülecektir. Ardından, *MIME_TYPES* koleksiyonda doğru MIME türleri aranacaktır . Eşleşme bulunmazsa, *application/octet-stream* varsayılan tür olarak kullanılacaktır.

Son olarak, herhangi bir hata yoksa, istenen dosyayı gönderiyoruz. Bu dosya, (akışın bir örneğine ) aktarılacak *file.stream* bir akış içerecektir .*Readable res Writable*

```JS
res.writeHead(statusCode, { "Content-Type": mimeType });
file.stream.pipe(res);
```

---

## Bölüm 2: Web Performansı (Web Performance)

# Çeviri: MDN — Web performansı (Web performance)
**Kaynak:** [MDN Web Docs — Web performance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance)


## İçindekiler
- 1\. Web performansının "nedeni"
- 2\. Web performansı nedir?
- 3\. Algılanan performans
- 4\. Performans ölçümü
- 5\. Multimedya: Görüntüler
- 6\. Multimedya: video
- 7\. Yüksek Performanslı JavaScript
- 8\. Performanslı HTML
- 9\. Yüksek Performanslı CSS
- 10\. Web performansının iş dünyası açısından önemi
- 11\. Web Performansı En İyi Uygulamaları ve İpuçları

---

 # Web performansı

 **Kaynak:** [Web performance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance)

 Web siteleri oluşturmak HTML, CSS ve JavaScript gerektirir. İnsanların kullanmak istediği, kullanıcıları çeken ve elde tutan web siteleri ve uygulamalar oluşturmak için iyi bir kullanıcı deneyimi yaratmanız gerekir. İyi bir kullanıcı deneyiminin bir parçası da içeriğin hızlı yüklenmesini ve kullanıcı etkileşimine duyarlı olmasını sağlamaktır. Bu, web performansı olarak bilinir ve bu modülde performanslı web siteleri oluşturmanın temellerine odaklanacaksınız.

Başlangıç ​​seviyesindeki öğrenme materyallerimizin geri kalanı, performans ve **[erişilebilirlik](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility)** gibi web en iyi uygulamalarına olabildiğince bağlı kalmaya çalışmaktadır; ancak, bu konulara özel olarak odaklanmak ve bunlara aşina olduğunuzdan emin olmak da faydalıdır.

## Web performansının "nedeni"

**Kaynak:** [The "why" of web performance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/why_web_performance)

Web performansının erişilebilirlik, kullanıcı deneyimi ve işletme hedefleriniz için neden önemli olduğunu ele almaktadır.Web performansı, yavaş işleyen süreçlerin hızlı görünmesini sağlamak da dahil olmak üzere, web sitelerini hızlandırmakla ilgilidir . Web performansı, site içeriğinin bir web tarayıcısında ne kadar hızlı yüklendiğini ve görüntülendiğini ve kullanıcı etkileşimine ne kadar iyi yanıt verdiğini ifade eder . Kötü performans gösteren siteler, görüntülenme ve girdilere yanıt verme konusunda yavaştır. Kötü performans gösteren siteler, site terkini artırır. En kötü durumda, kötü performans içeriğin tamamen erişilemez olmasına neden olur. Web performansı için iyi bir hedef, kullanıcıların performansı fark etmemesidir. Bireyin site performansı algısı öznel olsa da, yükleme ve görüntüleme ölçülebilir. İyi performans çoğu site ziyaretçisi için açık olmayabilir, ancak çoğu kişi yavaş bir siteyi hemen fark edecektir. 

- **Performansa neden önem vermeliyiz?**
**[Web performansı ve ilgili en iyi uygulamalar, web sitenizi ziyaret edenlerin iyi bir deneyim yaşaması için hayati önem taşır. Bir anlamda, web performansı web erişilebilirliğinin](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility)** bir alt kümesi olarak düşünülebilir . Performansta olduğu gibi erişilebilirlikte de, site ziyaretçisinin siteye erişmek için kullandığı cihazı ve cihaz bağlantı hızını dikkate almanız gerekir.

- **Dönüşüm oranlarını iyileştirin**
Bir sitenin indirme ve yükleme süresini azaltmak, dönüşüm oranlarını ve kullanıcı tutma oranını artırır.

Dönüşüm oranı , site ziyaretçilerinin ölçülen veya istenen bir eylemi gerçekleştirme oranıdır. Örneğin, bu bir satın alma işlemi yapmak, bir makale okumak veya bir bültene abone olmak olabilir. Dönüşüm oranı olarak ölçülen eylem, web sitesinin iş hedeflerine bağlıdır.

Performans, dönüşümü etkiler; web performansını iyileştirmek dönüşümü de iyileştirir. Site ziyaretçileri, bir sitenin iki saniye veya daha kısa sürede yüklenmesini bekler; bazen mobil cihazlarda (genellikle daha uzun sürer) daha da kısa sürede yüklenmesini beklerler. Bu site ziyaretçileri, yavaş siteleri 3 saniyede terk etmeye başlarlar.

Bir sitenin yüklenme hızı önemli bir faktördür. Site, kullanıcı etkileşimine yavaş tepki veriyorsa veya düzgün çalışmıyorsa, bu durum site ziyaretçilerinin ilgisini ve güvenini kaybetmesine neden olur.

- **İşte performans iyileştirmelerine dair bazı gerçek dünya örnekleri:**

-  **[Tokopedia, 3G bağlantıları için yükleme süresini 14 saniyeden 2 saniyeye düşürdü ve ziyaretçi sayısında %19, toplam oturum sayısında %35, yeni kullanıcı sayısında %7, aktif kullanıcı sayısında %17 ve kullanıcı başına oturum sayısında %16 artış gördü].(https://wpostats.com/2018/05/30/tokopedia-new-users.html)**

- **[Pinterest sayfalarının performans odaklı yeniden yapılandırılması, bekleme süresinde %40 azalmaya, SEO trafiğinde %15 artışa ve kayıt olma oranında %15 artışa yol açtı.](https://wpostats.com/2017/03/10/pinterest-seo.html)**

İnsanların kullanmak istediği web siteleri ve uygulamalar oluşturmak; site ziyaretçilerini çekmek ve tutmak için, iyi bir kullanıcı deneyimi sağlayan erişilebilir bir site oluşturmanız gerekir. Web sitesi oluşturmak HTML, CSS ve JavaScript gerektirir; genellikle resim ve video gibi ikili dosya türleri de buna dahildir. Sitenizi oluştururken verdiğiniz kararlar ve seçtiğiniz araçlar, bitmiş çalışmanın performansını büyük ölçüde etkileyebilir.

İyi performans bir avantajdır. Kötü performans ise bir dezavantajdır. Site hızı, hemen çıkma oranlarını, dönüşümü, geliri, kullanıcı memnuniyetini ve arama motoru sıralamasını doğrudan etkiler. Performansı yüksek sitelerin ziyaretçi tutma oranını ve kullanıcı memnuniyetini artırdığı gösterilmiştir. Yavaş içerik ise site terkine yol açarak bazı ziyaretçilerin bir daha geri dönmemesine neden olmaktadır. İstemci ve sunucu arasında geçen veri miktarını azaltmak, tüm taraflar için maliyetleri düşürür. HTML/CSS/JavaScript ve medya dosyası boyutlarını küçültmek, hem yükleme süresini hem de sitenin güç tüketimini azaltır 
Performansı izlemek önemlidir. Ağ hızı ve cihaz yetenekleri de dahil olmak üzere birçok faktör performansı etkiler. Tek bir performans ölçütü yoktur; ve farklı iş hedefleri, sitenin veya desteklediği kuruluşun hedefleri için farklı ölçütlerin daha uygun olabileceği anlamına gelebilir. Sitenizin performansının nasıl algılandığı, kullanıcı deneyimidir!

## Web performansı nedir?

**Kaynak:** [What is web performance?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)

Web performansı, yavaş süreçlerin hızlı görünmesini sağlamak da dahil olmak üzere, web sitelerini hızlandırmakla ilgilidir . Site hızlı yükleniyor mu, kullanıcının siteyle hızlı bir şekilde etkileşime girmesine izin veriyor mu ve bir şeyin yüklenmesi zaman alıyorsa (örneğin, yükleme göstergesi) güven verici geri bildirim sunuyor mu? Kaydırma ve animasyonlar sorunsuz mu? Bu makale, web optimizasyonunda kullanılan teknolojilere, tekniklere ve araçlara bakarak, objektif ve ölçülebilir web performansına* kısa bir giriş sunmaktadır.

Web performansı, bir web sitesinin veya uygulamanın nesnel ölçümü ve kullanıcı tarafından algılanan deneyimidir. Bu, aşağıdaki ana alanları içerir:
- **Genel yükleme süresini azaltma :** Web sitesinin oluşturulması için gereken dosyaların kullanıcının bilgisayarına indirilmesi ne kadar sürüyor? Bu süre , **[gecikme süresi](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Understanding_latency)**, dosyalarınızın boyutu, dosya sayısı ve diğer faktörlerden etkilenir. Genel bir strateji, dosyalarınızı mümkün olduğunca küçük tutmak, yapılan HTTP isteklerinin sayısını mümkün olduğunca azaltmak ve dosyaları daha çabuk kullanılabilir hale getirmek için akıllı yükleme teknikleri (örneğin ön yükleme ) kullanmaktır.

- **Sitenin mümkün olan en kısa sürede kullanılabilir hale getirilmesi :** Bu temelde, kullanıcının siteyi gerçekten hızlı bir şekilde kullanmaya başlayabilmesi için web sitesi varlıklarınızın mantıklı bir sırayla yüklenmesi anlamına gelir. Kullanıcı birincil görevleriyle meşgul olurken diğer varlıklar arka planda yüklenmeye devam edebilir ve bazen varlıkları yalnızca gerçekten ihtiyaç duyulduğunda yükleriz (buna **[tembel yükleme](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading)** denir ). Sitenin yüklenmeye başladıktan sonra kullanılabilir bir başlangıca ulaşması için geçen süreye **[etkileşime geçme süresi](https://developer.mozilla.org/en-US/docs/Glossary/Time_to_interactive)** denir.

- **Akıcılık ve etkileşim :** Uygulama güvenilir ve kullanımı keyifli mi? Kaydırma akıcı mı? Düğmeler tıklanabilir mi? Açılır pencereler hızlı açılıyor mu ve açılırken akıcı bir şekilde animasyonlu mu? Uygulamaların akıcı hissettirmesi için dikkate alınması gereken birçok en iyi uygulama vardır; örneğin, animasyon için JavaScript yerine CSS animasyonları kullanmak ve DOM'daki değişiklikler nedeniyle UI'nin gerektirdiği yeniden çizim sayısını en aza indirmek.

- **Algılanan performans :** Bir web sitesinin kullanıcıya ne kadar hızlı göründüğü, web sitesinin gerçekte ne kadar hızlı olduğundan daha fazla kullanıcı deneyimi üzerinde etkiye sahiptir. Kullanıcının performansınızı nasıl algıladığı, herhangi bir objektif istatistikten daha önemli, hatta belki de daha da önemlidir, ancak özneldir ve kolayca ölçülemez. Algılanan performans, bir ölçüt değil, kullanıcı bakış açısıdır. Bir işlem uzun sürecek olsa bile (gecikme veya başka bir nedenden dolayı), kullanıcıyı beklerken bir yükleme göstergesi veya bir dizi yararlı ipucu ve püf noktası (veya şakalar veya uygun olduğunu düşündüğünüz başka herhangi bir şey) göstererek meşgul tutmak mümkündür. Bu yaklaşım, hiçbir şey göstermemekten çok daha iyidir; çünkü hiçbir şey göstermemek, işlemin çok daha uzun sürdüğü hissini uyandıracak ve kullanıcılarınızın sitenin bozuk olduğunu düşünmesine ve vazgeçmesine yol açabilir.

- **Performans ölçümleri :** Web performansı, bir uygulamanın gerçek ve algılanan hızlarını ölçmeyi, mümkün olan yerlerde optimizasyon yapmayı ve ardından optimize edilen şeyin optimize edilmiş halde kalmasını sağlamak için performansı izlemeyi içerir. Bu, bir dizi ölçüt (başarıyı veya başarısızlığı gösterebilen ölçülebilir göstergeler) ve bu ölçütleri ölçmek için kullanılan araçları içerir; bunları bu modül boyunca ele alacağız.

Özetlemek gerekirse, gecikme süresi, uygulama boyutu, DOM düğümlerinin sayısı, yapılan kaynak isteklerinin sayısı, JavaScript performansı, CPU yükü ve daha fazlası dahil olmak üzere birçok özellik performansı etkiler. Yükleme ve yanıt sürelerini en aza indirmek ve deneyimi olabildiğince hızlı bir şekilde kullanılabilir ve etkileşimli hale getirerek gecikmeyi gizlemek için ek özellikler eklemek önemlidir; bu sırada deneyimin daha uzun süren kısımları eşzamansız olarak yüklenir.

- **Not:** Web performansı, yükleme süresi, saniyedeki kare sayısı ve **[etkileşim süresi](https://developer.mozilla.org/en-US/docs/Glossary/Time_to_interactive)** gibi nesnel ölçümlerin yanı sıra , içeriğin yüklenmesinin ne kadar sürdüğüne dair öznel deneyimleri de içerir.

- **İçerik nasıl oluşturuluyor?**

Web performansını, ardındaki sorunları ve yukarıda bahsettiğimiz temel konu alanlarını etkili bir şekilde anlamak için, tarayıcıların nasıl çalıştığına dair bazı ayrıntıları gerçekten anlamanız gerekir. Bunlar şunları içerir:

- *Tarayıcı nasıl çalışır ?* Bir URL isteği gönderdiğinizde ve Enter"/" tuşuna bastığınızda Return, tarayıcı o web sitesinin dosyalarını barındıran sunucunun nerede olduğunu bulur, ona bağlantı kurar ve dosyaları ister. Ayrıntılı bir genel bakış için **["Sayfayı doldurma: Tarayıcı nasıl çalışır"](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work)** bölümüne bakın.

- *Kaynak sırası .* HTML index dosyanızın kaynak sırası performansı önemli ölçüde etkileyebilir. Index dosyasından bağlantı verilen ek varlıkların indirilmesi genellikle kaynak sırasına bağlı olarak ardışık olarak gerçekleşir, ancak bu değiştirilebilir ve kesinlikle optimize edilmelidir; bazı kaynakların içerikleri ayrıştırılıp yürütülene kadar ek indirmeleri engellediğini unutmamak gerekir.

- *Kritik yol .* Bu, dosyalar sunucudan indirildikten sonra tarayıcının web belgesini oluşturmak için kullandığı süreçtir. Tarayıcı, iyi tanımlanmış bir dizi adımı izler ve mevcut kullanıcı eylemiyle ilgili içeriğin görüntülenmesine öncelik vermek için kritik oluşturma yolunu optimize etmek, içerik oluşturma süresinde önemli iyileştirmelere yol açacaktır. Daha fazla bilgi için **[Kritik oluşturma yoluna bakın.](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path)**

- *Belge Nesne Modeli (DOM).* DOM, HTML içeriğinizi ve öğelerinizi düğümlerden oluşan bir ağaç yapısı olarak temsil eden bir ağaç yapısıdır. Bu, tüm HTML özniteliklerini ve düğümler arasındaki ilişkileri içerir. Sayfa yüklendikten sonra kapsamlı DOM manipülasyonu (örneğin, düğüm ekleme, silme veya taşıma) performansı etkileyebilir, bu nedenle DOM'un nasıl çalıştığını ve bu tür sorunların nasıl hafifletilebileceğini anlamak önemlidir. Daha fazla bilgi için **[Belge Nesne Modeli sayfasına bakın .](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)**

- *Gecikme .* Bunu daha önce kısaca belirtmiştik, ancak özetle, gecikme, web sitenizin varlıklarının sunucudan kullanıcının bilgisayarına ulaşması için geçen süredir. TCP ve HTTP bağlantılarının kurulmasında ek yük vardır ve istek ve yanıt baytlarının ağ üzerinden ileri geri gönderilmesinde kaçınılmaz bir gecikme söz konusudur, ancak gecikmeyi azaltmanın bazı yolları vardır (örneğin, daha az dosya indirerek yaptığınız HTTP isteği sayısını azaltmak, sitenizi dünya çapında daha evrensel olarak performanslı hale getirmek için bir **[CDN kullanmak ve sunucudan dosyaları daha verimli bir şekilde sunmak için HTTP/2 kullanmak). Bu konu hakkında daha fazla bilgiyi Gecikmeyi Anlamak bölümünde bulabilirsiniz .](https://developer.mozilla.org/en-US/docs/Glossary/CDN)**

## Kullanıcılar performansı nasıl algılıyor?

**Kaynak:** [Perceived performance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Perceived_performance)

Web sitenizin milisaniye cinsinden ne kadar hızlı olduğundan daha önemli olan, kullanıcılarınızın sitenizi ne kadar hızlı algıladığıdır. Bu algılar, gerçek sayfa yükleme süresi, bekleme süresi, kullanıcı etkileşimine yanıt verme hızı ve kaydırma ve diğer animasyonların akıcılığı gibi faktörlerden etkilenir.
bir web sitesinin performansı, yanıt verme hızı ve güvenilirliğinin öznel bir ölçüsüdür. Başka bir deyişle, bir web sitesinin kullanıcıya ne kadar hızlı göründüğüdür. Gerçek çalışma hızından daha zor ölçülebilir ve nicelendirilebilir, ancak belki de daha da önemlidir.

- **Genel Bakış**
Sayfaların ne kadar hızlı (ve sorunsuz) yüklendiği ve kullanıcı etkileşimine nasıl yanıt verdiği algısı, kaynakları getirmek için gereken gerçek süreden bile daha önemlidir. Sitenizin fiziksel olarak daha hızlı çalışmasını sağlayamasanız da, kullanıcılarınız için ne kadar hızlı hissettirdiğini iyileştirebilirsiniz .

Algılanan performansı iyileştirmenin iyi bir genel kuralı, kullanıcının bir işlemin tamamen tamamlanmasını (herhangi bir bilgi vermeden önce) beklemesini sağlamaktansa, hızlı yanıt ve düzenli durum güncellemeleri sağlamanın genellikle daha iyi olduğudur. Örneğin, bir sayfa yüklenirken, tüm resimlerin ve diğer kaynakların yüklenmesini beklemek yerine, metin geldiğinde onu görüntülemek daha iyidir. İçerik tamamen indirilmemiş olsa bile, kullanıcı bir şeylerin olduğunu görebilir ve içerikle etkileşime geçmeye başlayabilir.
Benzer şekilde, kullanıcı uzun süren bir işlemi gerçekleştirmek için bir bağlantıya tıkladığında "yükleme animasyonu" göstermek daha iyidir. Bu, işlemin tamamlanma süresini değiştirmezken, site daha hızlı yanıt veriyormuş gibi görünür ve kullanıcı sitenin yararlı bir şey üzerinde çalıştığını anlar.

- **Performans ölçütleri**
Bir sitenin kullanıcısının nasıl "hissettiğini" değerlendirmek için kullanılabilecek tek bir ölçüt veya test yoktur. Bununla birlikte, "yararlı göstergeler" olabilecek bir dizi ölçüt mevcuttur:

**[İlk Boya](https://developer.mozilla.org/en-US/docs/Glossary/First_paint)**
İlk boyama işleminin başlama zamanı. Bu değişikliğin görünür olmayabileceğini unutmayın; basit bir arka plan rengi güncellemesi veya daha da az fark edilebilir bir şey olabilir.

**[İlk İçerik Boyama](https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint)** (FCP)
İlk önemli işleme (örneğin, metin, ön plan veya arka plan görüntüsü, tuval veya SVG vb.) kadar geçen süre. Bu içeriğin mutlaka yararlı veya anlamlı olmadığını unutmayın.

**[İlk Anlamlı Boyama](https://developer.mozilla.org/en-US/docs/Glossary/First_meaningful_paint)** (FMP)
Faydalı içeriğin ekrana yansıtılma süresi.

**[En Büyük İçerikli Boya](https://w3c.github.io/largest-contentful-paint/)** (LCP)
Görüntü alanında görünen en büyük içerik öğesinin oluşturulma süresi.

**[Hız endeksi](https://developer.mozilla.org/en-US/docs/Glossary/Speed_index)**
Görünür ekrandaki piksellerin boyanması için geçen ortalama süreyi ölçer.

**[Etkileşim zamanı](https://developer.mozilla.org/en-US/docs/Glossary/Time_to_interactive)**
Kullanıcı arayüzünün kullanıcı etkileşimine açılacağı zamana kadar geçen süre (yani yükleme işleminin son **[uzun süren görevinin tamamlanması](https://developer.mozilla.org/en-US/docs/Glossary/Long_task)**).

- **Performansı iyileştirme**
Algılanan performansı iyileştirmeye yardımcı olacak birkaç ipucu ve püf noktası şunlardır:

- **İlk yükü en aza indirin**
Algılanan performansı iyileştirmek için, orijinal sayfa yükleme süresini en aza indirin. Başka bir deyişle, kullanıcının hemen etkileşimde bulunacağı içeriği önce indirin ve geri kalanını "arka planda" indirin. İndirilen toplam içerik miktarı aslında artabilir, ancak kullanıcı yalnızca çok az bir miktar için beklediğinden , indirme daha hızlı hissettirir.

Etkileşimli işlevselliği içerikten ayırın ve ilk yüklemede görünen metin, stil ve resimleri yükleyin. İlk sayfa yüklemesinde kullanılmayan veya görünmeyen resimleri, iframe'leri, medyayı veya komut dosyalarını geciktirerek veya tembel yükleme yöntemiyle yükleyin. Ayrıca, yüklediğiniz varlıkları optimize etmelisiniz. Resimler ve videolar en uygun formatta, sıkıştırılmış ve doğru boyutta sunulmalıdır.

- **İçerik atlamalarını ve diğer yeniden düzenlemeleri önleyin.**
Görseller veya diğer öğeler, içeriğin aşağıya doğru kaymasına veya farklı bir konuma atlamasına neden olabilir; örneğin üçüncü taraf reklamlarının yüklenmesi gibi. Bu durum, sayfanın hala yükleniyormuş gibi görünmesine ve algılanan performans açısından olumsuz etkilere yol açabilir. Özellikle kullanıcı etkileşimiyle başlatılmayan içerik yeniden düzenlemesi, kullanıcı deneyimi açısından oldukça kötüdür. Bazı öğelerin diğerlerinden daha yavaş yüklenmesi ve diğer içerik ekrana yansıtıldıktan sonra yüklenmesi söz konusuysa, önceden plan yapın ve içeriklerin atlamaması veya yeniden boyutlanmaması için yerleşimde yer bırakın; bu durum özellikle site etkileşimli hale geldikten sonra daha belirgindir.

- **Yazı tipi dosyası gecikmelerinden kaçının.**
Yazı tipi seçimi önemlidir. Uygun bir yazı tipi seçmek, kullanıcı deneyimini büyük ölçüde iyileştirebilir. Algılanan performans açısından bakıldığında, "optimal olmayan yazı tipi içe aktarma" işlemi, metin biçimlendirilirken veya diğer yazı tiplerine geçiş yapılırken titremeye neden olabilir.

Yedek yazı tiplerini aynı boyut ve kalınlıkta yapın, böylece yazı tipleri yüklendiğinde sayfa değişikliği daha az fark edilir olur.

- **Etkileşimli öğeler etkileşimlidir.**
Görünür etkileşimli öğelerin her zaman etkileşimli ve duyarlı olduğundan emin olun. Giriş öğeleri görünürse, kullanıcı bunlarla gecikme olmadan etkileşim kurabilmelidir. Kullanıcılar, tepki süresi 50 ms'den fazla olduğunda bir şeyin gecikmeli olduğunu hissederler. İçerik yeniden boyaması 16,67 ms'den (veya saniyede 60 kareden) daha yavaş olduğunda veya düzensiz aralıklarla yeniden boyandığında sayfanın kötü davrandığını hissederler.

Otomatik tamamlama gibi özellikleri aşamalı bir iyileştirme haline getirin: giriş modalını görüntülemek için CSS, otomatik tamamlama özelliği kullanılabilir hale geldikçe eklemek için ise JavaScript kullanın.

- **Görev başlatıcılarının daha etkileşimli görünmesini sağlayın.**
İçerik isteğini anında yapmak, keydownbeklemek yerine keyupiçeriğin algılanan yüklenme süresini 200 ms azaltabilir. Bu keyupolaya ilgi çekici ancak göze batmayan 200 ms'lik bir animasyon eklemek, algılanan yüklenme süresini 200 ms daha azaltabilir. 400 ms zaman tasarrufu sağlamıyorsunuz, ancak kullanıcı içerik beklemeye başlayana kadar bekleme hissini yaşamıyor.

## Performans ölçümü

**Kaynak:** [Measuring performance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Measuring_performance)

Performansı ölçmek, uygulamanızın, sitenizin veya web hizmetinizin başarısını değerlendirmenize yardımcı olacak önemli bir ölçüt sağlar.

Örneğin, uygulamanızın performansını bir rakiple karşılaştırmak veya uygulamanızın performansını farklı sürümler arasında karşılaştırmak için performans ölçütlerini kullanabilirsiniz. Ölçütleriniz kullanıcılarınız, siteniz ve iş hedeflerinizle ilgili olmalıdır. Bunlar, teknik olmayan paydaşların da anlayabileceği bir formatta toplanmalı, tutarlı bir şekilde ölçülmeli ve analiz edilmelidir.

Bu makale, web sitenizin performansını ölçmek ve optimize etmek için kullanabileceğiniz web performans metriklerine erişim araçlarını tanıtmaktadır.

- **Performans araçları**
Performansı ölçmek ve iyileştirmek için kullanabileceğiniz çeşitli araçlar mevcuttur. Bunlar genel olarak iki kategoriye ayrılabilir:

- 1\. **[PageSpeed ​​Insights](https://pagespeed.web.dev/)** veya Firefox **[Ağ İzleyici](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)** ve **[Performans İzleyici](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)**gibi performansı gösteren veya ölçen araçlar . Bu araçlar, web sitenizin ne kadar hızlı veya yavaş yüklendiğini gösterir. Ayrıca web uygulamanızı optimize etmek için iyileştirilebilecek alanları da belirtirler.

- 2\. Özel performans araçları oluşturmak için kullanabileceğiniz performans **[API'leri .](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API)**

- **Genel performans raporlama araçları**

**[PageSpeed ​​Insights](https://pagespeed.web.dev/)** gibi araçlar hızlı performans ölçümleri sağlayabilir. Bir URL girerek saniyeler içinde performans raporu alabilirsiniz. Rapor, web sitenizin mobil ve masaüstü cihazlarda nasıl performans gösterdiğini gösteren puanlar içerir. Bu, neleri iyi yaptığınızı ve nelerin geliştirilebileceğini anlamak için iyi bir başlangıçtır.

Bu metnin yazıldığı sırada, MDN'nin performans raporu özeti aşağıdaki gibidir:

![Test](./assets/01-print.png)

Performans raporu, bir kullanıcının sayfada herhangi bir şey görüntülenmeden önce ne kadar beklemesi gerektiği, bir sayfayı görüntülemek için kaç bayt indirilmesi gerektiği ve daha birçok şey hakkında bilgi içerir . Ayrıca ölçülen değerlerin iyi mi yoksa kötü mü olduğunu da size bildirir.

**[webpagetest.org,](https://www.webpagetest.org/)** sitenizi otomatik olarak test eden ve değerli ölçümler sunan bir başka araç örneğidir.

En sevdiğiniz web sitesini bu araçlardan geçirerek puanları görebilirsiniz.

- **Ağ izleme araçları**
Modern tarayıcılar, yüklenen sayfalara karşı çalıştırabileceğiniz ve performanslarını belirleyebileceğiniz araçlara sahiptir; bunların çoğu benzer şekilde çalışır. Örneğin, Firefox **[Ağ İzleyicisi,](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)** ağdan indirilen tüm dosyalar hakkında ayrıntılı bilgi ve her birinin indirilmesinin ne kadar sürdüğünü gösteren bir zaman grafiği sunar.

![Test](./assets/02-print.png)


- **Performans izleme araçları**
**[Ayrıca, farklı işlemler gerçekleştirirken bir web uygulamasının veya sitenin kullanıcı arayüzünün performansını ölçmek için Firefox Performans İzleyicisi](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)** gibi tarayıcı performans araçlarını da kullanabilirsiniz . Bu, web uygulamanızı veya sitenizi yavaşlatabilecek özellikleri gösterir.

![Test](./assets/03-print.png)

- **Performans API'leri**
Web için kod yazarken, kendi performans ölçme araçlarınızı oluşturmak için kullanabileceğiniz birçok **[Web API'si](https://developer.mozilla.org/en-US/docs/Web/API)** mevcuttur.

**[Navigasyon Zamanlama API'sini](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Navigation_timing)** kullanarak , önceki sayfanın boşaltılması için gereken süre, alan adı aramalarının ne kadar sürdüğü, pencerenin yükleme işleyicisinin yürütülmesi için harcanan toplam süre ve daha fazlası dahil olmak üzere istemci tarafı web performansını ölçebilirsiniz. Aşağıdaki diyagramda yer alan tüm navigasyon olaylarıyla ilgili ölçümler için API'yi kullanabilirsiniz.

![Test](./assets/04-print.png)

Geçerli sayfa için performansla ilgili bilgilere erişim sağlayan Performans API'si, Gezinme Zamanlaması API'si, Kullanıcı Zamanlaması API'si ve Kaynak Zamanlaması API'si dahil olmak üzere çeşitli API'ler içerir . **[Bu arayüzler](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Navigation_timing)** , **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/User_timing)** görevlerinin **[tamamlanması](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Resource_timing)** için geçen sürenin doğru bir şekilde ölçülmesini sağlar.

**[PerformanceEntry](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry)** nesnesi, performans zaman çizelgesinin bir parçasıdır . Bir performans girdisi,**[mark](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceMark)** bir performans gerçekleştirilerek veya **[measure](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceMeasure)**(örneğin bir **[mark()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark)**yöntemi çağırarak) uygulamanın belirli bir noktasında doğrudan oluşturulabilir . Performans girdileri ayrıca, bir resim gibi bir kaynağı yüklemek gibi dolaylı yollarla da oluşturulur.

PerformanceObserver **[API'si, performans ölçüm olaylarını gözlemlemek ve tarayıcının performans zaman çizelgesine yeni](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)** **[performans girdileri](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry)** kaydedildikçe sizi bilgilendirmek için kullanılabilir .

## Multimedya: Görüntüler

**Kaynak:** [Multimedia: Images ](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Multimedia)

Web performansını iyileştirmenin en kolay yolu genellikle medya optimizasyonudur. Her kullanıcı aracısının yeteneğine, boyutuna ve piksel yoğunluğuna bağlı olarak farklı medya dosyaları sunmak mümkündür. Bu makalede, görsellerin performansa etkisini ve görsel başına gönderilen bayt sayısını azaltma yöntemlerini ele alacağız.
Görseller ve videolar gibi medya dosyaları, ortalama bir web sitesi için indirilen baytların %70'inden fazlasını oluşturmaktadır. İndirme performansı açısından, medya dosyalarını ortadan kaldırmak ve dosya boyutunu küçültmek en kolay çözümdür.

- **Multimedya içeriğinizi neden optimize etmelisiniz?**
Ortalama bir web sitesinin bant genişliğinin %51'i görsellerden, %25'i ise videolardan geliyor ; bu nedenle multimedya içeriğinizi ele almanın ve optimize etmenin önemli olduğunu söylemek yanlış olmaz.

Veri kullanımına dikkat etmeniz gerekiyor. Birçok kişi sınırlı veri paketleri kullanıyor veya megabayt başına ödeme yapıyor. Bu sadece yeni ortaya çıkan pazarlara özgü bir sorun değil. 

Ayrıca, birçok mobil cihazın sınırlı RAM'e sahip olduğunu da göz önünde bulundurmanız gerekir. Görüntüler indirildiğinde, bunların bellekte saklanması gerektiğini unutmamak önemlidir.

- **Görüntü iletimini optimize etme**
**[Bant genişliğinin en büyük tüketicisi olmasına rağmen, resim indirme işleminin algılanan performansa](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Perceived_performance)** etkisi birçok kişinin beklediğinden çok daha düşüktür (esas olarak sayfa metin içeriği anında indirildiği ve kullanıcılar resimlerin yüklenme sürecini anında görebildiği için). Bununla birlikte, iyi bir kullanıcı deneyimi için ziyaretçinin resimleri mümkün olan en kısa sürede görebilmesi yine de önemlidir.

- **Yükleme stratejisi**
Birçok web sitesi için en büyük iyileştirmelerden biri, ziyaretçinin sayfayı kaydırıp kaydırmadığına bakılmaksızın, ilk sayfa yüklemesinde tüm resimleri indirmek yerine, resimlerin sayfanın alt kısmında tembel yükleme (lazy loading) yöntemiyle yüklenmesidir. Tarayıcılar bunu `<img> `, `<img> ` ve ` <body>` loading="lazy"öğelerindeki `<img>` özniteliği aracılığıyla yerel olarak sağlar ve bunu yapabilen birçok istemci tarafı JavaScript kütüphanesi de mevcuttur.<img> <iframe><video><audio>

Görsellerin yalnızca bir kısmını yüklemenin ötesinde, görsellerin formatını da incelemelisiniz:

- 1\. En uygun dosya formatlarını mı yüklüyorsunuz?
- 2\. Görüntüleri iyice sıkıştırdınız mı?
- 3\. Doğru boyutları mı yüklüyorsunuz?

**En uygun format**
En uygun dosya formatı genellikle görüntünün niteliğine bağlıdır.

SVG formatı , az renk içeren ve fotoğraf gerçekçiliğinde olmayan görüntüler için daha uygundur. Bu, kaynağın vektör grafik formatında mevcut olmasını gerektirir. Böyle bir görüntü yalnızca bitmap olarak mevcutsa, **[PNG](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics)** formatı tercih edilmelidir. Bu tür motiflere örnek olarak logolar, illüstrasyonlar, grafikler veya ikonlar verilebilir (not: SVG'ler ikon yazı tiplerinden çok daha iyidir!). Her iki format da şeffaflığı destekler.

PNG dosyaları üç farklı çıktı kombinasyonuyla kaydedilebilir:

-  24 bit renk + 8 bit şeffaflık — boyut pahasına tam renk doğruluğu ve pürüzsüz şeffaflık sunar. Muhtemelen bu kombinasyondan kaçınarak WebP'yi tercih etmek isteyeceksiniz.
-  8 bit renk + 8 bit şeffaflık — en fazla 255 renk sunar ancak pürüzsüz şeffaflık sağlar. Boyutu çok büyük değildir. Muhtemelen isteyeceğiniz PNG dosyaları bunlardır.
-  8 bit renk + 1 bit şeffaflık — en fazla 255 renk sunar ve piksel başına ya hiç şeffaflık sunmaz ya da tam şeffaflık sunar; bu da şeffaflık kenarlarının sert ve pürüzlü görünmesine neden olur. Boyut küçüktür, ancak bunun bedeli görsel kalitenin düşük olmasıdır.

SVG dosyalarını optimize etmek için iyi bir çevrimiçi araç **[SVGOMG'dir](https://imageoptim.com/online)** . PNG dosyaları için ise **[ImageOptim](https://imageoptim.com/online)** veya **[Squoosh](https://squoosh.app/)** çevrimiçi araçları mevcuttur .

Şeffaflık içermeyen fotoğraf motiflerinde, seçilebilecek çok daha geniş bir format yelpazesi vardır. Güvenli bir yol izlemek istiyorsanız, iyi sıkıştırılmış Aşamalı JPEG'leri tercih edebilirsiniz. Aşamalı JPEG'ler, normal JPEG'lerin aksine, aşamalı olarak işlenir (bu nedenle adı da böyledir), yani kullanıcı, görüntünün tam çözünürlükte baştan sona yüklenmesi veya yalnızca tamamen indirildikten sonra işlenmesi yerine, görüntü indirildikçe netliği artan düşük çözünürlüklü bir sürüm görür. Bunlar için iyi bir sıkıştırıcı, örneğin çevrimiçi görüntü optimizasyon aracı Squoosh'ta kullanılabilen MozJPEG'dir . %75'lik bir kalite ayarı, iyi sonuçlar verecektir.

Diğer formatlar, sıkıştırma konusunda JPEG'in yeteneklerini geliştirir, ancak her tarayıcıda mevcut değildir:

**[WebP — ](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#webp_image)**Hem resimler hem de animasyonlu resimler için mükemmel bir seçim. WebP, PNG veya JPEG'e göre çok daha iyi sıkıştırma sunar ve daha yüksek renk derinlikleri, animasyonlu kareler, şeffaflık vb. özellikleri destekler (ancak aşamalı görüntülemeyi desteklemez). macOS Big Sur veya önceki sürümlerinde Safari 14 hariç tüm büyük tarayıcılar tarafından desteklenir.

**[AVIF —](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#avif_image)** Yüksek performansı ve telifsiz görüntü formatı olması nedeniyle hem resimler hem de animasyonlu görüntüler için iyi bir seçimdir (WebP'den bile daha verimli, ancak o kadar yaygın olarak desteklenmiyor). Şu anda Chrome, Edge, Opera ve Firefox'ta desteklenmektedir. Squoosh, önceki görüntü formatlarını AVIF'e dönüştürmek için iyi bir çevrimiçi araçtır.

**JPEG2000 —** bir zamanlar JPEG'in halefi olması bekleniyordu ancak yalnızca Safari'de destekleniyor. Aşamalı görüntülemeyi de desteklemiyor.

JPEG-XR ve JPEG2000'e verilen sınırlı desteği ve kod çözme maliyetlerini de hesaba kattığımızda, JPEG'in tek ciddi rakibi WebP'dir. Bu nedenle görsellerinizi bu formatta da sunabilirsiniz. Bu, **[` type` özniteliğine](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture#the_type_attribute)** sahip <picture>bir `<style>` öğesi yardımıyla `<style>` öğesi aracılığıyla yapılabilir .<source>

Eğer tüm bunlar biraz karmaşık geliyorsa veya ekibiniz için çok fazla iş yükü gibi görünüyorsa, görüntü formatını, görüntüyü talep eden cihaz veya tarayıcı türüne göre otomatik olarak sunan çevrimiçi görüntü içerik dağıtım ağları (CDN) hizmetlerini de kullanabilirsiniz. Popüler seçenekler arasında **[Cloudinary ,](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps)** **[Image Engine ,](https://imageengine.io/)** **[ImageKit](https://imagekit.io/docs/image-optimization#automatic-format-conversion)** ve **[imgix](https://www.imgix.com/)** yer almaktadır .

Son olarak, sayfanıza hareketli görüntüler eklemek isterseniz, Safari'nin video dosyalarının <head> <img>ve <body> öğeleri içinde kullanılmasına izin verdiğini bilmelisiniz. Bunlar ayrıca diğer tüm modern tarayıcılar için Hareketli WebP<picture> eklemenize de olanak tanır .

```HTML
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

**En uygun boyutta servis etmek**
Görüntü sunumunda "tek beden herkese uyar" yaklaşımı en iyi sonuçları vermez; yani daha küçük ekranlar için daha düşük çözünürlüklü görüntüler, daha büyük ekranlar için ise daha yüksek çözünürlüklü görüntüler sunmanız gerekir. Bunun yanı sıra, yüksek DPI ekranlara (örneğin "Retina") sahip cihazlara daha yüksek çözünürlüklü görüntüler sunmanız da gerekir. Bu nedenle, birçok ara görüntü varyantı oluşturmanın yanı sıra, doğru dosyayı doğru tarayıcıya sunmanın bir yoluna da ihtiyacınız vardır. İşte burada `<img>` ve `<img>` öğelerinizi `<img>` ve/veya `<img>` öznitelikleriyle yükseltmeniz gerekir <picture>. Duyarlı <source>görüntüler doğru şekilde **[yapılır: `<img>` ve `<img>` kılavuzu](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)** , tüm bu özniteliklerin nasıl birleştirileceğini ayrıntılı olarak açıklar.**[media](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/source#media)** **[sizes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/source#sizes)** **[<picture>srcset](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)**

**Yüksek DPI ekranlarla ilgili akılda tutulması gereken iki ilginç etki şunlardır:**

 1\. Yüksek DPI'lı ekranlarda, insanlar sıkıştırma bozukluklarını çok daha geç fark eder; bu da bu ekranlar için tasarlanan görüntülerde sıkıştırma oranını normalin çok ötesine çıkarabileceğiniz anlamına gelir.

 2\. **[Çok az insan 2× DPI'nin üzerindeki çözünürlük artışını fark edebilir](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio)** ; bu da 2×'ten daha yüksek çözünürlüğe sahip görüntüler sunmanıza gerek olmadığı anlamına gelir.

**Görüntülerin indirilme önceliğini (ve sıralamasını) kontrol etme**
Ziyaretçilerin önüne en önemli görselleri daha az önemli görsellerden daha önce sunmak, algılanan performansı iyileştirebilir.

Öncelikle kontrol etmeniz gereken şey, içerik resimlerinizin `<img>` <img>veya ` <picture><img>` öğelerini kullandığından ve arka plan resimlerinizin CSS'de background-image`<img>` ile tanımlandığından emin olmaktır; `<img>` öğelerinde referans verilen resimlere, <img>arka plan resimlerinden daha yüksek yükleme önceliği atanır.

İkinci olarak, Öncelik İpuçları'nın benimsenmesiyle, fetchPriorityresim etiketlerinize bir özellik ekleyerek önceliği daha da kontrol edebilirsiniz. Resimlerde öncelik ipuçlarının bir örnek kullanım alanı, ilk resmin sonraki resimlerden daha yüksek önceliğe sahip olduğu slayt gösterileridir.

**Oluşturma stratejisi: Görüntüler yüklenirken takılmayı önleme**
Görseller eşzamansız olarak yüklenir ve ilk çizimden sonra yüklenmeye devam eder; bu nedenle, boyutları yüklenmeden önce tanımlanmazsa, sayfa içeriğinde yeniden düzenlemelere neden olabilirler. Örneğin, görsellerin yüklenmesiyle metin sayfanın aşağısına doğru itilebilir. Bu nedenle, tarayıcının düzen içinde bunlar için yer ayırabilmesi için widthve özelliklerinin ayarlanması önemlidir.height

Bir HTML öğesine bir resmin en boy oranı widthve en yükseklik öznitelikleri eklendiğinde , **[resmin en boy oranı](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios#adjusting_aspect_ratios_of_replaced_elements)**, resim yüklenmeden önce tarayıcı tarafından hesaplanabilir. Bu **[en boy oranı](https://developer.mozilla.org/en-US/docs/Glossary/Aspect_ratio)** , resmi görüntülemek için gereken alanı ayırmak için kullanılır ve resim indirildiğinde ve ekrana çizildiğinde yerleşim kaymasını azaltır veya hatta önler. Yerleşim kaymasının azaltılması, iyi bir kullanıcı deneyimi ve web performansı için önemli bir bileşendir.height**[<img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img)**

Tarayıcılar, HTML ayrıştırılırken içeriği işlemeye başlar; bu işlem genellikle resimler de dahil olmak üzere tüm varlıklar indirilmeden önce gerçekleşir. Boyutların eklenmesi, tarayıcıların sayfa ilk kez işlenirken resimler yüklendiğinde her resim için doğru boyutta bir yer tutucu kutu ayırmasını sağlar.

![Test](./assets/05-print.png)


width`and` öznitelikleri olmadan height, yer tutucu alan oluşturulmaz; bu da sayfa oluşturulduktan sonra resim yüklendiğinde sayfada fark edilir bir **[takılmaya veya düzen kaymasına neden olur. Sayfa yeniden akışı ve yeniden çizimleri performans ve kullanılabilirlik sorunlarına yol açar.](https://developer.mozilla.org/en-US/docs/Glossary/Jank)**

CLS metriği , sayfa yüklenirken oluşan takılmayı veya görünür içeriğin görüntüleme alanında ne kadar kaydığını ölçer. Kötü CLS'nin başlıca sorumluları, boyut belirtilmemiş ve varlık yüklendiğinde yeniden düzenlenen değiştirilmiş öğelerdir; bunlar arasında resimler, reklamlar, gömülü içerikler ve boyutu belirtilmemiş iframe'ler ve **[aspect-ratioweb](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/aspect-ratio)** yazı tipleri bulunur.

Tarayıcılar, gerçek görüntü yüklenmeden önce görüntüleri boyutlandırmak için bir mekanizmaya sahiptir. Bir `<img>` <img>, <video>`<div>` veya `<div>` <input type="button">öğesine width`<div>` ve height`<div>` öznitelikleri atandığında, en boy oranı yükleme zamanından önce hesaplanır ve sağlanan boyutlar kullanılarak tarayıcıya sunulur.
Duyarlı tasarımlarda, bir kapsayıcı bir resimden daha dar olduğunda, resimlerin kapsayıcılarının dışına taşmasını önlemek için genellikle aşağıdaki CSS kodu kullanılır:

```CSS
img {
  max-width: 100%;
  height: auto;
}
```

Duyarlı düzenler için faydalı olsa da, genişlik ve yükseklik bilgileri dahil edilmediğinde takılmalara ve düşük CLS'ye neden olur; çünkü öğe ayrıştırılırken <img>ancak resim yüklenmeden önce yükseklik bilgisi yoksa, bu CSS yüksekliği etkili bir şekilde 0'a ayarlamış olur. Sayfa ekrana ilk kez oluşturulduktan sonra resim yüklendiğinde, sayfa yeniden düzenlenir ve yeniden çizilir, bu da yeni belirlenen yükseklik için yer açarken bir düzen kaymasına neden olur.

Daha sonra en boy oranı yüksekliği hesaplamak için kullanılır ve bu nedenle öğeye doğru boyut uygulanır <img>; bu da, resim yüklendiğinde listelenen boyutlar tam olarak doğru olmasa bile, yukarıda bahsedilen takılmanın oluşmayacağı veya minimum düzeyde olacağı anlamına gelir.

En boy oranı, yalnızca görüntü yüklenirken yer ayırmak için kullanılır. Görüntü yüklendikten sonra, aspect-ratioözniteliklerden gelen en boy oranı yerine, yüklenen görüntünün doğal en boy oranı veya özelliğin değeri kullanılır. Bu, öznitelik boyutları doğru olmasa bile, görüntünün doğru en boy oranında görüntülenmesini sağlar.

Son on yıldaki geliştirici en iyi uygulamaları , en boy oranı eşlemesi nedeniyle bir HTML'deki bir resmin ` <p> width` ve `<div> ` özelliklerini atlamayı önermiş olsa da , bu iki özelliği eklemek geliştirici en iyi uygulaması olarak kabul edilir.height**[<img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img)**

background-colorArka plan resimleri için, resmin indirilmesinden önce üzerine yerleştirilen içeriğin okunabilir kalması için bir değer belirlemeniz önemlidir .

## Multimedya: video

**Kaynak:** [Multimedia: video ](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/video)

Önceki bölümde öğrendiğimiz gibi, medya, yani resimler ve videolar, ortalama bir web sitesi için indirilen baytların %70'inden fazlasını oluşturmaktadır. Resimlerin optimizasyonuna zaten göz atmıştık. Bu makalede ise web performansını iyileştirmek için videoların optimizasyonuna odaklanacağız.

**Multimedya içeriğinizi neden optimize etmelisiniz?**
Ortalama bir web sitesi için **[bant genişliğinin %25'i videodan kaynaklanmaktadır .](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367)** Video optimizasyonu, daha iyi web sitesi performansına dönüşen çok büyük bant genişliği tasarrufları potansiyeline sahiptir.

**Video dağıtımını optimize etme**
Aşağıdaki bölümlerde şu optimizasyon teknikleri açıklanmaktadır:

**[tüm videoları sıkıştır](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/video#compress_all_videos)**
**[<source>sipariş optimizasyonu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/video#optimize_source_order)**
**[sessiz videodan sesi kaldır](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/video#remove_audio_from_muted_hero_videos)**
**[video ön yüklemesini optimize et](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/video#video_preload)**
**[yayın akışını göz önünde bulundurun](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/video#consider_streaming)**

**Tüm videoları sıkıştırın**
Çoğu video sıkıştırma işlemi, videodaki bitişik kareleri karşılaştırarak, her iki karede de aynı olan ayrıntıları kaldırmayı amaçlar. Videoyu sıkıştırın ve WebM ve MPEG-4/H.264 dahil olmak üzere birden fazla video formatına dışa aktarın.

Video düzenleme yazılımınızın dosya boyutunu küçültme özelliği muhtemelen vardır. Yoksa, kodlama, kod çözme, dönüştürme ve diğer optimizasyon işlevlerini gerçekleştiren **[FFmpeg](https://www.ffmpeg.org/)** (aşağıdaki bölümde ele alınmıştır) gibi çevrimiçi araçlar mevcuttur.

**<source>Sipariş optimizasyonu**

Video kaynaklarını en küçüğünden en büyüğüne doğru sıralayın. Örneğin, 10 MB ve 12 MB formatlarında video sıkıştırmaları verildiğinde, önce 10 MB'lık kaynağı tanımlayın:
```HTML
<video width="400" height="300" controls>
  <!-- WebM: 10 MB -->
  <source src="video.webm" type="video/webm" />
  <!-- MPEG-4/H.264: 12 MB -->
  <source src="video.mp4" type="video/mp4" />
</video>
```

Tarayıcı, anladığı ilk formatı indirir. Amaç, daha büyük sürümlerden önce daha küçük sürümler sunmaktır. En küçük sürümde, en çok sıkıştırılmış videonun bile iyi görünmesini sağlayın. Bazı sıkıştırma algoritmaları, videonun (kötü) bir şekilde animasyonlu GIF gibi görünmesine neden olabilir. 128 KB'lık bir video, 10 MB'lık bir indirmeden daha iyi bir kullanıcı deneyimi sağlayabilir gibi görünse de, grenli GIF benzeri bir video marka veya proje üzerinde olumsuz bir etki yaratabilir.

**Sessizleştirilmiş kahraman videolarından sesi kaldırın**
Ses içermeyen ana video veya diğer videolar için sesi kaldırmak akıllıca bir çözümdür.

```HTML
<video autoplay loop muted playsinline id="hero-video">
  <source src="banner_video.webm" type='video/webm; codecs="vp8, vorbis"' />
  <source src="web_banner.mp4" type="video/mp4" />
</video>
```

Yukarıdaki kahraman video kodu, konferans web sitelerinde ve şirket ana sayfalarında yaygındır. Otomatik oynatılan, döngüye alınan ve sesi kapalı bir video içerir. Herhangi bir kontrol bulunmadığından, sesi duymanın bir yolu yoktur. Ses genellikle boştur, ancak yine de mevcuttur ve bant genişliğini kullanmaya devam eder. Her zaman sesi kapalı olan bir videoyla birlikte ses sunmanın hiçbir nedeni yoktur. Sesi kaldırmak, bant genişliğinden %20 tasarruf sağlayabilir.

Kullandığınız yazılıma bağlı olarak, dışa aktarma ve sıkıştırma sırasında sesi kaldırabilirsiniz. Eğer bu mümkün değilse, FFmpeg adlı ücretsiz bir yardımcı program bunu sizin için yapabilir. Sesi kaldırmak için FFmpeg komut dizisi şöyledir:

```BASH
ffmpeg -i original.mp4 -an -c:v copy audioFreeVersion.mp4
```

**Video ön yükleme**

Ön yükleme özelliği üç seçenek sunar: auto, metadata, ve none. Varsayılan ayar 'dir metadata. Bu ayarlar, sayfa yüklenirken video dosyasının ne kadarının indirileceğini kontrol eder. Daha az popüler videolar için indirmeyi erteleyerek veri tasarrufu sağlayabilirsiniz.

Bu ayar preload="none", oynatılana kadar videonun hiçbir bölümünün indirilmemesini sağlar. Başlangıcı geciktirir, ancak oynatılma olasılığı düşük olan videolar için önemli veri tasarrufu sağlar.

Daha mütevazı bant genişliği tasarrufu sağlayan bu ayar, preload="metadata"sayfa yüklenirken videonun %3'üne kadarını indirebilir. Bu, bazı küçük veya orta boyutlu dosyalar için kullanışlı bir seçenektir.

Ayarı değiştirerek autotarayıcıya videonun tamamını otomatik olarak indirmesini söylersiniz. Bunu yalnızca oynatma olasılığı çok yüksek olduğunda yapın. Aksi takdirde, çok fazla bant genişliği israfına neden olur.

**Yayın akışını göz önünde bulundurun.**

**[Video akışı, son kullanıcıya uygun video boyutu ve bant genişliğinin](https://www.smashingmagazine.com/2018/10/video-playback-on-the-web-part-2/)** (ağ hızına bağlı olarak) iletilmesini sağlar. Duyarlı görüntülere benzer şekilde, doğru boyuttaki video tarayıcıya iletilir; bu da hızlı video başlatma, düşük ara belleğe alma ve optimize edilmiş oynatma sağlar.

## Yüksek Performanslı JavaScript

**Kaynak:** [Performant JavaScript ](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/JavaScript)

Web sitelerinizde JavaScript'i nasıl kullandığınızı ve neden olabileceği performans sorunlarını nasıl azaltabileceğinizi düşünmek çok önemlidir. Ortalama bir web sitesi için indirilen baytların %70'inden fazlasını resimler ve videolar oluştururken, bayt başına JavaScript'in olumsuz performans etkisi daha büyük bir potansiyele sahiptir; indirme sürelerini, işleme performansını ve CPU ve pil kullanımını önemli ölçüde etkileyebilir. Bu makale, web sitenizin performansını artırmak için JavaScript'i optimize etmeye yönelik ipuçları ve teknikler sunmaktadır.

**Optimize etmek mi, etmemek mi?**
Kodunuzu optimize etmeye başlamadan önce cevaplamanız gereken ilk soru "neyi optimize etmem gerekiyor?" sorusudur. Aşağıda ele alınan ipuçları ve tekniklerin bazıları, hemen hemen her web projesine fayda sağlayacak iyi uygulamalardır, bazıları ise yalnızca belirli durumlarda gereklidir. Tüm bu teknikleri her yerde uygulamaya çalışmak muhtemelen gereksizdir ve zaman kaybı olabilir. Her projede hangi performans optimizasyonlarına gerçekten ihtiyaç duyulduğunu belirlemelisiniz.

Bunu yapmak için sitenizin **[performansını ölçmeniz gerekir .](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Measuring_performance)** Önceki bağlantıda gösterildiği gibi, performansı ölçmenin, bazıları gelişmiş **[performans API'lerini](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API)** içeren çeşitli yolları vardır . Ancak başlamanın en iyi yolu, sayfa yüklemesinin hangi bölümlerinin uzun sürdüğünü ve optimize edilmesi gerektiğini görmek için yerleşik tarayıcı **[ağ](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools)** ve **[performans araçları gibi araçları nasıl kullanacağınızı öğrenmektir.](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools)**

**JavaScript indirmelerini optimize etme**
Kullanabileceğiniz en performanslı ve en az engelleme yapan JavaScript, hiç kullanmadığınız JavaScript'tir. Mümkün olduğunca az JavaScript kullanmalısınız. Aklınızda bulundurmanız gereken bazı ipuçları:

**Her zaman bir çerçeveye ihtiyacınız olmayabilir :** Bir **[JavaScript çerçevesi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries)** kullanmaya aşina olabilirsiniz . Bu çerçeveyi kullanmada deneyimli ve kendinize güveniyorsanız ve sağladığı tüm araçları beğeniyorsanız, çoğu projeyi oluşturmak için tercih edeceğiniz araç olabilir. Ancak, çerçeveler JavaScript ağırlıklıdır. Çok az JavaScript gereksinimi olan oldukça statik bir deneyim oluşturuyorsanız, muhtemelen bu çerçeveye ihtiyacınız yoktur. İhtiyacınız olanı birkaç satır standart JavaScript kullanarak uygulayabilirsiniz.

**Daha basit bir çözümü düşünün :** Uygulamak için gösterişli, ilgi çekici bir çözümünüz olabilir, ancak kullanıcılarınızın bunu takdir edip etmeyeceğini düşünün. Daha basit bir şeyi mi tercih ederler?

**Kullanılmayan kodu kaldırın:** Bu kulağa çok açık gelebilir, ancak geliştirme sürecinde eklenen kullanılmayan işlevleri temizlemeyi unutan geliştiricilerin sayısı şaşırtıcı derecede fazladır. Eklenen ve kaldırılan şeyler konusunda dikkatli ve bilinçli olmalısınız. Tüm kodlar, kullanılsın veya kullanılmasın, ayrıştırılır; bu nedenle, indirmeleri hızlandırmanın hızlı bir yolu, kullanılmayan tüm işlevlerden kurtulmaktır. Ayrıca, bir çerçevede bulunan işlevlerin yalnızca küçük bir kısmını kullanacağınızı da göz önünde bulundurun. Yalnızca ihtiyacınız olan kısmı içeren özel bir çerçeve sürümü oluşturmak mümkün mü?

**Tarayıcının yerleşik özelliklerini göz önünde bulundurun :** JavaScript aracılığıyla kendi özelliğinizi oluşturmak yerine, tarayıcının zaten sahip olduğu bir özelliği kullanabilirsiniz. Örneğin:
- 1\.**[Dahili istemci tarafı form doğrulamasını kullanın .](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation#using_built-in_form_validation)**
- 2\.Tarayıcının kendi **[<video>](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation#using_built-in_form_validation)** oynatıcısını kullanın.
- 3\.JavaScript animasyon kütüphanesi yerine **[CSS animasyonlarını](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using)** kullanın.

JavaScript kodunuzu kritik ve kritik olmayan kısımları temsil eden birden fazla dosyaya ayırmanız da gerekir. **[JavaScript modülleri,](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)** bunu ayrı harici JavaScript dosyaları kullanmaktan daha verimli bir şekilde yapmanıza olanak tanır.

Ardından bu daha küçük dosyaları optimize edebilirsiniz. **[Küçültme (minification)](https://developer.mozilla.org/en-US/docs/Glossary/Minification)** dosyanızdaki karakter sayısını azaltarak JavaScript kodunuzun bayt sayısını veya ağırlığını düşürür. **[Gzip,](https://developer.mozilla.org/en-US/docs/Glossary/gzip_compression)** dosyayı daha da sıkıştırır ve kodunuzu küçültmeseniz bile kullanılmalıdır. **[Brotli,](https://developer.mozilla.org/en-US/docs/Glossary/Brotli_compression)** Gzip'e benzer, ancak genellikle Gzip sıkıştırmasından daha iyi performans gösterir.

Kodunuzu manuel olarak bölüp optimize edebilirsiniz, ancak genellikle **[webpack](https://webpack.js.org/)** gibi bir modül paketleyici bu işi daha iyi yapar.

**Ayrıştırma ve yürütme işlemlerinin yönetimi**
Bu bölümdeki ipuçlarına geçmeden önce, tarayıcı sayfa oluşturma sürecinde JavaScript'in nerede işlendiğinden bahsetmek önemlidir. Bir web sayfası yüklendiğinde:

- 1\.HTML kodu genellikle önce sayfada göründüğü sırayla ayrıştırılır.
- 2\.CSS ile karşılaşıldığında, sayfaya uygulanması gereken stilleri anlamak için ayrıştırılır. Bu sırada, resimler ve web yazı tipleri gibi bağlantılı varlıklar getirilmeye başlanır.
- 3\.JavaScript ile karşılaşıldığında, tarayıcı onu ayrıştırır, değerlendirir ve sayfada çalıştırır.
- 4\.Biraz sonra, tarayıcı, uygulanan CSS'ye göre her bir HTML öğesinin nasıl biçimlendirilmesi gerektiğini belirler.
- 5\.Oluşturulan stil daha sonra ekrana yansıtılır.

Buradaki en önemli adım 3. adımdır. Varsayılan olarak, JavaScript ayrıştırma ve yürütme, render engelleme özelliğine sahiptir. Bu, tarayıcının JavaScript ile karşılaşıldıktan sonra ortaya çıkan herhangi bir HTML'nin ayrıştırılmasını, komut dosyası işlenene kadar engellediği anlamına gelir. Sonuç olarak, stil ve boyama da engellenir. Bu, yalnızca ne indirdiğinizi değil, aynı zamanda bu kodun ne zaman ve nasıl yürütüldüğünü de dikkatlice düşünmeniz gerektiği anlamına gelir.

Sonraki bölümler, JavaScript kodunuzun ayrıştırılması ve yürütülmesini optimize etmek için faydalı teknikler sunmaktadır.

**Kritik varlıkların mümkün olan en kısa sürede yüklenmesi**

Eğer bir komut dosyası gerçekten önemliyse ve yeterince hızlı yüklenmeyerek performansı etkilediğinden endişeleniyorsanız, onu **[<head>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head)** belgenin <head> etiketi içine yükleyebilirsiniz:

```HTML

<head>
  ...
  <script src="main.js"></script>
  ...
</head>
```

Bu yöntem işe yarıyor ancak render işlemini engelliyor. Daha iyi bir strateji, **[rel="preload"](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload)**kritik JavaScript kodları için bir ön yükleyici oluşturmaktır:

```HTML

<head>
  ...
  <!-- Preload a JavaScript file -->
  <link rel="preload" href="important-js.js" as="script" />
  <!-- Preload a JavaScript module -->
  <link rel="modulepreload" href="important-module.js" />
  ...
</head>
```

Ön yükleme, **[<link>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link)**JavaScript kodunu mümkün olan en kısa sürede, sayfa oluşturmayı engellemeden getirir. Daha sonra bu kodu sayfanızda istediğiniz yerde kullanabilirsiniz:

```HTML

<!-- Include this wherever makes sense -->
<script src="important-js.js"></script>
```

Veya bir JavaScript modülü söz konusu olduğunda, komut dosyanızın içinde:

```JS

import { someFunction } from "important-module.js";
```

**Not:** Ön yükleme, betiğin siz onu dahil ettiğiniz anda yükleneceğini garanti etmez, ancak indirilmeye daha erken başlanacağı anlamına gelir. Oluşturmayı engelleyen süre tamamen ortadan kalkmasa bile yine de kısalacaktır.

**Kritik olmayan JavaScript kodlarının yürütülmesinin ertelenmesi**

Öte yandan, kritik olmayan JavaScript kodlarının ayrıştırılmasını ve yürütülmesini, ihtiyaç duyulduğu zamana ertelemeyi hedeflemelisiniz. Tüm kodları önceden yüklemek, gereksiz yere render işlemini engeller.

Öncelikle, bu asyncözelliği öğelerinize ekleyebilirsiniz <script>:

```HTML

<head>
  ...
  <script async src="main.js"></script>
  ...
</head>
```

Bu, komut dosyasının DOM ayrıştırmasıyla paralel olarak getirilmesine neden olur, böylece aynı anda hazır olur ve oluşturmayı engellemez.

**Not:**defer Belge ayrıştırıldıktan sonra ancak olay tetiklenmeden önce komut dosyasının yürütülmesini sağlayan başka bir özellik daha vardır **[DOMContentLoaded.](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)** Bu, ile benzer bir etkiye sahiptir async.

Alternatif olarak, ihtiyaç duyulana kadar JavaScript'i hiç yüklemeyebilirsiniz. Bu, örneğin DOM betikleme yoluyla yapılabilir:

```JS

const scriptElem = document.createElement("script");
scriptElem.src = "index.js";
scriptElem.addEventListener("load", () => {
  // Run a function contained within index.js once it has definitely loaded
  init();
});
document.head.append(scriptElem);
```

JavaScript modülleri şu fonksiyon kullanılarak dinamik olarak yüklenebilir **[import():](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)**

```JS

import("./modules/myModule.js").then((module) => {
  // Do something with the module
});
```

**Uzun görevleri parçalara ayırmak**

Tarayıcı JavaScript kodunuzu çalıştırdığında, kodu sırayla yürütülen görevlere ayırır; örneğin, veri çekme istekleri yapmak, olay işleyicileri aracılığıyla kullanıcı etkileşimlerini ve girdilerini yönlendirmek, JavaScript tabanlı animasyonlar çalıştırmak vb.

Bu işlemlerin çoğu ana iş parçacığında gerçekleşir; ancak *[Web Workers'da](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)** çalışan JavaScript gibi istisnalar da vardır . Ana iş parçacığı aynı anda yalnızca bir görevi çalıştırabilir.

Tek bir görevin çalışması 50 milisaniyeden uzun sürdüğünde, uzun görev olarak sınıflandırılır. Kullanıcı uzun bir görev çalışırken sayfayla etkileşime girmeye çalışırsa veya önemli bir kullanıcı arayüzü güncellemesi istenirse, kullanıcı deneyimi etkilenecektir. Beklenen yanıt veya görsel güncelleme gecikecek ve bu da kullanıcı arayüzünün yavaş veya tepkisiz görünmesine neden olacaktır.

Bu sorunu hafifletmek için, uzun süren görevleri daha küçük görevlere bölmeniz gerekir. Bu, tarayıcıya hayati kullanıcı etkileşimini işleme veya kullanıcı arayüzü oluşturma güncellemelerini gerçekleştirme şansı verir; tarayıcı bunları uzun görevden önce veya sonra değil, her bir küçük görev arasında yapabilir. JavaScript kodunuzda bunu, kodunuzu ayrı fonksiyonlara bölerek yapabilirsiniz. Bu, bakım, hata ayıklama ve test yazmayı kolaylaştırma gibi birçok başka nedenden dolayı da mantıklıdır.

Örneğin:

```JS

function main() {
  a();
  b();
  c();
  d();
  e();
}
```

Ancak bu tür bir yapı, ana iş parçacığının bloke olmasını engellemez. Beş fonksiyonun tamamı tek bir ana fonksiyon içinde çalıştırıldığı için, tarayıcı bunların hepsini tek bir uzun görev olarak yürütür.

Bunu çözmek için, kodun ana iş parçacığına geçmesini sağlamak amacıyla periyodik olarak bir "yield" fonksiyonu çalıştırırız . Bu, kodumuzun birden fazla göreve bölündüğü ve bu görevlerin yürütülmesi arasında tarayıcının kullanıcı arayüzünü güncelleme gibi yüksek öncelikli görevleri ele alma fırsatı bulduğu anlamına gelir. Bu fonksiyon için yaygın bir yöntem, **[setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)**yürütmeyi ayrı bir göreve ertelemektir:

```JS

function yieldFunc() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```
Bu, bir görev çalıştırıcı deseni içinde şu şekilde kullanılabilir: her görev çalıştırıldıktan sonra ana iş parçacığına geri dönmek için:

```JS

async function main() {
  // Create an array of functions to run
  const tasks = [a, b, c, d, e];

  // Loop over the tasks
  while (tasks.length > 0) {
    // Shift the first task off the tasks array
    const task = tasks.shift();

    // Run the task
    task();

    // Yield to the main thread
    await yieldFunc();
  }
}
```

Bunu daha da geliştirmek için, **[Scheduler.yield()](https://developer.mozilla.org/en-US/docs/Web/API/Scheduler/yield)**mümkün olan yerlerde bu kodun kuyruktaki diğer daha az kritik görevlerden önce çalışmaya devam etmesine izin verebiliriz:

```JS

function yieldFunc() {
  // Use scheduler.yield() if available
  if ("scheduler" in window && "yield" in scheduler) {
    return scheduler.yield();
  }

  // Fall back to setTimeout:
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

**JavaScript animasyonlarının yönetimi**

Animasyonlar, algılanan performansı iyileştirerek arayüzlerin daha hızlı çalışmasını sağlayabilir ve kullanıcıların bir sayfanın yüklenmesini beklerken (örneğin yükleme göstergeleri) ilerleme kaydedildiğini hissetmelerini sağlayabilir. Bununla birlikte, daha büyük animasyonlar ve daha fazla sayıda animasyon doğal olarak daha fazla işlem gücü gerektirecek ve bu da performansı düşürebilir.

Animasyon konusunda verilebilecek en bariz tavsiye, daha az animasyon kullanmaktır; gereksiz animasyonları kaldırın veya kullanıcılarınıza animasyonları kapatma seçeneği sunun; örneğin, düşük güçlü bir cihaz veya sınırlı pil ömrüne sahip bir mobil cihaz kullanıyorlarsa.

Temel DOM animasyonları için, mümkün olduğunca JavaScript animasyonları yerine **[CSS animasyonlarını](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using)** kullanmanız önerilir **[( Web Animasyonları API'si,](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)** JavaScript kullanarak doğrudan CSS animasyonlarına müdahale etmenin bir yolunu sunar). DOM animasyonlarını doğrudan tarayıcı üzerinden gerçekleştirmek, JavaScript kullanarak satır içi stilleri manipüle etmekten çok daha hızlı ve verimlidir. 

JavaScript'te işlenemeyen animasyonlar için, örneğin bir HTML öğesini canlandırmak gibi, eski seçenekler yerine `<script> ` **[<canvas>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/canvas)**yöntemini kullanmanız önerilir . Bu yöntem, sorunsuz bir kullanıcı deneyimi için animasyon karelerini verimli ve tutarlı bir şekilde işlemek üzere özel olarak tasarlanmıştır. Temel kalıp şu şekildedir:**[Window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)** **[Window.setInterval()requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)**

```JS

function loop() {
  // Clear the canvas before drawing the next frame of the animation
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  // Draw objects on the canvas and update their positioning data
  // ready for the next frame
  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  // Call requestAnimationFrame to run the loop() function again
  // at the right time to keep the animation smooth
  requestAnimationFrame(loop);
}

// Call the loop() function once to set the animation running
loop();
```

**Etkinlik performansını optimize etme**

Olayların izlenmesi ve işlenmesi, özellikle bir olay sürekli olarak çalıştırıldığında, tarayıcı için maliyetli olabilir. Örneğin, farenin konumunu izlemek ve **[mousemove](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event)** sayfanın belirli bir alanında olup olmadığını kontrol etmek için bir olay kullanıyor olabilirsiniz:

```JS

function handleMouseMove() {
  // Do stuff while mouse pointer is inside elem
}

elem.addEventListener("mousemove", handleMouseMove);
```

Sayfanızda bir oyun çalıştırıyor olabilirsiniz <canvas>. Fare tuvalin içindeyken, fare hareketini ve imleç konumunu sürekli olarak kontrol etmek ve oyun durumunu (skor, süre, tüm sprite'ların konumu, çarpışma algılama bilgileri vb.) güncellemek isteyeceksiniz. Oyun bittiğinde, tüm bunları yapmanıza artık gerek kalmayacak ve aslında bu olayı dinlemeye devam etmek işlem gücünü boşa harcamak olacaktır.

Bu nedenle, artık ihtiyaç duyulmayan olay dinleyicilerini kaldırmak iyi bir fikirdir. Bu işlem şu şekilde yapılabilir **[removeEventListener():](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)**

```JS

elem.removeEventListener("mousemove", handleMouseMove);
```

Bir diğer ipucu da mümkün olduğunca olay delegasyonu kullanmaktır. Kullanıcının çok sayıda alt öğeden herhangi biriyle etkileşimine yanıt olarak çalıştırılacak bir kodunuz olduğunda, üst öğelerine bir olay dinleyicisi ayarlayabilirsiniz. Herhangi bir alt öğede tetiklenen olaylar üst öğelerine doğru yayılır, bu nedenle her alt öğeye ayrı ayrı olay dinleyicisi ayarlamanıza gerek kalmaz. Takip edilecek daha az olay dinleyicisi, daha iyi performans anlamına gelir.


**Daha verimli kod yazmak için ipuçları**
Kodunuzun daha verimli çalışmasını sağlayacak çeşitli genel en iyi uygulamalar vardır.

**DOM manipülasyonunu azaltın :** DOM'a erişim ve güncelleme hesaplama açısından maliyetlidir, bu nedenle JavaScript'inizin yaptığı manipülasyon miktarını, özellikle sürekli DOM animasyonu gerçekleştirirken en aza indirmelisiniz. 

**Toplu DOM değişiklikleri :** Temel DOM değişiklikleri için, her bir değişikliği tek tek tetiklemek yerine, bunları birlikte yapılacak gruplar halinde toplu olarak gerçekleştirmelisiniz. Bu, tarayıcının gerçekte yaptığı iş miktarını azaltabilir, aynı zamanda algılanan performansı da iyileştirebilir. Birkaç güncellemeyi tek seferde halletmek, sürekli küçük güncellemeler yapmak yerine, kullanıcı arayüzünün daha akıcı görünmesini sağlayabilir. Burada faydalı bir ipucu şudur: Sayfaya büyük bir HTML parçası eklemeniz gerektiğinde, önce tüm parçayı (genellikle bir <p> etiketi içinde **[DocumentFragment)](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)** oluşturun ve ardından her öğeyi ayrı ayrı eklemek yerine hepsini tek seferde DOM'a ekleyin.

**HTML'inizi basitleştirin :** DOM ağacınız ne kadar basit olursa, JavaScript ile erişim ve manipülasyonu o kadar hızlı olur. Kullanıcı arayüzünüzün ihtiyaçlarını dikkatlice düşünün ve gereksiz unsurları kaldırın.

**Döngü kullanımını azaltın :** Döngüler maliyetlidir, bu nedenle kodunuzdaki döngü kullanımını mümkün olduğunca azaltın. Döngülerin kaçınılmaz olduğu durumlarda:

Gereksiz yere tam döngüyü çalıştırmaktan kaçının ve uygun yerlerde **[break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)**`OR` **[continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)** ifadelerini kullanın. Örneğin, dizilerde belirli bir isim arıyorsanız, isim bulunduğunda döngüden çıkmalısınız; daha fazla döngü yinelemesi çalıştırmaya gerek yoktur:

```JS

function processGroup(array) {
  const toFind = "Bob";
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === toFind) {
      processMatchingArray(array);
      break;
    }
  }
}
```

Yalnızca bir kez ihtiyaç duyulan işleri döngünün dışında yapın. Bu biraz açık gibi görünse de, gözden kaçırmak kolaydır. Aşağıdaki kod parçacığını ele alalım; bu kod, bir şekilde işlenecek verileri içeren bir JSON nesnesini alır. Bu durumda işlem, **[fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)**döngünün her yinelemesinde yapılır ki bu da işlem gücünün israfıdır. 'e bağlı olmayan bu alma işlemi, idöngünün dışına taşınabilir, böylece yalnızca bir kez yapılır.

```JS

async function returnResults(number) {
  for (let i = 0; i < number; i++) {
    const response = await fetch(`/results?number=${number}`);
    const results = await response.json();
    processResult(results[i]);
  }
}
```

**Hesaplamaları ana iş parçacığının dışında çalıştırma :** Daha önce JavaScript'in görevleri genellikle ana iş parçacığında nasıl çalıştırdığından ve uzun süren işlemlerin ana iş parçacığını nasıl bloke edebileceğinden, potansiyel olarak kötü kullanıcı arayüzü performansına yol açabileceğinden bahsetmiştik. Ayrıca uzun görevleri daha küçük görevlere bölerek bu sorunu nasıl hafifletebileceğimizi de göstermiştik. Bu tür sorunları ele almanın bir başka yolu da görevleri tamamen ana iş parçacığının dışına taşımaktır. Bunu başarmanın birkaç yolu vardır:

*Asenkron kod kullanın:* **[Asenkron JavaScript,](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing)** temelde ana iş parçacığını engellemeyen JavaScript'tir. Asenkron API'ler, ağdan kaynak alma, yerel dosya sistemindeki bir dosyaya erişme veya kullanıcının web kamerasından akış açma gibi işlemleri ele alma eğilimindedir. Bu işlemler uzun sürebileceğinden, tamamlanmalarını beklerken ana iş parçacığını engellemek kötü olurdu. Bunun yerine, tarayıcı bu işlevleri yürütür, ana iş parçacığının sonraki kodu çalıştırmasını sağlar ve bu işlevler, gelecekte bir noktada kullanılabilir hale geldiklerinde sonuçları döndürür . Modern asenkron API'ler, asenkron işlemleri ele almak için tasarlanmış bir JavaScript dil özelliği olan Promise tabanlıdır . Asenkron olarak çalıştırılmasından fayda sağlayacak bir işleviniz varsa, kendi Promise tabanlı işlevlerinizi yazmanızPromise mümkündür .

*Web Workers'da hesaplama çalıştırma:* **[Web Workers,](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)** ana iş parçacığını engellemeden bir JavaScript kod bloğunu çalıştırmak için ayrı bir iş parçacığı açmanıza olanak tanıyan bir mekanizmadır. Workers'ın bazı önemli kısıtlamaları vardır; en büyüğü, bir worker içinde DOM betikleme yapamamanızdır. Diğer birçok şeyi yapabilirsiniz ve worker'lar ana iş parçacığına mesaj gönderip alabilir. Workers'ın ana kullanım alanı, çok fazla hesaplama yapmanız gerektiğinde ve bunun ana iş parçacığını engellemesini istemediğinizde ortaya çıkar. Bu hesaplamayı bir worker'da yapın, sonucu bekleyin ve hazır olduğunda ana iş parçacığına geri gönderin.

*WebGPU Kullanımı :* **[WebGPU,](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API)** web geliştiricilerinin temel sistemin GPU'sunu (Grafik İşlem Birimi) kullanarak yüksek performanslı hesaplamalar yapmalarına ve tarayıcıda görüntülenebilen karmaşık resimler çizmelerine olanak tanıyan bir tarayıcı API'sidir. Oldukça karmaşıktır, ancak web çalışanlarından bile daha iyi performans avantajları sağlayabilir.

## Performanslı HTML

**Kaynak:** [Performant HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/HTML)

HTML varsayılan olarak hızlı ve erişilebilirdir. Geliştiriciler olarak bizim görevimiz, HTML kodu oluştururken veya düzenlerken bu iki özelliği korumaktır. Örneğin, bir **[<video>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video)**yerleştirme dosyasının boyutu çok büyük olduğunda veya JavaScript ayrıştırması kritik sayfa öğelerinin oluşturulmasını engellediğinde sorunlar ortaya çıkabilir. Bu makale, web sayfanızın kalitesini önemli ölçüde artırabilecek temel HTML performans özelliklerini ele almaktadır.

**Optimize etmek mi, etmemek mi?**
HTML optimizasyonuna başlamadan önce cevaplamanız gereken ilk soru "neyi optimize etmem gerekiyor?" sorusudur. Aşağıda ele alınan ipuçları ve tekniklerin bazıları, hemen hemen her web projesine fayda sağlayacak iyi uygulamalardır, bazıları ise yalnızca belirli durumlarda gereklidir. Tüm bu teknikleri her yerde uygulamaya çalışmak muhtemelen gereksizdir ve zaman kaybı olabilir. Her projede hangi performans optimizasyonlarına gerçekten ihtiyaç duyulduğunu belirlemelisiniz.

Bunu yapmak için sitenizin **[performansını ölçmeniz gerekir .](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Measuring_performance)** Bu bağlantıda gösterildiği gibi, performansı ölçmenin, bazıları gelişmiş **[performans API'lerini](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API)** içeren çeşitli yolları vardır . Ancak başlamanın en iyi yolu, sayfanın yüklenmesi uzun süren ve optimize edilmesi gereken bölümlerini incelemek için yerleşik tarayıcı ağ ve performans araçları gibi araçları nasıl kullanacağınızı öğrenmektir.

**HTML performansıyla ilgili temel sorunlar**
HTML, performans açısından basittir; çoğunlukla metinden oluşur, metin boyutu küçüktür ve bu nedenle indirilmesi ve işlenmesi genellikle hızlıdır. Bir web sayfasının performansını etkileyebilecek temel sorunlar şunlardır:

- 1\.<img>Resim ve video dosyalarının boyutu: <img> ve <video> gibi değiştirilen öğelerin içeriğinin nasıl ele alınacağı önemlidir <video>. Resim ve video dosyaları büyüktür ve sayfanın ağırlığını önemli ölçüde artırabilir. Bu nedenle, kullanıcının cihazına indirilen bayt sayısını en aza indirmek önemlidir (örneğin, mobil cihazlar için daha küçük resimler sunmak). Ayrıca, resim ve videoları yalnızca ihtiyaç duyulduğunda sayfaya yükleyerek algılanan performansı iyileştirmeyi de göz önünde bulundurmanız gerekir.
- 2\.Gömülü içeriğin teslimi: Bu genellikle öğelere gömülü içeriktir <iframe>. İçeriğin yüklenmesi <iframe>performansı önemli ölçüde etkileyebilir, bu nedenle dikkatlice değerlendirilmelidir.
- 3\.Kaynak yükleme sırası: Algılanan ve gerçek performansı en üst düzeye çıkarmak için HTML, sayfada göründüğü sırayla önce yüklenmelidir. Daha iyi performans için kaynak yükleme sırasını etkilemek üzere çeşitli özellikler kullanabilirsiniz. Örneğin, kritik CSS ve yazı tiplerini önceden yükleyebilir, ancak kritik olmayan JavaScript'i daha sonraya erteleyebilirsiniz.

**Not:** HTML yapınızı basitleştirmenin ve kaynak kodunuzu küçültmenin , görüntüleme ve indirmeleri hızlandıracağı yönünde bir argüman öne sürülebilir . Ancak, HTML dosya boyutu resim ve videolara kıyasla önemsizdir ve günümüzde tarayıcı görüntüleme hızı oldukça yüksektir. HTML kaynak kodunuz o kadar büyük ve karmaşıksa ki görüntüleme ve indirme performansında sorunlara yol açıyorsa, muhtemelen daha büyük sorunlarınız vardır ve onu basitleştirmeyi ve içeriği bölmeyi hedeflemelisiniz.

**Değiştirilen elemanların hızlı bir şekilde işlenmesi**

**[Duyarlı tasarım,](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)** web içeriğinin farklı cihazlarda nasıl düzenlendiğini kökten değiştirdi. Sağladığı en önemli avantajlardan biri, farklı ekran boyutları için optimize edilmiş düzenlerin dinamik olarak değiştirilmesidir; örneğin, geniş ekran düzeni ile dar (mobil) ekran düzeni arasında geçiş yapılabilir. Ayrıca, çözünürlük veya açık veya koyu renk şeması tercihi gibi diğer cihaz özelliklerine bağlı olarak içeriğin dinamik olarak değiştirilmesini de sağlayabilir.

"Mobil öncelikli" teknik olarak adlandırılan yöntem, varsayılan düzenin küçük ekranlı cihazlar için olmasını sağlayarak, mobil cihazların ekranlarına uygun görselleri indirmesini ve daha büyük masaüstü görsellerini indirmenin performans kaybına uğramamasını garanti eder. Ancak, bu işlem CSS'nizdeki **[medya sorguları](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using)** kullanılarak kontrol edildiğinden , yalnızca CSS'de yüklenen görsellerin performansını olumlu yönde etkileyebilir.

**srcset aracılığıyla farklı görüntü çözünürlükleri sağlama**

Cihazın çözünürlüğüne ve görüntü alanı boyutuna bağlı olarak aynı görüntünün farklı çözünürlük sürümlerini sağlamak için **[srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#srcset)** ve **[sizes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#sizes)** özelliklerini kullanabilirsiniz.

Bu örnek, farklı ekran genişlikleri için farklı boyutlarda görseller sunmaktadır:

```HTML

<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(width <= 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

srcset Bu, kaynak resimlerin dosya adlarıyla birlikte içsel boyutlarını ve sizesher durumda doldurulması gereken resim yuvası genişlikleriyle birlikte medya sorgularını sağlar. Tarayıcı daha sonra her yuva için hangi resimlerin yüklenmesinin mantıklı olduğuna karar verir. Örneğin, ekran genişliği 600px veya daha az ise, width <= 600px doğrudur ve bu nedenle doldurulacak yuva olarak kabul edilir 480px. Bu durumda, tarayıcı büyük olasılıkla 480w.jpg dosyasını (480 piksel genişliğinde resim) yüklemeyi seçecektir. Bu, performansa yardımcı olur çünkü tarayıcılar ihtiyaç duyduklarından daha büyük resimleri yüklemezler.

Bu örnek, farklı ekran çözünürlükleri için farklı çözünürlükte görüntüler sunmaktadır:

```HTML

<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

1.5x, 2x, vb. göreceli çözünürlük göstergeleridir. Görüntü 320 piksel genişliğinde olacak şekilde biçimlendirilmişse (örneğin width: 320pxCSS'de ile), 320w.jpg cihaz düşük çözünürlüklü (CSS pikseli başına bir cihaz pikseli ) veya 640x.jpg cihaz yüksek çözünürlüklü (CSS pikseli başına iki cihaz pikseli veya daha fazla) ise tarayıcı görüntüyü yükleyecektir.

Her iki durumda da, bu özellik tarayıcı "/" srcişaretini desteklemiyorsa yüklenecek varsayılan bir resim sağlar .srcsrcset

**Görüntü ve videolar için farklı kaynaklar sağlamak**

Bu **[<picture>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture)** öğe, geleneksel **[<img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img)** öğenin üzerine inşa edilmiştir ve farklı durumlar için birden fazla farklı kaynak sağlamanıza olanak tanır. Örneğin, düzen genişse, muhtemelen geniş bir resim isteyeceksiniz ve dar ise, o bağlamda yine de işe yarayan daha dar bir resim isteyeceksiniz.

Elbette bu, mobil cihazlarda daha küçük boyutlu bilgi indirilmesini sağlayarak performansa da katkıda bulunur.

Örnek olarak şunları verebiliriz:

```HTML

<picture>
  <source media="(width < 800px)" srcset="narrow-banner-480w.jpg" />
  <source media="(width >= 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

Öğeler, özniteliklerin <source>içinde medya sorguları içerir media. Bir medya sorgusu true döndürürse, öğenin özniteliğinde referans verilen resim <source>yüklenir srcset. Yukarıdaki örnekte, görüntü alanı genişliği 'den küçükse 800px, narrow-banner-480w.jpgresim yüklenir. Ayrıca , öğenin , desteklemeyen tarayıcılar durumunda yüklenecek varsayılan bir resim sağlayan <picture>bir öğe içerdiğine de dikkat edin .<img><picture>

Bu örnekte özniteliğin kullanımına dikkat edin srcset. Önceki bölümde gösterildiği gibi, her görüntü kaynağı için farklı çözünürlükler sağlayabilirsiniz.

<video>Öğeler, farklı kaynaklar sağlama açısından benzer şekilde çalışır:

```HTML

<video controls>
  <source src="video/smaller.mp4" type="video/mp4" />
  <source src="video/smaller.webm" type="video/webm" />
  <source src="video/larger.mp4" type="video/mp4" media="(width >= 800px)" />
  <source src="video/larger.webm" type="video/webm" media="(width >= 800px)" />

  <!-- fallback for browsers that don't support video element -->
  <a href="video/larger.mp4">download video</a>
</video>
```

Ancak, görseller ve videolar için kaynak sağlama konusunda bazı önemli farklılıklar vardır:

- 1\.srcYukarıdaki örnekte, yerine kullanıyoruz srcset; aracılığıyla videolar için farklı çözünürlükler belirtemezsiniz srcset.
- 2\.Bunun yerine, farklı öğelerin içinde farklı çözünürlükler belirtirsiniz <source>.
- 3\.Farklı öğeler içinde farklı video formatlarını nasıl belirttiğimize dikkat edin <source>; her format, öznitelik içindeki MIME türü aracılığıyla tanımlanır type. Tarayıcılar, medya sorgusu testinin doğru sonuç verdiği, destekledikleri ilk formatı yükleyecektir.

**Resimlerin tembel yüklenmesi**

Performansı artırmak için çok kullanışlı bir teknik tembel yüklemedir (lazy loading ). Bu, HTML oluşturulduğunda tüm resimlerin hemen yüklenmemesi, bunun yerine yalnızca kullanıcının görüntüleme alanında (veya yakında) görebileceği şekilde yüklenmesi uygulamasına atıfta bulunur. Bu, hemen görülebilen/kullanılabilir içeriğin daha hızlı kullanıma hazır olduğu, sonraki içeriğin resimlerinin ise yalnızca kaydırıldığında oluşturulduğu ve tarayıcının kullanıcının asla görmeyeceği resimleri yüklemek için bant genişliğini boşa harcamayacağı anlamına gelir.

Tembel yükleme (lazy loading) geçmişte JavaScript kullanılarak yapılıyordu, ancak tarayıcılar artık loadingresimleri otomatik olarak tembel yüklemeye yönlendirmek için kullanılabilecek bir özelliğe sahip:

```HTML

<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

**Video ve sesin tembel yüklenmesi**

Ayrıca, video oynatılana kadar video içeriğini tembel yükleme (lazy loading) yöntemiyle yükleyebilirsiniz preload. Örneğin:

```HTML

<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

preload Bu değere bir değer vermek none, tarayıcıya kullanıcının oynatmaya karar vermeden önce video verilerinin hiçbirini önceden yüklememesini söyler; bu da performans açısından açıkça iyidir. Bunun yerine, yalnızca öznitelik tarafından belirtilen görüntüyü gösterecektir poster. Farklı tarayıcıların farklı varsayılan video yükleme davranışları vardır, bu nedenle açık olmak iyidir.

preload Bir değer belirtmek metadata, tarayıcıdan videoyu oynatmadan önce görüntülemek için gereken minimum verileri (örneğin uzunluk, boyutlar ve belki de ilk kare) indirmesini ister.

Bu özellik, video verilerinin yüklenmesini, değerden bağımsız olarak, video görüntü alanına yaklaşana kadar loading erteleyerek preloadve görüntünün yüklenmesini de erteleyerek videolar için tembel yüklemeyi daha da geliştirebilir (bu noktada değer her zamanki gibi kullanılır).poster preload

```HTML 

<video controls preload="none" poster="poster.jpg" loading="lazy">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

Bu özellik ses içerikleriyle de kullanılabilir:

```HTML

<audio
  controls
  src="/shared-assets/audio/t-rex-roar.mp3"
  loading="lazy"></audio>
```

**Gömülü içeriğin işlenmesi**

Web sayfalarına başka kaynaklardan içerik yerleştirilmesi oldukça yaygındır. Bu, en sık olarak bir sitede gelir elde etmek amacıyla reklam gösterilirken yapılır; reklamlar genellikle bir tür üçüncü taraf şirket tarafından oluşturulur ve sayfanıza yerleştirilir. Diğer kullanım alanları şunları içerebilir:

- 1\.Kullanıcının birden fazla sayfada ihtiyaç duyabileceği ortak içerikleri (örneğin alışveriş sepeti veya profil bilgileri) görüntülemek.
- 2\.Kuruluşun ana sitesiyle ilgili üçüncü taraf içeriklerin görüntülenmesi, örneğin sosyal medya gönderi akışı.

İçerik yerleştirme işlemi en yaygın olarak `<img>` öğeleri kullanılarak yapılır , ancak `<img> ` ve `<img>` <iframe>gibi daha az kullanılan başka yerleştirme öğeleri de mevcuttur . Bu bölümde `<img>` öğelerine odaklanacağız .<object><embed><iframe>

`<p>` etiketlerini kullanırken en önemli ve kilit tavsiye şudur: " Kesinlikle gerekmedikçe <iframe>gömülü `<p>` etiketleri kullanmayın ". Birden fazla farklı bilgi bölmesi içeren bir sayfa oluşturuyorsanız, bunları ayrı sayfalara bölmek ve farklı `<p>` etiketlerine yüklemek organizasyonel açıdan mantıklı görünebilir . Ancak, bu durum performans ve diğer açılardan bir dizi soruna yol açar:<iframe><iframe>

- İçeriği bir <p> etiketine yüklemek, <iframe>içeriği aynı doğrudan sayfanın bir parçası olarak yüklemekten çok daha maliyetlidir; yalnızca içeriği yüklemek için ekstra HTTP istekleri gerektirmekle kalmaz, aynı zamanda tarayıcının her biri için ayrı bir sayfa örneği oluşturması gerekir. Her biri, üst düzey web sayfasına yerleştirilmiş ayrı bir web sayfası örneğidir.
- Önceki noktadan devam edecek olursak, her farklı sayfa için <iframe>(gömülü sayfalar aynı kaynaktan gelmedikçe) CSS stillendirmesi veya JavaScript manipülasyonunu ayrı ayrı ele almanız gerekecek ki bu da çok daha karmaşık hale geliyor. Üst düzey sayfaya uygulanan CSS ve JavaScript ile gömülü içeriği hedefleyemezsiniz veya tam tersi. Bu, web için temel bir güvenlik önlemidir. Üçüncü taraf gömülü içeriğin, gömüldüğü herhangi bir sayfaya karşı keyfi olarak komut dosyaları çalıştırabilmesi durumunda karşılaşabileceğiniz tüm sorunları bir düşünün!
- Her birinin <iframe>paylaşılan verileri ve medya dosyalarını ayrı ayrı yüklemesi gerekecektir; farklı sayfa yerleştirmeleri arasında önbelleğe alınmış varlıkları paylaşamazsınız (yine, yerleştirilen sayfalar aynı kaynaktan gelmediği sürece). Bu, bir sayfanın beklediğinizden çok daha fazla bant genişliği kullanmasına yol açabilir.

İçeriği tek bir sayfaya yerleştirmek tavsiye edilir. Sayfa değiştikçe dinamik olarak yeni içerik çekmek istiyorsanız, bunu bir `<head>` etiketine koymak yerine aynı sayfaya yüklemek performans açısından daha iyidir <iframe>. Örneğin, `<head>` yöntemini kullanarak yeni verileri alabilir fetch()ve ardından bazı DOM komut dosyaları kullanarak sayfaya ekleyebilirsiniz. 

Eğer 's' harfini kullanmanız gerekiyorsa <iframe>, bunu az ve öz yapın.

**tembel yüklemeli iframe'ler**

Öğelerde olduğu gibi <img>, bu loadingözelliği kullanarak da tarayıcıya <iframe>başlangıçta ekran dışında olan içeriği tembel yükleme (lazy loading) yöntemiyle yüklemesini söyleyebilir ve böylece performansı artırabilirsiniz:

```HTML

<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

**Kaynak yükleme sırasının işlenmesi**

Kaynak yükleme sırası, algılanan ve gerçek performansı en üst düzeye çıkarmak için önemlidir. Bir web sayfası yüklendiğinde:

- 1\.HTML kodu genellikle önce sayfada göründüğü sırayla ayrıştırılır.
- 2\.Bulunan tüm CSS kodları, sayfaya uygulanması gereken stilleri anlamak için ayrıştırılır. Bu sırada, resimler ve web yazı tipleri gibi bağlantılı varlıklar getirilmeye başlanır.
- 3\.<script>Bulunan tüm JavaScript kodları ayrıştırılır, değerlendirilir ve sayfaya uygulanır. Varsayılan olarak, bu işlem JavaScript'in bulunduğu öğelerden sonra gelen HTML'nin ayrıştırılmasını engeller .
- 4\.Biraz sonra, tarayıcı, uygulanan CSS'ye göre her bir HTML öğesinin nasıl biçimlendirilmesi gerektiğini belirler.
- 5\.Oluşturulan stil daha sonra ekrana yansıtılır.


Çeşitli HTML özellikleri, performansı artırmak için kaynak yükleme şeklini değiştirmenize olanak tanır. Şimdi bunlardan bazılarını inceleyeceğiz.

**JavaScript yüklemesinin yönetimi**

JavaScript'in ayrıştırılması ve yürütülmesi, sonraki DOM içeriğinin ayrıştırılmasını engeller. Bu, söz konusu içeriğin oluşturulup sayfa kullanıcıları tarafından kullanılabilir hale gelmesi için geçen süreyi uzatır. Küçük bir komut dosyası çok fazla fark yaratmaz, ancak modern web uygulamalarının genellikle çok fazla JavaScript kullandığını göz önünde bulundurun.

Varsayılan JavaScript ayrıştırma davranışının bir diğer yan etkisi de, işlenen komut dosyasının sayfada daha sonra görünen DOM içeriğine bağlı olması durumunda hatalar oluşmasıdır.

Örneğin, bir sayfadaki basit bir paragrafı hayal edin:

```HTML

<p>My paragraph</p>
```

Şimdi aşağıdaki kodu içeren bir JavaScript dosyasını hayal edin:

```JS

const pElem = document.querySelector("p");

pElem.addEventListener("click", () => {
  alert("You clicked the paragraph");
});
```

 Bu betiği sayfaya şu şekilde bir öğe içinde referans göstererek uygulayabiliriz :


```HTML

<script src="index.js"></script>
```

<script> Eğer bu elementi kaynak kod sırasındaki diğer elementten önce <p>(örneğin, `<head>` elementi içinde ) yerleştirirsek <head>, sayfa bir hata verecektir (örneğin Chrome, konsola "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" hatası verir). Bunun nedeni, betiğin <p>çalışması için bu elemente bağlı olması, ancak betiğin ayrıştırıldığı noktada bu <p>elementin sayfada mevcut olmamasıdır. Henüz oluşturulmamıştır.

<script> Yukarıdaki sorunu, öğeyi öğeden sonra <p>(örneğin belge gövdesinin sonuna) yerleştirerek veya kodu uygun bir olay işleyici içinde çalıştırarak (örneğin DOMContentLoaded, DOM tamamen ayrıştırıldığında tetiklenen olay işleyicisinde çalıştırarak) düzeltebilirsiniz.

Ancak bu, komut dosyasının yüklenmesini bekleme sorununu çözmüyor. asyncÖğeye şu özniteliği ekleyerek daha iyi performans elde edilebilir <script>:

```HTML

<script async src="index.js"></script>
```

Bu, komut dosyasının DOM ayrıştırmasıyla paralel olarak alınmasına neden olur, böylece aynı anda hazır olur ve oluşturmayı engellemez, bu da performansı artırır.

**Not:**defer Belge ayrıştırıldıktan sonra ancak çalıştırılmadan önce komut dosyasının yürütülmesini sağlayan başka bir özellik daha vardır DOMContentLoaded. Bu, ile benzer bir etkiye sahiptir async.

JavaScript yükleme yönetimiyle ilgili bir diğer ipucu da, kodunuzu tek bir büyük betiğe koyup en başta yüklemek yerine, betiğinizi kod modüllerine bölmek ve her bir parçayı gerektiğinde yüklemektir. Bu işlem **[JavaScript modülleri](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)** kullanılarak yapılır . Ayrıntılı bir kılavuz için bağlantılı makaleyi okuyun.

** rel="preload" ile içerik önceden yükleniyor.**

HTML, CSS ve JavaScript kodlarınızdan bağlantı verilen diğer kaynakların (resimler, videolar veya yazı tipi dosyaları gibi) getirilmesi de performans sorunlarına neden olabilir, kodunuzun çalışmasını engelleyebilir ve deneyimi yavaşlatabilir. Bu tür sorunları hafifletmenin bir yolu, öğeleri ön yükleyicilere rel="preload"dönüştürmektir <link>. Örneğin:

 ```HTML 

<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />


Bir bağlantıyla karşılaşıldığında rel="preload", tarayıcı ilgili kaynağı mümkün olan en kısa sürede getirir ve tarayıcı önbelleğinde kullanılabilir hale getirir; böylece sonraki kodlarda referans verildiğinde daha hızlı kullanıma hazır olur. Kullanıcının sayfada erken karşılaşacağı yüksek öncelikli kaynakları önceden yüklemek, deneyimin mümkün olduğunca sorunsuz olması açısından faydalıdır.

## Yüksek Performanslı CSS

**Kaynak:** [Performant CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/CSS)

Bir web sitesi geliştirirken, tarayıcının sitenizdeki CSS'i nasıl işlediğini göz önünde bulundurmanız gerekir. CSS'in neden olabileceği performans sorunlarını azaltmak için, CSS'i optimize etmelisiniz. Örneğin, **[render engellemesini](https://developer.mozilla.org/en-US/docs/Glossary/Render_blocking)** azaltmak ve gerekli yeniden düzenleme sayısını en aza indirmek için CSS'i optimize etmelisiniz. Bu makale, temel CSS performans optimizasyon tekniklerini adım adım açıklamaktadır.

**Optimize etmek mi, etmemek mi?**

CSS optimizasyonuna başlamadan önce cevaplamanız gereken ilk soru "neyi optimize etmem gerekiyor?" sorusudur. Aşağıda ele alınan ipuçları ve tekniklerin bazıları, hemen hemen her web projesine fayda sağlayacak iyi uygulamalardır, bazıları ise yalnızca belirli durumlarda gereklidir. Tüm bu teknikleri her yerde uygulamaya çalışmak muhtemelen gereksizdir ve zaman kaybı olabilir. Her projede hangi performans optimizasyonlarına gerçekten ihtiyaç duyulduğunu belirlemelisiniz.

Bunu yapmak için sitenizin performansını ölçmeniz gerekir . Önceki bağlantıda gösterildiği gibi, performansı ölçmenin, bazıları gelişmiş performans API'lerini içeren çeşitli yolları vardır . Ancak başlamanın en iyi yolu, sayfa yüklemesinin hangi bölümlerinin uzun sürdüğünü ve optimize edilmesi gerektiğini görmek için yerleşik tarayıcı ağ ve performans araçları gibi araçları nasıl kullanacağınızı öğrenmektir.

**Oluşturma işlemini optimize etme**

Tarayıcılar belirli bir işleme yolunu izler; boyama işlemi yalnızca düzenleme işleminden sonra gerçekleşir, düzenleme işlemi ise işleme ağacı oluşturulduktan sonra gerçekleşir ve bu da hem DOM hem de CSSOM ağaçlarını gerektirir.

Kullanıcılara stil verilmemiş bir sayfa göstermek ve ardından CSS stilleri ayrıştırıldıktan sonra sayfayı yeniden çizmek kötü bir kullanıcı deneyimi olurdu. Bu nedenle, tarayıcı CSS'nin gerekli olduğuna karar verene kadar CSS, oluşturmayı engelleyici bir durumdadır. Tarayıcı, CSS'yi indirdikten ve **[CSS nesne modelini (CSSOM)](https://developer.mozilla.org/en-US/docs/Glossary/CSSOM)** oluşturduktan sonra sayfayı çizebilir .

CSSOM yapısını optimize etmek ve sayfa performansını iyileştirmek için, mevcut CSS durumunuza bağlı olarak aşağıdakilerden birini veya birkaçını yapabilirsiniz:

**Gereksiz stilleri kaldırın :** Bu kulağa bariz gelebilir, ancak birçok geliştiricinin geliştirme sırasında stil sayfalarına eklenen ve kullanılmayan CSS kurallarını temizlemeyi unutması şaşırtıcıdır. Tüm stiller, düzen ve boyama sırasında kullanılıp kullanılmadığına bakılmaksızın ayrıştırılır, bu nedenle kullanılmayanları kaldırmak sayfa oluşturmayı hızlandırabilir. **[Bir Siteden Kullanılmayan CSS Nasıl Kaldırılır? (csstricks.com, 2019)](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/)** makalesinin özetlediği gibi, bu büyük bir kod tabanı için çözülmesi zor bir sorundur ve kullanılmayan CSS'yi güvenilir bir şekilde bulup kaldırmak için sihirli bir çözüm yoktur. CSS'nizi modüler tutmak ve eklenen ve kaldırılanlar konusunda dikkatli ve bilinçli olmak için zorlu çalışmayı yapmanız gerekir.

**CSS'i ayrı modüllere ayırın :** CSS'i modüler tutmak, sayfa yüklenirken gerekli olmayan CSS'in daha sonra yüklenebileceği anlamına gelir; bu da ilk CSS oluşturma engellemesini ve yükleme sürelerini azaltır. Bunu yapmanın en basit yolu, CSS'inizi ayrı dosyalara bölmek ve yalnızca gerekli olanı yüklemektir:

```HTML

<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link
  rel="stylesheet"
  href="mobile.css"
  media="screen and (width <= 480px)" />
```

Yukarıdaki örnek üç stil kümesi sunar: her zaman yüklenecek varsayılan stiller, yalnızca belge yazdırılırken yüklenecek stiller ve yalnızca dar ekranlı cihazlar tarafından yüklenecek stiller. Varsayılan olarak, tarayıcı belirtilen her stil sayfasının render engelleme özelliğine sahip olduğunu varsayar. Bir stil sayfasının ne zaman uygulanması gerektiğini, bir medya sorgusu media içeren bir öznitelik ekleyerek tarayıcıya bildirebilirsiniz . Tarayıcı, yalnızca belirli bir senaryoda uygulaması gereken bir stil sayfası gördüğünde, stil sayfasını yine de indirir, ancak render engelleme yapmaz. CSS'yi birden fazla dosyaya ayırarak, bu durumda ana render engelleme dosyası çok daha küçük olur ve render engelleme süresini azaltır. styles.css

**CSS dosyalarınızı küçültün ve sıkıştırın :** Küçültme, kod üretime alındığında insan okunabilirliği için dosyada bulunan tüm boşlukları kaldırmayı içerir. CSS dosyalarınızı küçülterek yükleme sürelerini önemli ölçüde azaltabilirsiniz. Küçültme genellikle bir derleme sürecinin parçası olarak yapılır (örneğin, çoğu JavaScript çerçevesi, dağıtıma hazır bir proje oluşturduğunuzda kodu küçültür). Küçültmenin yanı sıra, sitenizin barındırıldığı sunucunun dosyaları sunmadan önce gzip gibi bir sıkıştırma yöntemi kullandığından emin olun.

**Seçicileri basitleştirin :** İnsanlar genellikle gerekli stilleri uygulamak için gerekenden daha karmaşık seçiciler yazarlar. Bu, yalnızca dosya boyutlarını artırmakla kalmaz, aynı zamanda bu seçicilerin ayrıştırma süresini de uzatır. Örneğin:

```CSS

/* Very specific selector */
body div#main-content article.post h2.headline {
  font-size: 24px;
}

/* You probably only need this */
.headline {
  font-size: 24px;
}
```

Seçicilerinizi daha az karmaşık ve spesifik hale getirmek, bakım açısından da faydalıdır. Basit seçicilerin ne yaptığını anlamak kolaydır ve seçiciler daha az spesifik olduğunda, daha sonra gerektiğinde stilleri geçersiz kılmak da kolaydır .

**Gereğinden fazla öğeye stil uygulamayın :** Yaygın bir hata , evrensel seçiciyi kullanarak tüm öğelere veya en azından gerekenden fazla öğeye stil uygulamaktır . Bu tür stillendirme, özellikle daha büyük sitelerde performansı olumsuz etkileyebilir.

```CSS

/* Selects every element inside the <body> */
body * {
  font-size: 14px;
  display: flex;
}
```

Unutmayın ki birçok özellik (örneğin `<property> font-size`) değerlerini üst öğelerinden miras alır, bu nedenle bunları her yere uygulamanıza gerek yoktur. Ayrıca **[Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)** gibi güçlü araçların da ölçülü kullanılması gerekir. Bunları her yerde kullanmak her türlü beklenmedik davranışa neden olabilir.

**CSS sprite'ları ile resim HTTP isteklerini azaltın :** CSS sprite'ları, sitenizde kullanmak istediğiniz birkaç küçük resmi (örneğin ikonları) tek bir resim dosyasına yerleştiren ve ardından background-positionher farklı yerde göstermek istediğiniz resim parçasını görüntülemek için farklı değerler kullanan bir tekniktir. Bu, resimleri almak için gereken HTTP isteklerinin sayısını önemli ölçüde azaltabilir.

**Önemli varlıkları önceden yükle :** Bu özelliği kullanarak öğeleri kritik varlıklar için ön yükleyicilere rel="preload" dönüştürebilirsiniz <link>. Buna CSS dosyaları, yazı tipleri ve resimler dahildir:

```HTML

<link rel="preload" href="style.css" as="style" />

<link
  rel="preload"
  href="ComicSans.woff2"
  as="font"
  type="font/woff2"
  crossorigin />

<link
  rel="preload"
  href="bg-image-wide.png"
  as="image"
  media="(width > 600px)" />
  ```

Bu özellik sayesinde preload tarayıcı, referans verilen kaynakları mümkün olan en kısa sürede getirir ve tarayıcı önbelleğinde kullanılabilir hale getirir; böylece sonraki kodlarda referans verildiğinde daha çabuk kullanıma hazır olurlar. Kullanıcının sayfada erken karşılaşacağı yüksek öncelikli kaynakları önceden yüklemek, deneyimi olabildiğince sorunsuz hale getirmek için faydalıdır. Ayrıca, mediaduyarlı ön yükleyiciler oluşturmak için öznitelikleri nasıl kullanabileceğinize de dikkat edin.


**Animasyonların işlenmesi**

Animasyonlar, algılanan performansı iyileştirerek arayüzlerin daha hızlı çalışmasını sağlayabilir ve kullanıcıların bir sayfanın yüklenmesini beklerken (örneğin yükleme göstergeleri) ilerleme kaydedildiğini hissetmelerini sağlayabilir. Bununla birlikte, daha büyük animasyonlar ve daha fazla sayıda animasyon doğal olarak daha fazla işlem gücü gerektirecek ve bu da performansı düşürebilir.

En basit tavsiye, gereksiz tüm animasyonları azaltmaktır. Ayrıca, düşük güçlü bir cihaz veya sınırlı pil ömrüne sahip bir mobil cihaz kullanan kullanıcılara animasyonları kapatmak için bir kontrol/site tercihi de sağlayabilirsiniz. Ayrıca, animasyonun sayfaya uygulanıp uygulanmayacağını kontrol etmek için JavaScript kullanabilirsiniz. prefers-reduced-motion Kullanıcının işletim sistemi düzeyindeki animasyon tercihlerine bağlı olarak animasyon stillerini seçici olarak sunmak veya sunmamak için kullanılabilecek bir medya sorgusu da mevcuttur.

Temel DOM animasyonları için, mümkün olduğunca JavaScript animasyonları yerine **[CSS animasyonlarını](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations/Using)** kullanmanız önerilir 

**Animasyon yapılacak özellikleri seçmek**

Sonraki adımda, animasyon performansı büyük ölçüde hangi özelliklere animasyon uyguladığınıza bağlıdır. Bazı özellikler, animasyon uygulandığında yeniden akışa (ve dolayısıyla yeniden boyamaya ) neden olur ve bunlardan kaçınılmalıdır. Bunlara örnek olarak şunlar verilebilir:

- 1\.Bir öğenin boyutlarını değiştirin, örneğin width, height, border, ve padding.
- 2\.margin, top, bottom, left, ve gibi öğeleri yeniden konumlandırın right.
- 3\.align-content, align-items, ve gibi bir öğenin düzenini değiştirin flex.
- 4\.Öğenin geometrisini değiştiren görsel efektler ekleyin, örneğin box-shadow.

Modern tarayıcılar, sayfanın tamamını değil, yalnızca belgenin değişen alanını yeniden çizecek kadar akıllıdır. Sonuç olarak, daha büyük animasyonlar daha maliyetlidir.

Mümkünse, yeniden akışa/yeniden boyamaya neden olmayan özellikleri canlandırmak daha iyidir. Bunlar şunlardır:

- 1\.Dönüşümler
- 2\.opacity
- 3\filter

**GPU üzerinde animasyon oluşturma**

Performansı daha da iyileştirmek için, animasyon işlemlerini ana iş parçacığından cihazın GPU'suna (kompozisyon olarak da adlandırılır) taşımayı düşünebilirsiniz. Bu, tarayıcının otomatik olarak GPU'ya göndereceği belirli animasyon türlerini seçerek yapılır; bunlar şunlardır:

- 1\.3B dönüşüm animasyonları, örneğin transform: translateZ()ve rotate3d().
- 2\.Belirli diğer özelliklere sahip öğeler, örneğin . gibi, animasyonlu hale getirilir position: fixed.
- 3\.Uygulanmış öğeler will-change(aşağıdaki bölüme bakınız).
- 4\.<video>, <canvas>, ve gibi bazı öğeler kendi katmanlarında oluşturulur <iframe>.

GPU üzerinde animasyon, özellikle mobil cihazlarda performansı artırabilir. Ancak animasyonları GPU'ya taşımak her zaman o kadar kolay değildir.

**Öğe değişikliklerini optimize etme will-change**

Tarayıcılar, bir öğe gerçekten değişmeden önce optimizasyonlar ayarlayabilir. Bu tür optimizasyonlar, potansiyel olarak maliyetli işleri gerekmeden önce yaparak sayfanın yanıt verme hızını artırabilir. CSS will-change özelliği, tarayıcılara bir öğenin nasıl değişmesinin beklendiği konusunda ipucu verir.

**Not:** will-change Bu, mevcut performans sorunlarıyla başa çıkmak için son çare olarak kullanılmak üzere tasarlanmıştır. Performans sorunlarını önceden tahmin etmek için kullanılmamalıdır.

```CSS
.element {
  will-change: opacity, transform;
}
```

**Görüntüleme engellemesini optimize etme**

CSS, medya sorguları ile stilleri belirli koşullara göre sınırlandırabilir. Medya sorguları, duyarlı web tasarımı için önemlidir ve kritik bir işleme yolunu optimize etmemize yardımcı olur. Tarayıcı, tüm bu stilleri ayrıştırana kadar işlemeyi engeller, ancak yazdırma stil sayfaları gibi kullanmayacağını bildiği stillerde işlemeyi engellemez. CSS'yi medya sorgularına göre birden fazla dosyaya bölerek, kullanılmayan CSS'nin indirilmesi sırasında işleme engellemesini önleyebilirsiniz. Engellemeyen bir CSS bağlantısı oluşturmak için, yazdırma stilleri gibi hemen kullanılmayan stilleri ayrı bir dosyaya taşıyın, <link>HTML işaretlemesine bir `<style>` etiketi ekleyin ve bu durumda yazdırma stil sayfası olduğunu belirten bir medya sorgusu ekleyin.

```HTML

<!-- Loading and parsing styles.css is render-blocking -->
<link rel="stylesheet" href="styles.css" />

<!-- Loading and parsing print.css is not render-blocking -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- Loading and parsing mobile.css is not render-blocking on large screens -->
<link rel="stylesheet" href="mobile.css" media="screen and (width <= 480px)" />
```

Varsayılan olarak, tarayıcı belirtilen her stil sayfasının render engelleme özelliğine sahip olduğunu varsayar. Stil sayfasının ne zaman uygulanması gerektiğini, medya sorgusunamedia bir öznitelik ekleyerek tarayıcıya bildirin . Tarayıcı bir stil sayfası gördüğünde, onu yalnızca belirli bir senaryo için uygulaması gerektiğini bilir, yine de stil sayfasını indirir ancak render engellemesi yapmaz. CSS'yi birden fazla dosyaya ayırarak, bu durumda ana render engelleme dosyası çok daha küçük olur ve render engelleme süresini azaltır.styles.css

**Yazı tipi performansını iyileştirme**
Bu bölümde, web yazı tipi performansını iyileştirmeye yönelik bazı faydalı ipuçları yer almaktadır.

Genel olarak, sitenizde kullandığınız yazı tipleri konusunda dikkatlice düşünün. Bazı yazı tipi dosyaları çok büyük olabilir (birkaç megabayt). Görsel heyecan için çok sayıda yazı tipi kullanmak cazip gelse de, bu sayfa yükleme hızını önemli ölçüde yavaşlatabilir ve sitenizin dağınık görünmesine neden olabilir. Muhtemelen sadece iki veya üç yazı tipine ihtiyacınız var ve web güvenli yazı tipleri kullanmayı seçerseniz daha azıyla da idare edebilirsiniz .

**Yazı tipi yükleniyor**
Unutmayın ki, bir yazı tipi yalnızca özellik kullanılarak bir öğeye uygulandığında yüklenir , `@` kuralı **[font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-family)** kullanılarak ilk kez referans verildiğinde değil :@font-face

```CSS

/* Font not loaded here */
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
}

h1,
h2,
h3 {
  /* It is actually loaded here */
  font-family: "Open Sans", sans-serif;
}
```

Bu nedenle, önemli yazı tiplerini önceden yüklemek faydalı olabilir rel="preload"; böylece ihtiyaç duyulduğunda daha hızlı kullanılabilir olurlar:

```HTML

<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

font-family Bu , bildiriminiz büyük bir harici stil dosyasının içinde gizlenmişse ve ayrıştırma işleminde önemli ölçüde daha sonra erişilecekse daha faydalı olma olasılığı yüksektir . Ancak bu bir dezavantajdır; yazı tipi dosyaları oldukça büyüktür ve çok fazla yazı tipini önceden yüklerseniz, diğer kaynakları geciktirebilirsiniz.


**Yalnızca ihtiyacınız olan semboller yükleniyor.**

Metin gövdesi için bir yazı tipi seçerken, özellikle kullanıcı tarafından oluşturulan içerik ve/veya birden fazla dildeki içerikle uğraşıyorsanız, kullanılacak karakterlerden emin olmak daha zordur.

Ancak, belirli bir karakter kümesini (örneğin, yalnızca başlıklar veya belirli noktalama işaretleri için karakterler) kullanacağınızı biliyorsanız, tarayıcının indirmesi gereken karakter sayısını sınırlayabilirsiniz. Bu, yalnızca gerekli alt kümeyi içeren bir yazı tipi dosyası oluşturarak yapılabilir. Bu işleme alt kümeleme denir . Tanımlayıcı daha sonra alt küme yazı tipinizin ne zaman kullanılacağını belirtmek için kullanılabilir. Sayfa bu aralıktaki hiçbir karakteri kullanmıyorsa, yazı tipi indirilmez.unicode-range @font-face

```CSS
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

**Yazı tipi görüntüleme davranışını font-display tanımlayıcı ile belirleme**

`@` kuralına uygulandığında @font-face, bu font-display tanımlayıcı, yazı tipi dosyalarının tarayıcı tarafından nasıl yüklendiğini ve görüntülendiğini tanımlar; bu sayede bir yazı tipi yüklenirken veya yüklenemediğinde metin yedek bir yazı tipiyle görüntülenebilir. Bu, boş bir ekran yerine metni görünür hale getirerek performansı artırır, ancak bunun karşılığında biçimlendirilmemiş metnin kısa bir süre görünmesi dezavantajıdır.

```CSS
@font-face {
  font-family: "someFont";
  src: url("/path/to/fonts/someFont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
}
```


**CSS kapsamı ile stil yeniden hesaplamasının optimize edilmesi**

CSS containment modülünde tanımlanan özellikleri kullanarak , tarayıcıya sayfanın farklı bölümlerini birbirinden bağımsız olarak izole etmesini ve bunların işlenmesini optimize etmesini söyleyebilirsiniz. Bu, ayrı ayrı bölümlerin işlenmesinde performansı artırır. Örneğin, tarayıcıya belirli kapsayıcıları görünüm alanında görünene kadar işlememesini belirtebilirsiniz.

Bu özellik, bir yazarın sayfadaki tek tek kapsayıcılara hangi kapsama türlerinin contain uygulanmasını istediğini tam olarak belirtmesine olanak tanır . Bu, tarayıcının DOM'un sınırlı bir bölümü için düzeni, stili, boyamayı, boyutu veya bunların herhangi bir kombinasyonunu yeniden hesaplamasına olanak tanır.

```CSS

article {
  contain: content;
}
```

Bu content-visibility özellik, yazarların bir dizi kapsayıcıya güçlü bir kapsama alanı uygulamasına ve tarayıcının bu kapsayıcıları ihtiyaç duyulana kadar yerleştirmemesi ve işlememesi gerektiğini belirtmesine olanak tanıyan kullanışlı bir kısayoldur.

İkinci bir özellik contain-intrinsic-size olan `<size>` özelliği de mevcuttur ve bu özellik, kapsayıcılar kapsama etkisindeyken onlara geçici bir boyut sağlamanıza olanak tanır. Bu, kapsayıcıların içerikleri henüz oluşturulmamış olsa bile yer kaplayacağı anlamına gelir; böylece kapsama etkisi, öğeler oluşturulurken ve görünür hale gelirken kaydırma çubuğu kayması ve takılma riski olmadan performans iyileştirmesini sağlayabilir. Bu, içerik yüklenirken kullanıcı deneyiminin kalitesini artırır.

```CSS
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

**:has()Seçicileri optimize etmek**
Sözde :has()sınıf, güçlü seçim yetenekleri sağlar ancak performans darboğazlarından kaçınmak için dikkatli kullanılmalıdır.

## Performans iş planı

**Kaynak:** [Performance business case](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/business_case_for_performance)

Web performansının önemini ele aldık. Web performansını optimize etmek için neler yapmanız gerektiğini öğrendiniz. Peki, müşterilerinizi ve/veya yönetiminizi performansa öncelik vermeye ve yatırım yapmaya nasıl ikna edersiniz? Bu bölümde, karar vericileri yatırım yapmaya ikna etmek için net bir iş gerekçesi oluşturmayı ele alacağız.

**Performansı iş önceliği haline getirmek**
Performansa öncelik vermenin kullanıcı deneyimini ve dolayısıyla geliri nasıl artırabileceğini tartıştık. Web performansına öncelik vermemenin işletme gelir kaybına yol açabileceğini biliyoruz. Bu makale, belirli iş metriklerinin bir kullanıcının web performansı deneyimiyle doğrudan nasıl ilişkili olduğunu ve hizmet tasarımının web performansı deneyimini artırmak için nasıl uygulanabileceğini ele almaktadır. Kümülatif deneyimlerin dönüşüm ve elde tutma oranlarını nasıl etkilediğini anlamanın önemini vurgulamaktadır.

**Performans bütçeleri**
Web performans bütçesi belirlemek, ekibin siteyi güncel tutmasını ve geriye dönüşleri önlemesini sağlamaya yardımcı olabilir. Performans bütçesi, izin verilen maksimum HTTP isteği sayısı, tüm varlıkların toplam boyutu, belirli bir cihazda izin verilen minimum FPS vb. gibi korunması gereken sınırları belirlemek için belirlenen bir dizi sınırdır. Bütçe, tek bir dosyaya, dosya türüne, bir sayfada yüklenen tüm dosyalara, belirli bir ölçüme veya belirli bir süre boyunca bir eşiğe uygulanabilir. Bütçe, zaman, miktar veya kural tabanlı olsun, ulaşılabilir hedefleri yansıtır.

Bütçe belirlemek ve bunu teşvik etmek, performans savunucularının pazarlama, satış veya hatta video, üçüncü taraf komut dosyaları veya çerçeveler eklemek isteyen diğer geliştiriciler gibi rakip çıkarlara karşı iyi bir kullanıcı deneyimi için savunma yapmalarına yardımcı olur. Performans bütçeleri, geliştirici ekiplerinin kullanıcılar için en uygun performansı korumasına yardımcı olurken, işletmenin yeni pazarlara girmesini ve özel deneyimler sunmasını da sağlar.

**Temel Performans Göstergeleri**
Temel performans göstergelerini (KPI) hedef olarak belirlemek, aynı zamanda iş hedefleri olan performans hedeflerini vurgulayabilir. KPI'lar, kullanıcı deneyiminin ve performansın işletmenin gelirine etkisini ölçmede önemli iş ölçütleri kümesi olmanın yanı sıra, performansa öncelik vermenin faydalarını göstermenin bir yolu da olabilir. İşte dikkate alınması gereken bazı KPI'lar:

*Dönüşüm Oranı*
Sitenize gelen trafiğin, satın alma işlemini tamamlamak veya bültene abone olmak gibi amaçlanan bir eylemi gerçekleştirme yüzdesi. Bir işletme sitesi yavaş olduğunda, kullanıcıların amaçlanan görevlerini tamamlamalarını engelleyebilir. Bu da düşük dönüşüm oranlarına yol açabilir.

*Sahada Geçirilen Süre*
Kullanıcılarınızın sitenizde toplamda geçirdiği ortalama süre. Bir site yavaş çalıştığında, kullanıcıların siteyi erken terk etme olasılığı daha yüksektir ve bu da sitede geçirilen süre metriklerinin düşük olmasına yol açabilir.

*Net Tanıtım Puanı*
Net tavsiye puanı (NPS), bir şirketin markasına, ürününe veya hizmetine olan müşteri sadakatini değerlendirmek için kullanılan bir ölçüttür. Kötü kullanıcı performansı deneyimleri, kötü marka itibarına yol açabilir.

Dönüşüm oranı, sitede geçirilen süre ve/veya net tanıtım puanlarını KPI'lar olarak belirlemek, web performans çalışmalarına finansal ve diğer iş hedefleri açısından değer katar ve çabaların değerini kanıtlayan ölçütlerle desteği artırmaya yardımcı olur.


## En iyi uygulamalar ve ipuçları

**Kaynak:** [Best practices & tips](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Best_practices)

Web sitenizin mümkün olan en iyi performansı göstermesi için birçok neden vardır . Aşağıda, her konu hakkında daha fazla bilgi edinmek için bağlantılar içeren en iyi uygulamalar, araçlar ve API'ler hakkında kısa bir özet bulunmaktadır.

**En iyi uygulamalar**
- 1\.Öncelikle tarayıcının kritik görüntü oluşturma yolunu öğrenerek başlayın . Bunu bilmek, sitenin performansını nasıl iyileştireceğinizi anlamanıza yardımcı olacaktır.
- 2\., , , gibi kaynak ipuçlarını kullanarak .rel=preconnectrel=dns-prefetchrel=prefetchrel=preload
-3\.JavaScript boyutunu minimumda tutun . Yalnızca mevcut sayfa için gerekli olan kadar JavaScript kullanın.
- 4\.CSS performans faktörleri
- 5\.Sunucunuzda (veya CDN'nizde) HTTP/2 kullanın .
- 6\.Yükleme sürelerini önemli ölçüde azaltabilecek kaynaklar için bir CDN kullanın.
- 7\.Kaynaklarınızı gzip , Brotli ve Zopfli kullanarak sıkıştırın .
- 8\.Görüntü optimizasyonu (CSS animasyonu veya mümkünse SVG kullanın).
- 9\.Uygulamanızın görünüm alanı dışındaki bölümlerini tembel yükleme (lazy loading) yöntemiyle yükleyin. Bunu yapıyorsanız, SEO için bir yedek planınız olsun (örneğin, bot trafiği için tam sayfa yükleme); örneğin, ` <head>` loadingöğesinde `<head>` özniteliğini <img>veya benzer şekilde `<head>` <iframe>, <video>` <audio><head>` öğelerinde `<head>` özniteliğini kullanarak.
- 10\.Kullanıcılarınız için gerçekten neyin önemli olduğunu anlamak da çok önemlidir. Bu, mutlak zamanlama olmayabilir, ancak kullanıcı algısı olabilir .

**Hızlı Kazanımlar**
*CSS*
**[Web performansı tamamen kullanıcı deneyimi ve algılanan performansla ilgilidir. Kritik oluşturma yolu belgesinde](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path)** öğrendiğimiz gibi , CSS'yi geleneksel bir bağlantı etiketiyle bağlamak rel="stylesheet"eşzamanlıdır ve oluşturmayı engeller. Engelleyici CSS'yi kaldırarak sayfanızın oluşturulmasını optimize edin.

CSS'i eşzamansız olarak yüklemek için medya türünü olarak ayarlayabilir printve yüklendikten sonra olarak değiştirebilirsiniz . Bu, JavaScript gerektirir, bu nedenle geleneksel bir yedekleme içeren all bir etiket eklemek önemlidir .<noscript>

Bu yaklaşımın dezavantajı, biçimlendirilmemiş metnin (FOUT) görünmesidir. Bunu gidermenin en basit yolu, kaydırmadan önce tarayıcı görüntüleme alanında gördüğünüz veya sayfanın üst kısmında görüntülenen içerik için gerekli olan CSS'yi satır içi olarak eklemektir. Bu stiller, CSS dosya isteği gerektirmediği için algılanan performansı iyileştirecektir.

```HTML
<link
  id="my-stylesheet"
  rel="stylesheet"
  href="/path/to/my.css"
  media="print" />
<noscript><link rel="stylesheet" href="/path/to/my.css" /></noscript>
```

```JS
const stylesheet = document.getElementById("my-stylesheet");
stylesheet.addEventListener("load", () => {
  stylesheet.media = "all";
});
```
Bu yaklaşımın dezavantajı, biçimlendirilmemiş metnin (FOUT) anlık olarak görünmesidir. Bunu gidermenin en basit yolu, kaydırmadan önce tarayıcı görüntüleme alanında gördüğünüz veya sayfanın üst kısmında görüntülenen tüm içerik için gerekli olan CSS'yi satır içi olarak eklemektir. Bu stiller, CSS dosya isteği gerektirmediği için algılanan performansı iyileştirecektir.

```HTML
<style>
  /* Insert your CSS here */
</style>
```

**JavaScript**

async`<script> ` veya ` <script>` özniteliklerini kullanarak JavaScript engellemesini önleyin deferveya JavaScript varlıklarını sayfanın DOM öğelerinden sonra bağlayın. JavaScript yalnızca DOM ağacında `<script>` etiketinden sonra gelen öğeler için oluşturmayı engeller.

**Web Yazı Tipleri**
EOT ve TTF formatları varsayılan olarak sıkıştırılmamıştır. Bu dosya türleri için GZIP veya Brotli gibi sıkıştırma yöntemleri uygulayın. WOFF ve WOFF2 formatlarını kullanın. Bu formatlarda sıkıştırma zaten yerleşiktir.

`@font-face` etiketi içinde `font-display: swap` kullanın. `font-display: swap` kullanarak tarayıcı, görüntülemeyi engellemez ve tanımlanmış yedek sistem yazı tiplerini kullanır. Yazı tipi kalınlığını, web yazı tipine mümkün olduğunca yakın olacak şekilde optimize edin.

**Simge web yazı tipleri**
Mümkünse simge tabanlı web yazı tiplerinden kaçının ve sıkıştırılmış SVG'ler kullanın. Daha da optimize etmek için, HTTP isteklerinden kaçınmak amacıyla SVG verilerinizi HTML işaretlemesi içine yerleştirin.

**Aletler**
- 1\.Sitenizin profilini oluşturmak için Firefox Geliştirici Araçlarını kullanmayı öğrenin .
- 2*.PageSpeed ​​Insights, sayfanızı analiz edebilir ve performansı iyileştirmek için bazı genel ipuçları verebilir.
- 3\.Lighthouse , performans, SEO ve erişilebilirlik de dahil olmak üzere sitenizin birçok yönü hakkında ayrıntılı bir analiz sunabilir.
- 4\.WebPageTest.org'u kullanarak sayfanızın hızını test edin ; burada farklı gerçek cihaz türlerini ve konumları kullanabilirsiniz.
- 5\.Gerçek kullanıcı metriklerini ölçen Chrome Kullanıcı Deneyimi Raporunu deneyin .
- 6\.Bir performans bütçesi belirleyin .


**API'ler**
- 1\.Boomerang kütüphanesini kullanarak kullanıcı metriklerini toplayın .
- 2\.Veya doğrudan window.performance.timing ile toplayın .

**Yapılmaması gerekenler (kötü uygulamalar)**
- 1\.Her şeyi indirin
- 2\.Sıkıştırılmamış medya dosyaları kullanın.

---

## Bölüm 3: Web Testi (Testing & Cross-Browser Compatibility)

# Çeviri: MDN — Test (Testing)
**Kaynak:** [MDN Web Docs — Testing](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing)


## İçindekiler
- 1\.Tarayıcılar arası testlere giriş
- 2\.Test stratejileri
- 3\.Sık karşılaşılan HTML ve CSS sorunları
- 4\.Özellik tespiti
- 5\.Otomatik test
- 6\.Otomasyon ortamı kurulumu


---

 # Test

 **Kaynak:** [MDN Web Docs — Testing](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing)

 Belirli bir karmaşıklık seviyesini aşan her kod tabanının, yeni kod eklendikçe kod tabanının doğru ve performanslı bir şekilde çalışmaya devam etmesini ve kullanıcıların ihtiyaçlarını karşılamasını sağlamak için bir test sistemine sahip olması gerekir. Bu modül, başlamanız gereken temel unsurları listeler.


 ## Tarayıcılar arası testlere giriş

 **Kaynak:** [MDN Web Docs — Introduction to cross-browser testing](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Introduction)

 Bu makale, tarayıcılar arası testin ne olduğuna, bazı yaygın sorunlara ve hata ayıklama/sorun giderme yaklaşımlarına genel bir bakış sunmaktadır.

 **Tarayıcılar arası test nedir?**
Tarayıcılar arası test, bir web sitesinin çeşitli tarayıcılar ve cihazlarda düzgün çalışmasını sağlama uygulamasıdır. Web geliştiricileri şunları dikkate almalıdır:

- 1\.Biraz daha eski olan ve en yeni JS/CSS özelliklerinin tamamını desteklemeyenler de dahil olmak üzere farklı tarayıcılar.
- 2\.Masaüstü ve dizüstü bilgisayarlardan tabletlere ve akıllı telefonlara, akıllı televizyonlara kadar, donanım özellikleri değişen farklı cihazlar.
- 3\.Engelli bireyler, ekran okuyucu gibi yardımcı teknolojilere başvurabilir veya yalnızca klavye kullanabilirler.

Web siteleri farklı tarayıcılar ve cihazlar üzerinden ve engelli kişiler için erişilebilir olmalıdır (örneğin, ekran okuyucu dostu). Bir sitenin tüm tarayıcılarda ve cihazlarda tamamen aynı deneyimi sunması gerekmez, yeter ki temel işlevsellik bir şekilde erişilebilir olsun. Örneğin, modern bir tarayıcı animasyonlu, 3 boyutlu ve parlak bir şey gösterebilirken, eski tarayıcılar aynı bilgiyi içeren düz bir grafik gösterebilir.

Ayrıca, bir web sitesinin TÜM tarayıcılarda ve cihazlarda çalışması neredeyse imkansızdır, bu nedenle bir web geliştiricisinin, kodun çalışacağı tarayıcı ve cihaz aralığı konusunda site sahibiyle bir anlaşmaya varması gerekir.

**Tarayıcılar arası uyumluluk sorunları neden ortaya çıkar?**
Tarayıcılar arası sorunların ortaya çıkmasının birçok farklı nedeni vardır ve burada farklı tarayıcılar/cihazlar/tarama tercihleri ​​arasında farklı davranışlar sergileyen sorunlardan bahsediyoruz. Tarayıcılar arası sorunlara geçmeden önce, kodunuzdaki hataları zaten düzeltmiş olmalısınız (gerekirse hafızanızı tazelemek için önceki konulardan **[HTML Hata Ayıklama ,](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)** **[CSS Hata Ayıklama](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)** ve **[Ne yanlış gitti?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong)** JavaScript Sorun Giderme konularına bakın).

Tarayıcılar arası uyumluluk sorunları genellikle şu nedenlerle ortaya çıkar:

- 1\.Bazen tarayıcılarda hatalar olur veya özellikler farklı şekilde uygulanır. Bu durum eskisine göre çok daha az kötü; 1990'larda IE4 ve Netscape 4 baskın tarayıcı olmak için yarışırken, tarayıcı şirketleri rekabet avantajı elde etmek için kasıtlı olarak birbirlerinden farklı şeyler uyguladılar ve bu da geliştiriciler için hayatı cehenneme çevirdi. Tarayıcılar günümüzde standartlara uymada çok daha iyiler, ancak farklılıklar ve hatalar yine de zaman zaman ortaya çıkabiliyor.
- 2\.Bazı tarayıcılar, teknoloji özelliklerine diğerlerinden farklı düzeylerde destek sağlayabilir. Bu durum, tarayıcıların yeni yeni uygulamaya koyduğu en son özelliklerle uğraşırken veya artık geliştirilmeyen, hatta yeni bir özellik icat edilmeden çok önce dondurulmuş (yani üzerinde yeni çalışma yapılmayan) çok eski tarayıcıları desteklemeniz gerektiğinde kaçınılmazdır. Örneğin, sitenizde en son JavaScript özelliklerini kullanmak istiyorsanız, bunlar eski tarayıcılarda çalışmayabilir. Eski tarayıcıları desteklemeniz gerekiyorsa, bunları kullanmamanız veya gerektiğinde bir tür çapraz derleyici kullanarak kodunuzu eski moda sözdizimine dönüştürmeniz gerekebilir.
- 3\.Bazı cihazların, bir web sitesinin yavaş çalışmasına veya kötü görüntülenmesine neden olabilecek kısıtlamaları olabilir. Örneğin, bir site masaüstü bilgisayarda güzel görünecek şekilde tasarlanmışsa, mobil cihazda muhtemelen çok küçük görünecek ve okunması zor olacaktır. Siteniz çok sayıda büyük animasyon içeriyorsa, yüksek özellikli bir tablette sorunsuz çalışabilir ancak düşük özellikli bir cihazda yavaş veya takılarak çalışabilir.

…ve daha birçok sebep.

**Tarayıcılar arası test için iş akışları**
Tüm bu tarayıcılar arası test işleri zaman alıcı ve korkutucu gelebilir, ancak öyle olmak zorunda değil; sadece dikkatlice planlamanız ve beklenmedik sorunlarla karşılaşmamak için doğru yerlerde yeterli test yapmanız gerekiyor. Büyük bir proje üzerinde çalışıyorsanız, yeni özelliklerin hedef kitleniz için çalıştığından ve koda yapılan yeni eklemelerin daha önce çalışan eski özellikleri bozmadığından emin olmak için düzenli olarak test etmelisiniz.

Bir projenin test işlemlerini en sona bırakırsanız, ortaya çıkan hataların düzeltilmesi, bunları proje ilerledikçe keşfedip düzeltmenize kıyasla çok daha pahalı ve zaman alıcı olacaktır.

Bir projedeki test ve hata düzeltme iş akışı kabaca aşağıdaki dört aşamaya ayrılabilir (bu sadece çok kaba bir özet; farklı kişiler işleri bundan oldukça farklı şekilde yapabilir):

İlk planlama > Geliştirme > Test/keşif > Düzeltmeler/tekrarlama

2-4. adımlar, uygulamanın tamamlanması için gerektiği kadar tekrarlanacaktır. Test sürecinin farklı bölümlerini sonraki yazılarımızda çok daha ayrıntılı olarak inceleyeceğiz, ancak şimdilik her adımda neler olabileceğini özetleyelim.

**İlk planlama**
İlk planlama aşamasında, site sahibi/müşteriyle (bu, patronunuz veya web sitesi oluşturduğunuz harici bir şirketten biri olabilir) muhtemelen birkaç planlama toplantısı yapacaksınız ve bu toplantılarda web sitesinin tam olarak ne olması gerektiğine karar vereceksiniz - hangi içerik ve işlevselliğe sahip olmalı, nasıl görünmeli vb. Bu noktada, siteyi geliştirmek için ne kadar zamanınız olduğunu da bilmek isteyeceksiniz - son teslim tarihi nedir ve size çalışmanız için ne kadar ödeme yapacaklar? Bu konuda çok fazla detaya girmeyeceğiz, ancak tarayıcılar arası uyumluluk sorunları bu tür planlamayı ciddi şekilde etkileyebilir.

Gerekli özellik setini ve bu özellikleri hangi teknolojilerle geliştireceğinizi belirledikten sonra, hedef kitleyi araştırmaya başlamalısınız: Bu sitenin hedef kitlesi hangi tarayıcıları, cihazları vb. kullanacak? Müşterinin, daha önce yaptığı araştırmalardan, örneğin sahip oldukları diğer web sitelerinden veya şu anda üzerinde çalıştığınız web sitesinin önceki sürümlerinden bu konuda verileri olabilir. Eğer yoksa, rakiplerin kullanım istatistikleri veya sitenin hizmet vereceği ülkeler gibi diğer kaynaklara bakarak iyi bir fikir edinebilirsiniz. Ayrıca biraz sezgi de kullanabilirsiniz.

Örneğin, Kuzey Amerika'daki müşterilere hizmet veren bir e-ticaret sitesi kuruyor olabilirsiniz. Site, en popüler masaüstü ve mobil tarayıcıların son birkaç sürümünde tamamen sorunsuz çalışmalıdır; bu, Chrome (ve Chrome ile aynı işleme motorunu kullanan Edge ve Opera), Firefox ve Safari'yi içermelidir. Ayrıca WCAG AA uyumluluğuna da sahip olmalıdır.

Artık hedef test platformlarınızı bildiğinize göre, gerekli özellik setini ve kullanacağınız teknolojileri gözden geçirmeniz gerekiyor. Örneğin, e-ticaret sitesi sahibi, ürün sayfalarına entegre edilmiş her ürün için WebGL destekli 3 boyutlu bir sanal tur istiyorsa, bunun tüm eski tarayıcı sürümlerinde çalışmayacağını kabul etmesi gerekecektir.

Olası sorunlu alanların bir listesini oluşturmalısınız.

**Gelişim**
Şimdi sitenin geliştirilmesine geçelim. Geliştirmenin farklı bölümlerini modüllere ayırmalısınız; örneğin, farklı site alanlarını (ana sayfa, ürün sayfası, alışveriş sepeti, ödeme iş akışı vb.) alt bölümlere ayırabilirsiniz. Daha sonra bunları daha da alt bölümlere ayırabilirsiniz: ortak bir site başlığı ve altbilgisi uygulamak, ürün sayfası detay görünümü uygulamak, kalıcı alışveriş sepeti widget'ı uygulamak vb.

Tarayıcılar arası uyumluluk için birden fazla genel strateji mevcuttur, örneğin:

- 1\.Tüm işlevselliğin, hedef tarayıcıların tümünde mümkün olduğunca düzgün çalışmasını sağlayın. Bu, farklı tarayıcılara yönelik farklı şekillerde işlevselliği yeniden üreten farklı kod yolları yazmayı, JavaScript veya diğer teknolojileri kullanarak eksik desteği taklit etmek için bir Polyfill kullanmayı veya tek bir kod parçası yazmanıza ve ardından tarayıcının desteklediği şeye bağlı olarak arka planda farklı şeyler yapmanıza olanak tanıyan bir kütüphane kullanmayı içerebilir.
- 2\.Bazı şeylerin tüm tarayıcılarda aynı şekilde çalışmayacağını kabul edin ve tam işlevselliği desteklemeyen tarayıcılarda farklı (kabul edilebilir) çözümler sunun. Bazen bu, cihaz kısıtlamaları nedeniyle kaçınılmazdır; örneğin, sitenizi nasıl programlarsanız programlayın, sinema geniş ekranı 4 inçlik bir mobil ekranla aynı görsel deneyimi sunmayacaktır.
- 3\.Sitenizin bazı eski tarayıcılarda çalışmayacağını kabul edin ve yolunuza devam edin. Müşterileriniz/kullanıcı tabanınız bunu kabul ettiği sürece bu sorun değil.

Normalde geliştirme süreciniz yukarıdaki üç yaklaşımın bir kombinasyonunu içerecektir. En önemli şey, her küçük parçayı uygulamaya geçirmeden önce test etmenizdir; tüm testleri sona bırakmayın!

**Test/keşif**
Her uygulama aşamasından sonra, yeni işlevselliği test etmeniz gerekecektir. Başlangıç ​​olarak, özelliğinizin çalışmasını engelleyen genel kod sorunlarının olmadığından emin olmalısınız:

- 1\.Sisteminizde bulunan Firefox, Safari, Chrome veya Edge gibi birkaç kararlı tarayıcıda test edin.
- 2\.Basit erişilebilirlik testleri yapın; örneğin, sitenizi yalnızca klavye kullanarak veya ekran okuyucu aracılığıyla kullanarak gezinilebilir olup olmadığını kontrol edin.
- 3\.Android veya iOS gibi bir mobil platformda test edin.

Bu aşamada, yeni kodunuzda bulduğunuz tüm sorunları düzeltin.

Ardından, test tarayıcıları listenizi hedef kitlenizin tarayıcılarının tam bir listesine genişletmeyi ve tarayıcılar arası sorunları ayıklamaya odaklanmayı denemelisiniz  Örneğin:

- Lütfen en son değişikliği, masaüstünde kullanabileceğiniz tüm modern tarayıcılarda test etmeye çalışın; bunlar arasında Firefox, Chrome, Opera, Edge ve Safari (tercihen Mac, Windows ve Linux işletim sistemlerinde) yer almalıdır.
- Bunu yaygın olarak kullanılan telefon ve tablet tarayıcılarında test edin (örneğin, iPhone/iPad'de iOS Safari, iPhone/iPad/Android'de Chrome ve Firefox).
- Hedef listenize eklediğiniz diğer tarayıcılarda da testler yapın.

En basit yöntem, tüm testleri tek başınıza yapmaktır (eğer bir ekipte çalışıyorsanız, ekip arkadaşlarınızdan yardım isteyin). Mümkün olduğunca gerçek fiziksel cihazlar üzerinde test etmeye çalışmalısınız.

Farklı tarayıcıları, işletim sistemlerini ve cihaz kombinasyonlarını fiziksel donanım üzerinde test etme imkanınız yoksa, emülatörlerden (masaüstü bilgisayarınızda yazılım kullanarak bir cihazı taklit etme) ve sanal makinelerden (masaüstü bilgisayarınızda birden fazla işletim sistemi/yazılım kombinasyonunu taklit etmenizi sağlayan yazılım) de yararlanabilirsiniz. Bu, özellikle bazı durumlarda çok popüler bir seçenektir; örneğin, Windows aynı makineye aynı anda birden fazla Windows sürümünün yüklenmesine izin vermez, bu nedenle birden fazla sanal makine kullanmak genellikle tek seçenektir.

Bir diğer seçenek ise kullanıcı gruplarıdır; yani sitenizi test etmek için geliştirme ekibinizin dışında bir grup insan kullanmaktır. Bu, bir arkadaş veya aile grubu, diğer çalışanlardan oluşan bir grup, yerel bir üniversitedeki bir sınıf veya sitenizi test etmek ve sonuçları sağlamak için ücret ödenen profesyonel bir kullanıcı test ortamı olabilir.

Son olarak, denetim veya otomasyon araçlarını kullanarak testlerinizi daha akıllı hale getirebilirsiniz; projeleriniz büyüdükçe bu mantıklı bir seçimdir, çünkü tüm bu testleri elle yapmak gerçekten çok uzun zaman alabilir. Örneğin, sitenizi çeşitli tarayıcılarda yükleyebilecek kendi test otomasyon sisteminizi kurabilirsiniz ve şunları yapabilirsiniz:

- Bir buton tıklamasının başarılı bir şekilde bir şeyin gerçekleşmesine (örneğin, bir haritanın görüntülenmesi gibi) neden olup olmadığını kontrol edin ve testler tamamlandıktan sonra sonuçları görüntüleyin.
- Her birinin ekran görüntüsünü alarak, düzenin farklı tarayıcılarda tutarlı olup olmadığını görebilirsiniz.

Test etmeye para yatırmak isterseniz, kurulum ve test işlemlerinin büyük bir kısmını sizin için otomatikleştirebilecek ticari araçlar da mevcuttur (örneğin Sauce Labs ve Browser Stack ). Bu tür araçlar genellikle sürekli entegrasyon iş akışını mümkün kılar; bu sayede kod değişiklikleri, kod deposunuza gönderilmeden önce otomatik olarak test edilir.

*Ön sürüm tarayıcılarda test ediliyor.*
Tarayıcıların ön sürümlerinde test yapmak genellikle iyi bir fikirdir; aşağıdaki bağlantılara bakın:

- **[Firefox Geliştirici Sürümü](https://www.firefox.com/en-US/channel/desktop/developer/)**
- **[Microsoft Edge Insider](https://explore.microsoft.com/en-us/edge/download/insider?cc=1&cs=3962599643&form=MA13FJ)**
- **[Safari Teknoloji Önizlemesi](https://developer.apple.com/safari/technology-preview/)**
- **[Krom Kanarya](https://www.google.com/chrome/canary/)**
- **[Opera Geliştiricisi](https://www.opera.com/tr/opera/developer)**

Bu durum, özellikle sitenizde çok yeni teknolojiler kullanıyorsanız ve en son uygulamalarla test yapmak istiyorsanız veya bir tarayıcının en son sürümünde bir hata ile karşılaşıyorsanız ve tarayıcı geliştiricilerinin hatayı daha yeni bir sürümde düzeltip düzeltmediğini görmek istiyorsanız yaygındır.

**Düzeltmeler/tekrarlama**
Bir hata keşfettikten sonra, onu düzeltmeye çalışmalısınız.

Öncelikle hatanın nerede meydana geldiğini olabildiğince daraltmanız gerekir. Hatayı bildiren kişiden olabildiğince çok bilgi alın — hangi platform(lar), cihaz(lar), tarayıcı sürümü(leri) vb. Hatanın ne kadar yaygın olduğunu görmek için benzer yapılandırmalarda deneyin (örneğin, farklı masaüstü platformlarında aynı tarayıcı sürümü veya aynı platformda aynı tarayıcının birkaç farklı sürümü).

Bu sizin hatanız olmayabilir; bir tarayıcıda bir hata varsa, satıcının bunu hızla düzelteceğini umuyoruz. Hata zaten düzeltilmiş olabilir; örneğin, Firefox 49 sürümünde bir hata varsa ancak Firefox Nightly (52 sürümü) sürümünde artık yoksa, hata düzeltilmiştir. Eğer düzeltilmemişse, bir hata bildirimi yapmanız gerekebilir ( aşağıdaki Hata Bildirme bölümüne bakın).

Eğer hata sizinse, düzeltmeniz gerekiyor! Hatanın nedenini bulmak, herhangi bir web geliştirme hatasıyla aynı stratejiyi içerir (tekrar, bkz. HTML Hata Ayıklama , CSS Hata Ayıklama ve Ne yanlış gitti? JavaScript Sorun Giderme ). Hataya neyin neden olduğunu keşfettikten sonra, sorun çıkaran belirli tarayıcıda nasıl bir çözüm bulacağınıza karar vermeniz gerekir; sorunlu kodu doğrudan değiştiremezsiniz, çünkü bu diğer tarayıcılardaki kodu bozabilir. Genel yaklaşım genellikle kodu bir şekilde çatallamaktır; örneğin, sorunlu bir özelliğin çalışmadığı durumları tespit etmek için JavaScript özellik algılama kodunu kullanmak ve çalışan durumlarda farklı bir kod çalıştırmak gibi.

Düzeltme işlemi tamamlandıktan sonra, düzeltmenin düzgün çalıştığından ve sitenin başka yerlerde veya başka tarayıcılarda bozulmasına neden olmadığından emin olmak için test sürecini tekrarlamanız gerekecektir.

**Hata bildirme**
Yukarıda belirtilenleri tekrarlamak gerekirse, tarayıcılarda hatalar keşfederseniz bunları bildirmelisiniz:

- Firefox Bugzilla
- Safari
- Krom
- Opera

## Test stratejileri

**Kaynak:** [MDN Web Docs — Testing strategies](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Testing_strategies)

Bu makale, tarayıcılar arası testin nasıl yapılacağını açıklamaktadır: hangi tarayıcıların ve cihazların test edileceğinin seçilmesi, bu tarayıcıların ve cihazların nasıl test edileceği ve kullanıcı gruplarıyla nasıl test yapılacağı.

**Hangi tarayıcıları ve cihazları test edeceğinizi seçmek**
Her tarayıcı ve cihaz kombinasyonunu test edemeyeceğiniz için, sitenizin en önemli olanlarda çalıştığından emin olmanız yeterlidir. Pratik uygulamalarda, "önemli" genellikle "hedef kitle arasında yaygın olarak kullanılan" anlamına gelir.

Desteklemeyi düşündüğünüz miktara göre tarayıcıları ve cihazları sınıflandırabilirsiniz. Örneğin:

- 1\.A sınıfı: Yaygın/modern tarayıcılar — Uyumluluğu bilinen tarayıcılar. Kapsamlı testlerden geçirilir ve tam destek sağlanır.
- 2\.B sınıfı: Daha eski/daha az yetenekli tarayıcılar — yetenekli olmadığı bilinen tarayıcılar. Test edilir ve temel bilgilere ve hizmetlere tam erişim sağlayan daha basit bir deneyim sunulur.
- 3\.C sınıfı: Nadir/bilinmeyen tarayıcılar — test etmeyin, ancak uyumlu olduklarını varsayın. En azından savunma amaçlı kodlamamızın sağladığı yedeklemelerle birlikte çalışması gereken sitenin tamamını sunun.

Aşağıdaki bölümlerde, bu formatta bir destek grafiği oluşturacağız.

**Not:** Bu yaklaşımı ilk olarak Yahoo, **[kademeli tarayıcı](https://github.com/yui/yui3/wiki/Graded-Browser-Support)** desteği yaklaşımıyla popüler hale getirdi.

**Hedef kitlenizin en sık kullandığı tarayıcıları tahmin edin.**
Bu genellikle kullanıcı demografisine dayanarak mantıklı tahminler yapmayı içerir. Örneğin, kullanıcılarınızın Kuzey Amerika ve Batı Avrupa'da olduğunu varsayalım:

Hızlı bir çevrimiçi arama, Kuzey Amerika ve Batı Avrupa'daki çoğu insanın Windows veya Mac masaüstü/dizüstü bilgisayarlar kullandığını ve başlıca tarayıcıların Chrome, Firefox, Safari ve Edge olduğunu gösteriyor. Bu tarayıcılar düzenli olarak güncellendiği için, muhtemelen en son sürümlerini test etmek isteyeceksiniz. Bunların hepsi A sınıfına girmeli.

Bu demografik gruptaki çoğu kişi iOS veya Android telefon kullanıyor, bu nedenle iOS Safari'nin en son sürümlerini, eski Android varsayılan tarayıcısının son birkaç sürümünü ve iOS ve Android için Chrome ve Firefox'u test etmek isteyebilirsiniz. Duyarlı tasarımların çalıştığından emin olmak için bunları hem telefonda hem de tablette test etmeniz ideal olacaktır.

Opera Mini karmaşık JavaScript kodlarını çalıştırmada pek başarılı değil, bu yüzden onu da B notuna koymalıyız.

Dolayısıyla, test edeceğimiz tarayıcıları, kullanıcılarımızın kullanmasını beklediğimiz tarayıcılara göre seçtik. Bu da bize şu ana kadar aşağıdaki destek tablosunu veriyor:

- 1\.A sınıfı: Windows/Mac için Chrome ve Firefox, Mac için Safari, Windows için Edge, iPhone/iPad için iOS Safari, telefon/tablet için Android varsayılan tarayıcısı (son iki sürüm), telefon/tablet için Android Chrome ve Firefox (son iki sürüm).
- 2\.B sınıfı: Opera Mini
- 3\.C notu: mevcut değil
Hedef kitlenizin büyük çoğunluğu başka bir yerde bulunuyorsa, en yaygın kullanılan tarayıcılar ve işletim sistemleri yukarıdakilerden farklı olabilir.

**Not:** "Şirketimizin CEO'su Blackberry kullanıyor, bu yüzden bunun onda iyi görünmesine dikkat etmeliyiz" de dikkate alınması gereken bir husus olabilir.

**Tarayıcı istatistikleri**
Bazı web siteleri, belirli bir bölgede hangi tarayıcıların popüler olduğunu gösterir. Örneğin, **[Statcounter](https://gs.statcounter.com/)** Kuzey Amerika'daki trendler hakkında fikir verir.

**Analitik kullanımı**
Eğer bulabiliyorsanız, çok daha doğru bir veri kaynağı, insanların sitenizi hangi tarayıcılarla ziyaret ettiğini tam olarak gösteren **[Google Analytics](https://marketingplatform.google.com/about/analytics/)** gibi bir analiz uygulamasıdır . Elbette, bunun için zaten bir sitenizin olması gerekir, bu nedenle tamamen yeni siteler için uygun değildir.

**[Ayrıca Open Web Analytics](https://www.openwebanalytics.com/)** ve **[Matomo](https://matomo.org/)** gibi açık kaynaklı ve gizlilik odaklı analiz platformlarını da kullanmayı düşünebilirsiniz . Bu platformların kendi sunucunuzda barındırmanız bekleniyor.

**Google Analytics kurulumu**
- 1\.Öncelikle bir Google hesabına ihtiyacınız olacak. Bu hesabı kullanarak Google Analytics'e giriş yapın .
- 2\.**[Google Analytics](https://analytics.google.com/analytics/web/provision/#/provision)** (web) seçeneğini seçin ve Kaydol düğmesine tıklayın.
- 3\.Kayıt sayfasında web sitenizin/uygulamanızın bilgilerini girin. Kurulumu oldukça sezgiseldir; doğru girmeniz gereken en önemli alan web sitesi URL'sidir. Bu, sitenizin/uygulamanızın kök URL'si olmalıdır.
- 4\.Tüm bilgileri doldurduktan sonra "Takip Numarası Al" düğmesine basın, ardından açılan hizmet şartlarını kabul edin.
- 5\.Sonraki sayfada bazı kod parçacıkları ve diğer talimatlar yer almaktadır. Temel bir web sitesi için yapmanız gereken, Web sitesi izleme&lt;/body&gt; kod bloğunu kopyalayıp sitenizde Google Analytics kullanarak izlemek istediğiniz tüm farklı sayfalara yapıştırmaktır. Kod parçacıklarını kapanış etiketinizin altına veya uygulama kodunuzla karışmasını önleyecek uygun başka bir yere yerleştirebilirsiniz .
- 6\.Değişiklikleri geliştirme sunucusuna veya kodunuza ihtiyaç duyduğunuz başka bir yere yükleyin.

İşte bu kadar! Siteniz artık analiz verilerini raporlamaya hazır olmalı.

**Analitik verileri incelemek**
**[Şimdi Analytics web](https://analytics.google.com/analytics/web/provision/#/provision)** ana sayfasına geri dönebilir ve siteniz hakkında topladığınız verilere bakmaya başlayabilirsiniz (elbette bazı verilerin gerçekten toplanması için biraz zaman ayırmanız gerekecek).

Varsayılan olarak, raporlama sekmesini şu şekilde görmelisiniz:
![Test](./assets/png-20.png)


Google Analytics kullanarak inceleyebileceğiniz çok büyük miktarda veri var (farklı kategorilerde özelleştirilmiş raporlar vb.) ve bunların hepsini ele almaya vaktimiz yok. **[Analytics'e Başlangıç ​​kılavuzu,](https://support.google.com/analytics/answer/9304153)** yeni başlayanlar için raporlama (ve daha fazlası) konusunda bazı faydalı bilgiler sunuyor.

Soldaki menüden Kitle > Teknoloji > Tarayıcı ve İşletim Sistemi seçeneklerini belirleyerek kullanıcılarınızın hangi tarayıcıları ve işletim sistemlerini kullandığını görebilirsiniz .

**Not:** Google Analytics kullanırken yanıltıcı önyargılara dikkat etmeniz gerekir; örneğin, "Firefox mobil kullanıcımız yok" ifadesi, Firefox mobil desteğini kullanmamanıza yol açabilir. Ancak, site zaten Firefox mobilde bozuksa, Firefox mobil kullanıcınız da olmayacaktır.

**Diğer hususlar**
Erişilebilirliği A notu gerektiren bir test şartı olarak dahil etmelisiniz.

Ayrıca, duruma özgü ihtiyaçların da farkında olmalısınız. Örneğin, ürününüz internete erişimin birincil yolu olarak cep telefonlarının kullanıldığı bir pazarı hedefliyorsa, mobil tarayıcı desteğini önceliklendirmek isteyebilirsiniz.

**Son destek grafiği**
Dolayısıyla, nihai destek grafiğimiz şöyle görünecektir:

- 1\.A sınıfı: Windows/Mac için Chrome ve Firefox, Mac için Safari ve Edge (her birinin son iki sürümü), iPhone/iPad için iOS Safari, telefon/tabletlerde Android varsayılan tarayıcı (son iki sürümü), telefon ve tabletlerde Android için Chrome ve Firefox (son iki sürümü). Erişilebilirlik, yaygın testlerden geçmiştir.
- 2\.B sınıfı: Opera Mini.
- 3\.C sınıfı: Opera, diğer niş modern tarayıcılar.

**Neyi test edeceksiniz?**
Kod tabanınıza test edilmesi gereken yeni bir özellik eklediğinizde, teste başlamadan önce kabul edilmesi için karşılanması gereken test gereksinimlerinin bir listesini yazmalısınız. Bu gereksinimler görsel veya işlevsel olabilir; ikisi bir araya gelerek kullanılabilir bir web sitesi özelliği oluşturur.

Aşağıdaki örneği ele alalım:

![Test](./assets/ornek.png)

Bu özellik için test kriterleri şu şekilde yazılabilir:

A ve B notu:

- Soru işareti düğmesi, kullanıcının birincil kontrol mekanizmasıyla (fare, klavye ve dokunmatik ekran dahil) etkinleştirilebilmelidir.
- Düğmeye basıldığında bilgi kutusu görünür/kaybolur.
- Kaydırma panelindeki bilgi metni okunabilir olmalıdır.
- Ekran okuyucu kullanan görme engelli kullanıcılar metne erişebilmelidir.

A notu:

- Kaydırma paneli, görünürken/kaybolurken sorunsuz bir şekilde hareket etmelidir.

 Bu test kriterleri şu nedenlerle faydalıdır:

- Testleri gerçekleştirirken izlemeniz gereken bir dizi adım veriyorlar.
- Bunlar, kullanıcı gruplarının testleri gerçekleştirirken izlemesi gereken talimat setlerine kolayca dönüştürülebilir (örneğin, "düğmeyi önce fareyle, sonra klavyeyle etkinleştirmeyi deneyin…") 
- Ayrıca otomatik testler yazmak için de bir temel sağlayabilirler. Tam olarak neyi test etmek istediğinizi ve başarı koşullarının neler olduğunu biliyorsanız, bu tür testleri yazmak daha kolaydır.

**Bir test laboratuvarı kurmak**
Tarayıcı testlerini gerçekleştirmenin bir seçeneği de testleri kendiniz yapmaktır. Bunu yapmak için muhtemelen gerçek fiziksel cihazlar ve öykünülmüş ortamların (bir öykünme programı veya sanal makine kullanarak) bir kombinasyonunu kullanacaksınız.

*Fiziksel cihazlar*
Genellikle test etmek istediğiniz tarayıcıyı çalıştıran gerçek bir cihaza sahip olmak daha iyidir; bu, davranış ve genel kullanıcı deneyimi açısından en yüksek doğruluğu sağlar. Makul bir düşük seviyeli cihaz laboratuvarı için muhtemelen aşağıdaki gibi bir şeye ihtiyacınız olacaktır:

- Test etmeniz gereken tarayıcıların yüklü olduğu bir Mac bilgisayar; bunlar arasında Firefox, Chrome, Opera ve Safari yer alabilir.
- Test etmeniz gereken tarayıcıların yüklü olduğu bir Windows bilgisayar; bunlar arasında Edge (veya IE), Chrome, Firefox ve Opera bulunabilir.
- Test etmeniz gereken tarayıcının yüklü olduğu, daha yüksek özelliklere sahip bir Android telefon veya tablet (bu, Android için Chrome, Firefox ve Opera Mini'nin yanı sıra orijinal Android tarayıcısını da içerebilir).
- Test etmeniz gereken tarayıcıların yüklü olduğu, daha yüksek özelliklere sahip bir iOS telefon ve tablet; bunlar arasında iOS Safari ve Chrome, Firefox ve iOS için Opera Mini yer alabilir.

Eğer bulabilirseniz, aşağıdaki seçenekler de iyi alternatiflerdir:

- Linux sürümlerine özgü tarayıcı hatalarını test etmeniz gerekirse diye, bir Linux bilgisayarınızın olması faydalı olacaktır. Linux kullanıcıları genellikle Firefox, Opera ve Chrome kullanır. Eğer sadece bir bilgisayarınız varsa, ayrı bölümlerde Linux ve Windows çalıştıran çift önyüklemeli bir makine oluşturmayı düşünebilirsiniz.
- Düşük özellikli birkaç mobil cihaz, böylece animasyonlar gibi özelliklerin daha az güçlü işlemcilerdeki performansını test edebilirsiniz.

Ana çalışma bilgisayarınız, erişilebilirlik denetleme araçları, ekran okuyucular ve emülatörler/sanal makineler gibi belirli amaçlar için diğer araçları kurabileceğiniz bir yer de olabilir.

Bazı büyük şirketlerin, geliştiricilerin çok özel tarayıcı/cihaz kombinasyonlarındaki hataları bulmalarını sağlayan, çok çeşitli farklı cihazlara sahip cihaz laboratuvarları vardır. Daha küçük şirketler ve bireyler genellikle bu kadar gelişmiş bir laboratuvarı karşılayamazlar, bu nedenle daha küçük laboratuvarlar, emülatörler, sanal makineler ve ticari test uygulamalarıyla yetinmek zorundadırlar.

Aşağıda diğer seçeneklerin her birini ele alacağız.

**Not:** Erişilebilirliği de göz önünde bulundurmamız gerekiyor; erişilebilirlik testini kolaylaştırmak için bilgisayarınıza kurabileceğiniz bir dizi kullanışlı araç var, ancak bunları dersin ilerleyen bölümlerinde yer alan "Yaygın erişilebilirlik sorunlarıyla başa çıkma" makalesinde ele alacağız.

**Emülatörler**
Emülatörler temelde bilgisayarınızda çalışan ve bir cihazı veya belirli cihaz koşullarını taklit eden programlardır; bu sayede test etmek için belirli bir donanım/yazılım kombinasyonu bulmak zorunda kalmak yerine, bazı testlerinizi daha rahat bir şekilde gerçekleştirebilirsiniz.

Bir emülatör, bir cihaz durumunu test etmek kadar basit olabilir. Örneğin, duyarlı tasarım için genişlik/yükseklik medya sorgularınızın hızlı ve basit bir testini yapmak istiyorsanız, Firefox'un **[Duyarlı Tasarım Modunu kullanabilirsiniz. Safari'nin de benzer bir modu vardır; bu modu etkinleştirmek için](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)** Safari > Tercihler'e gidip Geliştirme menüsünü göster seçeneğini işaretleyip ardından Geliştirme > Duyarlı Tasarım Moduna gir seçeneğini seçmeniz gerekir . Chrome'da da benzer bir özellik bulunur: Cihaz modu.

Çoğu zaman ise bir tür emülatör yüklemeniz gerekecek. Test etmek isteyeceğiniz en yaygın cihazlar/tarayıcılar şunlardır:

- Android uygulamaları geliştirmek için kullanılan resmi **[Android Studio IDE'si, Google Chrome veya eski Android tarayıcısında web sitelerini test etmek için biraz ağır kalıyor, ancak sağlam bir](https://developer.android.com/studio?hl=tr)** **[emülatörle](https://developer.android.com/studio/run/emulator?hl=tr)** birlikte geliyor .
- **[Apple, Xcode](https://developer.apple.com/xcode/)** geliştirme ortamı üzerinde çalışan ve iPad/iPhone/Apple Watch/Apple TV'yi taklit eden **[Simulator](https://help.apple.com/simulator/mac/current/)** adlı bir uygulama sunuyor . Bu, yerel iOS Safari tarayıcısını da içeriyor. Ne yazık ki, bu uygulama yalnızca Mac'lerde çalışıyor.

Genellikle diğer mobil cihaz ortamları için de simülatörler bulabilirsiniz, örneğin:

- İsterseniz Opera Mini'yi tek başına çalıştırarak test edebilirsiniz.

**Not:** Birçok emülatör aslında sanal makine kullanımını gerektirir (aşağıya bakınız); bu durumda genellikle talimatlar verilir ve/veya sanal makine kullanımı emülatörün yükleyicisine dahil edilir.

**Sanal makineler**
Sanal makineler, masaüstü bilgisayarınızda çalışan ve her biri kendi sanal sabit sürücüsünde (genellikle ana makinenin sabit sürücüsünde bulunan tek bir büyük dosya ile temsil edilir) bölümlenmiş, tüm işletim sistemlerinin öykünmelerini çalıştırmanıza olanak tanıyan uygulamalardır. **[Parallels](https://www.parallels.com/)** , **[VMware](https://www.vmware.com/)** ve **[Virtual Box](https://www.virtualbox.org/wiki/Downloads)** gibi birçok popüler sanal makine uygulaması mevcuttur ; biz şahsen ücretsiz olduğu için Virtual Box'ı tercih ediyoruz.

**Not:** Sanal makine öykünmelerini çalıştırmak için çok fazla sabit disk alanına ihtiyacınız vardır; öykündüğünüz her işletim sistemi çok fazla bellek kullanabilir. Her kurulum için istediğiniz sabit disk alanını seçme eğilimindesiniz; muhtemelen 10 GB ile idare edebilirsiniz, ancak bazı kaynaklar işletim sisteminin güvenilir bir şekilde çalışması için 50 GB veya daha fazlasını önermektedir. Çoğu sanal makine uygulamasının sunduğu iyi bir seçenek, ihtiyaç duyulduğunda büyüyen ve küçülen dinamik olarak ayrılmış bir sabit disk oluşturmaktır.

Virtual Box'ı kullanmak için şunları yapmanız gerekir:

- 1\.Öykünmesini yapmak istediğiniz işletim sistemi için bir kurulum diski veya imaj dosyası (örneğin, ISO dosyası) edinin. Virtual Box bunları sağlayamaz; Windows işletim sistemleri gibi çoğu, ücretsiz olarak dağıtılamayan ticari ürünlerdir.
- 2\.İşletim sisteminize **[uygun yükleyiciyi indirin ve kurun.](https://www.virtualbox.org/wiki/Downloads)**
- 3\.Uygulamayı açın; aşağıdaki gibi bir ekranla karşılaşacaksınız:

![Test](./assets/png-1.png)

- 4\.Yeni bir sanal makine oluşturmak için sol üst köşedeki Yeni düğmesine basın.
- 5\.Talimatları izleyin ve aşağıdaki iletişim kutularını uygun şekilde doldurun. Şunları yapacaksınız:
- 1\.Yeni sanal makine için bir ad belirtin.
- 2\.Üzerine hangi işletim sistemini ve sürümünü kuracağınızı seçin.
- 3\.Ne kadar RAM ayrılması gerektiğini ayarlayın (2048 MB veya 2 GB gibi bir değer öneririz).
- 4\.Sanal bir sabit disk oluşturun ( " Şimdi bir sanal sabit disk oluştur" , "VDI (sanal disk görüntüsü)" ve "Dinamik olarak ayrılmış " seçeneklerini içeren üç iletişim kutusunda varsayılan seçenekleri seçin ).
- 5\.Sanal sabit disk için dosya konumunu ve boyutunu seçin (dosyaya mantıklı bir ad ve konum verin, boyut olarak ise yaklaşık 50 GB veya belirtmekte rahat olduğunuz herhangi bir miktarı belirtin).

Şimdi yeni sanal kutu, Virtual Box ana kullanıcı arayüzü penceresinin sol menüsünde görünmelidir. Bu noktada, açmak için çift tıklayabilirsiniz; sanal makine başlatılmaya başlayacaktır, ancak işletim sistemi (OS) henüz yüklenmemiş olacaktır. Bu noktada, iletişim kutusunu yükleyici imajına/diskine yönlendirmeniz gerekir ve tıpkı fiziksel bir makinede olduğu gibi işletim sistemini yüklemek için adımları izleyecektir.

![Test](./assets/png-2.png)

**Uyarı:** Bu aşamada sanal makineye kurmak istediğiniz işletim sistemi imajının elinizde olduğundan emin olmanız ve hemen kurmanız gerekmektedir. Bu aşamada işlemi iptal ederseniz, sanal makine kullanılamaz hale gelebilir ve silip yeniden oluşturmanız gerekebilir. Bu ölümcül bir durum değil, ancak can sıkıcıdır.

İşlem tamamlandıktan sonra, ana bilgisayarınızda bir pencere içinde işletim sistemi çalıştıran bir sanal makineye sahip olmalısınız.

![Test](./assets/png-3.png)

Bu sanal işletim sistemi kurulumunu tıpkı gerçek bir kurulum gibi ele almanız gerekiyor; örneğin, test etmek istediğiniz tarayıcıları kurmanın yanı sıra, virüslerden korumak için bir antivirüs programı da kurmalısınız.

Birden fazla sanal makineye sahip olmak, özellikle Windows IE/Edge testleri için çok faydalıdır; Windows'ta varsayılan tarayıcının birden fazla sürümünü yan yana kuramazsınız, bu nedenle gerektiği gibi farklı testleri yönetmek için bir sanal makine kütüphanesi oluşturmak isteyebilirsiniz, örneğin:

- Edge 14 ile Windows 10
- Edge 13 ile Windows 10

**Not:** Sanal makinelerin bir diğer iyi yanı da sanal disk imajlarının oldukça bağımsız olmasıdır. Bir ekipte çalışıyorsanız, tek bir sanal disk imajı oluşturabilir, ardından kopyalayabilir ve ekip üyelerine dağıtabilirsiniz. Ancak, Windows veya lisanslı bir ürün kullanıyorsanız, çalıştırdığınız diğer işletim sistemlerinin tüm kopyalarını çalıştırmak için gerekli lisanslara sahip olduğunuzdan emin olun.

**Otomasyon ve ticari uygulamalar**
Son bölümde de belirtildiği gibi, bir tür otomasyon sistemi kullanarak tarayıcı testlerinin zorluğunu büyük ölçüde azaltabilirsiniz. Kendi test otomasyon sisteminizi kurabilirsiniz ( en popüler uygulama **[Selenium'dur](https://www.selenium.dev/)** ), bu biraz kurulum gerektirir ancak işler yoluna girdiğinde çok tatmin edici olabilir.

İsterseniz testlerinize biraz para yatırmak üzere, kurulumla uğraşmanıza gerek kalmadan bu tür işleri sizin için yapan **[Sauce Labs](https://saucelabs.com/)** ve **[Browser Stack](https://www.browserstack.com/)** gibi ticari araçlar da mevcuttur .

Bir diğer alternatif ise **[Endtest](https://endtest.io/)** gibi kodsuz test otomasyon araçlarını kullanmaktır .

Bu modülün ilerleyen bölümlerinde bu tür araçların nasıl kullanılacağına bakacağız.

**Kullanıcı testi**
Devam etmeden önce, bu makaleyi kullanıcı testlerinden biraz bahsederek bitirelim; yeni işlevinizi test etmek için istekli bir kullanıcı grubunuz varsa bu iyi bir seçenek olabilir. Bunun istediğiniz kadar basit veya karmaşık olabileceğini unutmayın; kullanıcı grubunuz, test için harcayacak paranız olup olmadığına bağlı olarak bir grup arkadaş, bir grup iş arkadaşı veya ücretli ya da ücretsiz gönüllülerden oluşabilir.

Genellikle, kullanıcılarınızın yeni işlevselliği içeren sayfayı veya görünümü bir tür geliştirme sunucusunda incelemelerini sağlarsınız, böylece son siteyi veya değişikliği tamamlanana kadar canlıya almazsınız. Onlardan bazı adımları izlemelerini ve elde ettikleri sonuçları bildirmelerini istemelisiniz. Test etmeye çalıştığınız şeyle ilgili daha güvenilir sonuçlar elde etmek için bir dizi adım (bazen komut dosyası olarak da adlandırılır) sağlamak faydalıdır. Bunu yukarıdaki **["Ne test edeceksiniz?"](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Testing_strategies#)** bölümünde belirtmiştik - orada ayrıntılı olarak açıklanan test kriterlerini izlenecek adımlara dönüştürmek kolaydır. Örneğin, aşağıdaki adımlar görme yetisine sahip bir kullanıcı için işe yarayacaktır:

- Masaüstü bilgisayarınızda fareyi kullanarak soru işareti düğmesine birkaç kez tıklayın. Tarayıcı penceresini yenileyin.
- Masaüstü bilgisayarınızdaki klavyeyi kullanarak soru işareti düğmesini birkaç kez seçin ve etkinleştirin.
- Dokunmatik ekranlı cihazınızda soru işareti düğmesine birkaç kez dokunun.
- Düğmeye basıldığında bilgi kutusu görünmeli/kaybolmalı. Yukarıdaki üç durumda da bu gerçekleşiyor mu?
- Metin okunabilir mi?
- Bilgi kutusu görünürken/kaybolurken akıcı bir şekilde hareket ediyor mu?

Testleri çalıştırırken şunları yapmak da faydalı olabilir:

- Mümkünse, tarayıcı uzantıları ve benzeri şeyleri devre dışı bırakarak ayrı bir tarayıcı profili oluşturun ve testlerinizi bu profilde çalıştırın ( örneğin, Firefox profilleri oluşturmak ve kaldırmak için Profil Yöneticisini kullanma ve Chrome'u başkalarıyla paylaşma veya kişilikler ekleme bölümlerine bakın).
- Testleri çalıştırırken, mümkünse tarayıcınızın gizli mod özelliğini kullanın (örneğin, Firefox'ta Gizli Tarama , Chrome'da Anonim Mod ), böylece çerezler ve geçici dosyalar gibi şeyler kaydedilmez.

Bu adımlar, test ettiğiniz tarayıcının olabildiğince "saf" olmasını, yani test sonuçlarını etkileyebilecek hiçbir şeyin yüklü olmamasını sağlamak için tasarlanmıştır.

**Not:** Eğer donanımınız uygunsa, sitelerinizi düşük özellikli telefonlarda/diğer cihazlarda test etmek de faydalı bir düşük çözünürlüklü seçenektir. Siteler büyüdükçe ve daha fazla efekt içerdikçe, sitenin yavaşlama olasılığı artar, bu nedenle performansa daha fazla önem vermeniz gerekir. İşlevselliğinizi düşük özellikli bir cihazda çalışır hale getirmeye çalışmak, daha üst düzey cihazlarda da deneyimin iyi olma olasılığını artıracaktır.

**Not:** Bazı sunucu tarafı geliştirme ortamları, site değişikliklerini yalnızca belirli bir kullanıcı grubuna dağıtmak için kullanışlı mekanizmalar sunar; bu da ayrı bir geliştirme sunucusuna ihtiyaç duymadan bir özelliğin belirli bir kullanıcı grubu tarafından test edilmesini sağlar. Django Waffle Flags buna bir örnektir .

## Sık karşılaşılan HTML ve CSS sorunları

**Kaynak:** [MDN Web Docs — Common HTML and CSS problems](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS)

Şimdi, HTML ve CSS kodunda karşılaşacağınız yaygın tarayıcılar arası uyumluluk sorunlarına ve bu sorunların oluşmasını önlemek veya ortaya çıkan sorunları düzeltmek için kullanılabilecek araçlara özel olarak bakacağız. Bu, kod denetimi (linting), CSS ön eklerinin işlenmesi, sorunları tespit etmek için tarayıcı geliştirici araçlarının kullanılması, tarayıcılara destek eklemek için polyfill'lerin kullanılması, duyarlı tasarım sorunlarının ele alınması ve daha fazlasını içerir.

**HTML ve CSS ile ilgili sorun**
HTML ve CSS ile ilgili sorunlardan bazıları, her iki dilin de oldukça basit olmasından ve geliştiricilerin genellikle kodun iyi yazılmış, verimli ve sayfadaki özelliklerin amacını anlamsal olarak açıklayan bir şekilde olmasını sağlamak açısından bunları ciddiye almamalarından kaynaklanmaktadır. En kötü durumlarda, tüm web sayfası içeriği ve stili JavaScript kullanılarak oluşturulur; bu da sayfalarınızı erişilemez hale getirir ve performansını düşürür (DOM öğelerinin oluşturulması maliyetlidir). Diğer durumlarda, yeni ortaya çıkan özellikler tarayıcılar arasında tutarlı bir şekilde desteklenmez; bu da bazı özelliklerin ve stillerin bazı kullanıcılar için çalışmamasına neden olabilir. Duyarlı tasarım sorunları da yaygındır; masaüstü tarayıcıda iyi görünen bir site, içeriğin okunamayacak kadar küçük olması veya pahalı animasyonlar nedeniyle sitenin yavaş çalışması nedeniyle mobil cihazda korkunç bir deneyim sunabilir.

Şimdi HTML/CSS'den kaynaklanan tarayıcılar arası hataları nasıl azaltabileceğimizi inceleyelim.

**Öncelikle genel sorunları çözmek:**
**[Bu serinin ilk makalesinde ,](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery)** tarayıcılar arası uyumluluk sorunlarına odaklanmadan önce, kodunuzun genel olarak çalıştığından emin olmak için masaüstü/mobil cihazlarda birkaç modern tarayıcıda test yapmanın iyi bir strateji olduğunu söylemiştik .

**[HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)** ve **[CSS hata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)** ayıklama makalelerimizde , HTML/CSS hata ayıklama konusunda gerçekten temel bazı bilgiler verdik; eğer temel bilgilere aşina değilseniz, devam etmeden önce bu makaleleri mutlaka incelemelisiniz.

Özetle, HTML ve CSS kodunuzun düzgün biçimlendirilmiş olup olmadığını ve herhangi bir sözdizimi hatası içermediğini kontrol etmekten ibarettir.

**Not:** CSS ve HTML ile ilgili yaygın bir sorun, farklı CSS kurallarının birbiriyle çakışmaya başlamasıdır. Bu, özellikle üçüncü taraf kod kullanıyorsanız sorunlu olabilir. Örneğin, bir CSS çerçevesi kullanabilir ve kullandığı sınıf adlarından birinin, farklı bir amaç için zaten kullandığınız bir adla çakıştığını fark edebilirsiniz. Veya bir tür üçüncü taraf API'si (örneğin reklam banner'ları oluşturma) tarafından oluşturulan HTML'nin, farklı bir amaç için zaten kullandığınız bir sınıf adı veya kimlik içerdiğini fark edebilirsiniz. Bunun olmaması için, öncelikle kullandığınız araçları araştırmanız ve kodunuzu bunlara göre tasarlamanız gerekir. Ayrıca CSS'yi "adlandırmak" da faydalıdır; örneğin, bir widget'ınız varsa, ayrı bir sınıfa sahip olduğundan emin olun ve ardından widget içindeki öğeleri seçen seçicileri bu sınıfla başlatın, böylece çakışma olasılığı azalır. Örneğin .audio-player ul a...

**Doğrulama**
HTML için doğrulama, tüm etiketlerinizin düzgün bir şekilde kapatıldığından ve iç içe yerleştirildiğinden, bir doctype kullandığınızdan ve etiketleri doğru amaçları için kullandığınızdan emin olmayı içerir. İyi bir strateji, kodunuzu düzenli olarak doğrulamaktır. Bunu yapabilen bir hizmet , kodunuzu işaret etmenize ve bir hata listesi döndürmenize olanak tanıyan W3C **[İşaretleme Doğrulama Hizmeti'dir :](https://validator.w3.org/)**


![Test](./assets/png-4.png)

CSS'de de durum benzerdir; özellik adlarının doğru yazıldığından, özellik değerlerinin doğru yazıldığından ve kullanıldıkları özellikler için geçerli olduğundan, eksik süslü parantez olmadığından vb. emin olmanız gerekir. Bu amaçla W3C'nin de bir **[CSS Doğrulayıcısı mevcuttur.](https://jigsaw.w3.org/css-validator/)**

**Linterler**
Bir diğer iyi seçenek ise, yalnızca hataları belirtmekle kalmayıp, CSS'inizdeki kötü uygulamalar ve diğer noktalar hakkında da uyarılar verebilen bir Linter uygulamasıdır. Linter'lar genellikle hata/uyarı raporlamasında daha katı veya daha esnek olacak şekilde özelleştirilebilir.

**[HTML, CSS ve JavaScript için Dirty Markup](https://www.10bestdesign.com/dirtymarkup/)** gibi birçok çevrimiçi linter uygulaması mevcuttur . Bunlar, kodunuzu bir pencereye yapıştırmanıza olanak tanır ve hatalar çarpı işaretleriyle belirtilir; bu işaretlerin üzerine geldiğinizde sorunun ne olduğunu bildiren bir hata mesajı alırsınız. Dirty Markup ayrıca Temizle düğmesini kullanarak işaretlemenizde düzeltmeler yapmanıza da olanak tanır.

![Test](./assets/png-5.png)

Ancak, kodunuzun geçerliliğini kontrol etmek için onu birkaç kez kopyalayıp bir web sayfasına yapıştırmak pek kullanışlı değil. Gerçekten istediğiniz şey, minimum zahmetle standart iş akışınıza uyacak bir kod denetleyicisidir.

Birçok kod düzenleyicisinde linter eklentileri bulunur. Örneğin, şunlara bakın:

- Sublime Text için **[SublimeLinter](https://www.sublimelinter.com/en/master/)**
- **[Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)**
- **[VS Code linter'ları](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)**

**Tarayıcı geliştirici araçları**
Çoğu tarayıcıda yerleşik olarak bulunan geliştirici araçları, özellikle CSS ile ilgili hataları bulmak için kullanışlı araçlar da içerir.

**Not:** HTML hataları, tarayıcı hatalı biçimlendirilmiş işaretlemeyi otomatik olarak düzeltmeye çalışacağından, geliştirici araçlarında kolayca görünmeyebilir; HTML hatalarını bulmanın en iyi yolu W3C doğrulayıcısıdır.

Örneğin, Firefox'ta CSS denetleyicisi, uygulanmamış CSS bildirimlerini üzeri çizili ve uyarı üçgeniyle gösterir. Uyarı üçgeninin üzerine gelindiğinde açıklayıcı bir hata mesajı görüntülenir:

![Test](./assets/png-6.png)

Diğer tarayıcı geliştirici araçları da benzer özelliklere sahiptir.

**Tarayıcılar arası yaygın sorunlar**
Şimdi de en sık karşılaşılan tarayıcılar arası HTML ve CSS sorunlarından bazılarına bakalım. Ele alacağımız başlıca alanlar, modern özelliklere destek eksikliği ve düzen sorunlarıdır.

*Modern özellikleri desteklemeyen tarayıcılar*
Bu, özellikle eski tarayıcıları desteklemeniz gerektiğinde veya bazı tarayıcılarda uygulanan ancak henüz hepsinde uygulanmamış özellikleri kullandığınızda sık karşılaşılan bir sorundur. Genel olarak, çoğu temel HTML ve CSS işlevi (temel HTML öğeleri, CSS temel renkleri ve metin biçimlendirmesi gibi) desteklemek istediğiniz tüm tarayıcılarda çalışır; daha yeni HTML, CSS ve API'leri kullanmaya başladığınızda daha fazla sorun ortaya çıkar. MDN, belgelenen her özellik için tarayıcı uyumluluk verilerini görüntüler; örneğin, **[sözde sınıf için tarayıcı destek tablosuna:has() bakın .](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:has#browser_compatibility)**

Evrensel olarak desteklenmeyen teknolojileri belirledikten sonra, bu teknolojilerin hangi tarayıcılarda desteklendiğini ve hangi ilgili tekniklerin yararlı olduğunu araştırmanız iyi bir fikirdir.

**HTML yedekleme davranışı**
Bazı sorunlar, HTML/CSS'in doğal çalışma şeklinden yararlanılarak çözülebilir.

Tanınmayan HTML öğeleri, tarayıcı tarafından anonim satır içi öğeler (anlamsal değeri olmayan, &lt;p&gt; &lt;span&gt;öğelerine benzer satır içi öğeler) olarak ele alınır. Bunlara yine de adlarıyla başvurabilir ve örneğin CSS ile stil verebilirsiniz; sadece istediğiniz gibi davranmalarını sağlamanız gerekir. Bunları, gerekirse displayözelliğini &lt;title&gt; yerine başka bir değere ayarlamak da dahil olmak üzere, diğer herhangi bir öğe gibi stillendirebilirsiniz.inline

HTML &lt;video&gt;, &lt;audio&gt;, &lt;picture&gt;, &lt;object&gt;, ve gibi daha karmaşık öğeler &lt;canvas&gt;(ve bunların dışında diğer özellikler), bağlantı verilen kaynakların desteklenmemesi durumunda yedek içerik eklemek için doğal mekanizmalara sahiptir. Açılış ve kapanış etiketleri arasına yedek içerik ekleyebilirsiniz ve desteklemeyen tarayıcılar dıştaki öğeyi etkili bir şekilde yok sayarak iç içe yerleştirilmiş içeriği çalıştıracaktır.

Örneğin:
```HTML 
<video id="video" controls preload="metadata" poster="img/poster.jpg">
  <source
    src="video/tears-of-steel-battle-clip-medium.webm"
    type="video/webm" />
  <!-- Offer download -->
  <p>
    Your browser does not support WebM video; here is a link to
    <a href="video/tears-of-steel-battle-clip-medium.mp4"
      >view the video directly</a
    >
  </p>
</video>
```

Bu örnek, HTML video oynatıcısı çalışmasa bile videoyu indirmenize olanak tanıyan basit bir bağlantı içeriyor; böylece kullanıcı en azından videoya erişebiliyor.

Bir diğer örnek de form öğeleridir. &lt;input&gt;Zaman, tarih, renk, sayı vb. gibi belirli bilgileri formlara girmek için yeni türler tanıtıldığında, bir tarayıcı yeni özelliği desteklemiyorsa, tarayıcı varsayılan değeri kullanır type="text". Özellikle mobil platformlarda, kullanıcı deneyimi için veri girişinin sorunsuz bir şekilde yapılması çok önemli olduğundan, çok kullanışlı olan giriş türleri eklendi. Platformlar, tarih girmek için takvim widget'ı gibi giriş türüne bağlı olarak farklı kullanıcı arayüzü widget'ları sağlar. Bir tarayıcı bir giriş türünü desteklemiyorsa, kullanıcı yine de gerekli verileri girebilir.

Aşağıdaki örnekte tarih ve saat girişleri gösterilmektedir:

```HTML
<form>
  <div>
    <label for="date">Enter a date:</label>
    <input id="date" type="date" />
  </div>
  <div>
    <label for="time">Enter a time:</label>
    <input id="time" type="time" />
  </div>
</form>
```
Bu kodun çıktısı aşağıdaki gibidir:

![Test](./assets/PNG-7.png)


Oynat düğmesine basarak örneği MDN Playground'da açabilir ve kaynak kodunu düzenleyebilirsiniz.

Örneği incelerseniz, veri girişi yapmaya çalışırken kullanıcı arayüzü özelliklerinin nasıl çalıştığını göreceksiniz. Dinamik klavyeli cihazlarda, türe özgü tuş takımları görüntülenecektir. Desteklemeyen bir tarayıcıda ise girişler varsayılan olarak normal metin girişlerine dönecektir; bu da kullanıcının yine de doğru bilgileri girebileceği anlamına gelir.

**CSS yedek davranışı**
CSS, tartışmasız bir şekilde HTML'den daha iyi bir yedekleme mekanizmasına sahip. Bir tarayıcı anlamadığı bir bildirim veya kural ile karşılaştığında, onu uygulamadan veya hata vermeden tamamen atlar. Bu, böyle bir hata üretim koduna sızarsa sizin ve kullanıcılarınız için sinir bozucu olabilir, ancak en azından tüm sitenin tek bir hata yüzünden çökmesini önler ve akıllıca kullanıldığında avantajınıza çevirebilirsiniz.

Şimdi bir örneğe bakalım: Çeşitli CSS özellikleriyle sağlanan bazı stillendirmelere sahip, CSS ile biçimlendirilmiş basit bir kutu.

![Test](./assets/PNG-8.png)

Oynat düğmesine basarak örneği MDN Playground'da açabilir ve kaynak kodla etkileşim kurabilirsiniz.

Butonun üzerinde bir dizi bildirim uygulanmıştır, ancak bizi en çok ilgilendirenler şunlardır:

```CSS
button {
  /* … */

  background-color: red;
  background-color: rgb(255 0 0 / 90%);
  box-shadow:
    inset 3px 3px 3px rgb(255 255 255 / 40%),
    inset -3px -3px 3px rgb(0 0 0 / 40%);
}

button:hover,
button:focus {
  background-color: rgb(255 0 0 / 50%);
}

button:active {
  box-shadow:
    inset 3px 3px 3px rgb(0 0 0 / 40%),
    inset -3px -3px 3px rgb(255 255 255 / 40%);
}
```
Burada , kullanıcının düğmenin etkileşimli olduğunu anlaması için üzerine gelindiğinde opaklığı değişen bir RGB renklendirmesi ve düğmeye biraz doku ve derinlik kazandırmak için yarı saydam iç gölgeler sağlıyoruz . Tamamen destekleniyor olsa da, RGB renkleri ve kutu gölgeleri her zaman mevcut değildi; IE9 ile başladı. RGB renklerini desteklemeyen tarayıcılar bu bildirimi görmezden gelirdi, yani eski tarayıcılarda arka plan hiç görünmezdi, bu da metnin okunamaz olmasına neden olurdu, hiç iyi olmazdı! background-colorbox-shadow


![Test](./assets/png-9.png)

background-colorBu sorunu çözmek için, yalnızca renk anahtar kelimesini belirten bir başlangıç ​​bildirimi ekledik red; bu, çok eski tarayıcılarda bile destekleniyor ve modern, gelişmiş özellikler çalışmadığında bir yedek görevi görüyor. Olan şu ki, bu sayfayı ziyaret eden bir tarayıcı önce ilk background-colordeğeri uyguluyor; ikinci bildirime ulaştığında background-color, RGB renklerini destekliyorsa ilk değeri bu değerle geçersiz kılıyor. Desteklemiyorsa, tüm bildirimi görmezden gelip devam ediyor.

**Not:** Medya sorguları ve bloklar @font-facegibi diğer CSS özellikleri için de aynı durum geçerlidir @supports; desteklenmiyorlarsa, tarayıcı bunları görmezden gelir.

**Seçici desteği**
Elbette, stil vermek istediğiniz öğeyi seçmek için doğru **[seçicileri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)** kullanmazsanız hiçbir CSS özelliği uygulanmayacaktır !

Virgülle ayrılmış bir seçici listesinde, bir seçiciyi yanlış yazarsanız, hiçbir öğeyle eşleşmeyebilir. Ancak, bir seçici geçersizse, tüm stil bloğuyla birlikte tüm seçici listesi de yok sayılır. Bu nedenle, yalnızca `&lt;style&gt;` gibi **[hoşgörülü:](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list)**-moz- bir seçici listesine önekli bir sözde sınıf veya sözde öğe ekleyin . Firefox dışındaki tüm tarayıcılar tüm bloğu yok sayacağından, `&lt;style&gt;` veya hoşgörülü bir seçici listesi dışında, virgülle ayrılmış bir seçici grubuna önekli bir sözde sınıf veya sözde öğe eklemeyin . `&lt;style&gt;` ve `&lt;style&gt;` dahil olmak üzere diğer seçici listelerinde parametre olarak geçirilebileceğini unutmayın .:where(::-moz-thumb):-moz-:is():where():is():where():has():not()

Tarayıcınızın geliştirici araçlarını kullanarak stil vermeye çalıştığınız öğeyi incelemenin ve ardından DOM denetleyicilerinin sağladığı DOM ağacı izleme yoluna bakarak seçicinizin buna kıyasla mantıklı olup olmadığını kontrol etmenin faydalı olduğunu düşünüyoruz.

Örneğin, Firefox geliştirici araçlarında, DOM denetleyicisinin alt kısmında şu tür bir çıktı görürsünüz:

![Test](./assets/png-10.png)

Örneğin, bu seçiciyi kullanmaya çalışırsanız, istediğiniz gibi giriş öğesini seçmediğini görebilirsiniz:

```CSS
form > #date {
  /* … */
}
```

( dateForm girişi, &lt;form&gt; öğesinin doğrudan bir alt öğesi değildir &lt;form&gt;; alt öğe seçici yerine genel bir alt öğe seçici kullanmanız daha iyi olur.)

**CSS öneklerinin işlenmesi**
Bir diğer sorun grubu da CSS önekleriyle ortaya çıkıyor; bunlar, tarayıcı üreticilerinin bir CSS (veya JavaScript) özelliğinin kendi sürümlerini, teknoloji deneysel aşamadayken uygulamalarına olanak sağlamak için kullanılan bir mekanizmadır. Böylece, diğer tarayıcıların uygulamalarıyla veya son öneksiz uygulamalarla çakışmadan, bu özelliği deneyip doğru şekilde kullanabilirler.

Örneğin, Firefox `&lt;pre&gt;` kullanırken -moz-, Chrome/Edge/Opera/Safari `&lt;pre&gt;` kullanır -webkit-. Eski kodlarda karşılaşabileceğiniz ve güvenle kaldırılabilecek diğer önekler arasında -ms-, Internet Explorer ve Edge'in ilk sürümleri tarafından kullanılan `&lt;pre&gt;` ve -oOpera'nın orijinal sürümlerinde kullanılan `&lt;pre&gt;` bulunur.

Önekli özelliklerin üretim ortamında kullanılması asla amaçlanmamıştı; bunlar uyarı yapılmadan değiştirilebilir veya kaldırılabilir, bunları gerektiren eski tarayıcı sürümlerinde performans sorunlarına neden olabilir ve tarayıcılar arası uyumluluk sorunlarına yol açmıştır. Bu, özellikle geliştiricilerin yalnızca -webkit-bir özelliğin belirli bir sürümünü kullanmaya karar vermesi durumunda sorun teşkil eder; bu da sitenin diğer tarayıcılarda çalışmayacağı anlamına gelir. Bu durum o kadar sık ​​yaşandı ki, diğer tarayıcı üreticileri de -webkit-birçok CSS özelliğinin önekli sürümlerini uygulamaya koydu. Tarayıcılar hala bazı önekli özellik adlarını, özellik değerlerini ve sözde sınıfları desteklese de, deneysel özellikler artık web geliştiricilerinin geliştirme sırasında test edebilmeleri için bayrakların arkasına gizlenmiştir.

Önek kullanıyorsanız, gerçekten gerekli olduğundan emin olun; özelliğin, önekli özellikler arasında kalan birkaç özellikten biri olduğundan emin olun. Hangi tarayıcıların önek gerektirdiğini MDN referans sayfalarından ve **[caniuse.com](https://caniuse.com/)** gibi sitelerden kontrol edebilirsiniz . Emin değilseniz, doğrudan tarayıcılarda test yaparak da öğrenebilirsiniz. Önekli stil bildiriminden sonra standart öneksiz sürümü ekleyin; desteklenmiyorsa göz ardı edilecek, destekleniyorsa kullanılacaktır.

```CSS
.masked {
  -webkit-mask-image: url("MDN.svg");
  mask-image: url("MDN.svg");
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Şu basit örneği deneyin:

- 1\.Bu sayfayı veya belirgin bir başlığa ya da başka bir blok düzeyinde öğeye sahip başka bir siteyi kullanın.

- 2\.İlgili öğeye sağ/Cmd + tıklayın ve İncele/Öğeyi incele (veya tarayıcınızdaki seçenek neyse) seçeneğini seçin; bu, tarayıcınızda geliştirici araçlarını açacak ve öğe DOM denetleyicisinde vurgulanacaktır.

- 3\.Bu öğeyi seçmek için kullanabileceğiniz bir özellik arayın. Örneğin, bu yazıyı yazarken, MDN'deki bu sayfada kimliği olan bir logo bulunmaktadır mdn-docs-logo.

- 4\.Bu öğeye ait referansı bir değişkende saklayın, örneğin:
```JS
const test = document.getElementById("mdn-docs-logo");
```

- 5\.Şimdi, o öğede ilgilendiğiniz CSS özelliğine yeni bir değer atamayı deneyin; bunu öğenin **[style özelliğini kullanarak yapabilirsiniz, örneğin JavaScript konsoluna şunları yazmayı deneyin:](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)**
```JS
test.style.transform = "rotate(90deg)";
```

İkinci noktadan sonra özellik adını yazmaya başladığınızda (JavaScript'te CSS özellik adlarının büyük harfle başlayan küçük harfle başlayan camel case , kebab case değil ) JavaScript konsolu, tarayıcıda mevcut olan ve şimdiye kadar yazdıklarınızla eşleşen özelliklerin adlarını otomatik olarak tamamlamaya başlayacaktır. Bu, o tarayıcıda hangi özelliklerin uygulandığını bulmak için kullanışlıdır.

Modern özellikler eklemeniz gerekiyorsa, @supports yerel özellik algılama testlerini uygulamanıza olanak tanıyan `&lt;pre&gt;` yöntemini kullanarak özellik desteğini test edin ve önekli veya yeni özelliği `&lt;pre&gt;` @supports bloğunun içine yerleştirin.

**Duyarlı tasarım sorunları**
Duyarlı tasarım, farklı cihaz form faktörlerine (örneğin, farklı ekran genişlikleri, yönlendirmeler (dikey veya yatay) veya çözünürlükler) uyacak şekilde değişen web düzenleri oluşturma uygulamasıdır. Örneğin, bir masaüstü düzeni mobil cihazda görüntülendiğinde berbat görünecektir, bu nedenle medya sorguları kullanarak uygun bir mobil düzen sağlamanız ve görünüm alanı (viewport ) kullanılarak doğru şekilde uygulandığından emin olmanız gerekir .

Çözünürlük de büyük bir sorun; örneğin, mobil cihazların masaüstü bilgisayarlara göre büyük ve ağır görüntülere daha az ihtiyaç duyması ve daha yavaş internet bağlantılarına ve hatta bant genişliğinin boşa harcanmasını daha büyük bir sorun haline getiren pahalı veri planlarına sahip olma olasılıkları daha yüksektir. Ek olarak, farklı cihazlar farklı çözünürlüklere sahip olabilir, bu da daha küçük görüntülerin pikselli görünmesine neden olabilir. Medya sorgularından, öğenin ve özniteliklerini içeren daha karmaşık duyarlı görüntü tekniklerine kadar bu tür sorunların üstesinden gelmenizi sağlayan bir dizi teknik vardır .&lt;picture&gt;&lt;img&gt;srcset sizes

**Yardım bulmak**
HTML ve CSS ile karşılaşacağınız birçok başka sorun da var; bu nedenle internette nasıl cevap bulacağınızı bilmek son derece değerli.

Destek bilgisi için en iyi kaynaklar arasında Mozilla Geliştirici Ağı (şu anda bulunduğunuz yer!), **[stackoverflow.com](https://stackoverflow.com/questions)** ve **[caniuse.com](https://caniuse.com/)** yer almaktadır .

Mozilla Geliştirici Ağı'nı (MDN) kullanmak için çoğu kişi, bilgi bulmak istedikleri teknolojiye "mdn" terimini ekleyerek bir arama motoru araması yapar; örneğin, "mdn HTML video". MDN, çeşitli faydalı içerik türleri içerir:

- İstemci tarafı web teknolojileri için tarayıcı desteği bilgilerini içeren referans materyali, örneğin &lt;video&gt; referans sayfası .
- Diğer destekleyici referans materyalleri, örneğin web'deki medya türleri ve formatlarına ilişkin kılavuzumuz ,
- Örneğin, tarayıcılar arası uyumlu video oynatıcı oluşturma gibi belirli sorunları çözen faydalı eğitimler .

caniuse.com, destek bilgileri ve birkaç faydalı harici kaynak bağlantısı sunmaktadır.

Stackoverflow.com (SO), sorular sorabileceğiniz, diğer geliştiricilerin çözümlerini paylaşabileceği, önceki gönderilere bakabileceğiniz ve diğer geliştiricilere yardımcı olabileceğiniz bir forum sitesidir. Yeni bir soru göndermeden önce sorunuzun cevabının daha önce olup olmadığını kontrol etmeniz önerilir. Örneğin, SO'da "HTML iletişim kutusunda otomatik odaklanmayı devre dışı bırakma" diye arama yaptık ve çok kısa sürede **[" HTML özniteliklerini kullanarak showModal otomatik odaklanmasını devre dışı bırakma " cevabını bulduk .](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes)**

Bunun dışında, sorununuzun cevabını bulmak için favori arama motorunuzda arama yapmayı deneyin. Eğer hata mesajları alıyorsanız, belirli hata mesajlarını aramak genellikle faydalıdır; diğer geliştiricilerin de sizinle aynı sorunları yaşamış olma olasılığı yüksektir.

## Özellik tespiti

**Kaynak:** [MDN Web Docs — Feature detection](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection)

Özellik tespiti, bir tarayıcının belirli bir kod bloğunu destekleyip desteklemediğini belirlemeyi ve destekleyip desteklemediğine bağlı olarak farklı kodlar çalıştırmayı içerir; böylece tarayıcı, bazı tarayıcılarda çökme/hata verme yerine her zaman çalışan bir deneyim sağlayabilir. Bu makale, kendi basit özellik tespitinizi nasıl yazacağınızı, uygulamayı hızlandırmak için bir kütüphaneyi nasıl kullanacağınızı ve özellik tespiti için yerel özellikleri ayrıntılı olarak açıklamaktadır @supports.

**Özellik tespiti kavramı**
Özellik algılamanın ardındaki fikir, bir özelliğin mevcut tarayıcıda desteklenip desteklenmediğini belirlemek için bir test çalıştırmak ve ardından hem özelliği destekleyen hem de desteklemeyen tarayıcılarda kabul edilebilir bir deneyim sağlamak için koşullu olarak kod çalıştırmaktır. Bunu yapmazsanız , kodunuzda kullandığınız özellikleri desteklemeyen tarayıcılar sitelerinizi düzgün şekilde görüntülemeyebilir veya tamamen başarısız olabilir ve bu da kötü bir kullanıcı deneyimi yaratır.

**[JavaScript hata ayıklama ve hata işleme](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection)**makalemizde değindiğimiz örneği özetleyelim ve inceleyelim : **[Coğrafi Konum API'si](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)** (web tarayıcısının çalıştığı cihaz için kullanılabilir konum verilerini sunar), kullanımının ana giriş noktasına, geolocation global **[Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)** nesnesinde bulunan bir özellik sahiptir. Bu nedenle, tarayıcının coğrafi konum özelliğini destekleyip desteklemediğini aşağıdaki gibi bir şey kullanarak tespit edebilirsiniz:

```JS
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Devam etmeden önce, öncelikle bir şeyi belirtmek isteriz: Özellik algılamayı tarayıcı koklama (hangi tarayıcının siteye eriştiğini tespit etme) ile karıştırmayın; bu, her ne pahasına olursa olsun engellenmesi gereken berbat bir uygulamadır. Daha fazla bilgi için **[Kullanıcı aracısı dizesi (UA koklama) kullanarak tarayıcı algılama bölümüne bakın .](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)**

**Kendi özellik algılama testlerinizi yazmak**
Bu bölümde, hem CSS hem de JavaScript kullanarak kendi özellik algılama testlerinizi nasıl uygulayacağınızı inceleyeceğiz.

*CSS*
JavaScript'te **[element.style.property'nin](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)** (örneğin, `&lt;style&gt; `) varlığını test ederek CSS özelliklerine yönelik testler yazabilirsiniz .paragraph.style.rotate

Klasik bir örnek olarak , bir tarayıcıda **[alt ızgara](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Subgrid)** desteğini test edebiliriz ; subgridalt ızgara değeri için destek sağlayan tarayıcılar grid-template-columnsiçin grid-template-rowsdüzenimizde alt ızgara kullanabiliriz. Destek sağlamayan tarayıcılar için ise, sorunsuz çalışan ancak o kadar şık görünmeyen normal ızgarayı kullanabiliriz.

Bunu örnek alarak, değer destekleniyorsa alt ızgara stil sayfası, desteklenmiyorsa normal ızgara stil sayfası ekleyebiliriz. Bunu yapmak için, HTML dosyamızın &lt;head&gt; bölümüne iki stil sayfası ekleyebiliriz: biri tüm stillendirme için, diğeri ise alt ızgara desteklenmiyorsa varsayılan düzeni uygulayan bir stil sayfası.

```HTML
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Burada, basic-styling.cssher tarayıcıya vermek istediğimiz tüm stillendirme işlemleri yapılır. Ayrıca , tarayıcıların destek seviyelerine bağlı olarak seçici bir şekilde uygulamak istediğimiz CSS'i içeren iki ek CSS dosyamız daha var: `&lt;CSS&gt;` grid-layout.cssve `&lt;CSS&gt;`.subgrid-layout.css

Alt ızgara değerinin desteğini test etmek için JavaScript kullanıyoruz, ardından hreftarayıcı desteğine bağlı olarak koşullu stil sayfamızı güncelliyoruz.

&lt;script&gt;&lt;/script&gt;Belgemize aşağıdaki JavaScript koduyla doldurulmuş bir bölüm ekleyebiliriz .

```JS
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

Koşullu ifademizde, özelliğin belirtilen değeri grid-template-columns destekleyip desteklemediğini kontrol etmek için `.` kullanıyoruz .subgridCSS.supports()

@destekler
CSS'in yerleşik bir özellik algılama mekanizması vardır: ` @` kuralı. Bu, medya sorgularına @supports benzer şekilde çalışır, ancak çözünürlük, ekran genişliği veya en boy oranı gibi bir medya özelliğine bağlı olarak seçici bir şekilde CSS uygulamak yerine , bir CSS özelliğinin desteklenip desteklenmediğine bağlı olarak seçici bir şekilde CSS uygular .CSS.supports()

Örneğin, önceki örneğimizi şu şekilde yeniden yazabiliriz @supports:
```CSS
@supports (grid-template-columns: subgrid) {
  main {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(4, minmax(100px, auto));
  }

  .item {
    display: grid;
    grid-column: 2 / 7;
    grid-row: 2 / 4;
    grid-template-columns: subgrid;
    grid-template-rows: repeat(3, 80px);
  }

  .subitem {
    grid-column: 3 / 6;
    grid-row: 1 / 3;
  }
}
```
Bu `@` kural bloğu, CSS kuralını yalnızca geçerli tarayıcı grid-template-columns: subgrid;bildirimi destekliyorsa uygular. Değer içeren bir koşulun çalışması için, eksiksiz bir bildirim (yalnızca özellik adı değil) eklemeniz ve sonunda noktalı virgül eklememeniz gerekir.

@supportsAyrıca AND, OR, ve NOT mantığı da mevcuttur; diğer blok, alt ızgara seçeneği mevcut değilse normal ızgara düzenini uygular:

```CSS
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Bu, önceki örneğe göre daha kullanışlıdır; tüm özellik tespitini CSS'de yapabiliriz, JavaScript'e gerek yoktur ve tüm mantığı tek bir CSS dosyasında halledebiliriz, böylece HTTP isteklerini azaltabiliriz. Bu nedenle, CSS özelliklerinin tarayıcı desteğini belirlemenin tercih edilen yöntemidir.

**JavaScript**
Daha önce JavaScript özellik algılama testine dair bir örnek görmüştük. Genellikle bu tür testler birkaç yaygın yöntemden biriyle yapılır.

Tespit edilebilir özellikler için yaygın kalıplar şunlardır:

Bir nesnenin üyeleri
Belirli bir yöntemin veya özelliğin (genellikle API'yi veya tespit ettiğiniz diğer özelliği kullanmaya giriş noktası) üst öğesinde mevcut olup olmadığını kontrol edin Object.

Önceki örneğimizde, nesnenin bir üyesini test ederek **[coğrafi konum](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)** desteğini tespit etmek için bu kalıbı kullanmıştık :navigator geolocation

```JS
if ("geolocation" in navigator) {
  // Access navigator.geolocation APIs
}
```

Bir elementin özellikleri
Bellekte bir öğe oluşturun Document.createElement() ve ardından bu öğede bir özelliğin olup olmadığını kontrol edin.

Bu örnek, **[Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)** desteğini tespit etmenin bir yolunu göstermektedir :

```JS
function supportsCanvas() {
  return !!document.createElement("canvas").getContext;
}

if (supportsCanvas()) {
  // Create and draw on canvas elements
}
```

**Not:**NOT Yukarıdaki örnekteki çift sayı ( ) dönüş değerinin sonuçları çarpıtabilecek Doğru / Yanlış!! değer yerine "uygun" bir boolean değer olmasını sağlamanın bir yoludur .

Bir öğe üzerindeki bir metodun belirli dönüş değerleri
Bellekte bir öğe oluşturun Document.createElement() ve ardından üzerinde bir metodun olup olmadığını kontrol edin. Eğer varsa, hangi değeri döndürdüğünü kontrol edin.

Bir öğe tarafından atanan özellik değerinin korunması
Bellekte bir öğe oluşturmak için `&lt;element&gt;` kullanın Document.createElement(), bir özelliğe belirli bir değer atayın ve ardından değerin korunup korunmadığını kontrol edin.

Bazı özelliklerin tespit edilemediğini de unutmayın. Bu durumlarda, polyfill kullanmak gibi farklı bir yaklaşım kullanmanız gerekecektir .

*eşleşmeMedya*
Bu noktada JavaScript özelliğinden de bahsetmek istedik Window.matchMedia. Bu özellik, JavaScript içinde medya sorgusu testleri çalıştırmanıza olanak tanır. Şöyle görünür:

```JS
if (window.matchMedia("(width <= 480px)").matches) {
  // run JavaScript in here.
}
```

Örnek olarak, **[Snapshot](https://github.com/chrisdavidmills/snapshot)** demo uygulamamız, Brick JavaScript kütüphanesini seçici olarak uygulamak ve kullanıcı arayüzü düzenini yönetmek için bunu kullanır, ancak yalnızca küçük ekran düzeni (480 piksel veya daha az genişlik) için. Öncelikle, mediaBrick CSS'yi yalnızca sayfa genişliği 480 piksel veya daha az ise sayfaya uygulamak için özniteliği kullanıyoruz:

```HTML
<link href="dist/brick.css" rel="stylesheet" media="(width <= 480px)" />
```

Ardından JavaScript kodunu birkaç kez kullanarak matchMedia(), Brick gezinme işlevlerini yalnızca küçük ekran düzeninde olduğumuzda çalıştırıyoruz (daha geniş ekran düzenlerinde her şey aynı anda görülebildiğinden, farklı görünümler arasında gezinmeye gerek kalmıyor).

```JS
if (window.matchMedia("(width <= 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Otomatik test

**Kaynak:** [MDN Web Docs — Automated testing](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Automated_testing)


Birden fazla tarayıcı ve cihazda, günde birkaç kez manuel olarak test çalıştırmak sıkıcı ve zaman alıcı olabilir. Bunu verimli bir şekilde yönetmek için otomasyon araçlarına aşina olmalısınız. Bu makalede, mevcut olanlara, görev çalıştırıcılarının nasıl kullanılacağına ve Sauce Labs, BrowserStack ve TestingBot gibi ticari tarayıcı test otomasyon uygulamalarının temellerinin nasıl kullanılacağına bakacağız.

**Otomasyon işleri kolaylaştırır.**
Bu modül boyunca, web sitelerinizi ve uygulamalarınızı test edebileceğiniz birçok farklı yöntemi ayrıntılı olarak ele aldık ve tarayıcılar arası test çalışmalarınızın kapsamını, hangi tarayıcıları test etmeniz gerektiğini, erişilebilirlik hususlarını ve daha fazlasını açıkladık. Kulağa çok fazla iş gibi geliyor, değil mi?

Katılıyoruz — önceki makalelerde ele aldığımız her şeyi manuel olarak test etmek gerçekten zahmetli olabilir. Neyse ki, bu zahmetin bir kısmını otomatikleştirmemize yardımcı olacak araçlar var. Bu modülde bahsettiğimiz testleri otomatikleştirmenin iki ana yolu vardır:

- 1\.**[Derleme süreciniz sırasında testleri çalıştırmak ve kodu temizlemek için Grunt](https://gruntjs.com/)** veya **[Gulp](https://gulpjs.com/)** gibi bir görev çalıştırıcısı veya **[npm komut dosyaları](https://docs.npmjs.com/cli/v12/using-npm/scripts)** kullanın . Bu, kod denetimi ve küçültme, CSS ön ekleri ekleme veya yeni ortaya çıkan JavaScript özelliklerini tarayıcılar arası uyumluluk için dönüştürme gibi görevleri gerçekleştirmek için harika bir yoldur.
- 2\.**[Yüklü tarayıcılarda belirli testler çalıştırmak ve sonuçları döndürmek için Selenium](https://www.selenium.dev/)** gibi bir tarayıcı otomasyon sistemi kullanın; bu sistem , tarayıcılarda ortaya çıkan hatalar konusunda sizi uyarır. **[Sauce Labs](https://saucelabs.com/)** ve **[BrowserStack](https://www.browserstack.com/)** gibi ticari çapraz tarayıcı test uygulamaları Selenium tabanlıdır, ancak bir arayüz kullanarak kurulumlarına uzaktan erişmenize olanak tanıyarak kendi test sisteminizi kurma zahmetinden sizi kurtarır.

Bir sonraki yazımızda kendi Selenium tabanlı test sisteminizi nasıl kuracağınızı ele alacağız. Bu yazıda ise bir görev çalıştırıcısı kurmayı ve yukarıda bahsedilen ticari sistemlerin temel işlevlerini kullanmayı inceleyeceğiz.

**Not:** Yukarıdaki iki kategori birbirini dışlamaz. Bir görev çalıştırıcısı kurarak Sauce Labs gibi bir hizmete API üzerinden erişmek, tarayıcılar arası testler çalıştırmak ve sonuçları döndürmek mümkündür. Bunu da aşağıda inceleyeceğiz.

**Test araçlarını otomatikleştirmek için bir görev çalıştırıcı kullanmak**
Yukarıda da belirttiğimiz gibi, derleme sürecinizin belirli bir noktasında otomatik olarak çalıştırmanız gereken her şeyi çalıştırmak için bir görev çalıştırıcısı kullanarak kod denetimi ve küçültme gibi yaygın görevleri önemli ölçüde hızlandırabilirsiniz. Örneğin, bu, her dosya kaydettiğinizde veya başka bir noktada olabilir. Bu bölümde, yeni başlayanlar için uygun bir seçenek olan Node ve Gulp ile görev çalıştırmayı nasıl otomatikleştireceğimize bakacağız.

**Node ve npm kurulumu**
**[Günümüzde çoğu araç Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js)** tabanlı olduğundan , onu ve ona karşılık gelen paket yöneticisini kurmanız gerekecek npm:

- 1\.Node.js'i kurmanın ve güncellemenin en kolay yolu bir Node sürüm yöneticisi kullanmaktır: Bunu yapmak için **[Node Kurulumu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node)** npm bölümündeki talimatları izleyin .
- 2\.Devam etmeden önce **[kurulumunuzun başarılı olup olmadığını test ettiğinizden emin olun .](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_node.js_and_npm_installation)**
- 3\.Daha önce Node.js/ kurduysanız npm, bunları en son sürümlerine güncellemeniz gerekir. Bunu, Node sürüm yöneticisini kullanarak en son LTS sürümlerini yükleyerek yapabilirsiniz (yukarıdaki bağlantılı talimatlara tekrar bakın).

Projelerinizde Node/npm tabanlı paketleri kullanmaya başlamak için proje dizinlerinizi npm projeleri olarak ayarlamanız gerekir. Bunu yapmak kolaydır.

Örneğin, öncelikle herhangi bir şeyi bozma korkusu olmadan deneme yapabilmemiz için bir test dizini oluşturalım.

1\.Dosya yöneticinizin arayüzünü kullanarak veya komut satırından istediğiniz konuma gidip aşağıdaki komutu çalıştırarak uygun bir yerde yeni bir dizin oluşturun:

```BASH
mkdir node-test
```

2\.Bu dizini bir npm projesi haline getirmek için, test dizininize girmeniz ve aşağıdaki komutla başlatmanız yeterlidir:

```BASH
cd node-test
npm init
```

3\.Bu ikinci komut, projeyi kurmak için gereken bilgileri öğrenmek amacıyla size birçok soru soracaktır; şimdilik varsayılan ayarları seçebilirsiniz.

4\.Tüm sorular sorulduktan sonra, girilen bilgilerin doğru olup olmadığını soracaktır. Yazın ve Enter/Return tuşuna basın; npm, dizininizde yesbir dosya oluşturacaktır .package.json

Bu dosya temelde proje için bir yapılandırma dosyasıdır. Daha sonra özelleştirebilirsiniz, ancak şimdilik şöyle bir şey olacak:

```JSON
{
  "name": "node-test",
  "version": "1.0.0",
  "description": "Test for npm projects",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "author": "Chris Mills",
  "license": "MIT"
}
```

Artık bir sonraki aşamaya geçmeye hazırsınız.

**Gulp otomasyonunun kurulumu**
Şimdi Gulp'ı kurmaya ve bazı test araçlarını otomatikleştirmek için kullanmaya bakalım.

1\.Öncelikle, önceki bölümün sonunda ayrıntılı olarak açıklanan prosedürü kullanarak bir test npm projesi oluşturun. Ayrıca, dosyayı package.jsonşu satırla güncelleyin: "type": "module"böylece dosya şu şekilde görünecektir:

```JSON
{
  "name": "node-test",
  "version": "1.0.0",
  "description": "Test for npm projects",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "author": "Chris Mills",
  "license": "MIT",
  "type": "module"
}

```
2\.Ardından, sisteminizi test etmek için bazı örnek HTML, CSS ve JavaScript içeriklerine ihtiyacınız olacak; projenizin klasöründeki bir alt klasöre örnek index.html , main.js ve style.csssrc dosyalarımızın kopyalarını oluşturun . Dilerseniz kendi test içeriğinizi de deneyebilirsiniz, ancak bu tür araçların HTML dosyasına doğrudan eklenmiş JS/CSS ile iyi çalışmadığını unutmayın; ayrı dosyalara ihtiyacınız var.

3\.Aşağıdaki komutu kullanarak gulp'ı global olarak (yani tüm projelerde kullanılabilir olacak şekilde) yükleyin:

```BASH
npm install --global gulp-cli
```

4\.Ardından, gulp'ı projenizin bir bağımlılığı olarak ayarlamak için npm proje dizininizin kök dizininde aşağıdaki komutu çalıştırın:

```BASH
npm install --save-dev gulp
```

5\.Şimdi proje dizininizde adlı yeni bir dosya oluşturun gulpfile.mjs. Bu dosya, tüm görevlerimizi çalıştıracak olan dosyadır. Bu dosyanın içine aşağıdakileri yazın:

```JS
import gulp from "gulp";

export default function (cb) {
  console.log("Gulp running");
  cb();
}
```

Bu, daha önce kurduğumuz modülü gerektirir gulp ve ardından terminale bir mesaj yazdırmaktan başka hiçbir şey yapmayan varsayılan bir görevi dışa aktarır; bu, Gulp'ın çalıştığını bize bildirmek için kullanışlıdır. Sonraki birkaç bölümde, bu export default ifadeyi daha kullanışlı bir şeye dönüştüreceğiz.

Her Gulp görevi aynı temel biçimde dışa aktarılır exports function taskName(cb) {...}. Her fonksiyon, görev tamamlandığında çalıştırılacak bir geri çağırma işlevi olan bir parametre alır.

6\.Gulp'ın varsayılan görevini aşağıdaki komutla çalıştırabilirsiniz — şimdi deneyin:

```BASH
gulp
```

**Gulp'a bazı gerçek görevler eklemek**
Artık Gulp dosyamıza daha fazla görev eklemeye hazırız. Her ekleme, dosyayı gulpfile.mjs aşağıdaki şekilde değiştirmenizi gerektirebilir:

-Sizden bazı ifadeler eklemenizi istediğimizde import, bunları mevcut importifadenin altına ekleyin.
-Yeni bir ifade eklemenizi istediğimizde export function ..., onu dosyanın sonuna ekleyin.
-Varsayılan dışa aktarma ayarını değiştirmenizi istediğimizde, export defaultifadeyi belirttiğimiz şekilde değiştirin.

Dosyanız gulpfile.mjs şu şekilde büyüyecek:

```JS
import gulp from "gulp";
// Add any new imports here

// Our latest default export
// export default ...

// Add any new task exports here
// export function ...
// export function ...
```

Gulp'a gerçek görevler eklemek için ne yapmak istediğimizi düşünmemiz gerekiyor. Projemizde çalıştırabileceğimiz makul temel işlevler şunlardır:

-HTML/CSS/JS hatalarını denetlemek ve raporlamak/düzeltmek için html-tidy, css-lint ve js-hint (bkz. **[gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy)** , **[gulp-csslint](https://www.npmjs.com/package/gulp-csslint)** , **[gulp-jshint](https://www.npmjs.com/package/gulp-jshint)** ) kullanılır.
-CSS dosyamızı tarayan ve yalnızca gerekli yerlere satıcı ön eklerini ekleyen Autoprefixer (bkz. **[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)** ).
-Babel, JavaScript'in yeni sözdizimi özelliklerini eski tarayıcılarda çalışan geleneksel sözdizimine dönüştürmek için kullanılır (bkz. **[gulp-babel](https://www.npmjs.com/package/gulp-babel)** ).

Kullanmakta olduğumuz farklı Gulp paketlerine ilişkin ayrıntılı talimatlar için yukarıdaki bağlantılara bakın.

Her bir eklentiyi kullanmak için öncelikle npm aracılığıyla yüklemeniz, ardından dosyanın en üstüne gerekli bağımlılıkları eklemeniz gulpfile.mjs, dosyanın en altına testlerinizi eklemeniz ve son olarak görevinizin adını gulp komutuyla kullanılabilir hale getirmek için dışa aktarmanız gerekir.

*html-tidy*
1\.Aşağıdaki satırı kullanarak yükleyin:

```BASH
npm install --save-dev gulp-htmltidy
```

**Not:** --save-dev Bu komut, paketi projenize bağımlılık olarak ekler. Projenizin dosyasında package.json, ilgili özellik içinde bu pakete ait bir giriş göreceksiniz devDependencies.

2\.Aşağıdaki bağımlılığı ekleyin gulpfile.mjs:

```JS
import htmltidy from "gulp-htmltidy";
```

3\.Aşağıdaki testi en alta ekleyin gulpfile.mjs:

```JS
export function html() {
  return gulp
    .src("src/index.html")
    .pipe(htmltidy())
    .pipe(gulp.dest("build"));
}
```

4\.Varsayılan dışa aktarma ayarını değiştirin:

```JS
export default html;
```

index.html Burada, geliştirme dosyamızı alıyoruz gulp.src(); bu sayede bir kaynak dosyayı alıp üzerinde bir şeyler yapabiliyoruz.

Daha sonra, bu kaynağı başka bir komuta iletmek ve onunla başka bir şey yapmak için bu fonksiyonu kullanıyoruz pipe(). İstediğimiz kadarını birbirine zincirleyebiliriz. İlk olarak htmltidy(), kaynak üzerinde çalıştırıyoruz; bu işlem dosyamızdaki hataları düzeltiyor. İkinci pipe()fonksiyon ise çıktı HTML dosyasını dizine yazıyor build.

Dosyanın giriş sürümünde boş bir &lt;p&gt;öğe eklediğimizi fark etmiş olabilirsiniz; htmltidy, çıktı dosyası oluşturulana kadar bunu kaldırmıştır.

**Autoprefixer ve css-lint**
1\.Aşağıdaki satırları kullanarak yükleyin:

```BASH
npm install --save-dev gulp-autoprefixer
npm install --save-dev gulp-csslint
```

2\.Aşağıdaki bağımlılıkları ekleyin gulpfile.mjs:

```JS
import autoprefixer from "gulp-autoprefixer";
import csslint from "gulp-csslint";
```

3\.Aşağıdaki testi en alta ekleyin gulpfile.mjs:

```JS
export function css() {
  return gulp
    .src("src/style.css")
    .pipe(csslint())
    .pipe(csslint.formatter("compact"))
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(gulp.dest("build"));
}
```

4\.Aşağıdaki özelliği ekleyin package.json:

```JSON
{
  "browserslist": ["last 5 versions"]
}
```

5\.Varsayılan görevi şu şekilde değiştirin:

```JS
export default gulp.series(html, css);
```

Burada dosyamızı alıyoruz style.css, üzerinde csslint çalıştırıyoruz (bu, CSS'inizdeki hataların bir listesini terminale yazdırır), ardından eski tarayıcılarda yeni ortaya çıkan CSS özelliklerinin çalışması için gereken ön ekleri eklemek üzere autoprefixer'dan geçiriyoruz. İşlem zincirinin sonunda, değiştirilmiş ön ekli CSS dosyamızı dizine kaydediyoruz build. Unutmayın ki bu yalnızca csslint herhangi bir hata bulmazsa çalışır — CSS dosyanızdan bir süslü parantezi kaldırıp gulp'ı tekrar çalıştırarak hangi çıktıyı aldığınızı görün!

*js-hint ve babel*
1\.Aşağıdaki satırları kullanarak yükleyin:

```BASH
npm install --save-dev gulp-babel @babel/preset-env
npm install --save-dev @babel/core
npm install jshint gulp-jshint --save-dev
```

2\.Aşağıdaki bağımlılıkları ekleyin gulpfile.mjs:

```JS
import babel from "gulp-babel";
import jshint from "gulp-jshint";
```

3\.Aşağıdaki testi en alta ekleyin gulpfile.mjs:

```JS
export function js() {
  return gulp
    .src("src/main.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"))
    .pipe(
      babel({
        presets: ["@babel/env"],
      }),
    )
    .pipe(gulp.dest("build"));
}
```

4\.Varsayılan görevi şu şekilde değiştirin:

```JS
export default gulp.series(html, css, js);
```

Burada dosyamızı alıyoruz main.js, jshintüzerinde çalıştırıyoruz ve sonuçları terminale yazdırıyoruz jshint.reporter; daha sonra dosyayı Babel'e iletiyoruz, o da dosyayı eski stil sözdizimine dönüştürüyor ve sonucu dizine yazdırıyor build. Orijinal kodumuzda, Babel'in eski stil bir fonksiyona dönüştürdüğü kalın bir ok fonksiyonu vardı.

**Daha fazla fikir**
Tüm bu ayarlamalar tamamlandıktan sonra, projenizin dizininde komutu çalıştırabilirsiniz gulpve aşağıdaki gibi bir çıktı almalısınız:

![Test](./assets/PNG-11.png)

build Ardından, otomatikleştirilmiş görevlerinizin ürettiği dosyaları dizin içinde inceleyerek ve build/index.html web tarayıcınızda yükleyerek deneyebilirsiniz .

Hata alıyorsanız, yukarıda gösterildiği gibi tüm bağımlılıkları ve testleri eklediğinizden emin olun; ayrıca HTML/CSS/JavaScript kod bölümlerini yorum satırı haline getirip ardından gulp'ı yeniden çalıştırarak sorunun ne olduğunu belirlemeye çalışın.

Gulp, dosyalarınızı izlemenize ve bir dosya kaydettiğinizde testler çalıştırmanıza olanak tanıyan bir işlevle birlikte gelir watch(). Örneğin, aşağıdaki kodu dosyanızın sonuna eklemeyi deneyin gulpfile.mjs:

```JS
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Şimdi gulp watch komutu terminalinize girmeyi deneyin. Gulp artık dizininizi izleyecek ve HTML, CSS veya JavaScript dosyalarında bir değişiklik kaydettiğinizde uygun görevleri çalıştıracaktır.

**Not:** Bu * karakter bir joker karakterdir; burada "bu türdeki dosyalar kaydedildiğinde bu görevleri çalıştır" diyoruz. Joker karakterleri ana görevlerinizde de kullanabilirsiniz; örneğin, gulp.src('src/*.css') tüm CSS dosyalarınızı alıp ardından bunlar üzerinde ardışık görevler çalıştırabilirsiniz.

Gulp ile yapabileceğiniz çok daha fazla şey var. **[Gulp eklenti](https://gulpjs.com/plugins/)** dizininde kelimenin tam anlamıyla binlerce eklenti bulunuyor.

**Diğer görev yürütücüleri**
Piyasada birçok başka görev çalıştırıcı da mevcut. Gulp'ın en iyi çözüm olduğunu söylemeye çalışmıyoruz elbette, ancak bizim için işe yarıyor ve yeni başlayanlar için oldukça erişilebilir. Diğer çözümleri de deneyebilirsiniz:

- Grunt, Gulp'a çok benzer bir şekilde çalışır, ancak yazılı JavaScript kullanmak yerine bir yapılandırma dosyasında belirtilen görevlere dayanır. **[Daha fazla bilgi için Grunt'a Başlangıç ​​Kılavuzuna bakın.](https://gruntjs.com/getting-started)**
- Ayrıca, herhangi bir ek görev çalıştırma sistemi kurmanıza gerek kalmadan, dosyanızın içinde bulunan npm komut dosyalarını kullanarak görevleri doğrudan çalıştırabilirsiniz package.json. Bu, Gulp eklentileri gibi şeylerin temelde komut satırı araçlarının etrafındaki sarmalayıcılar olduğu varsayımına dayanır. Bu nedenle, araçları komut satırı kullanarak nasıl çalıştıracağınızı çözerseniz, bunları npm komut dosyalarını kullanarak da çalıştırabilirsiniz. Kullanımı biraz daha karmaşık olsa da, komut satırı becerileri güçlü olanlar için ödüllendirici olabilir. " **[Neden npm komut dosyaları?" başlıklı makale,](https://css-tricks.com/why-npm-scripts/)** daha fazla bilgi içeren iyi bir giriş sunmaktadır.

**Tarayıcı testini hızlandırmak için ticari test hizmetlerinden yararlanmak**
Şimdi de ticari üçüncü taraf tarayıcı test hizmetlerine ve bunların bizim için neler yapabileceğine bakalım.

Bu tür hizmetleri kullandığınızda, test etmek istediğiniz sayfanın URL'sini ve hangi tarayıcılarda test edilmesini istediğiniz gibi bilgileri sağlarsınız. Uygulama daha sonra belirttiğiniz işletim sistemi ve tarayıcıyla yeni bir sanal makine yapılandırır ve test sonuçlarını ekran görüntüleri, videolar, günlük dosyaları, metin vb. biçiminde döndürür. Bu çok kullanışlıdır ve tüm işletim sistemi/tarayıcı kombinasyonlarını kendiniz kurmaktan çok daha pratiktir.

Ardından, API kullanarak işlevselliğe programatik olarak erişebilir ve bu sayede bu tür uygulamaları, kendi yerel Selenium ortamlarınız ve diğerleri gibi görev çalıştırıcılarla birleştirerek otomatik testler oluşturabilirsiniz.

**Not:** Piyasada başka ticari tarayıcı test sistemleri de mevcuttur, ancak bu makalede BrowserStack, Sauce Labs ve TestingBot'a odaklanacağız. Bunların mutlaka en iyi araçlar olduğunu söylemiyoruz, ancak yeni başlayanlar için kullanımı kolay ve iyi araçlardır.

**BrowserStack**
*BrowserStack ile çalışmaya başlamak*
Başlamak için:

1\.**[BrowserStack için deneme hesabı oluşturun .](https://www.browserstack.com/users/sign_up)**
2\.Giriş yapın. E-posta adresinizi doğruladıktan sonra bu işlem otomatik olarak gerçekleşmelidir.
3\.Canlı Manuel Test'e gitmek için üst gezinme menüsündeki Canlı bağlantısına tıklayın .

*Temel bilgiler: Manuel testler*
BrowserStack Live kontrol paneli, test etmek istediğiniz platformu, cihazı ve tarayıcıyı seçmenize olanak tanır. Masaüstü testleri için işletim sistemini ve tarayıcıyı doğrudan seçersiniz. Mobil cihazlar için ise mobil işletim sistemini ve cihazı seçtikten sonra cihaz-tarayıcı kombinasyonunuz için bir tarayıcı seçebilirsiniz.

![Test](./assets/PNG-12.png)

Bu tarayıcı simgelerinden birine tıkladığınızda, tercih ettiğiniz platform, cihaz ve tarayıcı açılacaktır; şimdi birini seçin ve deneyin.

MacBook gibi destekleyen cihazların dokunmatik yüzeylerinde adres çubuğuna URL'ler girebilir, fareyle sürükleyerek yukarı ve aşağı kaydırabilir ve uygun hareketleri (örneğin, yakınlaştırma/uzaklaştırma, iki parmakla kaydırma) kullanabilirsiniz.

Kullanılan tarayıcıya bağlı olarak mevcut özellikler değişiklik gösterir ve şunları içerebilir:

- Geçerli tarayıcıda bilgi görüntüleniyor.
- Diğer tarayıcılara geçiş
- Yerel sunucu URL'lerini test etme
- Yakınlaştırma seviyesini ayarlama ve yönlendirmeyi değiştirme
- Yer işaretlerinin kaydedilmesi ve yüklenmesi
- Ekran görüntüleri yakalama/üzerine açıklama ekleme ve hata raporları oluşturma
- Tarayıcı Geliştirici Araçlarına erişim
- Bildirilen konumun değiştirilmesi
- Ağın hızını kısıtlamak
- Ekran okuyuculara erişim

![Test](./assets/PNG-13.png)


Daha fazla bilgi için **[BrowserStack Live dokümanına bakın.](https://www.browserstack.com/docs/live)**

**Gelişmiş: BrowserStack API'si** 
BrowserStack ayrıca , hesap planınızın, oturumlarınızın, derlemelerinizin vb. ayrıntılarını programatik olarak almanıza olanak tanıyan bir **[RESTful API'ye](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction)** de sahiptir.

Şimdi Node.js kullanarak API'ye nasıl erişebileceğimize kısaca bir göz atalım.

1\.**[Öncelikle, Node ve npm kurulumu bölümünde](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm)** ayrıntılı olarak açıklandığı gibi, bunu test etmek için yeni bir npm projesi oluşturun . Öncekinden farklı bir dizin adı kullanın, örneğin bstack-test.

2\.Proje kök dizininde adlı yeni bir dosya oluşturun call_bstack.jsve içine aşağıdaki içeriği ekleyin:

```JS
const axios = require("axios");

const bsUser = "BROWSERSTACK_USERNAME";
const bsKey = "BROWSERSTACK_ACCESS_KEY";
const baseUrl = `https://${bsUser}:${bsKey}@www.browserstack.com/automate/`;

function getPlanDetails() {
  axios.get(`${baseUrl}plan.json`).then((response) => {
    console.log(response.data);
  });
  /* Response:
    {
      automate_plan: <string>,
      terminal_access: <string>.
      parallel_sessions_running: <int>,
      team_parallel_sessions_max_allowed: <int>,
      parallel_sessions_max_allowed: <int>,
      queued_sessions: <int>,
      queued_sessions_max_allowed: <int>
    }
    */
}

getPlanDetails();
```

3\.**[BrowserStack kullanıcı adı ve erişim anahtarı için yer tutucuları gerçek değerlerinizle değiştirin. Bu bilgilere BrowserStack Hesap ve Profil Ayrıntıları](https://www.browserstack.com/users/sign_in)** bölümündeki Kimlik Doğrulama ve Güvenlik kısmından ulaşabilirsiniz .

4\.**[Kodumuzda HTTP isteklerini göndermek için kullandığımız axios modülünü,](https://www.npmjs.com/package/axios)** terminalinizde aşağıdaki komutu çalıştırarak yükleyin (axios'u basit, popüler ve iyi desteklenen bir modül olduğu için seçtik):

```BASH
npm install axios
```

5\.JavaScript dosyanızın kaydedildiğinden emin olun ve terminalinizde aşağıdaki komutu çalıştırarak dosyayı çalıştırın. Terminalde BrowserStack planınızın ayrıntılarını içeren bir nesne yazdırıldığını görmelisiniz.

```BASH
node call_bstack
```

Aşağıda, BrowserStack RESTful API'siyle çalışırken faydalı bulabileceğiniz diğer bazı hazır fonksiyonları da sağladık.

Bu fonksiyon, daha önce oluşturulmuş tüm otomatik derlemelerin özet ayrıntılarını döndürür ( **[BrowserStack otomatik test ayrıntıları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack)** için sonraki makaleye bakın ):

```JS
function getBuilds() {
  axios.get(`${baseUrl}builds.json`).then((response) => {
    console.log(response.data);
  });

  /* Response:
  [
    {
      automation_build: {
        name: <string>,
        hashed_id: <string>,
        duration: <int>,
        status: <string>,
        build_tag: <string>,
        public_url: <string>
      }
    },
    {
      automation_build: {
        name: <string>,
        hashed_id: <string>,
        duration: <int>,
        status: <string>,
        build_tag: <string>,
        public_url: <string>
      }
    },
    // …
  ]
  */
}
```

Bu fonksiyon, belirli bir derleme için özel oturumlara ilişkin ayrıntıları döndürür:

```JS
function getSessionsInBuild(build) {
  const buildId = build.automation_build.hashed_id;
  axios.get(`${baseUrl}builds/${buildId}/sessions.json`).then((response) => {
    console.log(response.data);
  });
  /* Response:
  [
    {
      automation_session: {
        name: <string>,
        duration: <int>,
        os: <string>,
        os_version: <string>,
        browser_version: <string>,
        browser: <string>,
        device: <string>,
        status: <string>,
        hashed_id: <string>,
        reason: <string>,
        build_name: <string>,
        project_name: <string>,
        logs: <string>,
        browser_url: <string>,
        public_url: <string>,
        appium_logs_url: <string>,
        video_url: <string>,
        browser_console_logs_url: <string>,
        har_logs_url: <string>,
        selenium_logs_url: <string>
      }
    },
    {
      automation_session: {
        // …
      }
    },
    // …
  ]
  */
}
```

Aşağıdaki fonksiyon belirli bir oturuma ait ayrıntıları döndürür:

```JS
function getSessionDetails(session) {
  const sessionId = session.automation_session.hashed_id;
  axios.get(`${baseUrl}sessions/${sessionId}.json`).then((response) => {
    console.log(response.data);
  });
  /* Response:
  {
    automation_session: {
      name: <string>,
      duration: <int>,
      os: <string>,
      os_version: <string>,
      browser_version: <string>,
      browser: <string>,
      device: <string>,
      status: <string>,
      hashed_id: <string>,
      reason: <string>,
      build_name: <string>,
      project_name: <string>,
      logs: <string>,
      browser_url: <string>,
      public_url: <string>,
      appium_logs_url: <string>,
      video_url: <string>,
      browser_console_logs_url: <string>,
      har_logs_url: <string>,
      selenium_logs_url: <string>
    }
  }
  */
}
```

*Gelişmiş: Otomatik testler*
Bir sonraki yazımızda **[BrowserStack'te otomatik testlerin nasıl çalıştırılacağını ele alacağız .](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack)**

**Sos Laboratuvarları**
*Sauce Labs ile çalışmaya başlamak*

*Sauce Labs denemesine başlayalım.*

1\.Sauce Labs deneme hesabı oluşturun.
2\.Giriş yapın. E-posta adresinizi doğruladıktan sonra bu işlem otomatik olarak gerçekleşmelidir.

**Temel bilgiler: Manuel test**
Sauce **[Labs kontrol panelinde](https://accounts.saucelabs.com/am/XUI/?region=us-west-1&next=%2Fdashboard%2Flive#login/)** birçok seçenek mevcuttur. Giriş yaptıktan sonra, sayfanın sol üst köşesindeki 'Başlangıç' kılavuzunu takip edin:

1\."İlk testinizi çalıştırın" bölümünde Masaüstü tarayıcı seçeneğine tıklayın .
2\.Sonraki ekranda, test etmek istediğiniz sayfanın URL'sini yazın (örneğin bu sayfa gibi), ardından farklı düğmeleri ve listeleri kullanarak test etmek istediğiniz tarayıcı/işletim sistemi kombinasyonunu seçin. Göreceğiniz gibi, aralarından seçim yapabileceğiniz çok sayıda seçenek var!

![Test](./assets/PNG-14.png)

3\.Test etmeye başladığınızda bir yükleme ekranı görünecek ve seçtiğiniz cihaz/tarayıcı kombinasyonunu çalıştıran bir ortam oluşturulacaktır. Ardından, seçtiğiniz tarayıcıda çalışan web sitesini uzaktan test etmeye başlayabilirsiniz.

Bu aşamada oldukça fazla şey yapabilirsiniz; örneğin, bir test URL'si paylaşarak başka birinin testi uzaktan gözlemlemesini sağlayabilir, metin/notları uzak bir panoya kopyalayabilir, ekran görüntüsü alabilir, tam ekran modunda test edebilir ve daha fazlasını yapabilirsiniz.

Oturumu durdurduğunuzda, daha önce başlattığınız her manuel oturum için bir giriş göreceğiniz Canlı sekmesine geri dönersiniz. Bu girişlerden birine tıklamak, oturumla ilgili daha fazla veri gösterir. Burada, aldığınız ekran görüntülerini indirebilir, oturumun videosunu izleyebilir, veri günlüklerini görüntüleyebilir ve daha fazlasını yapabilirsiniz. Bu zaten çok kullanışlı ve birden fazla emülatör ve sanal makineyi kendiniz kurmaktan çok daha pratik.


**Gelişmiş: Sauce Labs API'si**
Sauce Labs, hesabınızın ve mevcut testlerinizin ayrıntılarını programatik olarak almanıza ve testleri, yalnızca manuel testlerle kaydedilemeyen geçme/kalma durumu gibi daha ayrıntılı bilgilerle açıklamanıza olanak tanıyan bir RESTful API'ye sahiptir . Örneğin, belirli bir tarayıcı/işletim sistemi kombinasyonunu test etmek için Sauce Labs'ı kullanarak kendi Selenium testlerinizden birini uzaktan çalıştırmak ve ardından test sonuçlarını Sauce Labs'a geri göndermek isteyebilirsiniz.

API'ye dilediğiniz ortamı (PHP, Java, Node.js vb.) kullanarak çağrı yapmanıza olanak tanıyan çeşitli istemciler mevcuttur.

Şimdi Node.js ve node-saucelabs kullanarak API'ye nasıl erişebileceğimize kısaca bir göz atalım .

1\.Öncelikle, Node ve npm kurulumu bölümünde ayrıntılı olarak açıklandığı gibi, bunu test etmek için yeni bir npm projesi oluşturun . Öncekinden farklı bir dizin adı kullanın, örneğin sauce-test.

2\.Aşağıdaki komutu kullanarak Node Sauce Labs sarmalayıcısını yükleyin:

```BASH
npm install saucelabs
```

3\.Proje kök dizininde adlı yeni bir dosya oluşturun call_sauce.js. İçine aşağıdaki içeriği yazın:

```JS
const SauceLabs = require("saucelabs").default;

(async () => {
  const myAccount = new SauceLabs({
    username: "your-sauce-username",
    password: "your-sauce-api-key",
  });

  // Get full WebDriver URL from the client depending on region:
  console.log(myAccount.webdriverEndpoint);

  // Get job details of last run job
  const jobs = await myAccount.listJobs("your-sauce-username", {
    limit: 1,
    full: true,
  });

  console.log(jobs);
})();
```

4\.Sauce Labs kullanıcı adınızı ve API anahtarınızı belirtilen yerlere girmeniz gerekecek. Bunları **[Kullanıcı Ayarları](https://accounts.saucelabs.com/am/XUI/?region=us-west-1&next=%2Fuser-settings#login/)** sayfanızdan alabilirsiniz. Şimdi girin.

5\.Her şeyin kaydedildiğinden emin olun ve dosyanızı şu şekilde çalıştırın:

```BASH
node call_sauce
```

*Gelişmiş: Otomatik testler*
Bir sonraki yazımızda Sauce Lab'in otomatik testlerinin nasıl çalıştırılacağını ele alacağız.

**TestingBot**
*TestingBot'a Başlangıç*

TestingBot deneme sürümüne başlayalım.

1\.**[TestingBot deneme hesabı](https://testingbot.com/users/sign_up)** oluşturun .
2\.Giriş yapın. E-posta adresinizi doğruladıktan sonra bu işlem otomatik olarak gerçekleşmelidir.

**Temel bilgiler: Manuel testler**
TestingBot **[kontrol paneli,](https://testingbot.com/users/sign_in)** aralarından seçim yapabileceğiniz çeşitli seçenekleri listeler. Şimdilik, Canlı Web Testi sekmesinde olduğunuzdan emin olun.

1\.Test etmek istediğiniz sayfanın URL'sini girin.
2\.Izgaradan test etmek istediğiniz tarayıcı/işletim sistemi kombinasyonunu seçin.

![Test](./assets/PNG-15.png)

3\."Tarayıcıyı Başlat"ı tıkladığınızda , seçtiğiniz kombinasyonu çalıştıran bir sanal makineyi başlatan bir yükleme ekranı görünecektir.
4\.Yükleme tamamlandıktan sonra, seçtiğiniz tarayıcıda çalışan web sitesini uzaktan test etmeye başlayabilirsiniz.
5\.Buradan, test ettiğiniz tarayıcıda nasıl görüneceğini görebilir, fareyi hareket ettirebilir ve düğmelere tıklamayı deneyebilirsiniz. Yan menü size şunları sağlar:
- Oturumu durdur
- Ekran çözünürlüğünü değiştirin
- Metni/notları uzak bir panoya kopyala
- Ekran görüntüleri alın, düzenleyin ve indirin.
- Tam ekran modunda test edin.

Oturumu durdurduğunuzda, daha önce başlattığınız her manuel oturum için bir giriş göreceğiniz Canlı Web Testi sayfasına geri döneceksiniz. Bu girişlerden birine tıklamak, oturumla ilgili daha fazla veri gösterir. Burada aldığınız ekran görüntülerini indirebilir, testin videosunu izleyebilir ve oturumun günlüklerini görüntüleyebilirsiniz.

**Gelişmiş: TestingBot API'si**
TestingBot , hesabınızın ve mevcut testlerinizin ayrıntılarını programatik olarak almanıza ve testleri, manuel testlerle tek başına kaydedilemeyen geçme/kalma durumu gibi daha ayrıntılı bilgilerle açıklamanıza olanak tanıyan bir **[RESTful API'ye sahiptir.](https://testingbot.com/support/api)**

TestingBot, API ile etkileşim kurmak için kullanabileceğiniz Node.js, Python, Ruby, Java ve PHP istemcileri de dahil olmak üzere çeşitli API istemcilerine sahiptir.

Aşağıda, Node.js istemcisi **[testingbot-api](https://www.npmjs.com/package/testingbot-api)** ile TestingBot API'si ile nasıl etkileşim kurulacağına dair bir örnek verilmiştir .

1\.**[Öncelikle, Node ve npm kurulumu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm)** bölümünde ayrıntılı olarak açıklandığı gibi, bunu test etmek için yeni bir npm projesi oluşturun . Öncekinden farklı bir dizin adı kullanın, örneğin tb-test.

2\.Aşağıdaki komutu kullanarak Node.js TestingBot sarmalayıcısını yükleyin:

```BASH
npm install testingbot-api
```

3\.Proje kök dizininde adlı yeni bir dosya oluşturun tb.js. İçine aşağıdaki içeriği yazın:

```JS
const TestingBot = require("testingbot-api");

let tb = new TestingBot({
  api_key: "your-tb-key",
  api_secret: "your-tb-secret",
});

tb.getTests((err, tests) => {
  console.log(tests);
});
```

4\.TestingBot Anahtarınızı ve Gizli Anahtarınızı belirtilen yerlere girmeniz gerekecek. Bunları **[TestingBot kontrol panelinde](https://testingbot.com/users/sign_in)** bulabilirsiniz .

5\.Her şeyin kaydedildiğinden emin olun ve dosyayı çalıştırın:

```BASH
node tb.js
```

**Gelişmiş: Otomatik testler**
Bir sonraki yazımızda TestingBot ile otomatik testlerin nasıl çalıştırılacağını ele alacağız.


## Otomasyon ortamı kurulumu

**Kaynak:** [MDN Web Docs — Automation environment setup](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)

Bu makalede, Selenium/WebDriver ve Node için selenium-webdriver gibi bir test kütüphanesi kullanarak kendi otomasyon ortamınızı nasıl kuracağınızı ve kendi testlerinizi nasıl çalıştıracağınızı öğreteceğiz. Ayrıca, yerel test ortamınızı önceki makalede ele alınanlar gibi ticari araçlarla nasıl entegre edeceğinizi de inceleyeceğiz.

**Selenyum**
**[Selenium,](https://www.selenium.dev/)** en popüler tarayıcı otomasyon aracıdır. Başka yöntemler de mevcut olsa da, Selenium'u kullanmanın en iyi yolu, Selenium'un üzerine kurulu ve tarayıcıya çağrılar yaparak otomasyon sağlayan güçlü bir API olan WebDriver'ı kullanmaktır. Bu API, "bu web sayfasını aç", "sayfadaki bu öğenin üzerine gel", "bu bağlantıya tıkla", "bağlantının bu URL'yi açıp açmadığını kontrol et" gibi eylemleri gerçekleştirir. Bu, otomatik testler çalıştırmak için idealdir.

WebDriver'ı nasıl kuracağınız ve kullanacağınız, testlerinizi yazmak ve çalıştırmak için kullanmak istediğiniz programlama ortamına bağlıdır. En popüler ortamların çoğunda, örneğin Java, C#, Ruby, Python, JavaScript (Node) vb. dillerde WebDriver'ı ve bu dille iletişim kurmak için gereken bağlayıcıları kuracak bir paket veya çerçeve mevcuttur. Farklı diller için Selenium kurulumları hakkında daha fazla bilgi için **[Selenium-WebDriver Projesi Kurulumu bölümüne bakın .](https://www.selenium.dev/documentation/webdriver/getting_started/)**

Farklı tarayıcılar, WebDriver'ın onlarla iletişim kurmasına ve onları kontrol etmesine olanak tanıyan farklı sürücülere ihtiyaç duyar. Tarayıcı sürücülerini nereden edineceğiniz vb. hakkında daha fazla bilgi için **[Selenium tarafından desteklenen platformlara bakın.](https://www.selenium.dev/downloads/)**

Başlangıç ​​için hızlı ve kolay bir ortam olması ve ön uç geliştiriciler için daha tanıdık bir ortam sunması nedeniyle, Node.js kullanarak Selenium testleri yazmayı ve çalıştırmayı ele alacağız.

**Node.js'de Selenium Kurulumu**
1\.Öncelikle, önceki bölümde **["Node ve npm Kurulumu"](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm)**selenium-test başlığı altında anlatıldığı gibi yeni bir npm projesi oluşturun. Adını farklı bir şey koyun, örneğin .

2\.Ardından, Node içinden Selenium ile çalışmamızı sağlayacak bir framework kurmamız gerekiyor. Belgeleri oldukça güncel ve bakımı iyi yapıldığı için Selenium'un resmi **[selenium-webdriver'ını](https://www.npmjs.com/package/selenium-webdriver)** seçeceğiz . Farklı seçenekler isterseniz, **[webdriver.io](https://webdriver.io/)** ve **[nightwatch.js](https://nightwatchjs.org/)** de iyi tercihlerdir. selenium-webdriver'ı kurmak için, proje klasörünüzde olduğunuzdan emin olarak aşağıdaki komutu çalıştırın:

```BASH
npm install selenium-webdriver
```

**Not:** Selenium-webdriver'ı daha önce kurmuş ve tarayıcı sürücülerini indirmiş olsanız bile bu adımları izlemeniz yine de iyi bir fikirdir. Her şeyin güncel olduğundan emin olmalısınız.

Ardından, WebDriver'ın test etmek istediğiniz tarayıcıları kontrol etmesine izin vermek için ilgili sürücüleri indirmeniz gerekir. Bunları nereden edineceğinizle ilgili ayrıntıları **[selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)** sayfasında bulabilirsiniz (ilk bölümdeki tabloya bakın). Açıkçası, bazı tarayıcılar işletim sistemine özgüdür, ancak tüm ana işletim sistemlerinde mevcut oldukları için Firefox ve Chrome'u kullanacağız.

1\.En yeni **[GeckoDriver](https://github.com/mozilla/geckodriver/releases/)** (Firefox için) ve **[ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable)** sürücülerini indirin.
2\.Bunları, ev kullanıcı dizininizin kök dizini gibi, kolayca erişebileceğiniz bir yere çıkarın.
3\.chromedriver Sürücülerin geckodriver konumunu sistem değişkeninize ekleyin PATH. Bu, sabit diskinizin kök dizininden sürücüleri içeren dizine kadar olan mutlak bir yol olmalıdır. Örneğin, macOS işletim sistemli bir makine kullanıyorsak, kullanıcı adımız bob ise ve sürücülerimizi ana klasörümüzün kök dizinine yerleştirdiysek, yol şu şekilde olacaktır /Users/bob: .

**Not:** Tekrar belirtmek gerekirse, eklediğiniz yol, PATH sürücülerin kendilerinin yolları değil, sürücüleri içeren dizinin yolu olmalıdır! Bu yaygın bir hatadır.

PATH macOS sisteminde ve çoğu Linux sisteminde değişkeninizi ayarlamak için :

1\.Dosyanızı açın .zprofile(veya .bash_profile sisteminiz bash shell kullanıyorsa shell dosyasını).

**Not:** Gizli dosyaları göremiyorsanız, bunları görüntülemeniz gerekecektir; macOS'ta gizli dosyaları gösterme/gizleme veya Ubuntu'da gizli klasörleri gösterme konularına bakın .

2\.Aşağıdakileri dosyanızın en altına yapıştırın (dosya yolunu bilgisayarınızdaki gerçek haline göre güncelleyin):

```BASH
# Add WebDriver browser drivers to PATH
export PATH=$PATH:/Users/bob
```

3\.Bu dosyayı kaydedip kapatın, ardından Bash yapılandırmanızın yeniden uygulanması için Terminal/komut istemini yeniden başlatın.

4\PATH Terminalinize aşağıdaki komutu girerek yeni yollarınızın değişkene eklendiğini kontrol edin :

**Not:** Değişkeninizi Windows'ta ayarlamak için , **["Sistem yoluma nasıl yeni bir klasör ekleyebilirim?"](https://stackoverflow.com/questions/44272416/add-a-folder-to-the-path-environment-variable-in-windows-10-with-screenshots)**PATH başlıklı makaledeki yönergeleri izleyin.

Her şeyin düzgün çalıştığından emin olmak için hızlı bir test yapalım.

1\.Proje dizininizde şu isimle yeni bir dosya oluşturun duck_test.js:

2\.İçine aşağıdaki içeriği yazın ve kaydedin:

```JS
const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get("https://duckduckgo.com/");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver at DuckDuckGo"), 1000);
    console.log("Test passed!");
  } catch (e) {
    console.log(`Error: ${e}`);
  } finally {
    await driver.sleep(2000); // Delay long enough to see search page!
    await driver.quit();
  }
})();
```

**Not:** Bu fonksiyon bir IIFE'dir (Hemen Çağrılan Fonksiyon İfadesi).

3\.Terminalde proje klasörünüzde olduğunuzdan emin olduktan sonra aşağıdaki komutu girin:

```BASH
node duck_test
```

Firefox'un otomatik olarak açıldığını göreceksiniz! DuckDuckGo otomatik olarak bir sekmede yüklenecek, arama kutusuna "webdriver" yazılacak ve arama düğmesine tıklanacaktır. WebDriver daha sonra 1 saniye bekleyecek; belge başlığına erişilecek ve eğer "webdriver at DuckDuckGo" ise, testin başarılı olduğunu belirten bir mesaj döndürülecektir.

Ardından 2 saniye bekliyoruz, sonrasında WebDriver Firefox örneğini kapatacak ve duracaktır.

**Aynı anda birden fazla tarayıcıda test etme**
Testi aynı anda birden fazla tarayıcıda çalıştırmanızı engelleyecek hiçbir şey yok. Hadi deneyelim!

1\.Proje dizininizin içine adlı yeni bir dosya daha oluşturun duck_test_multiple.js. İşletim sisteminizde test edebileceğiniz tarayıcılara bağlı olarak, eklediğimiz diğer tarayıcılara yapılan referansları değiştirebilir, kaldırabilir vb. işlemler yapabilirsiniz. Sisteminizde doğru tarayıcı sürücülerinin kurulu olduğundan emin olmanız gerekir. Diğer tarayıcılar için yöntem içinde hangi dizenin kullanılacağına ilişkin olarak , **[Tarayıcı enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser)** referans sayfasına .forBrowser()bakın .

2\.Dosyanıza aşağıdaki içeriği ekleyin ve kaydedin:

```JS
const { Builder, Browser, By, Key } = require("selenium-webdriver");

const driverFx = new Builder().forBrowser(Browser.FIREFOX).build();
const driverChr = new Builder().forBrowser(Browser.CHROME).build();

async function searchTest(driver) {
  try {
    await driver.get("https://duckduckgo.com/");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.sleep(2000);
    const title = await driver.getTitle();
    if (title === "webdriver at DuckDuckGo") {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  } finally {
    driver.quit();
  }
}

searchTest(driverFx);
searchTest(driverChr);
```

3\.Terminalde proje klasörünüzde olduğunuzdan emin olduktan sonra aşağıdaki komutu girin:

```BASH
node duck_test_multiple
```

**Not:** Eğer Mac kullanıyorsanız ve Safari'yi test etmeye karar verirseniz, "Oturum oluşturulamadı: Safari'yi WebDriver aracılığıyla kontrol etmek için Safari'nin Geliştirme menüsünde 'Uzaktan Otomasyona İzin Ver' seçeneğini etkinleştirmeniz gerekir." şeklinde bir hata mesajı alabilirsiniz. Bu mesajı alırsanız, verilen talimatları izleyin ve tekrar deneyin.

Sürücü uygulamasının doğrulanmış bir kaynaktan indirilmediği için açılamayacağına dair bir mesaj alabilirsiniz. Bu durumda, söz konusu sürücü uygulaması için güvenlik ayarını geçersiz kılabilirsiniz. Örneğin, Mac'te Ctrl uygulamaya + tıklayın, Aç'ı seçin ve açılan iletişim kutusundan tekrar Aç'ı seçin.

Yani burada testi daha önce yaptığımız gibi yaptık, ancak bu sefer onu bir fonksiyonun içine aldık searchTest(). Birden fazla tarayıcı için yeni tarayıcı örnekleri oluşturduk, ardından her birini fonksiyona ilettik, böylece test hepsinde gerçekleştirildi.

Şimdi WebDriver sözdiziminin temellerine biraz daha detaylı bakalım.

**WebDriver sözdizimi hızlı öğrenme kursu**
Webdriver sözdiziminin birkaç temel özelliğine göz atalım. Daha ayrıntılı bilgi için, detaylı bir referans için **[selenium-webdriver JavaScript API referansına](https://www.selenium.dev/selenium/docs/api/javascript/)** ve farklı dillerde yazılmış, öğrenilebilecek birçok örnek içeren Selenium ana dokümantasyonunun **[Selenium WebDriver bölümüne](https://www.selenium.dev/documentation/webdriver/)** başvurmalısınız.

**Yeni bir test başlatılıyor**
Yeni bir test başlatmak için, yapıcıyı ve arayüzü selenium-webdriver içe aktararak modülü dahil etmeniz gerekir :Builder Browser

```JS
const { Builder, Browser } = require("selenium-webdriver");
```

Builder() Sürücünün yeni bir örneğini oluşturmak için yapıcıyı kullanırsınız ve forBrowser() bu oluşturucu ile hangi tarayıcıyı test etmek istediğinizi belirtmek için yöntemi zincirlersiniz. Yöntem, build()sürücü örneğini gerçekten oluşturmak için en sonda zincirlenir ( bu özellikler hakkında ayrıntılı bilgi için **[Builder sınıfı referansına bakın).](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html)**

```JS
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Test edilecek tarayıcılar için belirli yapılandırma seçenekleri belirlemenin mümkün olduğunu unutmayın; örneğin, yöntemde test edilecek belirli bir sürümü ve işletim sistemini ayarlayabilirsiniz forBrowser():

```JS
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Bu seçenekleri bir ortam değişkeni kullanarak da ayarlayabilirsiniz, örneğin:

```BASH
SELENIUM_BROWSER=firefox:130:MAC
```

Bu kodu incelerken aynı zamanda üzerinde konuşabilmemiz için yeni bir test oluşturalım. Selenium test projesi dizininizde, adlı yeni bir dosya oluşturun quick_test.jsve içine aşağıdaki kodu ekleyin:

```JS
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
})();
```

Aşağıdaki komutu terminalinize girerek örneği test edebilirsiniz:

```BASH
node quick_test
```

**Test etmek istediğiniz belgeyi alma**
Test etmek istediğiniz sayfayı yüklemek için, get()daha önce oluşturduğunuz sürücü örneğinin yöntemini kullanırsınız, örneğin:

```JS
driver.get("http://www.google.com");
```

**Not:** Bu bölümdeki ve aşağıdaki bölümlerdeki özelliklerin ayrıntıları için WebDriver sınıf referansına bakın .

Yerel bir belgeyi test etmek için kullanılan URL de dahil olmak üzere, kaynağınıza işaret etmek için herhangi bir URL kullanabilirsiniz file://:

```JS
driver.get("file:///Users/bob/git/examples/test_file.html");
```

veya

```JS
driver.get("http://localhost:8888/test_file.html");
```

Ancak, kodun daha esnek olması için uzak bir sunucu konumu kullanmak daha iyidir; testlerinizi çalıştırmak için uzak bir sunucu kullanmaya başladığınızda (daha sonra açıklanacak), yerel yollar kullanmaya çalışırsanız kodunuz bozulacaktır.

Fonksiyonunuzu aşağıdaki gibi güncelleyin example(), yer tutucu yolu bilgisayarınızdaki gerçek bir HTML dosyasına giden yerel yolla değiştirin ve ardından çalıştırmayı deneyin:

```JS
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

**Belgeyle etkileşim kurma**
Artık test edeceğimiz bir belgemiz olduğuna göre, onunla bir şekilde etkileşim kurmamız gerekiyor; bu genellikle önce bir şey test etmek için belirli bir öğeyi seçmeyi içerir. WebDriver'da **[kullanıcı arayüzü öğelerini kimlik, sınıf, öğe adı vb. birçok şekilde seçebilirsiniz .](https://www.selenium.dev/documentation/webdriver/elements/)** Gerçek seçim, parametre olarak bir seçim yöntemi alan yöntem tarafından yapılır findElement(). Örneğin, bir öğeyi kimliğine göre seçmek için:

```JS
const element = driver.findElement(By.id("myElementId"));
```

CSS kullanarak bir öğeyi bulmanın en kullanışlı yollarından biri; bu By.css()yöntem, bir CSS seçici kullanarak bir öğeyi seçmenize olanak tanır.

Fonksiyonunuzu aşağıdaki gibi güncelleyin example() ve ardından örneği çalıştırın:

```JS
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );
  const button = driver.findElement(By.css("button:nth-of-type(1)"));
})();
```

**Elementinizi test etme**
Web dokümanlarınız ve içlerindeki öğelerle etkileşim kurmanın birçok yolu vardır. WebDriver dokümanlarındaki **[]"Metin değerlerini alma"](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content)** bölümünden başlayarak faydalı yaygın örnekleri görebilirsiniz .

Butonumuzun içindeki metni almak istiyorsak, bunu şu şekilde yapabiliriz:

```JS
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Şimdi bunu fonksiyonun sonuna example() aşağıdaki gibi ekleyin:

```JS
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();

  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.getText().then((text) => {
    console.log(`Button text is '${text}'`);
  });
})();
```

Örneği node daha önce yaptığınız gibi çalıştırın. Düğmenin metin etiketinin konsolda görüntülendiğini görmelisiniz.

Şimdi biraz daha faydalı bir şey yapalım. Önceki kod girişini button.click(); aşağıdaki gibi değiştirin:

```JS
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.click();
})();
```

Testinizi tekrar çalıştırmayı deneyin; düğmeye tıklanacak ve bir alert() açılır pencere belirecektir. En azından düğmenin çalıştığını biliyoruz!

Açılır pencereyle de etkileşim kurabilirsiniz. Fonksiyonu example() aşağıdaki gibi güncelleyin ve tekrar test etmeyi deneyin:

```JS
const { Builder, Browser, By, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();

  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.click();

  await driver.wait(until.alertIsPresent());

  const alert = driver.switchTo().alert();

  alert.getText().then((text) => {
    console.log(`Alert text is '${text}'`);
  });

  alert.accept();
})();
```

Şimdi de form elemanlarına biraz metin girmeyi deneyelim. Fonksiyonu example() aşağıdaki gibi güncelleyin ve testinizi tekrar çalıştırmayı deneyin:

```JS
const { Builder, Browser, By, Key } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const input = driver.findElement(By.id("name"));
  input.sendKeys("Bob Smith");

  input.sendKeys(Key.TAB);

  const input2 = driver.findElement(By.id("age"));
  input2.sendKeys("65");
})();
```

Nesnenin özelliklerini kullanarak normal karakterlerle temsil edilemeyen tuş vuruşlarını gönderebilirsiniz Key. Örneğin, yukarıda form girişleri arasında sekme geçişi yapmak için aşağıdakileri kullandık:

```JS
input.sendKeys(Key.TAB);
```

**Bir şeyin tamamlanmasını beklemek**
Bazı durumlarda WebDriver'ın bir işlemin tamamlanmasını beklemesini isteyebilirsiniz. Örneğin, yeni bir sayfa yüklediğinizde, sayfanın DOM'unun yüklenmesi tamamlanana kadar beklemeniz gerekir; aksi takdirde test büyük olasılıkla başarısız olur.

Örneğin, testimizde duck_test_multiple.js şu satırı ekledik:

```JS
await driver.sleep(2000);
```

Bu sleep()metot, milisaniye cinsinden beklenecek süreyi belirten bir değer alır ve Promisebu süre sonunda çözümlenen bir promise döndürür. await Promise çözümlenene kadar kapsayıcı fonksiyonu duraklatmak için `stop` anahtar kelimesini kullanırız; promise çözümlendikten sonra metottan sonra gelen kod yürütülür.

sleep() Testimize bir yöntem daha ekleyebiliriz ; fonksiyonunuzu şu şekilde quick_test.js güncellemeyi deneyin :example()

```JS
const { Builder, Browser, By, Key } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const input = driver.findElement(By.id("name"));
  input.sendKeys("Bob Smith");

  driver.sleep(1000).then(() => {
    input.getAttribute("value").then((value) => {
      if (value !== "") {
        console.log("Form input filled out");
      } else {
        console.log("Text could not be entered");
      }
    });
  });
})();
```

Güncellenmiş kodu çalıştırmayı deneyin. WebDriver artık ilk form alanını dolduracak, bir saniye bekleyecek, ardından öznitelik değerini alarak değerinin doldurulup doldurulmadığını (yani boş olup olmadığını) test edecektir getAttribute(). value Daha sonra başarı/başarısızlık durumunu bildirmek için konsola bir mesaj yazdıracaktır.

**Not:** **[wait()](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait)** Ayrıca , belirli bir süre boyunca bir koşulu tekrar tekrar test eden ve ardından kodun yürütülmesine devam eden bir yöntem de vardır . Bu yöntem de , ile birlikte kullanılacak ortak koşulları tanımlayan **[yardımcı kütüphanesini](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html)**wait() kullanır .

**Kullanımdan sonra sürücüleri kapatma**
driver.quit() Testi tamamladıktan sonra, gereksiz yere kaynak kullanmaya devam etmelerini önlemek için bu yöntemle açtığınız tüm sürücü örneklerini kapatmalısınız . Güncelleme quick_test.js şu şekildedir:

```JS
const { Builder, Browser, By, Key } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const input = driver.findElement(By.id("name"));
  input.sendKeys("Bob Smith");

  driver.sleep(1000).then(() => {
    input
      .getAttribute("value")
      .then((value) => {
        if (value !== "") {
          console.log("Form input filled out");
        } else {
          console.log("Text could not be entered");
        }
      })
      .finally(() => {
        driver.quit();
      });
  });
})();
```

Şimdi çalıştırdığınızda, testin yürütüldüğünü ve test tamamlandıktan sonra tarayıcı örneğinin tekrar kapandığını görmelisiniz.

**Test en iyi uygulamaları**
Test yazımında en iyi uygulamalar hakkında çok şey yazılmıştır. **[Test Uygulamaları](https://www.selenium.dev/documentation/test_practices/)** sayfasında bazı iyi temel bilgiler bulabilirsiniz . Genel olarak, testlerinizin şu özelliklere sahip olduğundan emin olmalısınız:

1\.**[İyi konum belirleme stratejileri kullanmak: Belgeyle etkileşim](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#interacting_with_the_document)** kurarken , değişme olasılığı düşük olan konum belirleyiciler ve sayfa nesneleri kullandığınızdan emin olun. Test etmek istediğiniz bir öğeniz varsa, bunun sabit bir kimliğe veya CSS seçici kullanılarak seçilebilen, bir sonraki site sürümünde değişmeyecek bir sayfa konumuna sahip olduğundan emin olun. Testlerinizi mümkün olduğunca dayanıklı hale getirmek istiyorsunuz, yani bir şey değiştiğinde bozulmayacaklar.
2\.Atomik testler yazın: Her test yalnızca bir şeyi test etmeli, böylece hangi test dosyasının hangi kriteri test ettiğini takip etmek kolaylaşır. duck_test.js Yukarıda incelediğimiz test oldukça iyi, çünkü yalnızca tek bir şeyi test ediyor - arama sonuçları sayfasının başlığının doğru ayarlanıp ayarlanmadığını. Daha fazla test eklersek, ne yaptığını anlamayı kolaylaştırmak için daha iyi bir isim verebiliriz. Belki results_page_title_set_correctly.js biraz daha iyi olurdu?
3\.Bağımsız testler yazın: Her test kendi başına çalışmalı ve çalışması için diğer testlere bağlı olmamalıdır.

Ayrıca, test sonuçları/raporlama konusuna da değinmeliyiz — yukarıdaki örneklerimizde sonuçları basit ifadeler kullanarak raporladık , ancak bunların hepsi JavaScript ile yapılıyor, bu nedenle Mocha , **[Chai](https://www.chaijs.com/)** console.log() veya başka bir araç olsun, istediğiniz test çalıştırma ve raporlama sistemini kullanabilirsiniz . Hızlı bir örnek üzerinden ilerleyelim:

1\.Proje dizininizde adlı yeni bir dosya oluşturun mocha_test.js; bunu adlı bir alt klasörün içine yerleştirin test. İçine aşağıdaki içeriği yazın:

```JS
"use strict";

const assert = require("assert");

const { Builder, Capabilities, By } = require("selenium-webdriver");

describe("Alert", () => {
  it("should have the correct text content - this is from the first button", (done) => {
    let driver = new Builder()
      .withCapabilities(Capabilities.firefox())
      .build();

    driver
      .get(
        "http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
      )
      .then(() => driver.findElement(By.css("button:nth-of-type(1)")))
      .then((button) => button.click())
      .then(() => driver.switchTo().alert())
      .then((alert) => alert.getText())
      .then((text) => assert.equal(text, "This is from the first button"))
      .then(() => driver.quit())
      .then(done)
      .catch((err) => done(err));
  });
});
```

Bu örnek, testimizde gerekli olan tüm adımları çalıştırmak için uzun bir vaat zinciri kullanır; WebDriver'ın kullandığı vaat tabanlı yöntemlerin düzgün çalışması için çözümlenmesi gerekir.

2\.Proje dizininizde aşağıdaki komutu çalıştırarak Mocha test ortamını kurun:

```BASH
npm install --save-dev mocha
```

3\.test Artık testi (ve dizininize koyduğunuz diğer testleri ) aşağıdaki komutu kullanarak çalıştırabilirsiniz :

```BASH
npx mocha --no-timeouts
```

4\.--no-timeoutsTestlerinizin Mocha'nın keyfi zaman aşımı (3 saniye) nedeniyle başarısız olmaması için bu bayrağı eklemelisiniz .

**Not:** **[saucelabs-sample-test-frameworks,](https://github.com/saucelabs-sample-test-frameworks)** farklı test/doğrulama araçlarının nasıl kurulacağına dair çeşitli faydalı örnekler içermektedir.

**Uzaktan testler çalıştırılıyor**
Uzak sunucularda test çalıştırmanın, yerel olarak çalıştırmaktan çok daha zor olmadığı ortaya çıktı. Sadece sürücü örneğinizi oluşturmanız gerekiyor, ancak test etmek istediğiniz tarayıcının yetenekleri, sunucunun adresi ve erişmek için gereken kullanıcı kimlik bilgileri (varsa) dahil olmak üzere birkaç ek özellik belirtmeniz gerekiyor.

**BrowserStack**
**[BrowserStack](https://www.browserstack.com/automate)** üzerinde uzaktan Selenium testi çalıştırmanın nasıl yapılacağını gösteren bir örnek oluşturalım :

1\.Proje dizininizin içinde, . adında yeni bir dosya oluşturun bstack_duck_test.js.

2\.İçine aşağıdaki içeriği verin:

```JS
const { Builder, By, Key } = require("selenium-webdriver");

// Input capabilities
const capabilities = {
  "bstack:options": {
    os: "OS X",
    osVersion: "Sonoma",
    browserVersion: "17.0",
    local: "false",
    seleniumVersion: "3.14.0",
    userName: "YOUR-USER-NAME",
    accessKey: "YOUR-ACCESS-KEY",
  },
  browserName: "Safari",
};

const driver = new Builder()
  .usingServer("http://hub-cloud.browserstack.com/wd/hub")
  .withCapabilities(capabilities)
  .build();

(async function bStackGoogleTest() {
  try {
    await driver.get("https://duckduckgo.com/");
    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.sleep(2000);
    const title = await driver.getTitle();
    if (title === "webdriver at DuckDuckGo") {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  } finally {
    await driver.sleep(4000); // Delay long enough to see search page!
    await driver.quit();
  }
})();
```

3\.BrowserStack **[Hesap ve Profil ayrıntıları sayfanızdan](https://www.browserstack.com/users/sign_in)** kullanıcı adınızı ve erişim anahtarınızı alın ( Kullanıcı Adı ve Erişim Anahtarları bölümüne bakın ).

4\.Koddaki YOUR-USER-NAMEve yer tutucularını gerçek kullanıcı adınız ve erişim anahtarı değerlerinizle değiştirin (ve bunların güvenliğini sağladığınızdan emin olun).YOUR-ACCESS-KEY

5\.Testinizi aşağıdaki komutla çalıştırın:

```BASH
node bstack_google_test
```

Test BrowserStack'e gönderilecek ve test sonucu konsolunuza geri döndürülecektir. Bu, bir tür sonuç raporlama mekanizmasının dahil edilmesinin önemini göstermektedir!

**[Şimdi BrowserStack Automate kontrol paneline](https://www.browserstack.com/users/sign_in)** geri dönerseniz , testinizin listelendiğini, testin video kaydını ve testle ilgili ayrıntılı bilgileri içeren birden fazla log kaydını göreceksiniz:

![Test](./assets/PNG-16.png)

**Not:** Browserstack otomasyon kontrol panelindeki Kaynaklar menü seçeneği , otomatik testleri çalıştırmak için kullanımına ilişkin çok sayıda yararlı bilgi içermektedir. Node.js'ye özgü bilgiler için Node.js ile Selenium'a bakın.

BrowserStack test detaylarını programatik olarak doldurma
BrowserStack REST API'sini ve diğer bazı özelliklerini kullanarak testinize daha fazla ayrıntı ekleyebilirsiniz; örneğin testin başarılı olup olmadığı, neden başarılı olduğu, testin hangi projeye ait olduğu vb. BrowserStack bu ayrıntıları varsayılan olarak bilmez.

bstack_duck_test.js Bu özelliklerin nasıl çalıştığını göstermek için demo örneğimizi güncelleyelim :

1\.Proje dizininizde aşağıdaki komutu çalıştırarak **[axios](https://www.npmjs.com/package/axios)** modülünü yükleyin :

```BASH
npm install axios
```

2\.BrowserStack REST API'sine istek gönderebilmek için axios modülünü içe aktarın. Kodunuzun en üstüne aşağıdaki satırı ekleyin:

```JS
const axios = require("axios");
```

3\.Şimdi, proje adını içerecek şekilde nesnemizi güncelleyeceğiz capabilities— kapanış süslü parantezinden önce aşağıdaki satırı ekleyin ve önceki satırın sonuna virgül koymayı unutmayın (BrowserStack otomasyon kontrol panelindeki farklı pencerelerde testleri düzenlemek için derleme ve proje adlarını değiştirebilirsiniz):

```JS
const capabilities = {
  // …
  project: "DuckDuckGo test 2",
};
```

4\.sessionId Ardından , geçerli oturumun kimliğini alacağız ve bunu (ve userName kimliğinizi accessKey) kullanarak BrowserStack verilerini güncellemek için istek göndereceğimiz URL'yi oluşturacağız. Nesneyi oluşturan bloğun hemen altına driver(ile başlayan const driver = new Builder()) aşağıdaki satırları ekleyin:

```JS
let sessionId;
let bstackURL;

driver.session_.then((sessionData) => {
  sessionId = sessionData.id_;
  bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
});
```

5\.if...else Son olarak, testin başarılı olup olmamasına bağlı olarak BrowserStack'e uygun API çağrıları gönderecek şekilde kodun alt kısmına yakın bloğu güncelleyin :

```JS
if (title === "webdriver at DuckDuckGo") {
  console.log("Test passed");
  axios.put(bstackURL, {
    status: "passed",
    reason: "DuckDuckGo results showed correct title",
  });
} else {
  console.log("Test failed");
  axios.put(bstackURL, {
    status: "failed",
    reason: "DuckDuckGo results showed wrong title",
  });
}
```

Test tamamlandıktan sonra, BrowserStack'e bir API çağrısı göndererek testin başarılı veya başarısız olduğunu ve sonucun nedenini içeren bir güncelleme gönderiyoruz.

**[Şimdi BrowserStack Automate kontrol panelinize](https://www.browserstack.com/users/sign_in)** geri dönerseniz , test oturumunuzu daha önce olduğu gibi, ancak özel verilerinizin de eklenmiş olarak görmelisiniz. Durumu "BAŞARILI" olarak gösterir ve REST API'nin başarı nedenini bildirdiği bilgi şu şekildedir:

![Test](./assets/PNG-17.png)

**Sos Laboratuvarları**
Şimdi Selenium testlerinin Sauce Labs üzerinde uzaktan çalıştırılmasını gösteren bir örneğe bakalım:

1\.Proje dizininizin içinde, . adında yeni bir dosya oluşturun sauce_google_test.js.

2\.İçine aşağıdaki içeriği verin:

```JS
const { Builder, By, Key } = require("selenium-webdriver");

const username = "YOUR-USER-NAME";
const accessKey = "YOUR-ACCESS-KEY";

const driver = new Builder()
  .withCapabilities({
    browserName: "chrome",
    platform: "Windows XP",
    version: "43.0",
    username,
    accessKey,
  })
  .usingServer(
    `https://${username}:${accessKey}@ondemand.saucelabs.com:443/wd/hub`,
  )
  .build();

driver.get("http://www.google.com");

driver.findElement(By.name("q")).sendKeys("webdriver");

driver.sleep(1000).then(() => {
  driver.findElement(By.name("q")).sendKeys(Key.TAB);
});

driver.findElement(By.name("btnK")).click();

driver.sleep(2000).then(() => {
  driver.getTitle().then((title) => {
    if (title === "webdriver - Google Search") {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  });
});

driver.quit();
```

3\.**[Sauce Labs kullanıcı ayarlarınızdan](https://accounts.saucelabs.com/am/XUI/?region=us-west-1&next=%2Fuser-settings#login/)** kullanıcı adınızı ve erişim anahtarınızı alın. Koddaki YOUR-USER-NAME ve yer tutucularını gerçek kullanıcı adınız ve erişim anahtarı değerlerinizle değiştirin (ve bunları güvende tuttuğunuzdan emin olun).YOUR-ACCESS-KEY

4\.Testinizi aşağıdaki komutla çalıştırın:

```BASH
node sauce_google_test
```

Test Sauce Labs'e gönderilecek ve test sonucu konsolunuza geri gönderilecektir. Bu, bir tür sonuç raporlama mekanizmasının dahil edilmesinin önemini göstermektedir!

5\.**[Şimdi Sauce Labs Otomatik Test kontrol paneli sayfanıza giderseniz ,](https://accounts.saucelabs.com/am/XUI/?region=us-west-1&next=%2Fdashboard%2Ftests#login/)** testinizin listelendiğini göreceksiniz; buradan videoları, ekran görüntülerini ve benzeri verileri görebileceksiniz.

![Test](./assets/png-18.png)

**Not:** Sauce Labs'ın **[Platform Yapılandırıcısı ,](https://saucelabs.com/products/platform-configurator#/)** test etmek istediğiniz tarayıcı/işletim sistemine bağlı olarak sürücü örneklerinize beslenecek yetenek nesneleri oluşturmak için kullanışlı bir araçtır.

**Not:** Sauce Labs ve Selenium ile test etme konusunda daha faydalı ayrıntılar için, **[Otomatik Web Sitesi Testi için Selenium'a Başlangıç](https://docs.saucelabs.com/web-apps/automated-testing/selenium/)** ​​ve **[Anında Selenium Node.js Testleri başlıklı](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs) yazılara göz atabilirsiniz .

**Sauce Labs test detaylarını programatik olarak doldurma**

Sauce Labs API'sini kullanarak testinize, başarılı olup olmadığı, testin adı gibi daha fazla ayrıntı ekleyebilirsiniz. Sauce Labs bu ayrıntıları varsayılan olarak bilmiyor!

Bunu yapmak için şunları yapmanız gerekir:

1\.Aşağıdaki komutu kullanarak Node Sauce Labs sarmalayıcısını yükleyin (eğer bu proje için daha önce yüklemediyseniz):

```BASH
npm install saucelabs --save-dev
```

2\.Saucelabs'ı gerektir — bunu dosyanızın en üstüne sauce_google_test.js, önceki değişken bildirimlerinin hemen altına ekleyin:

```JS
const SauceLabs = require("saucelabs");
```
3\.Aşağıdaki kodu hemen altına ekleyerek SauceLabs'ın yeni bir örneğini oluşturun:

```JS
const saucelabs = new SauceLabs({
  username: "YOUR-USER-NAME",
  password: "YOUR-ACCESS-KEY",
});
```

Koddaki YOUR-USER-NAME ve yer tutucularını yine gerçek kullanıcı adınız ve erişim anahtarı değerlerinizle değiştirin (saucelabs npm paketinin kafa karıştırıcı bir şekilde yerine kullandığını unutmayın ). Bunları şimdi iki kez kullandığınız için, bunları saklamak üzere birkaç yardımcı değişken oluşturmak isteyebilirsiniz.YOUR-ACCESS-KEY password accessKey

4\.Değişkeni tanımladığınız bloğun altına driver(satırın hemen altına build()) aşağıdaki bloğu ekleyin; bu, sessionID işe veri yazmak için ihtiyacımız olan doğru sürücüyü elde etmemizi sağlar (bunu bir sonraki kod bloğunda görebilirsiniz):

```JS
driver.getSession().then((sessionid) => {
  driver.sessionID = sessionid.id_;
});
```

5\.driver.sleep(2000)Son olarak, kodun en altındaki bloğu aşağıdakiyle değiştirin :

```JS
driver.sleep(2000).then(() => {
  driver.getTitle().then((title) => {
    let testPassed = false;
    if (title === "webdriver - Google Search") {
      console.log("Test passed");
      testPassed = true;
    } else {
      console.error("Test failed");
    }

    saucelabs.updateJob(driver.sessionID, {
      name: "Google search results page title test",
      passed: testPassed,
    });
  });
});
```

testPassed Burada, testin başarılı olup olmamasına bağlı olarak bir değişkeni 0 trueveya 1 olarak ayarladık , ardından ayrıntıları güncellemek için yöntemi false kullandık .saucelabs.updateJob()

**[Şimdi Sauce Labs Otomatik Test kontrol paneli](https://accounts.saucelabs.com/am/XUI/?region=us-west-1&next=%2Fdashboard%2Ftests#login/)** sayfanıza geri dönerseniz , yeni işinizin güncellenmiş verilerle birlikte eklendiğini göreceksiniz:

![Test](./assets/png-18.png)

**Kendi uzak sunucunuz**
Sauce Labs veya BrowserStack gibi bir hizmet kullanmak istemiyorsanız, her zaman kendi uzaktan test sunucunuzu kurabilirsiniz. Bunu nasıl yapacağımıza bakalım.

1\.Selenium uzaktan sunucusunun çalışması için Java gereklidir. Platformunuz için en son JDK sürümünü **[Java SE indirme sayfasından indirin .](https://www.oracle.com/java/technologies/downloads/)** İndirildikten sonra kurun.

2\.Ardından, en son **[Selenium bağımsız sunucusunu](https://selenium-release.storage.googleapis.com/index.html)** indirin ; bu, komut dosyanız ile tarayıcı sürücüleri arasında bir proxy görevi görür. En son kararlı sürüm numarasını (yani beta sürümünü değil) seçin ve listeden "selenium-server-standalone" ile başlayan bir dosya seçin. İndirme işlemi tamamlandığında, ana dizininiz gibi mantıklı bir yere koyun. Konumu henüz .xml dosyanıza eklemediyseniz PATH, şimdi ekleyin **[( Node'da Selenium Kurulumu bölümüne bakın).](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#setting_up_selenium_in_node)**

3\.Sunucu bilgisayarınızdaki bir terminale aşağıdakileri girerek bağımsız sunucuyu çalıştırın.

```BASH
java -jar selenium-server-standalone-3.0.0.jar
```

( .jarDosya adını) elinizdeki dosyayla tam olarak eşleşecek şekilde güncelleyin.

4\.Sunucu çalışmaya devam edecek http://localhost:4444/wd/hub; şimdi oraya gidip neyle karşılaşacağınızı görün.

Sunucuyu çalıştırdığımıza göre, şimdi uzak Selenium sunucusunda çalışacak bir demo testi oluşturalım.

1\.Dosyanızın bir kopyasını oluşturun google_test.jsve ona adını verin google_test_remote.js; projenizin dizinine yerleştirin.

2\.(ile başlayan) kod satırını const driver = …aşağıdaki gibi güncelleyin.

```JS
const driver = new Builder()
  .forBrowser(Browser.FIREFOX)
  .usingServer("http://localhost:4444/wd/hub")
  .build();
  ```

3\.Testinizi çalıştırın ve beklendiği gibi çalıştığını göreceksiniz; ancak bu sefer testi bağımsız bir sunucuda çalıştıracaksınız:

```BASH
node google_test_remote.js
```

Bu gerçekten harika. Bunu yerel olarak test ettik, ancak ilgili tarayıcı sürücüleriyle birlikte hemen hemen her sunucuda kurabilir ve ardından komut dosyalarınızı, erişime açmayı seçtiğiniz URL'yi kullanarak ona bağlayabilirsiniz.

**Selenium'u CI araçlarıyla entegre etme**
**[Bir diğer nokta olarak, Selenium ve Sauce Labs gibi ilgili araçları sürekli entegrasyon](https://developer.mozilla.org/en-US/docs/Glossary/Continuous_integration)** (CI) araçlarıyla entegre etmek de mümkündür ; bu, testlerinizi bir CI aracı üzerinden çalıştırabileceğiniz ve yalnızca testler başarılı olursa kod deponuza yeni değişiklikler kaydedebileceğiniz anlamına geldiği için faydalıdır.

Bu makalede bu alana detaylı olarak değinmek mümkün değil, ancak Travis CI ile başlamanızı öneririz; bu, muhtemelen başlaması en kolay CI aracıdır ve GitHub ve Node gibi web araçlarıyla iyi bir entegrasyona sahiptir.

Başlamak için, örneğin şunlara bakın:

- **[Travis CI, tamamen yeni başlayanlar için](https://docs.travis-ci.com/user/for-beginners)**
- **[Node.js projesi oluşturma](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)** (Travis ile)
- **[Sauce Labs'ı Travis CI ile Kullanma](https://docs.travis-ci.com/user/sauce-connect/)**

**Not:** Kodsuz otomasyon ile sürekli test yapmak istiyorsanız **[Endtest](https://endtest.io/)** veya **[TestingBot](https://testingbot.com/)** kullanabilirsiniz .