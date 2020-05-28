import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface GoalTileProps {
  title: string;
}

export default function GoalTile(props: GoalTileProps) {
  return (
    <View style={styles.tile}>
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
