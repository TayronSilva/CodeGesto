import React from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            zIndex: 1000,
        }}>
            <div style={{
                width: '100%',
                maxWidth: '1100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px',
            }}>
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
                >
                    <img src={logo} alt="CodeGesto Logo" style={{
                        width: '32px',
                        height: '32px',
                        objectFit: 'contain'
                    }} />
                    <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.5px' }}>
                        CODE<span className="gradient-text">GESTO</span>
                    </span>
                </div>

                <nav>
                    <ul style={{ display: 'flex', gap: '24px', fontWeight: 500, fontSize: '0.95rem' }}>
                        <li><a href="#services" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Serviços</a></li>
                        <li><a href="#contact" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Contato</a></li>
                    </ul>
                </nav>

                <button
                    onClick={() => window.open('https://wa.me/5521975946473', '_blank')}
                    style={{
                        padding: '8px 18px',
                        borderRadius: '6px',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        color: 'white',
                        background: 'var(--primary)',
                        border: 'none',
                        transition: 'opacity 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                    Começar
                </button>
            </div>
        </header>
    );
};

export default Header;
