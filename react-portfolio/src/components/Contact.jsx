import React from 'react';
import { Card, Form, Input, Button, message } from 'antd';

const Contact = () => {
  const onFinish = (values) => {
    console.log(values);
    message.success('Message sent!');
  };

  return (
    <Card
      id="contact"
      title="Contact Me"
      style={{ margin: '20px 0' }}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Your name" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="you@example.com" />
        </Form.Item>

        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <Input.TextArea rows={4} placeholder="Your message..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Contact;
