window.onload = function()
{

    function calculatePrice(distance)
    {
        mpg = 40;
        petrolPriceL = 1.27;
        petrolPriceG = petrolPriceL * 3.785;
        gallonsUsed = distance/mpg;
        costOfJourney = gallonsUsed * petrolPriceG;
        return costOfJourney;
    }

    document.getElementById('distanceSubmit').onclick = function()
    {
        distace = document.getElementById('distanceInputBox').value;
        costOfJourney = calculatePrice(distace);
        alert(costOfJourney);
    }
}
