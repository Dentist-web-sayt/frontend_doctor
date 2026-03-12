export const services = [
  {
    id: 1,
    icon: 'tooth',
    name: 'Umumiy Stomatologiya',
    desc: 'Tishlarni tekshirish, tozalash va profilaktika — sogʻlom tabassum uchun asos.',
    price: '80,000 soʻmdan',
    duration: '45 daqiqa',
  },
  {
    id: 2,
    icon: 'implant',
    name: 'Tish Implantatsiyasi',
    desc: 'Titanium implantlar yordamida tishlarni tiklash — umrbod natija kafolatlanadi.',
    price: '2,500,000 soʻmdan',
    duration: '2 soat',
  },
  {
    id: 3,
    icon: 'whitening',
    name: 'Tish Oqartirish',
    desc: 'Professional tish oqartirish — bir seansdayoq 8 tonagacha yorqinlik.',
    price: '350,000 soʻmdan',
    duration: '1.5 soat',
  },
  {
    id: 4,
    icon: 'braces',
    name: 'Ortodontiya (Breketlar)',
    desc: 'Zamonaviy shaffof va metall breketlar bilan tishlarni tekislash.',
    price: '1,200,000 soʻmdan',
    duration: "18 oy kursi",
  },
  {
    id: 5,
    icon: 'veneer',
    name: 'Vinilar & Koronkalar',
    desc: 'Keramik vinilar bilan mukammal tabassum — tabiiy koʻrinish, uzoq muddatli natija.',
    price: '600,000 soʻmdan',
    duration: '2 seans',
  },
  {
    id: 6,
    icon: 'surgery',
    name: "Og'iz Jarrohlik",
    desc: 'Tishni chiqarish, kistani olib tashlash va murakkab jarrohlik amaliyotlari.',
    price: '200,000 soʻmdan',
    duration: '1 soat',
  },
];

export const doctors = [
  {
    id: 1,
    name: 'Dr. Aziz Karimov',
    specialty: 'Bosh Implantolog',
    experience: '18 yil',
    patients: '4,200+',
    education: 'Toshkent Tibbiyot Akademiyasi, Germaniya stajirovkasi',
    color: '#00C9B1',
  },
  {
    id: 2,
    name: 'Dr. Malika Yusupova',
    specialty: 'Ortodont',
    experience: '12 yil',
    patients: '3,100+',
    education: 'Seoul National University, Korea',
    color: '#7C6FFF',
  },
  {
    id: 3,
    name: 'Dr. Jasur Nazarov',
    specialty: 'Estetik Stomatolog',
    experience: '15 yil',
    patients: '5,500+',
    education: 'Moscow Dental Institute, Italiya stajirovkasi',
    color: '#FF6B6B',
  },
  {
    id: 4,
    name: 'Dr. Nilufar Rashidova',
    specialty: 'Pediatrik Stomatolog',
    experience: '10 yil',
    patients: '6,000+',
    education: 'TSMU, Janubiy Koreya kurslari',
    color: '#FFB800',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sherzod Tursunov',
    text: "Hayotimda birinchi marta stomatologga borishdan qoʻrqmadim. Dr. Karimov juda professional, og'riqsiz bajardi.",
    rating: 5,
    service: 'Implantatsiya',
    initials: 'ST',
    color: '#00C9B1',
  },
  {
    id: 2,
    name: 'Dilnoza Mirzayeva',
    text: 'Tish oqartirish natijasi ajoyib! Bir seansda 8 ton yorqinlashdi. Barcha do\'stlarimga tavsiya qilaman.',
    rating: 5,
    service: 'Tish Oqartirish',
    initials: 'DM',
    color: '#7C6FFF',
  },
  {
    id: 3,
    name: 'Bobur Hamidov',
    text: 'Klinika juda zamonaviy va toza. Bepul konsultatsiya berishdi, narxlar ham adolatli. 10/10!',
    rating: 5,
    service: 'Umumiy Tekshiruv',
    initials: 'BH',
    color: '#FF6B6B',
  },
  {
    id: 4,
    name: 'Gulnora Saidova',
    text: 'Farzandim breketlar takdi qilinganida qo\'rquvchi edi. Dr. Rashidova u bilan juda samimiy ishladi.',
    rating: 5,
    service: 'Pediatrik Xizmat',
    initials: 'GS',
    color: '#FFB800',
  },
];

export const stats = [
  { value: '15,000+', label: 'Mamnun Bemor' },
  { value: '25+', label: 'Mutaxassis Shifokor' },
  { value: '20+', label: 'Yillik Tajriba' },
  { value: '98%', label: 'Muvaffaqiyat Darajasi' },
];

export const workingHours = [
  { day: 'Dushanba — Juma', hours: '08:00 — 20:00' },
  { day: 'Shanba', hours: '09:00 — 17:00' },
  { day: 'Yakshanba', hours: 'Dam olish kuni' },
];

export const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
];
