import React from 'react';

import {
  Form, Input, Button, Checkbox, Modal,
} from 'antd';
import '../styles/Home.module.css';

import Link from 'next/link';

import Head from 'next/head';

import Layout from './components/layout';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface ValidateErrorEntity<Values = any> {
  values: Values;
  errorFields: {
      name: (string | number)[];
      errors: string[];
  }[];
  outOfDate: boolean;
}
export default function Login() {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const onFinish = (values:string) => {
    setModalText(values);
  };

  const onFinishFailed = (errorInfo:ValidateErrorEntity<string>) => {
    setModalText(errorInfo.values);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="main">
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ width: '50%' }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input size="small" placeholder="large size" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password size="small" placeholder="large size" />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Modal
            title="Title"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <p>{modalText}</p>
          </Modal>
          <Button type="primary" onClick={showModal}>
            Open Modal with async logic
          </Button>
          <Link href="/settings/users">this page!</Link>
        </div>
      </Layout>
    </>
  );
}
