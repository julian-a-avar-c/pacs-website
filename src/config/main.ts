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
  icon: string;
  title: string;
  description: string;
};

export type Page = {
  name: string;
  href: string;
  title?: string;
};

type PageIndex = Page & {
  name: "index";
  landingHero: {
    title: string;
    buttons: {
      name: string;
      value: string;
      href: string;
    }[];
  };
  cards: Card[];
  services: {
    title: string;
    description: string;
    items: Card[];
  };
  content: {
    mission: { title: string; content: string };
    vision: { title: string; content: string };
  };
  products: {
    title: string;
    description: string;
    items: Card[];
  };
};

type PageAbout = Page & {
  name: "about";
  content: string;
  people: {
    image: string;
    name: string;
    title: string;
    bio: string;
    links: { type: string; href: string }[];
  }[];
};

type PageArticles = Page & {
  name: "articles";
  data: {
    overview: { imageSource: string; summary: string };
    name: string;
    href: string;
    title: string;
    author: string;
    authorImageSource: string;
    contentImageSource?: string;
    content: string;
    shortDate: { day: string; month: string };
    longDate: string;
  }[];
};

const pageIndex: PageIndex = {
  name: "index",
  href: "/",
  landingHero: {
    title: "",
    buttons: [
      {
        name: "button",
        value: "Talk to Sales",
        href: "mailto:info@pacsllc.net",
      },
      { name: "connectOnLinkedin", value: "Connect on LinkedIn", href: "https://www.linkedin.com/company/pacsllc/" },
      { name: "connectOnLinkedinShort", value: "Connect!", href: "https://www.linkedin.com/company/pacsllc/" },
    ],
  },
  cards: [
    {
      icon: "fa6-solid:circle-check",
      title: "Solutions",
      description:
        "Our solutions are proven and designed based on the best practices in the fine art of engineering and are backed by our long experience in field work",
    },
    {
      icon: "fa6-solid:gears",
      title: "Systems",
      description:
        "We build our systems in a modular fashion and deliver them fully factory tested prior to shipping for rapid commissioning.",
    },
    {
      icon: "fa6-solid:key",
      title: "Turnkey",
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
      image: "pablogarce.jpg",
      name: "Pablo Garce",
      title: "President",
      bio: "Ea veniam aute do occaecat veniam consectetur ipsum excepteur proident consectetur ullamco eiusmod. Mollit et id consequat exercitation ut officia aliquip commodo deserunt commodo. Pariatur eu duis esse irure excepteur irure deserunt eiusmod incididunt consectetur non velit eu proident.",
      links: [
        { type: "email", href: "pablo.garce@pacsllc.net" },
        { type: "linkedin", href: "" },
      ],
    },
    {
      image: "carla.jpg",
      name: "Carla Campopiano",
      title: "Chief Executive Officer",
      bio: "Sunt labore et ipsum dolor adipisicing. Veniam cupidatat irure culpa est exercitation mollit consectetur tempor anim officia nulla in. Exercitation proident sint qui dolor enim. Nostrud amet non ex sint cillum sunt non et magna deserunt sit aliqua nulla.",
      links: [{ type: "email", href: "" }],
    },
    {
      image: "cesar.jpg",
      name: "Cesar Campopiano",
      title: "Project Coordinator",
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
      // { params: { article: "2024-09-30-ilma-2024" }},
      // { params: { article: "2024-06-10-nlgi-2024" }},
      // { params: { article: "2024-03-31-sustainable-challanges" }},
      // { params: { article: "2024-03-15-lubricant-expo-2024" }},
      overview: {
        imageSource: "/ilma.jpeg",
        summary: "description",
      },
      name: "ilma-2024",
      href: "/articles/2024-09-30-ilma-2024",
      title: "ILMA 2024",
      author: "Pablo Garce",
      authorImageSource: "/pablogarce.jpg",
      content: "YOUTUBE VIDEO",
      shortDate: { day: "30", month: "Sep" },
      longDate: "September 30th, 2024",
    },
    {
      overview: {
        imageSource: "/g3.jpg",
        summary:
          "Join us at the National Lubricating Grease Institute Annual Meeting in San Antonio! We are delighted to announce that our expert, Pablo Garce, will present",
      },
      name: "nlgi-2024",
      href: "/articles/2024-06-10-nlgi-2024",
      title: "NLGI 2024",
      author: "Pablo Garce",
      authorImageSource: "/pablogarce.jpg",
      contentImageSource: "/NLGI-1.jpg",
      content: `
        <p>Join us at the National Lubricating Grease Institute Annual Meeting in San Antonio!</p>
        <p>We are delighted to announce that our expert, Pablo Garce, will present three essential talks at the National Lubricating Grease Institute Annual Meeting.</p>
        <h2>Presentation Schedules</h2>
        <ol>
          <li>Maximizing efficiency: Smart solutions for updating facilities 🕘 9:00 AM – 9:45 AM</li>
          <li>Improving safety in grease manufacturing: Lessons from the Chemtool incident 🕙 2 PM – 2:45 PM</li>
          <li>Maximizing Return on Investment: Strategies to obtain quick results 🕚 2 PM – 2:45 PM</li>
        </ol>
        <p>Learn how to improve efficiency, ensure safety, and drive return on investment in grease manufacturing. 📅 Date: June 10</p>
        <p>📍 Location: San Antonio, Texas</p>
        <p>RSVP now via the link in our bio!</p>
        <a href="https://acortar.link/OKIs6q">registration link</a>
        <a href="https://www.facebook.com/pacsllcUS">https://www.facebook.com/pacsllcUS</a>
        <a href="https://www.instagram.com/pacs_llc/">https://www.instagram.com/pacs_llc/</a>
        <a href="https://www.linkedin.com/company/pacsllc/">https://www.linkedin.com/company/pacsllc/</a>
      `,
      shortDate: { day: "10", month: "Jun" },
      longDate: "June 10th, 2024",
    },
    {
      overview: {
        imageSource: "/ilma.jpeg",
        summary:
          "By embracing sustainable solutions tailored to their specific needs, organizations can drive efficiency, fortify operations against uncertainties, and pave the way for a brighter future",
      },
      name: "sustainable-challanges",
      href: "/articles/2024-03-31-sustainable-challanges",
      title: "Navigating Challenges with Sustainable Solutions",
      author: "Pablo Garce",
      authorImageSource: "/pablogarce.jpg",
      shortDate: { day: "31", month: "Mar" },
      longDate: "March 31st, 2024",
      content: `
        IMG
        <p>In project management, the pursuit of improvement while concurrently seeking cost-effective solutions presents a nuanced challenge, especially in oil related industries where efficiency is paramount. The quest for better outcomes must be balanced with the imperative to contain costs, requiring a delicate approach.</p>
        <p>For organizations in the oil related industry, where projects are often large-scale and capital-intensive, the primary issue arises from the inherent tension between the desire to enhance project outcomes and the imperative to contain costs.</p>
        <p>Organizations are often tasked with improving processes, reduce production cost, enhance safety, increasing productivity, or implementing new technologies to stay competitive and adapt to evolving industry standards. However, these improvements typically come with associated expenses, including investment in resources, technology upgrades, and personnel training.</p>
        <p>The challenge lies in achieving these improvements without resorting to expensive investments that may strain the project budget. Instead, organizations require a strategic and tailored approach that maximizes efficiency and cost-effectiveness while minimizing financial risk. By prioritizing the right approach over costly investments, organizations can achieve sustainable improvements that drive long-term success.</p>
        <p>This is where a consultancy company with long-term experience and a commitment to tailored solutions comes into play. By leveraging scholarly research, industry expertise, and practical insights, such a company can help navigate the tension between improvement and cost-effectiveness. Through thorough cost-benefit analyses and prioritization of initiatives, organizations can identify areas for sustainable improvement that deliver maximum value within budget constraints.</p>
        <p>Furthermore, effective communication and collaboration among project stakeholders are essential to ensure alignment on improvement priorities and budgetary considerations. With a culture of accountability and transparency, decisions can be made collaboratively with a clear understanding of the trade-offs involved.    </p>
        <p>In the realm of facility management, the pursuit of improvement is perpetual among a dynamic market. Facilities across industries grapple with challenges like enhancing efficiency, reducing costs, risk and adapting to shifts brought by energy cost, new regulations, environmental constrains or electric cars—all while embracing sustainability. As organizations seek to address these issues without resorting to traditional big company expensive solutions, the challenge lies in finding sustainable alternatives that fortify operations against future uncertainties.</p>
        IMG
        <p>By embracing sustainable solutions tailored to their specific needs, organizations can drive efficiency, fortify operations against uncertainties, and pave the way for a brighter future. With a focus on harnessing the power of automation and resilience-building, they can navigate facility improvement confidently, ensuring not just a choice, but the surest path to long-term success.</p>
        <p>Shall we delve into sustainable solutions, driving efficiency, fortifying facility operations, and embracing automation for a brighter future?</p>
      `
    },
    {
      overview: {
        imageSource: "/post001.jpg",
        summary:
          "Lubricant Expo is North Americas newest exhibition and conference, connecting lubricant solution providers with the full range of end-user buyers, as well as the entire",
      },
      name: "lubricant-expo-2024",
      href: "/articles/2024-03-15-lubricant-expo-2024",
      title: "Lubricant Expo 2024",
      author: "Pablo Garce",
      authorImageSource: "/pablogarce.jpg",
      shortDate: { day: "15", month: "Mar" },
      longDate: "March 15th, 2024",
      contentImageSource: "/post001.jpg",
      content: `
      <p><strong>Lubricant Expo is North Americas newest exhibition and conference, connecting lubricant solution providers with the full range of end-user buyers, as well as the entire chemical and equipment supply chain with thousands of engineers and executives in attendance.</strong></p>
      <p>Join us at booth 724 for a conversation about cutting-edge lubrication solutions!</p>
      <p>Here’s our conversation schedule:</p>
      <ul>
        <li>Tuesday the 19th: Our president and founder, Pablo Garcé, with 30 years of experience, will discuss the robotic drum decanting unit.</li>
        <li>Wednesday the 20th:</li>
        <li>11:15-12:30: Explore our innovative Enviroflex solution, revolutionizing the oil refining process with its efficiency and sustainability.</li>
        <li>15:30-15:55: Learn about the pigging system, a breakthrough technology enhancing pipeline cleaning and product recovery.</li>
        <li>Free consultations will be available throughout the week.</li>
      </ul>
      <p>Do you need more information or have doubts?</p>
      <p>Come to us and we will advise you in a personalized way in 15 minutes, we provide excellent services. We will be in contact by LinkedIn or Instagram to schedule 7 free consultation in each social media.</p>      
      <p><a href="https://www.facebook.com/pacsllcUS">https://www.facebook.com/pacsllcUS</a>
      <p><a href="https://www.instagram.com/pacs_llc/">https://www.instagram.com/pacs_llc/</a>
      <p><a href="https://www.linkedin.com/company/pacsllc/">https://www.linkedin.com/company/pacsllc/</a>
      <p>For more expo information, visit <a href="https://www.youtube.com/watch?v=uZGbsp24N9Y">https://www.youtube.com/watch?v=uZGbsp24N9Y</a> and <a href="https://lubricantexpona.com/">https://lubricantexpona.com</a></p>
      `,
    },
  ],
}; // pageArticles

export type Pages = (
  | PageIndex
  | PageAbout
  | (Page & { name: "products" })
  | (Page & { name: "services" })
  | PageArticles
)[];

export type PageNames = Pages[number]["name"];

export type PagesByName = {
  index: PageIndex;
  about: PageAbout;
  products: Page & { name: "products" };
  services: Page & { name: "services" };
  articles: PageArticles;
};

export const pages: Pages = [
  pageIndex,
  pageAbout,
  { name: "products", href: "/products" },
  { name: "services", href: "/services" },
  pageArticles,
];

export const pagesByName: PagesByName = Object.fromEntries(
  pages.map((page) => [page.name, page])
) as PagesByName;

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
