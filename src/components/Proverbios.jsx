import styles from './proverbios.module.css';
import verse from './proverbios.json';

const Proverbios = () => {
    const today = new Date().getDate();
    const verseFiltered = verse.filter(chapter => chapter.chapter == today);

    const formatVerse = (text) => {
        return text.replace(/(\d+)/g,"<br /><sup><strong>$1</strong></sup>");
    }

    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.backgroundImg}>
                    <h1>Capítulo devocional dos Provérbios</h1>
                    <h2>Provérbios Capítulo {today}</h2>
                </div>

                <section id="versos" className={styles.textVerses}>
                        <div>
                            {verseFiltered.map((verse) => (
                                <p key={verse.chapter}  dangerouslySetInnerHTML={{__html: `${formatVerse(verse.verse)}`}}>
                                    
                                </p>
                            ))}
                        </div>
                </section>
            </div>
        </>
    );
};

export default Proverbios;