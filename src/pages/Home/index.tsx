import { CoffeeList } from "./components/CoffeeList";
import { Intro } from "./components/Intro";
import { HomePageContainer } from "./styles";

export function HomePage() {
  return (
    <HomePageContainer>
      <Intro />
      <CoffeeList />
    </HomePageContainer>
  );
}
