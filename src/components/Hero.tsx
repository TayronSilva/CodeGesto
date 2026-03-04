import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Settings, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section style={{
            minHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '100px'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div style={{
                    padding: '6px 16px',
                    borderRadius: '4px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    display: 'inline-block',
                    marginBottom: '24px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Inovação & Eficiência
                </div>

                <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.2rem)', marginBottom: '20px', lineHeight: 1.1 }}>
                    Tecnologia de Elite para <br />
                    <span className="gradient-text">Impulsionar seu Negócio</span>
                </h1>

                <p style={{
                    maxWidth: '580px',
                    margin: '0 auto 32px',
                    color: 'var(--text-muted)',
                    fontSize: '1.1rem',
                    lineHeight: 1.6
                }}>
                    Transformamos processos complexos em soluções digitais de alta performance com programação avançada e gestão estratégica.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <button
                        onClick={() => window.open('https://wa.me/5521975946473', '_blank')}
                        className="btn btn-primary"
                        style={{ padding: '14px 28px', fontSize: '1rem', minWidth: '220px' }}
                    >
                        Solicitar Orçamento <ArrowRight size={18} />
                    </button>

                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn btn-outline"
                        style={{ padding: '14px 28px', fontSize: '1rem', minWidth: '220px' }}
                    >
                        Nossos Serviços
                    </button>
                </div>
            </motion.div>

            {/* Stats/Icons Row */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                style={{
                    marginTop: '60px',
                    display: 'flex',
                    gap: '40px',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <Code2 size={20} color="var(--primary)" />
                    <span>Programação</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <Settings size={20} color="var(--secondary)" />
                    <span>Administração</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
