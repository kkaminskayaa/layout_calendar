report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Calendar_initial_state.png",
        "test": "../bitmaps_test/20240924-153654/Calendar_initial_state.png",
        "selector": "body",
        "fileName": "Calendar_initial_state.png",
        "label": "Calendar initial state",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.5,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/calendar/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.4709879557291667,
          "misMatchPercentage": "0.47",
          "analysisTime": 84
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Calendar_day_with_hover_effect.png",
        "test": "../bitmaps_test/20240924-153654/Calendar_day_with_hover_effect.png",
        "selector": "body",
        "fileName": "Calendar_day_with_hover_effect.png",
        "label": "Calendar day with hover effect",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.5,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/calendar/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.9860992431640625,
          "misMatchPercentage": "0.99",
          "analysisTime": 84
        },
        "diffImage": "../bitmaps_test/20240924-153654/failed_diff_Calendar_day_with_hover_effect.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Calendar_starting_from_Wednesday.png",
        "test": "../bitmaps_test/20240924-153654/Calendar_starting_from_Wednesday.png",
        "selector": "body",
        "fileName": "Calendar_starting_from_Wednesday.png",
        "label": "Calendar starting from Wednesday",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.5,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/calendar/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.4709879557291667,
          "misMatchPercentage": "0.47",
          "analysisTime": 85
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Calendar_with_length_of_29_days.png",
        "test": "../bitmaps_test/20240924-153654/Calendar_with_length_of_29_days.png",
        "selector": "body",
        "fileName": "Calendar_with_length_of_29_days.png",
        "label": "Calendar with length of 29 days",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.5,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/calendar/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.4253387451171875,
          "misMatchPercentage": "0.43",
          "analysisTime": 81
        }
      },
      "status": "pass"
    }
  ]
});