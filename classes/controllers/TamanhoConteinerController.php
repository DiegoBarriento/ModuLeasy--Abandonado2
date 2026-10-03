<?php 
class TamanhoConteinerController {
    
    public static function listarTamanhosConteiner(){
        $dados = TamanhoConteiner::listarTamanhosConteiner();
        $tamanhosConteiner = [];

        foreach ($dados as $instancia) {
            $tamanhoConteiner = new TamanhoConteiner($instancia['cd_tamanho_conteiner'], $instancia['nm_tamanho_conteiner']);
            array_push($tamanhosConteiner, $tamanhoConteiner);
        }   

        return $tamanhosConteiner;
    }
}
?>