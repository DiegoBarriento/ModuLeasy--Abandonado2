import axios from 'axios';
import BotaoConteinerCatalogo from '../../components/BotaoConteinerCatalogo';
import styles from './index.module.css';
import {useState, useEffect} from 'react';

export default function Catalogo(){
    const [tipos, setTiposConteiner] = useState([]);
    const [conteineres, setConteineres] = useState([]);
    const [tamanhos, setTamanhos] = useState([]);
    const [finalidades, setFinalidades] = useState([]);
    const [alugueis, setAlugueis] = useState([]);
    const [filtros, setFiltros] = useState([]);

    useEffect(() => {

        axios.get("http://localhost/ModuLeasy/api/listarConteineres.php", {
        withCredentials: true,
        })
        .then(function (resposta) {
        if (resposta.status === 200 && resposta.data) {
            console.log(resposta.data);
            setConteineres(resposta.data.conteineres);
            // A resposta veio SEM erros
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

        axios.get("http://localhost/ModuLeasy/api/listarTamanhos.php", {
        withCredentials: true,
        })
        .then(function (resposta) {
        if (resposta.status === 200 && resposta.data) {
            console.log(resposta.data);
            setTamanhos(resposta.data.tamanhosConteiner);
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
        if (resposta.status === 200 && resposta.data) {
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
            setAlugueis(resposta.data.tiposAluguel);
        } 
        })
        .catch(function (error) {
        console.warn(error);
        // O que fazer se der erro na requisição
        })
        .finally(function () {
        // O que fazer independente de ter dado erro ou não
        });
    },[])

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
                                        <select>
                                            <option>Todos</option>
                                            {tipos.map(function(tipo, index){ return (
                                                <option key={index}>{tipo.Nome}</option>
                                            )})}
                                        </select>

                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Tamanho</label>

                                    <div className="input_geral">
                                        <select>
                                            <option>Todos</option>
                                            {tamanhos.map(function(tamanho, index){ return (
                                                <option key={index}>{tamanho.Nome}</option>
                                            )})}
                                        </select>

                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Finalidade</label>

                                    <div className="input_geral">
                                        <select>
                                            <option>Todas</option>
                                            {finalidades.map(function(finalidade, index){ return (
                                                <option key={index}>{finalidade.Nome}</option>
                                            )})}
                                        </select>

                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                                <div className="campo">
                                    <label>Tipo de aluguel</label>

                                    <div className="input_geral">
                                        <select>
                                            <option>Todos</option>
                                            {alugueis.map(function(aluguel, index){ return (
                                                <option key={index}>{aluguel.Nome}</option>
                                            )})}
                                        </select>

                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>

                            </div>
                        </section>

                        <p className="espacos_encontrados">06 ESPAÇOS ENCONTRADOS</p>

                        <div className="form_grid tres">
                            {conteineres.map(function(conteiner, index){ return (
                                <BotaoConteinerCatalogo key={index} conteiner={conteiner}/>
                            )})}
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