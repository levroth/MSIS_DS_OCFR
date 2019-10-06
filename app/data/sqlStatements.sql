CREATE DATABASE ocfr_team24;

CREATE TABLE Person (
pId primary key varchar(64),
firstName varchar(64),
lastName varchar(64),
Gender char(1),
dob date,
position varchar(64),
radioNumber varchar(64),
stationNumber int,
isActive boolean,
startDate date,
email varchar(64),
homePhone varchar(64),
mobilePhone varchar(64),
workPhone varchar(64),
address varchar(64)
);
CREATE TABLE CurrentCert (
pId foreign key varchar(64),
cId foreign key varchar(64),
renewedDate date,
expDate date
);
CREATE TABLE Certification (
cId primary key varchar (64),
agency varchar(64),
certName varchar(64),
expiry int
);
