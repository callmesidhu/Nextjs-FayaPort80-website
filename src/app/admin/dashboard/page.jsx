"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Landing from "@/app/compoents/admin/landing";
import InterestGroups from "@/app/compoents/admin/intrest";
import Request from "@/app/compoents/admin/request";
import Sidebar from "@/app/compoents/admin/sidebar";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Landing");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("faya-admin-auth");
    if (!isLoggedIn) {
      router.push("/admin");
    }
  }, [router]);

  const renderContent = () => {
    switch (activeTab) {
      case "Landing":
        return <Landing />;
      case "Interest Groups":
        return <InterestGroups />;
      case "Requests":
        return <Request />;
      default:
        return <Landing />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar setActiveTab={setActiveTab} />
      <main className="flex-1 bg-white">{renderContent()}</main>
    </div>
  );
}
