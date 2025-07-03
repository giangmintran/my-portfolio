import React from 'react';
import { Card, Form, Input, Button, message, Row, Col, Typography } from 'antd';
import { ContactsOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log(values);
    message.success('Message sent!');
  };

  return (
    <Card
      id="contact"
      title={
        <span>
          <ContactsOutlined style={{ marginRight: 8 }} />
          Contact Me
        </span>
      }
      style={{ margin: '20px 0' }}
    >
      <Row gutter={32}>
        <Col xs={24} md={10} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Title level={3}>Get in touch</Title>
          <Paragraph>
            Feel free to reach out for collaborations, project inquiries, or just to say hello!
          </Paragraph>
        </Col>
        <Col xs={24} md={14}>
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
        </Col>
      </Row>
    </Card>
  );
};

export default Contact;
