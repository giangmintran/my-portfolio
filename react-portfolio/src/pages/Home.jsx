import React, { useState } from 'react';
import { Layout, Avatar, Typography, Divider, Drawer } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined
} from '@ant-design/icons';
import Navbar from '../components/Nav';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

const { Sider, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

// Simple hook for screen width
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

const Home = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerFullyClosed, setDrawerFullyClosed] = useState(true); // Track fully closed state
  const isMobile = useIsMobile();

  const sidebarContent = (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Avatar size={64} src="/avatar.jpg" icon={<UserOutlined />} />
      <Title level={4} style={{ marginTop: '10px' }}>Tran Minh Giang</Title>
      <Paragraph style={{ fontSize: '13px', color: '#888' }}>
        .NET Backend Developer
      </Paragraph>
      <div style={{ marginTop: '10px' }}>
        <a href="https://github.com/giangmintran" target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px', fontSize: '24px', color: '#000' }}>
          <GithubOutlined />
        </a>
        <a href="https://www.linkedin.com/in/giangmintran/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px', fontSize: '24px', color: '#000' }}>
          <LinkedinOutlined />
        </a>
        <a href="https://www.facebook.com/giangmintran" target="_blank" rel="noopener noreferrer" style={{ margin: '0 8px', fontSize: '24px', color: '#000' }}>
          <FacebookOutlined />
        </a>
      </div>
      <Divider />
      <div style={{ textAlign: 'left'}}>
        <Navbar />
      </div>
    </div>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isMobile ? (
        <>
          {drawerFullyClosed && (
            <MenuOutlined
              style={{
                position: 'fixed',
                top: 20,
                left: 20,
                fontSize: 28,
                zIndex: 1100,
                cursor: 'pointer',
                background: '#fff',
                borderRadius: '50%',
                padding: 8,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
              onClick={() => {
                setDrawerVisible(true);
                setDrawerFullyClosed(false);
              }}
            />
          )}
          <Drawer
            title=""
            placement="left"
            closable={true}
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            bodyStyle={{ padding: 0 }}
            afterOpenChange={(open) => setDrawerFullyClosed(!open)}
          >
            {sidebarContent}
          </Drawer>
        </>
      ) : (
        <Sider
          width={220}
          style={{
            background: '#fff',
            minHeight: '100vh',
            borderRight: '1px solid #eee',
            position: 'fixed',
            left: 0,
            top: 0,
            height: '100vh',
            zIndex: 100
          }}
        >
          {sidebarContent}
        </Sider>
      )}
      <Layout style={isMobile ? {} : { marginLeft: 220 }}>
        <Content style={{ padding: '20px' }}>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2025 Tran Minh Giang
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
