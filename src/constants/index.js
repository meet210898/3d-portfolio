import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    bootstrap,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    graphql
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    // {
    //   id: "work",
    //   title: "Work",
    // },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Node JS Developer",
      icon: backend,
    },
    {
      title: "Professional Web Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "graphql",
      icon: graphql,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  // const projects = [
  //   {
  //     name: "Fit Club",
  //     description:
  //     "A responsible gym website built on React.js using React hooks, modern CSS, framer-motion, Swiper.js, etc.",
  //     tags: [
  //       {
  //         name: "reactjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "css3",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "javascript",
  //         color: "yellow-text-gradient",
  //       },
  //       {
  //         name: "html5",
  //         color: "orange-text-gradient",
  //       },
  //     ],
  //     image: fit,
  //     source_code_link: "https://github.com/leogama09/react-fitclub",
  //     deployed_link: "https://react-fitclub.vercel.app/"
  //   },
  //   {
  //     name: "Real Estate",
  //     description:
  //     "A responsible Real Estate website built on React.js using React hooks, modern CSS, framer-motion, Swiper.js, etc.",
  //     tags: [
  //       {
  //         name: "reactjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "css3",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "javascript",
  //         color: "yellow-text-gradient",
  //       },
  //       {
  //         name: "html5",
  //         color: "orange-text-gradient",
  //       },
  //     ],
  //     image: homes,
  //     source_code_link: "https://github.com/leogama09/react-homes",
  //     deployed_link: "https://react-homes.vercel.app/"
  //   },
  //   {
  //     name: "E-commerce",
  //     description:
  //     "A responsible E-commerce website built on React.js using React hooks, modern CSS, framer-motion, Swiper.js, etc.",
  //     tags: [
  //       {
  //         name: "reactjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "css3",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "javascript",
  //         color: "yellow-text-gradient",
  //       },
  //       {
  //         name: "html5",
  //         color: "orange-text-gradient",
  //       },
  //     ],
  //     image: ecommerce,
  //     source_code_link: "https://github.com/leogama09/react-ecommerce",
  //     deployed_link: "https://react-ecommerce-gray.vercel.app/"
  //   },
  //   {
  //     name: "ChatGPT 2.0",
  //     description:
  //     "A responsible ChatGPT 2.0 using Open AI Api. I also used React hooks, tailwindcss, TanStack & auto-animate.",
  //     tags: [
  //       {
  //         name: "reactjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "tailwind",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "javascript",
  //         color: "yellow-text-gradient",
  //       },
  //       {
  //         name: "html5",
  //         color: "orange-text-gradient",
  //       },
  //     ],
  //     image: chatgpt,
  //     source_code_link: "https://github.com/leogama09/react-gpt-client",
  //     deployed_link: "https://react-gpt-client.vercel.app/"
  //   },
  //   {
  //     name: "Secret Word",
  //     description:
  //     "A game that consists about guessing the word! Built on React.JS",
  //     tags: [
  //       {
  //         name: "reactjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "css3",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "javascript",
  //         color: "yellow-text-gradient",
  //       },
  //     ],
  //     image: secret_word,
  //     source_code_link: "https://github.com/leogama09/secret-word-project",
  //     deployed_link: "https://leogama09.github.io/secret-word-project/"
  //   },
  //   {
  //     name: "To-do List",
  //     description:
  //     "A todo list built on React.JS & Typescript. Register your daily tasks!",
  //     tags: [
  //       {
  //         name: "reactjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "typescript",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "css3",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "javascript",
  //         color: "yellow-text-gradient",
  //       },
  //     ],
  //     image: todo,
  //     source_code_link: "https://github.com/leogama09/React-TS-Todo-List",
  //     deployed_link: "https://react-ts-todo-list-xi.vercel.app/"
  //   },
  //   {
  //     name: "GitHub API",
  //     description:
  //     "A GitHub API built on React.JS & Typescript. Search for any user on GitHub!",
  //     tags: [
  //       {
  //         name: "reactjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "typescript",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "css3",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "javascript",
  //         color: "yellow-text-gradient",
  //       },
  //       {
  //         name: "api",
  //         color: "green-text-gradient",
  //       },
  //     ],
  //     image: finder,
  //     source_code_link: "https://github.com/leogama09/github-api",
  //     deployed_link: "https://github-api-leogama09.vercel.app/"
  //   },
  //   {
  //     name: "Programming Quiz",
  //     description:
  //     "A programming quiz built on React.JS. Challenge yourself with many questions!",
  //     tags: [
  //       {
  //         name: "reactjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "css3",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "javascript",
  //         color: "yellow-text-gradient",
  //       },
  //     ],
  //     image: quiz,
  //     source_code_link: "https://github.com/leogama09/React-quiz",
  //     deployed_link: "https://react-quiz-one-psi.vercel.app/"
  //   },
  //   {
  //     name: "Pokemon Game",
  //     description:
  //       "A JavaScript Pokémon Game with HTML Canvas. Explore and battle!",
  //     tags: [
  //       {
  //         name: "html5",
  //         color: "orange-text-gradient",
  //       },
  //       {
  //         name: "css3",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "javascript",
  //         color: "yellow-text-gradient",
  //       },
  //     ],
  //     image: pokemon,
  //     source_code_link: "https://github.com/leogama09/Pokemon-JavaScript-Game",
  //     deployed_link: "https://pokemon-java-script-game.vercel.app/"
  //   },
  //   {
  //     name: "PHP Blog",
  //     description:
  //     "A blog for developers built on PHP. Discover new PHP articles!",
  //     tags: [
  //       {
  //         name: "php",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "css3",
  //         color: "blue-text-gradient",
  //       },
  //     ],
  //     image: php_blog,
  //     source_code_link: "https://github.com/leogama09/PHP_Blog",
  //     deployed_link: "http://phpbloggama.000webhostapp.com//"
  //   },
  //   {
  //     name: "Fighting Game",
  //     description:
  //     "A JavaScript Fighting Game with HTML Canvas. Fight against a friend!",
  //     tags: [
  //       {
  //         name: "html5",
  //         color: "orange-text-gradient",
  //       },
  //       {
  //         name: "css3",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "javascript",
  //         color: "yellow-text-gradient",
  //       },
  //     ],
  //     image: fighting,
  //     source_code_link: "https://github.com/leogama09/JavaScript-Fighting-Game",
  //     deployed_link: "https://java-script-fighting-game.vercel.app/"
  //   },
  //   {
  //     name: "PokeNext",
  //     description:
  //     "PokeNext is an App built on Next.js to query Pokemons.",
  //     tags: [
  //       {
  //         name: "nextjs",
  //         color: "green-pink-text-gradient",
  //       },
  //       {
  //         name: "css3",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "javascript",
  //         color: "yellow-text-gradient",
  //       },
  //       {
  //         name: "api",
  //         color: "green-text-gradient",
  //       },
  //     ],
  //     image: pokenext,
  //     source_code_link: "https://github.com/leogama09/PokeNext",
  //     deployed_link: "https://pokenext-leogama09.vercel.app/"
  //   },
  // ];
  
  export { services, technologies, experiences, testimonials };