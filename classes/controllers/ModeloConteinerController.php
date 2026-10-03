<?php 
class ModeloConteinerController {
    public static function listarModelosConteiner(){
        $dados = ModeloConteiner::listarModelosConteiner();
        $modelos = [];

        foreach($dados as $instancia){
            $tamanho = new TamanhoConteiner($instancia['cd_tamanho_conteiner'],$instancia['nm_tamanho_conteiner']);
            $tipo = new TipoConteiner($instancia['cd_tipo_conteiner'],$instancia['nm_tipo_conteiner']);
            $modelo = new ModeloConteiner($tipo, $tamanho, $instancia['qt_tara_modelo_conteiner'], 
            $instancia['qt_carga_maxima_modelo_conteiner']);
            array_push($modelos, $modelo);
        }

        return $modelos;
    }
}
?>