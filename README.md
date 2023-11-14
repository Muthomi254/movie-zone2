# MovieZone App

Welcome to MovieZone, a web application for managing and exploring your movie collection. This app is developed by Dan Munene.

## Table of Contents

        Overview
        Components
        UpdateMovies
        UpdateMovieModal
        Search
        MovieDescription
        Categories
        AddMovie
        UpdateMovieActions
        MovieCard

## Overview

MovieZone is a React-based web application designed to help users manage and explore their movie collections. The application includes features for adding new movies, updating movie details, searching for movies, and viewing detailed information about each movie. The user interface is built using React components, providing a seamless and interactive experience for users.

## Components
  ### 1.UpdateMovies Component

The UpdateMovies component allows users to update movie details. It presents a form with input fields for various movie attributes, enabling users to modify the information. Upon completing the update, the changes are sent to the server via a PATCH request.

  ### 2.The UpdateMovieModal component
 Serves as a modal container for the UpdateMovies component. It offers a user interface for both updating and deleting movies. Users can make modifications to the details and choose to delete the movie from the database.

  ### 3.The Search component 
Facilitates movie searching based on a specified search term. It features an input field for entering the search term and a button to initiate the search.
MovieDescription Component

  ### 4.The MovieDescription component 
Provides a detailed view of a movie's information. It displays data such as the movie's title, year of release, runtime, genres, plot, director, and more. Users can access this information in a modal.

  ### 5.The Categories component
 Offers a dropdown menu containing various movie genres. Users can select a genre from the menu to filter movies based on their category.

  ### 6.The AddMovie component
 Empowers users to add new movies to the database. It comprises a form with input fields for different movie attributes. Users can enter the details and click the "Add Movie" button to submit the information to the server.

  ### 7.UpdateMovieActions Component
The UpdateMovieActions component furnishes action buttons for updating and closing the update modal. It is utilized in conjunction with the UpdateMovieModal component.

  ### 8.MovieCard Component

The MovieCard component represents a movie card, showcasing a preview of the movie's poster, title, genre, and year of release. It is employed in various contexts such as the home page, edit page, and watchlist page.

## Technologies Used

The MovieZone application is built using the following technologies and libraries:

    React: The core framework for building the user interface and components.
    React Router: Used for handling navigation and routing within the application.
    Fetch API: Utilized to make asynchronous requests to the server for fetching and updating movie data.
    Bootstrap: Employed for styling and creating a responsive and visually appealing user interface.
    JSX (JavaScript XML): A syntax extension for JavaScript recommended for use with React to describe what the UI should look like.

## Getting Started

  ### Frontend link

https://main--unique-panda-3306ad.netlify.app/


  ### Backend link

https://movie-zone2-react.onrender.com/api/movies

<!-- To run the MovieZone application locally and explore its features, follow these steps:

    Clone the Repository:

    bash

git clone https://github.com/your-username/moviezone.git

Install Dependencies:

bash

cd moviezone
npm install

Run the Application:

sql

    npm start

    The application will be accessible at http://localhost:3000 in your web browser. -->

## Usage

    Navigate to the home page to view all movies.
    Explore different genres using the navigation menu.
    Add new movies by visiting the admin page.
    Update or delete existing movies using the edit page.
    Search for specific movies using the search functionality.

Feel free to customize and extend the application based on your specific use case!

## Known Bugs

There is a 3-4 seconds delay when loading the backend server.
One needs to refresh page so as to see changes.
## Contribution

If you'd like to contribute to the MovieZone project, please follow these guidelines:

    Fork the repository.
    Create a new branch for your feature or bug fix.
    Make your changes and ensure tests pass.
    Commit your changes with clear and concise messages.
    Push your changes to your fork.
    Submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

    Special thanks to Dan Munene for developing the MovieZone application.

## Contact
Email: dmunene202020@gmail.com

Feel free to reach out for any further assistance or inquiries! 🎉🎬