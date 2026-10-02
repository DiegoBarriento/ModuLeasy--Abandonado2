-- Tipos aluguel
call listarTiposAluguel();

-- Manutencao
call listarTiposManutencao();
call listarStatusManutencao();

-- Status
call listarTiposStatus();
call listarStatus();

-- Tipo movimentacao
call listarTiposMovimentacao();

-- Repostas vistoria
call listarRespostasItensVistoria(1, '2025-01-05 08:00:00');

-- Vistoria
call listarVistoriasConteiner(2);

-- Itens da vistoria
call listarItensVistoria();

-- Modelo -> Tamanho, Tipo
call listarTamanhosConteiner();
call listarTiposConteiner();

-- Componente
call listarCategoriasComponente();
call listarComponentesConteiner('1');

-- Fabricante
call listarFabricantes();
call criarFabricante('11222333111101', 'contBox');

-- Depositos
call listarDepositos("contato@containerbrasil.com.br");

-- Finalidade
call listarFinalidades();

-- Modelos de Conteiner
call listarModelosConteiner();

-- Conteiner
call listarVistoriasConteiner('2');
call listarManutencoesConteiner('3');
call listarFinalidadesConteiner('2');
call listarTiposAluguelConteiner('5');
call listarTamanhosTipoConteiner('1');
call listarStatusConteiner('1');

-- Locatario
call listarEnderecosEntrega('obraalpha@email.com');
call obterLocatario ('obraalpha@email.com', '123456');
call listarConteineresLocador('contato@containerbrasil.com.br');

-- Locador
call listarConteineresLocador('contato@containerbrasil.com.br');
call listarDepositosLocador('contato@modularsantos.com.br');
call obterUsuario ('obraalpha@email.com', '123456');
call listarContratosLocador('contato@containerbrasil.com.br');
call listarMovimentacoesLocador('contato@modularsantos.com.br');

select * from locador;
select * from locatario;
select * from locador where cd_cnpj_locador = 11333333111102;
select * from locatario;
select * from resposta_item_vistoria;
select * from contrato_aluguel;
select * from deposito;


