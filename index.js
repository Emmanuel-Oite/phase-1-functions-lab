function distanceFromHqInBlocks(pickupLocation) {
  const headquartersLocation = 42; 

  const distanceInBlocks = pickupLocation - headquartersLocation;
  return distanceInBlocks;
}
function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInFeet(someValue);
  const feetPerBlock = 264;
  const distanceInFeet =  blocks * feetPerBlock;
  return distanceInFeet;
}
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const distanceInBlocks = destination - start;
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
  }
function calculatesFarePrice(start, destination) {
  const feetPerBlock = 264;
  const distanceInBlocks = destination - start;
  const distanceInFeet = distanceInBlocks * feetPerBlock;

  if (distanceInFeet <= 400) {
    return "Trip is Free"
  }
  else if (distanceInFeet > 400 && distanceInFeet <= 2000){
  const distanceUnder400 = distanceInFeet - 400;
  return distanceUnder400 * 0.02
  }
  else if (distanceInFeet > 2000 && distanceInFeet < 2500){
    return 25;
  }
  else if (distanceInFeet > 2500){
    return "cannot travel that far"
  }
  }  