const assert = require('assert')

const initialArray = [
  {
    id: 1,
    members: [
      {
        name: 'John',
        vehicleMake: 'BMW',
      },
      {
        name: 'Michael',
        vehicleMake: 'Hyundai',
      },
    ],
  },
  {
    id: 2,
    members: [
      {
        name: 'Aurora',
        vehicleMake: 'Subaru',
      },
      {
        name: 'Chris',
        vehicleMake: 'Huffy',
      },
    ],
  },
  {
    id: 3,
    members: [
      {
        name: 'Matt',
        vehicleMake: 'Volkswagen',
      },
      {
        name: 'Paul',
        vehicleMake: 'Ford',
      },
      {
        name: 'Mark',
        vehicleMake: 'Ford',
      },
    ],
  },
]

const expectedArray = [
  {
    rideShareId: 1,
    numberMembers: 2,
  },
  {
    rideShareId: 2,
    numberMembers: 2,
  },
  {
    rideShareId: 3,
    numberMembers: 3,
  },
]

function convertRideshareArray(array) {
  var newArray = array.map(function(element) {
    /*
    Add code here so that convertRideshareArray will change
    initialArray into an array that is equal to expectedArray
    */
    // PLACE YOUR CODE BELOW
    
    // declare an empty object to hold the data
    const newArrayObject = {};

    // set propertie of the newArrayObject equal to the appropriate values from the element object
    newArrayObject['rideShareId'] = element.id; 
    newArrayObject['numberMembers'] = element.members.length;

    // return newArrayObject back to newArray
    return newArrayObject;

    // PLACE YOUR CODE ABOVE
  })

  return newArray
}

assert.deepEqual(expectedArray, convertRideshareArray(initialArray), 'Arrays are not equal') || console.log('Success')

/*
When run with "node 9_data_transformation.js" you should see the
the following on the console:

Success
*/
