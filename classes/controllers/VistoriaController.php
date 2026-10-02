<?php 
class VistoriaController {
    public static function listarVistoriasConteiner($conteiner){
        $dados = Vistoria::listarVistoriasConteiner($conteiner);
        $vistorias = [];

        foreach ($dados as $instancia) {
            $deposito = new Deposito($instancia['cd_deposito'], $instancia['nm_deposito'], null, null, null, null, null);
            $vistoria = new Vistoria($instancia['dt_inicio_vistoria'], $instancia['dt_termino_vistoria'], $instancia['nm_tipo_vistoria'], $deposito, $instancia['cd_conteiner']);
            array_push($vistorias, $vistoria);
        }	

        return $vistorias;
    }
}
?>