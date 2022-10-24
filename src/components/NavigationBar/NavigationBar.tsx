import { Button, IconButton, MobileNav, Navbar, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <Navbar className="fixed max-w-none w-full z-50 mx-auto py-2 px-4 lg:px-8 lg:py-4 shadow-none border-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 text-black">
        <Typography
          as="a"
          href="/search"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-bold text-2xl"
        >
          <span>Fallout Movies</span>
        </Typography>
      </div>
    </Navbar>);
};


export const NavigationBar = () => {
  return (
    <Sidebar></Sidebar>
  );
};
