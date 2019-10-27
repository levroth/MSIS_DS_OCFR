#MSIS Project
This is the repo for our MSIS DS group Project
## Our site
Our site can be found here: http://ec2-3-80-193-36.compute-1.amazonaws.com/

## Navigation

### Home Page
On our first page, you will find two tables. The Membership table has a list of all the employees in the system. The Certification table has a list of all the certifications in the table.

Underneath each table is the respective button to add a record to the table.

Selecting a row from either table will take you to that record's information page.

### Expired Cert. Report
To access the Expired Cert. Report., you can select the respective name from the navbar. Upon arrival to the page, you will see a table with all members who have expired certifications as of today.

There is a filter to allow you to choose which expired certifications you would like to see.

Additionally, you can export the current data in the table to a CSV file utilizing the export button.

### Member Report
To access Member Report, you can select the respective name from the navbar. Upon arrival to the page, you will see a table with all members, their station, their number, and their email.

This table can be filtered by station and or radio number.

Additionally, you can export the current data in the table to a CSV file utilizing the export button.

### Create New Member Record
This is accessible by selecting the create button under the member record table from the home page. Upon arrival, you will see a form with inputs. The following are required inputs:
* First Name
* Last Name
* Gender
* Date of Birth
* Position
* Radio Number
* Station Number
* Active Status
* Start Date
* Email

Any phone numbers that are entered must be done so in the following format: ###-###-####

To submit the member, click the Create Member button at the bottom. Note that an employee ID will automatically be generated.

Submission of a new record will return you to the home page after a popup confirms the record submission.

### Create New Certification Record
This is accessible by selecting the create button under the certificate record table from the home page. Upon arrival, you will see a form with inputs. The following are required inputs:
* Certification Agency
* Certification Name
* Expiration Period

Note that Expiration Period must be a positive integer.

To submit the certificate, click the Create Cert. button at the bottom. Note that a certification ID will automatically be generated.

Submission of a new record will return you to the home page after a popup confirms the record submission.

### View, Delete, & Update Membership/Add Certification to Member

#### Member Record Information
To view and update a member record or add a certification to a member, you first must select a member from the Membership table on the home page. You will be redirected to a page that has the member information populating form fields.

Any changes you would like to make can be done in those form fields. Upon completion of the edits, select the Update Member button underneath. You will receive a confirmation of the update and remain on the same page. Note that the same required fields and formats must be followed from the Create New Member Record documentation

If you want to delete a member, select the Delete Member button underneath the form. This will also provide confirmation and then return you to the home page.

#### Certifications for Member Record
The second table titled Certifications shows the user all the certifications (current and expired) for the given member record. There is a delete button that also allows the user to remove a certification from this field if needed.

To add or update a certification, utilize the form underneath the Certifications table. There are two drop downs and one date field that are required. The two drop downs are based on certifications already in the system. If you need a certification not found there, you must first create a new certification record in the system.

Upon selecting the add/update cert, confirmation will be provided. If the certification is new to the member, a new certification ID will be generated. If the certification exists, the newly provided information will be updated into the system. Expiration dates are automatically calculated from the renew date provided and the expiry time selected.

### View, Delete, & Update Certification

#### Certificate Record Information
To view and update a certification record, you first must select a certification from the Certification table on the home page. You will be redirected to a page that has the certification information populating form fields.

Any changes you would like to make can be done in those form fields. Upon completion of the edits, select the Update Cert. button underneath. You will receive a confirmation of the update and remain on the same page. Note that the same required fields and formats must be followed from the Create New Certification Record documentation

If you want to delete a certification, select the Delete Member button underneath the form. This will also provide confirmation and then return you to the home page.

#### Members with Certifications
A second table is present on this page. This table shows all the members who hold the selected certification as well as basic information about their record. Any changes you want to make to this table can be done by selecting the member from the home page's Membership table and following the steps outline in a previous section.
