// An intersection type combines two or more types to create a new type that has all properties of the existing types. This allows you to add together existing types to get a single type that has all the features you need.

/* 
An Intersection type uses the ampersand (&) to separate each type.

Intersection types are most often used with interfaces. The following example defines two interfaces, Employee and Manager, and then creates a new intersection type called ManagementEmployee that combines the properties in both interfaces.
*/

interface Employee {
    employeeID: number;
    age: number;
}
interface Manager {
    stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};