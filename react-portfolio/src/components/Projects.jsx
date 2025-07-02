import React from 'react';
import { Card, Row, Col } from 'antd';

const projects = [
  { title: 'Project One', description: 'Description of project one' },
  { title: 'Project Two', description: 'Description of project two' },
];

const Projects = () => (
  <Card
    id="projects"
    title="Projects"
    style={{ margin: '20px 0' }}
  >
    <Row gutter={[16, 16]}>
      {projects.map((project, idx) => (
        <Col xs={24} sm={12} key={idx}>
          <Card
            title={project.title}
            bordered
            hoverable
            style={{ height: '100%' }}
          >
            {project.description}
          </Card>
        </Col>
      ))}
    </Row>
  </Card>
);

export default Projects;
