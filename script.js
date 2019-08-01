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
        distace = document.getElementById('distanceInputBox').value;
        costOfJourney = calculatePrice(distace);
        outputDiv = document.getElementById("listOfPlaces");
        outputDiv.innerHTML += costOfJourney + "<br />";
    }
}
