import React from 'react';
import { Mail, Instagram, Github, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
    return (
        <footer className="glass" style={{
            marginTop: '100px',
            padding: '80px 24px 40px',
            borderTop: '1px solid var(--glass-border)',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '60px',
                textAlign: 'left'
            }}>
                {/* Brand Section */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <img src={logo} alt="CodeGesto Logo" style={{ width: '32px', height: '32px' }} />
                        <span style={{ fontWeight: 800, fontSize: '1.2rem' }}>CODE<span className="gradient-text">GESTO</span></span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
                        Transformando processos complexos em soluções digitais elegantes. Excelência em programação e administração.
                    </p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <a href="https://www.instagram.com/codegesto/" target="_blank" rel="noopener noreferrer" className="glass" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            color: 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}><Instagram size={20} /></a>
                        <a href="https://wa.me/5521975946473" target="_blank" rel="noopener noreferrer" className="glass" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            color: 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}><MessageCircle size={20} /></a>
                        <a href="https://github.com/TayronSilva" target="_blank" rel="noopener noreferrer" className="glass" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            color: 'var(--text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}><Github size={20} /></a>
                    </div>
                </div>

                {/* Links Section */}
                <div>
                    <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>Links Rápidos</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)' }}>
                        <li><a href="#services">Nossos Serviços</a></li>
                        <li><a href="https://wa.me/5521975946473" target="_blank" rel="noopener noreferrer">Solicitar Orçamento</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div id="contact">
                    <h4 style={{ marginBottom: '24px', fontSize: '1.1rem' }}>Contato</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-muted)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Mail size={20} color="var(--primary)" />
                            <span>cod.gestolta@gmail.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <MessageCircle size={20} color="var(--primary)" />
                            <span>+55 (21) 97594-6473</span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                maxWidth: '1200px',
                margin: '60px auto 0',
                paddingTop: '30px',
                borderTop: '1px solid var(--glass-border)',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.9rem'
            }}>
                <p>© 2026 CODEGESTO. Todos os direitos reservados. Feito com paixão tecnológica.</p>
            </div>
        </footer>
    );
};

export default Footer;
