import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, ProjectOutlined, ContactsOutlined, RocketOutlined, CodeOutlined } from '@ant-design/icons';

const Navbar = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Menu
            theme="light"
            mode="vertical"
            style={{ borderBottom: 'none' }}
            defaultSelectedKeys={[]}
        >
            <Menu.Item key="about" icon={<UserOutlined />} onClick={() => scrollToSection('about')}>
                About
            </Menu.Item>
            <Menu.Item key="projects" icon={<ProjectOutlined />} onClick={() => scrollToSection('projects')}>
                Projects
            </Menu.Item>
            <Menu.Item key="skills" icon={<CodeOutlined />} onClick={() => scrollToSection('skills')}>
                Skills
            </Menu.Item>
            <Menu.Item key="contact" icon={<ContactsOutlined />} onClick={() => scrollToSection('contact')}>
                Contact
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;
