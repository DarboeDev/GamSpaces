"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { DashboardHeader } from "../../../components/dashboard/dashboard-header";
import { PropertyDialog } from "../../../components/dashboard/property-dialog";
import { Button } from "../../../components/ui/button";

export default function PropertiesPage() {
  const [showAddProperty, setShowAddProperty] = useState(false);

  return (
    <div className="space-y-6">
      <DashboardHeader
        heading="Properties"
        text="Manage your real estate listings"
      >
        <Button onClick={() => setShowAddProperty(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </DashboardHeader>
      {/* <PropertyList /> */}
      <PropertyDialog
        open={showAddProperty}
        onOpenChange={setShowAddProperty}
      />
    </div>
  );
}
