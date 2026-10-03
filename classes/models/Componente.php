<?php 
class Componente extends Banco {
	public $Codigo;
	public $Nome;
	public $Valor;
	public $Qtvidautil;
	public $Dtinstalacao;
	public $Conteiner;
	public $Categoria;

	
	public function __construct($codigo = null, $nome = null, $valor = null, $qtvidautil = null, $dtinstalacao = null, $conteiner = null, $categoria = null) {
		$this->Codigo = $codigo;
		$this->Nome = $nome;
		$this->Valor = $valor;
		$this->Qtvidautil = $qtvidautil;
		$this->Dtinstalacao = $dtinstalacao;
		$this->Conteiner = $conteiner;
		$this->Categoria = $categoria;
	}
}
?>