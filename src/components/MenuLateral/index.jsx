import { Link, Outlet } from 'react-router-dom';

export default function MenuLateral(){
    const tipo_usuario = 'locatario';
    return(
        <>
            <div className="menu_lateral">
                <div className="logo">
                    <img className="logo_icone" src="/images/logo_2.png" alt="Ícone Logo" />
                    <img className="logo_texto" src="/images/logo_texto.png" alt="ModuLeasy" />
                </div>

                <div className="navegacao_menu">
                    {tipo_usuario === 'locador' ? (
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
                    <Link className="item_menu" to="/">
                        <span className="material-symbols-outlined">logout</span>
                        <p className="texto_menu">Sair</p>
                    </Link>

                    <div className="usuario_info">
                        <div className="avatar">
                            <b>AC</b>
                        </div>

                        <p className="nome_usuario">
                            Alex Costa
                            <small>Minha conta</small>
                        </p>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    );
}