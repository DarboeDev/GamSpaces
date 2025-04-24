"use client";

import { DashboardHeader } from "../../../components/dashboard/dashboard-header";

// import { AppointmentList } from "../../components/dashboard/appointment-list";

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader
        heading="Appointments"
        text="Manage property viewings and client meetings"
      />
      {/* <AppointmentList /> */}
    </div>
  );
}
