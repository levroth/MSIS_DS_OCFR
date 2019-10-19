var ocfrMemRptApp = new Vue({
  el: '#ocfrMemRptApp',
  data: {
      members: [],
      stations: [],
      radios: [],
      filter: {
        radioNumber: '',
        stationNumber: ''
      }

  },
  methods: {
    fetchMember() {
      fetch('api/members')
      .then(response => response.json())
      .then(json => { ocfrMemRptApp.members = json})
    },
    fetchStations() {
      fetch('api/stations')
      .then(response => response.json())
      .then(json => { ocfrMemRptApp.stations = json})
    },
    fetchRadios() {
      fetch('api/radios')
      .then(response => response.json())
      .then(json => { ocfrMemRptApp.radios = json})
    },
    createCSV(event) {
      var csv = 'First Name, Last Name, Radio Number, Station Number, Email\n';
      for (var i in this.members) {
        if(((this.filter.stationNumber==''||
          this.filter.stationNumber==this.members[i].stationNumber) &&
          (this.filter.radioNumber==''||
          this.filter.radioNumber==this.members[i].radioNumber))) {
            csv += ('' + this.members[i].firstName + ',' +
                    this.members[i].lastName + ',' +
                    this.members[i].radioNumber + ',' +
                    this.members[i].stationNumber + ',' +
                    this.members[i].email + '\n');
          }
      }

      // taken from https://code-maven.com/create-and-download-csv-with-javascript
      var hiddenElement = document.createElement('a');
      hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
      hiddenElement.target = '_blank';
      hiddenElement.download = 'memberReport.csv';
      hiddenElement.click();
    }
  },
  created() {
    this.fetchMember();
    this.fetchStations();
    this.fetchRadios();
  }
});
