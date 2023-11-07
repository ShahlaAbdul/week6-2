const wheather=document.querySelector(".wheather")
const form =document.querySelector("form")
const inputCity=document.querySelector("input[type-text]")

// console.log(inputCity.value);


function getData(url) {
    return fetch(url)
    .then(res=>res.json())
    
    
}
 form.addEventListener("submit", search)
function search(e){
    e.preventdefault()
    getData(`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${inputCity.value}`)
    .then(data=>console.log(data))

    .then(data=>{
        console.log(data);
        wheather.innerHTML+=`
        <p class="city">city:${data.location.name}</p>
        <p class="country">country:${data.location.country}</p>
        <p class="forecast">forecast:${data.location.temp_c}</p>
        <p class="sky">sky:${data.current.condition.icon}</p>
        <p class="sky">${data.current.condition.tex}</p>
        
        `
})
}





   


