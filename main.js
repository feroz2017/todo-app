// Sample data store (an array to simulate a simple database)
const dataStore = [];

// Create (Insert) Operation
function createData(item) {
  dataStore.push(item);
  console.log(`Item added: ${item}`);
}

// Read (Retrieve) Operation
function readData() {
  console.log("Data in the data store:");
  dataStore.forEach((item, index) => {
    console.log(`Item ${index + 1}: ${item}`);
  });
}

// Example usage:
createData("Item 1");
createData("Item 2");
createData("Item 3");
readData();
