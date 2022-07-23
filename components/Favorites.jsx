import { FlatList,Text } from "react-native";
import * as React from 'react';
import CharacterCard from './CharacterCard';


export default function Favorites(){

return(
    <>
    <Text>
        Favorites
    </Text>
    {/* <FlatList
 data={data}
 keyExtractor={({ id }) => id.toString()}
 renderItem={({ item }) => (
     <CharacterCard
     id={item.id}
     image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
     name={item.name} />
     )}
/> */}
     </>
)

}

 