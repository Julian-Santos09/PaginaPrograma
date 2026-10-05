const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "src", "data", "curriculum.ts");
const src = fs.readFileSync(file, "utf8");

const re =
  /\{ no: (null|\d+), code: "(\d+)", name: "([^"]+)", nature: "([^"]+)", credits: (\d+), semester: (\d+), area: (null|"[^"]+"), prereq: (null|"[^"]+")/g;

const rows = [];
let m;
while ((m = re.exec(src))) {
  rows.push({
    code: m[2],
    name: m[3],
    nature: m[4],
    cr: Number(m[5]),
    sem: Number(m[6]),
    area: m[7],
    prereq: m[8],
  });
}

console.log("filas leídas:", rows.length, "(esperado 52: 51 espacios + opción de grado)");

const bySem = {};
for (const r of rows) bySem[r.sem] = (bySem[r.sem] || 0) + r.cr;

let total = 0;
for (let s = 1; s <= 10; s++) {
  total += bySem[s] || 0;
  console.log(`  semestre ${String(s).padStart(2)}: ${bySem[s] || 0} créditos`);
}
console.log("TOTAL:", total, "| esperado 178 ->", total === 178 ? "OK" : "ERROR");

const codes = new Set(rows.map((r) => r.code));
const broken = rows.filter(
  (r) => r.prereq !== "null" && !codes.has(r.prereq.slice(1, -1))
);
console.log("prerrequisitos apuntando a código inexistente:", broken.length || "ninguno");

const seen = new Map();
const dupes = [];
for (const r of rows) {
  if (seen.has(r.code)) dupes.push(r.code);
  seen.set(r.code, true);
}
console.log("códigos duplicados:", dupes.length ? dupes.join(", ") : "ninguno");

const invalidNature = rows.filter((r) => !["T", "T-P", "P"].includes(r.nature));
console.log("naturaleza inválida:", invalidNature.length || "ninguna");

const invalidArea = rows.filter(
  (r) => r.area !== "null" && !/^(socio|ciencias|basica|aplicada)$/.test(r.area.slice(1, -1))
);
console.log("área inválida:", invalidArea.length || "ninguna");

const numbers = rows.map((r) => Number(r.code.slice(-1) * 0)); // noop
const names = rows.map((r) => r.name);
const degree = rows.filter((r) => r.cr === 10 && r.sem === 10);
console.log("opción de grado (10 cr, sem 10):", degree.map((d) => d.name).join(", ") || "FALTA");
console.log("espacios académicos (sin opción de grado):", rows.length - degree.length);
