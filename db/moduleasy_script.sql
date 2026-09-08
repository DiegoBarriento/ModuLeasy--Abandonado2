Drop schema if exists moduleasy;
Create schema moduleasy;

CREATE TABLE locador (
    cd_cnpj_locador VARCHAR(14) NOT NULL UNIQUE,
    nm_locador VARCHAR(150) NOT NULL,
    nm_email_locador VARCHAR(150) NOT NULL,
    nm_senha_locador VARCHAR(150) NOT NULL,

    PRIMARY KEY (cd_cnpj_locador)
) ENGINE=InnoDB;


CREATE TABLE locatario (
    nm_email_locatario VARCHAR(150) NOT NULL,
    nm_senha_locatario VARCHAR(150) NOT NULL,
    nm_locatario VARCHAR(150) NOT NULL,
    cd_cpf_cnpj_locador VARCHAR(14) NOT NULL UNIQUE,
    nm_endereco_locatario VARCHAR(150) NOT NULL,
    qt_latitude DECIMAL(8,6) NOT NULL,
    qt_longitude DECIMAL(9,6) NOT NULL,

    PRIMARY KEY (nm_email_locatario)
) ENGINE=InnoDB;

CREATE TABLE tamanho_conteiner (
    cd_tamanho_conteiner INT NOT NULL AUTO_INCREMENT,
    nm_tamanho_conteiner VARCHAR(150) NOT NULL,

    PRIMARY KEY (cd_tamanho_conteiner)
) ENGINE=InnoDB;

CREATE TABLE tipo_conteiner (
    cd_tipo_conteiner INT NOT NULL AUTO_INCREMENT,
    nm_tipo_conteiner VARCHAR(150) NOT NULL,

    PRIMARY KEY (cd_tipo_conteiner)
) ENGINE=InnoDB;

CREATE TABLE modelo_conteiner (
    cd_tipo_conteiner INT NOT NULL,
    cd_tamanho_conteiner INT NOT NULL,
    qt_tara_modelo_conteiner DECIMAL(8,2),
    qt_carga_maxima_modelo_conteiner DECIMAL(8,2),

    PRIMARY KEY (cd_tipo_conteiner, cd_tamanho_conteiner),

    CONSTRAINT fk_modelo_tipo FOREIGN KEY (cd_tipo_conteiner) REFERENCES tipo_conteiner (cd_tipo_conteiner),
    CONSTRAINT fk_modelo_tamanho FOREIGN KEY (cd_tamanho_conteiner) REFERENCES tamanho_conteiner (cd_tamanho_conteiner)
) ENGINE=InnoDB;

CREATE TABLE fabricante (
    cd_cnpj_fabricante VARCHAR(14) NOT NULL UNIQUE,
    nm_fabricante_conteiner VARCHAR(150) NOT NULL,

    PRIMARY KEY (cd_cnpj_fabricante)
) ENGINE=InnoDB;

CREATE TABLE deposito (
    cd_deposito INT NOT NULL AUTO_INCREMENT,
    nm_deposito VARCHAR(150) NOT NULL,
    nm_endereco_deposito VARCHAR(150) NOT NULL,
    qt_raio_atuacao_deposito DECIMAL(8,2) NOT NULL,
    qt_latitude_deposito DECIMAL(8,6) NOT NULL,
    qt_longitude_deposito DECIMAL(9,6) NOT NULL,
    qt_maxima_conteineres_deposito INT,
    qt_atual_conteineres_deposito INT,

    cd_cnpj_locador VARCHAR(14) NOT NULL,

    PRIMARY KEY (cd_deposito),

    CONSTRAINT fk_deposito_locador FOREIGN KEY (cd_cnpj_locador) REFERENCES locador (cd_cnpj_locador)
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
    cd_cnpj_fabricante INT,
    cd_cnpj_locador VARCHAR(14) NOT NULL,

    PRIMARY KEY (cd_conteiner),

    CONSTRAINT fk_conteiner_tipo FOREIGN KEY (cd_tipo_conteiner) REFERENCES tipo_conteiner (cd_tipo_conteiner),

    CONSTRAINT fk_conteiner_tamanho FOREIGN KEY (cd_tamanho_conteiner) REFERENCES tamanho_conteiner (cd_tamanho_conteiner),

    CONSTRAINT fk_conteiner_deposito FOREIGN KEY (cd_deposito) REFERENCES deposito (cd_deposito),

    CONSTRAINT fk_conteiner_fabricante FOREIGN KEY (cd_cnpj_fabricante) REFERENCES fabricante (cd_cnpj_fabricante),

    CONSTRAINT fk_conteiner_locador FOREIGN KEY (cd_cnpj_locador) REFERENCES locador (cd_cnpj_locador)
) ENGINE=InnoDB;

CREATE TABLE categoria_componente (
    cd_categoria_componente INT NOT NULL AUTO_INCREMENT,
    nm_categoria_componente VARCHAR(150) NOT NULL,

    PRIMARY KEY (cd_categoria_componente)
) ENGINE=InnoDB;

CREATE TABLE componente (
    cd_componente INT NOT NULL AUTO_INCREMENT,
    nm_componente VARCHAR(150) NOT NULL,
    vl_componente DECIMAL(8,2) NOT NULL,

    conteiner_cd_conteiner INT NOT NULL,
    cd_categoria_componente INT NOT NULL,

    qt_vida_util_componente INT NOT NULL,
    dt_instalacao_componente DATETIME NOT NULL,

    PRIMARY KEY (cd_componente),

    CONSTRAINT fk_componente_conteiner FOREIGN KEY (conteiner_cd_conteiner) REFERENCES conteiner (cd_conteiner),

    CONSTRAINT fk_componente_categoria FOREIGN KEY (cd_categoria_componente) REFERENCES categoria_componente (cd_categoria_componente)
) ENGINE=InnoDB;

CREATE TABLE finalidade (
    cd_finalidade INT NOT NULL AUTO_INCREMENT,
    nm_finalidade VARCHAR(150) NOT NULL,

    PRIMARY KEY (cd_finalidade)
) ENGINE=InnoDB;

CREATE TABLE finalidade_conteiner (
    cd_conteiner INT NOT NULL,
    cd_finalidade INT NOT NULL,

    PRIMARY KEY (
        cd_conteiner,
        cd_finalidade
    ),

    CONSTRAINT fk_finalidade_conteiner_conteiner FOREIGN KEY (cd_conteiner) REFERENCES conteiner (cd_conteiner),

    CONSTRAINT fk_finalidade_conteiner_finalidade FOREIGN KEY (cd_finalidade) REFERENCES finalidade (cd_finalidade)
) ENGINE=InnoDB;

CREATE TABLE tipo_status (
    cd_tipo_status INT NOT NULL AUTO_INCREMENT,
    nm_tipo_status VARCHAR(150) NOT NULL,

    PRIMARY KEY (cd_tipo_status)
) ENGINE=InnoDB;

CREATE TABLE status (
    cd_status INT NOT NULL AUTO_INCREMENT,
    nm_status VARCHAR(150) NOT NULL,
    
    cd_tipo_status INT,

    PRIMARY KEY (cd_status),

    CONSTRAINT fk_status_tipo FOREIGN KEY (cd_tipo_status) REFERENCES tipo_status (cd_tipo_status)
) ENGINE=InnoDB;

CREATE TABLE status_conteiner (
    cd_conteiner INT NOT NULL,
    cd_status INT NOT NULL,
    
    dt_inicio_status_conteiner DATETIME NOT NULL,
    dt_termino_status_conteiner DATETIME,

    PRIMARY KEY (
        cd_conteiner,
        cd_status,
        dt_inicio_status_conteiner
    ),

    CONSTRAINT fk_status_conteiner_conteiner FOREIGN KEY (cd_conteiner) REFERENCES conteiner (cd_conteiner),

    CONSTRAINT fk_status_conteiner_status FOREIGN KEY (cd_status) REFERENCES status (cd_status)
) ENGINE=InnoDB;

CREATE TABLE tipo_aluguel (
    cd_tipo_aluguel INT NOT NULL AUTO_INCREMENT,
    nm_tipo_aluguel VARCHAR(150) NOT NULL,

    PRIMARY KEY (cd_tipo_aluguel)
) ENGINE=InnoDB;

CREATE TABLE tipo_aluguel_conteiner (
    cd_conteiner INT NOT NULL,
    cd_tipo_aluguel INT NOT NULL,
    pc_multa_tipo_aluguel DECIMAL(5,2),
    vl_tipo_aluguel DECIMAL(10,2),

    PRIMARY KEY (
        cd_conteiner,
        cd_tipo_aluguel
    ),

    CONSTRAINT fk_tipo_aluguel_conteiner FOREIGN KEY (cd_conteiner) REFERENCES conteiner (cd_conteiner),

    CONSTRAINT fk_tipo_aluguel_tipo FOREIGN KEY (cd_tipo_aluguel) REFERENCES tipo_aluguel (cd_tipo_aluguel)
) ENGINE=InnoDB;

CREATE TABLE tipo_manutencao (
    cd_tipo_manutencao INT NOT NULL AUTO_INCREMENT,
    nm_tipo_manutencao VARCHAR(150) NOT NULL,

    PRIMARY KEY (cd_tipo_manutencao)
) ENGINE=InnoDB;

CREATE TABLE manutencao (
    cd_conteiner INT NOT NULL,
    cd_tipo_manutencao INT NOT NULL,
    
    dt_inicio_manutencao DATETIME NOT NULL,
    dt_termino_manutencao DATETIME,

    PRIMARY KEY (
        cd_conteiner,
        dt_inicio_manutencao
    ),

    CONSTRAINT fk_manutencao_conteiner FOREIGN KEY (cd_conteiner) REFERENCES conteiner (cd_conteiner),

    CONSTRAINT fk_manutencao_tipo FOREIGN KEY (cd_tipo_manutencao) REFERENCES tipo_manutencao (cd_tipo_manutencao)
) ENGINE=InnoDB;

CREATE TABLE tipo_vistoria (
    cd_tipo_vistoria INT NOT NULL AUTO_INCREMENT,
    nm_tipo_vistoria VARCHAR(150) NOT NULL,

    PRIMARY KEY (cd_tipo_vistoria)
) ENGINE=InnoDB;

CREATE TABLE vistoria (
    dt_inicio_vistoria DATETIME NOT NULL,
    dt_termino_vistoria DATETIME,
    
    cd_conteiner INT NOT NULL,
    cd_tipo_vistoria INT NOT NULL,
    cd_deposito INT,

    PRIMARY KEY (cd_conteiner, dt_inicio_vistoria),

    CONSTRAINT fk_vistoria_conteiner FOREIGN KEY (cd_conteiner) REFERENCES conteiner (cd_conteiner),

    CONSTRAINT fk_vistoria_tipo FOREIGN KEY (cd_tipo_vistoria) REFERENCES tipo_vistoria (cd_tipo_vistoria),

    CONSTRAINT fk_vistoria_deposito FOREIGN KEY (cd_deposito) REFERENCES deposito (cd_deposito)
) ENGINE=InnoDB;

CREATE TABLE endereco_entrega (
    cd_endereco_entrega INT NOT NULL AUTO_INCREMENT,
    cd_cep_endereco_entrega VARCHAR(9),
    nm_endereco_entrega VARCHAR(100) NOT NULL,
    
    nm_email_locatario VARCHAR(150) NOT NULL,

    PRIMARY KEY (cd_endereco_entrega),

    CONSTRAINT fk_endereco_entrega_locatario FOREIGN KEY (nm_email_locatario) REFERENCES locatario (nm_email_locatario)
) ENGINE=InnoDB;

CREATE TABLE contrato_aluguel (
	dt_inicio_contrato_aluguel DATE NOT NULL,
    dt_termino_contrato_aluguel DATETIME,
    nm_endereco_entrega VARCHAR(150) NOT NULL,
    dt_entrega DATE,
    dt_retorno DATE,
    
    nm_email_locatario VARCHAR(150) NOT NULL,
    cd_conteiner INT NOT NULL,

    PRIMARY KEY ( nm_email_locatario, cd_conteiner, dt_inicio_contrato_aluguel ),

    CONSTRAINT fk_contrato_locatario FOREIGN KEY (nm_email_locatario) REFERENCES locatario (nm_email_locatario),

    CONSTRAINT fk_contrato_conteiner FOREIGN KEY (cd_conteiner) REFERENCES conteiner (cd_conteiner)
) ENGINE=InnoDB;

CREATE TABLE parcela_aluguel (
    dt_abertura_parcela_aluguel DATE NOT NULL,
    
    nm_email_locatario VARCHAR(150) NOT NULL,
    cd_conteiner INT NOT NULL,
    dt_inicio_contrato_aluguel DATE NOT NULL,

    ic_parcela_aluguel_paga TINYINT,
    dt_vencimento_parcela_aluguel DATE,
    vl_parcela_aluguel DECIMAL(7,2),
    dt_pagamento_parcela_aluguel DATE,

    PRIMARY KEY ( nm_email_locatario, cd_conteiner, dt_inicio_contrato_aluguel, dt_abertura_parcela_aluguel),

    CONSTRAINT fk_parcela_contrato FOREIGN KEY ( nm_email_locatario, cd_conteiner, dt_inicio_contrato_aluguel ) 
    REFERENCES contrato_aluguel ( nm_email_locatario, cd_conteiner, dt_inicio_contrato_aluguel)
) ENGINE=InnoDB;

INSERT INTO tamanho_conteiner (nm_tamanho_conteiner) VALUES 
("10"),
("20"),
("40"),
("45");

INSERT INTO tipo_conteiner (nm_tipo_conteiner) VALUES 
("Dry"),
("High Cube"),
("Reefer"),
("Open Top"),
("Flat Rack");

INSERT INTO modelo_conteiner (qt_peso_modelo_conteiner, qt_volume_modelo_conteiner, cd_tipo_conteiner, cd_tamanho_conteiner) VALUES 
-- Dry
(1.30,15.00,1,1), (2.33,33.00,1,2), (3.80,67.70,1,3),
-- High Cube
(2.45,37.00,2,2), (4.15,76.00,2,3), (4.80,86.00,2,4),
-- Reefer
(3.20,28.10,3,2), (4.80,59.00,3,3),
-- Open Top
(2.30,32.60,4,2), (4.00,66.00,4,3),
-- Flat Rack
(3.00,32.00,5,2), (5.50,67.00,5,3);

INSERT INTO finalidade (nm_finalidade) VALUES
-- areas de vivencia e conformidade
("Módulo Sanitário"),
("Vestiário Modular"),
("Refeitório Móvel"),
("Cozinha Industrial Modular"),
("Alojamento"),
("Lavanderia"),
-- administrativo e comercial
("Escritório Administrativo"),
("Guarita de Segurança"),
("Stand de Vendas"),
("Loja Pop-up"),
("Bilheteria Modular"),
-- logística e armazenamento
("Almoxarifado Seguro"),
("Frigorífico"),
-- saúde
("Ambulatório de Campanha"),
("Clínica temporária"),
-- educação
("Sala de Aula"),
-- industrial e tecnológico
("Laboratório Móvel"),
("Data Center Móvel"),
("Oficina de Manutenção"),
("Módulo para Áreas de Risco");

INSERT INTO status (nm_status) VALUES 
("Disponivel"),
("Indisponivel"),
("Alugado"),
("Inativo"),
("Em tranporte"),
("Em manutencão");

INSERT INTO categoria_componente (nm_categoria_componente) VALUES 
("Estrutura de Base"),
("Reforços Estruturais"),
("Sistemas de Isolamento"),
("Infraestrutura de Instalações Ocultas"),
("Esquadrias, Acessos e Segurança"),
("Componentes de Acoplamento e Fixação"),
("Proteção Contra Intempéries e Drenagem");

INSERT INTO tipo_manutencao (nm_tipo_manutencao) VALUES 
("Manutenção Preditiva"),
("Manutenção Corretiva"),
("Manutenção Preventiva"),
("Descontaminação"),
("Reforma e Recondicionamento"),
("Reparos por Avarias");

INSERT INTO status_manutencao (nm_status_manutencao) VALUES 
("Pendente"),
("Em execução"),
("Finalizado");

INSERT INTO tipo_aluguel (nm_tipo_aluguel) VALUES 
("Diário"),
("Semanal"),
("Mensal"),
("Trimestral"),
("Semestral"),
("Anual");

INSERT INTO tipo_vistoria (nm_tipo_vistoria) VALUES 
("Check-out"),
("Check-in");
