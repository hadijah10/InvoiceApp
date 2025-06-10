# Setting Up for developement.
1. Run git clone https://github.com/hadijah10/InvoiceApp.git to download the project file.
2. Run npm i to install the dependencies.
3. Run ng serve to start up a local development server.
## Building

To build the project run:

```bash
ng build
```

## Project Setup
1. npm install -g @angular/cli command was run to install angular globally on the local computer.
2. ng new <project-name> was run to create a new project. 
3. Run ng serve to start the local development server.
   
### Step 1
- The outline of project structure and that of routing was laid out.
- A profilebar branch was created for the navigation bar. This branch contains the navbar component.During this phase routing was setup.  
- The css starter files were put in place.

### Step 2.
- A service for the invoice containing its functionalities was created. 
- Routing was set up for the landing page, which displays the the data of each invoice. The Landing page was broken down into two parts with separate components created for each namely, the heading and invoice data. Both components were called in the landingpage component to be displayed. The invoiceheading branch holds the heading and the invoicedata branch holds the compoin
- The date and currency pip were imported and used to transform the data for the view.
- A service function was created to fetch the json data using httpclient to localstorage. 

### Step 3.
- The invoicedetail branch was created to render the details of an invoice.
- Dynamic routing using the in built router dependency was used for the routing and display off this route. 
- The Delete and Mark as paid functionality was implement with the help of the activatedroute to and a service created to modify the properties of an invoice data.

### Step 4.
- A form branch for the form component was created. The formbuilder, Formgroup , formcontrol and formarray modules were used to control the form. The form made use of validators to verify the sanity of the user's input . It takes in props to determin whether it should be rendered as a new invoice form or an edit form.
- Routing for the creating a new invoice was created.
- The function for creating a new invoice made used of a service with received the formdata as an argument.

### Step 5.
- Am editinvoice branch was created for the edit invoice page. Routing configurations for this page was made and the functionalities implememted.