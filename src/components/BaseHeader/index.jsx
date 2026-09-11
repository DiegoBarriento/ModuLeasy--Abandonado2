import { NavLink, Outlet } from "react-router-dom";

export default function BaseHeader(){
    const usuario = {tipoUsuario:'Locador', nome:'Juca Bala'}; // esses dadso depois vão ser pegos pelo local roste
    const tipoUsuario = usuario.tipoUsuario;

    return(
        <>
            <header>
                <nav>
                    <img src="images/logo.png"/>
                    {tipoUsuario === "Locador" ? <NavLink to="/" end>Financeiro</NavLink> : <NavLink>Catálogo</NavLink> }
                    {tipoUsuario === "Locador" ? <NavLink to="/meus_conteiners">Meus Conteiners</NavLink> : <NavLink>Minhas locações</NavLink> }
                    {tipoUsuario === "Locador" ? <NavLink to="/meus_depositos">Meus Depositos</NavLink> : null }
                    {tipoUsuario === "Locador" ? <NavLink to="/cadastrar_conteiner">Cadastrar Conteiner</NavLink> : null }
                    {/* <a>Financeiro</a>
                    <a className="pagina_ativa">Meus Conteiners</a>
                    <a>Meus Depositos</a>
                    <a>Cadastrar Conteiner</a> */}
                    <div className="icones_header">
                        <span className="material-symbols-outlined" id="icone_header">notifications</span>
                        <span className="material-symbols-outlined" id="icone_header" >person</span>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}