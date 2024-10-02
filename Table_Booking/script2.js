document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const tableNumber = document.getElementById('tableNumber').value;
    const date = document.getElementById('date').value;

    if (name && phone && email && tableNumber && date) {
        document.getElementById('bookingMessage').textContent = 
            Thank you, ${name}. Your table #${tableNumber} for ${date} is booked! We will contact you at ${phone} or ${email}.;
        document.getElementById('bookingForm').reset();  // Reset form after submission
    } else {
        document.getElementById('bookingMessage').textContent = 'Please fill in all fields.';
    }
});