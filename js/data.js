// ==================== PROPERTY DATA ====================

const PROPERTIES = [
    {
        id: 1,
        title: "Modern Luxury Apartment",
        type: "Apartment",
        purpose: "sale",
        price: 450000,
        location: "New York",
        address: "123 Manhattan Ave, New York, NY",
        bedrooms: 3,
        bathrooms: 2,
        area: 1500,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
        lat: 40.7128,
        lng: -74.0060,
        description: "Stunning modern apartment in the heart of Manhattan with panoramic city views, premium finishes, and access to world-class amenities."
    },
    {
        id: 2,
        title: "Suburban Family House",
        type: "House",
        purpose: "sale",
        price: 680000,
        location: "Los Angeles",
        address: "456 Sunset Blvd, Los Angeles, CA",
        bedrooms: 4,
        bathrooms: 3,
        area: 2800,
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600",
        lat: 34.0522,
        lng: -118.2437,
        description: "Beautiful family home with a large backyard, modern kitchen, and spacious living areas. Perfect for growing families."
    },
    {
        id: 3,
        title: "Beachfront Villa",
        type: "Villa",
        purpose: "sale",
        price: 1250000,
        location: "Miami",
        address: "789 Ocean Drive, Miami, FL",
        bedrooms: 5,
        bathrooms: 4,
        area: 4200,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600",
        lat: 25.7617,
        lng: -80.1918,
        description: "Luxurious beachfront villa with private pool, direct beach access, and breathtaking ocean views from every room."
    },
    {
        id: 4,
        title: "Downtown Studio Loft",
        type: "Studio",
        purpose: "rent",
        price: 1800,
        location: "Chicago",
        address: "321 Michigan Ave, Chicago, IL",
        bedrooms: 1,
        bathrooms: 1,
        area: 650,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600",
        lat: 41.8781,
        lng: -87.6298,
        description: "Stylish studio loft in downtown Chicago with exposed brick walls, high ceilings, and modern appliances."
    },
    {
        id: 5,
        title: "Executive Condo",
        type: "Condo",
        purpose: "rent",
        price: 2500,
        location: "Seattle",
        address: "654 Pine St, Seattle, WA",
        bedrooms: 2,
        bathrooms: 2,
        area: 1100,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
        lat: 47.6062,
        lng: -122.3321,
        description: "Modern executive condo with smart home features, fitness center access, and stunning views of the Space Needle."
    },
    {
        id: 6,
        title: "Cozy Suburban Home",
        type: "House",
        purpose: "sale",
        price: 320000,
        location: "Houston",
        address: "987 Oak Lane, Houston, TX",
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600",
        lat: 29.7604,
        lng: -95.3698,
        description: "Charming suburban home with a beautiful garden, updated kitchen, and excellent school district."
    },
    {
        id: 7,
        title: "Penthouse Suite",
        type: "Apartment",
        purpose: "sale",
        price: 2100000,
        location: "New York",
        address: "100 Park Ave, New York, NY",
        bedrooms: 4,
        bathrooms: 3,
        area: 3200,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
        lat: 40.7484,
        lng: -73.9857,
        description: "Exclusive penthouse with 360-degree city views, private elevator, wine cellar, and rooftop terrace."
    },
    {
        id: 8,
        title: "Modern Townhouse",
        type: "House",
        purpose: "rent",
        price: 3200,
        location: "Los Angeles",
        address: "246 Venice Blvd, Los Angeles, CA",
        bedrooms: 3,
        bathrooms: 2,
        area: 1600,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
        lat: 34.0195,
        lng: -118.4912,
        description: "Contemporary townhouse near Venice Beach with rooftop deck, modern finishes, and attached garage."
    },
    {
        id: 9,
        title: "Waterfront Condo",
        type: "Condo",
        purpose: "sale",
        price: 550000,
        location: "Miami",
        address: "555 Brickell Ave, Miami, FL",
        bedrooms: 2,
        bathrooms: 2,
        area: 1300,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600",
        lat: 25.7617,
        lng: -80.1918,
        description: "Gorgeous waterfront condo with bay views, resort-style amenities, and walking distance to fine dining."
    },
    {
        id: 10,
        title: "Historic Brownstone",
        type: "House",
        purpose: "sale",
        price: 890000,
        location: "Chicago",
        address: "777 Lincoln Park, Chicago, IL",
        bedrooms: 4,
        bathrooms: 3,
        area: 2600,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
        lat: 41.8781,
        lng: -87.6298,
        description: "Beautifully restored historic brownstone with original architectural details and modern updates throughout."
    }
];

/**
 * Find a property by ID
 * @param {number} id
 * @returns {Object|undefined}
 */
function getPropertyById(id) {
    return PROPERTIES.find(p => p.id === Number(id));
}