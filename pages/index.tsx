import {  Card, Grid as Grid} from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import pokeApi from "../api/PokeApi";
import { Layout } from "../components/Layout";
import PokemonCard from "../components/pokemon/PokemonCard";
import { PokemonListresponse, SmallPokemon } from "../interface";

interface Props {
  pokemos: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemos }) => {


  return (
    <>
      <Layout>
        <Grid.Container gap={2} justify="flex-start">
          {pokemos.map((pokemonst ) => (
            <PokemonCard key={pokemonst.id} pokemonst={pokemonst}/>
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListresponse>("/pokemon?limit=151");

  const pokemos: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg

  return {
    props: {
      pokemos: pokemos,
    },
  };
};
