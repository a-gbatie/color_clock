import { useEffect, useState } from "react"; //importing React hooks
import { format } from "date-fns";
import "./App.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date()); //adding React state to currentDate, allowing React to re-render the coponent when the date changes. 

  useEffect(() => {
    const timer = setInterval(() => { //setInterval is a JS function that runs the code inside every 1000 milliseconds (1 second). This will update the currentDate state every second.
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer); //cleanup function to stop the interval if the component is removed.
  }, []);

  return (
    <main>
      <h1>Color Clock</h1>

      <p>{format(currentDate, "MMMM d, yyyy h:mm:ss a")}</p> //JSX syntax to display the formatted current date. Updated to format to include 'ss' to show the seconds ticking.
    </main>
  );
}

export default App;