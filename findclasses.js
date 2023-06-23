const { resolve } = require('path');
const { readdir } = require('fs').promises;

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

const result = [];
for await (const f of getFiles('.')) {
    if(f.includes("src/test/java/") && f.endsWith(".java")) {
	result.push(f.replaceAll("/", ".").slice(f.indexOf("com/github/pedrovgs")).replace(".java", ""));
    }
}
console.log(result.join(" "));
