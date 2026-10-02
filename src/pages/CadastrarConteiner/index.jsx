import { Link } from 'react-router-dom';
import styles from './index.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function CadastrarConteiner(){
    const[tipos_conteiner, setTiposConteiner] = useState([]);   
    const[tamanhos_conteiner, setTamanhosConteiner] = useState([]);
    const[componentes_conteiner, setComponentesConteiner] = useState([]);
    const[finalidades, setFinalidades] = useState([]);
    const [tiposAluguel, setTiposAluguel] = useState([]);

    const [codigoBIC, setCodigoBIC] = useState('');
    const [nomeFabricante, setNomeFabricante] = useState('');
    const [cnpjFabricante, setCnpjFabricante] = useState('');
    const [dataFabricacao, setDataFabricacao] = useState('');
    const [carga, setCarga] = useState('');
    const [tara, setTara] = useState('');
    const [selectedTipo, setSelectedTipo] = useState('');
    const [selectedTamanho, setSelectedTamanho] = useState('');
    const [selectedFinalidades, setSelectedFinalidades] = useState([]);
    const [selectedComponente, setSelectedComponente] = useState('');
    const [nomeComponente, setNomeComponente] = useState('');
    const [imagens, setImagens] = useState([]);
    const [tipoAluguelSelect, setTipoAluguelSelect] = useState('');
    const [multa, setMulta] = useState('');
    const [valorConteiner, setValorConteiner] = useState('');

    const alternarFinalidade = (value) => {
        setSelectedFinalidades((selecionadas) =>
            selecionadas.includes(value)
                ? selecionadas.filter((finalidade) => finalidade !== value)
                : [...selecionadas, value]
        );
    };

    useEffect(()=>{
        axios.get("http://localhost/ModuLeasy/api/listarTiposConteiner.php", {
        withCredentials: true,
    })
        .then(function (resposta) {
            if (resposta.status === 200 && resposta.data) {
                console.log(resposta.data);
                setTiposConteiner(resposta.data.tiposConteiner);

            }
        })
        .catch(function (error) {
            console.warn(error);
            // O que fazer se der erro na requisição
        })
        .finally(function () {
            // O que fazer independente de ter dado erro ou não
    });
    axios.get("http://localhost/ModuLeasy/api/listarTamanhosConteiner.php", {
        withCredentials: true,
    })
        .then(function (resposta) {
            if (resposta.status === 200 && resposta.data) {
                console.log(resposta.data);
                setTamanhosConteiner(resposta.data.tamanhosConteiner);

            }
        })
        .catch(function (error) {
            console.warn(error);
            // O que fazer se der erro na requisição
        })
        .finally(function () {
            // O que fazer independente de ter dado erro ou não
    });

    axios.get("http://localhost/ModuLeasy/api/listarCategoriasComponente.php", {
        withCredentials: true,
    })
        .then(function (resposta) {
            if (resposta.status === 200 && resposta.data) {
                console.log(resposta.data);
                setComponentesConteiner(resposta.data.categorias);

            }
        })
        .catch(function (error) {
            console.warn(error);
            // O que fazer se der erro na requisição
        })
        .finally(function () {
            // O que fazer independente de ter dado erro ou não
    });

    axios.get("http://localhost/ModuLeasy/api/listarFinalidades.php", {
        withCredentials: true,
    })
        .then(function (resposta) {
            if (resposta.status === 200 && resposta.data) {+
                console.log(resposta.data);
                setFinalidades(resposta.data.finalidades);

            }
        })
        .catch(function (error) {
            console.warn(error);
            // O que fazer se der erro na requisição
        })
        .finally(function () {
            // O que fazer independente de ter dado erro ou não
    });

    axios.get("http://localhost/ModuLeasy/api/listarTiposAluguel.php", {
        withCredentials: true,
    })
        .then(function (resposta) {
            if (resposta.status === 200 && resposta.data) {
                console.log(resposta.data);
                setTiposAluguel(resposta.data.tiposAluguel);

            }
        })
        .catch(function (error) {
            console.warn(error);
            // O que fazer se der erro na requisição
        })
        .finally(function () {
            // O que fazer independente de ter dado erro ou não
    });

    axios.get("http://localhost/ModuLeasy/api/listarTiposAluguel.php", {
        withCredentials: true,
    })
        .then(function (resposta) {
            if (resposta.status === 200 && resposta.data) {
                console.log(resposta.data);
                setTiposAluguel(resposta.data.tiposAluguel);
            }
        })
        .catch(function (error) {
            console.warn(error);
            // O que fazer se der erro na requisição
        })
        .finally(function () {
            // O que fazer independente de ter dado erro ou não
    });

    },[]);    
    return(
        <>
            <main>
                <div className="conteudo">
                    <Link to="/meus_conteineres" className="voltar">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Voltar para Meus Contêineres
                    </Link>

                    <div className="cabecalho">
                        <h1>Cadastrar contêiner</h1>
                        <p className="descricao_cabecalho">Apresente seu espaço com todos os detalhes.</p>
                    </div>

                    <div className={styles.pagina_cadastrar_conteiner}>
                        <section className="painel">
                            <div className="secao_titulo">
                                <span className="icone_secao">
                                    <span className="material-symbols-outlined">straighten</span>
                                </span>
                                <h2>Especificações técnicas</h2>
                            </div>

                            <div className="form_grid tres">
                                <div className="campo">
                                    <label>Código BIC</label>
                                    <input type="text" placeholder="Ex.: ABCD 123456 7" value={codigoBIC} onChange={(e) => setCodigoBIC(e.target.value)}/>
                                </div>

                                <div className="campo">
                                    <label>Nome do fabricante</label>
                                    <input type="text" placeholder="Ex.: ModuLeasy Indústria" value={nomeFabricante} onChange={(e) => setNomeFabricante(e.target.value)} />
                                </div>

                                <div className="campo">
                                    <label>CNPJ do fabricante</label>
                                    <input type="text" placeholder="00.000.000/0000-00" value={cnpjFabricante} onChange={(e) => setCnpjFabricante(e.target.value)} />
                                </div>

                                <div className="campo">
                                    <label>Data de fabricação</label>
                                    <input type="date" value={dataFabricacao} onChange={(e) => setDataFabricacao(e.target.value)} />
                                </div>

                                <div className="campo">
                                    <label>Tipo de contêiner</label>

                                    <div className="input_geral">
                                        <select value={selectedTipo} onChange={(e) => setSelectedTipo(e.target.value)}>
                                            <option value='-1'>Selecione o tipo</option>
                                            {tipos_conteiner.map(function(tipo){
                                                return(
                                                    <option key={tipo.Codigo} value={tipo.Codigo}>{tipo.Nome}</option>
                                                );
                                            })}
                                        </select>

                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Tamanho</label>

                                    <div className="input_geral">
                                        <select value={selectedTamanho} onChange={(e) => setSelectedTamanho(e.target.value)}>
                                            <option>Selecione o tamanho</option>
                                            {tamanhos_conteiner.map(function(tamanho){
                                                return(
                                                    <option key={tamanho.Codigo} value={tamanho.Codigo}>{tamanho.Nome}'</option>
                                                );
                                            })}
                                        </select>

                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Carga máxima (kg)</label>
                                    <input type="text" placeholder="Ex.: 28200" value={carga} onChange={(e) => setCarga(e.target.value)}/>
                                </div>

                                <div className="campo">
                                    <label>Tara (kg)</label>
                                    <input type="text" placeholder="Ex.: 2.230"  value={tara} onChange={(e) => setTara(e.target.value)}/>
                                </div>

                                <div className="campo">
                                    <label>FINALIDADES</label>

                                    <details className={styles.multiselect_titulo}>
                                        <summary className={styles.multiselect_selecionadas}>
                                            <span>
                                                {selectedFinalidades.length
                                                    ? finalidades
                                                        .filter((finalidade) => selectedFinalidades.includes(finalidade.Codigo))
                                                        .map((finalidade) => finalidade.Nome)
                                                        .join(', ')
                                                    : 'Selecione as finalidades'}
                                            </span>
                                            <span className="material-symbols-outlined">add</span>
                                        </summary>

                                        <div className={styles.multiselect_opcoes}>
                                            {finalidades.map(function(finalidade){
                                            return(
                                                <label key={finalidade.Codigo}>
                                                    <input
                                                        type="checkbox"
                                                        name="finalidades[]"
                                                        value={finalidade.Codigo}
                                                        checked={selectedFinalidades.includes(finalidade.Codigo)}
                                                        onChange={() => alternarFinalidade(finalidade.Codigo)}
                                                    />
                                                    {finalidade.Nome}
                                                </label>
                                            )})}
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </section>

                        <section className="painel">
                            <div className="secao_titulo">
                                <span className="icone_secao">
                                    <span className="material-symbols-outlined">inventory</span>
                                </span>
                                <h2>Componentes do espaço</h2>
                            </div>

                            <div className={styles.linha_adicionar}>
                                <div className="campo">
                                    <label>Tipo</label>

                                    <div className="input_geral">
                                        <select value={selectedComponente} onChange={(e) => setSelectedComponente(e.target.value)}>
                                            <option>Selecione o tipo</option>
                                            {componentes_conteiner.map(function(componente){
                                                return(
                                                    <option key={componente.Codigo} value={componente.Codigo}>{componente.Nome}</option>
                                                );
                                            })}
                                        </select>

                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Nome</label>
                                    <input type="text" placeholder="Ex.: Isolamento térmico" value={nomeComponente} onChange={(e) => setNomeComponente(e.target.value) }/>
                                </div>

                                <button type="button" className="botao botao_escuro botao_adicionar">
                                    <span className="material-symbols-outlined">add</span>
                                    Adicionar
                                </button>
                            </div>

                            <ul className={styles.resultados_adicionar}>
                                <li>
                                    <div>
                                        <p className="etiqueta">Mobiliario</p>
                                        <strong>Energia elétrica</strong>
                                    </div>

                                    <button>
                                        <span className={`${styles.excluir_adicionar} material-symbols-outlined`}>
                                            close
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </section>

                        <section className="painel">
                            <div className="secao_titulo">
                                <span className="icone_secao">
                                    <span className="material-symbols-outlined">photo_camera</span>
                                </span>
                                <h2>Fotos do contêiner</h2>
                            </div>

                            <label className={styles.zona_upload}>
                                <span className="material-symbols-outlined">photo_camera</span>
                                <strong>Adicione fotos do contêiner</strong>
                                <label>Selecione imagens do contêiner</label>
                                <input type="file" accept="image/*" name='imagens[]' multiple />
                            </label>

                            <div className={styles.grade_fotos}>
                                <div className={styles.miniatura_foto}>
                                    <img src="/images/conteiner_2.png" alt="Contêiner" />

                                    <button type="button" className={styles.remover_foto}>
                                        <span className="material-symbols-outlined">close</span>
                                    </button>
                                </div>

                                <div className={styles.miniatura_foto}>
                                    <img src="/images/conteiner_2.png" alt="Contêiner" />

                                    <button type="button" className={styles.remover_foto}>
                                        <span className="material-symbols-outlined">close</span>
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section className="painel">
                            <div className="secao_titulo">
                                <span className="icone_secao">
                                    <span className="material-symbols-outlined">description</span>
                                </span>
                                <h2>Termos de aluguel</h2>
                            </div>

                            <div className={`${styles.linha_adicionar} ${styles.quatro}`}>
                                <div className="campo">
                                    <label>Tipo de aluguel</label>

                                    <div className="input_geral">
                                        <select value={tipoAluguelSelect} onChange={(e) => setTipoAluguelSelect(e.target.value)}>
                                            <option>Selecione o tipo</option>
                                            {tiposAluguel.map(function(tipoAluguel){
                                                return(
                                                    <option key={tipoAluguel.Codigo} value={tipoAluguel.Codigo}>{tipoAluguel.Nome}</option>
                                                );
                                            })}
                                        </select>

                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Valor (R$)</label>
                                    <input type="text" placeholder="Ex.: 1890" value={valorConteiner} onChange={(e) => setValorConteiner(e.target.value)} />
                                </div>

                                <div className="campo">
                                    <label>Multa por quebra (%)</label>
                                    <input type="text" placeholder="Ex.: 10" value={multa} onChange={(e)=> setMulta(e.target.value)}/>
                                </div>

                                <button type="button" className="botao botao_escuro botao_adicionar">
                                    <span className="material-symbols-outlined">add</span>
                                    Adicionar
                                </button>
                            </div>

                            <ul className={styles.resultados_adicionar}>
                                <li>
                                    <div>
                                        <p className="etiqueta">Mensal</p>
                                        <strong>R$ 1800,00 · 3%</strong>
                                    </div>

                                    <button>
                                        <span className={`${styles.excluir_adicionar} material-symbols-outlined`}>
                                            close
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </section>

                        <button type="button" className="botao botao_claro botao_grande completo">
                            Cadastrar contêiner
                        </button>
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