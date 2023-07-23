import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";
import useCategoriesHooks from "../../Hooks/category/useCategoriesHooks";

const CategoriesComponent = () => {
  const [data] = useCategoriesHooks();
  return (
    <div className="categories">
      {/* ########## Column Number (One) Have (Two) Row ########## */}
      <div className="column">
        <div className="row">
          <img src="https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <button>
            <Link className="link" to={`/products/${data?.[0]?.id}`}>
              Women
            </Link>
          </button>
        </div>
      </div>

      {/* ########## Column Number (Two) Have (one) Row ########## */}

      <div className="column">
        <div className="row">
          <img src="https://images.pexels.com/photos/1923109/pexels-photo-1923109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <button>
            <Link className="link" to={`/products/${data?.[1]?.id}`}>
              Men
            </Link>
          </button>
        </div>
      </div>

      {/* ########## Column Number (Three) Have Two (Row) => Row number (one) have (two) Column each column have one row  ########## */}
      <div className="column column_l">
        {/* Row Number One */}
        <div className="row">
          <div className="column">
            <div className="row">
              <img src="https://images.pexels.com/photos/3662979/pexels-photo-3662979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <button>
                <Link className="link" to={`/products/${data?.[2]?.id}`}>
                  Children
                </Link>
              </button>
            </div>
          </div>
          <div className="column">
            <div className="row">
              <img src="https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <button>
                <Link className="link" to={`/products/${data?.[3]?.id}`}>
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Row Number Two */}
        <div className="row">
          <img src="https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <button>
            <Link className="link" to="/products/6">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponent;
