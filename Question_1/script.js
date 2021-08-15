class movie {
    constructor(title,studio,rating = 'PG')
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getRating()
    {
        return this.rating;
    }
}

function getPG(array)
{
    let filteredArray = array.filter((obj) => obj.getRating() === 'PG')
    return filteredArray;
}

let KGF = new movie('KGF','Harish studio','A');
let bahubali = new movie('Bahubali', 'Vikram studio');
let vikram = new movie('Vikram', 'couldnine studio');
let mersal = new movie('Mersal', 'Thenandal flims', 'B');
let theri = new movie('Theri', 'SunPictures');
let CR = new movie('Casino Royale','Eon Productions','PG13')


console.log(KGF);
console.log(bahubali);
console.log(vikram);
console.log(theri);
console.log(mersal);
console.log(CR);

console.log(getPG([KGF,bahubali,vikram,mersal,theri,CR]));