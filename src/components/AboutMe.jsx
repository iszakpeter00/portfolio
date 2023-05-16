import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { dev, devo, hero } from "../assets";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "../components";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[256px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full bg-gradient-to-t from-sky-600 to-sky-300 rounded-2xl p-1 shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-2xl py-5 px-12 min-h-[280px] flex items-center justify-center gap-10 flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className={title == "UI/UX Designer" ? "w-[100px] h-[80px] object-contain" : "w-[80px]"}
                />
                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Who am I</p>
                <h2 className={styles.sectionHeadText}>About me</h2>
            </motion.div>

            <motion.div variants={textVariant()} className='mt-2 flex md:flex-row flex-col justify-between items-center w-full'>
                <img src={hero} alt="diploma" className="md:w-[380px] w-[300px] object-contain" />
                <motion.div variants={fadeIn("", "", 0.1, 1)} className="flex flex-col justify-center items-center gap-1">
                    <h3 className="font-semibold md:text-[54px] text-3xl md:mt-0 mt-5"><code>Computer Scientist BsC</code></h3>
                    <h3 className="md:text-[27px] text-lg text-secondary md:mt-5 mt-2">
                        <code>Summa Cum Laude - Excellent Degree</code>
                        <motion.div
                            animate={{ opacity: [0, 0, 0, 0, 1, 1, 1, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-[2px] h-[26px] bg-white/[0.9] inline-block ml-1 -mb-1"
                        />
                    </h3>
                </motion.div>
            </motion.div>

            <div className="flex md:flex-row flex-col justify-between items-center mt-20">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='text-secondary text-justify text-lg max-w-[550px] leading-[30px] p-5 bg-black/[0.5] rounded-2xl'
                >
                    I'm a software developer with high interest in every segment of web development.
                    During my education, I studied the general techniques and solutions required for programming.
                    That's why I'm able - and want - to learn new languages and frameworks quickly.
                    I've been using React and Laravel to build applications, but I'm also interested in other technologies.
                    I'm not only developing programs, I'm also developing myself constantly through books and videos to solve real-world problems and make creative websites.
                </motion.p>
                <motion.div variants={textVariant()}>
                    <img src={devo} alt="" className="w-[550px] object-contain md:mt-0 mt-20" />
                </motion.div>
            </div>

            <div className='mt-20 flex flex-wrap gap-10 w-full justify-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
