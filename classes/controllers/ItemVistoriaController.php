<?php 
class ItemVistoriaController {
    
    public static function listarItensVistoria(){
        $dados = ItemVistoria::listarItensVistoria();
        $itensVistoria = [];

        foreach ($dados as $instancia) {
            $itemVistoria = new ItemVistoria($instancia['cd_item_vistoria'], $instancia['nm_item_vistoria'], null, null);
            array_push($itensVistoria, $itemVistoria);
        }   

        return $itensVistoria;
    }

    public static function listarRespostasItensVistoriaConteiner($conteiner, $dtVistoria){
        $dados = ItemVistoria::listarRespostasItensVistoriaConteiner($conteiner, $dtVistoria);
        $itensVistoria = [];
        $conteiner = new Conteiner($conteiner);

        foreach ($dados as $instancia) {
            $itemVistoria = new ItemVistoria($instancia['cd_item_vistoria'], $instancia['nm_item_vistoria'], $instancia['ic_resposta'], $conteiner);
            array_push($itensVistoria, $itemVistoria);
        }   

        return $itensVistoria;
    }
}
?>