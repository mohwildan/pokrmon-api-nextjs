import { Grid, Card, Row,Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interface";

interface Props {
  pokemonst: SmallPokemon
}

const PokemonCard: FC<Props> = ({pokemonst}) => {
  const router = useRouter()
  const onClick = () => {
    router.push(`/pokemon/${pokemonst.id}`) 
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonst.id}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemonst.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemonst.name}</Text>
            <Text>#{pokemonst.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
