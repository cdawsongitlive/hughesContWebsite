import { apiRequestExternal } from "./util.js";

const endpoint = `https://formspree.io/f/mjvqgbyj`;

function submit(data) {
  return apiRequestExternal(endpoint, "POST", data);
}

const contact = { submit };

export default contact;
