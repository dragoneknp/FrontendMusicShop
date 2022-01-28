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
        private: false,
    },
    {
        name: "Discover Card",
        path: "/discover/:id",
        element: CardDetails,
        private: false,
    },
    {
        name: "Marketplace",
        path: "/marketplace",
        element: Marketplace,
        private: false,
    },
    {
        name: "Marketplace Card",
        path: "/marketplace/:id",
        element: MarketplaceListenings,
        private: false,
    },
    {
        name: "Home",
        path: "/home",
        element: Home,
        private: false,
    },
    {
        name: "Home Card",
        path: "/home/:id",
        element: CardDetails,
        private: false,
    },
    {
        name: "Login",
        path: "/login",
        element: Login,
        private: false,
    },
    {
        name: "Terms",
        path: "/terms",
        element: Terms,
        private: false,
    },
    {
        name: "Error",
        path: "/error",
        element: Error,
        private: false,
    },
    {
        name: "About",
        path: "/about",
        element: About,
        private: false,
    },
    {
        name: "FAQ",
        path: "/FAQ",
        element: FAQ,
        private: false,
    },
    {
        name: "Profile",
        path: "/profile",
        element: Profile,
        private: true,
    },
    {
        name: "Page not found",
        path: "*",
        element: Error,
    },
];
