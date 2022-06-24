import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Filters = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating, bySubgroup, bySubgroupLOL },
  } = CartState();

  // make state for rating

  return (
    <div className="filters">
      <span className="title">Filtros generales</span>
      <span>
        <Form.Check
          inline
          label="Menor a mayor precio"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Mayor a menor precio"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Incluir productos agotados"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Solo entrega rápida"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Puntuación: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <span className="title">Filtro por grupo</span>
      <span>
        <Form.Check
          inline
          label="Subgrupo: Barbie"
          name="group1"
          type="checkbox"
          id={`inline-5`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_SUBGROUP",
            })
          }
          checked={bySubgroup}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Subgrupo: LOL"
          name="group1"
          type="checkbox"
          id={`inline-6`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_SUBGROUP_LOL",
            })
          }
          checked={bySubgroupLOL}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Limpiar filtros
      </Button>
    </div>
  );
};

export default Filters;
