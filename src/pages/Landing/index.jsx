
import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function Landing(){
    return(
        <>
            <main className={styles.telas_sem_menu}>

                <header className={`${styles.secao} ${styles.navegacao}`}>
                    <Link to="/" className={styles.marca_nav}>
                        <img className="logo_completa" src="/images/logo_escura.png" />
                    </Link>

                    <div className={styles.item_nav}>
                        <a href="#como-funciona">Como funciona</a>
                        <Link to="/catalogo">Explorar contêineres</Link>
                    </div>

                    <div className={styles.acoes_nav}>
                        <Link to="/login" className={styles.link_entrar}>Entrar</Link>
                        <Link to="/cadastro" className="botao botao_escuro">
                            Criar conta
                            <span className="material-symbols-outlined">arrow_outward</span>
                        </Link>
                    </div>
                </header>

                <section className={`${styles.secao} ${styles.area_slogan}`}>
                    <div className={styles.parte_slogan}>
                        <div>
                            <h1>O espaço certo.</h1>
                            <h1 className={styles.azul}>No seu tempo.</h1>
                        </div>

                        <p>
                            Alugue, anuncie ou encontre contêineres modulares para transformar planos em possibilidades
                            reais.
                        </p>

                        <div className={styles.botoes_slogan}>
                            <Link to="/catalogo" className="botao botao_claro">
                                Explorar contêineres
                                <span className="material-symbols-outlined">arrow_outward</span>
                            </Link>

                            <Link to="/cadastro" className="botao botao_borda">
                                Anunciar meu espaço
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.foto_slogan}>
                        <img src="/images/conteiner.png" />

                        <div className={styles.legenda_foto}>
                            <p>01 / 04 — Espaços em destaque</p>

                            <a href="#">
                                <strong>
                                    Seu próximo espaço começa aqui
                                    <span className="material-symbols-outlined">arrow_outward</span>
                                </strong>
                            </a>
                        </div>
                    </div>
                </section>

                <section className={styles.secao_etapas} id="como-funciona">
                    <div className={styles.secao}>
                        <div className="cabecalho">
                            <h1>Do contêiner à locação, de forma simples.</h1>

                            <p className="descricao_cabecalho">
                                Três etapas para encontrar e gerenciar o contêiner certo para você.
                            </p>
                        </div>

                        <div className={styles.grade_landing}>
                            <div className={styles.cartao_etapa}>
                                <span className={styles.numero_etapa}>01</span>

                                <span className={styles.icone_etapa}>
                                    <span className="material-symbols-outlined">search</span>
                                </span>

                                <h3>Encontre</h3>

                                <p>
                                    Pesquise entre diferentes tipos e tamanhos de contêineres.
                                </p>
                            </div>

                            <div className={styles.cartao_etapa}>
                                <span className={styles.numero_etapa}>02</span>

                                <span className={styles.icone_etapa}>
                                    <span className="material-symbols-outlined">task</span>
                                </span>

                                <h3>Alugue</h3>

                                <p>
                                    Escolha o contêiner que atende à sua necessidade e solicite a locação.
                                </p>
                            </div>

                            <div className={styles.cartao_etapa}>
                                <span className={styles.numero_etapa}>03</span>

                                <span className={styles.icone_etapa}>
                                    <span className="material-symbols-outlined">grid_view</span>
                                </span>

                                <h3>Gerencie</h3>

                                <p>
                                    Acompanhe as informações da sua locação em um só lugar.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.secao_nossos_recursos}>
                    <div className={styles.secao}>
                        <div className="cabecalho">
                            <h1>Nossos recursos</h1>

                            <p className="descricao_cabecalho">
                                Tudo o que você precisa para gerenciar contêineres e locações em um único lugar.
                            </p>
                        </div>

                        <div className={styles.grade_landing}>
                            <div className={styles.recurso}>
                                <span className={styles.icone_recurso}>
                                    <span className="material-symbols-outlined">inventory</span>
                                </span>

                                <strong>Gestão de contêineres</strong>

                                <p>
                                    Cadastro, organização e acompanhamento da disponibilidade dos equipamentos.
                                </p>
                            </div>

                            <div className={styles.recurso}>
                                <span className={styles.icone_recurso}>
                                    <span className="material-symbols-outlined">description</span>
                                </span>

                                <strong>Contratos</strong>

                                <p>
                                    Centralização das informações relacionadas às locações.
                                </p>
                            </div>

                            <div className={styles.recurso}>
                                <span className={styles.icone_recurso}>
                                    <span className="material-symbols-outlined">credit_card</span>
                                </span>

                                <strong>Pagamentos</strong>

                                <p>
                                    Acompanhamento das informações financeiras das locações.
                                </p>
                            </div>

                            <div className={styles.recurso}>
                                <span className={styles.icone_recurso}>
                                    <span className="material-symbols-outlined">build</span>
                                </span>

                                <strong>Manutenção</strong>

                                <p>
                                    Registro e acompanhamento da manutenção dos contêineres.
                                </p>
                            </div>

                            <div className={styles.recurso}>
                                <span className={styles.icone_recurso}>
                                    <span className="material-symbols-outlined">warehouse</span>
                                </span>

                                <strong>Depósitos</strong>

                                <p>
                                    Controle dos depósitos, capacidades e áreas de entrega.
                                </p>
                            </div>

                            <div className={styles.recurso}>
                                <span className={styles.icone_recurso}>
                                    <span className="material-symbols-outlined">trending_up</span>
                                </span>

                                <strong>Relatórios</strong>

                                <p>
                                    Indicadores de ganhos, pedidos e margem em painéis simples.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.secao_fluxo}>
                    <div className={styles.secao}>
                        <div className="cabecalho">
                            <h1>Acompanhe cada etapa da locação.</h1>

                            <p className="descricao_cabecalho">
                                Do cadastro do contêiner ao acompanhamento da locação, as informações ficam organizadas em um
                                único ambiente.
                            </p>
                        </div>

                        <div className={styles.grade_fluxo}>
                            <div className={styles.parte_fluxo}>
                                <span className={styles.caixa_fluxo}>
                                    <p className={styles.numero_passo}>1</p>
                                    <span className="material-symbols-outlined">inventory_2</span>
                                </span>

                                <p className={styles.nome_fluxo}>Contêiner</p>
                            </div>

                            <div className={styles.parte_fluxo}>
                                <span className={styles.caixa_fluxo}>
                                    <p className={styles.numero_passo}>2</p>
                                    <span className="material-symbols-outlined">adjust</span>
                                </span>

                                <p className={styles.nome_fluxo}>Disponibilidade</p>
                            </div>

                            <div className={styles.parte_fluxo}>
                                <span className={styles.caixa_fluxo}>
                                    <p className={styles.numero_passo}>3</p>
                                    <span className="material-symbols-outlined">calendar_clock</span>
                                </span>

                                <p className={styles.nome_fluxo}>Reserva</p>
                            </div>

                            <div className={styles.parte_fluxo}>
                                <span className={styles.caixa_fluxo}>
                                    <p className={styles.numero_passo}>4</p>
                                    <span className="material-symbols-outlined">description</span>
                                </span>

                                <p className={styles.nome_fluxo}>Contrato</p>
                            </div>

                            <div className={styles.parte_fluxo}>
                                <span className={styles.caixa_fluxo}>
                                    <p className={styles.numero_passo}>5</p>
                                    <span className="material-symbols-outlined">credit_card</span>
                                </span>

                                <p className={styles.nome_fluxo}>Pagamento</p>
                            </div>

                            <div className={styles.parte_fluxo}>
                                <span className={styles.caixa_fluxo}>
                                    <p className={styles.numero_passo}>6</p>
                                    <span className="material-symbols-outlined">fact_check</span>
                                </span>

                                <p className={styles.nome_fluxo}>Vistoria</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <footer className={styles.rodape_landing}>
                <img className="logo_completa_menor" src="/images/logo.png" />

                <p>Espaços que se adaptam a você. © 2026</p>

                <p>Copyright © ModuLeasy</p>
            </footer>
        </>
    );
}
