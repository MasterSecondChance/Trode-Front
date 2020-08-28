import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteArticleById, getArticleById } from '../../../api/index';
import './FullCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faEllipsisV, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const FullCard = (props) => {

  const [article, setArticle] = useState({
    type: '',
    size: '',
    name: '',
    brand: '',
    condition: '',
    gender: '',
    description: '',
    color: '',
    urlPhoto: '',
    city: '',
  });

  const handleDeleteArticle = () => {
    const deleteArticle = async () => {
      try {
        await deleteArticleById(props.id);
        history.push('/user');
      } catch (error) {
        toast(error, {
          type: 'error',
          autoClose: 2000,
        });
      }
    };

    deleteArticle();
  };

  useEffect(() => {
    const getArticle = async () => {
      try {
        const result = await getArticleById(props.id);
        setArticle(result.data.data);
      } catch (error) {
        toast(error, {
          type: 'error',
          autoClose: 2000,
        });
      }
    };

    getArticle();
  }, []);

  return (
    <>
      <div className='FullCard'>
        <div className='FullCard__Info'>

          <div className='FullCard__imag-wrapper'>
            <div className='FullCard__Info__Header'>
              <button type='button' onClick={handleDeleteArticle}>
                <FontAwesomeIcon className='options delete' icon={faTrash} title='Eliminar' />
              </button>
              <Link to={`/modify/${props.id}`}>
                <FontAwesomeIcon className='options edit' icon={faPen} title='Editar' />
              </Link>
            </div>
            <div className='FullCard__Info__Img'>
              <img className='FullCard__Info__Img__Image' src={article.urlPhoto} alt='Img FullCard' />
              <div className='FullCard__Info__Img__Gender'><FontAwesomeIcon className='faMars' icon={faMars} title='Hombre' /></div>
              <div className='FullCard__Info__Img__Size'>{article.size}</div>
            </div>
          </div>

          <div className='FullCard__Info-wrapper'>
            <p className='FullCard__Info__Name'>{article.name}</p>
            <div className='FullCard__Info__Desc'>
              <p>{article.description}</p>
            </div>
            <div className='FullCard__Details'>
              <div className='FullCard__Details--item'>
                <p className='FullCard__Details--item-title'>Marca</p>
                <p className='FullCard__Details--item-text'>{article.brand}</p>
              </div>
              <div className='FullCard__Details--item'>
                <p className='FullCard__Details--item-title'>Estado</p>
                <p className='FullCard__Details--item-text'>{article.condition}</p>
              </div>
              <div className='FullCard__Details--item'>
                <p className='FullCard__Details--item-title'>Categoria</p>
                <p className='FullCard__Details--item-text'>{article.type}</p>
              </div>
              <div className='FullCard__Details--item'>
                <p className='FullCard__Details--item-title'>Ciudad</p>
                <p className='FullCard__Details--item-text'>{article.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullCard;
