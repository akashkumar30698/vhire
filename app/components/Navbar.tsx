"use client"

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DashboardBtn";
import Image from "next/image"


function Navbar() {

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            <Image src={"/vhire-trans.png"} width={70}  height={70} alt="logo"/>
          </span>
        </Link>

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DasboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;

