/*import {
  UserIcon,
  FolderIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'*/
import * as React from 'react';
import { MobileBar } from '../NavigationBar/MobileBar';

import { NavigationBar } from "../NavigationBar/NavigationBar";
// import { useAuth } from '@/lib/auth';
// import { useAuthorization, ROLES } from '@/lib/authorization';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 ">
      <MobileBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <NavigationBar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="flex-shrink-0 flex h-16 bg-transparent">
          <button
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
          </button>
        </div>
        <main className="flex-1 relative overflow-y-auto focus:outline-none">{children}</main>
      </div>
    </div>
  );
};
