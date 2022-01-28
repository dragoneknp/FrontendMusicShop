import About from "../Pages/About/about";
import CardDetails from "../Pages/CardDetails/cardDetails";
import Discover from "../Pages/Discover/discover";
import Error from "../Pages/Error/error";
import FAQ from "../Pages/FAQ/faq";
import Home from "../Pages/Home/home";
import Login from "../Pages/Login/login";
import Marketplace from "../Pages/Marketplace/marketplace";
import MarketplaceListenings from "../Pages/MarketplaceListenings/marketplaceListenings";
import Profile from "../Pages/Profile/profile";
import Terms from "../Pages/Terms/terms";
export const router = [
    {
        name: "Discover",
        path: "/discover",
        element: Discover,
    },
    {
        name: "Discover Card",
        path: "/discover/:id",
        element: CardDetails,
    },
    {
        name: "Marketplace",
        path: "/marketplace",
        element: Marketplace,
    },
    {
        name: "Marketplace Card",
        path: "/marketplace/:id",
        element: MarketplaceListenings,
    },
    {
        name: "Home",
        path: "/home",
        element: Home,
    },
    {
        name: "Home Card",
        path: "/home/:id",
        element: CardDetails,
    },
    {
        name: "Login",
        path: "/login",
        element: Login,
    },
    {
        name: "Terms",
        path: "/terms",
        element: Terms,
    },
    {
        name: "Error",
        path: "/error",
        element: Error,
    },
    {
        name: "About",
        path: "/about",
        element: About,
    },
    {
        name: "FAQ",
        path: "/FAQ",
        element: FAQ,
    },
    {
        name: "Profile",
        path: "/profile",
        element: Profile,
    },
    {
        name: "Page not found",
        path: "*",
        element: Error,
    },
];
