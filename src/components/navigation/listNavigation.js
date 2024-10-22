import portfolio from "./icons/portfolio.svg";
import home from "./icons/home.svg";
import contact from "./icons/contact.svg";
import about from "./icons/about.svg";
import service from "./icons/service.svg";

var listNavigation = [
    {
        "name": "home",
        "icon": home,
        "spy": true,
        "link": "home"
    },
    {
        "name": "services",
        "icon": service,
        "spy": true,
        "link": "service"
    },
    {
        "name": "about",
        "icon": about,
        "spy": true,
        "link": "about"
    },
    {
        "name": "projects",
        "icon": portfolio,
        "spy": true,
        "link": "Portfolio"
    },
    {
        "name": "contact",
        "icon": contact,
        "spy": true,
        "link": "contact"
    }
]

export default listNavigation;