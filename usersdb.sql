Create database LoginSystem;

Create Table loginsystem.users(
	ID int not null auto_increment,
    username varchar(50),
    `password` varchar(500),
    primary key (ID)
);

Create Table loginsystem.comments(
	ID int not null auto_increment,
    `comment` varchar(100),
    userID int, 
    primary key (ID),
    foreign key (userID) references loginsystem.users(ID)
);

SELECT loginsystem.users.username, loginsystem.comments.`comment` FROM loginsystem.users
INNER JOIN loginsystem.comments ON loginsystem.users.ID = loginsystem.comments.userID;