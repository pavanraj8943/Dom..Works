document.getElementById("multi").addEventListener('click', () => {
    let x = parseInt(document.getElementById("num").value)
   
    for(i=1;i<=x;i++){
        str='';
        for(j=i;j<x;j++){
            str+=" "   
        } 
        for(k=1;k<=i;k++){
            str+="* "
        } 
        console.log(str);
        
    }
    document.getElementById("res").innerHTML=str
})