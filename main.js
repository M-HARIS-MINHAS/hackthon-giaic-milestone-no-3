// main.ts
// Get form and output elements
var ResumeForm = document.getElementById('ResumeForm');
var resumeOutput1 = document.getElementById('ResumeOutput');
var GenerateBtn = document.getElementById('generate-resume-btn');
// Event listener to generate resume
GenerateBtn.addEventListener('click', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    // Get user input values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Validate form fields (optional, can be improved for custom validation)
    if (!profilePictureInput || !name || !email || !phone || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
    // Generate resume in output div
    resumeOutput1.innerHTML = "\n    <h2>Resume for ".concat(name, "</h2>\n    ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile picture\" class=\"profilepicture\">") : "", "\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
});
