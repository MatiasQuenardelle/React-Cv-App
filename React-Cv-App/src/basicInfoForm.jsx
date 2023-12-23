import React from "react"

export function BasicInfoForm({ CvInfo, setCvInfo }) {
  {
    return (
      <div className="basicInfo">
        <h3>Basic Info:</h3>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={CvInfo.basicInfo.name}
          onChange={(e) =>
            setCvInfo({
              ...CvInfo,
              basicInfo: { ...CvInfo.basicInfo, name: e.target.value },
            })
          }
        />
        <label htmlFor="title">Professional Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={CvInfo.basicInfo.title}
          onChange={(e) =>
            setCvInfo({
              ...CvInfo,
              basicInfo: { ...CvInfo.basicInfo, title: e.target.value },
            })
          }
        />
        <label htmlFor="selfSummary">Give a Summary About Yourself:</label>
        <textarea
          name="selfSummary"
          id="selfSummary"
          cols="30"
          rows="10"
          value={CvInfo.basicInfo.summary}
          onChange={(e) =>
            setCvInfo({
              ...CvInfo,
              basicInfo: { ...CvInfo.basicInfo, summary: e.target.value },
            })
          }
        ></textarea>
      </div>
    )
  }
}
