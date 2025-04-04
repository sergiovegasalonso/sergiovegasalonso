import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.resolve("./src/pages/api", "sample.pdf");
    const fileBuffer = await fs.readFile(filePath);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="sample.pdf"',
      },
    });
  } catch (error) {
    console.error("Error reading the PDF file:", error);
    return new Response("Failed to download the file", { status: 500 });
  }
}
