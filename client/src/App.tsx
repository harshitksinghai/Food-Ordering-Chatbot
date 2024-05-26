import * as React from "react";
import { FoodItemCard } from "./components/FoodItemCard.tsx";

interface FoodItem {
  image: string;
  title: string;
  price: string;
}

const foodItems: FoodItem[] = [
  { image: "https://www.cookshideout.com/wp-content/uploads/2015/05/Instant-Pot-Pav-Bhaji_FI.jpg", title: "Pav Bhaji", price: "$6" },
  { image: "https://foodstylistpayalgupta.com/wp-content/uploads/2020/12/Foodstylist-for-Chole-bhature.jpg", title: "Chole Bhature", price: "$7" },
  { image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg", title: "Pizza", price: "$8" },
  { image: "https://www.cookwithmanali.com/wp-content/uploads/2017/05/Best-Mango-Mango-Lassi-Recipe.jpg", title: "Mango Lassi", price: "$5" },
  { image: "https://i0.wp.com/amomscookbook.com/wp-content/uploads/2019/07/IMG_9648-2.jpg?resize=730%2C487&ssl=1", title: "Masala Dosa", price: "$6" },
  { image: "https://www.cookwithmanali.com/wp-content/uploads/2019/09/Vegetable-Biryani-Restaurant-Style.jpg", title: "Vegetable Biryani", price: "$9" },
  { image: "https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav.jpg", title: "Vada Pav", price: "$4" },
  { image: "https://www.tomatoblues.com/wp-content/uploads/2012/02/rava-onion-dosa-2-scaled.jpg", title: "Rava Dosa", price: "$7" },
  { image: "https://www.kitchensanctuary.com/wp-content/uploads/2023/10/Samosa-square-FS.jpg", title: "Samosa", price: "$5" },
];

const App: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-1/2 grid grid-cols-3 gap-4 p-4">
        {foodItems.map((item, index) => (
          <FoodItemCard
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
      <div className="w-1/2 flex items-center justify-center">
          <iframe
            allow="microphone;"
            width="400"
            height="600"
            src="https://console.dialogflow.com/api-client/demo/embedded/c8eae4b5-397b-4cd4-971e-b89961561734"
            className="border border-lg rounded-lg"
          ></iframe>
        </div>
      </div>
  );
};

export default App;
