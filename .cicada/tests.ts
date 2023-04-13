import { Job, Pipeline } from "https://deno.land/x/cicada/lib.ts";
import packageJson from "../package.json" assert { type: "json" };

const NODE_MATRIX = [14, 16, 18];

const jobs = NODE_MATRIX.map(
  (nodeVersion) =>
    new Job({
      name: `Build with Node v${nodeVersion}`,
      image: `node:${nodeVersion}-alpine`,
      steps: [
        {
          name: "Install dependencies",
          run: `npm i -g ${packageJson.packageManager} && pnpm i`,
        },
        {
          name: "Build Project",
          run: `pnpm ${packageJson.scripts.build}`,
        },
      ],
    })
);

export default new Pipeline([...jobs]);
