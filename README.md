# Vaccination Data Dashboard

This application is a dashboard that displays the latest COVID-1** vaccination data.

### Functionality

* Upon opening the page, an HTTP GET request is made to a specified API endpoint.
* A loader is displayed while the data is being fetched.
  
### Upon successful retrieval of data:

* The last 7 days of vaccination data are visualized using a BarChart component from recharts.
  
### Vaccination data is segmented and displayed as two separate PieCharts (using recharts) for:
* Vaccination by Gender
* Vaccination by Age
* In case of an unsuccessful GET request, a FailureView component is displayed.
  
## Dependencies

### This application relies on the following external libraries:

* recharts: For creating charts (https://recharts.org/)

## Technologies Used:

* **React JS:** The main library for building the user interface (UI) of your application. React uses components to create reusable UI elements and manages their updates efficiently.
* **React Third-Party Packages:** You're likely utilizing libraries from the React ecosystem to enhance your application's functionality. In this case, you're specifically using recharts 
   for creating various charts.
* **JSX:** This syntax extension for JavaScript allows you to write HTML-like structures within your code, making it easier to define the UI components.
* **CSS:** This stylesheet language is used to define the visual presentation of your application, including layout, colors, fonts, and more.
* **REST APIs:** Your application interacts with a backend API (likely a RESTful API) using HTTP GET requests to retrieve the COVID vaccination data.


