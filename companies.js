const companies = [
    // Rank 1
    {
        name: "Nvidia",
        ticker: "NVDA",
        marketCap: 5043000000000, // $5.043T
        sector: "Semiconductors",
        address: "2788 San Tomas Expressway, Santa Clara, CA",
        lat: 37.3708,
        lng: -121.9644,
        website: "https://www.nvidia.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/NVDA.webp"
    },
    // Rank 2
    {
        name: "Alphabet (Google)",
        ticker: "GOOGL",
        marketCap: 4418000000000, // $4.418T
        sector: "Technology",
        address: "1600 Amphitheatre Parkway, Mountain View, CA",
        lat: 37.4220,
        lng: -122.0841,
        website: "https://www.google.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/GOOGL.webp"
    },
    // Rank 3
    {
        name: "Apple",
        ticker: "AAPL",
        marketCap: 4260000000000, // $4.26T
        sector: "Technology",
        address: "One Apple Park Way, Cupertino, CA",
        lat: 37.3349,
        lng: -122.0090,
        website: "https://www.apple.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/AAPL.webp"
    },
    // Rank 4
    {
        name: "Broadcom",
        ticker: "AVGO",
        marketCap: 1857000000000, // $1.857T
        sector: "Semiconductors",
        address: "1320 Ridder Park Drive, San Jose, CA",
        lat: 37.3688,
        lng: -121.9168,
        website: "https://www.broadcom.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/AVGO.webp"
    },
    // Rank 5
    {
        name: "Meta Platforms",
        ticker: "META",
        marketCap: 1484000000000, // $1.484T
        sector: "Social Media",
        address: "1 Hacker Way, Menlo Park, CA",
        lat: 37.4847,
        lng: -122.1477,
        website: "https://www.meta.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/META.webp"
    },
    // Rank 6
    {
        name: "Anthropic",
        ticker: "ANTHR",
        marketCap: 965000000000, // $965B
        sector: "AI",
        address: "500 Howard St., San Francisco, CA",
        lat: 37.7749,
        lng: -122.4194,
        website: "https://www.anthropic.com",
        logo: "https://logo.clearbit.com/anthropic.com"
    },
    // Rank 7
    {
        name: "OpenAI",
        ticker: "OPENAI",
        marketCap: 852000000000, // $852B
        sector: "AI",
        address: "550 Terry A Francois Blvd, San Francisco, CA",
        lat: 37.769480,
        lng: -122.38756,
        website: "https://www.openai.com",
        logo: "https://logo.clearbit.com/openai.com"
    },
    // Rank 8
    {
        name: "AMD",
        ticker: "AMD",
        marketCap: 737000000000, // $737B
        sector: "Semiconductors",
        address: "2485 Augustine Drive, Santa Clara, CA",
        lat: 37.3861,
        lng: -121.9634,
        website: "https://www.amd.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/AMD.webp"
    },
    // Rank 9
    {
        name: "Oracle",
        ticker: "ORCL",
        marketCap: 578000000000, // $578B
        sector: "Software",
        address: "500 Oracle Parkway, Redwood City, CA",
        lat: 37.5294,
        lng: -122.2650,
        website: "https://www.oracle.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/ORCL.webp"
    },
    // Rank 10
    {
        name: "Intel",
        ticker: "INTC",
        marketCap: 537000000000, // $537B
        sector: "Semiconductors",
        address: "2200 Mission College Blvd, Santa Clara, CA",
        lat: 37.3875,
        lng: -121.9637,
        website: "https://www.intel.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/INTC.webp"
    },
    // Rank 11
    {
        name: "Applied Materials",
        ticker: "AMAT",
        marketCap: 497000000000, // $497B
        sector: "Semiconductors",
        address: "3050 Bowers Avenue, Santa Clara, CA",
        lat: 37.3688,
        lng: -121.9763,
        website: "https://www.appliedmaterials.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/AMAT.webp"
    },
    // Rank 12
    {
        name: "Cisco Systems",
        ticker: "CSCO",
        marketCap: 468000000000, // $468B
        sector: "Technology",
        address: "170 West Tasman Drive, San Jose, CA",
        lat: 37.4083,
        lng: -121.9536,
        website: "https://www.cisco.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/CSCO.webp"
    },
    // Rank 13
    {
        name: "Lam Research",
        ticker: "LRCX",
        marketCap: 402000000000, // $402B
        sector: "Semiconductors",
        address: "4650 Cushing Parkway, Fremont, CA",
        lat: 37.4930,
        lng: -121.9410,
        website: "https://www.lamresearch.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/LRCX.webp"
    },
    // Rank 14
    {
        name: "Netflix",
        ticker: "NFLX",
        marketCap: 343800000000, // $343.8B
        sector: "Entertainment",
        address: "100 Winchester Circle, Los Gatos, CA",
        lat: 37.2358,
        lng: -121.9850,
        website: "https://www.netflix.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/NFLX.webp"
    },
    // Rank 15
    {
        name: "KLA Corporation",
        ticker: "KLAC",
        marketCap: 278000000000, // $278B
        sector: "Semiconductors",
        address: "1 Technology Drive, Milpitas, CA",
        lat: 37.4323,
        lng: -121.9018,
        website: "https://www.kla.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/KLAC.webp"
    },
    // Rank 16
    {
        name: "Adobe",
        ticker: "ADBE",
        marketCap: 233000000000, // $233B
        sector: "Software",
        address: "151 Almaden Blvd, San Jose, CA",
        lat: 37.3318,
        lng: -121.8905,
        website: "https://www.adobe.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/ADBE.webp"
    },
    // Rank 17
    {
        name: "Palo Alto Networks",
        ticker: "PANW",
        marketCap: 214000000000, // $214B
        sector: "Cybersecurity",
        address: "3000 Tannery Way, Santa Clara, CA",
        lat: 37.3861,
        lng: -121.9634,
        website: "https://www.paloaltonetworks.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/PANW.webp"
    },
    // Rank 18
    {
        name: "Arista Networks",
        ticker: "ANET",
        marketCap: 191000000000, // $191B
        sector: "Technology",
        address: "5453 Great America Parkway, Santa Clara, CA",
        lat: 37.4024,
        lng: -121.9771,
        website: "https://www.arista.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/ANET.webp"
    },
    // Rank 19
    {
        name: "Stripe",
        ticker: "STRIPE",
        marketCap: 159000000000, // $159B
        sector: "Finance",
        address: "510 Townsend Street, San Francisco, CA",
        lat: 37.7706,
        lng: -122.3969,
        website: "https://www.stripe.com",
        logo: "https://logo.clearbit.com/stripe.com"
    },
    // Rank 20
    {
        name: "Gilead Sciences",
        ticker: "GILD",
        marketCap: 150000000000, // $150B
        sector: "Biopharmaceuticals",
        address: "333 Lakeside Drive, Foster City, CA",
        lat: 37.5585,
        lng: -122.2711,
        website: "https://www.gilead.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/GILD.webp"
    },
    // Rank 21
    {
        name: "Intuitive Surgical",
        ticker: "ISRG",
        marketCap: 146000000000, // $146B
        sector: "Medical Robotics",
        address: "1020 Kifer Road, Sunnyvale, CA",
        lat: 37.3772,
        lng: -122.0121,
        website: "https://www.intuitive.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/ISRG.webp"
    },
    // Rank 22
    {
        name: "Salesforce",
        ticker: "CRM",
        marketCap: 140000000000, // $140B
        sector: "Software",
        address: "415 Mission Street, San Francisco, CA",
        lat: 37.7897,
        lng: -122.3972,
        website: "https://www.salesforce.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/CRM.webp"
    },
    // Rank 23
    {
        name: "Uber Technologies",
        ticker: "UBER",
        marketCap: 140000000000, // $140B
        sector: "Technology",
        address: "1515 3rd Street, San Francisco, CA",
        lat: 37.7682,
        lng: -122.3889,
        website: "https://www.uber.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/UBER.webp"
    },
    // Rank 24
    {
        name: "Databricks",
        ticker: "DATABRICKS",
        marketCap: 134000000000, // $134B
        sector: "Technology",
        address: "160 Spear Street, San Francisco, CA",
        lat: 37.7916,
        lng: -122.3935,
        website: "https://www.databricks.com",
        logo: "https://logo.clearbit.com/databricks.com"
    },
    // Rank 25
    {
        name: "Waymo",
        ticker: "WAYMO",
        marketCap: 126000000000, // $126B
        sector: "Automotive",
        address: "Mountain View, CA",
        lat: 37.4219,
        lng: -122.0840,
        website: "https://www.waymo.com",
        logo: "https://logo.clearbit.com/waymo.com"
    },
    // Rank 26
    {
        name: "ServiceNow",
        ticker: "NOW",
        marketCap: 109000000000, // $109B
        sector: "Software",
        address: "2225 Lawson Lane, Santa Clara, CA",
        lat: 37.3861,
        lng: -121.9776,
        website: "https://www.servicenow.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/NOW.webp"
    },
    // Rank 27
    {
        name: "Cadence Design Systems",
        ticker: "CDNS",
        marketCap: 106000000000, // $106B
        sector: "Software",
        address: "2655 Seely Avenue, San Jose, CA",
        lat: 37.3977,
        lng: -121.9149,
        website: "https://www.cadence.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/CDNS.webp"
    },
    // Rank 28
    {
        name: "Equinix",
        ticker: "EQIX",
        marketCap: 102000000000, // $102B
        sector: "Technology",
        address: "1 Lagoon Drive, Redwood City, CA",
        lat: 37.5294,
        lng: -122.2522,
        website: "https://www.equinix.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/EQIX.webp"
    },
    // Rank 29
    {
        name: "Fortinet",
        ticker: "FTNT",
        marketCap: 101000000000, // $101B
        sector: "Cybersecurity",
        address: "899 Kifer Road, Sunnyvale, CA",
        lat: 37.3861,
        lng: -122.0148,
        website: "https://www.fortinet.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/FTNT.webp"
    },
    // Rank 30
    {
        name: "Airbnb",
        ticker: "ABNB",
        marketCap: 95000000000, // $95B
        sector: "Technology",
        address: "888 Brannan Street, San Francisco, CA",
        lat: 37.7706,
        lng: -122.4042,
        website: "https://www.airbnb.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/ABNB.webp"
    },
    // Rank 31
    {
        name: "Synopsys",
        ticker: "SNPS",
        marketCap: 88000000000, // $88B
        sector: "Software",
        address: "690 E Middlefield Road, Mountain View, CA",
        lat: 37.4030,
        lng: -122.0522,
        website: "https://www.synopsys.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/SNPS.webp"
    },
    // Rank 32
    {
        name: "Intuit",
        ticker: "INTU",
        marketCap: 80300000000, // $80.3B
        sector: "Software",
        address: "2700 Coast Avenue, Mountain View, CA",
        lat: 37.4030,
        lng: -122.1105,
        website: "https://www.intuit.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/INTU.webp"
    },
    // Rank 33
    {
        name: "Robinhood Markets",
        ticker: "HOOD",
        marketCap: 77000000000, // $77B
        sector: "Finance",
        address: "85 Willow Road, Menlo Park, CA",
        lat: 37.4530,
        lng: -122.1656,
        website: "https://www.robinhood.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/HOOD.webp"
    },
    // Rank 34
    {
        name: "Cloudflare",
        ticker: "NET",
        marketCap: 77000000000, // $77B
        sector: "Technology",
        address: "101 Townsend Street, San Francisco, CA",
        lat: 37.7806,
        lng: -122.3911,
        website: "https://www.cloudflare.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/NET.webp"
    },
    // Rank 35
    {
        name: "Bloom Energy",
        ticker: "BE",
        marketCap: 70600000000, // $70.6B
        sector: "Energy",
        address: "4353 North First Street, San Jose, CA",
        lat: 37.4030,
        lng: -121.9633,
        website: "https://www.bloomenergy.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/BE.webp"
    },
    // Rank 36
    {
        name: "Lumentum",
        ticker: "LITE",
        marketCap: 69200000000, // $69.2B
        sector: "Technology",
        address: "400 North McCarthy Boulevard, Milpitas, CA",
        lat: 37.4323,
        lng: -121.9018,
        website: "https://www.lumentum.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/LITE.webp"
    },
    // Rank 37
    {
        name: "Ripple",
        ticker: "XRP",
        marketCap: 68000000000, // $68B
        sector: "Finance",
        address: "315 Montgomery Street, San Francisco, CA",
        lat: 37.7933,
        lng: -122.4023,
        website: "https://www.ripple.com",
        logo: "https://logo.clearbit.com/ripple.com"
    },
    // Rank 38
    {
        name: "Scale AI",
        ticker: "SCALE",
        marketCap: 65000000000, // $65B
        sector: "AI",
        address: "San Francisco, CA",
        lat: 37.7749,
        lng: -122.4194,
        website: "https://www.scale.com",
        logo: "https://logo.clearbit.com/scale.com"
    },
    // Rank 39
    {
        name: "Cerebras Systems",
        ticker: "CBRS",
        marketCap: 50000000000, // $50B
        sector: "Semiconductors",
        address: "1237 E Arques Avenue, Sunnyvale, CA",
        lat: 37.3772,
        lng: -122.0121,
        website: "https://www.cerebras.net",
        logo: "https://logo.clearbit.com/cerebras.net"
    },
    // Rank 40
    {
        name: "eBay",
        ticker: "EBAY",
        marketCap: 47255000000, // $47.255B
        sector: "E-commerce",
        address: "2025 Hamilton Avenue, San Jose, CA",
        lat: 37.3230,
        lng: -121.9448,
        website: "https://www.ebay.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/EBAY.webp"
    },
    // Rank 41
    {
        name: "Autodesk",
        ticker: "ADSK",
        marketCap: 46000000000, // $46B
        sector: "Software",
        address: "111 McInnis Parkway, San Rafael, CA",
        lat: 37.9735,
        lng: -122.4980,
        website: "https://www.autodesk.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/ADSK.webp"
    },
    // Rank 42
    {
        name: "Coinbase",
        ticker: "COIN",
        marketCap: 40000000000, // $40B
        sector: "Finance",
        address: "100 Pine Street, San Francisco, CA",
        lat: 37.7920,
        lng: -122.3988,
        website: "https://www.coinbase.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/COIN.webp"
    },
    // Rank 43
    {
        name: "Figure AI",
        ticker: "FIGURE",
        marketCap: 39000000000, // $39B
        sector: "Robotics",
        address: "Sunnyvale, CA",
        lat: 37.3688,
        lng: -122.0363,
        website: "https://www.figure.ai",
        logo: "https://logo.clearbit.com/figure.ai"
    },
    // Rank 44
    {
        name: "Agilent Technologies",
        ticker: "A",
        marketCap: 37000000000, // $37B
        sector: "Technology",
        address: "5301 Stevens Creek Boulevard, Santa Clara, CA",
        lat: 37.3230,
        lng: -121.9767,
        website: "https://www.agilent.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/A.webp"
    },
    // Rank 45
    {
        name: "PayPal",
        ticker: "PYPL",
        marketCap: 36000000000, // $36B
        sector: "Finance",
        address: "2211 North First Street, San Jose, CA",
        lat: 37.3710,
        lng: -121.9229,
        website: "https://www.paypal.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/PYPL.webp"
    },
    // Rank 46
    {
        name: "Workday",
        ticker: "WDAY",
        marketCap: 34000000000, // $34B
        sector: "Software",
        address: "6110 Stoneridge Mall Road, Pleasanton, CA",
        lat: 37.6977,
        lng: -121.9246,
        website: "https://www.workday.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/WDAY.webp"
    },
    // Rank 47
    {
        name: "Reddit",
        ticker: "RDDT",
        marketCap: 33000000000, // $33B
        sector: "Social Media",
        address: "303 2nd Street, San Francisco, CA",
        lat: 37.7858,
        lng: -122.3965,
        website: "https://www.reddit.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/RDDT.webp"
    },
    // Rank 48
    {
        name: "NetApp",
        ticker: "NTAP",
        marketCap: 31500000000, // $31.5B
        sector: "Technology",
        address: "3060 Olsen Drive, San Jose, CA",
        lat: 37.4030,
        lng: -121.9773,
        website: "https://www.netapp.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/NTAP.webp"
    },
    // Rank 49
    {
        name: "Twilio",
        ticker: "TWLO",
        marketCap: 31000000000, // $31B
        sector: "Technology",
        address: "375 Beale Street, San Francisco, CA",
        lat: 37.7908,
        lng: -122.3891,
        website: "https://www.twilio.com",
        logo: "https://companiesmarketcap.com/img/company-logos/64/TWLO.webp"
    },
    // Rank 50
    {
        name: "Zoom",
        ticker: "ZM",
        marketCap: 27500000000, // $27.5B
        sector: "Technology",
        address: "55 Almaden Boulevard, San Jose, CA",
        lat: 37.3337,
        lng: -121.8907,
        website: "https://www.zoom.us",
        logo: "https://companiesmarketcap.com/img/company-logos/64/ZM.webp"
    }
];

// Sector color mapping
const sectorColors = {
    "Technology": "#667eea",
    "Automotive": "#f093fb",
    "Entertainment": "#4facfe",
    "Semiconductors": "#fa709a",
    "Software": "#43e97b",
    "Finance": "#feca57",
    "E-commerce": "#ff6b6b",
    "Social Media": "#a29bfe",
    "Cybersecurity": "#fd79a8",
    "AI": "#38ada9",
    "Robotics": "#eb2f06",
    "Energy": "#78e08f",
    "Biopharmaceuticals": "#6c5ce7",
    "Medical Robotics": "#a29bfe"
};