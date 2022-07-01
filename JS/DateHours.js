var date = new Date().getHours()
 if(date>6 && date <12 ){
    alert("Good Morning")
    document.body.style.backgroundColor = 'yellow'
 }
 else if(date>12 && date<18){
    alert("Good day")
    document.body.style.backgroundColor = 'green'

 }
 else if(date>=18 || date<6){
    alert("Good evening")
    document.body.style.backgroundColor = 'black'

 }
 console.log(date);




