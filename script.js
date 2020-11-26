var parentdiv=document.createElement('div');
//create a input to get dob from the user
var dob=document.createElement('input');
dob.setAttribute('type','date');
dob.id='dob';
dob.name='dob';
dob.classList.add('input-elem');
parentdiv.appendChild(dob);
//Button creation
var button=document.createElement('button');
button.innerHTML='Display age';
button.classList.add('btn');
button.setAttribute('onclick','agecalculation()');
parentdiv.appendChild(button);
//Create a div element to display a data
var displaydata=document.createElement('div');
displaydata.id='display-data';

function agecalculation(){
    var input=document.getElementById('dob').value;
    if(Date.parse(input)){
        var inputdate=new Date(input);
        var currentdate=new Date();

        var millsecdiff=parseInt(currentdate.getTime())-parseInt(inputdate.getTime());
        var secdiff=Math.floor(millsecdiff/1000);
        var min_diff=Math.floor(secdiff/60);
        var hourdiff=Math.floor(min_diff/60);
        var daydiff=Math.floor(hourdiff/24);
        var yeardiff=Math.floor(daydiff/365);
        var monthdiff=Math.floor((daydiff-(yeardiff*365))/30);
        var days=daydiff-(yeardiff*365)-(monthdiff*30);
//output to be displayed
displaydata.innerHTML = `YOUR AGE : ${yeardiff}years ${monthdiff}month ${days}days<br>`;
    }
    else{
        displaydata.innerText="Invalid selection of date";
    }
    document.body.appendChild(displaydata);
}
document.body.appendChild(parentdiv);