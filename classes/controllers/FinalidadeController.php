<?php 
class FinalidadeController {
    public static function listarFinalidades(){
        $dados = Finalidade::listarFinalidades();
        $finalidades = [];

        foreach ($dados as $instancia) {
            $finalidade = new Finalidade($instancia['cd_finalidade'], $instancia['nm_finalidade']);
            array_push($finalidades, $finalidade);
        }   

        return $finalidades;
    }
}
?>