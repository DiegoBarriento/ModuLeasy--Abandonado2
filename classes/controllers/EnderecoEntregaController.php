<?php 
class EnderecoEntregaController {
    
    public static function listarEnderecosEntrega($locatario){
        $dados = EnderecoEntrega::listarEnderecosEntrega($locatario);
        $enderecosEntrega = [];

        foreach ($dados as $instancia) {
            $enderecoEntrega = new EnderecoEntrega($instancia['cd_endereco_entrega'], $instancia['nm_endereco_entrega'], $instancia['cd_cep_endereco_entrega']);
            array_push($enderecosEntrega, $enderecoEntrega);
        }   

        return $enderecosEntrega;
    }
}
?>