import { DashboardOverview } from "../../components/dashboard/dashboard-overview";
import { DashboardHeader } from "../../components/dashboard/dashboard-header";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader
        heading="Welcome, Muhammed!"
        text="Overview of your real estate activities"
      />
      <DashboardOverview />
    </div>
  );
}
