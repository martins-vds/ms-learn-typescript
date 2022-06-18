let randomTypeValue: unknown = 10;

randomTypeValue = true;
randomTypeValue = 'Mateo';

// Type guards
if (typeof randomTypeValue === "string") {
    // Preferred syntax
    console.log((randomTypeValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}