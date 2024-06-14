// Methods


document.getElementById('title') // We provide id to select element
// We can access different elements by using '.'
document.getElementById('title').id // Returns name of the id
document.getElementById('title').className // Returns name of the class
document.getElementById('title').getAttribute('class') // Pass the attribute you want to get
document.getElementById('title').setAttribute('class', 'test') // Pass the attribute you want to set, along with the value


const title = document.getElementById('title')
title.style.backgroundColor = 'green'
title.style.padding = '15px'
title.style.borderRadius = '15px'


title.textContent // Extracts all the visible and hidden content
title.innerHTML // Extracts complete html value for that text
title.innerText // Extracts visible content only


document.querySelector('h1') // Returns first h1
document.querySelector('#title') // Returns id
document.querySelector('.heading') // Returns class

document.querySelectorAll('li') // Returns all li in form of NodeList (Not array)

const tempLiList = document.querySelectorAll('li')
tempLiList[0].style.color = 'green'

document.getElementsByClassName('heading') // Returns element with that class in form of HTML Collection (Not array)

// Conversion of HTML Collection and NodeList to Array
const myArr = Array.fron(HTMLCollection)
const myNewArr = Array.from(NodeList)