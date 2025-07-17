document.addEventListener('DOMContentLoaded', () => {
    const donationForm = document.getElementById('bloodDonationForm');

    if (donationForm) {
        donationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Gather form data
            const donorName = document.getElementById('donorName').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const donorAge = document.getElementById('donorAge').value;
            const donorState = document.getElementById('donorState').value;
            const bloodGroup = document.getElementById('bloodGroup').value;

            // Simple validation (can be more robust)
            if (!donorName || !gender || !donorAge || !donorState || !bloodGroup) {
                alert('Please fill in all required fields.');
                return;
            }

            // In a real application, you would send this data to a backend server.
            // For this example, we'll just log it and show an alert.
            console.log({
                name: donorName,
                gender: gender,
                age: donorAge,
                state: donorState,
                bloodGroup: bloodGroup
            });

            alert('Thank you, ' + donorName + '! Your registration for blood donation has been submitted. We will contact you soon.');

            // Optionally, reset the form after successful submission
            donationForm.reset();
        });
    }

    // You can add more JavaScript interactivity here as needed.
    // For example, dynamic content loading, animations, etc.
});
