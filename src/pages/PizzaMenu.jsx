import React, { useEffect, useState } from "react";
import { getPizzas } from "../services/pizzaApi";
import PizzaCard from "../components/PizzaCard";

function PizzaMenu() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const data = await getPizzas();
        setPizzas(data);
      } catch (error) {
        console.error("Failed to fetch pizzas", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredPizzas =
    activeFilter === "All"
      ? pizzas
      : pizzas.filter((pizza) => pizza.filter?.filter === activeFilter);

  /* ---------------- GROUP BY CATEGORY ---------------- */
  const groupedPizzas = filteredPizzas.reduce((acc, pizza) => {
    const categoryName = pizza.category?.category || "Other Pizzas";

    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }

    acc[categoryName].push(pizza);
    return acc;
  }, {});

  /* ---------------- CATEGORY COLOR HELPER ---------------- */
  const getCategoryColor = (category) => {
    if (category === "MEAT" || category === "HALAL") {
      return "red-800";
    }
    return "green-800";
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-600">Loading pizzas...</div>
    );
  }

  return (
    <section className="bg-white relative z-10">
      {/* ---------------- FILTERS ---------------- */}
      <div>
        <div className="flex mx-2 md:w-auto gap-2 md:mx-8 flex-wrap mt-6">
          <span className="font-bold">Filter :</span>

          {["All", "Vegetarian", "Meat", "Halal"].map((filter) => (
            <div key={filter} className="flex gap-2">
              <input
                id={filter}
                type="radio"
                value={filter}
                name="type"
                checked={activeFilter === filter}
                onChange={() => setActiveFilter(filter)}
              />
              <label htmlFor={filter}>{filter}</label>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- CATEGORIES ---------------- */}
      <div className="max-w-7xl mx-auto px-4 space-y-14 pb-20">
        {Object.entries(groupedPizzas).map(([category, items]) => (
          <div key={category}>
            {/* Category Heading */}
            <div className="flex items-center justify-center mb-2 p-5">
              <div
                className={`grow border-t border-${getCategoryColor(category)}`}
              ></div>

              <h2
                className={`px-4 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-${getCategoryColor(
                  category,
                )}`}
              >
                {category}
              </h2>

              <div
                className={`grow border-t border-${getCategoryColor(category)}`}
              ></div>
            </div>

            {/* Pizza Cards */}
            <div className="flex gap-11 flex-wrap justify-center">
              {items.map((pizza) => (
                <PizzaCard key={pizza._id} pizza={pizza} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PizzaMenu;
