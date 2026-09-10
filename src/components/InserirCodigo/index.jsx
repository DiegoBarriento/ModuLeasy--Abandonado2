import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function InserirCodigo(){

    const [inserir_senha, setInserir_senha] = useState("");

    const navegador = useNavigate();

    function btnConfirmar_codigo_click(){

    }

    function btnAncora_click(){
        
    }

    function txtInserir_codigo_change(e){
        setInserir_senha(e.target.value);
    }
    return(
        <>
            <section>
                <div>
                    <label htmlFor="inserir_codigo">Inserir Codigo</label>
                    <input type="password" name="inserir_codigo" value={inserir_senha} onChange={txtInserir_codigo_change} />
                </div>

                <a className="btnAncora" onClick={btnAncora_click}>Reenviar código</a>

                <button onClick={btnConfirmar_codigo_click}>CONFIRMAR CODIGO</button>
            </section>
        </>
    )
}