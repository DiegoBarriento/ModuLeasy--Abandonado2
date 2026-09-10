import CadastrarUsuario from '../CadastrarUsuario';
import { useLocation } from "react-router-dom";
import LoginUsuario from '../LoginUsuario';
import EsqueciSenha from '../EsqueciSenha';
import InserirCodigo from '../InserirCodigo';
import RedefinirSenha from '../RedefinirSenha';

export default function CadastroLoginUsuario(){
    const location = useLocation(); // import 'Location' usado para retirar dados recebidos pelo 'Navigate'
    let componente = ""
    const status = location?.state?.status; // o '?' é como se fosse uma pergunta na hora de declarar, caso state ou status esteja vaziu ou não exista a declaração só funcionara com location 
    // if (status == "CadastrarUsuario") {
    //     componente = <CadastrarUsuario/>
    // }
    // else if(status == "LoginUsuario"){
    //     componente = <LoginUsuario/>
    // }

    if(status === "LoginUsuario"){
        componente = <LoginUsuario/>
    }

    if(status === "CadastrarUsuario" || status == null){
        componente = <CadastrarUsuario/>
    }

    if(status === "EsqueciSenha"){
        componente = <EsqueciSenha/>
    }
    return(
        <>
            <div className="cadastrar_login_usuario">
                 <img src="images/container_cadastro&login.png" className="container_cadastro_login"/>
                 <main>
                    <img src="images/logo_escura.png"/>
                    {componente}
                 </main>
            </div>
        </>
    )
}