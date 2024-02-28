import React from "react";
import { Button, Container, Navbar } from ".";
import { JackInTheBox, Reveal } from "react-awesome-reveal";
import {
  fadeInDownShorter,
  fadeInDownShorter2,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/keyframes";
import Image from "next/image";

const Hero = () => {
  return (
    <Container className={"flex flex-col sm:flex-row mt-20 mb-32"}>
      <div className="w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-[20px] sm:mt-5 lg:mt-10">
        <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
          <h1 className="text-3xl lg:text-6xl font-bold mb-5">
            welcome... <br /> To my website
          </h1>
          <h2 className="font-bold"> Hello! I'm abbi</h2>
          <h6>
            a dedicated software developer with one year of hands-on experience
            in the industry.
          </h6>
        </Reveal>
        <Reveal keyframes={fadeInDownShorter} duration={1000} delay={800}>
          <p className="mb-8 opacity-50">
            I'm deeply passionate about leveraging technology to solve
            real-world problems and deliver impactful solutions.
          </p>
        </Reveal>

        <div className="flex mb-10">
          <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
            <Button
              isLink
              href={"/#about"}
              className={"mr-3"}
              variant={"primary"}
            >
              Explore Now
            </Button>
          </Reveal>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Reveal keyframes={fadeInLeft} duration={500} delay={200}>
            <div>
              <p className="font-bold text-2xl mb-1">37k+</p>
              <p className="opacity-50 ">Like</p>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInLeft} duration={500} delay={400}>
            <div>
              <p className="font-bold text-2xl mb-1">20k+</p>
              <p className="opacity-50 ">Visit</p>
            </div>
          </Reveal>
          <Reveal keyframes={fadeInLeft} duration={500} delay={600}>
            <div>
              <p className="font-bold text-2xl mb-1">99k+</p>
              <p className="opacity-50 ">Download</p>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="flex-1 mt-14 sm:mt-0">
        <JackInTheBox keyframes={fadeInRight} duration={800} delay={200}>
          <div className="relative w-full h-[auto] ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                <div>
                  <Reveal keyframes={fadeInLeft} duration={800} delay={800}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                      alt=""
                    />
                  </Reveal>
                </div>
                <div>
                  <Reveal keyframes={fadeInRight} duration={300} delay={1000}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                      alt=""
                    />
                  </Reveal>
                </div>
                <div>
                  <Reveal
                    keyframes={fadeInDownShorter}
                    duration={1200}
                    delay={1000}
                  >
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                      alt=""
                    />
                  </Reveal>
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <Reveal
                    keyframes={fadeInDownShorter2}
                    duration={1400}
                    delay={1800}
                  >
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                      alt=""
                    />
                  </Reveal>
                </div>
                <div>
                  <Reveal keyframes={fadeInRight} duration={800} delay={800}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                      alt=""
                    />
                  </Reveal>
                </div>

                <div>
                  <Reveal keyframes={fadeInLeft} duration={1100} delay={800}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                      alt=""
                    />
                  </Reveal>
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <Reveal keyframes={fadeInUp} duration={800} delay={1200}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                      alt=""
                    />
                  </Reveal>
                </div>
                <div>
                  <Reveal keyframes={fadeInRight} duration={800} delay={800}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                      alt=""
                    />
                  </Reveal>
                </div>
                <div>
                  <Reveal
                    keyframes={fadeInDownShorter}
                    duration={800}
                    delay={1200}
                  >
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                      alt=""
                    />
                  </Reveal>
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <Reveal keyframes={fadeInLeft} duration={1200} delay={1100}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                      alt=""
                    />
                  </Reveal>
                </div>
                <div>
                  <Reveal
                    keyframes={fadeInDownShorter}
                    duration={800}
                    delay={800}
                  >
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                      alt=""
                    />
                  </Reveal>
                </div>
                <div>
                  <Reveal keyframes={fadeInUp} duration={1000} delay={800}>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                      alt=""
                    />
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </JackInTheBox>
      </div>
    </Container>
  );
};

export default Hero;
