
export default function CadastrarContainer(){
    return(
        <>
            <main>
                <aside className="etapas_cadastro_conteiner" aria-label="Etapas do cadastro">
                    <a  href="#especificacoes"><span>▣</span> Especificações técnicas</a>
                    <a  href="#galeria"><span>▧</span> Galeria de fotos</a>
                    <a  href="#termos"><span>▣</span> Termos de aluguel</a>
                </aside>
                <div className="cadastro_container">

                    <section className="parte_cadastro" action="#">
                        <div className="secao_titulo">
                            <span className="material-symbols-outlined" id="icone_secao">bottom_sheets</span>
                            <h2 className="titulo_secao">Especificações Técnicas</h2>
                        </div>
                        <div className="grupo_input" id="especificacoes">
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
                                <input type="number"/>
                            </div>
                            <div className="input_grupo">
                                <label>DATA DE FABRICAÇÃO</label>
                                <input type="date"/>
                            </div>
                            <div className="input_grupo">
                                <label>TIPO DO CONTEINER</label>
                                <select>
                                    <option>--Selecione um Tipo--</option>
                                    <option>Dry</option>
                                    <option>Reefer</option>
                                    <option>Open Top</option>
                                    <option>High Cub</option>
                                    <option>Flat Hack</option>
                                </select>
                            </div>
                            <div className="input_grupo">
                                <label>Tamanho do Container</label>
                                <select>
                                    <option>--Selecione um Tipo--</option>
                                    <option>Dry</option>
                                    <option>Reefer</option>
                                    <option>Open Top</option>
                                    <option>High Cub</option>
                                    <option>Flat Hack</option>
                                </select>
                            </div>

                            <div className="input_grupo">
                                <label>PESO MAXIMO DO CONTAINER</label>
                                <input type="text"/>
                            </div>

                            <div className="input_grupo">
                                <label>Finalidade</label>
                                <details class="multiselect">
                                    <summary class="multiselect_titulo">
                                        <span class="material-symbols-outlined">add</span>
                                    </summary>
                                    <div className="multiselect_opcoes">    
                                        <label>
                                        <input type="checkbox" name="componentes[]" value="isolamento_termico" /> 
                                        Escritório
                                        </label> 
                                        
                                        <label>
                                        <input type="checkbox" name="componentes[]" value="estrutura_base" /> 
                                        Almoxarifado
                                        </label> 
                                        
                                        <label>
                                        <input type="checkbox" name="componentes[]" value="reforcos_estruturais" /> 
                                        Loja
                                        </label> 
                                        
                                        <label>
                                        <input type="checkbox" name="componentes[]" value="sistema_iluminacao" /> 
                                        Obra
                                        </label>    
                                    </div>
                                </details>
                            </div>
                            <div className="input_grupo">
                                <label>COMPONENTES ESTRUTURAIS</label>
                                <details class="multiselect">
                                    <summary class="multiselect_titulo">
                                        <span class="material-symbols-outlined">add</span>
                                    </summary>
                                    <div className="multiselect_opcoes">    
                                        <label>
                                        <input type="checkbox" name="componentes[]" value="isolamento_termico" /> 
                                        Isolamento Térmico
                                        </label> 
                                        
                                        <label>
                                        <input type="checkbox" name="componentes[]" value="estrutura_base" /> 
                                        Estrutura de Base
                                        </label> 
                                        
                                        <label>
                                        <input type="checkbox" name="componentes[]" value="reforcos_estruturais" /> 
                                        Reforços Estruturais
                                        </label> 
                                        
                                        <label>
                                        <input type="checkbox" name="componentes[]" value="sistema_iluminacao" /> 
                                        Sistema de Iluminação
                                        </label>    
                                    </div>
                                </details>
                            </div>
                        </div>
                    </section>

                    <section className="parte_cadastro" action="#">
                        <div className="secao_titulo">
                            <span className="material-symbols-outlined" id="icone_secao">bottom_sheets</span>
                            <h2 className="titulo_secao">Especificações Técnicas</h2>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )

}