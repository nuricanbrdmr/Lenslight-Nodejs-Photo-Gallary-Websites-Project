# Lenslight

Lenslight, kullanıcıların fotoğraflarını yükleyebileceği ve diğer kullanıcıların fotoğraflarını görebileceği modern bir fotoğraf galerisi uygulamasıdır. Bu proje, Node.js, MongoDB, Nodemailer ve Cloudinary teknolojileri kullanılarak geliştirilmiştir.

## Özellikler

- **Kullanıcı Girişi:** Kullanıcılar hesap oluşturabilir ve giriş yapabilir.
- **Oturum Yönetimi:** Kullanıcıların oturumları cookie session ile yönetilir.
- **Fotoğraf Yükleme:** Her kullanıcı kendi fotoğraflarını yükleyebilir.
- **Fotoğraf Görüntüleme:** Yüklenen fotoğraflar tüm kullanıcılar tarafından görüntülenebilir.
- **Email Bildirimleri:** Nodemailer kullanılarak e-posta bildirimleri gönderilebilir.

## Kullanılan Teknolojiler

- **Node.js:** Sunucu tarafı işlemler için.
- **MongoDB:** Veritabanı yönetimi için.
- **Nodemailer:** E-posta göndermek için.
- **Cloudinary:** Fotoğraf depolama ve yönetimi için.

## Kurulum

1. **Depoyu Klonlayın:**
   ```bash
   git clone https://github.com/nuricanbrdmr/Lenslight-Nodejs-Photo-Gallary-Websites-Project.git
   cd Lenslight-Nodejs-Photo-Gallary-Websites-Project
   ```

2. **Gerekli Paketleri Yükleyin:**
   ```bash
   npm install
   ```

3. **Ortam Değişkenlerini Ayarlayın:**
   - `.env` dosyasını oluşturun ve gerekli API anahtarlarını ve veritabanı bağlantı bilgilerini ekleyin.
   
4. **Uygulamayı Başlatın:**
   ```bash
   npm start
   ```


## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.
