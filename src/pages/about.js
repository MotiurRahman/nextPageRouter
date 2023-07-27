import React from "react";
import BaseLayout from "@/component/Layout/BaseLayout";
import DashboardLayout from "@/component/Layout/DashboardLayout";

const about = () => {
  return (
    <div>
      <h1>this is about page</h1>
    </div>
  );
};

export default about;

about.getLayout = function getLayout(page) {
  return (
    <BaseLayout>
      <DashboardLayout>{page}</DashboardLayout>;
    </BaseLayout>
  );
};
