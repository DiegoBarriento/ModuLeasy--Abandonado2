import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function RedefinirSenha(){

        const [senha, setSenha] = useState("");
        const [confirma_senha, setConfirma_senha] = useState("");

        function txtSenha_change(e){
        setSenha(e.target.value);
        }

        function txtConfirma_senha_change(e){
            setConfirma_senha(e.target.value);
        }

        function btnRedefinir_senha_click(){
            if (senha.trim().length < 6){
                // setMensagem("A senha deve ter pelo menos 6 caracteres.");
                return;
            }
    
            if (senha.trim() !== confirma_senha.trim()){
                // setMensagem("A senha e a confirmação de senha não conferem.");
                return;
            }
        }
    return(
        <>
            <section>

                <div>
                    <label htmlFor="senha">SENHA</label>
                    <input type="password" name="senha" value={senha} onChange={txtSenha_change} />
                </div>

                <div>
                    <label htmlFor="confirmar_senha">CONFIRME A SENHA</label>
                    <input type="password" name="confirmar_senha" value={confirma_senha} onChange={txtConfirma_senha_change} />
                </div>

                <button onClick={btnRedefinir_senha_click}>REDEFINIR SENHA</button>
            </section>
        </>
    )
}