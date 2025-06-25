interface City {
    id: number;
    name: string;
    slug: string;
    scores: {
        demography_index: number;
        health_index: number;
        employment_index: number;
        education_index: number;
        income_index: number;
        housing_index: number;
        social_protection_index: number;
        safety_index: number;
        infrastructure_index: number;
    };
}

// Бобруйск
export const BOBRUYSK_INDEXES = {
    demography_index: 0.82,
    health_index: 0.89,
    employment_index: 0.91,
    education_index: 0.92,
    income_index: 0.90,
    housing_index: 0.85,
    social_protection_index: 0.88,
    safety_index: 0.90,
    infrastructure_index: 0.93
};

// Барановичи
export const BARANOVICHI_INDEXES = {
    demography_index: 0.65,
    health_index: 0.68,
    employment_index: 0.73,
    education_index: 0.75,
    income_index: 0.69,
    housing_index: 0.64,
    social_protection_index: 0.66,
    safety_index: 0.76,
    infrastructure_index: 0.69
};

// Борисов
export const BORISOV_INDEXES = {
    demography_index: 0.74,
    health_index: 0.75,
    employment_index: 0.78,
    education_index: 0.81,
    income_index: 0.76,
    housing_index: 0.70,
    social_protection_index: 0.72,
    safety_index: 0.80,
    infrastructure_index: 0.75
};

// Пинск
export const PINSK_INDEXES = {
    demography_index: 0.68,
    health_index: 0.70,
    employment_index: 0.74,
    education_index: 0.77,
    income_index: 0.70,
    housing_index: 0.66,
    social_protection_index: 0.68,
    safety_index: 0.78,
    infrastructure_index: 0.71
};

// Орша
export const ORSHA_INDEXES = {
    demography_index: 0.72,
    health_index: 0.76,
    employment_index: 0.80,
    education_index: 0.85,
    income_index: 0.79,
    housing_index: 0.68,
    social_protection_index: 0.71,
    safety_index: 0.83,
    infrastructure_index: 0.77
};

// Мозырь
export const MINSK_INDEXES = {
    demography_index: 0.82,
    health_index: 0.89,
    employment_index: 0.91,
    education_index: 0.92,
    income_index: 0.90,
    housing_index: 0.85,
    social_protection_index: 0.88,
    safety_index: 0.90,
    infrastructure_index: 0.93
};

export const GRODNO_INDEXES = {
    demography_index: 0.76,
    health_index: 0.77,
    employment_index: 0.80,
    education_index: 0.83,
    income_index: 0.78,
    housing_index: 0.72,
    social_protection_index: 0.75,
    safety_index: 0.82,
    infrastructure_index: 0.77
};

export const BREST_INDEXES = {
    demography_index: 0.74,
    health_index: 0.78,
    employment_index: 0.82,
    education_index: 0.87,
    income_index: 0.81,
    housing_index: 0.70,
    social_protection_index: 0.73,
    safety_index: 0.85,
    infrastructure_index: 0.79
};

export const GOMEL_INDEXES = {
    demography_index: 0.62,
    health_index: 0.45,
    employment_index: 0.68,
    education_index: 0.71,
    income_index: 0.66,
    housing_index: 0.57,
    social_protection_index: 0.90,
    safety_index: 0.60,
    infrastructure_index: 0.63
};

export const VITEBSK_INDEXES = {
    demography_index: 0.56,
    health_index: 0.58,
    employment_index: 0.61,
    education_index: 0.63,
    income_index: 0.57,
    housing_index: 0.54,
    social_protection_index: 0.55,
    safety_index: 0.62,
    infrastructure_index: 0.58
};

export const LIDA_INDEXES = {
    demography_index: 0.60,
    health_index: 0.82,
    employment_index: 0.66,
    education_index: 0.68,
    income_index: 0.43,
    housing_index: 0.55,
    social_protection_index: 0.58,
    safety_index: 0.68,
    infrastructure_index: 0.60
};
export const MOGILEV_INDEXES = {
    demography_index: 0.13,
    health_index: 0.55,
    employment_index: 0.58,
    education_index: 0.60,
    income_index: 0.54,
    housing_index: 0.90,
    social_protection_index: 0.52,
    safety_index: 0.59,
    infrastructure_index: 0.55
};

export const MOZIR_INDEXES = {
    demography_index: 0.52,
    health_index: 0.54,
    employment_index: 0.57,
    education_index: 0.59,
    income_index: 0.53,
    housing_index: 0.49,
    social_protection_index: 0.51,
    safety_index: 0.58,
    infrastructure_index: 0.54
};
export const clustersList = [
    {
        name: 'Областные центры',
        slug: 'regional',
        cities: [
            {
                id: 1,
                name: 'Минск',
                slug: 'minsk',
                scores: MINSK_INDEXES
            },
            {
                id: 2,
                name: 'Гомель',
                slug: 'gomel',
                scores: GOMEL_INDEXES
            },
            {
                id: 3,
                name: 'Гродно',
                slug: 'grodno',
                scores: GRODNO_INDEXES
            },
            {
                id: 4,
                name: 'Витебск',
                slug: 'vitebsk',
                scores: VITEBSK_INDEXES
            },
            {
                id: 5,
                name: 'Брест',
                slug: 'brest',
                scores: BREST_INDEXES
            },
            {
                id: 6,
                name: 'Могилев',
                slug: 'mogilev',
                scores: MOGILEV_INDEXES
            }
        ]
    },
    {
        name: 'Крупные города',
        slug: 'sputnik',
        cities: [
            {
                id: 1,
                name: 'Бобруйск',
                slug: 'bobruysk',
                scores: BOBRUYSK_INDEXES
            },
            {
                id: 2,
                name: 'Барановичи',
                slug: 'baranovichi',
                scores: BARANOVICHI_INDEXES
            },
            {
                id: 3,
                name: 'Борисов',
                slug: 'borisov',
                scores: BORISOV_INDEXES
            },
            {
                id: 4,
                name: 'Пинск',
                slug: 'pinsk',
                scores: PINSK_INDEXES
            },
            {
                id: 5,
                name: 'Орша',
                slug: 'orsha',
                scores: ORSHA_INDEXES
            },
            {
                id: 6,
                name: 'Мозырь',
                slug: 'mozir',
                scores: MOZIR_INDEXES
            },
            {
                id: 7,
                name: 'Лида',
                slug: 'lida',
                scores: LIDA_INDEXES
            }
        ]
    }
];

// Получаем список всех индексов (предполагается, что они одинаковы у всех городов)
const indexKeys = Object.keys(clustersList[0].cities[0].scores);

// Расчёт средних значений по каждому slug
export const averagesBySlug: Record<string, Record<string, number>> = {};

clustersList.forEach(cluster => {
    const sums: Record<string, number> = Object.fromEntries(indexKeys.map(key => [key, 0]));
    const cityCount = cluster.cities.length;

    cluster.cities.forEach(city => {
        indexKeys.forEach(key => {
            sums[key] += city.scores[key];
        });
    });

    averagesBySlug[cluster.slug] = {};
    indexKeys.forEach(key => {
        averagesBySlug[cluster.slug][key] = parseFloat((sums[key] / cityCount).toFixed(3));
    });
});

// Расчёт общего среднего по всем городам
const allCities = clustersList.flatMap(cluster => cluster.cities);
const totalSums: Record<string, number> = Object.fromEntries(indexKeys.map(key => [key, 0]));

allCities.forEach(city => {
    indexKeys.forEach(key => {
        totalSums[key] += city.scores[key];
    });
});

export const overallAverage: Record<string, number> = {};
indexKeys.forEach(key => {
    overallAverage[key] = parseFloat((totalSums[key] / allCities.length).toFixed(3));
});


const createCityItems = (indexes) => [
    {
        id: "Демографический потенциал",
        label: "Демографический потенциал",
        value: indexes.demography_index,
        color: "rgb(64, 84, 179)"
    },
    {
        id: "Занятости и условий труда",
        label: "Занятости и условий труда",
        value: indexes.employment_index,
        color: "rgb(215, 90, 0)"
    },
    {
        id: "Доступность образования",
        label: "Доступность образования",
        value: indexes.education_index,
        color: "rgb(242, 69, 61)"
    },
    {
        id: "Здоровье и медицина",
        label: "Здоровье и медицина",
        value: indexes.health_index,
        color: "rgb(44, 152, 240)"
    },
    {
        id: "Материальное благополучие",
        label: "Материальное благополучие",
        value: indexes.income_index,
        color: "rgb(97, 125, 138)"
    },
    {
        id: "Социальная поддержка",
        label: "Социальная поддержка",
        value: indexes.social_protection_index,
        color: "rgb(208, 162, 0)"
    },
    {
        id: "Безопасность и правопорядок",
        label: "Безопасность и правопорядок",
        value: indexes.safety_index,
        color: "rgb(80, 174, 85)"
    },
    {
        id: "Жилищные условия",
        label: "Жилищные условия",
        value: indexes.housing_index,
        color: "rgb(31, 173, 193)"
    },
    {
        id: "Развитие человеческого капитала",
        label: "Развитие человеческого капитала",
        value: indexes.infrastructure_index,
        color: "rgb(103, 64, 180)"
    }
];

export const citiesInfo = [
    {
        name: 'grodno',
        items: createCityItems(GRODNO_INDEXES)
    },
    {
        name: 'minsk',
        items: createCityItems(MINSK_INDEXES)
    },
    {
        name: 'gomel',
        items: createCityItems(GOMEL_INDEXES)
    },
    {
        name: 'vitebsk',
        items: createCityItems(VITEBSK_INDEXES)
    },
    {
        name: 'brest',
        items: createCityItems(BREST_INDEXES)
    },
    {
        name: 'mogilev',
        items: createCityItems(MOGILEV_INDEXES)
    },
    {
        name: 'bobruysk',
        items: createCityItems(BOBRUYSK_INDEXES)
    },
    {
        name: 'baranovichi',
        items: createCityItems(BARANOVICHI_INDEXES)
    },
    {
        name: 'borisov',
        items: createCityItems(BORISOV_INDEXES)
    },
    {
        name: 'pinsk',
        items: createCityItems(PINSK_INDEXES)
    },
    {
        name: 'orsha',
        items: createCityItems(ORSHA_INDEXES)
    },
    {
        name: 'mozir',
        items: createCityItems(MOZIR_INDEXES)
    },
    {
        name: 'lida',
        items: createCityItems(LIDA_INDEXES)
    }
];
