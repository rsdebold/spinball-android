var $$ = Dom7;
var db = '';
var WifiManager = '';
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework.spinball', // App bundle ID
  name: 'spinball', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },

    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
    updateComponent: function(obj) {
      if ( typeof(obj) != 'object') { obj = {text:obj}; }
      var text = obj.text;
      var status = obj.status || '...loading';
      var icon = obj.icon;
      var type = obj.type || 'start';
      var li = '';
      if ( type == 'start') {
        li = '<li id="' + text + '">' + text + 
          '<span class="status"></span>' +
          '<div class="progressbar-infinite color-red"></div>' + 
        '</li>';
        $$('#component-list').append(li);
      }
      if ( type == 'end') $$('#' + obj.text).find('.prograssbar-infinite').remove();
      $$('#' + obj.text).find('.status').text(status);

    }
  },
  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      app.methods.updateComponent('framework initialialized');
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.initialize(f7);
      }
    },
  },
});
app.methods.updateComponent('framework');

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});