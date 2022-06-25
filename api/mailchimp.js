const addUserToMailchimp = (email) => {
  fetch("https://madisonbuilders.llc/api/mailchimp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email })
  });
};

export default addUserToMailchimp;
