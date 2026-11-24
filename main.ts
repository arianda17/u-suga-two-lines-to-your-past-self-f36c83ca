import fs from "fs";

const ENTRY =
  "Don't sell your grandfather's Seiko watch to pay the rent that month, or you'll lose the only thing he ever gave you.\n" +
  "Keeping it taught me that heirlooms outlast hardship, and I never traded anything irreplaceable for cash again.\n";

const outDir = "/output";
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
process.stdout.write(ENTRY);
