import React from "react";
import Dashboard from "@/component/Layout/DashboardLayout";
import DashboardLayout from "@/component/Layout/DashboardLayout";
import BaseLayout from "@/component/Layout/BaseLayout";

const admin = () => {
  return <div>this is admin page</div>;
};

export default admin;

admin.getLayout = function getLayout(page) {
  return (
    <BaseLayout>
      <DashboardLayout>{page}</DashboardLayout>;
    </BaseLayout>
  );
};
