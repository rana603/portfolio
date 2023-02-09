
import img1 from './shop1.png';
import img2 from './weather.png';
import img3 from './bewakoof.png';
import img4 from './googleTimer.png';
import img5 from './yt.png';
import img6 from './portf.png'
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
    desc: "A clone of the website shop.com. This is an e-commerce website based in California, USA.",
    Tech: "HTML | CSS |JavaScript | LocalStorage",
  },
  {
    id: 2,
    image: img3,
    // image:" https://colorlib.com/wp/wp-content/uploads/sites/2/homes-free-template.jpg.webp",
    title: "Bewakoof.com",
    category: "React",
    link: "ww",
    github: "https://github.com/rana603/bew",
    desc: "Bewakoof is an online shopping site for men and women clothing. implemented all the features of an e-commerce website , fully responsive, smooth UI",
    Tech: "HTML | CSS | JavaScript | React | Chakra-UI ",
  },
  {
    id: 3,
    image: img6,
    title: "Portfolio",
    category: "React",
    link: "ww",
    github: "git",
    desc:  "This portfolio is a compilation of academic, professional, skills, qualifications, education, and experiences. It provides insight into my personality and work ethic.",
    Tech: "HTML |CSS |React | JavaScript ",
  },
  {
    id: 4,
    image: img7,
    title: "Todo",
    category: "React",
    link: "https://todoapp5c8a.netlify.app/",
    github: "https://github.com/rana603/todoapp",
    desc: "ToDo List App is used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and It is helpful in planning our daily schedules.",
    Tech: "HTML | CSS | JavaScript| React | LocalStorage ",
  },
  {
    id: 5,
    image: img2,
    title: "Weather App",
    category: "Mini Project",
    link: "https://my-weather-1a398.netlify.app/",
    github: "https://github.com/rana603/Web-Development/tree/main/Unit5/weather",
    desc: "A simple and elegant web app which shows the weather at a place the user searches for. Uses Open Source Weather API. A user can search for any place and the app will show the weather at that place along with a seven day forecast in a neat widget.",
    Tech: "HTML | CSS | JavaScipt | API",
  },


  // {
  //   id: 6,
  //   image: img4,
  //   title: "Google Timer",
  //   category: "Mini Project",
  //   link: "https://googletimer-c87a52.netlify.app/",
  //   github: "https://github.com/rana603/googleTimer",
  //   desc: "lorem5Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa.lorem5Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa",
  //   Tech: "MERN Stack ",
  // },
  {
    id: 7,
    image: img5,
    title: "Youtube.com",
    category: "web",
    link: "https://youtube-clone-76f993.netlify.app/",
    github: "https://github.com/rana603/Web-Development/tree/main/Unit5/Day8",
    desc: "A single web page design with YouTube real-time v3 API implementations. Basic UI part Fetching YOUTUBE API to get data , Implemented Debouncing, can play Youtube Videos , top 10 Most Populat Videos.",
    Tech: "HTML5 | CSS | JavaScript ES6 | API",
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