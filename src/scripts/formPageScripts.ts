export function formSubmission(formData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirm_password = formData.get("confirm_password");

  if (password !== confirm_password) {
    alert("Passwords don't match");
    return;
  }
}
