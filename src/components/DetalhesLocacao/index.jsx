
export default function DetalhesLocacao(){

    return(
        <>
            <div class="caixa_detalhes_conteiner">
            <section class="detalhes_conteiner">
                <img src="images/conteiner.png"/>
                <div class="info_detalhes_conteiner">
                    <div class="info_locacao">
                        <div>
                            <h1>Dry 40'</h1>
                            <p>ABCU 123456 7</p>
                        </div>
                        <p class="situacao" id="pagamento_pendente">PAGAMENTO PENDENTE</p>
                    </div>
                    <div class="botoes_detalhes_conteiner">
                        <button class="segundario_button" id="button_vistoria">CHECK-IN / CHECK-OUT</button>
                        <button>GERENCIAR CONTEINER</button>
                    </div>
                </div>
            </section>
            <div class="caixa_detalhes_locacao">
                <section class="termos_aluguel">
                    <div class="secao_titulo">
                        <span class="material-symbols-outlined" id="icone_secao">payments</span>
                        <h2 class="titulo_secao">Termos de Aluguel</h2>
                        <button class="segundario_button"><span class="material-symbols-outlined">description</span>CONTRATO</button>
                    </div>
                    <ul>
                        <li class="info_termos_aluguel" id="info_1">
                            <b>VALOR</b>
                            <div id="parcela">
                                <h2>R$ 1.500,00 </h2>
                                <p>/mês</p>
                            </div>
                        </li>
                        <li class="info_termos_aluguel">
                            <b>DATA DE INICIO</b>
                            <p>01/01/2023</p>
                        </li>
                        <li>
                            <b>DURAÇÃO</b>
                            <p>12 meses</p>
                        </li>
                    </ul>
                </section>
                <section class="locatario">
                    <div class="secao_titulo">
                        <span class="material-symbols-outlined" id="icone_secao">person</span>
                        <h2 class="titulo_secao">Locatário</h2>
                    </div>
                    <div class="info_locatario">
                        <img src="images/locatario.png" class="img_locatario"/>
                        <p>John Kaisen</p>
                    </div>
                    <div class="localizacao_locatario">
                        <b>LOCALIZAÇÃO</b>
                        <p>Santos / SP</p>
                        <p>Rua das Flores, 123</p>
                    </div>
                </section>
            </div>
        </div>

        <section class="especificacoes_tecnicas">
            <div class="secao_titulo">
                <span class="material-symbols-outlined" id="icone_secao">bottom_sheets</span>
                <h2 class="titulo_secao">Especificações Técnicas</h2>
            </div>
            <ul>
                <li id="info_1">
                    <b>NOME FABRICANTE</b>
                    <p>Brenilison da Silva</p>
                </li>
                <li>
                    <b>CNPJ FABRICANTE</b>
                    <p>12.345.678/0001-90</p>
                </li>
                <li>
                    <b>DATA FABRICAÇÃO</b>
                    <p>10/10/2023</p>
                </li>
                <li>
                    <b>PESO MAXIMO CONTEINER</b>
                    <p>300 KG</p>
                </li>
                <li>
                    <details>
                        <summary>
                            <b>FINALIDADES</b>
                            <span class="material-symbols-outlined" id="icone_seta">keyboard_arrow_down</span>
                        </summary>
                        <ul>
                            <li>
                                <p>Armazém</p>
                            </li>
                            <li>
                                <p>Moradia</p>
                            </li>
                            <li>
                                <p>Estoque</p>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>
                            <b>COMPONENTES ESTRUTURAIS</b>
                            <span class="material-symbols-outlined" id="icone_seta">keyboard_arrow_down</span>
                        </summary>
                        <ul>
                            <li>
                                <p>Chuveiro</p>
                            </li>
                            <li>
                                <p>Mobilia</p>
                            </li>
                            <li>
                                <p>Fiação</p>
                            </li>
                            <li>
                                <p>Lampada</p>
                            </li>
                            <li>
                                <p>Privada</p>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>

        </section>
        </>
    )
}