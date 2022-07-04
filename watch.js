function debounceLeading(func, timeout = 500) {
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}

const chokidar = require("chokidar");
const { spawn, ChildProcessWithoutNullStreams } = require("child_process");
const watcher = chokidar.watch(["test/**/*.ts", "types/**/*.ts"], {});

/**
 * @type {ChildProcessWithoutNullStreams}
 */
let child;
const excuteChild = debounceLeading(() => {
  if (child) {
    const killed = child.kill();
    console.log(`child process is restarting, killed:${killed}`);
  }
  child = spawn("npm", ["run", "test"]);

  child.stdout.on("data", (d) => console.log(d.toString()));

  child.stderr.on("data", (d) => console.error(d.toString()));

  child.on("error", (d) => console.error(d.toString()));

  child.on("close", (code) => {
    if (String(code) === "0") {
      console.log(`done`);
      return;
    }
    console.error(`child process exited with code ${code}`);
  });
});

watcher.on("all", (ev, path) => {
  if (ev === "add") {
    console.log(`added file: ${path}`);
    return;
  }
  if (ev === "change") {
    console.log(`restart due to ${ev} file: ${path}`);
    excuteChild();
    return;
  }
  console.log(`watcher skipping ${ev}`);
});
excuteChild();
