// The data parameter of the Network constructor is an object which can contain different types of data. 
// The following properties are supported in the data object: nodes, edges - which are both arrays

var data = {
	// Nodes typically have an id and label. A node must contain at least a property id.
  // Nodes can have extra properties, used to define the shape and style of the nodes.

  
  "nodes": [
  {
    "id": "calapi.loblaw.ca",
    "title": "192.168.1.1",
    "label": "calapi.loblaw.ca",
    "chosen": true,
    
    "shape": "image",
    "image": "https://github.com/hodgigre/hcl2visjs/blob/master/img/compute-instance.png?raw=true"
  },
  {
    "id": "exstr01",
    "label": "gce\ntest\ntest2",
    'labelHightlightBold': "true",
    "cid": "calapi.loblaw.ca",
    
    "shape": "image",
    "image": "https://github.com/hodgigre/hcl2visjs/blob/master/img/compute-instance.png?raw=true"},
    {
    "id": "exstr02",
    "label": "gce\ntest\ntest2",
    'labelHightlightBold': "true",
    "cid": "calapi.loblaw.ca",
    
    "shape": "image",
    "image": "https://github.com/hodgigre/hcl2visjs/blob/master/img/compute-instance.png?raw=true"}

],
  // Edges are connections between nodes. 
  // An edge must at least contain properties from and to, both referring to the id of a node.
  // Edges can have extra properties, used to define the type and style.
  
  edges: [
  {
    "from": 1,
    "to": 2
  },
  {
    "from": 1,
    "to": 3
  },
  {
    "from": 2,
    "to": 4
  },
  {
    "from": 2,
    "to": 5
  }
]
};

  // create a network
  var container = document.getElementById('mynetwork');


  var data = {
    nodes: data.nodes,
    edges: data.edges
  };

	// Options can be used to customize the network.
	// Options are defined as a JSON object. All options are optional.
  var options = {};
  var network = new vis.Network(container, data, options);


