import imgSocialF from '../public/socials/f/f.png'
import imgSocialVK from '../public/socials/vk/vk.png'
import imgSocialYoutube from '../public/socials/youtube/youtube.png'
import imgSocialInst from '../public/socials/inst/inst.png'
import imgSocialTwitter from '../public/socials/twitter/twitter.png'
import imgSocialLinked from '../public/socials/linkedin/linked.png'

import {MARKERS} from '../constants';

const topMenuItems = [
  {name: 'О компании', onClick: ()=>{}},
  {name: 'Продукты', onClick: ()=>{}},
  {name: 'Наука', onClick: ()=>{}},
  {name: 'Производство', onClick: ()=>{}},
  {name: 'Карьера', onClick: ()=>{}},
  {name: 'Устойчивое развитие', onClick: ()=>{}},
  {name: 'Новости', onClick: ()=>{}},
  {name: 'Контакты', onClick: ()=>{}},
  {name: 'Партнерство', onClick: ()=>{}},
];

const linksSocials = [
  {icon: imgSocialF, link: 'htpps://'},
  {icon: imgSocialVK, link: 'htpps://'},
  {icon: imgSocialYoutube, link: 'htpps://'},
  {icon: imgSocialInst, link: 'htpps://'},
  {icon: imgSocialTwitter, link: 'htpps://'},
  {icon: imgSocialLinked, link: 'htpps://'},
];

const bottomMenuItems = [
  {title: 'Курс на выздоровление', link: 'https://'},
  {title: 'Студентам', link: 'https://'},
  {title: 'Безопасность препаратов', link: 'https://'},
  {title: 'Коммерческая политика', link: 'https://'},
  {title: 'Политика в отношении обработки ПДн', link: 'https://'},
  {title: 'Пользовательское соглашение', link: 'https://'},
  {title: 'Использование файлов Cookie', link: 'https://'},
  {title: 'Антикоррупционная политика', link: 'https://'},
  {title: 'Политика по качеству', link: 'https://'},
];

const tableHeaders = [
  'Наименование',
  'Механизм действия терапевтического агента',
  'Показание',
  'Разработка',
  'КИ Фаза I',
  'КИ Фаза II',
  'КИ Фаза III',
  'Регистрация'
];

const tableTitles = [
  'Информация о продукте',
  'Этапы разработки',
];

const tableData = [
  { title: 'ANB-4', description: 'SMN1 transgene AAV9', pro: 'СМА 1 типа', phase: 0, marker: MARKERS.ORFA },
  { title: 'ANB-2', description: 'Factor-IX transgene AAV5', pro: 'Гемофилия B', phase: 0, marker: MARKERS.ORFA },
  { title: 'Сампэгинтерферон бета-1а (BCD-054)', description: 'Pegylated interferon beta-1a', pro: 'Рассеянный склероз', phase: 3, marker: MARKERS.AUTO },
  { title: 'Пролголимаб (BCD-100)', description: 'anti-PD-1 mAb', pro: 'НМРЛ', phase: 3, marker: MARKERS.ONCO },
  { title: 'Пролголимаб (BCD-100)', description: 'anti-PD-1 mAb', pro: 'Рак шейки матки', phase: 3, marker: MARKERS.ONCO },
  { title: 'Дивозилимаб (BCD-132)', description: 'anti-CD20 mAb', pro: 'Рассеянный склероз', phase: 3, marker: MARKERS.AUTO },
  { title: 'BCD-166', description: 'anti-GITR mAb', pro: 'Солидные опухоли', phase: 0, marker: MARKERS.ONCO },

  { title: 'Пролголимаб + Нурулимаб (BCD-217)', description: 'anti-CTLA-4 mAb +anti-PD1 mAb', pro: 'Меланома', phase: 2, marker: MARKERS.ONCO },
  { title: 'BCD-223', description: 'anti-IL10 mAb', pro: 'Солидные опухоли', phase: 0, marker: MARKERS.ONCO },
  { title: 'BCD-225', description: 'anti-IL15SA mAb', pro: 'Солидные опухоли', phase: 0, marker: MARKERS.ONCO },
  { title: 'BCD-245', description: 'anti-GD-2 mAb', pro: 'Нейробластома', phase: 0, marker: MARKERS.ORFA },
  { title: 'BCD-166', description: 'anti-GITR mAb', pro: 'Солидные опухоли', phase: 0, marker: MARKERS.ONCO },
  { title: 'BCD-166', description: 'anti-GITR mAb', pro: 'Солидные опухоли', phase: 0, marker: MARKERS.ONCO },
  { title: 'Вакцина для профилактики COVID-19 (BCD-250)', description: 'SARS-CoV-2 AAV5-based vaccine', pro: 'Профилактика COVID-19', phase: 1, marker: MARKERS.OTHER },
  { title: 'Диметил Фумарат (BCD-058)', description: 'activator of nuclear factor erythroid 2 [NF-E2]-related factor 2', pro: 'Рассеянный склероз', phase: 4, marker: MARKERS.AUTO },
  { title: 'Сунитиниб (BCD-200)', description: 'indolinone derivative and tyrosine kinase inhibitor', pro: 'Почечно-клеточный рак', phase: 3, marker: MARKERS.ONCO },
  { title: 'Пембролизумаб (BCD-201)', description: 'PD-1 inhibitor', pro: 'Солидные опухоли Онкогематология', phase: 1, marker: MARKERS.ONCO },

];

const filters = [
  'Тип продукта',
  'Тип молекулы',
  'Платформа',
  'Терапевтическая область',
];

const markers = [
  {title: 'Орфанные заболевания', marker: MARKERS.ORFA},
  {title: 'Аутоиммунные заболевания', marker: MARKERS.AUTO},
  {title: 'Онкология', marker: MARKERS.ONCO},
  {title: 'Другое', marker: MARKERS.OTHER},
];

export default {
  topMenuItems,
  linksSocials,
  bottomMenuItems,
  tableTitles,
  tableHeaders,
  tableData,
  filters,
  markers,
  MARKERS,
}
