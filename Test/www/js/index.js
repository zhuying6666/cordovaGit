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
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    
       var btn = document.getElementById("test");
       
       btn.addEventListener("click",function(){
         //  console.log("11111");
          // cordova.plugins.MyToast.coolMethod('你好!我是JS中调用的代码', Success,Fail,);
          var arr =[];
          var data1 = document.getElementById("test1").value;
          var data2 = document.getElementById("test2").value;
          arr.unshift(data1,data2);
          console.log(arr);
          
          cordova.exec( Success,Fail,"MyToast","showToast",arr);
       });
       function Success(result){
            if(result!=null){
                console.log(result);     
                document.getElementById("result").innerHTML=result;
            }
              
            else{
                alert("no message");

            }
        }
    //    function Success(str){
    //         console.log(str);
    //    }
       function Fail(str){
           console.log(str);
       }
    },


    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

    }
};

app.initialize();