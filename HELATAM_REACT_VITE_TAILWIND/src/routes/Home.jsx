import { Content } from "../components/Content/Content";
import { Header } from "../components/Header/Header";
import { Footer } from "../constant/Footer";
import { Navbar } from "../constant/Navbar";

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Content />
            <Footer />
        </div>
    );
};
