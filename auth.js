// -----------------------------
// SIGN UP
// -----------------------------
document.getElementById("signUpForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const rollNo = document.getElementById("rollNo").value;
    const phoneNo = document.getElementById("phoneNo").value;
    const password = document.getElementById("password").value;
    const profileImage = document.getElementById("profileImage").files[0];

    const reader = new FileReader();
    reader.onloadend = function () {
        // Save user data to localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("studentRollNo", rollNo);
        localStorage.setItem("studentPhoneNo", phoneNo);
        localStorage.setItem("studentPassword", password);
        localStorage.setItem("studentProfileImage", reader.result);

        // Save attendance data for demo (optional default)
        let attendanceData = JSON.parse(localStorage.getItem("attendanceData")) || {};
        if (!attendanceData[rollNo]) {
            attendanceData[rollNo] = "80%"; // default attendance
            localStorage.setItem("attendanceData", JSON.stringify(attendanceData));
        }

        alert("Sign Up Successful! You can now log in.");
        window.location.href = "login.html";
    };

    if (profileImage) {
        reader.readAsDataURL(profileImage);
    }
});

// -----------------------------
// LOGIN
// -----------------------------
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const rollNo = document.getElementById("loginRollNo").value;
    const password = document.getElementById("loginPassword").value;

    const storedRollNo = localStorage.getItem("studentRollNo");
    const storedPassword = localStorage.getItem("studentPassword");

    if (rollNo === storedRollNo && password === storedPassword) {
        alert("Login Successful! Welcome to the dashboard.");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid roll number or password. Please try again.");
    }
});

// -----------------------------
// DASHBOARD (Auto-Run if on dashboard.html)
// -----------------------------
if (window.location.pathname.includes("dashboard.html")) {
    document.addEventListener("DOMContentLoaded", function () {
        const username = localStorage.getItem("username");
        const rollNo = localStorage.getItem("studentRollNo");
        const profileImage = localStorage.getItem("studentProfileImage");

        document.getElementById("usernameDisplay").textContent = username || "Guest";
        document.getElementById("rollNoDisplay").textContent = rollNo || "Unknown";
        document.getElementById("profileImageDisplay").src = profileImage || "";

        // Get stored attendance from localStorage
        const attendanceData = JSON.parse(localStorage.getItem("attendanceData")) || {};
        const attendance = attendanceData[rollNo] || "No data available";

        document.getElementById("attendanceDisplay").textContent = attendance;
    });
}
