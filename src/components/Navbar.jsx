import route from '../assets/route.png'
import React from "react";

const NavigateToblog = () => {
    window.location.href='/blog'
}

const NavigateToMain = () => {
    window.location.href='/'
}

const NavigateToAbout = () => {
    window.location.href='/about'
}

const NavigateToContact = () => {
    window.location.href='/contact'
}

const Navbar = () => {
    return <div>
        <header className="flex justify-between items-center p-5 bg-gray-200 text-black">
            <div className="flex items-center pl-9">
                <img src={route} className='h-16 w-16'  />
                <button onClick={NavigateToMain}  className="text-4xl font-bold pt-5 pb-5">Touring</button>
            </div>
            <nav>
                <button onClick={NavigateToAbout} className="ml-5 text-black hover:underline text-2xl p-6">About Us</button>
                <button className="ml-5 text-black hover:underline text-2xl p-6">Package</button>
                <button className="ml-5 text-black hover:underline text-2xl p-6">Gallery</button>
                <button onClick={NavigateToblog} className="ml-5 text-black hover:underline text-2xl p-6">Blog</button>
                <button onClick={NavigateToContact} className="ml-5 text-black hover:underline text-2xl p-6">Contact Us</button>
            </nav>
        </header>
    </div>
}

export default Navbar;