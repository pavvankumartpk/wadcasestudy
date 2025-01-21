// Simulated storage for feedback and mentor details
const feedbackData = [];

// Handle feedback submission
document.getElementById('submit-btn').addEventListener('click', () => {
    const mentorName = document.getElementById('mentor-name').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const branch = document.getElementById('branch').value.trim();
    const feedback = document.getElementById('feedback').value.trim();

    // Validate input fields
    if (!mentorName || !subject || !branch || !feedback) {
        alert('Please fill in all fields!');
        return;
    }

    // Add feedback to the simulated storage
    feedbackData.push({ mentorName, subject, branch, feedback });

    // Clear input fields
    document.getElementById('mentor-name').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('branch').value = '';
    document.getElementById('feedback').value = '';

    alert('Feedback submitted successfully!');

    // Update summary
    updateSummary();
});

// Update the feedback summary on the page
function updateSummary() {
    const summaryDiv = document.getElementById('summary');

    if (feedbackData.length === 0) {
        summaryDiv.innerHTML = '<h2>Summary</h2><p>No feedback yet!</p>';
        return;
    }

    // Build summary content
    let summaryHTML = '<h2>Summary</h2>';
    feedbackData.forEach((entry, index) => {
        summaryHTML += `
            <h3>Feedback ${index + 1}</h3>
            <p><strong>Mentor Name:</strong> ${entry.mentorName}</p>
            <p><strong>Subject:</strong> ${entry.subject}</p>
            <p><strong>Branch:</strong> ${entry.branch}</p>
            <p><strong>Feedback:</strong> ${entry.feedback}</p>
            <hr>
        `;
    });

    summaryDiv.innerHTML = summaryHTML;
}

// Initialize with empty summary
updateSummary();
