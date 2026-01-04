import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Filters from "../components/Filters/Filters";
import StatsCards from "../components/StatsCards/StatsCards";
import ApplicationsTable from "../components/ApplicationsTable/ApplicationsTable";
import Banner from "../components/Banner/Banner";
import NewsBulletin from "../components/NewsBulletin/NewsBulletin";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import ContactRegionalManager from "../components/ManagerRoles/ContactRegionalManager";

import "../styles/dashboard.css";
import { useState } from "react";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-root">
      <Header onMenuClick={() => setIsSidebarOpen((prev) => !prev)} />

      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="dashboard-body">
        <Sidebar isOpen={isSidebarOpen} />

        <main className="dashboard-content">
          <div className="dashboard-layout">
            <section className="dashboard-left">
              <h5 className="dashboard-greeting">
                Hey, Good Morning <span className="fw-bolder">Sahil!</span>
              </h5>

              <Filters />
              <StatsCards />
              <ApplicationsTable />
              <Banner />
            </section>

            <aside className="dashboard-right">
              <div className="dashboard-actions">
                <button
                  className="btn-outline"
                  onClick={() => window.location.reload()}
                >
                  Refresh Dashboard
                </button>
                <button className="btn-primary">Register Student</button>
              </div>
              <NewsBulletin />
              <UpcomingEvents />
              <QuickLinks />
              <ContactRegionalManager />
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
