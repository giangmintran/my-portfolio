import React from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

const { Content, Footer } = Layout;

const Home = () => (
  <Layout>
    <Header />
    <Content style={{ padding: '10px 20px 20px' }}>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Content>
    <Footer style={{ textAlign: 'center' }}>©2025 Tran Minh Giang </Footer>
  </Layout>
);

export default Home;
