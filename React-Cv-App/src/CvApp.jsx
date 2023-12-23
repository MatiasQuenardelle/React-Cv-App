import { useState } from "react"
import { VirtualCv } from "./virtualCv"
import { BasicInfoForm } from "./basicInfoForm"
import { ContactInfoForm } from "./contactInfoForm"
import { EducationForm } from "./educationForm"
import { ExperienceForm } from "./experienceForm"
import { SkillsForm } from "./skillsForm"
import Clock from "./styles/clock"

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
      type1: { title: "", skills: [] },
      type2: {
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
      type1: {
        title: "Photoshop",
        skills: ["Ilustrator", "Figma"],
      },
      type2: {
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

  return (
    <>
      <div className="app">
        <form id="cvForm" onSubmit={handleSubmitInfo}>
          <div className="header">
            <h1>CV Generator</h1>
            <p>
              Create your CV by filling out the forms below! Your CV will be
              dynamically updated in the preview.
            </p>
          </div>
          <BasicInfoForm CvInfo={CvInfo} setCvInfo={setCvInfo}></BasicInfoForm>
          <ContactInfoForm
            CvInfo={CvInfo}
            setCvInfo={setCvInfo}
          ></ContactInfoForm>
          <EducationForm CvInfo={CvInfo} setCvInfo={setCvInfo}></EducationForm>
          <ExperienceForm
            CvInfo={CvInfo}
            setCvInfo={setCvInfo}
          ></ExperienceForm>
          <SkillsForm CvInfo={CvInfo} setCvInfo={setCvInfo}></SkillsForm>
          <button type="submit">Submit</button>
        </form>
        <div className="container">
          <VirtualCv CvInfo={CvInfo} exampleCv={exampleCv}></VirtualCv>
        </div>
      </div>
    </>
  )
}
