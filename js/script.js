desc=[
"<strong>1. India </strong> <br> Taj Majal",
"<strong>2. Albania </strong> <br> Gjirokastra",
"<strong>3. Atenas </strong><br> Partenón",
"<strong>4. Bélgica </strong> <br> Amberes",
"<strong>5. Croacia </strong> <br> Lago Waterfalls",
"<strong>6. Egipto </strong> <br> Piramides de Guiza",
"<strong>7. China </strong> <br> Shangai ciudad",
"<strong>8. EEUU </strong> <br> Los Angeles"
];

imgs = ['/img/foto1.jpg',
        '/img/foto2.jpg',
        '/img/foto3.jpg',
        '/img/foto4.jpg',
        '/img/foto5.jpg',
        '/img/foto6.jpg',
        '/img/foto7.jpg',
        '/img/foto8.jpg']

inds=[]

window.onload = function(){
    cont=document.getElementById("cont");
    et_img=document.getElementById("et_img");
    bner=document.getElementById("bner");
    id_min=document.getElementById("ind_min");
}

let i='';
function chg_ph (){
    et_img.style.transform = `translateY(0px)`;
    et_img.style.transitionDuration = `0.2s`;
    bner.style.transform = `translateX(0px)`;
    bner.style.transitionDuration = `0.2s`;
    if (i<=6){
        ++i;
        $('.min_'+`${i}`)[0].style.backgroundColor = 'white';
        $('.min_'+`${i-1}`)[0].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    } else {
        i=0;
        $('.min_'+`${i}`)[0].style.backgroundColor = 'white';
        $('.min_'+`${7}`)[0].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    }
    bner.innerHTML = desc[i];
    et_img.src = imgs[i];
    console.log(i);
}

function next_ph(){
    et_img.style.transform = `translateY(-94vh)`;
    et_img.style.transitionDuration = `0.2s`;
    bner.style.transform = `translateX(-400px)`;
    bner.style.transitionDuration = `0.2s`;
    setTimeout(chg_ph, 300);
}

function chg_php (){
    et_img.style.transform = `translateY(0px)`;
    et_img.style.transitionDuration = `0.2s`;
    bner.style.transform = `translateX(0px)`;
    bner.style.transitionDuration = `0.5s`;
    if (i<=7 & i!=0){
        i--;
        $('.min_'+`${i}`)[0].style.backgroundColor = 'white';
        $('.min_'+`${i+1}`)[0].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    }else{
        i=7;
        $('.min_'+`${i}`)[0].style.backgroundColor = 'white';
        $('.min_'+`${0}`)[0].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    };
    bner.innerHTML = desc[i];
    et_img.src = imgs[i];
    console.log(i);
}

function prev_ph(){
    et_img.style.transform = `translateY(-94vh)`;
    et_img.style.transitionDuration = `0.2s`;
    bner.style.transform = `translateX(-400px)`;
    bner.style.transitionDuration = `0.2s`;
    setTimeout(chg_php, 300);
}