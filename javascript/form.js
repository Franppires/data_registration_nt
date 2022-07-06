function testform(e) {
    e.preventDefault();

    var peopleRaw = localStorage.getItem('people')
    if(peopleRaw != null) { 
        var people = JSON.parse(peopleRaw)
    } else {
        var people = []
    }

    people.push ({
    name: e.target.elements['name'].value,
    tel: e.target.elements['phone'].value,
    xp: (e.target.elements['xp'].value == 'true')
    })

    localStorage.setItem('people', JSON.stringify(people))

    document.getElementById('goHome').click()
}