var container = document.getElementById('container');
    window.onload = function(){
       container.textContent = add_new_chars(3);
    }

    window.addEventListener("keyup", function(e) {
        //console.log(e.key);
        var count = 0;//count key input error
        var firstChar = container.textContent.substring(0, 1);
        if(e.key == firstChar){ 
            container.textContent = container.textContent.substring(1, container.textContent.length);//delete first char
        } else {
            //container.textContent += e.key;
            if (count++ >= 2) {
                container.textContent += add_new_chars(6 , false);
                count = 0;
            }
        }
        container.textContent += add_new_chars(3);
    });

    function add_new_chars(x, b = true){
        var numsize = x;
        if(b){
            numsize = Math.floor(Math.random() * x) + 1; 
        }
        var rand_func = '';
        for (let i = 0; i < numsize; i++) {
            var numchars = 97 + Math.floor(Math.random() * 26); 
            rand_func += String.fromCharCode(numchars);
        }
        return rand_func;
    };