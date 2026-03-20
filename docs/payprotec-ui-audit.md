# PayProTec Website UI Audit

**Website Reviewed:** [https://www.payprotec.com/](https://www.payprotec.com/)
**Review Date:** March 20, 2026
**Prepared For:** Internal design and implementation reference
**Scope:** Homepage UI review based on live-site inspection and DOM/CSS analysis

## 1. Executive Summary

PayProTec's homepage presents itself as a polished B2B payments brand with a strong corporate-tech aesthetic. The interface combines oversized compressed headlines, script accents, bold brand orange, dark navy neutrals, rounded controls, and animated transitions. The experience is structured as a modern marketing homepage with a custom full-screen navigation overlay, a dynamic hero, tabbed content blocks, promotional feature sections, a testimonials carousel, and a dense sitemap-style footer.

The brand expression is consistent and memorable. The strongest visual markers are:

- A vivid orange accent system.
- A compressed uppercase headline style.
- Handwritten script accents used selectively for warmth and emphasis.
- Rounded pill buttons, tabs, and badges.
- Dark blue and charcoal backgrounds paired with bright, high-contrast calls to action.

## 2. Review Method

This document is based on:

- Live inspection of the homepage in a browser.
- DOM snapshot review.
- CSS and HTML source inspection.
- Interaction review of visible navigation, tabs, buttons, and motion systems.

Some motion details were confirmed from source markup and stylesheet behavior in addition to visual review.

## 3. Brand and Visual Identity

### 3.1 Overall Design Direction

The site uses a professional, sales-oriented design language aimed at trust, momentum, and clarity. It feels designed for payment processing, sales partnerships, and merchant solutions rather than consumer retail.

Primary stylistic qualities:

- Corporate but not sterile.
- Bold and promotional.
- Clean, high-contrast, and conversion-oriented.
- Slightly playful through script accents and animated text.

### 3.2 Logo Use

The homepage uses multiple versions of the PayProTec identity:

- An animated PPT logo in the hero area.
- A small PPT mark in the footer.
- A Lottie-based logo transition during page-load and internal page changes.

Observed logo behavior:

- The hero logo is treated as part of the brand story, not just a static identifier.
- The footer logo is simpler and functional.
- The transition logo reinforces brand consistency during navigation.

## 4. Typography

### 4.1 Fonts Loaded

The site loads or references the following font families:

- `Plus Jakarta Sans`
- `Interstate Black Compressed`
- `Biroscriptusplus`
- `Biroscriptplus`
- `Oswald`
- `Merriweather`
- `Zeyada`

### 4.2 Fonts Most Visible on the Homepage

The homepage primarily uses these visible type styles:

- `Plus Jakarta Sans` for body copy and interface text.
- `Interstate Black Compressed` for large hero and jumbo headings.
- `Biroscriptusplus` for handwritten accent text and decorative labels.

### 4.3 Typography Roles

**Headline style**

- Large, uppercase, compressed.
- Used in the hero and major section headings.
- High impact and clearly sales-driven.

**Body style**

- Clean sans-serif.
- Good readability.
- Used for descriptions, supporting copy, and footer content.

**Script accent style**

- Used for selective emphasis only.
- Appears in the "FOR OVER 20 YEARS!" badge.
- Appears in menu headings.
- Appears in the footer CTA heading.

### 4.4 Typography Notes

- The main hero headline is extremely large and built for impact.
- Letter spacing is tightened on major headings.
- Script is used sparingly, which helps preserve emphasis.
- The type hierarchy is clear and commercially effective.

## 5. Color System

### 5.1 Primary Brand Colors

Observed core palette:

- PayProTec Orange: `#ff5000`
- PPT Black / Charcoal: `#1d252c`
- Near Black Navy: `#1e2235`
- Midnight Blue: `#23293e`
- Dark Slate Blue: `#2b3148`
- Slate Blue: `#363b57`
- Lime Green: `#6fc066`
- Lemon Yellow: `#ffd340`
- White: `#ffffff`
- White Smoke: `#eeeeee`
- Gray text tones: `#666666`, `#888888`

### 5.2 Color Usage Patterns

**Orange**

- Primary brand accent.
- Used for buttons, highlight text, active tabs, interactive links, arrows, and emphasis.

**Dark navy and charcoal tones**

- Used for structural depth and contrast.
- Applied to the navigation overlay, footer, and darker promotional cards.

**Lime and lemon accents**

- Used more selectively.
- Lime appears in CTA treatments.
- Lemon appears in the `Connect` card and select highlight areas.

### 5.3 Color Impression

The color system is memorable and controlled. Orange does most of the brand work, while the blues and charcoals create trust and seriousness. Yellow and green are used as supporting accents rather than primary identifiers.

## 6. Navigation and Menu System

### 6.1 Header Pattern

The site does not use a conventional full-width navigation bar. Instead, it uses a fixed top-right menu dock.

Observed characteristics:

- White floating header unit.
- Rounded lower-left corner.
- `Menu` label plus custom icon.
- Fixed positioning.
- Minimal footprint in the default state.

### 6.2 Menu Overlay Structure

The menu expands into a full-screen overlay with a split layout.

Desktop structure:

- Left panel for main navigation.
- Right panel for secondary navigation, categorized resources, and social links.

Observed menu groups:

- Main Menu
- Merchant Types
- Products & Solutions
- Partner Resources

Primary menu links:

- Intro
- Why PPT?
- EDGE
- Point of Sale
- Connect

### 6.3 Menu Visual Style

- High contrast split between dark left and dark-blue right panels.
- Large main links.
- Script-style menu section titles.
- Social icons integrated into the menu itself.
- The active brand item, `EDGE`, is highlighted in orange.

### 6.4 Menu Interaction Notes

- Menu links change to orange on hover.
- The close state uses a custom close button with a scripted `Close` label.
- The system feels custom rather than template-standard.

## 7. Hero Section

### 7.1 Hero Composition

The hero is the most visually important section on the page and contains:

- Animated PPT logo.
- Rotated script badge reading `FOR OVER 20 YEARS!`
- Massive headline.
- Typewriter-animated industry text.
- Supporting paragraph.
- Desktop scroll cue.
- Tab-based quick-navigation area below.

### 7.2 Hero Headline Behavior

The headline reads:

`Payment solutions for ...`

The final industry term cycles dynamically through multiple labels, including:

- restaurants
- bars & breweries
- retail stores
- utilities
- healthcare
- business services
- insurance
- construction

This creates motion, variety, and breadth without changing the overall layout.

### 7.3 Hero Supporting Copy

The subcopy is clean and concise, with the word `edge` emphasized in orange italics.

### 7.4 Hero Scroll Indicator

There is a circular scroll icon on desktop:

- Orange arrow icon.
- Dark border.
- Circular outline.
- Positioned as a visual cue rather than a heavy control.

The scroll cue is hidden on smaller breakpoints.

## 8. Hero Tab System and Quick-Nav Cards

### 8.1 Tab Labels

The hero content area includes two tabs:

- `Partner with us`
- `Own a business?`

### 8.2 Tab Styling

- Pill-shaped controls.
- White background for inactive state.
- Orange-filled pill for the active state.
- Clean, modern, highly legible.

### 8.3 Partner Tab Cards

The partner-facing tab includes promotional cards for:

- EDGE
- Why PPT?
- Connect
- Point of Sale
- myPayProTec
- Equipment
- Software

### 8.4 Merchant Tab Cards

The merchant-facing tab includes:

- Why PPT?
- EDGE
- Point of Sale
- Equipment
- Software
- Restaurant tile
- Retail tile
- E-commerce tile

### 8.5 Card Styling

Common patterns across these cards:

- Strong border radius.
- Large background imagery or illustration overlays.
- Color-tinted gradients over images.
- White text over dark or saturated backgrounds.
- Layout aligned toward bottom content areas.

Observed card color treatments:

- `EDGE`: orange overlay
- `Connect`: lemon yellow overlay
- `Why PPT?`: dark blue / radial-style treatment
- `Point of Sale`: midnight blue image overlay
- `Software`: slate blue image overlay
- `Equipment`: dark slate image overlay

### 8.6 Card Content Tone

The cards are concise and action-driven. They work more like visual shortcuts than full content blocks.

## 9. Promotional Feature Sections

### 9.1 EDGE Section

This section includes:

- EDGE illustration
- EDGE logo
- Headline and subtitle
- Supporting explanation
- Text-style CTA link with icon

Visual tone:

- Spacious
- Product-forward
- Clean
- Oriented toward conversion

### 9.2 Partner-Centric Section

The second feature section communicates the non-compete message:

- Supporting illustration
- Straightforward headline
- Supporting paragraph

This section is calmer and more informational than the hero.

## 10. Testimonial Section

### 10.1 Heading Style

The testimonial heading is one of the strongest typographic moments on the page:

- Oversized jumbo text
- Gradient-filled lettering
- Orange scribble underline treatment on the word `every`

### 10.2 Carousel Structure

The testimonial area is implemented as a slider/carousel.

Observed behavior:

- Multiple review cards
- Manual next-arrow control
- No obvious visible autoplay in the live state
- Review CTA below: `View more reviews`

### 10.3 Visual Style

- Card-driven
- Spacious
- Trust-building
- Supported by a pale background shape behind the section

The section feels more polished than a basic quote list and uses motion sparingly.

## 11. Footer System

### 11.1 Footer Character

The footer is more than a legal strip. It acts as:

- A closing CTA zone
- A social/contact zone
- A sitemap
- A compliance/legal zone

### 11.2 Footer Components

Observed elements:

- Script CTA heading: `Ready for something better?`
- Green rounded CTA button: `Become a Partner`
- Social icons
- Compliance text
- Language / locale flags
- Multi-column navigation groups
- Footer logo
- Legal links
- `Proudly Made in Indiana` badge

### 11.3 Footer Visual Style

- Dark near-black background
- White text
- Muted secondary link color
- Orange hover states
- Rounded badges and CTA button

The footer feels consistent with the rest of the brand and remains highly structured.

## 12. Buttons, Links, and UI Controls

### 12.1 Primary Buttons

Primary button characteristics:

- Orange background
- White text
- Pill shape
- Slight hover lift
- Soft orange glow shadow on hover

### 12.2 Text Buttons

Text-style buttons are also used:

- Orange text
- Minimal chrome
- Icon support
- Cleaner, less promotional than solid CTAs

### 12.3 Secondary Buttons

Secondary styles use:

- White background
- Light border
- Orange text
- Softer shadow-based hover behavior

### 12.4 Link Behavior

Observed interactive changes:

- Menu links turn orange on hover.
- Footer links turn orange on hover.
- Social icons scale on hover.

## 13. Motion, Animation, and Effects

### 13.1 Page Transition System

One of the most notable behaviors is the branded transition overlay.

Observed and source-confirmed behavior:

- Full-screen transition layer
- Dark gradient background
- Animated Lottie PPT mark
- Triggered on page load and internal link transitions

This is a more premium treatment than a default page switch.

### 13.2 Typewriter Effect

The hero includes a true typewriter effect with:

- Sequential word replacement
- Blinking cursor
- Adjustable write/delete timing from script attributes

### 13.3 Hover Effects

Observed hover effects include:

- Button lift and glow
- Menu link color transitions
- Footer link color transitions
- Social icon scale increase

### 13.4 Scroll / Reveal Effects

The CSS and page markup indicate load and reveal effects on several homepage sections:

- Initial fade-in states
- Element reveal timing on larger viewports
- Decorative scroll cue on desktop

### 13.5 Smooth Scrolling

The site enables smooth scrolling globally, which supports the polished brand feel.

## 14. Shapes, Surfaces, and Decorative Treatments

### 14.1 Rounded Geometry

Rounded corners are a major part of the design language.

Common radius patterns:

- `50px` pill buttons and tabs
- `1rem` to `2rem` rounded cards
- Large rounded menu dock
- Rounded footer badge

### 14.2 Background Treatments

The site uses layered backgrounds frequently:

- Image plus color overlay
- Gradient plus image
- Radial fade treatments
- Dark-to-transparent overlays

### 14.3 Scribble Accent

The scribble underline is used selectively as a branded emphasis device. It adds personality without weakening the professional tone.

## 15. Logos, Icons, and Illustrations

### 15.1 Logos

Observed logo variants:

- Animated PPT logo in hero
- EDGE logo in content
- Footer PPT mark

### 15.2 Icons

Observed icon use includes:

- Arrow icons for CTAs
- Menu icon lines
- Social media icons
- Scroll arrow

### 15.3 Illustration Style

The illustrations are clean and brand-directed rather than ornamental. They are used to support specific product or partnership messaging.

## 16. Responsive Behavior Notes

Based on the live page structure and CSS:

- The menu reorganizes significantly on smaller breakpoints.
- The scroll cue is hidden on smaller screens.
- Hero and jumbo text scale down responsively.
- The hero tabs stack vertically on smaller breakpoints.
- Card background image sizing changes by viewport.
- Footer columns compress to fewer columns on tablet/mobile layouts.

The design appears intentionally responsive rather than simply reduced from desktop.

## 17. Floating Support / Chat

A floating support/chat widget is present at the bottom-right of the page.

Observed traits:

- Persistent presence
- Prompt bubble copy
- Launcher control
- Positioned to remain visible without dominating the primary layout

## 18. Strengths

- Strong and consistent brand presence.
- Clear hierarchy and conversion path.
- Memorable use of orange without overloading the interface.
- Distinctive navigation pattern.
- Good balance between professionalism and personality.
- Effective use of motion to create polish.
- Strong card-based entry points for different user intents.

## 19. Watchouts

- The homepage relies heavily on large type and multiple visual treatments, so any redesign should preserve hierarchy carefully.
- Script fonts are effective in moderation; overuse would weaken the balance.
- The custom transition system is a major brand cue and would be easy to lose in a simplified rebuild.
- The navigation pattern is distinctive but less conventional than a standard enterprise header.

## 20. Conclusion

PayProTec's homepage is a well-branded, conversion-focused marketing experience with a clear visual identity. Its strongest traits are the orange-led palette, oversized compressed headlines, handwritten accent typography, custom menu overlay, and branded motion system. The design is not generic. It has a distinct point of view and should be documented and rebuilt with attention to typography, animation, spacing, and card treatments rather than only copying layout structure.

## 21. Quick Reference Summary

**Primary fonts**

- Plus Jakarta Sans
- Interstate Black Compressed
- Biroscriptusplus

**Primary colors**

- `#ff5000`
- `#1d252c`
- `#1e2235`
- `#23293e`
- `#2b3148`
- `#363b57`
- `#6fc066`
- `#ffd340`
- `#ffffff`

**Primary UI patterns**

- Floating menu dock
- Full-screen split navigation overlay
- Typewriter hero headline
- Pill tabs and buttons
- Image-backed quick-nav cards
- Feature promo sections
- Testimonial slider
- Dense conversion-focused footer
- Floating support widget
