import { PacmanLoader } from "react-spinners";
import { Container } from "./styles";
import { colors } from "@nextui-org/react";

const Loader = () => (
    <Container>
        <PacmanLoader color={colors.white} />
    </Container>
)

export default Loader;