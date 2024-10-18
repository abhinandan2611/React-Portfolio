import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent/Index";
import { Animate } from "react-simple-animate";
import './style.scss'
import { FaLinkedin } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
import { DiGithubBadge } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";



const personalDetails = [
    {
        label: "Name:",
        value: "Abhinandan",
    },
    {
        label: "Age:",
        value: "22",
    },
    {
        label: "Location:",
        value: "Bangalore,India",
    },
    {
        label: "Email:",
        value: (
            <a
                href="mailto:abhinandan.manohar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="email-link"
            >
                abhinandan.manohar@gmail.com
            </a>
        ),
    },
    {
        label: "Contact No:",
        value: "+91 9945228710",
    },
    {
        label: "LinkedIn:",
        value: (
            <a
                href="https://www.linkedin.com/in/abhinandan-manohar/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-link"
            >
                <FaLinkedin size={20} style={{ marginRight: '8px' }} />
                Abhinandan Manohar
            </a>
        ),
    },


];

const jobSummary = 'Highly motivated software developer with 1+ years of experience specializing in .NET technologies, ReactJS, and SQL. Proficient in building and maintaining scalable, high-performance applications with a focus on full-stack development. Proven track record in delivering robust solutions for banking services, utilizing modern frameworks and technologies to streamline processes and enhance user experience. Strong problem-solving skills, with expertise in database management and front-end development, enabling seamless integration between back-end services and user interfaces.';

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper"><Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: 'translateX(-900px)'
                    }}

                    end={{
                        transform: 'translatex(0px)'
                    }}
                >
                    <h3>Full Stack Developer</h3>
                    <p>{jobSummary}</p>
                </Animate>



                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}

                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >

                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)'
                        }}

                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <BiAtom size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiGithubBadge size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>

            </div>
        </section>
    );
};
export default About;