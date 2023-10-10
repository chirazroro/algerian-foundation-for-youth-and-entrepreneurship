const article = document.getElementById("go");
const bigger = document.querySelector(".bigger");
const ret = document.getElementById("return");
const raasiya = document.getElementById("nav");
const npbutton = document.getElementById("npdetails");
const tafasil = document.getElementById("natpro");
const npfinn = document.getElementById("npyfin");
const itemsy = document.getElementById("hadinaplus");
const hadinaDiv = document.getElementById("hadinaa");
const awda = document.getElementById("retu");




article.addEventListener("click", (eo) => {

    bigger.classList.add("active")


});

ret.addEventListener("click", (eo) => {
    bigger.classList.remove("active")

});

npbutton.addEventListener("click", (eo) => {
    natpro.classList.add("npactive")
});






let valueDisplays = document.querySelectorAll(".num");

let interval = 5000;

console.log(valueDisplays);

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;

        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

npfinn.addEventListener("click", (eo) => {
    natpro.classList.remove("npactive")
});









itemsy.addEventListener('click', (eo) => {
    hadinaDiv.classList.add('incuactive');

});

awda.addEventListener("click", (eo) => {
    hadinaDiv.classList.remove('incuactive');
});


const hadinaInscription = document.getElementById("sign-up");
const formulaire = document.getElementById("tasjil");
const returnawda = document.getElementById("3awda");
const compte = document.getElementById("login");
const loginn = document.getElementById("logen");
const khoroj = document.getElementById("rojo3");


hadinaInscription.addEventListener("click", (eo) => {
    formulaire.classList.add('signup')
});



returnawda.addEventListener("click", (eo) => {
    formulaire.classList.remove('signup')
});

compte.addEventListener("click", (eo) => {
    loginn.classList.add('log-in')
}
);



khoroj.addEventListener("click", (eo) => {
    loginn.classList.remove('log-in')
}
);




const nachat = document.getElementById('activity');
const kharajat = document.getElementById('nachatates');
const nachatend = document.getElementById('nachend');


nachat.addEventListener("click", (eo) => {
    kharajat.classList.add('actactive')
});

nachatend.addEventListener("click", (eo) => {
    kharajat.classList.remove('actactive')
});


const servicing = document.getElementById('service');
const khadamat = document.getElementById('maham');
const khadend = document.getElementById('mahamend');


servicing.addEventListener("click", (eo) => {
    khadamat.classList.add('mahamactive')
});
khadend.addEventListener("click", (eo) => {
    khadamat.classList.remove('mahamactive')
});


const moreclick = document.getElementById('more');
const plusfond = document.getElementById('plus');
const finfond = document.getElementById('firstnihaya');


moreclick.addEventListener("click", (eo) => {
    plusfond.classList.add('mazid')
});

finfond.addEventListener("click", (eo) => {
    plusfond.classList.remove('mazid')
});


var checkbox = document.getElementById('check');


var menuItems = document.querySelectorAll('#myList li');


menuItems.forEach(function (item) {
    item.addEventListener('click', function () {

        checkbox.checked = false;
    });
});


const jdid = document.getElementById("new")
const gdim = document.getElementById("old")

jdid.addEventListener("click", (eo) => {
    loginn.classList.remove('log-in')
    formulaire.classList.add('signup')
});

gdim.addEventListener("click", (eo) => {
    loginn.classList.add('log-in')
}
);





const signupp = document.getElementById('sejl');
const okkk = document.getElementById('ok');

signupp.addEventListener('click',(eo) => {
    okkk.classList.add('succ')
});







