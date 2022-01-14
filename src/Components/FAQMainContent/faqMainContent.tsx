import React, { useState } from "react";
import Label from "../Label/label";
import "./faqMainContent.scss";
const FAQMainContent = () => {
    const Accordion = ({
        header,
        description,
    }: {
        header: string;
        description: string;
    }) => {
        const [isOpen, changeOpen] = useState(false);
        return (
            <div className="accordion">
                <button
                    className={`accordion__header ${isOpen ? "active" : ""}`}
                    onClick={() => changeOpen(!isOpen)}
                >
                    {header}
                </button>
                <div className={`accordion__panel ${isOpen ? "active" : ""}`}>
                    <p>{description}</p>
                </div>
            </div>
        );
    };
    return (
        <main className="faqMain">
            <Label
                header={"Browse NFTs"}
                breadCrumbs={[
                    { path: "/home", title: "Frequently Asked Questions" },
                    { title: "Frequently Asked Questions" },
                ]}
            />
            <div className="faqMain__container container">
                <section className="faqMain__content">
                    <Accordion
                        header={"How secure user accounts and personal data?"}
                        description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus esse est molestiae quis odit ducimus rerum eveniet. Architecto corrupti, incidunt molestiae voluptatum recusandae ab ipsa non molestias voluptates officiis natus dignissimos soluta reprehenderit vitae unde reiciendis sint nemo fugiat repellat illum quasi at sit. Ut rerum laborum nesciunt fugiat? Odit?"
                        }
                    />
                    <Accordion
                        header={"How secure user accounts and personal data?"}
                        description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus esse est molestiae quis odit ducimus rerum eveniet. Architecto corrupti, incidunt molestiae voluptatum recusandae ab ipsa non molestias voluptates officiis natus dignissimos soluta reprehenderit vitae unde reiciendis sint nemo fugiat repellat illum quasi at sit. Ut rerum laborum nesciunt fugiat? Odit?"
                        }
                    />
                    <Accordion
                        header={"How secure user accounts and personal data?"}
                        description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus esse est molestiae quis odit ducimus rerum eveniet. Architecto corrupti, incidunt molestiae voluptatum recusandae ab ipsa non molestias voluptates officiis natus dignissimos soluta reprehenderit vitae unde reiciendis sint nemo fugiat repellat illum quasi at sit. Ut rerum laborum nesciunt fugiat? Odit?"
                        }
                    />
                    <Accordion
                        header={"How secure user accounts and personal data?"}
                        description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus esse est molestiae quis odit ducimus rerum eveniet. Architecto corrupti, incidunt molestiae voluptatum recusandae ab ipsa non molestias voluptates officiis natus dignissimos soluta reprehenderit vitae unde reiciendis sint nemo fugiat repellat illum quasi at sit. Ut rerum laborum nesciunt fugiat? Odit?"
                        }
                    />
                    <Accordion
                        header={"How secure user accounts and personal data?"}
                        description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus esse est molestiae quis odit ducimus rerum eveniet. Architecto corrupti, incidunt molestiae voluptatum recusandae ab ipsa non molestias voluptates officiis natus dignissimos soluta reprehenderit vitae unde reiciendis sint nemo fugiat repellat illum quasi at sit. Ut rerum laborum nesciunt fugiat? Odit?"
                        }
                    />
                    <Accordion
                        header={"How secure user accounts and personal data?"}
                        description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus esse est molestiae quis odit ducimus rerum eveniet. Architecto corrupti, incidunt molestiae voluptatum recusandae ab ipsa non molestias voluptates officiis natus dignissimos soluta reprehenderit vitae unde reiciendis sint nemo fugiat repellat illum quasi at sit. Ut rerum laborum nesciunt fugiat? Odit?"
                        }
                    />
                </section>
            </div>
        </main>
    );
};
export default FAQMainContent;
