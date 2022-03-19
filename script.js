//  variable for acessing DOM elements
// buttons
const washBtn = document.getElementById("washbutton");
const mowBtn = document.getElementById("mowbutton");
const pullBtn = document.getElementById("pullbutton");
const invoiceBtn = document.getElementById("invoicebtn");

// used for adding new html (innerhtml) to display changes
const midPart = document.getElementById("midpart");
const botPart = document.getElementById("botpart");
const updateMid = document.getElementById("updatemid");

// Array to hold all requested services
let requestedServices = [null, null, null];


// EventListener instead of onclick 
washBtn.addEventListener("click", function() {
    requestedServices[0] = "WASH";
    renderMid(requestedServices);
})

mowBtn.addEventListener("click", function() {
    requestedServices[1] = "MOW";
    renderMid(requestedServices);
})

pullBtn.addEventListener("click", function() {
    requestedServices[2] = "PULL";
    renderMid(requestedServices);
})

// rendering midPart changes
function renderMid(arr) {
    let render = "";
    if(arr[0] === "WASH") {
        render += `
        <p>
            <span class="leftpara">Wash Car</span>
            <span class="rightpara">10 $</span>
        </p>
        ` 
    }
    if(arr[1] === "MOW") {
        render += `
        <p>
            <span class="leftpara">Mow Lawn</span>
            <span class="rightpara">20 $</span>
        </p>
        ` 
    }

    if(arr[2] === "PULL") {
        render += `
        <p>
            <span class="leftpara">Pull Weeds</span>
            <span class="rightpara">30 $</span>
        </p>
        ` 
    }

    updateMid.innerHTML = render;
}

