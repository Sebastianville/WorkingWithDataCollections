let csv="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26 "

let cell= "";
let row = [];
let Results= [];
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
        Results.push(row);
        row= [];
    } else 
        {
            cell += curChar;
        }
}
// console.log(Results)

//part 3 

let newCSV = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"],
  ];

  let changedCSV = [];


let header = newCSV[0]
// console.log(header)


for ( let i= 1; i < newCSV.length; i ++) {
    // console.log(newCSV[i])
    let row = newCSV[i]
    let objects = {}
    

    for (let j = 0; j < row.length; j ++) {
        //this is looping thorugh each array and getting all of the elements individually
        console.log(objects[header[j].toLocaleLowerCase()] = row[j])
    }
    changedCSV.push(objects)
}