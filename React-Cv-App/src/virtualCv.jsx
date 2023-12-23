import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { FcCellPhone } from "react-icons/fc"
import { MdMarkEmailRead } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"

export function VirtualCv({ CvInfo, exampleCv }) {
  {
    return (
      <div className="virtualCv">
        <div className="mainInfo">
          <div className="basicInfo">
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
        </div>
        <div className="contactSkillInfo">
          <div className="contactCard">
            <ul>
              <li>
                <MdMarkEmailRead />
                {CvInfo.contactInfo.email || exampleCv.contactInfo.email}
              </li>
              <li>
                <FcCellPhone />
                {CvInfo.contactInfo.phone || exampleCv.contactInfo.phone}
              </li>
              <li>
                <FaLocationDot />
                {CvInfo.contactInfo.location || exampleCv.contactInfo.location}
              </li>
              <li>
                <FaLinkedin />
                {CvInfo.experience.linkedInWebsite ||
                  exampleCv.experience.linkedInWebsite}
              </li>
            </ul>
          </div>
          <div className="skillsCard">
            <h5>Technical Skills:</h5>
            <ul>
              <h3>
                {CvInfo.skills.type1.title || exampleCv.skills.type1.title}
              </h3>
              <ul>
                {CvInfo.skills.type1.title
                  ? CvInfo.skills.type1.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))
                  : exampleCv.skills.type1.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
              </ul>
            </ul>
            <ul>
              <h3>
                {CvInfo.skills.type2.title || exampleCv.skills.type2.title}
              </h3>
              <ul>
                {CvInfo.skills.type2.title
                  ? CvInfo.skills.type2.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))
                  : exampleCv.skills.type2.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
