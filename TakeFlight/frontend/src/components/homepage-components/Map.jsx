import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

// STYLING
import './homepage-styling/map.css'



function Map() {
    const [flights, setFlights] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await fetch(`https://corsproxy.io/?https://api.aviationstack.com/v1/flights?access_key=177b917171501ee07ed8a6d238faafad`)
                const data = await response.json()
                console.log(data)

                if (data && data.data) {
                    setFlights(data.data.slice(0,10)) // show 1st 10 flights
                }
            } catch (error) {
                console.error('Error fetching flight data', error)
            } finally {
                setLoading(false)
            }
        }
        fetchFlights()
    }, [])

    return (
    <div className='mapCont'>
      {loading ? (
        <p>Loading flights...</p>
      ) : (
        <>
        <div 
            className="mapContainer" 
            style={{ 
                height: "400px", 
                width: "100%", 
                // marginTop: "2rem" 
            }}>
          <MapContainer 
            center={[39.5, -98.35]} 
            zoom={4} 
            scrollWheelZoom={false} // Disable scroll zoom to continue down Homepage
            style={{ 
                height: "100%", 
                width: "100%" 
            }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />
            <Marker position={[40.7128, -74.0060]}>
              <Popup>New York City</Popup>
            </Marker>
            <Marker position={[34.0522, -118.2437]}>
              <Popup>Los Angeles</Popup>
            </Marker>
          </MapContainer>
        </div>
        </>
      )}
      
    </div>
  )
}

export default Map
