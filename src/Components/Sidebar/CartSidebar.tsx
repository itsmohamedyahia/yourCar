import { CarsDataContext } from "../../utils/carsDataContext";
import { useContext } from "react";
import "./CartSidebar.scss";
import { SidebarStateContext } from "../../utils/SidebarStateContext";
import DeleteIcon from "./DeleteIcon";

export default function CartSidebar() {
  const [carsData, setCarsData] = useContext(CarsDataContext);
  const [, , isActive, setIsActive] = useContext(SidebarStateContext);
  return (
    <aside className={`cart-sidebar ${!isActive && "side-hidden"}`}>
      {carsData.filter((obj) => obj.inCart > 0).length === 0 && (
        <div className="cart-sidebar__empty">
          Cart is EMPTY. add items to get started
        </div>
      )}
      {carsData
        .filter((obj) => obj.inCart > 0)
        .map((obj) => (
          <div className="cart-sidebar__card">
            <div className="cart-sidebar__card__left-side">
              <h4 className="cart-sidebar__card__heading">{obj.class}</h4>
              <p className="cart-sidebar__card__post-heading">{obj.name}</p>

              <div className="cart-sidebar__card__control">
                <button className="cart-sidebar__card__control__decrement-btn cart-sidebar__card__control__btn">
                  -
                </button>
                <div className="cart-sidebar__card__control__number">8</div>
                <button className="cart-sidebar__card__control__increment-btn cart-sidebar__card__control__btn">
                  +
                </button>
                <DeleteIcon />
              </div>
            </div>
            <div className="cart-sidebar__card__right-side">
              <img className="cart-sidebar__card__img" src={obj.image}></img>
            </div>
          </div>
        ))}
    </aside>
  );
}
