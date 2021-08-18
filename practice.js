/*
// get elements by tag name

const blogTitles = document.getElementsByTagName('h3');
// console.log(blogTitles);

for (const h3 of blogTitles) {
    console.log(h3.innerText);
}

const blogDetails = document.getElementsByTagName('p');
for (const p of blogDetails) {
    console.log(p.innerText);
}

*/

/*

// get element by ID
const secondTitle = document.getElementById('second-title');

console.log(secondTitle.style.backgroundColor = 'red');

const first = document.getElementById('first-title');
first.style.color = 'green';

first.style.textAlign = 'center';
first.style.border = '2px solid red';
first.style.padding = '10px';
first.innerText = 'This is inner Text!!'
console.log(first);
*

/*


//query selector/ selectorAll

const blogsss = document.querySelector('my-blog');

console.log(blogsss);

document.querySelectorAll('my-blog');

*/


/*

//create and add element by using JS
const li = document.createElement('li');
li.innerText = 'Blog-5';

const ul = document.getElementById('list');
console.log(ul);

ul.appendChild(li);
*/

/*
// add article

const article = document.createElement('article');
article.classList.add('my-blog');

const h3 = document.createElement('h3');
h3.innerText = 'my awesome blog-4';

const p = document.createElement('p');
p.innerText = 'lorem ipsum doler sit amet';

article.appendChild(h3);
article.appendChild(p);

const blogSection = document.getElementById('blog');

blogSection.appendChild(article);
*/

/*
//Get element by class name

const myBlog = document.getElementsByClassName('my-blog');

for (const blog of myBlog) {
    blog.style.border = '2px solid orange';
    blog.style.margin = '10px';
    blog.style.padding = '10px';
    blog.style.borderRadius = '10px';
    console.log(blog);
}

*/

/*
// event handler ------------------------------

//red
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//blue
const blueButton = document.getElementById('make-blue');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//green
const green = document.getElementById('makeGreen');
green.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//golden rod
const golden = document.getElementById('make-golden-rod');

golden.addEventListener('click', makeGolden);

function makeGolden() {
    document.body.style.backgroundColor = 'goldenrod';
}

//hotPink
const hotpinkButton = document.getElementById('hotPink');

hotpinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

//light-blue---direct shortcut

document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})
*/

function handleJustFunctionClick() {
    const clickingMethod = document.getElementById('clicking-method');
    clickingMethod.innerText = 'Set by using function';

}


// direct

document.getElementById('direct-handler').addEventListener('click', function () {
    const clickinMethod = document.getElementById('clicking-method');
    clickinMethod.innerText = 'Set by using direct function';
})

//another direct

document.getElementById('update-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');

    const clickinMethod = document.getElementById('clicking-method');
    clickinMethod.innerText = nameField.value;

    nameField.value = '';
})