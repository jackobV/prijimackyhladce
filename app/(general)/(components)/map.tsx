"use client"
import React from 'react'
import { GoogleMap, useJsApiLoader,Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from "react"
const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};
const apikey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
export default function Map() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: apikey || ""
    })
    if (!isLoaded) return <div>Načítám...</div>;
    function MapF(){
        const center = useMemo(()=>({lat:50.049370,lng:14.453360}),[]);
        return(
            <div className="w-full h-full">
                <GoogleMap zoom={8} center={center} mapContainerClassName="map-container">
                    <Marker position={{lat:49.68749,lng:14.00868}} />
                    <Marker position={{lat:50.049370,lng:14.453360}} />
                </GoogleMap>

            </div>
        )
    }
    return <MapF />
}
