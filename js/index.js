const run = () => {
  console.log("index running");
};

import Highway from "@dogstudio/highway";
import Fade from "./transition";

const H = new Highway.Core({
  transitions: {
    default: Fade,
  },
});
