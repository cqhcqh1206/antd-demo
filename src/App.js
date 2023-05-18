import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Breadcrumb, Layout, Menu, theme } from "antd";
/* import MyFirstComponent from "./components/my-first-component"; */
import { Link, Route, Routes } from "react-router-dom";

import Class1 from "./pages/class1";
import Class2 from "./pages/class2";
import Signin from "./pages/signin";
import Imformation from "./pages/information";
import Calendar from "./pages/calendar";
import Personal from "./pages/personal";
import Touxiang from "./pages/touxiang";
import Submit from "./pages/submit";
import Class5 from "./pages/class5";
import Progress from "./pages/progress";
import Openai from "./pages/openai";
import "./App.css";

const { Header, Content, Sider } = Layout;

/* const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
})); */

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    const name = ["概要", "语言模型", "其他"];
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: name[index],
      children: [
        "/class1",
        "/information",
        "/calendar",
        "/progress",
        "/openai",
      ].map((item, j) => {
        const subKey = index * 4 + j + 1;
        var cars = [
          "通知",
          "介绍",
          "日历",
          "修改密码",
          "open ai",
          "claude+",
          "通义千问",
        ];
        return {
          key: subKey,
          label: <Link to={item}>{` ${cars[subKey - 1]} `}</Link>,
        };
      }),
    };
  }
);

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  /* const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const onChangetwo = (key) => {
    console.log(key);
  }; */

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          /* items={items1} */
        >
          <Menu.Item key="1">
            <Link to="/class1">class1</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/class2">class2</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/class1" Component={Class1} />
              <Route path="/class2" Component={Class2} />
              <Route path="/signin" Component={Signin} />
              <Route path="/information" Component={Imformation} />
              <Route path="/calendar" Component={Calendar} />
              <Route path="/personal" Component={Personal} />
              <Route path="/touxiang" Component={Touxiang} />
              <Route path="/submit" Component={Submit} />
              <Route path="/class5" Component={Class5} />
              <Route path="/progress" Component={Progress} />
              <Route path="/openai" Component={Openai} />
            </Routes>
            {/* <MyFirstComponent /> */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
