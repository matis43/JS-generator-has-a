var iloscZn=8;
var iloscCyfr=0;
var iloscMaleL=0;
var iloscWolnychZn=0;
var iloscDuzeL=0;
var iloscSpec=0;

function iloscZnakow(){
    iloscZn=document.getElementById("iloscZnakow").value;
    
    ustawWolne();
}

function wybCyfr(){
    iloscCyfr=document.getElementById("iloscCyfr").value;
    document.getElementById("wybCyfr").value=iloscCyfr;
    ustawWolne();
}
function wybMaleL(){
    iloscMaleL=document.getElementById("iloscMaleL").value;
    document.getElementById("wybMaleL").value=iloscMaleL;
    ustawWolne();
}
function ustawWolne(){
    iloscWolnychZn=iloscZn-iloscCyfr-iloscMaleL-iloscDuzeL-iloscSpec;
    document.getElementById("wynik").value=iloscWolnychZn;
    document.getElementById("iloscCyfr").max=+iloscCyfr +iloscWolnychZn;
    document.getElementById("iloscMaleL").max=+iloscMaleL +iloscWolnychZn;
    document.getElementById("iloscDuzeL").max=+iloscDuzeL +iloscWolnychZn;
    document.getElementById("iloscSpec").max=+iloscSpec +iloscWolnychZn;
}
function wybDuzeL(){
    iloscDuzeL=document.getElementById("iloscDuzeL").value;
    document.getElementById("wybDuzeL").value=iloscDuzeL;
    ustawWolne();
}
function wybSpec(){
    iloscSpec=document.getElementById("iloscSpec").value;
    document.getElementById("wybSpec").value=iloscSpec;
    ustawWolne();
}
function generujHaslo(){
    let haslo=[""];
    const alfabetMale="abcdefghijklmnoprstuvwxyz";
    const alfabetDuze="ABCDEFGHIJKLMNOPRSTUVWXYZ";
    const cyfry="0123456789";
    const spec="`~@#$%^&*()-_=+[]{};':,./<>?";

    //losowanie małych liter
    for(let i=0;i<iloscMaleL;i++){
        haslo.push(alfabetMale.charAt(Math.floor(Math.random()*alfabetMale.length)));
    }
    //losowanie dużych liter
    for(let i=0;i<iloscDuzeL;i++){
        haslo.push(alfabetDuze.charAt(Math.floor(Math.random()*alfabetDuze.length)));
    }
    //losowanie cyfr
    for(let i=0;i<iloscCyfr;i++){
        haslo.push(cyfry.charAt(Math.floor(Math.random()*cyfry.length)));
    }
    //losowanie znaków specjalnych
    for(let i=0;i<iloscSpec;i++){
        haslo.push(spec.charAt(Math.floor(Math.random()*spec.length)));
    }
        
        haslo.sort(function(){return 0.5 - Math.random()});;
        const tab=haslo.join('');
        document.getElementById("test").value=tab;
    
    
}
