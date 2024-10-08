import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} Provérbios Day. Todos os direitos reservados.</p>
                <ul className={styles.socialLinks}>
                    <li><a href="https://www.linkedin.com/in/iache-lopes-cavalcanti/" target="_blank" rel="noopener noreferrer"><div id="contato" className={styles.linkedin}></div></a></li>
                    <li><a href="https://github.com/IacheLopes" target="_blank" rel="noopener noreferrer"><div id="sobre" className={styles.github}></div></a></li>
                    <li><a href="mailto:iachelopes1@gmail.com" target="_blank" rel="noopener noreferrer"><div className={styles.email}></div></a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
