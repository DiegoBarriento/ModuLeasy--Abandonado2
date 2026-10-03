import { Link, useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrl } from '../../api';

export default function BotaoConteinerCatalogo(props){
    const {conteiner} = props;
    const [dados, setDados] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        axios.post(apiUrl('obterDadosConteiner.php'),
        {
            'conteiner': conteiner.Codigo
        },
        {
            withCredentials: true,
        }
        ).then(function (resposta) {
        if (resposta.status === 200 && resposta.data) {
            console.log(resposta.data);
            setDados(resposta.data.dados);
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

    const tamanho = dados[1];
    const alugueis = dados[2];
    const outro = dados[3];

    return(
        <>
            <div onClick={() => nav('/detalhes_conteiner_catalogo', {state: {conteiner: conteiner, dados: dados}})} className={styles.cartao_listagem}>
                <div className={styles.imagem_listagem}>
                    <img src="/images/conteiner.png" alt="Refeitório Modular 40'" />
                </div>

                <div className={styles.corpo_listagem}>
                    <div className={styles.linha_titulo}>
                        <h3>{conteiner.Tipo.Nome} {conteiner.Tamanho.Nome}'</h3>
                        <span className="material-symbols-outlined">arrow_outward</span>
                    </div>

                    <div className={styles.base_listagem}>
                        <div>
                            {alugueis?.map((aluguel, index) => (
                                aluguel.Nome === "Mensal" ? (
                                    <div key={index} className={styles.preco_listagem}>
                                        <strong>R$ {aluguel.Valor}</strong>
                                        <span>/ mês</span>
                                    </div>
                                ) : (
                                    <div key={index} className={styles.grupo_alt_listagem}>
                                        <p className={styles.alt_listagem}>
                                            <b className={styles.outro_preco}>R$ {aluguel.Valor}</b> · {aluguel.Nome}
                                        </p>
                                    </div>
                                )
                            ))}
                            
                        </div>

                        <span className={styles.ver_detalhes_listagem}>
                            Ver detalhes →
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}