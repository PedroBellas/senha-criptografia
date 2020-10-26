		function criptografar(){

			if(txtSenha.value > 0){

				txtResultadoCripto.innerHTML = executarCripto(txtSenha.value, 10);

			}

		}

		function executarCripto(senha, luckNumber){
			var valor;
			var senhaCripto = [];

			for (var i = 0; i < senha.length; i++) {

				valor = senha[i].charCodeAt(0);

				valor += luckNumber;

				senhaCripto.push(String.fromCharCode(valor));

			}

			senha = "";

			for (var i = 0; i < senhaCripto.length; i++) {
				senha += senhaCripto[i];
			}

			return senha;

		}

		function descriptografar(){
			
			if(txtSenha.value > 0){

				txtResultadoCripto.innerHTML = executarCripto(txtSenha.value, -10);
				
			}			

		}

		