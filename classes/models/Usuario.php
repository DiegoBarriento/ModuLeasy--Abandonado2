<?php 
class Usuario {
	public $Nome;
	public $Cpf;
	public $Cnpj;
	public $Email;

	
	public function __construct($nome = null, $cpf = null, $cnpj = null, $email = null) {
		$this->Nome = $nome;
		$this->Cpf = $cpf;
		$this->Cnpj = $cnpj;
		$this->Email = $email;
	}
}
?>