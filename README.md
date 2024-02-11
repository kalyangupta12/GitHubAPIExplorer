# GitHubAPIExplorer

---

# GitHub Profile Card

A simple web application that dynamically fetches and displays information from a GitHub user's profile using the GitHub API. The application presents the fetched data in a stylish profile card UI design.

## Features

- Fetches and displays the user's profile picture, name, bio, number of followers, and number of followings.
- Includes a link to the user's GitHub profile.
- Updates the information in real-time every 100 milliseconds.

## Technologies Used

- HTML
- CSS
- JavaScript
- [Boxicons](https://boxicons.com/) - For icons

## Usage

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. View the dynamic profile card displaying information from the GitHub user "kalyangupta12".
4. Explore the GitHub profile by clicking on the GitHub icon.


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to suggest features, report bugs, or make improvements.
---

## Note on Realtime Data Fetching

While it's possible to fetch realtime data from the GitHub API using techniques like `setInterval`, it's important to be aware of GitHub's rate limiting policies. GitHub imposes rate limits on API requests to prevent abuse and ensure fair usage for all users. Continuous polling of the API, especially from the same IP address, can lead to hitting these rate limits.

GitHub may restrict access or block the IP address if it detects excessive requests originating from the same machine. Therefore, it's not advisable to rely solely on `setInterval` for realtime data fetching, as it can result in hitting rate limits and potential disruption of service.

--- 

Feel free to customize this README according to your project's specific details and requirements.
