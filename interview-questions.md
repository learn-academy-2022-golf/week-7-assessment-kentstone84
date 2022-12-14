 # ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Foreign keys are exteremly important in a relational database and forgetting the foregin key is not necessarily grave mistake. Adding a foregin key is as simple as creating an association between the student with the cohort. Your Cohort, using the has_many will maintain the primary key and the student using belongs_to will assocate to the Cohort. You will want to either use or add a Student ID to the Cohort and in the Student relational database you will use what Cohort they are in. Your primary key will be the Student ID in both databases but will be the foreign key belongs in the Cohort. 

Researched answer: Forign keys are important for linking relational databases. We use this to minimize repeaditive data. Say the student comes back for a second cohort but has a different address. When a staff member searches for the students address there could be two different entries. Using a relational database with one model for students using Cohort using student ID as the foreign key you remove the possibility of excess data or wrong data. When the student returns their information would be updated under the Student model and then using their student ID in the new cohort it would allow proper tracking. 

2. Which RESTful routes must always be passed params? Why?

Your answer:  This question is difficult. Are we talking CRUD within the rails routing or are we asking about custom routes using :collection and .map resources?  Creating and updating should be done using params but can always be hardcoded. Are we asking from the perspective of the designer or hacker? That makes this question quite deep. Because if we are discussing security that answers your why but to dig into the why a bit more its about clean data. You want to ensure the database is valid and not having a sql injection taking place. 

Researched answer: Creating and updating RESTful routes must by done by passing params. Using strong params protect the validity of the database while creating and updating to ensure the security is maintained in the database. 

3. Name three rails generator commands. What is created by each?

Your answer: Rails generate resourse - This create both a model and a controller, Rails generate controller, creates a controller, and Rails generate model creates a new model that you can add specific columns to fill with data. 

Researched answer: Rails generate controller is used to create a controller within the model. You use a specific naming convention to create a path
'parent_module/controller_name' and a example of this would be rails generate controller Rolodex first_name last_name phone_number address. The generate controller uses specific parameters in the form of generate controller ControllerName Thing1 Thing2... Rails generate model creates a model using a naming convention and fields to be filled in with data. rails generate model Rolodex First_name:string. When creating a new model it must be either CamelCased or under_scored, and an optional list of attribute pairs as arguments.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students 
This will retrieve all instances of students in the database, Index 

action: "POST" location: /students
This will create a new instance of Student in the database, Create

action: "GET" location: /students/new
This will send an HTML form to the user to send their info into the database creating a new instance, New

action: "GET" location: /students/2
This will send back one instance of the students (2), Show

action: "GET" location: /students/2/edit
This will update the instance from the HTML form, Edit

action: "PATCH" location: /students/2
This is a set of instructions on how to modify this instance in the database Overwrite student with the ID of two., Update

action: "DELETE" location: /students/2
This will delete that instance from the database, Destroy

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1)As a user I can give a name to my to do list.

2)As a user I can add a task to my to do list.

3)As a user I can add a description and details to my task.

4)As a user I can mark my task as completed.

5)As a user I can see my completed tasks.

6)As a user I can see how long the task has been pending. 

7)As a user I can add more to do lists based on over all task (Work)(Chores)(School).

8)As a user I can edit the tasks description or details.

9)As a user I can rearrenge the order of my tasks.

10)As a user I can delete a full to do list. 

 