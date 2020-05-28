import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import GoalTile from "./components/GoalTile";

export default function App() {
  const [goals, setGoals] = useState<string[]>([]);
  let newGoalText = "DERP";

  return (
    <View style={{ padding: "30" }}>
      <View>
        <TextInput value={newGoalText} />
        <Button
          title="+"
          onPress={() => {
            if (goals.indexOf(newGoalText) > -1) {
              return;
            }

            setGoals([...goals, newGoalText]);
          }}
        />
      </View>
      <View>
        {goals.map((goalTitle) => (
          <GoalTile key={goalTitle} title={goalTitle} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
