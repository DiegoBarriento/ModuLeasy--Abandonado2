import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function EsqueciSenha(){
    const [email, setEmail] = useState("");
    const navegador = useNavigate();

    function txtEmail_change(e){
        setEmail(e.target.value);
    }

    function btnSenha_click(){
        
        if (email.trim() === ""){
            // setMensagem("O E-mail deve ser informado.");
            return;
        }

        if(email.trim().includes('@') === false || email.trim().includes('.') === false){
            // setMensagem("O E-mail informado é inválido.");
            return;
        }

    }

    return(
        <>
            <section>
                <div>
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" name="email" value={email} onChange={txtEmail_change} />
                </div>
                 <button onClick={btnSenha_click}>Enviar Codigo</button>
            </section>
        </>
    )
}