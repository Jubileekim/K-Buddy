# Advanced Implementation Requirements

## 1. Responsive Layout

Use a mobile-first approach.

### Breakpoints

- Mobile: below 768px
- Tablet: 768px to 1023px
- Desktop: 1024px and above

### Expected Behavior

- Header changes from full navigation to a menu toggle.
- Hero changes from two columns to one column.
- CTA buttons become full width on small screens.
- Experience cards change from four columns to two and then one.
- Footer changes from a horizontal layout to a vertical stack.
- No horizontal page overflow is allowed.

## 2. JavaScript Interactions

### Required

- Mobile menu toggle
- `aria-expanded` synchronization
- Smooth navigation to page sections
- Scroll reveal animation using `IntersectionObserver`
- Hover and keyboard-focus feedback for cards
- CTA-triggered buddy-search dialog
- Search-form validation and visible response message
- Escape-key and backdrop dialog closing

### Motion Preference

Respect `prefers-reduced-motion`. Content must remain visible and usable when animation is disabled.

## 3. Content and Visual Completion

The landing page should feel like a real service rather than a generic school exercise.

### Required Content

- Service-specific headline and value proposition
- Clear problem and solution
- Three-step explanation
- Four realistic Seoul experience concepts
- Safety and privacy explanation
- Repeated but controlled conversion CTA

### Required Visual Direction

- Seoul Indigo brand foundation
- Pastel ambient gradients
- Restrained liquid-glass panels
- Consistent radius, spacing, shadow, and icon language
- Activity-first imagery rather than profile-first dating-app imagery

## 4. Accessibility

### Semantic Structure

- `header`, `nav`, `main`, `section`, and `footer`
- One page-level `h1`
- Logical heading order
- Buttons for actions and links for navigation

### Keyboard Support

- Skip link
- Visible `:focus-visible` style
- Menu can be opened and closed from the keyboard
- Dialog can be used and closed from the keyboard
- All form controls are labeled

### Images and Icons

- Informative images require descriptive `alt` text.
- Decorative images and SVGs use empty alternative text or `aria-hidden="true"`.
- Icon-only controls require an accessible name.

### Forms

- Do not rely on placeholders as labels.
- Required fields use native validation where appropriate.
- Feedback is connected through an `aria-live` region.
- Selection and error states must not depend on color alone.

## 5. Suggested File Structure

```text
K-Buddy/
├── index.html
├── css/style.css
├── js/main.js
├── assets/logo.svg
├── docs/
├── README.md
└── .gitignore
```

## 6. Vercel Deployment

This project is a static site and does not require a build command.

Recommended Vercel settings:

- Framework preset: Other
- Root directory: repository root
- Build command: empty
- Output directory: empty

After deployment:

1. Open the Vercel URL in a private browser window.
2. Test mobile navigation.
3. Open and submit the search dialog.
4. Verify keyboard focus visibility.
5. Add the deployment URL to `README.md`.

## 7. Definition of Done

- Public GitHub repository is accessible while logged out.
- Latest code is committed to `main`.
- Desktop and mobile layouts work without overflow.
- Navigation, dialog, and form interactions work.
- Page content remains usable without animation.
- Vercel deployment is publicly accessible.
- README includes the final deployment URL.
