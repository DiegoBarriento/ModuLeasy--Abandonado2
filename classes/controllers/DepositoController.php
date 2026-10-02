<?php 
class DepositoController {
    public static function criarDeposito($locador, $nome, $cep, $endereco, $raioA, $latitude, $longitude, $qtMaximaCont, $qtAtualCont){
        Deposito::criarDeposito($locador, $nome, $cep, $endereco, $raioA, $latitude, $longitude, $qtMaximaCont, $qtAtualCont);
    }

    public static function atualizarDeposito($deposito, $nome, $cep, $endereco, $raioA, $latitude, $longitude, $qtMaximaCont, $qtAtualCont){
        Deposito::atualizarDeposito($deposito, $nome, $cep, $endereco, $raioA, $latitude, $longitude, $qtMaximaCont, $qtAtualCont);
    }

    public static function deletarDeposito($deposito){
        Deposito::deletarDeposito($deposito);
    }
}
?>