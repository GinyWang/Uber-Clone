import React, { useRef, useEffect, RefObject, MutableRefObject } from "react";
import { Platform } from "react-native";
import tw from "tailwind-react-native-classnames";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
//utils
import {
  selectDestination,
  selectOrigin,
  setDestination,
  setOrigin,
  setTravelTimeInformation,
} from "../../../../slices/navSlice";
import { useAppDispatch, useAppSelector } from "../../../../utils/hooks";
//constants
import { GOOGLE_MAP_API_KEY } from "@env";

const Map = () => {
  const dispatch = useAppDispatch();
  const markers = {
    origin: {
      name: "Origin",
      place: useAppSelector((state) => selectOrigin(state.nav)),
    },
    destination: {
      name: "Destination",
      place: useAppSelector((state) => selectDestination(state.nav)),
    },
  };

  let mapRef = React.createRef<MapView>();
  const [originPlace, destinationPlace] = Object.values(markers).map(
    (marker) => marker.place
  );
  useEffect(() => {
    if (originPlace && destinationPlace && mapRef.current) {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, left: 50, bottom: 50 },
      });
      mapRef.current.fitToElements(false);
    }
  }, [originPlace, destinationPlace]);

  useEffect(() => {
    const getTravelTime = async () => {
      try {
        if (originPlace && destinationPlace) {
          const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${originPlace.location?.lat},${originPlace.location?.lng}&destinations=${destinationPlace.location?.lat},${destinationPlace.location?.lng}&key=${GOOGLE_MAP_API_KEY}`;
          const response = await fetch(url);
          const data = await response.json();
          if (data) console.log("data:", data.rows[0].elements[0]);
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getTravelTime();
  }, [originPlace, destinationPlace]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      initialRegion={{
        latitude: markers.origin.place?.location?.lat || 121,
        longitude: markers.origin.place?.location?.lng || 25,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {/*markers*/}
      {Object.values(markers).map(
        (marker) =>
          marker.place?.location && (
            <Marker
              coordinate={{
                latitude: marker.place.location.lat,
                longitude: marker.place.location.lng,
              }}
              title={marker.name}
              description={marker.place.description}
              identifier={marker.name}
              key={marker.name}
            />
          )
      )}
      {/*directions*/}
      {markers.origin?.place?.location && markers.destination.place?.location && (
        <MapViewDirections
          origin={{
            latitude: markers.origin.place.location.lat,
            longitude: markers.origin.place.location.lng,
          }}
          destination={{
            latitude: markers.destination.place.location.lat,
            longitude: markers.destination.place.location.lng,
          }}
          apikey={GOOGLE_MAP_API_KEY}
          strokeWidth={3}
          onError={(error) => {
            console.error(error);
          }}
        />
      )}
    </MapView>
  );
};

export default Map;
