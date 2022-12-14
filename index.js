
const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const forms = document.querySelector("#forms");
const tbody = document.getElementById('newRow');
const table = document.getElementById('table');

let nomTemp = "";
let prenomTemp = "";

forms.addEventListener("submit", function(e) {

    e.preventDefault();
    let tr = document.createElement('tr');
    tbody.appendChild(tr);

    //change
    let tdNom = createElement('td',nom, 'nom');
    tr.appendChild(tdNom);

    let tdPrenom = createElement('td',prenom, 'prenom');
    tr.appendChild(tdPrenom);
    // let tdPrenomTxt = document.createTextNode(prenom.value);
    // tdPrenom.appendChild(tdPrenomTxt);
    // tdPrenom.setAttribute('class', 'prenom');

    let tdAction = createElement('td',null, 'action');
    tr.appendChild(tdAction);
    // tdAction.setAttribute('class', 'action');

    let tdModifier = createElement('td');
    tdAction.appendChild(tdModifier);
    let tdModifBtn = createElement('button','Modifier',  'modifier');
    tdModifier.appendChild(tdModifBtn);
    

    let tdSupp = createElement('td');
    tdAction.appendChild(tdSupp);
    let tdSuppBtn = createElement('button', 'Supprimer', 'supp');
    tdSupp.appendChild(tdSuppBtn);
   

    let tdValider = createElement('td');
    tdAction.appendChild(tdValider);
    let tdValiderBtn = createElement('button','Valider', 'valider');
    tdValider.appendChild(tdValiderBtn);
    
    let btnValider = tr.querySelector('.valider');
    btnValider.style.display = "none";

    tdSuppBtn.addEventListener('click', function(e) {
        e.currentTarget.parentNode.parentNode.parentNode.remove();
    });

    tdModifBtn.addEventListener('click', function(e) {
        let modifBtn = e.currentTarget;
        let modifTr = modifBtn.parentNode.parentNode.parentNode;
        let inputNom = modifTr.querySelector('.nom');
        let inputPrenom = modifTr.querySelector('.prenom');

        nomTemp = modifTr.querySelector('.nom').innerHTML;
        prenomTemp = modifTr.querySelector('.prenom').innerHTML;

        inputNom.innerHTML = '';
        inputPrenom.innerHTML = '';

        let inputNomType = createElement('input', nomTemp, 'inputNomClass');
        let inputPrenomType = createElement('input', prenomTemp, 'inputPrenomClass');
        inputNom.append(inputNomType);
        inputPrenom.append(inputPrenomType);


        let btnModif = modifTr.querySelector('.modifier');
        btnModif.style.display = "none";

        let btnSupp = modifTr.querySelector('.supp');
        btnSupp.style.display = "none";

        let btnValider = modifTr.querySelector('.valider');
        btnValider.style.display = "block";
    });
    tdValiderBtn.addEventListener('click', function(e) {
        
        let validerBtn = e.currentTarget;
        let validerTr = validerBtn.parentNode.parentNode.parentNode;
        
        let btnModif = validerTr.querySelector('.modifier');
        btnModif.style.display = "inline";
        let btnSupp = validerTr.querySelector('.supp');
        btnSupp.style.display = "inline";
        let btnValider = validerTr.querySelector('.valider');
        btnValider.style.display = "none";
        
        let nomValeur = validerTr.querySelector('.inputNomClass');
        let prenomValeur = validerTr.querySelector('.inputPrenomClass');
        //error
        
        nomTemp = nomValeur.value;
        prenomTemp = prenomValeur.value;
        
        

        let modifNom = validerTr.querySelector('.nom');
        let modifPrenom = validerTr.querySelector('.prenom');
        modifNom.innerHTML = '';
        modifPrenom.innerHTML = '';

        let tdNomTxt = document.createTextNode(nomTemp);
        modifNom.appendChild(tdNomTxt);
        modifNom.setAttribute('class', 'nom');
    
        let tdPrenomTxt = document.createTextNode(prenomTemp);
        modifPrenom.appendChild(tdPrenomTxt);
        modifPrenom.setAttribute('class', 'prenom');
    });

    nom.value = "";
    prenom.value = "";
});


//change
function createTd(text = null, classe = null) {
    let td = document.createElement("td");
    if(text != null) {
        td.innerText = text.value;
    }
    if(classe != null) {
        td.classList.add(classe);
    }
    return td
}

function createButton(text = null, classe = null) {
    let button = document.createElement("button");
    if(text !=null) {
        button.innerText = text;
    }
    if(classe != null ){
        button.classList.add(classe);
    }
    return button
}
function createElement(element, text = null, classe = null, type= 'text' ) {
    if(element == 'td'){
        return createTd(text, classe)
    }
    if(element == 'button') {
        return createButton(text, classe)
    }
    if(element == 'input') {
        return createInput(text, classe, type);
    }
}

function createInput(nom = null, classe = null, type = 'text') {
    let input = document.createElement("input");
    if(nom != null) {
        input.value = nom;
    }
    input.setAttribute("type", type);
    if(classe != null) {
        input.classList.add(classe);
    }
    return input
}