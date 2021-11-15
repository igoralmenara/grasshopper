let findHotels = [
    {type: 'Suites Almenara', city: 'Almenara', price: 171, rating: 4.9},
    {type: 'Pousada de Vange', city: 'Almenara', price: 40, rating: 1.3},
    {type: 'Pousada Sol Nascente', city: 'Almenara', price: 100, rating: 4.9},
    {type: 'Hotel Graciema', city: 'Itaobim', price: 133, rating: 2.8},
    {type: 'Hotel Araras', city: 'Itaobim', price: 90, rating: 3.7},
    {type: 'Hotel Rosado', city: 'Governador Valadares', price: 85, rating: 5}
];

/**
 * Retorna hotéis com city == city
 * caso city == all, retorna todos registros
 *
 * @param {String} city
 * @param {Array} findHotels
 * @returns {Array}
 */
function getData(city = null, findHotels) {

    let hotels = [];

    for (element of findHotels) {
        if (city == 'all') {
            hotels.push(element);
        }

        if (city && element.city == city) {
            hotels.push(element);
        }
    }

    return hotels;
}

let almenaraHoteis = getData('Almenara', findHotels);

console.log('----GET DATA----');
console.log(almenaraHoteis);

let allCities = getData('all', findHotels);
console.log('----ALL----');
console.log(allCities);

/**
 * Retorna price < 100
 *
 * @param {Array} hotel
 * @returns {Array}
 */
function underAHundred(hotel) {
    return hotel.price < 100;
}

let precoAcessivel = findHotels.filter(underAHundred);
console.log('----VALORES ABAIXO DE 100----');
console.log(precoAcessivel);

/**
 * Retorna um array com os ratings
 *
 * @param {Array} findHotels
 * @returns {Array}
 */
function getRatings(findHotels) {
    let ratings = [];

    for (element of findHotels) {
        ratings.push(element.rating)
    }

    return ratings;
}

let allRatings = getRatings(findHotels);
console.log('----RATINGS----');
console.log(allRatings);

/**
 * Retorna a média
 *
 * @param {Array} ratings
 * @returns {Number}
 */
function average(ratings) {

    let sum = 0;

    for (element of ratings) {
        sum = sum + element;
    }

    return sum / ratings.length;
}

let almenaraHotels = getData('Almenara', findHotels);
let almenaraHotelsRating = getRatings(almenaraHotels);
let almenaraHotelsRatingAverage = average(almenaraHotelsRating);

console.log('----Avaliacoes Hoteis de Almenara----');
console.log(almenaraHotelsRating);
console.log('----Media das avaliacoes----');
console.log(almenaraHotelsRatingAverage);

/**
 * Retorna a média da avaliações
 *
 * @param {Array} hotels
 * @returns{Number}
 */
function averageRating(hotels) {
    let ratings = getRatings(hotels);
    return average(ratings);
}

console.log('----Media de Avaliações----');
console.log(averageRating(getData('Itaobim', findHotels)));

/**
 * Acrescenta 5%
 *
 * @param {number} value
 * @returns {number}
 */
function calculateTax(value) {
    return value * 1.05;
}

/**
 * Divide acrescenta juros e divide a conta
 *
 * @param {number} total
 * @param {number} people
 * @returns {number}
 */
function splitBill(total, people) {
    let tot = calculateTax(total);

    return tot / people;
}

console.log('----Total----');
console.log(splitBill(76, 4));

/**
 * Altera o último item do array
 *
 * @param {array} shapes
 * @param {string} shape
 * @returns {*}
 */
function setLastValue(shapes, shape) {
    return shapes[shapes.length - 1] = shape;
}

let shapes = ['triangle', 'square', 'petagon', 'circle'];

setLastValue(shapes, 'hexagon');

console.log('----Shapes----');
for (item of shapes) {
    console.log(item);
}

/**
 * Retorna o elemento vizinho do array
 *
 * @param {array} array
 * @param {number} index
 * @returns {string}
 */
function getNeihbor(array, index) {
    return array[index + 1];
}

let index = 2;

console.log('----Vizinho----');
console.log(shapes);
console.log(getNeihbor(shapes, index));

/**
 * Verifica se o space e word são compatíveis
 *
 * @param {string} space
 * @param {string} word
 * @returns {boolean}
 */
function check(space, word) {
    if (space.length !== word.length) {
        return false;
    }

    for (let i = 0; i < word.length; i++) {
        if (space[i] !== '-' && space[i] !== word[i]) {
            return false;
        }
    }

    return true;
}

let randonWord = 'rant';

console.log('----Caça palavras----');
console.log(randonWord);
console.log(check('-a-t', randonWord));

/**
 * Recebe um array de subsequências e retorna uma string com a maior palavra
 *
 * @param {array} array
 * @returns {string}
 */
function longestWord(array) {
    var longest = '';

    for (var element of array) {
        if (element.length > longest.length) {
            longest = element;
        }
    }

    return longest;
}

let stringSequence = 'abppplee';
let subsequence = ['able', 'ale', 'apple'];

console.log('----Maior palavras----');
console.log(stringSequence);
console.log(subsequence);
console.log(longestWord(subsequence));

/**
 * Transforma uma string em um objeto com suas letras
 *
 * @param {string} string
 * @returns {object}
 */
function mapString(string) {
    let obj = {};

    for (let i = 0; i < string.length; i++) {
        let letter = string[i];

        if (obj[letter]) {
            obj[letter].push(i)
        } else {
            obj[letter] = [i];
        }
    }

    return obj;
}

let word = 'banana';

console.log('----objeto de string----');
console.log(mapString(word));
