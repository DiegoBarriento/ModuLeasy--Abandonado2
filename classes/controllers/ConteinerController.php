<?php 
class ConteinerController {
    public static function listarFinalidadesConteiner($conteiner){
        $dados = Conteiner::listarFinalidadesConteiner($conteiner);
        $finalidades = [];

        foreach ($dados as $instancia) {
            $finalidade = new Finalidade($instancia['cd_finalidade'], $instancia['nm_finalidade']);
            array_push($finalidades, $finalidade);
        }   

        return $finalidades;
    }

    public static function listarConteineres(){
        $dados = Conteiner::listarConteineres();
        $conteineres = [];
        
        foreach ($dados as $instancia) {
            $tipoAluguel = new TipoAluguel($instancia['cd_tipo_aluguel'], $instancia['nm_tipo_aluguel'], $instancia['vl_tipo_aluguel_conteiner'],
            $instancia['pc_multa_tipo_aluguel_conteiner']);

            $tipoStatus = new TipoStatus($instancia['cd_tipo_status'], $instancia['nm_tipo_status']);

            $status = new Status($instancia['cd_status'], $instancia['nm_status'], $tipoStatus);

            $finalidades = self::listarFinalidadesConteiner($instancia['cd_conteiner']);

            $locador = new Locador($instancia['nm_email_locador'], $instancia['cd_cnpj_locador'], $instancia['nm_locador']);

            $fabricante = new Fabricante($instancia['cd_cnpj_fabricante'], $instancia['nm_fabricante']);

            $deposito = new Deposito($instancia['cd_deposito'], $instancia['nm_deposito'], $instancia['cd_cep_deposito'], $instancia['nm_endereco_deposito'],
            $instancia['qt_raio_atuacao_deposito'], $instancia['qt_latitude_deposito'], $instancia['qt_longitude_deposito'], $instancia['qt_maxima_conteineres_deposito']
            , $instancia['qt_atual_conteineres_deposito']);

            $tamanhoConteiner = new TamanhoConteiner($instancia['cd_tamanho_conteiner'], $instancia['nm_tamanho_conteiner']);

            $tipoConteiner = new TipoConteiner($instancia['cd_tipo_conteiner'], $instancia['nm_tipo_conteiner']);

            $conteiner = new Conteiner($instancia['cd_conteiner'], $instancia['dt_fabricacao_conteiner'], $instancia['cd_bic_conteiner'], $instancia['qt_tara_conteiner'],
            $instancia['qt_carga_maxima_conteiner'], $tipoConteiner, $tamanhoConteiner, $deposito, $fabricante, $locador, $finalidades, $status, $tipoAluguel);

            array_push($conteineres, $conteiner);
        }   

        return $conteineres;
    }

    public static function listarComponentesConteiner($conteiner){
        $dados = Conteiner::listarComponentesConteiner($conteiner);
        $componentes = [];

        foreach ($dados as $instancia) {    
            $categoria = new CategoriaComponente($instancia['cd_categoria_componente'], $instancia['nm_categoria_componente']);
            $componente = new Componente($instancia['cd_componente'], $instancia['nm_componente'], $instancia['vl_componente'], $instancia['qt_vida_util_componente'], $instancia['dt_instalacao_componente']
            ,$conteiner, $categoria);
            array_push($componentes, $componente);        
        }

        return $componentes;
    }

    public static function listarManutencoesConteiner($conteiner){
        $dados = Conteiner::listarManutencoesConteiner($conteiner);
        $manutencoes = [];

        foreach ($dados as $instancia) {    
            $tipoManutencao = new TipoManutencao($instancia['cd_tipo_manutencao'], $instancia['nm_tipo_manutencao']);
            $statusManutencao = new StatusManutencao($instancia['cd_status_manutencao'], $instancia['nm_status_manutencao']);
            $manutencao = new Manutencao($instancia['cd_conteiner'], $instancia['vl_manutencao'], $tipoManutencao, $statusManutencao, 
            $instancia['dt_termino_manutencao'], $instancia['dt_inicio_manutencao']);
            array_push($manutencoes, $manutencao);        
        }

        return $manutencoes;
    }

    public static function listarMovimentacoesConteiner($conteiner){
        $dados = Conteiner::listarMovimentacoesConteiner($conteiner);
        $movimentacoes = [];

        foreach ($dados as $instancia){
            $deposito = new Deposito($instancia['cd_deposito'], $instancia['nm_deposito'], $instancia['cd_cep_deposito'], $instancia['nm_endereco_deposito']);
            $tipo = new TipoMovimentacao($instancia['cd_tipo_movimentacao'], $instancia['nm_tipo_movimentacao']);
            $movimentacao = new Movimentacao($deposito, $instancia['nm_email_locatario'], $instancia['cd_conteiner'], $instancia['dt_criacao_contrato_aluguel'], $tipo);
            array_push($movimentacoes, $movimentacao);
        }

        return $movimentacoes;
    }

    public static function criarConteiner($locador, $dtFabricacaoConteiner, $bicConteiner, $taraConteiner, $cargaMaximaConteiner, $tipoConteiner, $tamanhoConteiner, 
	$deposito, $fabricante){
        Conteiner::criarConteiner($locador, $dtFabricacaoConteiner, $bicConteiner, $taraConteiner, $cargaMaximaConteiner, $tipoConteiner, $tamanhoConteiner, 
	    $deposito, $fabricante);
    }

    public static function atualizarConteiner($conteiner, $nvDtFabricacaoConteiner, $nvBicConteiner, $nvTaraConteiner, $nvCargaMaximaConteiner, $nvTipoConteiner, $nvTamanhoConteiner, 
	$nvDeposito, $nvFabricante){
        Conteiner::atualizarConteiner($conteiner, $nvDtFabricacaoConteiner, $nvBicConteiner, $nvTaraConteiner, $nvCargaMaximaConteiner, $nvTipoConteiner, $nvTamanhoConteiner, 
	    $nvDeposito, $nvFabricante);
    }

    public static function deletarConteiner($conteiner){
        Conteiner::deletarConteiner($conteiner);
    }

    public static function atualizarStatusConteiner($conteiner, $status){
        Conteiner::atualizarStatusConteiner($conteiner, $status);
    }
}
?>