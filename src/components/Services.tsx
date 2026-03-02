import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Cpu, PieChart, ShieldCheck, Zap } from 'lucide-react';

const services = [
    {
        icon: <Code size={32} />,
        title: 'Programação de Elite',
        description: 'Desenvolvimento de software robusto, escalável e de alta performance para o seu negócio.',
        color: 'var(--primary)'
    },
    {
        icon: <Briefcase size={32} />,
        title: 'Administração Estratégica',
        description: 'Gestão eficiente e processos otimizados para garantir a saúde administrativa da sua empresa.',
        color: 'var(--secondary)'
    },
    {
        icon: <Cpu size={32} />,
        title: 'Arquitetura de Sistemas',
        description: 'Design de infraestrutura moderna preparada para o futuro e grandes volumes de dados.',
        color: 'var(--accent)'
    },
    {
        icon: <PieChart size={32} />,
        title: 'Análise de Dados',
        description: 'Insights valiosos transformados em decisões estratégicas através de análise profunda.',
        color: 'var(--primary)'
    },
    {
        icon: <ShieldCheck size={32} />,
        title: 'Segurança & Compliance',
        description: 'Garantia de que seus dados e processos estão protegidos seguindo as melhores práticas.',
        color: 'var(--secondary)'
    },
    {
        icon: <Zap size={32} />,
        title: 'Automação de Processos',
        description: 'Elimine tarefas manuais e repetitivas, ganhando velocidade e precisão no dia a dia.',
        color: 'var(--accent)'
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" style={{ marginTop: '40px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Nossa <span className="gradient-text">Expertise</span></h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Unimos o melhor da tecnologia com a excelência em gestão para entregar resultados excepcionais.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px'
            }}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass"
                        style={{
                            padding: '40px',
                            transition: 'transform 0.3s ease, border-color 0.3s ease',
                            cursor: 'default'
                        }}
                        whileHover={{
                            transform: 'translateY(-10px)',
                            borderColor: service.color,
                            backgroundColor: 'rgba(255, 255, 255, 0.05)'
                        }}
                    >
                        <div style={{
                            color: service.color,
                            marginBottom: '24px',
                            display: 'inline-block',
                            padding: '12px',
                            borderRadius: '12px',
                            background: `rgba(${service.color === 'var(--primary)' ? '59, 130, 246' : service.color === 'var(--secondary)' ? '45, 212, 191' : '96, 165, 250'}, 0.1)`
                        }}>
                            {service.icon}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{service.title}</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
