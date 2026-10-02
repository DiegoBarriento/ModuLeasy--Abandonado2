import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function BotaoConteinerCatalogo(){
    return(
        <>
            <Link to="/detalhes_conteiner_catalogo" className={styles.cartao_listagem}>
                <div className={styles.imagem_listagem}>
                    <img src="/images/conteiner.png" alt="Refeitório Modular 40'" />
                </div>

                <div className={styles.corpo_listagem}>
                    <div className={styles.linha_titulo}>
                        <h3>Refeitório Modular 40'</h3>
                        <span className="material-symbols-outlined">arrow_outward</span>
                    </div>

                    <div className={styles.base_listagem}>
                        <div>
                            <div className={styles.preco_listagem}>
                                <strong>R$ 2.890</strong>
                                <span>/ mês</span>
                            </div>

                            <div className={styles.grupo_alt_listagem}>
                                <p className={styles.alt_listagem}>
                                    Trimestral <b className={styles.outro_preco}>R$ 8.670</b> · Anual
                                    <b className={styles.outro_preco}>R$ 31.212</b>
                                </p>
                            </div>
                        </div>

                        <span className={styles.ver_detalhes_listagem}>
                            Ver detalhes →
                        </span>
                    </div>
                </div>
            </Link>
        </>
    );
}