import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/router";
import BaseLayout from "@/component/Layout/BaseLayout";
import DashboardLayout from "@/component/Layout/DashboardLayout";

const SampleForm = () => {
  const { handleSubmit, control, reset } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      // Make the API call here
      const response = await fetch("http://localhost:3000/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Check if the response is successful
      if (response.ok) {
        console.log("Data submitted successfully!");
        router.push("/");
        // You can perform any additional actions here on successful submission
      } else {
        console.log("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error occurred while submitting data:", error);
    }
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      {/* Text Input */}
      <Form.Item label="Name" name="name">
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      {/* Email Input */}
      <Form.Item label="Email" name="email">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} type="email" />}
        />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SampleForm;

SampleForm.getLayout = function getLayout(page) {
  return (
    <BaseLayout>
      <DashboardLayout>{page}</DashboardLayout>;
    </BaseLayout>
  );
};
