import React, { useEffect } from 'react';
import { Card, Row, Col, Progress } from 'antd';
import {
  CodeOutlined,
  Html5Outlined,
  GithubOutlined,
  NodeExpandOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'React', level: 90, icon: <CodeOutlined style={{ color: '#61DBFB', fontSize: 24 }} /> },
  { name: 'JavaScript', level: 85, icon: <CodeOutlined style={{ color: '#F0DB4F', fontSize: 24 }} /> },
  { name: 'HTML/CSS', level: 80, icon: <Html5Outlined style={{ color: '#e34c26', fontSize: 24 }} /> },
  { name: 'Node.js', level: 75, icon: <NodeExpandOutlined style={{ color: '#68A063', fontSize: 24 }} /> },
  { name: 'C# / .NET', level: 70, icon: <GithubOutlined style={{ color: '#6e5494', fontSize: 24 }} /> },
  { name: 'SQL', level: 65, icon: <DatabaseOutlined style={{ color: '#00758f', fontSize: 24 }} /> },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Card
      id="skills"
      title="Skills"
      style={{ margin: '20px 0' }}
      data-aos="fade-up"
    >
      <Row gutter={[16, 16]}>
        {skills.map((skill, idx) => (
          <Col xs={24} sm={12} md={8} key={idx}>
            <div data-aos="zoom-in" style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                {skill.icon}
                <h4 style={{ margin: '0 0 0 10px' }}>{skill.name}</h4>
              </div>
              <Progress percent={skill.level} showInfo={false} />
            </div>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default Skills;
