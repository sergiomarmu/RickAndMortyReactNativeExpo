import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

import { fetchCharacterById } from "../data/service/api";
import Character from "../domain/model/character";

import Button from "@/component/Button";
import RoundImage from "@/component/RoundImage";

export default function CharacterTab() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [position, setPosition] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetchCharacterById(position);
      setCharacter(response.data)
    } catch (error) {
      // TODO handle error
    }
  };

  useEffect(() => {
    fetchData();
  }, [position]);

  const onPreviousClick = () => {
    if (position > 1) {
      const newPosition = position - 1
      setPosition(newPosition)
    }
  }

  const onNextClick = () => {
    const newPosition = position + 1
    setPosition(newPosition)
  }

  if (character == null)
    return;


  return (
    <View style={styles.container}>
      <RoundImage imageSource={character.image} />

      <Text style={styles.text}>{character.name}</Text>

      <View style={styles.row}>
        {position != 1 ? <Button label="Previous" onPress={onPreviousClick} /> : <></>}
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
