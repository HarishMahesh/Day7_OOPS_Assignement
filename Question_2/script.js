// Convert the UML diagram to Typescript class. - use number for double

class circle {
    constructor(radius = 1.0 ,color = 'red')
    {
        this.radius = radius;
        this.color = color;
    }

    getRadius()
    {
        return this.radius;
    }

    setRadius(val)
    {
        this.radius = val;
        return;
    }

    getColor()
    {
        return this.color;
    }

    setColor(val)
    {
        this.color = val;
        return;
    }

    toString()
    {
        return `Circle[radius= ${this.radius},color= ${this.color}]`;
    }

    getArea()
    {
        return 3.14*this.radius*this.radius;
    }

    getCircumfrence()
    {
        return 2*3.14*this.radius;
    }

}