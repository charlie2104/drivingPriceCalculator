window.onload = function()
{
    document.getElementById('distanceSubmit').onclick = function()
    {
        console.log("hello")
        mpg = 40;
        petrolPriceL = 1.27;
        distance = document.getElementById('distanceInputBox').value;
        petrolPriceG = petrolPriceL * 3.785;
        gallonsUsed = distance/mpg;
        costOfJourney = gallonsUsed * petrolPriceG;
        alert(costOfJourney);
    }
}
