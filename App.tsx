import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, ScrollView } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalTile from "./components/GoalTile";

export default function App() {
  const [goals, setGoals] = useState<string[]>([]);

  function addCourseGoal(newGoalText: string) {
    if (goals.indexOf(newGoalText) > -1) {
      return;
    }
    setGoals([...goals, newGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onGoalAdd={addCourseGoal} />

      <ScrollView>
        {goals.map((goalTitle) => (
          <GoalTile key={goalTitle} title={goalTitle} />
        ))}
      </ScrollView>
    </View>
  );
}

import { Spacing } from "./theme";

const styles = StyleSheet.create({
  appContainer: {
    padding: Spacing.large,
  },
});
