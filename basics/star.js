/* var person={name:"musthafa",age:22,place:"kollam",display:function(){
console.log(this.education)
} }

person.education="bca"
console.log(person.display())
delete person.education;
 */

function Person(name,age,place){
 this.age=age;
 this.name=name;
 this.place=place;
 this.display=function(){
    console.log(this.name+" "+this.place+" "+this.age)
 }

}

var musthafa=new Person("musthafa",22,"kollam")
var arif=new Person("arifshah",21,"kollathupuzha")

arif.display()

