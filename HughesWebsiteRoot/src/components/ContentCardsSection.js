import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,

  },
}));

function ContentCardsSection(props) {
  const classes = useStyles();

  const items = [
    {
      image:
        "https://drive.google.com/uc?export=view&id=1EBUqU5lvTAbxGgelU289bb-ZqZI3CIRa",
      title: "Finish Basements",
      url: "/",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1lJAqWNzt1_rPIrHlXn0OFBXK_cP4mzgA",
      title: "Decks",

      url: "/",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1fig1j7UdW4mObADc3yCdlPL7oIKb0IY-",
      title: "Metal Studs and Drywall",

      url: "/",
    },
    {
      image:
        "https://drive.google.com/uc?export=view&id=1X2FmyGGhcGDHyz92yI5ramFBbYzuEGq2",
      title: "Kitchen and Bath",

      url: "/",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} justifyContent="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} md={12} lg={6} key={index}>
              <Card>
                <Link href={item.url} passHref={true}>
                  <CardActionArea component="a">
                    <CardMedia
                      image={item.image}
                      title={item.name}
                      className={classes.media}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom={true}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default ContentCardsSection;
