import { createAbby } from "@tryabby/next";

export const abby = createAbby({
  projectId: "clg0i3xdc0000mfh7lg0mbvnf",
  currentEnvironment: process.env.NODE_ENV,
  tests: {
    HOME: {
      variants: ["A", "B", "C"],
    },
    Marketing: {
      variants: ["b", "c", "original"],
    },
  },
  flags: [],
});