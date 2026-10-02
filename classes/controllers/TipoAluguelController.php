<?php 
class TipoAluguelController {
    
    public static function listarTiposAluguel(){
        $dados = TipoAluguel::listarTiposAluguel();
        $tipos = [];

        foreach($dados as $instancia){
            $tipo = new TipoAluguel($instancia['cd_tipo_aluguel'], $instancia['nm_tipo_aluguel']);
            array_push($tipos, $tipo);
        }
        return $tipos;
    }
}
?>