import { TextField } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <div
      className="flex justify-center items-center w-full min-h-[100vh] mb-20 mt-40 bg-cover "
      style={{ backgroundImage: "url('/photoman.jpg')" }}
    >
      <div className="flex justify-center items-center w-full min-h-[100vh] backdrop-blur-sm ">
        <form
          action=""
          className="flex flex-col  p-5 border-[2px] rounded-[10px] w-[30%] sm:w-[80%] bg-white "
        >
          <h1></h1>
          <div>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
            />
          </div>
          <div>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
            />
          </div>
          <div>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              label="WhatsApp Number"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
            />
          </div>
          <div>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              label="Proposed"
              variant="outlined"
              sx={{ marginBottom: "20px" }}
            />
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              type="submit"
              className="text-white bg-slate-700 w-[140px] h-[40px] rounded-[5px] mt-2 hover:bg-slate-800  transition delay-150 duration-300 ..."
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
