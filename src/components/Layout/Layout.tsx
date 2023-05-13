import React from "react";
import { Layout, Space } from "antd";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: "100vh",
  color: "#fff",
  backgroundColor: "#4158D0", 
  backgroundImage:
    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
};

interface ILayoutComponent {
  children: React.ReactNode;
}

const LayoutComponent: React.FC<ILayoutComponent> = ({ children }) => (
  <Space direction='vertical' style={{ width: "100%" }} size={[0, 48]}>
    <Layout>
      <Content style={contentStyle}>{children}</Content>
    </Layout>
  </Space>
);

export default LayoutComponent;

