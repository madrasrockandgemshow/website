document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const fileInput = document.getElementById('ad');
    const file = fileInput.files[0];

    // Validate fields
    if (!name || !email || !file) {
        document.getElementById('response-message').innerText = "All fields are required.";
        return;
    }

    // Validate file type and size
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
        document.getElementById('response-message').innerText = "Invalid file type. Please upload a JPG, PNG, or PDF file.";
        return;
    }

    if (file.size > 5000000) {
        document.getElementById('response-message').innerText = "File size must be less than 5MB.";
        return;
    }

    // Prepare mailto link
    const subject = encodeURIComponent("Vendor Registration Submission");
    const body = encodeURIComponent(
        `Vendor Name: ${name}\nEmail: ${email}\nFile Name: ${file.name}\n\nPlease check the attached file manually.`
    );

    const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Inform user
    document.getElementById('response-message').innerText = "Your email client is opening. Please attach the file and send.";
});
