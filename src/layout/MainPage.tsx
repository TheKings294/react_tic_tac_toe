import {Outlet} from "react-router";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

function MainPage() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
export default MainPage;