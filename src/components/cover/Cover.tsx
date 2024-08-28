import React from "react";

// Importing: Styles.
import "./cover.css";

// Importing: Router.
import { useNavigate } from "react-router-dom";

// Importing: Constants.
import { coverItems } from "../../commons/constants";

export default function Cover({ full = false, id }: CoverInterface) {
  const navigate = useNavigate();
  const coverClass = full ? "cover cover-full" : "cover";

  const getItemClass = (itemId: string) => {
    if (full) return "cover__image";
    if (itemId === id) return "cover__image cover__image-full";
    return "cover__image cover-back";
  };

  return (
    <>
      <div className={coverClass}>
        {coverItems.map((item) => (
          <div className={getItemClass(item.id)} id={item.id} key={item.id}>
            <div className="cover__image__card">
              <div className="cover-front">
                <h2 className="cover__title">{item.title}</h2>

                <button
                  className="discover"
                  id={`${item.id}__button}`}
                  onClick={() => navigate(item.id, { state: { id: item.id } })}
                >
                  Scopri di più <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
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
