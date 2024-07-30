// fetching the api 

const loadPhone = async (scarchPhone)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${scarchPhone}`)
    const data =await res.json();
    const phones = data.data
    displayPhones(phones)
}

// display all phones 
const displayPhones =(phones)=>{
// console.log(phones)

// hide show alll btn by condition
if(phones.length > 9){
    const showAllBtnContainer=document.getElementById('show-all-container');
    showAllBtnContainer.classList.remove('hidden')

}
else{
    const showAllBtnContainer=document.getElementById('show-all-container');
    showAllBtnContainer.classList.add('hidden')
}

// show only 10 phones fris time 
phones = phones.slice(0,9)


// 1. catch the container
const phoneContainer = document.getElementById('phone-container');
phoneContainer.innerHTML='';

phones.forEach(phone => {
    console.log(phone)
    // 2 .creat a div
    const phoneCard = document.createElement('div')
    phoneCard.classList='card card-compact bg-base-100 p-4 shadow-xl'
   
   
    // 3.  set inner html
    phoneCard.innerHTML=`
         <figure>
                      <img
                        src="${phone.image}"
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}!</h2>
                      <p>${phone.slug}</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
    `
    //4. append child in container
    phoneContainer.appendChild(phoneCard)

})
// hide loding spiner
toglolLodingSpiner(false)
}

// handle scarch btn
const handleScarch = () =>{
    //   loder show when lodin proccacing
    toglolLodingSpiner(true)
    const scarchFild =document.getElementById('scarch-fild');
    const scarchFildValue = scarchFild.value;
    console.log(scarchFildValue)
    loadPhone(scarchFildValue)
    scarchFild.value='';
}

// function for use loder
const toglolLodingSpiner=(isLoding)=>{
    const loader =document.getElementById('loder');
    if(isLoding === true){
        loader.classList.remove('hidden')
    }
    else{
        loader.classList.add('hidden')
    }
}

// loadPhone()