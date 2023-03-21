import React from 'react';
import { UserOutlined,EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { InpButton, Input, Spaceut } from 'antd';

const App = () => {
  <>
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input placeholder="default size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
  </>
     const [passwordVisible, setPasswordVisible] = React.useState(false);

     return (
        <Space direction="vertical">
          <Input.Password placeholder="input password" />
          <Input.Password
            placeholder="input password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <Space direction="horizontal">
            <Input.Password
              placeholder="input password"
              visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
            />
            <Button style={{ width: 80 }} onClick={() => setPasswordVisible((prevState) => !prevState)}>
              {passwordVisible ? 'Hide' : 'Show'}
            </Button>
          </Space>
        </Space>
      );

     };

export default App;