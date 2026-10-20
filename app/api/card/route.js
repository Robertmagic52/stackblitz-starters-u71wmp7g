import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file'); // Matches the form key sent from your Shortcut

    if (!file) {
      return NextResponse.json({ success: false, error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(process.cwd(), 'public', 'latest-card.png');
    
    // Overwrites the image in your public folder on every upload
    await writeFile(filePath, buffer);

    return NextResponse.json({ success: true, url: '/latest-card.png' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
