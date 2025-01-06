var id=parseInt(prompt("Please enter your student Id"))
document.write("Your Student ID is :"+id+"<br>")
var name=prompt("Please enter your student name")
document.write("Your Student Name is:"+name+"<br>")
var m1=parseInt(prompt("Please enter your 1st mark"))
document.write("Your 1st Mark is :"+m1+"<br>")
var m2=parseInt(prompt("Please enter your 2nd mark"))
document.write("Your 2nd Mark is :"+m2+"<br>")
var m3=parseInt(prompt("Please enter your 3rd marks"))
document.write("Your 3rd Mark is :"+m3+"<br>")
var m4=parseInt(prompt("Please enter 4th mark"))
document.write("Your 4th Mark is :"+m4+"<br>")
var m5=parseInt(prompt("Please enter 5th mark"))
document.write("Your 5th Mark is :"+m5+"<br>")
var total= m1+m2+m3+m4+m5
document.write("Your Total is :"+total+"<br>")
var average=total/5
document.write("Your Average is :"+average+"<br>")
if(average>=90)
{
    document.write("Your Grade is : A")
}
else if((90>average)&&(average>80))
{
    document.write("Your Grade is : B")
}
else if((80>=average)&&(average>70))
{
    document.write("Your Grade is : C")
}
else if((70>=average)&&(average>60))
{
    document.write("Your Grade is : D")
}
else if((60>=average)&&(average>50))
{
    document.write("Your Grade is : E")
}
else
{
    document.write("Your Grade is : FAIL")
}