<?php 
class Vistoria extends Banco {
	public $DtInicio;
	public $DtTermino;
	public $Tipo;
	public $Deposito;
	public $Conteiner;

	
	public function __construct($dtInicio = null, $dtTermino = null, $tipo = null, $deposito = null, $conteiner = null) {
		$this->DtInicio = $dtInicio;
		$this->DtTermino = $dtTermino;
		$this->Tipo = $tipo;
		$this->Deposito = $deposito;
		$this->Conteiner = $conteiner;
	}

		public static function listarVistoriasConteiner($conteiner){
			$parametros = [
				'pConteiner' => $conteiner
			];
			return self::Consultar('listarVistoriasConteiner', $parametros);
		}
}
?>