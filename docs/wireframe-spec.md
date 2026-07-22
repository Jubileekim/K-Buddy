# Wireframe and Screen Specification

## Overall Flow

`Landing -> Conditions -> Buddy Plans -> Plan Detail -> Profile -> Join Request -> Confirmation`

The seven-step journey is compressed into five implementation screens. Plan detail is handled as a modal or expanded card.

## Screen 1: Landing

### Purpose

Explain K-Buddy within five seconds and move the visitor into buddy discovery.

### Required Sections

- Header and navigation
- Hero message
- Problem and solution
- How it works
- Popular Seoul experiences
- Safety and trust
- Final CTA
- Footer

### Primary CTA

`Find My Seoul Buddy`

## Screen 2: Travel Conditions

### Required Fields

- Date
- Time slot
- Area
- Interests
- Meetup duration
- Buddy preference

### MVP Options

**Areas**

- Seongsu
- Hongdae
- Gangnam
- Myeongdong

**Interests**

- Cafes
- K-Beauty
- Shopping
- K-pop
- Food
- Photo spots

### Primary CTA

`Show Matching Plans`

No account is required at this stage.

## Screen 3: Buddy Plans

### Search Summary

Display selected date, area, and interests with an Edit action.

### Plan Card Content

- Host avatar
- Nickname, age range, nationality
- Date and time
- Area
- Interest tags
- Duration
- Preference
- Current participant count
- View Plan action

### Plan Detail

- Activity description
- Estimated duration
- Host languages
- Public-meeting policy
- Privacy notice
- Report action
- Request to Join CTA

## Screen 4: Minimal Profile and Request

### Required Profile Fields

- Verified email
- Nickname
- Age range
- Nationality
- Gender
- Languages
- Interests
- Short bio
- Safety-rules agreement

### Optional Fields

- Profile image
- Social URL

### Request Review

Display the selected plan summary and a generated message that the user can edit.

### Primary CTA

`Send Join Request`

## Screen 5: Status and Confirmation

### Pending

- Request summary
- Host profile
- Pending status badge
- Cancel request
- Browse other plans

### Accepted

- Acceptance message
- Review meetup details action

### Confirmed

- Matched participants
- Date and time
- Public meeting point
- Duration
- Limited contact method
- Add to My Plan
- Cancel Meetup
- Report

## Mobile Navigation

After profile creation, use a five-item bottom navigation:

- Home
- Search
- My Plan
- Messages
- Profile

For the MVP, Messages can be limited to service notifications and restricted meetup messages rather than full real-time chat.
