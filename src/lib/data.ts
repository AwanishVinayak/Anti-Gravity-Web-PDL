export interface ProductVariant {
    size: string;
    price: number;
}

export interface Product {
    id: string;
    name: string;
    price: number; // base price (starting at)
    variants: ProductVariant[];
    image_url: string;
    category: string;
    description: string;
    notes: string;
}

export const mockProducts: Product[] = [
    {
        id: '1',
        name: 'Berries Of Eden',
        price: 149.00,
        variants: [
            { size: '10ml', price: 149.00 },
            { size: '100ml', price: 1499.00 }
        ],
        image_url: '/Berries100_pdm.png',
        category: 'Floral, Sweet, Fruity, Fresh',
        description: 'A vibrant and sweet blend of fresh berries and blooming florals, balanced with a creamy, warm base.',
        notes: 'Top Notes: Red Berries (Raspberry, Strawberry), Blackcurrant, Cranberry, Citrus Zest\nMiddle Notes: Blueberry, Mulberry, Rose, Jasmine, Violet\nBase Notes: Vanilla, Tonka Bean, Musk, Sandalwood, Patchouli'
    },
    {
        id: '2',
        name: 'Ruh-de-Moon',
        price: 199.00,
        variants: [
            { size: '10ml', price: 199.00 },
            { size: '50ml', price: 809.00 }
        ],
        image_url: '/RDM_FULL.png',
        category: 'Sweet, Spicy, Warm',
        description: 'An exotic journey of sweet spices and rich ambry woods, creating a deeply mesmerizing and alluring scent.',
        notes: 'Top Notes: Cinnamon, Nutmeg, Bergamot\nMiddle Notes: Dates, Praline, Tuberose, Mahonial\nBase Notes: Vanilla, Tonka Bean, Amberwood, Myrrh, Benzoin, Akigalawood'
    },
    {
        id: '3',
        name: 'Monarca-de-Moon',
        price: 199.00,
        variants: [
            { size: '10ml', price: 199.00 },
            { size: '50ml', price: 809.00 }
        ],
        image_url: '/Monarca_pdm.png',
        category: 'Sweet, Fruity, Fresh',
        description: 'A regal concoction of fresh orchard fruits, aromatic herbs, and a deeply satisfying vanilla and cedar base.',
        notes: 'Top Notes: Pear, Lavender, Mint, Bergamot, Lemon\nMiddle Notes: Cinnamon, Clary Sage, Caraway\nBase Notes: Black Vanilla Husk, Amber, Patchouli, Cedar'
    },
    {
        id: '4',
        name: 'Rouge Eclipse',
        price: 149.00,
        variants: [
            { size: '10ml', price: 149.00 },
            { size: '100ml', price: 1499.00 }
        ],
        image_url: '/eclipse_pdm.png', // Uploaded local image
        category: 'Sweet, Warm and Spicy',
        description: 'A bold, luxurious collision of rich saffron, dark oudh, and sweet spices wrapped in an enchanting rose bouquet.',
        notes: 'Top Notes: Saffron, Bergamot, Red Berries\nMiddle Notes: Damask Rose, Cinnamon, Amber Accord\nBase Notes: Oudh, Patchouli, Dark Vanilla, Musk, Sandalwood'
    }
];
