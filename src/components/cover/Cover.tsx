import React from "react";

// Importing: Styles.
import "./cover.css";

// Importing: Constants.
import { coverItems } from "../../commons/constants";

export default function Cover({ full = false, id }: CoverInterface) {
  const coverClass = full ? "cover cover-full" : "cover";

  const getItemClass = (itemId: string) => {
    if (full) return "cover__image";
    if (itemId === id) return "cover__image cover__image-full";
    return "cover__image cover-back";
  };

  return (
    <>
      <div className={coverClass} id="home">
        {coverItems.map((item) => (
          <div className={getItemClass(item.id)} id={item.id} key={item.id}>
            <div className="cover__image__card">
              <h2 className="cover__title">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

interface CoverInterface {
  id?: string;
  full?: boolean;
}
