<?php 
class TipoConteinerController {
    public static function listarTiposConteiner(){
        $dados = TipoConteiner::listarTiposConteiner();
        $tipos = [];

        foreach($dados as $instancia){
            $tipo = new TipoConteiner($instancia['cd_tipo_conteiner'], $instancia['nm_tipo_conteiner']);
            array_push($tipos, $tipo);
        }

        return $tipos;
    }
}
?>