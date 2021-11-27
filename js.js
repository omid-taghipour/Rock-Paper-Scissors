var gamePg = document.getElementById('gamePg');
gamePg.style.display = 'none';
var stbt = document.getElementById('stbutton');
var images = document.getElementsByClassName('rps');

var helloDiv = document.getElementsByClassName('helloPg')[0];
var pId;
var comPoint = document.getElementById('compResult');
var usPoint = document.getElementById('usResult');
var messagewin = document.getElementById('resultmesg');
messagewin.style.valign = 'center';
for (i of images) {
    i.style.align = 'center';
    i.style.width = '100 px';
    i.style.height = '110px';
    i.style.padding = '10px';
    i.style.margin = '00px 50px 0px 50px';
};

stbt.addEventListener('click', function() {
    let usn = document.getElementById('username').value;
    pId = usn.toUpperCase();
    document.getElementById('usname').innerHTML = pId;
    helloDiv.style.display = 'none';
    gamePg.style.display = 'block';
    let bd1 = document.getElementById('body1');
    bd1.style.background = 'rgb(40,180,229)';
    bd1.style.padding = 0;

});

var rck = document.getElementById('rck');
var ppr = document.getElementById('ppr');
var scs = document.getElementById('scs');
var cp = 0;
var up = 0;
rck.addEventListener('click', function() {
    let rn = Math.floor(Math.random() * 3);
    if (rn === 1) {
        console.log('computer wins');
        $('p[id="winms"]').html('Computer won').hide().delay(0).fadeIn('slow');
        cp++;
        comPoint.innerHTML = cp;

        // $('div[id="resultmesg"]').hide();
    } else if (rn === 2) {
        console.log('user Wins!!!');
        $('p[id="winms"]').html(pId + ' won').hide().delay(0).fadeIn('slow');
        up++;
        usPoint.innerHTML = up;
    } else {
        console.log('same choice');
        $('p[id="winms"]').html('Same Choice with Computer!').hide().delay(0).fadeIn('slow');
    }
});

ppr.addEventListener('click', function() {
    let rn = Math.floor(Math.random() * 3);
    if (rn === 0) {
        console.log('player wins');
        $('p[id="winms"]').html(pId + ' won').hide().delay(0).fadeIn('slow');
        up++;
        usPoint.innerHTML = up;
    } else if (rn === 2) {
        console.log('computer Wins!!!');
        $('p[id="winms"]').html('Computer won').hide().delay(0).fadeIn('slow');
        cp++;
        comPoint.innerHTML = cp;
    } else {
        console.log('same choice');
        $('p[id="winms"]').html('Same Choice with Computer!').hide().delay(0).fadeIn('slow');
    }
});

scs.addEventListener('click', function() {
    let rn = Math.floor(Math.random() * 3);
    if (rn === 0) {
        console.log('computer wins');
        $('p[id="winms"]').html('Computer won').hide().delay(0).fadeIn('slow');
        cp++;
        comPoint.innerHTML = cp;
    } else if (rn === 1) {
        console.log('user Wins!!!');
        $('p[id="winms"]').html(pId + ' won').hide().delay(0).fadeIn('slow');
        up++;
        usPoint.innerHTML = up;
    } else {
        console.log('same choice');
        $('p[id="winms"]').html('Same Choice with Computer!').hide().delay(0).fadeIn('slow');
    }
});