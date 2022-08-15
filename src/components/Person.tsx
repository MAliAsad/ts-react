import React, { FC, useState, ChangeEvent } from "react";

export enum HairColor {
  Blonde = "Your hair is blonde",
  Brown = "Your hair is Brown",
  Black = "Your hair is Black",
}

type Props = {
  name: string;
  age: number;
  isMarried: boolean;
  hairColor: HairColor;
  getName?: (name: string) => string;
};

const Person: FC<Props> = ({ name, age, isMarried, getName, hairColor }) => {
  const [country, setCountry] = useState<string | null>(null);
  type NameType = "Ali" | "Asad";
  const nameForType: NameType = "Asad";

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h2>{nameForType}</h2>
      <h1>{age}</h1>
      <h1>{isMarried ? "Married" : "Not Married"}</h1>
      <input placeholder="Write down your country..." onChange={handleChange} />
      <h1>{country}</h1>
      <h1>{hairColor}</h1>
    </div>
  );
};

export default Person;
