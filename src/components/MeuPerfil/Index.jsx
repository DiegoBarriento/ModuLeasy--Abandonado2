export default function MeuPerfil(){
    return(
        <>
            <main>
             <h1>Meu Perfil</h1>
            
                <section ClassName="perfil-card">
                    <div ClassNameName="card-header">
                        
                        
                        <div ClassName="info-empresa">
                            <h2>Evergreen</h2>
                            <p>36.040.978/0001-24</p>
                            <a href="#" ClassName="link-senha">REDEFINIR SENHA &rarr</a>
                        </div>

                        <button id="editar-perfil-button">
                            <i ClassName="fa-regular fa-pen-to-square"></i> EDITAR INFORMAÇÕES
                        </button>
                    </div>

                    <div ClassName="contato-section">
                        <div ClassName="contato-title">
                            <i ClassName="fa-regular fa-address-card"></i>  
                            <h3>Contato</h3>
                        </div>
                        
                        <hr />
                        
                        <div ClassName="contato-dados">
                            <div ClassName="dado">
                                <h4>EMAIL</h4>
                                <p>evergreen.contato@gmail.com <i ClassName="fa-solid fa-pen"></i></p>
                            </div>
                            <div ClassName="dado">
                                <h4>TELEFONE</h4>
                                <p>+55 (13) 99232-3325 <i ClassName="fa-solid fa-pen"></i></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}