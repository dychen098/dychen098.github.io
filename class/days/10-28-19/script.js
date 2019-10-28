async function special(){
    console.log("in special begining")
    let result = await setTimeout(doStuff, 2000);
    console.log("in special ending")
}

function doStuff(){
    console.log("in do stuff")
}

window.onload = function(){
    this.console.log("before calling special");
    this.special();
    this.console.log("after callilng special");
}
