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

cuisines.japanese.levels = {
  beginner: cuisines.japanese.week,
  intermediate: [
    recipe("Katsudon", "Breaded cutlet timing and egg simmering", 45, "Medium", ["protein", "no oven"], [["meat", "150 g pork or chicken schnitzel", 150], ["dairy", "1 egg for coating plus 1 egg for simmering", 2], ["pantry", "30 g flour", 30], ["pantry", "50 g panko", 50], ["pantry", "80 g rice", 80], ["produce", "1/2 onion", 0.5], ["pantry", "soy sauce and sugar", 1]], ["pot", "frying pan", "shallow bowls", "knife"], ["Cook rice.", "Coat cutlet in flour, egg, and panko.", "Pan-fry until crisp and cooked.", "Simmer onion with soy, sugar, and water.", "Slice cutlet, add to pan, pour egg around it, and serve over rice."], ["German Schnitzel cuts make this easier."]),
    recipe("Okonomiyaki", "Cabbage batter and controlled pan browning", 40, "Medium", ["vegetarian", "no oven"], [["produce", "180 g cabbage", 180], ["dairy", "1 egg", 1], ["pantry", "60 g flour", 60], ["pantry", "80 ml water or dashi", 80], ["pantry", "1 tbsp soy sauce", 1], ["dairy", "mayonnaise, optional", 1]], ["bowl", "frying pan", "spatula", "knife"], ["Shred cabbage finely.", "Mix flour, egg, water, and soy into a thick batter.", "Fold cabbage into batter.", "Cook as a thick pancake on medium heat until browned.", "Flip carefully and finish with sauce or mayonnaise."], ["Use ordinary cabbage from any supermarket."]),
    recipe("Shoyu Ramen Shortcut", "Broth seasoning, noodle timing, and toppings", 45, "Medium", ["soup"], [["pasta", "120 g ramen or mie noodles", 120], ["pantry", "600 ml chicken or vegetable stock", 600], ["pantry", "1.5 tbsp soy sauce", 1.5], ["produce", "1 garlic clove", 1], ["produce", "1 tsp ginger", 1], ["dairy", "1 egg", 1], ["produce", "spring onion", 1]], ["saucepan", "pot", "knife"], ["Boil egg for 7 minutes and cool it.", "Simmer stock with garlic, ginger, and soy sauce.", "Cook noodles separately.", "Taste broth and adjust saltiness.", "Serve noodles with broth, egg, and spring onion."], ["Mie noodles are acceptable for a learning version."]),
    recipe("Oyakodon", "Gentle egg setting in a rice bowl", 30, "Medium", ["protein", "no oven"], [["meat", "130 g chicken thigh or breast", 130], ["dairy", "2 eggs", 2], ["produce", "1/2 onion", 0.5], ["pantry", "80 g rice", 80], ["pantry", "1.5 tbsp soy sauce", 1.5], ["pantry", "1 tsp sugar", 1]], ["pot", "frying pan with lid", "bowl"], ["Cook rice.", "Simmer onion with soy, sugar, and water.", "Add small chicken pieces and cook through.", "Pour beaten egg over the chicken.", "Cover briefly so egg sets softly, then slide over rice."], ["Chicken thigh stays juicier, but breast works."]),
    recipe("Agedashi-Style Tofu", "Crisping tofu and quick sauce", 35, "Medium", ["vegetarian", "no oven"], [["produce", "180 g firm tofu", 180], ["pantry", "2 tbsp cornstarch", 2], ["pantry", "1 tbsp soy sauce", 1], ["produce", "1 tsp grated ginger", 1], ["produce", "spring onion", 1], ["pantry", "oil for frying", 1]], ["paper towels", "frying pan", "small saucepan"], ["Press tofu between towels for 10 minutes.", "Cut and coat lightly in cornstarch.", "Pan-fry until crisp.", "Warm soy sauce, ginger, and a little water.", "Pour sauce around tofu and top with spring onion."], ["Firm tofu from Asian markets works best."]),
    recipe("Soba with Mushroom Dipping Broth", "Noodle rinsing and concentrated broth", 30, "Medium", ["vegetarian", "no oven"], [["pasta", "100 g soba noodles", 100], ["produce", "120 g mushrooms", 120], ["pantry", "2 tbsp soy sauce", 2], ["pantry", "1 tsp sugar", 1], ["produce", "spring onion", 1]], ["pot", "saucepan", "colander", "knife"], ["Cook soba and rinse cold.", "Brown mushrooms in a small saucepan.", "Add soy sauce, sugar, and water to make a strong broth.", "Serve noodles cool with warm dipping broth.", "Top with spring onion."], ["Use buckwheat soba if available; wheat noodles still teach the flow."]),
    recipe("Dorayaki", "Small pancakes and sweet filling", 35, "Medium", ["dessert", "vegetarian", "no oven"], [["dairy", "1 egg", 1], ["pantry", "45 g flour", 45], ["pantry", "1 tbsp sugar", 1], ["pantry", "1/2 tsp baking powder", 0.5], ["pantry", "60 g sweet red bean paste or jam", 60]], ["bowl", "whisk", "frying pan", "spatula"], ["Whisk egg and sugar.", "Add flour, baking powder, and a splash of water.", "Cook small pancakes on low-medium heat.", "Cool slightly.", "Sandwich with red bean paste or jam."], ["Jam is a practical stand-in if you cannot find anko."])
  ]
};

cuisines.mexican.levels = {
  beginner: cuisines.mexican.week,
  intermediate: [
    recipe("Chilaquiles Verdes Shortcut", "Sauce simmering and keeping tortilla texture", 35, "Medium", ["vegetarian", "no oven"], [["bakery", "60 g tortilla chips", 60], ["pantry", "200 g salsa verde", 200], ["dairy", "1 egg", 1], ["dairy", "40 g feta or sour cream", 40], ["produce", "1 lime", 1], ["produce", "coriander or parsley", 1]], ["frying pan", "small saucepan", "spatula"], ["Warm salsa verde in a pan.", "Fold in tortilla chips briefly so some edges stay crisp.", "Fry an egg.", "Top chips with egg, feta or sour cream, herbs, and lime.", "Eat immediately."], ["Jarred salsa verde from a Mexican shop makes this weeknight-friendly."]),
    recipe("Chicken Mole-Inspired Bowl", "Layered sauce with spices and chocolate", 50, "Medium", ["protein", "no oven"], [["meat", "160 g chicken", 160], ["pantry", "200 g passata", 200], ["pantry", "1 tsp cocoa powder", 1], ["pantry", "1 tsp peanut butter", 1], ["pantry", "chili powder", 1], ["pantry", "80 g rice", 80], ["produce", "1/2 onion", 0.5]], ["pot", "saucepan", "knife", "forks"], ["Cook rice.", "Simmer chicken until cooked and shred it.", "Cook onion, then add passata, cocoa, peanut butter, chili, and salt.", "Simmer until the sauce tastes rounded.", "Stir in chicken and serve over rice."], ["This is a learning-friendly mole-inspired sauce, not traditional mole."]),
    recipe("Tostadas with Refried Beans", "Bean texture and crisp assembly", 30, "Medium", ["vegetarian", "no oven"], [["bakery", "2 tortillas", 2], ["pantry", "220 g canned beans", 220], ["produce", "1/2 onion", 0.5], ["dairy", "40 g feta or sour cream", 40], ["produce", "1 lime", 1], ["produce", "cabbage or lettuce", 1]], ["frying pan", "fork", "knife"], ["Toast tortillas in a dry pan until crisp.", "Cook onion, add beans, and mash with a splash of water.", "Season beans with salt and lime.", "Spread beans on tostadas.", "Top with cabbage and cheese or sour cream."], ["Kidney beans work if black or pinto beans are unavailable."]),
    recipe("Enchiladas Rojas Skillet", "Sauce coating and pan assembly", 45, "Medium", ["vegetarian", "no oven"], [["bakery", "3 tortillas", 3], ["pantry", "250 g passata", 250], ["pantry", "150 g canned beans", 150], ["dairy", "80 g grated cheese", 80], ["produce", "1/2 onion", 0.5], ["pantry", "chili powder", 1]], ["frying pan with lid", "small saucepan", "spatula"], ["Simmer passata with onion, chili, and salt into a sauce.", "Fill tortillas with beans and a little cheese.", "Roll and place in a pan.", "Cover with sauce and remaining cheese.", "Cover until hot and melted."], ["Use Gouda if Mexican cheese is unavailable."]),
    recipe("Calabacitas", "Vegetable saute and sweetness-acid balance", 30, "Medium", ["vegetarian", "no oven"], [["produce", "1 zucchini", 1], ["frozen", "100 g corn", 100], ["produce", "1/2 onion", 0.5], ["pantry", "100 g passata", 100], ["dairy", "30 g feta", 30], ["produce", "1/2 lime", 0.5]], ["frying pan", "knife", "spatula"], ["Cook onion until soft.", "Add zucchini and corn and saute until browned in spots.", "Add passata and simmer briefly.", "Season with salt and lime.", "Finish with crumbled feta."], ["A good way to practice vegetables without needing special ingredients."]),
    recipe("Arroz con Pollo-ish", "One-pot rice and protein timing", 45, "Medium", ["protein", "no oven"], [["meat", "150 g chicken", 150], ["pantry", "90 g rice", 90], ["pantry", "250 ml stock", 250], ["produce", "1/2 onion", 0.5], ["produce", "1 garlic clove", 1], ["pantry", "100 g passata", 100], ["frozen", "80 g peas or corn", 80]], ["wide pot with lid", "knife", "spatula"], ["Brown seasoned chicken pieces.", "Cook onion and garlic in the same pot.", "Add rice, passata, stock, and vegetables.", "Nestle chicken back in.", "Cover and cook gently until rice is done."], ["Use boneless chicken for a faster learning version."]),
    recipe("Cajeta-Style Yogurt Dessert", "Caramel notes and dessert layering", 20, "Medium", ["dessert", "vegetarian", "no oven"], [["dairy", "150 g Greek yogurt", 150], ["pantry", "1 tbsp dulce de leche or caramel", 1], ["bakery", "1 biscuit or cookie", 1], ["pantry", "cinnamon", 1], ["produce", "banana or berries, optional", 1]], ["glass", "spoon", "small bowl"], ["Crush biscuit into a glass.", "Mix yogurt with a little cinnamon.", "Layer yogurt and caramel.", "Add fruit if using.", "Chill briefly or eat right away."], ["Dulce de leche is sometimes in Latin shops; caramel spread also works."])
  ]
};

const categories = {
  produce: "Produce",
  pantry: "Pantry",
  pasta: "Pasta, Rice, Bread",
  bakery: "Pasta, Rice, Bread",
  dairy: "Dairy",
  meat: "Meat",
  frozen: "Frozen"
};

const state = {
  cuisine: "italian",
  level: "beginner",
  servings: 1,
  vegetarian: false,
  noOven: true,
  selectedDay: 0,
  view: "plan",
  progress: JSON.parse(localStorage.getItem("cuisineCoachProgress") || "{}"),
  swaps: JSON.parse(localStorage.getItem("cuisineCoachSwaps") || "{}")
};

const cuisineSelect = document.querySelector("#cuisine-select");
const levelSelect = document.querySelector("#level-select");
const servingsInput = document.querySelector("#servings-input");
const vegetarianInput = document.querySelector("#vegetarian-input");
const noOvenInput = document.querySelector("#no-oven-input");
const dayRail = document.querySelector("#day-rail");
const recipePanel = document.querySelector("#recipe-panel");
const programTitle = document.querySelector("#program-title");
const shoppingList = document.querySelector("#shopping-list");
const progressList = document.querySelector("#progress-list");

Object.entries(cuisines).forEach(([key, cuisine]) => {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = cuisine.name;
  cuisineSelect.append(option);
});

function getWeek() {
  const base = getBaseWeek().map((dish) => {
    if (!state.vegetarian || isVegetarianDish(dish)) return dish;
    return getCandidates().find((candidate) => isVegetarianDish(candidate)) || dish;
  });

  return base.map((dish, dayIndex) => {
    const swappedName = state.swaps[swapKey(dayIndex)];
    if (!swappedName) return dish;
    return getCandidates().find((candidate) => candidate.name === swappedName) || dish;
  });
}

function getCandidates() {
  const cuisine = cuisines[state.cuisine];
  return [...getBaseWeek(), ...(cuisine.alternatives || [])].filter((dish) => {
    if (state.vegetarian && !isVegetarianDish(dish)) return false;
    if (state.noOven && dish.tags.includes("oven")) return false;
    return true;
  });
}

function getBaseWeek() {
  const cuisine = cuisines[state.cuisine];
  return cuisine.levels?.[state.level] || cuisine.week;
}

function isVegetarianDish(dish) {
  if (dish.tags.includes("vegetarian") || dish.tags.includes("dessert")) return true;
  return !dish.ingredients.some(([category]) => category === "meat");
}

function swapKey(dayIndex) {
  return `${state.cuisine}-${state.level}-${dayIndex}`;
}

function progressKey(dayIndex) {
  return `${state.cuisine}-${state.level}-${dayIndex}`;
}

function scaledText(text, amount) {
  if (typeof amount !== "number" || state.servings === 1) return text;
  const scaled = Number((amount * state.servings).toFixed(1));
  return text.replace(String(amount), String(scaled));
}

function render() {
  const cuisine = cuisines[state.cuisine];
  const week = getWeek();
  const selected = week[state.selectedDay];
  document.documentElement.style.setProperty("--art-a", cuisine.palette[0]);
  document.documentElement.style.setProperty("--art-b", cuisine.palette[1]);
  programTitle.textContent = `${cuisine.name} ${capitalize(state.level)} Week`;
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
      <span class="day-meta"><span>Day ${index + 1}</span><span>${dish.time} min</span></span>
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
  const candidates = getCandidates();
  const photo = dishPhoto(dish);
  recipePanel.innerHTML = `
    <div class="recipe-hero">
      <div class="recipe-title">
        <p class="eyebrow">Day ${state.selectedDay + 1}</p>
        <h2>${dish.name}</h2>
        <p class="muted">${dish.skill}</p>
        <div class="pill-row">
          <span class="pill">${dish.time} min</span>
          <span class="pill">${dish.difficulty}</span>
          <span class="pill">${state.servings} serving${state.servings > 1 ? "s" : ""}</span>
        </div>
        <div class="recipe-actions">
          <button class="complete-button ${done ? "done" : ""}" type="button" id="complete-day">${done ? "Cooked" : "Mark cooked"}</button>
          <button class="ghost-button" type="button" id="surprise-dish">Surprise me</button>
        </div>
        <label class="swap-control" for="dish-swap-select">
          <span>Choose another dish</span>
          <select id="dish-swap-select" aria-label="Choose another dish">
            ${candidates.map((candidate) => `<option value="${escapeAttribute(candidate.name)}" ${candidate.name === dish.name ? "selected" : ""}>${candidate.name}</option>`).join("")}
          </select>
        </label>
      </div>
      <figure class="dish-photo-wrap">
        <img class="dish-photo" src="${dishImageUrl(dish)}" alt="${dish.name}" loading="lazy" onerror="this.src='${generatedDishImageUrl(dish)}'; this.closest('.dish-photo-wrap').classList.add('image-fallback');">
        <figcaption>
          ${photo ? `<a href="${photo.source}" target="_blank" rel="noreferrer">${dish.name} photo</a>` : `${dish.name} photo`}
        </figcaption>
      </figure>
    </div>
    <div class="recipe-body">
      <div class="info-block">
        <h3>Ingredients</h3>
        <ul class="list">
          ${dish.ingredients.map((item) => `<li>${scaledText(item[1], item[2])}</li>`).join("")}
        </ul>
        <h3>Tools</h3>
        <ul class="list">
          ${dish.tools.map((tool) => `<li>${tool}</li>`).join("")}
        </ul>
        <h3>Berlin substitutions</h3>
        <ul class="list">
          ${dish.substitutions.map((substitution) => `<li>${substitution}</li>`).join("")}
        </ul>
      </div>
      <div class="step-block">
        <h3>Steps</h3>
        <ol class="steps">
          ${dish.steps.map((step) => `<li>${step}</li>`).join("")}
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
  const grouped = {};
  week.forEach((dish) => {
    dish.ingredients.forEach(([category, text, amount]) => {
      const label = categories[category] || "Other";
      grouped[label] ||= [];
      grouped[label].push(scaledText(text, amount));
    });
  });

  shoppingList.replaceChildren();
  Object.entries(grouped).forEach(([category, items]) => {
    const card = document.createElement("section");
    card.className = "shopping-card";
    card.innerHTML = `
      <h3>${category}</h3>
      <ul class="list">${[...new Set(items)].map((item) => `<li>${item}</li>`).join("")}</ul>
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
        <p class="eyebrow">Day ${index + 1}</p>
        <h3>${dish.name}</h3>
      </div>
      <label class="check-row">
        <input type="checkbox" ${entry.done ? "checked" : ""} data-progress="${key}" data-field="done">
        <span>Cooked</span>
      </label>
      <div class="progress-actions" role="group" aria-label="Difficulty rating">
        ${["easy", "ok", "hard"].map((rating) => `<button class="rating-button ${entry.rating === rating ? "active" : ""}" type="button" data-rating="${rating}" data-key="${key}">${capitalize(rating)}</button>`).join("")}
      </div>
      <textarea placeholder="Notes for next time" data-note="${key}">${entry.note || ""}</textarea>
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

function dishImageUrl(dish) {
  const photo = dishPhoto(dish);
  if (photo) return photo.url;
  return `https://placeholdpicsum.dev/photo/seed/${encodeURIComponent(dish.name)}/900/650`;
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

function dishPhoto(dish) {
  const photos = {
    "Spaghetti Aglio e Olio": ["Spaghetti aglio e olio KB.jpg", "Wikimedia Commons"],
    "Cacio e Pepe": ["Cacio e pepe.jpg", "Wikimedia Commons"],
    "Pasta al Pomodoro": ["Pasta al pomodoro.JPG", "Wikimedia Commons"],
    "Risotto ai Funghi": ["Risotto ai funghi porcini.JPG", "Wikimedia Commons"],
    "Scaloppine al Limone": ["Scaloppine al limone.jpg", "Wikimedia Commons"],
    "Gnocchi with Sage Butter": ["Zuni ricotta gnocchi with browned butter and sage.jpg", "Wikimedia Commons"],
    "Tiramisu Cup": ["Tiramisu in a cup, July 2007.jpg", "Wikimedia Commons"],
    "Penne all'Arrabbiata": ["Penne all'arrabbiata.jpg", "Wikimedia Commons"],
    "Frittata alle Erbe": ["Frittata.jpg", "Wikimedia Commons"],
    "Panzanella with Roasted Peppers": ["Panzanella.jpg", "Wikimedia Commons"],
    "Onigiri": ["Onigiri.JPG", "Wikimedia Commons"],
    "Miso Soup": ["Miso Soup 001.jpg", "Wikimedia Commons"],
    "Chicken Teriyaki": ["Teriyaki Chicken (3284699052).jpg", "Wikimedia Commons"],
    "Yakisoba": ["Yakisoba.jpg", "Wikimedia Commons"],
    "Tamago Sando": ["Egg Sandwich 001.jpg", "Wikimedia Commons"],
    "Gyoza Bowl": ["Gyoza (5930315588).jpg", "Wikimedia Commons"],
    "Quesadilla": ["Cheese quesadilla.jpg", "Wikimedia Commons"],
    "Pico-Free Bean Tacos": ["Roasted sweet potato + black bean tacos (7784822910).jpg", "Wikimedia Commons"],
    "Sopa de Fideo": ["Sopa de fideo.jpg", "Wikimedia Commons"],
    "Chicken Tinga": ["Tinga.jpg", "Wikimedia Commons"],
    "Elote Bowl": ["Elote con crema y queso cotija.jpg", "Wikimedia Commons"],
    "Churro-Style Toast": ["Cinnamon toast - 01.jpg", "Wikimedia Commons"],
    "Mushroom Tacos": ["Tacos, rice, and beans.jpg", "Wikimedia Commons"],
    "Huevos Rancheros-ish": ["Huevos rancheros 01.jpg", "Wikimedia Commons"]
  };
  const photo = photos[dish.name];
  if (!photo) return null;
  const fileName = photo[0];
  return {
    url: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=900`,
    source: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName).replaceAll("%20", "_")}`,
    credit: photo[1]
  };
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
    document.querySelector("#copy-shopping").textContent = "Copied";
    setTimeout(() => {
      document.querySelector("#copy-shopping").textContent = "Copy list";
    }, 1200);
  } catch {
    document.querySelector("#copy-shopping").textContent = "Select list";
  }
});

render();
