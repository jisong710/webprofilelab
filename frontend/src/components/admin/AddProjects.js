import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddProject = () => {
  const [proyek, setproyek] = useState("");
  const [isi, setisi] = useState("");
  const navigate = useNavigate();
 
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/MakeProject", {
          proyek,
          isi,
      });
      navigate("/ProjectList");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">nama project</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={proyek}
                onChange={(e) => setproyek(e.target.value)}
                placeholder="nama project"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">isi</label>
            <div className="control">
              <textarea
                className="input"
                value={isi}
                onChange={(e) => setisi(e.target.value)}
                placeholder="isi"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddProject;