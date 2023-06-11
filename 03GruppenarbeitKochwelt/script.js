async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

function calculate_1() {
    let mengeAnzahl = +document.getElementById('mengeAnzahl').value;
    let ingredientsQuantity = ['1', '25', '25', '0.25', '0.25', '10', '20', '0.25',];

        for (i = 0; i < ingredientsQuantity.length; i++) {

        if (mengeAnzahl < 1) {
            alert('Bitte mindestens 1 Portion eingeben!');
            return;
        } else if (mengeAnzahl > 10) {
            alert('Bitte höchstens 10 Portionen eingeben!');
            return;
        } else { 
            
        ingredientsQuantity[i] *= mengeAnzahl;

        document.getElementById('tdZutat-1').innerHTML = `${ingredientsQuantity[0]}`;
        document.getElementById('tdZutat-2').innerHTML = `${ingredientsQuantity[1]}`;
        document.getElementById('tdZutat-3').innerHTML = `${ingredientsQuantity[2]}`;
        document.getElementById('tdZutat-4').innerHTML = `${ingredientsQuantity[3]}`;
        document.getElementById('tdZutat-5').innerHTML = `${ingredientsQuantity[4]}`;
        document.getElementById('tdZutat-6').innerHTML = `${ingredientsQuantity[5]}`;
        document.getElementById('tdZutat-7').innerHTML = `${ingredientsQuantity[6]}`;
        document.getElementById('tdZutat-8').innerHTML = `${ingredientsQuantity[7]}`;
    }
 }
}

function calculate_2() {
    let mengeAnzahl = +document.getElementById('mengeAnzahl').value;
    let ingredientsQuantity = ['100', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.25', '150', '0.25', '15', '4',];

        for (i = 0; i < ingredientsQuantity.length; i++) {

        if (mengeAnzahl < 1) {
            alert('Bitte mindestens 1 Portion eingeben!');
            return;
        } else if (mengeAnzahl > 10) {
            alert('Bitte höchstens 10 Portionen eingeben!');
            return;
        } else { 
            
        ingredientsQuantity[i] *= mengeAnzahl;

        document.getElementById('tdZutat-1').innerHTML = `${ingredientsQuantity[0]}`;
        document.getElementById('tdZutat-2').innerHTML = `${ingredientsQuantity[1]}`;
        document.getElementById('tdZutat-3').innerHTML = `${ingredientsQuantity[2]}`;
        document.getElementById('tdZutat-4').innerHTML = `${ingredientsQuantity[3]}`;
        document.getElementById('tdZutat-5').innerHTML = `${ingredientsQuantity[4]}`;
        document.getElementById('tdZutat-6').innerHTML = `${ingredientsQuantity[5]}`;
        document.getElementById('tdZutat-7').innerHTML = `${ingredientsQuantity[6]}`;
        document.getElementById('tdZutat-8').innerHTML = `${ingredientsQuantity[7]}`;
        document.getElementById('tdZutat-9').innerHTML = `${ingredientsQuantity[8]}`;
        document.getElementById('tdZutat-10').innerHTML = `${ingredientsQuantity[9]}`;
        document.getElementById('tdZutat-11').innerHTML = `${ingredientsQuantity[10]}`;
        document.getElementById('tdZutat-12').innerHTML = `${ingredientsQuantity[11]}`;
        document.getElementById('tdZutat-13').innerHTML = `${ingredientsQuantity[12]}`;
    }
 }
}

function calculate_3() {
    let mengeAnzahl = +document.getElementById('mengeAnzahl').value;
    let ingredientsQuantity = ['120', '62.5', '62.5', '50', '0.5', '0.5', '0.25', '10', '1'];

        for (i = 0; i < ingredientsQuantity.length; i++) {

        if (mengeAnzahl < 1) {
            alert('Bitte mindestens 1 Portion eingeben!');
            return;
        } else if (mengeAnzahl > 10) {
            alert('Bitte höchstens 10 Portionen eingeben!');
            return;
        } else { 
            
        ingredientsQuantity[i] *= mengeAnzahl;

        document.getElementById('tdZutat-1').innerHTML = `${ingredientsQuantity[0]}`;
        document.getElementById('tdZutat-2').innerHTML = `${ingredientsQuantity[1]}`;
        document.getElementById('tdZutat-3').innerHTML = `${ingredientsQuantity[2]}`;
        document.getElementById('tdZutat-4').innerHTML = `${ingredientsQuantity[3]}`;
        document.getElementById('tdZutat-5').innerHTML = `${ingredientsQuantity[4]}`;
        document.getElementById('tdZutat-6').innerHTML = `${ingredientsQuantity[5]}`;
        document.getElementById('tdZutat-7').innerHTML = `${ingredientsQuantity[6]}`;
        document.getElementById('tdZutat-8').innerHTML = `${ingredientsQuantity[7]}`;
        document.getElementById('tdZutat-9').innerHTML = `${ingredientsQuantity[8]}`;
    }
 }
}

function calculate_4() {
    let mengeAnzahl = +document.getElementById('mengeAnzahl').value;
    let ingredientsQuantity = ['150', '125', '62.5', '10', '0.5', '0.5', '0.5', '0.25', '0.25', '0.25', '0.5', '0.25', '0.5'];

        for (i = 0; i < ingredientsQuantity.length; i++) {

        if (mengeAnzahl < 1) {
            alert('Bitte mindestens 1 Portion eingeben!');
            return;
        } else if (mengeAnzahl > 10) {
            alert('Bitte höchstens 10 Portionen eingeben!');
            return;
        } else { 
            
        ingredientsQuantity[i] *= mengeAnzahl;

        document.getElementById('tdZutat-1').innerHTML = `${ingredientsQuantity[0]}`;
        document.getElementById('tdZutat-2').innerHTML = `${ingredientsQuantity[1]}`;
        document.getElementById('tdZutat-3').innerHTML = `${ingredientsQuantity[2]}`;
        document.getElementById('tdZutat-4').innerHTML = `${ingredientsQuantity[3]}`;
        document.getElementById('tdZutat-5').innerHTML = `${ingredientsQuantity[4]}`;
        document.getElementById('tdZutat-6').innerHTML = `${ingredientsQuantity[5]}`;
        document.getElementById('tdZutat-7').innerHTML = `${ingredientsQuantity[6]}`;
        document.getElementById('tdZutat-8').innerHTML = `${ingredientsQuantity[7]}`;
        document.getElementById('tdZutat-9').innerHTML = `${ingredientsQuantity[8]}`;
        document.getElementById('tdZutat-10').innerHTML = `${ingredientsQuantity[9]}`;
        document.getElementById('tdZutat-11').innerHTML = `${ingredientsQuantity[10]}`;
        document.getElementById('tdZutat-12').innerHTML = `${ingredientsQuantity[11]}`;
        document.getElementById('tdZutat-13').innerHTML = `${ingredientsQuantity[12]}`;
    }
 }
}

function showMenu() {
    document.getElementById('menu').classList.add('show-overlay-menu');
}

function closeMenu() {
    document.getElementById('menu').classList.remove('show-overlay-menu');    
}


