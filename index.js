function input(val) {
    let txt = document.querySelector(".text");
    
    if ((txt.value == '0' && txt.value.length == 1 ) && Number.isInteger(parseInt(val)) ) {
        console.log(val);
        txt.value = val;
    }
    else if (val == ' + ' || val == ' -' ||val == ' * ' ||val == ' / ' ) {
        let tmp = txt.value.length;
        console.log("yo");
        if (txt.value[tmp-1] == ' ') {
            
            let x = document.querySelector(".error")
            x .style.display = "block"
        }

        else {
            txt.value += val;
            let x = document.querySelector(".error")
            x .style.display = "none"
            }
    }
    else {
        txt.value += val;
        let x = document.querySelector(".error")
            x .style.display = "none"
    }
    
}

function clearr() {
    let txt1 = document.querySelector(".text");
    txt1.value = '0';
}

function operate(val) {
    let counter = 0;
    let splitter = val.split(" ");
    let ans = 0;
     let x = 0;
     let z = 0;
    for (var i = 0; i < splitter.length; ++i) {
                switch(splitter[i]) {
                    case '+':
                        counter +=1;
                        //console.log(splitter[i]);
                        if (counter > 1) {
                            x = ans;
                                }
                        else {
                        x = Number.isInteger(splitter[i-1]) ? splitter[i-1] : parseInt(splitter[i-1]) ;
                         }
                        z = Number.isInteger(splitter[i + 1]) ? splitter[i + 1]  : parseInt(splitter[i + 1]);  
                        ans = add(x, z);
                        console.log(ans + '!');
                        break;
                    case '-':
                        counter +=1;
                            
                        if (counter > 1) {
                             x = ans;
                                 }
                        else {
                        x = Number.isInteger(splitter[i-1]) ? splitter[i-1] : parseInt(splitter[i-1]) ;
                         }
                        z = Number.isInteger(splitter[i + 1]) ? splitter[i + 1]  : parseInt(splitter[i + 1]);  
                        ans = subtract(x, z);
                        console.log(ans + '!');
                        break;
                    case '*':
                        counter +=1;
                                
                        if (counter > 1) {
                                x = ans;
                                    }
                        else {
                        x = Number.isInteger(splitter[i-1]) ? splitter[i-1] : parseInt(splitter[i-1]) ;
                            }
                        z = Number.isInteger(splitter[i + 1]) ? splitter[i + 1]  : parseInt(splitter[i + 1]);  
                        ans = mult(x, z);
                        console.log(ans + '!');
                        break;
                    case '/':
                        counter +=1;
                                
                        if (counter > 1) {
                                x = ans;
                                    }
                        else {
                        x = Number.isInteger(splitter[i-1]) ? splitter[i-1] : parseInt(splitter[i-1]) ;
                            }
                        z = Number.isInteger(splitter[i + 1]) ? splitter[i + 1]  : parseInt(splitter[i + 1]);  
                        ans = divide(x, z);
                        console.log(ans + '!');
                        break;
                       
                }
            
    }
    let txt = document.querySelector('.text').value = ans;
}
function add(x, z) {
    
    return x + z;
    //let txt = document.querySelector('.text').value = a;
}

function subtract(x, z) {
    
    return x - z;
    
}

function mult(x,z) {
    return x * z;
}
function divide(x,z) {

    return x / z;
}

/* 
if (splitter[i] == ('+' || '-' || '/' || '*')) {
                counter +=1;
                //console.log(splitter[i]);
                if (counter > 1) {
                    x = sum1;
                }
                else {
                x = Number.isInteger(splitter[i-1]) ? splitter[i-1] : parseInt(splitter[i-1]) ;
                }
                z = Number.isInteger(splitter[i + 1]) ? splitter[i + 1]  : parseInt(splitter[i + 1]);  
                sum1 = add(x, z);
                console.log(sum1 + '!');
            }
            */