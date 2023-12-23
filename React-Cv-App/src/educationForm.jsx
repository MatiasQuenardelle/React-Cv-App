export function EducationForm({ CvInfo, setCvInfo }) {
  return (
    <div className="educationForm">
      <h3>Education:</h3>
      <label htmlFor="school">School:</label>
      <input
        type="text"
        name="school"
        id="school"
        placeholder="Enter School / University"
        value={CvInfo.education.school}
        onChange={(e) =>
          setCvInfo({
            ...CvInfo,
            education: { ...CvInfo.education, school: e.target.value },
          })
        }
      />
      <label htmlFor="degree">Degree:</label>
      <input
        type="text"
        name="degree"
        id="degree"
        placeholder="Enter Degree"
        value={CvInfo.education.degree}
        onChange={(e) =>
          setCvInfo({
            ...CvInfo,
            education: { ...CvInfo.education, degree: e.target.value },
          })
        }
      />
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        value={CvInfo.education.startDate}
        onChange={(e) =>
          setCvInfo({
            ...CvInfo,
            education: { ...CvInfo.education, startDate: e.target.value },
          })
        }
      />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        value={CvInfo.education.endDate}
        onChange={(e) =>
          setCvInfo({
            ...CvInfo,
            education: { ...CvInfo.education, endDate: e.target.value },
          })
        }
      />
    </div>
  )
}
