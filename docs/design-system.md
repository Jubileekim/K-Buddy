# K-Buddy Design System

## Brand Direction

K-Buddy combines Seoul Indigo with soft pastel gradients and restrained liquid-glass surfaces. The visual tone should feel safe, optimistic, international, and modern rather than like a dating app.

## Color Tokens

| Role | Name | Hex |
|---|---|---|
| Primary | Seoul Indigo | `#415FB5` |
| Dark text | Night Navy | `#172B4D` |
| Light selection | Sky Lavender | `#E9EDFF` |
| Accent | Sunset Coral | `#FF7867` |
| Page background | Cloud White | `#F7F8FC` |
| Border | City Mist | `#DDE2EE` |
| Secondary text | Urban Gray | `#667085` |

## Liquid-Glass Treatment

Use the effect selectively for navigation, hero visual, cards, modal, and final CTA.

```css
.glass-card {
  border: 1px solid rgba(255, 255, 255, 0.72);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.76),
    rgba(255, 255, 255, 0.42)
  );
  backdrop-filter: blur(24px) saturate(145%);
  box-shadow: 0 18px 50px rgba(54, 74, 138, 0.12);
}
```

The glass effect must not reduce text contrast or make the interface visually noisy.

## Typography

Recommended stack:

```css
font-family: Inter, Pretendard, "Noto Sans KR", system-ui, sans-serif;
```

### Hierarchy

- Hero title: responsive `clamp()` scale
- Section heading: bold and compact
- Body: 16-18px with generous line height
- Eyebrow: uppercase, small, increased letter spacing
- Secondary text: Urban Gray

## Spacing

Use an 8px-based spacing system.

- 8px: icon and text gap
- 16px: mobile page margin and compact card gap
- 24px: card padding
- 32px: component-group spacing
- 48px: section subsection spacing
- 72-80px: desktop section spacing

## Radius

- Small control: 8px
- Button and input: 12px
- Card: 20-22px
- Modal and major glass panel: 28-34px
- Chip and badge: full pill radius

## Components

### Primary Button

- Gradient based on indigo, violet, and sky blue
- White label
- Minimum height 48px
- Strong visible focus state

### Secondary Button

- Translucent white surface
- Indigo border and label
- Same size and radius as primary button

### Experience Card

- Location or activity visual first
- Activity metadata
- Activity title
- Short description
- View Plan action
- Hover and keyboard-focus elevation

### Chips

- Neutral translucent state when unselected
- Lavender fill and indigo border when selected
- Visible focus outline
- Selection should not be represented by color alone in the final app

## Logo Concept

The selected simplified logo combines:

- Namsan Seoul Tower
- A curved bridge
- Two travelers

This represents a short Seoul connection between people without overloading the mark with detailed city imagery.
