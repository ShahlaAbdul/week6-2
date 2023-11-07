// async function createCard() {
//     const res=await fetch("")
//     const data =await res.json();
//     console.log(data);
//     data.forEach(element => {
        
//     });

    
// }

fetch("https://northwind.vercel.app/api/categories/2", {
    header:{
        Accept: "application/json",
        "Content-Type": "application/json",

    },
    method:"POST",
    body: JSON.stringify({name:"firfir", surname:"gktg;r"}),
})
.then(res=>res.json())
.then(data=>{
    data.forEach(myelement => {
        createCard(myelement.id,myelement.name,myelement.description)
        
    });
})
.catch(err=>console.log("error" , err.message))

function createCard(id,name,description,) {
    const card =document.createElement("div")
    const cardid =document.createElement("div")
    const cardname =document.createElement("a")
    const carddescription =document.createElement("div")

    // card.classList.add(card)
    cardname.setAttribute("href", "./newtab.html#" +id )



    

    cardid.textContent=id
    cardname.textContent=name   
    carddescription.textContent=description+"azn"

    // cardid.textContent=id
    // cardname.textContent=name
    // cardunitPrice=unitPrice
    // cardunitInstock=unitsInstock

    card.append(cardid,cardname,carddescription)

    document.body.appendChild(card)

}


console.log(createCard);













