import React from 'react';
import { Mail, Instagram, Github, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
    return (
        <footer style={{
            marginTop: '100px',
            padding: '60px 24px 40px',
            background: '#050505',
            borderTop: '1px solid rgba(255,255,255,0.08)',
        }}>
            <div style={{
                maxWidth: '1100px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '60px',
                textAlign: 'left'
            }}>
                {/* Brand Section */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                        <img src={logo} alt="CodeGesto Logo" style={{ width: '28px', height: '28px' }} />
                        <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>CODE<span className="gradient-text">GESTO</span></span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
                        Transformando processos complexos em soluções digitais elegantes. Excelência em programação e administração.
                    </p>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <a href="https://www.instagram.com/codegesto/" target="_blank" rel="noopener noreferrer" style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '6px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--text-main)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                        ><Instagram size={18} /></a>

                        <a href="https://wa.me/5521975946473" target="_blank" rel="noopener noreferrer" style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '6px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--text-main)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                        ><MessageCircle size={18} /></a>

                        <a href="https://github.com/TayronSilva" target="_blank" rel="noopener noreferrer" style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '6px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--text-main)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                        ><Github size={18} /></a>
                    </div>
                </div>

                {/* Links Section */}
                <div>
                    <h4 style={{ marginBottom: '20px', fontSize: '1rem', color: 'var(--text-main)' }}>Links Rápidos</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        <li><a href="#services" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Nossos Serviços</a></li>
                        <li><a href="https://wa.me/5521975946473" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-main)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Solicitar Orçamento</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div id="contact">
                    <h4 style={{ marginBottom: '20px', fontSize: '1rem', color: 'var(--text-main)' }}>Contato</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Mail size={18} color="var(--primary)" />
                            <span>cod.gestolta@gmail.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <MessageCircle size={18} color="var(--primary)" />
                            <span>+55 (21) 97594-6473</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                maxWidth: '1100px',
                margin: '60px auto 0',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.85rem'
            }}>
                <p>© 2026 CODEGESTO. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
