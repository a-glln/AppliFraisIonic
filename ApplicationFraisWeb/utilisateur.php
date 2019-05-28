<?php
header('Access-Control-Allow-Origin: *');
$host_name = 'localhost';
$database = 'gsb_frais';
$user_name = 'root';
$password = '';

$bdd = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);
$query = 'SELECT * FROM visiteur';
$v = $bdd -> query($query);
$fiches = $v -> fetchAll();

$retour = [];
for ($i = 0; $i < count($fiches); $i++){
    $retour[$i]['id'] = $fiches[$i]['id'];
    $retour[$i]['nom'] = $fiches[$i]['nom'];
    $retour[$i]['prenom'] = $fiches[$i]['prenom'];
    $retour[$i]['login'] = $fiches[$i]['login'];
    $retour[$i]['mdp'] = $fiches[$i]['mdp'];
    $retour[$i]['groupe'] = $fiches[$i]['groupe'];
	$retour[$i]['adresse'] = $fiches[$i]['adresse'];
    $retour[$i]['cp'] = $fiches[$i]['cp'];
    $retour[$i]['ville'] = $fiches[$i]['ville'];
    $retour[$i]['dateEmbauche'] = $fiches[$i]['dateEmbauche'];

    

}

echo json_encode($retour);