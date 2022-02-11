import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import { useInView } from "react-intersection-observer";
import ToTop from "../Components/ToTop/toTop";

interface Layout {
    children: React.ReactNode;
    page: string;
}

const PageLayout = (props: Layout) => {
    const { ref, inView, entry } = useInView({});
    return (
        <div className={props.page}>
            <div className={`${props.page}__container`}>
                <ToTop inView={entry ? inView : true} />
                <Header headerRef={ref} />
                {props.children}
                <Footer />
            </div>
        </div>
    );
};

export default PageLayout;
