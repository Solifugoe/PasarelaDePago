
import AcerNitro5Image from "./assets/images/acer-nitro-5.jpg";
import AsusROGStrixG17Image from "./assets/images/asus-rog-strix-g17.jpg";
import AsusROGZephyrusM16Image from "./assets/images/asus-rog-zephyrus-m16.jpg";
import LenovoIdeapadGaming3Image from "./assets/images/lenovo-ideapad-gaming-3.jpg";
import MsiGF63ThinImage from "./assets/images/msi-gf63-thin.jpg";
import RazerBlade17Image from "./assets/images/razer-blade-17.jpg";

const arrayProducts = [
  {
    id: "price_1OtcI2Effs6A5GaXkndNk0BK",
    name: "Acer Nitro 5",
    price: 829.99,
    image: AcerNitro5Image,
  },
  {
    id: "price_1OtcJ1Effs6A5GaXdQCJf91s",
    name: "Asus ROG Strix G17",
    price: 2659,
    image: AsusROGStrixG17Image,
  },
  {
    id: "price_1OtcJbEffs6A5GaXPCINafhl",
    name: "Asus ROG Zephyrus M16",
    price: 2839,
    image: AsusROGZephyrusM16Image,
  },
  {
    id: "price_1OtcKfEffs6A5GaXbiEdDZEd",
    name: "Lenovo IdeaPad Gaming 3",
    price: 829.19,
    image: LenovoIdeapadGaming3Image,
  },
  {
    id: "price_1OtcL9Effs6A5GaXWX0Hm6pX",
    name: "MSI GF63 Thin",
    price: 949,
    image: MsiGF63ThinImage,
  },
  {
    id: "price_1OtcLeEffs6A5GaXkSdQrap5",
    name: "Razer Blade 17",
    price: 2299,
    image: RazerBlade17Image,
  },
];

function getProductData(id) {
  let productData = arrayProducts.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product not found for id: " + id);
    return undefined;
  }

  return productData;
}

export { arrayProducts, getProductData };
