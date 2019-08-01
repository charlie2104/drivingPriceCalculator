window.onload = function()
{

    function calculatePrice(distance)
    {
        mpg = 40;
        petrolPriceL = 1.27;
        petrolPriceG = petrolPriceL * 3.785;
        gallonsUsed = distance/mpg;
        costOfJourney = gallonsUsed * petrolPriceG;
        return Math.round((costOfJourney + 0.00001) * 100) / 100 //rounds to 2dp
    }

    document.getElementById('distanceSubmit').onclick = function()
    {
        distance = document.getElementById('distanceInputBox').value;
        costOfJourney = calculatePrice(distance);
        outputTable = document.getElementById("listOfPlaces");
        outputTable.innerHTML += "<tr><th>" + distance + "</th><th>" + costOfJourney + "</th></tr>";
    }
}
