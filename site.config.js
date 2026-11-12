/**
 * The Whitmore Practice — sample practice configuration
 * =====================================================
 * THIS IS THE ONLY FILE YOU NEED TO EDIT for a new client.
 *
 * Every therapist-specific detail lives here. The layout files
 * (HTML, CSS, JS) read from `window.SITE` and should be left alone.
 *
 * All names, fees, addresses and biography details below are
 * FICTIONAL placeholders. Replace every one of them.
 *
 * After editing, refresh the site. No build step is required.
 */
window.SITE = {
  practiceName: "The Whitmore Practice",
  therapistName: "Dr. Elise Whitmore",
  credentials: "Ph.D.",
  pronouns: "she/her",
  professionalTitle: "Licensed Clinical Psychologist",
  tagline: "For those who hold a great deal.",
  shortDescription:
    "Private psychotherapy for executives, founders, physicians and couples who prefer their work held with discretion.",
  heroSubhead:
    "A concierge practice in Manhattan. In person, and by video across New York, Connecticut and New Jersey.",
  acceptingClients: true,
  acceptingLabel: "A limited number of places are open",
  waitlistLabel: "The practice is presently full — a waitlist is open",

  logo: "",
  logoAlt: "",
  showMark: true,
  markSrc: "images/mark.svg",
  favicon: "images/favicon.svg",

  colors: {
    ivory: "#F3EDE3",
    parchment: "#FAF7F1",
    stone: "#E8E0D4",
    espresso: "#1A1512",
    ink: "#241E1A",
    umber: "#3D342C",
    taupe: "#6F655A",
    brass: "#C4B48A",
    brassDeep: "#6B5428"
  },

  photos: {
    hero: {
      src: "images/entrance.jpg",
      alt: "A modern house at dusk, warm light falling from an open doorway — placeholder photograph."
    },
    portrait: {
      src: "images/portrait.jpg",
      alt: "Placeholder portrait (stock photograph). Replace with the therapist's own photograph.",
      caption: "Placeholder photograph — replace with the therapist's portrait."
    },
    living: {
      src: "images/living.jpg",
      alt: "A contemporary sitting room with timber, stone and a long sofa — placeholder photograph."
    },
    room: {
      src: "images/room.jpg",
      alt: "A sunlit room with a leather sofa and a wall of windows looking onto trees — placeholder photograph."
    },
    city: {
      src: "images/city.jpg",
      alt: "Manhattan at sunrise, light along the avenues — placeholder photograph."
    },
    study: {
      src: "images/study.jpg",
      alt: "A wall of bound books in a private study — placeholder photograph."
    },
    architecture: {
      src: "images/architecture.jpg",
      alt: "Looking up at glass towers — placeholder photograph."
    },
    hallway: {
      src: "images/hallway.jpg",
      alt: "A quiet, considered bedroom with floor-to-ceiling windows — placeholder photograph."
    },
    house: {
      src: "images/house.jpg",
      alt: "A contemporary house among trees — placeholder photograph."
    },
    texture: {
      src: "images/texture.jpg",
      alt: "A soft, abstract surface — placeholder photograph."
    }
  },

  location: {
    city: "New York",
    state: "New York",
    address: "A discreet Midtown address",
    postalCode: "New York, NY",
    addressNote: "This is a sample location. The precise suite is shared after a consultation is arranged.",
    showAddress: true
  },
  telehealth: {
    available: true,
    states: ["New York", "Connecticut", "New Jersey"],
    note: "Video sessions are available when you are physically in New York, Connecticut or New Jersey at the hour of the session."
  },
  sessionFormats: ["In person", "Telehealth"],

  contact: {
    email: "hello@example.com",
    inquiryEmail: "hello@example.com",
    phone: "(555) 014-0900",
    phoneNote: "This is a placeholder number. Messages are returned within one business day.",
    hours: "Monday–Thursday, 8am–6pm ET",
    responseTime: "I reply within one business day."
  },
  social: {
    instagram: "",
    psychologyToday: "",
    linkedin: "",
    facebook: ""
  },

  siteUrl: "https://averrylstudio.github.io/therapist-site-template-luxe",
  language: "en",

  /* Optional Calendly (or any booking) URL. If empty, consult buttons go to the form. */
  bookingUrl: "",
  consultDuration: "Fifteen minutes",
  consultPrice: "Complimentary",
  consultTitle: "A private conversation, first.",
  consultText:
    "A complimentary fifteen-minute conversation — by telephone or video — to see whether the practice is the right room for what you are carrying. There is no obligation, and no need to arrive with a polished account of yourself.",
  consultCta: "Arrange a consultation",
  consultCtaBooked: "Choose a time",

  aboutLead:
    "I work with people who are used to being the one who holds everything — and who have decided, quietly, that they would like a place of their own.",
  bioShort:
    "I am a clinical psychologist in private practice in Manhattan. The work is careful, unhurried, and held in complete confidence.",
  bioLong: [
    "Most of the people who sit with me are accomplished, relied upon, and more tired than they let on. They are not looking for a slogan, a five-step plan, or a room in which they have to perform competence. They are looking for a serious conversation, held with discretion, about a life that has become too heavy to carry alone.",
    "My work is psychodynamic and contemporary. We pay attention to the patterns that formed early and still govern the boardroom, the marriage, the three in the morning. We also pay attention to what is asked of you this week. Both belong. I will not rush you, and I will not ask you to be more revealing than the hour can hold.",
    "This paragraph is sample colour for the template — a brief personal note the therapist is comfortable sharing, or remove it. (Dr. Elise Whitmore is a fictional practitioner.)"
  ],
  approachTitle: "The work",
  approach:
    "Therapy here is a private, weekly conversation. I listen closely, I speak when I have something useful to say, and I treat the hour as yours. The aim is not a more impressive version of you. It is a life that can be inhabited.",
  values: [
    { title: "Discretion", text: "A practice of this kind is only as good as its silence. What you bring here stays here." },
    { title: "Depth, without theatre", text: "We can work with the week in front of you, and with the older story underneath it. Neither is more serious than the other." },
    { title: "A room of your own", text: "You do not need to arrive composed. The hour is not a performance, and I am not an audience." },
    { title: "At a considered pace", text: "High-achieving lives are already fast. The work is allowed to take the time it takes." }
  ],
  trainingTitle: "Preparation",
  trainingNote:
    "The entries below are sample text. Replace them with the therapist's real training, license and memberships. Never invent credentials.",
  training: [
    "Licensed Clinical Psychologist — New York, Connecticut, New Jersey (placeholder)",
    "Ph.D., Clinical Psychology — Placeholder University (sample text, replace this)",
    "Postdoctoral fellowship in psychoanalytic psychotherapy (placeholder)",
    "Member of [professional association — replace, or remove this line]"
  ],

  specialtiesIntro:
    "The practice is deliberately small. I work with a limited number of adults and couples at any one time.",
  specialties: [
    { name: "Executive life", description: "The particular loneliness of being the one who decides. Ambition, succession, the cost of being relied upon, and the wish — not always spoken — to be a person as well as a role." },
    { name: "High achievement, privately held", description: "A public competence and a private exhaustion. Physicians, attorneys, founders, artists. The work is to make a life that is more than its output." },
    { name: "Couples", description: "For partners who want a more honest, less armoured way of being together — including those whose lives are lived, in part, in public." },
    { name: "Transitions of power and identity", description: "A sale, a departure, a diagnosis, a child, a grief. The moments at which a life rearranges itself, and asks to be thought about carefully." }
  ],
  servicesIntro:
    "Sessions are fifty minutes, in a private Midtown office or over a secure video connection. The practice is private-pay.",
  services: [
    { name: "Individual psychotherapy", duration: "Fifty minutes", description: "A weekly hour, held at a regular time. We set a direction together and revisit it as your life changes." },
    { name: "Couples psychotherapy", duration: "Sixty minutes", description: "For two people who want a more precise and more generous conversation than the one they have been having. (Placeholder — remove if not offered.)" },
    { name: "A first consultation", duration: "Fifteen minutes, complimentary", description: "A short, private conversation to ask your questions and to feel whether this is the right room. No obligation." }
  ],
  whoIWorkWith:
    "I work with adults. The practice welcomes clients of every race, ethnicity, gender, sexuality, faith and disability. If you are looking for a clinician for a child or adolescent, I will do my best to make a careful introduction.",
  whoIDont:
    "This is not a crisis service, and it is not a substitute for inpatient or intensive care. If that is what is needed, I will help you find it.",

  fees: {
    intro:
      "Money is part of the work, and it should be spoken about clearly. The figures below are placeholders and must be replaced with the therapist's real fees.",
    items: [
      { name: "Individual session, fifty minutes", price: "$400", note: "Placeholder fee." },
      { name: "Couples session, sixty minutes", price: "$475", note: "Placeholder fee. Remove if not offered." },
      { name: "First consultation, fifteen minutes", price: "Complimentary", note: "A private conversation to see whether we are a fit." }
    ],
    insuranceTitle: "Private-pay, in plain words",
    insurance:
      "This is a private-pay practice: you settle the fee directly, and I do not bill insurers on your behalf. If you have out-of-network benefits, I can provide a superbill — a precise receipt you may submit yourself for possible partial reimbursement. I cannot promise what any insurer will cover. I am glad to explain this on our first call.",
    slidingScaleTitle: "A note on reduced fees",
    slidingScale:
      "A very small number of reduced-fee places are reserved each year. Please mention this when you write, and we will see what is possible. (Placeholder policy — replace with the therapist's own.)",
    cancellationTitle: "The hour",
    cancellation:
      "The hour is held for you. Cancellations made with fewer than twenty-four hours' notice, and sessions that are missed, are charged in full, except in an emergency. (Placeholder policy — replace with the therapist's own.)",
    paymentNote: "Payment is due at the time of the session, by card or another method we agree upon."
  },

  faq: [
    { q: "How do I begin?", a: "Write through the form, or arrange a complimentary fifteen-minute consultation. I reply within one business day." },
    { q: "What is a first session like?", a: "We will speak about what brings you, what you have already tried, and what you hope might feel different. You do not need to tell your whole story. By the end we will both have a sense of whether the work should continue." },
    { q: "Do you offer telehealth?", a: "Yes, over a secure video connection, when you are in New York, Connecticut or New Jersey at the time of the session. In-person sessions take place in my Midtown office." },
    { q: "How often would we meet?", a: "Weekly, at a standing time, is the usual beginning. We may change this later, together." },
    { q: "Do you take insurance?", a: "I do not bill insurance directly. I can provide a superbill for possible out-of-network reimbursement. There is a fuller account on the Investment page." },
    { q: "Is this a crisis service?", a: "It is not, and I cannot provide emergency support. If you are in crisis, call or text 988 in the United States, or your local emergency number, or go to the nearest emergency department." }
  ],

  firstSessionIntro:
    "Beginning is often the most difficult part. Here, simply, is what happens next.",
  firstSession: [
    { title: "You write", text: "A short note is enough. You do not need the right words, or a finished account of yourself." },
    { title: "A first conversation", text: "If you wish, we begin with a complimentary fifteen-minute call — to ask your questions, and to feel whether this is the right room." },
    { title: "The first hour", text: "Fifty minutes, in person or by video. We go at your pace. You may decide afterwards whether it felt like a fit." },
    { title: "If we continue", text: "We find a regular time. If we do not, I will do what I can to point you carefully elsewhere. Either outcome is a good one." }
  ],

  /* "Find your path" selector — not a diagnostic tool */
  pathTitle: "Find your path",
  pathIntro: "A brief, private way to see which part of the practice may be right. There are no wrong answers, and this is not an assessment.",
  pathDisclaimer:
    "This is a short orientation, not a diagnosis, a screening tool, or a clinical opinion. It cannot tell you whether you 'should' begin therapy, and it does not reserve a place in the practice.",
  pathOptions: [
    {
      id: "executive",
      label: "The work has become the whole of my life.",
      recommend: "Individual psychotherapy",
      text: "A weekly hour for people whose public life is full, and whose private life has grown thin. We can begin with a short consultation."
    },
    {
      id: "couples",
      label: "My relationship needs a more honest conversation.",
      recommend: "Couples psychotherapy",
      text: "A careful room for two. If you would like to ask questions first, a complimentary consultation is open to you both."
    },
    {
      id: "transition",
      label: "I am in the middle of a significant change.",
      recommend: "Individual psychotherapy",
      text: "A sale, a departure, a diagnosis, a grief — the moments that rearrange a life. We can start with a fifteen-minute conversation."
    },
    {
      id: "private",
      label: "I want a discreet place to think.",
      recommend: "A first consultation",
      text: "You do not need a crisis, or a finished sentence, to begin. A private fifteen-minute conversation is a good place to start."
    }
  ],
  pathCta: "Arrange a consultation",

  crisisText:
    "If you are in crisis, call or text 988 (US) or your local emergency number. This website is not a crisis service and cannot provide emergency support.",
  emergencyFormNote:
    "This form is not for emergencies. If you are in crisis, call or text 988 (US) or your local emergency number, or go to your nearest emergency department.",

  /* Press / credentials strip — clearly placeholder, easy to hide */
  press: {
    show: true,
    heading: "Selected mentions",
    note: "Placeholder names — replace with real, permitted mentions, or set press.show to false.",
    items: [
      { name: "Publication One", href: "" },
      { name: "A Journal", href: "" },
      { name: "The Review", href: "" },
      { name: "Quarterly", href: "" }
    ]
  },

  articlesIntro:
    "Occasional notes from the practice. Short, and meant to be useful.",
  articles: [
    {
      title: "The first fifty minutes",
      eyebrow: "On beginning",
      date: "A sample essay",
      excerpt: "What to expect of a first hour, and what is not required of you before you walk in.",
      href: "article.html",
      image: "study",
      featured: true
    },
    {
      title: "On carrying a public life",
      eyebrow: "Placeholder",
      date: "A sample title",
      excerpt: "A second essay will go here — a considered note on discretion, ambition, and the cost of being seen.",
      href: "article.html",
      image: "architecture",
      featured: false
    },
    {
      title: "What private-pay actually means",
      eyebrow: "Placeholder",
      date: "A sample title",
      excerpt: "A third essay will go here — a clear, unhurried account of fees, superbills, and why the practice is structured this way.",
      href: "investment.html",
      image: "city",
      featured: false
    }
  ],
  article: {
    title: "The first fifty minutes",
    eyebrow: "On beginning",
    date: "A sample essay — replace with a real piece, or remove",
    dek: "You do not need the right words, a finished history, or a crisis that looks impressive. You need only to arrive.",
    image: "study",
    body: [
      "People often write to me as if they were applying for a post. They send a careful paragraph, or five, accounting for themselves: what they have achieved, what has come undone, why they think they qualify for an hour of someone else's attention. It is understandable. High-achieving lives are lived, for the most part, in rooms where one has to earn the chair.",
      "A first session is not that kind of room.",
      "You will sit, or you will appear on a screen. I will ask what brought you, and I will mean the question. You may answer it in a sentence, or you may need the whole fifty minutes to come near it. Both are all right. I will not ask you to tell me everything, and I will not be disappointed if you do not cry, or if you do. The hour is not a test of seriousness.",
      "What I am listening for is not a diagnosis, and it is not a performance of insight. I am listening for the thing you have been carrying, and for the way you carry it. We may speak about work, or a marriage, or a death, or a feeling you have not been able to name. We may speak about something that seems, at first, too small to have made you write to a stranger. It is rarely too small.",
      "By the end we will both know a little more. You will have a sense of whether my way of listening is useful to you. I will have a sense of whether I can be of help. If we are a fit, we will find a regular time. If we are not, that is not a failure — and I will, if I can, point you carefully toward someone who may be.",
      "This is a sample essay, written for the template. Replace it with a piece in the therapist's own voice, or remove the Insights section."
    ]
  },

  testimonials: {
    show: true,
    heading: "In their words",
    items: [
      { quote: "Client words will go here.", attribution: "Placeholder — not a real client" },
      { quote: "Client words will go here.", attribution: "Placeholder — not a real client" }
    ]
  },

  form: {
    subject: "Consultation request — The Whitmore Practice",
    thankYouPath: "thank-you.html",
    submitLabel: "Send my request",
    autoresponse:
      "Thank you for writing to The Whitmore Practice. This is an automatic confirmation that your message arrived. I will reply personally within one business day. If you are in crisis, please call or text 988 (US) or your local emergency number — this inbox is not monitored for emergencies.",
    consentText:
      "I understand this form is not for emergencies, and I am happy for the practice to reply to me by email or the method I chose above."
  },

  footerCredit: {
    show: true,
    text: "Site by Averryl Studio",
    url: "https://averryl.com"
  },

  closingTitle: "When you are ready.",
  closingText:
    "A short message is enough. We can begin with a fifteen-minute conversation, and with nothing decided in advance."
};
