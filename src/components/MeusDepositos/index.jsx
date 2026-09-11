import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CriarDeposito from "../CriarDeposito";

export default function MeusDepositos(){

    let criarDeposito = null;
    function adicionarDeposito(){
        criarDeposito = <CriarDeposito/>
    }
    return(
        <>
            <main className="mainDeposito">
                <h1>Depositos <a className="adicionar" onClick={adicionarDeposito}><span className="material-symbols-outlined">add_2</span></a> </h1>

                {criarDeposito !== null ? <CriarDeposito/> : null }
                <div className="divPai">



                    <section className="sectionArea">
                        <div className="Deposito">
                            <div className="DepositoNome">
                                <h2>Deposito 321 </h2>
                                <p>
                                    11238-321
                                </p>
                                <p>
                                    - Rua Davi Ditador, 321
                                </p>
                                <strong>
                                    Capacidade: 32/60
                                </strong>
                            </div>
                        </div>
                    </section>

                    <section className="sectionArea">
                        <div className="Deposito">
                            <div className="DepositoNome">
                                <h2>Deposito 321 </h2>
                                <p>
                                    11238-321
                                </p>
                                <p>
                                    - Rua Davi Ditador, 321
                                </p>
                                <strong>
                                    Capacidade: 32/60
                                </strong>
                            </div>
                        </div>


                    </section>

                    <section className="sectionArea">
                        <div className="Deposito">
                            <div className="DepositoNome">
                                <h2>Deposito 321 </h2>
                                <p>
                                    11238-321
                                </p>
                                <p>
                                    - Rua Davi Ditador, 321
                                </p>
                                <strong>
                                    Capacidade: 32/60
                                </strong>
                            </div>
                        </div>


                    </section>

                    
                </div>

            </main>
        </>
    )
}