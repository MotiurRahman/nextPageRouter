import { FaGoogle, FaGithub } from "react-icons/fa";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space } from "antd";
import BaseLayout from "@/component/Layout/BaseLayout";
import DashboardLayout from "@/component/Layout/DashboardLayout";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import auth from "@/firebaes/firebase.auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
  };
  console.log("user", user);
  return (
    <div>
      <h1>Login with:</h1>
      <Button
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000" })
        }
      >
        Google <FaGoogle />
      </Button>
      <Button
        onClick={() =>
          signIn("github", { callbackUrl: "http://localhost:3000" })
        }
      >
        GitHub <FaGithub />
      </Button>
      <Space margin={16}>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <input
                {...register("email")}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <input
                {...register("password")}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <button type="submit" className="login-form-button">
                Log in
              </button>
            </Form.Item>
          </form>
        </div>
      </Space>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return (
    <BaseLayout>
      <DashboardLayout>{page}</DashboardLayout>;
    </BaseLayout>
  );
};
