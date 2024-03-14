import React from "react"



export default function OneRepMaxCalc(weight, reps) {
    if (!Number.isInteger(weight) || weight <= 0 || !Number.isInteger(reps) || reps <= 0) {
        return "Please enter valid positive integers for weight and reps";
    } else {
        const calculatedOneRepMax = Math.round(weight * (36 / (37 - reps)));
        return calculatedOneRepMax;
    }
}