# Graph data transformation

## Description

There's a schematic graphical representation of nodes and connections between them — like a devices connected using VLANs. Your task is only to transform the input data for the [ConnectionsGraph component](https://master--64efbbdd17b6d0944f4367db.chromatic.com/?path=/docs/components-connectionsgraph--docs)

## Required skills

- algorithm complexity estimation
- using `for`-loops, `map()`, `reduce()`, spread operator, etc.
- JavaScript data scructures knowledge
- graph theory basics: understanding nodes & edges

## Steps to do

1. Start the application, open `/graph` URL

2. Open `src/components/graph/graph-model.js`, find `transform(data)` function - here you need to implement your solution

3. Check the `data` array above: it contains links, each link object has the following structure:

   ```javascript
   {
      name: "Starwind", // string, mandatory
      color: "#FF36AB", // string, optional

      from: "A", // start node - string, mandatory
      to: "D" // end node - string, mandatory
      via: ["B", "C"] // intermediate nodes - string[], optional
   }
   ```

   You need to transform the `data` array like that:

   ```javascript
   [
     // nodes, should be unique
     {
       data: {
         id: "A",
       },
     },
     {
       data: {
         id: "B",
       },
     },
     {
       data: {
         id: "C",
       },
     },
     {
       data: {
         id: "D",
       },
     }

     // edges
     {
       data: {
         id: "A_B_Starwind", // unique edge id - string, required
         source: "A",
         target: "B",
         color: "#FF36AB",
         name: "Starwind",
       },
     },
     {
       data: {
         id: "B_C_Starwind",
         source: "B",
         target: "C",
         color: "#FF36AB",
         name: "Starwind",
       },
     },
     {
       data: {
         id: "C_D_Starwind",
         source: "C",
         target: "D",
         color: "#FF36AB",
         name: "Starwind",
       },
     }
     // ... + other nodes and edges, if any
   ];
   ```

4. If your solution is correct, you'll see the same result as shown below

## Final result

<img width="800" alt="React interview task v.2 Graph final result example" src="https://github.com/spanic/react-interview-task-v2/assets/15694775/cae9940e-1b62-4409-874a-58b744eec612" />
