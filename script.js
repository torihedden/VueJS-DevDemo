// Creating a Vue Instance
// pass in an options object
var welcome = new Vue({
  el: '#welcome',
  data: {
    contents: 'Welcome to Vue. The time is now ' + new Date()
  }
})

// "properties in data are only reactive if they existed when the instance was created"

var meetingAgenda = new Vue({
  el: '#meeting-agenda',
  data: {
    items: [
      {contents: 'Go over release calendar'},
      {contents: 'Demo work'},
      {contents: 'Any other announcements'}
    ]
  }
})

var meetingAnnouncement = new Vue({
  el: '#meeting-announcement',
  data: {
    usualMeetingTime : false
  }
})

var interactiveElement = new Vue({
  el: '#interactive-element',
  data: {
    developerName : 'Tori'
  },
  methods: {
    addTitle: function() {
      if (!this.developerName.includes(', Web Developer')){
        this.developerName += ', Web Developer'
      }
    }
  }
})

var lifecycle = new Vue({
  el: '#lifecycle',
  data: {
    imageSrc: 'https://vuejs.org/images/lifecycle.png'
  }
})
