

## Plan: Retirement Screen Overlay

Add a full-screen overlay component that covers the entire application, preventing access to any content. The overlay will display a message that "mors has been wound down."

### Implementation

1. **Create a `RetirementOverlay` component** (`src/components/RetirementOverlay.jsx`)
   - Full-screen fixed overlay with `z-[99999]` to sit above everything (navbar, modals, etc.)
   - White background, centered text
   - Display "mors" in the same Times New Roman bold style as the homepage
   - Message: "has been wound down" beneath
   - No links, no navigation, no way to dismiss

2. **Add the overlay to `App.jsx`**
   - Render `RetirementOverlay` as the very first child inside the Router, above everything else
   - This ensures it covers the header, footer, all routes, and toaster

The overlay will be a simple, clean screen matching the existing minimal aesthetic of the site.

### Technical Details

- The overlay uses `position: fixed; inset: 0; z-index: 99999` to guarantee it sits above the navbar (`z-[9999]`) and all other elements
- No routes or navigation will be removed — the overlay simply blocks visual and interactive access
- To "un-retire" the site later, simply remove the overlay component from `App.jsx`

