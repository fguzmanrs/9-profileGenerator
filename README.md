# Developer Profile Generator

This is a command-line application that dynamically generates a PDF profile from a GitHub username. 

## User Story

AS A product manager
I WANT a developer profile generator
SO THAT I can easily prepare reports for stakeholders.

## Business Context

When preparing a report for stakeholders, it is important to have up-to-date information about members of the development team. Rather than navigating to each team member's GitHub profile, a command-line application will allow for quick and easy generation of profiles in PDF format.

## Profile Generator works as follows:

* GIVEN the developer has a GitHub profile ...

* User invokes the application with the command: 

  * ```sh
  * node index.js
  * ```

* The user will be prompted for the developer's Github username and a favorite color, used as the background color for cards.

* A PDF is generated and populated with the following:

  - Profile image 
  - User name
  - Links to the following:
    - User location via Google Maps
    - User GitHub profile
    - User blog
  - User bio
  - Number of public repositories
  - Number of followers
  - Number of GitHub stars
  - Number of users they follow

<!-- * Refer to GIF below for an app demo.

 insert GIF demonstrating the app functionality -->

<!-- * Example of GitHUb profile as a PDF

 insert PDF of GitHub profile -->

<!-- * Try it our at: https://fguzmanrs.github.io/9-profileGenerator/ -->

<!-- ## Future version to include: 

  a working app :/ -->