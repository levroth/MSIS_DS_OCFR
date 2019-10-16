var memberRecordApp = new Vue({
  el: '#memberRecordApp',
  data: {
      currentPID: {},
      memberRecord: [],
      certificates: []
  },
  methods: {
    getPID() {
      var url = new URL(window.location);
      var params = new URLSearchParams(url.search);
      this.currentCID = params.get('pId');
    },
    fetchPID() {
      fetch('api/memInfo/index.php?pId='+ this.currentPID)
      .then( response => response.json() )
      .then( json => { this.memberRecord = json } )
    },
    fetchMembers() {
      fetch('api/memCerts/index.php?pId=' + this.currentPID)
      .then( response => response.json() )
      .then( json => { this.certificates = json } )
    }

  }, // end methods
  created() {
    this.getPID();
    this.fetchPID();
    this.fetchMembers();
  }
  });
