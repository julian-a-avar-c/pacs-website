export const site = {
  title: "Processing & Automation Consultancy Solutions",
  shortTitle: "PACS LLC",
  links: [
    { type: "site", href: "https://pacsllc.net" },
    { type: "linkedin", href: "pacsllc" }, // FIX
    { type: "instagram", href: "pacsllc" }, // FIX
    { type: "phone", href: "000.000.0000" }, // FIX
    { type: "email", href: "info@pacsllc.net" },
    { type: "location", href: "NY / NJ" }, // FIX
  ],
};

type Card = {
  icon: string,
  title: string,
  description: string,
}

type Page = {
  name: string,
  href: string,
  title?: string,
}

type PageIndex = Page & {
  landingHero: {
    title: string;
    buttons: {
      name: string,
      value: string,
      href: string,
    }[],
  },
  cards: Card[],
  services: {
    title: string,
    description: string,
    items: Card[]
  },
  content: {
    mission: { title: string, content:string, },
    vision: { title: string, content:string, },
  },
  products: {
    title: string,
    description: string
    items: Card[]
  },
}

type PageAbout = Page & {
  content: string,
  people: {
    image: string,
    name: string,
    title: string,
    bio: string,
    links: { type: string, href: string, }[],
  }[]
}

type PageArticles = Page & {
  data: {
    name: string,
    href: string,
    title: string,
    content: string,
  }[]
}

const pageIndex: PageIndex = {
  name: "home",
  href: "/",
  landingHero: {
    title: "",
    buttons: [
      { name: "button", value: "Talk to Sales", href: "mailto:info@pacsllc.net", },
      { name: "connectOnLinkedin", value: "Connect on LinkedIn", href: "", },
      { name: "connectOnLinkedinShort", value: "Connect!", href: "", },
    ],
  },
  cards: [
    {
      icon: "fa6-solid:circle-question",
      title: "Solutions",
      description:
        "Our solutions are proven and designed based on the best practices in the fine art of engineering and are backed by our long experience in field work",
    },
    {
      icon: "fa6-solid:circle-question",
      title: "Our systems",
      description:
        "We build our systems in a modular fashion and deliver them fully factory tested prior to shipping for rapid commissioning.",
    },
    {
      icon: "fa6-solid:circle-question",
      title: "Turnkey modular approach",
      description:
        "Our turnkey modular approach results in successful quick implementation with an efficient high rate of return on investment.",
    },
  ],
  services: {
    title: "Services",
    description:
      "Distinctio fugiat dolor, nesciunt pariatur excepturi consectetur consequatur ipsum eum, eius quos perspiciatis ex nisi laudantium. Optio deleniti mollitia molestiae.\nSimilique natus sed tempora rerum deleniti mollitia dicta doloribus quo.",
    items: [
      {
        icon: "fa6-solid:circle-question",
        title: "Service 1",
        description:
          "Veniam exercitation eiusmod nostrud nisi nulla ex anim reprehenderit qui. Elit laboris est dolore commodo adipisicing proident incididunt velit elit qui ad excepteur proident ut. Consectetur incididunt enim et est consequat. Dolor dolore do quis mollit commodo voluptate ut incididunt magna culpa.",
      },
      {
        icon: "fa6-solid:circle-question",
        title: "Service 2",
        description:
          "Laborum fugiat fugiat commodo laborum ea exercitation non Lorem. Eu ad est laborum laboris voluptate occaecat consectetur proident ad. Reprehenderit amet sunt consequat nisi id veniam elit incididunt elit. Labore ut consectetur amet eu consequat pariatur sit laborum Lorem ipsum veniam nulla ad. Laborum consectetur occaecat aliqua pariatur.",
      },
      {
        icon: "fa6-solid:circle-question",
        title: "Service 3",
        description:
          "Labore fugiat nulla Lorem in pariatur dolor aliquip qui eu dolor. Fugiat incididunt non anim. Nisi quis enim incididunt velit excepteur ex officia qui reprehenderit qui eiusmod do duis voluptate id. Ea Lorem culpa esse laboris qui. In occaecat eiusmod cupidatat commodo labore excepteur occaecat.",
      },
    ],
  },
  content: {
    mission: {
      title: "PACS Mission",
      content:
        "Irure aliqua cillum proident sint eu dolor ex. Deserunt laborum Lorem duis consequat nisi laborum enim. Anim commodo qui exercitation ut esse quis commodo laborum occaecat. Officia consequat pariatur dolore fugiat et non esse irure occaecat occaecat ipsum enim elit ut. Sunt incididunt exercitation occaecat amet ad ad. Reprehenderit do occaecat Lorem.",
    },
    vision: {
      title: "PACS Vision",
      content:
        "Irure aliqua cillum proident sint eu dolor ex. Deserunt laborum Lorem duis consequat nisi laborum enim. Anim commodo qui exercitation ut esse quis commodo laborum occaecat. Officia consequat pariatur dolore fugiat et non esse irure occaecat occaecat ipsum enim elit ut. Sunt incididunt exercitation occaecat amet ad ad. Reprehenderit do occaecat Lorem.",
    },
  },
  products: {
    title: "Products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed impedit incidunt mollitia veniam dolor\nconsectetur quia repellendus aperiam explicabo, consequuntur, inventore necessitatibus cum autem. Laudantium voluptas dignissimos obcaecati perferendis?",
    items: [
      {
        icon: "fa6-solid:circle-question",
        title: "Product 1",
        description:
          "Reprehenderit do minim dolore exercitation deserunt commodo sit irure non anim. Quis aute minim Lorem quis qui ullamco minim ad adipisicing eiusmod elit. Exercitation ullamco nisi commodo tempor id sint ea et adipisicing cillum. Incididunt elit eu eu amet reprehenderit est aliqua eu. Id cillum fugiat id ullamco minim sint aliqua culpa quis enim. Labore in nostrud mollit proident mollit laborum fugiat. Laboris sint voluptate quis esse occaecat aliqua cillum anim fugiat duis irure. Exercitation incididunt ea qui.",
      },
      {
        icon: "fa6-solid:circle-question",
        title: "Product 2",
        description:
          "Magna deserunt ex ipsum pariatur. Ex excepteur deserunt commodo sint aliquip occaecat non. Nulla minim commodo ullamco dolore est cillum ipsum voluptate laborum nostrud do occaecat. Voluptate voluptate nostrud laborum aliqua ullamco culpa aute nulla. Incididunt ipsum consequat consectetur proident excepteur eiusmod duis proident do excepteur ea consectetur adipisicing esse. Dolore deserunt tempor consequat proident qui velit qui irure mollit cupidatat aliqua est mollit.",
      },
      {
        icon: "fa6-solid:circle-question",
        title: "Product 3",
        description:
          "Ad cillum incididunt eu dolor elit minim magna dolore eu tempor laboris voluptate consequat incididunt non. Culpa sit est cillum et nulla excepteur aute consequat do anim occaecat ad. Ad nisi qui cillum in deserunt reprehenderit occaecat laborum fugiat non proident sunt adipisicing excepteur consequat. Commodo non qui Lorem labore eu dolor sit sint ad laboris aliqua tempor cillum.",
      },
    ],
  },
}; // pageIndex
const pageAbout: PageAbout = {
  name: "about",
  href: "/about",
  title: "About",
  content: "",
  people: [
    {
      image: "",
      name: "Pablo Garce",
      title: "President",
      bio: "Ea veniam aute do occaecat veniam consectetur ipsum excepteur proident consectetur ullamco eiusmod. Mollit et id consequat exercitation ut officia aliquip commodo deserunt commodo. Pariatur eu duis esse irure excepteur irure deserunt eiusmod incididunt consectetur non velit eu proident.",
      links: [
        { type: "email", href: "" },
        { type: "linkedin", href: "" },
      ],
    },
    {
      image: "",
      name: "Carla Campopiano",
      title: "CEO",
      bio: "Sunt labore et ipsum dolor adipisicing. Veniam cupidatat irure culpa est exercitation mollit consectetur tempor anim officia nulla in. Exercitation proident sint qui dolor enim. Nostrud amet non ex sint cillum sunt non et magna deserunt sit aliqua nulla.",
      links: [{ type: "email", href: "" }],
    },
    {
      image: "",
      name: "Cesar Campopiano",
      title: "???",
      bio: "Ex commodo deserunt minim. Est tempor Lorem labore non veniam velit. Deserunt deserunt cupidatat aliqua amet nisi eiusmod sint laborum. Anim excepteur minim nisi eu laboris amet consequat in. Elit non velit incididunt ea sit aliquip reprehenderit ex ipsum nostrud nisi ipsum sint.",
      links: [
        { type: "email", href: "" },
        { type: "linkedin", href: "" },
        { type: "instagram", href: "" },
      ],
    },
  ],
}; // pageAbout
const pageArticles: PageArticles = {
  name: "articles",
  href: "/articles",
  title: "Articles",
  data: [
    {
      name: "article-1",
      href: "/articles/article-1",
      title: "Article 1",
      content: "",
    },
    {
      name: "article-2",
      href: "/articles/article-2",
      title: "Article 2",
      content: "",
    },
  ],
}; // pageArticles

type PagesByName = {
  "index": PageIndex,
  "about": PageAbout,
  "products": Page & { name: "products" },
  "services": Page & { name: "services" },
}

// {
//   index: PageIndex,
//   about: PageAbout,
//   products: { name: "products", href: "/products" },
//   services: { name: "services", href: "/services" },
// }

export const pagesByName: PagesByName = {
  "index": pageIndex,
  "about": pageAbout,
  "products": { name: "products", href: "/products" },
  "services": { name: "services", href: "/services" },
}

export const pages: PagesByName[keyof PagesByName][] = [
  pageIndex,
  pageAbout,
  { name: "products", href: "/products" },
  { name: "services", href: "/services" },
]

// export const pages: PageByName[] = {
//   byName: {
//     index: pageIndex,
//     about: pageAbout,
//     products: { name: "products", href: "/products" },
//     services: { name: "services", href: "/services" },
//   },
//   get all() {
//     return Object.values(this.byName).map((page) => structuredClone(page));
//   },
// };
