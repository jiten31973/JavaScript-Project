
(function(){

    let screen = document.querySelector(".srceen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".button-clear");
    let equal = document.querySelector(".button-equal");

    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    //equal.addEventListener("click", function(e)
    equal.addEventListener("click", function(e){
        if(screen.value === '')
        {
            screen.value = "";
        }
        else
        {
            let answer = eval(screen.value)
            screen.value = answer;
        }
    })

    

    clear.addEventListener("click", function(e){
        screen.value = "";

    })

})();

