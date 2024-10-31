const container = document.getElementById("container");

let i = 0;
const createPollDiv = () => {
    //console.log("dsadsd");
    i++;
    console.log(i);

    const poll = document.createElement("div");
    //poll.innerText = "tämä on divi";
    
    const label = document.createElement("label");
    label.for = "input-" + i;
    label.innerText = "Input-" + i;
    poll.appendChild(label);
    
    const input = document.createElement("input");
    input.placeholder = "jotain tähän";
    input.id= "input-" + i;
    poll.appendChild(input);

    const remover = document.createElement("button");
    remover.innerText = "Remove";
    remover.addEventListener("click",()=>{
        poll.remove();
    });
    poll.appendChild(remover);
    
    container.appendChild(poll);
}

const adder = document.createElement("button");
adder.classList = "fancy-button";
adder.innerText = "Add";
adder.addEventListener("click",()=>createPollDiv());
container.appendChild(adder);

createPollDiv();





