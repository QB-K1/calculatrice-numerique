'use strict';

// popup pour demander premier chiffre (virgule possible) et affecter valeur à variable
var number1 = parseFloat(window.prompt('Entrer premier chiffre'));
// popup pour demander opération souhaitée et affecter valeur à variable
var operation = window.prompt('Entrer opération souhaitée (+ - * / **)');
// popup pour demander deuxième chiffre (virgule possible) et affecter valeur à variable
var number2 = parseFloat(window.prompt('Entrer deuxième chiffre'));
var result;


// pour message d'erreur si rentre autre chose que deux nombres
if ((isNaN(number1)) || (isNaN(number2))) {
	document.write('Vous n\'avez pas entré deux nombres');
}

// pour calculs à effectuer en fonction de l'opérateur rentré
switch (operation) {
	case "/":
	case "division": 
		// pour exception de la division par 0
		if (number2 == 0) {
			document.write('La division par 0 n\'est pas possible');
			break;
		}
		else {
			result = (number1 / number2);
			break;
		}
		break;

	case "*":
	case "multiplication":
	result = number1 * number2;
	break;	

	case "+":
	case "addition":
	result = number1 + number2;
	break;

	case "-":
	case "soustraction":
	result = number1 - number2;
	break;	

	case "^":
	case "puissance":
	result = number1 ** number2;
	break;

	default:
	document.write('Vous avez rentré un mauvais opérateur');
	break;	
}

/* inverse de l'exception de la division par 0 : dans tous les autres cas sort la 
suite. Sinon sort d'abord message d'erreur du case plus haut suivi de la suite ici*/
if ((operation != '/') || (operation != 'division') && (number2 != 0)) {
	document.write('Votre opération : ' + number1 + operation + number2 + '=' + result);
}