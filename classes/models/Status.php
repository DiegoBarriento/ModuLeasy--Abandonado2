<?php 
class Status extends Banco {
	public $Codigo;
	public $Nome;
	public $Tipo;

	
	public function __construct($codigo = null, $nome = null, $tipo = null) {
		$this->Codigo = $codigo;
		$this->Nome = $nome;
		$this->Tipo = $tipo;
	}

	public static function listarStatus(){
		return self::Consultar('listarStatus');
	}
}
?>