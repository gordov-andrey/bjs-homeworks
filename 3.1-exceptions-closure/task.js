//HT1

function parseCount(count){
   
    if (isNaN(count)) {
      throw new Error("Невалидное значение");
    }
    const parsed = Number.parseInt(count, 10);
    return Math.round(parsed) ;
  }

function validateCount(count){
    try{
      return parseCount(count);
    }catch(e){
      return new Error("Невалидное значение");
    }
}

//HT2
class Triangle{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b){
            throw new Error("Треугольник с такими сторонами не существует");
        }  
    }
    getPerimeter(){
        return (this.a + this.b + this.c);
    }
    getArea(){
        const area = Math.sqrt(this.getPerimeter() / 2 * (this.getPerimeter() / 2 - this.a) * (this.getPerimeter() / 2 - this.b) * (this.getPerimeter() / 2 - this.c)).toFixed(3);
        return Number(area, 3);   
   }
}

function getTriangle (a, b, c){
    try{
        return new Triangle(a, b, c);;
    }catch(e){
        return {
            getArea: () => "Ошибка! Неправильный треугольник",
			getPerimeter: () => "Ошибка! Неправильный треугольник",
        }
    }
}