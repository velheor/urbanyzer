"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useCallback } from "react";
import {useRouter} from "next/navigation";
import Typography from "@mui/material/Typography";

const containerStyle = {
    width: "100%",
    height: "600px",
};

// Координаты областных городов Беларуси
const cities = [
    { name: "Минск", lat: 53.9045, lng: 27.5615, slug: 'minsk' },
    { name: "Гомель", lat: 52.4242, lng: 31.0143, slug: 'gomel' },
    { name: "Могилёв", lat: 53.8945, lng: 30.3307, slug: 'mogilev' },
    { name: "Витебск", lat: 55.1848, lng: 30.2016, slug: 'vitebsk' },
    { name: "Гродно", lat: 53.6694, lng: 23.8131, slug: 'grodno' },
    { name: "Брест", lat: 52.0976, lng: 23.7341, slug: 'brest' },
    { name: "Бобруйск", lat: 53.1464, lng: 29.2055, slug: 'bobruysk' },
    { name: "Барановичи", lat: 53.1327, lng: 26.0139, slug: 'baranovichi' },
    { name: "Пинск", lat: 52.1293, lng: 26.0747, slug: 'pinsk' },
    { name: "Орша", lat: 54.5048, lng: 30.4172, slug: 'orsha' },
    { name: "Мозырь", lat: 52.0500, lng: 29.2456, slug: 'mozir' },
    { name: "Лида", lat: 53.8956, lng: 25.2958, slug: 'lida' },
];

const defaultCenter = {
    lat: 53.7098, // Центр Беларуси
    lng: 27.9534,
};

export default function GoogleMapComponent() {
    const router = useRouter()
    const handleMarkerClick = useCallback((city: any) => {
         if (city?.slug) {
             router.push(`city_profile/${city.slug}`);
         }

        console.log(`Координаты ${city.name}:`, {
            latitude: city.lat,
            longitude: city.lng,
        });
    }, []);

    return (
        <LoadScript loadingElement={<Typography sx={{ fontSize: '35px', height: '100px', color: 'hsl(210, 98%, 48%)', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>Идёт загрузка карты, подождите...</Typography>}
                    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                zoom={6}
            >
                {cities.map((city) => (
                    <Marker
                        key={city.name}
                        position={{ lat: city.lat, lng: city.lng }}
                        title={city.name}
                        onClick={() => handleMarkerClick(city)}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
}