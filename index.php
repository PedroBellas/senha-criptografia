<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>SenhaS</title>
	<link rel="stylesheet" type="text/css" href="CSS/style.css" />
</head>
<body>

	<div class="form-area">

		<span>Insira sua senha:</span>
		<div class="password-form-area">

			<input type="password" name="senha" id="senha" />
			<div class="icon show" id="icon">

				<svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-eye-fill" fill="#fff">
					<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
					<path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
				</svg>

			</div>

		</div>

		<div class="group-area">
			
			<div class="password-power-area">

				<span class="password-power null" id="txtPower">Vazia</span>
				<div class="password-power-bar">

					<div class="bar null-bar" id="powerBar"></div>

				</div>

			</div>

			<div class="button-area">

				<button id="descriptografar">Descriptografar</button>
				<button id="criptografar">Criptografar</button>

			</div>

		</div>

	</div>

	<div class="cripto-area">

		<span>
			Resultado:
			<span class="password-text" id="passwordText"></span>
		</span>

	</div>

	<script type="text/javascript" src="JS/script.js"></script>
	<script type="text/javascript" src="JS/criptografia.js"></script>
</body>
</html>