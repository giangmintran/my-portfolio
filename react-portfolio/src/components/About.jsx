import React from 'react';
import { Card, Typography, Row, Col, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About = () => (
    <div id="about-section">
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

                <Col xs={24} md={16}>
                    <Title level={3}>Hi! I'm a Backend Developer</Title>
                    <Paragraph>
                        Hello! I'm a Backend Developer specialized in <strong>.NET</strong> with a strong enthusiasm for building robust, scalable, and high-performance backend systems.
                        With extensive experience in developing applications using the <strong>.NET ecosystem</strong>, I'm always focused on creating optimal and sustainable technical solutions.
                    </Paragraph>

                    <Title level={4}>Technical Expertise</Title>
                    <Paragraph>
                        <ul>
                            <li><strong>Programming Languages:</strong> C#, SQL, JavaScript</li>
                            <li><strong>Frameworks & Technologies:</strong> .NET Core/5+, ASP.NET Core Web API, Entity Framework Core</li>
                            <li><strong>Databases:</strong> SQL Server, Oracle, MongoDB, Redis</li>
                            <li><strong>Cloud & DevOps:</strong> Azure, Docker, CI/CD pipelines</li>
                            <li><strong>Architecture:</strong> RESTful APIs, Microservices, Clean Architecture, Domain-Driven Design (DDD)</li>
                        </ul>
                    </Paragraph>

                    <Title level={4}>Core Strengths</Title>
                    <Paragraph>
                        I have the ability to design and implement high-performance <strong>RESTful APIs</strong>, optimize database queries,
                        and handle complex scenarios in distributed systems. I'm particularly focused on writing clean, maintainable code that adheres to <strong>SOLID principles</strong>.
                    </Paragraph>
                    <Paragraph>
                        I have experience working with modern architectural patterns such as <strong>Clean Architecture</strong> and <strong>Microservices</strong>,
                        along with deep understanding of patterns like <strong>Repository</strong>, <strong>Unit of Work</strong>, and <strong>CQRS</strong>.
                        Additionally, I'm capable of integrating third-party services, handling <strong>authentication/authorization</strong>, and implementing
                        caching solutions to optimize performance.
                    </Paragraph>

                    <Title level={4}>Vision</Title>
                    <Paragraph>
                        I'm constantly learning and staying updated with the latest technologies in the .NET ecosystem, from new <strong>C#</strong> features to
                        cloud computing best practices. My goal is to become a <strong>Senior Backend Developer</strong> capable of leading technical teams and
                        contributing to building impactful technology products.
                    </Paragraph>
                </Col>
            </Row>
        </Card>
    </div>
);

export default About;
