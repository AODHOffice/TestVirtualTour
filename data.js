var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.03404669388435799,
        "pitch": -0.013494903143095982,
        "fov": 1.6313838466324468
      },
      "linkHotspots": [
        {
          "yaw": -3.0504212906772654,
          "pitch": 0.08741106575839552,
          "rotation": 0,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.8927215414079637
      },
      "linkHotspots": [
        {
          "yaw": 0.7414590238880496,
          "pitch": 0.005643649971357689,
          "rotation": 0,
          "target": "2-bathroom"
        },
        {
          "yaw": 3.1391731468049944,
          "pitch": -0.010437802618055159,
          "rotation": 0,
          "target": "0-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.90839375206893,
        "pitch": -0.06089417857846868,
        "fov": 1.8927215414079637
      },
      "linkHotspots": [
        {
          "yaw": 1.7922900578805105,
          "pitch": 0.042568760801952266,
          "rotation": 0,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
