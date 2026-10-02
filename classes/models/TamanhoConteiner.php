<?php 
class TamanhoConteiner extends Banco {
	public $Codigo;
	public $Nome;

	
	public function __construct($codigo = null, $nome = null) {
		$this->Codigo = $codigo;
		$this->Nome = $nome;
	}

	public static function listarTamanhosConteiner(){
		return self::Consultar('listarTamanhosConteiner');
	}
}
?>