function validateEmail() {
  let value = emailInput.value;
  let hasAtSign = value.indexOf('@') > -1;
  let hasDot =  value.indexOf('.') > -1;
  return value && hasAtSign && hasDot;
}
