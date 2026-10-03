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
        $dadosC = Conteiner::listarConteineres();
        $conteineres = [];

        foreach ($dadosC as $instancia) {
            $tipo = new TipoConteiner($instancia['cd_tipo_conteiner'], $instancia['nm_tipo_conteiner']);
            $tamanho = new TamanhoConteiner($instancia['cd_tamanho_conteiner'], $instancia['nm_tamanho_conteiner']);
            $locadorObj = new Locador($instancia['nm_email_locador'], $instancia['cd_cnpj_locador'], $instancia['nm_locador']);
            $tamanho = new TamanhoConteiner($instancia['cd_tamanho_conteiner'], $instancia['nm_tamanho_conteiner']);
            $tipo = new TipoConteiner($instancia['cd_tipo_conteiner'], $instancia['nm_tipo_conteiner']);
            $fabricante = new Fabricante($instancia['cd_cnpj_fabricante'], $instancia['nm_fabricante']);
            $deposito = new Deposito($instancia['cd_deposito'], $instancia['nm_deposito'], $instancia['cd_cep_deposito'], $instancia['nm_endereco_deposito'],
            $instancia['qt_raio_atuacao_deposito']);

            $conteiner = new Conteiner($instancia['cd_conteiner'], $instancia['dt_fabricacao_conteiner'], $instancia['cd_bic_conteiner'], $instancia['qt_tara_conteiner'],
            $instancia['qt_carga_maxima_conteiner'], $tipo, $tamanho, $deposito, $fabricante, $locadorObj, null, null, null);

            array_push($conteineres, $conteiner);
            }
            return $conteineres;
    }
    public static function pegarDadosConteiner($conteiner){
        $dadosF = Conteiner::listarFinalidadesConteiner($conteiner);
        $dadosS = Conteiner::listarStatusConteiner($conteiner);
        $dadosTA = Conteiner::listarTiposAluguelConteiner($conteiner);
        $dadosC = Conteiner::listarComponentesConteiner($conteiner);

        $finalidades = []; 
        $statuss = [];
        $tipos = [];
        $componentes = [];

        foreach($dadosC as $instanciac){
            $categoria = new CategoriaComponente($instanciac['cd_categoria_componente'], $instanciac['nm_categoria_componente']);
            $componente = new Componente($instanciac['cd_componente'], $instanciac['nm_componente'], $instanciac['vl_componente'], $instanciac['qt_vida_util_componente'], $instanciac['dt_instalacao_componente']
            ,$conteiner, $categoria);
            array_push($componentes, $componente);        
        }

        foreach($dadosF as $instanciaf){
            $finalidade = new Finalidade($instanciaf['cd_finalidade'], $instanciaf['nm_finalidade']);
            array_push($finalidades, $finalidade);
        }

        foreach($dadosS as $instanciaf){
            $tipoStatus = new TipoStatus($instanciaf['cd_tipo_status'], $instanciaf['nm_tipo_status']);
            $status = new Status($instanciaf['cd_status'], $instanciaf['nm_status'], $tipoStatus);
            array_push($statuss, $status);
        }

        foreach($dadosTA as $instanciaf){
            $tipoAluguel = new TipoAluguel($instanciaf['cd_tipo_aluguel'], $instanciaf['nm_tipo_aluguel'], $instanciaf['vl_tipo_aluguel_conteiner'],
            $instanciaf['pc_multa_tipo_aluguel_conteiner']);
            array_push($tipos, $tipoAluguel);
        }

        return array($finalidades, $statuss, $tipos, $componentes);
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
        return Conteiner::criarConteiner($locador, $dtFabricacaoConteiner, $bicConteiner, $taraConteiner, $cargaMaximaConteiner, $tipoConteiner, $tamanhoConteiner, 
	    $deposito, $fabricante);
    }

    public static function atualizarConteiner($conteiner, $nvDtFabricacaoConteiner, $nvBicConteiner, $nvTaraConteiner, $nvCargaMaximaConteiner, $nvTipoConteiner, $nvTamanhoConteiner, 
	$nvDeposito, $nvFabricante){
        return Conteiner::atualizarConteiner($conteiner, $nvDtFabricacaoConteiner, $nvBicConteiner, $nvTaraConteiner, $nvCargaMaximaConteiner, $nvTipoConteiner, $nvTamanhoConteiner, 
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