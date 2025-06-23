import React, { lazy } from "react";
import { Suspense } from "../../../utilist";
import { useRoutes } from "react-router-dom";
const ProductDetailes = lazy(() => import("../productDetaile/ProductDetailes"));
const Layout = lazy(() => import("@/components/Layout/Layout"));
const Home = lazy(() => import("../Home/Home"));
const Shop = lazy(() => import("../Shop/Shop"));
const About = lazy(() => import("../About/About"));
const Wishlist = lazy(() => import("../Wishlist/Wishlist"));
const CartCheck = lazy(() => import("../cartCheck/CartCheck"));
const NotFound = lazy(() => import("../NoteFoun/NoteFound"));
const Contact = lazy(() => import("../Contact/Contact"));
const Root = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: (
                <Suspense>
                  <Home />
                </Suspense>
              ),
            },
            {
              path: "/shop",
              element: (
                <Suspense>
                  {" "}
                  <Shop />
                </Suspense>
              ),
            },
            {
              path: "/about",
              element: (
                <Suspense>
                  <About />
                </Suspense>
              ),
            },
            {
              path: "/contact",
              element: (
                <Suspense>
                  <Contact />{" "}
                </Suspense>
              ),
            },
            {
              path: "product/:id",
              element: (
                <Suspense>
                  <ProductDetailes />
                </Suspense>
              ),
            },
            {
              path: "wishlist",
              element: (
                <Suspense>
                  <Wishlist />
                </Suspense>
              ),
            },
            {
              path: "cart",
              element: (
                <Suspense>
                  <CartCheck />
                </Suspense>
              ),
            },
            {
              path: "*",
              element: (
                <Suspense>
                  {" "}
                  <NotFound />{" "}
                </Suspense>
              ),
            },
          ],
        },
      ])}
    </>
  );
};

export default Root;
