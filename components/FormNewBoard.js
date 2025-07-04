"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const FormNewBoard = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (isloading) return;

    try {
      // await fetch("api/board", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     name,
      //   }),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      const data = await axios.post("api/board", { name });
      setName("");
      toast.success("Board created");
      router.refresh();
    } catch (error) {
      //const errorMessage = error.message || "Something went wrong";
      const errorMessage =
        error.response?.data?.error || error.message || "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="bg-base-100 p-8 rounded-3x1" onSubmit={handleSubmit}>
      <p className="font-bold text-lg">Create a new feedback board</p>

      <label className="form-control w-full  p-8">
        <div className="label">
          <span className="label-text">Board name</span>
        </div>

        <input
          required
          type="text"
          placeholder="Future Unicorn Inc.🦄"
          className="input input-bordered w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <button className="btn btn-primary w-full" type="submit">
        {isloading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        Create Board
      </button>
    </form>
  );
};

export default FormNewBoard;
