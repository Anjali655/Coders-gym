import React from 'react'
import { FaPlay } from 'react-icons/fa'
import HeroImg from "../../assets/dumbells.png"
import { motion } from 'framer-motion'
import { SlideLeft, SlideRight } from "../../utility/animation.js"

const Hero = () => {
    return (
        <>
            <section>
                <div className='container grid grid-cols-1 md:grid-cols-2 relative min-h-[650px]'>

                    {/* Brand Info*/}
                    <div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>
                        <div className='text-center md:text-left space-y-6'>
                            <motion.h1
                                variants={SlideRight(0.6)}
                                initial="hidden"
                                animate="visible"
                                className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal drop-shadow'>Gym gives you the perfect <span className='text-primary'>Health</span>
                            </motion.h1>
                            <motion.p
                                variants={SlideRight(1.2)}
                                initial="hidden"
                                animate="visible"
                                className='text-gray-600 xl:max-w-[500px]'>It's a long established fact that a reader will be readable content of a page when are the best product.
                            </motion.p>

                            {/* button section */}
                            <motion.div
                                variants={SlideRight(1.5)}
                                initial="hidden"
                                animate="visible"
                                className='flex justify-center items-center gap-8 md:justify-start mt-4'>
                                <button className='primary-btn flex items-center gap-2 mt-4 cursor-pointer'>Order Now</button>
                                <button className='flex justify-center gap-2 mt-4 items-center cursor-pointer shadow-md py-3 px-6 rounded-md hover:scale-110 bg-white duration-300'><FaPlay /> Watch Now
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Hero image */}
                    <div className='flex justify-center items-center'>
                        <motion.img
                            initial={{ opacity: 0, x: -100 }}
                            variants={SlideLeft(0.5)}
                            animate="visible"
                            transition={{ duration: 1, delay: 0.5 }}
                            src={HeroImg}
                            alt=""
                            className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow' />
                    </div>
                </div>
            </section >
        </>
    )
}

export default Hero