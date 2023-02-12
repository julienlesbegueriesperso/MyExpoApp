import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

const RADIUS = 20;

const styles = StyleSheet.create({
    finger: {
      borderColor: "#CCC",
      borderWidth: 4,
      borderRadius: RADIUS * 2,
      width: RADIUS * 2,
      height: RADIUS * 2,
      backgroundColor: "pink",
      position: "absolute"
    }
  });

export interface FingerProps {
    position?: number[]
}

export default function Finger (props: FingerProps){
    
    const x = props.position?props.position[0] - RADIUS / 2:0;
    const y = props.position?props.position[1] - RADIUS / 2:0;
    return (
        <View style={[styles.finger, { left: x, top: y }]} />
      );
}