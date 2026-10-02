<?php 
class TipoManutencaoController {
    public static function listarTiposManutencao() {
        $dados = TipoManutencao::listarTiposManutencao();
        $tiposManutencao = [];
        foreach ($dados as $instancia) {
            $tipoManutencao = new TipoManutencao($instancia['cd_tipo_manutencao'], $instancia['nm_tipo_manutencao']);
            array_push($tiposManutencao, $tipoManutencao);
        }
        return $tiposManutencao;
    }
}
?>