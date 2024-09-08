const data = [
    {
        location: "London",
        latitude: 51.5073219,
        longitude: -0.1276474,
    },
    {
        location: "Kolkata",
        latitude: 22.5726723,
        longitude: 88.3638815,
    },
    {
        location: "Dhaka",
        latitude: 23.777176,
        longitude: 90.399452,
    },
    {
        location: "Singapore",
        latitude: 1.2899175,
        longitude: 103.8519072,
    },
    {
        location: "New York",
        latitude: 40.7127281,
        longitude: -74.0060152,
    },
    {
        location: "Toronto",
        latitude: 43.6534817,
        longitude: -79.3839347,
    },
    {
        location: "Delhi",
        latitude: 28.644800,
        longitude: 77.216721,
    },
    {
        location: "Mumbai",
        latitude: 19.076090,
        longitude: 72.877426,
    },
    {
        location: "Barishal",
        latitude: 22.70497,
        longitude: 90.37013,
    },
    {
        location: "Kuakata",
        latitude: 21.8210422,
        longitude: 90.1214235,
    },
    {
        location: "Chattogram",
        latitude: 22.341900,
        longitude: 91.815536,
    },
    {
        location: "Thakurgaon",
        latitude: 25.96667,
        longitude: 88.33333,
    },
    {
        location: "Sydney",
        latitude: -33.865143,
        longitude: 151.209900,
    },
    {
        location: "Kabul",
        latitude: 34.543896,
        longitude: 69.160652,
    },
    {
        location: "Islamabad",
        latitude: 33.738045,
        longitude: 73.084488,
    },
];

function getLocations() {
    return data;
}

function getLocationByName(location) {
    if (!location) return null;

    const filtered = data.filter((item) => item.location === location);

    if (filtered.length > 0) {
        return filtered[0];
    } else {
        const defaultLocation = {
            location: "",
            latitude: 0,
            longitude: 0,
        };
        return defaultLocation;
    }
}

export { getLocationByName, getLocations };