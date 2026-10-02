Delimiter $$

Drop procedure if exists obterLocatario$$
Create procedure obterLocatario (pEmail varchar(150), pSenha varchar(150))
begin
	Select cd_cpf_locatario, nm_locatario, nm_email_locatario, nm_senha_locatario from locatario 
    where nm_email_locatario = pEmail and nm_senha_locatario = md5(pSenha);
end$$

Drop procedure if exists obterLocador$$
Create procedure obterLocador (pEmail varchar(150), pSenha varchar(150))
begin
	Select cd_cnpj_locador, nm_locador, nm_email_locador, nm_senha_locador from locador 
    where nm_email_locador = pEmail and nm_senha_locador = md5(pSenha);
end$$

Drop procedure if exists listarConteineres$$
Create procedure listarConteineres()
begin
	Select c.cd_conteiner, c.dt_fabricacao_conteiner, c.cd_bic_conteiner, c.qt_tara_conteiner, c.qt_carga_maxima_conteiner, c.cd_tipo_conteiner, tc.nm_tipo_conteiner, c.cd_tamanho_conteiner, pc.nm_tamanho_conteiner,
    c.cd_deposito, d.nm_deposito, d.cd_cep_deposito, d.nm_endereco_deposito, d.qt_raio_atuacao_deposito,
    c.cd_cnpj_fabricante, f.nm_fabricante, l.nm_email_locador, l.cd_cnpj_locador, l.nm_locador
    from conteiner as c
    INNER JOIN tamanho_conteiner as pc ON  c.cd_tamanho_conteiner = pc.cd_tamanho_conteiner
    INNER JOIN tipo_conteiner as tc ON c.cd_tipo_conteiner = tc.cd_tipo_conteiner
    INNER JOIN locador as l ON c.nm_email_locador = l.nm_email_locador
    LEFT JOIN deposito as d ON c.cd_deposito = d.cd_deposito
    LEFT JOIN fabricante as f ON c.cd_cnpj_fabricante = f.cd_cnpj_fabricante
    ORDER BY c.cd_conteiner;
end$$

Drop procedure if exists listarConteineresLocador$$
Create procedure listarConteineresLocador(pLocador varchar(150))
begin
	Select cd_conteiner, dt_fabricacao_conteiner, cd_bic_conteiner, qt_tara_conteiner, qt_carga_maxima_conteiner, cd_tipo_conteiner, cd_tamanho_conteiner, cd_deposito, cd_cnpj_fabricante from conteiner
    where nm_email_locador = pLocador;
end$$

Drop procedure if exists listarDepositosLocador$$
Create procedure listarDepositosLocador(pLocador varchar(150))
begin
	Select cd_deposito, nm_deposito, nm_endereco_deposito, cd_cep_deposito, qt_raio_atuacao_deposito, qt_latitude_deposito, qt_longitude_deposito, qt_maxima_conteineres_deposito, qt_atual_conteineres_deposito from deposito
    where nm_email_locador = pLocador;
end$$

Drop procedure if exists listarTiposStatus$$
Create procedure listarTiposStatus()
begin
	Select cd_tipo_status, nm_tipo_status from tipo_status;
end$$

Drop procedure if exists listarStatus$$
Create procedure listarStatus()
begin
	Select cd_status, nm_status, cd_tipo_status from status;
end$$

Drop procedure if exists listarTamanhosConteiner$$
Create procedure listarTamanhosConteiner()
begin
	Select cd_tamanho_conteiner, nm_tamanho_conteiner from tamanho_conteiner;
end$$

Drop procedure if exists listarTiposConteiner$$
Create procedure listarTiposConteiner()
begin
	Select cd_tipo_conteiner, nm_tipo_conteiner from tipo_conteiner;
end$$

Drop procedure if exists listarCategoriasComponente$$
Create procedure listarCategoriasComponente()
begin
	Select cd_categoria_componente, nm_categoria_componente from categoria_componente;
end$$

Drop procedure if exists listarComponentesConteiner$$
Create procedure listarComponentesConteiner(pConteiner INT)
begin
	Select c.cd_conteiner, c.cd_componente, c.nm_componente, c.vl_componente, c.qt_vida_util_componente, c.dt_instalacao_componente, c.cd_categoria_componente, cc.nm_categoria_componente from componente as c
    INNER JOIN categoria_componente as cc ON c.cd_categoria_componente = cc.cd_categoria_componente
    where cd_conteiner = pConteiner;
end$$

Drop procedure if exists listarFinalidades$$
Create procedure listarFinalidades()
begin
	Select cd_finalidade, nm_finalidade from finalidade;
end$$

Drop procedure if exists listarVistoriasConteiner$$
Create procedure listarVistoriasConteiner(pConteiner INT)
begin
	Select v.cd_conteiner, v.dt_inicio_vistoria, v.dt_termino_vistoria, v.cd_tipo_vistoria, d.cd_deposito, nm_deposito from vistoria as v
    INNER JOIN deposito as d ON v.cd_deposito = d.cd_deposito
    where cd_conteiner = pConteiner;
end$$

Drop procedure if exists listarEnderecosEntrega$$
Create procedure listarEnderecosEntrega(pLocatario VARCHAR(150))
begin
	Select cd_endereco_entrega, nm_endereco_entrega, cd_cep_endereco_entrega from endereco_entrega
    where nm_email_locatario = pLocatario;
end$$

Drop procedure if exists listarFinalidadesConteiner$$
Create procedure listarFinalidadesConteiner(pConteiner INT)
begin
	Select fc.cd_finalidade, fc.cd_conteiner, f.nm_finalidade from finalidade_conteiner as fc
    INNER JOIN finalidade as f ON fc.cd_finalidade = f.cd_finalidade
    where cd_conteiner = pConteiner;
end$$

Drop procedure if exists listarTiposAluguel$$
Create procedure listarTiposAluguel()
begin
	Select cd_tipo_aluguel, nm_tipo_aluguel from tipo_aluguel;
end$$

Drop procedure if exists listarTiposAluguelConteiner$$
Create procedure listarTiposAluguelConteiner(pConteiner INT)
begin
	Select tac.cd_conteiner, tac.cd_tipo_aluguel, tac.pc_multa_tipo_aluguel_conteiner, tac.vl_tipo_aluguel_conteiner, ta.nm_tipo_aluguel from tipo_aluguel_conteiner as tac
    INNER JOIN tipo_aluguel as ta ON tac.cd_tipo_aluguel = ta.cd_tipo_aluguel
    where cd_conteiner = pConteiner;
end$$

Drop procedure if exists listarTiposManutencao$$
Create procedure listarTiposManutencao()
begin
	Select cd_tipo_manutencao, nm_tipo_manutencao from tipo_manutencao;
end$$

Drop procedure if exists listarStatusManutencao$$
Create procedure listarStatusManutencao()
begin
	Select cd_status_manutencao, nm_status_manutencao from status_manutencao;
end$$

Drop procedure if exists listarManutencoesConteiner$$
Create procedure listarManutencoesConteiner(pConteiner INT)
begin
	Select m.cd_conteiner, m.dt_inicio_manutencao, m.dt_termino_manutencao, m.cd_tipo_manutencao, nm_tipo_manutencao, m.cd_status_manutencao, nm_status_manutencao from manutencao as m
    INNER JOIN tipo_manutencao as tm ON m.cd_tipo_manutencao = tm.cd_tipo_manutencao
    INNER JOIN status_manutencao as sm ON  m.cd_status_manutencao = sm.cd_status_manutencao
    where cd_conteiner = pConteiner;
end$$

Drop procedure if exists listarManutencoes$$
Create procedure listarManutencoes(pLocador varchar(150))
begin
	Select cd_conteiner, dt_inicio_manutencao, vl_manutencao, cd_tipo_manutencao, cd_status_manutencao from manutencao as m
    INNER JOIN conteiner as c ON m.cd_conteiner = c.cd_conteiner
    where c.nm_email_locador = pLocador;
end$$

Drop procedure if exists criarManutencaoAntiga$$
Create procedure criarManutencaoAntiga(pConteiner INT, pValor DECIMAL(10,2), pTipo INT, pStatus INT, pDtTermino DATETIME, pDtInicio DATETIME)
begin
	Insert into manutencao (cd_conteiner, dt_inicio_manutencao, vl_manutencao, cd_tipo_manutencao, cd_status_manutencao)
    values (pConteiner, pDtInicio, pValor, pTipo, pStatus);
end$$

Drop procedure if exists criarManutencaoAplicada$$
Create procedure criarManutencaoAplicada(pConteiner INT, pValor DECIMAL(10,2), pTipo INT, pStatus INT)
begin
	Declare dtCriacao DATETIME default 0;

	SELECT NOW() into dtCriacao;
	Insert into manutencao (cd_conteiner, dt_inicio_manutencao, vl_manutencao, cd_tipo_manutencao, cd_status_manutencao)
    values (pConteiner, dtCriacao, pValor, pTipo, pStatus);
end$$

Drop procedure if exists atualizarManutencao$$
Create procedure atualizarManutencao(pConteiner INT, pDtInicioManutencao DATETIME, pNvValor DECIMAL(10,2), pNvTipo INT, pNvStatus INT, pDtTerminoManutencao DATETIME)
begin
	Update manutencao set vl_manutencao = COALESCE(pNvValor), cd_tipo_manutencao = COALESCE(pNvTipo),  cd_status_manutencao = COALESCE(pNvStatus), dt_termino_manutencao = COALESCE(pDtTerminoManutencao)
    where cd_conteiner = pConteiner and dt_inicio_manutencao = pDtInicioManutencao;
end$$

Drop procedure if exists deletarManutencao$$
Create procedure deletarManutencao(pConteiner INT, pDtInicioManutencao DATETIME)
begin
	Delete from manutencao where cd_conteiner = pConteiner and dt_inicio_manutencao = pDtInicioManutencao;
end$$

DROP PROCEDURE IF EXISTS listarContratosLocador$$
CREATE PROCEDURE listarContratosLocador(pLocador VARCHAR(150))
begin
	SELECT ca.cd_conteiner, ca.nm_email_locatario, lo.nm_locatario, ca.cd_endereco_entrega, ee.nm_endereco_entrega,
           ca.dt_entrega, ca.nm_endereco_retorno, m.cd_deposito, d.nm_endereco_deposito, m.cd_tipo_movimentacao,
           ca.dt_retorno, ca.qt_duracao_contrato_aluguel, ca.cd_tipo_aluguel, ta.nm_tipo_aluguel, ca.dt_criacao_contrato_aluguel
    FROM contrato_aluguel AS ca
    INNER JOIN tipo_aluguel AS ta ON ca.cd_tipo_aluguel = ta.cd_tipo_aluguel
    INNER JOIN locatario AS lo ON ca.nm_email_locatario = lo.nm_email_locatario
    INNER JOIN endereco_entrega AS ee ON ca.cd_endereco_entrega = ee.cd_endereco_entrega
    INNER JOIN conteiner AS c ON ca.cd_conteiner = c.cd_conteiner
    LEFT JOIN movimentacao AS m
           ON ca.nm_email_locatario = m.nm_email_locatario
          AND ca.cd_conteiner = m.cd_conteiner
          AND ca.dt_criacao_contrato_aluguel = m.dt_criacao_contrato_aluguel
          AND m.cd_tipo_movimentacao = 2
    LEFT JOIN deposito AS d ON m.cd_deposito = d.cd_deposito
    WHERE c.nm_email_locador = pLocador
    ORDER BY ca.dt_criacao_contrato_aluguel;
end$$

Drop procedure if exists criarContrato$$
Create procedure criarContrato(pConteiner INT, pLocatario varchar(150), pEnderecoEntrega INT, pTipoAluguel INT, pQtDuracao INT)
begin
	Declare dtCriacao DATETIME;
	SELECT NOW() into dtCriacao;
    
    Insert into contrato_aluguel (cd_conteiner, nm_email_locatario, dt_criacao_contrato_aluguel, cd_endereco_entrega, nm_endereco_retorno, dt_entrega, dt_retorno, cd_tipo_aluguel, qt_duracao_contrato_aluguel)
    values(pConteiner, pLocatario, dtCriacao, pEnderecoEntrega, null, null, null, pTipoAluguel, pQtDuracao);
end$$

Drop procedure if exists definirRetornoContrato$$
Create procedure definirRetornoContrato(pConteiner INT, pLocatario varchar(150), pDtCriacao DATETIME, pNmEnderecoRetorno varchar(150), pDeposito INT)
begin

	Update contrato_aluguel set dt_retorno = NOW(), nm_endereco_retorno = pNmEnderecoRetorno
	where cd_conteiner = pConteiner and nm_email_locatario = pLocatario and dt_criacao_contrato_aluguel = pDtCriacao;
    
	if (pDeposito IS NOT NULL) then
		Insert into movimentacao (cd_deposito, nm_email_locatario, cd_conteiner, dt_criacao_contrato_aluguel, cd_tipo_movimentacao) 
		values(pDeposito, pLocatario, pConteiner, pDtCriacao, 2);
    end if;
end$$

Drop procedure if exists iniciarContrato$$
Create procedure iniciarContrato(pConteiner INT, pLocatario varchar(150), pDtCriacaoContrato DATETIME)
begin
    DECLARE vContador INT DEFAULT 0;
    DECLARE vVlParcela DECIMAL(10,2) DEFAULT 0;
    DECLARE vDtVencimento DATE;
    DECLARE vDtAbertura DATE;
    DECLARE vTipoAluguel INT DEFAULT 0;
    DECLARE vDeposito INT DEFAULT 0; 
    SET vDtAbertura = NOW();
    
    SELECT cd_deposito into vDeposito from conteiner
    where cd_conteiner = pConteiner;
    
    Select cd_tipo_aluguel into vTipoAluguel from contrato_aluguel
    where cd_conteiner = pConteiner and nm_email_locatario = pLocatario and dt_criacao_contrato_aluguel = pDtCriacaoContrato;
    
    Select vl_tipo_aluguel_conteiner into vVlParcela from tipo_aluguel_conteiner 
    where cd_conteiner = pConteiner and cd_tipo_aluguel = vTipoAluguel;
    
    Select qt_duracao_contrato_aluguel into vContador from contrato_aluguel
    where cd_conteiner = pConteiner and nm_email_locatario = pLocatario and dt_criacao_contrato_aluguel = pDtCriacaoContrato;
    
    Update contrato_aluguel set dt_entrega = vDtAbertura
    where (cd_conteiner = pConteiner and nm_email_locatario = pLocatario and dt_criacao_contrato_aluguel = pDtCriacaoContrato);
    
	Insert into movimentacao (cd_deposito, nm_email_locatario, cd_conteiner, dt_criacao_contrato_aluguel, cd_tipo_movimentacao) 
	values(vDeposito, pLocatario, pConteiner, pDtCriacaoContrato, 1);

	WHILE (vContador > 0) DO
		SET vDtVencimento = CASE vTipoAluguel
            WHEN 1 THEN vDtAbertura -- Diário
            WHEN 2 THEN DATE_ADD(vDtAbertura, INTERVAL 6 DAY) -- Semanal
            WHEN 3 THEN LAST_DAY(vDtAbertura) -- Mensal
            WHEN 4 THEN LAST_DAY(DATE_ADD(vDtAbertura, INTERVAL 2 MONTH)) -- Trimestral
            WHEN 5 THEN LAST_DAY(DATE_ADD(vDtAbertura, INTERVAL 5 MONTH)) -- Semestral
            WHEN 6 THEN LAST_DAY(DATE_ADD(vDtAbertura, INTERVAL 11 MONTH)) -- Anual
		END;
		
		INSERT INTO parcela_aluguel (cd_conteiner, nm_email_locatario, dt_criacao_contrato_aluguel, dt_abertura_parcela_aluguel, vl_parcela_aluguel, ic_parcela_aluguel_paga, dt_vencimento_parcela_aluguel, 
		dt_pagamento_parcela_aluguel)
		value(pConteiner, pLocatario, pDtCriacaoContrato, vDtAbertura, vVlParcela, 0, vDtVencimento, null);
        
        SET vDtAbertura = DATE_ADD(vDtVencimento, INTERVAL 1 DAY);
		SET vContador = vContador - 1;
	END WHILE;
end$$

Drop procedure if exists listarMovimentacoesLocador$$
Create procedure listarMovimentacoesLocador(pLocador varchar(150))
begin
	Select m.cd_deposito, d.nm_deposito, m.nm_email_locatario, lo.nm_locatario, m.cd_conteiner, m.dt_criacao_contrato_aluguel, m.cd_tipo_movimentacao, tm.nm_tipo_movimentacao from movimentacao as m
    INNER JOIN conteiner as c ON m.cd_conteiner = c.cd_conteiner
    INNER JOIN deposito as d ON m.cd_deposito = d.cd_deposito
    INNER JOIN locatario as lo ON m.nm_email_locatario = lo.nm_email_locatario
    INNER JOIN tipo_movimentacao tm ON m.cd_tipo_movimentacao = tm.cd_tipo_movimentacao 
    where c.nm_email_locador = pLocador;
end$$

Drop procedure if exists listarMovimentacoesConteiner$$
Create procedure listarMovimentacoesConteiner(pLocador varchar(150), pConteiner INT)
begin
	Select m.cd_deposito, d.nm_deposito, m.nm_email_locatario, lo.nm_locatario, m.cd_conteiner, m.dt_criacao_contrato_aluguel, m.cd_tipo_movimentacao, tm.nm_tipo_movimentacao from movimentacao as m
    INNER JOIN conteiner as c ON m.cd_conteiner = c.cd_conteiner
    INNER JOIN deposito as d ON m.cd_deposito = d.cd_deposito
    INNER JOIN locatario as lo ON m.nm_email_locatario = lo.nm_email_locatario
    INNER JOIN tipo_movimentacao tm ON m.cd_tipo_movimentacao = tm.cd_tipo_movimentacao 
    where c.nm_email_locador = pLocador and m.cd_conteiner = pConteiner;
end$$

Drop procedure if exists listarTamanhosTipoConteiner$$
Create procedure listarTamanhosTipoConteiner(pTipoConteiner INT)
begin
	Select mc.cd_tamanho_conteiner, pc.nm_tamanho_conteiner from modelo_conteiner as mc
    INNER JOIN tamanho_conteiner as pc ON mc.cd_tamanho_conteiner = pc.cd_tamanho_conteiner
	where cd_tipo_conteiner = pTipoConteiner;
end$$

Drop procedure if exists listarModelosConteiner$$
Create procedure listarModelosConteiner()
begin
	Select mc.cd_tipo_conteiner, tc.nm_tipo_conteiner, mc.cd_tamanho_conteiner, pc.nm_tamanho_conteiner from modelo_conteiner as mc
    INNER JOIN tamanho_conteiner as pc ON mc.cd_tamanho_conteiner = pc.cd_tamanho_conteiner
    INNER JOIN tipo_conteiner as tc ON mc.cd_tipo_conteiner = tc.cd_tipo_conteiner;
end$$

Drop procedure if exists listarDepositos$$
Create procedure listarDepositos(pLocador varchar(150))
begin
	Select cd_deposito, nm_email_locador, nm_deposito, nm_endereco_deposito, cd_cep_deposito, qt_maxima_conteineres_deposito, qt_atual_conteineres_deposito, qt_raio_atuacao_deposito from deposito
    where nm_email_locador = pLocador;
end$$

-- nao testados

Drop procedure if exists criarConteiner$$
Create procedure criarConteiner(pLocador varchar(150), pNvDtFabricacaoConteiner DATE, pNvBicConteiner varchar(11), pNvTaraConteiner DECIMAL(8,2), pNvCargaMaximaConteiner DECIMAL(8,2), pNvTipoConteiner INT, pNvTamanhoConteiner INT, 
pNvDeposito INT, pNvFabricante varchar(14))
begin
	Insert into conteiner (nm_email_locador, dt_fabricacao_conteiner, cd_bic_conteiner, qt_tara_conteiner, qt_carga_maxima_conteiner, cd_tipo_conteiner, cd_tamanho_conteiner, cd_deposito, cd_cnpj_fabricante) 
    values(pLocador, pNvFabricacaoConteiner, pNvBicConteiner, pNvTaraConteiner, pNvCargaMaximaConteiner, pNvTipoConteiner, pNvTamanhoConteiner, pNvDeposito, pNvFabricante);
end$$

Drop procedure if exists atualizarConteiner$$
Create procedure atualizarConteiner(pConteiner INT, pNvFabricacaoConteiner DATE, pNvBicConteiner varchar(11), pNvTaraConteiner DECIMAL(8,2), pNvCargaMaximaConteiner DECIMAL(8,2), pNvTipoConteiner INT, pNvTamanhoConteiner INT, 
pNvDeposito INT, pNvFabricante varchar(14))
begin
	Update conteiner set dt_fabricacao_conteiner= pNvFabricacaoConteiner, cd_bic_conteiner = pNvBicConteiner, qt_tara_conteiner = pNvTaraConteiner, qt_carga_maxima_conteiner = pNvCargaMaximaConteiner, 
    cd_tipo_conteiner = pNvTipoConteiner, cd_tamanho_conteiner = pNvTamanhoConteiner, cd_deposito = pNvDeposito, cd_cnpj_fabricante = pNvFabricante 
    where cd_conteiner = pConteiner;
end$$

Drop procedure if exists deletarConteiner$$
Create procedure deletarConteiner(pConteiner INT)
begin
	Delete from conteiner where cd_conteiner = pConteiner;
end$$
Drop procedure if exists criarDeposito$$
Create procedure criarDeposito(pLocador varchar(150), pNvNmDeposito varchar(150), pNvCepDeposito varchar(9), pNvEnderecoDeposito varchar(150), pNvRaioAtuacaoDeposito DECIMAL(8,2), pNvLatitudeDeposito DECIMAL(8,6), 
pNvLongitudeDeposito DECIMAL(9,6), pNvMaximaConteineresDeposito INT, pNvQtAtualDeposito INT)
begin
	Insert into deposito (nm_email_locador, nm_deposito, cd_cep_deposito, nm_endereco_deposito, qt_raio_atuacao_deposito, qt_latitude_deposito, qt_longitude_deposito, qt_maxima_conteineres_deposito, qt_atual_conteineres_deposito) 
    values(pLocador, pNvNmDeposito, pNvCepDeposito, pNvEnderecoDeposito, pNvRaioAtuacaoDeposito, pNvLatitudeDeposito, pNvLongitudeDeposito, pNvMaximaConteineresDeposito, pNvQtAtualDeposito);
end$$

Drop procedure if exists atualizarDeposito$$
Create procedure atualizarDeposito(pDeposito INT, pNvNmDeposito varchar(150), pNvCepDeposito varchar(9), pNvEnderecoDeposito varchar(150), pNvRaioAtuacaoDeposito DECIMAL(8,2), pNvLatitudeDeposito DECIMAL(8,6),
pNvLongitudeDeposito DECIMAL(9,6), pNvMaximaConteineresDeposito INT, pNvQtAtualDeposito INT)
begin
	Update deposito set nm_deposito = pNvNmDeposito, cd_cep_deposito = pNvCepDeposito, nm_endereco_deposito = pNvEnderecoDeposito, qt_raio_atuacao_deposito = pNvRaioAtuacaoDeposito, qt_latitude_deposito = pNvLatitudeDeposito, 
    qt_longitude_deposito = pNvLongitudeDeposito, qt_maxima_conteineres_deposito = pNvMaximaConteineresDeposito, qt_atual_conteineres_deposito = pNvQtAtualDeposito 
    where cd_deposito = pDeposito;
end$$

Drop procedure if exists deletarDeposito$$
Create procedure deletarDeposito(pDeposito INT)
begin
	Delete from deposito
    where cd_deposito = pDeposito;
end$$

Drop procedure if exists criarLocador$$
Create procedure criarLocador(pEmail varchar(150), pCnpj varchar(14), pNome varchar(150), pSenha varchar(150))
begin
	Declare vQtCnpj int default 0;
    Declare vQtEmail int default 0;
    
    Select count(cd_cnpj_locador) into vQtCnpj from locador where cd_cnpj_locador = pCnpj;
    Select count(nm_email_locador) into vQtEmail from locador where nm_email_locador = pEmail;
    
    if (vQtCnpj > 0) then
		Signal sqlstate '45000' set message_text = 'Cnpj já cadastrado';
	else
		if (vQtEmail > 0) then
			Signal sqlstate '45000' set message_text = 'Email já cadastrado!';
		else
			Insert into locador (nm_email_locador, cd_cnpj_locador, nm_locador, nm_senha_locador)
			values(pEmail, pCnpj, pNome, md5(pSenha));
        end if;
    end if;
end$$

Drop procedure if exists atualizarLocador$$
Create procedure atualizarLocador(pLocador varchar(150), pNvCnpjLocador varchar(14), pNvNmLocador varchar(150))
begin
	Update locador set cd_cnpj_locador = pNvCnpjLocador, nm_locador = pNvNmLocador 
    where nm_email_locador = pLocador;
end$$

Drop procedure if exists deletarContaLocador$$
Create procedure deletarContaLocador(pLocador varchar(150))
begin
	Delete from locador
    where nm_email_locador = pLocador;
end$$

Drop procedure if exists criarLocatario$$
Create procedure criarLocatario(pEmail varchar(150), pNome varchar(150), pSenha varchar(14), pCpf varchar(150), pCnpj varchar(150))
begin
	Declare vQtCnpj int default 0;
    Declare vQtCpf int default 0;
    Declare vQtEmail int default 0;
    
    Select count(cd_cpf_locatario) into vQtCpf from locatario where cd_cpf_locatario = pCpf;
    Select count(cd_cnpj_locatario) into vQtCnpj from locatario where cd_cnpj_locatario = pCnpj;
    Select count(nm_email_locatario) into vQtEmail from locatario where nm_email_locatario = pEmail;

	if (vQtCpf > 0) then
		Signal sqlstate '45000' set message_text = 'Cpf já cadastrado!';
	else
		if (vQtCnpj > 0) then
			Signal sqlstate '45000' set message_text = 'Cnpj já cadastrado!';
        else
			if (vQtEmail > 0) then
				Signal sqlstate '45000' set message_text = 'Email já cadastrado!';
			else
				Insert into locatario (nm_locatario, nm_email_locatario, nm_senha_locatario, cd_cnpj_locatario, cd_cpf_locatario) 
				values(pNome, pEmail, md5(pSenha), pCnpj, pCpf);
            end if;
        end if;
    end if;
end$$

Drop procedure if exists atualizarLocatario$$
Create procedure AtualizarLocatario(pLocatario varchar(150), pNvNmLocatario varchar(150), pNvCpfLocatario varchar(14), pNvCnpjLocatario varchar(14))
begin
	Update locatario set nm_locatario = pNvNmLocatario, cd_cpf_locatario = pNvCpfLocatario, cd_cnpj_locatario = pNvCnpjLocatario
    where nm_email_locatario = pLocatario;
end$$

Drop procedure if exists deletarContaLocatario$$
Create procedure deletarContaLocatario(pLocatario varchar(150))
begin
	Delete from locatario
    where nm_email_locatario = pLocatario;
end$$

Drop procedure if exists adicionarComponenteConteiner$$
Create procedure adicionarComponenteConteiner(pConteiner INT, pNmComponente varchar(150), pVlComponente DECIMAL(8,2), pVidaUtilComponente INT, pDtInstalacaoComponente DATETIME, pCategoriaComponente INT)
begin
	Insert into componente (cd_conteiner, nm_componente, vl_componente, qt_vida_util_componente, dt_instalacao_componente, cd_categoria_componente) 
    values(pConteiner, pNmComponente, pVlComponente, pVidaUtilComponente, pDtInstalacaoComponente, pCategoriaComponente);
end$$

Drop procedure if exists criarFabricante$$
Create procedure criarFabricante(pCnpj varchar(14), pNome varchar(150))
begin
	Declare vQt INT default 0;
    
    Select count(cd_cnpj_fabricante) from fabricante where cd_cnpj_fabricante = pCnpj into vQt;
    if (vQt > 0) then
		signal sqlstate '45000' set message_text = 'Fabricante ja existente';
    end if;
	
    Insert into fabricante (cd_cnpj_fabricante, nm_fabricante) 
    values(pCnpj, pNome);
end$$

Drop procedure if exists listarFabricantes$$
Create procedure listarFabricantes()
begin
	Select cd_cnpj_fabricante, nm_fabricante from fabricante;
end$$

Drop procedure if exists atualizarStatusConteiner$$
Create procedure atualizarStatusConteiner(pConteiner INT, pNvStatus INT)
begin
	Update status_conteiner set cd_status = pNvStatus
    where cd_conteiner = pConteiner;
end$$

Drop procedure if exists listarTiposMovimentacao$$
Create procedure listarTiposMovimentacao()
begin
	Select cd_tipo_movimentacao, nm_tipo_movimentacao from tipo_movimentacao;
end$$

Drop procedure if exists listarItensVistoria$$
Create procedure listarItensVistoria()
begin
	Select cd_item_vistoria, nm_item_vistoria from item_vistoria;
end$$

Drop procedure if exists listarRespostasItensVistoria$$
Create procedure listarRespostasItensVistoria(pConteiner INT, pDtVistoria DATETIME)
begin
	Select iv.cd_item_vistoria, iv.nm_item_vistoria, riv.ic_resposta from item_vistoria iv
    INNER JOIN resposta_item_vistoria as riv ON iv.cd_item_vistoria = riv.cd_item_vistoria 
    INNER JOIN vistoria as v ON (v.cd_conteiner = riv.cd_conteiner and v.dt_inicio_vistoria = riv.dt_inicio_vistoria) 
    where (v.cd_conteiner = pConteiner and v.dt_inicio_vistoria = pDtVistoria);
end$$

Drop procedure if exists listarVistoriasConteiner$$
Create procedure listarVistoriasConteiner(pConteiner INT)
begin
	Select v.dt_inicio_vistoria, v.dt_termino_vistoria, v.cd_conteiner, v.cd_tipo_vistoria, tv.nm_tipo_vistoria, v.cd_deposito, d.nm_deposito from vistoria as v
    INNER JOIN tipo_vistoria as tv ON (v.cd_tipo_vistoria = tv.cd_tipo_vistoria) 
    INNER JOIN deposito as d ON v.cd_deposito = d.cd_deposito
    where cd_conteiner = pConteiner;
end$$

Delimiter $$