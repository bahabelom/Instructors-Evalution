const Student = () => {
  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label>Email Address : </label>
        <input type="email" />
        <label>Password : </label>
        <input type="password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Student;
