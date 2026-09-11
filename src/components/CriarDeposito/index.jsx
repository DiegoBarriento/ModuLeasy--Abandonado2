export default function CriarDeposito(){
    return(
        <>
            <div className="bloqueio">
                <section>
                    <h1>Cadastrar Deposito</h1>
                    <div>
                        <label>NOME</label>
                        <input type="text" />

                        <label>CEP</label>
                        <input type="number" />

                        <label>Endereço</label>
                        <input type="text" />

                        <label>Capacidade</label>
                        <input type="text" />

                        <label>Raio de atuação</label>
                        <input type="text" />
                    </div>
                    <div>
                        <button>Cancelar</button>
                        <button>Salvar</button>
                    </div>
                </section>
            </div>
        </>
    )
}