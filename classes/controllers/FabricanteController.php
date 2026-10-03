<?php 
class FabricanteController {
    public static function listarFabricantes() {
        $fabricantes = Fabricante::listarFabricantes();
        return $fabricantes;
    }

    public static function criarFabricante($cnpj, $nome) {
        Fabricante::criarFabricante($cnpj, $nome);
    }
}
?>