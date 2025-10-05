// Wait for the page to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
});

// Define the asynchronous function to fetch and display data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch user data from the API
        const response = await fetch(apiUrl);

        // Check if the response is okay (status 200–299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert the response to JSON format
        const users = await response.json();

        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Create a list element to hold user names
        const userList = document.createElement('ul');

        // Loop through the user data and add each name as a list item
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Add the list to the page
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle any errors that occur during fetching
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}
