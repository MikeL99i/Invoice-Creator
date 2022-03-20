//  variable for acessing DOM elements
// buttons
const washBtn = document.getElementById("washbutton");
const mowBtn = document.getElementById("mowbutton");
const pullBtn = document.getElementById("pullbutton");
const invoiceBtn = document.getElementById("invoicebtn");

// remove buttons
const removeWash = document.getElementById("removewash"); 

// used for adding new html (innerhtml) to display changes
const midPart = document.getElementById("midpart");
const botPart = document.getElementById("botpart");
const updateMid = document.getElementById("updatemid");
const totalCost = document.getElementById("totalcost");

// Array to hold all requested services
let requestedServices = [null, null, null];

// variable for total cost
let costSum = 0;

// flag for already added services
let washAdd = 0;
let mowAdd = 0;
let pullAdd = 0;


// EventListener instead of onclick 
washBtn.addEventListener("click", function() {
    requestedServices[0] = "WASH";
    renderMid(requestedServices);
    alreadyAdd("WASH");
})

mowBtn.addEventListener("click", function() {
    requestedServices[1] = "MOW";
    renderMid(requestedServices);
    alreadyAdd("MOW");
})

pullBtn.addEventListener("click", function() {
    requestedServices[2] = "PULL";
    renderMid(requestedServices);
    alreadyAdd("PULL");
})

// remove Eventlistner
removeWash.addEventListener("click", function() {
    updateMid.innerHTML = "";
})

// rendering midPart changes
function renderMid(arr) {
    let render = "";
    if(arr[0] === "WASH") {
        render += `
        <p>
            <span class="leftpara">Wash Car <button class="removebtn" id="removewash">remove</button></span>
            <span class="rightpara">10 $</span>
        </p>
        ` 
    }
    if(arr[1] === "MOW") {
        render += `
        <p>
            <span class="leftpara">Mow Lawn <button class="removebtn" id="removemow">remove</button></span>
            <span class="rightpara">20 $</span>
        </p>
        ` 
    }

    if(arr[2] === "PULL") {
        render += `
        <p>
            <span class="leftpara">Pull Weeds <button class="removebtn" id="removepull">remove</button></span>
            <span class="rightpara">30 $</span>
        </p>
        ` 
    }

    updateMid.innerHTML = render;
}

// render total cost
function renderBot(cost) {
    let render = "";
    costSum += cost;
    render = `<p>${costSum} $</p>`;
    totalCost.innerHTML = render;
}

// check if service is already added
function alreadyAdd(service) {
    if(service === "WASH") {
        if(washAdd === 0) {
            renderBot(10);
            washAdd = 1;
        }else 
            alert("Already Added!");
    }
    if(service === "MOW") {
        if(mowAdd === 0) {
            renderBot(20);
            mowAdd = 1;
        }else
            alert("Already Added!");
    }
    if(service === "PULL") {
        if(pullAdd === 0) {
            renderBot(30);
            pullAdd = 1;
        }else
            alert("Already Added!");
    }
}