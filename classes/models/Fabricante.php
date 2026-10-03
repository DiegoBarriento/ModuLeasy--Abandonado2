<?php 
class Fabricante extends Banco {
	public $Cnpj;
	public $Nome;

	
	public function __construct($cnpj = null, $nome = null) {
		$this->Cnpj = $cnpj;
		$this->Nome = $nome;
	}

	public static function listarFabricantes() {
		return self::Consultar('listarFabricantes');
	}

	public static function criarFabricante($cnpj, $nome) {
		$parametros = [
			'pCnpj' => $cnpj,
			'pNome' => $nome
		];
		return self::Executar('criarFabricante', $parametros);
	}
}
?>