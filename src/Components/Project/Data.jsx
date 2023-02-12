
import img1 from './shop1.png';
import img2 from './weather.png';
import img3 from './bewakoof.png';
import img4 from './googleTimer.png';
import img5 from './yt.png';
// import img6 from './portf.png'
import img7 from './todo.png';
export const projectsData = [
  {
    id: 1,
    // image:" https://colorlib.com/wp/wp-content/uploads/sites/2/homes-free-template.jpg.webp",
    image: img1,
    title: "Shop.com",
    category: "web",
    link: "https://shiny-banoffee-5ee46b.netlify.app/",
    github: "https://github.com/rana603/Web-Development/tree/main/HTML/Sprint1/Shop.com",
    desc: "A clone of the website shop.com. This is an e-commerce website based in California(USA).In this website user can add and delete the pruduct ,filter, login, signup and responsive.",
    Tech: "HTML | CSS |JavaScript | LocalStorage",
  },
  {
    id: 2, 
    image: img3,
    // image:" https://colorlib.com/wp/wp-content/uploads/sites/2/homes-free-template.jpg.webp",
    title: "Bewakoof.com",
    category: "React",
    link: "https://bewakoofclonning-gsr-445a0c.netlify.app/",
    github: "https://github.com/rana603/bew",
    desc: "Bewakoof is an online shopping site for men and women clothing. Implemented all the features of an e-commerce website like add, delete the pruduct, filter, login and signup.",
    Tech: "HTML | CSS | JavaScript | React | Chakra-UI ",
  },
  {
    id: 3,
    image: img2,
    title: "Weather App",
    category: "Mini Project",
    link: "https://my-weather-1a398.netlify.app/",
    github: "https://github.com/rana603/Web-Development/tree/main/Unit5/weather",
    desc: "A simple and elegant web app which shows the weather at a place the user searches for. A user can search for any place and the app will show the weather at that place along with a seven day forecast.",
    Tech: "HTML | CSS | JavaScipt | API",
  },
  // {
  //   id: 3,
  //   image: img6,
  //   title: "Portfolio",
  //   category: "React",
  //   link: "https://gautamrana-603.netlify.app/",
  //   github: "https://github.com/rana603/portfolio",
  //   desc:  "This portfolio is a compilation of academic, professional, skills, qualifications, education, and experiences. It provides insight into my personality and work ethic.",
  //   Tech: "HTML |CSS |React | JavaScript ",
  // },
  {
    id: 4,
    image: img7,
    title: "Todo",
    category: "React",
    link: "https://todoapp5c8a.netlify.app/",
    github: "https://github.com/rana603/todoapp",
    desc: "ToDo List App is used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list. Add, Delete, and Edit functionality are added developed.",
    Tech: "HTML | CSS | JavaScript| React | LocalStorage ",
  },
  {
    id: 5,
    image: img5,
    title: "Youtube.com",
    category: "web",
    link: "https://youtube-clone-76f993.netlify.app/",
    github: "https://github.com/rana603/Web-Development/tree/main/Unit5/Day8",
    desc: "Clone of YouTube.com where user can watch and search videos. Basic UI part Fetching YOUTUBE API to get data , Implemented Debouncing, can play Youtube Videos",
    Tech: "HTML5 | CSS | JavaScript ES6 | API",
  },
  


  {
    id: 6,
    image: img4,
    title: "Google Timer",
    category: "Mini Project",
    link: "https://googletimer-c87a52.netlify.app/",
    github: "https://github.com/rana603/googleTimer",
    desc: "Google Timer starts to count down. If you want to edit the timer, click on the numbers counting down. To use the stopwatch, Google “stopwatch” and click the “start” button on the box that appears.",
    Tech: "HTML | CSS | JavaScript| React",
  },
  

];

export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'web',

  },
  {
    name: 'React',
  },
  {
    name: 'Mini Project',
  }
];