'use strict';

const library = document.querySelector('.books');
const books = document.querySelectorAll('.book');
library.prepend(books[1]);
library.append(books[2]);
books[3].before(books[4]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

books[4].querySelector('a').textContent='Книга 3. this и Прототипы Объектов';

const adBlock = document.querySelector('.adv');
adBlock.remove();

const secondBookChapters = books[0].querySelectorAll('li');
secondBookChapters[10].before(secondBookChapters[2]);
secondBookChapters[3].after(secondBookChapters[6]);
secondBookChapters[4].before(secondBookChapters[8]);
secondBookChapters[10].before(secondBookChapters[2]);

const fifthBookChapters = books[5].querySelectorAll('li');
fifthBookChapters[10].before(fifthBookChapters[8]);
fifthBookChapters[8].before(fifthBookChapters[5]);
fifthBookChapters[1].after(fifthBookChapters[9]);
fifthBookChapters[6].before(fifthBookChapters[2]);

const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
books[2].querySelectorAll('li')[9].before(newChapter);
