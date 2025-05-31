function getIntoCar(callback){
    console.log('Get into the car');
    callback();
}

function startCar(callback){
    console.log('Car Started');
    callback();
}

function drive(callback){
    console.log("Driving the car");
    callback();
}



getIntoCar( function(){
    startCar( function(){
        drive( function(){
            console.log('Reached the destination');
        } );
    } );
} );  // callback hell