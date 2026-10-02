<?php 
class Locatario extends Banco {
	public $Email;
	public $Cnpj;
	public $Cpf;
	public $Nome;

	
	public function __construct($email = null, $cnpj = null, $cpf = null, $nome = null) {
		$this->Email = $email;
		$this->Cnpj = $cnpj;
		$this->Cpf = $cpf;
		$this->Nome = $nome;
	}

	public static function obterLocatario($email, $senha){
		$parametros = [
			'pEmail' => $email,
			'pSenha' => $senha
		];
		return self::Consultar('obterLocatario', $parametros);
	}

	public static function criarLocatario($email, $cnpj, $cpf, $nome, $senha){
		$parametros = [
			'pEmail' => $email,
			'pNome' => $nome,
			'pSenha' => $senha,
			'pCpf' => $cpf,
			'pCnpj' => $cnpj
		];
		return self::Executar('criarLocatario', $parametros);
	}

	public static function atualizarLocatario($email, $cnpj, $cpf, $nome){
		$parametros = [
			'pEmail' => $email,
			'pNome' => $nome,
			'pCpf' => $cpf,
			'pCnpj' => $cnpj
		];

		return self::Executar('atualizarLocatario', $parametros);
	}
}
?>