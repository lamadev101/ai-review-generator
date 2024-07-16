"use client"

import { DashboardIcon } from "@radix-ui/react-icons"
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoLogInOutline, IoNewspaperOutline } from "react-icons/io5";

import Link from "next/link"
import { cn } from "@/lib/utils";
import { useState } from "react";

const sidebarNavList = [
  {
    id: 1,
    label: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon />
  },
  {
    id: 2,
    label: "Customer",
    href: "/customer",
    icon: <AiOutlineUsergroupAdd />
  },
  {
    id: 3,
    label: "Customer Details",
    href: "customer-details",
    icon: <IoNewspaperOutline />
  }
]

const SideBar = () => {
  const [activePage, setActivePage] = useState("/dashboard")

  return (
    <div className="bg-gray-100 px-4 h-[100vh] flex justify-between flex-col">
      <div>

        {sidebarNavList?.map(item => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => setActivePage(item.href)}
            className={cn("flex gap-2 text-xl items-center px-10 py-4 text-slate-800", activePage === item.href ? "bg-gray-700 text-white" : "")}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
      <div>
        <Link
          href="/login"
          className={cn("flex gap-2 text-xl items-center px-10 py-4 text-slate-800")}
        >
          <IoLogInOutline />
          <span>Login</span>
        </Link>
      </div>
    </div>
  )
}

export default SideBar