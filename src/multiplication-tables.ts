const multiplicationTable = (num : number) : void => {

    for(let i = 1; i < 11; i++ ) {
        console.log(num + " x " + i + " = " + num*i)
    }

}

multiplicationTable(2);