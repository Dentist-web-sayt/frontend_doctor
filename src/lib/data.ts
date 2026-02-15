export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
  duration: string;
  features: string[];
}
export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  education: string;
  image: string;
  rating: number;
  reviews: number;
  languages: string[];
  achievements: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Tishlarni Oqartirish",
    description:
      "Professional tishlarni oqartirish xizmati. Zamonaviy texnologiyalar yordamida tabassumingizni yanada yorqinroq qiling.",
    icon: "✨",
    price: "500,000 - 1,500,000 so'm",
    duration: "1-2 soat",
    features: [
      "Xavfsiz va og'riqsiz jarayon",
      "Natija bir necha yil saqlanadi",
      "Zamonaviy Amerika texnologiyasi",
      "Bepul konsultatsiya",
    ],
  },
  {
    id: 2,
    title: "Tish Implantatsiyasi",
    description:
      "Yo'qolgan tishlarni tiklashtirish uchun eng zamonaviy yechim. Shveytsariya va Germaniya ishlab chiqarish implantlari.",
    icon: "🦷",
    price: "3,000,000 - 8,000,000 so'm",
    duration: "2-6 oy",
    features: [
      "Umrbod kafolat",
      "Xalqaro sifat standartlari",
      "3D diagnostika",
      "Og'riqsiz o'rnatish",
    ],
  },
  {
    id: 3,
    title: "Ortodontiya (Breketlar)",
    description:
      "Tishlarni to'g'rilash va chiroyli tabassum yaratish. Har xil turdagi breketlar mavjud.",
    icon: "😁",
    price: "5,000,000 - 15,000,000 so'm",
    duration: "12-24 oy",
    features: [
      "Metal va keramik breketlar",
      "Ko'rinmas breketlar",
      "Oylik bepul ko'riklar",
      "To'lov rejasi mavjud",
    ],
  },
  {
    id: 4,
    title: "Tish Protezlari",
    description:
      "Yuqori sifatli tish protezlari tayyorlash. Qo'zimaydigan va qo'ziladigan protezlar.",
    icon: "👄",
    price: "1,000,000 - 20,000,000 so'm",
    duration: "1-3 hafta",
    features: [
      "Tabiy ko'rinish",
      "Uzoq muddatli xizmat",
      "Individual dizayn",
      "Tez moslashish",
    ],
  },
  {
    id: 5,
    title: "Tish Davolash",
    description:
      "Karies, pulpit va boshqa tish kasalliklarini davolash. Zamonaviy materiallar ishlatiladi.",
    icon: "🏥",
    price: "150,000 - 800,000 so'm",
    duration: "30-90 daqiqa",
    features: [
      "Og'riqsiz davolash",
      "Sifatli plombalar",
      "Kanal tozalash",
      "Bepul qayta ko'rik",
    ],
  },
  {
    id: 6,
    title: "Bolalar Stomatologiyasi",
    description:
      "Bolalar uchun maxsus davolash usullari. Qo'rqmasdan davolanish uchun qulay muhit.",
    icon: "👶",
    price: "100,000 - 500,000 so'm",
    duration: "30-60 daqiqa",
    features: [
      "Do'stona yondashuv",
      "O'yin xonasi",
      "Sovg'alar",
      "Ota-onalar bilan birgalikda",
    ],
  },
  {
    id: 7,
    title: "Tish Gigienasi",
    description:
      "Professional tishlarni tozalash va gigiyena. Tish toshi va налёт olib tashlash.",
    icon: "🦷",
    price: "200,000 - 400,000 so'm",
    duration: "45-60 daqiqa",
    features: [
      "Ultratovush tozalash",
      "Air Flow texnologiyasi",
      "Ftorlash",
      "Maslahat va ko'rsatmalar",
    ],
  },
  {
    id: 8,
    title: "Estetik Stomatologiya",
    description:
      "Vinetlar, lyuminer va tabassumni dizayn qilish. Hollywood tabassum yaratish.",
    icon: "🦷",
    price: "2,000,000 - 25,000,000 so'm",
    duration: "1-3 hafta",
    features: [
      "Kompyuter modellashtirish",
      "Har qanday rang tanlash",
      "Minimal tayyorlov",
      "Kafolatlangan natija",
    ],
  },
];

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Aziza Karimova",
    specialty: "Bosh shifokor, Terapevt-Stomatolog",
    experience: "15 yillik tajriba",
    education: "ToshDTI, Moskva tibbiyot akademiyasi",
    image: "/doctors/doctor1.jpg",
    rating: 4.9,
    reviews: 234,
    languages: ["O'zbek", "Rus", "Ingliz"],
    achievements: [
      "O'zbekiston eng yaxshi stomatologi 2023",
      "500+ muvaffaqiyatli implantatsiya",
      "Xalqaro sertifikatlar",
      "VIP mijozlar shifokor",
    ],
  },
  {
    id: 2,
    name: "Dr. Sardor Aliyev",
    specialty: "Implantolog, Jarroh-Stomatolog",
    education: "Germaniya Stomatologiya instituti",
    experience: "12 yillik tajriba",
    image: "/doctors/doctor2.jpg",
    rating: 4.8,
    reviews: 189,
    languages: ["O'zbek", "Rus", "Nemis"],
    achievements: [
      "Implantatsiya bo'yicha mutaxassis",
      "Germaniya texnologiyalari bo'yicha trening",
      "300+ murakkab operatsiyalar",
      "Xalqaro konferensiyalar ishtirokchisi",
    ],
  },
  {
    id: 3,
    name: "Dr. Nilufar Rahimova",
    specialty: "Ortodont, Breketlar mutaxassisi",
    experience: "10 yillik tajriba",
    education: "ToshDTI, AQSH ortodontiya kurslari",
    image: "/doctors/doctor3.jpg",
    rating: 5.0,
    reviews: 156,
    languages: ["O'zbek", "Ingliz", "Turk"],
    achievements: [
      "500+ muvaffaqiyatli breket davolash",
      "Ko'rinmas breketlar mutaxassisi",
      "Bolalar ortodontiyasi bo'yicha ekspert",
      "O'zbekiston ortodontlar uyushmasi a'zosi",
    ],
  },
  {
    id: 4,
    name: "Dr. Jamshid Tursunov",
    specialty: "Estetik Stomatolog, Protezist",
    experience: "18 yillik tajriba",
    education: "Rossiya Stomatologiya universiteti",
    image: "/doctors/doctor4.jpg",
    rating: 4.9,
    reviews: 267,
    languages: ["O'zbek", "Rus"],
    achievements: [
      "1000+ vinir o'rnatish",
      "Hollywood tabassum mutaxassisi",
      "Yuqori toifali shifokor",
      "VIP klinikalar maslahatchisi",
    ],
  },
  {
    id: 5,
    name: "Dr. Madina Sultonova",
    specialty: "Bolalar Stomatologa",
    experience: "8 yillik tajriba",
    education: "ToshDTI, Italiya pediatrik stomatologiya",
    image: "/doctors/doctor5.jpg",
    rating: 5.0,
    reviews: 198,
    languages: ["O'zbek", "Rus", "Italyan"],
    achievements: [
      "Bolalar bilan ishlashda ekspert",
      "Psixologik yondashuv",
      "1500+ mamnun bolalar",
      "Ota-onalarning sevimli shifokor",
    ],
  },
  {
    id: 6,
    name: "Dr. Bekzod Normatov",
    specialty: "Endodontist, Tish ildizi mutaxassisi",
    experience: "14 yillik tajriba",
    education: "Germaniya Stomatologiya universiteti",
    image: "/doctors/doctor6.jpg",
    rating: 4.8,
    reviews: 143,
    languages: ["O'zbek", "Nemis", "Rus"],
    achievements: [
      "Mikroskop ostida davolash",
      "Murakkab kanal tozalash",
      "800+ tishlarni saqlab qolish",
      "Zamonaviy texnologiyalar pioneeri",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Dilnoza Umarova",
    role: "Mijoz",
    comment:
      "MyDent klinikasida davolanganimdan juda mamnunman. Shifokorlar juda professional va mehribon. Tishlarimni implantatsiya qilishdan oldin qo'rqib turgan edim, lekin hamma narsa juda qulay va og'riqsiz o'tdi. Rahmat!",
    rating: 5,
    date: "2024-yil 15-yanvar",
  },
  {
    id: 2,
    name: "Rustam Abdullayev",
    role: "Mijoz",
    comment:
      "15 yildan beri tishlarimga e'tibor bermagan edim. Bu yerda breketlar qo'ydirdim va natija ajoyib! Dr. Nilufar juda malakali mutaxassis. Tavsiya qilaman!",
    rating: 5,
    date: "2024-yil 28-yanvar",
  },
  {
    id: 3,
    name: "Sevara Karimova",
    role: "Mijoz",
    Comment:
      "Bolalarimni faqat shu yerga olib boraman. Dr. Madina bolalar bilan ajoyib ishlaydi. Farzandlarim endi tish shifokoriga borishdan xursand bo'lishadi",
    rating: 5,
    date: "2024-yil 5-fevral"
  },
];

export const stats = [
  { label: "Masmun Mijozlar", value: " 15,000+", icon: "😊"},
  { lobel: "Professonal Shifokorlar", value: "25+", icon: "👨‍⚕️"},
  { lobel: "Yillik Tajriba", value: "20+", icon: "⭐"},
  { label: "Muvaffaqiyatli Operatsiyalar", value: "50,000", icon: "✅"}
];

