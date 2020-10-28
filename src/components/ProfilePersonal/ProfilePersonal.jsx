import React, { useEffect, useState } from 'react';
import './ProfilePersonal.scss';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import api, { getUserById, updateUser } from '../../../api';
import 'react-toastify/dist/ReactToastify.css';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-K999M97',
  dataLayer: {
    userId: 'dev',
    userProject: 'troud',
    page: 'home',
  },
};
TagManager.initialize(tagManagerArgs);

const ProfilePersonal = () => {
  const history = useHistory();
  const [user, setUser] = useState([]);
  const [values, setValues] = useState('');

  window.dataLayer.push({
    event: 'pageview',
    page: {
      url: '/settings',
      title: 'Perfil',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(
        JSON.parse(sessionStorage.getItem('userData')).user._id,
        {
          userName: values.name || user.userName,
          email: values.email || user.email,
          phone: user.phone,
          //password: values.password || user.password,
        }
      );
      toast('Datos Guardados', {
        type: 'success',
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error);
      toast('No se pudieron guardar los datos', {
        type: 'error',
        autoClose: 2000,
      });
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    history.push('/');
  };

  useEffect(() => {
    if (!sessionStorage) {
      history.push('/');
    }
    const getUser = async () => {
      try {
        const result = await getUserById(
          JSON.parse(sessionStorage.getItem('userData')).user._id
        );
        setUser(result.data.data);
      } catch (error) {
        console.log(error);
        toast('Error al cargar usuario.', {
          type: 'error',
          autoClose: 2000,
        });
      }
    };
    getUser();
  }, []);

  return (
    <>
      <ToastContainer />
      <article className="ProfilePersonal">
        <div>
          <figure className="ProfilePersonal__photoContainer">
            <img
              className="ProfilePersonal__photo"
              width="90"
              src={user.urlPhoto}
              role="presentation"
            />
          </figure>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="Input__container">
            <label>
              Nombre
              <input
                type="text"
                name="name"
                placeholder={user.userName}
                onChange={handleInputChange}
                aria-label="Nombre"
              />
            </label>
          </div>
          <div className="Input__container">
            <label>
              Correo
              <input
                type="email"
                name="email"
                placeholder={user.email}
                onChange={handleInputChange}
                aria-label="Correo electrónico"
              />
            </label>
          </div>
          <div className="Input__container">
            <label>
              Teléfono
              <p
                className="phone"
                placeholder={user.phone}
                type="text"
                name="phone"
              >
                {user.phone}
              </p>
            </label>
          </div>
          <div className="ProfilePersonal__change-password">
            <input id="changePassword" type="checkbox" />
            <label htmlFor="changePassword">Cambiar contraseña</label>
            <div className="expand">
              <div className="Input__container">
                <label>
                  Nueva contraseña
                  <input
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    aria-label="Nueva contraseña"
                  />
                </label>
              </div>
              <div className="Input__container">
                <label>
                  Confirmar contraseña
                  <input
                    type="password"
                    name="password2"
                    onChange={handleInputChange}
                    aria-label="Confirmar contraseña"
                  />
                </label>
              </div>
            </div>
          </div>
          <button
            className="ProfilePersonal__button"
            aria-label="Botón guardar cambios"
          >
            Guardar cambios
          </button>
        </form>
        <div className="logged-options">
          <a
            className="logged-options__logout"
            onClick={handleLogout}
            aria-label="Cerrar sesión"
          >
            Cerrar sesión
          </a>
        </div>
      </article>
    </>
  );
};

export default ProfilePersonal;
