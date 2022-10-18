const forms= document.querySelector('#forms');
const nom=document.querySelector('#nom')
const prenom=document.querySelector('#prenom')

forms.addEventListener('submit', function(e){
    e.preventDefault();
    addRow(document.getElementById('table'),nom, prenom);
    nom.value = ""
    prenom.value = ""
    console.log("je marche");
});


function addRow(elmt, nom, prenom)
{
    let tr = document.createElement('tr');
    elmt.appendChild(tr); 
    let tdNom = document.createElement('td');
    tr.appendChild(tdNom);
    let tdNomValue = document.createTextNode(nom.value);
    tdNom.appendChild(tdNomValue);
    let tdPrenom = document.createElement('td');
    tr.appendChild(tdPrenom);
    let tdPrenomValue = document.createTextNode(prenom.value);
    tdPrenom.appendChild(tdPrenomValue);
}