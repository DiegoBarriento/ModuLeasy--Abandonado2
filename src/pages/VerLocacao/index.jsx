import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function VerLocacao(){
    return(
        <>
            <main>
                <div className="conteudo">
                    <Link to="/meus_conteineres" className="voltar">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Voltar para meus contêineres
                    </Link>

                    <div className="cabecalho_alt">
                        <div className={styles.conteiner_situacao}>
                            <h1>Studio Modular 20'</h1>
                            <span className="situacao encerrado">Encerrado</span>
                        </div>
                    </div>

                    <div className={styles.pagina_ver_conteiner}>

                        <div className={styles.area_fotos_info}>
                            <div>
                                <div className={styles.foto_principal}>
                                    <img src="images/conteiner.png" />
                                </div>

                                <div className={styles.miniaturas}>
                                    <label>
                                        <img src="images/conteiner_2.png" />
                                    </label>

                                    <label>
                                        <img src="images/conteiner_2.png" />
                                    </label>

                                    <label htmlFor="pop_galeria">
                                        <img src="images/conteiner.png" />
                                        <span className={styles.mais_fotos}>+2 fotos</span>
                                    </label>
                                </div>
                            </div>

                            <div className={styles.info_locacao}>
                                <section className="painel">
                                    <div className="secao_titulo">
                                        <span className="icone_secao">
                                            <span className="material-symbols-outlined">credit_card</span>
                                        </span>
                                        <h2>Condições da locação</h2>
                                    </div>

                                    <div className="corpo_resumo">
                                        <div className={styles.linha_resumo}>
                                            <p>Tipo</p>
                                            <strong>Mensal</strong>
                                        </div>

                                        <div className={styles.linha_resumo}>
                                            <p>Período</p>
                                            <strong>12 meses</strong>
                                        </div>

                                        <div className={`${styles.linha_resumo} ${styles.linha_final}`}>
                                            <p>Valor</p>
                                            <strong>R$ 1.890</strong>
                                        </div>
                                    </div>
                                </section>

                                <section className="painel">
                                    <div className="secao_titulo">
                                        <span className="icone_secao">
                                            <span className="material-symbols-outlined">person</span>
                                        </span>
                                        <h2>Locador</h2>
                                    </div>

                                    <Link to="/perfil_publico" className="linha_usuario">
                                        <span className="avatar_usuario">AC</span>
                                        <strong>Alex Costa</strong>
                                    </Link>

                                    <div className={styles.secao_info_loca}>
                                        <div className={styles.area_info_loca}>
                                            <p className={styles.titulo_info_loca}>CNPJ</p>
                                            <p className={styles.info_loca}>
                                                00.000.000/0000-00
                                            </p>
                                        </div>

                                        <div className={styles.area_info_loca}>
                                            <p className={styles.titulo_info_loca}>EMAIL</p>
                                            <p className={styles.info_loca}>
                                                alexcosta@email.com
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <section className={`painel ${styles.especificacao_tecnica}`}>
                            <div className="secao_titulo">
                                <span className="icone_secao">
                                    <span className="material-symbols-outlined">straighten</span>
                                </span>
                                <h2>Especificações técnicas</h2>
                            </div>

                            <div className={styles.info_grid}>
                                <div>
                                    <p>Código BIC</p>
                                    <strong>MOD-001</strong>
                                </div>

                                <div>
                                    <p>Nome do fabricante</p>
                                    <strong>ModuLeasy Indústria</strong>
                                </div>

                                <div>
                                    <p>CNPJ do fabricante</p>
                                    <strong>12.345.678/0001-90</strong>
                                </div>

                                <div>
                                    <p>Data de fabricação</p>
                                    <strong>15/03/2024</strong>
                                </div>

                                <div>
                                    <p>Tipo</p>
                                    <strong>High Cube</strong>
                                </div>

                                <div>
                                    <p>Tamanho</p>
                                    <strong>20 pés</strong>
                                </div>

                                <div>
                                    <p>Carga máxima</p>
                                    <strong>28.200 kg</strong>
                                </div>

                                <div>
                                    <p>Tara</p>
                                    <strong>2.230 kg</strong>
                                </div>
                            </div>

                            <div className={styles.desce_caixa}>
                                <input type="checkbox" className={styles.radio_desce_caixa} id="col_fin" />

                                <label className={styles.desce_caixa_titulo} htmlFor="col_fin">
                                    <span className={styles.texto_desce_caixa}>Finalidades</span>
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </label>

                                <div className={styles.desce_caixa_conteudo}>
                                    <ul className={styles.lista_especificacoes}>
                                        <li><strong>Moradia</strong></li>
                                        <li><strong>Home office</strong></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.desce_caixa}>
                                <input className={styles.radio_desce_caixa} type="checkbox" id="col_comp" />

                                <label className={styles.desce_caixa_titulo} htmlFor="col_comp">
                                    <span className={styles.texto_desce_caixa}>
                                        Componentes estruturais
                                    </span>
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </label>

                                <div className={styles.desce_caixa_conteudo}>
                                    <ul className={styles.lista_especificacoes}>
                                        <li>
                                            <p className="etiqueta">Estrutural</p>
                                            <strong>Isolamento térmico</strong>
                                        </li>

                                        <li>
                                            <p className="etiqueta">Estrutural</p>
                                            <strong>Banheiro</strong>
                                        </li>

                                        <li>
                                            <p className="etiqueta">Estrutural</p>
                                            <strong>Energia elétrica</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="rodape">
                <p>© 2026 ModuLeasy</p>
                <p>Espaços que se adaptam a você.</p>
            </footer>

            <div className="popup_area">
                <input type="checkbox" className="area_popup_radio" id="pop_galeria" />

                <div className="area_popup_fundo">
                    <div className="area_popup_galeria">
                        <div className="area_popup_cabecalho">
                            <span className="icone_secao">
                                <span className="material-symbols-outlined">photo_camera</span>
                            </span>

                            <div>
                                <h2>Todas as fotos</h2>
                                <p>Clique em uma foto para destacá-la.</p>
                            </div>
                        </div>

                        <div className="area_popup_galeria_grade">
                            <button><img src="images/conteiner_2.png" /></button>
                            <button><img src="images/conteiner.png" /></button>
                            <button><img src="images/conteiner_2.png" /></button>
                            <button><img src="images/conteiner.png" /></button>
                        </div>

                        <label htmlFor="pop_galeria" className="botao botao_escuro completo">
                            Fechar
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}
