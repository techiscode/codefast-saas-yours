"use client";
import { useState } from "react";

const FormNewBoard = () => {
  const [name, setName] = useState("Hi");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    try {
      // 1. Asynchronous call to API to create new board // 2. Redirect to dedicated board page
    } catch (error) {
      // 1. Display error message setIsLoading (false);
    }
  };

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handleSubmit}
    >
      <p className="font-bold text-lg">Create a new feedback board</p>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Board name</span>
        </div>
        <input
          required
          type="text"
          placeholder="Future Unicorn Inc."
          className="input-bordered w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <button className="btn btn-primary w-full" type="submit">
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        Create Board
      </button>
    </form>
  );
};
export default FormNewBoard;
