---
name: Criollo Labs
description: Estudio cercano de software para mejorar la operación.
colors:
  ink: "#30223f"
  muted: "#63566d"
  line: "#c8bdd3"
  violet: "#6631a0"
  paper: "#f1eaf7"
  process: "#e4d7ef"
  contact-copy: "#dacde5"
  contact-hover: "#dac5ec"
  white: "white"
  scrollbar: "#867395"
typography:
  display:
    fontFamily: "Brygada 1918, serif"
    fontSize: "clamp(42px,5.7vw,80px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Brygada 1918, serif"
    fontSize: "clamp(32px,3.6vw,50px)"
    fontWeight: 500
    lineHeight: 1.16
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Onest, sans-serif"
    fontSize: "23px"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Onest, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Onest, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.65
rounded:
  action: "30px"
spacing:
  text: "16px"
  group: "28px"
  section: "85px"
  section-mobile: "55px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.action}"
    padding: "17px 26px"
  button-primary-hover:
    backgroundColor: "{colors.violet}"
  button-small:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.action}"
    padding: "11px 21px"
  button-inverse:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action}"
    padding: "17px 26px"
  button-inverse-hover:
    backgroundColor: "{colors.contact-hover}"
---

# Design System: Criollo Labs

## Overview

**Creative North Star: "Estudio cercano"**

Estudio cercano pairs expressive editorial headings with direct, readable service copy. Lavender paper, plum ink and a restrained violet accent make the site feel approachable and professional; the existing mate logo provides the local identity.

Open sections, fine dividing rules and softly rounded actions carry the design. This record describes the current homepage implementation in src/styles/launch.css and src/app/[locale]/page.tsx, with inherited global behavior checked in globals.css.

**Key Characteristics:**
- Editorial serif headings with plain sans-serif copy.
- Open, rule-separated content and tonal section changes.
- Rounded actions, visible keyboard focus and restrained motion.

## Colors

A lavender and plum family supports a quiet violet accent. The frontmatter records the active homepage palette; the old Tailwind orange and glow palette is not the chosen system.

### Primary

- **Violet:** emphasis in the display heading, process numbers, keyboard focus and primary-action hover.

### Neutral

- **Plum ink:** default text, primary actions and the contact-section background.
- **Muted plum:** supporting body copy on light surfaces.
- **Lavender paper:** page background and inverted contact action.
- **Lavender rule:** dividers between open sections and rows.
- **Process lavender:** the full-width process section.
- **Contact copy / contact hover:** light supporting text and action feedback on the dark closing section.
- **White:** primary-action lettering and the skip-link surface.

## Typography

Brygada 1918 (serif fallback) gives major headings their editorial character. Onest (sans-serif fallback) carries body, navigation, actions and smaller titles. Both families are imported from locally installed Fontsource packages. The frontmatter gives the main roles, not a fabricated modular scale.

The hero display is balanced and tight; at the small breakpoint it becomes 43px. Headline text remains fluid; the contact headline uses clamp(36px,4.5vw,62px). Intro copy uses 22px/1.5, becoming 19px on small screens. Supporting copy generally stays within 65–72ch; the hero uses 66ch. Workflow labels and minor notes are 12–14px. Number labels use tabular numerals.

**The Two Voices Rule.** Use the serif for major editorial statements and the sans serif for explanation and action.

## Layout

The shared container is min(1200px, calc(100% - 80px)); at 600px and below its total horizontal inset becomes 40px. The header uses a horizontal flex layout; content sections have generous vertical spacing and 1px top rules. Service rows use two columns with a 1:1.3 ratio. The monthly-service block uses 1.1:1 columns. These are observed patterns, not a requirement that every future surface copy the homepage composition.

At 900px and below, the workflow and four-step process become two columns, the workflow title spans its row, and gaps tighten. At 600px and below, service rows, the workflow and the monthly block become single-column; process steps retain two columns until 380px, where they become single-column. Secondary navigation links disappear while the contact action remains visible. Hero actions can wrap. These responsive behaviors are verified in source only: no completed mobile screenshot validation is claimed.

## Elevation & Depth

Active homepage components have no box shadows. Depth comes from lavender surface changes, thin rules and the dark contact section. Global legacy glow helpers remain in the codebase but are not used by this homepage. The scrollbar track follows the paper surface with a muted lavender thumb; the inherited WebKit thumb-hover rule still uses a legacy dark gray and is not a new system token.

**The Open Surface Rule.** Separate content with space, fine rules and tonal changes before introducing raised containers.

## Shapes

Content areas have square, open edges. Rounded actions use the action radius in the frontmatter. The mate mark is the existing brand asset, not a newly generated illustration. The workflow uses text and numbered steps without a decorative panel.

## Components

### Buttons

Compact, soft and direct. Primary actions use plum ink and white lettering; the small header variant reduces padding. Contact actions invert the palette on the dark section. Hover changes only the background over 0.2s; reduced-motion disables transitions. Links and summary controls use a 3px violet focus outline offset by 6px; contact-section links switch that outline to paper for visibility. No custom active or disabled state is implemented.

### Service rows

Open two-column articles, with a bottom divider and 28px vertical padding. Titles align beside explanations; mobile stacks the text with 23px vertical padding. These are not floating cards.

### Navigation

A non-sticky flex header pairs the mate wordmark with 14px section links and a rounded contact action. It has no active-route treatment or custom link-hover style. On mobile the supplementary links hide; no menu drawer exists.

### FAQ

Native details and summary elements retain their built-in disclosure behavior. Summaries use 18px semibold text and the shared focus outline; each row has 23px vertical padding and a bottom rule. Expanded text has an 18px top margin. No form fields or chip system exists on this surface.

### Text links and skip link

Secondary hero navigation is a 14px underlined link with a 5px underline offset. The skip link is offscreen until focused, then appears at 16px from the upper-left corner. Smooth anchor navigation is inherited from globals.css and disabled for reduced-motion preferences.

## Do's and Don'ts

### Do:
- Do pair Brygada 1918 headings with Onest body and control text.
- Do use open rows, fine rules and tonal backgrounds to organize information.
- Do preserve the existing mate logo and visible keyboard focus.

### Don't:
- Don't import unused legacy gradients, glows or glass panels into new surfaces.
- Don't treat the illustrative workflow as verified customer evidence.
- Don't claim mobile visual validation from responsive source rules alone.

## Scroll-driven experience
The homepage uses a native Three.js sculpture, controlled by GSAP ScrollTrigger. Two segmented rings move from scattered pieces into a connected form over three narrative chapters. Camera position, object assembly and a copper signal respond to scroll; no GIF is rendered on the homepage. Geometry is generated in code and does not represent a measured customer result.

The opening section uses native sticky positioning without intercepting scrolling. Text stays in a separate DOM layer. Primary actions remain available and a skip link exits the sequence. Three.js is dynamically imported; pixel density is capped and rendering pauses when the scene is offscreen or the document is hidden. When WebGL is unavailable, Three.js SVGRenderer keeps the scroll narrative with lower-detail geometry. Reduced-motion preferences or renderer failure show static content. Geometries, materials, observers and scroll triggers are disposed on unmount.

The mobile layout places text above the scene and shortens the sequence. Mobile visual validation remains pending; responsive source rules are not a substitute for device testing. Current contact opens Facebook with visible disclosure. Discovery remains a separate draft until storage and server configuration are ready.
