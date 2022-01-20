create database CampusDB;

\c campusdb;


create table campuses(
    name varchar(255) NOT NULL CHECK(NOT name='') PRIMARY KEY,
    imageUrl varchar(255) DEFAULT 'https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png', 
    address varchar(255) NOT NULL CHECK(NOT address=''),
    description text
);
create table students(
    studentId int NOT NULL PRIMARY KEY,
    firstName varchar(255) NOT NULL CHECK(NOT firstName=''),
    lastName varchar(255) NOT NULL CHECK(NOT lastName=''),
    campus varchar(255),
    email varchar(255) NOT NULL CHECK(email LIKE '_%@%_'),
    imageUrl varchar(255) DEFAULT 'https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png', 
    gpa decimal CHECK(gpa >= 0.0 AND gpa <= 4.0),
    FOREIGN KEY (campus) REFERENCES campuses(name)
);

insert into campuses values('Brooklyn College',DEFAULT,'Brooklyn,NY','details go here');
insert into campuses values('Hunter College',DEFAULT,'Manhattan,NY','details go here');
insert into campuses values('XYZ University',DEFAULT,'Somewhere,Someplace','details go here');
insert into students values(1,'John','Doe','Brooklyn College','email@here',DEFAULT,3.0);
insert into students values(2,'Failing','Student','Hunter College','a@b',DEFAULT,0.0);
insert into students values(3,'Honors','Student','Brooklyn College','c@d',DEFAULT,4.0);
insert into students values(4,'First','Last','XYZ University','name@email',DEFAULT,2.0);
insert into students values(5,'Drop','Out',NULL,'dropout@email',DEFAULT,1.234);

table students;
table campuses;

select * from students where students.campus = 'Brooklyn College';
