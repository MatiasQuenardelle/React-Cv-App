export function SkillsForm({ CvInfo, setCvInfo }) {
  function handleAddNewSkill() {
    if (
      (CvInfo.skills.type1.title && CvInfo.skills.type1.skills.length === 0) ||
      CvInfo.skills.type1.skills[CvInfo.skills.type1.skills.length - 1] !== ""
    ) {
      setCvInfo({
        ...CvInfo,
        skills: {
          ...CvInfo.skills,
          type1: {
            ...CvInfo.skills.type1,
            skills: [...CvInfo.skills.type1.skills, ""],
          },
        },
      })
    }
  }

  function handleSkillType2() {
    if (
      CvInfo.skills.type1.title &&
      (CvInfo.skills.type2.skills.length === 0 ||
        CvInfo.skills.type2.skills[CvInfo.skills.type2.skills.length - 1] !==
          "")
    ) {
      setCvInfo({
        ...CvInfo,
        skills: {
          ...CvInfo.skills,
          type2: {
            ...CvInfo.skills.type2,
            skills: [...CvInfo.skills.type2.skills, ""],
          },
        },
      })
    }
  }

  return (
    <div className="skillsForm">
      <h5>
        Showcase the most relevant skills applicable to the job you are applying
        for
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
              type1: {
                ...CvInfo.skills.type1,
                title: e.target.value,
              },
            },
          })
        }
      />

      {CvInfo.skills.type1.title && (
        <>
          {handleAddNewSkill()}
          {/* <button type="button" onClick={handleAddNewSkill}>
              Add New Skill in{" "}
              {CvInfo.skills.type1.title || "(Your Skill Type)"}
            </button> */}

          {CvInfo.skills.type1.skills.map((skill, index) => (
            <input
              key={`skill${index}`}
              name={`skill${index}`}
              value={skill}
              placeholder="Enter Skill"
              onChange={(e) => {
                const updatedSkills = CvInfo.skills.type1.skills.map(
                  (s, idx) => {
                    if (idx === index) {
                      return e.target.value
                    } else {
                      return s
                    }
                  }
                )

                setCvInfo({
                  ...CvInfo,
                  skills: {
                    ...CvInfo.skills,
                    type1: {
                      ...CvInfo.skills.type1,
                      skills: updatedSkills,
                    },
                  },
                })
              }}
            ></input>
          ))}
          <label htmlFor="newSkillType">Add a New Skill Type:</label>
          <input
            key={"SkillType2"}
            name={"SkillType2"}
            value={CvInfo.skills.type2.title}
            placeholder={"Write to Set a New Skill Type"}
            onChange={(e) => {
              setCvInfo({
                ...CvInfo,
                skills: {
                  ...CvInfo.skills,
                  type2: {
                    ...CvInfo.skills.type2,
                    title: e.target.value,
                  },
                },
              })
            }}
          ></input>
        </>
      )}
      {CvInfo.skills.type2.title && (
        <>
          {handleSkillType2()}
          {CvInfo.skills.type2.skills.map((skill, index) => {
            return (
              <input
                key={`skill${index}`}
                name={`skill${index}`}
                value={skill}
                placeholder={`New skill in ${CvInfo.skills.type2.title}`}
                onChange={(e) => {
                  const updatedSkills = CvInfo.skills.type2.skills.map(
                    (s, idx) => {
                      if (idx === index) {
                        return e.target.value
                      } else {
                        return s
                      }
                    }
                  )
                  setCvInfo({
                    ...CvInfo,
                    skills: {
                      ...CvInfo.skills,
                      type2: {
                        ...CvInfo.skills.type2,
                        skills: updatedSkills,
                      },
                    },
                  })
                }}
              ></input>
            )
          })}
        </>
      )}
    </div>
  )
}
