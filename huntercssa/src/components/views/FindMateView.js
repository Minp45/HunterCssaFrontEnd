import { majors } from "../global/content";
import React, { useState, useEffect } from "react";
import '../style/FindMateStyle.css';

const FindMateView = () => {
  const [year, setYear] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [borough, setBorough] = useState("");
  const [major, setMajor] = useState("");
  const [minor, setMinor] = useState("");

  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleGradYear = (e) => {
    setGradYear(e.target.value);
  };
  const handleBorough = (e) => {
    setBorough(e.target.value);
  };
  const handleMajor = (e) => {
    setMajor(e.target.value);
  };
  const handleMinor = (e) => {
    setMinor(e.target.value);
  };

  function renderYearOptions() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear;
    const endYear = currentYear + 8;

    const options = [];

    for (let year = endYear; year >= startYear; year--) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return options;
  }

  useEffect(() => {
    const selectElement = document.getElementById("majorSelect");
    majors.forEach((major) => {
      const option = document.createElement("option");
      option.value = major;
      option.textContent = major;
      selectElement.appendChild(option);
    });
  }, []);

  useEffect(() => {
    const selectElement = document.getElementById("minorSelect");
    majors.forEach((major) => {
      const option = document.createElement("option");
      option.value = major;
      option.textContent = major;
      selectElement.appendChild(option);
    });
  }, []);

  return (
    <>
      <div className="finding">
        <div className="find-content">
          <div className="find-content__box">
            <h2>Find your classmate</h2>
            <form className="find-form">
                <div className="find-form__text">
                    <label htmlFor="year">College Year</label>
                    <select name="year" onChange={handleYear} required>
                    <option value="">Select Year</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    <option value="Other">Other</option>
                    </select>
                </div>
                <div className="find-form__text">
                    <label htmlFor="gradYear">Graduation Year</label>
                    <select name="gradYear" onChange={handleGradYear} required>
                        <option value="">Select Year</option>
                        {renderYearOptions()}
                    </select>
                </div>
                <div className="find-form__text">
                    <label htmlFor="borough">Borough</label>
                    <select name="borough" onChange={handleBorough} required>
                        <option value="">Select Borough</option>
                        <option value="Bronx">Bronx (Bronx County)</option>
                        <option value="Broooklyn">Brooklyn (Kings County)</option>
                        <option value="Manhattan">Manhattan (New York County)</option>
                        <option value="Queens">Queens (Queens County)</option>
                        <option value="StatenIsland">
                        Staten Island (Richmond County)
                        </option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="find-form__text">
                    <label htmlFor="major">Major</label>
                    <select name="major" id="majorSelect" required>
                        <option value="">Select Major</option>
                    </select>
                </div>
                <div className="find-form__text">
                    <label htmlFor="minor">Minor</label>
                    <select name="minor" id="minorSelect" required>
                        <option value="">Select Minor</option>
                    </select>
                </div>

              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindMateView;
