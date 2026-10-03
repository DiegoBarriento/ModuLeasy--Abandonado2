<?php 
class TipoAluguel extends Banco {
	public $Codigo;
	public $Nome;
	public $Valor;
	public $PcMulta;

	
	public function __construct($codigo = null, $nome = null, $valor = null, $pcMulta = null) {
		$this->Codigo = $codigo;
		$this->Nome = $nome;
		$this->Valor = $valor;
		$this->PcMulta = $pcMulta;
	}

	public static function listarTiposAluguel(){
		return self::Consultar('listarTiposAluguel');
	}
}
?>