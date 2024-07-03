// // src/components/TaskList.js
// import React, { useEffect, useState } from "react";
// import TaskForm from "./TaskForm";

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(
//       "http://185.203.217.168/api/get_tasks?user_api_hash=$2y$10$F4RpJGDpBDWO2ie448fQAu2Zo0twdwyBdMmnbeSqFbEkjGYocP.Y6"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setTasks(data.tasks); // Adjust according to the structure of your API response
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching tasks:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Task List</h1>
//       {tasks.map((task) => (
//         <div key={task.id}>
//           <h2>{task.title}</h2>
//           <TaskForm task={task} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TaskList;
