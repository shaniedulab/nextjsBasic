"use client";
function Student({params}){
    console.log(params);
    return (
        <div>
           <h1>Student {params.student}</h1>
        </div>
    )
}

export default Student;