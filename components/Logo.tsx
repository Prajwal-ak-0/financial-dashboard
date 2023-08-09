'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router=useRouter();

  return (
    <Image
      onClick={()=>router.push('/')}
        src="/images/logo.png"
        alt="logo"
        className="hidden md:block cursor-pointer"
        height="75"
        width="75"
    />
  )
}

export default Logo