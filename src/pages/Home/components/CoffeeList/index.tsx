import { useState } from "react";
import { CoffeeTags, coffeeList } from "../../data";
import { CoffeeCard } from "./CoffeeCard";
import {
  CoffeeFilterItem,
  CoffeeListContainer,
  CoffeeListContent,
  CoffeeListFilters,
  CoffeeListHeader,
  CoffeeListTitle,
} from "./styles";

export function CoffeeList() {
  const [filteredCoffee, setFilteredCoffee] = useState(coffeeList);

  const handleFilterByTag = (tag: CoffeeTags) => {
    if (tag === CoffeeTags.all) {
      return setFilteredCoffee(coffeeList);
    }

    const filtered = coffeeList.filter((coffee) => coffee.tags.includes(tag));
    return setFilteredCoffee(filtered);
  };

  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <CoffeeListTitle>Nossos cafés</CoffeeListTitle>
        <CoffeeListFilters>
          {Object.values(CoffeeTags).map((tag) => (
            <CoffeeFilterItem key={tag} onClick={() => handleFilterByTag(tag)}>
              {tag}
            </CoffeeFilterItem>
          ))}
        </CoffeeListFilters>
      </CoffeeListHeader>

      <CoffeeListContent>
        {filteredCoffee.map((coffee) => (
          <CoffeeCard key={coffee.id} {...coffee} />
        ))}
      </CoffeeListContent>
    </CoffeeListContainer>
  );
}
