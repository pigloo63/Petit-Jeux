
function randomOneToThree(min, max) {
let numberResult = 0

min = Math.ceil(min);
max = Math.floor(max);

numberResult = Math.floor(Math.random() * (max - min + 1) + min)

return numberResult
}

export default randomOneToThree