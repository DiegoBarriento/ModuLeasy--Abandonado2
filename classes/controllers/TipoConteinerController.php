<?php 
class TipoConteinerController {
    public static function listarTiposConteiner(){
        $dados = TipoConteiner::listarTiposConteiner();
        $tipos = [];

        foreach($dados as $instancia){
            $tipos[] = new TipoConteiner($instancia['cd_tipo_conteiner'], $instancia['nm_tipo_conteiner']);
        }

        return $tipos;
    }
}
?>