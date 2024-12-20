// alumni.js

const alumniList = [
    {
        name: "John Doe",
        batch: "2020",
        major: "Computer Science",
        location: "New York, USA",
        job: "Software Engineer",
        company: "Google",
        profilePicture: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/5da16865-9379-464b-8540-7a3733f8c3b5/e8afb3e1-1198-40e5-9e6a-c4f045909f64.png",
        contact: "https://linkedin.com/in/johndoe"
    },
    {
        name: "lily Smith",
        batch: "2021",
        major: "Electrical Engineering",
        location: "London, UK",
        job: "Hardware Engineer",
        company: "Intel",
        profilePicture: "https://www.shutterstock.com/image-photo/close-portrait-young-woman-25-260nw-2348910441.jpg",
        contact: "https://linkedin.com/in/janesmith"
    },
    {
        name: "Ali Khan",
        batch: "2022",
        major: "Mechanical Engineering",
        location: "Delhi, India",
        job: "Project Manager",
        company: "Tata Motors",
        profilePicture: "https://knowledgeenthusiast.com/wp-content/uploads/2022/04/pexels-photo-6694422.jpeg",
        contact: "https://linkedin.com/in/alikhan"
    }
];

const alumniContainer = document.getElementById("alumni-list");

function renderAlumniList(filteredAlumni = alumniList) {
    alumniContainer.innerHTML = ""; // Clear existing alumni
    filteredAlumni.forEach((alumnus) => {
        const card = document.createElement("div");
        card.className = "alumni-card";

        card.innerHTML = `
            <img src="${alumnus.profilePicture}" alt="Profile Picture">
            <h3>${alumnus.name}</h3>
            <p><strong>Batch:</strong> ${alumnus.batch}</p>
            <p><strong>Major:</strong> ${alumnus.major}</p>
            <p><strong>Location:</strong> ${alumnus.location}</p>
            <p><strong>Job:</strong> ${alumnus.job} at ${alumnus.company}</p>
            <a class="contact-link" href="${alumnus.contact}" target="_blank">View Profile</a>
        `;

        alumniContainer.appendChild(card);
    });
}

function filterAlumni() {
    const searchValue = document.getElementById("search-bar").value.toLowerCase();
    const batchValue = document.getElementById("batch-filter").value;

    const filteredAlumni = alumniList.filter((alumnus) => {
        const matchesSearch = alumnus.name.toLowerCase().includes(searchValue) ||
            alumnus.company.toLowerCase().includes(searchValue) ||
            alumnus.major.toLowerCase().includes(searchValue);

        const matchesBatch = batchValue === "all" || alumnus.batch === batchValue;

        return matchesSearch && matchesBatch;
    });

    renderAlumniList(filteredAlumni);
}

// Initial Render
renderAlumniList();
