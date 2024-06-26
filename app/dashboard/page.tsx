"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import DashboardNavbar from "@/components/common/DashboardNavbar";
import DashboardSidebar from "@/components/common/DashboardSidebar";
import Footer from "@/components/home/footer";
import DashboardModal from "@/components/common/DashboardModal";
import { shoplistState } from "../recoil/state"
import { useSetRecoilState } from "recoil";
import { registerShop } from "../services/shopAPI";
import DashboardMypageMain from "@/components/common/DashboardMypageMain";
import OrderHistory from "@/components/common/OrderHistory";



const Page = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("main"); // 초기 메뉴를 "main"으로 설정
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // 선택된 메뉴에 따라 렌더링할 컴포넌트 결정
  const renderContent = () => {
    switch (selectedMenu) {
      case "orderHistory":
        return <OrderHistory />;
      case "main":
      default:
        return <DashboardMypageMain />;
    }
  };


  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNavbar />
      <div className="flex flex-row flex-1">
      <DashboardSidebar toggleModal={toggleModal} setSelectedMenu={setSelectedMenu}/>
        <div className="flex flex-col flex-1 bg-[#F7F7F7] relative overflow-auto z-10 overscroll-none"> {/* 메인 컨텐츠 영역 */}
          <DashboardMypageMain/>
          <Footer/>
        </div>
      </div>
      {/* 조건부로 모달 표시 */}
      {isModalOpen && <DashboardModal closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};


export default Page;

