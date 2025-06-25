// Шаблоны категорий
import {
    averagesBySlug, BARANOVICHI_INDEXES,
    BOBRUYSK_INDEXES,
    BORISOV_INDEXES, BREST_INDEXES, GOMEL_INDEXES, GRODNO_INDEXES, LIDA_INDEXES, MINSK_INDEXES,
    MOGILEV_INDEXES, MOZIR_INDEXES,
    ORSHA_INDEXES,
    overallAverage, PINSK_INDEXES, VITEBSK_INDEXES
} from "@/app/mocks/cities";

const demografic = {
    name: 'ДЕМОГРАФИЧЕСКИЙ ПОТЕНЦИАЛ',
    id: 'ДЕМОГРАФИЧЕСКИЙ ПОТЕНЦИАЛ',
    avarageByClaster: '33,33, avarageByCitiesIndexoverallAverage.',
    avarageByCitiesIndex: '33,33',
    color: 'rgb(64, 84, 179)',
    nodes: [
        {name: 'Уровень рождаемости', id: 'Уровень рождаемости', color: 'rgb(64, 84, 179)'},
        {name: 'Естественный прирост населения', id: 'Естественный прирост населения', color: 'rgb(64, 84, 179)'},
        {name: 'Миграционный прирост', id: 'Миграционный прирост', color: 'rgb(64, 84, 179)'},
        {name: 'Коэффициент старения населения', id: 'Коэффициент старения населения', color: 'rgb(64, 84, 179)'},
        {name: 'Плотность населения в городе', id: 'Плотность населения в городе', color: 'rgb(64, 84, 179)'}
    ]
};

const zanyat = {
    name: 'ЗАНЯТОСТИ И УСЛОВИЙ ТРУДА',
    id: 'ЗАНЯТОСТИ И УСЛОВИЙ ТРУДА',
    avarageByClaster: '33,33, avarageByCitiesIndexoverallAverage.',
    avarageByCitiesIndex: '33,33',
    color: 'rgb(215, 90, 0)',
    nodes: [
        {name: 'Уровень занятости (%)', id: 'Уровень занятости (%)', color: 'rgb(215, 90, 0)'},
        {name: 'Уровень безработицы (%)', id: 'Уровень безработицы (%)', color: 'rgb(215, 90, 0)'},
        {name: 'Количество вакансий в области', id: 'Количество вакансий в области', color: 'rgb(215, 90, 0)'},
        {
            name: 'Численность работников во вредных условиях',
            id: 'Численность работников во вредных условиях',
            color: 'rgb(215, 90, 0)'
        },
        {name: 'Отработанные человеко-часы', id: 'Отработанные человеко-часы', color: 'rgb(215, 90, 0)'}
    ]
};

const edu = {
    name: 'ДОСТУПНОСТЬ ОБРАЗОВАНИЯ',
    id: 'ДОСТУПНОСТЬ ОБРАЗОВАНИЯ',
    avarageByClaster: '33,33, avarageByCitiesIndexoverallAverage.',
    avarageByCitiesIndex: '33,33',
    color: 'rgb(242, 69, 61)',
    nodes: [
        {
            name: 'Доступность дошкольного образования (мест на 100 детей)',
            id: 'Доступность дошкольного образования (мест на 100 детей)',
            color: 'rgb(242, 69, 61)'
        },
        {
            name: 'Доступность школьного образования (учеников на 1 учителя)',
            id: 'Доступность школьного образования (учеников на 1 учителя)',
            color: 'rgb(242, 69, 61)'
        },
        {
            name: 'Охват техническим/профессиональным eduм (%)',
            id: 'Охват техническим/профессиональным eduм (%)',
            color: 'rgb(242, 69, 61)'
        },
        {
            name: 'Инклюзивность (доля детей-инвалидов в образовании)',
            id: 'Инклюзивность (доля детей-инвалидов в образовании)',
            color: 'rgb(242, 69, 61)'
        },
        {
            name: 'Качество образования (доля награжденных учащихся)',
            id: 'Качество образования (доля награжденных учащихся)',
            color: 'rgb(242, 69, 61)'
        }
    ]
};

const health = {
    name: 'ЗДОРОВЬЕ И МЕДИЦИНА',
    id: 'health И МЕДИЦИНА',
    avarageByClaster: '33,33, avarageByCitiesIndexoverallAverage.',
    avarageByCitiesIndex: '33,33',
    color: 'rgb(44, 152, 240)',
    nodes: [
        {
            name: 'Обеспеченность врачами (на 10 000 населения)',
            id: 'Обеспеченность врачами (на 10 000 населения)',
            color: 'rgb(44, 152, 240)'
        },
        {
            name: 'Обеспеченность больничными койками (на 10 000 населения)',
            id: 'Обеспеченность больничными койками (на 10 000 населения)',
            color: 'rgb(44, 152, 240)'
        },
        {
            name: 'Заболеваемость (случаев на 100 000 населения)',
            id: 'Заболеваемость (случаев на 100 000 населения)',
            color: 'rgb(44, 152, 240)'
        },
        {
            name: 'Уровень инвалидизации (на 10 000 населения)',
            id: 'Уровень инвалидизации (на 10 000 населения)',
            color: 'rgb(44, 152, 240)'
        },
        {
            name: 'Ожидаемая продолжительность жизни (лет)',
            id: 'Ожидаемая продолжительность жизни (лет)',
            color: 'rgb(44, 152, 240)'
        }
    ]
};

const blago = {
    name: 'МАТЕРИАЛЬНОЕ БЛАГО',
    id: 'МАТЕРИАЛЬНОЕ blago',
    avarageByClaster: '33,33, avarageByCitiesIndexoverallAverage.',
    avarageByCitiesIndex: '33,33',
    color: 'rgb(97, 125, 138)',
    nodes: [
        {name: 'Среднедушевые доходы (в месяц)', id: 'Среднедушевые доходы (в месяц)', color: 'rgb(97, 125, 138)'},
        {name: 'Доля расходов на медицину (%)', id: 'Доля расходов на медицину (%)', color: 'rgb(97, 125, 138)'},
        {
            name: 'Потребление продуктов питания (калорий/день)',
            id: 'Потребление продуктов питания (калорий/день)',
            color: 'rgb(97, 125, 138)'
        },
        {name: 'Жилищные условия (м²/чел)', id: 'Жилищные условия (м²/чел)', color: 'rgb(97, 125, 138)'},
        {
            name: 'Обеспеченность товарами длительного пользования (% домохозяйств)',
            id: 'Обеспеченность товарами длительного пользования (% домохозяйств)',
            color: 'rgb(97, 125, 138)'
        }
    ]
};

const socpod = {
    name: 'СОЦИАЛЬНАЯ ПОДДЕРЖКА',
    id: 'СОЦИАЛЬНАЯ ПОДДЕРЖКА',
    avarageByClaster: '33,33, avarageByCitiesIndexoverallAverage.',
    avarageByCitiesIndex: '33,33',
    color: 'rgb(208, 162, 0)',
    nodes: [
        {
            name: 'Средний размер пенсий (в % от БПМ)',
            id: 'Средний размер пенсий (в % от БПМ)',
            color: 'rgb(208, 162, 0)'
        },
        {
            name: 'Охват семей социальными пособиями (доля семей с детьми, получающих адресную помощь)',
            id: 'Охват семей социальными пособиями (доля семей с детьми, получающих адресную помощь)',
            color: 'rgb(208, 162, 0)'
        },
        {
            name: 'Доля детей-сирот в интернатах (на 10 000 детского населения)',
            id: 'Доля детей-сирот в интернатах (на 10 000 детского населения)',
            color: 'rgb(208, 162, 0)'
        },
        {
            name: 'Обеспеченность семейными формами устройства (доля детей в приёмных/опекунских семьях от общего числа сирот)',
            id: 'Обеспеченность семейными формами устройства (доля детей в приёмных/опекунских семьях от общего числа сирот)',
            color: 'rgb(208, 162, 0)'
        },
        {
            name: 'Доступность соцуслуг (число центров соцобслуживания на 100 000 населения)',
            id: 'Доступность соцуслуг (число центров соцобслуживания на 100 000 населения)',
            color: 'rgb(208, 162, 0)'
        }
    ]
};

const secure = {
    name: 'БЕЗОПАСНОСТЬ И ПРАВОПОРЯДОК',
    id: 'secure И ПРАВОПОРЯДОК',
    avarageByClaster: '33,33, avarageByCitiesIndexoverallAverage.',
    avarageByCitiesIndex: '33,33',
    color: 'rgb(80, 174, 85)',
    nodes: [
        {
            name: 'Уровень преступности (количество преступлений на 100 000 населения)',
            id: 'Уровень преступности (количество преступлений на 100 000 населения)',
            color: 'rgb(80, 174, 85)'
        },
        {
            name: 'Число преступлений, связанных с наркотиками',
            id: 'Число преступлений, связанных с наркотиками',
            color: 'rgb(80, 174, 85)'
        },
        {
            name: 'Численность осужденных по приговорам судов',
            id: 'Численность осужденных по приговорам судов',
            color: 'rgb(80, 174, 85)'
        },
        {
            name: 'Количество ДТП по вине водителей в состоянии опьянения',
            id: 'Количество ДТП по вине водителей в состоянии опьянения',
            color: 'rgb(80, 174, 85)'
        },
        {
            name: 'Численность детей, чьи родители лишены прав',
            id: 'Численность детей, чьи родители лишены прав',
            color: 'rgb(80, 174, 85)'
        }
    ]
};

const liv = {
    name: 'ЖИЛИЩНЫЕ УСЛОВИЯ',
    id: 'ЖИЛИЩНЫЕ УСЛОВИЯ',
    avarageByClaster: '33,33, avarageByCitiesIndexoverallAverage.',
    avarageByCitiesIndex: '33,33',
    color: 'rgb(31, 173, 193)',
    nodes: [
        {name: 'Площадь на человека (м²/чел)', id: 'Площадь на человека (м²/чел)', color: 'rgb(31, 173, 193)'},
        {name: 'Доля ветхого и аварийного фонда', id: 'Доля ветхого и аварийного фонда', color: 'rgb(31, 173, 193)'},
        {
            name: 'Доля получивших жильё от числа нуждающихся',
            id: 'Доля получивших жильё от числа нуждающихся',
            color: 'rgb(31, 173, 193)'
        },
        {
            name: 'Уровень благоустройства жилищного фонда (%)',
            id: 'Уровень благоустройства жилищного фонда (%)',
            color: 'rgb(31, 173, 193)'
        },
        {
            name: 'Протяжённость уличных сетей (км на 1000 чел)',
            id: 'Протяжённость уличных сетей (км на 1000 чел)',
            color: 'rgb(31, 173, 193)'
        }
    ]
};

const capital = {
    name: 'РАЗВИТИЕ ЧЕЛОВЕЧЕСКОГО КАПИТАЛА',
    id: 'РАЗВИТИЕ ЧЕЛОВЕЧЕСКОГО capitalА',
    avarageByClaster: '33,33, avarageByCitiesIndexoverallAverage.',
    avarageByCitiesIndex: '33,33',
    color: 'rgb(103, 64, 180)',
    nodes: [
        {
            name: 'Число организаций культуры на 1000 населения',
            id: 'Число организаций культуры на 1000 населения',
            color: 'rgb(103, 64, 180)'
        },
        {
            name: 'Число спортивных сооружений на 1000 населения',
            id: 'Число спортивных сооружений на 1000 населения',
            color: 'rgb(103, 64, 180)'
        },
        {name: 'Библиотечная обеспеченность', id: 'Библиотечная обеспеченность', color: 'rgb(103, 64, 180)'},
        {
            name: 'Охват детским творческим eduм',
            id: 'Охват детским творческим eduм',
            color: 'rgb(103, 64, 180)'
        },
        {
            name: 'Уровень развития спортивной инфраструктуры',
            id: 'Уровень развития спортивной инфраструктуры',
            color: 'rgb(103, 64, 180)'
        }
    ]
};

export const citiesWithData: any = [
    // Минск
    {
        slug: 'minsk',
        nodes: [
            {...demografic, cityIndex: MINSK_INDEXES.demography_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.demography_index, avarageByCitiesIndex: overallAverage.demography_index},
            {...zanyat, cityIndex: MINSK_INDEXES.employment_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.employment_index, avarageByCitiesIndex: overallAverage.employment_index},
            {...edu, cityIndex: MINSK_INDEXES.education_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.education_index, avarageByCitiesIndex: overallAverage.education_index},
            {...health, cityIndex: MINSK_INDEXES.health_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.health_index, avarageByCitiesIndex: overallAverage.health_index},
            {...blago, cityIndex: MINSK_INDEXES.income_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.income_index, avarageByCitiesIndex: overallAverage.income_index},
            {...socpod, cityIndex: MINSK_INDEXES.social_protection_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.social_protection_index, avarageByCitiesIndex: overallAverage.social_protection_index},
            {...secure, cityIndex: MINSK_INDEXES.safety_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.safety_index, avarageByCitiesIndex: overallAverage.safety_index},
            {...liv, cityIndex: MINSK_INDEXES.housing_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.housing_index, avarageByCitiesIndex: overallAverage.housing_index},
            {...capital, cityIndex: MINSK_INDEXES.infrastructure_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.infrastructure_index, avarageByCitiesIndex: overallAverage.infrastructure_index}
        ],
    },
    // Гомель
    {
        slug: 'gomel',
        nodes: [
            {...demografic, cityIndex: GOMEL_INDEXES.demography_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.demography_index, avarageByCitiesIndex: overallAverage.demography_index},
            {...zanyat, cityIndex: GOMEL_INDEXES.employment_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.employment_index, avarageByCitiesIndex: overallAverage.employment_index},
            {...edu, cityIndex: GOMEL_INDEXES.education_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.education_index, avarageByCitiesIndex: overallAverage.education_index},
            {...health, cityIndex: GOMEL_INDEXES.health_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.health_index, avarageByCitiesIndex: overallAverage.health_index},
            {...blago, cityIndex: GOMEL_INDEXES.income_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.income_index, avarageByCitiesIndex: overallAverage.income_index},
            {...socpod, cityIndex: GOMEL_INDEXES.social_protection_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.social_protection_index, avarageByCitiesIndex: overallAverage.social_protection_index},
            {...secure, cityIndex: GOMEL_INDEXES.safety_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.safety_index, avarageByCitiesIndex: overallAverage.safety_index},
            {...liv, cityIndex: GOMEL_INDEXES.housing_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.housing_index, avarageByCitiesIndex: overallAverage.housing_index},
            {...capital, cityIndex: GOMEL_INDEXES.infrastructure_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.infrastructure_index, avarageByCitiesIndex: overallAverage.infrastructure_index}
        ],
    },
    // Гродно
    {
        slug: 'grodno',
        nodes: [
            {...demografic, cityIndex: GRODNO_INDEXES.demography_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.demography_index, avarageByCitiesIndex: overallAverage.demography_index},
            {...zanyat, cityIndex: GRODNO_INDEXES.employment_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.employment_index, avarageByCitiesIndex: overallAverage.employment_index},
            {...edu, cityIndex: GRODNO_INDEXES.education_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.education_index, avarageByCitiesIndex: overallAverage.education_index},
            {...health, cityIndex: GRODNO_INDEXES.health_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.health_index, avarageByCitiesIndex: overallAverage.health_index},
            {...blago, cityIndex: GRODNO_INDEXES.income_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.income_index, avarageByCitiesIndex: overallAverage.income_index},
            {...socpod, cityIndex: GRODNO_INDEXES.social_protection_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.social_protection_index, avarageByCitiesIndex: overallAverage.social_protection_index},
            {...secure, cityIndex: GRODNO_INDEXES.safety_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.safety_index, avarageByCitiesIndex: overallAverage.safety_index},
            {...liv, cityIndex: GRODNO_INDEXES.housing_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.housing_index, avarageByCitiesIndex: overallAverage.housing_index},
            {...capital, cityIndex: GRODNO_INDEXES.infrastructure_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.infrastructure_index, avarageByCitiesIndex: overallAverage.infrastructure_index}
        ],
    },
    // Витебск
    {
        slug: 'vitebsk',
        nodes: [
            {...demografic, cityIndex: VITEBSK_INDEXES.demography_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.demography_index, avarageByCitiesIndex: overallAverage.demography_index},
            {...zanyat, cityIndex: VITEBSK_INDEXES.employment_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.employment_index, avarageByCitiesIndex: overallAverage.employment_index},
            {...edu, cityIndex: VITEBSK_INDEXES.education_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.education_index, avarageByCitiesIndex: overallAverage.education_index},
            {...health, cityIndex: VITEBSK_INDEXES.health_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.health_index, avarageByCitiesIndex: overallAverage.health_index},
            {...blago, cityIndex: VITEBSK_INDEXES.income_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.income_index, avarageByCitiesIndex: overallAverage.income_index},
            {...socpod, cityIndex: VITEBSK_INDEXES.social_protection_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.social_protection_index, avarageByCitiesIndex: overallAverage.social_protection_index},
            {...secure, cityIndex: VITEBSK_INDEXES.safety_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.safety_index, avarageByCitiesIndex: overallAverage.safety_index},
            {...liv, cityIndex: VITEBSK_INDEXES.housing_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.housing_index, avarageByCitiesIndex: overallAverage.housing_index},
            {...capital, cityIndex: VITEBSK_INDEXES.infrastructure_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.infrastructure_index, avarageByCitiesIndex: overallAverage.infrastructure_index}
        ],
    },
    // Брест
    {
        slug: 'brest',
        nodes: [
            {...demografic, cityIndex: BREST_INDEXES.demography_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.demography_index, avarageByCitiesIndex: overallAverage.demography_index},
            {...zanyat, cityIndex: BREST_INDEXES.employment_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.employment_index, avarageByCitiesIndex: overallAverage.employment_index},
            {...edu, cityIndex: BREST_INDEXES.education_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.education_index, avarageByCitiesIndex: overallAverage.education_index},
            {...health, cityIndex: BREST_INDEXES.health_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.health_index, avarageByCitiesIndex: overallAverage.health_index},
            {...blago, cityIndex: BREST_INDEXES.income_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.income_index, avarageByCitiesIndex: overallAverage.income_index},
            {...socpod, cityIndex: BREST_INDEXES.social_protection_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.social_protection_index, avarageByCitiesIndex: overallAverage.social_protection_index},
            {...secure, cityIndex: BREST_INDEXES.safety_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.safety_index, avarageByCitiesIndex: overallAverage.safety_index},
            {...liv, cityIndex: BREST_INDEXES.housing_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.housing_index, avarageByCitiesIndex: overallAverage.housing_index},
            {...capital, cityIndex: BREST_INDEXES.infrastructure_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.infrastructure_index, avarageByCitiesIndex: overallAverage.infrastructure_index}
        ],
    },
    // Могилёв
    {
        slug: 'mogilev',
        nodes: [
            {...demografic, cityIndex: MOGILEV_INDEXES.demography_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.demography_index, avarageByCitiesIndex: overallAverage.demography_index},
            {...zanyat, cityIndex: MOGILEV_INDEXES.employment_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.employment_index, avarageByCitiesIndex: overallAverage.employment_index},
            {...edu, cityIndex: MOGILEV_INDEXES.education_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.education_index, avarageByCitiesIndex: overallAverage.education_index},
            {...health, cityIndex: MOGILEV_INDEXES.health_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.health_index, avarageByCitiesIndex: overallAverage.health_index},
            {...blago, cityIndex: MOGILEV_INDEXES.income_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.income_index, avarageByCitiesIndex: overallAverage.income_index},
            {...socpod, cityIndex: MOGILEV_INDEXES.social_protection_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.social_protection_index, avarageByCitiesIndex: overallAverage.social_protection_index},
            {...secure, cityIndex: MOGILEV_INDEXES.safety_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.safety_index, avarageByCitiesIndex: overallAverage.safety_index},
            {...liv, cityIndex: MOGILEV_INDEXES.housing_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.housing_index, avarageByCitiesIndex: overallAverage.housing_index},
            {...capital, cityIndex: MOGILEV_INDEXES.infrastructure_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.regional.infrastructure_index, avarageByCitiesIndex: overallAverage.infrastructure_index}
        ],
    },
    // Бобруйск
    {
        slug: 'bobruysk',
        nodes: [
            {...demografic, cityIndex: BOBRUYSK_INDEXES.demography_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.demography_index, avarageByCitiesIndex: overallAverage.demography_index},
            {...zanyat, cityIndex: BOBRUYSK_INDEXES.employment_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.employment_index, avarageByCitiesIndex: overallAverage.employment_index},
            {...edu, cityIndex: BOBRUYSK_INDEXES.education_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.education_index, avarageByCitiesIndex: overallAverage.education_index},
            {...health, cityIndex: BOBRUYSK_INDEXES.health_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.health_index, avarageByCitiesIndex: overallAverage.health_index},
            {...blago, cityIndex: BOBRUYSK_INDEXES.income_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.income_index, avarageByCitiesIndex: overallAverage.income_index},
            {...socpod, cityIndex: BOBRUYSK_INDEXES.social_protection_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.social_protection_index, avarageByCitiesIndex: overallAverage.social_protection_index},
            {...secure, cityIndex: BOBRUYSK_INDEXES.safety_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.safety_index, avarageByCitiesIndex: overallAverage.safety_index},
            {...liv, cityIndex: BOBRUYSK_INDEXES.housing_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.housing_index, avarageByCitiesIndex: overallAverage.housing_index},
            {...capital, cityIndex: BOBRUYSK_INDEXES.infrastructure_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.infrastructure_index, avarageByCitiesIndex: overallAverage.infrastructure_index}
        ],
    },
    // Барановичи
    {
        slug: 'baranovichi',
        nodes: [
            {...demografic, cityIndex: BARANOVICHI_INDEXES.demography_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.demography_index, avarageByCitiesIndex: overallAverage.demography_index},
            {...zanyat, cityIndex: BARANOVICHI_INDEXES.employment_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.employment_index, avarageByCitiesIndex: overallAverage.employment_index},
            {...edu, cityIndex: BARANOVICHI_INDEXES.education_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.education_index, avarageByCitiesIndex: overallAverage.education_index},
            {...health, cityIndex: BARANOVICHI_INDEXES.health_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.health_index, avarageByCitiesIndex: overallAverage.health_index},
            {...blago, cityIndex: BARANOVICHI_INDEXES.income_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.income_index, avarageByCitiesIndex: overallAverage.income_index},
            {...socpod, cityIndex: BARANOVICHI_INDEXES.social_protection_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.social_protection_index, avarageByCitiesIndex: overallAverage.social_protection_index},
            {...secure, cityIndex: BARANOVICHI_INDEXES.safety_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.safety_index, avarageByCitiesIndex: overallAverage.safety_index},
            {...liv, cityIndex: BARANOVICHI_INDEXES.housing_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.housing_index, avarageByCitiesIndex: overallAverage.housing_index},
            {...capital, cityIndex: BARANOVICHI_INDEXES.infrastructure_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.infrastructure_index, avarageByCitiesIndex: overallAverage.infrastructure_index}
        ],
    },
    // Борисов
    {
        slug: 'borisov',
        nodes: [
            {...demografic, cityIndex: BORISOV_INDEXES.demography_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.demography_index, avarageByCitiesIndex: overallAverage.demography_index},
            {...zanyat, cityIndex: BORISOV_INDEXES.employment_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.employment_index, avarageByCitiesIndex: overallAverage.employment_index},
            {...edu, cityIndex: BORISOV_INDEXES.education_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.education_index, avarageByCitiesIndex: overallAverage.education_index},
            {...health, cityIndex: BORISOV_INDEXES.health_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.health_index, avarageByCitiesIndex: overallAverage.health_index},
            {...blago, cityIndex: BORISOV_INDEXES.income_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.income_index, avarageByCitiesIndex: overallAverage.income_index},
            {...socpod, cityIndex: BORISOV_INDEXES.social_protection_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.social_protection_index, avarageByCitiesIndex: overallAverage.social_protection_index},
            {...secure, cityIndex: BORISOV_INDEXES.safety_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.safety_index, avarageByCitiesIndex: overallAverage.safety_index},
            {...liv, cityIndex: BORISOV_INDEXES.housing_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.housing_index, avarageByCitiesIndex: overallAverage.housing_index},
            {...capital, cityIndex: BORISOV_INDEXES.infrastructure_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.infrastructure_index, avarageByCitiesIndex: overallAverage.infrastructure_index}
        ],
    },
    // Пинск
    {
        slug: 'pinsk',
        nodes: [
            {...demografic, cityIndex: PINSK_INDEXES.demography_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.demography_index, avarageByCitiesIndex: overallAverage.demography_index},
            {...zanyat, cityIndex: PINSK_INDEXES.employment_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.employment_index, avarageByCitiesIndex: overallAverage.employment_index},
            {...edu, cityIndex: PINSK_INDEXES.education_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.education_index, avarageByCitiesIndex: overallAverage.education_index},
            {...health, cityIndex: PINSK_INDEXES.health_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.health_index, avarageByCitiesIndex: overallAverage.health_index},
            {...blago, cityIndex: PINSK_INDEXES.income_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.income_index, avarageByCitiesIndex: overallAverage.income_index},
            {...socpod, cityIndex: PINSK_INDEXES.social_protection_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.social_protection_index, avarageByCitiesIndex: overallAverage.social_protection_index},
            {...secure, cityIndex: PINSK_INDEXES.safety_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.safety_index, avarageByCitiesIndex: overallAverage.safety_index},
            {...liv, cityIndex: PINSK_INDEXES.housing_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.housing_index, avarageByCitiesIndex: overallAverage.housing_index},
            {...capital, cityIndex: PINSK_INDEXES.infrastructure_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.infrastructure_index, avarageByCitiesIndex: overallAverage.infrastructure_index}
        ],
    },
    // Орша
    {
        slug: 'orsha',
        nodes: [
            {...demografic, cityIndex: ORSHA_INDEXES.demography_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.demography_index, avarageByCitiesIndex: overallAverage.demography_index},
            {...zanyat, cityIndex: ORSHA_INDEXES.employment_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.employment_index, avarageByCitiesIndex: overallAverage.employment_index},
            {...edu, cityIndex: ORSHA_INDEXES.education_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.education_index, avarageByCitiesIndex: overallAverage.education_index},
            {...health, cityIndex: ORSHA_INDEXES.health_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.health_index, avarageByCitiesIndex: overallAverage.health_index},
            {...blago, cityIndex: ORSHA_INDEXES.income_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.income_index, avarageByCitiesIndex: overallAverage.income_index},
            {...socpod, cityIndex: ORSHA_INDEXES.social_protection_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.social_protection_index, avarageByCitiesIndex: overallAverage.social_protection_index},
            {...secure, cityIndex: ORSHA_INDEXES.safety_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.safety_index, avarageByCitiesIndex: overallAverage.safety_index},
            {...liv, cityIndex: ORSHA_INDEXES.housing_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.housing_index, avarageByCitiesIndex: overallAverage.housing_index},
            {...capital, cityIndex: ORSHA_INDEXES.infrastructure_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.infrastructure_index, avarageByCitiesIndex: overallAverage.infrastructure_index}
        ],
    },
    // Мозырь
    {
        slug: 'mozir',
        nodes: [
            {...demografic, cityIndex: MOZIR_INDEXES.demography_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.demography_index, avarageByCitiesIndex: overallAverage.demography_index},
            {...zanyat, cityIndex: MOZIR_INDEXES.employment_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.employment_index, avarageByCitiesIndex: overallAverage.employment_index},
            {...edu, cityIndex: MOZIR_INDEXES.education_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.education_index, avarageByCitiesIndex: overallAverage.education_index},
            {...health, cityIndex: MOZIR_INDEXES.health_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.health_index, avarageByCitiesIndex: overallAverage.health_index},
            {...blago, cityIndex: MOZIR_INDEXES.income_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.income_index, avarageByCitiesIndex: overallAverage.income_index},
            {...socpod, cityIndex: MOZIR_INDEXES.social_protection_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.social_protection_index, avarageByCitiesIndex: overallAverage.social_protection_index},
            {...secure, cityIndex: MOZIR_INDEXES.safety_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.safety_index, avarageByCitiesIndex: overallAverage.safety_index},
            {...liv, cityIndex: MOZIR_INDEXES.housing_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.housing_index, avarageByCitiesIndex: overallAverage.housing_index},
            {...capital, cityIndex: MOZIR_INDEXES.infrastructure_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.infrastructure_index, avarageByCitiesIndex: overallAverage.infrastructure_index}
        ],
    },
    // Лида
    {
        slug: 'lida',
        nodes: [
            {...demografic, cityIndex: LIDA_INDEXES.demography_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.demography_index, avarageByCitiesIndex: overallAverage.demography_index},
            {...zanyat, cityIndex: LIDA_INDEXES.employment_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.employment_index, avarageByCitiesIndex: overallAverage.employment_index},
            {...edu, cityIndex: LIDA_INDEXES.education_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.education_index, avarageByCitiesIndex: overallAverage.education_index},
            {...health, cityIndex: LIDA_INDEXES.health_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.health_index, avarageByCitiesIndex: overallAverage.health_index},
            {...blago, cityIndex: LIDA_INDEXES.income_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.income_index, avarageByCitiesIndex: overallAverage.income_index},
            {...socpod, cityIndex: LIDA_INDEXES.social_protection_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.social_protection_index, avarageByCitiesIndex: overallAverage.social_protection_index},
            {...secure, cityIndex: LIDA_INDEXES.safety_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.safety_index, avarageByCitiesIndex: overallAverage.safety_index},
            {...liv, cityIndex: LIDA_INDEXES.housing_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.housing_index, avarageByCitiesIndex: overallAverage.housing_index},
            {...capital, cityIndex: LIDA_INDEXES.infrastructure_index.toFixed(2).replace('.', ','), avarageByClaster: averagesBySlug.sputnik.infrastructure_index, avarageByCitiesIndex: overallAverage.infrastructure_index}
        ],
    }
];
