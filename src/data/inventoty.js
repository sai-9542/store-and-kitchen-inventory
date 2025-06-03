const data = [
  {
    "kitchen_essentials": {
    "vegetables": [
      {
        "name": "Tomato",
        "image": "https://example.com/images/tomato.jpg",
        "price": 75,
        "quantity": 1,
        "unit": "kg",
        "description": "Fresh red tomatoes sourced from Madanapalle, Andhra Pradesh, ideal for curries and salads."
      },
      {
        "name": "Onion",
        "image": "https://example.com/images/onion.jpg",
        "price": 50,
        "quantity": 1,
        "unit": "kg",
        "description": "Commonly used in Indian cooking, these onions add flavor to a variety of dishes."
      },
      {
        "name": "Potato",
        "image": "https://example.com/images/potato.jpg",
        "price": 40,
        "quantity": 1,
        "unit": "kg",
        "description": "Versatile tuber used in a wide range of Indian and global cuisines."
      },
      {
        "name": "Green Chilli",
        "image": "https://example.com/images/green_chilli.jpg",
        "price": 100,
        "quantity": 1,
        "unit": "kg",
        "description": "Adds heat and flavor to dishes; sourced from Karnataka."
      },
      {
        "name": "Cauliflower",
        "image": "https://example.com/images/cauliflower.jpg",
        "price": 80,
        "quantity": 1,
        "unit": "kg",
        "description": "Fresh cauliflower florets, perfect for curries and dry sabzis."
      },
      {
        "name": "Lady Finger (Okra)",
        "image": "https://example.com/images/okra.jpg",
        "price": 60,
        "quantity": 1,
        "unit": "kg",
        "description": "Tender and slim pods, widely used in Indian vegetarian dishes."
      },
      {
        "name": "Capsicum",
        "image": "https://example.com/images/capsicum.jpg",
        "price": 90,
        "quantity": 1,
        "unit": "kg",
        "description": "Crunchy and sweet bell peppers, available in green, red, and yellow."
      }
    ],
    "rice": [
      {
        "name": "Basmati Rice",
        "image": "https://example.com/images/basmati_rice.jpg",
        "price": 120,
        "quantity": 1,
        "unit": "kg",
        "description": "Aromatic long-grain rice, ideal for biryanis and pilafs."
      },
      {
        "name": "Sona Masoori Rice",
        "image": "https://example.com/images/sona_masoori_rice.jpg",
        "price": 80,
        "quantity": 1,
        "unit": "kg",
        "description": "Medium-grain rice, commonly used in South Indian dishes."
      },
      {
        "name": "Red Rice",
        "image": "https://example.com/images/red_rice.jpg",
        "price": 100,
        "quantity": 1,
        "unit": "kg",
        "description": "Unpolished rice with a reddish-brown hue, known for its health benefits."
      }
    ],
    "spices": [
      {
        "name": "Turmeric Powder",
        "image": "https://example.com/images/turmeric_powder.jpg",
        "price": 50,
        "quantity": 100,
        "unit": "grams",
        "description": "Ground turmeric, known for its anti-inflammatory properties."
      },
      {
        "name": "Cumin Seeds",
        "image": "https://example.com/images/cumin_seeds.jpg",
        "price": 60,
        "quantity": 100,
        "unit": "grams",
        "description": "Aromatic seeds used in tempering and spice blends."
      },
      {
        "name": "Garam Masala",
        "image": "https://example.com/images/garam_masala.jpg",
        "price": 70,
        "quantity": 100,
        "unit": "grams",
        "description": "A blend of ground spices, adding warmth and depth to dishes."
      },
      {
        "name": "Red Chilli Powder",
        "image": "https://example.com/images/red_chilli_powder.jpg",
        "price": 40,
        "quantity": 100,
        "unit": "grams",
        "description": "Ground dried red chillies, used to add heat and color."
      }
    ],
    "dairy": [
      {
        "name": "Toned Milk",
        "image": "https://example.com/images/toned_milk.jpg",
        "price": 53,
        "quantity": 1,
        "unit": "litre",
        "description": "Low-fat milk, suitable for daily consumption."
      },
      {
        "name": "Paneer",
        "image": "https://example.com/images/paneer.jpg",
        "price": 250,
        "quantity": 200,
        "unit": "grams",
        "description": "Fresh Indian cottage cheese, perfect for curries and snacks."
      },
      {
        "name": "Curd",
        "image": "https://example.com/images/curd.jpg",
        "price": 60,
        "quantity": 500,
        "unit": "grams",
        "description": "Thick and creamy curd, good for digestion."
      }
    ],
    "other_essentials": [
      {
        "name": "Wheat Flour",
        "image": "https://example.com/images/wheat_flour.jpg",
        "price": 40,
        "quantity": 1,
        "unit": "kg",
        "description": "Stone-ground wheat flour used for chapatis and parathas."
      },
      {
        "name": "Sugar",
        "image": "https://example.com/images/sugar.jpg",
        "price": 45,
        "quantity": 1,
        "unit": "kg",
        "description": "White crystalline sugar for sweetening beverages and desserts."
      },
      {
        "name": "Salt",
        "image": "https://example.com/images/salt.jpg",
        "price": 20,
        "quantity": 1,
        "unit": "kg",
        "description": "Refined iodized salt for daily cooking needs."
      },
      {
        "name": "Cooking Oil",
        "image": "https://example.com/images/cooking_oil.jpg",
        "price": 150,
        "quantity": 1,
        "unit": "litre",
        "description": "Sunflower oil for frying and general"
      }
    ],
    "pulses_and_lentils": [
      {
        "name": "Toor Dal",
        "image": "https://example.com/images/toor_dal.jpg",
        "price": 120,
        "quantity": 1,
        "unit": "kg",
        "description": "Split pigeon peas commonly used in South Indian sambar."
      },
      {
        "name": "Moong Dal",
        "image": "https://example.com/images/moong_dal.jpg",
        "price": 95,
        "quantity": 1,
        "unit": "kg",
        "description": "Yellow split lentils, easy to digest and quick to cook."
      },
      {
        "name": "Chana Dal",
        "image": "https://example.com/images/chana_dal.jpg",
        "price": 90,
        "quantity": 1,
        "unit": "kg",
        "description": "Split chickpeas, used in dal and snacks like vada."
      },
      {
        "name": "Rajma (Kidney Beans)",
        "image": "https://example.com/images/rajma.jpg",
        "price": 140,
        "quantity": 1,
        "unit": "kg",
        "description": "Red kidney beans, popular in North Indian dishes like rajma chawal."
      },
      {
        "name": "Black Urad Dal",
        "image": "https://example.com/images/urad_dal.jpg",
        "price": 110,
        "quantity": 1,
        "unit": "kg",
        "description": "Whole black lentils, main ingredient in dal makhani."
      }
    ],
    "packaged_foods": [
      {
        "name": "Instant Noodles",
        "image": "https://example.com/images/instant_noodles.jpg",
        "price": 15,
        "quantity": 1,
        "unit": "pack",
        "description": "Ready-to-cook noodles with seasoning, perfect for a quick snack."
      },
      {
        "name": "Biscuits",
        "image": "https://example.com/images/biscuits.jpg",
        "price": 30,
        "quantity": 1,
        "unit": "pack",
        "description": "Crispy and sweet tea-time snack."
      },
      {
        "name": "Bread (White)",
        "image": "https://example.com/images/white_bread.jpg",
        "price": 40,
        "quantity": 1,
        "unit": "loaf",
        "description": "Soft white bread for breakfast sandwiches or toast."
      }
    ],
    "beverages": [
      {
        "name": "Tea Powder",
        "image": "https://example.com/images/tea_powder.jpg",
        "price": 180,
        "quantity": 250,
        "unit": "grams",
        "description": "Aromatic black tea leaves for your daily chai fix."
      },
      {
        "name": "Coffee Powder",
        "image": "https://example.com/images/coffee_powder.jpg",
        "price": 130,
        "quantity": 100,
        "unit": "grams",
        "description": "Ground coffee powder, ideal for filter or instant coffee."
      },
      {
        "name": "Milk (Tetra Pack)",
        "image": "https://example.com/images/tetra_milk.jpg",
        "price": 70,
        "quantity": 1,
        "unit": "liter",
        "description": "Long-life milk, shelf stable and ideal for emergencies."
      }
    ],
    "cleaning_supplies": [
      {
        "name": "Dishwashing Liquid",
        "image": "https://example.com/images/dish_liquid.jpg",
        "price": 60,
        "quantity": 500,
        "unit": "ml",
        "description": "Tough on grease, gentle on hands. Lemon scented."
      },
      {
        "name": "Floor Cleaner",
        "image": "https://example.com/images/floor_cleaner.jpg",
        "price": 110,
        "quantity": 1,
        "unit": "liter",
        "description": "Antibacterial floor cleaner with pleasant fragrance."
      },
      {
        "name": "Hand Wash",
        "image": "https://example.com/images/hand_wash.jpg",
        "price": 50,
        "quantity": 250,
        "unit": "ml",
        "description": "Liquid hand wash for hygiene and germ protection."
      }
    ],
    "fruits": [
      {
        "name": "Apple",
        "image": "https://example.com/images/apple.jpg",
        "price": 3.5,
        "quantity": 1,
        "unit": "kg",
        "description": "Fresh and juicy red apples rich in fiber and antioxidants."
      },
      {
        "name": "Banana",
        "image": "https://example.com/images/banana.jpg",
        "price": 1.2,
        "quantity": 1,
        "unit": "dozen",
        "description": "Ripe bananas perfect for smoothies and snacking."
      },
      {
        "name": "Orange",
        "image": "https://example.com/images/orange.jpg",
        "price": 2.8,
        "quantity": 1,
        "unit": "kg",
        "description": "Sweet and tangy oranges full of vitamin C."
      },
      {
        "name": "Grapes",
        "image": "https://example.com/images/grapes.jpg",
        "price": 4.0,
        "quantity": 1,
        "unit": "kg",
        "description": "Seedless green grapes, perfect for a healthy snack."
      },
      {
        "name": "Pineapple",
        "image": "https://example.com/images/pineapple.jpg",
        "price": 2.5,
        "quantity": 1,
        "unit": "piece",
        "description": "Tropical pineapple with a sweet and tangy flavor."
      },
      {
        "name": "Strawberries",
        "image": "https://example.com/images/strawberries.jpg",
        "price": 5.0,
        "quantity": 500,
        "unit": "grams",
        "description": "Fresh and sweet strawberries, great for desserts."
      },
      {
        "name": "Mango",
        "image": "https://example.com/images/mango.jpg",
        "price": 3.0,
        "quantity": 1,
        "unit": "kg",
        "description": "Juicy, ripe mangoes with a rich, tropical taste."
      }
    ],
    "drinks_and_juices": [
      {
        "name": "Orange Juice",
        "image": "https://example.com/images/orange_juice.jpg",
        "price": 120,
        "quantity": 1,
        "unit": "liter",
        "description": "Refreshing 100% orange juice, rich in Vitamin C."
      },
      {
        "name": "Mango Juice",
        "image": "https://example.com/images/mango_juice.jpg",
        "price": 100,
        "quantity": 1,
        "unit": "liter",
        "description": "Thick mango nectar made from Alphonso mangoes."
      },
      {
        "name": "Lassi (Sweet)",
        "image": "https://example.com/images/sweet_lassi.jpg",
        "price": 45,
        "quantity": 300,
        "unit": "ml",
        "description": "Traditional sweetened yogurt drink from Punjab."
      },
      {
        "name": "Coconut Water",
        "image": "https://example.com/images/coconut_water.jpg",
        "price": 40,
        "quantity": 1,
        "unit": "piece",
        "description": "Fresh tender coconut water, naturally hydrating."
      },
      {
        "name": "Lemonade",
        "image": "https://example.com/images/lemonade.jpg",
        "price": 25,
        "quantity": 250,
        "unit": "ml",
        "description": "Chilled lemon drink with a tangy-sweet taste."
      },
      {
        "name": "Soft Drink (Cola)",
        "image": "https://example.com/images/cola.jpg",
        "price": 40,
        "quantity": 500,
        "unit": "ml",
        "description": "Carbonated soft drink with a classic cola flavor."
      },
      {
        "name": "Energy Drink",
        "image": "https://example.com/images/energy_drink.jpg",
        "price": 110,
        "quantity": 250,
        "unit": "ml",
        "description": "Caffeinated beverage for an energy boost."
      }
    ]
  }
}
];

export default data;
