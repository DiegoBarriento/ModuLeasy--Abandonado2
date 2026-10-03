import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { apiUrl } from '../../api';

export default function ItemListaMeusConteineres(props){
        const nav = useNavigate();
        const {conteiner} = props;
        const [dados, setDados] = useState(null);

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

        const tiposAluguel = dados ? dados[2] : [];
        const status = dados ? dados[1] : [];

    return(
        <>
            <li onClick={() => nav('/ver_conteiner', {state: {conteiner: conteiner, dados: dados}})}>
                <div className={styles.item_locacao}>
                    <div className={styles.imagem_conteiner}>
                        <img src="/images/conteiner_2.png" alt="Escritório Container 40 pés" />
                    </div>

                    <div>
                        <strong>{conteiner.Tipo.Nome} {conteiner.Tamanho.Nome}</strong>
                        <small>{conteiner.Bic}</small>
                    </div>
                </div>

                <p>{conteiner.Deposito.Nome}</p>

                <p>
                    {tiposAluguel.map(function(tipo, index){ return (
                        <small key={index}> {tipo.Valor}/ {tipo.Nome}</small>
                    )})}
                </p>

                <span className="situacao alugado">
                    {status.map(function(status, index){ return (
                        <small key={index}>{status.Nome}</small>
                    )})}
                </span>

                <button
                    className={styles.botao_conteiner}
                    onClick={(event) => event.stopPropagation()}
                >
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </li>
        </>
    );
}