# CS601_HW5_Ngo

## Part 1 – JSON (25 Points)

Requirements:
1. Create an JSON document:
    a. You will be storing information about your college degrees earned
to date and those you currently working towards. For each degree,
store the following information:
        i. School
        ii. Program/Major:
        iii. Type (AA, BA, BS, MS, etc.)
     iv. Year conferred (future dates OK)
    b. Consider looking at my_favorite_movies.json in the lecture notes as
    an example
After you create your JSON file, validate it at http://jsonlint.com
    Assessment/Grading:
Your assignment submission will be scored by the following criteria:
1. Strict adherence to the requirements stated above: 80%
2. Code validates as valid JSON: 20%
Note: Preserve the code from this part of the homework, as you may be building
upon this in future assignments.


## Part 2 – JSON and Fetch (75 Points)
Using HTML 5, CSS, and JavaScript:

Requirements:
1. Upload your JSON file from Part 1 of this assignment to a web server.
a. Your instructor will post information about obtaining web server
space in the Class Discussion -> Common Area forum.
2. Create a JavaScript program that performs the following tasks:
a. An event occurs (mouse click):
i. Create a fetch request to return a promise
ii. Resolve the promise using the Response class
iii. Check the status code of the response
iv. Process the returned JSON data using JavaScript
3. Upload your JavaScript program to the same directory on the webserver
where your JSON file resides.
4. Run your program and verify it works as outlined above.
Assessment/Grading:
Your assignment submission will be scored by the following criteria:
1. Strict adherence to the requirements stated above: 70%
2. Code validates without errors (warnings are OK): 10%
3. Overall quality of work and effort as determined by your facilitator: 20%
Tip: You learned about JavaScript objects in Module 3. JSON objects are
JavaScript objects. You then learned how the DOM works and how to manipulate
it in Module 4 and how AJAX works in Module 5. You’ll need to string these
concepts together in order to programmatically implement part 2.a.vi.1 above.