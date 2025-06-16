import { NextResponse } from "next/server";
import { addToWaitlist, checkEmailInWaitlist } from "@/utils/database";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Input validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const emailExists = await checkEmailInWaitlist(email);
    if (emailExists) {
      return NextResponse.json({
        success: true,
        message: 'You are already on the waitlist! We will notify you when aisearchrefs launches.',
        alreadyExists: true
      });
    }

    // Add to waitlist
    const result = await addToWaitlist(email);
    
    if (result) {
      return NextResponse.json({
        success: true,
        message: 'Thank you! We will notify you when aisearchrefs launches.',
        data: {
          email: result.email,
          createdAt: result.created_at
        }
      });
    } else {
      // This case handles when duplicate email is detected
      return NextResponse.json({
        success: true,
        message: 'You are already on the waitlist! We will notify you when aisearchrefs launches.',
        alreadyExists: true
      });
    }

  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    );
  }
} 