<?php 
class Deposito extends Banco {
	public $Codigo;
	public $Nome;
	public $Cep;
	public $Endereco;
	public $Raioatuacao;
	public $Latitude;
	public $Longitude;
	public $Qtmaximaconteineres;
	public $Qtatualconteineres;

	
	public function __construct($codigo = null, $nome = null, $cep = null, $endereco = null, $raioatuacao = null, $latitude = null, $longitude = null, $qtmaximaconteineres = null, $qtatualconteineres = null) {
		$this->Codigo = $codigo;
		$this->Nome = $nome;
		$this->Cep = $cep;
		$this->Endereco = $endereco;
		$this->Raioatuacao = $raioatuacao;
		$this->Latitude = $latitude;
		$this->Longitude = $longitude;
		$this->Qtmaximaconteineres = $qtmaximaconteineres;
		$this->Qtatualconteineres = $qtatualconteineres;
	}

	public static function criarDeposito($locador, $nome, $cep, $endereco, $raioA, $latitude, $longitude, $qtMaximaCont,
	$qtAtualCont){
		$parametros = [
			'pLocador' => $locador,
			'pNmDeposito' => $nome,
			'pCepDeposito' => $cep,
			'pEnderecoDeposito' => $endereco,
			'pRaioAtuacaoDeposito' => $raioA,
			'pLatitudeDeposito' => $latitude,
			'pLongitudeDeposito' => $longitude,
			'pMaximaConteineresDeposito' => $qtMaximaCont,
			'pQtAtualDeposito' => $qtAtualCont
		];

		return self::Executar('criarDeposito', $parametros);
	}

	public static function atualizarDeposito($deposito, $nome, $cep, $endereco, $raioA, $latitude, $longitude, $qtMaximaCont,
	$qtAtualCont){
		$parametros = [
			'pDeposito' => $deposito,
			'pNvNmDeposito' => $nome,
			'pNvCepDeposito' => $cep,
			'pNvEnderecoDeposito' => $endereco,
			'pNvRaioAtuacaoDeposito' => $raioA,
			'pNvLatitudeDeposito' => $latitude,
			'pNvLongitudeDeposito' => $longitude,
			'pNvMaximaConteineresDeposito' => $qtMaximaCont,
			'pNvQtAtualDeposito' => $qtAtualCont
		];

		return self::Executar('atualizarDeposito', $parametros);
	}

	public static function deletarDeposito($deposito){
		$parametros = [
			'pDeposito' => $deposito
		];
		return self::Executar('deletarDeposito', $parametros);
	}
}
?>