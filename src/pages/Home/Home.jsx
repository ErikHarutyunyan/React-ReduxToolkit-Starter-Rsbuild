import { Counter } from '@components/Counter';

// import { Picture } from '@components/Picture';

// // eslint-disable-next-line
// import VinylImgMeta from '@assets/img/mclean.jpg?w=200;400;800&format=avif;webp;jpg&as=picture';

import { HomeWrapper } from './Home.styled';

const Home = () => {
  return (
    <HomeWrapper>
      <Counter />
      {/* <Picture meta={VinylImgMeta} alt="Vinyls" sizes="33vw" /> */}
    </HomeWrapper>
  );
};

export default Home;
