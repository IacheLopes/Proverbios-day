import styles from './navbar.module.css';
import { Link } from 'react-scroll';


function Navbar() {


    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>Provérbios Diário</div>

            <ul className={styles.navLinks}>
                <li><Link to="versos" smooth={true} duration={500}>Versos</Link></li>
                <li><Link to="sobre" smooth={true} duration={500}>Sobre</Link></li>
                <li><Link to="contato" smooth={true} duration={500}>Contato</Link></li>
                
            </ul>
        </div>
    );
}

export default Navbar;
