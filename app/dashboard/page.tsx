"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import DashboardModal from "@/components/common/DashboardModal";
import Footer from "@/components/home/footer";
import DashboardNavbar from "@/components/common/DashboardNavbar";
import DashboardSidebar from "@/components/common/DashboardSidebar";
import DashboardMain from "@/components/common/DashboardMain";
import OrderHistory from "@/components/common/OrderHistory";
import DashboardMypageMain from "@/components/common/DashboardMypageMain";
import { ManageBusinessHoursLink } from "@/components/businessHoursSidebar/ManageBusinessHoursLink";
import PauseService from "@/components/businessHoursSidebar/PauseService";
import HolidaySchedule from "@/components/businessHoursSidebar/HolidaySchedule";
import { ManageBusinessHours } from "@/components/businessHoursSidebar/ManageBusinessHours";
import MenuSet from "@/components/menu/menuSet";
import MenuSoldout from "@/components/menu/menuSoldout";
import { content } from "../recoil/state";
import { useRecoilValue, useSetRecoilState } from "recoil";


const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState("main"); // 초기 메뉴를 "main"으로 설정
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    
    const setContent = useRecoilValue(content);
    const setRecoilContent = useSetRecoilState(content);
    console.log("대시보드영역");
    // ShopList();

    useEffect(() => {
        setRecoilContent("ownerInfo");
    }, []);


    return (
        <div className="flex flex-col min-h-screen">
          <DashboardNavbar />
          <div className="flex flex-row flex-1">
          <DashboardSidebar toggleModal={toggleModal} setSelectedMenu={setSelectedMenu}/>
            <div className="flex flex-col flex-1 bg-[#F7F7F7] relative overflow-auto z-10 overscroll-none"> {/* 메인 컨텐츠 영역 */}
              {/* 컨텐츠 영역 */}
              {selectedMenu === "main" && <DashboardMypageMain />}
              {selectedMenu === "manageBusinessHours" && <ManageBusinessHours/>}
              {selectedMenu === "pauseService" && (
                            <PauseService onClose={() => console.log("메인클릭")} />
                        )}
              {selectedMenu === "holidaySchedule" && <HolidaySchedule />}
              <Footer/>
            </div>
          </div>
        </div>
      );
    };


export default Page;

