

import Image from "next/image"
import Link from "next/link";

export default function HeroCard() {
    return (
      <>
        {/* Hero */}
        <div className="relative overflow-hidden ">
          <div className="container">
            <div className="max-w-2xl text-center mx-auto">
             {/*

             py-24 lg:py-32
             
             <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Nano-Frontiers: Reshaping Tech
              </h1>
             */} 
              <p className="mt-3 text-xl text-muted-foreground">
              Conduct interviews with clarity and code with precision—remotely and effortlessly
              </p>

              <div className="mb-8">

              </div>

              <Link className="group inline-flex flex-wrap items-center bg-white/10 hover:bg-white/10 focus:outline-none focus:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md" href="/sign-up">
                        <p className="me-2 text-white text-sm">
                            Get Started
                        </p>
                        <span className="group-hover:bg-white/10 group-focus:bg-white/10 py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </span>
                    </Link>
            </div>


            <div className="mt-10 relative max-w-5xl mx-auto">
              <Image
                src="/front.png"
                width={1100}
                height={800}
                className="rounded-xl"
                alt="Image Description"
              />
              <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
                <div className="w-48 h-48 rounded-lg bg-background/10" />
              </div>
              <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
                <div className="w-48 h-48 rounded-full bg-background/10" />
              </div>
            </div>
          </div>
        </div>
        {/* End Hero */}
      </>
    );
  }
  