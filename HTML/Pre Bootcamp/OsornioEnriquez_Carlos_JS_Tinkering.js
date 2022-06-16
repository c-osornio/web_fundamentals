var childHeight= 4;
function displayIfChildIsAbleToRideTheRollerCoaster() {
    if (childHeight>52) {
        console.log('Get on that ride, kiddo!');
    }
    else {
        console.log('Sorry kiddo. Maybe next year.');
    }
}
displayIfChildIsAbleToRideTheRollerCoaster(childHeight);
