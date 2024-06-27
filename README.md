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
