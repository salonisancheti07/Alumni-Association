document.getElementById("donation-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const purpose = document.getElementById("purpose").value;
    const amount = document.getElementById("amount").value;

    if (name && email && purpose && amount) {
        alert(
            `Thank you, ${name}, for your generous donation of ₹${amount} towards ${purpose}.`
        );
        document.getElementById("donation-form").reset();
    } else {
        alert("Please fill in all fields to make a donation.");
    }
});

function donate(purpose) {
    document.getElementById("purpose").value = purpose;
    document.getElementById("donation-form-section").scrollIntoView({ behavior: "smooth" });
}
