document.getElementById("ch3form").addEventListener("submit", function(e){
    let date = document.querySelectorAll("input[name='gradedate']:checked").length;
    
    let standing = document.querySelectorAll("input[name='standing']:checked").length;

    if (data === 0 || standing === 0)
    {
        alert("You must select a choice from each set of radio buttons");
        e.preventDefault();
    }
})