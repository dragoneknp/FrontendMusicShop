import Label from "../Label/label";
import "./aboutMainContent.scss";

const AboutMainContent = () => {
    return (
        <main className="aboutMain">
            <Label
                header={"About"}
                breadCrumbs={[
                    { path: "/home", title: "Home" },
                    { title: "About" },
                ]}
            />
            <div className="aboutMain__container container">
                <section className="aboutMain__content">
                    <section className="aboutMain__description">
                        <p className="aboutMain__paragraph">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet. Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <p className="aboutMain__paragraph">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.Amet
                            minim mollit non deserunt ullamco est sit aliqua
                            dolor do amet sint.
                        </p>
                        <p className="aboutMain__paragraph">
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.Amet
                            minim mollit non deserunt ullamco est sit aliqua
                            dolor do amet sint. Velit officia consequat duis
                            enim velit mollit. Exercitation veniam consequat
                            sunt nostrud amet.
                        </p>
                    </section>
                    <section className="aboutMain__picture">
                        <img
                            src="/Images/aboutImage.svg"
                            alt="Moon"
                            className="aboutMain__picture_pic"
                        />
                    </section>
                </section>
            </div>
        </main>
    );
};

export default AboutMainContent;
