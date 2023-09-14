import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useEffect, useState } from "react";
const WorkoutDetails = ({ workout }) => {
  const { workouts, dispatch } = useWorkoutsContext();

  const [answers, setAnswers] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);
  const handleChange = (index, value) => {
    setAnswers((answers) => [...answers, { index, value }]);
  };

  const calculateAverage = () => {
    let total = 0;
    for (const answer of answers) {
      total += answer.value;
    }
    setAverage(total / answers.length);
  };

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:4000/api/workouts/" + workout._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div>
      <div className="workout-details">
        <h1>Questionary</h1>
        <ul>
          {workouts &&
            workouts.map((workout, index) => (
              <li key={workout.name}>
                <div>
                  <h4>{workout.title}</h4>
                  <input
                    type="radio"
                    name="1"
                    value="1"
                    checked={answers[index]?.value === 1}
                    onChange={() => handleChange(index, 1)}
                  />
                  <label>1</label>
                  <input
                    type="radio"
                    name="2"
                    value="2"
                    checked={answers[index]?.value === 2}
                    onChange={() => handleChange(index, 2)}
                  />
                  <label>2</label>
                  <input
                    type="radio"
                    name="3"
                    value="3"
                    checked={answers[index]?.value === 3}
                    onChange={() => handleChange(index, 3)}
                  />
                  <label>3</label>
                  <input
                    type="radio"
                    name="4"
                    value="4"
                    checked={answers[index]?.value === 4}
                    onChange={() => handleChange(index, 4)}
                  />
                  <label>4</label>
                  <input
                    type="radio"
                    name="5"
                    value="5"
                    checked={answers[index]?.value === 5}
                    onChange={() => handleChange(index, 5)}
                  />
                  <label>5</label>
                </div>
              </li>
            ))}
        </ul>
        <button onClick={calculateAverage}>Calculate Average</button>
        <h3>Average: {average}</h3>
      </div>
    </div>
  );
};
export default WorkoutDetails;
