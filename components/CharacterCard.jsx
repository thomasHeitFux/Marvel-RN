import * as React from 'react';
import { Text, View, Image, TouchableOpacity ,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({ image, name ,id}) {
	const navigation = useNavigation();
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			<TouchableOpacity style={{  
				flexDirection: 'row', backgroundColor: 'lightblue', minWidth: 320, margin: 8, borderRadius: 8, alignItems:'center',flex:1 }}
				onPress={() => navigation.navigate('Detail',{id:id})}>
				<Image 
				style={{ height: 50, width: 80,flex:2, borderRadius: 3 }} 
				source={{uri:image}}
				/> 
				<Text style={{flex:3, marginLeft: 15 }}>{name}</Text>
				<TouchableOpacity style={{flex:1, backgroundColor:'#778899',borderRadius:8,padding:16,marginLeft: 15}}><Text>Fav</Text></TouchableOpacity>
			</TouchableOpacity>
		</View>

	);
}