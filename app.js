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
    ]
  }
};

function recipe(name, skill, time, difficulty, tags, ingredients, tools, steps, substitutions) {
  return { name, skill, time, difficulty, tags, ingredients, tools, steps, substitutions };
}

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
  progress: JSON.parse(localStorage.getItem("cuisineCoachProgress") || "{}")
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
  const all = cuisines[state.cuisine].week;
  if (!state.vegetarian) return all;
  return all.map((item) => {
    if (item.tags.includes("vegetarian") || item.tags.includes("dessert")) return item;
    const replacement = all.find((candidate) => candidate.tags.includes("vegetarian") && candidate.name !== item.name);
    return replacement || item;
  });
}

function progressKey(dayIndex) {
  return `${state.cuisine}-${dayIndex}`;
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
        <button class="complete-button ${done ? "done" : ""}" type="button" id="complete-day">${done ? "Cooked" : "Mark cooked"}</button>
      </div>
      <div class="dish-art" aria-hidden="true"></div>
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

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
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
