<?php 
class Locatario extends Banco {
	public $Email;
	public $Cnpj_Cpf;
	public $Nome;
 	public $TipoUsuario = 'Locatario'; // ve depois

	
	public function __construct($email = null, $cnpj_cpf = null, $nome = null) {
		$this->Email = $email;
		$this->Cnpj_Cpf = $cnpj_cpf;
		$this->Nome = $nome;
		$this->TipoUsuario = 'Locatario';
	}

	public static function obterLocatario($email, $senha){
		$parametros = [
			'pEmail' => $email,
			'pSenha' => $senha
		];
		return self::Consultar('obterLocatario', $parametros);
	}

	public static function criarLocatario($email, $cnpj_cpf, $nome, $senha){
		$parametros = [
			'pEmail' => $email,
			'pNome' => $nome,
			'pSenha' => $senha,
			'pCnpjCpf' => $cnpj_cpf,
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