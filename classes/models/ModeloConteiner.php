<?php 
class ModeloConteiner extends Banco {
	public $Tipo;
	public $Tamanho;
	public $Tara;
	public $Cargamaxima;

	
	public function __construct($tipo = null, $tamanho = null, $tara = null, $cargamaxima = null) {
		$this->Tipo = $tipo;
		$this->Tamanho = $tamanho;
		$this->Tara = $tara;
		$this->Cargamaxima = $cargamaxima;
	}

	public static function listarModelosConteiner(){
		return self::Consultar('listarModelosConteiner');
	}
}
?>