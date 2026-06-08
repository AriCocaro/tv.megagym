import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const fotosDir = path.join(process.cwd(), "public", "fotos");

  const archivos = fs
    .readdirSync(fotosDir)
    .filter((file) =>
      /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
    );

  const fotos = archivos.map((file) => `/fotos/${file}`);

  return NextResponse.json(fotos);
}