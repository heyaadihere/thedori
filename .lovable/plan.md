

## DORI — Premium Women's Outerwear Storefront

Building a complete e-commerce website for DORI, inspired by the clean, minimal Dawn Shopify theme — adapted to match DORI's brand DNA: structured, intentional, premium, and calm.

### Design Direction
- **Color palette**: Warm beige, stone, muted off-white backgrounds with dark text — matching DORI's approved visual direction
- **Typography**: Clean, editorial sans-serif with generous white space — calm confidence, not loud
- **Tone**: Minimal, premium, structured — no discount language or hype

### Pages & Sections

**1. Homepage**
- **Announcement bar** — subtle top banner (e.g., "Designed with intention. Defined by presence.")
- **Navigation** — Clean header with DORI logo, category links (Jackets, Waistcoats, Blazers), search icon, cart drawer
- **Hero section** — Full-width image area with tagline "Made to move with you" and "Shop Now" CTA (Dawn-style layout with overlaid text)
- **Brand statement** — Centered text section: the brand philosophy ("Good design doesn't shout. It works.")
- **Product grid** — Products loaded from Shopify API in a clean grid (will show "No products found" until you add products)
- **Brand story section** — Split layout with imagery + copy about intentional design, reversible pieces, structured tailoring
- **Footer** — Minimal footer with brand name, navigation, and social links

**2. Product Detail Page** (`/product/[handle]`)
- Large product images with gallery
- Title, price, variant selector (size, color)
- "Add to Cart" button
- Product description
- Clean, Dawn-inspired layout

**3. Cart System**
- Slide-out cart drawer with item list, quantity controls, and "Checkout with Shopify" button
- Real Shopify Storefront API integration (cart create, line add/update/remove)
- Persistent cart state with Zustand

### Technical Implementation
- Shopify Storefront API for all product data (no mock products)
- Zustand for cart state management
- Cart sync hook for checkout completion detection
- Responsive design (mobile-first)
- All existing shadcn/ui components leveraged

### What's Next After Implementation
- You'll add products by telling me what they are (name, price, description, images)
- Categories can be set up as collections in Shopify admin

