<?php 
class CategoriaComponenteController {
    public static function listarCategoriasComponente(){
        $dados = CategoriaComponente::listarCategoriasComponente();
        $categoriasComponentes = [];

        foreach($dados as $instancia){
            $categoriaComponente = new CategoriaComponente($instancia['cd_categoria_componente'], $instancia['nm_categoria_componente']);
            array_push($categoriasComponentes, $categoriaComponente);
        }

        return $categoriasComponentes;
    }
}
?>