import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Cpu, PieChart, ShieldCheck, Zap } from 'lucide-react';

const services = [
    {
        icon: <Code size={24} />,
        title: 'Software de Elite',
        description: 'Desenvolvimento escalável e de performance energética.',
        color: '#3b82f6'
    },
    {
        icon: <Briefcase size={24} />,
        title: 'Gestão Inteligente',
        description: 'Administração estratégica e processos ágeis.',
        color: '#2dd4bf'
    },
    {
        icon: <Cpu size={24} />,
        title: 'Arquitetura Moderna',
        description: 'Infraestrutura robusta preparada para o futuro.',
        color: '#60a5fa'
    },
    {
        icon: <PieChart size={24} />,
        title: 'Análise de Dados',
        description: 'Insights profundos para decisões estratégicas.',
        color: '#3b82f6'
    },
    {
        icon: <ShieldCheck size={24} />,
        title: 'Segurança Total',
        description: 'Proteção de dados avançada e compliance rigoroso.',
        color: '#2dd4bf'
    },
    {
        icon: <Zap size={24} />,
        title: 'Automação Full',
        description: 'Velocidade máxima e precisão operacional.',
        color: '#60a5fa'
    }
];

const Services: React.FC = () => {
    return (
        <section id="services">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Nossa <span className="gradient-text">Expertise</span></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                    Soluções de tecnologia e gestão de alto nível.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
            }}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            y: -5,
                            transition: { duration: 0.2 }
                        }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="card-solid"
                        style={{
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            textAlign: 'left',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Glow Effect on Hover */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.15 }}
                            style={{
                                position: 'absolute',
                                top: '-20%',
                                right: '-20%',
                                width: '60%',
                                height: '60%',
                                background: `radial-gradient(circle, ${service.color} 0%, transparent 70%)`,
                                pointerEvents: 'none',
                                zIndex: 0
                            }}
                        />

                        {/* Icon Container with Interaction */}
                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                width: '50px',
                                height: '50px',
                                background: `${service.color}20`,
                                border: `1px solid ${service.color}40`,
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: service.color,
                                marginBottom: '20px',
                                position: 'relative',
                                zIndex: 1,
                                boxShadow: `0 0 15px ${service.color}10`
                            }}
                        >
                            {service.icon}
                        </motion.div>

                        <h3 style={{
                            fontSize: '1.2rem',
                            marginBottom: '10px',
                            fontWeight: 700,
                            color: 'var(--text-main)',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            {service.title}
                        </h3>

                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            {service.description}
                        </p>

                        {/* Subtle Border Glow on Card Hover */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '2px',
                                background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                                pointerEvents: 'none'
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
