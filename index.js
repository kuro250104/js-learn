const forms= document.querySelector('#forms');
const nom=document.querySelector('#nom')
const prenom=document.querySelector('#prenom')
let occurence = 0;

forms.addEventListener('submit', function(e){
    e.preventDefault();
    occurence  = occurence+ 1;
    addRow(document.getElementById('newRow'),nom, prenom, occurence);
    nom.value = ""
    prenom.value = ""
    console.log("je marche");
});




function addRow(elmt, nom, prenom, occurence)
{
    let tr = document.createElement('tr');
    elmt.appendChild(tr); 

    let tdNom = document.createElement('td');
    tr.appendChild(tdNom);
    let tdNomValue = document.createTextNode(nom.value);
    tdNom.appendChild(tdNomValue);
    tdNom.setAttribute('id', 'nom' + occurence.toString());


    let tdPrenom = document.createElement('td');
    tr.appendChild(tdPrenom);
    let tdPrenomValue = document.createTextNode(prenom.value);
    tdPrenom.appendChild(tdPrenomValue);
    tdPrenom.setAttribute('id', 'nrenom' + occurence.toString());

    
    let tdEdit = document.createElement('td');
    tr.appendChild(tdEdit);
    let tdEditBtn = document.createElement('button');
    tdEdit.appendChild(tdEditBtn);
    let tdEditBtnTxt = document.createTextNode('Modifier');
    tdEditBtn.appendChild(tdEditBtnTxt);
    let tdDel = document.createElement('td');
    tr.appendChild(tdDel);
    let tdDelBtn = document.createElement('button');
    tdDel.appendChild(tdDelBtn);

    let tdDelBtnTxt = document.createTextNode('Supprimer');
    tdDelBtn.appendChild(tdDelBtnTxt);
    tdDelBtn.setAttribute('id', 'del' + occurence.toString());
    
    tdDelBtn.addEventListener('click', function(e) {
        let BtnId = e.currentTarget,
        trDel = BtnId.parentNode.parentNode;
        trDel.remove();
    });

    tdEditBtn.addEventListener('click', function(e){
        let EditId = e.currentTarget
        

    });
    


}
