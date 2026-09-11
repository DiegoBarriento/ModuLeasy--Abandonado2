export default function Catalogo(){
    return(
        <>
            <h1>Catálogo</h1>
            <h2>Filtros</h2>
        <div className="conteudo_catalogo">
            <div className="filtro_conteiner">  
                                      
                <div className="caixa_filtro">
                    <h3>TAMANHO</h3>
                    <div className="opcoes_tamanho">
                        <label className="opcao_tamanho"><input type="radio" name="tamanho" value="5"/>5 PÉS</label>                        
                        <label className="opcao_tamanho"><input type="radio" name="tamanho" value="20"/>20 PÉS</label>
                        <label className="opcao_tamanho"><input type="radio" name="tamanho" value="30"/>30 PÉS</label>
                        <label className="opcao_tamanho"><input type="radio" name="tamanho" value="40"/>40 PÉS</label>
                    </div>
                </div>

                <div className="caixa_filtro">
                    <h3>TIPO CONTÊINER</h3>
                    <div className="select_filtro">
                        <select name="tipo_conteiner">
                            <option value=""></option>
                            <option value="dry">Dry</option>
                            <option value="reefer">Reefer</option>
                            <option value="high_cube">High Cube</option>
                            <option value="open_top">Open Top</option>
                            <option value="flat_rack">Flat Rack</option>
                        </select>

                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                </div>

                <div className="caixa_filtro">
                    <h3>TIPO CONTÊINER</h3>
                    <div className="select_filtro">
                        <select name="tipo_conteiner">
                            <option value=""></option>
                            <option value="dry">Dry</option>
                            <option value="reefer">Reefer</option>
                            <option value="high_cube">High Cube</option>
                            <option value="open_top">Open Top</option>
                            <option value="flat_rack">Flat Rack</option>
                        </select>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                </div>

                <div className="caixa_filtro">
                    <h3>TIPO ALUGUEL</h3>
                    <div className="select_filtro">
                        <select name="tipo_aluguel">
                            <option value=""></option>
                            <option value="diario">Diário</option>
                            <option value="semanal">Semanal</option>
                            <option value="mensal">Mensal</option>
                            <option value="trimestral">Trimestral</option>
                            <option value="semestral">Semestral</option>
                            <option value="anual">Anual</option>
                        </select>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                </div>

                <div className="caixa_filtro">
                    <h3>PREÇO</h3>
                    <div className="select_filtro">
                        <select name="preco">
                            <option value=""></option>
                            <option value="baixo">Até R$ 1.000,00</option>
                            <option value="medio">De R$ 1.000,00 a R$ 5.000,00</option>
                            <option value="alto">Acima de R$ 5.000,00</option>
                        </select>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                </div>

                <div className="caixa_filtro">
                    <h3>FINALIDADES</h3>
                    <details className="multiselect">
                        <summary className="multiselect_titulo">
                            <span className="material-symbols-outlined">add</span>
                        </summary>
                        <div className="multiselect_opcoes">
                            <label><input type="checkbox" name="finalidades[]" value="escritorio"/> Escritório</label>
                            <label><input type="checkbox" name="finalidades[]" value="almoxarifado"/> Almoxarifado</label>
                            <label><input type="checkbox" name="finalidades[]" value="loja"/> Loja</label>
                            <label><input type="checkbox" name="finalidades[]" value="obra"/> Obra</label>
                        </div>
                    </details>
                </div>

                <div className="caixa_filtro">
                    <h3>COMPONENTES ESTRUTURAIS</h3>
                    <details className="multiselect">
                        <summary className="multiselect_titulo">
                            <span className="material-symbols-outlined">add</span>
                        </summary>
                        <div className="multiselect_opcoes">
                            <label><input type="checkbox" name="componentes[]" value="isolamento_termico"/> Isolamento Térmico</label>
                            <label><input type="checkbox" name="componentes[]" value="estrutura_base"/> Estrutura de Base</label>
                            <label><input type="checkbox" name="componentes[]" value="reforcos_estruturais"/> Reforços Estruturais</label>
                            <label><input type="checkbox" name="componentes[]" value="sistema_iluminacao"/> Sistema de Iluminação</label>
                        </div>
                    </details>
                </div>

                <div className="caixa_filtro">
                    <h3>DISPONIBILIDADE</h3>
                    <div className="disponibilidade">
                        <input type="date" name="data_inicial"/>
                        <span>Até</span>
                        <input type="date" name="data_final"/>
                    </div>
                </div>
            </div>

            <div className="lista_conteineres">

                <div className="card_conteiner">
                    <img src="images/conteiner.png"/>

                    <div className="info_conteiner">
                        <b>DRY 40'</b>
                        <p>R$ 1.500,00 <small>/mês</small></p>
                    </div>
                </div>

                <div className="card_conteiner">
                    <img src="images/conteiner.png"/>

                    <div className="info_conteiner">
                        <b>DRY 40'</b>
                        <p>R$ 1.500,00 <small>/mês</small></p>
                    </div>
                </div>

                <div className="card_conteiner">
                    <img src="images/conteiner.png"/>

                    <div className="info_conteiner">
                        <b>DRY 40'</b>
                        <p>R$ 1.500,00 <small>/mês</small></p>
                    </div>
                </div>

                <div className="card_conteiner">
                    <img src="images/conteiner.png"/>

                    <div className="info_conteiner">
                        <b>DRY 40'</b>
                        <p>R$ 1.500,00 <small>/mês</small></p>
                    </div>
                </div>

                <div className="card_conteiner">
                    <img src="images/conteiner.png"/>

                    <div className="info_conteiner">
                        <b>DRY 40'</b>
                        <p>R$ 1.500,00 <small>/mês</small></p>
                    </div>
                </div>

                <div className="card_conteiner">
                    <img src="images/conteiner.png"/>

                    <div className="info_conteiner">
                        <b>DRY 40'</b>
                        <p>R$ 1.500,00 <small>/mês</small></p>
                    </div>
                </div>

                <div className="card_conteiner">
                    <img src="images/conteiner.png"/>

                    <div className="info_conteiner">
                        <b>DRY 40'</b>
                        <p>R$ 1.500,00 <small>/mês</small></p>
                    </div>
                </div>

                <div className="card_conteiner">
                    <img src="images/conteiner.png"/>

                    <div className="info_conteiner">
                        <b>DRY 40'</b>
                        <p>R$ 1.500,00 <small>/mês</small></p>
                    </div>
                </div>

                <div className="card_conteiner">
                    <img src="images/conteiner.png"/>

                    <div className="info_conteiner">
                        <b>DRY 40'</b>
                        <p>R$ 1.500,00 <small>/mês</small></p>
                    </div>
                </div>

            </div>

        </div>
        
        </>
    )
}