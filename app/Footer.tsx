"use client"

import Link from "next/link"


export default function Footer() {
    return (
        <>
            <div className="bg-gradient-to-b from-violet-600/10 via-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-10">
                    <div className="flex justify-center"> 
                    </div>

                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-semibold text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                        Simplify Interviews, Empower Hiring
                        </h1>
                    </div>

                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-lg text-white/70">
                        Revolutionize your hiring process with a platform designed for seamless video interviews and live coding collaboration.
                        </p>
                    </div>

                    <div className="text-center">
                        <Link
                            href="/sign-in"
                            className="inline-flex items-center justify-center gap-x-2 bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700 py-3 px-6">
                            Get started
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </Link>
                    </div>


                </div>
            </div>
        </>
    )
}



