import { Button, Container, Footer, Hero, Sponsor } from "@/components";
import React from "react";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInRight, fadeInUp } from "@/keyframes";
const Home = () => {
  return (
    <>
      <div className="h-full overflow-hidden mt-30 sm:mt-60" id="top">
        <Hero />
        <Sponsor />
        <section class="container mx-auto px-6 p-10">
          <h2 class="text-4xl font-bold text-center  mb-8">Features</h2>
          <div class="container my-24 mx-auto md:px-6">
            <section class="mb-32 text-center md:text-left">
              <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                <Reveal
                  keyframes={fadeInDownShorter}
                  duration={450}
                  delay={289}
                >
                  <div class="mb-6 md:mb-0">
                    <div
                      class="relative mb-6 overflow-hidden
                   rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg"
                        class="w-full"
                        alt="Louvre"
                      />

                      <a href="#!">
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 class="mb-3 text-2xl font-bold">
                      Welcome to California
                    </h3>
                    <div class="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-2 h-5 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                        />
                      </svg>
                      Travels
                    </div>
                    <p class="mb-6   ">
                      <small>
                        Published <u>13.01.2022</u> by
                        <a href="#!">Anna Maria Doe</a>
                      </small>
                    </p>
                    <p class="   ">
                      Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                      placerat vulputate. Ut vulputate est non quam dignissim
                      elementum. Donec a ullamcorper diam.
                    </p>
                  </div>
                </Reveal>
              </div>

              <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                <div class="mb-6 md:order-2 md:mb-0">
                  <div
                    class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg"
                      class="w-full"
                      alt="Louvre"
                    />

                    <a href="#!">
                      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                    </a>
                  </div>
                </div>
                <div class="md:order-1">
                  <h3 class="mb-3 text-2xl font-bold">Exhibition in Paris</h3>
                  <div class="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="mr-2 h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                      />
                    </svg>
                    Art
                  </div>
                  <p class="mb-6    ">
                    <small>
                      Published <u>12.01.2022</u> by
                      <a href="#!">Halley Frank</a>
                    </small>
                  </p>
                  <p class="   ">
                    Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                    diam orci, nec ornare metus semper sed. Integer volutpat
                    ornare erat sit amet rutrum.
                  </p>
                </div>
              </div>

              <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                <Reveal keyframes={fadeInUp} duration={450} delay={289}>
                  <div class="mb-6 md:mb-0">
                    <div
                      class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/059.jpg"
                        class="w-full"
                        alt="Louvre"
                      />

                      <a href="#!">
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 class="mb-3 text-2xl font-bold">Stock market boom</h3>
                    <div class="mb-3 flex items-center justify-center text-sm font-medium text-yellow-600 md:justify-start">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-2 h-5 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                      Business
                    </div>
                    <p class="mb-6    ">
                      <small>
                        Published <u>10.01.2022</u> by
                        <a href="#!">Joe Svan</a>
                      </small>
                    </p>
                    <p class="   ">
                      Curabitur tristique, mi a mollis sagittis, metus felis
                      mattis arcu, non vehicula nisl dui quis diam. Mauris ut
                      risus eget massa volutpat feugiat. Donec.
                    </p>
                  </div>
                </Reveal>
              </div>
            </section>
          </div>

          <Reveal keyframes={fadeInRight} duration={450} delay={289}>
            <div class="container my-24 mx-auto md:px-6">
              <section class="mb-32">
                <div class="container mx-auto text-center lg:text-left xl:px-32">
                  <div class="flex grid items-center lg:grid-cols-2">
                    <div class="mb-12 lg:mb-0">
                      <div class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                        <h2 class="mb-8 text-3xl font-bold">
                          Enjoy the moment
                        </h2>
                        <p class="mb-8 pb-2     lg:pb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. A soluta corporis voluptate ab error quam
                          dolores doloremque, quae consectetur.
                        </p>

                        <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                          <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              class="mr-2 h-5 w-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Best team
                          </p>

                          <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              class="mr-2 h-5 w-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Best quality
                          </p>

                          <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              class="mr-2 h-5 w-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Best experience
                          </p>
                        </div>

                        <p class="mb-0    ">
                          In ac turpis justo. Vivamus auctor quam vitae odio
                          feugiat pulvinar. Sed semper ligula sed lorem
                          tincidunt dignissim. Nam sed cursus lectus. Proin non
                          rutrum magna. Proin gravida, justo et imperdiet
                          tristique, turpis nisi viverra est, nec posuere ex
                          arcu sit amet erat. Sed a dictum sem. Duis pretium
                          condimentum nulla, ut aliquet erat auctor sed. Aenean
                          facilisis neque id ligula maximus scelerisque. Nunc
                          sed velit rhoncus, interdum dolor at, lacinia lacus.
                          Proin eleifend viverra posuere. Ut commodo risus
                          lacus, ac scelerisque quam aliquam dictum. Etiam
                          dignissim pulvinar eros eget auctor. Quisque congue
                          turpis quis libero ullamcorper imperdiet. Vivamus a
                          orci maximus, dignissim ligula a, congue dui. Morbi et
                          lectus sit amet neque luctus viverra.
                        </p>
                      </div>
                    </div>

                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/117.jpg"
                        class="w-full rounded-lg shadow-lg dark:shadow-black/20"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Reveal>

          <div class="container my-12 mx-auto md:px-6">
            <section class="mb-32 text-center">
              <div class="px-6 py-12 md:px-12">
                <div class="container mx-auto xl:px-32">
                  <div class="flex grid items-center lg:grid-cols-2">
                    <div class="md:mb-12 lg:mb-0">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/053.jpg"
                        class="lg:rotate-[-3deg] w-full rounded-lg shadow-lg dark:shadow-black/20"
                        alt="image"
                      />
                    </div>
                    <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                      <div
                        class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] 
                     py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                      backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20
                       md:py-12 lg:-ml-14"
                      >
                        <h1 class="mt-2 mb-8 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                          Time is money <br />
                          <span class="text-primary dark:text-primary-400">
                            Do it now!
                          </span>
                        </h1>
                        <button
                          type="button"
                          class="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Start
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <Container>
          <div
            className={
              "bg-gradient-to-b from-[#B75CFF] to-[#671AE4] rounded-xl py-20 px-10 flex items-center justify-center shadow-lg flex-col mb-44"
            }
          >
            <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mb-5 w-full md:w-2/5 leading-snug text-center">
              Get ready to collect our NFT
            </h2>
            <div className="flex mt-10">
              <Reveal duration={1000} delay={200}>
                <Button
                  isLink
                  href={"#"}
                  className={"mr-3"}
                  variant={"primary"}
                >
                  Get Start
                </Button>
              </Reveal>
            </div>
          </div>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Home;
