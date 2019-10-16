var certificationRecordApp = new Vue({
  el: '#certificationRecordApp',
  data: {
      currentCID: {},
      certRecord: [],
      members: []
  },
  methods: {
    getCID() {
      var url = new URL(window.location);
      var params = new URLSearchParams(url.search);
      this.currentCID = params.get('cId');
    },
    fetchCID() {
      fetch('api/certInfo/index.php?cId='+ this.currentCID)
      .then( response => response.json() )
      .then( json => { this.certRecord = json } )
    },
    fetchMembers() {
      fetch('api/certMembers/index.php?cId=' + this.currentCID)
      .then( response => response.json() )
      .then( json => { this.members = json } )
    }

  }, // end methods
  created() {
    this.getCID();
    this.fetchCID();
    this.fetchMembers();
  }
});
