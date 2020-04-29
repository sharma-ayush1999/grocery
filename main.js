if(document.getElementById('ban-content1').style.display=='none'){
    document.getElementById('ban-down').style.display='flex';
    document.getElementById('ban-up').style.display='none';
}
else{
    document.getElementById('ban-down').style.display='none';
    document.getElementById('ban-up').style.display='flex';
}
document.getElementById('ban-down').addEventListener('click',function(){
    if(document.getElementById('ban-content1').style.display=='none'){
        document.getElementById('ban-content1').style.display='block';
        document.getElementById('ban-down').style.display='none';
        document.getElementById('ban-up').style.display='flex';
    }
    else{
        document.getElementById('ban-content1').style.display='none';
        document.getElementById('ban-up').style.display='none';
        document.getElementById('ban-down').style.display='flex';
    }
});
document.getElementById('ban-up').addEventListener('click',function(){
    if(document.getElementById('ban-content1').style.display=='none'){
        document.getElementById('ban-content1').style.display='block';
        document.getElementById('ban-down').style.display='none';
        document.getElementById('ban-up').style.display='flex';
    }
    else{
        document.getElementById('ban-content1').style.display='none';
        document.getElementById('ban-up').style.display='none';
        document.getElementById('ban-down').style.display='flex';
    }
});

var j=-1;
document.getElementById('price1').addEventListener('click',function(){
    document.getElementById('price1').style.backgroundColor='#04f804';
    document.getElementById('price2').style.backgroundColor='transparent';
    document.getElementById('total').innerHTML=parseInt(0);
    document.getElementById('pay').innerHTML=parseInt(0);
    i=0;
    j=1;
});
document.getElementById('price2').addEventListener('click',function(){
    document.getElementById('price2').style.backgroundColor='#04f804';
    document.getElementById('price1').style.backgroundColor='transparent';
    document.getElementById('total').innerHTML=parseInt(0);
    document.getElementById('pay').innerHTML=parseInt(0);
    i=0
    j=0;
});

var i=0;
document.getElementById('plus').addEventListener('click',function(){
    if(j==1 || j==0){
    document.getElementById('total').innerHTML=++i;
    if(j==1){
        document.getElementById('pay').innerHTML=parseInt(i)*399;  
    }
    else if(j==0){
        document.getElementById('pay').innerHTML=parseInt(i)*209;  
    }
    }
});

document.getElementById('minus').addEventListener('click',function(){
    if(i==0){
        document.getElementById('total').innerHTML=parseInt(0);
        document.getElementById('pay').innerHTML=parseInt(0);
    }
    else{
        if(j==1 || j==0){ 
        document.getElementById('total').innerHTML=--i;
        if(j==1){
            document.getElementById('pay').innerHTML=parseInt(i)*399;  
        }
        else if(j==0){
            document.getElementById('pay').innerHTML=parseInt(i)*209;  
        }
        }
}
});

