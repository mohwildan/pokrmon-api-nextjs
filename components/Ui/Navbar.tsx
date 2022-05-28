import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import LinkNex from "next/link";
import Image from "next/image";

export function Navbar() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0 20px",
        background: theme?.colors.gray100.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        width={70}
        height={70}
        alt="icon"
      />
      <LinkNex href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemo
          </Text>
        </Link>
      </LinkNex>

      <Spacer css={{ flex: 1 }} />
      <LinkNex href="/favorites" passHref>
        <Link style={{marginRight: "10px"}}>
          <Text color="white">Favorit</Text>
        </Link>
      </LinkNex>
    </div>
  );
}
