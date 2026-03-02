import logo from '../assets/logo.png';

const Header: React.FC = () => {
    return (
        <header className="glass" style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '1100px',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 30px',
            zIndex: 1000,
        }}>
            <div
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
            >
                <img src={logo} alt="CodeGesto Logo" style={{
                    width: '38px',
                    height: '38px',
                    objectFit: 'contain'
                }} />
                <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '0.5px' }}>
                    CODE<span className="gradient-text">GESTO</span>
                </span>
            </div>

            <nav>
                <ul style={{ display: 'flex', gap: '30px', fontWeight: 500 }}>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>

            <button
                onClick={() => window.open('https://wa.me/5521975946473', '_blank')}
                className="glass" style={{
                    padding: '10px 20px',
                    borderRadius: '30px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    color: 'var(--text-main)',
                    border: '1px solid var(--primary)'
                }}
            >
                Começar
            </button>
        </header>
    );
};

export default Header;
