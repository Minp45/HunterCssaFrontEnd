import React, { useState, useEffect } from "react";
import '../style/FindMateStyle.css';

const FindMateView = () => {

    const [year, setYear] = useState("");
    const [gradYear, setGradYear] = useState("");
    const [borough, setBorough] = useState("");
    const [major, setMajor] = useState("");
    const [minor, setMinor] = useState("");

    const majors = ["Undeclare", "Accounting", "Adolescent Literacy", "Adult Nurse Practitioner", "Africana & Puerto Rican / Latino Studies", "Ancient Greek", "Animal Behavior Conservation", "Anthropology", "Applied Behavior Analysis", "Arabic", "Archaeology, Interdepartmental", "Art History", "Arts Management and Leadership", "Asian American Studies", "Audiology", "Behavioral Neurobiology", "Biochemistry", "Bioinformatics (Quantitative Biology)", "Biology", "Biology Adolescent Education", "Biomedical Laboratory Management", "Biophysics", "Biopsychology and Behavioral Neuroscience", "Biological Sciences with Specialization in Biotechnology", "Business Studies", "Chemistry", "Chemistry Adolescent Education", "Childhood Education (QUEST)", "Childhood Literacy", "Chinese", "Chinese Adolescent Education", "Classical Studies", "Clinical Nurse Leader™", "Community / Public Health Nursing", "Comparative Literature", "Computer Science", "Counseling", "Creative Writing (for BA, a concentration in the English Major)", "Curatorial Studies", "Cytotechnology", "Dance", "Dance Education", "Early Childhood Education", "Earth Science Adolescent Education", "Economics", "Educational Psychology", "English Adolescent Education", "English MA program in Literature, Language, and Theory", "English Language Arts (concentration in English BA)", "Environmental Studies", "Family Nurse Practitioner", "Film", "French", "French Adolescent Education", "Geographic Information Science", "Geography", "German", "German Adolescent Education", "Gerontological / Adult Nurse Practitioner", "Hebrew", "Hebrew Adolescent Education", "History", "Human Biology", "Human Rights", "Instructional Leadership", "Integrated Media Arts", "Italian", "Italian Adolescent Education", "Japanese", "Jewish Studies", "Latin", "Latin Adolescent Education", "Latin American and Caribbean Studies", "Latin and Greek", "Linguistics", "Linguistics and Rhetoric (concentration in English major)", "Literatures, Language and Criticism (concentration in English major)", "Mathematics", "Mathematics Adolescent Education", "Media Studies", "Medical Laboratory Sciences", "Medical Laboratory Technology", "Music", "Music Education", "Nursing, Accelerated Second-Degree Pathway", "Nursing Administration / Urban Policy and Leadership", "Nursing Education", "Nursing, Generic Pathway", "Nursing, RN Pathway", "Nutrition", "Nutrition and Food Sciences", "Nutrition and Wellness", "Philosophy", "Philosophy, Politics and Society (concentration in philosophy major)", "Physical Therapy", "Physics", "Physics Adolescent Education", "Playwriting", "Political Science", "Psychiatric Mental Health Nursing Practitioner", "Psychiatric Nurse Practitioner", "Psychology", "Psychology with Neuroscience Concentration", "Public Health", "Public Policy", "Pure Mathematics", "Religion", "Romance Languages", "Russian", "Russian Adolescent Education", "School Administration and Supervision", "Social Research", "Social Studies Adolescent Education", "Social Welfare", "Social Work", "Social Work Administration", "Social Work/Divinity", "Sociology", "Sociology and Social Research", "Spanish", "Spanish Adolescent Education", "Spanish and Latin American Literature", "Spanish←→English Translation and Interpretation", "Special Education", "Speech-Language Pathology", "Statistics", "Statistics and Applied Mathematics", "Studio Art", "Teaching English to Speakers of Other Languages (TESOL)", "Theatre", "Therapy (Family, Individual, or Adoption)", "Urban Policy and Leadership", "Urban Planning", "Urban Studies", "Visual Arts Education", "Women and Gender Studies", "Other"];
    

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
        const endYear = currentYear+8;
      
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
            <div class="finding">
                <div className="find-conent">
                    <div className="find-content__box">

                            <h2>Find your classmate</h2>
                            <from className="find-form">  

                                <div className="find-form__college-year">
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

                                <label htmlFor="gradYear">Graduation Year</label>
                                <select name="gradYear" onChange={handleGradYear} required>
                                    <option value="">Select Year</option>
                                    {renderYearOptions()}
                                </select>

                                <label htmlFor="borough">Borough</label>
                                <select name="borough" onChange={handleBorough} required>
                                    <option value="">Select Borough</option>
                                    <option value="Bronx">Bronx (Bronx County)</option>
                                    <option value="Broooklyn">Brooklyn (Kings County)</option>
                                    <option value="Manhattan">Manhattan (New York County)</option>
                                    <option value="Queens">Queens (Queens County)</option>
                                    <option value="StatenIsland">Staten Island (Richmond County)</option>
                                    <option value="Other">Other</option>
                                </select>


                                <label for="major">Major</label>
                                <select name="major" id="majorSelect" required>
                                    <option value="">Select Major</option>
                                </select>

                                <label for="minor">Minor</label>
                                <select name="minor" id="minorSelect" required>
                                    <option value="">Select Minor</option>
                                </select>

                                <button  type="submit">
                                    Search
                                </button>

                            </from>
                    </div>
                </div>
            </div>
        </>
    )
}




 


  


export default FindMateView;