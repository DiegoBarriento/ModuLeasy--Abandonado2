
export default function CadastrarContainer(){
    return(
        <>
            <main className="cadastrar_container">
                <h1>Cadastrar Contêiner</h1>
                    <div className="cadastro_container">

                        <section className="parte_cadastro">
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
                                    <label>Carga Maxima</label>
                                    <input type="text"/>
                                </div>

                                <div className="input_grupo">
                                    <label>Finalidade</label>
                                    <details className="multiselect">
                                        <summary className="multiselect_titulo">
                                            <span className="material-symbols-outlined">add</span>
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
                                    <details className="multiselect">
                                        <summary className="multiselect_titulo">
                                            <span className="material-symbols-outlined">add</span>
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

                                <div className="input_grupo">
                                    <label>Tara</label>
                                    <input type="number"/>
                                </div>
                            </div>
                        </section>

                        <section className="parte_cadastro">
                            <div className="secao_titulo">
                                <span className="material-symbols-outlined" id="icone_secao">image</span>
                                <h2 className="titulo_secao">Galeria de Fotos</h2>
                            </div>
                            <label class="upload_area"><span className="material-symbols-outlined">cloud_upload</span><span class="upload_button">SELECIONAR ARQUIVOS</span><input type="file" name="fotos" multiple accept="image/*" /></label>
                        </section>

                        <section className="parte_cadastro">
                            <div className="secao_titulo">
                                <span className="material-symbols-outlined" id="icone_secao">payments</span>
                                <h2 className="titulo_secao">Termos de Aluguel</h2>
                            </div>
                            <div className="termos_aluguel">
                                <div className="input_grupo">
                                        <label>Valor do Container</label>
                                        <input type="number" min="0.00" />
                                </div>
                                
                                <div className="input_grupo">
                                        <label>Porcentagem da Multa</label>
                                        <input type="number"/>
                                </div>
                                
                                <div className="input_grupo">
                                    <label>Tipos de Aluguel</label>
                                    <details className="multiselect">
                                        <summary className="multiselect_titulo">
                                            <span className="material-symbols-outlined">add</span>
                                        </summary>
                                        <div className="multiselect_opcoes">    
                                            <label>
                                            <input type="checkbox" name="componentes[]" value="Diario" /> 
                                            Diario
                                            </label> 
                                            
                                            <label>
                                            <input type="checkbox" name="componentes[]" value="Semestral" /> 
                                            Semestral
                                            </label> 
                                            
                                            <label>
                                            <input type="checkbox" name="componentes[]" value="Semanal" /> 
                                            Semanal
                                            </label> 
                                            
                                            <label>
                                            <input type="checkbox" name="componentes[]" value="Mensal" /> 
                                            Mensal
                                            </label>

                                            <label>
                                            <input type="checkbox" name="componentes[]" value="Trimestral" /> 
                                            Trimestral
                                            </label>    

                                            <label>
                                            <input type="checkbox" name="componentes[]" value="Anual" /> 
                                            Anual
                                            </label>    
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </section>

                        <section className="parte_cadastro">
                            <button className="cadastrar_container">Cadastrar Container</button>
                        </section>
                    </div>
            </main>
        </>
    )

}