import React from "react";
import { Button, Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const { Header, Content, Footer } = Layout;
const BaseLayout = ({ children }) => {
  const { data: session } = useSession();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" className="">
          <Button type="primary">
            <Link href="/">Home</Link>
          </Button>
          <Button>
            <Link href="/user">user</Link>
          </Button>
          <Button>
            {" "}
            <Link href="/about">about</Link>
          </Button>

          {session?.user ? (
            <Button
              onClick={() => {
                signOut();
              }}
            >
              logout
            </Button>
          ) : (
            <Button>
              <Link href="/login">login</Link>
            </Button>
          )}
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            height: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};
export default BaseLayout;
