<?php 
class LocadorController {
    public static function obterLocador($email, $senha){
        $dados = Locador::obterLocador($email, $senha);
        $locador = null;
    
        foreach ($dados as $instancia) {
            $locador = new Locador($instancia['nm_email_locador'], $instancia['cd_cnpj_locador'], $instancia['nm_locador']);
        }
        
        return $locador;
    }

    public static function listarManutencoesLocador($locador){
        $dados = Locador::listarManutencoesLocador($locador);
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

    public static function listarContratosLocador($locador){
        $dados = Locador::listarContratosLocador($locador);
        $contratos = [];

        foreach($dados as $instancia){
            $tipoA = new TipoAluguel($instancia['cd_tipo_aluguel'], $instancia['nm_tipo_aluguel']);
            $deposito = new Deposito($instancia['cd_deposito'], $instancia['nm_deposito'], $instancia['nm_endereco_deposito'], $instancia['cd_cep_deposito'],
            null, null, null, null, null);
            $endereco = new EnderecoEntrega($instancia['cd_endereco_entrega'], $instancia['nm_endereco_entrega'], $instancia['cd_cep_endereco_entrega']);
            $contrato = new ContratoAluguel($endereco, $instancia['nm_email_locatario'], $instancia['cd_conteiner'], $instancia['nm_endereco_retorno'],
            $instancia['dt_entrega'], $instancia['dt_retorno'], $instancia['qt_duracao_contrato_aluguel'], $tipoA, $instancia['dt_criacao_contrato_aluguel'], $deposito);
            array_push($contratos, $contrato);
        }

        return $contratos;
    }

    public static function listarDepositos($locador){
        $dados = Locador::listarDepositos($locador);
        $depositos = [];
    
        foreach ($dados as $instancia) {
            $deposito = new Deposito($instancia['cd_deposito'], $instancia['nm_deposito'], $instancia['cd_cep_deposito'], $instancia['nm_endereco_deposito'],
            $instancia['qt_raio_atuacao_deposito'], $instancia['qt_latitude_deposito'], $instancia['qt_longitude_deposito'], $instancia['qt_maxima_conteineres_deposito'], 
            $instancia['qt_atual_conteineres_deposito']);
            array_push($depositos, $deposito);
        }
        
        return $depositos;
    }

    public static function listarMovimentacoesLocador($locador){
        $dados = Locador::listarMovimentacoesLocador($locador);
        $movimentacoes = [];

        foreach($dados as $instancia){
            $deposito = new Deposito($instancia['cd_deposito'], $instancia['nm_deposito'], $instancia['cd_cep_deposito'], $instancia['nm_endereco_deposito']);
            $tipo = new TipoMovimentacao($instancia['cd_tipo_movimentacao'], $instancia['nm_tipo_movimentacao']);
            $movimentacao = new Movimentacao($deposito, $instancia['nm_email_locatario'], $instancia['cd_conteiner'], $instancia['dt_criacao_contrato_aluguel'], $tipo);
            array_push($movimentacoes, $movimentacao);
        }

        return $movimentacoes;
    }

    public static function criarLocador($email, $cnpj, $nome, $senha){
        Locador::criarLocador($email, $cnpj, $nome, $senha);
    }

    public static function atualizarLocador($locador, $cnpj, $nome){
        Locador::atualizarLocador($locador, $cnpj, $nome);
    }

    public static function deletarContaLocador($locador){
        Locador::deletarContaLocador($locador);
    }
}
?>