// LOGIN.JS

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    const rollno = document.getElementsByName("rollno")[0].value;
    const otp = document.getElementsByName("otp")[0].value;

    // Check if OTP is correct
    if (otp === "1234") {
        // Store roll number in localStorage for later access
        localStorage.setItem("studentRollNo", rollno);

        // Redirect to the dashboard
        window.location.href = "dashboard.html";
    } else {
        // Show a popup message if OTP is incorrect
        alert("Invalid OTP. Please enter the correct OTP (1234).");
    }
});
