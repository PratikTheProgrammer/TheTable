function table(){
    const n = document.getElementById("num");
    var i = 1;
    while(i<=10){
        document.getElementById(`result${i}`).innerHTML = `${n.value}*${i} = ${n.value*i} , `;
        i++;
    }
};