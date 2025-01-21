let csv="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26 "

let cell= "";
let row = [];
let results= [];
for(let i=0; i <= csv.length;i++)
{
    let curChar= csv[i];
    if(curChar==="," ||curChar==="\n" )
    {
        row.push(cell);
        cell= " ".trim()
    }
    if(curChar==="\n")
    {
        results.push(row);
        row= [];
    } else 
        {
            cell += curChar;
        }
}
// console.log(Results)

//part 3 

let newCSV = results;
let changedCSV = [];
let header = newCSV[0];
// console.log(header)


for ( let i= 1; i < newCSV.length; i ++) {
    // console.log(newCSV[i])
    let row = newCSV[i]
    let objects = {}
    for (let j = 0; j < row.length; j ++) {
        //this is looping thorugh each array and getting all of the elements individually
        objects[header[j].toLocaleLowerCase()] = row[j]
    }
    changedCSV.push(objects)
}


//part 4

//remove the last elemnt
changedCSV.pop()


//insert new object at index 1
changedCSV.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add new object to the end
changedCSV.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

let ageSum = 0; 

for ( let i = 0; i < changedCSV.length; i++) {
    ageSum +=  Number(changedCSV[i].age);
}

let averageAge = ageSum / changedCSV.length;

//part 5
let finalCSV = [header.join(",")];
for (let i = 0; i < changedCSV.length; i++) {
    let row = Object.values(changedCSV[i]).join(",");
    finalCSV.push(row);
}
finalCSV = finalCSV.join("\n");