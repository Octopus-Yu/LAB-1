Interaction Programing - Lab assignment 3 - HTML
=================================================

This project contains the startup code for HTML version of the Interaction Programing course lab assignment. For more details on how to complete the assignment follow the instructions on the [course website](https://www.kth.se/social/course/DH2642).

This is Yu and Xiaoyun's project for lab 3. Now the data is from dynamic onling database and we use fetch() to get the data by the API https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search? . In this way, you can search the dish by type or using the keyword or just combine them two to search a group of dishes. Now, the number of result is setted as 20 in the view. And we use the feature of asynchronous loading to achieve the show and hide loading page when searching in the dish search view. There will be a loading sprinner view showed when loading the data from the web and after the data is accessed, the result will be showed and the loading sprinner view will be hidden. Notice, the API_KEY.js is saved in .git file.




What's in the project
-----

#### Current being used file:

* DinnerPlanner.html The only html file used in this project.

* js/model/dinnerModel.js - is JavaScript file that contains the model code. The file contains the model (dish, ingredient and general dinner model) as well as methods and comments that you need to fully implement to support the dinner functionalities (guests, selected dishes, etc.) Now, it has a _observers array to store the observers information as a observeral subject. Also, there are addObserver(observer) function and notifyObservers(arg) function to support the observeral features. What's more, we use the fetch() to get the dynamic data by https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search? and use promise.then() and promise.catch() to control the asynchronous loading process.

* .git/API_KEY.js save the api key

* js/view/ - Folder containing views

* js/app.js- this is the overall code of the application. It is responsible for initial setup of the app (when the page loads for the first time). Besides that, the GeneralStateController class is achieved here. In lab3 3 more statecontroller functions are added to control the show and hide of loading, result and noresult view.

* images/ - folder contains some pictures you can use for your dishes

* XYYCSS.cssCss files for the style.

* DishitemView View for dish item.

* SidebarView Side bar view code. It is a observer to the dinnerModel data by using the "model.addObserver(this);" and wirte the update function to dynamic update the side bar view with the change of the data(Now, maily the menu content like price changed with the number of guests changed by clicking the + - buttons. )

* DishSearchView view of showing the dish search result

* DishDetailView for showing dish detail.

* PaymentView for payment view.

* PaymentitemView for dish item in payment view.

* RecipeView for recipe showing. 

* DishSearchViewController.js File used to control the dish search view by using listener event. In this file, there is a controller class to listen to the search button and drop down form to select the category of dies. The dish search view will dynamic change with these buttons. For example, click the drop down form and choose "dessert" ,the dish search view will change and there will be the result listing all the dessert of the menu.

* SideBarViewController.js File used to control the sidebar view. In this file, there is a controller class to listen the plusGuestBtn click event and minusGuestBtn click event. It will change the data in model.

* WelcomePageViewController.js File used to control the welcom page. In this file, there is a controller to listen to the click event of the "CreatNewDinner" button to switch the display of view to change the page content. Also, generalStateController is used to show or hide views there.

* PaymentViewController ...

* RecipeViewController ...

-----

#### Old files whihc may be used in the future:

Screen1-6.html Html layout code for the web lab1 project.
*InterfaceView2-5 Javascript code for each page view *index.html - the only HTML page you will have in this project (though while testing you can create more to make it easier). You will need to implement the skeleton of the layout there and then through code (JavaScript) create the rest *ExampleView the example view file.
