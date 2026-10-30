//Tasks...

//Task1. store students data
let name = "Rahul Kumar";
let rollNo = 101;
let department = "AI-ML";
let marKs = [78,85,62,91,34];

//Task2.  store marks in an array
let marks = [78,85,62,91,34];

//Task3. calculate total marks
function calculateTotal(marks){
    let total = 0;
    for (let i = 0; i < marks.length; i++){
        total = total + marks[i];
    }
    return total;
}

//Task4. Calculate percentage
function calculatePercentage(marks){
    let total = calculateTotal(marks);
    return (total / (marks.length * 100)) * 100;
}

//Task5. Find highest mark
function findHighest(marks){
    let highest = marks[0];

    for (let i = 1; i < marks.length; i++){
        if (marks[i] > highest){
            highest = marks[i];
        }
    }
    return highest;
}

//Task6. Find lowest mark
 function findLowest(marks){
    let lowest = marks[0];

    for (let i = 1; i < marks.length; i++){
        if (marks[i] < lowest){
            lowest = marks[i];
        }
    }
    return lowest;
 }

 //Task7. count passed subject (marks >= 40)
 let passed = 0;

 for (let i = 0; i < marks.length; i++){
    if (marks[i] >= 40){
        passed = passed + 1;
    }
 }

 //Task8. Convert name to uppercase and display no of char in name.
 let upperName = name.toUpperCase();
 
 let nameLength = name.length;


//Task9. Display final report
console.log("Student:", upperName);
console.log("Roll Number:", rollNo);
console.log("Department:", department);
console.log("Total Marks:", calculateTotal(marks));
console.log("percentage:", calculatePercentage(marks) + "%");
console.log("Highest Marks:", findHighest(marks));
console.log("Lowest Marks:", findLowest(marks));
console.log("subjects Passed:", passed);
console.log("Name Characters:", nameLength);



 //Task10. Bonus: Performance grade

 function getPerformance(marks){
    let percentage = calculatePercentage(marks);

    if (percentage >= 80){
        return "Excellent";
    } else if (percentage >= 60){
        return "Good";
    } else if (percentage >= 40){
        return "Average";
    } else {
        return "Needs Improvement";

    }
 }
    console.log("Performance:", getPerformance(marks));

 