// Sample data store (an array to simulate a simple database)
const dataStore2 = [];

// Create (Insert) Operation
function createData(item) {
  console.log(`Item added: ${item}`);
  dataStore2.push(item);
}

const deleteOpe = () => {
  console.log("delete operation");
};

// Read (Retrieve) Operation
function readData() {
  console.log("Data in the data store:121212");
  dataStore2.forEach((item, index) => {
    console.log(`Item ${index + 1}: ${item}`);
  });
}

// Example usage:
createData("Item 1");
createData("Item 2");
createData("Item 3");
readData();
