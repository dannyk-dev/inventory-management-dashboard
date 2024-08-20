import DashboardWrapper from "@/components/shared/dashboard-wrapper";
import React, { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <DashboardWrapper>{children}</DashboardWrapper>
    // </main>
  );
};

export default DashboardLayout;
