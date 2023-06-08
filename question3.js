
const elements = document.querySelectorAll('.highlight')
for (let x of elements) {
    x.classList.add('bold')

}

const header = document.body.querySelector('h1')
console.log(header)
/*Used when looking for the first element with the same name */


const header1 = document.getElementById('first_h1')
/* used specifically when looking for a particular element with a unique ID */
