import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export interface GoalInputProps {
  onGoalAdd: (goal: string) => void;
}

export default function GoalInput(props: GoalInputProps) {
  const [newGoalText, setNewGoalText] = useState<string>("");

  function addNewGoal() {
    props.onGoalAdd(newGoalText);
    setNewGoalText("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.goalInput}
        placeholder="Course Goal"
        value={newGoalText}
        onChangeText={setNewGoalText}
      />

      <Button title=" + " onPress={addNewGoal} />
    </View>
  );
}

import { Spacing, Colours } from "../theme";
const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.small,
  },

  goalInput: {
    borderBottomColor: Colours.dark,
    borderBottomWidth: 1,
    marginBottom: Spacing.extrasmall,
  },
});
