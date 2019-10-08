CREATE DATABASE ocfr_team24;

UUSE ocfr_team24;

CREATE TABLE Person (
pId varchar(64) NOT NULL PRIMARY KEY,
firstName varchar(64),
lastName varchar(64),
gender char(1),
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

CREATE TABLE Certification (
cId varchar (64) NOT NULL PRIMARY KEY,
agency varchar(64),
certName varchar(64),
expiry int
);

CREATE TABLE CurrentCert (
pId varchar(64) NOT NULL,
cId varchar(64) NOT NULL,
renewedDate date,
expDate date,
PRIMARY KEY(pId, cId),
FOREIGN KEY (pId)
  REFERENCES Person(pId)
  ON DELETE CASCADE,

FOREIGN KEY (cId)
  REFERENCES Certification(cId)
  ON DELETE CASCADE
);
