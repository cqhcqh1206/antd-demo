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
import { Group } from "antd/es/avatar";

const { Header, Content, Sider } = Layout;

/* const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
})); */

const items2 = [
  {
    icon: UserOutlined,
    name: "概要",
    group: "/group1",
    items: [
      {
        name: "通知",
        link: "/class1",
      },
      {
        name: "介绍",
        link: "/personal",
      },
      {
        name: "日历",
        link: "/calendar",
      },
      {
        name: "修改密码",
        link: "/information",
      },
    ],
  },
  {
    icon: UserOutlined,
    name: "语言模型",
    group: "/group2",
    items: [
      {
        name: "openai",
        link: "/class1",
      },
    ],
  },
  {
    icon: UserOutlined,
    name: "其他",
    group: "/group3",
    items: [
      {
        name: "openai",
        link: "/class1",
      },
    ],
  },
].map((data, i) => {
  const { icon, group, name, items } = data;
  return {
    key: i,
    icon: React.createElement(icon),
    label: name,
    children: items.map((item, j) => {
      return {
        key: i + "/" + j,
        label: (
          <Link to={group + item.link} key={j}>
            {item.name}
          </Link>
        ),
      };
    }),
  };
});

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
              <Route path="/group1/class1" Component={Class1} />
              <Route path="/class2" Component={Class2} />
              <Route path="/signin" Component={Signin} />
              <Route path="/group1/information" Component={Imformation} />
              <Route path="/group1/calendar" Component={Calendar} />
              <Route path="/group1/personal" Component={Personal} />
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
