# K-Buddy Working Skeleton

## Service Definition

K-Buddy is a spot-based mini travel buddy service for international travelers visiting Seoul. Instead of matching users for an entire trip, it helps them find someone for one specific Seoul experience lasting approximately two to four hours.

## Primary Persona

**Emma Johnson**

- 29 years old
- American marketing professional
- First-time Seoul visitor staying three to five days
- Interested in K-Beauty, Seongsu cafes, shopping, and photography
- Wants a short meetup rather than an all-day travel companion
- Prefers female travelers and public meeting places

## Job to Be Done

> I do not need a friend for my whole Seoul trip. I want to safely find someone who wants to enjoy one place with me for a few hours.

## Core Validation Goal

Validate whether a traveler can:

1. Enter travel conditions.
2. Discover a relevant Seoul buddy plan.
3. Review the activity and host information.
4. Create a minimal trust profile.
5. Send a join request.
6. Receive acceptance.
7. Confirm the date, time, and public meeting point.

## MVP Completion Definition

The first successful service outcome is reached when a join request moves through the following states:

`PENDING -> ACCEPTED -> CONFIRMED`

The confirmed state must include:

- Confirmed date and time
- Public meeting point
- Limited contact method
- Cancellation and report access

## Five-Screen Scope

1. Landing page
2. Travel-condition input
3. Search results and plan detail
4. Minimal profile and join request
5. Request status and meetup confirmation

## Core Data Entities

### UserProfile

- nickname
- ageRange
- nationality
- gender
- languages
- interests
- bio
- emailVerified

### BuddyPlan

- title
- date
- timeSlot
- area
- duration
- interests
- preference
- hostId
- capacity
- status

### JoinRequest

- planId
- requesterId
- message
- status
- createdAt

### Match

- planId
- participantIds
- confirmedDateTime
- publicMeetingPoint
- contactMethod
- status

## Out of Scope

- AI itinerary generation
- Real-time location matching
- Full real-time chat
- Reviews and ratings
- Friend and follower systems
- Complex ID verification
- Nationwide support
- Full-trip travel matching
- Paid subscriptions
