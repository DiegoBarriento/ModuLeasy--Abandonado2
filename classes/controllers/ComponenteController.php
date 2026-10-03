<?php 
class ComponenteController {
    
    public static function listarComponentesConteiner($conteiner){
        $dados = Componente::listarComponentesConteiner($conteiner);
        $componentes = [];

        foreach ($dados as $instancia) {
            $conteiner = new Conteiner($instancia['cd_conteiner'], null, null, null, null, null, null, null, null, null);
            $categoria = new CategoriaComponente($instancia['cd_categoria_componente'], $instancia['nm_categoria_componente']);
            $componente = new Componente($instancia['cd_componente'], $instancia['nm_componente'], $instancia['vl_componente'], $instancia['qt_vida_util_componente'], 
            $instancia['dt_instalacao_componente'], $conteiner, $categoria);
            array_push($componentes, $componente);
        }	

        return $componentes;
    }
}
?>