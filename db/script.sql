Drop schema if exists moduleasy;
Create schema moduleasy;
Use moduleasy;

CREATE TABLE locador (
    nm_email_locador VARCHAR(150) NOT NULL,
    cd_cnpj_locador VARCHAR(14) NOT NULL UNIQUE,
    nm_locador VARCHAR(150) NOT NULL,
    nm_senha_locador VARCHAR(150) NOT NULL,

    CONSTRAINT pk_locador PRIMARY KEY (nm_email_locador)
) ENGINE=InnoDB;

CREATE TABLE status_manutencao (
	cd_status_manutencao INT AUTO_INCREMENT,
    nm_status_manutencao varchar(150),
    
    CONSTRAINT pk_status_manutencao PRIMARY KEY (cd_status_manutencao)
) ENGINE=InnoDB;

CREATE TABLE tipo_movimentacao (
    cd_tipo_movimentacao INT AUTO_INCREMENT,
    nm_tipo_movimentacao VARCHAR(150) NOT NULL,
    
    CONSTRAINT pk_tipo_movimentacao PRIMARY KEY (cd_tipo_movimentacao)
) ENGINE=InnoDB;

CREATE TABLE locatario (
    nm_email_locatario VARCHAR(150) NOT NULL,
    nm_senha_locatario VARCHAR(150) NOT NULL,
    nm_locatario VARCHAR(150) NOT NULL,
    cd_cpf_locatario VARCHAR(14) UNIQUE,
    cd_cnpj_locatario VARCHAR(14) UNIQUE, 

    CONSTRAINT pk_locatario PRIMARY KEY (nm_email_locatario)
) ENGINE=InnoDB;

CREATE TABLE tamanho_conteiner (
    cd_tamanho_conteiner INT NOT NULL AUTO_INCREMENT,
    nm_tamanho_conteiner VARCHAR(150) NOT NULL,

    CONSTRAINT pk_tamanho_conteiner PRIMARY KEY (cd_tamanho_conteiner)
) ENGINE=InnoDB;

CREATE TABLE tipo_conteiner(
    cd_tipo_conteiner INT NOT NULL AUTO_INCREMENT,
    nm_tipo_conteiner VARCHAR(150) NOT NULL,

    CONSTRAINT pk_tipo_conteiner PRIMARY KEY (cd_tipo_conteiner)
) ENGINE=InnoDB;

CREATE TABLE modelo_conteiner (
    cd_tipo_conteiner INT NOT NULL,
    cd_tamanho_conteiner INT NOT NULL,
    qt_tara_modelo_conteiner DECIMAL(8,2),
    qt_carga_maxima_modelo_conteiner DECIMAL(8,2),

    CONSTRAINT pk_modelo_conteiner PRIMARY KEY (cd_tipo_conteiner, cd_tamanho_conteiner),

    CONSTRAINT fk_modelo_tipo FOREIGN KEY (cd_tipo_conteiner) REFERENCES tipo_conteiner (cd_tipo_conteiner),
    CONSTRAINT fk_modelo_tamanho FOREIGN KEY (cd_tamanho_conteiner) REFERENCES tamanho_conteiner (cd_tamanho_conteiner)
) ENGINE=InnoDB;

CREATE TABLE fabricante (
    cd_cnpj_fabricante VARCHAR(14) NOT NULL UNIQUE,
    nm_fabricante VARCHAR(150) NOT NULL,

    CONSTRAINT pk_fabricante PRIMARY KEY (cd_cnpj_fabricante)
) ENGINE=InnoDB;

CREATE TABLE deposito (
    cd_deposito INT NOT NULL AUTO_INCREMENT,
    nm_deposito VARCHAR(150),
    cd_cep_deposito varchar(9) NOT NULL,
    nm_endereco_deposito VARCHAR(150) NOT NULL,
    qt_raio_atuacao_deposito DECIMAL(8,2) NOT NULL,
    qt_latitude_deposito DECIMAL(8,6) NOT NULL,
    qt_longitude_deposito DECIMAL(9,6) NOT NULL,
    qt_maxima_conteineres_deposito INT,
    qt_atual_conteineres_deposito INT,

    nm_email_locador VARCHAR(150) NOT NULL,

    CONSTRAINT pk_deposito PRIMARY KEY (cd_deposito),

    CONSTRAINT fk_deposito_locador FOREIGN KEY (nm_email_locador) REFERENCES locador (nm_email_locador)
) ENGINE=InnoDB;

CREATE TABLE conteiner (
    cd_conteiner INT NOT NULL AUTO_INCREMENT,
    dt_fabricacao_conteiner DATE NOT NULL,
    cd_bic_conteiner VARCHAR(11) NOT NULL,
    qt_tara_conteiner DECIMAL(8,2) NOT NULL,
    qt_carga_maxima_conteiner DECIMAL(8,2) NOT NULL,

    cd_tipo_conteiner INT NOT NULL,
    cd_tamanho_conteiner INT NOT NULL,
    cd_deposito INT,
    cd_cnpj_fabricante VARCHAR(14),
    nm_email_locador VARCHAR(150) NOT NULL,

    CONSTRAINT pk_conteiner PRIMARY KEY (cd_conteiner),

    CONSTRAINT fk_conteiner_tipo FOREIGN KEY (cd_tipo_conteiner) REFERENCES tipo_conteiner (cd_tipo_conteiner),

    CONSTRAINT fk_conteiner_tamanho FOREIGN KEY (cd_tamanho_conteiner) REFERENCES tamanho_conteiner (cd_tamanho_conteiner),

    CONSTRAINT fk_conteiner_deposito FOREIGN KEY (cd_deposito) REFERENCES deposito (cd_deposito),

    CONSTRAINT fk_conteiner_fabricante FOREIGN KEY (cd_cnpj_fabricante) REFERENCES fabricante (cd_cnpj_fabricante),

    CONSTRAINT fk_conteiner_locador FOREIGN KEY (nm_email_locador) REFERENCES locador (nm_email_locador)
) ENGINE=InnoDB;

CREATE TABLE categoria_componente (
    cd_categoria_componente INT NOT NULL AUTO_INCREMENT,
    nm_categoria_componente VARCHAR(150) NOT NULL,

    CONSTRAINT pk_categoria_componente PRIMARY KEY (cd_categoria_componente)
) ENGINE=InnoDB;

CREATE TABLE componente (
    cd_componente INT NOT NULL AUTO_INCREMENT,
    nm_componente VARCHAR(150) NOT NULL,
    vl_componente DECIMAL(8,2) NOT NULL,
    qt_vida_util_componente INT NOT NULL,
    dt_instalacao_componente DATETIME NOT NULL,

    cd_conteiner INT NOT NULL,
    cd_categoria_componente INT NOT NULL,

    CONSTRAINT pk_componente PRIMARY KEY (cd_componente),

    CONSTRAINT fk_componente_conteiner FOREIGN KEY (cd_conteiner) REFERENCES conteiner (cd_conteiner),

    CONSTRAINT fk_componente_categoria FOREIGN KEY (cd_categoria_componente) REFERENCES categoria_componente (cd_categoria_componente)
) ENGINE=InnoDB;

CREATE TABLE finalidade (
    cd_finalidade INT NOT NULL AUTO_INCREMENT,
    nm_finalidade VARCHAR(150) NOT NULL,

    CONSTRAINT pk_finalidade PRIMARY KEY (cd_finalidade)
) ENGINE=InnoDB;

CREATE TABLE finalidade_conteiner (
    cd_conteiner INT NOT NULL,
    cd_finalidade INT NOT NULL,

    CONSTRAINT pk_finalidade_conteiner PRIMARY KEY ( cd_conteiner, cd_finalidade ),

    CONSTRAINT fk_finalidade_conteiner_conteiner FOREIGN KEY (cd_conteiner) REFERENCES conteiner (cd_conteiner),

    CONSTRAINT fk_finalidade_conteiner_finalidade FOREIGN KEY (cd_finalidade) REFERENCES finalidade (cd_finalidade)
) ENGINE=InnoDB;

CREATE TABLE tipo_status (
    cd_tipo_status INT NOT NULL AUTO_INCREMENT,
    nm_tipo_status VARCHAR(150) NOT NULL,

    CONSTRAINT pk_tipo_status PRIMARY KEY (cd_tipo_status)
) ENGINE=InnoDB;

CREATE TABLE status (
    cd_status INT NOT NULL AUTO_INCREMENT,
    nm_status VARCHAR(150) NOT NULL,
    
    cd_tipo_status INT,

    CONSTRAINT pk_status PRIMARY KEY (cd_status),

    CONSTRAINT fk_status_tipo FOREIGN KEY (cd_tipo_status) REFERENCES tipo_status (cd_tipo_status)
) ENGINE=InnoDB;

CREATE TABLE status_conteiner (
    cd_conteiner INT NOT NULL,
    cd_status INT NOT NULL,

    CONSTRAINT pk_status_conteiner PRIMARY KEY ( cd_conteiner, cd_status ),

    CONSTRAINT fk_status_conteiner_conteiner FOREIGN KEY (cd_conteiner) REFERENCES conteiner (cd_conteiner),

    CONSTRAINT fk_status_conteiner_status FOREIGN KEY (cd_status) REFERENCES status (cd_status)
) ENGINE=InnoDB;

CREATE TABLE tipo_aluguel (
    cd_tipo_aluguel INT NOT NULL AUTO_INCREMENT,
    nm_tipo_aluguel VARCHAR(150) NOT NULL,

    CONSTRAINT pk_tipo_aluguel PRIMARY KEY (cd_tipo_aluguel)
) ENGINE=InnoDB;

CREATE TABLE tipo_aluguel_conteiner (
    cd_conteiner INT NOT NULL,
    cd_tipo_aluguel INT NOT NULL,
    pc_multa_tipo_aluguel_conteiner DECIMAL(5,2),
    vl_tipo_aluguel_conteiner DECIMAL(10,2),

    CONSTRAINT pk_tipo_aluguel_conteiner PRIMARY KEY ( cd_conteiner, cd_tipo_aluguel ),

    CONSTRAINT fk_tipo_aluguel_conteiner FOREIGN KEY (cd_conteiner) REFERENCES conteiner (cd_conteiner),

    CONSTRAINT fk_tipo_aluguel_tipo FOREIGN KEY (cd_tipo_aluguel) REFERENCES tipo_aluguel (cd_tipo_aluguel)
) ENGINE=InnoDB;

CREATE TABLE tipo_manutencao (
    cd_tipo_manutencao INT NOT NULL AUTO_INCREMENT,
    nm_tipo_manutencao VARCHAR(150) NOT NULL,

    CONSTRAINT pk_tipo_manutencao PRIMARY KEY (cd_tipo_manutencao)
) ENGINE=InnoDB;

CREATE TABLE manutencao (
    cd_conteiner INT NOT NULL,
    dt_inicio_manutencao DATETIME NOT NULL,
		
	vl_manutencao DECIMAL(10,2) NOT NULL,
    cd_tipo_manutencao INT NOT NULL,
    cd_status_manutencao INT NOT NULL,

    dt_termino_manutencao DATETIME,

    CONSTRAINT pk_manutencao PRIMARY KEY ( cd_conteiner, dt_inicio_manutencao ),

    CONSTRAINT fk_manutencao_conteiner FOREIGN KEY (cd_conteiner) REFERENCES conteiner (cd_conteiner),

    CONSTRAINT fk_manutencao_tipo FOREIGN KEY (cd_tipo_manutencao) REFERENCES tipo_manutencao (cd_tipo_manutencao),
    
    CONSTRAINT fk_manutencao_status_manutencao FOREIGN KEY (cd_status_manutencao) REFERENCES status_manutencao (cd_status_manutencao)
) ENGINE=InnoDB;

CREATE TABLE tipo_vistoria (
    cd_tipo_vistoria INT NOT NULL AUTO_INCREMENT,
    nm_tipo_vistoria VARCHAR(150) NOT NULL,

    CONSTRAINT pk_tipo_vistoria PRIMARY KEY (cd_tipo_vistoria)
) ENGINE=InnoDB;

CREATE TABLE vistoria (
    dt_inicio_vistoria DATETIME NOT NULL,
    dt_termino_vistoria DATETIME,
    
    cd_conteiner INT NOT NULL,
    cd_tipo_vistoria INT NOT NULL,
    cd_deposito INT,

    CONSTRAINT pk_vistoria PRIMARY KEY (cd_conteiner, dt_inicio_vistoria),

    CONSTRAINT fk_vistoria_conteiner FOREIGN KEY (cd_conteiner) REFERENCES conteiner (cd_conteiner),

    CONSTRAINT fk_vistoria_tipo FOREIGN KEY (cd_tipo_vistoria) REFERENCES tipo_vistoria (cd_tipo_vistoria),

    CONSTRAINT fk_vistoria_deposito FOREIGN KEY (cd_deposito) REFERENCES deposito (cd_deposito)
) ENGINE=InnoDB;

CREATE TABLE item_vistoria (
    cd_item_vistoria INT AUTO_INCREMENT PRIMARY KEY,
    nm_item_vistoria VARCHAR(150) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE resposta_item_vistoria (
    cd_conteiner INT NOT NULL,
    dt_inicio_vistoria DATETIME NOT NULL,
    cd_item_vistoria INT NOT NULL,
    ic_resposta TINYINT NOT NULL,

    CONSTRAINT pk_resposta_item_vistoria PRIMARY KEY (cd_conteiner, dt_inicio_vistoria, cd_item_vistoria),

    CONSTRAINT fk_resposta_item_vistoria_conteiner FOREIGN KEY (cd_conteiner, dt_inicio_vistoria) REFERENCES vistoria (cd_conteiner, dt_inicio_vistoria),

    CONSTRAINT fk_resposta_item_vistoria_item FOREIGN KEY (cd_item_vistoria) REFERENCES item_vistoria (cd_item_vistoria)
) ENGINE=InnoDB;

CREATE TABLE endereco_entrega (
    cd_endereco_entrega INT NOT NULL AUTO_INCREMENT,
    nm_endereco_entrega VARCHAR(100) NOT NULL,
    cd_cep_endereco_entrega VARCHAR(9),
    ds_complemento TEXT,
    
    nm_email_locatario VARCHAR(150) NOT NULL,

    CONSTRAINT pk_endereco_entrega PRIMARY KEY (cd_endereco_entrega),

    CONSTRAINT fk_endereco_entrega_locatario FOREIGN KEY (nm_email_locatario) REFERENCES locatario (nm_email_locatario)
) ENGINE=InnoDB;

CREATE TABLE contrato_aluguel (
	cd_endereco_entrega INT,
    nm_email_locatario VARCHAR(150) NOT NULL,
    cd_conteiner INT NOT NULL,

    nm_endereco_retorno VARCHAR(150),
    dt_entrega DATE,
    dt_retorno DATE,
    qt_duracao_contrato_aluguel INT,
    cd_tipo_aluguel INT,
    dt_criacao_contrato_aluguel DATETIME,

    CONSTRAINT pk_contrato_aluguel PRIMARY KEY ( nm_email_locatario, cd_conteiner, dt_criacao_contrato_aluguel),

    CONSTRAINT fk_contrato_locatario FOREIGN KEY (nm_email_locatario) REFERENCES locatario (nm_email_locatario),
    CONSTRAINT fk_contrato_endereco_entrega FOREIGN KEY (cd_endereco_entrega) REFERENCES endereco_entrega (cd_endereco_entrega),

    CONSTRAINT fk_contrato_conteiner FOREIGN KEY (cd_conteiner) REFERENCES conteiner (cd_conteiner),
    
    CONSTRAINT fk_contrato_aluguel_tipo_aluguel FOREIGN KEY (cd_tipo_aluguel) REFERENCES tipo_aluguel (cd_tipo_aluguel)
) ENGINE=InnoDB;

CREATE TABLE parcela_aluguel (
    dt_abertura_parcela_aluguel DATE NOT NULL,

    nm_email_locatario VARCHAR(150) NOT NULL,
    cd_conteiner INT NOT NULL,
    dt_criacao_contrato_aluguel DATETIME NOT NULL,

    -- 1 pagou, 0 nao pagou
    ic_parcela_aluguel_paga TINYINT,
    dt_vencimento_parcela_aluguel DATE,
    vl_parcela_aluguel DECIMAL(7,2),
    dt_pagamento_parcela_aluguel DATE,

    CONSTRAINT pk_parcela_aluguel PRIMARY KEY ( nm_email_locatario, cd_conteiner, dt_criacao_contrato_aluguel, dt_abertura_parcela_aluguel),

    CONSTRAINT fk_parcela_contrato FOREIGN KEY ( nm_email_locatario, cd_conteiner, dt_criacao_contrato_aluguel )
    REFERENCES contrato_aluguel ( nm_email_locatario, cd_conteiner, dt_criacao_contrato_aluguel)
) ENGINE=InnoDB;

CREATE TABLE movimentacao (
    cd_deposito INT,
    nm_email_locatario VARCHAR(150),
    cd_conteiner INT,
    dt_criacao_contrato_aluguel DATETIME,
    cd_tipo_movimentacao INT,

    CONSTRAINT pk_movimentacao PRIMARY KEY (cd_deposito, nm_email_locatario, cd_conteiner, dt_criacao_contrato_aluguel, cd_tipo_movimentacao),

    CONSTRAINT fk_movimentacao_tipo_movimentacao FOREIGN KEY (cd_tipo_movimentacao) REFERENCES tipo_movimentacao(cd_tipo_movimentacao),
    CONSTRAINT fk_movimentacao_contrato_aluguel FOREIGN KEY (nm_email_locatario, cd_conteiner, dt_criacao_contrato_aluguel) REFERENCES contrato_aluguel(nm_email_locatario, cd_conteiner, dt_criacao_contrato_aluguel)
) ENGINE=InnoDB;