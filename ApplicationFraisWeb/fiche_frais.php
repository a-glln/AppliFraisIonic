<?php
header('Access-Control-Allow-Origin: *');
$host_name = 'localhost';
$database = 'gsb';
$user_name = 'root';
$password = '';

$bdd = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);

//requete pour recuperer toute les fiches frais pour un user donné
$query = $bdd->prepare('SELECT `id`, `mois`, `annee` FROM fiche_frais WHERE utilisateur_id = :utilisateur ORDER BY annee DESC, mois DESC');
$query->bindParam(':utilisateur', $_GET['utilisateur']);
$query->execute();
$fiches = $query->fetchAll();

$retour = [];
for ($i=0; $i < count($fiches); $i++) {
      $retour['fiches_frais'][$i]['id'] = $fiches[$i]['id'];
      $retour['fiches_frais'][$i]['mois'] = $fiches[$i]['mois'];
      $retour['fiches_frais'][$i]['annee'] = $fiches[$i]['annee'];
}


echo json_encode($retour);
