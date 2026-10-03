<?php 
class Movimentacao extends Banco {
	public $Deposito;
	public $Locatario;
	public $Conteiner;
	public $DtCriacaoContrato;
	public $Tipo;

	
	public function __construct($deposito = null, $locatario = null, $conteiner = null, $dtCriacaoContrato = null, $tipo = null) {
		$this->Deposito = $deposito;
		$this->Locatario = $locatario;
		$this->Conteiner = $conteiner;
		$this->DtCriacaoContrato = $dtCriacaoContrato;
		$this->Tipo = $tipo;
	}
}
?>