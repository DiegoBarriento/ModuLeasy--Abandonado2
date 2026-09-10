import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function CadastrarUsuario(){
    const [nome, setNome] = useState("");
    const [cpf_cnpj, setCpf_cnpj] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirma_senha, setConfirma_senha] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("");

    const navegador = useNavigate();
    function txtNome_change(e){
        setNome(e.target.value);
    }

    function txtCpf_cnpj_change(e){
        if (!isNaN(e.target.value)){
            setCpf_cnpj(e.target.value);
        }
    }

    function txtEmail_change(e){
        setEmail(e.target.value);
    }

    function txtSenha_change(e){
        setSenha(e.target.value);
    }

    function txtConfirma_senha_change(e){
        setConfirma_senha(e.target.value);
    }

    function validar_cpf_cnpj(cpf_cnpj) {
        if (/^(\d)\1{10}$/.test(cpf_cnpj)){
            return false;
        }
        let soma = 0;
        let resto = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf_cnpj.charAt(i)) * (10 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11){
            resto = 0;
        } 
        if (resto !== parseInt(cpf_cnpj.charAt(9))){
            return false;
        } 

        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf_cnpj.charAt(i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11){
            resto = 0;
        } 
        if (resto !== parseInt(cpf_cnpj.charAt(10))){
            return false;
        }

        return true;
    }

    function btnCadastrar_click(){
        // setMensagem(null);
        // setCarregando()
        if (nome.trim() === ""){
            // setMensagem("O nome deve ser informado.");
            return;
        }

        if (cpf_cnpj.trim() === ""){
            // setMensagem("O CPF deve ser informado.")
            return;
        }
        
        if (cpf_cnpj.trim().includes('.') || cpf_cnpj.trim().includes('-') || cpf_cnpj.trim().includes(',')){
            // setMensagem("O cpf não deve conter virgulas, pontos ou traços.");
            return;
        }

        if (cpf_cnpj.trim().length !== 11){
            // setMensagem("O Cpf deve conter 11 digitos.");
            return;
        }

        if (!validarCpf_cnpj(cpf_cnpj.trim())){
            // setMensagem("O CPF informado é inválido.");
            return;
        }



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

        if (senha.trim() !== confirma_senha.trim()){
            // setMensagem("A senha e a confirmação de senha não conferem.");
            return;
        }
    }

    function btnAncora_click(){
        navegador('/', {state: {status:"LoginUsuario"}}) //trocar '/' quando a gentar as pagian corretamente; vai para o caminho dito levando a variaveis, como se fosse numa query string, para a proxima pagina, para pegar os dados use o import 'Location'  
    }

    return(
        <>
            <section>

                <aside className="radio_tipoUsuario">
                    <label>
                        <input 
                        type="radio" 
                        name="tipoUsuario" 
                        value="Locador" 
                        checked={tipoUsuario === 'Locador'} 
                        onChange={(e) => setTipoUsuario(e.target.value)} 
                        />
                        Locador
                    </label>

                    <label>
                        <input 
                        type="radio" 
                        name="tipoUsuario" 
                        value="Locatario" 
                        checked={tipoUsuario === 'Locatario'} 
                        onChange={(e) => setTipoUsuario(e.target.value)} 
                        />
                        Locatario
                    </label>

                </aside>

                <div>
                    <label htmlFor="nome">NOME</label>
                    <input type="text" name="nome" value={nome} onChange={txtNome_change} />
                </div>

                <div>
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" name="email" value={email} onChange={txtEmail_change} />
                </div>

                <div>
                    <label htmlFor="senha">SENHA</label>
                    <input type="password" name="senha" value={senha} onChange={txtSenha_change} />
                </div>

                <div>
                    <label htmlFor="confirmar_senha">CONFIRME A SENHA</label>
                    <input type="password" name="confirmar_senha" value={confirma_senha} onChange={txtConfirma_senha_change} />
                </div>

                <div>
                    <label htmlFor="cpf_cnpj">CPF / CNPJ</label>
                    <input type="number" name="cpf_cnpj" value={cpf_cnpj} onChange={txtCpf_cnpj_change} />
                </div>

                <a className="btnAncora" onClick={btnAncora_click}>Já tem uma conta? Entrar</a>

                <button onClick={btnCadastrar_click}>CADASTRAR</button>
            </section>
        </>
    )
} 