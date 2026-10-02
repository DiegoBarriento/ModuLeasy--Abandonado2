import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function Pagamento(){
    return(
        <>
            <main>
                <div className="conteudo">
                    <Link to="/detalhes_conteiner_catalogo" className="voltar">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Voltar ao Studio Modular 20'
                    </Link>

                    <div className="cabecalho">
                        <div>
                            <h1>Finalizar Pagamento</h1>
                            <p className="descricao_cabecalho">Confirme os termos da locação e pague via Pix.</p>
                        </div>
                    </div>

                    <div className={styles.layout_pagamento}>
                        <section className="painel">
                            <div className={styles.pix}>
                                <img src="/images/qrcode.png" alt="QR Code Pix" />

                                <div className="campo">
                                    <label>Pix copia e cola</label>

                                    <div className={styles.linha_copiar}>
                                        <input
                                            type="text"
                                            value="00020126580014BR.GOV.BCB.PIX0114+55119999900005204000053039865802BR5915MODU ESPACOS6009SAO PAULO62070503***6304A1B2"
                                            readOnly
                                        />

                                        <button>
                                            <span className="material-symbols-outlined">content_copy</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={styles.resumo_pagamento}>
                            <div className={styles.foto_resumo}>
                                <img src="/images/conteiner_2.png" alt="Studio Modular 20'" />
                            </div>

                            <div className={styles.corpo_resumo}>
                                <h3>Studio Modular 20'</h3>

                                <div className={styles.linha_resumo}>
                                    <p>Tipo</p>
                                    <strong>Mensal</strong>
                                </div>

                                <div className={styles.linha_resumo}>
                                    <p>Período</p>
                                    <strong>12 meses</strong>
                                </div>

                                <div className={styles.linha_resumo}>
                                    <p>Valor</p>
                                    <strong>R$ 1.890</strong>
                                </div>

                                <div className={styles.resumo_total}>
                                    <p>Valor da parcela</p>
                                    <strong>R$ 1.890 <span>/ mês</span></strong>
                                </div>

                                <button className="botao botao_claro completo">
                                    Retornar
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="rodape">
                <p>© 2026 ModuLeasy</p>
                <p>Espaços que se adaptam a você.</p>
            </footer>
        </>
    );
}