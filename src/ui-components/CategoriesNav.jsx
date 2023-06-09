import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
const CategoriesNavBarStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;

  & .categoriebtns {
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }
  & .categoriebtns:focus {
  }
  & .categoriebtns img {
    height: 3rem;
    width: auto;
    transition: all 0.2s ease-in-out;
  }
  & .categoriebtns img:hover {
    transform: scale(1.5);
  }
  @media (max-width: 1082px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    & .categoriebtns img {
      height: 2.5rem;
      width: auto;
      transition: all 0.2s ease-in-out;
    }
    & .categoriebtns {
      background: none;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.7rem;
      cursor: pointer;
    }
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    & .categoriebtns img {
      height: 1.6rem;
      width: auto;
      transition: all 0.2s ease-in-out;
    }
    & .categoriebtns {
      background: none;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    & .categoriebtns img {
      height: 1.2rem;
      width: auto;
      transition: all 0.2s ease-in-out;
    }
    & .categoriebtns {
      background: none;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }
    & p {
      font-size: 10px;
    }
  }
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 3rem;
    & .categoriebtns img {
      height: 2rem;
      width: auto;
      transition: all 0.2s ease-in-out;
    }
    & .categoriebtns {
      background: none;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.3rem;
      cursor: pointer;
    }
    & p {
      font-size: 7px;
    }
  }
`;

const CategoriesNav = () => {
  const { setCategory } = useContext(UserContext);
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    setCategory(category);
    navigate('/categories/category');
  };
  return (
    <CategoriesNavBarStyled>
      <button className="categoriebtns" onClick={() => navigate('/products')}>
        <img
          src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1679651540/all-inclusive_utu9hb.png"
          alt="icon"
        />
        <p>All</p>
      </button>
      <button
        className="categoriebtns"
        onClick={() => handleCategoryClick('movies, books & music')}
      >
        <img
          src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679413832/SWAPit/3729559_fvj3nx.png"
          alt="icon"
        />
        <p>Movies, Books & Music</p>
      </button>
      <button
        type="button"
        className="categoriebtns"
        onClick={() => handleCategoryClick('videogames')}
      >
        <img
          src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679413101/SWAPit/9022479_bztwie.png"
          alt="icon"
        />
        <p>Videogames</p>
      </button>
      <button
        type="button"
        className="categoriebtns"
        onClick={() => handleCategoryClick('appliances')}
      >
        <img
          src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679410936/SWAPit/6020736_dvs8rj.png"
          alt="icon"
        />
        <p>Appliances</p>
      </button>
      <button className="categoriebtns" onClick={() => handleCategoryClick('electronic')}>
        <img
          src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679411365/SWAPit/408533_wvtjvm.png"
          alt="icon"
        />
        <p>Electronic</p>
      </button>
      <button
        className="categoriebtns"
        onClick={() => handleCategoryClick('sports & leisure')}
      >
        <img
          src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679411476/SWAPit/4163679_flhkfw.png"
          alt="icon"
        />
        <p>Sports & Leisure</p>
      </button>
      <button className="categoriebtns" onClick={() => handleCategoryClick('home')}>
        <img
          src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679411613/SWAPit/2590393_qgw0c8.png"
          alt="icon"
        />
        <p>Home</p>
      </button>
      <button className="categoriebtns" onClick={() => handleCategoryClick('other')}>
        <img
          src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679413744/SWAPit/3434148_japhcx.png"
          alt="icon"
        />
        <p>Other</p>
      </button>
    </CategoriesNavBarStyled>
  );
};

export default CategoriesNav;
