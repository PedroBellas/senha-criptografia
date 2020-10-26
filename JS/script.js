		const btnIcon = document.getElementById("icon")
		const txtSenha = document.getElementById("senha");
		const txtPower = document.getElementById("txtPower");
		const bar = document.getElementById("powerBar");
		const btnCripto = document.getElementById("criptografar");
		const btnDescripto = document.getElementById("descriptografar");
		const txtResultadoCripto = document.getElementById("passwordText");

		const arrayNumeros = ['1','2','3','4','5','6','7','8','9','0'];
		const arrayLetras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z'];

		function verificaForca(){
			var power = 0;
			var senha = txtSenha.value;

			power += verificaTamanho(senha);
			power += verificaNumero(senha);
			power += verificaLetras(senha);
			power += verificaEspeciais(senha);

			console.log(power);

			if(power == 0){
				alterarPower("Vazia", "null", "weak", "mid", "strong");
			}
			else if (power <= 3) {
				alterarPower("Fraca", "weak", "null", "mid", "strong");	
			}
			else if(power <= 6){
				alterarPower("Aceitavel", "mid", "null", "weak", "strong");		
			}
			else{
				alterarPower("Forte", "strong", "null", "mid", "weak");	
			}

			power = 0;

		}

		function verificaNumero(senha) {
 			
			for (var i = 0; i < senha.length; i++) {
				
				for (var j = 0; j < arrayNumeros.length; j++) {
					
					if(senha[i] == arrayNumeros[j]){
						return 1;
					}

				}

			}

			return 0;

		}

		function verificaLetras(senha) {
 			
			var retorno;
			var mini = false;
			var grand = false;
			var aux;

			retorno = 0;

			for (var i = 0; i < senha.length; i++) {
				
				for (var j = 0; j < arrayLetras.length; j++) {
					
					aux = arrayLetras[j];

					if(senha[i] == aux.toUpperCase()){
						grand = true;
					}

				}

			}

			for (var i = 0; i < senha.length; i++) {
				
				for (var j = 0; j < arrayLetras.length; j++) {

					if(senha[i] == arrayLetras[j]){
						mini = true;
					}

				}

			}

			if (grand) {

				retorno += 1;

			}
			if (mini) {

				retorno +=1;

			}

			return retorno;

		}

		function verificaEspeciais(senha){

			var aux;

			for (var i = 0; i < senha.length; i++) {
				
				aux = 0;

				aux += verificaNumero(senha[i]);
				aux += verificaLetras(senha[i]);

				if(aux == 0){
					console.log('AUTISMO');
					return 1;

				}
				
			}

			return 0;

		}

		function verificaTamanho(senha){

			if (senha.length == 0) {

				return 0;

			}
			else if(senha.length <= 4){

				return 1;				

			}
			else if(senha.length <= 8){

				return 2;

			}
			else{

				return 3;

			}

		}

		function alterarPower(text, add, rmv1, rmv2, rmv3){

				txtPower.innerHTML = text;
				txtPower.classList.add(add);
				txtPower.classList.remove(rmv1);
				txtPower.classList.remove(rmv2);
				txtPower.classList.remove(rmv3);

				bar.classList.add(add + '-bar');
				bar.classList.remove(rmv1 + '-bar');
				bar.classList.remove(rmv2 + '-bar');
				bar.classList.remove(rmv3 + '-bar');

		}

		/*Mudando tipo do campo senha*/
		function alteraCampo() {
        	

        	if(txtSenha.getAttribute('type') == "password"){

        		txtSenha.removeAttribute('type');  
        		txtSenha.setAttribute('type', 'text');
        	}
        	else{
				
        		txtSenha.removeAttribute('type');  
        		txtSenha.setAttribute('type', 'password');

        	}

    	}

    	btnIcon.addEventListener("click", alteraCampo);
		txtSenha.addEventListener("keyup", verificaForca);
		btnCripto.addEventListener("click", criptografar);
		btnDescripto.addEventListener("click", descriptografar);