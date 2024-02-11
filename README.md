# GitHubAPIExplorer

---

# Dynamic GitHub Profile Card

This web application dynamically fetches and displays information from a GitHub user's profile using the GitHub API. The user can input their GitHub username, and the application will retrieve and display their profile information in a stylish profile card UI design.

## Features

- Fetches and displays the user's profile picture, name, bio, number of followers, and number of followings.
- Provides an input field for the user to enter their GitHub username.
- Updates the profile information in real-time as soon as the user inputs their username.
- Utilizes the GitHub API to retrieve user data.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter your GitHub username when prompted.
3. View the dynamic profile card displaying your GitHub profile information.
4. Explore your GitHub profile by clicking on the provided links.

## Technologies Used

- HTML
- CSS
- JavaScript
- GitHub API
  
---

## Note on Realtime Data Fetching

While it's possible to fetch realtime data from the GitHub API using techniques like `setInterval`, it's important to be aware of GitHub's rate limiting policies. GitHub imposes rate limits on API requests to prevent abuse and ensure fair usage for all users. Continuous polling of the API, especially from the same IP address, can lead to hitting these rate limits.

GitHub may restrict access or block the IP address if it detects excessive requests originating from the same machine. Therefore, it's not advisable to rely solely on `setInterval` for realtime data fetching, as it can result in hitting rate limits and potential disruption of service.

--- 

Feel free to customize this README according to your project's specific details and requirements.
