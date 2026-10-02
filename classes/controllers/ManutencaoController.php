<?php 
class ManutencaoController {
    public static function criarManutencaoAplicada($conteiner, $valor, $tipo){
        return Manutencao::criarManutencaosAplicada($conteiner, $valor, $tipo);
    }

    public static function criarManutencaoAntiga($conteiner, $valor, $tipo, $status, $dtTermino = null, $dtInicio = null){
        return Manutencao::criarManutencaosAntiga($conteiner, $valor, $tipo, $status, $dtTermino, $dtInicio);
    }

    public static function atualizarManutencao($conteiner, $dtInicio, $valor, $tipo, $status, $dtTermino){
        return Manutencao::atualizarManutencao($conteiner, $dtInicio, $valor, $tipo, $status, $dtTermino);
    }

    public static function deletarManutencao($conteiner, $dtInicio){
        return Manutencao::deletar($conteiner, $dtInicio);
    }
}
?>