import { Layout } from "../../components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextPage } from "next";
import pokeApi from "../../api/PokeApi";
import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import Image from "next/image";

interface Props {
  pokemons: any;
}
const PokemonsPage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);

  return (
    <Layout title={`${pokemons.name} pokemon`}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable clickable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemons.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemons.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text transform="capitalize" h1>
                {pokemons.name}{" "}
              </Text>
              <Button color="gradient" ghost>
                favorit
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0} justify="space-around">
                <Image
                  src={pokemons.sprites.front_default}
                  alt={pokemons.name}
                  width={150}
                  height={150}
                />
                <Image
                  src={pokemons.sprites.back_default}
                  alt={pokemons.name}
                  width={150}
                  height={150}
                />
                <Image
                  src={pokemons.sprites.front_shiny}
                  alt={pokemons.name}
                  width={150}
                  height={150}
                />
                <Image
                  src={pokemons.sprites.back_shiny}
                  alt={pokemons.name}
                  width={150}
                  height={150}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokomon151 = [...Array(151)].map((value, i) => `${i + 1}`);

  return {
    paths: pokomon151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Props>(`/pokemon/${id}`);

  return {
    props: {
      pokemons: data,
    },
  };
};
export default PokemonsPage;
