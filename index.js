let last_updated_input = null;
window.onload = () => {
    const total = document.getElementById("total");
    const amount = document.getElementById("amount");
    const container = document.getElementById("container");

    total.addEventListener("keypress", validateInput);
    amount.addEventListener("keypress", validateInput);
}

function update(element) {
    if (element !== container) {
        let multiplier = container.value === "glass-bottle" ? 1.0 : 0.5;
        last_updated_input = element;
        if (element.value === "") {
            amount.value = "";
            total.value = "";
        }
        else if (element === amount) { total.value = amount.value * multiplier }
        else if (element === total) { amount.value = total.value * (1/multiplier) }
    }
    else if (last_updated_input !== null) { update(last_updated_input) }
}

function validateInput(event) {
    if (["e", "-", "+"].includes(event.key)) { event.preventDefault() }
}