import imag1 from "./images/image-product-1.jpg";
import imag2 from "./images/image-product-2.jpg";
import imag3 from "./images/image-product-3.jpg";
import imag4 from "./images/image-product-4.jpg";

import thumb1 from "./images/image-product-1-thumbnail.jpg";
import thumb2 from "./images/image-product-2-thumbnail.jpg";
import thumb3 from "./images/image-product-3-thumbnail.jpg";
import thumb4 from "./images/image-product-4-thumbnail.jpg";
const products = [
  {
    companyName: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description:
      " THese low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    normalPrice: 250,
    discount: 50,
    imgs: [imag1, imag2, imag3, imag4],
    thumbnails: [thumb1, thumb2, thumb3, thumb4],
  },
];
export default products;
