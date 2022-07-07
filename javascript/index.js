/**Local de armazenamento**/ 
var peopleRaw = localStorage.getItem('people')
if(peopleRaw != null) { 
    var people = JSON.parse(peopleRaw)
} else {
    var people = []
}
 
/**Carregamento da nova tabela e exclusão de cadastro */
function drawTable () {

currenLines = [...document.querySelectorAll('table.list tbody .dinamic-content')];
currenLines.forEach((element) => {
    element.remove()
});

/**Dados do formulario**/
    for (person in people) { 
        document.querySelector('table.list tbody').innerHTML += 
            `<tr class="dinamic-content" style="background-color: ${((person % 2 == 0) ? '#fff' : '#eee')}"> 
                <td> 
                    ${ people[person].name }
                </td>
                <td> 
                    ${ people[person].tel }
                </td>
                <td> 
                    ${ (people[person].xp ? '<strong style="color:green"> Sim </strong>' : '<strong style="color:red"> Não </strong>' )} 
                </td>
                <td> 
                    <button onclick="deleteUser(${person})"> Excluir </button>
                    <a href="./src/form.html?person=${person}"> Editar </a>
                </td> 
            </tr>`
    }

}

/**Local de armazenamento persistência**/
function deleteUser(p) { 
    people.splice(p, 1);
    drawTable();
    localStorage.setItem('people', JSON.stringify(people))
}

drawTable()