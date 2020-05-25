var num1;
var num2;
var num3;

num1 = prompt ("Enter first number");
num2 = prompt ("Enter second number");
num3 = prompt ("Enter third number");

if(num1 > num2 && num1 > num3) {
	alert("First number is highest");
	} else  
		if(num2 > num1 && num2 > num3) {
			alert("Second number is highest");
	} else  
		if(num3 > num1 && num3 > num2) {
			alert("Third number is highest");
	} else 
		if(num1==num2 && num1>num3) {
			alert("First number equals second and they both higher than third");
	} else 
		if(num1==num2 && num1>num2) {
			alert("First number equals third and they both higher than second");
	} else 
		if(num2==num3 && num2>num1) {
			alert("Second number equals third and they both higher than first");
	}
	