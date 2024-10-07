import styles from './navbar.module.css';
import { Link } from 'react-scroll';


function Navbar() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>Provérbios Day</div>

            <ul className={styles.navLinks}>
                <li><Link to="versos" smooth={true} duration={500}>Versos</Link></li>
                <li><a href="#!" onClick={() => scrollToSection('sobre')}>Sobre</a></li>
                <li><a href="#!" onClick={() => scrollToSection('contato')}>Contato</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
