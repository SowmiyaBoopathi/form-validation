Event Registration Form

A simple and responsive event registration form built with HTML, CSS, and JavaScript, featuring client-side validation and a success popup.
Table of Contents

    About the Project

    Features

    Technologies Used

    Setup and Usage

    Repository Name Ideas

About the Project

This project provides a basic web-based event registration form. It demonstrates fundamental web development concepts including:

    Structuring a form with HTML.

    Styling a form for a clean and responsive user interface using CSS.

    Implementing client-side form validation using JavaScript to ensure data integrity before submission.

    Displaying a custom success popup upon successful form validation.

Features

    User-Friendly Fields: Collects essential information like Full Name, Email, Phone Number, Age, Gender, Event Type, and a Message.

    Client-Side Validation:

        Validates required fields.

        Checks for valid email format (specifically @gmail.com in this implementation).

        Ensures phone number is 10 digits and numeric.

        Validates age (must be 18 or older).

        Ensures message length is at least 10 characters.

        Displays specific error messages for each invalid field.

    Responsive Design: Adapts to various screen sizes (desktop, tablet, mobile) for optimal viewing and usability.

    Success Popup: A custom modal popup appears upon successful form submission, providing a confirmation message to the user.

    Form Reset: The form fields are cleared after successful submission.

Technologies Used

    HTML5: For the basic structure of the form.

    CSS3: For styling the form and implementing responsive design with media queries.

    JavaScript (Vanilla JS): For client-side form validation and controlling the success popup.

Setup and Usage

To run this project locally, follow these simple steps:

    Clone the repository (or download the files):

    git clone <repository-url>
    cd <repository-name>

    (Replace <repository-url> and <repository-name> with your actual repository details once you create it.)

    Open the index.html file:
    Simply open the index.html file in your web browser. You can do this by double-clicking the file or by right-clicking and choosing "Open with" your preferred browser.

How to Use the Form:

    Fill in the required fields in the form.

    Attempt to submit the form.

    If there are any validation errors, corresponding error messages will appear below the fields, and a general alert will prompt you to correct them.

    If all fields are valid, a "Registration Successful!" popup will appear.

    Click the "Close" button or click outside the popup to dismiss it and reset the form.
