import PhoneComponent from "./phoneComponent"

export function ContactInfoForm({ CvInfo, setCvInfo }) {
  const HandlePhoneChange = (value) => {
    setCvInfo({
      ...CvInfo,
      contactInfo: {
        ...CvInfo.contactInfo,
        phone: value,
      },
    })
  }

  return (
    <div className="contactInfo">
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
      <PhoneComponent
        id="Phone"
        placeholder="Enter Phone Number"
        value={CvInfo.contactInfo.phone}
        onChange={HandlePhoneChange}
      ></PhoneComponent>
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
    </div>
  )
}
