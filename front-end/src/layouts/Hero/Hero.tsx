import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Card, Button, Container, Row } from "react-bootstrap";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className="hero"
      style={{
        maxWidth: "100%",
        width: "100vw",
        maxHeight: "100%",
      }}
    >
      <Card className="bg-light border-0 m-2 p-5">
        <Container
          className="d-flex flex-lg-row justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <div>
            <h1>Kusoo Dhawoow Somali Shop</h1>
            <p className="py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              <br />
              magnam pariatur ipsum necessitatibus earum. Eos error doloribus
              autem.
              <br />
              Optio ex eum nihil qui reiciendis autem aspernatur nesciunt velit
              esse labore.
            </p>
            <Link href="/shop" passHref>
              <Button size="lg" variant="outline-secondary">
                <a>
                  <ArrowRightIcon style={{ width: "30px", height: "30px" }} />
                  <span className="pl-3">Shop Now</span>
                </a>
              </Button>
            </Link>
          </div>
          <Row>
            <Image
              src="/images/macbook.png"
              width={"400px"}
              height={"400px"}
              alt="Card image"
            />
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default Hero;
