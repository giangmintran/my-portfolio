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
                    I’m a backend developer with over 3 years of experience in building software systems across the fintech and construction management sectors.
                    Specializing in <strong>.NET/.NET Core</strong>, I have successfully delivered robust API platforms and microservices that support secure and high-performance financial transactions,
                    as well as optimize operational workflows for the construction industry.
                </Paragraph>
                <Paragraph>
                    I’m proficient in <strong>C#, Entity Framework, and SQL Server</strong>, and have worked extensively with <strong>MongoDB</strong> and <strong>Redis</strong> to ensure efficient data processing.
                    I also have experience deploying systems on <strong>Azure</strong>, implementing CI/CD pipelines with <strong>Azure DevOps</strong>, and containerizing applications using <strong>Docker</strong> and <strong>Kubernetes</strong>.
                </Paragraph>
                <Paragraph>
                    My work emphasizes secure transaction standards, system scalability, and high availability—core values in both fintech and enterprise software.
                    With a growth mindset and strong passion for technology, I continuously strive to develop innovative and sustainable software solutions.
                </Paragraph>
            </Col>

        </Row>
    </Card>
);

export default About;
