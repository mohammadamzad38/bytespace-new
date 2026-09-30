"use client";

import { usePathname } from "next/navigation";
import Header from "../header/header";

export default function ConditionalHeader() {
  const pathname = usePathname();

  const hideHeader = pathname === "/login" || pathname === "/registration";

  if (hideHeader) {
    return null;
  }

  return <Header />;
}
