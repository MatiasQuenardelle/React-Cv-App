import { useState } from "react"
import "./App.css"

export function CvApp({ onSubmit }) {
  const [CvInfo, setCvInfo] = useState({
    basicInfo: {
      name: "",
      title: "",
      summary: "",
    },
    contactInfo: {
      email: "",
      phone: "",
      location: "",
      website: "",
    },
    education: {
      school: "",
      degree: "",
      awards: {
        firstAward: "",
        secondAward: "",
      },
      startDate: "",
      endDate: "",
    },
    experience: {
      companyName: "",
      positionTitle: "",
      responsabilities: {
        responsability1: "",
        responsability2: "",
      },
      startWorkDate: "",
      endWorkDate: "",
      linkedInWebsite: "",
      workLocation: "",
      workDescription: "",
    },
    skills: {
      skillCategory1: { title: "", skills: [] },
      skillCategory2: {
        title: "",
        skills: [],
      },
    },
  })

  const exampleCv = {
    basicInfo: {
      name: "Peter Schmidt",
      title: "Business Manager",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium corporis eligendi quos natus consectetur sint eumnobis dolore neque error reiciendis explicabo ex minima quaefugit, corrupti, temporibus soluta blanditiis.",
    },
    contactInfo: {
      email: "PeterSchmidt@gmail.com",
      phone: "+103423124354",
      location: "Denmark",
      website: "peterschmidt.ai",
    },
    education: {
      school: "University of London",
      degree: "Bachelor in Computer Science",
      awards: {
        firstAward: "First Place in Math Competition",
        secondAward: "Winner of Debate Competition",
      },
      startDate: "2016-06-01",
      endDate: "2021-05-01",
    },
    experience: {
      companyName: "Name of Company",
      positionTitle: "Full Stack Developer",
      responsabilities: {
        responsability1: "Head of Marketing and Copywriting",
        responsability2: "Back End Dev. Team Leader",
      },
      startWorkDate: "2021-06-01",
      endWorkDate: "",
      linkedInWebsite: "linkedin.samplepage.com/johndoe",
      workLocation: "Lisboa",
      workDescription: "Made Front-End and Back-End of Enterprise Applications",
    },
    skills: {
      skillCategory1: {
        title: "Photoshop",
        skills: ["Ilustrator", "Figma"],
      },
      skillCategory2: {
        title: "Management",
        skills: ["Time-Management", "Communication"],
      },
    },
  }

  function handleSubmitInfo(e) {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(CvInfo)
    }
    console.log(CvInfo)
  }

  function handleAddNewSkill() {
    if (
      (CvInfo.skills.skillCategory1.title &&
        CvInfo.skills.skillCategory1.skills.length === 0) ||
      CvInfo.skills.skillCategory1.skills[
        CvInfo.skills.skillCategory1.skills.length - 1
      ] !== ""
    ) {
      setCvInfo({
        ...CvInfo,
        skills: {
          ...CvInfo.skills,
          skillCategory1: {
            ...CvInfo.skills.skillCategory1,
            skills: [...CvInfo.skills.skillCategory1.skills, ""],
          },
        },
      })
    }
  }

  // function addNewSkillInput() {
  //   {
  //     setCvInfo({
  //       ...CvInfo,
  //       skills: {
  //         ...CvInfo.skills,
  //         skillCategory1: {
  //           ...CvInfo.skills.skillCategory1,
  //           skills: [...CvInfo.skills.skillCategory1.skills, ""],
  //         },
  //       },
  //     })

  //     CvInfo.skills.skillCategory1.title && (
  //       <>
  //         {CvInfo.skills.skillCategory1.skills.map((skill, index) => (
  //           <>
  //             <input
  //               key={index}
  //               name={skill}
  //               value={skill}
  //               placeholder="Enter Skill"
  //             ></input>
  //           </>
  //         ))}
  //         {/* {
  //       CvInfo.skills.skillCategory1.skills.map((skill, index) => (
  //         <input
  //           key={index}
  //           type="Text"
  //           name={`skill${index}`}
  //           value={skill}
  //           onChange={(e) => {
  //             const updatedSkills = CvInfo.skills.skillCategory1.skills.map(
  //               (s, idx) => {
  //                 return idx === index ? e.target.value : s
  //               }
  //             )

  //             setCvInfo({
  //               ...CvInfo,
  //               skills: {
  //                 ...CvInfo.skills,
  //                 skillCategory1: {
  //                   ...CvInfo.skills.skillCategory1,
  //                   skills: updatedSkills,
  //                 },
  //               },
  //             })
  //           }}
  //         ></input>
  //       ))} */}
  //       </>
  //     )
  //   }
  // }

  return (
    <>
      <h1>CV Generator</h1>

      <p>
        Create your CV by filling out the forms below! Your CV will be
        dynamically updated in the preview.
      </p>
      <form id="cvForm" onSubmit={handleSubmitInfo}>
        <button type="submit">Submit</button>
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
        <h3>Contact Info:</h3>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={CvInfo.contactInfo.email}
          onChange={(e) =>
            setCvInfo({
              ...CvInfo,
              contactInfo: { ...CvInfo.contactInfo, email: e.target.value },
            })
          }
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="number"
          name="phone"
          id="phone"
          value={CvInfo.contactInfo.phone}
          onChange={(e) =>
            setCvInfo({
              ...CvInfo,
              contactInfo: { ...CvInfo.contactInfo, phone: e.target.value },
            })
          }
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          value={CvInfo.contactInfo.location}
          onChange={(e) =>
            setCvInfo({
              ...CvInfo,
              contactInfo: {
                ...CvInfo.contactInfo,
                location: e.target.value,
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
        <h5>
          Showcase the most relevant skills applicable to the job you are
          applying for
        </h5>
        <label htmlFor="skillCategory">Add a Skill Category:</label>
        <input
          type="text"
          name="skillCategory"
          id="skillCategory"
          placeholder="Skill Category"
          onChange={(e) =>
            setCvInfo({
              ...CvInfo,
              skills: {
                ...CvInfo.skills,
                skillCategory1: {
                  ...CvInfo.skills.skillCategory1,
                  title: e.target.value,
                },
              },
            })
          }
        />
        <button onClick={handleAddNewSkill}>
          Add New Skill in Add a skill in {CvInfo.skills.skillCategory1.title}
        </button>
        {CvInfo.skills.skillCategory1.title && (
          <>
            {CvInfo.skills.skillCategory1.skills.map((skill, index) => (
              <>
                <input
                  key={`skill${index}`}
                  name={`skill${index}`}
                  value={skill}
                  placeholder="Enter Skill"
                  onChange={(e) => {
                    const updatedSkills =
                      CvInfo.skills.skillCategory1.skills.map((s, idx) => {
                        if (idx === index) {
                          return e.target.value
                        } else {
                          return s
                        }
                      })

                    setCvInfo({
                      ...CvInfo,
                      skills: {
                        ...CvInfo.skills,
                        skillCategory1: {
                          ...CvInfo.skills.skillCategory1,
                          skills: updatedSkills,
                        },
                      },
                    })
                  }}
                ></input>
              </>
            ))}
          </>
        )}
        <button className="addNewSkillBtn" onClick={() => handleAddNewSkill}>
          Add New Skill
        </button>
      </form>

      <div className="container">
        <div className="virtualCv">
          <div className="mainInfo">
            <div className="personCard">
              <h1>{CvInfo.basicInfo.name || exampleCv.basicInfo.name}</h1>
              <h3>{CvInfo.basicInfo.title || exampleCv.basicInfo.title}</h3>
              <p>{CvInfo.basicInfo.summary || exampleCv.basicInfo.summary}</p>
            </div>
            <div className="educationCard">
              <h5>Education Background</h5>
              <ul>
                <li>
                  <h4>
                    {CvInfo.education.school || exampleCv.education.school}
                  </h4>
                </li>
                <h3>{CvInfo.education.degree || exampleCv.education.degree}</h3>
                <li>
                  {CvInfo.education.awards.firstAward ||
                    exampleCv.education.awards.secondAward}
                </li>
                <li>
                  {CvInfo.education.awards.secondAward ||
                    exampleCv.education.awards.secondAward}
                </li>
              </ul>
            </div>
            <div className="workCard">
              <h5>Work Experience:</h5>
              <ul>
                <li>
                  <h4>
                    {CvInfo.experience.companyName ||
                      exampleCv.experience.companyName}
                  </h4>
                </li>
                <h3>
                  {CvInfo.experience.positionTitle ||
                    exampleCv.experience.positionTitle}
                </h3>
                <li>{CvInfo.experience.responsabilities.responsability1}</li>
                <li>{CvInfo.experience.responsabilities.responsability2}</li>
              </ul>
              <p>
                {CvInfo.experience.startWorkDate ||
                  exampleCv.experience.startWorkDate}
              </p>
              <p>
                {CvInfo.experience.endWorkDate ||
                  exampleCv.experience.endWorkDate}
              </p>
            </div>
          </div>
          <div className="contactSkillInfo">
            <div className="contactCard">
              <ul>
                <li>
                  <img src="" alt="Email Icon" />{" "}
                  {CvInfo.contactInfo.email || exampleCv.contactInfo.email}
                </li>
                <li>
                  <img src="" alt="Telephone Icon" />{" "}
                  {CvInfo.contactInfo.phone || exampleCv.contactInfo.phone}
                </li>
                <li>
                  <img src="" alt="Location Icon" />{" "}
                  {CvInfo.contactInfo.location ||
                    exampleCv.contactInfo.location}
                </li>
                <li>
                  <img src="" alt="LinkedIn Icon" />{" "}
                  {CvInfo.experience.linkedInWebsite ||
                    exampleCv.experience.linkedInWebsite}
                </li>
              </ul>
            </div>
            <div className="skillsCard">
              <h5>Technical Skills:</h5>
              <ul>
                <h3>
                  {CvInfo.skills.skillCategory1.title ||
                    exampleCv.skills.skillCategory1.title}
                </h3>
                <ul>
                  {CvInfo.skills.skillCategory1.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </ul>
              <ul>
                <h3>
                  {CvInfo.skills.skillCategory2.title ||
                    exampleCv.skills.skillCategory2.title}
                </h3>
                <li>
                  {CvInfo.skills.skillCategory2.skill1 ||
                    exampleCv.skills.skillCategory2.skill1}
                </li>
                <li>
                  {CvInfo.skills.skillCategory2.skill2 ||
                    exampleCv.skills.skillCategory2.skill2}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
