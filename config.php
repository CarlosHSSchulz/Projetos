<?php

    $dbhost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'gtc_banco';

    $conexao = new mysqli($dbhost,$dbUsername,$dbPassword,$dbName);

   /* if($conexao->connect_errno)
    {
        echo "Erro";
    } 
    else 
    {
        echo "Conexão efetuada com sucesso";
    }
    */

?>