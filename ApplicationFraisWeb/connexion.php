<?php
//connexion a la base de données
header('Access-Control-Allow-Origin: *');
$host_name = 'localhost';
$database = 'gsb';
$user_name = 'root';
$password = '';

$bdd = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);

$query = $bdd->prepare('SELECT id, nom, prenom, nom_utilisateur, role_id FROM utilisateur WHERE nom_utilisateur = :nom_utilisateur AND mot_de_passe = :mot_de_passe;');
$query->bindParam(':nom_utilisateur', $_POST['nom_utilisateur']);
$query->bindParam(':mot_de_passe', $_POST['mot_de_passe']);
$query->execute();
$utilisateur = $query->fetch();

$retour = [];
if ($utilisateur['id'] != null && $utilisateur['role_id'] = 1) {
      $retour['succes'] = true;
      $retour['utilisateur_id'] = $utilisateur['id'];
      $retour['nom'] = $utilisateur['nom'];
      $retour['prenom'] = $utilisateur['prenom'];
      $retour['nom_utilisateur'] = $utilisateur['nom_utilisateur'];
	  $retour['role_id'] = $utilisateur['role_id'];
}
if ($utilisateur['id'] != null && $utilisateur['role_id'] = 3){
	  $retour['succesAdmin'] = true;
      $retour['utilisateur_id'] = $utilisateur['id'];
      $retour['nom'] = $utilisateur['nom'];
      $retour['prenom'] = $utilisateur['prenom'];
      $retour['nom_utilisateur'] = $utilisateur['nom_utilisateur'];
	  $retour['role_id'] = $utilisateur['role_id'];
}else {
$retour['succes'] = false;
}


     


echo json_encode($retour);
