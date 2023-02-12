const MoveFinger = (entities: any, { touches }: any) => {

    //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
    //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
    //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  
    touches.filter((t: any) => t.type === "move").forEach((t: any) => {
        console.log(t.id)
      let finger = entities[t.id];
      if (finger && finger.position) {
        finger.position = [
          finger.position[0] + t.delta.pageX,
          finger.position[1] + t.delta.pageY
        ];
      }
    });
  
    return entities;
  };
  
  export { MoveFinger };