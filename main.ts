// main.ts

// Get form and output elements
const ResumeForm = document.getElementById('ResumeForm') as HTMLFormElement;
const resumeOutput1 = document.getElementById('ResumeOutput') as HTMLElement;
const GenerateBtn = document.getElementById('generate-resume-btn') as HTMLButtonElement;

// Event listener to generate resume
GenerateBtn.addEventListener('click', (event: Event) => {
    event.preventDefault();

    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    // Get user input values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Validate form fields (optional, can be improved for custom validation)
    if (!profilePictureInput || !name || !email || !phone || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }

    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

    // Generate resume in output div
    resumeOutput1.innerHTML = `
    <h2>Resume for ${name}</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile picture" class="profilepicture">` : ""}
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    `;
});
