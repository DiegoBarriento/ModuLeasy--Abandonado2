import { Link, useLocation } from 'react-router-dom';
import styles from './index.module.css';
import { useEffect, useState } from 'react';

export default function DetalhesConteinerCatalogo(){
    const location = useLocation();
    const conteiner = location?.state?.conteiner ?? {};
    const dados = location?.state?.dados ?? [];
    const finalidades = dados[0] ?? [];
    const tiposAluguel = dados[2] ?? [];
    const componentes = dados[3] ?? [];
    const aluguelBase = tiposAluguel.find((aluguel) => aluguel.Nome === 'Mensal') ?? tiposAluguel[0];
    const nomeConteiner = `${conteiner?.Tipo?.Nome ?? ''} ${conteiner?.Tamanho?.Nome ?? ''}`.trim() || 'Contêiner';
    const nomeLocador = conteiner?.Locador?.Nome ?? 'Locador';
    const iniciaisLocador = nomeLocador.split(' ').filter(Boolean).slice(0, 2).map((nome) => nome[0]).join('').toUpperCase();

    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numeroEndereco, setNumeroEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [tipoAluguel, setTipoAluguel] = useState(aluguelBase?.Codigo ?? '');

    const aluguelSelecionado = tiposAluguel.find((aluguel) => String(aluguel.Codigo) === String(tipoAluguel)) ?? aluguelBase;

    useEffect(() =>{

    },[])

    return(
        <>
            <main>
                <div className="conteudo">
                    <Link to="/catalogo" className="voltar">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Voltar ao Catálogo
                    </Link>

                    <div className="cabecalho_alt">
                        <h1>{nomeConteiner}'</h1>

                        <Link to="/perfil-publico" className="linha_usuario">
                            <span className="avatar_usuario">{iniciaisLocador || 'LO'}</span>
                            <strong>{nomeLocador}</strong>
                        </Link>
                    </div>

                    <div className={styles.pagina_detalhes_conteiner}>
                        <div className={styles.area_fotos_info}>
                            <div>
                                <div className={styles.foto_principal}>
                                    <img src="/images/conteiner.png" alt={nomeConteiner} />
                                </div>

                                <div className={styles.miniaturas}>
                                    <label>
                                        <img src="/images/conteiner_2.png" alt={nomeConteiner} />
                                    </label>

                                    <label>
                                        <img src="/images/conteiner_2.png" alt={nomeConteiner} />
                                    </label>

                                    <label htmlFor="pop_galeria">
                                        <img src="/images/conteiner.png" alt={nomeConteiner} />
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
                                        <strong>{conteiner.Bic ?? 'Não informado'}</strong>
                                    </div>

                                    <div>
                                        <p>Nome do fabricante</p>
                                        <strong>{conteiner.Fabricante?.Nome ?? 'Não informado'}</strong>
                                    </div>

                                    <div>
                                        <p>CNPJ do fabricante</p>
                                        <strong>{conteiner.Fabricante?.Cnpj ?? 'Não informado'}</strong>
                                    </div>

                                    <div>
                                        <p>Data de fabricação</p>
                                        <strong>{conteiner.Dtfabricacao ?? 'Não informado'}</strong>
                                    </div>

                                    <div>
                                        <p>Tipo</p>
                                        <strong>{conteiner.Tipo?.Nome ?? 'Não informado'}</strong>
                                    </div>

                                    <div>
                                        <p>Tamanho</p>
                                        <strong>{conteiner.Tamanho?.Nome ?? 'Não informado'}'</strong>
                                    </div>

                                    <div>
                                        <p>Carga máxima</p>
                                        <strong>{conteiner.Cargamaxima != null ? `${conteiner.Cargamaxima} kg` : 'Não informado'}</strong>
                                    </div>

                                    <div>
                                        <p>Tara</p>
                                        <strong>{conteiner.Tara != null ? `${conteiner.Tara} kg` : 'Não informado'}</strong>
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
                                            {finalidades.map((finalidade, index) => (
                                                <li key={finalidade.Codigo ?? index}>
                                                    <strong>{finalidade.Nome}</strong>
                                                </li>
                                            ))}
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
                                            {componentes.map((componente, index) => (
                                                <li key={componente.Codigo ?? index}>
                                                    <p className="etiqueta">{componente.Categoria?.Nome ?? 'Componente'}</p>
                                                    <strong>{componente.Nome}</strong>
                                                </li>
                                            ))}
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
                                            <select value={estado} onChange={(e)=> setEstado(e.target.value)}>
                                                <option value="-1">Selecione</option>

                                                <option value="0">SP</option>
                                                <option value="1">RJ</option>
                                                <option value="2">MG</option>
                                                <option value="3">PR</option>
                                                <option value="4">SC</option>
                                            </select>

                                            <span className="material-symbols-outlined">expand_more</span>
                                        </div>
                                    </div>

                                    <div className="campo">
                                        <label>Cidade</label>
                                        <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                                    </div>

                                    <div className="campo">
                                        <label>Bairro</label>
                                        <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                                    </div>

                                    <div className="campo">
                                        <label>Rua</label>
                                        <input type="text" value={rua} onChange={(e) => setRua(e.target.value)} />
                                    </div>

                                    <div className="campo">
                                        <label>Número</label>
                                        <input type="text" value={numeroEndereco} onChange={(e) => setNumeroEndereco(e.target.value)} />
                                    </div>

                                    <div className="campo">
                                        <label>Complemento</label>
                                        <input type="text" placeholder="Ex.: Apto 52" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
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
                                            <select value={tipoAluguel} onChange={(e) => setTipoAluguel(e.target.value)}>
                                                {tiposAluguel.map((aluguel, index) => (
                                                    <option key={aluguel.Codigo ?? index} value={aluguel.Codigo}>
                                                        {aluguel.Nome}
                                                    </option>
                                                ))}
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
                                        {aluguelSelecionado ? `R$ ${aluguelSelecionado.Valor}` : 'Valor indisponível'}
                                        {aluguelSelecionado && <small> / {aluguelSelecionado.Nome.toLowerCase()}</small>}
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
                                <img src="/images/conteiner_2.png" alt={nomeConteiner} />
                            </button>

                            <button>
                                <img src="/images/conteiner.png" alt={nomeConteiner} />
                            </button>

                            <button>
                                <img src="/images/conteiner_2.png" alt={nomeConteiner} />
                            </button>

                            <button>
                                <img src="/images/conteiner.png" alt={nomeConteiner} />
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