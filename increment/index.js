let countEl = document.getElementById("count-el")
let userValue = 0
var totalCount = []
let totalSum = 0
let valuesText = document.getElementById("values")
let countStr = 0

function lapCount() 
{
	userValue = userValue + 1
	countEl.textContent = userValue
}

function save() 
{
	if(userValue > 0)
	{
		countStr = userValue + " "
		valuesText.textContent += countStr
		totalCount.push(userValue)
		console.log(userValue)
		userValue = 0
    	document.getElementById("count-el").innerHTML = 0
	}
}

function reset()
{
	userValue = 0
    document.getElementById("count-el").innerHTML = 0
	document.getElementById("valueSum").innerHTML = 0
	totalCount = []
	totalSum = 0
	valuesText.textContent = " "
}

function total()
{
	totalSum = 0

	for(let i = 0; i < totalCount.length; i++)
	{
		let item = totalCount[i]
		totalSum = totalSum + item
	}
	
	document.getElementById("valueSum").innerHTML = totalSum
}