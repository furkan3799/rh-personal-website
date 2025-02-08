const logotext = "VITA AYUR READY";
const meta = {
  title: "Robert Herzog",
  description:
    "Ich bin Robert Herzog, Yogalehrer, Meister der ayurvedischen Küche und Ernährungsexperte",
};

const introdata = {
  title: "Ich bin Robert Herzog",
  animated: {
    first: "Yogalehrer",
    second: "Meister der ayurvedischen Küche",
    third: "Ernährungsexperte",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
  your_img_url: require("./assets/images/robert_meditating.jpeg"),
};

const dataabout = {
  title: "Über mich",
  aboutme:
    "Ich bin Robert Herzog, Yogalehrer, Meister der ayurvedischen Küche und Ernährungsexperte",
};
const worktimeline = [
  {
    jobtitle: "Yogalehrer",
    where: "Yadfim Yoga Studio",
    date: "2020",
  },
  {
    jobtitle: "Meister der ayurvedischen Küche",
    where: "Aloha Ayurveda",
    date: "2020",
  },
  {
    jobtitle: "Ernährungsexperte",
    where: "Institut",
    date: "2020",
  },
];

const skills = [
  {
    name: "Python",
    value: 90,
  },
  {
    name: "Djano",
    value: 85,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "React",
    value: 60,
  },
  {
    name: "Jquery",
    value: 85,
  },
];

const services = [
  {
    title: "Yoga-Coaching",
    description:
      "Ich bin Yogalehrer und biete Yoga-Coaching an. Ich unterstütze dich bei der Entwicklung deiner persönlichen Yoga-Praxis.",
  },
  {
    title: "Ayurveda-Coaching",
    description:
      "Ich bin Meister der ayurvedischen Küche und biete Ayurveda-Coaching an. Ich unterstütze dich bei der Entwicklung deiner persönlichen Ayurveda-Praxis.",
  },
  {
    title: "Ernährungsleitung",
    description:
      "Ich bin Ernährungsexperte und biete Ernährungsleitung an. Ich unterstütze dich bei der Entwicklung deiner persönlichen Ernährung.",
  },
];

const dataportfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },

  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/550/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "robert.herzog@gmail.com",
  YOUR_FONE: "+49 176 300 33 333",
  description:
    "Falls du gerne mehr Informationen haben, neue Rezepte erhalten oder ein persönliches Coaching vereinbaren möchtest, kontaktiere mich gerne.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  facebook: "https://www.facebook.com/profile.php?id=100090448808284",
  linkedin: "https://www.linkedin.com/in/robert-herzog-931403250/",
  instagram: "https://www.instagram.com/robert.herzog.golf/",
};

export const recipes = [
  {
    id: "apfelstrudel",
    title: "Apfelstrudel",
    date: "2024-03-20",
    description:
      "Klassischer österreichischer Apfelstrudel mit knusprigem Strudelteig",
    image:
      "https://ayurveda-maharishi.net/wp-content/uploads/2023/03/ayurveda-food.jpg",
    prepTime: 60,
    difficulty: "Mittel",
    category: "Desserts",
    tags: ["Österreichisch", "Traditionell", "Vegetarisch"],
    ingredients: [
      "4 große Äpfel",
      "100g Butter",
      "100g Zucker",
      "1 TL Zimt",
      "100g Rosinen",
      "200g Strudelteig",
    ],
    instructions: [
      "Äpfel schälen und in kleine Stücke schneiden",
      "Butter schmelzen",
      "Äpfel mit Zucker und Zimt mischen",
      "Strudelteig ausrollen",
      "Mit geschmolzener Butter bestreichen",
      "Apfelmischung auf den Teig geben",
      "Strudel einrollen",
      "Bei 180°C für 30-35 Minuten backen",
    ],
    tips: "Der Strudel schmeckt am besten warm mit einer Kugel Vanilleeis serviert.",
  },
];

export const events = [
  {
    id: "ayurveda-workshop-april",
    title: "Ayurveda Kochworkshop",
    date: "15. April 2024",
    time: "14:00 - 18:00",
    location: "Yoga Studio München",
    description:
      "Lernen Sie die Grundlagen der ayurvedischen Küche in diesem praktischen Workshop. Wir werden gemeinsam verschiedene Gerichte zubereiten und die wichtigsten Prinzipien der ayurvedischen Ernährung kennenlernen.",
    image:
      "https://ayurveda-maharishi.net/wp-content/uploads/2023/03/ayurveda-food.jpg",
    price: "89€",
    spots: "10 Plätze verfügbar",
  },
  {
    id: "yoga-retreat-mai",
    title: "Yoga & Meditation Retreat",
    date: "1. Mai 2024",
    time: "09:00 - 17:00",
    location: "Wellness Center Stuttgart",
    description:
      "Ein Tag voller Entspannung mit Yoga, Meditation und gesundem Essen. Perfekt für alle, die eine Auszeit vom Alltag suchen und neue Energie tanken möchten.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000",
    price: "120€",
    spots: "8 Plätze verfügbar",
  },
  {
    id: "meditation-workshop",
    title: "Meditation & Achtsamkeit",
    date: "20. Mai 2024",
    time: "18:30 - 20:30",
    location: "Online Workshop",
    description:
      "In diesem Online-Workshop lernen Sie die Grundlagen der Meditation und Achtsamkeit kennen. Ideal für Anfänger und Fortgeschrittene.",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1000",
    price: "45€",
    spots: "Unbegrenzte Plätze",
  },
  {
    id: "nutrition-seminar",
    title: "Gesunde Ernährung Seminar",
    date: "5. Juni 2024",
    time: "10:00 - 16:00",
    location: "Gesundheitszentrum Frankfurt",
    description:
      "Ein umfassendes Seminar über gesunde Ernährung, Nährstoffe und wie Sie Ihre Ernährung nachhaltig optimieren können.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000",
    price: "95€",
    spots: "15 Plätze verfügbar",
  },
];

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
