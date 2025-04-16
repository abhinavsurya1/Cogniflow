
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Define types for Google Maps to fix TypeScript errors
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

interface GoogleMapProps {
  height?: string;
  showInfoWindow?: boolean;
}

const GoogleMap = ({ height = "400px", showInfoWindow = true }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapError, setMapError] = useState<boolean>(false);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  
  useEffect(() => {
    // Initialize the map
    const initMap = () => {
      if (!mapRef.current) return;
      
      try {
        // San Francisco coordinates
        const sanFrancisco = { lat: 37.7749, lng: -122.4194 };
        
        // Create the map instance
        const map = new window.google.maps.Map(mapRef.current, {
          center: sanFrancisco,
          zoom: 13,
          styles: [
            {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]
            },
            {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
            },
            {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [{"visibility": "off"}]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [{"color": "#fefefe"}, {"lightness": 20}]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [{"color": "#f5f5f5"}, {"lightness": 21}]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [{"color": "#dedede"}, {"lightness": 21}]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [{"color": "#8B5CF6"}, {"lightness": 60}]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [{"color": "#8B5CF6"}, {"lightness": 50}, {"weight": 0.2}]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [{"color": "#ffffff"}, {"lightness": 18}]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
            },
            {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [{"color": "#f2f2f2"}, {"lightness": 19}]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
            }
          ],
          disableDefaultUI: true,
          zoomControl: true,
          scrollwheel: false
        });
        
        mapInstanceRef.current = map;
        setMapLoaded(true);
        console.log("Map instance created successfully");
        
        // Add marker for the office
        const marker = new window.google.maps.Marker({
          position: sanFrancisco,
          map,
          title: "NeuroSync AI Office",
          animation: window.google.maps.Animation.DROP,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#8B5CF6",
            fillOpacity: 0.7,
            strokeWeight: 2,
            strokeColor: "#FFFFFF"
          }
        });
        
        if (showInfoWindow) {
          // Add info window
          const infowindow = new window.google.maps.InfoWindow({
            content: `<div style="padding: 8px; font-family: system-ui, sans-serif;">
                        <h3 style="font-weight: 600; margin-bottom: 5px;">NeuroSync AI Headquarters</h3>
                        <p style="margin: 0; font-size: 14px;">123 AI Boulevard, San Francisco</p>
                      </div>`
          });
          
          // Open info window when marker is clicked
          marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map
            });
          });
          
          // Automatically open info window
          setTimeout(() => {
            infowindow.open({
              anchor: marker,
              map
            });
          }, 1000);
        }
      } catch (error) {
        console.error("Error initializing Google Maps:", error);
        setMapError(true);
      }
    };
    
    // Load Google Maps API
    const loadGoogleMaps = () => {
      // Remove any existing script to prevent duplications
      const existingScript = document.getElementById('google-maps-api');
      if (existingScript) {
        existingScript.remove();
      }
      
      if (window.google && window.google.maps) {
        // API already loaded, just initialize the map
        console.log("Google Maps API already loaded");
        initMap();
        return;
      }
      
      try {
        console.log("Loading Google Maps API");
        
        // Define callback function globally
        window.initMap = () => {
          initMap();
          console.log("Google Maps initialized successfully");
        };
        
        // Create script tag and load the API
        const script = document.createElement("script");
        script.id = 'google-maps-api';
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBHmgekbEp8LmZBqZXQoWQjEzLlXPlbQ6c&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onerror = () => {
          console.error("Failed to load Google Maps API");
          setMapError(true);
        };
        document.head.appendChild(script);
        
        return () => {
          // Remove the script on cleanup
          if (script.parentNode) {
            document.head.removeChild(script);
          }
        };
      } catch (error) {
        console.error("Error loading Google Maps:", error);
        setMapError(true);
      }
    };
    
    loadGoogleMaps();
    
    // Cleanup function
    return () => {
      // Only remove the global initMap function if component is unmounted
      if (window.initMap) {
        // Instead of deleting which can cause issues, set to a no-op function
        window.initMap = () => {};
      }
    };
  }, [showInfoWindow]);
  
  // If there's an error loading the map, show an error state
  if (mapError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-card/50 rounded-lg p-8 text-center" style={{ height }}>
        <div className="rounded-full bg-accent/10 p-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h3 className="text-lg font-medium mb-2">Unable to load Google Maps</h3>
        <p className="text-muted-foreground text-sm max-w-md">
          There was a problem loading the map. Please check your internet connection and try again.
        </p>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full rounded-lg overflow-hidden relative"
      style={{ height }}
    >
      <div 
        ref={mapRef} 
        className="w-full h-full bg-gray-100 rounded-lg"
        aria-label="Google Map showing office location"
        id="google-map-container"
      />
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-card/50">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GoogleMap;
