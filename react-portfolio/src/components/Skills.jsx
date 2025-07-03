import React, { useEffect } from 'react';
import { Card, Row, Col, Progress } from 'antd';
import {
    CodeOutlined,
} from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
    { name: 'C# / .NET', level: 70, icon: <img src="/csharp.svg" alt="C#" style={{ width: 24, height: 24 }} /> },
    { name: 'ASP.NET Core (API)', level: 70, icon: <img src="/Netcore.svg" alt="ASP.NET Core (API)" style={{ width: 24, height: 24 }} /> },
    { name: 'SQL Server', level: 70, icon: <img src="/sql.svg" alt="SQL" style={{ width: 24, height: 24 }} /> },
    { name: 'Node.js', level: 60, icon: <img src="/nodejs.svg" alt="Node.js" style={{ width: 24, height: 24 }} /> },
    { name: 'Angular', level: 50, icon: <img src="/Angular.svg" alt="Angular" style={{ width: 24, height: 24 }} /> },
    { name: 'React', level: 50, icon: <img src="/React.svg" alt="React" style={{ width: 24, height: 24 }} /> },
    { name: 'JavaScript', level: 50, icon: <img src="/JavaScript.svg" alt="JavaScript" style={{ width: 24, height: 24 }} /> },
    { name: 'HTML/CSS', level: 50, icon: <img src="/HTML5.svg" alt="HTML/CSS" style={{ width: 24, height: 24 }} /> },
    { name: 'Docker / CI/CD', level: 55, icon: <img src="/Docker.svg" alt="Docker" style={{ width: 24, height: 24 }} /> },
];

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    return (
        <Card
            id="skills"
            title={
                <span>
                    <CodeOutlined style={{ marginRight: 8 }} />
                    Skills
                </span>
            }
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
