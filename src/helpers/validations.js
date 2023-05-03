export function emailValidation(emailId) {
  if (!emailId) {
    return "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailId)) {
    return "Invalid email address";
  }
}

export function nameValidation(name) {
  if (!name.trim()) {
    return "Required";
  }
}

export function lengthValidation(name, lengthOfField) {
  if (name.trim().length > 15) {
    return "Must be " + lengthOfField + "characters or less";
  }
}
