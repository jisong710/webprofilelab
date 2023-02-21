import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddUser = () => {
  const [nama, setnama] = useState("");
  const [divisi, setdivisi] = useState("Gametech");
  const [instagram, setinstagram] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const navigate = useNavigate();
 
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/MakeUser", {
        nama,
        divisi,
        instagram,
        linkedin
      });
      navigate("/UserList");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setnama(e.target.value)}
                placeholder="Nama"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Divisi</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={divisi}
                  onChange={(e) => setdivisi(e.target.value)}
                >
                  <option value="GameTech">Gametech</option>
                  <option value="GIS">GIS</option>
                  <option value="Cyber">Cyber</option>
                  <option value="BigData">Big Data</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">instagram</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={instagram}
                onChange={(e) => setinstagram(e.target.value)}
                placeholder="instagram"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">linkedin</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={linkedin}
                onChange={(e) => setlinkedin(e.target.value)}
                placeholder="linkedin"
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
 
export default AddUser;