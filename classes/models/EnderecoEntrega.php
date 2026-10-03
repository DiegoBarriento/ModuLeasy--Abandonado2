<?php 
class EnderecoEntrega extends Banco {
	public $Codigo;
	public $Nome;
	public $Cep;
	public $Complemento;
	public $Locatario;

	
	public function __construct($codigo = null, $nome = null, $cep = null, $complemento = null, $locatario = null) {
		$this->Codigo = $codigo;
		$this->Nome = $nome;
		$this->Cep = $cep;
		$this->Complemento = $complemento;
		$this->Locatario = $locatario;
	}

	public static function listarEnderecosEntrega($locatario){
		$parametros = [
			'pLocatario' => $locatario
		];
		return self::Consultar('listarEnderecosEntrega', $parametros);
	}
}
?>