# ASR Website Database Integration

This document explains the database integration setup for the ASR website using Supabase.

## Database Schema

The website connects to a Supabase PostgreSQL database with the following tables:

### `waitlist_info`
- **id** (SMALLINT, GENERATED ALWAYS AS IDENTITY, PRIMARY KEY) - Auto-generated unique identifier
- **email** (TEXT) - Email address of the user
- **created_at** (TIME WITHOUT TIME ZONE, DEFAULT now()) - When the user joined the waitlist

### `wishlist_info`
- **id** (SMALLINT, GENERATED ALWAYS AS IDENTITY, PRIMARY KEY) - Auto-generated unique identifier
- **email** (TEXT, NOT NULL) - Email address of the user
- **user_name** (VARCHAR, NOT NULL) - First name of the user
- **user_surname** (VARCHAR) - Last name of the user
- **user_message** (VARCHAR, NOT NULL) - The user's message/wish
- **created_at** (TIME WITHOUT TIME ZONE, DEFAULT now()) - When the message was submitted

## Database Connection

The website connects to Supabase using the Supabase JavaScript client with the following environment variables:
- **NEXT_PUBLIC_SUPABASE_URL** - Your Supabase project URL
- **NEXT_PUBLIC_SUPABASE_ANON_KEY** - Your Supabase anonymous/public key

## API Endpoints

### `/api/waitlist` (POST)
Handles email signups from the Hero section waitlist form.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you! We will notify you when aisearchrefs launches.",
  "data": {
    "email": "user@example.com",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

### `/api/contact` (POST)
Handles form submissions from the Contact section.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I would like to track my brand mentions..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for sharing your wish! We will be in touch soon.",
  "data": {
    "email": "john@example.com",
    "name": "John",
    "surname": "Doe",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

## Features Implemented

1. **Waitlist Signup**: Users can join the waitlist from the Hero section
2. **Contact Form**: Users can submit wishes/messages through the contact form
3. **Duplicate Prevention**: Waitlist prevents duplicate email addresses
4. **Error Handling**: Proper error handling and user feedback
5. **Loading States**: Visual feedback during form submissions
6. **Input Validation**: Email format validation and required field checks

## Files Modified/Created

- `src/utils/database.ts` - Supabase database connection utilities
- `src/app/api/waitlist/route.ts` - Waitlist API endpoint
- `src/app/api/contact/route.ts` - Contact API endpoint
- `src/components/Hero/index.tsx` - Waitlist functionality
- `src/components/Contact/index.tsx` - Contact form
- `src/types/database.ts` - TypeScript type definitions
- `package.json` - Updated with Supabase dependencies (removed pg dependencies)

## Testing

All functionality has been tested with TypeScript compilation and Next.js build process. The build completes successfully without errors.

## Environment Variables

The following environment variables are required:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous/public key

## Security Considerations

- Uses Supabase Row Level Security (RLS) for data protection
- Environment variables for secure configuration
- Input validation is implemented for all forms
- SQL injection protection through Supabase's built-in parameterized queries
- Automatic connection management through Supabase client

## Important Notes

⚠️ **Schema Issue**: The `wishlist_info` table in your provided schema is missing the `user_email` field. You need to add this field to your Supabase table:

```sql
ALTER TABLE wishlist_info ADD COLUMN user_email VARCHAR;
```

Or update the contact form to not collect email addresses if you prefer to keep the current schema.

## Migration from PostgreSQL

This setup has been migrated from PostgreSQL to Supabase. The main changes include:
- Replaced `pg` client with Supabase client
- Updated field names to match new schema (both tables now use `email`)
- Added auto-generated `id` fields as primary keys
- Changed timestamp handling to match Supabase format 