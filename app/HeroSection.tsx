"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero2 from './Hero2';
import HeroCard from './HeroCard';

const HeroSection = () => {
    return (
        <>
            <header className="py-4 bg-black sm:py-6" x-data="{expanded: false}">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="shrink-0">
                            <a href="#" title="" className="flex">
                                <Image className="" src="/vhire-trans.png" width={70} height={70} alt="logo" />
                            </a>
                        </div>

                        <div className="flex md:hidden">
                        </div>

                        <div className="relative  md:justify-center md:items-center md:inline-flex group">
                            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                            <Link href="/sign-in" title="" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Sign In </Link>
                        </div>
                    </div>

                </div>
            </header>

            <Hero2 />
            <HeroCard />

        </>
    )
}
export default HeroSection;