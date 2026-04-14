/* Central product data for categories. Each product contains:
   - name, brand, image (optional), ingredients (array), allergens (array),
   - nutrition (per 100g), riskLevel, saferAlternatives (array), source
*/
window.products = {
    "Biscuits": [
        {
            "name": "Crunchy Tea Biscuits",
            "brand": "GoodBakes",
            "image": "images/biscuits-crunchy-tea.jpg",
            "barcode": "8901234560001",
            "ingredients": ["Wheat Flour", "Sugar", "Vegetable Oil", "Salt", "Leavening Agents"],
            "harmfulSubstances": [
                {"name": "Sugar (added)", "effect": "High sugar contributes to obesity and metabolic risk."},
                {"name": "Vegetable Oil (refined)", "effect": "May contain highly processed fats."}
            ],
            "allergens": ["Wheat"],
            "nutrition": {"calories": 490, "sugar_g": 20, "fat_g": 22, "sodium_mg": 400},
            "riskLevel": "Medium",
            "saferAlternatives": [
                {"name": "Wholegrain crackers", "brand": "HealthyCo"},
                {"name": "Oat biscuits with less sugar", "brand": "NatureBakes"}
            ],
            "source": "https://example.com/crunchy-tea"
        },
        {
            "name": "Cream Sandwich",
            "brand": "SweetTreats",
            "image": "images/biscuits-cream-sandwich.jpg",
            "barcode": "8901234560002",
            "ingredients": ["Wheat Flour", "Sugar", "Palm Oil", "Milk Solids", "Emulsifiers"],
            "harmfulSubstances": [
                {"name": "Palm Oil", "effect": "High in saturated fats and linked to environmental concerns."},
                {"name": "Emulsifiers", "effect": "Some emulsifiers may affect gut health in high amounts."}
            ],
            "allergens": ["Wheat", "Milk"],
            "nutrition": {"calories": 520, "sugar_g": 28, "fat_g": 30, "sodium_mg": 380},
            "riskLevel": "High",
            "saferAlternatives": [
                {"name": "Homemade oat cookies", "brand": "HomeMade"},
                {"name": "Seed crackers", "brand": "SeedWorks"}
            ],
            "source": "https://example.com/cream-sandwich"
        }
    ],

    "Snacks": [
        {
            "name": "Veg Extruders",
            "brand": "SnackMaster",
            "image": "images/snacks-veg-extruders.jpg",
            "barcode": "8901234560003",
            "ingredients": ["Refined Wheat Flour", "Palm Oil", "Salt", "Artificial Flavors", "Color"],
            "harmfulSubstances": [
                {"name": "Artificial Flavors", "effect": "Non-specific chemicals; may cause sensitivities."},
                {"name": "Palm Oil", "effect": "High in saturated fats."}
            ],
            "allergens": ["Wheat"],
            "nutrition": {"calories": 520, "sugar_g": 6, "fat_g": 28, "sodium_mg": 650},
            "riskLevel": "High",
            "saferAlternatives": [
                {"name": "Roasted chickpeas", "brand": "BeanGood"},
                {"name": "Baked vegetable crisps", "brand": "GreenBites"}
            ],
            "source": "https://example.com/veg-extruders"
        }
    ],

    "Potato Chips": [
        {
            "name": "Classic Salted Chips",
            "brand": "CrispCo",
            "image": "images/potatochips-classic-salted.jpg",
            "barcode": "8901234560004",
            "ingredients": ["Potatoes", "Vegetable Oil", "Salt"],
            "harmfulSubstances": [
                {"name": "High sodium", "effect": "Excess sodium raises blood pressure risk."}
            ],
            "allergens": [],
            "nutrition": {"calories": 536, "sugar_g": 0.5, "fat_g": 34, "sodium_mg": 600},
            "riskLevel": "Medium",
            "saferAlternatives": [
                {"name": "Air-popped potato slices", "brand": "CrispLight"},
                {"name": "Baked sweet potato chips", "brand": "SweetBake"}
            ],
            "source": "https://example.com/classic-chips"
        },
        {
            "name": "Tangy BBQ Chips",
            "brand": "CrispCo",
            "image": "images/potatochips-tangy-bbq.jpg",
            "barcode": "8901234560005",
            "ingredients": ["Potatoes", "Vegetable Oil", "Sugar", "Salt", "Flavorings"],
            "harmfulSubstances": [
                {"name": "Flavorings (unknown)", "effect": "Proprietary blends may contain additives."}
            ],
            "allergens": [],
            "nutrition": {"calories": 540, "sugar_g": 1.2, "fat_g": 35, "sodium_mg": 720},
            "riskLevel": "High",
            "saferAlternatives": [
                {"name": "Baked chips with light seasoning", "brand": "LightCrisp"}
            ],
            "source": "https://example.com/bbq-chips"
        }
    ],

    "Soft Drinks": [
        {
            "name": "Cola Classic",
            "brand": "FizzUp",
            "image": "images/softdrinks-cola-classic.jpg",
            "barcode": "8901234560006",
            "ingredients": ["Carbonated Water", "Sugar", "Caramel Color", "Phosphoric Acid", "Caffeine"],
            "harmfulSubstances": [
                {"name": "Added Sugar", "effect": "High sugar content increases metabolic risk."},
                {"name": "Phosphoric Acid", "effect": "May affect tooth enamel and mineral balance."}
            ],
            "allergens": [],
            "nutrition": {"calories": 42, "sugar_g": 10.6, "fat_g": 0, "sodium_mg": 11},
            "riskLevel": "High",
            "saferAlternatives": [
                {"name": "Sparkling water with lemon", "brand": "PureFizz"},
                {"name": "Unsweetened iced tea", "brand": "TeaLeaf"}
            ],
            "source": "https://example.com/cola-classic"
        }
    ],

    "Energy Drinks": [
        {
            "name": "Energy Blast",
            "brand": "PowerUp",
            "image": "images/energy-energy-blast.jpg",
            "barcode": "8901234560007",
            "ingredients": ["Carbonated Water", "Sugar", "Caffeine", "Taurine", "Vitamins"],
            "harmfulSubstances": [
                {"name": "High caffeine", "effect": "May cause sleep disruption and heart palpitations in excess."},
                {"name": "Sugar", "effect": "Contributes to calorie load and metabolic risk."}
            ],
            "allergens": [],
            "nutrition": {"calories": 45, "sugar_g": 11, "fat_g": 0, "sodium_mg": 15},
            "riskLevel": "High",
            "saferAlternatives": [
                {"name": "Coffee (black)", "brand": "LocalRoast"},
                {"name": "Green tea", "brand": "TeaLeaf"}
            ],
            "source": "https://example.com/energy-blast"
        }
    ],

    "Instant Noodles": [
        {
            "name": "Chicken Flavour Noodles",
            "brand": "NoodleKing",
            "image": "images/instantnoodles-chicken-flavour.jpg",
            "barcode": "8901234560008",
            "ingredients": ["Wheat Flour", "Palm Oil", "Salt", "Flavouring Powder", "MSG"],
            "harmfulSubstances": [
                {"name": "MSG (E621)", "effect": "Flavor enhancer; some people report sensitivities."},
                {"name": "High sodium", "effect": "Very high salt content increases cardiovascular risk."}
            ],
            "allergens": ["Wheat"],
            "nutrition": {"calories": 480, "sugar_g": 2, "fat_g": 22, "sodium_mg": 1500},
            "riskLevel": "High",
            "saferAlternatives": [
                {"name": "Whole grain noodles with fresh veggies", "brand": "HomeCook"}
            ],
            "source": "https://example.com/chicken-noodles"
        }
    ],

    "Breakfast Cereals": [
        {
            "name": "Honey Rings",
            "brand": "MorningGrain",
            "image": "images/breakfast-honey-rings.jpg",
            "barcode": "8901234560009",
            "ingredients": ["Corn", "Sugar", "Honey", "Malt Extract", "Vitamins"],
            "harmfulSubstances": [
                {"name": "High sugar", "effect": "High added sugar in cereals is common and problematic."}
            ],
            "allergens": ["None"],
            "nutrition": {"calories": 380, "sugar_g": 26, "fat_g": 3.5, "sodium_mg": 250},
            "riskLevel": "Medium",
            "saferAlternatives": [
                {"name": "Plain oats with fruit", "brand": "Kitchen"},
                {"name": "Muesli without added sugar", "brand": "NatureMix"}
            ],
            "source": "https://example.com/honey-rings"
        }
    ],

    "Chocolates": [
        {
            "name": "Milk Chocolate Bar",
            "brand": "ChocoGood",
            "image": "images/chocolates-milk-bar.jpg",
            "barcode": "8901234560010",
            "ingredients": ["Sugar", "Cocoa Butter", "Milk Solids", "Emulsifier"],
            "harmfulSubstances": [
                {"name": "High sugar", "effect": "Large sugar content; limit portions."}
            ],
            "allergens": ["Milk"],
            "nutrition": {"calories": 550, "sugar_g": 52, "fat_g": 32, "sodium_mg": 40},
            "riskLevel": "High",
            "saferAlternatives": [
                {"name": "Dark chocolate 70%+", "brand": "PureCacao"},
                {"name": "Cocoa nibs", "brand": "Raw"}
            ],
            "source": "https://example.com/milk-chocolate"
        }
    ],

    "Ice Creams": [
        {
            "name": "Vanilla Ice Cream",
            "brand": "ColdDelight",
            "image": "images/icecreams-vanilla.jpg",
            "barcode": "8901234560011",
            "ingredients": ["Milk", "Cream", "Sugar", "Stabilizers", "Vanilla Extract"],
            "harmfulSubstances": [
                {"name": "Stabilizers (E-numbers)", "effect": "Some stabilizers are highly processed; check labels."}
            ],
            "allergens": ["Milk"],
            "nutrition": {"calories": 207, "sugar_g": 21, "fat_g": 11, "sodium_mg": 80},
            "riskLevel": "Medium",
            "saferAlternatives": [
                {"name": "Frozen yoghurt", "brand": "YogFresh"},
                {"name": "Banana nice cream", "brand": "HomeMade"}
            ],
            "source": "https://example.com/vanilla-icecream"
        }
    ],

    "Packaged Juices": [
        {
            "name": "Orange Juice (From Concentrate)",
            "brand": "FreshSip",
            "image": "images/packagedjuices-orange-concentrate.jpg",
            "barcode": "8901234560012",
            "ingredients": ["Water", "Orange Juice Concentrate", "Sugar", "Preservatives"],
            "harmfulSubstances": [
                {"name": "Added sugar", "effect": "From-concentrate juices often have added sugars or extra calories."}
            ],
            "allergens": [],
            "nutrition": {"calories": 46, "sugar_g": 10, "fat_g": 0.2, "sodium_mg": 5},
            "riskLevel": "Medium",
            "saferAlternatives": [
                {"name": "Fresh-squeezed orange juice", "brand": "Local"},
                {"name": "Diluted 100% juice with water", "brand": "Mix"}
            ],
            "source": "https://example.com/orange-juice"
        }
    ]
};
