<?php 
class StatusManutencaoController {
    public static function listarStatusManutencao() {
        $dados = StatusManutencao::listarStatusManutencao();
        $statusManutencao = [];
        
        foreach ($dados as $instancia) {
            $statusManutencaoS = new StatusManutencao($instancia['cd_status_manutencao'], $instancia['nm_status_manutencao']);
            array_push($statusManutencao, $statusManutencaoS);
        }
        return $statusManutencao;
    }
}
?>