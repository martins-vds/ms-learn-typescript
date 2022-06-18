let randomUnknownValue: unknown = 10;
randomUnknownValue = true;
randomUnknownValue = 'Mateo';

console.log(randomUnknownValue.name);  // Error: Object is of type unknown
randomUnknownValue();                  // Error: Object is of type unknown
randomUnknownValue.toUpperCase();      // Error: Object is of type unknown