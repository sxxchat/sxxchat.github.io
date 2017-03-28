// function Animal(name) {
//   this.name = name;
//   this.canWalk = true;
// }
//
// var animal = new Animal("ёжик");
//
//
// function Product (title, price, weight, quantity, sostav, opisanie) {
//   this.title = title;
//   this.price = price;
//   this.weight = weight;
//   this.quantity = quantity;
//   this.sostav = sostav;
//   this.opisanie = opisanie;
//
// }
 // var product = new Product();

 var sm = {
   title : "СЯКИ МАКИ",
   price : 2.5,
   weight : 41,
   quantity : 8,
   printOut : function () {
      title = this.title;
      price = this.price + " BYN.";
      weight = this.weight + " г.";
      quantity = this.quantity + " штук";
      console.log(title, price, weight, quantity )
    };
 };

 var um = {
   title : "УНАГИ МАКИ",
   price : 1.5,
   weight : 42,
   quantity : 8,
   printOut : function () {
      title = this.title;
      price = this.price + " BYN.";
      weight = this.weight + " г.";
      quantity = this.quantity + " штук";
      console.log(title, price, weight, quantity )
    };
 };

 var km = {
   title : "КАППА МАКИ",
   price : 0.5,
   weight : 41,
   quantity : 8,
   printOut : function () {
      title = this.title;
      price = this.price + " BYN.";
      weight = this.weight + " г.";
      quantity = this.quantity + " штук";
      console.log(title, price, weight, quantity )
    };
 };

 var ssm = {
   title : "СПАЙСИ СЯКЕ МАКИ",
   price : 2.5,
   weight : 41,
   quantity : 8,
   printOut : function () {
      title = this.title;
      price = this.price + " BYN.";
      weight = this.weight + " г.";
      quantity = this.quantity + " штук";
      console.log(title, price, weight, quantity )
    };
 };


 window.onload = function() {

         document.getElementById('s1price').innerHTML = sm.price + " BYN.";
         document.getElementById('s1title').innerHTML = sm.title;
         document.getElementById('s1sostav').innerHTML =  sm.price;
         document.getElementById('s1description').innerHTML = sm.description;
 }
