document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const vendorAdText = document.getElementById('vendorAdText').value.trim();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const vendorUlr = document.getElementById('vendorUrl').value.trim();

    const fileInput = document.getElementById('ad');
    const file = fileInput.files[0];

    // Validate fields
    if (!name || !email || !file || !vendorUlr || !vendorAdText) {
        document.getElementById('response-message').innerText = "All fields are required.";
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
        `Vendor Name: ${name}\nEmail: ${email}\nVendor URL: ${vendorUlr}\nVendor Advertisement Text: ${vendorAdText}\nFile Name: ${file.name}\n\nPlease add your advertisement image as an attachment to this email. We will add it to the website.`
    );

    const mailtoLink = `mailto:madrasrockandgemshow@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    // Inform user
    document.getElementById('response-message').innerText = "Your email client is opening. Please attach the file and send.";
});
