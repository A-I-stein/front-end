<?php
session_start();
?>
<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<title>A.I.stein - Cadastrar</title>		
	</head>
	<body>
		<h1>Cadastrar Usuário</h1>
		<?php
		if(isset($_SESSION['msg'])){
			echo $_SESSION['msg'];
			unset($_SESSION['msg']);
		}
		?>
		<form method="POST" action="processa.php">
			<label>Nome: </label>
			<input type="text" name="nome" placeholder="Digite o nome de usuário"><br><br>
			
			<label>E-mail: </label>
			<input type="email" name="email" placeholder="Digite seu e-mail"><br><br>
			
			<label>Senha:</label>
			<input type="password" name="senha" placeholder="Digite o sua senha"><br>

			<input type="submit" value="Cadastrar">
		</form>
	</body>
</html>