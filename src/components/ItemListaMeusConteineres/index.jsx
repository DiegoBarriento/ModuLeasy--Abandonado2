import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

export default function ItemListaMeusConteineres(){
    const nav = useNavigate();

    return(
        <>
            <li onClick={() => nav('/ver_conteiner')}>
                <div className={styles.item_locacao}>
                    <div className={styles.imagem_conteiner}>
                        <img src="/images/conteiner_2.png" alt="Escritório Container 40 pés" />
                    </div>

                    <div>
                        <strong>Escritório Contêiner 40'</strong>
                        <small>MOD-002</small>
                    </div>
                </div>

                <p>Nenhum depósito</p>

                <p>
                    R$ 3.200
                    <small> / mês</small>
                </p>

                <span className="situacao alugado">Alugado</span>

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