import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function DetalhesConteinerCatalogo(){
    return(
        <>
            <main>
                <div className="conteudo">
                    <Link to="/catalogo" className="voltar">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Voltar ao Catálogo
                    </Link>

                    <div className="cabecalho_alt">
                        <h1>Studio Modular 20'</h1>

                        <Link to="/perfil-publico" className="linha_usuario">
                            <span className="avatar_usuario">MR</span>
                            <strong>Marina Reis</strong>
                        </Link>
                    </div>

                    <div className={styles.pagina_detalhes_conteiner}>
                        <div className={styles.area_fotos_info}>
                            <div>
                                <div className={styles.foto_principal}>
                                    <img src="/images/conteiner.png" alt="Studio Modular 20 pés" />
                                </div>

                                <div className={styles.miniaturas}>
                                    <label>
                                        <img src="/images/conteiner_2.png" alt="Studio Modular 20 pés" />
                                    </label>

                                    <label>
                                        <img src="/images/conteiner_2.png" alt="Studio Modular 20 pés" />
                                    </label>

                                    <label htmlFor="pop_galeria">
                                        <img src="/images/conteiner.png" alt="Studio Modular 20 pés" />
                                        <span className={styles.mais_fotos}>+2 fotos</span>
                                    </label>
                                </div>
                            </div>

                            <section className="painel">
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
                                    <input type="checkbox" className={styles.radio_desce_caixa} id="col_comp" />

                                    <label className={styles.desce_caixa_titulo} htmlFor="col_comp">
                                        <span className={styles.texto_desce_caixa}>Componentes estruturais</span>
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

                            <section className="painel">
                                <div className="secao_titulo">
                                    <span className="icone_secao">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </span>
                                    <h2>Endereço de entrega</h2>
                                </div>

                                <div className="form_grid">
                                    <div className="campo">
                                        <label>Estado</label>

                                        <div className="input_geral">
                                            <select>
                                                <option>SP</option>
                                                <option>RJ</option>
                                                <option>MG</option>
                                                <option>PR</option>
                                                <option>SC</option>
                                            </select>

                                            <span className="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </div>

                                    <div className="campo">
                                        <label>Cidade</label>
                                        <input type="text" value="São Paulo" readOnly />
                                    </div>

                                    <div className="campo">
                                        <label>Bairro</label>
                                        <input type="text" value="Vila Mariana" readOnly />
                                    </div>

                                    <div className="campo">
                                        <label>Rua</label>
                                        <input type="text" value="Rua Domingos de Morais" readOnly />
                                    </div>

                                    <div className="campo">
                                        <label>Número</label>
                                        <input type="text" value="1200" readOnly />
                                    </div>

                                    <div className="campo">
                                        <label>Complemento</label>
                                        <input type="text" placeholder="Ex.: Apto 52" />
                                    </div>
                                </div>

                                <div className={styles.acoes_endereco}>
                                    <p className={styles.texto_ajuda}>
                                        Preenchido com o endereço padrão cadastrado.
                                    </p>

                                    <button type="button" className="botao botao_borda">
                                        <span className="material-symbols-outlined">location_on</span>
                                        Alterar endereço
                                    </button>
                                </div>

                                <div className={styles.enderecos_cadastrados}>
                                    <div className={styles.endereco_cadastrado}>
                                        <strong>Campinas Obra</strong>
                                        <p>Rua Marilia, 324 · Bairro Jardim · Campinas, SP</p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className={styles.resumo_locacao}>
                            <section className="painel">
                                <div className="secao_titulo">
                                    <span className="icone_secao">
                                        <span className="material-symbols-outlined">list_alt</span>
                                    </span>
                                    <h2>Resumo da locação</h2>
                                </div>

                                <div className={`form_grid uma ${styles.termos_aluguel}`}>
                                    <div className="campo">
                                        <label>Tipo de parcela</label>

                                        <div className="input_geral">
                                            <select>
                                                <option>Mensal</option>
                                                <option>Trimestral</option>
                                                <option>Semestral</option>
                                            </select>

                                            <span className="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </div>

                                    <div className="campo">
                                        <label>Tempo de locação</label>

                                        <div className="input_geral">
                                            <select defaultValue="12 meses">
                                                <option>3 meses</option>
                                                <option>6 meses</option>
                                                <option>12 meses</option>
                                                <option>24 meses</option>
                                            </select>

                                            <span className="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.resumo_total}>
                                    <p>Valor base</p>
                                    <strong>
                                        R$ 1.890 <small>/ mês</small>
                                    </strong>
                                </div>

                                <div className={styles.area_botoes}>
                                    <button type="button" className="botao botao_escuro completo">
                                        <span className="material-symbols-outlined">description</span>
                                        Gerar contrato
                                    </button>

                                    <Link to="/pagamento" className="botao botao_claro completo">
                                        Ir para pagamento →
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="rodape">
                <p>© 2026 ModuLeasy</p>
                <p>Espaços que se adaptam a você.</p>
            </footer>

            <div className={styles.popup_area}>
                <input
                    type="checkbox"
                    className={styles.area_popup_radio}
                    id="pop_galeria"
                />

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
                            <button>
                                <img src="/images/conteiner_2.png" alt="Studio Modular 20 pés" />
                            </button>

                            <button>
                                <img src="/images/conteiner.png" alt="Studio Modular 20 pés" />
                            </button>

                            <button>
                                <img src="/images/conteiner_2.png" alt="Studio Modular 20 pés" />
                            </button>

                            <button>
                                <img src="/images/conteiner.png" alt="Studio Modular 20 pés" />
                            </button>
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