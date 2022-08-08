let priceArray = []
let prices = {"Wash Car": 10, 
              "Mow Lawn": 20,
              "Pull Weeds": 30
            }
let washCarBtn = document.getElementById('wash-car-btn')
let mowLawnBtn = document.getElementById('mow-lawn-btn')
let pullWeedsBtn = document.getElementById('pull-weeds-btn')
let workPrice = document.getElementById('work-price')
let mainContent = document.getElementById('content-main')
let actualPrice = document.getElementById('actual-price')
let pointer = 0
let price = 0

let temp1 = 0
let temp2 = 0
let temp3 = 0
washCarBtn.addEventListener('click', function(){
    if (temp1 === 0){
        priceArray.push("Wash Car")
        rendor()
    }
    temp1 += 1
})

mowLawnBtn.addEventListener('click', function(){
    if (temp2 === 0){
        priceArray.push("Mow Lawn")
        rendor()

    }
    temp2 += 1
})

pullWeedsBtn.addEventListener('click', function(){
    if (temp3 === 0){
        priceArray.push("Pull Weeds")
        rendor()
    }
    temp3 += 1
})

function rendor(){
    for (let i=pointer; i < priceArray.length; i++){
       mainContent.innerHTML +=  `<div class="display" id="work-price">
                                        <h3> ${priceArray[i]} <span> remove </span> </h3>
                                        <h4> <span id="remove"> $ </span> ${prices[priceArray[i]]} </h4>
                                    </div>`
    }
    pointer+=1
    rendorPrice()

}   


function rendorPrice(){
    for(let i=0; i < priceArray.length; i++){
        price += prices[priceArray[i]]
    }
    actualPrice.textContent = "$ " + price
    price = 0
}

