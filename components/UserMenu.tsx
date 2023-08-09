'use client';

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { buttonVariants } from "@/components/ui/button"

const UserMenu = ({}) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return ( 
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <Button 
            onClick={() => router.push('/new')}
            className=
            {buttonVariants({variant:"ghost"})}   
        >
            Add User
        </Button>
        <Button 
            onClick={() => router.push('/dashboard')}
        className=
            {buttonVariants({variant:"ghost"})}    
        >
            Dashboard
        </Button>
      </div>
    </div>
   );
}
 
export default UserMenu;