
import { stage } from "@/types/step.type";
import axios from "./axios";
import React from "react";

export async function getAllStages(
  state: React.Dispatch<React.SetStateAction<stage[]>>
): Promise<void> {
  try {
    const query = await axios.get("/stage");
    console.log(query.data);
    
    if ("error" in query.data) throw new Error(query.data.error);
    const data: stage[] = query.data;
    state(data.sort((a,b)=>a.name > b.name?1:-1));
    return;
  } catch (error) {
    // Handle error here
    console.log(error);
  }
}

// export async function goToSubscribeMembreship (id: string): Promise<void> {
//   try {
//     const query = await axios.get("/payment/subscribe/" + id);
//     // if ("error" in query.data) throw new Error(query.data.error);
//     window.open(query.data, "_blank");
//     return;
//   } catch (error) {
//     // Handle error here
//     console.log(error);
//   }
// }