import { HomeCardProps } from '../home/HomeCard';
import { HomeCardIconsEnum } from '../../assets/constants/enums';

export const HomeCardsArray: HomeCardProps[] = [
  {
    titulo: 'Ações',
    subtitulo: 'Nacionais',
    novoBadge: false,
    icon: HomeCardIconsEnum.ACOES,
  },
  {
    titulo: 'Fundos',
    subtitulo: 'De investimentos',
    novoBadge: true,
    icon: HomeCardIconsEnum.FUNDOS,
  },
  {
    titulo: 'Previdências',
    subtitulo: 'Privadas',
    novoBadge: false,
    icon: HomeCardIconsEnum.PREVIDENCIAS,
  },
];
