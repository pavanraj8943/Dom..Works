document.getElementById("multi").addEventListener('click', () => {
    let x = parseInt(document.getElementById("num").value)

if (x>=50)
   return alert("Kauthukam lesham kooduthalaa alle....🤫")
    let inner = ""
    for (i = 1; i <= x; i++) {
        str = '';
        for (j = i; j < x; j++) {
            str += " "
        }
        for (k = 1; k <= i; k++) {
            str += "* "
        }
        inner += str + "\n"

    }
    document.getElementById("res").innerHTML = `<pre>${inner}</pre>`
});
