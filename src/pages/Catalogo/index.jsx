import BotaoConteinerCatalogo from '../../components/BotaoConteinerCatalogo';
import styles from './index.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Catalogo(){
    const[tipos_conteiner, setTiposConteiner] = useState([]);
    const[tamanhos_conteiner, setTamanhosConteiner] = useState([]);
    const[tipos_aluguel, setTiposAluguel] = useState([]);
    const[selectedTipoConteiner, setSelectedTipoConteiner] = useState('');
    const[selectedTamanhoConteiner, setSelectedTamanhoConteiner] = useState('');
    const[selectedFinalidades, setSelectedFinalidades] = useState([]);


    // const finalidades = [
    //     { value: 'isolamento_termico', label: 'Isolamento Térmico' },
    //     { value: 'estrutura_base', label: 'Estrutura de Base' },
    //     { value: 'reforcos_estruturais', label: 'Reforços Estruturais' },
    //     { value: 'sistema_iluminacao', label: 'Sistema de Iluminação' },
    // ];

    useEffect(() => {
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
        axios.get("http://localhost/ModuLeasy/api/listarTiposAluguel.php", {
        withCredentials: true,
    })
        .then(function (resposta) {
            if (resposta.status === 200 && resposta.data) {
                console.log(resposta.data);
                setTiposAluguel(resposta.data.tipoAluguel);

            }
        })
        .catch(function (error) {
            console.warn(error);
            // O que fazer se der erro na requisição
        })
        .finally(function () {
            // O que fazer independente de ter dado erro ou não
    });
    }, []);
    return(
        <>
            <main>
                <div className="conteudo">
                    <div className="cabecalho">
                        <h1>Catálogo</h1>
                        <p className="descricao_cabecalho">Espaços modulares para cada fase do seu projeto.</p>
                    </div>

                    <div className={styles.pagina_catalogo}>
                        <div className={styles.painel_busca}>
                            <div className={styles.busca}>
                                <span className="material-symbols-outlined">search</span>
                                <input type="text" placeholder="Busque por nome ou localização..." />
                            </div>

                            <div className={styles.ordenar}>
                                <label className="material-symbols-outlined">tune</label>

                                <div className="input_geral">
                                    <select>
                                        <option>Ordenar por</option>
                                        <option>Menor preço</option>
                                        <option>Maior preço</option>
                                    </select>

                                    <span className="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </div>

                        <section className="painel">
                            <div className="form_grid tres">

                                <div className="campo">
                                    <label>Faixa de preço</label>

                                    <div className="input_geral">
                                        <select>
                                            <option>Qualquer preço</option>
                                            <option>Até R$ 1.500</option>
                                            <option>R$ 1.500 a R$ 2.500</option>
                                            <option>Acima de R$ 2.500</option>
                                        </select>

                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Tipo de contêiner</label>

                                    <div className="input_geral">
                                        <select value={selectedTipoConteiner} onChange={(e) => setSelectedTipoConteiner(e.target.value)}>
                                            <option>Todos</option>
                                            {tipos_conteiner.map((tipo) => (
                                                <option key={tipo.Codigo} value={tipo.Codigo}>{tipo.Nome}</option>
                                            ))}
                                        </select>

                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Tamanho</label>

                                    <div className="input_geral">
                                        <select value={selectedTamanhoConteiner} onChange={(e) => setSelectedTamanhoConteiner(e.target.value)}>
                                            <option>Todos</option>
                                            {tamanhos_conteiner.map((tamanho) => (
                                                <option key={tamanho.Codigo} value={tamanho.Codigo}>{tamanho.Nome}</option>
                                            ))}
                                        </select>

                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>FINALIDADES</label>

                                    <details className={styles.multiselect}>
                                        <summary className={styles.multiselect_titulo}>
                                            <span className="material-symbols-outlined">add</span>
                                        </summary>

                                        <div className={styles.multiselect_opcoes}>
                                            <label>
                                                <input type="checkbox" name="componentes[]" value="isolamento_termico" />
                                                Isolamento Térmico
                                            </label>

                                            <label>
                                                <input type="checkbox" name="componentes[]" value="estrutura_base" />
                                                Estrutura de Base
                                            </label>

                                            <label>
                                                <input type="checkbox" name="componentes[]" value="reforcos_estruturais" />
                                                Reforços Estruturais
                                            </label>

                                            <label>
                                                <input type="checkbox" name="componentes[]" value="sistema_iluminacao" />
                                                Sistema de Iluminação
                                            </label>
                                        </div>
                                    </details>
                                </div>

                                <div className="campo">

                                    {/* <details className={styles.multiselect}>
                                        <summary className={styles.multiselect_titulo}>
                                            <span className={styles.multiselect_selecionadas}>
                                                {selectedFinalidades.length
                                                    ? finalidades
                                                        .filter((finalidade) => selectedFinalidades.includes(finalidade.value))
                                                        .map((finalidade) => finalidade.label)
                                                        .join(', ')
                                                    : 'Selecione as finalidades'}
                                            </span>
                                            <span className="material-symbols-outlined">add</span>
                                        </summary>

                                        <div className={styles.multiselect_opcoes}>
                                            {finalidades.map((finalidade) => (
                                                <label key={finalidade.value}>
                                                    <input
                                                        type="checkbox"
                                                        name="finalidades[]"
                                                        value={finalidade.value}
                                                        checked={selectedFinalidades.includes(finalidade.value)}
                                                        onChange={() => alternarFinalidade(finalidade.value)}
                                                    />
                                                    {finalidade.label}
                                                </label>
                                            ))}
                                        </div>
                                    </details> */}
                                    <label>Finalidade</label>

                                    <div className="input_geral">
                                        <select>
                                            <option>Todas</option>
                                            <option>Moradia</option>
                                            <option>Escritório</option>
                                            <option>Estoque</option>
                                            <option>Varejo</option>
                                            <option>Obra</option>
                                            <option>Evento</option>
                                        </select>

                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Tipo de aluguel</label>

                                    <div className="input_geral">
                                        <select>
                                            <option>Todos</option>
                                            <option>Mensal</option>
                                            <option>Trimestral</option>
                                            <option>Anual</option>
                                        </select>

                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <p className="espacos_encontrados">06 ESPAÇOS ENCONTRADOS</p>

                        <div className="form_grid tres">
                            <BotaoConteinerCatalogo />
                            <BotaoConteinerCatalogo />
                            <BotaoConteinerCatalogo />
                            <BotaoConteinerCatalogo />
                            <BotaoConteinerCatalogo />
                            <BotaoConteinerCatalogo />
                        </div>
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