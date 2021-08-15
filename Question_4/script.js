// write a class to calculate uber price.

/* 
price split up -

band -A cars with price 0 - 5L - 
                            rate/KM = 25 rs
                            servicecharge = 30 rs
                            peaktimecharge/KM = 30 rs

band - B cars with price 5L - 10L - 
                            rate/KM = 30 rs
                            servicecharge = 35 rs
                            peaktimecharge/KM = 35 rs

band - C cars with price above 10L - 
                            rate/KM = 35 rs
                            servicecharge = 40 rs
                            peaktimecharge/KM = 40 rs  */


class uberCar {
    constructor(carprice)
    {
    
        if(carprice < 500000 && carprice > 0)
        {
            this.band = 'A';
            this.PerKMrate = 25;
            this.serviceCharge = 30;
            this.PeaktimeRate = 30;
        }
        else if(carprice >= 500000 && carprice < 1000000)
        {
            this.band = 'B';
            this.PerKMrate = 30;
            this.serviceCharge = 35;
            this.PeaktimeRate = 35;
        }
        else if(carprice >= 1000000)
        {
            this.band = 'C';
            this.PerKMrate = 35;
            this.serviceCharge = 40;
            this.PeaktimeRate = 40;

        }

    }
    getUberPrice(distanceTravelled,isTrafficTime)
    {
        let price;
        if(isTrafficTime)
        {
            price = (this.PeaktimeRate * distanceTravelled) + this.serviceCharge;
            return price;
        }
        else{
            price = (this.PerKMrate * distanceTravelled) + this.serviceCharge;
            return price;
        }
    }
}

let car1 = new uberCar(200000);
let car2 = new uberCar(700000);
let car3 = new uberCar(1700000);


console.log(car1.getUberPrice(10,true));
console.log(car2.getUberPrice(5,false));
console.log(car3.getUberPrice(3,true));
