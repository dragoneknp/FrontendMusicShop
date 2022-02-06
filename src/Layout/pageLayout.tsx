import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import { useInView } from "react-intersection-observer";
import ToTop from "../Components/ToTop/toTop";

interface Layout {
    children: React.ReactNode;
    page: string;
}

const PageLayout = (props: Layout) => {
    const { ref, inView } = useInView({});
    return (
        <div className={props.page}>
            <div className={`${props.page}__container`}>
                {!inView && <ToTop />}
                <Header headerRef={ref} />
                {props.children}
                <Footer />
            </div>
        </div>
    );
};

export default PageLayout;
