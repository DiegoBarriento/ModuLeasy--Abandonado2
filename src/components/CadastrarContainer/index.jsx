
export default function CadastrarContainer(){
    return(
        <>
            <main>
                <section className="parte_cadastro">
                    <div className="secao_titulo">
                        <span className="material-symbols-outlined" id="icone_secao">bottom_sheets</span>
                        <h2 className="titulo_secao">Especificações Técnicas</h2>
                    </div>
                    <div className="grupo_input">
                        <div className="input_grupo">
                            <label>BIC</label>
                            <input type="text"/>
                        </div>
                        <div className="input_grupo">
                            <label>NOME FABRICANTE</label>
                            <input type="text"/>
                        </div>
                        <div className="input_grupo">
                            <label>CNPJ DO FABRICANTE</label>
                            <input type="text"/>
                        </div>
                        <div className="input_grupo">
                            <label>DATA DE FABRICAÇÃO</label>
                            <input type="date"/>
                        </div>
                        <div className="input_grupo">
                            <label>TIPO DO CONTEINER</label>
                            <select>
                                
                                <option>a</option>
                            </select>
                        </div>
                        <div className="input_grupo">
                            <label>BIC</label>
                            <input type="text"/>
                        </div>
                        <div className="input_grupo">
                            <label>BIC</label>
                            <input type="text"/>
                        </div>
                        <div className="input_grupo">
                            <label>BIC</label>
                            <input type="text"/>
                        </div>
                        <div className="input_grupo">
                            <label>BIC</label>
                            <input type="text"/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}