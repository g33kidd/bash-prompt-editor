// if (Meteor.isClient) {
//   // counter starts at 0
//   Session.setDefault("counter", 0);

//   Template.hello.helpers({
//     counter: function () {
//       return Session.get("counter");
//     }
//   });

//   Template.hello.events({
//     'click button': function () {
//       // increment the counter when button is clicked
//       Session.set("counter", Session.get("counter") + 1);
//     }
//   });
// }

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }

if(Meteor.isClient) {

    Session.setDefault("username", "user");
    Session.setDefault("sysname", "Mac-mini");
    Session.setDefault("dir", "~");

    Template.terminal.helpers({
        username: function() {
            return Session.get("username");
        },

        sysname: function() {
            return Session.get("sysname");
        },

        dir: function() {
            return Session.get("dir");
        }
    });

    Template.terminal.events({
        'keyup #terminalProps': function(event, template) {
            Session.set("username", template.find('#username').value);
            Session.set("sysname", template.find('#sysname').value);
            Session.set("dir", template.find('#dir').value);
        }
    });

}

if(Meteor.isServer) {
    Meteor.startup(function() {
    });
}