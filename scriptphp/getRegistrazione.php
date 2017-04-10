<?php
    session_start();
    $_SESSION['esiste']=0;
    try{
		$dbh = new PDO('mysql:host='.$host.';dbname='.$dbNome,$username,$password);
		$stm = $dbh->prepare('INSERT INTO quintab_sito.Dati (Username,Password,Nome,Cognome) VALUE(:username,:password,:nome,:cognome)');
		$stm->bindValue(':username',$_POST['username']);
		$stm->bindValue(':password',$_POST['password']);
		$stm->bindValue(':nome',$_POST['nome']);
		$stm->bindValue(':cognome',$_POST['cognome']);
		if($stm->execute() == true){
			$_SESSION['esiste']=1;
			echo json_encode($stm->fetchAll());
		}
		else{
			echo 'Username non valido.';
		}
	}catch(PDOException $e){
		$e->getMessage();
		echo 'Errore!!';
	}
?>