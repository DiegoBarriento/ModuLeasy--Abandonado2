export default function CadastrarContainer(){
    return(
        <>
            <main>
                <section class="parte_cadastro">
                    <div class="secao_titulo">
                        <span class="material-symbols-outlined" id="icone_secao">bottom_sheets</span>
                        <h2 class="titulo_secao">Especificações Técnicas</h2>
                    </div>
                    <div class="grupo_input">
                        <div class="input_grupo">
                            <label>BIC</label>
                            <input type="text"/>
                        </div>
                        <div class="input_grupo">
                            <label>NOME FABRICANTE</label>
                            <input type="text"/>
                        </div>
                        <div class="input_grupo">
                            <label>CNPJ DO FABRICANTE</label>
                            <input type="text"/>
                        </div>
                        <div class="input_grupo">
                            <label>DATA DE FABRICAÇÃO</label>
                            <input type="date"/>
                        </div>
                        <div class="input_grupo">
                            <label>TIPO DO CONTEINER</label>
                            <select>
                                
                                <option>a</option>
                            </select>
                        </div>
                        <div class="input_grupo">
                            <label>BIC</label>
                            <input type="text"/>
                        </div>
                        <div class="input_grupo">
                            <label>BIC</label>
                            <input type="text"/>
                        </div>
                        <div class="input_grupo">
                            <label>BIC</label>
                            <input type="text"/>
                        </div>
                        <div class="input_grupo">
                            <label>BIC</label>
                            <input type="text"/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}