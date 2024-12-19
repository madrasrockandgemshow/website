document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const vendorAdText = document.getElementById('vendorAdText').value.trim();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const vendorUrl = document.getElementById('vendorUrl').value.trim();

    const fileInput = document.getElementById('ad');
    const file = fileInput.files[0];

    // Validate fields
    if (!name || !email || !file || !vendorAdText) {
        document.getElementById('response-message').innerText = "Enter required fields.";
        return;
    }

    // Validate file type and size
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
        document.getElementById('response-message').innerText = "Invalid file type. Please upload a JPG or PNG.";
        return;
    }

    if (file.size > 5000000) {
        document.getElementById('response-message').innerText = "File size must be less than 5MB.";
        return;
    }

    // Prepare mailto link
    const subject = encodeURIComponent("Vendor Registration Submission");
    const body = encodeURIComponent(
        `Vendor Name: ${name}\nEmail: ${email}\nVendor URL: ${vendorUrl}\nVendor Advertisement Text: ${vendorAdText}\n\nPlease attach the file: ${file.name} to this email and send it.`
    );

    const mailtoLink = `mailto:madrasrockandgemshow@gmail.com?subject=${subject}&body=${body}`;

    try {
        // Open the mailto link
        window.location.href = mailtoLink;
        document.getElementById('response-message').innerText = "Your email client is opening. Please attach the file and send.";
    } catch (error) {
        // Fallback if mailto link fails
        document.getElementById('response-message').innerText = "Failed to open your email client. Please send an email manually to madrasrockandgemshow@gmail.com with the required details and the attachment.";
    }
});
