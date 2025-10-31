import React from 'react'
import { GrYoga } from 'react-icons/gr'
import { FaDumbbell } from 'react-icons/fa6'
import { GiGymBag } from 'react-icons/gi'
import { delay, motion } from 'framer-motion'
import { SlideLeft, SlideRight } from '../../utility/animation'

const EquipmentData = [
    {
        id: 1,
        title: "Yoga Equipments",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <GrYoga />,
        delay: 0.3
    },
    {
        id: 2,
        title: "Muscles Equipments",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <FaDumbbell />,
        delay: 0.6
    },
    {
        id: 3,
        title: "Fitness Equipments",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: <GiGymBag />,
        delay: 0.9
    },
];


const Equipments = () => {
    return (
        <div className='container py-24'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair'>

                <div className='space-y-4 p-6'>
                    <h1 className='text-3xl md:text-4xl font-bold'>What we offer for you</h1>
                    <p className='text-gray-500 '>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {EquipmentData.map((item) => {
                    return (
                        <motion.div
                            variants={SlideLeft(item.delay)}
                            key={item.id}
                            initial="hidden"
                            whileInView="visible"
                            className='space-y-4 p-6 bg-[#fbfbfb47] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] transition-shadow duration-300'>
                            <div className='text-4xl'>{item.icon}</div>
                            <p className='text-2xl font-semibold'>{item.title}</p>
                            <p className='text-gray-500'>{item.desc}</p>
                        </motion.div>

                    )
                })}
            </div>
        </div>
    )
}

export default Equipments