import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './proverbios.module.css';

const Proverbios = () => {

    const [verses, setVerses] = useState([]);
    const [loading, setLoading] = useState(true);

    const today = new Date().getDate();

    useEffect(() => {
        const fetchChapter = async () => {
            try {
                const response = await axios.get(
                    `https://www.abibliadigital.com.br/api/verses/nvi/pv/${today}`
                );
                setVerses(response.data.verses);
                console.log(response.data);
            } catch (error) {
                console.error("Erro ao buscar o capítulo", error);
            } finally {
                setLoading(false);
            }
        };
        fetchChapter();
    }, [today]);

    return (
        <div className={styles.container}>
            <div className={styles.backgroundImg}>
                <h1>Capítulo de provérbios para o dia de hoje</h1>
                <h2>Provérbios Capítulo {today}</h2>
            </div>

            <section id="versos" className={styles.textVerses}>
                {loading ? (
                    <p>Carregando...</p>
                ) : (
                    <div>
                        {verses.map((verse) => (
                            <p key={verse.number}>
                                <sup><strong>{verse.number}</strong></sup> {verse.text}
                            </p>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Proverbios;
