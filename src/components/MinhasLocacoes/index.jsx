export default function MinhasLocacoes(){
    return(
        <main>
        <h1>Minhas Locações</h1>

        <nav className="filtro_locacao">
            <label className="opcao_filtro_locacao"><input type="radio" name="filtro_locacao" value="todos"/>TODOS</label>                        
            <label className="opcao_filtro_locacao"><input type="radio" name="filtro_locacao" value="ativo"/>ATIVO</label>   
            <label className="opcao_filtro_locacao"><input type="radio" name="filtro_locacao" value="inativo"/>INATIVO</label>   
            <label className="opcao_filtro_locacao"><input type="radio" name="filtro_locacao" value="pagamento_pendente"/>PAGAMENTO PENDENTE</label>         
        </nav>

        <div className="lista_locacoes">

            <section className="card_locacao">    
                <img src="images/conteiner.png"/>
                <div className="info_locacao">
                    <div>
                        <h1>Dry 40'</h1>
                        <p>ABCU 123456 7</p>
                    </div>
                    <p className="situacao" id="pagamento_pendente">PAGAMENTO PENDENTE</p>
                </div>
            </section>

            <section className="card_locacao">    
                <img src="images/conteiner.png"/>
                <div className="info_locacao">
                    <div>
                        <h1>Dry 40'</h1>
                        <p>ABCU 123456 7</p>
                    </div>
                    <p className="situacao" id="pagamento_pendente">PAGAMENTO PENDENTE</p>
                </div>
            </section>

            <section className="card_locacao">    
                <img src="images/conteiner.png"/>
                <div className="info_locacao">
                    <div>
                        <h1>Dry 40'</h1>
                        <div><p>ABCU 123456 7</p><p>Rua são diego</p></div>
                    </div>
                    <p className="situacao" id="pagamento_pendente">PAGAMENTO PENDENTE</p>
                </div>
            </section>

            <section className="card_locacao">    
                <img src="images/conteiner.png"/>
                <div className="info_locacao">
                    <div>
                        <h1>Dry 40'</h1>
                        <div><p>ABCU 123456 7</p><p>Rua são diego</p></div>
                    </div>
                    <p className="situacao" id="pagamento_pendente">PAGAMENTO PENDENTE</p>
                </div>
            </section>

            <section className="card_locacao">    
                <img src="images/conteiner.png"/>
                <div className="info_locacao">
                    <div>
                        <h1>Dry 40'</h1>
                        <div><p>ABCU 123456 7</p><p>Rua são diego</p></div>
                    </div>
                    <p className="situacao" id="pagamento_pendente">PAGAMENTO PENDENTE</p>
                </div>
            </section>

            <section className="card_locacao">    
                <img src="images/conteiner.png"/>
                <div className="info_locacao">
                    <div>
                        <h1>Dry 40'</h1>
                        <div><p>ABCU 123456 7</p><p>Rua são diego</p></div>
                    </div>
                    <p className="situacao" id="pagamento_pendente">PAGAMENTO PENDENTE</p>
                </div>
            </section>


        </div>

        </main>
    )
}