<?php 
class LocatarioController {
    public static function obterLocatario($email, $senha){
        $dados = Locatario::obterLocatario($email, $senha);
        $locatario = null;
    
        foreach ($dados as $instancia) {
            $locatario = new Locatario($instancia['nm_email_locatario'], $instancia['cd_cnpj_locatario'], $instancia['cd_cpf_locatario'], $instancia['nm_locatario']);
        }
        
        return $locatario;
    }

    public static function criarLocatario($email, $cnpj, $cpf, $nome, $senha){
        Locatario::criarLocatario($email, $cnpj, $cpf, $nome, $senha);
    }

    public static function atualizarLocatario($email, $cnpj, $cpf, $nome){
        if ($cnpj == ""){
            $cnpj = null;
        }

        if ($cpf == ""){
            $cpf = null;
        }
        Locatario::atualizarLocatario($email, $cnpj, $cpf, $nome);
    }
}
?>