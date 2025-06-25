'use client';
import * as React from 'react';
import { PageContainer } from '@toolpad/core/PageContainer';
import CustomDataGrid from "@/app/components/CustomDataGrid";
import {columns, rows} from "@/app/mocks/gridOrdersData";
import {useParams} from "next/navigation";
import CityOneMainInfo from "@/app/components/CityOneMainInfo";
import Box from "@mui/material/Box";
import CollapsibleTable from "@/app/components/CollapsibleTable";
import {citiesWithData} from "@/app/mocks/tableData";

export default function CityProfilePage() {
    const params = useParams();
    const cityName = params.city_name;

    const cities = [
        {
            id: 1,
            name: 'Минск',
            slug: 'minsk',
            img: '/images/cities/Minsk.jpg',
            description: 'Столица Беларуси, политический и культурный центр страны с современной архитектурой. Известен широкими проспектами, развитой инфраструктурой и парком Победы.',
        },
        {
            id: 2,
            name: 'Гомель',
            slug: 'gomel',
            img: '/images/cities/Gomel.jpg',
            description: 'Второй по величине город страны, расположенный на реке Сож. Знаменит дворцово-парковым ансамблем Румянцевых-Паскевичей и крупными промышленными предприятиями.',
        },
        {
            id: 3,
            name: 'Гродно',
            slug: 'grodno',
            img: '/images/cities/Grodno.jpg',
            description: 'Город с богатым историческим наследием и уникальной архитектурой на берегу Немана. Сохранил старейшие действующие храмы и замок XIV века.',
        },
        {
            id: 4,
            name: 'Витебск',
            slug: 'vitebsk',
            img: '/images/cities/Vitebsk.jpg',
            description: 'Культурная столица Беларуси, родина Марка Шагала. Ежегодно принимает международный фестиваль искусств "Славянский базар".',
        },
        {
            id: 5,
            name: 'Брест',
            slug: 'brest',
            img: '/images/cities/Brest.jpg',
            description: 'Город-герой с легендарной Брестской крепостью. Важный транспортный узел на границе с Польшей и "ворота" в Беловежскую пущу.',
        },
        {
            id: 6,
            name: 'Могилёв',
            slug: 'mogilev',
            img: '/images/cities/Mogilev.jpg',
            description: 'Крупный промышленный центр на Днепре с барочной ратушей. Исторически известен как место пребывания Ставки Верховного Главнокомандующего в WWI.',
        },
        {
            id: 7,
            name: 'Бобруйск',
            slug: 'bobruysk',
            img: '/images/cities/bobruysk.jpg',
            description: 'Один из старейших городов Беларуси с мощной крепостью XIX века. Широко известен по литературным произведениям Ильфа и Петрова.',
        },
        {
            id: 8,
            name: 'Барановичи',
            slug: 'baranovichi',
            img: '/images/cities/baranovichi.jpg',
            description: 'Крупный железнодорожный узел между Минском и Брестом. Развитый промышленный центр с текстильными и машиностроительными предприятиями.',
        },
        {
            id: 9,
            name: 'Борисов',
            slug: 'borisov',
            img: '/images/cities/borisov.jpg',
            description: 'Город спортивной славы, родина хоккейного клуба "БАТЭ". Исторически известен битвой 1812 года на Березине.',
        },
        {
            id: 10,
            name: 'Орша',
            slug: 'orsha',
            img: '/images/cities/orsha.jpg',
            description: 'Древний город на слиянии Днепра и Оршицы с первой в Беларуси бумажной мельницей. Важный транспортный центр восточного региона.',
        },
        {
            id: 11,
            name: 'Мозырь',
            slug: 'mozir',
            img: '/images/cities/mozir.jpg',
            description: 'Нефтяная столица Беларуси с крупнейшим нефтеперерабатывающим заводом. Расположен на живописных холмах правого берега Припяти.',
        },
        {
            id: 12,
            name: 'Лида',
            slug: 'lida',
            img: '/images/cities/lida.jpg',
            description: 'Город-крепость с замком Гедимина XIV века. Ежегодно проводит международные рыцарские фестивали и славится пивоваренными традициями.',
        },
        {
            id: 13,
            name: 'Пинск',
            slug: 'pinsk',
            img: '/images/cities/pinsk.jpg',
            description: 'Столица Полесья с уникальной деревянной архитектурой и речным портом. Сохранил колорит полесских традиций и иезуитский коллегиум XVII века.',
        }
    ];


    const currentCity = cities.find((item) => item.slug === cityName)
    const tableData = citiesWithData.find((item: any) => item.slug === cityName)
  return (
    <Box>
        <CityOneMainInfo cityInfo={currentCity} />
        <CollapsibleTable cityName={currentCity?.name} dataTable={tableData?.nodes || []} />
    </Box>
  );
}
