import React from 'react'
import { NavbarMenu } from '../../mockData/data'
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <nav>
                <div className='container flex justify-between items-center py-3'>
                    {/* Logo section */}
                    <div className='text-2xl flex items-center gap-2 font-bold py-8 uppercase'>
                        <FaDumbbell />
                        <p>Coders</p>
                        <p className='text-secondary'>Gym</p>
                    </div>

                    {/* Menu section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6 text-gray-600'>
                            {NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a href={item.link}
                                            className='inline-block py-1 px-3 hover:text-primary font-semibold'>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Icons section */}
                    <div className='flex items-center gap-4'>
                        <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                            <CiSearch className='text-2xl' />
                        </button>
                        <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                            <PiShoppingCartThin className='text-2xl' />
                        </button>
                        <button className='hidden md:block text-primary bg-white cursor-pointer hover:bg-primary hover:text-white rounded-md border-2 border-primary px-4  py-2 duration-200'>
                            Login
                        </button>
                    </div>

                    {/* Mobile hamburger menu section */}
                    <div className='md:hidden cursor-pointer' onClick={() => setOpen(!open)}>
                        <MdMenu className='text-4xl' />
                    </div>
                </div>
            </nav>


            {/* Mobile sidebar section */}
            <ResponsiveMenu open={open} />
        </>
    )
}

export default Navbar