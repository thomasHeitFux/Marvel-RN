import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import CharacterCard from './CharacterCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { getCharacters } from '../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const { characters } = useSelector((state) => state.userReducer)

  useEffect(() => {
    dispatch(getCharacters())
    setLoading(false)
  }, []);

  function searchCharacter() {
    if (search !== '') {
      setLoading(true);
      dispatch(getCharacters(search))
      setLoading(false)
    } else {
      setLoading(true);
      dispatch(getCharacters())
      setLoading(false)
    }
  }
  const loadMoreItems = () => {
    setOffset(offset + 10)
    setLimit(limit + 10)
  }

  const renderLoader = () => {
    return (
      <View style={{ marginBottom: 50 }}>
        <ActivityIndicator size="large" color="#0000ff" style={{ justifyContent: 'center', alignItems: 'center' }} />
      </View>
    )
  }
  return (
    <View>
      {isLoading
        ? <ActivityIndicator size="large" color="#0000ff" style={{ justifyContent: 'center', alignItems: 'center' }} />
        : (
          <>
            <Searchbar
              placeholder="Search for character..."
              onChangeText={value => setSearch(value)}
              value={search}
              onIconPress={searchCharacter}
              onSubmitEditing={searchCharacter}
            />
            <FlatList
              data={characters}
              keyExtractor={({ id }) => id.toString()}
              onEndReached={loadMoreItems}
              onEndReachedTShreshold={0}
              renderItem={({ item }) => (
                <CharacterCard
                  id={item.id}
                  image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                  name={item.name} />
              )}
            />
          </>

        )
      }
    </View>
  );
}