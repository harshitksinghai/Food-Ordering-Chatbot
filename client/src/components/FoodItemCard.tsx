import * as React from "react";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";

interface FoodItemCardProps {
  image: string;
  title: string;
  price: string;
}

export const FoodItemCard: React.FC<FoodItemCardProps> = ({ image, title, price }) => {
  return (
    <Card className="w-[225px] h-[300px] m-2 shadow-lg">
      <CardHeader>
        <CardTitle className="truncate">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={image} alt={title} className="w-full h-[150px] object-cover" />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Label>{price}</Label>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};
