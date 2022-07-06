var people = [
    { 
        name: 'Fernando Henrique Caversan Santos Duro',
        tel: '14999999999',
        xp: true
    }, 
    { 
        name: 'Franciane Paiva Pires',
        tel: '14999999999',
        xp: false
    },
    {
        name: 'Andersan Arcenio Matos da Costa',
        tel: '14999999999',
        xp: true
    },
    {
        name: 'Karina do Amaral',
        tel: '14999999999',
        xp: false
    }, 
    {
        name: 'Cauê Sanches Padula',
        tel: '14999999999',
        xp: true
    },
];


function desenhaTabela () {

currenLines = [...document.querySelectorAll('table.list tbody .dinamic-content')];
currenLines.forEach((element) => {
    element.remove()
});

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
                    <button onclick="people.splice(${person}, 1); desenhaTabela()"> Excluir </button>
                </td> 
            </tr>`
    }

}




desenhaTabela()