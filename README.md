# Mini Uzum Market

**Mini Uzum Market** — bu React asosida yaratilgan kichik internet do‘kon ilovasi bo‘lib, foydalanuvchiga mahsulotlarni ko‘rish, qidirish, kategoriya bo‘yicha filtrlash va savatga qo‘shish imkonini beradi.

Loyiha test vazifa sifatida ishlab chiqilgan va unda frontendning asosiy funksional imkoniyatlari hamda foydalanuvchi tajribasini yaxshilovchi qo‘shimcha qulayliklar amalga oshirilgan.

---

## Asosiy imkoniyatlar

- API orqali mahsulotlarni olish
- Mahsulotlarni grid ko‘rinishda chiqarish
- Har bir mahsulot kartasida:
  - rasm
  - nomi
  - narxi
  - savatga qo‘shish tugmasi
- Header qismida savatdagi mahsulotlar sonini ko‘rsatish
- Mahsulotlarni qidirish
- Kategoriya bo‘yicha filterlash
- Mahsulot sonini oshirish va kamaytirish (`+` / `-`)
- Savatni tozalash
- Loading holatini ko‘rsatish
- Toast xabar orqali foydalanuvchiga bildirishnoma chiqarish
- `localStorage` yordamida savat ma’lumotlarini saqlash
- Mobil va desktop qurilmalar uchun responsiv dizayn

---

## Ishlatilgan texnologiyalar

- **React**
- **JavaScript**
- **CSS**
- **Vite**
- **localStorage**

---

## Loyihani ishga tushirish

Quyidagi buyruqlarni terminalda ketma-ket ishga tushiring:

```bash
npm install
npm run dev

src/
  components/
    Header.jsx
    Controls.jsx
    ProductGrid.jsx
    ProductCard.jsx
    Toast.jsx
  data/
    fallbackProducts.js
  App.jsx
  App.css
  index.css

API haqida muhim eslatma

Ushbu loyiha mahsulotlarni olish uchun quyidagi API’dan foydalanadi:

https://fakestoreapi.com/products

Loyihani ishlab chiqish jarayonida Fake Store API ba’zi vaqtlarda SSL/host bilan bog‘liq xatolik qaytardi. Shu sababli ilovaning ishlashi to‘xtab qolmasligi uchun fallback local data qo‘shildi.

Ilova quyidagicha ishlaydi:

avval API orqali mahsulotlarni olishga harakat qiladi
agar API ishlamasa, lokal fallback ma’lumotlarni ko‘rsatadi

Bu yondashuv ilovaning barqaror ishlashini ta’minlash uchun qo‘shilgan.

Mazkur loyiha foydalanuvchi interfeysi, mahsulotlar bilan ishlash logikasi va savat funksionalligini amaliy ko‘rsatish uchun ishlab chiqilgan. Test vazifa doirasida asosiy funksiyalar bilan birga foydalanuvchi tajribasini yaxshilovchi qo‘shimcha elementlar ham qo‘shilgan.
