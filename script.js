mpg = 40;
petrolPriceL = 1.27;

distance = prompt("how far in miles did you go");

petrolPriceG = petrolPriceL * 3.785;
gallonsUsed = distance/mpg;

costOfJourney = gallonsUsed * petrolPriceG;

alert(costOfJourney);