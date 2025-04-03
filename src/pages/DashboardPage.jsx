import React from "react";
import TopBar from "../components/TopBar";
import "../styles/dashboard.scss";
import SearchIcon from "../assets/icons/search-normal.svg";
import BellIcon from "../assets/icons/notification-bing.svg";
import MessageIcon from "../assets/icons/message-text.svg";
import GalleryIcon from "../assets/icons/gallery.svg";
import ArrowDownIcon from "../assets/icons/arrow-down.svg";
import { Card } from "../components/Card";
import { OverviewCard } from "../components/Card";
import { overview } from "../data/overview";
import { savingPlan } from "../data/savingplan";
import { SavingPlanCard } from "../components/SavingPlanCard";
import { recentTransaction } from "../data/recenttransaction";
import { TransactionCard } from "../components/TransactionCard";
import { AnalyticsCard } from "../components/AnalyticsCard";

const DashboardPage = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="search-topbar">
        <TopBar>
          <img src={SearchIcon} width={16} height={16} />
          <span>Search here...</span>
        </TopBar>
      </div>
      <div className="user-topbar">
        <TopBar>
          <div className="bell">
            <img src={BellIcon} />
          </div>
          <div className="message">
            <img src={MessageIcon} />
          </div>
          <div className="gallery">
            <div>
              <img src={GalleryIcon} />
            </div>
            <span>Mirie Kiritani</span>
            <img src={ArrowDownIcon} />
          </div>
        </TopBar>
      </div>
      <div className="overview-card-wrapper">
        <Card title="Overview">
          <div className="overview-subcard-container">
            {overview?.map((item, index) => (
              <div key={index} className="overview-subcard">
                <OverviewCard cardData={item} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="saving-card">
        <SavingPlanCard items={savingPlan} />
      </div>
      <div className="analytics-card">
        <AnalyticsCard />
      </div>
      <div className="transaction-card">
        <TransactionCard items={recentTransaction} />
      </div>
    </div>
  );
};

export default DashboardPage;
