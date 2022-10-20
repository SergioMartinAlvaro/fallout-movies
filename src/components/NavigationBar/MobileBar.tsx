import { Dialog, Transition } from "@headlessui/react";
import HomeIcon from "@heroicons/react/20/solid/HomeIcon";
import XCircleIcon from "@heroicons/react/20/solid/XCircleIcon";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from 'clsx';
import logo from '@/assets/logo.svg';

type SideNavigationItem = {
    name: string;
    to: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  };
  
  const SideNavigation = () => {
    // const { checkAccess } = useAuthorization();
    const navigation = [
      { name: 'Dashboard', to: '.', icon: HomeIcon },
      /*{ name: 'Discussions', to: './discussions', icon: FolderIcon },*/
    /*  checkAccess({ allowedRoles: [ROLES.ADMIN] }) && {
        name: 'Users',
        to: './users',
        icon: UsersIcon,
      }, */
    ].filter(Boolean) as SideNavigationItem[];
  
    return (
      <>
        {navigation.map((item, index) => (
          <NavLink
            end={index === 0}
            key={item.name}
            to={item.to}
            className={clsx(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'group flex items-center px-2 py-2 text-base font-medium rounded-md'
            )}
          >
            <item.icon
              className={clsx(
                'text-gray-400 group-hover:text-gray-300',
                'mr-4 flex-shrink-0 h-6 w-6'
              )}
              aria-hidden="true"
            />
            {item.name}
          </NavLink>
        ))}
      </>
    );
  };

  const Logo = () => {
    return (
      <Link className="flex items-center text-white" to=".">
        <img className="h-8 w-auto" src={logo} alt="Workflow" />
        <span className="text-xl text-white font-semibold">Bulletproof React</span>
      </Link>
    );
  };
  

type MobileSidebarProps = {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  

export const MobileBar = ({ sidebarOpen, setSidebarOpen }: MobileSidebarProps) => {
    return (
      <Transition.Root show={sidebarOpen} as={React.Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={React.Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={React.Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
              <Transition.Child
                as={React.Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <Logo />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  <SideNavigation />
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
        </Dialog>
      </Transition.Root>
    );
  };
