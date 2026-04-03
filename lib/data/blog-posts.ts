export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  categorySlug: string
  categoryLabel: string
  publishedAt: string
  readTimeMinutes: number
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "grilled-salmon-with-herbs",
    title: "Grilled Salmon With Citrus Herbs",
    excerpt:
      "A light, flaky fillet kissed by smoke and brightened with lemon and dill.",
    categorySlug: "recipes",
    categoryLabel: "Recipes",
    publishedAt: "2026-01-12T10:00:00.000Z",
    readTimeMinutes: 6,
    tags: ["salmon", "grill", "healthy"],
    content: `## Why salmon works on the grill

Salmon’s natural oils keep the fillet moist while the skin crisps against the grates. Pat the fish dry, oil the skin lightly, and start skin‑down over medium heat.

## The herb rub

Chop dill, parsley, and a little thyme. Mix with lemon zest, salt, and cracked pepper. Press gently onto the flesh side—avoid burying the delicate flakes.

## Finish and serve

Flip once the skin releases cleanly. A squeeze of lemon at the table wakes everything up. Pair with a simple salad or roasted vegetables.`,
  },
  {
    slug: "understanding-scallop-grades",
    title: "Understanding Scallop Grades at the Counter",
    excerpt:
      "Dry vs wet, size counts, and what to ask your fishmonger before you buy.",
    categorySlug: "shellfish",
    categoryLabel: "Shellfish",
    publishedAt: "2026-02-03T14:30:00.000Z",
    readTimeMinutes: 5,
    tags: ["scallops", "buying guide"],
    content: `## Dry scallops matter

“Dry” scallops are untreated and sear beautifully. “Wet” scallops soak up additives that shed liquid in the pan—expect steaming instead of caramelization.

## Size labels

U‑10 and U‑15 refer to counts per pound; smaller numbers mean larger scallops. For pan‑searing, aim for mid‑large sizes with even thickness.

## Quick quality check

Look for a sweet smell, firm texture, and a subtle translucence. If they look snowy‑white and sit in milky liquid, keep walking.`,
  },
  {
    slug: "sustainable-shrimp-checklist",
    title: "A Practical Shrimp Sustainability Checklist",
    excerpt:
      "Labels decode faster when you know which certifications match your values.",
    categorySlug: "sustainability",
    categoryLabel: "Sustainability",
    publishedAt: "2026-02-18T09:15:00.000Z",
    readTimeMinutes: 7,
    tags: ["shrimp", "environment"],
    content: `## Farmed vs wild

Neither is automatically better—context matters. Well‑managed farms and well‑regulated fisheries can both be responsible choices.

## What to look for

Seek transparent sourcing, third‑party certifications when available, and suppliers who can answer questions about feed, habitat, and labor practices.

## At home

Buying fewer, higher‑quality shrimp and using the whole bag in one planned meal reduces waste and supports mindful consumption.`,
  },
  {
    slug: "classic-cioppino-for-crowds",
    title: "Classic Cioppino for a Crowd",
    excerpt:
      "Tomato broth, gentle heat, and a mix of firm fish and shellfish in one pot.",
    categorySlug: "recipes",
    categoryLabel: "Recipes",
    publishedAt: "2026-03-01T16:45:00.000Z",
    readTimeMinutes: 8,
    tags: ["stew", "shellfish", "entertaining"],
    content: `## Build the base

Sauté aromatics, add tomatoes, wine, and fish stock, then simmer until the flavors meld. Keep the heat steady—not a rolling boil.

## Add seafood in stages

Start with firm white fish, then shellfish that need longer cooking, and finish with delicate items like shrimp so nothing overcooks.

## Serve

Ladle into warm bowls, sprinkle parsley, and serve with toasted bread for dipping.`,
  },
  {
    slug: "mackerel-and-omega-three",
    title: "Mackerel: Bold Flavor, Serious Omega‑3s",
    excerpt:
      "An affordable, oily fish that rewards simple preparations and high heat.",
    categorySlug: "fish",
    categoryLabel: "Fish",
    publishedAt: "2026-03-14T11:00:00.000Z",
    readTimeMinutes: 4,
    tags: ["mackerel", "nutrition"],
    content: `## Why cooks love it

Mackerel carries deep flavor and stays moist thanks to its oils. It stands up to smoke, char, and assertive marinades.

## Simple prep

Score the skin, salt generously, and roast or grill until the edges crisp. A vinegar‑based sauce balances richness.

## Nutrition snapshot

Oily fish like mackerel contribute EPA and DHA omega‑3 fatty acids as part of a varied diet—talk to a professional for personal guidance.`,
  },
  {
    slug: "oyster-tasting-notes",
    title: "Oyster Tasting Notes for Beginners",
    excerpt:
      "Brine, body, and finish—how to describe what you taste without the jargon.",
    categorySlug: "shellfish",
    categoryLabel: "Shellfish",
    publishedAt: "2026-03-22T13:20:00.000Z",
    readTimeMinutes: 5,
    tags: ["oysters", "tasting"],
    content: `## Salinity first

Notice the initial snap of salt—the “meroir” of the sea. Some oysters read as cucumber‑bright; others lean mineral or sweet.

## Texture

Body ranges from tender to firm. Slurping isn’t required, but a quick chew helps you catch the finish.

## Pairings

Mignonette, lemon, or nothing at all. Cold, freshly shucked oysters need little more than good company.`,
  },
  {
    slug: "cod-from-freezer-to-table",
    title: "Cod From Freezer to Table Without Drama",
    excerpt:
      "Thaw gently, control moisture, and pick techniques that flatter mild fillets.",
    categorySlug: "fish",
    categoryLabel: "Fish",
    publishedAt: "2026-03-28T08:00:00.000Z",
    readTimeMinutes: 5,
    tags: ["cod", "weeknight"],
    content: `## Thawing

Overnight in the refrigerator is ideal. Quick thaw in sealed bags under cold water works when you’re in a hurry—never hot water.

## Drying is key

Blot fillets well before seasoning. Excess water leads to steam in the pan and weak browning.

## Techniques

Bake with a thin crust of crumbs, pan‑fry with a light dredge, or poach gently in flavorful liquid.`,
  },
]

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getBlogCategories(): { slug: string; label: string }[] {
  const map = new Map<string, string>()
  for (const p of blogPosts) {
    map.set(p.categorySlug, p.categoryLabel)
  }
  return Array.from(map.entries()).map(([slug, label]) => ({ slug, label }))
}
