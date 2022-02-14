import React, { useState } from "react";

import PhoneInput from "react-phone-number-input";
import "./input-phone-number.css";

function InputPhoneNumber() {
  const [value, setValue] = useState();
  return <PhoneInput placeholder="Enter phone number" international value={value} onChange={setValue} countryCallingCodeEditable={false} defaultCountry="MY" />;
}

export default InputPhoneNumber;
