export interface Category {
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  layout: "masonry" | "grid-video";
  images: string[];
}

export const categories: Category[] = [
  {
    name: "Automotive",
    slug: "automotive",
    description: "Precision engineering meets cinematic photography.",
    coverImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    layout: "grid-video",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
      "https://images.unsplash.com/photo-1525609004556-c46c6c5104b8?w=600&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
    ],
  },
  {
    name: "Events",
    slug: "events",
    description: "Capturing the energy and emotion of unforgettable moments.",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    layout: "grid-video",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
    ],
  },
  {
    name: "Sports",
    slug: "sports",
    description: "The beauty of motion, frozen in time.",
    coverImage: "https://images.unsplash.com/photo-1461896836934-bd45ba8fcb3a?w=800&q=80",
    layout: "grid-video",
    images: [
      "https://images.unsplash.com/photo-1461896836934-bd45ba8fcb3a?w=600&q=80",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80",
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80",
      "https://images.unsplash.com/photo-1474224017046-182ece492b95?w=600&q=80",
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
      "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=600&q=80",
    ],
  },
  {
    name: "Portraits",
    slug: "portraits",
    description: "Revealing character through light and shadow.",
    coverImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    layout: "masonry",
    images: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    ],
  },
  {
    name: "Lifestyle",
    slug: "lifestyle",
    description: "Authentic stories, naturally told.",
    coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    layout: "grid-video",
    images: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&q=80",
      "https://images.unsplash.com/photo-1501959915551-4e8d30928317?w=600&q=80",
      "https://images.unsplash.com/photo-1488161628813-04466f0cc7d4?w=600&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
    ],
  },
  {
    name: "Product",
    slug: "product",
    description: "Elevating objects into works of art.",
    coverImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    layout: "masonry",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    ],
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    description: "Showcasing spaces with cinematic grandeur.",
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    layout: "grid-video",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    ],
  },
];
