import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

import { Carousel } from 'antd';
import { Collapse } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MyFirstComponent from './components/my-first-component';
import { Link, Route, Routes } from 'react-router-dom';

import Class1 from './pages/class1';
import Class2 from './pages/class2';
import './App.css';

const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
          link: <Link to="/class1" />,
        };
      }),
    };
  },
);

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;



const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const onChangetwo = (key) => {
    console.log(key);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} >
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
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
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


             <Carousel afterChange={onChange}>
                <div>
                  <h3 style={contentStyle}>1</h3>
                 </div>
                 <div>
                    <h3 style={contentStyle}>2</h3>
                  </div>
                 <div>
                    <h3 style={contentStyle}>3</h3>
                  </div>
                 <div>
                   <h3 style={contentStyle}>4</h3>
                 </div>
             </Carousel>

             <p>{ }</p>

             <Collapse defaultActiveKey={['1']} onChange={onChangetwo}>
               <Panel header="This is panel header 1" key="1">
                  <p>{text}</p>
                </Panel>
               <Panel header="This is panel header 2" key="2">
                   <p>{text}</p>
                </Panel>
               <Panel header="This is panel header 3" key="3">
                   <p>{text}</p>
               </Panel>
              </Collapse>
              
              {/* <Routes>
                 <Route path="/class1" Component={Class1} />
                 <Route path="/class2" Component={Class2} />
               </Routes>  */}
               
              <MyFirstComponent />


          </Content>

         

        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;