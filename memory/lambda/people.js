// Define the data directly in your Lambda function
const data = `
Alice:me:80:California:when i was little we jumped
Jane:daughter:50:Nevada:That morning, on the way to Jane's 2nd grade class, right after a quick rain shower, something special happened. We spotted a double rainbow stretching across the sky. Just as we stood there looking at it, a monarch butterfly zipped by us. Jane's excitement was through the roof, and she chatted about it nonstop all the way to school. It was a simple day that turned into an unforgettable one, just because of that moment.
John:son:52:Florida:Your son John grew up watching you and your husband dance to La Vie En Rose by Edith Piaf in front of the fireplace on snowy evenings. When he married the love of his life, the two had their first dance to the same song, carrying on the tradition you started.
`;

// Function to populate the dictionary
function populatePeopleData() {
    // Split the data into lines
    const lines = data.trim().split('\n');
    
    // Initialize an empty dictionary
    let peopleData = {};
    
    // Populate the dictionary
    lines.forEach(line => {
        // Split each line into an array of values
        const [name, role, age, location, story] = line.trim().split(':');
        
        // Populate the dictionary with name as key and an array of values as the corresponding value
        peopleData[name] = [role, parseInt(age), location, story];
    });
    
    return peopleData;
}

// Usage example
const peopleData = populatePeopleData();
console.log(peopleData);


module.exports = peopleData;


/* peopleData should now look like: 

peopleData = {
    'Grandma' : ['me', 80,'California','retiree'],
    'Jane': ['daughter',50,'Nevada','Gambler'],
    'John': ['son',52,'Florida','Floridaman'],
};

*/