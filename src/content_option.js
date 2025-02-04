const logotext = "ROBERT";
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
  your_img_url:
    "https://lh5.googleusercontent.com/z7kkOS1zahA6AZ3GPK0kqLYrDQb_M8qPl-PQofy42LVXM4pl8HRcru3pGr8q66XcweOVqX0R0hLEdPP1HdoxfGlNJ2EwKQhlGeFYH1G0yVqzcZouiKhVAuLE3phAiX52=w1280",
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
  github: "https://github.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
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
