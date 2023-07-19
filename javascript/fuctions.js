// Define a function to show all functions in the code
function showAllFunctions() {
    // Get all the properties of the global object
    const properties = Object.getOwnPropertyNames(window);
  
    // Filter out the properties that are functions
    const functions = properties.filter(property => typeof window[property] === 'function');
  
    // Log the names of all the functions
    console.log('All Functions:');
    functions.forEach(func => console.log(func));
  }
  
  // Call the function to show all functions
  showAllFunctions();
  