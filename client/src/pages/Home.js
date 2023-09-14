// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  return (
    <div className="home">
      <div className="workouts">
        <WorkoutDetails />
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
