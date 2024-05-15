export function csvDataToArray(csvData) {
    // Split the CSV data by newline characters to get each row
    const rows = csvData.split('\n');

    // Initialize an empty array to store the CSV array representation
    const csvArray = [];

    // Iterate over each row
    for (let i = 0; i < rows.length; i++) {
        // Skip empty rows
        if (rows[i].trim() === '') {
            continue;
        }
        
        // Split each row by comma to get the columns
        const cols = rows[i].split(',');

        // Remove double quotes from each column
        const cleanedCols = cols.map(col => col.replace(/"/g, ''));

        // Push the cleaned columns as an array to the CSV array
        csvArray.push(cleanedCols);
    }

    return csvArray;
}
