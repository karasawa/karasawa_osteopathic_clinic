import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import styled from "styled-components";
import { FC, memo } from "react";
import Link from "next/link";

type Props = {
  symptom: {
    id: string;
    body_part: string;
    small_introduction: string;
    big_introduction: string;
    cause: string;
    solution: string;
    image: string;
    created_at: Date;
  };
};
// eslint-disable-next-line react/display-name
const SymptomCard: FC<Props> = memo(({ symptom }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 345,
        height: 285,
        color: "#281914",
        mb: 1,
      }}
    >
      <CardMedia
        component="img"
        height="150"
        image={symptom.image}
        alt={symptom.body_part}
      />
      <CardContent sx={{ pt: 1, pb: 0 }}>
        <BodyPart>{symptom.body_part}</BodyPart>
        <Introdution>{symptom.small_introduction}</Introdution>
      </CardContent>
      <CardActions sx={{ paddingTop: 0, color: "#281914" }}>
        <Link href={`/symptom/${symptom.id}`}>
          <DetailButton>詳細を見る</DetailButton>
        </Link>
      </CardActions>
    </Card>
  );
});

export default SymptomCard;

const BodyPart = styled.h3`
  margin: 0;
  padding: 0 10px 6px 0;
`;

const Introdution = styled.p`
  margin: 0;
`;

const DetailButton = styled.button`
  padding: 10px;
  margin: 0 0 0 auto;
  border-radius: 5px;
  background-color: #b4cf9e;
  border: none;
  font-size: 15px;
  font-weight: bold;
  font-family: "Shippori Mincho", serif;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 0.7;
  }
`;
