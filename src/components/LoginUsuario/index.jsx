import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function LoginUsuario(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navegador = useNavigate();

    function txtEmail_change(e){
        setEmail(e.target.value);
    }

    function txtSenha_change(e){
        setSenha(e.target.value);
    }


    function btnLogin_click(){
        
        if (email.trim() === ""){
            // setMensagem("O E-mail deve ser informado.");
            return;
        }

        if(email.trim().includes('@') === false || email.trim().includes('.') === false){
            // setMensagem("O E-mail informado é inválido.");
            return;
        }

        if (senha.trim().length < 6){
            // setMensagem("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

    }

    function btnAncora_senha_click(){
        navegador('/', {state: {status:"EsqueciSenha"}}) //trocar '/' quando a gentar as pagian corretamente; vai para o caminho dito levando a variaveis, como se fosse numa query string, para a proxima pagina, para pegar os dados use o import 'Location'  
    }

    function btnAncora_cadastro_click(){
        navegador('/', {state: {status:"CadastrarUsuario"}}) //trocar '/' quando a gentar as pagian corretamente; vai para o caminho dito levando a variaveis, como se fosse numa query string, para a proxima pagina, para pegar os dados use o import 'Location'  
    }
    return(
        <>
            <section>
                <div>
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" name="email" value={email} onChange={txtEmail_change} />
                </div>

                <div>
                    <label htmlFor="senha">SENHA</label>
                    <input type="password" name="senha" value={senha} onChange={txtSenha_change} />
                </div>

                <a className="btnAncora" onClick={btnAncora_senha_click}>Esqueci minha senha</a>

                <button onClick={btnLogin_click}>Entrar</button>

                <a className="btnAncora" onClick={btnAncora_cadastro_click}>Não tem uma conta? Cadastrar-se</a>
            </section>
        </>
    )
} 