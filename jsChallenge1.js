document.getElementById("subscribe").addEventListener("click",
function(){
if(this.checked)
    {
        document.getElementById("subscribe").style.display = "block";
    }
else{
    document.getElementById("subscribe").style.display = "flex";
}

});

document.addEventListener("click", function(){
    let currentTime = new Date()
    alert(currentTime)
})