    function fetchDiv(){ var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //var mObj = JSON.parse(this.responseText);
                document.getElementById("add_card").innerHTML += this.response;
            }
        };
        xmlhttp.open("POST", "http://themes.ov/exe/test", true);
        xmlhttp.send(); 
    }           

    var lazyLoadScroll = function(e){
        var mainHeight = document.getElementById("add_card").offsetHeight;
        var windowHeight= window.innerHeight;
        scrollPosition=document.getElementsByTagName("main")[0].scrollTop;
        if (mainHeight-600 <= scrollPosition) {
            fetchDiv();
        }
        //console.log(mainHeight+','+windowHeight+','+scrollPosition);
    }
