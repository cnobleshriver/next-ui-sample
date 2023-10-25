'use client'

import { NextUIProvider } from "@nextui-org/react";
import Navbarr from "./_components/Navbarr";
import Image from "next/image";

export default function Home() {
  return (
    <NextUIProvider>
      <Navbarr />
      {/* <div className='w-screen h-screen bg-color-primary-900'></div> */}
    </NextUIProvider>
  );
}