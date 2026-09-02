import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const forwarded = process.argv.slice(2);
const nextArgs = ["dev"];

for (let index = 0; index < forwarded.length; index += 1) {
  const argument = forwarded[index];

  if (argument === "--strictPort") {
    continue;
  }

  if (argument === "--host") {
    nextArgs.push("--hostname", forwarded[index + 1]);
    index += 1;
    continue;
  }

  if (argument.startsWith("--host=")) {
    nextArgs.push(`--hostname=${argument.slice("--host=".length)}`);
    continue;
  }

  nextArgs.push(argument);
}

const child = spawn(
  process.execPath,
  [require.resolve("next/dist/bin/next"), ...nextArgs],
  {
    env: process.env,
    stdio: "inherit",
  },
);

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
