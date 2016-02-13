if (Meteor.isClient) {

  console.log("Hello Ahmed");


  Template.amsterdamMap.helpers({

      'showMap' : function(){
          return "Ahmed Aziz. Amsterdam 2016"
    }
  });

    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });

    Template.amsterdamMap.rendered = function() {
        L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';

        var showMap = L.map('showMap', {
            doubleClickZoom: false
        }).setView([52.37783, 4.89995], 13);

        L.tileLayer.provider('MapQuestOpen.OSM').addTo(showMap);
        showMap.spin(false);


    };



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
