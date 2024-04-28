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
        "https://lh3.google.com/u/0/d/18UkXL9m9YmorysLlz_dl2AKQrA0aQGLH=w1920-h838-iv1",
      title: "Finish Basements",
      url: "/",
    },
    {
      image:
        "https://lh3.google.com/u/0/d/1-lbU74zAQOs8WJYHGW6-e44WPhfcX9BT=w1920-h838-iv1",
      title: "Decks",

      url: "/",
    },
    {
      image:
        "https://lh3.google.com/u/0/d/19PUlsQUWYc6gJUSxPlzYVK0J2RaRfdmS=w1920-h838-iv1",
      title: "Metal Studs and Drywall",

      url: "/",
    },
    {
      image:
        "https://lh3.google.com/u/0/d/1nkPOIo0oIC1jAA2V9YEYv-_did26rDsT=w1920-h838-iv1",
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
