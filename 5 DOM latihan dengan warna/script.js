// tombol
// tombol ubah warna
const tombol = document.getElementById('tombol');
tombol.onclick = function () {
  // document.body.style.backgroundColor = 'aqua';
  // document.body.setAttribute('class', 'biru-muda');
  document.body.classList.toggle('biru-muda');
};

// membuat tombol warna acak
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tombol.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


// slider
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

// // cursor
// document.body.addEventListener('mousemove', function (event) {
//     // // cari posisi mouse
//     // event.clientX;

//     // // ukuran browser
//     // console.log(window.innerWidth);

//     // posisi X pada window
//     const xPos = Math.round((event.clientX / window.innerWidth * 255));
//     // posisi Y pada window
//     const yPos = Math.round((event.clientY / window.innerHeight * 255));
//     document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',0)';
// });

// inputan value
const colorPickerBG = document.querySelector('input[type=color]');

colorPickerBG.addEventListener('input', function () {
    const rgb = colorPickerBG.value;
    document.body.style.backgroundColor = rgb;
});
