export interface Car {
  id: number;
  name: string;
  brand: string;
  price: number;
  year: number;
  mileage: string;
  transmission: string;
  fuelType: string;
  engine: string;
  image: string;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Model 3",
    brand: "Tesla",
    price: 45000,
    year: 2024,
    mileage: "0",
    transmission: "Automatic",
    fuelType: "Electric",
    engine: "Dual Motor",
    image: "https://images.unsplash.com/photo-1576221162298-3d9f04e9f661?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "M5 Competition",
    brand: "BMW",
    price: 105000,
    year: 2024,
    mileage: "0",
    transmission: "Automatic",
    fuelType: "Petrol",
    engine: "4.4L V8",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "911 GT3",
    brand: "Porsche",
    price: 175000,
    year: 2024,
    mileage: "0",
    transmission: "Manual",
    fuelType: "Petrol",
    engine: "4.0L Flat-6",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Range Rover Sport",
    brand: "Land Rover",
    price: 95000,
    year: 2024,
    mileage: "0",
    transmission: "Automatic",
    fuelType: "Hybrid",
    engine: "3.0L I6",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "S-Class",
    brand: "Mercedes-Benz",
    price: 115000,
    year: 2024,
    mileage: "0",
    transmission: "Automatic",
    fuelType: "Petrol",
    engine: "4.0L V8",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "RS7",
    brand: "Audi",
    price: 120000,
    year: 2024,
    mileage: "0",
    transmission: "Automatic",
    fuelType: "Petrol",
    engine: "4.0L V8",
    image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    name: "LC 500",
    brand: "Lexus",
    price: 95000,
    year: 2024,
    mileage: "0",
    transmission: "Automatic",
    fuelType: "Petrol",
    engine: "5.0L V8",
    image: "https://images.unsplash.com/photo-1600705722908-bab1e61c3f9c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    name: "Taycan",
    brand: "Porsche",
    price: 88000,
    year: 2024,
    mileage: "0",
    transmission: "Automatic",
    fuelType: "Electric",
    engine: "Dual Motor",
    image: "https://images.unsplash.com/photo-1614160373191-1ceb8c198d2c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    name: "Ghost",
    brand: "Rolls-Royce",
    price: 350000,
    year: 2024,
    mileage: "0",
    transmission: "Automatic",
    fuelType: "Petrol",
    engine: "6.75L V12",
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    name: "SF90 Stradale",
    brand: "Ferrari",
    price: 625000,
    year: 2024,
    mileage: "0",
    transmission: "Automatic",
    fuelType: "Hybrid",
    engine: "4.0L V8 + 3 Electric Motors",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800"
  }
];