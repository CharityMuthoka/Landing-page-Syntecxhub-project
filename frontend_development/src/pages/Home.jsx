import React from 'react';
import Navbar from '../components/ui/Navbar';
import Hero from '../components/ui/Hero';
import FAQ from '../components/ui/FAQ';
import AboutSection from './AboutSection';
import Footer from '../components/ui/Footer';

export default function Home(){
    return(
        <>
        <Navbar/>
        <div className="pt-24"></div>

        <Hero/>
        <AboutSection/>
        <FAQ/>
        <Footer/>
        </>
    )
}