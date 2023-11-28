import React from "react"



export default function  OneRepMaxCalc(weight, reps) {
    
    if (!Number.isInteger(weight) || weight <= 0 || !Number.isInteger(reps) || reps <=0 ) {
        return ("Use positive integers for weight and reps");
    }
    
    else {
    let OneRepMax = weight * (1 + (reps / 30 ));
    return Math.round(OneRepMax)};
}