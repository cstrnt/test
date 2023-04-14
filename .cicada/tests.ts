import { Job, Pipeline } from "https://deno.land/x/cicada@v0.1.32/lib.ts";
import packageJson from "../package.json" assert { type: "json" };

const packageManager = packageJson.packageManager.split("@")[0];

const NODE_MATRIX = [16];

const jobs = NODE_MATRIX.map(
  (nodeVersion) =>
    new Job({
      name: `Build with Node v${nodeVersion}`,
      image: `node:${nodeVersion}-alpine`,
      steps: [
        {
          name: "Install dependencies",
          run: `npm i -g ${packageJson.packageManager} && ${packageManager} i`,
        },
        {
          name: "Build Project",
          run: `pnpm ${packageJson.scripts.build}`,
          cacheDirectories: [".next/cache"],
        },
      ],
    })
);

export default new Pipeline([...jobs]);
