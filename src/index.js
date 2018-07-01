import "../node_modules/normalize.css/normalize.css";
import "./css/styles.css";

const Portfolios = [
  {
    name: "silveredu",
    description: "",
    link: "http://www.silveredu.net/",
    img: "",
    applicationType: "web",
    skills: "jquery, php, webpack",
    duration: "",
  },
  {
    name: "waglebagle",
    description: "",
    link: "http://www.waglebagle.net/",
    img: "",
    applicationType: "web",
    skills: "jquery, php",
    duration: "",
  },
  {
    name: "my-anniversary-calendar",
    description: "",
    link: "http://www.silveredu.net/",
    img: "",
    applicationType: "web",
    skills: "react",
    duration: "",
  },
  {
    name: "match(food truck app based on location)",
    description: "",
    link: "http://www.silveredu.net/",
    img: "",
    applicationType: "android",
    skills: "react",
    duration: "",
  },
  {
    name: "NAVER reservation system clone",
    description: "",
    link: "http://www.silveredu.net/",
    img: "",
    applicationType: "android",
    skills: "react",
    duration: "",
  },
  

];

const App = (function() {
  function init() {
    $("#portfolio-group").html(``);
  }
  return {
    init
  };
})();

App.init();
