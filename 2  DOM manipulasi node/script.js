// membuat element baru
const pBaru = document.createElement('p');
// membuat teksnya
const teksPBaru = document.createTextNode('paragraf baru');
// menyimpan tulisan dalam element baru
pBaru.append(teksPBaru);
// menyimpan paragraf baru di akhir HTML
const sectionA = document.getElementById('a');
sectionA.append(pBaru);


// membuat elemen baru 2
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');
liBaru.append(teksLiBaru);
// menyimpan paragraf baru di tengah-tengah HTML
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.before(liBaru, li2);


// remove node
const a = document.getElementsByTagName('a')[0];
sectionA.removeChild(a);


// menggnati node
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');

h2Baru.append(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';