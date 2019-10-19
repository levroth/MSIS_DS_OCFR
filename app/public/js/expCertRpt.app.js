var ocfrExpCertRptApp = new Vue({
  el: '#ocfrExpCertRptApp',
  data: {
      expMembers: [],
      expCerts: [],
      filter: {
        certName: '',
      }

  },
  methods: {
    fetchExpMembers() {
      fetch('api/expiredMembers')
      .then(response => response.json())
      .then(json => { ocfrExpCertRptApp.expMembers = json})
    },
    fetchExpCerts() {
      fetch('api/expiredCerts')
      .then(response => response.json())
      .then(json => { ocfrExpCertRptApp.expCerts = json})
    },
    createCSV(event) {
      var csv = 'First Name, Last Name, Certification, Agency, Expiration Date\n';
      for (var i in this.expMembers) {
        if((this.filter.certName==''||
          this.filter.certName==this.expMembers[i].certName)) {
            csv += ('' + this.expMembers[i].firstName + ',' +
                    this.expMembers[i].lastName + ',' +
                    this.expMembers[i].certName + ',' +
                    this.expMembers[i].agency + ',' +
                    this.expMembers[i].expDate + '\n');
          }
      }

      // taken from https://code-maven.com/create-and-download-csv-with-javascript
      var hiddenElement = document.createElement('a');
      hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
      hiddenElement.target = '_blank';
      hiddenElement.download = 'expiredCertReport.csv';
      hiddenElement.click();
    }
  },
  created() {
    this.fetchExpMembers();
    this.fetchExpCerts();
  }
});
