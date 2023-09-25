import { DigiLayoutBlock } from "@digi/arbetsformedlingen-react";
import styled from "styled-components";
import { primary } from "./variables";

export const Header = styled(DigiLayoutBlock)`
  &&& {
    --digi--layout-block--background--primary: ${primary};
  }
`