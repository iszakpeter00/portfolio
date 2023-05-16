import { motion } from "framer-motion";

import { styles } from "../styles";
import { hero } from "../assets";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            exit={{ opacity: 0 }}
            className="relative max-w-7xl h-screen flex sm:flex-row flex-col justify-between mx-auto sm:pt-0 pt-20"
        >
            <div
                className='flex flex-row justify-center items-center gap-5 sm:px-5 px-8'
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-sky-600' />
                    <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-sky-600 to-sky-100-[0.01]' />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='bg-gradient-to-b from-sky-600 to-sky-300 inline-block text-transparent bg-clip-text'>Peter</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I'm a <span className='bg-gradient-to-b from-sky-600 to-sky-300 inline-block text-transparent bg-clip-text'>web developer </span>, who loves creating <span className='bg-gradient-to-b from-sky-600 to-sky-300 inline-block text-transparent bg-clip-text'>unique and creative</span> things.
                    </p>
                </div>
            </div>

            <div className="flex sm:items-end items-center sm:justify-end justify-center">
                <img
                    src={hero}
                    alt='hero'
                    className='sm:w-[700px] w-[330px] object-contain'
                />
            </div>
            
            {/* drop-shadow-[0_0_15px_rgb(66,132,208)] */}
            {/* <ComputersCanvas /> */}

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </motion.div >
    );
};

export default Hero;
