# ASR Website Database Integration

This document explains the database integration setup for the ASR website.

## Database Schema

The website connects to a PostgreSQL database with the following tables:

### `waitlist_info`
- **user_email** (VARCHAR(100), UNIQUE, NOT NULL) - Email address of the user
- **created_at** (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP) - When the user joined the waitlist

### `wishlist_info`
- **user_email** (VARCHAR(100), NOT NULL) - Email address of the user
- **user_name** (VARCHAR(100), NOT NULL) - First name of the user
- **user_surname** (VARCHAR(100), NOT NULL) - Last name of the user
- **user_message** (VARCHAR(1000), NOT NULL) - The user's message/wish
- **created_at** (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP) - When the message was submitted

## Database Connection

The website connects directly to the PostgreSQL database using the following configuration:
- **Host**: localhost
- **Port**: 5432
- **Database**: asr_dev
- **User**: karstaag
- **Password**: 199961

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

- `src/utils/database.ts` - Database connection utilities
- `src/app/api/waitlist/route.ts` - Waitlist API endpoint
- `src/app/api/contact/route.ts` - Updated contact API endpoint
- `src/components/Hero/index.tsx` - Updated with waitlist functionality
- `src/components/Contact/index.tsx` - Enhanced error handling
- `src/types/database.ts` - TypeScript type definitions
- `package.json` - Added `pg` and `@types/pg` dependencies

## Testing

All functionality has been tested with TypeScript compilation and Next.js build process. The build completes successfully without errors.

## Environment Variables

The database connection can be configured using environment variables:
- `DB_HOST` (default: localhost)
- `DB_PORT` (default: 5432)
- `DB_NAME` (default: asr_dev)
- `DB_USER` (default: karstaag)
- `DB_PASSWORD` (default: 199961)

## Security Considerations

- Database credentials are currently hardcoded but can be moved to environment variables
- Input validation is implemented for all forms
- SQL injection protection through parameterized queries
- Connection pooling for better performance and resource management 