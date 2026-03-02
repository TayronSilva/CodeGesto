import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Settings, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section style={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '120px'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="glass" style={{
                    padding: '8px 20px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    marginBottom: '24px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--accent)'
                }}>
                    Inovação & Eficiência
                </div>

                <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '24px' }}>
                    Gestão Inteligente para <br />
                    <span className="gradient-text">Seu Próximo Nível</span>
                </h1>

                <p style={{
                    maxWidth: '600px',
                    margin: '0 auto 40px',
                    color: 'var(--text-muted)',
                    fontSize: '1.2rem'
                }}>
                    Transformamos sua visão em realidade através de programação de elite
                    e administração estratégica.
                </p>

                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <button
                        onClick={() => window.open('https://wa.me/5521975946473', '_blank')}
                        style={{
                            background: 'var(--primary)',
                            color: 'white',
                            padding: '16px 32px',
                            borderRadius: '12px',
                            fontWeight: 700,
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            boxShadow: '0 10px 20px var(--primary-glow)'
                        }}
                    >
                        Solicitar Orçamento <ArrowRight size={20} />
                    </button>

                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="glass" style={{
                            color: 'white',
                            padding: '16px 32px',
                            borderRadius: '12px',
                            fontWeight: 700,
                            cursor: 'pointer'
                        }}
                    >
                        Ver Serviços
                    </button>
                </div>
            </motion.div>

            {/* Stats/Icons Row */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                style={{
                    marginTop: '80px',
                    display: 'flex',
                    gap: '60px',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                    <Code2 size={24} color="var(--primary)" />
                    <span>Programação</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                    <Settings size={24} color="var(--secondary)" />
                    <span>Administração</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
