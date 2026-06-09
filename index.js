function update(element) {
    let multiplier = container.value === "glass-bottle" ? 1.0 : 0.5;
    if (total.value === "" && amount.value === "") {
        return;
    }
    if (element === amount) {
        total.value = amount.value * multiplier;
    }
    else {
        amount.value = total.value * (1/multiplier);
    }
}

function validateInput(event) {
    if (["e", "-", "+"].includes(event.key)) { event.preventDefault() }
}

window.onload = () => {
    const total = document.getElementById("total");
    const amount = document.getElementById("amount");
    const container = document.getElementById("container");

    [total, amount].forEach((element) => { element.addEventListener("keypress", validateInput) });
}
