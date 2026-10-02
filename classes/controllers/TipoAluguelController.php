<?php 
class TipoAluguelController {
    public static function listarTiposAluguel(){
        $resultado =  TipoAluguel::listarTiposAluguel();
        $tiposAluguel = [];
        foreach($resultado as $linha){
            $tiposAluguel[] = new TipoAluguel($linha['cd_tipo_aluguel'], $linha['nm_tipo_aluguel'] );
        }
        return $tiposAluguel;
    }
}
?>