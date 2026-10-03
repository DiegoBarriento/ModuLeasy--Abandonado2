<?php 
class ContratoAluguelController {
    public static function criarContrato($conteiner, $locatario, $enderecoEntrega, $tipoAluguel, $duracao){
        return ContratoAluguel::criarContrato($conteiner, $locatario, $enderecoEntrega, $tipoAluguel, $duracao);
    }

    public static function definirRetornoContrato($conteiner, $locatario, $dtCriacao, $nmEnderecoRetorno, $deposito){
        if ($nmEnderecoRetorno == 0){
            $nmEnderecoRetorno = null;
        }
        if ($deposito == 0){
            $deposito = null;
        }
        return ContratoAluguel::definirRetornoContrato($conteiner, $locatario, $dtCriacao, $nmEnderecoRetorno, $deposito);
    }

    public static function iniciarContrato($conteiner, $locatario, $dtCriacao){
        return ContratoAluguel::iniciarContrato($conteiner, $locatario, $dtCriacao);
    }
}
?>