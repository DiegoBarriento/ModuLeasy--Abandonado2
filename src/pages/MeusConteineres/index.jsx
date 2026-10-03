import { Link } from 'react-router-dom';
import ItemListaMeusConteineres from '../../components/ItemListaMeusConteineres';
import styles from './index.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrl } from '../../api';

export default function MeusConteineres(){
    const [conteineres, setConteineres] = useState([]);
    const [status, setStatus] = useState([]);
    const [filtros, setFiltros] = useState([]);

    useEffect(() => {
    axios.get(apiUrl('listarConteineresLocador.php'), {
    withCredentials: true,
    })
    .then(function (resposta) {
    if (resposta.status === 200 && resposta.data) {
        console.log(resposta.data);
        setConteineres(resposta.data.conteineresLocador);
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

    }, []);

    return(
        <>
            <main>
                <div className="conteudo">
                    <div className="cabecalho_alt">
                        <div className="cabecalho">
                            <h1>Meus Contêineres</h1>
                            <p className="descricao_cabecalho">Acompanhe os contêineres cadastrados e o status de cada um.</p>
                        </div>

                        <Link to="/cadastrar_conteiner" className="botao botao_escuro">
                            <span className="material-symbols-outlined">add</span>
                            Novo contêiner
                        </Link>
                    </div>

                    <p className="espacos_encontrados">06 CONTÊINERES CADASTRADOS</p>

                    <div className={styles.filtro_locacao}>
                        <label className={styles.opcao_filtro_locacao}>
                            <input type="checkbox" name="filtro_locacao" value="disponivel" defaultChecked />
                            <strong>4</strong>
                            <span>Disponíveis</span>
                        </label>

                        <label className={styles.opcao_filtro_locacao}>
                            <input type="checkbox" name="filtro_locacao" value="alugado" />
                            <strong>1</strong>
                            <span>Alugados</span>
                        </label>

                        <label className={styles.opcao_filtro_locacao}>
                            <input type="checkbox" name="filtro_locacao" value="inativo" />
                            <strong>1</strong>
                            <span>Inativos</span>
                        </label>

                        <label className={styles.opcao_filtro_locacao}>
                            <input type="checkbox" name="filtro_locacao" value="manutencao" />
                            <strong>0</strong>
                            <span>Em manutenção</span>
                        </label>

                        <label className={styles.opcao_filtro_locacao}>
                            <input type="checkbox" name="filtro_locacao" value="pendente" />
                            <strong>0</strong>
                            <span>Pagamento pendente</span>
                        </label>
                    </div>

                    <p className="espacos_encontrados">06 CONTÊINERES ENCONTRADOS</p>

                    <section className={`painel ${styles.painel_locacoes}`}>
                        <h2 className={styles.titulo_seus_conteineres}>Seus contêineres</h2>

                        <ul className={styles.categorias_locacoes}>
                            <li className={styles.categoria_titulo}>
                                <span>Contêiner</span>
                                <span>Depósito</span>
                                <span>Parcela</span>
                                <span>Status</span>
                                <span></span>
                            </li>

                            {conteineres.map(function(conteiner){ return (
                                <ItemListaMeusConteineres key={conteiner.Codigo} conteiner={conteiner}/>
                            )})}
                            
                        </ul>
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