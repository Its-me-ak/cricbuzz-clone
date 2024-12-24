import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='bg-[#009270] w-full px-4 h-12 mt-2 flex justify-between items-center'>
                <Link to={'/'}>
                    <img src="assets/img/cb_logo.svg" className='h-9' alt="Cricbuzz Logo" />
                </Link>
                <ul className='flex list-none justify-between items-center gap-1 capitalize text-gray-100 font-semibold'>
                    <li className='h-12 cursor-pointer flex items-center px-[5px] hover:bg-[#028062]'>
                        <Link>
                            live scores
                        </Link>
                    </li>
                    <li className='h-12 cursor-pointer flex items-center px-[5px] hover:bg-green-700'>
                        <Link>
                            schedule
                        </Link>
                    </li>
                    <li className='h-12 cursor-pointer flex items-center px-[5px] hover:bg-green-700'>
                        <Link>
                            archives
                        </Link>
                    </li>
                    <li className='h-12 cursor-pointer flex items-center px-[5px] hover:bg-green-700'>
                        <Link>
                            news
                            <span className='cb-caret-down'></span>
                        </Link>
                    </li>
                    <li className='h-12 cursor-pointer flex items-center px-[5px] hover:bg-green-700'>
                        <Link>series
                            <span className='cb-caret-down'></span>
                        </Link>
                    </li>
                    <li className='h-12 cursor-pointer flex items-center px-[5px] hover:bg-green-700'>
                        <Link>teams
                            <span className='cb-caret-down'></span>
                        </Link>
                    </li>
                    <li className='h-12 cursor-pointer flex items-center px-[5px] hover:bg-green-700'>
                        <Link>videos
                            <span className='cb-caret-down'></span>
                        </Link>
                    </li>
                    <li className='h-12 cursor-pointer flex items-center px-[5px] hover:bg-green-700'>
                        <Link>rankings
                            <span className='cb-caret-down'></span>
                        </Link>
                    </li>
                    <li className='h-12 cursor-pointer flex items-center px-[5px] hover:bg-green-700'>
                        <Link>more
                            <span className='cb-caret-down'></span>
                        </Link>
                    </li>
                    <li>
                        <button className='bg-white text-black py-1 px-4 rounded-2xl capitalize font-light'>cricbuzz plus</button>
                    </li>
                </ul>
                <div>
                    <Link>
                        <span className='cb-plus-ico cb-user-icon'></span>
                    </Link>
                </div>
            </div>
            <div className='w-full bg-gray-700 h-8'>
                <div>
                    <ul></ul>
                </div>
            </div>
        </>
    )
}

export default Navbar