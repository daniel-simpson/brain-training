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

import { Spacing, Colours } from "../theme";

const styles = StyleSheet.create({
  tile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing.small,
    marginBottom: Spacing.medium,
    borderWidth: 1,
    borderColor: Colours.dark,
  },
});
