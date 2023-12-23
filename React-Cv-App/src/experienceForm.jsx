export function ExperienceForm({ CvInfo, setCvInfo }) {
  return (
    <div className="experienceForm">
      <h3>Experience:</h3>
      <label htmlFor="companyName">Company Name:</label>
      <input
        type="text"
        name="companyName"
        id="companyName"
        placeholder="Enter Company Name"
        value={CvInfo.experience.companyName}
        onChange={(e) =>
          setCvInfo({
            ...CvInfo,
            experience: {
              ...CvInfo.experience,
              companyName: e.target.value,
            },
          })
        }
      />
      <label htmlFor="positionTitle">Position Title:</label>
      <input
        type="text"
        name="positionTitle"
        id="positionTitle"
        placeholder="Enter Position Title"
        value={CvInfo.experience.positionTitle}
        onChange={(e) =>
          setCvInfo({
            ...CvInfo,
            experience: {
              ...CvInfo.experience,
              positionTitle: e.target.value,
            },
          })
        }
      />

      <label htmlFor="website">Website:</label>
      <input
        type="text"
        name="website"
        id="website"
        placeholder="linkedin.sample.com/johndoe"
        value={CvInfo.experience.linkedInWebsite}
        onChange={(e) =>
          setCvInfo({
            ...CvInfo,
            experience: {
              ...CvInfo.experience,
              linkedInWebsite: e.target.value,
            },
          })
        }
      />
      <label htmlFor="startWorkDate">Start Date:</label>
      <input
        type="date"
        name="startWorkDate"
        id="startWorkDate"
        value={CvInfo.experience.startWorkDate}
        onChange={(e) =>
          setCvInfo({
            ...CvInfo,
            experience: {
              ...CvInfo.experience,
              startWorkDate: e.target.value,
            },
          })
        }
      />
      <label htmlFor="endWorkDate">End Date:</label>
      <input
        type="date"
        name="endWorkDate"
        id="endWorkDate"
        value={CvInfo.experience.endWorkDate}
        onChange={(e) =>
          setCvInfo({
            ...CvInfo,
            experience: {
              ...CvInfo.experience,
              endWorkDate: e.target.value,
            },
          })
        }
      />
      <label htmlFor="workLocation">Location:</label>
      <input
        type="text"
        name="workLocation"
        id="workLocation"
        placeholder="Enter Location"
        value={CvInfo.experience.workLocation}
        onChange={(e) =>
          setCvInfo({
            ...CvInfo,
            experience: {
              ...CvInfo.experience,
              workLocation: e.target.value,
            },
          })
        }
      />
      <label htmlFor="workDescription">Work Description:</label>
      <textarea
        name="workDescription"
        id="workDescription"
        cols="30"
        rows="10"
        value={CvInfo.experience.workDescription}
        onChange={(e) =>
          setCvInfo({
            ...CvInfo,
            experience: {
              ...CvInfo.experience,
              workDescription: e.target.value,
            },
          })
        }
      ></textarea>
    </div>
  )
}
