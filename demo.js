// // let text = "32,31,34,36,31";
// // let arr = text.split(",")
// // console.log(arr.join(";"))
// ///////////////////////////////burda stringin icersinide yerlesen vergulu cevirdik noqteli 



// // let numbers = [10,11,12,13,14,15,16,17,18,19];
// // let [first, second,...others] = numbers;
// // console.log(first)
// // console.log(second)
// // console.log(others)




// // let numbers = [10,11,12,13,14,15,20,17,18,19];
// // function Mathmax(max){
// //     max = numbers[0];
// //     for(let i =0;i <numbers.length; i++ )
// //     if(numbers[i]> max){
// //        max=numbers[i]
// //     }
// //     console.log(max)
// // }
// // Mathmax(numbers)

// ///////////////////////max/min funksia ile yazilidi 


// // let numbers = [10,11,12,13,14,15,16,17,18,20];
// // console.log(Math.max(...numbers))

// ////////////////////////////////////////////////////////////

// // let num = [1,2,-3,-5,7,-8,-12,8,-99];
// // let callBack=(items,b,c)=>{
// //     if(items<0){
// //         console.log(` ${items} menfi ededdir`)
// //     }
// // }
// // num.forEach(callBack) ancaq menfi ededleri consola cxaracaq 


// //////////////////////////////////////////////////
// // let num = [1,2,-3,-5,7,-8,-12,8,-99,16];
// // num.forEach ((items,sona)=>{
    
// //     if (items>0){

// //         console.log(`sira sayi ${i}musbet eded ${items} yeri ${sona}`)
// //     }
// // }

// // )
// ///////////////////////////////////////

// // let number = [5,2,8,9,1];
// // let max = number[0];

// // function sortArray(items,index) {
// // for(let i =0; i< number.length;i++ ){
// //     if( items>number[i]){
// //         console.log(items)
// //     }
// // }
// // return index;
// // }

// // // number.forEach(sortArray)

// // number.forEach(sortArray)
// //////////////////


// // let number = [5,8,2,12,18];
// // let min = number[0];
// // for(let i =0; i <number.length; i++){
// //   if(number[i]< min){
// //     min = number[i]
// //     console.log(number[i])
// //   }
 
// // }

// //////////////////////////////burda menfini msubet edirik musbeti ise iki defe artiririq
// // let arr = [1,-3,10,-8];


// // let change =arr.map(num=>{
// //     if(num>0){
// //         num=num*2
// //     }else if(num<0){
// //       num = Math.abs(num)
// //     }
// //     return num
// // })
// // console.log(change)
// ////////////////////////////////////////////////////////////////


// // let arr = ["made", "make", "oki", "map"];///////////////bu bize verir ilk 3 herfli sozu

// // let array = arr.find(e=>{
// //     if(e.length==3){
// //    return e
// //     }
// // })

// // console.log(array)
// ////////////////////////////////////////////////////////


// ///////////////////////////////////////////////// bu tapsiriq ancaq a herfi ile baslayan sozleri konsola cxarmaq ucundur 
// // let arr = ["Semed", "Anar", "Gunel","Aydan"];

// // let arr2 = arr.filter(e=>{
// //  e.split("")
// //  return e[0]=="A"
// // })

// // console.log(arr2)
// ///////////////////////////////////////////
// /////////////////////////////// exeple for object
// // let user ={
// //     name:"Sona",
// //     gender: "Female",
// //     birthDay: "24.12.1997"
// // }
// // user.age= 24;
// // delete user.birthDay
// // console.log(user)
// /////////////////////////////
// ///////////////////////////////////////////// burda istifadecinin pensiya almaga nece ilinin qaldigini hesablayiriq
// // let user ={
// //     age:18,
// //     name:"Anderson",
// //     surname:"Enrique",
// //     setAge(ageChange){
// //       this.age= ageChange
// //     },
// //     getYearsbeforeRetirement(answer){
// //         if(user.age<65){
// //      answer = 65-user.age
// //      console.log(`sizin pensiya almaga ${answer} iliniz var`)
// //     }else{
// //         console.log("siz artiq pensiya alirsiniz");
// //     }}
// // }
// // user.setAge(80);
// // user.getYearsbeforeRetirement();
// ///////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////// burda da metod verdik 
// // class Person {
// //     constructor(ad, soyad, yas, cins){
// //         this.name= ad,
// //         this.surnaem=soyad,
// //         this.age =yas,
// //         this.gender=cins
// //     }
// //     celebrateBirthday(){
// //         return this.age++
// //     }
// // }

// // let user1 = new Person("Sona","Kerimli",24,"qadin");
// // let user2 = new Person("Orxan","Babayev",15,"kisi");
// // let user3 = new Person("Sebine","Quliyeva",34,"qadin");
// // // user1.celebrateBirthday();
// // // user2.celebrateBirthday();
// // // user3.celebrateBirthday();
// // console.log(user1);
// // console.log(user2);
// // console.log(user3);
// /////////////////////////////////////////
// //////////////////////////////////////////

// class Person {
//     constructor(surname,name,age,gender){
//     this.soyad= surname,
//     this.ad = name,
//     this.yas =age,
//     this.cins=gender};
//     rename(a){
//         this.ad=a
//     }
// }

// class Admin extends Person {
//     constructor(surname,name,age,gender,role,id){
//     super(surname,name,age,gender),
//     this.sira=role,
//     this.number =id
// }
// }

// class Player extends Person {
//     constructor(surname,name,age,gender,level){
//     super(surname,name,age,gender),
//     this.derece =level
// }
// }

// let person1 = new Person("Kerimli","Sona",16,"Qadin");
// person1.rename("sona")
// console.log(person1);

// let person2 = new Admin("Eliyev","Anar",11,"kisi",87,1254654);
// person2.rename("Ayan")
// console.log(person2);
    
// let person3 = new Player("camalov","Akif",11,"kisi",3);
// person3.rename("Durna")
// console.log(person3);
    /////////////////////////////////js element silmek elave elemek

// let h1 = document.querySelector("h1")
// h1.remove()
// let p = document.createElement("p")
// let ul = document.querySelector("ul")
// ul.append(p)
////////////////////////
///////////////////////////////////////////////////// burada deyerleri consola otururuk
// let btn = document.querySelector("button");
// let slct = document.querySelector("select");
// let input = document.querySelector("input");
// btn.addEventListener("click", ()=>{
// console.log(`mesaj novu: ${slct.value}`);
// console.log(`metn: ${input.value}`);
// })

////////////////////////////////////////////////

// let form = document.querySelector("form");

// form.addEventListener("submit", (event)=> {
//        event.target.addEventListener("blur",(event)){if(event.target.length>5){
//         console.log("uygundur");
//     }}))
    
// })
///////////////////////////////////////////////

// let container = document.querySelector(".container");
// let a = +prompt ("eded daxil edin");
// for (let i= 0; i <a ; i ++) {
//  let div =  document.createElement ("div");
//  div.classList.add("small")
//  div.innerText =`${i+1}`
//  container.append(div)
// }
//////////////////////////////////


// const data = '{"id":371,"type":"general","joke":"Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan."}';
//  let data1= JSON.parse(data);


// data1.id = 157;
// let data2 = JSON.stringify(data1)
// console.log(data);
// console.log(data2);
////////////////////////////////////////////////////////// burada serverden alinan melumati liste yazdirdim

// let ul = document.querySelector("ul")
// fetch('https://acb-api.algoritmika.org/api/transaction/')
// .then(res => res.json())
// .then(data=>{
//     for(let i = 0; i < data.length; i++){
//         let li = document.createElement("li")
//         li.innerText= (`${data[i].from}-den ${data[i].to}-a ${data[i].amount} azn` );
//         ul.append(li)
//     }
//     console.log(data);
// })
/////////////////////////////////////////////////////////