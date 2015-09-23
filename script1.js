var keys = document.querySelectorAll('#calculator span');
var mystring = "Yousuff";
var operators = ['+', '-', '*', '/'];

for(var i = 0; i < keys.length; i++)
{
	keys[i].onclick = function(e) 
	{
		var inputBar = document.querySelector('.screen');
		var messageBar = document.querySelector('.messageScreen');
		messageBar.innerHTML = '';
		var inputSting = inputBar.innerHTML;
		var btnVal = this.innerHTML;
	
		if(btnVal == '=')
		{
			if(inputSting.length <= 0)
				messageBar.innerHTML = "Nothing to do";
			else
				inputBar.innerHTML = eval(inputSting);
		}
		
		else if(btnVal == 'C')
		{
			if(inputSting.length < 1)
				messageBar.innerHTML = "Nothing to clear";
			inputBar.innerHTML = '';
		} 
		
		//If the button pressed is an operator.
		else if(operators.indexOf(btnVal) > -1)
		{	
			//If last char in the string is not an operator and the string is not empty, only then add the operator.
			if(inputSting.length > 0)
			{
				if(operators.indexOf(inputSting[inputSting.length - 1]) == -1)
					inputBar.innerHTML += btnVal;
				
				else
					messageBar.innerHTML = "Consequtive operators illegal";
			}
			
			//If the string is empty, then allow only + and - operator
			else
			{
				if(btnVal == '-' | btnVal == '+')
					inputBar.innerHTML += btnVal;
				
				else
					messageBar.innerHTML = "Operator not allowed";
			}
		}
		
		else 
			inputBar.innerHTML += btnVal;
		
		e.preventDefault();
	}  
}
