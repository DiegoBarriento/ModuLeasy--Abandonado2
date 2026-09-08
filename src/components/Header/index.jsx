export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <img src="images/logo.png"/>
                    <a>Financeiro</a>
                    <a class="pagina_ativa">Meus Conteiners</a>
                    <a>Meus Depositos</a>
                    <a>Cadastrar Conteiner</a>
                    <div class="icones_header">
                        <span class="material-symbols-outlined" id="icone_header">notifications</span>
                        <span class="material-symbols-outlined" id="icone_header">person</span>
                    </div>
                </nav>
            </header>
        </>
    )
}