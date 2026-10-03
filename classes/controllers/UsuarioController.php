<?php 
class UsuarioController {
    public static function acessarConta($email, $senha){
        $dado = Usuario::acessarConta($email, $senha);

        if (array_key_exists('cd_cpf_cnpj_locatario',$dado[0])){
            $usuario = new Locatario($dado[0]['nm_email_locatario'], $dado[0]['cd_cpf_cnpj_locatario'], $dado[0]['nm_locatario']);
        }
        else{
            $usuario = new Locador($dado[0]['nm_email_locador'], $dado[0]['cd_cnpj_locador'], $dado[0]['nm_locador']);
        }

        return $usuario;
    }
}
?>