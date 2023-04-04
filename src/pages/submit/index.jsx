import { PlusOutlined } from "@ant-design/icons";
import { Button, Checkbox, DatePicker, Form, Input, Upload } from "antd";
import { useState } from "react";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const App = () => {
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="课程名称">
          <Input />
        </Form.Item>

        <Form.Item label="课程持续时间">
          <RangePicker />
        </Form.Item>

        <Form.Item label="课程内容介绍">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default App;
