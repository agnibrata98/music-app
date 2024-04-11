"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";

const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div 
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href="/">
                <MenuItem setActive={setActive} active={active} item="Home">
                    
                </MenuItem>
            </Link>
            <MenuItem
             setActive={setActive} active={active} item="Our Courses"
            >
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/courses">All Courses</HoveredLink>
                    <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                    <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                    <HoveredLink href="/courses">Songwriting</HoveredLink>
                    <HoveredLink href="/courses">Music Production</HoveredLink>
                </div>
            </MenuItem>
            <Link href={'/contact'}>
            <MenuItem
             setActive={setActive} active={active} item="Contact"
            ></MenuItem>
            </Link>
        </Menu>

        <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  )
}

export default Navbar