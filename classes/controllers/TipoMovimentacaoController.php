<?php 
class TipoMovimentacaoController {
    
    public static function listarTiposMovimentacao(){
        $dados = TipoMovimentacao::listarTiposMovimentacao();
        $tiposMovimentacao = [];

        foreach ($dados as $instancia) {
            $tipoMovimentacao = new TipoMovimentacao($instancia['cd_tipo_movimentacao'], $instancia['nm_tipo_movimentacao']);
            array_push($tiposMovimentacao, $tipoMovimentacao);
        }   

        return $tiposMovimentacao;
    }
}
?>