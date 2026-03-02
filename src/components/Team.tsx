import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Lightbulb, BarChart3 } from 'lucide-react';

const members = [
    {
        role: 'Arquitetura de Software & Backend',
        description: 'Especialista em construir bases sólidas, sistemas distribuídos e lógica complexa.',
        icon: <Terminal size={40} />,
        color: 'var(--primary)'
    },
    {
        role: 'Administração & Estratégia de Negócios',
        description: 'Focado em viabilidade, processos otimizados e gestão estratégica de recursos.',
        icon: <BarChart3 size={40} />,
        color: 'var(--secondary)'
    },
    {
        role: 'Front-end & Experiência do Usuário',
        description: 'Transformando tecnologia em interfaces intuitivas, rápidas e visualmente impactantes.',
        icon: <Lightbulb size={40} />,
        color: 'var(--accent)'
    }
];

const Team: React.FC = () => {
    return (
        <section id="team" style={{ paddingBottom: '120px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>As Mentes <span className="gradient-text">Por Trás</span></h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Um trio multidisciplinar focado em uma única missão: a excelência técnica e administrativa do seu projeto.
                </p>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                flexWrap: 'wrap'
            }}>
                {members.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="glass"
                        style={{
                            width: '340px',
                            padding: '50px 30px',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: 'var(--bg-dark)',
                            border: `2px solid ${member.color}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '30px',
                            color: member.color,
                            boxShadow: `0 0 20px ${member.color}33`
                        }}>
                            {member.icon}
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--text-main)' }}>
                            {member.role}
                        </h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                            {member.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Team;
