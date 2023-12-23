import React, { useState } from "react"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

function PhoneComponent({ value, onChange }) {
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={onChange}
    />
  )
}

export default PhoneComponent
