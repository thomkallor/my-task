import "./FormComponent.sass";
import { Button, Form, Input, Space, Col, Row } from "antd";
import { FormFields } from "../app/form/types";
import React, { FC } from "react";

type FormProps = {
  address: string;
  hostName: string;
  password: string;
  portNumber: number;
  prefix: string;
  protocol: string;
  serverName: string;
  timeout: number;
  userName: string;
  onFinish: (data: FormFields) => void;
  onClear: () => void;
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const FormComponent: FC<FormProps> = (props: FormProps) => {
  let {
    address,
    hostName,
    password,
    portNumber,
    prefix,
    protocol,
    serverName,
    timeout,
    userName,
  } = props;
  const [form] = Form.useForm();
  const onFinish = props.onFinish;
  const onClear = () => {
    form.resetFields();
    props.onClear();
  };
  return (
    <Form
      {...layout}
      form={form}
      name="serverform"
      onFinish={onFinish}
      requiredMark={false}
    >
      <Form.Item
        label="Email Server Name:"
        name="serverName"
        rules={[
          { required: true, message: "Please input your server name!" },
          {
            pattern: /(?=^.{4,253}\.?$)(^((?!-)[a-zA-Z0-9-]{1,63}(?<!-)\.)+[a-zA-Z]{2,63}\.?$)/,
            message: "Please input a valid server name",
          },
        ]}
      >
        <Input placeholder="Name" value={serverName} />
      </Form.Item>
      <Form.Item label="From Address:" name="address">
        <Input placeholder="From Address" value={address} />
      </Form.Item>
      <Form.Item label="Subject Prefix:" name="prefix">
        <Input placeholder="Prefix" value={prefix} />
      </Form.Item>
      <Form.Item label="Protocol:" name="protocol">
        <Input placeholder="Protocol" value={protocol} />
      </Form.Item>

      <Form.Item
        label="Hostname:"
        wrapperCol={{ span: 12 }}
        // Over-ride the component style
        style={{ marginBottom: 0 }}
      >
        <Row>
          <Col span={14} className="space-right">
            <Form.Item
              name="hostName"
              rules={[
                { required: true, message: "Please input your host name!" },
              ]}
            >
              <Input placeholder="Host" value={hostName} />
            </Form.Item>
          </Col>
          <Col span={6} className="space-right">
            <Form.Item
              name="port"
              rules={[
                { required: true, message: "Please input your port number!" },
              ]}
            >
              <Input type="number" placeholder="Port" value={portNumber} />
            </Form.Item>
          </Col>
          <Col span={4} className="space-right">
            <Form.Item>
              <Button type="primary" htmlType="button">
                Check
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item label="Timeout:" name="timeout">
        <Input type="number" placeholder="in seconds" value={timeout} />
      </Form.Item>
      <Form.Item
        label="UserName:"
        name="userName"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input placeholder="Username" value={userName} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            message:
              "Password should be minimum 8 characters in length and a mix of lowercase letters, uppercase letters and numbers!",
          },
        ]}
      >
        <Input.Password placeholder="Password" value={password} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="default" htmlType="button">
            Skip
          </Button>
          <Button type="primary" htmlType="button">
            Test
          </Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button type="primary" danger htmlType="button" onClick={onClear}>
            Clear
          </Button>
          <Button type="link" htmlType="button">
            Help
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
