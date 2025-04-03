import { DateTime } from "luxon";

export const site = {
  title: "Processing & Automation Consultancy Solutions",
  shortTitle: "PACS LLC",
  links: [
    { type: "site", href: "https://pacsllc.net" },
    {
      type: "linkedin",
      icon: "fa6-brands:linkedin",
      value: "pacsllc",
      href: "https://www.linkedin.com/company/pacsllc/",
    }, // FIX
    {
      type: "instagram",
      icon: "fa6-brands:instagram",
      value: "pacs_llc",
      href: "https://www.instagram.com/pacs_llc/",
    }, // FIX
    {
      type: "phone",
      icon: "fa6-solid:phone",
      value: "(773) 474-9701",
      href: "tel:+17734749701",
    }, // FIX
    {
      type: "email",
      icon: "fa6-solid:envelope",
      value: "info@pacsllc.net",
      href: "mailto:info@pacsllc.net",
    },
    { type: "location", icon: "fa6-solid:globe", value: "NY / NJ" }, // FIX
  ],
};

type Card = {
  icon: string | null;
  title: string;
  description: string;
};

export type Page = {
  name: string;
  href: string;
  title?: string;
};

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
  products: PageProducts;
  services: PageServices;
  articles: PageArticles;
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
    links: { type: string; value: string; href: string }[];
  }[];
};

type PageArticles = Page & {
  name: "articles";
  data: {
    overview: { imageSource: string; summary?: string };
    name: string;
    href: string;
    title: string;
    author?: string;
    authorImageSource?: string;
    contentImageSource?: string;
    content: string;
    creationDate: DateTime;
    expirationDate?: DateTime;
  }[];
};

type PageProducts = Page & {
  name: "products";
  href: "/products";
  items: { tagline: string; title: string; description: string }[];
};

type PageServices = Page & {
  name: "services";
  href: "/services";
  consultancy: {
    title: string;
    description: string;
    items: { icon: string; title: string }[];
  };
  management: {
    title: string;
    description: string;
    items: { icon: string; title: string }[];
  };
  controlSystems: {
    title: string;
    description: string;
  };
  study: {
    title: string;
    items: { icon: string; title: string }[];
  };
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
      {
        name: "connectOnLinkedin",
        value: "Connect on LinkedIn",
        href: "https://www.linkedin.com/company/pacsllc/",
      },
      {
        name: "connectOnLinkedinShort",
        value: "Connect!",
        href: "https://www.linkedin.com/company/pacsllc/",
      },
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
        icon: "fa6-solid:angle-right",
        title: "Service 1",
        description:
          "Veniam exercitation eiusmod nostrud nisi nulla ex anim reprehenderit qui. Elit laboris est dolore commodo adipisicing proident incididunt velit elit qui ad excepteur proident ut. Consectetur incididunt enim et est consequat. Dolor dolore do quis mollit commodo voluptate ut incididunt magna culpa.",
      },
      {
        icon: "fa6-solid:angle-right",
        title: "Service 2",
        description:
          "Laborum fugiat fugiat commodo laborum ea exercitation non Lorem. Eu ad est laborum laboris voluptate occaecat consectetur proident ad. Reprehenderit amet sunt consequat nisi id veniam elit incididunt elit. Labore ut consectetur amet eu consequat pariatur sit laborum Lorem ipsum veniam nulla ad. Laborum consectetur occaecat aliqua pariatur.",
      },
      {
        icon: "fa6-solid:angle-right",
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
        " Our solutions are proven and designed based on the best practices in the fine art of engineering and are backed by our long experience in field work. We build our systems in a modular fashion and deliver them fully factory tested prior to shipping for rapid commissioning. Our turnkey modular approach results in successful quick implementation with an efficient high rate of return on investment.",
    },
    vision: {
      title: "PACS Vision",
      content:
        "PACS understands that having a single source of project support simplifies and expedites decision-making, coordination, and execution. PACS consolidates responsibilities for engineering, procurement, installation inspection and start-up assistance, and can provide turnkey blending and manufacturing solutions. From the outskirts of New York City we serve the world. ",
    },
  },
  products: {
    title: "Products",
    description: `<p>PACS delivers modular automation and logistics solutions engineered to slash energy spend, optimize labor, and adapt seamlessly to shifting demands. Built for agile industries: scalable, portable, and operator-free.</p>
      <p><em>Automation simplified. Productivity amplified.</em><p>`,
    items: [
      {
        icon: "fa6-solid:angle-right",
        title: "RDU",
        description:
          "Fully automated decanting—zero operators needed. Self-identifies barcodes, precision-aligns lance with drum bung.",
      },
      {
        icon: "fa6-solid:angle-right",
        title: "C3BU",
        description:
          "Skid-mounted lubricant blender. Container-portable, operator-free blending—deploy anywhere, anytime.",
      },
      {
        icon: "fa6-solid:angle-right",
        title: "ARCU",
        description:
          "High-temp efficiency without hot oil systems. Slashes energy costs in thermal processes.",
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
      image: "carla.jpg",
      name: "Carla Campopiano",
      title: "Chief Executive Officer",
      bio: "Co-founder of PACS LLC, is a dynamic entrepreneur with a rich background in the arts. Her diverse experience spans management, networking, marketing, and  management of change. Her strategic expertise has significantly expanded PACS LLC’s industry presence. Carla’s leadership fosters workforce productivity enhancements, driving innovative solutions and cost-effective results, solidifying PACS LLC’s pioneering status.",
      links: [{ type: "email", value: "", href: "" }],
    },
    {
      image: "pablogarce.jpg",
      name: "Pablo Garce",
      title: "President",
      bio: "Migrated to the US in 1997. Worked in various technical and commercial roles for Mid America Eng., FMC, FMC Technologies, Emerson, ABB and PACS as business development manager and sales and marketing director. Design and developed several downstream oil and gas processing and controlling units for among others grease, metal working fluids and lubricants, including robotic decanting systems and piggable transfer equipment for which holds patents.",
      links: [
        { type: "email", value: "pablo.garce@pacsllc.net", href: "" },
        { type: "linkedin", value: "", href: "" },
      ],
    },
    {
      image: "cesar.jpg",
      name: "Cesar Campopiano",
      title: "Project Coordinator",
      bio: "As a licensed architect specializing in energy-efficient design and project management, I lead initiatives that prioritize precision and sustainability. My role as a project coordinator centers on delivering high-quality outcomes on time and within scope, ensuring every project harmonizes operational efficiency with meticulous execution.",
      links: [
        {
          type: "email",
          value: "cesar.campopiano@pacsllc.net",
          href: "mailto:cesar.campopiano@pacsllc.net",
        },
        { type: "phone", value: "+54 3812468054", href: "tel:+543812468054" },
        {
          type: "linkedin",
          value: "cesar-campopiano",
          href: "https://www.linkedin.com/in/cesar-campopiano-271845103/",
        },
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
      overview: {
        imageSource: "/ilma.jpeg",
        // summary: "description",
      },
      name: "ilma-2024",
      href: "/articles/2024-09-30-ilma-2024",
      title: "ILMA 2024",
      // author: "Pablo Garce",
      // authorImageSource: "/pablogarce.jpg",
      content: "YOUTUBE VIDEO",
      creationDate: DateTime.fromISO("2024-09-30"),
      expirationDate: DateTime.fromISO("2025-01-01"),
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
      creationDate: DateTime.fromISO("2024-06-10"),
      expirationDate: DateTime.fromISO("2025-01-01"),
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
      creationDate: DateTime.fromISO("2024-03-31"),
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
      `,
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
      creationDate: DateTime.fromISO("2024-03-15"),
      expirationDate: DateTime.fromISO("2025-01-01"),
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

const pageProducts: PageProducts = {
  name: "products",
  href: "/products",
  items: [
    {
      tagline: "Robotic Drum Unit",
      title: "RDU",
      description:
        "Fully automated decanting—zero operators needed. Self-identifies barcodes, precision-aligns lance with drum bung.",
    },
    {
      tagline: "Skid Mounted Lubricating Oil Blending Unit",
      title: "C3BU",
      description:
        "Skid-mounted lubricant blender. Container-portable, operator-free blending—deploy anywhere, anytime.",
    },
    {
      tagline: "Advanced Reactor Unit",
      title: "ARCU",
      description:
        "High-temp efficiency without hot oil systems. Slashes energy costs in thermal processes.",
    },
  ],
}; // pageProducts

const pageServices: PageServices = {
  name: "services",
  href: "/services",
  consultancy: {
    title: "Consultancy Services",
    description: "We offer cost-effective and tailored consultancy",
    items: [
      { icon: "fa6-solid:angle-right", title: "Feasibility analysis" },
      { icon: "fa6-solid:angle-right", title: "ROI studies" },
      {
        icon: "fa6-solid:angle-right",
        title: "Pre-purchase site walkthroughs",
      },
      { icon: "fa6-solid:angle-right", title: "Plant & equipment design" },
      { icon: "fa6-solid:angle-right", title: "Design reviews" },
    ],
  },

  management: {
    title: "Management services",
    description:
      "With decades of experience and a vast network in the field, we are your trusted coordinator ensuring projects are on schedule and within budget.\nManagement: Includes eng. studies, procurement, scheduling, testing (Dry & FAT), installation, commissioning, & optimization.",
    items: [
      { icon: "fa6-solid:angle-right", title: "Engineering" },
      { icon: "fa6-solid:angle-right", title: "Procurement" },
      { icon: "fa6-solid:angle-right", title: "Project management" },
      { icon: "fa6-solid:angle-right", title: "Testing & installation" },
      {
        icon: "fa6-solid:angle-right",
        title: "Commissioning & Start up optimization",
      },
    ],
  },

  controlSystems: {
    title: "Control System Proprietary Bach Control Software",
    description:
      "BACH Control SW: Modular control systems with PLC & PC-based HMI.\nPACS LLC Control systems are modular, scalable, and adaptable. From small units to plant-wide integration, our systems are designed for flexibility.\nPLC unit for real-time control.\nPC-based HMI for production order initiation, process monitoring, control, and historical data recording.",
  },

  study: {
    title: "Study",
    items: [
      { icon: "fa6-solid:angle-right", title: "Engineering studies" },
      { icon: "fa6-solid:angle-right", title: "Procurement services" },
      {
        icon: "fa6-solid:angle-right",
        title: "Project management and scheduling services",
      },
      { icon: "fa6-solid:angle-right", title: "Dry & FAT tests" },
      {
        icon: "fa6-solid:angle-right",
        title: "Installation & installation supervision",
      },
      { icon: "fa6-solid:angle-right", title: "Start up and commissioning" },
      {
        icon: "fa6-solid:angle-right",
        title: "Operational performance & optimization",
      },
    ],
  },
}; // pageServices

export const pages: Pages = [
  pageIndex,
  pageAbout,
  pageProducts,
  pageServices,
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
