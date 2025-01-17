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
        cell= " ";
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
console.log(Results)