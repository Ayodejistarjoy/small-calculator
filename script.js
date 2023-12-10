function me() {
    if (why.value <=10000 && why.value >=1000){
        who.innerHTML = "Kindly withdraw your cash 💵💵"
    }
    


try{
    if(why.value == "") throw " empty"
     if(why.value >=10000) throw " too big to dispense"
     if(why.value <=1000) throw " too small to dispense"
    
}
catch(err){
    
    who.innerHTML = "amount is" + err
}

 
    
}