
document.getElementById("multi").addEventListener('click', () => {
    let x = document.getElementById("num").value
    let y = 10;
    str = ''
    for (let i = 1; i <= y; i++) { 
        str+=`<p>${i} * ${x} = ${x * i}</p> `
    }

    document.getElementById("res").innerHTML = str
})











