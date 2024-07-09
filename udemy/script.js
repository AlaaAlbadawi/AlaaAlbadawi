function clearform(){
   alert("eefrgregr") ;

}
function hideptagsusingJS(){
   let ptag= document.getElementsByTagName('p');
   for (let item of ptag)
    {
        item.style.visibility='hidden';
        item.style.display='none';
    }
}
function showptagsusingJS(){
    let ptag= document.getElementsByTagName('p');
    for (let item of ptag)
     {
         item.style.visibility='visible';
         item.style.display='block';
     }
 }