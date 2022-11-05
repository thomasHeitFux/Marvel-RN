import * as React from 'react';
import { Text, View, Image, TouchableOpacity ,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react'
import {addFavorite,removeFav} from '../Redux/Actions'

export default function CharacterCard({ image, name ,id,isIn}) {
	const dispatch = useDispatch()
	const [favorite,setFavorite] = React.useState({image,name,id})
	const [isInFav,setIsInFav] = React.useState(false)
	const { favorites } = useSelector((state) => state.userReducer)
	
	useEffect(()=>{
		if (favorites.filter(e=>{e.id===id})||isIn) {
			setIsInFav(true)
		}
	},[])

	function handleFav() {
		if (favorites.find(e=>{e.id==id})) {
			alert('character already added to favorites')
		}
		else{
			setIsInFav(!isInFav)
			setFavorite({image,name,id})
			dispatch(addFavorite(favorite))
		}
	}
	function handleRemoveFav() {
		setIsInFav(!isInFav)
		dispatch(removeFav(id))
	}

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
				<TouchableOpacity style={{flex:1, backgroundColor:'#778899',borderRadius:8,padding:16,marginLeft: 15}}
				onPress={isInFav||isIn?()=>handleFav():()=>handleRemoveFav()}
				><Text>{isInFav||isIn?'fav':'remove'}</Text></TouchableOpacity>
			</TouchableOpacity>
		</View>

	);
}