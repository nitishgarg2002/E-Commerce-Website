import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

const Cart = () => {
  const isEmpty = true;

  const EmptyCart = () => {};
  return (
    <Container>
      <div className={classes.toobar} />
      <Typography className={classes.title} variant="h3">
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
