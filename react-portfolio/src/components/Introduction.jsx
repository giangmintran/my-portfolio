import { Button, Typography } from 'antd';
const { Title, Paragraph } = Typography;

const Introduction = () => {
    // Detect mobile
    const isMobile = window.innerWidth < 768;
    const bgImage = isMobile ? '/971.jpg' : '/4877368.jpg';

    // Scroll to About section
    const handleViewDetail = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                background: `linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25)), url('${bgImage}') center/cover no-repeat`,
                color: '#fff',
                borderRadius: 4,
                textAlign: 'center',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '60vh',
            }}
        >
            <Title
                style={{
                    color: '#fff',
                    marginBottom: 16,
                    fontSize: 44,
                    fontWeight: 900,
                    textShadow: '0 4px 24px rgba(24,144,255,0.35), 0 2px 8px rgba(0,0,0,0.25)',
                    letterSpacing: 1,
                    lineHeight: 1.1,
                }}
            >
                Hi, I'm Tran Minh Giang
            </Title>
            <Paragraph
                style={{
                    color: '#fff',
                    fontSize: 22,
                    fontWeight: 600,
                    textShadow: '0 2px 8px rgba(0,0,0,0.25)',
                    marginBottom: 32,
                }}
            >
                .NET Backend Developer passionate about building scalable and robust applications.
            </Paragraph>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', marginTop: 32 }}>
                <Button
                    type="primary"
                    size="large"
                    onClick={handleViewDetail}
                    style={{
                        minWidth: 160,
                        borderRadius: 28,
                        fontWeight: 700,
                        fontSize: 20,
                        padding: '10px 32px',
                        letterSpacing: 1,
                    }}
                >
                    View Detail
                </Button>
                <Button
                    type="default"
                    size="large"
                    href="/TranMinhGiang_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        minWidth: 160,
                        borderRadius: 28,
                        fontWeight: 700,
                        fontSize: 20,
                        background: 'rgba(255, 255, 255, 0.18)',
                        color: '#fff',
                        border: '2px solid #fff',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                        padding: '10px 32px',
                        letterSpacing: 1,
                        transition: 'background 0.3s, color 0.3s, border 0.3s',
                    }}
                    onMouseOver={e => {
                        e.currentTarget.style.background = '#fff';
                        e.currentTarget.style.color = '#000';
                        e.currentTarget.style.border = 'none';
                    }}
                    onMouseOut={e => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.border = '2px solid #fff';
                    }}
                >
                    Download Resume
                </Button>
            </div>
        </div>
    );
};

export default Introduction;