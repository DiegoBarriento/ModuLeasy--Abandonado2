<?php 
class StatusController {
    public static function listarStatus(){
        $dados = Status::listarStatus();
        $statusA = [];

        foreach ($dados as $instancia) {
            $tipoStatus = new TipoStatus($instancia['cd_tipo_status'], $instancia['nm_tipo_status']);
            $status = new Status($instancia['cd_status'], $instancia['nm_status'], $tipoStatus);
            array_push($status, $status);
        }   

        return $statusA;
    }
}
?>