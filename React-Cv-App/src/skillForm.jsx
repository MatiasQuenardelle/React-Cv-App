export default function SkillForm() {
  return (
    <>
      <form action="">
        <div className="skillsForm">
          <h5>
            Showcase the most relevant skills applicable to the job you're
            applying for
          </h5>
          <label htmlFor="Skill">Relevant Skill:</label>
          <input
            type="text"
            name="skill"
            id="skill"
            placeholder="relevantSkill"
          />
        </div>
      </form>
    </>
  )
}
