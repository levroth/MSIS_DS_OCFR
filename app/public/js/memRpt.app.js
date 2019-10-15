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
    }
  },
  created() {
    this.fetchMember();
    this.fetchStations();
    this.fetchRadios();
  }
});
