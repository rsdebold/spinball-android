/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var cordovaApp = {
    f7: null,
    // Application Constructor
    initialize: function(f7) {
        app.methods.updateComponent('mobile device initializing');
        cordovaApp.f7 = f7;
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        app.methods.updateComponent('binding mobile events');
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.methods.updateComponent('mobile device ready');
        cordovaApp.receivedEvent('deviceready');
        app.methods.updateComponent('database');
        var opt = {adapter:'idb'};
        app.methods.updateComponent({text:'database'});
        db = new PouchDB("spinball",opt);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('receiveed event: ' + id)
    }
};
