// Function to filter jobs based on search input
function filterJobs() {
    let searchTerm = document.getElementById('search-bar').value.toLowerCase();
    let jobItems = document.querySelectorAll('.job-item');

    jobItems.forEach(function(item) {
        let jobTitle = item.querySelector('h3').innerText.toLowerCase();
        let jobLocation = item.querySelector('p').innerText.toLowerCase();

        if (jobTitle.includes(searchTerm) || jobLocation.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to show the "Post a Job" form
function showPostJobForm() {
    document.getElementById('post-job-form').style.display = 'block';
}

// Function to close the "Post a Job" form
function closePostJobForm() {
    document.getElementById('post-job-form').style.display = 'none';
}

// Function to handle job posting (you can extend this to save data)
document.getElementById('post-job').addEventListener('submit', function(event) {
    event.preventDefault();

    let companyName = document.getElementById('company-name').value;
    let jobTitle = document.getElementById('job-title').value;
    let jobLocation = document.getElementById('job-location').value;
    let stipend = document.getElementById('stipend').value;
    let requirements = document.getElementById('requirements').value;

    alert('Job posted successfully!');

    // You can add code to append this job to the job listing dynamically or save it
});
