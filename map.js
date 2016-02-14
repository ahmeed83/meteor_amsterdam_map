if (Meteor.isClient) {

  console.log("Hello Ahmed");


  Template.amsterdamMap.helpers({
      'text': function () {
          return "text van template helper"
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

        L.map('showMap', {
            searchControl: {layer: searchLayer}
        });


        //L.Routing.control({
        //    waypoints: [
        //        L.latLng(57.74, 11.94),
        //        L.latLng(57.6792, 11.949)
        //    ],
        //    routeWhileDragging: true
        //}).addTo(showMap);

        showMap.spin(false);
    };

    Template.addDestination.events({
        'submit form': function () {
            event.preventDefault();

            var start = event.target.start.value;
            console.log(start);

            var end = event.target.end.value;
            console.log(end);
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}
