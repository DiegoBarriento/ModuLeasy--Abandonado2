import { Link, Outlet, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../../api';

export default function MenuLateral(){
    const usuario = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : null;
    const nomeUsuario = usuario ? usuario.Nome : '';
    const nomeSigla = nomeUsuario ? nomeUsuario.slice(0, 1).toUpperCase() : '';
    const navigate = useNavigate();
    if(!usuario){
        encerrarSessao();
        navigate('/');
    }

    function encerrarSessao(){
        localStorage.removeItem('usuario');
        axios.get(apiUrl('encerrarsessao.php'), {
        withCredentials: true,
        })
        .then(function (resposta) {
        if (resposta.status === 200 && resposta.data) {
            console.log(resposta.data);
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
    }

    return(
        <>
            <div className="menu_lateral">
                <div className="logo">
                    <img className="logo_icone" src="/images/logo_2.png" alt="Ícone Logo" />
                    <img className="logo_texto" src="/images/logo_texto.png" alt="ModuLeasy" />
                </div>

                <div className="navegacao_menu">
                    {usuario.TipoUsuario === 'Locador' ? (
                        <>
                            <Link className="item_menu" to="/painel">
                                <span className="material-symbols-outlined">dashboard</span>
                                <p className="texto_menu">Painel do locador</p>
                            </Link>

                            <Link className="item_menu" to="/meus_conteineres">
                                <span className="material-symbols-outlined">inventory_2</span>
                                <p className="texto_menu">Meus contêineres</p>
                            </Link>

                            <Link className="item_menu" to="/depositos">
                                <span className="material-symbols-outlined">warehouse</span>
                                <p className="texto_menu">Depósitos</p>
                            </Link>

                            <Link className="item_menu" to="/cadastrar_conteiner">
                                <span className="material-symbols-outlined">add_circle</span>
                                <p className="texto_menu">Cadastrar contêiner</p>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link className="item_menu" to="/catalogo">
                                <span className="material-symbols-outlined">grid_view</span>
                                <p className="texto_menu">Catálogo</p>
                            </Link>

                            <Link className="item_menu" to="/minhas_locacoes">
                                <span className="material-symbols-outlined">inventory_2</span>
                                <p className="texto_menu">Minhas locações</p>
                            </Link>
                        </>
                    )}
                </div>

                <div className="rodape_menu">
                    <Link className="item_menu" to="/" onClick={encerrarSessao}>
                        <span className="material-symbols-outlined">logout</span>
                        <p className="texto_menu">Sair</p>
                    </Link>

                    <div className="usuario_info">
                        <div className="avatar">
                            <b>{nomeSigla}</b>
                        </div>

                        <p className="nome_usuario">
                            {nomeUsuario}
                            <small>Minha conta</small>
                        </p>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    );
}