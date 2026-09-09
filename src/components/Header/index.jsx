export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <img src="images/logo.png"/>
                    <a>Financeiro</a>
                    <a className="pagina_ativa">Meus Conteiners</a>
                    <a>Meus Depositos</a>
                    <a>Cadastrar Conteiner</a>
                    <div className="icones_header">
                        <span className="material-symbols-outlined" id="icone_header">notifications</span>
                        <span className="material-symbols-outlined" id="icone_header">person</span>
                    </div>
                </nav>
            </header>
        </>
    )
}