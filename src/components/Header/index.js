import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logoPurple from '~/assets/logo_purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPurple} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Meu nome</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Nome"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
