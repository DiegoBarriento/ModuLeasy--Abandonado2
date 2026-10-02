import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function MinhasLocacoes(){
    return(
        <>
            <main>
                <div className="conteudo">
                    <div className="cabecalho">
                        <h1>Minhas locações</h1>
                        <p className="descricao_cabecalho">
                            Locações ativas e encerradas de seus contêineres
                        </p>
                    </div>

                    <p className="espacos_encontrados">05 LOCAÇÕES REGISTRADAS</p>

                    <div className={styles.filtro_historico}>
                        <label className={styles.opcao_filtro_historico}>
                            <input type="checkbox" name="filtro_historico" value="alugado" />
                            <strong>2</strong>
                            <span>Alugados</span>
                        </label>

                        <label className={styles.opcao_filtro_historico}>
                            <input type="checkbox" name="filtro_historico" value="encerrado" />
                            <strong>3</strong>
                            <span>Encerrados</span>
                        </label>
                    </div>

                    <p className="espacos_encontrados">06 CONTÊINERES ENCONTRADOS</p>

                    <section className={`painel ${styles.painel_locacoes}`}>
                        <h2 className={styles.titulo_seus_conteineres}>Suas locações</h2>

                        <div>
                            <ul className={styles.categorias_locacoes}>
                                <li className={styles.categoria_titulo}>
                                    <span>Contêiner</span>
                                    <span>Parcela</span>
                                    <span>Status</span>
                                </li>

                                <li>
                                    <div className={styles.item_locacao}>
                                        <div className={styles.imagem_conteiner}>
                                            <img
                                                src="images/conteiner_2.png"
                                                alt="Studio Modular 20 pés"
                                            />
                                        </div>

                                        <div>
                                            <strong>Studio Modular 20'</strong>
                                            <small>MOD-001</small>
                                        </div>
                                    </div>

                                    <strong>R$ 1.890 / mês</strong>

                                    <span className="situacao disponivel">
                                        Disponível
                                    </span>
                                </li>

                                <li>
                                    <div className={styles.item_locacao}>
                                        <div className={styles.imagem_conteiner}>
                                            <img
                                                src="images/conteiner_2.png"
                                                alt="Studio Modular 20 pés"
                                            />
                                        </div>

                                        <div>
                                            <strong>Studio Modular 20 pés</strong>
                                            <small>MOD-001</small>
                                        </div>
                                    </div>

                                    <strong>R$ 1.890 / mês</strong>

                                    <span className="situacao disponivel">
                                        Disponível
                                    </span>
                                </li>

                                <li>
                                    <div className={styles.item_locacao}>
                                        <div className={styles.imagem_conteiner}>
                                            <img
                                                src="images/conteiner_2.png"
                                                alt="Studio Modular 20 pés"
                                            />
                                        </div>

                                        <div>
                                            <strong>Studio Modular 20 pés</strong>
                                            <small>MOD-001</small>
                                        </div>
                                    </div>

                                    <strong>R$ 1.890 / mês</strong>

                                    <span className="situacao encerrado">
                                        Encerrado
                                    </span>
                                </li>

                                <li>
                                    <div className={styles.item_locacao}>
                                        <div className={styles.imagem_conteiner}>
                                            <img
                                                src="images/conteiner_2.png"
                                                alt="Studio Modular 20 pés"
                                            />
                                        </div>

                                        <div>
                                            <strong>Studio Modular 20</strong>
                                            <small>MOD-001</small>
                                        </div>
                                    </div>

                                    <strong>R$ 1.890 / mês</strong>

                                    <span className="situacao disponivel">
                                        Disponível
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>

            <footer className="rodape">
                <p>© 2026 ModuLeasy</p>
                <p>Espaços que se adaptam a você.</p>
            </footer>
        </>
    );
}
