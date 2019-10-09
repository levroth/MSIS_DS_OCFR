CREATE DATABASE ocfr_team24;

USE ocfr_team24;

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

INSERT INTO Person(pId, firstName, lastName, gender, dob, position, radioNumber, stationNumber, isActive, startDate, email, mobilePhone, address)
VALUES ('ABCD-1234-EFGH', 'John','Stapleton','M', '1980-10-10','Officer','B-2','2',TRUE,'2010-08-10','Jstapleton@OCFR.gov','7064104933','212 Thomas Way, Watkinsville, GA, 30621'),
('EFGH-5678-IJKL', 'Denise','Richars','F', '1965-07-18','Chief','A-4','1',TRUE,'2002-05-05','Drichards@OCFR.gov','7062253914','400 Curry Court, Watkinsville, GA, 30621'),
('MNOP-9101-QRST', 'Zach','Lyle','M', '1990-06-02','Trainee','C-6','2',TRUE,'2018-01-10','Zlyle@OCFR.gov','7068875524','317 Murray Avenue Apartment C, Watkinsville, GA, 30621');

INSERT INTO Certification(cID,agency,certName,expiry)
VALUES ('5525','ECC', 'CPR','2'),
('1346', 'National Registry of Emegency Medical Technicians','EMT','3'),
('4219','National Environmental Trainers', 'HAZMAT','5');

INSERT INTO CurrentCert (pId, cId, renewedDate, expDate)
VALUES ('ABCD-1234-EFGH','1346', '2018-10-15','2021-10-15'),
('ABCD-1234-EFGH','5525','2017-12-12','2019-12-12'),
('EFGH-5678-IJKL','1346', '2019-05-07','2022-05-07'),
('EFGH-5678-IJKL','5525', '2019-04-03','2021-04-03'),
('EFGH-5678-IJKL','4219', '2016-02-01','2021-02-01'),
('MNOP-9101-QRST','5525','2018-11-11','2020-11-11');
