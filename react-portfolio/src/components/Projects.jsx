import React from 'react';
import { Card, Row, Col, Badge, Tag } from 'antd';
import { ProjectOutlined } from '@ant-design/icons';

const { Meta } = Card;

const projects = [
  {
    title: 'DIGITAL FINANCIAL APPLICATION',
    position: "Back-end (.NET Developer)",
    shortDescription: '09/2023 - 03/2025',
    description: 'Project is a platform for asset management and real estate financial investment, allowing users to track investment portfolios, generate electronic contracts, manage cash flow, and integrate data from third-party partners such as banks, appraisal companies, and notary offices.',
    responsibilities:
      [
        'Developed APIs for financial transactions and asset management',
        'Integrated third-party services: banking, eKYC, digital signatures',
        'Improved performance with Redis and Memcached caching',
        'Used Elasticsearch for log analysis and monitoring',
        'Automated tasks with Hangfire, Redis, BackgroundService',
        'Secured system with OAuth2 and JWT authentication',
        'Optimized database queries for performance'
      ],
    teamSize: '20',
    technologies:
      [
        '.NET',
        'SQL Server/MongoDB/Redis',
        'RESTful APIs',
        'OAuth2/JWT',
        "Elasticsearch",
        "RabbitMQ",
        "Nginx",
        "Docker",
        "Kubernetes",
      ],
  },
  {
    title: 'FINANCE INVESTMENT',
    position: "Back-end (.NET Developer)",
    shortDescription: '09/2022 - 03/2025',
    description: 'Financial investment project is an online investment platform that offers financial products such as corporate bonds, mutual fund certificates, and investment savings packages. The system supports online transactions, asset management, and real-time updates of profit indicators and transaction history.',
    responsibilities: [
      'Built and maintained APIs for real estate listings',
      'Developed contract, payment, and ownership management APIs',
      'Designed system architecture and database schema',
      'Integrated securely with third-party APIs',
      'Wrote stored procedures for data retrieval',
      'Configured reverse proxy and deployed APIs',
      'Implemented OAuth2 and JWT authentication',
      'Optimized database queries for performance',
    ],
    teamSize: '10',
    technologies:
      [
        '.NET',
        'SQL Server/MongoDB/Redis',
        'RESTful APIs',
        'OAuth2/JWT',
        "Elasticsearch",
        "RabbitMQ",
        "Nginx",
        "Docker"
      ],
  },
  {
    title: 'CONSTRUCTION MANAGEMENT',
    position: "Back-end (.NET Developer)",
    shortDescription: '10/2022 - 03/2023',
    description: 'The system can track various construction projects, including information about the project, location, budget, and schedule.',
    responsibilities: [
      "Build and maintain APIs to handle and track various construction projects, including project details, location, budget, and schedule.",
      "Process data for generating statistics and reports on project progress, costs, and quality.",
      "Provide technical support and guidance to users on utilizing construction management systems."
    ],
    teamSize: '5',
    technologies:
      [
        '.NET',
        'SQL Server',
        'RESTful APIs',
        'OAuth2/JWT',
        "EF CORE",
      ],
  },
];

const Projects = () => (
  <Card
    id="projects"
    title={
            <span>
                <ProjectOutlined style={{ marginRight: 8 }} />
                Projects
            </span>
        }
    style={{ margin: '20px 0' }}
  >
    <Row gutter={[16, 16]}>
      {projects.map((project, idx) => (
        <Col xs={24} sm={8} key={idx}>
          <Card
            title={project.title}
            hoverable
            style={{ height: '100%' }}
          >
            <Meta title={project.position} description={project.shortDescription} />
            <ul>
              {project.technologies.map((item, index) => (
                <Badge count={item} style={{ backgroundColor: '#1890ff', margin: '4px' }} key={index} />
              ))}
            </ul>
            <strong>Team Size:</strong> {project.teamSize}
            <br />
            <strong>Description:</strong> {project.description}
            <br />
            <strong>Responsibilities:</strong>
            <ul>
              {project.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card>
        </Col>
      ))}
    </Row>
  </Card>
);

export default Projects;
