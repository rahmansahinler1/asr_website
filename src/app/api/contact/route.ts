// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { addToWishlist } from "@/utils/database";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Split name into name and surname (assuming single space separation)
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || ''; // Handle multiple middle names

    // Save to wishlist_info table
    const result = await addToWishlist(email, firstName, lastName, message);

    if (result) {
      return NextResponse.json({
        success: true,
        message: 'Thank you for sharing your wish! We will be in touch soon.',
        data: {
          email: result.user_email,
          name: result.user_name,
          surname: result.user_surname,
          createdAt: result.created_at
        }
      });
    } else {
      throw new Error('Failed to save contact form data');
    }

  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again.' },
      { status: 500 }
    );
  }
}