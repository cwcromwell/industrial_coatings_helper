# The industrial coatings helper project

The project has two aspects: 

* A web-based app for building coatings specifications
* A command line utility with more functionality than the web app, for future growth 

## The web app

The [coatings calculator](git@github.com:paint-stak/industrial_coatings_helper.git) is a simple, one-page web app for industrial painters, coatings inspectors, coatings tech reps and project managers. 

You can input the data that your stakeholders give you:  

* Specific products to apply
* Number of coats
* Dry film thickness required. 

You receive a detailed specification that includes:

* Wet film thickness
* Min and max dry times, derived from the manufacturer's specifications for the prodcut you're applying and the product in the next coat.
* Mix ratios
* Induction times (if applicable)
* Mix and max temperatures acceptable for application.

### Web app Quickstart
Start on the front page of the application.

1.) Enter the number of coats. Then press "go."
2.) Complete the form on this page, including: 
* Average expected temperature (in Farenheit degrees).
Each of the remaining rows represents one coat of paint.
* On each row, choose the product for that coat.
* On each row, whose minimum dry film thickness for that coat.
3.) When the form is complete, press **Calculate**.
   RESULT: You'll see a table with data on all your coats of paint, which you can copy past into excel or MS Word.

#### Error handling

If you've asked the calculator to include something in the paint spec that isn't recommended by the manufacturer, you won't see any data for one or more of the coats. Instead, the table will contain this error message: "Error: Incompatible products or no overcoating data exists."

That error tells you that one of the following issues is present: 
* The products are completely incompatible. For example indicating an epoxy primer over the top of a polyurethane topcoat or an AF topcoat will result in this error.
* The manufacturer simply does not provide instructions for overcoating with the products you specified. Generally, manufacturer data describes how to overcoat within the same family of products. Changing brands between coats might seem like a good idea, but it hasn't been tested and dry times are not published.

If you want to mix brands or use a topcoat from the same family that is not explicitely indicated in the data sheet for the basecoat -- talk to your coatings rep and ask them to write a specification, but don't be surprised if they're not allowed to offer a warranty. 

  
 
