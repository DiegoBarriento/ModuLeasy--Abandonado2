<?php 
class Conteiner extends Banco {
	public $Codigo;
	public $Dtfabricacao;
	public $Bic;
	public $Tara;
	public $Cargamaxima;
	public $Tipo;
	public $Tamanho;
	public $Deposito;
	public $Fabricante;
	public $Locador;
	public $Finalidade;
	public $Status;
	public $TipoAluguel;


	public function __construct($codigo = null, $dtfabricacao = null, $bic = null, $tara = null, $cargamaxima = null, $tipo = null, 
	$tamanho = null, $deposito = null, $fabricante = null, $locador = null, $finalidade = null, $status = null,  $tipoAluguel = null) {
		$this->Codigo = $codigo;
		$this->Dtfabricacao = $dtfabricacao;
		$this->Bic = $bic;
		$this->Tara = $tara;
		$this->Cargamaxima = $cargamaxima;
		$this->Tipo = $tipo;
		$this->Tamanho = $tamanho;
		$this->Deposito = $deposito;
		$this->Fabricante = $fabricante;
		$this->Locador = $locador;
		$this->Finalidade = $finalidade;
		$this->Status = $status;
		$this->TipoAluguel = $tipoAluguel;
	}

	public static function listarConteineres(){
		return self::Consultar('listarConteineres');
	}

	public static function listarCategoriasComponente($conteiner){
		$parametros = [
			'pConteiner' => $conteiner
		];
		return self::Consultar('listarComponentesConteiner', $parametros);
	}

	public static function listarComponentesConteiner($conteiner){
		$parametros = [
			'pConteiner' => $conteiner
		];
		return self::Consultar('listarComponentesConteiner', $parametros);
	}

	public static function listarManutencoesConteiner($conteiner){
		$parametros = [
			'pConteiner' => $conteiner
		];
		return self::Consultar('listarManutencoesConteiner', $parametros);
	}

	public static function listarMovimentacoesConteiner($conteiner){
		$parametros = [
			'pConteiner' => $conteiner
		];
		return self::Consultar('listarMovimentacoesConteiner', $parametros);
	}

	public static function listarFinalidadesConteiner($conteiner){
		$parametros = [
			'pConteiner' => $conteiner
		];
		return self::Consultar('listarFinalidadesConteiner', $parametros);
	}

	public static function criarConteiner($locador, $dtFabricacaoConteiner, $bicConteiner, $taraConteiner, $cargaMaximaConteiner, $tipoConteiner, $tamanhoConteiner, 
	$deposito, $fabricante){
		$parametros = [
			'pLocador' => $locador,
			'pDtFabricacaoConteiner' => $dtFabricacaoConteiner,
			'pBicConteiner' => $bicConteiner,
			'pTaraConteiner' => $taraConteiner,
			'pCargaMaximaConteiner' => $cargaMaximaConteiner,
			'pTipoConteiner' => $tipoConteiner,
			'pTamanhoConteiner' => $tamanhoConteiner,
			'pDeposito' => $deposito,
			'pFabricante' => $fabricante
		];
		self::Executar('criarConteiner', $parametros);
	}

	public static function atualizarConteiner($conteiner, $nvDtFabricacaoConteiner, $nvBicConteiner, $nvTaraConteiner, $nvCargaMaximaConteiner, $nvTipoConteiner, $nvTamanhoConteiner, 
	$nvDeposito, $nvFabricante){
		$parametros = [
			'pConteiner' => $conteiner,
			'pNvDtFabricacaoConteiner' => $nvDtFabricacaoConteiner,
			'pNvBicConteiner' => $nvBicConteiner,
			'pNvTaraConteiner' => $nvTaraConteiner,
			'pNvCargaMaximaConteiner' => $nvCargaMaximaConteiner,
			'pNvTipoConteiner' => $nvTipoConteiner,
			'pNvTamanhoConteiner' => $nvTamanhoConteiner,
			'pNvDeposito' => $nvDeposito,
			'pNvFabricante' => $nvFabricante
		];
		self::Executar('atualizarConteiner', $parametros);
	}

	public static function deletarConteiner($conteiner){
		$parametros = [
			'pConteiner' => $conteiner
		];
		return self::Executar('deletarConteiner', $parametros);
	}

	public static function atualizarStatusConteiner($conteiner, $status){
		$parametros = [
			'pConteiner' => $conteiner,
			'pNvStatus' => $status
		];
		return self::Executar('atualizarStatusConteiner', $parametros);
	}
}
?>