<?php 
class TipoStatusController {
    
    public static function listarTiposStatus(){
        $dados = TipoStatus::listarTiposStatus();
        $tiposStatus = [];

        foreach ($dados as $instancia) {
            $tipoStatus = new TipoStatus($instancia['cd_tipo_status'], $instancia['nm_tipo_status']);
            array_push($tiposStatus, $tipoStatus);
        }   

        return $tiposStatus;
    }
}
?>