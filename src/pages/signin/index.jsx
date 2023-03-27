import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space, message } from "antd";
import http from "../../utils/http";

const App = () => {
  const { size, setSize } = useState("large");
  const [state, setState] = useState({
    account: "",
    psd: "",
  });
  /* const onFinish = (values) => {
    console.log("Received values of form: ", values);
  }; */
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      /* onFinish={onFinish} */
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          value={state.account}
          onChange={(e) => {
            console.log("e", e);
            setState({
              ...state,
              account: e.target.value,
            });
          }}
          placeholder="Username"
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
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          value={state.psd}
          onChange={(e) => {
            console.log("e", e);
            setState({
              ...state,
              psd: e.target.value,
            });
          }}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Space size={size}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
          <Button
            onClick={() => {
              http
                .post("http://www.tewx.cn:9089/user/register", {
                  account: state.account,
                  psd: state.psd,
                })
                .then((res) => {
                  console.log("then res", res);
                  if (res.data.code === 0) {
                    message.error(res.data.msg);
                  }
                  if (res.data.code === 1) {
                    message.success(res.data.data);
                  }
                });
            }}
          >
            注册
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Space>
      </Form.Item>
    </Form>
  );
};

export default App;
