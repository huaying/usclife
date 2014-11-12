var header = ''
+'        <div data-role="panel" data-position="left" data-display="push" id="menu" class="menubar">'
           +' <a href="index.html" class="ui-btn ui-btn-b">Home</a>'
           +' <div data-role="collapsibleset" data-corners="false" data-iconpos="right" class="login-list"">'
           +'     <div data-role="collapsible" data-corners="false" data-collapsed-icon="arrow-d" data-expanded-icon="arrow-d">'
           +'         <h3 class="collpase-center">Event</h3>'
           +'         <ul class="collpase-center" data-role="listview" data-inset="false" data-icon="false">'
           +'             <li><a href="createevent.html">Create Events</a></li>'
           +'             <li><a href="myevent.html">My Events</a></li>'
           +'             <li><a>Upcoming Events</a></li>'
           +'             <li><a href="event_history.html">Event History</a></li>'
           +'             <li><a>Recommended Events</a></li>'
           +'         </ul>'
           +'     </div>'
           +' </div>'
           +' <a href="friend.html" class="ui-btn ui-btn-b login-list"">Friend</a>'
           +' <a href="" class="ui-btn ui-btn-b logout-btn login-list">Logout</a>'
           +' <a href="signin.html" class="ui-btn ui-btn-b  logout-list">Sign in</a>'
           +' <a href="about.html" class="ui-btn ui-btn-b">About Us</a>'
           +' <a href="feedback.html" class="ui-btn ui-btn-b">Feedback</a>'
+'        </div>    '
       +' <div data-role="header" class="header">'
       +'     <a href="#menu" class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-btn-inline ui-icon-bars ui-btn-icon-notext"></a>'
       +'     <h1>USCLife</h1>'
       +'     <a class="thumb-box ui-corner-all" href=""><img class="thumb" src=""/></a>'
       +' </div>'

       , store = localStorage
       , pagebeforeshow = function(){
           $('.menubar').panel('close').remove();
           $('.header').remove();
            $.mobile.activePage.prepend(header).trigger('create');
            
            if(typeof store.login === "undefined"){
                $('.thumb').attr('src','images/anony.png');
                $('.login-list').hide();
                $('.logout-list').show();
            }else{
                $('.thumb').attr('src','images/jacob.png');
                $('.login-list').show();
                $('.logout-list').hide();
            }
       }
       , user = function(){
            if(typeof store.login === "undefined"){
                console.log("not login");
                $.mobile.navigate("signin.html");
            }else{
                console.log("login");
                $.mobile.navigate("profile.html");
            }
         }
        ,login = function(){
            store.login = 1;          
        }
        ,logout = function(){
            delete store.login;
            $(location).attr('href','index.html');
        }
       ;


   $(document).off('pagebeforeshow').on('pagebeforeshow',pagebeforeshow)
              .off('click','.thumb').on('click','.thumb',user)
              .off('click','.login-btn').on('click','.login-btn',login)
              .off('click','.logout-btn').on('click','.logout-btn',logout)
              ;
       