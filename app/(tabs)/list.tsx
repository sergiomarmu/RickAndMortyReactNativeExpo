import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";

import { fetchCharacterByPage } from "../data/service/api";

import Button from "@/component/Button";
import Card from "@/component/Card";

import CharacterPager from "../domain/model/charactersPager";

export default function CharacterListTab() {
  const [characters, setCharacters] = useState<CharacterPager | null>(null);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetchCharacterByPage(page);
      setCharacters(response.data.results)
      console.log(characters)
    } catch (error) {
      // TODO handle error
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const onPreviousClick = () => {
    if (page > 1) {
      const newPage = page - 1
      setPage(newPage)
    }
  }

  const onNextClick = () => {
    const newPage = page + 1
    setPage(newPage)
  }

  if (characters == null)
    return;

  return (
    <View style={styles.container}>
      {
         Array.isArray(characters) && characters.length > 0
         ? (
             <FlatList
               data={characters}
               keyExtractor={(item) => item.id.toString()}
               renderItem={({ item }) => (
                 <Card
                   label={item.name}
                   imageSource={item.image}
                   status={item.status}
                   onPress={() => { /* tu lógica de onPress */ }}
                 />
               )}
             />
           )
         : <></>
      }

      <View style={styles.row}>
        {page != 1 ? <Button label="Previous" onPress={onPreviousClick} /> : <></>}
        <Button label="Next" onPress={onNextClick} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  row: {
    flexDirection: 'row',
    marginVertical: 8
  },
  text: {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 30,
    color: '#FFFFFF'
  }
});
