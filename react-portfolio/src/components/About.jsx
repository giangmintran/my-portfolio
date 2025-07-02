import React from 'react';
import { Card, Typography, Row, Col, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About = () => (
    <Card
        id="about"
        style={{ margin: '20px 0' }}
        title={
            <span>
                <UserOutlined style={{ marginRight: 8 }} />
                About Me
            </span>
        }
    >
        <Row gutter={[24, 24]} align="middle">
            {/* Bên trái: ảnh đại diện */}
            <Col xs={24} md={8} style={{ textAlign: 'center' }}>
                <Image
                    width={200}
                    src="/avt.png"
                    alt="Your avatar"
                    style={{ borderRadius: '50%' }}
                    preview={false}
                />
            </Col>

            {/* Bên phải: thông tin giới thiệu */}
            <Col xs={24} md={16}>
                <Title level={3}>Hi, I'm a .NET Backend Developer</Title>
                <Paragraph>
                    I am a Backend Developer with over 3 years of hands-on experience in building and optimizing web systems using the <strong>.NET / ASP.NET Core</strong> platform.
                    I have contributed to the development of various systems in <strong>finance, data management, and transaction processing</strong>,
                    focusing on high performance, strong security, and scalable architecture.
                </Paragraph>
                <Paragraph>
                    I have hands-on experience with microservice architecture, RESTful APIs, and asynchronous processing using <strong>Hangfire</strong> and <strong>BackgroundService</strong>. I'm also proficient in caching strategies using <strong>Redis</strong> and <strong>MemoryCache</strong>.
                </Paragraph>
                <Paragraph>
                    My work often includes integrating with third-party services (eKYC, payment gateways, digital signature), optimizing database queries, and deploying apps with Docker, Nginx, and GitLab CI/CD pipelines.
                </Paragraph>
                <Paragraph>
                    I’m passionate about clean architecture, SOLID principles, and delivering maintainable and testable code. I always seek opportunities to learn and apply the latest technologies in the .NET ecosystem.
                </Paragraph>
            </Col>
        </Row>
    </Card>
);

export default About;
