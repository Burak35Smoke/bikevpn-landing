import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises'; // Using fs/promises for async file operations

// Define the path for the emails file
const EMAILS_FILE_PATH = '/tmp/emails.json';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body.email;

    // Basic email validation
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }

    // Ensure the directory exists (optional, as /tmp/ usually exists)
    // await fs.mkdir(path.dirname(EMAILS_FILE_PATH), { recursive: true }); // Might not be needed for /tmp/

    // Append email to the file, creating the file if it doesn't exist.
    // Each email will be part of a JSON array.
    let emails: string[] = [];
    try {
      const data = await fs.readFile(EMAILS_FILE_PATH, 'utf8');
      emails = JSON.parse(data);
    } catch (e: unknown) {
      // If file doesn't exist or is not valid JSON, start with an empty array
      // Check if 'e' is an error object and has a 'code' property
      if (typeof e === 'object' && e !== null && 'code' in e && (e as { code: unknown }).code !== 'ENOENT') {
        console.error('Error reading email file, starting fresh:', e);
      }
      // If it's not an error with a code property or it is ENOENT, we silently proceed to initialize 'emails' as empty
    }

    if (emails.includes(email)) {
      return NextResponse.json({ message: 'Email already subscribed' }, { status: 409 }); // 409 Conflict
    }

    emails.push(email);
    await fs.writeFile(EMAILS_FILE_PATH, JSON.stringify(emails, null, 2), 'utf8');

    return NextResponse.json({ message: 'Subscribed successfully' }, { status: 200 });
  } catch (e: unknown) {
    console.error('Subscription error:', e);
    return NextResponse.json({ message: 'Error saving email' }, { status: 500 });
  }
}
