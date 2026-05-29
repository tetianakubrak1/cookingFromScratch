const cuisines = {
  italian: {
    name: "Italian",
    palette: ["#d95d39", "#3f7d56"],
    week: [
      {
        name: "Spaghetti Aglio e Olio",
        skill: "Pasta water, garlic heat control, pan finishing",
        time: 20,
        difficulty: "Easy",
        tags: ["pantry", "no oven"],
        ingredients: [
          ["pasta", "100 g spaghetti", 100],
          ["produce", "2 garlic cloves", 2],
          ["pantry", "2 tbsp olive oil", 2],
          ["pantry", "chili flakes, optional", 1],
          ["pantry", "salt and black pepper", 1],
          ["produce", "parsley, optional", 1],
          ["dairy", "15 g Parmesan or Grana Padano, optional", 15]
        ],
        tools: ["pot", "frying pan", "knife", "cutting board", "tongs", "grater"],
        steps: [
          "Boil a pot of water and salt it until it tastes gently seasoned.",
          "Cook spaghetti until one minute before al dente.",
          "Slice garlic thinly and warm it with olive oil on low-medium heat for 1 to 2 minutes.",
          "Add chili if using, then move the pasta into the pan with 3 tablespoons pasta water.",
          "Toss until glossy, then finish with pepper, parsley, and cheese if you like."
        ],
        substitutions: ["Grana Padano is easier to find and cheaper than Parmesan.", "Use dried parsley if fresh herbs look tired."]
      },
      {
        name: "Cacio e Pepe",
        skill: "Cheese emulsion and pepper aroma",
        time: 20,
        difficulty: "Medium",
        tags: ["technical", "no oven"],
        ingredients: [
          ["pasta", "100 g spaghetti or bucatini", 100],
          ["dairy", "40 g Pecorino Romano", 40],
          ["pantry", "1 tsp black pepper", 1],
          ["pantry", "salt", 1]
        ],
        tools: ["pot", "frying pan", "fine grater", "small bowl", "tongs"],
        steps: [
          "Boil pasta in less water than usual so the water becomes very starchy.",
          "Toast black pepper in a dry pan for 30 to 60 seconds.",
          "Grate Pecorino very finely and mix it with a little warm pasta water into a paste.",
          "Add pasta and a splash of pasta water to the pepper pan, then turn off the heat.",
          "Toss in the cheese paste, adding tiny splashes of water until creamy."
        ],
        substitutions: ["Use Grana Padano if Pecorino is unavailable, but salt the pasta water a little more."]
      },
      {
        name: "Pasta al Pomodoro",
        skill: "Building a simple tomato sauce from canned tomatoes",
        time: 30,
        difficulty: "Easy",
        tags: ["sauce", "no oven"],
        ingredients: [
          ["pasta", "100 g penne or spaghetti", 100],
          ["pantry", "200 g passata or canned tomatoes", 200],
          ["produce", "1 garlic clove", 1],
          ["pantry", "1 tbsp olive oil", 1],
          ["produce", "basil, fresh or dried", 1],
          ["pantry", "salt and black pepper", 1],
          ["dairy", "20 g Parmesan or Grana Padano", 20]
        ],
        tools: ["pot", "saucepan", "knife", "cutting board", "spoon", "grater"],
        steps: [
          "Warm olive oil and gently cook sliced garlic for 1 minute.",
          "Add tomatoes, salt lightly, and simmer for 15 to 20 minutes.",
          "Cook pasta in salted water until al dente.",
          "Toss pasta through the sauce with a splash of pasta water.",
          "Finish with basil, pepper, and grated cheese."
        ],
        substitutions: ["Passata from any German supermarket works well here.", "Use Mutti or store-brand canned tomatoes."]
      },
      {
        name: "Risotto ai Funghi",
        skill: "Stirring, stock absorption, and creamy texture",
        time: 40,
        difficulty: "Medium",
        tags: ["rice", "vegetarian", "no oven"],
        ingredients: [
          ["pantry", "80 g Arborio or Carnaroli rice", 80],
          ["produce", "150 g mushrooms", 150],
          ["produce", "1/2 small onion", 0.5],
          ["pantry", "500 ml vegetable stock", 500],
          ["pantry", "1 tbsp olive oil", 1],
          ["dairy", "1 tbsp butter", 1],
          ["dairy", "25 g Parmesan or Grana Padano", 25],
          ["pantry", "salt and black pepper", 1]
        ],
        tools: ["small saucepan", "medium pot", "knife", "cutting board", "wooden spoon", "grater"],
        steps: [
          "Warm the stock in a small saucepan and keep it hot.",
          "Cook onion in olive oil for 2 minutes, then add sliced mushrooms for 5 minutes.",
          "Stir in rice for 1 minute until the grains look slightly glossy.",
          "Add warm stock one ladle at a time, stirring often and waiting before adding more.",
          "After 18 to 20 minutes, turn off heat and stir in butter and cheese."
        ],
        substitutions: ["Brown Champignons are good in Berlin supermarkets.", "Dried porcini from Italian shops make it deeper."]
      },
      {
        name: "Scaloppine al Limone",
        skill: "Thin cutlets and a quick pan sauce",
        time: 25,
        difficulty: "Easy",
        tags: ["protein", "no oven"],
        ingredients: [
          ["meat", "150 g chicken breast or pork schnitzel", 150],
          ["pantry", "1 tbsp flour", 1],
          ["pantry", "1 tbsp olive oil", 1],
          ["dairy", "1 tbsp butter", 1],
          ["produce", "1/2 lemon", 0.5],
          ["pantry", "50 ml stock or water", 50],
          ["pantry", "salt and black pepper", 1],
          ["produce", "parsley, optional", 1]
        ],
        tools: ["frying pan", "knife", "cutting board", "plate", "tongs"],
        steps: [
          "Slice the meat thinly and season it with salt and pepper.",
          "Dust lightly with flour and shake off the excess.",
          "Cook in olive oil for 2 to 3 minutes per side, then move to a plate.",
          "Add lemon juice, stock, and butter to the pan and stir into a sauce.",
          "Return the meat for 1 minute and serve with the sauce."
        ],
        substitutions: ["German minute steaks or thin Schnitzel cuts work well."]
      },
      {
        name: "Gnocchi with Sage Butter",
        skill: "Fast finishing sauce and browning butter",
        time: 18,
        difficulty: "Easy",
        tags: ["comfort", "vegetarian", "no oven"],
        ingredients: [
          ["pasta", "200 g store-bought gnocchi", 200],
          ["dairy", "1.5 tbsp butter", 1.5],
          ["produce", "4 to 6 sage leaves", 1],
          ["dairy", "20 g Parmesan or Grana Padano", 20],
          ["pantry", "salt and black pepper", 1]
        ],
        tools: ["pot", "frying pan", "slotted spoon", "grater"],
        steps: [
          "Boil salted water and cook gnocchi until they float.",
          "Melt butter in a pan and add sage for 1 minute.",
          "Move gnocchi into the pan and toss for 2 to 3 minutes.",
          "Add black pepper and grated cheese.",
          "Taste before adding salt because the cheese is salty."
        ],
        substitutions: ["Vacuum-packed gnocchi from Rewe, Edeka, Aldi, or Lidl is fine for practice."]
      },
      {
        name: "Tiramisu Cup",
        skill: "Layering, coffee soaking, and chilled dessert texture",
        time: 20,
        difficulty: "Easy",
        tags: ["dessert", "make ahead"],
        ingredients: [
          ["dairy", "125 g mascarpone", 125],
          ["dairy", "80 ml whipping cream", 80],
          ["pantry", "1 tbsp sugar", 1],
          ["pantry", "6 to 8 Loffelbiskuits", 7],
          ["pantry", "1 espresso or strong coffee", 1],
          ["pantry", "cocoa powder", 1]
        ],
        tools: ["bowl", "whisk", "small glass or dish", "spoon", "sieve"],
        steps: [
          "Make coffee and let it cool.",
          "Whip cream with sugar until soft, then fold into mascarpone.",
          "Dip Loffelbiskuits quickly in coffee.",
          "Layer biscuits and cream in a glass or small dish.",
          "Chill for at least 3 hours, then dust with cocoa."
        ],
        substitutions: ["This egg-free version is simpler and calmer for a first try."]
      }
    ],
    alternatives: [
      recipe("Penne all'Arrabbiata", "Spicy tomato sauce and seasoning control", 25, "Easy", ["sauce", "vegetarian", "no oven"], [["pasta", "100 g penne", 100], ["pantry", "200 g canned tomatoes or passata", 200], ["produce", "1 garlic clove", 1], ["pantry", "1 tbsp olive oil", 1], ["pantry", "chili flakes", 1], ["produce", "parsley, optional", 1], ["dairy", "20 g Parmesan or Grana Padano", 20]], ["pot", "saucepan", "knife", "spoon", "grater"], ["Cook garlic and chili gently in olive oil.", "Add tomatoes and simmer for 15 minutes.", "Cook penne in salted water.", "Toss pasta with sauce and a splash of pasta water.", "Finish with parsley and cheese if you like."], ["Passata works better than weak fresh tomatoes."]),
      recipe("Frittata alle Erbe", "Egg texture and gentle pan cooking", 22, "Easy", ["vegetarian", "no oven"], [["dairy", "2 eggs", 2], ["dairy", "20 g Parmesan or Grana Padano", 20], ["produce", "fresh herbs or spring onion", 1], ["dairy", "1 tsp butter", 1], ["pantry", "salt and black pepper", 1]], ["bowl", "fork", "small frying pan", "spatula"], ["Beat eggs with cheese, herbs, salt, and pepper.", "Melt butter in a small pan on low-medium heat.", "Add eggs and cook slowly until mostly set.", "Fold or flip carefully.", "Rest for 1 minute before eating."], ["Use parsley, chives, basil, or whatever herbs look good."]),
      recipe("Panzanella with Roasted Peppers", "Bread salad balance without fresh tomatoes", 18, "Easy", ["vegetarian", "no oven"], [["bakery", "2 slices stale bread", 2], ["pantry", "100 g roasted peppers from a jar", 100], ["produce", "1/4 red onion", 0.25], ["pantry", "1 tbsp olive oil", 1], ["pantry", "1 tsp vinegar", 1], ["dairy", "30 g mozzarella, optional", 30]], ["knife", "cutting board", "bowl", "pan or toaster"], ["Toast or pan-crisp the bread.", "Slice roasted peppers and onion.", "Whisk olive oil with vinegar, salt, and pepper.", "Toss everything together.", "Add mozzarella if you want it richer."], ["Jarred roasted peppers are reliable in Berlin when tomatoes are sad."])
    ]
  },
  japanese: {
    name: "Japanese",
    palette: ["#2f6f8f", "#d39b5b"],
    week: [
      recipe("Onigiri", "Rice shaping and simple fillings", 35, "Easy", ["rice", "no oven"], [["pantry", "90 g sushi rice", 90], ["pantry", "1 nori sheet", 1], ["pantry", "soy sauce", 1], ["pantry", "sesame seeds", 1], ["produce", "cucumber or avocado", 1]], ["pot", "bowl", "small knife"], ["Rinse rice until the water is mostly clear.", "Cook rice and rest it covered for 10 minutes.", "Season hands with salt water and shape warm rice around filling.", "Wrap with nori and sprinkle sesame seeds."], ["Sushi rice is widely available in Asian markets and many Rewe stores."]),
      recipe("Miso Soup", "Dashi, gentle heating, and seasoning", 20, "Easy", ["soup", "vegetarian"], [["pantry", "500 ml dashi or vegetable stock", 500], ["pantry", "1.5 tbsp miso paste", 1.5], ["produce", "80 g tofu", 80], ["produce", "spring onion", 1], ["pantry", "wakame, optional", 1]], ["saucepan", "knife", "ladle"], ["Warm stock without boiling hard.", "Add tofu cubes and wakame.", "Dissolve miso in a ladle with warm stock, then stir it in.", "Top with sliced spring onion."], ["Asian markets in Berlin usually carry miso, tofu, and wakame."]),
      recipe("Chicken Teriyaki", "Glaze reduction and pan heat", 25, "Easy", ["protein"], [["meat", "150 g chicken thigh or breast", 150], ["pantry", "1.5 tbsp soy sauce", 1.5], ["pantry", "1 tbsp mirin or sugar water", 1], ["pantry", "1 tsp sugar", 1], ["pantry", "80 g rice", 80], ["produce", "spring onion", 1]], ["frying pan", "pot", "knife"], ["Cook rice first.", "Sear chicken until browned and cooked through.", "Add soy sauce, mirin, and sugar.", "Simmer until glossy and spoon over rice."], ["Use a little sugar plus water if you cannot find mirin."]),
      recipe("Yakisoba", "Stir-frying noodles without steaming them", 25, "Easy", ["noodles"], [["pasta", "180 g wheat noodles", 180], ["produce", "150 g cabbage", 150], ["produce", "1 carrot", 1], ["pantry", "2 tbsp soy sauce", 2], ["pantry", "1 tbsp ketchup", 1], ["pantry", "1 tsp Worcestershire sauce", 1]], ["frying pan", "knife", "tongs"], ["Mix sauce ingredients.", "Stir-fry vegetables until just tender.", "Add noodles and sauce.", "Toss until hot and lightly caramelized."], ["Use mie noodles from most German supermarkets."]),
      recipe("Tamago Sando", "Soft egg filling and seasoning", 20, "Easy", ["vegetarian"], [["dairy", "2 eggs", 2], ["bakery", "2 slices soft white bread", 2], ["dairy", "1 tbsp mayonnaise", 1], ["pantry", "salt and pepper", 1]], ["small pot", "bowl", "fork"], ["Boil eggs for 9 to 10 minutes.", "Cool, peel, and mash with mayonnaise.", "Season gently.", "Fill soft bread and trim if you want a neat sandwich."], ["Japanese mayo is nice, but ordinary mayo works."]),
      recipe("Gyoza Bowl", "Crisp-bottom dumplings and dipping sauce", 20, "Easy", ["shortcut"], [["frozen", "6 frozen gyoza", 6], ["pantry", "80 g rice", 80], ["produce", "cucumber", 1], ["pantry", "soy sauce and vinegar", 1]], ["frying pan with lid", "pot"], ["Cook rice.", "Pan-fry frozen gyoza in oil for 2 minutes.", "Add a splash of water, cover, and steam until cooked.", "Serve with rice, cucumber, and dipping sauce."], ["Frozen gyoza are easy to find in Asian markets."]),
      recipe("Matcha Pudding", "Gelatin-free chilled dessert", 15, "Easy", ["dessert"], [["dairy", "200 ml milk", 200], ["pantry", "1 tsp matcha", 1], ["pantry", "1 tbsp sugar", 1], ["pantry", "1 tbsp cornstarch", 1]], ["saucepan", "whisk", "glass"], ["Whisk matcha, sugar, and cornstarch with a splash of milk.", "Add remaining milk and heat while whisking.", "Cook until thickened.", "Pour into a glass and chill."], ["Matcha is easiest to find at Asian markets, dm, or tea shops."])
    ],
    alternatives: [
      recipe("Ochazuke", "Simple rice bowl with hot tea or broth", 15, "Easy", ["rice", "no oven"], [["pantry", "80 g cooked rice", 80], ["pantry", "250 ml green tea or light stock", 250], ["pantry", "1 nori sheet", 1], ["pantry", "soy sauce", 1], ["produce", "spring onion", 1]], ["bowl", "kettle", "knife"], ["Put hot rice in a bowl.", "Pour over hot tea or light stock.", "Season with a little soy sauce.", "Top with torn nori and spring onion.", "Eat while hot."], ["Use leftover rice for the fastest version."]),
      recipe("Tofu Donburi", "Quick bowl assembly and soy-ginger seasoning", 25, "Easy", ["vegetarian", "rice", "no oven"], [["produce", "150 g tofu", 150], ["pantry", "80 g rice", 80], ["pantry", "1 tbsp soy sauce", 1], ["produce", "1 tsp grated ginger", 1], ["produce", "spring onion", 1], ["pantry", "sesame seeds", 1]], ["pot", "frying pan", "knife"], ["Cook rice.", "Pat tofu dry and cube it.", "Pan-fry tofu until lightly golden.", "Add soy sauce and ginger for the last minute.", "Serve over rice with spring onion and sesame."], ["Firm tofu from Asian markets or bio shops works best."]),
      recipe("Cold Soba with Cucumber", "Noodle rinsing and dipping sauce", 20, "Easy", ["vegetarian", "no oven"], [["pasta", "100 g soba noodles", 100], ["produce", "1/2 cucumber", 0.5], ["pantry", "1.5 tbsp soy sauce", 1.5], ["pantry", "1 tsp sugar", 1], ["pantry", "sesame seeds", 1]], ["pot", "colander", "bowl", "knife"], ["Cook soba according to the package.", "Rinse under cold water until the noodles feel cool.", "Mix soy sauce, sugar, and a splash of water.", "Slice cucumber thinly.", "Serve noodles with cucumber and sesame."], ["Buckwheat soba is usually in Asian markets; wheat noodles can stand in."])
    ]
  },
  mexican: {
    name: "Mexican",
    palette: ["#c94f3d", "#b48732"],
    week: [
      recipe("Quesadilla", "Pan toasting and melted cheese", 15, "Easy", ["vegetarian", "no oven"], [["bakery", "2 tortillas", 2], ["dairy", "80 g grated cheese", 80], ["produce", "spring onion", 1], ["pantry", "hot sauce, optional", 1]], ["frying pan", "spatula"], ["Fill one tortilla with cheese and spring onion.", "Top with the second tortilla.", "Toast in a dry pan until golden on both sides.", "Slice and serve with hot sauce."], ["Use Gouda or cheddar if Oaxaca-style cheese is unavailable."]),
      recipe("Pico-Free Bean Tacos", "Flavor without fresh tomatoes", 25, "Easy", ["vegetarian", "no oven"], [["bakery", "3 small tortillas", 3], ["pantry", "200 g canned black beans", 200], ["produce", "1 lime", 1], ["produce", "coriander or parsley", 1], ["dairy", "50 g yogurt or sour cream", 50]], ["saucepan", "fork", "knife"], ["Warm beans with salt and a splash of water.", "Mash half of them for texture.", "Warm tortillas.", "Top with beans, lime, herbs, and yogurt."], ["Canned kidney beans also work."]),
      recipe("Sopa de Fideo", "Toasting noodles and broth flavor", 30, "Easy", ["soup"], [["pasta", "60 g thin noodles", 60], ["pantry", "250 g passata", 250], ["pantry", "500 ml stock", 500], ["produce", "1 garlic clove", 1], ["produce", "1/2 onion", 0.5]], ["pot", "blender optional", "spoon"], ["Toast broken noodles in a little oil.", "Add garlic and onion briefly.", "Add passata and stock.", "Simmer until noodles are tender."], ["Passata replaces weak fresh tomatoes well."]),
      recipe("Chicken Tinga", "Shredded meat and smoky sauce", 35, "Medium", ["protein"], [["meat", "160 g chicken", 160], ["pantry", "250 g passata", 250], ["produce", "1 onion", 1], ["pantry", "smoked paprika", 1], ["bakery", "3 tortillas", 3]], ["saucepan", "forks", "knife"], ["Simmer chicken until cooked, then shred.", "Cook onion until soft.", "Add passata and smoked paprika.", "Stir in chicken and simmer until thick.", "Serve in tortillas."], ["Smoked paprika stands in for chipotle in a regular supermarket."]),
      recipe("Elote Bowl", "Charred corn and creamy acidity", 20, "Easy", ["vegetarian"], [["frozen", "200 g corn", 200], ["dairy", "1 tbsp mayonnaise", 1], ["dairy", "1 tbsp yogurt", 1], ["produce", "1/2 lime", 0.5], ["dairy", "30 g feta", 30], ["pantry", "chili powder", 1]], ["frying pan", "bowl"], ["Char corn in a hot dry pan.", "Mix mayo, yogurt, lime, and chili.", "Stir corn through the sauce.", "Top with crumbled feta."], ["Feta is an easy substitute for cotija."]),
      recipe("Arroz Rojo", "Seasoned rice absorption", 30, "Easy", ["rice"], [["pantry", "80 g long grain rice", 80], ["pantry", "150 g passata", 150], ["pantry", "250 ml stock", 250], ["produce", "1/2 onion", 0.5], ["produce", "1 garlic clove", 1]], ["pot with lid", "knife"], ["Rinse rice.", "Cook onion and garlic in oil.", "Add rice and toast for 1 minute.", "Add passata and stock, cover, and cook gently.", "Rest covered before fluffing."], ["Use basmati if long grain rice is what you have."]),
      recipe("Churro-Style Toast", "Cinnamon sugar dessert shortcut", 15, "Easy", ["dessert"], [["bakery", "2 slices bread", 2], ["dairy", "1 tbsp butter", 1], ["pantry", "1 tbsp sugar", 1], ["pantry", "1 tsp cinnamon", 1], ["dairy", "yogurt, optional", 1]], ["frying pan", "plate"], ["Mix sugar and cinnamon.", "Toast bread in butter until crisp.", "Coat with cinnamon sugar.", "Serve with yogurt if you want balance."], ["A practical weeknight dessert, not a traditional churro."])
    ],
    alternatives: [
      recipe("Mushroom Tacos", "Browning mushrooms for deep flavor", 25, "Easy", ["vegetarian", "no oven"], [["bakery", "3 small tortillas", 3], ["produce", "200 g mushrooms", 200], ["produce", "1/2 onion", 0.5], ["produce", "1 lime", 1], ["dairy", "40 g feta or yogurt", 40], ["pantry", "smoked paprika", 1]], ["frying pan", "knife", "spatula"], ["Slice mushrooms and onion.", "Cook them in a hot pan until browned.", "Season with smoked paprika, salt, and lime.", "Warm tortillas.", "Fill tortillas and top with feta or yogurt."], ["Brown Champignons are perfect here."]),
      recipe("Huevos Rancheros-ish", "Eggs with tomato-chili beans", 25, "Easy", ["vegetarian", "no oven"], [["dairy", "2 eggs", 2], ["pantry", "150 g canned beans", 150], ["pantry", "150 g passata", 150], ["bakery", "2 tortillas", 2], ["pantry", "chili powder", 1], ["produce", "1 lime", 1]], ["frying pan", "small saucepan", "spatula"], ["Warm beans with passata, chili, and salt.", "Fry eggs to your liking.", "Warm tortillas.", "Spoon beans onto tortillas.", "Top with eggs and lime."], ["Passata keeps this good even without fresh tomatoes."]),
      recipe("Avocado Lime Rice Bowl", "Acid, fat, and herb balance", 20, "Easy", ["vegetarian", "rice", "no oven"], [["pantry", "80 g rice", 80], ["produce", "1/2 avocado", 0.5], ["produce", "1 lime", 1], ["pantry", "150 g canned beans", 150], ["produce", "coriander or parsley", 1], ["dairy", "1 tbsp yogurt, optional", 1]], ["pot", "bowl", "knife"], ["Cook rice.", "Warm beans with salt and a splash of water.", "Mash avocado with lime and salt.", "Layer rice, beans, and avocado.", "Finish with herbs and yogurt if using."], ["Parsley is fine if coriander is hard to find or you dislike it."])
    ]
  }
};

function recipe(name, skill, time, difficulty, tags, ingredients, tools, steps, substitutions) {
  return { name, skill, time, difficulty, tags, ingredients, tools, steps, substitutions };
}

cuisines.italian.levels = {
  beginner: cuisines.italian.week,
  intermediate: [
    recipe("Pasta alla Norma", "Eggplant browning, tomato reduction, and salty cheese balance", 45, "Medium", ["sauce", "vegetarian", "no oven"], [["pasta", "100 g rigatoni or penne", 100], ["produce", "1 small eggplant", 1], ["pantry", "220 g passata", 220], ["produce", "1 garlic clove", 1], ["pantry", "2 tbsp olive oil", 2], ["dairy", "30 g ricotta salata or feta", 30], ["produce", "basil, optional", 1]], ["pot", "large frying pan", "knife", "cutting board", "grater"], ["Cube eggplant and salt it for 10 minutes, then pat dry.", "Brown eggplant in olive oil until soft and golden.", "Cook garlic briefly, add passata, and simmer until thicker.", "Cook pasta al dente and toss with sauce and eggplant.", "Finish with basil and grated salty cheese."], ["Feta is easier to find than ricotta salata in Berlin."]),
    recipe("Carbonara", "Egg-cheese emulsion and residual heat control", 25, "Medium", ["technical", "no oven"], [["pasta", "100 g spaghetti", 100], ["meat", "50 g pancetta or guanciale", 50], ["dairy", "1 egg yolk plus 1 whole egg", 1], ["dairy", "35 g Pecorino Romano", 35], ["pantry", "black pepper", 1], ["pantry", "salt", 1]], ["pot", "frying pan", "bowl", "fine grater", "tongs"], ["Render pancetta gently until crisp.", "Whisk eggs, cheese, and lots of pepper in a bowl.", "Cook pasta and save starchy water.", "Toss hot pasta with pancetta off the heat.", "Add egg mixture and pasta water gradually until glossy, not scrambled."], ["Use Speck or bacon if pancetta is unavailable, but keep the heat gentle."]),
    recipe("Minestrone", "Layered vegetable flavor and broth seasoning", 50, "Medium", ["soup", "vegetarian", "no oven"], [["produce", "1/2 onion", 0.5], ["produce", "1 carrot", 1], ["produce", "1 celery stalk", 1], ["produce", "150 g seasonal vegetables", 150], ["pantry", "150 g canned beans", 150], ["pantry", "500 ml vegetable stock", 500], ["pantry", "100 g canned tomatoes", 100], ["dairy", "20 g Parmesan", 20]], ["large pot", "knife", "cutting board", "ladle"], ["Cook onion, carrot, and celery slowly in olive oil for 8 minutes.", "Add vegetables, beans, tomatoes, and stock.", "Simmer until vegetables are tender but not dull.", "Season carefully with salt and pepper.", "Serve with Parmesan and olive oil."], ["Use frozen soup vegetables when produce is not inspiring."]),
    recipe("Mushroom Risotto with Dried Porcini", "Dried mushroom soaking and deeper risotto technique", 45, "Medium", ["rice", "vegetarian", "no oven"], [["pantry", "85 g Arborio or Carnaroli rice", 85], ["produce", "120 g mushrooms", 120], ["pantry", "8 g dried porcini", 8], ["produce", "1/2 small onion", 0.5], ["pantry", "550 ml vegetable stock", 550], ["dairy", "1 tbsp butter", 1], ["dairy", "30 g Parmesan", 30]], ["small bowl", "saucepan", "medium pot", "knife", "wooden spoon"], ["Soak dried porcini in hot water for 10 minutes and strain the liquid.", "Cook onion and fresh mushrooms until browned.", "Toast rice for 1 minute.", "Add warm stock and porcini liquid gradually while stirring.", "Finish off heat with butter and Parmesan."], ["Dried porcini are often in Italian delis or larger supermarkets."]),
    recipe("Saltimbocca-Style Chicken", "Layering, fast searing, and pan deglazing", 30, "Medium", ["protein", "no oven"], [["meat", "150 g chicken breast, thinly sliced", 150], ["meat", "2 slices prosciutto", 2], ["produce", "4 sage leaves", 1], ["pantry", "1 tbsp flour", 1], ["dairy", "1 tbsp butter", 1], ["pantry", "70 ml stock or white wine", 70]], ["frying pan", "toothpicks", "plate", "tongs"], ["Flatten chicken pieces gently.", "Top with sage and prosciutto, securing if needed.", "Dust lightly with flour.", "Sear quickly on both sides.", "Deglaze with stock or wine and finish with butter."], ["Use thin chicken schnitzel from a German supermarket to save prep time."]),
    recipe("Handmade Ricotta Gnocchi", "Soft dough handling and gentle boiling", 55, "Medium", ["vegetarian", "no oven"], [["dairy", "125 g ricotta", 125], ["dairy", "1 egg yolk", 1], ["pantry", "45 g flour, plus extra", 45], ["dairy", "25 g Parmesan", 25], ["dairy", "1 tbsp butter", 1], ["produce", "sage or herbs", 1]], ["bowl", "fork", "pot", "bench scraper or knife", "frying pan"], ["Drain ricotta if wet.", "Mix ricotta, yolk, flour, Parmesan, salt, and pepper into a soft dough.", "Roll gently into ropes and cut small pieces.", "Boil until they float.", "Toss in butter with sage or herbs."], ["Quark is too wet; ricotta is worth buying for this dish."]),
    recipe("Panna Cotta with Berry Sauce", "Gelatin setting and simple fruit sauce", 25, "Medium", ["dessert", "make ahead", "no oven"], [["dairy", "200 ml cream", 200], ["dairy", "80 ml milk", 80], ["pantry", "1.5 tbsp sugar", 1.5], ["pantry", "1.5 sheets gelatin", 1.5], ["frozen", "100 g frozen berries", 100]], ["small saucepan", "bowl", "whisk", "small glass"], ["Soak gelatin in cold water.", "Warm cream, milk, and sugar without boiling.", "Stir in squeezed gelatin until dissolved.", "Pour into a glass and chill for at least 4 hours.", "Cook berries briefly into a sauce and spoon over."], ["Frozen berries are reliable year-round in Germany."])
  ]
};

cuisines.chinese = {
  name: "Chinese",
  palette: ["#b9372f", "#d9a441"],
  alternatives: [
    recipe("Tomato Egg Stir-Fry", "Soft eggs, quick sauce, and rice timing", 20, "Easy", ["vegetarian", "no oven"], [["dairy", "2 eggs", 2], ["produce", "2 tomatoes or 180 g canned tomatoes", 2], ["produce", "1 spring onion", 1], ["pantry", "1 tsp soy sauce", 1], ["pantry", "80 g rice", 80]], ["pot", "wok or frying pan", "bowl", "spatula"], ["Cook rice first.", "Beat eggs with a pinch of salt.", "Scramble eggs until just set, then remove.", "Cook tomatoes until saucy.", "Return eggs, add soy sauce, and finish with spring onion."], ["Use canned tomatoes when fresh ones are weak."]),
    recipe("Garlic Green Beans", "High-heat vegetable blistering", 20, "Easy", ["vegetarian", "no oven"], [["produce", "180 g green beans", 180], ["produce", "2 garlic cloves", 2], ["pantry", "1 tbsp soy sauce", 1], ["pantry", "1 tsp sesame oil, optional", 1], ["pantry", "80 g rice", 80]], ["pot", "wok or frying pan", "knife", "spatula"], ["Cook rice.", "Blanch or microwave beans briefly.", "Stir-fry beans in a hot pan until blistered.", "Add garlic for the last minute.", "Season with soy sauce and sesame oil."], ["Frozen green beans work if fresh ones look tired."]),
    recipe("Scallion Oil Noodles", "Aromatic oil and noodle coating", 20, "Easy", ["vegetarian", "no oven"], [["pasta", "120 g wheat noodles", 120], ["produce", "3 spring onions", 3], ["pantry", "2 tbsp neutral oil", 2], ["pantry", "1.5 tbsp soy sauce", 1.5], ["pantry", "1 tsp sugar", 1]], ["pot", "small frying pan", "knife", "tongs"], ["Cook noodles and save a splash of noodle water.", "Slice spring onions.", "Cook spring onions slowly in oil until fragrant.", "Stir soy sauce and sugar into the oil.", "Toss noodles through the sauce."], ["Mie noodles from German supermarkets work well."]),
    recipe("Tofu Mushroom Stir-Fry", "Browning tofu and mushrooms without crowding", 25, "Easy", ["vegetarian", "protein", "no oven"], [["produce", "180 g firm tofu", 180], ["produce", "120 g mushrooms", 120], ["produce", "1 garlic clove", 1], ["pantry", "1.5 tbsp soy sauce", 1.5], ["pantry", "1 tsp cornstarch", 1], ["pantry", "80 g rice", 80]], ["pot", "frying pan", "knife", "spatula"], ["Cook rice.", "Pat tofu dry and cube it.", "Brown tofu in a hot pan, then remove.", "Brown mushrooms, then add garlic.", "Return tofu and season with soy sauce."], ["Firm tofu from Asian markets or bio shops works best."]),
    recipe("Sesame Cucumber Noodles", "Cold noodle rinsing and sesame dressing", 20, "Easy", ["vegetarian", "no oven"], [["pasta", "120 g wheat noodles", 120], ["produce", "1/2 cucumber", 0.5], ["pantry", "1 tbsp peanut butter or sesame paste", 1], ["pantry", "1 tbsp soy sauce", 1], ["pantry", "1 tsp vinegar", 1]], ["pot", "colander", "bowl", "knife"], ["Cook noodles and rinse cold.", "Mix peanut butter or sesame paste with soy sauce, vinegar, and water.", "Slice cucumber thinly.", "Toss noodles with dressing.", "Top with cucumber."], ["Peanut butter is a practical sesame-paste substitute."]),
    recipe("Five-Spice Chickpeas", "Pan-crisp legumes and spice blooming", 20, "Easy", ["vegetarian", "protein", "no oven"], [["pantry", "180 g canned chickpeas", 180], ["pantry", "1 tsp five-spice or paprika", 1], ["produce", "1 spring onion", 1], ["pantry", "1 tbsp soy sauce", 1], ["pantry", "80 g rice", 80]], ["pot", "frying pan", "spatula"], ["Cook rice.", "Dry chickpeas well.", "Pan-crisp chickpeas in a little oil.", "Add spice and soy sauce.", "Finish with spring onion."], ["Use paprika if you do not have five-spice."]),
    recipe("Spinach Egg Drop Soup", "Ribboned egg and fast broth seasoning", 20, "Easy", ["vegetarian", "protein", "soup", "no oven"], [["dairy", "2 eggs", 2], ["produce", "80 g spinach", 80], ["pantry", "500 ml vegetable stock", 500], ["pantry", "1 tbsp soy sauce", 1], ["pantry", "1 tsp cornstarch, optional", 1]], ["saucepan", "bowl", "whisk"], ["Simmer stock with soy sauce.", "Add spinach until wilted.", "Thicken lightly with cornstarch if using.", "Drizzle beaten eggs into the simmering soup.", "Serve hot."], ["Frozen spinach works if squeezed dry first."])
  ]
};

cuisines.chinese.levels = {
  beginner: [
    recipe("Tomato Egg Stir-Fry", "Soft eggs, quick sauce, and rice timing", 20, "Easy", ["vegetarian", "no oven"], [["dairy", "2 eggs", 2], ["produce", "2 tomatoes or 180 g canned tomatoes", 2], ["produce", "1 spring onion", 1], ["pantry", "1 tsp soy sauce", 1], ["pantry", "80 g rice", 80]], ["pot", "wok or frying pan", "bowl", "spatula"], ["Cook rice first.", "Beat eggs with a pinch of salt.", "Scramble eggs until just set, then remove.", "Cook tomatoes until saucy.", "Return eggs, add soy sauce, and finish with spring onion."], ["Use canned tomatoes when fresh ones are weak."]),
    recipe("Scallion Oil Noodles", "Aromatic oil and noodle coating", 20, "Easy", ["vegetarian", "no oven"], [["pasta", "120 g wheat noodles", 120], ["produce", "3 spring onions", 3], ["pantry", "2 tbsp neutral oil", 2], ["pantry", "1.5 tbsp soy sauce", 1.5], ["pantry", "1 tsp sugar", 1]], ["pot", "small frying pan", "knife", "tongs"], ["Cook noodles and save a splash of noodle water.", "Slice spring onions.", "Cook spring onions slowly in oil until fragrant.", "Stir soy sauce and sugar into the oil.", "Toss noodles through the sauce."], ["Mie noodles from German supermarkets work well."]),
    recipe("Chicken and Broccoli Stir-Fry", "Velveting shortcut and fast pan sauce", 30, "Easy", ["protein", "no oven"], [["meat", "150 g chicken breast", 150], ["produce", "180 g broccoli", 180], ["produce", "1 garlic clove", 1], ["pantry", "1.5 tbsp soy sauce", 1.5], ["pantry", "1 tsp cornstarch", 1], ["pantry", "80 g rice", 80]], ["pot", "wok or frying pan", "knife", "bowl"], ["Cook rice.", "Slice chicken and mix with soy sauce and cornstarch.", "Blanch or steam broccoli briefly.", "Stir-fry chicken until cooked.", "Add broccoli, garlic, and a splash of water to finish."], ["Frozen broccoli is fine for practice."]),
    recipe("Garlic Green Beans", "High-heat vegetable blistering", 20, "Easy", ["vegetarian", "no oven"], [["produce", "180 g green beans", 180], ["produce", "2 garlic cloves", 2], ["pantry", "1 tbsp soy sauce", 1], ["pantry", "1 tsp sesame oil, optional", 1], ["pantry", "80 g rice", 80]], ["pot", "wok or frying pan", "knife", "spatula"], ["Cook rice.", "Blanch or microwave beans briefly.", "Stir-fry beans in a hot pan until blistered.", "Add garlic for the last minute.", "Season with soy sauce and sesame oil."], ["Frozen green beans work if fresh ones look tired."]),
    recipe("Egg Fried Rice", "Dry rice, hot pan, and seasoning", 25, "Easy", ["vegetarian", "no oven"], [["pantry", "160 g cooked rice", 160], ["dairy", "2 eggs", 2], ["frozen", "80 g peas or mixed vegetables", 80], ["produce", "1 spring onion", 1], ["pantry", "1.5 tbsp soy sauce", 1.5]], ["wok or frying pan", "spatula", "bowl"], ["Use cold cooked rice if possible.", "Scramble eggs and remove them.", "Stir-fry vegetables and rice in a hot pan.", "Return eggs and season with soy sauce.", "Finish with spring onion."], ["Leftover rice is best; fresh rice should cool uncovered first."]),
    recipe("Steamed Fish with Ginger", "Gentle steaming and hot aromatic oil", 25, "Easy", ["protein", "no oven"], [["meat", "150 g white fish fillet", 150], ["produce", "1 tsp ginger", 1], ["produce", "1 spring onion", 1], ["pantry", "1 tbsp soy sauce", 1], ["pantry", "1 tbsp neutral oil", 1], ["pantry", "80 g rice", 80]], ["pot with steamer or covered pan", "small pan", "knife"], ["Cook rice.", "Steam fish with ginger until just cooked.", "Top with spring onion.", "Warm oil until shimmering.", "Pour oil over the fish and season with soy sauce."], ["Use frozen white fish fillets, thawed and patted dry."]),
    recipe("Mango Sago-Style Pudding", "Chilled dessert texture and fruit puree", 20, "Easy", ["dessert", "vegetarian", "no oven"], [["produce", "1 mango or 150 g frozen mango", 1], ["dairy", "120 ml coconut milk", 120], ["pantry", "1 tbsp sugar", 1], ["pantry", "25 g small tapioca pearls or pudding rice", 25]], ["small pot", "blender or fork", "glass"], ["Cook tapioca pearls or pudding rice until tender.", "Blend mango with coconut milk and sugar.", "Stir in cooked pearls.", "Chill until cold.", "Serve in a glass."], ["Frozen mango is usually better than unripe fresh mango."])
  ],
  intermediate: [
    recipe("Kung Pao Chicken", "Marinade, sauce staging, and wok timing", 40, "Medium", ["protein", "no oven"], [["meat", "160 g chicken thigh or breast", 160], ["produce", "1 bell pepper", 1], ["produce", "2 garlic cloves", 2], ["produce", "1 tsp ginger", 1], ["pantry", "2 tbsp soy sauce", 2], ["pantry", "1 tbsp vinegar", 1], ["pantry", "20 g peanuts", 20], ["pantry", "80 g rice", 80]], ["pot", "wok or frying pan", "bowl", "knife"], ["Cook rice.", "Marinate diced chicken with soy sauce and cornstarch.", "Mix soy sauce, vinegar, sugar, and water for sauce.", "Stir-fry chicken, then aromatics and pepper.", "Add sauce and peanuts, tossing until glossy."], ["Use cashews if you do not have peanuts."]),
    recipe("Mapo Tofu Shortcut", "Chili bean sauce and fragile tofu handling", 35, "Medium", ["no oven"], [["produce", "200 g tofu", 200], ["meat", "80 g minced pork or mushrooms", 80], ["pantry", "1 tbsp doubanjiang or chili bean sauce", 1], ["produce", "1 garlic clove", 1], ["produce", "1 tsp ginger", 1], ["pantry", "1 tsp cornstarch", 1], ["pantry", "80 g rice", 80]], ["pot", "wok or frying pan", "spatula"], ["Cook rice.", "Brown pork or mushrooms.", "Add garlic, ginger, and chili bean sauce.", "Add tofu cubes and a splash of water.", "Thicken gently with cornstarch slurry."], ["Asian markets in Berlin usually have doubanjiang."]),
    recipe("Char Siu-Style Oven Pork", "Marinade glazing and oven roasting", 55, "Medium", ["protein", "oven"], [["meat", "180 g pork shoulder or tenderloin", 180], ["pantry", "1 tbsp soy sauce", 1], ["pantry", "1 tbsp honey", 1], ["pantry", "1 tsp five-spice", 1], ["produce", "1 garlic clove", 1], ["pantry", "80 g rice", 80]], ["oven", "baking tray", "bowl", "brush"], ["Mix soy sauce, honey, five-spice, and garlic.", "Marinate pork for at least 20 minutes.", "Roast at 200 C, brushing with glaze.", "Rest before slicing.", "Serve with rice."], ["This appears only when No oven is off."]),
    recipe("Dan Dan Noodles Shortcut", "Layered spicy sauce and noodle water", 35, "Medium", ["no oven"], [["pasta", "120 g wheat noodles", 120], ["meat", "90 g minced pork or mushrooms", 90], ["pantry", "1 tbsp peanut butter or sesame paste", 1], ["pantry", "1.5 tbsp soy sauce", 1.5], ["pantry", "chili oil", 1], ["produce", "spring onion", 1]], ["pot", "frying pan", "bowl"], ["Brown pork or mushrooms.", "Mix peanut butter, soy sauce, chili oil, and noodle water.", "Cook noodles.", "Toss noodles with sauce.", "Top with browned topping and spring onion."], ["Peanut butter is a practical sesame-paste substitute."]),
    recipe("Hot and Sour Soup", "Balancing acid, heat, and thickening", 35, "Medium", ["soup", "no oven"], [["produce", "80 g tofu", 80], ["produce", "80 g mushrooms", 80], ["dairy", "1 egg", 1], ["pantry", "500 ml stock", 500], ["pantry", "1 tbsp soy sauce", 1], ["pantry", "1 tbsp vinegar", 1], ["pantry", "1 tsp cornstarch", 1]], ["saucepan", "bowl", "whisk"], ["Simmer stock with mushrooms and tofu.", "Season with soy sauce and vinegar.", "Thicken lightly with cornstarch slurry.", "Drizzle in beaten egg while stirring gently.", "Adjust with more vinegar or pepper."], ["Use white pepper if you have it."]),
    recipe("Chinese-Style Baked Eggplant", "Oven roasting and savory garlic sauce", 45, "Medium", ["vegetarian", "oven"], [["produce", "1 eggplant", 1], ["produce", "2 garlic cloves", 2], ["pantry", "1.5 tbsp soy sauce", 1.5], ["pantry", "1 tsp sugar", 1], ["pantry", "1 tsp vinegar", 1], ["pantry", "80 g rice", 80]], ["oven", "baking tray", "small bowl", "pot"], ["Roast halved eggplant at 210 C until soft.", "Cook rice.", "Mix garlic, soy sauce, sugar, and vinegar.", "Spoon sauce over roasted eggplant.", "Serve with rice."], ["This appears only when No oven is off."]),
    recipe("Sesame Tangyuan-Style Rice Balls", "Sticky dough and sweet filling", 45, "Medium", ["dessert", "vegetarian", "no oven"], [["pantry", "80 g glutinous rice flour", 80], ["pantry", "50 ml warm water", 50], ["pantry", "1 tbsp black sesame or peanut butter", 1], ["pantry", "1 tbsp sugar", 1]], ["bowl", "pot", "spoon"], ["Mix flour and warm water into a soft dough.", "Mix sesame or peanut butter with sugar.", "Wrap small portions of filling in dough.", "Boil until floating.", "Serve warm with a little cooking water."], ["Use peanut butter if black sesame paste is unavailable."])
  ]
};

cuisines.french = {
  name: "French",
  palette: ["#2f5f8f", "#d9b46a"],
  alternatives: [
    recipe("Omelette aux Fines Herbes", "Soft egg curds and folding", 15, "Easy", ["vegetarian", "no oven"], [["dairy", "2 eggs", 2], ["dairy", "1 tsp butter", 1], ["produce", "fresh herbs or chives", 1], ["pantry", "salt and black pepper", 1]], ["bowl", "fork", "small frying pan", "spatula"], ["Beat eggs with salt and herbs.", "Melt butter without browning.", "Cook eggs gently, stirring small curds.", "Fold while still soft.", "Serve immediately."], ["Chives and parsley are easy to find in Germany."]),
    recipe("Lentil Salad with Mustard", "Acid, mustard, and legume texture", 30, "Easy", ["vegetarian", "no oven"], [["pantry", "120 g cooked lentils", 120], ["produce", "1/2 carrot", 0.5], ["produce", "1/4 onion", 0.25], ["pantry", "1 tsp Dijon mustard", 1], ["pantry", "1 tbsp vinegar", 1], ["pantry", "1 tbsp olive oil", 1]], ["small pot", "bowl", "knife"], ["Cook carrot until just tender if using raw.", "Mix mustard, vinegar, oil, salt, and pepper.", "Toss lentils with dressing.", "Add carrot and onion.", "Rest 5 minutes before eating."], ["Canned lentils make this very fast."]),
    recipe("Croque Madame Skillet", "Toast, cheese melt, and fried egg timing", 20, "Easy", ["no oven"], [["bakery", "2 slices bread", 2], ["meat", "1 slice ham", 1], ["dairy", "50 g grated cheese", 50], ["dairy", "1 egg", 1], ["dairy", "1 tsp butter", 1]], ["frying pan", "spatula"], ["Build a ham and cheese sandwich.", "Toast it in butter until golden and melted.", "Fry an egg.", "Place egg on top.", "Season with pepper."], ["Use Gouda or Emmentaler."]),
    recipe("Tuna Nicoise-ish Salad", "Protein salad assembly and mustard vinaigrette", 20, "Easy", ["protein", "no oven"], [["meat", "1 small can tuna", 1], ["dairy", "1 egg", 1], ["produce", "120 g green beans or lettuce", 120], ["produce", "1/2 potato, optional", 0.5], ["pantry", "1 tsp Dijon mustard", 1], ["pantry", "1 tbsp vinegar", 1]], ["small pot", "bowl", "knife"], ["Boil egg and potato if using.", "Cook or blanch green beans briefly.", "Whisk mustard, vinegar, olive oil, salt, and pepper.", "Arrange tuna, egg, vegetables, and dressing.", "Serve at room temperature."], ["Canned tuna is easy to find and useful for high-protein weeks."]),
    recipe("White Bean Herb Salad", "Bean protein, herbs, and sharp dressing", 15, "Easy", ["vegetarian", "protein", "no oven"], [["pantry", "180 g canned white beans", 180], ["produce", "fresh herbs or parsley", 1], ["produce", "1/4 onion", 0.25], ["pantry", "1 tsp Dijon mustard", 1], ["pantry", "1 tbsp vinegar", 1], ["pantry", "1 tbsp olive oil", 1]], ["bowl", "knife", "fork"], ["Rinse beans well.", "Whisk mustard, vinegar, olive oil, salt, and pepper.", "Slice onion very thinly.", "Toss beans, onion, herbs, and dressing.", "Rest for 5 minutes before eating."], ["Canned cannellini or butter beans work well."]),
    recipe("Fromage Blanc Protein Bowl", "No-cook dairy bowl with fruit and crunch", 10, "Easy", ["vegetarian", "protein", "dessert", "no oven"], [["dairy", "200 g fromage blanc or Greek yogurt", 200], ["produce", "100 g berries or apple", 100], ["pantry", "1 tbsp nuts", 1], ["pantry", "1 tsp honey, optional", 1]], ["bowl", "spoon", "knife"], ["Spoon fromage blanc or yogurt into a bowl.", "Add fruit.", "Top with nuts.", "Add honey if you want it sweeter.", "Eat chilled."], ["Magerquark or Greek yogurt are easy German substitutes."]),
    recipe("Buckwheat Crepe with Egg", "Thin crepe batter and egg setting", 30, "Medium", ["vegetarian", "protein", "no oven"], [["dairy", "1 egg for batter plus 1 egg for filling", 2], ["pantry", "45 g buckwheat or wheat flour", 45], ["dairy", "90 ml milk or water", 90], ["dairy", "30 g grated cheese", 30], ["dairy", "1 tsp butter", 1]], ["bowl", "whisk", "frying pan", "spatula"], ["Whisk flour, one egg, milk or water, and salt into a thin batter.", "Cook one large thin crepe.", "Add cheese and crack an egg into the center.", "Fold edges inward.", "Cook until the egg is set to your liking."], ["Use ordinary flour if buckwheat flour is unavailable."]),
    recipe("Chickpea Dijon Salad", "No-cook legumes with a sharp French dressing", 15, "Easy", ["vegetarian", "protein", "no oven"], [["pantry", "180 g canned chickpeas", 180], ["produce", "1/2 cucumber or carrot", 0.5], ["produce", "fresh parsley", 1], ["pantry", "1 tsp Dijon mustard", 1], ["pantry", "1 tbsp vinegar", 1], ["pantry", "1 tbsp olive oil", 1]], ["bowl", "knife", "fork"], ["Rinse chickpeas.", "Whisk mustard, vinegar, olive oil, salt, and pepper.", "Dice cucumber or carrot.", "Toss everything with parsley.", "Rest for 5 minutes before eating."], ["Canned chickpeas make this fast and high protein."])
  ]
};

cuisines.french.levels = {
  beginner: [
    recipe("Omelette aux Fines Herbes", "Soft egg curds and folding", 15, "Easy", ["vegetarian", "no oven"], [["dairy", "2 eggs", 2], ["dairy", "1 tsp butter", 1], ["produce", "fresh herbs or chives", 1], ["pantry", "salt and black pepper", 1]], ["bowl", "fork", "small frying pan", "spatula"], ["Beat eggs with salt and herbs.", "Melt butter without browning.", "Cook eggs gently, stirring small curds.", "Fold while still soft.", "Serve immediately."], ["Chives and parsley are easy to find in Germany."]),
    recipe("French Onion Toast", "Slow onions and cheese melting without soup", 30, "Easy", ["vegetarian", "no oven"], [["produce", "1 onion", 1], ["bakery", "1 thick slice bread", 1], ["dairy", "40 g grated cheese", 40], ["dairy", "1 tsp butter", 1], ["pantry", "1 tsp vinegar", 1]], ["frying pan", "knife", "spatula"], ["Slice onion thinly.", "Cook slowly with butter and salt until soft and golden.", "Add a tiny splash of vinegar.", "Toast bread in the pan.", "Top with onions and cheese until melted."], ["Emmentaler or Gruyere-style cheese works."]),
    recipe("Ratatouille Skillet", "Vegetable sequencing and gentle stewing", 40, "Easy", ["vegetarian", "no oven"], [["produce", "1 small zucchini", 1], ["produce", "1/2 eggplant", 0.5], ["produce", "1 bell pepper", 1], ["pantry", "200 g passata", 200], ["produce", "1 garlic clove", 1], ["pantry", "1 tbsp olive oil", 1]], ["large frying pan", "knife", "spatula"], ["Cut vegetables into similar pieces.", "Brown eggplant first, then remove.", "Cook zucchini and pepper.", "Add garlic, passata, and eggplant.", "Simmer until tender and glossy."], ["Passata avoids depending on good fresh tomatoes."]),
    recipe("Lentil Salad with Mustard", "Acid, mustard, and legume texture", 30, "Easy", ["vegetarian", "no oven"], [["pantry", "120 g cooked lentils", 120], ["produce", "1/2 carrot", 0.5], ["produce", "1/4 onion", 0.25], ["pantry", "1 tsp Dijon mustard", 1], ["pantry", "1 tbsp vinegar", 1], ["pantry", "1 tbsp olive oil", 1]], ["small pot", "bowl", "knife"], ["Cook carrot until just tender if using raw.", "Mix mustard, vinegar, oil, salt, and pepper.", "Toss lentils with dressing.", "Add carrot and onion.", "Rest 5 minutes before eating."], ["Canned lentils make this very fast."]),
    recipe("Chicken Dijon", "Pan sauce with mustard and cream", 30, "Easy", ["protein", "no oven"], [["meat", "150 g chicken breast or thigh", 150], ["pantry", "1 tsp Dijon mustard", 1], ["dairy", "60 ml cream", 60], ["produce", "1/2 shallot or onion", 0.5], ["dairy", "1 tsp butter", 1]], ["frying pan", "knife", "tongs"], ["Season and brown chicken.", "Remove chicken and cook shallot.", "Add a splash of water, mustard, and cream.", "Return chicken and simmer until cooked.", "Taste and adjust salt."], ["Use cooking cream or Cremefine if that is what you have."]),
    recipe("Croque Madame Skillet", "Toast, cheese melt, and fried egg timing", 20, "Easy", ["no oven"], [["bakery", "2 slices bread", 2], ["meat", "1 slice ham", 1], ["dairy", "50 g grated cheese", 50], ["dairy", "1 egg", 1], ["dairy", "1 tsp butter", 1]], ["frying pan", "spatula"], ["Build a ham and cheese sandwich.", "Toast it in butter until golden and melted.", "Fry an egg.", "Place egg on top.", "Season with pepper."], ["Use Gouda or Emmentaler."]),
    recipe("Chocolate Mousse Shortcut", "Folding cream and chilled texture", 20, "Easy", ["dessert", "vegetarian", "no oven"], [["dairy", "100 ml whipping cream", 100], ["pantry", "50 g dark chocolate", 50], ["pantry", "1 tsp sugar, optional", 1]], ["bowl", "small saucepan or microwave", "whisk"], ["Melt chocolate gently and cool slightly.", "Whip cream to soft peaks.", "Fold a little cream into chocolate.", "Fold in the rest gently.", "Chill for at least 1 hour."], ["Use 60-70% dark chocolate."])
  ],
  intermediate: [
    recipe("Quiche Lorraine", "Shortcrust filling and custard baking", 65, "Medium", ["oven"], [["bakery", "1 small ready-made shortcrust pastry", 1], ["meat", "80 g bacon or lardons", 80], ["dairy", "2 eggs", 2], ["dairy", "120 ml cream", 120], ["dairy", "60 g grated cheese", 60]], ["oven", "small tart dish", "frying pan", "bowl"], ["Blind bake pastry if the package suggests it.", "Cook bacon until lightly crisp.", "Whisk eggs, cream, cheese, pepper, and a little salt.", "Fill pastry with bacon and custard.", "Bake at 180 C until set."], ["This appears only when No oven is off."]),
    recipe("Coq au Vin Shortcut", "Braising and sauce reduction", 55, "Medium", ["protein", "no oven"], [["meat", "180 g chicken thigh", 180], ["produce", "120 g mushrooms", 120], ["produce", "1/2 onion", 0.5], ["produce", "1 carrot", 1], ["pantry", "150 ml red wine or stock", 150], ["dairy", "1 tsp butter", 1]], ["heavy pot", "knife", "tongs"], ["Brown chicken and remove.", "Cook onion, carrot, and mushrooms.", "Add wine or stock and scrape the pan.", "Return chicken and simmer covered.", "Reduce sauce until glossy."], ["Use stock if you do not want to cook with wine."]),
    recipe("Salmon en Papillote", "Packet steaming and fish doneness", 35, "Medium", ["protein", "oven"], [["meat", "160 g salmon fillet", 160], ["produce", "1/2 zucchini", 0.5], ["produce", "1/2 lemon", 0.5], ["dairy", "1 tsp butter", 1], ["produce", "herbs, optional", 1]], ["oven", "baking paper", "knife", "baking tray"], ["Slice zucchini thinly.", "Place salmon and zucchini on baking paper.", "Add lemon, butter, salt, and herbs.", "Seal into a packet.", "Bake at 190 C until fish is just cooked."], ["This appears only when No oven is off."]),
    recipe("Mushroom Crepes", "Thin batter and savory filling", 50, "Medium", ["vegetarian", "no oven"], [["dairy", "1 egg", 1], ["dairy", "120 ml milk", 120], ["pantry", "50 g flour", 50], ["produce", "150 g mushrooms", 150], ["dairy", "50 ml cream", 50], ["dairy", "1 tsp butter", 1]], ["bowl", "whisk", "frying pan"], ["Whisk egg, milk, flour, and salt into a thin batter.", "Cook thin crepes and stack them.", "Cook mushrooms until browned.", "Add cream and reduce.", "Fill crepes with mushrooms."], ["Resting batter for 15 minutes helps if you have time."]),
    recipe("Beef Bourguignon-ish Bowl", "Browning and slow stovetop braising", 70, "Medium", ["protein", "no oven"], [["meat", "180 g beef stew meat", 180], ["produce", "120 g mushrooms", 120], ["produce", "1 carrot", 1], ["produce", "1/2 onion", 0.5], ["pantry", "180 ml red wine or stock", 180], ["pantry", "1 tsp flour", 1]], ["heavy pot", "knife", "wooden spoon"], ["Brown beef well.", "Cook onion, carrot, and mushrooms.", "Stir in flour.", "Add wine or stock and scrape the pot.", "Simmer gently until tender."], ["This is a small learning version, not a full classic stew."]),
    recipe("Potato Gratin", "Layering, cream absorption, and oven browning", 60, "Medium", ["vegetarian", "oven"], [["produce", "250 g potatoes", 250], ["dairy", "120 ml cream", 120], ["dairy", "50 ml milk", 50], ["produce", "1 garlic clove", 1], ["dairy", "40 g grated cheese", 40]], ["oven", "small baking dish", "knife"], ["Slice potatoes thinly.", "Warm cream, milk, garlic, salt, and pepper.", "Layer potatoes in a small dish.", "Pour cream over and top with cheese.", "Bake at 180 C until tender and browned."], ["This appears only when No oven is off."]),
    recipe("Creme Caramel Shortcut", "Custard setting and caramel", 70, "Medium", ["dessert", "vegetarian", "oven"], [["dairy", "1 egg", 1], ["dairy", "120 ml milk", 120], ["pantry", "2 tbsp sugar", 2], ["pantry", "vanilla, optional", 1]], ["oven", "small ramekin", "small saucepan", "baking dish"], ["Make a small caramel with half the sugar and pour into a ramekin.", "Whisk egg, milk, remaining sugar, and vanilla.", "Pour custard over caramel.", "Bake in a water bath at 160 C.", "Chill before serving."], ["This appears only when No oven is off."])
  ]
};

delete cuisines.japanese;
delete cuisines.mexican;

const categories = {
  produce: "Produce",
  pantry: "Pantry",
  pasta: "Pasta, Rice, Bread",
  bakery: "Pasta, Rice, Bread",
  dairy: "Dairy",
  meat: "Meat",
  frozen: "Frozen"
};

const translations = {
  en: {
    language: "Language",
    cuisine: "Cuisine",
    level: "Level",
    servings: "Servings",
    constraints: "Constraints",
    vegetarian: "Vegetarian",
    noOven: "No oven",
    highProtein: "High protein",
    germanyMode: "Germany Mode",
    germanyModeText: "Plans prefer ingredients found at Rewe, Edeka, Aldi, Lidl, Asian markets, Turkish markets, or Italian delis in Berlin.",
    pathEyebrow: "7-day cooking path",
    plan: "Plan",
    shopping: "Shopping",
    progress: "Progress",
    wholeWeek: "For the whole week",
    shoppingList: "Shopping List",
    copyList: "Copy list",
    copied: "Copied",
    selectList: "Select list",
    yourNotes: "Your notes",
    cookingProgress: "Cooking Progress",
    reset: "Reset",
    beginner: "Beginner",
    intermediate: "Intermediate",
    week: "Week",
    day: "Day",
    min: "min",
    serving: "serving",
    servingsWord: "servings",
    cooked: "Cooked",
    markCooked: "Mark cooked",
    surpriseMe: "Surprise me",
    chooseAnotherDish: "Choose another dish",
    ingredients: "Ingredients",
    tools: "Tools",
    substitutions: "Berlin substitutions",
    steps: "Steps",
    difficultyRating: "Difficulty rating",
    notesPlaceholder: "Notes for next time",
    easy: "Easy",
    ok: "Ok",
    hard: "Hard",
    medium: "Medium",
    photoComingSoon: "Photo coming soon",
    photo: "photo",
    macros: "Estimated macros",
    perServing: "per serving",
    calories: "Calories",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fat",
    cuisineNames: { italian: "Italian", chinese: "Chinese", french: "French" },
    programTitle: "{cuisine} {level} Week",
    categories
  },
  uk: {
    language: "Мова",
    cuisine: "Кухня",
    level: "Рівень",
    servings: "Порції",
    constraints: "Обмеження",
    vegetarian: "Вегетаріанське",
    noOven: "Без духовки",
    highProtein: "Високобілкове",
    germanyMode: "Режим для Німеччини",
    germanyModeText: "Плани враховують інгредієнти, які легко знайти в Rewe, Edeka, Aldi, Lidl, азійських магазинах, турецьких магазинах або італійських делі в Берліні.",
    pathEyebrow: "7-денний кулінарний шлях",
    plan: "План",
    shopping: "Покупки",
    progress: "Прогрес",
    wholeWeek: "На весь тиждень",
    shoppingList: "Список покупок",
    copyList: "Скопіювати",
    copied: "Скопійовано",
    selectList: "Вибрати список",
    yourNotes: "Ваші нотатки",
    cookingProgress: "Кулінарний прогрес",
    reset: "Скинути",
    beginner: "Початковий",
    intermediate: "Середній",
    week: "тиждень",
    programTitle: "{cuisine} кухня · {level} рівень",
    day: "День",
    min: "хв",
    serving: "порція",
    servingsWord: "порції",
    cooked: "Готово",
    markCooked: "Позначити як готове",
    surpriseMe: "Змінити страву",
    chooseAnotherDish: "Вибрати іншу страву",
    ingredients: "Інгредієнти",
    tools: "Кухонне приладдя",
    substitutions: "Заміни в Берліні",
    steps: "Кроки",
    difficultyRating: "Оцінка складності",
    notesPlaceholder: "Нотатки на наступний раз",
    easy: "Легко",
    ok: "Нормально",
    hard: "Складно",
    medium: "Середньо",
    photoComingSoon: "Фото страви",
    photo: "фото",
    macros: "Орієнтовні макроси",
    perServing: "на порцію",
    calories: "Калорії",
    protein: "Білки",
    carbs: "Вуглеводи",
    fat: "Жири",
    cuisineNames: { italian: "Італійська", chinese: "Китайська", french: "Французька" },
    categories: {
      produce: "Овочі та зелень",
      pantry: "Бакалія",
      pasta: "Паста, рис, хліб",
      bakery: "Паста, рис, хліб",
      dairy: "Молочні продукти",
      meat: "М'ясо та риба",
      frozen: "Заморожене"
    }
  }
};

const ingredientTranslations = {
  "aglio e olio": "aglio e olio",
  "arborio or carnaroli rice": "рис Arborio або Carnaroli",
  "avocado": "авокадо",
  "bacon or lardons": "бекон або лардони",
  "basil, fresh or dried": "базилік, свіжий або сушений",
  "basil, optional": "базилік, за бажанням",
  "beef stew meat": "яловичина для тушкування",
  "bell pepper": "солодкий перець",
  "berries or apple": "ягоди або яблуко",
  "black pepper": "чорний перець",
  "black sesame or peanut butter": "чорний кунжут або арахісова паста",
  "bread": "скибочки хліба",
  "broccoli": "броколі",
  "buckwheat or wheat flour": "гречане або пшеничне борошно",
  "butter": "вершкове масло",
  "cabbage": "капуста",
  "canned beans": "консервована квасоля",
  "canned black beans": "консервована чорна квасоля",
  "canned chickpeas": "консервований нут",
  "canned tomatoes": "консервовані томати",
  "canned tomato": "консервовані томати",
  "canned tomatoes or passata": "консервовані томати або пасата",
  "canned white beans": "консервована біла квасоля",
  "carrot": "морква",
  "celery stalk": "стебло селери",
  "chicken": "курка",
  "chicken breast": "куряча грудка",
  "chicken breast or pork schnitzel": "куряча грудка або свинячий шніцель",
  "chicken breast or thigh": "куряча грудка або стегно",
  "chicken breast, thinly sliced": "куряча грудка, тонко нарізана",
  "chicken thigh": "куряче стегно",
  "chicken thigh or breast": "куряче стегно або грудка",
  "chili bean sauce": "чилі-бобовий соус",
  "chili flakes": "пластівці чилі",
  "chili flakes, optional": "пластівці чилі, за бажанням",
  "chili oil": "чилі-олія",
  "chili powder": "мелений чилі",
  "cinnamon": "кориця",
  "cocoa powder": "какао-порошок",
  "coconut milk": "кокосове молоко",
  "cooked lentils": "варена сочевиця",
  "cooked rice": "варений рис",
  "coriander or parsley": "коріандр або петрушка",
  "corn": "кукурудза",
  "cornstarch": "кукурудзяний крохмаль",
  "cornstarch, optional": "кукурудзяний крохмаль, за бажанням",
  "cream": "вершки",
  "cucumber": "огірок",
  "cucumber or avocado": "огірок або авокадо",
  "cucumber or carrot": "огірок або морква",
  "dark chocolate": "темний шоколад",
  "dashi or vegetable stock": "даші або овочевий бульйон",
  "dijon mustard": "діжонська гірчиця",
  "doubanjiang or chili bean sauce": "доубаньцзян або чилі-бобовий соус",
  "dried porcini": "сушені білі гриби",
  "egg": "яйце",
  "egg for batter plus 1 egg for filling": "яйце для тіста та 1 яйце для начинки",
  "egg yolk": "яєчний жовток",
  "egg yolk plus 1 whole egg": "яєчний жовток та 1 ціле яйце",
  "eggplant": "баклажан",
  "espresso or strong coffee": "еспресо або міцна кава",
  "feta": "фета",
  "feta or yogurt": "фета або йогурт",
  "firm tofu": "твердий тофу",
  "five-spice": "суміш five-spice",
  "five-spice or paprika": "суміш five-spice або паприка",
  "flour": "борошно",
  "flour, plus extra": "борошно, плюс трохи додатково",
  "fresh herbs or chives": "свіжа зелень або шніт-цибуля",
  "fresh herbs or parsley": "свіжа зелень або петрушка",
  "fresh herbs or spring onion": "свіжа зелень або зелена цибуля",
  "fresh parsley": "свіжа петрушка",
  "fromage blanc or greek yogurt": "fromage blanc або грецький йогурт",
  "frozen berries": "заморожені ягоди",
  "frozen gyoza": "заморожені ґьодза",
  "gelatin": "желатин",
  "ginger": "імбир",
  "garlic clove": "зубчики часнику",
  "glutinous rice flour": "клейке рисове борошно",
  "grated cheese": "тертий сир",
  "grated ginger": "тертий імбир",
  "green beans": "зелена квасоля",
  "green beans or lettuce": "зелена квасоля або салат",
  "green tea or light stock": "зелений чай або легкий бульйон",
  "ham": "скибка шинки",
  "herbs, optional": "зелень, за бажанням",
  "honey": "мед",
  "honey, optional": "мед, за бажанням",
  "hot sauce, optional": "гострий соус, за бажанням",
  "ketchup": "кетчуп",
  "lemon": "лимон",
  "lime": "лайм",
  "loffelbiskuits": "печиво савоярді",
  "long grain rice": "довгозернистий рис",
  "mango or frozen mango": "манго або заморожене манго",
  "mango or 150 g frozen mango": "манго або 150 г заморожене манго",
  "mascarpone": "маскарпоне",
  "matcha": "матча",
  "mayonnaise": "майонез",
  "milk": "молоко",
  "milk or water": "молоко або вода",
  "minced pork or mushrooms": "свинячий фарш або гриби",
  "mirin or sugar water": "мірін або підсолоджена вода",
  "miso paste": "місо-паста",
  "mixed vegetables": "овочева суміш",
  "mozzarella, optional": "моцарела, за бажанням",
  "mushrooms": "гриби",
  "neutral oil": "нейтральна олія",
  "no oven": "без духовки",
  "nori sheet": "лист норі",
  "nuts": "горіхи",
  "olive oil": "оливкова олія",
  "onion": "цибуля",
  "pancetta or guanciale": "панчета або гуанчале",
  "parmesan": "пармезан",
  "parmesan or grana padano": "пармезан або Grana Padano",
  "parmesan or grana padano, optional": "пармезан або Grana Padano, за бажанням",
  "parsley, optional": "петрушка, за бажанням",
  "passata": "пасата",
  "passata or canned tomatoes": "пасата або консервовані томати",
  "peanut butter or sesame paste": "арахісова паста або кунжутна паста",
  "peanuts": "арахіс",
  "peas or mixed vegetables": "горошок або овочева суміш",
  "pecorino romano": "Pecorino Romano",
  "penne": "пенне",
  "penne or spaghetti": "пенне або спагеті",
  "pork shoulder or tenderloin": "свиняча лопатка або вирізка",
  "potato, optional": "картопля, за бажанням",
  "potatoes": "картопля",
  "prosciutto": "прошутто",
  "red onion": "червона цибуля",
  "red wine or stock": "червоне вино або бульйон",
  "rice": "рис",
  "ricotta": "рикота",
  "ricotta salata or feta": "ricotta salata або фета",
  "rigatoni or penne": "ригатоні або пенне",
  "roasted peppers from a jar": "печений перець з банки",
  "sage leaves": "листя шавлії",
  "sage leaf": "листя шавлії",
  "sage or herbs": "шавлія або зелень",
  "salmon fillet": "філе лосося",
  "salt": "сіль",
  "salt and black pepper": "сіль і чорний перець",
  "salt and pepper": "сіль і перець",
  "seasonal vegetables": "сезонні овочі",
  "sesame oil, optional": "кунжутна олія, за бажанням",
  "sesame seeds": "кунжут",
  "sheet gelatin": "листовий желатин",
  "shallot or onion": "шалот або цибуля",
  "shortcrust pastry": "пісочне тісто",
  "small can tuna": "маленька банка тунця",
  "small eggplant": "маленький баклажан",
  "small ready-made shortcrust pastry": "маленьке готове пісочне тісто",
  "small tapioca pearls or pudding rice": "маленькі перлини тапіоки або рис для пудингу",
  "small zucchini": "маленький цукіні",
  "smoked paprika": "копчена паприка",
  "soba noodles": "локшина соба",
  "soft white bread": "скибки м'якого білого хліба",
  "soy sauce": "соєвий соус",
  "soy sauce and vinegar": "соєвий соус і оцет",
  "spaghetti": "спагеті",
  "spaghetti or bucatini": "спагеті або букатіні",
  "spinach": "шпинат",
  "spring onion": "зелена цибуля",
  "stale bread": "скибки черствого хліба",
  "stock": "бульйон",
  "stock or water": "бульйон або вода",
  "stock or white wine": "бульйон або біле вино",
  "store-bought gnocchi": "готові ньокі",
  "sugar": "цукор",
  "sugar water": "підсолоджена вода",
  "sugar, optional": "цукор, за бажанням",
  "sushi rice": "рис для суші",
  "thick slice bread": "товста скибка хліба",
  "thin noodles": "тонка локшина",
  "tofu": "тофу",
  "tomato or 180 g canned tomato": "помідори або 180 г консервовані томати",
  "tomatoes or canned tomatoes": "помідори або консервовані томати",
  "tortillas": "тортильї",
  "vanilla, optional": "ваніль, за бажанням",
  "vegetable stock": "овочевий бульйон",
  "vinegar": "оцет",
  "wakame, optional": "вакаме, за бажанням",
  "warm water": "тепла вода",
  "wheat noodles": "пшенична локшина",
  "whipping cream": "вершки для збивання",
  "white fish fillet": "філе білої риби",
  "worcestershire sauce": "вустерський соус",
  "yogurt": "йогурт",
  "yogurt or sour cream": "йогурт або сметана",
  "yogurt, optional": "йогурт, за бажанням",
  "zucchini": "цукіні"
};

const toolTranslations = {
  "baking dish": "форма для запікання",
  "baking paper": "папір для випікання",
  "baking tray": "деко",
  "bench scraper or knife": "скребок для тіста або ніж",
  "blender or fork": "блендер або виделка",
  bowl: "миска",
  brush: "пензлик",
  colander: "друшляк",
  "cutting board": "дошка для нарізання",
  "fine grater": "дрібна тертка",
  fork: "виделка",
  "frying pan": "пательня",
  glass: "склянка",
  grater: "тертка",
  "heavy pot": "каструля з товстим дном",
  knife: "ніж",
  ladle: "ополоник",
  "large frying pan": "велика пательня",
  "large pot": "велика каструля",
  "medium pot": "середня каструля",
  oven: "духовка",
  "pan or toaster": "пательня або тостер",
  plate: "тарілка",
  pot: "каструля",
  "pot with steamer or covered pan": "каструля з пароваркою або пательня з кришкою",
  saucepan: "сотейник",
  sieve: "сито",
  "slotted spoon": "шумівка",
  "small baking dish": "маленька форма для запікання",
  "small bowl": "маленька миска",
  "small frying pan": "маленька пательня",
  "small glass": "маленька склянка",
  "small glass or dish": "маленька склянка або форма",
  "small pan": "маленька пательня",
  "small pot": "маленька каструля",
  "small ramekin": "маленька керамічна формочка",
  "small saucepan": "маленький сотейник",
  "small saucepan or microwave": "маленький сотейник або мікрохвильовка",
  "small tart dish": "маленька форма для тарта",
  spatula: "лопатка",
  spoon: "ложка",
  tongs: "щипці",
  toothpicks: "зубочистки",
  whisk: "вінчик",
  "wok or frying pan": "вок або пательня",
  "wooden spoon": "дерев'яна ложка"
};

const textTranslations = {
  "Grana Padano is easier to find and cheaper than Parmesan.": "Grana Padano легше знайти, і він дешевший за пармезан.",
  "Use dried parsley if fresh herbs look tired.": "Використай сушену петрушку, якщо свіжа зелень виглядає не дуже.",
  "Use Grana Padano if Pecorino is unavailable, but salt the pasta water a little more.": "Використай Grana Padano, якщо немає Pecorino, але трохи сильніше посоли воду для пасти.",
  "Passata from any German supermarket works well here.": "Пасата з будь-якого німецького супермаркету тут добре підійде.",
  "Use Mutti or store-brand canned tomatoes.": "Візьми Mutti або консервовані томати власної марки супермаркету.",
  "Brown Champignons are good in Berlin supermarkets.": "Коричневі печериці з берлінських супермаркетів добре підходять.",
  "Dried porcini from Italian shops make it deeper.": "Сушені білі гриби з італійських магазинів дадуть глибший смак.",
  "German minute steaks or thin Schnitzel cuts work well.": "Німецькі minute steaks або тонкі шматки для шніцеля добре працюють.",
  "Vacuum-packed gnocchi from Rewe, Edeka, Aldi, or Lidl is fine for practice.": "Вакуумні ньокі з Rewe, Edeka, Aldi або Lidl цілком підходять для практики.",
  "This egg-free version is simpler and calmer for a first try.": "Ця версія без яєць простіша і спокійніша для першої спроби.",
  "Feta is easier to find than ricotta salata in Berlin.": "Фету в Берліні знайти легше, ніж ricotta salata.",
  "Use Speck or bacon if pancetta is unavailable, but keep the heat gentle.": "Використай Speck або бекон, якщо немає панчети, але готуй на помірному вогні.",
  "Use frozen soup vegetables when produce is not inspiring.": "Використай заморожені овочі для супу, якщо свіжі овочі не надихають.",
  "Dried porcini are often in Italian delis or larger supermarkets.": "Сушені білі гриби часто є в італійських делі або великих супермаркетах.",
  "Use thin chicken schnitzel from a German supermarket to save prep time.": "Щоб зекономити час, візьми тонкий курячий шніцель з німецького супермаркету.",
  "Quark is too wet; ricotta is worth buying for this dish.": "Quark занадто вологий; для цієї страви краще купити рикоту.",
  "Frozen berries are reliable year-round in Germany.": "Заморожені ягоди в Німеччині стабільно добрі протягом року.",
  "Passata works better than weak fresh tomatoes.": "Пасата працює краще, ніж несмачні свіжі помідори.",
  "Use parsley, chives, basil, or whatever herbs look good.": "Використай петрушку, шніт-цибулю, базилік або будь-яку зелень, яка добре виглядає.",
  "Jarred roasted peppers are reliable in Berlin when tomatoes are sad.": "Печений перець з банки в Берліні часто надійніший, коли помідори сумні.",
  "Use canned tomatoes when fresh ones are weak.": "Використай консервовані томати, коли свіжі слабкі на смак.",
  "Mie noodles from German supermarkets work well.": "Локшина mie з німецьких супермаркетів добре підходить.",
  "Frozen broccoli is fine for practice.": "Заморожена броколі цілком підходить для практики.",
  "Frozen green beans work if fresh ones look tired.": "Заморожена зелена квасоля підійде, якщо свіжа виглядає не дуже.",
  "Leftover rice is best; fresh rice should cool uncovered first.": "Найкраще брати вчорашній рис; свіжий рис спочатку охолоди без кришки.",
  "Use frozen white fish fillets, thawed and patted dry.": "Можна взяти заморожене філе білої риби, розморозити й обсушити.",
  "Frozen mango is usually better than unripe fresh mango.": "Заморожене манго зазвичай краще, ніж недостигле свіже.",
  "Use cashews if you do not have peanuts.": "Використай кеш'ю, якщо немає арахісу.",
  "Asian markets in Berlin usually have doubanjiang.": "В азійських магазинах Берліна зазвичай є доубаньцзян.",
  "This appears only when No oven is off.": "Це з'являється тільки тоді, коли вимкнено опцію «Без духовки».",
  "Peanut butter is a practical sesame-paste substitute.": "Арахісова паста є практичною заміною кунжутної пасти.",
  "Use white pepper if you have it.": "Використай білий перець, якщо він є.",
  "Use peanut butter if black sesame paste is unavailable.": "Використай арахісову пасту, якщо немає пасти з чорного кунжуту.",
  "Firm tofu from Asian markets or bio shops works best.": "Найкраще підходить твердий тофу з азійських магазинів або біомагазинів.",
  "Use paprika if you do not have five-spice.": "Використай паприку, якщо немає суміші five-spice.",
  "Frozen spinach works if squeezed dry first.": "Заморожений шпинат підійде, якщо спочатку добре відтиснути воду.",
  "Chives and parsley are easy to find in Germany.": "Шніт-цибулю і петрушку легко знайти в Німеччині.",
  "Emmentaler or Gruyere-style cheese works.": "Підійде Emmentaler або сир у стилі Gruyere.",
  "Passata avoids depending on good fresh tomatoes.": "Пасата дозволяє не залежати від якісних свіжих помідорів.",
  "Canned lentils make this very fast.": "Консервована сочевиця робить цю страву дуже швидкою.",
  "Use cooking cream or Cremefine if that is what you have.": "Використай кулінарні вершки або Cremefine, якщо маєш саме їх.",
  "Use Gouda or Emmentaler.": "Використай Gouda або Emmentaler.",
  "Use 60-70% dark chocolate.": "Використай темний шоколад 60-70%.",
  "Use stock if you do not want to cook with wine.": "Використай бульйон, якщо не хочеш готувати з вином.",
  "Resting batter for 15 minutes helps if you have time.": "Якщо маєш час, дай тісту відпочити 15 хвилин.",
  "This is a small learning version, not a full classic stew.": "Це маленька навчальна версія, не повне класичне рагу.",
  "Canned tuna is easy to find and useful for high-protein weeks.": "Консервований тунець легко знайти, і він корисний для високобілкових тижнів.",
  "Canned cannellini or butter beans work well.": "Консервована квасоля cannellini або butter beans добре підходить.",
  "Magerquark or Greek yogurt are easy German substitutes.": "Magerquark або грецький йогурт легко знайти як німецькі заміни.",
  "Use ordinary flour if buckwheat flour is unavailable.": "Використай звичайне борошно, якщо немає гречаного.",
  "Canned chickpeas make this fast and high protein.": "Консервований нут робить цю страву швидкою і білковою."
};

const stepTranslations = {
  "Boil a pot of water and salt it until it tastes gently seasoned.": "Закип'яти каструлю води й посоли так, щоб вода була м'яко приправлена.",
  "Cook spaghetti until one minute before al dente.": "Вари спагеті на одну хвилину менше, ніж до стану al dente.",
  "Slice garlic thinly and warm it with olive oil on low-medium heat for 1 to 2 minutes.": "Тонко наріж часник і прогрій його з оливковою олією на слабко-середньому вогні 1-2 хвилини.",
  "Add chili if using, then move the pasta into the pan with 3 tablespoons pasta water.": "Додай чилі, якщо використовуєш, потім переклади пасту в пательню з 3 столовими ложками води від пасти.",
  "Toss until glossy, then finish with pepper, parsley, and cheese if you like.": "Перемішуй, поки паста не стане глянцевою, потім додай перець, петрушку і сир за бажанням.",
  "Boil pasta in less water than usual so the water becomes very starchy.": "Вари пасту в меншій кількості води, ніж зазвичай, щоб вода стала дуже крохмалистою.",
  "Toast black pepper in a dry pan for 30 to 60 seconds.": "Прогрій чорний перець на сухій пательні 30-60 секунд.",
  "Grate Pecorino very finely and mix it with a little warm pasta water into a paste.": "Дуже дрібно натри Pecorino і змішай з невеликою кількістю теплої води від пасти до пастоподібної консистенції.",
  "Add pasta and a splash of pasta water to the pepper pan, then turn off the heat.": "Додай пасту і трохи води від пасти в пательню з перцем, потім вимкни вогонь.",
  "Toss in the cheese paste, adding tiny splashes of water until creamy.": "Вмішай сирну пасту, додаючи по трохи води, доки соус не стане кремовим.",
  "Warm olive oil and gently cook sliced garlic for 1 minute.": "Прогрій оливкову олію і м'яко готуй нарізаний часник 1 хвилину.",
  "Add tomatoes, salt lightly, and simmer for 15 to 20 minutes.": "Додай томати, злегка посоли і тушкуй 15-20 хвилин.",
  "Cook pasta in salted water until al dente.": "Вари пасту в підсоленій воді до al dente.",
  "Toss pasta through the sauce with a splash of pasta water.": "Перемішай пасту з соусом, додавши трохи води від пасти.",
  "Toss pasta with sauce and a splash of pasta water.": "Перемішай пасту з соусом і невеликою кількістю води від пасти.",
  "Finish with basil, pepper, and grated cheese.": "Заверши базиліком, перцем і тертим сиром.",
  "Warm the stock in a small saucepan and keep it hot.": "Підігрій бульйон у маленькому сотейнику і тримай його гарячим.",
  "Cook onion in olive oil for 2 minutes, then add sliced mushrooms for 5 minutes.": "Готуй цибулю в оливковій олії 2 хвилини, потім додай нарізані гриби на 5 хвилин.",
  "Stir in rice for 1 minute until the grains look slightly glossy.": "Додай рис і перемішуй 1 хвилину, доки зерна не стануть злегка глянцевими.",
  "Add warm stock one ladle at a time, stirring often and waiting before adding more.": "Додавай теплий бульйон по одному ополонику, часто помішуючи і чекаючи перед наступною порцією.",
  "After 18 to 20 minutes, turn off heat and stir in butter and cheese.": "Через 18-20 хвилин вимкни вогонь і вмішай масло та сир.",
  "Slice the meat thinly and season it with salt and pepper.": "Тонко наріж м'ясо і приправ сіллю та перцем.",
  "Dust lightly with flour and shake off the excess.": "Злегка обваляй у борошні й струси зайве.",
  "Cook in olive oil for 2 to 3 minutes per side, then move to a plate.": "Готуй в оливковій олії 2-3 хвилини з кожного боку, потім переклади на тарілку.",
  "Add lemon juice, stock, and butter to the pan and stir into a sauce.": "Додай у пательню лимонний сік, бульйон і масло та перемішай у соус.",
  "Return the meat for 1 minute and serve with the sauce.": "Поверни м'ясо на 1 хвилину і подавай із соусом.",
  "Boil salted water and cook gnocchi until they float.": "Закип'яти підсолену воду і вари ньокі, доки вони не спливуть.",
  "Melt butter in a pan and add sage for 1 minute.": "Розтопи масло на пательні й додай шавлію на 1 хвилину.",
  "Move gnocchi into the pan and toss for 2 to 3 minutes.": "Переклади ньокі в пательню і перемішуй 2-3 хвилини.",
  "Add black pepper and grated cheese.": "Додай чорний перець і тертий сир.",
  "Taste before adding salt because the cheese is salty.": "Спробуй перед тим, як солити, бо сир уже солоний.",
  "Make coffee and let it cool.": "Звари каву і дай їй охолонути.",
  "Whip cream with sugar until soft, then fold into mascarpone.": "Збий вершки з цукром до м'яких піків, потім обережно вмішай у маскарпоне.",
  "Dip Loffelbiskuits quickly in coffee.": "Швидко занур печиво савоярді в каву.",
  "Layer biscuits and cream in a glass or small dish.": "Виклади шарами печиво і крем у склянку або маленьку форму.",
  "Chill for at least 3 hours, then dust with cocoa.": "Охолоджуй щонайменше 3 години, потім посип какао.",
  "Cube eggplant and salt it for 10 minutes, then pat dry.": "Наріж баклажан кубиками, посоли на 10 хвилин, потім обсуши.",
  "Brown eggplant in olive oil until soft and golden.": "Обсмаж баклажан в оливковій олії до м'якості й золотистості.",
  "Cook garlic briefly, add passata, and simmer until thicker.": "Коротко прогрій часник, додай пасату і тушкуй, доки соус не загусне.",
  "Cook pasta al dente and toss with sauce and eggplant.": "Звари пасту al dente і перемішай із соусом та баклажаном.",
  "Finish with basil and grated salty cheese.": "Заверши базиліком і тертим солоним сиром.",
  "Render pancetta gently until crisp.": "Повільно витопи панчету, доки вона не стане хрусткою.",
  "Whisk eggs, cheese, and lots of pepper in a bowl.": "Збий у мисці яйця, сир і багато перцю.",
  "Cook pasta and save starchy water.": "Звари пасту і збережи крохмалисту воду.",
  "Toss hot pasta with pancetta off the heat.": "Змішай гарячу пасту з панчетою вже без вогню.",
  "Add egg mixture and pasta water gradually until glossy, not scrambled.": "Поступово додавай яєчну суміш і воду від пасти, доки соус не стане глянцевим, але яйця не згорнуться.",
  "Cook onion, carrot, and celery slowly in olive oil for 8 minutes.": "Повільно готуй цибулю, моркву і селеру в оливковій олії 8 хвилин.",
  "Add vegetables, beans, tomatoes, and stock.": "Додай овочі, квасолю, томати і бульйон.",
  "Simmer until vegetables are tender but not dull.": "Тушкуй, доки овочі не стануть м'якими, але не перевареними.",
  "Season carefully with salt and pepper.": "Обережно приправ сіллю і перцем.",
  "Serve with Parmesan and olive oil.": "Подавай з пармезаном і оливковою олією.",
  "Soak dried porcini in hot water for 10 minutes and strain the liquid.": "Замочи сушені білі гриби в гарячій воді на 10 хвилин і проціди рідину.",
  "Cook onion and fresh mushrooms until browned.": "Готуй цибулю і свіжі гриби до підрум'янення.",
  "Toast rice for 1 minute.": "Прогрій рис 1 хвилину.",
  "Add warm stock and porcini liquid gradually while stirring.": "Поступово додавай теплий бульйон і грибну рідину, помішуючи.",
  "Finish off heat with butter and Parmesan.": "Зніми з вогню і заверши маслом та пармезаном.",
  "Flatten chicken pieces gently.": "Обережно відбий шматочки курки.",
  "Top with sage and prosciutto, securing if needed.": "Поклади зверху шавлію і прошутто, за потреби закріпи.",
  "Dust lightly with flour.": "Злегка присип борошном.",
  "Sear quickly on both sides.": "Швидко обсмаж з обох боків.",
  "Deglaze with stock or wine and finish with butter.": "Деглазуй бульйоном або вином і заверши маслом.",
  "Drain ricotta if wet.": "Відціди рикоту, якщо вона волога.",
  "Mix ricotta, yolk, flour, Parmesan, salt, and pepper into a soft dough.": "Змішай рикоту, жовток, борошно, пармезан, сіль і перець у м'яке тісто.",
  "Roll gently into ropes and cut small pieces.": "Обережно розкачай у джгути і наріж маленькими шматочками.",
  "Boil until they float.": "Вари, доки вони не спливуть.",
  "Toss in butter with sage or herbs.": "Перемішай у маслі з шавлією або зеленню.",
  "Soak gelatin in cold water.": "Замочи желатин у холодній воді.",
  "Warm cream, milk, and sugar without boiling.": "Підігрій вершки, молоко і цукор, не доводячи до кипіння.",
  "Stir in squeezed gelatin until dissolved.": "Вмішай відтиснутий желатин, доки він не розчиниться.",
  "Pour into a glass and chill for at least 4 hours.": "Перелий у склянку і охолоджуй щонайменше 4 години.",
  "Cook berries briefly into a sauce and spoon over.": "Коротко провари ягоди в соус і виклади зверху.",
  "Cook garlic and chili gently in olive oil.": "М'яко готуй часник і чилі в оливковій олії.",
  "Add tomatoes and simmer for 15 minutes.": "Додай томати і тушкуй 15 хвилин.",
  "Cook penne in salted water.": "Вари пенне в підсоленій воді.",
  "Finish with parsley and cheese if you like.": "Заверши петрушкою і сиром за бажанням.",
  "Beat eggs with cheese, herbs, salt, and pepper.": "Збий яйця з сиром, зеленню, сіллю і перцем.",
  "Melt butter in a small pan on low-medium heat.": "Розтопи масло в маленькій пательні на слабко-середньому вогні.",
  "Add eggs and cook slowly until mostly set.": "Додай яйця і готуй повільно, доки вони майже не схопляться.",
  "Fold or flip carefully.": "Обережно склади або переверни.",
  "Rest for 1 minute before eating.": "Дай постояти 1 хвилину перед їжею.",
  "Toast or pan-crisp the bread.": "Підсуши або підрум'янь хліб на пательні.",
  "Slice roasted peppers and onion.": "Наріж печений перець і цибулю.",
  "Whisk olive oil with vinegar, salt, and pepper.": "Збий оливкову олію з оцтом, сіллю і перцем.",
  "Toss everything together.": "Перемішай усе разом.",
  "Add mozzarella if you want it richer.": "Додай моцарелу, якщо хочеш ситніший варіант.",
  "Cook rice first.": "Спочатку звари рис.",
  "Beat eggs with a pinch of salt.": "Збий яйця з дрібкою солі.",
  "Scramble eggs until just set, then remove.": "Приготуй яйця до легкого схоплення, потім зніми їх.",
  "Cook tomatoes until saucy.": "Готуй томати, доки вони не стануть соусними.",
  "Return eggs, add soy sauce, and finish with spring onion.": "Поверни яйця, додай соєвий соус і заверши зеленою цибулею.",
  "Cook noodles and save a splash of noodle water.": "Звари локшину і збережи трохи води від неї.",
  "Slice spring onions.": "Наріж зелену цибулю.",
  "Cook spring onions slowly in oil until fragrant.": "Повільно готуй зелену цибулю в олії до аромату.",
  "Stir soy sauce and sugar into the oil.": "Вмішай у олію соєвий соус і цукор.",
  "Toss noodles through the sauce.": "Перемішай локшину з соусом.",
  "Cook rice.": "Звари рис.",
  "Slice chicken and mix with soy sauce and cornstarch.": "Наріж курку і змішай із соєвим соусом та крохмалем.",
  "Blanch or steam broccoli briefly.": "Коротко бланшуй або пропар броколі.",
  "Stir-fry chicken until cooked.": "Швидко обсмаж курку до готовності.",
  "Add broccoli, garlic, and a splash of water to finish.": "Додай броколі, часник і трохи води, щоб завершити.",
  "Blanch or microwave beans briefly.": "Коротко бланшуй квасолю або прогрій у мікрохвильовці.",
  "Stir-fry beans in a hot pan until blistered.": "Швидко обсмаж квасолю на гарячій пательні до підпалин.",
  "Add garlic for the last minute.": "Додай часник на останню хвилину.",
  "Season with soy sauce and sesame oil.": "Приправ соєвим соусом і кунжутною олією.",
  "Use cold cooked rice if possible.": "За можливості використовуй холодний варений рис.",
  "Scramble eggs and remove them.": "Приготуй яйця і зніми їх з пательні.",
  "Stir-fry vegetables and rice in a hot pan.": "Швидко обсмаж овочі й рис на гарячій пательні.",
  "Return eggs and season with soy sauce.": "Поверни яйця і приправ соєвим соусом.",
  "Finish with spring onion.": "Заверши зеленою цибулею.",
  "Steam fish with ginger until just cooked.": "Готуй рибу з імбиром на парі до щойно готового стану.",
  "Top with spring onion.": "Посип зеленою цибулею.",
  "Warm oil until shimmering.": "Розігрій олію, доки вона не заблищить.",
  "Pour oil over the fish and season with soy sauce.": "Полий рибу олією і приправ соєвим соусом.",
  "Cook tapioca pearls or pudding rice until tender.": "Вари перлини тапіоки або рис для пудингу до м'якості.",
  "Blend mango with coconut milk and sugar.": "Збий манго з кокосовим молоком і цукром.",
  "Stir in cooked pearls.": "Вмішай готові перлини.",
  "Chill until cold.": "Охолоджуй, доки десерт не стане холодним.",
  "Serve in a glass.": "Подавай у склянці.",
  "Marinate diced chicken with soy sauce and cornstarch.": "Замаринуй нарізану кубиками курку з соєвим соусом і крохмалем.",
  "Mix soy sauce, vinegar, sugar, and water for sauce.": "Змішай соєвий соус, оцет, цукор і воду для соусу.",
  "Stir-fry chicken, then aromatics and pepper.": "Швидко обсмаж курку, потім ароматичні інгредієнти й перець.",
  "Add sauce and peanuts, tossing until glossy.": "Додай соус і арахіс, перемішуй до глянцевості.",
  "Brown pork or mushrooms.": "Підрум'янь свинину або гриби.",
  "Add garlic, ginger, and chili bean sauce.": "Додай часник, імбир і чилі-бобовий соус.",
  "Add tofu cubes and a splash of water.": "Додай кубики тофу і трохи води.",
  "Thicken gently with cornstarch slurry.": "Обережно загусь сумішшю крохмалю з водою.",
  "Mix soy sauce, honey, five-spice, and garlic.": "Змішай соєвий соус, мед, five-spice і часник.",
  "Marinate pork for at least 20 minutes.": "Маринуй свинину щонайменше 20 хвилин.",
  "Roast at 200 C, brushing with glaze.": "Запікай при 200 C, змащуючи глазур'ю.",
  "Rest before slicing.": "Дай відпочити перед нарізанням.",
  "Serve with rice.": "Подавай з рисом.",
  "Mix peanut butter, soy sauce, chili oil, and noodle water.": "Змішай арахісову пасту, соєвий соус, чилі-олію і воду від локшини.",
  "Cook noodles.": "Звари локшину.",
  "Toss noodles with sauce.": "Перемішай локшину з соусом.",
  "Top with browned topping and spring onion.": "Додай зверху підрум'янену начинку і зелену цибулю.",
  "Simmer stock with mushrooms and tofu.": "Тушкуй бульйон з грибами і тофу.",
  "Season with soy sauce and vinegar.": "Приправ соєвим соусом і оцтом.",
  "Thicken lightly with cornstarch slurry.": "Злегка загусь сумішшю крохмалю з водою.",
  "Drizzle in beaten egg while stirring gently.": "Тонкою цівкою вливай збите яйце, м'яко помішуючи.",
  "Adjust with more vinegar or pepper.": "Відрегулюй смак додатковим оцтом або перцем.",
  "Roast halved eggplant at 210 C until soft.": "Запікай половинки баклажана при 210 C до м'якості.",
  "Mix garlic, soy sauce, sugar, and vinegar.": "Змішай часник, соєвий соус, цукор і оцет.",
  "Spoon sauce over roasted eggplant.": "Полий запечений баклажан соусом.",
  "Mix flour and warm water into a soft dough.": "Змішай борошно і теплу воду в м'яке тісто.",
  "Mix sesame or peanut butter with sugar.": "Змішай кунжутну або арахісову пасту з цукром.",
  "Wrap small portions of filling in dough.": "Загорни маленькі порції начинки в тісто.",
  "Boil until floating.": "Вари, доки кульки не спливуть.",
  "Serve warm with a little cooking water.": "Подавай теплими з невеликою кількістю води, в якій вони варилися.",
  "Pat tofu dry and cube it.": "Обсуши тофу і наріж кубиками.",
  "Brown tofu in a hot pan, then remove.": "Підрум'янь тофу на гарячій пательні, потім зніми.",
  "Brown mushrooms, then add garlic.": "Підрум'янь гриби, потім додай часник.",
  "Return tofu and season with soy sauce.": "Поверни тофу і приправ соєвим соусом.",
  "Cook noodles and rinse cold.": "Звари локшину і промий холодною водою.",
  "Mix peanut butter or sesame paste with soy sauce, vinegar, and water.": "Змішай арахісову або кунжутну пасту з соєвим соусом, оцтом і водою.",
  "Slice cucumber thinly.": "Тонко наріж огірок.",
  "Toss noodles with dressing.": "Перемішай локшину із заправкою.",
  "Top with cucumber.": "Додай зверху огірок.",
  "Dry chickpeas well.": "Добре обсуши нут.",
  "Pan-crisp chickpeas in a little oil.": "Підрум'янь нут на пательні з невеликою кількістю олії.",
  "Add spice and soy sauce.": "Додай спеції і соєвий соус.",
  "Simmer stock with soy sauce.": "Прогрій бульйон із соєвим соусом.",
  "Add spinach until wilted.": "Додай шпинат і готуй, доки він не зів'яне.",
  "Thicken lightly with cornstarch if using.": "Злегка загусь крохмалем, якщо використовуєш.",
  "Drizzle beaten eggs into the simmering soup.": "Тонкою цівкою вливай збиті яйця в суп, що ледь кипить.",
  "Serve hot.": "Подавай гарячим.",
  "Beat eggs with salt and herbs.": "Збий яйця з сіллю і зеленню.",
  "Melt butter without browning.": "Розтопи масло, не підрум'янюючи.",
  "Cook eggs gently, stirring small curds.": "Готуй яйця м'яко, помішуючи дрібні згустки.",
  "Fold while still soft.": "Склади омлет, поки він ще м'який.",
  "Serve immediately.": "Подавай одразу.",
  "Slice onion thinly.": "Тонко наріж цибулю.",
  "Cook slowly with butter and salt until soft and golden.": "Повільно готуй з маслом і сіллю до м'якості та золотистості.",
  "Add a tiny splash of vinegar.": "Додай зовсім трохи оцту.",
  "Toast bread in the pan.": "Підсмаж хліб на пательні.",
  "Top with onions and cheese until melted.": "Виклади зверху цибулю і сир та прогрій, доки сир не розплавиться.",
  "Cut vegetables into similar pieces.": "Наріж овочі приблизно однаковими шматочками.",
  "Brown eggplant first, then remove.": "Спочатку підрум'янь баклажан, потім зніми.",
  "Cook zucchini and pepper.": "Готуй цукіні і перець.",
  "Add garlic, passata, and eggplant.": "Додай часник, пасату і баклажан.",
  "Simmer until tender and glossy.": "Тушкуй до м'якості й глянцевості.",
  "Cook carrot until just tender if using raw.": "Якщо морква сира, готуй її до легкої м'якості.",
  "Mix mustard, vinegar, oil, salt, and pepper.": "Змішай гірчицю, оцет, олію, сіль і перець.",
  "Toss lentils with dressing.": "Перемішай сочевицю із заправкою.",
  "Add carrot and onion.": "Додай моркву і цибулю.",
  "Rest 5 minutes before eating.": "Дай постояти 5 хвилин перед їжею.",
  "Rest for 5 minutes before eating.": "Дай постояти 5 хвилин перед їжею.",
  "Season and brown chicken.": "Приправ і підрум'янь курку.",
  "Remove chicken and cook shallot.": "Зніми курку і приготуй шалот.",
  "Add a splash of water, mustard, and cream.": "Додай трохи води, гірчицю і вершки.",
  "Return chicken and simmer until cooked.": "Поверни курку і тушкуй до готовності.",
  "Taste and adjust salt.": "Спробуй і відрегулюй сіль.",
  "Build a ham and cheese sandwich.": "Збери сендвіч із шинкою і сиром.",
  "Toast it in butter until golden and melted.": "Підсмаж його на маслі до золотистості й розплавленого сиру.",
  "Fry an egg.": "Посмаж яйце.",
  "Place egg on top.": "Поклади яйце зверху.",
  "Season with pepper.": "Приправ перцем.",
  "Melt chocolate gently and cool slightly.": "Обережно розтопи шоколад і трохи охолоди.",
  "Whip cream to soft peaks.": "Збий вершки до м'яких піків.",
  "Fold a little cream into chocolate.": "Вмішай трохи вершків у шоколад.",
  "Fold in the rest gently.": "Обережно вмішай решту.",
  "Chill for at least 1 hour.": "Охолоджуй щонайменше 1 годину.",
  "Blind bake pastry if the package suggests it.": "Підпечи тісто без начинки, якщо це радить упаковка.",
  "Cook bacon until lightly crisp.": "Готуй бекон до легкої хрусткості.",
  "Whisk eggs, cream, cheese, pepper, and a little salt.": "Збий яйця, вершки, сир, перець і трохи солі.",
  "Fill pastry with bacon and custard.": "Наповни тісто беконом і яєчно-вершковою сумішшю.",
  "Bake at 180 C until set.": "Запікай при 180 C, доки начинка не схопиться.",
  "Brown chicken and remove.": "Підрум'янь курку і зніми.",
  "Cook onion, carrot, and mushrooms.": "Готуй цибулю, моркву і гриби.",
  "Add wine or stock and scrape the pan.": "Додай вино або бульйон і зіскреби смачні частинки з дна пательні.",
  "Return chicken and simmer covered.": "Поверни курку і тушкуй під кришкою.",
  "Reduce sauce until glossy.": "Увари соус до глянцевості.",
  "Slice zucchini thinly.": "Тонко наріж цукіні.",
  "Place salmon and zucchini on baking paper.": "Поклади лосось і цукіні на папір для випікання.",
  "Add lemon, butter, salt, and herbs.": "Додай лимон, масло, сіль і зелень.",
  "Seal into a packet.": "Запечатай у пакет.",
  "Bake at 190 C until fish is just cooked.": "Запікай при 190 C, доки риба щойно не приготується.",
  "Whisk egg, milk, flour, and salt into a thin batter.": "Збий яйце, молоко, борошно і сіль у рідке тісто.",
  "Cook thin crepes and stack them.": "Приготуй тонкі млинці і склади стопкою.",
  "Cook mushrooms until browned.": "Готуй гриби до підрум'янення.",
  "Add cream and reduce.": "Додай вершки і уварюй.",
  "Fill crepes with mushrooms.": "Начини млинці грибами.",
  "Brown beef well.": "Добре підрум'янь яловичину.",
  "Stir in flour.": "Вмішай борошно.",
  "Add wine or stock and scrape the pot.": "Додай вино або бульйон і зіскреби дно каструлі.",
  "Simmer gently until tender.": "М'яко тушкуй до ніжності.",
  "Slice potatoes thinly.": "Тонко наріж картоплю.",
  "Warm cream, milk, garlic, salt, and pepper.": "Підігрій вершки, молоко, часник, сіль і перець.",
  "Layer potatoes in a small dish.": "Виклади картоплю шарами в маленьку форму.",
  "Pour cream over and top with cheese.": "Залий вершками і посип сиром.",
  "Bake at 180 C until tender and browned.": "Запікай при 180 C до м'якості й рум'яності.",
  "Make a small caramel with half the sugar and pour into a ramekin.": "Зроби невелику карамель з половини цукру і вилий у формочку.",
  "Whisk egg, milk, remaining sugar, and vanilla.": "Збий яйце, молоко, решту цукру і ваніль.",
  "Pour custard over caramel.": "Вилий кремову суміш на карамель.",
  "Bake in a water bath at 160 C.": "Запікай на водяній бані при 160 C.",
  "Chill before serving.": "Охолоди перед подачею.",
  "Boil egg and potato if using.": "Звари яйце і картоплю, якщо використовуєш.",
  "Cook or blanch green beans briefly.": "Коротко приготуй або бланшуй зелену квасолю.",
  "Whisk mustard, vinegar, olive oil, salt, and pepper.": "Збий гірчицю, оцет, оливкову олію, сіль і перець.",
  "Arrange tuna, egg, vegetables, and dressing.": "Виклади тунець, яйце, овочі і заправку.",
  "Serve at room temperature.": "Подавай кімнатної температури.",
  "Rinse beans well.": "Добре промий квасолю.",
  "Slice onion very thinly.": "Наріж цибулю дуже тонко.",
  "Toss beans, onion, herbs, and dressing.": "Перемішай квасолю, цибулю, зелень і заправку.",
  "Spoon fromage blanc or yogurt into a bowl.": "Виклади fromage blanc або йогурт у миску.",
  "Add fruit.": "Додай фрукти.",
  "Top with nuts.": "Посип горіхами.",
  "Add honey if you want it sweeter.": "Додай мед, якщо хочеш солодше.",
  "Eat chilled.": "Їж охолодженим.",
  "Whisk flour, one egg, milk or water, and salt into a thin batter.": "Збий борошно, одне яйце, молоко або воду і сіль у рідке тісто.",
  "Cook one large thin crepe.": "Приготуй один великий тонкий млинець.",
  "Add cheese and crack an egg into the center.": "Додай сир і розбий яйце в центр.",
  "Fold edges inward.": "Загорни краї всередину.",
  "Cook until the egg is set to your liking.": "Готуй, доки яйце не схопиться так, як тобі подобається.",
  "Rinse chickpeas.": "Промий нут.",
  "Dice cucumber or carrot.": "Наріж огірок або моркву кубиками.",
  "Toss everything with parsley.": "Перемішай усе з петрушкою."
};

const macroProfiles = {
  "arborio or carnaroli rice": per100g(360, 7, 78, 1),
  "bacon or lardons": per100g(520, 14, 1, 50),
  "beef stew meat": per100g(210, 28, 0, 11),
  "bell pepper": per100g(31, 1, 6, 0),
  "berries or apple": per100g(55, 1, 14, 0),
  "black pepper": perTsp(6, 0, 1, 0),
  bread: perUnit(80, 3, 15, 1),
  broccoli: per100g(35, 3, 7, 0),
  "buckwheat or wheat flour": per100g(340, 12, 72, 3),
  butter: perTbsp(102, 0, 0, 12),
  cabbage: per100g(25, 1, 6, 0),
  "canned beans": per100g(110, 7, 20, 1),
  "canned black beans": per100g(120, 8, 21, 1),
  "canned chickpeas": per100g(150, 8, 24, 3),
  "canned tomatoes": per100g(25, 1, 5, 0),
  "canned white beans": per100g(110, 7, 20, 1),
  carrot: perUnit(25, 1, 6, 0),
  "celery stalk": perUnit(6, 0, 1, 0),
  chicken: per100g(165, 31, 0, 4),
  "chicken breast": per100g(165, 31, 0, 4),
  "chicken breast or pork schnitzel": per100g(190, 29, 0, 7),
  "chicken breast or thigh": per100g(190, 28, 0, 8),
  "chicken breast, thinly sliced": per100g(165, 31, 0, 4),
  "chicken thigh": per100g(210, 26, 0, 11),
  "chicken thigh or breast": per100g(190, 28, 0, 8),
  "chili flakes": perTsp(6, 0, 1, 0),
  "cocoa powder": perTbsp(12, 1, 3, 1),
  "coconut milk": per100ml(190, 2, 3, 19),
  "cooked lentils": per100g(116, 9, 20, 0),
  "cooked rice": per100g(130, 3, 28, 0),
  corn: per100g(96, 3, 21, 1),
  cornstarch: perTbsp(30, 0, 7, 0),
  cream: per100ml(300, 2, 3, 30),
  cucumber: perUnit(30, 1, 7, 0),
  "dark chocolate": per100g(560, 8, 46, 38),
  "dashi or vegetable stock": per100ml(8, 1, 1, 0),
  "dijon mustard": perTsp(5, 0, 0, 0),
  "dried porcini": per100g(290, 30, 30, 3),
  egg: perUnit(70, 6, 1, 5),
  "egg for batter plus 1 egg for filling": perUnit(70, 6, 1, 5),
  "egg yolk": perUnit(55, 3, 1, 5),
  "egg yolk plus 1 whole egg": perUnit(125, 9, 1, 10),
  eggplant: perUnit(110, 4, 25, 1),
  feta: per100g(265, 14, 4, 21),
  "feta or yogurt": per100g(160, 10, 5, 10),
  "firm tofu": per100g(90, 10, 2, 5),
  flour: per100g(364, 10, 76, 1),
  "flour, plus extra": per100g(364, 10, 76, 1),
  "fromage blanc or greek yogurt": per100g(75, 9, 4, 2),
  "frozen berries": per100g(50, 1, 12, 0),
  "frozen gyoza": perUnit(45, 2, 6, 1),
  gelatin: perUnit(8, 2, 0, 0),
  "glutinous rice flour": per100g(365, 6, 80, 1),
  "grated cheese": per100g(380, 25, 2, 30),
  "green beans": per100g(31, 2, 7, 0),
  "green beans or lettuce": per100g(25, 2, 5, 0),
  ham: perUnit(45, 5, 1, 2),
  honey: perTbsp(64, 0, 17, 0),
  ketchup: perTbsp(17, 0, 4, 0),
  lemon: perUnit(17, 1, 5, 0),
  lime: perUnit(20, 0, 7, 0),
  loffelbiskuits: perUnit(30, 1, 6, 1),
  "long grain rice": per100g(360, 7, 79, 1),
  "mango or frozen mango": per100g(60, 1, 15, 0),
  mascarpone: per100g(430, 5, 4, 44),
  mayonnaise: perTbsp(90, 0, 0, 10),
  milk: per100ml(50, 3, 5, 2),
  "milk or water": per100ml(30, 2, 3, 1),
  "minced pork or mushrooms": per100g(190, 15, 2, 12),
  "miso paste": perTbsp(35, 2, 4, 1),
  "mixed vegetables": per100g(60, 3, 10, 1),
  "mozzarella, optional": per100g(280, 22, 3, 20),
  mushrooms: per100g(22, 3, 3, 0),
  "neutral oil": perTbsp(119, 0, 0, 14),
  "nori sheet": perUnit(5, 1, 1, 0),
  nuts: perTbsp(50, 2, 2, 4),
  "olive oil": perTbsp(119, 0, 0, 14),
  onion: perUnit(45, 1, 10, 0),
  "pancetta or guanciale": per100g(500, 16, 0, 48),
  parmesan: per100g(430, 38, 4, 29),
  "parmesan or grana padano": per100g(410, 36, 3, 28),
  "parmesan or grana padano, optional": per100g(410, 36, 3, 28),
  passata: per100g(35, 2, 6, 0),
  "passata or canned tomatoes": per100g(30, 1, 6, 0),
  "peanut butter or sesame paste": perTbsp(95, 4, 3, 8),
  peanuts: per100g(570, 26, 16, 49),
  "peas or mixed vegetables": per100g(80, 5, 14, 0),
  "pecorino romano": per100g(390, 32, 4, 27),
  penne: per100g(360, 13, 72, 2),
  "penne or spaghetti": per100g(360, 13, 72, 2),
  potatoes: per100g(77, 2, 17, 0),
  prosciutto: perUnit(35, 4, 0, 2),
  "red wine or stock": per100ml(45, 0, 2, 0),
  rice: per100g(360, 7, 79, 1),
  ricotta: per100g(175, 11, 3, 13),
  "ricotta salata or feta": per100g(300, 18, 4, 23),
  "rigatoni or penne": per100g(360, 13, 72, 2),
  "roasted peppers from a jar": per100g(35, 1, 7, 0),
  "salmon fillet": per100g(208, 20, 0, 13),
  "seasonal vegetables": per100g(50, 2, 10, 0),
  "sesame seeds": perTsp(17, 1, 1, 1),
  "shortcrust pastry": perUnit(450, 7, 45, 28),
  "small can tuna": perUnit(140, 30, 0, 2),
  "small eggplant": perUnit(80, 3, 18, 1),
  "small ready-made shortcrust pastry": perUnit(450, 7, 45, 28),
  "small tapioca pearls or pudding rice": per100g(350, 2, 82, 0),
  "small zucchini": perUnit(30, 2, 6, 0),
  "soba noodles": per100g(350, 13, 70, 2),
  "soft white bread": perUnit(75, 3, 14, 1),
  spaghetti: per100g(360, 13, 72, 2),
  "spaghetti or bucatini": per100g(360, 13, 72, 2),
  spinach: per100g(23, 3, 4, 0),
  "stale bread": perUnit(75, 3, 14, 1),
  stock: per100ml(8, 1, 1, 0),
  "stock or water": per100ml(5, 1, 1, 0),
  "stock or white wine": per100ml(30, 0, 1, 0),
  "store-bought gnocchi": per100g(160, 4, 33, 1),
  sugar: perTbsp(49, 0, 13, 0),
  "sushi rice": per100g(360, 7, 79, 1),
  "thick slice bread": perUnit(120, 5, 22, 2),
  "thin noodles": per100g(360, 12, 74, 2),
  tofu: per100g(85, 9, 2, 5),
  "tomato or 180 g canned tomato": perUnit(45, 2, 10, 0),
  "tomatoes or canned tomatoes": perUnit(45, 2, 10, 0),
  tortillas: perUnit(140, 4, 24, 4),
  "vegetable stock": per100ml(8, 1, 1, 0),
  "warm water": per100ml(0, 0, 0, 0),
  "wheat noodles": per100g(360, 12, 74, 2),
  "whipping cream": per100ml(300, 2, 3, 30),
  "white fish fillet": per100g(90, 20, 0, 1),
  "yogurt": perTbsp(9, 1, 1, 0),
  "yogurt or sour cream": per100g(120, 5, 5, 8),
  zucchini: perUnit(35, 2, 7, 0)
};

const state = {
  cuisine: "italian",
  level: "beginner",
  servings: 1,
  vegetarian: false,
  noOven: true,
  highProtein: false,
  language: localStorage.getItem("cuisineCoachLanguage") || "en",
  selectedDay: 0,
  view: "plan",
  progress: JSON.parse(localStorage.getItem("cuisineCoachProgress") || "{}"),
  swaps: JSON.parse(localStorage.getItem("cuisineCoachSwaps") || "{}")
};

const languageSelect = document.querySelector("#language-select");
const cuisineSelect = document.querySelector("#cuisine-select");
const levelSelect = document.querySelector("#level-select");
const servingsInput = document.querySelector("#servings-input");
const vegetarianInput = document.querySelector("#vegetarian-input");
const noOvenInput = document.querySelector("#no-oven-input");
const highProteinInput = document.querySelector("#high-protein-input");
const dayRail = document.querySelector("#day-rail");
const recipePanel = document.querySelector("#recipe-panel");
const programTitle = document.querySelector("#program-title");
const shoppingList = document.querySelector("#shopping-list");
const progressList = document.querySelector("#progress-list");

function populateCuisineOptions() {
  cuisineSelect.replaceChildren();
  Object.entries(cuisines).filter(([, cuisine]) => Boolean(cuisine)).forEach(([key, cuisine]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = t(`cuisineNames.${key}`) || cuisine.name;
    cuisineSelect.append(option);
  });
  cuisineSelect.value = state.cuisine;
}

function applyLanguage() {
  document.documentElement.lang = state.language === "uk" ? "uk" : "en";
  languageSelect.value = state.language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  levelSelect.querySelector('[value="beginner"]').textContent = t("beginner");
  levelSelect.querySelector('[value="intermediate"]').textContent = t("intermediate");
  populateCuisineOptions();
}

function t(key) {
  return key.split(".").reduce((value, part) => value?.[part], translations[state.language]) ?? key;
}

function per100g(calories, protein, carbs, fat) {
  return { basis: "100g", calories, protein, carbs, fat };
}

function per100ml(calories, protein, carbs, fat) {
  return { basis: "100ml", calories, protein, carbs, fat };
}

function perUnit(calories, protein, carbs, fat) {
  return { basis: "unit", calories, protein, carbs, fat };
}

function perTbsp(calories, protein, carbs, fat) {
  return { basis: "tbsp", calories, protein, carbs, fat };
}

function perTsp(calories, protein, carbs, fat) {
  return { basis: "tsp", calories, protein, carbs, fat };
}

function getWeek() {
  const used = new Set();
  const base = getBaseWeek().map((dish, index) => {
    const chosen = isAllowedDish(dish) ? dish : pickReplacement(index, used) || dish;
    used.add(chosen.name);
    return chosen;
  });

  const withSwaps = base.map((dish, dayIndex) => {
    const swappedName = state.swaps[swapKey(dayIndex)];
    if (!swappedName) return dish;
    const duplicateElsewhere = base.some((candidate, index) => index !== dayIndex && candidate.name === swappedName);
    if (duplicateElsewhere) return dish;
    return getCandidates().find((candidate) => candidate.name === swappedName) || dish;
  });
  return dedupeWeek(withSwaps);
}

function getCandidates() {
  const cuisine = cuisines[state.cuisine];
  return uniqueDishes([...getBaseWeek(), ...(cuisine.alternatives || [])]).filter(isAllowedDish);
}

function getSwapCandidates() {
  const currentDish = getWeek()[state.selectedDay];
  const used = new Set(getWeek().map((dish, index) => index === state.selectedDay ? "" : dish.name));
  return getCandidates().filter((dish) => dish.name === currentDish.name || !used.has(dish.name));
}

function pickReplacement(dayIndex, used) {
  const candidates = getCandidates();
  const fresh = candidates.filter((dish) => !used.has(dish.name));
  if (fresh.length) return fresh[dayIndex % fresh.length];
  return getRelaxedCandidates().find((dish) => !used.has(dish.name));
}

function dedupeWeek(week) {
  const used = new Set();
  return week.map((dish, index) => {
    if (!used.has(dish.name)) {
      used.add(dish.name);
      return dish;
    }
    const replacement = pickReplacement(index, used) || dish;
    used.add(replacement.name);
    return replacement;
  });
}

function getRelaxedCandidates() {
  const cuisine = cuisines[state.cuisine];
  return uniqueDishes([...getBaseWeek(), ...(cuisine.alternatives || [])]).filter((dish) => {
    if (state.vegetarian && !isVegetarianDish(dish)) return false;
    if (state.noOven && dish.tags.includes("oven")) return false;
    return true;
  });
}

function uniqueDishes(dishes) {
  const seen = new Set();
  return dishes.filter((dish) => {
    if (seen.has(dish.name)) return false;
    seen.add(dish.name);
    return true;
  });
}

function isAllowedDish(dish) {
  if (state.vegetarian && !isVegetarianDish(dish)) return false;
  if (state.noOven && dish.tags.includes("oven")) return false;
  if (state.highProtein && !isHighProteinDish(dish)) return false;
  return true;
}

function getBaseWeek() {
  const cuisine = cuisines[state.cuisine];
  return cuisine.levels?.[state.level] || cuisine.week;
}

function isVegetarianDish(dish) {
  if (dish.tags.includes("vegetarian") || dish.tags.includes("dessert")) return true;
  return !dish.ingredients.some(([category]) => category === "meat");
}

function isHighProteinDish(dish) {
  if (dish.tags.includes("protein")) return true;
  const text = dish.ingredients.map((ingredient) => ingredient[1].toLowerCase()).join(" ");
  return /egg|tofu|beans|lentils|chicken|fish|salmon|beef|pork|ham|bacon|ricotta|yogurt|greek yogurt/.test(text);
}

function swapKey(dayIndex) {
  return `${state.cuisine}-${state.level}-${dayIndex}`;
}

function progressKey(dayIndex) {
  return `${state.cuisine}-${state.level}-${dayIndex}`;
}

function scaledText(text, amount) {
  if (typeof amount !== "number" || state.servings === 1) return text;
  const scaled = formatQuantity(amount * state.servings);
  const original = quantityToken(text, amount);
  return original ? text.replace(original, scaled) : `${text} x ${state.servings}`;
}

function displayIngredient(text, amount) {
  if (state.language !== "uk") return scaledText(text, amount);
  return translateIngredientText(text, amount);
}

function translateIngredientText(text, amount) {
  const parsed = parseIngredient(text, amount);
  if (parsed.amount !== null) {
    const quantity = formatQuantity(parsed.amount * state.servings);
    const translatedUnit = translateUnit(parsed.unit);
    const translatedName = parsed.unit
      ? translateIngredientName(parsed.displayName)
      : translateCountIngredientName(parsed.displayName, parsed.amount * state.servings);
    return [quantity, translatedUnit, translatedName].filter(Boolean).join(" ");
  }
  return translateIngredientName(scaledText(text, amount));
}

function translateUnit(unit) {
  return {
    g: "г",
    ml: "мл",
    tbsp: "ст. л.",
    tsp: "ч. л."
  }[unit] || unit;
}

function translateIngredientName(name) {
  const normalized = normalizeIngredientName(name);
  if (ingredientTranslations[normalized]) return ingredientTranslations[normalized];

  const withoutPortionWords = normalized
    .replace(/^slices? /, "")
    .replace(/^small /, "")
    .replace(/^thick slice /, "");
  if (ingredientTranslations[withoutPortionWords]) return ingredientTranslations[withoutPortionWords];

  return Object.entries(ingredientTranslations)
    .sort((a, b) => b[0].length - a[0].length)
    .reduce((value, [english, ukrainian]) => value.replaceAll(english, ukrainian), normalized)
    .replace(/\bg\b/g, "г")
    .replace(/\bfrozen\b/g, "заморожене")
    .replace(/\bblack sesame\b/g, "чорний кунжут")
    .replace(/\bpeanut butter\b/g, "арахісова паста")
    .replace(/\btenderloin\b/g, "вирізка")
    .replace(/\bfromage blanc\b/g, "fromage blanc")
    .replace(/\bor\b/g, "або")
    .replace(/\bplus\b/g, "та")
    .replace(/\bto\b/g, "–");
}

function translateCountIngredientName(name, quantity) {
  const normalized = normalizeIngredientName(name);
  if (normalized === "egg") return quantity === 1 ? "яйце" : "яйця";
  if (normalized === "garlic clove") return quantity === 1 ? "зубчик часнику" : "зубчики часнику";
  return translateIngredientName(name);
}

function displayTool(tool) {
  if (state.language !== "uk") return tool;
  return toolTranslations[tool] || tool;
}

function displayRecipeText(text) {
  if (state.language !== "uk") return text;
  return textTranslations[text] || stepTranslations[text] || text;
}

function quantityToken(text, amount) {
  const candidates = [
    String(amount),
    amount === 0.25 ? "1/4" : "",
    amount === 0.5 ? "1/2" : "",
    amount === 1.5 ? "1.5" : "",
    amount === 2.5 ? "2.5" : ""
  ].filter(Boolean);
  return candidates.find((candidate) => text.includes(candidate));
}

function formatQuantity(value) {
  const rounded = Math.round(value * 4) / 4;
  if (Number.isInteger(rounded)) return String(rounded);
  if (rounded === 0.25) return "1/4";
  if (rounded === 0.5) return "1/2";
  if (rounded === 0.75) return "3/4";
  if (rounded === 1.5) return "1 1/2";
  if (rounded === 2.5) return "2 1/2";
  return String(Number(rounded.toFixed(2)));
}

function parseIngredient(text, amount) {
  const trimmed = text.trim();
  const unitMatch = trimmed.match(/^((?:\d+(?:\.\d+)?)|(?:\d+\/\d+))\s+(g|ml|tbsp|tsp)\s+(.+)$/i);
  if (unitMatch) {
    return {
      amount,
      unit: unitMatch[2].toLowerCase(),
      name: normalizeIngredientName(unitMatch[3]),
      displayName: unitMatch[3]
    };
  }

  const countMatch = trimmed.match(/^((?:\d+(?:\.\d+)?)|(?:\d+\/\d+))\s+(.+)$/);
  if (countMatch && typeof amount === "number" && !countMatch[2].startsWith("to ")) {
    return {
      amount,
      unit: "",
      name: normalizeIngredientName(countMatch[2]),
      displayName: countMatch[2]
    };
  }

  return {
    amount: null,
    unit: "",
    name: normalizeIngredientName(trimmed),
    displayName: trimmed
  };
}

function normalizeIngredientName(name) {
  return name
    .toLowerCase()
    .replace("canned tomatoes or passata", "passata or canned tomatoes")
    .replace(/\bcloves\b/g, "clove")
    .replace(/\beggs\b/g, "egg")
    .replace(/\bleaves\b/g, "leaf")
    .replace(/\bsheets\b/g, "sheet")
    .replace(/\bcans\b/g, "can")
    .replace(/\bslices\b/g, "slice")
    .replace(/\blemons\b/g, "lemon")
    .replace(/\bonions\b/g, "onion")
    .replace(/\bcucumbers\b/g, "cucumber")
    .replace(/\btomatoes\b/g, "tomato")
    .replace(/\s+/g, " ")
    .trim();
}

function pluralizeIngredient(name, quantity) {
  if (quantity === 1) return name;
  return name
    .replace(/\bclove\b/g, "cloves")
    .replace(/\begg\b/g, "eggs")
    .replace(/\bleaf\b/g, "leaves")
    .replace(/\bsheet\b/g, "sheets")
    .replace(/\bcan\b/g, "cans")
    .replace(/\bslice\b/g, "slices")
    .replace(/\blemon\b/g, "lemons")
    .replace(/\bonion\b/g, "onions")
    .replace(/\bcucumber\b/g, "cucumbers");
}

function buildShoppingGroups(week) {
  const grouped = {};
  week.forEach((dish) => {
    dish.ingredients.forEach(([category, text, amount]) => {
      const label = t(`categories.${category}`) || category;
      const parsed = parseIngredient(text, amount);
      const key = `${parsed.name}|${parsed.unit}`;
      grouped[label] ||= new Map();
      const existing = grouped[label].get(key);

      if (existing && parsed.amount !== null && existing.amount !== null) {
        existing.amount += parsed.amount * state.servings;
        return;
      }

      if (existing) return;

      grouped[label].set(key, {
        amount: parsed.amount === null ? null : parsed.amount * state.servings,
        unit: parsed.unit,
        name: parsed.name,
        displayName: parsed.displayName,
        text: parsed.amount === null ? text : null
      });
    });
  });
  return grouped;
}

function formatShoppingItem(item) {
  if (item.amount === null) return state.language === "uk" ? translateIngredientName(item.text) : item.text;
  const quantity = formatQuantity(item.amount);
  const unit = state.language === "uk" ? translateUnit(item.unit) : item.unit;
  const name = item.unit ? item.displayName : pluralizeIngredient(item.displayName, item.amount);
  const displayName = state.language === "uk"
    ? item.unit ? translateIngredientName(name) : translateCountIngredientName(name, item.amount)
    : name;
  return [quantity, unit, displayName].filter(Boolean).join(" ");
}

function recipeMacros(dish) {
  const totals = dish.ingredients.reduce((sum, [, text, amount]) => addMacros(sum, ingredientMacros(text, amount)), emptyMacros());
  return {
    calories: Math.round(totals.calories / 10) * 10,
    protein: Math.round(totals.protein),
    carbs: Math.round(totals.carbs),
    fat: Math.round(totals.fat)
  };
}

function ingredientMacros(text, amount) {
  const parsed = parseIngredient(text, amount);
  const profile = findMacroProfile(parsed.name);
  if (!profile || typeof parsed.amount !== "number") return emptyMacros();

  let factor = 0;
  if (parsed.unit === "g" && profile.basis === "100g") factor = parsed.amount / 100;
  if (parsed.unit === "ml" && profile.basis === "100ml") factor = parsed.amount / 100;
  if (parsed.unit === "tbsp" && profile.basis === "tbsp") factor = parsed.amount;
  if (parsed.unit === "tsp" && profile.basis === "tsp") factor = parsed.amount;
  if (!parsed.unit && profile.basis === "unit") factor = parsed.amount;
  if (parsed.unit === "tbsp" && profile.basis === "tsp") factor = parsed.amount * 3;
  if (parsed.unit === "tsp" && profile.basis === "tbsp") factor = parsed.amount / 3;
  if (parsed.unit === "g" && profile.basis === "unit") factor = parsed.amount;
  if (parsed.unit === "ml" && profile.basis === "100g") factor = parsed.amount / 100;

  if (!factor) return emptyMacros();
  return multiplyMacros(profile, factor);
}

function findMacroProfile(name) {
  if (macroProfiles[name]) return macroProfiles[name];
  const match = Object.keys(macroProfiles)
    .sort((a, b) => b.length - a.length)
    .find((key) => name.includes(key) || key.includes(name));
  return match ? macroProfiles[match] : null;
}

function emptyMacros() {
  return { calories: 0, protein: 0, carbs: 0, fat: 0 };
}

function addMacros(left, right) {
  return {
    calories: left.calories + right.calories,
    protein: left.protein + right.protein,
    carbs: left.carbs + right.carbs,
    fat: left.fat + right.fat
  };
}

function multiplyMacros(profile, factor) {
  return {
    calories: profile.calories * factor,
    protein: profile.protein * factor,
    carbs: profile.carbs * factor,
    fat: profile.fat * factor
  };
}

function render() {
  const cuisine = cuisines[state.cuisine];
  const week = getWeek();
  const selected = week[state.selectedDay];
  applyLanguage();
  document.documentElement.style.setProperty("--art-a", cuisine.palette[0]);
  document.documentElement.style.setProperty("--art-b", cuisine.palette[1]);
  programTitle.textContent = t("programTitle")
    .replace("{cuisine}", t(`cuisineNames.${state.cuisine}`))
    .replace("{level}", t(state.level));
  renderDays(week);
  renderRecipe(selected);
  renderShopping(week);
  renderProgress(week);
}

function renderDays(week) {
  dayRail.replaceChildren();
  week.forEach((dish, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `day-card ${index === state.selectedDay ? "active" : ""} ${state.progress[progressKey(index)]?.done ? "done" : ""}`;
    button.innerHTML = `
      <span class="day-meta"><span>${t("day")} ${index + 1}</span><span>${dish.time} ${t("min")}</span></span>
      <strong>${dish.name}</strong>
      <small>${dish.skill}</small>
    `;
    button.addEventListener("click", () => {
      state.selectedDay = index;
      switchView("plan");
      render();
    });
    dayRail.append(button);
  });
}

function renderRecipe(dish) {
  const key = progressKey(state.selectedDay);
  const done = Boolean(state.progress[key]?.done);
  const candidates = getSwapCandidates();
  const photo = dishPhoto(dish);
  const macros = recipeMacros(dish);
  recipePanel.innerHTML = `
    <div class="recipe-hero">
      <div class="recipe-title">
        <p class="eyebrow">${t("day")} ${state.selectedDay + 1}</p>
        <h2>${dish.name}</h2>
        <p class="muted">${dish.skill}</p>
        <div class="pill-row">
          <span class="pill">${dish.time} ${t("min")}</span>
          <span class="pill">${t(dish.difficulty.toLowerCase())}</span>
          <span class="pill">${state.servings} ${state.servings > 1 ? t("servingsWord") : t("serving")}</span>
        </div>
        <div class="macro-card" aria-label="${t("macros")} ${t("perServing")}">
          <div>
            <span>${t("macros")}</span>
            <small>${t("perServing")}</small>
          </div>
          <dl class="macro-grid">
            <div><dt>${t("calories")}:</dt><dd>${macros.calories} kcal</dd></div>
            <div><dt>${t("protein")}:</dt><dd>${macros.protein} g</dd></div>
            <div><dt>${t("carbs")}:</dt><dd>${macros.carbs} g</dd></div>
            <div><dt>${t("fat")}:</dt><dd>${macros.fat} g</dd></div>
          </dl>
        </div>
        <div class="recipe-actions">
          <button class="complete-button ${done ? "done" : ""}" type="button" id="complete-day">${done ? t("cooked") : t("markCooked")}</button>
          <button class="ghost-button" type="button" id="surprise-dish">${t("surpriseMe")}</button>
        </div>
        <label class="swap-control" for="dish-swap-select">
          <span>${t("chooseAnotherDish")}</span>
          <select id="dish-swap-select" aria-label="${t("chooseAnotherDish")}">
            ${candidates.map((candidate) => `<option value="${escapeAttribute(candidate.name)}" ${candidate.name === dish.name ? "selected" : ""}>${candidate.name}</option>`).join("")}
          </select>
        </label>
      </div>
      <figure class="dish-photo-wrap ${photo ? "" : "needs-photo"}">
        ${photo ? `<img class="dish-photo" src="${photo.url}" alt="${dish.name}" loading="lazy" onerror="showPhotoPlaceholder(this, '${escapeAttribute(dish.name)}');">` : photoPlaceholderMarkup(dish)}
        <figcaption>
          ${photo ? `<a href="${photo.source}" target="_blank" rel="noreferrer">${dish.name} ${t("photo")}</a>` : t("photoComingSoon")}
        </figcaption>
      </figure>
    </div>
    <div class="recipe-body">
      <div class="info-block">
        <h3>${t("ingredients")}</h3>
        <ul class="list">
          ${dish.ingredients.map((item) => `<li>${displayIngredient(item[1], item[2])}</li>`).join("")}
        </ul>
        <h3>${t("tools")}</h3>
        <ul class="list">
          ${dish.tools.map((tool) => `<li>${displayTool(tool)}</li>`).join("")}
        </ul>
        <h3>${t("substitutions")}</h3>
        <ul class="list">
          ${dish.substitutions.map((substitution) => `<li>${displayRecipeText(substitution)}</li>`).join("")}
        </ul>
      </div>
      <div class="step-block">
        <h3>${t("steps")}</h3>
        <ol class="steps">
          ${dish.steps.map((step) => `<li>${displayRecipeText(step)}</li>`).join("")}
        </ol>
      </div>
    </div>
  `;
  document.querySelector("#complete-day").addEventListener("click", () => {
    state.progress[key] = { ...state.progress[key], done: !done };
    saveProgress();
    render();
  });
  document.querySelector("#dish-swap-select").addEventListener("change", (event) => {
    state.swaps[swapKey(state.selectedDay)] = event.target.value;
    saveSwaps();
    render();
  });
  document.querySelector("#surprise-dish").addEventListener("click", () => {
    const currentIndex = candidates.findIndex((candidate) => candidate.name === dish.name);
    const nextDish = candidates[(currentIndex + 1) % candidates.length];
    state.swaps[swapKey(state.selectedDay)] = nextDish.name;
    saveSwaps();
    render();
  });
}

function renderShopping(week) {
  const grouped = buildShoppingGroups(week);

  shoppingList.replaceChildren();
  Object.entries(grouped).forEach(([category, items]) => {
    const card = document.createElement("section");
    card.className = "shopping-card";
    card.innerHTML = `
      <h3>${category}</h3>
      <ul class="list">${[...items.values()].map((item) => `<li>${formatShoppingItem(item)}</li>`).join("")}</ul>
    `;
    shoppingList.append(card);
  });
}

function renderProgress(week) {
  progressList.replaceChildren();
  week.forEach((dish, index) => {
    const key = progressKey(index);
    const entry = state.progress[key] || {};
    const card = document.createElement("section");
    card.className = "progress-card";
    card.innerHTML = `
      <div>
        <p class="eyebrow">${t("day")} ${index + 1}</p>
        <h3>${dish.name}</h3>
      </div>
      <label class="check-row">
        <input type="checkbox" ${entry.done ? "checked" : ""} data-progress="${key}" data-field="done">
        <span>${t("cooked")}</span>
      </label>
      <div class="progress-actions" role="group" aria-label="${t("difficultyRating")}">
        ${["easy", "ok", "hard"].map((rating) => `<button class="rating-button ${entry.rating === rating ? "active" : ""}" type="button" data-rating="${rating}" data-key="${key}">${t(rating)}</button>`).join("")}
      </div>
      <textarea placeholder="${t("notesPlaceholder")}" data-note="${key}">${entry.note || ""}</textarea>
    `;
    progressList.append(card);
  });
}

function switchView(view) {
  state.view = view;
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((section) => {
    section.classList.toggle("active", section.id === `${view}-view`);
  });
}

function saveProgress() {
  localStorage.setItem("cuisineCoachProgress", JSON.stringify(state.progress));
}

function saveSwaps() {
  localStorage.setItem("cuisineCoachSwaps", JSON.stringify(state.swaps));
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function generatedDishImageUrl(dish) {
  const type = dishType(dish);
  const colors = {
    pasta: ["#f2c36b", "#d95d39", "#fff8dc"],
    rice: ["#f6f0df", "#2f6f8f", "#b7d8c4"],
    soup: ["#d39b5b", "#7aa36f", "#fff8dc"],
    taco: ["#e2b35f", "#3f7d56", "#c94f3d"],
    dessert: ["#eee4d5", "#7d4b35", "#ffffff"],
    protein: ["#d99b6c", "#f0d8b6", "#3f7d56"],
    bowl: ["#f4efe4", "#b48732", "#2f6f8f"]
  }[type];
  const hash = hashString(dish.name);
  const angle = (hash % 18) - 9;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 650" role="img" aria-label="${dish.name}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="${colors[1]}" offset="0"/>
          <stop stop-color="${colors[2]}" offset="1"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#17202a" flood-opacity="0.22"/>
        </filter>
      </defs>
      <rect width="900" height="650" fill="url(#bg)"/>
      <circle cx="710" cy="115" r="76" fill="#ffffff" opacity="0.25"/>
      <circle cx="168" cy="530" r="110" fill="#ffffff" opacity="0.16"/>
      <ellipse cx="450" cy="360" rx="300" ry="190" fill="#ffffff" opacity="0.92" filter="url(#shadow)"/>
      <ellipse cx="450" cy="360" rx="230" ry="128" fill="${colors[0]}" opacity="0.95"/>
      ${dishShape(type, angle)}
      <rect x="275" y="505" width="350" height="42" rx="21" fill="#17202a" opacity="0.14"/>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function photoPlaceholderMarkup(dish) {
  return `
    <div class="photo-placeholder" role="img" aria-label="${t("photoComingSoon")} ${escapeAttribute(dish.name)}">
      <img class="dish-photo" src="${generatedDishImageUrl(dish)}" alt="" aria-hidden="true">
      <div class="photo-placeholder-copy">
        <span>${t("photoComingSoon")}</span>
        <strong>${dish.name}</strong>
      </div>
    </div>
  `;
}

function showPhotoPlaceholder(image, dishName) {
  const wrapper = image.closest(".dish-photo-wrap");
  wrapper.classList.add("needs-photo");
  wrapper.querySelector("figcaption").textContent = t("photoComingSoon");
  image.outerHTML = `
    <div class="photo-placeholder" role="img" aria-label="${t("photoComingSoon")} ${dishName}">
      <img class="dish-photo" src="${generatedDishImageUrl({ name: dishName, ingredients: [] })}" alt="" aria-hidden="true">
      <div class="photo-placeholder-copy">
        <span>${t("photoComingSoon")}</span>
        <strong>${dishName}</strong>
      </div>
    </div>
  `;
}

function dishPhoto(dish) {
  const photos = {
    "Spaghetti Aglio e Olio": localPhoto("spaghetti-aglio-e-olio.jpg"),
    "Cacio e Pepe": localPhoto("cacio-e-pepe.jpg"),
    "Pasta al Pomodoro": localPhoto("pasta-al-pomodoro.jpg"),
    "Risotto ai Funghi": localPhoto("risotto-ai-funghi.jpg"),
    "Scaloppine al Limone": localPhoto("scaloppine-al-limone.jpg"),
    "Gnocchi with Sage Butter": localPhoto("gnocchi-with-sage-butter.jpg"),
    "Tiramisu Cup": localPhoto("tiramisu-cup.jpg"),
    "Pasta alla Norma": directPhoto("Pasta alla Norma (2563876877).jpg", "https://upload.wikimedia.org/wikipedia/commons/3/3f/Pasta_alla_Norma_%282563876877%29.jpg"),
    "Carbonara": directPhoto("Espaguetis carbonara.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/960px-Espaguetis_carbonara.jpg"),
    "Minestrone": directPhoto("Minestrone soup.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Minestrone_soup.jpg/960px-Minestrone_soup.jpg"),
    "Mushroom Risotto with Dried Porcini": directPhoto("Mushroom Risotto (4789418371).jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mushroom_Risotto_%284789418371%29.jpg/960px-Mushroom_Risotto_%284789418371%29.jpg"),
    "Saltimbocca-Style Chicken": directPhoto("Saltimbocca-2.jpg", "https://upload.wikimedia.org/wikipedia/commons/b/ba/Saltimbocca-2.jpg"),
    "Handmade Ricotta Gnocchi": directPhoto("Gnocchi di ricotta burro e salvia.jpg", "https://upload.wikimedia.org/wikipedia/commons/8/86/Gnocchi_di_ricotta_burro_e_salvia.jpg"),
    "Panna Cotta with Berry Sauce": directPhoto("Panna Cotta with cream and garnish.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Panna_Cotta_with_cream_and_garnish.jpg/960px-Panna_Cotta_with_cream_and_garnish.jpg"),
    "Penne all'Arrabbiata": filePhoto("Penne all'arrabbiata.jpg"),
    "Frittata alle Erbe": filePhoto("Frittata.jpg"),
    "Panzanella with Roasted Peppers": filePhoto("Panzanella.jpg"),
    "Tomato Egg Stir-Fry": directPhoto("Stir Fried Tomatoes with Scrambled Eggs.jpg", "https://upload.wikimedia.org/wikipedia/commons/1/19/Stir_Fried_Tomatoes_with_Scrambled_Eggs.jpg"),
    "Garlic Green Beans": directPhoto("Stir fry.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Stir_fry.jpg/960px-Stir_fry.jpg"),
    "Scallion Oil Noodles": directPhoto("Shanghai oil noodle.jpg", "https://upload.wikimedia.org/wikipedia/commons/5/5b/Shanghai_oil_noodle.jpg"),
    "Tofu Mushroom Stir-Fry": directPhoto("Stir fry.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Stir_fry.jpg/960px-Stir_fry.jpg"),
    "Sesame Cucumber Noodles": directPhoto("Cold Sesame Noodles, shredded chicken, pickled cucumbers, crispy garlic, crushed peanuts, scallions, sesame dressing, chicken broth, yu choy (31967905702).jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cold_Sesame_Noodles%2C_shredded_chicken%2C_pickled_cucumbers%2C_crispy_garlic%2C_crushed_peanuts%2C_scallions%2C_sesame_dressing%2C_chicken_broth%2C_yu_choy_%2831967905702%29.jpg/960px-Cold_Sesame_Noodles%2C_shredded_chicken%2C_pickled_cucumbers%2C_crispy_garlic%2C_crushed_peanuts%2C_scallions%2C_sesame_dressing%2C_chicken_broth%2C_yu_choy_%2831967905702%29.jpg"),
    "Five-Spice Chickpeas": directPhoto("Stir fry.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Stir_fry.jpg/960px-Stir_fry.jpg"),
    "Spinach Egg Drop Soup": directPhoto("Egg drop soup.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Egg_drop_soup.jpg/960px-Egg_drop_soup.jpg"),
    "Chicken and Broccoli Stir-Fry": directPhoto("Ginger chicken (3168342551).jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ginger_chicken_%283168342551%29.jpg/960px-Ginger_chicken_%283168342551%29.jpg"),
    "Egg Fried Rice": directPhoto("Fried rice with chicken and egg.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Fried_rice_with_chicken_and_egg.jpg/960px-Fried_rice_with_chicken_and_egg.jpg"),
    "Steamed Fish with Ginger": directPhoto("HK food dinner streamed fish July-2012.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/HK_food_dinner_streamed_fish_July-2012.JPG/960px-HK_food_dinner_streamed_fish_July-2012.JPG"),
    "Mango Sago-Style Pudding": directPhoto("Mango pomelo sago.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Mango_pomelo_sago.jpg/960px-Mango_pomelo_sago.jpg"),
    "Kung Pao Chicken": directPhoto("Kung Pao Chicken at Liqiaoshun Restaurant (20220310175424).jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Kung_Pao_Chicken_at_Liqiaoshun_Restaurant_%2820220310175424%29.jpg/960px-Kung_Pao_Chicken_at_Liqiaoshun_Restaurant_%2820220310175424%29.jpg"),
    "Mapo Tofu Shortcut": directPhoto("Billyfoodmabodofu3.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Billyfoodmabodofu3.jpg/960px-Billyfoodmabodofu3.jpg"),
    "Char Siu-Style Oven Pork": directPhoto("Charsiu.jpg", "https://upload.wikimedia.org/wikipedia/commons/9/95/Charsiu.jpg"),
    "Dan Dan Noodles Shortcut": filePhoto("Dan Dan Noodles.jpg"),
    "Hot and Sour Soup": filePhoto("Hot-and-Sour-Soup-Bowl.jpg"),
    "Chinese-Style Baked Eggplant": filePhoto("Yuxiang Eggplant (13974518993).jpg"),
    "Sesame Tangyuan-Style Rice Balls": filePhoto("Tangyuan.JPG"),
    "Omelette aux Fines Herbes": filePhoto("Omelette.JPG"),
    "Lentil Salad with Mustard": filePhoto("Lentil salad (29308018298).jpg"),
    "Croque Madame Skillet": filePhoto("Croque madame.jpg"),
    "Tuna Nicoise-ish Salad": filePhoto("Salade nicoise.jpg"),
    "White Bean Herb Salad": filePhoto("White bean mediterranean salad.jpg"),
    "Fromage Blanc Protein Bowl": filePhoto("Fromage blanc.jpg"),
    "Buckwheat Crepe with Egg": filePhoto("Galette complète in Annecy, France - 20130714.jpg"),
    "Chickpea Dijon Salad": filePhoto("Colorful healthy Chickpea Salad - 49859083608.jpg"),
    "French Onion Toast": filePhoto("Woodsoup.jpg"),
    "Ratatouille Skillet": filePhoto("Ratatouille.JPG"),
    "Chicken Dijon": filePhoto("-2019-03-06 Creamy mustard chicken with broccoli.JPG"),
    "Chocolate Mousse Shortcut": filePhoto("Chocolate mousse.jpg"),
    "Quiche Lorraine": filePhoto("Quiche lorraine.jpg"),
    "Coq au Vin Shortcut": filePhoto("Coq au vin.jpg"),
    "Salmon en Papillote": filePhoto("Salmon baked in an oven with lemons.jpg"),
    "Mushroom Crepes": filePhoto("Crêpe Creole and Spanish Tortilla + Salad - Pure Brunch Box 2023-07-29.jpg"),
    "Beef Bourguignon-ish Bowl": filePhoto("Boeuf Bourguignon.JPG"),
    "Potato Gratin": filePhoto("Gratin dauphinois.jpg"),
    "Creme Caramel Shortcut": filePhoto("Crème au caramel 1.jpg")
  };
  const photo = photos[dish.name];
  if (!photo) return null;
  return photo;
}

function localPhoto(fileName) {
  const url = `assets/dishes/${fileName}`;
  return {
    url,
    source: url,
    credit: "Generated image"
  };
}

function filePhoto(fileName) {
  return {
    url: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=900`,
    source: commonsFileSource(fileName),
    credit: "Wikimedia Commons"
  };
}

function directPhoto(fileName, url) {
  return {
    url,
    source: commonsFileSource(fileName),
    credit: "Wikimedia Commons"
  };
}

function commonsFileSource(fileName) {
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName).replaceAll("%20", "_")}`;
}

function hashString(value) {
  return [...value].reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) >>> 0, 0) % 10000;
}

function dishType(dish) {
  const name = dish.name.toLowerCase();
  if (name.includes("spaghetti") || name.includes("pasta") || name.includes("penne") || name.includes("gnocchi") || name.includes("soba") || name.includes("yakisoba")) return "pasta";
  if (name.includes("risotto") || name.includes("rice") || name.includes("onigiri") || name.includes("donburi") || name.includes("ochazuke")) return "rice";
  if (name.includes("soup") || name.includes("miso") || name.includes("fideo")) return "soup";
  if (name.includes("taco") || name.includes("quesadilla") || name.includes("rancheros")) return "taco";
  if (name.includes("tiramisu") || name.includes("pudding") || name.includes("toast")) return "dessert";
  if (dish.ingredients.some(([category]) => category === "meat")) return "protein";
  return "bowl";
}

function dishShape(type, angle) {
  if (type === "pasta") {
    return `<g fill="none" stroke="#fff7d4" stroke-width="20" stroke-linecap="round" transform="rotate(${angle} 450 360)">
      <path d="M290 340c70-70 150 65 230-4s132 8 112 58"/>
      <path d="M305 390c92-66 122 50 210-14s142 12 94 58"/>
      <path d="M330 300c80-46 120 48 200-12s118 0 120 42"/>
      <circle cx="565" cy="325" r="22" fill="#c94f3d" stroke="none"/>
      <circle cx="390" cy="400" r="18" fill="#3f7d56" stroke="none"/>
    </g>`;
  }
  if (type === "rice") {
    return `<g transform="rotate(${angle} 450 360)">
      <ellipse cx="450" cy="355" rx="165" ry="78" fill="#fffdf3"/>
      <rect x="332" y="325" width="236" height="76" rx="38" fill="#17202a" opacity="0.18"/>
      <circle cx="385" cy="336" r="10" fill="#3f7d56"/>
      <circle cx="495" cy="382" r="10" fill="#b48732"/>
      <circle cx="535" cy="336" r="10" fill="#c94f3d"/>
    </g>`;
  }
  if (type === "soup") {
    return `<g transform="rotate(${angle} 450 360)">
      <ellipse cx="450" cy="358" rx="170" ry="92" fill="#c97942"/>
      <ellipse cx="450" cy="330" rx="150" ry="58" fill="#e7a85e"/>
      <rect x="335" y="405" width="230" height="18" rx="9" fill="#ffffff" opacity="0.55"/>
      <circle cx="385" cy="320" r="16" fill="#fff8dc"/>
      <circle cx="500" cy="335" r="12" fill="#3f7d56"/>
    </g>`;
  }
  if (type === "taco") {
    return `<g transform="rotate(${angle} 450 360)">
      <path d="M285 385c42-116 288-116 330 0z" fill="#efc36d"/>
      <path d="M325 370c55-60 196-60 250 0" fill="none" stroke="#8f5132" stroke-width="34" stroke-linecap="round"/>
      <circle cx="395" cy="340" r="18" fill="#3f7d56"/>
      <circle cx="470" cy="330" r="16" fill="#c94f3d"/>
      <circle cx="535" cy="352" r="14" fill="#ffffff"/>
    </g>`;
  }
  if (type === "dessert") {
    return `<g transform="rotate(${angle} 450 360)">
      <rect x="330" y="270" width="240" height="175" rx="22" fill="#f4efe4"/>
      <rect x="330" y="330" width="240" height="36" fill="#7d4b35"/>
      <rect x="330" y="400" width="240" height="30" fill="#7d4b35"/>
      <circle cx="390" cy="290" r="14" fill="#ffffff"/>
      <circle cx="450" cy="290" r="14" fill="#ffffff"/>
      <circle cx="510" cy="290" r="14" fill="#ffffff"/>
    </g>`;
  }
  if (type === "protein") {
    return `<g transform="rotate(${angle} 450 360)">
      <ellipse cx="438" cy="350" rx="145" ry="78" fill="#d08452"/>
      <path d="M330 330c72 44 154 49 240 0" fill="none" stroke="#f0d8b6" stroke-width="18" stroke-linecap="round"/>
      <circle cx="570" cy="390" r="24" fill="#f6e6a7"/>
      <path d="M350 420l180-112" stroke="#ffffff" stroke-width="10" opacity="0.35"/>
    </g>`;
  }
  return `<g transform="rotate(${angle} 450 360)">
    <ellipse cx="450" cy="350" rx="160" ry="85" fill="#f3dfb1"/>
    <circle cx="380" cy="340" r="28" fill="#3f7d56"/>
    <circle cx="450" cy="378" r="26" fill="#c94f3d"/>
    <circle cx="525" cy="335" r="24" fill="#2f6f8f"/>
    <rect x="360" y="405" width="180" height="20" rx="10" fill="#ffffff" opacity="0.6"/>
  </g>`;
}

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

languageSelect.addEventListener("change", (event) => {
  state.language = event.target.value;
  localStorage.setItem("cuisineCoachLanguage", state.language);
  render();
});

cuisineSelect.addEventListener("change", (event) => {
  state.cuisine = event.target.value;
  state.selectedDay = 0;
  render();
});

levelSelect.addEventListener("change", (event) => {
  state.level = event.target.value;
  state.selectedDay = 0;
  render();
});

servingsInput.addEventListener("input", (event) => {
  state.servings = Math.max(1, Math.min(6, Number(event.target.value) || 1));
  render();
});

vegetarianInput.addEventListener("change", (event) => {
  state.vegetarian = event.target.checked;
  render();
});

noOvenInput.addEventListener("change", (event) => {
  state.noOven = event.target.checked;
  state.selectedDay = 0;
  render();
});

highProteinInput.addEventListener("change", (event) => {
  state.highProtein = event.target.checked;
  state.selectedDay = 0;
  render();
});

progressList.addEventListener("change", (event) => {
  if (event.target.matches("[data-progress]")) {
    const key = event.target.dataset.progress;
    state.progress[key] = { ...state.progress[key], done: event.target.checked };
    saveProgress();
    render();
  }
});

progressList.addEventListener("click", (event) => {
  if (event.target.matches("[data-rating]")) {
    const key = event.target.dataset.key;
    state.progress[key] = { ...state.progress[key], rating: event.target.dataset.rating };
    saveProgress();
    render();
  }
});

progressList.addEventListener("input", (event) => {
  if (event.target.matches("[data-note]")) {
    const key = event.target.dataset.note;
    state.progress[key] = { ...state.progress[key], note: event.target.value };
    saveProgress();
  }
});

document.querySelector("#reset-progress").addEventListener("click", () => {
  state.progress = {};
  saveProgress();
  render();
});

document.querySelector("#copy-shopping").addEventListener("click", async () => {
  const items = [...shoppingList.querySelectorAll(".shopping-card")].map((card) => card.innerText).join("\n\n");
  try {
    await navigator.clipboard.writeText(items);
    document.querySelector("#copy-shopping").textContent = t("copied");
    setTimeout(() => {
      document.querySelector("#copy-shopping").textContent = t("copyList");
    }, 1200);
  } catch {
    document.querySelector("#copy-shopping").textContent = t("selectList");
  }
});

render();
