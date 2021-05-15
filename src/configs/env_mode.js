import config from "../../config.json";

function Environment() {
  if (__DEV__) {
    return config["Development"];
  } else {
    return config["Production"];
  }
}

export default Environment();
